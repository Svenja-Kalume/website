/**
 * Demotes the headings inside an ADR body by two levels.
 *
 * An ADR is written as a standalone document — `## Context`, `## Decision`,
 * `## Consequences` — but it is rendered inside a card, under a topic's `<h2>` and an
 * `<h3>` for the decisions section. At `h2` those three headings sit at the same outline
 * level as a whole topic, so a level page reads to a crawler as six repeats of
 * Context / Decision / Consequences rather than as six decisions inside their topics.
 *
 * Done here, at render time, rather than by editing the ADR files: those are published
 * artifacts, and their Markdown is correct on its own terms. The page they are embedded
 * in is what decides their depth.
 */
const SHIFT = 2;
const toText = (node) =>
  node.type === 'text' ? node.value : (node.children ?? []).map(toText).join('');
const LEVEL = { h1: 1, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6 };

export default function rehypeAdrHeadings() {
  return (tree, file) => {
    const path = (file?.history?.[0] ?? file?.path ?? '').replace(/\\/g, '/');
    if (!/\/adr\/[^/]+$/.test(path)) return;
    const adrId = path.split('/').pop().replace(/\.mdx?$/, '');

    const walk = (node) => {
      if (node.type === 'element' && LEVEL[node.tagName]) {
        node.tagName = `h${Math.min(6, LEVEL[node.tagName] + SHIFT)}`;
        // Six ADRs on one level page would all slug their headings to #context, #decision,
        // #consequences — duplicate ids, which are invalid. Prefixing with the ADR's own id
        // makes them unique, and an id set here stops the slugger from adding its own.
        const text = toText(node).trim().toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
        node.properties = { ...node.properties, id: `${adrId}-${text}` };
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}
