---
title:
  en: "Reorder a project's positions"
  de: "Die Positionen eines Projekts umsortieren"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to reorder positions within a project"
  de: "Positionen innerhalb eines Projekts umsortieren"
soThat:
  en: "the position table reflects the order I actually want to present or work through"
  de: "die Positionstabelle die Reihenfolge zeigt, in der ich präsentieren oder arbeiten möchte"
requirement: WZ-R-03
acceptanceCriteria:
  en:
    - "Each row offers Nach oben and Nach unten, which move it one place; the first row cannot move up and the last cannot move down; deactivated and billed rows can be moved too"
    - "The new order shows at once and is still there when the project is opened again; a move saves with the project page like any other change"
    - "A position added later joins at the end"
    - "A locked project offers no moving"
    - "An open offer and a draft invoice list their lines in the project's order, in the editor, the Vorschau and the PDF"
    - "An exported or replaced offer and an exported invoice keep the order they had when they froze"
  de:
    - "Jede Zeile bietet Nach oben und Nach unten an, die sie um eine Stelle verschieben; die erste Zeile kann nicht nach oben, die letzte nicht nach unten; auch deaktivierte und abgerechnete Zeilen lassen sich verschieben"
    - "Die neue Reihenfolge erscheint sofort und ist beim erneuten Öffnen des Projekts noch da; eine Verschiebung speichert mit der Projektseite wie jede andere Änderung"
    - "Eine später hinzugefügte Position kommt ans Ende"
    - "Ein gesperrtes Projekt bietet kein Verschieben an"
    - "Ein offenes Angebot und ein Rechnungsentwurf listen ihre Zeilen in der Reihenfolge des Projekts, im Editor, in der Vorschau und im PDF"
    - "Ein exportiertes oder ersetztes Angebot und eine exportierte Rechnung behalten die Reihenfolge, die sie beim Einfrieren hatten"
codeUrl: Server/Positions/PositionSortOrderInterceptor.cs
status: done
aiContribution:
  en: "The least urgent story of the level, and the one with the most to show about testing. It was held after two attempts because acceptance doubted the evidence, not the code. The AI recommended a third test round and then a fourth; I agreed both times, and the fourth found a real defect two code-reading passes had missed: a row held back by autosave kept its old place, so the stored order differed from the screen. The adversarial refuter overturned one criterion wrongly — the test it said was missing existed, and the coordinator disproved it by reading the test. The AI proposed keeping an older rule that a new row is always stored active; I overruled it. And at the walk, this story's new line order broke the offer editor of an earlier story, so saving an offer overwrote another position's text — only my hands-on walk found it, and the first test written to catch it passed by luck."
  de: "Die am wenigsten dringende Story des Levels und diejenige, die über das Testen am meisten zeigt. Sie wurde nach zwei Versuchen angehalten, weil die Abnahme die Belege bezweifelte, nicht den Code. Die KI empfahl eine dritte Testrunde und dann eine vierte; ich habe beide Male zugestimmt, und die vierte fand einen echten Fehler, den zwei codelesende Durchläufe übersehen hatten: Eine vom automatischen Speichern zurückgehaltene Zeile behielt ihren alten Platz, sodass die gespeicherte Reihenfolge vom Bildschirm abwich. Der adversariale Refuter kippte ein Kriterium zu Unrecht — der Test, den er vermisste, existierte, und der Koordinator widerlegte es durch Lesen des Tests. Die KI schlug vor, eine ältere Regel beizubehalten, nach der eine neue Zeile immer aktiv gespeichert wird; ich habe überstimmt. Und beim Durchgang brach die neue Zeilenreihenfolge dieser Story den Angebotseditor einer früheren Story, sodass das Speichern eines Angebots den Text einer anderen Position überschrieb — nur mein Durchgang von Hand fand es, und der erste Test, der es fangen sollte, bestand zufällig."
introducedIn: WZ-0.4.0
source: docs/user-stories/104-position-reordering.md
---
