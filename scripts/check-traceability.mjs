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
const questions = load('questions');

const ids = (arr) => new Set(arr.map((e) => e.id));
const reqIds = ids(requirements);
const epicIds = ids(epics);
const adrIds = ids(adrs);
const diagramIds = ids(diagrams);
const caseIds = ids(cases);
const workflowIds = ids(workflow);
const iterationIds = ids(iterations);

const refId = (v) => (typeof v === 'string' ? v : v && typeof v === 'object' ? v.id ?? v.slug : undefined);

// ---- Frozen vs. current ----
// A published iteration is append-only: its artifacts cannot be improved without editing
// a published file. So ADVISORY checks (missing optional fields, style) apply only to the
// CURRENT iteration and to artifacts not yet assigned to one. Otherwise every advisory
// accrues permanently against history and turns frozen work into a to-do list that can
// never be cleared — the same failure the acceptance-criteria shape lint was corrected for.
//
// ERRORS still apply everywhere: a broken reference or a blocked story is wrong whenever
// it happened, and coverage stays global because a later story may cover an older
// requirement.
const currentIterationIds = new Set();
{
  const byCase = new Map();
  for (const it of iterations) {
    const c = refId(it.data.case) ?? '(no case)';
    if (!byCase.has(c)) byCase.set(c, []);
    byCase.get(c).push(it);
  }
  for (const list of byCase.values()) {
    const newest = [...list].sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)).pop();
    if (newest) currentIterationIds.add(newest.id);
  }
}
const isFrozen = (e) => {
  const it = refId(e.data.introducedIn);
  return it !== undefined && !currentIterationIds.has(it);
};
let suppressed = 0;
// Record an advisory only for work that can still be changed.
const advise = (bucket, entry, message) => {
  if (isFrozen(entry)) { suppressed++; return; }
  bucket.push(message);
};

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
  if (!locHasContent(r.data.aiContribution)) advise(infos, r, `${r.file}: no AI contribution documented.`);
  if (!locHasContent(r.data.fitCriterion))
    advise(infos, r, `${r.file}: no fitCriterion — how would you prove this business goal is met?`);
}
for (const d of diagrams) {
  checkRef(d.file, 'case', d.data.case, caseIds);
  if (!locHasContent(d.data.aiContribution)) advise(infos, d, `${d.file}: no AI contribution documented.`);
}

// ---- Citations out of a published iteration must be immutable ----
// An iteration is append-only: what it published must still read the same in a year.
// A citation pinned to a moving branch breaks that silently — the artifact stays
// unedited while the thing it points at changes underneath it. Pin to the release tag
// the iteration is named after.
// A repo-relative `codeUrl` is the preferred form: it needs no hosting to author, and the
// site resolves it against the case study's `repoUrl` pinned to the artifact's own
// iteration tag — immutable by construction. A hand-written full URL has to be pinned by
// hand, so it gets checked.
const MOVING_REF = /\/(blob|tree|raw|src)\/(main|master|HEAD|develop)\//i;
const repoUrlOf = new Map(cases.map((c) => [c.id, c.data.repoUrl]));
for (const e of [...stories, ...requirements, ...diagrams, ...adrs, ...workflow, ...iterations]) {
  for (const field of ['codeUrl', 'sourceUrl']) {
    const url = e.data[field];
    if (typeof url !== 'string') continue;
    if (/^https?:\/\//i.test(url)) {
      if (MOVING_REF.test(url))
        warnings.push(`${e.file}: ${field} points at a moving branch. A published artifact must cite a tag (e.g. .../blob/0.1.0/...), or what it says changes underneath it.`);
    } else if (field === 'codeUrl' && !repoUrlOf.get(refId(e.data.case))) {
      infos.push(`${e.file}: codeUrl is a repo-relative path, but case "${refId(e.data.case)}" has no repoUrl yet — it renders as text until you set one. Nothing to fix here; set repoUrl once and every path becomes a tag-pinned link.`);
    }
  }
}

// ---- Retrospectives must name what they changed ----
// "The retrospective improves the process" is a claim the site makes. A retro-tagged
// entry that names no harness change is a status update wearing the label.
for (const j of load('journal')) {
  const tags = (j.data.tags ?? []).map((t) => String(t).toLowerCase());
  if (tags.includes('retro') || tags.includes('retrospective')) {
    if (!locHasContent(j.data.harnessChange))
      warnings.push(`${j.file}: tagged as a retrospective but names no harnessChange — what did it actually change in how you work?`);
  }
}

