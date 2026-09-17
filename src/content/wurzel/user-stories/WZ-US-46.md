---
title:
  en: "Cancel an issued invoice"
  de: "Eine gestellte Rechnung stornieren"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to cancel an issued bill so that it is unmistakably marked invalid"
  de: "eine gestellte Rechnung zu stornieren, sodass sie unmissverständlich als ungültig gekennzeichnet ist"
soThat:
  en: "a wrong bill is withdrawn without being deleted and without being edited"
  de: "eine falsche Rechnung zurückgenommen wird, ohne sie zu löschen und ohne sie zu ändern"
requirement: WZ-R-14
acceptanceCriteria:
  en:
    - "**Stornieren** appears only on the read-only invoice view, only while the invoice is exported, and never on a Stornorechnung row; a confirmation is required, and the server answers `Conflict` for any other state"
    - "The transition sets the state to Cancelled and touches the update timestamp — no other data is written and no line is modified or deleted, so the voided bill stays fully reconstructable"
    - "No position field is changed; the cancelled invoice’s quantity returns to the position automatically, because the remaining quantity is computed over non-cancelled invoices only"
    - "A position that was fully billed by the cancelled invoice becomes billable again and reappears as selectable on a new invoice"
    - "The invoice is marked STORNIERT in both lists and on the read-only view, while its stored PDF stays byte-identical — the marking belongs to the app’s view, never to the document"
    - "For a Kleinunternehmer invoice this state change is the complete cancellation; no counter-document is produced or required"
  de:
    - "**Stornieren** erscheint nur in der Leseansicht der Rechnung, nur solange sie exportiert ist, und nie auf einer Stornorechnung; eine Bestätigung ist erforderlich, und der Server antwortet in jedem anderen Status mit `Conflict`"
    - "Der Übergang setzt den Status auf Storniert und aktualisiert den Änderungszeitstempel — sonst wird nichts geschrieben und keine Zeile geändert oder gelöscht, die aufgehobene Rechnung bleibt also vollständig rekonstruierbar"
    - "Kein Positionsfeld wird geändert; die Menge der stornierten Rechnung kehrt automatisch an die Position zurück, weil die Restmenge nur über nicht stornierte Rechnungen berechnet wird"
    - "Eine durch die stornierte Rechnung vollständig abgerechnete Position wird wieder abrechenbar und erscheint in einer neuen Rechnung erneut zur Auswahl"
    - "Die Rechnung ist in beiden Listen und in der Leseansicht als STORNIERT gekennzeichnet, während ihr gespeichertes PDF byteidentisch bleibt — die Kennzeichnung gehört zur Ansicht der Anwendung, nie zum Dokument"
    - "Bei einer Kleinunternehmer-Rechnung ist dieser Zustandswechsel die vollständige Stornierung; ein Gegendokument wird weder erzeugt noch benötigt"
codeUrl: Server/Invoices/InvoiceCanceller.cs
priority: must
status: done
aiContribution:
  en: "The AI proposed taking a snapshot of the invoice on cancellation, mirroring what the offer side does when an offer is superseded. It turned out to be unnecessary and was dropped: an invoice line is already its own snapshot from the moment it is billed, so a cancelled invoice needs nothing frozen at cancellation time — it was frozen at export. The transition writes the state and the timestamp and nothing else, which is what makes it safe to reason about. The split of cancellation into two stories by VAT status is mine and is legal, not technical."
  de: "Die KI schlug vor, beim Stornieren einen Snapshot der Rechnung zu nehmen, analog zur Angebotsseite beim Ersetzen eines Angebots. Das erwies sich als unnötig und wurde verworfen: Eine Rechnungszeile ist ab dem Abrechnen bereits ihr eigener Snapshot, eine stornierte Rechnung braucht also zum Stornozeitpunkt nichts Eingefrorenes — eingefroren wurde sie beim Export. Der Übergang schreibt Status und Zeitstempel und sonst nichts, und genau das macht ihn nachvollziehbar. Die Aufteilung des Stornierens in zwei Stories nach Umsatzsteuerstatus ist meine Entscheidung und eine juristische, keine technische."
introducedIn: WZ-0.3.0-level-3
source: docs/user-stories/099-cancel-invoice-kleinunternehmer.md
---
