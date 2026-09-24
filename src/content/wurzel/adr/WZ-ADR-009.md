---
title:
  en: "Invoice numbers are assigned at creation, and only drafts may be deleted"
  de: "Rechnungsnummern werden beim Anlegen vergeben, und nur Entwürfe dürfen gelöscht werden"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-13]
context:
  en:
    - "Assigning the number at *issuing* rather than at creation is the tidier model: an abandoned draft would consume nothing and the sequence would stay gapless."
  de:
    - "Die Nummer erst beim *Stellen* zu vergeben statt beim Anlegen wäre das sauberere Modell: Ein aufgegebener Entwurf verbrauchte nichts, und die Nummernfolge bliebe lückenlos."
decision:
  en:
    - "The invoice number is assigned when the row is created. A `Draft` may be deleted; an `Exported` or `Cancelled` invoice never may. Deleting a draft is confirmed by a dialog that names the number and states plainly that it will not be reused."
  de:
    - "Die Rechnungsnummer wird vergeben, wenn der Datensatz angelegt wird. Ein `Draft` darf gelöscht werden; eine Rechnung im Status `Exported` oder `Cancelled` niemals. Das Löschen eines Entwurfs bestätigt ein Dialog, der die Nummer nennt und klar sagt, dass sie nicht wiederverwendet wird."
consequences:
  en:
    - "Deleting a draft leaves a documented gap in the sequence — made explicit to the user rather than hidden, because a documented gap is auditable and an issued bill that vanished is not. The tidier assign-at-issuing model was deliberately deferred, not rejected: adopting it mid-block would have contradicted a story already groomed to `Ready` and forked the shared number-generation pattern for one entity. This is also the first real use of the reserved term Löschen; everything shipped before used only Entfernen, which detaches and deletes nothing."
  de:
    - "Das Löschen eines Entwurfs hinterlässt eine dokumentierte Lücke in der Nummernfolge — dem Nutzer offen gesagt statt versteckt, denn eine dokumentierte Lücke ist prüfbar und eine verschwundene gestellte Rechnung ist es nicht. Das sauberere Modell, die Nummer erst beim Stellen zu vergeben, wurde bewusst zurückgestellt und nicht verworfen: Mitten im Block umzustellen hätte einer bereits auf `Ready` gegroomten Story widersprochen und das gemeinsame Muster der Nummernvergabe für eine einzige Entität aufgespalten. Das ist außerdem die erste echte Verwendung des reservierten Begriffs Löschen; alles zuvor Ausgelieferte nutzte nur Entfernen, das eine Verknüpfung löst und nichts löscht."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0026-invoice-numbers-at-creation-drafts-deletable.md
---
