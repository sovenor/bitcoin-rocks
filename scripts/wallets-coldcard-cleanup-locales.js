// One-off: strip the now-orphaned Coldcard MK5/Q translation keys from every
// non-English wallets_<locale>.json file. This is a mechanical cleanup only
// (no new content added) — page.tsx no longer references these keys after
// the Coldcard -> Blockstream Jade Plus / Bitkey swap, so leaving them in
// place would just be dead, untranslated-going-forward clutter.
//
// The replacement wallet-card strings (wallets_blockstream_jade_plus,
// wallets_bitkey, etc.) are intentionally NOT added here — they exist only
// in i18n/en/wallets_en.json for now and fall back to English per-key via
// the site's message loader until each locale gets a real translation pass
// (see scripts/i18n-audit/language-diff.js + apply-translations.js).
//
// Run: node scripts/wallets-coldcard-cleanup-locales.js
const fs = require("fs");
const path = require("path");

const I18N_DIR = path.resolve(__dirname, "..", "i18n");
const TODAY = "2026-07-31";

const REMOVE_KEYS = [
	"wallets_coldcard_mk5",
	"wallets_coldcard_q",
	"wallets_coldcard_mk5_costs",
	"wallets_coldcard_q_costs",
	"sources_coldcard_mk5",
	"sources_coldcard_q",
	"wallets_security_features",
	"wallets_qwerty_keyboard",
];

const locales = fs
	.readdirSync(I18N_DIR, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.filter((locale) => locale !== "en");

let touched = 0;
for (const locale of locales) {
	const file = path.join(I18N_DIR, locale, `wallets_${locale}.json`);
	if (!fs.existsSync(file)) {
		console.warn("SKIP (no file):", file);
		continue;
	}
	const data = JSON.parse(fs.readFileSync(file, "utf8"));

	let changed = false;
	for (const key of REMOVE_KEYS) {
		if (key in data) {
			delete data[key];
			changed = true;
		}
	}

	if (!changed) {
		console.log("no coldcard keys, skipped:", locale);
		continue;
	}

	if (data["@metadata"]) {
		data["@metadata"]["last-updated"] = TODAY;
	}

	fs.writeFileSync(file, JSON.stringify(data, null, "\t") + "\n", "utf8");
	touched++;
	console.log("cleaned:", locale);
}

console.log(`\nDone. ${touched}/${locales.length} locale files updated.`);
