---
title:
  en: wurzel — business admin for a landscaping trade
  de: wurzel — Betriebsverwaltung für den GaLaBau
summary:
  en: How a landscaping business gets a web app to manage customers, projects and priced offers — modelled requirements-first, built AI-assisted, every step under human judgement.
  de: Wie ein Garten- und Landschaftsbaubetrieb eine Web-App für Kunden, Projekte und bepreiste Angebote bekommt — anforderungsgetrieben modelliert, KI-gestützt gebaut, jeder Schritt unter menschlichem Urteil.
intro:
  en:
    - A German landscaping and garden-maintenance business (Garten- und Landschaftsbau, sole proprietor or small team) quotes by hand — calculator, word processor, copy-paste between documents. Offers are hard to revise and nothing ties a job together. The goal — a usable web application, quickly — to manage clients, projects and offers in one simple workflow.
    - This case study follows one business problem the whole way down — from problem and stakeholders through glossary, domain model, context map and BPMN to requirements, user stories, architecture decisions and code. At each station there is the artifact, the reasoning ("why did I decide this way?") and the AI contribution ("what did the AI propose, what did I change?").
    - The application is real and the way of working is the point. Stories are groomed by a human Product Owner against explicit acceptance criteria and a readiness gate; delivery is then executed by AI technician subagents (backend, frontend, tester) planning in parallel and implementing test-first. The human owns intent, scope and every gate; the AI accelerates the mechanical middle.
    - The published state has reached Level 2 (tag 0.2.0) — Level 1's customers, projects, priced positions and versioned offers, now extended with company sender data, an on-screen preview and PDF export built from one document model, an export-triggered lock that freezes an offer for good, and logo/colour/wording branding. Invoices remain deferred to a later level. Level 1 stays visible in the iterations timeline — the site shows it still standing — and the living state keeps evolving on the main branch.
  de:
    - Ein deutscher Garten- und Landschaftsbaubetrieb (Einzelunternehmer oder kleines Team) kalkuliert von Hand — Taschenrechner, Textverarbeitung, Copy-Paste zwischen Dokumenten. Angebote lassen sich schwer überarbeiten, und nichts hält einen Auftrag zusammen. Das Ziel — schnell eine nutzbare Web-App — um Kunden, Projekte und Angebote in einem einfachen Ablauf zu verwalten.
    - Diese Fallstudie verfolgt ein fachliches Problem durchgängig — von Problem und Stakeholdern über Glossar, Domänenmodell, Context Map und BPMN bis zu Anforderungen, User Stories, Architekturentscheidungen und Code. An jeder Station stehen das Artefakt, die Begründung („Warum habe ich mich so entschieden?") und der KI-Anteil („Was hat die KI vorgeschlagen, was habe ich geändert?").
    - Die Anwendung ist real, und die Arbeitsweise ist der Punkt. Stories werden von einem menschlichen Product Owner gegen explizite Akzeptanzkriterien und ein Readiness-Gate gegroomt; die Umsetzung übernehmen dann KI-Technician-Subagenten (Backend, Frontend, Tester), die parallel planen und test-first implementieren. Der Mensch besitzt Absicht, Scope und jedes Gate; die KI beschleunigt die mechanische Mitte.
    - Der veröffentlichte Stand hat Level 2 erreicht (Tag 0.2.0) — Kunden, Projekte, bepreiste Positionen und versionierte Angebote aus Level 1, nun ergänzt um Firmen-Absenderdaten, eine Bildschirmvorschau und einen PDF-Export aus einem Dokumentmodell, eine exportausgelöste Sperre, die ein Angebot dauerhaft einfriert, sowie Logo-/Farb-/Textbranding. Rechnungen bleiben auf ein späteres Level verschoben. Level 1 bleibt in der Iterations-Timeline sichtbar — die Seite zeigt es weiterhin bestehend — und der lebende Stand entwickelt sich auf dem main-Branch weiter.
status: active
repoAccess: private
repoNote:
  en: The application's own repository is not public. Where it goes next is still open — it may yet be released as a product — so opening it is not a decision this case study makes. The code and working-doc paths below are cited exactly and stay verifiable in a walkthrough; they render as paths rather than links.
  de: Das Repository der Anwendung ist nicht öffentlich. Wie es damit weitergeht, ist noch offen — sie könnte später als Produkt veröffentlicht werden —, deshalb trifft diese Fallstudie die Entscheidung zur Öffnung nicht. Die Code- und Arbeitsdokument-Pfade unten sind exakt zitiert und bleiben in einem Walkthrough nachprüfbar; sie erscheinen als Pfade statt als Links.
version: "0.2.0"
order: 1
---
