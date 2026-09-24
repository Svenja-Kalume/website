---
title:
  en: Free-license components, SQLite→PostgreSQL, IONOS hosting, MinVer versioning
  de: Free-Lizenz-Komponenten, SQLite→PostgreSQL, IONOS-Hosting, MinVer-Versionierung
case: wurzel
status: accepted
date: 2026-06-25
relatedRequirements: []
context:
  en:
    - "The business wants minimal admin effort, low starting cost, no Docker/orchestration, and no licence risk from third-party packages."
  de:
    - "Der Betrieb will minimalen Administrationsaufwand, geringe Anfangskosten, kein Docker und keine Orchestrierung und kein Lizenzrisiko aus Fremdpaketen."
decision:
  en:
    - "Only free licences (MIT/Apache 2.0/BSD/LGPL or free community tiers). SQLite in Phase 1, managed PostgreSQL later; deploy to IONOS ASP.NET/Windows hosting via `dotnet publish`; derive the product version from git tags with MinVer."
  de:
    - "Nur freie Lizenzen (MIT/Apache 2.0/BSD/LGPL oder kostenfreie Community-Stufen). SQLite in Phase 1, später verwaltetes PostgreSQL; Deployment auf IONOS-ASP.NET-/Windows-Hosting über `dotnet publish`; die Produktversion mit MinVer aus Git-Tags ableiten."
consequences:
  en:
    - "Cheap to start and operate; a managed-database migration is a known future step, and there are no containers to maintain. Releases are tagged in git — this freeze is `0.1.0` — but the MinVer package and the version footer that would surface that tag inside the app are deliberately deferred until the first release is ready, so the deployed build’s version is not yet confirmable from the running app."
  de:
    - "Günstig im Start und im Betrieb; der Umzug auf eine verwaltete Datenbank ist ein bekannter künftiger Schritt, und es sind keine Container zu pflegen. Releases werden in Git getaggt — dieser Stand ist `0.1.0` —, aber das MinVer-Paket und die Versionsanzeige in der Fußzeile, die dieses Tag in der Anwendung sichtbar machen würde, sind bewusst zurückgestellt, bis das erste Release steht. Die Version des ausgelieferten Builds ist deshalb aus der laufenden Anwendung noch nicht bestätigbar."
introducedIn: WZ-0.1.0
---
