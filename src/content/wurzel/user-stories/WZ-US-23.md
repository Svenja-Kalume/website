---
title:
  en: Offer PDF generation
  de: Angebots-PDF-Erzeugung
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to export an offer as a professional PDF
  de: ein Angebot als professionelles PDF exportieren zu können
soThat:
  en: I can send the customer a printable quote
  de: ich dem Kunden ein druckbares Angebot senden kann
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - Export is available for an Open offer from the offer editor, the latest-offer card, and the preview modal's Export button
    - Because export locks the offer irreversibly, a confirmation dialog precedes it, with a reversible "Nicht mehr anzeigen" suppression stored on CompanySettings
    - On confirmed export the server renders the shared QuestPDF document, atomically freezes/stores/locks the offer, and names the file Angebot_{OfferNumber}.pdf
    - On an already-exported offer, Herunterladen serves the exact stored PDF bytes — never a re-render, no confirmation, no state change
  de:
    - Export ist für ein offenes Angebot aus dem Angebots-Editor, der Neuestes-Angebot-Karte und dem Export-Button der Vorschau verfügbar
    - Da der Export das Angebot unwiderruflich sperrt, geht ein Bestätigungsdialog voraus, mit einer reversiblen „Nicht mehr anzeigen“-Unterdrückung, gespeichert in CompanySettings
    - Bei bestätigtem Export rendert der Server das gemeinsame QuestPDF-Dokument, friert das Angebot atomar ein/speichert/sperrt es und benennt die Datei Angebot_{OfferNumber}.pdf
    - Bei einem bereits exportierten Angebot liefert Herunterladen exakt die gespeicherten PDF-Bytes — nie ein erneutes Rendering, keine Bestätigung, keine Zustandsänderung
codeUrl: Server/Offers/OfferExporter.cs
priority: must
status: done
aiContribution:
  en: The AI proposed QuestPDF (the ratified server-side engine) render from the exact same document definition as the preview, and proposed storing both the PDF bytes and page images at export time so a later download or read-back never re-renders. I decided the confirmation dialog's suppression preference lives on CompanySettings, reversible from Settings rather than a one-way dismissal.
  de: Die KI schlug vor, dass QuestPDF (die ratifizierte serverseitige Engine) aus derselben Dokumentdefinition wie die Vorschau rendert, sowie PDF-Bytes und Seitenbilder beim Export zu speichern, damit ein späterer Download oder Read-back nie neu rendert. Ich entschied, dass die Unterdrückungs-Präferenz des Bestätigungsdialogs in CompanySettings liegt, reversibel über die Settings statt einer einmaligen Wegklick-Option.
introducedIn: WZ-0.2.0
source: docs/user-stories/060-offer-pdf-generation.md
---
