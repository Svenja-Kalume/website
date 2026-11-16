---
title:
  en: "Other versions on the offer screen"
  de: "Weitere Versionen auf dem Angebotsbildschirm"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "every offer screen to show the other versions of the same offer at its bottom"
  de: "dass jeder Angebotsbildschirm unten die weiteren Versionen desselben Angebots zeigt"
soThat:
  en: "I can compare the version in front of me with its other versions"
  de: "ich die Version vor mir mit ihren anderen Versionen vergleichen kann"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "The offer editor and the read-only view show, at the bottom under Weitere Versionen, the offer's version card without the version that is open"
    - "Its tabs follow the project page's card; Neue Version stands only on the chain's newest version, and when that is the open one the card offers none"
    - "While the project is locked, Neue Version and Exportieren are disabled with the reason; Exportieren on a tab refreshes the card and the open version stays open"
    - "Öffnen or Bearbeiten on a tab opens that version in place of the current one"
    - "Leaving the offer editor through a tab follows the usual leave flow: a valid change is saved first, a failed save keeps the editor with the reason, an invalid change asks Verlassen or Bleiben"
    - "When the open version is the only one, no card is shown"
  de:
    - "Angebotseditor und schreibgeschützte Ansicht zeigen unten unter Weitere Versionen die Versionskarte des Angebots ohne die geöffnete Version"
    - "Ihre Reiter folgen der Karte der Projektseite; Neue Version steht nur auf der neuesten Version der Kette, und ist das die geöffnete, bietet die Karte keine an"
    - "Solange das Projekt gesperrt ist, sind Neue Version und Exportieren mit Grund deaktiviert; Exportieren auf einem Reiter aktualisiert die Karte, und die geöffnete Version bleibt geöffnet"
    - "Öffnen oder Bearbeiten auf einem Reiter öffnet diese Version anstelle der aktuellen"
    - "Den Angebotseditor über einen Reiter zu verlassen folgt dem üblichen Ablauf: Eine gültige Änderung wird zuerst gespeichert, ein fehlgeschlagenes Speichern lässt den Editor mit dem Grund offen, eine ungültige Änderung fragt Verlassen oder Bleiben"
    - "Ist die geöffnete Version die einzige, wird keine Karte gezeigt"
codeUrl: Client/Offers/OtherOfferVersions.razor
status: done
aiContribution:
  en: "This story exists because I added the version card to the bottom of every offer screen while grooming the version tabs. At the readiness gate I decided how leaving the editor through the card behaves: it follows the ordinary leave flow, not the stricter save-first gate of the preview, which has no option to discard. That refined an earlier seam answer which had not covered an invalid form. At the walk I confirmed the agent's decision that the card on the read-only view keeps its buttons, acting on the other versions."
  de: "Diese Story gibt es, weil ich beim Grooming der Versionsreiter die Versionskarte unten auf jeden Angebotsbildschirm gesetzt habe. Am Readiness-Gate habe ich entschieden, wie das Verlassen des Editors über die Karte abläuft: nach dem gewöhnlichen Ablauf beim Verlassen, nicht nach dem strengeren Speichern-zuerst der Vorschau, das kein Verwerfen kennt. Das hat eine frühere Antwort zu einer Nahtstelle verfeinert, die ein ungültiges Formular nicht abgedeckt hatte. Beim Durchgang habe ich die Entscheidung des Agenten bestätigt, dass die Karte in der schreibgeschützten Ansicht ihre Schaltflächen behält und auf die anderen Versionen wirkt."
introducedIn: WZ-0.4.0
source: docs/user-stories/069-view-superseded-offers-from-current-offer.md
---
