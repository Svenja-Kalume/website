---
title:
  en: Project lifecycle
  de: Projekt-Lebenszyklus
case: wurzel
type: uml
tool: Mermaid
caption:
  en: The documented project states. At Level 1 a project is created as Open; user-driven status change is Level 2.
  de: Die dokumentierten Projektzustände. Auf Level 1 wird ein Projekt als Offen angelegt; die nutzergesteuerte Statusänderung ist Level 2.
aiContribution:
  en: The AI derived the states from the lifecycle doc; I kept transitions free (no enforced order) and noted that awaiting a customer's answer is not a project state.
  de: Die KI leitete die Zustände aus dem Lifecycle-Dokument ab; ich hielt die Übergänge frei (keine erzwungene Reihenfolge) und hielt fest, dass „auf Kundenantwort warten" kein Projektzustand ist.
introducedIn: WZ-0.1.0
---
stateDiagram-v2
  [*] --> Open
  Open --> Started
  Started --> Closed
  Open --> Closed
  Closed --> [*]
  note right of Closed : read-only
