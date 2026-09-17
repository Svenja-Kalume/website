---
title:
  en: "Correct a draft invoice before it goes out"
  de: "Einen Rechnungsentwurf korrigieren, bevor er hinausgeht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to reopen a draft invoice and correct its lines"
  de: "einen Rechnungsentwurf wieder zu öffnen und seine Zeilen zu korrigieren"
soThat:
  en: "a bill leaves the house right rather than being cancelled afterwards"
  de: "eine Rechnung richtig das Haus verlässt, statt sie hinterher stornieren zu müssen"
requirement: WZ-R-13
acceptanceCriteria:
  en:
    - "Only a draft opens in the editor; a frozen invoice opens read-only"
    - "A line can be added by billing an eligible position, following the same eligibility and prefill rules as when the invoice was created"
    - "Billed quantity is the only line value editable in place; the copied description, unit and unit price are read-only and are not refreshed when the position changes"
    - "To pick up a corrected description or price, the user removes the line, corrects the position and adds the line again, which re-copies the current values"
    - "Removing a line returns its quantity to the position automatically"
    - "The net, VAT and gross amounts recalculate from the current lines, and the change is immediately reflected in both invoice lists"
  de:
    - "Nur ein Entwurf öffnet sich im Editor; eine eingefrorene Rechnung öffnet schreibgeschützt"
    - "Eine Zeile entsteht durch das Abrechnen einer in Frage kommenden Position, nach denselben Regeln für Auswahl und Vorbelegung wie beim Anlegen der Rechnung"
    - "Die abgerechnete Menge ist der einzige an Ort und Stelle änderbare Wert der Zeile; die kopierte Beschreibung, Einheit und der Einzelpreis sind schreibgeschützt und werden bei einer Änderung der Position nicht aktualisiert"
    - "Um eine korrigierte Beschreibung oder einen korrigierten Preis zu übernehmen, entfernt die Nutzerin die Zeile, korrigiert die Position und fügt die Zeile erneut hinzu — dabei werden die aktuellen Werte neu kopiert"
    - "Das Entfernen einer Zeile gibt ihre Menge automatisch an die Position zurück"
    - "Netto-, Steuer- und Gesamtbetrag werden aus den aktuellen Zeilen neu berechnet, und die Änderung erscheint sofort in beiden Rechnungslisten"
codeUrl: Client/Invoices/EditInvoicePage.razor
priority: must
status: done
aiContribution:
  en: "The AI proposed the remove-and-re-add route for correcting a copied line rather than a “refresh from position” button, and the reasoning is what makes it right: a refresh button would be a second way for a bill to change its meaning, and the user would have no way to tell from the line whether it still reflected what was agreed. Making the correction explicit costs two clicks and keeps the line an honest snapshot."
  de: "Die KI schlug den Weg über Entfernen und erneutes Hinzufügen vor, statt einer Schaltfläche „aus Position aktualisieren“ — und die Begründung macht es richtig: Eine solche Schaltfläche wäre ein zweiter Weg, auf dem eine Rechnung ihre Bedeutung ändert, und der Zeile wäre nicht anzusehen, ob sie noch das Vereinbarte abbildet. Die Korrektur ausdrücklich zu machen kostet zwei Klicks und hält die Zeile als ehrlichen Snapshot."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/047-edit-draft-invoice.md
---
