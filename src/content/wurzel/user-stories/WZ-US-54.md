---
title:
  en: "A fully-billed project says so — and the greyed-out half does not ship"
  de: "Ein fertig abgerechnetes Projekt sagt es — und die ausgegraute Hälfte kommt nicht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a project with nothing left to bill to tell me so, instead of handing me a form that looks empty for no reason"
  de: "dass ein Projekt ohne Abrechenbares mir das sagt, statt mir ein Formular hinzustellen, das grundlos leer wirkt"
soThat:
  en: "I know the job is fully billed rather than suspecting the application has lost my positions"
  de: "ich weiß, dass der Auftrag vollständig abgerechnet ist, statt zu vermuten, die Anwendung habe meine Positionen verloren"
requirement: WZ-R-16
acceptanceCriteria:
  en:
    - "A project whose positions are all fully billed shows the message Keine offenen Positionen zur Abrechnung vorhanden on the Abschlagsrechnung form, and nothing is persisted"
    - "The message had been gated on an empty item list, so a fully-billed project — which has items, all of them settled — never saw it; that is the half this story fixed and it was verified in the field on 2026-09-05"
    - "Eligibility is derived live and never stored, so cancelling an invoice returns its billed quantity and a previously fully-billed position becomes selectable again"
    - "The greyed-out half is explicitly not delivered. The story asked for fully-billed positions to stay visible and greyed out rather than hidden, and neither form satisfied it: the Schlussrechnung form hid the row entirely, and the Abschlagsrechnung form showed it without it reading as disabled"
    - "Rather than shape the current forms to the wording, the decision taken during that session was that both forms hide fully-billed rows knowingly until the invoice position forms are redesigned. The checklist criterion stays unticked to say so, and a backlog story owns restoring it and extending it to the invoice edit views"
  de:
    - "Ein Projekt, dessen Positionen alle vollständig abgerechnet sind, zeigt im Formular der Abschlagsrechnung die Meldung Keine offenen Positionen zur Abrechnung vorhanden, und nichts wird gespeichert"
    - "Die Meldung hing bislang daran, dass die Positionsliste leer war — ein fertig abgerechnetes Projekt, das Positionen hat und sie alle beglichen hat, sah sie deshalb nie; das ist die Hälfte, die diese Story behoben hat, bestätigt im Feld am 05.09.2026"
    - "Die Abrechenbarkeit wird live abgeleitet und nie gespeichert: Das Stornieren einer Rechnung gibt ihre abgerechnete Menge zurück, und eine zuvor voll abgerechnete Position wird wieder auswählbar"
    - "Die ausgegraute Hälfte wird ausdrücklich nicht geliefert. Die Story verlangte, vollständig abgerechnete Positionen sichtbar und ausgegraut zu lassen statt sie auszublenden, und kein Formular erfüllte das: Das Schlussrechnungs-Formular blendete die Zeile ganz aus, das Abschlagsrechnungs-Formular zeigte sie, ohne dass sie als deaktiviert lesbar war"
    - "Statt die heutigen Formulare der Formulierung anzupassen, wurde in dieser Sitzung entschieden, dass beide Formulare vollständig abgerechnete Zeilen wissentlich ausblenden, bis die Rechnungs-Positionsformulare neu gestaltet werden. Das Checklisten-Kriterium bleibt deshalb ungehakt, und eine Backlog-Story verantwortet die Wiederherstellung samt Ausweitung auf die Bearbeitungsansichten der Rechnung"
codeUrl: Client/Invoices/InvoicePositionSelector.razor
priority: must
status: done
aiContribution:
  en: "The clearest record in this iteration of the AI being wrong and being caught by a human walk rather than by another review. On 2026-09-04 it assessed the greyed-out finding as a false positive and closed it before any work started. The second walk found the opposite: the Schlussrechnung form hid the row outright and the Abschlagsrechnung form showed it without it reading as disabled — so neither form met the criterion, and the false-positive verdict was simply wrong. That verdict is kept here rather than rewritten away, because it is the evidence: an agent reading the code concluded the behaviour was correct, and opening the application took seconds to disprove it. The decision that followed is mine and is deliberately the uncomfortable one — the forms keep hiding the rows and the criterion stays unticked, rather than the wording being bent to match what shipped. A backlog story owns restoring it with the form redesign."
  de: "Der klarste Beleg dieser Iteration dafür, dass die KI falsch lag und von einem menschlichen Durchgang ertappt wurde statt von einer weiteren Review. Am 04.09.2026 bewertete sie den Befund zur ausgegrauten Darstellung als Falschmeldung und schloss ihn, bevor Arbeit begann. Der zweite Durchgang fand das Gegenteil: Das Schlussrechnungs-Formular blendete die Zeile ganz aus, das Abschlagsrechnungs-Formular zeigte sie, ohne dass sie als deaktiviert lesbar war — kein Formular erfüllte das Kriterium, und das Urteil „Falschmeldung“ war schlicht falsch. Dieses Urteil bleibt hier stehen statt weggeschrieben zu werden, denn es ist der Beleg: Ein Agent las den Code und schloss auf korrektes Verhalten, und das Öffnen der Anwendung widerlegte es in Sekunden. Die Entscheidung danach ist meine und bewusst die unbequeme — die Formulare blenden die Zeilen weiter aus, und das Kriterium bleibt ungehakt, statt die Formulierung an das Ausgelieferte zu biegen. Eine Backlog-Story verantwortet die Wiederherstellung zusammen mit der Neugestaltung der Formulare."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/120-fully-billed-positions-visible-and-empty-state.md
changes: [WZ-US-36]
---
