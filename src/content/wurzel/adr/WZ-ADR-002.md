---
title:
  en: German UI, English code identifiers and routes
  de: Deutsche UI, englische Code-Bezeichner und Routen
case: wurzel
status: accepted
date: 2026-06-12
relatedRequirements: [WZ-R-01, WZ-R-07]
---

## Context
The users are German and the domain vocabulary is German (Angebot, Projektposition),
but the codebase should stay maintainable and conventional.

## Decision
User-facing text is German; code identifiers and routes are English (`customers`,
`projects`, `offers`). A glossary is the authoritative German-UI ↔ English-code mapping.
Old German routes redirect to the English ones.

## Consequences
The glossary becomes a first-class artifact and the source of the bilingual model. A later
rename (`Declined` → `Superseded`) followed directly from taking this naming seriously.
