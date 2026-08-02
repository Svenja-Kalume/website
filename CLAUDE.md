# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is (and is not)

This is **not a résumé/portfolio website**, but the **visible documentation of a way of working** —
a *living case study* that shows how a business problem turns, step by step, into a well-founded
software system: **AI-assisted, but always with human judgement.** Target profile:
*AI-assisted Technical Business Analyst / Requirements Engineer*.
The **process is the portfolio**, not the result.

Red thread of every case study:
`Problem → Stakeholders → Workshop → Glossary → Intent-driven AI Harness → Requirements + DDD + BPMN
→ User Stories → Readiness gate → Architecture (ADR) → Code → Tests → Retrospective`.

The **readiness gate** splits failures by owner: a *formal* defect (ambiguous, not testable, glossary
term missing) loops back into the harness — you and the machine fix it. A *business question* has no
answer in any artifact; only a stakeholder has it, so it re-enters via the workshop. Never let the AI
synthesise an answer to the second kind.

At each station: the **artifact**, the **reasoning** ("why did I decide this way?") and the
**AI contribution** ("what did the AI propose, what did I change?").

## North-star principles (do not violate)

1. **Traceability is the differentiator** and is modelled as **data** (see content collections),
   never as a hand-maintained link list. Chain: `R-xx → US-xx → BPMN → ADR → Code → Tests`.
2. **Real tools, no simulation.** Existing project artifacts are **linked** (GitHub, Jira, diagram
   exports) — **not invented**. When filling content, do not create fictional requirements/stories.
3. **Make the AI contribution transparent** (`aiContribution` / `aiRole`).
4. **Minimal, docs-like.** No animations.
5. **Keep the scope guardrails** (below). If a task exceeds them, pause and check in — do not expand.

## Scope guardrails (deliberate upper limits)

3–5 core projects · 15–25 user stories · 5–10 BPMN diagrams · 1 context map · 1 domain model ·
3–5 ADRs · a **small** demo (2–3 workflows, no registration/password reset).
`npm run re:check` warns when a limit is exceeded.

Everything except the project count is counted **per project per iteration**, and diagrams and ADRs
read as "N *new* per iteration" — they are cumulative and never deleted, so a total-based limit would
fire forever from the second iteration on, and a warning you can never clear is one you learn to skip.

## The readiness gate, as data

