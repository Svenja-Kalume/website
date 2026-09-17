---
title:
  en: "A fully-billed project says so \u2014 and the greyed-out half does not ship"
  de: "Ein fertig abgerechnetes Projekt sagt es \u2014 und die ausgegraute H\u00e4lfte kommt nicht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a project with nothing left to bill to tell me so, instead of handing me a form that looks empty for no reason"
  de: "dass ein Projekt ohne Abrechenbares mir das sagt, statt mir ein Formular hinzustellen, das grundlos leer wirkt"
soThat:
  en: "I know the job is fully billed rather than suspecting the application has lost my positions"
  de: "ich wei\u00df, dass der Auftrag vollst\u00e4ndig abgerechnet ist, statt zu vermuten, die Anwendung habe meine Positionen verloren"
requirement: WZ-R-16
acceptanceCriteria:
  en:
    - "A project whose positions are all fully billed shows the message **Keine offenen Positionen zur Abrechnung vorhanden** on the Abschlagsrechnung form, and nothing is persisted"
    - "The message had been gated on an empty item list, so a fully-billed project \u2014 which has items, all of them settled \u2014 never saw it; that is the half this story fixed and it was verified in the field on 2026-09-05"
    - "Eligibility is derived live and never stored, so cancelling an invoice returns its billed quantity and a previously fully-billed position becomes selectable again"
    - "**The greyed-out half is explicitly not delivered.** The story asked for fully-billed positions to stay visible and greyed out rather than hidden, and neither form satisfied it: the Schlussrechnung form hid the row entirely, and the Abschlagsrechnung form showed it without it reading as disabled"
    - "Rather than shape the current forms to the wording, the decision taken during that session was that **both forms hide fully-billed rows knowingly** until the invoice position forms are redesigned. The checklist criterion stays unticked to say so, and a backlog story owns restoring it and extending it to the invoice edit views"
  de:
    - "Ein Projekt, dessen Positionen alle vollst\u00e4ndig abgerechnet sind, zeigt im Formular der Abschlagsrechnung die Meldung **Keine offenen Positionen zur Abrechnung vorhanden**, und nichts wird gespeichert"
    - "Die Meldung h\u00e4ng bislang daran, dass die Positionsliste leer ist \u2014 ein fertig abgerechnetes Projekt, das Positionen hat und sie alle beglichen hat, sah sie deshalb nie; das ist die H\u00e4lfte, die diese Story behoben hat, best\u00e4tigt im Feld am 05.09.2026"
    - "Die Abrechenbarkeit wird live abgeleitet und nie gespeichert: Das Stornieren einer Rechnung gibt ihre abgerechnete Menge zur\u00fcck, und eine zuvor voll abgerechnete Position wird wieder ausw\u00e4hlbar"
    - "**Die ausgegraute H\u00e4lfte wird ausdr\u00fccklich nicht geliefert.** Die Story verlangte, vollst\u00e4ndig abgerechnete Positionen sichtbar und ausgegraut zu lassen statt sie auszublenden, und kein Formular erf\u00fcllte das: Das Schlussrechnungs-Formular blendete die Zeile ganz aus, das Abschlagsrechnungs-Formular zeigte sie, ohne dass sie als deaktiviert lesbar war"
    - "Statt die heutigen Formulare der Formulierung anzupassen, wurde in dieser Sitzung entschieden, dass **beide Formulare vollst\u00e4ndig abgerechnete Zeilen wissentlich ausblenden**, bis die Rechnungs-Positionsformulare neu gestaltet werden. Das Checklisten-Kriterium bleibt deshalb ungehakt, und eine Backlog-Story verantwortet die Wiederherstellung samt Ausweitung auf die Bearbeitungsansichten der Rechnung"
codeUrl: Client/Invoices/InvoicePositionSelector.razor
priority: must
status: done
aiContribution:
  en: "The clearest record in this iteration of the AI being wrong and being caught by a human walk rather than by another review. On 2026-09-04 it assessed the greyed-out finding as a **false positive** and closed it before any work started. The second walk found the opposite: the Schlussrechnung form hid the row outright and the Abschlagsrechnung form showed it without it reading as disabled \u2014 so neither form met the criterion, and the false-positive verdict was simply wrong. That verdict is kept here rather than rewritten away, because it is the evidence: an agent reading the code concluded the behaviour was correct, and opening the application took seconds to disprove it. The decision that followed is mine and is deliberately the uncomfortable one \u2014 the forms keep hiding the rows and the criterion stays unticked, rather than the wording being bent to match what shipped. A backlog story owns restoring it with the form redesign."
  de: "Der klarste Beleg dieser Iteration daf\u00fcr, dass die KI falsch lag und von einem menschlichen Durchgang ertappt wurde statt von einer weiteren Review. Am 04.09.2026 bewertete sie den Befund zur ausgegrauten Darstellung als **Falschmeldung** und schloss ihn, bevor Arbeit begann. Der zweite Durchgang fand das Gegenteil: Das Schlussrechnungs-Formular blendete die Zeile ganz aus, das Abschlagsrechnungs-Formular zeigte sie, ohne dass sie als deaktiviert lesbar war \u2014 kein Formular erf\u00fcllte das Kriterium, und das Urteil \u201eFalschmeldung\u201c war schlicht falsch. Dieses Urteil bleibt hier stehen statt weggeschrieben zu werden, denn es ist der Beleg: Ein Agent las den Code und schloss auf korrektes Verhalten, und das \u00d6ffnen der Anwendung widerlegte es in Sekunden. Die Entscheidung danach ist meine und bewusst die unbequeme \u2014 die Formulare blenden die Zeilen weiter aus, und das Kriterium bleibt ungehakt, statt die Formulierung an das Ausgelieferte zu biegen. Eine Backlog-Story verantwortet die Wiederherstellung zusammen mit der Neugestaltung der Formulare."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/120-fully-billed-positions-visible-and-empty-state.md
changes: [WZ-US-36]
---
