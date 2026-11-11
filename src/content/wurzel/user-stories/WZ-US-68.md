---
title:
  en: "Several open offers per project"
  de: "Mehrere offene Angebote je Projekt"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "to start a second offer on a project for a separate part of the work without replacing the first"
  de: "für einen eigenen Teil der Arbeit ein zweites Angebot im Projekt beginnen, ohne das erste zu ersetzen"
soThat:
  en: "one job can be quoted in parts, such as Terrassenbau and Garten anlegen"
  de: "ein Auftrag in Teilen angeboten werden kann, etwa Terrassenbau und Garten anlegen"
requirement: WZ-R-20
acceptanceCriteria:
  en:
    - "Neues Angebot on the project page is shown whatever offers the project holds, once the project is saved; it opens the draft editor, the new offer starts with every position that may be offered, and saving it leaves every other offer unchanged"
    - "The project page shows one card per version chain, holding its latest version of any status; older versions get no card"
    - "Neue Version on a card or in the editor of an exported offer replaces only that offer and takes only its positions; it is offered only on the latest version of each chain"
    - "A position on two open offers is shown on both and counted in each total; deactivating it removes it from every open offer"
    - "The project list's Angebot button opens the one open offer, opens a new draft when there is none, and is not shown when there are several"
  de:
    - "Neues Angebot auf der Projektseite wird angezeigt, welche Angebote das Projekt auch hat, sobald das Projekt gespeichert ist; es öffnet den Entwurfseditor, das neue Angebot beginnt mit jeder anbietbaren Position, und sein Speichern lässt jedes andere Angebot unverändert"
    - "Die Projektseite zeigt eine Karte je Versionskette mit deren neuester Version in jedem Status; ältere Versionen bekommen keine Karte"
    - "Neue Version auf einer Karte oder im Editor eines exportierten Angebots ersetzt nur dieses Angebot und übernimmt nur dessen Positionen; sie wird nur auf der neuesten Version jeder Kette angeboten"
    - "Eine Position auf zwei offenen Angeboten erscheint auf beiden und zählt in jeder Summe; sie zu deaktivieren entfernt sie aus jedem offenen Angebot"
    - "Die Schaltfläche Angebot in der Projektliste öffnet das eine offene Angebot, öffnet einen neuen Entwurf, wenn es keines gibt, und wird bei mehreren nicht angezeigt"
codeUrl: Server/Offers/OfferChains.cs
bpmn: WZ-offer-chains
adr: [WZ-BDR-21]
status: done
aiContribution:
  en: "The clearest case in this level of the AI misreading what kind of change it was looking at. Reading the code, it reported the old behaviour — creating an offer replaced the open one — as the story's wrong premise and explained it as a bug. I rejected the bug framing: the app had enforced a rule I set myself in Level 1, at most one open offer per project, and that requirement is now superseded. I also overrode two of its proposals: a second offer starting empty (it starts with every offerable position) and the project list's button leading to the project page when several offers are open (it is hidden). At the readiness gate I chose one card per version chain. The block review found that a test for Neue Version on an older chain ran on a single chain, where a wrong rule gives the same answer."
  de: "Der deutlichste Fall in diesem Level, in dem die KI falsch einschätzte, welche Art von Änderung sie vor sich hatte. Beim Lesen des Codes meldete sie das alte Verhalten — ein neues Angebot ersetzte das offene — als falsche Prämisse der Story und erklärte es als Fehler. Diese Einordnung habe ich zurückgewiesen: Die App hatte eine Regel durchgesetzt, die ich selbst in Level 1 festgelegt hatte, höchstens ein offenes Angebot je Projekt, und diese Anforderung ist jetzt abgelöst. Zwei ihrer Vorschläge habe ich außerdem überstimmt: ein zweites Angebot, das leer beginnt (es beginnt mit jeder anbietbaren Position), und die Schaltfläche der Projektliste, die bei mehreren offenen Angeboten zur Projektseite führt (sie wird ausgeblendet). Am Readiness-Gate habe ich eine Karte je Versionskette gewählt. Die Block-Review fand, dass ein Test für Neue Version auf einer älteren Kette nur eine einzige Kette hatte, auf der eine falsche Regel dieselbe Antwort gibt."
introducedIn: WZ-0.4.0
source: docs/user-stories/150-several-open-offers-per-project.md
changes: [WZ-US-12]
---
