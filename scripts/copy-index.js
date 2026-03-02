// Post-build: copy index.html into each SPA route directory
// so GitHub Pages serves them with 200 (not 404 via 404.html)
import { cpSync, mkdirSync } from 'fs';

const routes = ['citizenship', 'b1-german', 'eligibility', 'faq'];
const src = 'dist/index.html';

for (const route of routes) {
  const dir = `dist/${route}`;
  mkdirSync(dir, { recursive: true });
  cpSync(src, `${dir}/index.html`);
}

console.log(`Copied index.html to: ${routes.join(', ')}`);
