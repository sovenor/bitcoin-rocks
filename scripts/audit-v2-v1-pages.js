#!/usr/bin/env node
/**
 * Audit HTML pages to classify them as V1 vs V2 based on class/marker usage.
 * Also counts jQuery scripts and inject-* scripts each page uses.
 *
 * Output: console table + writes memory-bank/migration/page-inventory.md
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// V2 markers — presence indicates page has been redesigned to V2
const V2_MARKERS = [
	'site-nav--v2',
	'h1-inflation',
	'whats-next-card',
	'home-pill',
	'category-section',
	'inflation-section',
	'body-link',
	'inflation-intro',
];

// V1 legacy markers — presence indicates page still uses old design system
const V1_MARKERS = [
	'h2-section',
	'text-box top',
	'text-box middle',
	'text-box bottom',
	'text-box solo',
	'container-jump',
	'"jump "',
	'home-h1',
	'home-logo',
	'home-intro',
	'h3-item',
];

// Known pages by category (for bucket hints)
const BUCKET_HINTS = {
	// High-confidence V2-template-fits-well
	'bitcoin-vs-banks.html': 'A',
	'bitcoin-vs-bonds.html': 'A',
	'bitcoin-vs-cash.html': 'A',
	'bitcoin-vs-cbdc.html': 'A',
	'bitcoin-vs-crypto.html': 'A',
	'bitcoin-vs-fine-art.html': 'A',
	'bitcoin-vs-gold.html': 'A',
	'bitcoin-vs-real-estate.html': 'A',
	'bitcoin-vs-stocks.html': 'A',
	'bitcoin-vs-visa.html': 'A',
	'bank-runs.html': 'A',
	'about.html': 'A',
	'get-involved.html': 'A',

	// Bucket B — unique content shape, port faithfully, redesign later
	'buy.html': 'B',
	'wallets.html': 'B',
	'lightning.html': 'B',
	'flyers.html': 'B',
	'compound-inflation-calculator.html': 'B',
	'stickers.html': 'B',
	'signs.html': 'B',
	'postcards.html': 'B',
	'sticker-success.html': 'B',
	'sign-success.html': 'B',
	'postcard-success.html': 'B',
	'sticker-language-success.html': 'B',

	// Bucket C — low-priority, port faithfully, maybe redesign someday
	'404.html': 'C',
	'business/accounting.html': 'C',
	'business/faq.html': 'C',
	'business/guide.html': 'C',
	'business/index.html': 'C',
	'business/kit.html': 'C',
	'business/kit-success.html': 'C',
	'business/maps.html': 'C',
	'business/maps-success.html': 'C',
	'business/sticker-language-success.html': 'C',
	'business/sticker-success.html': 'C',
	'business/stickers.html': 'C',
	'business/wallets.html': 'C',
	'business/why.html': 'C',
	'nostr/index.html': 'C',
	'nostr/what-is-nostr.html': 'C',

	// Already V2 (baseline)
	'index.html': 'V2',
	'inflation.html': 'V2',
};

// Known jQuery scripts to look for
const JQUERY_SCRIPTS = [
	'jquery/language.js',
	'jquery/home-carousel.js',
	'jquery/country-selector-inflation.js',
	'jquery/country-selector-forms.js',
	'jquery/inflation-stats.js',
	'jquery/dynamic-header.js',
	'jquery/compound-inflation-calculator.js',
	'jquery/compound-inflation-calculator-solo.js',
	'jquery/sticker-picker.js',
	'jquery/buy-flow.js',
];

function findHtmlPages() {
	const pages = [];
	const walk = (rel) => {
		const abs = path.join(ROOT, rel);
		if (!fs.existsSync(abs)) return;
		for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
			const sub = path.join(rel, entry.name);
			if (entry.isDirectory()) {
				// Skip sticker-files (many static listings), business/sticker-files, business/files, node_modules
				if (sub.includes('sticker-files')) continue;
				if (sub.includes('business/files')) continue;
				if (sub.includes('node_modules')) continue;
				if (sub.startsWith('i18n')) continue;
				if (sub.startsWith('img')) continue;
				if (sub.startsWith('scripts')) continue;
				if (sub.startsWith('css')) continue;
				if (sub.startsWith('jquery')) continue;
				if (sub.startsWith('memory-bank')) continue;
				if (sub.startsWith('forms-backend')) continue;
				if (sub.startsWith('.git')) continue;
				walk(sub);
			} else if (entry.isFile() && entry.name.endsWith('.html')) {
				pages.push(sub);
			}
		}
	};
	walk('');
	return pages.sort();
}

function countMatches(content, markers) {
	let n = 0;
	for (const m of markers) {
		const re = new RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
		const matches = content.match(re);
		if (matches) n += matches.length;
	}
	return n;
}

function classifyPage(v2Count, v1Count) {
	if (v2Count >= 3 && v2Count > v1Count) return 'V2';
	if (v2Count > 0 && v1Count > 0) return 'Mixed';
	if (v1Count > 0) return 'V1';
	return 'Unknown';
}

function auditPages() {
	const pages = findHtmlPages();
	const rows = [];
	for (const rel of pages) {
		const abs = path.join(ROOT, rel);
		const content = fs.readFileSync(abs, 'utf8');
		const v2 = countMatches(content, V2_MARKERS);
		const v1 = countMatches(content, V1_MARKERS);
		const cls = classifyPage(v2, v1);
		const scripts = JQUERY_SCRIPTS.filter((s) => content.includes(s));
		const bucket = BUCKET_HINTS[rel] || '?';
		const lines = content.split('\n').length;
		rows.push({ page: rel, v2, v1, cls, bucket, lines, scripts });
	}
	return rows;
}

function renderMarkdown(rows) {
	const lines = [];
	lines.push('# Page Inventory — V1 vs V2 classification + Migration Buckets');
	lines.push('');
	lines.push('Generated by `scripts/audit-v2-v1-pages.js` on ' + new Date().toISOString().slice(0, 10));
	lines.push('');
	lines.push('## Classification rules');
	lines.push('');
	lines.push('- **V2 markers** (presence = new design system): `' + V2_MARKERS.join('`, `') + '`');
	lines.push('- **V1 markers** (presence = legacy design system): `' + V1_MARKERS.join('`, `') + '`');
	lines.push('- **Class**: `V2` = ≥3 V2 markers and more V2 than V1. `Mixed` = both. `V1` = only V1. `Unknown` = neither.');
	lines.push('- **Bucket**:');
	lines.push('  - `V2` = already fully V2, port 1:1 to Tailwind.');
	lines.push('  - `A` = port **with** V2 redesign applied (comparison + content pages, high-traffic).');
	lines.push('  - `B` = port faithfully in Tailwind, redesign as separate task later.');
	lines.push('  - `C` = low-priority, port faithfully, possible redesign later.');
	lines.push('');
	lines.push('## Summary');
	lines.push('');
	const byCls = {};
	const byBucket = {};
	for (const r of rows) {
		byCls[r.cls] = (byCls[r.cls] || 0) + 1;
		byBucket[r.bucket] = (byBucket[r.bucket] || 0) + 1;
	}
	lines.push('| Class | Count |');
	lines.push('| --- | --- |');
	for (const [k, v] of Object.entries(byCls)) lines.push(`| ${k} | ${v} |`);
	lines.push('');
	lines.push('| Bucket | Count | Description |');
	lines.push('| --- | --- | --- |');
	lines.push(`| V2 | ${byBucket['V2'] || 0} | Already V2 (index, inflation) |`);
	lines.push(`| A | ${byBucket['A'] || 0} | Port + V2 redesign |`);
	lines.push(`| B | ${byBucket['B'] || 0} | Port faithful, redesign later |`);
	lines.push(`| C | ${byBucket['C'] || 0} | Port faithful, low priority |`);
	lines.push(`| ? | ${byBucket['?'] || 0} | Unclassified |`);
	lines.push(`| **Total** | **${rows.length}** | |`);
	lines.push('');

	lines.push('## Per-page table');
	lines.push('');
	lines.push('| Page | Class | Bucket | V2 hits | V1 hits | Lines | jQuery scripts |');
	lines.push('| --- | --- | --- | ---:| ---:| ---:| --- |');
	for (const r of rows) {
		const shortScripts = r.scripts.map((s) => s.replace('jquery/', '')).join('<br>') || '—';
		lines.push(`| \`${r.page}\` | ${r.cls} | ${r.bucket} | ${r.v2} | ${r.v1} | ${r.lines} | ${shortScripts} |`);
	}
	lines.push('');

	// Bucket breakdown with page lists
	const buckets = { V2: [], A: [], B: [], C: [], '?': [] };
	for (const r of rows) buckets[r.bucket]?.push(r);
	lines.push('## Bucket details');
	lines.push('');
	lines.push('### Bucket V2 — already fully V2 (baseline reference)');
	lines.push('');
	for (const r of buckets.V2) lines.push(`- [ ] \`${r.page}\` — port 1:1 to Tailwind/React (no design changes)`);
	lines.push('');
	lines.push('### Bucket A — port + V2 redesign');
	lines.push('');
	for (const r of buckets.A) lines.push(`- [ ] \`${r.page}\` — port with V2 design system applied`);
	lines.push('');
	lines.push('### Bucket B — port faithfully, redesign later');
	lines.push('');
	for (const r of buckets.B) lines.push(`- [ ] \`${r.page}\` — port faithfully in Tailwind; queue V2 redesign as separate task`);
	lines.push('');
	lines.push('### Bucket C — port faithfully, low priority');
	lines.push('');
	for (const r of buckets.C) lines.push(`- [ ] \`${r.page}\` — port faithfully in Tailwind; optional redesign`);
	lines.push('');
	if (buckets['?'].length) {
		lines.push('### Bucket ? — unclassified (review needed)');
		lines.push('');
		for (const r of buckets['?']) lines.push(`- [ ] \`${r.page}\` — ❓ classify this page manually`);
		lines.push('');
	}

	return lines.join('\n');
}

const rows = auditPages();

// Also output a plain-text table to stdout
console.log('=== V1/V2 AUDIT ===');
console.log('Page | Class | Bucket | V2 | V1 | Lines');
console.log('-'.repeat(80));
for (const r of rows) {
	console.log(`${r.page} | ${r.cls} | ${r.bucket} | ${r.v2} | ${r.v1} | ${r.lines}`);
}
console.log('');
console.log(`Total pages: ${rows.length}`);

const outPath = path.join(ROOT, 'memory-bank', 'migration', 'page-inventory.md');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, renderMarkdown(rows));
console.log(`Wrote ${outPath}`);
