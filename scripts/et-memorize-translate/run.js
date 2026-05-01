#!/usr/bin/env node
/**
 * Add new keys to Estonian translations:
 * - index_et.json: 2 new self-custody-4 keys
 * - wallets_et.json: 3 new wallets_s6_c4b_a/b/c keys (memorize-seed inline link)
 *
 * Bumps @metadata.last-updated to 2026-04-30 in each file.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function loadJson(relPath) {
	const abs = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(abs, "utf8");
	return { abs, obj: JSON.parse(raw) };
}

function saveJson(abs, obj) {
	const text = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, text, "utf8");
}

function bumpMetadata(obj) {
	if (!obj["@metadata"]) {
		obj["@metadata"] = { authors: ["Satoshi"], "last-updated": TODAY, locale: "et" };
		return;
	}
	obj["@metadata"]["last-updated"] = TODAY;
}

// --- index_et.json ---
{
	const { abs, obj } = loadJson("i18n/et/index_et.json");
	obj.home_card_label_self_custody_4 = "Viimase abinõu varundus";
	obj.home_link_title_self_custody_4 = "Kuidas hoida Bitcoini oma peas";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log("Updated:", abs);
}

// --- wallets_et.json ---
{
	const { abs, obj } = loadJson("i18n/et/wallets_et.json");
	obj.wallets_s6_c4b_a = "Veel ühe vastupidavuskihi jaoks võid ka";
	obj.wallets_s6_c4b_b = "oma taastefraasi pähe õppida";
	obj.wallets_s6_c4b_c = "nähtamatu varundusena, mis rändab koos sinuga.";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log("Updated:", abs);
}

// --- memorize-your-seed-phrase_et.json: translate the brain-wallet research source ---
{
	const { abs, obj } = loadJson("i18n/et/memorize-your-seed-phrase_et.json");
	obj.sources_brain_wallet_research = "Vasek, Bonneau, Castellucci, Keith & Moore — Bitcoini ajulekk: Bitcoini ajurahakottide kasutamise ja kuritarvitamise uurimine (Financial Cryptography 2016)";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log("Updated:", abs);
}

console.log("Done.");
