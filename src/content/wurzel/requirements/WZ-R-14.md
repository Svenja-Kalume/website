---
title:
  en: "Void a bill the way the tax office expects"
  de: "Eine Rechnung so aufheben, wie es das Finanzamt erwartet"
case: wurzel
businessGoal:
  en: "A bill that should not have been issued is withdrawn without deleting it and without editing it, in the form the owner’s VAT status requires: a pure state change for a Kleinunternehmer, and a Stornorechnung counter-document for a VAT invoice, so the tax advisor receives a paired pair of documents rather than a gap."
  de: "Eine zu Unrecht gestellte Rechnung wird zurückgenommen, ohne sie zu löschen und ohne sie zu ändern — in der Form, die der Umsatzsteuerstatus des Inhabers verlangt: ein reiner Zustandswechsel beim Kleinunternehmer, eine Stornorechnung als Gegendokument bei einer Rechnung mit Umsatzsteuer, damit der Steuerberater ein Dokumentenpaar erhält statt einer Lücke."
fitCriterion:
  en: "Cancelling a VAT invoice produces a second document numbered `<original>-S` that references the original and is itself frozen; cancelling a § 19 invoice produces none and marks the original STORNIERT; in both cases the original still downloads unchanged, the billed quantities return to their positions, and the next ordinary invoice of the year takes the next counter value with no gap."
  de: "Das Stornieren einer Rechnung mit Umsatzsteuer erzeugt ein zweites, selbst eingefrorenes Dokument mit der Nummer `<Original>-S`, das auf das Original verweist; das Stornieren einer §-19-Rechnung erzeugt keines und kennzeichnet das Original als STORNIERT. In beiden Fällen lädt das Original unverändert herunter, die abgerechneten Mengen kehren an ihre Positionen zurück, und die nächste reguläre Rechnung des Jahres erhält den nächsten Zählerwert ohne Lücke."
priority: must
status: done
aiContribution:
  en: "The AI found the collision that made this more than a state flip: a Stornorechnung numbered `2026-034-S` would enter the yearly number scan, whose parser accepts only `yyyy-nnn` and throws on anything else — so the next invoice of that year would have failed to generate at all. It proposed excluding correction rows from the scan rather than loosening the parser, keeping the rule symmetric with the existing one that excludes them from remaining-quantity sums. What the AI did not decide is the split itself: cancelling is one operation to a user, and making it two stories by VAT status is a legal distinction I took from § 14c UStG, not a technical one."
  de: "Die KI fand die Kollision, die daraus mehr als einen Zustandswechsel machte: Eine Stornorechnung mit der Nummer `2026-034-S` würde in den jährlichen Nummernscan geraten, dessen Parser nur `yyyy-nnn` akzeptiert und bei allem anderen abbricht — die nächste Rechnung des Jahres hätte sich also gar nicht erzeugen lassen. Sie schlug vor, Stornozeilen aus dem Scan auszuschließen, statt den Parser aufzuweichen, und hielt die Regel damit symmetrisch zu der bestehenden, die sie aus den Restmengen heraushält. Nicht entschieden hat die KI die Aufteilung selbst: Für die Nutzerin ist Stornieren ein Vorgang, und ihn nach Umsatzsteuerstatus in zwei Stories zu trennen, ist eine juristische Unterscheidung aus § 14c UStG, die ich getroffen habe."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0031-correction-invoice-numbers-excluded-from-sequence.md
---

Cancellation is where an invoicing system either stays honest or stops being usable as a record.
This requirement covers the shared `Exported → Cancelled` transition with its STORNIERT marking and
returned quantities, the Stornorechnung counter-document for VAT invoices, and the ordering rule that
an advance invoice cannot be voided while a final invoice built on top of it still stands.
