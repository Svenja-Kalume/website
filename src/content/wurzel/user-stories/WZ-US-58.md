---
title:
  en: "Every validation message looks the same and marks the field"
  de: "Jede Validierungsmeldung sieht gleich aus und markiert das Feld"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "every validation message to look the same and mark the offending field"
  de: "dass jede Validierungsmeldung gleich aussieht und das betroffene Feld markiert"
soThat:
  en: "I can see at a glance what needs correcting"
  de: "ich auf einen Blick sehe, was zu korrigieren ist"
requirement: WZ-R-17
acceptanceCriteria:
  en:
    - "Validation messages use one presentation across every form in the app — the one the styling foundation fixed"
    - "An invalid input is visually marked, consistently, wherever validation fires"
    - "The invoice editor’s service-period message matches that presentation"
    - "Every form that renders a validation message is checked against it, and each one is either already consistent or brought into line"
    - "No third-party component library is introduced; the shared controls stay hand-rolled"
  de:
    - "Validierungsmeldungen erscheinen in einer einzigen Darstellung in jedem Formular der Anwendung — der, die die Styling-Grundlage festgelegt hat"
    - "Eine ungültige Eingabe wird einheitlich sichtbar markiert, wo immer die Validierung greift"
    - "Die Leistungszeitraum-Meldung im Rechnungseditor entspricht dieser Darstellung"
    - "Jedes Formular, das eine Validierungsmeldung rendert, wird dagegen geprüft und ist entweder bereits einheitlich oder wird angeglichen"
    - "Es wird keine fremde Komponentenbibliothek eingeführt; die gemeinsamen Bedienelemente bleiben selbst gebaut"
priority: should
status: done
aiContribution:
  en: "The AI proposed reaching for a component library, which would have made this story small and the app’s look someone else’s. I declined: the shared controls are hand-rolled on purpose, and a dependency taken to save an afternoon on message styling is one the app then carries through every later level. The criterion forbidding it is in the story so the trade-off is on the record rather than in a conversation."
  de: "Die KI schlug vor, zu einer Komponentenbibliothek zu greifen — das hätte diese Story klein gemacht und das Erscheinungsbild der Anwendung zu dem einer anderen. Ich habe abgelehnt: Die gemeinsamen Bedienelemente sind bewusst selbst gebaut, und eine Abhängigkeit, die einen Nachmittag Meldungs-Styling spart, trägt die Anwendung danach durch jedes weitere Level. Das Kriterium, das es verbietet, steht in der Story, damit die Abwägung aktenkundig ist und nicht nur ein Gespräch war."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/125-validation-messages-render-consistently.md
---
