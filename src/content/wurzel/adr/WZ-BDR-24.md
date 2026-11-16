---
title:
  en: "The offer editor computes MwSt. in the browser, with the server's rounding"
  de: "Der Angebotseditor berechnet die MwSt. im Browser, mit der Rundung des Servers"
case: wurzel
status: accepted
date: 2026-10-04
relatedRequirements: [WZ-R-20]
context:
  en:
    - "An accepted rule from Level 3 kept the offer's on-screen totals net and said the app never computes gross in the browser, so that a legally relevant figure has one source. Grooming then decided the offer editor shows MwSt. and Gesamtbetrag — and neither the grooming review nor my approval noticed that the old rule still stood. The consistency check found it."
  de:
    - "Eine angenommene Regel aus Level 3 hielt die Summen des Angebots am Bildschirm netto und sagte, die App berechne Brutto nie im Browser, damit eine rechtlich relevante Zahl eine einzige Quelle hat. Das Grooming entschied dann, dass der Angebotseditor MwSt. und Gesamtbetrag zeigt — und weder die Grooming-Review noch meine Freigabe bemerkten, dass die alte Regel noch galt. Die Konsistenzprüfung fand es."
decision:
  en:
    - "The offer editor shows MwSt. with its rate and Gesamtbetrag below the net footer, computed in the browser so they follow every line change at once. Browser and server run one shared rounding implementation, so the editor never differs from the preview or the PDF by a cent. The offer cards and the positions table stay net-only."
  de:
    - "Der Angebotseditor zeigt MwSt. mit Satz und Gesamtbetrag unter der Netto-Fußzeile, im Browser berechnet, damit sie jeder Zeilenänderung sofort folgen. Browser und Server nutzen eine gemeinsame Rundungsimplementierung, sodass der Editor nie um einen Cent von Vorschau oder PDF abweicht. Die Angebotskarten und die Positionstabelle bleiben rein netto."
consequences:
  en:
    - "One rounding rule, two callers: the rule has a single implementation in the shared project, which goes beyond the earlier decision to keep business logic on the server. That tension is recorded only as a note for the spec, not as a decision of its own."
    - "Rejected: the server computing the figures after each autosave or on every edit (the AI listed these first), the § 19 note in the editor, and replacing the net footer."
  de:
    - "Eine Rundungsregel, zwei Aufrufer: Die Regel hat eine einzige Implementierung im gemeinsamen Projekt, was über die frühere Entscheidung hinausgeht, Geschäftslogik auf dem Server zu halten. Diese Spannung ist nur als Hinweis für die Spezifikation festgehalten, nicht als eigene Entscheidung."
    - "Verworfen: die Berechnung auf dem Server nach jedem automatischen Speichern oder bei jeder Änderung (die KI nannte diese zuerst), der Hinweis nach § 19 im Editor und das Ersetzen der Netto-Fußzeile."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0024-the-offer-editor-shows-vat-and-gross-computed-in-the-browser.md
---
