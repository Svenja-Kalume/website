import type { CollectionEntry } from 'astro:content';

/**
 * Grouping a level's artifacts into domain sub-chapters (Customer, Project, Offer …).
 *
 * The topic files hold as little as possible: membership is DERIVED from links the
 * artifacts already carry, so grouping needs no new field on a published artifact.
 *
 *   story    → the topic owning its `requirement`
 *   diagram  → the topic of a story citing it as `bpmn`
 *   ADR      → the topic owning one of its `relatedRequirements`
 *
 * A topic's explicit `stories` / `diagrams` / `adr` lists win over the derived rule.
 * They exist for requirements that span entities — "find a customer or project" owns
 * stories belonging to two topics — and are written on the topic, never on the artifact.
 *
 * Whatever no topic claims lands under `unassigned`. Showing it ungrouped beats hiding it.
 */

export type Topic = CollectionEntry<'topics'>;
type Story = CollectionEntry<'user-stories'>;
type Diagram = CollectionEntry<'diagrams'>;
type Adr = CollectionEntry<'adr'>;

export interface TopicGroup {
  topic?: Topic;
  diagrams: Diagram[];
  stories: Story[];
  adrs: Adr[];
}

export const topicsOf = (all: Topic[], caseId: string): Topic[] =>
  all.filter((t) => t.data.case.id === caseId).sort((a, b) => a.data.order - b.data.order);

/**
 * Group the artifacts of ONE iteration by topic, in topic order, dropping topics this
 * iteration did not touch. `unassigned` holds what no topic claims — undefined when empty.
 *
 * `allStories` is the case study's full story set, not just this level's: a diagram
 * published at Level 1 can be cited by a story from any level, and that citation is what
 * tells us which topic the diagram belongs to.
 */
export function groupByTopic(
  topics: Topic[],
  artifacts: { diagrams: Diagram[]; stories: Story[]; adrs: Adr[] },
  allStories: Story[],
): { groups: TopicGroup[]; unassigned?: TopicGroup } {
  // requirement id → topic id, first topic in order wins a requirement claimed twice.
  const byRequirement = new Map<string, string>();
  for (const t of topics) {
    for (const r of t.data.requirements) if (!byRequirement.has(r.id)) byRequirement.set(r.id, t.id);
  }
  const explicit = (key: 'stories' | 'diagrams' | 'adr') => {
    const map = new Map<string, string>();
    for (const t of topics) for (const ref of t.data[key]) if (!map.has(ref.id)) map.set(ref.id, t.id);
    return map;
  };
  const explicitStories = explicit('stories');
  const explicitDiagrams = explicit('diagrams');
  const explicitAdrs = explicit('adr');

  const topicOfStory = (s: Story) =>
    explicitStories.get(s.id) ?? byRequirement.get(s.data.requirement.id);

  // A diagram inherits the topic of the first story (in id order) that cites it.
  const topicOfDiagramByStory = new Map<string, string>();
  for (const s of [...allStories].sort((a, b) => a.id.localeCompare(b.id))) {
    const id = s.data.bpmn?.id;
    const topic = topicOfStory(s);
    if (id && topic && !topicOfDiagramByStory.has(id)) topicOfDiagramByStory.set(id, topic);
  }

  const topicOf = {
    diagram: (d: Diagram) => explicitDiagrams.get(d.id) ?? topicOfDiagramByStory.get(d.id),
    story: topicOfStory,
    adr: (a: Adr) =>
      explicitAdrs.get(a.id) ??
      a.data.relatedRequirements.map((r) => byRequirement.get(r.id)).find(Boolean),
  };

  const empty = (): TopicGroup => ({ diagrams: [], stories: [], adrs: [] });
  const buckets = new Map<string, TopicGroup>(topics.map((t) => [t.id, { topic: t, ...empty() }]));
  const unassigned = empty();
  const put = (topicId: string | undefined, kind: keyof Omit<TopicGroup, 'topic'>, item: any) => {
    const bucket = (topicId && buckets.get(topicId)) || unassigned;
    (bucket[kind] as any[]).push(item);
  };

  for (const d of artifacts.diagrams) put(topicOf.diagram(d), 'diagrams', d);
  for (const s of artifacts.stories) put(topicOf.story(s), 'stories', s);
  for (const a of artifacts.adrs) put(topicOf.adr(a), 'adrs', a);

  const hasContent = (g: TopicGroup) => g.diagrams.length + g.stories.length + g.adrs.length > 0;
  return {
    groups: topics.map((t) => buckets.get(t.id)!).filter(hasContent),
    unassigned: hasContent(unassigned) ? unassigned : undefined,
  };
}
