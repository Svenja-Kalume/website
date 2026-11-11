---
title:
  en: "An exported offer opens like an exported invoice"
  de: "Ein exportiertes Angebot öffnet sich wie eine exportierte Rechnung"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "an exported offer to open the way an exported invoice does"
  de: "dass sich ein exportiertes Angebot so öffnet wie eine exportierte Rechnung"
soThat:
  en: "a frozen document behaves the same whichever kind it is"
  de: "sich ein eingefrorenes Dokument gleich verhält, welcher Art es auch ist"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "Öffnen on an exported offer, in the Angebote list or on its project-page card, opens its read-only view, not the editor; so does the editor's own address"
    - "The view shows the heading, offer date, subject, the Exportiert badge and the pages of the exported PDF — exactly what the customer received, MwSt. included — under the editor's breadcrumb"
    - "It offers Herunterladen for the exported PDF; when the pages cannot be loaded it says „Das gespeicherte Angebotsdokument konnte nicht geladen werden.“ and Herunterladen is unavailable"
    - "It offers Neue Version only on the newest version of its chain, disabled with the reason while the project is locked"
    - "It offers no Bearbeiten, Vorschau or Exportieren, and nothing on it can be changed"
    - "After Exportieren in the offer editor, the user lands on the exported offer's view"
  de:
    - "Öffnen auf einem exportierten Angebot, in der Angebotsliste oder auf seiner Karte auf der Projektseite, öffnet seine schreibgeschützte Ansicht, nicht den Editor; ebenso die eigene Adresse des Editors"
    - "Die Ansicht zeigt Überschrift, Angebotsdatum, Betreff, das Kennzeichen Exportiert und die Seiten des exportierten PDFs — genau das, was der Kunde erhalten hat, MwSt. eingeschlossen — unter der Brotkrumennavigation des Editors"
    - "Sie bietet Herunterladen für das exportierte PDF an; lassen sich die Seiten nicht laden, sagt sie „Das gespeicherte Angebotsdokument konnte nicht geladen werden.“, und Herunterladen ist nicht verfügbar"
    - "Sie bietet Neue Version nur auf der neuesten Version ihrer Kette an, mit Grund deaktiviert, solange das Projekt gesperrt ist"
    - "Sie bietet kein Bearbeiten, keine Vorschau und kein Exportieren an, und nichts darauf lässt sich ändern"
    - "Nach Exportieren im Angebotseditor landet der Nutzer in der Ansicht des exportierten Angebots"
codeUrl: Client/Offers/ViewOfferPage.razor
adr: [WZ-DSDR-21]
status: done
aiContribution:
  en: "Asking me how to present older versions, the AI wrote that an exported offer is never replaced, so every replaced offer lacks a PDF. I told it to check again before we decided. The code showed an exported offer is replaced by a newer version but keeps its exported state — so an older version is one of two kinds, with a PDF or without. With both kinds named, I chose one read-only view for every locked offer. For pages that cannot be loaded, I rejected falling back to the frozen lines: the view behaves as an exported invoice does."
  de: "Bei der Frage, wie ältere Versionen dargestellt werden, schrieb die KI, ein exportiertes Angebot werde nie ersetzt, also fehle jedem ersetzten Angebot ein PDF. Ich habe sie gebeten, das vor der Entscheidung nochmals zu prüfen. Der Code zeigte: Ein exportiertes Angebot wird durch eine neuere Version ersetzt, behält aber seinen Zustand Exportiert — eine ältere Version ist also eine von zwei Arten, mit PDF oder ohne. Mit beiden Arten benannt habe ich eine schreibgeschützte Ansicht für jedes gesperrte Angebot gewählt. Für Seiten, die sich nicht laden lassen, habe ich den Rückgriff auf die eingefrorenen Zeilen abgelehnt: Die Ansicht verhält sich wie bei einer exportierten Rechnung."
introducedIn: WZ-0.4.0
source: docs/user-stories/140-exported-offer-opens-like-an-exported-invoice.md
changes: [WZ-US-24]
---
