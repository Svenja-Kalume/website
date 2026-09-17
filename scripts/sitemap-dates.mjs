/**
 * lastmod dates for the sitemap, read from the content itself.
 *
 * The date of an artifact is the date its ITERATION published — the site's own unit of
 * publication — not the day a file happened to be touched. That keeps lastmod stable
 * across rebuilds, independent of the deploy environment (no git history required), and
 * honest: a published level does not change, so its date does not move.
 *
 * Only dated pages get one. Index pages (home, about, traceability, tag listings) carry
 * no date rather than a guessed one; a wrong lastmod is worse than none.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const LOCALES = ['en', 'de'];

function read(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => ({ id: f.replace(/\.mdx?$/, ''), data: matter(readFileSync(join(dir, f), 'utf8')).data }));
}

const toDate = (v) => (v instanceof Date ? v : v ? new Date(v) : undefined);

/** Map of pathname -> Date, for every page whose date the content states. */
export function sitemapDates(contentDir = process.env.CONTENT_DIR ?? './src/content') {
  const dates = new Map();
  const set = (path, date) => {
    if (!date || Number.isNaN(date.valueOf())) return;
    const current = dates.get(path);
    if (!current || date > current) dates.set(path, date);
  };

  const projects = existsSync(contentDir)
    ? readdirSync(contentDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : [];

  // Every iteration of every project first: the URL of one of them depends on whether
  // another shares its release tag, so none can be resolved project by project. Mirrors
  // `iterationSlug` in src/lib/iterations.ts — one release can ship several iterations
  // (wurzel 0.3.0 = Levels 3 and 4), and then the level disambiguates the tag.
  const allIterations = projects.flatMap((project) =>
    read(join(contentDir, project, 'iterations')).map((it) => ({
      ...it,
      caseId: typeof it.data.case === 'string' ? it.data.case : it.data.case?.id,
    })),
  );
  const slugOf = (it) => {
    const sharingTag = allIterations.filter(
      (o) => o.caseId === it.caseId && o.data.version === it.data.version,
    );
    if (sharingTag.length < 2) return it.data.version;
    const level = it.data.level;
    return `${it.data.version}-${typeof level === 'number' ? `level-${level}` : (level ?? `part-${it.data.order}`)}`;
  };

  for (const it of allIterations) {
    const date = toDate(it.data.date);
    if (!it.caseId || !it.data.version) continue;
    for (const lang of LOCALES) {
      set(`/${lang}/case-studies/${it.caseId}/${slugOf(it)}/`, date);
      // The overview stands at its newest level, so it carries that level's date.
      set(`/${lang}/case-studies/${it.caseId}/`, date);
    }
  }

  for (const project of projects) {
    for (const entry of read(join(contentDir, project, 'journal'))) {
      const date = toDate(entry.data.date);
      for (const lang of LOCALES) set(`/${lang}/journal/${entry.id}/`, date);
    }
  }

  return dates;
}
