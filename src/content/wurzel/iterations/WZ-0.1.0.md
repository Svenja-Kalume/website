---
title:
  en: Level 1 — customers, projects and priced offers
  de: Level 1 — Kunden, Projekte und bepreiste Angebote
case: wurzel
version: "0.1.0"
level: 1
order: 1
date: 2026-07-19
summary:
  en: The first published state of understanding — customers, projects, priced positions, and offers with versions. Invoices, PDF export, company settings and the document preview were deliberately deferred to later levels. All 20 stories in this iteration are Done; nothing Ready or planned is published here.
  de: Der erste veröffentlichte Stand des Verständnisses — Kunden, Projekte, bepreiste Positionen und Angebote mit Versionen. Rechnungen, PDF-Export, Firmeneinstellungen und die Dokumentenvorschau wurden bewusst auf spätere Level verschoben. Alle 20 Stories dieser Iteration sind Done; nichts Ready oder Geplantes wird hier veröffentlicht.
processChanges:
  en:
    - "Requirements came from watching real use, not upfront planning. A recorded walkthrough of the owner clicking customer → project → position → offer, thinking aloud in German, surfaced needs that planning had missed — the habitual comma in prices (locale-independent decimal input) and billing units beyond hours (m², m³, km, t)."
    - "The human owns scope and reins in the AI's reach. Where the AI wanted to model transport pricing in full or add retries around a save that silently failed, the call was to narrow it — a fixed six-value unit enum with deeper pricing written down as out of scope, and a silent zero-INSERT treated as a wiring bug to fix at the root rather than flakiness to paper over. Protecting the MVP was the job."
    - "AI-assisted grooming and delivery, with human judgement at every gate and lessons locked as tests. The AI drafts and spots simplifications — that the Estimation field had quietly become dead once units arrived — the human decides, and what was learned becomes a regression test so it cannot silently return."
  de:
    - "Anforderungen entstanden aus dem Beobachten echter Nutzung, nicht aus Vorabplanung. Ein aufgezeichneter Walkthrough, bei dem der Inhaber sich durch Kunde → Projekt → Position → Angebot klickte und auf Deutsch laut mitdachte, legte Bedürfnisse offen, die die Planung übersehen hatte — das gewohnte Komma in Preisen (locale-unabhängige Dezimaleingabe) und Abrechnungseinheiten jenseits von Stunden (m², m³, km, t)."
    - "Der Mensch besitzt den Scope und zügelt die Reichweite der KI. Wo die KI die Transportpreisbildung voll modellieren oder Retries um ein still fehlschlagendes Speichern legen wollte, lautete die Entscheidung, einzuengen — ein festes Sechs-Werte-Einheiten-Enum mit tieferer Preisbildung als ausdrückliches Nicht-Ziel, und ein stilles Null-INSERT als Verdrahtungsfehler an der Wurzel behandelt statt als Flakiness zu überdecken. Das MVP zu schützen war die Aufgabe."
    - "KI-gestütztes Grooming und Umsetzung, mit menschlichem Urteil an jedem Gate und in Tests festgehaltenen Lehren. Die KI entwirft und erkennt Vereinfachungen — dass das Schätzungs-Feld still überflüssig wurde, sobald es Einheiten gab —, der Mensch entscheidet, und das Gelernte wird zu einem Regressionstest, damit es nicht unbemerkt zurückkehrt."
lessons:
  en:
    - "Write the regression test first. Both the silent autosave zero-INSERT and the dead Estimation field cost time that a test pinning the expected behaviour up front would have saved — the fix was cheap once found; the finding was the expensive part."
    - "Watch the real user sooner and more often. The most valuable Level-1 requirements — comma decimals, non-hour units — came from watching the owner actually work, not from planning."
    - "Write down what is out of scope, don't just say it. Narrowing transport pricing to a fixed enum only held because the deeper case was recorded as an explicit non-goal; the scope decisions that were written down survived, the ones only spoken did not."
  de:
    - "Den Regressionstest zuerst schreiben. Sowohl das stille Null-INSERT beim Autosave als auch das tote Schätzungs-Feld kosteten Zeit, die ein Test, der das erwartete Verhalten vorab festnagelt, gespart hätte — die Korrektur war billig, sobald sie gefunden war; das Finden war der teure Teil."
    - "Früher und öfter der echten Nutzung zusehen. Die wertvollsten Level-1-Anforderungen — Komma-Dezimalzahlen, Einheiten jenseits von Stunden — kamen vom Zusehen bei der echten Arbeit des Inhabers, nicht aus der Planung."
    - "Aufschreiben, was nicht zum Umfang gehört, nicht nur aussprechen. Das Einengen der Transportpreisbildung auf ein festes Enum hielt nur, weil der tiefere Fall als ausdrückliches Nicht-Ziel festgehalten wurde; die aufgeschriebenen Scope-Entscheidungen überlebten, die nur ausgesprochenen nicht."
aiContribution:
  en: "Across Level 1 the AI drafted stories, groomed the domain model and implemented under human gates — but the record that matters is where its proposals were overridden. It wanted to add retries around a save that was silently failing; I treated the zero-INSERT as a wiring bug and we fixed the trigger instead. It wanted to model transport pricing in depth the moment the owner mentioned hauling material; I narrowed it to a fixed six-value unit enum and wrote the rest down as out of scope. During grooming it correctly spotted that the Estimation field had become dead once units arrived, and that simplification was taken. The pattern was consistent: the AI accelerates drafting and catches details, the human owns scope, intent and the root-cause calls."
  de: "Über Level 1 hinweg entwarf die KI Stories, groomte das Domänenmodell und setzte unter menschlichen Gates um — doch was zählt, ist, wo ihre Vorschläge übersteuert wurden. Sie wollte Retries um ein still fehlschlagendes Speichern legen; ich behandelte das Null-INSERT als Verdrahtungsfehler, und wir reparierten stattdessen den Trigger. Sie wollte die Transportpreisbildung tief modellieren, sobald der Inhaber den Materialtransport erwähnte; ich engte das auf ein festes Sechs-Werte-Einheiten-Enum ein und schrieb den Rest als Nicht-Ziel auf. Beim Grooming erkannte sie zu Recht, dass das Schätzungs-Feld überflüssig wurde, sobald es Einheiten gab, und diese Vereinfachung wurde übernommen. Das Muster war durchgängig: Die KI beschleunigt das Entwerfen und erkennt Details, der Mensch besitzt Scope, Absicht und die Entscheidungen zur Grundursache."
---
