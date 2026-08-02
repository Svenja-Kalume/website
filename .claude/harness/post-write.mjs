#!/usr/bin/env node
/**
 * PostToolUse hook (Write|Edit): after editing an artifact, remind of the matching
 * checklist. Reads the hook event as JSON from stdin.
 */
import { readFileSync } from 'node:fs';

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
const match = path.match(/src\/content\/[^/]+\/([^/]+)\//);
const collection = match ? match[1] : null;

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
  requirements: ['businessGoal measurable?', 'priority set?', 'covered by a story?', ...versioned],
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
  'case-studies': [
    'version is deprecated — the displayed version is derived from the current iteration.',
    'demoUrl for a frozen state?',
  ],
};

const items = collection ? checklists[collection] : null;
if (items) {
  const text = `Checklist for ${collection}:\n- ${items.join('\n- ')}\nThen: npm run re:check`;
  console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: text } }));
}
process.exit(0);
