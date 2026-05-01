#!/usr/bin/env node
/**
 * Add new Basque translations for the "memorize your seed phrase" feature.
 * - 2 new keys in i18n/eu/index_eu.json (homepage card label + link title)
 * - 3 new keys in i18n/eu/wallets_eu.json (inline-link sentence pieces)
 * Bumps @metadata.last-updated on both files.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(rel) {
	const abs = path.join(REPO_ROOT, rel);
	return { abs, data: JSON.parse(fs.readFileSync(abs, "utf8")) };
}

function writeJson(abs, data) {
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
}

// --- index_eu.json: 2 new self-custody card keys ---
{
	const { abs, data } = readJson("i18n/eu/index_eu.json");
	data["home_card_label_self_custody_4"] = "Azken babeskopia";
	data["home_link_title_self_custody_4"] = "Nola gorde Bitcoin zure garunean";
	if (data["@metadata"]) data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log(`updated ${abs}`);
}

// --- wallets_eu.json: 3 new inline-link sentence keys ---
// Joined sentence (Basque): "Erresilientzia geruza bat gehiago izateko, zure berreskuratze-esaldia
// memorizatu ere egin dezakezu zurekin doan babeskopia ikusezin gisa."
// _b is the linkable noun phrase.
{
	const { abs, data } = readJson("i18n/eu/wallets_eu.json");
	data["wallets_s6_c4b_a"] = "Erresilientzia-geruza bat gehiago izateko,";
	data["wallets_s6_c4b_b"] = "memorizatu zure berreskuratze-esaldia";
	data["wallets_s6_c4b_c"] = "ere egin dezakezu zurekin doan babeskopia ikusezin gisa.";
	if (data["@metadata"]) data["@metadata"]["last-updated"] = TODAY;
	writeJson(abs, data);
	console.log(`updated ${abs}`);
}

console.log("done.");
