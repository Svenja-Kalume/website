---
title:
  en: Project search
  de: Projektsuche
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to find a project quickly by typing part of the project name or customer name
  de: ein Projekt schnell durch Tippen eines Teils des Projekt- oder Kundennamens zu finden
soThat:
  en: I do not have to scroll through the entire list
  de: ich nicht die gesamte Liste durchscrollen muss
requirement: WZ-R-09
acceptanceCriteria:
  en:
    - A Suchfeld above the project list filters the list in real time, no submit button, reusing the SearchField component from Story 4
    - LastName, FirstName, CompanyName, CustomerNumber, ProjectNumber and ProjectName are searched, case-insensitively; the general project list DTO gains the customer name fields needed to support this
    - A term with zero matches shows "Keine Einträge gefunden"; clearing the field restores the full list; filtering runs entirely on already-loaded data
  de:
    - Ein Suchfeld über der Projektliste filtert die Liste in Echtzeit, ohne Absenden-Button, unter Wiederverwendung der SearchField-Komponente aus Story 4
    - Nachname, Vorname, Firmenname, Kundennummer, Projektnummer und Projektname werden case-insensitiv durchsucht; das allgemeine Projektlisten-DTO erhält dafür die nötigen Kundennamensfelder
    - Ein Begriff ohne Treffer zeigt „Keine Einträge gefunden"; das Leeren des Feldes stellt die volle Liste wieder her; das Filtern läuft vollständig auf bereits geladenen Daten
codeUrl: Client/Projects/ProjectListPage.razor
status: done
aiContribution:
  en: The AI proposed reusing Story 4's SearchField component unchanged (same chrome, no debounce, no magnifier icon) and identified that ProjectNumber was already on the DTO at zero extra cost, so it could be searched too. I confirmed the DTO/server change (adding customer name fields to the general project list) belongs to this story rather than a separate one.
  de: Die KI schlug vor, die SearchField-Komponente aus Story 4 unverändert wiederzuverwenden (gleiches Chrome, kein Debounce, kein Lupen-Icon), und erkannte, dass ProjektNummer bereits ohne Mehrkosten im DTO vorhanden war und somit ebenfalls durchsuchbar ist. Ich bestätigte, dass die DTO-/Server-Änderung (Kundennamensfelder in der allgemeinen Projektliste) zu dieser Story gehört statt zu einer separaten.
introducedIn: WZ-0.2.0
source: docs/user-stories/022-project-search.md
---
