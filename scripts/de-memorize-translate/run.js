#!/usr/bin/env node
/**
 * Add new German keys to wallets_de.json and index_de.json for the
 * "memorize your seed phrase" page launch. Bumps @metadata.last-updated.
 */

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..", "..");
const today = "2026-04-30";

function updateJson(relativePath, mutate) {
	const absolute = path.join(repoRoot, relativePath);
	const raw = fs.readFileSync(absolute, "utf8");
	const obj = JSON.parse(raw);
	mutate(obj);
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = today;
	}
	fs.writeFileSync(absolute, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`updated ${relativePath}`);
}

// index_de.json — 2 new keys for the homepage self-custody section.
updateJson("i18n/de/index_de.json", (obj) => {
	obj["home_card_label_self_custody_4"] = "Backup als letzte Rettung";
	obj["home_link_title_self_custody_4"] = "Wie Du Bitcoin in Deinem Kopf speicherst";
});

// wallets_de.json — 3 new inline-link keys (a/b/c) just after wallets_s6_c4.
// _b is the link text — must be a coherent linkable noun phrase.
updateJson("i18n/de/wallets_de.json", (obj) => {
	const next = {};
	for (const [key, value] of Object.entries(obj)) {
		next[key] = value;
		if (key === "wallets_s6_c4") {
			next["wallets_s6_c4b_a"] = "Für eine zusätzliche Schicht an Widerstandsfähigkeit kannst Du auch";
			next["wallets_s6_c4b_b"] = "Deine Seed-Phrase auswendig lernen";
			next["wallets_s6_c4b_c"] = "– als unsichtbares Backup, das überall mit Dir reist.";
		}
	}
	for (const key of Object.keys(obj)) {
		delete obj[key];
	}
	for (const [key, value] of Object.entries(next)) {
		obj[key] = value;
	}
});

console.log("done");
