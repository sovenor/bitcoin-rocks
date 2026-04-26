/**
 * Multi-Currency Inflation Stats API Module
 *
 * Fetches economic data from FRED, TwelveData Pro, and mempool.space APIs for
 * any of 13 supported currencies: USD, CAD, EUR, GBP, BRL, PHP, MXN, INR,
 * JPY, AUD, ILS, THB, NZD.
 *
 * Note: HNL (Honduran Lempira) and VEF (Venezuelan Bolívar) were previously
 * supported but were removed because FRED does not publish reliable
 * narrow-money (MANMM101) or gross-debt (GGGDTA) series for those countries.
 *
 * Each currency's data is cached independently to a JSON file on the Railway
 * volume for 24 hours.
 *
 * Required env vars on Railway:
 *   FRED_API_KEY       — https://fred.stlouisfed.org/docs/api/api_key.html
 *   TWELVEDATA_API_KEY — https://twelvedata.com (Pro tier recommended for
 *                        exotic BTC pairs like BTC/HNL, BTC/VEF, BTC/ILS)
 *
 * Public API: getInflationStats(currency = 'USD')
 *   → returns a stats object with btcChange4yr, cpiChange4yr, m1SupplyTrillions,
 *     m1BaselineTrillions, m1BaselineLabel, nationalDebtTrillions,
 *     debtBaselineTrillions, debtBaselineLabel, bitcoinMined,
 *     bitcoinPercentMined, supplyValueLabel, supplyNumericLabel,
 *     currencySymbol, m1Unit, debtUnit, lastUpdated.
 */

const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'forms.db');
const DATA_DIR = path.dirname(DB_PATH);
// v4 — bumped after the AUD M1 source switched from the stale
// FRED MANMM101AUM189S to RBA D3 directly. v3 entries had the old
// stale ~1.6T figure cached for AUD; v4 entries reflect live RBA
// data. Old v2/v3 files are orphaned on the persistent volume;
// harmless.
const CACHE_FILE = path.join(DATA_DIR, 'inflation-stats-cache-v4.json');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms
const API_TIMEOUT = 15000; // 15 seconds

// ── Per-currency configuration ────────────────────────────────────────
//
// Each entry describes the data sources for one currency:
//   symbol         - prefix to use on numeric display values ($, €, £, …)
//   btcPair        - TwelveData symbol for the BTC/<local> pair, or null
//                    (if null we compute BTC/USD × USD/<local> forex)
//   forexPair      - TwelveData symbol for USD/<local> (used when btcPair
//                    is null, otherwise ignored)
//   m1Series       - FRED series ID for narrow money (M1-equivalent)
//   m1Unit         - Display unit: 'trillion' or 'billion'
//   m1DivideBy     - Value returned by FRED is divided by this to get the
//                    number we display (e.g. M1SL is in billions so
//                    divideBy=1000 to get trillions; MANMM101* is in local
//                    currency units; we leave those alone and label the
//                    display unit 'trillion' or 'billion' appropriately).
//   m1Baseline     - { value, label } for the pre-2020 comparison point
//   debtSeries     - FRED series ID for government debt (or null)
//   debtUnit       - 'trillion' | 'billion' | '% of GDP'
//   debtDivideBy   - Divisor applied to FRED value to match debtUnit
//   debtBaseline   - { value, label } for pre-2020 comparison point
//   cpiSeries      - FRED series ID for CPI over 4yr change
//   fallback       - Values used if the live fetch fails or an API returns
//                    nothing. These are shown inline in the HTML already.
//
// Notes on FRED series:
// - M1SL is U.S. M1 money supply in billions of USD.
// - MANMM101XXM189S is IMF Narrow Money for country XX in local currency
//   units (various scales; most are in trillions already).
// - GFDEBTN is U.S. federal debt in millions of USD.
// - GGGDTAXXA188N is IMF general government gross debt as % of GDP.
// - FRED provides MANMM101* in "national currency". The raw value returned
//   needs currency-specific scaling for display as 'trillion' or 'billion'.
//
// For currencies where no good FRED debt series exists in absolute terms
// we display "% of GDP" (which is what GGGDTA*188N is anyway).

