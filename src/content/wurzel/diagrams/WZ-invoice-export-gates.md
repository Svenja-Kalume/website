---
title:
  en: "Issuing an invoice: three gates, then one transaction"
  de: "Eine Rechnung stellen: drei Schranken, dann eine Transaktion"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "Three gates run before anything is rendered. The first is the company settings — sender data and tax rate are checked together, and a missing one opens the shared settings form: filling it in resumes the export, and only cancelling leaves the invoice a draft. The other two are hard blocks with their own German message. Once they pass, the invoice is dated and locked first and the document is rendered from the locked invoice, all in one transaction — so the app can never hold a bill marked Exportiert with no document, nor a document in the customer’s hands while the app still calls it Entwurf. Missing lines and a missing service-period start are two separate hard blocks, each with its own plain-German message; the diagram draws them as one gate. If any step of the transaction fails, nothing is committed and the invoice stays a draft."
  de: "Vor dem Rendern laufen drei Schranken. Die erste sind die Firmeneinstellungen — Absenderdaten und Steuersatz werden gemeinsam geprüft, und fehlt etwas, öffnet das gemeinsame Einstellungsformular: Wird es ausgefüllt, läuft der Export weiter, und nur Abbrechen lässt die Rechnung als Entwurf zurück. Die beiden anderen sind harte Sperren mit eigener deutscher Meldung. Sind sie passiert, wird die Rechnung zuerst datiert und gesperrt und das Dokument aus der gesperrten Rechnung gerendert, alles in einer Transaktion — die Anwendung kann also nie eine als Exportiert markierte Rechnung ohne Dokument halten und nie ein Dokument beim Kunden, das sie selbst noch Entwurf nennt. Fehlende Positionen und ein fehlender Beginn des Leistungszeitraums sind zwei getrennte harte Sperren mit je eigener deutscher Meldung; das Bild zeichnet sie als eine Schranke. Scheitert ein Schritt der Transaktion, wird nichts festgeschrieben, und die Rechnung bleibt Entwurf."
aiContribution:
  en: "The AI proposed the gate order — sender data, tax rate, line items, service period — and argued for the asymmetry the diagram shows at the tax-rate gate: it blocks the export but not the preview, so a bill in progress can still be checked without a rate."
  de: "Die KI schlug die Reihenfolge der Schranken vor — Absenderdaten, Steuersatz, Positionen, Leistungszeitraum — und begründete die Asymmetrie, die das Bild an der Steuersatz-Schranke zeigt: Sie blockiert den Export, nicht aber die Vorschau, damit eine Rechnung in Arbeit auch ohne Satz prüfbar bleibt."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/082-invoice-pdf-generation.md
code:
  en: |
    flowchart TD
      A([Export pressed]) --> S[Save pending changes]
      S -->|"save failed"| X1[/Stays a draft/]
      S -->|"saved"| G1{Sender and tax rate?}
      G1 -->|"missing"| M1[Settings form opens]
      M1 -->|"cancelled"| X1
      M1 -->|"filled in"| G2
      G1 -->|"complete"| G2{Lines and service period?}
      G2 -->|"missing"| X1
      G2 -->|"complete"| T[One transaction]
      T --> T1[Stamp the date, set Exported]
      T1 --> T2[Render from the locked invoice]
      T2 --> T3[Store PDF and page images]
      T3 --> T4[Touch the timestamp]
      T4 --> E([Issued, frozen, stored])
  de: |
    flowchart TD
      A([Exportieren gedrückt]) --> S[Änderungen speichern]
      S -->|"fehlgeschlagen"| X1[/Bleibt Entwurf/]
      S -->|"gespeichert"| G1{Absender und Steuersatz?}
      G1 -->|"fehlt"| M1[Einstellungsformular öffnet]
      M1 -->|"abgebrochen"| X1
      M1 -->|"ausgefüllt"| G2
      G1 -->|"vollständig"| G2{Positionen und Leistungszeitraum?}
      G2 -->|"fehlt"| X1
      G2 -->|"vollständig"| T[Eine Transaktion]
      T --> T1[Datum stempeln, Status Exportiert]
      T1 --> T2[Aus der gesperrten Rechnung rendern]
      T2 --> T3[PDF und Seitenbilder speichern]
      T3 --> T4[Änderungszeitstempel aktualisieren]
      T4 --> E([Gestellt, eingefroren, gespeichert])
---
