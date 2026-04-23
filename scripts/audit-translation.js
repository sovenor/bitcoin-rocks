#!/usr/bin/env node
/**
 * audit-translation.js
 *
 * Audits a translation directory (i18n/[lang]/) against English (i18n/en/)
 * to find missing files, missing keys, and potentially untranslated strings
 * (values identical to English).
 *
 * Usage:  node scripts/audit-translation.js [lang]
 * Example: node scripts/audit-translation.js eu
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const lang = process.argv[2];
if (!lang) {
	console.error('Usage: node scripts/audit-translation.js [lang]');
	console.error('Example: node scripts/audit-translation.js eu');
	process.exit(1);
}

if (lang === 'en') {
	console.error('Cannot audit English against itself.');
	process.exit(1);
}

const i18nDir = path.join(__dirname, '..', 'i18n');
const enDir = path.join(i18nDir, 'en');
const langDir = path.join(i18nDir, lang);

// Frozen pre-V2 English snapshot — used to detect English rewrites
// where the target locale still reflects the old wording. Kept in
// sync with scripts/i18n-audit/language-diff.js.
const PREV2_SNAPSHOT_PATH = path.join(
	__dirname,
	'i18n-audit',
	'english-snapshot-preV2.json',
);

if (!fs.existsSync(enDir)) {
	console.error(`English directory not found: ${enDir}`);
	process.exit(1);
}

if (!fs.existsSync(langDir)) {
	console.error(`Translation directory not found: ${langDir}`);
	console.error(`Run the translation scripts first to create i18n/${lang}/`);
	process.exit(1);
}

// ---------------------------------------------------------------------------
// Skip lists — values that are legitimately identical across languages
// ---------------------------------------------------------------------------

// Keys whose values are expected to be the same (brand names, proper nouns, etc.)
const SKIP_KEY_PATTERNS = [
	// Author/source names (proper nouns)
	/^home_link_author_/,
	/^common_cta_author_/,
	// Wallet/product names
	/^wallets_name_/,
	/^wallets_blockstream_green$/,
	/^wallets_coldcard_mk5$/,
	/^wallets_coldcard_q$/,
	/^wallets_blockstream_jade$/,
	/^wallets_foundation_passport$/,
	/^wallets_seedsigner$/,
	// Lightning wallet names
	/^phoenix$/,
	/^breez$/,
	/^mutiny_wallet$/,
	/^wallet_of_satoshi$/,
	// Nostr client names
	/^common_nostr_primal$/,
	/^common_nostr_damus$/,
	/^common_nostr_amethyst$/,
	/^common_nostr_iris$/,
	// Nostr client name keys in the nostr/index namespace
	/^nostr_(primal|damus|amethyst|iris)_name$/,
	// Nostr platform identifiers (iPhone, Android, Web)
	/^nostr_platform_(ios|android|web|ios_android_web)$/,
	// Publisher name
	/^common_publisher_name$/,
	/^common_cta_author_/,
	// Sticker dimensions (measurements)
	/^common_stickers_dimensions_/,
	// Link types that are sometimes kept as-is
	/^home_link_type_/,
	// Buy-flow country name tokens (proper nouns — Costa Rica, Finland, Israel, Japan, etc.)
	/^buy_country_/,
	// Per-currency stat labels used as headings (inflation_stat_usd_label etc.)
	/^inflation_stat_[a-z]{3}_label$/,
	// Inflation story titles (proper place names — Canada, Nigeria, Pennsylvania, Texas)
	/^inflation_story_[a-z_]+_title$/,
	// Common language name labels — locales that share Latin-script
	// forms often keep these identical (Afrikaans, Hausa, Yoruba, etc.)
	/^common_language_/,
	// Metadata
	/^@metadata$/,
];

// Values that are inherently universal (brand names, technical terms, URLs)
const SKIP_VALUES = new Set([
	// Brand names
	'Bitcoin', 'BITCOIN', 'bitcoin.rocks', 'Nostr', 'NOSTR',
	'Lightning', 'LIGHTNING', 'FTX', 'FDIC',
	// Product names
	'BREEZ', 'PHOENIX', 'MUTINY WALLET', 'WALLET OF SATOSHI',
	'BLOCKSTREAM GREEN', 'COLDCARD MK5', 'COLDCARD Q',
	'BLOCKSTREAM JADE', 'FOUNDATION PASSPORT', 'SEEDSIGNER',
	'PRIMAL', 'DAMUS', 'AMETHYST', 'IRIS',
	'BTCPAY SERVER', 'OPEN NODE', 'IBEX PAY', 'SQUARE', 'ZAPRITE',
	// Source names
	'bitcoin.rocks', 'YouTube', 'TIME Magazine', 'Fortune',
	'Anita Posch', 'Quartz', 'Yahoo Finance', 'Geyser',
	'BitcoinUses.Energy', 'Lyn Alden', 'Forbes', 'CoinDesk',
	'Daniel Batten', 'MIT Technology Review', 'MIT Media Lab',
	'BitcoinIs.Green', 'Texas A&M University', 'Saifedean Ammous',
	'Bitcoin Magazine', 'VoteForBetter.Money', 'Misha Guttentag',
	'Wes Lippman', 'Satsie', 'MakerBits', 'Saving Satoshi',
	'Kevin Rooke', 'Blockworks', 'LightningAddress.com',
	'Arman The Parman', '21 Days of Bitcoin', 'Strike',
	'Bitcoin Explorama', 'Mempool.space',
	// Technical terms often kept as-is
	'CBDC', 'QR', 'QWERTY', '2FA', 'BTC',
	'StickerMule.com', 'VistaPrint.com', 'QuickBooks',
	'GitHub', 'sovenor', 'github.com/sovenor/bitcoin-rocks',
	// Business wallet brand labels
	'Bitcoin Price Report', 'The Spreadsheet Guru',
	'satoshipacioli.com', 'Satoshi Pacioli Accounting Services',
	// Nostr + platform names
	'Primal', 'Damus', 'Amethyst', 'Iris',
	'Android', 'iPhone',
	// Per-currency short tokens
	'EURO', 'VISA', 'Bitcoin vs Visa',
	// Numeric tokens
	'(21,000,000)', '+$10', '−$10', '1.42%',
	// Nigerian protest + place names
	'Pennsylvania', 'Texas', 'Canada', 'Nigeria',
	// Dataset names — machine-readable citations; translating breaks the citation chain
	'U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)',
	'Federal Reserve Economic Data (FRED) — Money Supply (Category Index)',
	'Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers',
	'Federal Reserve Economic Data (FRED) — M1 Money Supply',
	'Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)',
	'Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)',
	'James Lavish — "Can a Treasury Auction Fail?"',
	'Jameson Lopp — Metal Bitcoin Seed Storage Reviews',
	'Bitcoin.org — Choose Your Wallet',
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Recursively find all JSON files under a directory, returning paths
 * relative to that directory.
 */
