---
title:
  en: Create offer from customer create/edit
  de: Angebot aus Kunde anlegen/bearbeiten erstellen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to create an offer directly from the customer create or edit screen
  de: direkt vom Kunde-Anlegen- oder -Bearbeiten-Bildschirm aus ein Angebot zu erstellen
soThat:
  en: I can go from a new customer straight to a quote without navigating through the project first
  de: ich von einem neuen Kunden direkt zu einem Angebot gelangen kann, ohne zuerst über das Projekt zu navigieren
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - An "Angebot anlegen" button on the customer create/edit form opens a customer-context offer draft (no project in the URL yet), with Subject pre-filled from the customer's display name
    - Positions start empty and are added via in-editor creation (Story 79); nothing is persisted while the draft is invalid, so an abandoned draft creates no project, position or offer
    - On the first valid save, one transactional server call atomically creates the Project (named from the Subject), its positions, and the Offer linking them; the client then adopts the returned ids and switches to the saved offer editor
  de:
    - Ein „Angebot anlegen"-Button im Kunde-Anlegen/Bearbeiten-Formular öffnet einen kundenbezogenen Angebotsentwurf (noch kein Projekt in der URL), mit dem Betreff vorbefüllt aus dem Anzeigenamen des Kunden
    - Positionen starten leer und werden über die In-Editor-Anlage (Story 79) hinzugefügt; solange der Entwurf ungültig ist, wird nichts gespeichert — ein abgebrochener Entwurf erzeugt weder Projekt noch Position noch Angebot
    - Beim ersten gültigen Speichern legt ein einziger transaktionaler Serveraufruf atomar das Projekt (benannt nach dem Betreff), seine Positionen und das verknüpfende Angebot an; der Client übernimmt danach die zurückgegebenen IDs und wechselt zum gespeicherten Angebots-Editor
codeUrl: Client/Customers/CreateCustomerPage.razor
status: done
aiContribution:
  en: The AI proposed the atomic, deferred mechanism — build the whole offer client-side first, persist project + positions + offer in one all-or-nothing transaction only on first valid save — superseding an earlier "eagerly create an empty project on click" idea that left orphan projects behind on abandoned drafts.
  de: Die KI schlug den atomaren, aufgeschobenen Mechanismus vor — das gesamte Angebot erst client-seitig aufbauen, Projekt + Positionen + Angebot erst beim ersten gültigen Speichern in einer Alles-oder-nichts-Transaktion persistieren — und ersetzte damit eine frühere Idee, sofort ein leeres Projekt anzulegen, die bei abgebrochenen Entwürfen verwaiste Projekte hinterließ.
introducedIn: WZ-0.2.0
source: docs/user-stories/059-create-offer-from-customer.md
---
