#!/usr/bin/env node
/**
 * Adds V2 redesign keys to i18n/en/sticker-language-success_en.json.
 *
 * Run once, from the repo root:
 *   node scripts/sticker-language-success-v2-keys.js
 *
 * New keys (English seed values — other locales fall through to English
 * until translators pick them up per the standard workflow):
 *   sticker_language_success_hero_title   — h1 ("Request received 🎉")
 *
 * Also refreshes the `@metadata.last-updated` to today (per project rules
 * — the HTML `dateModified` schema field is derived from the English
 * file's last-updated via `lib/schema/date-modified.ts`).
 */
const fs = require("fs");
const path = require("path");

const FILE = path.join(
	__dirname,
	"..",
	"i18n",
	"en",
	"sticker-language-success_en.json",
);

const NEW_KEYS = {
	sticker_language_success_hero_title: "Request received 🎉",
};

function today() {
	const d = new Date();
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

const raw = fs.readFileSync(FILE, "utf8");
const json = JSON.parse(raw);

// Bump last-updated metadata.
if (!json["@metadata"]) json["@metadata"] = {};
json["@metadata"]["last-updated"] = today();

// Merge new keys without clobbering existing values.
for (const [k, v] of Object.entries(NEW_KEYS)) {
	if (!(k in json)) {
		json[k] = v;
	}
}

fs.writeFileSync(FILE, JSON.stringify(json, null, "\t") + "\n", "utf8");
console.log(`✓ Updated ${path.relative(process.cwd(), FILE)}`);
console.log(`  last-updated → ${json["@metadata"]["last-updated"]}`);
console.log(
	`  keys added:   ${Object.keys(NEW_KEYS).filter((k) => json[k] === NEW_KEYS[k]).length}/${Object.keys(NEW_KEYS).length}`,
);