function findJsonFiles(dir, base) {
	base = base || dir;
	let results = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name.startsWith('.')) continue; // skip .DS_Store etc.
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results = results.concat(findJsonFiles(full, base));
		} else if (entry.name.endsWith('.json')) {
			results.push(path.relative(base, full));
		}
	}
	return results;
}

/**
 * Convert an English relative path to the expected translation path.
 * e.g. "common_en.json" → "common_eu.json"
 *      "business/faq_en.json" → "business/faq_eu.json"
 */
function enPathToLangPath(enRelPath) {
	return enRelPath.replace(/_en\.json$/, `_${lang}.json`);
}

/**
 * Check if a key should be skipped based on pattern matching.
 */
function shouldSkipKey(key) {
	for (const pattern of SKIP_KEY_PATTERNS) {
		if (pattern.test(key)) return true;
	}
	return false;
}

/**
 * Load the frozen pre-V2 English snapshot. Returns a map of
 *   { namespace → { key → english_value_at_snapshot } }
 * (where namespace matches the relative path without "_en.json"),
 * or `null` if the snapshot file is missing. Format matches
 * scripts/i18n-audit/snapshot-english-at-commit.js output.
 */
function loadPreV2Snapshot() {
	if (!fs.existsSync(PREV2_SNAPSHOT_PATH)) return null;
	try {
		const parsed = JSON.parse(fs.readFileSync(PREV2_SNAPSHOT_PATH, 'utf8'));
		if (!parsed || !parsed.namespaces) return null;
		const byRelPath = {};
		for (const [ns, body] of Object.entries(parsed.namespaces)) {
			if (!body || !body.keys) continue;
			byRelPath[`${ns}_en.json`] = body.keys;
		}
		return {
			sourceCommitShort: parsed.sourceCommitShort || null,
			byRelPath,
		};
	} catch (err) {
		console.error(`  Failed to parse pre-V2 snapshot: ${err.message}`);
		return null;
	}
}

