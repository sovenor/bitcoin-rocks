#!/usr/bin/env node
/**
 * Phase 10 — wire-up tasks:
 *   1. Add the 13 business namespaces to lib/i18n/request.ts.
 *   2. Flip `published: false` → `true` on the 13 business page entries
 *      in lib/pages.ts.
 *
 * Both operations are idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = process.cwd();

// ============================================================================
// 1. lib/i18n/request.ts — add business namespaces
// ============================================================================

const REQUEST_PATH = path.join(REPO, "lib", "i18n", "request.ts");
const NEW_NAMESPACES = [
	"business/index",
	"business/why",
	"business/faq",
	"business/guide",
	"business/wallets",
	"business/accounting",
	"business/stickers",
	"business/maps",
	"business/kit",
	"business/kit-success",
	"business/maps-success",
	"business/sticker-success",
	"business/sticker-language-success",
];

function updateRequestTs() {
	let src = fs.readFileSync(REQUEST_PATH, "utf8");
	if (src.includes('"business/index"')) {
		console.log("  [request.ts] already has business namespaces — skipping");
		return;
	}

	// Anchor: the "sticker-language-success" line is the last namespace in
	// the Phase 9b block — insert a new Phase 10 block right after it.
	const anchor = '\t"sticker-language-success",';
	const idx = src.indexOf(anchor);
	if (idx === -1) throw new Error("Anchor not found in request.ts");

	const after = src.slice(0, idx + anchor.length);
	const rest = src.slice(idx + anchor.length);

	const block =
		"\n\t// Phase 10 — business section.\n" +
		NEW_NAMESPACES.map((ns) => `\t${JSON.stringify(ns)},`).join("\n");

	fs.writeFileSync(REQUEST_PATH, after + block + rest);
	console.log(`  [request.ts] added ${NEW_NAMESPACES.length} business namespaces`);
}

// ============================================================================
// 2. lib/pages.ts — flip published flags
// ============================================================================

const PAGES_PATH = path.join(REPO, "lib", "pages.ts");
const BUSINESS_SLUGS = [
	"business",
	"business/why",
	"business/faq",
	"business/guide",
	"business/wallets",
	"business/accounting",
	"business/stickers",
	"business/maps",
	"business/kit",
	"business/kit-success",
	"business/maps-success",
	"business/sticker-success",
	"business/sticker-language-success",
];

function flipPublished() {
	let src = fs.readFileSync(PAGES_PATH, "utf8");
	let changed = 0;
	for (const slug of BUSINESS_SLUGS) {
		// Match: { slug: "business", ..., published: false }
		// Replace the `published: false` to `published: true` on the matching line.
		const needle = new RegExp(
			`(\\{\\s*slug:\\s*"${slug.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}",[^}]*published:\\s*)false(\\s*\\})`,
			"m",
		);
		const next = src.replace(needle, `$1true$2`);
		if (next !== src) {
			changed++;
			src = next;
		}
	}
	if (changed === 0) {
		console.log("  [pages.ts] all business slugs already published — no changes");
	} else {
		fs.writeFileSync(PAGES_PATH, src);
		console.log(`  [pages.ts] flipped ${changed} business slugs to published`);
	}
}

function main() {
	updateRequestTs();
	flipPublished();
}

main();
