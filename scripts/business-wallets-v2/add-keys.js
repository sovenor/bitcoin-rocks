#!/usr/bin/env node
/**
 * Adds the V2 redesign keys to i18n/en/business/wallets_en.json.
 * Preserves tab indentation + existing V1 keys (they may still be
 * referenced by the old accordion sections until cleanup).
 */
const fs = require("fs");
const path = require("path");

const file = path.join(
	__dirname,
	"..",
	"..",
	"i18n",
	"en",
	"business",
	"wallets_en.json",
);

const json = JSON.parse(fs.readFileSync(file, "utf8"));

// Bump last-updated
json["@metadata"] = {
	...json["@metadata"],
	"last-updated": "2026-04-23",
};

// ─── New V2 keys ────────────────────────────────────────────────────
const NEW_KEYS = {
	// Hero subtitle (plain paragraph under the h1)
	wallets_hero_subtitle:
		"Bitcoin wallets are free. Pick one that fits your business — in-person, online, or invoice-based — and start accepting Bitcoin in minutes.",

	// Section headings + intros (replacing the old V1 accordion questions)
	wallets_section_sole: "Wallets for individually-owned businesses",
	wallets_section_sole_intro:
		"If you run a shop, café, studio, or service on your own, any of these wallets will work. Pick based on whether you want to keep payments in Bitcoin or auto-convert part of each payment to your local currency.",

	wallets_section_multiple: "Wallets for businesses with multiple employees",
	wallets_section_multiple_intro:
		"If you have a team taking payments at the register, choose a wallet that supports multiple employee logins — so every employee gets their own PIN and you keep a clean audit trail of who took which payment.",

	wallets_section_online: "Wallets for online businesses",
	wallets_section_online_intro:
		"Selling on a website? These wallets plug into your online store and accept Bitcoin from any customer, anywhere in the world — no chargebacks, no merchant account required.",

	wallets_section_invoice: "Wallets for invoice-based businesses",
	wallets_section_invoice_intro:
		"If you invoice clients (consulting, freelancing, B2B services), use a wallet built around invoicing. Your client pays a Bitcoin invoice in a couple of clicks.",

	// Strike Business — new wallet
	wallets_name_strike: "STRIKE BUSINESS",
	wallets_strike_note:
		"Strike Business lets you accept Bitcoin and Lightning payments with zero fees and instant settlement. Supports in-person, online, and invoice-based payments with optional auto-conversion to your local currency.",
};

for (const [k, v] of Object.entries(NEW_KEYS)) {
	json[k] = v;
}

fs.writeFileSync(file, JSON.stringify(json, null, "\t") + "\n", "utf8");
console.log("✓ Updated", file);
console.log("  Added", Object.keys(NEW_KEYS).length, "new V2 keys");
