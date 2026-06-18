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
// v7 — bumped after fixing the CPI series for AUD/BRL/CAD/GBP/MXN/NZD/THB/JPY.
// Those were pointed at OECD CPALTT01*659N (a YoY *rate* series, or a 404 for
// AUD) / a frozen MINMEI series (JPY), so the 4yr purchasing-power figure came
// out positive/zero/blank. They now use the World Bank annual series
// (FPCPITOTLZG*) compounded over 4 years, matching PHP. Bumping the cache key
// discards the old wrong v6 entries immediately instead of serving them until
// TTL expiry.
// v6 — bumped after adding per-currency m1SourceLabel overrides so the
// frontend can swap "Source: FRED Narrow Money Supply →" for the actual
// central-bank source string on AUD/CAD/EUR/GBP/BRL cards. v5 cached
// responses lack the new field.
// v5 — bumped after the M1 sources for AUD/CAD/EUR/GBP/BRL switched
// from stale FRED MANMM101* series to direct central-bank APIs (RBA
// D3, Bank of Canada Valet, ECB Data Portal, BoE IADB, BCB SGS).
// BRL's m1Unit also flipped from 'trillion' to 'billion' since the
// Brazilian M1 (~R$ 600B) reads more naturally as a billion figure.
// Older cache files are orphaned on the persistent volume; harmless.
const CACHE_FILE = path.join(DATA_DIR, 'inflation-stats-cache-v7.json');
// The daily 14:00-UTC scheduler (server.js) is the primary refresh mechanism
// — it force-refreshes every currency once a day so bitcoin.rocks and
// voteforbetter.money snapshot FRED at the same moment. This TTL only governs
// the lazy on-cache-miss fallback used when the scheduler hasn't run (cold
// boot / lost volume / a skipped day). It's set slightly above 24h so a
// punctual daily refresh always re-stamps an entry *before* it goes lazy-stale,
// keeping the served snapshot pinned to 14:00 UTC rather than drifting.
const CACHE_TTL = 25 * 60 * 60 * 1000; // 25 hours in ms (lazy-fallback threshold)
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
		// FRED's MANMM101CAM189S is stale (IMF feed broken). Routed to
		// Bank of Canada Valet API directly, series V37151 = M1+ (gross)
		// seasonally adjusted, in CAD millions.
		m1Series: null,
		m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1CustomFetcher: 'bocValet',
		m1SourceLabel: 'Bank of Canada — M1+ →',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		debtSeries: 'GGGDTACAA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 87,   label: '2019' },
		// CPALTT01CAM659N is a YoY *rate* series (not a price-index level), so
		// running a 4yr % change on it produced garbage. Use the World Bank
		// annual inflation-rate series + compound the last 4 years (same path
		// PHP already uses). See cpiType: 'annualRate'.
		cpiSeries: 'FPCPITOTLZGCAN', cpiType: 'annualRate',
	},
	EUR: {
		symbol: '€',
		btcPair: 'BTC/EUR',
		forexPair: null,
		// FRED's MANMM101EZM189S is stale. Routed to ECB Data Portal
		// SDMX-CSV directly, M1 stocks for the euro area in EUR millions.
		m1Series: null,
		m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1CustomFetcher: 'ecbBsi',
		m1SourceLabel: 'ECB — Monetary Aggregate M1 →',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		// FRED does not publish an aggregated Eurozone gross-debt series
		// that tracks monthly or even cleanly annually, so we drop the
		// debt card for EUR. The frontend conditionally omits the debt
		// card + debt paragraphs when the URL config entry is null; the
		// JSON returned here keeps null values so the card simply doesn't
		// render.
		debtSeries: null,            debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: null, label: null },
		cpiSeries: 'CP0000EZ19M086NEST',
	},
	GBP: {
		symbol: '£',
		btcPair: 'BTC/GBP',
		forexPair: null,
		// FRED's MANMM101GBM189S is stale. The UK discontinued M1 in
		// 2006 — broad-money M4 (LPMAUYN, seasonally adjusted) is the
		// closest published equivalent and is what BoE publishes monthly,
		// in £ millions. Routed to BoE IADB directly.
		m1Series: null,
		m1Unit: 'trillion', m1DivideBy: 1000000000000,
		m1CustomFetcher: 'boeIadb',
		m1SourceLabel: 'Bank of England — M4 →',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		debtSeries: 'GGGDTAGBA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 85,   label: '2019' },
		// CPALTT01GBM659N is a YoY *rate* series — wrong for a 4yr % change.
		// World Bank annual inflation + 4yr compound instead (cpiType below).
		cpiSeries: 'FPCPITOTLZGGBR', cpiType: 'annualRate',
	},
	BRL: {
		symbol: 'R$',
		btcPair: 'BTC/BRL',
		forexPair: null,
		// FRED's MANMM101BRM189S is stale. Routed to Banco Central do
		// Brasil SGS API, series 27791 = M1 saldo, in R$ thousand.
		// Brazilian M1 sits at ~R$ 600B (well under 1 trillion) so we
		// display in 'billion' for readability; m1DivideBy adjusts so
		// raw R$ → billions.
		m1Series: null,
		m1Unit: 'billion', m1DivideBy: 1000000000,
		m1CustomFetcher: 'bcbSgs',
		m1SourceLabel: 'Banco Central do Brasil — M1 →',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		debtSeries: 'GGGDTABRA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 74,   label: '2019' },
		// CPALTT01BRM659N is a YoY *rate* series — wrong for a 4yr % change.
		// World Bank annual inflation + 4yr compound instead (cpiType below).
		cpiSeries: 'FPCPITOTLZGBRA', cpiType: 'annualRate',
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
		// CPALTT01MXM659N is a YoY *rate* series — wrong for a 4yr % change.
		// World Bank annual inflation + 4yr compound instead (cpiType below).
		cpiSeries: 'FPCPITOTLZGMEX', cpiType: 'annualRate',
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
		// JPNCPIALLMINMEI (OECD MEI family) is frozen/stale and was returning
		// a ~0% 4yr change. World Bank annual inflation + 4yr compound instead.
		cpiSeries: 'FPCPITOTLZGJPN', cpiType: 'annualRate',
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
		m1SourceLabel: 'RBA D3 — Monetary Aggregates →',
		m1Baseline: { value: null, label: 'JAN 2020', yearMonth: '2020-01' },
		debtSeries: 'GGGDTAAUA188N', debtUnit: '% of GDP', debtDivideBy: 1,
		debtBaseline: { value: 47,   label: '2019' },
		// CPALTT01AUM659N was discontinued by OECD (FRED 404 → null → "—" on
		// the card). World Bank annual inflation + 4yr compound instead.
		cpiSeries: 'FPCPITOTLZGAUS', cpiType: 'annualRate',
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
		// CPALTT01THM659N is a YoY *rate* series — wrong for a 4yr % change.
		// World Bank annual inflation + 4yr compound instead (cpiType below).
		cpiSeries: 'FPCPITOTLZGTHA', cpiType: 'annualRate',
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
		// CPALTT01NZQ659N is a YoY *rate* series — wrong for a 4yr % change.
		// World Bank annual inflation + 4yr compound instead (cpiType below).
		cpiSeries: 'FPCPITOTLZGNZL', cpiType: 'annualRate',
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

// ── Bank of Canada Valet API (M1+ gross SA, V37151) ───────────────────
// Returns CAD millions; multiply by 1e6 to get raw CAD.

async function fetchBocValetAt(seriesId, startDate, endDate) {
	try {
		const url = `https://www.bankofcanada.ca/valet/observations/${seriesId}/json?start_date=${startDate}&end_date=${endDate}`;
		const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
		if (!res.ok) return null;
		const data = await res.json();
		const obs = data?.observations;
		if (!obs || !obs.length) return null;
		const last = obs[obs.length - 1];
		const valueStr = last?.[seriesId]?.v;
		if (!valueStr) return null;
		const millions = parseFloat(valueStr);
		if (!isFinite(millions)) return null;
		return { date: last.d, value: millions * 1e6 };
	} catch {
		return null;
	}
}

const bocValetFetcher = {
	async fetchLatest() {
		// BoC publishes M1+ with a ~2-month lag and dates each observation
		// at the FIRST of the month, so we need a window long enough to
		// catch the most recent stamp from "today". 120 days is comfortably
		// safe even if BoC slips a release.
		const today = new Date();
		const startMs = today.getTime() - 120 * 24 * 60 * 60 * 1000;
		const start = new Date(startMs).toISOString().slice(0, 10);
		const end = today.toISOString().slice(0, 10);
		return fetchBocValetAt('V37151', start, end);
	},
	async fetchAt(yearMonth) {
		// yearMonth = 'YYYY-MM' → fetch that month's range.
		const [y, m] = yearMonth.split('-');
		const lastDay = new Date(parseInt(y), parseInt(m), 0).getDate();
		return fetchBocValetAt('V37151', `${yearMonth}-01`, `${yearMonth}-${String(lastDay).padStart(2, '0')}`);
	},
};

// ── ECB Data Portal SDMX-CSV (Euro area M1) ───────────────────────────
// Series M.U2.Y.V.M10.X.1.U2.2300.Z01.E → "Monetary aggregate M1, Stocks"
// Returns EUR millions; multiply by 1e6 to get raw EUR.

async function fetchEcbBsiM1(startPeriod, endPeriod) {
	try {
		const url = `https://data-api.ecb.europa.eu/service/data/BSI/M.U2.Y.V.M10.X.1.U2.2300.Z01.E?startPeriod=${startPeriod}&endPeriod=${endPeriod}`;
		const res = await fetch(url, {
			signal: AbortSignal.timeout(API_TIMEOUT),
			headers: { Accept: 'application/vnd.ecb.data+csv;version=1.0.0' },
		});
		if (!res.ok) return null;
		const csv = await res.text();
		const lines = csv.split(/\r?\n/);
		// Header is row 0, data starts at row 1. Use the LAST data row.
		// Date is at column index 12 ("Time period or range"), value at 13.
		// Use a CSV-aware splitter since some columns contain commas inside quotes.
		const dataLines = lines.slice(1).filter((l) => l.trim().length > 0);
		if (!dataLines.length) return null;
		const lastLine = dataLines[dataLines.length - 1];
		const cols = parseCsvLine(lastLine);
		const date = cols[12];
		const millions = parseFloat(cols[13]);
		if (!date || !isFinite(millions)) return null;
		return { date, value: millions * 1e6 };
	} catch {
		return null;
	}
}

// Minimal CSV line parser handling quoted fields (good enough for ECB output).
function parseCsvLine(line) {
	const out = [];
	let cur = '';
	let inQuotes = false;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === '"') {
			inQuotes = !inQuotes;
		} else if (ch === ',' && !inQuotes) {
			out.push(cur);
			cur = '';
		} else {
			cur += ch;
		}
	}
	out.push(cur);
	return out;
}

