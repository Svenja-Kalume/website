---
title:
  en: "Billing above a position’s remaining quantity raises the position"
  de: "Mehr abzurechnen als auf einer Position übrig ist, hebt die Position an"
case: wurzel
status: accepted
date: 2026-09-15
relatedRequirements: [WZ-R-16]
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0035-billing-raises-the-position-quantity.md
---

## Context
The invoice stories capped a line at the position's remaining quantity, and three separate places
enforced it: the creator, the updater and a clamp in the client. The arithmetic was the reason —
without a cap the remaining quantity goes negative and every figure computed from it follows.

The third walk of the Level-3 checklist reported the cap as a **defect rather than a guard**:
spending more hours on site than the offer quoted is ordinary in this business, and the cap made the
resulting bill impossible to issue at all.

## Decision
An invoice line may bill more than remains, and the invoice saves. Both server-side checks and the
client clamp are removed; what stays refused is unchanged — zero or less, a position that does not
exist, one belonging to another project, a disabled one. **The save raises the position**: each
position whose total billed quantity now exceeds its own has that quantity raised to the billed
total, so the remainder lands at zero instead of going negative. A position is only ever raised,
never lowered. The user is **told afterwards, not asked beforehand**.

## Consequences
The invoice side gains a write to the project's positions, which it never had before. The raise is
kept — cancelling the invoice or lowering the line again does not restore the previous quantity. The
notice names each raised position and the number of every open offer referencing it, because a quoted
total has silently moved and the owner has to know before the customer does.
