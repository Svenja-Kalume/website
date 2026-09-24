---
title:
  en: "Invoice lifecycle"
  de: "Rechnungs-Lebenszyklus"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "Draft is the only editable state. Generating the PDF is the act of issuing: it stamps the date, stores the document and freezes the invoice in one transaction. An exported bill normally stays exported: cancelling is the only transition out of it, and it writes the state and nothing else — the line data stays, so the voided bill remains reconstructable. There is no Paid state yet; settlement is deliberately deferred. Any write to a frozen invoice returns Conflict, a deleted draft leaves a documented gap in the number sequence, and a cancelled bill keeps its stored PDF unaltered while both lists and the read-only view mark it STORNIERT."
  de: "Entwurf ist der einzige änderbare Zustand. Das Erzeugen des PDFs ist das Stellen der Rechnung: Es stempelt das Datum, speichert das Dokument und friert die Rechnung in einer Transaktion ein. Eine exportierte Rechnung bleibt im Normalfall exportiert: Das Stornieren ist der einzige Übergang aus diesem Zustand heraus, und es schreibt den Status und sonst nichts — die Zeilendaten bleiben, die aufgehobene Rechnung ist also rekonstruierbar. Einen Status „Bezahlt“ gibt es noch nicht; das Begleichen ist bewusst zurückgestellt. Jeder Schreibversuch auf eine eingefrorene Rechnung endet mit Conflict, ein gelöschter Entwurf hinterlässt eine dokumentierte Lücke in der Nummernfolge, und eine stornierte Rechnung behält ihr gespeichertes PDF unverändert, während beide Listen und die Leseansicht sie als STORNIERT kennzeichnen."
aiContribution:
  en: "The AI derived the state set and the transitions from the story documents rather than from the code, and flagged what the diagram makes obvious and the prose had buried: there is no Sent state and no manual route to Exported, so the PDF is the only way a bill can become issued."
  de: "Die KI leitete Zustandsmenge und Übergänge aus den Story-Dokumenten ab statt aus dem Code und wies auf das hin, was das Bild sofort zeigt und der Fließtext verbarg: Es gibt keinen Zustand „Versendet“ und keinen manuellen Weg nach Exportiert — das PDF ist der einzige Weg, auf dem eine Rechnung gestellt wird."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/046-invoice-sending-and-lifecycle.md
code:
  en: |
    stateDiagram-v2
      [*] --> Draft : created (number assigned, no date)
      Draft --> [*] : deleted (number not reused)
      Draft --> Exported : PDF generated = issued
      Exported --> [*] : stays issued
      Exported --> Cancelled
      Cancelled --> [*]
  de: |
    stateDiagram-v2
      state "Entwurf" as Entwurf
      state "Exportiert" as Exportiert
      state "Storniert" as Storniert
      [*] --> Entwurf : angelegt (Nummer vergeben, kein Datum)
      Entwurf --> [*] : gelöscht (Nummer nicht erneut vergeben)
      Entwurf --> Exportiert : PDF erzeugt = gestellt
      Exportiert --> [*] : bleibt gestellt
      Exportiert --> Storniert
      Storniert --> [*]
---
