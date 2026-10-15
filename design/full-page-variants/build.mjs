import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const directory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(directory, '../..');
const output = path.join(root, 'preview/full-page-variants');
await mkdir(output, { recursive: true });
const base = await readFile(path.join(root, 'dist/index.html'), 'utf8');
const shared = await readFile(path.join(directory, 'common.css'), 'utf8');
const port = (await readFile(path.join(root, 'src/assets/port-sunset.webp'))).toString('base64');
for (const number of [1, 2, 3]) {
  const css = await readFile(path.join(directory, `option-${number}.css`), 'utf8');
  const html = base.replace('<html', `<html data-design-option="${number}"`)
    .replace(/<title>.*?<\/title>/s, `<title>Burgas Logistics — Full design ${number}</title>`)
    .replace('</head>', `<style id="full-page-design">:root{--variant-port:url(data:image/webp;base64,${port})}\n${shared}\n${css}</style></head>`);
  await writeFile(path.join(output, `option-${number}.html`), html);
}
await writeFile(path.join(output, 'index.html'), await readFile(path.join(directory, 'chooser.html')));
console.log('Built three self-contained full-page design candidates.');
