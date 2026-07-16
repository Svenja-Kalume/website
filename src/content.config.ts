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
 */

// A localized string: { en, de }. Both locales are required so the schema
// surfaces a missing translation at build time rather than silently.
const loc = z.object({ en: z.string(), de: z.string() });
// A localized list of strings.
const locArr = z.object({ en: z.array(z.string()), de: z.array(z.string()) });

// The content location is configurable so example projects/content can live in a
// SEPARATE repo. Default: ./src/content (or a submodule mounted there).
// Alternatively via env var: CONTENT_DIR=../greenworks-content npm run build
const CONTENT_ROOT = process.env.CONTENT_DIR ?? './src/content';
// Relative paths are resolved by Astro relative to the project root; absolute paths
// must be passed as a file:// URL (otherwise: "The URL must be of scheme file").
const resolveBase = (dir: string) => {
  const p = `${CONTENT_ROOT}/${dir}`;
  return isAbsolute(CONTENT_ROOT) ? pathToFileURL(p + '/') : p;
};
const base = (dir: string) => glob({ pattern: '**/*.{md,mdx}', base: resolveBase(dir) });

const caseStudies = defineCollection({
  loader: base('case-studies'),
  schema: z.object({
    title: loc,
    summary: loc,
    status: z.enum(['draft', 'in-progress', 'active', 'archived']).default('in-progress'),
    // Freeze/versioning concept: version of the documented case study (e.g. 0.1, mvp, 1.0)
    version: z.string().default('0.1'),
    demoUrl: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

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
    // For real BPMN/C4: path to the exported SVG under /public and to the source in the repo.
    image: z.string().optional(),
    source: z.string().optional(),
    aiContribution: loc.optional(),
  }),
});

const workflow = defineCollection({
  loader: base('workflow'),
  schema: z.object({
    title: loc,
    order: z.number(),
    tools: z.array(z.string()).default([]),
    aiRole: loc,
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
    case: reference('case-studies').optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
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