const CURRENCIES = {
	USD: {
		symbol: '$',
		btcPair: 'BTC/USD',
		forexPair: null,
		m1Series: 'M1SL',            m1Unit: 'trillion', m1DivideBy: 1000,
		m1Baseline: { value: 4.0,   label: 'JAN 2020' },
		debtSeries: 'GFDEBTN',       debtUnit: 'trillion', debtDivideBy: 1000000,
		debtBaseline: { value: 23.2, label: 'Q1 2020' },
		cpiSeries: 'CPIAUCSL',
		fallback: { btcChange: '+50', cpiChange: '-15', m1Current: 18.4, debtCurrent: 36.2, supplyValueLabel: '19.4 Trillion', supplyNumericLabel: '(19,400,000,000,000)' },
	},
	CAD: {
		symbol: 'C$',
		btcPair: 'BTC/CAD',
		forexPair: null,
		m1Series: 'MANMM101CAM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 1.7,   label: 'JAN 2020' },
		debtSeries: 'GGGDTACAA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 87,   label: '2019' },
		cpiSeries: 'CPALTT01CAM659N',
		fallback: { btcChange: '+45', cpiChange: '-16', m1Current: 2.5, debtCurrent: 107, supplyValueLabel: '2.5 Trillion', supplyNumericLabel: '(2,500,000,000,000)' },
	},
	EUR: {
		symbol: '€',
		btcPair: 'BTC/EUR',
		forexPair: null,
		m1Series: 'MANMM101EZM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 9.1,   label: 'JAN 2020' },
		// FRED does not publish an aggregated Eurozone gross-debt series
		// that tracks monthly or even cleanly annually, so we drop the
		// debt card for EUR. The rebuild-inflation-html.js script already
		// conditionally omits the debt card + debt paragraphs when the
		// URL config entry is null; the JSON returned here keeps null
		// values so the frontend simply doesn't render that card.
		debtSeries: null,            debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: null, label: null },
		cpiSeries: 'CP0000EZ19M086NEST',
		fallback: { btcChange: '+45', cpiChange: '-18', m1Current: 11.2, debtCurrent: null, supplyValueLabel: '11.2 Trillion', supplyNumericLabel: '(11,200,000,000,000)' },
	},
	GBP: {
		symbol: '£',
		btcPair: 'BTC/GBP',
		forexPair: null,
		m1Series: 'MANMM101GBM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 1.9,   label: 'JAN 2020' },
		debtSeries: 'GGGDTAGBA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 85,   label: '2019' },
		cpiSeries: 'CPALTT01GBM659N',
		fallback: { btcChange: '+48', cpiChange: '-17', m1Current: 2.5, debtCurrent: 104, supplyValueLabel: '2.5 Trillion', supplyNumericLabel: '(2,500,000,000,000)' },
	},
	BRL: {
		symbol: 'R$',
		btcPair: 'BTC/BRL',
		forexPair: null,
		m1Series: 'MANMM101BRM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 0.43,  label: 'JAN 2020' },
		debtSeries: 'GGGDTABRA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 74,   label: '2019' },
		cpiSeries: 'CPALTT01BRM659N',
		fallback: { btcChange: '+120', cpiChange: '-24', m1Current: 0.59, debtCurrent: 87, supplyValueLabel: '589 Billion', supplyNumericLabel: '(589,000,000,000)' },
	},
	PHP: {
		symbol: '₱',
		btcPair: null,
		forexPair: 'USD/PHP',
		m1Series: 'MANMM101PHM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 3.7,   label: 'JAN 2020' },
		debtSeries: 'GGGDTAPHA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 37,   label: '2019' },
		// FPCPITOTLZGPHL is an *annual inflation rate* series (%), not a
		// price-index level. To get a 4-year total loss of purchasing
		// power we compound the last 4 annual rates. Flagged via
		// cpiType='annualRate' so fetchCurrencyStats picks the right
		// fetcher. Default cpiType is 'priceIndex' for all other
		// currencies where the CPI series is a level (e.g. CPIAUCSL).
		cpiSeries: 'FPCPITOTLZGPHL', cpiType: 'annualRate',
		fallback: { btcChange: '+55', cpiChange: '-14', m1Current: 6.5, debtCurrent: 61, supplyValueLabel: '6.5 Trillion', supplyNumericLabel: '(6,500,000,000,000)' },
	},
	MXN: {
		symbol: 'MX$',
		btcPair: 'BTC/MXN',
		forexPair: null,
		m1Series: 'MANMM101MXM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 4.8,   label: 'JAN 2020' },
		debtSeries: 'GGGDTAMXA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 53,   label: '2019' },
		cpiSeries: 'CPALTT01MXM659N',
		fallback: { btcChange: '+70', cpiChange: '-24', m1Current: 8.2, debtCurrent: 53, supplyValueLabel: '8.2 Trillion', supplyNumericLabel: '(8,200,000,000,000)' },
	},
	INR: {
		symbol: '₹',
		btcPair: 'BTC/INR',
		forexPair: null,
		m1Series: 'MANMM101INM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 36,    label: 'JAN 2020' },
		debtSeries: 'GGGDTAINA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 75,   label: '2019' },
		cpiSeries: 'INDCPIALLMINMEI',
		fallback: { btcChange: '+60', cpiChange: '-20', m1Current: 62, debtCurrent: 83, supplyValueLabel: '62 Trillion', supplyNumericLabel: '(62,000,000,000,000)' },
	},
	// HNL (Honduran Lempira) and VEF (Venezuelan Bolívar) removed —
	// FRED does not publish usable narrow-money or gross-debt series
	// for those countries. The inflation page buttons were also removed.

	JPY: {
		symbol: '¥',
		btcPair: 'BTC/JPY',
		forexPair: null,
		m1Series: 'MANMM101JPM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 855,   label: 'JAN 2020' },
		debtSeries: 'GGGDTAJPA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 236,  label: '2019' },
		cpiSeries: 'JPNCPIALLMINMEI',
		fallback: { btcChange: '+110', cpiChange: '-8', m1Current: 1100, debtCurrent: 263, supplyValueLabel: '1,100 Trillion', supplyNumericLabel: '(1,100,000,000,000,000)' },
	},
	AUD: {
		symbol: 'A$',
		btcPair: 'BTC/AUD',
		forexPair: null,
		// FRED's MANMM101AUM189S stopped publishing after Nov 2023 (IMF
		// IFS feed broke on RBA's series-break events). Routing through
		// RBA's own D3 monetary aggregates CSV instead — fresher and
		// authoritative. m1Series stays null so fetchFredLatest is never
		// called; m1CustomFetcher names the registry entry to use.
		m1Series: null,
		m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1CustomFetcher: 'rbaD3',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		debtSeries: 'GGGDTAAUA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 47,   label: '2019' },
		cpiSeries: 'CPALTT01AUM659N',
	},
	ILS: {
		symbol: '₪',
		btcPair: null,
		forexPair: 'USD/ILS',
		m1Series: 'MANMM101ILM189S', m1Unit: 'billion',  m1DivideBy: 1000000000,
		m1Baseline: { value: 440,   label: 'JAN 2020' },
		debtSeries: 'GGGDTAILA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 60,   label: '2019' },
		cpiSeries: 'ISRCPIALLMINMEI',
		fallback: { btcChange: '+65', cpiChange: '-13', m1Current: 720, debtCurrent: 68, supplyValueLabel: '720 Billion', supplyNumericLabel: '(720,000,000,000)' },
	},
	THB: {
		symbol: '฿',
		btcPair: null,
		forexPair: 'USD/THB',
		m1Series: 'MANMM101THM189S', m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1Baseline: { value: 2.5,   label: 'JAN 2020' },
		debtSeries: 'GGGDTATHA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 41,   label: '2019' },
		cpiSeries: 'CPALTT01THM659N',
		fallback: { btcChange: '+55', cpiChange: '-11', m1Current: 3.3, debtCurrent: 60, supplyValueLabel: '3.3 Trillion', supplyNumericLabel: '(3,300,000,000,000)' },
	},
	NZD: {
		symbol: 'NZ$',
		btcPair: null,
		forexPair: 'USD/NZD',
		m1Series: 'MANMM101NZM189S', m1Unit: 'billion',  m1DivideBy: 1000000000,
		m1Baseline: { value: 70,    label: 'JAN 2020' },
		debtSeries: 'GGGDTANZA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 32,   label: '2019' },
		cpiSeries: 'CPALTT01NZQ659N',
		fallback: { btcChange: '+55', cpiChange: '-18', m1Current: 140, debtCurrent: 47, supplyValueLabel: '140 Billion', supplyNumericLabel: '(140,000,000,000)' },
	},
};

