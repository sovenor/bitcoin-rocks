#!/usr/bin/env node
/**
 * Adds the new memorize-your-seed-phrase keys to the existing Czech
 * index_cs.json + wallets_cs.json files, and bumps last-updated to today.
 *
 * Run from repo root: node scripts/cs-memorize-translate/run.js
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

// ----- index_cs.json -----
{
	const { abs, obj } = loadJson("i18n/cs/index_cs.json");
	obj["home_card_label_self_custody_4"] = "Záloha v krajním případě";
	obj["home_link_title_self_custody_4"] = "Jak uchovávat Bitcoin ve své hlavě";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

// ----- wallets_cs.json -----
{
	const { abs, obj } = loadJson("i18n/cs/wallets_cs.json");
	obj["wallets_s6_c4b_a"] = "Pro další vrstvu odolnosti si také můžete";
	obj["wallets_s6_c4b_b"] = "zapamatovat svou seed frázi";
	obj["wallets_s6_c4b_c"] = "jako neviditelnou zálohu, která jde s vámi.";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

console.log("Done.");
