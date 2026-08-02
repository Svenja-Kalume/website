---
title:
  en: Positions stay in sync with open offers
  de: Positionen bleiben mit offenen Angeboten synchron
case: wurzel
type: bpmn
tool: Mermaid
caption:
  en: An Open offer reads positions live, so edits and deactivations reflect immediately; frozen offers are unaffected.
  de: Ein offenes Angebot liest Positionen live, daher wirken Änderungen und Deaktivierungen sofort; eingefrorene Angebote bleiben unberührt.
aiContribution:
  en: Grooming found the live-read already worked via the OfferMapper, so the AI reframed the work as verification plus regression tests rather than new code; I confirmed the Open-only gate.
  de: Beim Grooming zeigte sich, dass das Live-Lesen über den OfferMapper bereits funktioniert, daher formulierte die KI die Arbeit als Verifikation plus Regressionstests statt neuem Code um; ich bestätigte das Nur-für-Offen-Gate.
---
flowchart TD
  A["Edit position (Beschreibung / Einheit / Menge / Einzelpreis)"] --> B["OfferMapper reads live"]
  B --> C["Every Open offer reflects it; Angebotspreis + Gesamtpreis recompute"]
  D["Deactivate position (Deaktiviert = true)"] --> E["Read-time filter drops the line from Open offers"]
  E --> F["Reactivate → line reappears automatically"]
  C -.->|"not applied to"| G["Ersetzt / frozen offers"]
  E -.->|"not applied to"| G
