---
title:
  en: "What is still billable on a position"
  de: "Was auf einer Position noch abrechenbar ist"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "The remaining quantity is derived, never stored: the position’s quantity minus everything billed against it by lines that still count. Cancelled invoices and Stornorechnungen drop out of the sum, which is why cancelling a bill makes its positions billable again without any field being written."
  de: "Die Restmenge wird abgeleitet, nie gespeichert: die Menge der Position abzüglich allem, was noch zählende Zeilen gegen sie abgerechnet haben. Stornierte Rechnungen und Stornorechnungen fallen aus der Summe — deshalb werden die Positionen einer stornierten Rechnung wieder abrechenbar, ohne dass ein Feld geschrieben wird."
aiContribution:
  en: "The AI proposed deriving the remainder instead of storing it, and the diagram shows why that was the load-bearing choice: cancellation, deletion of a draft and removal of a line all return quantity for free, with no compensating write and no field that can fall out of step."
  de: "Die KI schlug vor, die Restmenge abzuleiten statt zu speichern, und das Bild zeigt, warum das die tragende Entscheidung war: Stornieren, das Löschen eines Entwurfs und das Entfernen einer Zeile geben Menge kostenlos zurück — ohne Gegenbuchung und ohne ein Feld, das aus dem Tritt geraten kann."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/031-create-advance-invoice.md
code:
  en: |
    flowchart LR
      P[Position quantity] --> R{{Remaining = quantity − sum of billed}}
      I1[Draft invoice line] --> R
      I2[Exported invoice line] --> R
      I3[Paid invoice line] --> R
      C1[Cancelled invoice line] -. excluded .-> R
      C2[Stornorechnung line] -. excluded .-> R
      R --> E{Remaining greater than zero?}
      E -->|yes| S[Selectable, prefilled with what is left]
      E -->|no| G[Not offered \u2014 hidden on both forms until the form redesign]
  de: |
    flowchart LR
      P[Menge der Position] --> R{{Restmenge = Menge − Summe des Abgerechneten}}
      I1[Zeile einer Entwurfsrechnung] --> R
      I2[Zeile einer exportierten Rechnung] --> R
      I3[Zeile einer bezahlten Rechnung] --> R
      C1[Zeile einer stornierten Rechnung] -. ausgeschlossen .-> R
      C2[Zeile einer Stornorechnung] -. ausgeschlossen .-> R
      R --> E{Restmenge größer als null?}
      E -->|ja| S[Auswählbar, vorbelegt mit dem Rest]
      E -->|nein| G[Nicht angeboten \u2014 bis zur Neugestaltung auf beiden Formularen ausgeblendet]
---
