---
title:
  en: "What the invoice document shows"
  de: "Was das Rechnungsdokument zeigt"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "One document definition renders both the on-screen preview and the PDF, so the two cannot drift apart. The total block is the branch that matters: with a rate it shows net, rate, tax and gross; for a Kleinunternehmer the § 19 UStG note replaces all of it. The reference block appears only on a final invoice, and changes no amount."
  de: "Eine Dokumentdefinition rendert die Bildschirmvorschau und das PDF, beide können also nicht auseinanderlaufen. Der Summenblock ist die entscheidende Verzweigung: mit Satz zeigt er Netto, Satz, Steuer und Gesamtbetrag; beim Kleinunternehmer ersetzt der Hinweis nach § 19 UStG das alles. Der Referenzblock erscheint nur auf einer Schlussrechnung und verändert keinen Betrag."
aiContribution:
  en: "The AI proposed computing VAT once on the total rather than per line, and formatting every money and date value inside the shared model — so the preview text and the PDF text cannot differ even by a thousands separator. The rule that a final invoice lists earlier advances without deducting them is a business decision, taken to keep the deduction arithmetic out of this level entirely."
  de: "Die KI schlug vor, die Umsatzsteuer einmal auf die Summe zu rechnen statt je Zeile und jede Geld- und Datumsangabe im gemeinsamen Modell zu formatieren — damit Vorschautext und PDF-Text sich nicht einmal im Tausendertrennzeichen unterscheiden. Dass eine Schlussrechnung frühere Abschlagsrechnungen aufführt, ohne sie abzuziehen, ist eine fachliche Entscheidung, um die Abzugsrechnerei ganz aus diesem Level herauszuhalten."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/081-invoice-document-preview.md
code:
  en: |
    flowchart TD
      M[One shared document model] --> P[On-screen preview]
      M --> F[Exported PDF and stored page images]
      M --> H[Header: title by type, Rechnungsnummer, dates, service period]
      M --> L[Line table: the invoice's own copied lines, never the live positions]
      M --> S{Tax rate set?}
      S -->|yes| V[Nettobetrag / MwSt. rate % / Gesamtbetrag gross]
      S -->|Kleinunternehmer| N[§ 19 UStG note, Gesamtbetrag equals net]
      M --> R{Final invoice?}
      R -->|yes| B[Earlier issued advances listed — information only, no deduction]
      R -->|no| O[No reference block]
  de: |
    flowchart TD
      M[Ein gemeinsames Dokumentmodell] --> P[Bildschirmvorschau]
      M --> F[Exportiertes PDF und gespeicherte Seitenbilder]
      M --> H[Kopf: Titel nach Rechnungsart, Rechnungsnummer, Daten, Leistungszeitraum]
      M --> L[Positionstabelle: die kopierten Zeilen der Rechnung, nie die Live-Positionen]
      M --> S{Steuersatz gesetzt?}
      S -->|ja| V[Nettobetrag / MwSt. Satz % / Gesamtbetrag brutto]
      S -->|Kleinunternehmer| N[Hinweis nach § 19 UStG, Gesamtbetrag gleich netto]
      M --> R{Schlussrechnung?}
      R -->|ja| B[Frühere gestellte Abschlagsrechnungen aufgeführt — nur informativ, kein Abzug]
      R -->|nein| O[Kein Referenzblock]
---
