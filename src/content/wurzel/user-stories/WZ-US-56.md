---
title:
  en: "An in-progress position edit survives the project’s autosave"
  de: "Eine begonnene Positionsbearbeitung überlebt das Autosave des Projekts"
case: wurzel
asA:
  en: "a landscaping business owner"
  de: "GaLaBau-Betriebsinhaber"
iWant:
  en: "a position row I am still typing in to survive the project’s autosave"
  de: "dass eine Positionszeile, in der ich noch tippe, das Autosave des Projekts überlebt"
soThat:
  en: "the table never resets and discards what I was in the middle of writing"
  de: "die Tabelle sich nie zurücksetzt und wegwirft, was ich gerade schrieb"
requirement: WZ-R-15
acceptanceCriteria:
  en:
    - "Typing in a position row while an unrelated field’s autosave fires does not reset the table or discard the in-progress edit"
    - "An invalid or not-yet-committed row stays on screen with its validation state and is left out of the save; the save carries the committed rows"
    - "A row switched off with **Deaktivieren** is still sent, carrying its last reconciled non-blank description rather than the blank on screen — sending the blank would fail model validation and block the whole save, not just that row"
    - "A held-back row is visibly marked, the autosave status stops reading “Gespeichert” while any row is held back, and leaving the page prompts as for any other unsaved edit"
    - "A row whose quantity or unit price is a deliberately typed `0` is held back rather than saved — the same gate that already applies when adding a new row"
    - "Positions the server actually changed are still reflected after a save; the fix does not stop the client learning about server-side changes"
  de:
    - "Das Tippen in einer Positionszeile, während das Autosave eines anderen Feldes auslöst, setzt die Tabelle nicht zurück und verwirft die begonnene Änderung nicht"
    - "Eine ungültige oder noch nicht bestätigte Zeile bleibt mit ihrem Validierungszustand am Bildschirm und wird vom Speichern ausgelassen; gespeichert werden die bestätigten Zeilen"
    - "Eine mit **Deaktivieren** abgeschaltete Zeile wird dennoch gesendet und trägt ihre letzte abgeglichene, nicht leere Beschreibung statt der leeren am Bildschirm — die leere zu senden würde die Modellvalidierung verletzen und das gesamte Speichern blockieren, nicht nur diese Zeile"
    - "Eine zurückgehaltene Zeile ist sichtbar gekennzeichnet, der Autosave-Status sagt nicht mehr „Gespeichert“, solange eine Zeile zurückgehalten wird, und das Verlassen der Seite fragt nach wie bei jeder anderen ungespeicherten Änderung"
    - "Eine Zeile, deren Menge oder Einzelpreis eine bewusst getippte `0` ist, wird zurückgehalten statt gespeichert — dieselbe Schranke, die beim Hinzufügen einer neuen Zeile schon gilt"
    - "Vom Server tatsächlich geänderte Positionen erscheinen nach dem Speichern weiterhin; die Korrektur nimmt dem Client nicht die Möglichkeit, von serverseitigen Änderungen zu erfahren"
codeUrl: Client/Components/Autosave/AutosaveController.cs
adr: [WZ-ADR-012]
priority: must
status: done
aiContribution:
  en: "The first proposed fix was to stop the table reconciling during a save, and the AI itself found what that would break: the client would also stop learning about the positions the server had changed. The criterion about the deactivated row came out of the same review and is the kind of detail a specification usually loses — a blank description on a switched-off row is legal on screen but fails model validation on the wire, so sending it would have blocked the entire save rather than that one row. Holding back a row and sending a reconciled one are two different mechanisms, and the story had to say which applies where."
  de: "Der erste Korrekturvorschlag war, den Abgleich der Tabelle während des Speicherns auszusetzen — und die KI fand selbst, was das zerstört hätte: Der Client hätte auch nichts mehr von den Positionen erfahren, die der Server geändert hat. Das Kriterium zur deaktivierten Zeile stammt aus derselben Durchsicht und ist die Sorte Detail, die eine Spezifikation sonst verliert — eine leere Beschreibung auf einer abgeschalteten Zeile ist am Bildschirm zulässig, verletzt aber die Modellvalidierung auf der Leitung, sie zu senden hätte also das gesamte Speichern blockiert statt nur diese Zeile. Eine Zeile zurückzuhalten und eine abgeglichene zu senden sind zwei verschiedene Mechanismen, und die Story musste sagen, welcher wo gilt."
introducedIn: WZ-0.3.0-level-4
source: docs/user-stories/123-project-autosave-preserves-position-edit.md
---
