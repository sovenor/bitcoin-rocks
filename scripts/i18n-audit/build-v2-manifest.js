#!/usr/bin/env node
/**
 * build-v2-manifest.js
 *
 * Builds the canonical V2 i18n manifest — the single source of truth
 * for "which English keys were changed or added during the V2
 * redesign, and therefore need (re-)translation in every locale."
 *
 * Reads:
 *   - scripts/i18n-audit/english-snapshot-preV2.json (frozen baseline,
 *     captured from commit 133d5b98 — the last commit before the V2
 *     English rewrites began)
 *   - scripts/i18n-audit/english-snapshot.json       (current English
 *     corpus — regenerate with snapshot-english.js before each build)
 *
 * Writes:
 *   - scripts/i18n-audit/v2-manifest.json — deterministic, sorted by
 *     (namespace, key), with two sections:
 *       - `changed`  — keys whose English value was rewritten between
 *                      preV2 and current. Each entry has both the old
 *                      and new English so translators can see exactly
 *                      what changed.
 *       - `added`    — keys present in current English but absent from
 *                      preV2. New since V2. Same list for every
 *                      locale; identical work to translate.
 *
 * The `manifestVersion` is sha256 of the sorted (namespace, key) list.
 * Any per-language marker pointing at a previous `manifestVersion` is
 * automatically invalidated the next time English rewrites cause a
 * regeneration.
 *
 * This file is committed to the repo. Regenerate + commit whenever
 * English copy gets another large rewrite.
 *
 * Usage:
 *   node scripts/i18n-audit/snapshot-english.js
 *   node scripts/i18n-audit/build-v2-manifest.js
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const PREV2_SNAPSHOT_PATH = path.join(__dirname, "english-snapshot-preV2.json");
const CURRENT_SNAPSHOT_PATH = path.join(__dirname, "english-snapshot.json");
const MANIFEST_PATH = path.join(__dirname, "v2-manifest.json");

// Keys whose English value is a proper noun / brand / code and SHOULD
// stay identical across locales. Synced with `language-diff.js`.
// Kept short + narrow — if a key here happens to have changed English
// copy, we still exclude it, since no translation is expected.
const BRAND_IDENTICAL_KEY_PATTERNS = [
	/_language_name$/,
	/^home_link_author_/,
	/^inflation_stat_[a-z]{3}_label$/,
	/^inflation_stat_bitcoin_label$/,
	/^inflation_story_[a-z_]+_title$/,
	/^buy_country_/,
	/^common_language_/,
	/^nostr_(primal|damus|amethyst|iris)_name$/,
	/^nostr_platform_(ios|android|web|ios_android_web)$/,
	/^wallets_name_(btcpay_server|ibex_pay|open_node)$/,
];
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
	"bitcoin",
	"visa",
	"bitcoin_vs_visa",
	"common_result_message_in",
]);

// Values that are legitimately identical across locales. If an entry's
// current English value matches one of these, exclude it from the
// manifest — no translation is expected.
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
	".",
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

function isBrandIdenticalKey(key) {
	if (BRAND_IDENTICAL_KEYS.has(key)) return true;
	for (const re of BRAND_IDENTICAL_KEY_PATTERNS) {
		if (re.test(key)) return true;
	}
	return false;
}

function isBrandIdenticalValue(value) {
	if (typeof value !== "string") return false;
	if (BRAND_IDENTICAL_VALUES.has(value)) return true;
	if (value === "") return true;
	if (/^https?:\/\//.test(value)) return true;
	// email addresses
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
	// numeric-only values (percentages, currency amounts, pure numbers)
	if (/^[\d.,%$€£¥₹₱₫₿\s\-+]+$/.test(value.trim())) return true;
	// measurement dimensions like "11.4544 cm x 8.382 cm (4.51 in x 3.3 in)"
	if (/^\d+[\d.\s]*cm\s*x\s*\d+[\d.\s]*cm/.test(value.trim())) return true;
	// very short strings (1-2 chars) that are likely punctuation or symbols
	if (value.trim().length <= 2) return true;
	return false;
}


/**
 * Normalize a string for change detection. Collapses whitespace,
 * lowercases, and strips the most common punctuation tweaks so that
 * e.g. a smart-quote swap or a trailing-period tweak does not count
 * as an English-changed event.
 */
