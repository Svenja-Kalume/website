---
title:
  en: Create a customer
  de: Einen Kunden anlegen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to create a customer with their contact data
  de: einen Kunden mit seinen Kontaktdaten anzulegen
soThat:
  en: I can assign offers to them later
  de: ich ihm später Angebote zuordnen kann
requirement: WZ-R-01
acceptanceCriteria:
  en:
    - Required fields are Vorname, Nachname, Straße, PLZ and Ort; Firma, Telefon, E-Mail and Notizen are optional
    - CustomerNumber is generated automatically as yyyy-nnn (yearly reset), with an invisible server retry on a unique conflict
    - CreatedAt is set automatically and never shown; the customer appears in the list immediately
  de:
    - Pflichtfelder sind Vorname, Nachname, Straße, PLZ und Ort; Firma, Telefon, E-Mail und Notizen sind optional
    - Die Kundennummer wird automatisch als yyyy-nnn erzeugt (jährlicher Reset), mit unsichtbarem Server-Retry bei Konflikt
    - Das Erstelldatum wird automatisch gesetzt und nie angezeigt; der Kunde erscheint sofort in der Liste
status: done
aiContribution:
  en: The AI proposed the auto-number with silent retry; I insisted the required address fields can always be entered manually so a customer is creatable without any external lookup.
  de: Die KI schlug die Auto-Nummer mit stillem Retry vor; ich bestand darauf, dass die Pflicht-Adressfelder stets manuell eingebbar sind, damit ein Kunde ohne externen Lookup anlegbar ist.
---