const ecbBsiFetcher = {
	async fetchLatest() {
		const today = new Date();
		const start = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000)
			.toISOString().slice(0, 10);
		const end = today.toISOString().slice(0, 10);
		return fetchEcbBsiM1(start, end);
	},
	async fetchAt(yearMonth) {
		const [y, m] = yearMonth.split('-');
		const lastDay = new Date(parseInt(y), parseInt(m), 0).getDate();
		return fetchEcbBsiM1(`${yearMonth}-01`, `${yearMonth}-${String(lastDay).padStart(2, '0')}`);
	},
};

// ── Bank of England IADB (M4 amounts outstanding SA, LPMAUYN) ─────────
// UK discontinued M1 in 2006; M4 (broad money) is the closest published
// equivalent and is what BoE publishes monthly. Returns £ millions.

async function fetchBoeIadbAt(seriesCode, dateFrom, dateTo) {
	try {
		// BoE date format: DD/MMM/YYYY (e.g. "01/Feb/2026")
		const url = `https://www.bankofengland.co.uk/boeapps/iadb/fromshowcolumns.asp?CSVF=TT&csv.x=yes&Datefrom=${dateFrom}&Dateto=${dateTo}&SeriesCodes=${seriesCode}&UsingCodes=Y`;
		const res = await fetch(url, {
			signal: AbortSignal.timeout(API_TIMEOUT),
			headers: { 'user-agent': 'bitcoin.rocks/inflation-stats' },
		});
		if (!res.ok) return null;
		const csv = await res.text();
		// Format: 4 header lines, then "DATE,<code>" header, then data rows
		// like "28 Feb 2026,3228393". Pick the last non-empty data row.
		const lines = csv.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
		const dataRowRe = /^(\d{1,2}\s+[A-Za-z]{3}\s+\d{4}),(.+)$/;
		let last = null;
		for (const line of lines) {
			const m = dataRowRe.exec(line);
			if (m) last = m;
		}
		if (!last) return null;
		const millions = parseFloat(last[2]);
		if (!isFinite(millions)) return null;
		// Convert "28 Feb 2026" → "2026-02-28" for ISO consistency.
		const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
			Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
		const [d, mon, y] = last[1].split(/\s+/);
		return {
			date: `${y}-${months[mon] || '01'}-${d.padStart(2, '0')}`,
			value: millions * 1e6,
		};
	} catch {
		return null;
	}
}

