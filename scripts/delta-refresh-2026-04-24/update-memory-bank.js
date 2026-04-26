#!/usr/bin/env node
/**
 * update-memory-bank.js — prepend 2026-04-24 delta-refresh notes to
 * memory-bank/activeContext.md and memory-bank/progress.md.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");

const ACTIVE_ENTRY = `## 2026-04-24 delta refresh — 7 locales synced against new manifest

Minor English text updates across 5 commits (\`c88d7273..ef04b2a3\`) on 2026-04-24 touched 5 content pages:

- \`/about\` — retired "Business Kit" → "Business resources" rewording on the business card
- \`/get-involved\` — dropped Business Kit prose; added a new "Bitcoin Accepted Here stickers" card pointing at \`/business/stickers\` (4 new i18n keys)
- \`/inflation\` — wired 4 \`FeatureCard\` icons to voteforbetter.money deep-links (no i18n change)
- \`/business/faq\` — wrapped two FAQ list items in \`href\` anchors to \`/bank-runs\` and \`/inflation\` (no i18n change)
- \`bitcoin-vs-cash::point_3_summary_1\` — wrapped "India" in a Wikipedia demonetisation link
- \`bitcoin-vs-fine-art::point_4_summary_1\` — appended "without counterparty risk"
- \`bitcoin-vs-gold::point_2_summary_1\` — "Most online gold" → "Online gold"
- \`bitcoin-vs-gold::point_3_summary_1\` — wrapped "1.6% per year" in a gold.org supply/demand link

**Net i18n delta:** 3 changed + 4 added keys in English. These were reconciled into the Step-5 translation pipeline via:

1. **Manifest regen:** \`node scripts/i18n-audit/snapshot-english.js && node scripts/i18n-audit/build-v2-manifest.js\`. \`v2-manifest.json\` went from (162 changed, 388 added, 550 total, hash \`75d5ff1151d50651...\`) to (165 changed, 392 added, 557 total, hash \`d966f8c780c0c485...\`). The version bump invalidated every per-locale marker.
2. **Delta helper:** \`scripts/delta-refresh-2026-04-24/apply-delta.js\` — a one-shot targeted patch for the 7 already-refreshed locales (af, am, ar, az, bg, bn, ca) that applies just the new/changed keys (13 changed + 4 added per locale across 5 namespaces: \`about\`, \`get-involved\`, \`bitcoin-vs-cash\`, \`bitcoin-vs-fine-art\`, \`bitcoin-vs-gold\`) and re-pins each marker to the new manifestVersion. Idempotent. Reuses the locale's existing \`get_involved_card_business_source\` value ("Source: bitcoin.rocks →" in the locale's script) for the new \`get_involved_card_biz_stickers_source\` so we don't have to re-translate the source tagline. Inline \`<a class="body-link">\` HTML (Wikipedia India anchor + gold.org supply/demand anchor) preserved verbatim in every locale, with the anchor text translated per-locale.
3. **Checklist + workflow updated:** \`V2-REDESIGN-CHECKLIST.md\` gained a "Manifest regeneration" paragraph under Step 5; each of the 7 completed locales got a "+ 2026-04-24 delta refresh" annotation; \`.clinerules/workflows/manifest-translate-refresh.md\` had its "Typical volumes" table bumped to 165/392 and gained a note about the 2026-04-24 regen.

**Verification:** \`verify-language.js\` passes all 4 checks for all 7 locales (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages).

**Next per-locale sessions** (for cs, da, de, el, es, et, eu, fa, etc. — 47 locales remaining) will pick up the full 557-entry manifest in a single \`language-diff.js\` run, since their markers are still stale.

---

`;

const PROGRESS_ENTRY = `---
## i18n cleanup Step 5 — 2026-04-24 delta refresh (7 locales retroactively synced)

**Counter:** 7/54 languages still complete — now synced against the new manifest version \`d966f8c780c0c485...\`.

Minor English text updates in commits \`c88d7273..ef04b2a3\` on 2026-04-24 (about / get-involved / bitcoin-vs-cash / bitcoin-vs-fine-art / bitcoin-vs-gold copy edits + \`/inflation\` feature-card links + \`/business/faq\` anchor-wrapping) produced 3 changed + 4 added English keys. Manifest was regenerated (162 changed + 388 added → 165 changed + 392 added = 557 total). Wrote \`scripts/delta-refresh-2026-04-24/apply-delta.js\` to retroactively patch the 7 Step-5-completed locales (af, am, ar, az, bg, bn, ca) with the delta — 13 changed + 4 added translations per locale across 5 namespaces, plus a marker re-pin. All 7 locales PASS verify-language.js against the new manifest. \`npm run build\` clean across ~4,349 static pages. The 47 remaining locales will pick up the full 557-key manifest naturally when they run through \`/translate-manifest-refresh\`.

`;

function prependIfMissing(filePath, marker, entry) {
	const s = fs.readFileSync(filePath, "utf8");
	if (s.includes(marker)) {
		console.log("Already prepended in", path.relative(ROOT, filePath), "— skipping.");
		return false;
	}
	fs.writeFileSync(filePath, entry + s, "utf8");
	console.log("Prepended to", path.relative(ROOT, filePath));
	return true;
}

prependIfMissing(
	path.join(ROOT, "memory-bank", "activeContext.md"),
	"## 2026-04-24 delta refresh",
	ACTIVE_ENTRY,
);
prependIfMissing(
	path.join(ROOT, "memory-bank", "progress.md"),
	"## i18n cleanup Step 5 — 2026-04-24 delta refresh",
	PROGRESS_ENTRY,
);
