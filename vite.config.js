import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { readFileSync } from 'node:fs';

const brandIcon = readFileSync(new URL('./src/assets/burgas-logistics-logo.png', import.meta.url)).toString('base64');
const notices = [
  ['Inter font', 'node_modules/@fontsource-variable/inter/LICENSE'],
  ['Phosphor icons', 'node_modules/@phosphor-icons/core/LICENSE'],
].map(([name, path]) => `${name}\n${readFileSync(new URL(path, import.meta.url), 'utf8')}`).join('\n\n');

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'inline-brand-icon',
      transformIndexHtml() {
        return [
          { tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: `data:image/png;base64,${brandIcon}` }, injectTo: 'head' },
          { tag: 'script', attrs: { type: 'text/plain', id: 'third-party-notices' }, children: notices, injectTo: 'head' },
        ];
      },
    },
    viteSingleFile(),
  ],
  server: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: ['terminal.local'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: ['terminal.local'],
  },
});
