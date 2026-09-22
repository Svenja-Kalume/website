---
title:
  en: "Billing above what is left raises the position"
  de: "Mehr abzurechnen, als übrig ist, hebt die Position an"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "The reversal of a rule that was arithmetically sound and unusable in the yard. A line may bill more than remains; the save raises the position to the total billed, so the remainder lands at zero instead of going negative. The user is told afterwards, not asked beforehand, and the notice names every open offer whose total moved with it. There is no cap on the server and none in the client, and the raise is kept: cancelling the invoice or lowering the line does not restore the old quantity."
  de: "Die Umkehr einer Regel, die rechnerisch stimmte und auf dem Hof unbrauchbar war. Eine Zeile darf mehr abrechnen, als übrig ist; das Speichern hebt die Position auf die abgerechnete Gesamtmenge an, die Restmenge landet also bei null statt im Negativen. Die Nutzerin wird nachher informiert, nicht vorher gefragt, und der Hinweis nennt jedes offene Angebot, dessen Summe sich mitbewegt hat. Es gibt keine Begrenzung am Server und keine im Client, und die Anhebung bleibt: Das Stornieren der Rechnung oder ein Senken der Zeile stellt die alte Menge nicht wieder her."
aiContribution:
  en: "The AI built the original cap and was right about the arithmetic; the tester reported the cap itself as the defect, and the reversal was the owner’s decision. What the AI contributed afterwards is what makes the reversal safe: the raise is one-directional, and an open offer referencing a raised position has its quoted total silently move — which is why those offers are named to the user."
  de: "Die KI baute die ursprüngliche Begrenzung und hatte rechnerisch recht; der Tester meldete die Begrenzung selbst als Fehler, und die Umkehr war die Entscheidung des Inhabers. Beigetragen hat die KI danach das, was die Umkehr sicher macht: Die Anhebung geht nur in eine Richtung, und bei einem offenen Angebot mit angehobener Position verändert sich die Angebotssumme still — deshalb werden diese Angebote der Nutzerin genannt."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0035-billing-raises-the-position-quantity.md
code:
  en: |
    flowchart TD
      A[Line bills a quantity] --> C{Above the rest?}
      C -->|"no"| S1[Saved unchanged]
      C -->|"yes"| S2[Saved anyway]
      S2 --> R[Position raised]
      R --> Z[Rest zero, never negative]
      Z --> K[Kept on cancel]
      R --> O{Open offers affected?}
      O -->|"yes"| M[/Notice names the offers/]
      O -->|"no"| M2[/Notice names the position/]
  de: |
    flowchart TD
      A[Zeile rechnet ab] --> C{Mehr als der Rest?}
      C -->|"nein"| S1[Unverändert gespeichert]
      C -->|"ja"| S2[Trotzdem gespeichert]
      S2 --> R[Position angehoben]
      R --> Z[Rest null, nie negativ]
      Z --> K[Bleibt beim Stornieren]
      R --> O{Angebote betroffen?}
      O -->|"ja"| M[/Hinweis nennt die Angebote/]
      O -->|"nein"| M2[/Hinweis nennt die Position/]
---
