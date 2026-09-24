---
title:
  en: "What is on the screen is what gets saved, shown and issued"
  de: "Was auf dem Bildschirm steht, wird gespeichert, gezeigt und gestellt"
case: wurzel
businessGoal:
  en: "On forms that have no Save button, the owner can type a change and immediately preview, export or leave the page, and the document that is produced — or the record that is kept — contains that change. A save that failed never leaves a bill looking issued."
  de: "Auf Formularen ohne Speichern-Schaltfläche kann der Inhaber eine Änderung eintippen und sofort eine Vorschau öffnen, exportieren oder die Seite verlassen — und das erzeugte Dokument beziehungsweise der gespeicherte Datensatz enthält diese Änderung. Ein fehlgeschlagener Speichervorgang lässt eine Rechnung nie als gestellt erscheinen."
fitCriterion:
  en: "On every surface that offers Vorschau or Exportieren — the editor, a create page still mounted after its first save, and every card or list row — typing a change and clicking the action without any further keystroke produces a document containing that change; and when the save fails, the invoice is still Entwurf, has no stored document and can be retried."
  de: "Auf jeder Oberfläche mit Vorschau oder Exportieren — dem Editor, einer nach dem ersten Speichern noch geöffneten Anlegeseite und jeder Karte oder Listenzeile — erzeugt eine eingetippte Änderung mit anschließendem Klick ohne weiteren Tastendruck ein Dokument, das diese Änderung enthält. Und wenn das Speichern fehlschlägt, ist die Rechnung weiterhin Entwurf, hat kein gespeichertes Dokument und kann erneut versucht werden."
priority: must
status: done
aiContribution:
  en: "This requirement exists because the Level-3 test walks found the same seam from several sides, and the AI’s first contribution was to refuse to treat them as separate bugs. Reviewing the codebase at the Level-4 readiness gate it located every surface with the same gap — the offer editor’s export, the latest-offer card, the per-row preview and export in the project’s invoice list, both invoice create pages — each of which would otherwise have become its own story and been argued on its own terms. It also found that the guard that looked like it prevented a save against a frozen record sat at the wrong end: it stopped a new edit from marking the form dirty, but not a save already pending from firing. The rule the fixes share was written down as a decision only after that."
  de: "Diese Anforderung existiert, weil die Level-3-Testdurchläufe dieselbe Nahtstelle aus mehreren Richtungen trafen — und der erste Beitrag der KI war, sie nicht als getrennte Fehler zu behandeln. Bei der Durchsicht des Codes am Readiness-Gate von Level 4 fand sie jede Oberfläche mit derselben Lücke: den Export im Angebotseditor, die Karte des neuesten Angebots, Vorschau und Export je Zeile in der Rechnungsliste des Projekts, beide Anlegeseiten für Rechnungen — jede davon wäre sonst eine eigene Story geworden und für sich diskutiert worden. Sie fand außerdem, dass die Absicherung, die ein Speichern gegen einen eingefrorenen Datensatz zu verhindern schien, am falschen Ende saß: Sie verhinderte, dass eine neue Eingabe das Formular als geändert markiert, nicht aber, dass ein bereits anstehender Speichervorgang auslöst. Die gemeinsame Regel wurde erst danach als Entscheidung festgehalten."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0032-preview-and-export-save-first.md
---

Level 4 exists because the Level-3 walk found this class of defect, not because a feature was
missing. Autosave without a Save button is a promise: the user never thinks about saving. Every
finding here is that promise breaking at a seam — an action that read the stored record while the
screen held something newer, a page that kept saving after its record was frozen, a bill that went
to `Exportiert` while a save error was on screen.
