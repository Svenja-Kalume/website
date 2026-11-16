---
title:
  en: "MwSt. and gross total in the offer editor"
  de: "MwSt. und Gesamtbetrag im Angebotseditor"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "MwSt. and Gesamtbetrag shown in the offer editor"
  de: "MwSt. und Gesamtbetrag im Angebotseditor sehen"
soThat:
  en: "I see the gross figure the customer will read without opening the Vorschau"
  de: "ich den Bruttobetrag sehe, den der Kunde lesen wird, ohne die Vorschau zu öffnen"
requirement: WZ-R-20
acceptanceCriteria:
  en:
    - "An open offer shows MwSt. with its rate and Gesamtbetrag below the lines' net total, equal to the Vorschau to the cent, and updates both on every line change before the offer is saved"
    - "With Standard-MwSt. empty, or as a Kleinunternehmer, it shows Gesamtbetrag equal to net and no MwSt. line; the § 19 UStG note stays on the document, not in the editor"
    - "An exported offer shows its PDF's MwSt. and a replaced one only its net total; only an open offer computes MwSt. from the current settings"
    - "A changed Standard-MwSt. or Kleinunternehmer setting shows on every open offer opened afterwards; an exported offer's PDF keeps the MwSt. it was exported with"
    - "The offer cards on the project page and the positions table keep their net-only total"
  de:
    - "Ein offenes Angebot zeigt unter der Nettosumme der Zeilen MwSt. mit Satz und Gesamtbetrag, auf den Cent gleich der Vorschau, und aktualisiert beides bei jeder Zeilenänderung, bevor das Angebot gespeichert ist"
    - "Bei leerer Standard-MwSt. oder als Kleinunternehmer zeigt es einen Gesamtbetrag gleich netto und keine MwSt.-Zeile; der Hinweis nach § 19 UStG bleibt auf dem Dokument, nicht im Editor"
    - "Ein exportiertes Angebot zeigt die MwSt. seines PDFs, ein ersetztes nur seine Nettosumme; nur ein offenes Angebot berechnet die MwSt. aus den aktuellen Einstellungen"
    - "Eine geänderte Standard-MwSt. oder Kleinunternehmer-Einstellung erscheint auf jedem danach geöffneten offenen Angebot; das PDF eines exportierten Angebots behält die MwSt., mit der es exportiert wurde"
    - "Die Angebotskarten auf der Projektseite und die Positionstabelle behalten ihre reine Nettosumme"
codeUrl: Shared/Pricing/VatPricing.cs
adr: [WZ-BDR-24]
status: done
aiContribution:
  en: "Where the gross figure is computed was my call against the AI's ordering: it offered the server after each autosave first and the browser last; I chose the browser, on condition that browser and server share one rounding implementation, so the editor can never differ from the preview by a cent. I overrode three more proposals: gross only on open offers, the § 19 note in the editor, and replacing the net footer with a three-line block. The consistency check found what grooming and my own approval had missed: an accepted rule still said the app never computes gross on screen. The rule for locked offers then changed twice, and the delivered story still described the superseded one until a later story's check noticed. The block review found the settings test could not detect a cached setting."
  de: "Wo der Bruttobetrag berechnet wird, habe ich gegen die Reihenfolge der KI entschieden: Sie bot zuerst den Server nach jedem automatischen Speichern an und den Browser zuletzt; ich habe den Browser gewählt, unter der Bedingung, dass Browser und Server eine einzige Rundungsimplementierung teilen, damit der Editor nie um einen Cent von der Vorschau abweicht. Drei weitere Vorschläge habe ich überstimmt: Brutto nur auf offenen Angeboten, der Hinweis nach § 19 im Editor und das Ersetzen der Netto-Fußzeile durch einen dreizeiligen Block. Die Konsistenzprüfung fand, was Grooming und meine eigene Freigabe übersehen hatten: Eine angenommene Regel sagte noch, die App berechne nie Brutto am Bildschirm. Die Regel für gesperrte Angebote änderte sich danach zweimal, und die gelieferte Story beschrieb noch die abgelöste, bis die Prüfung einer späteren Story es bemerkte. Die Block-Review fand, dass der Einstellungstest eine zwischengespeicherte Einstellung nicht erkennen konnte."
introducedIn: WZ-0.4.0
source: docs/user-stories/127-offer-editor-shows-vat-and-gross.md
changes: [WZ-US-13]
---
