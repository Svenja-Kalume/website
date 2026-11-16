---
title:
  en: "Change a project's status"
  de: "Den Status eines Projekts ändern"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to change the status of a project"
  de: "den Status eines Projekts ändern"
soThat:
  en: "I can track where each job currently stands"
  de: "ich verfolgen kann, wo jeder Auftrag gerade steht"
requirement: WZ-R-18
acceptanceCriteria:
  en:
    - "The project page shows its Projektstatus, settable to Offen, In Bearbeitung or Geschlossen in any order; the change shows in the project page, the project list and the customer's project list"
    - "Setting Geschlossen saves pending edits first and asks for confirmation; Abbrechen leaves the status unchanged"
    - "A Geschlossen project is read-only: name and positions frozen, no new offer, Neue Version, Abschlagsrechnung or Schlussrechnung from any screen; its open offers and draft invoices open read-only, Vorschau still works, and Exportieren is disabled with „Projekt ist geschlossen“"
    - "An exported invoice of a Geschlossen project can still be cancelled, and a draft invoice can still be deleted"
    - "An edit saved from another screen after the project was closed is refused with a German message"
    - "Setting a Geschlossen project back warns that reopening is meant for a forgotten task on the same project and offers Abbrechen or Projekt wiedereröffnen"
    - "A change refused on a Geschlossen project is refused even when the request does not come from these screens"
  de:
    - "Die Projektseite zeigt den Projektstatus, einstellbar auf Offen, In Bearbeitung oder Geschlossen in beliebiger Reihenfolge; die Änderung erscheint auf der Projektseite, in der Projektliste und in der Projektliste des Kunden"
    - "Geschlossen zu setzen speichert offene Änderungen zuerst und fragt nach einer Bestätigung; Abbrechen lässt den Status unverändert"
    - "Ein geschlossenes Projekt ist schreibgeschützt: Bezeichnung und Positionen eingefroren, kein neues Angebot, keine Neue Version, Abschlagsrechnung oder Schlussrechnung von irgendeinem Bildschirm; seine offenen Angebote und Rechnungsentwürfe öffnen schreibgeschützt, die Vorschau funktioniert weiter, und Exportieren ist mit „Projekt ist geschlossen“ deaktiviert"
    - "Eine exportierte Rechnung eines geschlossenen Projekts lässt sich weiterhin stornieren, ein Rechnungsentwurf weiterhin löschen"
    - "Eine Änderung, die nach dem Schließen von einem anderen Bildschirm gespeichert wird, wird mit einer deutschen Meldung abgelehnt"
    - "Ein geschlossenes Projekt zurückzusetzen warnt, dass Wiedereröffnen für eine vergessene Aufgabe im selben Projekt gedacht ist, und bietet Abbrechen oder Projekt wiedereröffnen an"
    - "Eine auf einem geschlossenen Projekt abgelehnte Änderung wird auch abgelehnt, wenn die Anfrage nicht von diesen Bildschirmen kommt"
codeUrl: Server/Projects/ProjectStatusChanger.cs
bpmn: WZ-project-lifecycle-l5
status: done
aiContribution:
  en: "The first story of its block, and the one that changed how the next four were briefed. Two acceptance rounds overturned criteria without finding a single bug — every gap was a screen that rendered the rule with no test entering where the user enters. By the pipeline's rule that holds the story, and with it the whole block. The AI recommended one more round, and I chose it over accepting as is or stopping the block. The next four story agents were then told every sibling screen up front, and each passed on the first attempt. At the readiness gate I decided that closing saves first and that a blocked action says why; at the walk I decided a status change shows „Gespeichert“."
  de: "Die erste Story ihres Blocks und diejenige, die verändert hat, wie die nächsten vier beauftragt wurden. Zwei Abnahmerunden kippten Kriterien, ohne einen einzigen Fehler zu finden — jede Lücke war ein Bildschirm, der die Regel darstellte, ohne dass ein Test dort einstieg, wo der Nutzer einsteigt. Nach der Pipeline-Regel hält das die Story an und mit ihr den ganzen Block. Die KI empfahl eine weitere Runde, und ich habe sie gewählt statt einer Annahme ohne Änderungen oder eines Abbruchs des Blocks. Den nächsten vier Story-Agenten wurde danach jeder Geschwisterbildschirm vorab genannt, und jede bestand beim ersten Versuch. Am Readiness-Gate habe ich entschieden, dass Schließen zuerst speichert und eine blockierte Aktion ihren Grund nennt; beim Durchgang, dass eine Statusänderung „Gespeichert“ zeigt."
introducedIn: WZ-0.4.0
source: docs/user-stories/015-change-project-status.md
---
