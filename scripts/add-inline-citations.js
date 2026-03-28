#!/usr/bin/env node

/**
 * add-inline-citations.js
 * 
 * Adds inline source citation links to data claims on inflation.html and bank-runs.html.
 * Wraps unsourced money supply claims with FRED links.
 * Adds FDIC/SVB links to bank-runs claims.
 * 
 * Idempotent: Safe to run multiple times.
 * 
 * Usage: node scripts/add-inline-citations.js
 */

const fs = require('fs');
const path = require('path');

// ============================
// INFLATION PAGE INLINE CITATIONS
// ============================

const inflationPath = path.join(__dirname, '..', 'inflation.html');
let inflationHtml = fs.readFileSync(inflationPath, 'utf8');
let inflationChanges = 0;

// Map of currency data-i18n keys to FRED URLs
const currencyFredLinks = {
  'inflation_cause_cad': 'https://fred.stlouisfed.org/series/MANMM101CAM189S',
  'inflation_cause_euro': 'https://fred.stlouisfed.org/series/MANMM101EZM189S',
  'inflation_cause_gbp': 'https://fred.stlouisfed.org/series/MANMM101GBM189S',
  'inflation_cause_brazilian_real': 'https://fred.stlouisfed.org/series/MANMM101BRM189S',
  'inflation_cause_philippine_peso': 'https://fred.stlouisfed.org/series/MANMM101PHM189S',
  'inflation_cause_mexican_peso': 'https://fred.stlouisfed.org/series/MANMM101MXM189S',
  'inflation_cause_indian_rupee': 'https://fred.stlouisfed.org/series/MANMM101INM189S',
  'inflation_cause_honduran_lempira': 'https://fred.stlouisfed.org/categories/234',
  'inflation_cause_venezuelan_bolivar': 'https://fred.stlouisfed.org/categories/234',
  'inflation_cause_japanese_yen': 'https://fred.stlouisfed.org/series/MANMM101JPM189S',
  'inflation_cause_australian_dollar': 'https://fred.stlouisfed.org/series/MANMM101AUM189S',
  'inflation_cause_israeli_shekel': 'https://fred.stlouisfed.org/series/MANMM101ILM189S',
  'inflation_cause_thai_baht': 'https://fred.stlouisfed.org/series/MANMM101THM189S',
  'inflation_cause_nz_dollar': 'https://fred.stlouisfed.org/series/MANMM101NZM189S',
};

for (const [i18nKey, fredUrl] of Object.entries(currencyFredLinks)) {
  // Pattern: <span class="bold" data-i18n="KEY">TEXT</span>
  // Replace with: <a href="URL" target="_blank" class="orange-link"><span data-i18n="KEY">TEXT</span></a>
  const searchPattern = `<span class="bold" data-i18n="${i18nKey}">`;
  
  // Only add link if not already wrapped in <a> tag
  if (inflationHtml.includes(searchPattern) && !inflationHtml.includes(`class="orange-link"><span class="bold" data-i18n="${i18nKey}">`)) {
    // Find and replace each occurrence
    const regex = new RegExp(
      `<span class="bold" data-i18n="${i18nKey}">([^<]*)</span>`,
      'g'
    );
    const newHtml = inflationHtml.replace(regex, `<a href="${fredUrl}" target="_blank" class="orange-link"><span data-i18n="${i18nKey}">$1</span></a>`);
    if (newHtml !== inflationHtml) {
      inflationHtml = newHtml;
      inflationChanges++;
    }
  }
}

if (inflationChanges > 0) {
  fs.writeFileSync(inflationPath, inflationHtml, 'utf8');
  console.log(`  Inflation: Added ${inflationChanges} inline FRED citations`);
} else {
  console.log('  Inflation: No changes needed (already has citations or patterns not found)');
}

// ============================
// BANK-RUNS PAGE INLINE CITATIONS
// ============================

const bankRunsPath = path.join(__dirname, '..', 'bank-runs.html');
let bankRunsHtml = fs.readFileSync(bankRunsPath, 'utf8');
let bankRunsChanges = 0;

