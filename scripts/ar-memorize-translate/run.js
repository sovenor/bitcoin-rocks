#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Arabic files.
 *  - i18n/ar/index_ar.json   : 2 home-card keys
 *  - i18n/ar/wallets_ar.json : 3 wallets_s6_c4b_a/b/c keys
 * Bumps @metadata.last-updated to 2026-04-30 in both.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function patchFile(relPath, additions) {
	const filePath = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_ar.json
patchFile("i18n/ar/index_ar.json", {
	home_card_label_self_custody_4: "النسخة الاحتياطية الأخيرة",
	home_link_title_self_custody_4: "كيف تخزّن البيتكوين في عقلك",
});

// wallets_ar.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Arabic rendering keeps the same flow: _b is the noun phrase that gets the link.
patchFile("i18n/ar/wallets_ar.json", {
	wallets_s6_c4b_a: "لطبقة إضافية من المرونة، يمكنك أيضاً أن",
	wallets_s6_c4b_b: "تحفظ عبارة الاسترداد الخاصة بك",
	wallets_s6_c4b_c: "كنسخة احتياطية غير مرئية تسافر معك.",
});

console.log("Done.");
