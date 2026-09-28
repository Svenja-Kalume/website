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

**Answer (DE):**

1.2 How do you describe what you do on wurzel — the activity, not the title?

**Answer (EN):**

**Answer (DE):**

1.3 How do the eleven years of software engineering read as the asset? What does that
    experience let you see in requirements that others miss?

**Answer (EN):**

**Answer (DE):**

1.4 IREB CPRE Foundation Level: year obtained? Link to verify it (IREB certificate register,
    Credly badge, other) — or no link?

**Answer:**

1.5 Should the site tagline ("An open working journal on insights from software development,
    requirements engineering, and the path to a solution") stay, or change with this?

**Answer:**

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

**Answer:**

2.2 Should the readiness gate get its own short paragraph on the home page, right under the
    diagram — as the one idea a visitor should take away?

**Answer:**

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

3.2 A CV to download (PDF)? If yes: do you have one ready, in which languages, and is it fine
    for it to be public?

**Answer:**

3.3 Contact: keep e-mail + LinkedIn at the end of About, or also somewhere more visible
    (header, home page)?

**Answer:**

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

**Answer:**

4.2 Should the jargon be explained on first use (e.g. "Level = an implementation stage signed
    off by the client"), or replaced with plainer words on the case-study page?

**Answer:**

4.3 Is "real client" / "a real business" the right way to say it — or how do you want to
    describe the client without naming them?

**Answer:**

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

**Answer:**

5.2 For each: what did the AI propose, and what did you decide differently? (This is the part
    only you can write.)

**Answer:**

---

## 6 · The open-questions collection is empty

Status: open

**Finding — corrected.** The review said the `questions` collection is invisible on the site.
Checked since: it is **empty** for wurzel, and the vault has no open-questions file either.
So there is nothing to show yet — and the site must not invent any.

6.1 Were there business questions during wurzel that only the client could answer? Where were
    they recorded (grooming notes, workshop notes, test sessions, nowhere)?

**Answer:**

6.2 If they exist: should the answered ones be published as `questions` entries (with who was
    asked, what the question blocked, and what the answer changed)? That would show the
    readiness gate working, with real cases.

**Answer:**

6.3 If there were none: is that worth saying, or does it stay silent?

**Answer:**

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

**Answer:**

7.2 Looking back across the levels: which prioritisation decision are you proudest of, and
    which would you make differently?

**Answer:**

7.3 Where should this live — the next iteration, a journal entry, or a section on the
    case-study page?

**Answer:**

---

## 8 · "ProductOwner" shows without a space

Status: open

**Finding.** The stakeholder list shows "ProductOwner" — the raw `name` field of
`src/content/wurzel/stakeholders/WZ-product-owner.md`. Stakeholders are not versioned, so the
file can be changed.

8.1 Change it to "Product Owner"? And the German label — "Product Owner" as well, or
    "Produktverantwortliche"?

**Answer:**