The gate splits failures by owner, and each half now has a home:
- A **formal** defect (ambiguous, not testable, glossary term missing) loops back into the harness.
  `re:check` catches part of it: unmeasurable wording in acceptance criteria is a **warning**, and
  `requirements.fitCriterion` records how you would *prove* the business goal is met (Volere's term).
- A **business question** has no answer in any artifact — only a stakeholder has it. It goes in the
  **`questions`** collection (`OQ-01`) with `askedOf`, `blocks` and `consequence`. **`re:check` errors**
  when a story it blocks moves past `backlog`. Never let the AI synthesise an answer to this kind;
  that error is the signal someone is about to.

Acceptance-criteria *shape* (Given/When/Then / EARS) is reported as a **count, not a warning** —
the existing criteria are declarative-testable, which is a valid third style, and a check that is red
on day one is one you learn to skip. `npm run re:check -- --lint-ac` lists them.

## Iterations (development over time)

The site must show Level 1 *still standing* when Level 2 is published, and show how the **way of
working** changed — not only which features shipped. That is modelled as data, in the `iterations`
collection. Full reasoning: **`docs/iterations-and-publication-plan.md`**.

- **The publication unit is the iteration**, identified by the **app-repo release tag** (`WZ-0.1.0`).
  `level` and `blocks` are optional — that is wurzel's scheduling vocabulary, not the site's contract.
- **Published iterations are append-only.** Never edit a file a published iteration shipped. This is
  enforced by the schema shape, not by discipline: the change pointer lives on the **newer** artifact
  (`changes`, `supersedes`), there is no `changedIn` / `supersededBy`, and the current iteration is
  **derived** (highest `order`) rather than stored. `re:check` errors on a pointer that points
  *forward* in time. If a field would force an edit to a published artifact, it is a design bug.
- **Every versioned artifact carries `introducedIn`** (`user-stories`, `requirements`, `diagrams`,
  `adr`, `workflow`) — plus `source`, the vault file it cites. Let the generator stamp it:
  `npm run content:new -- story wurzel --requirement WZ-R-01 --iteration WZ-0.2.0`.
- **Publish only `Done` work.** Shipping `Ready`/`Placeholder` stories advertises features that do not
  exist — the simulation this site refuses.
- **Every iteration after the first states what changed in how you work** — `processChanges`, or
  `sameProcessAs` pointing at the iteration whose practice it reused. `re:check` warns otherwise.
  A gap in an earlier iteration only counts as evidence of growth if a later one **names** it;
  unnarrated, it just reads as missing content. The absence does not speak; the sentence does.
- **Citations out of a published iteration must be immutable**, and **hosting does not gate writing
  them.** Write `codeUrl` as a **repo-relative path**; it resolves against the case study's `repoUrl`
  pinned to the tag of the artifact's own iteration, so the tag is never typed and never wrong. Until
  `repoUrl` is set the path renders as text, and setting it later turns every path in every iteration
  into a live link **without editing one published file**. A hand-written full URL must be pinned to a
  tag itself — `re:check` warns on `…/blob/main/…`. Full contract: `docs/separating-content.md`.
- `case-studies.version` is **deprecated**; the displayed version must be derived from the current
  iteration.

## Commands

```bash
npm install         # dependencies
npm run dev         # local dev server (http://localhost:4321)
npm run build       # static build to dist/
npm run preview     # preview the build locally
npm run re:check    # check traceability & scope (before commit/deploy)
```

Before every deploy: **`npm run re:check` and `npm run build`** must pass cleanly.

## Architecture

- **Astro 7**, static output (`dist/`). Chosen deliberately: React-free, not from Meta, and its
  **content collections** model traceability as typed, linked data.
- **`src/content.config.ts`** — the core: schemas for all artifact types. Links run through
  `reference()` fields; Astro verifies at build time that referenced IDs exist. Change the
  frontmatter shape → update the schema here. Content location is configurable via `CONTENT_DIR`.
- **`src/content/<project>/<collection>/`** — content as Markdown. Collections: `case-studies`,
  `iterations`, `stakeholders`, `glossary`, `requirements`, `epics`, `user-stories`, `adr`,
  `diagrams`, `workflow`, `questions`, `journal`.
  Empty collections are fine (the "collection is empty" messages at build time are harmless).
  `workflow` deliberately has **no `case` field**: its project is derived through
  `introducedIn → iteration → case`, so there is one source of truth rather than two that can disagree.
- **`src/pages/[lang]/`** — one set of pages, generated per locale (`getStaticPaths` returns
  `en`/`de`); each reads `Astro.params.lang` and computes the links itself:
  - `index.astro` (manifesto + red thread), `case-studies/[slug].astro` (pulls together a case
    study's stakeholders, diagrams, stories incl. resolved references, and ADRs),
    `how-i-work.astro`, `traceability.astro` (requirements explorer: requirement → story coverage),
    `journal/` (a dated working log, not a blog), `about.astro`.
  - `src/pages/index.astro` (root, not under `[lang]/`) redirects the bare domain to `/en/`.
- **`src/components/Mermaid.astro`** — renders Mermaid **client-side** (light build). Can be switched
  to pure build-time SVG (no JS) via `rehype-mermaid` + Playwright.
- IDs = filename (e.g. `requirements/R-01.md` → `R-01`). References use these IDs.

## One folder per example project (content layout)

Each example project's content lives in its **own folder** at **`src/content/<project>/`**, holding
the collection folders at its root. Each collection is the union of `src/content/*/<collection>/**`;
`src/content.config.ts` already globs this, and IDs are flattened to the filename, so **IDs must be
unique across projects** (prefix per project, e.g. `WZ-` for wurzel).
- Currently present: `src/content/wurzel`.
- The content is tracked **in this repo**. It used to be a git submodule (`../wurzel-content`); that
  was removed on 2026-08-02 because the repo it isolated was written for this site only — the real
  independence is the *app* repo (`C:\spielerei\wurzel`), which is never mounted, only cited by URL.
- Freezing a state of understanding is **data, not a git pointer**: the `iterations` collection plus
  `introducedIn` (see `docs/iterations-and-publication-plan.md`). Published artifacts are append-only.
- Adding a project = add another folder, no code change (recipe in `docs/separating-content.md`).
  That doc also keeps the submodule recipe, for the day a content repo gains a second author or a
  second consumer.
- The whole tree is still relocatable via `CONTENT_DIR` (default `./src/content`).

Rule: raw artifacts (code, `.bpmn`, `.puml`) stay in the project repo and are **linked** (`codeUrl`,
`source`); only the presentation SVG goes to `public/diagrams/`. Full guide: **`docs/separating-content.md`**.

## Maintaining content (the normal case)

A new artifact = **one Markdown file with frontmatter** in the right collection. Fastest way to
create one: **`npm run content:new -- <collection> <project> [id] [options]`** (scaffolds a
schema-correct stub with `TODO` placeholders — it does not invent content; `--help` lists options).
Pass **`--iteration <id>`** on every versioned artifact so `introducedIn` is stamped by the tool.
Or copy a block from **`docs/templates.md`** by hand. Do not maintain navigation/link lists by
hand — just set IDs in the `reference()` fields, the page computes the rest.

**Publishing adds files; it never overwrites one.** After writing an iteration's content, `git status`
should show only additions. A modified file from an earlier iteration is the signal that something is
being expressed on the wrong side of the link — put it on the new artifact via `changes:` instead.

When a full example project is ready to be published as a case study and go live, follow the
step-by-step checklist in **`docs/launch-plan.md`**.

**Diagrams:** Mermaid = the body of the `.md` file is raw Mermaid code (no code fences). Real BPMN/C4 =
put the exported SVG under `public/diagrams/`, embed it via `image:`, and point `source:` to the
source (`.bpmn`/`.puml`) in the repo.

## Freeze/versioning concept (demo)

A static build is automatically frozen. Tag a milestone (`demo-mvp`, `demo-v0.1`), build once, put it
under a versioned URL (e.g. subfolder `/mvp/` or a subdomain), do not rebuild. `main` stays the living
state. The case study's `version`/`demoUrl` fields reflect this.

## Deployment (IONOS)

Static output runs on any IONOS hosting. Recommended: **IONOS Deploy Now** (auto-detects Astro, builds
via GitHub Actions on each push → `dist/`). Alternatively upload `dist/` via SFTP. Before going live,
set `site:` in `astro.config.mjs` to the real domain.

## Harness (reminds you of the steps)

- `.claude/settings.json` — hooks: **SessionStart** shows the guardrails; **PostToolUse** (Write/Edit
  on `src/content/**`) surfaces the matching checklist (required fields, AI contribution, linking).
- `.claude/harness/*.mjs` — the hook scripts.
- `scripts/check-traceability.mjs` (`npm run re:check`) — checks broken references, missing required
  fields (acceptance criteria, AI contribution), coverage gaps and scope limits.
- Slash command **`/re-check`** runs the check and summarises it.

## Language

The site is **bilingual: English + German**, both locales prefixed (`/en/…`, `/de/…`); the bare
domain redirects to `/en/`. Two layers:
- **UI chrome + static page prose** → `src/i18n/ui.ts` (the `ui` dictionary + `useTranslations`).
  Add a key to **both** locales.
- **Content collections** → prose fields are locale-keyed `{ en, de }` objects; IDs and
  `reference()` links stay **language-neutral** (one file per artifact). Pages read them via
  `localize(field, lang)`. Templates in `docs/templates.md` show the shape.
