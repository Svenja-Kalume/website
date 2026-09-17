---
title:
  en: "Preview and export save first"
  de: "Vorschau und Export speichern zuerst"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "The rule that replaced five separate fixes. Forms autosave and have no Save button, while preview and export act on the stored record — so both actions flush first and run only if that save succeeded. It holds on every surface the buttons appear on, and on a create page as well as an editor."
  de: "Die Regel, die fünf einzelne Korrekturen ersetzt hat. Formulare speichern automatisch und haben keine Speichern-Schaltfläche, während Vorschau und Export auf den gespeicherten Datensatz wirken — also speichern beide zuerst und laufen nur bei Erfolg. Das gilt auf jeder Oberfläche mit diesen Schaltflächen, auf Anlegeseiten wie im Editor."
aiContribution:
  en: "Reviewing the codebase at the readiness gate, the AI listed every surface with this gap — the offer editor’s export, the latest-offer card, the per-row preview and export in the project’s invoice list, both invoice create pages — and argued they were one rule rather than five stories. Each would otherwise have been found by a separate walk and argued on its own terms."
  de: "Bei der Durchsicht des Codes am Readiness-Gate listete die KI jede Oberfläche mit dieser Lücke auf — den Export im Angebotseditor, die Karte des neuesten Angebots, Vorschau und Export je Zeile in der Rechnungsliste des Projekts, beide Anlegeseiten für Rechnungen — und argumentierte, das sei eine Regel und nicht fünf Stories. Jede wäre sonst von einem eigenen Durchgang gefunden und für sich diskutiert worden."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0032-preview-and-export-save-first.md
code:
  en: |
    sequenceDiagram
      actor U as User
      participant F as Autosaving form (no Save button)
      participant A as Action (Vorschau / Exportieren)
      participant S as Server
      U->>F: types a change
      U->>A: presses the button
      A->>F: flush pending changes
      F->>S: save
      alt save failed or still pending
        S-->>A: error
        A-->>U: action does not start, reason shown
      else saved
        S-->>A: ok
        A->>S: render preview / run export
        S-->>U: the document that includes the change
      end
  de: |
    sequenceDiagram
      actor U as Nutzerin
      participant F as Autospeicherndes Formular (ohne Speichern-Schaltfläche)
      participant A as Aktion (Vorschau / Exportieren)
      participant S as Server
      U->>F: tippt eine Änderung
      U->>A: drückt die Schaltfläche
      A->>F: ausstehende Änderungen speichern
      F->>S: speichern
      alt Speichern fehlgeschlagen oder noch offen
        S-->>A: Fehler
        A-->>U: Aktion startet nicht, Grund wird gezeigt
      else gespeichert
        S-->>A: ok
        A->>S: Vorschau rendern / Export ausführen
        S-->>U: das Dokument mit der Änderung
      end
---
