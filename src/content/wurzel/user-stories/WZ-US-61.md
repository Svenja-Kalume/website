---
title:
  en: "A new invoice’s actions work as soon as it is saved"
  de: "Die Aktionen einer neuen Rechnung wirken, sobald sie gespeichert ist"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a newly created invoice’s actions to be available as soon as it is saved"
  de: "dass die Aktionen einer neu angelegten Rechnung verfügbar sind, sobald sie gespeichert ist"
soThat:
  en: "I can preview, export or delete it without reloading the page"
  de: "ich sie ansehen, exportieren oder löschen kann, ohne die Seite neu zu laden"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "After a new invoice’s first successful save, **Vorschau**, **Exportieren** and **Löschen** are available without reloading or re-navigating"
    - "The pending autosave is not interrupted by whatever makes them available — typing continues and nothing is lost"
    - "The actions behave identically to those on the edit page, including the save-first rule and where each action leaves the user afterwards"
    - "Both create paths are covered"
    - "Regression coverage drives a create page through its first save and asserts the actions are reachable"
  de:
    - "Nach dem ersten erfolgreichen Speichern einer neuen Rechnung sind **Vorschau**, **Exportieren** und **Löschen** verfügbar, ohne Neuladen und ohne erneutes Navigieren"
    - "Das ausstehende Autosave wird durch den Mechanismus, der sie verfügbar macht, nicht unterbrochen — das Tippen läuft weiter, und nichts geht verloren"
    - "Die Aktionen verhalten sich wie auf der Bearbeitungsseite, einschließlich der Speichern-zuerst-Regel und dessen, wo jede Aktion die Nutzerin danach zurücksetzt"
    - "Beide Anlegewege sind abgedeckt"
    - "Ein Regressionstest führt eine Anlegeseite durch ihr erstes Speichern und prüft, dass die Aktionen erreichbar sind"
codeUrl: Client/Invoices/InvoiceEditorActions.razor
adr: [WZ-ADR-013]
priority: must
status: done
aiContribution:
  en: "The obvious implementation — re-render or re-navigate once the id exists — is what the AI proposed first, and it is what the second criterion exists to forbid. Making the actions appear by remounting the page would have torn out the autosave the user was still typing into, trading a visible defect for an invisible one. The eventual approach had to leave the pending save alone, and the story says so rather than leaving it to whoever implements it."
  de: "Die naheliegende Umsetzung — neu rendern oder neu navigieren, sobald die Id existiert — war der erste Vorschlag der KI, und genau dagegen steht das zweite Kriterium. Die Aktionen durch ein Neuaufsetzen der Seite erscheinen zu lassen hätte das Autosave zerrissen, in das die Nutzerin noch tippte — ein sichtbarer Fehler wäre gegen einen unsichtbaren getauscht worden. Der gewählte Weg musste das ausstehende Speichern unangetastet lassen, und die Story sagt das, statt es der Umsetzung zu überlassen."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/131-invoice-actions-available-after-first-save.md
---
