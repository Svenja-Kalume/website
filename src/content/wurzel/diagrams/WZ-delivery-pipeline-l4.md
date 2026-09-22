---
title:
  en: "Delivery after the Level-3 walks"
  de: "Die Lieferstrecke nach den Level-3-Durchgängen"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "The way of working Level 4 changed. The human walk moved from the end of the level to the end of every block, a criterion counts as covered only when a test enters where the user enters, and any story that freezes or locks something answers four seam questions in writing — carried to a person, because the agent is barred from answering them itself. After the last block a manual test walk of the whole level runs before sign-off, and its findings re-enter as work rather than as a footnote. The agent review is dual and adversarially refuted, and a finding against a criterion this block delivered is fixed inside the level rather than groomed into a later one."
  de: "Die Arbeitsweise, die Level 4 geändert hat. Der menschliche Durchgang wanderte vom Ende des Levels an das Ende jedes Blocks, ein Kriterium gilt nur als abgedeckt, wenn ein Test dort einsteigt, wo der Nutzer einsteigt, und jede Story, die etwas einfriert oder sperrt, beantwortet vier Nahtstellen-Fragen schriftlich — vorgelegt an einen Menschen, denn der Agent darf sie nicht selbst beantworten. Nach dem letzten Block läuft ein manueller Testdurchlauf des ganzen Levels, bevor abgenommen wird, und seine Befunde kehren als Arbeit zurück, nicht als Fußnote. Die Agenten-Review ist doppelt und adversarial widerlegt, und ein Befund gegen ein Kriterium dieses Blocks wird innerhalb des Levels behoben statt in ein späteres gegroomt."
aiContribution:
  en: "The first draft of this change was a rule for the reviewing agent to apply, and it was rejected: the block that missed the decisive question had already been grilled thoroughly, so a check that depends on being remembered is the same failure in different clothes. The AI proposed the pipeline; the structural placement of the human step is the owner’s correction to it."
  de: "Der erste Entwurf dieser Änderung war eine Regel für den prüfenden Agenten, und er wurde verworfen: Der Block, der die entscheidende Frage verpasst hat, war bereits gründlich gegrillt worden — eine Prüfung, die daran hängt, dass jemand an sie denkt, ist derselbe Fehler an anderer Stelle. Die KI schlug die Strecke vor; die strukturelle Platzierung des menschlichen Schritts ist die Korrektur des Verantwortlichen daran."
introducedIn: WZ-0.3.0-level-4
source: docs/learnings/001-agent-review-is-not-a-walk.md
changes: [WZ-delivery-pipeline]
code:
  en: |
    flowchart TD
      G[Groom the block] --> Q{Open questions?}
      Q -->|"yes"| H1[/To the owner/]
      H1 --> G
      Q -->|"no"| P[Specs approved]
      P --> I[Implement]
      I --> V[Tests enter as a user]
      V --> R[Agent review]
      R --> W([Human walk of this block])
      W -->|findings| I
      W -->|clean| N{More blocks?}
      N -->|"yes"| G
      N -->|"no"| C[Test walk]
      C -->|"findings"| G
      C -->|"clean"| S([Level signed off])
  de: |
    flowchart TD
      G[Block groomen] --> Q{Offene Fragen?}
      Q -->|"ja"| H1[/An den Verantwortlichen/]
      H1 --> G
      Q -->|"nein"| P[Spezifikationen]
      P --> I[Umsetzen]
      I --> V[Tests wie der Nutzer]
      V --> R[Agenten-Review]
      R --> W([Menschlicher Durchgang])
      W -->|Befunde| I
      W -->|sauber| N{Weitere Blöcke?}
      N -->|"ja"| G
      N -->|"nein"| C[Testdurchlauf]
      C -->|"Befunde"| G
      C -->|"sauber"| S([Level abgenommen])
---
