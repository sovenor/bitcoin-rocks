#!/usr/bin/env node
/**
 * Add / update all V2 sticker-files redesign keys in i18n/en/common_en.json.
 *
 * This script is idempotent:
 *   - New keys are added in place (preserving object key order for
 *     neighbouring ones).
 *   - `common_sticker_files_mission_5` is REWRITTEN so only "request a pack"
 *     is the linked anchor text (split from its legacy value
 *     "request a pack of English stickers for free").
 *   - `common_sticker_files_mission_6` is NEW, holding the unlinked trailing
 *     prose "of English stickers for free".
 *   - The stickermule printer-attribution sentence is split into 3 keys
 *     so only `common_stickers_printer_name` ("StickerMule.com") renders
 *     as the linked text.
 *   - Sticker names (`common_sticker_name_*`) are added for the H2 on
 *     every per-sticker card.
 *
 * Uses JSON.parse / JSON.stringify with tab indentation so non-ASCII chars
 * + existing formatting stay intact.
 */
const fs = require("fs");
const path = require("path");

const REPO = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO, "i18n", "en", "common_en.json");

// Keys that should be CREATED if missing but left alone if already present
// (translator-editable content).
const NEW_KEYS = {
	common_sticker_tips_heading: "Sticker tips",
	common_sticker_tips_intro:
		"Once you've printed your stickers, put them somewhere they'll be seen! Good sticker spots are:",
	common_sticker_tips_list_1:
		"in public where people will see them",
	common_sticker_tips_list_2:
		"in places that are unlikely to be removed quickly (the stickers don't cause any permanent damage)",
	common_sticker_tips_list_3:
		"on surfaces they will stick to easily (metal, plastic, glass)",
	common_sticker_tips_list_4:
		"NOT on private property, covering signage, ATMs, or gas pumps",
	common_sticker_files_next_languages_label: "Sticker files",
	common_sticker_files_next_languages_title:
		"See sticker files in other languages",
	common_sticker_files_next_flyers_label: "Flyers",
	common_sticker_files_next_flyers_title: "Print a Bitcoin flyer",

	// Split printer attribution so only "StickerMule.com" is the link.
	common_stickers_printer_prefix: "We use",
	common_stickers_printer_name: "StickerMule.com",
	common_stickers_printer_suffix:
		"but you can use any sticker company.",

	// New tail for the split-out "request a pack" sentence.
	common_sticker_files_mission_6: "of English stickers for free.",

	// Sticker names — rendered as the H2 on each per-sticker card.
	common_sticker_name_danger: "\"Danger! Inflation Ahead\" Bitcoin Sticker",
	common_sticker_name_warning:
		"\"Warning! Inflation is Stealing Your Savings\" Bitcoin Sticker",
	common_sticker_name_caution: "\"Caution! Melting Ice Cube\" Bitcoin Sticker",
	common_sticker_name_fix: "\"Fix The Money, Fix The World\" Bitcoin Sticker",
	common_sticker_name_study: "\"Study Bitcoin\" Sticker",
	common_sticker_name_bdhi_orange:
		"\"Bitcoin Doesn't Have Inflation\" Sticker (Orange)",
	common_sticker_name_bdhi_black:
		"\"Bitcoin Doesn't Have Inflation\" Sticker (Black)",
	common_sticker_name_cure_inflation: "\"Cure Inflation\" Bitcoin Sticker",
	common_sticker_name_got_inflation: "\"Got Inflation?\" Bitcoin Sticker",
	common_sticker_name_what_if:
		"\"What if your money didn't have inflation?\" Bitcoin Sticker",
};

// Keys that must be OVERWRITTEN to match the V2 design (regardless of prior value).
const OVERRIDE_KEYS = {
	// Previously: "request a pack of English stickers for free"
	// Now: only the linked anchor text. Trailing prose moves to mission_6.
	common_sticker_files_mission_5: "request a pack",
};

const raw = fs.readFileSync(FILE, "utf8");
const json = JSON.parse(raw);

let added = 0;
let overridden = 0;

for (const [key, value] of Object.entries(NEW_KEYS)) {
	if (key in json) continue;
	json[key] = value;
	added += 1;
}

for (const [key, value] of Object.entries(OVERRIDE_KEYS)) {
	if (json[key] === value) continue;
	json[key] = value;
	overridden += 1;
}

if (!json["@metadata"]) {
	json["@metadata"] = {};
}
json["@metadata"]["last-updated"] = new Date().toISOString().slice(0, 10);

fs.writeFileSync(FILE, JSON.stringify(json, null, "\t") + "\n", "utf8");

console.log(
	`Updated ${path.relative(REPO, FILE)}: added ${added} new keys, overrode ${overridden} keys.`,
);
