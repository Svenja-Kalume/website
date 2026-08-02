# wurzel-content

Case-study **content** for the *wurzel* project — the living documentation consumed by the
[Website](../Website) engine (Astro content collections). This repo holds **only** the case-study
markdown; the actual application code and raw artifacts stay in the **wurzel** project repo and are
**linked** from here (`codeUrl`, `source`), never copied.

## How it is used

The website mounts this repo as a **git submodule** at `src/content/wurzel/`. Each collection is a
folder at the root of this repo:

```
case-studies/  stakeholders/  glossary/  requirements/  epics/
user-stories/  adr/  diagrams/  workflow/  journal/
```

Multiple projects each get their **own** content repo (this is the multi-submodule layout). The
website globs every project folder: `src/content/*/user-stories/**`, etc.

## ID convention (important)

IDs = filename without extension, and they must be **unique across all projects**, because the
website flattens IDs and links artifacts by ID through `reference()` fields.

**Prefix every ID in this repo with `WZ-`** (wurzel):

| Collection    | Example filename        | ID          |
| ------------- | ----------------------- | ----------- |
| case-studies  | `wurzel.md`             | `wurzel`    |
| requirements  | `WZ-R-01.md`            | `WZ-R-01`   |
| epics         | `WZ-EP-01.md`           | `WZ-EP-01`  |
| user-stories  | `WZ-US-01.md`           | `WZ-US-01`  |
| adr           | `WZ-ADR-001.md`         | `WZ-ADR-001`|
| diagrams      | `WZ-BPMN-01.md`         | `WZ-BPMN-01`|
| stakeholders  | `WZ-owner.md`           | `WZ-owner`  |
| glossary      | `WZ-offer.md`           | `WZ-offer`  |
| workflow      | `WZ-01-problem.md`      | `WZ-01-problem` |
| journal       | `WZ-2026-07-16.md`      | `WZ-2026-07-16` |

Frontmatter shape (localized `{ en, de }` prose, language-neutral `reference()` links) is defined by
the website's `src/content.config.ts`. Copy-ready templates live in the website repo at
`docs/templates.md`.

## Real tools, no simulation

Do **not** invent requirements or stories. Content here documents the *real* wurzel project; raw
artifacts (`.bpmn`, `.puml`, source) live in the wurzel repo and are linked. Source material to draw
from: `wurzel/cm docs/` (user-stories, domain, glossary, decisions, mvp-scope).

## Freeze / versioning

The submodule pins a specific commit/tag. Tag a milestone here (e.g. `wz-mvp`, `wz-v0.1`); the
website's submodule pointer then freezes that state of understanding while this repo keeps evolving.
