---
title:
  en: "Void a VAT bill with a proper Stornorechnung"
  de: "Eine Umsatzsteuer-Rechnung mit einer richtigen Stornorechnung aufheben"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to issue a Storno document for a cancelled VAT invoice"
  de: "für eine stornierte Umsatzsteuer-Rechnung ein Stornodokument ausstellen"
soThat:
  en: "my customer and my tax advisor both hold a document that reverses the VAT, instead of a bill that simply stops being mentioned"
  de: "mein Kunde und mein Steuerberater beide ein Dokument in der Hand haben, das die Umsatzsteuer umkehrt, statt einer Rechnung, von der einfach nicht mehr die Rede ist"
requirement: WZ-R-14
acceptanceCriteria:
  en:
    - "Stornorechnung erstellen is offered only on a cancelled VAT invoice, never on a § 19 invoice, never before cancellation and never twice; an explicit confirmation precedes the generation"
    - "The generated row is a CorrectionInvoice numbered `<original>-S`, referencing the original, born Exported with its date stamped, and carrying the original’s frozen tax rate rather than today’s setting"
    - "Its lines copy the original’s with the unit price negated, so the two documents sum to zero to the cent"
    - "It is excluded from the invoice number sequence and from the remaining-quantity and offer-eligibility sums — issuing it neither advances the counter nor changes any position"
    - "Its PDF goes through the same export pipeline, is stored and frozen, and the row exposes only download and read-only view — no preview, no cancel, no delete"
    - "Until the Storno exists, the cancelled VAT invoice is flagged “Stornorechnung noch nicht erstellt” in the view and both lists, and the flag clears once it does"
  de:
    - "Stornorechnung erstellen wird nur auf einer stornierten Umsatzsteuer-Rechnung angeboten, nie bei § 19, nie vor dem Stornieren und nie zweimal; vor der Erzeugung steht eine ausdrückliche Bestätigung"
    - "Der erzeugte Datensatz ist eine Stornorechnung mit der Nummer `<Original>-S`, verweist auf das Original, entsteht direkt als exportiert mit gestempeltem Datum und trägt den eingefrorenen Steuersatz des Originals statt der heutigen Einstellung"
    - "Ihre Zeilen kopieren die des Originals mit negiertem Einzelpreis, sodass beide Dokumente auf den Cent genau null ergeben"
    - "Sie ist aus der Rechnungsnummernfolge und aus den Restmengen- und Angebotssummen ausgeschlossen — ihr Ausstellen bewegt weder den Zähler noch eine Position"
    - "Ihr PDF durchläuft dieselbe Exportstrecke, wird gespeichert und eingefroren, und die Zeile bietet nur Herunterladen und Leseansicht — keine Vorschau, kein Stornieren, kein Löschen"
    - "Bis die Stornorechnung existiert, ist die stornierte Umsatzsteuer-Rechnung in der Ansicht und in beiden Listen mit „Stornorechnung noch nicht erstellt“ gekennzeichnet; das Kennzeichen verschwindet, sobald sie existiert"
codeUrl: Server/CRUD/NumberGeneratorHelper.cs
adr: [WZ-ADR-010]
priority: must
status: done
aiContribution:
  en: "The AI found the defect this story would otherwise have shipped, and it was not in this story’s own behaviour. A Stornorechnung numbered `2026-034-S` would have entered the yearly number scan, whose parser accepts only `yyyy-nnn` and throws on anything else — so the *next ordinary invoice of that year* would have failed to generate at all. It proposed excluding correction rows from the scan rather than loosening the parser, keeping the rule symmetric with the existing one that keeps them out of remaining-quantity sums, and keeping a genuinely malformed number failing loudly rather than being silently mis-parsed."
  de: "Die KI fand den Fehler, den diese Story sonst ausgeliefert hätte — und er lag nicht in ihrem eigenen Verhalten. Eine Stornorechnung mit der Nummer `2026-034-S` wäre in den jährlichen Nummernscan geraten, dessen Parser nur `yyyy-nnn` akzeptiert und bei allem anderen abbricht — die *nächste reguläre Rechnung dieses Jahres* hätte sich also überhaupt nicht erzeugen lassen. Sie schlug vor, Stornozeilen aus dem Scan auszuschließen statt den Parser aufzuweichen: symmetrisch zur bestehenden Regel, die sie aus den Restmengen hält, und so, dass eine wirklich fehlerhafte Nummer weiterhin laut scheitert statt still falsch gelesen zu werden."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/084-storno-invoice-document.md
---
