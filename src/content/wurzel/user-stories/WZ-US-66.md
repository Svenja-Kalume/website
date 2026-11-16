---
title:
  en: "Every Vorschau and Exportieren says why it was held back"
  de: "Jede Vorschau und jedes Exportieren sagt, warum es zurückgehalten wurde"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "every Vorschau and Exportieren that my unsaved changes hold back to tell me why, in the same words wherever I clicked"
  de: "dass mir jede Vorschau und jedes Exportieren, das meine ungespeicherten Änderungen zurückhalten, sagt, warum — überall mit denselben Worten"
soThat:
  en: "I never wonder why nothing happened"
  de: "ich mich nie frage, warum nichts passiert ist"
requirement: WZ-R-17
acceptanceCriteria:
  en:
    - "Exportieren in the invoice editor, clicked while a change cannot be saved yet, does not export and shows the reason beside the button"
    - "Export inside the invoice preview opened from the invoice editor, clicked while a change cannot be saved yet, does not export and shows the reason on the invoice editor"
    - "The reason is the same message every other surface shows for the same cause: errors in the form, a failed save, or a save still running"
    - "The offer editor, the latest-offer card, the project's invoice list and the invoice editor's own Vorschau keep telling the user as before, with the same messages"
    - "When the click's own save succeeds, the preview opens or the export runs without a second click; when it fails, the action stops and the reason is shown"
  de:
    - "Exportieren im Rechnungseditor, geklickt, während eine Änderung noch nicht gespeichert werden kann, exportiert nicht und zeigt den Grund neben der Schaltfläche"
    - "Export in der aus dem Rechnungseditor geöffneten Rechnungsvorschau, geklickt, während eine Änderung noch nicht gespeichert werden kann, exportiert nicht und zeigt den Grund im Rechnungseditor"
    - "Der Grund ist dieselbe Meldung, die jede andere Oberfläche für dieselbe Ursache zeigt: Fehler im Formular, ein fehlgeschlagenes Speichern oder ein noch laufendes Speichern"
    - "Angebotseditor, Karte des neuesten Angebots, Rechnungsliste des Projekts und die eigene Vorschau des Rechnungseditors informieren weiterhin wie bisher, mit denselben Meldungen"
    - "Gelingt das Speichern, das der Klick auslöst, öffnet sich die Vorschau oder läuft der Export ohne zweiten Klick; scheitert es, stoppt die Aktion und der Grund wird angezeigt"
codeUrl: Client/Components/Autosave/SaveFirstGate.cs
status: done
aiContribution:
  en: "Found by the AI's architecture review at the start of the level, which also found the save-first rule built separately on every surface. I decided that every surface tells the user the same way and that the rule is built once. The block review later overturned one criterion: the export inside the invoice preview had been tested only for a failed save, not for an invalid form or a save still running — a test gap, not a defect, closed with tests."
  de: "Gefunden von der Architektur-Review der KI zu Beginn des Levels, die auch zeigte, dass die Speichern-zuerst-Regel auf jeder Oberfläche einzeln gebaut war. Ich habe entschieden, dass jede Oberfläche den Nutzer gleich informiert und die Regel einmal gebaut wird. Die Block-Review kippte später ein Kriterium: Der Export in der Rechnungsvorschau war nur für ein fehlgeschlagenes Speichern getestet, nicht für ein ungültiges Formular oder ein noch laufendes Speichern — eine Testlücke, kein Fehler, mit Tests geschlossen."
introducedIn: WZ-0.4.0
source: docs/user-stories/151-every-vorschau-and-exportieren-says-why-it-was-blocked.md
---
