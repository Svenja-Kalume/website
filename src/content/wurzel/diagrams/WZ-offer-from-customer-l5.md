---
title:
  en: "Offer from the customer — attach, pick or start a project"
  de: "Angebot aus dem Kunden — anhängen, wählen oder Projekt beginnen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-2 shortcut always created a new project. Now the number of the customer's active projects decides: one is used silently, several are offered in a picker that also starts a new project, none creates one as before. The arrow beside the button always starts a new project, with an optional different project address."
  de: "Die Abkürzung aus Level 2 legte immer ein neues Projekt an. Jetzt entscheidet die Zahl der aktiven Projekte des Kunden: Eines wird still verwendet, mehrere werden in einer Auswahl angeboten, die auch ein neues Projekt beginnt, keines legt wie bisher eines an. Der Pfeil neben der Schaltfläche beginnt immer ein neues Projekt, mit optionaler abweichender Projektadresse."
aiContribution:
  en: "Drawn by the AI for this site from the story's criteria. The silent attach and the arrow are my change to the AI's first proposal of always showing a picker."
  de: "Von der KI für diese Website gezeichnet, aus den Kriterien der Story. Das stille Anhängen und der Pfeil sind meine Änderung am ersten Vorschlag der KI, immer eine Auswahl zu zeigen."
introducedIn: WZ-0.4.0
source: docs/user-stories/098-offer-from-customer-attaches-to-existing-project.md
changes: [WZ-offer-from-customer]
code:
  en: |
    flowchart TD
      A["Customer form"] --> B{"Angebot anlegen, or its arrow?"}
      B -->|"arrow: Angebot für neues Projekt anlegen"| N["New project, optional own address"]
      B -->|"button"| C{"Active projects of the customer"}
      C -->|"exactly one"| E["Offer on that project"]
      C -->|"several"| P["Projekt wählen"]
      P -->|"a project"| E
      P -->|"Neues Projekt erstellen"| N
      C -->|"none"| N
      N --> O["Offer on the new project"]
      E --> F["No address asked; billed positions never taken"]
  de: |
    flowchart TD
      A["Kundenformular"] --> B{"Angebot anlegen oder sein Pfeil?"}
      B -->|"Pfeil: Angebot für neues Projekt anlegen"| N["Neues Projekt, optional eigene Adresse"]
      B -->|"Schaltfläche"| C{"Aktive Projekte des Kunden"}
      C -->|"genau eines"| E["Angebot in diesem Projekt"]
      C -->|"mehrere"| P["Projekt wählen"]
      P -->|"ein Projekt"| E
      P -->|"Neues Projekt erstellen"| N
      C -->|"keines"| N
      N --> O["Angebot im neuen Projekt"]
      E --> F["Keine Adressabfrage; abgerechnete Positionen nie übernommen"]
---
