---
title:
  en: Branding controls hand-built — the native pickers failed on the phone
  de: Branding-Bedienelemente selbst gebaut — die nativen Auswahlen versagten am Handy
date: 2026-08-14
summary:
  en: "The native colour input and file picker broke down on Android, so the accent-colour picker, logo upload and a logo-sampling pipette were all hand-built rather than delegated to the browser or a component library."
  de: "Die native Farbeingabe und der Dateiauswähler versagten unter Android, daher wurden Farbwähler, Logo-Upload und eine Logo-Pipette von Hand gebaut, statt sie dem Browser oder einer Komponentenbibliothek zu überlassen."
case: wurzel
iteration: WZ-0.2.0
tags: [frontend, mobile]
draft: false
body:
  en:
    - "The Level-2 test session on a real phone exposed one root cause behind three findings: device-governed native controls. Android's native colour input opens an OS picker offering only eight fixed presets and one unlabelled custom tile; the hex text field beside it was redundant and easy to make invalid; and the native file input still showed an English 'No file chosen' even after a logo was displayed."
    - "So the swatch, hue/saturation gradient and the file button were rebuilt as hand-written Razor components with pointer capture and app-owned German labels, and the redundant hex field was dropped. A canvas-based logo pipette was added on top: it reads the clicked pixel of the uploaded logo via a hidden canvas to set the accent colour. The browser's own EyeDropper API was rejected for it — Chromium-only, no Firefox, unreliable on older Android WebViews — and the house rule against third-party Blazor component libraries meant a library was never an option. I retested the picker, confirmed it worked, and only then asked for the pipette on top."
  de:
    - "Die Level-2-Testsitzung an einem echten Handy legte eine gemeinsame Ursache hinter drei Befunden offen: gerätegesteuerte native Bedienelemente. Androids native Farbeingabe öffnet eine Betriebssystem-Auswahl mit nur acht festen Voreinstellungen und einer unbeschrifteten Kachel für Eigenes; das Hex-Textfeld daneben war überflüssig und leicht ungültig zu machen; und die native Dateiauswahl zeigte selbst nach dem Laden eines Logos noch das englische „No file chosen“."
    - "Also wurden Farbfeld, Farbton-/Sättigungsverlauf und die Dateischaltfläche als handgeschriebene Razor-Komponenten mit Pointer-Capture und app-eigenen deutschen Beschriftungen neu gebaut und das überflüssige Hex-Feld entfernt. Darüber kam eine Canvas-basierte Logo-Pipette: Sie liest über ein verstecktes Canvas den angeklickten Pixel des hochgeladenen Logos, um die Akzentfarbe zu setzen. Die browsereigene EyeDropper-API wurde dafür verworfen — nur Chromium, kein Firefox, unzuverlässig auf älteren Android-WebViews — und die Hausregel gegen Fremd-Blazor-Komponentenbibliotheken machte eine Bibliothek ohnehin nie zur Option. Ich testete den Farbwähler erneut, bestätigte, dass er funktioniert, und bat erst dann zusätzlich um die Pipette."
---
