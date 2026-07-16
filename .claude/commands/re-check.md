---
description: Run the traceability & scope check and summarise the results
---

Run the traceability and scope check and summarise the result for the user.

1. Run `npm run re:check`.
2. Summarise errors, warnings and AI-contribution gaps concisely in English.
3. On errors (broken references, missing required fields): propose the concrete fix, but
   **do not invent domain content** — refer to the existing project.
4. Remind to run `npm run build` before a deploy.
