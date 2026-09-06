---
title:
  en: Keep multiple offer versions
  de: Mehrere Angebotsversionen führen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to make a new version of an offer
  de: eine neue Version eines Angebots zu erstellen
soThat:
  en: I can revise a quote without losing the previous one
  de: ich ein Angebot überarbeiten kann, ohne das vorige zu verlieren
requirement: WZ-R-04
bpmn: WZ-offer-lifecycle
adr: [WZ-ADR-003]
acceptanceCriteria:
  en:
    - „Neue Version“ seeds the new offer with the positions still in the project (not disabled, referenced by the source), copies Betreff and sets AncestorId
    - The source offer becomes Ersetzt with a frozen snapshot; the new one is Offen
    - At most one Open offer per project, and at most one direct successor (no branching)
  de:
    - „Neue Version“ befüllt das neue Angebot mit den Positionen, die noch im Projekt sind (nicht deaktiviert, vom Ursprung referenziert), kopiert den Betreff und setzt die AncestorId
    - Das Quell-Angebot wird Ersetzt mit eingefrorenem Snapshot; das neue ist Offen
    - Höchstens ein offenes Angebot je Projekt und höchstens ein direkter Nachfolger (keine Verzweigung)
priority: must
status: done
aiContribution:
  en: The AI modelled versions as a self-referential chain with a snapshot on supersede; I set the single-Open-offer invariant so the project view stays unambiguous.
  de: Die KI modellierte Versionen als selbstreferenzielle Kette mit Snapshot bei Ersetzung; ich setzte die Ein-offenes-Angebot-Invariante, damit die Projektansicht eindeutig bleibt.
introducedIn: WZ-0.1.0
---
