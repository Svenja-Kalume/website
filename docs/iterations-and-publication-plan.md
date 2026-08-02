# Iterations & publication plan — remaining steps

Drafted 2026-08-01. Captures what was decided in one long working session and what is left to do.

**Status as of 2026-08-02 — everything doable without content or the vault is done.**

| | |
|---|---|
| ✅ **Stage 1** | versioning foundation — schema, `WZ-0.1.0`, 46 artifacts backfilled, `re:check` upgrades |
| ✅ **Stage 3** | authoring ergonomics — generator, templates, `CLAUDE.md`, post-write hook |
| ✅ **Stage 5.1–5.3, 5.6** | `questions` collection, acceptance-criteria lints, `fitCriterion`, `harnessChange` |
| ✅ **Page defects** | derived version on the home page; `how-i-work` and `traceability` scoped per project |
| ✅ **7.1** | resolved by absorbing the content repo (amendment under *Repos involved*) |
| ⏸️ **Stage 2** | rendering — **blocked on having a second iteration**, not on effort |
| ⏸️ **Stage 4** | Level 2 content — yours to write |
| ⏸️ **Stage 5.4, 5.5** | held deliberately, see the notes there |
| ⏸️ **Stage 6** | vault-side, untouched |
| ⏸️ **7.2–7.4** | deployment, blocked on hosting |

**Three things turned out to be broken rather than merely missing**, found while doing the above:
the post-write hook had silently stopped firing for *every* artifact (it matched a pre-multi-project
path); `how-i-work` sorted all workflow steps globally, which would interleave two projects; and the
home page read `case-studies.version`, the field decision 4 retires.

The goal it serves: the site must show **development over time** — Level 1 stays visible when Level 2
is published — and show **how the way of working changed**, not only which features shipped.

## Where to pick up (read this first)

The website side is finished until Level 2 content exists. The chain of next actions, in order:

1. **Acceptance-test Level 2 in the app repo.** It is implemented (13 stories `Done`) but not yet
   accepted, so it is not publishable — decision 5. Before testing, read
   `docs/acceptance-checklist.md`'s **Level 2 criteria**, which have still never been read: if any
   require issuing an invoice, the Level 2/3 re-cut is wrong and you would be testing the wrong
   scope.
2. **Tag `0.2.0`** in the app repo once accepted. Its date becomes the iteration's `date`.
   Tags for published states must never move or be deleted — citations pin to them.
3. **Write `iterations/WZ-0.2.0.md`.** This is the moment two things happen:
   - **Stage 2 unblocks.** It needs the *iteration entry*, not the full content pass — so the
     rendering can be built while the 20 artifacts are still being written.
   - **Level 1 closes.** Until this file exists, `WZ-0.1.0` is still the *current* iteration and
     remains editable. After it, L1 is frozen and its gaps become the delta.
4. **Decide before step 3**, because step 3 shuts the window: leave the 7 L1 requirements without
   `fitCriterion`? Recommendation — **yes, leave them**. The delta is worth more than uniform
   coverage, and it is the same reasoning that keeps `WZ-01b-requirements.md` stashed. Say it in
   `WZ-0.2.0`'s `processChanges` instead.
5. **Then stage 4** (L2 content) and **stage 2** (rendering) in parallel.

Independent of all of the above, whenever you want it: **hosting** (7.2–7.4). It blocks going live,
and nothing else.

Restore the stashed workflow step at step 3: `git stash pop` → stamp `introducedIn: WZ-0.2.0`.

## Repos involved

| Name used here | Path | Role |
|---|---|---|
| **website** | `C:\spielerei\Website` | the Astro site **and the case-study content** (`src/content/wurzel/`) |
| **app repo / vault** | `C:\spielerei\wurzel` | the .NET solution + `docs/` — the working vault. Never mounted into the site; cited by URL. |

No git relationship between the app repo and the content; content is derived by hand.
Neither repo has a remote today.

