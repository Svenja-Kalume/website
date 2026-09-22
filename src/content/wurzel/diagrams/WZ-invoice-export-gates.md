---
title:
  en: "Issuing an invoice: three gates, then one transaction"
  de: "Eine Rechnung stellen: drei Schranken, dann eine Transaktion"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Three gates run before anything is rendered. The first is the company settings — sender data and tax rate are checked together, and a missing one opens the shared settings form: filling it in resumes the export, and only cancelling leaves the invoice a draft. The other two are hard blocks with their own German message. Once they pass, the invoice is dated and locked first and the document is rendered from the locked invoice, all in one transaction — so the app can never hold a bill marked Exportiert with no document, nor a document in the customer’s hands while the app still calls it Entwurf."
  de: "Vor dem Rendern laufen drei Schranken. Die erste sind die Firmeneinstellungen — Absenderdaten und Steuersatz werden gemeinsam geprüft, und fehlt etwas, öffnet das gemeinsame Einstellungsformular: Wird es ausgefüllt, läuft der Export weiter, und nur Abbrechen lässt die Rechnung als Entwurf zurück. Die beiden anderen sind harte Sperren mit eigener deutscher Meldung. Sind sie passiert, wird die Rechnung zuerst datiert und gesperrt und das Dokument aus der gesperrten Rechnung gerendert, alles in einer Transaktion — die Anwendung kann also nie eine als Exportiert markierte Rechnung ohne Dokument halten und nie ein Dokument beim Kunden, das sie selbst noch Entwurf nennt."
aiContribution:
  en: "The AI proposed the gate order — sender data, tax rate, line items, service period — and argued for the asymmetry the diagram shows at the tax-rate gate: it blocks the export but not the preview, so a bill in progress can still be checked without a rate."
  de: "Die KI schlug die Reihenfolge der Schranken vor — Absenderdaten, Steuersatz, Positionen, Leistungszeitraum — und begründete die Asymmetrie, die das Bild an der Steuersatz-Schranke zeigt: Sie blockiert den Export, nicht aber die Vorschau, damit eine Rechnung in Arbeit auch ohne Satz prüfbar bleibt."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/082-invoice-pdf-generation.md
code:
  en: |
    flowchart TD
      A([Export pressed]) --> S[Save pending changes first]
      S -->|save failed| X1[/Stays a draft, reason shown/]
      S -->|saved| G1{Company settings complete — sender data and tax rate, or Kleinunternehmer?}
      G1 -->|no| M1[Shared settings form opens]
      M1 -->|filled in and saved| G2
      M1 -->|cancelled| X1
      G1 -->|yes| G2{At least one line?}
      G2 -->|no| X1
      G2 -->|yes| G3{Service period start set?}
      G3 -->|no| X1
      G3 -->|yes| T[One transaction]
      T --> T1[Stamp the invoice date and set state Exported]
      T1 --> T2[Render the document from the locked invoice]
      T2 --> T3[Store PDF and page images] --> T4[Touch updated timestamp]
      T4 --> E([Issued, frozen, stored])
      T -.->|any step fails, nothing committed| X1
  de: |
    flowchart TD
      A([Exportieren gedrückt]) --> S[Ausstehende Änderungen zuerst speichern]
      S -->|Speichern fehlgeschlagen| X1[/Bleibt Entwurf, Grund wird gezeigt/]
      S -->|gespeichert| G1{Firmeneinstellungen vollständig — Absenderdaten und Steuersatz, oder Kleinunternehmer?}
      G1 -->|nein| M1[Gemeinsames Einstellungsformular öffnet]
      M1 -->|ausgefüllt und gespeichert| G2
      M1 -->|abgebrochen| X1
      G1 -->|ja| G2{Mindestens eine Position?}
      G2 -->|nein| X1
      G2 -->|ja| G3{Leistungszeitraum von gesetzt?}
      G3 -->|nein| X1
      G3 -->|ja| T[Eine Transaktion]
      T --> T1[Rechnungsdatum stempeln und Status Exportiert setzen]
      T1 --> T2[Dokument aus der gesperrten Rechnung rendern]
      T2 --> T3[PDF und Seitenbilder speichern] --> T4[Änderungszeitstempel aktualisieren]
      T4 --> E([Gestellt, eingefroren, gespeichert])
      T -.->|scheitert ein Schritt, wird nichts festgeschrieben| X1
---
