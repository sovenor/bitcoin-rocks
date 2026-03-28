#!/usr/bin/env node

/**
 * inject-reviewed-badge.js
 * 
 * Injects a "Reviewed for accuracy: 2026" line at the TOP of the
 * publisher-attribution block on all educational content pages.
 * 
 * This signals editorial rigor to AI engines without using "Last Updated" dates
 * which can backfire on evergreen content by making it look stale.
 * 
 * Usage: node scripts/inject-reviewed-badge.js
 * 
 * - Idempotent: safe to run multiple times (skips files that already have the badge)
 * - Targets only pages that have the publisher-attribution block
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Marker to detect if already injected
const MARKER = 'common_reviewed_accuracy';

/**
 * Recursively find all .html files
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
 * Inject the reviewed badge at the top of a publisher-attribution block
 */
function injectBadge(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Skip if no publisher-attribution block
  if (!html.includes('publisher-attribution')) {
    return 'skip-no-attribution';
  }
  
  // Skip if already has the reviewed badge (idempotent)
  if (html.includes(MARKER)) {
    return 'skip-already-present';
  }
  
  // Insert the badge at the top of the <p> inside publisher-attribution,
  // right before the "Published by" span
  const pattern = /(class="publisher-attribution"[^>]*>\s*<div class="container-inner">\s*<p>)\s*\n(\s*)(<span data-i18n="common_published_by")/;
  
  if (!pattern.test(html)) {
    return 'skip-pattern-not-found';
  }
  
  html = html.replace(pattern, 
    '$1\n$2<span class="reviewed-badge" data-i18n="common_reviewed_accuracy">\u2713 Reviewed for accuracy: 2026</span>\n$2<br />\n$2$3'
  );
  
  fs.writeFileSync(filePath, html, 'utf8');
  return 'injected';
}

// Main execution
console.log('\uD83D\uDD0D Finding HTML files with publisher-attribution blocks...\n');

const htmlFiles = findHtmlFiles(ROOT);
let injected = 0;
let skippedNoAttr = 0;
let skippedPresent = 0;
let skippedPattern = 0;

for (const file of htmlFiles) {
  const relativePath = path.relative(ROOT, file);
  const result = injectBadge(file);
  
  switch (result) {
    case 'injected':
      console.log(`  \u2705 Injected: ${relativePath}`);
      injected++;
      break;
    case 'skip-no-attribution':
      skippedNoAttr++;
      break;
    case 'skip-already-present':
      skippedPresent++;
      break;
    case 'skip-pattern-not-found':
      console.log(`  \u26A0\uFE0F  Pattern not found: ${relativePath}`);
      skippedPattern++;
      break;
  }
}

console.log(`\n\u2728 Done!`);
console.log(`  Injected: ${injected} files`);
console.log(`  Already present: ${skippedPresent} files`);
console.log(`  No attribution block: ${skippedNoAttr} files`);
if (skippedPattern > 0) {
  console.log(`  \u26A0\uFE0F  Pattern not matched: ${skippedPattern} files`);
}