// ── File cache (per-currency) ─────────────────────────────────────────

function readCache() {
	try {
		if (!fs.existsSync(CACHE_FILE)) return null;
		const raw = fs.readFileSync(CACHE_FILE, 'utf8');
		return JSON.parse(raw);
	} catch {
		return null;
	}
}

function writeCache(cache) {
	try {
		if (!fs.existsSync(DATA_DIR)) {
			fs.mkdirSync(DATA_DIR, { recursive: true });
		}
		fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
	} catch (err) {
		console.error('[inflation-stats] Failed to write cache:', err.message);
	}
}

function isFresh(entry) {
	if (!entry || !entry.lastUpdated) return false;
	const age = Date.now() - new Date(entry.lastUpdated).getTime();
	return age < CACHE_TTL;
}

// ── Custom narrow-money fetchers ──────────────────────────────────────
//
// FRED's IMF-mirrored MANMM101* series stopped updating for most non-USD
// currencies around late 2023 — the IMF's automated feed couldn't handle
// series-break events in the source central banks' reporting. Currencies
// flagged with `m1CustomFetcher: '<key>'` route to one of the entries in
// CUSTOM_M1_FETCHERS instead of fetchFredLatest().
//
// Each fetcher exposes:
//   fetchLatest()      → { value, date } | null
//   fetchAt(yearMonth) → { value, date } | null  (yearMonth is 'YYYY-MM')
// where `value` is in raw native currency units (consistent with what
// FRED returns for MANMM101*) so the existing m1DivideBy normalization
// in fetchCurrencyStats applies unchanged.

