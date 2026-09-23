/**
 * The inline markup a prose field is allowed to carry: `code` and *emphasis*.
 *
 * A locale-keyed field is a string, not a Markdown file, so nothing renders it — and an
 * ADR's reasoning names types, fields and regexes, which read as prose without the code
 * span and as noise with a literal backtick around them. Bold is deliberately NOT supported —
 * a bold run inside a paragraph is a voice this site does not use. Block structure stays out
 * too: a paragraph is one array entry, so the field shape already carries it.
 *
 * Escaping runs FIRST and the markers are converted afterwards, so the output is safe to
 * pass to `set:html` for content the site itself authors.
 */
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inlineMarkdown(text: string): string {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
