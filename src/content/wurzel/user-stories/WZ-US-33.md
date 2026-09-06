---
title:
  en: Deterministic E2E test harness
  de: Deterministischer E2E-Test-Harness
case: wurzel
asA:
  en: a developer
  de: Entwickler
iWant:
  en: the E2E suite to pass deterministically when it runs on its own
  de: dass die E2E-Suite bei eigenständigem Lauf deterministisch grün läuft
soThat:
  en: a red run means a real regression instead of fixture contention, so the suite can be trusted as the Level 2 release gate
  de: ein roter Lauf eine echte Regression bedeutet statt Fixture-Konkurrenz, sodass die Suite als Release-Gate für Level 2 vertrauenswürdig ist
requirement: WZ-R-11
acceptanceCriteria:
  en:
    - "Root cause found by measurement, not guesswork: the WebApplicationFactory.CreateHost override never called host.Start(), so CreateClient() raced the background host startup — a race won produced green, a race lost threw \"the server has not been started\""
    - A second latent race (one shared TaskCompletionSource handed to every host built by DeferredHostBuilder) is fixed so each host is awaited on its own ApplicationStarted
    - "dotnet test on the full solution passes repeatably; class parallelism and full-solution runs no longer amplify a hit rate that tracked CPU load"
  de:
    - "Ursache durch Messung statt Vermutung gefunden: Der WebApplicationFactory.CreateHost-Override rief nie host.Start() auf, sodass CreateClient() den Hintergrund-Hoststart racete — gewonnenes Rennen ergab Grün, verlorenes warf „the server has not been started“"
    - Ein zweites latentes Rennen (eine geteilte TaskCompletionSource für jeden von DeferredHostBuilder gebauten Host) wird behoben, sodass jeder Host auf sein eigenes ApplicationStarted wartet
    - "dotnet test läuft auf der gesamten Solution wiederholbar grün; Klassen-Parallelität und Solution-weite Läufe verstärken keine an CPU-Last gekoppelte Trefferquote mehr"
codeUrl: Tests/Wurzel.E2ETests/PlaywrightServerFixture.cs
priority: must
status: done
aiContribution:
  en: The AI's original root-cause analysis was disproven by measurement and explicitly superseded during delivery — it is kept in the story as a “superseded hypothesis” rather than deleted, and the corrected root cause (a skipped host.Start() call) is what shipped. I granted this story a documented exception to keep that stale analysis visible rather than rewritten away, so the reasoning trail stays honest.
  de: Die ursprüngliche Ursachenanalyse der KI wurde durch Messung widerlegt und während der Umsetzung ausdrücklich ersetzt — sie bleibt als „ersetzte Hypothese“ in der Story erhalten statt gelöscht, und die korrigierte Ursache (ein übersprungener host.Start()-Aufruf) wurde umgesetzt. Ich gewährte dieser Story eine dokumentierte Ausnahme, damit diese überholte Analyse sichtbar bleibt statt wegredigiert zu werden, damit die Nachvollziehbarkeit ehrlich bleibt.
introducedIn: WZ-0.2.0
source: docs/user-stories/080-deterministic-e2e-harness.md
---
