---
title:
  en: "A cancelled invoice states its state once per row"
  de: "Eine stornierte Rechnung nennt ihren Status einmal je Zeile"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a cancelled invoice to show its state once in the invoice lists"
  de: "dass eine stornierte Rechnung ihren Status in den Rechnungslisten einmal zeigt"
soThat:
  en: "the row reads cleanly instead of repeating itself in two vocabularies"
  de: "die Zeile sich sauber liest, statt sich in zwei Vokabularen zu wiederholen"
requirement: WZ-R-17
acceptanceCriteria:
  en:
    - "A cancelled row shows its state exactly once, in the general invoice list and in the project invoice list"
    - "The STORNIERT marking stays unmistakable, as the cancellation story requires — it is not the half that gets dropped, unless the state badge is restyled to carry the same prominence"
    - "Rows in every other state are unchanged"
    - "Both list components are fixed the same way, so they do not drift apart again"
  de:
    - "Eine stornierte Zeile zeigt ihren Status genau einmal, in der allgemeinen und in der Projekt-Rechnungsliste"
    - "Die Kennzeichnung STORNIERT bleibt unmissverständlich, wie die Storno-Story es verlangt — sie ist nicht die Hälfte, die entfällt, es sei denn, das Status-Kennzeichen wird auf dieselbe Auffälligkeit gebracht"
    - "Zeilen in jedem anderen Status bleiben unverändert"
    - "Beide Listenkomponenten werden gleich korrigiert, damit sie nicht erneut auseinanderlaufen"
codeUrl: Client/Invoices/InvoiceListPage.razor
priority: should
status: done
aiContribution:
  en: "A cosmetic finding with a real constraint underneath, and the AI wrote the constraint into the criterion rather than just removing the duplicate: the cancellation story requires the STORNIERT marking to be unmissable, so *which* of the two the fix drops is not a free choice. Either the prominent marking stays, or the state badge is restyled to carry the same weight — quietly deleting the loud one would have satisfied this story and broken the earlier one."
  de: "Ein kosmetischer Befund mit einer echten Bedingung darunter — und die KI schrieb die Bedingung ins Kriterium, statt nur das Doppelte zu entfernen: Die Storno-Story verlangt, dass die Kennzeichnung STORNIERT nicht zu übersehen ist, also ist es keine freie Wahl, *welche* der beiden Angaben entfällt. Entweder bleibt die auffällige Kennzeichnung, oder das Status-Kennzeichen erhält dasselbe Gewicht — die laute still zu löschen hätte diese Story erfüllt und die frühere gebrochen."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/119-cancelled-invoice-state-shown-once.md
changes: [WZ-US-44, WZ-US-45]
---
