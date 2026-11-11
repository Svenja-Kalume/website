---
title:
  en: "Address suggestions favour the place being typed"
  de: "Adressvorschläge bevorzugen den Ort, der eingegeben wird"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "the address suggestions to offer my customer's real street"
  de: "dass die Adressvorschläge die tatsächliche Straße meines Kunden anbieten"
soThat:
  en: "I don't get suggestions from a city I have no connection to"
  de: "ich keine Vorschläge aus einer Stadt bekomme, mit der ich nichts zu tun habe"
requirement: WZ-R-10
acceptanceCriteria:
  en:
    - "Every address the user types offers suggestions: the customer form, and the different project address on the project form, on an offer started from the customer, and on an invoice started without a project"
    - "A street typed into an address that already holds a PLZ or an Ort suggests matching streets in that place first"
    - "With PLZ and Ort empty, matching streets near the business's address in Einstellungen come first; without a business address, suggestions are as before"
    - "Matching streets elsewhere in Germany can still be suggested, after the nearby ones"
    - "Picking a suggestion fills Straße, PLZ and Ort"
  de:
    - "Jede Adresse, die der Nutzer eingibt, bietet Vorschläge an: das Kundenformular sowie die abweichende Projektadresse im Projektformular, in einem beim Kunden begonnenen Angebot und in einer Schnellrechnung"
    - "Eine Straße, die in eine Adresse mit bereits eingetragener PLZ oder eingetragenem Ort eingegeben wird, schlägt passende Straßen an diesem Ort zuerst vor"
    - "Sind PLZ und Ort leer, kommen passende Straßen in der Nähe der Betriebsadresse aus Einstellungen zuerst; ohne Betriebsadresse bleiben die Vorschläge wie bisher"
    - "Passende Straßen anderswo in Deutschland können weiterhin vorgeschlagen werden, nach denen in der Nähe"
    - "Einen Vorschlag zu wählen füllt Straße, PLZ und Ort"
codeUrl: Server/Addresses/PhotonPlaceLocator.cs
status: done
aiContribution:
  en: "At the readiness gate I widened it from one address form to all four. The walk then found something older than this story: typing a street near my own business suggested nothing. The AI diagnosed it by calling the geocoding service directly and comparing its answer with the test fake. A street without a house number arrives in a shape the code ignored — and the tests stayed green since Level 2 because their fake answered in a shape the real service never sends. A new test now feeds the real answer; it failed before the fix."
  de: "Am Readiness-Gate habe ich sie von einem Adressformular auf alle vier erweitert. Der Durchgang fand dann etwas, das älter ist als diese Story: Eine Straße nahe meinem eigenen Betrieb einzugeben schlug nichts vor. Die KI hat die Ursache gefunden, indem sie den Geocoding-Dienst direkt aufrief und seine Antwort mit der Testattrappe verglich. Eine Straße ohne Hausnummer kommt in einer Form an, die der Code ignorierte — und die Tests blieben seit Level 2 grün, weil ihre Attrappe in einer Form antwortete, die der echte Dienst nie sendet. Ein neuer Test speist jetzt die echte Antwort ein; er schlug vor der Korrektur fehl."
introducedIn: WZ-0.4.0
source: docs/user-stories/095-address-lookup-locality-bias.md
changes: [WZ-US-28]
---
