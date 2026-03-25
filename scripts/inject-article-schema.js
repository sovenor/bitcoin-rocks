#!/usr/bin/env node

/**
 * inject-article-schema.js
 * 
 * Injects Article or WebPage JSON-LD structured data into educational content pages
 * on bitcoin.rocks. This helps AI engines and search engines understand page content,
 * authorship, and freshness.
 * 
 * Usage: node scripts/inject-article-schema.js
 * 
 * - Idempotent: safe to run multiple times (replaces existing schema if present)
 * - Injects right before </head> (after Organization schema if present)
 * - Skips homepage (has WebSite schema), success pages, and non-content pages
 * - Reads dateModified from English JSON translation files' @metadata.last-updated
 * - Extracts headline from <title>, description from <meta name="description">,
 *   canonical URL from <link rel="canonical">, and image from <meta property="og:image">
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const I18N_EN_DIR = path.join(ROOT, 'i18n', 'en');

// Pages that get Article schema (educational content)
const ARTICLE_SLUGS = new Set([
  'inflation',
  'bank-runs',
  'wallets',
  'lightning',
  'buy',
  'bitcoin-vs-gold',
  'bitcoin-vs-stocks',
  'bitcoin-vs-cash',
  'bitcoin-vs-cbdc',
  'bitcoin-vs-crypto',
  'bitcoin-vs-banks',
  'bitcoin-vs-bonds',
  'bitcoin-vs-visa',
  'bitcoin-vs-real-estate',
  'bitcoin-vs-fine-art',
  'compound-inflation-calculator',
  'get-involved',
  'flyers',
  'stickers',
  'postcards',
  'signs',
  // Business pages
  'business/why',
  'business/faq',
  'business/guide',
  'business/wallets',
  'business/accounting',
  'business/index',
  'business/stickers',
  'business/maps',
  'business/kit',
  // Nostr pages
  'nostr/index',
  'nostr/what-is-nostr',
]);

// Pages to skip entirely (no Article/WebPage schema needed)
const SKIP_PATTERNS = [
  'success',                // all success/thank-you pages
  '404.html',               // error page
  'sticker-files/',         // sticker download pages (dozens of language variants)
  'business/sticker-files/',
  'business/files/',
];

/**
 * Determine if a file should be skipped
 */
function shouldSkip(relativePath) {
  // Skip exact homepage (has WebSite schema already)
  if (relativePath === 'index.html') return true;
  
  for (const pattern of SKIP_PATTERNS) {
    if (relativePath.includes(pattern)) return true;
  }
  return false;
}

/**
 * Get the page slug from a file path (e.g., "inflation.html" → "inflation", "business/wallets.html" → "business/wallets")
 */
function getSlug(relativePath) {
  return relativePath.replace(/\.html$/, '');
}

/**
 * Determine schema type: Article for educational content, WebPage for others
 */
function getSchemaType(slug) {
  if (ARTICLE_SLUGS.has(slug)) return 'Article';
  return 'WebPage';
}

/**
 * Get the corresponding English JSON file path for a given HTML file
 */
function getJsonPath(htmlFilePath) {
  const relative = path.relative(ROOT, htmlFilePath);
  const dir = path.dirname(relative);
  const basename = path.basename(relative, '.html');
  
  let jsonRelative;
  if (dir === '.') {
    jsonRelative = path.join('i18n', 'en', `${basename}_en.json`);
  } else {
    jsonRelative = path.join('i18n', 'en', dir, `${basename}_en.json`);
  }
  
  return path.join(ROOT, jsonRelative);
}

/**
 * Read the last-updated date from an English JSON file's @metadata
 */
function getLastUpdated(jsonPath) {
  try {
    if (!fs.existsSync(jsonPath)) return null;
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (data['@metadata'] && data['@metadata']['last-updated']) {
      return data['@metadata']['last-updated'];
    }
  } catch (e) {
    // Silently ignore parse errors
  }
  return null;
}

/**
 * Extract the <title> text content from HTML (ignoring data-i18n attribute text)
 */
function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (match) return match[1].trim();
  return null;
}

/**
 * Extract <meta name="description" content="..."> value
 */
function extractDescription(html) {
  const match = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
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
 * Extract <meta property="og:image" content="..."> value
 */
function extractOgImage(html) {
  const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  if (match) return match[1].trim();
  return null;
}

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
 * Remove any existing Article/WebPage Schema block from HTML content
 */
function removeExistingSchema(html) {
  const regex = /\n?\s*<!-- Article\/WebPage Schema \(JSON-LD\) for GEO\/SEO -->[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  return html.replace(regex, '');
}

/**
 * Build the Article/WebPage JSON-LD schema for a page
 */
function buildSchema(filePath, html) {
  const relativePath = path.relative(ROOT, filePath);
  const slug = getSlug(relativePath);
  const schemaType = getSchemaType(slug);
  
  const title = extractTitle(html);
  const description = extractDescription(html);
  const canonical = extractCanonical(html);
  const ogImage = extractOgImage(html);
  const jsonPath = getJsonPath(filePath);
  const lastUpdated = getLastUpdated(jsonPath);
  
  if (!title || !description) {
    return null; // Can't build schema without title and description
  }
  
  // Build the canonical URL — fallback to constructing from slug
  const url = canonical || `https://bitcoin.rocks/${slug}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "headline": title,
    "description": description,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "author": {
      "@type": "Organization",
      "name": "bitcoin.rocks",
      "url": "https://bitcoin.rocks"
    },
    "publisher": {
      "@type": "Organization",
      "name": "bitcoin.rocks",
      "url": "https://bitcoin.rocks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitcoin.rocks/img/logos/rocks-logo-color-v2.png"
      }
    },
    "datePublished": "2022-01-01",
    "dateModified": lastUpdated || new Date().toISOString().split('T')[0],
    "inLanguage": "en"
  };
  
  // Add image if available
  if (ogImage) {
    schema.image = ogImage;
  }
  
  return schema;
}

/**
 * Inject the Article/WebPage Schema into an HTML file
 */
function injectSchema(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(ROOT, filePath);
  
  // Check if this page should be skipped
  if (shouldSkip(relativePath)) {
    return { status: 'skip', reason: 'excluded' };
  }
  
  // Remove any existing Article/WebPage Schema first (idempotent)
  const cleaned = removeExistingSchema(html);
  
  // Find the </head> tag
  const headCloseIndex = cleaned.indexOf('</head>');
  if (headCloseIndex === -1) {
    return { status: 'skip', reason: 'no </head>' };
  }
  
  // Build the schema
  const schema = buildSchema(filePath, cleaned);
  if (!schema) {
    return { status: 'skip', reason: 'missing title or description' };
  }
  
  const schemaJson = JSON.stringify(schema, null, 6);
  const schemaBlock = `
        <!-- Article/WebPage Schema (JSON-LD) for GEO/SEO -->
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
  return { status: 'injected', type: schema['@type'] };
}

// === MAIN ===

console.log('🔍 Finding HTML files for Article/WebPage schema injection...\n');

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
      console.log(`  ✅ ${result.type}: ${relativePath}`);
      injected++;
      break;
    case 'skip':
      skipped++;
      break;
    case 'unchanged':
      unchanged++;
      break;
  }
}

console.log(`\n✨ Done! Injected Article/WebPage schema into ${injected} files.`);
console.log(`   ${skipped} files skipped, ${unchanged} files unchanged.`);
