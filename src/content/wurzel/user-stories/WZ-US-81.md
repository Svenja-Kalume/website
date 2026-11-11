---
title:
  en: "Start an invoice from the customer or from an offer"
  de: "Eine Rechnung aus dem Kunden oder aus einem Angebot beginnen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to start an invoice from the customer view or from an offer"
  de: "eine Rechnung aus der Kundenansicht oder aus einem Angebot heraus beginnen"
soThat:
  en: "I can bill a job — or work that never had a project — without first navigating into the project"
  de: "ich einen Auftrag — oder Arbeit, die nie ein Projekt hatte — abrechnen kann, ohne erst ins Projekt zu navigieren"
requirement: WZ-R-21
acceptanceCriteria:
  en:
    - "The customer edit view shows Abschlagsrechnung and Schlussrechnung, each with an arrow; with exactly one project that can take the invoice, it opens for that project"
    - "With several, a picker lists every project of the customer and Neues Projekt erstellen; a project that cannot take the invoice is greyed with its reason, the lock's reason first"
    - "With none, or from the arrow's Neues Projekt erstellen, an invoice of that type opens without a project: Betreff pre-filled with the customer's name, lines described with Neue Position, an optional different project address"
    - "Nothing is saved while the Betreff is empty or no line is described; the first save creates project, positions and invoice together, exactly once, and a failed save creates nothing"
    - "After the first save the invoice is an ordinary draft of its new project, which keeps the name and address it was created with; deleting the draft keeps the project and its positions"
    - "The offer editor and a locked offer's view show both invoice buttons for the offer's project, disabled with the reason when the project cannot take the invoice and with „Angebot noch nicht gespeichert“ while the offer is unsaved"
    - "No invoice is saved without a Betreff, wherever it is started"
  de:
    - "Die Kundenansicht zeigt Abschlagsrechnung und Schlussrechnung, jeweils mit Pfeil; kann genau ein Projekt die Rechnung aufnehmen, öffnet sie sich für dieses Projekt"
    - "Bei mehreren listet eine Auswahl jedes Projekt des Kunden und Neues Projekt erstellen; ein Projekt, das die Rechnung nicht aufnehmen kann, ist mit seinem Grund ausgegraut, der Grund der Sperre zuerst"
    - "Bei keinem, oder über Neues Projekt erstellen am Pfeil, öffnet sich eine Schnellrechnung dieses Typs: noch kein Projekt, Betreff mit dem Kundennamen vorbelegt, Zeilen über Neue Position beschrieben, eine optionale abweichende Projektadresse"
    - "Solange der Betreff leer ist oder keine Zeile beschrieben ist, wird nichts gespeichert; das erste Speichern legt Projekt, Positionen und Rechnung gemeinsam an, genau einmal, und ein fehlgeschlagenes Speichern legt nichts an"
    - "Nach dem ersten Speichern ist die Rechnung ein gewöhnlicher Entwurf ihres neuen Projekts, das Bezeichnung und Adresse aus der Anlage behält; den Entwurf zu löschen lässt Projekt und Positionen bestehen"
    - "Angebotseditor und die Ansicht eines gesperrten Angebots zeigen beide Rechnungsschaltflächen für das Projekt des Angebots, mit Grund deaktiviert, wenn das Projekt die Rechnung nicht aufnehmen kann, und mit „Angebot noch nicht gespeichert“, solange das Angebot ungespeichert ist"
    - "Keine Rechnung wird ohne Betreff gespeichert, wo auch immer sie begonnen wird"
codeUrl: Server/Invoices/InvoiceStartRule.cs
bpmn: WZ-invoice-entry
adr: [WZ-BDR-35]
status: done
aiContribution:
  en: "This story was Ready, with an approved spec, when another story's consistency check found the spec contradicting a rule decided the same day. The AI offered two options: correct the spec and keep it Ready, or leave the conflict for delivery. I took neither; reading the details, I saw the spec had misread the need, and I described the intended design — one button shaped like the offer button, with an arrow to pick any project or start a new one. The story went back to grooming and absorbed the quick invoice. At the walk an invoice on an existing project saved with an empty subject, as specified; the AI recommended keeping it that way, and I overruled it with a general rule: no invoice without a Betreff. The placeholder text for invoices already stored without one is the AI's wording."
  de: "Diese Story war Ready, mit freigegebener Spezifikation, als die Konsistenzprüfung einer anderen Story fand, dass die Spezifikation einer am selben Tag beschlossenen Regel widersprach. Die KI bot zwei Möglichkeiten an: die Spezifikation korrigieren und Ready lassen, oder den Widerspruch der Umsetzung überlassen. Ich habe keine genommen; beim Lesen der Einzelheiten sah ich, dass die Spezifikation den Bedarf falsch gelesen hatte, und habe den gewollten Entwurf beschrieben — eine Schaltfläche wie die für Angebote, mit einem Pfeil, um ein beliebiges Projekt zu wählen oder ein neues zu beginnen. Die Story ging ins Grooming zurück und nahm die Schnellrechnung auf. Beim Durchgang ließ sich eine Rechnung zu einem bestehenden Projekt mit leerem Betreff speichern, wie spezifiziert; die KI empfahl, das so zu lassen, und ich habe mit einer allgemeinen Regel überstimmt: keine Rechnung ohne Betreff. Der Platzhaltertext für bereits ohne Betreff gespeicherte Rechnungen ist die Formulierung der KI."
introducedIn: WZ-0.4.0
source: docs/user-stories/112-create-invoice-from-customer-or-offer-view.md
---
