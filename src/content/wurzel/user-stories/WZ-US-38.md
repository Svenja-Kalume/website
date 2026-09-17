---
title:
  en: "Check the printable invoice on screen before issuing it"
  de: "Die druckfertige Rechnung vor dem Stellen am Bildschirm prüfen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to see the exact document the customer will get — sender, recipient, positions, VAT, total, bank details — while the invoice is still an editable draft"
  de: "genau das Dokument zu sehen, das der Kunde erhält — Absender, Empfänger, Positionen, MwSt., Gesamtbetrag, Bankverbindung —, solange die Rechnung noch ein änderbarer Entwurf ist"
soThat:
  en: "a mistake is caught before the bill is issued, not after"
  de: "ein Fehler vor dem Stellen der Rechnung auffällt und nicht danach"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "The preview shows the document as page images in a modal and never issues the invoice: it stays a draft, the invoice date stays empty, nothing is stored, and cancelling leaves no trace"
    - "Preview and exported PDF are rendered from the same document definition, so the layout and every rendered string are identical"
    - "The document title follows the type — **Abschlagsrechnung** or **Schlussrechnung**, never a bare “Rechnung” — and the number line is labelled **Rechnungsnummer**"
    - "With a tax rate set, the total block shows **Nettobetrag**, **MwSt. {rate} %** and **Gesamtbetrag**; the VAT is computed once on the total, never per line; for a Kleinunternehmer the § 19 UStG note renders instead"
    - "On a final invoice only, a **Vorherige Abschlagsrechnungen** block lists the project’s issued, non-cancelled advance invoices — information only, changing no amount on this bill"
    - "Before anything renders, the company-settings gate opens the shared settings form if the sender is incomplete — no invoice document ever renders with a blank sender"
  de:
    - "Die Vorschau zeigt das Dokument als Seitenbilder in einem Modal und stellt die Rechnung nie: Sie bleibt Entwurf, das Rechnungsdatum bleibt leer, nichts wird gespeichert, und Abbrechen hinterlässt keine Spur"
    - "Vorschau und exportiertes PDF werden aus derselben Dokumentdefinition gerendert, Layout und jede gerenderte Zeichenkette sind also identisch"
    - "Der Dokumenttitel folgt der Rechnungsart — **Abschlagsrechnung** oder **Schlussrechnung**, nie ein bloßes „Rechnung“ —, und die Nummernzeile ist mit **Rechnungsnummer** beschriftet"
    - "Mit gesetztem Steuersatz zeigt der Summenblock **Nettobetrag**, **MwSt. {Satz} %** und **Gesamtbetrag**; die Steuer wird einmal auf die Summe gerechnet, nie je Zeile; beim Kleinunternehmer erscheint stattdessen der Hinweis nach § 19 UStG"
    - "Nur auf einer Schlussrechnung listet ein Block **Vorherige Abschlagsrechnungen** die gestellten, nicht stornierten Abschlagsrechnungen des Projekts — rein informativ, ohne einen Betrag dieser Rechnung zu verändern"
    - "Bevor irgendetwas gerendert wird, öffnet die Firmendaten-Schranke das gemeinsame Einstellungsformular, falls der Absender unvollständig ist — kein Rechnungsdokument entsteht je mit leerem Absender"
codeUrl: Server/Documents/InvoiceDocumentModelBuilder.cs
adr: [WZ-ADR-007]
priority: must
status: done
aiContribution:
  en: "The AI proposed computing VAT **once on the total** rather than per line, which removes a whole class of rounding disputes, and proposed formatting every monetary and date value inside the shared model so the preview text and the PDF text cannot drift apart even by a thousands separator. The judgement I kept is the asymmetry between the two actions: a missing tax rate does **not** block the preview, which renders net-only so a bill in progress can still be checked, but it does block the export, because a VAT-registered business must not issue a net-only Rechnung. The AI’s instinct was to gate both the same way."
  de: "Die KI schlug vor, die Umsatzsteuer **einmal auf die Summe** zu rechnen statt je Zeile, was eine ganze Klasse von Rundungsstreitigkeiten beseitigt, und jede Geld- und Datumsangabe im gemeinsamen Modell zu formatieren, damit Vorschautext und PDF-Text nicht einmal im Tausendertrennzeichen auseinanderlaufen können. Die Entscheidung, die ich beibehalten habe, ist die Asymmetrie zwischen beiden Aktionen: Ein fehlender Steuersatz blockiert die **Vorschau nicht** — sie rendert netto, damit eine in Arbeit befindliche Rechnung prüfbar bleibt —, den **Export** aber sehr wohl, denn ein umsatzsteuerpflichtiger Betrieb darf keine reine Nettorechnung stellen. Der Impuls der KI war, beides gleich abzusichern."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/081-invoice-document-preview.md
---
