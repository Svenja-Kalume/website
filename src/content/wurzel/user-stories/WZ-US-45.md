---
title:
  en: "See and start a project’s invoices from the project itself"
  de: "Die Rechnungen eines Projekts im Projekt sehen und anlegen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to see a project’s billing history inside the project view and start a new invoice from there"
  de: "die Abrechnungshistorie eines Projekts in der Projektansicht zu sehen und von dort eine neue Rechnung zu beginnen"
soThat:
  en: "I can review and bill without navigating away from the job I am looking at"
  de: "ich prüfen und abrechnen kann, ohne den Auftrag zu verlassen, den ich gerade ansehe"
requirement: WZ-R-13
acceptanceCriteria:
  en:
    - "The project edit view has an invoice section listing that project’s invoices, newest first by the same sort rule as the general list"
    - "Each row shows number, invoice date, due date, type, state, gross amount and subject where set; a cancelled invoice is marked STORNIERT"
    - "A draft row opens the editor, a frozen row opens the read-only view"
    - "An **Abschlagsrechnung** button is always available while the project is saved and opens the creation form with the project prefilled"
    - "A **Schlussrechnung** button does the same but is hidden while a non-cancelled final invoice already exists"
    - "With no invoices yet the section shows an empty state and keeps both buttons; the section is not shown at all before the project has been saved"
  de:
    - "Die Projektbearbeitung hat einen Rechnungsbereich, der die Rechnungen dieses Projekts auflistet, neueste zuerst, nach derselben Sortierregel wie die allgemeine Liste"
    - "Jede Zeile zeigt Nummer, Rechnungsdatum, Fälligkeitsdatum, Art, Status, Gesamtbetrag und, falls gesetzt, den Betreff; eine stornierte Rechnung ist als STORNIERT gekennzeichnet"
    - "Eine Entwurfszeile öffnet den Editor, eine eingefrorene Zeile die Leseansicht"
    - "Eine Schaltfläche **Abschlagsrechnung** ist immer verfügbar, solange das Projekt gespeichert ist, und öffnet das Anlegeformular mit vorbelegtem Projekt"
    - "Eine Schaltfläche **Schlussrechnung** tut dasselbe, ist aber ausgeblendet, solange bereits eine nicht stornierte Schlussrechnung existiert"
    - "Ohne Rechnungen zeigt der Bereich einen Leerzustand und behält beide Schaltflächen; vor dem ersten Speichern des Projekts wird der Bereich gar nicht gezeigt"
codeUrl: Client/Invoices/ProjectInvoiceList.razor
priority: must
status: done
aiContribution:
  en: "The AI pointed out that the two lists would otherwise diverge in their sort behaviour, since each was specified on its own, and proposed stating the rule once and applying it to both. It also proposed hiding the section entirely until the project has been saved rather than showing an empty section with dead buttons — an unsaved project has no id to attach an invoice to, and a button that cannot work is worse than no button."
  de: "Die KI wies darauf hin, dass die beiden Listen sonst in ihrem Sortierverhalten auseinanderliefen, weil jede für sich spezifiziert wurde, und schlug vor, die Regel einmal festzuhalten und auf beide anzuwenden. Sie schlug außerdem vor, den Bereich vor dem ersten Speichern des Projekts ganz auszublenden statt einen leeren Bereich mit toten Schaltflächen zu zeigen — ein ungespeichertes Projekt hat keine Id, an die eine Rechnung hängen könnte, und eine Schaltfläche, die nicht funktionieren kann, ist schlechter als keine."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/036-project-invoice-list.md
---
