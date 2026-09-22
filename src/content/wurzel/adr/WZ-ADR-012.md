---
title:
  en: "Autosave has four triggers and a five-second idle delay, settable for tests"
  de: "Autosave hat vier Auslöser und fünf Sekunden Leerlauf — für Tests einstellbar"
case: wurzel
status: accepted
date: 2026-09-07
relatedRequirements: [WZ-R-15]
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0033-autosave-idle-delay-is-five-seconds.md
---

## Context
An earlier decision wrote down the autosave contract and fixed the idle timer at 10 s. The app
had not behaved that way since 11 July 2026, when a commit set the delay to 5 s. Every level
delivered since — including both Level-3 test sessions and the Level-4 walks — was exercised at 5 s.
The written contract and the shipped behaviour disagreed for roughly two months, and the
disagreement surfaced only when a reviewer read the decision and the code side by side.

A second pressure arrived from the same review. The project's own rule requires a criterion to be
proven through the trigger the user actually reaches — for autosave, the timer. But the delay was a
private constant with no override and no injection point, so honouring that rule would have added
80+ seconds of real waiting to every test run. Tests therefore called the save method directly, which
is exactly the substitution the rule forbids.

## Decision
Restate the contract in whole rather than amend it, per the immutability rule: no Save button, four
triggers — a 5 s idle timer restarted by every change, field events (text fields arm on keystroke,
numeric and time fields commit on blur), navigation, and disposal — with a validation gate. The delay
becomes settable, so a test can drive the real timer instead of bypassing it.

## Consequences
Both halves were the same defect in different clothing: a decision with no seam — not writable by a
test, and not visible in the document that claimed to record it. The correction is recorded here
rather than by editing the earlier decision, so the two-month drift stays visible instead of being
tidied away.
