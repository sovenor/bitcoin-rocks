#!/usr/bin/env node
/*
 * Adds the new "memorize your seed phrase" related keys to the Filipino
 * (fil) i18n files for index and wallets, and bumps each file's
 * @metadata.last-updated to 2026-04-30.
 *
 * Run from the repo root:
 *   node scripts/fil-memorize-translate/run.js
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

const indexPath = path.join(REPO_ROOT, "i18n", "fil", "index_fil.json");
const walletsPath = path.join(REPO_ROOT, "i18n", "fil", "wallets_fil.json");

const indexAdditions = {
	home_card_label_self_custody_4: "Backup ng huling pag-asa",
	home_link_title_self_custody_4: "Paano itago ang Bitcoin sa iyong utak",
};

const walletsAdditions = {
	wallets_s6_c4b_a: "Para sa karagdagang layer ng resilience, maaari mo ring",
	wallets_s6_c4b_b: "isaulo ang iyong seed phrase",
	wallets_s6_c4b_c: "bilang invisible na backup na sumasama sa iyo.",
};

function patchFile(filePath, additions) {
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"] && typeof obj["@metadata"] === "object") {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${path.relative(REPO_ROOT, filePath)} (+${Object.keys(additions).length} keys, last-updated -> ${TODAY})`);
}

patchFile(indexPath, indexAdditions);
patchFile(walletsPath, walletsAdditions);

console.log("Done.");
