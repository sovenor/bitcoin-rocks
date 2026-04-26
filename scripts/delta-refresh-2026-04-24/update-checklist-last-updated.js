#!/usr/bin/env node
/**
 * update-checklist-last-updated.js — prepend a 2026-04-24 delta
 * refresh note to V2-REDESIGN-CHECKLIST.md's trailing "Last updated"
 * paragraph. Avoids the markdown replace_in_file tool which stumbles
 * on wide-character dashes in the existing paragraph.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(
	__dirname,
	"..",
	"..",
	"V2-REDESIGN-CHECKLIST.md",
);
let s = fs.readFileSync(filePath, "utf8");

const prefix = "_Last updated: 2026-04-23 (i18n cleanup Steps";
const newPrefix =
	"_Last updated: 2026-04-24 (delta refresh — minor English text updates across `about`, `get-involved`, `bitcoin-vs-cash`/`-fine-art`/`-gold`, `inflation` links, `/business/faq` links in commits `c88d7273..ef04b2a3` produced 3 changed + 4 added manifest keys. Regenerated `v2-manifest.json` (now 165 changed + 392 added = 557; manifestVersion `d966f8c780c0c485...`), and wrote `scripts/delta-refresh-2026-04-24/apply-delta.js` to retroactively patch the 7 Step-5-completed locales (af, am, ar, az, bg, bn, ca) in-place with the delta — 13 changed + 4 added translations per locale across 5 namespaces (`about`, `get-involved`, `bitcoin-vs-cash`, `bitcoin-vs-fine-art`, `bitcoin-vs-gold`), including the new `get_involved_biz_stickers_note` / `_card_biz_stickers_label` / `_title` / `_source` keys, and the Wikipedia India / gold.org supply-and-demand inline `<a class=\"body-link\">` HTML wrapped into the updated `point_N_summary_1` strings. Each locale's marker at `scripts/i18n-audit/v2-refresh-status/<lang>.json` re-pinned to the new manifestVersion. All 7 locales PASS `verify-language.js` (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). The delta approach avoids forcing a full 557-entry re-translation of already-done locales — new per-locale translation sessions that run `/translate-manifest-refresh` for the remaining 47 languages will naturally pick up the full 557 keys in one pass. **Previously:** i18n cleanup Steps";

if (!s.includes(prefix)) {
	console.error("Prefix not found — aborting.");
	process.exit(1);
}
if (s.includes(newPrefix)) {
	console.log("Already updated, nothing to do.");
	process.exit(0);
}

s = s.replace(prefix, newPrefix);
fs.writeFileSync(filePath, s, "utf8");
console.log("✅ Updated Last-updated paragraph in", filePath);
