---
title:
  en: "Cancelling an advance invoice is blocked while a final invoice exists"
  de: "Das Stornieren einer Abschlagsrechnung ist gesperrt, solange eine Schlussrechnung existiert"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "cancelling an advance invoice blocked while a final invoice still stands"
  de: "dass das Stornieren einer Abschlagsrechnung gesperrt ist, solange eine Schlussrechnung besteht"
soThat:
  en: "a frozen Schlussrechnung is never silently invalidated by something cancelled underneath it"
  de: "eine eingefrorene Schlussrechnung nie still ungültig wird, weil darunter etwas storniert wurde"
requirement: WZ-R-14
acceptanceCriteria:
  en:
    - "A cancel request for an advance invoice whose project has a non-cancelled final invoice is rejected server-side with `Conflict`; the server is authoritative"
    - "The Stornieren action is hidden or disabled in that situation, with a German explanation of why"
    - "Cancelling the final invoice first re-enables cancelling the advance"
    - "The guard does not affect projects with no final invoice, where cancellation behaves exactly as before"
  de:
    - "Eine Stornoanfrage für eine Abschlagsrechnung, deren Projekt eine nicht stornierte Schlussrechnung hat, wird serverseitig mit `Conflict` abgelehnt; der Server entscheidet"
    - "Die Aktion Stornieren ist in dieser Lage ausgeblendet oder deaktiviert, mit einer deutschen Begründung"
    - "Wird zuerst die Schlussrechnung storniert, lässt sich die Abschlagsrechnung wieder stornieren"
    - "Die Sperre betrifft keine Projekte ohne Schlussrechnung; dort verhält sich das Stornieren genau wie zuvor"
codeUrl: Server/Invoices/CancelGuard.cs
priority: must
status: done
aiContribution:
  en: "The walk found the hole; the AI found what it really was. A final invoice lists its project’s issued advances as a reference block and is frozen at export — so cancelling an advance underneath it leaves a frozen document referring to a bill that no longer counts, with nothing on screen saying so. It proposed enforcing the ordering on the server rather than only hiding the button, on the same reasoning as every other guard in the invoice chain: what the UI hides is a convenience, and what the server refuses is the rule."
  de: "Der Testdurchlauf fand das Loch; die KI fand, was es wirklich war. Eine Schlussrechnung führt die gestellten Abschlagsrechnungen ihres Projekts als Referenzblock auf und ist beim Export eingefroren — eine darunter stornierte Abschlagsrechnung lässt also ein eingefrorenes Dokument auf eine Rechnung verweisen, die nicht mehr zählt, ohne dass irgendetwas auf dem Bildschirm das sagt. Sie schlug vor, die Reihenfolge serverseitig zu erzwingen statt nur die Schaltfläche auszublenden, mit derselben Begründung wie bei jeder anderen Absicherung der Rechnungsstrecke: Was die Oberfläche verbirgt, ist Bequemlichkeit; was der Server ablehnt, ist die Regel."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/122-cancel-advance-blocked-while-final-exists.md
changes: [WZ-US-46]
---
