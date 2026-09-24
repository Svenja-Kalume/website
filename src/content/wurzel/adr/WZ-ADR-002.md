---
title:
  en: German UI, English code identifiers and routes
  de: Deutsche UI, englische Code-Bezeichner und Routen
case: wurzel
status: accepted
date: 2026-06-12
relatedRequirements: [WZ-R-01, WZ-R-07]
context:
  en:
    - "The users are German and the domain vocabulary is German (Angebot, Projektposition), but the codebase should stay maintainable and conventional."
  de:
    - "Die Nutzer sind deutschsprachig und das Fachvokabular ist deutsch (Angebot, Projektposition), der Code soll aber wartbar und konventionell bleiben."
decision:
  en:
    - "User-facing text is German; code identifiers and routes are English (`customers`, `projects`, `offers`). A glossary is the authoritative German-UI ↔ English-code mapping. Old German routes redirect to the English ones."
  de:
    - "Alle Texte für den Nutzer sind deutsch; Code-Bezeichner und Routen sind englisch (`customers`, `projects`, `offers`). Ein Glossar ist die verbindliche Zuordnung von deutscher UI zu englischem Code. Alte deutsche Routen leiten auf die englischen um."
consequences:
  en:
    - "The glossary becomes a first-class artifact and the source of the bilingual model. A later rename (`Declined` → `Superseded`) followed directly from taking this naming seriously."
  de:
    - "Das Glossar wird zum vollwertigen Artefakt und zur Quelle des zweisprachigen Modells. Eine spätere Umbenennung (`Declined` → `Superseded`) folgte unmittelbar daraus, diese Namensregel ernst zu nehmen."
introducedIn: WZ-0.1.0
---
