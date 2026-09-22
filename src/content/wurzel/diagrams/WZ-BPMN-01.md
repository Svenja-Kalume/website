---
title:
  en: "End-to-end Level-1 happy path"
  de: "Gutfall von A bis Z (Level 1)"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-1 workflow — manage a customer, group work in a project, price positions, quote an offer, revise it. A position carries Unit, Quantity and UnitPrice, and a superseded offer keeps the figures it had as a snapshot."
  de: "Der Level-1-Ablauf — Kunde verwalten, Arbeit im Projekt bündeln, Positionen bepreisen, Angebot erstellen, überarbeiten. Eine Position trägt Einheit, Menge und Einzelpreis, und ein ersetztes Angebot behält seine damaligen Zahlen als Snapshot."
aiContribution:
  en: "Reconstructed by the AI from the recorded test-session walkthrough; I corrected the order so a project is created before positions, and stopped it at the offer (invoices are deferred to a later level)."
  de: "Von der KI aus dem aufgezeichneten Test-Session-Walkthrough rekonstruiert; ich korrigierte die Reihenfolge (Projekt vor Positionen) und ließ ihn beim Angebot enden (Rechnungen sind auf ein späteres Level verschoben)."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A[Create / find customer] --> B[Create project]
      B --> C[Add positions]
      C --> D[Create offer draft]
      D --> E{Revise?}
      E -->|new version| F[Previous offer Superseded]
      F --> D
      E -->|done| G[Open offer stands]
  de: |
    flowchart TD
      A[Kunde anlegen / finden] --> B[Projekt anlegen]
      B --> C[Positionen erfassen]
      C --> D[Angebotsentwurf erzeugen]
      D --> E{Überarbeiten?}
      E -->|Neue Version| F[Bisheriges Angebot auf Ersetzt]
      F --> D
      E -->|fertig| G[Offenes Angebot bleibt]
---
