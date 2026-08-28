---
title:
  en: Offer templates (branding)
  de: Angebotsvorlage (Branding)
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to brand my offer document (logo, accent colour) and set standard wording once
  de: mein Angebotsdokument einmalig zu branden (Logo, Akzentfarbe) und Standardformulierungen festzulegen
soThat:
  en: every offer I export carries my identity and boilerplate without retyping it
  de: jedes exportierte Angebot meine Identität und Standardtexte trägt, ohne sie erneut einzutippen
requirement: WZ-R-08
acceptanceCriteria:
  en:
    - A seeded BrandingSettings singleton is maintained in a new "Angebotsvorlage" section on the Einstellungen screen; text/colour/validity/Kleinunternehmer fields autosave, the logo uploads via a dedicated endpoint (PNG/JPG only) with a preview and remove action
    - Branding renders identically on the shared Vorschau and the exported PDF — logo, accent colour, intro/closing/terms wording with token substitution, the validity line, and the § 19 Kleinunternehmer note where applicable
    - An empty BrandingSettings renders the document exactly as it did before this story — no logo, near-black default, no optional lines
    - Vorschau still never locks the offer; Export still locks it exactly as before — branding adds no new freeze mechanism, since the already-stored exported bytes are the frozen branding
  de:
    - Ein geseedetes BrandingSettings-Singleton wird in einem neuen „Angebotsvorlage"-Bereich der Einstellungen gepflegt; Text-/Farb-/Gültigkeits-/Kleinunternehmer-Felder speichern automatisch, das Logo lädt über einen eigenen Endpunkt (nur PNG/JPG) mit Vorschau und Entfernen-Aktion
    - Branding rendert identisch in der gemeinsamen Vorschau und dem exportierten PDF — Logo, Akzentfarbe, Einleitungs-/Schluss-/Zahlungstext mit Token-Ersetzung, die Gültigkeitszeile und der § 19-Kleinunternehmer-Hinweis, wo zutreffend
    - Ein leeres BrandingSettings rendert das Dokument exakt wie vor dieser Story — kein Logo, Standard-Schwarzton, keine optionalen Zeilen
    - Vorschau sperrt das Angebot weiterhin nie; Export sperrt es weiterhin genau wie zuvor — Branding fügt keinen neuen Freeze-Mechanismus hinzu, da die bereits gespeicherten exportierten Bytes das eingefrorene Branding sind
codeUrl: Server/Settings/BrandingSettings.cs
status: done
aiContribution:
  en: Scope was fixed in a /grill-me session on 2026-07-21 — the AI's proposal of a single global branding config (not a list of named templates), no custom fonts, and a closed token-substitution set was accepted; I added the Kleinunternehmer (§ 19 UStG) tax toggle as a separate concern living on CompanySettings rather than BrandingSettings, since it is a tax fact, not branding.
  de: Der Umfang wurde in einer /grill-me-Sitzung am 2026-07-21 festgelegt — der Vorschlag der KI einer einzigen globalen Branding-Konfiguration (statt einer Liste benannter Vorlagen), ohne eigene Schriftarten, mit einem geschlossenen Token-Ersetzungs-Set wurde übernommen; ich ergänzte den Kleinunternehmer-Schalter (§ 19 UStG) als eigenständiges Anliegen auf CompanySettings statt BrandingSettings, da es sich um eine Steuertatsache und nicht um Branding handelt.
introducedIn: WZ-0.2.0
source: docs/user-stories/078-offer-templates.md
---
