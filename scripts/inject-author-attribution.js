#!/usr/bin/env node

/**
 * inject-author-attribution.js
 * 
 * Injects a visible publisher/author attribution block into all educational
 * content pages on bitcoin.rocks. This adds a "Published by bitcoin.rocks"
 * line just above the footer, giving AI engines a visible authorship signal
 * to complement the existing Article JSON-LD author/publisher schema.
 * 
 * Usage: node scripts/inject-author-attribution.js
 * 
 * - Idempotent: safe to run multiple times (skips pages that already have it)
 * - Injects just before <div class="footer"> on each page
 * - Only targets educational content pages (same set as Article schema)
 * - Skips homepage, success pages, 404, sticker-file language pages
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// The attribution HTML block to inject
// Uses Schema.org microdata to reinforce JSON-LD author/publisher
const ATTRIBUTION_BLOCK = `
            <!-- Publisher Attribution for GEO/AI trust signals -->
            <div class="publisher-attribution" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                <div class="container-inner">
                    <p>
                        <span data-i18n="common_published_by">Published by</span>
                        <a href="https://bitcoin.rocks/about" class="orange-link" itemprop="url"><span itemprop="name" data-i18n="common_publisher_name">bitcoin.rocks</span></a>
                        <span class="attribution-divider">&middot;</span>
                        <span data-i18n="common_publisher_since">Bitcoin education since 2022</span>
                        <span class="attribution-divider">&middot;</span>
                        <a href="https://github.com/sovenor/bitcoin-rocks" class="orange-link" target="_blank"><span data-i18n="common_publisher_open_source">Open-source project</span></a>
                    </p>
                </div>
            </div>

`;

// Marker to detect already-injected attribution
const MARKER = 'class="publisher-attribution"';

// Pages to skip (homepage, success pages, 404, sticker-file language variants)
const SKIP_PATTERNS = [
  'index.html',        // homepage (root level only)
  '404.html',
  '-success.html',     // all success/thank-you pages
  'sticker-files/',    // sticker file download pages (except index)
];

/**
 * Determine if a file should be skipped
 */
function shouldSkip(filePath) {
  const relativePath = path.relative(ROOT, filePath);
  const basename = path.basename(filePath);
  const dirName = path.dirname(relativePath);
  
  // Skip homepage (root index.html only)
  if (relativePath === 'index.html') return true;
  
  // Skip 404
  if (basename === '404.html') return true;
  
  // Skip success pages
  if (basename.includes('-success.html') || basename === 'sign-success.html' || basename === 'postcard-success.html') return true;
  
  // Skip sticker-files language variants (but NOT sticker-files/index.html)
  if (relativePath.startsWith('sticker-files/') && relativePath !== 'sticker-files/index.html') return true;
  
  // Must have a <div class="footer"> to inject before
  return false;
}

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
 * Inject the attribution block into an HTML file
 */
function injectAttribution(filePath) {
  const relativePath = path.relative(ROOT, filePath);
  
  // Check if this file should be skipped
  if (shouldSkip(filePath)) {
    return 'skip';
  }
  
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has attribution (idempotent)
  if (html.includes(MARKER)) {
    return 'exists';
  }
  
  // Must have a footer div to inject before
  if (!html.includes('<div class="footer">')) {
    return 'no-footer';
  }
  
  // Must have Article or WebPage schema (educational content pages only)
  if (!html.includes('Article/WebPage Schema') && !html.includes('"@type": "Article"') && !html.includes('"@type": "WebPage"')) {
    return 'no-schema';
  }
  
  // Inject the attribution block just before the footer
  // Find the LAST occurrence of <!-- FOOTER --> or <div class="footer">
  // We look for the footer comment first, then the div
  const footerCommentIndex = html.lastIndexOf('<!-- FOOTER -->');
  const footerDivIndex = html.lastIndexOf('<div class="footer">');
  
  let insertIndex;
  if (footerCommentIndex !== -1) {
    // Insert before the <!-- FOOTER --> comment
    insertIndex = footerCommentIndex;
  } else if (footerDivIndex !== -1) {
    // Insert before the <div class="footer"> directly
    insertIndex = footerDivIndex;
  } else {
    return 'no-footer';
  }
  
  // Find the start of the line (go back to find newline)
  let lineStart = insertIndex;
  while (lineStart > 0 && html[lineStart - 1] !== '\n') {
    lineStart--;
  }
  
  const newHtml = html.substring(0, lineStart) + ATTRIBUTION_BLOCK + html.substring(lineStart);
  
  fs.writeFileSync(filePath, newHtml, 'utf8');
  return 'injected';
}

// Main execution
console.log('🔍 Finding HTML files...\n');

const htmlFiles = findHtmlFiles(ROOT);
console.log(`Found ${htmlFiles.length} HTML files.\n`);

let injected = 0;
let skipped = 0;
let existing = 0;
let noFooter = 0;
let noSchema = 0;

for (const file of htmlFiles) {
  const relativePath = path.relative(ROOT, file);
  const result = injectAttribution(file);
  
  switch (result) {
    case 'injected':
      console.log(`  ✅ Injected: ${relativePath}`);
      injected++;
      break;
    case 'exists':
      existing++;
      break;
    case 'skip':
      skipped++;
      break;
    case 'no-footer':
      noFooter++;
      break;
    case 'no-schema':
      skipped++;
      break;
  }
}

console.log(`\n✨ Done!`);
console.log(`   Injected: ${injected} pages`);
console.log(`   Already had attribution: ${existing} pages`);
console.log(`   Skipped (not educational): ${skipped} pages`);
if (noFooter > 0) console.log(`   No footer found: ${noFooter} pages`);
