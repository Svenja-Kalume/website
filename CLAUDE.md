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
- **`src/content/<collection>/`** — content as Markdown. Collections: `case-studies`, `stakeholders`,
  `glossary`, `requirements`, `epics`, `user-stories`, `adr`, `diagrams`, `workflow`, `journal`.
  Empty collections are fine (the "collection is empty" messages at build time are harmless).
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
Or copy a block from **`docs/templates.md`** by hand. Do not maintain navigation/link lists by
hand — just set IDs in the `reference()` fields, the page computes the rest.

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
