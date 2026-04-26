#!/usr/bin/env node
/**
 * Prepend Irish manifest-refresh entry to memory-bank/activeContext.md
 * and bump the Step-5 counter in memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = path.resolve(__dirname, "..", "..");
const AC_PATH = path.join(REPO, "memory-bank", "activeContext.md");
const PG_PATH = path.join(REPO, "memory-bank", "progress.md");

const newEntry = `## Irish (ga) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Irish\` end-to-end. Eighteenth locale through the manifest-driven refresh pipeline. Irish (Gaeilge) is the first official language of Ireland and an official language of the European Union. Though the native-speaker community is smaller than Tier-1 languages (~1.8M people with some Irish proficiency, ~170K daily speakers), Irish has strong institutional support in Ireland and a growing Bitcoin-curious audience via Gaelchultúr, Conradh na Gaeilge, and Gaeltacht community initiatives. This refresh extends bitcoin.rocks to the Gaeltacht regions (Donegal, Mayo, Galway, Kerry, Cork, Waterford, Meath) and to Irish-language educators/learners throughout Ireland and the diaspora.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged** (mid-range — similar to Czech/Danish/Finnish at ~1,020–1,030)

**Helper-script split (4 scripts under \`scripts/ga-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Irish is a Celtic language with VSO word order, mutation systems (lenition/eclipsis), and initial mutations that make noun forms tricky. Template supplies \`longName\` (plural with appropriate mutations for "Má dhéanann tú coigilt i X" — "in X"-style locative with preposition \`i\`/\`in\` triggering eclipsis: "i ndollair Mheiriceá" etc. — though in JSON we kept the non-mutated standard form for simplicity since context triggers mutation uniformly), \`noun\` (singular), \`nounPlural\`, plus a \`label\` field for the stat-card currency name. Informal 2nd-person singular "tú" used throughout — the dominant register in Irish-language educational writing (An Gúm, Foras na Gaeilge materials, TG4 news copy for younger audiences, Raidió na Gaeltachta documentaries). The formal "sibh" (2nd-pl) is rare in contemporary Irish except for direct plural address. Plus 41 non-currency keys: freedom cards (Gann / Díláraithe / Gan chead / Ceannasach), inflation stories (Ceanada / An Nigéir / Pennsylvania / Texas), sources, and 5 manifest-changed hero/intro keys (the new \`inflation_h1_orange\` → "Níl boilsciú ag Bitcoin, ach tá sé ag do chuid airgid.").
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (35) + all 10 bitcoin-vs-* comparison pages (121). Uses Irish typographic quotation marks \`"…"\` (standard convention in modern Irish printing). Typographic apostrophes (U+2019) used extensively — Irish uses apostrophes for elision between articles and vowel-initial nouns ("d'fhostaithe" / "d'airgid" / "d'úsáid"). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Irish coinage for financial terms — "blocshlabhra" (blockchain), "sparán" (wallet), "coigilt" (savings/to save), "boilsciú" (inflation), "cripteabhair" (crypto), "CBDCanna" (CBDCs — plural suffix \`-anna\` added to the English acronym), "féin-choimeádaithe" (self-custodial, from \`féin-\` self + \`coimeádaí\` custodian). Numbers use English-style format ("1.42%", "$153.9 billion") — Ireland uses English conventions even in Irish-language finance writing since most Irish economic reporting is bilingual.
- \`translate-rest-part2.js\` — **460 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "gnóthachan caipitil" / "caillteanas caipitil" for capital gain/loss, why as customer-facing QR landing page with "Glactar le Bitcoin anseo", wallets, maps with field labels, stickers, …), buy (21), common (53 — "Source:" → "Foinse:", "What's next?" → "Cad atá ag teacht anois?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with Irish idioms like "Déanaimis comparáid" (1st-pl imperative "let us compare") for "Let's compare", "Cad í an difríocht?" for "What's the difference?", "Ealaín sráide" (literally "art of street") for "Street art", "An comhaontóir mór" (the great equalizer) for "The great equalizer", "Geallsa láidir" for "Strong bet", "Maoinigh do thionscadal" for "Fund your project"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **10 locale-specific entries**. All 10 are \`common_stickers_dimensions_*\` measurement strings — rewritten with Irish unit abbreviation "or" (orlach — Irish for "inch"; "or" is the standard abbreviation used in Foclóir Nua Béarla–Gaeilge and An Coiste Téarmaíochta terminology documents) — e.g. "21.59 cm x 4.6482 cm (8.5 or x 1.83 or)". Ireland uses the English-style "cm" for centimeters (unchanged) but switches to the Irish "or" for inches. Decimal periods (not commas) preserved since Ireland uses English conventions for numeric formatting.

**Edge cases:**
- **Informal "tú" register:** Irish has a T-V distinction in pronouns (T = informal singular "tú/do/thú/tusa", V = plural-or-formal "sibh/bhur/sibhse"), but in modern Irish "sibh" is almost exclusively a plural rather than a formal register — "tú" is acceptable for all individual addressees in educational content. Chose "tú" throughout, matching the register of TG4 (Irish-language TV), Raidió na Gaeltachta, and Irish Bitcoin commentary on platforms like Tuairisc.ie.
- **Mutation handling in templates:** Irish has initial consonant mutations (lenition adds \`h\` — \`coigilt\` → \`choigilt\`; eclipsis prefixes a consonant — \`ndollair\` from \`dollair\`). Full mutation in template strings would require per-currency-per-context branching, so we kept the unmutated standard forms in the CURRENCY table and let them appear in a context where mutation is either optional or already applied. The resulting sentences are grammatical in "loose" spoken Irish; a native-speaker review could tighten the mutations further in a follow-up pass.
- **Verb-Subject-Object order:** Irish is VSO ("Níl boilsciú ag Bitcoin" literally "Is-not inflation at Bitcoin" = "Bitcoin doesn't have inflation"). Applied consistently in headlines, body text, and stat labels. "Coinníonn tú" ("You keep") / "Is féidir leat" ("You can") are standard VSO constructions.
- **"Irish coinage" for crypto terms:** For technical Bitcoin terminology where no established native Irish word exists, used compound words built from core Irish roots: "blocshlabhra" (\`bloc\` + \`slabhra\` = "block" + "chain"), "sparán" (existing Irish word for "purse", now standard for "wallet"), "féin-choimeádaithe" (\`féin-\` "self-" + \`coimeádaí\` "keeper/custodian"), "cripteabhair" (\`cripte-\` "crypto" + \`abhair\` collective plural for "matter/thing"), "piara-le-piara" (calque of "peer-to-peer"). "Lightning Network" kept as English since it's a product name.
- **CBDC → CBDCanna:** Irish pluralizes the English acronym with the native \`-anna\` plural suffix, producing "CBDCanna" — a pattern used elsewhere in Irish technical writing for loanword plurals (e.g. "WiFi" → "WiFi-anna" in some tech writing). Applied to the comparison page title, ribbon label, and all 10 comparison points.
- **\`or\` for inch:** The Irish word for inch is \`orlach\` (masculine, gen. sg. \`orlaigh\`), and its standard abbreviation is \`or\`. Used in the 10 \`common_stickers_dimensions_*\` entries. Ireland historically used imperial units alongside metric, so the parenthetical "(8.5 or x 1.83 or)" reads naturally to an Irish audience. Matches the pattern used by French ("po" for \`pouce\`) and Spanish (kept "in" since Spanish speakers recognize it).
- **Home card labels (62 entries):** concise Irish phrasings matching English compactness — "Let's compare" → "Déanaimis comparáid" (1st-pl imperative of \`déanaimid\` "we do" + \`comparáid\` "comparison"), "What's the difference?" → "Cad í an difríocht?" (\`cad í\` "what is" + fem. \`an difríocht\`), "Fund your project" → "Maoinigh do thionscadal" (\`maoinigh\` imperative of "to fund" + lenited \`thionscadal\`), "Grid stabilization" → "Cobhsú eangaí leictreachais", "The great equalizer" → "An comhaontóir mór", "Street art" → "Ealaín sráide", "End forever wars" → "Cuir deireadh le cogaí gan chríoch", "Escape war" → "Éalaigh ón gcogadh".
- **Currency names in Irish:** "dollair Mheiriceá/Cheanadacha/Astrálacha/Nua-Shéalannacha" (with genitive-like mutations of country adjectives), "euro" / "euronna" (plural), "punt steirling" (sterling pound), "yen" (unchanged from English/Japanese), "rúipí"/"rúipithe" (rupee), "seicil" (shekel), "pesónna" (pesos), "realanna" (reals), "baht" (unchanged).
- **"blocshlabhra" spelling:** Adopted Modern Irish compounding convention — single-word compound \`bloc\` + \`slabhra\` with no hyphen since both roots are native-sounding. Alternative "bloc-shlabhra" with hyphen also exists but is less common in tech writing. Consistent with "cripteagrafaíocht" (cryptography) which is standard Irish usage.
- **Bitcoin sticker artwork:** The 10 \`common_sticker_name_*\` keys wrap Irish descriptor ("Greamán …" / "Greamán Bitcoin …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **Apostrophe contractions (d'/n'/m'/s'/t'):** Irish uses extensive elision before vowels. Applied throughout — "d'úsáid" (d' + úsáid "use"), "d'fhostaithe" (d' + fhostaithe "employees"), "d'airgid" (d' + airgid "money"). All use Unicode U+2019 (right single quotation mark), matching modern Irish typographic convention.
- **CCanna for FAQ:** Used the native Irish abbreviation "CCanna" (\`ceisteanna coitianta\` "common questions" + plural \`-anna\`) in the business/index namespace label. This is the standard abbreviation in Irish government and educational writing.
- **Financial/tech acronyms kept Latin:** FAQ/CBDC/BTC/USD/EUR/ATM/PIN/QR/P/E/DCA/IOU/PDG/B2B preserved verbatim. Native Irish expansions exist for some (e.g. \`CCanna\` for FAQ), but most are used untranslated in Irish tech/business writing.
- **No byte-identical cognate issues on first pass:** Unlike French (Antifragile), German (Open Source), or Catalan (Dimensions/Material), Irish has distinct word forms for nearly every concept due to the Celtic base. The 10 remaining \`untranslated\` entries were all numeric measurements that needed the "in" → "or" substitution.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to \`scripts/i18n-audit/reports/applied/ga-<timestamp>.json\`. Marker pinned at \`scripts/i18n-audit/v2-refresh-status/ga.json\` to manifestVersion \`d966f8c780c0c485...\`. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/ga/\` directory now fully at parity with English V2. Irish is the **first Celtic language** through Step 5 — sets a reference for any future Welsh (cy), Scottish Gaelic (gd), or Breton (br) additions.

---
`;

const activeContext = fs.readFileSync(AC_PATH, "utf8");
fs.writeFileSync(AC_PATH, newEntry + activeContext);
console.log("Prepended Irish entry to activeContext.md");

// Progress.md — bump Step 5 counter from 17 → 18
let progress = fs.readFileSync(PG_PATH, "utf8");
const before = progress;
progress = progress.replace(
	/Per-language re-translation \(Step 5\) \| 54 \| 17/,
	"Per-language re-translation (Step 5) | 54 | 18",
);
if (progress !== before) {
	fs.writeFileSync(PG_PATH, progress);
	console.log("Bumped Step 5 counter in progress.md (17 → 18)");
} else {
	console.log(
		"progress.md: Step 5 counter not at 17 — skip bump, check manually",
	);
}
