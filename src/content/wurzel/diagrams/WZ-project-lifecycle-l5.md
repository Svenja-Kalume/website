---
title:
  en: "Project lifecycle — closed by hand, or by the final invoice"
  de: "Projekt-Lebenszyklus — von Hand geschlossen oder durch die Schlussrechnung"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Level 5 makes the Level-1 states real. The user still moves between them by hand, in any order, and reopening asks first. Two transitions are now automatic: exporting the Schlussrechnung closes the project, and cancelling it restores the status from before the export. While an exported Schlussrechnung stands, the project is locked and reopening by hand is not offered."
  de: "Level 5 macht die Zustände aus Level 1 wirklich. Der Nutzer wechselt weiter von Hand zwischen ihnen, in beliebiger Reihenfolge, und Wiedereröffnen fragt vorher. Zwei Übergänge sind jetzt automatisch: Der Export der Schlussrechnung schließt das Projekt, und ihre Stornierung stellt den Status vor dem Export wieder her. Solange eine exportierte Schlussrechnung besteht, ist das Projekt gesperrt, und Wiedereröffnen von Hand wird nicht angeboten."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0027-exporting-the-schlussrechnung-closes-the-project.md
changes: [WZ-project-lifecycle]
code:
  en: |
    stateDiagram-v2
      state "Active — the user switches by hand" as Active {
        [*] --> Open
        Open --> Started
        Started --> Open
      }
      state "Closed, locked by the Schlussrechnung" as ClosedByFinal
      [*] --> Active
      Active --> Closed: by hand, confirmed
      Closed --> Active: reopen, with a warning
      Active --> ClosedByFinal: Schlussrechnung exported
      ClosedByFinal --> Active: Schlussrechnung cancelled
      note right of ClosedByFinal: no reopening by hand until cancelled
  de: |
    stateDiagram-v2
      state "Aktiv — der Nutzer wechselt von Hand" as Aktiv {
        state "Offen" as Offen
        state "In Bearbeitung" as InBearbeitung
        [*] --> Offen
        Offen --> InBearbeitung
        InBearbeitung --> Offen
      }
      state "Geschlossen" as Geschlossen
      state "Geschlossen, gesperrt durch die Schlussrechnung" as GesperrtSR
      [*] --> Aktiv
      Aktiv --> Geschlossen: von Hand, bestätigt
      Geschlossen --> Aktiv: Wiedereröffnen, mit Warnung
      Aktiv --> GesperrtSR: Schlussrechnung exportiert
      GesperrtSR --> Aktiv: Schlussrechnung storniert
      note right of GesperrtSR: kein Wiedereröffnen von Hand bis zur Stornierung
---
