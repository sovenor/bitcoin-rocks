#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function updateFile(relPath, additions) {
	const abs = path.join(ROOT, relPath);
	const raw = fs.readFileSync(abs, "utf8");
	const obj = JSON.parse(raw);
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = TODAY;
	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, out, "utf8");
	console.log(`updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_sl.json — 2 new self-custody-4 keys
updateFile("i18n/sl/index_sl.json", {
	home_card_label_self_custody_4: "Varnostna kopija v skrajni sili",
	home_link_title_self_custody_4: "Kako shraniti Bitcoin v svoje možgane",
});

// wallets_sl.json — 3 new inline-link keys
updateFile("i18n/sl/wallets_sl.json", {
	wallets_s6_c4b_a: "Za še eno plast odpornosti si lahko tudi",
	wallets_s6_c4b_b: "zapomnite svojo obnovitveno frazo",
	wallets_s6_c4b_c: "kot nevidno varnostno kopijo, ki potuje z vami.",
});

console.log("done");
