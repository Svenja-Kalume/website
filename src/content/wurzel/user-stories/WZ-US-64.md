---
title:
  en: "A new invoice offers every field and becomes the editor"
  de: "Eine neue Rechnung bietet jedes Feld und wird zum Editor"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "every field of an invoice available while I create it, and the page to carry on as the invoice editor after the first save"
  de: "jedes Feld einer Rechnung schon beim Anlegen zur Verfügung haben und dass die Seite nach dem ersten Speichern als Rechnungseditor weiterläuft"
soThat:
  en: "I never have to reopen an invoice just to reach a field the export requires"
  de: "ich eine Rechnung nie wieder öffnen muss, nur um an ein Feld zu kommen, das der Export verlangt"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "A new advance or final invoice offers every field the editor offers — service period from and to included — from the moment the form opens, before anything is saved"
    - "After the first save the page carries on as the invoice editor without a reload and without reopening the invoice: the number appears, and everything typed is still on screen and still editable"
    - "Vorschau, Exportieren and Löschen appear once the invoice has been saved, and not before"
    - "Leaving and reopening the invoice from a list shows the same fields with the same values"
    - "Both create pages behave identically"
  de:
    - "Eine neue Abschlags- oder Schlussrechnung bietet jedes Feld, das der Editor bietet — Leistungszeitraum von und bis eingeschlossen — ab dem Öffnen des Formulars, noch vor dem ersten Speichern"
    - "Nach dem ersten Speichern läuft die Seite als Rechnungseditor weiter, ohne Neuladen und ohne die Rechnung erneut zu öffnen: Die Nummer erscheint, und alles Getippte steht weiterhin am Bildschirm und bleibt änderbar"
    - "Vorschau, Exportieren und Löschen erscheinen, sobald die Rechnung gespeichert ist, und nicht davor"
    - "Verlässt man die Seite und öffnet die Rechnung aus einer Liste erneut, zeigt sie dieselben Felder mit denselben Werten"
    - "Beide Anlegeseiten verhalten sich gleich"
codeUrl: Client/Components/Autosave/AutosaveCreatePageBase.cs
priority: must
status: done
aiContribution:
  en: "A defect that only exists because two stories were each correct on their own. The create form carried the fields the create story specified; the service period arrived later, in the story that made it legally required and required before export — and that story specified the editor. The result was a bill that could be created and then could not be exported until it was closed and reopened. Nothing was wrong with either story; the gap was between them, and only walking the flow end to end found it."
  de: "Ein Fehler, der nur existiert, weil zwei Stories jede für sich richtig waren. Das Anlegeformular trug die Felder, die die Anlege-Story vorsah; der Leistungszeitraum kam später, in der Story, die ihn gesetzlich verpflichtend und vor dem Export erforderlich machte — und diese Story beschrieb den Editor. Das Ergebnis war eine Rechnung, die sich anlegen und danach nicht exportieren ließ, bis man sie schloss und neu öffnete. An keiner der beiden Stories war etwas falsch; die Lücke lag dazwischen, und nur das Durchgehen des ganzen Ablaufs fand sie."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/144-leistungszeitraum-reachable-on-a-newly-saved-invoice.md
changes: [WZ-US-40]
---
