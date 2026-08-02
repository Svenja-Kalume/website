---
title:
  en: Auto-capitalize names and text on blur
  de: Namen und Text beim Verlassen automatisch großschreiben
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: names and descriptions tidied up automatically
  de: dass Namen und Beschreibungen automatisch aufgeräumt werden
soThat:
  en: documents look professional without me fixing capitalization by hand
  de: Dokumente professionell wirken, ohne dass ich die Groß-/Kleinschreibung von Hand korrigiere
requirement: WZ-R-07
acceptanceCriteria:
  en:
    - On blur, names (Vorname, Nachname, Firma, Ort, Straße) get word-caps; free text (Projektname, Beschreibung, Betreff, Notizen) gets sentence-caps
    - Inner capitals are preserved (e.g. GmbH); Email, Telefon, PLZ, numeric and tax/bank fields are excluded
    - It is enforced by the app on all platforms; example „hans müller" → „Hans Müller"
  de:
    - Beim Verlassen erhalten Namen (Vorname, Nachname, Firma, Ort, Straße) Wort-Großschreibung; Freitext (Projektname, Beschreibung, Betreff, Notizen) Satz-Großschreibung
    - Binnengroßschreibung bleibt erhalten (z. B. GmbH); E-Mail, Telefon, PLZ, numerische und Steuer-/Bankfelder sind ausgenommen
    - Es wird von der App auf allen Plattformen erzwungen; Beispiel „hans müller" → „Hans Müller"
status: done
aiContribution:
  en: The idea came from the recorded session ("Soll ich was einbauen, das automatisch groß schreibt? Ja."); the AI proposed the word- vs sentence-caps split and the field exclusions. I confirmed preserving inner capitals like GmbH.
  de: Die Idee kam aus der aufgezeichneten Session („Soll ich was einbauen, das automatisch groß schreibt? Ja."); die KI schlug die Aufteilung Wort- vs. Satz-Großschreibung und die Feld-Ausnahmen vor. Ich bestätigte den Erhalt der Binnengroßschreibung wie GmbH.
---
