---
title:
  en: End-to-end Level-1 happy path
  de: Gutfall von A bis Z (Level 1)
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: The Level-1 workflow — manage a customer, group work in a project, price positions, quote an offer, revise it.
  de: Der Level-1-Ablauf — Kunde verwalten, Arbeit im Projekt bündeln, Positionen bepreisen, Angebot erstellen, überarbeiten.
aiContribution:
  en: Reconstructed by the AI from the recorded test-session walkthrough; I corrected the order so a project is created before positions, and stopped it at the offer (invoices are Level 2).
  de: Von der KI aus dem aufgezeichneten Test-Session-Walkthrough rekonstruiert; ich korrigierte die Reihenfolge (Projekt vor Positionen) und ließ ihn beim Angebot enden (Rechnungen sind Level 2).
introducedIn: WZ-0.1.0
---
flowchart TD
  A["Create / find customer"] --> B["Create project for customer"]
  B --> C["Add positions (Einheit, Menge, Einzelpreis)"]
  C --> D["Create offer from positions (draft)"]
  D --> E{"Revise?"}
  E -->|"Neue Version"| F["Previous offer set Ersetzt (snapshot)"]
  F --> D
  E -->|"done"| G["Open offer stands (invoices = Level 2)"]
