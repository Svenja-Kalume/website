---
title:
  en: "End-to-end Level-1 happy path"
  de: "Gutfall von A bis Z (Level 1)"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The Level-1 workflow — manage a customer, group work in a project, price positions, quote an offer, revise it."
  de: "Der Level-1-Ablauf — Kunde verwalten, Arbeit im Projekt bündeln, Positionen bepreisen, Angebot erstellen, überarbeiten."
aiContribution:
  en: "Reconstructed by the AI from the recorded test-session walkthrough; I corrected the order so a project is created before positions, and stopped it at the offer (invoices are deferred to a later level)."
  de: "Von der KI aus dem aufgezeichneten Test-Session-Walkthrough rekonstruiert; ich korrigierte die Reihenfolge (Projekt vor Positionen) und ließ ihn beim Angebot enden (Rechnungen sind auf ein späteres Level verschoben)."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A["Create / find customer"] --> B["Create project for customer"]
      B --> C["Add positions (Unit, Quantity, UnitPrice)"]
      C --> D["Create offer from positions (draft)"]
      D --> E{"Revise?"}
      E -->|"new version"| F["Previous offer set to Superseded (snapshot)"]
      F --> D
      E -->|"done"| G["Open offer stands"]
  de: |
    flowchart TD
      A["Kunde anlegen / finden"] --> B["Projekt für den Kunden anlegen"]
      B --> C["Positionen erfassen (Einheit, Menge, Einzelpreis)"]
      C --> D["Angebot aus den Positionen erzeugen (Entwurf)"]
      D --> E{"Überarbeiten?"}
      E -->|"Neue Version"| F["Bisheriges Angebot auf Ersetzt (Snapshot)"]
      F --> D
      E -->|"fertig"| G["Offenes Angebot bleibt bestehen"]
---
