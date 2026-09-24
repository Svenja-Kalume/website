---
title:
  en: "The offer shows VAT the same way the invoice does"
  de: "Das Angebot weist die Umsatzsteuer aus wie die Rechnung"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "my offer document to show net, VAT and gross exactly as my invoice document does"
  de: "dass mein Angebotsdokument Netto, MwSt. und Brutto genauso ausweist wie mein Rechnungsdokument"
soThat:
  en: "the customer sees the figure they will later be asked to pay and never wonders why the bill is higher than the quote"
  de: "der Kunde die Zahl sieht, die er später zahlen soll, und sich nie fragt, warum die Rechnung höher ist als das Angebot"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "With a rate set and no small-business flag, the offer’s total block renders Nettobetrag, MwSt. {rate} % and Gesamtbetrag, matching the invoice document character for character"
    - "The label “Gesamtpreis” no longer appears anywhere on the offer document"
    - "For a Kleinunternehmer, no net and no VAT line render: one Gesamtbetrag with the unchanged § 19 UStG note beneath it"
    - "The rate is read live at render time — no field on the offer and no migration — so editing the setting and reopening the preview of the same open offer shows the new rate, with no write to the offer"
    - "The exported PDF’s total block is identical to the preview it was launched from, and the rate in force at export is frozen implicitly in the stored bytes"
    - "An offer exported before this story downloads unchanged, with no VAT lines appearing retroactively"
  de:
    - "Mit gesetztem Satz und ohne Kleinunternehmer-Kennzeichen zeigt der Summenblock des Angebots Nettobetrag, MwSt. {Satz} % und Gesamtbetrag — zeichengenau wie das Rechnungsdokument"
    - "Die Beschriftung „Gesamtpreis“ erscheint nirgends mehr auf dem Angebotsdokument"
    - "Beim Kleinunternehmer erscheinen weder Netto- noch MwSt.-Zeile: ein Gesamtbetrag mit dem unveränderten Hinweis nach § 19 UStG darunter"
    - "Der Satz wird beim Rendern live gelesen — kein Feld am Angebot, keine Migration —, sodass eine geänderte Einstellung beim erneuten Öffnen der Vorschau desselben offenen Angebots den neuen Satz zeigt, ohne dass ins Angebot geschrieben wird"
    - "Der Summenblock des exportierten PDFs ist identisch mit der Vorschau, aus der er gestartet wurde, und der beim Export gültige Satz ist implizit in den gespeicherten Bytes eingefroren"
    - "Ein vor dieser Story exportiertes Angebot lädt unverändert herunter, ohne dass nachträglich MwSt.-Zeilen erscheinen"
codeUrl: Server/Documents/OfferDocumentModelBuilder.cs
adr: [WZ-ADR-007]
priority: must
status: done
aiContribution:
  en: "The AI proposed reading the rate live on the offer rather than copying it as the invoice does, and named the consequence rather than hiding it: an open offer’s gross total moves when the setting is edited. That is acceptable precisely because an open offer is a live document and an exported one is served from stored bytes and cannot move. The criterion I added is the one about offers exported *before* this story: they are protected by construction, since both render paths gate on the offer being open and download serves stored bytes — but protection by construction is an argument, and this story verifies it instead of assuming it."
  de: "Die KI schlug vor, den Satz beim Angebot live zu lesen statt ihn wie bei der Rechnung zu kopieren, und benannte die Folge, statt sie zu verschweigen: Die Bruttosumme eines offenen Angebots verändert sich, wenn die Einstellung geändert wird. Das ist genau deshalb vertretbar, weil ein offenes Angebot ein lebendes Dokument ist und ein exportiertes aus gespeicherten Bytes ausgeliefert wird und sich nicht bewegen kann. Das Kriterium, das ich ergänzt habe, betrifft Angebote, die vor dieser Story exportiert wurden: Sie sind konstruktionsbedingt geschützt, da beide Renderpfade auf den Status „offen“ prüfen und das Herunterladen gespeicherte Bytes liefert — aber Schutz durch Konstruktion ist ein Argument, und diese Story weist ihn nach, statt ihn anzunehmen."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/085-offer-document-vat.md
---
