---
title:
  en: "Preview and export save first, and run only on a successful save"
  de: "Vorschau und Export speichern zuerst und laufen nur nach erfolgreichem Speichern"
case: wurzel
status: accepted
date: 2026-09-05
relatedRequirements: [WZ-R-15]
context:
  en:
    - "Every previewable and exportable document is edited on an autosaving form with no Save button, while Vorschau and Exportieren act on the *persisted* record: the server renders what the database holds, not what is on screen."
    - "Two walks of the Level-3 checklist hit that seam from opposite sides. One found an invoice that reached *Exportiert* while a save error was on screen — and an exported invoice is immutable, so it could only be cancelled and re-issued. The other found Vorschau rendering the previously saved invoice while the export button beside it flushed first: a user could approve one document and export a different one. Reviewing the codebase afterwards found the same gap on every surface the first fix had not touched."
  de:
    - "Jedes Dokument mit Vorschau und Export wird in einem automatisch speichernden Formular ohne Speichern-Schaltfläche bearbeitet, während Vorschau und Exportieren auf dem *gespeicherten* Datensatz arbeiten: Der Server rendert, was die Datenbank hält, nicht was auf dem Bildschirm steht."
    - "Zwei Durchgänge der Level-3-Checkliste trafen diese Naht von entgegengesetzten Seiten. Der eine fand eine Rechnung, die *Exportiert* erreichte, während ein Speicherfehler auf dem Bildschirm stand — und eine exportierte Rechnung ist unveränderlich, sie konnte also nur storniert und neu gestellt werden. Der andere fand eine Vorschau, die die zuvor gespeicherte Rechnung rendert, während die Export-Schaltfläche daneben zuerst schrieb: Ein Nutzer konnte ein Dokument freigeben und ein anderes exportieren. Das anschließende Lesen des Codes fand dieselbe Lücke auf jeder Oberfläche, die die erste Korrektur nicht berührt hatte."
decision:
  en:
    - "Before a preview or an export starts, pending changes are saved, and the action runs only if that save succeeded. The rule is unconditional: every previewable or exportable entity, every surface that offers the action — the editor, a create page still mounted after its first save, and any card, row or list rendering the button elsewhere."
  de:
    - "Bevor eine Vorschau oder ein Export startet, werden offene Änderungen gespeichert, und die Aktion läuft nur, wenn dieses Speichern erfolgreich war. Die Regel gilt ohne Ausnahme: für jede Entität mit Vorschau oder Export und für jede Oberfläche, die die Aktion anbietet — den Editor, eine Anlegen-Seite, die nach ihrem ersten Speichern noch eingehängt ist, und jede Karte, Zeile oder Liste, die die Schaltfläche anderswo rendert."
consequences:
  en:
    - "The rule existed as a fix in one place before it existed as a rule. Writing it down is what stopped each remaining surface from becoming its own story, argued on its own terms and fixed in its own way. A failed save now leaves the invoice a `Draft` with no stored document, and the user can retry."
  de:
    - "Die Regel existierte als Korrektur an einer Stelle, bevor sie als Regel existierte. Erst das Aufschreiben hat verhindert, dass jede weitere Oberfläche zu einer eigenen Story wird, eigens begründet und eigens repariert. Ein fehlgeschlagenes Speichern lässt die Rechnung jetzt als `Draft` ohne gespeichertes Dokument zurück, und der Nutzer kann es erneut versuchen."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0032-preview-and-export-save-first.md
---
