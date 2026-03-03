// Post-build: copy index.html into each SPA route directory
// with unique meta tags per route for SEO
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const BASE_URL = 'https://www.neuheim.blog';

const routeMeta = {
  citizenship: {
    title: 'Einbürgerungstest Practice — 300+ Questions | German Citizenship Prep',
    description: 'Practice all 300 official Einbürgerungstest questions plus 160 state-specific questions. Timed exam simulation, English translations, and progress tracking — free.',
    keepFaqSchema: false,
  },
  'b1-german': {
    title: 'B1 German Exam Prep — 3,000+ Flashcards | German Citizenship Prep',
    description: 'Prepare for the Goethe or telc B1 German exam with 3,000+ vocabulary flashcards, exam practice, study plans, and grammar cheat sheets — free.',
    keepFaqSchema: false,
  },
  eligibility: {
    title: 'German Citizenship Eligibility Check | German Citizenship Prep',
    description: 'Check if you qualify for German citizenship. Free 10-question assessment covering residency, language, and legal requirements under German nationality law.',
    keepFaqSchema: false,
  },
  faq: {
    title: 'German Citizenship FAQ — 50 Official Questions | German Citizenship Prep',
    description: '50 frequently asked questions about German citizenship from official government sources — eligibility, application process, the naturalisation test, and the 2024 law reform.',
    keepFaqSchema: true,
  },
};

const src = 'dist/index.html';
const template = readFileSync(src, 'utf-8');

for (const [route, meta] of Object.entries(routeMeta)) {
  const url = `${BASE_URL}/${route}/`;
  let html = template;

  // 1. <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // 2. <meta name="description">
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${meta.description}" />`,
  );

  // 3. <link rel="canonical">
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );

  // 4. <meta property="og:url">
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );

  // 5. <meta property="og:title">
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${meta.title}" />`,
  );

  // 6. <meta property="og:description">
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${meta.description}" />`,
  );

  // 7. <meta name="twitter:title">
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${meta.title}" />`,
  );

  // 8. <meta name="twitter:description">
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${meta.description}" />`,
  );

  // Remove FAQ structured data from routes that don't need it
  if (!meta.keepFaqSchema) {
    html = html.replace(
      /\s*<!-- FAQ Structured Data -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      '',
    );
  }

  const dir = `dist/${route}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
}

console.log(`Generated route-specific index.html for: ${Object.keys(routeMeta).join(', ')}`);
