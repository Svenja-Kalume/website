---
title:
  en: "No invoice without a Betreff"
  de: "Keine Rechnung ohne Betreff"
case: wurzel
status: accepted
date: 2026-11-06
relatedRequirements: [WZ-R-21]
context:
  en:
    - "The Level-3 advance invoice made the Betreff optional, and the final invoice followed it; only the new quick invoice required one. At the Level 5 walk an invoice on an existing project saved with an empty Betreff — as specified. The agent recommended keeping it optional. I decided the opposite, as a general rule."
  de:
    - "Die Abschlagsrechnung aus Level 3 machte den Betreff optional, und die Schlussrechnung folgte ihr; nur die neue Schnellrechnung verlangte einen. Beim Durchgang durch Level 5 ließ sich eine Rechnung zu einem bestehenden Projekt mit leerem Betreff speichern — wie spezifiziert. Der Agent empfahl, ihn optional zu lassen. Ich habe das Gegenteil entschieden, als allgemeine Regel."
decision:
  en:
    - "Every invoice has a Betreff. A new draft on a project starts with the project name, as an offer does; a cleared Betreff stops the save, on the server too. Invoices already stored without one were filled with a placeholder text, whose wording is the agent's."
  de:
    - "Jede Rechnung hat einen Betreff. Ein neuer Entwurf zu einem Projekt beginnt wie ein Angebot mit der Projektbezeichnung; ein geleerter Betreff stoppt das Speichern, auch auf dem Server. Bereits ohne Betreff gespeicherte Rechnungen wurden mit einem Platzhaltertext gefüllt, dessen Formulierung vom Agenten stammt."
consequences:
  en:
    - "A stored PDF of an exported invoice is unchanged even where its row now carries the placeholder, so a Stornorechnung created from such an invoice copies the placeholder and can differ from the PDF it cancels. The published earlier story is not edited; this record is what changes its rule."
  de:
    - "Ein gespeichertes PDF einer exportierten Rechnung bleibt unverändert, auch wo ihre Zeile jetzt den Platzhalter trägt, sodass eine daraus erzeugte Stornorechnung den Platzhalter übernimmt und vom stornierten PDF abweichen kann. Die veröffentlichte frühere Story wird nicht bearbeitet; diese Entscheidung ist es, die ihre Regel ändert."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0035-no-invoice-without-a-betreff.md
---
