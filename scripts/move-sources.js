#!/usr/bin/env node

/**
 * move-sources.js
 * 
 * Moves the sources section from after the GET STARTED CTA to before it,
 * so it appears immediately after the content.
 * 
 * Usage: node scripts/move-sources.js
 */

const fs = require('fs');
const path = require('path');

// Non-inflation pages where sources need to move above GET STARTED
const FILES = [
  'bank-runs.html',
  'bitcoin-vs-gold.html',
  'bitcoin-vs-stocks.html',
  'bitcoin-vs-bonds.html',
  'bitcoin-vs-cash.html',
  'bitcoin-vs-cbdc.html',
  'bitcoin-vs-crypto.html',
  'bitcoin-vs-fine-art.html',
  'bitcoin-vs-real-estate.html',
  'bitcoin-vs-visa.html',
  'bitcoin-vs-banks.html',
];

let moved = 0;

for (const filename of FILES) {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // Find the sources section start and end
  const sourcesStart = html.indexOf('<!-- Sources Section for GEO/AI trust signals -->');
  if (sourcesStart === -1) {
    console.log(`  ${filename}: no sources section found`);
    continue;
  }

  // Find the end of the sources section (closing </div> of .sources-section)
  // The structure is: <div class="sources-section"><div class="container-inner">...<ol>...</ol></div></div>
  const sourcesClassStart = html.indexOf('<div class="sources-section">', sourcesStart);
  if (sourcesClassStart === -1) continue;

  // Count opening/closing divs to find the end
  let depth = 0;
  let pos = sourcesClassStart;
  let sourcesEnd = -1;
  while (pos < html.length) {
    const nextOpen = html.indexOf('<div', pos);
    const nextClose = html.indexOf('</div>', pos);
    
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else if (nextClose !== -1) {
      depth--;
      if (depth === 0) {
        sourcesEnd = nextClose + 6; // length of '</div>'
        break;
      }
      pos = nextClose + 6;
    } else {
      break;
    }
  }

  if (sourcesEnd === -1) {
    console.log(`  ${filename}: could not find sources section end`);
    continue;
  }

  // Find the GET STARTED comment
  const getStartedIdx = html.indexOf('<!-- GET STARTED -->');
  if (getStartedIdx === -1) {
    console.log(`  ${filename}: no GET STARTED found`);
    continue;
  }

  // Only move if sources is AFTER GET STARTED (needs to be moved up)
  if (sourcesStart <= getStartedIdx) {
    console.log(`  ${filename}: sources already above GET STARTED`);
    continue;
  }

  // Extract the full sources section (including the comment line before it)
  // Find the start of the line containing the comment
  let lineStart = sourcesStart;
  while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
  
  // Find the end including any trailing whitespace/newlines
  let lineEnd = sourcesEnd;
  while (lineEnd < html.length && (html[lineEnd] === '\n' || html[lineEnd] === '\r' || html[lineEnd] === ' ')) lineEnd++;

  const sourcesBlock = html.slice(lineStart, lineEnd);

  // Remove from current position
  html = html.slice(0, lineStart) + html.slice(lineEnd);

  // Re-find GET STARTED position (it may have shifted)
  const newGetStartedIdx = html.indexOf('<!-- GET STARTED -->');
  if (newGetStartedIdx === -1) {
    console.log(`  ${filename}: GET STARTED disappeared after removal`);
    continue;
  }

  // Find the break-micro before GET STARTED
  const breakBeforeGS = html.lastIndexOf('<div class="break-micro">', newGetStartedIdx);
  let insertPos;
  if (breakBeforeGS !== -1 && (newGetStartedIdx - breakBeforeGS) < 100) {
    // Find the start of that break-micro line
    let bLineStart = breakBeforeGS;
    while (bLineStart > 0 && html[bLineStart - 1] !== '\n') bLineStart--;
    insertPos = bLineStart;
  } else {
    // Find the start of the GET STARTED line
    let gsLineStart = newGetStartedIdx;
    while (gsLineStart > 0 && html[gsLineStart - 1] !== '\n') gsLineStart--;
    insertPos = gsLineStart;
  }

  // Insert sources before GET STARTED
  html = html.slice(0, insertPos) + sourcesBlock + '\n' + html.slice(insertPos);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  ${filename}: moved sources above GET STARTED`);
  moved++;
}

console.log(`\nMoved sources on ${moved} pages.`);