const RBA_D3_URL = 'https://www.rba.gov.au/statistics/tables/csv/d3-data.csv';
const M1_FETCHER_CACHE_TTL = 60 * 60 * 1000; // 1 hour — RBA publishes monthly

function parseRbaD3(csv) {
	// RBA D3 CSV layout (as of Mar 2026):
	//   Row 1: "D3 MONETARY AGGREGATES" (table title, BOM-prefixed)
	//   Rows 2–6: Title / Description / Frequency / Type / Units headers
	//   Rows 7–8: blank
	//   Row 9: Source
	//   Row 10: Publication date
	//   Row 11: Series ID  ← we read this to find DMAM1S column index
	//   Row 12+: data, dates as DD/MM/YYYY, values as $ billions
	const lines = csv.split(/\r?\n/);
	let m1ColIdx = -1;
	for (const line of lines) {
		if (line.startsWith('Series ID')) {
			const cols = line.split(',');
			m1ColIdx = cols.indexOf('DMAM1S');
			break;
		}
	}
	if (m1ColIdx < 1) return null;

	const rows = [];
	for (const line of lines) {
		if (!/^\d{2}\/\d{2}\/\d{4}/.test(line)) continue;
		const cols = line.split(',');
		const valueStr = cols[m1ColIdx];
		if (!valueStr) continue;
		const billions = parseFloat(valueStr);
		if (!isFinite(billions)) continue;
		const [d, m, y] = cols[0].split('/');
		// Return in raw AUD (RBA reports in billions; multiply by 1e9 so
		// the existing cfg.m1DivideBy: 1e12 yields trillions on display).
		rows.push({ date: `${y}-${m}-${d}`, value: billions * 1e9 });
	}
	return rows;
}

