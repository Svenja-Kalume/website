---
title:
  en: "What the invoice document shows"
  de: "Was das Rechnungsdokument zeigt"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "One document definition renders both the on-screen preview and the PDF, so the two cannot drift apart. The total block is the branch that matters: with a rate it shows net, rate, tax and gross; for a Kleinunternehmer the § 19 UStG note replaces all of it. The reference block appears only on a final invoice, and changes no amount. The header carries the title by invoice type, the Rechnungsnummer, the dates and the service period; the line table shows the invoice's own copied lines, never the live positions."
  de: "Eine Dokumentdefinition rendert die Bildschirmvorschau und das PDF, beide können also nicht auseinanderlaufen. Der Summenblock ist die entscheidende Verzweigung: mit Satz zeigt er Netto, Satz, Steuer und Gesamtbetrag; beim Kleinunternehmer ersetzt der Hinweis nach § 19 UStG das alles. Der Referenzblock erscheint nur auf einer Schlussrechnung und verändert keinen Betrag. Der Kopf trägt den Titel nach Rechnungsart, die Rechnungsnummer, die Daten und den Leistungszeitraum; die Positionstabelle zeigt die kopierten Zeilen der Rechnung, nie die Live-Positionen."
aiContribution:
  en: "The AI proposed computing VAT once on the total rather than per line, and formatting every money and date value inside the shared model — so the preview text and the PDF text cannot differ even by a thousands separator. The rule that a final invoice lists earlier advances without deducting them is a business decision, taken to keep the deduction arithmetic out of this level entirely."
  de: "Die KI schlug vor, die Umsatzsteuer einmal auf die Summe zu rechnen statt je Zeile und jede Geld- und Datumsangabe im gemeinsamen Modell zu formatieren — damit Vorschautext und PDF-Text sich nicht einmal im Tausendertrennzeichen unterscheiden. Dass eine Schlussrechnung frühere Abschlagsrechnungen aufführt, ohne sie abzuziehen, ist eine fachliche Entscheidung, um die Abzugsrechnerei ganz aus diesem Level herauszuhalten."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/081-invoice-document-preview.md
code:
  en: |
    flowchart TD
      M[One document model] --> P[On-screen preview]
      M --> F[PDF and page images]
      P --> K
      F --> K
      subgraph K["The same document"]
        direction TB
        H[Header] --> L[Line table] --> S{Tax rate set?}
        S -->|"yes"| V[Net · VAT % · Gross]
        S -->|"Kleinunternehmer"| N[§ 19 UStG note]
        V --> R{Final invoice?}
        N --> R
        R -->|"yes"| B[Earlier advances, no deduction]
        R -->|"no"| O[No reference block]
      end
  de: |
    flowchart TD
      M[Ein Dokumentmodell] --> P[Bildschirmvorschau]
      M --> F[PDF und Seitenbilder]
      P --> K
      F --> K
      subgraph K["Dasselbe Dokument"]
        direction TB
        H[Kopf] --> L[Positionstabelle] --> S{Steuersatz gesetzt?}
        S -->|"ja"| V[Netto · MwSt. % · Brutto]
        S -->|"Kleinunternehmer"| N[Hinweis nach § 19 UStG]
        V --> R{Schlussrechnung?}
        N --> R
        R -->|"ja"| B[Frühere Abschläge, kein Abzug]
        R -->|"nein"| O[Kein Referenzblock]
      end
---
