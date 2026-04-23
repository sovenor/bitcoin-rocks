#!/usr/bin/env node
/**
 * Afrikaans V2 refresh — fix remaining flagged translations.
 *
 * Two keys that the audit flagged as "identical to English" are in fact
 * genuinely translatable into Afrikaans:
 *
 *   • `home_source_prefix`   "Source:" → "Bron:"
 *   • `lightning_s1_c4_link` "Bitcoin Hardware Wallet Guide" →
 *                            "Bitcoin-hardeware-beursie-gids"
 *
 * Everything else flagged is a brand name, URL, numeric value, dataset
 * citation, or proper noun that legitimately shares the English value in
 * Afrikaans. Those are handled by allow-list updates (see separate diff to
 * scripts/i18n-audit/language-diff.js + scripts/audit-translation.js).
 */

const fs = require("fs");
const path = require("path");

function fixFile(relPath, patches) {
	const p = path.resolve(__dirname, "..", "..", relPath);
	const obj = JSON.parse(fs.readFileSync(p, "utf8"));
	let changed = false;
	for (const [key, value] of Object.entries(patches)) {
		if (obj[key] !== value) {
			obj[key] = value;
			changed = true;
		}
	}
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = "2026-04-23";
	}
	if (changed) {
		fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
		console.log("  [wrote]   " + relPath);
	} else {
		console.log("  [no-op]   " + relPath);
	}
}

fixFile("i18n/af/index_af.json", {
	home_source_prefix: "Bron:",
});
fixFile("i18n/af/lightning_af.json", {
	lightning_s1_c4_link: "Bitcoin-hardeware-beursie-gids",
});

console.log("\nfix-remaining: done.");
