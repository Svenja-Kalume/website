---
title:
  en: "Positions stay in sync with open offers"
  de: "Positionen bleiben mit offenen Angeboten synchron"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "An Open offer reads positions live, so edits and deactivations reflect immediately; frozen offers are unaffected."
  de: "Ein offenes Angebot liest Positionen live, daher wirken Änderungen und Deaktivierungen sofort; eingefrorene Angebote bleiben unberührt."
aiContribution:
  en: "Grooming found the live-read already worked via the OfferMapper, so the AI reframed the work as verification plus regression tests rather than new code; I confirmed the Open-only gate."
  de: "Beim Grooming zeigte sich, dass das Live-Lesen über den OfferMapper bereits funktioniert, daher formulierte die KI die Arbeit als Verifikation plus Regressionstests statt neuem Code um; ich bestätigte das Nur-für-Offen-Gate."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A["Edit position (Description / Unit / Quantity / UnitPrice)"] --> B["OfferMapper reads live"]
      B --> C["Open offer reflects it"]
      C --> C2["OfferPrice + total recompute"]
      D["Deactivate position (IsDisabled = true)"] --> E["Read-time filter drops the line from Open offers"]
      E --> F["Reactivate: the line reappears automatically"]
      C2 -.->|"not applied to"| G["Superseded / frozen offers"]
      E -.->|"not applied to"| G
  de: |
    flowchart TD
      A["Position bearbeiten (Beschreibung / Einheit / Menge / Einzelpreis)"] --> B["OfferMapper liest live"]
      B --> C["Offenes Angebot übernimmt es"]
      C --> C2["Angebotspreis + Gesamtpreis werden neu berechnet"]
      D["Position deaktivieren (Deaktiviert = wahr)"] --> E["Der Lesefilter entfernt die Zeile aus offenen Angeboten"]
      E --> F["Reaktivieren: die Zeile erscheint automatisch wieder"]
      C2 -.->|"gilt nicht für"| G["Ersetzte / eingefrorene Angebote"]
      E -.->|"gilt nicht für"| G
---
