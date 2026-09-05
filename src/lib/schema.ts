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