function createRbaD3Fetcher() {
	let cached = null;
	let cachedAt = 0;

	async function loadRows() {
		if (cached && (Date.now() - cachedAt) < M1_FETCHER_CACHE_TTL) return cached;
		try {
			const res = await fetch(RBA_D3_URL, {
				signal: AbortSignal.timeout(API_TIMEOUT),
				headers: { 'user-agent': 'bitcoin.rocks/inflation-stats' },
			});
			if (!res.ok) return null;
			const csv = await res.text();
			const rows = parseRbaD3(csv);
			if (!rows || !rows.length) return null;
			cached = rows;
			cachedAt = Date.now();
			return rows;
		} catch {
			return null;
		}
	}

	return {
		async fetchLatest() {
			const rows = await loadRows();
			if (!rows || !rows.length) return null;
			return rows[rows.length - 1];
		},
		async fetchAt(yearMonth) {
			const rows = await loadRows();
			if (!rows || !rows.length) return null;
			const matches = rows.filter((r) => r.date.startsWith(yearMonth));
			if (!matches.length) return null;
			return matches[matches.length - 1];
		},
	};
}

// Registry of pluggable narrow-money fetchers, keyed by the value of
// cfg.m1CustomFetcher. Add new entries here when wiring up a fresh
// central-bank source for a stale-FRED currency (e.g. BoE for GBP, ECB
// for EUR, BoJ for JPY).
const CUSTOM_M1_FETCHERS = {
	rbaD3: createRbaD3Fetcher(),
};

// ── External fetchers ─────────────────────────────────────────────────

async function fetchFredLatest(seriesId) {
	const apiKey = process.env.FRED_API_KEY;
	if (!apiKey || !seriesId) return null;
	try {
		const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=1&file_type=json&api_key=${apiKey}`;
		const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
		if (!res.ok) return null;
		const data = await res.json();
		const val = data?.observations?.[0]?.value;
		return val && val !== '.' ? parseFloat(val) : null;
	} catch {
		return null;
	}
}

// Generic 4-year % change for a FRED price-index series (used for CPI
// per currency when the series is a price-level index like CPIAUCSL).
async function fetchFred4yrChange(seriesId) {
	const apiKey = process.env.FRED_API_KEY;
	if (!apiKey || !seriesId) return null;
	try {
		const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=80&file_type=json&api_key=${apiKey}`;
		const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
		if (!res.ok) return null;
		const data = await res.json();
		const obs = data?.observations;
		if (!obs || obs.length < 2) return null;

		// Find latest non-empty value
		let latest = null;
		for (const o of obs) {
			if (o.value !== '.') { latest = parseFloat(o.value); break; }
		}
		if (latest === null || !isFinite(latest)) return null;

		const fourYearsAgoMs = Date.now() - 4 * 365.25 * 24 * 60 * 60 * 1000;
		let old = null;
		for (const o of obs) {
			const t = new Date(o.date).getTime();
			if (t <= fourYearsAgoMs && o.value !== '.') {
				old = parseFloat(o.value);
				break;
			}
		}
		if (old === null || !isFinite(old) || old === 0) return null;
		return ((latest - old) / old) * 100;
	} catch {
		return null;
	}
}

