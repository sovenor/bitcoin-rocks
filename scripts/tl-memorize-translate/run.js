#!/usr/bin/env node
/**
 * Add new Tagalog translation keys for the memorize-your-seed-phrase page:
 *   - i18n/tl/index_tl.json: 2 new keys (home_card_label_self_custody_4, home_link_title_self_custody_4)
 *   - i18n/tl/wallets_tl.json: 3 new keys (wallets_s6_c4b_a/b/c)
 *
 * Bumps @metadata.last-updated to 2026-04-30 in both files.
 * Writes back with TAB indentation (project convention).
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(relPath) {
	const abs = path.join(REPO_ROOT, relPath);
	return { abs, data: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function writeJson(abs, data) {
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
}

// --- index_tl.json ----------------------------------------------------------
{
	const { abs, data } = readJson("i18n/tl/index_tl.json");

	// Tagalog translations:
	//   "Backup of last resort"          → "Huling-paraang backup"
	//   "How to store Bitcoin in your brain" → "Paano Iimbak ang Bitcoin sa Iyong Utak"
	data["home_card_label_self_custody_4"] = "Huling-paraang backup";
	data["home_link_title_self_custody_4"] = "Paano Iimbak ang Bitcoin sa Iyong Utak";

	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;

	writeJson(abs, data);
	console.log("Updated", abs);
}

// --- wallets_tl.json --------------------------------------------------------
{
	const { abs, data } = readJson("i18n/tl/wallets_tl.json");

	// Tagalog translations for the 3-key inline-link sentence.
	// English joined: "For one more layer of resilience, you can also memorize your seed phrase as an invisible backup that travels with you."
	// Tagalog joined: "Para sa isa pang layer ng resilience, maaari mo ring isaulo ang iyong seed phrase bilang isang hindi nakikitang backup na sumasama sa iyo."
	// _b is the linkable noun phrase.
	data["wallets_s6_c4b_a"] = "Para sa isa pang layer ng resilience, maaari mo ring";
	data["wallets_s6_c4b_b"] = "isaulo ang iyong seed phrase";
	data["wallets_s6_c4b_c"] = "bilang isang hindi nakikitang backup na sumasama sa iyo.";

	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;

	writeJson(abs, data);
	console.log("Updated", abs);
}

console.log("Done.");
