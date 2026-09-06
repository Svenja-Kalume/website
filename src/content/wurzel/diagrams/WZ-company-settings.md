---
title:
  en: "Company settings — the entities behind a document"
  de: "Firmeneinstellungen — die Entitäten hinter einem Dokument"
case: wurzel
type: uml
tool: Mermaid
caption:
  en: "CompanySettings is a seeded singleton, not a document: one row, always present, no DocumentNumber, edited on a Settings screen that is always an edit form. It supplies the sender block of every generated document; the export writes the rendered result to OfferExport."
  de: "Die Firmeneinstellungen sind ein initial angelegtes Singleton, kein Dokument: eine Zeile, immer vorhanden, ohne Dokumentennummer, gepflegt auf einer Einstellungsseite, die immer ein Bearbeitungsformular ist. Sie liefern den Briefkopf jedes erzeugten Dokuments; der Export schreibt das gerenderte Ergebnis nach OfferExport."
aiContribution:
  en: "Field list and the singleton/no-DocumentNumber rule taken from story 76's own entity table; the deferred fields (DefaultTaxRate, DefaultPaymentTermDays) are left out because the story records them as out of scope — the AI did not fill the gap with a plausible-looking entity."
  de: "Feldliste und die Singleton-/keine-Dokumentennummer-Regel stammen aus der Entitätentabelle von Story 76; die zurückgestellten Felder (DefaultTaxRate, DefaultPaymentTermDays) fehlen, weil die Story sie als Nicht-Ziel festhält — die KI hat die Lücke nicht mit einer plausibel wirkenden Entität gefüllt."
introducedIn: WZ-0.2.0
source: docs/user-stories/076-company-settings.md
code:
  en: |
    classDiagram
      CompanySettings ..> OfferDocument : supplies the sender block
      Offer ..> OfferDocument : rendered as
      OfferDocument --> OfferExport : stored on export
      class CompanySettings {
        <<seeded singleton>>
        CompanyName (required)
        Street / PostalCode / City (required)
        OwnerName / Phone / Email / Website
        TaxNumber / VatId
        Iban / Bic / BankName
        SkipExportConfirmation (preference)
        CreatedAt (server-set)
        no DocumentNumber
      }
      class OfferDocument {
        <<shared model>>
        Sender from CompanySettings
        Recipient from Customer
        Line items read live via OfferItem
        NetAmount / German formatting
      }
      class OfferExport {
        <<write-once>>
        OfferId / FileName
        PdfBytes (the file that was sent)
        PageImages (the read-only view)
        ExportedAt
      }
  de: |
    classDiagram
      CompanySettings ..> OfferDocument : liefert den Briefkopf
      Offer ..> OfferDocument : gerendert als
      OfferDocument --> OfferExport : beim Export gespeichert
      class CompanySettings {
        <<initial angelegtes Singleton>>
        Firmenname (Pflicht)
        Straße / PLZ / Ort (Pflicht)
        Inhaber / Telefon / E-Mail / Website
        Steuernummer / USt-IdNr
        IBAN / BIC / Bankname
        Export-Bestätigung (Präferenz)
        Erstelldatum (serverseitig)
        keine Dokumentennummer
      }
      class OfferDocument {
        <<gemeinsames Modell>>
        Absender aus den Firmeneinstellungen
        Empfänger aus dem Kunden
        Positionen live über die Angebotsposition
        Nettobetrag / deutsche Formatierung
      }
      class OfferExport {
        <<einmalig geschrieben>>
        Angebot / Dateiname
        PDF-Bytes (die versendete Datei)
        Seitenbilder (die nur lesbare Ansicht)
        Exportdatum
      }
---
