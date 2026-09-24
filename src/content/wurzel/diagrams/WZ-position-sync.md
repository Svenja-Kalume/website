---
title:
  en: "Positions stay in sync with open offers"
  de: "Positionen bleiben mit offenen Angeboten synchron"
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: "An Open offer reads positions live, so edits and deactivations reflect immediately; frozen offers are unaffected. Editing means Description, Unit, Quantity or UnitPrice; deactivating sets IsDisabled and the line is dropped at read time, so reactivating brings it back on its own."
  de: "Ein offenes Angebot liest Positionen live, daher wirken Änderungen und Deaktivierungen sofort; eingefrorene Angebote bleiben unberührt. Bearbeiten heißt Beschreibung, Einheit, Menge oder Einzelpreis; das Deaktivieren setzt das Kennzeichen, und die Zeile fällt beim Lesen heraus — das Reaktivieren bringt sie von selbst zurück."
aiContribution:
  en: "Grooming found the live-read already worked via the OfferMapper, so the AI reframed the work as verification plus regression tests rather than new code; I confirmed the Open-only gate."
  de: "Beim Grooming zeigte sich, dass das Live-Lesen über den OfferMapper bereits funktioniert, daher formulierte die KI die Arbeit als Verifikation plus Regressionstests statt neuem Code um; ich bestätigte das Nur-für-Offen-Gate."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      A["Edit a position"] --> B["OfferMapper reads live"]
      B --> C["Open offer reflects it"]
      C --> C2["Offer price and total recompute"]
      D["Deactivate a position"] --> E["Read-time filter drops the line"]
      E --> F["Reactivate: the line reappears"]
      C2 -.->|"not applied to"| G["Superseded / frozen offers"]
      E -.->|"not applied to"| G
  de: |
    flowchart TD
      A["Position bearbeiten"] --> B["OfferMapper liest live"]
      B --> C["Offenes Angebot übernimmt es"]
      C --> C2["Angebots- und Gesamtpreis neu berechnet"]
      D["Position deaktivieren"] --> E["Lesefilter entfernt die Zeile"]
      E --> F["Reaktivieren: die Zeile erscheint wieder"]
      C2 -.->|"gilt nicht für"| G["Ersetzte / eingefrorene Angebote"]
      E -.->|"gilt nicht für"| G
---
