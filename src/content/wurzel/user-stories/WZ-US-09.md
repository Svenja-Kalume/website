---
title:
  en: One position table, reused in offers
  de: Eine Positionstabelle, in Angeboten wiederverwendet
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: the same clear position table in projects and offers
  de: dieselbe klare Positionstabelle in Projekten und Angeboten
soThat:
  en: pricing looks and behaves consistently everywhere
  de: die Preisbildung überall gleich aussieht und sich gleich verhält
requirement: WZ-R-03
adr: [WZ-ADR-004]
acceptanceCriteria:
  en:
    - Schätzung/Estimation is removed completely; pricing is unified to Positionspreis = Einzelpreis × Menge for every unit
    - Column order is Beschreibung, Arbeitszeit, Einheit, Menge, Einzelpreis, Positionspreis; a single Gesamtpreis sums the active positions
    - The shared table is reused in offer create/edit (offer omits Arbeitszeit and labels the total Angebotspreis)
  de:
    - Schätzung/Estimation wird vollständig entfernt; die Preisbildung ist auf Positionspreis = Einzelpreis × Menge für jede Einheit vereinheitlicht
    - Spaltenreihenfolge ist Beschreibung, Arbeitszeit, Einheit, Menge, Einzelpreis, Positionspreis; eine einzige Gesamtpreis-Zeile summiert die aktiven Positionen
    - Die geteilte Tabelle wird im Angebot (Anlegen/Bearbeiten) wiederverwendet (das Angebot lässt Arbeitszeit weg und nennt die Summe Angebotspreis)
status: done
aiContribution:
  en: The AI spotted that the old Estimation field and per-unit price branches were redundant and proposed one rule; I approved removing Estimation entirely and keeping Duration as an inert, informational field.
  de: Die KI erkannte, dass das alte Schätzungs-Feld und die einheitsspezifischen Preiszweige redundant waren, und schlug eine Regel vor; ich stimmte zu, die Schätzung ganz zu entfernen und die Arbeitszeit als inertes, informatives Feld zu behalten.
introducedIn: WZ-0.1.0
---
