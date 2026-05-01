#!/usr/bin/env node
/**
 * Add new Greek translation keys for the memorize-your-seed-phrase rollout
 * to the two existing locale files (index_el.json + wallets_el.json).
 *
 * Bumps @metadata.last-updated on the touched files.
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const today = "2026-04-30";

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

function bumpMeta(obj) {
	if (!obj["@metadata"]) {
		obj["@metadata"] = {};
	}
	obj["@metadata"]["last-updated"] = today;
}

// --- index_el.json: add 2 new self-custody keys ---
const indexPath = path.join(repoRoot, "i18n", "el", "index_el.json");
const indexObj = readJson(indexPath);

const indexAdditions = {
	home_card_label_self_custody_4: "Τελευταίας ανάγκης αντίγραφο ασφαλείας",
	home_link_title_self_custody_4: "Πώς να αποθηκεύσετε το Bitcoin στο μυαλό σας",
};

for (const [k, v] of Object.entries(indexAdditions)) {
	indexObj[k] = v;
}
bumpMeta(indexObj);
writeJson(indexPath, indexObj);
console.log(`updated ${path.relative(repoRoot, indexPath)} (+${Object.keys(indexAdditions).length} keys)`);

// --- wallets_el.json: add 3 new s6_c4b inline-link keys ---
const walletsPath = path.join(repoRoot, "i18n", "el", "wallets_el.json");
const walletsObj = readJson(walletsPath);

const walletsAdditions = {
	wallets_s6_c4b_a: "Για ένα ακόμη επίπεδο ανθεκτικότητας, μπορείτε επίσης να",
	wallets_s6_c4b_b: "απομνημονεύσετε τη φράση ανάκτησής σας",
	wallets_s6_c4b_c: "ως ένα αόρατο αντίγραφο ασφαλείας που σας ακολουθεί παντού.",
};

for (const [k, v] of Object.entries(walletsAdditions)) {
	walletsObj[k] = v;
}
bumpMeta(walletsObj);
writeJson(walletsPath, walletsObj);
console.log(`updated ${path.relative(repoRoot, walletsPath)} (+${Object.keys(walletsAdditions).length} keys)`);

console.log("done.");
