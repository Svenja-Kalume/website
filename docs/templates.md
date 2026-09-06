# Content templates (to copy)

> **Faster than copying by hand:** the generator scaffolds a schema-correct stub (with `TODO`
> placeholders) in the right project folder for you:
> ```bash
> npm run content:new -- <collection> <project> [id] [options]
> npm run content:new -- requirement wurzel --prefix WZ --priority must   # auto-numbers the ID
> npm run content:new -- story wurzel WZ-US-01 --requirement WZ-R-01 --iteration WZ-0.2.0
> npm run content:new -- iteration wurzel WZ-0.2.0 --version 0.2.0 --level 2 --order 2 --date 2026-08-01
> npm run content:new -- list wurzel                                      # what already exists
> ```
> Pass `--iteration <id>` on every versioned artifact so `introducedIn` is stamped by the tool
> rather than typed twenty times by hand.
> It never invents content — you replace the TODOs with the real thing (linked, not made up),
> then run `npm run re:check && npm run build`. `node scripts/new-content.mjs --help` lists all
> options. The blocks below are the reference for what each stub contains.

These files intentionally live **outside** `src/content` so they are not validated as content.
Copy the relevant block into a new file under `src/content/<project>/<collection>/` (or use the
generator above).

**Ground rule:** content from your existing project is **linked** (GitHub, Jira, diagram export),
not re-invented. IDs = filename (e.g. `R-01.md` → ID `R-01`).

## Bilingual content (English + German)

The site is bilingual. The rule is: **IDs and links stay language-neutral, prose is per-locale.**

- **One file per artifact.** You do *not* create a separate file per language. The filename is the
  ID, and `reference()` links point at that ID regardless of language.
- **Human-readable prose** (`title`, `summary`, `businessGoal`, `role`, acceptance criteria, …) is
  written as an `en` / `de` pair:

  ```yaml
  title:
    en: Create a quote in under 15 minutes
    de: Ein Angebot in unter 15 Minuten erstellen
  ```

- **Language-neutral fields** stay plain: IDs, `reference()` links (`case`, `requirement`, `adr`, …),
  enums (`status`, `priority`, `influence`, `type`), `date`, URLs (`demoUrl`, `codeUrl`, `source`,
  `image`), `version`, `order`, `jiraKey`, `tool`, `tools`, `tags`, and a stakeholder's `name`.
- **Single-language draft?** You may temporarily write a plain string instead of the `en`/`de` pair;
  it will show in *both* locales until you translate it. The schema for **user stories** requires
  both locales (they are the traceability core), so translate those before `npm run build`.
- **Markdown body** (`case-studies`, `journal`, and older Mermaid `diagrams`): the body is a
  single block. A diagram's Mermaid code now belongs in the per-locale `code` field — the body
  is only the fallback for files written before it. For case-study / journal
  narrative, write it in the primary language for now; the bilingual, structured content lives in the
  frontmatter fields above. (If you later need a fully bilingual long-form narrative, keep the prose
  in frontmatter fields and render those instead of the body.)

---

## Versioning fields (on every artifact that sits on the timeline)

`user-stories`, `requirements`, `diagrams`, `adr` and `workflow` all carry these. Add them to the
blocks below rather than treating them as a separate template:

```yaml
introducedIn: WZ-0.2.0        # the iteration that FIRST publishes this artifact
source: docs/user-stories/l2-block1-offer-pdf.md   # the vault file it cites (a path, not a URL)
changes: [WZ-US-05]           # ids in the SAME collection that this artifact changes
supersedes: WZ-ADR-003        # adr only — same idea, one ADR
```

**The change pointer always sits on the newer artifact.** There is deliberately no `changedIn` and no
`supersededBy`: publishing an iteration must never require editing a file an earlier one published.
`re:check` errors if `changes` / `supersedes` points at something introduced *later*.

## Iteration → `src/content/<project>/iterations/<PREFIX>-<version>.md`

One published increment of a case study. The id **is** the release tag, so there is no
auto-numbering: `WZ-0.2.0`.

