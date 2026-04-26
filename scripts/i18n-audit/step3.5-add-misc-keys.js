#!/usr/bin/env node
/**
 * step3.5-add-misc-keys.js — Round-2 key additions for Step 3.5.
 *
 * Additions:
 *   - `i18n/en/business/index_en.json`     → `biz_meta_description`
 *   - `i18n/en/business/maps_en.json`      → `biz_maps_meta_description`
 *
 * These keys are referenced by the metadata generators on
 * `/business` and `/business/maps`. The existing
 * `buildBusinessMetadata()` helper already supports `descriptionKey`,
 * so wiring them up is a one-line change per page (swap the inline
 * `description: "…literal…"` for `descriptionKey: "<new_key>"`).
 *
 * This script also reuses / relies on keys already added by
 * `step3.5-add-source-keys.js` (e.g. `common_site_tagline`,
 * `common_language_switcher_add_language`).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_EN_ROOT = path.join(REPO_ROOT, "i18n", "en");

const ADDITIONS = {
	"business/index": {
		biz_meta_description:
			"Accept Bitcoin at your business for lower fees, instant settlement, no chargebacks, and more customers.",
	},
	"business/maps": {
		biz_maps_meta_description:
			"List your business for free on BTC Map and other Bitcoin merchant maps so Bitcoiners nearby can find you.",
	},
};

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

function namespaceToEnPath(namespace) {
	const lastSlash = namespace.lastIndexOf("/");
	const dir = lastSlash === -1 ? "" : namespace.slice(0, lastSlash);
	const base = lastSlash === -1 ? namespace : namespace.slice(lastSlash + 1);
	return path.join(I18N_EN_ROOT, dir, `${base}_en.json`);
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function main() {
	let added = 0;
	let filesTouched = 0;
	const today = todayIso();
	for (const [ns, keys] of Object.entries(ADDITIONS)) {
		const filePath = namespaceToEnPath(ns);
		if (!fs.existsSync(filePath)) {
			console.error(`  [skip] ${ns}: ${filePath} not found`);
			continue;
		}
		const json = readJson(filePath);
		let delta = 0;
		for (const [k, v] of Object.entries(keys)) {
			if (json[k] === v) continue;
			json[k] = v;
			delta++;
		}
		if (delta === 0) continue;
		if (json["@metadata"] && typeof json["@metadata"] === "object") {
			json["@metadata"] = { ...json["@metadata"], "last-updated": today };
		}
		writeJson(filePath, json);
		filesTouched++;
		added += delta;
		console.log(`  ${ns.padEnd(25, " ")} +${delta} keys`);
	}
	console.log("");
	console.log(
		`Done — added ${added} keys across ${filesTouched} files (last-updated bumped to ${today}).`,
	);
}

main();
