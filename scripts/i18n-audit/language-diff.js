#!/usr/bin/env node
/**
 * language-diff.js <lang> [--namespace=<csv>] [--dry-run] [--no-flag-likely-stale]
 *
 * Generates a per-language "work queue" report listing only the keys
 * that still need translation attention after the V2 redesign + i18n
 * cleanup passes. The output is a single JSON file at
 * `scripts/i18n-audit/reports/<lang>.json` with only the entries a
 * translator needs to touch — NOT the full 2,200-key corpus. That keeps
 * per-language sessions well under the chat context window.
 *
 * Three flag categories (see also `REASON_*` constants below):
 *
 *   1. "missing"       — key is present in English but absent from the
 *                         target locale. Has to be added + translated.
 *   2. "untranslated"  — key is present in both, but the target's value
 *                         is *byte-identical* to the English value. That
 *                         usually means a translator left a placeholder
 *                         behind or the fallback copy never got
 *                         replaced. Exempts known brand-name keys (e.g.
 *                         "Bitcoin", "Nostr", "Lightning Network") that
 *                         are legitimately identical across locales.
 *   3. "likely-stale"  — heuristic. Triggers when (a) the English value
 *                         contains V2-era phrasing (e.g. "Source:",
 *                         "What's next", sentence-case after an initial
 *                         word; a short allow-list of markers the V2
 *                         pass introduced) AND (b) the target value
 *                         does NOT contain any obvious equivalent of
 *                         the same marker, suggesting the translation
 *                         may still be V1-era. High false-positive rate
 *                         (especially for languages without a "Source:"
 *                         direct translation) — treated as a hint for
 *                         human review, not a hard flag. Disable with
 *                         `--no-flag-likely-stale`.
 *
 * Usage:
 *   node scripts/i18n-audit/language-diff.js af
 *   node scripts/i18n-audit/language-diff.js de --namespace=common,index,inflation
 *   node scripts/i18n-audit/language-diff.js zh --dry-run
 *   node scripts/i18n-audit/language-diff.js ar --no-flag-likely-stale
 *
 * The output report is consumed by `apply-translations.js` after the
 * translator fills in the `targetTranslation` field on every entry.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const I18N_EN_ROOT = path.join(I18N_ROOT, "en");
const REPORTS_DIR = path.join(__dirname, "reports");

const REASON_MISSING = "missing";
const REASON_UNTRANSLATED = "untranslated";
const REASON_LIKELY_STALE = "likely-stale";

// Brand names + proper nouns that are legitimately identical across
// locales. If a target value matches English on one of these, do NOT
// flag it as "untranslated".
const BRAND_IDENTICAL_VALUES = new Set([
	"bitcoin.rocks",
	"Bitcoin.rocks",
	"Bitcoin Rocks",
	"hi@bitcoin.rocks",
	"Bitcoin",
	"Nostr",
	"Lightning",
	"Lightning Network",
	"Bitcoin Accepted Here",
	"Satoshi",
	"Satoshi Nakamoto",
]);

// Keys whose English value is a proper noun / brand / code and SHOULD
// stay identical across locales. If a target key is in this set, skip
// the untranslated check entirely. Includes the wallet name keys, the
// sticker-language name keys, etc.
const BRAND_IDENTICAL_KEYS = new Set([
	// Wallet name keys — brand names, kept verbatim
	"wallets_name_square",
	"wallets_name_strike",
	"wallets_name_breez",
	"wallets_name_opennode",
	"wallets_name_ibex",
	"wallets_name_btcpay",
	"wallets_name_zaprite",
	// Common brand tokens
	"common_publisher_name",
	"common_reviewed_by_name",
]);

// Short strings that are legitimately identical in many languages (1-3
// letter acronyms, currency codes, etc.). Exempt from the untranslated
// check when the value length is ≤ 4 chars AND matches this set.
const SHORT_ALLOWED_IDENTICAL = new Set([
	"USD",
	"EUR",
	"GBP",
	"JPY",
	"BTC",
	"CAD",
	"AUD",
	"OK",
	"FAQ",
	"CPI",
	"FED",
	"FRED",
	"BLS",
	"POS",
	"QR",
	"→",
	"•",
	"✓",
	"✗",
	"⚠",
	"🎉",
]);

// V2-era marker substrings. If an English value contains one of these,
// and the target's value does NOT contain a direct equivalent, we flag
// the entry for review. Keep the list short — false positives in CJK /
// RTL languages are almost guaranteed otherwise.
const V2_ERA_MARKERS = [
	"Source:",
	"What's next",
	"What's next?",
	"Where to next?",
	"Reviewed for accuracy",
];

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
		} else if (a === "--no-flag-likely-stale") {
			flags.noLikelyStale = true;
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
			"  --namespace=<csv>        Only diff the listed namespaces (e.g. common,index,inflation).",
			"  --dry-run                Do not write the report file; just print stats.",
			"  --no-flag-likely-stale   Skip the heuristic stale-translation tier.",
			"  -h, --help               Show this help.",
		].join("\n"),
	);
	process.exit(0);
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

/** Recursively walk `dir`, returning every `.json` file path. */
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

/**
 * For a path like /repo/i18n/en/business/wallets_en.json (or the
 * <lang> equivalent), return "business/wallets" (the namespace).
 */
function namespaceFor(filePath, rootDir, suffix) {
	const rel = path.relative(rootDir, filePath);
	if (!rel.endsWith(suffix)) return null;
	return rel.slice(0, -suffix.length);
}

