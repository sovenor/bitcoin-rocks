/**
 * FDIC Statistics at a Glance — Deposit Insurance Fund coverage stats
 *
 * Fetches the latest quarterly snapshot of the FDIC Deposit Insurance
 * Fund (DIF) balance + insured deposits total from the "Historical
 * Trends" xlsx published on:
 *   https://www.fdic.gov/quarterly-banking-profile/fdic-statistics-glance
 *
 * Strategy:
 *   1. Scrape the glance page HTML for the most recent
 *      `statistics-glance-historical-trends-<quarter>.xlsx` link.
 *   2. Download the xlsx.
 *   3. Parse the DIF Fund Balance (row "Fund Balance"), Insured Deposits
 *      (row "Insured Deposits"), and Reserve Ratio (row "Reserve Ratio")
 *      from the most recent (left-most data) column.
 *   4. Parse the "As of <Month> <Day>, <Year>" header for the snapshot
 *      date label.
 *   5. Cache to disk (24h TTL) and return `{ reserveRatio, fundBalance,
 *      insuredDeposits, asOfLabel, asOfDate, lastUpdated, source }`.
 *
 * Required env vars: none (no API key needed).
 *
 * Public API: `getFdicStats()` → Promise<FdicStats>
 */

const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'forms.db');
const DATA_DIR = path.dirname(DB_PATH);
const CACHE_FILE = path.join(DATA_DIR, 'fdic-stats-cache.json');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
const API_TIMEOUT = 20000; // 20 seconds

const FDIC_GLANCE_URL =
	'https://www.fdic.gov/quarterly-banking-profile/fdic-statistics-glance';
const FDIC_BASE = 'https://www.fdic.gov';
const USER_AGENT = 'Mozilla/5.0 (bitcoin.rocks FDIC stats fetcher)';

// Fallback values used when the live fetch fails. Matches the
// server-rendered snapshot in `i18n/en/bank-runs_en.json` so the UI
// stays consistent if scraping breaks (e.g. FDIC restructures the page).
const FALLBACK = {
	reserveRatio: 1.42,
	fundBalance: 153.9, // billions USD
	insuredDeposits: 10822, // billions USD (≈ $10.82T)
	asOfLabel: 'Dec 2025',
	asOfDate: '2025-12-31',
	source: 'fallback',
};

// ── Cache helpers ─────────────────────────────────────────────────────

function readCache() {
	try {
		if (!fs.existsSync(CACHE_FILE)) return null;
		return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
	} catch {
		return null;
	}
}

function writeCache(entry) {
	try {
		if (!fs.existsSync(DATA_DIR)) {
			fs.mkdirSync(DATA_DIR, { recursive: true });
		}
		fs.writeFileSync(CACHE_FILE, JSON.stringify(entry, null, 2), 'utf8');
	} catch (err) {
		console.error('[fdic-stats] Failed to write cache:', err.message);
	}
}

function isFresh(entry) {
	if (!entry || !entry.lastUpdated) return false;
	return Date.now() - new Date(entry.lastUpdated).getTime() < CACHE_TTL;
}

// ── xlsx (ZIP) parsing — no external deps ────────────────────────────
//
// An xlsx is a ZIP archive. We do not unpack it with a full ZIP library
// to avoid pulling in another dependency — instead we decode the CRC32
// local headers ourselves and inflate the two files we need:
//   xl/sharedStrings.xml
//   xl/worksheets/sheet1.xml
// Node's built-in `zlib.inflateRawSync` handles the deflate stream.

const zlib = require('zlib');

function extractZipFile(buffer, filename) {
	// Local file header signature: 0x04034b50
	const SIG = 0x04034b50;
	let offset = 0;
	while (offset + 30 <= buffer.length) {
		const sig = buffer.readUInt32LE(offset);
		if (sig !== SIG) break;
		const compressionMethod = buffer.readUInt16LE(offset + 8);
		const compressedSize = buffer.readUInt32LE(offset + 18);
		// offset + 22 is uncompressedSize (unused here)
		const nameLen = buffer.readUInt16LE(offset + 26);
		const extraLen = buffer.readUInt16LE(offset + 28);
		const name = buffer.toString('utf8', offset + 30, offset + 30 + nameLen);
		const dataStart = offset + 30 + nameLen + extraLen;
		const dataEnd = dataStart + compressedSize;
		if (name === filename) {
			const slice = buffer.slice(dataStart, dataEnd);
			if (compressionMethod === 0) {
				return slice.toString('utf8');
			}
			if (compressionMethod === 8) {
				return zlib.inflateRawSync(slice).toString('utf8');
			}
			throw new Error(`Unknown compression method ${compressionMethod} for ${name}`);
		}
		offset = dataEnd;
	}
	// If we ran out of local headers, check Data Descriptor / Zip64 edge
	// cases via the central directory — rare for xlsx, so we error out.
	throw new Error(`File not found in xlsx: ${filename}`);
}

