---
title:
  en: "See every invoice across all projects in one list"
  de: "Alle Rechnungen projektübergreifend in einer Liste sehen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to open a list of all invoices from the menu, across every project"
  de: "über das Menü eine Liste aller Rechnungen über alle Projekte hinweg zu öffnen"
soThat:
  en: "I can find a bill again without first remembering which project it belonged to"
  de: "ich eine Rechnung wiederfinde, ohne mich erst erinnern zu müssen, zu welchem Projekt sie gehörte"
requirement: WZ-R-13
acceptanceCriteria:
  en:
    - "A **Rechnungen** menu item opens the list, which shows every invoice in every state"
    - "Rows are sorted newest first by invoice date falling back to creation date, so drafts — which have no invoice date — sort by when they were made instead of collapsing to the bottom; the user can switch to sorting by last change"
    - "Each row shows number, invoice date, due date, type, state, project number, customer number, gross amount and subject where set"
    - "A cancelled invoice is marked STORNIERT in the row"
    - "A draft row opens the editor, a frozen row opens the read-only view"
    - "With no invoices at all, the list shows an empty state"
  de:
    - "Ein Menüpunkt **Rechnungen** öffnet die Liste, die jede Rechnung in jedem Status zeigt"
    - "Zeilen sind neueste zuerst sortiert, nach Rechnungsdatum mit Rückfall auf das Anlagedatum — Entwürfe ohne Rechnungsdatum sortieren also nach ihrer Entstehung, statt ans Ende zu rutschen; umschaltbar auf Sortierung nach letzter Änderung"
    - "Jede Zeile zeigt Nummer, Rechnungsdatum, Fälligkeitsdatum, Art, Status, Projektnummer, Kundennummer, Gesamtbetrag und, falls gesetzt, den Betreff"
    - "Eine stornierte Rechnung ist in der Zeile als STORNIERT gekennzeichnet"
    - "Eine Entwurfszeile öffnet den Editor, eine eingefrorene Zeile die Leseansicht"
    - "Gibt es überhaupt keine Rechnungen, zeigt die Liste einen Leerzustand"
codeUrl: Client/Invoices/InvoiceListPage.razor
priority: must
status: done
aiContribution:
  en: "The sort rule is the AI’s and is easy to miss: sorting by invoice date alone would push every draft to the bottom of the list, because a draft has no invoice date by design — and a draft is exactly the invoice most likely to be looked for. Falling back to the creation date keeps the list usable for the work in progress rather than only for the finished record."
  de: "Die Sortierregel stammt von der KI und ist leicht zu übersehen: Eine Sortierung allein nach Rechnungsdatum würde jeden Entwurf ans Ende der Liste drücken, denn ein Entwurf hat konstruktionsbedingt kein Rechnungsdatum — und der Entwurf ist genau die Rechnung, die am ehesten gesucht wird. Der Rückfall auf das Anlagedatum hält die Liste für die laufende Arbeit brauchbar und nicht nur für das abgeschlossene Archiv."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/035-general-invoice-list.md
---
