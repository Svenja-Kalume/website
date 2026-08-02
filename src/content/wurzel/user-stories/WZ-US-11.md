---
title:
  en: Create an offer from a project's positions
  de: Ein Angebot aus den Positionen eines Projekts erstellen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to create an offer from the project's positions
  de: ein Angebot aus den Positionen des Projekts zu erstellen
soThat:
  en: I can quote a job without retyping the work items
  de: ich einen Auftrag anbieten kann, ohne die Positionen neu zu tippen
requirement: WZ-R-04
bpmn: WZ-BPMN-02
acceptanceCriteria:
  en:
    - OfferNumber (yyyy-nnn), OfferDate and state Offen are set automatically; Betreff is pre-filled with the project name and required
    - Eligible positions become live OfferItem links; disabled positions are excluded; a position may be in multiple offers
    - The offer opens as a draft and is created lazily on the first real change (autosave, no Speichern button); a pure peek persists nothing
  de:
    - Angebotsnummer (yyyy-nnn), Angebotsdatum und Status Offen werden automatisch gesetzt; der Betreff ist mit dem Projektnamen vorbefüllt und Pflicht
    - Geeignete Positionen werden zu Live-Angebotspositionen; deaktivierte sind ausgeschlossen; eine Position kann in mehreren Angeboten sein
    - Das Angebot öffnet als Entwurf und wird verzögert bei der ersten echten Änderung erstellt (Autosave, kein Speichern-Knopf); ein bloßer Blick speichert nichts
status: done
aiContribution:
  en: The AI proposed deferred-create so a mere peek persists nothing; I accepted the trade-off that an unchanged default offer needs one touch to persist. A later regression where it silently stopped saving was caught and fixed with tests.
  de: Die KI schlug das verzögerte Erstellen vor, sodass ein bloßer Blick nichts speichert; ich akzeptierte den Kompromiss, dass ein unverändertes Standard-Angebot eine Berührung zum Speichern braucht. Eine spätere Regression, bei der es still nicht mehr speicherte, wurde gefunden und mit Tests behoben.
introducedIn: WZ-0.1.0
---
