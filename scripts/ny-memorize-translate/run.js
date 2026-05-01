"use strict";

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const today = "2026-04-30";

function readJson(relPath) {
	const abs = path.join(repoRoot, relPath);
	const raw = fs.readFileSync(abs, "utf8");
	return { abs, obj: JSON.parse(raw) };
}

function writeJson(abs, obj) {
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, out, "utf8");
}

// --- index_ny.json: add 2 keys ---
{
	const { abs, obj } = readJson("i18n/ny/index_ny.json");
	obj["home_card_label_self_custody_4"] = "Chosungira chomaliza";
	obj["home_link_title_self_custody_4"] = "Momwe Mungasungire Bitcoin Mubongo Mwanu";
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = today;
	}
	writeJson(abs, obj);
	console.log("Updated i18n/ny/index_ny.json");
}

// --- wallets_ny.json: add 3 keys ---
{
	const { abs, obj } = readJson("i18n/ny/wallets_ny.json");
	obj["wallets_s6_c4b_a"] = "Kuti muonjezere chosungira chimodzinso, mukhozanso";
	obj["wallets_s6_c4b_b"] = "kusunga mawu anu obwezeretsa mubongo";
	obj["wallets_s6_c4b_c"] = "ngati chosungira chosaoneka chimene chimayenda nanu.";
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = today;
	}
	writeJson(abs, obj);
	console.log("Updated i18n/ny/wallets_ny.json");
}

console.log("Done.");
