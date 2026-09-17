---
title:
  en: "An edit made during a save is saved without another keystroke"
  de: "Eine Änderung während des Speicherns wird ohne weiteren Tastendruck gespeichert"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a change I type while a save is running to be saved on its own"
  de: "dass eine Änderung, die ich während eines laufenden Speicherns tippe, von selbst gespeichert wird"
soThat:
  en: "the form is not left holding it until I happen to touch something else"
  de: "das Formular sie nicht festhält, bis ich zufällig etwas anderes anfasse"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "A change typed while a save is in flight is saved on its own, without another keystroke, once that save finishes and the idle delay has passed — including when the save outlives the delay and swallows the idle tick"
    - "It is saved once, not repeatedly: a form with nothing pending arms no timer and sends no request"
    - "A **failed** save still does not retry by itself — the existing retry button stays the way a failed save is retried"
    - "A page whose record has been frozen does not resume saving"
    - "Regression coverage drives a real edit during a real in-flight save and asserts the second save arrives with no further user action"
  de:
    - "Eine während eines laufenden Speicherns getippte Änderung wird von selbst gespeichert, ohne weiteren Tastendruck, sobald dieses Speichern endet und die Leerlaufzeit verstrichen ist — auch wenn das Speichern länger dauert als die Leerlaufzeit und den Takt verschluckt"
    - "Sie wird einmal gespeichert, nicht wiederholt: Ein Formular ohne Ausstehendes startet keinen Timer und sendet keine Anfrage"
    - "Ein **fehlgeschlagenes** Speichern wiederholt sich weiterhin nicht von selbst — die vorhandene Schaltfläche bleibt der Weg, ein fehlgeschlagenes Speichern zu wiederholen"
    - "Eine Seite, deren Datensatz eingefroren wurde, nimmt das Speichern nicht wieder auf"
    - "Ein Regressionstest fährt eine echte Änderung während eines echten laufenden Speicherns und prüft, dass das zweite Speichern ohne weiteres Zutun eintrifft"
codeUrl: Client/Components/Autosave/AutosaveController.cs
adr: [WZ-ADR-012, WZ-ADR-013]
priority: must
status: done
aiContribution:
  en: "Three earlier decisions meet in this one story and pull in different directions: resume the pending change on its own, but never resume a **failed** save, and never resume at all once the record is frozen. The AI’s contribution was to notice that the naive fix — re-arm the timer after every save — satisfies the first and breaks the other two, and to write all three as criteria in the same story so the next implementation cannot quietly pick one."
  de: "Drei frühere Entscheidungen treffen in dieser einen Story aufeinander und ziehen in verschiedene Richtungen: die ausstehende Änderung von selbst nachholen, ein **fehlgeschlagenes** Speichern aber nie von selbst wiederholen und nach dem Einfrieren des Datensatzes gar nicht mehr speichern. Der Beitrag der KI war zu bemerken, dass die naive Korrektur — den Timer nach jedem Speichern neu starten — die erste erfüllt und die beiden anderen bricht, und alle drei als Kriterien in dieselbe Story zu schreiben, damit die nächste Umsetzung sich nicht still eine davon aussucht."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/138-edit-during-a-save-is-saved-without-another-keystroke.md
---
