import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { isAbsolute } from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Traceability data model.
 *
 * Every artifact is a typed entry with a stable ID (= filename).
 * Links run EXCLUSIVELY through reference() fields in the frontmatter.
 * From these, the site computes back-links, overviews and the traceability
 * explorer -- nobody maintains link lists by hand.
 *
 * ID conventions: Requirements R-01, Epics EP-01, User Stories US-01, ADRs ADR-001.
 *
 * BILINGUAL CONTENT (English + German):
 *   IDs and reference() links stay LANGUAGE-NEUTRAL -- one file per artifact,
 *   referenced the same way regardless of locale. Only the human-readable prose
 *   is per-locale, expressed with the `loc` / `locArr` helpers below:
 *
 *     title:
 *       en: Book a machine slot
 *       de: Maschinenplatz buchen
 *
 *   The pages read these via `localize(field, lang)` from `src/i18n/ui.ts`.
 *   For a single-language draft you may still write a plain string; `localize`
 *   passes it through unchanged (it will show in both locales until translated).
 *
 * ITERATIONS (development over time):
 *   A published iteration is APPEND-ONLY. Publishing a new one must never require
 *   editing a file an earlier one published, so:
 *     - the change pointer lives on the NEWER artifact (`changes`, `supersedes`),
 *       never as `changedIn` / `supersededBy` on the older one;
 *     - the current iteration is DERIVED (highest `order` within a case study),
 *       never stored as a `status: current | superseded` field.
 *   Any field that would force an edit to a published artifact is a design bug.
 */

// A localized string: { en, de }. Both locales are required so the schema
// surfaces a missing translation at build time rather than silently.
const loc = z.object({ en: z.string(), de: z.string() });
// A localized list of strings.
const locArr = z.object({ en: z.array(z.string()), de: z.array(z.string()) });

// MULTI-PROJECT LAYOUT (one content folder per project).
//
// Each example project's content lives in its own folder at
//   src/content/<project>/
// and holds the collection folders at its root:
//   src/content/<project>/case-studies/  .../requirements/  .../user-stories/  ...
//
// A single collection therefore globs across EVERY project folder via the `*/` wildcard
// (one path segment = the project dir). Adding another project = add another folder;
// no code change here. See docs/separating-content.md.
//
// The content root is still configurable so the whole tree can be relocated:
//   CONTENT_DIR=../some-checkout npm run build
const CONTENT_ROOT = process.env.CONTENT_DIR ?? './src/content';
// Relative paths are resolved by Astro relative to the project root; absolute paths
// must be passed as a file:// URL (otherwise: "The URL must be of scheme file").
const resolveRoot = () =>
  isAbsolute(CONTENT_ROOT) ? pathToFileURL(CONTENT_ROOT.replace(/[\\/]?$/, '/')) : CONTENT_ROOT;
// IDs stay FLAT (= filename without extension) regardless of which project folder a file
// sits in, so reference() links keep working. IDs MUST therefore be unique across all
// projects -- prefix per project (e.g. WZ-US-01 for wurzel, XX-US-01 for the next).
const flatId = ({ entry }: { entry: string }) =>
  entry.split(/[\\/]/).pop()!.replace(/\.(mdx?|markdown)$/i, '');
const base = (dir: string) =>
  glob({ pattern: `*/${dir}/**/*.{md,mdx}`, base: resolveRoot(), generateId: flatId });

