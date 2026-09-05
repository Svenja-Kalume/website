/**
 * A text description of a Mermaid diagram, DERIVED from the diagram itself.
 *
 * The diagrams render client-side, so a crawler — and a screen reader — gets the source
 * and nothing else. This turns the source into a sentence: the node labels in the order
 * the arrows connect them.
 *
 * Deliberately mechanical. It reads the labels that are already there and never invents
 * a description of what a diagram "means"; a diagram that deserves prose gets a written
 * `caption`, and this fills the gap where none exists.
 *
 * Supports the arrow-based kinds this site uses (flowchart, stateDiagram, classDiagram)
 * and returns undefined for anything else, rather than guessing.
 */

const KINDS = /^(?:flowchart|graph|stateDiagram(?:-v2)?|classDiagram)\b/;
const ARROW = /\s*(?:<?-{2,3}>?|-\.->?|-\.-|={2,3}>|\.{2}>|\*--|o--|--\*|--o)\s*/;
const EDGE_LABEL = /\|\s*"?([^"|]+?)"?\s*\|/g;
const SKIP = /^(?:%%|subgraph\b|end\b|direction\b|style\b|classDef\b|click\b|linkStyle\b|note\b|state\b)/;

/** `id["Label"]` and the other shapes, quoted — the common case in this site's diagrams. */
const QUOTED = /([A-Za-z_][\w-]*)\s*(?:\[\[|\[\(|\[|\(\(|\(|\{\{|\{|>)\s*"([^"\n]+)"/g;
/** The same without quotes. A label may not span lines, which keeps class bodies out. */
const UNQUOTED = /([A-Za-z_][\w-]*)\s*(?:\[\[|\[\(|\[|\(\(|\(|\{\{|\{|>)\s*([^"\n\]})]+?)\s*(?:\]\]|\)\]|\]|\)\)|\)|\}\}|\})/g;

/** The label of one arrow endpoint: its own text, a label defined elsewhere, or its id. */
function endpointLabel(token: string, labels: Map<string, string>): string | undefined {
  const raw = token.trim();
  if (!raw || raw === '[*]') return undefined;

  for (const re of [QUOTED, UNQUOTED]) {
    re.lastIndex = 0;
    const m = re.exec(raw);
    if (m) return m[2].trim();
  }
  // Class-diagram cardinalities (`Customer "1"`) are not part of the name.
  const id = raw.replace(/"[^"]*"/g, ' ').trim().split(/\s+/)[0];
  if (!/^[A-Za-z_][\w-]*$/.test(id)) return undefined;
  return labels.get(id) ?? id;
}

export function describeMermaid(code: string): string | undefined {
  const lines = code.split('\n').map((l) => l.trim());
  const header = lines.find(Boolean);
  if (!header || !KINDS.test(header)) return undefined;

  // Pass one: every id that carries a label anywhere, so a bare id later still reads.
  const labels = new Map<string, string>();
  for (const [, id, label] of code.matchAll(UNQUOTED)) labels.set(id, label.trim());
  for (const [, id, label] of code.matchAll(QUOTED)) labels.set(id, label.trim());

  const steps: string[] = [];
  let depth = 0; // inside a `class X { … }` body there are members, not edges
  for (const line of lines.slice(lines.indexOf(header) + 1)) {
    depth += (line.match(/\{/g)?.length ?? 0) - (line.match(/\}/g)?.length ?? 0);
    if (!line || depth > 0 || SKIP.test(line) || !ARROW.test(line)) continue;

    // `A --> B : owns` in state and class diagrams, `A -->|owns| B` in flowcharts.
    const [flow, tail] = line.split(/\s+:\s+/, 2);
    const edgeLabels = [...flow.matchAll(EDGE_LABEL)].map((m) => m[1].trim());
    const chain = flow
      .replace(EDGE_LABEL, ' ')
      .split(ARROW)
      .map((part) => endpointLabel(part, labels))
      .filter((l): l is string => Boolean(l));
    if (chain.length < 2) continue;

    const note = tail?.trim() || edgeLabels.join(', ');
    steps.push(chain.join(' → ') + (note ? ` (${note})` : ''));
  }

  return steps.length ? `${steps.join('; ')}.` : undefined;
}
