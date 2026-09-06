---
title:
  en: Create a new position in the offer editor
  de: Neue Position im Angebots-Editor anlegen
case: wurzel
asA:
  en: landscaping business owner
  de: GaLaBau-Betriebsinhaber
iWant:
  en: to describe a brand-new position directly while editing an offer
  de: eine völlig neue Position direkt während der Angebotsbearbeitung beschreiben zu können
soThat:
  en: I can build a quote for a project that has no suitable positions yet, without leaving the offer editor
  de: ich ein Angebot für ein Projekt ohne passende Positionen erstellen kann, ohne den Angebots-Editor zu verlassen
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - The offer editor gains a "Neue Position" create row (Beschreibung, Einheit, Menge, Einzelpreis), available even when the project has no addable existing positions
    - On confirm the line is added client-side immediately; the ProjectPosition is only created on the offer's normal autosave, so an abandoned draft creates no orphan position
    - Creating a position obeys the same required-field validation as the project's position editor, and is hidden when the offer is read-only
  de:
    - Der Angebots-Editor erhält eine „Neue Position“-Anlegen-Zeile (Beschreibung, Einheit, Menge, Einzelpreis), verfügbar auch wenn das Projekt keine hinzufügbaren bestehenden Positionen hat
    - Beim Bestätigen wird die Zeile sofort client-seitig hinzugefügt; die ProjectPosition wird erst beim normalen Autosave des Angebots angelegt, sodass ein abgebrochener Entwurf keine verwaiste Position hinterlässt
    - Das Anlegen einer Position folgt derselben Pflichtfeld-Validierung wie der Projekt-Positionseditor und ist ausgeblendet, wenn das Angebot read-only ist
codeUrl: Client/Projects/PositionListEditor.razor
priority: must
status: done
aiContribution:
  en: "The AI identified that a project with no offerable positions could never reach a valid offer draft (the MinLength(1) items rule blocks autosave forever), and proposed the fix: create the position client-side into the same deferred, write-back-on-save model already used for project positions (Id = 0 -> created on save), so persistence rides the offer's own autosave rather than a new save path."
  de: "Die KI erkannte, dass ein Projekt ohne anbietbare Positionen nie einen gültigen Angebotsentwurf erreichen konnte (die MinLength(1)-Regel blockiert Autosave dauerhaft), und schlug den Fix vor: die Position client-seitig in dasselbe aufgeschobene Write-back-on-save-Modell anzulegen, das bereits für Projektpositionen gilt (Id = 0 -> beim Speichern erzeugt), sodass die Persistierung auf dem bestehenden Autosave des Angebots mitläuft statt einen neuen Speicherpfad zu benötigen."
introducedIn: WZ-0.2.0
source: docs/user-stories/079-create-position-in-offer-editor.md
---
