#!/usr/bin/env node
/**
 * Phase 12 — Add page-description i18n keys to the two nostr English JSON files
 * + refresh `@metadata.last-updated`.
 *
 * The nostr pages in V1 already reference 31 `common_nostr_*` keys (shared
 * across the two pages) + 2 keys per page (`escape_the_matrix_with_nostr` +
 * `nostr_header` on /nostr; `what_is_nostr` + `what_is_nostr_header` on
 * /nostr/what-is-nostr).  Phase 12 only needs to add a meta-description
 * key per page so `generateMetadata()` has a clean translatable string
 * instead of hardcoding English prose.  Translators pick up the 1 new
 * key per page at their next pass; English fallback handles gracefully
 * until then.
 *
 * Idempotent — safe to re-run.
 */
const fs = require("node:fs");
const path = require("node:path");

const today = new Date().toISOString().slice(0, 10);
const root = path.resolve(__dirname, "..", "..");

const UPDATES = [
	{
		file: path.join(root, "i18n/en/nostr/index_en.json"),
		additions: {
			nostr_page_description:
				"Nostr is a new protocol that allows you to communicate online without fear of censorship, deplatforming, or deboosting. Get started with a free client in minutes.",
		},
	},
	{
		file: path.join(root, "i18n/en/nostr/what-is-nostr_en.json"),
		additions: {
			what_is_nostr_page_description:
				"Nostr is a new decentralized protocol for online communication — no single company controls it, bitcoin zaps are built in natively, and you can move between clients without losing followers.",
		},
	},
];

let totalAdded = 0;
for (const { file, additions } of UPDATES) {
	const raw = fs.readFileSync(file, "utf8");
	const json = JSON.parse(raw);
	let addedHere = 0;
	for (const [k, v] of Object.entries(additions)) {
		if (!(k in json)) {
			json[k] = v;
			addedHere++;
		}
	}
	if (json["@metadata"]) {
		json["@metadata"]["last-updated"] = today;
	}
	fs.writeFileSync(file, JSON.stringify(json, null, "\t") + "\n", "utf8");
	console.log(
		`[phase12/update-en-json] ${path.relative(root, file)} — ${addedHere} key(s) added, last-updated=${today}`
	);
	totalAdded += addedHere;
}
console.log(`[phase12/update-en-json] done: ${totalAdded} key(s) added across ${UPDATES.length} file(s)`);
