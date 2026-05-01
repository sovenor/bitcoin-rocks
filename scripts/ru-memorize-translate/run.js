#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Russian files.
 *  - i18n/ru/index_ru.json   : 2 home-card keys
 *  - i18n/ru/wallets_ru.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_ru.json
patchFile("i18n/ru/index_ru.json", {
	home_card_label_self_custody_4: "Резервная копия на крайний случай",
	home_link_title_self_custody_4: "Как хранить Биткоин в своей голове",
});

// wallets_ru.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Russian rendering: _b is the verb-phrase noun that gets the link ("запомнить свою сид-фразу").
patchFile("i18n/ru/wallets_ru.json", {
	wallets_s6_c4b_a: "Для ещё одного уровня устойчивости вы также можете",
	wallets_s6_c4b_b: "запомнить свою сид-фразу",
	wallets_s6_c4b_c: "как невидимую резервную копию, которая путешествует с вами.",
});

console.log("Done.");
