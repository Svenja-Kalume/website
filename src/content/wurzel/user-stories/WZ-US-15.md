---
title:
  en: Freeze a superseded offer into a snapshot
  de: Ein ersetztes Angebot als Snapshot einfrieren
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: a replaced offer to keep the numbers it had at the time
  de: dass ein ersetztes Angebot die Zahlen behält, die es damals hatte
soThat:
  en: an old version does not silently change when I edit the project
  de: eine alte Version sich nicht still ändert, wenn ich das Projekt bearbeite
requirement: WZ-R-04
bpmn: WZ-offer-lifecycle
acceptanceCriteria:
  en:
    - When an offer is set to Ersetzt, a snapshot (OfferPositionSnapshot) is created per line and OfferItem.SnapshotId is set
    - Snapshots reference the origin via OriginProjectPositionId; the ProjectPositions are untouched
    - The freeze is atomic with the state transition
  de:
    - Wird ein Angebot auf Ersetzt gesetzt, wird je Position ein Snapshot (OfferPositionSnapshot) erzeugt und OfferItem.SnapshotId gesetzt
    - Snapshots referenzieren den Ursprung über OriginProjectPositionId; die Projektpositionen bleiben unberührt
    - Das Einfrieren ist atomar mit dem Statusübergang
priority: must
status: done
aiContribution:
  en: The AI designed the snapshot entity and made the freeze atomic with the transition; I noted the read-back path (viewing a superseded offer from its snapshot) as a separate, later story.
  de: Die KI entwarf die Snapshot-Entität und machte das Einfrieren atomar mit dem Übergang; ich hielt den Lesepfad (ein ersetztes Angebot aus seinem Snapshot ansehen) als separate, spätere Story fest.
introducedIn: WZ-0.1.0
---