// Compound 4 most-recent *annual* inflation rates (percent) from a FRED
// annual-rate series such as FPCPITOTLZG*. Each observation is a year-over-
// year % change (e.g. 4.2 means +4.2% that year). The cumulative 4-year
// change is (1 + r1/100)(1 + r2/100)(1 + r3/100)(1 + r4/100) − 1, returned
// as a percent. Returns null if fewer than 4 valid annual observations.
async function fetchAnnualCompoundInflation4yr(seriesId) {
	const apiKey = process.env.FRED_API_KEY;
	if (!apiKey || !seriesId) return null;
	try {
		const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=10&file_type=json&api_key=${apiKey}`;
		const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
		if (!res.ok) return null;
		const data = await res.json();
		const obs = data?.observations;
		if (!obs || obs.length < 4) return null;

		// Collect the 4 most recent non-empty annual observations
		const rates = [];
		for (const o of obs) {
			if (o.value !== '.' && o.value !== undefined && o.value !== null) {
				const r = parseFloat(o.value);
				if (isFinite(r)) {
					rates.push(r);
					if (rates.length === 4) break;
				}
			}
		}
		if (rates.length < 4) return null;

		// Compound: ∏(1 + rᵢ/100) − 1, returned as percent
		let factor = 1;
		for (const r of rates) factor *= (1 + r / 100);
		return (factor - 1) * 100;
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
		const height = await res.json();
		let supply = 0, reward = 50, remaining = Number(height);
		while (remaining > 0 && reward >= 0.00000001) {
			const n = Math.min(remaining, 210000);
			supply += n * reward;
			remaining -= n;
			reward /= 2;
		}
		const mined = Math.min(supply, 21000000);
		return { mined, percent: (mined / 21000000) * 100 };
	} catch {
		return null;
	}
}

async function fetchTwelveDataPrice(symbol) {
	const apiKey = process.env.TWELVEDATA_API_KEY;
	if (!apiKey || !symbol) return null;
	try {
		const res = await fetch(
			`https://api.twelvedata.com/price?symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`,
			{ signal: AbortSignal.timeout(API_TIMEOUT) }
		);
		if (!res.ok) return null;
		const data = await res.json();
		const p = parseFloat(data?.price);
		return isFinite(p) ? p : null;
	} catch {
		return null;
	}
}

async function fetchTwelveDataHistoricalClose(symbol, dateISO) {
	const apiKey = process.env.TWELVEDATA_API_KEY;
	if (!apiKey || !symbol) return null;
	try {
		const res = await fetch(
			`https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(symbol)}&interval=1day&start_date=${dateISO}&end_date=${dateISO}&apikey=${apiKey}`,
			{ signal: AbortSignal.timeout(API_TIMEOUT) }
		);
		if (!res.ok) return null;
		const data = await res.json();
		const c = parseFloat(data?.values?.[0]?.close);
		return isFinite(c) ? c : null;
	} catch {
		return null;
	}
}

// Computes BTC's 4-year % change denominated in the target currency.
// Strategy:
//   1) If a direct BTC/<local> pair exists, use it.
//   2) Otherwise fetch BTC/USD and USD/<local> forex both now and 4yr ago,
//      multiply to derive BTC/<local> historical and current.
async function fetchBtcChange4yr(currencyCfg) {
	const fourYearsAgo = new Date();
	fourYearsAgo.setFullYear(fourYearsAgo.getFullYear() - 4);
	const dateISO = fourYearsAgo.toISOString().split('T')[0];

	if (currencyCfg.btcPair) {
		const [now, old] = await Promise.all([
			fetchTwelveDataPrice(currencyCfg.btcPair),
			fetchTwelveDataHistoricalClose(currencyCfg.btcPair, dateISO),
		]);
		if (now && old && old > 0) {
			return ((now - old) / old) * 100;
		}
		// If direct pair fails, fall through to forex fallback when possible
	}

	if (currencyCfg.forexPair || currencyCfg.btcPair) {
		// Fallback: BTC/USD × USD/<local>
		const forex = currencyCfg.forexPair || 'USD/' + currencyCfg.forexPair;
		const [btcNow, btcOld, fxNow, fxOld] = await Promise.all([
			fetchTwelveDataPrice('BTC/USD'),
			fetchTwelveDataHistoricalClose('BTC/USD', dateISO),
			currencyCfg.forexPair ? fetchTwelveDataPrice(currencyCfg.forexPair) : Promise.resolve(1),
			currencyCfg.forexPair ? fetchTwelveDataHistoricalClose(currencyCfg.forexPair, dateISO) : Promise.resolve(1),
		]);
		if (btcNow && btcOld && fxNow && fxOld && btcOld * fxOld > 0) {
			const priceNow = btcNow * fxNow;
			const priceOld = btcOld * fxOld;
			return ((priceNow - priceOld) / priceOld) * 100;
		}
	}

	return null;
}

