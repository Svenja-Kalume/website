---
title:
  en: Capture a real address and move from customer to quote without detours
  de: Eine echte Adresse erfassen und ohne Umwege vom Kunden zum Angebot kommen
case: wurzel
businessGoal:
  en: The owner can enter a correct street address with minimal typing, give a project its own site address when it differs from the customer's, and go straight from a customer to a new project or a new offer without navigating through intermediate screens first.
  de: Der Inhaber kann eine korrekte Adresse mit minimalem Tippen erfassen, einem Projekt eine eigene Adresse geben, wenn sie von der des Kunden abweicht, und direkt vom Kunden zu einem neuen Projekt oder Angebot gelangen, ohne zuerst über Zwischenbildschirme zu navigieren.
fitCriterion:
  en: Typing 3+ characters into a Straße field anywhere it appears offers real address suggestions that fill Straße/PLZ/Ort together; a "Projekt anlegen"/"Angebot anlegen" button on the customer screen reaches a saved project/offer without visiting any other screen first, and an abandoned in-progress offer draft leaves no orphan project or position behind.
  de: Das Tippen von 3+ Zeichen in ein Straße-Feld bietet überall echte Adressvorschläge, die Straße/PLZ/Ort gemeinsam befüllen; ein „Projekt anlegen"/„Angebot anlegen"-Button auf der Kundenseite führt ohne Zwischenbildschirm zu einem gespeicherten Projekt/Angebot, und ein abgebrochener Angebotsentwurf hinterlässt kein verwaistes Projekt oder keine verwaiste Position.
priority: should
status: done
aiContribution:
  en: The AI proposed the address lookup sit behind a swappable server-side interface backed by Photon (free, no API key, type-ahead friendly — unlike Nominatim's usage policy) so the client never calls a geocoder directly. For customer-to-offer creation, the AI proposed an atomic, deferred mechanism — build the whole offer client-side first, then create project + positions + offer in one transaction only on first valid save — replacing an earlier "eagerly create an empty project" idea that could leave orphans. I decided the project's own address is inferred purely from whether its fields are populated, with no separate stored flag.
  de: Die KI schlug vor, den Adress-Lookup hinter ein austauschbares serverseitiges Interface zu legen, das auf Photon basiert (kostenlos, ohne API-Key, geeignet für Type-Ahead — anders als Nominatims Nutzungsrichtlinie), damit der Client nie direkt einen Geocoder aufruft. Für die Kunde-zu-Angebot-Erstellung schlug die KI einen atomaren, aufgeschobenen Mechanismus vor — das ganze Angebot erst client-seitig aufbauen und Projekt + Positionen + Angebot erst beim ersten gültigen Speichern in einer Transaktion anlegen — anstelle einer früheren Idee, sofort ein leeres Projekt anzulegen, die Waisen hinterlassen konnte. Ich entschied, dass die eigene Adresse eines Projekts rein aus der Befüllung seiner Felder abgeleitet wird, ohne ein separates gespeichertes Flag.
introducedIn: WZ-0.2.0
source: docs/user-stories/055-customer-address-intelli-fill.md
---

Level 1 required every address field typed by hand and every project/offer created by navigating
there step by step. This requirement covers Level 2 Block 2c: address intelli-fill on the customer
form (Story 55) and reused on an optional, distinct project address (Story 57), plus the
create-from-customer shortcuts for a project (Story 56) and an offer (Stories 79, 59).
