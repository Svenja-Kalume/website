---
title:
  en: "Create a final invoice that closes a project’s billing"
  de: "Schlussrechnung anlegen, die die Abrechnung abschließt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to bill everything still open on a project in one document"
  de: "alles auf einem Projekt noch Offene in einem Dokument abzurechnen"
soThat:
  en: "the job is closed out in one step and nothing is left unbilled by accident"
  de: "der Auftrag in einem Schritt abgeschlossen wird und nichts versehentlich unabgerechnet bleibt"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "A project may have at most one non-cancelled final invoice; the entry point disappears while one exists, and the server answers `Conflict` if a second is attempted anyway"
    - "If the existing final invoice is cancelled, a new one can be created"
    - "All eligible positions are included automatically and cannot be deselected; each line bills the position’s full remaining quantity and the quantity is not editable"
    - "If no eligible positions exist, the form shows an empty state and nothing is persisted"
    - "Lines copy description, unit and unit price at save time, exactly as on an advance invoice"
  de:
    - "Ein Projekt darf höchstens eine nicht stornierte Schlussrechnung haben; der Einstieg verschwindet, solange eine existiert, und der Server antwortet mit `Conflict`, falls es trotzdem versucht wird"
    - "Ist die bestehende Schlussrechnung storniert, kann eine neue angelegt werden"
    - "Alle in Frage kommenden Positionen werden automatisch aufgenommen und lassen sich nicht abwählen; jede Zeile rechnet die volle Restmenge ab, und die Menge ist nicht änderbar"
    - "Gibt es keine in Frage kommenden Positionen, zeigt das Formular einen Leerzustand, und nichts wird gespeichert"
    - "Zeilen kopieren Beschreibung, Einheit und Einzelpreis beim Speichern, genau wie bei einer Abschlagsrechnung"
codeUrl: Server/Invoices/FinalInvoiceCreator.cs
adr: [WZ-ADR-009]
priority: must
status: done
aiContribution:
  en: "The AI insisted the one-final-invoice rule be enforced server-side as well as hidden in the UI, and identified what that costs: the project list row has to carry the fact, so the list response gains a flag computed server-side, while the project view can derive it from the invoices it already loads. That asymmetry — one surface asks the server, the other works it out locally — was its proposal and I accepted it, because the alternative was loading every project’s invoices to render a list."
  de: "Die KI bestand darauf, die Regel „höchstens eine Schlussrechnung“ auch serverseitig durchzusetzen und nicht nur in der Oberfläche zu verstecken, und benannte den Preis dafür: Die Zeile der Projektliste muss diese Tatsache mitführen, die Listenantwort erhält also ein serverseitig berechnetes Kennzeichen, während die Projektansicht es aus den ohnehin geladenen Rechnungen ableiten kann. Diese Asymmetrie — eine Oberfläche fragt den Server, die andere rechnet es selbst aus — war ihr Vorschlag, und ich habe ihn angenommen, weil die Alternative gewesen wäre, für eine Liste die Rechnungen jedes Projekts zu laden."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/033-create-final-invoice.md
---
