---
title:
  en: "Exporting the Schlussrechnung closes and locks the project"
  de: "Der Export der Schlussrechnung schließt und sperrt das Projekt"
case: wurzel
status: proposed
date: 2026-10-24
relatedRequirements: [WZ-R-18]
context:
  en:
    - "The Schlussrechnung is the bill that ends a job, yet it had no effect on the project, and the project status was set only by hand. A job billed in full stayed open until someone remembered to close it — and a position could still be added behind a final bill that is frozen byte for byte, billable quantity that bill never covered."
  de:
    - "Die Schlussrechnung ist die Rechnung, die einen Auftrag beendet, hatte aber keine Wirkung auf das Projekt, und der Projektstatus wurde nur von Hand gesetzt. Ein vollständig abgerechneter Auftrag blieb offen, bis jemand daran dachte, ihn zu schließen — und hinter einer byteweise eingefrorenen Schlussrechnung ließ sich noch eine Position hinzufügen, abrechenbare Menge, die diese Rechnung nie abgedeckt hat."
decision:
  en:
    - "Exporting a Schlussrechnung sets its project to Geschlossen. Cancelling it sets the project back to the status it had before the export. These are the only two automatic status changes; every other change stays by hand, in any order."
    - "While an exported Schlussrechnung that is not cancelled stands, the project is locked exactly as a closed one is, and reopening it by hand is not offered until the Schlussrechnung is cancelled."
  de:
    - "Der Export einer Schlussrechnung setzt ihr Projekt auf Geschlossen. Ihre Stornierung setzt das Projekt auf den Status vor dem Export zurück. Das sind die einzigen beiden automatischen Statusänderungen; jede andere bleibt von Hand, in beliebiger Reihenfolge."
    - "Solange eine exportierte, nicht stornierte Schlussrechnung besteht, ist das Projekt genau wie ein geschlossenes gesperrt, und Wiedereröffnen von Hand wird erst angeboten, wenn die Schlussrechnung storniert ist."
consequences:
  en:
    - "The project has to remember its status from before the export, so a cancellation can restore it. The user learns of both changes from a notice afterwards, not from a question beforehand."
    - "Rejected: a warning on closing when no final invoice was exported (the AI's recommendation), requiring a final invoice before closing (a job never billed could not be closed), and leaving the project closed after the cancellation (the AI's reading, which I replaced at approval)."
    - "The vault still records both decisions as proposed, though they shipped with this level."
  de:
    - "Das Projekt muss sich seinen Status vor dem Export merken, damit eine Stornierung ihn wiederherstellen kann. Der Nutzer erfährt beide Änderungen danach aus einem Hinweis, nicht vorher aus einer Rückfrage."
    - "Verworfen: eine Warnung beim Schließen, wenn keine Schlussrechnung exportiert ist (die Empfehlung der KI), eine Schlussrechnung als Voraussetzung fürs Schließen (ein nie abgerechneter Auftrag ließe sich nicht schließen) und ein nach der Stornierung geschlossen bleibendes Projekt (die Lesart der KI, die ich bei der Freigabe ersetzt habe)."
    - "Im Vault stehen beide Entscheidungen noch als vorgeschlagen, obwohl sie mit diesem Level ausgeliefert wurden."
introducedIn: WZ-0.4.0
source: docs/decisions/business/bdr-0027-exporting-the-schlussrechnung-closes-the-project.md
---
