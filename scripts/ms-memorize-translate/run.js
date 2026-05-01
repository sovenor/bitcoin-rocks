#!/usr/bin/env node
/**
 * Add the new "memorize your seed phrase" translation keys to the existing
 * Malay (ms) i18n files: index_ms.json and wallets_ms.json.
 *
 * - Inserts 2 keys into index_ms.json (home_card_label_self_custody_4 + home_link_title_self_custody_4)
 * - Inserts 3 keys into wallets_ms.json (wallets_s6_c4b_a/b/c)
 * - Bumps @metadata.last-updated on both files to 2026-04-30
 * - Writes back with TAB indentation + trailing newline
 */

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

function bumpMeta(obj) {
	if (obj["@metadata"] && typeof obj["@metadata"] === "object") {
		obj["@metadata"]["last-updated"] = TODAY;
	}
}

// --- index_ms.json ---
{
	const p = path.join(ROOT, "i18n", "ms", "index_ms.json");
	const obj = readJson(p);
	obj["home_card_label_self_custody_4"] = "Sandaran pilihan terakhir";
	obj["home_link_title_self_custody_4"] = "Cara menyimpan Bitcoin dalam otak anda";
	bumpMeta(obj);
	writeJson(p, obj);
	console.log("Updated", path.relative(ROOT, p));
}

// --- wallets_ms.json ---
{
	const p = path.join(ROOT, "i18n", "ms", "wallets_ms.json");
	const obj = readJson(p);
	obj["wallets_s6_c4b_a"] = "Untuk satu lagi lapisan ketahanan, anda juga boleh";
	obj["wallets_s6_c4b_b"] = "menghafal frasa pemulihan anda";
	obj["wallets_s6_c4b_c"] = "sebagai sandaran tidak kelihatan yang pergi bersama anda.";
	bumpMeta(obj);
	writeJson(p, obj);
	console.log("Updated", path.relative(ROOT, p));
}

console.log("Done.");
