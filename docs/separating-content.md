# Keeping example projects / content separate from the website code

The site reads all content from one content directory (default: `src/content/`), and within it one
folder per example project. That directory can stay in this repo, sit next to it, or live in its own
repo — all three work with the same data model (`src/content.config.ts`), with no code change.

**Repo split:**
- **Website repo** (this one): the engine — Astro code, pages, layout, harness — **and, today, the
  case-study content.**
- **Real project repos**: the actual application code + raw artifacts (`.bpmn`, `.puml`, code).
  These are **linked** from the content (`codeUrl`, `source`), never embedded. This is the separation
  that matters — see *Which separation is the real one* below.
- **Content repo(s)** (optional, not in use): the case-study markdown in its own repo, if it ever
  gains a second author or a second consumer.

> Raw source vs. presentation: the **source** of a diagram (`.bpmn`) stays in the project repo
> (the `source:` field links it). The exported **SVG** for display goes to `public/diagrams/` in the
> website repo (a presentation asset) and is embedded via `image:`.

---

## Which separation is the real one

The content for wurzel was once a separate repo (`wurzel-content`) mounted as a git submodule at
`src/content/wurzel`. Removed on **2026-08-02**, because it guarded the wrong boundary:

- The **app repo** (`C:\spielerei\wurzel`) is what has to stay independent, and it already is — it is
  never mounted, only **cited by URL**. Nothing about the website constrains it.
- The **content repo** was curated by hand *for this site*, by the same author, consumed by nothing
  else. Its own repo bought no independence and cost a second remote, a pointer bump per publication,
  and cross-repo migrations for any change that touches schema *and* content at once.
- **Freezing a state of understanding is now data**, not a submodule pointer: the `iterations`
  collection plus `introducedIn`, append-only (`docs/iterations-and-publication-plan.md`). That was
  the submodule's last real job.

Re-split when — and only when — a real trigger appears: a second author on the content, a second
consumer of it, or content that needs its own release cycle. The folder layout below is unchanged by
a re-split, so Option C stays a drop-in.

The 0.1.0 content history is preserved: `C:\spielerei\wurzel-content` holds commit `a1ca12f` on branch
`import-0.1.0` plus tag `0.1.0`.

---

## Option A — Content in this repo (in use)

Nothing to configure. `src/content/<project>/` is tracked here like any other source, and the default
`CONTENT_DIR` points at it.

```
Website/                    (this repo — engine + content)
└─ src/content/
   ├─ wurzel/               (project 1)
   └─ <next>/               (project 2, later)
```

Pro: one clone builds, one commit per change, schema and content migrate atomically.
Con: content and engine share a history — acceptable while one person writes both.

---

## Option B — Sibling checkout via `CONTENT_DIR`

Keep the content tree somewhere else and point the site at it:

```bash
# Folder layout:
#   projects/
#     website/              (this repo)
#     site-content/         (the content tree: one folder per project inside it)

# bash / IONOS Deploy Now / GitHub Actions:
CONTENT_DIR=../site-content npm run dev
CONTENT_DIR=../site-content npm run build
```

```powershell
# Windows PowerShell:
$env:CONTENT_DIR = "..\site-content"; npm run dev
```

Pro: fully decoupled, no submodule. Con: the build location needs the content folder next to it
(check it out accordingly in CI/IONOS).

---

## Option C — Git submodule (the re-split path, not in use)

Kept documented because it is the move when a content repo earns its own life. The content repo is
mounted at `src/content/<project>`, so the default `CONTENT_DIR` still works.

```bash
# Move a project's content out of this repo and back into its own:
cd Website
git rm -r --cached src/content/<name>
mv src/content/<name> ../<name>-content        # or clone the existing content repo
git -c protocol.file.allow=always submodule add -b main ../<name>-content src/content/<name>
git config -f .gitmodules submodule.src/content/<name>.url "../<name>-content"   # relative = portable
git submodule sync
```

**Clone including content:**
```bash
git clone --recurse-submodules <website-repo-url>
# or afterwards:
git submodule update --init --recursive
```

**CI / IONOS Deploy Now:** submodules must be checked out during the build —
`actions/checkout` with `submodules: true`. IONOS Deploy Now runs GitHub Actions internally, so the
flag goes into the generated workflow. **Not needed under Option A.**

---

## Multiple example projects

Two layouts are possible. **This repo is set up for the second (one folder per project).**

- **One flat content tree:** one `case-studies/<project>.md` per project plus shared `requirements/`,
  `user-stories/`, etc. IDs must be unique across the tree (e.g. prefix per project: `GW-R-01`,
  `CP-R-01`).
- **One folder per project (the layout in use):** each project gets `src/content/<project>/`, holding
  the collection folders at its root. `src/content.config.ts` globs every project folder for each
  collection (`*/<collection>/**`) and flattens IDs to the filename, so `reference()` links keep
  working.

Each project folder has the collection folders at its root:

```
src/content/wurzel/
├─ case-studies/  iterations/  requirements/  user-stories/  epics/  stakeholders/
├─ glossary/  adr/  diagrams/  workflow/  journal/
└─ README.md
```

**`iterations/` is not optional for a project you intend to publish.** It is what makes an earlier
level stay visible when a later one ships, and `introducedIn` on the other artifacts references it.
A project can start without one — every artifact then lands in the "(no iteration)" bucket and
`re:check` warns per file until the first iteration exists.

`src/content.config.ts` already implements this — no code change to add a project:

- `pattern: '*/<collection>/**/*.{md,mdx}'` — the leading `*` is the project folder.
- `generateId` returns the **filename** (no path, extension stripped), so IDs stay flat.
- Therefore **IDs must be unique across all projects** → prefix per project (`WZ-` for wurzel,
  pick a new prefix for the next). `scripts/check-traceability.mjs` reads the same layout.

### Adding another project later (recipe)

```bash
# 1. Create the project's folder skeleton (the collection folders + README).
#    Easiest: copy src/content/wurzel, wipe its content, pick a new ID prefix.

# 2. Its first iteration, before any artifact that references it:
npm run content:new -- iteration <name> <XX>-0.1.0 --version 0.1.0 --order 1 --date <tag-date>

# 3. Then artifacts, with the iteration stamped by the tool:
npm run content:new -- requirement <name> --prefix <XX> --iteration <XX>-0.1.0

# 4. Nothing to change in content.config.ts. Verify:
npm run re:check && npm run build
```

---

## Example: GitHub Actions build

```yaml
# .github/workflows/build.yml (only needed for your own CI, not the IONOS assistant)
name: build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Under Option C, add:  with: { submodules: true }
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run re:check
      - run: npm run build
```
