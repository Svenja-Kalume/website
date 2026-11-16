---
title:
  en: "A project is locked while an exported Schlussrechnung stands"
  de: "Ein Projekt ist gesperrt, solange eine exportierte Schlussrechnung besteht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a project locked once its final invoice is issued"
  de: "dass ein Projekt gesperrt wird, sobald seine Schlussrechnung gestellt ist"
soThat:
  en: "no position can be added or changed behind a frozen Schlussrechnung"
  de: "keine Position hinter einer eingefrorenen Schlussrechnung hinzugefügt oder geändert werden kann"
requirement: WZ-R-18
acceptanceCriteria:
  en:
    - "A project with an exported Schlussrechnung that is not cancelled is read-only exactly as a Geschlossen project is, whatever its status, and the page says the Schlussrechnung is exported"
    - "A blocked Exportieren reads „Schlussrechnung exportiert“ instead of „Projekt ist geschlossen“"
    - "A Schlussrechnung that is still a draft does not lock the project"
    - "Cancelling the exported Schlussrechnung, by Stornorechnung or as a Kleinunternehmer, lifts the lock"
    - "While it stands, the reopen dialog does not offer Projekt wiedereröffnen and gives „Schlussrechnung exportiert – erst stornieren“"
    - "A change refused by the lock is refused even when the request does not come from these screens"
  de:
    - "Ein Projekt mit einer exportierten, nicht stornierten Schlussrechnung ist genau wie ein geschlossenes Projekt schreibgeschützt, egal welchen Status es hat, und die Seite sagt, dass die Schlussrechnung exportiert ist"
    - "Ein blockiertes Exportieren nennt „Schlussrechnung exportiert“ statt „Projekt ist geschlossen“"
    - "Eine Schlussrechnung, die noch Entwurf ist, sperrt das Projekt nicht"
    - "Die exportierte Schlussrechnung zu stornieren, per Stornorechnung oder als Kleinunternehmer, hebt die Sperre auf"
    - "Solange sie besteht, bietet der Dialog zum Wiedereröffnen Projekt wiedereröffnen nicht an und nennt „Schlussrechnung exportiert – erst stornieren“"
    - "Eine von der Sperre abgelehnte Änderung wird auch abgelehnt, wenn die Anfrage nicht von diesen Bildschirmen kommt"
codeUrl: Server/Projects/ProjectLockRule.cs
bpmn: WZ-project-lifecycle-l5
adr: [WZ-BDR-27]
status: done
aiContribution:
  en: "Finding 18 of the Level-3 walk, parked until the project had a status at all. When the level was cut into blocks, the AI recommended putting the closure rules ahead of the frozen-offer view, because this is an integrity hole and the view is convenience; I agreed. The decisions on when the lock applies — once exported, not as a draft — and what it freezes were mine. Its readiness gate ran eight check agents and found nothing blocking, two claims refuted by the workflow's own refuter."
  de: "Befund 18 aus dem Level-3-Durchgang, geparkt, bis das Projekt überhaupt einen Status hatte. Beim Zuschnitt des Levels in Blöcke empfahl die KI, die Abschlussregeln vor die Ansicht eingefrorener Angebote zu stellen, weil dies eine Integritätslücke ist und die Ansicht Komfort; ich habe zugestimmt. Die Entscheidungen, wann die Sperre gilt — sobald exportiert, nicht als Entwurf — und was sie einfriert, waren meine. Ihr Readiness-Gate lief mit acht Prüfagenten und fand nichts Blockierendes, zwei Behauptungen wurden vom eigenen Refuter des Workflows widerlegt."
introducedIn: WZ-0.4.0
source: docs/user-stories/129-project-locked-while-final-invoice-exists.md
---
