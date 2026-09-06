---
title:
  en: Open offers stay in sync with their positions
  de: Offene Angebote bleiben mit ihren Positionen synchron
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: my Open offer to always reflect the current project positions
  de: dass mein offenes Angebot stets die aktuellen Projektpositionen widerspiegelt
soThat:
  en: I do not have to re-enter a change in two places
  de: ich eine Änderung nicht an zwei Stellen neu eingeben muss
requirement: WZ-R-03
bpmn: WZ-position-sync
acceptanceCriteria:
  en:
    - Editing Beschreibung, Einheit, Menge or Einzelpreis reflects in every Open offer; Angebotspreis and NetAmount recompute
    - Deactivating a position removes it from every Open offer's line items; reactivating re-adds it automatically
    - Frozen offers (Ersetzt) are not affected; the change is applied by a read-time filter, not by deleting the link
  de:
    - Änderungen an Beschreibung, Einheit, Menge oder Einzelpreis wirken in jedem offenen Angebot; Angebotspreis und Nettosumme werden neu berechnet
    - Das Deaktivieren einer Position entfernt sie aus den Positionen jedes offenen Angebots; das Reaktivieren fügt sie automatisch wieder hinzu
    - Eingefrorene Angebote (Ersetzt) sind nicht betroffen; die Änderung wirkt über einen Lese-Filter, nicht durch Löschen der Verknüpfung
priority: must
status: done
aiContribution:
  en: Grooming found the live-read already worked via the OfferMapper, so the AI reframed the story as verification plus regression tests rather than new code; I confirmed the Open-only gate.
  de: Beim Grooming zeigte sich, dass das Live-Lesen über den OfferMapper bereits funktioniert, daher formulierte die KI die Story als Verifikation plus Regressionstests statt neuem Code um; ich bestätigte das Nur-für-Offen-Gate.
introducedIn: WZ-0.1.0
---
