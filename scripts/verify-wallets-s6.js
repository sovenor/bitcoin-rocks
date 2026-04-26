#!/usr/bin/env node
/**
 * Verify every locale's wallets_<lang>.json has:
 *  - keys wallets_s6_c1 .. wallets_s6_c7 (and no extras like c0/c8)
 *  - c3 positioned between c2 and c4 in JSON insertion order
 *  - @metadata.last-updated === "2026-04-26"
 */
const fs = require("fs");
const path = require("path");

const I18N_ROOT = path.resolve(__dirname, "..", "i18n");
const EXPECTED = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"].map((s) => `wallets_s6_${s}`);

const locales = fs
	.readdirSync(I18N_ROOT, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.sort();

const issues = [];
let ok = 0;

for (const lang of locales) {
	const file = path.join(I18N_ROOT, lang, `wallets_${lang}.json`);
	if (!fs.existsSync(file)) {
		issues.push(`${lang}: file missing`);
		continue;
	}
	const obj = JSON.parse(fs.readFileSync(file, "utf8"));
	const allKeys = Object.keys(obj);
	const s6 = allKeys.filter((k) => k.startsWith("wallets_s6_c"));

	const localIssues = [];

	const missing = EXPECTED.filter((k) => !(k in obj));
	if (missing.length) localIssues.push(`missing: ${missing.join(", ")}`);

	const extras = s6.filter((k) => !EXPECTED.includes(k));
	if (extras.length) localIssues.push(`unexpected keys: ${extras.join(", ")}`);

	const i2 = allKeys.indexOf("wallets_s6_c2");
	const i3 = allKeys.indexOf("wallets_s6_c3");
	const i4 = allKeys.indexOf("wallets_s6_c4");
	if (i2 >= 0 && i3 >= 0 && i4 >= 0 && !(i2 < i3 && i3 < i4)) {
		localIssues.push(`order wrong: c2=${i2} c3=${i3} c4=${i4}`);
	}

	const lu = obj["@metadata"] && obj["@metadata"]["last-updated"];
	if (lu !== "2026-04-26") localIssues.push(`last-updated=${lu}`);

	if (localIssues.length) {
		issues.push(`${lang}: ${localIssues.join("; ")}`);
	} else {
		ok++;
	}
}

console.log(`OK: ${ok}/${locales.length}`);
if (issues.length) {
	console.log("\nIssues:");
	for (const i of issues) console.log(`  - ${i}`);
	process.exit(1);
}
