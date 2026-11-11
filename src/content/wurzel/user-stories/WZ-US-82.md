---
title:
  en: "Standard-MwSt. ships with 19 % as its default"
  de: "Standard-MwSt. ist ab Werk auf 19 % voreingestellt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "Standard-MwSt. to start at 19 %"
  de: "dass die Standard-MwSt. bei 19 % beginnt"
soThat:
  en: "a fresh installation bills the rate my business actually charges without me finding the setting first"
  de: "eine neue Installation den Satz abrechnet, den mein Betrieb tatsächlich berechnet, ohne dass ich die Einstellung erst finden muss"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "On a fresh installation, Einstellungen shows Standard-MwSt. at 19 %, and an invoice created before anyone opens Einstellungen carries 19 %"
    - "The user can change Standard-MwSt. or clear it, and the change is kept"
    - "An installation whose settings already exist keeps its Standard-MwSt. as it is, empty or not"
  de:
    - "Auf einer neuen Installation zeigt Einstellungen die Standard-MwSt. bei 19 %, und eine Rechnung, die angelegt wird, bevor jemand Einstellungen öffnet, trägt 19 %"
    - "Der Nutzer kann die Standard-MwSt. ändern oder leeren, und die Änderung bleibt erhalten"
    - "Eine Installation mit bereits vorhandenen Einstellungen behält ihre Standard-MwSt., leer oder nicht"
codeUrl: Server/Settings/CompanySettingsDefaults.cs
status: done
aiContribution:
  en: "A small fix with nothing to override. Its readiness check came back clean apart from a wrong story reference and a wording fix. My one decision was that existing installations are not touched, since no data is kept before the app ships."
  de: "Eine kleine Korrektur, bei der es nichts zu überstimmen gab. Ihre Readiness-Prüfung kam bis auf einen falschen Story-Verweis und eine Formulierungskorrektur sauber zurück. Meine einzige Entscheidung war, dass bestehende Installationen unberührt bleiben, weil vor der Auslieferung keine Daten behalten werden."
introducedIn: WZ-0.4.0
source: docs/user-stories/132-default-tax-rate-preset-to-19.md
---
