/**
 * Rasterises public/favicon.svg into the PNG sizes that SVG favicons do not cover:
 * apple-touch-icon (iOS home screen) and the two manifest icons.
 *
 *   node scripts/make-icons.mjs
 *
 * Rerun after changing the favicon. Same approach as scripts/make-og-image.mjs — headless
 * Chrome, so there is one renderer for every image the site ships and no extra dependency.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(resolve(root, 'public/favicon.svg'), 'utf8');
const outDir = resolve(root, 'public/icons');
const tmpDir = resolve(root, 'node_modules/.cache/icons');
const chrome = process.env.CHROME ?? 'google-chrome';

// iOS ignores transparency and composites on black, so the tile stays opaque.
const sizes = { 'apple-touch-icon': 180, 'icon-192': 192, 'icon-512': 512 };

mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const [name, size] of Object.entries(sizes)) {
  const html = resolve(tmpDir, `${name}.html`);
  writeFileSync(html, `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;width:${size}px;height:${size}px;background:#fcfdfc}
svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
  execFileSync(chrome, [
    '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--window-size=${size},${size}`,
    `--screenshot=${resolve(outDir, `${name}.png`)}`,
    pathToFileURL(html).href,
  ], { stdio: 'inherit' });
  console.log(`public/icons/${name}.png (${size}px)`);
}

rmSync(tmpDir, { recursive: true, force: true });
