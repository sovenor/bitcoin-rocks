#!/usr/bin/env node

/**
 * inject-organization-schema.js
 * 
 * Injects Organization JSON-LD structured data into all HTML pages on bitcoin.rocks.
 * This establishes entity identity for AI engines and search engines.
 * 
 * Usage: node scripts/inject-organization-schema.js
 * 
 * - Idempotent: safe to run multiple times (replaces existing schema if present)
 * - Injects right before </head> in every HTML file
 * - Skips non-page HTML files (forms-backend views, etc.)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// The Organization JSON-LD schema for bitcoin.rocks
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "bitcoin.rocks",
  "url": "https://bitcoin.rocks",
  "logo": "https://bitcoin.rocks/img/logos/rocks-logo-color-v2.png",
  "foundingDate": "2022",
  "description": "bitcoin.rocks is a Bitcoin education website accelerating Bitcoin adoption through education. It serves as a first link to share with Bitcoin newcomers, covering topics like inflation, self-custody, wallets, and how Bitcoin is building a better world.",
  "email": "hi@bitcoin.rocks",
  "sameAs": [
    "https://github.com/sovenor/bitcoin-rocks",
    "https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hi@bitcoin.rocks",
    "contactType": "customer support"
  },
  "knowsAbout": [
    "Bitcoin",
    "Bitcoin education",
    "Bitcoin wallets",
    "Bitcoin self-custody",
    "Inflation",
    "Lightning Network",
    "Bitcoin vs Gold",
    "Bitcoin for business",
    "Bitcoin stickers",
    "Bitcoin accepted here stickers for businesses",
    "How to accept Bitcoin payments",
    "Bitcoin vs crypto",
    "Bitcoin vs cash",
    "Bitcoin vs bonds",
    "Bitcoin vs CBDCs",
    "Bank runs",
    "Compound inflation calculator",
    "Bitcoin vs stocks",
    "Bitcoin vs banks",
    "Bitcoin vs Visa",
    "Bitcoin vs real estate",
    "Bitcoin vs fine art",
    "Bitcoin mining and energy",
    "Bitcoin and human rights",
    "Bitcoin and freedom",
    "Nostr",
    "Bitcoin adoption",
    "Purchasing power",
    "Bitcoin volatility"
  ]
};

const SCHEMA_JSON = JSON.stringify(ORGANIZATION_SCHEMA, null, 6);

// The full script tag to inject
const SCHEMA_BLOCK = `
        <!-- Organization Schema (JSON-LD) for GEO/SEO -->
        <script type="application/ld+json">
${SCHEMA_JSON.split('\n').map(line => '        ' + line).join('\n')}
        </script>`;

// Marker comments to identify injected schema for idempotent replacement
const MARKER_START = '<!-- Organization Schema (JSON-LD) for GEO/SEO -->';
const MARKER_END_SCRIPT = '</script>';

/**
 * Recursively find all .html files in specified directories
 */
function findHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip directories we don't want to process
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
 * Remove any existing Organization Schema block from HTML content
 */
function removeExistingSchema(html) {
  // Match from the marker comment through the closing </script> tag
  const regex = /\n?\s*<!-- Organization Schema \(JSON-LD\) for GEO\/SEO -->[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  return html.replace(regex, '');
}

/**
 * Inject the Organization Schema into an HTML file
 */
function injectSchema(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Remove any existing Organization Schema first (idempotent)
  const cleaned = removeExistingSchema(html);
  
  // Find the </head> tag and inject before it
  const headCloseIndex = cleaned.indexOf('</head>');
  if (headCloseIndex === -1) {
    console.log(`  SKIP (no </head>): ${path.relative(ROOT, filePath)}`);
    return false;
  }
  
  // Check what's before </head> to determine proper whitespace
  const before = cleaned.substring(0, headCloseIndex);
  const after = cleaned.substring(headCloseIndex);
  
  const newHtml = before + SCHEMA_BLOCK + '\n\n    ' + after;
  
  // Check if anything actually changed
  if (newHtml === html) {
    return false; // No change needed
  }
  
  fs.writeFileSync(filePath, newHtml, 'utf8');
  return true;
}

// Main execution
console.log('🔍 Finding HTML files...\n');

const htmlFiles = findHtmlFiles(ROOT);
console.log(`Found ${htmlFiles.length} HTML files.\n`);

let injected = 0;
let skipped = 0;

for (const file of htmlFiles) {
  const relativePath = path.relative(ROOT, file);
  const changed = injectSchema(file);
  if (changed) {
    console.log(`  ✅ Injected: ${relativePath}`);
    injected++;
  } else {
    skipped++;
  }
}

console.log(`\n✨ Done! Injected Organization schema into ${injected} files. ${skipped} files unchanged.`);
