#!/usr/bin/env node

/**
 * inject-sources-section.js
 * 
 * Injects a "Sources" reference section into data-heavy educational pages.
 * Places the section just before the publisher-attribution div.
 * 
 * Idempotent: Safe to run multiple times — skips pages that already have sources.
 * 
 * Usage: node scripts/inject-sources-section.js
 */

const fs = require('fs');
const path = require('path');

// Define sources for each page
const PAGE_SOURCES = {
  'inflation.html': [
    { name: 'Federal Reserve Economic Data (FRED) — M1 Money Supply (U.S. Dollar)', url: 'https://fred.stlouisfed.org/series/M1SL' },
    { name: 'Federal Reserve Economic Data (FRED) — Narrow Money Supply (International)', url: 'https://fred.stlouisfed.org/categories/234' },
    { name: 'U.S. Bureau of Labor Statistics — Consumer Price Index', url: 'https://www.bls.gov/cpi/' },
    { name: 'Mempool.space — Bitcoin Supply & Mining Data', url: 'https://mempool.space' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
  ],
  'bank-runs.html': [
    { name: 'FDIC — Statistics at a Glance (Deposit Insurance Fund)', url: 'https://www.fdic.gov/analysis/quarterly-banking-profile/statistics-at-a-glance' },
    { name: 'FDIC — Press Release: Silicon Valley Bank, Santa Clara, California (March 10, 2023)', url: 'https://www.fdic.gov/news/press-releases/2023/pr23016.html' },
    { name: 'FDIC — Quarterly Banking Profile (Insured Deposits)', url: 'https://www.fdic.gov/analysis/quarterly-banking-profile' },
    { name: 'Federal Reserve — Fractional Reserve Banking', url: 'https://www.federalreserve.gov/monetarypolicy/reservereq.htm' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
  ],
  'bitcoin-vs-gold.html': [
    { name: 'World Gold Council — Gold Supply & Demand Data', url: 'https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics' },
    { name: 'Bitnodes — Bitcoin Network Node Count', url: 'https://bitnodes.io/nodes/all/' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
  ],
  'bitcoin-vs-stocks.html': [
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
    { name: 'U.S. Securities and Exchange Commission — Stock Dilution', url: 'https://www.sec.gov/newsroom/press-releases/2014-248' },
  ],
  'bitcoin-vs-bonds.html': [
    { name: 'U.S. Department of the Treasury — Treasury Auction Results', url: 'https://www.treasurydirect.gov/auctions/results/' },
    { name: 'FDIC — Press Release: Silicon Valley Bank Failure (March 2023)', url: 'https://www.fdic.gov/news/press-releases/2023/pr23016.html' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
  ],
  'bitcoin-vs-cash.html': [
    { name: 'Reserve Bank of India — Withdrawal of ₹500 and ₹1000 Banknotes (November 8, 2016)', url: 'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=10698' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
  ],
  'bitcoin-vs-cbdc.html': [
    { name: 'Atlantic Council — Central Bank Digital Currency (CBDC) Tracker', url: 'https://www.atlanticcouncil.org/cbdctracker/' },
    { name: 'Bank for International Settlements — CBDC Research', url: 'https://www.bis.org/topic/cbdc.htm' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitnodes — Bitcoin Network Node Count', url: 'https://bitnodes.io/nodes/all/' },
  ],
  'bitcoin-vs-crypto.html': [
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — Protocol & Consensus Rules', url: 'https://github.com/bitcoin/bitcoin' },
    { name: 'Bitnodes — Bitcoin Network Node Count', url: 'https://bitnodes.io/nodes/all/' },
    { name: 'Cambridge Centre for Alternative Finance — Bitcoin Network Power Demand', url: 'https://ccaf.io/cbnsi/cbeci' },
  ],
  'bitcoin-vs-fine-art.html': [
    { name: "Christie's — Buyer's Premium Schedule", url: 'https://www.christies.com/en/help/buying-guide-important-information/financial-information' },
    { name: "Sotheby's — Buyer's Premium & Charges", url: 'https://help.sothebys.com/en/support/solutions/articles/44002686902-what-is-a-buyer-s-premium-' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
  ],
  'bitcoin-vs-real-estate.html': [
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitcoin Source Code — 21 Million Supply Cap', url: 'https://github.com/bitcoin/bitcoin' },
    { name: 'Bitnodes — Bitcoin Network Node Count', url: 'https://bitnodes.io/nodes/all/' },
  ],
  'bitcoin-vs-visa.html': [
    { name: 'Visa — Interchange Rates & Fees', url: 'https://usa.visa.com/support/small-business/regulations-fees.html' },
    { name: 'Federal Reserve — Report on the Economic Well-Being of U.S. Households (Credit Card Rates)', url: 'https://www.federalreserve.gov/publications/report-economic-well-being-us-households.htm' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
  ],
  'bitcoin-vs-banks.html': [
    { name: 'Federal Reserve — About the Federal Reserve System', url: 'https://www.federalreserve.gov/aboutthefed.htm' },
    { name: 'FDIC — Deposit Insurance', url: 'https://www.fdic.gov/resources/deposit-insurance/' },
    { name: 'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)', url: 'https://bitcoin.org/bitcoin.pdf' },
    { name: 'Bitnodes — Bitcoin Network Node Count', url: 'https://bitnodes.io/nodes/all/' },
  ],
};

function generateSourcesHTML(sources) {
  const sourceItems = sources.map((source, index) => {
    return `                        <li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.name}</a></li>`;
  }).join('\n');

  return `
            <!-- Sources Section for GEO/AI trust signals -->
            <div class="sources-section">
                <div class="container-inner">
                    <h2 class="sources-heading" data-i18n="common_sources_heading">Sources</h2>
                    <ol class="sources-list">
${sourceItems}
                    </ol>
                </div>
            </div>
`;
}

let totalInjected = 0;
let totalSkipped = 0;

for (const [filename, sources] of Object.entries(PAGE_SOURCES)) {
  const filePath = path.join(__dirname, '..', filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${filename}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if already injected (idempotent)
  if (html.includes('class="sources-section"')) {
    console.log(`  ⏭️  Already has sources: ${filename}`);
    totalSkipped++;
    continue;
  }

  // Find the insertion point: just before publisher-attribution
  const publisherMarker = '<!-- Publisher Attribution for GEO/AI trust signals -->';
  const insertIndex = html.indexOf(publisherMarker);

  if (insertIndex === -1) {
    // Try alternative: look for class="publisher-attribution"
    const altMarker = '<div class="publisher-attribution"';
    const altIndex = html.indexOf(altMarker);
    if (altIndex === -1) {
      console.log(`  ⚠️  No publisher-attribution found in: ${filename}`);
      continue;
    }
    // Insert before this div
    const sourcesHTML = generateSourcesHTML(sources);
    html = html.slice(0, altIndex) + sourcesHTML + '\n            ' + html.slice(altIndex);
  } else {
    // Insert before the comment
    const sourcesHTML = generateSourcesHTML(sources);
    html = html.slice(0, insertIndex) + sourcesHTML + '\n            ' + html.slice(insertIndex);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  ✅  Injected ${sources.length} sources into: ${filename}`);
  totalInjected++;
}

console.log(`\n📊 Sources injection complete: ${totalInjected} pages updated, ${totalSkipped} already had sources.`);
