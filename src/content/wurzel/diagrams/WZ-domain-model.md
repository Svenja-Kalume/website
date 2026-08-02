---
title:
  en: Domain model — the ownership hierarchy
  de: Domänenmodell — die Besitz-Hierarchie
case: wurzel
type: uml
tool: Mermaid
caption:
  en: ProjectPosition is the single source of truth; an Open offer reads it live and freezes to a snapshot when superseded.
  de: Die Projektposition ist die einzige Wahrheitsquelle; ein offenes Angebot liest sie live und friert bei Ersetzung als Snapshot ein.
aiContribution:
  en: The AI drafted the entity set from the glossary; I added the snapshot entity and the rule that superseding an offer severs the live link. Invoices are intentionally absent at Level 1.
  de: Die KI entwarf den Entitätensatz aus dem Glossar; ich ergänzte die Snapshot-Entität und die Regel, dass das Ersetzen eines Angebots die Live-Verknüpfung trennt. Rechnungen fehlen auf Level 1 bewusst.
---
classDiagram
  Customer "1" --> "0..*" Project : owns
  Project "1" --> "0..*" ProjectPosition : has
  Project "1" --> "0..*" Offer : has
  Offer "1" --> "0..*" OfferItem : contains
  OfferItem "0..*" --> "1" ProjectPosition : reads live
  OfferItem "0..1" --> "1" OfferPositionSnapshot : frozen as
  Offer "0..1" --> "1" Offer : ancestor
  class Customer {
    CustomerNumber yyyy-nnn
    Name, Address
  }
  class Project {
    ProjectNumber yyyy-nnn
    Status Open/Started/Closed
  }
  class ProjectPosition {
    Beschreibung, Einheit, Menge
    Einzelpreis, Deaktiviert
    Arbeitszeit (inert)
  }
  class Offer {
    OfferNumber, OfferDate
    State Open/Superseded
    Subject, AncestorId
  }
