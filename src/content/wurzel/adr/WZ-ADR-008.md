---
title:
  en: "A frozen invoice is viewed as its stored document, with no data-table fallback"
  de: "Eine eingefrorene Rechnung wird als ihr gespeichertes Dokument angezeigt — ohne Tabellen-Fallback"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-13]
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0025-frozen-invoice-is-its-stored-document.md
---

## Context
Once a bill has been issued, the app's copy and the customer's copy must be the same document. Both
a live re-render and a plain data table are cheaper to build than storing and serving page images.

## Decision
An `Exported`, `Paid` or `Cancelled` invoice is viewed as the stored page images — the document
the customer received — never as a live re-render of today's data. If those pages cannot be loaded,
the view shows a plain-German error. There is no data-table fallback.

## Consequences
Regenerating from current data would let a changed accent colour, a new office address or a corrected
terms paragraph silently alter every historical bill; the ten-year retention obligation is about the
document, not the data. The absence of a fallback is the deliberate part: a fallback reintroduces
exactly that divergence in the one place the user is most likely to trust what they see — a customer
dispute on the phone. A compact header strip keeps the numbers readable beside the document.