function parseSharedStrings(xml) {
	const strings = [];
	const re = /<si>([\s\S]*?)<\/si>/g;
	let m;
	while ((m = re.exec(xml))) {
		const parts = [];
		const tre = /<t[^>]*>([^<]*)<\/t>/g;
		let t;
		while ((t = tre.exec(m[1]))) parts.push(t[1]);
		strings.push(parts.join(''));
	}
	return strings;
}

function parseSheet(xml) {
	const rows = {};
	const rowRe = /<row r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
	let m;
	while ((m = rowRe.exec(xml))) {
		const rowNum = parseInt(m[1], 10);
		const cells = {};
		const cellRe = /<c r="([A-Z]+)\d+"([^/>]*)(?:\/>|>([\s\S]*?)<\/c>)/g;
		let c;
		while ((c = cellRe.exec(m[2]))) {
			const col = c[1];
			const attrs = c[2] || '';
			const inner = c[3] || '';
			const tMatch = attrs.match(/t="([^"]+)"/);
			const type = tMatch ? tMatch[1] : 'n';
			const vMatch = inner.match(/<v>([^<]*)<\/v>/);
			const v = vMatch ? vMatch[1] : '';
			cells[col] = { type, v };
		}
		rows[rowNum] = cells;
	}
	return rows;
}

function resolveCell(cell, strings) {
	if (!cell) return '';
	if (cell.type === 's') return (strings[parseInt(cell.v, 10)] || '').trim();
	return cell.v;
}

// Find the row whose column-A label (case-insensitive, trimmed) matches
// `needle`. Returns the row number or null.
function findRowByLabel(rows, strings, needle) {
	const target = needle.toLowerCase().trim();
	for (const rStr of Object.keys(rows)) {
		const row = rows[rStr];
		const label = resolveCell(row['A'], strings).toLowerCase().trim();
		if (label === target) return parseInt(rStr, 10);
	}
	return null;
}

// Data columns in the FDIC historical trends sheet start at C (B is a
// `$` or `%` marker). Column C holds the latest year's value.
function getLatestNumericValue(row, strings) {
	if (!row) return null;
	for (const col of ['C', 'D', 'E', 'F', 'G', 'H', 'I']) {
		const v = resolveCell(row[col], strings);
		if (v === '' || v == null) continue;
		const n = parseFloat(v);
		if (Number.isFinite(n)) return n;
	}
	return null;
}

// ── FDIC fetcher ──────────────────────────────────────────────────────

async function fetchText(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,*/*' },
		signal: AbortSignal.timeout(API_TIMEOUT),
	});
	if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
	return res.text();
}

async function fetchBuffer(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': USER_AGENT, Accept: '*/*' },
		signal: AbortSignal.timeout(API_TIMEOUT),
	});
	if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
	const ab = await res.arrayBuffer();
	return Buffer.from(ab);
}

function resolveUrl(href) {
	if (/^https?:/i.test(href)) return href;
	if (href.startsWith('/')) return FDIC_BASE + href;
	return FDIC_BASE + '/' + href;
}

