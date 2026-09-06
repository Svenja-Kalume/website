---
title:
  en: Choose a unit of measure per position
  de: Je Position eine Einheit wählen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to bill a position by hours, area, volume, length, distance or weight
  de: eine Position nach Stunden, Fläche, Volumen, Länge, Strecke oder Gewicht abzurechnen
soThat:
  en: the price matches how the trade actually charges
  de: der Preis dazu passt, wie das Gewerk tatsächlich abrechnet
requirement: WZ-R-03
acceptanceCriteria:
  en:
    - Einheit is a fixed enum of six (Stunde/h, m², m³, lfm, km, t); default is Stunde
    - Menge is shown and required; UnitPrice is the price per selected unit
    - A snapshot also freezes Einheit and Menge
  de:
    - Einheit ist ein festes Enum aus sechs (Stunde/h, m², m³, lfm, km, t); Standard ist Stunde
    - Menge wird angezeigt und ist Pflicht; der Einzelpreis ist der Preis je gewählter Einheit
    - Ein Snapshot friert auch Einheit und Menge ein
priority: must
status: done
aiContribution:
  en: In the recorded session the owner described distance (km) as a special case; the AI generalised this into a fixed six-value unit enum, and I kept deeper transport pricing explicitly out of scope.
  de: In der aufgezeichneten Session beschrieb der Inhaber die Fahrstrecke (km) als Sonderfall; die KI verallgemeinerte das zu einem festen Sechs-Werte-Enum, und ich hielt tiefere Transportpreisbildung explizit außerhalb des Scopes.
introducedIn: WZ-0.1.0
---
