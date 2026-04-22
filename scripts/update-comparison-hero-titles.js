#!/usr/bin/env node
/**
 * Update `hero_title` on every English comparison-page JSON file so
 * the H1 has inline colored spans:
 *   - "Bitcoin"            → <span class="orange">Bitcoin</span>
 *   - the asset word       → <span class="asset">Gold</span> / etc.
 *
 * The `ComparisonPageLayout` renders this via `dangerouslySetInnerHTML`,
 * letting each page reuse its per-page `--asset-accent` color without
 * introducing per-page H1 logic. Other-language JSON files still fall
 * back to English per-key via `loadNamespaceMessages()`.
 */

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.join(__dirname, "..");
const enDir = path.join(repoRoot, "i18n", "en");

// [filename, orange word, asset word as-written in the current hero_title]
const pages = [
	["bitcoin-vs-gold_en.json",        "Bitcoin", "Gold"],
	["bitcoin-vs-cash_en.json",        "Bitcoin", "Cash"],
	["bitcoin-vs-banks_en.json",       "Bitcoin", "Banks"],
	["bitcoin-vs-stocks_en.json",      "Bitcoin", "Stocks"],
	["bitcoin-vs-bonds_en.json",       "Bitcoin", "Bonds"],
	["bitcoin-vs-real-estate_en.json", "Bitcoin", "Real Estate"],
	["bitcoin-vs-crypto_en.json",      "Bitcoin", "Crypto"],
	["bitcoin-vs-cbdc_en.json",        "Bitcoin", "CBDCs"],
	["bitcoin-vs-fine-art_en.json",    "Bitcoin", "Fine Art"],
	["bitcoin-vs-visa_en.json",        "Bitcoin", "Visa"],
];

const today = new Date().toISOString().slice(0, 10);

for (const [fileName, btcWord, assetWord] of pages) {
	const p = path.join(enDir, fileName);
	const raw = fs.readFileSync(p, "utf8");
	const data = JSON.parse(raw);

	if (typeof data.hero_title !== "string") {
		console.warn(`⚠  ${fileName}: no hero_title key, skipping`);
		continue;
	}

	const original = data.hero_title;

	// Strip any previous span markup so re-running the script is idempotent.
	const stripped = original.replace(/<[^>]+>/g, "");

	// Replace the LAST occurrence of each word so we don't accidentally
	// over-replace if the word appears earlier (none currently do, but
	// future translations might).
	function wrapLast(text, word, className) {
		const idx = text.lastIndexOf(word);
		if (idx === -1) return text;
		return (
			text.slice(0, idx) +
			`<span class="${className}">${word}</span>` +
			text.slice(idx + word.length)
		);
	}

	let next = stripped;
	next = wrapLast(next, btcWord, "orange");
	next = wrapLast(next, assetWord, "asset");

	if (next === original) {
		console.log(`·  ${fileName}: unchanged`);
		continue;
	}

	data.hero_title = next;
	if (data["@metadata"] && typeof data["@metadata"] === "object") {
		data["@metadata"]["last-updated"] = today;
	}

	fs.writeFileSync(p, JSON.stringify(data, null, "\t") + "\n", "utf8");
	console.log(`✓  ${fileName}: ${next}`);
}
