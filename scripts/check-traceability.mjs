#!/usr/bin/env node
/**
 * Harness check: enforces the points agreed in the concept.
 *
 * Checks:
 *  - broken references (story → requirement/epic/ADR/diagram, ADR → requirement)
 *  - required fields per user story: acceptanceCriteria (>=1), aiContribution (non-empty)
 *  - coverage gaps: requirements with no linked story
 *  - missing AI contribution on requirements/diagrams (info, not an error)
 *  - iterations: `order` unique within a case study (the current iteration is derived
 *    from it, so a tie is ambiguous), and a missing `introducedIn` on any artifact
 *  - append-only rule: `changes` / `supersedes` / `corrects` may only point BACKWARDS
 *    in time. A later iteration may correct an earlier one, never the reverse.
 *  - scope guardrails PER PROJECT PER ITERATION (decision 6): counting totals is
 *    meaningless for artifacts that are cumulative and never deleted.
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
// `case-studies` is a global limit (3–5 core projects across the whole site).
// The rest are counted PER PROJECT PER ITERATION — decision 6: ADRs and diagrams are
// cumulative and never deleted, so a total-based limit fires forever from the second
// iteration on, and a warning you can never clear is one you learn to skip.
const GLOBAL_LIMITS = {
  'case-studies': 5, // 3–5 core projects
};
const PER_ITERATION_LIMITS = {
  'user-stories': 25, // 15–25 stories
  diagrams: 10, // 5–10 new BPMN etc. per iteration
  adr: 5, // 3–5 new ADRs per iteration
};

const errors = [];
const warnings = [];
const infos = [];

// Multi-project layout: each project's content lives in its own folder at
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
      out.push({ id: base.replace(/\.(md|mdx)$/, ''), data, body: content, project, file: `${project}/${collection}/${f}` });
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
const workflow = load('workflow');
const iterations = load('iterations');

const ids = (arr) => new Set(arr.map((e) => e.id));
const reqIds = ids(requirements);
const epicIds = ids(epics);
const adrIds = ids(adrs);
const diagramIds = ids(diagrams);
const caseIds = ids(cases);
const workflowIds = ids(workflow);
const iterationIds = ids(iterations);

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

// ---- Iterations: the versioning backbone ----
const iterById = new Map(iterations.map((i) => [i.id, i]));
const orderOf = (iterationId) => iterById.get(iterationId)?.data?.order;

for (const it of iterations) {
  checkRef(it.file, 'case', it.data.case, caseIds);
  if (typeof it.data.order !== 'number')
    errors.push(`${it.file}: order is missing or not a number — the current iteration is derived from it.`);
  for (const c of it.data.corrects ?? []) checkRef(it.file, 'corrects', c, iterationIds);
}

// `order` must be unique WITHIN ONE case study. The current iteration is derived as the
// highest order, so a tie makes "which version is live" ambiguous rather than merely ugly.
const iterationsByCase = new Map();
for (const it of iterations) {
  const c = refId(it.data.case) ?? '(no case)';
  if (!iterationsByCase.has(c)) iterationsByCase.set(c, []);
  iterationsByCase.get(c).push(it);
}
for (const [c, list] of iterationsByCase) {
  const seen = new Map();
  for (const it of list) {
    const o = it.data.order;
    if (seen.has(o))
      errors.push(`${it.file}: order ${o} is already used by "${seen.get(o)}" in case "${c}". The current iteration is derived from the highest order, so a tie is ambiguous.`);
    else seen.set(o, it.id);
  }
}

// Append-only rule: a change pointer sits on the NEWER artifact and may only point
// BACKWARDS in time. Pointing forward would mean an earlier iteration knew about a
// later one — i.e. a published file was edited after the fact.
function checkBackwards(where, label, fromIter, toId, toIter) {
  const a = orderOf(fromIter);
  const b = orderOf(toIter);
  if (a === undefined || b === undefined) return; // unversioned; already warned about
  if (b > a)
    errors.push(`${where}: ${label} points at "${toId}", introduced LATER (${toIter}, order ${b}) than this artifact (${fromIter}, order ${a}). A later iteration may correct an earlier one, never the reverse.`);
  else if (b === a)
    warnings.push(`${where}: ${label} points at "${toId}" from the same iteration (${fromIter}) — a change pointer within one iteration records nothing. Edit the artifact instead.`);
}

for (const it of iterations) {
  for (const c of it.data.corrects ?? []) {
    const toId = refId(c);
    if (iterById.has(toId) && orderOf(toId) > it.data.order)
      errors.push(`${it.file}: corrects points at "${toId}", which comes later (order ${orderOf(toId)} > ${it.data.order}). An iteration may only correct an earlier one.`);
  }
}

// Every versioned artifact: introducedIn present and resolvable, change pointers backwards.
const VERSIONED = [
  ['user-stories', stories, ids(stories)],
  ['requirements', requirements, reqIds],
  ['diagrams', diagrams, diagramIds],
  ['adr', adrs, adrIds],
  ['workflow', workflow, workflowIds],
];
for (const [, entries, sameCollection] of VERSIONED) {
  const byId = new Map(entries.map((e) => [e.id, e]));
  for (const e of entries) {
    const intro = refId(e.data.introducedIn);
    if (intro === undefined) {
      warnings.push(`${e.file}: no introducedIn — it cannot be placed on the timeline and counts against the "(no iteration)" scope bucket.`);
    } else {
      checkRef(e.file, 'introducedIn', e.data.introducedIn, iterationIds);
    }
    const pointers = (e.data.changes ?? []).map((t) => ['changes', t]);
    if (e.data.supersedes) pointers.push(['supersedes', e.data.supersedes]);
    for (const [label, t] of pointers) {
      checkRef(e.file, label, t, sameCollection);
      const toId = refId(t);
      const target = byId.get(toId);
      if (target) checkBackwards(e.file, label, intro, toId, refId(target.data.introducedIn));
    }
  }
}

// ---- Scope guardrails ----
// Global: the number of core projects on the site.
if (cases.length > GLOBAL_LIMITS['case-studies'])
  warnings.push(`Scope guardrail: case-studies = ${cases.length} exceeds the agreed upper limit (${GLOBAL_LIMITS['case-studies']}). Decide deliberately instead of expanding.`);

// Per project per iteration (decision 6). For diagrams and ADRs this reads as
// "N NEW per iteration" — they are cumulative and never deleted.
const bucketOf = (e) => `${e.project} · ${refId(e.data.introducedIn) ?? '(no iteration)'}`;
const PER_ITERATION_COLLECTIONS = { 'user-stories': stories, diagrams, adr: adrs };
for (const [k, entries] of Object.entries(PER_ITERATION_COLLECTIONS)) {
  const limit = PER_ITERATION_LIMITS[k];
  const counts = new Map();
  for (const e of entries) counts.set(bucketOf(e), (counts.get(bucketOf(e)) ?? 0) + 1);
  const noun = k === 'user-stories' ? k : `new ${k}`;
  for (const [bucket, n] of counts) {
    if (n > limit)
      warnings.push(`Scope guardrail: ${bucket} — ${noun} = ${n} exceeds the agreed upper limit (${limit} per iteration). Decide deliberately instead of expanding.`);
  }
}

// Output
const line = '─'.repeat(60);
console.log(line);
console.log('Traceability & scope check');
console.log(line);
console.log(`Artifacts: ${cases.length} case studies · ${iterations.length} iterations · ${requirements.length} requirements · ${stories.length} stories · ${adrs.length} ADRs · ${diagrams.length} diagrams · ${workflow.length} workflow steps`);
for (const [c, list] of iterationsByCase) {
  const sorted = [...list].sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
  const current = sorted[sorted.length - 1];
  console.log(`  ${c}: ${sorted.map((i) => i.data.version ?? i.id).join(' → ')}   (current: ${current?.data?.version ?? '—'})`);
}
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
