#!/usr/bin/env node
/**
 * PreToolUse hook (Bash): guards the two git actions CLAUDE.md forbids or reserves.
 *
 * - `main` is the live site: a commit or merge while on it (or after switching to it in
 *   the same command) is DENIED. Promoting develop to main is the owner's decision.
 * - A push to `main` or `develop` starts a Deploy Now run, and every push is outward-facing;
 *   a PR merge can land on main. Both ASK, so the owner confirms each one.
 *
 * Only this repo is checked for the branch. A command aimed at another repo via
 * `git -C <path>` (the wurzel vault) is left to the normal permission flow.
 */
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

let cmd = '';
try {
  const evt = JSON.parse(readFileSync(0, 'utf8') || '{}');
  cmd = String((evt.tool_input && evt.tool_input.command) || '');
} catch { /* no stdin or not JSON */ }

const decide = (permissionDecision, permissionDecisionReason) => {
  console.log(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision, permissionDecisionReason },
  }));
  process.exit(0);
};

if (!/\b(git|gh)\b/.test(cmd)) process.exit(0);

const otherRepo = /\bgit\s+-C\s+(?!\.(\s|\/|$))\S+/.test(cmd);

if (/\bgit\b[^;&|]*\bpush\b/.test(cmd)) {
  decide('ask', 'A push is outward-facing, and a push to main or develop starts a Deploy Now run. Confirm this push.');
}
if (/\bgh\s+pr\s+merge\b/.test(cmd)) {
  decide('ask', 'A PR merge may land on main, the live site. Confirm target branch and merge.');
}

if (!otherRepo && /\bgit\b[^;&|]*\b(commit|merge|cherry-pick|rebase|revert)\b/.test(cmd)) {
  let branch = '';
  try {
    branch = execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
      cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(), encoding: 'utf8',
    }).trim();
  } catch { /* not a repo — nothing to guard */ }
  const switchesToMain = /\bgit\s+(checkout|switch)\s+main\b/.test(cmd);
  if (branch === 'main' || switchesToMain) {
    decide('deny', '`main` is the live site: never commit or merge into it. Work on a feature branch and merge into `develop`; promoting develop to main is the owner\'s call.');
  }
}

process.exit(0);
