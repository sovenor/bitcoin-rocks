#!/usr/bin/env node
/**
 * Filipino manifest refresh — fix remaining locale-specific entries.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"fil.json",
);

const T = {
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"English na \"Bitcoin Accepted Here\" na sticker files",
	"bitcoin-vs-visa::bitcoin_point_3": "Malinaw na sistema",

	// Comparison page titles + asset labels
	"bitcoin-vs-banks::bitcoin_vs_banks": "Bitcoin vs Mga Bangko",
	"bitcoin-vs-bonds::bitcoin_vs_bonds": "Bitcoin vs Mga Bond",
	"bitcoin-vs-cash::bitcoin_vs_cash": "Bitcoin vs Cash",
	"bitcoin-vs-cash::cash": "CASH",
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin vs Mga CBDC",
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin vs Crypto",
	"bitcoin-vs-crypto::crypto": "CRYPTO",
	"bitcoin-vs-fine-art::bitcoin_vs_fine_art": "Bitcoin vs Fine Art",
	"bitcoin-vs-fine-art::fine_art": "FINE ART",
	"bitcoin-vs-gold::bitcoin_vs_gold": "Bitcoin vs Ginto",
	"bitcoin-vs-gold::gold": "GINTO",
	"bitcoin-vs-real-estate::bitcoin_vs_real_estate": "Bitcoin vs Real Estate",
	"bitcoin-vs-real-estate::real_estate": "REAL ESTATE",
	"bitcoin-vs-stocks::bitcoin_vs_stocks": "Bitcoin vs Mga Stock",

	// Short comparison point labels
	"bitcoin-vs-cash::bitcoin_point_6": "Digital self-custody",
	"bitcoin-vs-cbdc::bitcoin_point_10": "Ligtas",
	"bitcoin-vs-cbdc::bitcoin_point_4": "Pseudonymous",
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile",
	"bitcoin-vs-crypto::crypto_point_8": "Corporate backing",
	"bitcoin-vs-fine-art::bitcoin_point_5": "Nav-verify sa cryptography",
	"bitcoin-vs-gold::bitcoin_point_4": "Hindi nababago (inelastic)",
	"bitcoin-vs-gold::gold_point_4": "Nababago (elastic)",
	"bitcoin-vs-real-estate::bitcoin_point_1": "Portable sa buong mundo",

	// Business wallets
	"business/wallets::wallets_feature_bitcoin_only": "Bitcoin-only na wallet",
	"business/wallets::wallets_feature_hybrid": "Hybrid wallet",
	"business/wallets::wallets_feature_online_store": "Integrasyon sa online store",

	// Buy features
	"buy::buy_platform_feature_dca": "Dollar-cost averaging (DCA)",
	"buy::buy_platform_feature_mining": "Pagmimina ng bitcoin",
	"buy::buy_platform_feature_regulated": "Regulated na exchange",
	"buy::buy_platform_feature_self_custody": "Self-custody na wallet",
	"buy::buy_platform_feature_support": "Suporta sa customer",

	// Common wallet-type labels
	"common::common_cold_wallet": "COLD WALLET",
	"common::common_hot_wallet": "HOT WALLET",
	"common::common_self_custody": "SELF-CUSTODY",
	"common::common_sticker_files_mission_3": "inflation",
	"common::common_stickers_type_die_cut": "die-cut na sticker",

	// Sticker dimensions — keep measurements identical, but localize punctuation
	// Append " (" + "at" cm/in format with "pulgada". Instead we keep numeric
	// identical (they're dimensions) but swap "in" → "pulgada" to distinguish.
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

	// Misc
	"compound-inflation-calculator::cic_header": "Compound Inflation Calculator",

	// Currency labels (already uppercase English form) — localize
	"inflation::inflation_brazilian_real": "REAL NG BRAZIL",
	"inflation::inflation_british_pound": "LIBRA ESTERLINA",
	"inflation::inflation_indian_rupee": "RUPEE NG INDIA",
	"inflation::inflation_israeli_shekel": "SHEKEL NG ISRAEL",
	"inflation::inflation_japanese_yen": "YEN NG JAPAN",
	"inflation::inflation_mexican_peso": "PISO NG MEXICO",
	"inflation::inflation_thai_baht": "BAHT NG THAILAND",

	// Wallet / app features
	"lightning::lightning_mobile_app": "Mobile app",
	"stickers::placeholder_address_line_1": "Address Linya 1",
	"stickers::placeholder_postal_code": "Postal Code",
	"stickers::placeholder_zip_code": "Zip Code",
	"wallets::wallets_air_gap_camera": "Air-gap mode + kamera",
	"wallets::wallets_air_gap_mode": "Air-gap mode",
	"wallets::wallets_battery": "Maka-recharge na baterya",
	"wallets::wallets_mobile_app": "Mobile app",
	"wallets::wallets_qr_scanner": "QR code scanner",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const e of report.entries) {
		const lookupKey = `${e.namespace}::${e.key}`;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
			continue;
		}
		missing.push(lookupKey);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (fil): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length) {
		console.log(`\nStill missing (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
