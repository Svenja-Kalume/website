---
title:
  en: Lock an offer after export
  de: Angebot nach Export sperren
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: an offer to become uneditable once I have exported it
  de: dass ein Angebot nach dem Export nicht mehr bearbeitbar ist
soThat:
  en: the document I gave the customer can never silently change afterwards
  de: das dem Kunden übergebene Dokument sich danach nie unbemerkt ändert
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - Exporting an Open offer atomically freezes a position snapshot, renders and stores the PDF and page images, and sets OfferState to Exported with ExportedAt
    - The server rejects any write to a non-Open offer with Conflict (409); the client renders Exported (and Superseded) offers read-only with an "Exportiert" badge
    - Creating a new version from an already-Exported offer leaves the predecessor Exported (it does not flip to Superseded)
    - The latest-offer card shows the project's latest offer regardless of status, with Vorschau/Export shown only when it is Open
  de:
    - Der Export eines offenen Angebots friert atomar einen Positions-Snapshot ein, rendert und speichert PDF und Seitenbilder und setzt OfferState auf Exportiert mit ExportedAt
    - Der Server lehnt jeden Schreibzugriff auf ein nicht-offenes Angebot mit Conflict (409) ab; der Client rendert exportierte (und ersetzte) Angebote read-only mit einem „Exportiert"-Badge
    - Eine neue Version aus einem bereits exportierten Angebot lässt den Vorgänger exportiert (kein Wechsel zu „Ersetzt")
    - Die Neuestes-Angebot-Karte zeigt das jeweils neueste Angebot des Projekts unabhängig vom Status, Vorschau/Export nur wenn dieses offen ist
codeUrl: Server/Offers/OfferExport.cs
status: done
aiContribution:
  en: The AI proposed the read-back branch (Open reads live ProjectPosition data; Exported/Superseded reads the frozen OfferPositionSnapshot) as one mechanism reused later by Story 27, and proposed storing three separate frozen representations (snapshot, page images, PDF bytes) each serving exactly one purpose rather than one overloaded frozen blob. I decided an Exported predecessor never re-freezes or relabels when a new version is created from it.
  de: Die KI schlug den Read-back-Zweig vor (offen liest live aus ProjectPosition; exportiert/ersetzt liest den eingefrorenen OfferPositionSnapshot) als einen später von Story 27 wiederverwendeten Mechanismus, sowie drei getrennte eingefrorene Repräsentationen (Snapshot, Seitenbilder, PDF-Bytes), die je genau einen Zweck erfüllen statt eines überladenen Frozen-Blobs. Ich entschied, dass ein exportierter Vorgänger bei einer neuen Version nie erneut eingefroren oder umbenannt wird.
introducedIn: WZ-0.2.0
source: docs/user-stories/068-lock-offer-after-export.md
---
