---
title:
  en: "Generating the PDF is the act of issuing — no document has a Sent state"
  de: "Das Erzeugen des PDFs ist das Stellen — kein Dokument hat einen Status „Versendet“"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-12, WZ-R-13]
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0022-exporting-is-sending.md
---

## Context
Both documents need a point at which they stop being editable and become something the customer
holds. The conventional modelling instinct is a `Sent` state the user sets by hand.

## Decision
`Draft → Exported` happens when, and only when, the PDF is generated. There is no manual "mark as
sent" and neither offers nor invoices carry a `Sent` state. One click renders the document, stores
it, stamps the invoice date, flips the state and touches the update timestamp — as a single
transaction, both or neither. Previewing never issues.

## Consequences
The PDF is the only artefact that can reach the customer, so no route to *issued* bypasses it. A
manual marker could only produce states the data cannot justify: an issued bill with no file and no
date, or a "sent" flag asserting a delivery the app never observed. The app can therefore never hold
a bill marked *Exportiert* with no document, nor a document in the customer's hands while the app
still calls it *Entwurf*. Unlike the offer export there is no confirmation dialog — a wrongly issued
bill is remedied by cancelling it, which is the legally correct remedy anyway, not by a speed bump.
