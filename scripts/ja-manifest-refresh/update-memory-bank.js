#!/usr/bin/env node
/**
 * Prepend the Japanese manifest-refresh entry to memory-bank/activeContext.md
 * and bump the Step 5 counter in memory-bank/progress.md (25 → 26 locales).
 *
 * Idempotent: detects whether the Japanese block is already present.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const repo = path.resolve(__dirname, "..", "..");
const ctxPath = path.join(repo, "memory-bank", "activeContext.md");
const progPath = path.join(repo, "memory-bank", "progress.md");

const HEADER = "## Japanese (ja) manifest refresh — April 25, 2026";

const BLOCK = `${HEADER}

Ran \`/translate-manifest-refresh Japanese\` end-to-end. Twenty-sixth locale through the manifest-driven refresh pipeline. Japanese is the official language of Japan with ~125M native speakers — a Tier-1 global Bitcoin/finance audience: Japan was historically one of the largest Bitcoin trading markets (Mt. Gox era), the Financial Services Agency (FSA) established one of the earliest national crypto-asset regulatory frameworks in 2017 (Payment Services Act recognizing virtual currencies as legal property), the country has the highest household savings ratio among G7 economies (~$10T in JPY-denominated savings vulnerable to BoJ yield-curve-control / debasement), and JPY has weakened ~30% against USD since 2022 making Bitcoin-as-savings messaging especially salient. Japan also runs one of the largest national debts as a percentage of GDP (>250%) — making the "your debt-issuing government will print more" narrative resonate strongly.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 0 untranslated
- Manifest entries: 165 changed + 392 added → **1,021 total entries flagged**

**Helper-script split (4 scripts under \`scripts/ja-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Japanese noun forms (\`noun\`, \`label\`, \`country\`, \`existenceTitle\`, \`debtTitle\`) — Japanese has no plural inflection and no grammatical gender, so the templating is simpler than Romance/Slavic languages. Currency names use katakana with country prefix where ambiguous (米ドル USD, 豪ドル AUD, カナダドル CAD, 英ポンド GBP, ブラジルレアル BRL, ニュージーランドドル NZD, メキシコペソ MXN, フィリピンペソ PHP, タイバーツ THB, インドルピー INR, イスラエルシェケル ILS) — the standard convention in Japanese financial press (Bloomberg JP, Reuters JP, Nikkei). 円 (en, JPY) standalone (no 日本 prefix domestically). Polite educational register です/ます throughout — the natural register for Japanese fintech/educational copy (BTC日本語ブログ, Coin Telegraph Japan, BitBank academy). Freedom cards: 希少 (scarce) / 分散型 (decentralized) / 許可不要 (permissionless) / 主権 (sovereign). 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "ビットコインにはインフレがありませんが、あなたのお金にはあります。"

2. **\`translate-rest-part1.js\`** (193 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with mixed punctuation: full-width brackets （） and corner brackets 「」 used where natural in body prose, while inline brand names / code / English HTML attributes preserve straight ASCII (the dominant convention on Japanese tech sites). Mixed kanji + hiragana + katakana script. Inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links. Japanese Bitcoin/finance terminology — "ビットコイン" (Bitcoin transliterated for body copy; "Bitcoin" preserved as Latin in brand contexts and Schema.org), "ウォレット" (wallet — universal in Japanese crypto press, native 財布 reads as physical/colloquial), "インフレ" (inflation — short form preferred over インフレーション), "キャピタルゲイン"/"キャピタルロス" (capital gain/loss — direct loanwords used by Japanese tax authority for crypto), "取り付け騒ぎ" (bank run — native kanji+kana phrase), "自己管理" (self-custody — native compound), "ブロックチェーン" (blockchain), "暗号資産" (crypto-asset — the FSA's official term replacing 仮想通貨), "ハードウェアウォレット" (hardware wallet). Numbers use comma thousands separators on Western-style values — "153.9 億ドル" / "10.82 兆ドル" / "1.42%" — and 万 (10K) / 億 (100M) / 兆 (1T) on Japanese-native scale. "2,100万" used for 21M BTC supply cap (matches Japanese 万-based number grouping convention).

3. **\`translate-rest-part2.js\`** (290 entries) — \`common\` with "出典：" for "Source:" + "次は？" for "What's next?" + "言語を追加" for "Add language". \`index\` homepage with all 56 home card labels like "比較してみよう" (volitional "let's compare") for "Let's compare", "違いは何か？" for "What's the difference?", "ストリート・アート" for "Street art", "ゲームチェンジャー" for "The great equalizer", "電力網の安定化" for "Grid stabilization", "希望と機会" for "Hope and opportunity", "政治のパラドックス" for "Political paradox", "終わりなき戦争を終わらせる" for "End forever wars", "希少さ" not used (used "希少" for scarcity card without trailing nominalizer). \`get-involved\`, \`nostr/index\` (zap, NIP-05, relay, kind 1 events all kept as Latin/transliteration), \`flyers\`, \`wallets\`, \`lightning\`, \`buy\` ("ビットコインの買い方"), \`compound-inflation-calculator\`, \`stickers\`, \`sticker-success\`, \`sticker-language-success\`, \`sticker-files/index\`. Sticker product names kept in English with corner-bracket 「」 wrapping (e.g. 「Cure Inflation」ビットコイン・ステッカー) — this matches how Japanese e-commerce sites typically render English product titles.

4. **\`translate-rest-part3.js\`** (170 entries) — business/* subtree across all 11 namespaces: \`business/accounting\` with "取得原価" (acquisition cost / cost basis) tracking + キャピタルゲイン/キャピタルロス examples following NTA (国税庁) terminology, "ビットコインがここで使えます" customer-facing QR landing on \`business/why\`, \`business/wallets\` with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, \`business/maps\` (BTC Map listing form), \`business/stickers\`, \`business/faq\`, \`business/index\` ("ビジネス向けビットコイン" navigation labels: 会計 / よくある質問 / 加盟店マップ / 報酬 / ステッカー / ウォレット), success pages, and \`business/sticker-files/english/index\` with 「ビットコインで支払えます」 wrapping for the Japanese-language reference to the English sticker name.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages.

**Edge cases:**
- Japanese has no plurals — currency labels and counters work the same for singular and plural references. Templated function omits the \`nounPl\` field that Romance/Slavic languages need.
- Japanese is mixed-script: body prose uses kanji+hiragana+katakana, but Bitcoin and tech brand names tend to keep Latin script in brand-prominent contexts (footers, hero titles, Schema.org). Used "ビットコイン" for educational body copy and "Bitcoin" only where Schema.org / brand prominence demanded it.
- The 万 (10K) / 億 (100M) / 兆 (1T) Japanese number scale was preserved for native readability ("2,100万" for 21M, "10.82 兆ドル" for $10.82T) while Western thousands separators were retained for FRED-style raw figures (matches Japanese financial press conventions).
- 取り付け騒ぎ for "bank run" was preferred over the loan phrase バンクラン — the native kanji+kana compound is universally understood and feels less corporate.
- "MNBC" / "CBDC" stayed as Latin acronyms (matches BoJ + FSA usage); Japanese press uses 中央銀行デジタル通貨 as the spelled-out gloss but defaults to CBDC in body copy.
- Sticker product names use Japanese 「…」 corner brackets to wrap English titles — this is the conventional way Japanese e-commerce sites visually distinguish English product names from surrounding Japanese prose.

**Files committed:**

`;

function maybePrependCtx() {
	const cur = fs.readFileSync(ctxPath, "utf8");
	if (cur.includes(HEADER)) {
		console.log("activeContext.md already has the Japanese block — skipping.");
		return false;
	}
	fs.writeFileSync(ctxPath, BLOCK + cur);
	console.log("Prepended Japanese block to activeContext.md");
	return true;
}

const PROG_HEADER = "## i18n cleanup Step 5 — Japanese (ja) — 2026-04-25";

const PROG_BLOCK = `${PROG_HEADER}

**Counter:** 26/54 languages complete. Twenty-sixth manifest-driven refresh — first East Asian language (CJK script). Japanese is spoken by ~125M people in Japan, with substantial diaspora in Brazil, the US, Hawaii, and the Philippines. Japan is a Tier-1 global Bitcoin/finance audience: it was historically one of the largest Bitcoin trading markets (Mt. Gox era), the FSA established one of the earliest national crypto-asset regulatory frameworks (2017 Payment Services Act recognizing virtual currencies as legal property), the country has the highest household savings ratio among G7 economies (~$10T in JPY-denominated savings vulnerable to BoJ yield-curve-control / debasement), JPY has weakened ~30% against USD since 2022 making Bitcoin-as-savings messaging especially salient, and Japan runs national debt >250% of GDP — making the "your debt-issuing government will print more" narrative resonate strongly. 1,021 entries resolved (464 missing + 0 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/ja-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Japanese noun forms (\`noun\`, \`label\`, \`country\`, \`existenceTitle\`, \`debtTitle\`); Japanese has no plural inflection and no grammatical gender, so the templating is simpler than Romance/Slavic languages; currency names use katakana with country prefix where ambiguous (米ドル USD, 豪ドル AUD, カナダドル CAD, 英ポンド GBP, ブラジルレアル BRL, ニュージーランドドル NZD, メキシコペソ MXN, フィリピンペソ PHP, タイバーツ THB, インドルピー INR, イスラエルシェケル ILS), 円 standalone for JPY; polite educational register です/ます throughout — the natural register for Japanese fintech/educational copy; freedom cards 希少 / 分散型 / 許可不要 / 主権; 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "ビットコインにはインフレがありませんが、あなたのお金にはあります。"), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with mixed punctuation: full-width brackets （） and corner brackets 「」 used where natural in body prose, while inline brand names / code preserve straight ASCII (the dominant convention on Japanese tech sites); mixed kanji + hiragana + katakana script; inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India + gold.org links; "ビットコイン" (body) / "Bitcoin" (Schema.org), "ウォレット" (wallet), "インフレ" (inflation), "キャピタルゲイン"/"キャピタルロス" (capital gain/loss — NTA terminology), "取り付け騒ぎ" (bank run — native compound), "自己管理" (self-custody — native compound), "ブロックチェーン" (blockchain), "暗号資産" (FSA's official replacement for 仮想通貨); numbers use comma thousands separators on Western values, 万 (10K)/億 (100M)/兆 (1T) on native scale — "2,100万" for 21M BTC, "10.82 兆ドル" for $10.82T), \`translate-rest-part2.js\` (290 entries — common with "出典：" for "Source:" + "次は？" for "What's next?" + "言語を追加" for "Add language", index homepage with all 56 home card labels like "比較してみよう" (volitional) for "Let's compare", "違いは何か？" for "What's the difference?", "ストリート・アート" for "Street art", "ゲームチェンジャー" for "The great equalizer", "電力網の安定化" for "Grid stabilization", "希望と機会" for "Hope and opportunity", "政治のパラドックス" for "Political paradox", "終わりなき戦争を終わらせる" for "End forever wars"; get-involved, nostr/index, flyers, wallets, lightning, buy ("ビットコインの買い方"), compound-inflation-calculator, stickers with English product names wrapped in 「」 corner brackets per Japanese e-commerce convention, sticker-success, sticker-language-success, sticker-files/index), and \`translate-rest-part3.js\` (170 entries — business/* subtree across all 11 namespaces: business/accounting with "取得原価" (acquisition cost / cost basis) tracking + キャピタルゲイン/キャピタルロス examples following NTA terminology; "ビットコインがここで使えます" customer-facing QR landing on business/why; business/wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite; business/maps BTC Map listing form; business/stickers; business/faq; business/index navigation labels (会計 / よくある質問 / 加盟店マップ / 報酬 / ステッカー / ウォレット); success pages; and business/sticker-files/english/index with 「ビットコインで支払えます」 wrapping for the Japanese-language reference to the English sticker name). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/ja.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). \`npm run build\` clean across 55 locales × 81 pages.

`;

function maybePrependProgress() {
	const cur = fs.readFileSync(progPath, "utf8");
	if (cur.includes(PROG_HEADER)) {
		console.log("progress.md already has the Japanese block — skipping.");
		return false;
	}
	fs.writeFileSync(progPath, PROG_BLOCK + cur);
	console.log("Prepended Japanese block to progress.md");
	return true;
}


function main() {
	maybePrependCtx();
	maybePrependProgress();
}

main();
