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

const checklists = {
  'src/content/user-stories/': [
    'requirement (R-xx) linked?',
    'at least one acceptance criterion?',
    'aiContribution (AI contribution) filled in?',
    'bpmn / adr / codeUrl / jiraKey linked where relevant (do not invent — point to what exists)?',
  ],
  'src/content/requirements/': ['businessGoal measurable?', 'priority set?', 'covered by a story?'],
  'src/content/adr/': ['status & date set?', 'relatedRequirements linked?', 'context/decision/consequences in the body?'],
  'src/content/diagrams/': ['type & tool set?', 'real artifact (SVG/.bpmn) linked instead of invented?', 'aiContribution added?'],
  'src/content/case-studies/': ['version set for the freeze concept?', 'demoUrl for a frozen state?'],
};

for (const [prefix, items] of Object.entries(checklists)) {
  if (path.includes(prefix)) {
    const name = prefix.replace('src/content/', '').replace('/', '');
    const text = `Checklist for ${name}:\n- ${items.join('\n- ')}\nThen: npm run re:check`;
    console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: text } }));
    process.exit(0);
  }
}
process.exit(0);
