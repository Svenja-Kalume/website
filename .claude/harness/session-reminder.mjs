#!/usr/bin/env node
// SessionStart hook: reminds Claude of the agreed guardrails at the start of a session.
// Keep in step with CLAUDE.md — this text is read before CLAUDE.md is, every session.
const msg = `
── Project guardrails (from the concept) ─────────────────────────────
This is NOT a portfolio website, but the documentation of a way of working.
The process is the portfolio. Red thread:
  Problem → Stakeholders → Workshop → Glossary → Intent-driven AI Harness
    → Requirements + DDD + BPMN → User Stories → Readiness gate
    → Architecture (ADR) → Code → Tests → Retrospective
Readiness gate: a formal defect loops back into the harness; a business
question goes to \`questions\` — never let the AI synthesise its answer.

North-star principles:
  1. Traceability as data (reference fields), no hand-maintained links.
  2. Real tools, no simulation. Artifacts are LINKED, not invented.
  3. Make the AI contribution transparent per artifact (aiContribution / aiRole).
  4. Minimal, docs-like. No animations.
  5. Scope guardrails, per project PER ITERATION: 15–25 stories · 5–10 new
     BPMN · 3–5 new ADRs · 1 context map · 1 domain model · a small demo.
     3–5 projects in total.

Published iterations are append-only: a change goes on the NEW artifact
(\`changes:\` / \`supersedes:\`), never into a published file.

Branching: \`main\` is the live site — never commit or merge into it.
Work on a feature branch, merge into \`develop\`. Any push starts a
Deploy Now run: ask before pushing.

Before commit/deploy: \`npm run re:check\` (traceability & scope) and \`npm run build\`.
──────────────────────────────────────────────────────────────────────
`;
console.log(msg.trim());