// Add FDIC link to "insurance fund with 125 billion dollars" claim
const fdicFundSearch = '<span data-i18n="bank_runs_fdic_content_2">Not exactly. If a bank fails, where does the FDIC get the money from? They have an insurance fund with 125 billion dollars in it.</span>';
const fdicFundReplace = '<span data-i18n="bank_runs_fdic_content_2">Not exactly. If a bank fails, where does the FDIC get the money from? According to the <a href="https://www.fdic.gov/analysis/quarterly-banking-profile/statistics-at-a-glance" target="_blank" class="orange-link">FDIC</a>, they have an insurance fund with 125 billion dollars in it.</span>';
if (bankRunsHtml.includes(fdicFundSearch)) {
  bankRunsHtml = bankRunsHtml.replace(fdicFundSearch, fdicFundReplace);
  bankRunsChanges++;
}

// Add FDIC link to "almost 10 trillion" claim
const fdicTrillionSearch = '<span data-i18n="bank_runs_fdic_content_3">That sounds like a lot of money until you compare it to the amount of deposits they insure: almost 10 trillion or 10,000 billion dollars.</span>';
const fdicTrillionReplace = '<span data-i18n="bank_runs_fdic_content_3">That sounds like a lot of money until you compare it to the amount of deposits they insure: <a href="https://www.fdic.gov/analysis/quarterly-banking-profile" target="_blank" class="orange-link">almost 10 trillion or 10,000 billion dollars</a>.</span>';
if (bankRunsHtml.includes(fdicTrillionSearch)) {
  bankRunsHtml = bankRunsHtml.replace(fdicTrillionSearch, fdicTrillionReplace);
  bankRunsChanges++;
}

// Add FDIC link to "1% of deposits" claim
const fdicPercentSearch = '<span data-i18n="bank_runs_fdic_content_4">The FDIC even shows on their website that they only have enough money in their insurance fund to cover a little more than 1% of deposits.</span>';
const fdicPercentReplace = '<span data-i18n="bank_runs_fdic_content_4">The <a href="https://www.fdic.gov/analysis/quarterly-banking-profile/statistics-at-a-glance" target="_blank" class="orange-link">FDIC even shows on their website</a> that they only have enough money in their insurance fund to cover a little more than 1% of deposits.</span>';
if (bankRunsHtml.includes(fdicPercentSearch)) {
  bankRunsHtml = bankRunsHtml.replace(fdicPercentSearch, fdicPercentReplace);
  bankRunsChanges++;
}

// Add link to "run on Silicon Valley Bank in March of 2023" claim
const svbSearch = '<span data-i18n="bank_runs_how_content_5">Lots of people in the USA found out when there was a run on Silicon Valley Bank in March of 2023.</span>';
const svbReplace = '<span data-i18n="bank_runs_how_content_5">Lots of people in the USA found out when there was <a href="https://www.fdic.gov/news/press-releases/2023/pr23016.html" target="_blank" class="orange-link">a run on Silicon Valley Bank in March of 2023</a>.</span>';
if (bankRunsHtml.includes(svbSearch)) {
  bankRunsHtml = bankRunsHtml.replace(svbSearch, svbReplace);
  bankRunsChanges++;
}

if (bankRunsChanges > 0) {
  fs.writeFileSync(bankRunsPath, bankRunsHtml, 'utf8');
  console.log(`  Bank Runs: Added ${bankRunsChanges} inline citations`);
} else {
  console.log('  Bank Runs: No changes needed');
}

// ============================
// BITCOIN-VS-GOLD INLINE CITATIONS
// ============================

const vsGoldPath = path.join(__dirname, '..', 'bitcoin-vs-gold.html');
let vsGoldHtml = fs.readFileSync(vsGoldPath, 'utf8');
let vsGoldChanges = 0;

