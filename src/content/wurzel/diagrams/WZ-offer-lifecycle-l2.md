---
title:
  en: "Offer lifecycle (Level 2)"
  de: "Angebots-Lebenszyklus (Level 2)"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Level 2 adds the export lock. Exporting freezes an offer in one transaction — snapshot, PDF and page images — and sets it to Exported, which is read-only forever. A new version off an Exported offer leaves the predecessor Exported; only an Open predecessor is set to Superseded. Open is the only editable state and exists at most once per project; Exported and Superseded are both read-only."
  de: "Level 2 ergänzt die Export-Sperre. Der Export friert ein Angebot in einer Transaktion ein — Snapshot, PDF und Seitenbilder — und setzt es auf Exportiert, was dauerhaft nur lesbar ist. Eine neue Version aus einem exportierten Angebot lässt den Vorgänger auf Exportiert; nur ein offener Vorgänger wird auf Ersetzt gesetzt. Offen ist der einzige bearbeitbare Zustand und existiert höchstens einmal je Projekt; Exportiert und Ersetzt sind beide nur lesbar."
aiContribution:
  en: "The AI derived the state set and the transition rules from the Level-2 story documents (68 lock-after-export, 60 PDF generation) rather than from the code, and kept the Level-1 diagram untouched beside it — the change pointer sits here, on the newer artifact."
  de: "Die KI leitete Zustandsmenge und Übergangsregeln aus den Level-2-Story-Dokumenten ab (68 Sperre nach Export, 60 PDF-Erzeugung), nicht aus dem Code, und ließ das Level-1-Diagramm daneben unberührt — der Änderungszeiger sitzt hier, am neueren Artefakt."
introducedIn: WZ-0.2.0
source: docs/user-stories/068-lock-offer-after-export.md
changes: [WZ-offer-lifecycle]
code:
  en: |
    stateDiagram-v2
      [*] --> Open
      Open --> Exported : export (store + lock)
      Open --> Superseded : new version off an Open offer
      Exported --> [*]
      Superseded --> [*]
  de: |
    stateDiagram-v2
      state "Offen" as Offen
      state "Exportiert" as Exportiert
      state "Ersetzt" as Ersetzt
      [*] --> Offen
      Offen --> Exportiert : Export (speichern + sperren)
      Offen --> Ersetzt : Neue Version aus einem offenen Angebot
      Exportiert --> [*]
      Ersetzt --> [*]
---
