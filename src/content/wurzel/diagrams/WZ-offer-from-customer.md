---
title:
  en: "Offer from the customer screen — draft, preview, export"
  de: "Angebot aus der Kundenbearbeitung — Entwurf, Vorschau, Export"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-2 shortcut: start an offer on the customer form with no project yet, build its positions in the offer editor, preview the document, export it. Nothing is persisted until the draft is valid, and then project, positions and offer are created in one transaction — an abandoned draft leaves no orphans. The draft opens with the Subject pre-filled and no positions; a position carries Description, Unit, Quantity and UnitPrice. The settings gate is the shared settings form with continue or cancel, the preview shows the document as page images, and the export asks for confirmation unless that is suppressed and sets the state to Exported."
  de: "Die Abkürzung aus Level 2: Ein Angebot direkt am Kundenformular beginnen, noch ohne Projekt, die Positionen im Angebotseditor aufbauen, das Dokument in der Vorschau ansehen, exportieren. Bis der Entwurf gültig ist, wird nichts gespeichert; dann entstehen Projekt, Positionen und Angebot in einer Transaktion — ein abgebrochener Entwurf hinterlässt keine Waisen. Der Entwurf öffnet mit vorbelegtem Betreff und ohne Positionen; eine Position trägt Beschreibung, Einheit, Menge und Einzelpreis. Das Einstellungs-Gate ist das gemeinsame Einstellungsformular mit Weiter oder Abbrechen, die Vorschau zeigt das Dokument als Seitenbilder, und der Export fragt nach, sofern das nicht unterdrückt ist, und setzt den Zustand auf Exportiert."
aiContribution:
  en: "Assembled by the AI from four story documents that each own one leg of the path (59 offer from customer, 79 position in the offer editor, 77 preview and the company-settings gate, 60 export); the transaction boundary and the settings gate are quoted from their acceptance criteria, not inferred."
  de: "Von der KI aus vier Story-Dokumenten zusammengesetzt, die je einen Abschnitt des Wegs besitzen (59 Angebot aus dem Kunden, 79 Position im Angebotseditor, 77 Vorschau und Firmeneinstellungs-Gate, 60 Export); Transaktionsgrenze und Einstellungs-Gate stammen wörtlich aus deren Akzeptanzkriterien, sind nicht abgeleitet."
introducedIn: WZ-0.2.0
source: docs/user-stories/059-create-offer-from-customer.md
code:
  en: |
    flowchart TD
      A["Customer form"] --> B["Offer draft in the customer context"]
      B --> C["Create positions in the offer editor"]
      C --> D{"Subject and at least one position?"}
      D -->|"no — leave"| Z["Nothing created"]
      D -->|"yes — first valid save"| E["One transaction: project, positions, offer"]
      E --> F["Saved offer editor"]
      F --> G{"Company settings complete?"}
      G -->|"no"| H["Settings gate"]
      H --> G
      G -->|"yes"| I["Preview"]
      I --> J["Export"]
      F --> J
      J --> K["One transaction: snapshot, PDF, page images"]
      K --> L["Read-only; Download serves the bytes"]
  de: |
    flowchart TD
      A["Kundenformular"] --> B["Angebotsentwurf im Kundenkontext"]
      B --> C["Positionen im Angebotseditor anlegen"]
      C --> D{"Betreff und mindestens eine Position?"}
      D -->|"nein — verlassen"| Z["Nichts angelegt"]
      D -->|"ja — erstes gültiges Speichern"| E["Eine Transaktion: Projekt, Positionen, Angebot"]
      E --> F["Editor des gespeicherten Angebots"]
      F --> G{"Firmeneinstellungen vollständig?"}
      G -->|"nein"| H["Einstellungs-Gate"]
      H --> G
      G -->|"ja"| I["Vorschau"]
      I --> J["Export"]
      F --> J
      J --> K["Eine Transaktion: Snapshot, PDF, Seitenbilder"]
      K --> L["Nur lesbar; Herunterladen liefert die Bytes"]
---
