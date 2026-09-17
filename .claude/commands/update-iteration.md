---
description: Update the site to a new app-repo iteration — pull the tag, write the levels not yet published, refresh what is derivable, then challenge journal and learnings together
argument-hint: <app-repo tag, e.g. 0.3.0> [further tags, one per level, in order]
---

One run of this command takes the site from its current iteration to the given one(s): it reads the
app repo at the tag, publishes the implementation levels that have no iteration yet, refreshes
everything that can be derived without a human decision, and then works through the journal and the
lessons **with** the user instead of writing them for them.

Arguments: `$ARGUMENTS` — one app-repo release tag per iteration to publish, in publication order
(e.g. `0.3.0 0.4.0`). No argument means: run Phase 1 and Phase 2 and then ask which tag to publish.

The app repo (the vault) is at `${WURZEL_REPO:-/home/svenja/src/wurzel/wurzel}`. It is the source of
truth for what was built; this repo is the source of truth for what is said about it. Read the vault,
never write to it.

## The two rules this workflow exists to protect

1. **Published iterations are append-only.** After a run, `git status` in this repo must show
   **additions only**, except for the non-versioned files named in Phase 4. A modified file from an
   earlier iteration means something is being expressed on the wrong side of the link — put it on the
   new artifact via `changes:` / `supersedes:` instead.
2. **Nothing is invented.** Facts come from the vault at the tag and are cited in `source` /
   `codeUrl`. Judgement — why it was decided that way, what changed in the way of working, what was
   learned — comes from the user in Phase 5. If a fact is missing and only a stakeholder has it, it
   is a business question: put it in the `questions` collection, do not synthesise an answer.

---

## Phase 0 — Preconditions

```bash
git status --porcelain                     # must be clean; stop and ask if not
npm run re:check 2>&1 | tail -30           # baseline, so this run is not blamed for old warnings
```

Record the baseline warning count. Stop and report if the tree is dirty — this workflow is judged by
its diff, and a dirty tree makes that unreadable.

## Phase 1 — Pull the app repo at the given tag

```bash
REPO="${WURZEL_REPO:-/home/svenja/src/wurzel/wurzel}"
git -C "$REPO" status --porcelain | head   # a dirty vault is fine to read, but say so in the report
[ -n "$(git -C "$REPO" remote)" ] && git -C "$REPO" fetch --tags || echo "local-only repo, nothing to fetch"
git -C "$REPO" rev-parse -q --verify "refs/tags/<tag>"   # empty output = the tag does not exist
```

- **Never create, move or delete a tag.** Tags of published states are what every citation pins to.
  If the tag does not exist, stop: the level has not been released yet, and that is the owner's call.
- The tag's commit date is the iteration's `date`: `git -C "$REPO" log -1 --format=%cs "<tag>"`.
- The delta since the last published iteration:

```bash
git -C "$REPO" log --oneline "<prev-tag>..<tag>" | head -60
git -C "$REPO" diff --stat "<prev-tag>..<tag>" -- docs | tail -40
```

- **Read the vault at the tag, not in the working tree** — `git -C "$REPO" show "<tag>:docs/…"`.
  An iteration documents the practice as it was at the time; the vault has been reorganised since,
  and reading today's state would write today's practice into a past iteration and delete the delta
  that makes it worth publishing.

## Phase 2 — The gap: which levels are not yet written

```bash
grep -h '^level:'   src/content/wurzel/iterations/*.md      # levels the site has published
grep -h '^version:' src/content/wurzel/iterations/*.md
git -C "$REPO" show "<tag>:docs/acceptance-checklist.md" | grep -n '^## Implementation Level\|Signed off\|Not signed off'
```

For each level the site does not have, check in the vault at the tag:

- **Is it signed off?** `acceptance-checklist.md` is authoritative. An unsigned level is not
  publishable — stop and ask rather than publishing a level the owner has not accepted.
- **Are its stories `Done`?** Only `Done` work is published; shipping `Ready` or `Placeholder`
  advertises features that do not exist.

```bash
git -C "$REPO" grep -l '^level: <n>$' "<tag>" -- 'docs/user-stories/*.md'   # the level's stories at the tag
git -C "$REPO" show "<tag>:docs/user-stories/<file>.md" | sed -n '1,12p'     # its status, epic, level, block
```

Do not guess which tag holds which level. The version tags in `mvp-scope.md` are documented as stale
(`0.4.0` once named the styling level, which is now Level 5). Derive it from the checklist and the
story frontmatter at the tag; if it is still ambiguous, **ask** — an iteration id is permanent.

State the plan in the reply: which levels, which tag each, how many `Done` stories each has, which
epics they touch.

## Phase 3 — Write the new iteration(s)

Per level, in order. Use the generator so ids, schema shape and `introducedIn` are stamped rather
than typed:

```bash
npm run content:new -- iteration wurzel WZ-<tag> --version <tag> --order <n> --level <n> --date <tag date>
npm run content:new -- story wurzel --prefix WZ --requirement WZ-R-xx --iteration WZ-<tag> \
  --source docs/user-stories/<file>.md --code-url <repo-relative path> --status done
```

