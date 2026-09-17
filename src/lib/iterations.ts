import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Iteration helpers — the one place that knows how a published increment is located.
 *
 * Two rules from the publication plan are implemented here rather than in each page,
 * so a page cannot get them subtly wrong:
 *
 *  1. The CURRENT iteration is DERIVED (highest `order` within one case study), never
 *     read from a stored `status` field. Publishing a new iteration must not require
 *     editing the previous one.
 *  2. An artifact's PROJECT is derived through `introducedIn -> iteration -> case`.
 *     Only `workflow` has no `case` field of its own; deriving it keeps one source of
 *     truth instead of two that can disagree.
 *
 * Everything degrades gracefully while a project has no iterations yet: helpers return
 * undefined / empty rather than throwing, and callers fall back to the flat rendering.
 */

export type Iteration = CollectionEntry<'iterations'>;

/** Ascending by `order` — `re:check` guarantees uniqueness within a case study. */
export const byOrder = (a: Iteration, b: Iteration) => a.data.order - b.data.order;

/** All iterations of one case study, oldest first. */
export function iterationsOf(all: Iteration[], caseId: string): Iteration[] {
  return all.filter((i) => i.data.case.id === caseId).sort(byOrder);
}

/** The current iteration of a case study = the highest `order`. */
export function currentOf(all: Iteration[], caseId: string): Iteration | undefined {
  const list = iterationsOf(all, caseId);
  return list[list.length - 1];
}

/**
 * The URL segment that locates one iteration: `/en/case-studies/wurzel/<slug>`.
 *
 * Normally this is just the release tag — the tag IS the identity of a published
 * increment, and `/0.1.0` is the citable URL the publication plan promises.
 *
 * One release can ship more than one increment, though: wurzel's 0.3.0 contains
 * Implementation Levels 3 and 4, because Level 4 exists to resolve what Level 3's test
 * walk found, and both were tagged together. They are two iterations by every measure
 * the site cares about — two dates, two story sets, two statements of what changed in
 * how the work is done — so they get two pages, and the page needs a segment the tag
 * alone cannot give.
 *
 * The suffix is therefore DERIVED from the collision rather than stored: an iteration
 * whose version is unique within its case study keeps the bare tag forever, so no
 * already-published URL can be changed by a later release. Only the members of a shared
 * tag are disambiguated, and they are disambiguated by the vocabulary that made them
 * separate in the first place.
 *
 * Note the deliberate gap: when a tag is shared, the BARE tag has no page. That is
 * honest — `/0.3.0` would have to claim to be one of the two levels, and it is neither.
 */
export function iterationSlug(it: Iteration, all: Iteration[]): string {
  const sharingTag = all.filter(
    (o) => o.data.case.id === it.data.case.id && o.data.version === it.data.version,
  );
  if (sharingTag.length < 2) return it.data.version;
  const level = it.data.level;
  const suffix =
    typeof level === 'number' ? `level-${level}` : (level ?? `part-${it.data.order}`);
  return `${it.data.version}-${suffix}`;
}

/**
 * The release tag to show as a badge beside an iteration, or undefined for no badge.
 *
 * A tag marks a release, not a level, and one release can contain several levels. So the
 * badge belongs to the iteration whose completion the tag actually marks: the LAST one
 * sharing it. wurzel 0.3.0 shipped Levels 3 and 4, and Level 3 never had a release of its
 * own — it was finished, walked, corrected by Level 4 and tagged once, together. Level 4
 * therefore carries the 0.3.0 badge and Level 3 carries none, which is the honest reading:
 * there is no release you could point at that is Level 3 and not also Level 4.
 *
 * Derived from the collision, like `iterationSlug`, so an iteration alone under its tag
 * always shows it and nothing has to be maintained per level.
 */
