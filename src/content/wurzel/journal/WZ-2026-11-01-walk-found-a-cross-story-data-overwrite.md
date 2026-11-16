---
title:
  en: "The walk found one story overwriting another story's data"
  de: "Der Durchgang fand eine Story, die die Daten einer anderen überschrieb"
date: 2026-11-01
summary:
  en: "A new line order from one story quietly broke the offer editor of an earlier one, so saving an offer could overwrite another position's text. Only my own walk through the app noticed — and the first test written to catch it passed by luck."
  de: "Eine neue Zeilenreihenfolge aus einer Story brach still den Angebotseditor einer früheren, sodass das Speichern eines Angebots den Text einer anderen Position überschreiben konnte. Nur mein eigener Durchgang durch die App hat es bemerkt — und der erste Test, der es fangen sollte, bestand zufällig."
case: wurzel
iteration: WZ-0.4.0
tags: [testing, discovery, offers]
draft: true
body:
  en:
    - "During the Level 5 walk I found that on my first project, the position \"Rasen mähen\" had become a second \"Grünschnitt entsorgen\". I suspected my edits in an offer that morning, and the server log confirmed it: one save re-added a removed line together with a quantity change, and the next save wrote another row's description onto the \"Rasen mähen\" position."
    - "The cause sat between two stories. The position-reordering story made the server return an offer's lines in the project's order. The offer editor keeps a re-added line at the end of the screen, and after each save it copied the saved ids back by position in the list. Once the two orders differed, two rows held each other's ids. Before the reordering story both orders had matched — by accident."
    - "The reordering story passed its own acceptance runs, and the offer editor's tests stayed green, because no test removed a line, added it back and then edited another line. Each check looked at one story; only using the app looked across them."
    - "The first test written to reproduce it passed. The two positions had swapped their description and quantity completely, and the test compared the positions sorted by description — which a full swap leaves unchanged. Comparing each position by its own id made it fail, and the fix, matching ids by identity instead of by place, made it pass. The AI proposed that fix and this note; the damaged position in the walk data I corrected by hand."
  de:
    - "Beim Durchgang durch Level 5 fand ich, dass in meinem ersten Projekt die Position „Rasen mähen“ zu einem zweiten „Grünschnitt entsorgen“ geworden war. Ich hatte meine Änderungen an einem Angebot an diesem Morgen im Verdacht, und das Serverprotokoll bestätigte es: Ein Speichern fügte eine entfernte Zeile zusammen mit einer Mengenänderung wieder hinzu, und das nächste schrieb die Beschreibung einer anderen Zeile auf die Position „Rasen mähen“."
    - "Die Ursache lag zwischen zwei Stories. Die Story zum Umsortieren von Positionen ließ den Server die Zeilen eines Angebots in der Reihenfolge des Projekts liefern. Der Angebotseditor hält eine wieder hinzugefügte Zeile am Ende des Bildschirms und kopierte nach jedem Speichern die gespeicherten IDs nach ihrer Stelle in der Liste zurück. Sobald die beiden Reihenfolgen auseinanderliefen, trugen zwei Zeilen die IDs der jeweils anderen. Vor der Umsortier-Story stimmten beide Reihenfolgen überein — zufällig."
    - "Die Umsortier-Story bestand ihre eigenen Abnahmeläufe, und die Tests des Angebotseditors blieben grün, weil kein Test eine Zeile entfernte, wieder hinzufügte und dann eine andere bearbeitete. Jede Prüfung schaute auf eine Story; nur die Benutzung der App schaute über sie hinweg."
    - "Der erste Test, der den Fehler nachstellen sollte, bestand. Die beiden Positionen hatten Beschreibung und Menge vollständig getauscht, und der Test verglich die Positionen nach Beschreibung sortiert — was ein vollständiger Tausch unverändert lässt. Erst der Vergleich jeder Position über ihre eigene ID ließ ihn scheitern, und die Korrektur, IDs nach Identität statt nach Stelle zuzuordnen, ließ ihn bestehen. Die KI schlug diese Korrektur und diesen Eintrag vor; die beschädigte Position in den Daten des Durchgangs habe ich von Hand korrigiert."
---
