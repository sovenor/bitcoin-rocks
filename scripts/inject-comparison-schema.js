#!/usr/bin/env node

/**
 * inject-comparison-schema.js
 * 
 * Injects comparison-specific JSON-LD structured data into all "Bitcoin vs" pages
 * on bitcoin.rocks. This helps AI engines understand the comparison format, the two
 * items being compared, and the specific criteria being evaluated.
 * 
 * Uses an ItemList schema where each ListItem represents a comparison criterion,
 * making it easy for AI engines to extract and cite individual comparison points.
 * 
 * Usage: node scripts/inject-comparison-schema.js
 * 
 * - Idempotent: safe to run multiple times (replaces existing schema if present)
 * - Injects right before </head>
 * - Only processes bitcoin-vs-*.html files
 * - Extracts comparison points directly from page HTML content
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// All "Bitcoin vs" pages with their compared asset details
const COMPARISON_PAGES = {
  'bitcoin-vs-gold': {
    comparedItem: 'Gold',
    comparedType: 'commodity',
    comparedDescription: 'A precious metal used as money and store of value for thousands of years'
  },
  'bitcoin-vs-stocks': {
    comparedItem: 'Stocks',
    comparedType: 'financial instrument',
    comparedDescription: 'Ownership shares in publicly traded companies'
  },
  'bitcoin-vs-cash': {
    comparedItem: 'Cash',
    comparedType: 'currency',
    comparedDescription: 'Physical government-issued paper money and coins'
  },
  'bitcoin-vs-banks': {
    comparedItem: 'Banks',
    comparedType: 'financial institution',
    comparedDescription: 'Traditional financial institutions that act as intermediaries for money'
  },
  'bitcoin-vs-cbdc': {
    comparedItem: 'CBDCs',
    comparedType: 'digital currency',
    comparedDescription: 'Central Bank Digital Currencies issued and controlled by governments'
  },
  'bitcoin-vs-bonds': {
    comparedItem: 'Bonds',
    comparedType: 'financial instrument',
    comparedDescription: 'Government or corporate debt securities with fixed yields'
  },
  'bitcoin-vs-crypto': {
    comparedItem: 'Crypto',
    comparedType: 'digital asset',
    comparedDescription: 'Other cryptocurrency tokens and blockchain projects beyond Bitcoin'
  },
  'bitcoin-vs-visa': {
    comparedItem: 'Visa',
    comparedType: 'payment network',
    comparedDescription: 'A credit card payment network operated by financial institutions'
  },
  'bitcoin-vs-real-estate': {
    comparedItem: 'Real Estate',
    comparedType: 'property',
    comparedDescription: 'Physical property and land used as investment and store of value'
  },
  'bitcoin-vs-fine-art': {
    comparedItem: 'Fine Art',
    comparedType: 'collectible',
    comparedDescription: 'Physical artwork used as luxury investment and store of value'
  }
};

/**
 * Extract text content from an HTML element, stripping all tags
 */
function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')  // Remove all HTML tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')     // Collapse whitespace
    .trim();
}

/**
 * Extract comparison points from a bitcoin-vs-*.html page.
 * Each vs-container has:
 *   - First small-box: Bitcoin's trait
 *   - Second small-box (small2): Compared asset's trait
 *   - cbdc-box: Explanation paragraph
 */