export function releaseBadge(it: Iteration, all: Iteration[]): string | undefined {
  const sharingTag = all
    .filter((o) => o.data.case.id === it.data.case.id && o.data.version === it.data.version)
    .sort(byOrder);
  return sharingTag[sharingTag.length - 1]?.id === it.id ? it.data.version : undefined;
}

/**
 * The version to display for a case study. Derived from the current iteration;
 * falls back to the deprecated `case-studies.version` while a project has no
 * iterations, so nothing renders blank mid-migration.
 */
export function displayVersion(
  all: Iteration[],
  caseStudy: CollectionEntry<'case-studies'>,
): string {
  return currentOf(all, caseStudy.id)?.data.version ?? caseStudy.data.version;
}

/**
 * Group any versioned artifacts by the case study they belong to, resolved through
 * their iteration. Artifacts with no `introducedIn` land under `undefined` — they are
 * not dropped, because silently hiding content is worse than showing it ungrouped.
 */
export function groupByCase<T extends { data: { introducedIn?: { id: string } | undefined } }>(
  all: Iteration[],
  entries: T[],
): Map<string | undefined, T[]> {
  const caseOf = new Map(all.map((i) => [i.id, i.data.case.id]));
  const out = new Map<string | undefined, T[]>();
  for (const e of entries) {
    const iterationId = e.data.introducedIn?.id;
    const caseId = iterationId ? caseOf.get(iterationId) : undefined;
    if (!out.has(caseId)) out.set(caseId, []);
    out.get(caseId)!.push(e);
  }
  return out;
}

/** Convenience: load the collection once per page. */
export const allIterations = () => getCollection('iterations');

/** Artifacts introduced by one iteration, in id order. */
export function introducedIn<T extends { id: string; data: { introducedIn?: { id: string } | undefined } }>(
  entries: T[],
  iterationId: string,
): T[] {
  return entries
    .filter((e) => e.data.introducedIn?.id === iterationId)
    .sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Resolve a repo-relative path (`codeUrl`, or `source` pointing into the project's docs)
 * into something linkable.
 *
 * The relative form is preferred: it can be written before the project repo is reachable,
 * and it resolves against the case study's `repoUrl` **pinned to the tag of the iteration
 * that published the artifact**. So the immutability rule holds by construction rather
 * than by convention — an L1 story keeps pointing at 0.1.0 code even after 0.2.0 ships,
 * without anyone typing a tag or editing a published file.
 *
 * This is also what makes the project's *documentation* safe to reorganise. A `source`
 * recorded against 0.2.0 resolves into the repo AT 0.2.0, so later moving or renaming
 * that file cannot rot the citation — git still holds the old state under the tag, and
 * nothing has to be reverted to keep an older iteration honest.
 *
 * Returns undefined when it cannot be resolved (no repoUrl yet, or no iteration to take a
 * tag from). Callers render the raw path, or nothing, instead of a dead link.
 */
export function resolveRepoPath(
  path: string | undefined,
  repoUrl: string | undefined,
  tag: string | undefined,
): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path; // full URL: outside the project repo
  if (!repoUrl || !tag) return undefined;
  return `${repoUrl.replace(/\/+$/, '')}/blob/${tag}/${path.replace(/^\/+/, '')}`;
}

/**
 * Short human label for an iteration: "Level 1" when the project uses levels, the
 * version otherwise.
 *
 * `level` is wurzel's scheduling vocabulary and stays optional — the site's contract is
 * the release tag. Every place that shows an iteration in one word goes through here, so
 * a project that never sets `level` reads correctly without a second code path.
 *
 * `levelWord` is passed in (`t('iter.level')`) rather than looked up, to keep this module
 * free of the i18n layer.
 */
export function iterationLabel(it: Iteration, levelWord: string): string {
  return typeof it.data.level === 'number'
    ? `${levelWord} ${it.data.level}`
    : (it.data.level ?? `v${it.data.version}`);
}

/** @deprecated use resolveRepoPath — kept so the name reads right at the call site. */
export const resolveCodeUrl = resolveRepoPath;
