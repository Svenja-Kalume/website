---
title:
  en: "What is still billable on a position"
  de: "Was auf einer Position noch abrechenbar ist"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "The remaining quantity is derived, never stored: the position’s quantity minus everything billed against it by lines that still count. Cancelled invoices and Stornorechnungen drop out of the sum, which is why cancelling a bill makes its positions billable again without any field being written. A position with nothing left is not offered — knowingly hidden on both invoice forms until they are redesigned, rather than shown greyed out."
  de: "Die Restmenge wird abgeleitet, nie gespeichert: die Menge der Position abzüglich alles dessen, was noch zählende Zeilen gegen sie abgerechnet haben. Stornierte Rechnungen und Stornorechnungen fallen aus der Summe — deshalb werden die Positionen einer stornierten Rechnung wieder abrechenbar, ohne dass ein Feld geschrieben wird. Eine Position ohne Rest wird nicht angeboten — auf beiden Rechnungsformularen wissentlich ausgeblendet, bis diese neu gestaltet werden, statt ausgegraut gezeigt."
aiContribution:
  en: "The AI proposed deriving the remainder instead of storing it, and the diagram shows why that was the load-bearing choice: cancellation, deletion of a draft and removal of a line all return quantity for free, with no compensating write and no field that can fall out of step."
  de: "Die KI schlug vor, die Restmenge abzuleiten statt zu speichern, und das Bild zeigt, warum das die tragende Entscheidung war: Stornieren, das Löschen eines Entwurfs und das Entfernen einer Zeile geben Menge kostenlos zurück — ohne Gegenbuchung und ohne ein Feld, das aus dem Tritt geraten kann."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/031-create-advance-invoice.md
code:
  en: |
    flowchart TD
      P[Position quantity] --> R{{Remaining = quantity − billed}}
      I1[Draft invoice line] --> R
      I2[Exported invoice line] --> R
      I3[Paid invoice line] --> R
      subgraph X["Does not count"]
        C1[Cancelled invoice line]
        C2[Stornorechnung line]
      end
      R --> E{Remaining above zero?}
      E -->|"yes"| S[Selectable, prefilled]
      E -->|"no"| G[Not offered]
  de: |
    flowchart TD
      P[Menge der Position] --> R{{Restmenge = Menge − Abgerechnetes}}
      I1[Zeile einer Entwurfsrechnung] --> R
      I2[Zeile einer exportierten Rechnung] --> R
      I3[Zeile einer bezahlten Rechnung] --> R
      subgraph X["Zählt nicht mit"]
        C1[Zeile einer stornierten Rechnung]
        C2[Zeile einer Stornorechnung]
      end
      R --> E{Restmenge größer als null?}
      E -->|"ja"| S[Auswählbar, vorbelegt]
      E -->|"nein"| G[Nicht angeboten]
---
