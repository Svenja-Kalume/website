/**
 * i18n for the SITE CHROME and static page prose (English + German).
 *
 * Two things live here:
 *  1. `ui` — the translation dictionary for hard-coded interface strings
 *     (navigation, headings, table headers, labels). Add a key to BOTH
 *     locales; `useTranslations(lang)` falls back to the default locale.
 *  2. `localize()` — reads a locale-keyed CONTENT field (`{ en, de }`) coming
 *     from the content collections. Content IDs and reference() links stay
 *     language-neutral; only the human-readable prose is per-locale.
 */

export const languages = { en: 'English', de: 'Deutsch' } as const;
export const defaultLang: Lang = 'de';
export type Lang = 'en' | 'de';

export function isLang(value: unknown): value is Lang {
  return value === 'en' || value === 'de';
}

/** Coerce an unknown route param to a valid locale (default on mismatch). */
export function toLang(value: unknown): Lang {
  return isLang(value) ? value : defaultLang;
}

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.cases': 'Case Studies',
    'nav.cases.only': 'Case Study — Landscaping',
    'nav.how': 'How I Work',
    'nav.trace': 'Traceability',
    'nav.journal': 'Journal',
    'nav.about': 'About',
    'lang.switch': 'Deutsch',
    'lang.switch.aria': 'Auf Deutsch anzeigen',
    'site.title': 'Understanding Before Solving',
    'site.subtitle':
      'Software Development · Requirements Engineering · AI-driven Development',
    'footer': 'Complexity is my dopamine',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy',
    'footer.rights': 'Built with curiosity and Markdown.',

    'home.desc':
      'The visible documentation of an AI-assisted way of working in requirements engineering.',
    'home.h1': 'The process is the portfolio — not the result.',
    'home.p1':
      "This isn't a résumé, and it isn't a gallery of finished projects. It shows the way there: how a business problem becomes, step by step, a software system that holds up — AI-assisted, but with a human decision at every point. Precisely because AI makes building faster, it isn't the tool that decides whether a solution is good, but whether the real problem was understood.",
    'home.p2':
      'At each station you see both sides: the result and the road to it. Every artifact comes with the reasoning behind it — why did I decide this way? — and an open account of the AI\'s part: what did it propose, and what did I keep, change, or discard?',
    'home.redThread': 'The red thread',
    'home.gate':
      'The readiness gate is where the work splits by owner. If a story is unclear or cannot be tested, the AI and I fix it. If it raises a question that no document answers, it goes back to the client. The AI is not allowed to answer that kind of question.',
    'thread.caption': 'AI-assisted at every station. A human decision at every gate.',
    'thread.gateWord': 'gate, a human decides',
    'thread.problem': 'Problem',
    'thread.stakeholders': 'Stakeholders',
    'thread.workshop': 'Workshop',
    'thread.glossary': 'Glossary',
    'thread.glossary.sub': "the client's words, kept in sync with every story",
    'thread.requirements': 'Requirements',
    'thread.requirements.sub': 'with domain model and BPMN',
    'thread.stories': 'User stories',
    'thread.gate': 'Readiness gate',
    'thread.gate.formal': 'Formal defect (ambiguous, not testable, term missing) → back to requirements',
    'thread.gate.question': 'Business question → back to the workshop. The AI never answers it.',
    'thread.architecture': 'Architecture',
    'thread.architecture.sub': 'decision records (ADR)',
    'thread.code': 'Code + tests',
    'thread.code.sub': 'tests first',
    'thread.walk': 'Test walk',
    'thread.walk.sub': 'I open the running application before the next block starts',
    'thread.walk.finding': 'Finding → fixed inside the same level, not pushed to a later one',
    'thread.retro': 'Retrospective',
    'thread.retro.next': 'What it changes feeds the next iteration, back at the stakeholders',

    'fig.label': 'Key figures',
    'fig.levels': 'levels delivered',
    'fig.levels.x': 'A level is one stage of the application, tested and signed off by the client.',
    'fig.iterations': 'iterations published',
    'fig.iterations.x': 'An iteration is one published stage of the work, frozen once it is out.',
    'fig.requirements': 'requirements',
    'fig.requirements.x': 'What the business needs, in its own words.',
    'fig.stories': 'user stories',
    'fig.stories.x': 'Requirements cut into pieces small enough to build and check.',
    'fig.criteria': 'acceptance criteria',
    'fig.criteria.x': 'Testable conditions, each one checked before a story counts as done.',
    'fig.adr': 'decision records',
    'fig.adr.x': 'ADRs: the larger design choices, each with the reason it was made.',
    'fig.diagrams': 'diagrams',
    'fig.diagrams.x': 'Processes (BPMN) and lifecycles, drawn before they were built.',

    'walk.h2': 'What the test walks found',
    'walk.journal': 'The walk itself:',
    'walk.fixes': 'Each finding, fixed as its own story in',
    'walk.changes': 'corrects',
    'walk.followChain': 'Follow this one through the whole chain ↓',
    'walk.practice': 'What changed in the way of working:',
    'walk.corrects': 'Found by walking',

    'chain.h2': 'One defect, followed through the whole chain',
    'chain.intro': 'Every row is an artifact on this site, linked by the references it carries. Nothing on this chain was written for it.',
    'chain.requirement': 'Requirement',
    'chain.story': 'User story',
    'chain.adr': 'Decision record',
    'chain.walk': 'Test walk · human',
    'chain.fix': 'The fix, and why the tests were green',
    'chain.practice': 'Change to the way of working',

    'cases.desc': 'Living case studies — a documented way of working, per project.',
    'cases.h1': 'Case Studies',
    'cases.intro':
      'Each case study follows the same red thread: problem → analysis → modelling → implementation → reflection.',
    'cases.empty': 'No case studies yet.',
    'cases.back': '← Case Studies',
    'cases.openDemo': 'Open demo →',

    'case.stakeholders': 'Stakeholders',
    'case.influence': 'influence:',
    'case.interests': 'Interests:',
    'case.heldBy': 'Held by:',
    'case.aiSupport': 'AI support:',
    'case.madeWith': 'made with',
    'case.aiContribution': 'AI contribution:',
    'case.storiesTrace': 'User Stories & Traceability',
    'case.asA': 'As',
    'case.iWant': 'I want',
    'case.soThat': 'so that',
    'case.requirement': 'Traceability:',
    'case.process': 'Process:',
    'case.decisions': 'Decisions:',
    'case.acceptance': 'Acceptance criteria',
    'case.adr': 'Architecture Decisions (ADR)',
    'adr.supersedes': 'Supersedes',
    'adr.context': 'Context',
    'adr.decision': 'Decision',
    'adr.consequences': 'Consequences',

    'how.desc': 'The AI-assisted RE/BA workflow — practical, with real tools and MCP.',
    'how.h1': 'How I Work',
    'how.intro':
      "The point isn't that I use AI — almost everyone does now. It's how: this is what a requirements-engineering workflow looks like when every step still runs through human judgement.",
    'how.mcp': 'Workflow (from a domain perspective)',
    'how.mcp.code': `flowchart TD
  N[Workshop notes] --> L1[LLM drafts glossary]
  L1 --> RV{Human review}
  RV -- ok --> L2[LLM proposes user stories]
  RV -- needs refinement --> L1
  L2 --> RV2{Human review}
  RV2 -- ok --> JI[User stories]
  RV2 -- needs refinement --> L2
  JI --> L3[LLM checks consistency between glossary and stories]
  L3 --> RV3{Human review}
  RV3 -- ok --> DEV["Development (incl. automated tests)"]
  RV3 -- needs refinement --> L3
  RV3 -- glossary or stories wrong --> L1
  DEV --> RV4{AI review}
  RV4 -- ok --> MT{Manual tests}
  RV4 -- needs refinement --> DEV
  MT -- ok --> ST{Stakeholder tests}
  MT -- needs refinement --> DEV
  ST -- ok --> DONE[Increment done]
  ST -- needs refinement --> N`,
    'how.steps': 'Steps',
    'how.empty': 'No steps documented yet.',
    'how.tools': 'Tools:',
    'how.ungrouped': 'Not yet assigned to an iteration',

    'case.source': 'Working doc at this version',
    'iter.h2': 'Iterations',
    'iter.nav': 'Iterations of this case study',
    'iter.overview': 'Overview',
    'iter.current': 'current',
    'iter.level': 'Level',
    'iter.blocks': 'Blocks:',
    'iter.processChanges': 'What changed in how I work',
    'iter.sameProcessAs': 'Unchanged from the previous iteration — this level shipped under the way of working established in',
    'iter.corrects': 'Corrects an earlier iteration',
    'iter.lessons': 'Lessons',
    'iter.introduced': 'Introduced in this iteration',
    'iter.introducedEmpty': 'No artifacts assigned to this iteration yet.',
    'iter.requirements': 'Requirements',
    'iter.stories': 'User stories',
    'iter.diagrams': 'Diagrams',
    'iter.adr': 'Architecture decisions',
    'iter.workflow': 'Workflow steps',
    'iter.source': 'Release tag in the project repo',
    // Singular forms, for the counts in the contents list ("1 diagram", not "1 Diagrams").
    'iter.story.one': 'User story',
    'iter.diagram.one': 'Diagram',
    'iter.adr.one': 'Architecture decision',
    'topic.unassigned': 'Artifacts',
    'topic.unassignedIntro':
      'What this level introduced that belongs to no single domain topic — the solution structure, the way of working.',
    'topic.requirements': 'Requirements:',
    'topic.glossary': 'Domain terms',
    'topic.technical': 'technical — no domain term',
    'topic.nextLevel': 'This topic in',

    'trace.desc': 'Traceability from requirement to implementation.',
    'trace.h1': 'Traceability',
    'trace.intro':
      'From requirement to implementation — computed automatically from the links. Requirements without a linked story are coverage gaps.',
    'trace.th.req': 'Requirement',
    'trace.th.case': 'Case',
    'trace.th.stories': 'User Stories',
    // MoSCoW is assigned per story in the acceptance checklist, so the tag sits on the
    // story line. A story delivered outside a MoSCoW heading carries no tier and no tag.
    'trace.priority.must': 'Must',
    'trace.priority.should': 'Should',
    'trace.priority.could': 'Could',
    'trace.th.status': 'Status',
    'trace.noStory': '⚠ no story',
    'trace.filter': 'Level:',
    'trace.filter.all': 'All',
    'trace.filterEmpty': 'No requirement has a story in this level.',
    'trace.empty': 'No requirements captured yet.',

    'journal.desc':
      'A running log of decisions, dead-ends and what the AI actually contributed — kept while working, not polished after the fact.',
    'journal.h1': 'Journal',
    'journal.intro':
      'A working log — decisions, dead-ends and what the AI actually contributed, written down as I go rather than polished into essays afterwards.',
    'journal.empty': 'No entries yet.',
    'journal.filter': 'Filter by tag',
    'journal.allTags': 'all',
    'journal.group.domain': 'Domain',
    'journal.group.code': 'Code',
    'journal.group.ai': 'AI & way of working',
    'journal.group.other': 'Other',
    'journal.taggedWith': 'Tagged',
    'journal.entry': 'entry',
    'journal.entries': 'entries',

    'about.title': 'About',
    'about.desc':
      'From software engineer to AI-assisted requirements engineer / technical business analyst.',
    'about.h1': 'About',
    'about.p1':
      "Good solutions don't happen by chance. They emerge when the real problem is understood — technically, in terms of the domain, and from the perspective of the people who work with it. It is exactly this path, from the first understanding to a viable solution, that fascinates me.",
    'about.p2':
      'I love understanding complex relationships, bringing different perspectives together, and letting a shared picture emerge from many individual pieces.',
    'about.p3':
      'This website documents exactly that process — not as a collection of perfect projects, but as an open working journal of my learning path, including wrong turns, new insights, and the question of how good solutions grow out of understanding.',
    'about.p4':
      'Professionally, I have worked as a software engineer for over eleven years. My focus is increasingly moving towards requirements engineering, because that is where I rediscover the very things that have driven me since the start of my career: understanding problems, connecting people, and structuring complexity.',
    // The goal, in the owner's words: the role is what they are heading for, not a title claimed.
    'about.goal':
      "I want to get into the real questions users face — to understand them, so I can find ways to make their everyday challenges easier. That is what I am looking for in requirements engineering.",
    'about.cert': 'Certified: IREB CPRE Foundation Level, February 2026 —',
    'about.certVerify': 'verify the certificate',
    'about.contact': 'Contact',

    'og.imageAlt':
      'Understanding Before Solving — a tangled thread that resolves into an ordered line of steps.',
    'impressum.desc': 'Legal notice under § 5 DDG: who runs this site and how to reach them.',
    'datenschutz.desc': 'Privacy notice: what this site stores, and what it does not.',
  },
  de: {
    'nav.home': 'Start',
    'nav.cases': 'Fallstudien',
    'nav.cases.only': 'Fallstudie — GaLaBau',
    'nav.how': 'Arbeitsweise',
    'nav.trace': 'Nachvollziehbarkeit',
    'nav.journal': 'Journal',
    'nav.about': 'Über mich',
    'lang.switch': 'English',
    'lang.switch.aria': 'Show in English',
    'site.title': 'Verstehen kommt vor Lösen',
    'site.subtitle':
      'Softwareentwicklung · Requirements Engineering · AI-driven Development',
    'footer': 'Komplexität ist mein Dopamin',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.rights': 'Gebaut mit Neugier und Markdown.',

    'home.desc':
      'Die sichtbare Dokumentation einer KI-gestützten Arbeitsweise im Requirements Engineering.',
    'home.h1': 'Der Prozess ist das Portfolio — nicht das Ergebnis.',
    'home.p1':
      'Diese Seite ist kein Lebenslauf und keine Sammlung fertiger Projekte. Sie zeigt den Weg dorthin: wie aus einem fachlichen Problem Schritt für Schritt ein tragfähiges Softwaresystem wird — KI-gestützt, aber jede Entscheidung mit menschlichem Urteil. Gerade weil Umsetzung mit KI schneller wird, entscheidet nicht das Werkzeug über eine gute Lösung, sondern ob das eigentliche Problem verstanden wurde.',
    'home.p2':
      'An jeder Station wird beides sichtbar: das Ergebnis und der Weg dahin. Zu jedem Artefakt gehört die Begründung — warum habe ich mich so entschieden? — und der offengelegte KI-Anteil: Was hat die KI vorgeschlagen, und was habe ich davon übernommen, geändert oder verworfen?',
    'home.redThread': 'Der rote Faden',
    'home.gate':
      'Am Readiness-Gate teilt sich die Arbeit nach Zuständigkeit. Ist eine Story unklar oder nicht testbar, beheben die KI und ich das. Wirft sie eine Frage auf, die kein Dokument beantwortet, geht sie zurück an den Kunden. Diese Art Frage darf die KI nicht beantworten.',
    'thread.caption': 'KI-gestützt an jeder Station. Eine menschliche Entscheidung an jedem Gate.',
    'thread.gateWord': 'Gate, hier entscheidet ein Mensch',
    'thread.problem': 'Problem',
    'thread.stakeholders': 'Stakeholder',
    'thread.workshop': 'Workshop',
    'thread.glossary': 'Glossar',
    'thread.glossary.sub': 'die Begriffe des Kunden, mit jeder Story abgeglichen',
    'thread.requirements': 'Anforderungen',
    'thread.requirements.sub': 'mit Domänenmodell und BPMN',
    'thread.stories': 'User Stories',
    'thread.gate': 'Readiness-Gate',
    'thread.gate.formal': 'Formaler Mangel (mehrdeutig, nicht testbar, Begriff fehlt) → zurück zu den Anforderungen',
    'thread.gate.question': 'Fachliche Frage → zurück in den Workshop. Die KI beantwortet sie nie.',
    'thread.architecture': 'Architektur',
    'thread.architecture.sub': 'Entscheidungsdokumente (ADR)',
    'thread.code': 'Code + Tests',
    'thread.code.sub': 'Tests zuerst',
    'thread.walk': 'Testdurchgang',
    'thread.walk.sub': 'ich öffne die laufende Anwendung, bevor der nächste Block beginnt',
    'thread.walk.finding': 'Befund → im selben Level behoben, nicht auf ein späteres verschoben',
    'thread.retro': 'Retrospektive',
    'thread.retro.next': 'Was sie ändert, fließt in die nächste Iteration, zurück bei den Stakeholdern',

    'fig.label': 'Kennzahlen',
    'fig.levels': 'Level geliefert',
    'fig.levels.x': 'Ein Level ist eine Ausbaustufe der Anwendung, getestet und vom Kunden abgenommen.',
    'fig.iterations': 'Iterationen veröffentlicht',
    'fig.iterations.x': 'Eine Iteration ist ein veröffentlichter Arbeitsstand, eingefroren, sobald er online ist.',
    'fig.requirements': 'Anforderungen',
    'fig.requirements.x': 'Was der Betrieb braucht, in seinen eigenen Worten.',
    'fig.stories': 'User Stories',
    'fig.stories.x': 'Anforderungen, so zerlegt, dass jedes Stück baubar und prüfbar ist.',
    'fig.criteria': 'Akzeptanzkriterien',
    'fig.criteria.x': 'Prüfbare Bedingungen, jede einzelne geprüft, bevor eine Story als fertig gilt.',
    'fig.adr': 'Entscheidungsdokumente',
    'fig.adr.x': 'ADRs: die größeren Entwurfsentscheidungen, jede mit ihrer Begründung.',
    'fig.diagrams': 'Diagramme',
    'fig.diagrams.x': 'Prozesse (BPMN) und Lebenszyklen, gezeichnet, bevor sie gebaut wurden.',

    'walk.h2': 'Was die Testdurchläufe fanden',
    'walk.journal': 'Der Durchgang selbst:',
    'walk.fixes': 'Jeder Befund, als eigene Story behoben in',
    'walk.changes': 'korrigiert',
    'walk.followChain': 'Diesen Befund durch die ganze Kette verfolgen ↓',
    'walk.practice': 'Was sich an der Arbeitsweise geändert hat:',
    'walk.corrects': 'Gefunden beim Durchgang durch',

    'chain.h2': 'Ein Fehler, durch die ganze Kette verfolgt',
    'chain.intro': 'Jede Zeile ist ein Artefakt dieser Website, verknüpft über die Referenzen, die es trägt. Nichts in dieser Kette wurde für sie geschrieben.',
    'chain.requirement': 'Anforderung',
    'chain.story': 'User Story',
    'chain.adr': 'Entscheidungsdokument',
    'chain.walk': 'Testdurchgang · Mensch',
    'chain.fix': 'Die Korrektur, und warum die Tests grün waren',
    'chain.practice': 'Änderung der Arbeitsweise',

    'cases.desc': 'Lebendige Fallstudien — eine dokumentierte Arbeitsweise, pro Projekt.',
    'cases.h1': 'Fallstudien',
    'cases.intro':
      'Jede Fallstudie folgt demselben roten Faden: Problem → Analyse → Modellierung → Umsetzung → Reflexion.',
    'cases.empty': 'Noch keine Fallstudien.',
    'cases.back': '← Fallstudien',
    'cases.openDemo': 'Demo öffnen →',

    'case.stakeholders': 'Stakeholder',
    'case.influence': 'Einfluss:',
    'case.interests': 'Interessen:',
    'case.heldBy': 'Besetzt durch:',
    'case.aiSupport': 'KI-Unterstützung:',
    'case.madeWith': 'erstellt mit',
    'case.aiContribution': 'KI-Anteil:',
    'case.storiesTrace': 'User Stories & Nachvollziehbarkeit',
    'case.asA': 'Als',
    'case.iWant': 'möchte ich',
    'case.soThat': 'damit',
    'case.requirement': 'Nachvollziehbarkeit:',
    'case.process': 'Prozess:',
    'case.decisions': 'Entscheidungen:',
    'case.acceptance': 'Akzeptanzkriterien',
    'case.adr': 'Architekturentscheidungen (ADR)',
    'adr.supersedes': 'Ersetzt',
    'adr.context': 'Kontext',
    'adr.decision': 'Entscheidung',
    'adr.consequences': 'Konsequenzen',

    'how.desc': 'Der KI-gestützte RE/BA-Workflow — praxisnah, mit echten Tools und MCP.',
    'how.h1': 'Arbeitsweise',
    'how.intro':
      'Der Unterschied liegt nicht darin, dass ich KI nutze — das tun inzwischen fast alle. Er liegt im Wie: So sieht ein Requirements-Engineering-Workflow aus, wenn jeder Schritt durch menschliches Urteil geht.',
    'how.mcp': 'Workflow (aus fachlicher Sicht)',
    'how.mcp.code': `flowchart TD
  N[Workshop-Notizen] --> L1[LLM entwirft das Glossar]
  L1 --> RV{Menschliche Prüfung}
  RV -- ok --> L2[LLM schlägt User Stories vor]
  RV -- nachschärfen --> L1
  L2 --> RV2{Menschliche Prüfung}
  RV2 -- ok --> JI[User Stories]
  RV2 -- nachschärfen --> L2
  JI --> L3[LLM prüft Glossar und Stories auf Widersprüche]
  L3 --> RV3{Menschliche Prüfung}
  RV3 -- ok --> DEV["Entwicklung (inkl. automatisierter Tests)"]
  RV3 -- nachschärfen --> L3
  RV3 -- Glossar oder Stories falsch --> L1
  DEV --> RV4{KI-Review}
  RV4 -- ok --> MT{Manuelle Tests}
  RV4 -- nachschärfen --> DEV
  MT -- ok --> ST{Stakeholder-Tests}
  MT -- nachschärfen --> DEV
  ST -- ok --> DONE[Inkrement fertig]
  ST -- nachschärfen --> N`,
    'how.steps': 'Schritte',
    'how.empty': 'Noch keine Schritte dokumentiert.',
    'how.tools': 'Tools:',
    'how.ungrouped': 'Noch keiner Iteration zugeordnet',

    'case.source': 'Arbeitsdokument in dieser Version',
    'iter.h2': 'Iterationen',
    'iter.nav': 'Iterationen dieser Fallstudie',
    'iter.overview': 'Übersicht',
    'iter.current': 'aktuell',
    'iter.level': 'Level',
    'iter.blocks': 'Blöcke:',
    'iter.processChanges': 'Was sich an meiner Arbeitsweise geändert hat',
    'iter.sameProcessAs': 'Unverändert gegenüber der vorherigen Iteration — dieses Level entstand unter der Arbeitsweise aus',
    'iter.corrects': 'Korrigiert eine frühere Iteration',
    'iter.lessons': 'Erkenntnisse',
    'iter.introduced': 'In dieser Iteration eingeführt',
    'iter.introducedEmpty': 'Dieser Iteration sind noch keine Artefakte zugeordnet.',
    'iter.requirements': 'Anforderungen',
    'iter.stories': 'User Stories',
    'iter.diagrams': 'Diagramme',
    'iter.adr': 'Architekturentscheidungen',
    'iter.workflow': 'Workflow-Schritte',
    'iter.source': 'Release-Tag im Projekt-Repository',
    'iter.story.one': 'User Story',
    'iter.diagram.one': 'Diagramm',
    'iter.adr.one': 'Architekturentscheidung',
    'topic.unassigned': 'Artefakte',
    'topic.unassignedIntro':
      'Was dieses Level eingeführt hat und zu keinem einzelnen Fachthema gehört — die Lösungsstruktur, die Arbeitsweise.',
    'topic.requirements': 'Anforderungen:',
    'topic.glossary': 'Fachbegriffe',
    'topic.technical': 'technisch — kein Fachbegriff',
    'topic.nextLevel': 'Dieses Thema in',

    'trace.desc': 'Nachvollziehbarkeit von der Anforderung bis zur Umsetzung.',
    'trace.h1': 'Nachvollziehbarkeit',
    'trace.intro':
      'Von der Anforderung bis zur Umsetzung — automatisch aus den Verknüpfungen berechnet. Anforderungen ohne verknüpfte Story sind Abdeckungslücken.',
    'trace.th.req': 'Anforderung',
    'trace.th.case': 'Fall',
    'trace.th.stories': 'User Stories',
    'trace.priority.must': 'Muss',
    'trace.priority.should': 'Soll',
    'trace.priority.could': 'Kann',
    'trace.th.status': 'Status',
    'trace.noStory': '⚠ keine Story',
    'trace.filter': 'Level:',
    'trace.filter.all': 'Alle',
    'trace.filterEmpty': 'Keine Anforderung hat eine Story in diesem Level.',
    'trace.empty': 'Noch keine Anforderungen erfasst.',

    'journal.desc':
      'Ein laufendes Protokoll von Entscheidungen, Sackgassen und dem tatsächlichen KI-Anteil — während der Arbeit festgehalten, nicht nachträglich poliert.',
    'journal.h1': 'Journal',
    'journal.intro':
      'Ein Arbeitsprotokoll — Entscheidungen, Sackgassen und der tatsächliche KI-Anteil, direkt beim Arbeiten notiert statt nachträglich zu Essays poliert.',
    'journal.empty': 'Noch keine Einträge.',
    'journal.filter': 'Nach Tag filtern',
    'journal.allTags': 'alle',
    'journal.group.domain': 'Fachdomäne',
    'journal.group.code': 'Code',
    'journal.group.ai': 'KI & Arbeitsweise',
    'journal.group.other': 'Sonstiges',
    'journal.taggedWith': 'Getaggt mit',
    'journal.entry': 'Eintrag',
    'journal.entries': 'Einträge',

    'about.title': 'Über mich',
    'about.desc':
      'Vom Software-Engineering zur KI-gestützten Rolle als Requirements Engineer / Technical Business Analyst.',
    'about.h1': 'Über mich',
    'about.p1':
      'Gute Lösungen entstehen nicht zufällig. Sie entstehen, wenn das eigentliche Problem verstanden wird — fachlich, technisch und aus Sicht der Menschen, die damit arbeiten. Genau dieser Weg vom ersten Verständnis bis zur tragfähigen Lösung fasziniert mich.',
    'about.p2':
      'Ich liebe es, komplexe Zusammenhänge zu verstehen, unterschiedliche Perspektiven zusammenzubringen und aus vielen Einzelteilen ein gemeinsames Bild entstehen zu lassen.',
    'about.p3':
      'Diese Website dokumentiert genau diesen Prozess. Nicht als Sammlung perfekter Projekte, sondern als offenes Arbeitsjournal meines Lernwegs — inklusive Irrwegen, neuen Erkenntnissen und der Frage, wie aus Verständnis gute Lösungen entstehen.',
    'about.p4':
      'Beruflich arbeite ich seit über elf Jahren als Software Engineer. Mein Schwerpunkt entwickelt sich zunehmend in Richtung Requirements Engineering, weil ich dort genau die Themen wiederfinde, die mich seit Beginn meiner Laufbahn antreiben: Probleme verstehen, Menschen verbinden und Komplexität strukturieren.',
    'about.goal':
      'Ich möchte in die echten Fragestellungen der Anwender rein gehen. Sie verstehen, um Möglichkeiten zu finden, die ihnen ihre Herausforderungen im Alltag erleichtern. Das ist, was ich im Requirements Engineering suche.',
    'about.cert': 'Zertifiziert: IREB CPRE Foundation Level, Februar 2026 —',
    'about.certVerify': 'Zertifikat prüfen',
    'about.contact': 'Kontakt',

    'og.imageAlt':
      'Verstehen kommt vor Lösen — ein verknoteter Faden, der sich zu einer geordneten Folge von Schritten auflöst.',
    'impressum.desc': 'Anbieterkennzeichnung nach § 5 DDG: wer diese Seite betreibt und wie man sie erreicht.',
    'datenschutz.desc': 'Datenschutzhinweis: was diese Seite speichert — und was nicht.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

/** Returns a `t(key)` function bound to the given locale, with fallback. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Read a locale-keyed content field. Accepts `{ en, de }` objects (the normal
 * case), plain strings (language-neutral values), arrays of either, or
 * undefined. Falls back to the default locale when a translation is missing.
 */
export function localize<T = string>(field: unknown, lang: Lang): T | undefined {
  if (field == null) return undefined;
  if (typeof field === 'object' && !Array.isArray(field)) {
    const rec = field as Record<string, unknown>;
    if ('en' in rec || 'de' in rec) {
      return (rec[lang] ?? rec[defaultLang]) as T;
    }
  }
  return field as T;
}

/** Build the equivalent path in the other locale (for the language switch). */
export function alternatePath(pathname: string, lang: Lang): string {
  const other: Lang = lang === 'en' ? 'de' : 'en';
  const rest = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  return `/${other}${rest || '/'}`;
}