```markdown
---
title:
  en: Level 2 — offer documents
  de: Level 2 — Angebotsdokumente
case: wurzel
version: "0.2.0"         # the app-repo release tag — the identity
level: 2                 # optional: a number, or post-mvp
blocks: ["1", "2a"]      # optional, and always quoted — "1" is a string, not a number
order: 2                 # unique within this case study; the CURRENT iteration is the highest
date: 2026-08-01         # the tag date, not today
summary:
  en: What this iteration published.
  de: Was diese Iteration veröffentlicht hat.
intro:                   # optional
  en: [Paragraph one., Paragraph two.]
  de: [Absatz eins., Absatz zwei.]
processChanges:          # the headline: what changed in HOW you work
  en: [The readiness gate now splits formal defects from business questions.]
  de: [Das Readiness-Gate trennt jetzt formale Mängel von fachlichen Fragen.]
sameProcessAs: WZ-0.1.0  # use INSTEAD of processChanges when nothing changed in how
                         # you work — an unchanged practice is a finding, but it has
                         # to be said. re:check requires one of the two.
corrects: [WZ-0.1.0]     # optional; only ever points BACKWARDS
lessons:                 # optional
  en: [What you would do differently.]
  de: [Was du anders machen würdest.]
sourceUrl: https://github.com/…/releases/tag/0.2.0   # optional
aiContribution:          # optional
  en: What the AI proposed about this iteration, and what you changed.
  de: Was die KI zu dieser Iteration vorschlug und was du geändert hast.
---
```

There is no `status: current | superseded` field on purpose — the current iteration is *derived* from
the highest `order`, so publishing a new one never edits the old one.

**Every iteration after the first needs `processChanges` *or* `sameProcessAs`** — `re:check` warns
otherwise. An iteration that shipped features under an unchanged way of working is a real finding, but
a silent gap does not say so: it reads as an omission. The absence does not speak; the sentence does.

## Open question → `src/content/<project>/questions/OQ-01.md`

The readiness gate splits failures by owner. A **formal** defect (ambiguous, not testable, glossary
term missing) loops back into the harness. A **business question** has no answer in any artifact —
only a stakeholder has it, and the AI must never synthesise one. This is where that second kind lives
instead of evaporating in a chat.

```markdown
---
question:
  en: Does the customer number reset per year, or run continuously?
  de: Wird die Kundennummer jährlich zurückgesetzt oder läuft sie durch?
case: wurzel
askedOf: WZ-owner        # the stakeholder who alone can answer it
askedOn: 2026-08-02
status: open             # open | answered | dropped
blocks: [WZ-US-03]       # stories that must not proceed until it is answered
consequence:
  en: A continuous number makes the yearly-reset retry logic unnecessary.
  de: Eine durchlaufende Nummer macht die Retry-Logik für den Jahresreset überflüssig.
---

Context: where this came up, and what has already been ruled out.
```

Once answered, add `answer` (localized) and `answeredOn`, and set `status: answered`.
**`re:check` errors** if a story listed in `blocks` moves past `backlog` while the question is open —
that error means someone is about to invent the answer.

## Case study → `src/content/<project>/case-studies/<name>.md`

```markdown
---
title:
  en: GreenWorks ERP
  de: GreenWorks ERP
summary:
  en: One sentence describing the problem.
  de: Ein Satz, der das Problem beschreibt.
status: in-progress      # draft | in-progress | active | archived
repoAccess: private      # private (default; the repo stays closed) | pending (it is meant to open)
repoNote:                # optional, no longer rendered: why the code is not linked
  en: The client owns repository visibility; the paths below stay exact and verifiable.
  de: Die Sichtbarkeit des Repositorys entscheidet der Kunde; die Pfade unten bleiben exakt und nachprüfbar.
version: "0.1"           # DEPRECATED — derived from the current iteration instead
demoUrl: https://demo.example.com/mvp   # optional: frozen demo
order: 1
---

## Starting situation
Prose …
```

## Requirement → `src/content/<project>/requirements/R-01.md`

```markdown
---
title:
  en: Create a quote in under 15 minutes
  de: Ein Angebot in unter 15 Minuten erstellen
case: greenworks                 # ID of the case study (language-neutral)
businessGoal:
  en: Quotes should be created in under 15 minutes.
  de: Angebote sollen in unter 15 Minuten erstellt werden.
fitCriterion:                    # how you would PROVE it — a measurement, not a restatement
  en: Five quotes timed end to end, median under 15 minutes, no manual copy-paste step.
  de: Fünf Angebote end-to-end gestoppt, Median unter 15 Minuten, ohne manuelles Copy-Paste.
priority: must                   # DEPRECATED, not rendered — MoSCoW belongs to the story.
                                 # Kept only because published files carry it.
status: in-progress              # open | in-progress | done
aiContribution:                  # optional
  en: What did the AI propose, what did you change?
  de: Was hat die KI vorgeschlagen, was hast du geändert?
---

Description of the requirement.
```

