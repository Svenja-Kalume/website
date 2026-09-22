---
title:
  en: "An autosaved page stops saving once its record is frozen"
  de: "Eine autospeichernde Seite hört auf zu speichern, sobald ihr Datensatz eingefroren ist"
case: wurzel
status: accepted
date: 2026-09-07
relatedRequirements: [WZ-R-15]
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0034-an-autosaved-page-stops-saving-a-frozen-record.md
---

## Context
There is no Save button: four triggers persist an edit form, and two entities have lock points
that make a record immutable while its form is still on screen — exporting an offer, superseding it
with a new version, and exporting an invoice. Nothing stopped an autosaved form from writing to a
record that had just been frozen.

The guards that looked like they did sat at the wrong end. The offer editor returned early from its
change handler when the form was read-only, which prevents a new edit from marking the form
dirty — it does not prevent a save that was already pending from firing. The window is real and
narrow: a keystroke landing between the save-first flush and the export response leaves changes
pending when the lock point lands, and the idle timer or the dispose flush then writes against a
locked record, which the server answers `Conflict`. On the invoice create pages the same window ends
with the export's navigation unmounting the page and the dispose flush firing at a frozen invoice.

## Decision
Every autosaved main-entity form carries one flag, checked where the engine persists, so a page
stops saving once its record is frozen.

## Consequences
In each case the user had just completed a successful action and was immediately shown a save
failure for it — the app contradicting itself about something that had worked. A fourth lock point,
cancelling an invoice, cannot strand a save today because it happens on a read-only page with no
form; the rule covers it anyway, so if that action ever moves onto an editing surface the mechanism
is already there.
