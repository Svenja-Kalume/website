---
title:
  en: "View a replaced offer"
  de: "Ein ersetztes Angebot ansehen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to open a replaced offer and see its frozen proposal"
  de: "ein ersetztes Angebot öffnen und sein eingefrorenes Angebot sehen"
soThat:
  en: "I can review what was offered to the customer at that time"
  de: "ich nachsehen kann, was dem Kunden damals angeboten wurde"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "Opening a replaced offer through the editor's address shows its read-only view instead of the switched-off editor"
    - "The view shows the heading, offer date, subject and the Ersetzt badge, under the same breadcrumb as an exported offer's view"
    - "It lists the lines exactly as they were when the offer was replaced — description, unit, quantity, unit price and line price — even when the project's positions have changed since"
    - "It shows the net total of those lines and no MwSt. or Gesamtbetrag"
    - "It offers no Bearbeiten, Neue Version, Vorschau, Exportieren or Herunterladen, and nothing on it can be changed"
  de:
    - "Ein ersetztes Angebot über die Adresse des Editors zu öffnen zeigt seine schreibgeschützte Ansicht statt des abgeschalteten Editors"
    - "Die Ansicht zeigt Überschrift, Angebotsdatum, Betreff und das Kennzeichen Ersetzt, unter derselben Brotkrumennavigation wie die Ansicht eines exportierten Angebots"
    - "Sie listet die Zeilen genau so, wie sie beim Ersetzen waren — Beschreibung, Einheit, Menge, Einzelpreis und Zeilenpreis —, auch wenn sich die Positionen des Projekts seitdem geändert haben"
    - "Sie zeigt die Nettosumme dieser Zeilen und keine MwSt. und keinen Gesamtbetrag"
    - "Sie bietet kein Bearbeiten, keine Neue Version, keine Vorschau, kein Exportieren und kein Herunterladen an, und nichts darauf lässt sich ändern"
codeUrl: Client/Offers/SupersededOfferLines.razor
adr: [WZ-DSDR-21]
status: done
aiContribution:
  en: "The vault had recorded since August, as settled, that a replaced offer could already be opened read-only. The AI checked the screens before building on it: nothing in the app led to a replaced offer, only typing its address did — the story would have been built and tested through a path no user takes. That missing way in became the version tabs of the next two stories. The AI proposed that a replaced offer show MwSt. from today's settings, as the rule then required; I chose the net total only."
  de: "Im Vault stand seit August als geklärt, dass sich ein ersetztes Angebot bereits schreibgeschützt öffnen lasse. Die KI prüfte die Bildschirme, bevor darauf aufgebaut wurde: Nichts in der App führte zu einem ersetzten Angebot, nur das Eintippen seiner Adresse — die Story wäre über einen Weg gebaut und getestet worden, den kein Nutzer nimmt. Aus diesem fehlenden Zugang wurden die Versionsreiter der nächsten beiden Stories. Die KI schlug vor, dass ein ersetztes Angebot die MwSt. nach den heutigen Einstellungen zeigt, wie es die damalige Regel verlangte; ich habe nur die Nettosumme gewählt."
introducedIn: WZ-0.4.0
source: docs/user-stories/027-view-declined-offer.md
---
