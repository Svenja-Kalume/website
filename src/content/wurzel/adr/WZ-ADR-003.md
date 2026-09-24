---
title:
  en: Project as the core domain entity
  de: Projekt als zentrale Domänen-Entität
case: wurzel
status: accepted
date: 2026-06-15
relatedRequirements: [WZ-R-02, WZ-R-04]
context:
  en:
    - "Real landscaping jobs have several offer versions (and later multiple invoices). Without a grouping entity these would be a flat, unconnected list."
  de:
    - "Echte Aufträge im Garten- und Landschaftsbau haben mehrere Angebotsversionen und später mehrere Rechnungen. Ohne eine bündelnde Entität wären das eine flache, unverbundene Liste."
decision:
  en:
    - "Introduce Project as a core entity before writing the offer stories: a Project belongs to a Customer; Offers belong to a Project."
  de:
    - "Das Projekt als zentrale Entität einführen, bevor die Angebots-Stories geschrieben werden: Ein Projekt gehört zu einem Kunden, Angebote gehören zu einem Projekt."
consequences:
  en:
    - "Made deliberately early to avoid a costly retrofit. It anchors the ownership hierarchy and makes multiple offer versions coherent; invoices will hang off the same Project later."
  de:
    - "Bewusst früh entschieden, um ein teures Nachrüsten zu vermeiden. Die Entscheidung verankert die Zugehörigkeitshierarchie und macht mehrere Angebotsversionen stimmig; Rechnungen hängen später am selben Projekt."
introducedIn: WZ-0.1.0
---
