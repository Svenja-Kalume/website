---
title:
  en: "Context map — solution structure"
  de: "Context Map — Lösungsstruktur"
case: wurzel
type: c4
tool: Mermaid
caption:
  en: "One hosted deployment — client, server and one shared project for the interface data — no CORS, one code path. The browser is Windows or Android, the interface is labelled in German, and the server also serves the application itself. The interface data holds the models and structures both sides compile against, so a change to one of them breaks both sides rather than surfacing at runtime. Only the server talks to the database."
  de: "Ein Hosted-Deployment — Client, Server und ein gemeinsames Projekt für die Schnittstellen Informationen — kein CORS, ein Code-Pfad. Der Browser ist Windows oder Android, die Oberfläche ist deutsch beschriftet, und der Server liefert zugleich die Anwendung aus. Die Schnittstellen Daten halten die Modelle und Datenstrukturen, gegen die Client und Server gemeinsam kompilieren, sodass eine Änderung an ihnen beide Seiten bricht, statt erst zur Laufzeit aufzufallen. Die Datenbank spricht allein der Server an."
aiContribution:
  en: "The AI proposed the three-project Hosted WASM layout; I confirmed one single home for the interface data, so the shape of what crosses the wire is settled before implementation rather than during it."
  de: "Die KI schlug das Drei-Projekt-Hosted-WASM-Layout vor; ich bestätigte einen einzigen Ort für die Schnittstellen Informationen, damit die Struktur dessen, was über die Leitung geht, vor der Umsetzung feststeht und nicht während ihr."
introducedIn: WZ-0.1.0
code:
  en: |
    flowchart TD
      User["Owner in the browser"] --> Client
      subgraph App["Wurzel"]
        Client["Client — Blazor WASM"]
        Server["Server — ASP.NET Core"]
        Shared["Interface data"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"contracts"| Shared
        Server -.->|"contracts"| Shared
      end
      Server --> DB[(Database)]
  de: |
    flowchart TD
      User["Inhaber im Browser"] --> Client
      subgraph App["Wurzel"]
        Client["Client — Blazor WASM"]
        Server["Server — ASP.NET Core"]
        Shared["Schnittstellen Daten"]
        Client -->|"HTTP JSON"| Server
        Client -.->|"Schnittstellen Informationen"| Shared
        Server -.->|"Schnittstellen Informationen"| Shared
      end
      Server --> DB[(Datenbank)]
---
