---
title:
  en: See the customer list
  de: Die Kundenliste sehen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to see all my customers in a list
  de: alle meine Kunden in einer Liste zu sehen
soThat:
  en: I can find and open the right one
  de: ich den richtigen finde und öffne
requirement: WZ-R-01
acceptanceCriteria:
  en:
    - Reachable under „Kunden“; sorted by Nachname ascending
    - Columns show Kundennummer, Nachname, Vorname and Ort
    - An edit pencil opens the editor; a „Neu“ button creates a customer; empty shows „Keine Einträge vorhanden“
  de:
    - Erreichbar unter „Kunden“; sortiert nach Nachname aufsteigend
    - Spalten zeigen Kundennummer, Nachname, Vorname und Ort
    - Ein Bearbeiten-Stift öffnet den Editor; ein „Neu“-Knopf legt einen Kunden an; leer zeigt „Keine Einträge vorhanden“
priority: must
status: done
aiContribution:
  en: The AI suggested the column set and empty-state text; I kept the list read-only (no inline edit) to match the docs-like simplicity.
  de: Die KI schlug den Spaltensatz und den Leerzustandstext vor; ich hielt die Liste schreibgeschützt (keine Inline-Bearbeitung), passend zur schlichten Anmutung.
introducedIn: WZ-0.1.0
---
