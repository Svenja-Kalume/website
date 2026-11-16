---
title:
  en: "Most of our architecture decisions were not architecture"
  de: "Die meisten unserer Architekturentscheidungen waren keine Architektur"
date: 2026-09-27
summary:
  en: "Only 14 of 35 architecture decision records were about architecture. The decisions were split into three kinds by who owns them, the feature briefs stopped holding rules, and checks now keep them apart."
  de: "Nur 14 von 35 Architekturentscheidungen handelten von Architektur. Die Entscheidungen wurden danach, wem sie gehören, in drei Arten aufgeteilt, die Feature-Briefings halten keine Regeln mehr, und Prüfungen halten sie jetzt auseinander."
case: wurzel
iteration: WZ-0.4.0
tags: [adr, bdr, dsdr, prd, architecture, decision]
draft: false
body:
  en:
    - "Every decision of the project sat in one folder of architecture decision records (ADRs). I wanted ADRs, product requirement documents (PRDs) and design records kept apart, so the 35 records were classified. Only 14 were architecture — the stack, hosting, the data model, mechanisms. The rest were business rules, such as \"the invoice date is the issue date\", or interaction design, such as \"no Save button\". Several were all three at once: one frozen record held my business rule, a choice of notice over dialog, and a new write path in the code."
    - "The PRDs had the mirror problem. They held single decisions in their rationale sections, and a delivered PRD is frozen — so a business decision made after delivery had no home and landed in the ADR folder."
    - "Now there are three kinds of decision record with one template and lifecycle: architecture (ADR), business (BDR) and design (DSDR). Each has one test question — would another tech stack, another business, another screen design decide this differently? A decision that answers yes twice is two records. The PRD became a feature brief — problem, goals, scope, stories — and states no rule. Mixed records were superseded, not edited, so the freeze rule held through the migration."
    - "The AI first recommended keeping product-driven decisions in ADRs and pure product rules in the PRDs; I asked for both to be clean, which led to the separate business kind. It then proposed calling that kind PDR. I objected, because I would confuse PDR and PRD, so it became BDR — every decision record ends in -DR, and the PRD is visibly the one document that is not a decision. The stricter supersession check found two records wrong for weeks with nothing checking them, and new checks in the commit hook and in CI keep the structure from rotting back."
  de:
    - "Jede Entscheidung des Projekts lag in einem einzigen Ordner mit Architekturentscheidungen (ADRs). Ich wollte ADRs, Produktanforderungsdokumente (PRDs) und Gestaltungsentscheidungen getrennt haben, also wurden die 35 Dokumente eingeordnet. Nur 14 waren Architektur — Technologie, Hosting, Datenmodell, Mechanismen. Der Rest waren Geschäftsregeln wie „das Rechnungsdatum ist das Ausstellungsdatum“ oder Interaktionsgestaltung wie „keine Speichern-Schaltfläche“. Manche waren alles drei zugleich: Ein eingefrorenes Dokument enthielt meine Geschäftsregel, die Wahl eines Hinweises statt eines Dialogs und einen neuen Schreibweg im Code."
    - "Die PRDs hatten das spiegelbildliche Problem. Sie enthielten einzelne Entscheidungen in ihren Begründungsabschnitten, und ein geliefertes PRD ist eingefroren — eine nach der Lieferung getroffene Geschäftsentscheidung hatte also kein Zuhause und landete im ADR-Ordner."
    - "Jetzt gibt es drei Arten von Entscheidungsdokumenten mit einer Vorlage und einem Lebenszyklus: Architektur (ADR), Geschäft (BDR) und Gestaltung (DSDR). Jede hat eine Prüffrage — würde eine andere Technologie, ein anderes Geschäft, eine andere Bildschirmgestaltung das anders entscheiden? Eine Entscheidung, die zweimal mit Ja antwortet, sind zwei Dokumente. Das PRD wurde ein Feature-Briefing — Problem, Ziele, Umfang, Stories — und legt keine Regel fest. Gemischte Dokumente wurden abgelöst, nicht bearbeitet, sodass die Einfrierregel die Umstellung überstanden hat."
    - "Die KI empfahl zuerst, produktgetriebene Entscheidungen in ADRs und reine Produktregeln in den PRDs zu lassen; ich wollte beide sauber haben, und daraus entstand die eigene Geschäftsart. Dann schlug sie vor, diese Art PDR zu nennen. Ich habe widersprochen, weil ich PDR und PRD verwechseln würde, also wurde daraus BDR — jedes Entscheidungsdokument endet auf -DR, und das PRD ist sichtbar das eine Dokument, das keine Entscheidung ist. Die strengere Prüfung auf Ablösungen fand zwei Dokumente, die seit Wochen falsch waren, ohne dass etwas sie prüfte, und neue Prüfungen im Commit-Hook und in der CI verhindern, dass die Struktur wieder verfällt."
---
