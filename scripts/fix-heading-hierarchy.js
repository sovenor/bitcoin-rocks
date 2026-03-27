#!/usr/bin/env node
/**
 * fix-heading-hierarchy.js
 *
 * Fixes heading hierarchy across all bitcoin.rocks HTML files.
 * Ensures proper H1 → H2 → H3 → H4 structure for SEO/GEO.
 *
 * Transformations applied:
 * - CTA section: h3 → h2 (.h2-section), h4 → h3 (.h3-item)
 * - Content section h3 → h2 (.h2-section) on inflation, bank-runs, buy, accounting, compound-calc
 * - Homepage: h3 sections → h2, h4 links → h3
 * - Wallet/client names: h6 → h2 (.h2-label) on wallets/lightning
 * - Comparison labels: h6 → h3 (.h3-label) on bitcoin-vs-* pages
 * - Payment methods: h6 → h3 (.h3-label) on buy page
 * - Business wallet categories: h5 → h2 (.h2-category), h6 → h3 (.h3-label)
 * - Business guide: h3.biz-h3 → h2 (no extra class; .biz-h3 handles styling)
 * - Nostr pages: h5 → h3 (.h3-category), h6 → h4 (.h4-label)
 * - Business success pages: swap misplaced h1/h2 order
 *
 * Idempotent: safe to run multiple times (second run produces 0 changes).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let totalChanges = 0;
let filesChanged = 0;

// ─── Helpers ──────────────────────────────────────────────

function findHtmlFiles(dir, results = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip non-content directories
      if (['node_modules', '.git', 'forms-backend', 'memory-bank',
           'jquery', 'scripts', 'css', 'img', 'i18n', '.github'].includes(item)) continue;
      findHtmlFiles(fullPath, results);
    } else if (item.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Add a CSS class to an HTML attributes string.
 * If the class already exists, returns unchanged.
 */
function addClassToAttrs(attrs, cls) {
  if (!attrs) attrs = '';
  const classMatch = attrs.match(/class="([^"]*)"/);
  if (classMatch) {
    const classes = classMatch[1].split(/\s+/).filter(Boolean);
    if (classes.includes(cls)) return attrs; // already present
    return attrs.replace(/class="([^"]*)"/, `class="$1 ${cls}"`);
  } else {
    // Prepend class attribute
    return ` class="${cls}"` + attrs;
  }
}

/** Check if an HTML tag string contains a given CSS class */
function hasClass(tagStr, cls) {
  const m = tagStr.match(/class="([^"]*)"/);
  if (!m) return false;
  return m[1].split(/\s+/).includes(cls);
}

// ─── Generic Converters ──────────────────────────────────

/**
 * Convert all <fromTag> → <toTag>, adding a preservation class.
 * Optionally exclude elements matching excludePattern on their attributes.
 */
function convertAllTag(html, fromTag, toTag, addCls, excludePattern) {
  const regex = new RegExp(
    `<${fromTag}([^>]*)>([\\s\\S]*?)<\\/${fromTag}>`, 'g'
  );
  let count = 0;
  html = html.replace(regex, (match, attrs, content) => {
    if (addCls && hasClass(match, addCls)) return match;         // already converted
    if (excludePattern && excludePattern.test(attrs)) return match; // excluded
    let newAttrs = addCls ? addClassToAttrs(attrs, addCls) : attrs;
    count++;
    return `<${toTag}${newAttrs}>${content}</${toTag}>`;
  });
  return { html, count };
}

/**
 * Convert <fromTag> → <toTag> only for elements whose attributes match a regex.
 */
function convertTagMatching(html, fromTag, toTag, attrPattern, addCls) {
  const regex = new RegExp(
    `<${fromTag}([^>]*)>([\\s\\S]*?)<\\/${fromTag}>`, 'g'
  );
  let count = 0;
  html = html.replace(regex, (match, attrs, content) => {
    if (!attrPattern.test(attrs)) return match;                  // doesn't match
    if (addCls && hasClass(match, addCls)) return match;         // already converted
    let newAttrs = addCls ? addClassToAttrs(attrs, addCls) : attrs;
    count++;
    return `<${toTag}${newAttrs}>${content}</${toTag}>`;
  });
  return { html, count };
}

