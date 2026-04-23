#!/usr/bin/env node
/**
 * step3.5-add-source-keys.js — Add i18n keys for hardcoded source citations.
 *
 * Step 3.5 of the i18n cleanup workflow. The V2 page migration left source
 * citation `<li>` entries (under the "Sources" heading at the bottom of
 * most content pages) as raw English literals in the `.tsx` files. This
 * script adds the corresponding translation keys to the relevant English
 * JSON files so a follow-up pass can swap the literals for `t(...)` calls.
 *
 * Convention: per-page source keys live in the page's own namespace JSON
 * file (so translators see them next to the other strings for that page).
 * Key name: `sources_<id>` where `<id>` is a short stable snake_case
 * slug derived from the anchor content (never from the URL — URLs
 * change, the displayed citation is stable).
 *
 * All edits bump `@metadata.last-updated` to today. Runs idempotently —
 * if a key already exists with the same value, the script is a no-op.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_EN_ROOT = path.join(REPO_ROOT, "i18n", "en");

/** Per-namespace key additions. Keep in sync with the .tsx source-list edits. */
const ADDITIONS = {
	"common": {
		// Reusable sources that appear verbatim on many pages (the
		// Bitcoin whitepaper, FRED datasets, etc.).
		common_source_whitepaper:
			"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		common_source_btcpayserver:
			"BTCPay Server — Free, open-source, self-hosted Bitcoin payment processor",
		common_source_btc_map:
			"BTC Map — Worldwide directory of Bitcoin-accepting merchants",
		common_source_strike_business:
			"Strike — Bitcoin & Lightning payments for businesses",
		common_source_oshi:
			"Oshi — Bitcoin rewards platform for merchants",
		common_source_fred_money_supply_index:
			"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
		common_source_bls_cpi:
			"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
		// Generic language-switcher pill for submitting a missing language.
		common_language_switcher_add_language: "Add language",
		// Site-wide default description (used by the root layout + metadata).
		common_site_tagline: "Bitcoin education for everyone.",
	},
	"business/accounting": {
		sources_satoshi_pacioli:
			"Satoshi Pacioli Accounting Services — Bitcoin accounting for businesses",
		sources_bitcoin_price_report:
			"Bitcoin Price Report — Bitcoin current & historical dollar price",
		sources_spreadsheet_guru:
			"The Spreadsheet Guru — Import cryptocurrency prices into Excel",
	},
	"business/wallets": {
		sources_square: "Square — Accept Bitcoin payments",
		sources_breez_business: "Breez — Bitcoin-only Lightning wallet",
		sources_opennode: "OpenNode — Bitcoin payment processor",
		sources_ibex: "IBEX — Lightning payments infrastructure",
		sources_zaprite: "Zaprite — Bitcoin invoicing for businesses",
	},
	"buy": {
		sources_strike_lightning:
			"Strike — Buy Bitcoin with Lightning Network support",
		sources_kraken: "Kraken — Established Bitcoin exchange",
		sources_relai: "Relai — Swiss Bitcoin-only self-custody app",
		sources_swan: "Swan Bitcoin — Bitcoin-only dollar-cost averaging",
		sources_river: "River — Bitcoin-only buying, mining, and custody",
		sources_coinatmradar:
			"Coin ATM Radar — Worldwide Bitcoin ATM directory",
		sources_bisq: "Bisq — Decentralized peer-to-peer Bitcoin exchange",
	},
	"compound-inflation-calculator": {
		sources_fred_cpi_urban:
			"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
		sources_fred_m1:
			"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	},
	"inflation": {
		sources_bitcoin_price_report_4yr:
			"Bitcoin Price Report — 4-year performance charts (all currencies)",
		sources_bitcoin_source_code: "Bitcoin Source Code — 21 Million Supply Cap",
		sources_mempool_space: "Mempool.space — Bitcoin Supply & Mining Data",
		sources_canadian_trucker:
			"Canadian trucker protest — Bitcoin used to bypass frozen bank accounts (YouTube)",
		sources_nigeria_endsars:
			"Quartz Africa — How Bitcoin powered Nigeria’s EndSARS protests",
		sources_texas_mining:
			"Texas Bitcoin mining and the electric grid (YouTube)",
		sources_pennsylvania_mining:
			"Pennsylvania Bitcoin mining reclaims waste methane (YouTube)",
	},
	"lightning": {
		sources_lightning_paper:
			"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
		sources_acinq_phoenix: "ACINQ — Phoenix Lightning wallet",
		sources_breez_lightning: "Breez — Self-custodial Lightning wallet",
		sources_wallet_of_satoshi:
			"Wallet of Satoshi — Custodial Lightning wallet",
		sources_lightning_labs:
			"Lightning Labs — Lightning Network documentation",
	},
	"nostr/index": {
		sources_nostr_how: "nostr.how — What is Nostr?",
		sources_nostr_protocol:
			"Nostr Protocol — Open-source specification",
		sources_primal:
			"Primal — Nostr client with a built-in Bitcoin zap wallet",
		sources_damus: "Damus — iPhone Nostr client",
		sources_iris: "Iris — Browser-based Nostr client",
	},
	"wallets": {
		sources_bitcoin_org_choose:
			"Bitcoin.org — Choose Your Wallet",
		sources_jameson_lopp:
			"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
		sources_blockstream_green:
			"Blockstream Green — Self-custody Bitcoin wallet",
		sources_blockstream_jade:
			"Blockstream Jade — Bitcoin hardware wallet",
		sources_coldcard_mk5:
			"Coinkite — Coldcard MK5 hardware wallet",
		sources_coldcard_q:
			"Coinkite — Coldcard Q hardware wallet",
		sources_passport: "Foundation Devices — Passport hardware wallet",
		sources_seedsigner:
			"SeedSigner — Open-source DIY Bitcoin signing device",
	},
};

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

function namespaceToEnPath(namespace) {
	const lastSlash = namespace.lastIndexOf("/");
	const dir = lastSlash === -1 ? "" : namespace.slice(0, lastSlash);
	const base = lastSlash === -1 ? namespace : namespace.slice(lastSlash + 1);
	return path.join(I18N_EN_ROOT, dir, `${base}_en.json`);
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function main() {
	let filesTouched = 0;
	let keysAdded = 0;
	const today = todayIso();

	for (const [namespace, newKeys] of Object.entries(ADDITIONS)) {
		const filePath = namespaceToEnPath(namespace);
		if (!fs.existsSync(filePath)) {
			console.error(`  [skip] ${namespace}: ${filePath} does not exist`);
			continue;
		}
		const json = readJson(filePath);
		let added = 0;
		for (const [key, value] of Object.entries(newKeys)) {
			if (key in json && json[key] === value) continue;
			json[key] = value;
			added++;
		}
		if (added === 0) {
			continue;
		}
		// Bump last-updated.
		if (json["@metadata"] && typeof json["@metadata"] === "object") {
			json["@metadata"] = { ...json["@metadata"], "last-updated": today };
		}
		writeJson(filePath, json);
		filesTouched++;
		keysAdded += added;
		console.log(
			`  ${namespace.padEnd(40, " ")} +${String(added).padStart(3, " ")} keys`,
		);
	}

	console.log("");
	console.log(
		`Done — added ${keysAdded} keys across ${filesTouched} English JSON files (last-updated bumped to ${today}).`,
	);
}

main();
