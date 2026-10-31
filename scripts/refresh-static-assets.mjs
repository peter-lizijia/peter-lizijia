import { readFile, mkdir, writeFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('../profile.json', import.meta.url), 'utf8'));
const directory = new URL('../assets/', import.meta.url);
await mkdir(directory, { recursive: true });

async function saveSvg(name, url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const svg = await response.text();
  if (!svg.includes('<svg') || !svg.includes('</svg>') || /<script\b/i.test(svg)) {
    throw new Error(`${name}: invalid SVG response`);
  }
  await writeFile(new URL(name, directory), svg);
  console.log(`Saved ${name}`);
}

for (const [theme, color] of Object.entries(config.colors)) {
  const query = new URLSearchParams({ ...config.typing, lines: config.typing.lines.join(';'), color });
  await saveSvg(`typing-${theme}.svg`, `https://readme-typing-svg.demolab.com/?${query}`);
}

for (const [name, badge] of Object.entries(config.badges)) {
  const label = badge.label.replaceAll('-', '--').replaceAll('_', '__');
  const url = new URL(`https://img.shields.io/badge/${encodeURIComponent(label)}-${badge.color}`);
  url.searchParams.set('style', 'flat');
  if (badge.logo) {
    url.searchParams.set('logo', badge.logo);
    url.searchParams.set('logoColor', 'white');
  }
  await saveSvg(`${name}.svg`, url);
}
