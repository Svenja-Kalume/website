---
title:
  en: Context map — solution structure
  de: Context Map — Lösungsstruktur
case: wurzel
type: c4
tool: Mermaid
caption:
  en: One hosted deployment — Client, Server and a Shared contract project — no CORS, one code path.
  de: Ein Hosted-Deployment — Client, Server und ein gemeinsames Vertragsprojekt — kein CORS, ein Code-Pfad.
aiContribution:
  en: The AI proposed the three-project Hosted WASM layout; I confirmed Shared as the single home for DTOs so contracts are defined before implementation.
  de: Die KI schlug das Drei-Projekt-Hosted-WASM-Layout vor; ich bestätigte Shared als einzigen Ort für DTOs, damit Verträge vor der Umsetzung feststehen.
---
flowchart TD
  User["Owner (browser: Windows / Android)"]
  subgraph App["Wurzel — one hosted deployment"]
    Client["Client (Blazor WASM UI, German labels)"]
    Server["Server (ASP.NET Core Web API + serves WASM)"]
    Shared["Shared (DTOs / models / interfaces)"]
    Client -->|HTTP JSON| Server
    Client -.->|contracts| Shared
    Server -.->|contracts| Shared
  end
  DB[("SQLite now / PostgreSQL later")]
  User --> Client
  Server --> DB
