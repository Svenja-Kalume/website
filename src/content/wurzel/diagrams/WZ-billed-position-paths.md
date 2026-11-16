---
title:
  en: "Every path onto an offer passes the billed-position check"
  de: "Jeder Weg auf ein Angebot läuft durch die Prüfung auf abgerechnete Positionen"
case: wurzel
type: mermaid
tool: Mermaid
caption:
  en: "A position counts as billed once it is on an invoice that is not cancelled. Each way of putting positions on an offer treats it differently on screen — left out silently, shown greyed with a reason, or refused at save — but none of them lets it through, and the server enforces the same rule for requests that do not come from the screens. A line already on an open offer is never removed by billing."
  de: "Eine Position gilt als abgerechnet, sobald sie auf einer nicht stornierten Rechnung steht. Jeder Weg, Positionen auf ein Angebot zu setzen, zeigt das am Bildschirm anders — still weggelassen, ausgegraut mit Grund oder beim Speichern abgelehnt —, aber keiner lässt sie durch, und der Server setzt dieselbe Regel für Anfragen durch, die nicht von den Bildschirmen kommen. Eine Zeile, die schon auf einem offenen Angebot steht, entfernt das Abrechnen nie."
introducedIn: WZ-0.4.0
source: docs/user-stories/152-a-billed-position-is-never-offered-again.md
code:
  en: |
    flowchart TD
      A["Neues Angebot / project list Angebot"] --> X{"Position billed?"}
      B["Neue Version"] --> X
      C["Position hinzufügen"] --> X
      D["Offer from the customer, attached"] --> X
      E["Any request, not from the screens"] --> X
      X -->|"no"| OK["On the offer"]
      X -->|"yes, new offer or version"| S["Left out, nothing said"]
      X -->|"yes, add list"| G["Greyed: bereits abgerechnet – Rechnung {Nummer}"]
      X -->|"yes, billed after it was picked"| R["Save refused, edits kept"]
      X -->|"yes, request"| R
      B -->|"nothing left to carry over"| N["Refused, nothing replaced"]
  de: |
    flowchart TD
      A["Neues Angebot / Angebot in der Projektliste"] --> X{"Position abgerechnet?"}
      B["Neue Version"] --> X
      C["Position hinzufügen"] --> X
      D["Angebot aus dem Kunden, angehängt"] --> X
      E["Jede Anfrage, nicht vom Bildschirm"] --> X
      X -->|"nein"| OK["Auf dem Angebot"]
      X -->|"ja, neues Angebot oder Version"| S["Weggelassen, ohne Hinweis"]
      X -->|"ja, Auswahlliste"| G["Ausgegraut: bereits abgerechnet – Rechnung {Nummer}"]
      X -->|"ja, nach der Auswahl abgerechnet"| R["Speichern abgelehnt, Änderungen bleiben"]
      X -->|"ja, Anfrage"| R
      B -->|"nichts zu übernehmen"| N["Abgelehnt, nichts ersetzt"]
---
