---
title:
  en: "An offer from the customer attaches to an existing project"
  de: "Ein Angebot aus dem Kunden hängt sich an ein bestehendes Projekt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "creating an offer from the customer to attach to an existing project instead of always inventing a new one"
  de: "dass ein beim Kunden angelegtes Angebot sich an ein bestehendes Projekt hängt, statt immer ein neues zu erfinden"
soThat:
  en: "I don't end up with duplicate projects for the same job"
  de: "ich nicht bei doppelten Projekten für denselben Auftrag lande"
requirement: WZ-R-19
acceptanceCriteria:
  en:
    - "With exactly one active project, Angebot anlegen attaches the offer to it and creates no project"
    - "With several active projects, the user picks one from a list of them, which also offers Neues Projekt erstellen"
    - "With no active project, a new project is created for the offer, as before"
    - "The arrow beside Angebot anlegen offers „Angebot für neues Projekt anlegen“, which always creates a new project"
    - "An offer that creates a new project takes a different project address, Straße, PLZ and Ort together or not at all"
    - "An offer that attaches asks no address and never takes a billed position of that project"
  de:
    - "Bei genau einem aktiven Projekt hängt Angebot anlegen das Angebot daran und legt kein Projekt an"
    - "Bei mehreren aktiven Projekten wählt der Nutzer eines aus einer Liste dieser Projekte, die auch Neues Projekt erstellen anbietet"
    - "Ohne aktives Projekt wird wie bisher ein neues Projekt für das Angebot angelegt"
    - "Der Pfeil neben Angebot anlegen bietet „Angebot für neues Projekt anlegen“ an, das immer ein neues Projekt anlegt"
    - "Ein Angebot, das ein neues Projekt anlegt, nimmt eine abweichende Projektadresse auf, Straße, PLZ und Ort zusammen oder gar nicht"
    - "Ein Angebot, das sich anhängt, fragt keine Adresse ab und übernimmt nie eine abgerechnete Position dieses Projekts"
codeUrl: Server/Offers/CustomerOfferCreator.cs
bpmn: WZ-offer-from-customer-l5
status: done
aiContribution:
  en: "With exactly one active project, I first accepted the AI's proposal to always show a picker, then changed it: the offer attaches silently, and an arrow beside the button starts a new project instead. The label on that arrow is the AI's wording, which I confirmed at approval. At the walk the arrow's menu was cut off at the bottom of the window; the AI measured it against the running app at desktop and phone size, and I chose its recommendation to open the menu upward. I had also expected my open projects in that menu — it holds one entry by design, and I kept it as specified."
  de: "Bei genau einem aktiven Projekt habe ich den Vorschlag der KI, immer eine Auswahl zu zeigen, zuerst angenommen und dann geändert: Das Angebot hängt sich still an, und ein Pfeil neben der Schaltfläche beginnt stattdessen ein neues Projekt. Die Beschriftung dieses Pfeils ist die Formulierung der KI, die ich bei der Freigabe bestätigt habe. Beim Durchgang war das Menü des Pfeils am unteren Fensterrand abgeschnitten; die KI hat es an der laufenden App in Desktop- und Telefongröße gemessen, und ich habe ihre Empfehlung gewählt, das Menü nach oben zu öffnen. Ich hatte in diesem Menü auch meine offenen Projekte erwartet — es hat bewusst nur einen Eintrag, und ich habe es so gelassen."
introducedIn: WZ-0.4.0
source: docs/user-stories/098-offer-from-customer-attaches-to-existing-project.md
changes: [WZ-US-32]
---
