---
title:
  en: Project address (Abweichende Projektadresse)
  de: Abweichende Projektadresse
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: each project to optionally carry its own address, distinct from the customer's, with the same intelli-fill
  de: dass jedes Projekt optional eine eigene, vom Kunden abweichende Adresse tragen kann — mit demselben Intelli-Fill
soThat:
  en: a job at a location different from the customer's billing address is recorded correctly
  de: ein Auftrag an einem anderen Ort als der Rechnungsadresse des Kunden korrekt erfasst wird
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - The project create/edit form shows an "Abweichende Projektadresse" toggle, default off; off shows the customer's address disabled and stores nothing on the project
    - On edit, the toggle initializes on iff the project already has a non-empty address (empty fields always mean "uses the customer address")
    - When on, Street/PostalCode/City become required (a partial site address cannot be saved) and use the AddressFields component from Story 55, so typing intelli-fills the same way
  de:
    - Das Projekt-Anlegen/Bearbeiten-Formular zeigt einen „Abweichende Projektadresse"-Schalter, standardmäßig aus; aus zeigt die Kundenadresse deaktiviert und speichert nichts am Projekt
    - Beim Bearbeiten initialisiert der Schalter genau dann auf „an", wenn das Projekt bereits eine nicht-leere Adresse hat (leere Felder bedeuten immer „nutzt die Kundenadresse")
    - Ist der Schalter an, werden Straße/PLZ/Ort pflicht (eine unvollständige Adresse kann nicht gespeichert werden) und nutzen die AddressFields-Komponente aus Story 55, sodass Tippen genauso intelli-füllt
codeUrl: Client/Address/AddressFields.razor
status: done
aiContribution:
  en: The AI proposed inferring whether a project has its own address purely from whether the fields are populated, rather than persisting a separate boolean flag — so pre-migration projects with empty fields correctly default to "uses the customer address" with no backfill needed. I decided the reusable AddressFields piece from Story 55 should be reused as-is here rather than duplicating the lookup logic, which is why Story 58 was absorbed into this one.
  de: Die KI schlug vor, ob ein Projekt eine eigene Adresse hat, rein aus der Befüllung der Felder abzuleiten, statt ein separates Bool-Flag zu speichern — so springen Projekte aus der Zeit vor der Migration mit leeren Feldern korrekt auf „nutzt die Kundenadresse", ohne Backfill. Ich entschied, dass das wiederverwendbare AddressFields-Bauteil aus Story 55 hier unverändert wiederverwendet wird statt die Lookup-Logik zu duplizieren — deshalb wurde Story 58 in diese aufgenommen.
introducedIn: WZ-0.2.0
source: docs/user-stories/057-project-address-from-customer.md
---
