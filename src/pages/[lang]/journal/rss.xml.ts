/**
 * RSS for the working log, one feed per locale: /en/journal/rss.xml
 *
 * Hand-rolled rather than pulled from a package: the feed is twenty lines of XML, and a
 * dependency that renders them would still need the same locale handling.
 *
 * The log is dated content that gains entries — the one part of this site a reader (or a
 * crawler) has reason to come back to. Everything comes from the journal collection.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { languages, ui, localize, toLang, type Lang } from '../../../i18n/ui';
import { journalEntries } from '../../../lib/journal';
import { SITE_URL } from '../../../lib/schema';

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(languages).map((lang) => ({ params: { lang } }));

/** XML text escaping — entry titles contain ampersands and quotes. */
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ params, site }) => {
  const lang: Lang = toLang(params.lang);
  const base = site ?? new URL(SITE_URL);
  const url = (path: string) => new URL(path, base).href;
  const entries = await journalEntries();

  const items = entries.map((e) => {
    const link = url(`/${lang}/journal/${e.id}/`);
    const summary = localize<string>(e.data.summary, lang);
    return `    <item>
      <title>${esc(localize<string>(e.data.title, lang) ?? e.id)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${e.data.date.toUTCString()}</pubDate>
${summary ? `      <description>${esc(summary)}</description>\n` : ''}    </item>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(ui[lang]['journal.h1'])} — ${esc(ui[lang]['site.title'])}</title>
    <link>${url(`/${lang}/journal/`)}</link>
    <description>${esc(ui[lang]['journal.desc'])}</description>
    <language>${lang}</language>
    <atom:link href="${url(`/${lang}/journal/rss.xml`)}" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