// ---- Open questions: the readiness gate with teeth ----
// A business question has no answer in any artifact — only a stakeholder has it. So a
// story it blocks must not be in flight. This is an ERROR, not a warning: proceeding
// means someone is about to invent the answer, which is the one thing the gate exists
// to prevent.
const storyById = new Map(stories.map((s) => [s.id, s]));
const stakeholderIds = ids(load('stakeholders'));
for (const q of questions) {
  checkRef(q.file, 'case', q.data.case, caseIds);
  if (q.data.askedOf) checkRef(q.file, 'askedOf', q.data.askedOf, stakeholderIds);
  const status = q.data.status ?? 'open';
  if (status === 'answered' && !locHasContent(q.data.answer))
    errors.push(`${q.file}: status is "answered" but there is no answer.`);
  if (status === 'open' && !q.data.askedOf)
    warnings.push(`${q.file}: open question with no askedOf — a question nobody owns does not get answered.`);
  for (const ref of q.data.blocks ?? []) {
    const id = refId(ref);
    checkRef(q.file, 'blocks', ref, ids(stories));
    const story = storyById.get(id);
    if (!story) continue;
    const st = story.data.status ?? 'backlog';
    if (status === 'open' && st !== 'backlog')
      errors.push(`${story.file}: story is "${st}" while open question ${q.id} blocks it. Only a stakeholder can answer it — do not let it be synthesised. Answer ${q.id} or move the story back to backlog.`);
  }
}

// ---- Acceptance-criteria lints ----
// Two lints with deliberately different severities, chosen by measuring the existing
// stories rather than by assumption:
//
//  - WEASEL WORDS are a real defect: an unmeasurable criterion cannot be tested. All 118
//    existing criteria are clean, so this ships as a warning and stays green until
//    someone writes one.
//  - SHAPE (Given/When/Then or EARS) is NOT shipped as a warning. 109 of the 118 existing
//    criteria are declarative-testable instead ("CustomerNumber is generated as yyyy-nnn"),
//    which is a legitimate third style, not 109 defects. Warning on all of them would be
//    red on day one, and a check that is red on day one is one you learn to skip.
//    It is reported as a single counted line; pass --lint-ac to list the individual ones.
const WEASEL = [
  'fast', 'quick', 'quickly', 'user-friendly', 'appropriate', 'appropriately', 'robust',
  'simple', 'simply', 'easy', 'easily', 'efficient', 'efficiently', 'intuitive', 'seamless',
  'reasonable', 'sufficient', 'adequate', 'optimal', 'as needed', 'and so on',
  'einfach', 'schnell', 'benutzerfreundlich', 'angemessen', 'intuitiv', 'effizient',
  'ausreichend', 'geeignet', 'sinnvoll', 'performant', 'komfortabel', 'optimal', 'usw',
];
const weaselRe = new RegExp(`\\b(${WEASEL.join('|')})\\b`, 'gi');
// Given/When/Then in either locale, or EARS ("... shall ...", "... muss ...").
const isShaped = (c) =>
  /\b(given|when|then)\b/i.test(c) || /\b(angenommen|gegeben|wenn|dann)\b/i.test(c)
  || /\bshall\b/i.test(c) || /\bmuss\b/i.test(c);

const LIST_AC = process.argv.includes('--lint-ac');
let acTotal = 0;
const acUnshaped = [];
for (const s of stories) {
  for (const locale of ['en', 'de']) {
    for (const c of acList(s.data.acceptanceCriteria, locale)) {
      if (typeof c !== 'string') continue;
      acTotal++;
      const found = c.match(weaselRe);
      if (found)
        advise(warnings, s, `${s.file} [${locale}]: acceptance criterion uses unmeasurable wording (${[...new Set(found.map((x) => x.toLowerCase()))].join(', ')}) — how would you test it? "${c.slice(0, 70)}…"`);
      if (!isShaped(c)) acUnshaped.push(`${s.file} [${locale}]: "${c.slice(0, 70)}…"`);
    }
  }
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
const openQuestions = questions.filter((q) => (q.data.status ?? 'open') === 'open').length;
if (questions.length) console.log(`Open questions: ${openQuestions} open of ${questions.length}`);
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
  console.log(`ℹ️  Optional fields not filled in (${infos.length}):`);
  infos.forEach((i) => console.log('   - ' + i));
  console.log('');
}
if (suppressed) {
  const frozen = [...iterations].filter((i) => !currentIterationIds.has(i.id)).map((i) => i.data.version ?? i.id);
  console.log(`🔒 ${suppressed} advisor${suppressed === 1 ? 'y' : 'ies'} suppressed on published iteration${frozen.length === 1 ? '' : 's'} ${frozen.join(', ')} — append-only: what is published is history, not a to-do list.`);
  console.log('   (a gap there is evidence of how the practice grew; say so in the next iteration\'s processChanges instead of backfilling it)');
  console.log('');
}
if (acTotal) {
  const shaped = acTotal - acUnshaped.length;
  console.log(`ℹ️  Acceptance criteria: ${acTotal} total · ${shaped} in Given/When/Then or EARS shape · ${acUnshaped.length} declarative.`);
  if (acUnshaped.length && !LIST_AC) console.log('   (declarative is a valid style — run `npm run re:check -- --lint-ac` to list them)');
  if (LIST_AC) acUnshaped.forEach((i) => console.log('   - ' + i));
  console.log('');
}
if (!errors.length && !warnings.length) console.log('✅ No errors or coverage gaps.');

console.log(line);
process.exit(errors.length ? 1 : 0);