/**
 * Normalize a string for the "is this actually a meaningful English
 * change?" comparison. Mirrors the helper in
 * scripts/i18n-audit/language-diff.js so both tools treat the same
 * whitespace / quote / dash tweaks as non-changes.
 */
function normalizeForChangeDetection(s) {
	return s
		.normalize('NFC')
		.replace(/[\u2018\u2019\u02BC]/g, "'")
		.replace(/[\u201C\u201D]/g, '"')
		.replace(/[\u2013\u2014\u2212]/g, '-')
		.replace(/\u00A0/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.toLowerCase();
}

function englishMeaningfullyChanged(oldValue, newValue) {
	if (oldValue === newValue) return false;
	return (
		normalizeForChangeDetection(oldValue) !==
		normalizeForChangeDetection(newValue)
	);
}

/**
 * Target-file freshness check: returns true when the target locale's
 * `@metadata.last-updated` is >= the English file's
 * `@metadata.last-updated`. When true, we assume the translator
 * already saw the current English copy and re-translated against it,
 * so the english-changed tier should not re-flag every key in that
 * file. Mirrors the helper in scripts/i18n-audit/language-diff.js.
 */
function isTargetFileFresh(enData, langData) {
	if (!enData || !langData) return false;
	const enMeta = enData['@metadata'];
	const langMeta = langData['@metadata'];
	const enDate =
		enMeta && typeof enMeta === 'object' ? enMeta['last-updated'] : null;
	const langDate =
		langMeta && typeof langMeta === 'object' ? langMeta['last-updated'] : null;
	if (typeof enDate !== 'string' || typeof langDate !== 'string') return false;
	// YYYY-MM-DD, so lexicographic comparison is correct.
	return langDate >= enDate;
}

/**
 * Check if a value should be skipped (is a known universal value).
 */
function shouldSkipValue(val) {
	if (typeof val !== 'string') return true;
	if (SKIP_VALUES.has(val)) return true;
	if (SKIP_VALUES.has(val.trim())) return true;

	// Skip URLs
	if (/^https?:\/\//.test(val.trim())) return true;

	// Skip email addresses
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) return true;

	// Skip pure numbers / currency amounts
	if (/^[\d,.\s%$€£¥₹₱₫₿]+$/.test(val.trim())) return true;

	// Skip measurement dimensions (e.g. "11.4544 cm x 8.382 cm (4.51 in x 3.3 in)")
	if (/^\d+[\d.\s]*cm\s*x\s*\d+[\d.\s]*cm/.test(val.trim())) return true;

	// Skip very short strings (1-2 chars) that are likely punctuation or symbols
	if (val.trim().length <= 2) return true;

	return false;
}

// ---------------------------------------------------------------------------
// Main audit
// ---------------------------------------------------------------------------

console.log(`\nAuditing translation: ${lang} (i18n/${lang}/)\n`);

const enFiles = findJsonFiles(enDir);
const langFiles = new Set(findJsonFiles(langDir));

const preV2Snapshot = loadPreV2Snapshot();
if (preV2Snapshot) {
	console.log(
		`(using pre-V2 English baseline: ${preV2Snapshot.sourceCommitShort || '(unknown sha)'})`,
	);
} else {
	console.log(
		`(no pre-V2 snapshot at ${path.relative(path.join(__dirname, '..'), PREV2_SNAPSHOT_PATH)} — english-changed check skipped)`,
	);
}

const missingFiles = [];
const missingKeys = [];
const identicalStrings = [];
const englishChangedEntries = [];
let filesChecked = 0;
let totalKeysChecked = 0;

for (const enRelPath of enFiles) {
	const expectedLangPath = enPathToLangPath(enRelPath);

	// Check if translation file exists
	if (!langFiles.has(expectedLangPath)) {
		missingFiles.push({ expected: expectedLangPath, from: enRelPath });
		continue;
	}

	filesChecked++;

	// Load both files
	let enData, langData;
	try {
		enData = JSON.parse(fs.readFileSync(path.join(enDir, enRelPath), 'utf8'));
	} catch (e) {
		console.error(`  ERROR reading English file: ${enRelPath} — ${e.message}`);
		continue;
	}
	try {
		langData = JSON.parse(fs.readFileSync(path.join(langDir, expectedLangPath), 'utf8'));
	} catch (e) {
		console.error(`  ERROR reading translation file: ${expectedLangPath} — ${e.message}`);
		continue;
	}

	// Compare keys
	for (const key of Object.keys(enData)) {
		if (key === '@metadata') continue;

		const enVal = enData[key];
		if (typeof enVal !== 'string') continue; // skip non-string values

		totalKeysChecked++;

		// Check if key is missing from translation
		if (!(key in langData)) {
			missingKeys.push({ file: expectedLangPath, key, enValue: enVal });
			continue;
		}

		const langVal = langData[key];

		// Check if value is identical to English
		if (typeof langVal === 'string' && langVal === enVal) {
			// Apply skip rules
			if (shouldSkipKey(key)) continue;
			if (shouldSkipValue(enVal)) continue;

			identicalStrings.push({ file: expectedLangPath, key, value: enVal });
			continue;
		}

		// English-changed check: English value was rewritten since the
		// frozen pre-V2 snapshot, and the target locale's translation
		// is neither the old nor the new English — i.e. the translator
		// still has the V1-era wording in the file. Mirrors the stronger
		// check in scripts/i18n-audit/language-diff.js.
		//
		// Freshness gate: if the target file's @metadata.last-updated
		// is >= the English file's @metadata.last-updated, the
		// translator already saw the latest English so we trust the
		// translation. This prevents every successfully re-translated
		// file from being re-flagged forever.
		if (
			preV2Snapshot &&
			typeof langVal === 'string' &&
			!isTargetFileFresh(enData, langData)
		) {
			const snapshotKeys = preV2Snapshot.byRelPath[enRelPath];
			const oldEnVal = snapshotKeys ? snapshotKeys[key] : undefined;
			if (
				typeof oldEnVal === 'string' &&
				englishMeaningfullyChanged(oldEnVal, enVal) &&
				langVal !== oldEnVal &&
				!shouldSkipKey(key) &&
				!shouldSkipValue(enVal)
			) {
				englishChangedEntries.push({
					file: expectedLangPath,
					key,
					oldEnValue: oldEnVal,
					newEnValue: enVal,
					currentTargetValue: langVal,
				});
			}
		}
	}
}

// Also check if the translation has extra files not in English (info only)
const extraFiles = [];
for (const langFile of langFiles) {
	const expectedEnPath = langFile.replace(new RegExp(`_${lang}\\.json$`), '_en.json');
	const enFilesSet = new Set(enFiles);
	if (!enFilesSet.has(expectedEnPath)) {
		extraFiles.push(langFile);
	}
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

// Missing files
if (missingFiles.length > 0) {
	console.log(`MISSING FILES (${missingFiles.length}):`);
	for (const f of missingFiles) {
		console.log(`  \u2717 ${f.expected} (expected from ${f.from})`);
	}
	console.log('');
} else {
	console.log(`MISSING FILES: 0 \u2714\n`);
}

// Missing keys
if (missingKeys.length > 0) {
	console.log(`MISSING KEYS (${missingKeys.length}):`);
	for (const k of missingKeys) {
		const preview = k.enValue.length > 60
			? k.enValue.substring(0, 60) + '...'
			: k.enValue;
		console.log(`  \u2717 ${k.file} \u2192 "${k.key}" = "${preview}"`);
	}
	console.log('');
} else {
	console.log(`MISSING KEYS: 0 \u2714\n`);
}

// Identical strings (potentially untranslated)
if (identicalStrings.length > 0) {
	console.log(`POTENTIALLY UNTRANSLATED — identical to English (${identicalStrings.length}):`);
	for (const s of identicalStrings) {
		const preview = s.value.length > 60
			? s.value.substring(0, 60) + '...'
			: s.value;
		console.log(`  \u26A0 ${s.file} \u2192 "${s.key}" = "${preview}"`);
	}
	console.log('');
} else {
	console.log(`POTENTIALLY UNTRANSLATED: 0 \u2714\n`);
}

// English-changed (strong stale signal — English rewritten since pre-V2 baseline)
if (englishChangedEntries.length > 0) {
	console.log(`ENGLISH CHANGED — target still reflects pre-V2 wording (${englishChangedEntries.length}):`);
	for (const e of englishChangedEntries) {
		const previewOld =
			e.oldEnValue.length > 50
				? e.oldEnValue.substring(0, 50) + '...'
				: e.oldEnValue;
		const previewNew =
			e.newEnValue.length > 50
				? e.newEnValue.substring(0, 50) + '...'
				: e.newEnValue;
		console.log(`  \u26A0 ${e.file} \u2192 "${e.key}"`);
		console.log(`      old EN: "${previewOld}"`);
		console.log(`      new EN: "${previewNew}"`);
	}
	console.log('');
} else if (preV2Snapshot) {
	console.log(`ENGLISH CHANGED: 0 \u2714\n`);
}

// Extra files (info only)
if (extraFiles.length > 0) {
	console.log(`INFO — Extra files in ${lang} not in English (${extraFiles.length}):`);
	for (const f of extraFiles) {
		console.log(`  \u2139 ${f}`);
	}
	console.log('');
}

// Summary
console.log('='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`  Language:              ${lang}`);
console.log(`  English files:         ${enFiles.length}`);
console.log(`  Translation files:     ${langFiles.size}`);
console.log(`  Files checked:         ${filesChecked}`);
console.log(`  Keys checked:          ${totalKeysChecked}`);
console.log(`  Missing files:         ${missingFiles.length}`);
console.log(`  Missing keys:          ${missingKeys.length}`);
console.log(`  Identical to English:  ${identicalStrings.length} (review needed)`);
if (preV2Snapshot) {
	console.log(`  English changed:       ${englishChangedEntries.length} (review needed)`);
}
console.log('');

// Detailed breakdown by file in summary
if (missingFiles.length > 0) {
	console.log('  MISSING FILES:');
	for (const f of missingFiles) {
		console.log(`    \u2717 ${f.expected}`);
	}
	console.log('');
}

if (missingKeys.length > 0) {
	console.log('  MISSING KEYS:');
	for (const k of missingKeys) {
		const preview = k.enValue.length > 50
			? k.enValue.substring(0, 50) + '...'
			: k.enValue;
		console.log(`    \u2717 ${k.file} → "${k.key}" = "${preview}"`);
	}
	console.log('');
}

if (identicalStrings.length > 0) {
	console.log('  IDENTICAL TO ENGLISH (may need translation):');
	for (const s of identicalStrings) {
		const preview = s.value.length > 50
			? s.value.substring(0, 50) + '...'
			: s.value;
		console.log(`    \u26A0 ${s.file} → "${s.key}" = "${preview}"`);
	}
	console.log('');
}

if (englishChangedEntries.length > 0) {
	console.log('  ENGLISH CHANGED (re-translation needed for new copy):');
	for (const e of englishChangedEntries) {
		const previewNew =
			e.newEnValue.length > 50
				? e.newEnValue.substring(0, 50) + '...'
				: e.newEnValue;
		console.log(`    \u26A0 ${e.file} → "${e.key}" (EN now: "${previewNew}")`);
	}
	console.log('');
}

const hasIssues =
	missingFiles.length > 0 ||
	missingKeys.length > 0 ||
	identicalStrings.length > 0 ||
	englishChangedEntries.length > 0;
if (hasIssues) {
	console.log(`\u26A0  Audit found issues. Please review the items listed above.`);
	if (identicalStrings.length > 0) {
		console.log(`   Note: Some "identical to English" items may be legitimate`);
		console.log(`   (e.g., proper nouns shared across languages). Review manually.`);
	}
	if (englishChangedEntries.length > 0) {
		console.log(`   Note: "English changed" items mean the English source was rewritten`);
		console.log(`   since the pre-V2 baseline. Re-translate for the new English copy.`);
	}
} else {
	console.log(`\u2714  Audit passed! All files, keys, and translations look good.`);
}
console.log('');
