---
title:
  en: Enter prices with a comma or a point
  de: Preise mit Komma oder Punkt eingeben
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to type prices the German way, with a decimal comma
  de: Preise auf deutsche Art mit Dezimalkomma zu tippen
soThat:
  en: entering amounts is not fighting my keyboard or the browser locale
  de: die Eingabe von Beträgen nicht gegen Tastatur oder Browser-Locale kämpft
requirement: WZ-R-07
acceptanceCriteria:
  en:
    - Einzelpreis and Menge accept a comma or a point regardless of the OS/browser locale and are displayed back with a German comma on blur
    - At most one separator is allowed (1.234,56 and 1,2,3 are rejected with a German message, not silently zeroed)
    - Mobile uses inputmode=decimal; the field is a text input, not a browser number input
  de:
    - Einzelpreis und Menge akzeptieren Komma oder Punkt unabhängig vom OS-/Browser-Locale und werden beim Verlassen mit deutschem Komma angezeigt
    - Es ist höchstens ein Trennzeichen erlaubt (1.234,56 und 1,2,3 werden mit deutscher Meldung abgelehnt, nicht still auf null gesetzt)
    - Mobil nutzt inputmode=decimal; das Feld ist ein Text-Eingabefeld, kein Zahlen-Eingabefeld des Browsers
status: done
aiContribution:
  en: The AI traced the root cause — the browser number input validates against the OS locale, and the owner's PC is English-set — and proposed a text input with app-side parsing, reused for Menge. I confirmed the single-separator rule.
  de: Die KI führte die Ursache zurück — das Zahlen-Eingabefeld des Browsers validiert gegen das OS-Locale, und der PC des Inhabers ist englisch eingestellt — und schlug ein Text-Eingabefeld mit App-seitigem Parsen vor, wiederverwendet für die Menge. Ich bestätigte die Ein-Trennzeichen-Regel.
introducedIn: WZ-0.1.0
---
