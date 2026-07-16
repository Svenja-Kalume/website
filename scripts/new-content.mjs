#!/usr/bin/env node
/**
 * Scaffolding generator for a new content artifact.
 *
 * Creates ONE schema-correct Markdown stub in the right project submodule, with
 * `TODO` placeholders for the human-readable prose. It does NOT invent content
 * (north-star principle #2): it produces an empty-but-valid file that builds, and
 * you replace the TODOs with the real thing (drawn from the linked project, not
 * made up). Mirrors the shapes in docs/templates.md and src/content.config.ts.
 *
 * Layout (multi-submodule): files go to  <CONTENT_ROOT>/<project>/<collection>/<id>.md
 * Honours CONTENT_DIR (default ./src/content), same as the site and re:check.
 *
 * Usage:
 *   node scripts/new-content.mjs <collection> <project> [id] [options]
 *   node scripts/new-content.mjs list <project>
 *
 * Collection accepts aliases: requirement|req|r, story|user-story|us, epic|ep,
 *   adr, diagram|bpmn, case|case-study, stakeholder, glossary|term, workflow|step, journal.
 *
 * Auto-id (when [id] is omitted): pass --prefix <XX> and the next number is chosen,
 *   e.g.  new-content.mjs requirement wurzel --prefix WZ   ->  WZ-R-03
 *
 * Common options (all language-neutral; prose stays TODO):
 *   --case <id>           case study this belongs to (default: <project>)
 *   --requirement <id>    (user stories, REQUIRED) the requirement it covers
 *   --epic <id>           (user stories) optional epic
 *   --priority must|should|could         (requirements)
 *   --status <enum>       collection-specific status
 *   --type <enum>         (diagrams) bpmn|c4|uml|mermaid|event-storming
 *   --tool <name>         (diagrams) e.g. Mermaid, Camunda Modeler
 *   --order <n>           (workflow, case-studies)
 *   --date YYYY-MM-DD     (adr, journal) -- required, no clock is read for you
 *   --code-url <url> --jira <key> --demo-url <url>
 *   --force               overwrite if the file exists
 *
 * Then: fill the TODOs, run `npm run re:check` and `npm run build`.
 */
import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, isAbsolute, resolve } from 'node:path';

const CONTENT_ROOT = process.env.CONTENT_DIR
  ? (isAbsolute(process.env.CONTENT_DIR) ? process.env.CONTENT_DIR : resolve(process.cwd(), process.env.CONTENT_DIR))
  : join(process.cwd(), 'src', 'content');

const ALIASES = {
  'case-studies': 'case-studies', case: 'case-studies', 'case-study': 'case-studies', casestudy: 'case-studies',
  stakeholders: 'stakeholders', stakeholder: 'stakeholders',
  glossary: 'glossary', term: 'glossary',
  requirements: 'requirements', requirement: 'requirements', req: 'requirements', r: 'requirements',
  epics: 'epics', epic: 'epics', ep: 'epics',
  'user-stories': 'user-stories', 'user-story': 'user-stories', story: 'user-stories', us: 'user-stories',
  adr: 'adr',
  diagrams: 'diagrams', diagram: 'diagrams', bpmn: 'diagrams',
  workflow: 'workflow', step: 'workflow',
  journal: 'journal',
};
// Collections whose IDs auto-number, and the code used in the generated ID.
const CODE = { requirements: 'R', epics: 'EP', 'user-stories': 'US', adr: 'ADR', diagrams: 'D' };

const die = (msg) => { console.error(`✖ ${msg}`); process.exit(1); };
const q = (s) => `"${String(s).replace(/"/g, '\\"')}"`;
const TODO = (label) => q(`TODO: ${label}`);
const loc = (key, label, en, de, ind = '') =>
  `${ind}${key}:\n${ind}  en: ${en ? q(en) : TODO(`${label} (en)`)}\n${ind}  de: ${de ? q(de) : TODO(`${label} (de)`)}`;

// ---- args ----
const argv = process.argv.slice(2);
if (!argv.length || argv[0] === '--help' || argv[0] === '-h') {
  console.log(readFileSync(new URL(import.meta.url)).toString().split('\n').filter((l) => l.startsWith(' *')).map((l) => l.slice(3)).join('\n'));
  process.exit(0);
}
const positional = [];
const opts = {};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) {
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) opts[key] = true;
    else { opts[key] = next; i++; }
  } else positional.push(a);
}

