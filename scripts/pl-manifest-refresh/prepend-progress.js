#!/usr/bin/env node
/**
 * Polish manifest refresh — prepend Polish progress.md entry.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(__dirname, "..", "..", "memory-bank", "progress.md");

const ENTRY = `## i18n cleanup Step 5 — Polish (pl) — 2026-04-25

**Counter:** 33/54 languages complete. Thirty-third manifest-driven refresh —
fourth Slavic locale of the campaign (after Bulgarian, Croatian, Czech).
Polish (Polski) is the official language of Poland with around 50 million
native speakers worldwide, the 6th most spoken language in the EU,
and a Tier 2 priority for the bitcoin.rocks audience (active Polish
Bitcoin community on Nostr; Warsaw Bitcoin Week is one of the largest
Bitcoin conferences in Central Europe).

**Report stats:** 1,027 entries flagged on first diff (469 missing
locale-specific + 1 untranslated + 165 manifest-changed + 392
manifest-added). Locale was already complete pre-V2 (0 missing/0
untranslated locale-specific keys at the time the manifest was minted)
so the entire 469 missing-locale-specific bucket is post-V1 drift —
mostly the 62 \`index::home_card_label_*\` keys, the 17 nostr/index
labels, and 100+ source citations across pages. All 4 verification
checks passed: marker / locale-specific / manifest coverage / stale
pre-V2 English. \`npm run build\` clean across 55 locales × 81 pages.

Report broken into 4 helper scripts under
\`scripts/pl-manifest-refresh/\`: \`translate-inflation.js\` (368
entries — 327 per-currency × 13 currencies via templated function
using Polish noun forms (\`locName\` locative case "in X", \`nomName\`,
\`genName\`, \`noun\`, \`nounPlural\`, \`label\`, \`existence\`,
\`debtTitle\`) with informal "ty/twój" register throughout — the
natural register for Polish Bitcoin educational content; "Bitcoin"
preserved as Latin (universal in Polish crypto press), "pieniądz"
(money), "wartość" (value), "podaż" (supply), "inflacja" (inflation)
+ 41 non-currency keys including freedom cards
(Rzadki/Zdecentralizowany/Bez pozwoleń/Suwerenny), stories
(Kanada/Nigeria/Pensylwania/Teksas), sources, and 5 manifest-changed
hero/intro keys), \`translate-rest-part1.js\` (193 entries — 404 +
about + bank-runs + all 10 bitcoin-vs-* comparison pages with
German-style low-then-high typographic quotation marks „…" matching
standard Polish typography, Polish diacritics (ą, ć, ę, ł, ń, ó, ś,
ź, ż), inline \`<a class="body-link">\` HTML preserved verbatim for
Wikipedia India / gold.org links; Polish terminology — "portfel"
(wallet — native term, not anglicism), "inflacja" (inflation), "zysk
kapitałowy"/"strata kapitałowa" (capital gain/loss), "run na bank"
(bank run, semi-anglicism), "samodzielne przechowywanie"
(self-custody), "blockchain" kept as anglicism, "bezpozwoleniowy"
(permissionless — native compound), "ryzyko kontrahenta"
(counterparty risk), "rzadki/sztywny limit" (scarce/hard cap);
numeric format with comma decimal + space thousands per Polish
convention — "153,9 mld USD" / "10,82 bln USD" / "1,42%"; long scale
"miliard"/"bilion" matching Polish convention),
\`translate-rest-part2.js\` (464 entries — full business/* subtree (11
namespaces with "podstawa kosztowa" cost-basis tracking, "Akceptujemy
Bitcoina" customer-facing QR landing, Strike Business + Square +
IBEX/OpenNode/Breez/Zaprite wallet section), buy, common with
"Źródło:" / "Co dalej?", compound-inflation-calculator, flyers,
get-involved, full index homepage with all 62 home card labels (e.g.
"Porównajmy" / "Jaka jest różnica?" / "Sztuka uliczna" / "Wielki
przełom" / "Stabilizacja sieci" / "Nadzieja i szansa" / "Koniec
wiecznej wojny" / "Suwerenne pieniądze"), lightning, nostr/index,
sticker-files/index, sticker-language-success, sticker-success,
stickers, wallets), and \`fix-remaining.js\` (2 missing buy entries
— \`buy_platform_feature_self_custody\` "Self-custody wallet" →
"Portfel z samodzielną kustodią", \`buy_platform_relai_description\`
covering the Swiss Bitcoin-only app description). One untranslated
\`buy_platform_feature_p2p\` "Peer-to-peer" was patched in-place via
quick Node script to "Bezpośrednia (P2P)" so the value is
byte-distinct from English.

`;

const current = fs.readFileSync(FILE, "utf8");
fs.writeFileSync(FILE, ENTRY + current);
console.log("✓ Prepended Polish entry to memory-bank/progress.md");
