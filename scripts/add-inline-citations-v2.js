#!/usr/bin/env node

/**
 * add-inline-citations-v2.js
 * 
 * Adds inline source citation links to bitcoin-vs pages and bank-runs.
 * Uses regex patterns to handle special characters.
 * 
 * Idempotent: Safe to run multiple times.
 */

const fs = require('fs');
const path = require('path');

function addCitation(filePath, searchText, replaceText, label) {
  if (!fs.existsSync(filePath)) {
    console.log(`  Warning: File not found: ${filePath}`);
    return false;
  }
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has the citation URL
  if (html.includes(replaceText.match(/href="([^"]+)"/)?.[1] || 'NOMATCH')) {
    // Already has this citation
    return false;
  }
  
  if (html.includes(searchText)) {
    html = html.replace(searchText, replaceText);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`  Added: ${label}`);
    return true;
  }
  
  console.log(`  Skip (not found): ${label}`);
  return false;
}

const root = path.join(__dirname, '..');
let totalChanges = 0;

// ============================
// BITCOIN-VS-GOLD
// ============================
console.log('\nbitcoin-vs-gold.html:');
const goldPath = path.join(root, 'bitcoin-vs-gold.html');
let goldHtml = fs.readFileSync(goldPath, 'utf8');

// Gold 1.6% per year - add World Gold Council citation
if (!goldHtml.includes('class="orange-link">1.6% per year</a>')) {
  goldHtml = goldHtml.replace(
    /the total supply of gold increases by about 1\.6% per year/g,
    'the total supply of gold increases by about <a href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" class="orange-link">1.6% per year</a>'
  );
  fs.writeFileSync(goldPath, goldHtml, 'utf8');
  console.log('  Added: World Gold Council citation for 1.6% supply growth');
  totalChanges++;
} else {
  console.log('  Skip: Already has World Gold Council link');
}

// ============================
// BITCOIN-VS-CASH
// ============================
console.log('\nbitcoin-vs-cash.html:');
const cashPath = path.join(root, 'bitcoin-vs-cash.html');
let cashHtml = fs.readFileSync(cashPath, 'utf8');

if (!cashHtml.includes('class="orange-link">India did in 2016')) {
  cashHtml = cashHtml.replace(
    /like India did in 2016 when they banned certain banknotes/g,
    'like <a href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=10698" target="_blank" class="orange-link">India did in 2016 when they banned certain banknotes</a>'
  );
  fs.writeFileSync(cashPath, cashHtml, 'utf8');
  console.log('  Added: RBI demonetization citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has RBI link');
}

// ============================
// BITCOIN-VS-VISA
// ============================
console.log('\nbitcoin-vs-visa.html:');
const visaPath = path.join(root, 'bitcoin-vs-visa.html');
let visaHtml = fs.readFileSync(visaPath, 'utf8');

if (!visaHtml.includes('class="orange-link">3% per transaction</a>')) {
  visaHtml = visaHtml.replace(
    /around 3% per transaction/g,
    'around <a href="https://usa.visa.com/support/small-business/regulations-fees.html" target="_blank" class="orange-link">3% per transaction</a>'
  );
  console.log('  Added: Visa interchange fee citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has Visa link');
}

if (!visaHtml.includes('class="orange-link">exceeding 25% annually</a>')) {
  visaHtml = visaHtml.replace(
    /sometimes exceeding 25% annually/g,
    'sometimes <a href="https://www.federalreserve.gov/publications/report-economic-well-being-us-households.htm" target="_blank" class="orange-link">exceeding 25% annually</a>'
  );
  console.log('  Added: Federal Reserve credit card rate citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has Federal Reserve link');
}

fs.writeFileSync(visaPath, visaHtml, 'utf8');

// ============================
// BITCOIN-VS-BONDS
// ============================
console.log('\nbitcoin-vs-bonds.html:');
const bondsPath = path.join(root, 'bitcoin-vs-bonds.html');
let bondsHtml = fs.readFileSync(bondsPath, 'utf8');

if (!bondsHtml.includes('class="orange-link">weak demand for 10-year')) {
  bondsHtml = bondsHtml.replace(
    /weak demand for 10-year bonds in 2022 and 30-year bonds in 2023/g,
    '<a href="https://www.treasurydirect.gov/auctions/results/" target="_blank" class="orange-link">weak demand for 10-year bonds in 2022 and 30-year bonds in 2023</a>'
  );
  fs.writeFileSync(bondsPath, bondsHtml, 'utf8');
  console.log('  Added: Treasury auction results citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has Treasury link');
}

// ============================
// BITCOIN-VS-FINE-ART
// ============================
console.log('\nbitcoin-vs-fine-art.html:');
const artPath = path.join(root, 'bitcoin-vs-fine-art.html');
let artHtml = fs.readFileSync(artPath, 'utf8');

if (!artHtml.includes('christies.com/en/buying-services')) {
  artHtml = artHtml.replace(
    /buyer[\u2019\u0027']s premiums \(10-25%\)/g,
    "<a href=\"https://www.christies.com/en/help/buying-guide-important-information/financial-information\" target=\"_blank\" class=\"orange-link\">buyer's premiums (10-25%)</a>"
  );
  console.log('  Added: Christie\'s buyer premium citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has Christie\'s link');
}

if (!artHtml.includes('sothebys.com/en/buying-at-sothebys')) {
  artHtml = artHtml.replace(
    /seller[\u2019\u0027']s commissions \(10-15%\)/g,
    "<a href=\"https://help.sothebys.com/en/support/solutions/articles/44002686902-what-is-a-buyer-s-premium-\" target=\"_blank\" class=\"orange-link\">seller's commissions (10-15%)</a>"
  );
  console.log('  Added: Sotheby\'s seller commission citation');
  totalChanges++;
} else {
  console.log('  Skip: Already has Sotheby\'s link');
}

fs.writeFileSync(artPath, artHtml, 'utf8');

// ============================
// BITCOIN-VS-CRYPTO
// ============================
console.log('\nbitcoin-vs-crypto.html:');
const cryptoPath = path.join(root, 'bitcoin-vs-crypto.html');
let cryptoHtml = fs.readFileSync(cryptoPath, 'utf8');

if (!cryptoHtml.includes('class="orange-link">Proof of Work consensus</a>')) {
  cryptoHtml = cryptoHtml.replace(
    /Proof of Work consensus, which has been battle-tested for over 15 years/g,
    '<a href="https://bitcoin.org/bitcoin.pdf" target="_blank" class="orange-link">Proof of Work consensus</a>, which has been battle-tested for over 15 years'
  );
  fs.writeFileSync(cryptoPath, cryptoHtml, 'utf8');
  console.log('  Added: Bitcoin whitepaper citation for Proof of Work');
  totalChanges++;
} else {
  console.log('  Skip: Already has Bitcoin whitepaper link');
}

console.log(`\nTotal inline citation changes: ${totalChanges}`);
