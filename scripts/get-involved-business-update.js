/**
 * Update the English /get-involved copy so the "Onboard a business"
 * section:
 *
 *   1. Replaces the retired Bitcoin Business Kit CTA with a simple
 *      "send the owner to our business page" hand-off to /business.
 *   2. Adds a second learn-more card + lead-in note pointing to
 *      /business/stickers — the free "Bitcoin Accepted Here" sticker
 *      program for merchants.
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
	"get-involved_en.json",
);
const raw = fs.readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

// Bump last-updated per project rules.
data["@metadata"]["last-updated"] = "2026-04-23";

// Updated meta description — swap "business kits" for the new sticker + business-page hand-off.
data["get_involved_description"] =
	"Our free resources make it easier to spread Bitcoin adoption. Stickers, flyers, 'Bitcoin Accepted Here' stickers for businesses, and an open-source codebase anyone can contribute to.";

// ─── Rewrite "Onboard a business" copy ──────────────────────────────
// content_1 now frames the circular economy without naming the retired
// Business Kit program. content_2/content_3 become a short inline
// "send the owner to <link>" lead-in that the page renders above the
// /business card.
data["get_involved_business_content_1"] =
	"Want to help build the Bitcoin circular economy? The easiest way is to help local businesses start accepting Bitcoin payments.";
data["get_involved_business_content_2"] =
	"Know a business that might be open to it? Send the owner to";
data["get_involved_business_content_3"] =
	"our Bitcoin business page to learn why Bitcoin is good for business, choose a wallet, set up a point-of-sale, and start accepting payments today.";

// Card for /business — reworded away from "Request a free Bitcoin
// Business Kit" to a plain "get started" CTA.
data["get_involved_card_business_label"] = "Bitcoin for business";
data["get_involved_card_business_title"] =
	"Everything a business needs to start accepting Bitcoin payments";
data["get_involved_card_business_source"] = "Source: bitcoin.rocks →";

// ─── New: "Bitcoin Accepted Here" stickers note + card ───────────────
// Rendered as a second learn-more card in the "Onboard a business"
// section, with its own intro paragraph.
data["get_involved_biz_stickers_note"] =
	"Already accepting Bitcoin? Let customers know with our free 'Bitcoin Accepted Here' stickers. We'll ship a pack to any address in the USA or Canada, or you can print your own anywhere in the world.";
data["get_involved_card_biz_stickers_label"] = "Accepted here stickers";
data["get_involved_card_biz_stickers_title"] =
	"Free 'Bitcoin Accepted Here' stickers for your business";
data["get_involved_card_biz_stickers_source"] = "Source: bitcoin.rocks →";

// Preserve original key order: we want the new sticker keys to land
// right after the business card keys and before the github section.
// Rebuild the object in the desired order.
const orderedKeys = [
	"@metadata",
	"get_involved_and_help_spread_bitcoin",
	"get_involved_description",
	"get_involved_header",
	"get_involved_intro_1",
	"get_involved_intro_2",
	"get_involved_intro_3",
	"get_involved_intro_4",
	"get_involved_intro_5",
	"get_involved_sticker_header",
	"get_involved_sticker_image_alt",
	"get_involved_sticker_content_1",
	"get_involved_sticker_content_2",
	"get_involved_sticker_content_3",
	"get_involved_sticker_content_4",
	"get_involved_sticker_content_5",
	"get_involved_sticker_content_6",
	"get_involved_card_stickers_label",
	"get_involved_card_stickers_title",
	"get_involved_card_stickers_source",
	"get_involved_flyers_header",
	"get_involved_flyers_image_alt",
	"get_involved_flyers_content_1",
	"get_involved_flyers_content_2",
	"get_involved_flyers_content_3",
	"get_involved_card_flyers_label",
	"get_involved_card_flyers_title",
	"get_involved_card_flyers_source",
	"get_involved_business_header",
	"get_involved_business_content_1",
	"get_involved_business_content_2",
	"get_involved_business_content_3",
	"get_involved_card_business_label",
	"get_involved_card_business_title",
	"get_involved_card_business_source",
	"get_involved_biz_stickers_note",
	"get_involved_card_biz_stickers_label",
	"get_involved_card_biz_stickers_title",
	"get_involved_card_biz_stickers_source",
	"get_involved_github_header",
	"get_involved_github_content_1",
	"get_involved_github_content_2",
	"get_involved_github_content_3",
	"get_involved_card_github_label",
	"get_involved_card_github_title",
	"get_involved_card_github_source",
];

const ordered = {};
for (const key of orderedKeys) {
	if (key in data) {
		ordered[key] = data[key];
	}
}
// Carry over any unexpected keys (defensive — shouldn't happen).
for (const key of Object.keys(data)) {
	if (!(key in ordered)) {
		ordered[key] = data[key];
	}
}

fs.writeFileSync(filePath, JSON.stringify(ordered, null, "\t") + "\n", "utf8");
console.log("✅ Updated", filePath);