// ---- list mode ----
if (positional[0] === 'list') {
  const project = positional[1];
  if (!project) die('usage: new-content.mjs list <project>');
  const proot = join(CONTENT_ROOT, project);
  if (!existsSync(proot)) die(`project "${project}" not found at ${proot}`);
  console.log(`Content in ${project}:`);
  for (const c of [...new Set(Object.values(ALIASES))].sort()) {
    const dir = join(proot, c);
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir).filter((f) => /\.(md|mdx)$/.test(f)).map((f) => f.replace(/\.(md|mdx)$/, ''));
    if (files.length) console.log(`  ${c}: ${files.join(', ')}`);
  }
  process.exit(0);
}

// ---- resolve collection + project ----
const collInput = positional[0];
const project = positional[1];
if (!collInput || !project) die('usage: new-content.mjs <collection> <project> [id] [options]  (or: list <project>)');
const collection = ALIASES[collInput.toLowerCase()];
if (!collection) die(`unknown collection "${collInput}". One of: ${[...new Set(Object.values(ALIASES))].join(', ')}`);

const projectRoot = join(CONTENT_ROOT, project);
if (!existsSync(projectRoot))
  die(`project "${project}" not mounted at ${projectRoot}.\n  Add its content repo as a submodule first (see docs/separating-content.md).`);
const targetDir = join(projectRoot, collection);

