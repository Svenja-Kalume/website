---
title:
  en: Customer search
  de: Kundensuche
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to find a customer quickly by typing part of their name, company, or customer number
  de: einen Kunden schnell durch Tippen eines Teils von Name, Firma oder Kundennummer zu finden
soThat:
  en: I do not have to scroll through the entire list
  de: ich nicht die gesamte Liste durchscrollen muss
requirement: WZ-R-09
acceptanceCriteria:
  en:
    - A Suchfeld above the customer list filters the list in real time as the user types, no submit button
    - LastName, FirstName, CompanyName and CustomerNumber are searched, case-insensitively; a term with zero matches shows "Keine Einträge gefunden"; clearing the field restores the full list
    - Filtering runs entirely on already-loaded data, with no additional API call per keystroke
  de:
    - Ein Suchfeld über der Kundenliste filtert die Liste in Echtzeit während der Eingabe, ohne Absenden-Button
    - Nachname, Vorname, Firmenname und Kundennummer werden case-insensitiv durchsucht; ein Begriff ohne Treffer zeigt „Keine Einträge gefunden“; das Leeren des Feldes stellt die volle Liste wieder her
    - Das Filtern läuft vollständig auf bereits geladenen Daten, ohne zusätzlichen API-Aufruf pro Tastendruck
codeUrl: Client/Customers/CustomerListPage.razor
priority: must
status: done
aiContribution:
  en: The AI proposed a shared SearchField component that owns only the input chrome (placeholder, clear button, no debounce) while each page owns its own match predicate — reused unchanged by project search (Story 22) — and proposed two distinct empty-state messages depending on whether a search term is active.
  de: Die KI schlug eine gemeinsame SearchField-Komponente vor, die nur das Eingabe-Chrome besitzt (Platzhalter, Clear-Button, kein Debounce), während jede Seite ihr eigenes Match-Prädikat besitzt — unverändert von der Projektsuche (Story 22) wiederverwendet — sowie zwei unterschiedliche Leer-Zustandsmeldungen je nachdem, ob ein Suchbegriff aktiv ist.
introducedIn: WZ-0.2.0
source: docs/user-stories/004-customer-search.md
---
