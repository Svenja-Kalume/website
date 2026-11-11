---
title:
  en: "Several offers per project, each with its own versions"
  de: "Mehrere Angebote je Projekt, jedes mit eigenen Versionen"
case: wurzel
type: mermaid
tool: Mermaid
caption:
  en: "A project quoted in parts holds one version chain per part. Neues Angebot starts a new chain and replaces nothing; Neue Version replaces only the offer it is started from. An open offer becomes Ersetzt when replaced, while an exported one keeps its state and its PDF. The project page shows one card per chain, every version a tab."
  de: "Ein in Teilen angebotenes Projekt hat eine Versionskette je Teil. Neues Angebot beginnt eine neue Kette und ersetzt nichts; Neue Version ersetzt nur das Angebot, aus dem sie gestartet wird. Ein offenes Angebot wird beim Ersetzen zu Ersetzt, ein exportiertes behält seinen Zustand und sein PDF. Die Projektseite zeigt eine Karte je Kette, jede Version ein Reiter."
aiContribution:
  en: "Drawn by the AI for this site from the decision on several open offers and the stories of the offer-history block; the example parts are the ones I gave when raising the change."
  de: "Von der KI für diese Website gezeichnet, aus der Entscheidung zu mehreren offenen Angeboten und den Stories des Blocks zur Angebotshistorie; die Beispielteile sind die, die ich beim Anstoßen der Änderung genannt habe."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0021-a-project-may-hold-several-open-offers.md
changes: [WZ-offer-lifecycle-l2]
code:
  en: |
    flowchart LR
      P["Project"] -->|"Neues Angebot"| T1["Terrassenbau v1 — exported"]
      P -->|"Neues Angebot"| G1["Garten anlegen v1 — replaced"]
      T1 -->|"Neue Version"| T2["Terrassenbau v2 — open"]
      G1 -->|"Neue Version"| G2["Garten anlegen v2 — open"]
      subgraph C1["Card: Terrassenbau"]
        T1
        T2
      end
      subgraph C2["Card: Garten anlegen"]
        G1
        G2
      end
  de: |
    flowchart LR
      P["Projekt"] -->|"Neues Angebot"| T1["Terrassenbau v1 — exportiert"]
      P -->|"Neues Angebot"| G1["Garten anlegen v1 — ersetzt"]
      T1 -->|"Neue Version"| T2["Terrassenbau v2 — offen"]
      G1 -->|"Neue Version"| G2["Garten anlegen v2 — offen"]
      subgraph C1["Karte: Terrassenbau"]
        T1
        T2
      end
      subgraph C2["Karte: Garten anlegen"]
        G1
        G2
      end
---
