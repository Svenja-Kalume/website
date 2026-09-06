---
title:
  en: "Grooming and delivery pipeline"
  de: "Grooming- und Delivery-Pipeline"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "A human Product Owner grooms and gates; AI technician subagents plan in parallel, implement test-first, and a reviewer subagent reads the finished change back against the acceptance criteria."
  de: "Ein menschlicher Product Owner groomt und gated; KI-Technician-Subagenten planen parallel und setzen test-first um, und ein Reviewer-Subagent prüft die fertige Änderung gegen die Akzeptanzkriterien."
aiContribution:
  en: "This diagram documents the way of working itself — the AI executes the delivery phases; the human owns intent, scope and every gate."
  de: "Dieses Diagramm dokumentiert die Arbeitsweise selbst — die KI führt die Delivery-Phasen aus; der Mensch besitzt Absicht, Scope und jedes Gate."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      subgraph Human["Human — stakeholder & Product Owner"]
        A["Business need intake"] --> B["Write story + acceptance criteria"]
        B --> C["Update glossary + checklist"]
        C --> D{"Readiness gate: unambiguous & testable?"}
        D -->|"no"| B
      end
      D -->|"Ready, hand to delivery"| E
      subgraph AI["AI — technician subagents"]
        E["Plan in parallel (backend / frontend / tester)"] --> F["Approve plan (human gate)"]
        F --> G["Shared contracts + test-first"]
        G --> H["Implement client + server"]
        H --> I["Run all tests"]
        I --> R["Reviewer subagent reads the change back"]
      end
      R --> J{"Acceptance criteria met?"}
      J -->|"no"| G
      J -->|"yes"| K["Refactor + mark Done"]
  de: |
    flowchart TD
      subgraph Human["Mensch — Stakeholder & Product Owner"]
        A["Fachliche Bedarfsaufnahme"] --> B["Story + Akzeptanzkriterien schreiben"]
        B --> C["Glossar + Checkliste aktualisieren"]
        C --> D{"Readiness-Gate: eindeutig & testbar?"}
        D -->|"nein"| B
      end
      D -->|"Ready, Übergabe an die Delivery"| E
      subgraph AI["KI — Technician-Subagenten"]
        E["Parallel planen (Backend / Frontend / Tester)"] --> F["Plan freigeben (menschliches Gate)"]
        F --> G["Gemeinsame Verträge + Test-First"]
        G --> H["Client + Server umsetzen"]
        H --> I["Alle Tests ausführen"]
        I --> R["Reviewer-Subagent liest die Änderung gegen"]
      end
      R --> J{"Akzeptanzkriterien erfüllt?"}
      J -->|"nein"| G
      J -->|"ja"| K["Refactoring + auf Done setzen"]
---
