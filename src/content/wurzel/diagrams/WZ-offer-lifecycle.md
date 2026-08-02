---
title:
  en: Offer lifecycle (Level 1)
  de: Angebots-Lebenszyklus (Level 1)
case: wurzel
type: uml
tool: Mermaid
caption:
  en: Two states at this freeze — a new version supersedes the Open offer. No Exported/locked state yet.
  de: Zwei Zustände in diesem Freeze — eine neue Version ersetzt das offene Angebot. Noch kein Exportiert/gesperrt-Zustand.
aiContribution:
  en: The AI suggested renaming the replaced state from Declined to Superseded so the code matches its meaning; the UI label stays "Ersetzt". Sent/Accepted/Declined and Exported are deferred.
  de: Die KI schlug vor, den Ersetzt-Zustand von Declined in Superseded umzubenennen, damit der Code seiner Bedeutung entspricht; das UI-Label bleibt „Ersetzt". Sent/Accepted/Declined und Exportiert sind verschoben.
introducedIn: WZ-0.1.0
---
stateDiagram-v2
  [*] --> Open
  Open --> Superseded : Neue Version
  Superseded --> [*]
  note right of Open : at most one per project, reads live
  note right of Superseded : read from snapshot
