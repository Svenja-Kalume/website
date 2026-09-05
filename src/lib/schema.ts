/**
 * schema.org JSON-LD.
 *
 * Everything here is DERIVED from data the site already carries — title, summary,
 * date, breadcrumb labels. Nothing is asserted that is not already visible on the
 * page, so the structured data cannot drift from the prose it describes.
 *
 * Pages pass the result to `BaseLayout`'s `jsonLd` prop; `Breadcrumbs` emits its own,
 * because it is the component that knows the trail.
 */
import type { Lang } from '../i18n/ui';

export const SITE_URL = 'https://svenjakalume.dev';
export const SITE_OWNER = 'Svenja Kalume';

/** Absolute URL for a site-relative path — structured data may not use relative ones. */
export function absoluteUrl(path: string, site?: URL): string {
  return new URL(path, site ?? SITE_URL).href;
}

const author = { '@type': 'Person', name: SITE_OWNER } as const;

export function webSiteSchema(opts: {
  name: string;
  description?: string;
  url: string;
  lang: Lang;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: opts.name,
    url: opts.url,
    inLanguage: opts.lang,
    ...(opts.description ? { description: opts.description } : {}),
    author,
    publisher: author,
  };
}

export function blogPostingSchema(opts: {
  headline: string;
  description?: string;
  datePublished: Date;
  url: string;
  lang: Lang;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.headline,
    datePublished: opts.datePublished.toISOString().slice(0, 10),
    inLanguage: opts.lang,
    url: opts.url,
    mainEntityOfPage: opts.url,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
    author,
    publisher: author,
  };
}

/**
 * A case study or one of its published levels. `TechArticle` rather than `Article`:
 * these pages document a system and its reasoning, which is what the type is for.
 */
export function techArticleSchema(opts: {
  headline: string;
  description?: string;
  url: string;
  lang: Lang;
  datePublished?: Date;
  version?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.headline,
    inLanguage: opts.lang,
    url: opts.url,
    mainEntityOfPage: opts.url,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.datePublished
      ? { datePublished: opts.datePublished.toISOString().slice(0, 10) }
      : {}),
    ...(opts.version ? { version: opts.version } : {}),
    author,
    publisher: author,
  };
}

/**
 * The person behind the site, for /about.
 *
 * `jobTitle` states what is true today — eleven years of software engineering — rather
 * than the role the site is aimed at; a title that contradicts the prose beneath it is
 * worse than a modest one. The direction lives in `description`, and `knowsAbout` carries
 * the subject matter the site actually documents.
 */
const person = {
  en: {
    jobTitle: 'AI-assisted Software Engineer',
    description:
      'Software engineer of eleven years, moving into requirements engineering. This site documents that shift on a real project: requirements-first, AI-assisted, with a human decision at every step.',
    knowsAbout: [
      'Requirements engineering',
      'Business analysis',
      'BPMN',
      'Domain-driven design',
      'Architecture decision records',
      'Requirements traceability',
      'AI-assisted software development',
    ],
  },
  de: {
    jobTitle: 'KI-gestützte Software Engineerin',
    description:
      'Software Engineerin mit elf Jahren Erfahrung, auf dem Weg ins Requirements Engineering. Diese Seite dokumentiert diesen Weg an einem echten Projekt: anforderungsgetrieben, KI-gestützt, mit einer menschlichen Entscheidung an jedem Schritt.',
    knowsAbout: [
      'Requirements Engineering',
      'Business-Analyse',
      'BPMN',
      'Domain-Driven Design',
      'Architecture Decision Records',
      'Nachvollziehbarkeit von Anforderungen',
      'KI-gestützte Softwareentwicklung',
    ],
  },
} as const;

export function personSchema(lang: Lang, url: string) {
  const p = person[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    inLanguage: lang,
    url,
    mainEntity: {
      '@type': 'Person',
      name: SITE_OWNER,
      jobTitle: p.jobTitle,
      description: p.description,
      knowsAbout: [...p.knowsAbout],
      url,
    },
  };
}

export function breadcrumbSchema(items: { label: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}
