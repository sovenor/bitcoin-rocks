#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const PG_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"memory-bank",
	"progress.md",
);

const entry = `## i18n cleanup Step 5 — Irish (ga) — 2026-04-24

**Counter:** 18/54 languages complete. Eighteenth manifest-driven refresh — first Celtic language. Irish (Gaeilge) is the first official language of Ireland and an official language of the EU. Native-speaker community is small (~170K daily / ~1.8M with some proficiency) but has strong institutional backing via Foras na Gaeilge, Conradh na Gaeilge, Gaelchultúr, TG4, and Raidió na Gaeltachta; reaches Gaeltacht regions (Donegal, Mayo, Galway, Kerry, Cork, Waterford, Meath) plus Irish-language learners worldwide. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/ga-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Irish noun forms (\`longName\` plural, \`noun\`, \`nounPlural\`) with informal "tú" register throughout — dominant register in TG4/Raidió na Gaeltachta/Tuairisc.ie educational copy + 41 non-currency keys including freedom cards Gann/Díláraithe/Gan chead/Ceannasach), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages using Irish typographic quotation marks "…", typographic apostrophes (U+2019) used extensively for elision (d'úsáid, d'fhostaithe, d'airgid), and Irish coinage for financial terms: "blocshlabhra" (blockchain), "sparán" (wallet), "coigilt" (savings), "boilsciú" (inflation), "cripteabhair" (crypto), "CBDCanna" (CBDCs via native -anna plural), "féin-choimeádaithe" (self-custodial); numbers use English-style format since Ireland uses English numeric conventions even in Irish-language finance writing), \`translate-rest-part2.js\` (460 entries — business/* subtree with "gnóthachan caipitil"/"caillteanas caipitil" for capital gain/loss, buy, common with "Foinse:" for "Source:", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Déanaimis comparáid" (1st-pl imperative) for "Let's compare", "Cad í an difríocht?" for "What's the difference?", "Ealaín sráide" for "Street art", "An comhaontóir mór" for "The great equalizer", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets; also uses "CCanna" (ceisteanna coitianta + -anna plural) for FAQ), and \`fix-remaining.js\` (10 \`common_stickers_dimensions_*\` measurements — rewritten with Irish "or" (orlach) abbreviation instead of "in" — e.g. "21.59 cm x 4.6482 cm (8.5 or x 1.83 or)"; Irish uses English-style decimal periods). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/ga.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages).

---

`;

const current = fs.readFileSync(PG_PATH, "utf8");
fs.writeFileSync(PG_PATH, entry + current);
console.log("Prepended Irish entry to progress.md");
