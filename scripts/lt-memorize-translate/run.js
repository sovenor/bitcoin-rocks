#!/usr/bin/env node
/* Adds new memorize-your-seed-phrase keys to lt/index_lt.json + lt/wallets_lt.json. */
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");

function updateJson(relPath, patch) {
	const full = path.join(repoRoot, relPath);
	const obj = JSON.parse(fs.readFileSync(full, "utf8"));
	for (const [k, v] of Object.entries(patch)) {
		obj[k] = v;
	}
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = "2026-04-30";
	}
	fs.writeFileSync(full, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath}`);
}

updateJson("i18n/lt/index_lt.json", {
	home_card_label_self_custody_4: "Paskutinė atsarginė priemonė",
	home_link_title_self_custody_4: "Kaip saugoti Bitcoin savo galvoje",
});

updateJson("i18n/lt/wallets_lt.json", {
	wallets_s6_c4b_a: "Norėdami dar vieno atsparumo sluoksnio, taip pat galite",
	wallets_s6_c4b_b: "įsiminti savo atkūrimo frazę",
	wallets_s6_c4b_c: "kaip nematomą atsarginę kopiją, kuri keliauja kartu su jumis.",
});
