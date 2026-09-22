---
title:
  en: "Exporting saves first, wherever it is started"
  de: "Exportieren speichert zuerst, egal wo es gestartet wird"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "an export to save my changes first wherever I start it"
  de: "dass ein Export meine Änderungen zuerst speichert, egal wo ich ihn starte"
soThat:
  en: "a frozen document never describes a state I could not see"
  de: "ein eingefrorenes Dokument nie einen Zustand beschreibt, den ich nicht sehen konnte"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "Exportieren saves pending changes before it starts, wherever it is offered — the invoice editor, the offer editor, the latest-offer card and the project’s invoice list"
    - "The export runs only if that save succeeded; on a pending or failed save it does not start and the user is told why"
    - "This holds on a create page as well as an edit page"
    - "An export started with an unsaved change on screen freezes a document that contains that change"
    - "A failed export on the project’s latest-offer card is reported to the user beside the button, matching every other export surface — today it is shown nowhere"
    - "Regression coverage drives an export with an unsaved change outstanding, once per surface"
  de:
    - "Exportieren speichert ausstehende Änderungen, bevor es startet — überall, wo es angeboten wird: im Rechnungseditor, im Angebotseditor, auf der Karte des neuesten Angebots und in der Rechnungsliste des Projekts"
    - "Der Export läuft nur, wenn dieses Speichern erfolgreich war; bei ausstehendem oder fehlgeschlagenem Speichern startet er nicht, und die Nutzerin erfährt warum"
    - "Das gilt auf einer Anlegeseite ebenso wie auf einer Bearbeitungsseite"
    - "Ein mit einer ungespeicherten Änderung am Bildschirm gestarteter Export friert ein Dokument ein, das diese Änderung enthält"
    - "Ein fehlgeschlagener Export auf der Karte des neuesten Angebots wird der Nutzerin neben der Schaltfläche gemeldet, wie auf jeder anderen Export-Oberfläche — bisher wird er nirgends gezeigt"
    - "Ein Regressionstest fährt je Oberfläche einen Export mit ausstehender ungespeicherter Änderung"
codeUrl: Client/Invoices/InvoiceExportActions.razor
adr: [WZ-ADR-011, WZ-ADR-013]
priority: must
status: done
aiContribution:
  en: "This is the story where the rule stopped being a fix. The AI had already patched the same seam once, in one place; reviewing the codebase at the readiness gate it listed every remaining surface with the same gap and argued they were one story, not five. It also found a failure that was being swallowed entirely — an export refused on the latest-offer card reported its error to nobody, because the card never bound the event — which no walk had reported, because a silent failure produces nothing to report."
  de: "Das ist die Story, in der aus der Korrektur eine Regel wurde. Die KI hatte dieselbe Nahtstelle schon einmal an einer Stelle geflickt; bei der Durchsicht am Readiness-Gate listete sie jede verbliebene Oberfläche mit derselben Lücke auf und argumentierte, das sei eine Story und nicht fünf. Sie fand zudem einen Fehler, der ganz verschluckt wurde — ein auf der Karte des neuesten Angebots abgelehnter Export meldete seinen Fehler niemandem, weil die Karte das Ereignis nie gebunden hatte —, den kein Testdurchlauf gemeldet hatte, weil ein stiller Fehlschlag nichts zu melden erzeugt."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/136-export-saves-first-on-every-surface.md
---
