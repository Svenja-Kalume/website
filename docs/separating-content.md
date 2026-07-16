# Keeping example projects / content separate from the website code

The site reads all content from one content directory (default: `src/content/`).
That directory can be moved into its **own repo**, so the website code stays cleanly separated from
your example projects. There are two ways; both work with the same data model
(`src/content.config.ts`), with no code change.

**Repo split:**
- **Website repo** (this one): the engine — Astro code, pages, layout, harness.
- **Content repo(s)**: the case-study markdown (`case-studies/`, `requirements/`, `user-stories/`,
  `adr/`, `diagrams/` …) in exactly the structure the site expects.
- **Real project repos**: the actual application code + raw artifacts (`.bpmn`, `.puml`, code).
  These are **linked** from the content (`codeUrl`, `source`), not embedded.

> Raw source vs. presentation: the **source** of a diagram (`.bpmn`) stays in the project repo
> (the `source:` field links it). The exported **SVG** for display goes to `public/diagrams/` in the
> website repo (a presentation asset) and is embedded via `image:`.

---

## Option A — Sibling checkout via `CONTENT_DIR` (simplest for local work)

Clone the content repo next to the website repo and point the site at it:

```bash
# Folder layout:
#   projects/
#     website/              (this repo)
#     greenworks-content/   (your content repo)

# bash / IONOS Deploy Now / GitHub Actions:
CONTENT_DIR=../greenworks-content npm run dev
CONTENT_DIR=../greenworks-content npm run build
```

```powershell
# Windows PowerShell:
$env:CONTENT_DIR = "..\greenworks-content"; npm run dev
```

Pro: fully decoupled repos, no submodule. Con: the build location needs the content folder next to
it (check it out accordingly in CI/IONOS).

---

## Option B — Git submodule (recommended for CI/IONOS and the freeze concept)

The content repo is mounted at `src/content`. The default `CONTENT_DIR` then works with no extra setting.

```bash
# One-off: remove local placeholders and add the submodule
git rm -r --cached src/content 2>/dev/null || true
rm -rf src/content
git submodule add <content-repo-url> src/content
git commit -m "Add content as a submodule"
```

**Clone including content:**
```bash
git clone --recurse-submodules <website-repo-url>
# or afterwards:
git submodule update --init --recursive
```

**Freeze / version (your versioning concept):** the submodule points at a specific commit/tag.
```bash
cd src/content && git checkout demo-v0.1 && cd ../..
git commit -am "Freeze content at v0.1"
```
This preserves an earlier state of understanding exactly, while the content repo keeps evolving.

**CI / IONOS Deploy Now:** check out submodules during the build.
- GitHub Actions: `actions/checkout` with `submodules: true` (see the example below).
- IONOS Deploy Now runs GitHub Actions internally — add `submodules: true` to the generated workflow.

---

## Multiple example projects

Two layouts are possible. **This repo is set up for the second (multi-submodule).**

- **Single content repo:** ONE content repo, with one `case-studies/<project>.md` per project
  plus its `requirements/`, `user-stories/`, etc. IDs must be unique within the content repo
  (e.g. prefix per project: `GW-R-01`, `CP-R-01`).
- **One content repo per project (the layout in use):** each project is its own content repo,
  mounted as its own submodule at **`src/content/<project>/`**, holding the collection folders at
  its root. `src/content.config.ts` globs every project folder for each collection
  (`*/<collection>/**`) and flattens IDs to the filename, so `reference()` links keep working.

### The layout in use

```
Website/                         (this repo — the engine)
└─ src/content/
   ├─ wurzel/        → submodule → ../wurzel-content   (project 1)
   └─ <next>/        → submodule → ../<next>-content   (project 2, later)
```

Each project content repo has the collection folders at its root:

```
wurzel-content/
├─ case-studies/  requirements/  user-stories/  epics/  stakeholders/
├─ glossary/  adr/  diagrams/  workflow/  journal/
└─ README.md
```

`src/content.config.ts` already implements this — no code change to add a project:

- `pattern: '*/<collection>/**/*.{md,mdx}'` — the leading `*` is the project folder.
- `generateId` returns the **filename** (no path, extension stripped), so IDs stay flat.
- Therefore **IDs must be unique across all projects** → prefix per project (`WZ-` for wurzel,
  pick a new prefix for the next). `scripts/check-traceability.mjs` reads the same layout.

### Adding another project later (recipe)

```bash
# 1. Create the project's content repo (skeleton = the 10 collection folders + README).
#    Easiest: copy wurzel-content, wipe its content, pick a new ID prefix.

# 2. Mount it as a submodule under the website (local path now, real URL later):
cd Website
git -c protocol.file.allow=always submodule add -b main ../<name>-content src/content/<name>
git config -f .gitmodules submodule.src/content/<name>.url "../<name>-content"   # relative = portable
git submodule sync

# 3. Nothing to change in content.config.ts. Verify:
npm run re:check && npm run build
```

---

## Example: GitHub Actions build with submodule

```yaml
# .github/workflows/build.yml (only needed for your own CI, not the IONOS assistant)
name: build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run re:check
      - run: npm run build
```
