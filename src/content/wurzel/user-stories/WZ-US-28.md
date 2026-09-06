---
title:
  en: Address intelli-fill on customer create/edit
  de: Adress-Intelli-Fill bei Kunde anlegen/bearbeiten
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: the customer address fields (Street, PostalCode, City) to intelli-fill while I type
  de: dass die Kunden-Adressfelder (Straße, PLZ, Ort) sich während der Eingabe intelligent befüllen
soThat:
  en: I can capture a correct, real address without typing every field by hand
  de: ich eine korrekte, echte Adresse erfassen kann, ohne jedes Feld einzeln von Hand einzugeben
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - Typing in Straße on the customer create/edit form fires an address lookup after a 300ms debounce and at least 3 characters
    - Matching suggestions appear in a dropdown anchored under Straße; selecting one fills Street, PostalCode and City together; all three fields stay independently editable afterwards
    - A manually typed address matching no suggestion is always accepted and saved unchanged; the lookup is biased to Germany and never blocks entry — a failed/timed-out lookup returns an empty list, not an error
  de:
    - Tippen im Straße-Feld des Kunden-Anlegen/Bearbeiten-Formulars löst nach 300ms Debounce und mindestens 3 Zeichen einen Adress-Lookup aus
    - Passende Vorschläge erscheinen in einem unter Straße verankerten Dropdown; die Auswahl befüllt Straße, PLZ und Ort gemeinsam; alle drei Felder bleiben danach unabhängig editierbar
    - Eine manuell eingegebene Adresse ohne Treffer wird immer unverändert akzeptiert und gespeichert; der Lookup ist auf Deutschland ausgerichtet und blockiert nie die Eingabe — ein fehlgeschlagener/zeitüberschrittener Lookup liefert eine leere Liste statt eines Fehlers
codeUrl: Server/Addresses/IAddressLookup.cs
priority: must
status: done
aiContribution:
  en: The AI proposed the Photon geocoder (Komoot's OSM-based, free-for-commercial-use, no API key) over Nominatim, whose usage policy discourages the type-ahead querying this feature needs, and proposed a swappable IAddressLookup interface behind a thin API endpoint so the client never calls a third-party geocoder directly. I confirmed this also builds the reusable AddressFields piece that Story 57 reuses on the project form.
  de: Die KI schlug den Photon-Geocoder vor (Komoots OSM-basierter, für kommerzielle Nutzung kostenloser Dienst ohne API-Key) statt Nominatim, dessen Nutzungsrichtlinie von der für dieses Feature nötigen Type-Ahead-Abfrage abrät, sowie ein austauschbares IAddressLookup-Interface hinter einem schlanken API-Endpunkt, damit der Client nie direkt einen Drittanbieter-Geocoder aufruft. Ich bestätigte, dass dies auch das wiederverwendbare AddressFields-Bauteil liefert, das Story 57 im Projektformular wiederverwendet.
introducedIn: WZ-0.2.0
source: docs/user-stories/055-customer-address-intelli-fill.md
---
