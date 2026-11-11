---
title:
  en: "Describe a new position in the invoice editor"
  de: "Eine neue Position im Rechnungseditor beschreiben"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to describe a brand-new position directly while building an invoice"
  de: "eine ganz neue Position direkt beim Erstellen einer Rechnung beschreiben"
soThat:
  en: "I can bill work that has no suitable position yet, without leaving the draft to add one on the project first"
  de: "ich Arbeit abrechnen kann, für die es noch keine passende Position gibt, ohne den Entwurf zu verlassen, um sie zuerst im Projekt anzulegen"
requirement: WZ-R-21
acceptanceCriteria:
  en:
    - "A draft invoice offers Neue Position below its table, with the offer editor's field rules; nothing is added while a field is invalid"
    - "In an Abschlagsrechnung the new line is selected and bills its full quantity, can be lowered or billed above, and the save then raises the new position; in a Schlussrechnung it bills its full quantity, unchangeable"
    - "The new position is saved with the invoice's own save, not on Hinzufügen; a draft never saved leaves no position behind, and each new line becomes exactly one position however often the draft is saved"
    - "After the save the project's table shows the new position, and deleting the draft or removing the line keeps it as unbilled work"
    - "An issued invoice, and a draft whose project is locked, offer no Neue Position"
  de:
    - "Ein Rechnungsentwurf bietet unter seiner Tabelle Neue Position an, mit den Feldregeln des Angebotseditors; solange ein Feld ungültig ist, wird nichts hinzugefügt"
    - "In einer Abschlagsrechnung ist die neue Zeile ausgewählt und rechnet ihre volle Menge ab, lässt sich senken oder darüber hinaus abrechnen, und das Speichern hebt dann die neue Position an; in einer Schlussrechnung rechnet sie ihre volle Menge ab, unveränderlich"
    - "Die neue Position wird mit dem eigenen Speichern der Rechnung gespeichert, nicht bei Hinzufügen; ein nie gespeicherter Entwurf hinterlässt keine Position, und jede neue Zeile wird genau eine Position, egal wie oft der Entwurf gespeichert wird"
    - "Nach dem Speichern zeigt die Tabelle des Projekts die neue Position, und den Entwurf zu löschen oder die Zeile zu entfernen lässt sie als nicht abgerechnete Arbeit bestehen"
    - "Eine gestellte Rechnung und ein Entwurf, dessen Projekt gesperrt ist, bieten keine Neue Position an"
codeUrl: Server/Invoices/NewInvoicePositionWriter.cs
status: done
aiContribution:
  en: "Its readiness check found the groomed text capping a new line \"as on any other line\" — a cap Level 4 had reversed. The stale wording traced back to an older rule that still read \"capped at remaining\", because its successor never named it as superseded; I decided a new line bills above its quantity like any line. In delivery the story was held after its second acceptance attempt, again for missing tests, not wrong code: the final invoice's own save path had no test for leaving, exporting, or undoing. I released it for one more round; seven browser tests closed the gaps without a code change."
  de: "Ihre Readiness-Prüfung fand, dass der gegroomte Text eine neue Zeile „wie jede andere Zeile“ begrenzte — eine Begrenzung, die Level 4 umgekehrt hatte. Die veraltete Formulierung ging auf eine ältere Regel zurück, die noch „auf die Restmenge begrenzt“ lautete, weil ihre Nachfolgerin sie nie als abgelöst benannt hatte; ich habe entschieden, dass eine neue Zeile wie jede Zeile über ihre Menge hinaus abrechnen darf. In der Umsetzung wurde die Story nach ihrem zweiten Abnahmeversuch angehalten, wieder wegen fehlender Tests, nicht wegen falschen Codes: Der eigene Speicherweg der Schlussrechnung hatte keinen Test für Verlassen, Exportieren oder Rückgängigmachen. Ich habe sie für eine weitere Runde freigegeben; sieben Browsertests schlossen die Lücken ohne Codeänderung."
introducedIn: WZ-0.4.0
source: docs/user-stories/113-create-position-in-invoice-editor.md
---
