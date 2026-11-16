---
title:
  en: "Offer from the customer — attach, pick or start a project"
  de: "Angebot aus dem Kunden — anhängen, wählen oder Projekt beginnen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-2 shortcut always created a new project. Now the number of the customer's active projects decides: one is used silently, several are offered in a picker that also starts a new project, none creates one as before. Choosing “with a new project” always starts a new project, with an optional different project address. An invoice from the customer starts differently: instead of “with a new project” it offers “with project picker” — a list of every project, in which a new one can also be created. The two flows are kept side by side on purpose — which one the app uses is open until the owner has seen both and chosen."
  de: "Die Abkürzung aus Level 2 legte immer ein neues Projekt an. Jetzt entscheidet die Zahl der aktiven Projekte des Kunden: Eines wird still verwendet, mehrere werden in einer Auswahl angeboten, die auch ein neues Projekt beginnt, keines legt wie bisher eines an. Wer „mit neuem Projekt“ wählt, beginnt immer ein neues Projekt, mit optionaler abweichender Projektadresse. Eine Rechnung aus dem Kunden beginnt anders: Statt „mit neuem Projekt“ bietet sie „mit Projektauswahl“ — eine Liste aller Projekte, in der auch ein neues angelegt werden kann. Beide Abläufe bleiben bewusst nebeneinander bestehen — welcher in der App gilt, ist offen, bis der Inhaber beide gesehen und gewählt hat."
introducedIn: WZ-0.4.0
source: docs/user-stories/098-offer-from-customer-attaches-to-existing-project.md
changes: [WZ-offer-from-customer]
code:
  en: |
    flowchart TD
      A["Customer form"] --> B{"Angebot anlegen with a new project?"}
      B -->|"new project"| N["New project, optional own address"]
      B -->|"existing project"| C{"Active projects of the customer"}
      C -->|"none"| N
      C -->|"several"| P["Projekt wählen"]
      C -->|"exactly one"| E["Offer on that project"]
      P -->|"Neues Projekt erstellen"| N
      P -->|"a project"| E
      N --> O["Offer on the new project"]
      E --> F["No address asked; billed positions never taken"]
  de: |
    flowchart TD
      A["Kundenformular"] --> B{"Angebot anlegen mit neuem Projekt?"}
      B -->|"neues Projekt"| N["Neues Projekt, optional eigene Adresse"]
      B -->|"bestehendes Projekt"| C{"Aktive Projekte des Kunden"}
      C -->|"keines"| N
      C -->|"mehrere"| P["Projekt wählen"]
      C -->|"genau eines"| E["Angebot in diesem Projekt"]
      P -->|"Neues Projekt erstellen"| N
      P -->|"ein Projekt"| E
      N --> O["Angebot im neuen Projekt"]
      E --> F["Keine Adressabfrage; abgerechnete Positionen nie übernommen"]
---
