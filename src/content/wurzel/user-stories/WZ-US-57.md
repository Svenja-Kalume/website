---
title:
  en: "A service period in the future is refused"
  de: "Ein Leistungszeitraum in der Zukunft wird abgelehnt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "an invoice with a future Leistungszeitraum to be refused"
  de: "dass eine Rechnung mit einem Leistungszeitraum in der Zukunft abgelehnt wird"
soThat:
  en: "a bill never claims work that has not been performed yet"
  de: "eine Rechnung nie Arbeit behauptet, die noch nicht erbracht wurde"
requirement: WZ-R-17
acceptanceCriteria:
  en:
    - "An invoice whose service-period start lies after today is not saved, and the user sees a German message saying the service period may not lie in the future"
    - "The same holds for the service-period end, with the same message"
    - "The existing rule that the end may not lie before the start keeps working alongside the new one"
    - "The rule holds on every screen where a service period can be entered — the invoice editor and both create pages"
    - "Exporting stays blocked while the service period is invalid, exactly as before"
  de:
    - "Eine Rechnung, deren Leistungszeitraum-Beginn nach heute liegt, wird nicht gespeichert, und die Nutzerin sieht eine deutsche Meldung, dass der Leistungszeitraum nicht in der Zukunft liegen darf"
    - "Dasselbe gilt für das Ende des Leistungszeitraums, mit derselben Meldung"
    - "Die bestehende Regel, dass das Ende nicht vor dem Beginn liegen darf, gilt unverändert weiter"
    - "Die Regel gilt auf jedem Bildschirm, auf dem ein Leistungszeitraum eingegeben werden kann — im Rechnungseditor und auf beiden Anlegeseiten"
    - "Der Export bleibt gesperrt, solange der Leistungszeitraum ungültig ist, genau wie zuvor"
codeUrl: Client/Invoices/InvoiceFormModel.cs
priority: should
status: done
aiContribution:
  en: "The AI established that a client-side check alone would not be the fix: the same date reaches the server through more than one screen, so the rule has to hold on the server and on both date fields, not only on the one the tester happened to type into. The narrower reading — fix the field that was walked — was available and was rejected for that reason."
  de: "Die KI stellte fest, dass eine reine Client-Prüfung nicht genügt: Dasselbe Datum erreicht den Server über mehr als einen Bildschirm, die Regel muss also serverseitig und auf beiden Datumsfeldern gelten, nicht nur auf dem, in das der Tester zufällig getippt hat. Die engere Lesart — das begangene Feld reparieren — war verfügbar und wurde aus diesem Grund verworfen."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/124-leistungszeitraum-von-rejects-future-date.md
changes: [WZ-US-40]
---
