#!/usr/bin/env node

/**
 * cleanup-sources.js
 * 
 * 1. Removes all inline [N] reference tags (<sup><a class="source-ref">)
 * 2. Removes id="source-N" from source list items
 * 3. Moves sources section above the GET STARTED CTA block
 * 
 * Usage: node scripts/cleanup-sources.js
 */

const fs = require('fs');
const path = require('path');

const FILES = [
  'inflation.html',
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

let totalChanges = 0;

for (const filename of FILES) {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');
  let changes = [];

  // 1. Remove all inline [N] reference tags
  const refPattern = /<sup><a href="#source-\d+" class="source-ref">\[\d+\]<\/a><\/sup>/g;
  const refCount = (html.match(refPattern) || []).length;
  if (refCount > 0) {
    html = html.replace(refPattern, '');
    changes.push(`removed ${refCount} inline refs`);
  }

  // 2. Remove id="source-N" from <li> tags
  const idPattern = /<li id="source-\d+">/g;
  const idCount = (html.match(idPattern) || []).length;
  if (idCount > 0) {
    html = html.replace(idPattern, '<li>');
    changes.push(`removed ${idCount} source IDs`);
  }

  // 3. Move sources section above GET STARTED CTA
  // Extract the sources section HTML
  const sourcesRegex = /\n\s*<!-- Sources Section for GEO\/AI trust signals -->\s*\n\s*<div class="sources-section">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*\n/;
  const sourcesMatch = html.match(sourcesRegex);
  
  if (sourcesMatch) {
    const sourcesHtml = sourcesMatch[0];
    
    // For non-inflation pages: find <!-- GET STARTED --> comment and move sources before it
    // For inflation: sources are outside currency blocks, leave position (it's already after content)
    if (filename !== 'inflation.html') {
      // Remove from current location
      html = html.replace(sourcesRegex, '\n');
      
      // Find the GET STARTED marker
      const getStartedMarker = '<!-- GET STARTED -->';
      const getStartedIdx = html.indexOf(getStartedMarker);
      
      if (getStartedIdx !== -1) {
        // Find the break-micro div just before GET STARTED
        const breakBeforeGetStarted = html.lastIndexOf('<div class="break-micro">', getStartedIdx);
        if (breakBeforeGetStarted !== -1 && (getStartedIdx - breakBeforeGetStarted) < 100) {
          // Insert sources before the break-micro + GET STARTED
          html = html.slice(0, breakBeforeGetStarted) + sourcesHtml + '\n' + html.slice(breakBeforeGetStarted);
          changes.push('moved sources above GET STARTED');
        } else {
          // Insert directly before GET STARTED comment
          html = html.slice(0, getStartedIdx) + sourcesHtml + '\n        ' + html.slice(getStartedIdx);
          changes.push('moved sources above GET STARTED');
        }
      } else {
        // No GET STARTED found, put it back before publisher attribution
        const pubMarker = '<!-- Publisher Attribution';
        const pubIdx = html.indexOf(pubMarker);
        if (pubIdx !== -1) {
          html = html.slice(0, pubIdx) + sourcesHtml + '\n            ' + html.slice(pubIdx);
          changes.push('kept sources before publisher (no GET STARTED found)');
        }
      }
    } else {
      // Inflation page: sources are shared across all currency blocks
      // They're currently between the last country block closing div and publisher attribution
      // This is already the correct position since CTA is inside each currency block
      changes.push('inflation sources position unchanged (already after content)');
    }
  }

  if (changes.length > 0) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`  ${filename}: ${changes.join(', ')}`);
    totalChanges++;
  } else {
    console.log(`  ${filename}: no changes needed`);
  }
}

console.log(`\nCleanup complete: ${totalChanges} files updated.`);
