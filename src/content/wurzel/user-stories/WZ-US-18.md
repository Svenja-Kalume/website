---
title:
  en: Save every edit form automatically
  de: Jedes Bearbeiten-Formular automatisch speichern
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: my work to save automatically
  de: dass meine Arbeit automatisch gespeichert wird
soThat:
  en: I do not lose data if I forget to save or leave a page
  de: ich keine Daten verliere, wenn ich das Speichern vergesse oder eine Seite verlasse
requirement: WZ-R-05
acceptanceCriteria:
  en:
    - Every edit form saves after 10s of inactivity (the timer resets on change) and only when there are no validation errors
    - On leaving, pending valid changes save immediately; pending invalid input shows a „Verlassen" / „Bleiben" dialog
    - A subtle indicator shows „Wird gespeichert…" / „Gespeichert"; there is no manual Speichern or Zurücksetzen button on edit forms
  de:
    - Jedes Bearbeiten-Formular speichert nach 10s Inaktivität (der Timer wird bei Änderung zurückgesetzt) und nur, wenn keine Validierungsfehler vorliegen
    - Beim Verlassen werden ausstehende gültige Änderungen sofort gespeichert; ausstehende ungültige Eingaben zeigen einen Dialog „Verlassen" / „Bleiben"
    - Eine dezente Anzeige zeigt „Wird gespeichert…" / „Gespeichert"; es gibt keinen manuellen Speichern- oder Zurücksetzen-Knopf in Bearbeiten-Formularen
status: done
aiContribution:
  en: The AI designed the autosave engine (arm on typing, 10s idle save, validity-gated save-or-prompt on leave) and removed the Save and Reset buttons; I required that autosave never navigates on its own.
  de: Die KI entwarf die Autosave-Engine (Scharfschalten beim Tippen, Speichern nach 10s Inaktivität, gültigkeitsgeprüftes Speichern-oder-Nachfragen beim Verlassen) und entfernte die Speichern- und Zurücksetzen-Knöpfe; ich verlangte, dass Autosave nie von selbst navigiert.
introducedIn: WZ-0.1.0
---
