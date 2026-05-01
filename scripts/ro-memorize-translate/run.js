#!/usr/bin/env node
/**
 * Adds the new memorize-your-seed-phrase keys to the existing Romanian
 * index_ro.json + wallets_ro.json files, and bumps last-updated to today.
 *
 * Run from repo root: node scripts/ro-memorize-translate/run.js
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
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(abs, out, "utf8");
}

function bumpMetadata(obj) {
	if (!obj["@metadata"]) {
		obj["@metadata"] = {};
	}
	obj["@metadata"]["last-updated"] = TODAY;
}

// ----- index_ro.json -----
{
	const { abs, obj } = loadJson("i18n/ro/index_ro.json");
	obj["home_card_label_self_custody_4"] = "Backup de ultimă instanță";
	obj["home_link_title_self_custody_4"] = "Cum să stochezi Bitcoin în creierul tău";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

// ----- wallets_ro.json -----
{
	const { abs, obj } = loadJson("i18n/ro/wallets_ro.json");
	obj["wallets_s6_c4b_a"] = "Pentru un strat suplimentar de reziliență, poți, de asemenea, să-ți";
	obj["wallets_s6_c4b_b"] = "memorezi fraza de recuperare";
	obj["wallets_s6_c4b_c"] = "ca un backup invizibil care călătorește cu tine.";
	bumpMetadata(obj);
	saveJson(abs, obj);
	console.log(`Updated ${abs}`);
}

console.log("Done.");
