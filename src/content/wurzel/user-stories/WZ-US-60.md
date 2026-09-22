---
title:
  en: "The preview shows the document as it stands on screen"
  de: "Die Vorschau zeigt das Dokument, wie es am Bildschirm steht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "the Vorschau to show the document as it stands on screen"
  de: "dass die Vorschau das Dokument zeigt, wie es am Bildschirm steht"
soThat:
  en: "what I approve is what the PDF will contain"
  de: "das, was ich freigebe, auch im PDF steht"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "Opening Vorschau renders the document as it stands on screen, including a change made immediately before the button was pressed"
    - "This holds on every surface that offers a preview, on a create page as well as an edit page"
    - "The preview and an export taken straight afterwards describe the same document, except for the invoice date, which the export stamps at its lock point and a draft preview cannot show"
    - "When the save is pending or has failed, the preview does not open and the user is told why"
    - "The Exportieren button inside the preview opened from the project’s invoice list actually starts an export, through the same save-first gate as every other surface"
    - "Regression coverage drives a preview with an unsaved change outstanding, once per surface"
  de:
    - "Das Öffnen der Vorschau rendert das Dokument, wie es am Bildschirm steht — einschließlich einer Änderung unmittelbar vor dem Klick"
    - "Das gilt auf jeder Oberfläche mit Vorschau, auf einer Anlegeseite ebenso wie auf einer Bearbeitungsseite"
    - "Vorschau und ein unmittelbar danach ausgelöster Export beschreiben dasselbe Dokument, bis auf das Rechnungsdatum, das der Export an seinem Sperrpunkt stempelt und das eine Entwurfsvorschau nicht zeigen kann"
    - "Steht ein Speichern aus oder ist es fehlgeschlagen, öffnet die Vorschau nicht, und die Nutzerin erfährt warum"
    - "Die Schaltfläche Exportieren in der aus der Projekt-Rechnungsliste geöffneten Vorschau startet tatsächlich einen Export — durch dieselbe Speichern-zuerst-Schranke wie jede andere Oberfläche"
    - "Ein Regressionstest fährt je Oberfläche eine Vorschau mit ausstehender ungespeicherter Änderung"
codeUrl: Client/Invoices/InvoicePreviewLauncher.razor
adr: [WZ-ADR-011]
priority: must
status: done
aiContribution:
  en: "The finding that turned a set of fixes into a rule: the preview rendered the previously saved invoice while the export button beside it flushed first, so a user could approve one document and export a different one. The AI’s contribution was the second-order one — it also found the export button inside that same preview modal doing nothing at all on one surface, because the list component never bound its event. Two defects behind one button, and only one of them was visible to the walk."
  de: "Der Befund, der aus einer Reihe von Korrekturen eine Regel machte: Die Vorschau rendert die zuletzt gespeicherte Rechnung, während die Export-Schaltfläche daneben zuerst speichert — die Nutzerin konnte also ein Dokument freigeben und ein anderes exportieren. Der Beitrag der KI war der zweite Schritt: Sie fand zudem, dass die Export-Schaltfläche in genau dieser Vorschau auf einer Oberfläche gar nichts tat, weil die Listenkomponente ihr Ereignis nie gebunden hatte. Zwei Fehler hinter einer Schaltfläche, und nur einer davon war im Testdurchlauf sichtbar."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/130-invoice-preview-shows-unsaved-changes.md
changes: [WZ-US-38]
---