// Parse the "As of <Month> <Day>, <Year>" header and the quarter text
// into a human-readable label + ISO date.
function parseAsOf(text) {
	// e.g. "As of December 31, 2025"
	const m = text.match(/As of\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/i);
	if (!m) return null;
	const months = {
		january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
		july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
	};
	const monthName = m[1];
	const day = parseInt(m[2], 10);
	const year = parseInt(m[3], 10);
	const mm = months[monthName.toLowerCase()];
	if (!mm) return null;
	const iso = `${year}-${String(mm).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
	const shortLabel = `${monthName.slice(0, 3)} ${year}`;
	return { asOfDate: iso, asOfLabel: shortLabel };
}

async function fetchFreshStats() {
	// 1. Pull the glance HTML to discover the latest trends xlsx URL
	const glanceHtml = await fetchText(FDIC_GLANCE_URL);
	const hrefRe = /href="([^"]*statistics-glance-historical-trends-[^"]+\.xlsx)"/gi;
	const matches = [];
	let m;
	while ((m = hrefRe.exec(glanceHtml))) matches.push(m[1]);
	if (matches.length === 0) {
		throw new Error('No historical-trends xlsx link found on FDIC glance page');
	}
	const latestXlsxUrl = resolveUrl(matches[0]);

	// 2. Download the xlsx bytes
	const xlsxBuf = await fetchBuffer(latestXlsxUrl);

	// 3. Parse sharedStrings + sheet1
	const sharedXml = extractZipFile(xlsxBuf, 'xl/sharedStrings.xml');
	const sheetXml = extractZipFile(xlsxBuf, 'xl/worksheets/sheet1.xml');
	const strings = parseSharedStrings(sharedXml);
	const rows = parseSheet(sheetXml);

	// 4. Pull "As of <Month> <Day>, <Year>" from the top rows
	let asOf = null;
	for (let r = 1; r <= 10; r++) {
		const row = rows[r];
		if (!row) continue;
		// Any cell in this row might contain the As-of string
		for (const col of Object.keys(row)) {
			const v = resolveCell(row[col], strings);
			const parsed = parseAsOf(v);
			if (parsed) { asOf = parsed; break; }
		}
		if (asOf) break;
	}
	if (!asOf) asOf = { asOfDate: FALLBACK.asOfDate, asOfLabel: FALLBACK.asOfLabel };

	// 5. Pull the three DIF rows
	const fundRow = findRowByLabel(rows, strings, 'Fund Balance');
	const insuredRow = findRowByLabel(rows, strings, 'Insured Deposits');
	const ratioRow = findRowByLabel(rows, strings, 'Reserve Ratio');

	const fundBalance = fundRow ? getLatestNumericValue(rows[fundRow], strings) : null;
	const insuredDeposits = insuredRow ? getLatestNumericValue(rows[insuredRow], strings) : null;
	const reserveRatio = ratioRow ? getLatestNumericValue(rows[ratioRow], strings) : null;

	if (fundBalance == null || insuredDeposits == null || reserveRatio == null) {
		throw new Error(
			`Missing DIF row(s): fund=${fundBalance}, insured=${insuredDeposits}, ratio=${reserveRatio}`,
		);
	}

	return {
		reserveRatio: round(reserveRatio, 2),
		fundBalance: round(fundBalance, 1),
		insuredDeposits: Math.round(insuredDeposits),
		asOfLabel: asOf.asOfLabel,
		asOfDate: asOf.asOfDate,
		sourceUrl: latestXlsxUrl,
		source: 'live',
		lastUpdated: new Date().toISOString(),
	};
}

function round(n, decimals) {
	const f = 10 ** decimals;
	return Math.round(n * f) / f;
}

// ── Public API ───────────────────────────────────────────────────────

async function getFdicStats() {
	const cached = readCache();
	if (isFresh(cached)) {
		console.log('[fdic-stats] Serving cached stats from', cached.lastUpdated);
		return cached;
	}

	console.log('[fdic-stats] Cache miss/expired, fetching fresh stats...');
	try {
		const stats = await fetchFreshStats();
		writeCache(stats);
		console.log(
			`[fdic-stats] Fresh stats cached: reserveRatio=${stats.reserveRatio}%, ` +
			`fundBalance=$${stats.fundBalance}B, insured=$${stats.insuredDeposits}B, as of ${stats.asOfLabel}`,
		);
		return stats;
	} catch (err) {
		console.error('[fdic-stats] Live fetch failed:', err.message);
		// Return stale cache if we have one, otherwise fallback
		if (cached) {
			console.warn('[fdic-stats] Returning stale cached stats');
			return cached;
		}
		console.warn('[fdic-stats] Returning hard-coded fallback');
		return {
			...FALLBACK,
			lastUpdated: new Date().toISOString(),
		};
	}
}

module.exports = { getFdicStats };
