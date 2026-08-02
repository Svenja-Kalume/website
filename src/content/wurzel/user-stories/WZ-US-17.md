---
title:
  en: Navigate with back/forward and a breadcrumb
  de: Mit Zurück/Vor und Breadcrumb navigieren
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: clear back/forward arrows and a breadcrumb of where I am
  de: klare Zurück/Vor-Pfeile und ein Breadcrumb, wo ich bin
soThat:
  en: I can move freely and never feel lost
  de: ich mich frei bewege und mich nie verloren fühle
requirement: WZ-R-06
acceptanceCriteria:
  en:
    - Permanent ← / → arrows in the top bar mirror the browser history, are disabled when there is none, and are at least 44×44px
    - Every edit/create view shows a breadcrumb of the ownership hierarchy (Home › Kunde › Projekt › Angebot); ancestors are links, the current segment is plain text
    - The app never auto-navigates after a save
  de:
    - Permanente ← / → Pfeile in der Kopfzeile spiegeln die Browser-Historie, sind ohne Historie deaktiviert und mindestens 44×44px groß
    - Jede Bearbeiten-/Anlege-Ansicht zeigt ein Breadcrumb der Besitz-Hierarchie (Start › Kunde › Projekt › Angebot); Vorfahren sind Links, das aktuelle Segment ist Klartext
    - Die App navigiert nach einem Speichern nie automatisch
status: done
aiContribution:
  en: The AI proposed mirroring the browser's own history via JS interop and building the breadcrumb from the database hierarchy; I set the rule that navigation is always explicit, never a side effect of saving.
  de: Die KI schlug vor, die Browser-Historie per JS-Interop zu spiegeln und das Breadcrumb aus der Datenbank-Hierarchie zu bauen; ich setzte die Regel, dass Navigation immer explizit ist, nie ein Nebeneffekt des Speicherns.
introducedIn: WZ-0.1.0
---
