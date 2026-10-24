# Interview — reaching requirements engineers, HR and product owners

Started 2026-09-28. One section per finding from the review of the built English site
(home, About, How I Work, the wurzel case study). Answer part by part, in your own words;
nothing here is pre-filled. Rough notes are fine — the site text is written from them
afterwards and read back to you before anything is published.

Write your answer under each **Answer** line. German or English, whichever is quicker;
where a text will appear on the site, both languages are needed in the end.

Mark a section done by changing its status line to `Status: answered`.

Framing already agreed (see memory): the RE role is the **goal**, not a title you claim; the
**activity** is claimed, because wurzel is real RE work for a real business; the eleven years
of engineering are presented as the **asset** of a technical BA. IREB CPRE Foundation Level is
done.

---

## 1 · The target role is not named anywhere

Status: open

**Finding.** "Requirements Engineer" and "Business Analyst" appear on no page of the built
site. The header says "An open working journal …"; About says the focus is "increasingly
moving towards requirements engineering". HR searches for the role words, and so do link
previews on LinkedIn.

**Where it would go.** About intro; one sentence on the home page under the title; the meta
description (what search engines and link previews show).

1.1 How do you want to name the goal? One or two sentences.
    (e.g. which role titles: Requirements Engineer, Business Analyst, Technical BA, Product
    Owner — which of these do you actually want to be found for, and which not?)


**Answer (EN):**

**Answer (DE):** Softwareentwicklung ・︎Requirements Engineering・︎AI-driven Development.

> **Follow-up (Claude, 2026-10-04).** Read as the new tagline (see 1.5). English as a straight translation:
> "Software Development · Requirements Engineering · AI-driven Development". OK?
> The three fields say what you work in; they do not yet say the role is the goal. The last
> sentence of 1.3 does ("… den nächsten Schritt in Richtung Requirements Engineering gehen") —
> is that the goal sentence for the About intro, or do you want a separate one?

**Answer:** Right, was confused. So there is the real goal: "Ich möchte in die echten Fragestellungen der Anwender rein gehen. Sie verstehen um Möglichkeiten zu finden, die ihnen ihre Herausforderungen im Alltag erleichtern. Das ist was ich im Requirements Engineering suche."


1.2 How do you describe what you do on wurzel — the activity, not the title?

**Answer (EN):**

**Answer (DE):** Anforderungen eines Kleinunternehmers verstehen und daraus eine Anwendung entwickeln, die ihm die Papierarbeiten erleichtert

> **Follow-up (Claude, 2026-10-04).** English as a straight translation: "Understanding the requirements of a small
> business owner and turning them into an application that eases their paperwork." OK?
> Where should it go — the case-study intro, the home page, or both?

**Answer:** case-study intro. home page only a summary of the intro inside it's card


1.3 How do the eleven years of software engineering read as the asset? What does that
    experience let you see in requirements that others miss?

**Answer (EN):**

**Answer (DE):** Ich konnte bisher in sehr unterschiedlichen Projekten mitarbeiten. Innerhalb der Medizininformatik, im behördlich regulierten Bereich, aber auch in Projekten bzgl. Lagerhaltung, Maschinenbau und Bauwesen. Die Teamgrößen waren dabei zwischen 2 und 9 Entwicklern. Die von mir übernommene Verantwortung ist kontinuierlich mit meiner Erfahung weiter gewachsen und ich möchte den nächsten Schritt in Richtung Requirements Engineering gehen.

> **Follow-up (Claude, 2026-10-04).** This says *where* you worked and that responsibility grew. The question also
> asked what that experience lets you *see* in requirements that others miss — e.g. what a
> vague requirement costs once it is in code, or what regulated work (medical informatics)
> taught you about traceability. One sentence on that would make the eleven years the asset
> rather than the history. Want to add it, or keep it as is?

**Answer:** let's discuss about it


1.4 IREB CPRE Foundation Level: year obtained? Link to verify it (IREB certificate register,
    Credly badge, other) — or no link?

**Answer:** Febrary 2026 https://www.certible.com/de/verify/eead157ddd0166be44b8dea46fe4580d/

