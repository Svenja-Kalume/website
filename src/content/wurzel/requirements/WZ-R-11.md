---
title:
  en: A release the owner can trust
  de: Ein Release, dem der Inhaber vertrauen kann
case: wurzel
businessGoal:
  en: Before anything reaches a real customer, the solution restores and builds without known high-severity dependency advisories, and the automated test suite that gates every release is deterministic — a red run means a real regression, not test-harness flakiness.
  de: Bevor irgendetwas einen echten Kunden erreicht, lässt sich die Lösung ohne bekannte hochkritische Abhängigkeits-Advisories restaurieren und bauen, und die automatisierte Test-Suite, die jedes Release absichert, ist deterministisch — ein roter Lauf bedeutet eine echte Regression, keine Test-Harness-Flakiness.
fitCriterion:
  en: "`dotnet list package --vulnerable --include-transitive` reports no high-severity advisories, and `dotnet test` passes on three consecutive full-solution runs with no fixture-initialisation failures."
  de: "`dotnet list package --vulnerable --include-transitive` meldet keine hochkritischen Advisories, und `dotnet test` läuft bei drei aufeinanderfolgenden vollständigen Solution-Durchläufen ohne Fixture-Initialisierungsfehler grün durch."
priority: must
status: done
aiContribution:
  en: The AI diagnosed the E2E flakiness by measurement rather than accepting the first hypothesis — an earlier root-cause guess was disproven and discarded once traced to a skipped `host.Start()` call in a `WebApplicationFactory.CreateHost` override, which raced fixture startup against `TestServer.get_Application()`. For the vulnerable packages, the AI proposed the safest available upgrade per package and a documented, time-boxed `NuGetAuditSuppress` only where no stable fix existed yet. I own the call that the app being pre-release (not yet productive) is what makes that suppression acceptable.
  de: Die KI diagnostizierte die E2E-Flakiness durch Messung statt die erste Hypothese zu übernehmen — eine frühere Ursachenvermutung wurde widerlegt und verworfen, nachdem sie auf einen übersprungenen `host.Start()`-Aufruf in einem `WebApplicationFactory.CreateHost`-Override zurückgeführt wurde, der den Fixture-Start gegen `TestServer.get_Application()` racete. Bei den verwundbaren Paketen schlug die KI das jeweils sicherste verfügbare Upgrade pro Paket vor sowie ein dokumentiertes, befristetes `NuGetAuditSuppress` nur dort, wo noch kein stabiler Fix existierte. Ich verantworte die Entscheidung, dass die Vorab-Release-Phase der App (noch nicht produktiv) diese Suppression vertretbar macht.
introducedIn: WZ-0.2.0
source: docs/user-stories/080-deterministic-e2e-harness.md
---

Not a customer-facing feature, but a precondition for shipping one: this requirement covers the two
technical-hygiene stories gated at the Level-2 release — the deterministic E2E test harness (Story 80,
the entry gate for Level 3) and the NU1903 vulnerable-package remediation (Story 54).
