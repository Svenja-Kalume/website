---
title:
  en: "Grooming and delivery pipeline"
  de: "Grooming- und Delivery-Pipeline"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "A human Product Owner grooms and gates; AI technician subagents plan in parallel, implement test-first, and a reviewer subagent reads the finished change back against the acceptance criteria. The subagents are backend, frontend and tester, planning in parallel. Approving the plan is a human gate; the readiness gate above it is the other one."
  de: "Ein menschlicher Product Owner groomt und gated; KI-Technician-Subagenten planen parallel und setzen test-first um, und ein Reviewer-Subagent prüft die fertige Änderung gegen die Akzeptanzkriterien. Die Subagenten sind Backend, Frontend und Tester und planen parallel. Die Planfreigabe ist ein menschliches Gate, das Readiness-Gate darüber das andere."
aiContribution:
  en: "This diagram documents the way of working itself — the AI executes the delivery phases; the human owns intent, scope and every gate."
  de: "Dieses Diagramm dokumentiert die Arbeitsweise selbst — die KI führt die Delivery-Phasen aus; der Mensch besitzt Absicht, Scope und jedes Gate."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      subgraph Human["Human — Product Owner"]
        A["Business need"] --> B["Story + criteria"]
        B --> C["Glossary + checklist"]
        C --> D{"Unambiguous and testable?"}
        D -->|"no"| B
      end
      D -->|"Ready"| E
      subgraph AI["AI — technician subagents"]
        E["Plan in parallel"] --> F["Approve the plan"]
        F --> G["Contracts + test-first"]
        G --> H["Implement client and server"]
        H --> I["Run all tests"]
        I --> R["Reviewer reads the change back"]
      end
      R --> J{"Criteria met?"}
      J -->|"no"| G
      J -->|"yes"| K["Refactor, mark Done"]
  de: |
    flowchart TD
      subgraph Human["Mensch — Product Owner"]
        A["Fachlicher Bedarf"] --> B["Story + Kriterien"]
        B --> C["Glossar + Checkliste"]
        C --> D{"Eindeutig und testbar?"}
        D -->|"nein"| B
      end
      D -->|"Ready"| E
      subgraph AI["KI — Technician-Subagenten"]
        E["Parallel planen"] --> F["Plan freigeben"]
        F --> G["Verträge + Test-First"]
        G --> H["Client und Server umsetzen"]
        H --> I["Alle Tests ausführen"]
        I --> R["Reviewer liest die Änderung gegen"]
      end
      R --> J{"Kriterien erfüllt?"}
      J -->|"nein"| G
      J -->|"ja"| K["Refactoring, auf Done setzen"]
---
