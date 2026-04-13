/**
 * Inflation Stats API Module
 * 
 * Fetches economic data from FRED, TwelveData, and mempool.space APIs.
 * Caches results to a JSON file on the Railway volume for 24 hours.
 * 
 * Required env vars on Railway:
 *   FRED_API_KEY     — https://fred.stlouisfed.org/docs/api/api_key.html
 *   TWELVEDATA_API_KEY — https://twelvedata.com
 */

const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'forms.db');
const DATA_DIR = path.dirname(DB_PATH);
const CACHE_FILE = path.join(DATA_DIR, 'inflation-stats-cache.json');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms
const API_TIMEOUT = 15000; // 15 seconds

// Fallback values shown while APIs load or if they fail
const FALLBACK_STATS = {
  // USD-specific
  btcChange4yr: '+50',
  usdInflation4yr: '-15',
  m1SupplyTrillions: '18.4',
  m1BaselineTrillions: '4.0',
  m1BaselineLabel: 'JAN 2020',
  nationalDebtTrillions: '36.2',
  debtBaselineTrillions: '23.2',
  debtBaselineLabel: 'Q1 2020',
  // Bitcoin (shared)
  bitcoinMined: '19.8',
  bitcoinPercentMined: '94.5',
  lastUpdated: null
};

// ── File Cache ────────────────────────────────────────────────────────

function readCache() {
  try {
    if (!fs.existsSync(CACHE_FILE)) return null;
    const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
    const cached = JSON.parse(raw);
    
    // Check if cache is still fresh (24 hours)
    if (cached.lastUpdated) {
      const age = Date.now() - new Date(cached.lastUpdated).getTime();
      if (age < CACHE_TTL) return cached;
    }
    return null; // expired
  } catch {
    return null;
  }
}

function writeCache(stats) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(stats, null, 2), 'utf-8');
  } catch (err) {
    console.error('[inflation-stats] Failed to write cache:', err.message);
  }
}

// ── External API Fetchers ─────────────────────────────────────────────

async function fetchFredSeries(seriesId) {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) return null;

  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=1&file_type=json&api_key=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
    if (!res.ok) return null;
    const data = await res.json();
    const value = data?.observations?.[0]?.value;
    return value && value !== '.' ? parseFloat(value) : null;
  } catch {
    return null;
  }
}

