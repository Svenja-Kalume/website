---
title:
  en: "Starting an invoice from the customer"
  de: "Eine Rechnung aus dem Kunden beginnen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Abschlagsrechnung and Schlussrechnung on the customer view work alike. A project can take the invoice unless it is closed, locked by its Schlussrechnung, or — for a Schlussrechnung — has nothing left to bill. With none, the quick invoice opens: no project until its first valid save, which creates project, positions and invoice together, exactly once. An offer from the customer starts differently: instead of “with project picker” it offers “with a new project” — no list, straight into a new project. The two flows are kept side by side on purpose — which one the app uses is open until the owner has seen both and chosen."
  de: "Abschlagsrechnung und Schlussrechnung in der Kundenansicht funktionieren gleich. Ein Projekt kann die Rechnung aufnehmen, außer es ist geschlossen, durch seine Schlussrechnung gesperrt oder hat — für eine Schlussrechnung — nichts mehr abzurechnen. Gibt es keines, öffnet sich die Schnellrechnung: kein Projekt bis zu ihrem ersten gültigen Speichern, das Projekt, Positionen und Rechnung gemeinsam anlegt, genau einmal. Ein Angebot aus dem Kunden beginnt anders: Statt „mit Projektauswahl“ bietet es „mit neuem Projekt“ — ohne Liste, direkt in ein neues Projekt. Beide Abläufe bleiben bewusst nebeneinander bestehen — welcher in der App gilt, ist offen, bis der Inhaber beide gesehen und gewählt hat."
introducedIn: WZ-0.4.0
source: docs/user-stories/112-create-invoice-from-customer-or-offer-view.md
code:
  en: |
    flowchart TD
      A["Customer view"] --> B{"Create invoice with project picker?"}
      B -->|"pick a project"| P["Picker: every project, greyed with reason, plus Neues Projekt erstellen"]
      B -->|"matching project"| C{"Projects that can take the invoice"}
      C -->|"exactly one"| E["Invoice editor for that project"]
      C -->|"several"| P
      P -->|"a project"| E
      P -->|"Neues Projekt erstellen"| Q
      C -->|"none"| Q["Quick invoice, no project yet"]
      Q --> V{"Betreff and a line described?"}
      V -->|"no — leave"| Z["Nothing created"]
      V -->|"yes — first save"| T["One transaction: project, positions, invoice"]
      T --> D["Ordinary draft of the new project"]
  de: |
    flowchart TD
      A["Kundenansicht"] --> B{"Rechnung anlegen mit Projektauswahl?"}
      B -->|"Projekt wählen"| P["Auswahl: jedes Projekt, ausgegraut mit Grund, dazu Neues Projekt erstellen"]
      B -->|"passendes Projekt"| C{"Projekte, die die Rechnung aufnehmen können"}
      C -->|"genau eines"| E["Rechnungseditor für dieses Projekt"]
      C -->|"mehrere"| P
      P -->|"ein Projekt"| E
      P -->|"Neues Projekt erstellen"| Q
      C -->|"keines"| Q["Schnellrechnung, noch kein Projekt"]
      Q --> V{"Betreff und eine Zeile beschrieben?"}
      V -->|"nein — verlassen"| Z["Nichts angelegt"]
      V -->|"ja — erstes Speichern"| T["Eine Transaktion: Projekt, Positionen, Rechnung"]
      T --> D["Gewöhnlicher Entwurf des neuen Projekts"]
---
