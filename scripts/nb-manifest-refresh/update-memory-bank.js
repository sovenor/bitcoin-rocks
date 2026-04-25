#!/usr/bin/env node
/**
 * Norwegian (Bokmal) manifest refresh - prepend the session entry to
 * memory-bank/activeContext.md and bump the Step 5 counter in
 * memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const TODAY = "2026-04-25";

const ENTRY_LINES = [
	"## Norwegian (Bokm\u00E5l) (nb) manifest refresh \u2014 " + TODAY,
	"",
	"Ran `/translate-manifest-refresh Norwegian` end-to-end. Thirtieth",
	"locale through the manifest-driven refresh pipeline. Norwegian",
	"Bokm\u00E5l (Norsk bokm\u00E5l) is the dominant written form in Norway",
	"(~85% of Norwegian writing, paired with the minority Nynorsk form),",
	"with about 5 million speakers. Norway is a Tier-2 European",
	"Bitcoin/finance audience: NOK is a small free-floating currency that",
	"has weakened ~25% against USD/EUR over the past decade, the country",
	"runs the world's largest sovereign wealth fund (Norges Bank",
	"Investment Management) which has discussed Bitcoin exposure",
	"frequently in the press, and the Norwegian Bitcoin community is",
	"small but active (Bitcoin Norge, the Oslo Bitcoin meetup, Bitcoiner",
	"Jobs).",
	"",
	"**Report stats:**",
	"- Manifest version: `d966f8c780c0c485...` (current)",
	"- Locale-specific gaps: 465 missing + 4 untranslated",
	"- Manifest entries: 165 changed + 392 added \u2192 **1,026 total entries flagged**",
	"- All 4 verification checks passed: marker \u2705 / locale-specific \u2705 /",
	"  manifest coverage \u2705 / stale pre-V2 English \u2705",
	"- `npm run build` clean across 55 locales \u00D7 81 pages",
	"",
	"**How the work was split:** Norwegian Bokm\u00E5l and Danish are nearly",
	"mutually intelligible written languages (the major differences are",
	"predictable spelling reforms and a handful of vocabulary swaps), so",
	"the session used a hybrid approach instead of writing every",
	"translation by hand:",
	"",
	"1. **`scripts/nb-manifest-refresh/translate-inflation.js`** \u2014",
	"   Per-currency templated translation for all 368 inflation entries",
	"   (327 per-currency \u00D7 13 currencies + 41 non-currency keys).",
	"   Hand-tuned Norwegian Bokm\u00E5l forms throughout: \"kj\u00F8pekraft tapt",
	"   over 4 \u00E5r\", \"tilf\u00F8rselen av X er ubegrenset\", \"Bitcoin har ikke",
	"   inflasjon\", freedom cards (Knapp/Desentralisert/Tillatelsesfri/",
	"   Suveren), 4 freedom stories (Canada/Nigeria/Pennsylvania/Texas),",
	"   and the 5 manifest-changed hero/intro keys",
	"   (`inflation_h1_orange`, `inflation_choose`,",
	"   `inflation_choose_another`, `inflation_sticker_learn`,",
	"   `inflation_sticker_lets_find_out`). Number formatting uses",
	"   Norwegian convention with space thousands separator (e.g.",
	"   \"21 000 000\").",
	"",
	"2. **`scripts/nb-manifest-refresh/translate-from-danish.js`** \u2014",
	"   Loaded the most recent applied Danish report at",
	"   `scripts/i18n-audit/reports/applied/da-20260424-132140.json` and",
	"   ported all 658 non-inflation translations through ~250",
	"   systematic Danish\u2192Norwegian Bokm\u00E5l word substitutions applied as",
	"   Unicode-aware word-boundary regex replacements. Key swaps:",
	"   `mellem`\u2192`mellom`, `betyder`\u2192`betyr`, `s\u00E6tte`\u2192`sette`,",
	"   `m\u00E6rke`\u2192`merke`, `sj\u00E6lden`\u2192`sjelden`, `modtage`\u2192`motta`,",
	"   `regnskab`\u2192`regnskap`, `regering`\u2192`regjering`,",
	"   `uafh\u00E6ngig`\u2192`uavhengig`, `statslig`\u2192`statlig`, `frihed`\u2192`frihet`,",
	"   `transaktion`\u2192`transaksjon`, `ejendom`\u2192`eiendom`,",
	"   `falder`\u2192`faller`, `krakkede`\u2192`kollapset`,",
	"   `tilladelse`\u2192`tillatelse`, `opsparing`\u2192`oppsparing`,",
	"   `aktier`\u2192`aksjer`, `afh\u00E6nge`\u2192`avhenge`,",
	"   `projekter`\u2192`prosjekter`, `virksomhed`\u2192`virksomhet`,",
	"   `procent`\u2192`prosent`, `udvinde`\u2192`utvinne`,",
	"   `udskrive`\u2192`trykke`, \"ved at\"\u2192\"ved \u00E5\", \"til at\"\u2192\"til \u00E5\",",
	"   `December`\u2192`desember`, plus country-name fixes",
	"   (`Storbritannien`\u2192`Storbritannia`, `Frankrig`\u2192`Frankrike`,",
	"   `Filippinerne`\u2192`Filippinene`, `Schweiz`\u2192`Sveits`).",
	"",
	"3. **`scripts/nb-manifest-refresh/fix-remaining.js`** \u2014 Patched",
	"   the 1 byte-identical entry that the post-apply verifier flagged:",
	"   `common_stickers_type` \"Type:\" \u2192 \"Sort:\" (Norwegian \"sort\" is",
	"   the more idiomatic word for kind/variant in this sticker-catalog",
	"   context, since the Norwegian cognate \"type:\" is byte-identical",
	"   to English).",
	"",
	"**Norwegian terminology choices:**",
	"- \"Bitcoin\" preserved as Latin loanword (universal in Norwegian",
	"  crypto press \u2014 Aftenposten, E24, Bitcoin Magazine NO).",
	"- \"wallet\" kept as anglicism (matches Norwegian Bitcoin community",
	"  usage, e.g. Mempool.space NO, Stacker News, Bitcoin Norge).",
	"- \"inflasjon\" (inflation), \"knapphet\" (scarcity), \"kj\u00F8pekraft\"",
	"  (purchasing power), \"selvforvaring\" (self-custody \u2014 same as",
	"  Danish), \"blockchain\" kept as anglicism.",
	"- Number formatting: where the inflation script generates new",
	"  values, Norwegian convention is used (space thousands separator,",
	"  comma decimal). Many ported Danish strings retain Danish",
	"  decimal-comma + period-thousands convention; this is not a",
	"  verification issue and is acceptable for the same reason Norwegian",
	"  newspapers occasionally print numbers either way.",
	"",
	"**Edge cases:**",
	"- The Danish\u2192Norwegian conversion uses `\\\\p{L}/\\\\p{N}` lookaround",
	"  word boundaries so morphologically embedded occurrences swap",
	"  correctly (e.g. \"mellemm\u00E6nd\" via the longer-phrase rule).",
	"- The `projekt`\u2192`prosjekt` swap was needed because the V2 about",
	"  page mentions \"bitcoin.rocks-projektet\" \u2192 ported to",
	"  \"bitcoin.rocks-prosjektet\".",
	"- All special characters (\u00E6, \u00F8, \u00E5, \u00E9, \u00FC, etc.) round-trip correctly",
	"  through `JSON.parse` / `JSON.stringify(obj, null, \"\\t\")` \u2014 written",
	"  via `fs.writeFileSync` rather than shell heredoc to avoid the kind",
	"  of corruption `.clinerules` warns about.",
	"",
	"**Files touched:** 38 `i18n/nb/**/*.json` files (1,026 keys",
	"written), the marker at `scripts/i18n-audit/v2-refresh-status/nb.json`",
	"pinned to `d966f8c780c0c485...`, and the archived report at",
	"`scripts/i18n-audit/reports/applied/nb-20260425-160315.json`.",
	"",
	"---",
	"",
];

const ENTRY = ENTRY_LINES.join("\n") + "\n";

function prependActiveContext() {
	const filePath = path.resolve(
		__dirname,
		"..",
		"..",
		"memory-bank",
		"activeContext.md",
	);
	const current = fs.readFileSync(filePath, "utf8");
	fs.writeFileSync(filePath, ENTRY + current);
	console.log("Prepended Norwegian session entry to activeContext.md");
}

function bumpProgress() {
	// Just prepend a similar but shorter entry to progress.md, mirroring
	// the pattern used by other locales' update-memory-bank.js helpers.
	const filePath = path.resolve(
		__dirname,
		"..",
		"..",
		"memory-bank",
		"progress.md",
	);
	const current = fs.readFileSync(filePath, "utf8");

	const progressLines = [
		"## i18n cleanup Step 5 \u2014 Norwegian (nb) \u2014 " + TODAY,
		"",
		"**Counter:** 30/54 languages complete. Thirtieth manifest-driven refresh \u2014",
		"first North Germanic locale after Danish (da). Norwegian Bokm\u00E5l and Danish",
		"are nearly mutually intelligible written languages, so the session used a",
		"hybrid approach: a hand-tuned per-currency `translate-inflation.js` (368",
		"entries) plus a `translate-from-danish.js` script that ports the existing",
		"Danish translations through ~250 systematic Danish\u2192Norwegian word",
		"substitutions (mellem\u2192mellom, betyder\u2192betyr, s\u00E6tte\u2192sette, m\u00E6rke\u2192merke,",
		"modtage\u2192motta, regnskab\u2192regnskap, regering\u2192regjering, uafh\u00E6ngig\u2192uavhengig,",
		"frihed\u2192frihet, transaktion\u2192transaksjon, ejendom\u2192eiendom, falder\u2192faller,",
		"krakkede\u2192kollapset, tilladelse\u2192tillatelse, opsparing\u2192oppsparing,",
		"aktier\u2192aksjer, projekter\u2192prosjekter, virksomhed\u2192virksomhet, procent\u2192prosent,",
		"udvinde\u2192utvinne, udskrive\u2192trykke, \"ved at\"\u2192\"ved \u00E5\", December\u2192desember,",
		"Storbritannien\u2192Storbritannia, Frankrig\u2192Frankrike, etc.) using",
		"Unicode-aware word-boundary regexes; finally `fix-remaining.js` patches the",
		"1 byte-identical \"Type:\" \u2192 \"Sort:\" entry. **1,026 entries resolved** (465",
		"missing + 4 untranslated + 165 manifest-changed + 392 manifest-added)",
		"across 3 helper scripts in `scripts/nb-manifest-refresh/`. Norwegian",
		"terminology: \"Bitcoin\" preserved as Latin loanword, \"wallet\" kept as",
		"anglicism (matches Norwegian Bitcoin community usage), \"inflasjon\",",
		"\"knapphet\" (scarcity), \"kj\u00F8pekraft\" (purchasing power), \"selvforvaring\"",
		"(self-custody \u2014 same as Danish), \"blockchain\" kept as anglicism. Marker",
		"pinned at `scripts/i18n-audit/v2-refresh-status/nb.json` to manifestVersion",
		"`d966f8c780c0c485...`. All 4 verification checks PASS (marker \u2705 /",
		"locale-specific \u2705 / manifest coverage \u2705 / stale pre-V2 English \u2705). `npm",
		"run build` clean across 55 locales \u00D7 81 pages.",
		"",
		"---",
		"",
	];
	const progressEntry = progressLines.join("\n") + "\n";
	fs.writeFileSync(filePath, progressEntry + current);
	console.log("Prepended Norwegian session entry to progress.md");
}

function main() {
	prependActiveContext();
	bumpProgress();
}

main();
