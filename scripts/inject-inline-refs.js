#!/usr/bin/env node

/**
 * inject-inline-refs.js
 * 
 * Adds footnote-style inline reference numbers [1], [2], etc. next to data claims
 * and adds id attributes to source list items so clicking scrolls to the source.
 * 
 * Idempotent: Safe to run multiple times — skips pages that already have refs.
 * 
 * Usage: node scripts/inject-inline-refs.js
 */

const fs = require('fs');
const path = require('path');

// Define inline references for each page
// Each entry: { sourceNum, searchText, position: 'after' } 
// sourceNum = 1-based index matching the <ol> sources list
// searchText = unique text near the data claim (we insert the ref AFTER this text)
const PAGE_REFS = {
  'inflation.html': [
    // USD FRED link — already has <a> tag, add ref after the closing </a>
    { sourceNum: 1, searchText: 'fred.stlouisfed.org/series/M1SL', afterTag: '</a>' },
    // International currency claims all use FRED International [2] — just mark the first occurrence in each visible section
    { sourceNum: 2, searchText: 'fred.stlouisfed.org/series/MANMM101CAM189S', afterTag: '</a>' },
    // BLS CPI — "lost 90% of their purchasing power since 1950"
    { sourceNum: 3, searchText: 'lost 90% of their purchasing power since 1950', afterText: true },
    // Mempool — "More than 95% of all bitcoin have already been mined"
    { sourceNum: 4, searchText: 'More than 95% of all bitcoin have already been mined.', afterText: true },
    // Bitcoin Source Code — "21,000,000 (21 million) bitcoin that will ever exist"
    { sourceNum: 5, searchText: 'The 21 million supply limit is fixed in code', afterText: true },
  ],
  'bank-runs.html': [
    // FDIC insurance fund [1]
    { sourceNum: 1, searchText: 'insurance fund with 125 billion dollars', afterText: true },
    // SVB collapse [2]  
    { sourceNum: 2, searchText: 'a run on Silicon Valley Bank in March of 2023', afterTag: '</a>' },
    // 10 trillion deposits [3]
    { sourceNum: 3, searchText: 'almost 10 trillion or 10,000 billion dollars', afterTag: '</a>' },
    // Fractional reserve [4]
    { sourceNum: 4, searchText: 'fractional reserve', afterText: true, firstOnly: true },
    // 1% of deposits [1]
    { sourceNum: 1, searchText: 'cover a little more than 1% of deposits', afterTag: '</p>' },
  ],
  'bitcoin-vs-gold.html': [
    // Gold supply 1.6% [1]
    { sourceNum: 1, searchText: '1.6% per year</a>', afterTag: '</a>' },
    // 21 Million BTC [4]
    { sourceNum: 4, searchText: '21 Million BTC that will ever exist.', afterText: true },
  ],
  'bitcoin-vs-stocks.html': [
    // 21 million BTC [2]
    { sourceNum: 2, searchText: '21 million BTC that will ever exist.', afterText: true },
    // Diluting shareholders [3]
    { sourceNum: 3, searchText: 'diluting existing shareholders', afterText: true },
  ],
  'bitcoin-vs-bonds.html': [
    // Treasury auctions [1]
    { sourceNum: 1, searchText: 'weak demand for 10-year bonds in 2022 and 30-year bonds in 2023</a>', afterTag: '</a>' },
    // SVB [2]
    { sourceNum: 2, searchText: 'Silicon Valley Bank got stuck holding bonds', afterText: true },
  ],
  'bitcoin-vs-cash.html': [
    // India demonetization [1]
    { sourceNum: 1, searchText: 'India did in 2016 when they banned certain banknotes</a>', afterTag: '</a>' },
  ],
  'bitcoin-vs-cbdc.html': [
    // CBDC tracker [1]
    { sourceNum: 1, searchText: 'Central Bank Digital Currency (CBDC)', afterText: true, firstOnly: true },
  ],
  'bitcoin-vs-crypto.html': [
    // Proof of Work [1]
    { sourceNum: 1, searchText: 'Proof of Work consensus</a>', afterTag: '</a>' },
    // Nodes [3]
    { sourceNum: 3, searchText: 'tens of thousands of independent nodes worldwide', afterText: true },
  ],
  'bitcoin-vs-fine-art.html': [
    // Christie's buyer premium [1]
    { sourceNum: 1, searchText: "10-25%)", afterText: true, firstOnly: true },
    // Sotheby's seller commission [2]
    { sourceNum: 2, searchText: "10-15%)", afterText: true, firstOnly: true },
  ],
  'bitcoin-vs-real-estate.html': [
    // 100 million satoshis [2]
    { sourceNum: 2, searchText: '100 million smaller units called satoshis', afterText: true },
  ],
  'bitcoin-vs-visa.html': [
    // 3% merchant fee [1]
    { sourceNum: 1, searchText: '3% per transaction</a>', afterTag: '</a>' },
    // 25% interest [2]
    { sourceNum: 2, searchText: 'exceeding 25% annually</a>', afterTag: '</a>' },
  ],
  'bitcoin-vs-banks.html': [
    // Permissionless [3]
    { sourceNum: 3, searchText: 'Peer-to-Peer Electronic Cash System', afterText: true, firstOnly: true },
  ],
};

