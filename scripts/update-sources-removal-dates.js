#!/usr/bin/env node
/**
 * Bump @metadata.last-updated to today for the English JSON files
 * whose pages (/about, /get-involved) had their Sources section
 * removed on 2026-04-20. Only the English file gets the bump — the
 * dateModified schema is derived from i18n/en/*.json per
 * lib/schema/date-modified.ts.
 */
const fs = require("fs");
const path = require("path");

const TODAY = "2026-04-20";
const files = ["i18n/en/about_en.json", "i18n/en/get-involved_en.json"];

for (const rel of files) {
	const abs = path.join(__dirname, "..", rel);
	const raw = fs.readFileSync(abs, "utf8");
	const data = JSON.parse(raw);
	if (!data["@metadata"]) data["@metadata"] = {};
	data["@metadata"]["last-updated"] = TODAY;
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
	console.log(`Updated ${rel} → last-updated: ${TODAY}`);
}