async function fetchInflation4yr() {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) return null;

  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL&sort_order=desc&limit=60&file_type=json&api_key=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
    if (!res.ok) return null;
    const data = await res.json();
    const observations = data?.observations;
    if (!observations || observations.length < 2) return null;

    const latest = parseFloat(observations[0]?.value);
    const fourYearsAgoMs = Date.now() - 4 * 365.25 * 24 * 60 * 60 * 1000;
    
    let oldCpi = null;
    for (const obs of observations) {
      const obsDate = new Date(obs.date).getTime();
      if (obsDate <= fourYearsAgoMs && obs.value !== '.') {
        oldCpi = parseFloat(obs.value);
        break;
      }
    }

    if (oldCpi && latest && oldCpi > 0) {
      return ((latest - oldCpi) / oldCpi) * 100;
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchBitcoinMined() {
  try {
    const res = await fetch('https://mempool.space/api/blocks/tip/height', {
      signal: AbortSignal.timeout(API_TIMEOUT)
    });
    if (!res.ok) return null;
    const blockHeight = await res.json();

    let supply = 0;
    let reward = 50;
    let remaining = Number(blockHeight);

    while (remaining > 0 && reward >= 0.00000001) {
      const blocksInEra = Math.min(remaining, 210000);
      supply += blocksInEra * reward;
      remaining -= blocksInEra;
      reward /= 2;
    }

    const mined = Math.min(supply, 21000000);
    const percent = (mined / 21000000) * 100;
    return { mined, percent };
  } catch {
    return null;
  }
}

async function fetchBtcChange4yr() {
  const apiKey = process.env.TWELVEDATA_API_KEY;
  if (!apiKey) return null;

  try {
    // Get current price
    const priceRes = await fetch(
      `https://api.twelvedata.com/price?symbol=BTC/USD&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(API_TIMEOUT) }
    );
    if (!priceRes.ok) return null;
    const priceData = await priceRes.json();
    const currentPrice = parseFloat(priceData?.price);
    if (isNaN(currentPrice)) return null;

    // Get price from 4 years ago
    const fourYearsAgo = new Date();
    fourYearsAgo.setFullYear(fourYearsAgo.getFullYear() - 4);
    const dateStr = fourYearsAgo.toISOString().split('T')[0];

    const histRes = await fetch(
      `https://api.twelvedata.com/time_series?symbol=BTC/USD&interval=1day&start_date=${dateStr}&end_date=${dateStr}&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(API_TIMEOUT) }
    );

    let change4yr = 0;
    if (histRes.ok) {
      const histData = await histRes.json();
      const oldPrice = parseFloat(histData?.values?.[0]?.close);
      if (!isNaN(oldPrice) && oldPrice > 0) {
        change4yr = ((currentPrice - oldPrice) / oldPrice) * 100;
      }
    }

    return change4yr;
  } catch {
    return null;
  }
}

// ── Public API ────────────────────────────────────────────────────────

async function getInflationStats() {
  // Try cache first
  const cached = readCache();
  if (cached) {
    console.log('[inflation-stats] Serving from cache (age: ' + 
      Math.round((Date.now() - new Date(cached.lastUpdated).getTime()) / 3600000) + 'h)');
    return cached;
  }

  // Cache miss — fetch fresh data
  console.log('[inflation-stats] Cache miss, fetching fresh data from APIs...');

  const [m1Raw, debtRaw, inflation, btcMined, btcChange] = await Promise.all([
    fetchFredSeries('M1SL'),           // M1 Money Supply (billions)
    fetchFredSeries('GFDEBTN'),        // Federal Debt (millions)
    fetchInflation4yr(),                // CPI inflation over 4 years
    fetchBitcoinMined(),                // Bitcoin mined from mempool.space
    fetchBtcChange4yr()                 // BTC price change over 4 years
  ]);

  const stats = {
    // Bitcoin gain (4yr)
    btcChange4yr: btcChange !== null ? (btcChange >= 0 ? '+' : '') + btcChange.toFixed(1) : FALLBACK_STATS.btcChange4yr,
    
    // USD purchasing power loss (4yr) — shown as negative
    usdInflation4yr: inflation !== null ? '-' + inflation.toFixed(1) : FALLBACK_STATS.usdInflation4yr,
    
    // M1 Money Supply
    m1SupplyTrillions: m1Raw !== null ? (m1Raw / 1000).toFixed(1) : FALLBACK_STATS.m1SupplyTrillions,
    m1BaselineTrillions: '4.0',    // Jan 2020 baseline (fixed historical value)
    m1BaselineLabel: 'JAN 2020',
    
    // National Debt
    nationalDebtTrillions: debtRaw !== null ? (debtRaw / 1000000).toFixed(1) : FALLBACK_STATS.nationalDebtTrillions,
    debtBaselineTrillions: '23.2', // Q1 2020 baseline (fixed historical value)
    debtBaselineLabel: 'Q1 2020',
    
    // Bitcoin supply
    bitcoinMined: btcMined !== null ? (btcMined.mined / 1000000).toFixed(1) : FALLBACK_STATS.bitcoinMined,
    bitcoinPercentMined: btcMined !== null ? btcMined.percent.toFixed(1) : FALLBACK_STATS.bitcoinPercentMined,
    
    lastUpdated: new Date().toISOString()
  };

  // Write to volume cache
  writeCache(stats);
  console.log('[inflation-stats] Fresh data cached at', stats.lastUpdated);

  return stats;
}

module.exports = { getInflationStats };
