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
    // Base URL of the project's own repo, e.g. https://github.com/<user>/wurzel.
    // Set it ONCE, when the repo becomes reachable. Every artifact's repo-relative
    // `codeUrl` then resolves against it, pinned to its own iteration's tag — so code
    // links can be authored today, with no hosting, and go live without editing a single
    // published artifact.
    repoUrl: z.string().url().optional(),
    // Whether the absence of `repoUrl` is a DECISION or a to-do. Repo visibility belongs to
    // the client, not to this site: most projects have stakeholders who will not open their
    // repo, so `private` is the default and the unresolved `codeUrl` paths are the expected
    // end state, not a gap. `pending` is the opposite case — a repo meant to be opened —
    // and only that one is reported by `re:check`. A warning you can never clear is one you
    // learn to skip, so the deliberate case must not produce one.
    repoAccess: z.enum(['private', 'pending']).default('private'),
    // Why the code is not linked, in the project's own words. NOT RENDERED: the repos are
    // never linked, so an explanation on every level page is permanent boilerplate about a
    // thing that does not vary. Kept in the schema because existing case studies carry it
    // and a published file is not edited to remove a field.
    repoNote: loc.optional(),
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
    // ...or an explicit statement that NOTHING changed, pointing at the iteration whose
    // practice this one reused. An iteration that shipped features under an unchanged way
    // of working is a real and interesting fact -- but it has to be SAID, because a silent
    // gap reads as an omission. re:check requires one of the two on any iteration that has
    // a predecessor.
    sameProcessAs: reference('iterations').optional(),
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
    // WHO holds the role, as a human. Every role on this project is AI-assisted, which is
    // exactly why the human behind it has to be named: the direction of the product is
    // decided by people, and a site about working with AI that leaves that implicit
    // invites the opposite reading.
    heldBy: loc.optional(),
    // WHICH specialised agents assist the role, and where their authority stops
    // (north-star principle 3: the AI contribution is stated, not implied).
    aiSupport: loc.optional(),
    interests: locArr.default({ en: [], de: [] }),
    influence: z.enum(['low', 'medium', 'high']).default('medium'),
    // Display order on the case study page. Influence is not the same thing — two
    // stakeholders can share it — so the sequence is stated rather than inferred.
    order: z.number().default(99),
  }),
});

const glossary = defineCollection({
  loader: base('glossary'),
  schema: z.object({
    term: loc,
    case: reference('case-studies').optional(),
    // The definition, per locale. It is prose, so the bilingual rule applies to it like to
    // every other prose field -- a German page that renders an English definition under a
    // German term is half-translated. Optional so the Markdown body still works as the
    // single-language fallback.
    definition: loc.optional(),
  }),
});