// Add World Gold Council link to "1.6% per year" claim
const goldSupplySearch = "the total supply of gold increases by about 1.6% per year";
const goldSupplyReplace = 'the total supply of gold increases by about <a href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" class="orange-link">1.6% per year</a>';
if (vsGoldHtml.includes(goldSupplySearch) && !vsGoldHtml.includes('gold.org/goldhub')) {
  vsGoldHtml = vsGoldHtml.replaceAll(goldSupplySearch, goldSupplyReplace);
  vsGoldChanges++;
}

// Add Bitnodes link to "Tens of thousands of independent nodes" claim
const nodesSearch = "Tens of thousands of independent nodes validate the rules of the network.";
const nodesReplace = '<a href="https://bitnodes.io/nodes/all/" target="_blank" class="orange-link">Tens of thousands of independent nodes</a> validate the rules of the network.';
if (vsGoldHtml.includes(nodesSearch) && !vsGoldHtml.includes('bitnodes.io')) {
  vsGoldHtml = vsGoldHtml.replaceAll(nodesSearch, nodesReplace);
  vsGoldChanges++;
}

if (vsGoldChanges > 0) {
  fs.writeFileSync(vsGoldPath, vsGoldHtml, 'utf8');
  console.log(`  Bitcoin vs Gold: Added ${vsGoldChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Gold: No changes needed');
}

// ============================
// BITCOIN-VS-CASH INLINE CITATIONS
// ============================

const vsCashPath = path.join(__dirname, '..', 'bitcoin-vs-cash.html');
let vsCashHtml = fs.readFileSync(vsCashPath, 'utf8');
let vsCashChanges = 0;

const indiaDemoSearch = "like India did in 2016 when they banned certain banknotes";
const indiaDemoReplace = 'like <a href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=10698" target="_blank" class="orange-link">India did in 2016 when they banned certain banknotes</a>';
if (vsCashHtml.includes(indiaDemoSearch) && !vsCashHtml.includes('rbi.org.in')) {
  vsCashHtml = vsCashHtml.replaceAll(indiaDemoSearch, indiaDemoReplace);
  vsCashChanges++;
}

if (vsCashChanges > 0) {
  fs.writeFileSync(vsCashPath, vsCashHtml, 'utf8');
  console.log(`  Bitcoin vs Cash: Added ${vsCashChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Cash: No changes needed');
}

// ============================
// BITCOIN-VS-VISA INLINE CITATIONS
// ============================

const vsVisaPath = path.join(__dirname, '..', 'bitcoin-vs-visa.html');
let vsVisaHtml = fs.readFileSync(vsVisaPath, 'utf8');
let vsVisaChanges = 0;

const merchantFeeSearch = "around 3% per transaction";
const merchantFeeReplace = 'around <a href="https://usa.visa.com/support/small-business/regulations-fees.html" target="_blank" class="orange-link">3% per transaction</a>';
if (vsVisaHtml.includes(merchantFeeSearch) && !vsVisaHtml.includes('usa.visa.com')) {
  vsVisaHtml = vsVisaHtml.replaceAll(merchantFeeSearch, merchantFeeReplace);
  vsVisaChanges++;
}

const ccInterestSearch = "sometimes exceeding 25% annually";
const ccInterestReplace = 'sometimes <a href="https://www.federalreserve.gov/publications/report-economic-well-being-us-households.htm" target="_blank" class="orange-link">exceeding 25% annually</a>';
if (vsVisaHtml.includes(ccInterestSearch) && !vsVisaHtml.includes('federalreserve.gov/publications')) {
  vsVisaHtml = vsVisaHtml.replaceAll(ccInterestSearch, ccInterestReplace);
  vsVisaChanges++;
}

if (vsVisaChanges > 0) {
  fs.writeFileSync(vsVisaPath, vsVisaHtml, 'utf8');
  console.log(`  Bitcoin vs Visa: Added ${vsVisaChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Visa: No changes needed');
}

// ============================
// BITCOIN-VS-BONDS INLINE CITATIONS
// ============================

const vsBondsPath = path.join(__dirname, '..', 'bitcoin-vs-bonds.html');
let vsBondsHtml = fs.readFileSync(vsBondsPath, 'utf8');
let vsBondsChanges = 0;

const auctionSearch = "weak demand for 10-year bonds in 2022 and 30-year bonds in 2023";
const auctionReplace = '<a href="https://www.treasurydirect.gov/auctions/results/" target="_blank" class="orange-link">weak demand for 10-year bonds in 2022 and 30-year bonds in 2023</a>';
if (vsBondsHtml.includes(auctionSearch) && !vsBondsHtml.includes('treasurydirect.gov')) {
  vsBondsHtml = vsBondsHtml.replaceAll(auctionSearch, auctionReplace);
  vsBondsChanges++;
}

if (vsBondsChanges > 0) {
  fs.writeFileSync(vsBondsPath, vsBondsHtml, 'utf8');
  console.log(`  Bitcoin vs Bonds: Added ${vsBondsChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Bonds: No changes needed');
}

// ============================
// BITCOIN-VS-FINE-ART INLINE CITATIONS
// ============================

const vsArtPath = path.join(__dirname, '..', 'bitcoin-vs-fine-art.html');
let vsArtHtml = fs.readFileSync(vsArtPath, 'utf8');
let vsArtChanges = 0;

const buyerPremiumSearch = "buyer's premiums (10-25%)";
const buyerPremiumReplace = "<a href=\"https://www.christies.com/en/help/buying-guide-important-information/financial-information\" target=\"_blank\" class=\"orange-link\">buyer's premiums (10-25%)</a>";
if (vsArtHtml.includes(buyerPremiumSearch) && !vsArtHtml.includes('christies.com')) {
  vsArtHtml = vsArtHtml.replaceAll(buyerPremiumSearch, buyerPremiumReplace);
  vsArtChanges++;
}

const sellerCommSearch = "seller's commissions (10-15%)";
const sellerCommReplace = "<a href=\"https://help.sothebys.com/en/support/solutions/articles/44002686902-what-is-a-buyer-s-premium-\" target=\"_blank\" class=\"orange-link\">seller's commissions (10-15%)</a>";
if (vsArtHtml.includes(sellerCommSearch) && !vsArtHtml.includes('sothebys.com')) {
  vsArtHtml = vsArtHtml.replaceAll(sellerCommSearch, sellerCommReplace);
  vsArtChanges++;
}

if (vsArtChanges > 0) {
  fs.writeFileSync(vsArtPath, vsArtHtml, 'utf8');
  console.log(`  Bitcoin vs Fine Art: Added ${vsArtChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Fine Art: No changes needed');
}

// ============================
// BITCOIN-VS-CRYPTO INLINE CITATIONS
// ============================

const vsCryptoPath = path.join(__dirname, '..', 'bitcoin-vs-crypto.html');
let vsCryptoHtml = fs.readFileSync(vsCryptoPath, 'utf8');
let vsCryptoChanges = 0;

const proofOfWorkSearch = "Proof of Work consensus, which has been battle-tested for over 15 years";
const proofOfWorkReplace = '<a href="https://bitcoin.org/bitcoin.pdf" target="_blank" class="orange-link">Proof of Work consensus</a>, which has been battle-tested for over 15 years';
if (vsCryptoHtml.includes(proofOfWorkSearch) && !vsCryptoHtml.includes('bitcoin.org/bitcoin.pdf')) {
  vsCryptoHtml = vsCryptoHtml.replaceAll(proofOfWorkSearch, proofOfWorkReplace);
  vsCryptoChanges++;
}

if (vsCryptoChanges > 0) {
  fs.writeFileSync(vsCryptoPath, vsCryptoHtml, 'utf8');
  console.log(`  Bitcoin vs Crypto: Added ${vsCryptoChanges} inline citations`);
} else {
  console.log('  Bitcoin vs Crypto: No changes needed');
}

console.log('\nInline citations complete.');