## Epic → `src/content/<project>/epics/EP-01.md`

```markdown
---
title:
  en: Quote management
  de: Angebotsverwaltung
case: greenworks
description:
  en: What stories does this epic group together?
  de: Welche Stories fasst dieses Epic zusammen?
---
```

## Domain topic → `src/content/<project>/topics/T-01-customer.md`

A topic is the sub-chapter a level's artifacts are grouped under on the iteration page.
**Do not invent the set** — take it from the project's own epic spine (wurzel: `docs/epics.md`,
"WHAT: a flat spine; one epic spans several levels") and cite that file in `source`. Membership is **derived**: a story joins the topic that owns
its `requirement`, a diagram joins through the story citing it as `bpmn`, an ADR through
its `relatedRequirements`. The explicit lists are the exception, for artifacts whose
requirement spans topics ("find a customer *or* project") — they are written **on the
topic**, never as a new field on a published artifact, so grouping never edits history.
Whatever no topic claims is still shown, under "Not tied to one topic".

The topic's `glossary` terms are rendered with their definitions at the head of the
sub-chapter — the one place the glossary surfaces on the site. A topic with **no** term is
marked *technical* on the page: navigation, autosave or a test harness have no glossary
entry because they are not business vocabulary. That is derived from the empty list, not
declared with a flag.

A topic is not versioned: it is a lens on the artifacts, not something a release ships.

```markdown
---
title:
  en: Customer
  de: Kunde
case: greenworks
order: 1
source: docs/epics.md   # the repo artifact this topic set comes from
glossary: [kunde]    # the domain terms this topic is about; empty = a technical topic
# Optional, one line on what the topic covers:
# summary:
#   en: …
#   de: …
requirements: [R-01]
stories: [US-26]     # optional overrides
diagrams: []         # optional; else derived from the stories citing them
adr: []              # optional; else derived from relatedRequirements
---
```

## User story → `src/content/<project>/user-stories/US-01.md`

```markdown
---
title:
  en: Create a quote from a template
  de: Ein Angebot aus einer Vorlage erstellen
case: greenworks
asA:
  en: field sales rep
  de: Außendienstmitarbeiter:in
iWant:
  en: to create a quote from a template
  de: ein Angebot aus einer Vorlage zu erstellen
soThat:
  en: I do not start from scratch
  de: ich nicht bei null anfange
requirement: R-01                # REQUIRED: points to a requirement
epic: EP-01                      # optional
acceptanceCriteria:              # REQUIRED: at least one PER locale
  en:
    - Template can be selected
    - Line items are carried over
  de:
    - Vorlage kann ausgewählt werden
    - Positionen werden übernommen
bpmn: quote-process              # optional: ID of a diagram
adr: [ADR-001]                   # optional: list of ADR IDs
codeUrl: https://github.com/…    # optional: point to existing code
jiraKey: GW-12                   # optional
priority: must                   # optional: must | should | could — MoSCoW sits HERE, on the
                                 # story, because that is where the acceptance checklist
                                 # assigns it. Leave it out for a story delivered outside a
                                 # Must/Should heading; no tier beats an invented one.
status: in-progress              # backlog | in-progress | review | done
aiContribution:                  # REQUIRED — make the AI contribution transparent
  en: Make the AI contribution transparent.
  de: Den KI-Anteil transparent machen.
---
```

## ADR → `src/content/<project>/adr/ADR-001.md`

```markdown
---
title:
  en: Separate quote and order
  de: Angebot und Auftrag trennen
case: greenworks
status: accepted                 # proposed | accepted | superseded
date: 2026-07-16
relatedRequirements: [R-02]
---

## Context
…
## Decision
…
## Consequences
…
```

## Diagram → `src/content/<project>/diagrams/<name>.md`

Two variants:

**A) Mermaid** — the code goes in `code`, **per locale**. Node labels are prose, so an English
page must not show a German diagram or the other way round; use each language's own domain
terms, not a transliteration. The Markdown body is still read as a single-language fallback
for diagrams written before the field, but new diagrams should use `code`.

```markdown
---
title:
  en: Quote process
  de: Angebotsprozess
case: greenworks
type: bpmn                       # bpmn | c4 | uml | mermaid | event-storming
tool: Mermaid
code:
  en: |
    flowchart TD
      A[Request] --> B[Create quote] --> C{Accepted?}
      C -- yes --> D[Order]
      C -- no --> E[End]
  de: |
    flowchart TD
      A[Anfrage] --> B[Angebot erstellen] --> C{Angenommen?}
      C -- ja --> D[Auftrag]
      C -- nein --> E[Ende]
aiContribution:                  # optional
  en: optional
  de: optional
---
```