function normalizeForChangeDetection(s) {
	return s
		.normalize("NFC")
		.replace(/[\u2018\u2019\u02BC]/g, "'")
		.replace(/[\u201C\u201D]/g, '"')
		.replace(/[\u2013\u2014\u2212]/g, "-")
		.replace(/\u00A0/g, " ")
		.replace(/\s+/g, " ")
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

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadSnapshot(filePath, label) {
	if (!fs.existsSync(filePath)) {
		console.error(`  ✗ Missing ${label}: ${path.relative(REPO_ROOT, filePath)}`);
		if (label === "current English snapshot") {
			console.error("    Generate it first with:");
			console.error("      node scripts/i18n-audit/snapshot-english.js");
		}
		process.exit(2);
	}
	const parsed = readJson(filePath);
	if (!parsed || !parsed.namespaces) {
		console.error(`  ✗ ${label} has no "namespaces" field.`);
		process.exit(2);
	}
	return parsed;
}

function namespaceKeys(snapshot, ns) {
	const body = snapshot.namespaces[ns];
	if (!body || !body.keys) return {};
	return body.keys;
}

function computeManifestVersion(changed, added) {
	const hasher = crypto.createHash("sha256");
	// Sort by (namespace, key) to guarantee stable hashing.
	const all = [
		...changed.map((e) => `changed|${e.namespace}|${e.key}|${e.englishValue}`),
		...added.map((e) => `added|${e.namespace}|${e.key}|${e.englishValue}`),
	].sort();
	for (const line of all) hasher.update(line + "\n");
	return hasher.digest("hex");
}

function main() {
	console.log("Building V2 i18n manifest...");

	const preV2 = loadSnapshot(PREV2_SNAPSHOT_PATH, "pre-V2 English snapshot");
	const current = loadSnapshot(CURRENT_SNAPSHOT_PATH, "current English snapshot");

	console.log(
		`  pre-V2 commit:     ${preV2.sourceCommitShort || "(unknown)"} ` +
			`(${preV2.generatedAt || "unknown date"})`,
	);
	console.log(`  current snapshot:  ${current.generatedAt || "unknown date"}`);

	const changed = [];
	const added = [];
	let totalScanned = 0;
	let skippedBrand = 0;

	// Walk the current English namespaces (current is the source of
	// truth for which keys exist today).
	const allNamespaces = Object.keys(current.namespaces || {}).sort();
	for (const ns of allNamespaces) {
		const currentKeys = namespaceKeys(current, ns);
		const preV2Keys = namespaceKeys(preV2, ns);

		for (const key of Object.keys(currentKeys).sort()) {
			const newVal = currentKeys[key];
			if (typeof newVal !== "string") continue;
			totalScanned++;

			// Exclude brand-identical keys/values regardless of whether
			// they "changed" — nothing to translate.
			if (isBrandIdenticalKey(key) || isBrandIdenticalValue(newVal)) {
				skippedBrand++;
				continue;
			}

			const oldVal = preV2Keys[key];
			if (typeof oldVal !== "string") {
				// Added since pre-V2.
				added.push({
					namespace: ns,
					key,
					englishValue: newVal,
				});
				continue;
			}

			// Present in both — check if meaningfully changed.
			if (englishMeaningfullyChanged(oldVal, newVal)) {
				changed.push({
					namespace: ns,
					key,
					englishValueBefore: oldVal,
					englishValue: newVal,
				});
			}

		}
	}

	// Sort deterministically: namespace, then key.
	const byNsKey = (a, b) => {
		if (a.namespace !== b.namespace) return a.namespace < b.namespace ? -1 : 1;
		return a.key < b.key ? -1 : 1;
	};
	changed.sort(byNsKey);
	added.sort(byNsKey);

	const manifestVersion = computeManifestVersion(changed, added);

	const manifest = {
		generatedAt: new Date().toISOString(),
		preV2Commit: preV2.sourceCommit || null,
		preV2CommitShort: preV2.sourceCommitShort || null,
		preV2GeneratedAt: preV2.generatedAt || null,
		currentSnapshotGeneratedAt: current.generatedAt || null,
		manifestVersion,
		totals: {
			changed: changed.length,
			added: added.length,
			total: changed.length + added.length,
		},
		changed,
		added,
	};

	fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, "\t") + "\n");

	const sizeKb = (fs.statSync(MANIFEST_PATH).size / 1024).toFixed(1);
	console.log("");
	console.log(`  Scanned ${totalScanned} English keys`);
	console.log(`  Skipped ${skippedBrand} brand-identical keys`);
	console.log(`  Changed: ${changed.length}`);
	console.log(`  Added:   ${added.length}`);
	console.log(`  Total:   ${changed.length + added.length}`);
	console.log("");
	console.log(`  manifestVersion: ${manifestVersion}`);
	console.log(
		`  Wrote (${sizeKb} KB) to ${path.relative(REPO_ROOT, MANIFEST_PATH)}`,
	);

	// Break down `changed` by namespace for quick sanity check
	const byNsChanged = {};
	for (const e of changed) byNsChanged[e.namespace] = (byNsChanged[e.namespace] || 0) + 1;
	console.log("");
	console.log("  Changed by namespace:");
	for (const [ns, n] of Object.entries(byNsChanged).sort((a, b) => b[1] - a[1])) {
		console.log(`    ${ns}: ${n}`);
	}

	const byNsAdded = {};
	for (const e of added) byNsAdded[e.namespace] = (byNsAdded[e.namespace] || 0) + 1;
	console.log("");
	console.log("  Added by namespace (top 20):");
	const topAdded = Object.entries(byNsAdded).sort((a, b) => b[1] - a[1]);
	for (const [ns, n] of topAdded.slice(0, 20)) {
		console.log(`    ${ns}: ${n}`);
	}
	if (topAdded.length > 20) {
		const rest = topAdded.slice(20).reduce((acc, [, n]) => acc + n, 0);
		console.log(`    (${topAdded.length - 20} more namespaces, ${rest} keys)`);
	}
}

main();
