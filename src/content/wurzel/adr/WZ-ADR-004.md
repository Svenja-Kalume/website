---
title:
  en: One pricing rule for all units — remove Estimation
  de: Eine Preisregel für alle Einheiten — Schätzung entfernen
case: wurzel
status: accepted
date: 2026-07-16
relatedRequirements: [WZ-R-03]
---

## Context
The position model had grown two pricing paths (hours by Duration, everything else by
Quantity × UnitPrice) plus a leftover Estimation field, which was confusing and redundant.

## Decision
Unify pricing to `PositionPrice = Quantity × UnitPrice` for every unit including hours;
remove Estimation from the entity, snapshots and DTOs; keep Duration as an inert,
informational field. Squash the migration into the initial schema (dev DB reset).

## Consequences
Fewer fields, one rule, one shared position table reused in offers. An open follow-up: the
future invoice model must be reconciled with the unified formula when invoices are built.
