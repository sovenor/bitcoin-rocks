#!/usr/bin/env node
/**
 * scripts/buy-v2/add-keys.js
 *
 * Adds the new V2 /buy page keys to `i18n/en/buy_en.json`, sentence-cases
 * the existing hero-era keys so the V2 heading/card system can use them,
 * and bumps `@metadata.last-updated` to today.
 *
 * Idempotent — safe to re-run.
 */

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"en",
	"buy_en.json",
);

const raw = fs.readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

// ─── Metadata: bump last-updated ────────────────────────────────────
data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-22";

// ─── V2 overrides + new keys ────────────────────────────────────────
const UPDATES = {
	// Meta + hero
	buy_bitcoin_guide: "How to buy Bitcoin",
	buy_meta_description:
		"Learn how to buy Bitcoin safely with our step-by-step guide. Choose your country and payment method to find the best Bitcoin buying options for you.",
	buy_header: "How to buy Bitcoin",
	buy_header_subtitle:
		"A simple, step-by-step guide to buying your first Bitcoin.",
	buy_intro_c1:
		"Buying Bitcoin for the first time can seem overwhelming, but it's actually quite simple when you break it down into steps.",
	buy_intro_c2:
		"This guide will walk you through the process of safely buying Bitcoin and storing it in your own wallet.",

	// HowTo schema name
	buy_howto_name: "How to buy Bitcoin",

	// Step eyebrows
	buy_step_1_eyebrow: "Step 1",
	buy_step_2_eyebrow: "Step 2",
	buy_step_3_eyebrow: "Step 3",
	buy_step_4_eyebrow: "Step 4",

	// Step 1 — country
	buy_step_1_header: "Select your country",
	buy_step_1_description:
		"Different countries have different Bitcoin buying options available. Select your country to see the best options for you.",
	buy_search_countries: "Search for your country",

	// Step 2 — payment method
	buy_step_2_header: "Choose your payment method",
	buy_step_2_description:
		"There are two main ways to buy Bitcoin: with a bank transfer or with cash. Each has different advantages.",
	buy_method_bank_transfer: "Bank transfer",
	buy_method_bank_fast: "Fast & easy",
	buy_method_bank_less_private: "Less private",
	buy_method_bank_description:
		"Bank transfers are the most common way to buy Bitcoin. They're fast, convenient, and usually have lower fees.",
	buy_method_choose_bank: "Choose bank transfer",
	buy_method_cash: "Cash",
	buy_method_cash_private: "More private",
	buy_method_cash_limited: "Limited options",
	buy_method_cash_description:
		"Cash purchases offer more privacy but have fewer options and may require meeting someone in person or using a Bitcoin ATM.",
	buy_method_choose_cash: "Choose cash",

	// Step 3 — platforms
	buy_step_3_header: "Your buying options",
	buy_step_3_description:
		"Here are the best Bitcoin buying options for your country and payment method:",
	buy_platform_recommended: "Recommended",

	// Step 4 — storage
	buy_step_4_header: "Store your Bitcoin safely",
	buy_step_4_c1:
		"After buying Bitcoin, the most important step is to move it to your own wallet where you control the private keys.",
	buy_step_4_c2:
		"Leaving Bitcoin on an exchange is risky because you don't actually own the Bitcoin — the exchange does.",
	buy_step_4_c3:
		"When you control your own private keys, you have true ownership of your Bitcoin and no one can take it away from you.",
	buy_step_4_c4: "Learn how to choose the right Bitcoin wallet for your needs:",
	buy_storage_cta_label: "Next step",
	buy_cta_wallets: "View our Bitcoin wallet guide",
};

// Apply updates (overwrites existing values; adds new ones).
for (const [key, value] of Object.entries(UPDATES)) {
	data[key] = value;
}

// ─── Write back with tab indentation ─────────────────────────────────
const output = JSON.stringify(data, null, "\t") + "\n";
fs.writeFileSync(filePath, output, "utf8");

console.log(`✓ Updated ${filePath}`);
console.log(`  @metadata.last-updated → ${data["@metadata"]["last-updated"]}`);
console.log(`  ${Object.keys(UPDATES).length} keys updated/added`);
