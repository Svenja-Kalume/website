// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The site is bilingual (English + German). Both locales are prefixed
// (/en/…, /de/…); the bare domain redirects to the default locale.
export default defineConfig({
  site: 'https://svenjakalume.dev',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // The bare domain "/" is handled by src/pages/index.astro (instant
      // redirect to /en/); we own that page rather than Astro's generated one.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [mdx(), sitemap()],
});