A written `caption` is shown under the diagram. A description derived from the node labels
is always rendered too, for assistive technology only — never on the page: printed next to
the picture it is the picture read out as a chain of arrows.

**B) Real BPMN/C4** (embed exported SVG, link the source):

```markdown
---
title:
  en: Quote process
  de: Angebotsprozess
case: greenworks
type: bpmn
tool: Camunda Modeler
image: /diagrams/quote-process.svg       # put the file under public/diagrams/
source: https://github.com/…/quote-process.bpmn
caption:                         # optional
  en: The happy path only.
  de: Nur der Gutfall.
aiContribution:                  # optional
  en: optional
  de: optional
---
```

## Stakeholder → `src/content/<project>/stakeholders/<name>.md`

```markdown
---
name: Management                 # proper noun — language-neutral
role:
  en: Owner & decision-maker
  de: Eigentümer & Entscheider
case: greenworks
influence: high                  # low | medium | high
order: 1                         # display order on the case study page (lower first)
interests:                       # optional
  en: [Faster quotes, Fewer pricing errors]
  de: [Schnellere Angebote, Weniger Preisfehler]
heldBy:                          # optional: WHO holds the role, as a human
  en: The owner of the business — a real person, not a persona. Where the product goes is decided there.
  de: Die Inhaberin des Betriebs — eine reale Person, keine Persona. Die Produktrichtung wird dort entschieden.
aiSupport:                       # optional: WHICH agents assist, and where their authority stops
  en: A research agent prepares the options; the choice between them is never the agent's.
  de: Ein Recherche-Agent bereitet die Optionen auf; die Wahl zwischen ihnen trifft nie der Agent.
---
```

Every role on these projects is AI-assisted, which is exactly why the human behind it is
named: a site about working with AI that leaves that implicit invites the opposite reading.

## Glossary → `src/content/<project>/glossary/<term>.md`

```markdown
---
term:
  en: Quote
  de: Angebot
case: greenworks                 # optional
definition:                      # the definition is prose, so it is per locale
  en: A price proposal belonging to a project. At most one open quote per project.
  de: Ein Preisangebot, das zu einem Projekt gehört. Höchstens ein offenes Angebot je Projekt.
---
```

The Markdown body is still rendered when `definition` is missing — the single-language
fallback for terms written before the field. New terms should use `definition`, otherwise
the German page shows an English definition.

## How-I-work step → `src/content/<project>/workflow/01-stakeholders.md`

```markdown
---
title:
  en: Stakeholder interview
  de: Stakeholder-Interview
order: 1
tools: [Obsidian, Claude]
aiRole:
  en: What role does the AI play in this step?
  de: Welche Rolle spielt die KI in diesem Schritt?
---
```

## Journal → `src/content/<project>/journal/<slug>.md`

A dated working-log entry, not a polished article: a decision, a dead-end, or what
the AI proposed vs. what you changed. `summary` and `case` are optional; set `case`
to tie the entry back to the case study it belongs to, and `iteration` to the
implementation level whose work it reports on — the entry then carries that level as
a tag linking to it. `iteration` is a reference, not a free-text tag, so it cannot
drift; `re:check` errors if it names another project's iteration.

```markdown
---
title:
  en: Chose event storming over plain interviews for the ordering process
  de: Event Storming statt reiner Interviews für den Bestellprozess gewählt
date: 2026-07-16
summary:                 # optional — one line for the log stream
  en: One line for the log stream.
  de: Eine Zeile für den Log-Stream.
case: greenworks        # optional — links the entry to a case study
iteration: GW-0.2.0     # optional — the implementation level this entry belongs to
tags: [ddd, ai]
harnessChange:          # REQUIRED in practice when tagged `retro` — re:check warns
  en: The readiness gate now sends business questions to a stakeholder instead of the AI.
  de: Das Readiness-Gate schickt fachliche Fragen jetzt an einen Stakeholder statt an die KI.
draft: false
---

What happened, what I decided, and why. What the AI suggested — and what I changed.
```

Tag an entry `retro` and `re:check` warns until `harnessChange` names what it changed. "The
retrospective improves the process" is a claim the site makes — this is what backs it.
