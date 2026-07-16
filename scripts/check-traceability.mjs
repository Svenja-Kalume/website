#!/usr/bin/env node
/**
 * Harness check: enforces the points agreed in the concept.
 *
 * Checks:
 *  - broken references (story → requirement/epic/ADR/diagram, ADR → requirement)
 *  - required fields per user story: acceptanceCriteria (>=1), aiContribution (non-empty)
 *  - coverage gaps: requirements with no linked story
 *  - missing AI contribution on requirements/diagrams (info, not an error)
 *  - scope guardrails (upper limits from the concept) as a reminder
 *
 * Exit code 1 on real errors (broken references, missing required fields).
 * Usage: npm run re:check
 *
 * Honours CONTENT_DIR (same as the site) so it also checks external content repos.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, isAbsolute, resolve } from 'node:path';
import matter from 'gray-matter';

const CONTENT_ROOT = process.env.CONTENT_DIR
  ? (isAbsolute(process.env.CONTENT_DIR) ? process.env.CONTENT_DIR : resolve(process.cwd(), process.env.CONTENT_DIR))
  : join(process.cwd(), 'src', 'content');

// Scope guardrails from the concept (deliberate upper limits).
const LIMITS = {
  'case-studies': 5, // 3–5 core projects
  'user-stories': 25, // 15–25 stories
  diagrams: 10, // 5–10 BPMN etc.
  adr: 5, // 3–5 ADRs
};

const errors = [];
const warnings = [];
const infos = [];

// Multi-project layout: each project's content lives in its own submodule at
// CONTENT_ROOT/<project>/, with the collection folders at its root. So a collection
// is the union of CONTENT_ROOT/*/<collection>/**  (mirrors the glob in content.config.ts).
// IDs stay flat (= filename without extension) and must be unique across all projects.
const projectDirs = () =>
  existsSync(CONTENT_ROOT)
    ? readdirSync(CONTENT_ROOT, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
    : [];

function load(collection) {
  const out = [];
  for (const project of projectDirs()) {
    const dir = join(CONTENT_ROOT, project, collection);
    if (!existsSync(dir)) continue;
    for (const rel of readdirSync(dir, { recursive: true })) {
      const f = String(rel);
      if (!/\.(md|mdx)$/.test(f)) continue;
      const raw = readFileSync(join(dir, f), 'utf8');
      const { data, content } = matter(raw);
      const base = f.split(/[\\/]/).pop();
      out.push({ id: base.replace(/\.(md|mdx)$/, ''), data, body: content, file: `${project}/${collection}/${f}` });
    }
  }
  return out;
}

const cases = load('case-studies');
const requirements = load('requirements');
const epics = load('epics');
const stories = load('user-stories');
const adrs = load('adr');
const diagrams = load('diagrams');

const ids = (arr) => new Set(arr.map((e) => e.id));
const reqIds = ids(requirements);
const epicIds = ids(epics);
const adrIds = ids(adrs);
const diagramIds = ids(diagrams);
const caseIds = ids(cases);

const refId = (v) => (typeof v === 'string' ? v : v && typeof v === 'object' ? v.id ?? v.slug : undefined);

// Localized prose is stored as { en, de }. A field "has content" if it is a
// non-empty string (single-language draft) or an object whose present locales
// are all non-empty strings.
const locHasContent = (v) => {
  if (v == null) return false;
  if (typeof v === 'string') return v.trim() !== '';
  if (typeof v === 'object') {
    const present = ['en', 'de'].map((k) => v[k]).filter((x) => x != null);
    return present.length > 0 && present.every((x) => typeof x !== 'string' || x.trim() !== '');
  }
  return false;
};

// Acceptance criteria may be a { en:[], de:[] } object or a plain array (draft).
const acList = (v, lang) => (Array.isArray(v) ? v : v && typeof v === 'object' ? v[lang] ?? [] : []);

function checkRef(where, label, value, set) {
  const id = refId(value);
  if (id === undefined) return;
  if (!set.has(id)) errors.push(`${where}: ${label} points to "${id}", which does not exist.`);
}

// User stories
for (const s of stories) {
  const w = s.file;
  checkRef(w, 'case', s.data.case, caseIds);
  checkRef(w, 'requirement', s.data.requirement, reqIds);
  if (s.data.epic) checkRef(w, 'epic', s.data.epic, epicIds);
  if (s.data.bpmn) checkRef(w, 'bpmn', s.data.bpmn, diagramIds);
  for (const a of s.data.adr ?? []) checkRef(w, 'adr', a, adrIds);

  const acEn = acList(s.data.acceptanceCriteria, 'en');
  const acDe = acList(s.data.acceptanceCriteria, 'de');
  if (acEn.length === 0 || acDe.length === 0)
    errors.push(`${w}: acceptance criteria missing for en and/or de (at least one each required).`);
  if (!locHasContent(s.data.aiContribution))
    errors.push(`${w}: aiContribution (AI contribution) is missing — north-star principle.`);
  if (!s.data.requirement) errors.push(`${w}: no linked requirement.`);
}

// ADRs
for (const a of adrs) {
  checkRef(a.file, 'case', a.data.case, caseIds);
  for (const r of a.data.relatedRequirements ?? []) checkRef(a.file, 'relatedRequirements', r, reqIds);
}

// Requirements: coverage + AI contribution
const coveredReq = new Set(stories.map((s) => refId(s.data.requirement)).filter(Boolean));
for (const r of requirements) {
  checkRef(r.file, 'case', r.data.case, caseIds);
  if (!coveredReq.has(r.id)) warnings.push(`${r.file}: requirement ${r.id} has no linked user story (coverage gap).`);
  if (!locHasContent(r.data.aiContribution)) infos.push(`${r.file}: no AI contribution documented.`);
}
for (const d of diagrams) {
  checkRef(d.file, 'case', d.data.case, caseIds);
  if (!locHasContent(d.data.aiContribution)) infos.push(`${d.file}: no AI contribution documented.`);
}

// Scope guardrails
const counts = {
  'case-studies': cases.length,
  'user-stories': stories.length,
  diagrams: diagrams.length,
  adr: adrs.length,
};
for (const [k, limit] of Object.entries(LIMITS)) {
  if (counts[k] > limit) warnings.push(`Scope guardrail: ${k} = ${counts[k]} exceeds the agreed upper limit (${limit}). Decide deliberately instead of expanding.`);
}

// Output
const line = '─'.repeat(60);
console.log(line);
console.log('Traceability & scope check');
console.log(line);
console.log(`Artifacts: ${cases.length} case studies · ${requirements.length} requirements · ${stories.length} stories · ${adrs.length} ADRs · ${diagrams.length} diagrams`);
console.log('');

if (errors.length) {
  console.log(`❌ ERRORS (${errors.length}):`);
  errors.forEach((e) => console.log('   - ' + e));
  console.log('');
}
if (warnings.length) {
  console.log(`⚠️  WARNINGS (${warnings.length}):`);
  warnings.forEach((w) => console.log('   - ' + w));
  console.log('');
}
if (infos.length) {
  console.log(`ℹ️  AI contribution (${infos.length}):`);
  infos.forEach((i) => console.log('   - ' + i));
  console.log('');
}
if (!errors.length && !warnings.length) console.log('✅ No errors or coverage gaps.');

console.log(line);
process.exit(errors.length ? 1 : 0);
