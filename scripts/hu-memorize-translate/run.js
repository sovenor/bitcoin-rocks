#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Hungarian i18n files.
 * - i18n/hu/index_hu.json: 2 new keys
 * - i18n/hu/wallets_hu.json: 3 new keys
 * Bumps @metadata.last-updated to 2026-04-30 in both.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(rel) {
	const abs = path.join(REPO_ROOT, rel);
	return { abs, data: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function writeJson(abs, data) {
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
}

// --- index_hu.json ---
{
	const { abs, data } = readJson("i18n/hu/index_hu.json");
	data["home_card_label_self_custody_4"] = "Végső biztonsági mentés";
	data["home_link_title_self_custody_4"] = "Hogyan tárold a Bitcoint a fejedben";
	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log("Updated", abs);
}

// --- wallets_hu.json ---
{
	const { abs, data } = readJson("i18n/hu/wallets_hu.json");
	// Sentence assembled as: _a + " " + <link>_b</link> + " " + _c
	// Hungarian: "A még nagyobb ellenálló képességért akár [memorizálhatod is a helyreállítási kifejezésedet] láthatatlan biztonsági mentésként, amely mindig veled van."
	data["wallets_s6_c4b_a"] = "A még nagyobb ellenálló képességért akár";
	data["wallets_s6_c4b_b"] = "memorizálhatod is a helyreállítási kifejezésedet";
	data["wallets_s6_c4b_c"] = "láthatatlan biztonsági mentésként, amely mindig veled van.";
	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log("Updated", abs);
}

console.log("Done.");
