---
title:
  en: "Invoice lifecycle"
  de: "Rechnungs-Lebenszyklus"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Draft is the only editable state. Generating the PDF is the act of issuing: it stamps the date, stores the document and freezes the invoice in one transaction. From Exported the only route out is cancellation, which writes the state and nothing else — the line data stays, so the voided bill remains reconstructable."
  de: "Entwurf ist der einzige änderbare Zustand. Das Erzeugen des PDFs ist das Stellen der Rechnung: Es stempelt das Datum, speichert das Dokument und friert die Rechnung in einer Transaktion ein. Aus Exportiert führt nur das Stornieren heraus, das den Status schreibt und sonst nichts — die Zeilendaten bleiben, die aufgehobene Rechnung ist also rekonstruierbar."
aiContribution:
  en: "The AI derived the state set and the transitions from the story documents rather than from the code, and flagged what the diagram makes obvious and the prose had buried: there is no Sent state and no manual route to Exported, so the PDF is the only way a bill can become issued."
  de: "Die KI leitete Zustandsmenge und Übergänge aus den Story-Dokumenten ab statt aus dem Code und wies auf das hin, was das Bild sofort zeigt und der Fließtext verbarg: Es gibt keinen Zustand „Versendet“ und keinen manuellen Weg nach Exportiert — das PDF ist der einzige Weg, auf dem eine Rechnung gestellt wird."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/046-invoice-sending-and-lifecycle.md
code:
  en: |
    stateDiagram-v2
      [*] --> Draft : created (number assigned, no date)
      Draft --> [*] : deleted (number not reused, gap documented)
      Draft --> Exported : PDF generated = issued
      Exported --> Paid
      Exported --> Cancelled : STORNIERT
      Paid --> Cancelled : STORNIERT
      Cancelled --> [*]
      note right of Draft : the only editable state
      note right of Exported : frozen — any write returns Conflict
      note right of Cancelled : lines kept, stored PDF unaltered
  de: |
    stateDiagram-v2
      state "Entwurf" as Entwurf
      state "Exportiert" as Exportiert
      state "Bezahlt" as Bezahlt
      state "Storniert" as Storniert
      [*] --> Entwurf : angelegt (Nummer vergeben, kein Datum)
      Entwurf --> [*] : gelöscht (Nummer nicht erneut vergeben, Lücke dokumentiert)
      Entwurf --> Exportiert : PDF erzeugt = gestellt
      Exportiert --> Bezahlt
      Exportiert --> Storniert : STORNIERT
      Bezahlt --> Storniert : STORNIERT
      Storniert --> [*]
      note right of Entwurf : der einzige änderbare Zustand
      note right of Exportiert : eingefroren — jeder Schreibversuch endet mit Conflict
      note right of Storniert : Zeilen bleiben, gespeichertes PDF unverändert
---
