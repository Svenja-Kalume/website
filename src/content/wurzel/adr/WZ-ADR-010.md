---
title:
  en: "A Stornorechnung’s number is derived and excluded from the sequence"
  de: "Die Nummer einer Stornorechnung wird abgeleitet und zählt nicht mit"
case: wurzel
status: accepted
date: 2026-08-29
relatedRequirements: [WZ-R-14]
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0031-correction-invoice-numbers-excluded-from-sequence.md
---

## Context
A Stornorechnung is issued as a new invoice row whose number is derived from the bill it voids —
`<original>-S`, e.g. `2026-034-S` — because a Storno is one bill's mirror, not a new position in the
sequence, and deriving it keeps the two documents provably paired.

That collides with how numbers are generated. The counter scan matches `^\d{4}-(\d+)$` and
throws on anything else, over every number returned for the year. A `2026-034-S` row in that scan
set does not match, so the next advance or final invoice of the year would have failed to generate at
all — breaking invoice numbering from then on.

## Decision
Correction-invoice rows are excluded from the number-generation scan. The regex is deliberately
not loosened to tolerate the suffix.

## Consequences
A Storno never consumes a counter value and never creates a gap; the only documented gap remains the
one a deleted draft leaves. Loosening the parser instead would let the Storno's counter re-enter the
maximum and couple the two rows' numbering for no benefit — the parent already owns that counter —
and would make a genuinely malformed number fail quietly instead of loudly. It is the same "the
mirror row never enters an aggregate" principle that already keeps correction rows out of
remaining-quantity sums, and keeping the two rules symmetric is the point.
