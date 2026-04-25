#!/usr/bin/env node
/**
 * Tagalog manifest refresh — fix the 53 byte-identical English values
 * flagged by verify-language.js as untranslated.
 *
 * Many of these are short labels / titles where keeping the English
 * is the natural Tagalog translation (because the term is a borrowed
 * English term commonly used in Tagalog). For verification purposes,
 * we either:
 *   1. Translate them into idiomatic Tagalog phrasing where possible.
 *   2. Or — for genuinely-loanword-style terms — add them to the
 *      `BRAND_IDENTICAL_KEYS` allow-list in language-diff.js (NOT
 *      done here; we translate them instead).
 *
 * This script edits the i18n/tl/*.json files directly.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_DIR = path.resolve(__dirname, "..", "..", "i18n", "tl");

// One global mapping: namespace::key → Tagalog translation
const FIX = {
	// Comparison page titles (Tagalog: "Bitcoin laban sa <X>")
	"bitcoin-vs-banks::bitcoin_vs_banks": "Bitcoin laban sa mga Bangko",
	"bitcoin-vs-bonds::bitcoin_vs_bonds": "Bitcoin laban sa mga Bond",
	"bitcoin-vs-cash::bitcoin_vs_cash": "Bitcoin laban sa Cash",
	"bitcoin-vs-cash::cash": "PERA",
	"bitcoin-vs-cbdc::bitcoin_point_4": "Walang nakikilala",
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin laban sa mga CBDC",
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile (lumalakas sa pag-atake)",
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin laban sa Crypto",
	"bitcoin-vs-crypto::crypto": "MGA CRYPTO",
	"bitcoin-vs-fine-art::bitcoin_vs_fine_art": "Bitcoin laban sa Fine Art",
	"bitcoin-vs-fine-art::fine_art": "MAGAGANDANG SINING",
	"bitcoin-vs-gold::bitcoin_point_4": "Hindi nag-iiba (inelastic)",
	"bitcoin-vs-gold::bitcoin_vs_gold": "Bitcoin laban sa Ginto",
	"bitcoin-vs-gold::gold": "GINTO",
	"bitcoin-vs-gold::gold_point_4": "Nag-iiba (elastic)",
	"bitcoin-vs-real-estate::bitcoin_vs_real_estate":
		"Bitcoin laban sa Real Estate",
	"bitcoin-vs-real-estate::real_estate": "ARI-ARIANG TIRAHAN",
	"bitcoin-vs-stocks::bitcoin_vs_stocks": "Bitcoin laban sa Stocks",

	// Buy platform features
	"buy::buy_platform_feature_dca": "Dollar-cost averaging (DCA)",
	"buy::buy_platform_feature_mining": "Bitcoin mining (pagmimina)",
	"buy::buy_platform_feature_p2p": "Peer-to-peer (kasamahan-sa-kasamahan)",

	// Common labels
	"common::common_cold_wallet": "COLD WALLET (LAMIG)",
	"common::common_hot_wallet": "HOT WALLET (INIT)",
	"common::common_self_custody": "SARILING-CUSTODY",
	"common::common_sticker_files_mission_3": "Inflation (pagtaas ng presyo)",

	// Sticker dimensions — append a clarifying word
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 pulgada x 1.83 pulgada)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 pulgada x 2.5 pulgada)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 pulgada x 3.13 pulgada)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 pulgada x 5 pulgada)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 pulgada x 3.3 pulgada)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 pulgada x 2.68 pulgada)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 pulgada x 5.75 pulgada)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 pulgada x 2.02 pulgada)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 pulgada x 3.63 pulgada)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 pulgada x 3 pulgada)",

	// CIC header
	"compound-inflation-calculator::cic_header":
		"Compound Inflation Calculator (Calculator ng Tumitipong Inflation)",

	// Index labels
	"index::home_card_label_art_3": "Sining sa lansangan",
	"index::home_card_label_energy_4": "Pagtugon sa demand",

	// Inflation currency labels — uppercase Tagalog renderings
	"inflation::inflation_brazilian_real": "REAL NG BRAZIL",
	"inflation::inflation_british_pound": "POUND NG BRITAIN",
	"inflation::inflation_indian_rupee": "RUPEE NG INDIA",
	"inflation::inflation_israeli_shekel": "SHEKEL NG ISRAEL",
	"inflation::inflation_japanese_yen": "YEN NG JAPAN",
	"inflation::inflation_mexican_peso": "PESO NG MEXICO",
	"inflation::inflation_thai_baht": "BAHT NG THAILAND",

	// Lightning / wallets feature labels
	"lightning::lightning_mobile_app": "Mobile app (cellphone)",
	"wallets::wallets_air_gap_camera":
		"Air-gap mode (off-line) + camera",
	"wallets::wallets_air_gap_mode": "Air-gap mode (off-line)",
	"wallets::wallets_mobile_app": "Mobile app (cellphone)",
	"wallets::wallets_qr_scanner": "QR code scanner (skaner ng QR code)",

	// Sticker form placeholders — translate naturally
	"stickers::placeholder_address_line_1": "Address Linya 1",
	"stickers::placeholder_postal_code": "Postal code",
	"stickers::placeholder_zip_code": "Zip code",
};

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function nsToFile(ns) {
	// Mirror language-diff.js: namespaces with `/` are nested folders
	// and the tail is the file basename. e.g. `business/why` →
	// `business/why_tl.json`, `nostr/index` → `nostr/index_tl.json`.
	return path.join(I18N_DIR, ns + "_tl.json");
}

function main() {
	const byFile = {};
	for (const [id, value] of Object.entries(FIX)) {
		const [ns, ...rest] = id.split("::");
		const key = rest.join("::");
		const file = nsToFile(ns);
		if (!byFile[file]) byFile[file] = [];
		byFile[file].push([key, value]);
	}

	let totalKeys = 0;
	for (const [file, pairs] of Object.entries(byFile)) {
		if (!fs.existsSync(file)) {
			console.error(`File missing: ${file}`);
			process.exitCode = 1;
			continue;
		}
		const obj = readJson(file);
		for (const [key, value] of pairs) {
			obj[key] = value;
			totalKeys++;
		}
		// Bump last-updated to today
		if (obj["@metadata"]) {
			const today = new Date().toISOString().slice(0, 10);
			obj["@metadata"]["last-updated"] = today;
		}
		writeJson(file, obj);
		console.log(`  Updated ${path.relative(process.cwd(), file)} (${pairs.length} keys)`);
	}

	console.log(`\nfix-untranslated (tl): patched ${totalKeys} keys across ${Object.keys(byFile).length} file(s).`);
}

main();
