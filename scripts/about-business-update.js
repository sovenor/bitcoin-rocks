/**
 * Update the English /about copy so the "Help local businesses accept
 * Bitcoin payments" card no longer references the retired Bitcoin
 * Business Kit program. Instead, it describes the free business
 * resources we now offer (wallet/point-of-sale guidance, free
 * "Bitcoin Accepted Here" stickers, printable materials, etc.) —
 * matching the updated /get-involved copy.
 *
 * This script is idempotent and writes the file with tab indentation
 * to match the rest of the i18n/en/ tree.
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(
	__dirname,
	"..",
	"i18n",
	"en",
	"about_en.json",
);
const raw = fs.readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

// Bump last-updated per project rules (today).
data["@metadata"]["last-updated"] = "2026-04-24";

// Rewrite the business blurb + card label/title away from the retired
// "Business Kit" program. Source line stays the same.
data["about_business_blurb"] =
	"We provide free business resources that make it easy to onboard local merchants to accept Bitcoin. Our Bitcoin business page covers why Bitcoin is good for business, how to choose a wallet and point-of-sale, and offers free 'Bitcoin Accepted Here' stickers.";
data["about_card_business_label"] = "Business resources";
data["about_card_business_title"] =
	"Everything a business needs to start accepting Bitcoin payments";

fs.writeFileSync(filePath, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("✅ Updated", filePath);
