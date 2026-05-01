#!/usr/bin/env node
/**
 * Add new keys for the "Memorize your seed phrase" page to existing
 * Sinhala (si) i18n files. Bumps last-updated to 2026-04-30 and writes
 * back with TAB indentation.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(rel) {
	const abs = path.join(REPO_ROOT, rel);
	const raw = fs.readFileSync(abs, "utf8");
	return { abs, obj: JSON.parse(raw) };
}

function writeJson(abs, obj) {
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, out, "utf8");
}

function bumpLastUpdated(obj) {
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = TODAY;
}

// --- index_si.json: 2 new keys -------------------------------------------
{
	const { abs, obj } = readJson("i18n/si/index_si.json");
	const additions = {
		home_card_label_self_custody_4: "අවසාන පියවර ලෙස බැකප්",
		home_link_title_self_custody_4: "ඔබේ මොළයේ Bitcoin ගබඩා කරන්නේ කෙසේද",
	};
	for (const [k, v] of Object.entries(additions)) {
		obj[k] = v;
	}
	bumpLastUpdated(obj);
	writeJson(abs, obj);
	console.log("Updated:", abs);
}

// --- wallets_si.json: 3 new keys (inline-link triple) --------------------
{
	const { abs, obj } = readJson("i18n/si/wallets_si.json");
	const additions = {
		wallets_s6_c4b_a: "තවත් එක් අතිරික්ත ස්ථරයක් සඳහා, ඔබට",
		wallets_s6_c4b_b: "ඔබේ ප්‍රතිසාධන වාක්‍ය ඛණ්ඩය මතකයට ගත හැකිය",
		wallets_s6_c4b_c: "— ඔබ සමඟ ගමන් කරන අදෘශ්‍ය බැකප් එකක් ලෙස.",
	};
	for (const [k, v] of Object.entries(additions)) {
		obj[k] = v;
	}
	bumpLastUpdated(obj);
	writeJson(abs, obj);
	console.log("Updated:", abs);
}

console.log("Done.");
