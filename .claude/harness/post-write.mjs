#!/usr/bin/env node
/**
 * PostToolUse hook (Write|Edit): after editing an artifact, remind of the matching
 * checklist. Reads the hook event as JSON from stdin.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, basename, relative } from 'node:path';

let input = '';
try { input = readFileSync(0, 'utf8'); } catch { /* no stdin */ }

let path = '';
try {
  const evt = JSON.parse(input || '{}');
  path = (evt.tool_input && (evt.tool_input.file_path || evt.tool_input.path)) || '';
} catch { /* ignore */ }
path = String(path).replace(/\\/g, '/');

// Content lives at src/content/<project>/<collection>/ — one folder per project.
// Matching on `src/content/<collection>/` would never fire.
const match = path.match(/^(.*src\/content\/[^/]+)\/([^/]+)\//);
const projectDir = match ? match[1] : null;
const collection = match ? match[2] : null;

// Reminders that apply to every artifact on the iteration timeline.
const versioned = [
  'introducedIn set to the iteration that first publishes this?',
  'source pointing at the vault file this cites (a path — codeUrl is the URL field)?',
  'changing something an earlier iteration published? Put `changes:` on THIS file — never edit the published one.',
];

const checklists = {
  'user-stories': [
    'requirement (R-xx) linked?',
    'at least one acceptance criterion, per locale?',
    'aiContribution (AI contribution) filled in?',
    'bpmn / adr / codeUrl / jiraKey linked where relevant (do not invent — point to what exists)?',
    'status is `done`? Only Done work gets published.',
    ...versioned,
  ],
  requirements: [
    'fitCriterion filled in — how would you PROVE this goal is met? (a measurement, not a restatement)',
    'priority set?',
    'covered by a story?',
    ...versioned,
  ],
  questions: [
    'askedOf set — who alone can answer this?',
    'blocks lists the stories that must not proceed until it is answered.',
    'consequence: what changes depending on the answer?',
    'NEVER let the answer be synthesised — a business question has no answer in any artifact.',
  ],
  adr: [
    'status & date set?',
    'relatedRequirements linked?',
    'context/decision/consequences in the body?',
    'replacing an older ADR? `supersedes:` goes on THIS one, never `supersededBy` on the old one.',
    ...versioned,
  ],
  diagrams: [
    'type & tool set?',
    'real artifact (SVG/.bpmn) linked instead of invented?',
    'aiContribution added?',
    'a changed process = a NEW diagram with `changes:`, so the earlier iteration still renders as it was.',
    ...versioned,
  ],
  workflow: [
    'aiRole filled in — what the AI does at this step?',
    'order is the position within THIS iteration, not globally.',
    ...versioned,
  ],
  iterations: [
    'version = the app-repo release tag, and the id matches it?',
    'order unique within this case study (the current iteration is derived from the highest)?',
    'date = the tag date, not today?',
    'processChanges filled in — what changed in HOW you work is the headline.',
    'corrects only ever points BACKWARDS at an earlier iteration.',
  ],
  journal: [
    'id = the vault note\'s filename (WZ-YYYY-MM-DD-topic-headline) — the match needs no extra field.',
    'nothing beyond the note: summarise, select, reword — never add a fact, motive or consequence.',
    'for the site\'s audience: first person, abbreviations explained, file/script names dropped.',
    'German written as German, not transliterated.',
    '`draft: true` until the owner says otherwise. A published entry is never rewritten — a correction is a new entry.',
    'tagged `retro`? Then harnessChange must name what it changed in how you work.',
  ],
  glossary: [
    'term AND definition per locale (en/de) — German its own domain term, not a transliteration?',
    'taken from the project\'s vocabulary, not invented for the site?',
    'rendered only as the head of a topic — listed in that topic\'s `glossary`?',
  ],
  stakeholders: [
    'heldBy names the human behind the role — the direction is decided by people.',
    'aiSupport: which agents assist, and where their authority stops?',
    'a real stakeholder of the project, not invented?',
    'order set (display sequence is stated, not inferred from influence)?',
  ],
  epics: [
    'taken from the vault\'s docs/epics.md, not invented for the site?',
    'title and description per locale?',
  ],
  topics: [
    'source cites the vault\'s docs/epics.md — the topic set is the project\'s epic spine, not invented.',
    'membership is DERIVED (story via requirement, diagram via story, ADR via relatedRequirements) — explicit lists only for artifacts the rule assigns wrongly.',
    'never add a field to a published artifact to group it — the link goes on the topic.',
    'empty glossary = technical topic. Derived, not a flag.',
  ],
  'case-studies': [
    'version is deprecated — the displayed version is derived from the current iteration.',
    'demoUrl for a frozen state?',
  ],
};

// ---- Append-only guard ----
// A published iteration is frozen; the current one is the highest `order` per case —
// the same rule re:check uses (isFrozen). Editing a frozen artifact is the signal that a
// change is being expressed on the wrong side of the link.
const field = (text, name) => {
  const m = text.match(new RegExp(`^${name}:\\s*["']?([^"'\\s#]+)`, 'm'));
  return m ? m[1] : undefined;
};
const read = (f) => { try { return readFileSync(f, 'utf8'); } catch { return ''; } };

function frozenWarning() {
  if (!projectDir) return null;
  const itDir = join(projectDir, 'iterations');
  if (!existsSync(itDir)) return null;
  const its = readdirSync(itDir).filter((f) => f.endsWith('.md')).map((f) => {
    const t = read(join(itDir, f));
    return { id: f.replace(/\.md$/, ''), case: field(t, 'case'), order: Number(field(t, 'order') ?? 0) };
  });
  const current = new Set();
  for (const c of new Set(its.map((i) => i.case))) {
    const newest = its.filter((i) => i.case === c).sort((a, b) => a.order - b.order).pop();
    if (newest) current.add(newest.id);
  }
  const id = basename(path).replace(/\.md$/, '');
  const text = read(path);

  let frozenBy = null;
  if (collection === 'iterations') {
    if (its.some((i) => i.id === id) && !current.has(id)) frozenBy = `published iteration ${id}`;
  } else if (collection === 'journal') {
    // Published = committed without `draft: true`.
    let head = '';
    try {
      const rel = relative(execFileSync('git', ['rev-parse', '--show-toplevel'], { cwd: dirname(path), encoding: 'utf8' }).trim(), path);
      head = execFileSync('git', ['show', `HEAD:${rel}`], { cwd: dirname(path), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    } catch { /* not committed yet */ }
    if (head && field(head, 'draft') !== 'true') frozenBy = 'a committed, non-draft journal entry';
  } else {
    const it = field(text, 'introducedIn');
    if (it && !current.has(it)) frozenBy = `introduced in published iteration ${it}`;
  }
  if (!frozenBy) return null;
  return `⚠ APPEND-ONLY: ${basename(path)} is frozen (${frozenBy}). ` +
    'Revert this edit unless the owner explicitly asked for it. Express the change on a NEW artifact ' +
    '(`changes:` / `supersedes:`, or a new journal entry) — never edit what an earlier iteration shipped.';
}

const warning = frozenWarning();
const items = collection ? checklists[collection] : null;
if (items || warning) {
  const list = items ? `Checklist for ${collection}:\n- ${items.join('\n- ')}\nThen: npm run re:check` : '';
  const text = [warning, list].filter(Boolean).join('\n\n');
  console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: text } }));
}
process.exit(0);
