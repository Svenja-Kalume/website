---
title:
  en: "The Kleinunternehmer toggle clears the rate it makes meaningless"
  de: "Der Kleinunternehmer-Schalter leert den Satz, den er bedeutungslos macht"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "ticking Kleinunternehmer to clear the Standard-MwSt. it makes meaningless, while my Steuernummer stays untouched"
  de: "dass das Setzen von Kleinunternehmer die dadurch bedeutungslose Standard-MwSt. leert, während meine Steuernummer unberührt bleibt"
soThat:
  en: "Einstellungen never holds a tax rate no invoice will use"
  de: "die Einstellungen nie einen Steuersatz halten, den keine Rechnung verwendet"
requirement: WZ-R-12
acceptanceCriteria:
  en:
    - "Ticking **Kleinunternehmer (§ 19 UStG)** empties **Standard-MwSt.** and makes it uneditable the moment the box is ticked, before the page is saved, with a German reason on screen"
    - "**Steuernummer** stays editable and keeps its value whether the flag is on or off"
    - "Unticking it makes the rate editable again and leaves it empty — the previous rate is not restored, so a rate has to be entered before invoices carry VAT again"
    - "Invoices and offers already issued are unaffected: the toggle never changes a document that has been exported"
  de:
    - "Das Setzen von **Kleinunternehmer (§ 19 UStG)** leert **Standard-MwSt.** und macht das Feld unveränderbar, sobald das Häkchen gesetzt ist — vor dem Speichern der Seite, mit einer deutschen Begründung am Bildschirm"
    - "**Steuernummer** bleibt änderbar und behält ihren Wert, ob das Kennzeichen gesetzt ist oder nicht"
    - "Das Entfernen des Häkchens macht den Satz wieder änderbar und lässt ihn leer — der vorherige Satz wird nicht wiederhergestellt, es muss also erst wieder einer eingetragen werden, bevor Rechnungen Umsatzsteuer tragen"
    - "Bereits gestellte Rechnungen und Angebote bleiben unberührt: Der Schalter verändert nie ein exportiertes Dokument"
codeUrl: Client/Settings/CompanySettingsForm.razor
priority: should
status: done
aiContribution:
  en: "The AI proposed remembering the previous rate and restoring it when the flag is unticked, which is the friendlier behaviour and the wrong one. A business that leaves § 19 is a business whose tax situation has changed; silently restoring a rate it had before would put a figure on real invoices that nobody decided on that day. Leaving the field empty forces the decision to be made once, in the open. The distinction the story protects — the rate is cleared, the Steuernummer is not — is the same point in miniature: one of them stops being true, the other does not."
  de: "Die KI schlug vor, den vorherigen Satz zu merken und beim Entfernen des Häkchens wiederherzustellen — das freundlichere Verhalten und das falsche. Ein Betrieb, der § 19 verlässt, ist ein Betrieb mit geänderter Steuersituation; einen früheren Satz still zurückzuholen sähe eine Zahl auf echte Rechnungen setzen, die an diesem Tag niemand entschieden hat. Das Feld leer zu lassen erzwingt die Entscheidung einmal und sichtbar. Die Unterscheidung, die die Story schützt — der Satz wird geleert, die Steuernummer nicht —, ist derselbe Gedanke im Kleinen: Das eine hört auf zu stimmen, das andere nicht."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/126-kleinunternehmer-clears-tax-fields.md
changes: [WZ-US-38]
---
