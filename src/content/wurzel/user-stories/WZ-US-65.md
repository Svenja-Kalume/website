---
title:
  en: "Billing above a position’s remaining quantity raises the position"
  de: "Mehr abzurechnen, als übrig ist, hebt die Position an"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to bill more than a position’s remaining quantity and have the position follow what I actually billed"
  de: "mehr abrechnen können, als auf einer Position übrig ist, und dass die Position dem folgt, was ich tatsächlich abgerechnet habe"
soThat:
  en: "a job that took longer than quoted can still be billed at all"
  de: "ein Auftrag, der länger dauerte als angeboten, sich überhaupt abrechnen lässt"
requirement: WZ-R-16
acceptanceCriteria:
  en:
    - "An invoice line may carry a quantity above the position’s remaining quantity, and the invoice saves"
    - "Saving raises the project position’s quantity to the total billed against it, so the position shows no negative remainder; a position is only ever raised this way, never lowered"
    - "After such a save the user sees a German notice naming what changed: the position, its new quantity, and any offer whose total moves with it"
    - "An offer still open follows the position’s new quantity, as it already does; an offer that has been exported or replaced is unaffected"
    - "Cancelling the invoice, or lowering the line again, leaves the raised quantity as it is"
    - "Any invoice save the server refuses shows the user a German reason on screen — no save ever fails with nothing said"
  de:
    - "Eine Rechnungszeile darf eine Menge über der Restmenge der Position tragen, und die Rechnung wird gespeichert"
    - "Das Speichern hebt die Menge der Projektposition auf die gegen sie insgesamt abgerechnete Menge an, sodass keine negative Restmenge entsteht; eine Position wird auf diesem Weg nur angehoben, nie gesenkt"
    - "Nach einem solchen Speichern sieht der Nutzer einen deutschen Hinweis, der benennt, was sich geändert hat: die Position, ihre neue Menge und jedes Angebot, dessen Summe sich mitbewegt"
    - "Ein noch offenes Angebot folgt der neuen Menge der Position, wie bisher; ein exportiertes oder ersetztes Angebot bleibt unberührt"
    - "Das Stornieren der Rechnung oder ein späteres Senken der Zeile lässt die angehobene Menge unverändert"
    - "Jedes vom Server abgelehnte Speichern einer Rechnung zeigt dem Nutzer eine deutsche Begründung am Bildschirm — kein Speichern scheitert wortlos"
codeUrl: Server/Invoices/InvoiceBillingRules.cs
adr: [WZ-ADR-014]
priority: must
status: done
aiContribution:
  en: "The clearest case in this iteration of a business fact overruling a technically sound design. The AI built the cap and was right about the arithmetic: without it the remaining quantity goes negative and every figure derived from it follows. The tester reported the cap itself as the defect — spending more hours on site than quoted is ordinary here, and the cap made the resulting bill impossible to issue at all — and the reversal is my decision, taken during grooming. What the AI then contributed is the part that makes the reversal safe: which aggregates each affected figure feeds, that the raise must be one-directional, and that open offers referencing a raised position have to be named to the user, because their quoted total has silently moved."
  de: "Der klarste Fall dieser Iteration, in dem eine fachliche Tatsache ein technisch stimmiges Design überstimmt. Die KI baute die Begrenzung und hatte rechnerisch recht: Ohne sie wird die Restmenge negativ, und jede daraus abgeleitete Zahl folgt. Der Tester meldete die Begrenzung selbst als Fehler — mehr Stunden auf der Baustelle zu verbringen, als angeboten wurde, ist hier normal, und die Begrenzung machte die daraus folgende Rechnung überhaupt unmöglich —, und die Umkehrung ist meine Entscheidung, getroffen im Grooming. Beigetragen hat die KI danach das, was die Umkehrung sicher macht: in welche Summen jede betroffene Zahl eingeht, dass die Anhebung nur in eine Richtung gehen darf und dass offene Angebote mit einer angehobenen Position dem Nutzer genannt werden müssen, weil ihre Angebotssumme sich still verändert hat."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/145-billing-above-a-positions-remaining-quantity.md
changes: [WZ-US-36, WZ-US-42]
---
