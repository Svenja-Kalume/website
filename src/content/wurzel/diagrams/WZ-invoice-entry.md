---
title:
  en: "Starting an invoice from the customer"
  de: "Eine Rechnung aus dem Kunden beginnen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Abschlagsrechnung and Schlussrechnung on the customer view work alike. A project can take the invoice unless it is closed, locked by its Schlussrechnung, or — for a Schlussrechnung — has nothing left to bill. With none, the quick invoice opens: no project until its first valid save, which creates project, positions and invoice together, exactly once."
  de: "Abschlagsrechnung und Schlussrechnung in der Kundenansicht funktionieren gleich. Ein Projekt kann die Rechnung aufnehmen, außer es ist geschlossen, durch seine Schlussrechnung gesperrt oder hat — für eine Schlussrechnung — nichts mehr abzurechnen. Gibt es keines, öffnet sich die Schnellrechnung: kein Projekt bis zu ihrem ersten gültigen Speichern, das Projekt, Positionen und Rechnung gemeinsam anlegt, genau einmal."
aiContribution:
  en: "Drawn by the AI for this site from the invoice-entry story's criteria. The shape of the buttons is the design I described after that story's approved spec turned out to have misread the need."
  de: "Von der KI für diese Website gezeichnet, aus den Kriterien der Story zum Rechnungseinstieg. Die Form der Schaltflächen ist der Entwurf, den ich beschrieben habe, nachdem sich herausgestellt hatte, dass die freigegebene Spezifikation dieser Story den Bedarf falsch gelesen hatte."
introducedIn: WZ-0.4.0
source: docs/user-stories/112-create-invoice-from-customer-or-offer-view.md
code:
  en: |
    flowchart TD
      A["Customer view"] --> B{"Button or arrow?"}
      B -->|"arrow"| P["Picker: every project, greyed with reason, plus Neues Projekt erstellen"]
      B -->|"button"| C{"Projects that can take the invoice"}
      C -->|"exactly one"| E["Invoice editor for that project"]
      C -->|"several"| P
      C -->|"none"| Q["Quick invoice, no project yet"]
      P -->|"a project"| E
      P -->|"Neues Projekt erstellen"| Q
      Q --> V{"Betreff and a line described?"}
      V -->|"no — leave"| Z["Nothing created"]
      V -->|"yes — first save"| T["One transaction: project, positions, invoice"]
      T --> D["Ordinary draft of the new project"]
  de: |
    flowchart TD
      A["Kundenansicht"] --> B{"Schaltfläche oder Pfeil?"}
      B -->|"Pfeil"| P["Auswahl: jedes Projekt, ausgegraut mit Grund, dazu Neues Projekt erstellen"]
      B -->|"Schaltfläche"| C{"Projekte, die die Rechnung aufnehmen können"}
      C -->|"genau eines"| E["Rechnungseditor für dieses Projekt"]
      C -->|"mehrere"| P
      C -->|"keines"| Q["Schnellrechnung, noch kein Projekt"]
      P -->|"ein Projekt"| E
      P -->|"Neues Projekt erstellen"| Q
      Q --> V{"Betreff und eine Zeile beschrieben?"}
      V -->|"nein — verlassen"| Z["Nichts angelegt"]
      V -->|"ja — erstes Speichern"| T["Eine Transaktion: Projekt, Positionen, Rechnung"]
      T --> D["Gewöhnlicher Entwurf des neuen Projekts"]
---
