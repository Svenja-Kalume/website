---
title:
  en: Platform
  de: Plattform
case: wurzel
order: 8
source: docs/epics.md
levelSummary:
  WZ-0.1.0:
    en: "Autosave"
    de: "Automatisch speichern"
  WZ-0.2.0:
    en: "Harden tests and packages"
    de: "Tests und Pakete absichern"
  WZ-0.3.0-level-4:
    en: "Make saving reliable"
    de: "Speichern absichern"
requirements: [WZ-R-05, WZ-R-11]
# WZ-R-15 (save, preview and export integrity) spans offers, positions and invoices, so
# no topic claims it; the three decisions it produced are about the autosave engine and
# are listed here explicitly, beside the diagrams that draw them.
adr: [WZ-ADR-001, WZ-ADR-005, WZ-ADR-011, WZ-ADR-012, WZ-ADR-013]
stories: [WZ-US-51, WZ-US-63]
diagrams: [WZ-autosave-contract]
---
