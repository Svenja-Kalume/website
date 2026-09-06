import { getCollection, type CollectionEntry } from 'astro:content';

/** Published entries, newest first. Drafts never leave the working copy. */
export async function journalEntries(): Promise<CollectionEntry<'journal'>[]> {
  return (await getCollection('journal'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Every tag in use, with how many entries carry it — most used first, then alphabetical.
 * Counted from the entries rather than kept as a list, so a tag disappears from the
 * filter the moment its last entry does.
 */
export function tagCounts(entries: CollectionEntry<'journal'>[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const e of entries) for (const tag of e.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/**
 * Every tag combination that actually has entries — the powerset of each entry's own tags,
 * deduplicated. A combination exists as a page exactly when some entry carries all of it,
 * so the filter can be additive (AND) without generating a page that would come up empty.
 * With three tags per entry this stays a few dozen pages, not a combinatorial explosion.
 */
export function tagCombos(entries: CollectionEntry<'journal'>[]): string[][] {
  const seen = new Map<string, string[]>();
  for (const e of entries) {
    const tags = [...e.data.tags].sort();
    for (let mask = 1; mask < 1 << tags.length; mask++) {
      const combo = tags.filter((_, i) => mask & (1 << i));
      seen.set(combo.join('+'), combo);
    }
  }
  return [...seen.values()].sort((a, b) => a.length - b.length || a.join('+').localeCompare(b.join('+')));
}

/** Entries carrying *all* of the given tags. No tags means no filtering. */
export function filterByTags(entries: CollectionEntry<'journal'>[], tags: string[]) {
  return tags.length === 0 ? entries : entries.filter((e) => tags.every((tag) => e.data.tags.includes(tag)));
}

/** The URL of a selection. The empty selection is the unfiltered log, not a tag page. */
export function tagsHref(lang: string, tags: string[]): string {
  return tags.length === 0 ? `/${lang}/journal` : `/${lang}/journal/tags/${[...tags].sort().join('+')}`;
}

/** Adding a tag already selected removes it again, so every chip is a toggle. */
export function toggleTag(active: string[], tag: string): string[] {
  return active.includes(tag) ? active.filter((x) => x !== tag) : [...active, tag].sort();
}
