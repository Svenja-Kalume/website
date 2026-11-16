---
title:
  en: "A locked offer shows only the lines it showed"
  de: "Ein gesperrtes Angebot zeigt nur Positionen, die es auch selbst angeboten hatte"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "an exported or replaced offer to show exactly the lines it showed when it locked"
  de: "dass ein exportiertes oder ersetztes Angebot genau die Zeilen zeigt, die es beim Sperren zeigte"
soThat:
  en: "the screen never quotes a line or a total the customer did not receive"
  de: "der Bildschirm nie eine Zeile oder eine Summe nennt, die der Kunde nicht erhalten hat"
requirement: WZ-R-20
acceptanceCriteria:
  en:
    - "After an offer is exported while one of its positions is deactivated, the offer screen lists exactly the lines of the exported PDF, and its net total equals the PDF's net amount, on the latest-offer card too"
    - "After an offer is replaced by Neue Version while one of its positions is deactivated, the replaced offer lists exactly the lines it showed just before, with their total"
    - "Activating the position again afterwards changes neither the exported nor the replaced offer"
    - "Deactivating a position and clicking Neue Version straight away saves the change first; if that save fails, the offer is not replaced and the user is told beside the button"
    - "A new version created from an exported offer takes its positions except those deactivated now"
    - "Deactivating and activating a position on an open offer behaves as before, within the accepted limit that an automatic return holds only until the offer is next saved"
  de:
    - "Wird ein Angebot exportiert, während eine seiner Positionen deaktiviert ist, listet der Angebotsbildschirm danach genau die Zeilen des exportierten PDFs, und seine Nettosumme entspricht dem Nettobetrag des PDFs, auch auf der Karte des neuesten Angebots"
    - "Wird ein Angebot durch Neue Version ersetzt, während eine seiner Positionen deaktiviert ist, listet das ersetzte Angebot genau die Zeilen, die es unmittelbar davor zeigte, mit deren Summe"
    - "Die Position danach wieder zu aktivieren ändert weder das exportierte noch das ersetzte Angebot"
    - "Wer eine Position deaktiviert und sofort Neue Version klickt, bekommt die Änderung zuerst gespeichert; scheitert dieses Speichern, wird das Angebot nicht ersetzt und der Nutzer neben der Schaltfläche informiert"
    - "Eine aus einem exportierten Angebot erzeugte neue Version übernimmt dessen Positionen außer den jetzt deaktivierten"
    - "Deaktivieren und Aktivieren einer Position auf einem offenen Angebot verhält sich wie bisher, innerhalb der akzeptierten Grenze, dass eine automatische Rückkehr nur bis zum nächsten Speichern des Angebots gilt"
codeUrl: Server/Offers/OfferLines.cs
adr: [WZ-BDR-21]
status: done
aiContribution:
  en: "A live defect found by the AI's architecture review. The interesting part came in grooming: the first draft said an offer is replaced by Neue Version or by starting another offer, because that is what the code did. The consistency check flagged it against an accepted rule, and the AI proposed treating the code as right and writing a new rule. I rejected that — a second offer on a project is separate work, not a new version — so the code was wrong, not the rule. That correction became Story 150. The block review later found that the Aktivieren direction had no test driven from the click."
  de: "Ein Live-Fehler, gefunden von der Architektur-Review der KI. Interessant wurde es im Grooming: Der erste Entwurf sagte, ein Angebot werde durch Neue Version oder durch das Anlegen eines weiteren Angebots ersetzt, weil der Code das tat. Die Konsistenzprüfung meldete das als Widerspruch zu einer angenommenen Regel, und die KI schlug vor, den Code als richtig zu behandeln und eine neue Regel zu schreiben. Das habe ich abgelehnt — ein zweites Angebot in einem Projekt ist eigene Arbeit, keine neue Version —, also war der Code falsch, nicht die Regel. Aus dieser Korrektur wurde Story 150. Die Block-Review fand später, dass die Richtung Aktivieren keinen vom Klick ausgehenden Test hatte."
introducedIn: WZ-0.4.0
source: docs/user-stories/149-a-locked-offer-shows-only-the-lines-it-showed.md
---
