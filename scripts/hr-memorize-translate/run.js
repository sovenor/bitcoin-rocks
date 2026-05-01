#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Croatian i18n files.
 * - i18n/hr/index_hr.json: 2 new keys
 * - i18n/hr/wallets_hr.json: 3 new keys
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

// --- index_hr.json ---
{
	const { abs, data } = readJson("i18n/hr/index_hr.json");
	data["home_card_label_self_custody_4"] = "Sigurnosna kopija u krajnjoj nuždi";
	data["home_link_title_self_custody_4"] = "Kako pohraniti Bitcoin u svoj mozak";
	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log("Updated", abs);
}

// --- wallets_hr.json ---
{
	const { abs, data } = readJson("i18n/hr/wallets_hr.json");
	// Sentence assembled as: _a + " " + <link>_b</link> + " " + _c
	// Croatian: "Za još jedan sloj otpornosti možete i [zapamtiti svoju seed frazu] kao nevidljivu sigurnosnu kopiju koja putuje s vama."
	data["wallets_s6_c4b_a"] = "Za još jedan sloj otpornosti možete i";
	data["wallets_s6_c4b_b"] = "zapamtiti svoju seed frazu";
	data["wallets_s6_c4b_c"] = "kao nevidljivu sigurnosnu kopiju koja putuje s vama.";
	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log("Updated", abs);
}

console.log("Done.");
