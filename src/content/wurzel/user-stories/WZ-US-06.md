---
title:
  en: Pick the customer inline when creating a project
  de: Den Kunden beim Projektanlegen inline auswählen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to search and select the customer directly in the project form
  de: den Kunden direkt im Projektformular zu suchen und auszuwählen
soThat:
  en: I do not have to leave the form to look them up
  de: ich das Formular nicht verlassen muss, um ihn nachzuschlagen
requirement: WZ-R-02
acceptanceCriteria:
  en:
    - An inline search (not a dialog) filters case-insensitively over CustomerNumber, name, company and address
    - Dropdown rows show „Kundennummer – Nachname, Vorname“, Firma and Ort; no matches shows „Keine Einträge gefunden“
    - A customer must be selected before the project can be saved; it filters already-loaded data
  de:
    - Eine Inline-Suche (kein Dialog) filtert case-insensitiv über Kundennummer, Name, Firma und Adresse
    - Dropdown-Zeilen zeigen „Kundennummer – Nachname, Vorname“, Firma und Ort; keine Treffer zeigt „Keine Einträge gefunden“
    - Ein Kunde muss gewählt sein, bevor das Projekt gespeichert werden kann; es filtert bereits geladene Daten
priority: must
status: done
aiContribution:
  en: The AI built the inline picker filtering client-side (no per-keystroke API call); I specified the row format and made selection mandatory to avoid orphan projects.
  de: Die KI baute die Inline-Auswahl mit clientseitigem Filtern (kein API-Aufruf je Tastendruck); ich gab das Zeilenformat vor und machte die Auswahl verpflichtend, um verwaiste Projekte zu vermeiden.
introducedIn: WZ-0.1.0
---
