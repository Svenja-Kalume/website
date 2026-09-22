---
title:
  en: "Put the project’s address into the offer wording"
  de: "Die Projektadresse in den Angebotstext setzen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to use a `{Projektadresse}` token in my standard offer wording"
  de: "in meinen Standard-Angebotstexten einen Platzhalter `{Projektadresse}` verwenden"
soThat:
  en: "a job whose site differs from the billing address can say where the work happens, without changing the document"
  de: "ein Auftrag, dessen Baustelle von der Rechnungsadresse abweicht, sagen kann, wo gearbeitet wird — ohne das Dokument zu ändern"
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - "`{Projektadresse}` is listed alongside the existing tokens in the wording help text in the settings"
    - "Used in the intro, closing or terms text, it renders on both preview and exported PDF as the project’s effective address: the project’s own address when it has one, otherwise the customer’s street and postcode/town"
    - "A project with no usable address on either side renders the token as an empty string rather than throwing"
    - "The recipient block is unchanged and still shows the customer’s address on every offer, whether or not the token is used"
    - "Adding the token to the wording after an export does not alter an already-exported offer’s stored bytes"
    - "No new entity, no new field and no migration — the existing address-resolution helper simply gains a caller"
  de:
    - "`{Projektadresse}` steht in den Einstellungen neben den bestehenden Platzhaltern im Hilfetext"
    - "Im Einleitungs-, Schluss- oder Bedingungstext verwendet, erscheint er in Vorschau und exportiertem PDF als die effektive Adresse des Projekts: die eigene Projektadresse, falls vorhanden, sonst Straße und PLZ/Ort des Kunden"
    - "Ein Projekt ohne brauchbare Adresse auf beiden Seiten rendert den Platzhalter als leere Zeichenkette, statt einen Fehler auszulösen"
    - "Der Empfängerblock bleibt unverändert und zeigt auf jedem Angebot weiterhin nur die Kundenadresse, unabhängig davon, ob der Platzhalter benutzt wird"
    - "Den Platzhalter nach einem Export in den Text aufzunehmen verändert die gespeicherten Bytes eines bereits exportierten Angebots nicht"
    - "Keine neue Entität, kein neues Feld, keine Migration — die bestehende Adressauflösung bekommt lediglich einen weiteren Aufrufer"
codeUrl: Server/Documents/OfferDocumentTokens.cs
priority: should
status: done
aiContribution:
  en: "This story came out of a finding in the Level-2 sign-off session as a product question, not a defect: the recipient block shows the billing address, and a reviewer asked where the *site* address appears. The AI’s contribution was to answer it in the cheapest correct way — the wording-token mechanism already existed, and the address-resolution rule already existed and was already tested; the story needed neither a field nor a migration, only a new caller. It also held the line on what not to change: the recipient block stays customer-address-only, because a document that sometimes addresses the site and sometimes the customer would be worse than one that always does the same thing."
  de: "Diese Story entstand aus einem Befund der Level-2-Abnahmesitzung als Produktfrage, nicht als Fehler: Der Empfängerblock zeigt die Rechnungsadresse, und ein Prüfer fragte, wo die Baustellenadresse auftaucht. Der Beitrag der KI war, das auf dem günstigsten richtigen Weg zu beantworten — den Mechanismus der Textplatzhalter gab es bereits, die Regel zur Adressauflösung gab es bereits und sie war getestet; die Story brauchte weder ein Feld noch eine Migration, nur einen weiteren Aufrufer. Sie hielt zudem fest, was nicht geändert wird: Der Empfängerblock bleibt reine Kundenadresse, denn ein Dokument, das mal die Baustelle und mal den Kunden adressiert, wäre schlechter als eines, das immer dasselbe tut."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/089-offer-document-projektadresse-token.md
---
