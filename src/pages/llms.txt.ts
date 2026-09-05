/**
 * llms.txt — the site in one plain-text file, for answer engines.
 *
 * Generated from the content collections and the UI dictionary, never hand-written:
 * a second, hand-maintained list of what the site contains is exactly the kind of
 * link list this project models as data instead.
 *
 * English only. It is the default locale, and a bilingual dump would double the file
 * without adding a fact; the German pages are reachable via hreflang.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ui, localize } from '../i18n/ui';
import { allIterations, iterationsOf } from '../lib/iterations';
import { SITE_URL } from '../lib/schema';

const en = ui.en;
const url = (path: string) => new URL(path, SITE_URL).href;
const line = (label: string, path: string, note?: string) =>
  `- [${label}](${url(path)})${note ? `: ${note}` : ''}`;

export const GET: APIRoute = async () => {
  const cases = (await getCollection('case-studies')).sort((a, b) => a.data.order - b.data.order);
  const iterations = await allIterations();
  const journal = (await getCollection('journal')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const out: string[] = [
    `# ${en['site.title']}`,
    '',
    `> ${en['home.desc']}`,
    '',
    en['home.p1'],
    '',
    '## Pages',
    line(en['nav.home'], '/en/', en['home.desc']),
    line(en['nav.how'], '/en/how-i-work', en['how.desc']),
    line(en['nav.trace'], '/en/traceability', en['trace.desc']),
    line(en['nav.journal'], '/en/journal', en['journal.desc']),
    line(en['nav.about'], '/en/about', en['about.desc']),
    '',
    '## Case studies',
  ];

  for (const c of cases) {
    out.push(line(localize(c.data.title, 'en') ?? c.id, `/en/case-studies/${c.id}`, localize(c.data.summary, 'en')));
    for (const it of iterationsOf(iterations, c.id)) {
      out.push(
        `  ${line(
          `${localize(it.data.title, 'en') ?? it.id} (v${it.data.version}, ${it.data.date.toISOString().slice(0, 10)})`,
          `/en/case-studies/${c.id}/${it.data.version}`,
          localize(it.data.summary, 'en')
        )}`
      );
    }
  }

  out.push('', '## Journal');
  for (const e of journal) {
    out.push(
      line(
        `${e.data.date.toISOString().slice(0, 10)} — ${localize(e.data.title, 'en') ?? e.id}`,
        `/en/journal/${e.id}`,
        localize(e.data.summary, 'en')
      )
    );
  }

  out.push('');
  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
