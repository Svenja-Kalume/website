---
title:
  en: See the offer total
  de: Die Angebotssumme sehen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: the offer to sum its line items automatically
  de: dass das Angebot seine Positionen automatisch summiert
soThat:
  en: I always see the current net amount without adding it up myself
  de: ich stets die aktuelle Nettosumme sehe, ohne selbst zu rechnen
requirement: WZ-R-04
acceptanceCriteria:
  en:
    - A totals section below the line items shows Gesamtpreis (NetAmount) as the sum of the line Angebotspreis values
    - It updates live as positions change; no VAT or discounts are applied at Level 1
  de:
    - Ein Summenbereich unter den Positionen zeigt den Gesamtpreis (Nettosumme) als Summe der Positions-Angebotspreise
    - Er aktualisiert sich live, wenn sich Positionen ändern; auf Level 1 werden keine MwSt. und keine Rabatte angewandt
priority: must
status: done
aiContribution:
  en: The AI wired the live recompute (using the unified Quantity × UnitPrice rule); I confirmed no VAT at line level for Level 1 to keep tax handling out of the MVP.
  de: Die KI verdrahtete die Live-Neuberechnung (mit der vereinheitlichten Regel Menge × Einzelpreis); ich bestätigte keine MwSt. auf Positionsebene für Level 1, um die Steuerbehandlung aus dem MVP zu halten.
introducedIn: WZ-0.1.0
---
