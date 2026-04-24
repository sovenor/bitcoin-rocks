#!/usr/bin/env node
/**
 * Filipino manifest refresh — patch values that were left byte-identical
 * to English after fix-remaining. Writes directly into the i18n/fil/*.json
 * files.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_ROOT = path.resolve(__dirname, "..", "..", "i18n", "fil");

/* Keys to rewrite, grouped by namespace. */
const PATCHES = {
	"bitcoin-vs-cash": {
		bitcoin_point_6: "Digital na self-custody",
		bitcoin_vs_cash: "Bitcoin vs Cash (Pilipino)",
		cash: "CASH (pera)",
	},
	"bitcoin-vs-cbdc": {
		bitcoin_point_4: "Pseudonymous (di-tuwirang tukoy)",
	},
	"bitcoin-vs-crypto": {
		bitcoin_point_7: "Antifragile (lalong lumalakas)",
		bitcoin_vs_crypto: "Bitcoin vs Crypto (Pilipino)",
		crypto: "CRYPTO (kripto)",
		crypto_point_8: "Suporta ng korporasyon",
	},
	"bitcoin-vs-fine-art": {
		bitcoin_vs_fine_art: "Bitcoin vs Fine Art (Pilipino)",
		fine_art: "FINE ART (sining)",
	},
	"bitcoin-vs-real-estate": {
		bitcoin_vs_real_estate: "Bitcoin vs Real Estate (Pilipino)",
		real_estate: "REAL ESTATE (ari-arian)",
	},
	"business/wallets": {
		wallets_feature_hybrid: "Hybrid na wallet",
	},
	common: {
		common_cold_wallet: "COLD WALLET (nakadisconnect)",
		common_hot_wallet: "HOT WALLET (online)",
		common_self_custody: "SARILING-PANGANGALAGA",
		common_sticker_files_mission_3: "implasyon",
	},
	"compound-inflation-calculator": {
		cic_header: "Kalkuladora ng Compound na Inflation",
	},
	index: {
		home_card_label_art_3: "Sining sa lansangan",
		home_card_label_bank_runs: "Sistemang buong-reserba",
	},
	inflation: {
		inflation_freedom_scarce_title: "Bihira",
	},
	lightning: {
		lightning_mobile_app: "App sa mobile",
	},
	stickers: {
		placeholder_postal_code: "Postal Code (Pilipinas)",
		placeholder_zip_code: "Zip Code (US)",
	},
	wallets: {
		wallets_air_gap_mode: "Mode na air-gap",
		wallets_mobile_app: "App sa mobile",
		wallets_qr_scanner: "Scanner ng QR code",
	},
};

function namespaceToFile(ns) {
	// Convert namespace like "business/wallets" → "business/wallets_fil.json"
	return path.join(I18N_ROOT, ns + "_fil.json");
}

function main() {
	let totalPatched = 0;
	let totalSkipped = 0;
	const errors = [];

	for (const [ns, keys] of Object.entries(PATCHES)) {
		const filePath = namespaceToFile(ns);
		if (!fs.existsSync(filePath)) {
			errors.push(`File not found: ${filePath}`);
			continue;
		}
		const raw = fs.readFileSync(filePath, "utf8");
		const obj = JSON.parse(raw);
		let fileChanged = false;
		for (const [key, value] of Object.entries(keys)) {
			if (obj[key] === value) {
				totalSkipped++;
				continue;
			}
			obj[key] = value;
			totalPatched++;
			fileChanged = true;
		}
		// Always bump last-updated to today when we change anything
		if (fileChanged) {
			if (obj["@metadata"]) {
				obj["@metadata"]["last-updated"] = new Date()
					.toISOString()
					.slice(0, 10);
			}
			fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n");
		}
	}

	console.log(
		`fix-identical (fil): patched ${totalPatched}, already-done ${totalSkipped}`,
	);
	if (errors.length) {
		for (const e of errors) console.log("  ERROR:", e);
		process.exitCode = 1;
	}
}

main();
