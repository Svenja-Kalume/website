---
title:
  en: Units of measure on project positions
  de: Einheiten für Projektpositionen
case: wurzel
asA:
  en: a landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to choose a billing unit per project position (hours, area, volume, length, distance, or weight)
  de: pro Projektposition eine Abrechnungseinheit zu wählen (Stunden, Fläche, Volumen, Länge, Strecke oder Gewicht)
soThat:
  en: jobs not billed by the hour — area in m², haul-away in m³ or t, travel in km — are priced correctly in one quote
  de: nicht stundenweise abgerechnete Arbeiten — Fläche in m², Abtransport in m³ oder t, Fahrstrecke in km — in einem Angebot korrekt bepreist werden
requirement: WZ-R-03
acceptanceCriteria:
  en:
    - A ProjectPosition carries a fixed Unit enum (Hour, SquareMeter, CubicMeter, RunningMeter, Kilometer, Ton), defaulting to Hour
    - Quantity (the billing measure in the selected unit) and UnitPrice are both required on every position, regardless of Unit
    - PositionPrice is Quantity × UnitPrice for every unit, including Hour — one pricing rule, no special case
  de:
    - Eine Projektposition trägt eine feste Einheit (Stunde, Quadratmeter, Kubikmeter, Laufmeter, Kilometer, Tonne), standardmäßig Stunde
    - Menge (das Abrechnungsmaß in der gewählten Einheit) und Einzelpreis sind für jede Position pflicht, unabhängig von der Einheit
    - Der Positionspreis ist Menge × Einzelpreis für jede Einheit, auch für Stunde — eine Preisregel, kein Sonderfall
codeUrl: Shared/Positions/PositionRequest.cs
adr: [WZ-ADR-004]
priority: must
status: done
aiContribution:
  en: This story originally shipped Estimation (planned hours) as required only for Unit = Hour, alongside the new Quantity-based units — a two-formula model where the Hour case priced off time and every other unit off Quantity. The AI later found, while investigating the offer/invoice split, that this left Duration and Estimation carrying three unrelated jobs at once (pricing, work-tracking, and offer/invoice eligibility) and proposed unifying all units — Hour included — onto Quantity × UnitPrice, removing Estimation entirely and making Duration purely informational. I accepted that unification; the acceptance criteria above describe the shipped, unified rule, not this story's original two-formula design.
  de: Diese Story lieferte ursprünglich Schätzung (geplante Stunden) als Pflichtfeld nur für die Einheit Stunde, neben den neuen mengenbasierten Einheiten — ein Zwei-Formel-Modell, bei dem der Stunden-Fall über Zeit und jede andere Einheit über Menge bepreist wurde. Die KI stellte später, bei der Untersuchung der Angebots-/Rechnungs-Trennung, fest, dass Schätzung und Arbeitszeit dadurch drei voneinander unabhängige Aufgaben gleichzeitig trugen (Preisbildung, Arbeitszeiterfassung und Angebots-/Rechnungs-Berechtigung), und schlug vor, alle Einheiten — inklusive Stunde — auf Menge × Einzelpreis zu vereinheitlichen, Schätzung ganz zu entfernen und Arbeitszeit rein informativ zu machen. Ich akzeptierte diese Vereinheitlichung; die obigen Akzeptanzkriterien beschreiben die ausgelieferte, vereinheitlichte Regel, nicht das ursprüngliche Zwei-Formel-Design dieser Story.
introducedIn: WZ-0.2.0
source: docs/user-stories/061-position-units-of-measure.md
---
