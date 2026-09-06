/**
 * llms.txt — the site in one plain-text file, for answer engines.
 *
 * Generated from the content collections and the UI dictionary, never hand-written:
 * a second, hand-maintained list of what the site contains is exactly the kind of
 * link list this project models as data instead.
 *
 * One locale only -- the default one, whatever it is set to: a bilingual dump would
 * double the file without adding a fact, and the other locale is reachable via hreflang.
 * Derived from `defaultLang`, so switching the site's default switches this file too.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ui, localize, defaultLang } from '../i18n/ui';
import { allIterations, iterationsOf } from '../lib/iterations';
import { SITE_URL } from '../lib/schema';

const t = ui[defaultLang];
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
    `# ${t['site.title']}`,
    '',
    `> ${t['home.desc']}`,
    '',
    t['home.p1'],
    '',
    '## Pages',
    line(t['nav.home'], `/${defaultLang}/`, t['home.desc']),
    line(t['nav.how'], `/${defaultLang}/how-i-work`, t['how.desc']),
    line(t['nav.trace'], `/${defaultLang}/traceability`, t['trace.desc']),
    line(t['nav.journal'], `/${defaultLang}/journal`, t['journal.desc']),
    line(t['nav.about'], `/${defaultLang}/about`, t['about.desc']),
    '',
    '## Case studies',
  ];

  for (const c of cases) {
    out.push(line(localize(c.data.title, defaultLang) ?? c.id, `/${defaultLang}/case-studies/${c.id}`, localize(c.data.summary, defaultLang)));
    for (const it of iterationsOf(iterations, c.id)) {
      out.push(
        `  ${line(
          `${localize(it.data.title, defaultLang) ?? it.id} (v${it.data.version}, ${it.data.date.toISOString().slice(0, 10)})`,
          `/${defaultLang}/case-studies/${c.id}/${it.data.version}`,
          localize(it.data.summary, defaultLang)
        )}`
      );
    }
  }

  out.push('', '## Journal');
  for (const e of journal) {
    out.push(
      line(
        `${e.data.date.toISOString().slice(0, 10)} — ${localize(e.data.title, defaultLang) ?? e.id}`,
        `/${defaultLang}/journal/${e.id}`,
        localize(e.data.summary, defaultLang)
      )
    );
  }

  out.push('');
  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