/**
 * Build a map { ns → { keys: { key → value }, lastUpdated } } for a
 * given locale root.
 */
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
		const meta = parsed["@metadata"];
		const lastUpdated =
			meta && typeof meta === "object" && typeof meta["last-updated"] === "string"
				? meta["last-updated"]
				: null;
		const keys = {};
		for (const [k, v] of Object.entries(parsed)) {
			if (k === "@metadata") continue;
			if (typeof v !== "string") continue;
			keys[k] = v;
		}
		out[ns] = { keys, lastUpdated, filePath: f };
	}
	return out;
}

/** Validate a BCP47-ish locale code against the actual i18n dirs. */
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
	// Per-language sticker name keys (e.g. "afrikaans_language_name") —
	// these are English language names used as proper-noun labels, kept
	// in English on purpose.
	if (/_language_name$/.test(key)) return true;
	return false;
}

function isIdenticalToEnglishButAllowed(key, value) {
	if (isBrandIdenticalKey(key)) return true;
	if (BRAND_IDENTICAL_VALUES.has(value)) return true;
	// Short tokens like "USD", "→", "•" — keep if in the allow-list.
	if (value.length <= 4 && SHORT_ALLOWED_IDENTICAL.has(value)) return true;
	// URL values are always allowed identical.
	if (/^https?:\/\//.test(value)) return true;
	// Numeric-only values (e.g. "2022", "21000000", "3.5%")
	if (/^[\d.,%:\-\s]+$/.test(value)) return true;
	return false;
}

function containsV2Marker(english) {
	return V2_ERA_MARKERS.some((m) => english.includes(m));
}

function targetHasV2MarkerEquivalent(targetValue, englishValue) {
	// Cheap check: if any V2 marker appears literally in the target, it
	// probably was translated with that marker preserved (happens for
	// short English tokens like "→", "Source:" that translators often
	// keep verbatim).
	for (const m of V2_ERA_MARKERS) {
		if (englishValue.includes(m) && targetValue.includes(m)) return true;
	}
	// If the target and English are roughly the same LENGTH (±25%),
	// the target probably has equivalent content. For V2 rewrites, the
	// English often got longer (new subtitle paragraphs etc.), so a
	// target that's much SHORTER than English is a strong stale signal.
	const ratio = targetValue.length / Math.max(1, englishValue.length);
	if (ratio >= 0.75 && ratio <= 1.35) return true;
	return false;
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

	const namespaceFilter = flags.namespaces
		? new Set(flags.namespaces)
		: null;

	console.log(`Diffing ${lang} against English...`);
	if (namespaceFilter) {
		console.log(
			`  Scoped to namespace(s): ${[...namespaceFilter].sort().join(", ")}`,
		);
	}

	const english = loadLocaleCorpus(I18N_EN_ROOT, "_en.json");
	const target = loadLocaleCorpus(
		path.join(I18N_ROOT, lang),
		`_${lang}.json`,
	);

	const entries = [];
	let totalEnglishKeys = 0;
	let countMissing = 0;
	let countUntranslated = 0;
	let countLikelyStale = 0;
	let countUpToDate = 0;
	let countBrandIdentical = 0;

	const namespaceList = Object.keys(english).sort();
	for (const ns of namespaceList) {
		if (namespaceFilter && !namespaceFilter.has(ns)) continue;

		const enNs = english[ns];
		const tgNs = target[ns];
		const enKeys = Object.keys(enNs.keys);
		for (const key of enKeys) {
			totalEnglishKeys++;
			const englishValue = enNs.keys[key];

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

			// Heuristic: flag likely-stale entries for review.
			if (
				!flags.noLikelyStale &&
				containsV2Marker(englishValue) &&
				!targetHasV2MarkerEquivalent(currentValue, englishValue)
			) {
				countLikelyStale++;
				entries.push({
					namespace: ns,
					key,
					reason: REASON_LIKELY_STALE,
					englishValue,
					currentValue,
					targetTranslation: null,
				});
				continue;
			}

			countUpToDate++;
		}
	}

	// Stable ordering: group by namespace, preserve original key order
	// within a namespace (already achieved by iterating English keys in
	// file-declared order).
	entries.sort((a, b) => {
		if (a.namespace !== b.namespace) return a.namespace < b.namespace ? -1 : 1;
		// Within namespace: missing first, then untranslated, then
		// likely-stale.
		const reasonRank = { missing: 0, untranslated: 1, "likely-stale": 2 };
		if (a.reason !== b.reason) return reasonRank[a.reason] - reasonRank[b.reason];
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
		namespaceFilter: namespaceFilter ? [...namespaceFilter].sort() : null,
		flags: {
			likelyStaleEnabled: !flags.noLikelyStale,
		},
		stats: {
			totalEnglishKeys,
			missing: countMissing,
			untranslated: countUntranslated,
			likelyStale: countLikelyStale,
			upToDate: countUpToDate,
			brandIdentical: countBrandIdentical,
		},
		entries,
	};

	console.log("");
	console.log(`  Total English keys scanned: ${totalEnglishKeys}`);
	console.log(
		`    Missing:        ${String(countMissing).padStart(5)}  (need translation — key absent in target)`,
	);
	console.log(
		`    Untranslated:   ${String(countUntranslated).padStart(5)}  (target value === English value)`,
	);
	if (!flags.noLikelyStale) {
		console.log(
			`    Likely stale:   ${String(countLikelyStale).padStart(5)}  (V2-era English, target may be V1)`,
		);
	}
	console.log(
		`    Up-to-date:     ${String(countUpToDate).padStart(5)}  (translation present, looks current)`,
	);
	console.log(
		`    Brand identical:${String(countBrandIdentical).padStart(5)}  (legitimately matches English — skipped)`,
	);
	const needingWork = countMissing + countUntranslated + countLikelyStale;
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
