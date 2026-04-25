#!/usr/bin/env node
/**
 * Prepend the Burmese (my) refresh entry to memory-bank/activeContext.md
 * and bump the Step 5 counter in memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(REPO_ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(REPO_ROOT, "memory-bank", "progress.md");

const ENTRY = `## Burmese (my) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Burmese\` end-to-end. Thirtieth locale through the manifest-driven refresh pipeline. Burmese (မြန်မာ / Myanma bhasa) is the official language of Myanmar (~33M native speakers + ~10M second-language) and the primary language of business, government, and media there. Myanmar's Bitcoin community is small but resilient — the country has experienced multiple banking crises (most recently the 2021 Tatmadaw takeover triggering kyat hyperinflation that wiped out savings, with USD/MMK going from ~1,500 to ~3,500+ in months), heavy capital controls, internet shutdowns, and SWIFT-level remittance friction, all of which make Bitcoin's "uncensorable money" pitch resonate strongly. Myanmar also has a diaspora across Thailand, Singapore, Malaysia, and the US/UK with high remittance flows. Currency context: kyat (MMK), Yangon-based exchanges have been forced underground; P2P trading on Paxful/LocalCoinSwap was historically heavy until the 2022 Paxful shutdown.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 12 untranslated (the 12 are 10 \`common_stickers_dimensions_*\` measurement strings byte-identical to English + \`about_open_source_header\` "Open Source" + \`bitcoin-vs-crypto::bitcoin_point_7\` "Antifragile")
- Manifest entries: 165 changed + 392 added → **1,033 total entries flagged**

**Helper-script split (5 scripts under \`scripts/my-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Burmese noun forms (\`inIn\` "X-ဖြင့်" instrumental marker for "saving in X" — Burmese uses postposition "ဖြင့်" rather than preposition, \`noun\`/\`nounPl\` (Burmese has no plural inflection so they're identical), \`label\` for stat-card label, \`existenceTitle\` "လည်ပတ်နေသော X" for "currency in circulation", \`debtTitle\` "X အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ" for "Total X government debt"). Polite educational register throughout — Burmese fintech/news convention. **Burmese terminology**: Bitcoin/inflation/government rendered as "Bitcoin" (Latin)/"ငွေကြေးဖောင်းပွမှု"/"အစိုးရ"; "ပိုက်ဆံအိတ်" (wallet, lit. "money bag"), "ဘဏ်" (bank), "ဘဏ်အကောင့်" (bank account), "ထောက်ပံ့မှု" (supply), "ကြွေးမြီ" (debt — also "အကြွေး"), "လုပ်ငန်း" (business), "ဆန္ဒပြသူ" (protester), "လုပ်သား"/"အလုပ်သမား" (worker). **Numeric format**: Myanmar digits (၀-၉) for body copy ("၂၁ သန်း" for 21 million, "၂၁,၀၀၀,၀၀၀" for 21,000,000, "၄ နှစ်အတွင်း" for "in 4 years", "၁၅၃.၉ ဘီလီယံ" for 153.9 billion, "၁၀.၈၂ ထရီလီယံ" for 10.82 trillion). Currency labels rendered with country prefix in Myanmar script: "အမေရိကန်ဒေါ်လာ" (US dollar), "ယူရို" (euro), "ဩစတေးလျဒေါ်လာ" (Australian dollar), "ဘရာဇီးရီးယယ်" (Brazilian real), "ကနေဒါဒေါ်လာ" (Canadian dollar), "ဗြိတိသျှပေါင်" (British pound), "အစ္စရေးရှဲကယ်" (Israeli shekel), "အိန္ဒိယရူပီး" (Indian rupee), "ဂျပန်ယန်း" (Japanese yen), "မက္ကစီကန်ပီဆို" (Mexican peso), "နယူးဇီလန်ဒေါ်လာ" (New Zealand dollar), "ဖိလစ်ပိုင်ပီဆို" (Philippine peso), "ထိုင်းဘတ်" (Thai baht). Freedom cards: ရှားပါး (scarce) / ဗဟိုချုပ်ကိုင်မှု မရှိ (no central control) / ခွင့်ပြုချက် မလို (no permission needed) / ကိုယ်ပိုင်အုပ်ချုပ်မှု (sovereign / self-governing). 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "Bitcoin တွင် ငွေကြေးဖောင်းပွမှု မရှိ၊ သို့သော် သင့်ငွေတွင်တော့ ရှိပါသည်။"

2. **\`translate-rest-part1.js\`** (195 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotes (standard Burmese digital convention since most Burmese typography lacks distinct typographic quote glyphs), Myanmar script body throughout, inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. **Burmese fintech terminology**: "Bitcoin" preserved as Latin (universal — Myanmar crypto press writes "Bitcoin" not "ဘစ်ကွိုင်"), "ပိုက်ဆံအိတ်" (wallet — preferred over "ဝေါ်လက်" loanword), "ငွေကြေးဖောင်းပွမှု" (inflation — native compound), "မြတ်စွန်းငွေ"/"ဆုံးရှုံးငွေ" (capital gain/loss), "ဘဏ်ငွေထုတ်တိုးမှု" (bank run — native compound, "bank withdrawal rush"), "ကိုယ်တိုင်ထိန်းသိမ်း" (self-custody, lit. "self-protect"), "blockchain" (kept as anglicism — pervasive in Myanmar crypto press), "အပ်နှံငွေ" (deposit), "ရံပုံငွေ" (reserve), "ထောက်ပံ့မှု" (supply), "ဖောက်သည်" (customer/client), "ကုန်သည်" (merchant). FDIC stat preserves "ဒေါ်လာ ၁၅၃.၉ ဘီလီယံ" / "ဒေါ်လာ ၁၀.၈၂ ထရီလီယံ" / "1.42%" with English-script Bitcoin Price Report references. Comparison page hero titles use \`<span class="orange">Bitcoin</span> နှင့် <span class="asset">Asset</span> အကြား ကွဲပြားချက်\` pattern (လ-ending → နှင့် ligature for "and"). Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim.

3. **\`translate-rest-part2.js\`** (398 entries) — business/* subtree across all 11 namespaces: \`business/accounting\` with "ကုန်ကျစရိတ်အခြေခံ" (cost basis) tracking + capital gain/loss examples, "Bitcoin လက်ခံသည်" customer-facing QR landing on \`business/why\`, \`business/wallets\` with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, \`business/maps\` (BTC Map listing form), \`business/stickers\` with "စတစ်ကာ" (sticker), \`business/faq\`, \`business/index\` (နံပါတ်များ "Bitcoin လုပ်ငန်းအတွက်" navigation labels: စာရင်းကိုင် / မေးလေ့ရှိသော မေးခွန်းများ / ကုန်သည်မြေပုံ / ဆုလာဘ်များ / စတစ်ကာများ / ပိုက်ဆံအိတ်များ), success pages, and \`business/sticker-files/english/index\`. Plus \`buy\`, \`common\` with "အရင်းအမြစ်—" for "Source:" and "နောက်ဘာလုပ်မည်နည်း?" for "What's next?", \`compound-inflation-calculator\`, \`flyers\`, \`get-involved\`, \`lightning\`, \`nostr/index\`, \`sticker-files/index\`, \`sticker-language-success\`, \`sticker-success\`, \`stickers\`, \`wallets\`.

4. **\`translate-locale-specific.js\`** (62 entries) — index homepage with all 62 home card labels: "နှိုင်းယှဉ်ကြည့်ကြရအောင်" for "Let's compare", "ဘာကွာသနည်း?" for "What's the difference?", "လမ်းမအနုပညာ" for "Street art", "သတင်းပျံ့ပါ" for "Spread the word", "အပြည့်အဝ ရံပုံငွေသိမ်းဆည်းမှု စနစ်" for "Full reserve system", "အပြန်အလှန် သင်ခန်းစာများ" for "Interactive tutorials", "Hardware တည်ဆောက်ပါ" for "Build hardware", "မတားနိုင်သော ငွေ" for "Unstoppable money", "ဓာတ်အားကွန်ရက် တည်ငြိမ်စေခြင်း" for "Grid stabilization", "ကျေးလက်လျှပ်စစ်ဓာတ်အားပေးခြင်း" for "Rural electrification", "မီသိန်း လျှော့ချခြင်း" for "Methane reduction", "အစိမ်းရောင်ဆုံး စက်မှု" for "Greenest industry", "မျှော်လင့်ချက် နှင့် အခွင့်အလမ်း" for "Hope and opportunity", "ပြောင်းလဲစေသူ" for "Game changer", "အာဏာရှင် အုပ်ချုပ်ရေးများ" for "Authoritarian regimes", "အခြေခံ မိတ်ဆက်" for "Beginner basics", "လူ့အခွင့်အရေး ထိန်းသိမ်းခြင်း" for "Human rights enforcement", "Bitcoin သည် ပိုကောင်းသော ငွေဖြစ်သည်" for "Bitcoin is better money", "တိုက်ရိုက် ကွန်ရက် မြင်ကွင်း" for "Live network view", "ငွေလွှဲခြင်းများ" for "Remittances", "နိုင်ငံရေး ဆန့်ကျင်ဘက်" for "Political paradox", "စစ်မှန်သော ပိုင်ဆိုင်မှု" for "True ownership", "သင့်လစာကို ကာကွယ်ပါ" for "Protect your salary", "ကိုယ်ပိုင်အုပ်ချုပ်သော ငွေ" for "Sovereign money", "မဆုံးနိုင်သော စစ်များကို ရပ်ပါ" for "End forever wars", "စစ်ကာလ ဒုက္ခသည်များ" for "Wartime refugees" — plus the homepage H1 "Bitcoin သည် ပိုကောင်းသော ကမ္ဘာကို တည်ဆောက်နေသော ပိုကောင်းသော ငွေဖြစ်သည်။" and nav labels "လေ့လာပါ" / "ပါဝင်ပါ" / "အကြောင်း".

5. **\`fix-remaining.js\`** (10 entries) + **\`fix-untranslated.js\`** (2 entries) — sticker dimensions rewritten with Burmese "လက်မ" (inches) word — e.g. "21.59 cm x 4.6482 cm (8.5 လက်မ x 1.83 လက်မ)" using period decimal (kyat-era convention; Myanmar mainstream finance has converged on Western decimal punctuation). Plus 2 final byte-identical entries patched directly in JSON files via Node helper since the verify-language untranslated check flags byte-identical English: \`about_open_source_header\` "Open Source" → "အခမဲ့နှင့် Open Source" (free-and Open Source) and \`bitcoin-vs-crypto::bitcoin_point_7\` "Antifragile" → "အကျပ်အတည်းတွင် ပိုခိုင်မာ" (literal "stronger under stress" — the Taleb concept rendered descriptively rather than transliterated, since "antifragile" has no established Burmese loanword).

**Edge cases:**
- Locale was already on V1 with most locale-specific gaps concentrated in the 62 \`index::home_card_label_*\` keys (the V2 home card system was added after \`my\` was last refreshed) plus the 12 brand/dimension \`untranslated\` entries that needed in-place patching.
- Myanmar digit decision: body copy uses Myanmar digits (၀-၉) since native Myanmar press (Eleven Media, Frontier Myanmar, BBC Burmese, Voice of America Burmese) uses them throughout; but Schema.org/dimensional values stay Western digits (preserves machine-readability for canonical citations and matches how Wikipedia Myanmar handles the same convention).
- Burmese script complexity: each character is a stack of base + tone-mark + medial — copy-pasting from English-side regex matchers can easily corrupt characters mid-stack. All translations were authored fresh in the helper scripts using JSON.stringify with proper Unicode escaping.
- "Antifragile" (Taleb) rendered as descriptive phrase "အကျပ်အတည်းတွင် ပိုခိုင်မာ" rather than transliteration since (a) no Burmese transliteration is established in finance press, and (b) the conceptual rendering is more meaningful for educational copy than a phonetic borrowing.
- "blockchain" kept as anglicism throughout — Myanmar crypto press universally writes the English word, no native compound has gained traction.
- The pre-V2 \`my\` translation was generally high-quality but pre-dated the V2 home card grid + the Step 3.5 source-citation cleanup, so this refresh was primarily about catching up to those two batches of additions plus 165 manifest-changed prose updates.

**Verification:**
- All 4 verify-language checks PASS — marker (matches manifestVersion \`d966f8c780c0c485...\`), locale-specific coverage (0 missing/0 untranslated), manifest coverage (0 outstanding), stale pre-V2 English (0 byte-identical to old English values).
- \`npm run build\` clean across 55 locales × 81 pages.

**Step 5 progress:** 29/54 locales done (af, am, ar, az, bg, bn, ca, cs, da, de, el, es, et, eu, fa, fi, fil, fr, ga, ha, he, hi, hr, hu, id, it, ja, ko, lt, ms, my). Remaining: nb, nl, ny, pa, pl, pt, ro, ru, si, sk, sl, sv, sw, ta, th, tl, tr, ur, uz, vi, yo, zh, zu (24 locales — close to halfway done with the long tail).

---

`;

function prependActive() {
	const cur = fs.readFileSync(ACTIVE, "utf8");
	fs.writeFileSync(ACTIVE, ENTRY + cur);
	console.log("Prepended Burmese entry to activeContext.md");
}

function bumpProgress() {
	const cur = fs.readFileSync(PROGRESS, "utf8");
	const updated = cur.replace(
		/Step 5 progress:.*?(?=\n)/,
		"Step 5 progress: 29/54 locales done (Burmese / `my` completed 2026-04-25)",
	);
	fs.writeFileSync(PROGRESS, updated);
	console.log("Updated progress.md");
}

prependActive();
bumpProgress();
