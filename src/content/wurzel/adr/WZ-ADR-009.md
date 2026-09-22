---
title:
  en: "Invoice numbers are assigned at creation, and only drafts may be deleted"
  de: "Rechnungsnummern werden beim Anlegen vergeben, und nur Entwürfe dürfen gelöscht werden"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-13]
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0026-invoice-numbers-at-creation-drafts-deletable.md
---

## Context
Assigning the number at *issuing* rather than at creation is the tidier model: an abandoned draft
would consume nothing and the sequence would stay gapless.

## Decision
The invoice number is assigned when the row is created. A `Draft` may be deleted; an `Exported`,
`Paid` or `Cancelled` invoice never may. Deleting a draft is confirmed by a dialog that names the
number and states plainly that it will not be reused.

## Consequences
Deleting a draft leaves a documented gap in the sequence — made explicit to the user rather than
hidden, because a documented gap is auditable and an issued bill that vanished is not. The tidier
assign-at-issuing model was deliberately deferred, not rejected: adopting it mid-block would have
contradicted a story already groomed to `Ready` and forked the shared number-generation pattern for
one entity. This is also the first real use of the reserved term Löschen; everything shipped
before used only Entfernen, which detaches and deletes nothing.
