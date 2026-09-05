/**
 * Generates the social preview images (public/og/<lang>.png), one per locale.
 *
 * Kept as a script with its source in the repo rather than a binary that appeared
 * from nowhere: the image is an artifact, and this is the file it cites. Rerun after
 * changing the site title or subtitle:
 *
 *   node scripts/make-og-image.mjs
 *
 * Rendered with headless Chrome so the page uses the site's own font (Manrope, read
 * straight out of node_modules) and its own palette — rather than a second, drifting
 * definition of what the brand looks like.
 *
 * Motif: the red thread the site is built around. It enters as a tangle — the problem
 * as it arrives — and leaves as an ordered chain of steps. Understanding before solving.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fontDir = pathToFileURL(resolve(root, 'node_modules/@fontsource/manrope/files')).href;
const outDir = resolve(root, 'public/og');
const tmpDir = resolve(root, 'node_modules/.cache/og');

// The palette is src/styles/global.css; kept in sync by hand, which is why it is short.
const C = { bg: '#fcfdfc', title: '#1f2933', muted: '#6b7280', accent: '#1b5e3a', border: '#e5e7eb' };

const locales = {
  en: {
    title: 'Understanding Before Solving',
    subtitle: 'The process is the portfolio — not the result.',
    caption: 'Requirements engineering, AI-assisted — with human judgement at every step.',
  },
  de: {
    title: 'Verstehen kommt vor Lösen',
    subtitle: 'Der Prozess ist das Portfolio — nicht das Ergebnis.',
    caption: 'Requirements Engineering, KI-gestützt — das Urteil bleibt menschlich.',
  },
};

/** The thread: a tangle on the left that resolves into an ordered line of steps. */
const thread = `
  <svg class="thread" width="1200" height="200" viewBox="0 0 1200 200" fill="none">
    <path d="M 96 96 C 150 -6, 258 4, 262 100 C 266 196, 124 200, 128 96
             C 132 14, 244 168, 304 106 C 344 64, 366 96, 420 96 L 1104 96"
          stroke="${C.accent}" stroke-width="4" stroke-linecap="round" opacity=".9"/>
    ${[[606, false], [772, false], [938, false], [1104, true]]
      .map(([x, filled]) =>
        `<circle cx="${x}" cy="96" r="11" fill="${filled ? C.accent : C.bg}" stroke="${C.accent}" stroke-width="4"/>`)
      .join('\n    ')}
  </svg>`;

const page = ({ title, subtitle, caption }) => `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face { font-family: Manrope; font-weight: 400; src: url("${fontDir}/manrope-latin-400-normal.woff2") format("woff2"); }
  @font-face { font-family: Manrope; font-weight: 600; src: url("${fontDir}/manrope-latin-600-normal.woff2") format("woff2"); }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    font-family: Manrope, sans-serif; background: ${C.bg}; color: ${C.title};
    padding: 76px 96px 0; display: flex; flex-direction: column;
    border-top: 10px solid ${C.accent};
  }
  h1 { font-size: 82px; font-weight: 600; line-height: 1.1; letter-spacing: -.02em; }
  .subtitle { font-size: 34px; color: ${C.muted}; margin-top: 26px; }
  .thread { margin: 42px -96px 0; }
  footer {
    margin-top: auto; padding: 22px 0 30px; border-top: 1px solid ${C.border};
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 22px; color: ${C.muted}; white-space: nowrap; gap: 24px;
  }
  footer .domain { color: ${C.accent}; font-weight: 600; }
</style>
<h1>${title}</h1>
<p class="subtitle">${subtitle}</p>
${thread}
<footer><span>${caption}</span><span class="domain">svenjakalume.dev</span></footer>
`;

const chrome = process.env.CHROME ?? 'google-chrome';
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const [lang, text] of Object.entries(locales)) {
  const html = resolve(tmpDir, `${lang}.html`);
  writeFileSync(html, page(text));
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${resolve(outDir, `${lang}.png`)}`,
    pathToFileURL(html).href,
  ], { stdio: 'inherit' });
  console.log(`public/og/${lang}.png`);
}

rmSync(tmpDir, { recursive: true, force: true });
