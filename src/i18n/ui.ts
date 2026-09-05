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
export const defaultLang: Lang = 'en';
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
      'An open working journal on insights from software development, requirements engineering, and the path to a solution.',
    'footer': 'Complexity is my dopamine.',
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
    'case.madeWith': 'made with',
    'case.aiContribution': 'AI contribution:',
    'case.storiesTrace': 'User Stories & Traceability',
    'case.asA': 'As',
    'case.iWant': 'I want',
    'case.soThat': 'so that',
    'case.requirement': 'Requirement:',
    'case.process': 'Process:',
    'case.decisions': 'Decisions:',
    'case.code': 'Code:',
    'case.github': 'GitHub',
    'case.acceptance': 'Acceptance criteria',
    'case.adr': 'Architecture Decisions (ADR)',
    'adr.supersedes': 'Supersedes',

    'how.desc': 'The AI-assisted RE/BA workflow — practical, with real tools and MCP.',
    'how.h1': 'How I Work',
    'how.intro':
      "The point isn't that I use AI — almost everyone does now. It's how: this is what a requirements-engineering workflow looks like when every step still runs through human judgement.",
    'how.mcp': 'Workflow (from a domain perspective)',
    'how.steps': 'Steps',
    'how.empty': 'No steps documented yet.',
    'how.tools': 'Tools:',
    'how.ungrouped': 'Not yet assigned to an iteration',

    'case.source': 'Working doc at this version',
    'case.repoPrivate': 'The project repository is not public, so the code paths below are shown as paths rather than links. Repository visibility is the client\u2019s decision, not this site\u2019s; the paths stay exact and verifiable either way.',
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
    'topic.unassigned': 'Not tied to one topic',
    'topic.requirements': 'Requirements:',
    'topic.glossary': 'Domain terms',
    'topic.technical': 'technical — no domain term',

    'trace.desc': 'Traceability from requirement to implementation.',
    'trace.h1': 'Traceability Explorer',
    'trace.intro':
      'From requirement to implementation — computed automatically from the links. Requirements without a linked story are coverage gaps.',
    'trace.th.req': 'Requirement',
    'trace.th.case': 'Case',
    'trace.th.priority': 'Priority',
    'trace.th.stories': 'User Stories',
    'trace.th.status': 'Status',
    'trace.noStory': '⚠ no story',
    'trace.empty': 'No requirements captured yet.',

    'journal.desc':
      'A running log of decisions, dead-ends and what the AI actually contributed — kept while working, not polished after the fact.',
    'journal.h1': 'Journal',
    'journal.intro':
      'A working log — decisions, dead-ends and what the AI actually contributed, written down as I go rather than polished into essays afterwards.',
    'journal.empty': 'No entries yet.',
    'journal.back': '← Journal',
    'journal.filter': 'Filter by tag',
    'journal.allTags': 'all',
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
    'about.contact': 'Contact',

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
      'Ein offenes Arbeitsjournal über Erkenntnisse aus Softwareentwicklung, Requirements Engineering und dem Weg zur Lösung.',
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
    'case.madeWith': 'erstellt mit',
    'case.aiContribution': 'KI-Anteil:',
    'case.storiesTrace': 'User Stories & Nachvollziehbarkeit',
    'case.asA': 'Als',
    'case.iWant': 'möchte ich',
    'case.soThat': 'damit',
    'case.requirement': 'Anforderung:',
    'case.process': 'Prozess:',
    'case.decisions': 'Entscheidungen:',
    'case.code': 'Code:',
    'case.github': 'GitHub',
    'case.acceptance': 'Akzeptanzkriterien',
    'case.adr': 'Architekturentscheidungen (ADR)',
    'adr.supersedes': 'Ersetzt',

    'how.desc': 'Der KI-gestützte RE/BA-Workflow — praxisnah, mit echten Tools und MCP.',
    'how.h1': 'Arbeitsweise',
    'how.intro':
      'Der Unterschied liegt nicht darin, dass ich KI nutze — das tun inzwischen fast alle. Er liegt im Wie: So sieht ein Requirements-Engineering-Workflow aus, wenn jeder Schritt durch menschliches Urteil geht.',
    'how.mcp': 'Workflow (aus fachlicher Sicht)',
    'how.steps': 'Schritte',
    'how.empty': 'Noch keine Schritte dokumentiert.',
    'how.tools': 'Tools:',
    'how.ungrouped': 'Noch keiner Iteration zugeordnet',

    'case.source': 'Arbeitsdokument in dieser Version',
    'case.repoPrivate': 'Das Projekt-Repository ist nicht \u00f6ffentlich, deshalb stehen die Code-Pfade unten als Pfade statt als Links. Die Sichtbarkeit des Repositorys entscheidet der Kunde, nicht diese Seite; die Pfade bleiben so oder so exakt und nachpr\u00fcfbar.',
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
    'topic.unassigned': 'Keinem Thema zugeordnet',
    'topic.requirements': 'Anforderungen:',
    'topic.glossary': 'Fachbegriffe',
    'topic.technical': 'technisch — kein Fachbegriff',

    'trace.desc': 'Nachvollziehbarkeit von der Anforderung bis zur Umsetzung.',
    'trace.h1': 'Nachvollziehbarkeit',
    'trace.intro':
      'Von der Anforderung bis zur Umsetzung — automatisch aus den Verknüpfungen berechnet. Anforderungen ohne verknüpfte Story sind Abdeckungslücken.',
    'trace.th.req': 'Anforderung',
    'trace.th.case': 'Fall',
    'trace.th.priority': 'Priorität',
    'trace.th.stories': 'User Stories',
    'trace.th.status': 'Status',
    'trace.noStory': '⚠ keine Story',
    'trace.empty': 'Noch keine Anforderungen erfasst.',

    'journal.desc':
      'Ein laufendes Protokoll von Entscheidungen, Sackgassen und dem tatsächlichen KI-Anteil — während der Arbeit festgehalten, nicht nachträglich poliert.',
    'journal.h1': 'Journal',
    'journal.intro':
      'Ein Arbeitsprotokoll — Entscheidungen, Sackgassen und der tatsächliche KI-Anteil, direkt beim Arbeiten notiert statt nachträglich zu Essays poliert.',
    'journal.empty': 'Noch keine Einträge.',
    'journal.back': '← Journal',
    'journal.filter': 'Nach Tag filtern',
    'journal.allTags': 'alle',
    'journal.taggedWith': 'Getaggt mit',
    'journal.entry': 'Eintrag',
    'journal.entries': 'Einträge',

    'about.title': 'Über mich',
    'about.desc':
      'Vom Software-Engineering zur KI-gestützten Rolle als Requirements Engineer / Technical Business Analyst.',
    'about.h1': 'Über mich',
    'about.p1':
      'Gute Lösungen entstehen nicht zufällig. Sie entstehen, wenn das eigentliche Problem verstanden wird – fachlich, technisch und aus Sicht der Menschen, die damit arbeiten. Genau dieser Weg vom ersten Verständnis bis zur tragfähigen Lösung fasziniert mich.',
    'about.p2':
      'Ich liebe es, komplexe Zusammenhänge zu verstehen, unterschiedliche Perspektiven zusammenzubringen und aus vielen Einzelteilen ein gemeinsames Bild entstehen zu lassen.',
    'about.p3':
      'Diese Website dokumentiert genau diesen Prozess. Nicht als Sammlung perfekter Projekte, sondern als offenes Arbeitsjournal meines Lernwegs – inklusive Irrwegen, neuen Erkenntnissen und der Frage, wie aus Verständnis gute Lösungen entstehen.',
    'about.p4':
      'Beruflich arbeite ich seit über elf Jahren als Software Engineer. Mein Schwerpunkt entwickelt sich zunehmend in Richtung Requirements Engineering, weil ich dort genau die Themen wiederfinde, die mich seit Beginn meiner Laufbahn antreiben: Probleme verstehen, Menschen verbinden und Komplexität strukturieren.',
    'about.contact': 'Kontakt',

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