> **Amended 2026-08-02.** The content was originally a third repo (`C:\spielerei\wurzel-content`)
> mounted as a submodule at `src/content/wurzel`. Removed: it isolated content written for this site
> only, by the same author, consumed by nothing else — while the independence that matters (the app
> repo) was already achieved by *linking* rather than mounting. Freezing a state of understanding is
> what this plan turns into data anyway (`iterations` + `introducedIn`), which was the submodule's
> last job. `wurzel-content` is retained as a history backup (branch `import-0.1.0`, tag `0.1.0`);
> the re-split recipe lives in `docs/separating-content.md` (Option C) for the day the content gains
> a second author or consumer. Everywhere below that said "content repo", read
> "`src/content/wurzel/` in the website repo".

## Decisions taken

1. **Option A — one curated content folder per project.** That folder holds what cannot be derived
   (bilingual prose, `aiContribution`, stakeholders, requirements, the curation cut); the vault holds
   what was built and is *cited*, not copied. Chosen over mounting the vault (A+) because the vault's
   machine-readable contract exists only thanks to a deliberate Astro-shaping plan, and the next
   project won't have it on day one. A+ stays available later, per project, if copied metadata drifts.
2. **The publication unit is the level, not the block.** Blocks are a grouping *inside* an iteration,
   so the number of published versions stays small.
3. **Iteration ids are keyed on the release tag** (`WZ-0.1.0`, `WZ-0.2.0`), with `level` and `blocks`
   as fields. `mvp-scope.md` already maps `0.1.0` = Level 1, `0.2.0` = Level 2, `1.0.0` = full MVP.
4. **Published iterations are append-only.** A later iteration corrects an earlier one via `corrects`;
   nothing already published gets edited. This is a schema constraint, not just a habit: no field may
   live on an older artifact that a newer iteration would have to fill in. Concretely — the change
   pointer sits on the new artifact (`changes`, `supersedes`), the current iteration is derived from
   `order`, and the case study's displayed version is derived from its current iteration rather than
   read from `case-studies.version`. Any field that breaks this rule is a design bug.
5. **Publish only `Done` work.** Shipping `Ready`/`Placeholder` stories would advertise features that
   do not exist — the simulation the site refuses.
6. **Scope guardrails count per project per iteration**, and for ADRs and diagrams specifically
   "N *new* per iteration" — they are cumulative and never deleted, so a total-based limit is
   meaningless.
7. **The two hardcoded Mermaid diagrams stay hand-written.** The view that shows progress is the
   `workflow` collection rendered per iteration — L1's process beside L2's. That is data, and it makes
   the hardcoded pair redundant rather than wrong.
8. **Level 2 was re-cut** (executed in the vault on 2026-08-01): Level 2 = offer documents (blocks 1,
   2a, 2b, 2c, 3.0 — 13 stories, all `Done`); Level 3 = the invoice chain (`l3-block1a-*`). This makes
   iteration = level = tag true 1:1 and removes the need to publish partial levels.
9. **`plans/` is split by lifecycle** in the vault: story plans stay in `plans/`, grooming and
   prioritization records move to `grooming/`, way-of-working changes to `harness/`.
10. **No level folders for plans.** Level is the fact that moves — it moved on 2026-08-01 — and a path
    is the most expensive place to encode a mutable fact. Group by level in a generated
    `plans/index.md` instead, and derive a plan's level from the story it names.
