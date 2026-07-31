// One-off: replace Coldcard MK5/Q wallet-card content with Blockstream Jade
// Plus + Bitkey in the English wallets namespace, following the Coldcard
// entropy-vulnerability disclosure (see blog.coinkite.com/entropy-technical-backgrounder/).
//
// Run: node scripts/wallets-coldcard-swap-en.js
const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "i18n", "en", "wallets_en.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

// Drop the Coldcard-only keys (including the two feature bullets that were
// exclusive to the Coldcard cards — wallets_qr_scanner is reused by Jade
// Plus below, so it stays).
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
for (const key of REMOVE_KEYS) {
	delete data[key];
}

// Add the replacement content. Inserted as new own-properties — JS object
// key order is insertion order, which is fine here since these aren't
// replacing keys in-place (the old keys are already gone).
Object.assign(data, {
	wallets_blockstream_jade_plus: "Blockstream Jade Plus",
	wallets_bitkey: "Bitkey",
	wallets_jade_plus_costs: "Costs $169.99",
	wallets_bitkey_costs: "Costs $250",
	wallets_larger_screen: "Larger screen",
	wallets_multisig_2of3: "2-of-3 multisig security",
	wallets_no_seed_phrase: "No seed phrase to manage",
	sources_jade_plus: "Blockstream — Jade Plus hardware wallet",
	sources_bitkey: "Block — Bitkey self-custody wallet",
});

data["@metadata"]["last-updated"] = "2026-07-31";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("Updated", FILE);
