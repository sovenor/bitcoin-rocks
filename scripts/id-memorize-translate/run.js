#!/usr/bin/env node
/**
 * Add new Indonesian translation keys for the "memorize your seed phrase"
 * launch into existing index_id.json and wallets_id.json files, and bump
 * each file's @metadata.last-updated.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(relPath) {
	const abs = path.join(REPO_ROOT, relPath);
	return { abs, data: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function writeJson(abs, data) {
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
}

// --- index_id.json ----------------------------------------------------------
const indexAdditions = {
	home_card_label_self_custody_4: "Cadangan pamungkas",
	home_link_title_self_custody_4: "Cara Menyimpan Bitcoin di Otak Anda",
};

{
	const { abs, data } = readJson("i18n/id/index_id.json");
	for (const [k, v] of Object.entries(indexAdditions)) {
		data[k] = v;
	}
	if (data["@metadata"]) {
		data["@metadata"]["last-updated"] = TODAY;
	}
	writeJson(abs, data);
	console.log(`updated ${abs}`);
}

// --- wallets_id.json --------------------------------------------------------
const walletsAdditions = {
	wallets_s6_c4b_a: "Untuk lapisan ketahanan tambahan, Anda juga dapat",
	wallets_s6_c4b_b: "menghafal frase pemulihan Anda",
	wallets_s6_c4b_c: "sebagai cadangan tak terlihat yang ikut bersama Anda.",
};

{
	const { abs, data } = readJson("i18n/id/wallets_id.json");
	for (const [k, v] of Object.entries(walletsAdditions)) {
		data[k] = v;
	}
	if (data["@metadata"]) {
		data["@metadata"]["last-updated"] = TODAY;
	}
	writeJson(abs, data);
	console.log(`updated ${abs}`);
}

console.log("done");
