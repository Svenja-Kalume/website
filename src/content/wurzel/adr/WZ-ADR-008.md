---
title:
  en: "A frozen invoice is viewed as its stored document, with no data-table fallback"
  de: "Eine eingefrorene Rechnung wird als ihr gespeichertes Dokument angezeigt — ohne Tabellen-Fallback"
case: wurzel
status: accepted
date: 2026-07-25
relatedRequirements: [WZ-R-13]
context:
  en:
    - "Once a bill has been issued, the app’s copy and the customer’s copy must be the same document. Both a live re-render and a plain data table are cheaper to build than storing and serving page images."
  de:
    - "Sobald eine Rechnung gestellt ist, müssen die Kopie in der Anwendung und die Kopie beim Kunden dasselbe Dokument sein. Sowohl ein Neu-Rendern aus den aktuellen Daten als auch eine schlichte Datentabelle wären billiger zu bauen, als Seitenbilder zu speichern und auszuliefern."
decision:
  en:
    - "An `Exported` or `Cancelled` invoice is viewed as the stored page images — the document the customer received — never as a live re-render of today’s data. If those pages cannot be loaded, the view shows a plain-German error. There is no data-table fallback."
  de:
    - "Eine Rechnung im Status `Exported` oder `Cancelled` wird als die gespeicherten Seitenbilder angezeigt — als das Dokument, das der Kunde erhalten hat — und nie als Neu-Rendern der heutigen Daten. Lassen sich diese Seiten nicht laden, zeigt die Ansicht eine Fehlermeldung in klarem Deutsch. Einen Rückfall auf eine Datentabelle gibt es nicht."
consequences:
  en:
    - "Regenerating from current data would let a changed accent colour, a new office address or a corrected terms paragraph silently alter every historical bill; the ten-year retention obligation is about the document, not the data. The absence of a fallback is the deliberate part: a fallback reintroduces exactly that divergence in the one place the user is most likely to trust what they see — a customer dispute on the phone. A compact header strip keeps the numbers readable beside the document."
  de:
    - "Ein erneutes Erzeugen aus den aktuellen Daten ließe eine geänderte Akzentfarbe, eine neue Geschäftsadresse oder einen korrigierten Bedingungsabsatz still jede historische Rechnung verändern; die zehnjährige Aufbewahrungspflicht gilt dem Dokument, nicht den Daten. Das Fehlen eines Rückfalls ist der bewusste Teil: Ein Rückfall bringt genau diese Abweichung an der einen Stelle zurück, an der der Nutzer dem Gesehenen am ehesten vertraut — beim Streit mit dem Kunden am Telefon. Ein kompakter Kopfstreifen hält die Zahlen neben dem Dokument lesbar."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0025-frozen-invoice-is-its-stored-document.md
---
