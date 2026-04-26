#!/usr/bin/env node
/**
 * Phase 12 — idempotently add the nostr namespaces to
 * `lib/i18n/request.ts`'s DEFAULT_NAMESPACES and flip `published: true`
 * on the two nostr slugs in `lib/pages.ts`.
 *
 * Regex-driven + no-op on a second run. Matches the shape of the
 * Phase 9b/10/11 wire scripts.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");

// ─────────────────── lib/i18n/request.ts ────────────────────
const REQ_PATH = path.join(ROOT, "lib/i18n/request.ts");
const NAMESPACES = ["nostr/index", "nostr/what-is-nostr"];

let req = fs.readFileSync(REQ_PATH, "utf8");
let addedNs = 0;
// Insert new namespaces right before the closing `] as const;` of DEFAULT_NAMESPACES.
// The file ends the list with a line like:   ] as const;
const closeIdx = req.indexOf("] as const;");
if (closeIdx < 0) {
	console.error(`[phase12/wire] can't find ] as const; in ${REQ_PATH}`);
	process.exit(1);
}
const before = req.slice(0, closeIdx);
const after = req.slice(closeIdx);
const toAdd = NAMESPACES.filter((ns) => !before.includes(`"${ns}"`));
if (toAdd.length > 0) {
	const insert =
		"\t// Phase 12 — nostr section.\n" +
		toAdd.map((ns) => `\t"${ns}",`).join("\n") +
		"\n";
	req = before.trimEnd() + "\n" + insert + after;
	fs.writeFileSync(REQ_PATH, req, "utf8");
	addedNs = toAdd.length;
}
console.log(
	`[phase12/wire] lib/i18n/request.ts — ${addedNs} namespace(s) added`
);

// ─────────────────── lib/pages.ts ────────────────────
const PAGES_PATH = path.join(ROOT, "lib/pages.ts");
const SLUGS = ["nostr", "nostr/what-is-nostr"];

let pages = fs.readFileSync(PAGES_PATH, "utf8");
let flipped = 0;
for (const slug of SLUGS) {
	// Find the line for this slug and flip published: false → true.
	const re = new RegExp(
		`(\\{ slug: "${slug.replace(/\//g, "\\/")}",[^}]*?published: )false( \\})`,
		"s"
	);
	const next = pages.replace(re, "$1true$2");
	if (next !== pages) {
		pages = next;
		flipped++;
	}
}
if (flipped > 0) {
	fs.writeFileSync(PAGES_PATH, pages, "utf8");
}
console.log(`[phase12/wire] lib/pages.ts — ${flipped} slug(s) flipped to published`);
