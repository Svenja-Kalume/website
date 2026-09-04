---
title:
  en: Two fixes that fixed nothing — knowing when to stop
  de: Zwei Korrekturen, die nichts korrigierten — wissen, wann man aufhört
date: 2026-08-14
summary:
  en: "A decimal-reformat fix that changed nothing observable, and a mobile-keyboard layout change that helped nothing on a real device — both reverted, and the underlying findings parked rather than chased narrowly."
  de: "Eine Dezimal-Reformatierung, die nichts Beobachtbares änderte, und eine Layout-Änderung für die Handytastatur, die am echten Gerät nichts brachte — beide zurückgesetzt und die zugrunde liegenden Befunde geparkt statt eng weiterverfolgt."
case: wurzel
iteration: WZ-0.2.0
tags: [dead-end, mobile, testing]
draft: false
body:
  en:
    - "Two findings from the mobile test session turned into fixes that earned a revert. The first: on the offer's position table, typing '0.55' and leaving the field kept the dot on screen until the page was reopened, while the project's identical table redrew it as '0,55' at once. The fix forced a redraw right after formatting — but it changed nothing observable, because Blazor already calls StateHasChanged after every event handler. A regression test passed identically with the line in or out, the write-back path was structurally identical to the working table, and an E2E repro under 20x CPU throttling refused to reproduce it. Most likely a device-specific keyboard/render timing quirk; I parked it in a later story rather than chase a ghost through the wrong harness."
    - "The second: the on-screen keyboard eats too much vertical space on the phone. Two narrow changes shipped — 100vh swapped to 100dvh, and a rule collapsing the top-bar chrome while an input has focus — but on a real-device retest neither made a felt difference, so both were reverted outright. Rather than patch it narrowly again, the keyboard-space problem and the other phone findings moved into one growing collection point (Story 96, later Level 4). A separate phone-only layout was raised and deliberately left undecided — it would contradict the one-responsive-layout rule. Both stories keep their original text as frozen history."
  de:
    - "Zwei Befunde aus der mobilen Testsitzung wurden zu Korrekturen, die ein Zurücksetzen verdienten. Der erste: In der Positionstabelle des Angebots blieb nach Eingabe von „0.55\" und Verlassen des Feldes der Punkt auf dem Bildschirm, bis die Seite neu geöffnet wurde, während die baugleiche Tabelle des Projekts sofort „0,55\" zeichnete. Die Korrektur erzwang ein Neuzeichnen direkt nach der Formatierung — änderte aber nichts Beobachtbares, denn Blazor ruft StateHasChanged ohnehin nach jedem Event-Handler auf. Ein Regressionstest lief mit und ohne die Zeile identisch, der Rückschreibpfad war strukturell identisch zur funktionierenden Tabelle, und ein E2E-Nachstellversuch unter 20-facher CPU-Drosselung ließ sich nicht reproduzieren. Vermutlich eine gerätespezifische Timing-Eigenheit von Tastatur und Rendering; ich habe den Befund in eine spätere Story geparkt, statt einem Gespenst durch die falsche Testumgebung nachzujagen."
    - "Der zweite: Die Bildschirmtastatur frisst am Handy zu viel vertikalen Platz. Zwei eng umrissene Änderungen gingen live — 100vh zu 100dvh getauscht und eine Regel, die die obere Leiste einklappt, solange ein Eingabefeld fokussiert ist — doch beim Retest am echten Gerät brachte keine einen spürbaren Unterschied, also wurden beide vollständig zurückgesetzt. Statt erneut eng nachzubessern, wanderten das Tastatur-Platzproblem und die übrigen Handy-Befunde in einen wachsenden Sammelpunkt (Story 96, später Level 4). Ein eigenes Handy-Layout wurde angesprochen und bewusst offengelassen — es widerspräche der Regel des einen responsiven Layouts. Beide Stories behalten ihren ursprünglichen Text als eingefrorene Historie."
---
