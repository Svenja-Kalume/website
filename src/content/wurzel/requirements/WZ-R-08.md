---
title:
  en: Deliver a professional, branded offer document
  de: Ein professionelles, gebrandetes Angebotsdokument ausliefern
case: wurzel
businessGoal:
  en: Every offer can be previewed and exported as a branded, correct PDF that carries the sender's company data, so the owner can hand a customer a professional quote — and once sent, that document can never silently change.
  de: Jedes Angebot kann als gebrandetes, korrektes PDF vorschaubar und exportierbar sein und trägt die Absender-Firmendaten, damit der Inhaber dem Kunden ein professionelles Angebot geben kann — und dieses Dokument sich nach dem Versand nie mehr unbemerkt ändert.
fitCriterion:
  en: An exported offer PDF renders the company's sender data, the customer's data and the correct line items/total on-screen exactly as in the downloaded file; re-opening an exported offer shows it locked, and a superseding version does not alter the original file.
  de: Ein exportiertes Angebots-PDF zeigt die Absender-Firmendaten, die Kundendaten und die korrekten Positionen/Summe am Bildschirm exakt wie in der heruntergeladenen Datei; ein erneut geöffnetes exportiertes Angebot erscheint gesperrt, eine neue Version ändert die ursprüngliche Datei nicht.
priority: must
status: done
aiContribution:
  en: The AI proposed rendering the preview as server-generated page images (not inline PDF/iframe) from the same QuestPDF document definition used for export, so both surfaces stay pixel-identical and deploy safely on IONOS; it also proposed a company-settings gate that blocks preview/export until required sender fields are filled, so no document ever renders with a blank sender. I decided branding stays a single global configuration rather than a list of named templates, and that export is the irreversible trigger that freezes and locks the offer.
  de: Die KI schlug vor, die Vorschau als server-seitig gerenderte Seitenbilder (statt Inline-PDF/iframe) aus derselben QuestPDF-Dokumentdefinition wie der Export darzustellen, damit beide Oberflächen pixelgleich bleiben und auf IONOS sicher deploybar sind; außerdem schlug sie ein Firmeneinstellungen-Gate vor, das Vorschau/Export blockiert, bis die Pflicht-Absenderfelder ausgefüllt sind, damit nie ein Dokument mit leerem Absender entsteht. Ich entschied, dass Branding eine einzelne globale Konfiguration bleibt statt einer Liste benannter Vorlagen, und dass der Export der irreversible Auslöser ist, der das Angebot einfriert und sperrt.
introducedIn: WZ-0.2.0
source: docs/grooming/l2-block1-offer-documents.md
---

Level 1 could build and price an offer but never hand it to a customer as a document. This
requirement covers the whole offer-document surface delivered in Level 2 Block 1 plus its Block 2a
branding extension: company sender data (Story 76), a shared on-screen preview and PDF export built
from one document model (Stories 77, 60), the export-triggered lock that freezes an offer forever
(Story 68), and logo/accent-colour/standard-wording branding on top of the same document (Story 78).
