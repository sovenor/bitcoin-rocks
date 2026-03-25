#!/usr/bin/env node

/**
 * inject-breadcrumb-schema.js
 * 
 * Injects BreadcrumbList JSON-LD structured data into all content pages on bitcoin.rocks.
 * This helps AI engines and search engines understand the site hierarchy.
 * 
 * Hierarchy:
 *   - Root pages:     Home > Page Title
 *   - Business pages: Home > Bitcoin for Business > Page Title
 *   - Nostr pages:    Home > Nostr > Page Title
 *   - Sticker files:  Home > Bitcoin Stickers > Sticker Files
 * 
 * Usage: node scripts/inject-breadcrumb-schema.js
 * 
 * - Idempotent: safe to run multiple times (replaces existing schema if present)
 * - Injects right before </head>
 * - Skips homepage, success pages, 404, and sticker-file language pages
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Pages to skip entirely
const SKIP_PATTERNS = [
  'success',                    // all success/thank-you pages
  '404.html',                   // error page
  'business/files/',            // business file downloads
  'business/sticker-files/',    // business sticker file downloads
];

// Marker comment for idempotent replacement
const MARKER = '<!-- BreadcrumbList Schema (JSON-LD) for GEO/SEO -->';

/**
 * Recursively find all .html files in specified directories
 */
function findHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const skip = ['node_modules', '.git', 'forms-backend', 'jquery', 'css', 'img', 'memory-bank', 'scripts', '.github', 'i18n'];
      if (!skip.includes(entry.name)) {
        findHtmlFiles(fullPath, files);
      }
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Determine if a file should be skipped
 */
function shouldSkip(relativePath) {
  // Skip homepage (it's the root — no breadcrumb needed)
  if (relativePath === 'index.html') return true;

  for (const pattern of SKIP_PATTERNS) {
    if (relativePath.includes(pattern)) return true;
  }

  // Skip sticker-files/[language]/index.html (dozens of language variant pages)
  if (relativePath.startsWith('sticker-files/') && relativePath !== 'sticker-files/index.html') {
    return true;
  }

  return false;
}

/**
 * Extract the <title> text content from HTML
 */
function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (match) return match[1].trim();
  return null;
}

/**
 * Extract <link rel="canonical" href="..."> value
 */
function extractCanonical(html) {
  const match = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (match) return match[1].trim();
  return null;
}

/**
 * Build breadcrumb items for a given page.
 * Returns an array of { name, url } objects representing the trail.
 */
function buildBreadcrumbTrail(relativePath, html) {
  const title = extractTitle(html);
  if (!title) return null;

  const canonical = extractCanonical(html);
  const slug = relativePath.replace(/\.html$/, '').replace(/\/index$/, '');
  const pageUrl = canonical || `https://bitcoin.rocks/${slug}`;

  const trail = [
    { name: 'Home', url: 'https://bitcoin.rocks' }
  ];

  // Determine parent section
  if (relativePath.startsWith('business/')) {
    // Business subsection: Home > Bitcoin for Business > Page
    // If this IS the business index, just 2 levels
    if (relativePath === 'business/index.html') {
      trail.push({ name: 'Bitcoin for Business', url: pageUrl });
    } else {
      trail.push({ name: 'Bitcoin for Business', url: 'https://bitcoin.rocks/business' });
      trail.push({ name: title, url: pageUrl });
    }
  } else if (relativePath.startsWith('nostr/')) {
    // Nostr subsection: Home > Nostr > Page
    if (relativePath === 'nostr/index.html') {
      trail.push({ name: 'Nostr', url: pageUrl });
    } else {
      trail.push({ name: 'Nostr', url: 'https://bitcoin.rocks/nostr' });
      trail.push({ name: title, url: pageUrl });
    }
  } else if (relativePath.startsWith('sticker-files/')) {
    // Sticker files section: Home > Bitcoin Stickers > Sticker Files
    trail.push({ name: 'Bitcoin Stickers', url: 'https://bitcoin.rocks/stickers' });
    trail.push({ name: 'Sticker Files: All Languages', url: pageUrl });
  } else {
    // Root-level pages: Home > Page Title
    trail.push({ name: title, url: pageUrl });
  }

  return trail;
}

/**
 * Build the BreadcrumbList JSON-LD schema from a trail
 */
function buildSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": trail.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Remove any existing BreadcrumbList Schema block from HTML content
 */
function removeExistingSchema(html) {
  const regex = /\n?\s*<!-- BreadcrumbList Schema \(JSON-LD\) for GEO\/SEO -->[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  return html.replace(regex, '');
}

/**
 * Inject the BreadcrumbList Schema into an HTML file
 */
function injectSchema(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(ROOT, filePath);

  // Check if this page should be skipped
  if (shouldSkip(relativePath)) {
    return { status: 'skip', reason: 'excluded' };
  }

  // Remove any existing BreadcrumbList Schema first (idempotent)
  const cleaned = removeExistingSchema(html);

  // Find the </head> tag
  const headCloseIndex = cleaned.indexOf('</head>');
  if (headCloseIndex === -1) {
    return { status: 'skip', reason: 'no </head>' };
  }

  // Build the breadcrumb trail
  const trail = buildBreadcrumbTrail(relativePath, cleaned);
  if (!trail) {
    return { status: 'skip', reason: 'missing title' };
  }

  // Build the schema
  const schema = buildSchema(trail);
  const schemaJson = JSON.stringify(schema, null, 6);
  const schemaBlock = `
        ${MARKER}
        <script type="application/ld+json">
${schemaJson.split('\n').map(line => '        ' + line).join('\n')}
        </script>`;

  // Insert before </head>
  const before = cleaned.substring(0, headCloseIndex);
  const after = cleaned.substring(headCloseIndex);

  const newHtml = before + schemaBlock + '\n\n    ' + after;

  // Check if anything actually changed
  if (newHtml === html) {
    return { status: 'unchanged' };
  }

  fs.writeFileSync(filePath, newHtml, 'utf8');
  return { status: 'injected', levels: trail.length };
}

// === MAIN ===

console.log('🔍 Finding HTML files for BreadcrumbList schema injection...\n');

const htmlFiles = findHtmlFiles(ROOT);
console.log(`Found ${htmlFiles.length} HTML files.\n`);

let injected = 0;
let skipped = 0;
let unchanged = 0;

for (const file of htmlFiles) {
  const relativePath = path.relative(ROOT, file);
  const result = injectSchema(file);

  switch (result.status) {
    case 'injected':
      console.log(`  ✅ Injected (${result.levels}-level): ${relativePath}`);
      injected++;
      break;
    case 'skip':
      break;
    case 'unchanged':
      unchanged++;
      break;
  }
  if (result.status === 'skip') skipped++;
}

console.log(`\n✨ Done! Injected BreadcrumbList schema into ${injected} files.`);
console.log(`   ${skipped} files skipped, ${unchanged} files unchanged.`);
