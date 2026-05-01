#!/usr/bin/env node
// Adds new translation keys to existing nb (Norwegian Bokmal) i18n files
// for the "memorize your seed phrase" feature, and bumps last-updated.

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");

function updateJson(relPath, additions) {
	const filePath = path.join(repoRoot, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = "2026-04-30";
	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}
	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_nb.json — 2 new keys for the self-custody card
updateJson("i18n/nb/index_nb.json", {
	home_card_label_self_custody_4: "Sikkerhetskopi som siste utvei",
	home_link_title_self_custody_4: "Hvordan lagre Bitcoin i hjernen din",
});

// wallets_nb.json — 3 new keys for the inline-link sentence.
// English source:
//   _a: "For one more layer of resilience, you can also"
//   _b: "memorize your seed phrase"
//   _c: "as an invisible backup that travels with you."
// Joined: "For one more layer of resilience, you can also memorize your seed phrase as an invisible backup that travels with you."
//
// Norwegian Bokmal joined:
// "For et ekstra lag med motstandsdyktighet kan du også memorere gjenopprettingsfrasen din som en usynlig sikkerhetskopi som følger deg overalt."
updateJson("i18n/nb/wallets_nb.json", {
	wallets_s6_c4b_a: "For et ekstra lag med motstandsdyktighet kan du også",
	wallets_s6_c4b_b: "memorere gjenopprettingsfrasen din",
	wallets_s6_c4b_c: "som en usynlig sikkerhetskopi som følger deg overalt.",
});
