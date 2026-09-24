---
title:
  en: "A failed save aborts the whole export"
  de: "Ein fehlgeschlagenes Speichern bricht den ganzen Export ab"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a save that fails during an export to abort the export entirely"
  de: "dass ein während des Exports fehlgeschlagenes Speichern den Export vollständig abbricht"
soThat:
  en: "an invoice never ends up frozen as Exportiert holding data that was never stored"
  de: "eine Rechnung nie als Exportiert eingefroren dasteht und Daten trägt, die nie gespeichert wurden"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "A save that fails while exporting aborts the whole export: no PDF is rendered, nothing is stored, the state stays Draft and the invoice date stays unset"
    - "The user sees the German error for the failed save and the invoice remains editable"
    - "The export stays atomic — render, store, stamp and lock either all happen or none do"
    - "A regression test covers the failing-save path and asserts the invoice is still a draft afterwards"
  de:
    - "Ein während des Exports fehlgeschlagenes Speichern bricht den gesamten Export ab: kein PDF wird gerendert, nichts gespeichert, der Status bleibt Entwurf und das Rechnungsdatum ungesetzt"
    - "Der Nutzer sieht die deutsche Fehlermeldung des fehlgeschlagenen Speicherns, und die Rechnung bleibt bearbeitbar"
    - "Der Export bleibt atomar — Rendern, Speichern, Stempeln und Sperren geschehen ganz oder gar nicht"
    - "Ein Regressionstest deckt den Pfad des fehlgeschlagenen Speicherns ab und prüft, dass die Rechnung danach noch Entwurf ist"
codeUrl: Client/Invoices/InvoiceExportLauncher.razor
adr: [WZ-ADR-011]
priority: must
status: done
aiContribution:
  en: "This was fixed as a one-off, for the invoice editor’s export button alone, and that is exactly what made it worth a decision later. The pattern — an action that acts on the stored record while the screen holds something newer — was never written down here, so the same gap survived on every other surface that offers the same button. The AI found them all at the next readiness gate, by reading the codebase rather than waiting for the next walk to trip over them one at a time."
  de: "Das wurde als Einzelfall behoben, nur für die Export-Schaltfläche im Rechnungseditor — und genau deshalb war es später eine eigene Entscheidung wert. Das Muster — eine Aktion wirkt auf den gespeicherten Datensatz, während der Bildschirm etwas Neueres hält — wurde hier nie festgehalten, also überlebte dieselbe Lücke auf jeder anderen Oberfläche mit derselben Schaltfläche. Die KI fand sie am nächsten Readiness-Gate alle, indem sie den Code las, statt zu warten, bis der nächste Durchlauf einzeln darüber stolpert."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/116-invoice-export-not-locked-on-failed-save.md
changes: [WZ-US-39]
---