// ── Main assembly per currency ────────────────────────────────────────

async function fetchCurrencyStats(code) {
	const cfg = CURRENCIES[code];
	if (!cfg) throw new Error(`Unsupported currency: ${code}`);

	// CPI is fetched differently depending on what FRED publishes for the
	// series. Most countries have a price-index level (e.g. CPIAUCSL) and
	// we just compute old-to-new % change. But some countries only have a
	// year-over-year inflation rate series (FPCPITOTLZG*) — for those we
	// must compound the last 4 annual rates instead.
	const cpiFetcher = (cfg.cpiType === 'annualRate')
		? fetchAnnualCompoundInflation4yr(cfg.cpiSeries)
		: fetchFred4yrChange(cfg.cpiSeries);

	// Narrow money: route to the custom fetcher when configured, otherwise
	// fall through to FRED's MANMM101* / M1SL series. Custom fetchers also
	// return the baseline value (pulled from the same source so the
	// comparison-card math uses a single consistent series).
	const customM1 = cfg.m1CustomFetcher
		? CUSTOM_M1_FETCHERS[cfg.m1CustomFetcher]
		: null;
	const m1LatestPromise = customM1
		? customM1.fetchLatest()
		: fetchFredLatest(cfg.m1Series);
	const m1BaselinePromise = customM1 && cfg.m1Baseline.yearMonth
		? customM1.fetchAt(cfg.m1Baseline.yearMonth)
		: Promise.resolve(null);

	// Parallel fetch everything
	const [m1LatestRaw, m1BaselineRaw, debtRaw, cpiChange, btcChange] = await Promise.all([
		m1LatestPromise,
		m1BaselinePromise,
		fetchFredLatest(cfg.debtSeries),
		cpiFetcher,
		fetchBtcChange4yr(cfg),
	]);

	// FRED returns a number directly; custom fetchers return { value, date }.
	// Normalize to a single raw number in native currency units.
	const m1Raw = m1LatestRaw !== null && typeof m1LatestRaw === 'object'
		? m1LatestRaw.value
		: m1LatestRaw;

	// m1DivideBy may be 1 for currencies where the raw value is already in
	// the chosen display unit. Otherwise the raw FRED/RBA value is in the
	// country's native units; dividing gives trillions/billions display value.
	let m1Current = null;
	if (m1Raw !== null && isFinite(m1Raw)) {
		m1Current = m1Raw / cfg.m1DivideBy;
	}

	// Baseline: prefer the custom-fetcher-provided value (so the comparison
	// card math is internally consistent — same series, same definitional
	// rules across baseline and current). Fall back to the static value
	// configured on the currency (used by FRED-backed currencies whose
	// series is still publishing).
	let m1BaselineValue = cfg.m1Baseline.value;
	if (m1BaselineRaw && typeof m1BaselineRaw.value === 'number' && isFinite(m1BaselineRaw.value)) {
		m1BaselineValue = m1BaselineRaw.value / cfg.m1DivideBy;
	}

	let debtCurrent = null;
	if (debtRaw !== null) {
		debtCurrent = debtRaw / cfg.debtDivideBy;
	}

	const fmt = (n, decimals = 1) => (n === null || !isFinite(n)) ? null : n.toFixed(decimals);
	const signed = (n, decimals = 1) => {
		if (n === null || !isFinite(n)) return null;
		const s = n.toFixed(decimals);
		return n >= 0 ? '+' + s : s;
	};

	// Derive the "X Trillion" / "(X,XXX,XXX,XXX,XXX)" labels for the
	// "Bitcoin doesn't have inflation" supply card directly from the
	// live m1Current. Returns null when no live data is available so
	// the frontend can fall back to its placeholder ("—") rather than
	// rendering stale fixture values.
	const supplyValueLabel = (() => {
		if (m1Current === null || !isFinite(m1Current)) return null;
		const unitLabel = cfg.m1Unit === 'billion' ? 'Billion' : 'Trillion';
		return `${m1Current.toFixed(1)} ${unitLabel}`;
	})();

	const supplyNumericLabel = (() => {
		if (m1Current === null || !isFinite(m1Current)) return null;
		// m1Current is already in the display unit (trillions or billions).
		// Multiply back to raw currency units, then group with thousand
		// separators. The grouping comma is locale-neutral here — it's
		// just digit grouping for visual readability across all 13
		// currencies.
		const multiplier = cfg.m1Unit === 'billion' ? 1e9 : 1e12;
		const rawUnits = Math.round(m1Current * multiplier);
		return `(${rawUnits.toLocaleString('en-US')})`;
	})();

	const stats = {
		currency:             code,
		currencySymbol:       cfg.symbol,

		// Hero cards. Null when live data missing — frontend renders "—".
		btcChange4yr:         signed(btcChange, 1),
		cpiChange4yr:         cpiChange !== null ? (cpiChange >= 0 ? '-' : '+') + Math.abs(cpiChange).toFixed(1) : null,

		// Money supply comparison card
		m1SupplyTrillions:    fmt(m1Current, 1),
		m1BaselineTrillions:  fmt(m1BaselineValue, 1),
		m1BaselineLabel:      cfg.m1Baseline.label,
		m1Unit:               cfg.m1Unit,

		// Debt comparison card
		nationalDebtTrillions:  fmt(debtCurrent, 1),
		debtBaselineTrillions:  fmt(cfg.debtBaseline.value, 1),
		debtBaselineLabel:      cfg.debtBaseline.label,
		debtUnit:               cfg.debtUnit,

		// Bitcoin supply (shared globally — always the same regardless of currency)
		bitcoinMined:         null, // filled in below
		bitcoinPercentMined:  null,

		// "And counting" supply card (Bitcoin doesn't have inflation section).
		// Derived live from m1Current; null if FRED fetch failed.
		supplyValueLabel,
		supplyNumericLabel,

		lastUpdated: new Date().toISOString(),
	};

	// Bitcoin mined/percent is fetched once and reused across currencies
	return stats;
}

async function getInflationStats(currency = 'USD') {
	const code = (currency || 'USD').toUpperCase();
	if (!CURRENCIES[code]) {
		throw new Error(`Unsupported currency: ${currency}`);
	}

	const cache = readCache() || {};

	// Per-currency cache
	if (cache[code] && isFresh(cache[code])) {
		console.log(`[inflation-stats] Serving ${code} from cache`);
		return cache[code];
	}

	console.log(`[inflation-stats] Cache miss for ${code}, fetching fresh data...`);

	// Fetch currency-specific stats + shared Bitcoin supply in parallel
	const [stats, btcMined] = await Promise.all([
		fetchCurrencyStats(code),
		fetchBitcoinMined(),
	]);

	if (btcMined) {
		stats.bitcoinMined = (btcMined.mined / 1000000).toFixed(1);
		stats.bitcoinPercentMined = btcMined.percent.toFixed(1);
	}

	// Write back to cache
	cache[code] = stats;
	writeCache(cache);
	console.log(`[inflation-stats] Fresh ${code} data cached at ${stats.lastUpdated}`);

	return stats;
}

module.exports = { getInflationStats, SUPPORTED_CURRENCIES: Object.keys(CURRENCIES) };
