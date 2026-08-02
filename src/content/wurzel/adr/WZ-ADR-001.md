---
title:
  en: Blazor WebAssembly web app instead of MAUI/Avalonia
  de: Blazor-WebAssembly-Web-App statt MAUI/Avalonia
case: wurzel
status: accepted
date: 2026-06-10
relatedRequirements: [WZ-R-06]
---

## Context
The owner works across a Windows PC and an Android phone/tablet. The main pain point in
earlier native attempts (MAUI) was reliable PDF creation across platforms.

## Decision
Build an ASP.NET Core Hosted Blazor WebAssembly solution (Client / Server / Shared)
instead of a native MAUI/Avalonia client, giving one browser code path on all devices.

## Consequences
Fewer platform-specific issues; a single deployment; no CORS (the server also serves the
WASM files). Offline capability (PWA) is deferred to a later phase.
