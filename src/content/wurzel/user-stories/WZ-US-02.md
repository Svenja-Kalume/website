---
title:
  en: Edit a customer
  de: Einen Kunden bearbeiten
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to edit a customer's data
  de: die Daten eines Kunden zu bearbeiten
soThat:
  en: their contact details stay current everywhere they appear
  de: seine Kontaktdaten überall aktuell bleiben, wo er erscheint
requirement: WZ-R-01
acceptanceCriteria:
  en:
    - The form is pre-filled; Kundennummer and Erstelldatum are read-only
    - The same validation as create applies; changes are reflected everywhere the customer shows
    - Delete is not part of Level 1
  de:
    - Das Formular ist vorbefüllt; Kundennummer und Erstelldatum sind schreibgeschützt
    - Es gilt dieselbe Validierung wie beim Anlegen; Änderungen wirken überall, wo der Kunde erscheint
    - Löschen ist nicht Teil von Level 1
status: done
aiContribution:
  en: The AI reused the create form for editing with the identity fields locked; I confirmed leaving delete out of Level 1 to keep the data model safe.
  de: Die KI verwendete das Anlege-Formular fürs Bearbeiten wieder, mit gesperrten Identitätsfeldern; ich bestätigte, Löschen aus Level 1 herauszulassen, um das Datenmodell sicher zu halten.
introducedIn: WZ-0.1.0
---
