---
title:
  en: "Invoices"
  de: "Rechnungen"
case: wurzel
order: 5
source: docs/epics.md
glossary: [WZ-rechnung, WZ-abschlagsrechnung, WZ-schlussrechnung, WZ-stornorechnung, WZ-rechnungsposition, WZ-rechnungsnummer, WZ-leistungszeitraum, WZ-zahlungsziel, WZ-kleinunternehmer, WZ-restmenge]
requirements: [WZ-R-13, WZ-R-14, WZ-R-16]
# Three requirements span topics and are therefore not claimed here: WZ-R-12 (the valid
# German bill) also covers the offer document and the company settings, WZ-R-15 (save,
# preview and export integrity) runs through offers, positions and the autosave platform,
# and WZ-R-17 (a refusal names its field) is app-wide. Their invoice-side stories are
# listed explicitly instead, so the grouping never adds a field to a published artifact.
stories: [WZ-US-36, WZ-US-37, WZ-US-38, WZ-US-39, WZ-US-40, WZ-US-50, WZ-US-52, WZ-US-53, WZ-US-57, WZ-US-60, WZ-US-61, WZ-US-64]
diagrams: [WZ-invoice-lifecycle, WZ-invoice-export-gates, WZ-cancellation-by-vat, WZ-remaining-quantity, WZ-invoice-document-vat, WZ-billing-raises-position]
---
