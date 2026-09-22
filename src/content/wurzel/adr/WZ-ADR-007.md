---
title:
  en: "The invoice document carries VAT; the offer document follows separately"
  de: "Das Rechnungsdokument führt die Umsatzsteuer; das Angebotsdokument zieht getrennt nach"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-12]
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0023-invoice-document-carries-vat.md
---

## Context
An earlier rule said "no VAT at Level 1". The stakeholder intake for the invoice chain found this to
be the single biggest buyer-hesitation gap: a landscaping business above the Kleinunternehmer
threshold charges 19 % Umsatzsteuer, and a bill showing only a net total **is not a valid German
Rechnung** — the customer cannot deduct it.

## Decision
The invoice document shows Nettobetrag, Steuersatz, MwSt.-Betrag and Gesamtbetrag (gross), or the
§ 19 UStG note when the business is marked Kleinunternehmer. The rate is copied onto the invoice
at creation and is never user-editable — one rate per business, no per-line rates. The offer document
keeps its net-only total until a story of its own.

## Consequences
`Invoice.TotalAmount` is renamed to `NetAmount` and Gesamtbetrag now labels the gross amount —
the figure the customer owes and the one both invoice lists show. A bill cannot change its tax
because a setting changed afterwards, the same copy-at-billing-time rule that makes an invoice line
its own snapshot. The offer follows separately because changing an already-shipped document is its
own risk surface: every offer exported before VAT must keep rendering unchanged from its stored
pages. When the offer does catch up it reads the rate live rather than storing it, so an open
offer's gross total moves when the setting is edited and an exported one cannot.
