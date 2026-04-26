#!/usr/bin/env node
/**
 * step3.5-rewrite-sources.js — Replace hardcoded source-list text with t() calls.
 *
 * Each entry below describes ONE `<a>…</a>` inside a `<li>…</li>` on a
 * page's sources section. The script locates the exact literal (by URL
 * + anchor text) and rewrites the anchor's children to `{t("<key>")}`.
 *
 * We match on the `href="…"` attribute + the anchor text so the
 * replacement is unambiguous even when two pages share a href (e.g. the
 * Bitcoin whitepaper link appears on almost every content page).
 *
 * Run AFTER `step3.5-add-source-keys.js` so the keys referenced here
 * already exist in the English JSON files.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");

/**
 * Edits — array of `{ file, replacements[] }`. Each replacement is a
 * `{ search, replace }` pair that will be applied once to the file
 * contents via exact string matching. Keep `search` exact (including
 * whitespace/indentation) so the change is surgical.
 */
const EDITS = [
	// ── Business — FAQ ─────────────────────────────────────────────
	{
		file: "app/[locale]/business/faq/page.tsx",
		replacements: [
			{
				search:
					'								>\n									BTC Map — Worldwide directory of Bitcoin-accepting\n									merchants\n								</a>',
				replace:
					'								>\n									{t("common_source_btc_map")}\n								</a>',
			},
			{
				search:
					'								>\n									BTCPay Server — Free, open-source, self-hosted\n									Bitcoin payment processor\n								</a>',
				replace:
					'								>\n									{t("common_source_btcpayserver")}\n								</a>',
			},
			{
				search:
					'								>\n									Strike — Bitcoin & Lightning payments for\n									businesses\n								</a>',
				replace:
					'								>\n									{t("common_source_strike_business")}\n								</a>',
			},
			{
				search:
					'								>\n									Oshi — Bitcoin rewards platform for merchants\n								</a>',
				replace:
					'								>\n									{t("common_source_oshi")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
		],
	},
	// ── Business — index ───────────────────────────────────────────
	{
		file: "app/[locale]/business/page.tsx",
		replacements: [
			{
				search:
					'								>\n									BTC Map — Worldwide directory of Bitcoin-accepting\n									merchants\n								</a>',
				replace:
					'								>\n									{t("common_source_btc_map")}\n								</a>',
			},
			{
				search:
					'								>\n									BTCPay Server — Free, open-source, self-hosted\n									Bitcoin payment processor\n								</a>',
				replace:
					'								>\n									{t("common_source_btcpayserver")}\n								</a>',
			},
			{
				search:
					'								>\n									Strike — Bitcoin & Lightning payments for\n									businesses\n								</a>',
				replace:
					'								>\n									{t("common_source_strike_business")}\n								</a>',
			},
			{
				search:
					'								>\n									Oshi — Bitcoin rewards platform for merchants\n								</a>',
				replace:
					'								>\n									{t("common_source_oshi")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
		],
	},
	// ── Business — Wallets ─────────────────────────────────────────
	{
		file: "app/[locale]/business/wallets/page.tsx",
		replacements: [
			{
				search:
					'								>\n									Square — Accept Bitcoin payments\n								</a>',
				replace:
					'								>\n									{t("sources_square")}\n								</a>',
			},
			{
				search:
					'								>\n									Strike — Bitcoin &amp; Lightning payments for\n									businesses\n								</a>',
				replace:
					'								>\n									{t("common_source_strike_business")}\n								</a>',
			},
			{
				search:
					'								>\n									Breez — Bitcoin-only Lightning wallet\n								</a>',
				replace:
					'								>\n									{t("sources_breez_business")}\n								</a>',
			},
			{
				search:
					'								>\n									OpenNode — Bitcoin payment processor\n								</a>',
				replace:
					'								>\n									{t("sources_opennode")}\n								</a>',
			},
			{
				search:
					'								>\n									IBEX — Lightning payments infrastructure\n								</a>',
				replace:
					'								>\n									{t("sources_ibex")}\n								</a>',
			},
			{
				search:
					'								>\n									BTCPay Server — Free, open-source, self-hosted\n									Bitcoin payment processor\n								</a>',
				replace:
					'								>\n									{t("common_source_btcpayserver")}\n								</a>',
			},
			{
				search:
					'								>\n									Zaprite — Bitcoin invoicing for businesses\n								</a>',
				replace:
					'								>\n									{t("sources_zaprite")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
		],
	},
	// ── Buy ────────────────────────────────────────────────────────
	{
		file: "app/[locale]/buy/page.tsx",
		replacements: [
			{
				search:
					'								>\n									Strike — Buy Bitcoin with Lightning Network support\n								</a>',
				replace:
					'								>\n									{t("sources_strike_lightning")}\n								</a>',
			},
			{
				search:
					'								>\n									Kraken — Established Bitcoin exchange\n								</a>',
				replace:
					'								>\n									{t("sources_kraken")}\n								</a>',
			},
			{
				search:
					'								>\n									Relai — Swiss Bitcoin-only self-custody app\n								</a>',
				replace:
					'								>\n									{t("sources_relai")}\n								</a>',
			},
			{
				search:
					'								>\n									Swan Bitcoin — Bitcoin-only dollar-cost averaging\n								</a>',
				replace:
					'								>\n									{t("sources_swan")}\n								</a>',
			},
			{
				search:
					'								>\n									River — Bitcoin-only buying, mining, and custody\n								</a>',
				replace:
					'								>\n									{t("sources_river")}\n								</a>',
			},
			{
				search:
					'								>\n									Coin ATM Radar — Worldwide Bitcoin ATM directory\n								</a>',
				replace:
					'								>\n									{t("sources_coinatmradar")}\n								</a>',
			},
			{
				search:
					'								>\n									Bisq — Decentralized peer-to-peer Bitcoin exchange\n								</a>',
				replace:
					'								>\n									{t("sources_bisq")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
		],
	},
	// ── Compound Inflation Calculator ──────────────────────────────
	{
		file: "app/[locale]/compound-inflation-calculator/page.tsx",
		replacements: [
			{
				search:
					'								>\n									U.S. Bureau of Labor Statistics — Consumer Price Index\n									(CPI)\n								</a>',
				replace:
					'								>\n									{t("common_source_bls_cpi")}\n								</a>',
			},
			{
				search:
					'								>\n									Federal Reserve Economic Data (FRED) — Consumer Price\n									Index for All Urban Consumers\n								</a>',
				replace:
					'								>\n									{t("sources_fred_cpi_urban")}\n								</a>',
			},
			{
				search:
					'								>\n									Federal Reserve Economic Data (FRED) — M1 Money\n									Supply\n								</a>',
				replace:
					'								>\n									{t("sources_fred_m1")}\n								</a>',
			},
			{
				search:
					'								>\n									Federal Reserve Economic Data (FRED) — Money Supply\n									(Category Index)\n								</a>',
				replace:
					'								>\n									{t("common_source_fred_money_supply_index")}\n								</a>',
			},
		],
	},
	// ── Inflation ──────────────────────────────────────────────────
	{
		file: "app/[locale]/inflation/page.tsx",
		replacements: [
			{
				search:
					'								>\n									Federal Reserve Economic Data (FRED) — Money Supply\n									(Category Index)\n								</a>',
				replace:
					'								>\n									{t("common_source_fred_money_supply_index")}\n								</a>',
			},
			{
				search:
					'								>\n									U.S. Bureau of Labor Statistics — Consumer Price\n									Index (CPI)\n								</a>',
				replace:
					'								>\n									{t("common_source_bls_cpi")}\n								</a>',
			},
			{
				search:
					'								>\n									Bitcoin Price Report — 4-year performance charts\n									(all currencies)\n								</a>',
				replace:
					'								>\n									{t("sources_bitcoin_price_report_4yr")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer\n									Electronic Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
			{
				search:
					'								>\n									Bitcoin Source Code — 21 Million Supply Cap\n								</a>',
				replace:
					'								>\n									{t("sources_bitcoin_source_code")}\n								</a>',
			},
			{
				search:
					'								>\n									Mempool.space — Bitcoin Supply &amp; Mining Data\n								</a>',
				replace:
					'								>\n									{t("sources_mempool_space")}\n								</a>',
			},
			{
				search:
					'								>\n									Canadian trucker protest — Bitcoin used to bypass\n									frozen bank accounts (YouTube)\n								</a>',
				replace:
					'								>\n									{t("sources_canadian_trucker")}\n								</a>',
			},
			{
				search:
					'								>\n									Quartz Africa — How Bitcoin powered Nigeria&rsquo;s\n									EndSARS protests\n								</a>',
				replace:
					'								>\n									{t("sources_nigeria_endsars")}\n								</a>',
			},
			{
				search:
					'								>\n									Texas Bitcoin mining and the electric grid (YouTube)\n								</a>',
				replace:
					'								>\n									{t("sources_texas_mining")}\n								</a>',
			},
			{
				search:
					'								>\n									Pennsylvania Bitcoin mining reclaims waste methane\n									(YouTube)\n								</a>',
				replace:
					'								>\n									{t("sources_pennsylvania_mining")}\n								</a>',
			},
		],
	},
	// ── Lightning ──────────────────────────────────────────────────
	{
		file: "app/[locale]/lightning/page.tsx",
		replacements: [
			{
				search:
					'								>\n									Joseph Poon &amp; Thaddeus Dryja — The Bitcoin Lightning\n									Network: Scalable Off-Chain Instant Payments (2016)\n								</a>',
				replace:
					'								>\n									{t("sources_lightning_paper")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
			{
				search:
					'								>\n									ACINQ — Phoenix Lightning wallet\n								</a>',
				replace:
					'								>\n									{t("sources_acinq_phoenix")}\n								</a>',
			},
			{
				search:
					'								>\n									Breez — Self-custodial Lightning wallet\n								</a>',
				replace:
					'								>\n									{t("sources_breez_lightning")}\n								</a>',
			},
			{
				search:
					'								>\n									Wallet of Satoshi — Custodial Lightning wallet\n								</a>',
				replace:
					'								>\n									{t("sources_wallet_of_satoshi")}\n								</a>',
			},
			{
				search:
					'								>\n									Lightning Labs — Lightning Network documentation\n								</a>',
				replace:
					'								>\n									{t("sources_lightning_labs")}\n								</a>',
			},
		],
	},
	// ── Nostr ──────────────────────────────────────────────────────
	{
		file: "app/[locale]/nostr/page.tsx",
		replacements: [
			{
				search:
					'								>\n									nostr.how — What is Nostr?\n								</a>',
				replace:
					'								>\n									{t("sources_nostr_how")}\n								</a>',
			},
			{
				search:
					'								>\n									Nostr Protocol — Open-source specification\n								</a>',
				replace:
					'								>\n									{t("sources_nostr_protocol")}\n								</a>',
			},
			{
				search:
					'								>\n									Primal — Nostr client with a built-in Bitcoin zap wallet\n								</a>',
				replace:
					'								>\n									{t("sources_primal")}\n								</a>',
			},
			{
				search:
					'								>\n									Damus — iPhone Nostr client\n								</a>',
				replace:
					'								>\n									{t("sources_damus")}\n								</a>',
			},
			{
				search:
					'								>\n									Iris — Browser-based Nostr client\n								</a>',
				replace:
					'								>\n									{t("sources_iris")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
		],
	},
	// ── Wallets ────────────────────────────────────────────────────
	{
		file: "app/[locale]/wallets/page.tsx",
		replacements: [
			{
				search:
					'								>\n									Bitcoin.org — Choose Your Wallet\n								</a>',
				replace:
					'								>\n									{t("sources_bitcoin_org_choose")}\n								</a>',
			},
			{
				search:
					'								>\n									Jameson Lopp — Metal Bitcoin Seed Storage Reviews\n								</a>',
				replace:
					'								>\n									{t("sources_jameson_lopp")}\n								</a>',
			},
			{
				search:
					'								>\n									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic\n									Cash System (2008)\n								</a>',
				replace:
					'								>\n									{t("common_source_whitepaper")}\n								</a>',
			},
			{
				search:
					'								>\n									Blockstream Green — Self-custody Bitcoin wallet\n								</a>',
				replace:
					'								>\n									{t("sources_blockstream_green")}\n								</a>',
			},
			{
				search:
					'								>\n									Blockstream Jade — Bitcoin hardware wallet\n								</a>',
				replace:
					'								>\n									{t("sources_blockstream_jade")}\n								</a>',
			},
			{
				search:
					'								>\n									Coinkite — Coldcard MK5 hardware wallet\n								</a>',
				replace:
					'								>\n									{t("sources_coldcard_mk5")}\n								</a>',
			},
			{
				search:
					'								>\n									Coinkite — Coldcard Q hardware wallet\n								</a>',
				replace:
					'								>\n									{t("sources_coldcard_q")}\n								</a>',
			},
			{
				search:
					'								>\n									Foundation Devices — Passport hardware wallet\n								</a>',
				replace:
					'								>\n									{t("sources_passport")}\n								</a>',
			},
			{
				search:
					'								>\n									SeedSigner — Open-source DIY Bitcoin signing device\n								</a>',
				replace:
					'								>\n									{t("sources_seedsigner")}\n								</a>',
			},
		],
	},
];

let filesTouched = 0;
let replacementsApplied = 0;
let misses = 0;

for (const { file, replacements } of EDITS) {
	const abs = path.join(REPO_ROOT, file);
	if (!fs.existsSync(abs)) {
		console.error(`  [skip] ${file}: not found`);
		misses++;
		continue;
	}
	let src = fs.readFileSync(abs, "utf8");
	const before = src;
	let applied = 0;
	for (const { search, replace } of replacements) {
		if (!src.includes(search)) {
			console.error(
				`  [miss] ${file}: search text not found (${search.slice(0, 70).replace(/\n/g, "\\n")}…)`,
			);
			misses++;
			continue;
		}
		src = src.replace(search, replace);
		applied++;
	}
	if (src !== before) {
		fs.writeFileSync(abs, src);
		filesTouched++;
		replacementsApplied += applied;
		console.log(`  ${file.padEnd(55, " ")} ${applied} replacements`);
	}
}

console.log("");
console.log(
	`Done — ${replacementsApplied} replacements applied across ${filesTouched} files. ${misses} miss${misses === 1 ? "" : "es"}.`,
);
if (misses > 0) process.exit(1);
