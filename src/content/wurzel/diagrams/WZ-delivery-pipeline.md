---
title:
  en: Grooming and delivery pipeline
  de: Grooming- und Delivery-Pipeline
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: A human Product Owner grooms and gates; AI technician subagents plan in parallel and implement test-first.
  de: Ein menschlicher Product Owner groomt und gated; KI-Technician-Subagenten planen parallel und setzen test-first um.
aiContribution:
  en: This diagram documents the way of working itself — the AI executes the delivery phases; the human owns intent, scope and every gate.
  de: Dieses Diagramm dokumentiert die Arbeitsweise selbst — die KI führt die Delivery-Phasen aus; der Mensch besitzt Absicht, Scope und jedes Gate.
introducedIn: WZ-0.1.0
---
flowchart TD
  subgraph Human["Human — Stakeholder & Product Owner"]
    A["Business need intake"] --> B["Write story + acceptance criteria"]
    B --> C["Update glossary + checklist"]
    C --> D{"Readiness gate: unambiguous & testable?"}
    D -->|"no"| B
  end
  D -->|"Ready → /deliver-story"| E
  subgraph AI["AI — technician subagents"]
    E["Plan in parallel (backend / frontend / tester)"] --> F["Approve plan (human gate)"]
    F --> G["Shared contracts + test-first"]
    G --> H["Implement client + server"]
    H --> I["Run all tests"]
  end
  I --> J{"Acceptance criteria met?"}
  J -->|"no"| G
  J -->|"yes"| K["Refactor + mark Done"]
