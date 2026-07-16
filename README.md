# Ways of Working — Living Case Study

The visible documentation of an AI-assisted way of working in requirements engineering.
Not a portfolio website — the **process** is the content: from requirement to code, fully traceable.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to dist/
npm run re:check   # check traceability & scope
```

## Structure

- **Astro** (static), content as Markdown in `src/content/`.
- Links between artifacts (requirement → story → BPMN → ADR → code) are **typed references** in
  `src/content.config.ts` — the site computes traceability and overviews from them.
- New content: copy the templates in **`docs/templates.md`**.
- Keeping content in a separate repo: **`docs/separating-content.md`**.
- Project rules & architecture for contributors (and Claude Code): **`CLAUDE.md`**.

## Deployment

Static output → IONOS (Deploy Now builds Astro automatically on each push). Details in `CLAUDE.md`.
