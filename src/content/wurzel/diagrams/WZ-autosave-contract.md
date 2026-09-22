---
title:
  en: "The autosave contract"
  de: "Der Autosave-Vertrag"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Four triggers, a five-second idle delay restarted by every change, a validation gate, and one flag that stops a page saving once its record has been frozen. The delay is settable so a test can drive the real timer rather than calling the save method behind it. Field events are the second trigger — text arms on the first keystroke, a number commits when the field is left. A held-back form stops reading Gespeichert, and a failed save waits for the retry button rather than repeating itself."
  de: "Vier Auslöser, fünf Sekunden Leerlauf, von jeder Änderung neu gestartet, eine Validierungsschranke und ein Kennzeichen, das eine Seite nicht mehr speichern lässt, sobald ihr Datensatz eingefroren ist. Die Verzögerung ist einstellbar, damit ein Test den echten Timer fahren kann statt der Speichermethode dahinter. Die Feldereignisse sind der zweite Auslöser — Text wird ab dem ersten Tastendruck scharf, eine Zahl beim Verlassen des Feldes. Ein zurückgehaltenes Formular sagt nicht mehr „Gespeichert“, und ein fehlgeschlagenes Speichern wartet auf die Schaltfläche „Erneut versuchen“, statt sich zu wiederholen."
aiContribution:
  en: "The contract had been written down once and had been wrong for two months — documented at ten seconds, shipping at five since July. It was found when a reviewer read the decision and the code side by side, and restated whole in a new decision rather than patched into the old one, so the drift stays visible."
  de: "Der Vertrag war einmal aufgeschrieben und zwei Monate lang falsch — mit zehn Sekunden dokumentiert, seit Juli mit fünf ausgeliefert. Gefunden wurde es, als jemand Entscheidung und Code nebeneinander las; korrigiert wurde er als vollständig neu formulierte Entscheidung statt als Flickwerk an der alten, damit die Abweichung sichtbar bleibt."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0033-autosave-idle-delay-is-five-seconds.md
code:
  en: |
    flowchart TD
      T1[Idle 5 s] --> G
      T2[Field events] --> G
      T3[Navigating away] --> G
      T4[Page disposed] --> G
      G{Form valid?}
      G -->|no| H[Held back]
      G -->|yes| L{Record frozen?}
      L -->|yes| N[No save]
      L -->|no| S[Save]
      S -->|failed| R[Retry button]
      S -->|change during the save| T1
  de: |
    flowchart TD
      T1[Leerlauf 5 s] --> G
      T2[Feldereignisse] --> G
      T3[Wegnavigieren] --> G
      T4[Seite verworfen] --> G
      G{Formular gültig?}
      G -->|nein| H[Zurückgehalten]
      G -->|ja| L{Datensatz eingefroren?}
      L -->|ja| N[Kein Speichern]
      L -->|nein| S[Speichern]
      S -->|fehlgeschlagen| R[Erneut versuchen]
      S -->|Änderung während des Speicherns| T1
---
