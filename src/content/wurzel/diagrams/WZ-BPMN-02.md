---
title:
  en: "Offer deferred-create and autosave"
  de: "Verzögertes Anlegen und Autosave beim Angebot"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Opening an offer persists nothing; it is created lazily on the first real change, then autosaved. A pure peek leaves no stray offer. The draft opens pre-filled with Subject and positions. The save fires on the first change, after 10 s idle, or on leaving a valid form, and it assigns OfferNumber, OfferDate and the state Open; editing arms on the first keystroke."
  de: "Das Öffnen eines Angebots speichert nichts; es wird verzögert bei der ersten echten Änderung erstellt und dann automatisch gespeichert. Ein bloßer Blick hinterlässt kein verwaistes Angebot. Der Entwurf öffnet vorbelegt mit Betreff und Positionen. Gespeichert wird bei der ersten Änderung, nach 10 s Leerlauf oder beim Verlassen eines gültigen Formulars, und dabei werden Angebotsnummer, Angebotsdatum und der Zustand Offen vergeben; das Bearbeiten wird ab dem ersten Tastendruck scharf."
aiContribution:
  en: "The AI proposed deferred-create plus the validity-gated save-or-prompt on leave; I accepted the trade-off that an unchanged default offer needs one touch to persist. This flow also fixed a silent no-save regression."
  de: "Die KI schlug das verzögerte Erstellen plus das gültigkeitsgeprüfte Speichern-oder-Nachfragen beim Verlassen vor; ich akzeptierte den Kompromiss, dass ein unverändertes Standard-Angebot eine Berührung zum Speichern braucht. Dieser Ablauf behob auch eine stille Nicht-Speichern-Regression."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A[Open offer draft] --> B{Real change?}
      B -->|peek, then leave| Z[Nothing persisted]
      B -->|first change| C[Save offer]
      C --> D[Edit]
      D --> E{Leave with invalid input?}
      E -->|no| F[Autosave: Saved]
      E -->|yes| G[Dialog: Leave / Stay]
      F --> D
  de: |
    flowchart TD
      A[Angebotsentwurf öffnen] --> B{Echte Änderung?}
      B -->|hineinsehen, verlassen| Z[Nichts gespeichert]
      B -->|erste Änderung| C[Angebot speichern]
      C --> D[Bearbeiten]
      D --> E{Verlassen mit ungültiger Eingabe?}
      E -->|nein| F[Autosave: Gespeichert]
      E -->|ja| G[Dialog: Verlassen / Bleiben]
      F --> D
---
