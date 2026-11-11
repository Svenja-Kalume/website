---
title:
  en: "Offer versions as tabs on the project and customer page"
  de: "Angebotsversionen als Reiter auf Projekt- und Kundenseite"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "every offer of a project to show all its versions as tabs on the project page and the customer page"
  de: "dass jedes Angebot eines Projekts alle seine Versionen als Reiter auf der Projektseite und der Kundenseite zeigt"
soThat:
  en: "I can inspect each version without searching"
  de: "ich jede Version ansehen kann, ohne zu suchen"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "Each offer has one card holding all its versions as tabs, newest first and selected; an older version gets no card of its own"
    - "A tab is headed by the version's subject and offer number and shows number, date, subject, net total and status badge"
    - "A tab carries the buttons of its status: Bearbeiten, Vorschau and Exportieren while open; Öffnen and Herunterladen once exported; Öffnen once replaced; Neue Version only on the newest tab"
    - "Öffnen opens the version's read-only view; Exportieren on a tab refreshes the card in place"
    - "While the project is locked, Neue Version and Exportieren are disabled with the reason"
    - "The customer page shows the same cards for every project of the customer, grouped under project number and name, in an Angebote section below Projekte; its Vorschau, Exportieren and Neue Version save a pending customer change first"
  de:
    - "Jedes Angebot hat eine Karte mit allen seinen Versionen als Reiter, die neueste zuerst und ausgewählt; eine ältere Version bekommt keine eigene Karte"
    - "Ein Reiter ist mit Betreff und Angebotsnummer der Version überschrieben und zeigt Nummer, Datum, Betreff, Nettosumme und Statuskennzeichen"
    - "Ein Reiter trägt die Schaltflächen seines Status: Bearbeiten, Vorschau und Exportieren, solange offen; Öffnen und Herunterladen, sobald exportiert; Öffnen, sobald ersetzt; Neue Version nur auf dem neuesten Reiter"
    - "Öffnen öffnet die schreibgeschützte Ansicht der Version; Exportieren auf einem Reiter aktualisiert die Karte an Ort und Stelle"
    - "Solange das Projekt gesperrt ist, sind Neue Version und Exportieren mit Grund deaktiviert"
    - "Die Kundenseite zeigt dieselben Karten für jedes Projekt des Kunden, gruppiert unter Projektnummer und Bezeichnung, in einem Abschnitt Angebote unter Projekte; ihre Vorschau, ihr Exportieren und ihre Neue Version speichern eine offene Kundenänderung zuerst"
codeUrl: Client/Offers/OfferChainCard.razor
status: done
aiContribution:
  en: "The AI proposed a plain list of earlier versions on each card. I chose a tab per version inside the card, and added the cards to the customer page and to the bottom of every offer screen, which became Story 69. At the walk I confirmed an implementation decision the story agent had made on its own: an open tab on a locked project says Öffnen, not Bearbeiten."
  de: "Die KI schlug auf jeder Karte eine schlichte Liste früherer Versionen vor. Ich habe einen Reiter je Version innerhalb der Karte gewählt und die Karten zusätzlich auf die Kundenseite und unten auf jeden Angebotsbildschirm gesetzt, woraus Story 69 wurde. Beim Durchgang habe ich eine Umsetzungsentscheidung bestätigt, die der Story-Agent selbst getroffen hatte: Ein offener Reiter auf einem gesperrten Projekt heißt Öffnen, nicht Bearbeiten."
introducedIn: WZ-0.4.0
source: docs/user-stories/028-offer-version-tabs-in-project-view.md
---
