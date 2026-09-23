---
title:
  en: "Autosave has four triggers and a five-second idle delay, settable for tests"
  de: "Autosave hat vier Auslöser und fünf Sekunden Leerlauf — für Tests einstellbar"
case: wurzel
status: accepted
date: 2026-09-07
relatedRequirements: [WZ-R-15]
context:
  en:
    - "An earlier decision wrote down the autosave contract and fixed the idle timer at 10 s. The app had not behaved that way since 11 July 2026, when a commit set the delay to 5 s. Every level delivered since — including both Level-3 test sessions and the Level-4 walks — was exercised at 5 s. The written contract and the shipped behaviour disagreed for roughly two months, and the disagreement surfaced only when a reviewer read the decision and the code side by side."
    - "A second pressure arrived from the same review. The project’s own rule requires a criterion to be proven through the trigger the user actually reaches — for autosave, the timer. But the delay was a private constant with no override and no injection point, so honouring that rule would have added 80+ seconds of real waiting to every test run. Tests therefore called the save method directly, which is exactly the substitution the rule forbids."
  de:
    - "Eine frühere Entscheidung schrieb den Autosave-Vertrag fest und setzte den Leerlauf-Zeitgeber auf 10 s. Die Anwendung verhielt sich seit dem 11.07.2026 nicht mehr so, als ein Commit die Verzögerung auf 5 s setzte. Jedes seither gelieferte Level — beide Level-3-Testsitzungen und die Level-4-Durchgänge eingeschlossen — wurde bei 5 s geprüft. Der geschriebene Vertrag und das ausgelieferte Verhalten widersprachen sich rund zwei Monate lang, und der Widerspruch trat erst zutage, als ein Prüfer die Entscheidung und den Code nebeneinander las."
    - "Ein zweiter Druck kam aus derselben Review. Die eigene Regel des Projekts verlangt, ein Kriterium über den Auslöser zu beweisen, den der Nutzer tatsächlich erreicht — bei Autosave also über den Zeitgeber. Die Verzögerung war aber eine private Konstante ohne Überschreibung und ohne Einstiegspunkt, sodass die Regel jedem Testlauf über 80 Sekunden echtes Warten hinzugefügt hätte. Die Tests riefen deshalb die Speichermethode direkt auf — genau die Ersetzung, die die Regel verbietet."
decision:
  en:
    - "Restate the contract in whole rather than amend it, per the immutability rule: no Save button, four triggers — a 5 s idle timer restarted by every change, field events (text fields arm on keystroke, numeric and time fields commit on blur), navigation, and disposal — with a validation gate. The delay becomes settable, so a test can drive the real timer instead of bypassing it."
  de:
    - "Den Vertrag als Ganzes neu festhalten, statt ihn zu ändern, wie es die Unveränderlichkeitsregel verlangt: keine Speichern-Schaltfläche, vier Auslöser — ein Leerlauf-Zeitgeber von 5 s, den jede Änderung neu startet, Feldereignisse (Textfelder werden ab dem Tastendruck scharf, Zahlen- und Zeitfelder schreiben beim Verlassen des Feldes), Navigation und das Verwerfen der Seite — mit einer Validierungsschranke. Die Verzögerung wird einstellbar, damit ein Test den echten Zeitgeber antreiben kann, statt ihn zu umgehen."
consequences:
  en:
    - "Both halves were the same defect in different clothing: a decision with no seam — not writable by a test, and not visible in the document that claimed to record it. The correction is recorded here rather than by editing the earlier decision, so the two-month drift stays visible instead of being tidied away."
  de:
    - "Beide Hälften waren derselbe Mangel in anderem Gewand: eine Entscheidung ohne Naht — für einen Test nicht ansteuerbar und in dem Dokument nicht sichtbar, das sie festzuhalten behauptete. Die Korrektur wird hier festgehalten und nicht durch Ändern der früheren Entscheidung, damit die zwei Monate Abweichung sichtbar bleiben, statt weggeräumt zu werden."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0033-autosave-idle-delay-is-five-seconds.md
---
