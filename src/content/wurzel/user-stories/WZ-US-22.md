---
title:
  en: Offer document preview
  de: Angebotsvorschau
case: wurzel
asA:
  en: a landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to preview the printable offer document on screen before I export it
  de: das druckbare Angebotsdokument vor dem Export am Bildschirm vorschauen zu können
soThat:
  en: I can check it looks correct and professional exactly as the customer will receive it
  de: ich prüfen kann, dass es korrekt und professionell aussieht — genau so, wie der Kunde es erhält
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - A Preview button opens the offer document, for Open offers only, from the offer editor and the project view's latest-offer card
    - The preview renders as page images inside a modal, generated server-side from the same QuestPDF document definition later used for export, so it is genuinely WYSIWYG
    - Before rendering, a company-settings gate blocks Preview/Export until CompanyName, Street, PostalCode and City are filled — no document ever renders with a blank sender
    - The document shows correct company and customer data (sender block/recipient) and correct line items and totals, with German currency/date formatting applied in the shared model
    - Preview and Export are blocked with a message if the offer has no eligible positions
  de:
    - Ein Vorschau-Button öffnet das Angebotsdokument, nur für offene Angebote, aus dem Angebots-Editor und der Neuestes-Angebot-Karte in der Projektansicht
    - Die Vorschau rendert als Seitenbilder in einem Modal, serverseitig aus derselben QuestPDF-Dokumentdefinition erzeugt, die später der Export nutzt — echtes WYSIWYG
    - Vor dem Rendern blockiert ein Firmeneinstellungen-Gate Vorschau/Export, bis Firmenname, Straße, PLZ und Ort ausgefüllt sind — nie entsteht ein Dokument mit leerem Absender
    - Das Dokument zeigt korrekte Firmen- und Kundendaten (Briefkopf/Empfänger) sowie korrekte Positionen und Summen, mit deutscher Währungs-/Datumsformatierung im gemeinsamen Modell
    - Vorschau und Export werden mit einer Meldung blockiert, wenn das Angebot keine berechtigten Positionen enthält
codeUrl: Server/Documents/OfferDocumentModelBuilder.cs
priority: must
status: done
aiContribution:
  en: The AI proposed rendering the preview as server-generated page images (QuestPDF GenerateImages, ~150 DPI PNGs) rather than an inline PDF or HTML iframe, so the same layout renders identically on Windows and Android and deploys safely on IONOS; and proposed the company-settings gate that blocks any document render until required sender fields exist. I confirmed the preview and PDF must share one document-model definition rather than two similar ones.
  de: Die KI schlug vor, die Vorschau als serverseitig erzeugte Seitenbilder (QuestPDF GenerateImages, ~150-DPI-PNGs) statt als Inline-PDF oder HTML-iframe zu rendern, damit dasselbe Layout auf Windows und Android identisch aussieht und auf IONOS sicher deploybar ist; außerdem schlug sie das Firmeneinstellungen-Gate vor, das jedes Dokument-Rendering blockiert, bis Pflicht-Absenderfelder existieren. Ich bestätigte, dass Vorschau und PDF sich ein Dokumentmodell teilen müssen statt zwei ähnliche zu pflegen.
introducedIn: WZ-0.2.0
source: docs/user-stories/077-offer-document-preview.md
---
