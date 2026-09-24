---
title:
  en: "A Stornorechnung’s number is derived and excluded from the sequence"
  de: "Die Nummer einer Stornorechnung wird abgeleitet und zählt nicht mit"
case: wurzel
status: accepted
date: 2026-08-29
relatedRequirements: [WZ-R-14]
context:
  en:
    - "A Stornorechnung is issued as a new invoice row whose number is derived from the bill it voids — `<original>-S`, e.g. `2026-034-S` — because a Storno is one bill’s mirror, not a new position in the sequence, and deriving it keeps the two documents provably paired."
    - "That collides with how numbers are generated. The counter scan matches `^\\d{4}-(\\d+)$` and throws on anything else, over every number returned for the year. A `2026-034-S` row in that scan set does not match, so the next advance or final invoice of the year would have failed to generate at all — breaking invoice numbering from then on."
  de:
    - "Eine Stornorechnung wird als neuer Rechnungsdatensatz gestellt, dessen Nummer aus der stornierten Rechnung abgeleitet wird — `<Original>-S`, also etwa `2026-034-S` —, denn ein Storno ist das Spiegelbild einer Rechnung und keine neue Stelle in der Nummernfolge; die Ableitung hält die beiden Dokumente nachweisbar zusammen."
    - "Das kollidiert mit der Nummernvergabe. Der Zählerlauf prüft jede für das Jahr gelieferte Nummer gegen `^\\d{4}-(\\d+)$` und wirft bei allem anderen eine Ausnahme. Ein Datensatz `2026-034-S` in dieser Menge passt nicht, deshalb wäre die nächste Abschlags- oder Schlussrechnung des Jahres überhaupt nicht mehr erzeugbar gewesen — die Rechnungsnummerierung wäre von da an kaputt."
decision:
  en:
    - "Correction-invoice rows are excluded from the number-generation scan. The regex is deliberately not loosened to tolerate the suffix."
  de:
    - "Storno-Datensätze werden aus dem Zählerlauf der Nummernvergabe ausgeschlossen. Der reguläre Ausdruck wird bewusst nicht gelockert, um das Suffix zu dulden."
consequences:
  en:
    - "A Storno never consumes a counter value and never creates a gap; the only documented gap remains the one a deleted draft leaves. Loosening the parser instead would let the Storno’s counter re-enter the maximum and couple the two rows’ numbering for no benefit — the parent already owns that counter — and would make a genuinely malformed number fail quietly instead of loudly. It is the same “the mirror row never enters an aggregate” principle that already keeps correction rows out of remaining-quantity sums, and keeping the two rules symmetric is the point."
  de:
    - "Ein Storno verbraucht nie einen Zählerwert und erzeugt nie eine Lücke; die einzige dokumentierte Lücke bleibt die, die ein gelöschter Entwurf hinterlässt. Den Parser stattdessen zu lockern ließe den Zähler des Stornos wieder in das Maximum eingehen und koppelte die Nummerierung der beiden Datensätze ohne Nutzen — der Zähler gehört bereits der Ursprungsrechnung — und ließe eine wirklich fehlerhafte Nummer leise statt laut scheitern. Es ist dasselbe Prinzip „der Spiegel-Datensatz geht nie in eine Summe ein“, das Storno-Datensätze schon aus den Summen der Restmenge heraushält, und die Symmetrie der beiden Regeln ist der Punkt."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0031-correction-invoice-numbers-excluded-from-sequence.md
---