// ─── File Processor ──────────────────────────────────────

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const original = html;
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
  let changes = 0;
  let r;

  // ════════════════════════════════════════════════════════
  // UNIVERSAL: CTA "Get Started With Bitcoin" section
  // Present on ~20 pages at the bottom
  // h3 (get_started / with_bitcoin) → h2.h2-section
  // h4 (cta titles)                 → h3.h3-item
  // ════════════════════════════════════════════════════════

  r = convertTagMatching(html, 'h3', 'h2',
    /data-i18n="common_cta_section_get_started"/, 'h2-section');
  html = r.html; changes += r.count;

  r = convertTagMatching(html, 'h3', 'h2',
    /data-i18n="common_cta_section_with_bitcoin"/, 'h2-section');
  html = r.html; changes += r.count;

  r = convertTagMatching(html, 'h4', 'h3',
    /data-i18n="common_cta_section_title_/, 'h3-item');
  html = r.html; changes += r.count;

  // ════════════════════════════════════════════════════════
  // HOMEPAGE  (index.html)
  // All remaining h3 section titles → h2.h2-section
  // All remaining h4 link titles    → h3.h3-item
  // ════════════════════════════════════════════════════════

  if (relPath === 'index.html') {
    r = convertAllTag(html, 'h3', 'h2', 'h2-section', /h3-item|h3-label|h3-category/);
    html = r.html; changes += r.count;

    r = convertAllTag(html, 'h4', 'h3', 'h3-item');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // INFLATION & BANK-RUNS
  // All remaining content h3 sections → h2.h2-section
  // (CTA h3s already converted above)
  // ════════════════════════════════════════════════════════

  if (relPath === 'inflation.html' || relPath === 'bank-runs.html') {
    r = convertAllTag(html, 'h3', 'h2', 'h2-section', /h3-item|h3-label|h3-category/);
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BUY PAGE
  // h3 step headers      → h2.h2-section
  // h6 payment methods    → h3.h3-label
  // ════════════════════════════════════════════════════════

  if (relPath === 'buy.html') {
    r = convertAllTag(html, 'h3', 'h2', 'h2-section', /h3-item|h3-label|h3-category/);
    html = r.html; changes += r.count;

    r = convertAllTag(html, 'h6', 'h3', 'h3-label');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // COMPOUND INFLATION CALCULATOR
  // h3 "What can I do about inflation?" → h2.h2-section
  // h4 "Opt Out of Inflation"           → h3.h3-item
  // ════════════════════════════════════════════════════════

  if (relPath === 'compound-inflation-calculator.html') {
    r = convertAllTag(html, 'h3', 'h2', 'h2-section', /h3-item|h3-label|h3-category/);
    html = r.html; changes += r.count;

    r = convertAllTag(html, 'h4', 'h3', 'h3-item');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BUSINESS / ACCOUNTING
  // Content h3 sections → h2.h2-section (NOT biz-h3 items)
  // biz-h3 items stay as h3 (they're under existing h2)
  // ════════════════════════════════════════════════════════

  if (relPath === 'business/accounting.html') {
    r = convertAllTag(html, 'h3', 'h2', 'h2-section', /biz-h3/);
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BUSINESS / GUIDE
  // ALL h3 → h2 (including biz-h3 which sit directly under h1)
  // biz-h3 elements don't get h2-section class (their own class handles styling)
  // Non-biz-h3 elements get h2-section class
  // ════════════════════════════════════════════════════════

  if (relPath === 'business/guide.html') {
    const guideRegex = /<h3([^>]*)>([\s\S]*?)<\/h3>/g;
    html = html.replace(guideRegex, (match, attrs, content) => {
      const isBizH3 = /biz-h3/.test(attrs);
      if (isBizH3) {
        // biz-h3: just change tag, class handles styling
        // Idempotency: this regex only matches h3, so if already h2 it won't match
        changes++;
        return `<h2${attrs}>${content}</h2>`;
      } else {
        if (hasClass(match, 'h2-section')) return match;
        let newAttrs = addClassToAttrs(attrs, 'h2-section');
        changes++;
        return `<h2${newAttrs}>${content}</h2>`;
      }
    });
  }

  // ════════════════════════════════════════════════════════
  // WALLETS & LIGHTNING  (h6 wallet names → h2.h2-label)
  // ════════════════════════════════════════════════════════

  if (relPath === 'wallets.html' || relPath === 'lightning.html') {
    r = convertAllTag(html, 'h6', 'h2', 'h2-label');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BITCOIN-VS-* PAGES  (h6 comparison labels → h3.h3-label)
  // ════════════════════════════════════════════════════════

  if (/^bitcoin-vs-/.test(relPath)) {
    r = convertAllTag(html, 'h6', 'h3', 'h3-label');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BUSINESS / WALLETS
  // h5 wallet categories → h2.h2-category
  // h6 wallet names      → h3.h3-label
  // ════════════════════════════════════════════════════════

  if (relPath === 'business/wallets.html') {
    r = convertAllTag(html, 'h5', 'h2', 'h2-category');
    html = r.html; changes += r.count;

    r = convertAllTag(html, 'h6', 'h3', 'h3-label');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // NOSTR PAGES
  // h5 client categories → h3.h3-category
  // h6 client names      → h4.h4-label
  // ════════════════════════════════════════════════════════

  if (relPath === 'nostr/index.html' || relPath === 'nostr/what-is-nostr.html') {
    r = convertAllTag(html, 'h5', 'h3', 'h3-category');
    html = r.html; changes += r.count;

    r = convertAllTag(html, 'h6', 'h4', 'h4-label');
    html = r.html; changes += r.count;
  }

  // ════════════════════════════════════════════════════════
  // BUSINESS SUCCESS PAGES (fix misplaced h1/h2 order)
  // Current:  h2 "SUCCESS!"  →  h1 "MORE BUSINESS RESOURCES"
  // Fixed:    h1 "SUCCESS!"  →  h2 "MORE BUSINESS RESOURCES"
  // ════════════════════════════════════════════════════════

  const bizSuccessPages = [
    'business/kit-success.html',
    'business/sticker-success.html',
    'business/sticker-language-success.html',
    'business/maps-success.html'
  ];

  if (bizSuccessPages.includes(relPath)) {
    // Idempotency: if h1.h2-stickers already exists, swap was already done
    if (!/<h1[^>]*class="[^"]*h2-stickers/.test(html)) {
      // Step 1: h2 "SUCCESS!" → h1
      const beforeSwap = html;
      html = html.replace(
        /<h2(\s[^>]*class="[^"]*h2-stickers[^>]*)>([\s\S]*?)<\/h2>/,
        '<h1$1>$2</h1>'
      );
      // Step 2: h1 "MORE BUSINESS RESOURCES" → h2
      html = html.replace(
        /<h1(\s[^>]*class="[^"]*h1-inflation[^>]*)>([\s\S]*?)<\/h1>/,
        '<h2$1>$2</h2>'
      );
      if (html !== beforeSwap) {
        changes += 2;
      }
    }
  }

  // ════════════════════════════════════════════════════════
  // WRITE RESULT
  // ════════════════════════════════════════════════════════

  if (html !== original) {
    fs.writeFileSync(filePath, html, 'utf8');
    filesChanged++;
    totalChanges += changes;
    console.log(`  ✅ ${relPath}: ${changes} heading changes`);
  }
}

// ─── Main ────────────────────────────────────────────────

const files = findHtmlFiles(ROOT);
console.log(`\n🔧 Fixing heading hierarchy across ${files.length} HTML files...\n`);

for (const file of files.sort()) {
  processFile(file);
}

console.log(`\n${'═'.repeat(50)}`);
if (totalChanges > 0) {
  console.log(`✅ Done! ${totalChanges} heading changes across ${filesChanged} files.`);
} else {
  console.log(`✅ No changes needed — heading hierarchy is already correct.`);
}
console.log(`${'═'.repeat(50)}\n`);
