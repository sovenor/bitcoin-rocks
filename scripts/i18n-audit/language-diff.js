#!/usr/bin/env node
/**
 * language-diff.js <lang> [--namespace=<csv>] [--dry-run]
 *
 * Generates a per-language "work queue" report listing only the keys
 * that still need translation attention. The report is consumed by
 * `apply-translations.js` after the translator fills in the
 * `targetTranslation` field on every entry.
 *
 * The report has two kinds of entries:
 *
 *   1. Locale-specific gaps — detected by diffing the target locale
 *      against current English. Split into:
 *        - "missing"       : key absent from the target file
 *        - "untranslated"  : key present in both, target value ===
 *                             English value (after allow-list checks)
 *
 *   2. Manifest entries — the V2 i18n refresh manifest
 *      (`scripts/i18n-audit/v2-manifest.json`) lists every English
 *      key that was rewritten ("changed") or newly added ("added")
 *      during the V2 redesign. This list is the SAME for every
 *      locale. A per-language marker at
 *      `scripts/i18n-audit/v2-refresh-status/<lang>.json` records the
 *      manifestVersion the locale was last refreshed against. If the
 *      marker is missing or points at an older manifestVersion, every
 *      manifest entry is included in the report:
 *        - "manifest-changed" : English was rewritten; translator
 *                                needs to re-translate for new copy
 *        - "manifest-added"   : brand-new key; needs translation
 *
 * The manifest-driven design replaces the earlier heuristic-based
 * "english-changed" + "likely-stale" tiers. It's deterministic, the
 * same work for every locale, and can't be silently skipped by a
 * metadata-date edge case.
 *
 * Usage:
 *   node scripts/i18n-audit/language-diff.js af
 *   node scripts/i18n-audit/language-diff.js de --namespace=common,index,inflation
 *   node scripts/i18n-audit/language-diff.js zh --dry-run
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const I18N_EN_ROOT = path.join(I18N_ROOT, "en");
const REPORTS_DIR = path.join(__dirname, "reports");
const MANIFEST_PATH = path.join(__dirname, "v2-manifest.json");
const STATUS_DIR = path.join(__dirname, "v2-refresh-status");

const REASON_MISSING = "missing";
const REASON_UNTRANSLATED = "untranslated";
const REASON_MANIFEST_CHANGED = "manifest-changed";
const REASON_MANIFEST_ADDED = "manifest-added";

// Brand names + proper nouns that are legitimately identical across
// locales. If a target value matches English on one of these, do NOT
// flag it as "untranslated".
const BRAND_IDENTICAL_VALUES = new Set([
	"bitcoin.rocks",
	"Bitcoin.rocks",
	"Bitcoin Rocks",
	"hi@bitcoin.rocks",
	"Bitcoin",
	"BITCOIN",
	"Nostr",
	"NOSTR",
	"Lightning",
	"Lightning Network",
	"Bitcoin Accepted Here",
	"Satoshi",
	"Satoshi Nakamoto",
	"GitHub",
	"github.com/sovenor/bitcoin-rocks",
	"sovenor",
	"Bitcoin Price Report",
	"satoshipacioli.com",
	"Satoshi Pacioli Accounting Services",
	"The Spreadsheet Guru",
	"StickerMule.com",
	"Bitcoin.org — Choose Your Wallet",
	"Bitcoin vs Visa",
	"VISA",
	"EURO",
	"BTCPAY SERVER",
	"IBEX PAY",
	"OPEN NODE",
	"Amethyst",
	"Damus",
	"Iris",
	"Primal",
	"Android",
	"iPhone",
	"(21,000,000)",
	"+$10",
	"−$10",
	// Dataset citations — machine-readable; translating breaks the citation chain.
	"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
	"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	'James Lavish — "Can a Treasury Auction Fail?"',
	"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
]);

// Keys whose English value is a proper noun / brand / code and SHOULD
// stay identical across locales. If a target key is in this set, skip
// the untranslated check entirely.
const BRAND_IDENTICAL_KEYS = new Set([
	"wallets_name_square",
	"wallets_name_strike",
	"wallets_name_breez",
	"wallets_name_opennode",
	"wallets_name_ibex",
	"wallets_name_btcpay",
	"wallets_name_zaprite",
	"common_publisher_name",
	"common_reviewed_by_name",
]);

// Short strings that are legitimately identical in many languages.
const SHORT_ALLOWED_IDENTICAL = new Set([
	"USD", "EUR", "GBP", "JPY", "BTC", "CAD", "AUD",
	"OK", "FAQ", "CPI", "FED", "FRED", "BLS", "POS", "QR", "CBDC",
	"→", "•", "✓", "✗", "⚠", "🎉",
]);

function parseArgs(argv) {
	const positional = [];
	const flags = {};
	for (const a of argv.slice(2)) {
		if (a.startsWith("--namespace=")) {
			flags.namespaces = a
				.slice("--namespace=".length)
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean);
		} else if (a === "--dry-run" || a === "-n") {
			flags.dryRun = true;
		} else if (a === "--help" || a === "-h") {
			flags.help = true;
		} else if (a.startsWith("-")) {
			console.error(`Unknown flag: ${a}`);
			process.exit(2);
		} else {
			positional.push(a);
		}
	}
	return { positional, flags };
}

function printHelpAndExit() {
	console.log(
		[
			"Usage: node scripts/i18n-audit/language-diff.js <lang> [options]",
			"",
			"Options:",
			"  --namespace=<csv>  Only diff the listed namespaces (e.g. common,index,inflation).",
			"  --dry-run          Do not write the report file; just print stats.",
			"  -h, --help         Show this help.",
		].join("\n"),
	);
	process.exit(0);
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function walkJson(dir) {
	const out = [];
	const stack = [dir];
	while (stack.length > 0) {
		const current = stack.pop();
		let entries;
		try {
			entries = fs.readdirSync(current, { withFileTypes: true });
		} catch {
			continue;
		}
		for (const entry of entries) {
			if (entry.name.startsWith(".")) continue;
			if (entry.name === "node_modules") continue;
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.endsWith(".json")) {
				out.push(full);
			}
		}
	}
	return out;
}

function namespaceFor(filePath, rootDir, suffix) {
	const rel = path.relative(rootDir, filePath);
	if (!rel.endsWith(suffix)) return null;
	return rel.slice(0, -suffix.length);
}

function loadLocaleCorpus(rootDir, suffix) {
	const files = walkJson(rootDir);
	const out = {};
	for (const f of files) {
		const ns = namespaceFor(f, rootDir, suffix);
		if (!ns) continue;
		let parsed;
		try {
			parsed = readJson(f);
		} catch (err) {
			console.error(
				`  Parse error in ${path.relative(REPO_ROOT, f)}: ${err.message}`,
			);
			continue;
		}
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) continue;
		const keys = {};
		for (const [k, v] of Object.entries(parsed)) {
			if (k === "@metadata") continue;
			if (typeof v !== "string") continue;
			keys[k] = v;
		}
		out[ns] = { keys, filePath: f };
	}
	return out;
}

function resolveLocale(lang) {
	const candidate = path.join(I18N_ROOT, lang);
	if (!fs.existsSync(candidate) || !fs.statSync(candidate).isDirectory()) {
		const available = fs
			.readdirSync(I18N_ROOT, { withFileTypes: true })
			.filter((e) => e.isDirectory() && e.name !== "en" && !e.name.startsWith("."))
			.map((e) => e.name)
			.sort();
		console.error(`Unknown locale "${lang}".`);
		console.error(`Available: ${available.join(", ")}`);
		process.exit(2);
	}
}

function isBrandIdenticalKey(key) {
	if (BRAND_IDENTICAL_KEYS.has(key)) return true;
	if (/_language_name$/.test(key)) return true;
	if (/^home_link_author_/.test(key)) return true;
	if (/^inflation_stat_[a-z]{3}_label$/.test(key)) return true;
	if (key === "inflation_stat_bitcoin_label") return true;
	if (/^inflation_story_[a-z_]+_title$/.test(key)) return true;
	if (/^buy_country_/.test(key)) return true;
	if (/^common_language_/.test(key)) return true;
	if (/^nostr_(primal|damus|amethyst|iris)_name$/.test(key)) return true;
	if (/^nostr_platform_(ios|android|web|ios_android_web)$/.test(key)) return true;
	if (/^wallets_name_(btcpay_server|ibex_pay|open_node)$/.test(key)) return true;
	if (key === "bitcoin" || key === "visa" || key === "bitcoin_vs_visa") return true;
	if (key === "common_result_message_in") return true;
	return false;
}

function isIdenticalToEnglishButAllowed(key, value) {
	if (isBrandIdenticalKey(key)) return true;
	if (BRAND_IDENTICAL_VALUES.has(value)) return true;
	if (value === "") return true;
	if (value.length <= 4 && SHORT_ALLOWED_IDENTICAL.has(value)) return true;
	if (/^https?:\/\//.test(value)) return true;
	if (/^[\d.,%:\-\s]+$/.test(value)) return true;
	return false;
}

function loadManifest() {
	if (!fs.existsSync(MANIFEST_PATH)) {
		console.error(`  ✗ Missing V2 manifest: ${path.relative(REPO_ROOT, MANIFEST_PATH)}`);
		console.error("    Build it with: node scripts/i18n-audit/build-v2-manifest.js");
		process.exit(2);
	}
	return readJson(MANIFEST_PATH);
}

function loadMarker(lang) {
	const p = path.join(STATUS_DIR, `${lang}.json`);
	if (!fs.existsSync(p)) return null;
	try {
		return readJson(p);
	} catch {
		return null;
	}
}

function main() {
	const { positional, flags } = parseArgs(process.argv);
	if (flags.help || positional.length === 0) {
		printHelpAndExit();
	}

	const lang = positional[0];
	if (lang === "en") {
		console.error("Refusing to diff English against itself.");
		process.exit(2);
	}
	resolveLocale(lang);

	const namespaceFilter = flags.namespaces ? new Set(flags.namespaces) : null;

	console.log(`Diffing ${lang} against English...`);
	if (namespaceFilter) {
		console.log(
			`  Scoped to namespace(s): ${[...namespaceFilter].sort().join(", ")}`,
		);
	}

	const manifest = loadManifest();
	const marker = loadMarker(lang);
	const markerMatches = Boolean(
		marker && marker.manifestVersion === manifest.manifestVersion,
	);

	console.log(`  Manifest version: ${manifest.manifestVersion.slice(0, 16)}...`);
	console.log(
		`  Marker: ${
			markerMatches
				? "matches (manifest keys already applied)"
				: marker
					? `present but stale (was ${marker.manifestVersion.slice(0, 16)}...)`
					: "absent (manifest keys will be flagged)"
		}`,
	);

	const english = loadLocaleCorpus(I18N_EN_ROOT, "_en.json");
	const target = loadLocaleCorpus(
		path.join(I18N_ROOT, lang),
		`_${lang}.json`,
	);

	// Build a set of (ns, key) already covered by the manifest so we
	// don't double-count them in the locale-specific scan.
	const manifestCoveredKeys = new Set();
	for (const e of [...manifest.changed, ...manifest.added]) {
		manifestCoveredKeys.add(`${e.namespace}|${e.key}`);
	}

	const entries = [];
	let totalEnglishKeys = 0;
	let countMissing = 0;
	let countUntranslated = 0;
	let countUpToDate = 0;
	let countBrandIdentical = 0;
	let countManifestChanged = 0;
	let countManifestAdded = 0;
	let countManifestAlreadyPresent = 0; // target already has the key, we just need marker
	let countManifestSkippedByMarker = 0;

	// --- Locale-specific scan (missing / untranslated) ---
	const namespaceList = Object.keys(english).sort();
	for (const ns of namespaceList) {
		if (namespaceFilter && !namespaceFilter.has(ns)) continue;
		const enNs = english[ns];
		const tgNs = target[ns];
		const enKeys = Object.keys(enNs.keys);
		for (const key of enKeys) {
			totalEnglishKeys++;
			const englishValue = enNs.keys[key];
			const lookupKey = `${ns}|${key}`;

			// Skip manifest-covered keys — they get handled below.
			if (manifestCoveredKeys.has(lookupKey)) continue;

			if (!tgNs || !(key in tgNs.keys)) {
				countMissing++;
				entries.push({
					namespace: ns,
					key,
					reason: REASON_MISSING,
					englishValue,
					currentValue: null,
					targetTranslation: null,
				});
				continue;
			}

			const currentValue = tgNs.keys[key];
			if (currentValue === englishValue) {
				if (isIdenticalToEnglishButAllowed(key, currentValue)) {
					countBrandIdentical++;
					continue;
				}
				countUntranslated++;
				entries.push({
					namespace: ns,
					key,
					reason: REASON_UNTRANSLATED,
					englishValue,
					currentValue,
					targetTranslation: null,
				});
				continue;
			}

			countUpToDate++;
		}
	}

	// --- Manifest-driven entries ---
	// Only include manifest entries when the per-language marker is
	// missing or points at a stale manifestVersion.
	if (!markerMatches) {
		for (const e of manifest.changed) {
			if (namespaceFilter && !namespaceFilter.has(e.namespace)) {
				countManifestSkippedByMarker++; // filtered out; treat like skipped
				continue;
			}
			const tgNs = target[e.namespace];
			const currentValue =
				tgNs && e.key in tgNs.keys ? tgNs.keys[e.key] : null;
			entries.push({
				namespace: e.namespace,
				key: e.key,
				reason: REASON_MANIFEST_CHANGED,
				englishValueBefore: e.englishValueBefore,
				englishValue: e.englishValue,
				currentValue,
				targetTranslation: null,
			});
			countManifestChanged++;
		}
		for (const e of manifest.added) {
			if (namespaceFilter && !namespaceFilter.has(e.namespace)) {
				countManifestSkippedByMarker++;
				continue;
			}
			const tgNs = target[e.namespace];
			const hasKey = tgNs && e.key in tgNs.keys;
			const currentValue = hasKey ? tgNs.keys[e.key] : null;
			if (hasKey) countManifestAlreadyPresent++;
			entries.push({
				namespace: e.namespace,
				key: e.key,
				reason: REASON_MANIFEST_ADDED,
				englishValue: e.englishValue,
				currentValue,
				targetTranslation: null,
			});
			countManifestAdded++;
		}
	} else {
		countManifestSkippedByMarker =
			manifest.totals.changed + manifest.totals.added;
	}

	// Stable ordering: by reason rank, then (ns, key).
	entries.sort((a, b) => {
		const reasonRank = {
			missing: 0,
			untranslated: 1,
			"manifest-changed": 2,
			"manifest-added": 3,
		};
		if (a.reason !== b.reason) return reasonRank[a.reason] - reasonRank[b.reason];
		if (a.namespace !== b.namespace) return a.namespace < b.namespace ? -1 : 1;
		return a.key < b.key ? -1 : 1;
	});

	const englishSnapshotPath = path.join(__dirname, "english-snapshot.json");
	const englishSnapshotDate = fs.existsSync(englishSnapshotPath)
		? readJson(englishSnapshotPath).generatedAt
		: null;

	const report = {
		lang,
		generatedAt: new Date().toISOString(),
		englishSnapshotGeneratedAt: englishSnapshotDate,
		manifestVersion: manifest.manifestVersion,
		markerMatches,
		markerManifestVersion: marker ? marker.manifestVersion : null,
		markerAppliedAt: marker ? marker.appliedAt : null,
		namespaceFilter: namespaceFilter ? [...namespaceFilter].sort() : null,
		stats: {
			totalEnglishKeys,
			missing: countMissing,
			untranslated: countUntranslated,
			manifestChanged: countManifestChanged,
			manifestAdded: countManifestAdded,
			manifestAlreadyPresentInTarget: countManifestAlreadyPresent,
			manifestSkippedByMarker: countManifestSkippedByMarker,
			upToDate: countUpToDate,
			brandIdentical: countBrandIdentical,
		},
		entries,
	};

	console.log("");
	console.log(`  Total English keys scanned: ${totalEnglishKeys}`);
	console.log(
		`    Missing:             ${String(countMissing).padStart(5)}  (locale-specific gap)`,
	);
	console.log(
		`    Untranslated:        ${String(countUntranslated).padStart(5)}  (target value === English)`,
	);
	console.log(
		`    Manifest changed:    ${String(countManifestChanged).padStart(5)}  (English rewritten during V2; needs re-translation)`,
	);
	console.log(
		`    Manifest added:      ${String(countManifestAdded).padStart(5)}  (new key added during V2)`,
	);
	console.log(
		`    Up-to-date:          ${String(countUpToDate).padStart(5)}  (translation present, looks current)`,
	);
	console.log(
		`    Brand identical:     ${String(countBrandIdentical).padStart(5)}  (legitimately matches English)`,
	);
	if (markerMatches) {
		console.log(
			`    Manifest skipped:    ${String(countManifestSkippedByMarker).padStart(5)}  (marker matches current manifest)`,
		);
	}
	const needingWork =
		countMissing + countUntranslated + countManifestChanged + countManifestAdded;
	console.log(
		`  → ${needingWork} entries flagged for translator attention.`,
	);

	const reportPath = path.join(REPORTS_DIR, `${lang}.json`);
	if (flags.dryRun) {
		console.log("");
		console.log(`(dry-run) Would write report to ${path.relative(REPO_ROOT, reportPath)}.`);
	} else {
		if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
		fs.writeFileSync(reportPath, JSON.stringify(report, null, "\t") + "\n");
		const sizeKb = (fs.statSync(reportPath).size / 1024).toFixed(1);
		console.log("");
		console.log(
			`Wrote report (${sizeKb} KB) to ${path.relative(REPO_ROOT, reportPath)}.`,
		);
	}
}

main();