function formatBoeDate(d) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `${String(d.getDate()).padStart(2, '0')}/${months[d.getMonth()]}/${d.getFullYear()}`;
}

const boeIadbFetcher = {
	async fetchLatest() {
		const today = new Date();
		const from = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
		return fetchBoeIadbAt('LPMAUYN', formatBoeDate(from), formatBoeDate(today));
	},
	async fetchAt(yearMonth) {
		const [y, m] = yearMonth.split('-');
		const start = new Date(parseInt(y), parseInt(m) - 1, 1);
		const end = new Date(parseInt(y), parseInt(m), 0);
		return fetchBoeIadbAt('LPMAUYN', formatBoeDate(start), formatBoeDate(end));
	},
};

// ── Banco Central do Brasil SGS (M1 saldo, series 27791) ──────────────
// Returns R$ thousand (milhares de reais); multiply by 1e3 to get raw R$.

async function fetchBcbSgsAt(seriesId, dataInicial, dataFinal) {
	try {
		const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${seriesId}/dados?dataInicial=${dataInicial}&dataFinal=${dataFinal}&formato=json`;
		const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
		if (!res.ok) return null;
		const data = await res.json();
		if (!Array.isArray(data) || !data.length) return null;
		const last = data[data.length - 1];
		const thousands = parseFloat(last.valor);
		if (!isFinite(thousands)) return null;
		// "01/02/2026" → "2026-02-01"
		const [d, m, y] = (last.data || '').split('/');
		return {
			date: `${y}-${m}-${d}`,
			value: thousands * 1e3,
		};
	} catch {
		return null;
	}
}

function formatBcbDate(d) {
	return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

const bcbSgsFetcher = {
	async fetchLatest() {
		const today = new Date();
		const from = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
		return fetchBcbSgsAt('27791', formatBcbDate(from), formatBcbDate(today));
	},
	async fetchAt(yearMonth) {
		const [y, m] = yearMonth.split('-');
		const start = new Date(parseInt(y), parseInt(m) - 1, 1);
		const end = new Date(parseInt(y), parseInt(m), 0);
		return fetchBcbSgsAt('27791', formatBcbDate(start), formatBcbDate(end));
	},
};

// Registry of pluggable narrow-money fetchers, keyed by the value of
// cfg.m1CustomFetcher. Each entry implements fetchLatest() and
// fetchAt(yearMonth) per the contract above.
const CUSTOM_M1_FETCHERS = {
	rbaD3: createRbaD3Fetcher(),    // AUD — RBA D3 monetary aggregates CSV
	bocValet: bocValetFetcher,       // CAD — Bank of Canada Valet API (M1+ gross SA)
	ecbBsi: ecbBsiFetcher,           // EUR — ECB SDMX (Euro area M1)
	boeIadb: boeIadbFetcher,         // GBP — Bank of England IADB (M4 SA; UK has no M1)
	bcbSgs: bcbSgsFetcher,           // BRL — Banco Central do Brasil SGS (M1 saldo)
};

// ── External fetchers ─────────────────────────────────────────────────

const FRED_MAX_ATTEMPTS = 3;
const FRED_RETRY_BASE_MS = 500; // linear backoff: ~500ms then ~1000ms between tries

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Shared FRED observations fetcher with retry + linear backoff + error
// logging. FRED's api.stlouisfed.org has a nightly maintenance window where
// it returns transient HTTP errors/timeouts; a single-attempt fetch landing
// in that window would blank the stat for a full 24h cache cycle. Retrying a
// few times rides out brief blips, and logging surfaces genuine outages
// instead of silently swallowing them. Returns the parsed JSON body, or null
// if the key/series is missing or all attempts fail. Note: only seriesId and
// the error message are logged — never the URL — so the api_key never leaks.
async function fetchFredJson(seriesId, extraParams) {
	const apiKey = process.env.FRED_API_KEY;
	if (!apiKey || !seriesId) return null;
	const params = new URLSearchParams({
		series_id: seriesId,
		file_type: 'json',
		api_key: apiKey,
		...extraParams,
	});
	const url = `https://api.stlouisfed.org/fred/series/observations?${params.toString()}`;
	for (let attempt = 1; attempt <= FRED_MAX_ATTEMPTS; attempt++) {
		try {
			const res = await fetch(url, { signal: AbortSignal.timeout(API_TIMEOUT) });
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return await res.json();
		} catch (err) {
			if (attempt < FRED_MAX_ATTEMPTS) {
				await sleep(FRED_RETRY_BASE_MS * attempt);
				continue;
			}
			console.error(`[inflation-stats] FRED fetch failed for ${seriesId} after ${FRED_MAX_ATTEMPTS} attempts: ${err.message}`);
			return null;
		}
	}
	return null;
}

async function fetchFredLatest(seriesId) {
	const data = await fetchFredJson(seriesId, { sort_order: 'desc', limit: '1' });
	if (!data) return null;
	const val = data?.observations?.[0]?.value;
	return val && val !== '.' ? parseFloat(val) : null;
}

// Generic 4-year % change for a FRED price-index series (used for CPI
// per currency when the series is a price-level index like CPIAUCSL).
async function fetchFred4yrChange(seriesId) {
	const data = await fetchFredJson(seriesId, { sort_order: 'desc', limit: '80' });
	if (!data) return null;
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
}

// Compound 4 most-recent *annual* inflation rates (percent) from a FRED
// annual-rate series such as FPCPITOTLZG*. Each observation is a year-over-
// year % change (e.g. 4.2 means +4.2% that year). The cumulative 4-year
// change is (1 + r1/100)(1 + r2/100)(1 + r3/100)(1 + r4/100) − 1, returned
// as a percent. Returns null if fewer than 4 valid annual observations.
async function fetchAnnualCompoundInflation4yr(seriesId) {
	const data = await fetchFredJson(seriesId, { sort_order: 'desc', limit: '10' });
	if (!data) return null;
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
		// Per-currency source-attribution override. Null for FRED-backed
		// currencies (USD, PHP, MXN, INR, JPY, ILS, THB, NZD) — frontend
		// keeps the server-rendered "Source: FRED Narrow Money Supply →"
		// placeholder when null. Populated for AUD/CAD/EUR/GBP/BRL where
		// the M1 number actually comes from the listed central bank.
		m1SourceLabel:        cfg.m1SourceLabel || null,

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

async function getInflationStats(currency = 'USD', { force = false } = {}) {
	const code = (currency || 'USD').toUpperCase();
	if (!CURRENCIES[code]) {
		throw new Error(`Unsupported currency: ${currency}`);
	}

	const cache = readCache() || {};

	// Per-currency cache. `force` (set by the daily scheduler) bypasses the
	// freshness check so the 14:00-UTC refresh always re-fetches, even if the
	// entry is technically still within its lazy-fallback TTL.
	if (!force && cache[code] && isFresh(cache[code])) {
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

	// Stale-on-failure (mirrors fdic-stats.js). FRED outages are typically
	// all-or-nothing, so when BOTH the CPI headline and the M1 supply come
	// back null the refresh effectively failed — don't overwrite a previously
	// good entry with blanks. Serve the stale-but-real data and retry on the
	// next cache-miss. (Debt is excluded from the check because some
	// currencies — e.g. EUR — legitimately publish no debt series.)
	if (stats.cpiChange4yr === null && stats.m1SupplyTrillions === null) {
		if (cache[code]) {
			console.warn(`[inflation-stats] ${code} refresh returned no usable FRED data; serving stale entry from ${cache[code].lastUpdated}`);
			return cache[code];
		}
		// No prior entry to fall back on. Return the placeholder stats WITHOUT
		// caching, so the next request retries FRED instead of serving blanks
		// for a full 24h cache cycle.
		console.warn(`[inflation-stats] ${code} refresh returned no usable FRED data and no prior cache exists; returning uncached placeholders`);
		return stats;
	}

	// Write back to cache
	cache[code] = stats;
	writeCache(cache);
	console.log(`[inflation-stats] Fresh ${code} data cached at ${stats.lastUpdated}`);

	return stats;
}

// Force-refresh every supported currency. Called by the daily 14:00-UTC
// scheduler in server.js so both bitcoin.rocks and voteforbetter.money snapshot
// FRED at the same moment. Currencies are refreshed sequentially (not in
// parallel) to stay well under the TwelveData / FRED rate limits — 13
// currencies × a handful of series each would otherwise burst dozens of
// concurrent requests. A failure on one currency is logged and skipped; the
// per-currency stale-on-failure logic in getInflationStats already preserves
// that currency's prior good cache entry.
async function refreshAllCurrencies() {
	const codes = Object.keys(CURRENCIES);
	console.log(`[inflation-stats] Scheduled refresh starting for ${codes.length} currencies...`);
	const results = [];
	for (const code of codes) {
		try {
			const stats = await getInflationStats(code, { force: true });
			results.push({ code, ok: true, lastUpdated: stats.lastUpdated });
		} catch (err) {
			console.error(`[inflation-stats] Scheduled refresh failed for ${code}: ${err.message}`);
			results.push({ code, ok: false, error: err.message });
		}
	}
	const ok = results.filter((r) => r.ok).length;
	console.log(`[inflation-stats] Scheduled refresh complete: ${ok}/${codes.length} currencies refreshed`);
	return results;
}

module.exports = {
	getInflationStats,
	refreshAllCurrencies,
	SUPPORTED_CURRENCIES: Object.keys(CURRENCIES),
};