**Curate, do not dump.** The guardrail is 15–25 stories *per iteration*, and the site publishes a cut
of the vault's stories, not all of them (Level 1: 20 of 41). Propose the cut explicitly in the reply,
ranked, with the reason per story — richest AI-override record, or most business-critical capability.
This selection criterion is still an open question in `docs/iterations-and-publication-plan.md`;
name which one you applied so the user can overrule it.

Also per iteration, where the vault supports it:

- `requirements` the new stories cover (`fitCriterion` — how you would prove the business goal is met)
- new `adr` entries (3–5 new per iteration) with `supersedes:` where they replace an earlier one
- new `diagrams` (5–10 new per iteration); Mermaid goes in the per-locale `code` field, a real
  BPMN/C4 export goes to `public/diagrams/` and `source:` points at the `.bpmn` / `.puml`
- new `glossary` terms the level introduced
- a new `workflow` step **only if the practice actually changed** — the step is the evidence, the
  `processChanges` sentence in Phase 5 is the narration

Citations: `codeUrl` is a **repo-relative path**, never a full URL and never `…/blob/main/…`. It
resolves against the case study's `repoUrl` pinned to this artifact's own iteration tag, so it stays
immutable without anyone typing a tag. Paths that resolve to nothing are the expected end state —
the repos are private by policy and are not linked from the site. Write the paths anyway; they are
exact citations and they stand as paths.

Prose is bilingual (`en` / `de`). German is written as German, not transliterated — the node labels
and domain terms differ per language.

## Phase 4 — Refresh what is derivable without the user

These are the only files an update may legitimately **modify**, and each modification is named in
the final report with its reason:

- **`topics`** — a topic is not versioned. Membership is derived (story via its `requirement`,
  diagram via the story citing it, ADR via `relatedRequirements`), so most levels need no edit at
  all; only the explicit list for a requirement that spans topics may need extending, or a new topic
  added if the vault's epic spine gained one (`docs/epics.md` at the tag).
- **`case-studies`** — anything the new iteration makes stale. Not `version`: it is deprecated and
  the displayed version is derived from the current iteration.
- **The previous iteration's own file only while it was still unpublished.** Once a newer iteration
  file exists, it is frozen.
- **TODO placeholders in artifacts of the still-current iteration** that the vault answers.

Everything else that looks like it needs an edit is a design signal, not a chore: put it on the new
artifact via `changes:` / `supersedes:` and say so.

## Phase 5 — Challenge the journal and the learnings, with the user

This is a conversation, not a generation step. `processChanges`, `lessons`, `aiContribution` and the
`journal` entries are the site's whole point, and they are the one thing the AI must not write on its
own. Bring the evidence, ask, push back, then draft what the user said and read it back.

Bring, from the vault at the tag:

```bash
git -C "$REPO" show "<tag>:docs/learnings/"   # and grooming/, harness/, process/, testsession/
git -C "$REPO" log --oneline "<prev-tag>..<tag>" --  docs/harness docs/process docs/learnings
```

Then use `AskUserQuestion`, one topic at a time, and challenge the answers:

1. **What changed in how you work?** Every iteration after the first must state this, or point at
   the iteration whose practice it reused (`sameProcessAs`). Challenge: is this a change in the *way
   of working*, or just a feature that shipped? A new tool is only a process change if it changed a
   decision.
2. **Does this iteration name a gap in an earlier one?** A gap only reads as growth if a later
   iteration names it. The absence does not speak; the sentence does. Ask which earlier gap this
   level closed — and write it here, never by editing the earlier file.
3. **The lessons.** Challenge each: is it a resolved lesson or still an open question? An open one
   is more honest and is allowed to say so. Is it specific enough that someone else could act on it?
4. **The AI contribution.** The interesting record is where the AI's proposal was **overridden**, and
   where it was **wrong and corrected in the open**. Ask for those, not for a list of what it helped
   with. Keep a superseded hypothesis visible instead of rewriting it away.
5. **The journal.** Dated working-log entries, not a blog. Ask which days are worth an entry —
   typically a dead end, a decision that flipped, a challenged assumption.
6. **Open business questions.** Anything that surfaced and only a stakeholder can answer goes to the
   `questions` collection with `askedOf`, `blocks` and `consequence`. `re:check` errors if a blocked
   story moves past `backlog` — that error is the signal someone is about to synthesise the answer.

Read the drafted prose back before writing it, in both languages.

## Phase 6 — Gate and report

```bash
npm run re:check
npm run build
git status --porcelain            # additions only, plus the Phase 4 files
```

Report:

- the tag(s), their dates, and the levels published
- new files by collection, with the story cut and the criterion used
- every **modified** file with its reason (a modification not covered by Phase 4 is a defect — say so)
- `re:check` delta against the Phase 0 baseline, and any remaining `TODO` placeholder
- open questions written, and anything left unanswered

Do not commit unless the user asks.
