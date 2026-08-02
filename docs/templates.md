# Content templates (to copy)

> **Faster than copying by hand:** the generator scaffolds a schema-correct stub (with `TODO`
> placeholders) in the right project folder for you:
> ```bash
> npm run content:new -- <collection> <project> [id] [options]
> npm run content:new -- requirement wurzel --prefix WZ --priority must   # auto-numbers the ID
> npm run content:new -- story wurzel WZ-US-01 --requirement WZ-R-01
> npm run content:new -- list wurzel                                      # what already exists
> ```
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
- **Markdown body** (`case-studies`, `journal`, and Mermaid `diagrams`): the body is currently a
  single block. Keep diagram bodies (Mermaid code) language-neutral. For case-study / journal
  narrative, write it in the primary language for now; the bilingual, structured content lives in the
  frontmatter fields above. (If you later need a fully bilingual long-form narrative, keep the prose
  in frontmatter fields and render those instead of the body.)

---

## Case study → `src/content/case-studies/<name>.md`

```markdown
---
title:
  en: GreenWorks ERP
  de: GreenWorks ERP
summary:
  en: One sentence describing the problem.
  de: Ein Satz, der das Problem beschreibt.
status: in-progress      # draft | in-progress | active | archived
version: "0.1"           # for the freeze/versioning concept
demoUrl: https://demo.example.com/mvp   # optional: frozen demo
order: 1
---

## Starting situation
Prose …
```

## Requirement → `src/content/requirements/R-01.md`

```markdown
---
title:
  en: Create a quote in under 15 minutes
  de: Ein Angebot in unter 15 Minuten erstellen
case: greenworks                 # ID of the case study (language-neutral)
businessGoal:
  en: Quotes should be created in under 15 minutes.
  de: Angebote sollen in unter 15 Minuten erstellt werden.
priority: must                   # must | should | could
status: in-progress              # open | in-progress | done
aiContribution:                  # optional
  en: What did the AI propose, what did you change?
  de: Was hat die KI vorgeschlagen, was hast du geändert?
---

Description of the requirement.
```

## Epic → `src/content/epics/EP-01.md`

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

## User story → `src/content/user-stories/US-01.md`

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
status: in-progress              # backlog | in-progress | review | done
aiContribution:                  # REQUIRED — make the AI contribution transparent
  en: Make the AI contribution transparent.
  de: Den KI-Anteil transparent machen.
---
```

## ADR → `src/content/adr/ADR-001.md`

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

## Diagram → `src/content/diagrams/<name>.md`

Two variants:

**A) Mermaid** (body = raw Mermaid code, without ``` fences; the body is language-neutral):

```markdown
---
title:
  en: Quote process
  de: Angebotsprozess
case: greenworks
type: bpmn                       # bpmn | c4 | uml | mermaid | event-storming
tool: Mermaid
aiContribution:                  # optional
  en: optional
  de: optional
---
flowchart TD
  A[Request] --> B[Create quote] --> C{Accepted?}
  C -- yes --> D[Order]
  C -- no --> E[End]
```

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

## Stakeholder → `src/content/stakeholders/<name>.md`

```markdown
---
name: Management                 # proper noun — language-neutral
role:
  en: Owner & decision-maker
  de: Eigentümer & Entscheider
case: greenworks
influence: high                  # low | medium | high
interests:                       # optional
  en: [Faster quotes, Fewer pricing errors]
  de: [Schnellere Angebote, Weniger Preisfehler]
---
```

## Glossary → `src/content/glossary/<term>.md`

```markdown
---
term:
  en: Quote
  de: Angebot
case: greenworks                 # optional
---

Definition …
```

## How-I-work step → `src/content/workflow/01-stakeholders.md`

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

## Journal → `src/content/journal/<slug>.md`

A dated working-log entry, not a polished article: a decision, a dead-end, or what
the AI proposed vs. what you changed. `summary` and `case` are optional; set `case`
to tie the entry back to the case study it belongs to.

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
tags: [ddd, ai]
draft: false
---

What happened, what I decided, and why. What the AI suggested — and what I changed.
```
