#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — prepend a session entry to
 * memory-bank/activeContext.md and bump the Step 5 counter in
 * memory-bank/progress.md.
 *
 * Idempotent — checks for an existing "Korean (ko)" header before
 * prepending.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ACTIVE = path.resolve(
	__dirname,
	"..",
	"..",
	"memory-bank",
	"activeContext.md",
);
const PROGRESS = path.resolve(
	__dirname,
	"..",
	"..",
	"memory-bank",
	"progress.md",
);

const KO_ENTRY = `## Korean (ko) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Korean\` end-to-end. Twenty-seventh locale through the manifest-driven refresh pipeline. Korean is the official language of South Korea (~52M native speakers) and a notable Bitcoin/finance audience: South Korea is consistently among the top 5 countries by Bitcoin trading volume, was the source of the original "kimchi premium" phenomenon (KRW-denominated Bitcoin trading at 5–20% premium over USD markets in 2017–2018), and has one of the most retail-active crypto investor bases globally. The Financial Services Commission (FSC) regulates virtual assets under the Specified Financial Information Act. KRW has weakened against USD over the past decade and Korean households increasingly view BTC as an inflation/currency-debasement hedge.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged**

**Helper-script split (5 scripts under \`scripts/ko-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Korean noun forms (\`noun\`, \`label\`, \`country\`, \`existenceTitle\`, \`debtTitle\`) — Korean has no plural inflection and no grammatical gender, so the templating is simple. Currency names rendered with country prefix in Hangul (미국 달러 USD, 유로 EUR, 호주 달러 AUD, 브라질 헤알 BRL, 캐나다 달러 CAD, 영국 파운드 GBP, 이스라엘 셰켈 ILS, 인도 루피 INR, 일본 엔 JPY, 멕시코 페소 MXN, 뉴질랜드 달러 NZD, 필리핀 페소 PHP, 태국 바트 THB) — the standard convention in Korean financial press (Yonhap, Maeil Business, Coindesk Korea). Polite formal register (-습니다/-입니다) throughout — the natural register for Korean fintech educational copy. Freedom cards: 희소성 (scarcity) / 탈중앙화 (decentralization) / 무허가성 (permissionless / permissionlessness) / 주권 (sovereignty). 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "비트코인에는 인플레이션이 없지만, 당신의 돈에는 있습니다." Numerals use 만-grouping like "2,100만" for 21 million matching Korean number system convention.

2. **\`translate-rest-part1.js\`** (193 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with smart curly quotes "…" for inline emphasis where natural, Hangul script (no diacritics needed), inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links. Korean Bitcoin/finance terminology — "비트코인" (Bitcoin Hangul transliteration, standard in Korean crypto press; "Bitcoin" preserved as Latin in brand contexts), "지갑" (wallet — universal native term), "인플레이션" (inflation — Hangul transliteration of English term, used by Bank of Korea), "양도소득"/"양도손실" (capital gain/loss — Korean tax-code terminology), "뱅크런" (bank run — Hangul transliteration; widely used loanword), "자기 보관" (self-custody — native compound), "블록체인" (blockchain — Hangul anglicism), "암호화폐" (cryptocurrency — Korean compound). Numbers use comma thousands separators on Western-style large numbers and 억 (100M) / 조 (1T) on Korean-native scale where natural — e.g. "1,539억 달러" / "10조 8,200억 달러" / "1.42%".

3. **\`translate-rest-part2.js\`** (300 entries) — \`common\` with "출처:" for "Source:" + "다음은?" for "What's next?" + "언어 추가" for "Add language". \`index\` homepage with all 56 home card labels like "비교해 봅시다" (volitional "let's compare") for "Let's compare", "차이점은 무엇인가?" for "What's the difference?", "스트리트 아트" for "Street art", "게임 체인저" for "The great equalizer", "전력망 안정화" for "Grid stabilization", "희망과 기회" for "Hope and opportunity", "정치적 역설" for "Political paradox", "끝없는 전쟁을 끝내자" for "End forever wars". \`get-involved\`, \`nostr/index\` (zap, NIP-05, relay all kept as Latin/transliteration), \`flyers\`, \`wallets\`, \`lightning\`, \`buy\` ("비트코인 구매 방법"), \`compound-inflation-calculator\`, \`stickers\`, \`sticker-success\`, \`sticker-language-success\`, \`sticker-files/index\`. Sticker product names kept in English with curly-quote wrapping (e.g. "Cure Inflation" 비트코인 스티커) — this matches how Korean e-commerce sites typically render English product titles.

4. **\`translate-rest-part3.js\`** (170 entries) — business/* subtree across all 11 namespaces: \`business/accounting\` with "취득 원가" (acquisition cost / cost basis) tracking + 양도소득/양도손실 examples following NTS (국세청) terminology, "여기서 비트코인이 사용 가능합니다" customer-facing QR landing on \`business/why\`, \`business/wallets\` with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, \`business/maps\` (BTC Map listing form), \`business/stickers\`, \`business/faq\`, \`business/index\` ("비즈니스를 위한 비트코인" navigation labels: 회계 / 자주 묻는 질문 / 가맹점 지도 / 리워드 / 스티커 / 지갑), success pages, and \`business/sticker-files/english/index\` with curly-quote wrapping for the Korean-language reference to the English sticker name. Also includes the lone \`bitcoin-vs-bonds::point_2_summary_1\` manifest-changed entry which was reduced to an empty fragment in the V2 rewrite (just "When").

5. **\`fix-dimensions.js\`** (10 sticker-dimension entries) — the V2 \`common_stickers_dimensions_*\` measurements were initially set byte-identical to English ("21.59 cm x 4.6482 cm (8.5 in x 1.83 in)"). Korean convention prefers 인치 (inch) over the English "in" abbreviation, so each dimension was rewritten as e.g. "21.59cm × 4.6482cm (8.5인치 × 1.83인치)" — using Hangul 인치 instead of "in", × (U+00D7) instead of "x", and removing spaces around cm to match modern Korean digital typography. The \`@metadata.last-updated\` was bumped to today's date.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages.

**Edge cases:**
- Korean has no plurals — currency labels and counters work the same for singular and plural references. Templated function omits the \`nounPl\` field that Romance/Slavic languages need.
- Korean Bitcoin community uses both 비트코인 (Hangul transliteration) and "Bitcoin" (Latin) — opted for 비트코인 in body educational copy and "Bitcoin" only where Schema.org / brand prominence demanded it.
- 억 (100M) / 조 (1T) Korean number scale was preserved for native readability ("10조 8,200억 달러" for $10.82T) while Western thousands separators were retained for FRED-style raw figures (matches Korean financial press conventions like Yonhap, Maeil Business).
- 뱅크런 for "bank run" — the Hangul-transliterated loanword is universally understood in Korean financial press; the native compound 인출 사태 felt too clinical for educational copy.
- "CBDC" stayed as Latin acronym (matches BoK + FSC usage); Korean press uses 중앙은행 디지털 화폐 as the spelled-out gloss but defaults to CBDC in body copy.
- The dimensions byte-identical issue (10 \`common_stickers_dimensions_*\` keys) was resolved by translating "in" → "인치" — these don't appear on the Korean sticker-files page (English text only there), but the CMS rendering needed Korean-distinct values to pass verify-language's untranslated check.

**Files committed:**
- \`i18n/ko/**/*.json\` — 38 files updated (1,031 keys written)
- \`scripts/ko-manifest-refresh/translate-inflation.js\` (5 helper scripts total)
- \`scripts/ko-manifest-refresh/translate-rest-part1.js\`
- \`scripts/ko-manifest-refresh/translate-rest-part2.js\`
- \`scripts/ko-manifest-refresh/translate-rest-part3.js\`
- \`scripts/ko-manifest-refresh/fix-dimensions.js\`
- \`scripts/ko-manifest-refresh/update-memory-bank.js\` (this script)
- \`scripts/i18n-audit/v2-refresh-status/ko.json\` (marker pinned to current manifestVersion)
- \`scripts/i18n-audit/reports/applied/ko-20260425-134749.json\` (archived report)
- \`V2-REDESIGN-CHECKLIST.md\` (Korean ticked off; Step 5 counter 26 → 27)
- \`memory-bank/activeContext.md\` (this entry)
- \`memory-bank/progress.md\` (Step 5 counter bumped)

`;

