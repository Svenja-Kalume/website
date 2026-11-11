---
title:
  en: "Not a bug: a requirement that changed"
  de: "Kein Fehler: eine Anforderung, die sich geändert hat"
date: 2026-10-01
summary:
  en: "Letting a project hold several open offers looked to the AI like fixing a defect. It was a rule I had set myself, and calling it what it was changed the work."
  de: "Dass ein Projekt mehrere offene Angebote haben darf, sah für die KI nach der Behebung eines Fehlers aus. Es war eine Regel, die ich selbst festgelegt hatte, und sie beim Namen zu nennen hat die Arbeit verändert."
case: wurzel
iteration: WZ-0.4.0
tags: [decision, bdr, offers, lifecycle]
draft: false
body:
  en:
    - "The business owner quotes some jobs in parts — a patio and a garden, each as its own offer on the same project. The app did not allow that: a project could hold only one open offer, and starting another one replaced the first. Grooming the story that lets a project hold several open offers, the AI read the code to see how the old behaviour worked."
    - "What it found was exact. No screen offered a second offer while one was open, and on the server only one call replaced the open offer when a new one was created. But it reported this as the story's premise being wrong, and explained it in terms of a bug."
    - "I rejected that framing. Nothing was broken. The app had enforced a rule that was written down and accepted — at most one open offer per project — and it enforced it faithfully. The requirement changed, so a new business decision record now supersedes the old one: a project may hold any number of open offers, and only Neue Version replaces an offer, and only the one it is started from."
    - "The difference is not wording. A bug fix changes the code to match the rule. A changed requirement changes the rule, so the specification had to name both halves of the old enforcement — the screens and the server — and every place that assumed \"the project's open offer\" had to say which one. Two buttons that cannot know which offer is meant are now hidden while several are open, and choosing among them became a story for after the MVP. It cost one wording round at the approval gate; the story's scope did not change."
  de:
    - "Manche Aufträge bietet der Geschäftsinhaber in Teilen an — eine Terrasse und einen Garten, jeweils als eigenes Angebot im selben Projekt. Die App erlaubte das nicht: Ein Projekt konnte nur ein offenes Angebot haben, und ein weiteres ersetzte das erste. Beim Grooming der Story, die einem Projekt mehrere offene Angebote erlaubt, las die KI den Code, um zu sehen, wie das alte Verhalten funktionierte."
    - "Was sie fand, war genau. Kein Bildschirm bot ein zweites Angebot an, solange eines offen war, und auf dem Server ersetzte nur ein einziger Aufruf das offene Angebot, wenn ein neues angelegt wurde. Sie meldete das aber als falsche Prämisse der Story und erklärte es wie einen Fehler."
    - "Diese Einordnung habe ich zurückgewiesen. Nichts war kaputt. Die App hatte eine aufgeschriebene und angenommene Regel durchgesetzt — höchstens ein offenes Angebot je Projekt —, und zwar treu. Die Anforderung hat sich geändert, also löst jetzt ein neues Dokument für eine Geschäftsentscheidung das alte ab: Ein Projekt darf beliebig viele offene Angebote haben, und nur Neue Version ersetzt ein Angebot, und nur dasjenige, aus dem sie gestartet wird."
    - "Der Unterschied ist keine Formulierungsfrage. Eine Fehlerbehebung passt den Code an die Regel an. Eine geänderte Anforderung ändert die Regel, also musste die Spezifikation beide Hälften der alten Durchsetzung benennen — die Bildschirme und den Server —, und jede Stelle, die von „dem offenen Angebot des Projekts“ ausging, musste sagen, welches gemeint ist. Zwei Schaltflächen, die das nicht wissen können, sind jetzt ausgeblendet, solange mehrere offen sind, und die Auswahl unter ihnen wurde eine Story für nach dem MVP. Gekostet hat es eine Formulierungsrunde am Freigabe-Gate; der Umfang der Story hat sich nicht geändert."
---
