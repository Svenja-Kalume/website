---
title:
  en: "The check found a rule my approval had missed"
  de: "Die Prüfung fand eine Regel, die meine Freigabe übersehen hatte"
date: 2026-10-04
summary:
  en: "Three days after I decided the offer editor shows the gross total, the readiness check found an accepted rule that still forbade exactly that — and the AI's options for fixing it came in an order I did not follow."
  de: "Drei Tage nachdem ich entschieden hatte, dass der Angebotseditor den Bruttobetrag zeigt, fand die Readiness-Prüfung eine angenommene Regel, die genau das noch verbot — und die Lösungsvorschläge der KI kamen in einer Reihenfolge, der ich nicht gefolgt bin."
case: wurzel
iteration: WZ-0.4.0
tags: [discovery, decision, bdr, offers]
draft: false
body:
  en:
    - "On 1 October, grooming the first block of Level 5, I decided that the offer editor shows VAT (MwSt.) and the gross total on every offer. The grooming had a review pass and my approval, and neither raised a conflict."
    - "On 4 October the consistency workflow ran on that story as its readiness gate. Two of its check agents found the same gap independently: a business decision accepted back in July still said that an offer's on-screen totals stay net and that the app never computes gross in the browser. Nothing had replaced those two lines, so they still read as current rules. Its \"until\" had covered only the offer document, which was long delivered; the on-screen rule had no end date, which is why it survived."
    - "Where the gross figure comes from was my decision. The AI offered three options in this order: the server after each autosave, the server on every edit, the browser. I chose the browser — on condition that it uses the same rounding as the server, so the editor never differs from the preview by a cent. When the AI listed replacing the net footer with a three-line block first, I kept the footer and added only VAT and gross below it."
    - "A rule decided three days earlier had a direct contradiction in the accepted records, and the grooming review and my own approval both missed it. The story needed one full check and two re-checks before it went Ready. One point stays open: a single rounding implementation shared by browser and server goes beyond the architecture decision that puts business logic on the server, and it is recorded only as a note for the specification, not as a decision."
  de:
    - "Am 1. Oktober, beim Grooming des ersten Blocks von Level 5, habe ich entschieden, dass der Angebotseditor auf jedem Angebot die MwSt. und den Bruttobetrag zeigt. Das Grooming hatte einen Review-Durchlauf und meine Freigabe, und keines davon meldete einen Widerspruch."
    - "Am 4. Oktober lief der Konsistenz-Workflow als Readiness-Gate über diese Story. Zwei seiner Prüfagenten fanden unabhängig voneinander dieselbe Lücke: Eine im Juli angenommene Geschäftsentscheidung sagte noch, dass die Summen eines Angebots am Bildschirm netto bleiben und die App Brutto nie im Browser berechnet. Nichts hatte diese beiden Zeilen ersetzt, also lasen sie sich weiter als geltende Regeln. Ihr „bis“ hatte nur das Angebotsdokument betroffen, das längst geliefert war; die Bildschirmregel hatte kein Enddatum, und deshalb hat sie überlebt."
    - "Woher der Bruttobetrag kommt, war meine Entscheidung. Die KI bot drei Möglichkeiten in dieser Reihenfolge an: der Server nach jedem automatischen Speichern, der Server bei jeder Änderung, der Browser. Ich habe den Browser gewählt — unter der Bedingung, dass er dieselbe Rundung wie der Server verwendet, damit der Editor nie um einen Cent von der Vorschau abweicht. Als die KI an erster Stelle vorschlug, die Netto-Fußzeile durch einen dreizeiligen Block zu ersetzen, habe ich die Fußzeile behalten und nur MwSt. und Brutto darunter ergänzt."
    - "Eine drei Tage zuvor getroffene Regel hatte einen direkten Widerspruch in den angenommenen Dokumenten, und sowohl die Grooming-Review als auch meine eigene Freigabe haben ihn übersehen. Die Story brauchte eine vollständige Prüfung und zwei Nachprüfungen, bevor sie Ready wurde. Ein Punkt bleibt offen: Eine gemeinsame Rundungsimplementierung für Browser und Server geht über die Architekturentscheidung hinaus, die Geschäftslogik auf den Server legt, und ist nur als Hinweis für die Spezifikation festgehalten, nicht als Entscheidung."
---
