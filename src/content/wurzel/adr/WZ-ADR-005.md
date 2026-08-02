---
title:
  en: Free-license components, SQLite→PostgreSQL, IONOS hosting, MinVer versioning
  de: Free-Lizenz-Komponenten, SQLite→PostgreSQL, IONOS-Hosting, MinVer-Versionierung
case: wurzel
status: accepted
date: 2026-06-25
relatedRequirements: []
introducedIn: WZ-0.1.0
---

## Context
The business wants minimal admin effort, low starting cost, no Docker/orchestration, and no
licence risk from third-party packages.

## Decision
Only free licences (MIT/Apache 2.0/BSD/LGPL or free community tiers). SQLite in Phase 1,
managed PostgreSQL later; deploy to IONOS ASP.NET/Windows hosting via `dotnet publish`;
derive the product version from git tags with MinVer.

## Consequences
Cheap to start and operate; the version footer follows tags — this freeze is `0.1.0`. A
managed-database migration is a known future step; no containers to maintain.
