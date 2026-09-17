---
title:
  en: "A refusal says which field, and why"
  de: "Eine Ablehnung nennt das Feld und den Grund"
case: wurzel
businessGoal:
  en: "When the application refuses to save or blocks an action, the owner is told in plain German which field is at fault and what is wrong with it, in the same visual form everywhere — so a refusal is something to act on rather than something to decode."
  de: "Wenn die Anwendung das Speichern verweigert oder eine Aktion blockiert, erfährt der Inhaber in klarem Deutsch, welches Feld betroffen ist und was daran falsch ist — überall in derselben visuellen Form, damit eine Ablehnung etwas ist, worauf man reagieren kann, statt etwas, das entschlüsselt werden muss."
fitCriterion:
  en: "Every validation message in the app renders in one shared presentation and highlights the field it refers to; a service period dated in the future is refused by the server with a German message naming the field; and a cancelled invoice states its state exactly once per list row rather than twice in two vocabularies."
  de: "Jede Validierungsmeldung der Anwendung erscheint in einer gemeinsamen Darstellung und hebt das Feld hervor, auf das sie sich bezieht; ein in der Zukunft liegender Leistungszeitraum wird serverseitig mit einer deutschen Meldung abgelehnt, die das Feld benennt; und eine stornierte Rechnung nennt ihren Zustand je Listenzeile genau einmal statt zweimal in zwei Vokabularen."
priority: should
status: done
aiContribution:
  en: "These came out of the walk as separate cosmetic findings, and the AI’s proposal was to fix each where it was seen. I grouped them instead, because the common cause is not cosmetic: a message the user has learned to skim is a message that will be skimmed when it matters. The AI’s substantive contribution was on the service-period rule — it established that the client-side check alone was not the fix, since the same date reaches the server through other paths, and the rule had to hold on both dates and on the server."
  de: "Diese Punkte kamen aus dem Testdurchlauf als getrennte kosmetische Befunde, und der Vorschlag der KI war, jeden dort zu beheben, wo er gesehen wurde. Ich habe sie stattdessen gruppiert, denn die gemeinsame Ursache ist nicht kosmetisch: Eine Meldung, die man zu überfliegen gelernt hat, wird auch dann überflogen, wenn sie zählt. Der inhaltliche Beitrag der KI betraf die Leistungszeitraum-Regel — sie stellte fest, dass die clientseitige Prüfung allein nicht genügt, weil dasselbe Datum den Server auch auf anderen Wegen erreicht, und die Regel für beide Datumsfelder und serverseitig gelten muss."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/125-validation-messages-render-consistently.md
---

Three findings from the Level-3 walks that share one cause: the application knew what was wrong
and did not say it in a form the user could use. Grouping them as one requirement is a judgement —
individually each reads as polish, together they are whether the app can be trusted to explain
itself.
