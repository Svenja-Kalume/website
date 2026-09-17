---
title:
  en: "An issued bill can never change, and never goes missing"
  de: "Eine gestellte Rechnung ändert sich nie und geht nie verloren"
case: wurzel
businessGoal:
  en: "Once a bill has been issued, the copy the app holds and the copy the customer holds are provably the same document, for the whole ten-year retention period — and the owner can find any invoice again, across all projects, without knowing which project it belonged to."
  de: "Sobald eine Rechnung gestellt ist, sind die Kopie in der Anwendung und die Kopie beim Kunden nachweislich dasselbe Dokument — über die gesamten zehn Jahre Aufbewahrungsfrist. Und der Inhaber findet jede Rechnung wieder, projektübergreifend, ohne zu wissen, zu welchem Projekt sie gehörte."
fitCriterion:
  en: "Downloading an invoice issued months earlier returns bytes identical to the file the customer received, after the accent colour, the company address and the terms wording have all been changed in the meantime; and every invoice appears in the general invoice list with its number, state, due date and gross total."
  de: "Eine vor Monaten gestellte Rechnung lädt byteidentisch zu der Datei herunter, die der Kunde erhalten hat — nachdem Akzentfarbe, Firmenanschrift und Textbausteine zwischenzeitlich geändert wurden. Und jede Rechnung erscheint in der allgemeinen Rechnungsliste mit Nummer, Status, Fälligkeitsdatum und Gesamtbetrag."
priority: must
status: done
aiContribution:
  en: "The AI proposed storing three separate frozen artefacts at export — the PDF bytes, the rendered page images and the invoice line’s own copied data — each doing one job, rather than one overloaded blob, and it proposed that the read-only view of a frozen invoice be built from the stored page images. The call I own is the one it makes uncomfortable: there is deliberately **no** data-table fallback when the stored document cannot be loaded. A fallback would look plausible in exactly the situation where the user trusts the screen most — a customer dispute on the phone — and would quietly show today’s data as yesterday’s bill. An error is the correct outcome there."
  de: "Die KI schlug vor, beim Export drei getrennte eingefrorene Artefakte zu speichern — die PDF-Bytes, die gerenderten Seitenbilder und die kopierten Daten der Rechnungszeile —, von denen jedes genau eine Aufgabe erfüllt, statt eines überladenen Blobs; und sie schlug vor, die Leseansicht einer eingefrorenen Rechnung aus den gespeicherten Seitenbildern aufzubauen. Die Entscheidung, die ich verantworte, ist die unbequeme: Es gibt bewusst **keinen** Tabellen-Fallback, wenn das gespeicherte Dokument nicht geladen werden kann. Ein Fallback sähe genau in der Situation plausibel aus, in der die Nutzerin dem Bildschirm am meisten vertraut — beim Kundengespräch am Telefon — und würde stillschweigend heutige Daten als gestrige Rechnung zeigen. Ein Fehler ist dort das richtige Ergebnis."
introducedIn: WZ-0.3.0-level-3
source: docs/adr/0025-frozen-invoice-is-its-stored-document.md
---

Immutability is what separates a bill from a document. This requirement covers the freeze at
export, the read-only view built from the stored pages, the draft-only editing and deletion rules,
and the two lists — per project and across all projects — that make an issued bill findable
again.
