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

/**
 * Resolve an artifact's `codeUrl` into something linkable.
 *
 * A repo-relative path is the preferred form: it can be written before the project repo
 * is reachable, and it resolves against the case study's `repoUrl` **pinned to the tag of
 * the iteration that published the artifact**. So the immutability rule holds by
 * construction rather than by convention — an L1 story keeps pointing at 0.1.0 code even
 * after 0.2.0 ships, without anyone typing a tag or editing a published file.
 *
 * Returns undefined when it cannot be resolved (no repoUrl yet, or no iteration to take a
 * tag from). Callers render the raw path instead of a dead link.
 */
export function resolveCodeUrl(
  codeUrl: string | undefined,
  repoUrl: string | undefined,
  tag: string | undefined,
): string | undefined {
  if (!codeUrl) return undefined;
  if (/^https?:\/\//i.test(codeUrl)) return codeUrl; // full URL: outside the project repo
  if (!repoUrl || !tag) return undefined;
  const base = repoUrl.replace(/\/+$/, '');
  const path = codeUrl.replace(/^\/+/, '');
  return `${base}/blob/${tag}/${path}`;
}
