---
title:
  en: "Every exported invoice PDF carries its invoice date"
  de: "Jedes exportierte Rechnungs-PDF trägt sein Rechnungsdatum"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "the exported PDF to show the Rechnungsdatum"
  de: "dass das exportierte PDF das Rechnungsdatum zeigt"
soThat:
  en: "the document I hand a customer is a legally valid Rechnung"
  de: "das Dokument, das ich dem Kunden gebe, eine gültige Rechnung ist"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "Exporting stamps the invoice date and the exported state **before** the renderable document model is built, so the model is built from the locked invoice"
    - "The exported PDF and its stored page images show the Rechnungsdatum in German format, on both invoice types"
    - "The date on the stored document is the same date the invoice row holds — the app copy and the customer copy cannot disagree"
    - "The “—” placeholder stays correct in the on-screen preview of a draft, which is not an export and still has no date"
    - "Regression coverage asserts the exported **document** carries the date, not only that the row does"
  de:
    - "Der Export stempelt Rechnungsdatum und Status **vor** dem Aufbau des renderbaren Dokumentmodells, das Modell entsteht also aus der gesperrten Rechnung"
    - "Das exportierte PDF und seine gespeicherten Seitenbilder zeigen das Rechnungsdatum in deutschem Format, bei beiden Rechnungsarten"
    - "Das Datum auf dem gespeicherten Dokument ist dasselbe wie im Datensatz — App-Kopie und Kundenkopie können nicht widersprechen"
    - "Der Platzhalter „—“ bleibt in der Bildschirmvorschau eines Entwurfs richtig, denn sie ist kein Export und hat noch kein Datum"
    - "Ein Regressionstest prüft, dass das exportierte **Dokument** das Datum trägt, nicht nur der Datensatz"
codeUrl: Server/Invoices/InvoiceExporter.cs
adr: [WZ-ADR-006]
priority: must
status: done
aiContribution:
  en: "The severest finding of the first walk, and the one that shows why a test can pass while the feature is broken: the existing coverage asserted the invoice **row** carried its date after export, and it did. The document did not, because the model was built before the stamp. Every invoice exported until then carried a permanently dateless PDF, and an exported invoice is immutable — so each one could only be cancelled and re-issued. The AI’s contribution was the ordering fix and, more usefully, the criterion that the regression test must assert against the rendered document rather than the record it came from."
  de: "Der schwerste Befund des ersten Testdurchlaufs — und der, der zeigt, warum ein Test grün sein kann, während die Funktion kaputt ist: Die vorhandene Abdeckung prüfte, dass der **Datensatz** nach dem Export sein Datum trug, und das tat er. Das Dokument nicht, denn das Modell wurde vor dem Stempeln gebaut. Jede bis dahin exportierte Rechnung trug ein dauerhaft datumsloses PDF, und eine exportierte Rechnung ist unveränderlich — jede einzelne konnte also nur storniert und neu gestellt werden. Der Beitrag der KI war die Korrektur der Reihenfolge und, nützlicher noch, das Kriterium, dass der Regressionstest gegen das gerenderte Dokument prüfen muss und nicht gegen den Datensatz, aus dem es entstand."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/114-invoice-date-stamped-before-pdf-render.md
changes: [WZ-US-39]
---
