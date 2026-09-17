---
title:
  en: "Issue a bill a German tax office accepts"
  de: "Eine Rechnung stellen, die das Finanzamt akzeptiert"
case: wurzel
businessGoal:
  en: "The owner can turn a project’s completed work into an advance or final invoice and hand the customer a document that is a valid German Rechnung — carrying the service period, the payment term and due date, and either VAT broken out as net, rate, tax amount and gross, or the § 19 UStG note for a Kleinunternehmer."
  de: "Der Inhaber kann die erbrachte Arbeit eines Projekts in eine Abschlags- oder Schlussrechnung überführen und dem Kunden ein Dokument übergeben, das eine gültige deutsche Rechnung ist — mit Leistungszeitraum, Zahlungsziel und Fälligkeitsdatum sowie entweder ausgewiesener Umsatzsteuer aus Nettobetrag, Steuersatz, Steuerbetrag und Gesamtbetrag oder dem Hinweis nach § 19 UStG für Kleinunternehmer."
fitCriterion:
  en: "A tax advisor reads one exported PDF and finds, without asking a question: Rechnungsnummer, Rechnungsdatum, Fälligkeitsdatum, Leistungszeitraum, the document title naming Abschlagsrechnung or Schlussrechnung, and either Nettobetrag / Steuersatz / MwSt.-Betrag / Gesamtbetrag or the § 19 UStG note — never a net-only total presented as the amount due."
  de: "Ein Steuerberater liest ein exportiertes PDF und findet ohne Rückfrage: Rechnungsnummer, Rechnungsdatum, Fälligkeitsdatum, Leistungszeitraum, den Dokumenttitel Abschlagsrechnung oder Schlussrechnung sowie entweder Nettobetrag, Steuersatz, MwSt.-Betrag und Gesamtbetrag oder den Hinweis nach § 19 UStG — nie eine reine Nettosumme, die als Zahlbetrag auftritt."
priority: must
status: done
aiContribution:
  en: "The AI proposed rendering the invoice from the same document definition as the on-screen preview, so the two can never diverge, and proposed copying the tax rate onto the invoice at creation rather than reading it live — a bill must not change its tax because a setting changed afterwards. The decision that VAT was required at all was not a technical one and was not the AI’s: the stakeholder intake found a net-only bill to be the biggest buyer-hesitation gap, because a customer cannot deduct it. I also ruled that the offer document would follow in a story of its own rather than in this one, since changing an already-shipped document is its own risk surface."
  de: "Die KI schlug vor, die Rechnung aus derselben Dokumentdefinition zu rendern wie die Bildschirmvorschau, damit beide nie auseinanderlaufen, und den Steuersatz bei der Anlage auf die Rechnung zu kopieren statt ihn live zu lesen — eine Rechnung darf ihre Steuer nicht ändern, weil sich später eine Einstellung ändert. Die Entscheidung, dass überhaupt Umsatzsteuer nötig ist, war keine technische und nicht die der KI: Das Stakeholder-Gespräch ergab, dass eine reine Nettorechnung die größte Kaufhürde ist, weil der Kunde sie nicht absetzen kann. Ich habe zudem entschieden, dass das Angebotsdokument in einer eigenen Story nachzieht, weil die Änderung eines bereits ausgelieferten Dokuments ein eigenes Risiko ist."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0023-invoice-document-carries-vat.md
---

The invoice chain's reason for existing. Level 1 and Level 2 could quote a job; nothing could
bill it. This requirement covers the two invoice types, the shared document, its VAT treatment, the
service period and payment terms, and the PDF that issues the bill — plus the offer document
catching up with the same VAT presentation, so a quote and the matching bill do not contradict each
other in front of the customer.
