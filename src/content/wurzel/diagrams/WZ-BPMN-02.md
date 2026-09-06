---
title:
  en: "Offer deferred-create and autosave"
  de: "Verzögertes Anlegen und Autosave beim Angebot"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Opening an offer persists nothing; it is created lazily on the first real change, then autosaved. A pure peek leaves no stray offer."
  de: "Das Öffnen eines Angebots speichert nichts; es wird verzögert bei der ersten echten Änderung erstellt und dann automatisch gespeichert. Ein bloßer Blick hinterlässt kein verwaistes Angebot."
aiContribution:
  en: "The AI proposed deferred-create plus the validity-gated save-or-prompt on leave; I accepted the trade-off that an unchanged default offer needs one touch to persist. This flow also fixed a silent no-save regression."
  de: "Die KI schlug das verzögerte Erstellen plus das gültigkeitsgeprüfte Speichern-oder-Nachfragen beim Verlassen vor; ich akzeptierte den Kompromiss, dass ein unverändertes Standard-Angebot eine Berührung zum Speichern braucht. Dieser Ablauf behob auch eine stille Nicht-Speichern-Regression."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A["Open offer draft (pre-filled: Subject, positions)"] --> B{"Real change?"}
      B -->|"pure peek, then leave"| Z["Nothing persisted"]
      B -->|"first change / 10s idle / valid-and-leave"| C["POST create (OfferNumber, OfferDate, Open)"]
      C --> D["Edit — arms on typing"]
      D --> E{"Leave with pending invalid input?"}
      E -->|"no (valid)"| F["Autosave: Saving… / Saved"]
      E -->|"yes"| G["Dialog: Leave / Stay"]
      F --> D
  de: |
    flowchart TD
      A["Angebotsentwurf öffnen (vorbelegt: Betreff, Positionen)"] --> B{"Echte Änderung?"}
      B -->|"nur hineinsehen, dann verlassen"| Z["Nichts gespeichert"]
      B -->|"erste Änderung / 10 s Leerlauf / gültig und verlassen"| C["POST anlegen (Angebotsnummer, Angebotsdatum, Offen)"]
      C --> D["Bearbeiten — scharf ab dem Tippen"]
      D --> E{"Verlassen mit offener ungültiger Eingabe?"}
      E -->|"nein (gültig)"| F["Autosave: Wird gespeichert… / Gespeichert"]
      E -->|"ja"| G["Dialog: Verlassen / Bleiben"]
      F --> D
---
