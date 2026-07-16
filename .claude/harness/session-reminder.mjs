#!/usr/bin/env node
// SessionStart hook: reminds Claude of the agreed guardrails at the start of a session.
const msg = `
── Project guardrails (from the concept) ─────────────────────────────
This is NOT a portfolio website, but the documentation of a way of working.
The process is the portfolio. Red thread:
  Problem → Stakeholders → Workshop → Glossary → DDD → BPMN → User Stories
         → Jira → Architecture → Code → Retrospective

North-star principles:
  1. Traceability as data (reference fields), no hand-maintained links.
  2. Real tools, no simulation. Artifacts are LINKED, not invented.
  3. Make the AI contribution transparent per artifact (aiContribution / aiRole).
  4. Minimal, docs-like. No animations.
  5. Keep the scope guardrails: 3–5 projects · 15–25 stories · 5–10 BPMN
     · 1 context map · 1 domain model · 3–5 ADRs · a small demo.

Before commit/deploy: \`npm run re:check\` (traceability & scope) and \`npm run build\`.
──────────────────────────────────────────────────────────────────────
`;
console.log(msg.trim());
