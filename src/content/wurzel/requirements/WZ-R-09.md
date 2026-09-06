---
title:
  en: Find a customer or project quickly by typing
  de: Einen Kunden oder ein Projekt schnell durch Tippen finden
case: wurzel
businessGoal:
  en: As the customer and project lists grow, the owner can find a record by typing part of its name, company or number, without scrolling the full list.
  de: Mit wachsenden Kunden- und Projektlisten kann der Inhaber einen Datensatz durch Tippen eines Teils von Name, Firma oder Nummer finden, ohne die ganze Liste zu durchscrollen.
fitCriterion:
  en: Typing a partial name/company/number into either list's search field filters the visible rows on every keystroke, with no extra network request and a clear “no matches” message when nothing fits.
  de: Das Tippen eines Teil-Namens/-Firmennamens/-Nummer im Suchfeld einer der beiden Listen filtert die sichtbaren Zeilen bei jedem Tastendruck, ohne zusätzliche Netzwerkanfrage, mit klarer "keine Treffer"-Meldung, wenn nichts passt.
priority: should
status: done
aiContribution:
  en: The AI proposed a single shared SearchField component owning only the input chrome, with each page owning its own match predicate — so customer search and project search reuse one component without coupling their filtering rules. I decided search runs entirely client-side over already-loaded rows rather than a server query per keystroke.
  de: Die KI schlug eine einzige gemeinsame SearchField-Komponente vor, die nur das Eingabe-Chrome besitzt, während jede Seite ihr eigenes Match-Prädikat besitzt — damit Kunden- und Projektsuche eine Komponente teilen, ohne ihre Filterregeln zu koppeln. Ich entschied, dass die Suche vollständig client-seitig über bereits geladene Zeilen läuft statt einer Serveranfrage pro Tastendruck.
introducedIn: WZ-0.2.0
source: docs/user-stories/004-customer-search.md
---

Level 1 shipped flat customer and project lists with no way to narrow them. This requirement covers
the real-time, client-side search added to both lists in Level 2 Block 2b (Stories 4, 22).
