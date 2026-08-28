---
title:
  en: Update packages with known vulnerabilities (NU1903)
  de: Pakete mit bekannten Schwachstellen aktualisieren (NU1903)
case: wurzel
asA:
  en: developer
  de: Entwickler
iWant:
  en: the transitive packages flagged by the NuGet vulnerability audit (NU1903) updated to non-vulnerable versions
  de: die vom NuGet-Schwachstellen-Audit (NU1903) markierten transitiven Pakete auf unbedenkliche Versionen aktualisiert
soThat:
  en: the solution restores and builds without known high-severity advisories before the first release
  de: sich die Lösung vor dem ersten Release ohne bekannte hochkritische Advisories restaurieren und bauen lässt
requirement: WZ-R-11
acceptanceCriteria:
  en:
    - "dotnet list package --vulnerable --include-transitive reports no high-severity advisory for Microsoft.OpenApi, raised to a patched 2.x version (>= 2.7.5)"
    - The SQLitePCLRaw.lib.e_sqlite3 advisory is resolved by a newer EF Core Sqlite pulling patched native SQLite, or a stable patched release, or — only if neither exists yet — a documented, time-boxed NuGetAuditSuppress linked to this story
    - The full test suite (Client.Tests, Server.Tests, E2ETests) stays green after the change, with no behavioural change to OpenAPI output or SQLite-backed data access, and no paid-license package introduced
  de:
    - "dotnet list package --vulnerable --include-transitive meldet keine hochkritische Advisory mehr für Microsoft.OpenApi, angehoben auf eine gepatchte 2.x-Version (>= 2.7.5)"
    - Die SQLitePCLRaw.lib.e_sqlite3-Advisory wird gelöst durch ein neueres EF-Core-Sqlite mit gepatchtem nativem SQLite, oder ein stabiles gepatchtes Release, oder — nur falls beides noch nicht existiert — ein dokumentiertes, befristetes NuGetAuditSuppress mit Verweis auf diese Story
    - Die volle Test-Suite (Client.Tests, Server.Tests, E2ETests) bleibt nach der Änderung grün, ohne Verhaltensänderung an OpenAPI-Ausgabe oder SQLite-Datenzugriff, und ohne Einführung eines kostenpflichtigen Pakets
codeUrl: Server/Wurzel.Server.csproj
status: done
aiContribution:
  en: The AI assessed both advisories as DoS/memory-safety (not data exposure or RCE) and judged practical exposure low because the app only parses its own generated OpenAPI surface and runs fixed, app-authored SQLite queries — grounding the decision to accept a time-boxed suppression where no stable fix existed yet, rather than blocking the release. I own the call that this is acceptable only because the app is not yet productive.
  de: Die KI bewertete beide Advisories als DoS-/Speicher-Sicherheitsprobleme (nicht als Datenoffenlegung oder RCE) und schätzte die praktische Gefährdung als gering ein, da die App nur ihre eigene generierte OpenAPI-Oberfläche parst und feste, app-eigene SQLite-Abfragen ausführt — Grundlage für die Entscheidung, wo noch kein stabiler Fix existierte, eine befristete Suppression zu akzeptieren statt das Release zu blockieren. Ich verantworte die Entscheidung, dass dies nur vertretbar ist, weil die App noch nicht produktiv ist.
introducedIn: WZ-0.2.0
source: docs/user-stories/054-update-vulnerable-packages.md
---
