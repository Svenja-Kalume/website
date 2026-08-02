---
title:
  en: Edit an open offer
  de: Ein offenes Angebot bearbeiten
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to correct a saved open offer
  de: ein gespeichertes offenes Angebot zu korrigieren
soThat:
  en: I can fix the subject, prices or which positions it contains
  de: ich Betreff, Preise oder die enthaltenen Positionen anpassen kann
requirement: WZ-R-04
acceptanceCriteria:
  en:
    - Only Open offers are editable (Ersetzt is read-only); Betreff is editable
    - Add eligible positions (link only) or remove them (deletes the link only)
    - Editing Beschreibung/Einzelpreis writes back to the ProjectPosition and reflects in all Open offers; a tooltip warns that the edit updates the shared position
  de:
    - Nur offene Angebote sind bearbeitbar (Ersetzt ist schreibgeschützt); der Betreff ist editierbar
    - Geeignete Positionen hinzufügen (nur Verknüpfung) oder entfernen (löscht nur die Verknüpfung)
    - Änderungen an Beschreibung/Einzelpreis werden in die Projektposition zurückgeschrieben und wirken in allen offenen Angeboten; ein Tooltip warnt, dass die Änderung die geteilte Position aktualisiert
status: done
aiContribution:
  en: The AI surfaced the risk that editing a shared position silently changes other offers and added the warning tooltip; I confirmed that only the link is removed, never the underlying position.
  de: Die KI machte auf das Risiko aufmerksam, dass das Bearbeiten einer geteilten Position andere Angebote still verändert, und ergänzte den Warn-Tooltip; ich bestätigte, dass nur die Verknüpfung entfernt wird, nie die zugrunde liegende Position.
introducedIn: WZ-0.1.0
---
