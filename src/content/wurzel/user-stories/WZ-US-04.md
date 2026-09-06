---
title:
  en: Create a project for a customer
  de: Ein Projekt für einen Kunden anlegen
case: wurzel
asA:
  en: a landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to create a project for a customer
  de: ein Projekt für einen Kunden anzulegen
soThat:
  en: I can group all offers of one job in one place
  de: ich alle Angebote eines Auftrags an einem Ort bündle
requirement: WZ-R-02
adr: [WZ-ADR-003]
bpmn: WZ-BPMN-01
acceptanceCriteria:
  en:
    - From a customer the CustomerNumber is auto-filled; from the project list it is editable with inline search
    - ProjectName is required; ProjectNumber is auto-generated as yyyy-nnn
    - ProjectStatus is set to Open automatically and is not selectable at creation
  de:
    - Vom Kunden aus ist die Kundennummer vorbefüllt; aus der Projektliste editierbar mit Inline-Suche
    - Der Projektname ist Pflicht; die Projektnummer wird automatisch als yyyy-nnn erzeugt
    - Der Projektstatus wird automatisch auf Offen gesetzt und ist bei der Anlage nicht wählbar
priority: must
status: done
aiContribution:
  en: The AI drafted the two entry points; I tied the decision to the “Project as core entity” ADR so offers always hang off a project.
  de: Die KI entwarf die zwei Einstiegspunkte; ich verband die Entscheidung mit dem ADR „Projekt als zentrale Entität“, damit Angebote stets an einem Projekt hängen.
introducedIn: WZ-0.1.0
---
