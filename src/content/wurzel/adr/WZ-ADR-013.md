---
title:
  en: "An autosaved page stops saving once its record is frozen"
  de: "Eine autospeichernde Seite hört auf zu speichern, sobald ihr Datensatz eingefroren ist"
case: wurzel
status: accepted
date: 2026-09-07
relatedRequirements: [WZ-R-15]
context:
  en:
    - "There is no Save button: four triggers persist an edit form, and two entities have lock points that make a record immutable while its form is still on screen — exporting an offer, superseding it with a new version, and exporting an invoice. Nothing stopped an autosaved form from writing to a record that had just been frozen."
    - "The guards that looked like they did sat at the wrong end. The offer editor returned early from its change handler when the form was read-only, which prevents a new edit from marking the form dirty — it does not prevent a save that was already pending from firing. The window is real and narrow: a keystroke landing between the save-first flush and the export response leaves changes pending when the lock point lands, and the idle timer or the dispose flush then writes against a locked record, which the server answers `Conflict`. On the invoice create pages the same window ends with the export’s navigation unmounting the page and the dispose flush firing at a frozen invoice."
  de:
    - "Es gibt keine Speichern-Schaltfläche: Vier Auslöser speichern ein Bearbeitungsformular, und zwei Entitäten haben Sperrpunkte, die einen Datensatz unveränderlich machen, während sein Formular noch auf dem Bildschirm steht — ein Angebot exportieren, es durch eine neue Version ersetzen und eine Rechnung exportieren. Nichts hinderte ein automatisch speicherndes Formular daran, auf einen gerade eingefrorenen Datensatz zu schreiben."
    - "Die Absicherungen, die so aussahen, als täten sie genau das, saßen am falschen Ende. Der Angebots-Editor stieg in seinem Änderungs-Handler früh aus, wenn das Formular schreibgeschützt war; das verhindert, dass eine neue Eingabe das Formular als geändert markiert — es verhindert nicht, dass ein bereits anstehendes Speichern ausgelöst wird. Das Zeitfenster ist echt und schmal: Ein Tastendruck zwischen dem Speichern vor dem Export und der Antwort des Exports lässt Änderungen offen, wenn der Sperrpunkt eintritt; der Leerlauf-Zeitgeber oder das Speichern beim Verwerfen schreibt dann gegen einen gesperrten Datensatz, was der Server mit `Conflict` beantwortet. Auf den Anlegen-Seiten der Rechnung endet dasselbe Fenster damit, dass die Navigation des Exports die Seite aushängt und das Speichern beim Verwerfen gegen eine eingefrorene Rechnung läuft."
decision:
  en:
    - "Every autosaved main-entity form carries one flag, checked where the engine persists, so a page stops saving once its record is frozen."
  de:
    - "Jedes automatisch speichernde Formular einer Hauptentität trägt ein Kennzeichen, das dort geprüft wird, wo die Speichermechanik schreibt — so hört eine Seite auf zu speichern, sobald ihr Datensatz eingefroren ist."
consequences:
  en:
    - "In each case the user had just completed a successful action and was immediately shown a save failure for it — the app contradicting itself about something that had worked. The rule is general rather than a list of lock points: the flag sits in the autosave engine, every autosaved main-entity page inherits it, and it is scoped to the record the form edits rather than to the action that was taken — a project form whose card exports an offer keeps saving, because the project is not what froze. Cancelling an invoice is covered like every other lock point; it strands nothing today only because it is triggered from a read-only page with no form."
  de:
    - "In jedem Fall hatte der Nutzer gerade eine erfolgreiche Aktion abgeschlossen und bekam sofort einen Speicherfehler dafür zu sehen — die Anwendung widersprach sich selbst über etwas, das funktioniert hatte. Die Regel ist allgemein und keine Liste von Sperrpunkten: Das Kennzeichen sitzt in der Autosave-Mechanik, jede automatisch speichernde Seite einer Hauptentität erbt es, und es gilt dem Datensatz, den das Formular bearbeitet, und nicht der ausgelösten Aktion — ein Projektformular, dessen Karte ein Angebot exportiert, speichert weiter, denn eingefroren ist nicht das Projekt. Das Stornieren einer Rechnung ist wie jeder andere Sperrpunkt abgedeckt; es kann heute nur deshalb kein Speichern stranden lassen, weil es von einer schreibgeschützten Seite ohne Formular ausgelöst wird."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0034-an-autosaved-page-stops-saving-a-frozen-record.md
---
