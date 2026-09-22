---
title:
  en: "Cancelling a bill splits by VAT status"
  de: "Das Stornieren teilt sich nach Umsatzsteuerstatus"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "One action to the user, two obligations in law. The shared transition marks the bill STORNIERT and returns its quantities; a VAT bill then additionally needs a Stornorechnung counter-document, numbered from the original and excluded from the number sequence. A Kleinunternehmer bill is complete at the state change. Cancelling an advance invoice is refused with Conflict while a final invoice stands, so that one is cancelled first. The shared transition writes the state and the timestamp and nothing else — the remaining quantity is computed, not stored. The counter-document carries the original number with -S appended, and until it exists the cancelled bill is flagged in both lists as „Stornorechnung noch nicht erstellt“."
  de: "Für den Nutzer ein Vorgang, im Recht zwei Pflichten. Der gemeinsame Übergang kennzeichnet die Rechnung als STORNIERT und gibt ihre Mengen zurück; eine Rechnung mit Umsatzsteuer braucht danach zusätzlich eine Stornorechnung als Gegendokument, nummeriert aus dem Original und aus der Nummernfolge ausgeschlossen. Bei einer Kleinunternehmer-Rechnung ist der Zustandswechsel die ganze Stornierung. Das Stornieren einer Abschlagsrechnung wird mit Conflict abgelehnt, solange eine Schlussrechnung besteht; die wird also zuerst storniert. Der gemeinsame Übergang schreibt Status und Zeitstempel und sonst nichts — die Restmenge wird berechnet, nicht gespeichert. Das Gegendokument trägt die Nummer des Originals mit angehängtem -S, und bis es existiert, ist die stornierte Rechnung in beiden Listen als „Stornorechnung noch nicht erstellt“ gekennzeichnet."
aiContribution:
  en: "The split was a legal judgement, not the AI’s: to a user, cancelling is one action, and dividing it into two stories by VAT status comes from § 14c UStG. What the AI contributed sits at the bottom right of the diagram — the correction row must stay out of the number scan, or the next ordinary invoice of the year cannot be generated at all."
  de: "Die Aufteilung war eine juristische Entscheidung und nicht die der KI: Für den Nutzer ist Stornieren ein Vorgang, und ihn nach Umsatzsteuerstatus in zwei Stories zu teilen, folgt aus § 14c UStG. Der Beitrag der KI steht unten rechts im Bild — die Stornozeile muss aus dem Nummernscan herausbleiben, sonst lässt sich die nächste reguläre Rechnung des Jahres gar nicht erzeugen."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/099-cancel-invoice-kleinunternehmer.md
code:
  en: |
    flowchart TD
      A([Stornieren on an Exported bill]) --> C{Confirmed?}
      C -->|"no"| Z([Nothing happens])
      C -->|"yes"| G{Final invoice in the way?}
      G -->|"yes"| K[/Conflict/]
      G -->|"no"| T[State becomes Cancelled]
      T --> M[Marked STORNIERT]
      M --> Q[Quantities return]
      T --> V{VAT bill?}
      V -->|"no, § 19"| D([Complete])
      V -->|"yes"| F[/Flagged as missing/]
      F --> S[Stornorechnung, prices negated]
      S --> N[Out of the number sequence]
      N --> D2([Both sum to zero])
  de: |
    flowchart TD
      A([Stornieren, Rechnung exportiert]) --> C{Bestätigt?}
      C -->|"nein"| Z([Nichts geschieht])
      C -->|"ja"| G{Schlussrechnung im Weg?}
      G -->|"ja"| K[/Conflict/]
      G -->|"nein"| T[Status wird Storniert]
      T --> M[Als STORNIERT gekennzeichnet]
      M --> Q[Mengen kehren zurück]
      T --> V{Mit Umsatzsteuer?}
      V -->|"nein, § 19"| D([Vollständig])
      V -->|"ja"| F[/Als fehlend gekennzeichnet/]
      F --> S[Stornorechnung, Preise negiert]
      S --> N[Aus der Nummernfolge heraus]
      N --> D2([Beide ergeben null])
---
