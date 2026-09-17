---
term:
  en: "Invoice line"
  de: "Rechnungsposition"
case: wurzel
definition:
  en: "A line of an invoice, and itself the snapshot of what was billed: description, unit and unit price are copied from the project position at billing time, and `BilledQuantity` holds the slice this line bills. Unlike an offer line it never reads position data live, so later edits to the position do not change an issued bill."
  de: "Eine Zeile einer Rechnung — und zugleich der Snapshot des Abgerechneten: Beschreibung, Einheit und Einzelpreis werden zum Abrechnungszeitpunkt von der Projektposition kopiert, und die Menge hält den abgerechneten Anteil. Anders als eine Angebotsposition liest sie die Positionsdaten nie live, spätere Änderungen an der Position verändern eine gestellte Rechnung also nicht."
---
