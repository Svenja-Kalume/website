// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { sitemapDates } from './scripts/sitemap-dates.mjs';
import rehypeAdrHeadings from './scripts/rehype-adr-headings.mjs';

// lastmod comes from the content's own dates (iteration and journal), not from file
// mtimes -- see scripts/sitemap-dates.mjs.
const lastmod = sitemapDates();

// The site is bilingual (English + German). Both locales are prefixed
// (/en/…, /de/…); the bare domain redirects to the default locale.
export default defineConfig({
  site: 'https://svenjakalume.de',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: true,
      // The bare domain "/" is handled by src/pages/index.astro (instant
      // redirect to /en/); we own that page rather than Astro's generated one.
      redirectToDefaultLocale: false,
    },
  },
  // An ADR's own headings are h2; embedded in a level page they belong two levels deeper.
  markdown: { rehypePlugins: [rehypeAdrHeadings] },
  integrations: [
    mdx(),
    sitemap({
      // Emits xhtml:link alternates per URL, so the two locales are indexed as one
      // cluster rather than as duplicates of each other.
      i18n: { defaultLocale: 'de', locales: { en: 'en', de: 'de' } },
      // The bare domain is a meta-refresh entry page that canonicalises to /en/;
      // listing it would offer a redirect as if it were content.
      filter: (page) => new URL(page).pathname !== '/',
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date.toISOString() } : item;
      },
    }),
  ],
});
