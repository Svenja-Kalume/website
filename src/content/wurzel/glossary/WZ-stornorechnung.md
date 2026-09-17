---
term:
  en: "Correction invoice"
  de: "Stornorechnung"
case: wurzel
definition:
  en: "The counter-document that voids a VAT invoice (§ 14c UStG). `InvoiceType = CorrectionInvoice`, born `Exported`, referencing the voided bill via `VoidsInvoiceId`, numbered `<original>-S`. It is **not** produced for a Kleinunternehmer bill — there, cancelling is a pure state flip."
  de: "Das Gegendokument, das eine Rechnung mit Umsatzsteuer aufhebt (§ 14c UStG). `InvoiceType = CorrectionInvoice`, entsteht direkt als exportiert, verweist über `VoidsInvoiceId` auf die stornierte Rechnung, Nummer `<Original>-S`. Für eine Kleinunternehmer-Rechnung wird sie **nicht** erzeugt — dort ist das Stornieren ein reiner Zustandswechsel."
---
