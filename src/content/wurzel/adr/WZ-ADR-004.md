---
title:
  en: One pricing rule for all units — remove Estimation
  de: Eine Preisregel für alle Einheiten — Schätzung entfernen
case: wurzel
status: accepted
date: 2026-07-16
relatedRequirements: [WZ-R-03]
context:
  en:
    - "The position model had grown two pricing paths (hours by Duration, everything else by Quantity × UnitPrice) plus a leftover Estimation field, which was confusing and redundant."
  de:
    - "Das Positionsmodell hatte zwei Preispfade bekommen (Stunden über die Arbeitszeit, alles andere über Menge × Einzelpreis) und dazu ein übriggebliebenes Feld für die Schätzung — verwirrend und redundant."
decision:
  en:
    - "Unify pricing to `PositionPrice = Quantity × UnitPrice` for every unit including hours; remove Estimation from the entity, snapshots and DTOs; keep Duration as an inert, informational field. Squash the migration into the initial schema (dev DB reset)."
  de:
    - "Die Preisbildung auf `PositionPrice = Quantity × UnitPrice` für jede Einheit vereinheitlichen, Stunden eingeschlossen; die Schätzung aus Entität, Snapshots und DTOs entfernen; die Arbeitszeit als rein informatives Feld ohne Wirkung behalten. Die Migration in das Ausgangsschema zusammenfassen (Entwicklungsdatenbank zurückgesetzt)."
consequences:
  en:
    - "Fewer fields, one rule, one shared position table reused in offers. An open follow-up: the future invoice model must be reconciled with the unified formula when invoices are built."
  de:
    - "Weniger Felder, eine Regel, eine gemeinsame Positionstabelle, die das Angebot wiederverwendet. Offener Folgepunkt: Das künftige Rechnungsmodell muss mit der vereinheitlichten Formel in Einklang gebracht werden, sobald Rechnungen gebaut werden."
introducedIn: WZ-0.1.0
---
