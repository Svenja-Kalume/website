---
title:
  en: Company settings
  de: Firmeneinstellungen
case: wurzel
asA:
  en: a landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to maintain my company's master data (name, address, contact, tax and bank details) in one place
  de: meine Firmen-Stammdaten (Name, Adresse, Kontakt, Steuer- und Bankdaten) an einem Ort zu pflegen
soThat:
  en: every document I generate carries the correct sender information
  de: jedes von mir erzeugte Dokument die korrekten Absenderdaten trägt
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - A seeded CompanySettings singleton always exists; the Settings screen opens as an edit form, never a create form
    - CompanyName, Street, PostalCode and City are required; owner, phone, email, website, tax number, VAT ID and bank details are optional
    - The form autosaves like every other edit page, with the shared AutosaveStatus indicator and no Save button
    - A Preferences area exposes an Export confirmation toggle (SkipExportConfirmation) that reversibly suppresses the export-confirmation dialog
    - The settings form is a shared component, rendered both on the full Settings page and inside the company-settings gate modal
  de:
    - Ein geseedetes CompanySettings-Singleton existiert immer; der Einstellungen-Bildschirm öffnet als Bearbeiten-Formular, nie als Anlegen-Formular
    - Firmenname, Straße, PLZ und Ort sind Pflicht; Inhaber, Telefon, E-Mail, Website, Steuernummer, USt-IdNr. und Bankdaten sind optional
    - Das Formular speichert automatisch wie jede andere Bearbeiten-Seite, mit dem gemeinsamen AutosaveStatus-Indikator und ohne Speichern-Button
    - Ein Präferenzen-Bereich bietet einen Export-Bestätigung-Schalter (SkipExportConfirmation), der den Export-Bestätigungsdialog reversibel unterdrückt
    - Das Einstellungsformular ist eine gemeinsame Komponente, gerendert sowohl auf der vollen Settings-Seite als auch im Firmeneinstellungen-Gate-Modal
codeUrl: Server/Settings/CompanySettings.cs
priority: must
status: done
aiContribution:
  en: The AI proposed CompanySettings as a seeded singleton with no DocumentNumber and no UpdatedAt (an always-present config row, not a document), and proposed extracting the settings form into a shared component so the full Settings page and the later company-settings gate (Story 77) render one form with one validation path.
  de: Die KI schlug CompanySettings als geseedetes Singleton ohne Dokumentennummer und ohne Änderungsdatum vor (eine immer vorhandene Konfigurationszeile, kein Dokument), sowie die Extraktion des Einstellungsformulars in eine gemeinsame Komponente, damit die volle Settings-Seite und das spätere Firmeneinstellungen-Gate (Story 77) ein Formular mit einem Validierungspfad rendern.
introducedIn: WZ-0.2.0
source: docs/user-stories/076-company-settings.md
---
