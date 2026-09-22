---
title:
  en: "Preview and export save first, and run only on a successful save"
  de: "Vorschau und Export speichern zuerst und laufen nur nach erfolgreichem Speichern"
case: wurzel
status: accepted
date: 2026-09-05
relatedRequirements: [WZ-R-15]
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0032-preview-and-export-save-first.md
---

## Context
Every previewable and exportable document is edited on an autosaving form with no Save button, while
Vorschau and Exportieren act on the *persisted* record: the server renders what the database
holds, not what is on screen.

Two walks of the Level-3 checklist hit that seam from opposite sides. One found an invoice that
reached *Exportiert* while a save error was on screen — and an exported invoice is immutable, so it
could only be cancelled and re-issued. The other found Vorschau rendering the previously saved
invoice while the export button beside it flushed first: a user could approve one document and export
a different one. Reviewing the codebase afterwards found the same gap on every surface the first fix
had not touched.

## Decision
Before a preview or an export starts, pending changes are saved, and the action runs **only if that
save succeeded**. The rule is unconditional: every previewable or exportable entity, every surface
that offers the action — the editor, a create page still mounted after its first save, and any card,
row or list rendering the button elsewhere.

## Consequences
The rule existed as a fix in one place before it existed as a rule. Writing it down is what stopped
each remaining surface from becoming its own story, argued on its own terms and fixed in its own way.
A failed save now leaves the invoice a `Draft` with no stored document, and the user can retry.
