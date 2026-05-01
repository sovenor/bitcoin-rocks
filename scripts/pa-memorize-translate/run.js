#!/usr/bin/env node
/**
 * Adds the new memorize-your-seed-phrase keys to the existing Punjabi
 * index_pa.json + wallets_pa.json files, and bumps last-updated to today.
 * Also fixes the brain-wallet research source line in
 * memorize-your-seed-phrase_pa.json to satisfy the V2 verifier.
 *
 * Run from repo root: node scripts/pa-memorize-translate/run.js
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function loadJson(relPath) {
	const abs = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(abs, "utf8");
	return { abs, obj: JSON.parse(raw) };
}

function saveJson(abs, obj) {
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, out, "utf8");
}

function bumpMetadata(obj) {
	if (!obj["@metadata"]) {
		obj["@metadata"] = {};
	}
	obj["@metadata"]["last-updated"] = TODAY;
}

// ----- index_pa.json -----
{
	const { abs, obj } = loadJson("i18n/pa/index_pa.json");
	obj["home_card_label_self_custody_4"] = "ਆਖ਼ਰੀ ਉਪਾਅ ਦਾ ਬੈਕਅਪ";
	obj["home_link_title_self_custody_4"] = "ਆਪਣੇ ਦਿਮਾਗ ਵਿੱਚ Bitcoin ਕਿਵੇਂ ਸਟੋਰ ਕਰੋ";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

// ----- wallets_pa.json -----
{
	const { abs, obj } = loadJson("i18n/pa/wallets_pa.json");
	obj["wallets_s6_c4b_a"] = "ਲਚਕਤਾ ਦੀ ਇੱਕ ਹੋਰ ਪਰਤ ਲਈ, ਤੁਸੀਂ";
	obj["wallets_s6_c4b_b"] = "ਆਪਣੀ ਸੀਡ ਫ਼੍ਰੇਜ਼ ਯਾਦ ਕਰ ਸਕਦੇ ਹੋ";
	obj["wallets_s6_c4b_c"] = "ਇੱਕ ਅਦ੍ਰਿਸ਼ ਬੈਕਅਪ ਵਜੋਂ ਜੋ ਤੁਹਾਡੇ ਨਾਲ ਜਾਂਦਾ ਹੈ।";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

// ----- memorize-your-seed-phrase_pa.json (source line fix) -----
{
	const { abs, obj } = loadJson("i18n/pa/memorize-your-seed-phrase_pa.json");
	obj["sources_brain_wallet_research"] = "Vasek, Bonneau, Castellucci, Keith & Moore — Bitcoin ਬ੍ਰੇਨ ਡ੍ਰੇਨ: Bitcoin ਬ੍ਰੇਨ ਵਾਲਿਟ ਦੀ ਵਰਤੋਂ ਅਤੇ ਦੁਰਵਰਤੋਂ ਦੀ ਜਾਂਚ (Financial Cryptography 2016)";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

console.log("Done.");
