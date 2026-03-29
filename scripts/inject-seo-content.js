#!/usr/bin/env node

/**
 * inject-seo-content.js
 * 
 * SEO Enhancement Script for bitcoin.rocks
 * 
 * This script injects English default text into all HTML elements that use
 * data-i18n attributes. This ensures web crawlers and search engines can see
 * the actual content in the page source, dramatically improving SEO.
 * 
 * The i18n JavaScript still works as before — it overwrites the default English
 * text with the user's preferred language at runtime.
 * 
 * Usage:
 *   node scripts/inject-seo-content.js
 * 
 * Run this script after updating or adding English JSON translation files.
 * The English JSON files (i18n/en/) remain the single source of truth.
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const I18N_EN_DIR = path.join(PROJECT_ROOT, 'i18n', 'en');

// Load common translations (shared across all pages)
let commonTranslations = {};
const commonPath = path.join(I18N_EN_DIR, 'common_en.json');
if (fs.existsSync(commonPath)) {
  commonTranslations = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
  delete commonTranslations['@metadata'];
}

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip hidden dirs, node_modules, i18n, img, css, jquery, memory-bank, .git
      const skip = ['.git', 'node_modules', 'i18n', 'img', 'css', 'jquery', 'memory-bank', '.DS_Store', 'scripts'];
      if (!skip.includes(item)) {
        findHtmlFiles(fullPath, fileList);
      }
    } else if (item.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

/**
 * Given an HTML file path, determine the corresponding English JSON file path
 * 
 * Examples:
 *   /project/index.html → i18n/en/index_en.json
 *   /project/inflation.html → i18n/en/inflation_en.json
 *   /project/business/wallets.html → i18n/en/business/wallets_en.json
 *   /project/sticker-files/index.html → i18n/en/sticker-files/index_en.json
 *   /project/sticker-files/english/index.html → i18n/en/sticker-files/english/index_en.json
 *   /project/nostr/index.html → i18n/en/nostr/index_en.json
 */
function getJsonPath(htmlFilePath) {
  const relative = path.relative(PROJECT_ROOT, htmlFilePath);
  const dir = path.dirname(relative);
  const basename = path.basename(relative, '.html');
  
  let jsonRelative;
  if (dir === '.') {
    jsonRelative = path.join('i18n', 'en', `${basename}_en.json`);
  } else {
    jsonRelative = path.join('i18n', 'en', dir, `${basename}_en.json`);
  }
  
  return path.join(PROJECT_ROOT, jsonRelative);
}

/**
 * Load page-specific translations
 */
function loadPageTranslations(jsonPath) {
  if (!fs.existsSync(jsonPath)) {
    return {};
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  delete data['@metadata'];
  return data;
}

/**
 * Escape special HTML characters in translation text
 */
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Process a single HTML file: inject English text into data-i18n elements
 */
function processHtmlFile(htmlFilePath) {
  const jsonPath = getJsonPath(htmlFilePath);
  const pageTranslations = loadPageTranslations(jsonPath);
  
  // Merge: page-specific translations override common translations
  const allTranslations = { ...commonTranslations, ...pageTranslations };
  
  let html = fs.readFileSync(htmlFilePath, 'utf8');
  let changeCount = 0;
  let missingKeys = [];
  
  // Pattern 1: Text content elements — empty elements with closing tag
  // Matches: data-i18n="KEY" followed by attributes, then >whitespace</tag>
  // This handles: <h3 data-i18n="key"></h3>, <span data-i18n="key"></span>, etc.
  // Does NOT match attribute translations like [placeholder]key
  html = html.replace(
    /(data-i18n=")((?!\[)[^"]+)("(?:[^>]*)>)\s*(<\/\w+>)/g,
    function(match, prefix, key, middle, closeTag) {
      const translation = allTranslations[key];
      if (translation) {
        changeCount++;
        return prefix + key + middle + escapeHtml(translation) + closeTag;
      } else {
        missingKeys.push(key);
        return match;
      }
    }
  );
  
  // Pattern 2: Attribute translations — e.g., data-i18n="[placeholder]key"
  // Handles cases where the target attribute is AFTER data-i18n, or doesn't exist yet
  html = html.replace(
    /(<[^>]*?)data-i18n="\[(\w+)\]([^"]+)"([^>]*?)(\/?>)/g,
    function(match, beforeI18n, attrName, key, afterI18n, closeTag) {
      const translation = allTranslations[key];
      if (!translation) {
        missingKeys.push(`[${attrName}]${key}`);
        return match;
      }
      
      const escapedTranslation = escapeHtml(translation);
      const attrRegex = new RegExp(`(${attrName}=")([^"]*)(")`);
      const fullTag = beforeI18n + afterI18n;
      
      // Check if attribute exists anywhere in the tag (before or after data-i18n)
      if (attrRegex.test(fullTag)) {
        // Attribute exists — check if it already has the correct value
        const existingMatch = fullTag.match(attrRegex);
        if (existingMatch && existingMatch[2] === escapedTranslation) {
          return match; // Already correct, no change needed
        }
        
        // Update existing attribute
        changeCount++;
        if (attrRegex.test(beforeI18n)) {
          const newBefore = beforeI18n.replace(attrRegex, `$1${escapedTranslation}$3`);
          return `${newBefore}data-i18n="[${attrName}]${key}"${afterI18n}${closeTag}`;
        } else {
          const newAfter = afterI18n.replace(attrRegex, `$1${escapedTranslation}$3`);
          return `${beforeI18n}data-i18n="[${attrName}]${key}"${newAfter}${closeTag}`;
        }
      } else {
        // Attribute doesn't exist — add it before data-i18n
        changeCount++;
        return `${beforeI18n}${attrName}="${escapedTranslation}" data-i18n="[${attrName}]${key}"${afterI18n}${closeTag}`;
      }
    }
  );
  
  // Write the modified HTML back
  fs.writeFileSync(htmlFilePath, html, 'utf8');
  
  return { changeCount, missingKeys };
}

