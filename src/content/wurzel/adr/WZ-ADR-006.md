---
title:
  en: "Generating the PDF is the act of issuing — no document has a Sent state"
  de: "Das Erzeugen des PDFs ist das Stellen — kein Dokument hat einen Status „Versendet“"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-12, WZ-R-13]
context:
  en:
    - "Both documents need a point at which they stop being editable and become something the customer holds. The conventional modelling instinct is a `Sent` state the user sets by hand."
  de:
    - "Beide Dokumente brauchen einen Punkt, an dem sie nicht mehr bearbeitbar sind und zu etwas werden, das der Kunde in Händen hält. Der übliche Modellierungsreflex ist ein Status `Sent`, den der Nutzer von Hand setzt."
decision:
  en:
    - "`Draft → Exported` happens when, and only when, the PDF is generated. There is no manual “mark as sent” and neither offers nor invoices carry a `Sent` state. One click renders the document, stores it, stamps the invoice date, flips the state and touches the update timestamp — as a single transaction, both or neither. Previewing never issues."
  de:
    - "`Entwurf → Exportiert` geschieht dann und nur dann, wenn das PDF erzeugt wird. Es gibt kein manuelles „als versendet markieren“, und weder Angebote noch Rechnungen tragen einen Status „Versendet“. Ein Klick rendert das Dokument, speichert es, setzt das Rechnungsdatum, wechselt den Status und aktualisiert den Änderungszeitstempel — in einer einzigen Transaktion, beides oder nichts. Die Vorschau stellt niemals ein Dokument aus."
consequences:
  en:
    - "The PDF is the only artefact that can reach the customer, so no route to *issued* bypasses it. A manual marker could only produce states the data cannot justify: an issued bill with no file and no date, or a “sent” flag asserting a delivery the app never observed. The app can therefore never hold a bill marked *Exportiert* with no document, nor a document in the customer’s hands while the app still calls it *Entwurf*. Unlike the offer export there is no confirmation dialog — a wrongly issued bill is remedied by cancelling it, which is the legally correct remedy anyway, not by a speed bump."
  de:
    - "Das PDF ist das einzige Artefakt, das den Kunden erreichen kann; kein Weg zur *gestellten* Rechnung führt daran vorbei. Eine manuelle Markierung könnte nur Zustände erzeugen, die die Daten nicht rechtfertigen: eine gestellte Rechnung ohne Datei und ohne Datum, oder ein Kennzeichen „versendet“, das eine Zustellung behauptet, die die Anwendung nie beobachtet hat. Die Anwendung kann deshalb nie eine als *Exportiert* markierte Rechnung ohne Dokument halten und nie ein Dokument beim Kunden, das sie selbst noch *Entwurf* nennt. Anders als beim Angebotsexport gibt es keinen Bestätigungsdialog — eine irrtümlich gestellte Rechnung wird storniert, und das ist ohnehin der rechtlich richtige Weg, keine Bremsschwelle davor."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0022-exporting-is-sending.md
---