// ---- determine id ----
let id = positional[2];
if (!id) {
  const code = CODE[collection];
  if (!code) die(`[id] is required for "${collection}" (auto-numbering only applies to ${Object.keys(CODE).join(', ')}).`);
  if (!opts.prefix) die(`no [id] given: pass one, or --prefix <XX> to auto-number (e.g. --prefix WZ -> ${opts.prefix || 'WZ'}-${code}-01).`);
  const pad = code === 'ADR' ? 3 : 2;
  const re = new RegExp(`^${opts.prefix}-${code}-(\\d+)$`);
  let max = 0;
  if (existsSync(targetDir))
    for (const f of readdirSync(targetDir)) {
      const m = f.replace(/\.(md|mdx)$/, '').match(re);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  id = `${opts.prefix}-${code}-${String(max + 1).padStart(pad, '0')}`;
}

const file = join(targetDir, `${id}.md`);
if (existsSync(file) && !opts.force) die(`${collection}/${id}.md already exists (use --force to overwrite).`);

// ---- helpers for reference sanity (warn, don't fail) ----
const has = (coll, refId) => existsSync(join(projectRoot, coll, `${refId}.md`)) || existsSync(join(projectRoot, coll, `${refId}.mdx`));
const warn = (m) => console.warn(`⚠ ${m}`);
const caseId = opts.case || project;

// ---- build frontmatter + body per collection ----
let fm, body = '';
switch (collection) {
  case 'case-studies':
    fm = [
      loc('title', 'title'),
      loc('summary', 'summary'),
      `status: ${opts.status || 'draft'}      # draft | in-progress | active | archived`,
      `version: "${opts.version || '0.1'}"`,
      opts['demo-url'] ? `demoUrl: ${opts['demo-url']}` : null,
      `order: ${opts.order ?? 1}`,
    ];
    body = '\n## Starting situation\n\nTODO: prose — the real problem, drawn from the project (do not invent).\n';
    break;

  case 'requirements':
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    fm = [
      loc('title', 'title'),
      `case: ${caseId}`,
      loc('businessGoal', 'business goal'),
      `priority: ${opts.priority || 'should'}      # must | should | could`,
      `status: ${opts.status || 'open'}         # open | in-progress | done`,
      loc('aiContribution', 'AI contribution — what did the AI propose, what did you change'),
    ];
    body = '\nTODO: description of the requirement.\n';
    break;

  case 'epics':
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    fm = [loc('title', 'title'), `case: ${caseId}`, loc('description', 'what stories this epic groups')];
    break;

  case 'user-stories': {
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    const reqRef = opts.requirement;
    if (!reqRef) die('user stories require --requirement <id> (the requirement they cover).');
    if (!has('requirements', reqRef)) warn(`requirement "${reqRef}" not found — build fails until requirements/${reqRef}.md exists.`);
    if (opts.epic && !has('epics', opts.epic)) warn(`epic "${opts.epic}" not found.`);
    fm = [
      loc('title', 'title'),
      `case: ${caseId}`,
      loc('asA', 'as a (role)'),
      loc('iWant', 'I want'),
      loc('soThat', 'so that'),
      `requirement: ${reqRef}`,
      opts.epic ? `epic: ${opts.epic}` : null,
      'acceptanceCriteria:',
      '  en:',
      `    - ${TODO('acceptance criterion (en)')}`,
      '  de:',
      `    - ${TODO('acceptance criterion (de)')}`,
      opts.bpmn ? `bpmn: ${opts.bpmn}` : null,
      opts.adr ? `adr: [${opts.adr}]` : null,
      opts['code-url'] ? `codeUrl: ${opts['code-url']}` : null,
      opts.jira ? `jiraKey: ${opts.jira}` : null,
      `status: ${opts.status || 'backlog'}       # backlog | in-progress | review | done`,
      loc('aiContribution', 'AI contribution — make the AI role transparent'),
    ];
    break;
  }

  case 'adr':
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    if (!opts.date) die('ADRs require --date YYYY-MM-DD (no clock is read for you).');
    fm = [
      loc('title', 'title'),
      `case: ${caseId}`,
      `status: ${opts.status || 'proposed'}     # proposed | accepted | superseded`,
      `date: ${opts.date}`,
      opts['related-requirements'] ? `relatedRequirements: [${opts['related-requirements']}]` : 'relatedRequirements: []',
    ];
    body = '\n## Context\n\nTODO\n\n## Decision\n\nTODO\n\n## Consequences\n\nTODO\n';
    break;

  case 'diagrams': {
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    const type = opts.type || 'mermaid';
    fm = [
      loc('title', 'title'),
      `case: ${caseId}`,
      `type: ${type}       # bpmn | c4 | uml | mermaid | event-storming`,
      `tool: ${q(opts.tool || 'Mermaid')}`,
    ];
    if (opts.image) fm.push(`image: ${opts.image}`);
    if (opts.source) fm.push(`source: ${opts.source}`);
    // Mermaid variant → body is raw Mermaid; real BPMN/C4 → link image+source, no body.
    if (!opts.image) body = '\nflowchart TD\n  A[TODO] --> B[TODO]\n';
    break;
  }

  case 'stakeholders':
    if (!has('case-studies', caseId)) warn(`case "${caseId}" has no case-studies/${caseId}.md yet — build fails until it exists.`);
    fm = [
      `name: ${q(opts.name || id)}`,
      loc('role', 'role'),
      `case: ${caseId}`,
      `influence: ${opts.influence || 'medium'}     # low | medium | high`,
      'interests:',
      `  en: [${TODO('interest')}]`,
      `  de: [${TODO('interest')}]`,
    ];
    break;

  case 'glossary':
    fm = [loc('term', 'term'), `case: ${caseId}`];
    body = '\nTODO: definition.\n';
    break;

  case 'workflow':
    fm = [
      loc('title', 'title'),
      `order: ${opts.order ?? 1}`,
      `tools: [${opts.tools || ''}]`,
      loc('aiRole', 'what role the AI plays in this step'),
    ];
    break;

  case 'journal':
    if (!opts.date) die('journal entries require --date YYYY-MM-DD.');
    fm = [
      loc('title', 'title'),
      `date: ${opts.date}`,
      loc('summary', 'one line for the log stream'),
      `case: ${caseId}`,
      `tags: [${opts.tags || ''}]`,
      `draft: ${opts.draft ? 'true' : 'false'}`,
    ];
    body = '\nTODO: what happened, what you decided and why — what the AI suggested and what you changed.\n';
    break;
}

const content = `---\n${fm.filter(Boolean).join('\n')}\n---\n${body}`;
mkdirSync(targetDir, { recursive: true });
writeFileSync(file, content, 'utf8');

console.log(`✔ created ${project}/${collection}/${id}.md`);
console.log('  Next: fill the TODO placeholders with real content, then run:');
console.log('        npm run re:check && npm run build');
