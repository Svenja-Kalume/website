---
title:
  en: "An issued invoice is frozen; only a draft can be deleted"
  de: "Eine gestellte Rechnung ist eingefroren; nur ein Entwurf ist löschbar"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "an issued bill to be impossible to edit, and an unissued draft to be possible to delete outright"
  de: "dass eine gestellte Rechnung nicht mehr änderbar ist und ein nicht gestellter Entwurf ganz gelöscht werden kann"
soThat:
  en: "nothing I have sent can change behind my back, and a mistake made before sending leaves no half-record"
  de: "nichts Versendetes sich hinter meinem Rücken ändert und ein Fehler vor dem Versenden keinen halben Datensatz hinterlässt"
requirement: WZ-R-13
acceptanceCriteria:
  en:
    - "Once exported, no invoice field and no line may be added, edited or removed; the server answers `Conflict` to any such write, and the freeze covers Exported and Cancelled alike"
    - "Draft is the only editable state; a frozen invoice is excluded from the edit path and opens read-only with its status badge"
    - "A draft can be deleted, after a confirmation whose German text names the number and states plainly that it will not be reused and that a gap appears in the sequence"
    - "On confirmation the invoice and all its lines are deleted in one transaction and disappear from both lists"
    - "The billed quantity of every deleted line returns to its position automatically, because the remaining quantity is computed over existing lines rather than stored"
    - "Deleting an invoice in any other state is impossible: the action is not offered and the request returns `Conflict`"
  de:
    - "Nach dem Export darf kein Rechnungsfeld und keine Zeile mehr hinzugefügt, geändert oder entfernt werden; der Server antwortet auf jeden solchen Schreibversuch mit `Conflict`, und die Sperre gilt für Exportiert und Storniert gleichermaßen"
    - "Entwurf ist der einzige änderbare Status; eine eingefrorene Rechnung ist vom Bearbeitungspfad ausgeschlossen und öffnet schreibgeschützt mit ihrem Status-Kennzeichen"
    - "Ein Entwurf kann gelöscht werden, nach einer Bestätigung, deren deutscher Text die Nummer nennt und klar sagt, dass sie nicht erneut vergeben wird und in der Nummernfolge eine Lücke entsteht"
    - "Nach der Bestätigung werden Rechnung und alle Zeilen in einer Transaktion gelöscht und verschwinden aus beiden Listen"
    - "Die abgerechnete Menge jeder gelöschten Zeile kehrt automatisch an ihre Position zurück, weil die Restmenge über die vorhandenen Zeilen berechnet und nicht gespeichert wird"
    - "Das Löschen einer Rechnung in jedem anderen Status ist unmöglich: Die Aktion wird nicht angeboten, und die Anfrage antwortet mit `Conflict`"
codeUrl: Server/Invoices/InvoiceDeleter.cs
adr: [WZ-ADR-009, WZ-ADR-006]
priority: must
status: done
aiContribution:
  en: "The AI argued for assigning the invoice number at *issuing* instead of at creation — tidier, since an abandoned draft would consume nothing and the sequence would stay gapless. I deferred it rather than adopting it: a number has to identify the record in every state, not only once the entity is exported, and the change would have forked the shared number-generation pattern for one entity mid-block. The consequence is a visible gap in the sequence when a draft is deleted, and the decision was to make that explicit to the user rather than hide it — a documented gap is auditable, an issued bill that vanished is not. This is also the first place in the app where Löschen means what it says; everything before used Entfernen, which detaches and deletes nothing."
  de: "Die KI plädierte dafür, die Rechnungsnummer erst beim Stellen statt beim Anlegen zu vergeben — sauberer, denn ein verworfener Entwurf würde nichts verbrauchen und die Nummernfolge bliebe lückenlos. Ich habe das zurückgestellt statt übernommen: Eine Nummer muss den Datensatz in jedem Status bezeichnen, nicht erst, sobald die Entität exportiert ist; außerdem hätte die Änderung das gemeinsame Muster der Nummernerzeugung mitten im Block für eine einzige Entität aufgespalten. Die Folge ist eine sichtbare Lücke, wenn ein Entwurf gelöscht wird — und die Entscheidung war, sie dem Nutzer ausdrücklich zu zeigen statt sie zu verbergen: Eine dokumentierte Lücke ist nachvollziehbar, eine verschwundene gestellte Rechnung nicht. Hier bedeutet Löschen außerdem erstmals, was es sagt; alles davor nutzte Entfernen, das nur löst und nichts löscht."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/046-invoice-sending-and-lifecycle.md
---
