---
title:
  en: "Open an issued bill and see exactly what the customer received"
  de: "Eine gestellte Rechnung öffnen und genau das sehen, was der Kunde erhalten hat"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to look at a frozen invoice months later"
  de: "eine eingefrorene Rechnung Monate später ansehen können"
soThat:
  en: "I can answer a question about that bill on the phone without any doubt about what I am looking at"
  de: "ich am Telefon eine Frage zu dieser Rechnung beantworten kann, ohne zu zweifeln, was ich da ansehe"
requirement: WZ-R-13
acceptanceCriteria:
  en:
    - "The body of the view is the stored page images of that invoice’s export, stacked and sized to the viewport — served as stored, never re-rendered from current data"
    - "No line-item table, no header form and no computed values are rendered from live data"
    - "A compact header strip shows Rechnungsnummer, Rechnungsdatum, Fälligkeitsdatum, Rechnungsart, Rechnungsstatus and Gesamtbetrag beside the document"
    - "Herunterladen is available in every frozen state and serves the stored bytes under the stored filename, changing nothing and asking nothing"
    - "If the stored document cannot be loaded, a plain-German error replaces the pages and the header strip still renders so the invoice can be identified — there is deliberately no data-table fallback"
    - "Nothing in this view is editable: no input, no autosave, no state change other than the cancellation actions later added here"
  de:
    - "Der Inhalt der Ansicht sind die gespeicherten Seitenbilder des Exports dieser Rechnung, gestapelt und auf das Sichtfenster skaliert — unverändert ausgeliefert, nie aus aktuellen Daten neu erzeugt"
    - "Keine Positionstabelle, kein Kopfformular und keine berechneten Werte werden aus Live-Daten gerendert"
    - "Ein kompakter Kopfstreifen zeigt Rechnungsnummer, Rechnungsdatum, Fälligkeitsdatum, Rechnungsart, Rechnungsstatus und Gesamtbetrag neben dem Dokument"
    - "Herunterladen ist in jedem eingefrorenen Status verfügbar und liefert die gespeicherten Bytes unter dem gespeicherten Dateinamen — ohne etwas zu ändern und ohne nachzufragen"
    - "Lässt sich das gespeicherte Dokument nicht laden, ersetzt eine deutsche Fehlermeldung die Seiten, und der Kopfstreifen erscheint weiterhin, damit die Rechnung identifizierbar bleibt — einen Tabellen-Fallback gibt es bewusst nicht"
    - "Nichts in dieser Ansicht ist änderbar: keine Eingabe, kein Autosave, keine Statusänderung außer den später hier ergänzten Storno-Aktionen"
codeUrl: Client/Invoices/ViewInvoicePage.razor
adr: [WZ-ADR-008]
priority: must
status: done
aiContribution:
  en: "The AI offered a data-table fallback for the case where the stored document cannot be loaded, and it is the obvious engineering instinct: show something rather than an error. I rejected it, and that rejection is the substance of this story. A fallback reintroduces the app-copy-versus-customer-copy divergence precisely where the user cannot tell the two apart — on the phone, mid-dispute, trusting the screen. A missing stored document is a defect to fix, not a state to paper over, so the correct outcome there is a visible error and no download button."
  de: "Die KI bot für den Fall, dass sich das gespeicherte Dokument nicht laden lässt, einen Tabellen-Fallback an — der naheliegende Entwicklerimpuls: lieber etwas zeigen als einen Fehler. Ich habe ihn abgelehnt, und diese Ablehnung ist der Kern dieser Story. Ein Fallback bringt die Divergenz zwischen App-Kopie und Kundenkopie genau dort zurück, wo der Nutzer beide nicht unterscheiden kann — am Telefon, mitten in der Klärung, im Vertrauen auf den Bildschirm. Ein fehlendes gespeichertes Dokument ist ein zu behebender Fehler, kein zu übertünchender Zustand; richtig ist dort eine sichtbare Fehlermeldung und keine Download-Schaltfläche."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/034-view-invoice.md
---