1.5 Should the site tagline ("An open working journal on insights from software development,
    requirements engineering, and the path to a solution") stay, or change with this?

**Answer:** yes

> **Done (2026-10-24), except 1.3.** Tagline is the three fields (1.1/1.5); the goal sentence opens
> About (1.1); the CPRE line with the verify link follows the eleven-years paragraph (1.4); the
> case-study summary — the home card — now summarises the 1.2 sentence. English translations are
> drafts. 1.3 is still to discuss.

---

## 2 · The red thread on the home page is outdated

Status: open

**Finding.** The home-page diagram shows
`Problem → Stakeholders → Workshop → Glossary → DDD / BPMN → User Stories → Architecture → Code → Retrospective`.
CLAUDE.md's current red thread is
`Problem → Stakeholders → Workshop → Glossary → Intent-driven AI Harness → Requirements + DDD + BPMN → User Stories → Readiness gate → Architecture (ADR) → Code → Tests → Retrospective`.
Missing on the site: the AI harness, requirements, the readiness gate, tests. The readiness
gate — formal defect back to the harness, business question to the stakeholder, never
answered by the AI — is currently only step 5 of 8 on How I Work.

This one needs no new content, only decisions:

2.1 Is the CLAUDE.md red thread the one to show? Anything to add, drop or rename for a reader
    who is not you (e.g. is "Intent-driven AI Harness" understandable to HR, or does it need a
    plainer label)?

**Answer:** check current harness and description about what needs update, about the red thread

> **Follow-up (Claude, 2026-10-04).** Checked the site, CLAUDE.md, the `workflow` collection and the vault at `0.3.0`:
>
> - **"Intent-driven AI Harness" appears nowhere** — not on the site, not in the vault. The vault
>   uses "harness" for *how the work is done* (agent pipeline, vault shape, test infrastructure;
>   `docs/harness/index.md`). For HR the word "harness" needs explaining in any case.
> - **The red thread and the actual practice have drifted apart.** The `workflow` collection —
>   what How I Work shows — has 8 steps: business need intake → requirements & prioritisation →
>   story definition → glossary & domain → **readiness gate** → delivery plan → test-first
>   implementation & acceptance → **block walk** (your manual test walk). The block walk exists
>   since Level 4 and is in neither red thread (site nor CLAUDE.md).
>
> Options:
> - **A** — Hand-written red thread, updated to the practice:
>   Problem → Stakeholders → Workshop → Glossary → Requirements (+ domain model, BPMN) →
>   User stories → Readiness gate → Architecture (ADR) → Code + tests → Test walk → Retrospective.
>   "AI harness" not as a station but as the line under it: *AI-assisted at every station, a
>   human decision at every gate.*
> - **B** — Generated from the `workflow` collection, so it can never drift again (principle 1:
>   traceability as data). Downside: workflow steps are named for practitioners, not for a
>   first-time visitor.
>
> Recommendation: A, with the wording yours. Which, and should "Test walk" be called that?

**Answer:**
let's do it together becaus main content is the diagram

> **Decided (2026-10-24).** Worked out on a mockup page for 2.1, 4.1 and 5.1 together; the owner
> took its recommendation as the starting point. Option A, vertical, two gates drawn with their
> loop-backs; "Intent-driven AI Harness" is the line under the diagram, not a station; the second
> gate is labelled "Test walk" / "Testdurchgang". Built on `feature/case-study-dashboard`
> (`RedThread.astro`); the 2.2 paragraph sits under it. All wording there is a draft for the owner
> to rewrite.

2.2 Should the readiness gate get its own short paragraph on the home page, right under the
    diagram — as the one idea a visitor should take away?

**Answer:** yes

---

## 3 · HR finds none of the practical facts

Status: open

**Finding.** The About page is 211 words: motivation, eleven years, contact at the end. No
location or remote preference, availability, languages, CV. The site is deliberately not a
résumé — a short fact block plus a CV link does not contradict that, but it is your call.

3.1 Do you want a fact block at all? If yes, which of these, and what is the content?
    - location / region, remote or on-site
    - availability (from when; employed, freelance, both)
    - languages
    - certification (CPRE FL — see 1.4)
    - anything else (industry background, domains)

**Answer:**

> **Follow-up (Claude, 2026-10-04).** Left empty. Skip the fact block for now (together with 3.3 and the design
> work later), or fill it? Note: the industries from 1.3 (medical informatics, regulated,
> warehousing, mechanical engineering, construction) and CPRE FL would already make a block.

**Answer:** leave it for now, my cv is seen on linkedin already


3.2 A CV to download (PDF)? If yes: do you have one ready, in which languages, and is it fine
    for it to be public?

**Answer:** no shouldn't be public, or not more what is already seen on linkedIn

3.3 Contact: keep e-mail + LinkedIn at the end of About, or also somewhere more visible
    (header, home page)?

**Answer:** ignore for now, maybe it will be answered together with claude design later

---

## 4 · The case study opens with jargon

Status: open

**Finding.** The wurzel page starts with the version timeline (`v0.1.0 · Level 2 · v0.2.0 …`)
and uses "Level", "tag", "subagents", "block walk" without explanation. A skimming reader
does not reach the substance.

Proposal: a key-figures line at the very top, only from existing data. Current numbers from
`re:check`: 4 iterations · 17 requirements · 65 user stories · 14 ADRs · 18 diagrams ·
real client · a legally required invoice date caught before it reached the client.

4.1 Which figures belong in that line, which not? (Too many figures reads like a dashboard.)

**Answer:** maybe styling like a dashboard is the more intuitive way anyway? incl. using explaining text. Let's discuss!

4.2 Should the jargon be explained on first use (e.g. "Level = an implementation stage signed
    off by the client"), or replaced with plainer words on the case-study page?

**Answer:** See 4.1

> **Decided (2026-10-24).** Key figures with one explaining line each, then the levels as a
> timeline, above the intro (`CaseFigures.astro`). Every figure is counted from the collections.
> Correction to the mockup: acceptance criteria are **272** per language; `re:check`'s 544 counts
> both locales.

4.3 Is "real client" / "a real business" the right way to say it — or how do you want to
    describe the client without naming them?

**Answer:** what's the alternative without naming?

> **Follow-up (Claude, 2026-10-04).** What the site already says, in two places: the case study — "A German
> landscaping and garden-maintenance business (… sole proprietor or small team)"; the
> stakeholder — "A commercial landscaping contractor — a real business, not a persona."
> Alternatives without a name:
> - by trade and size: "a landscaping sole trader in Germany"
> - by relationship: "a client from the landscaping trade"
> - by contrast: "a real business, not a persona" (the point is that the requirements are not
>   invented)
>
> Or a mix: "a real landscaping business in Germany — not a persona". Which reads like you?
> And 4.1 / 4.2 are still empty.

**Answer:** mix


---

## 5 · The strongest evidence is scattered

Status: open

**Finding.** The material that convinces an RE peer is spread across 12 journal entries and
How I Work — e.g. the dateless invoice PDF that passed green tests and a dual AI review, the
Level-4 finding that reversed a decision instead of repairing a defect, the rule that the AI
may not answer a business question.

Proposal: a short "key findings" section on the case-study page, each finding one or two
sentences plus a link to the journal entry or iteration where it is documented.

5.1 Which three to five findings would you pick? For each: why this one?

**Answer:** let us brainstorm how to highlight the evidence in a better way

> **Follow-up (Claude, 2026-10-04).** Starting points for the brainstorm — all built from data that exists, none
> needs new prose:
> - **A · "What the test walks found"** — per iteration, the defects a human walk caught that
>   green tests and the AI review did not. The strongest single proof that the human gate is
>   real. Source: Level 4 *is* this list.
> - **B · "Where I overruled the AI"** — one page or section that collects every
>   `aiContribution` across stories, ADRs and diagrams. Already written (your 5.2 answer); today
>   it is spread over 65 stories. Open: is there a marker for "overruled" vs "accepted", or is
>   it only prose? Without a marker the page shows all, not the overrides.
> - **C · Evidence chain for one case, end to end** — the dateless invoice PDF followed through
>   requirement → story → test → walk finding → fix → ADR. One worked example that shows the
>   traceability, instead of telling it.
> - **D · Key findings on the case-study page** — the original proposal: 3–5 short items, each
>   linking to the journal entry.
>
> A and C are the most convincing to RE peers; D is the cheapest; B depends on the marker.
> Which direction interests you?

**Answer:** like A and C also most. I think A more for HR and C more for RE? How would they look on the website? Maybe we can try something with this dashboard style?

> **Decided (2026-10-24).** Both, derived from data. A (`WalkEvidence.astro`): the corrective
> level's stories that `changes` an earlier one, each a fixed walk finding, plus the walk's journal
> entry and the workflow step it introduced; no chart yet. C (`EvidenceChain.astro`): follows the
> reference fields from the case study's `workedExample` (WZ-US-50, the dateless invoice PDF).
> Walk counts get an optional `walkFindings` field on iterations, filled from the next one on.


5.2 For each: what did the AI propose, and what did you decide differently? (This is the part
    only you can write.)

**Answer:** this is already described, at level details on stories, adr's etc. and journal entries

---

## 6 · The open-questions collection is empty

Status: open

**Finding — corrected.** The review said the `questions` collection is invisible on the site.
Checked since: it is **empty** for wurzel, and the vault has no open-questions file either.
So there is nothing to show yet — and the site must not invent any.

6.1 Were there business questions during wurzel that only the client could answer? Where were
    they recorded (grooming notes, workshop notes, test sessions, nowhere)?

**Answer:** workshop notes and test session

> **Follow-up (Claude, 2026-10-04).** The vault at `0.3.0` has `docs/testsession/` (three dated sessions plus level-3 /
> level-4 walks) and `docs/grooming/l3-block1-grilling-decisions.md`; I found no file named as
> workshop notes. Proposal: I extract **candidates** from these files — question, who answered,
> what it blocked, what the answer changed, with the file cited — and list them here for you to
> confirm or strike. Nothing is published that you have not confirmed. Where are the workshop
> notes kept?

**Answer:** introduced journal in wurzel repo, will be available next level


6.2 If they exist: should the answered ones be published as `questions` entries (with who was
    asked, what the question blocked, and what the answer changed)? That would show the
    readiness gate working, with real cases.

**Answer:** yes

6.3 If there were none: is that worth saying, or does it stay silent?

**Answer:** stay silent to keep information more overviewable and not knocking down the reader

---

## 7 · Prioritisation decisions are not visible to a product owner

Status: open

**Finding.** Iteration summaries say what was deferred ("Invoices, PDF export, company
settings and the document preview were deliberately deferred"), but not why, or what the
deferral cost or saved. A PO reads for exactly that.

Constraint: iterations 0.1.0 – 0.3.0 are published and append-only — their files are not
edited. Any answer here goes on a new artifact (the next iteration's `processChanges`, a
journal entry, or a new page section that reads the existing data).

7.1 For Level 1: why were invoices, PDF export, settings and preview deferred? Who decided —
    you, the client, both?

**Answer:** by me

> **Follow-up (Claude, 2026-10-04).** And the *why*? One or two sentences — e.g. smallest usable first, risk, what
> the client needed first. The vault has `docs/grooming/l2-prioritization.md` and
> `l3-prioritization.md` at `0.3.0`; is there a Level-1 equivalent, or was that decision only in
> your head (then it is your sentence here)?

**Answer:** depending on content, should journal on repo be extended containing this?


7.2 Looking back across the levels: which prioritisation decision are you proudest of, and
    which would you make differently?

**Answer:** hardest: after testing session of level 3, which findings need fixing imedetly and which ones could be done after version 0.3.0

7.3 Where should this live — the next iteration, a journal entry, or a section on the
    case-study page?

**Answer:** let's brainstorm about that, including existing structure of spreaded informations

> **Follow-up (Claude, 2026-10-04).** Where prioritisation lives today, as far as I can see:
> - **vault** — `docs/grooming/l2-prioritization.md`, `l3-prioritization.md`, the test-walk
>   triage in `docs/grooming/l4-block*-…-fixes.md`
> - **site** — iteration `summary` (what was deferred, not why), journal entries, the Level-4
>   iteration (exists because of your triage — your 7.2 answer)
>
> Options:
> - **A** — a **prioritisation section per iteration page**, from a new optional field on the
>   *next* iteration onwards (`prioritisation`: what was in, what was deferred, why). Published
>   iterations stay untouched; their reasoning goes into one journal entry that names the gap.
> - **B** — a **journal entry per hard call**, tagged e.g. `prioritisation`, and the case-study
>   page lists those entries. No schema change; the L3 triage (7.2) is the first.
> - **C** — publish the vault's prioritisation files as **artifacts** (like ADRs, a "decision
>   record" for product decisions). Most structured, most work, and a new collection — scope.
>
> Recommendation: B now (cheap, append-only, the 7.2 story is ready to be told), A from the
> next iteration. Your call.

**Answer:** ok so B is also the answer for question just above


---

## 8 · "ProductOwner" shows without a space

Status: answered

**Finding.** The stakeholder list shows "ProductOwner" — the raw `name` field of
`src/content/wurzel/stakeholders/WZ-product-owner.md`. Stakeholders are not versioned, so the
file can be changed.

8.1 Change it to "Product Owner"? And the German label — "Product Owner" as well, or
    "Produktverantwortliche"?

**Answer:** Product Owner, german: Produktverantwortlicher

> **Follow-up (Claude, 2026-10-04).** Note: `name` is a single language-neutral string today (a proper noun in the
> schema). A German label needs `name` to become locale-keyed like `role` — a small schema
> change, the stakeholder files are not versioned, so it is allowed. And: "Produktverantwortlicher"
> is the masculine form, the role is held by you — intended as the generic form, or
> "Produktverantwortliche"?

**Answer:** yes, locale-keyed, "Produktverantwortlicher"

> **Done (2026-10-24).** `name` accepts `{ en, de }`; Product Owner / Produktverantwortlicher.

