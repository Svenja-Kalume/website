---
title:
  en: "What is still billable on a position"
  de: "Was auf einer Position noch abrechenbar ist"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "The remaining quantity is derived, never stored: the position’s quantity minus everything billed against it by lines that still count. Cancelled invoices and Stornorechnungen drop out of the sum, which is why cancelling a bill makes its positions billable again without any field being written. A position with nothing left is not offered — knowingly hidden on both invoice forms until they are redesigned, rather than shown greyed out. The lines that count are those of a draft, exported or paid invoice; the ones that do not are the lines of a cancelled invoice and of a Stornorechnung."
  de: "Die Restmenge wird abgeleitet, nie gespeichert: die Menge der Position abzüglich alles dessen, was noch zählende Zeilen gegen sie abgerechnet haben. Stornierte Rechnungen und Stornorechnungen fallen aus der Summe — deshalb werden die Positionen einer stornierten Rechnung wieder abrechenbar, ohne dass ein Feld geschrieben wird. Eine Position ohne Rest wird nicht angeboten — auf beiden Rechnungsformularen wissentlich ausgeblendet, bis diese neu gestaltet werden, statt ausgegraut gezeigt. Es zählen die Zeilen einer Entwurfs-, exportierten oder bezahlten Rechnung; nicht mit zählen die Zeilen einer stornierten Rechnung und einer Stornorechnung."
aiContribution:
  en: "The AI proposed deriving the remainder instead of storing it, and the diagram shows why that was the load-bearing choice: cancellation, deletion of a draft and removal of a line all return quantity for free, with no compensating write and no field that can fall out of step."
  de: "Die KI schlug vor, die Restmenge abzuleiten statt zu speichern, und das Bild zeigt, warum das die tragende Entscheidung war: Stornieren, das Löschen eines Entwurfs und das Entfernen einer Zeile geben Menge kostenlos zurück — ohne Gegenbuchung und ohne ein Feld, das aus dem Tritt geraten kann."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/031-create-advance-invoice.md
code:
  en: |
    flowchart TD
      P[Position quantity] --> R{{Quantity − billed}}
      Z[Lines that count] --> R
      X[Cancelled lines] -. do not count .-> R
      R --> Q{Above zero?}
      Q -->|"yes"| S[Selectable, prefilled]
      Q -->|"no"| G[Not offered]
  de: |
    flowchart TD
      P[Menge der Position] --> R{{Menge − Abgerechnetes}}
      Z[Zählende Zeilen] --> R
      X[Stornierte Zeilen] -. zählen nicht .-> R
      R --> Q{Größer als null?}
      Q -->|"ja"| S[Auswählbar, vorbelegt]
      Q -->|"nein"| G[Nicht angeboten]
---
