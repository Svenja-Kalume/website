---
title:
  en: Blazor WebAssembly web app instead of MAUI/Avalonia
  de: Blazor-WebAssembly-Web-App statt MAUI/Avalonia
case: wurzel
status: accepted
date: 2026-06-10
relatedRequirements: [WZ-R-06]
context:
  en:
    - "The owner works across a Windows PC and an Android phone/tablet. The main pain point in earlier native attempts (MAUI) was reliable PDF creation across platforms."
  de:
    - "Der Inhaber arbeitet an einem Windows-PC und an einem Android-Telefon bzw. -Tablet. Der Hauptschmerzpunkt früherer nativer Versuche (MAUI) war die zuverlässige PDF-Erzeugung über alle Plattformen hinweg."
decision:
  en:
    - "Build an ASP.NET Core Hosted Blazor WebAssembly solution (Client / Server / Shared) instead of a native MAUI/Avalonia client, giving one browser code path on all devices."
  de:
    - "Eine ASP.NET-Core-Hosted-Blazor-WebAssembly-Lösung (Client / Server / Shared) bauen statt eines nativen MAUI-/Avalonia-Clients — ein Code-Pfad im Browser auf allen Geräten."
consequences:
  en:
    - "Fewer platform-specific issues; a single deployment; no CORS (the server also serves the WASM files). Offline capability (PWA) is deferred to a later phase."
  de:
    - "Weniger plattformspezifische Probleme, ein einziges Deployment, kein CORS (der Server liefert auch die WASM-Dateien aus). Offline-Fähigkeit (PWA) ist auf eine spätere Phase verschoben."
introducedIn: WZ-0.1.0
---
