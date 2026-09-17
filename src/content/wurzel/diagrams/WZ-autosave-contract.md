---
title:
  en: "The autosave contract"
  de: "Der Autosave-Vertrag"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Four triggers, a five-second idle delay restarted by every change, a validation gate, and one flag that stops a page saving once its record has been frozen. The delay is settable so a test can drive the real timer rather than calling the save method behind it."
  de: "Vier Auslöser, fünf Sekunden Leerlauf, von jeder Änderung neu gestartet, eine Validierungsschranke und ein Kennzeichen, das eine Seite nicht mehr speichern lässt, sobald ihr Datensatz eingefroren ist. Die Verzögerung ist einstellbar, damit ein Test den echten Timer fahren kann statt der Speichermethode dahinter."
aiContribution:
  en: "The contract had been written down once and had been wrong for two months — documented at ten seconds, shipping at five since July. It was found when a reviewer read the decision and the code side by side, and restated whole in a new decision rather than patched into the old one, so the drift stays visible."
  de: "Der Vertrag war einmal aufgeschrieben und zwei Monate lang falsch — mit zehn Sekunden dokumentiert, seit Juli mit fünf ausgeliefert. Gefunden wurde es, als jemand Entscheidung und Code nebeneinander las; korrigiert wurde er als vollständig neu formulierte Entscheidung statt als Flickwerk an der alten, damit die Abweichung sichtbar bleibt."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0033-autosave-idle-delay-is-five-seconds.md
code:
  en: |
    flowchart TD
      T1[Idle timer, 5 s, restarted by every change] --> G
      T2[Field events: text arms on keystroke, numeric commits on blur] --> G
      T3[Navigating away] --> G
      T4[Page disposed] --> G
      G{Form valid?}
      G -->|no| H[Held back, status stops reading Gespeichert]
      G -->|yes| L{Record already frozen?}
      L -->|yes| N[No save — the page has stopped saving]
      L -->|no| S[Save]
      S -->|failed| R[Retry button — never an automatic retry]
      S -->|ok, change arrived during the save| T1
  de: |
    flowchart TD
      T1[Leerlauf-Timer, 5 s, von jeder Änderung neu gestartet] --> G
      T2[Feldereignisse: Text ab Tastendruck, Zahlen beim Verlassen] --> G
      T3[Wegnavigieren] --> G
      T4[Seite wird verworfen] --> G
      G{Formular gültig?}
      G -->|nein| H[Zurückgehalten, Status sagt nicht mehr Gespeichert]
      G -->|ja| L{Datensatz bereits eingefroren?}
      L -->|ja| N[Kein Speichern — die Seite speichert nicht mehr]
      L -->|nein| S[Speichern]
      S -->|fehlgeschlagen| R[Schaltfläche Erneut versuchen — nie automatisch]
      S -->|ok, Änderung kam während des Speicherns| T1
---
