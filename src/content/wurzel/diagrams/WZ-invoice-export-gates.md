---
title:
  en: "Issuing an invoice: four gates, then one transaction"
  de: "Eine Rechnung stellen: vier Schranken, dann eine Transaktion"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Four gates run before anything is rendered, each leaving the invoice a draft with its own German message. Once they pass, five steps commit together or not at all — so the app can never hold a bill marked Exportiert with no document, nor a document in the customer’s hands while the app still calls it Entwurf."
  de: "Vor dem Rendern laufen vier Schranken, von denen jede die Rechnung als Entwurf zurücklässt, mit eigener deutscher Meldung. Sind sie passiert, werden fünf Schritte gemeinsam festgeschrieben oder gar nicht — die Anwendung kann also nie eine als Exportiert markierte Rechnung ohne Dokument halten und nie ein Dokument beim Kunden, das sie selbst noch Entwurf nennt."
aiContribution:
  en: "The AI proposed the gate order — sender data, tax rate, line items, service period — and argued for the asymmetry the diagram shows at the tax-rate gate: it blocks the export but not the preview, so a bill in progress can still be checked without a rate."
  de: "Die KI schlug die Reihenfolge der Schranken vor — Absenderdaten, Steuersatz, Positionen, Leistungszeitraum — und begründete die Asymmetrie, die das Bild an der Steuersatz-Schranke zeigt: Sie blockiert den Export, nicht aber die Vorschau, damit eine Rechnung in Arbeit auch ohne Satz prüfbar bleibt."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/082-invoice-pdf-generation.md
code:
  en: |
    flowchart TD
      A([Export pressed]) --> S[Save pending changes first]
      S -->|save failed| X1[/Stays a draft, error shown/]
      S -->|saved| G1{Sender data complete?}
      G1 -->|no| M1[Settings form opens] --> X1
      G1 -->|yes| G2{Tax rate set, or Kleinunternehmer?}
      G2 -->|no| X1
      G2 -->|yes| G3{At least one line?}
      G3 -->|no| X1
      G3 -->|yes| G4{Service period start set?}
      G4 -->|no| X1
      G4 -->|yes| T[One transaction]
      T --> T1[Render document] --> T2[Store PDF and page images]
      T2 --> T3[Stamp invoice date] --> T4[Set state Exported] --> T5[Touch updated timestamp]
      T5 --> E([Issued, frozen, stored])
      T -.->|any step fails, nothing committed| X1
  de: |
    flowchart TD
      A([Exportieren gedrückt]) --> S[Ausstehende Änderungen zuerst speichern]
      S -->|Speichern fehlgeschlagen| X1[/Bleibt Entwurf, Fehler wird gezeigt/]
      S -->|gespeichert| G1{Absenderdaten vollständig?}
      G1 -->|nein| M1[Einstellungsformular öffnet] --> X1
      G1 -->|ja| G2{Steuersatz gesetzt oder Kleinunternehmer?}
      G2 -->|nein| X1
      G2 -->|ja| G3{Mindestens eine Position?}
      G3 -->|nein| X1
      G3 -->|ja| G4{Leistungszeitraum von gesetzt?}
      G4 -->|nein| X1
      G4 -->|ja| T[Eine Transaktion]
      T --> T1[Dokument rendern] --> T2[PDF und Seitenbilder speichern]
      T2 --> T3[Rechnungsdatum stempeln] --> T4[Status Exportiert setzen] --> T5[Änderungszeitstempel aktualisieren]
      T5 --> E([Gestellt, eingefroren, gespeichert])
      T -.->|scheitert ein Schritt, wird nichts festgeschrieben| X1
---
