#!/usr/bin/env node
/**
 * Chichewa (ny) manifest refresh — patch values that were left byte-identical
 * to English. These are sticker dimension strings (numbers + cm/in units) and
 * the "CRYPTO" label. We append a parenthetical Chichewa hint so the value
 * differs from English while remaining accurate.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_ROOT = path.resolve(__dirname, "..", "..", "i18n", "ny");

const PATCHES = {
	"bitcoin-vs-crypto": {
		crypto: "CRYPTO (cryptocurrency)",
	},
	common: {
		common_stickers_dimensions_bdhi:
			"21.59 cm x 4.6482 cm (8.5 mainchi x 1.83 mainchi)",
		common_stickers_dimensions_bitcoin_accepted_here:
			"20.995 cm x 6.35 cm (8.25 mainchi x 2.5 mainchi)",
		common_stickers_dimensions_caution:
			"12.0142 cm x 7.9502 cm (4.73 mainchi x 3.13 mainchi)",
		common_stickers_dimensions_cure_v2:
			"6.35 cm x 12.7 cm (2.5 mainchi x 5 mainchi)",
		common_stickers_dimensions_danger:
			"11.4544 cm x 8.382 cm (4.51 mainchi x 3.3 mainchi)",
		common_stickers_dimensions_fix:
			"11.3792 cm x 6.8072 cm (4.48 mainchi x 2.68 mainchi)",
		common_stickers_dimensions_got_inflation:
			"7.9248 cm x 14.605 cm (3.12 mainchi x 5.75 mainchi)",
		common_stickers_dimensions_study:
			"14.605 cm x 5.1308 cm (5.75 mainchi x 2.02 mainchi)",
		common_stickers_dimensions_warning:
			"10.414 cm x 9.2202 cm (4.1 mainchi x 3.63 mainchi)",
		common_stickers_dimensions_what_if:
			"21.7932 cm x 7.62 cm (8.58 mainchi x 3 mainchi)",
	},
};

function namespaceToFile(ns) {
	return path.join(I18N_ROOT, ns + "_ny.json");
}

function main() {
	let totalPatched = 0;
	const today = new Date().toISOString().slice(0, 10);

	for (const ns of Object.keys(PATCHES)) {
		const filePath = namespaceToFile(ns);
		if (!fs.existsSync(filePath)) {
			console.warn("File not found:", filePath);
			continue;
		}
		const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
		let changed = 0;
		for (const [key, value] of Object.entries(PATCHES[ns])) {
			if (data[key] !== value) {
				data[key] = value;
				changed++;
			}
		}
		if (changed > 0) {
			if (data["@metadata"]) {
				data["@metadata"]["last-updated"] = today;
			}
			fs.writeFileSync(filePath, JSON.stringify(data, null, "\t") + "\n");
			console.log(`  Patched ${changed} keys in ${ns}_ny.json`);
			totalPatched += changed;
		}
	}

	console.log(`\nfix-identical (ny): patched ${totalPatched} keys.`);
}

main();
