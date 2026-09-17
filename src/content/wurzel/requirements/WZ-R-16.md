---
title:
  en: "Bill the work that was actually done"
  de: "Abrechnen, was tatsächlich geleistet wurde"
case: wurzel
businessGoal:
  en: "When more hours or material went into a job than the offer quoted — ordinary in this trade — the owner can still bill it. The bill is not blocked, and the project’s own figures are brought back in line afterwards rather than left contradicting the bill."
  de: "Wenn in einen Auftrag mehr Stunden oder Material geflossen sind als das Angebot vorsah — in diesem Gewerk der Normalfall —, kann der Inhaber das trotzdem abrechnen. Die Rechnung wird nicht blockiert, und die Zahlen des Projekts werden danach nachgezogen, statt der Rechnung zu widersprechen."
fitCriterion:
  en: "An invoice line billing more than a position has left saves successfully, the position’s quantity is raised to the billed total so the remaining quantity is zero rather than negative, and the surface names each raised position together with the number of every open offer that references it."
  de: "Eine Rechnungszeile, die mehr abrechnet als auf einer Position übrig ist, wird erfolgreich gespeichert, die Menge der Position wird auf die abgerechnete Gesamtmenge angehoben, sodass die Restmenge null statt negativ beträgt, und die Oberfläche nennt jede angehobene Position samt der Nummer jedes offenen Angebots, das sie referenziert."
priority: must
status: done
aiContribution:
  en: "The AI implemented the original cap and had good arithmetic reasons for it: without a cap the remaining quantity goes negative and every figure derived from it follows. It was the tester, not the machine, who reported the cap as the defect — a bill that cannot be issued at all is worse than an inconvenient number — and the decision to reverse it is mine. What the AI then contributed was the consequence analysis I asked for: which aggregate each affected figure feeds, that the raise must be one-directional (a position is raised, never lowered), and that open offers referencing a raised position have to be named to the user, because their quoted total silently moved."
  de: "Die KI hat die ursprüngliche Begrenzung umgesetzt und hatte gute rechnerische Gründe dafür: Ohne sie wird die Restmenge negativ, und jede daraus abgeleitete Zahl folgt. Als Fehler gemeldet hat die Begrenzung der Tester, nicht die Maschine — eine Rechnung, die sich gar nicht stellen lässt, ist schlimmer als eine unbequeme Zahl —, und die Entscheidung zur Umkehrung ist meine. Beigetragen hat die KI danach die Folgenanalyse, um die ich gebeten hatte: in welche Summen jede betroffene Zahl eingeht, dass die Anhebung nur in eine Richtung gehen darf (eine Position wird angehoben, nie gesenkt) und dass offene Angebote mit einer angehobenen Position der Nutzerin genannt werden müssen, weil sich ihre Angebotssumme still verändert hat."
introducedIn: WZ-0.3.0-level-4
source: docs/adr/0035-billing-raises-the-position-quantity.md
---

A rule that is correct in the model and wrong at the kerb. The cap on billing above a position's
remaining quantity protected the arithmetic and made the common case — the job that took longer than
quoted — unbillable. Reversing it is the clearest example in this iteration of a business fact
overruling a technically sound design.
