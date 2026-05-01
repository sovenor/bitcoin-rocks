#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Amharic files.
 *  - i18n/am/index_am.json   : 2 home-card keys
 *  - i18n/am/wallets_am.json : 3 wallets_s6_c4b_a/b/c keys
 * Bumps @metadata.last-updated to 2026-04-30 in both.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function patchFile(relPath, additions) {
	const filePath = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_am.json
patchFile("i18n/am/index_am.json", {
	home_card_label_self_custody_4: "የመጨረሻ አማራጭ ምትኬ",
	home_link_title_self_custody_4: "ቢትኮይንን በአዕምሮዎ ውስጥ እንዴት ማከማቸት እንደሚቻል",
});

// wallets_am.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Amharic rendering: "ለተጨማሪ የመቋቋም ሽፋን፣ ደግሞ [ሲድ ሐረግዎን ማስታወስ] ይችላሉ — ከእርስዎ ጋር የሚሄድ የማይታይ ምትኬ ሆኖ።"
// _b is the noun phrase that becomes the link target.
patchFile("i18n/am/wallets_am.json", {
	wallets_s6_c4b_a: "ለተጨማሪ የመቋቋም ሽፋን፣ ደግሞ",
	wallets_s6_c4b_b: "ሲድ ሐረግዎን ማስታወስ",
	wallets_s6_c4b_c: "ይችላሉ — ከእርስዎ ጋር የሚሄድ የማይታይ ምትኬ ሆኖ።",
});

console.log("Done.");
