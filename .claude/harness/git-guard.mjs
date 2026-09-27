#!/usr/bin/env node
/**
 * PreToolUse hook (Bash): guards the git actions CLAUDE.md forbids or reserves.
 *
 * `main` is the live site, and the ONLY way into it is a pull request that the owner
 * approves and merges on GitHub themselves — never through an agent. So these are DENIED:
 * - a commit, merge, rebase, cherry-pick or revert while on `main` (or after switching to
 *   it in the same command);
 * - any push that could write `main`: an explicit `main` refspec, `--all` / `--mirror`,
 *   or a push without refspec while on `main`;
 * - merging or approving a pull request (`gh pr merge`, `gh pr review --approve`, and the
 *   same through `gh api`), and touching branch protection through `gh api`. Merges into
 *   `develop` happen locally, so no agent ever needs `gh pr merge`.
 * Every other push ASKS: it is outward-facing, and a push to `develop` deploys.
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

// Prose is not a command: a commit message that mentions `gh pr merge` must not trip the
// guard. Drop heredoc bodies and quoted strings containing whitespace; a quoted single
// word (`"main"`) is unquoted and kept, so quoting a refspec does not slip past.
cmd = cmd
  .replace(/<<-?\s*['"]?(\w+)['"]?[^\n]*\n[\s\S]*?\n\s*\1\b/g, '')
  .replace(/'([^']*)'|"((?:[^"\\]|\\.)*)"/g, (m, a, b) => {
    const inner = a ?? b ?? '';
    return /\s/.test(inner) ? ' ' : inner;
  });

const decide = (permissionDecision, permissionDecisionReason) => {
  console.log(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision, permissionDecisionReason },
  }));
  process.exit(0);
};

if (!/\b(git|gh)\b/.test(cmd)) process.exit(0);

const otherRepo = /\bgit\s+-C\s+(?!\.(\s|\/|$))\S+/.test(cmd);

const OWNER_ONLY = 'Only the owner merges into `main`: through a pull request they approve and merge on GitHub themselves, never through an agent.';

const currentBranch = () => {
  try {
    return execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
      cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(), encoding: 'utf8',
    }).trim();
  } catch { return ''; } // not a repo — nothing to guard
};

if (/\bgh\s+pr\s+merge\b/.test(cmd)) decide('deny', `No agent merges a pull request. ${OWNER_ONLY}`);
if (/\bgh\s+pr\s+review\b[^;&|]*(--approve|-a\b)/.test(cmd)) decide('deny', `No agent approves a pull request. ${OWNER_ONLY}`);
// Reading is fine; `gh api` writes only with a non-GET method or with request fields.
const api = cmd.match(/\bgh\s+api\b([^;&|]*)/);
const apiWrites = api && /(-X|--method)[\s=]*(?!GET\b)[A-Za-z]+|\s-[fF]\s|--(raw-)?field\b|--input\b/.test(api[1]);
if (apiWrites && /(\/merge\b|\/merges\b|\/reviews\b|\/protection\b|\/rulesets\b)/.test(api[1]))
  decide('deny', `No agent merges, approves or changes branch protection through the API. ${OWNER_ONLY}`);

const push = cmd.match(/\bgit\b[^;&|]*\bpush\b([^;&|]*)/);
if (push) {
  const args = push[1];
  const refspecs = args.split(/\s+/).filter((a) => a && !a.startsWith('-')).slice(1); // [0] is the remote
  const targetsMain = /(^|\s|:|\+)(refs\/heads\/)?main(\s|$)/.test(args) || /--(all|mirror)\b/.test(args);
  const bareOnMain = !otherRepo && refspecs.length === 0 && currentBranch() === 'main';
  if (targetsMain || bareOnMain) decide('deny', `No push to \`main\`. ${OWNER_ONLY}`);
  decide('ask', 'A push is outward-facing, and a push to develop starts a Deploy Now run. Confirm this push.');
}

if (!otherRepo && /\bgit\b[^;&|]*\b(commit|merge|cherry-pick|rebase|revert)\b/.test(cmd)) {
  const branch = currentBranch();
  const switchesToMain = /\bgit\s+(checkout|switch)\s+main\b/.test(cmd);
  if (branch === 'main' || switchesToMain) {
    decide('deny', `\`main\` is the live site: never commit or merge into it locally. Work on a feature branch and merge into \`develop\`. ${OWNER_ONLY}`);
  }
}

process.exit(0);
