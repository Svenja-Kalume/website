---
title:
  en: "Exporting the Schlussrechnung closes the project"
  de: "Der Export der Schlussrechnung schließt das Projekt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "exporting the Schlussrechnung to close the project and to stop further advance invoices"
  de: "dass der Export der Schlussrechnung das Projekt schließt und weitere Abschlagsrechnungen verhindert"
soThat:
  en: "a job billed in full is finished without a second step"
  de: "ein vollständig abgerechneter Auftrag ohne zweiten Schritt abgeschlossen ist"
requirement: WZ-R-18
acceptanceCriteria:
  en:
    - "Exporting a Schlussrechnung of an Offen or In Bearbeitung project sets it to Geschlossen without asking first, and the invoice view shows „Projekt wurde geschlossen“; its open offers and draft invoices turn read-only"
    - "Exporting it from the project page's Rechnungen list shows the same notice and turns the page read-only at once, without a reload"
    - "Cancelling the exported Schlussrechnung sets the project back to the status it had before the export and shows „Projekt wurde wiedereröffnet“"
    - "While a Schlussrechnung that is not cancelled exists, a draft included, no Abschlagsrechnung can be started, with the reason „Schlussrechnung bereits vorhanden“; on a project that is also locked the lock's reason shows instead"
    - "An Abschlagsrechnung refused this way is refused even when the request does not come from these screens"
  de:
    - "Der Export einer Schlussrechnung eines Projekts mit Status Offen oder In Bearbeitung setzt es ohne Rückfrage auf Geschlossen, und die Rechnungsansicht zeigt „Projekt wurde geschlossen“; seine offenen Angebote und Rechnungsentwürfe werden schreibgeschützt"
    - "Der Export aus der Rechnungsliste der Projektseite zeigt denselben Hinweis und schaltet die Seite sofort schreibgeschützt, ohne Neuladen"
    - "Die exportierte Schlussrechnung zu stornieren setzt das Projekt auf den Status vor dem Export zurück und zeigt „Projekt wurde wiedereröffnet“"
    - "Solange eine nicht stornierte Schlussrechnung besteht, auch als Entwurf, lässt sich keine Abschlagsrechnung beginnen, mit dem Grund „Schlussrechnung bereits vorhanden“; ist das Projekt zusätzlich gesperrt, erscheint stattdessen der Grund der Sperre"
    - "Eine so abgelehnte Abschlagsrechnung wird auch abgelehnt, wenn die Anfrage nicht von diesen Bildschirmen kommt"
codeUrl: Server/Invoices/FinalInvoiceProjectCloser.cs
bpmn: WZ-project-lifecycle-l5
adr: [WZ-BDR-27]
status: done
aiContribution:
  en: "I chose a stronger rule than the AI proposed, twice. It recommended a warning in the close dialog when no final invoice had been exported, keeping the status fully manual; I decided that exporting the final invoice closes the project. It then read an earlier answer of mine as \"the project stays closed when that invoice is cancelled\"; at approval I decided cancelling reopens it to its earlier status. Both notice texts are the AI's wording. Three days later the plan-drift check found that this story's approved plan and the invoice-entry story's plan would show different reasons for the same blocked button. The AI recommended the lock's reason everywhere, which reversed one of my own approval choices, and I agreed before any code was written. This story's own readiness check is also what sent the already approved invoice-entry story back to grooming."
  de: "Zweimal habe ich eine stärkere Regel gewählt, als die KI vorschlug. Sie empfahl eine Warnung im Schließen-Dialog, wenn keine Schlussrechnung exportiert war, und einen weiterhin rein manuellen Status; ich habe entschieden, dass der Export der Schlussrechnung das Projekt schließt. Danach las sie eine frühere Antwort von mir als „das Projekt bleibt geschlossen, wenn diese Rechnung storniert wird“; bei der Freigabe habe ich entschieden, dass die Stornierung es auf den vorherigen Status wiedereröffnet. Beide Hinweistexte stammen von der KI. Drei Tage später fand die Plan-Drift-Prüfung, dass der freigegebene Plan dieser Story und der Plan der Story zum Rechnungseinstieg für dieselbe blockierte Schaltfläche verschiedene Gründe zeigen würden. Die KI empfahl überall den Grund der Sperre, was eine meiner eigenen Freigabeentscheidungen umkehrte, und ich habe zugestimmt, bevor Code geschrieben war. Die Readiness-Prüfung dieser Story war es auch, die die bereits freigegebene Story zum Rechnungseinstieg ins Grooming zurückschickte."
introducedIn: WZ-0.4.0
source: docs/user-stories/045-invoice-paid-and-project-closure-rules.md
changes: [WZ-US-37]
---
