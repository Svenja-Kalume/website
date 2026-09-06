---
title:
  en: Create project from customer create/edit
  de: Projekt aus Kunde anlegen/bearbeiten erstellen
case: wurzel
asA:
  en: a landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to start a new project directly from the customer create or edit screen
  de: direkt vom Kunde-Anlegen- oder -Bearbeiten-Bildschirm aus ein neues Projekt zu starten
soThat:
  en: I can capture the first job for a customer without navigating away
  de: ich den ersten Auftrag für einen Kunden erfassen kann, ohne wegzunavigieren
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - A “Create project” button appears on the customer create form (the edit form already had it)
    - On create, clicking it validates and persists the customer first, then navigates to /customers/{newId}/projects/new with the customer fixed and pre-filled
    - If customer validation fails, nothing is saved and no navigation happens; the edit-form entry point is unchanged
  de:
    - Ein „Projekt anlegen“-Button erscheint auf dem Kunde-Anlegen-Formular (das Bearbeiten-Formular hatte ihn bereits)
    - Beim Anlegen validiert der Klick den Kunden und speichert ihn zuerst, dann navigiert er zu /customers/{newId}/projects/new mit fixiertem, vorbefülltem Kunden
    - Schlägt die Kundenvalidierung fehl, wird nichts gespeichert und es findet keine Navigation statt; der Einstiegspunkt im Bearbeiten-Formular bleibt unverändert
codeUrl: Client/Customers/CreateCustomerPage.razor
priority: must
status: done
aiContribution:
  en: The AI proposed the create-form button mean “save customer, then start project” — persisting the customer first and reusing the exact existing route and flow the edit screen already used, rather than building an inline project form or a combined transaction.
  de: Die KI schlug vor, dass der Button im Anlegen-Formular „Kunde speichern, dann Projekt starten“ bedeutet — den Kunden zuerst zu persistieren und exakt die bestehende Route und den bestehenden Ablauf des Bearbeiten-Bildschirms wiederzuverwenden, statt ein Inline-Projektformular oder eine kombinierte Transaktion zu bauen.
introducedIn: WZ-0.2.0
source: docs/user-stories/056-create-project-from-customer.md
---
