---
title:
  en: Offers
  de: Angebote
case: wurzel
order: 4
source: docs/epics.md
levelSummary:
  WZ-0.1.0:
    en: "Create and version offers"
    de: "Angebote erstellen und versionieren"
  WZ-0.2.0:
    en: "Export offers as PDF"
    de: "Angebote als PDF exportieren"
  WZ-0.3.0-level-3:
    en: "Align offers with invoices"
    de: "Angebote an Rechnung angleichen"
  WZ-0.3.0-level-4:
    en: "Save before export"
    de: "Vor Export speichern"
glossary: [WZ-angebot, WZ-angebotsposition, WZ-snapshot]
requirements: [WZ-R-04, WZ-R-08]
# The repo records these as cross-cutting, with Offers as the primary epic: the behaviour
# is the open offer absorbing a position change, and the outcome of the shortcut is an offer.
stories: [WZ-US-10, WZ-US-31, WZ-US-32, WZ-US-48, WZ-US-62]
# The Level-2 offer diagrams are cited by no story's `bpmn` field — adding one would mean
# editing a published story, so the membership is stated here, on the unversioned topic.
diagrams: [WZ-offer-lifecycle-l2, WZ-offer-from-customer]
---
