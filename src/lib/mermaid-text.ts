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

// A shape sits on the same line as its id -- `[ \t]*`, never `\s*`, between the two.
// With `\s*` the gap swallows a line break, so `Offen --> Geschlossen` followed by
// `Geschlossen --> [*]` reads as the shape `Geschlossen[*]` and the state is labelled
// "*" from there on. Every German state diagram hit this, because the declaration lines
// above it put an id at the end of the line before a `[*]`.
/** `id["Label"]` and the other shapes, quoted — the common case in this site's diagrams. */
const QUOTED = /([A-Za-z_][\w-]*)[ \t]*(?:\[\[|\[\(|\[|\(\(|\(|\{\{|\{|>)\s*"([^"\n]+)"/g;
/** The same without quotes. A label may not span lines, which keeps class bodies out. */
const UNQUOTED = /([A-Za-z_][\w-]*)[ \t]*(?:\[\[|\[\(|\[|\(\(|\(|\{\{|\{|>)\s*([^"\n\]})]+?)\s*(?:\]\]|\)\]|\]|\)\)|\)|\}\}|\})/g;

/** A state diagram's own way of naming a state: `state "In Bearbeitung" as InBearbeitung`. */
const STATE_ALIAS = /^[ \t]*state[ \t]+"([^"\n]+)"[ \t]+as[ \t]+([A-Za-z_][\w-]*)/gm;
/** `note right of Closed : read-only` — what the diagram says ABOUT a node, not between two. */
const NOTE = /^[ \t]*note[ \t]+(?:right|left|top|bottom)[ \t]+of[ \t]+([A-Za-z_][\w-]*)[ \t]*:[ \t]*(.+)$/gm;

/** The label of one arrow endpoint: its own text, a label defined elsewhere, or its id. */
function endpointLabel(token: string, labels: Map<string, string>): string | undefined {
  const raw = token.trim();
  if (!raw || raw === '[*]') return undefined;

  for (const re of [QUOTED, UNQUOTED]) {
    re.lastIndex = 0;
    const m = re.exec(raw);
    // A /g regex remembers where it stopped, and matchAll starts its scan from that same
    // position -- so a match left here would make the NEXT diagram's label pass skip its
    // first nodes and read out bare ids. Wind it back before leaving, on both paths.
    re.lastIndex = 0;
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
  // `state "In Bearbeitung" as InBearbeitung` — a state diagram declares a label the id
  // cannot hold. Read last, so the declared name wins over the id it was invented for.
  for (const [, label, id] of code.matchAll(STATE_ALIAS)) labels.set(id, label.trim());
  // A note is the one thing on the page that has no arrow, so nothing else would carry it:
  // `note right of Closed : read-only` is what makes Closed a read-only state. Kept apart
  // from the labels and added the first time its node is named, so a state that appears in
  // three paths does not repeat its note three times.
  const notes = new Map<string, string>();
  for (const [, id, text] of code.matchAll(NOTE)) notes.set(labels.get(id) ?? id, text.trim());

  // Pass two: the edges, as `from → to` pairs. A line may already chain several nodes
  // (`A --> B --> C`), and the note it carries belongs to its last hop, as before.
  type Hop = { from: string; to: string; note?: string };
  const hops: Hop[] = [];
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
    for (let i = 1; i < chain.length; i++)
      hops.push({ from: chain[i - 1], to: chain[i], note: i === chain.length - 1 ? note : undefined });
  }
  if (!hops.length) return undefined;

  // Pass three: walk the hops into paths. Naming every edge on its own repeats each node
  // twice — "A → B; B → C; C → D" — which is the same picture read out at double length,
  // and a listener has to hold each label to notice it is the one they just heard. A hop
  // that starts where the last one ended continues the path instead; a hop that starts
  // somewhere else is a branch, and only branches begin a new sentence.
  // A node is named with its note the first time it is reached, and plainly after that.
  const named = new Set<string>();
  const name = (label: string) => {
    const note = !named.has(label) ? notes.get(label) : undefined;
    named.add(label);
    return note ? `${label} (${note})` : label;
  };
  // What the arrow is called goes BETWEEN the two nodes, where the diagram draws it:
  // "Acceptance criteria met? → no → Shared contracts" is the branch the reader followed.
  // Trailing it after the target instead ("… → Shared contracts (no)") attaches the answer
  // to the wrong end -- it reads as a remark about the target rather than the way there.
  const arrow = (note?: string) => (note ? ` → ${note} → ` : ' → ');
  const paths: string[] = [];
  let current = '';
  let tip: string | undefined;
  for (const h of hops) {
    if (h.from === tip) {
      current += `${arrow(h.note)}${name(h.to)}`;
    } else {
      if (current) paths.push(current);
      current = `${name(h.from)}${arrow(h.note)}${name(h.to)}`;
    }
    tip = h.to;
  }
  if (current) paths.push(current);

  return `${paths.join('; ')}.`;
}