const caseStudies = defineCollection({
  loader: base('case-studies'),
  schema: z.object({
    title: loc,
    summary: loc,
    // Localized narrative shown on the case-study page (one entry per paragraph,
    // per locale). Preferred over the Markdown body so the intro is bilingual.
    intro: locArr.optional(),
    status: z.enum(['draft', 'in-progress', 'active', 'archived']).default('in-progress'),
    // DEPRECATED -- being retired by the `iterations` collection. The displayed version
    // must be DERIVED from the current iteration (highest `order`), otherwise publishing
    // a new iteration would mean editing this file, which the append-only rule forbids.
    // Kept until the pages read the iteration instead (stage 2 of the publication plan).
    version: z.string().default('0.1'),
    demoUrl: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

// Iterations: one published increment of a case study. The publication unit is the
// LEVEL (wurzel's vocabulary), not the block -- so the number of published versions
// stays small. Identity is the app-repo release tag.
//
// Append-only (see the header note): nothing here may require editing an earlier
// iteration's file, which is why there is no `status` and no `supersededBy`.
const iterations = defineCollection({
  loader: base('iterations'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    version: z.string(), // "0.2.0" -- the app-repo tag; the identity
    // Optional on purpose: `level` and `blocks` are wurzel's scheduling vocabulary
    // (Phase > Level > Block). The next project may use sprints, milestones or nothing.
    level: z.union([z.number().int(), z.literal('post-mvp')]).optional(),
    blocks: z.array(z.string()).default([]), // "1", "2a", ... as in the vault
    stageLabel: loc.optional(), // free label when a project has no level axis
    // Position within ONE case study. Unique per case study -- the current iteration
    // is derived as the highest `order`, so a tie would be ambiguous (re:check errors).
    order: z.number(),
    date: z.coerce.date(),
    summary: loc,
    intro: locArr.optional(),
    // What changed in HOW you work -- the headline of the whole iterations concept.
    processChanges: locArr.optional(),
    // A later iteration may correct an earlier one; never the reverse (re:check errors).
    corrects: z.array(reference('iterations')).default([]),
    lessons: locArr.optional(),
    sourceUrl: z.string().url().optional(),
    aiContribution: loc.optional(),
  }),
});

// Fields shared by every versioned artifact.
//   introducedIn -- the iteration that first published this artifact.
//   source       -- the vault file this artifact cites (a path, not a URL: the vault
//                   may not be reachable yet; codeUrl is the absolute-URL field).
// Optional for now so nothing breaks mid-migration; re:check warns on a missing
// introducedIn.
const versioned = {
  introducedIn: reference('iterations').optional(),
  source: z.string().optional(),
};

const stakeholders = defineCollection({
  loader: base('stakeholders'),
  schema: z.object({
    name: z.string(), // proper noun -- language-neutral
    role: loc,
    case: reference('case-studies'),
    interests: locArr.default({ en: [], de: [] }),
    influence: z.enum(['low', 'medium', 'high']).default('medium'),
  }),
});

const glossary = defineCollection({
  loader: base('glossary'),
  schema: z.object({
    term: loc,
    case: reference('case-studies').optional(),
  }),
});

const requirements = defineCollection({
  loader: base('requirements'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    businessGoal: loc,
    priority: z.enum(['must', 'should', 'could']).default('should'),
    status: z.enum(['open', 'in-progress', 'done']).default('open'),
    aiContribution: loc.optional(),
    ...versioned,
    // Points at the requirement(s) this one changes -- always on the NEWER artifact.
    changes: z.array(reference('requirements')).default([]),
  }),
});

const epics = defineCollection({
  loader: base('epics'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    description: loc,
  }),
});

const userStories = defineCollection({
  loader: base('user-stories'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    asA: loc,
    iWant: loc,
    soThat: loc,
    requirement: reference('requirements'),
    epic: reference('epics').optional(),
    // Required: at least one acceptance criterion per locale (the harness also checks this).
    acceptanceCriteria: z.object({
      en: z.array(z.string()).min(1),
      de: z.array(z.string()).min(1),
    }),
    bpmn: reference('diagrams').optional(),
    adr: z.array(reference('adr')).default([]),
    codeUrl: z.string().url().optional(),
    jiraKey: z.string().optional(),
    status: z.enum(['backlog', 'in-progress', 'review', 'done']).default('backlog'),
    // Make the AI contribution transparent (north-star principle). Required.
    aiContribution: loc,
    ...versioned,
    // Points at the story/stories this one changes -- always on the NEWER artifact.
    changes: z.array(reference('user-stories')).default([]),
  }),
});

const adr = defineCollection({
  loader: base('adr'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    status: z.enum(['proposed', 'accepted', 'superseded']).default('proposed'),
    date: z.coerce.date(),
    relatedRequirements: z.array(reference('requirements')).default([]),
    ...versioned,
    // On the NEWER ADR, never `supersededBy` on the old one -- this also matches the
    // vault, where the superseding ADR is the newer file.
    supersedes: reference('adr').optional(),
  }),
});

const diagrams = defineCollection({
  loader: base('diagrams'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    type: z.enum(['bpmn', 'c4', 'uml', 'mermaid', 'event-storming']),
    tool: z.string(),
    caption: loc.optional(),
    // For real BPMN/C4: path to the exported SVG under /public. The matching `.bpmn`/
    // `.puml` in the vault goes in `source` (part of `versioned` below).
    image: z.string().optional(),
    aiContribution: loc.optional(),
    ...versioned,
    // Points at the diagram(s) this one changes -- always on the NEWER artifact.
    // An L2 process diagram beside the L1 one, rather than an edit to the L1 one.
    changes: z.array(reference('diagrams')).default([]),
  }),
});

// Workflow: the "How I Work" steps. Deliberately NOT carrying its own `case` field --
// the project is derived through `introducedIn` -> iteration -> case, so there is one
// source of truth. Steps without `introducedIn` cannot be scoped to a project; re:check
// warns, and `how-i-work.astro` must group by project rather than sorting globally.
const workflow = defineCollection({
  loader: base('workflow'),
  schema: z.object({
    title: loc,
    // Position within ONE iteration's step list, not globally.
    order: z.number(),
    tools: z.array(z.string()).default([]),
    aiRole: loc,
    ...versioned,
    // A step that supersedes an earlier one -- the L1 process still renders as it was.
    changes: z.array(reference('workflow')).default([]),
  }),
});

// Journal: a running log of decisions, dead-ends and what the AI actually
// contributed -- kept while working, not polished essays after the fact.
// An entry may link back to the case study it belongs to (optional).
const journal = defineCollection({
  loader: base('journal'),
  schema: z.object({
    title: loc,
    date: z.coerce.date(),
    summary: loc.optional(),
    // Localized entry text (one entry per paragraph, per locale). Preferred over
    // the Markdown body so the log entry is bilingual.
    body: locArr.optional(),
    case: reference('case-studies').optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  iterations,
  stakeholders,
  glossary,
  requirements,
  epics,
  'user-stories': userStories,
  adr,
  diagrams,
  workflow,
  journal,
};
