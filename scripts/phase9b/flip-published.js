#!/usr/bin/env node
/**
 * Phase 9b: flip `published: true` for the 8 slugs shipped in this phase.
 *
 * Idempotent — reads `lib/pages.ts`, replaces each matching slug's flag
 * from false → true. Skips slugs that are already true. Keeps any other
 * text unchanged.
 */

const fs = require("fs");
const path = require("path");

const PAGES_TS = path.join(__dirname, "..", "..", "lib", "pages.ts");
const SLUGS_TO_FLIP = [
	"stickers",
	"signs",
	"postcards",
	"buy",
	"sticker-success",
	"sign-success",
	"postcard-success",
	"sticker-language-success",
];

function main() {
	let src = fs.readFileSync(PAGES_TS, "utf8");
	let changed = 0;
	for (const slug of SLUGS_TO_FLIP) {
		// Match `{ slug: "X", ..., published: false }` on one line.
		const re = new RegExp(
			`(\\{\\s*slug:\\s*"${slug}"[^}]*?published:\\s*)false(\\s*\\})`,
			"g"
		);
		const before = src;
		src = src.replace(re, (_, pre, post) => `${pre}true${post}`);
		if (src !== before) {
			changed += 1;
			console.log(`  flipped ${slug} → published: true`);
		} else {
			console.log(`  skipped ${slug} (already true or not found)`);
		}
	}

	if (changed > 0) {
		fs.writeFileSync(PAGES_TS, src);
		console.log(`\n✓ ${changed} slugs flipped.`);
	} else {
		console.log("\n✓ Nothing to do.");
	}
}

main();
