---
title:
  en: "Context map — solution structure"
  de: "Context Map — Lösungsstruktur"
case: wurzel
type: c4
tool: Mermaid
caption:
  en: "One hosted deployment — Client, Server and a Shared contract project — no CORS, one code path. The browser is Windows or Android, the interface is labelled in German, and the Server also serves the WASM bundle. Shared holds the DTOs, models and interfaces both sides compile against."
  de: "Ein Hosted-Deployment — Client, Server und ein gemeinsames Vertragsprojekt — kein CORS, ein Code-Pfad. Der Browser ist Windows oder Android, die Oberfläche ist deutsch beschriftet, und der Server liefert zugleich das WASM aus. Shared hält die DTOs, Modelle und Schnittstellen, gegen die beide Seiten kompilieren."
aiContribution:
  en: "The AI proposed the three-project Hosted WASM layout; I confirmed Shared as the single home for DTOs so the shape of the data is settled before implementation."
  de: "Die KI schlug das Drei-Projekt-Hosted-WASM-Layout vor; ich bestätigte Shared als einzigen Ort für DTOs, damit die Struktur der Daten vor der Umsetzung feststeht."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      User["Owner in the browser"] --> Client
      subgraph App["Wurzel — one hosted deployment"]
        Client["Client — Blazor WASM"]
        Server["Server — ASP.NET Core"]
        Shared["Shared — DTOs"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"contracts"| Shared
        Server -.->|"contracts"| Shared
      end
      Server --> DB[("SQLite now, PostgreSQL later")]
  de: |
    flowchart TD
      User["Inhaber im Browser"] --> Client
      subgraph App["Wurzel — ein Hosted-Deployment"]
        Client["Client — Blazor WASM"]
        Server["Server — ASP.NET Core"]
        Shared["Shared — DTOs"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"Verträge"| Shared
        Server -.->|"Verträge"| Shared
      end
      Server --> DB[("SQLite jetzt, PostgreSQL später")]
---
