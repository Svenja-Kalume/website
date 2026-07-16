# Launch plan — bringing a finished example project onto the site

Use this checklist once an example project (e.g. GreenWorks: the real application + its raw artifacts)
is ready and you want to publish it as a case study and go live.

Guiding rule throughout: **link what exists, do not re-invent it.** Raw artifacts stay in the project
repo; the site is the showcase that ties them together and makes them traceable.

---

## Phase 0 — Decisions to lock first

- [ ] Confirm the **content strategy**: Option A (sibling `CONTENT_DIR`) or **Option B (submodule at
      `src/content`)** — recommended B for CI + freezing. See `docs/separating-content.md`.
- [ ] Decide the **repo layout**: this website repo · a content repo · the real project repo(s).
- [ ] Confirm **hosting** (IONOS Deploy Now) and the **domain** (+ demo subdomain, if any).
- [ ] Decide whether this project ships **with a demo** or as a documented case study only.

## Phase 1 — Prepare the project repo (source of truth)

- [ ] Organise raw artifacts in the project repo (`docs/ requirements/ bpmn/ ddd/ adr/ architecture/ code/`).
- [ ] Ensure **stable public URLs** for the things you will link: code (`codeUrl`), diagram sources
      (`source`, e.g. the `.bpmn`/`.puml` file), Jira issues.
- [ ] **Export presentation assets**: BPMN/C4 → SVG (these go into the website later).
- [ ] Tag a milestone if you want to freeze it (e.g. `v1.0` / `mvp`).

## Phase 2 — Model the case study (populate collections)

Copy from `docs/templates.md` into `src/content/…` (or the content repo). If you have several
projects, **prefix IDs** per project (e.g. `GW-R-01`).

- [ ] `case-studies/<project>.md` — business case, `status`, `version`, `demoUrl` (if a demo).
- [ ] `stakeholders/…`, `glossary/…`.
- [ ] `requirements/R-xx.md` — each with a measurable `businessGoal` and its `aiContribution`.
- [ ] `epics/EP-xx.md`.
- [ ] `user-stories/US-xx.md` — link `requirement` (+ `epic`, `bpmn`, `adr`, `codeUrl`, `jiraKey`),
      `acceptanceCriteria` (≥1), `aiContribution` (what the AI proposed vs. what you changed).
- [ ] `adr/ADR-xxx.md` — with `relatedRequirements`.
- [ ] `workflow/…` — the "How I Work" steps for this project, each with its `aiRole`.
- [ ] Stay within the **scope guardrails**: 3–5 processes · 15–25 stories · 5–10 BPMN · 1 context map ·
      1 domain model · 3–5 ADRs.

## Phase 3 — Diagrams & assets

- [ ] `diagrams/…` entries. Mermaid = raw code in the body. Real BPMN/C4 = put the SVG in
      `public/diagrams/`, embed via `image:`, and point `source:` at the file in the project repo.
- [ ] Add each diagram's `aiContribution` ("how was this artifact created?").
- [ ] Optional: switch Mermaid to **build-time SVG** (`rehype-mermaid` + Playwright) for zero client JS.
- [ ] Optional: add an interactive **bpmn-js** zoom island for one key process.

## Phase 4 — Traceability & AI-transparency pass

- [ ] Run `npm run re:check` and fix every **error** (broken references, missing acceptance criteria /
      AI contribution) and **coverage gap** (requirement with no story).
- [ ] Sanity-check the **Traceability Explorer** page: each requirement → story → ADR/code chain reads.
- [ ] Confirm every artifact makes its **AI contribution** visible.

## Phase 5 — Demo (optional, subordinate to the case study)

- [ ] Keep it **small**: 2–3 interesting workflows, sample data, **no** registration/password reset.
- [ ] Link each demo screen **back** to its `R-xx` / `US-xx` (the traceability angle).
- [ ] Freeze it: build the tagged milestone once, host it under a versioned URL
      (`/mvp/` or `demo.<domain>`), set the case study's `demoUrl`. Do not rebuild a frozen version.

## Phase 6 — Wire the content repo (if Option B)

- [ ] `git submodule add <content-repo-url> src/content`; commit the pointer.
- [ ] For a frozen state: `cd src/content && git checkout <tag>` and commit the submodule pointer.
- [ ] Enable `submodules: true` in the CI checkout (IONOS Deploy Now / GitHub Actions).

## Phase 7 — Deploy (IONOS)

- [ ] Set `site:` in `astro.config.mjs` to the real domain.
- [ ] Initialise/push the Git repo(s) to GitHub.
- [ ] IONOS **Deploy Now**: connect the repo, confirm Astro is auto-detected, defaults ok, submodules on.
- [ ] Make CI run `npm run re:check` **and** `npm run build` (gate on green).
- [ ] Attach the custom domain (+ demo subdomain). Verify sitemap/canonical.

## Phase 8 — Review & polish

- [ ] Fill in `about.astro` (profile + contact).
- [ ] Write one journal entry (e.g. a real decision or dead-end from the project, with the AI contribution).
- [ ] Click-through review: navigation, links, light/dark, mobile, minimal/docs-like look.

## Definition of done

- [ ] `npm run re:check` clean · `npm run build` clean.
- [ ] Every requirement traces to a story; every story has acceptance criteria + AI contribution.
- [ ] The case study reads end to end: problem → … → retrospective, with artifacts linked, not invented.
- [ ] Live on the domain; demo (if any) frozen at a tagged version and linked from the case study.

---

### Later: adding another project or a new version

- New project → repeat Phases 1–4 with prefixed IDs; mind the scope guardrails.
- New milestone of an existing project → tag it, freeze a new demo version, bump the case study
  `version`, add/adjust ADRs. Keep `main` as the living state.
