---
title:
  en: Project as the core domain entity
  de: Projekt als zentrale Domänen-Entität
case: wurzel
status: accepted
date: 2026-06-15
relatedRequirements: [WZ-R-02, WZ-R-04]
introducedIn: WZ-0.1.0
---

## Context
Real landscaping jobs have several offer versions (and later multiple invoices). Without
a grouping entity these would be a flat, unconnected list.

## Decision
Introduce Project as a core entity before writing the offer stories: a Project belongs to
a Customer; Offers belong to a Project.

## Consequences
Made deliberately early to avoid a costly retrofit. It anchors the ownership hierarchy and
makes multiple offer versions coherent; invoices will hang off the same Project later.
