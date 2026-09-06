---
title:
  en: "Context map — solution structure"
  de: "Context Map — Lösungsstruktur"
case: wurzel
type: c4
tool: Mermaid
caption:
  en: "One hosted deployment — Client, Server and a Shared contract project — no CORS, one code path."
  de: "Ein Hosted-Deployment — Client, Server und ein gemeinsames Vertragsprojekt — kein CORS, ein Code-Pfad."
aiContribution:
  en: "The AI proposed the three-project Hosted WASM layout; I confirmed Shared as the single home for DTOs so the shape of the data is settled before implementation."
  de: "Die KI schlug das Drei-Projekt-Hosted-WASM-Layout vor; ich bestätigte Shared als einzigen Ort für DTOs, damit die Struktur der Daten vor der Umsetzung feststeht."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      User["Owner (browser: Windows / Android)"]
      subgraph App["Wurzel — one hosted deployment"]
        Client["Client (Blazor WASM UI, German labels)"]
        Server["Server (ASP.NET Core Web API + serves WASM)"]
        Shared["Shared (DTOs / models / interfaces)"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"contracts"| Shared
        Server -.->|"contracts"| Shared
      end
      DB[("SQLite now / PostgreSQL later")]
      User --> Client
      Server --> DB
  de: |
    flowchart TD
      User["Inhaber (Browser: Windows / Android)"]
      subgraph App["Wurzel — ein Hosted-Deployment"]
        Client["Client (Blazor-WASM-Oberfläche, deutsche Beschriftungen)"]
        Server["Server (ASP.NET Core Web API + liefert das WASM aus)"]
        Shared["Shared (DTOs / Modelle / Schnittstellen)"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"Verträge"| Shared
        Server -.->|"Verträge"| Shared
      end
      DB[("SQLite jetzt / PostgreSQL später")]
      User --> Client
      Server --> DB
---
