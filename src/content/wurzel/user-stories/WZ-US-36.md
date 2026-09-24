---
title:
  en: "Create an advance invoice for a project"
  de: "Abschlagsrechnung für ein Projekt anlegen"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to bill part of a running project by selecting the positions and quantities I want to invoice now"
  de: "einen Teil eines laufenden Projekts abrechnen, indem ich die Positionen und Mengen auswähle, die ich jetzt in Rechnung stelle"
soThat:
  en: "money comes in during the job instead of only at the end"
  de: "während des Auftrags Geld hereinkommt und nicht erst am Ende"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "The invoice number is generated on save as `yyyy-nnn`, from a counter shared with final invoices that resets each year"
    - "The invoice date stays empty for the whole draft phase and is shown as “—”; it is stamped only when the PDF is generated"
    - "Only positions that are not disabled and still have a remaining quantity are selectable. The story asks for a fully-billed position to be shown greyed out rather than hidden; that half did not survive the test walks and both forms hide it knowingly — see the Level 4 story that records the reversal"
    - "Each line prefills the position’s remaining quantity, may be reduced, and shows the unit next to the figure (h, m², m³, lfm, km, t)"
    - "On save each line copies description, unit and unit price from the position — the line is the snapshot, so a later edit to the position does not change it and it never writes back"
    - "The invoice header and all its lines are committed together or not at all; nothing is persisted until the form is valid and one line is selected, so an abandoned page leaves no orphan invoice"
  de:
    - "Die Rechnungsnummer wird beim Speichern als `yyyy-nnn` erzeugt, aus einem mit Schlussrechnungen geteilten Zähler, der jedes Jahr neu beginnt"
    - "Das Rechnungsdatum bleibt im gesamten Entwurfsstadium leer und wird als „—“ angezeigt; gestempelt wird es erst beim Erzeugen des PDFs"
    - "Auswählbar sind nur Positionen, die nicht deaktiviert sind und noch eine Restmenge haben. Die Story verlangt, eine vollständig abgerechnete Position ausgegraut statt ausgeblendet zu zeigen; diese Hälfte überstand die Testdurchläufe nicht, und beide Formulare blenden sie wissentlich aus — siehe die Story aus Level 4, die die Umkehrung festhält"
    - "Jede Zeile ist mit der Restmenge der Position vorbelegt, kann verringert werden und zeigt die Einheit neben der Zahl (h, m², m³, lfm, km, t)"
    - "Beim Speichern kopiert jede Zeile Beschreibung, Einheit und Einzelpreis von der Position — die Zeile ist der Snapshot: Eine spätere Änderung der Position ändert sie nicht, und sie schreibt nie zurück"
    - "Rechnungskopf und Zeilen werden gemeinsam gespeichert oder gar nicht; nichts wird gespeichert, bevor das Formular gültig ist und eine Zeile ausgewählt wurde — eine verlassene Seite hinterlässt also keine verwaiste Rechnung"
codeUrl: Server/Invoices/InvoiceCreator.cs
adr: [WZ-ADR-009]
priority: must
status: done
aiContribution:
  en: "The AI proposed that the invoice line be the snapshot rather than pointing at a separate snapshot entity, as the offer side does: an invoice line never reads live position data, so a copied description, unit and price on the line itself carries the whole obligation, and a second entity would only add a place for the two to disagree. It also proposed showing fully-billed positions greyed out instead of hiding them, so the user can see that a position exists and why it is unavailable. This story shipped with a cap that refused to bill more than a position had left — sound arithmetic that a later test walk reported as a defect; the reversal is recorded on the story that made it, not by editing this one."
  de: "Die KI schlug vor, dass die Rechnungszeile der Snapshot ist, statt auf eine eigene Snapshot-Entität zu verweisen wie auf der Angebotsseite: Eine Rechnungszeile liest nie Live-Daten der Position, also trägt die kopierte Beschreibung, Einheit und der Preis auf der Zeile selbst die ganze Verpflichtung — eine zweite Entität wäre nur ein weiterer Ort, an dem beide auseinanderlaufen können. Sie schlug außerdem vor, vollständig abgerechnete Positionen ausgegraut statt ausgeblendet zu zeigen, damit sichtbar bleibt, dass die Position existiert und warum sie nicht verfügbar ist. Mit dieser Story ging eine Begrenzung in Betrieb, die mehr abzurechnen verweigerte, als auf einer Position übrig war — rechnerisch stimmig, von einem späteren Testdurchlauf aber als Fehler gemeldet; die Umkehrung steht auf der Story, die sie vorgenommen hat, nicht in dieser."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/031-create-advance-invoice.md
---
