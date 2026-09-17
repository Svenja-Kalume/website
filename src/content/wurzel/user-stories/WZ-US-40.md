---
title:
  en: "Record the service period and the payment term"
  de: "Leistungszeitraum und Zahlungsziel erfassen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to record when the work was performed and how many days the customer has to pay"
  de: "festzuhalten, wann die Leistung erbracht wurde und wie viele Tage der Kunde zum Zahlen hat"
soThat:
  en: "the bill is legally complete and both sides can see when the money is due"
  de: "die Rechnung rechtlich vollständig ist und beide Seiten sehen, wann das Geld fällig ist"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "**Zahlungsziel (Tage)** is maintained in the company settings and autosaves like every other settings field; empty means “sofort fällig”, and a value outside 0–365 is rejected with a German message"
    - "The payment term is copied onto the invoice once, at creation — a later change to the setting never changes an existing bill"
    - "Service period from, service period to and the payment term are editable in the invoice editor while the invoice is a draft; an end date before the start is rejected with a German message"
    - "The due date is computed and never stored — invoice date plus payment term — and shows “—” while the draft has no invoice date"
    - "Both invoice lists carry a **Fälligkeitsdatum** column with the same “—” rule"
    - "A service period end that is empty or equal to the start makes the document print a single **Leistungsdatum** instead of a range"
  de:
    - "**Zahlungsziel (Tage)** wird in den Firmeneinstellungen gepflegt und speichert automatisch wie jedes andere Feld dort; leer bedeutet „sofort fällig“, und ein Wert außerhalb 0–365 wird mit einer deutschen Meldung abgelehnt"
    - "Das Zahlungsziel wird einmalig bei der Anlage auf die Rechnung kopiert — eine spätere Änderung der Einstellung verändert eine bestehende Rechnung nie"
    - "Leistungszeitraum von, Leistungszeitraum bis und Zahlungsziel sind im Rechnungseditor änderbar, solange die Rechnung Entwurf ist; ein Ende vor dem Beginn wird mit einer deutschen Meldung abgelehnt"
    - "Das Fälligkeitsdatum wird berechnet und nie gespeichert — Rechnungsdatum plus Zahlungsziel — und zeigt „—“, solange der Entwurf kein Rechnungsdatum hat"
    - "Beide Rechnungslisten führen eine Spalte **Fälligkeitsdatum** mit derselben „—“-Regel"
    - "Ein leeres Leistungszeitraum-Bis oder eines gleich dem Beginn lässt das Dokument ein einzelnes **Leistungsdatum** statt eines Zeitraums drucken"
codeUrl: Server/Invoices/InvoiceDueDate.cs
priority: must
status: done
aiContribution:
  en: "The AI proposed computing the due date rather than storing it — it is always invoice date plus payment term, so a stored copy could only ever be a second place to be wrong — and proposed the same “—” placeholder rule the invoice date already used, so a draft reads consistently everywhere it appears. The business fact behind the story was not the AI’s: the service period is legally required on a German invoice and cannot be inferred from the invoice date, because work done in May is billed in June."
  de: "Die KI schlug vor, das Fälligkeitsdatum zu berechnen statt zu speichern — es ist immer Rechnungsdatum plus Zahlungsziel, eine gespeicherte Kopie wäre also nur ein zweiter Ort, an dem etwas falsch sein kann — und dieselbe „—“-Regel zu verwenden, die das Rechnungsdatum schon nutzte, damit ein Entwurf sich überall gleich liest. Die fachliche Grundlage der Story stammt nicht von der KI: Der Leistungszeitraum ist auf einer deutschen Rechnung gesetzlich verpflichtend und lässt sich nicht aus dem Rechnungsdatum ableiten, denn im Mai geleistete Arbeit wird im Juni abgerechnet."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/083-invoice-service-period-and-payment-terms.md
---