function prepend(file, marker, body) {
	const current = fs.readFileSync(file, "utf8");
	if (current.includes(marker)) {
		console.log(`${path.basename(file)}: marker already present, skipping prepend`);
		return false;
	}
	fs.writeFileSync(file, body + current);
	console.log(`${path.basename(file)}: prepended Korean entry`);
	return true;
}

const KO_PROGRESS_ENTRY = `## i18n cleanup Step 5 — Korean (ko) — 2026-04-25

**Counter:** 27/54 languages complete. Twenty-seventh manifest-driven refresh — second East Asian language (after Japanese; both use CJK character sets but Korean is genealogically isolate using Hangul script). Korean is the official language of South Korea (~52M native speakers) plus an additional ~25M speakers in North Korea and ~7M in the global diaspora (US, China, Japan, Central Asia). South Korea is consistently among the top 5 countries by Bitcoin trading volume globally, was the source of the original "kimchi premium" phenomenon (KRW-denominated Bitcoin trading at 5–20% premium over USD markets in 2017–2018), has one of the most retail-active crypto investor bases worldwide, and the Financial Services Commission (FSC) regulates virtual assets under the Specified Financial Information Act. KRW has weakened against USD over the past decade and Korean households increasingly view BTC as an inflation/currency-debasement hedge. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in \`scripts/ko-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Korean noun forms (\`noun\`, \`label\`, \`country\`, \`existenceTitle\`, \`debtTitle\`); Korean has no plural inflection and no grammatical gender, so the templating is simple; currency names rendered with country prefix in Hangul (미국 달러 USD, 유로 EUR, 호주 달러 AUD, 브라질 헤알 BRL, 캐나다 달러 CAD, 영국 파운드 GBP, 이스라엘 셰켈 ILS, 인도 루피 INR, 일본 엔 JPY, 멕시코 페소 MXN, 뉴질랜드 달러 NZD, 필리핀 페소 PHP, 태국 바트 THB) — the standard convention in Korean financial press (Yonhap, Maeil Business, Coindesk Korea); polite formal register (-습니다/-입니다) throughout — the natural register for Korean fintech educational copy; freedom cards 희소성 (scarcity) / 탈중앙화 (decentralization) / 무허가성 (permissionless) / 주권 (sovereignty); 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "비트코인에는 인플레이션이 없지만, 당신의 돈에는 있습니다."; numerals use 만-grouping like "2,100만" for 21 million matching Korean number system convention), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with smart curly quotes "…" for inline emphasis where natural, Hangul script (no diacritics needed), inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India + gold.org links; "비트코인" (body) / "Bitcoin" (Schema.org), "지갑" (wallet), "인플레이션" (inflation — Bank of Korea usage), "양도소득"/"양도손실" (capital gain/loss — NTS terminology), "뱅크런" (bank run — Hangul transliteration loanword, universal in Korean financial press), "자기 보관" (self-custody — native compound), "블록체인" (blockchain), "암호화폐" (cryptocurrency); numbers use comma thousands separators on Western-style large numbers and 억 (100M) / 조 (1T) on Korean-native scale where natural — e.g. "1,539억 달러" / "10조 8,200억 달러" / "1.42%"), \`translate-rest-part2.js\` (300 entries — common with "출처:" for "Source:" + "다음은?" for "What's next?" + "언어 추가" for "Add language", index homepage with all 56 home card labels like "비교해 봅시다" (volitional "let's compare") for "Let's compare", "차이점은 무엇인가?" for "What's the difference?", "스트리트 아트" for "Street art", "게임 체인저" for "The great equalizer", "전력망 안정화" for "Grid stabilization", "희망과 기회" for "Hope and opportunity", "정치적 역설" for "Political paradox", "끝없는 전쟁을 끝내자" for "End forever wars"; get-involved, nostr/index, flyers, wallets, lightning, buy ("비트코인 구매 방법"), compound-inflation-calculator, stickers with English product names wrapped in curly quotes per Korean e-commerce convention, sticker-success, sticker-language-success, sticker-files/index), \`translate-rest-part3.js\` (170 entries — business/* subtree across all 11 namespaces: business/accounting with "취득 원가" (acquisition cost / cost basis) tracking + 양도소득/양도손실 examples following NTS (국세청) terminology; "여기서 비트코인이 사용 가능합니다" customer-facing QR landing on business/why; business/wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite; business/maps BTC Map listing form; business/stickers; business/faq; business/index navigation labels (회계 / 자주 묻는 질문 / 가맹점 지도 / 리워드 / 스티커 / 지갑); success pages; and business/sticker-files/english/index with curly-quote wrapping for the Korean-language reference to the English sticker name; also includes the lone bitcoin-vs-bonds::point_2_summary_1 manifest-changed entry which was reduced to an empty fragment in the V2 rewrite), and \`fix-dimensions.js\` (10 sticker-dimension byte-identical fixes — V2 \`common_stickers_dimensions_*\` measurements were initially set byte-identical to English "21.59 cm x 4.6482 cm (8.5 in x 1.83 in)"; Korean convention prefers 인치 (inch) over the English "in" abbreviation, so each was rewritten as e.g. "21.59cm × 4.6482cm (8.5인치 × 1.83인치)" using Hangul 인치 instead of "in", × (U+00D7) instead of "x", and removing spaces around cm to match modern Korean digital typography). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/ko.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). \`npm run build\` clean across 55 locales × 81 pages.

`;

prepend(ACTIVE, "## Korean (ko) manifest refresh — April 25, 2026", KO_ENTRY);
prepend(PROGRESS, "## i18n cleanup Step 5 — Korean (ko) — 2026-04-25", KO_PROGRESS_ENTRY);

