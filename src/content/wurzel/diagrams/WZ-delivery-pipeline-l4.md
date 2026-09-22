---
title:
  en: "Delivery after the Level-3 walks"
  de: "Die Lieferstrecke nach den Level-3-Durchgängen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The way of working Level 4 changed. The human walk moved from the end of the level to the end of every block, a criterion counts as covered only when a test enters where the user enters, and any story that freezes or locks something answers four seam questions in writing — carried to a person, because the agent is barred from answering them itself. The agent review is dual and adversarially refuted, and a finding against a criterion this block delivered is fixed inside the level rather than groomed into a later one."
  de: "Die Arbeitsweise, die Level 4 geändert hat. Der menschliche Durchgang wanderte vom Ende des Levels an das Ende jedes Blocks, ein Kriterium gilt nur als abgedeckt, wenn ein Test dort einsteigt, wo die Nutzerin einsteigt, und jede Story, die etwas einfriert oder sperrt, beantwortet vier Nahtstellen-Fragen schriftlich — vorgelegt an einen Menschen, denn der Agent darf sie nicht selbst beantworten. Die Agenten-Review ist doppelt und adversarial widerlegt, und ein Befund gegen ein Kriterium dieses Blocks wird innerhalb des Levels behoben statt in ein späteres gegroomt."
aiContribution:
  en: "The first draft of this change was a rule for the reviewing agent to apply, and it was rejected: the block that missed the decisive question had already been grilled thoroughly, so a check that depends on being remembered is the same failure in different clothes. The AI proposed the pipeline; the structural placement of the human step is the owner’s correction to it."
  de: "Der erste Entwurf dieser Änderung war eine Regel für den prüfenden Agenten, und er wurde verworfen: Der Block, der die entscheidende Frage verpasst hat, war bereits gründlich gegrillt worden — eine Prüfung, die daran hängt, dass jemand an sie denkt, ist derselbe Fehler in anderer Kleidung. Die KI schlug die Strecke vor; die strukturelle Platzierung des menschlichen Schritts ist die Korrektur des Inhabers daran."
introducedIn: WZ-0.3.0-level-4
source: docs/learnings/001-agent-review-is-not-a-walk.md
changes: [WZ-delivery-pipeline]
code:
  en: |
    flowchart TD
      G[Groom the block] --> Q{Seam questions answered?}
      Q -->|open question| H1[/Carried to the owner/]
      H1 --> G
      Q -->|answered| P[Write and approve the specs]
      P --> I[Implement the block]
      I --> V[Tests enter where the user enters]
      V --> R[Agent review: quality, acceptance]
      R --> W([Human walk of this block])
      W -->|findings| I
      W -->|clean| N{More blocks?}
      N -->|yes| G
      N -->|no| S([Level signed off])
  de: |
    flowchart TD
      G[Block groomen] --> Q{Nahtstellen-Fragen beantwortet?}
      Q -->|offene Frage| H1[/Dem Inhaber vorgelegt/]
      H1 --> G
      Q -->|beantwortet| P[Spezifikationen schreiben und freigeben]
      P --> I[Block umsetzen]
      I --> V[Tests steigen ein, wo die Nutzerin einsteigt]
      V --> R[Agenten-Review: Qualität, Akzeptanz]
      R --> W([Menschlicher Durchgang])
      W -->|Befunde| I
      W -->|sauber| N{Weitere Blöcke?}
      N -->|ja| G
      N -->|nein| S([Level abgenommen])
---
