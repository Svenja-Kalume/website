---
title:
  en: "The final invoice now closes the project"
  de: "Die Schlussrechnung schließt jetzt das Projekt"
date: 2026-10-24
summary:
  en: "Grooming the project-closure stories, I chose a stronger rule than the AI proposed, twice: exporting the final invoice closes the project, and cancelling it reopens it."
  de: "Beim Grooming der Stories zum Projektabschluss habe ich zweimal eine stärkere Regel gewählt, als die KI vorschlug: Der Export der Schlussrechnung schließt das Projekt, und ihre Stornierung öffnet es wieder."
case: wurzel
iteration: WZ-0.4.0
tags: [decision, bdr, dsdr, prd, projects, lifecycle]
draft: false
body:
  en:
    - "Five stories about a project's lifecycle were groomed together: the project status, the lock behind an exported final invoice (Schlussrechnung), what that invoice does to the project, a new project from a closed one, and an offer from the customer attaching to an existing project. Until then the final invoice was only a label with no effect on the project, and the status was meant to be set by hand only."
    - "On how the final invoice and closing are tied, the AI recommended a warning in the close dialog when no final invoice had been exported, and keeping the status fully manual. I decided that exporting the final invoice closes the project. On what happens when that invoice is cancelled, the AI read an earlier answer of mine as \"the project stays closed, and the user reopens it by hand\". At approval I decided otherwise: cancelling reopens the project to the status it had before the export, with a notice."
    - "Two smaller corrections went the same way. The AI had put the closed project's address out of scope for a new project made from it; I had it copied. And for an offer started from a customer with exactly one active project, I first accepted the AI's \"always show a picker\", then changed it: the offer attaches silently, and an arrow beside the button starts a new project instead."
    - "So the status is no longer only a label. Two automatic changes now exist, both tied to the final invoice; every other change stays manual and in any order. While an exported final invoice stands, the project is locked, and reopening it by hand is not offered. An invoice status \"paid\" stays after the MVP, as its own story."
  de:
    - "Fünf Stories zum Lebenszyklus eines Projekts wurden gemeinsam gegroomt: der Projektstatus, die Sperre hinter einer exportierten Schlussrechnung, was diese Rechnung mit dem Projekt macht, ein neues Projekt aus einem geschlossenen und ein Angebot aus dem Kunden, das sich an ein bestehendes Projekt hängt. Bis dahin war die Schlussrechnung nur eine Bezeichnung ohne Wirkung auf das Projekt, und der Status sollte nur von Hand gesetzt werden."
    - "Zur Frage, wie Schlussrechnung und Schließen zusammenhängen, empfahl die KI eine Warnung im Schließen-Dialog, wenn keine Schlussrechnung exportiert war, und einen weiterhin rein manuellen Status. Ich habe entschieden, dass der Export der Schlussrechnung das Projekt schließt. Zur Frage, was bei einer Stornierung dieser Rechnung passiert, las die KI eine frühere Antwort von mir als „das Projekt bleibt geschlossen, und der Nutzer öffnet es von Hand wieder“. Bei der Freigabe habe ich anders entschieden: Die Stornierung öffnet das Projekt wieder, mit dem Status vor dem Export und einem Hinweis."
    - "Zwei kleinere Korrekturen liefen genauso. Die KI hatte die Adresse des geschlossenen Projekts für ein daraus angelegtes neues Projekt ausgeschlossen; ich habe sie übernehmen lassen. Und für ein Angebot aus einem Kunden mit genau einem aktiven Projekt habe ich zuerst das „immer eine Auswahl zeigen“ der KI angenommen und es dann geändert: Das Angebot hängt sich still an, und ein Pfeil neben der Schaltfläche beginnt stattdessen ein neues Projekt."
    - "Der Status ist also nicht mehr nur eine Bezeichnung. Es gibt jetzt zwei automatische Änderungen, beide an die Schlussrechnung gebunden; jede andere Änderung bleibt manuell und in beliebiger Reihenfolge. Solange eine exportierte Schlussrechnung besteht, ist das Projekt gesperrt, und Wiedereröffnen von Hand wird nicht angeboten. Ein Rechnungsstatus „bezahlt“ bleibt als eigene Story nach dem MVP."
---