11. **The vault is cited, never read** (2026-08-02). The site's content is `src/content/wurzel/` in
    the website repo; nothing globs `C:\spielerei\wurzel\docs\`. So vault reorganisation cannot break
    the build. The only coupling is `source` / `codeUrl` paths — reorganise the vault **before**
    those are populated, not after.
12. **Citations are relative and auto-pinned** (2026-08-02). `codeUrl` = repo-relative path;
    `case-studies.repoUrl` = the repo base, set once. The tag comes from the artifact's own
    iteration, so immutability holds *by construction* rather than by convention, and hosting no
    longer gates authoring.
13. **Advisory checks apply only to the current iteration** (2026-08-02). A published iteration
    cannot be improved without editing a published file, so advisories against it are permanently
    uncleanable. A gap in an earlier iteration is **evidence of how the practice grew** — narrate it
    in the next iteration's `processChanges` instead of backfilling it. Errors still apply
    everywhere; coverage stays global.

## Corrections made during the session — do not re-litigate

- Iteration ids were first keyed on the level (`WZ-L1`); corrected to tag-keyed once it emerged that a
  level lands in more than one increment. The Level 2/3 re-cut then made the two coincide anyway.
- Block `3a` was proposed as the Level 2 centrepiece. It is 10 × `Ready`, **nothing built**, so it
  cannot be published under `Done`-only. It is now Level 3.
- "Level 2 is all about invoices" describes the plan, not the delivery. The shipped part of Level 2 is
  offer documents: Done-by-epic is Offers 6, Projects 3, Customers 2, Positions 1, Administration 1,
  Platform 1.
- A+ (mounting the vault) was recommended before the second project was mentioned; the multi-project
  requirement moved the recommendation back to A.

## Still open

- [x] Decision 1 — settled 2026-08-02, and in a stronger form than drafted: one curated content
      *folder* per project, in this repo. See the amendment under *Repos involved*.
- [x] Decision 6 — confirmed 2026-08-02 and implemented in `re:check`: guardrails per project per
      iteration, ADRs and diagrams as "N new per iteration".
- [ ] The backfill in step 2.2 — recommended, never explicitly agreed. (Not the `introducedIn`
      backfill, which is done; this is the *rendering* question of regrouping the case-study page.)
- [ ] Exemplar-selection criterion: richest **AI-override** story, or most **business-critical**
      feature? They are rarely the same story. **Blocks stage 4.**
- [ ] Is Given/When/Then or EARS the house style for acceptance criteria? Measured 2026-08-02:
      **109 of 118** existing criteria are declarative-testable instead ("CustomerNumber is generated
      as yyyy-nnn"), which is a legitimate third style. `re:check` therefore reports shape as a
      **count, not a warning** — warning on all of them would be red on day one. Adopting GWT/EARS
      means a 109-criterion rewrite; that is a deliberate decision, not one a linter should make.
- [ ] `harness/` as its own folder vs folding those records into the existing `process/`.
      Recommendation: separate — `process/` describes how it works now, `harness/` records how it
      changed, which is the reference-versus-ADR distinction already made elsewhere.
- [ ] `acceptance-checklist.md` is authoritative for the Level axis and its Level 2 criteria were
      never read. If any of them require issuing an invoice, they must move to Level 3, or Level 2 can
      never be signed off.
- [ ] Hosting: where the two repos live when not on this machine. **Blocks deployment only** —
      corrected 2026-08-02. It was previously recorded here as blocking code citations too, because
      `codeUrl` was typed `z.string().url()`. That was a self-inflicted schema constraint and it is
      gone: `codeUrl` now takes a **repo-relative path**, resolved against `case-studies.repoUrl` and
      pinned to the artifact's own iteration tag. Citations can be authored with no hosting at all,
      and setting `repoUrl` later turns every path in every iteration into a live link **without
      editing a published artifact**. See *The citation contract* in `docs/separating-content.md`.
      Still true: `codeUrl`, `jiraKey`, `source`, `image`, `demoUrl` are unset across all 65 L1 files,
      so the chain currently stops at ADR — but that is now a content decision, not a blocker.
- [ ] Where the way-of-working timeline lives once a second project exists — a site-level `method`
      collection, or a comparison view over each project's `workflow` steps. See *Multi-project*.
      Not blocking until project two has content.

## Stage 1 — versioning foundation (schema + content, one repo) — ✅ DONE 2026-08-02

Shipped in `0c33f30` as one atomic commit (schema + backfill together, which only the single-repo
layout allows). The spec below is kept as the record. **Deltas from what was drafted:**

- `workflow` deliberately gained **no `case` field**: a step's project is derived through
  `introducedIn → iteration → case`, so there is one source of truth rather than two that can
  disagree. This also fixes the `how-i-work` interleaving defect at the data layer.
- `case-studies.version` is marked deprecated in place rather than removed — the pages read the
  derived value now (`src/lib/iterations.ts`), and the field is the fallback while a project has no
  iterations.
- `re:check` gained more than 1.5 asked for: it prints the timeline and the derived current version,
  and its new checks were each verified against a scratch dataset (order tie, forward pointer,
  6-new-ADRs limit — and 5 + 5 ADRs across two iterations correctly *not* firing, where the old
  total-based limit would have).

1.1 **website** `src/content.config.ts` — add the `iterations` collection:

```ts
const iterations = defineCollection({
  loader: base('iterations'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    version: z.string(),                       // "0.2.0" — the app-repo tag; the identity
    // Optional on purpose: `level` and `blocks` are wurzel's scheduling vocabulary
    // (Phase ⊃ Level ⊃ Block). The next project may use sprints, milestones or nothing.
    level: z.union([z.number().int(), z.literal('post-mvp')]).optional(),
    blocks: z.array(z.string()).default([]),   // "1", "2a", … as in the vault
    stageLabel: loc.optional(),                // free label when a project has no level axis
    order: z.number(),
    date: z.coerce.date(),
    // No `status: current | superseded` field: publishing a new iteration would then require
    // EDITING the previous iteration's file. The current one is derived — highest `order`.
    summary: loc,
    intro: locArr.optional(),
    processChanges: locArr.optional(),         // what changed in HOW you work — the headline
    corrects: z.array(reference('iterations')).default([]),
    lessons: locArr.optional(),
    sourceUrl: z.string().url().optional(),
    aiContribution: loc.optional(),
  }),
});
```

1.2 **website** — on `user-stories`, `requirements`, `diagrams`, `adr`, `workflow`:
`introducedIn: reference('iterations')` and `source: z.string().optional()` (the vault file this
artifact cites). All optional at first so nothing breaks.

**Deliberately no `changedIn` on the older artifact.** When an L2 artifact changes something L1
introduced, the pointer goes on the **newer** artifact — `changes: z.array(reference(<same collection>)).default([])`
— and the site computes the reverse link. Storing it on the old artifact would mean editing a
published file every time a later iteration touches it, which is exactly what decision 4 forbids.
Same reasoning for `adr`: `supersedes: reference('adr').optional()` on the new ADR, never
`supersededBy` on the old one (this also matches the vault, where the superseding ADR is the newer
file).

1.3 **content** — `src/content/wurzel/iterations/WZ-0.1.0.md`: level 1, version `0.1.0`, date = the
`0.1.0` tag date from the app repo. `processChanges` / `lessons` stay empty — they are your
commentary, not derivable.

1.4 **content** — backfill `introducedIn: WZ-0.1.0` into the 46 existing artifacts
(20 stories · 7 requirements · 8 diagrams · 5 ADRs · 6 workflow steps) as **one commit labelled as a
migration**. Additive metadata only, no claim is edited. Since 2026-08-02 the schema (1.2) and this
backfill live in the same repo, so they can land as one atomic commit — no broken intermediate state.

1.5 **website** `scripts/check-traceability.mjs` — count limits **per project per iteration**; ADRs and
diagrams as "new per iteration"; validate iteration references; `order` unique within a case study
(the current iteration is derived from it, so a tie is ambiguous); warn on a missing `introducedIn`;
error when a `changes`/`supersedes` reference points **forward** in time (a later iteration may correct
an earlier one, never the reverse). Without this, `re:check` prints an uncleanable scope
warning from the second iteration onward, and an uncleanable warning is one you learn to skip.

1.6 `npm run re:check` and `npm run build` green.

## Multi-project — two projects, each with its own iterations

A second project is expected. What that requires, and what it must not require:

- **Adding a project stays "add a folder, no code change."** Its folder carries the same collections,
  including `iterations`. Nothing in stage 1 or 2 may hard-code wurzel.
- **Ids are prefixed per project** — `WZ-0.1.0`, then `<XX>-0.1.0`. Ids are flattened to the filename
  across all projects (`content.config.ts`), so they must be globally unique. Same for `order`, which
  is only ever compared within one case study.
- **`level` and `blocks` are optional** (see 1.1). Wurzel's `Phase ⊃ Level ⊃ Block` is *its* scheduling
  vocabulary, not the site's contract. A project without a level axis uses `stageLabel` instead, and
  the rendering must degrade to "iteration N" rather than assuming a level exists.
- **Guardrails count per project per iteration** (decision 6) — otherwise the second project's first
  iteration inherits the first project's totals and the limit fires immediately.
- **Two timelines, not one merged feature timeline.** Each case study renders its own iterations;
  comparing feature delivery across unrelated projects means nothing.
- **But the way of working has one timeline, and it spans projects.** The harness carrying over from
  wurzel into the next project — and improving there — is a stronger story than either project's
  features. Today `workflow` steps live inside each project's content folder, so a cross-project view
  of the method has no home.

  Two options when the second project arrives, to decide then rather than now:
  **(a)** a site-level `method` collection outside every project folder, whose entries
  reference the project-iterations that changed them — one timeline of how you work, citing evidence
  from both projects; or **(b)** keep `workflow` per project and render a comparison view that reads
  both. (a) is cleaner and matches "the process is the portfolio"; (b) avoids inventing a collection
  that lives outside every project folder. Not blocking — it only matters once project two has content.

Consequence for stage 2: build the rendering to loop over case studies and their iterations, never
over "wurzel" specifically, and never assume a level exists.

## Navigation & URLs — part of stage 2

Iterations add a level of depth the current information architecture has no room for. The nav itself is
a hardcoded array in `BaseLayout.astro:20-25` (Home · Case Studies · How I Work · Traceability ·
Journal · About) with keys in both locales — chrome, not content, and it should stay that way.

**URL scheme: the iteration is a route segment.**

```
/en/case-studies/wurzel            → overview: iterations listed, current one prominent
/en/case-studies/wurzel/0.2.0      → that iteration: blocks, exemplar stories, processChanges
/en/case-studies/wurzel/0.1.0      → still there, unchanged, forever
```

Chosen over sections-with-anchors on one long page because a published iteration needs a **stable,
citable URL** — that is what "0.1.0 stays available when 0.2.0 is described" means in practice, and it
is the link you can put in an application. `getStaticPaths` gains a loop over each case study's
iterations.

Consequences:

- **The case-study page becomes an index**, not a dump of every artifact. Current iteration summarised,
  earlier ones listed.
- **Breadcrumbs are needed** — `Case Studies › wurzel › 0.2.0`. None exist today, and three levels
  without them is where a docs-like site starts feeling lost.
- **Do not add a top-level nav item.** Six is already the ceiling for chrome this minimal; the
  iteration timeline belongs inside the case study, and "How I Work" stays the method entry point.
  Adding nav for content that does not exist yet is the easy wrong move.
- ✅ **`index.astro` version tag** — fixed 2026-08-02 (`a279e00`). Derived from the current iteration
  via `src/lib/iterations.ts`, falling back to `case-studies.version` while a project has none.
  Invisible today (both read `0.1.0`); it would have shown a stale version the day L2 published.

**Two defects that already existed and would bite when project two arrives** — ✅ both fixed
2026-08-02 (`a279e00`), since they were the same root cause and needed no content:

- ✅ `how-i-work.astro` — workflow steps were sorted globally by `order`, which interleaves two
  projects into one nonsensical list. Now grouped by project (derived through
  `introducedIn → iteration → case`); a single project still renders as a plain list with no heading.
- ✅ `traceability.astro` — one flat table across every project. Now one table per case study, and
  the Case column is dropped when there is only one project, where it was pure redundancy.

Verified on a throwaway two-project dataset: two grouped step lists in the right per-project order,
two tables with case headings, and a second project whose stored `version: "9.9"` was correctly
overridden by its iteration's `0.1.0`.

**Still to do here:** grouping by *iteration* within a project (the above scopes by project only),
the route segment, and breadcrumbs. All of it needs a second iteration to build against.

## Stage 2 — rendering (website)

Ordered so the differentiator lands first. **⏸️ Held until `iterations/WZ-0.2.0.md` exists** — note
that is the *iteration entry only*, not the full L2 content pass, so this can be built while the 20
artifacts are still being written. Building "L1's process beside L2's" against one iteration means
building blind, and the honest fix is not a stub. The groundwork is in place: `src/lib/iterations.ts`
already resolves the current iteration, an artifact's project, and a tag-pinned code link.

2.1 `how-i-work.astro` — render `workflow` steps **per iteration**, L1's process beside L2's. This is
the progress view. (Per-*project* grouping is already done; per-iteration is what remains.)
2.2 `case-studies/[slug].astro` — group artifacts by iteration (current expanded, earlier collapsed),
and by block inside an iteration.
2.3 An iteration timeline: per entry the summary, `processChanges`, `corrects`, `lessons`.
2.4 `traceability.astro` — iteration filter. (Per-case grouping is already done.)
2.5 `src/i18n/ui.ts` — every new label in **both** locales. Note the `ui` dictionary is
type-checked across locales: adding a key to one locale only is a compile error, not a silent gap.

## Stage 3 — authoring ergonomics (website) — ✅ DONE 2026-08-02

Shipped in `cf8983d`.

3.1 ✅ `scripts/new-content.mjs` — `iteration|it` alias; `--iteration`, `--source`, `--changes`,
`--supersedes` on artifact scaffolds. Iterations are never auto-numbered (the id is the tag).
**A bug was caught here by building the generated stub rather than reading it:** `--blocks "1,2a"`
emitted `blocks: [1, 2a]`, and an unquoted `1` parses as a number against `z.array(z.string())`.
It would have failed on the first L2 iteration.
3.2 ✅ `docs/templates.md` — iteration block, a shared *versioning fields* section, and the project
segment restored in every template path (`src/content/<project>/…`, stale since the multi-project
layout landed).
3.3 ✅ `CLAUDE.md` — `iterations`, per-iteration guardrails, the append-only rule and why there is no
`changedIn` / `supersededBy` / `status`.
3.4 ✅ `.claude/harness/post-write.mjs` — **the hook was dead.** It matched
`src/content/<collection>/`, which stopped being the layout when content moved to
`src/content/<project>/<collection>/`, so it had silently fired for nothing. Repaired, and extended
with `iterations`, `workflow`, `questions` and `journal` checklists.

## Stage 4 — Level 2 content, when you decide it is ready

⏸️ **Yours to write.** The website side is ready: the schema accepts it, the generator scaffolds it,
`re:check` validates it. Three things gate it:

- **Acceptance testing.** Level 2 is implemented (13 stories `Done`) but not accepted. Decision 5 —
  publish only Done work — means accepted, not merely built. No tag until it passes.
- **The `acceptance-checklist.md` Level 2 criteria**, still never read; they could force the
  Level 2/3 re-cut to be redone, so read them *before* testing rather than after.
- **The exemplar-selection criterion** (open, above).

Test failures are not a setback for the site: a story returning from `Done` is the gate working, and
a failure with no answer in any artifact is an `OQ-` entry, not a defect.

The publication shape agreed for an iteration:

- **1 iteration entry** — what the level was, what changed in how you work, what the previous
  iteration got wrong.
- **5 block summaries** — blocks 1, 2a, 2b, 2c, 3.0. A paragraph each: what it delivered, what was
  decided, what the AI contributed. This is the layer a recruiter and a skimming peer read.
- **2–3 fully traced exemplar stories**, `Done` only — requirement → story → acceptance criteria →
  BPMN → ADR → code → tests, with the AI contribution at each step. For a peer, three stories traced
  completely beat twenty listed shallowly; breadth is what every portfolio has.
- **Level 3 as work-in-progress evidence** — groomed, not built, `l3-block1a-grilling-decisions.md`
  linked. Process evidence, no feature claim.

Steps: tag the app repo → write the content under `src/content/wurzel/` with
`introducedIn: WZ-0.2.0` (L1 files untouched) → an L2 process diagram beside
`WZ-delivery-pipeline.md` → `re:check`, `build` → one commit, tagged in the website repo.

**Publishing adds files; it never overwrites one.** `git status` after writing L2
should show only additions. A modified L1 file is the signal that something is being expressed on the
wrong side of the link — put it on the new artifact instead. The two legitimate exceptions, both
outside the frozen content: `case-studies/wurzel.md` if the case study's own narrative genuinely needs
extending, and a workflow step that is *still* accurate but gained a nuance — and even there, the
honest move is usually a new step with `changes:` pointing at the old one, so the L1 process still
renders as it was.

Reader funnel to design against, since two audiences share one site: home (30 seconds) →
iteration page (2 minutes) → one traced story (10 minutes). The failure mode is prose written for
neither — too shallow for a peer, too jargon-heavy for a recruiter.

## Stage 5 — later website-harness phases

Deliberately after stage 1, because they are all schema work and stage 1 sets the schema.
**5.1, 5.2, 5.3 and 5.6 are done; 5.4 and 5.5 are held, each for a stated reason.**

5.1 ✅ **Open questions** — `questions` collection (`OQ-01`), shipped 2026-08-02 (`555442e`):
`question`, `askedOf`, `askedOn`, `status`, `answer`, `answeredOn`, `blocks`, `consequence`.
`re:check` **errors** when a story listed in `blocks` moves past `backlog` while the question is open —
that error is the signal someone is about to synthesise an answer only a stakeholder has. Also warns
on an open question with no `askedOf`, and errors on `answered` with no answer. Verified both
directions on a scratch copy.

5.2 ✅ **Acceptance-criteria lints** — shipped (`555442e`), but with severities chosen by **measuring
the existing 118 criteria first**, which overturned the drafted plan:
- **weasel words are a warning.** All 118 are currently clean, so it stays green and guards future
  content rather than accruing a backlog.
- **shape is NOT a warning.** 109 of 118 are declarative-testable, a legitimate third style — not 109
  defects. Warning on them would be red on day one, the exact failure this step's own note names.
  Reported as one counted line; `npm run re:check -- --lint-ac` lists them. Whether to adopt GWT/EARS
  is now an open decision above, not a linter's call.

5.3 ✅ **`requirements.fitCriterion`** (Volere) — shipped (`555442e`). Retires the checklist item
"businessGoal measurable?", which was a hope rather than a field. All 7 requirements currently lack
one; reported as info, since filling them is retrospective work on published artifacts.

5.4 ⏸️ **Tests as data** — `user-stories.tests[]`, warn when a `done` story has no test link.
**Held deliberately.** Every story is `done` and none can carry a link until the app repo is
reachable, so it would emit 20 warnings on day one — the failure mode 5.2 was corrected for.
Do it *after* hosting (7.2), not before.

5.5 ⏸️ **Structured AI contribution** — `{ proposed, changed, rejected }`, accepted as a union during
migration. Then `re:check` can print *"human changed or rejected the AI proposal in X of Y stories"* —
the only claim on the site backed by a countable figure. Last, because it rewrites ~30 content files;
that makes it content work, and it belongs with a content pass rather than a harness pass.

5.6 ✅ **`journal.harnessChange`** — shipped 2026-08-02 (`f1aefb9`). Warns on a `retro`-tagged entry
that names no change. Green today (no entry is tagged `retro`); verified on a scratch copy that it
fires and clears.

## Stage 6 — vault-side track (app repo)

⏸️ **Untouched — deliberately out of scope for the website-side work of 2026-08-02.**

6.1 Rewrite the harness plan against the **real** harness — 6 agents, `groom-story`/`deliver-story`,
5 workflow scripts, 8 rules, 10 skills, and the existing `C:\spielerei\wurzel\docs\harness\harness-improvements.md`
(moved there by decision 9; the plan previously cited it under `docs/plans/`). The misaimed draft that
targeted the *website's* harness no longer exists anywhere in the website repo — nothing to delete;
its still-valid parts are folded into stage 5 above.
6.2 **Document the intent-driven AI harness project-side, before the website uses the term.**
`CLAUDE.md` in the website repo now names *Intent-driven AI Harness* as a station in the red thread,
but the harness it names lives in the app repo — 6 agents, `groom-story`/`deliver-story`, 5 workflow
scripts, 8 rules, 10 skills. Vocabulary has to be defined where the thing itself is, or the website is
coining a label for someone else's system.

The formulation already exists in your own words, in `WZ-delivery-pipeline.md`'s caption: *"the AI
executes the delivery phases; the human owns intent, scope and every gate."* That is the definition —
it needs a home and a name.

Suggested home: `docs/process/intent-driven-harness.md` in the app repo. `process/` is declared
"human-facing orientation only" with `.claude/commands/` authoritative for mechanics, which is exactly
the right split for a conceptual definition — as opposed to `harness/`, which records how the way of
working *changed*.

What it should pin down:

- **What stays human**: the business need, the invariants that bound each AI proposal, priority, the
  curation cut, and every gate. Evidence for this is already in the requirement records — the AI
  proposed the mechanism, you set the rule it could not break.
- **What is delegated**: drafting, grooming, parallel planning, implementation, test-first execution,
  review.
- **Where each gate sits and who owns it**: readiness gate, plan approval, acceptance — and the rule
  that a *business* question never gets an AI-synthesised answer. The website now **enforces** that
  rule in data (5.1: `questions` + the `re:check` error), so the vault document and the site agree
  rather than the site merely asserting it.
- **How intent is captured** so it survives the session: which artifact holds it (`docs/` records) and
  which does not (chat).

Then the website *quotes* this rather than inventing vocabulary, and the `workflow`-per-iteration
rendering has a source to cite. This also makes the term legible to a reader who arrives at the site
cold — currently it would appear only in the red thread, undefined.

6.3 Verify `astro-docs-structure.md`'s own checks actually hold: duplicate basenames, `title` +
`description` on every file, no spaces in paths, `index.md` per folder. Marked executed 2026-07-26,
never verified. Read-only, minutes — and its own justification applies: running them in the vault
means the site never discovers a break that could have been caught earlier.

## Stage 7 — deployment plumbing

7.1 ~~The content origin lacks the `0.1.0` commit~~ — **resolved 2026-08-02** by absorbing the content
into the website repo. A clean clone now builds with full content, and there is no submodule pointer
to keep in sync. (`C:\spielerei\wurzel-content` keeps the original history as a backup on branch
`import-0.1.0` with tag `0.1.0`; nothing reads it.)
7.2 A real remote for the website repo, and one for the app repo (`C:\spielerei\wurzel`) — the latter
is what makes `codeUrl` writable at all (`z.string().url()`), so it gates the "→ Code → Tests" end of
the chain, not just deployment. Two remotes, not three.
7.3 `astro.config.mjs` — set `site:` to the real domain.
7.4 CI/IONOS — plain checkout, no submodule flag needed.

## Held back deliberately

`src/content/wurzel/workflow/WZ-01b-requirements.md` is **in the git stash** since 2026-08-02
(`stash@{0}`, message "WZ-01b-requirements: needs introducedIn WZ-0.2.0 (stage 4)"). Restore it with
`git stash pop` when writing Level 2. **A stash is local to this machine and is never pushed** — if
the repo is cloned elsewhere before then, that file is gone; recover it from
`git stash show -p stash@{0}` while it still exists, or accept rewriting it.

It is a requirements stage missing from the six documented workflow steps, `order: 1.5`, `aiRole`
derived from the seven requirement records rather than invented.

**Restore it in stage 4, not before.** `workflow` now *has* `introducedIn` (step 1.2, done), but
`introducedIn` is a validated `reference('iterations')` — so the file cannot build until
`iterations/WZ-0.2.0.md` exists. That is stage 4. The original plan said "commit it in stage 1"; that
was off by one.

Committing it without an iteration would be worse than a build error: it would land in the *current*
step list and present a 7-step process as Level 1's way of working. It is Level 2 thinking — the
`aiRole` was written with hindsight across all seven records. Nothing is broken by waiting: the
`0.1.0` content tag does not contain it. When restoring, stamp `introducedIn: WZ-0.2.0` and settle its
`order` against Level 2's real step list instead of the `1.5` guessed at now.

For the same reason both site Mermaid diagrams and five workflow renames were **reverted** to the
`0.1.0` state during the session: hand-editing them was papering over a versioning problem that data
solves.
