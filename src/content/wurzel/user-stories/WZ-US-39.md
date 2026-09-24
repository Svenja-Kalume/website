---
title:
  en: "One click turns a draft into an issued, stored, locked bill"
  de: "Ein Klick macht aus dem Entwurf eine gestellte, gespeicherte, gesperrte Rechnung"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to generate the invoice PDF and have the bill issued, dated, locked and stored in the same moment"
  de: "das Rechnungs-PDF erzeugen und die Rechnung im selben Moment gestellt, datiert, gesperrt und gespeichert haben"
soThat:
  en: "the file I hand the customer is provably the file the app keeps"
  de: "die Datei, die ich dem Kunden gebe, nachweislich die Datei ist, die die Anwendung aufbewahrt"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "Three gates run before anything renders. The company settings are one gate, checking sender data and tax rate together: a missing value opens the shared settings form, filling it in resumes the export, and only cancelling leaves the invoice a draft. Missing line items and a missing service-period start are hard blocks, each with its own plain-German message. The preview checks the same gate, and both re-evaluate it on every call regardless of entry point"
    - "One click then performs the steps in a single transaction, and the order matters: the invoice date is stamped and the state set to Exported first, so the document is rendered from the locked invoice, and only then are the PDF bytes and page images stored and the update timestamp touched"
    - "The export is both or neither — if any step fails, nothing is committed, the invoice stays a draft with no stored document, and the user can retry"
    - "No confirmation dialog precedes an invoice export from any entry point; the offer’s skip-confirmation setting is neither read nor extended"
    - "On a non-draft invoice, Herunterladen serves the stored bytes unchanged — never a re-render — so the file downloaded years later is byte-identical to the one the customer received"
    - "Export is draft-only; exporting an invoice in any other state returns `Conflict`"
  de:
    - "Vor dem Rendern laufen drei Schranken. Die Firmeneinstellungen sind eine davon und prüfen Absenderdaten und Steuersatz gemeinsam: Fehlt etwas, öffnet das gemeinsame Einstellungsformular, das Ausfüllen setzt den Export fort, und nur Abbrechen lässt die Rechnung als Entwurf zurück. Fehlende Positionen und ein fehlender Beginn des Leistungszeitraums sind harte Sperren mit je eigener deutscher Meldung. Dieselbe Schranke wertet auch die Vorschau aus, und beide prüfen sie bei jedem Aufruf neu, unabhängig vom Einstieg"
    - "Ein Klick führt danach die Schritte in einer Transaktion aus, und die Reihenfolge zählt: Zuerst werden Rechnungsdatum gestempelt und der Status auf Exportiert gesetzt, damit das Dokument aus der gesperrten Rechnung gerendert wird, und erst danach werden PDF-Bytes und Seitenbilder gespeichert und der Änderungszeitstempel aktualisiert"
    - "Der Export gilt ganz oder gar nicht — scheitert ein Schritt, wird nichts festgeschrieben, die Rechnung bleibt Entwurf ohne gespeichertes Dokument, und der Vorgang kann wiederholt werden"
    - "Vor einem Rechnungsexport erscheint von keinem Einstieg aus ein Bestätigungsdialog; die Einstellung zum Überspringen der Angebots-Bestätigung wird weder gelesen noch erweitert"
    - "Bei einer Rechnung, die kein Entwurf mehr ist, liefert Herunterladen die gespeicherten Bytes unverändert — nie eine Neuerzeugung —, sodass die Jahre später geladene Datei byteidentisch zu der des Kunden ist"
    - "Der Export ist nur im Entwurf möglich; in jedem anderen Status antwortet er mit `Conflict`"
codeUrl: Server/Invoices/InvoiceExporter.cs
adr: [WZ-ADR-006]
priority: must
status: done
aiContribution:
  en: "The AI argued against a confirmation dialog before an invoice export, and the argument is what makes it right: a wrongly issued bill is remedied by cancelling it — the legally correct remedy anyway — not by a speed bump that trains the user to click past it."
  de: "Die KI argumentierte gegen einen Bestätigungsdialog vor dem Rechnungsexport, und die Begründung macht es richtig: Eine zu Unrecht gestellte Rechnung wird durch Stornieren geheilt — ohnehin das juristisch richtige Mittel —, nicht durch eine Bremsschwelle, die man sich abgewöhnt zu lesen."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/082-invoice-pdf-generation.md
---