const requirements = defineCollection({
  loader: base('requirements'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    businessGoal: loc,
    // How you would PROVE the business goal is met (Volere's "fit criterion"). Retires
    // the "businessGoal measurable?" checklist item, which was a hope rather than a field:
    // a goal nobody can measure cannot be shown to have been reached.
    fitCriterion: loc.optional(),
    // DEPRECATED -- moved to `user-stories.priority`. MoSCoW is assigned per checklist item
    // in the project itself, and a checklist item is a story: a requirement worked across
    // several stories has no single tier. NOT RENDERED any more; kept because published
    // files carry it and a published file is not edited to remove a field.
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

/**
 * A DOMAIN TOPIC (Customer, Project, Position, Offer) — the sub-chapter a level's
 * artifacts are grouped under.
 *
 * Membership is derived wherever the data already carries it: a story joins the topic
 * that owns its `requirement`, a diagram joins through the story that cites it as
 * `bpmn`, an ADR through its `relatedRequirements`. The explicit lists here are the
 * exception, for artifacts whose requirement spans entities (a search requirement
 * covering both customers and projects) — they are written on the TOPIC, never as a
 * new field on a published artifact, so grouping never edits history.
 *
 * A topic is not versioned: it is a lens on the artifacts, not something a release
 * ships. Artifacts no topic claims are still shown, under an "unassigned" group.
 *
 * The topics are NOT invented for the site: they are the project's own epic spine
 * (`docs/epics.md` in the app repo — "WHAT: a flat spine; one epic spans several levels"),
 * cited per topic in `source`.
 */
const topics = defineCollection({
  loader: base('topics'),
  schema: z.object({
    title: loc,
    case: reference('case-studies'),
    // Sort order of the sub-chapters within a level.
    order: z.number(),
    summary: loc.optional(),
    // The artifact in the project repo this topic is taken from (repo-relative path).
    source: z.string().optional(),
    // The domain terms this topic is about. A topic with none is TECHNICAL — that is
    // derived, not declared: navigation, autosave or a test harness have no glossary
    // entry because they are not part of the business vocabulary.
    glossary: z.array(reference('glossary')).default([]),
    // Everything tracing back to these requirements lands in this topic.
    requirements: z.array(reference('requirements')).default([]),
    // Explicit members, for artifacts the requirement rule assigns wrongly or not at all.
    stories: z.array(reference('user-stories')).default([]),
    diagrams: z.array(reference('diagrams')).default([]),
    adr: z.array(reference('adr')).default([]),
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
    // Either a repo-relative path (`src/Customers/CustomerService.cs`) or a full URL.
    // PREFER THE PATH: it needs no hosting, and it resolves against the case study's
    // `repoUrl` pinned to this artifact's iteration tag, which keeps a published citation
    // immutable automatically instead of by convention. A full URL is accepted for
    // anything outside the project repo.
    codeUrl: z.string().optional(),
    jiraKey: z.string().optional(),
    // MoSCoW, at the level the project actually assigns it: the acceptance checklist puts
    // each item under a Must-Have / Should-Have heading, and an item is a story. Optional
    // with NO default -- a story delivered outside those headings (styling, technical
    // groundwork) carries no tier, and inventing one for it would be a guess.
    priority: z.enum(['must', 'should', 'could']).optional(),
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
    // The Mermaid source, per locale. A diagram's node labels are prose AND domain
    // vocabulary: an English diagram has to read in English domain terms, a German one in
    // the German ones the UI actually uses. Falls back to the Markdown body, which stays
    // the right place for a diagram that has only one language yet.
    code: loc.optional(),
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

// Open questions: the home for the SECOND kind of readiness-gate failure.
//
// The gate splits failures by owner. A *formal* defect (ambiguous, not testable, glossary
// term missing) loops back into the harness — you and the machine fix it. A *business
// question* has no answer in any artifact; only a stakeholder has it. The AI must never
// synthesise an answer to the second kind — so it needs somewhere to live, or it lives in
// a chat and evaporates.
//
// There is no established acronym for this artifact; RE literature calls it an
// open-issues list or a decision log. IDs: OQ-01.
const questions = defineCollection({
  loader: base('questions'),
  schema: z.object({
    question: loc,
    case: reference('case-studies'),
    // Who alone can answer it. A question nobody owns will not get answered.
    askedOf: reference('stakeholders').optional(),
    askedOn: z.coerce.date().optional(),
    status: z.enum(['open', 'answered', 'dropped']).default('open'),
    answer: loc.optional(),
    answeredOn: z.coerce.date().optional(),
    // What cannot proceed until this is answered. re:check errors when a story listed
    // here has moved past `backlog` while the question is still open — the readiness
    // gate with teeth rather than as a diagram.
    blocks: z.array(reference('user-stories')).default([]),
    // What happens if it is answered the other way — why it is worth asking at all.
    consequence: loc.optional(),
    ...versioned,
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
    // The implementation level this entry belongs to — the iteration whose work it
    // reports on. A REFERENCE, not a free-text tag, so the link is data: the entry can
    // be listed under its level, and `re:check` errors if it points at another project's
    // iteration. Optional, because an entry may be about the way of working rather than
    // about one level.
    // Deliberately NOT called `introducedIn`: an iteration does not *publish* a journal
    // entry, so the append-only rules for versioned artifacts do not apply here.
    iteration: reference('iterations').optional(),
    tags: z.array(z.string()).default([]),
    // What this retrospective actually CHANGED in the way of working. The site claims
    // "the retrospective improves the process"; without this field that claim is drawn on
    // a diagram rather than evidenced. re:check warns on a `retro`-tagged entry that
    // names no change — a retro that changed nothing is a status update.
    harnessChange: loc.optional(),
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
  topics,
  'user-stories': userStories,
  adr,
  diagrams,
  workflow,
  questions,
  journal,
};