// === MAIN ===

console.log('🔧 inject-seo-content.js — Injecting English defaults for SEO\n');

const htmlFiles = findHtmlFiles(PROJECT_ROOT);
let totalChanges = 0;
let totalMissing = 0;
let filesProcessed = 0;
let filesChanged = 0;

for (const htmlFile of htmlFiles) {
  const relativePath = path.relative(PROJECT_ROOT, htmlFile);
  const { changeCount, missingKeys } = processHtmlFile(htmlFile);
  filesProcessed++;
  
  if (changeCount > 0 || missingKeys.length > 0) {
    filesChanged += changeCount > 0 ? 1 : 0;
    totalChanges += changeCount;
    
    if (changeCount > 0) {
      console.log(`  ✅ ${relativePath} — ${changeCount} translations injected`);
    }
    
    if (missingKeys.length > 0) {
      totalMissing += missingKeys.length;
      // Only show first few missing keys to avoid noise
      const shown = missingKeys.slice(0, 3);
      const more = missingKeys.length - shown.length;
      console.log(`  ⚠️  ${relativePath} — ${missingKeys.length} missing keys: ${shown.join(', ')}${more > 0 ? ` (+${more} more)` : ''}`);
    }
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Files scanned:  ${filesProcessed}`);
console.log(`   Files modified: ${filesChanged}`);
console.log(`   Translations:   ${totalChanges} injected`);
if (totalMissing > 0) {
  console.log(`   Missing keys:   ${totalMissing} (keys in HTML but not found in English JSON)`);
}
console.log(`\n✨ Done! English content is now visible in page source for SEO.`);


// =============================================================================
// PART 2: Generate sitemap.xml and robots.txt
// =============================================================================

const SITE_URL = 'https://bitcoin.rocks';

/**
 * Convert an HTML file path to a clean URL for the sitemap
 * Examples:
 *   index.html → https://bitcoin.rocks/
 *   inflation.html → https://bitcoin.rocks/inflation
 *   business/index.html → https://bitcoin.rocks/business/
 *   business/wallets.html → https://bitcoin.rocks/business/wallets
 *   sticker-files/index.html → https://bitcoin.rocks/sticker-files/
 *   sticker-files/english/index.html → https://bitcoin.rocks/sticker-files/english/
 */
function htmlFileToUrl(htmlFilePath) {
  let relative = path.relative(PROJECT_ROOT, htmlFilePath);
  // Convert backslashes to forward slashes (Windows compat)
  relative = relative.replace(/\\/g, '/');
  
  // Handle index.html files
  if (relative === 'index.html') {
    return SITE_URL + '/';
  }
  if (relative.endsWith('/index.html')) {
    return SITE_URL + '/' + relative.replace('/index.html', '/');
  }
  
  // Remove .html extension for clean URLs
  return SITE_URL + '/' + relative.replace('.html', '');
}

/**
 * Determine sitemap priority for a page
 */
function getPagePriority(relativePath) {
  // Homepage gets highest priority
  if (relativePath === 'index.html') return '1.0';
  
  // Success/thank-you pages get lowest priority (not important for search)
  if (relativePath.includes('success')) return '0.2';
  
  // 404 page — exclude entirely
  if (relativePath === '404.html') return null;
  
  // Main content pages get high priority
  const highPriority = [
    'inflation.html', 'bank-runs.html', 'wallets.html', 'buy.html',
    'lightning.html', 'stickers.html', 'flyers.html', 'signs.html',
    'postcards.html', 'get-involved.html', 'compound-inflation-calculator.html'
  ];
  if (highPriority.includes(relativePath)) return '0.8';
  
  // Bitcoin vs pages
  if (relativePath.startsWith('bitcoin-vs-')) return '0.8';
  
  // Business section main pages
  if (relativePath === 'business/index.html') return '0.8';
  if (relativePath.startsWith('business/') && !relativePath.includes('success') && !relativePath.includes('sticker-files')) return '0.7';
  
  // Nostr pages
  if (relativePath.startsWith('nostr/')) return '0.6';
  
  // Sticker file language pages
  if (relativePath.startsWith('sticker-files/')) return '0.4';
  
  // Default
  return '0.5';
}

/**
 * Get the change frequency hint for a page
 */
function getChangeFreq(relativePath) {
  if (relativePath === 'index.html') return 'weekly';
  if (relativePath.includes('success')) return 'yearly';
  if (relativePath.startsWith('sticker-files/')) return 'monthly';
  return 'monthly';
}

console.log('\n🗺️  Generating sitemap.xml and robots.txt...\n');

// Build sitemap entries from the HTML files we already found
const sitemapEntries = [];
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

for (const htmlFile of htmlFiles) {
  const relativePath = path.relative(PROJECT_ROOT, htmlFile).replace(/\\/g, '/');
  const priority = getPagePriority(relativePath);
  
  // Skip pages with null priority (like 404)
  if (priority === null) continue;
  
  const url = htmlFileToUrl(htmlFile);
  const changefreq = getChangeFreq(relativePath);
  
  sitemapEntries.push({ url, priority, changefreq, lastmod: today });
}

// Sort: highest priority first, then alphabetically
sitemapEntries.sort((a, b) => {
  const priDiff = parseFloat(b.priority) - parseFloat(a.priority);
  if (priDiff !== 0) return priDiff;
  return a.url.localeCompare(b.url);
});

// Generate sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const sitemapPath = path.join(PROJECT_ROOT, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`  ✅ sitemap.xml — ${sitemapEntries.length} URLs`);

// Generate robots.txt
const DISALLOW_DIRS = ['/i18n/', '/jquery/', '/scripts/', '/memory-bank/', '/css/', '/forms-backend/', '/.github/'];
const disallowBlock = DISALLOW_DIRS.map(d => `Disallow: ${d}`).join('\n');

const AI_CRAWLERS = [
  { agent: 'GPTBot',              comment: 'OpenAI (ChatGPT, SearchGPT)', includeDisallow: true },
  { agent: 'ChatGPT-User',        comment: null },
  { agent: 'OAI-SearchBot',       comment: null },
  { agent: 'Google-Extended',     comment: 'Google (Gemini, AI Overviews)' },
  { agent: 'ClaudeBot',           comment: 'Anthropic (Claude)' },
  { agent: 'anthropic-ai',        comment: null },
  { agent: 'PerplexityBot',       comment: 'Perplexity AI' },
  { agent: 'Applebot-Extended',   comment: 'Apple Intelligence' },
  { agent: 'Meta-ExternalAgent',  comment: 'Meta AI' },
  { agent: 'Bingbot',             comment: 'Microsoft/Bing (Copilot)' },
  { agent: 'Amazonbot',           comment: 'Amazon (Alexa, AI)' },
  { agent: 'CCBot',               comment: 'Common Crawl (open dataset used by many AI models)' },
  { agent: 'cohere-ai',           comment: 'Cohere AI' },
  { agent: 'YouBot',              comment: 'You.com AI search' },
  { agent: 'Diffbot',             comment: 'Diffbot (knowledge graph)' },
  { agent: 'Bytespider',          comment: 'ByteDance AI' },
];

let aiCrawlerBlock = '';
for (const crawler of AI_CRAWLERS) {
  if (crawler.comment) {
    aiCrawlerBlock += `# ${crawler.comment}\n`;
  }
  aiCrawlerBlock += `User-agent: ${crawler.agent}\nAllow: /\n`;
  if (crawler.includeDisallow) {
    aiCrawlerBlock += disallowBlock + '\n';
  }
  aiCrawlerBlock += '\n';
}

const robotsTxt = `# robots.txt for bitcoin.rocks
# Bitcoin education website — open-source, MIT-licensed
# We welcome all crawlers, including AI systems

# =============================================================================
# DEFAULT RULES (all crawlers)
# =============================================================================
User-agent: *
Allow: /

# Block non-content directories from all crawlers
${disallowBlock}

# =============================================================================
# AI CRAWLERS — Explicitly Allowed
# =============================================================================
# bitcoin.rocks is a free, open-source Bitcoin education website (MIT License).
# We want AI systems to index, understand, and cite our educational content.
# All AI crawlers are welcome. No restrictions beyond the global Disallow rules.
#
# For AI-optimized content, see:
#   ${SITE_URL}/llms.txt          — Concise site overview
#   ${SITE_URL}/llms-full.txt     — Full educational content in Markdown
# Learn more: https://llmstxt.org/

${aiCrawlerBlock.trimEnd()}

# =============================================================================
# SITEMAP
# =============================================================================
Sitemap: ${SITE_URL}/sitemap.xml
`;

const robotsPath = path.join(PROJECT_ROOT, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
console.log(`  ✅ robots.txt`);

console.log(`\n🎉 All SEO tasks complete!`);
