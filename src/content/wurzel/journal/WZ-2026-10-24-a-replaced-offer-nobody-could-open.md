---
title:
  en: "A replaced offer nobody could open"
  de: "Ein ersetztes Angebot, das niemand öffnen konnte"
date: 2026-10-24
summary:
  en: "Grooming how past offers are shown turned up two wrong assumptions — one written in the project's own records, one made by the AI. Checking both against the app changed the design."
  de: "Beim Grooming der Anzeige vergangener Angebote kamen zwei falsche Annahmen zutage — eine in den eigenen Unterlagen des Projekts, eine von der KI. Beide gegen die App zu prüfen hat den Entwurf verändert."
case: wurzel
iteration: WZ-0.4.0
tags: [discovery, decision, bdr, dsdr, offers]
draft: true
body:
  en:
    - "This block was about how frozen and past offers are viewed. Two assumptions about replaced offers were wrong, and each was caught by checking it against the app before building on it."
    - "The first was in the vault. Since August a story had recorded, as settled, that a replaced offer could already be opened read-only. The AI checked the screens: the project page showed only the newest version of each offer, the offer list and the picker showed only open offers, and after creating a new version the app moved on with no link back. Nothing in the app led to a replaced offer — only typing its address did. The story would have been built and tested through a path no user takes."
    - "The second was the AI's. In a question to me it wrote that an exported offer is never replaced, so every replaced offer has no PDF. I answered: \"An exported offer can also be superseded, check again, before we decide.\" It checked the code and the decision record: an exported offer is replaced by a newer version but keeps its state \"exported\"; only an open offer turns into \"replaced\". So an older version is one of two kinds — with a PDF or without one."
    - "With both kinds named, I chose one read-only view for every locked offer: an exported one shows its PDF pages, a replaced one its frozen lines and only the net amount. The missing way in became two stories — one card per offer with a tab per version, on the project page, the customer page and the bottom of every offer screen. The AI had proposed a plain list of earlier versions and VAT from today's settings on a replaced offer; I chose the tabs, the extra places and net only."
  de:
    - "In diesem Block ging es darum, wie eingefrorene und vergangene Angebote angezeigt werden. Zwei Annahmen über ersetzte Angebote waren falsch, und jede wurde gefunden, weil sie gegen die App geprüft wurde, bevor darauf aufgebaut wurde."
    - "Die erste stand im Vault. Seit August hielt eine Story als geklärt fest, dass sich ein ersetztes Angebot bereits schreibgeschützt öffnen lasse. Die KI prüfte die Bildschirme: Die Projektseite zeigte nur die neueste Version jedes Angebots, Angebotsliste und Auswahl zeigten nur offene Angebote, und nach dem Anlegen einer neuen Version ging die App weiter, ohne Weg zurück. Nichts in der App führte zu einem ersetzten Angebot — nur das Eintippen seiner Adresse. Die Story wäre über einen Weg gebaut und getestet worden, den kein Nutzer nimmt."
    - "Die zweite stammte von der KI. In einer Frage an mich schrieb sie, ein exportiertes Angebot werde nie ersetzt, also habe kein ersetztes Angebot ein PDF. Ich antwortete: „Ein exportiertes Angebot kann auch ersetzt werden, prüf das nochmal, bevor wir entscheiden.“ Sie prüfte Code und Entscheidungsdokument: Ein exportiertes Angebot wird durch eine neuere Version ersetzt, behält aber seinen Zustand „exportiert“; nur ein offenes Angebot wird zu „ersetzt“. Eine ältere Version ist also eine von zwei Arten — mit PDF oder ohne."
    - "Mit beiden Arten benannt habe ich eine schreibgeschützte Ansicht für jedes gesperrte Angebot gewählt: Ein exportiertes zeigt seine PDF-Seiten, ein ersetztes seine eingefrorenen Zeilen und nur den Nettobetrag. Aus dem fehlenden Zugang wurden zwei Stories — eine Karte je Angebot mit einem Reiter je Version, auf der Projektseite, der Kundenseite und unten auf jedem Angebotsbildschirm. Die KI hatte eine schlichte Liste früherer Versionen und für ein ersetztes Angebot die MwSt. nach heutigen Einstellungen vorgeschlagen; ich habe die Reiter, die zusätzlichen Orte und nur netto gewählt."
---
