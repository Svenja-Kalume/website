---
title:
  en: "A new project from a closed one"
  de: "Ein neues Projekt aus einem geschlossenen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to create a new project pre-filled with the name of a closed project"
  de: "ein neues Projekt anlegen, vorbelegt mit der Bezeichnung eines geschlossenen Projekts"
soThat:
  en: "I can continue work under a fresh project without reopening the closed one"
  de: "ich die Arbeit unter einem neuen Projekt fortsetzen kann, ohne das geschlossene wiederzueröffnen"
requirement: WZ-R-18
acceptanceCriteria:
  en:
    - "The reopen warning offers Neues Projekt erstellen beside its other choices, also while an exported Schlussrechnung withholds Projekt wiedereröffnen"
    - "It opens the new-project form for the same customer, which cannot be changed, with the closed project's name pre-filled and editable"
    - "A different project address of the closed project is taken over, switched on and editable; a project using the customer's address passes that on"
    - "The project number is assigned on saving, and the new project starts as Offen"
    - "The form saves like every create page: the project is created once the form is valid, which needs at least one position; leaving an invalid form creates nothing"
    - "The closed project stays Geschlossen and unchanged"
  de:
    - "Die Warnung zum Wiedereröffnen bietet neben ihren anderen Möglichkeiten Neues Projekt erstellen an, auch wenn eine exportierte Schlussrechnung Projekt wiedereröffnen zurückhält"
    - "Es öffnet das Formular für ein neues Projekt desselben Kunden, der nicht änderbar ist, mit der Bezeichnung des geschlossenen Projekts vorbelegt und änderbar"
    - "Eine abweichende Projektadresse des geschlossenen Projekts wird übernommen, eingeschaltet und änderbar; ein Projekt mit der Kundenadresse gibt diese weiter"
    - "Die Projektnummer wird beim Speichern vergeben, und das neue Projekt beginnt als Offen"
    - "Das Formular speichert wie jede Anlageseite: Das Projekt entsteht, sobald das Formular gültig ist, wofür mindestens eine Position nötig ist; ein ungültiges Formular zu verlassen legt nichts an"
    - "Das geschlossene Projekt bleibt geschlossen und unverändert"
codeUrl: Client/Projects/ReopenProjectDialog.razor
status: done
aiContribution:
  en: "The AI had put the closed project's address into the out-of-scope list; at approval I reversed it. Its readiness check found that \"no cancel without creating\" contradicted the accepted rule that a create page creates nothing until it is valid; the AI aligned the story with that rule without a new decision. Adding the third choice here, rather than in Story 15, is also what broke a dependency cycle between the two stories."
  de: "Die KI hatte die Adresse des geschlossenen Projekts auf die Liste der ausgeschlossenen Punkte gesetzt; bei der Freigabe habe ich das umgekehrt. Ihre Readiness-Prüfung fand, dass „kein Abbrechen ohne Anlegen“ der angenommenen Regel widersprach, nach der eine Anlageseite nichts anlegt, bevor sie gültig ist; die KI hat die Story ohne neue Entscheidung an diese Regel angeglichen. Die dritte Möglichkeit hier statt in Story 15 hinzuzufügen hat außerdem einen Abhängigkeitszyklus zwischen den beiden Stories aufgelöst."
introducedIn: WZ-0.4.0
source: docs/user-stories/016-new-project-from-closed-project.md
---