function makeRefTag(sourceNum) {
  return `<sup><a href="#source-${sourceNum}" class="source-ref">[${sourceNum}]</a></sup>`;
}

let totalPages = 0;
let totalRefs = 0;

for (const [filename, refs] of Object.entries(PAGE_REFS)) {
  const filePath = path.join(__dirname, '..', filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`  Warning: File not found: ${filename}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if already has inline refs (idempotent)
  if (html.includes('class="source-ref"')) {
    console.log(`  Skip: ${filename} (already has inline refs)`);
    continue;
  }

  let pageRefs = 0;

  // Step 1: Add id attributes to source list items
  // Find: <li><a href="..." ... Replace first N <li> in the sources-list with <li id="source-N">
  const sourcesMatch = html.match(/<ol class="sources-list">([\s\S]*?)<\/ol>/);
  if (sourcesMatch) {
    let sourcesContent = sourcesMatch[1];
    let liIndex = 0;
    sourcesContent = sourcesContent.replace(/<li>/g, () => {
      liIndex++;
      return `<li id="source-${liIndex}">`;
    });
    html = html.replace(sourcesMatch[1], sourcesContent);
  }

  // Step 2: Add inline reference numbers next to data claims
  for (const ref of refs) {
    const refTag = makeRefTag(ref.sourceNum);
    
    if (ref.afterTag) {
      // Insert ref after a specific closing tag that follows the search text
      const idx = html.indexOf(ref.searchText);
      if (idx !== -1) {
        // Find the closing tag after the search text
        const afterIdx = html.indexOf(ref.afterTag, idx);
        if (afterIdx !== -1) {
          const insertPos = afterIdx + ref.afterTag.length;
          html = html.slice(0, insertPos) + refTag + html.slice(insertPos);
          pageRefs++;
        }
      }
    } else if (ref.afterText) {
      // Insert ref right after the search text
      const searchIdx = ref.firstOnly ? html.indexOf(ref.searchText) : html.indexOf(ref.searchText);
      if (searchIdx !== -1) {
        const insertPos = searchIdx + ref.searchText.length;
        html = html.slice(0, insertPos) + refTag + html.slice(insertPos);
        pageRefs++;
      }
    }
  }

  if (pageRefs > 0) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`  Added ${pageRefs} inline refs to: ${filename}`);
    totalPages++;
    totalRefs += pageRefs;
  } else {
    console.log(`  No refs added to: ${filename}`);
  }
}

console.log(`\nInline refs complete: ${totalRefs} references added across ${totalPages} pages.`);
