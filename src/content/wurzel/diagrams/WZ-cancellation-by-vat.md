---
title:
  en: "Cancelling a bill splits by VAT status"
  de: "Das Stornieren teilt sich nach Umsatzsteuerstatus"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "One action to the user, two obligations in law. The shared transition marks the bill STORNIERT and returns its quantities; a VAT bill then additionally needs a Stornorechnung counter-document, numbered from the original and excluded from the number sequence. A Kleinunternehmer bill is complete at the state change."
  de: "Für die Nutzerin ein Vorgang, im Recht zwei Pflichten. Der gemeinsame Übergang kennzeichnet die Rechnung als STORNIERT und gibt ihre Mengen zurück; eine Rechnung mit Umsatzsteuer braucht danach zusätzlich eine Stornorechnung als Gegendokument, nummeriert aus dem Original und aus der Nummernfolge ausgeschlossen. Bei einer Kleinunternehmer-Rechnung ist der Zustandswechsel die ganze Stornierung."
aiContribution:
  en: "The split was a legal judgement, not the AI’s: to a user, cancelling is one action, and dividing it into two stories by VAT status comes from § 14c UStG. What the AI contributed sits at the bottom right of the diagram — the correction row must stay out of the number scan, or the next ordinary invoice of the year cannot be generated at all."
  de: "Die Aufteilung war eine juristische Entscheidung und nicht die der KI: Für die Nutzerin ist Stornieren ein Vorgang, und ihn nach Umsatzsteuerstatus in zwei Stories zu teilen folgt aus § 14c UStG. Der Beitrag der KI steht unten rechts im Bild — die Stornozeile muss aus dem Nummernscan herausbleiben, sonst lässt sich die nächste reguläre Rechnung des Jahres gar nicht erzeugen."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/099-cancel-invoice-kleinunternehmer.md
code:
  en: |
    flowchart TD
      A([Stornieren on an Exported invoice]) --> C{Confirmed?}
      C -->|no| Z([Nothing happens])
      C -->|yes| G{Final invoice stands on this project?}
      G -->|yes, and this is an advance| K[/Conflict — cancel the final first/]
      G -->|no| T[State becomes Cancelled, timestamp touched]
      T --> M[Marked STORNIERT in both lists and the view]
      T --> Q[Billed quantities return — remaining is computed, not stored]
      T --> V{VAT invoice?}
      V -->|no, § 19| D([Complete — no counter-document])
      V -->|yes| F[/Flagged: Stornorechnung noch nicht erstellt/]
      F --> S[Stornorechnung created: numbered original-S, prices negated, born Exported]
      S --> N[Excluded from the number sequence and from remaining-quantity sums]
      N --> D2([Complete — the two documents sum to zero])
  de: |
    flowchart TD
      A([Stornieren auf einer exportierten Rechnung]) --> C{Bestätigt?}
      C -->|nein| Z([Nichts geschieht])
      C -->|ja| G{Besteht eine Schlussrechnung im Projekt?}
      G -->|ja, und dies ist eine Abschlagsrechnung| K[/Conflict — zuerst die Schlussrechnung stornieren/]
      G -->|nein| T[Status wird Storniert, Zeitstempel aktualisiert]
      T --> M[In beiden Listen und in der Ansicht als STORNIERT gekennzeichnet]
      T --> Q[Abgerechnete Mengen kehren zurück — die Restmenge wird berechnet, nicht gespeichert]
      T --> V{Rechnung mit Umsatzsteuer?}
      V -->|nein, § 19| D([Vollständig — kein Gegendokument])
      V -->|ja| F[/Gekennzeichnet: Stornorechnung noch nicht erstellt/]
      F --> S[Stornorechnung erzeugt: Nummer Original-S, Preise negiert, direkt exportiert]
      S --> N[Aus Nummernfolge und Restmengensummen ausgeschlossen]
      N --> D2([Vollständig — beide Dokumente ergeben null])
---
