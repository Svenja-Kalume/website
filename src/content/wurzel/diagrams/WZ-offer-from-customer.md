---
title:
  en: "Offer from the customer screen — draft, preview, export"
  de: "Angebot aus der Kundenbearbeitung — Entwurf, Vorschau, Export"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-2 shortcut: start an offer on the customer form with no project yet, build its positions in the offer editor, preview the document, export it. Nothing is persisted until the draft is valid, and then project, positions and offer are created in one transaction — an abandoned draft leaves no orphans."
  de: "Die Abkürzung aus Level 2: Ein Angebot direkt am Kundenformular beginnen, noch ohne Projekt, die Positionen im Angebotseditor aufbauen, das Dokument in der Vorschau ansehen, exportieren. Bis der Entwurf gültig ist, wird nichts gespeichert; dann entstehen Projekt, Positionen und Angebot in einer Transaktion — ein abgebrochener Entwurf hinterlässt keine Waisen."
aiContribution:
  en: "Assembled by the AI from four story documents that each own one leg of the path (59 offer from customer, 79 position in the offer editor, 77 preview and the company-settings gate, 60 export); the transaction boundary and the settings gate are quoted from their acceptance criteria, not inferred."
  de: "Von der KI aus vier Story-Dokumenten zusammengesetzt, die je einen Abschnitt des Wegs besitzen (59 Angebot aus dem Kunden, 79 Position im Angebotseditor, 77 Vorschau und Firmeneinstellungs-Gate, 60 Export); Transaktionsgrenze und Einstellungs-Gate stammen wörtlich aus deren Akzeptanzkriterien, sind nicht abgeleitet."
introducedIn: WZ-0.2.0
source: docs/user-stories/059-create-offer-from-customer.md
code:
  en: |
    flowchart TD
      A["Customer create / edit form"] -->|"Create offer"| B["Offer draft in customer context — Subject pre-filled, no positions"]
      B --> C["Create positions in the offer editor (Description, Unit, Quantity, UnitPrice)"]
      C --> D{"Subject set and at least one position?"}
      D -->|"no — leave the draft"| Z["Nothing created: no project, no position, no offer"]
      D -->|"yes — first valid save"| E["One transaction: Project + ProjectPositions + Offer with OfferItems"]
      E --> F["Saved offer editor"]
      F --> G{"Company settings complete?"}
      G -->|"no"| H["Settings gate: the shared settings form, continue or cancel"]
      H --> G
      G -->|"yes"| I["Preview: the document as page images"]
      I --> J["Export (confirmation dialog unless suppressed)"]
      F --> J
      J --> K["One transaction: snapshot + PDF + page images stored, state set to Exported"]
      K --> L["Offer read-only; Download serves the stored PDF"]
  de: |
    flowchart TD
      A["Kunde anlegen / bearbeiten"] -->|"Angebot anlegen"| B["Angebotsentwurf im Kundenkontext — Betreff vorbelegt, keine Positionen"]
      B --> C["Positionen im Angebotseditor anlegen (Beschreibung, Einheit, Menge, Einzelpreis)"]
      C --> D{"Betreff gesetzt und mindestens eine Position?"}
      D -->|"nein — Entwurf verlassen"| Z["Nichts angelegt: kein Projekt, keine Position, kein Angebot"]
      D -->|"ja — erstes gültiges Speichern"| E["Eine Transaktion: Projekt + Projektpositionen + Angebot mit Angebotspositionen"]
      E --> F["Editor des gespeicherten Angebots"]
      F --> G{"Firmeneinstellungen vollständig?"}
      G -->|"nein"| H["Einstellungs-Gate: das gemeinsame Einstellungsformular, Weiter oder Abbrechen"]
      H --> G
      G -->|"ja"| I["Vorschau: das Dokument als Seitenbilder"]
      I --> J["Export (Bestätigungsdialog, sofern nicht unterdrückt)"]
      F --> J
      J --> K["Eine Transaktion: Snapshot + PDF + Seitenbilder gespeichert, Zustand auf Exportiert"]
      K --> L["Angebot nur lesbar; Herunterladen liefert das gespeicherte PDF"]
---
