---
title:
  en: "A locked offer opens in a read-only view, like an exported invoice"
  de: "Ein gesperrtes Angebot öffnet sich in einer schreibgeschützten Ansicht, wie eine exportierte Rechnung"
case: wurzel
status: accepted
date: 2026-10-24
relatedRequirements: [WZ-R-19]
context:
  en:
    - "An exported invoice opens in its own read-only view of its stored pages. A locked offer instead opened the editor with every field switched off. A locked offer is one of two kinds: exported, with stored PDF pages, or replaced, which never has any — the AI had first assumed an exported offer is never replaced, and checking the code corrected that."
  de:
    - "Eine exportierte Rechnung öffnet sich in ihrer eigenen schreibgeschützten Ansicht ihrer gespeicherten Seiten. Ein gesperrtes Angebot öffnete stattdessen den Editor mit jedem Feld abgeschaltet. Ein gesperrtes Angebot ist eine von zwei Arten: exportiert, mit gespeicherten PDF-Seiten, oder ersetzt, das nie welche hat — die KI hatte zunächst angenommen, ein exportiertes Angebot werde nie ersetzt, und die Prüfung des Codes hat das korrigiert."
decision:
  en:
    - "A locked offer opens in a read-only view of its own. An exported offer shows its stored PDF pages and Herunterladen; a replaced one shows its frozen lines and only its net total. The editor's address leads a locked offer to its view, and the editor no longer has a read-only mode."
  de:
    - "Ein gesperrtes Angebot öffnet sich in einer eigenen schreibgeschützten Ansicht. Ein exportiertes zeigt seine gespeicherten PDF-Seiten und Herunterladen; ein ersetztes zeigt seine eingefrorenen Zeilen und nur seine Nettosumme. Die Adresse des Editors führt ein gesperrtes Angebot zu seiner Ansicht, und der Editor hat keinen schreibgeschützten Modus mehr."
consequences:
  en:
    - "The screen of an exported offer is the document the customer received, MwSt. included. Rejected: a lines table for an exported offer too, keeping the read-only editor, and rendering pages for a replaced offer, which would carry today's settings rather than those of the time."
  de:
    - "Der Bildschirm eines exportierten Angebots ist das Dokument, das der Kunde erhalten hat, MwSt. eingeschlossen. Verworfen: eine Zeilentabelle auch für ein exportiertes Angebot, der schreibgeschützte Editor und gerenderte Seiten für ein ersetztes Angebot, die die heutigen Einstellungen trügen statt der damaligen."
introducedIn: WZ-0.4.0
source: docs/decisions/design/dsdr-0021-a-locked-offer-opens-in-a-read-only-view.md
---
