---
title:
  en: "A settings change is saved when you leave the page"
  de: "Eine Änderung in den Einstellungen wird beim Verlassen gespeichert"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a value I just typed in Einstellungen to be persisted when I navigate away"
  de: "dass ein gerade eingetippter Wert in den Einstellungen beim Wegnavigieren gespeichert wird"
soThat:
  en: "a setting is never silently lost because I left before the timer fired"
  de: "eine Einstellung nie stillschweigend verloren geht, weil ich vor Ablauf des Timers gegangen bin"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "A change typed into Standard-MwSt. or Zahlungsziel (Tage) is persisted when the user navigates away before the autosave timer fires"
    - "The behaviour is verified against a real navigation-away, not by calling the save method: the test drives the navigation-interception path and asserts the request happens before routing proceeds"
    - "The same guarantee holds for every field on the page the autosave engine covers, not only the two that were walked"
  de:
    - "Eine in Standard-MwSt. oder Zahlungsziel (Tage) eingetippte Änderung wird gespeichert, wenn die Nutzerin vor Ablauf des Autosave-Timers wegnavigiert"
    - "Das Verhalten wird gegen ein echtes Wegnavigieren geprüft, nicht durch Aufruf der Speichermethode: Der Test fährt den Pfad der Navigationsunterbrechung und prüft, dass die Anfrage vor dem Weiterleiten erfolgt"
    - "Dieselbe Zusage gilt für jedes Feld der Seite, das die Autosave-Maschinerie abdeckt, nicht nur für die beiden begangenen"
codeUrl: Client/Components/Autosave/AutosavePageBase.cs
adr: [WZ-ADR-012]
priority: must
status: done
aiContribution:
  en: "The interesting half is the second criterion. The obvious fix is small; the obvious test is to call the save method and assert it saved, which proves nothing about the situation the user was in. The project’s own rule says a criterion must be proven through the trigger the user actually reaches, and the AI held to it here: the test drives the real navigation-interception path. That same rule is what later exposed the autosave delay as a value no test could reach, which became a decision of its own."
  de: "Interessant ist die zweite Hälfte. Die naheliegende Korrektur ist klein; der naheliegende Test ruft die Speichermethode auf und prüft, dass gespeichert wurde — was über die Situation der Nutzerin nichts beweist. Die eigene Regel des Projekts verlangt, ein Kriterium über den Auslöser zu beweisen, den die Nutzerin tatsächlich erreicht, und die KI hat sich hier daran gehalten: Der Test fährt den echten Pfad der Navigationsunterbrechung. Genau diese Regel legte später offen, dass die Autosave-Verzögerung ein Wert war, den kein Test erreichen konnte — daraus wurde eine eigene Entscheidung."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/115-settings-autosave-flush-on-leave.md
---
