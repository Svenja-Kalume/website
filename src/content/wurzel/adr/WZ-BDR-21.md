---
title:
  en: "A project may hold several open offers, and only Neue Version replaces one"
  de: "Ein Projekt darf mehrere offene Angebote haben, und nur Neue Version ersetzt eines"
case: wurzel
status: accepted
date: 2026-10-01
relatedRequirements: [WZ-R-20]
context:
  en:
    - "Since Level 1 a project held at most one open offer, a rule I set so the project view stayed unambiguous, and creating an offer replaced the open one. But the business owner quotes one job in parts — Terrassenbau and Garten anlegen, each its own offer — and a second offer on the same project is separate work, not a revised quote."
    - "Reading the code, the AI first reported the old behaviour as a defect. It was not: the app enforced the rule it had been given. What changed was the requirement."
  de:
    - "Seit Level 1 hatte ein Projekt höchstens ein offenes Angebot, eine Regel, die ich festgelegt hatte, damit die Projektansicht eindeutig bleibt, und ein neues Angebot ersetzte das offene. Der Geschäftsinhaber bietet einen Auftrag aber in Teilen an — Terrassenbau und Garten anlegen, jedes als eigenes Angebot —, und ein zweites Angebot im selben Projekt ist eigene Arbeit, kein überarbeitetes Angebot."
    - "Beim Lesen des Codes meldete die KI das alte Verhalten zunächst als Fehler. Das war es nicht: Die App setzte die Regel durch, die sie bekommen hatte. Geändert hat sich die Anforderung."
decision:
  en:
    - "A project may hold any number of open offers. Creating an offer never replaces another; a second offer starts with every position that may be offered, as the first does. Only Neue Version replaces an offer, and only the one it is started from. One position may sit on several open offers, and deactivating it removes it from every one."
  de:
    - "Ein Projekt darf beliebig viele offene Angebote haben. Ein neues Angebot ersetzt nie ein anderes; ein zweites Angebot beginnt wie das erste mit jeder anbietbaren Position. Nur Neue Version ersetzt ein Angebot, und nur dasjenige, aus dem sie gestartet wird. Eine Position darf auf mehreren offenen Angeboten stehen, und sie zu deaktivieren entfernt sie aus jedem."
consequences:
  en:
    - "Everywhere the app used to reach the project's open offer, it now has to name which one. The project list's Angebot button acts only while exactly one offer is open; choosing among several is a post-MVP story. The project page shows one card per version chain."
    - "The AI's proposal that a second offer start empty was rejected: the user removes what belongs elsewhere."
  de:
    - "Überall, wo die App bisher das offene Angebot des Projekts ansprach, muss sie jetzt sagen, welches. Die Schaltfläche Angebot in der Projektliste wirkt nur, solange genau ein Angebot offen ist; die Auswahl unter mehreren ist eine Story nach dem MVP. Die Projektseite zeigt eine Karte je Versionskette."
    - "Der Vorschlag der KI, dass ein zweites Angebot leer beginnt, wurde abgelehnt: Der Nutzer entfernt, was woanders hingehört."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0021-a-project-may-hold-several-open-offers.md
---
