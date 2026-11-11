---
title:
  en: "A billed position is never offered again"
  de: "Eine abgerechnete Position wird nie wieder angeboten"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a position that is already billed kept off every new offer, new version and offer-editor add list"
  de: "dass eine bereits abgerechnete Position von jedem neuen Angebot, jeder neuen Version und der Auswahlliste im Angebotseditor ferngehalten wird"
soThat:
  en: "I never quote a customer work I have already invoiced"
  de: "ich einem Kunden nie Arbeit anbiete, die ich schon in Rechnung gestellt habe"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "A new offer does not take a billed position and says nothing about it; a position billed only on an invoice since cancelled or voided is taken"
    - "Neue Version, from an open or an exported offer, does not take a billed position; when no position can be carried over it is refused with „Keine Position kann in eine neue Version übernommen werden.“ and nothing is created or replaced"
    - "Position hinzufügen lists a billed position greyed with „bereits abgerechnet – Rechnung {Nummer}“ (the earliest invoice), and a deactivated one greyed with „deaktiviert“; neither can be picked"
    - "Billing a position that sits on an open offer never removes the line; it keeps following its position, including a quantity raised by the bill"
    - "A billed line removed from an open offer cannot be added back"
    - "A position billed between being picked and the offer's save makes the server refuse the save with a German message naming it, and the unsaved edits stay"
    - "No path puts a billed position on an offer, even when the request does not come from these screens"
  de:
    - "Ein neues Angebot übernimmt keine abgerechnete Position und sagt nichts dazu; eine Position, die nur auf einer inzwischen stornierten Rechnung abgerechnet war, wird übernommen"
    - "Neue Version, aus einem offenen oder einem exportierten Angebot, übernimmt keine abgerechnete Position; lässt sich keine Position übernehmen, wird sie mit „Keine Position kann in eine neue Version übernommen werden.“ abgelehnt, und nichts wird angelegt oder ersetzt"
    - "Position hinzufügen listet eine abgerechnete Position ausgegraut mit „bereits abgerechnet – Rechnung {Nummer}“ (die früheste Rechnung) und eine deaktivierte ausgegraut mit „deaktiviert“; keine von beiden ist wählbar"
    - "Das Abrechnen einer Position, die auf einem offenen Angebot steht, entfernt die Zeile nie; sie folgt weiter ihrer Position, auch einer durch die Rechnung angehobenen Menge"
    - "Eine aus einem offenen Angebot entfernte abgerechnete Zeile lässt sich nicht wieder hinzufügen"
    - "Wird eine Position zwischen Auswahl und Speichern des Angebots abgerechnet, lehnt der Server das Speichern mit einer deutschen Meldung ab, die sie benennt, und die ungespeicherten Änderungen bleiben erhalten"
    - "Kein Weg setzt eine abgerechnete Position auf ein Angebot, auch wenn die Anfrage nicht von diesen Bildschirmen kommt"
codeUrl: Server/Offers/OfferAdditionGuard.cs
bpmn: WZ-billed-position-paths
status: done
aiContribution:
  en: "This story exists because the AI caught a consequence of my own scoping. I moved the one-click add to an open offer to after the MVP; the AI pointed out that the same story also owned keeping billed work off every offer, so moving it whole would have let the MVP quote billed work again. I split the rule out into this story. At the readiness gate the check found that \"billing leaves the line unchanged\" contradicted the Level-4 rule that billing above the remainder raises the position, and I wrote down what I had meant: the line is never removed. The walk found that Neue Version with nothing to carry over created an empty offer; I decided it is refused. The block review found that the test for a refused Neue Version counted chain heads, which a wrong implementation leaves unchanged."
  de: "Diese Story gibt es, weil die KI eine Folge meines eigenen Zuschnitts bemerkt hat. Ich hatte das Hinzufügen per Klick zu einem offenen Angebot hinter das MVP geschoben; die KI wies darauf hin, dass dieselbe Story auch dafür zuständig war, abgerechnete Arbeit von jedem Angebot fernzuhalten — sie ganz zu verschieben hätte das MVP wieder abgerechnete Arbeit anbieten lassen. Ich habe die Regel in diese Story abgetrennt. Am Readiness-Gate fand die Prüfung, dass „Abrechnen lässt die Zeile unverändert“ der Level-4-Regel widersprach, nach der Abrechnen über die Restmenge die Position anhebt, und ich habe aufgeschrieben, was ich gemeint hatte: Die Zeile wird nie entfernt. Der Durchgang fand, dass Neue Version ohne übernehmbare Position ein leeres Angebot anlegte; ich habe entschieden, dass sie abgelehnt wird. Die Block-Review fand, dass der Test für eine abgelehnte Neue Version Kettenköpfe zählte, was eine falsche Umsetzung unverändert lässt."
introducedIn: WZ-0.4.0
source: docs/user-stories/152-a-billed-position-is-never-offered-again.md
---