function extractComparisonPoints(html) {
  const points = [];
  
  // Match each vs-container block
  const vsContainerRegex = /<div class="vs-container">([\s\S]*?)<\/div><!--\/vs-container-->/g;
  let match;
  
  while ((match = vsContainerRegex.exec(html)) !== null) {
    const block = match[1];
    
    // Extract Bitcoin point: first <p> inside first small-box (not small2)
    // The first small-box contains the Bitcoin trait
    const smallBoxes = block.split(/small-box\s+small2/);
    
    let bitcoinPoint = '';
    let assetPoint = '';
    let explanation = '';
    
    // Bitcoin point: in the first small-box <p> tag with data-i18n containing "bitcoin_point"
    const bitcoinPointMatch = block.match(/<div class="small-box">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
    if (bitcoinPointMatch) {
      bitcoinPoint = stripHtml(bitcoinPointMatch[1]);
    }
    
    // Compared asset point: in the small-box small2 <p> tag
    const assetPointMatch = block.match(/<div class="small-box small2">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
    if (assetPointMatch) {
      assetPoint = stripHtml(assetPointMatch[1]);
    }
    
    // Explanation: in the cbdc-box <p class="cbdc-explain"> tag
    const explainMatch = block.match(/<p class="cbdc-explain">([\s\S]*?)<\/p>/);
    if (explainMatch) {
      explanation = stripHtml(explainMatch[1]);
    }
    
    if (bitcoinPoint && assetPoint) {
      points.push({
        bitcoinPoint,
        assetPoint,
        explanation
      });
    }
  }
  
  return points;
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
 * Remove any existing Comparison Schema block from HTML content
 */
function removeExistingSchema(html) {
  const regex = /\n?\s*<!-- Comparison Schema \(JSON-LD\) for GEO\/SEO -->[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  return html.replace(regex, '');
}

/**
 * Build the comparison JSON-LD schema for a page
 */
function buildComparisonSchema(slug, html) {
  const config = COMPARISON_PAGES[slug];
  if (!config) return null;
  
  const description = extractDescription(html);
  const canonical = extractCanonical(html);
  const ogImage = extractOgImage(html);
  const url = canonical || `https://bitcoin.rocks/${slug}`;
  
  const points = extractComparisonPoints(html);
  if (points.length === 0) return null;
  
  // Build the ItemList of comparison criteria
  const listItems = points.map((point, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `Bitcoin: ${point.bitcoinPoint} vs ${config.comparedItem}: ${point.assetPoint}`,
    "description": point.explanation
  }));
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Bitcoin vs ${config.comparedItem} — Key Differences`,
    "description": description || `A detailed comparison of Bitcoin and ${config.comparedItem} across ${points.length} key criteria.`,
    "url": url,
    "numberOfItems": points.length,
    "about": [
      {
        "@type": "Thing",
        "name": "Bitcoin",
        "description": "A decentralized digital money created in 2009 with a fixed supply of 21 million coins",
        "url": "https://bitcoin.rocks"
      },
      {
        "@type": "Thing",
        "name": config.comparedItem,
        "description": config.comparedDescription
      }
    ],
    "itemListElement": listItems
  };
  
  // Add image if available
  if (ogImage) {
    schema.image = ogImage;
  }
  
  return schema;
}

/**
 * Inject the Comparison Schema into an HTML file
 */
function injectSchema(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(ROOT, filePath);
  const slug = relativePath.replace(/\.html$/, '');
  
  // Only process bitcoin-vs-* pages
  if (!COMPARISON_PAGES[slug]) {
    return { status: 'skip', reason: 'not a comparison page' };
  }
  
  // Remove any existing Comparison Schema first (idempotent)
  const cleaned = removeExistingSchema(html);
  
  // Find the </head> tag
  const headCloseIndex = cleaned.indexOf('</head>');
  if (headCloseIndex === -1) {
    return { status: 'skip', reason: 'no </head>' };
  }
  
  // Build the schema
  const schema = buildComparisonSchema(slug, cleaned);
  if (!schema) {
    return { status: 'skip', reason: 'could not extract comparison points' };
  }
  
  const schemaJson = JSON.stringify(schema, null, 6);
  const schemaBlock = `
        <!-- Comparison Schema (JSON-LD) for GEO/SEO -->
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
  return { status: 'injected', points: schema.numberOfItems };
}

// === MAIN ===

console.log('🔍 Finding Bitcoin vs pages for Comparison schema injection...\n');

let injected = 0;
let skipped = 0;
let unchanged = 0;

for (const slug of Object.keys(COMPARISON_PAGES)) {
  const filePath = path.join(ROOT, `${slug}.html`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Not found: ${slug}.html`);
    skipped++;
    continue;
  }
  
  const result = injectSchema(filePath);
  
  switch (result.status) {
    case 'injected':
      console.log(`  ✅ ${slug}.html (${result.points} comparison points)`);
      injected++;
      break;
    case 'skip':
      console.log(`  ⏭️  ${slug}.html — ${result.reason}`);
      skipped++;
      break;
    case 'unchanged':
      console.log(`  ✔️  ${slug}.html (already up to date)`);
      unchanged++;
      break;
  }
}

console.log(`\n✨ Done! Injected Comparison schema into ${injected} files.`);
console.log(`   ${skipped} files skipped, ${unchanged} files unchanged.`);
