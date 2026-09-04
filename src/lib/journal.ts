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
