---
title:
  en: "Offer lifecycle (Level 1)"
  de: "Angebots-Lebenszyklus (Level 1)"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Two states at this freeze — a new version supersedes the Open offer. No Exported/locked state yet. There is at most one Open offer per project and it reads its positions live; a Superseded one reads from its snapshot."
  de: "Zwei Zustände in diesem Freeze — eine neue Version ersetzt das offene Angebot. Noch kein Exportiert/gesperrt-Zustand. Ein offenes Angebot gibt es höchstens einmal je Projekt, und es liest seine Positionen live; ein ersetztes liest aus seinem Snapshot."
aiContribution:
  en: "The AI suggested renaming the replaced state from Declined to Superseded so the code matches its meaning; the UI label stays \"Ersetzt\". Sent/Accepted/Declined and Exported are deferred."
  de: "Die KI schlug vor, den Ersetzt-Zustand von Declined in Superseded umzubenennen, damit der Code seiner Bedeutung entspricht; das UI-Label bleibt „Ersetzt“. Sent/Accepted/Declined und Exportiert sind verschoben."
introducedIn: WZ-0.1.0
code:
  en: |
    stateDiagram-v2
      [*] --> Open
      Open --> Superseded : new version
      Superseded --> [*]
  de: |
    stateDiagram-v2
      state "Offen" as Offen
      state "Ersetzt" as Ersetzt
      [*] --> Offen
      Offen --> Ersetzt : Neue Version
      Ersetzt --> [*]
---
