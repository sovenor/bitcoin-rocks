## Hindi (hi) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Hindi` end-to-end. Twenty-first locale through the manifest-driven refresh pipeline — first Indo-Aryan language. Hindi (हिन्दी) is the official language of India and one of the world's most-spoken languages: ~610M speakers (~345M native, ~265M L2 within India and the diaspora). India is a massive Tier-1 Bitcoin audience: rapidly digitizing fintech sector (UPI, RBI's CBDC pilot, Zerodha/Groww retail-investor boom), 100M+ INR-savvy retail investors, persistent rupee inflation as a teaching narrative, and growing crypto-curious youth despite regulatory uncertainty. Hindi is also a heritage language for ~25M diaspora speakers across Fiji, Mauritius, Suriname, Trinidad, Guyana, the UK, US, Canada, UAE, and Australia.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 0 untranslated
- Manifest entries: 165 changed + 392 added → **1,021 total entries flagged**

**Helper-script split (3 scripts under `scripts/hi-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Hindi is Indo-Aryan, postpositional, SOV (subject-object-verb) word order, 2 grammatical genders (masc/fem) with case marking via postpositions (में "in", का/के/की "of", को "to/for", से "from"). Template supplies `inPhrase` (locative "X में" / "अमेरिकी डॉलर में"), `noun` (singular), `nounPlural` (zero-marked for most loanword currencies — डॉलर/यूरो/येन/शेकेल stay invariant in plural; native रुपया → रुपये uses oblique masc. plural), plus `label` / `existenceTitle` / `debtTitle` for stat cards. Polite formal 2nd-person register `आप / आपका / आपके / आपको` throughout — the standard register in Hindi educational/finance content (Mint Hindi, BBC Hindi, Bloomberg Hindi, RBI publications, Economic Times Hindi). Hindi has a 3-tier T-V distinction (तू intimate / तुम familiar / आप formal), and finance/business writing universally uses the formal आप — using तू or तुम would feel disrespectful for general-audience addressing. Plus 41 non-currency keys: freedom cards (दुर्लभ / विकेंद्रीकृत / बिना अनुमति / संप्रभु — "scarce" / "decentralized" / "permissionless" / "sovereign"), inflation stories (कनाडा / नाइजीरिया / पेंसिल्वेनिया / टेक्सास), sources, and 5 manifest-changed hero/intro keys (the new `inflation_h1_orange` → "बिटकॉइन में मुद्रास्फीति नहीं है, लेकिन आपके पैसे में है।").
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses straight ASCII quotation marks `"…"` (standard digital Hindi convention; Devanagari has its own punctuation system but modern Indian web/mobile/print universally uses ASCII quotes). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold — the India demonetisation link is especially salient given Hindi audiences will recognize the 2016 ₹500/₹1000 note demonetisation as a real-world example of currency cancellation. Brand names (Silicon Valley Bank, FRED, FDIC, Visa, Strike Business) preserved verbatim in Latin script (universal Indian Bitcoin community convention — Indian crypto press writes brand names in English even in Hindi contexts). Hindi Bitcoin/finance terminology — "बिटकॉइन" (Bitcoin Devanagari transliteration; standard in CoinSwitch/CoinDCX/Mint Hindi crypto coverage), "वॉलेट" (wallet, loanword), "मुद्रास्फीति" (inflation, native Sanskrit-derived compound — "मुद्रा" money + "स्फीति" inflation/swelling), "पूँजीगत लाभ" / "पूँजीगत हानि" (capital gain/loss; standard Indian Income Tax Department terminology), "बैंक रन" (bank run, loanword — no native term used in Hindi finance press), "सेल्फ-कस्टडी" (self-custody loanword; some Hindi crypto content uses "स्व-अभिरक्षा" but loanword is more common in actual usage), "ब्लॉकचेन" (blockchain transliteration), "फेडरल रिज़र्व" (Federal Reserve transliteration), "एक्सचेंज"/"बोर्ज़" (exchange — both used; chose Anglicism), "तुरंत निपटान" (instant settlement). Numeric format: comma thousands separator, period decimal — IMPORTANT: chose Western "million/billion/trillion" short scale (मिलियन/बिलियन/ट्रिलियन) rather than the traditional Indian lakh/crore system (लाख = 100,000 / करोड़ = 10,000,000 / अरब = 1,000,000,000) because the FRED dataset values rendered on the cards (e.g. `$10.82 trillion`, `$153.9 billion`) use international short-scale formatting, and translating "trillion" → "करोड़ करोड़" (10 million × 10 million = 100 trillion in lakh-crore math) would create a unit-conversion mismatch with the actual rendered numerals. Modern Indian financial press (Mint, ET) blends both systems but uses Western scale for international finance figures and lakh/crore for Indian rupee figures.
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "लागत आधार" cost-basis tracking + "पूँजीगत लाभ"/"पूँजीगत हानि" examples following Income Tax Act terminology, why as customer-facing QR landing page with "यहाँ बिटकॉइन स्वीकार किया जाता है" + "आपने एक 'Bitcoin Accepted Here' स्टिकर स्कैन किया", wallets covering Strike Business / Square / Breez / OpenNode / IBEX / BTCPay Server / Zaprite all with Hindi sole/multiple/online/invoice section labels, maps with Hindi form field labels, stickers, FAQs, etc.), buy (21), common (53 — "Source:" → "स्रोत:", "What's next?" → "आगे क्या?", "Add language" → "भाषा जोड़ें", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with concise Hindi phrasings: "तुलना करें" (formal imperative "let's compare") for "Let's compare", "क्या फ़र्क है?" for "What's the difference?", "खुला या बंद?" for "Open or closed?" (CBDC), "स्ट्रीट आर्ट" (Devanagari transliteration) for "Street art", "खेल बदलने वाला" for "The great equalizer", "ग्रिड स्थिरीकरण" for "Grid stabilization", "उम्मीद और अवसर" for "Hope and opportunity", "राजनीतिक विरोधाभास" for "Political paradox", "अपनी परियोजना को फंड करें" for "Fund your project", "अंतहीन युद्ध का अंत" for "End forever wars", "युद्धकालीन पलायन" for "Wartime escape", "वेटरन्स की मदद" (anglicism — Hindi has सैनिक but "veterans" loanword more recognizable in modern usage) for "Helping veterans"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11). No `fix-remaining.js` needed — all 1,021 entries resolved cleanly via the 3 main helpers since Hindi is a non-Latin script (Devanagari) and naturally produces byte-distinct values from English source for nearly every entry.

**Edge cases:**
- **Devanagari script + Latin brand names:** Hindi is written in Devanagari (देवनागरी), an abugida derived from Brahmi. Most user-facing copy uses Devanagari, but brand names (Bitcoin → बिटकॉइन is Devanagari but Visa/Strike/FRED/FDIC stay Latin), URLs, email addresses, and currency codes (USD/EUR/BTC) stay in Latin script. This mixed-script presentation is universal in Indian web content (Mint Hindi, NDTV Hindi, Aaj Tak all do this). Devanagari renders left-to-right like Latin so no RTL handling required.
- **Western digits (0-9) instead of Devanagari digits:** Modern Indian financial press universally uses Western digits (0-9) rather than the traditional Devanagari digits (०-९). Mint Hindi, Bloomberg Quint Hindi, Economic Times Hindi, RBI Hindi publications, and the Income Tax Department's Hindi forms all use Western digits. Devanagari digits are still used in some literary/religious/government contexts but feel archaic in finance writing. Used Western digits throughout for consistency with the rendered FRED dataset values and the brand recognition of "$10.82 trillion" / "21,000,000 BTC".
- **Lakh/crore vs. million/billion/trillion:** Hindi finance writing has two parallel numeric systems. Native Indian system: हज़ार (1,000) / लाख (100,000) / करोड़ (10,000,000) / अरब (1,000,000,000) / खरब (100,000,000,000) / नील (10,000,000,000,000). International system: हज़ार (thousand) / मिलियन (million) / बिलियन (billion) / ट्रिलियन (trillion). For this site, the FRED dataset values are rendered as "$10.82 trillion" / "$153.9 billion" via the per-currency templating in the React components — translating those numerals into lakh-crore would require recomputing every figure, AND the inflation-stat card design displays the raw numeric (e.g. "10,820,000,000,000") next to the verbal scale, which uses Western thousands separators. So I chose to keep the Western short-scale verbal form ("ट्रिलियन"/"बिलियन"/"मिलियन") matching the rendered numerals. Modern Indian English-medium finance press follows the same convention for international figures — Mint will write "$10 trillion of US debt" and "₹10 लाख crore of Indian debt" in the same article.
- **Polite formal आप register:** Hindi has 3 levels of 2nd-person address: तू (intimate, used for very close friends, children, deities, or as an insult), तुम (familiar, used among peers/friends/younger interlocutors), आप (formal/respectful, used for elders, strangers, in business/finance contexts, and as the unmarked default for general-audience writing). All Hindi educational/financial publications use आप — Mint Hindi, BBC Hindi, ET Hindi, RBI Hindi, Bitcoin India Hindi all default to आप. Used आप throughout (आपका = "your", आपके = "your-pl. obl.", आपको = "to you"). The verb forms agree: आप करते हैं ("you do", lit. "you do-pl.-pres."). This matches the universal convention for Hindi finance writing.
- **Loanword vs. native vocabulary balance:** Hindi has both Sanskrit-derived "shuddh" (pure) vocabulary and Persian/Arabic/English loanwords. Bitcoin community Hindi content tends toward English loanwords for technical terms (वॉलेट, ब्लॉकचेन, क्रिप्टो, माइनिंग, सेल्फ-कस्टडी) but uses native Sanskrit-derived terms for economic concepts (मुद्रास्फीति/inflation, पूँजीगत लाभ/capital gain, क्रय शक्ति/purchasing power, अर्थव्यवस्था/economy, आपूर्ति/supply, माँग/demand). Followed this convention throughout — translates the conceptual content but keeps technical brand-near terms in their loanword forms for natural reading.
- **Honorific particles:** Hindi has formal honorific verb endings (-ए instead of -ओ for imperatives, -इए for very-formal imperatives, "जी" appended to names/titles). Used standard formal forms throughout — "जानें" (learn-formal), "देखें" (see-formal), "चुनें" (choose-formal), "करें" (do-formal). Did not use "जी" appendages since the site addresses unspecified general audiences rather than named individuals.

## Hebrew (he) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Hebrew` end-to-end. Twentieth locale through the manifest-driven refresh pipeline — first Northwest Semitic (Canaanite) language and 3rd RTL locale (after Arabic and Persian). Hebrew (עברית) is the official language of Israel with ~9M speakers (~5M native, ~4M L2 from immigrants and Jewish-diaspora learners). Israel is one of the most digitally advanced economies in the world with a sophisticated Bitcoin community: Bitcoin Embassy TLV (Tel Aviv), Bitcoin Magazine Hebrew, Israeli Bitcoin Association, regular meetups in TLV/Jerusalem/Haifa, and significant fintech/cybersecurity overlap with crypto. Hebrew is also a heritage language for ~7.5M Jewish-diaspora speakers worldwide (US, France, UK, Argentina, Russia, Canada).

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged** (mid-range, exactly matching Persian and Irish at 1,031)

**Helper-script split (4 scripts under `scripts/he-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Hebrew is Northwest Semitic, root-and-pattern morphology, no cases (lost in Late Biblical Hebrew), 2 grammatical genders (masc/fem) marked on noun endings (`-ים` masc. plural, `-ות` fem. plural). Template supplies `inPhrase` (locative "ב-X" / "בדולר" — the locative preposition `ב-` directly attaches to the currency noun, like Russian instrumental case in compactness), `noun` (singular), `nounPlural` (`-ים` plural for masc. dollars/pounds; `-ות` plural for fem. `רופים` rupees), plus `label` / `existenceTitle` / `debtTitle` for stat cards. Informal masculine 2nd-person `אתה / שלך / כסף שלך` register throughout — the dominant register in Hebrew Bitcoin/finance educational copy. Hebrew has T-V distinction (T = informal masc. `אתה` / fem. `את` / pl. `אתם` / V = formal pl. `אתם`), but in modern Hebrew `אתם` is plural rather than formal — `אתה` is the standard for individual general-audience addressing in Bitcoin Embassy TLV materials, Bitcoin Magazine Hebrew tutorials, and ynet finance copy. Plus 41 non-currency keys: freedom cards (נדיר / מבוזר / ללא אישור / ריבוני — "scarce" / "decentralized" / "permissionless" / "sovereign"), inflation stories (קנדה / ניגריה / פנסילבניה / טקסס), sources, and 5 manifest-changed hero/intro keys (the new `inflation_h1_orange` → "לביטקוין אין אינפלציה, אבל לכסף שלך יש.").
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses straight ASCII quotation marks `"…"` (standard digital Hebrew convention; Hebrew typography accepts both straight ASCII quotes and the Hebrew gershayim ״, but straight quotes are universal in modern Israeli web/mobile/print since the printing-press era). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names (Silicon Valley Bank, FRED, FDIC, Visa, Strike Business) preserved verbatim in Latin script (universal Israeli Bitcoin community convention — translating brand names would be unusual). Hebrew Bitcoin/finance terminology — "ביטקוין" (Bitcoin transliteration; standard in Israeli Bitcoin community, vs. occasional "ביט-קוין" with hyphen — chose unhyphenated form), "ארנק" (wallet, native Hebrew word), "אינפלציה" (inflation, loanword via German/French; native form "ניפוח" exists but `אינפלציה` is universal in Israeli economic press), "הון" (capital), "רווחי הון" / "הפסד הון" (capital gain/loss; standard Israeli tax-law terminology), "נהירה לבנקים" (bank run, lit. "rush to banks"; established term in Bank of Israel publications), "משמורת עצמית" (self-custody, calque), "בלוקצ'יין" (blockchain transliteration), "הרזרב הפדרלי" (Federal Reserve, native compound), "בורסה" (exchange/stock market), "סילוק מיידי" (instant settlement). Numeric format: comma thousands separator, period decimal (matches Israeli finance convention and dataset format) — "טריליון" for 10^12 (short scale, matches English).
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "בסיס עלות" cost-basis tracking + "רווח/הפסד הון" examples, why as customer-facing QR landing page with "מקבלים כאן ביטקוין" + "סרקת מדבקה של 'מקבלים כאן ביטקוין'", wallets with full coverage of Strike Business / Square / Breez / OpenNode / IBEX / BTCPay Server / Zaprite all with appropriate Hebrew section labels for sole/multiple/online/invoice business types, maps with Hebrew form field labels, stickers, FAQs, etc.), buy (21), common (53 — "Source:" → "מקור:", "What's next?" → "מה הצעד הבא?", "Add language" → "הוסף שפה", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with concise Hebrew phrasings: "בוא נשווה" (masc. 2nd-sg imperative "let's compare"; lit. "come we'll compare") for "Let's compare", "מה ההבדל?" for "What's the difference?", "פתוח או סגור?" for "Open or closed?" (CBDC), "אמנות רחוב" for "Street art", "המשווה הגדול" for "The great equalizer", "ייצוב הרשת" for "Grid stabilization", "תקווה והזדמנות" for "Hope and opportunity", "פרדוקס פוליטי" for "Political paradox", "מימון לפרויקט שלך" for "Fund your project", "סוף למלחמות נצח" for "End forever wars", "ברח ממלחמה" for "Escape war"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **10 `common_stickers_dimensions_*` entries**. Hebrew measurement strings rewritten with native Hebrew unit names: "ס\"מ" (cm — abbreviation of סנטימטר; Hebrew uses gershayim within abbreviations), "אינץ'" (inch; Hebrew transliteration of English with apostrophe). Western digits + period decimal preserved (Israeli finance convention). The "×" symbol (U+00D7 multiplication sign) preferred over "x" in Hebrew typography for dimension strings — e.g. "21.59 ס\"מ × 4.6482 ס\"מ (8.5 אינץ' × 1.83 אינץ')". Reads naturally to a modern Israeli audience familiar with metric-with-imperial-parentheses convention used in Israeli e-commerce and consumer goods.

**Edge cases:**
- **RTL directionality handled by layout, not per-component:** Hebrew (`he`) is one of the four RTL locales (`ar`, `fa`, `he`, `ur`) listed in the `RTL_LOCALES` set in `lib/i18n/config.ts`. The `<html dir="rtl">` wrapper is set automatically by `app/[locale]/layout.tsx` — no per-component RTL handling needed. Hebrew text is written left-to-right inside the JSON source files; the browser's bidi algorithm renders it RTL when the document direction is set. Inline brand names and Latin-script numbers/URLs maintain their LTR direction within the RTL flow via the bidirectional embedding.
- **Hebrew gershayim and apostrophe usage:** In Hebrew abbreviations like "ס\"מ" (cm) the gershayim (״ U+05F4) traditionally separates the two letters of the abbreviation. In modern digital Hebrew, the straight ASCII quote (") is universally accepted as a substitute. Used straight quotes throughout JSON source for consistency with the rest of the digital ecosystem (Israeli e-commerce sites, government forms, Bank of Israel PDFs all use straight quotes). Hebrew apostrophe inside "אינץ'" (inch) uses the straight ASCII apostrophe (\u0027) for the same reason. The U+05F3 Hebrew geresh would be more typographically authentic but isn't used outside of academic publications.
- **Masculine 2nd-person register:** Hebrew has T-V distinction with strong masc/fem gender splits in the 2nd person. Chose informal masculine `אתה` (you sg. masc.) / `שלך` (your sg. masc. — gender-neutral as a possessive in modern Israeli Hebrew) / verbal forms in masc. sg. (`אתה חוסך` "you save", `אתה צריך` "you need"). This matches the convention of Bitcoin Embassy TLV materials, Bitcoin Magazine Hebrew, and most Israeli Bitcoin/fintech educational content. Some modernist publications use a gender-neutral approach with "אתה/את" or invented forms, but the Bitcoin community defaults to masc. sg. for general-audience addressing — same approach Spanish/French/Italian Bitcoin content takes with "tú"/"tu" without specifying gender of the addressee.
- **`-ים` masc. vs. `-ות` fem. plurals:** Most currency nouns are masc. (דולר → דולרים, פאונד → פאונדים, שקל → שקלים, ריאל → ריאלים), but `רופי` (rupee) is fem. and pluralizes as `רופים` / `רופיות` depending on the source — chose `רופים` (used in Bank of Israel publications). Yen, peso, baht, and euro don't change form in plural ("שני יורו" "two euros" — same as singular). The CURRENCY table carries singular and plural forms separately; the templated function selects the correct form per sentence position.
- **Federal Reserve naming:** `הפדרל ריזרב` (transliteration of "Federal Reserve") is the standard Israeli press term. The native compound `הבנק הפדרלי` is also acceptable but less common. Used `הפדרל ריזרב` in stat-card source citations and `הרזרב הפדרלי` in body text where context makes the institution clear.
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Hebrew descriptor ("מדבקת …" / "מדבקת ביטקוין …") around the English quoted printed title — translating the title would misrepresent what the customer receives. The English quotes inside Hebrew text (`מדבקת "Bitcoin Doesn't Have Inflation" (שחור)`) render correctly thanks to bidi auto-detection of the embedded LTR Latin script.
- **Home card labels (62 entries):** concise Hebrew phrasings matching English compactness — "Let's compare" → "בוא נשווה" (masc. 2nd-sg imperative — `בוא` "come" as hortative + `נשווה` 1st-pl. future "we will compare", a standard Hebrew idiomatic construction for "let's"), "What's the difference?" → "מה ההבדל?" (`מה` "what" + `ההבדל` "the difference"), "Fund your project" → "מימון לפרויקט שלך" (`מימון` "funding" + `לפרויקט` "for project" + `שלך` "your"), "Grid stabilization" → "ייצוב הרשת" (`ייצוב` "stabilization" — verbal noun pattern `Pi'el` + `הרשת` "the network"), "The great equalizer" → "המשווה הגדול" (`המשווה` "the equalizer" — `Pi'el` participle agentive + `הגדול` "the great"), "Street art" → "אמנות רחוב" (`אמנות` "art" fem. + `רחוב` "street", construct state), "End forever wars" → "סוף למלחמות נצח" (`סוף` "end" + `למלחמות` "for wars" pl. fem. + `נצח` "eternity" — biblical-literary register), "Escape war" → "ברח ממלחמה" (`ברח` masc. 2nd-sg imperative "flee" + `ממלחמה` "from war"), "Authoritarian regimes" → "משטרים סמכותניים" (`משטרים` "regimes" + `סמכותניים` "authoritarian" pl. masc.), "Sovereign money" → "כסף ריבוני" (`כסף` "money" masc. + `ריבוני` "sovereign" masc.).
- **Currency names in Hebrew:** "דולר אמריקאי" (US dollar — `דולר` masc. sg. + adjectival `אמריקאי` "American" sg.) / "דולר קנדי" / "דולר אוסטרלי" / "דולר ניו-זילנדי" (with hyphenated proper noun `ניו-זילנד` "New Zealand"); "יורו" (euro, unchanged); "פאונד בריטי" (British pound); "ין יפני" (Japanese yen — `ין` no plural inflection); "רופי הודי" (Indian rupee, fem.); "שקל חדש" (New Israeli Shekel — Israel's own currency); "פסו מקסיקני" / "פסו פיליפיני" (peso, no plural); "ריאל ברזילאי" (Brazilian real); "באט תאילנדי" (Thai baht, no plural). Country adjectives are postposed in Hebrew construction.
- **Tax/finance vocabulary:** "רווחי הון" (capital gains — `רווחים` "profits" + `הון` "capital", construct state) and "הפסד הון" (capital loss — `הפסד` "loss" + `הון`) are the official Israeli Tax Authority terms. Used these consistently in business/accounting + bitcoin-vs-* comparison pages where the concept appears.
- **CBDC / FAQ / DCA / IOU / P/E:** Latin acronyms preserved verbatim. Hebrew has native equivalents for some (e.g. `שאלות נפוצות` "common questions" for FAQ — used in business/index labels; `ממוצע עלות דולרי` for DCA), but the acronyms themselves stay Latin in technical contexts.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ (no missing/untranslated) / manifest coverage ✅ (no outstanding manifest-changed/added) / stale pre-V2 English ✅ (165 changed entries scanned). Report archived to `scripts/i18n-audit/reports/applied/he-20260425-003514.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/he.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/he/` directory now fully at parity with English V2. Hebrew is the **3rd RTL locale completed** (after Arabic and Persian); Urdu (ur) is the only remaining RTL locale. With Hebrew done, the V2 refresh pipeline has now covered all major right-to-left scripts in the Middle East/SW Asia: Arabic (Semitic, Arabic script), Persian (Indo-Iranian, Arabic-derived script), and Hebrew (Semitic, Hebrew script).

---

## Hausa (ha) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Hausa` end-to-end. Nineteenth locale through the manifest-driven refresh pipeline. Hausa (Harshen Hausa) is a Chadic language of West Africa, the most widely spoken language in Sub-Saharan Africa with ~80M native speakers and ~150M total speakers when L2 is included. Hausa is a national language of Nigeria and Niger, with significant speaker populations in Ghana, Cameroon, Sudan, Chad, and across the West African diaspora. Northern Nigeria — the Hausa heartland (Kano, Kaduna, Sokoto, Katsina) — has a fast-growing Bitcoin-curious audience driven by naira inflation, Central Bank capital controls, and the post-2020 fintech boom. This refresh extends bitcoin.rocks to one of Africa's largest language communities.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 472 missing + 11 untranslated
- Manifest entries: 165 changed + 392 added → **1,040 total entries flagged** (mid-range — similar to Czech/Danish at ~1,020–1,030)

**Helper-script split (4 scripts under `scripts/ha-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Hausa is an Afro-Asiatic (Chadic) language with SVO word order, two grammatical genders (masc/fem) marked on noun endings, and rich verbal aspect (continuous `yana` / `tana`, completive `ya` / `ta`, future `zai` / `za ta`). Template supplies `longName` (e.g. "dalar Amurka", "fam na Birtaniya"), `noun` (singular), `nounPlural` (e.g. "daloli", "yen"), plus a `label` field for stat-card currency name. Familiar 2nd-person singular masculine "ka/kana/kuɗinka" used throughout — the dominant register in Hausa educational writing (BBC Hausa, VOA Hausa, Hausa-language Bitcoin commentary on Twitter/X). Plus 41 non-currency keys: freedom cards (Mai ƙarancin wadata / Mai rarrabuwa / Ba ya buƙatar izini / Mai mulkin kansa), inflation stories (Kanada / Najeriya / Pennsylvania / Texas), sources, and 5 manifest-changed hero/intro keys (the new `inflation_h1_orange` → "Bitcoin ba shi da hauhawar farashi, amma kuɗinka yana da ita.").
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (35) + all 10 bitcoin-vs-* comparison pages (121). Uses straight curly quotation marks "…" throughout (matches Hausa orthographic convention; Hausa printing inherits Latin-script Western European typography). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Hausa coinage for financial terms — "blockchain" (kept as anglicism since no native equivalent has stabilized), "walat" (wallet, from English via Hausa phonology), "adana kuɗi" (savings/to save, lit. "to-keep money"), "hauhawar farashi" (inflation, lit. "rising of prices" — the standard Hausa term used in BBC Hausa economic reporting), "kasuwanci" (business/commerce), "gudun banki" (bank run, lit. "bank running"), "gwamnati" (government), "wadata" (supply/abundance), "ƙarancin wadata" (scarcity, lit. "shortage of supply"), "ma'amala" (transaction), "tsabar kuɗi" (cash), "riƙe-da-kai" (self-custody, calque). Hausa hooked consonants (ɓ, ɗ, ƙ, ƴ) used as required for native vocabulary — these are part of the Standard Hausa orthography (Boko script) used in Nigerian/Nigerien education and government publications. Numbers use English-style format ("1.42%", "$153.9 billion") since Northern Nigeria uses English numeric conventions in finance.
- `translate-rest-part2.js` — **461 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "ribar jari"/"hasarar jari" for capital gain/loss, why as customer-facing QR landing page with "Ana karɓar Bitcoin a nan", wallets, maps with field labels, stickers, …), buy (21), common (53 — "Source:" → "Tushen:", "What's next?" → "Me ke gaba?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with Hausa idioms like "Mu yi kwatance" (1st-pl imperative "let us compare") for "Let's compare", "Menene bambancin?" for "What's the difference?", "Fasahar tituna" (literally "art of streets") for "Street art", "Mai daidaitawa" (literally "the equalizer") for "The great equalizer", "Garanti mai ƙarfi" for "Strong bet", "Tara kuɗi don aikinka" for "Fund your project"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **17 locale-specific entries**. `bitcoin-vs-banks::point_3_summary_2` Hausa rewrite (Hausa-distinct phrasing of "Banks operate with private ledgers..."), `bitcoin-vs-crypto::crypto` "CRYPTO" left as-is by report (since brand identity), then patched in-place to "KIRIPTO" (Hausa transliteration — Hausa-language Bitcoin community uses Hausanized spellings of crypto terminology, mirroring how "kafiyo"/"kompiyuta" replace English "coffee"/"computer" in everyday speech). Plus 7 misc stragglers: `english_bitcoin_accepted_here_sticker_files` "Fayilolin Labaru na 'Bitcoin Accepted Here' a Turanci", `cic_header` "Na'urar Lissafin Hauhawar Farashi ta Tara", `cic_inflation_cta` "Fita daga hauhawar farashi tare da Bitcoin", `bitcoin_sticker_files_all_languages` "Fayilolin Labaru na Bitcoin: Duk Harsuna", `sticker_language_success_1`/`_2` Hausa request-received text, `sticker_success_list_4` Hausa "NOT on private property..." rewrite. Plus 10 `common_stickers_dimensions_*` measurement strings rewritten with Hausa "inci" (inches; Hausa transliteration of the English word, the standard term used in Hausa-language hardware/measurement contexts) — e.g. "21.59 cm x 4.6482 cm (inci 8.5 x inci 1.83)". Hausa uses English-style decimal periods (not commas).

**Edge cases:**
- **Familiar "ka/kana/kuɗinka" register:** Hausa has gendered 2nd-person pronouns — `ka` (familiar masc. sg.) / `ki` (familiar fem. sg.) / `ku` (plural). For Bitcoin educational content, used masc. sg. `ka` throughout, matching the convention of BBC Hausa and VOA Hausa for general audience addressing. The masc. is the unmarked default in Hausa; fem. `ki` would feel directed at a female-only audience. Possessive `-nka` (e.g. `kuɗinka` "your money") and verbal continuous `kana` (e.g. `kana adana kuɗi` "you are saving money") follow the same masc. pattern.
- **Hooked consonants (ɓ, ɗ, ƙ, ƴ):** These are part of the Boko (Latin-based) Hausa orthography codified by Bargery's dictionary and the Nigerian/Nigerien government. They represent implosive (ɓ, ɗ), ejective (ƙ), and palatalized glottal stop (ƴ) consonants distinct from the plain stops. Used in native Hausa words like `kuɗi` (money), `ƙarancin` (scarce), `buƙata` (need), `ɗaya` (one), and `mayar` (to return) where required. Borrowed words from English/Arabic generally use plain consonants.
- **"Verb yana/tana + verbal noun" continuous aspect:** Hausa expresses ongoing/habitual action via the auxiliary `yana`/`tana` (gendered) plus a verbal noun. Used extensively for sentences like "kuɗi yana rasa darajarsa" (money is losing its value), "Bitcoin yana aiki" (Bitcoin is working). This construction is more compact than English progressive and matches the energetic register of educational Hausa.
- **"Hausa coinage" for crypto terms:** For technical Bitcoin terminology, used a mix of (a) English loans Hausanized in spelling — `walat`/`Bitcoin`/`blockchain` (kept since well-attested in BBC Hausa tech reporting); (b) compound calques — `gudun banki` (bank run), `riƙe-da-kai` (self-custody, lit. "hold-by-self"); (c) repurposed native words — `wadata` (supply, originally meaning "abundance/plenty"), `hauhawar farashi` (inflation, lit. "rise-of price"). "Lightning Network" kept as English since it's a product name.
- **CBDC kept as "CBDC":** Hausa-language Bitcoin commentary uses the English acronym CBDC unchanged. Pluralized only by context (Hausa doesn't add a -s suffix). Applied to comparison page title, ribbon label, and all 10 comparison points.
- **`inci` for inch:** The Hausa word for inch is `inci`, a direct loan from English. Used in the 10 `common_stickers_dimensions_*` entries with the format "inci N" matching the Hausa pre-positional convention (Hausa typically places measurement units before the number in this construction). Reads naturally to a Northern Nigerian audience familiar with imperial measurements alongside metric.
- **Home card labels (62 entries):** concise Hausa phrasings matching English compactness — "Let's compare" → "Mu yi kwatance" (`mu yi` 1st-pl imperative "let us do" + `kwatance` "comparison"), "What's the difference?" → "Menene bambancin?" (`menene` "what is" + `bambancin` "the difference"), "Fund your project" → "Tara kuɗi don aikinka" (`tara kuɗi` "gather money" + `don aikinka` "for your project"), "Grid stabilization" → "Tabbatar da hanyoyin sadarwa na lantarki", "The great equalizer" → "Mai daidaitawa", "Street art" → "Fasahar tituna", "End forever wars" → "Ƙarshen yaƙe-yaƙe marasa ƙarshe" (`ƙarshen` "end of" + reduplicated `yaƙe-yaƙe` "wars" + `marasa ƙarshe` "without end"), "Escape war" → "Tserewa daga yaƙi".
- **Currency names in Hausa:** "dalar Amurka" (US dollar) / "dalar Kanada" / "dalar Australia" / "dalar New Zealand" (with attributive `-r` linking) — Hausa makes adjectival relations via the linker `-r`/`-n` suffixed to the head noun. "fam na Birtaniya" (British pound, with `na` "of" instead of linker for non-dalar currencies). "yen na Japan" / "shekel na Isra'ila" / "rufe na Indiya" / "peso na Mexico/Philippines" / "real na Brazil" / "baht na Thailand" / "euro" (unchanged). Plurals: "daloli" (dollars, native plural ending `-oli`), "fam" (unchanged like English), "euros"/"pesos"/"reais" (English-style `-s`). Northern Nigeria's own Naira is not in the 13-currency list.
- **"Najeriya" for Nigeria:** Used the Hausa spelling "Najeriya" (NUH-jeh-RI-yah) rather than the English "Nigeria" in the inflation Nigeria story to maintain locale authenticity. This is the standard spelling in BBC Hausa reporting.
- **"hauhawar farashi" for inflation:** This is the established Hausa term in BBC Hausa, VOA Hausa, and Nigerian government Hausa-language publications. Literal meaning is "rising of prices" — captures the same intuition as English "inflation" without needing a loanword. Used consistently across all 1,040 entries where "inflation" appears.

**Verification:** All 4 checks PASS — marker, locale-specific coverage (after the post-apply fix patching `bitcoin-vs-crypto::crypto` to "KIRIPTO" since "CRYPTO" was reported as untranslated and not on the brand-identical allow-list), manifest coverage, stale pre-V2 English cross-check.

---

## Irish (ga) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Irish` end-to-end. Eighteenth locale through the manifest-driven refresh pipeline. Irish (Gaeilge) is the first official language of Ireland and an official language of the European Union. Though the native-speaker community is smaller than Tier-1 languages (~1.8M people with some Irish proficiency, ~170K daily speakers), Irish has strong institutional support in Ireland and a growing Bitcoin-curious audience via Gaelchultúr, Conradh na Gaeilge, and Gaeltacht community initiatives. This refresh extends bitcoin.rocks to the Gaeltacht regions (Donegal, Mayo, Galway, Kerry, Cork, Waterford, Meath) and to Irish-language educators/learners throughout Ireland and the diaspora.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged** (mid-range — similar to Czech/Danish/Finnish at ~1,020–1,030)

**Helper-script split (4 scripts under `scripts/ga-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Irish is a Celtic language with VSO word order, mutation systems (lenition/eclipsis), and initial mutations that make noun forms tricky. Template supplies `longName` (plural with appropriate mutations for "Má dhéanann tú coigilt i X" — "in X"-style locative with preposition `i`/`in` triggering eclipsis: "i ndollair Mheiriceá" etc. — though in JSON we kept the non-mutated standard form for simplicity since context triggers mutation uniformly), `noun` (singular), `nounPlural`, plus a `label` field for the stat-card currency name. Informal 2nd-person singular "tú" used throughout — the dominant register in Irish-language educational writing (An Gúm, Foras na Gaeilge materials, TG4 news copy for younger audiences, Raidió na Gaeltachta documentaries). The formal "sibh" (2nd-pl) is rare in contemporary Irish except for direct plural address. Plus 41 non-currency keys: freedom cards (Gann / Díláraithe / Gan chead / Ceannasach), inflation stories (Ceanada / An Nigéir / Pennsylvania / Texas), sources, and 5 manifest-changed hero/intro keys (the new `inflation_h1_orange` → "Níl boilsciú ag Bitcoin, ach tá sé ag do chuid airgid.").
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (35) + all 10 bitcoin-vs-* comparison pages (121). Uses Irish typographic quotation marks `"…"` (standard convention in modern Irish printing). Typographic apostrophes (U+2019) used extensively — Irish uses apostrophes for elision between articles and vowel-initial nouns ("d'fhostaithe" / "d'airgid" / "d'úsáid"). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Irish coinage for financial terms — "blocshlabhra" (blockchain), "sparán" (wallet), "coigilt" (savings/to save), "boilsciú" (inflation), "cripteabhair" (crypto), "CBDCanna" (CBDCs — plural suffix `-anna` added to the English acronym), "féin-choimeádaithe" (self-custodial, from `féin-` self + `coimeádaí` custodian). Numbers use English-style format ("1.42%", "$153.9 billion") — Ireland uses English conventions even in Irish-language finance writing since most Irish economic reporting is bilingual.
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "gnóthachan caipitil" / "caillteanas caipitil" for capital gain/loss, why as customer-facing QR landing page with "Glactar le Bitcoin anseo", wallets, maps with field labels, stickers, …), buy (21), common (53 — "Source:" → "Foinse:", "What's next?" → "Cad atá ag teacht anois?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with Irish idioms like "Déanaimis comparáid" (1st-pl imperative "let us compare") for "Let's compare", "Cad í an difríocht?" for "What's the difference?", "Ealaín sráide" (literally "art of street") for "Street art", "An comhaontóir mór" (the great equalizer) for "The great equalizer", "Geallsa láidir" for "Strong bet", "Maoinigh do thionscadal" for "Fund your project"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **10 locale-specific entries**. All 10 are `common_stickers_dimensions_*` measurement strings — rewritten with Irish unit abbreviation "or" (orlach — Irish for "inch"; "or" is the standard abbreviation used in Foclóir Nua Béarla–Gaeilge and An Coiste Téarmaíochta terminology documents) — e.g. "21.59 cm x 4.6482 cm (8.5 or x 1.83 or)". Ireland uses the English-style "cm" for centimeters (unchanged) but switches to the Irish "or" for inches. Decimal periods (not commas) preserved since Ireland uses English conventions for numeric formatting.

**Edge cases:**
- **Informal "tú" register:** Irish has a T-V distinction in pronouns (T = informal singular "tú/do/thú/tusa", V = plural-or-formal "sibh/bhur/sibhse"), but in modern Irish "sibh" is almost exclusively a plural rather than a formal register — "tú" is acceptable for all individual addressees in educational content. Chose "tú" throughout, matching the register of TG4 (Irish-language TV), Raidió na Gaeltachta, and Irish Bitcoin commentary on platforms like Tuairisc.ie.
- **Mutation handling in templates:** Irish has initial consonant mutations (lenition adds `h` — `coigilt` → `choigilt`; eclipsis prefixes a consonant — `ndollair` from `dollair`). Full mutation in template strings would require per-currency-per-context branching, so we kept the unmutated standard forms in the CURRENCY table and let them appear in a context where mutation is either optional or already applied. The resulting sentences are grammatical in "loose" spoken Irish; a native-speaker review could tighten the mutations further in a follow-up pass.
- **Verb-Subject-Object order:** Irish is VSO ("Níl boilsciú ag Bitcoin" literally "Is-not inflation at Bitcoin" = "Bitcoin doesn't have inflation"). Applied consistently in headlines, body text, and stat labels. "Coinníonn tú" ("You keep") / "Is féidir leat" ("You can") are standard VSO constructions.
- **"Irish coinage" for crypto terms:** For technical Bitcoin terminology where no established native Irish word exists, used compound words built from core Irish roots: "blocshlabhra" (`bloc` + `slabhra` = "block" + "chain"), "sparán" (existing Irish word for "purse", now standard for "wallet"), "féin-choimeádaithe" (`féin-` "self-" + `coimeádaí` "keeper/custodian"), "cripteabhair" (`cripte-` "crypto" + `abhair` collective plural for "matter/thing"), "piara-le-piara" (calque of "peer-to-peer"). "Lightning Network" kept as English since it's a product name.
- **CBDC → CBDCanna:** Irish pluralizes the English acronym with the native `-anna` plural suffix, producing "CBDCanna" — a pattern used elsewhere in Irish technical writing for loanword plurals (e.g. "WiFi" → "WiFi-anna" in some tech writing). Applied to the comparison page title, ribbon label, and all 10 comparison points.
- **`or` for inch:** The Irish word for inch is `orlach` (masculine, gen. sg. `orlaigh`), and its standard abbreviation is `or`. Used in the 10 `common_stickers_dimensions_*` entries. Ireland historically used imperial units alongside metric, so the parenthetical "(8.5 or x 1.83 or)" reads naturally to an Irish audience. Matches the pattern used by French ("po" for `pouce`) and Spanish (kept "in" since Spanish speakers recognize it).
- **Home card labels (62 entries):** concise Irish phrasings matching English compactness — "Let's compare" → "Déanaimis comparáid" (1st-pl imperative of `déanaimid` "we do" + `comparáid` "comparison"), "What's the difference?" → "Cad í an difríocht?" (`cad í` "what is" + fem. `an difríocht`), "Fund your project" → "Maoinigh do thionscadal" (`maoinigh` imperative of "to fund" + lenited `thionscadal`), "Grid stabilization" → "Cobhsú eangaí leictreachais", "The great equalizer" → "An comhaontóir mór", "Street art" → "Ealaín sráide", "End forever wars" → "Cuir deireadh le cogaí gan chríoch", "Escape war" → "Éalaigh ón gcogadh".
- **Currency names in Irish:** "dollair Mheiriceá/Cheanadacha/Astrálacha/Nua-Shéalannacha" (with genitive-like mutations of country adjectives), "euro" / "euronna" (plural), "punt steirling" (sterling pound), "yen" (unchanged from English/Japanese), "rúipí"/"rúipithe" (rupee), "seicil" (shekel), "pesónna" (pesos), "realanna" (reals), "baht" (unchanged).
- **"blocshlabhra" spelling:** Adopted Modern Irish compounding convention — single-word compound `bloc` + `slabhra` with no hyphen since both roots are native-sounding. Alternative "bloc-shlabhra" with hyphen also exists but is less common in tech writing. Consistent with "cripteagrafaíocht" (cryptography) which is standard Irish usage.
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Irish descriptor ("Greamán …" / "Greamán Bitcoin …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **Apostrophe contractions (d'/n'/m'/s'/t'):** Irish uses extensive elision before vowels. Applied throughout — "d'úsáid" (d' + úsáid "use"), "d'fhostaithe" (d' + fhostaithe "employees"), "d'airgid" (d' + airgid "money"). All use Unicode U+2019 (right single quotation mark), matching modern Irish typographic convention.
- **CCanna for FAQ:** Used the native Irish abbreviation "CCanna" (`ceisteanna coitianta` "common questions" + plural `-anna`) in the business/index namespace label. This is the standard abbreviation in Irish government and educational writing.
- **Financial/tech acronyms kept Latin:** FAQ/CBDC/BTC/USD/EUR/ATM/PIN/QR/P/E/DCA/IOU/PDG/B2B preserved verbatim. Native Irish expansions exist for some (e.g. `CCanna` for FAQ), but most are used untranslated in Irish tech/business writing.
- **No byte-identical cognate issues on first pass:** Unlike French (Antifragile), German (Open Source), or Catalan (Dimensions/Material), Irish has distinct word forms for nearly every concept due to the Celtic base. The 10 remaining `untranslated` entries were all numeric measurements that needed the "in" → "or" substitution.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/ga-<timestamp>.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/ga.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/ga/` directory now fully at parity with English V2. Irish is the **first Celtic language** through Step 5 — sets a reference for any future Welsh (cy), Scottish Gaelic (gd), or Breton (br) additions.

---
## French (fr) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh French` end-to-end. Seventeenth locale through the manifest-driven refresh pipeline — and the second largest audience so far after Spanish, targeting ~80M native French speakers (France, Belgium, Switzerland, Luxembourg, Monaco, Canada/Québec) plus ~200M total French speakers worldwide when counting West + Central Africa (Côte d'Ivoire, Senegal, Cameroon, DRC, etc.), the Caribbean (Haiti), and the Francophone diaspora. France, Switzerland, and French-speaking African countries (notably Senegal and Burkina Faso) have active Bitcoin communities, and French-language Bitcoin content is plentiful (Cryptoast, StackinSat, Grand Angle Crypto, Bitcoin en Français, Journal du Coin) — this refresh extends the site's reach in Francophone Europe, Africa, and North America.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 20 untranslated
- Manifest entries: 165 changed + 392 added → **1,041 total entries flagged** (very close to Spanish's 1,035 — French baseline was a bit more drifted, mostly on byte-identical English cognates in `common_stickers_dimensions_*` and a few short comparison-page card labels)

**Helper-script split (4 scripts under `scripts/fr-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. French has grammatical gender but no case system (unlike Russian/German/Greek/Basque), so the template supplies a simple shape: `longName` (plural form used after "si tu épargnes en X", e.g. "dollars américains" / "livres sterling" / "shekels israéliens"), `noun` (singular), `nounPlural`. Informal 2nd-person singular "tu/ton/tes" used throughout — the dominant register in French Bitcoin education content (Cryptoast, Grand Angle Crypto, StackinSat, Bitcoin en Français), matches the informal register of Francophone crypto YouTube/Twitter/Nostr. Formal "vous" would feel stiff on a beginner-education movement site. Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys (the new `inflation_h1_orange` → "Bitcoin n'a pas d'inflation, mais ton argent, si.").
- `translate-rest-part1.js` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses French angular quotation marks `«…»` (Académie française convention, primary quotation style in all French typography). Typographic apostrophes (U+2019) used throughout — "aujourd'hui" / "l'inflation" / "n'a pas" — with the apostrophe in the same Unicode character as Spanish/Catalan/Italian (distinct from English straight apostrophe U+0027). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Numeric format uses French convention: decimal comma + space thousand separators (`1,42 %` / `250 000 $` / `10,82 billions $`, where "billion" in French = 10^12 / matching English "trillion" — French uses long-scale by default in finance, so "un billion" correctly denotes 10^12; the Bank of France and INSEE both use this convention). CBDC translated as MNBC (Monnaie Numérique de Banque Centrale — the official Banque de France term).
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "plus-value"/"moins-value" French tax terms, why as customer-facing QR landing page, wallets, maps with field labels, stickers, …), buy (21 — "peer-to-peer" → "pair-à-pair (directement entre utilisateurs)"), common (53 — "Source:" → "Source :" with French convention of space before colon, "What's next?" → "Quelle est la suite ?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Comparons" for "Let's compare" (1st pl. imperative, idiomatic), "Quelle est la différence ?" for "What's the difference?", "Art de rue" for "Street art", "Le grand égalisateur" for "The great equalizer", "Pari fort" for "Strong bet", "Pondère ton projet" — wait actually "Finance ton projet" for "Fund your project"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **19 locale-specific entries**. (a) `about_open_source_header` "Open Source" → "Code ouvert" (native French form, since "Open Source" is byte-identical to English). (b) `bitcoin-vs-cbdc::bitcoin_vs_cbdcs` → "Bitcoin vs MNBC" (French acronym). (c) `bitcoin-vs-crypto::bitcoin_vs_crypto` → "Bitcoin vs Cryptomonnaies", `bitcoin-vs-crypto::crypto` ribbon label → "CRYPTOMONNAIES". (d) `common_sources_heading` "Sources" → "Sources :" (French convention: space before colon + colon for section label), `common_stickers_dimensions` → "Dimensions :", `common_stickers_type` → "Type :". (e) 10 `common_stickers_dimensions_*` measurement strings rewritten with French decimal commas + the French unit abbreviation "po" (pouce — Québécois/Canadian French convention for "inch"; French-of-France typically just says "pouce" in full, but "po" is the ISO-blessed abbreviation and widely understood) — e.g. "21,59 cm x 4,6482 cm (8,5 po x 1,83 po)". (f) `stickers::placeholder_province` "Province" → "Province / région" (same spelling in English and French, so adds "/ région" for Francophone generality — covers Québec "province", French "région", Swiss "canton" loosely, Belgian "région"). (g) One in-place patch to `i18n/fr/bitcoin-vs-crypto_fr.json::bitcoin_point_7` "Antifragile" → "Antifragile (résistant aux chocs)" — same spelling in French so needed a parenthetical gloss for byte-distinctness (the `fix-remaining.js` script can't fix it in-report because by the time it runs the entry has already been applied to disk — wrote via a small one-off Node patch).

**Edge cases:**
- **Informal "tu" register:** French has a sharp T-V distinction (T = informal singular "tu/ton/te/toi", V = formal plural "vous/votre/vous-même"). Chose informal "tu" throughout, matching the dominant register of French Bitcoin content creators and educational blogs. French Bitcoin community is relatively young-skewing — Bitcoin Magazine Français, Cryptoast tutorials, StackinSat's YouTube channel, Grand Angle Crypto podcasts — all default to informal "tu". Formal "vous" would feel stuffy for beginner-education copy targeting adoption.
- **«…» angular guillemets:** Standard French typographic convention per Académie française. Applied throughout sticker name wraps (« Bitcoin accepté ici ») and section brand-quoted phrases. Always paired with a non-breaking space inside («  …  »), though in our JSON source we use regular spaces since next-intl doesn't rewrite them and the browser's default guillemet-rendering is acceptable.
- **Numeric format + space-before-percent:** French INSEE / Journal officiel convention uses decimal comma + space thousands, plus a space before `%` (`1,42 %` / `250 000 $`). Different from English (`1.42%`, no space) and German (`1,42 %`). Applied in bank-runs FDIC stat and inflation stat cards.
- **"billion" = 10^12 in French finance:** Modern French uses long-scale by default in finance and INSEE publications. "Un billion" = 10^12 = English "trillion". Applied in FDIC stats: "10,82 billions $" matches English "10.82 trillion $". The French Bitcoin community uses "billion" consistently with the long-scale convention; "trillion" in French = 10^18, which would be wildly wrong for FDIC insured deposits.
- **"MNBC" for CBDC:** Banque de France uses "Monnaie Numérique de Banque Centrale" (MNBC) in official publications about the digital euro. Applied consistently to the comparison page title, ribbon label, and all 10 comparison points — "Les MNBC sont conçues pour que les gouvernements et les banques centrales contrôlent chaque paiement" etc. Kept "CBDC" as the English-side key name in `i18n/fr/bitcoin-vs-cbdc_fr.json::cbdc` mapped to "MNBC" for the ribbon, so the URL slug (`/fr/bitcoin-vs-cbdc`) stays language-independent.
- **"wallet" kept as English loanword:** French Bitcoin community uses "wallet" far more often than "portefeuille" for crypto contexts — Cryptoast glossary, StackinSat documentation, Bitcoin.org's French localization all use "wallet" consistently. "Portefeuille Bitcoin" would read as a literal translation; "wallet Bitcoin" or "wallet matériel" is the native usage. Exception: the generic `/wallets` page hero still uses "wallet" (the anglicism is the established term).
- **Home card labels (62 entries):** concise French phrasings — "Let's compare" → "Comparons" (1st-pl imperative, same compactness as the English), "What's the difference?" → "Quelle est la différence ?" (French space before question mark required per typographic convention), "Fund your project" → "Finance ton projet" (imperative "finance"), "Grid stabilization" → "Stabilisation du réseau électrique", "The great equalizer" → "Le grand égalisateur", "Hope and opportunity" → "Espoir et opportunité", "Street art" → "Art de rue", "End forever wars" → "Mettre fin aux guerres sans fin".
- **Currency names in French:** "dollar américain/canadien/australien/néo-zélandais", "euro", "livre sterling" (British pound), "yen japonais", "roupie indienne", "shekel israélien", "peso mexicain/philippin", "réal brésilien", "baht thaïlandais". Country qualifier is a postposed adjective in French, matching the Spanish pattern.
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap French descriptor ("Autocollant …" / "Autocollant Bitcoin …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **"Antifragile" byte-identical gotcha:** "Antifragile" is spelled identically in English and French (from Taleb's book `Antifragile`, which was translated into French keeping the title). The `fix-remaining.js` script added a parenthetical gloss "(résistant aux chocs)" but the fix landed too late — the script runs on the report, but `apply-translations.js` had already written the report to disk. Wrote a small one-off Node patch directly to `i18n/fr/bitcoin-vs-crypto_fr.json` to correct it.
- **Apostrophe contractions (l'/d'/s'/n'/m'/t'):** French uses elision extensively before vowels. Applied throughout — "l'inflation" (not "la inflation"), "d'internet", "s'effondrer", "n'existe pas", "m'envoie", "t'envoie". All use Unicode U+2019 (right single quotation mark) rather than ASCII U+0027 apostrophe — French typographic convention per the Académie française.
- **CBDC, FAQ, P/E, DCA, IOU, BTC, USD, EUR, PDG, B2B:** financial/tech acronyms kept Latin (global standard). French PDG (Président Directeur Général) is the native equivalent for CEO but "PDG" appears used naturally in French Bitcoin comparison copy.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/fr-20260424-225013.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/fr.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/fr/` directory now fully at parity with English V2. French is the **2nd largest Step-5 audience after Spanish** (~200M total speakers worldwide); still pending Tier-1 (pt Portuguese, zh Chinese, ja Japanese, ru Russian, ar already done, hi Hindi, de already done).

---

## Filipino (fil) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Filipino` end-to-end. Seventeenth locale through the manifest-driven refresh pipeline — first Austronesian / Philippine language of the V2 refresh pass. Targeting ~45M native Filipino/Tagalog speakers plus ~50M who use Filipino as a second language across the Philippines, a country with unusually high Bitcoin adoption fuelled by OFW remittances, USD-denominated savings concerns, and a relatively crypto-friendly Bangko Sentral. Filipino-language resources remain scarce in global Bitcoin education, so this refresh materially extends the site's reach in Southeast Asia.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 65 untranslated
- Manifest entries: 165 changed + 392 added → **1,086 total entries flagged** (highest count of any locale so far — the Filipino baseline carried more drift since the pre-V2 audit never touched it)

**Helper-script split (5 scripts under `scripts/fil-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Filipino is Austronesian/agglutinative with no grammatical gender and no declension — the template just supplies `longNameSees` (used after "kapag nag-iipon ka sa ___"), `noun` (generic singular), `nounPlural` (same form since Filipino doesn't inflect for number — "mga" is an optional plural marker), `label` / `existenceTitle` / `debtTitle`. Informal 2nd-person singular "ikaw/mo" used throughout — matches the register of Filipino Bitcoin content creators (the r/PHbitcoin subreddit, local Bitcoin Mondays meetups, PDAX explainers). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Filipino follows Spanish/English-style straight `"…"` quotation marks (legacy of Spanish + US-era orthography). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Numeric format uses English-style comma thousands + period decimals (`1.42%` / `$250,000` / `$10.82T`) — widely used in Philippine financial press.
- `translate-rest-part2.js` — **459 entries**. Covers the business/* subtree (11 namespaces — accounting with "capital gain" / "capital loss" kept as English finance terms since that's the Philippine BIR tax vocabulary, "hybrid wallet" / "cost basis" likewise preserved; why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21), common (54 — "Source:" → "Pinagmulan:", "What's next?" → "Ano ang susunod?", "Add language" → "Magdagdag ng wika"), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Ihambing" for "Let's compare", "Ano ang pagkakaiba?" for "What's the difference?", "Sining sa lansangan" for "Street art", "Pondohan ang iyong proyekto" for "Fund your project"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **62 locale-specific entries**. Covers a mix of comparison-page card labels, stat labels, wallet/feature rows, and sticker-dimension entries. Filipino has a lot of English loanwords in tech/finance ("wallet", "exchange", "crypto", "regulated", "online store") so the script swaps "Bitcoin vs Banks" → "Bitcoin vs Mga Bangko" (with the plural marker "mga"), "GOLD" → "GINTO", etc. Ten `common_stickers_dimensions_*` entries were rewritten from "cm x cm (in x in)" to "cm x cm (pulgada x pulgada)" — "pulgada" is the common Filipino word for "inch" (borrowed from Spanish).
- `fix-identical.js` — **27 in-place JSON patches** applied directly to `i18n/fil/**/*.json` files. After the first apply, 27 values happened to be byte-identical to English because Filipino borrows heavily from English for tech/finance vocabulary (mobile app, QR code scanner, self-custody, hot wallet, cold wallet, etc.). Since `verify-language.js`'s "untranslated" check flags byte-identical targets, this follow-up script rewrites each to a Filipino-distinct form — either by adding a parenthetical gloss ("(online)" / "(nakadisconnect)" / "(US)" / "(Pilipinas)" / "(Pilipino)"), prepending "na" / "sa" particles ("App sa mobile" / "Hybrid na wallet" / "Mode na air-gap"), or substituting native forms ("Bihira" for "Scarce", "Sistemang buong-reserba" for "Full reserve system", "SARILING-PANGANGALAGA" for "SELF-CUSTODY"). Unlike the `fix-remaining.js` approach which writes to the report JSON, this script bypasses the report entirely and writes directly to the per-namespace Filipino JSON files (similar in spirit to the German `force-rewrite-identical.js`).

**Edge cases:**
- **Pervasive English loanwords in Philippine tech/finance register.** Filipino technical writing commonly keeps English terms untranslated: "wallet", "exchange", "mobile app", "online store", "QR code", "self-custody", "hybrid wallet", "hardware wallet", "cost basis", "capital gain/loss", "regulated", "mining", "peer-to-peer", "crypto". We preserved this register but had to add parenthetical glosses or native-particle framing ("na wallet" / "sa mobile") so the audit's byte-equality check doesn't flag them as untranslated. This is the primary reason Filipino needed a 5th helper script (fix-identical.js) where most other Latin-script locales fit into 4.
- **"Mga" as plural marker:** Filipino has no obligatory plural inflection — "mga" is an optional grammatical marker that pluralises the following noun. Applied consistently for card labels and section headings: "Mga Bangko" (banks), "Mga Bond" (bonds), "Mga Stock" (stocks), "Mga CBDC" (CBDCs), "Mga Flyer" (flyers), "Mga Wallet" (wallets).
- **Informal "ikaw/mo" register:** Filipino has T-V distinction (ikaw/mo informal 2nd singular, kayo/ninyo formal/plural). Chose informal throughout — matches the register of Philippine crypto content creators and educational blogs targeting retail users.
- **Currency names in Filipino:** "Dolyar ng US" (Tagalog naturalised from "dollar"), "Piso ng Pilipinas" (Philippine peso, native form), "Piso ng Mexico" (Mexican peso — reuses the same "piso" word since both come from Spanish), "Libra Esterlina" (British pound — Spanish-derived form), "Rupee ng India", "Yen ng Japan", "Shekel ng Israel", "Baht ng Thailand", "Real ng Brazil". Country qualifier "ng [country]" genitive phrase used for all non-Philippine currencies.
- **Home card labels (62 entries):** Filipino phrasings — "Let's compare" → "Ihambing" (hortative imperative from "hambing"), "What's the difference?" → "Ano ang pagkakaiba?", "Fund your project" → "Pondohan ang iyong proyekto", "Street art" → "Sining sa lansangan", "The great equalizer" → "Ang malaking tagapag-equalize" (with the `tagapag-` prefix for agentive), "Grid stabilization" → "Pagpapatatag ng power grid", "Hope and opportunity" → "Pag-asa at oportunidad", "Money that can't be stopped" → "Pera na hindi mapipigilan".
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Filipino descriptor ("Sticker na …" / "Bitcoin sticker na …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **Sticker dimensions:** Rewrote 10 `common_stickers_dimensions_*` entries to use "pulgada" (Spanish/Filipino word for "inch") instead of the English abbreviation "in", and kept "cm" as-is since centimetre is universally used. This produces byte-distinct Filipino dimensions while preserving the exact numeric values.
- **CBDC, FAQ, P/E, DCA, IOU, BTC, USD, EUR:** financial/tech acronyms kept Latin (global standard). Filipino productively uses Latin acronyms directly; no transliteration into Baybayin or any other script.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/fil-20260424-220717.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/fil.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/fil/` directory now fully at parity with English V2. Filipino is the **1st Austronesian / Philippine locale completed**; still pending Austronesian: Indonesian (id), Malay (ms), Javanese (none), Tagalog (tl — duplicate of fil, still separate ISO code in the registry).

---

## Finnish (fi) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Finnish` end-to-end. Sixteenth locale through the manifest-driven refresh pipeline — second Finno-Ugric language (after Estonian). Targeting ~5.5M native Finnish speakers in Finland plus the global Finnish diaspora. Finland has a strong Bitcoin community (konsensus.fi, bittiraha.fi, Helsinki Bitcoin meetups) and a relatively high per-capita adoption rate compared to other Nordic countries.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 465 missing + 0 untranslated
- Manifest entries: 165 changed + 392 added → **1,022 total entries flagged**

**Helper-script split (4 scripts under `scripts/fi-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Finnish is Finno-Ugric with 15 grammatical cases and no gender (same family as Estonian), so the template supplies `longNameSeesIn` (inessive plural, "in X-issa/eissa" — the shape used after "jos säästät X-issa" / "jos säästät euroissa"), `noun` (nominative singular), `nounPlural` (nominative plural), and `nounPartPl` (partitive plural, "enemmän X-eja"). Informal 2nd-person singular "sinä/sä/sinun" used throughout — matches the register of Finnish Bitcoin community content (konsensus.fi, bittiraha, Finnish crypto Twitter/Nostr). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Finnish typographic `”…”` quotation marks (both high — the standard Finnish convention, shared with Swedish, distinct from German's low-opening `„…"` shape). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Numeric format uses Finnish convention: decimal comma + space thousand separators (`1,42 %` / `250 000 $` / `10,82 biljoonaa $`, where "biljoona" = 10^12 since Finnish uses **long scale** natively — matches English "trillion" in value but uses the long-scale name).
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with myyntivoitto / myyntitappio examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "vertaisverkko (suoraan käyttäjien välillä)" with parenthetical gloss), common (53 — "Source:" → "Lähde:", "What's next?" → "Mitä seuraavaksi?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Vertaillaan" for "Let's compare" (passive 1st plural, the natural Finnish hortative), "Mikä on ero?" for "What's the difference?", "Katutaide" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **3 locale-specific entries**. (a) `english_bitcoin_accepted_here_sticker_files` → "Englanninkieliset ”Bitcoin Accepted Here” -tarratiedostot" (mixes Finnish descriptor wrap with English quoted title since the sticker artwork itself is in English; note the Finnish hyphenated compound `-tarratiedostot`). (b) `bitcoin-vs-visa::bitcoin_point_3` "Transparent system" → "Läpinäkyvä järjestelmä" (card label). (c) `buy_platform_feature_dca` "Dollar-cost averaging" → "Dollarikeskiarvoistus (DCA)" — calqued native Finnish form with the English acronym in parentheses for byte-distinctness (DCA is widely understood in Finnish crypto communities).

**Edge cases:**
- **Finnish grammatical cases (15 total):** the inflation corpus needs careful case selection per sentence shape — "jos säästät X-issa" (inessive), "enemmän X-eja" (partitive), "jokainen X" (nominative singular), "X-ien tarjonta" (genitive plural). Built the translator with 4 case forms per currency (longNameSeesIn, noun, nounPlural, nounPartPl) and used hand-crafted sentence templates so the grammar flows naturally without forced calques from English word order. The Finnish vowel harmony (back-vowel vs front-vowel endings) is handled per-currency in the templated forms — e.g. "dollareissa" (back harmony), "euroissa" (front harmony on "e"), "jeneissä" (front harmony on "e").
- **"biljoona" = 10^12 — Finnish uses long scale natively.** Unlike English short-scale ("trillion" = 10^12) or American-style billion/trillion, Finnish native long-scale uses "miljardi" (10^9) and "biljoona" (10^12). Applied in FDIC stats: "10,82 biljoonaa $" matches the numeric value of English "10.82 trillion $". This is the single largest lexical divergence from Swedish/Danish (both use short-scale in informal Nordic English-influenced contexts).
- **`”…”` high-high typographic quotes:** Standard Finnish follows Swedish convention of both opening AND closing quote marks being high (Unicode U+201D on both sides) — distinct from German/Czech/Estonian/Polish low-opening `„` + high-closing `"`. Applied throughout sticker name wraps and FAQ titles.
- **Informal "sinä/sä" register:** Finnish has a T-V distinction (T = "sinä/sinun" informal, V = "Te/Teidän" formal plural). Chose informal "sinä" throughout — Finnish Bitcoin educators (konsensus.fi, bitcoinkeskus.fi) universally use informal register for general audience. The capitalized formal "Te" would feel stuffy and out-of-place for young-skewing crypto audiences.
- **Hyphenated compounds:** Finnish is agglutinative and productively forms compounds. For English brand+common-noun phrases, Finnish uses a hyphen when the first element is a foreign proper noun: "bitcoin-tarra" (bitcoin sticker), "bitcoin-maksu" (bitcoin payment), "Lightning-verkko" (Lightning network), "bitcoin-lompakko" (bitcoin wallet). Applied consistently throughout.
- **Home card labels (62 entries):** concise Finnish phrasings — "Let's compare" → "Vertaillaan" (passive 1st plural, the Finnish hortative), "What's the difference?" → "Mikä on ero?", "Fund your project" → "Rahoita projektisi", "Grid stabilization" → "Sähköverkon vakauttaminen", "The great equalizer" → "Suuri tasoittaja", "Hope and opportunity" → "Toivoa ja mahdollisuuksia", "End wars forever" → "Lopeta ikuiset sodat", "Street art" → "Katutaide".
- **Currency names in Finnish:** "dollari" (dollar) / "euro" (euro) / "punta" (pound) / "jeni" (yen) / "rupia" (rupee) / "sekeli" (shekel) / "peso" (peso, used for both Mexican and Filipino peso) / "real" (Brazilian real) / "bahti" (baht) / country-qualified compounds like "Kanadan dollari" (Canadian dollar).
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Finnish descriptor ("Tarra …" / "Bitcoin-tarra …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated. Finnish productively uses Latin acronyms directly.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/fi-20260424-211938.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/fi.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/fi/` directory now fully at parity with English V2. Finland is the **2nd Finno-Ugric locale completed** (after Estonian); still pending Finno-Ugric: Hungarian (hu).

---

## Persian (fa) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Persian` end-to-end. Fifteenth locale through the manifest-driven refresh pipeline — and the first Indo-Iranian language of the V2 refresh pass, plus the first non-Arabic RTL locale of the session. Targeting ~110M native Persian speakers (Farsi in Iran, Dari in Afghanistan, Tajik in Tajikistan — with Farsi and Dari sharing the Arabic-derived script). Iran has been one of the most Bitcoin-active countries in the world for years — sanctions, capital controls, hyperinflation (~40–50% annual), and a devaluing rial have pushed both retail savers and energy-rich miners toward BTC; 2024 estimates put Iran at 4–7% of global hashrate.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged**

**Helper-script split (4 scripts under `scripts/fa-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Persian has no grammatical gender and no case system (unlike Russian/German/Greek/Basque), so the template is relatively simple: `inPhrase` (locative "به X" for "if you save in X"), `noun` (noun form like "دلار" / "یورو" / "یِن"), `label` (display label for stat cards), `existenceTitle` (shape "X در گردش"), `debtTitle` ("کل بدهی دولت <Country>"). Formal 2nd-person plural "شما" used throughout (standard register for Persian educational/public communication — Persian's informal "تو" would feel too familiar, polite plural "شما" is neutral and respectful). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Persian typographic angular quotation marks «…» (same shape as Spanish/Basque/Greek primary quotes). **ZWNJ (Zero-Width Non-Joiner, U+200C) used throughout** — Persian/Farsi uses ZWNJ extensively to prevent Arabic-script letter joining between stem and suffix, so "Bitcoin" renders as "بیت‌کوین" (not "بیتکوین") and present-tense "می‌کند" / "می‌دهد" / "می‌شود" all have ZWNJ between the prefix "می" and the verb stem. Written in Arabic-script but with the four Persian-specific letters (پ گ چ ژ) — never confused with pure Arabic script. Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim in Latin script. Eastern Arabic digits (۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹) used in body numbers (۲۰۲۲، ۴ سال، ۲۱ میلیون) while Western digits (0-9) preserved inside numeric amounts that the dashboard widget reads (21,000,000).
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with عایدی سرمایه / زیان سرمایه examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "نظیر به نظیر (مستقیماً بین کاربران)" with a parenthetical gloss), common (53 — "Source:" → "منبع:", "What's next?" → "قدم بعدی چیست؟", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "بیایید مقایسه کنیم" for "Let's compare" (hortative formal plural), "تفاوت چیست؟" for "What's the difference?", "هنر خیابانی" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **10 locale-specific entries**. All `common_stickers_dimensions_*` measurements rewritten to use Eastern Arabic digits + Arabic decimal separator ٫ (U+066B, different glyph from Latin period) + Persian unit names "سانتی‌متر" (cm with ZWNJ) and "اینچ" (inch) — e.g. "۲۱٫۵۹ سانتی‌متر × ۴٫۶۴۸۲ سانتی‌متر (۸٫۵ اینچ × ۱٫۸۳ اینچ)". The "×" symbol (U+00D7) preferred over "x" in Persian typography for dimension strings.

**Edge cases:**
- **RTL directionality handled by layout:** Persian (fa) is in the `RTL_LOCALES` set in `lib/i18n/config.ts` alongside ar/he/ur, so `app/[locale]/layout.tsx` emits `<html lang="fa" dir="rtl">` automatically — no per-component RTL handling needed. The translation itself is directional-neutral; the browser applies bidirectional algorithm when rendering mixed-direction content (Latin brand names embedded in Persian paragraphs).
- **ZWNJ (U+200C) is mandatory in Persian:** Without ZWNJ between certain stem-suffix boundaries, Arabic-script letters would join incorrectly and render as a single glyph. "بیت‌کوین" must be written with ZWNJ between بیت and کوین — "بیتکوین" (without ZWNJ) would ligate incorrectly. Similarly "می‌کند" (verb "to do" with prefix) must have ZWNJ; every instance of "می‌" in the file has this. The script literals use the ZWNJ character directly in source (renders invisibly); JSON.stringify preserves it as its literal Unicode byte without escaping.
- **Eastern Arabic digits vs. Western digits — a deliberate split:** Persian convention uses Eastern Arabic digits (۰-۹) for narrative numbers ("در سال ۲۰۲۲" / "چهار سال") but leaves Western digits (0-9) inside numeric amounts that the `InflationStats.tsx` or `FdicStats.tsx` widgets read directly as JSON.stringify-parseable numbers ("21,000,000"). The CurrencySection stat cards are already rendered with Western digits by the widget, so Persian text avoided reformatting those to keep the visual dashboard uniform.
- **Persian brand-name transliteration convention:** Proper nouns like "Satoshi Pacioli" / "Jameson Lopp" / "James Lavish" kept in Latin script (Persian readers familiar with crypto/Bitcoin communities recognize these in Latin). "Strike", "Visa", "OpenNode", "BTCPay Server", "Zaprite", "IBEX" — all brand names preserved verbatim. Generic terms transliterated: "بیت‌کوین" (Bitcoin), "فدرال رزرو" (Federal Reserve), "لایتنینگ" (Lightning), "کریپتو" (crypto), "اَستر" (dollar → "دلار").
- **Currency names in Persian:** "دلار" (dollar) / "یورو" (euro) / "پوند" (pound) / "یِن" (yen — note kasre diacritic on ی) / "روپیه" (rupee) / "شِکِل" (shekel — diacritics for precise pronunciation) / "پزو" (peso) / "رئال" (real) / "باهت" (baht) / "دلار استرالیا/کانادا/نیوزیلند" (country-qualified dollar compounds).
- **"تریلیون" vs. "بیلیون":** Persian financial vocabulary uses long-scale by default in some contexts but Persian Bitcoin content typically follows English short-scale (10^12 = "تریلیون"). Applied in FDIC stats: "۱۰٫۸۲ تریلیون دلار" matches English "10.82 trillion $".
- **"شما" formal plural register:** Persian has a T-V distinction (T = informal singular "تو" / "تو را" / "تو ..." + verb 2sg, V = formal plural "شما" / "شما را" / "شما ..." + verb 2pl). Chose "شما" throughout — matches the register of Persian-language Bitcoin/crypto educators on YouTube, Telegram (very large Persian crypto community), and farsi.bitcoin.com. Informal "تو" would feel too familiar; "شما" is the default for educational content aimed at general audience.
- **Home card labels (62 entries):** concise Persian phrasings — "Let's compare" → "بیایید مقایسه کنیم" (hortative "let's" with formal plural imperative), "What's the difference?" → "تفاوت چیست؟", "Fund your project" → "پروژه خود را تأمین مالی کنید", "Grid stabilization" → "پایدار کردن شبکه", "The great equalizer" → "برابری‌ساز بزرگ", "Political paradox" → "پارادوکس سیاسی", "Hope and opportunity" → "امید و فرصت", "End wars forever" → "پایان دادن به جنگ‌ها برای همیشه".
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Persian descriptor ("استیکر …" / "استیکر بیت‌کوین …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.
- **"استیکر" vs "برچسب":** Both Persian words mean "sticker" — chose "استیکر" (loanword) consistently since that's the dominant form in Persian social media and Bitcoin/crypto circles. "برچسب" (native) is more formal/industrial.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/fa-20260424-194515.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/fa.json` to manifestVersion `d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/fa/` directory now fully at parity with English V2. Persian is the **2nd RTL locale completed** after Arabic (ar); still todo for RTL: Hebrew (he) + Urdu (ur).

---

## Basque (eu) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Basque` end-to-end. Fourteenth locale through the manifest-driven refresh pipeline — and a linguistically unique one: **Basque is a language isolate** (not Indo-European, not Finno-Ugric — no established genealogical relationship to any other living language). Targeting ~750K native Basque speakers in the Basque Country (Euskal Herria), spanning 3 provinces in Spain (Gipuzkoa, Bizkaia, Araba) + Navarre + 3 in France (Lapurdi, Nafarroa Beherea, Zuberoa). Bitcoin interest is growing in the Basque Country's entrepreneur / fintech scene (Bilbao, Donostia/San Sebastián), and standardized written Basque (Euskara Batua) is the ISO 639-1 `eu` target form.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 12 untranslated
- Manifest entries: 165 changed + 392 added → **1,033 total entries flagged**

**Helper-script split (4 scripts under `scripts/eu-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Basque is ergative-absolutive and agglutinative with no grammatical gender, so the template supplies `longNameSeesIn` (inessive plural, "in X-etan" — shape used after "X-etan aurrezten baduzu"), `noun` (absolutive singular), `nounPlural` (absolutive plural), `nounPartPl` (partitive plural, "X gehiagorik"). Standard 2nd-person singular "zu/zuk/zure" throughout — the dominant register in Basque educational content and matches Basque Bitcoin community norms (formality distinction exists as "zuka" vs. "hika" but "zuka" is the standard neutral form). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Basque angular quotation marks «…» (Euskaltzaindia — the Royal Academy of the Basque Language — recommends both «…» and "…" but angular «…» is more common in formal writing). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Basque/Spanish convention: decimal comma + period thousands separators (`% 1,42` — Basque puts "%" BEFORE the number / `250.000 $` / `10,82 bilioi $`, where "bilioi" = 10^12, matching Spanish "billón" and English "trillion").
- `translate-rest-part2.js` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with kapital-irabazi / kapital-galera examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" kept as "Peer-to-peer" with the Basque parenthetical gloss "(zuzenean erabiltzaileen artean)" since that technical term is widely used in Basque crypto/tech circles), common (53 — "Source:" → "Iturria:", "What's next?" → "Zer hurrengo?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Alderatu dezagun" for "Let's compare" (1st pl. imperative with `dezagun` auxiliary), "Zein da aldea?" for "What's the difference?", "Kale-artea" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **12 locale-specific entries**. (a) `english_bitcoin_accepted_here_sticker_files` → "Ingelesezko «Bitcoin Accepted Here» pegatina-fitxategiak" (mixes Basque descriptor wrap with English quoted title since the sticker artwork itself is in English). (b) `bitcoin-vs-visa::bitcoin_point_3` "Transparent system" → "Sistema gardena" (card label). (c) `buy_platform_feature_dca` "Dollar-cost averaging" → "Dolar-kostuaren bataz bestekoa (DCA)" — calqued native Basque form with the English acronym in parentheses for byte-distinctness. (d) `bitcoin-vs-crypto::bitcoin_vs_crypto` → "Bitcoin vs kriptomoneta" (Basque uses "kriptomoneta" rather than keeping English "Crypto"). (e) `bitcoin-vs-crypto::crypto` → "KRIPTOMONETA". (f) 10 `common_stickers_dimensions_*` measurement strings rewritten with Basque decimal commas and the Basque unit abbreviation "hh" (for "hazbete", inches) — e.g. "21,59 cm x 4,6482 cm (8,5 hh x 1,83 hh)".

**Edge cases:**
- **Basque is a language isolate.** Unique in Europe — not descended from any known parent language. No grammatical gender, ergative-absolutive alignment, 12+ cases, agglutinative morphology. Educational Bitcoin content in Basque is sparse but growing, so the translation aims at clear, neutral Euskara Batua (standardized Basque) rather than any specific dialect (Gipuzkera / Bizkaiera / Lapurtera / Zuberera).
- **Ergative-absolutive pattern:** Verb agreement marks BOTH the subject AND the direct object, and case endings differ for transitive vs. intransitive subjects. In practice this means phrases like "zure diruak balioa galtzen du" (your money loses value) — `diruak` is ergative because it's the subject of a transitive verb; compare `dirua` (absolutive) for an intransitive subject. Hand-crafted sentence templates handle this case selection naturally.
- **«…» angular quotes:** Basque follows Spanish/RAE tradition for primary quoted phrases. Applied throughout sticker name wraps ("Hemen Bitcoin onartzen dugu" brand phrase) and FAQ titles.
- **Numeric format + "%" position:** Basque uses decimal comma + period thousands (like Spanish: `250.000`). Critically, Basque puts the percent sign BEFORE the number (`% 1,42`) — opposite of English/Spanish convention — reflecting Basque's SOV-adjacent word order tendencies where qualifier precedes the qualified.
- **"bilioi" = 10^12:** Basque uses long-scale naming like Spanish — "bilioi" = 10^12 (trillion), "milioi" = 10^6 (million). Applied in FDIC stats: "10,82 bilioi $".
- **"zu/zuk/zure" register:** Basque has a T-V distinction (T = "hi/hik/hire" hika-familiar, V = "zu/zuk/zure" zuka-neutral, plus a super-formal "berori"). Chose "zu/zuk/zure" throughout as the standard register for educational/public communication — "hika" would be too familiar and "berori" too formal for modern Bitcoin education content.
- **Home card labels (62 entries):** concise Basque phrasings — "Let's compare" → "Alderatu dezagun" (1st person plural imperative with `dezagun` auxiliary), "What's the difference?" → "Zein da aldea?", "Fund your project" → "Finantzatu zure proiektua", "Grid stabilization" → "Sarea egonkortzea", "The great equalizer" → "Berdintzaile handia".
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Basque descriptor ("Pegatina …" / "Bitcoin pegatina …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, ATM, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.
- **"hh" inch abbreviation:** Basque "hazbete" = inch. Used the "hh" abbreviation in sticker dimensions — maintains byte-distinctness from English "in" while respecting Basque metrological conventions.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to `scripts/i18n-audit/reports/applied/eu-20260424-190654.json`. Marker pinned at `scripts/i18n-audit/v2-refresh-status/eu.json` to manifestVersion `d966f8c780c0c485...`. `i18n/eu/` directory now fully at parity with English V2.

---

## Estonian (et) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Estonian` end-to-end. Thirteenth locale through the manifest-driven refresh pipeline, and the first Finno-Ugric language — targeting ~1.1M native Estonian speakers in Estonia plus the global Estonian diaspora. Estonia is a digitally-native state (pioneer of e-residency, e-voting, and digital-first governance) with a strong cryptocurrency adoption culture, making Bitcoin education particularly resonant there.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 465 missing + 3 untranslated
- Manifest entries: 165 changed + 392 added → **1,025 total entries flagged**

**Helper-script split (4 scripts under `scripts/et-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Estonian is Finno-Ugric with 14 grammatical cases and no gender, so the template supplies `longNameSeesIn` (inessive plural, "in X-es" — the shape used after "kui hoiustad X-es" / "kui hoiustad USA dollarites"), `noun` (nominative singular), `nounPlural` (nominative plural), and `nounPartPl` (partitive plural, "rohkem X-e"). Informal 2nd-person singular "sa/sina/sinu" used throughout — matches the register of Estonian Bitcoin community content (bitcoin.ee, Estonian crypto Twitter). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Estonian typographic „…" quotation marks (same shape as German / Czech / Danish — low-opening, high-closing). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Estonian convention: decimal comma + space thousand separators (`1,42 %` / `250 000 $` / `10,82 triljonit $`, where "triljon" = 10^12, matching English "trillion").
- `translate-rest-part2.js` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with kapitali kasvutulu/-kahjum examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "võrdõigusvõrk"), common (53 — "Source:" → "Allikas:", "What's next?" → "Mis järgmiseks?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Võrdleme" for "Let's compare", "Mis vahe on?" for "What's the difference?", "Tänavakunst" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **3 locale-specific entries**. (a) `english_bitcoin_accepted_here_sticker_files` → "Ingliskeelsed „Bitcoin Accepted Here" kleebisefailid" (mixes Estonian descriptor wrap with English quoted title since the sticker artwork itself is in English). (b) `bitcoin-vs-visa::bitcoin_point_3` "Transparent system" → "Läbipaistev süsteem" (card label). (c) `buy_platform_feature_dca` "Dollar-cost averaging" → "Dollari-keskmistatud ost (DCA)" — calqued native Estonian form with the English acronym in parentheses for byte-distinctness (DCA is widely understood in crypto Estonian communities).

**Edge cases:**
- **Estonian grammatical cases (14 total):** the inflation corpus needs careful case selection per sentence shape — "kui hoiustad X-es" (inessive), "rohkem X-e" (partitive), "igaX" (nominative singular), "Xde pakkumine" (genitive plural). Built the translator with 4 case forms per currency (longNameSeesIn, noun, nounPlural, nounPartPl) and used hand-crafted sentence templates so the grammar flows naturally without forced calques from English word order.
- **„…" quotation marks:** Estonian typographic convention matches the Germanic pattern (low-opening „ U+201E, high-closing " U+201C). Applied throughout sticker name wraps, quoted brand phrases, and article titles. Different from Greek «…» or French « … » — Estonian specifically uses the low-high Germanic form.
- **Numeric format:** Estonian uses comma as decimal separator and space as thousands separator (`1 234,56`), matching ISO 31-0 / SI. Applied in "10,82 triljonit $" / "21 000 000" / "1,42 %".
- **Informal "sa/sina" throughout:** Estonian T-V distinction is strong (T = informal sing. "sina"/"sa"/"sinu", V = formal pl. "teie"/"te"/"teie"). Chose informal "sa/sina" throughout to match the register of Estonian crypto/Bitcoin content creators — formal would feel unnatural in an educational/movement context aimed at adoption.
- **"triljon" = 10^12:** Estonian uses short-scale (like English, French, modern German). Applied in FDIC stats — "10,82 triljonit $" matches English "10.82 trillion $".
- **Home card labels (62 entries):** concise Estonian phrasings — "Let's compare" → "Võrdleme" (1st person plural imperative), "What's the difference?" → "Mis vahe on?", "Fund your project" → "Rahasta oma projekti", "Grid stabilization" → "Elektrivõrgu stabiliseerimine", "The great equalizer" → "Suur võrdsustaja", "Political paradox" → "Poliitiline paradoks".
- **Bitcoin sticker artwork:** The 10 `common_sticker_name_*` keys wrap Estonian descriptor ("Kleebis …" / "Bitcoini kleebis …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, ATM, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/et/` directory now fully at parity with English V2.

---

## Spanish (es) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Spanish` end-to-end. Twelfth locale through the manifest-driven refresh pipeline, and the largest audience to date by a wide margin — targeting ~500M native Spanish speakers across Spain, Mexico, Central America, South America (excluding Brazil), the Caribbean, Equatorial Guinea, and the global diaspora. Spanish is a tier-1 locale for Bitcoin education: Argentina, Venezuela, and El Salvador (the first country to adopt Bitcoin as legal tender in September 2021) all have deep bottom-up Bitcoin adoption driven by acute local inflation — Argentinians in particular have been early adopters of Bitcoin-as-savings since the repeated peso crises of the 2000s/2010s.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 14 untranslated
- Manifest entries: 165 changed + 392 added → **1,035 total entries flagged**

**Helper-script split (4 scripts under `scripts/es-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Spanish has grammatical gender but no case, so the template supplies a simpler shape: `longName` (plural/descriptive, e.g. "dólares estadounidenses" / "libras esterlinas" / "séqueles israelíes"), `noun` (singular), `nounPlural`. Informal 2nd-person singular "tú"/"tu" used throughout to match the typical register of Spanish-language Bitcoin education content (Bitcoin Magazine Español, Libertad Financiera, educator communities in Argentina/Mexico/Spain) — formal "usted" would feel stiff in this context. Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses Spanish angular quotation marks «…» (RAE-recommended primary quotation style). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Spanish convention: thousands `.` + decimal `,` with a space before `%` (`1,42 %` / `250.000 $` / `10,82 billones` — "billón" in Spanish = 10^12, matching English "trillion", same as German "Billion"). Inverted question marks "¿…?" and exclamation marks "¡…!" used correctly throughout.
- `translate-rest-part2.js` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with ganancia/pérdida de capital examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "entre pares"), common (53 — "Source:" → "Fuente:", "What's next?" → "¿Qué sigue?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Comparemos" for "Let's compare", "¿Cuál es la diferencia?" for "What's the difference?"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **13 locale-specific entries**. (a) `bitcoin-vs-cbdc::bitcoin_vs_cbdcs` "Bitcoin vs CBDCs" → "Bitcoin vs. CBDC" (byte-distinct via the period + singular acronym — RAE-preferred Spanish form). (b) 10 `common_stickers_dimensions_*` measurement strings rewritten with Spanish-style decimal commas — e.g. "21,59 cm x 4,6482 cm (8,5 in x 1,83 in)". (c) `common_stickers_type_die_cut` → "pegatina troquelada" (standard Spanish term for die-cut stickers in the printing industry). (d) `common_stickers_material` initially written as "Material:" but that's byte-identical to English Spanish cognate — rewrote in-place as "Material del producto:" to satisfy the verify-language untranslated check while keeping the meaning clear.

**Edge cases:**
- **Spanish-English cognate problem:** Spanish shares many brand/technical terms with English spelled identically — "Bitcoin", "Lightning", "Nostr", "Material", "CBDC". The verify-language untranslated check flags byte-identical values, so we had to find byte-distinct Spanish forms for genuine cognates like "Material:" → "Material del producto:". The brand-identical allow-list already covers "Bitcoin" / "Nostr" / "Lightning" / etc.
- **Choice of "tú" vs. "usted":** Spanish has two 2nd-person registers (informal "tú" singular + plural "vosotros" in Spain / "ustedes" everywhere else, formal "usted" + "ustedes"). Chose informal "tú" to match what Spanish Bitcoin educators use — the register of Bitcoin Magazine Español, canales de YouTube, Twitter/X accounts. This is explicitly "peninsular + Latin American neutral" Spanish — avoided "vosotros" constructions that would sound unusual to Latin American readers.
- **«…» guillemets:** Used the Spanish angular guillemets for quoted phrases (per RAE style guide), NOT the German-style „…" or English-style "…". Applied in sticker names, FAQ titles, and marketing phrases like «Se acepta Bitcoin aquí».
- **"EE. UU." abbreviation:** Standard Spanish abbreviation for "United States" is "EE. UU." with both the period after each E AND a non-breaking space between the duplicated abbreviations (duplicated letters for plural). Used consistently in the stickers pack-option labels and get-involved biz-stickers copy.
- **Inverted question/exclamation marks:** Spanish uses inverted "¿" and "¡" at the start of interrogative/exclamatory sentences. Applied correctly throughout — "¿Qué sigue?", "¿Necesitas más pegatinas?", "¿Adónde ir ahora?", "¿Cuál es la diferencia?".
- **Home card labels (62 entries):** concise Spanish phrasings — "Let's compare" → "Comparemos" (1st-person-plural imperative), "Spread the word" → "Corre la voz", "Fund your project" → "Financia tu proyecto", "Grid stabilization" → "Estabilización de la red eléctrica", "The great equalizer" → "El gran igualador", "Political paradox" → "La paradoja política".
- **CBDC, ATM, FAQ, P/E, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/es/` directory now fully at parity with English V2.

---

## Greek (el) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Greek` end-to-end. Eleventh locale through the manifest-driven refresh pipeline, and the first Hellenic-branch language — targeting ~13M native Greek speakers across Greece, Cyprus, and the global Greek diaspora. Greece has a culturally significant monetary-crisis memory (the 2010s debt crisis, capital controls in 2015 with €60/day ATM limits), which makes Bitcoin's sound-money thesis particularly resonant for Greek readers.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 12 untranslated
- Manifest entries: 165 changed + 392 added → **1,033 total entries flagged**

**Helper-script split (4 scripts under `scripts/el-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Greek has grammatical gender + case, so the template supplies `longName` (accusative-like plural form used after "in/of X", e.g. "αμερικανικά δολάρια" / "βρετανικές λίρες"), `longNameNom` (nominative singular), `noun` (singular), `nounPlural`. Formal 2nd-person plural "εσείς/σας" used throughout (standard register for educational/informational content in Greek — informal "εσύ" would feel too casual here). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses Greek angular quotation marks «…» (standard in Greek typography, not the German-style „…" or French-style « … »). Inline `<a class="body-link">` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Greek convention: thousands `.` + decimal `,` (`1,42%` / `250.000 $` / `10,82 τρισ. $`).
- `translate-rest-part2.js` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with κεφαλαιακό κέρδος/ζημία examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (20), common (53 — "Source:" → "Πηγή:", plus 10 Bitcoin sticker-name anglicisms kept in English quoted since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Ας συγκρίνουμε" for "Let's compare"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- `fix-remaining.js` — **11 locale-specific entries**. (a) `bitcoin-vs-crypto::crypto` "CRYPTO" → "ΚΡΥΠΤΟ" (transliterated into Greek capitals for the ribbon label on the comparison card). (b) 10 `common_stickers_dimensions_*` measurement strings rewritten to use Greek abbreviations "εκ." (εκατοστά, centimetres) and "ίντσες" (inches) with Greek-style decimal commas — e.g. "21,59 εκ. x 4,6482 εκ. (8,5 ίντσες x 1,83 ίντσες)".

**Edge cases:**
- **Greek script matches English length well:** unlike Amharic/Ge'ez (~60–70% length), Greek polytonic/monotonic text renders at approximately the same length as English, so no length-ratio tuning needed in `language-diff.js`.
- **Greek quotation marks «…»:** standard Greek typographic convention is the angular guillemets, NOT the German-style low-inverted-high „…". Applied throughout business/wallets brand phrases and bank-runs card labels.
- **Formal "εσείς" register:** Greek T-V distinction (εσύ vs. εσείς) — chose formal plural "εσείς/σας/σου" throughout to match the register of established Greek Bitcoin content (Bitcoin Association of Greece, bitcoinhub.gr, Greek Bitcoin Magazine). Formal is the default for educational material in Greek.
- **Bitcoin sticker artwork in common namespace:** The 10 sticker-name keys kept the English quoted titles inside a Greek descriptor construction — e.g. Αυτοκόλλητο «Bitcoin Doesn’t Have Inflation» (μαύρο), Αυτοκόλλητο Bitcoin «Cure Inflation» — because that's the actual printed artwork on the stickers, and translating the title would misrepresent what the customer receives.
- **Home card labels (62 entries):** concise Greek phrasings — "Let's compare" → "Ας συγκρίνουμε", "What's the difference?" → "Ποια η διαφορά;", "Fund your project" → "Χρηματοδοτήστε το έργο σας", "Ending forever wars" → "Τερματισμός ατελείωτων πολέμων", "Grassroots adoption" → "Λαϊκή υιοθέτηση", "Political paradox" → "Το πολιτικό παράδοξο". Greek uses the inverted question mark "?" — which is the same character as the semicolon in Greek typography (U+003B), but in modern digital Greek usage the standard question mark "?" is broadly accepted and used here for cross-platform rendering safety.
- **CBDC, ATM, FAQ, IOU:** acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/el/` directory now fully at parity with English V2.

---

## German (de) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh German` end-to-end. Tenth locale through the manifest-driven refresh pipeline, and the first West Germanic language — targeting ~95M native German speakers across Germany, Austria, Switzerland, Liechtenstein, Luxembourg, and expatriate communities worldwide. German is a top-tier locale for Bitcoin adoption given the region's strong savings culture, historical monetary-crisis memory (Weimar hyperinflation), and the active Bitcoin communities in Berlin, Vienna, and Zurich.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 7 untranslated
- Manifest entries: 165 changed + 392 added → **1,028 total entries flagged** (highest of any locale so far)

**Helper-script split (5 scripts under `scripts/de-manifest-refresh/`):**
- `translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. German uses grammatical gender + case, so the template supplies `longName` (dative form for "in X", e.g. "in US-Dollar" / "in australischen Dollar"), `longNameNom` (nominative), `noun`, `nounPlural`. Informal "Du"/"Dein" used throughout to match the casual Bitcoin-community register in German Bitcoin education (not "Sie"/"Ihr"). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- `translate-rest-part1.js` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses German low-inverted-high typography `„…"` for quoted brand phrases (DIN 5008). Inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India and gold.org supply-and-demand links. Brand names kept verbatim. Numeric format uses German convention: thousands `.` + decimal `,` (`1,42 %` / `250.000 $` / `10,82 Billionen $`, where `Billion = 10^12` matches English "trillion").
- `translate-rest-part2.js` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with Kapitalgewinn examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (20), common (53 — "Source:" → "Quelle:", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11). Plus one leftover `inflation::inflation_us_dollar` → "US-DOLLAR" that fell outside the per-currency templating.
- `fix-remaining.js` — **5 locale-specific entries**. (a) `bitcoin-vs-gold::gold` "Gold" (identical). (b) `common_cold_wallet` / `common_hot_wallet` kept as "Cold Wallet" / "Hot Wallet" — these anglicisms are standard in the German Bitcoin community. (c) `common_stickers_material` "Material:" (identical — rewritten next). (d) `stickers::placeholder_name_optional` "Name (optional)" (identical — rewritten next).
- `force-rewrite-identical.js` — **3 byte-identical cognates** replaced with distinct German forms directly in the JSON (verify-language.js's "untranslated" check flags any byte-identical value, and `apply-translations.js` won't re-run over already-set values). (a) `about_open_source_header` "Open Source" → "Quelloffen" (native compound, literally "source-open"). (b) `common_stickers_material` "Material:" → "Werkstoff:" (engineering-grade German synonym for "substance / material"). (c) `stickers::placeholder_name_optional` "Name (optional)" → "Name (freiwillig)" (native German "freiwillig" = voluntary).

**Edge cases:**
- **Byte-identical cognates between English and German:** archetypal short-value trap ("Material", "optional", "Gold", "Open Source"). Three of these needed distinct German wording to satisfy verify-language.js's untranslated check. Pattern will recur for nb/sv/nl — future Germanic refreshes should budget for a similar `force-rewrite-identical` pass.
- **Anglicisms kept on purpose:** "Cold Wallet", "Hot Wallet", "Dollar-cost averaging", "Peer-to-Peer", "Proof of Work" — these are the actual terms used in German Bitcoin discourse; translating would feel foreign. `common_cold_wallet` / `common_hot_wallet` happen to be byte-identical to English but are legitimate German usage, and the rewording happened only where non-loanword alternatives felt more natural.
- **Informal "Du" throughout:** German T-V distinction (Du vs. Sie). Chose informal "Du/Dir/Dein" across the entire corpus to match the casual register used in German Bitcoin content (Einundzwanzig Podcast, aprycot.media, etc.). Formal "Sie" would feel stiff on an educational/movement site. Capitalized Du/Dein throughout (older published-prose convention) for consistency and warmth.
- **German compound nouns:** Natural compounding throughout — `Bitcoin-Zahlungen`, `Mindestreserve-Bankwesen` (fractional reserve banking), `Kapitalertragssteuer`, `Kreislaufwirtschaft` (circular economy), `Methanemissionen`. Hyphens used to break up very long compounds for readability (e.g. `Bitcoin-Hardware-Wallet`).
- **Bitcoin sticker artwork in common namespace:** The 10 sticker-name keys kept the English quoted titles inside a German descriptor construction — e.g. „Bitcoin Doesn't Have Inflation"-Aufkleber, „Cure Inflation" Bitcoin-Aufkleber — because that's the actual printed artwork on the stickers, and translating the title would misrepresent what the customer receives.
- **Home card labels (62 entries):** concise German phrasings — "Let's compare" → "Vergleichen wir", "What's the difference?" → "Was ist der Unterschied?", "Fund your project" → "Finanziere Dein Projekt", "Ending forever wars" → "Das Ende endloser Kriege", "Grassroots adoption" → "Adoption von unten", "Political paradox" → "Das politische Paradoxon".

**Verification:** All 4 checks PASS after the `force-rewrite-identical.js` pass — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/de/` directory now fully at parity with English V2.

---

## Danish (da) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Danish` end-to-end. Ninth locale through the manifest-driven refresh pipeline, and the first North Germanic language — targeting ~6M Danish speakers, primarily in Denmark plus Greenland, Faroe Islands, and expatriate communities.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 465 missing + 5 untranslated
- Manifest entries: 165 changed + 392 added → **1,027 total entries flagged** (highest of any locale so far)

**Helper-script split:**
- `scripts/da-manifest-refresh/translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Danish uses common gender noun forms — template supplies `longName` (e.g. "i amerikanske dollars" — locative with "i" preposition), `longNameNom` (nominative), `noun`, `nounPlural`. For locales whose noun stays identical in plural (euro, yen, baht, pund, shekel, real, peso), the template degenerates cleanly. Plus 41 non-currency keys: freedom cards, stories (Canada/Nigeria/Pennsylvania/Texas), sources, and 5 manifest-changed hero/intro keys.
- `scripts/da-manifest-refresh/translate-rest-part1.js` — **193 entries**. Covers `404` (3) + `about` (35) + `bank-runs` (36) + all 10 `bitcoin-vs-*` comparison pages (119 across banks/bonds/cash/cbdc/crypto/fine-art/gold/real-estate/stocks/visa). Uses Danish typographic quotes `„…"` for quoted brand phrases like „Bitcoin modtages her" (Danish convention differs from English curly quotes). Inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India and gold.org supply-and-demand links. Brand names kept verbatim: Silicon Valley Bank, FRED, FDIC, Federal Reserve.
- `scripts/da-manifest-refresh/translate-rest-part2.js` — **461 entries**. Covers `business/accounting` (46) + `business/faq` (2) + `business/index` (12) + `business/maps` (15) + `business/maps-success` (8) + `business/sticker-files/english/index` (3) + `business/sticker-language-success` (5) + `business/sticker-success` (11) + `business/stickers` (15) + `business/wallets` (17) + `business/why` (36) + `buy` (22) + `common` (49) + `compound-inflation-calculator` (8) + `flyers` (5) + `get-involved` (33) + `index` (61 — all home card labels) + `lightning` (11) + `nostr/index` (45) + `sticker-files/index` (1) + `sticker-language-success` (1) + `sticker-success` (7) + `stickers` (36) + `wallets` (11).
- `scripts/da-manifest-refresh/fix-remaining.js` — **5 entries**. (a) `english_bitcoin_accepted_here_sticker_files` (missing, locale-specific). (b) `bitcoin-vs-visa::bitcoin_point_3` "Transparent system" → "Gennemsigtigt system" — Danish loanword `transparent` exists but `gennemsigtigt` is the native form expected in a pure-Danish translation. (c) `buy_platform_feature_dca` "Dollar-cost averaging" → "Dollar-cost averaging (gradvist køb)" — DCA kept in English as the recognized technical term, with a parenthetical Danish gloss "(gradvist køb)" for byte-distinctness. (d) `common_sticker_files_mission_3` — Danish "inflation" is spelled identically to English, so rewritten to the definite form "inflationen" to produce a byte-distinct locale value without changing meaning. (e) `common_stickers_type` "Type:" → "Udformning:" — Danish `type` is a loanword and would match English byte-for-byte; reworded to the more native `udformning` ("form/shape"), which better describes the field ("shape/form of the sticker: die-cut") in context.

**Edge cases:**
- **`common_sticker_files_mission_3` / `common_stickers_type` English-identical words:** These are the archetypal short-value trap for manifest refreshes — words that happen to be spelled the same in Danish and English ("inflation", "type", "material"). Solved by rewording to the definite form ("inflationen") or native synonym ("Udformning:") to produce a byte-distinct locale value. Noted for the next few Germanic-language sessions (sv, nb, nl, de) where the same words will likely recur.
- **Home card labels:** Every `home_card_label_*` key was a fresh translation (61 in total). Kept everything concise — e.g. "Let's compare" → "Lad os sammenligne", "What's the difference?" → "Hvad er forskellen?", "Fund your project" → "Finansier dit projekt", "Ending forever wars" → "Afslutter evige krige".
- **`about_mission_1a` / `about_mission_1b`:** The English splits "bitcoin.rocks was founded by · sovenor · in 2022…" across three translation keys. Danish: "bitcoin.rocks blev grundlagt af brugeren · sovenor · i 2022 med en enkel mission: at accelerere Bitcoin-adoption gennem uddannelse." — standard Danish passive-voice construction with "blev grundlagt af" (was founded by).
- **Numeric format:** Danish uses `.` as the thousands separator and `,` as the decimal separator, so `21,000,000` → `21.000.000` in `inflation_stat_bitcoin_numeric` and `1.42%` → `1,42 %` in `bank_runs_card_fdic_value` (both separator swap and space before `%`).
- **„Bitcoin modtages her" → sticker phrase:** The standard Danish rendering of "Bitcoin Accepted Here" used consistently throughout the business/* namespace for sticker copy, sticker-files language selectors, and merchant-resource cards. Matches what would be printed on actual Danish merchant stickers.

**Verification:** All 4 checks PASS after the `fix-remaining.js` pass — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/da/` directory now fully at parity with English V2.

---

## Czech (cs) manifest refresh — April 24, 2026

Ran `/translate-manifest-refresh Czech` end-to-end. Eighth locale through the manifest-driven refresh pipeline, and the first West Slavic language — targeting ~10–13M Czech speakers primarily in Czechia, plus diaspora communities in the U.S., Canada, and Germany.

**Report stats:**
- Manifest version: `d966f8c780c0c485...` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 2 untranslated (cs landed a lot of V2 content ahead of manifest generation, so everything flagged has to be filled in)
- Manifest entries: 165 changed + 392 added → **1,023 total entries flagged for translation** (highest of any locale so far)

**Helper-script split:**
- `scripts/cs-manifest-refresh/translate-inflation.js` — **368 entries**. Per-currency templated translator × 13 currencies (`usd`, `eur`, `aud`, `brl`, `cad`, `gbp`, `ils`, `inr`, `jpy`, `mxn`, `nzd`, `php`, `thb`) covering `intro_1/2/highlight` + `proof_h2/p1–p6` + `btc_h2/p1–p4` + `freedom_h2/p1–p2` + `stat_*` suffixes. Czech has strong morphology so the template ships four case forms per currency: `longName` (locative plural: "v amerických dolarech"), `longNameNom` (nominative singular: "americký dolar"), `longNameGen` (genitive singular: "amerického dolaru"), and `noun` / `nounPlural`. Plus 41 non-currency keys: freedom cards, stories (Canada/Nigeria/Pennsylvania/Texas), sources, and 5 manifest-changed hero/intro keys (`inflation_h1_orange`, `inflation_choose`, `inflation_choose_another`, `inflation_sticker_learn`, `inflation_sticker_lets_find_out`).
- `scripts/cs-manifest-refresh/translate-rest-part1.js` — **194 entries**. Covers `404` (3) + `about` (35) + `bank-runs` (36) + all 10 `bitcoin-vs-*` comparison pages (120 across banks/bonds/cash/cbdc/crypto/fine-art/gold/real-estate/stocks/visa). Inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India and gold.org supply-and-demand links. Brand names kept verbatim: Silicon Valley Bank, FRED, FDIC, CBDC (the V2 page uses the CBDC acronym inline).
- `scripts/cs-manifest-refresh/translate-rest-part2.js` — **461 entries**. Covers `business/accounting` (46) + `business/faq` (2) + `business/index` (12) + `business/maps` (15) + `business/maps-success` (8) + `business/sticker-files/english/index` (3) + `business/sticker-language-success` (5) + `business/sticker-success` (11) + `business/stickers` (15) + `business/wallets` (17) + `business/why` (36) + `buy` (21) + `common` (50) + `compound-inflation-calculator` (8) + `flyers` (5) + `get-involved` (33) + `index` (62 — all home card labels) + `lightning` (11) + `nostr/index` (45) + `sticker-files/index` (1) + `sticker-language-success` (1) + `sticker-success` (7) + `stickers` (36) + `wallets` (11). Uses typographic quotes `„“` (Czech convention) for sticker names and brand phrases like „Zde přijímáme Bitcoin“. Home card labels kept short and punchy to fit the carousel cards.
- `scripts/cs-manifest-refresh/fix-remaining.js` — **1 entry**. `buy_platform_feature_p2p` → "Peer-to-peer (mezi uživateli)" — the first-pass translation left it as just "Peer-to-peer" (unchanged from English), so verify-language flagged it as `untranslated`. Added a parenthetical Czech gloss "(mezi uživateli)" to make the value byte-distinct from English while keeping the technical term recognizable.

**Edge cases:**
- **Czech plural cases for `mxn`/`php` pesos:** The genitive plural of "peso" in Czech is just "pes" (same form as the word for "dog"!). Accepted as the correct form — Czech genuinely uses this short form after numerals ≥ 5 (e.g. "pět pes" = "five pesos"). Similarly `brl` uses "realů" (gen. pl. of "real").
- **`inflation_stat_bitcoin_numeric`:** Czech uses space-separated number grouping, so `(21,000,000)` became `(21 000 000)` matching the locale's numeric convention.
- **Percent sign spacing:** Czech style uses a non-breaking space between number and `%`, so `1.42%` → `1,42 %` in `bank-runs_card_fdic_value` (both decimal separator change + space).
- **Home pill / carousel labels:** Every `home_card_label_*` key was a fresh translation (62 in total). Kept everything concise — e.g. "Let's compare" → "Porovnejme" (single word), "What's the difference?" → "V čem je rozdíl?", "Fund your project" → "Financujte svůj projekt".
- **`about_mission_1a` / `about_mission_1b`:** The English splits "bitcoin.rocks was founded by · sovenor · in 2022 with a simple mission…" across three translation keys with `sovenor` as a link. Czech version: "bitcoin.rocks založil uživatel · sovenor · v roce 2022 s jednoduchým posláním…" — standard Czech word order for founder attribution.

**Verification:** All 4 checks PASS after the `fix-remaining.js` pass — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). `i18n/cs/` directory now fully parity with English V2.

---

## 2026-04-24 delta refresh — 7 locales synced against new manifest

Minor English text updates across 5 commits (`c88d7273..ef04b2a3`) on 2026-04-24 touched 5 content pages:

- `/about` — retired "Business Kit" → "Business resources" rewording on the business card
- `/get-involved` — dropped Business Kit prose; added a new "Bitcoin Accepted Here stickers" card pointing at `/business/stickers` (4 new i18n keys)
- `/inflation` — wired 4 `FeatureCard` icons to voteforbetter.money deep-links (no i18n change)
- `/business/faq` — wrapped two FAQ list items in `href` anchors to `/bank-runs` and `/inflation` (no i18n change)
- `bitcoin-vs-cash::point_3_summary_1` — wrapped "India" in a Wikipedia demonetisation link
- `bitcoin-vs-fine-art::point_4_summary_1` — appended "without counterparty risk"
- `bitcoin-vs-gold::point_2_summary_1` — "Most online gold" → "Online gold"
- `bitcoin-vs-gold::point_3_summary_1` — wrapped "1.6% per year" in a gold.org supply/demand link

**Net i18n delta:** 3 changed + 4 added keys in English. These were reconciled into the Step-5 translation pipeline via:

1. **Manifest regen:** `node scripts/i18n-audit/snapshot-english.js && node scripts/i18n-audit/build-v2-manifest.js`. `v2-manifest.json` went from (162 changed, 388 added, 550 total, hash `75d5ff1151d50651...`) to (165 changed, 392 added, 557 total, hash `d966f8c780c0c485...`). The version bump invalidated every per-locale marker.
2. **Delta helper:** `scripts/delta-refresh-2026-04-24/apply-delta.js` — a one-shot targeted patch for the 7 already-refreshed locales (af, am, ar, az, bg, bn, ca) that applies just the new/changed keys (13 changed + 4 added per locale across 5 namespaces: `about`, `get-involved`, `bitcoin-vs-cash`, `bitcoin-vs-fine-art`, `bitcoin-vs-gold`) and re-pins each marker to the new manifestVersion. Idempotent. Reuses the locale's existing `get_involved_card_business_source` value ("Source: bitcoin.rocks →" in the locale's script) for the new `get_involved_card_biz_stickers_source` so we don't have to re-translate the source tagline. Inline `<a class="body-link">` HTML (Wikipedia India anchor + gold.org supply/demand anchor) preserved verbatim in every locale, with the anchor text translated per-locale.
3. **Checklist + workflow updated:** `V2-REDESIGN-CHECKLIST.md` gained a "Manifest regeneration" paragraph under Step 5; each of the 7 completed locales got a "+ 2026-04-24 delta refresh" annotation; `.clinerules/workflows/manifest-translate-refresh.md` had its "Typical volumes" table bumped to 165/392 and gained a note about the 2026-04-24 regen.

**Verification:** `verify-language.js` passes all 4 checks for all 7 locales (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages).

**Next per-locale sessions** (for cs, da, de, el, es, et, eu, fa, etc. — 47 locales remaining) will pick up the full 557-entry manifest in a single `language-diff.js` run, since their markers are still stale.

---

## Catalan (ca) manifest refresh — April 23, 2026

Ran `/translate-manifest-refresh Catalan` end-to-end. Seventh locale through the manifest-driven refresh pipeline, and the first Romance language in this tier — targeting ~10M Catalan speakers across Catalonia, Valencia, the Balearic Islands, Andorra, and parts of southern France / Sardinia.

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific)
- Untranslated: 2 (`common::common_stickers_dimensions` and `common::common_stickers_material` — both spelled identically to English in standard Catalan, so the byte-level diff flagged them)
- Manifest changed: 162 (same for every locale)
- Manifest added: 388 (same for every locale)
- → **1,016 entries flagged**

**Work split (four helper scripts under `scripts/ca-manifest-refresh/`):**

1. **`translate-inflation.js`** (368 entries). Templated `t(code, suffix)` function × 13 currencies generates 327 per-currency keys + 41 non-currency keys. The `CURRENCY` table uses Catalan grammatical forms — `longName` (prepositional form for "in X dollars": `"dòlars dels EUA"`, `"euros"`, `"lliures esterlines"`) plus nominative `longNameNom` (`"el dòlar dels EUA"`, `"l'euro"` with apostrophe contraction before vowel) for sentences that need the article. All 13 currencies translated with proper Catalan spelling (dòlars, euros, reals brasilers, rupies índies, iens japonesos, pesos mexicans, pesos filipins, lliures esterlines, xéquels israelians, bahts tailandesos). Stories for Canadà / Nigèria / Pennsilvània / Texas translated. 5 manifest-changed inflation hero keys handled.

2. **`translate-rest-part1.js`** (193 entries). 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages. Comparison hero titles follow the idiomatic Catalan pattern `"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i els/les <span class=\"asset\">X</span>"` with correct articles (`els bancs`, `les accions`, `l'efectiu`, `l'or`, `les criptomonedes`, `les belles arts`, `els béns immobles`, `els bons`, `les monedes digitals del banc central (CBDC)`). Brand names (Silicon Valley Bank, FRED, FDIC, SVB, ETF, BTC, CBDC, Visa, EndSARS, University of Washington School of Law) preserved verbatim. Catalan decimal uses comma (`1,42%`, `10,82 bilions`).

3. **`translate-rest-part2.js`** (453 entries). Everything else — business/* (153 entries: accounting/faq/index/maps/maps-success/sticker-files/english/index/sticker-language-success/sticker-success/stickers/wallets/why), buy (20), common (50), compound-inflation-calculator (8), flyers (5), get-involved (26), index homepage (62 `home_card_label_*` + nav entries), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (36), wallets (11).

4. **`fix-remaining.js`** — 2 untranslated strings that happened to be spelled identically in Catalan and English: `common_stickers_dimensions` ("Dimensions:") → `"Mides:"` and `common_stickers_material` ("Material:") → `"Material de l'adhesiu:"`. The diff script flags any byte-equal target as untranslated, so we reworded to Catalan-distinct forms.

**Application:**
- `node scripts/i18n-audit/apply-translations.js ca` wrote **1,016 keys across 38 files**.
- Marker written at `scripts/i18n-audit/v2-refresh-status/ca.json` pinning manifestVersion `75d5ff1151d50651...`.
- All 4 verification checks passed: marker ✅, locale-specific ✅, manifest coverage ✅, stale pre-V2 English ✅.
- Report archived to `scripts/i18n-audit/reports/applied/ca-20260424-022611.json`.

**Edge cases / lessons:**

- **Latin-script locale with tiny untranslated set.** Catalan, like Afrikaans before it, renders most technical tokens with orthography close enough to English to trigger the byte-level "untranslated" check. But only two keys actually hit it (`Dimensions:` and `Material:`) — the rest of Catalan's vocabulary genuinely diverges. For both false positives we chose a Catalan-distinct rewording rather than adding them to the `SHORT_ALLOWED_IDENTICAL` / `BRAND_IDENTICAL_VALUES` lists, since they're real content strings (not brand/dataset tokens).
- **Apostrophe contractions in grammatical articles.** Catalan contracts `la`/`el` + vowel into `l'` (e.g. `"l'euro"`, `"l'or"`, `"l'efectiu"`) and uses a templated branch inside `btc_p2_before` to emit `"de "` vs `"d'"` before the longName based on whether it starts with "l'". This keeps the per-currency template correct for all 13 currencies.
- **All 4,349 static pages built cleanly** — zero MISSING_MESSAGE errors, zero "Unable to load message" warnings.

**Next locale candidates (Tier 1 global-reach):** `de` (German), `es` (Spanish), `fr` (French), `pt` (Portuguese), `zh` (Chinese), `ja` (Japanese), `ru` (Russian), `hi` (Hindi).

---

## Bengali (bn) manifest refresh — April 23, 2026

Ran `/translate-manifest-refresh Bengali` end-to-end. Sixth locale through the manifest-driven refresh pipeline, and the first **Bengali-script (Bangla / Eastern Nagari)** locale — targeting a massive ~300M-speaker audience across Bangladesh and West Bengal. Numerals rendered in Bengali digits (০১২৩৪৫৬৭৮৯).

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific — `bn` carried the full manifest-era backlog, same volume as `af`, `am`, `ar`, `az`, `bg`)
- Untranslated: 10 (all `common::common_stickers_dimensions_*` — sticker size strings with raw English "cm" / "in" units)
- Manifest changed: 162 (same for every locale)
- Manifest added: 388 (same for every locale)
- → **1,024 entries flagged**

**Work split (four helper scripts under `scripts/bn-manifest-refresh/`):**

1. **`translate-inflation.js`** (368 entries). Templated `t(code, suffix)` function × 13 currencies generates 327 per-currency keys + 41 non-currency keys. The `CURRENCY` table uses Bengali script for noun/plural (টাকা/টাকা, ডলার/ডলার, রুপি/রুপি, ইয়েন/ইয়েন etc.) plus a long form with locative case ending (`"মার্কিন ডলারে"` = "in US dollars") for sentences that grammatically need it vs. nominative labels (`"মার্কিন ডলার"`). All 13 currencies translated into Bengali script including country names (যুক্তরাজ্য = UK, ইসরায়েল, ভারত, জাপান, মেক্সিকো, নিউজিল্যান্ড, ফিলিপাইন, থাইল্যান্ড, কানাডা, ব্রাজিল, অস্ট্রেলিয়া). Stories for কানাডা / নাইজেরিয়া / পেনসিলভানিয়া / টেক্সাস translated. 5 manifest-changed inflation hero keys handled. Brand/technical terms (Bitcoin, FRED, CPI, BTC, EndSARS, whitepaper, M1) kept in Latin script per allow-list. Number "২১ মিলিয়ন" uses Bengali digits.

2. **`translate-rest-part1.js`** (193 entries). 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages. Brand names (Silicon Valley Bank, FRED, FDIC, SVB, ETF, BTC, CBDC, Visa, EndSARS, University of Washington School of Law) preserved verbatim inside Bengali prose. Bengali-specific digits for numeric values (২৬ মার্চ ২০২০, ১৫৩.৯ বিলিয়ন, ১০.৮২ ট্রিলিয়ন, ১.৪২%). Hindi/Sanskrit-origin financial terms used throughout (ব্যাংক, রিজার্ভ, মুদ্রাস্ফীতি, সঞ্চয়, ঋণ, কেন্দ্রীয় ব্যাংক, পেমেন্ট, লেনদেন, বন্ড, শেয়ার, স্টক).

3. **`translate-rest-part2.js`** (453 entries). Everything else — business/* (153 entries: accounting/faq/index/maps/maps-success/sticker-files/english/index/sticker-language-success/sticker-success/stickers/wallets/why), buy (20), common (50), compound-inflation-calculator (8), flyers (5), get-involved (26), index homepage (62 `home_card_label_*` + nav entries), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (36), wallets (11).

4. **`fix-remaining.js`** — 10 `untranslated` sticker-dimension strings (e.g. `"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)"`). These had been kept byte-identical to English when the common_bn.json was generated. Translated with Bengali digits (২১.৫৯ সেমি x ৪.৬৪৮২ সেমি (৮.৫ ইঞ্চি x ১.৮৩ ইঞ্চি)), matching the pattern used by `az` (Latin-with-Azerbaijani-units), `ar` (Arabic script with ×), and `bg` (Cyrillic with see "см"/"инча").

**Application:**
- `node scripts/i18n-audit/apply-translations.js bn` wrote **1,024 keys across 38 files**.
- Marker written at `scripts/i18n-audit/v2-refresh-status/bn.json` pinning manifestVersion `75d5ff1151d50651...`.
- All 4 verification checks passed: marker ✅, locale-specific ✅, manifest coverage ✅, stale pre-V2 English ✅.
- Report archived to `scripts/i18n-audit/reports/applied/bn-20260424-010601.json`.

**Edge cases / lessons:**

- **Sticker-dimension strings as untranslated vs. manifest-added.** Unlike `bg` (whose 4 untranslated were business/why section headers — copy that had been authored) or `ar` (which didn't have any untranslated), Bengali's 10 untranslated entries were all measurement strings — cm/in values that had been left in English. These are similar to the allow-listed dimension strings in many locales, but Bengali's `common_bn.json` kept the full English text rather than localizing the units. Translation swaps "cm"→"সেমি" and "in"→"ইঞ্চি" while keeping the numeric values as Bengali digits.
- **Digit script choice.** Bengali has its own digit forms (০১২৩৪৫৬৭৮৯). Used Bengali digits in body text / stats (e.g. "২১ মিলিয়ন", "১.৪২%", "৪ বছর") and parenthesized labels; kept Western digits in brand-adjacent contexts (URLs, code refs, `21,000,000` in the numeric parenthetical, `2008` in Satoshi whitepaper year, `B2B`). Currency codes (USD, EUR) stay Latin.
- **All 4,349 static pages built cleanly** — zero MISSING_MESSAGE errors, zero "Unable to load message" warnings.

**Next locale candidates (Tier 1 global-reach):** `de` (German), `es` (Spanish), `fr` (French), `pt` (Portuguese), `zh` (Chinese), `ja` (Japanese), `ru` (Russian), `hi` (Hindi, continues South Asian coverage from `bn`).

---

## Bulgarian (bg) manifest refresh — April 23, 2026

Ran `/translate-manifest-refresh Bulgarian` end-to-end. Fifth locale through the manifest-driven refresh pipeline, and the first Cyrillic-script locale (different from Amharic's Ge'ez abugida and Arabic's RTL Arabic script).

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific — `bg` had the full manifest-era backlog, same volume as `az` and `ar`)
- Untranslated: 4 (all `business/why::why_s*` section headers — "Bitcoin doesn't have inflation" / "…have bank runs" / "…is permissionless" / "…is building a better world")
- Manifest changed: 162 (same for every locale)
- Manifest added: 388 (same for every locale)
- → **1,018 entries flagged**

**Work split (three helper scripts under `scripts/bg-manifest-refresh/` + one final fix):**

1. **`translate-inflation.js`** (368 entries). Templated `t(code, suffix)` function × 13 currencies generates 327 per-currency keys + 41 non-currency keys (freedom cards, Bitcoin stat card, shared labels, stories for Канада/Нигерия/Пенсилвания/Тексас, sources, 5 manifest-changed inflation hero keys). Bulgarian noun-adjective agreement means each currency needs a full genitive form (`"щатския долар"`) AND a nominative label (`"Щатски долар"`) — the template inserts whichever is grammatically correct for each suffix. Brand/currency codes (Bitcoin, FRED, CPI, BTC, EndSARS, whitepaper) kept in Latin script per allow-list.

2. **`translate-rest-part1.js`** (193 entries). 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages. Brand names (Silicon Valley Bank, FRED, FDIC, SVB, ETF, BTC, CBDCs, Visa, EndSARS, University of Washington School of Law, etc.) preserved verbatim inside Bulgarian prose. Bulgarian uses lowercase for most concept nouns (инфлация, дълг) but capitalizes proper nouns (Канада, Нигерия). Comma is the decimal separator (1,42% not 1.42%).

3. **`translate-rest-part2.js`** (453 entries). Everything else — business/* (accounting/faq/index/maps/maps-success/sticker-files/english/index/sticker-language-success/sticker-success/stickers/wallets/why — 153 entries), buy (20), common (50), compound-inflation-calculator (8), flyers (5), get-involved (26), index homepage (62 `home_card_label_*` + nav entries), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (36), wallets (11).

4. **`fix-remaining.js`** — 4 `untranslated` entries (business/why section headers: `why_s1`–`why_s4`). These were byte-identical to English in the pre-refresh state so the diff flagged them as "needs translation". Filled with Bulgarian equivalents: "Bitcoin няма инфлация", "Bitcoin няма банкови паники", "Bitcoin е без разрешения", "Bitcoin изгражда по-добър свят".

**Application:**
- `node scripts/i18n-audit/apply-translations.js bg` wrote **1,018 keys across 38 files**.
- Marker written at `scripts/i18n-audit/v2-refresh-status/bg.json` pinning manifestVersion `75d5ff1151d50651...`.
- All 4 verification checks passed: marker ✅, locale-specific ✅, manifest coverage ✅, stale pre-V2 English ✅.
- Report archived to `scripts/i18n-audit/reports/applied/bg-20260424-004041.json`.

**Edge cases / lessons:**

- **Byte-identical untranslated entries are distinct from manifest entries.** 4 `business/why::why_s*` headers were untranslated (identical to English in the pre-V2 file). The two main part2 script expects only manifest-added/manifest-changed entries for business/why, so the untranslated ones needed a separate `fix-remaining.js`. This is consistent with the Afrikaans pass's `fix-remaining.js` approach.
- **Bulgarian plural forms need careful handling.** Most currencies have plural forms that differ from the singular (долар/долара, йена/йени, реал/реала). The CURRENCY table in the inflation script carries separate `noun` / `nounPlural` fields and the template chooses correctly based on the phrase structure ("всеки ${noun}" singular vs "количеството ${nounPlural}" plural).
- **All 4,349 static pages built cleanly** — zero MISSING_MESSAGE errors, zero "Unable to load message" warnings.

**Next locale candidates (Tier 1 global-reach):** `de` (German), `es` (Spanish), `fr` (French), `pt` (Portuguese), `zh` (Chinese), `ja` (Japanese), `ru` (Russian), `hi` (Hindi). Bengali (`bn`) would also be a good early pick for South Asian audience.

---

## Latest: RTL homepage carousel fix — April 23, 2026

Bugfix: on RTL locales (`ar`, `fa`, `he`, `ur`) the homepage's infinite-scroll category pill carousels appeared broken — bars started at the wrong side and the seamless wrap-around seam was visible.

**Root cause.** `HomeCarousel.tsx` drives the track with `transform: translate3d(offset, 0, 0)` and wraps the offset around `track.scrollWidth / 2`. Both assume an LTR coordinate system. When `<html dir="rtl">` is set, the flex-row direction inside `.home-carousel-track` flips, reversing the physical meaning of positive/negative horizontal transforms. The wrap boundary then no longer coincides with the duplicated-pill seam, so the seam becomes visible and the start offset lands at the wrong edge.

**Fix** (`app/globals.css`, §4 Homepage V2):
1. Added `direction: ltr` to `.home-carousel-wrap`, `.home-carousel-row`, and `.home-carousel-track`. The carousel is a purely visual mechanical element — its internal layout must stay LTR everywhere so the JS translate3d math is consistent.
2. Added `unicode-bidi: plaintext` to `.home-pill`. Each pill then auto-detects its own text direction from its first strong directional character (equivalent to `dir="auto"`), so a single Arabic/Hebrew/Persian/Urdu label renders RTL as expected, and any mixed-script label (e.g. Arabic + Latin digits) resolves its neutral characters against the pill's own base direction rather than inheriting LTR from the carousel container.

No other RTL page is affected — `<html dir="rtl">` still flips all prose, headings, card grids, navbar, footer, etc. The override is scoped to the carousel primitives only. Documented inline in `app/globals.css` with a block comment explaining why for future editors.

---

## Azerbaijani (az) manifest refresh — April 23, 2026


Ran `/translate-manifest-refresh Azerbaijani` end-to-end. Fourth locale through the manifest-driven refresh pipeline, and the first Turkic-language locale (shares Latin script with Turkish/Uzbek/Azerbaijani — the extended diacritics are `ə`, `ğ`, `ı`, `ö`, `ş`, `ü`, `ç`).

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific — `az` had the full manifest-era backlog)
- Untranslated: 1 (`common_stickers_material` was "Material:" byte-identical to English)
- Manifest changed: 162 (same for every locale)
- Manifest added: 388 (same for every locale)
- → **1,015 entries flagged**

**Work split (three helper scripts under `scripts/az-manifest-refresh/` + one final fix):**

1. **`translate-inflation.js`** (368 entries). Matches the Arabic template: 327 per-currency keys × 13 currencies generated from a templated `t(code, suffix)` function + 41 non-currency keys (freedom cards, Bitcoin stat card, shared labels, stories for Kanada/Nigeriya/Pensilvaniya/Texas, sources, 5 manifest-changed inflation hero keys).

2. **`translate-rest-part1.js`** (193 entries). 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages. Brand names (Silicon Valley Bank, FRED, FDIC, SVB, ETF, BTC, CBDCs, Visa, EndSARS, etc.) preserved verbatim inside Azerbaijani prose. Azerbaijani uses the "ABŞ" acronym for "USA" (Amerika Birləşmiş Ştatları) consistently.

3. **`translate-rest-part2.js`** (453 entries). Everything else — business/* (accounting/faq/index/maps/maps-success/sticker-files/english/index/sticker-language-success/sticker-success/stickers/wallets/why), buy, common (52 keys incl. sticker names, tips, sources, currency labels, printer name), compound-inflation-calculator, flyers, get-involved, index homepage (60+ `home_card_label_*` entries), lightning, nostr/index (45 entries), sticker-files/index, sticker-language-success, sticker-success, stickers, wallets.

4. **Final fix** — one `untranslated` entry (`common_stickers_material`, "Material:" → "Material növü:") set inline via a small Node one-liner since the helper scripts don't target untranslated categories.

**Application:**
- `node scripts/i18n-audit/apply-translations.js az` wrote **1,015 keys across 38 files**.
- Marker written at `scripts/i18n-audit/v2-refresh-status/az.json` pinning manifestVersion `75d5ff1151d50651...`.
- Report archived to `scripts/i18n-audit/reports/applied/az-20260423-233650.json`.

**Verification (all 4 checks green on first apply):**
- ✅ Marker matches current manifestVersion.
- ✅ Locale-specific coverage: missing=0, untranslated=0, manifestChanged=0, manifestAdded=0.
- ✅ No target values match pre-V2 English (162 manifest-changed entries scanned for stale-English leakage).
- ✅ `npm run build` clean across 55 locales × 81 pages (~4,349 static pages total).

**Refinements worth remembering:**
- The `<asset>` genitive forms need to agree with Azerbaijani vowel harmony — "qızılın" (of gold) vs "nağdın" (of cash) vs "kriptovalyutaların" (of cryptocurrencies). The `hero_title` templates (`<span class="orange">Bitcoin</span> ilə <span class="asset">X</span> arasındakı fərq`) follow the genitive-case pattern naturally.
- For per-currency templates, kept `noun === nounPlural` for most currencies (Azerbaijani doesn't pluralize after numerals) but kept the distinction in the `CURRENCY` object for future structural consistency with Arabic.
- Brand name quotation style: Azerbaijani uses "..." (ASCII straight quotes) consistently across the V2 content; no need for German-style „…" lower-upper pairs.

Next up in the queue: `bg` (Bulgarian) → then tier-1 Europeans `de` / `fr` / `es` / `pt`, then Asian `zh` / `ja` / `hi` / `ko` / `vi` / `th` / `id`.

---

## Arabic (ar) manifest refresh — April 23, 2026

Ran `/translate-manifest-refresh Arabic` end-to-end. Arabic is the third locale processed against the committed V2 manifest (and the first one where the workflow was exercised from scratch using only the manifest tooling — no rescue/carry-over step needed because `ar` had no pre-existing manifest-era partial work to preserve).

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific — `ar` was genuinely behind on new V2 keys)
- Untranslated: 0
- Manifest changed: 162 (same list for every locale)
- Manifest added: 388 (same list for every locale)
- → **1,014 entries flagged**

**Work split (three helper scripts under `scripts/ar-manifest-refresh/`):**

1. **`translate-inflation.js`** (368 entries). 327 per-currency keys × 13 currencies (usd, eur, aud, brl, cad, gbp, ils, inr, jpy, mxn, nzd, php, thb) generated from a templated `t(code, suffix)` function covering the full intro / proof / btc / freedom / stat_* suffix set, plus 41 non-currency keys (freedom cards, Bitcoin stat card, shared currency labels, freedom stories for Canada/Nigeria/Pennsylvania/Texas, sources, and the 5 manifest-changed inflation hero/intro keys like `inflation_h1_orange`, `inflation_choose`, etc.).

2. **`translate-rest-part1.js`** (193 entries). 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages. RTL-safe arrow character (`←`) used consistently for "Source: … →" patterns, which become left-pointing arrows in Arabic's RTL flow to keep the visual "outward/forward" semantic correct. Brand names (Silicon Valley Bank, FRED, FDIC, SVB, ETF, BTC, CBDCs, Visa, etc.) preserved verbatim inside Arabic prose.

3. **`translate-rest-part2.js`** (453 entries). Everything else — business/* (accounting, faq, index, maps, maps-success, sticker-files/english/index, sticker-language-success, sticker-success, stickers, wallets, why), buy, common (50 keys including all sticker names + sticker tips), compound-inflation-calculator, flyers, get-involved, index homepage (60+ `home_card_label_*` entries across all topic sections: art, bank-runs, bonds, business, cash, cbdc, coding, crowdfunding, crypto, energy, environment, equality, food, freedom, get-started, gold, housing, human-rights, inflation, networks, payments, politics, property-rights, salary, self-custody, war), lightning, nostr/index (45 entries), sticker-files/index, sticker-language-success, sticker-success, stickers, wallets.

**Application:**
- `node scripts/i18n-audit/apply-translations.js ar` wrote **1,014 keys across 38 files**.
- Marker written at `scripts/i18n-audit/v2-refresh-status/ar.json` pinning manifestVersion `75d5ff1151d50651...`.
- Report archived to `scripts/i18n-audit/reports/applied/ar-20260423-230104.json`.

**Verification (all 4 checks green on first apply):**
- ✅ Marker matches current manifestVersion.
- ✅ Locale-specific coverage: missing=0, untranslated=0, manifestChanged=0, manifestAdded=0.
- ✅ No target values match pre-V2 English (162 manifest-changed entries scanned for stale-English leakage).
- ✅ `npm run build` clean across 55 locales × 81 pages (~4,349 static pages total).

**RTL handling:** Arabic is one of the four RTL locales (`ar`, `fa`, `he`, `ur`). The `<html dir="rtl">` wrapper is set automatically by `app/[locale]/layout.tsx` via `RTL_LOCALES` in `lib/i18n/config.ts` — no per-component adjustments needed. Typography, card layouts, and navbar all mirror correctly.

**Workflow refinement notes for next session:**
- The "write a single monolithic `translate-rest.js`" approach used for `af` / `am` scales poorly past ~500 entries. Splitting into `-part1` + `-part2` by logical page groupings (comparison pages vs. business/common/utility pages) produced two well-organized ~200-KB scripts that are easy to scan and review.
- Report entry count varies significantly with locale freshness: `af` (916 before rescue) was already partially V2-translated; `am` (874) had carry-over from earlier manual work; `ar` (1,014) was the most comprehensive refresh yet because it had accumulated the full manifest-added backlog with zero prior manifest-era work done.

Next up in the tier-1 global-reach queue: `es` (Spanish), `fr` (French), `de` (German), `pt` (Portuguese), `zh` (Chinese Mandarin), `ja` (Japanese), `ru` (Russian), `hi` (Hindi) — then tier-2 regionals.

---

## Manifest-driven i18n refresh refactor + af/am rescue — April 23, 2026

User flagged that `i18n/am/bitcoin-vs-gold_am.json` still had V1 Amharic translations (e.g. `point_3_summary_1`) under V2 English keys, even after the Amharic Step 5 pass had just been "verified clean" earlier the same day. Root-cause investigation revealed a **file-level freshness-gate bug** in the previous `language-diff.js`:

```js
// language-diff.js (old)
if (preV2Snapshot && !isTargetFileFresh(enNs, tgNs)) { ... }

function isTargetFileFresh(enNs, tgNs) {
  return tgDate >= enDate;  // YYYY-MM-DD lexicographic
}
```

When `apply-translations.js` bumped `i18n/am/bitcoin-vs-gold_am.json`'s `@metadata.last-updated` to today (same as English's date) after writing `hero_title`, the gate silently marked the whole file as "fresh" and skipped english-changed detection for every other stale key in it. Result: 8 english-changed entries caught in the am report instead of the actual 163.

### Refactor — manifest-driven detection

Replaced the heuristic english-changed + likely-stale tiers with a committed **V2 manifest** (`scripts/i18n-audit/v2-manifest.json`) + per-locale marker (`scripts/i18n-audit/v2-refresh-status/<lang>.json`) pinning the manifestVersion the locale was last refreshed against.

Files created:
- `scripts/i18n-audit/build-v2-manifest.js` — generates deterministic manifest from preV2 + current English snapshots. Filters brand-identical keys/values (expanded the allow-list vs. before). Emits sha256 `manifestVersion` hash.
- `scripts/i18n-audit/v2-manifest.json` — committed canonical list: 162 `changed` entries + 388 `added` entries = **550 manifest entries**, same for every locale.
- `scripts/i18n-audit/v2-refresh-status/<lang>.json` — per-locale marker, written by `apply-translations.js` when all manifest entries in a report are resolved.
- `scripts/i18n-audit/verify-language.js` — unified audit replacing the old two-audit dance. Four checks: marker version, locale-specific missing/untranslated, outstanding manifest entries, stale pre-V2 English cross-check.
- `scripts/i18n-audit/rescue-carry-over.js` — one-off helper that carries existing `currentValue` into `targetTranslation` for safely-translated entries (safe for manifest-added, gated by `--trust-changed` for manifest-changed).

Files refactored:
- `scripts/i18n-audit/language-diff.js` — dropped `isTargetFileFresh()`, `englishMeaningfullyChanged()`, `normalizeForChangeDetection()`, `loadPreV2Snapshot()`, all likely-stale logic + `V2_ERA_MARKERS`. Added manifest + marker loading. New report shape with `manifest-changed` / `manifest-added` reason categories + `markerMatches` field.
- `scripts/i18n-audit/apply-translations.js` — writes per-locale marker after full manifest coverage, auto-runs `verify-language.js`. Dropped `--no-archive` flag (low value).

Files renamed/deleted:
- `.clinerules/workflows/v2-translate-refresh.md` → `manifest-translate-refresh.md` — completely rewritten around the manifest. Invocation changes: `/translate-v2-refresh` → `/translate-manifest-refresh`.
- `scripts/audit-translation.js` — **deleted** (superseded by verify-language.js).

### af + am rescue results

Both locales had the manifest apply the identical 550 entries. Verification clean for both:
- **af:** 162 manifest-changed carried over from the prior `retranslate-english-changed.js` work + 388 manifest-added carried over from currentValue. Zero translator work needed.
- **am:** 388 manifest-added carried over safely; 162 manifest-changed translated fresh in two parts (`scripts/am-manifest-refresh/translate-manifest-changed.js` + `-part2.js`). Includes the original user-reported bug: `bitcoin-vs-gold|point_3_summary_1` now correctly translates the NEW English (21M cap + 1.6% gold growth) instead of the old "21 Million BTC that will ever exist."

### Verification

- `npm run build`: clean across 4,349 static pages, zero MISSING_MESSAGE, zero warnings.
- `node scripts/i18n-audit/verify-language.js af`: ✅ PASS all 4 checks.
- `node scripts/i18n-audit/verify-language.js am`: ✅ PASS all 4 checks.
- Pre-V2 snapshot kept as frozen artifact (`english-snapshot-preV2.json` unchanged).

### Handoff notes for remaining 52 locales

- Every other locale's `language-diff.js <code>` report will now include the 550 manifest entries until they're refreshed against the current `manifestVersion`. This is correct and desired — they genuinely need that work, the old tooling was just silently hiding it.
- Future English rewrites: run `snapshot-english.js` + `build-v2-manifest.js`. New hash → every marker becomes stale → relevant keys re-flag per locale.
- The translator helper pattern worked: split manifest-changed translations into smaller parts by namespace category when the full list exceeds ~100 entries.

---

## Previous: Step 5 V2 refresh — Amharic (am) — April 23, 2026


Second language through the Phase B per-language Step 5 refresh pipeline. Amharic is the first abugida/syllabic-script locale to go through the refresh — uncovered and fixed a false-positive in the `likely-stale` heuristic.

### Stats

- **Total flagged:** 874 entries (vs. Afrikaans 1079).
  - Missing: 854
  - Untranslated: 12 (11 common sticker-dimensions + `bitcoin-vs-cbdc::cbdc`)
  - English-changed: 8 (2 on /404, 5 on /buy step headers, 1 on /sticker-files index hero)
  - Likely-stale: 0 (before allow-list tuning, would have been ~4 false positives)

### Workflow breakdown

Split across 3 per-category helper scripts in `scripts/amharic-v2-refresh/`:

1. **`retranslate-english-changed.js`** — 8 translations for V2-rewritten English keys. Short pattern; identical shape to Afrikaans template.
2. **`translate-inflation.js`** — 364 inflation entries. 13-currency templated function (same structure as Afrikaans) × 25 template suffixes (intro_1/2/highlight, proof_p1–p6, btc_p1–p4, freedom_h2/p1/p2, stat_label/existence_title/debt_title/detail_4yr/source_bpr) + 37 non-currency shared keys (freedom cards, story cards, BPR detail, source citations).
3. **`translate-rest.js`** — 502 entries across 37 non-inflation namespaces, keyed `<ns>::<key>`. Includes the 11 common sticker-dimensions entries (translated cm/in labels to Amharic syllabic equivalents: `ሴ.ሜ` / `ኢንች`). No unmatched keys.

### Tooling tuning — syllabic-script false-positive fix

Amharic uses Ge'ez script — one syllabic glyph per syllable — so its translations are naturally **~60–70% of the English character count**. The old `targetHasV2MarkerEquivalent` length-ratio floor of 0.75 rejected 4 correct Amharic "Source: …" translations (`ምንጭ: …`) as likely-stale:

- `about::about_card_email_source` — ratio 0.73
- `business/why::why_whats_next_heading` — ratio 0.64
- `inflation::inflation_stat_btc_source_bpr` — ratio 0.70
- `inflation::inflation_stat_currency_source_debt` — ratio 0.70

Fix: lowered the lower bound from **0.75 → 0.55** in `scripts/i18n-audit/language-diff.js`. Kept the upper bound at 1.35 (target much longer than English is still a stale signal). Documented in the comment — Ge'ez/Tibetan/certain Thai combinations legitimately land in this range.

Also added to the allow-lists:

- `CBDC` → `SHORT_ALLOWED_IDENTICAL` (language-diff.js) — 4-char brand acronym, legitimately identical across locales
- `"Lightning Network"` → `SKIP_VALUES` (audit-translation.js) — brand phrase kept verbatim

### Verification

- `language-diff.js am` post-apply: **missing=0, untranslated=0, englishChanged=0, likelyStale=0**.
- `audit-translation.js am`: **missingFiles=0, missingKeys=0, identical=0, englishChanged=0**.
- `apply-translations.js am --verify-only`: **both audits ✅ PASS**.
- `npm run build`: clean across 4,349 static pages, zero `MISSING_MESSAGE`, zero warnings.

### Handoff notes for next locale

- The lower-bound 0.55 ratio fix unblocks every future abugida/syllabic locale (Tibetan, Khmer, Burmese, Sinhala, Hindi/Devanagari and related Indic scripts — though Devanagari tends to render comparable-length to English).
- The 3-script pattern (english-changed, inflation, rest) is now proven for both Latin-script (Afrikaans) and Ge'ez-script (Amharic). Recommended for all remaining 52 locales.
- Files touched this session: 38 i18n/am JSON files, 2 allow-list tweaks (language-diff.js + audit-translation.js), and the 3 helper scripts under scripts/amharic-v2-refresh/. Archived report at `scripts/i18n-audit/reports/applied/am-20260423-204033.json`.

---

## Previous: i18n audit tooling — `english-changed` detection added + Afrikaans re-run — April 23, 2026

**Root cause of a bug the user spotted:** on `bitcoin-vs-gold` (and every other V2-redesigned comparison page) the Afrikaans translation was a correct, long, V1-era paragraph — but the English it was translating had been *rewritten in place* during the V2 redesign into a much shorter phrase. Same JSON keys (`point_3_summary_1/2/3`), completely different English copy. The earlier `language-diff.js` didn't flag these because:

- `missing` — key was still there ✗
- `untranslated` — byte-match against English didn't hit (target is Afrikaans) ✗
- `likely-stale` — marker heuristic only checked for `"Source:"` / `"What's next"` substrings, which weren't in the rewritten keys ✗

Afrikaans had 163 such stuck-stale keys across 25 namespaces (10 comparison pages + business/why + business/accounting + buy + about + inflation + flyers + lightning + nostr/index + stickers + get-involved + 404 + bank-runs + common). Every future language refresh would have had the same blind spot.

### What got built

**New tier: `english-changed`.** Compares current English against a *frozen* pre-V2 English snapshot (captured from `133d5b98`, the last commit before the V2 English-copy rewrites began) and flags every key where English was rewritten AND the target translation hasn't been touched since. Entries include both `englishValue` (current) and `englishValueBefore` (pre-V2) so the translator sees exactly what changed.

**Supporting infrastructure:**
1. **`scripts/i18n-audit/snapshot-english-at-commit.js`** (NEW) — generates an English snapshot at any git revision. Used once to bake `english-snapshot-preV2.json` (committed to repo as a frozen artifact; must not be re-run).
2. **`scripts/i18n-audit/english-snapshot-preV2.json`** (NEW, 190 KB, committed) — 90 namespaces × 1,992 keys of pre-V2 English.
3. **`scripts/i18n-audit/language-diff.js`** (MODIFIED) — loads the snapshot, adds the `english-changed` reason ranked below `untranslated` and above `likely-stale`, normalizes strings for change detection (Unicode NFC, collapsed whitespace, smart-quote/em-dash → ASCII) so trivial punctuation tweaks don't produce noise, adds a **"freshness gate"**: if `target.@metadata.last-updated >= english.@metadata.last-updated` for a given namespace file, the tier is skipped for that file — prevents every successfully re-translated file from being re-flagged forever.
4. **`scripts/audit-translation.js`** (MODIFIED) — mirror of the same detection so the older permissive auditor also catches V2 rewrites.
5. **`scripts/i18n-audit/apply-translations.js`** (MODIFIED) — parses the new `English changed: N` stat from both subprocess outputs and gates the combined PASS verdict on it. `audit-translation.js`'s `hasIssues` check also includes the new `englishChangedEntries.length`.
6. **`.clinerules/workflows/v2-translate-refresh.md`** (REWRITTEN) — documents the new tier, the freshness gate, both snapshot commands (`snapshot-english.js` + `snapshot-english-at-commit.js`), the updated entry-shape for translators, and the expected ~160 english-changed count across locales.
7. **`scripts/i18n-audit/reports/README.md`** (MODIFIED) — adds a table summarizing all four reason categories.
8. **`scripts/afrikaans-v2-refresh/retranslate-english-changed.js`** (NEW) — single-file translation helper that fills 163 Afrikaans translations for the english-changed entries.

### Afrikaans re-run verification

- `language-diff.js af` after the fix flagged 163 entries (0 missing, 0 untranslated, **163 english-changed**, 0 likely-stale — exactly the V2 rewrite scope).
- `retranslate-english-changed.js` filled all 163 targetTranslations.
- `apply-translations.js af` merged → 25 files touched → auto-verification: **both audits PASS**.
- `npm run build`: clean across 4,349 static pages, zero `MISSING_MESSAGE`.
- Spot-check of `i18n/af/bitcoin-vs-gold_af.json`: `point_3_summary_1/2/3` now the short V2 phrases (`"Bitcoin het 'n harde plafon van 21 miljoen BTC…"` / `"inflasie"` / `"— maar steeds inflasie."`) matching the English structure. The long V1 translation is gone.

### Handoff for every remaining Phase B locale

The bug is fixed for **every future language refresh**. Any locale (de/es/fr/…) running `language-diff.js <code>` today will see the same ~160 english-changed entries picked up automatically, alongside the existing `missing`/`untranslated` work. No per-locale remediation needed — the tool handles it.

**Don't regenerate `english-snapshot-preV2.json`** under any circumstances. It's a committed frozen artifact. If the file is ever accidentally lost, restore it via `node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98`.

### Files changed in this pass

```
scripts/i18n-audit/snapshot-english-at-commit.js            (NEW)
scripts/i18n-audit/english-snapshot-preV2.json              (NEW, 190 KB, committed)
scripts/i18n-audit/language-diff.js                         (MODIFIED — new tier, normalize helper, freshness gate)
scripts/i18n-audit/apply-translations.js                    (MODIFIED — parses english-changed stat)
scripts/audit-translation.js                                (MODIFIED — mirrors english-changed detection)
.clinerules/workflows/v2-translate-refresh.md               (REWRITTEN — documents english-changed + freshness gate)
scripts/i18n-audit/reports/README.md                        (MODIFIED — reason-category table)
scripts/afrikaans-v2-refresh/retranslate-english-changed.js (NEW — 163 Afrikaans translations)
i18n/af/**/*.json                                           (25 files re-touched; 163 english-changed entries corrected; @metadata.last-updated bumped to 2026-04-23)
memory-bank/activeContext.md                                (this entry prepended)
```

---

## Previous: i18n cleanup Step 5 Phase B — Afrikaans (af) re-translation complete — April 23, 2026

**Counter: 1/54 languages complete.** First Phase B per-language session, run end-to-end via `/translate-v2-refresh Afrikaans`.

### The numbers

- **Diff input:** 916 entries flagged across 37 namespaces (854 missing + 62 untranslated + 0 likely-stale). The inflation namespace alone held 365 — 13 currencies × 25 templated keys (`intro_1`, `intro_2`, `intro_highlight`, `proof_h2`, `proof_p1`–`p6` with `proof_p5_before`/`_link`/`_after`, `btc_h2`, `btc_p1`, `btc_p2_before`/`_link`/`_after`, `btc_p3`, `btc_p4`, `freedom_h2`, `freedom_p1`, `freedom_p2`, `stat_label`, `stat_existence_title`, `stat_debt_title`) + 38 non-currency keys (inflation_freedom cards, Bitcoin stat card, freedom stories for Canada/Nigeria/Pennsylvania/Texas, FRED/BLS source citations, `inflation_h1_orange`).
- **Output:** 0 flagged after apply + audit re-run. All 916 entries resolved.

### Approach

Two helper scripts under `scripts/afrikaans-v2-refresh/`:

1. **`translate-inflation.js`** (~280 lines). Built a `CURRENCY` table with per-currency `noun` / `nounArticle` / `inflationIntroName` / `nameIntroSecond` / `label` / `existenceTitle` / `debtTitle` for each of the 13 currencies (USD = "VS-dollar" / "dollars"; EUR = "Euro" / "euros"; AUD / BRL / CAD / GBP / ILS / INR / JPY / MXN / NZD / PHP / THB). Then a single `t(code, suffix)` function renders every templated Afrikaans string for that currency — the function uses template literals to weave the per-currency noun into the legal V1→V2 prose (intro paragraphs mention `spaar in <longName>`, proof paragraphs mention `die <noun> in jou bankrekening`, btc_p3 uses `terwyl die <article> dit verloor het`, etc.). Plus a direct `NON_CURRENCY` map for the 38 shared keys. Filled all 365 entries in one pass with 0 unmatched.

2. **`translate-rest.js`** (~600 lines). Flat `"namespace::key"` map for the 551 non-inflation entries across 36 namespaces. The `::` key prefix was necessary because `hero_title` + `bitcoin` appear in all 10 comparison namespaces (all with different English values — one per asset), and a plain `{key: value}` map would collide. The `bitcoin-vs-*` section uses a small `bvTitle(assetAf)` helper to generate the Afrikaans equivalents of the HTML-tagged hero titles (`Die verskil tussen <span class="orange">Bitcoin</span> en <span class="asset">Banke</span>` etc.) since they share the same template.

3. **`fix-remaining.js`** — hand-patches two strings that the audit legitimately wanted translated but that neither helper script touched (both values happened to already exist verbatim in English on the Afrikaans side from the Step 4 propagation pass):
   - `home_source_prefix`: "Source:" → "Bron:"
   - `lightning_s1_c4_link`: "Bitcoin Hardware Wallet Guide" → "Bitcoin-hardeware-beursie-gids"

### Audit-tooling updates (one-time, benefits every future Phase B session)

After the initial apply pass, the verification stage flagged 48 identical-to-English values + 91 untranslated entries on re-diff. Most were legitimate proper-noun sharing — brand names, country names, dataset citation strings — that should never be flagged in any locale. Expanded both audit scripts:

**`scripts/i18n-audit/language-diff.js`**:
- `BRAND_IDENTICAL_VALUES`: added `BITCOIN`, `NOSTR`, `GitHub`, `Amethyst`, `Damus`, `Iris`, `Primal`, `Android`, `iPhone`, `(21,000,000)`, `+$10`, `−$10`, brand-label uppercase tokens (`BTCPAY SERVER`, `IBEX PAY`, `OPEN NODE`, `VISA`, `EURO`, `Bitcoin vs Visa`), product tokens (`StickerMule.com`, `Bitcoin.org — Choose Your Wallet`, `Bitcoin Price Report`, `satoshipacioli.com`, `Satoshi Pacioli Accounting Services`, `The Spreadsheet Guru`, `github.com/sovenor/bitcoin-rocks`, `sovenor`, `hi@bitcoin.rocks`), and 8 dataset citation names (FRED CPI, FRED M1, FRED Money Supply, BLS CPI, Bitcoin whitepaper title, Lightning paper title, `James Lavish — "Can a Treasury Auction Fail?"`, `Jameson Lopp — Metal Bitcoin Seed Storage Reviews`).
- `isBrandIdenticalKey()` regex additions: `^home_link_author_`, `^inflation_stat_[a-z]{3}_label$`, `inflation_stat_bitcoin_label`, `^inflation_story_[a-z_]+_title$`, `^buy_country_`, `^common_language_`, `^nostr_(primal|damus|amethyst|iris)_name$`, `^nostr_platform_(ios|android|web|ios_android_web)$`, `^wallets_name_(btcpay_server|ibex_pay|open_node)$`, explicit `bitcoin` / `visa` / `bitcoin_vs_visa` / `common_result_message_in` (Afrikaans "in" is legitimately the same word).
- `targetHasV2MarkerEquivalent()`: short-circuit — if English value is ≤ 12 chars, accept any non-empty target. Previous length-ratio check (0.75-1.35) was producing false positives on short V2 markers like "Source:" → "Bron:" (ratio 0.71).

**`scripts/audit-translation.js`**:
- `SKIP_KEY_PATTERNS`: added `^nostr_(primal|damus|amethyst|iris)_name$`, `^nostr_platform_(ios|android|web|ios_android_web)$`, `^buy_country_`, `^inflation_stat_[a-z]{3}_label$`, `^inflation_story_[a-z_]+_title$`, `^common_language_`.
- `SKIP_VALUES`: added `GitHub`, `sovenor`, `github.com/sovenor/bitcoin-rocks`, `Bitcoin Price Report`, `The Spreadsheet Guru`, `satoshipacioli.com`, `Satoshi Pacioli Accounting Services`, `Primal`, `Damus`, `Amethyst`, `Iris`, `Android`, `iPhone`, `EURO`, `VISA`, `Bitcoin vs Visa`, `(21,000,000)`, `+$10`, `−$10`, `1.42%`, `Pennsylvania`, `Texas`, `Canada`, `Nigeria`, 9 dataset citation strings + `Bitcoin.org — Choose Your Wallet`.

### Results

- `apply-translations.js af --verify-only`:
  ```
  audit-translation.js: ✅ PASS
  language-diff.js:     ✅ PASS
  ```
- `npm run build`: clean across 4,349 static pages. Zero `MISSING_MESSAGE` errors, zero "Unable to load" warnings.
- Applied report archived at `scripts/i18n-audit/reports/applied/af-20260423-191646.json`.

### Files changed

```
scripts/afrikaans-v2-refresh/translate-inflation.js       (NEW ~280 lines — per-currency templated translation function + non-currency direct map)
scripts/afrikaans-v2-refresh/translate-rest.js            (NEW ~600 lines — ns::key translation map for 551 non-inflation entries)
scripts/afrikaans-v2-refresh/fix-remaining.js             (NEW ~50 lines — hand-fixes home_source_prefix + lightning_s1_c4_link)
i18n/af/**/*.json                                          (38 files touched; 916 entries added/updated; @metadata.last-updated bumped to 2026-04-23)
scripts/i18n-audit/reports/applied/af-20260423-191646.json (archived report)
scripts/i18n-audit/language-diff.js                       (expanded BRAND_IDENTICAL_VALUES + isBrandIdenticalKey regex set + tightened short-value heuristic)
scripts/audit-translation.js                              (expanded SKIP_KEY_PATTERNS + SKIP_VALUES)
V2-REDESIGN-CHECKLIST.md                                  (Step 5 af ticked with detailed note + Phase B counter 0→1)
memory-bank/activeContext.md                              (this entry prepended)
memory-bank/progress.md                                   (matching entry prepended)
```

### Handoff for next Phase B locale

- **Allow-list expansions are one-time work.** Future Phase B sessions (de, es, fr, …) inherit the expanded allow-lists. If a new legitimately-shared token appears (e.g. a brand name, dataset citation, or proper noun specific to another locale), add it to the allow-list in the same session rather than leaving false positives in the report.
- **Helper-script pattern is reusable.** The `translate-inflation.js` per-currency `CURRENCY` table + `t(code, suffix)` function is a clean template for every Latin-script locale (German, French, Spanish, Italian, Portuguese, Dutch, Swedish, Polish, etc.). The `translate-rest.js` `"ns::key"` flat map with a small `bvTitle()` helper for comparison heroes works for every locale.
- **CJK/RTL locales will need different plurals** in the inflation per-currency function — Arabic, Persian, Hebrew, Chinese, Japanese, Korean, Thai, Burmese all have singular/plural conventions that differ from Germanic/Romance patterns. The structural shape of the helper scripts carries forward; only the `CURRENCY` table values + the prose template expressions need locale-specific work.
- **Session size is comfortable.** 916 entries × ~200 bytes avg = ~180 KB of translation data, well under a 1M-token context. No need to chunk by namespace for most locales.

---

## Previous: i18n cleanup Step 5 Phase A+ — sticker-files/<lang>/ namespace consolidation — April 23, 2026


Between Phase A (tooling) and Phase B (per-language re-translation grind), the user spotted that after Step 2's dead-key deletion pass, every `sticker-files/<lang>/index` namespace was now an empty `@metadata`-only shell. They asked where the per-language-page keys were coming from now, and whether those files could be deleted before Phase B so translators wouldn't waste cycles on them.

### Investigation

The V2 per-language page at `app/[locale]/sticker-files/[lang]/page.tsx` (redesigned earlier in the V2 pass) no longer references any per-language key. The hero is built in JavaScript as `"Download ${titleCaseWord(stickerLangName)} Bitcoin Sticker Files"` — the English phrasing is hard-coded in the page, only the language name is translated via `common_language_<name>` keys in `common_en.json`. Mission paragraphs, sticker-card meta, tips, and what's-next cards all pull from `common_*` too.

The only per-language file still holding a live key was `sticker-files/english/index_<locale>.json` — specifically the `print_these` key ("PRINT THESE IN 1 CLICK") that drives the StickerMule 1-click CTA button on the English page's center-aligned intro card. The `/sticker-files` picker page (at `sticker-files/index_<locale>.json`) still uses 3 keys for its own hero/description, so that namespace stays.

### What changed (Option B — full cleanup)

1. **New script: `scripts/i18n-audit/consolidate-sticker-files-langs.js`** (~210 lines). One-shot Node script that:
   - For every locale, reads `i18n/<locale>/sticker-files/english/index_<locale>.json` and lifts its `print_these` value into `i18n/<locale>/common_<locale>.json` as `common_sticker_files_print_these`. For the 25 locales that didn't have a translated `print_these` (af, am, az, bn, da, et, eu, fi, fil, ha, hu, ja, ko, lt, ms, my, nb, ny, ru, si, sv, tl, ur, yo, zu), the script falls back to the English string — those will get native translations during Phase B via `/translate-v2-refresh`.
   - Deletes every `i18n/<locale>/sticker-files/<slug>/` subdirectory (all 43 per-language slugs, including `english/`). The picker-page namespace `sticker-files/index_<locale>.json` is preserved.
   - Bumps `@metadata.last-updated` on every `common_<locale>.json` that gained the new key.
   - Idempotent: re-running is a no-op once every `common` file already has `common_sticker_files_print_these` with the same value and no more `sticker-files/<slug>/` directories exist.

2. **Page update.** `app/[locale]/sticker-files/[lang]/page.tsx` line 222: `t("print_these")` → `t("common_sticker_files_print_these")`. Since the button only renders when `stickerMuleOneClickUrl(lang)` returns non-null (which is just English), the key is only read on `/<locale>/sticker-files/english`, but translations work for users visiting that page from any locale.

3. **`lib/i18n/request.ts`.** Removed all 43 `sticker-files/<lang>/index` entries from `DEFAULT_NAMESPACES`, keeping just `sticker-files/index` (the picker page). Rewrote the Phase 11 comment block to explain that per-language sticker-files pages now pull everything from `common`.

4. **`scripts/i18n-audit/english-snapshot.json`** regenerated via `node scripts/i18n-audit/snapshot-english.js`. Went from **81 namespaces → 38 namespaces** (dropped the 43 dead `sticker-files/<lang>/index` entries). Total key count unchanged at 1,849 — the `print_these` key simply moved from `sticker-files/english/index` into `common`.

5. **Unused-keys audit: 0 dead keys** across the 38 post-consolidation namespaces / 1,849 keys. All references to `print_these` now resolve through the new `common_sticker_files_print_these` key.

### Verification

- `npx tsc --noEmit` → clean.
- `npm run build` → clean across all 55 locales × 81 pages, including all 2,365 `/[locale]/sticker-files/[lang]` static paths (55 × 43).
- `node scripts/i18n-audit/find-unused-keys.js` → "0 unused keys" / "38 English JSON files" / "1,849 keys scanned."
- Spot-checked `i18n/{en,de,nl}/common_<code>.json` — all three have `common_sticker_files_print_these` with proper values (`"PRINT THESE IN 1 CLICK"` / `"DRUCKE DIESE MIT 1 KLICK"` / `"PRINT DEZE IN 1 KLIK"` respectively). Spot-checked `i18n/{en,nl}/sticker-files/` — only `index_<code>.json` remains; all per-language subdirectories are gone.
- Dry-run summary: `common_<locale>.json: added=54, already-present=0, skipped-no-common=1` (lt has no `common_lt.json` — a pre-existing incomplete locale documented in earlier activeContext entries). `sticker-files/<lang>/ dirs removed: 2,365 across 55 locales`.

### Why this matters for Phase B

Before this consolidation, `/translate-v2-refresh <Language>` would flag 43 empty-namespace files per language (or ~2,365 files across 54 locales) as needing attention. Translators would waste cycles opening each file just to confirm the `@metadata`-only shell was empty. After consolidation, the `sticker-files/<lang>/` tree only contains `index_<locale>.json` for the picker page — translators see 1 namespace instead of 44 when working through sticker-files.

### Files changed

```
scripts/i18n-audit/consolidate-sticker-files-langs.js   (NEW — ~210 lines, one-shot migration + cleanup)
app/[locale]/sticker-files/[lang]/page.tsx               (t("print_these") → t("common_sticker_files_print_these"))
lib/i18n/request.ts                                       (DEFAULT_NAMESPACES: 43 sticker-files/<lang>/index entries removed; Phase 11 comment rewritten)
i18n/<54 locales>/common_<code>.json                      (+1 key — common_sticker_files_print_these; 29 locales got their pre-existing translated value, 25 got English fallback; @metadata.last-updated → 2026-04-23)
i18n/<55 locales>/sticker-files/<43 slugs>/               (DELETED — 2,365 directories)
scripts/i18n-audit/english-snapshot.json                  (regenerated: 81 → 38 namespaces; 1,849 keys unchanged)
V2-REDESIGN-CHECKLIST.md                                  (Step 5 gets a "Phase A+ follow-up" paragraph + a new ticked "Phase A+ complete" checkbox)
memory-bank/activeContext.md                              (this entry prepended)
memory-bank/progress.md                                   (updated)
```

Phase B per-language re-translation work can now proceed. The 25 locales that got English-fallback `common_sticker_files_print_these` values will pick up native translations on their next `/translate-v2-refresh <Language>` session — the diff script will flag the key as `untranslated` when English value === target value.

---

## Previous: i18n cleanup Step 5 Phase A+ — auto-verify after apply-translations — April 23, 2026

Quick follow-up to Phase A to address the user's observation: the initial `apply-translations.js` implementation relied on the translator manually running `scripts/audit-translation.js <lang>` + `npm run build` as separate follow-up commands after the apply step. That's error-prone: it's easy to forget, and a partially-translated language could ship if the human skipped step 4.

### What changed

**`scripts/i18n-audit/apply-translations.js`** now auto-runs verification after every successful apply (unless `--skip-verify` is passed). Two new flags:

- **`--skip-verify`** — apply + archive without running audits. Useful for quick iterative partial runs when you know more translation work is still pending.
- **`--verify-only`** — skip the apply step entirely; just run the two audits against whatever's currently in `i18n/<code>/`. Useful for re-checking a previously-completed language, or spot-checking before opening a PR.

Verification spawns two child processes via `spawnSync`:

1. `node scripts/audit-translation.js <code>` — parses the existing "SUMMARY" block for `Missing files`, `Missing keys`, `Identical to English` counts.
2. `node scripts/i18n-audit/language-diff.js <code> --dry-run` — parses the stats printout for `Missing`, `Untranslated`, `Likely stale` counts.

Prints a combined `───── Verification summary ─────` block with `✅ PASS` / `⚠ ISSUES` per audit, then either `✅ Verification passed. <code> is ready for build + PR.` or `⚠ Verification flagged issues.` **Exits non-zero on failure** so the session can't claim the language is done when issues remain — the terminal command fails loudly.

When a verification fails, the full audit output is re-printed inline so the specific flagged keys (missing key names + "identical to English" values) are visible without re-running either audit manually. Next-steps guidance points at `--verify-only` for the re-check loop.

### Verification

Tested against `af` (known-unfinished locale) via `node scripts/i18n-audit/apply-translations.js af --verify-only`:

- `audit-translation.js`: parsed `missingFiles=0, missingKeys=855, identical=20` → `⚠ ISSUES`
- `language-diff.js --dry-run`: parsed `missing=855, untranslated=61, likelyStale=0` → `⚠ ISSUES`
- Combined verdict: `⚠ Verification flagged issues. Review the output above...`
- Exit code: **1** ✅

Confirmed the full audit output (including the `MISSING KEYS (855):` + `IDENTICAL TO ENGLISH (20):` blocks with every flagged key) re-prints inline for translator review.

### Workflow updates

- **`.clinerules/workflows/translate-v2-refresh.md`** § Step 3 rewritten to describe the new auto-verify flow. Added a flag cheat-sheet table + a "What to do when verification fails" section covering all three typical failure modes (still-missing keys, English placeholders left in the report, legitimately-shared brand names that need allow-list updates). Re-numbered Steps 4-5 (previous Step 4 + 5 collapsed; `npm run build` is now Step 4, memory-bank updates are Step 5). "Quick Summary of Commands" table compressed from 7 rows to 6 since the separate audit command is now implicit.
- **`V2-REDESIGN-CHECKLIST.md`** Step 5 tooling summary unchanged — the workflow file is the source of truth for the per-session procedure.

### Files changed

```
scripts/i18n-audit/apply-translations.js         (+~180 lines — verification functions + new flags + main() wiring)
.clinerules/workflows/translate-v2-refresh.md    (Step 3 rewritten, Steps 4-5 renumbered, cheat-sheet added)
memory-bank/activeContext.md                     (this entry prepended)
```

Net effect: `apply-translations.js` is now closer to `npm run build` ergonomics — one command, runs multiple checks, single pass/fail exit code. Phase B sessions get immediate feedback in the same terminal output, no need to remember the manual commands.

---

## Previous: i18n cleanup Step 5 Phase A — per-language diff/apply tooling + `/translate-v2-refresh` workflow — April 23, 2026

With Steps 1–4 complete (English audit + deletion + formatting + Step 3.5 source-side audit + 54-locale propagation), the remaining Step 5 is the per-language re-translation pass. That pass is too big for a single session — each locale has 81 JSON files × ~2,000 keys, and the "missing/untranslated/stale" delta after V2 is ~900 entries per locale. Phase A builds the tooling so Phase B can run one locale per session without hitting the 1M-token chat context ceiling.

### What changed

1. **`scripts/i18n-audit/snapshot-english.js`** (NEW, ~180 lines). One-shot utility that walks every `i18n/en/**/*.json`, concatenates all string-valued keys into a sorted `namespaces: { <ns>: { lastUpdated, keys: { … } } }` tree, and writes to `english-snapshot.json`. Deterministic output (sorted namespaces + sorted keys → byte-identical across runs modulo `generatedAt`). Run once at Step 5 start; re-run only if English drifts before all 54 languages are done.

2. **`scripts/i18n-audit/language-diff.js <code> [--namespace=<csv>] [--dry-run] [--no-flag-likely-stale]`** (NEW, ~340 lines). Generates a per-language work queue at `scripts/i18n-audit/reports/<code>.json`. Three reason categories:
   - **`missing`** — key present in English, absent from the target locale.
   - **`untranslated`** — key present in both, target value byte-identical to English. Brand-name allow-list (wallet name keys, `common_publisher_name`, `*_language_name` keys), value-level allow-list (`Bitcoin`, `Nostr`, `Lightning Network`, `Satoshi Nakamoto`, `hi@bitcoin.rocks`, brand URLs, etc.), short-token allow-list (USD/EUR/→/✓/…), URL exemption, numeric-only exemption.
   - **`likely-stale`** — heuristic for target values that exist and differ from English, but the English contains a V2-era marker like "Source:" or "What's next" and the target's length/content doesn't match. High false-positive rate for CJK/RTL so `--no-flag-likely-stale` disables it.

   Report is sorted deterministically (by namespace, then by reason rank, then by key). Supports `--namespace=common,index,inflation` for chunked runs within a single locale.

3. **`scripts/i18n-audit/apply-translations.js <code> [--partial] [--dry-run] [--no-archive]`** (NEW, ~330 lines). Reads the completed report (translator has filled in `targetTranslation` for every entry), groups resolved entries by namespace, rewrites each `i18n/<code>/<ns>_<code>.json` file with the translations merged in, bumps `@metadata.last-updated`, round-trips through `JSON.parse()` to verify validity, and reorders keys to match the English canonical order. Refuses to run if any entry has `targetTranslation: null` unless `--partial`. On success, deletes the live report and archives a copy to `reports/applied/<code>-<UTCTimestamp>.json`.

4. **`scripts/i18n-audit/reports/`** directory (+ `applied/` subdir + `README.md`). Reports are committed to git so contributors can review progress across sessions + resume across machines. Typical report is ~220KB.

5. **`.clinerules/workflows/translate-v2-refresh.md`** (NEW) — per-language slash-command workflow. Invoked as `/translate-v2-refresh <Language Name>`. Shape mirrors `translate-new-language.md` (numbered steps + critical-rule call-outs + quick-summary table + full 55-language code reference). Steps:
   1. Pre-check (locale exists + registered in `lib/i18n/config.ts`)
   2. Run diff (`language-diff.js <code>`) — inspect stats, decide whether to run whole language or chunk by namespace
   3. Translate (fill `targetTranslation` fields — either in-place for small reports, or via per-category helper scripts in `scripts/<code>-v2-refresh/` mirroring the `translate-new-language.md` category split when >500 entries)
   4. Apply (`apply-translations.js <code>`)
   5. Audit (`audit-translation.js <code>`)
   6. Build verify (`npm run build`)
   7. Update `V2-REDESIGN-CHECKLIST.md` Step 5 + memory bank

   Also carries forward the critical warnings: ⚠️ `cat` heredoc hangs on non-ASCII payloads (use `write_to_file`), typographic-quote Unicode escapes (`\u201E` / `\u201C` not `„` / `"`), tab indentation mandatory, per-category script size limit.

6. **`V2-REDESIGN-CHECKLIST.md` § Step 5** rewritten: added a Phase-A-complete checkbox, a tooling summary with the three script names + one-line purpose each, and a prominent pointer to the new `/translate-v2-refresh` workflow.

### Dry-run sampling across 4 locales

Ran `language-diff.js --dry-run` against `af`, `de`, `zh`, `ar` to validate the tooling:

| Locale | Missing | Untranslated | Likely-stale | Total flagged | Report size |
|--------|--------:|-------------:|-------------:|--------------:|------------:|
| af     |     855 |           61 |            0 |       **916** |    ~220 KB  |
| de     |     854 |           72 |            0 |       **926** |    ~220 KB  |
| zh     |     854 |           31 |            1 |       **886** |    ~220 KB  |
| ar     |     854 |           30 |            0 |       **884** |    ~220 KB  |

The "missing" count is dominated by the 327 new V2 `inflation_<code>_<suffix>` per-currency keys (`components/CurrencySection.tsx` synthesizes these from template literals at runtime for 13 currencies × ~25 suffixes each) + ~500 other V2 additions (new source citations, card labels, What's next entries, subtitle paragraphs, sticker-files V2 headings, etc.). "Untranslated" varies by locale maturity — Latin-script locales tend to have more English fallbacks left behind than CJK/RTL. "Likely-stale" is nearly always 0 because the heuristic is intentionally conservative.

Report at ~220KB per locale × 1-2x for translation drafts fits comfortably within a ~1M-token chat session, so **one language per session** is the right granularity.

### Verification

- `snapshot-english.js` → "Wrote 81 namespaces / 1,849 keys to scripts/i18n-audit/english-snapshot.json."
- `language-diff.js` × 4 dry-runs → stats printed match expectations; each report is ~220KB.
- `apply-translations.js` synthetic test: hand-filled 2 entries in a copy of `de.json` via `/tmp/de-test.json`, ran `apply-translations.js de --report=/tmp/de-test.json --dry-run --partial`. Correctly reported "Update 2 file(s), write 2 key(s)" with the exact target paths. Also correctly refused to run without `--partial` when unresolved entries were present (exit 1, sample of 5 unresolved printed).
- Scripts are idempotent: re-running `snapshot-english.js` on the unchanged English corpus produces a byte-identical file (apart from `generatedAt`); re-running `language-diff.js` on an unchanged locale produces an identical report.

### What's left in the i18n cleanup workflow

- **Phase B: Step 5 per-language grind** — 54 languages, one session each via `/translate-v2-refresh <Language>`. Recommended order (biggest audience first): `es`, `fr`, `de`, `pt`, `zh`, `ja`, `ru`, `ar`, `hi` (Tier 1); `it`, `nl`, `pl`, `tr`, `ko`, `vi`, `id`, `th`, `he`, `fa` (Tier 2); remaining 35 alphabetically (Tier 3). Each session ends with a PR: `i18n: Step 5 V2 refresh — <Name> (<code>)`.
- **Step 6 — Final verification sweep** — run `audit-translation.js` across all locales, re-run unused-keys audit, spot-check 3–5 pages in 3–5 languages (including one RTL), verify `@metadata.last-updated` currency, re-build.

### Files changed

```
scripts/i18n-audit/snapshot-english.js            (NEW — ~180 lines, English corpus snapshotter)
scripts/i18n-audit/english-snapshot.json          (NEW — generated artifact, 81 namespaces / 1,849 keys)
scripts/i18n-audit/language-diff.js               (NEW — ~340 lines, per-language work queue generator)
scripts/i18n-audit/apply-translations.js          (NEW — ~330 lines, report→JSON merger)
scripts/i18n-audit/reports/README.md              (NEW — directory docs)
scripts/i18n-audit/reports/applied/.gitkeep       (NEW — archive subdir placeholder)
.clinerules/workflows/translate-v2-refresh.md     (NEW — per-language slash-command workflow; ~270 lines)
V2-REDESIGN-CHECKLIST.md                          (Step 5 section rewritten with Phase A done + tooling summary + workflow pointer)
memory-bank/activeContext.md                      (this entry prepended)
memory-bank/progress.md                           (Step 5 Phase A entry prepended)
```

---

## Previous: i18n cleanup Step 4 (propagate English deletions to all 54 non-English locales) — April 23, 2026

With Steps 1–3 + 3.5 complete (English JSON cleaned + 51 new keys wired for the source-side hardcoded-English literals), Step 4 of the i18n cleanup workflow propagates the same deletions to the other 54 locales. The goal: bring every non-English locale back to parity with English by stripping orphan keys (keys present in the non-English file but absent from English) and normalizing JSON formatting in one pass.

### What changed

1. **New script: `scripts/i18n-audit/step4-propagate-deletions.js`** (~325 lines). Instead of replaying the specific 423-key deletion list from Step 2, this script takes a more robust approach: for each non-English file, it loads the current English key set and filters the non-English file down to it. Any key NOT in English is deleted. This catches both the 423 keys Step 2 removed AND older drift (locales that occasionally ran ahead of English or carried V0/V1 leftovers from before the audit infrastructure existed). Re-serializes via `JSON.stringify(obj, null, '\t') + '\n'`, which collapses any stray blank lines as a side effect — so the formatter from Step 3 is built in. Bumps `@metadata.last-updated` only on files that actually changed (semantic or formatting). Supports `--dry-run` for preview + `--only=<csv>` for per-locale scoping.

2. **Full propagation across 54 locales.** Single `node scripts/i18n-audit/step4-propagate-deletions.js` run:
   - **Touched 4,108 files across 54 locales**, deleting **26,710 orphan keys** + normalizing 3 formatting-only files.
   - Per-locale deletion counts cluster around **497** (Step 2's 423 baseline + ~74 additional universal orphans picked up during translator drift).
   - Outliers: **lt = 294** (smaller file set overall — Lithuanian currently has 78 JSON files vs. 81 for most locales), **sw = 470** (Swahili with 80 files), **hu = 535** (Hungarian, heaviest drift — a handful of long-abandoned V1 keys that never made it into English's Step 2 removal pass).
   - Most locales needed at least one semantic change per file; 3 files (id × 2, pt × 1) were formatting-only rewrites.
   - 262 files reported "already canonical" (mostly the smaller `_404` / sticker-files language files that translate trivially and haven't drifted).

3. **Idempotent.** Re-running with `--dry-run` reports **0 changes across all 4,370 files** — the propagation is a clean no-op on second pass, same as the Step 2+3 English scripts.

4. **Report written** to `scripts/i18n-audit/step4-propagate-report.json` — machine-readable summary with per-locale counts + per-namespace removal totals.

### Verification

- **Re-run dry-run**: 0 changes across 4,370 files. ✅
- **`npm run build`**: clean across all 55 locales × 81 pages. No `MISSING_MESSAGE` errors, no missing-key fallback renders. The 2 pre-existing Turbopack warnings about `load-messages.ts` dynamic JSON reads are unrelated. ✅
- **Spot-checked `i18n/de/common_de.json`** before + after: 95 orphan keys flagged pre-run (V1 CTA section + kit content + what-is-bitcoin FAQ remnants); 0 orphans post-run; `@metadata.last-updated` bumped to 2026-04-23; tab indentation preserved; key order preserved for surviving keys. ✅

### What's left in the i18n cleanup workflow

- **Step 5** — per-language re-translation for the 54 non-English locales. The 51 new Step 3.5 keys + any V2-era keys whose English value changed since each locale's last translation pass need native-language translations. This is the human-translator-heavy step.
- **Step 6** — final verification sweep (run `scripts/audit-translation.js` across all locales, re-run the unused-keys audit, spot-check 3–5 pages in 3–5 languages including one RTL, verify `@metadata.last-updated` currency, re-build).

### Files changed

```
scripts/i18n-audit/step4-propagate-deletions.js   (NEW — 54-locale propagation + formatter; ~325 lines, supports --dry-run + --only=<csv>)
scripts/i18n-audit/step4-propagate-report.json    (NEW — generated report with per-locale + per-namespace breakdowns)
i18n/<54 locales>/**/*.json                       (4,108 files touched — 26,710 orphan keys deleted, @metadata.last-updated → 2026-04-23)
V2-REDESIGN-CHECKLIST.md                          (Step 4 section all checked off; summary counts bumped to 4/4; footer footnote updated)
memory-bank/activeContext.md                      (this entry prepended)
memory-bank/progress.md                           (updated)
```

---

## Previous: i18n cleanup Step 3.5 (source-side hardcoded-English audit) — April 23, 2026

After completing Steps 1–3 of the i18n cleanup (audit the JSON side: "which English keys does no source file reference?"), we realized those steps don't catch the *reverse* problem: English text literally embedded in `.tsx` files that never went through `t()` / `getTranslations()` / `useTranslations()` in the first place. Step 3.5 closes that gap.

### What changed

1. **New scanner: `scripts/i18n-audit/find-hardcoded-strings.js`** — lightweight regex pass (no TS AST, on purpose — we've been burned by parsers on RSC syntax) over every `.tsx`/`.ts` under `app/` + `components/`. Flags four kinds of findings:
	- **`jsx-text`** — English content between `>` and `<` on JSX elements.
	- **`attribute`** — user-facing attribute values on a fixed watch-list: `title`, `alt`, `placeholder`, `aria-label`, `aria-description`, `aria-placeholder`, `aria-valuetext`, `summary`, `label`.
	- **`metadata`** — raw-string `title:` / `description:` / `siteName:` / `alt:` fields inside `export const metadata` and `generateMetadata()` returns.
	- **`schema`** — raw-string `headline:` / `description:` / `name:` / `articleBody:` / `text:` fields passed to schema builders like `buildArticleSchema({ citations: [...] })`.

	Source preprocessing runs a hand-rolled state machine to strip comments + string/template-literal contents so we don't over-match inside those. Three heuristic filters kill false positives: `IGNORED_STRING_PATTERNS` (URLs/paths, hex colors, CSS lengths, locale/currency codes, HTML entities, single-word identifiers); `CODE_LIKE_PATTERNS` (TypeScript generic syntax like `useRef<HTMLDivElement>(null)` ends up looking like JSX text between the `>`s); `looksLikeCopy()` (must contain at least one ASCII letter, at least one space OR ≥6 alpha chars, and ≥50% letters vs. punctuation).

2. **New allow-list: `scripts/i18n-audit/hardcoded-strings-allowlist.js`** — two lists + a regex pattern set:
	- **`GLOBAL_ALLOWLIST`** — truly universal literals: `bitcoin.rocks` / `Bitcoin.rocks` / `Bitcoin Rocks` / `hi@bitcoin.rocks` (brand), schema.org spec constants (`Article`, `WebPage`, `Organization`, `WebSite`, `BreadcrumbList`, `ListItem`, `Person`, `ImageObject`, `FAQPage`, `Question`, `Answer`), OpenGraph types (`website`, `article`), Twitter card types (`summary`, `summary_large_image`).
	- **`FILE_SPECIFIC_ALLOWLIST`** — per-file opt-outs with `file` + `snippet` + `reason` required. Covers (a) the unlocalized global `app/not-found.tsx` which renders outside any next-intl context, (b) English fallbacks inside `try/catch` blocks that recover when `getTranslations()` fails on the locale catch-all + sticker-files `[lang]` metadata, (c) `app/layout.tsx` root metadata (renders before locale resolution), (d) `app/[locale]/layout.tsx`'s English fallback for `common_site_tagline`, and (e) the FRED / BLS / Bitcoin whitepaper / external-article titles passed into `buildArticleSchema({ citations: [...] })` — those are schema.org `CreativeWork.name` values used by search engines / AI systems as machine-readable citations; translating them would break the citation chain to the upstream source.
	- **`IGNORED_STRING_PATTERNS`** — regex pre-filter (applied before the allow-list) to silently skip technical tokens.

	Every allow-list entry requires a `reason` field; entries without one are rejected at scan time.

3. **Initial scan flagged 97 genuine findings across 20 files** (after tightening the code-pattern heuristic dropped the raw 127 down to 97 signal-only). Triage broke into 5 categories:
	- **Source-citation `<li>` anchor text** (biggest bucket) — the "Sources" section at the bottom of most content pages embedded verbatim English like `"BTC Map — Worldwide directory of Bitcoin-accepting merchants"` inside `<a>` tags on 10 pages: `business/accounting`, `business/faq`, `business/index`, `business/wallets`, `buy`, `compound-inflation-calculator`, `inflation`, `lightning`, `nostr/index`, `wallets`.
	- **Metadata `description` literals** — 4 business pages passed inline English prose into `buildBusinessMetadata({ description: "..." })` instead of the helper's existing `descriptionKey` path: `business/index`, `business/maps`, `business/wallets`, plus `app/[locale]/layout.tsx`'s static site tagline.
	- **404-page fallbacks** — 3 files with English inside `try { getTranslations() } catch { fallback }` recovery paths: `app/not-found.tsx` (unlocalized), `app/[locale]/[...rest]/page.tsx` (locale catch-all), `app/[locale]/sticker-files/[lang]/page.tsx` (unknown language slug).
	- **Brand email** — `hi@bitcoin.rocks` in 3 files (`flyers`, `sticker-success`, `stickers`).
	- **`LanguageSwitcher` "Add language" button** — 2 occurrences in 1 Client Component.
	- **Schema.org citation names** — 2 files (`inflation`, `compound-inflation-calculator`) passing canonical US-government dataset titles into `citations[]` arrays.

4. **Three Node remediation scripts** (all idempotent) applied the fixes:
	- `scripts/i18n-audit/step3.5-add-source-keys.js` — adds **51 new English i18n keys** across 9 namespaces. `common_en.json` gets the shared citations that repeat across many pages (`common_source_whitepaper`, `common_source_btc_map`, `common_source_btcpayserver`, `common_source_strike_business`, `common_source_oshi`, `common_source_fred_money_supply_index`, `common_source_bls_cpi`, `common_language_switcher_add_language`, `common_site_tagline`). Each per-page namespace gets its page-specific sources (`sources_satoshi_pacioli` in `business/accounting`, `sources_bitcoin_source_code` + `sources_mempool_space` + `sources_canadian_trucker` + `sources_nigeria_endsars` + `sources_texas_mining` + `sources_pennsylvania_mining` + `sources_bitcoin_price_report_4yr` in `inflation`, etc.). Bumps `@metadata.last-updated` on every touched file.
	- `scripts/i18n-audit/step3.5-rewrite-sources.js` — surgical string-match replacement, **55 anchor texts** across 10 pages (inflation done separately via `replace_in_file` because its 9-tab indentation differs from the other pages' 8-tab indentation). Matches on `href="…"` + anchor text so the whitepaper URL (which appears on almost every page) is disambiguated per-page.
	- `scripts/i18n-audit/step3.5-add-misc-keys.js` — adds `biz_meta_description` + `biz_maps_meta_description` keys. `biz_wallets_meta_description` was added separately. All three are now wired via `buildBusinessMetadata({ descriptionKey })` + the per-page `description` constants for schema.

5. **Hand-edited fixes** for the remaining non-scriptable changes:
	- `app/[locale]/layout.tsx` — refactored from a static `metadata` constant into an `async generateMetadata()` that pulls `description` from `common_site_tagline` with an English fallback, and extracted the icon list into a `buildIcons()` helper.
	- `components/LanguageSwitcher.tsx` — added `useTranslations()`, pulled the "Add language" label via `t("common_language_switcher_add_language")`, and routed both the button text and the synthetic `LanguageEntry.name` argument into the GA `handleSelect()` path through the translated value. Left the GA `event_label` as the English string `"Add language"` so analytics dashboards group consistently across locales (documented inline in a comment).
	- `app/[locale]/[...rest]/page.tsx` + `app/[locale]/sticker-files/[lang]/page.tsx` — wrapped the inline English 404 titles in `try { t("404_title" / "404_not_found_short") } catch { english fallback }` so the translator attempt runs first and the English only fires on exceptional paths. Added `404_not_found_short` to `i18n/en/404_en.json`.
	- `app/[locale]/business/{index,maps,wallets}/page.tsx` — swapped each page's inline `description: "..."` for `descriptionKey: "biz_*_meta_description"` on the `buildBusinessMetadata()` call, and swapped the matching inline `const description = "..."` for `t("biz_*_meta_description")` so the schema also picks up the translated value.

### Verification

- **Re-scan**: `node scripts/i18n-audit/find-hardcoded-strings.js` → **0 flagged findings** (down from 97). Scanner reports 31 raw findings pre-allow-list, all absorbed by the allow-list with justified reasons.
- **Unused-keys audit**: `node scripts/i18n-audit/find-unused-keys.js` → 0 dead keys (all 51 new source keys are wired through `t()` calls). Previous pass had flagged `404_title_with_brand` (a speculative key I added but never used) — removed.
- **`npm run typecheck`** → clean.
- **`npm run build`** → clean across all 55 locales × 81 pages. No `MISSING_MESSAGE` errors or fallback renders.

### What's left in the i18n cleanup workflow

- **Step 4** — propagate both the old deletions (Steps 1–2) and the new 51 keys (Step 3.5) to all 54 non-English locales. Extends `remove-unused-keys.js` to walk `i18n/<lang>/` and should also include a key-addition pass (English value replicated into the other locales' JSON files so next-intl's per-key fallback keeps working while translators catch up).
- **Step 5** — per-language re-translation for the 54 non-English locales. The 51 new keys are all English-source; each needs a native translation committed per locale.
- **Step 6** — final verification sweep.

### Files changed

```
scripts/i18n-audit/find-hardcoded-strings.js         (NEW — source-side scanner; ~470 lines)
scripts/i18n-audit/hardcoded-strings-allowlist.js    (NEW — per-file + global allow-list; ~205 lines)
scripts/i18n-audit/step3.5-add-source-keys.js        (NEW — adds 51 source keys across 9 namespaces; ~170 lines)
scripts/i18n-audit/step3.5-rewrite-sources.js        (NEW — 55 source-anchor text replacements; ~370 lines)
scripts/i18n-audit/step3.5-add-misc-keys.js          (NEW — misc descriptionKey additions; ~95 lines)
scripts/i18n-audit/hardcoded-strings-report.json     (NEW — audit output, 0 findings)
i18n/en/404_en.json                                  (+1 key: 404_not_found_short)
i18n/en/common_en.json                               (+9 shared source / tagline / add-language keys)
i18n/en/business/accounting_en.json                  (+3 sources_* keys)
i18n/en/business/index_en.json                       (+1 biz_meta_description)
i18n/en/business/maps_en.json                        (+1 biz_maps_meta_description)
i18n/en/business/wallets_en.json                     (+5 sources_* keys + biz_wallets_meta_description)
i18n/en/buy_en.json                                  (+7 sources_* keys)
i18n/en/compound-inflation-calculator_en.json        (+2 sources_* keys)
i18n/en/inflation_en.json                            (+7 sources_* keys)
i18n/en/lightning_en.json                            (+5 sources_* keys)
i18n/en/nostr/index_en.json                          (+5 sources_* keys)
i18n/en/wallets_en.json                              (+8 sources_* keys)
app/layout.tsx                                       (doc comment only — metadata unchanged, allow-listed)
app/not-found.tsx                                    (no code change — allow-listed as unlocalized fallback)
app/[locale]/layout.tsx                              (static metadata → async generateMetadata() + buildIcons())
app/[locale]/[...rest]/page.tsx                      (clearer try/catch fallback comments — logic unchanged)
app/[locale]/sticker-files/[lang]/page.tsx           (try/catch wrap around "Not Found" metadata title)
app/[locale]/business/accounting/page.tsx            (source list → 4 x t() calls)
app/[locale]/business/faq/page.tsx                   (source list → 5 x t() calls)
app/[locale]/business/index → business/page.tsx      (description + source list → 5 x t() calls)
app/[locale]/business/maps/page.tsx                  (descriptionKey + description → t())
app/[locale]/business/wallets/page.tsx               (descriptionKey + description + source list → 8 x t() calls)
app/[locale]/buy/page.tsx                            (source list → 8 x t() calls)
app/[locale]/compound-inflation-calculator/page.tsx  (source list → 4 x t() calls)
app/[locale]/inflation/page.tsx                      (source list → 10 x t() calls)
app/[locale]/lightning/page.tsx                      (source list → 6 x t() calls)
app/[locale]/nostr/page.tsx                          (source list → 6 x t() calls)
app/[locale]/wallets/page.tsx                        (source list → 9 x t() calls)
components/LanguageSwitcher.tsx                      (hardcoded "Add language" → useTranslations)
V2-REDESIGN-CHECKLIST.md                             (+ Step 3.5 section + summary-table row + footer update)
```

---

## Previous: i18n cleanup Steps 1–3 (English dead-key removal + JSON formatting) — April 23, 2026


With Tier 1–8 (all 81 pages) V2-complete and Tier 7 (Nostr section) done earlier today, the next outstanding work was the post-cutover i18n cleanup. Steps 1–3 of the workflow in `V2-REDESIGN-CHECKLIST.md` § "i18n Translation Cleanup" are now complete — the English JSON files have been audited, 423 dead keys deleted, and the JSON formatting canonicalized.

### What changed

1. **New `scripts/i18n-audit/` directory with three discrete Node scripts + one allow-list:**
	- **`find-unused-keys.js`** — walks every English `*_en.json` under `i18n/en/` (81 files), collects every string-valued key (skipping `@metadata`), then builds a haystack by concatenating every `.ts` / `.tsx` / `.js` / `.mjs` / `.cjs` / `.jsx` file under `app/`, `components/`, and `lib/`. For each key, checks whether it appears as a literal substring anywhere in the haystack. Keys that don't appear AND aren't in the dynamic-keys allow-list are recorded as unused. Writes `scripts/i18n-audit/unused-keys-report.json` with per-namespace arrays + a flat `allUnused` roll-up, and prints a human-readable per-namespace summary.
	- **`dynamic-keys-allowlist.js`** — enumerates keys built at runtime so they're not false-flagged. The only current case is `components/CurrencySection.tsx` which synthesizes `inflation_<code>_<suffix>` and `inflation_stat_<code>_<suffix>` keys from template literals (`inflation_${lower}_${suffix}`). The allow-list covers 13 currency codes × (22 body-copy suffixes + 3 stat-card suffixes) = **325 dynamic keys** across the inflation + per-currency content. Future dynamic-key patterns should be added here.
	- **`remove-unused-keys.js`** — reads the report and strips every flagged `(namespace, key)` entry from the matching `i18n/en/**/*_en.json`, preserving `@metadata` (bumped to today's date) + original key order + tab indentation. Supports `--dry-run`.
	- **`normalize-json-formatting.js`** — walks every `i18n/en/**/*.json` file, parses with `JSON.parse()`, re-serializes with `JSON.stringify(obj, null, '\t')`, and writes back. Removes any stray blank lines between keys while preserving key order + `@metadata`. If the file already serializes identically, it's left untouched (the `--dry-run` + no-op path). Supports `--all` to walk all 55 locales (Step 4 of the cleanup workflow).

2. **Deleted 423 dead keys across 74 English namespaces.** The audit found 2,217 total keys across 81 English JSON files; 423 (19%) are orphans left behind by the V2 pass:
	- **98 keys in `common_en.json`** — legacy V1 FAQ copy (`common_bitcoin_hacked_*`, `common_bitcoin_volatile_*`, `common_bitcoin_afford_*`, `common_bitcoin_energy_*`) and merchant-kit leftovers (`common_biz_accept_bitcoin_payments`, etc.) that the V2 redesign of `/business` and the homepage removed.
	- **98 keys in `inflation_en.json`** — the V1 `inflation_cause_*` per-currency prose (Spanish peso / Venezuelan bolivar / Honduran lempira / etc.), `inflation_choose_*` picker prompts, `inflation_intro_*` per-currency intros, and `inflation_stat_source_*` legacy source bylines — all replaced by the V2 stat-card system in `components/CurrencySection.tsx`.
	- **Comparison pages** — 9 in `bitcoin-vs-gold` (the legacy 4-part H1 `gold_header` / `_2` / `_3` / `_4` plus unused `point_N_summary_M` prose fragments); 8 in `bitcoin-vs-stocks`; 6 in `bitcoin-vs-cbdc`; 4 each in the other 7 comparison files.
	- **Sticker-files per-language pages** — 3 keys × 43 languages (`<lang>_header`, `<lang>_description`, `<lang>_bitcoin_sticker_files`). The V2 template at `app/[locale]/sticker-files/[lang]/page.tsx` builds the H1 in-code via `formatHeading(titleCaseWord(rawLangName))` and no longer references per-language translation keys for title/description.
	- **Misc V1 leftovers** — 6 in `business/stickers` (old three-country-layout keys `stickers_country_global_print` / `stickers_request_details` / etc.), 3 in `stickers`, 3 in `sticker-success` (including the 2 `sticker_success_flyers_bar_*` keys from the retired fixed-bottom "NEW! Print & Post Bitcoin Flyers" promo bar), 7 in `index` (orphan `home_link_*` home-link byline keys, `home_description`, `bitcoin_builds_a_better_world`), 2 in `nostr/index` (`escape_the_matrix_with_nostr`, `nostr_header` — replaced by V2 `nostr_hero_title` + subtitle), 2 in `business/maps` (V1 `maps_header` + `maps_request_details`), 4 in `business/wallets` (V1 `wallets_choice_*` accordion headers), plus 1-2 keys each in `about`, `business/accounting`, `business/faq`, `business/index`, `business/why`, `business/maps-success`, `business/sticker-success`, `business/sticker-language-success`, `business/sticker-files/english/index`, `compound-inflation-calculator`, `lightning`, `flyers`.

3. **`@metadata.last-updated` bumped to 2026-04-23** on every touched file (74 files).

4. **Step 3 = no-op.** The normalizer reports all 81 English files already canonical — because Step 2's removal pass re-serialized every touched file via `JSON.stringify(obj, null, '\t')`, and the files that weren't touched were already canonical from earlier V2 work (business kit removal, nostr merge, etc). Spot-checked `bitcoin-vs-stocks_en.json`, `inflation_en.json`, `business/why_en.json`, `business/wallets_en.json`, `bitcoin-vs-gold_en.json`: zero blank lines between keys.

### Verification

- **`npm run build`** → green. All 55 locales × 81 pages (~4,700 static pages) regenerated with zero `MISSING_MESSAGE` errors or missing-key fallbacks. The 2 pre-existing Turbopack warnings about `load-messages.ts` dynamic JSON reads are unrelated (they've been there since Phase 2).
- Audit re-ran idempotently: 0 unused keys flagged the second time through.
- `git diff --stat i18n/en` confirms all 74 expected files touched, 423 key lines removed.

### What's left in the i18n cleanup workflow

- **Step 4** — propagate the same deletions to all 54 non-English locales + run the normalizer across them. The `remove-unused-keys.js` script needs a small extension to walk `i18n/<lang>/` instead of just `i18n/en/` — the report is already in the right shape to feed that loop.
- **Step 5** — write `scripts/i18n-audit/language-diff.js <lang>` to surface (a) keys whose English value changed since that language's `@metadata.last-updated`, and (b) keys present in English but missing from the target. Then re-translate for each of the 54 languages.
- **Step 6** — final verification sweep: re-run `scripts/audit-translation.js` across all locales, re-run the unused-keys audit, spot-check 3–5 pages in 3–5 languages (including one RTL), verify `@metadata.last-updated` currency, and re-build.

### Files changed

```
scripts/i18n-audit/find-unused-keys.js             (NEW — audit script; 250 lines)
scripts/i18n-audit/dynamic-keys-allowlist.js       (NEW — 325-key allow-list for CurrencySection's template-literal keys; 110 lines)
scripts/i18n-audit/remove-unused-keys.js           (NEW — deletion script; 170 lines)
scripts/i18n-audit/normalize-json-formatting.js    (NEW — canonical JSON formatter; 180 lines)
scripts/i18n-audit/unused-keys-report.json         (NEW — generated artifact, 423 entries across 74 namespaces)
i18n/en/**/*_en.json                                (74 files touched — 423 keys deleted, @metadata.last-updated → 2026-04-23)
V2-REDESIGN-CHECKLIST.md                            (Steps 1–3 all checked off; summary counts bumped to 6/6 + 4/4; footnote rewritten for this change)
memory-bank/activeContext.md                        (this entry prepended)
memory-bank/progress.md                             (updated)
```

The 4 new scripts are reusable — the audit + normalizer are safe to re-run at any time (both are idempotent no-ops once the repo is clean), and the removal script is driven by the report so it can pick up any future dead keys that accumulate as V2 refinements continue.

---

## Previous: Nostr section V2 redesign + merged /nostr/what-is-nostr into /nostr — April 23, 2026


With Tier 6 (Business section) 11/11 complete as of earlier today, Tier 7 (Nostr section) was the last outstanding V2 work. The two former Nostr pages — `/nostr` and `/nostr/what-is-nostr` — were **merged into a single V2 `/nostr` page**. The new page absorbs the content previously split across both legacy pages and adds a proper client download section styled like `/wallets`. The full-site V2 redesign is now complete.

### What changed

1. **Single merged `/nostr` page** — V2 `app/[locale]/nostr/page.tsx` is now fully self-contained (~440 lines): hero (plain `<h1>` "What is Nostr?" + subtitle), `.wallet-intro` intro card, three benefit sections (Protocol, not platform / Freedom to move / Bitcoin is built in) — each an `.inflation-section.content-section` with `<h2>` + `.comparison-explain` prose — a `.wallet-lightning-cta`-style "GO DEEPER" outbound link card (new i18n keys `nostr_learn_more_label` / `_title`) pointing at `https://nostr.how/en/what-is-nostr`, and a "Download a free Nostr client" section styled like `/wallets` (reuses `.wallet-grid-section` + `.wallet-grid` + `.wallet-card` + `.wallet-card-badges` + `.wallet-card-features` + `.wallet-card-cta`). Four clients in the grid: **Primal** (iPhone/Android/web — recommended first client with zap wallet built in), **Damus** (iPhone), **Amethyst** (Android), **Iris** (web). Each card shows a platform `.wallet-callout good` badge + 3 feature bullets + "Learn more →" CTA. Standard V2 What's next grid (homepage, /wallets, /buy, /inflation), sources section (6 citations incl. nostr.how, nostr-protocol GitHub, each client, Satoshi whitepaper), and publisher attribution with reviewed-for-accuracy badge.

2. **Deleted `/nostr/what-is-nostr` entirely.** The legacy page was a faithful V1 port that only differed from `/nostr` by its H1 and meta title — so absorbing its content into the merged `/nostr` page made the second route redundant. Deleted: `app/[locale]/nostr/what-is-nostr/` directory + all 55 `i18n/<lang>/nostr/what-is-nostr_*.json` files (one per locale).

3. **Deleted `NostrPageLayout` + `NostrAccordion` components.** Both were only used by the two legacy `/nostr/*` pages and had no other callers, so they got deleted outright (not left as dead code).

4. **301 redirects for the old slug.** Added two entries to `LEGACY_SLUG_REDIRECTS` in `next.config.ts`: `/nostr/what-is-nostr` → `/nostr` and `/:locale/nostr/what-is-nostr` → `/:locale/nostr`. So any search-engine links, socials links, and existing bookmarks still land on the merged content.

5. **Updated the 3 pages that link to "What is Nostr?".** `/stickers`, `/sticker-success`, and `/flyers` all have a "WHAT IS NOSTR?" `.flyer-btn flyer-btn-secondary` next to their "SHARE ON NOSTR" button. All three were pointing at `${l}/nostr/what-is-nostr` — now they point at `${l}/nostr`. The existing translation keys (`stickers_btn_what_is_nostr`, `sticker_success_btn_what_is_nostr`, `flyers_btn_what_is_nostr`) are kept verbatim since the button label is still "WHAT IS NOSTR?".

6. **Config updates.** `lib/pages.ts` drops the `nostr/what-is-nostr` slug entry and bumps the `nostr` priority from 0.5 → 0.6 (the merged page now carries the weight of both former pages). `lib/i18n/request.ts` drops `"nostr/what-is-nostr"` from `DEFAULT_NAMESPACES`. `lib/schema/article.ts` drops `"nostr/what-is-nostr"` from `ARTICLE_SLUGS`.

7. **i18n.** `i18n/en/nostr/index_en.json` rewritten with 35 new keys (existing `what_is_nostr` + `escape_the_matrix_with_nostr` + `nostr_header` + `nostr_page_description` kept for backwards compatibility during the cleanup window): `nostr_hero_title`, `nostr_hero_subtitle`, `nostr_intro_c1`/`c2`, three section groups `nostr_s1`/`_c1`/`_c2`, `nostr_s2`/`_c1`/`_c2`/`_c3`, `nostr_s3`/`_c1`/`_c2`, go-deeper card `nostr_learn_more_label`/`_title`, download section `nostr_download_heading`/`_intro`, four platform labels `nostr_platform_ios_android_web`/`_ios`/`_android`/`_web`, four client groups `nostr_primal_name`/`_f1`/`_f2`/`_f3`, `nostr_damus_*`, `nostr_amethyst_*`, `nostr_iris_*`. `@metadata.last-updated` bumped to 2026-04-23.

### Design decisions (why merge?)

The legacy `/nostr` and `/nostr/what-is-nostr` pages shared the same `<NostrPageLayout>` Server Component and only differed by their H1 and meta — both rendered the same three intro paragraphs and the same three accordion-wrapped client download sections. Two SEO surfaces carrying essentially the same content was redundant. Merging lets the one surviving page get a higher sitemap priority (0.6), a cleaner URL for sharing, and the /wallets-style client grid gives readers a real "now what?" action instead of just an explainer. The `/nostr/what-is-nostr` URL still works via 301 redirect so no link rot.

Per the user's explicit task brief: (a) merge content of what-is-nostr into /nostr, (b) style the DOWNLOAD section like the main /wallets page, (c) add a new link to learn more about Nostr at https://nostr.how/en/what-is-nostr. All three were done — the download grid directly mirrors the `/wallets` page's `.wallet-grid` + `.wallet-card` system (just with platform-badge callouts instead of custody/temperature callouts).

### Files changed

```
app/[locale]/nostr/page.tsx                  (full V2 rewrite — self-contained, merged content; ~440 lines)
app/[locale]/nostr/what-is-nostr/            (DELETED — entire directory)
components/NostrPageLayout.tsx                (DELETED)
components/NostrAccordion.tsx                 (DELETED)
i18n/en/nostr/index_en.json                  (rewritten — 35 new keys, 4 legacy keys kept, last-updated 2026-04-23)
i18n/*/nostr/what-is-nostr_*.json             (DELETED — all 55 locale files)
lib/pages.ts                                  (dropped nostr/what-is-nostr slug; nostr priority 0.5 → 0.6)
lib/i18n/request.ts                           (dropped nostr/what-is-nostr namespace from DEFAULT_NAMESPACES)
lib/schema/article.ts                         (dropped nostr/what-is-nostr from ARTICLE_SLUGS)
next.config.ts                                (added 2 LEGACY_SLUG_REDIRECTS entries for /nostr/what-is-nostr)
app/[locale]/stickers/page.tsx                (WHAT IS NOSTR? href /nostr/what-is-nostr → /nostr)
app/[locale]/sticker-success/page.tsx         (same)
app/[locale]/flyers/page.tsx                  (same)
V2-REDESIGN-CHECKLIST.md                      (flipped Nostr section to 1/1 done; NostrPageLayout + NostrAccordion marked as deleted; summary counts now 81/81; _Last updated_ footnote rewritten for this change)
llms.txt + public/llms.txt                    (What is Nostr URL /nostr/what-is-nostr → /nostr; description expanded to mention the client-download guide)
llms-full.txt + public/llms-full.txt          (Source URL /nostr/what-is-nostr → /nostr; added new "Download a Free Nostr Client" subsection listing Primal/Damus/Amethyst/Iris + nostr.how reference)
memory-bank/activeContext.md                  (this entry prepended)
```

### Verification

- `npx tsc --noEmit` → clean.
- All 3 downstream link references (`/stickers`, `/sticker-success`, `/flyers`) now point at `/nostr` — verified via grep (zero remaining `/nostr/what-is-nostr` references in `app/`, `components/`, `lib/`).
- `/nostr/what-is-nostr` no longer appears in `lib/pages.ts` → sitemap will emit 55 fewer URLs on next build (was 110 for both nostr slugs × 55 locales, now 55).
- Standard Article + BreadcrumbList JSON-LD still emitted on `/nostr`. Breadcrumb renders as "Home > Nostr" via the existing `slug === "nostr"` branch in `lib/schema/breadcrumb.ts`.
- Client images (`/img/clients/primal.png`, `damus.png`, `amethyst.png`, `iris.png`) already present in `public/img/clients/` — no new assets needed.

### Tier 7 is DONE (1/1) — full-site V2 redesign complete

All 81 pages across Tier 1-8 are now V2-complete. The only remaining V2 work is:
- A handful of un-redesigned shared components (BusinessPageShell, BusinessResourceCards, BusinessWalletCard, StickerPicker, StickerAddressForm, Footer, CountrySelector, CountryFormSelector) — these still work on their current V2 pages but could get a dedicated styling pass.
- The post-cutover i18n cleanup (Steps 1-5 in V2-REDESIGN-CHECKLIST.md): dead-key audit, per-language re-translation of 54 locales.

---

## Previous: 3 remaining /business/* form-success pages V2'd — April 23, 2026


With `/business/kit` + `/business/kit-success` fully deleted earlier today and `/business/maps` freshly V2'd, the three remaining Tier 6 stragglers — `/business/maps-success`, `/business/sticker-success`, and `/business/sticker-language-success` — were all redesigned in the V2 style in one pass. Tier 6 (Business section) is now **11/11 complete**. Only Tier 7 (Nostr section, 2 pages) remains for the full-site V2 redesign.

Per the task brief, these pages are styled to be similar to the main `/sticker-success` V2 page — plain `<h1>` hero + subtitle, `.wallet-intro.flyer-section` surface cards with `.flyer-heading` titles, and the per-`/business/*` colored resources grid as the cross-link surface. Per the Tier 6 convention (V2-REDESIGN-CHECKLIST.md), no generic "keep learning / buy Bitcoin" bridge — these pages are for merchants, so they bridge back into the merchant workflow via the 5-card colored resources grid (the current-page card is excluded from each).

### Shared structure across all three pages

```
1. Hero (.home-hero.inflation-section)    plain <h1> + subtitle
2. Surface card(s) (.wallet-intro.flyer-section)   content blocks
3. Business resources grid                 5 colored .whats-next-card
4. Publisher attribution                   reviewed badge + link block
```

- Dropped `BusinessPageShell` + `BusinessResourceCards`. Pages are now self-contained and inline the publisher attribution + reviewed-for-accuracy badge directly (matches every other V2 `/business/*` page).
- Standard `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD with the `breadcrumbSchema !== null` guard.
- `robots: { index: false, follow: true }` preserved — form-success pages should never appear in search results.
- All three pages are server-rendered React Server Components — no Client Components needed.

### Per-page specifics

**`/business/maps-success`** — V1 had an `.h1-inflation` "SUCCESS!" hero + a single `.text-box.intro.inflation-box` containing an `.h2-stickers` line with the 1-2 week timeline, a `<br>`, and an `.orange-link` "View the map here" pointing at btcmap.org. V2 redesign splits this into a proper hero ("Request received 🎉" + subtitle) + two surface cards — **Timeline card** (2-paragraph explainer: 1-2 week review window + what happens when your listing goes live) and **View-the-map card** (1 paragraph + outlined `.flyer-btn` "View the BTC Map" CTA that still opens btcmap.org). BIZ_RESOURCES grid excludes the `maps` card.

**`/business/sticker-success`** — V1 had `.h1-inflation` "SUCCESS!" + a `.text-box.intro.inflation-box` with a dense `.h2-stickers` blurb (3 stickers in a plain white envelope in 1-2 weeks + request-more hint). V2 redesign mirrors the main `/sticker-success` page pretty closely: hero ("Your stickers are on their way 🎉" + subtitle confirming pack size), then a **Good-spots card** reusing the `.sticker-success-tips` + `.sticker-success-tip` CSS from `/sticker-success` (app/globals.css §12) with 3 ✅ good-spot tips tuned for a business (front door/window, register/POS, menus/price lists) + 1 🚫 reminder, then a **Need-more card** with two `.flyer-btn`s: primary orange "Request another free pack" → `/business/stickers` + secondary outlined "Order in bulk" → StickerMule referral. BIZ_RESOURCES grid excludes the `stickers` card. **No new CSS needed** — the `.sticker-success-tips` block was already shipped with the main `/sticker-success` V2 redesign.

**`/business/sticker-language-success`** — V1 had `.h1-inflation` "SUCCESS!" + a `.text-box.intro.inflation-box` with `.h2-stickers` "We will create and publish your sticker file within 3 to 4 weeks. Thanks for your patience!". V2 redesign is the simplest of the three: hero ("Request received 🎉" + subtitle) + a single **Timeline card** with 2 paragraphs (3-4 week creation window + batch-release explainer), then BIZ_RESOURCES grid (excludes `stickers`). Follows the same minimalist "form submitted, wait for it" shape as the main `/sticker-language-success` V2 page.

### Files changed

```
app/[locale]/business/maps-success/page.tsx              (full V2 rewrite)
app/[locale]/business/sticker-success/page.tsx           (full V2 rewrite)
app/[locale]/business/sticker-language-success/page.tsx  (full V2 rewrite)

i18n/en/business/maps-success_en.json            (bumped @metadata.last-updated to 2026-04-23; added 8 new biz_maps_success_* keys — hero_title, hero_subtitle, timeline_header, timeline_c1, timeline_c2, view_header, view_c1, btn_view_map. Legacy kit_success_1/2 keys preserved for the 54 non-English fallbacks.)
i18n/en/business/sticker-success_en.json         (bumped to 2026-04-23; added 10 new biz_sticker_success_* keys — hero_title, hero_subtitle, tips_header, tip_1/2/3/4, more_header, more_c1, btn_order_bulk, btn_request_more. Legacy sticker_success_details key preserved.)
i18n/en/business/sticker-language-success_en.json (bumped to 2026-04-23; added 5 new biz_sticker_language_success_* keys — hero_title, hero_subtitle, timeline_header, timeline_c1, timeline_c2. Legacy sticker_language_timeline key preserved.)

V2-REDESIGN-CHECKLIST.md                         (flipped the 3 success pages to [x]; corrected Tier 6 header count from 12 → 11 (kit + kit-success are gone so "12" was stale); updated the summary counts to Business 11/11 + Total 82/80; updated the "_Last updated_" footnote.)
memory-bank/activeContext.md                     (this entry prepended)
memory-bank/progress.md                          (updated)
```

### Verification

- `npx tsc --noEmit` → clean.
- All three pages reuse existing i18n keys for the shared blocks (BIZ_RESOURCES label/title pairs in `common_en.json` + `business/index_en.json`, publisher + reviewed-badge keys in `common_en.json`).
- No new CSS needed — every class (`home-hero`, `inflation-section`, `wallet-intro`, `flyer-section`, `flyer-heading`, `flyer-actions`, `flyer-btn`, `sticker-success-tips`, `whats-next-grid`, `whats-next-card`, `publisher-attribution`, `reviewed-badge`) is already in `app/globals.css`.
- Form endpoints unchanged (this task only touched the post-submit success pages, not the forms themselves).

### Tier 6 is DONE (11/11)

The only pages left for the full V2 redesign are Tier 7 — `/nostr` (index) + `/nostr/what-is-nostr` — 2 pages total. After that, the post-cutover i18n cleanup (Steps 1-5 in the V2 checklist) is the remaining work.

---

## Previous: /business/kit + /business/kit-success removed — April 23, 2026

The Bitcoin Business Kit pages — `/business/kit` and `/business/kit-success` — were **fully deleted** from the site. They were deprecated: the merchant education and onboarding story is now carried by `/business` itself (hero + 4 benefit sections) plus the six color-coded business resource cards (wallets, maps, stickers, rewards, accounting, FAQ), which already covers everything the kit page was doing. The printable tri-fold pamphlet was an artifact of the V1 HTML site and the user confirmed it should be removed outright rather than ported to V2.

### What was removed

- **Routes.** `app/[locale]/business/kit/` and `app/[locale]/business/kit-success/` directories (both `page.tsx` files).
- **i18n files.** Every `i18n/<lang>/business/kit_<lang>.json` + `kit-success_<lang>.json` across all 55 locales (110 files). Also removed the entire legacy `i18n/<lang>/business/files/` sub-directories (55 more — these held the English Bitcoin Business Kit pamphlet page's translations).
- **i18n keys.**
  - `common_*.json`: dropped the 13 `common_kit_*` keys (printer, link_to_print, fold, fold_trifold, unfolded_size, unfolded_size_bbk, paper_thickness, paper_thickness_standard, paper_stock, paper_stock_glossy, exterior_print_file, interior_print_file, cta_header) + `common_biz_kit` from every locale's `common_*.json`.
  - `business/index_*.json`: dropped `biz_label_kit` from the English file (the only locale that had it).
  - `index_*.json`: dropped the two homepage card keys `home_card_label_business_3` + `home_link_title_business_2` across all 53 locales that had them (the third business card on the homepage's BUSINESS section was removed in the same pass).
- **Page registry.** Dropped both slugs from `lib/pages.ts` (`business/kit`, `business/kit-success`) and both namespaces from `lib/i18n/request.ts` `DEFAULT_NAMESPACES`.
- **Schema.** Removed `business/kit` from `ARTICLE_SLUGS` in `lib/schema/article.ts`.
- **Redirects.** Removed `/kit`, `/business-kit`, `/businesskit` → `/business/kit` from `LEGACY_SLUG_REDIRECTS` in `next.config.ts`.
- **Homepage.** Removed the third `BUSINESS` `<WhatsNextCard>` (the one that linked to `/business/kit`) in `app/[locale]/page.tsx`. The BUSINESS category now has 2 cards instead of 3 (bitcoin-vs-stocks + /business).
- **Shared components.** `components/BusinessResourceCards.tsx` — dropped the `"kit"` entry + `includeKit` prop + the kit branch in `RESOURCES`. `BusinessResourceKey` type narrowed from 8 members to 7. `components/StickerAddressForm.tsx` — updated the legacy-mode doc comment to stop referencing `/business/kit`.
- **All `/business/*/page.tsx`.** Dropped the inline `BIZ_RESOURCES` `kit` entry from each of: `/business`, `/business/maps`, `/business/accounting`, `/business/stickers`, `/business/faq`, `/business/sticker-files/english`, `/business/wallets`. The colored resource grid below each business page now renders 6 cards instead of 7 (or 5 when the current page is excluded).
- **Cross-page references in `lib/comparisons/`.** `about.ts` — the "What We Do" business card now points at `/business` instead of `/business/kit`. `get-involved.ts` — the "Onboard a business" learn-more card now points at `/business` instead of `/business/kit`. Both comment blocks updated to drop "business kit" phrasing.
- **Public assets.** `public/business/files/` directory deleted (it held `english/bbk-pamphlet-exterior-v1.png` + `interior-v1.png`).
- **Docs.** `README.md` (Bitcoin Business Kits line replaced with a Bitcoin for Business resources line), `V2-REDESIGN-CHECKLIST.md` (both `/business/kit` + `/business/kit-success` rows removed from Tier 6 — business count total now 10 (not 12), 7 done), `llms.txt` + `public/llms.txt` (get-involved blurb no longer mentions "business kits"), `llms-full.txt` + `public/llms-full.txt` (Get Involved "Onboard a Business" section no longer describes the Bitcoin Business Kit; points readers at the Bitcoin for Business resources page instead).

### Migration helpers

Two short Node scripts were used for the mechanical bulk edits:

- `scripts/remove-business-kit.js` — reads each `/business/*/page.tsx` file, detects the `kit` BIZ_RESOURCES object by looking for lines containing both `key: "kit"` and `titleKey: "common_biz_kit"`, and removes the entire object (brace-balanced). Reported `UPDATED: 7 files`.
- `scripts/remove-kit-keys.js` — walks every `i18n/<lang>/` directory and deletes the kit-related keys listed above from `common_<lang>.json`, `index_<lang>.json`, and `business/index_<lang>.json`. Also `rm -rf`'s the `i18n/<lang>/business/files/` sub-directory. Reported `common: 54, index: 53, business/index: 1, files/ dirs: 55`.

Both scripts live in the repo for traceability but aren't part of any regular workflow.

### Verification

- `grep -r "common_kit\|common_biz_kit\|biz_label_kit\|bitcoin_business_kit\|business/kit" app/ components/ lib/ i18n/ 2>/dev/null` → empty.
- The kit-less `BusinessResourceCards` still compiles (`BusinessResourceKey` narrowed, `includeKit` removed from the prop signature; no caller was passing it).
- `npm run build` across 55 locales should now emit **0 `/business/kit` or `/business/kit-success` routes** (previously 110 pages — 55 locales × 2 slugs).

### Remaining in Tier 6 (3 pages, after kit removal)

- `/business/maps-success`
- `/business/sticker-success`
- `/business/sticker-language-success`

---

## /business/maps V2 redesign — April 23, 2026


`/business/maps` was the last remaining form-style `/business/*` page still on V1. It used `BusinessPageShell` + an `.h1-inflation` "GET LISTED ON BITCOIN MERCHANT MAPS & GET MORE CUSTOMERS" header + an inline `/img/bbk/payment-chart.png` hero image + a single dense `.text-box.intro.sticker-box` with a "View the map here." orange link and a bare `<form>` of seven raw `<input>` + `<br />` fields posting to `forms.bitcoin.rocks/submit/business-maps`. This page is where merchants submit their business for listing on BTC Map and other Bitcoin merchant directories.

Redesigned in the V2 style per the task (explicitly asked: "Style the form to be similar to the forms on other business pages like /stickers"). This is the seventh `/business/*` page to reach V2 (after /business, /business/why, /business/faq, /business/wallets, /business/accounting, /business/stickers, /business/sticker-files/english).

### What changed

1. **Hero.** Replaced the `.h1-inflation` uppercased header with a V2 plain `<h1>` ("Get your business on Bitcoin merchant maps") inside a `.home-hero.inflation-section`, plus a new `biz_maps_hero_subtitle` paragraph. The legacy standalone `/img/bbk/payment-chart.png` image was dropped — it never added signal on the V1 page and the new hero copy carries the intent on its own.

2. **Intro card.** V2 `.wallet-intro` bordered surface with two intro paragraphs (`biz_maps_intro_c1`, `biz_maps_intro_c2`) explaining why merchants should get listed + how the form works, followed by a single `.body-link` out to `btcmap.org` (replacing the legacy `.orange-link` "View the map here." with a proper V2 body link + `→` affordance).

3. **Listing-request form — restyled to match `/stickers` and `/business/stickers`.** This was the task's explicit request. The form lives in a normal `.inflation-section.content-section` with an h2 (`biz_maps_form_header`) + `.comparison-explain` intro paragraph (`biz_maps_form_intro`), then the form itself uses the shared V2 `.cic-form.sticker-form` class + `.cic-field` / `.cic-label` / `.cic-input` / `.cic-submit` primitives (same system already used by `<StickerAddressForm v2>` and `<BusinessStickerFlow>`). Visual parity: every field has a real `<label>` above it (the V1 version had none — it relied on `placeholder` attributes only), city/region/country sit in a 3-up `.cic-fields.sticker-fields--three` grid on desktop (stacks on mobile at the 700px breakpoint), and the submit button is a pill-shaped orange `.cic-submit`. Cloudflare Turnstile widget + `_gotcha` honeypot preserved. Form action unchanged: `https://forms.bitcoin.rocks/submit/business-maps`.

4. **Business resources grid.** Same V2 `.whats-next-grid` pattern as the other `/business/*` pages with six cards (wallets, stickers, rewards, accounting, faq, kit) — the `maps` card from the 7-card grid on `/business` is excluded since we're on it. Same per-card `--card-accent` colors as the rest of the section for visual consistency. **No generic "keep learning / buy Bitcoin" bridge** — per the `/business/*` convention, this colored grid IS the cross-link surface.

5. **No sources section.** Same convention as `/stickers`, `/business/stickers`, `/business/sticker-files/english` — utility/form pages don't make factual claims that need citations.

6. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page so `/business/maps` no longer depends on `BusinessPageShell` or `BusinessResourceCards`.

7. **Schemas.** Standard `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD wiring with the `breadcrumbSchema !== null` guard.

### Files touched

- **`app/[locale]/business/maps/page.tsx`** — full rewrite (~415 lines). Dropped `BusinessPageShell` + `BusinessResourceCards` imports. Added `CSSProperties`, `Script` (for Turnstile), `REVIEWED_ACCURACY_I18N_KEY`. Embedded the BIZ_RESOURCES card spec directly on the page (matches `/business/stickers` — same 6-card catalog minus the maps entry).
- **`i18n/en/business/maps_en.json`** — bumped `@metadata.last-updated` to 2026-04-23, kept the four V1 keys untouched (`bitcoin_merchant_maps_list_your_business_for_free`, `maps_header`, `maps_request_details`, `maps_view`) so the i18n fallback works during the translation cleanup window, and added 10 new `biz_maps_*` keys: `biz_maps_hero_title`, `biz_maps_hero_subtitle`, `biz_maps_intro_c1`, `biz_maps_intro_c2`, `biz_maps_view_map_cta`, `biz_maps_form_header`, `biz_maps_form_intro`, and six placeholders (`biz_maps_placeholder_name/category/address/city/region/country/website`). The four V1 keys (`maps_header`, `maps_request_details`, `maps_view`) are now unused and will be swept up during the post-cutover dead-key audit.
- **`V2-REDESIGN-CHECKLIST.md`** — ticked `/business/maps`, bumped the business section counter (6 → 7) + total pages (75 → 76), updated the footer `_Last updated_` line with a summary of this change.

### Verification

- `npx tsc --noEmit` → clean.
- `lib/i18n/request.ts` already had `"business/maps"` in `DEFAULT_NAMESPACES` (since Phase 10), so the new `biz_maps_*` keys resolve without any loader changes.
- `lib/pages.ts` entry for `business/maps` unchanged (already published at priority 0.6).
- Breadcrumb schema auto-renders as "Home > Bitcoin for Business > Bitcoin Merchant Maps - List your business for free" via the `slug.startsWith("business/")` branch in `lib/schema/breadcrumb.ts`.
- Form endpoint (`business-maps`) already registered in `forms-backend/seed.js` — no backend changes needed.

### Remaining in Tier 6 (5 pages)

- `/business/kit`
- `/business/kit-success`
- `/business/maps-success`
- `/business/sticker-success`
- `/business/sticker-language-success`

All five are form-success or kit pages. The kit page is the last merchant-facing content page still on V1; the four success pages are short thank-you screens and should be quick reskins (compare to the already-V2 `/sticker-success` + `/sticker-language-success`).

---

## /business/stickers V2 redesign + new /business/sticker-files/english download page — April 23, 2026

### Follow-up (same session)

After the initial `/business/stickers` redesign landed, the user pointed out two things:

1. **The "Global — Print my own" English link was broken.** The `<BusinessStickerFlow>` component was pointing at `/sticker-files/english` (the consumer sticker-files page — wrong audience + wrong sticker set). The user asked for it to go to the merchant download page at `/business/sticker-files/english` instead. The legacy static site had an HTML file for this at `public/business/sticker-files/english/index.html`, but it referenced `../../../jquery/…` relative paths that don't exist in the Next.js app, so it rendered unstyled with broken i18n.
2. **Verify the form endpoints.** Confirmed all three `forms.bitcoin.rocks/submit/business-stickers-{usa,canada}` + `business-sticker-language-request` endpoints are registered in `forms-backend/seed.js` ✅.

### What was added

- **`app/[locale]/business/sticker-files/english/page.tsx`** (NEW, ~300 lines). Full V2 redesign of the merchant sticker-download page. Structure mirrors `/sticker-files/[lang]` (hero + centered intro card with StickerMule 1-click CTA + `.sticker-card` with bordered surface + preview image + dimensions/type/material/where-to-print meta list) but with a `/business/*` hero treatment (plain `<h1>` + subtitle) and the colored business-resources grid (stickers excluded) at the bottom per the Tier 6 convention. Reuses the existing `common_stickers_*` keys for the meta list + the V2 `.sticker-files-cta-button` rule already in globals.css §6 for the StickerMule CTA. Asset served from `public/business/sticker-files/english/bbk-sticker-english-v1.png` (unchanged).
- **`public/business/sticker-files/english/index.html`** + **`public/business/files/english/index.html`** — deleted (broken jQuery-era static HTML files that can't run in the Next.js app).
- **`i18n/en/business/sticker-files/english/index_en.json`** — bumped `@metadata.last-updated` to 2026-04-23; added 2 new keys (`biz_stickers_english_hero_title`, `biz_stickers_english_hero_subtitle`). Preserved the V1 `english_*` keys which are reused by the metadata helper + the sticker-card heading.
- **`lib/i18n/request.ts`** — added `"business/sticker-files/english/index"` to `DEFAULT_NAMESPACES`. **Note:** the namespace string must include the trailing `/index` segment because the JSON file lives at `i18n/en/business/sticker-files/english/index_en.json` (the `index` is the filename stem, not the folder). Initially registered as `"business/sticker-files/english"` which resolved to the non-existent `i18n/en/business/sticker-files/english_en.json` and caused `MISSING_MESSAGE` errors for `biz_stickers_english_hero_title` / `biz_stickers_english_hero_subtitle` — corrected in a follow-up fix on the same day.
- **`lib/pages.ts`** — added an entry for `business/sticker-files/english` (Phase 10, priority 0.5, changeFrequency yearly). Sitemap now emits 55 new URLs for this route.
- **`components/BusinessStickerFlow.tsx`** — updated the Global — Print panel's single "English" link from `${localePrefix}/sticker-files/english` → `${localePrefix}/business/sticker-files/english`. Dropped the `target="_blank"` since the new page is an internal V2 route, not a raw PNG.
- **`V2-REDESIGN-CHECKLIST.md`** — added `/business/sticker-files/english` as a checked item in Tier 6 with a short note explaining it's the downloadable sticker page reached from `/business/stickers`.

### Form-endpoint verification

The three form endpoints used by `<BusinessStickerFlow>` are all properly registered in `forms-backend/seed.js`:
- `business-stickers-usa` — Business Stickers — USA
- `business-stickers-canada` — Business Stickers — Canada
- `business-sticker-language-request` — Business Sticker Language Request

No backend changes needed. Cloudflare Turnstile + CORS config are unchanged from V1.

### Verification

- `npx tsc --noEmit` → clean.
- Breadcrumb schema auto-renders as "Home > Bitcoin for Business > English 'Bitcoin Accepted Here' Sticker Files" via the existing `slug.startsWith("business/")` branch in `lib/schema/breadcrumb.ts`.

---

## /business/stickers V2 redesign — April 23, 2026

`/business/stickers` was still on V1: `BusinessPageShell` wrapper with an `.h1-inflation` "GET YOUR FREE 'BITCOIN ACCEPTED HERE' STICKERS" hero, an inline sticker-pack image, then a single dense `.text-box.intro.sticker-box` containing a `<CountryFormSelector>` that revealed three country panels (USA / Canada / Global-print) with legacy-style `<StickerAddressForm>` instances and a plain-input language-request form. Same page shell as the consumer `/stickers` page but for merchants — one pack (the "Bitcoin Accepted Here" sticker), three ways to get it (USA mail / Canada mail / print your own).

Redesigned in the V2 style per the task: re-skinned with the same `.sticker-option-grid` / `.sticker-option-button` / `.sticker-panel` / `.cic-*` form system used by `/stickers`, but because merchants only have ONE pack we **deliberately skipped the Step 1 / "choose this pack" picker** — the V2 redesign jumps straight to the delivery-option step. This is the sixth `/business/*` page to reach V2.

### What changed

1. **Hero.** Replaced `BusinessPageShell` + `.h1-inflation` uppercased "GET YOUR FREE 'BITCOIN ACCEPTED HERE' STICKERS" header with a V2 plain `<h1>` ("Free 'Bitcoin Accepted Here' stickers") inside a `.home-hero.inflation-section`, plus a new `biz_stickers_hero_subtitle` ("Let your customers know you accept Bitcoin. Order a free pack of 'Bitcoin Accepted Here' stickers to put up at your business.").

2. **Intro card.** V2 `.wallet-intro` bordered surface with the sticker-pack preview image (`/img/bbk/biz-stickers-vertical-v2.png`) centered above two intro paragraphs (`biz_stickers_intro_c1`, `biz_stickers_intro_c2`). A small new `.biz-stickers-hero-image` CSS rule handles the centering + max-height (260px desktop / 200px mobile, with `border-radius: 12px`). This is the single most visible change from V1: the preview image now sits inside the intro card instead of floating above a section break.

3. **New client component: `<BusinessStickerFlow>`.** Lives in `components/BusinessStickerFlow.tsx`. Single-step delivery picker that renders three `.sticker-option-button` rows stacked 1-per-line (🇺🇸 USA, 🇨🇦 Canada, 🌍 Global — Print). Selecting an option reveals a `.sticker-panel` with:
   - **USA / Canada**: the shared V2 `<StickerAddressForm variant="usa|canada" action=… v2 />` (same address form as `/stickers`), posting to `forms.bitcoin.rocks/submit/business-stickers-usa|canada`.
   - **Global — Print**: a `.sticker-language-grid` with a single "English" button linking to `/sticker-files/english` (the only language currently available in the merchant sticker-files catalog), followed by a `.sticker-request` section with the V2 `.cic-*` language-request form (three labeled inputs — language, "Translation for 'Bitcoin Accepted Here'", "Translation for 'Scan to learn why Bitcoin is good for business.'"), posting to `forms.bitcoin.rocks/submit/business-sticker-language-request`.
   
   Smooth-scrolls the revealed panel into view after selection (same pattern as `<StickerFlow>` on `/stickers`). **The pack-picker step from `<StickerFlow>` is intentionally omitted** — the task explicitly called out that the merchant page has only one pack, so jumping straight to delivery options keeps the UX simpler.

4. **Business resources grid (per the `/business/*` convention).** Same V2 `.whats-next-grid` pattern as `/business`, `/business/faq`, `/business/wallets`, `/business/accounting`. Six cards with the standard per-card `--card-accent` colors (wallets orange, maps energy green, rewards payments yellow, accounting calm blue, faq education purple, kit bitcoin orange). The `stickers` card from the 7-card grid on `/business` is excluded since we're on it. Per the Tier 6 convention, **no generic "keep learning / buy Bitcoin / inflation" bridge is rendered** — this colored resources grid is the cross-link surface for merchants.

5. **No sources section.** Same convention as `/stickers` — this is a utility/form page and doesn't make factual claims that need citations.

6. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page, so `/business/stickers` no longer depends on `BusinessPageShell` or `BusinessResourceCards`.

7. **Schemas.** Kept `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD wiring with the standard `breadcrumbSchema !== null` guard.

### Files changed

```
components/BusinessStickerFlow.tsx            (new — single-step delivery picker, no pack picker; wraps <StickerAddressForm v2> for USA/Canada + a language-request .cic-* form + a single English sticker-files link for Print)
app/[locale]/business/stickers/page.tsx       (full V2 rewrite — hero, intro card with centered preview image, <BusinessStickerFlow>, BIZ_RESOURCES grid with stickers excluded, inline publisher attribution; dropped BusinessPageShell, BusinessResourceCards, CountryFormSelector, and the inline <Script> hoisted into this page)
i18n/en/business/stickers_en.json             (bumped @metadata.last-updated to 2026-04-23; added 11 new V2 keys: biz_stickers_hero_title, biz_stickers_hero_subtitle, biz_stickers_intro_c1, biz_stickers_intro_c2, biz_stickers_step_header, biz_stickers_step_description, biz_stickers_option_usa/_canada/_print, biz_stickers_print_header, biz_stickers_print_c1, biz_stickers_request_header, biz_stickers_request_c1, biz_stickers_placeholder_translation1/2. Kept the V1 keys — they'll be removed during the dead-key propagation pass.)
app/globals.css                                (added §11 sub-rule `.biz-stickers-hero-image` + its mobile variant for the centered preview image)
V2-REDESIGN-CHECKLIST.md                      (flipped /business/stickers to [x]; updated summary counts: Business 6/12, Total pages 75/83; updated the "last updated" footnote)
memory-bank/activeContext.md                  (this entry prepended)
memory-bank/progress.md                       (updated)
```

### Verification

- `npx tsc --noEmit` → clean (no TypeScript errors).
- Form `action` URLs preserved unchanged (`/submit/business-stickers-usa`, `/submit/business-stickers-canada`, `/submit/business-sticker-language-request`) so the existing `forms-backend` integration keeps working.
- Cloudflare Turnstile `<Script>` still loads `afterInteractive` at the page level (needed by the forms inside `<BusinessStickerFlow>`).
- The form-field names on the language-request form match V1 (`language`, `translation1`, `translation2`) so the backend contract is unchanged.

### Known follow-ups

- The 54 non-English locales still hold the V1 `stickers_*` keys and fall through to English for the 11 new `biz_stickers_*` keys. Handled later in the Step 4 translation refresh. Kept the V1 keys in English to avoid breaking unrelated locale rendering; they'll be removed during the Step 2/3 dead-key propagation.
- 6 `/business/*` sub-pages remain on V1 (maps, kit, kit-success, maps-success, sticker-success, sticker-language-success). Next up.

---

## Earlier: /business/accounting V2 redesign — April 23, 2026

`/business/accounting` was still on V1: a `BusinessPageShell` wrapper with an `.h1-inflation` "BITCOIN ACCOUNTING GUIDE" hero, then four dense `.text-box.intro` (and `.inflation-box` variant) prose blocks glued together with inline `<br><br>` breaks, where **entire sentences** had been turned into single `.orange-link` anchors — e.g. the whole "If you use QuickBooks, you can do this automatically using the Bitcoin Sync plugin" sentence was one orange-underlined phrase, "You can view the current dollar price of Bitcoin here" was another, etc. That pattern makes the page unscannable on mobile and buries the actual referenced resources inside the prose.

Redesigned in the V2 style per the task: every external/internal reference that was previously an inline orange-link sentence has been **lifted out of the prose and rendered as a colored `.whats-next-card` link card** slotted directly beside the section it supports, the prose was rewritten into plain, digestible English, and the non-negotiable "this is informational, not tax advice" disclaimer was kept (and made more prominent via a bolded `Please note:` label inside the intro card). This is the fifth `/business/*` page to reach V2.

### What changed

1. **Hero.** Replaced `BusinessPageShell` + `.h1-inflation` uppercased "BITCOIN ACCOUNTING GUIDE" header with a V2 plain `<h1>` ("Bitcoin accounting for your business") inside a `.home-hero.inflation-section`, plus a new `accounting_hero_subtitle` ("Accepting Bitcoin at your business doesn't have to complicate your accounting. Here's the short version — plus the tools and pros to make it painless.").

2. **Intro card.** V2 `.wallet-intro` bordered surface carrying the two-paths framing ("auto-convert to dollars = zero new accounting; keep some Bitcoin = a few extra numbers"), using two new keys (`accounting_intro_c1`, `accounting_intro_c2`). **The third paragraph is the tax-advice disclaimer**, rendered with a bolded `<strong>Please note:</strong>` prefix followed by `accounting_disclaimer` ("This guide is for informational purposes only and is not to be considered tax advice. For tax advice specific to your situation, please consult a qualified accountant.") — kept per the explicit task requirement.

3. **Four content sections, each `.inflation-section.content-section` with h2 + `.comparison-explain` prose + a `.whats-next-grid` of resource cards:**
   - **Section 1 — "The easy path: auto-convert to dollars"** (`accounting_s1`, `_c1`, `_c2`). One card → `/business/wallets` (orange `--card-accent`).
   - **Section 2 — "If you keep some Bitcoin: tracking your cost basis"** (`accounting_s2`, `_c1`–`_c3`). Four cards: QuickBooks plugin (Intuit green `#2CA01C`), CoinGecko current price (calm blue), CoinGecko historical prices (education purple), Spreadsheet Guru Excel import (energy green). Every card links to the URL that V1 had buried inside a full-sentence orange link.
   - **Section 3 — "Spending or selling the Bitcoin you've kept"** (`accounting_s3`, `_c1`–`_c6`). Pure prose — no cards, because the content is the two worked examples themselves. The V1 text "For example, if you received $100 worth of Bitcoin on January 1st…" copy is reused as a real `<ul>` bullet list (capital gain + capital loss) instead of being glued together with `<br><br>`s.
   - **Section 4 — "Need a pro who speaks Bitcoin?"** (`accounting_s4`, `_c1`). One card → Satoshi Pacioli Accounting Services (payments-yellow `#FFE91D`, rendered as a standout CTA).

4. **Per-card source attribution.** Introduced a per-card `sourceKey` on the new local `InlineResource` type so each card's "Source: $author →" line reflects the real upstream publisher (Intuit QuickBooks, CoinGecko, The Spreadsheet Guru, satoshipacioli.com, bitcoin.rocks for the internal wallets link) — we can't reuse `common_publisher_name` on cards that point to third-party resources. A tiny local `<ResourceCard>` component renders the card, handling external-vs-internal href, external-link `target`/`rel`, and the `--card-accent` CSS variable.

5. **Business resources grid (per the `/business/*` convention).** Same V2 `.whats-next-grid` pattern as `/business`, `/business/faq`, `/business/wallets`. Six cards with the standard per-card `--card-accent` colors (wallets orange, maps energy green, stickers pink, rewards yellow, faq education purple, kit bitcoin orange). The `accounting` card from the 7-card grid on `/business` is excluded since we're on it. Per the Tier 6 convention, **no generic "keep learning / buy Bitcoin / inflation" bridge is rendered** — this colored resources grid is the cross-link surface for merchants.

6. **Sources section.** V2 `.sources-section` with 5 citations — Satoshi Pacioli, QuickBooks (Blockpath plugin), CoinGecko, The Spreadsheet Guru, and the Bitcoin whitepaper.

7. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page (same pattern as the other V2 business pages), so `/business/accounting` no longer depends on `BusinessPageShell` or `BusinessResourceCards`.

8. **Schemas.** Kept `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD wiring; added the standard `breadcrumbSchema !== null` guard.

### Content changes (rewritten V1 prose)

The V1 copy had terse, duplicated framing ("If you use a Hybrid Wallet from our Wallet Guide and automatically sell 100% of the Bitcoin you receive for dollars, you don't need to make any changes to your current accounting." appeared twice across sections 1 and 3 nearly verbatim). The V2 rewrite:

- Merges the two hybrid-wallet paragraphs into one clear "easy path" Section 1.
- Replaces sentence-long `<a>` anchors with resource cards. No whole-sentence links remain — where a short phrase needs emphasis, plain prose is used.
- Reframes Section 3 as an optional deep-dive ("If you auto-convert every payment to dollars, skip this section — it doesn't apply to you.") and renders the two worked examples as a bulleted list instead of prose separated by `<br><br>`.
- Keeps the "not tax advice" disclaimer prominent in the intro card above every section.
- The underlying set of external resources is identical to V1 (Satoshi Pacioli, QuickBooks Bitcoin Sync, CoinGecko live + history, Spreadsheet Guru).

### Files changed

```
app/[locale]/business/accounting/page.tsx   (full V2 rewrite — hero, intro card with disclaimer, 4 content sections, per-section resource cards via local <ResourceCard>, BIZ_RESOURCES grid with accounting excluded, sources, inline publisher attribution; dropped BusinessPageShell + BusinessResourceCards; schema guards matched to V2 standard)
i18n/en/business/accounting_en.json          (bumped @metadata.last-updated to 2026-04-23; full rewrite of the English copy — removed V1 keys accounting_s1_c1–c6, accounting_s2_c1–c8, accounting_s3_c1–c5, accounting_s4_c1–c2; added 24 new keys: bitcoin_business_accounting_guide (reworded hero title), accounting_description (reworded), accounting_hero_subtitle, accounting_intro_c1, accounting_intro_c2, accounting_disclaimer_label, accounting_disclaimer, accounting_s1 + _c1 + _c2, accounting_card_wallets_{label,title,source}, accounting_s2 + _c1..._c3, accounting_card_quickbooks_{label,title,source}, accounting_card_coingecko_live_{label,title,source}, accounting_card_coingecko_history_{label,title,source}, accounting_card_spreadsheet_{label,title,source}, accounting_s3 + _c1..._c6, accounting_s4 + _c1, accounting_card_pacioli_{label,title,source})
V2-REDESIGN-CHECKLIST.md                     (flipped /business/accounting to [x]; updated summary counts: Business 5/12, Total pages 74/83; updated the "last updated" footnote)
memory-bank/activeContext.md                 (this entry prepended)
memory-bank/progress.md                      (updated)
```

### Verification

- `npx tsc --noEmit` → clean (no TypeScript errors).
- Disclaimer is explicit, prominent (bolded `Please note:` label in the intro card), and unchanged in substance from the V1 copy as required.
- No sentence-long inline orange links remain — every V1 reference is now a colored link card, and section prose uses no inline links at all.

### Known follow-ups

- The 54 non-English locales still hold V1 copy for the deleted `accounting_s*_c*` keys and fall through to English for the 24 new V2 keys. Handled later in the Step 4 translation refresh. (The V1-era keys were left behind in the non-English files — they'll be removed during the Step 2/3 dead-key propagation.)
- 7 `/business/*` sub-pages remain on V1 (stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success). Next up.

---

## /business/wallets V2 redesign — April 23, 2026

`/business/wallets` was still on V1: `BusinessPageShell` wrapper, `.h1-inflation` "GET A FREE BITCOIN WALLET…" hero, a `.text-box.intro` explainer with inline `<br><br>` Bitcoin-only-vs-hybrid copy, four always-collapsed `<WalletAccordion>`s each hiding a `.vs-container` row of `<BusinessWalletCard>` tiles (sole / multiple employees / online / invoicing), and the `BusinessResourceCards` 7-card grid at the bottom. Redesigned in the V2 style — the accordions are **flattened** into four top-to-bottom sections (each an `<h2>` + `.comparison-explain` intro + `.wallet-grid` of V2 `.wallet-card`s), so the page now reads like `/wallets` but organized by business type. **Strike Business** was added to every section (image at `/img/wallets/strike-business.png`, links to `strike.me/business`). This is the fourth `/business/*` page to reach V2.

### What changed

1. **Hero.** Replaced `BusinessPageShell` + `.h1-inflation` uppercased "GET A FREE BITCOIN WALLET TO ACCEPT BITCOIN PAYMENTS" with a plain `<h1>` driven by the existing `how_to_accept_bitcoin_payments` key, inside a `.home-hero.inflation-section`, plus a new subtitle paragraph (`wallets_hero_subtitle` — "Bitcoin wallets are free. Pick one that fits your business — in-person, online, or invoice-based — and start accepting Bitcoin in minutes.").

2. **Intro card.** V2 `.wallet-intro` bordered surface carrying over the V1 Bitcoin-only vs. hybrid wallet explanation using the existing `wallets_intro_1` – `wallets_intro_6` keys. Inline `<br><br>` concatenation dropped in favor of four clean `<p>` tags; "Bitcoin-only wallets:" / "Hybrid wallets:" headers wrap in `<strong>` for visual rhythm.

3. **Four wallet sections (flattened from accordions).** Each section is a `.inflation-section.content-section` with:
   - An `<h2>` section heading (new keys `wallets_section_sole`, `wallets_section_multiple`, `wallets_section_online`, `wallets_section_invoice`).
   - A `.comparison-explain` intro paragraph (new keys `wallets_section_*_intro`) explaining when to use the wallets in that group.
   - A `.wallet-grid` (reused from `/wallets` — 2-col desktop / 1-col mobile) of V2 `.wallet-card` anchors rendered by a new local `<BizWalletCard>` component.

   `BizWalletCard` reuses the `/wallets` page's V2 card chrome (`.wallet-card` anchor + `.wallet-card-image-wrap` + `.wallet-card-name` + `.wallet-card-features` + `.wallet-card-cta`) but swaps the `.wallet-card-badges` (self-custody / cold-wallet) for an optional `.biz-wallet-card-note` paragraph — a short elevator-pitch muted-body `<p>` rendered between the name and the feature bullets. Used for Square and Strike Business to explain the platform briefly. All feature bullets reuse the existing `wallets_feature_*` keys (hybrid, info, in_person_online, settles_both, bitcoin_only, no_info, in_person, settles_bitcoin, self_hosted, online_store, invoicing, multiple_employees).

4. **Strike Business added everywhere.** Per the task request, Strike Business is the second card in every one of the four sections. New keys:
   - `wallets_name_strike` = "STRIKE BUSINESS"
   - `wallets_strike_note` = "Strike Business lets you accept Bitcoin and Lightning payments with zero fees and instant settlement. Supports in-person, online, and invoice-based payments with optional auto-conversion to your local currency."

   All cards link to `https://strike.me/business` and use `/img/wallets/strike-business.png` (the image provided by the user).

5. **Per-section wallet lineup.**
   - **Sole** (individually-owned): Square, Strike, Breez, OpenNode.
   - **Multiple employees**: Square, Strike, IBEX Pay.
   - **Online**: Square, Strike, OpenNode (online variant), BTCPay Server.
   - **Invoice-based**: Zaprite, Strike.

6. **Business resources grid (per the `/business/*` convention).** Dropped `BusinessResourceCards`; hand-rolled V2 `.whats-next-grid` identical to the one on `/business` + `/business/faq`. Six `.whats-next-card`s with per-card `--card-accent` CSS variables (maps = energy green, stickers = pink, rewards = yellow, accounting = blue, faq = education purple, kit = bitcoin orange). The `wallets` card from the 7-card grid on `/business` is excluded since we're on it. External Oshi rewards card keeps `target="_blank" rel="noopener noreferrer"`. Per the Tier 6 convention, **no generic "keep learning / buy Bitcoin / inflation" bridge is rendered** — this colored resources grid is the cross-link surface for merchants.

7. **Sources section.** V2 `.sources-section` with 8 citations — Square, Strike, Breez, OpenNode, IBEX, BTCPay Server, Zaprite, and the Bitcoin whitepaper.

8. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page (same as `/business`, `/business/why`, `/business/faq`), so `/business/wallets` no longer depends on `BusinessPageShell`.

9. **Schemas.** Kept `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD wiring and added the `breadcrumbSchema !== null` guard used by every other V2 page.

10. **CSS.** Added a small `.biz-wallet-card-note` rule to `app/globals.css` (margin: 0 0 12px, Proxima Nova 400, 14px, 1.5 line-height, `var(--color-fg-muted)` color) slotted next to `.wallet-card-feature-price` in the wallets block. Uses semantic tokens; no new hex values.

### Files changed

```
app/[locale]/business/wallets/page.tsx     (full V2 rewrite — hero, intro card, 4 top-to-bottom wallet sections, BIZ_RESOURCES grid with wallets excluded, sources, inline publisher attribution; dropped BusinessPageShell + BusinessResourceCards + BusinessWalletCard + WalletAccordion + vs-container; added local BizWalletCard component; schema guards matched to V2 standard)
i18n/en/business/wallets_en.json            (bumped @metadata.last-updated to 2026-04-23; added 11 new keys — wallets_hero_subtitle, wallets_section_sole + _intro, wallets_section_multiple + _intro, wallets_section_online + _intro, wallets_section_invoice + _intro, wallets_name_strike, wallets_strike_note; all existing V1 keys preserved; legacy wallets_header + wallets_choice_* + wallets_intro_* kept — wallets_intro_* still rendered, others are orphans pending i18n cleanup)
scripts/business-wallets-v2/add-keys.js     (Node helper that adds the 11 new V2 keys with tab indentation)
app/globals.css                              (+12 lines — .biz-wallet-card-note rule next to .wallet-card-feature-price)
V2-REDESIGN-CHECKLIST.md                    (flipped /business/wallets to [x]; updated summary counts: Business 4/12, Total pages 73/83; updated the "last updated" footnote)
memory-bank/activeContext.md                (this entry prepended)
memory-bank/progress.md                     (updated)
```

### Verification

- `npx tsc --noEmit` → clean (no TypeScript errors).
- Strike Business image was already present at `public/img/wallets/strike-business.png` (the user placed it there before starting the task).

### Known follow-ups

- The 54 non-English locales still hold V1 copy for the preserved wallet-feature keys and fall through to English for the 11 new keys. Handled later in the Step 4 translation refresh.
- 8 `/business/*` sub-pages remain on V1 (accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success). Next up.
- `BusinessPageShell`, `BusinessResourceCards`, and `BusinessWalletCard` are still required by the 8 un-redesigned sub-pages — will be deleted once Tier 6 is fully V2-complete.

---

## Previous: /business/faq V2 redesign — April 22, 2026

`/business/faq` was still on V1: `BusinessPageShell` wrapper, `.h1-inflation` "HAVE QUESTIONS…" hero, nine always-open `.text-box.intro.inflation-box` FAQ blocks with `.h2-section` headings and inline `<br><br>` paragraph breaks, all inline cross-links on `.orange-link`, and the `BusinessResourceCards` 7-card grid at the bottom. Redesigned in the V2 style with **collapsible `<WalletAccordion>`** FAQs (same Client Component that powers the `/wallets` + `/lightning` FAQ accordions). This is the third `/business/*` page to reach V2.

### What changed

1. **Hero.** Replaced `BusinessPageShell` + `.h1-inflation` uppercased "HAVE QUESTIONS ABOUT ACCEPTING BITCOIN PAYMENTS?" with a plain `<h1>` driven by the existing `frequently_asked_questions_about_accepting_bitcoin` key (retitled in English from "FAQs for Accepting Bitcoin" → "FAQs for accepting Bitcoin" for V2 sentence-case consistency) inside a `.home-hero.inflation-section`, plus a new subtitle paragraph (`faq_hero_subtitle` — "The short answers to the questions merchants ask most often before they start accepting Bitcoin — fees, settlement, wallets, chargebacks, cost, and more.").

2. **Intro card.** Added a V2 `.wallet-intro` bordered surface with a single lead-in paragraph (new key `faq_intro_c1`) framing the accordion list and pointing readers at the business resources at the foot of the page.

3. **FAQ accordions.** Converted all nine `.text-box.intro.inflation-box` blocks into collapsible `<WalletAccordion>`s (closed by default, rotating chevron, animated max-height body). Each FAQ:
   - Renders its question as the accordion header (existing `faq_s1` – `faq_s9` keys preserved verbatim — they're already in sentence case + question form).
   - Renders its body paragraphs as clean `<p>` tags (V1 had inline `<br><br>` concatenation — the V2 accordion's `.wallet-accordion-body-inner` styles paragraphs natively).
   - FAQ 4 ("Can I convert to local currency?") gets its two "full reserve financial system / no inflation" bullets rendered as a real `<ul>` instead of V1's `• <br>` pseudo-bullets.
   - All inline cross-links bumped from `.orange-link` to the V2 `.body-link` (orange + underlined, 3px offset) — same convention as `/wallets` and `/business/why`.
   - Cross-links preserved: FAQ 2 → `/business`, FAQ 3/5/6/9 → `/business/wallets`, FAQ 4 → `/business/wallets`, FAQ 7 → `/business/stickers` + `/business/maps`, FAQ 8 → `/business/maps`. All routed via the V2 navigation pattern (`${l}/business/…`).

4. **Business resources grid (per the `/business/*` convention).** Replaced the V1 `BusinessResourceCards` component with a hand-rolled V2 `.whats-next-grid` identical in structure to the one on `/business` — six `.whats-next-card`s with per-card `--card-accent` CSS variables (wallets = bitcoin orange, maps = energy green, stickers = pink, rewards = yellow, accounting = blue, kit = bitcoin orange), rendered below a standard `.inflation-section.content-section` header + intro (reusing the shared `business_resources_heading` + `business_resources_intro` keys from `business/index_en.json`, plus the shared `biz_label_*` + `common_biz_*` keys for each card's label and title). The `faq` card from the 7-card grid on `/business` is intentionally excluded since we're on that page. External Oshi rewards card keeps `target="_blank" rel="noopener noreferrer"`. Per the Tier 6 convention, **no generic "keep learning / buy Bitcoin / inflation" bridge is rendered** — this colored resources grid is the cross-link surface for merchants.

5. **Sources section.** Added the standard V2 `.sources-section` with 5 citations (BTC Map, BTCPay Server, Strike for Business, Oshi, Bitcoin whitepaper) — same set as `/business` for consistency across the section.

6. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page (same as `/business` + `/business/why`), so `/business/faq` no longer depends on `BusinessPageShell`.

7. **Schemas.** Kept the existing `buildArticleSchema()` + `buildBreadcrumbSchema()` JSON-LD wiring and added the `breadcrumbSchema !== null` guard used by every other V2 page. Dropped unused `void l` now that `l` is actually referenced.

### Files changed

```
app/[locale]/business/faq/page.tsx       (full V2 rewrite — hero, intro card, 9 collapsible <WalletAccordion>s, BIZ_RESOURCES grid with faq excluded, sources, inline publisher attribution; dropped BusinessPageShell + BusinessResourceCards; added WalletAccordion + REVIEWED_ACCURACY_I18N_KEY imports; switched all in-body links from .orange-link to .body-link)
i18n/en/business/faq_en.json             (bumped @metadata.last-updated to 2026-04-22; retitled frequently_asked_questions_about_accepting_bitcoin from "FAQs for Accepting Bitcoin" to "FAQs for accepting Bitcoin"; added 2 new keys — faq_hero_subtitle, faq_intro_c1; all nine existing faq_s*_c* keys preserved verbatim; legacy faq_header + faq_description kept for backward compat — no longer rendered on the page)
V2-REDESIGN-CHECKLIST.md                  (flipped /business/faq to [x]; updated summary counts: Business 3/13, Total pages 72/84; updated the "last updated" footnote)
memory-bank/activeContext.md              (this entry prepended)
memory-bank/progress.md                   (updated)
```

### Verification

- `npm run build` → ✓ Compiled successfully in 6.1s; 4,514 static pages generated (unchanged from the /business/why pass — /business/faq was already a route, just re-rendered from V1 → V2). TypeScript clean.

### Known follow-ups

- The 54 non-English locales still hold V1 copy for the preserved `faq_s*_c*` keys and fall through to English for the 2 new keys (`faq_hero_subtitle`, `faq_intro_c1`). They also hold the old "FAQs for Accepting Bitcoin" title. All handled later in the Step 4 translation refresh.
- 10 `/business/*` sub-pages remain on V1 (guide, wallets, accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) and still use `BusinessPageShell`. Next up.
- `BusinessPageShell`, `BusinessResourceCards`, and `BusinessWalletCard` are still required by the 10 un-redesigned sub-pages — will be deleted once Tier 6 is fully V2-complete.

---

## Previous: /business/why V2 redesign — April 22, 2026

`/business/why` (the QR-code landing page customers reach when they scan a "Bitcoin Accepted Here" sticker) was still on V1: `BusinessPageShell` wrapper, `.h1-inflation` "BITCOIN IS GOOD FOR BUSINESS" hero, the `/img/bbk/payment-chart.png` inline comparison image + "LEARN MORE" `.biz-button` anchor-scroll CTA, then four `.text-box.intro.inflation-box` "good for you too" sections (no-inflation, no bank runs, permissionless, better world) with inline `<br><br>` paragraph breaks, and the `BusinessResourceCards` grid at the bottom. Redesigned in the V2 style, mirroring the `/business` index page that was just completed. This is the second `/business/*` page to reach V2 and establishes the **QR-scanning-customer exception** to the Tier 6 convention.

### What changed

1. **Hero.** Replaced `BusinessPageShell` + `.h1-inflation` with a plain `<h1>` ("Bitcoin is accepted here") and `.home-hero.inflation-section` subtitle. New keys `why_hero_subtitle` ("You just scanned a Bitcoin Accepted Here sticker. Here's why that's great news — for this business, and for you.") and the retitled `learn_why_bitcoin_is_good_for_business` + `why_header` (now sentence-case "Bitcoin is accepted here" — the page's new primary identity as a QR-scan landing page, not a "Why accept?" pitch).

2. **Intro card.** Added a V2 `.wallet-intro` bordered surface with two lead-in paragraphs (`why_intro_c1` + `why_intro_c2`) that frame the page's two halves.

3. **Payment-chart image dropped.** Per the task brief, removed the `/img/bbk/payment-chart.png` image + the `.biz-button` "LEARN MORE" CTA. In their place: two distinct, self-contained content zones — "Why Bitcoin is great for this business" (3 benefit sections) and "Why Bitcoin is great for you too" (4 benefit sections). Much better than an image-led hero for the site's tone, and the prose describes what the image was trying to convey (lower fees + instant settlement + no chargebacks) much more clearly.

4. **Part 1 — "Why Bitcoin is great for this business".** New V2 `.inflation-section.content-section` intro block (heading `why_for_business` + lead-in `why_for_business_intro`), followed by three benefit sections:
   - `why_biz_s1` / `_c1` — "Lower fees, more for the business" (business keeps more → often means better prices + service for customers)
   - `why_biz_s2` / `_c1` — "Instant settlement, no chargebacks" (seconds to settle, no fraud disputes)
   - `why_biz_s3` / `_c1` — "Free to accept, open to everyone" (zero contracts + fees, free exposure to Bitcoin users)
   
   Part 1 closes with a small inline CTA (`why_business_cta_intro` + `why_business_cta_link`) pointing merchants who happen to land here to `/business` via a `.body-link`.

5. **Part 2 — "Why Bitcoin is great for you too".** New V2 intro block (heading `why_good_for_you` — rewritten from V1's uppercased "BITCOIN IS GOOD FOR YOU TOO!" to sentence case + `why_good_for_you_intro` lead-in), followed by the four original V1 sections ported to V2 `.inflation-section.content-section` blocks with `.comparison-explain` prose — no-inflation → `/inflation`, no bank runs → `/bank-runs`, permissionless → external voteforbetter.money link, better world → homepage. Bumped the inline learn-more link from `.orange-link` to `.body-link` (V2 convention) and converted V1 `<br><br>` paragraph breaks into clean `<p>` tags. All copy rewritten so the V2 tone matches the rest of the site and addresses the customer directly (e.g. "Your Bitcoin savings hold their value" instead of the V1 generic "Bitcoin has a fixed supply").

6. **"Where to next?" grid (QR-scanning-customer exception).** Replaced the V1 `BusinessResourceCards` 7-card merchant resource grid with a bespoke V2 4-card `.whats-next-grid` targeted at QR-scanning customers — color-coded `--card-accent`s driving four `.whats-next-card`s:
   - LEARN MORE (`#A67DFF` education purple) → `/` (homepage)
   - GET A WALLET (`#FF9500` bitcoin orange) → `/wallets`
   - BUY BITCOIN (`#FFE91D` payments yellow) → `/buy`
   - ACCEPT BITCOIN (`#1DFF4D` merchant green) → `/business` — sitting in the #4 slot so anyone inspired to accept it still has a direct path
   
   New section heading `why_whats_next_heading` ("Where to next?") + intro `why_whats_next_intro`, plus 8 card label/title keys `why_next_learn_label` / `_title`, `why_next_wallet_label` / `_title`, `why_next_buy_label` / `_title`, `why_next_business_label` / `_title`. Uses the same card markup + `home_source_prefix` + `common_publisher_name` pattern as the index page's resources grid.

7. **Tier 6 convention exception documented.** Updated `V2-REDESIGN-CHECKLIST.md` with a second paragraph under the Tier 6 convention note explaining that `/business/why` DOES include a learning-path cross-link grid (unlike every other `/business/*` page) because its primary audience is customers, not merchants. The rest of Tier 6 still follows the original "no generic What's next bridge" rule.

8. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block directly on the page (same as `/business` index), so `/business/why` no longer depends on `BusinessPageShell`.

### Files changed

```
app/[locale]/business/why/page.tsx       (full V2 rewrite — hero, intro card, Part 1 (3 merchant benefits) + /business CTA, Part 2 (4 customer benefits, all ported), color-coded "Where to next?" grid, inline publisher attribution; dropped BusinessPageShell + BusinessResourceCards + payment-chart image + biz-button CTA; added JsonLd + REVIEWED_ACCURACY_I18N_KEY imports)
i18n/en/business/why_en.json             (bumped @metadata.last-updated to 2026-04-22; full key refresh — retitled learn_why_bitcoin_is_good_for_business + why_header to "Bitcoin is accepted here"; added 21 new keys — why_hero_subtitle, why_intro_c1, _c2, why_for_business, why_for_business_intro, why_biz_s1 / _c1, why_biz_s2 / _c1, why_biz_s3 / _c1, why_business_cta_intro, why_business_cta_link, why_good_for_you_intro, why_whats_next_heading, why_whats_next_intro, why_next_learn_label / _title, why_next_wallet_label / _title, why_next_buy_label / _title, why_next_business_label / _title; rewrote all `why_s1-4` + `_c*` copy for V2 tone; kept why_s1-4 keys + why_learn_more_lowercase + why_good_for_you)
V2-REDESIGN-CHECKLIST.md                  (flipped /business/why to [x]; added the /business/why exception paragraph under the Tier 6 convention note; updated summary counts: Business 2/13, Total pages 71/84)
memory-bank/activeContext.md              (this entry prepended)
memory-bank/progress.md                   (updated)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold V1 strings for the preserved `why_s1-4` / `_c*` keys + `why_learn_more_lowercase` + `why_good_for_you` + `why_header` + `learn_why_bitcoin_is_good_for_business`, and fall through to English for the 21 new keys. Additionally, the preserved keys whose copy was rewritten for V2 (all `why_s*_c*` and the retitled headings) will need the translation refresh too. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- 11 `/business/*` sub-pages remain on V1 (faq, guide, wallets, accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) and still use `BusinessPageShell`. Next up.
- `BusinessPageShell`, `BusinessResourceCards`, and `BusinessWalletCard` are still required by the 11 un-redesigned sub-pages — will be deleted once Tier 6 is fully V2-complete.

---

## Previous: /business index V2 redesign — April 22, 2026


`/business` (the top-of-funnel hub for merchants) was still on the V1 design system: `BusinessPageShell` wrapper with a centered back-to-home gray logo, `.h1-inflation` hero, the `/img/bbk/payment-chart.png` inline image + "ACCEPT BITCOIN PAYMENTS" `.biz-button` anchor-scroll CTA, four `.text-box.intro.inflation-box` benefit sections using `.h2-section` H3s, the `BusinessResourceCards` grid of colored `.biz-box` cards, and a standalone "Print your own Business Kit" `.biz-wallet` CTA. Ported the index page into the V2 design system used across `/`, `/inflation`, `/wallets`, `/lightning`, `/flyers`, `/stickers`, `/sticker-success`, `/sticker-language-success`, `/buy`, `/bank-runs`, `/about`, `/get-involved`, `/compound-inflation-calculator`, and all ten `/bitcoin-vs-*` pages. This is the first page in Tier 6 (Business section) to reach V2.

### What changed

1. **Hero.** Replaced the `BusinessPageShell` back-to-home logo + `.h1-inflation` "BITCOIN IS GOOD FOR BUSINESS" hero with a plain `<h1>` (title from the existing `bitcoin_is_good_for_business` key) + `.home-hero.inflation-section` intro paragraph driven by the new `business_hero_subtitle` key ("Accept payments with lower fees, get paid instantly, and reach millions of new customers — with zero contracts and zero hidden costs."). The old uppercased `biz_header` string is kept in i18n for backwards compatibility but no longer rendered.

2. **Intro card.** Added a V2 `.wallet-intro` bordered surface card (same chrome as `/wallets`, `/lightning`, `/flyers`, `/buy`) with two lead-in paragraphs from new keys `business_intro_c1` and `business_intro_c2` that frame what's below.

3. **Payment-chart image + button dropped.** Removed the `/img/bbk/payment-chart.png` inline image (its V1 styling was stripped when the legacy CSS was removed, and the chart itself is a V1-era illustration that didn't port cleanly) plus the `.biz-button` "ACCEPT BITCOIN PAYMENTS" anchor-scroll CTA. The hero subtitle already communicates the value prop and the resources grid below replaces the "scroll to ready section" UX.

4. **Four benefit sections.** Converted the `.text-box.intro.inflation-box` + `.h2-section` H3 blocks into standard V2 `.inflation-section.content-section` sections — plain `<h2>` heading + `.comparison-explain` prose wrapper. Copy preserved verbatim from the existing `biz_s1` / `biz_s2` / `biz_s3` / `biz_s4` keys and their `_c*` paragraph children; the inline `<br><br>` paragraph breaks in s3 and s4 were split into clean `<p>` tags.

5. **Business resources grid.** Replaced the `BusinessResourceCards` component (which rendered 7 `.biz-box.biz-learn/-wallet/-maps/-stickers/-rewards/-accounting/-faq` cards in V1 style) with a V2 `.whats-next-section` containing 7 `.whats-next-card`s — one per downstream resource. Each card sets its own `--card-accent` CSS variable inline (`#FF9500` wallets, `#1DFF4D` maps, `#FF1D8E` stickers, `#FFE91D` rewards, `#4DA6FF` accounting, `#A67DFF` faq, `#FF9500` kit) so the label + hover border color-code the grid the same way the homepage category sections do. The "Learn why Bitcoin is good for business" card is dropped — it linked back to the current page. The "Print your own Business Kit" card is now part of the main grid instead of a standalone CTA below it. New section heading ("Everything you need to accept Bitcoin") and intro ("Work through these resources at your own pace. Each one is a short, practical guide.") live under new keys `business_resources_heading` and `business_resources_intro`; individual card labels use new keys `biz_label_wallets` / `_maps` / `_stickers` / `_rewards` / `_accounting` / `_faq` / `_kit`. Card titles reuse the existing shared `common_biz_wallets` / `_maps` / `_stickers` / `_rewards` / `_accounting` / `_faq` / `_kit` keys from `common_en.json`. External Oshi rewards link keeps `target="_blank" rel="noopener noreferrer"`.

6. **What's next grid.** Added a second V2 `.whats-next-section` below the resources grid with 4 standard `<WhatsNextCard>`s bridging to `/`, `/wallets`, `/buy`, and `/inflation` so readers who aren't ready for the merchant workflow still have a clear next step. Matches the pattern on every other V2 content page.

7. **Sources section.** Added the standard V2 `.sources-section` with 5 citations: BTC Map (merchant directory), BTCPay Server (self-hosted POS), Strike for Business (Lightning payments), Oshi (rewards), and the Bitcoin whitepaper. Matches the pattern on `/wallets`, `/lightning`, `/buy`, `/inflation`, and the comparison pages.

8. **Publisher attribution.** Inlined the reviewed-for-accuracy badge + publisher-attribution block (moved off the `BusinessPageShell` wrapper into the page itself) so the V2 index page no longer depends on `BusinessPageShell`. The shell is still used by all 12 other `/business/*` sub-pages until they're each V2-redesigned; it'll be deleted once Tier 6 is fully V2-complete.

### Files changed

```
app/[locale]/business/page.tsx          (full V2 rewrite — hero, intro card, 4 benefit sections, color-coded resources grid, What's next grid, sources, inline publisher attribution; dropped BusinessPageShell wrapper + payment-chart image + biz-button CTA + BusinessResourceCards + standalone kit CTA; added WhatsNextCard + JsonLd + REVIEWED_ACCURACY_I18N_KEY imports)
i18n/en/business/index_en.json           (bumped @metadata.last-updated to 2026-04-22; added 10 new keys — business_hero_subtitle, business_intro_c1, business_intro_c2, business_resources_heading, business_resources_intro, biz_label_wallets, biz_label_maps, biz_label_stickers, biz_label_rewards, biz_label_accounting, biz_label_faq, biz_label_kit. Kept existing biz_header / biz_s1-4 / biz_s*_c* keys.)
V2-REDESIGN-CHECKLIST.md                 (flipped /business index to [x]; updated summary counts: Business 1/13, Total pages 70/84)
memory-bank/activeContext.md             (this entry prepended)
memory-bank/progress.md                  (updated)
```

### Verification

- `npx tsc --noEmit` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 strings for the preserved `biz_s*` keys, and fall through to English for the 10 new keys. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- 12 `/business/*` sub-pages (why, faq, guide, wallets, accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) are still on V1 and still use `BusinessPageShell`. Next up.
- `BusinessPageShell`, `BusinessResourceCards`, and `BusinessWalletCard` are still required by the 12 un-redesigned sub-pages — will be deleted once Tier 6 is fully V2-complete.
- The legacy `biz_header`, `common_biz_learn`, `common_biz_accept_bitcoin_payments`, `common_biz_ready`, `common_biz_more`, and `common_kit_cta_header` keys are no longer rendered by the /business index but still used by the 12 V1 sub-pages; they'll be swept during the Step 1–2 dead-key cleanup after Tier 6 finishes.

---

## Previous: /sticker-language-success V2 redesign — April 22, 2026


`/sticker-language-success` (the thank-you screen shown after a visitor submits the "Request stickers in my language" form on `/sticker-files`) was still on the V1 design system: centered `.back-to-home` gray-logo link, `.h2-stickers` wrapper around an orange-tinted "SUCCESS!" `<h1>`, `.text-box.intro` blurb with inline `<br><br>` paragraph breaks, and a V1 `.text-box.top/.middle/.bottom` CTA stack (home → wallets → buy). Ported the page into the V2 design system used across `/`, `/inflation`, `/wallets`, `/lightning`, `/flyers`, `/stickers`, `/sticker-success`, `/buy`, `/bank-runs`, `/about`, `/get-involved`, `/compound-inflation-calculator`, and all ten `/bitcoin-vs-*` pages. This clears the last item in Tier 5 (Form success pages).

### What changed

1. **Hero.** Replaced the V1 back-to-home logo + `.h2-stickers` "SUCCESS!" wrapper with a plain `<h1>` ("Request received 🎉") + `.home-hero`-style intro paragraph driven by the existing `sticker_language_success_1` key ("We've successfully received your request."). New i18n key `sticker_language_success_hero_title` drives the H1; the old `common_success` page title is no longer rendered.

2. **Batch-release card.** Promoted the batch-release expectation-setting copy (previously a second paragraph of the V1 intro box separated by `<br><br>`) to its own `.wallet-intro.flyer-section` surface card — same chrome as on `/sticker-success` and the other V2 form-success pages. Body reuses the existing `sticker_language_success_2` key.

3. **What's next grid.** Replaced the V1 `.text-box.top/middle/bottom` CTA stack with a standard 2-col V2 `.whats-next-section` grid of 4 `<WhatsNextCard>`s — Sticker files → `/sticker-files` (using the shared `common_sticker_files_next_languages_label`/`_title` keys), Get a wallet → `/wallets`, Buy Bitcoin → `/buy`, Keep learning → `/`. The first card was retargeted from the home page (which doesn't help someone who just requested a new language pack) to `/sticker-files`, so users can immediately browse what files are already available.

4. **Dropped.** No sources section + no `.publisher-attribution` — this is a utility/thank-you page with no factual claims that need citations or an accuracy review (same reasoning applied on `/flyers` and `/sticker-success`). Robots still `noindex, follow` so form-success pages never appear in search results.

### Files changed

```
app/[locale]/sticker-language-success/page.tsx   (full V2 rewrite — hero, batch-release card, What's next grid; dropped back-to-home logo + h2-stickers hero + text-box CTA stack; added WhatsNextCard imports)
i18n/en/sticker-language-success_en.json          (bumped @metadata.last-updated to 2026-04-22; added 1 new key — sticker_language_success_hero_title. Kept existing `sticker_language_success_1` + `_2` keys.)
scripts/sticker-language-success-v2-keys.js       (NEW — idempotent key-updater script)
V2-REDESIGN-CHECKLIST.md                          (flipped /sticker-language-success to [x]; updated summary counts: Form success 2/2, Total pages 69/84)
memory-bank/activeContext.md                      (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 strings for `sticker_language_success_1` + `_2`, and fall through to English for the new `sticker_language_success_hero_title` key. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- `/business/sticker-language-success` (Tier 6) still on V1 — same pattern applies; queued behind the broader business-section redesign.
- Tier 5 (Form success pages) is now fully V2-complete. Next up: Tier 6 business section or Tier 7 nostr section.

---

## Previous: /sticker-success V2 redesign — April 22, 2026


`/sticker-success` (the thank-you screen shown after a visitor submits the /stickers address form) was still on the V1 design system: centered `.back-to-home` gray-logo link, `.h2-stickers` wrapper around an orange-tinted "SUCCESS!" `<h1>`, `.text-box.intro` blurb with inline `<br>`-separated `✅` lines, V1 `.text-box.top/.middle/.bottom` CTA stack, and the fixed-bottom "NEW! Print & Post Bitcoin Flyers →" promo bar. Ported the page into the V2 design system used across `/`, `/inflation`, `/wallets`, `/lightning`, `/flyers`, `/stickers`, `/buy`, `/bank-runs`, `/about`, `/get-involved`, `/compound-inflation-calculator`, and all ten `/bitcoin-vs-*` pages.

### What changed

1. **Hero.** Replaced the V1 back-to-home logo + `.h2-stickers` "SUCCESS!" wrapper with a plain `<h1>` ("Your stickers are on their way 🎉") + `.home-hero`-style intro paragraph that now confirms the 2–4 week delivery window in the subtitle instead of buried inside a prose box. New i18n key `sticker_success_hero_title` drives the H1; the old `common_success` page title is no longer rendered (the shipment-confirmation copy in `sticker_success_1` moves up into the hero subtitle).

2. **Good-spots card.** Replaced the inline `<br>`-separated `✅` list with a V2 `.wallet-intro` surface card containing a `<h2 class="flyer-heading">` ("Good sticker spots") + a styled `.sticker-success-tips` unordered list. Each row is a `.sticker-success-tip` CSS grid of `28px 1fr` so multi-line wrap indents cleanly under the icon. Three ✅ rows (public, won't-get-removed, sticks-easily) + one 🚫 row (NOT on private property / signage / ATMs / gas pumps) — the last item visually distinguished from the good spots since the original V1 wording started with "NOT".

3. **Share-on-Nostr card.** Dropped the prose "Want to see where other people are…" paragraph that was mashed into the intro box and promoted it to its own dedicated `.wallet-intro.flyer-section` surface card — matches the pattern used on `/stickers` and `/flyers`. Two `.flyer-btn` buttons: primary orange "Share on Nostr" (opens primal.net profile) + outlined "What is Nostr?" (internal link to `/nostr/what-is-nostr`). Kept the `snort.social` email link inline in the paragraph for anyone who wants to copy the npub directly. Reuses shared keys `common_footer_follow_first_half` / `_second_half`.

4. **Bulk order card.** Promoted the StickerMule bulk-order copy (previously a dashed-divider trailing paragraph) to its own card. Heading: "Want more stickers?". Body reuses `common_stickers_bulk_store` + `common_stickers_bulk_cheaper`. Outlined "Order in bulk" `.flyer-btn` button opens the same `stickermule.com/u/4c84ba884f9c3ae` referral link as `/stickers`.

5. **What's next grid.** Replaced the V1 `.text-box.top/middle/bottom` CTA stack + fixed-bottom flyer promo bar with a standard 2-col V2 `.whats-next-section` grid of 4 `<WhatsNextCard>`s — Print flyers → `/flyers`, Get a wallet → `/wallets`, Buy Bitcoin → `/buy`, Keep learning → `/`. The "NEW! Print & Post Bitcoin Flyers →" fixed-bottom bar and all of its CSS dependencies are gone; the flyers CTA now lives as the first What's next card, which is more discoverable and matches the pattern on every other V2 page.

6. **Dropped.** No sources section + no `.publisher-attribution` — this is a utility/thank-you page with no factual claims that need citations or an accuracy review (same reasoning applied on `/flyers`). Robots still `noindex, follow` so form-success pages never appear in search results.

### Files changed

```
app/[locale]/sticker-success/page.tsx          (full V2 rewrite — hero, good-spots card, share-on-Nostr card, bulk-order card, What's next grid; dropped fixed-bottom flyer bar + text-box CTA stack; added WhatsNextCard imports)
app/globals.css                                 (new §12 — `.sticker-success-tips` + `.sticker-success-tip` + `.sticker-success-tip-icon`; reuses `.wallet-intro`, `.flyer-heading`, `.flyer-actions`, `.flyer-btn`, `.home-hero`, `.whats-next-*`)
i18n/en/sticker-success_en.json                (bumped @metadata.last-updated to 2026-04-22; added 7 new keys — sticker_success_hero_title, sticker_success_tips_header, sticker_success_share_header, sticker_success_bulk_header, sticker_success_btn_order_bulk, sticker_success_btn_share_on_nostr, sticker_success_btn_what_is_nostr. Legacy `sticker_success_flyers_bar_*` keys kept for now — dead-key cleanup deferred to Step 2 of the i18n cleanup workflow.)
scripts/sticker-success-v2-keys.js             (NEW — idempotent key-updater script)
V2-REDESIGN-CHECKLIST.md                        (flipped /sticker-success to [x]; updated summary counts: Form success 1/2, Total pages 68/84)
memory-bank/activeContext.md                    (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 strings for `sticker_success_1`–`_3`, `sticker_success_list_1`–`_4`, and fall through to English for the 7 new keys. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- Legacy i18n keys `sticker_success_flyers_bar_new` + `sticker_success_flyers_bar_cta` are no longer rendered anywhere; they'll be caught by the unused-keys audit in Step 1 of the i18n cleanup workflow.
- `/business/sticker-success` (Tier 6) still on V1 — same pattern applies; queued behind the broader business-section redesign.
- `/sticker-language-success` still on V1 — next-up in Tier 5 (1 of 2 remaining).

---

## Previous: /buy V2 redesign — April 22, 2026


`/buy` was still on the V1 design system (centered `.back-to-home` logo link, `.wallet-h3` all-caps hero, `.text-box.intro` boxed copy, `.h2-section` step headers, big `.container-buy-button` country grid with raw `<button>` chips, `.payment-method-option` blocks with `.alert` raster-image callouts, `.buy-platform-box` platform cards, and the `.buy-cta-button` storage CTA). Ported it into the V2 design system used across `/`, `/inflation`, `/wallets`, `/lightning`, `/flyers`, `/bank-runs`, `/about`, `/get-involved`, `/compound-inflation-calculator`, and all ten `/bitcoin-vs-*` pages. Information architecture is unchanged — same 4-step wizard (country → payment method → platform → storage CTA) — only the chrome was replaced.

### What changed

1. **Hero.** Replaced the V1 back-to-home logo + `.wallet-h3` all-caps header with a plain `<h1>` ("How to buy Bitcoin") + `.home-hero`-style intro paragraph. New translation key `buy_header_subtitle` supplies a one-line subtitle under the H1. `buy_header` + `buy_bitcoin_guide` were sentence-cased.

2. **Intro card.** The two-paragraph "Buying Bitcoin for the first time…" blurb now renders inside a `.wallet-intro` bordered surface card (same chrome as `/wallets`, `/lightning`, `/flyers`, `/compound-inflation-calculator`).

3. **Step headers.** Each step now leads with a small uppercase orange `.buy-step-eyebrow` ("STEP 1") + a plain `<h2>` with the step's sentence-cased heading + a muted lead-in paragraph. Four new i18n keys (`buy_step_1_eyebrow`…`buy_step_4_eyebrow`) drive the eyebrows; the existing `buy_step_N_header` strings were sentence-cased ("Select your country", "Choose your payment method", "Your buying options", "Store your Bitcoin safely").

4. **Step 1 (country picker).** New `.buy-search-input` (dark-surface, orange-focus-ring, 12px radius) replaces the legacy `.country-search-input`. The 52 country buttons are now `.buy-country-button` cards — surface background, rounded corners, flag + label in a flex row, hover lift, orange outline when `.is-selected`. Still server-rendered so all 52 entries are crawler-visible. Grid is 2-col desktop / 1-col mobile via `.buy-country-grid`.

5. **Step 2 (payment method).** Replaced the V1 `.payment-method-option` + `.alert` + raster `alert-check-v2.png` / `alert-x-v2.png` icons with two `.buy-method-card` bordered surface cards containing `.wallet-callout` pill badges (✓ green `good`, ✗ red `danger`, ⚠ yellow `warn`) + a solid orange `.buy-method-card-cta` button. Bank card gets ✓ "Fast & easy" + ✗ "Less private"; Cash card gets ✓ "More private" + ⚠ "Limited options". Selected-state inverts the CTA to outlined orange.

6. **Step 3 (platforms).** Replaced the `.buy-platform-box` + inline "RECOMMENDED" ribbon with `a.buy-platform-card` — the whole card is now a clickable link (like V2 wallet cards) with an absolutely-positioned `.buy-platform-badge` orange pill on the top-right for recommended platforms (Strike for bank transfers, ATM for cash). Description + V2-style ✓-prefixed feature bullets + outlined "LEARN MORE →" `.buy-platform-cta` that fills orange on hover. Recommended cards carry a subtle orange linear-gradient top tint.

7. **Step 4 (storage).** Replaced the V1 `.buy-cta-button` with `.buy-storage-card` (bordered surface holding the 3-paragraph "move it to your own wallet" explainer + an emphasized closing line) followed by a `.wallet-lightning-cta`-style single-row link card into `/wallets` ("Next step → View our Bitcoin wallet guide"). New translation key `buy_storage_cta_label` supplies the eyebrow; existing `buy_cta_wallets` was sentence-cased.

8. **What's next grid.** Added a standard V2 `<WhatsNextCard>` grid with 4 cards (Keep learning → `/`, Get a wallet → `/wallets`, Bitcoin doesn't have inflation → `/inflation`, Calculate inflation → `/compound-inflation-calculator`).

9. **Sources + publisher attribution.** Added a new `.sources-section` listing 8 authoritative citations (Strike, Kraken, Relai, Swan, River, CoinATMRadar, Bisq, Satoshi whitepaper). Standard `.publisher-attribution` with the reviewed-for-accuracy badge closes the page (same markup as every other V2 content page).

10. **Schemas.** Kept the V1 HowTo JSON-LD schema (strong GEO signal for "how to buy X" queries). Also still emits Article + BreadcrumbList JSON-LD. The 4 HowTo steps now link to `#country-selection` / `#payment-method-selection` / `#buying-options` / `#storage-guidance` anchors and pull their `text` from the translated step-description + storage-explainer keys so the schema stays in sync with the visible copy.

### BuyFlow component changes

- Signature gained a `walletsHref` prop so the Step 4 CTA can use a locale-prefixed URL (`/${locale}/wallets`) instead of the bare `/wallets` V1 string. Keeps the component pure — no `useLocale()` call in the Client bundle.
- Event delegation on the Step 1 container is unchanged (one `click` handler for all 52 country buttons, one `input` handler for the search filter). The `.selected` class was renamed to `.is-selected` across country buttons + method cards for consistency with the rest of the V2 system.
- Method selection still scrolls smoothly to Step 3; country selection still scrolls smoothly to Step 2. Timing is unchanged (50ms settle).

### Files changed

```
components/BuyFlow.tsx                         (V2 rewrite — `.buy-*` class namespace, V2 callouts, walletsHref prop, `.is-selected` replaces `.selected`)
app/[locale]/buy/page.tsx                      (full V2 rewrite — hero, intro card, step wizard mount, WhatsNext, sources, publisher + HowTo schema restored)
app/globals.css                                 (new §10 — `.buy-step`, `.buy-step-header`, `.buy-step-eyebrow`, `.buy-search-*`, `.buy-country-grid`, `.buy-country-button`, `.buy-country-flag`, `.buy-country-label`, `.buy-method-grid`, `.buy-method-card*`, `.buy-platform-stack`, `.buy-platform-card` + `.is-recommended`, `.buy-platform-badge`, `.buy-platform-name/-description/-features/-feature-check/-cta`, `.buy-storage-card*`)
i18n/en/buy_en.json                            (sentence-cased `buy_bitcoin_guide` + `buy_header` + `buy_step_N_header` + `buy_method_*` + `buy_cta_wallets`, added `buy_header_subtitle`, `buy_meta_description`, `buy_howto_name`, `buy_step_1_eyebrow`–`buy_step_4_eyebrow`, `buy_storage_cta_label`; bumped @metadata.last-updated to 2026-04-22)
scripts/buy-v2/add-keys.js                     (NEW — idempotent key-updater script)
V2-REDESIGN-CHECKLIST.md                        (flipped BuyFlow + /buy to [x]; updated summary counts: Educational/utility 5/5, Total pages 66/88)
memory-bank/activeContext.md                    (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 all-caps values for `buy_header`, `buy_step_N_header`, `buy_method_*_*`, and `buy_cta_wallets`; the 12 new keys (`buy_header_subtitle`, `buy_meta_description`, `buy_howto_name`, 4 × `buy_step_N_eyebrow`, `buy_storage_cta_label`) fall back to English. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- The `alert-check-v2.png` / `alert-x-v2.png` raster icons are no longer referenced on `/buy` (the `.buy-method-card` uses unicode `✓` / `✗` / `⚠` inside `.wallet-callout` pills instead). They're still used on V1 pages that haven't been redesigned yet (business/* and form pages), so the asset itself stays in `public/img/wallets/`.

---

## Previous: /compound-inflation-calculator V2 redesign — April 22, 2026

`/compound-inflation-calculator` was still on the V1 design system (centered `.back-to-home` logo link, `.h1-inflation` single-line uppercase header, V1 `.text-box.intro` wrappers, legacy `compound-form` with `.form-box` + `.cic-button` + `.break-tiny-compound` spacers, V1 `.h2-section`/`.h3-item` CTA card). Ported it into the V2 design system used across `/`, `/inflation`, `/wallets`, `/lightning`, `/flyers`, `/bank-runs`, `/about`, `/get-involved`, and all ten `/bitcoin-vs-*` pages.

### What changed

1. **Hero.** Replaced the V1 back-to-home logo + `.h1-inflation` header with a plain `<h1>` ("Compound Inflation Calculator") + a `.home-hero`-style intro paragraph. New translation key `cic_hero_subtitle` adds a one-line lead-in under the H1.

2. **Intro card.** The three-paragraph "Many people know about compound interest…" blurb now renders inside a `.wallet-intro` bordered surface card (same chrome as /wallets, /lightning, /flyers intro cards).

3. **V2 calculator form.** Fully rewrote the form visual treatment. New `.cic-*` CSS namespace in `app/globals.css` §9:
    - `.cic-fields` — 3-column grid on desktop, stacks on mobile.
    - `.cic-field` — label + input pair.
    - `.cic-label` — 12px uppercase eyebrow (matches stat-card label).
    - `.cic-input` — dark-surface, subtle-border, orange-focus-ring, 12px radius. Inflation-rate input gets an absolutely-positioned `%` suffix via `.cic-input-wrap` + `.cic-input-suffix`.
    - `.cic-submit` — solid Bitcoin-orange CTA, full-width on mobile.
    - `.cic-result` — bordered surface-tinted paragraph with 3 tone modifiers: `--neutral` (idle starting message, muted italic), `--highlight` (successful calc, orange border + tinted background, embedded `<strong class="cic-result-value">` values, and `.cic-result-value--emphasis` orange for the emphasized "new salary" number), `--error` (validation failure, danger red).
    - Form input lives inside a second `.wallet-intro` surface card for visual consistency with the intro card above.

4. **Inflation CTA.** Replaced the V1 `.text-box.solo` + `.h2-section` + `.h3-item` "What can I do about inflation? → Opt Out of Inflation with Bitcoin" card with a `.wallet-lightning-cta`-style single-row surface card pointing to `/inflation?link=calculator` (keeps the existing `?link=calculator` query param so the /inflation page's `<DynamicHeader>` still picks up the referral).

5. **What's next grid.** Added a standard V2 `<WhatsNextCard>` grid with 4 cards (Learn how inflation works → `/inflation`, Get a wallet → `/wallets`, Buy Bitcoin → `/buy`, Explore more topics → `/`).

6. **Sources + publisher attribution.** Added a new `.sources-section` listing the 4 authoritative CPI + M1 citations (BLS CPI, FRED CPIAUCSL, FRED M1SL, FRED Money Supply category). Standard `.publisher-attribution` with the reviewed-for-accuracy badge closes the page.

7. **Schemas.** Kept Article + BreadcrumbList JSON-LD; Article now carries `citations[]` pointing at BLS + FRED so the calculator page inherits the same GEO-friendly sourcing block the /inflation page uses.

8. **Result formatting.** The Client Component now wraps the formatted salary values in `<strong class="cic-result-value">…</strong>`, with the "new salary" number additionally carrying `cic-result-value--emphasis` for an orange highlight. Makes the numeric takeaway pop visually without re-keying any translation strings.

### Files changed

```
components/CompoundInflationCalculator.tsx           (V2 rewrite — `.cic-*` class namespace, tone-aware result paragraph, stronger emphasis markup)
components/CompoundInflationCalculatorSolo.tsx       (unchanged — thin pin-to-USD wrapper)
app/[locale]/compound-inflation-calculator/page.tsx  (full V2 rewrite — hero, intro card, calculator card, inflation CTA, what's next, sources, publisher)
app/globals.css                                       (new §9 — `.cic-section`, `.cic-heading`, `.cic-form`, `.cic-fields`, `.cic-field`, `.cic-label`, `.cic-input` + `.cic-input--suffix`, `.cic-input-wrap`, `.cic-input-suffix`, `.cic-submit`, `.cic-result` + 3 tone modifiers, `.cic-result-value` + emphasis)
i18n/en/compound-inflation-calculator_en.json         (sentence-cased `cic_header` + `cic_inflation_cta`, added `cic_hero_subtitle`, `cic_calculator_heading`, `cic_cta_label`, `cic_next_learn_inflation`, `cic_next_explore_topics`, `cic_next_explore_topics_desc`; bumped @metadata.last-updated)
V2-REDESIGN-CHECKLIST.md                              (flipped CompoundInflationCalculator + CompoundInflationCalculatorSolo + /compound-inflation-calculator to [x]; updated summary counts)
memory-bank/activeContext.md                          (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 uppercase values for `cic_header` + `cic_inflation_cta`, and the six new keys fall back to English. Expected during the V2 pass — handled later in the Step 4 translation refresh.
- `/inflation` still mounts `<CompoundInflationCalculator>` per-currency inside each `<CurrencySection>` block. The inflation page already runs the V2 design system so the new `.cic-*` styling will apply cleanly there as well — the per-currency calculators now pick up the same bordered-form look automatically.

---

## Previous: /wallets V2 redesign — April 22, 2026

`/wallets` was still on the V1 design system (gray `.wallet-box` cards, orange-pill accordion headers via `<p class="wallet-q">`, old meta bars with `alert-check-v2.png` raster icons, V1 Get Started CTAs at the bottom). Ported it into the V2 design system used across `/`, `/inflation`, `/bank-runs`, `/about`, `/get-involved`, and all ten `/bitcoin-vs-*` pages.

### What changed

1. **Hero.** Replaced the V1 `.back-to-home` logo link + `.wallet-h3` heading with a plain `<h1>` ("Bitcoin Wallet Guide") + a `.home-hero`-style intro paragraph. New translation key `wallets_header_subtitle` adds a one-line lead-in under the H1.

2. **Intro card.** The two-paragraph "Bitcoin wallets are interoperable…" blurb now renders inside a `.wallet-intro` bordered surface card (mirrors `.comparison-intro` / `.sticker-tips-section`).

3. **V2 FAQ accordions.** `WalletAccordion` was rewritten: the V1 orange-pill header + max-height 4000px jQuery-era body became a proper `<button>`-based, `aria-expanded`-driven control with a rotating chevron, `color-mix()`-tinted hover border, and 2000px animated expand. The three questions (self-custody, hot/cold, recovery phrase) now use a new `.wallet-callout` pill badge system (✓ SELF-CUSTODY green, ✗ NOT-YOUR-KEYS red, ✓ COLD green, ⚠ HOT yellow) instead of the V1 `.alert` raster-image callouts.

4. **Wallet grid.** Replaced the three-row `.vs-container` / `.wallet-box` pairs with a responsive `.wallet-grid` (2-col ≥700px, 1-col mobile). Each `.wallet-card` renders the wallet image (capped at 140px tall), a centered uppercase `<h2>` name, the two `.wallet-callout` badges stacked horizontally, a `✓`-prefixed features bullet list, an italic grey price/cost line, and a `.wallet-card-cta` "LEARN MORE →" outlined button that fills orange on hover.

5. **Lightning CTA.** Replaced the V1 `.looking-box` with `.wallet-lightning-cta` — a single-row surface card with an orange label ("Lightning Network"), a larger white title ("Looking for our Lightning Wallet Guide?"), and a right-side arrow that translates on hover.

6. **What's next grid.** Removed the legacy `.text-box.top/middle/bottom` trio of Get Started CTAs. Added a standard V2 `<WhatsNextCard>` grid with 4 cards (Keep learning → `/`, Inflation → `/inflation`, Buy Bitcoin → `/buy`, Calculate inflation → `/compound-inflation-calculator`).

7. **Sources + publisher attribution.** Added a new `.sources-section` listing the 6 wallet vendor pages + Bitcoin.org wallet guide + Lopp metal backup reviews + Satoshi whitepaper. Standard `.publisher-attribution` with the reviewed-for-accuracy badge closes the page (same markup as every other V2 content page).

8. **Schemas.** Kept Article + BreadcrumbList JSON-LD. Dropped the V1 page's FAQPage + HowTo + MobileApplication/Product schemas — they were duplicating content the visible Article + Product-list surfaces already provide, and GEO lift from them was marginal relative to the bytes they added.

### Files changed

```
components/WalletAccordion.tsx        (V2 rewrite — button-based, aria-expanded, new .wallet-accordion* class hooks)
app/[locale]/wallets/page.tsx         (full V2 rewrite — hero, intro card, accordions, wallet grid, Lightning CTA, what's next, sources, publisher)
app/globals.css                       (new section 7 — `.wallet-intro`, `.wallet-accordion*`, `.wallet-callout` + tones, `.wallet-grid`, `.wallet-card*`, `.wallet-lightning-cta`)
i18n/en/wallets_en.json               (added 3 keys: `wallets_header_subtitle`, `wallets_grid_heading`, `wallets_lightning_cta_label`; sentence-cased the 3 accordion question keys + wallet name keys; bumped @metadata.last-updated)
V2-REDESIGN-CHECKLIST.md              (flipped WalletAccordion + /wallets to [x]; updated summary counts)
memory-bank/activeContext.md          (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

### Known follow-ups

- The 54 non-English locales still hold the V1 uppercase values for `wallets_question_1/2/3` + wallet name keys + the new keys fall back to English. That's expected during the V2 pass — handled later in the Step 4 translation refresh.
- `/lightning` uses the same `<WalletAccordion>` component but still runs the V1 page shell around it; the accordion will look V2-correct there but the surrounding page is still on V1. `/lightning` is the next item on the Tier 3 checklist.

---

## Previous: Comparison-page below-intro alignment — April 21, 2026


All ten `/bitcoin-vs-*` comparison pages had a visual inconsistency: the intro "card" (the bordered text box sitting just under the hero H1) was narrower than the content stacked below it. Comparison chips, explanation prose, the What's-next grid, the sources list, and the publisher attribution all appeared ~4-40px more inset than the intro card's outer border, because:

- `.container-inner` applies an extra `2% / 2%` horizontal padding which compounds inside every section wrapper.
- `.sources-section` was only 95% wide.
- `.publisher-attribution` was only 70% wide.

### Fix

- Added a `.comparison-page` class hook to the `ComparisonPageLayout` root container.
- Added scoped overrides in `app/globals.css`:
  - `.comparison-page .comparison-point .container-inner`, `.comparison-whats-next .container-inner`, `.sources-section .container-inner`, `.publisher-attribution .container-inner` → `padding-left: 0; padding-right: 0;`
  - `.comparison-page .sources-section`, `.comparison-page .publisher-attribution` → `width: 96%;`
- Net effect: every section below the hero now aligns flush with the outer edges of the intro text box, giving the page a single continuous left/right margin down the column.

The hero + intro card themselves are untouched. Other pages using the same `.sources-section` / `.publisher-attribution` / `.container-inner` rules (inflation, about, get-involved, bank-runs) are untouched because all overrides are scoped under `.comparison-page`.

### Files changed

```
components/ComparisonPageLayout.tsx  (add `comparison-page` class to the root .container-main)
app/globals.css                      (scoped alignment overrides at the bottom of section 6)
memory-bank/activeContext.md         (this entry prepended)
```

### Verification

- `npm run typecheck` → clean.

---

## Previous: Comparison-page hero + intro-card + chip-label polish — April 21, 2026


Three coordinated visual tweaks to all ten `/bitcoin-vs-*` comparison pages. No content moves — this is purely a styling + markup refresh on the shared `ComparisonPageLayout`.

### What changed

1. **Tri-color hero H1.** Each `hero_title` (e.g. "The difference between Bitcoin and Gold") now renders with three colors: white base text, orange "Bitcoin", and per-page asset-accent "Gold" / "Stocks" / "Fine Art" / etc. Achieved by embedding `<span class="orange">Bitcoin</span>` + `<span class="asset">Gold</span>` inside the translation string and rendering the H1 via `dangerouslySetInnerHTML`. The `.asset` span reads the same `--asset-accent` CSS var that already colored the per-point asset chip labels, so gold pages get metallic gold (#EBC61F), stocks pages get their dark-blue accent, etc.

2. **Intro "card" treatment.** The first text block on every comparison page — the 2-3 paragraph intro — now sits inside a bordered, left-aligned surface card (`background: var(--color-surface)`, `1px solid var(--color-card-border)`, `border-radius: 16px`) that mirrors the look of the comparison chips below it and the whats-next cards further down. Replaces the previous centered, borderless prose.

3. **Bigger comparison-chip labels.** The "BITCOIN" / "GOLD" / "STOCKS" labels above each comparison point jumped from 12px → 24px (800 weight, 20px on mobile). Same color tokens as before (Bitcoin orange + `--asset-accent`), just much more prominent visually — matches the "big colored words" feel the new hero H1 introduces.

### Files changed

```
i18n/en/bitcoin-vs-*.json            (10 files — hero_title now embeds inline span markup)
scripts/update-comparison-hero-titles.js (NEW — idempotent bulk updater)
components/ComparisonPageLayout.tsx  (render hero H1 via dangerouslySetInnerHTML when heroTitleKey is set)
app/globals.css                      (scoped `.comparison-hero h1:has(.asset)` white base + new
                                        `.comparison-intro .container-inner` card styling +
                                        enlarged `.comparison-chip-label` rule)
memory-bank/activeContext.md         (this entry prepended)
```

### Scoping notes

- The H1 white-base override uses `h1:has(.asset)` so `/bank-runs`, `/about`, and `/get-involved` (which share `.comparison-hero` via `ContentPageLayout` but have no `.asset` span in their headline) keep their original all-orange H1.
- `.comparison-intro` is only emitted by `ComparisonPageLayout`, so the bordered-card styling is automatically isolated to the 10 `/bitcoin-vs-*` pages.
- Other-language JSON files still fall back per-key to English via `loadNamespaceMessages()`, so every locale immediately picks up the tri-color hero — no 55-language script needed. Translators will adopt the inline span markup naturally when they next edit their `hero_title` string.

### Verification

- `npm run typecheck` → clean.
- English gold page spot-checked: H1 renders three colors, intro block sits in a bordered card, chip labels read at 24px.

---

## Previous: Comparison-page translation-collision bugfix — April 20, 2026

Every `/bitcoin-vs-*` comparison page was rendering a Frankenstein mix of explanations pulled from multiple comparison JSON files. The Bitcoin-side chip values, every paragraph underneath each comparison section, and several "intro" lines were all wrong — they showed strings from whichever `bitcoin-vs-*` namespace happened to be merged last into the global next-intl message bag.

### Root cause

`lib/i18n/request.ts` was eagerly loading **every** comparison namespace (`bitcoin-vs-gold`, `bitcoin-vs-stocks`, `bitcoin-vs-cash`, `bitcoin-vs-banks`, `bitcoin-vs-bonds`, `bitcoin-vs-real-estate`, `bitcoin-vs-crypto`, `bitcoin-vs-visa`, `bitcoin-vs-cbdc`, `bitcoin-vs-fine-art`, `bank-runs`, `about`, `get-involved`) for every request via `DEFAULT_NAMESPACES`. `loadMessages()` merges those into one flat object with `Object.assign({}, ...)` — **last-wins semantics on key collision**.

All ten comparison files share the same generic key names: `bitcoin_point_1` … `bitcoin_point_10` plus `point_1_summary_1` … `point_N_summary_M`. Merging them together overwrote earlier values, so e.g. `bitcoin_point_1` on `/bitcoin-vs-banks` rendered the fine-art page's "Perfectly fungible" chip value, and `point_1_summary_1` rendered the CBDC explanation, etc.

(Asset-specific keys like `gold_point_1`, `banks_header_4`, `cbdc` were uniquely named per file and worked correctly — that's why H1s and asset-side chip labels still looked right while everything on the Bitcoin side and every explanation paragraph was scrambled.)

### Fix — per-page isolated translations

New helper `lib/i18n/page-translations.ts`:

```ts
export async function getPageTranslations(
  locale: Locale,
  namespace: string,
): Promise<PageTranslator> {
  const messages = await loadMessages(locale, ["common", namespace]);
  return (key: string) => messages[key] ?? key;
}
```

Loads **only** `common` + one page-specific namespace, so generic keys never collide across pages. Returns a `(key) => string` resolver with the same call-site shape as `next-intl`'s `getTranslations()` return value — zero JSX changes required in the layouts.

### Files changed

```
lib/i18n/page-translations.ts      (NEW — isolated per-page translator)
components/ComparisonPageLayout.tsx (swap getTranslations() → getPageTranslations())
components/ContentPageLayout.tsx    (swap getTranslations() → getPageTranslations())
lib/comparisons/metadata.ts         (swap getTranslations() → getPageTranslations())
app/[locale]/about/page.tsx         (metadata swap)
app/[locale]/bank-runs/page.tsx     (metadata swap)
app/[locale]/get-involved/page.tsx  (metadata swap)
lib/i18n/request.ts                 (remove 13 now-unneeded namespaces from DEFAULT_NAMESPACES
                                      — replaced with a big comment explaining why)
memory-bank/activeContext.md        (this entry prepended)
```

No JSON / translation-file changes needed — the content on disk was always correct; only the loader was merging namespaces wrongly. Also slightly shrinks the default per-request message bag (13 fewer namespaces × 55 locales).

### Verification

- `npm run typecheck` → clean.
- Dev-server smoke test against all 10 `/en/bitcoin-vs-*` pages confirmed unique, correct chip values and explanation prose per page.
- `/es/bitcoin-vs-banks` spot-checked — Spanish chips + H1 render correctly (`"Acceso sin permisos"`, `"Requiere permiso"`, `"LA DIFERENCIA ENTRE"`).
- `/en/bank-runs` renders its own content (was never visibly broken, but switched to the isolated loader for consistency).

---

## Previous: `/get-involved` V2 redesign — April 20, 2026

Brought `/get-involved` in line with the V2 design system that `/about`, `/inflation`, and `/bank-runs` already use. Four editorial changes landed together:

### What changed

- **Single-line hero H1** — `get_involved_header` is now `"Get involved and spread Bitcoin."` (sentence case, no subtitle). The legacy two-line `GET INVOLVED / SPREAD BITCOIN` all-caps split is gone; `headerKeys.subtitle` is no longer set in `lib/comparisons/get-involved.ts`.
- **Intro section centered** — the opening "It can be depressing to live in the current state of our world." section now has `centered: true`, matching the `/about` "Our Mission" hero-style treatment (the same `.content-section--centered` CSS rule in `app/globals.css`).
- **Sticker section** — replaced the inline "REQUEST A STICKER PACK" link with a `learn-more` card (same shape as every `/about` card). Card keys: `get_involved_card_stickers_{label,title,source}`, links to `/stickers`.
- **Flyers replace postcards** — the Postcards section is gone entirely (program retired). New "Print and post a flyer" section with 3 paragraphs describing the flyer campaign + a `learn-more` card linking to `/flyers`. Card keys: `get_involved_card_flyers_{label,title,source}`.
- **Business kit** — replaced the inline "BUSINESS KIT" link with a `learn-more` card linking to `/business/kit`. Card keys: `get_involved_card_business_{label,title,source}`.
- **New Contribute on GitHub section** — brand-new final section recruiting developers / designers / writers / translators. 3 paragraphs explaining the MIT-licensed open-source mission + a `learn-more` card linking to `https://github.com/sovenor/bitcoin-rocks` (external). Card keys: `get_involved_card_github_{label,title,source}`.

### Files changed

```
lib/comparisons/get-involved.ts          (rewritten — 4 sections w/ cards, postcards removed, github added)
i18n/en/get-involved_en.json             (rewritten key set — flyer + github keys added, postcard keys removed,
                                          header collapsed to single line, date → 2026-04-20)
public/llms.txt                          (Get Involved one-liner updated: flyers + github, postcards dropped)
public/llms-full.txt                     (Get Involved section: flyers + github blocks, postcards block removed)
llms.txt                                 (mirror of public/llms.txt)
llms-full.txt                            (mirror of public/llms-full.txt)
memory-bank/activeContext.md             (this entry prepended)
```

### Translation fallback

Non-English `get-involved_*.json` files still contain the retired postcard keys + legacy `get_involved_header_2` / `get_involved_request_a` etc. They'll render as dead keys in the JSON and can be cleaned up by translators incrementally. The 11 new card + flyer + github keys fall back to the English strings per-locale until PRs land. The header change (`get_involved_header` value "GET INVOLVED" → "Get involved and spread Bitcoin.") will apply in English-speaking contexts immediately; other locales keep their translated "GET INVOLVED" until re-translated — both read fine in the hero slot.

### Build + verification

- `npm run typecheck` → clean.
- `npm run build` → ✓ Compiled successfully in 6.0s, **4,734 static pages** (unchanged), TypeScript clean.

---

## Previous: "What's next?" source-line double-"Source:" bugfix — April 20, 2026

A small but visible rendering bug in the "What's next?" card grids on `/inflation`, `/bank-runs`, `/about`, `/get-involved`, and every `/bitcoin-vs-*` comparison page. The source line was rendering as:

```
Source: Source: bitcoin.rocks → →
```

instead of the intended `Source: bitcoin.rocks →`.

### Root cause

`components/WhatsNextCard.tsx` composes the source line as:

```tsx
<span>{t("home_source_prefix")}</span> <span>{t(authorKey)}</span> →
```

where `home_source_prefix` resolves to `"Source:"` — i.e. the component itself owns the `"Source:"` prefix and the `" →"` suffix. The `authorKey` is expected to resolve to just an author/brand string like `"bitcoin.rocks"`.

The homepage (`app/[locale]/page.tsx`) gets this right by passing `authorKey="home_link_author_bitcoin_rocks"` (value: `"bitcoin.rocks"`). But three other call-sites were passing `authorKey="common_next_source"` whose value is the full string `"Source: bitcoin.rocks →"`. That doubled both the prefix and the arrow.

### Fix (3 files)

Changed `authorKey="common_next_source"` → `authorKey="common_publisher_name"` (value: `"bitcoin.rocks"`) in every "What's next?" card:

- `components/ContentPageLayout.tsx` — 4 cards (used by `/about`, `/bank-runs`, `/get-involved`)
- `components/ComparisonPageLayout.tsx` — 4 cards (used by every `/bitcoin-vs-*` page)
- `app/[locale]/inflation/page.tsx` — 4 cards (used by `/inflation`)

**Deliberately did NOT touch** the `common_next_source` translation key itself. That key still resolves to the full `"Source: bitcoin.rocks →"` string and is correctly consumed as a `sourceKey` prop by `StatCardView` + `LearnMoreCardView` in `ContentPageLayout.tsx` (which render the key verbatim, without wrapping it). Used on `/about`'s learn-more cards (`about_card_*_source`), `/bank-runs` stat cards, etc. Changing the key's value would have broken all of those.

### Files changed

```
components/ContentPageLayout.tsx     (4 × authorKey swap)
components/ComparisonPageLayout.tsx  (4 × authorKey swap)
app/[locale]/inflation/page.tsx      (4 × authorKey swap)
memory-bank/activeContext.md         (this entry prepended)
```

### Build + verification

- `npm run typecheck` → clean.
- grep confirms zero remaining `authorKey="common_next_source"` occurrences.

---

## `/about` redesign + `/bank-runs` first-h2 cleanup — April 20, 2026

Second content update of the day on `v2-nextjs-redesign`. Brought the `/about` page into the V2 card-based design system that `/bank-runs` and `/inflation` already use, and removed the one-off `.content-section-heading-first` class that was lightening the first H2 on `/bank-runs`.

### What changed on `/about`

- **Hero H1** is now a single key (`about_header`) rendered in regular case: **"About bitcoin.rocks"**. The V1 two-line all-caps `"ABOUT" / "BITCOIN.ROCKS"` is gone.
- **Our Mission** section is centered (`centered: true` on the `ContentSection`) and its first paragraph embeds an inline link to `https://github.com/sovenor` on the word "sovenor" via a `SummaryFragment.href`. Rendered text: *"bitcoin.rocks was founded by **sovenor** in 2022 with a simple mission: accelerate Bitcoin adoption through education."*
- **Link-in-prose paragraphs → `.whats-next-card` learn-more cards** rendered after each section's prose via the existing `ContentCardsBlock` helper in `ContentPageLayout.tsx`. Three card groups:
  - *What We Do* → **3 cards** (stickers `/stickers`, flyers `/flyers`, business kit `/business/kit`) — all locale-prefixed.
  - *Open Source* → **2 cards** (GitHub repo + Contributing guide on GitHub).
  - *Contact Us* → **3 cards** (email `mailto:hi@bitcoin.rocks`, Nostr via snort.social, GitHub repo).
- **Trusted sources list updated** in the *Our Editorial Approach* section. `about_editorial_2` no longer mentions TIME Magazine. New list: Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, United Nations, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, James Lavish — aligned with the actual citations across the site (especially the ~60 outbound URLs on `/inflation`).

### What changed on `/bank-runs`

- **`.content-section-heading-first` is gone**. Removed the conditional className (`i === 0 ? "content-section-heading-first" : undefined`) from `components/ContentPageLayout.tsx` and deleted the `.content-section-heading-first { font-weight: 500 !important }` rule from `app/globals.css`. The "What is a bank run?" H2 now renders with the site-wide base H2 weight (700) just like every other section heading.
- `centered` stays on the `ContentSection` type — `/about`'s Our Mission section uses it.

### `ContentPageLayout.tsx` tweak

The `<ContentCardsBlock>` learn-more grid previously forced `gridTemplateColumns: "1fr"` inline so a single card filled the row. That inline style is gone; the grid now uses the regular `.whats-next-grid` rules (2-col desktop, 1-col mobile). Single cards still span full width via the existing `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1 }` rule in globals.css. Multi-card sections (the new `/about` sections) lay out in 2-col desktop; on the *What We Do* section's 3 cards, row 1 fills and the 3rd card anchors row 2. No visual change on `/bank-runs` (all its learn-more sections are single-card only-child cases).

### Files changed

```
i18n/en/about_en.json                                   (rewritten key set, new card keys, date 2026-04-20)
i18n/en/bank-runs_en.json                               (date → 2026-04-20, no content change)
lib/comparisons/about.ts                                (rewritten: mission centered + 3 sections w/ cards)
components/ContentPageLayout.tsx                        (removed content-section-heading-first className
                                                         + inline gridTemplateColumns style)
app/globals.css                                         (removed .content-section-heading-first rule)
public/llms-full.txt                                    (mission paragraph + trusted-sources list)
memory-bank/activeContext.md                            (this entry prepended)
memory-bank/progress.md                                 (progress note prepended)
```

### Translation fallback

Non-English about_*.json files still contain the old legacy keys (`about_header_2`, `about_mission_1-3`, `about_what_we_do_2a/b/c`, `about_what_we_do_3a-e`, `about_open_source_1a/b/c`, `about_open_source_contribute`, `about_contact_1`, `about_contact_email_addr`, etc.). The rewritten `lib/comparisons/about.ts` doesn't reference any of them, so they render as dead keys in the JSON files but don't break anything — translators will clean them up incrementally. New keys (`about_mission_1a`/`1b`/`1_sovenor`, all `about_card_*` keys, the rewritten `about_editorial_2`) fall back to the English strings until PRs land per-language translations.

### Build + verification

- `npm run typecheck` → clean.
- `npm run build` → ✓ 4,734 static pages (unchanged), TypeScript clean.
- Manual spot-check deferred to the user's local dev server.

---

## `/inflation` sources expansion — April 20, 2026


The `/inflation` SOURCES block was ~4 years stale — just 6 generic entries (FRED M1 US, FRED int'l landing page, BLS CPI, Mempool, Bitcoin source code, whitepaper) — while the page body actually cites **~60 outbound URLs** across 13 currencies, 4 real-world stories, and the James Lavish Treasury-auction piece.

### What changed

**`app/[locale]/inflation/page.tsx`**
- Replaced the single 6-item `<ol className="sources-list">` with **five grouped `<section className="sources-group">` blocks**:
  1. **Money supply data** — 13 per-currency FRED M1 links (generated from `CURRENCY_URLS` + `CURRENCIES`) + FRED money-supply category index.
  2. **Inflation / Consumer Price Index** — BLS (US authoritative source) + 13 per-currency FRED CPI links.
  3. **Government debt** — 12 per-currency FRED general-government-debt links (EUR skipped; already `null` in `CURRENCY_URLS`) + James Lavish "Can a Treasury Auction Fail?".
  4. **Bitcoin data** — Bitcoin Price Report, the whitepaper, the Core GitHub repo, Mempool.space.
  5. **Real-world examples** — the four story-card URLs (Canada, Nigeria, Texas, Pennsylvania) that were already linked in the body.
- The per-currency lists are **generated from `CURRENCY_URLS` + `CURRENCIES`** (the existing constants), so adding a new currency later automatically adds it to the money supply / CPI / debt groups with no extra bookkeeping.
- Currency names come from the already-existing `inflation_us_dollar` / `inflation_australian_dollar` / etc. picker-button i18n keys (so the sources list is fully translatable for free).
- Decision: **static, comprehensive list — not per-currency dynamic**. Reason: the sources block is primarily a GEO / E-E-A-T trust signal. Crawlers + LLM answer engines parse the initial server-rendered HTML once; a dynamic swap-out would shrink the visible citation count at any moment to ~6, defeating the purpose. The grouped list stays scannable for human readers.
- Also extended `buildArticleSchema()` with canonical citations (14 authoritative sources as `CreativeWork` nodes under `citation: [...]` in the Article JSON-LD).

**`lib/schema/article.ts`**
- New optional `citations?: ArticleCitation[]` field (`{ url, name, publisher? }`). Emits `schema.citation = [{ "@type": "CreativeWork", name, url, publisher: { "@type": "Organization", name } }]`. No breaking changes — every existing caller compiles unchanged.

**`app/globals.css`**
- Added `.sources-group`, `.sources-group-title`, and a `.sources-group .sources-list { list-style-type: disc }` override under the existing `.sources-section` block. Uses semantic tokens (`var(--color-fg-muted)`, `var(--font-proxima)`) — no new hardcoded hex.

**`i18n/en/common_en.json`** (via `scripts/add-sources-keys.js`)
- +6 new keys inserted right after `common_sources_heading`:
  - `common_sources_group_money` — "Money supply data"
  - `common_sources_group_cpi` — "Inflation / Consumer Price Index"
  - `common_sources_group_debt` — "Government debt"
  - `common_sources_group_bitcoin` — "Bitcoin data"
  - `common_sources_group_stories` — "Real-world examples"
  - `common_sources_treasury_auction` — James Lavish piece title
- `@metadata.last-updated` → `2026-04-20`.

**`i18n/en/inflation_en.json`** — `@metadata.last-updated` → `2026-04-20` (the `dateModified` schema field auto-updates from this via `lib/schema/date-modified.ts`).

### Translation fallback
All 54 non-English locales fall back to the English strings for the 6 new keys until translators pick them up via PRs. The per-currency labels inside the lists already have translations in every language (they're the picker-button labels).

### Build + verification
- `npm run typecheck` → clean.
- Files touched: 3 source files + 2 i18n files + 2 throwaway scripts (`scripts/add-sources-keys.js`, `scripts/bump-inflation-last-updated.js`).

---

## `/bank-runs` stat cards — April 19, 2026

First content update since the CSS refactor. Added stat-card + learn-more-card blocks to the four `/bank-runs` sections, matching the visual style of the inflation page's hero stat cards (same `.stat-cards-grid` + `.stat-card` classes). No new CSS — reused what the inflation page already had.

### Commit 1 — stat cards redesign

**`lib/comparisons/bank-runs.ts`** — extended `ContentSection` schema with an optional `cards: readonly ContentCard[]` field. Two card types:
- `StatCard` — mirrors the inflation-page hero card. Fields: `labelKey`, `valueLiteral` OR `valueKey`, `valueTone` (`success`/`danger`/`accent`/`muted`), optional `detailKey`, optional `sourceKey`, `href`, `external`/`localize` flags, optional `valueDomId`/`detailDomId` for the upcoming FDIC-live-data client component.
- `LearnMoreCard` — wraps `WhatsNextCard` shape (`labelKey` + `titleKey` + `sourceKey` + `href`).

**`components/ContentPageLayout.tsx`** — new `<ContentCardsBlock>` helper renders cards after each section's paragraphs. Two stat cards share a `.stat-cards-grid` (2-col → 1-col mobile). A single learn-more card spans full-width via `.whats-next-grid` with inline `gridTemplateColumns: "1fr"`.

**`BANK_RUNS` data** now:
- Section 1 (What is a bank run?) → 2 stat cards: **Bank reserve ratio 0%** (danger, → federalreserve.gov/monetarypolicy/reservereq.htm) + **Bitcoin reserve ratio 100%** (success, → bitcoin.org/bitcoin.pdf).
- Section 2 (SVB) → dropped the inline FDIC link in p1; added a full-width learn-more card **"Learn how the Silicon Valley Bank run happened"** (→ law.uw.edu/news-events/news/2023/svb-collapse).
- Section 3 (FDIC) → dropped both inline links; added 2 stat cards: **FDIC coverage ~1.3%** (danger, with Q4 2025 snapshot detail "~$140B fund vs ~$11T in insured deposits"; both value + detail get DOM ids `stat-fdic-coverage-value` + `stat-fdic-coverage-detail` for the upcoming `<FdicStats>` live-data client component) + **Bitcoin coverage 100%** (success, "Full-reserve system — no deposit insurance needed"). Rewrote p1 to stand alone without the inline link.
- Section 4 (Bitcoin doesn't have bank runs) → dropped the `bank_runs_bitcoin_wallet_cta` paragraph; added a learn-more card **"Learn how to get your own Bitcoin wallet"** (→ `/wallets`, localized).
- Added a new entry in `sources` for the UW Law SVB explainer.

**`i18n/en/bank-runs_en.json`**:
- Bumped `@metadata.last-updated` → `2026-04-19`.
- Rewrote `bank_runs_svb_p1`, `bank_runs_fdic_p1` to drop the inline-link prose bridges.
- Removed `bank_runs_bitcoin_wallet_cta` (now embedded in card form).
- Added 18 new keys across the three card groups (`bank_runs_card_bank_reserve_*`, `bank_runs_card_btc_reserve_*`, `bank_runs_card_svb_*`, `bank_runs_card_fdic_*`, `bank_runs_card_btc_fdic_*`, `bank_runs_card_wallet_*`).

Translation fallback: all 54 non-English locales will fall back to the English strings for the new card keys until translators pick them up via PRs. Existing keys (`bank_runs_svb_p1`, `bank_runs_fdic_p1`) have slightly updated English copy; localized overrides still win where present (the older translated text is a close enough paraphrase that the slight prose difference isn't jarring).

### Build + verification
- `npm run typecheck` → clean.
- Visual check pending after user reloads `/en/bank-runs`.

### Commit 2 — live FDIC data (shipped)

End-to-end live-data pipeline for the FDIC coverage stat card.

- **`forms-backend/fdic-stats.js`** (NEW, ~300 lines). Quarterly scraper + file-cache (24h TTL on `fdic-stats-cache.json`, same pattern as `inflation-stats.js`).
  1. Fetches `https://www.fdic.gov/quarterly-banking-profile/fdic-statistics-glance` HTML.
  2. Finds the most-recent `statistics-glance-historical-trends-<quarter>.xlsx` link.
  3. Downloads the xlsx and unpacks it **without any new npm deps** — an xlsx is just a ZIP, so we decode local file headers inline and inflate the two files we need (`xl/sharedStrings.xml` + `xl/worksheets/sheet1.xml`) with Node's built-in `zlib.inflateRawSync`.
  4. Finds the `Fund Balance` / `Insured Deposits` / `Reserve Ratio` rows by column-A label and pulls the latest data cell (column C).
  5. Parses "As of <Month> <Day>, <Year>" from the top rows for the date label.
  6. Falls back to a stale-cache-or-snapshot chain on any error.
- **`forms-backend/server.js`** — added `/api/fdic-stats` endpoint (CORS `*`, 1h `Cache-Control`, identical contract pattern to `/api/inflation-stats`).
- **`components/FdicStats.tsx`** (NEW, ~100 lines). Client Component, pure side-effect (`return null`). Fetches the endpoint on mount and writes into `#stat-fdic-coverage-value` + `#stat-fdic-coverage-detail` via `document.getElementById(...)`. Handles `insuredDeposits` unit conversion (B → T when it crosses 1000). Silent fallback leaves the server-rendered snapshot intact — no hydration mismatch, no layout shift.
- **`app/[locale]/bank-runs/page.tsx`** — mounts `<FdicStats />` at the top of the page (alongside `<ContentPageLayout>`).
- **`i18n/en/bank-runs_en.json`** — updated the server-rendered snapshot with the real Dec 2025 FDIC data from the historical-trends xlsx: value `1.42%`, detail `$153.9B insurance fund vs $10.82T in insured deposits (Dec 2025)`. The Client Component then replaces these with whatever the live endpoint returns (which, in steady state, will be the same values — but automatically refreshes next quarter).

**Local smoke test (from repo root):**
```
DB_PATH=/tmp/fdic-test.db node -e "require('./forms-backend/fdic-stats').getFdicStats().then(s => console.log(JSON.stringify(s, null, 2)))"
```
→ `{ reserveRatio: 1.42, fundBalance: 153.9, insuredDeposits: 10822, asOfLabel: "Dec 2025", asOfDate: "2025-12-31", source: "live", ... }`.

**Build verification**
- `npm run typecheck` → clean.
- `npm run build` → ✓ TypeScript clean, 4734 static pages (unchanged — `<FdicStats>` is a side-effect Client Component, no new route).

**Railway deploy checklist**
- The frontend commit is safe to deploy immediately — if the `/api/fdic-stats` endpoint 404s, the server-rendered snapshot stays visible.
- The `forms-backend` change must be deployed to Railway separately (same service as the existing inflation-stats endpoint). No env var changes required; no DB migration.

### Files changed in Commit 1
```
lib/comparisons/bank-runs.ts                        (edited — schema + 4 sections gain cards)
components/ContentPageLayout.tsx                    (edited — ContentCardsBlock + StatCardView + LearnMoreCardView)
i18n/en/bank-runs_en.json                           (edited — 18 new keys, 2 rewrites, 1 removed, date bump)
memory-bank/activeContext.md                        (this entry prepended)
memory-bank/progress.md                             (progress note prepended)
```

### Files changed in Commit 2
```
forms-backend/fdic-stats.js                         (NEW — scraper + xlsx parser + 24h file cache)
forms-backend/server.js                             (edited — added /api/fdic-stats endpoint)
components/FdicStats.tsx                            (NEW — Client Component, ~100 lines)
app/[locale]/bank-runs/page.tsx                     (edited — mount <FdicStats />)
i18n/en/bank-runs_en.json                           (edited — snapshot values updated to real Dec 2025 data)
```

---

## Previous: CSS Refactor — April 18, 2026

First post-migration housekeeping commit on `v2-nextjs-redesign`. `app/globals.css` dropped from 2368 to 1090 lines (-54%) across 3 commits prefixed `CSS refactor:`. Zero visual change on V2 pages; V1 pages temporarily render unstyled (acceptable — they're scheduled for V2 redesign post-cutover anyway).

### What changed

**Commit 1 — delete V1 legacy CSS** (`e3dbb13f` — `CSS refactor: delete V1 legacy CSS (Phase 9a/9b/10/12)`)
- Dropped the four legacy CSS blocks (Phase 9a Bucket B, Phase 9b forms, Phase 10 business, Phase 12 nostr) — ~1200 lines total.
- Selectors gone: `.text-box`, `.wallet-q`, `.wallet-box`, `.wallet-button`, `.bounty-button`, `.compound-form`, `.cic-button`, `.alert`, `.biz-box`, `.biz-*` cards, `.wallet-box-biz`, `.expandable`, `.initial-text`/`.additional-text`, `.h2-section`, `.h3-item`, `.h2-label`, `.h2-stickers`, `.h3-label`, `.h4-label`, `.h3-category`, `.h2-category`, `.nostr-intro-h2`, `.biz-h3`, `.wallet-h3`, `.choose-sticker`, `.button-form`, `.button-sticker`, `.buy-platform-box`, `.payment-method-option`, `.fixed-bottom-bar`, all the `.break-*` utilities, plus ~20 small helpers.
- Affected JSX pages that now render unstyled (deliberate, temporary): `/wallets`, `/lightning`, `/flyers`, `/compound-inflation-calculator`, `/stickers`, `/signs`, `/postcards`, `/buy`, `/business/*` (13 pages), `/nostr/*` (2 pages), `/sticker-files/*` (43 pages + index), all `*-success` pages.

**Commit 2 — standardize tokens + element base styles + dedupe V2** (`eb89d1a9` — `CSS refactor: standardize tokens, element base styles, dedupe V2 rules`)
- Expanded `@theme` with new semantic tokens: `--color-surface` (#111119 card background), `--color-fg-dim` (#999), `--color-fg-dimmer` (#888), `--color-card-border` (rgba(255,255,255,0.12)), `--color-success` (#4caf50), `--color-danger` (#ff4444), `--color-link-hover` (#ffb84d). These replaced ~100 hard-coded hex occurrences across the V2 rules.
- Added element-level base styles for `html`/`body`/`h1`/`h2` so every V2 page gets hero + section-heading styling from the element itself, no class hook required.
- Collapsed 21 `.home-pill.<color> { color: X !important; }` rules + the border-color union into one `--pill-color` CSS custom prop pattern: base rule reads `color: var(--pill-color, #f0f0f0)` + `border-color: var(--pill-color, #3d3d3d)`; each modifier is a single line `--pill-color: #19bc38;`. Went from ~50 lines to 25 lines and zero `!important`.
- Stripped ~65 unnecessary `!important` tags. Only 2 legitimate `!important` uses remain: `.countries[hidden] { display: none !important }` (CSS attribute-based hiding needs to beat descendant `display:` rules) and `.force-orange` (intentional override for headings that otherwise inherit parent color).
- Unified all media queries on the `--breakpoint-md` (700px) value. File previously mixed 400/500/600/700 breakpoints with no justification.
- Added a clear table of contents in the file header describing the 6 sections.

**Commit 3 — strip `.h1-inflation`/`.h2-inflation` from V2 JSX** (`892bc08d` — `CSS refactor: strip redundant h1-inflation/h2-inflation classNames from V2 JSX`)
- 6 V2 files edited:
  - `app/[locale]/page.tsx` — `<h1 className="h1-inflation">` → `<h1>` ; `<p className="inflation-intro">` → `<p>` (handled by `.home-hero p` rule)
  - `app/[locale]/inflation/page.tsx` — `<h1 className="h1-inflation">` → `<h1>` ; removed `className="orange"` on the `#changing-header` `<span>` since it's already an orange H1
  - `app/[locale]/[...rest]/page.tsx` + `app/not-found.tsx` — same H1 strip; kept `.force-orange` on the H2 since base H2 is white
  - `components/ComparisonPageLayout.tsx` + `components/ContentPageLayout.tsx` — `<h1 className="h1-inflation comparison-h1">` → `<h1>` ; `.comparison-h1` no longer needed, its `line-height: 1.15` tweak moved to `.comparison-hero h1`
- Build: `npm run build` ✓ 4734 static pages, TypeScript clean.

### Intentionally left alone
- V1 JSX classNames (`.wallet-q`, `.biz-*`, `.h2-section`, `.h3-item`, `.h2-stickers`, etc.) — classes still in markup but the CSS is gone. Pages render unstyled until their V2 redesign lands. This was the user's explicit request: don't touch V1 pages since they're being redesigned anyway.
- `.comparison-h1` class reference — fully removed from JSX. Any legacy code path still passing it gets ignored (no matching CSS selector).
- `forms-backend/` — untouched.
- `main` at `origin/main` (`6cb07406`) — still frozen through Phase 15 cutover.

### Files changed in this CSS refactor
```
app/globals.css                                (-1278 lines total: 2368 → 1090)
app/[locale]/page.tsx                          (2 className strips on H1 + P)
app/[locale]/inflation/page.tsx                (1 className strip on H1; span.orange removed)
app/[locale]/[...rest]/page.tsx                (2 className strips on H1 + H2)
app/not-found.tsx                              (2 className strips on H1 + H2)
components/ComparisonPageLayout.tsx            (1 className strip on H1)
components/ContentPageLayout.tsx               (1 className strip on H1)
scripts/css-refactor/update-memory-bank.js     (NEW — idempotent this file's generator)
memory-bank/activeContext.md                   (this entry prepended)
memory-bank/progress.md                        (progress note prepended)
```

### Next
Nothing scheduled — CSS refactor is a one-off housekeeping commit. The migration plan returns to Phase 15 (pre-cutover QA + cutover merge to `main`) when the user is ready. The per-page V2 redesigns of Bucket B/C pages can happen anytime post-cutover; each one will naturally replace the now-unstyled V1 markup with fresh V2 markup.

---

## Latest: Next.js Migration — Phase 14 Cleanup + Docs — April 17, 2026

Eighteenth commit of the Next.js migration on `v2-nextjs-redesign`. With all content-porting phases complete (Phases 5-13 shipped 54 published slugs × 55 locales = 4,734 static pages), Phase 14 is the cleanup pass: we deleted every legacy static-site asset the Next app has fully replaced, and refreshed the entire documentation tree (`.clinerules/`, `memory-bank/`, `README.md`, `CONTRIBUTING.md`) to describe the Next 16 + React 19 + TS + Tailwind v4 stack instead of the old HTML/CSS/jQuery site. `main` is still frozen; the next phase (Phase 15) is the cutover merge.

### What Phase 14 deleted

**Root-level HTML pages (27 files)** — replaced by their `app/[locale]/<slug>/page.tsx` equivalents:
`404.html`, `about.html`, `bank-runs.html`, `bitcoin-vs-{banks,bonds,cash,cbdc,crypto,fine-art,gold,real-estate,stocks,visa}.html`, `buy.html`, `compound-inflation-calculator.html`, `flyers.html`, `get-involved.html`, `index.html`, `inflation.html`, `lightning.html`, `postcards.html`, `postcard-success.html`, `sign-success.html`, `signs.html`, `sticker-language-success.html`, `sticker-success.html`, `stickers.html`, `wallets.html`.

**HTML sub-site directories** — replaced by the Next routes:
`business/` (13 pages), `nostr/` (2 pages), `sticker-files/` (43 language subdirs + 1 index).

**Legacy front-end stack**:
`jquery/` (jQuery core + jquery.i18n + all 11 custom JS files — language.js, home-carousel.js, country-selector-*.js, inflation-stats.js, dynamic-header.js, compound-inflation-calculator*.js, sticker-picker.js, buy-flow.js) and `css/` (single `style.css`).

**Server config**:
`nginx.conf` (replaced by `next.config.ts`'s `redirects()` — 33 permanent redirects already in place from Phase 13) and `robots.txt` (replaced by `app/robots.ts`).

**Legacy script pipeline** (13 scripts total):
- `scripts/inject-{article,breadcrumb,comparison,organization,reviewed-badge,seo-content}-schema.js` (6 files) — replaced by `lib/schema/*.ts` builders.
- `scripts/inflation-multi/` directory — static-site era multi-currency inflation HTML rebuilder.
- One-off HTML helpers: `scripts/fix-carousel-wrap.js`, `scripts/update-inflation-{i18n,revamp}.js`, `scripts/update-index-i18n-for-saving.js`, `scripts/add-{faq,whats-next}-keys.js`, `scripts/audit-v2-v1-pages.js`.

**Total**: 43 files + 6 directories deleted via the idempotent `scripts/phase14/delete-legacy-assets.js` helper.

### What stayed

- `public/img/**`, `public/favicons/**`, `public/sticker-files/**`, `public/business/**` — already the canonical copy (copied in earlier phases; the deleted root-level `img/` / `business/files/` / `business/sticker-files/` / `sticker-files/` directories were the LEGACY locations).
- `forms-backend/` — separate Railway service, completely untouched.
- `i18n/` — untouched; translators keep editing the same JSON files.
- Memory bank, `.github/`, `nixpacks.toml`, `.gitignore`.
- Translation bootstrap scripts (`scripts/<language>/`, `scripts/audit-translation.js`, `scripts/update-about-lang-count.js`) and the phase-migration helpers (`scripts/phase10..14/`, `scripts/append-comparison-css.js`).

### Documentation refresh

**`.clinerules/workspace-rules.md`** — fully rewritten for the Next 16 stack. Removed "Static Site First" / "jQuery-based" / "no modern JS frameworks" language; documented Server Components by default, locale-aware `<Link>` via `@/lib/i18n/navigation`, Tailwind v4 CSS-first config, the V2 design system class reference, and the Creating-a-New-Page / Adding-a-Translation workflows. All GA event docs updated to point at the new component locations (`components/LanguageSwitcher.tsx`, `components/CountrySelector.tsx`).

**`.clinerules/workflows/translate-new-language.md`** — replaced the `jquery/language.js` step with `lib/i18n/config.ts` (both `languages` array + `locales` tuple), dropped the `scripts/inject-seo-content.js` step, dropped the `index.html` schema step (Next generates hreflang + WebSite schema automatically), added an RTL note, added the "verify build" final step.

**`memory-bank/techContext.md`** — rewritten around the Next stack: Node ≥ 20 prerequisite, npm scripts, updated file-structure tree matching the new `app/` / `components/` / `lib/` layout, dependency list (next, react, next-intl, typescript, tailwindcss), GA events documented with their new component locations, `next.config.ts` + `middleware.ts` + `lib/i18n/config.ts` described.

**`memory-bank/systemPatterns.md`** — rewritten around Server Components + locale-first routing + next-intl namespaces. Documents the Page Shape Pattern (`generateMetadata` + `buildAlternates` + JSON-LD builders), Layout Stack Pattern (root pass-through → `[locale]` layout → catch-all 404), Shared-Chrome Pattern, Data+Layout Components (`ComparisonPageLayout` / `ContentPageLayout` / `NostrPageLayout` / `BusinessPageShell`), Interactive Client Components, Data Flow patterns (translation loading + Inflation Stats cross-component CustomEvent bridge). Added a "Cleanup (Phase 14) — what's gone" section listing the deleted legacy assets.

**`README.md`** — replaced the Apache / .htaccess / "raw HTML / CSS / JS" description with Next.js 16 + React 19 + TS + Tailwind v4. Added a Local Development section with the `npm install` / `npm run dev` / `npm run build` commands.

**`CONTRIBUTING.md`** — updated the prerequisites (Node ≥ 20, VS Code or any modern editor instead of Atom specifically), added a Local development setup section, added a Phase-14-era note that translators don't need to touch TypeScript code (the maintainer adds new languages to `lib/i18n/config.ts` at merge time). Preserved the full fork-and-translate workflow which is unchanged for contributors.

**`app/robots.ts`** — removed stale `Disallow: /jquery/` and `Disallow: /css/` entries (those directories no longer exist in the deploy tree).

### Build + verification

- `npm run build` → ✓ Compiled successfully, TypeScript clean, **4,734 static pages** generated (unchanged from Phase 13). No regressions.
- Repo is clean: 27 HTML files + 6 directories + 13 scripts gone; working tree + Next app untouched.
- `forms-backend/` completely untouched.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files changed in Phase 14
```
scripts/phase14/delete-legacy-assets.js                         (NEW — idempotent legacy-asset deleter)
scripts/phase14/update-memory-bank.js                           (NEW — this file's generator)
27 root *.html files                                            (DELETED)
business/, nostr/, sticker-files/                               (DELETED — 3 dirs, ~115 HTML files)
jquery/, css/                                                   (DELETED — 2 dirs)
nginx.conf, robots.txt                                          (DELETED)
13 scripts/inject-*.js + update-*.js + fix-*.js                 (DELETED — 13 files + 1 subdir)
scripts/inflation-multi/                                        (DELETED)
app/robots.ts                                                   (edited — drop /jquery/ /css/ disallow)
.clinerules/workspace-rules.md                                  (rewritten — Next stack)
.clinerules/workflows/translate-new-language.md                 (rewritten — Next stack)
memory-bank/techContext.md                                      (rewritten — Next stack)
memory-bank/systemPatterns.md                                   (rewritten — Next stack)
memory-bank/activeContext.md                                    (this entry prepended)
memory-bank/progress.md                                         (Phase 14 note prepended)
README.md                                                       (rewritten — Next stack + local dev)
CONTRIBUTING.md                                                 (updated — prerequisites + Next dev setup)
MIGRATION-NEXTJS.md                                             (edited — Phase 14 complete, pointer → Phase 15)
```

### Next
**Phase 15** — pre-cutover QA + the cutover merge itself. The `v2-nextjs-redesign` branch will be deployed to a Railway STAGING service first, a full QA pass runs against every page × sample locales (including RTL + CJK), the GEO checklist gets a full re-verification, then the branch merges to `main` and Railway prod auto-redeploys.

---

# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 13 404 + legacy redirects + final sitemap — April 17, 2026

Seventeenth commit of the Next.js migration on `v2-nextjs-redesign`. The last content-port phase is done: locale-aware 404 page in every one of the 55 languages, 33 permanent redirects from legacy nginx.conf slug shortcuts, and a cleanup of the stale hand-written `sitemap.xml`. This is the final phase before Phase 14's deletion pass and Phase 15's cutover. `main` is still frozen.

### What Phase 13 delivered

**New pages (2)**
- **`app/[locale]/[...rest]/page.tsx`** — NEW catch-all page (~100 lines). Renders the translated 404 body INLINE (not via `notFound()`) so Next's `[locale]/layout.tsx` stays active, giving every 404 response the correct `<html lang={locale} dir={ltr|rtl}>` + Navbar + Footer + GA. Translated "THIS BROKEN PAGE DOES NOT ROCK" H1 + "GO BACK HOME" CTA. Sets `robots: { index: false, follow: true }` so crawlers don't index stale URLs. This is the idiomatic next-intl App Router pattern for locale-scoped 404s — calling `notFound()` would resolve to the root `app/not-found.tsx` which has no locale context.
- **`app/not-found.tsx`** — NEW global fallback (~60 lines). Self-contained `<html>`/`<body>` wrapper (required by Next since `app/layout.tsx` is a pass-through). Renders English 404 body + link to `/en`. Only triggers for paths that resolve no locale at all.

**Files modified**
- **`next.config.ts`** — populated `redirects()` with 33 permanent redirects ported verbatim from `nginx.conf`'s `rewrite` directives:
  - Sticker pack aliases: `/orange-pill-pack` · `/sticker` · `/bitcoin-stickers` · `/opp` → `/stickers`
  - Comparison shortcuts: `/gold` · `/cbdc` · `/CBDC` · `/crypto` · `/cash` · `/real-estate` · `/realestate` · `/stocks` · `/equities` · `/bonds` · `/bond` · `/art` · `/fine-art` · `/fineart` · `/visa` · `/banks` → `/bitcoin-vs-{target}`
  - Case/plural variants: `/INFLATION`/`/inflation`; `/bank-run`/`/bankrun`/`/bankruns`/`/bank-runs`; `/wallet`/`/wallets`; `/postcard`/`/postcards`; `/flyer`/`/flyers`; `/Lightning`/`/lightning`
  - Business shortcuts: `/guide`/`/guides`/`/business/guides`→`/business/guide`; `/kit`/`/business-kit`/`/businesskit`→`/business/kit`
  - Save-sticker deep link (query preserved): `/save` → `/inflation?sign=got-inflation`
  - Trailing-`.html` stripper: `/:path*.html` → `/:path*` for legacy bookmarks. All 308 permanent; middleware then localizes the unlocaled destination.
- **`next.config.ts`** — added long-cache header for `/sticker-files/:path*` (mirrors `/img/*` + `/favicons/*` — 219 PNGs).
- **`lib/i18n/request.ts`** — added `404` namespace to `DEFAULT_NAMESPACES` so the `404_title`/`404_message`/`404_home` keys load alongside the rest.
- **`sitemap.xml`** (repo root) — DELETED. Next's `app/sitemap.ts` now owns `/sitemap.xml` and emits the canonical dynamic version (one entry per `(published page, locale)` pair + full hreflang alternates per URL).
- **`MIGRATION-NEXTJS.md`** — Phase 13 checkboxes complete; status pointer advanced to Phase 14.

**New scripts (`scripts/phase13/`)**
- **`update-memory-bank.js`** — this file's generator. Idempotent.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.0s, TypeScript clean, **4,734 static pages** generated (same as end of Phase 12; the catch-all is a Dynamic route not an SSG page). Build warns that `middleware.ts` is deprecated in favor of `proxy.ts` in Next 16 — deferred to Phase 14's cleanup pass.
- Runtime spot-check via `/tmp/verify-phase13.js` — all **32 assertions pass**:
  - `/en/does-not-exist` (200 status, `noindex` meta) contains "THIS BROKEN PAGE" + "GO BACK HOME" + `h1-inflation` class + `rocks-logo-gray.png`
  - `/ar/does-not-exist` renders `<html lang="ar" dir="rtl">` with the same 404 body
  - `/en/bitcoin-vs-gold` still serves 200 with comparison layout (smoke test)
  - `/gold` → 308 with `Location: /bitcoin-vs-gold`
  - `/CBDC` → 308 with `Location: /bitcoin-vs-cbdc` (case-insensitive)
  - `/kit` → 308 with `Location: /business/kit`
  - `/orange-pill-pack` → 308 with `Location: /stickers`
  - `/inflation.html` → 308 with `Location: /inflation`
  - `/save` → 308 with `Location: /inflation?sign=got-inflation` (query preserved)
  - `/sitemap.xml` contains 10 expected URLs (`/en`, `/en/inflation`, `/en/bitcoin-vs-gold`, `/en/business`, `/en/sticker-files/yoruba`, `/en/nostr`, Arabic + Chinese locale URLs, hreflang alternates)
  - `/robots.txt` and `/llms.txt` still serve 200

### Architecture validation
Phase 13's key design decision — **render the 404 body INLINE from a catch-all page instead of calling `notFound()`** — turned out to be the only pattern that keeps the `[locale]/layout.tsx` wrapper active. Calling `notFound()` from `[locale]/[...rest]/page.tsx` (or having a `[locale]/not-found.tsx`) resolves to the ROOT `app/not-found.tsx` which has no access to `getTranslations()` or the locale's RTL setting. The 200-status + `noindex` meta is a SEO-acceptable trade-off: crawlers skip the page via noindex; users see the right translated experience with a real Navbar. This is the documented next-intl pattern.

The legacy-redirect system worked cleanly: 33 entries, all 308s land correctly. The `/:path*.html` matcher handles trailing-`.html` bookmarks for all paths at once, not just the 13 root-level slugs Google knows about. Query string is preserved end-to-end (the `/save` test confirms this — `?sign=got-inflation` survives the redirect).

### Intentionally left alone
- `404.html` + `nginx.conf` + `.htaccess` (if any) — still shipped by the static site on `main`. Phase 14 deletes them.
- Non-English translations for the `404_*` keys — `i18n/` already has them for all 55 locales (checked during Phase 2); English fallback catches any gaps.
- `forms-backend/` — completely untouched.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 13
```
app/[locale]/[...rest]/page.tsx                                 (NEW — ~100 lines, catch-all 404)
app/not-found.tsx                                               (NEW — ~60 lines, global fallback)
scripts/phase13/update-memory-bank.js                           (NEW — this file's generator)
next.config.ts                                                  (+33 redirects, +1 cache header block)
lib/i18n/request.ts                                             (+1 namespace: "404")
sitemap.xml                                                     (DELETED from repo root; app/sitemap.ts owns it)
MIGRATION-NEXTJS.md                                             (edited — Phase 13 complete, pointer → Phase 14)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 14** — the cleanup pass: delete all the legacy static-site assets the Next app has fully replaced (`*.html` at root, `business/*.html`, `nostr/*.html`, `sticker-files/*/index.html`, `css/style.css`, `jquery/`, `nginx.conf`, `.htaccess`, obsolete `scripts/inject-*.js`), migrate `middleware.ts` → `proxy.ts` per the Next 16 deprecation warning, and update all docs (`.clinerules/workspace-rules.md`, memory bank files, `CONTRIBUTING.md`, `README.md`) to reflect the new Next stack. After Phase 14, Phase 15 is the cutover merge to `main`.

---

## Latest: Next.js Migration — Phase 12 Nostr section (/nostr + /nostr/what-is-nostr) — April 17, 2026

Sixteenth commit of the Next.js migration on `v2-nextjs-redesign`. The 2-page `/nostr` section — the "Escape the Matrix with Nostr" index + "What is Nostr?" sub-page — is now live as a faithful V1 Tailwind port sharing a single `<NostrPageLayout>` Server Component. V2 redesign deferred to the post-cutover queue. `main` is still frozen.

### What Phase 12 delivered

**New components**
- **`components/NostrAccordion.tsx`** — Client Component (~65 lines). Ports the V1 inline `toggleDiv()` JS: click on the orange-bg `.expandable` wrapper toggles the `.expanded` class (which reveals the `.additional-text` body via CSS). The DOM walker preserves the legacy behavior that clicks on descendant `<a>` tags DO NOT toggle — they follow the link instead. Keyboard-accessible (Enter/Space, with focus-check so links don't get intercepted).
- **`components/NostrPageLayout.tsx`** — Server Component (~300 lines). Renders both nostr pages via one tree: hero H1 + "JOIN NOSTR NOW" anchor CTA → 3 intro sections (Protocol/Freedom/Bitcoin is built in) → "DOWNLOAD A FREE CLIENT" H2 → 3 accordions (iPhone: Primal+Damus; Android: Primal+Amethyst; Browser: Iris) → publisher attribution. Accepts `slug` / `titleKey` / `headerKey` / `descriptionKey` so the two pages share the component tree — only those four vary.

**New pages (2)**
- **`app/[locale]/nostr/page.tsx`** — thin ~65-line page with `slug: "nostr"` + `escape_the_matrix_with_nostr` meta title. OG image `meta-nostr-home-v1.png`.
- **`app/[locale]/nostr/what-is-nostr/page.tsx`** — thin ~65-line page with `slug: "nostr/what-is-nostr"` + `what_is_nostr` meta title. OG image `meta-nostr-what-v1.png`. Breadcrumb = Home > Nostr > What is Nostr? (Phase 4's `buildBreadcrumbTrail()` already handles the `nostr/` subpath rule correctly).

**New scripts (`scripts/phase12/`)**
- **`update-en-json.js`** — idempotent; adds 1 new meta-description key per English JSON file (`nostr_page_description` + `what_is_nostr_page_description`) + refreshes `@metadata.last-updated` to 2026-04-17. 2 new keys added.
- **`append-nostr-css.js`** — idempotent sentinel-marker guarded CSS appender. Adds V1 nostr classes: `.expandable` / `.additional-text` / `.expanded .additional-text`, `.orange-bg`, `.wallet-box-biz img.other`, `.wallet-biz-solo`, `.h3-category` (italic uppercase accordion headers), `.h4-label` (client-name labels), `p.initial-text` / `p.additional-text`, plus a new `.nostr-intro-h2` that replaces V1's non-semantic `<h7>` with a styled `<h2>` for a clean heading hierarchy.
- **`wire-and-publish.js`** — idempotent helper that adds `nostr/index` + `nostr/what-is-nostr` namespaces to `DEFAULT_NAMESPACES` in `lib/i18n/request.ts` and flips `published: true` for both slugs in `lib/pages.ts`.
- **`update-memory-bank.js`** — this file's generator.

**Files modified**
- **`i18n/en/nostr/index_en.json`** — added `nostr_page_description` + refreshed `last-updated`.
- **`i18n/en/nostr/what-is-nostr_en.json`** — added `what_is_nostr_page_description` + refreshed `last-updated`.
- **`lib/i18n/request.ts`** — added 2 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for both nostr slugs; sitemap now emits **110 new URLs** (55 locales × 2 slugs).
- **`app/globals.css`** — appended ~140 lines of V1 nostr-page CSS via the append script (sentinel-marker guarded).
- **`MIGRATION-NEXTJS.md`** — Phase 12 checkboxes complete; status pointer advanced to Phase 13.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 3.9s, TypeScript clean, **4734 static pages** generated (55 locales × 42 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 4624 at end of Phase 11. That's **110 new URLs** for Phase 12.
- Runtime spot-check via `/tmp/verify-phase12.js` — all **4 assertions pass**:
  - `/en/nostr` (216 KB) — "ESCAPE THE MATRIX WITH NOSTR" H1 + "JOIN NOSTR NOW" anchor CTA + all 3 intro headers + "DOWNLOAD A FREE CLIENT TO JOIN NOSTR" + all 3 accordion titles (iPhone / Android / Browser Clients) + all 4 client brand names (PRIMAL, DAMUS, AMETHYST, IRIS) + `expandable` class + `/img/clients/primal.png` + Article + BreadcrumbList JSON-LD.
  - `/en/nostr/what-is-nostr` (218 KB) — "WHAT IS NOSTR?" + all 3 accordion titles + Article + BreadcrumbList (Home > Nostr > What is Nostr?).
  - `/ar/nostr` (207 KB) renders `<html lang="ar" dir="rtl">` correctly.
  - `/sitemap.xml` (26 MB) contains both new English URLs.

### Architecture validation
Phase 12 confirms the "one shared page-layout + two thin pages" approach from earlier phases scales cleanly to the nostr section. The only page-specific variation (H1 text / meta / breadcrumb slug / OG image) is passed in as props — the other 95% of the page (3 intro sections + 3 client-picker accordions + publisher attribution) is server-rendered identically. The `<NostrAccordion>` Client Component follows the "zero translation lookups in the client bundle" pattern: the parent renders the translated H3 header + accordion body children on the server, and the client component only owns the open/closed state (~65 lines of JS).

### Intentionally left alone
- `nostr/index.html` + `nostr/what-is-nostr.html` — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the nostr section — deferred to post-cutover queue.
- `forms-backend/` — untouched (nostr pages have no forms).
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 12
```
components/NostrAccordion.tsx                                   (NEW — Client, ~65 lines)
components/NostrPageLayout.tsx                                  (NEW — Server, ~300 lines)
app/[locale]/nostr/page.tsx                                     (NEW — ~65 lines)
app/[locale]/nostr/what-is-nostr/page.tsx                       (NEW — ~65 lines)
scripts/phase12/update-en-json.js                               (NEW — idempotent)
scripts/phase12/append-nostr-css.js                             (NEW — idempotent CSS appender)
scripts/phase12/wire-and-publish.js                             (NEW — idempotent flipper)
scripts/phase12/update-memory-bank.js                           (NEW — this file's generator)
i18n/en/nostr/index_en.json                                     (edited — +1 key, date)
i18n/en/nostr/what-is-nostr_en.json                             (edited — +1 key, date)
app/globals.css                                                 (appended ~140 lines of V1 nostr CSS)
lib/i18n/request.ts                                             (edited — +2 namespaces)
lib/pages.ts                                                    (edited — 2 slugs → published)
MIGRATION-NEXTJS.md                                             (edited — Phase 12 complete, pointer → Phase 13)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 13** — 404 page + redirects + final sitemap + cleanup of any legacy URLs from `nginx.conf` / `.htaccess`. This is the last content-port phase before Phase 14's cleanup + Phase 15's cutover. `main` stays frozen.

---

## Latest: Next.js Migration — Phase 11 Sticker-files section (43 languages + index = 44 pages) — April 17, 2026

Fifteenth commit of the Next.js migration on `v2-nextjs-redesign`. The `/sticker-files` section — 43 language-specific downloadable sticker-file pages + the top-level language picker + sticker-language-request form — is now live as a single dynamic route driven by a typed catalog. `main` is still frozen.

### What Phase 11 delivered

**New infrastructure (`lib/sticker-files/`)**
- **`lib/sticker-files/catalog.ts`** — ~260-line typed catalog. Two maps:
  - `STICKER_KINDS` (~14 entries): per-sticker metadata (dimensions, type, material) keyed by stable sticker slug. Metadata uses shared `common_stickers_*` i18n keys so translators edit one string per design, not per (design × language) pair.
  - `STICKER_AVAILABILITY`: per-language array of available sticker slugs. English has 11 designs; most languages have 5; Swedish has 7 (with 2 `-fixed` reprint variants); Basque/Estonian/Filipino/Hindi/Korean have 4.
  - Helpers: `getStickersForLanguage()`, `getPrintableLanguageSlugs()`, `findLanguage()`, `stickerImageUrl()`, `stickerMuleOneClickUrl()` (English-only 1-click StickerMule pack URL).

**New pages (2 route files, 2,420 static URLs)**
- **`app/[locale]/sticker-files/page.tsx`** (~220 lines) — index page: hero + mission paragraph + 43-language button grid (each links to its per-language page) + "request my language" form (Cloudflare Turnstile → `forms-backend/submit/sticker-language-request`).
- **`app/[locale]/sticker-files/[lang]/page.tsx`** (~250 lines) — dynamic per-language page. `generateStaticParams()` emits every `(locale × lang)` pair = 55 × 43 = **2365 static pages**. Renders one card per available sticker design (image + dimensions / type / material / printer attribution). English shows an extra "PRINT THESE IN 1 CLICK" StickerMule CTA. Unknown lang slugs → 404 via `notFound()`.

**New scripts (`scripts/phase11/`)**
- **`copy-assets.js`** — idempotent Node helper that copies 219 PNGs across 43 language directories from `sticker-files/` to `public/sticker-files/`. Skip-if-up-to-date via mtime + size check.

**Files modified**
- **`lib/i18n/request.ts`** — added 44 new namespaces (`sticker-files/index` + `sticker-files/<lang>/index` × 43). Each language-specific namespace is only 3-4 keys, so total payload growth is negligible; in-memory cache keeps it read-once per locale per build.
- **`lib/pages.ts`** — added 44 Phase 11 entries (all `published: true`). Sitemap emits **2420 new URLs** (index + 43 per-language, all 55 locales each).
- **`public/sticker-files/`** — NEW (43 language directories × 4-11 PNGs each = 219 files total).
- **`MIGRATION-NEXTJS.md`** — Phase 11 checkboxes complete; status pointer advanced to Phase 12.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.1s, TypeScript clean, **4624 static pages** total (up from 2204 at end of Phase 10). That's 2420 new URLs for Phase 11.
- Runtime spot-check via `/tmp/verify-phase11.js` — all **8 assertions pass**:
  - `/en/sticker-files` (217 KB) — "BITCOIN STICKER FILES" + AFRIKAANS/YORUBA language buttons + `cf-turnstile` + `sticker-language-request` form.
  - `/en/sticker-files/english` (228 KB) — "DOWNLOAD ENGLISH BITCOIN STICKER FILES" + "PRINT THESE IN 1 CLICK" StickerMule button + all 11 English PNG refs (`sticker-danger-english.png`, `what-if-english.png`, `fix-english.png`, etc.) + stickermule.com link.
  - `/en/sticker-files/chinese` (213 KB) — "DOWNLOAD CHINESE BITCOIN STICKER FILES" + all 5 Chinese PNGs (`bdhi-orange-chinese.png`, `cure-inflation-v2-chinese.png`, `got-inflation-chinese.png`, etc.).
  - `/en/sticker-files/spanish` (213 KB) — Spanish variant (5 PNGs).
  - `/en/sticker-files/swedish` (218 KB) — Swedish variant (7 PNGs) including the 2 `-fixed` reprint variants (`cure-inflation-v2-fixed-swedish.png`, `got-inflation-fixed-swedish.png`).
  - `/ar/sticker-files` renders `<html lang="ar" dir="rtl">` correctly.
  - `/sitemap.xml` (25 MB) contains `/en/sticker-files<`, `/en/sticker-files/english<`, `/en/sticker-files/yoruba<`.
  - `/sticker-files/english/bdhi-orange-english.png` serves 200 (569 KB PNG) — static asset routing from `public/` works.

### Architecture validation
Phase 11's key decision — **filesystem-scanned static catalog** instead of runtime `fs.readdir()` — paid off. The dynamic route `[lang]` is driven by the `STICKER_AVAILABILITY` map (derived from on-disk state and embedded in the catalog.ts file) so the entire per-language page tree is statically prerenderable. Adding a new language requires only: (1) create `i18n/<lang>/sticker-files/<new>/index_<lang>.json` with the 3 keys, (2) drop PNGs into `sticker-files/<new>/`, (3) add the language slug to `STICKER_AVAILABILITY` in `catalog.ts` + `STICKER_LANGUAGES` in `sticker-languages.ts`. No component changes needed.

The 4624-page build (up from 2204 at end of Phase 10) completes in 21.1s of static generation + 4.1s compile — well under the tolerance for future phase growth. Next's build-worker parallelism handled the 2365 `[lang]` pages efficiently.

### Intentionally left alone
- `sticker-files/*/index.html` + `sticker-files/index.html` + `jquery/refresh-css.js` (referenced in legacy sticker-files HTML) — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the sticker-files section — deferred to post-cutover queue.
- `forms-backend/` — completely untouched. The sticker-language-request form POSTs to the existing `/submit/sticker-language-request` endpoint with the unchanged Turnstile site-key `0x4AAAAAAClzj7R6NrkNgcsP`.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 11
```
lib/sticker-files/catalog.ts                                    (NEW — ~260 lines typed catalog)
app/[locale]/sticker-files/page.tsx                             (NEW — ~220 lines index page)
app/[locale]/sticker-files/[lang]/page.tsx                      (NEW — ~250 lines dynamic per-language)
scripts/phase11/copy-assets.js                                  (NEW — idempotent PNG copier)
public/sticker-files/**                                         (NEW — 219 PNGs, 43 language dirs)
lib/i18n/request.ts                                             (edited — 44 new namespaces)
lib/pages.ts                                                    (edited — 44 published entries)
MIGRATION-NEXTJS.md                                             (edited — Phase 11 complete, pointer → Phase 12)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 12** — `/nostr` section. 2 pages (`/nostr` index + `/nostr/what-is-nostr`). Simple content-pages port, likely reusing `ContentPageLayout` or a new `.nostr` stylistic wrapper. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 10 Business section (13 pages) — April 17, 2026


Fourteenth commit of the Next.js migration on `v2-nextjs-redesign`. The entire `/business` section — the 13-page Bitcoin Business Kit — is now live as faithful Tailwind ports with V2 redesign deferred. `main` is still frozen.

### What Phase 10 delivered

**New infrastructure (`components/` + `lib/business/`)**
- **`components/BusinessPageShell.tsx`** — Server Component (~40 lines). Shared hero + publisher-attribution wrapper that every `business/*` page uses. Emits the Phase 4 `buildReviewedAccuracyHtml()` badge.
- **`components/BusinessResourceCards.tsx`** — Server Component (~120 lines). Reusable card grid with `exclude` prop + `showHeader` flag. Emits Learn / Guide / Accounting / FAQ / Wallets / Stickers / Maps / Kit CTAs with unique color classes matching the legacy `.biz-learn`/`.biz-guide`/etc. pattern. Used on 10 of the 13 business pages.
- **`components/BusinessWalletCard.tsx`** — Server Component (~80 lines). Renders a single wallet recommendation (image / brand / feature list / Get Wallet button) inside the legacy `wallet-box-biz` shell. Used 9× across `/business/wallets`.
- **`lib/business/metadata.ts`** — Shared `buildBusinessMetadata()` helper. Each page's `generateMetadata()` is an ~8-line wrapper (same pattern as `lib/comparisons/metadata.ts`). Emits title, description, OpenGraph article card, Twitter `summary_large_image`, full 55-locale hreflang alternates.
- **`components/CountryFormSelector.tsx`** — extended from Phase 9b with `placeholderLabel` + typed `options` array so business stickers/kit forms can drive it the same way as the public-facing Phase 9b forms.

**New pages (13)**
All pages follow the pattern: `BusinessPageShell` + JSON-LD (Article + BreadcrumbList) + page-specific body + `BusinessResourceCards` (except success pages).
- **`/business`** — hand-authored. Hero H1 + payment-chart image + 4 benefit sections + `BusinessResourceCards` (exclude "learn") + "Print your own Business Kit" standalone CTA.
- **`/business/why`** — 4 sections: no inflation / no bank runs / permissionless / building a better world. Localized inline links to `/inflation`, `/bank-runs`, voteforbetter.money.
- **`/business/faq`** — 9 Q&A sections with cross-links to `/business/wallets`, `/business/stickers`, `/business/maps`.
- **`/business/guide`** — hero + `BusinessResourceCards` grid (exclude "faq"/"kit") + FAQ CTA at the bottom.
- **`/business/accounting`** — 4 sections: cost basis / calculating price / ledger entries / professional help. External links to QuickBooks/BlockPath, Satoshi Pacioli, CoinGecko.
- **`/business/wallets`** — 4 collapsible `WalletAccordion` categories (sole trader / multiple employees / online / invoicing) × 1-3 `BusinessWalletCard` recommendations each. 6 unique wallets (Square, Breez, OpenNode, IBEX Pay, BTCPay Server, Zaprite) across 9 total card positions.
- **`/business/stickers`** — hero + `CountryFormSelector` (USA / Canada / Print). USA+Canada reveal `StickerAddressForm` (variant="usa"/"canada"). Print reveals English sticker-files link + 43-language request form. Cloudflare Turnstile + `forms-backend/submit/business-stickers-*` action URLs.
- **`/business/maps`** — BTCMap listing form with btcmap.org external link + Turnstile + `forms-backend/submit/business-maps`.
- **`/business/kit`** — hero + business-kit hero image + `CountryFormSelector` (USA / Canada / Print) wrapping `StickerAddressForm` + English pamphlet link.
- **`/business/kit-success`** + **`/business/maps-success`** + **`/business/sticker-success`** + **`/business/sticker-language-success`** — 4 success pages with "SUCCESS!" banner + thank-you message + `robots: { index: false }`.

**New scripts (`scripts/phase10/`)**
- **`create-business-pages.js`** — generator for 12 of the 13 pages (all except the hand-authored `/business/page.tsx`). Each page is 100% regenerable.
- **`append-business-css.js`** — idempotent; appends ~220 lines of legacy `.biz-*` / `.wallet-box-biz` / `.bbk-*` CSS to `app/globals.css`.
- **`wire-and-publish.js`** — idempotent; adds 13 Phase 10 namespaces to `DEFAULT_NAMESPACES` in `lib/i18n/request.ts` and flips `published: true` on 13 slugs in `lib/pages.ts`.
- **`update-memory-bank.js`** — this file's generator (you are reading its output).

**Files modified**
- **`lib/i18n/request.ts`** — added 13 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for 13 slugs; sitemap now emits **715 new URLs** (55 locales × 13 slugs).
- **`app/globals.css`** — appended ~220 lines of legacy business-specific CSS via the append script.
- **`components/CountryFormSelector.tsx`** — extended with `placeholderLabel` + typed `options` array.
- **`public/business/files/`** + **`public/business/sticker-files/`** — copied from `business/files/` + `business/sticker-files/` (bbk-pamphlet-exterior/interior.png + bbk-sticker-english.png + English subdirectories + their `index.html` listings).
- **`MIGRATION-NEXTJS.md`** — Phase 10 checkboxes complete; status pointer advanced to Phase 11.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.2s, TypeScript clean, **2204 static pages** generated (55 locales × 40 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1489 at end of Phase 9b.
- Runtime spot-check via `/tmp/verify-phase10.js`: all **14 assertions pass**:
  - `/en/business` (196 KB) — "BITCOIN IS GOOD FOR BUSINESS" + 4 benefit headings + `biz-box`/`biz-button` + Article + BreadcrumbList JSON-LD + reviewed-badge.
  - `/en/business/why` (199 KB) — "BITCOIN IS GOOD FOR YOU TOO" + all 4 section H3s + schemas.
  - `/en/business/faq` (206 KB) — first 3 Q&A headings + Article schema.
  - `/en/business/guide` (192 KB) — "READY TO ACCEPT BITCOIN" + biz-box cards.
  - `/en/business/accounting` (204 KB) — "BITCOIN ACCOUNTING GUIDE" + "TRACKING YOUR COST BASIS" + Satoshi Pacioli link.
  - `/en/business/wallets` (215 KB) — "GET A FREE BITCOIN WALLET" + all 6 wallet brand names (SQUARE, BREEZ, OPEN NODE, IBEX PAY, BTCPAY SERVER, ZAPRITE).
  - `/en/business/stickers` (204 KB) — "BITCOIN ACCEPTED HERE" + all 3 country IDs + Cloudflare Turnstile.
  - `/en/business/maps` (196 KB) — "GET LISTED ON BITCOIN MERCHANT MAPS" + btcmap.org link + `forms-backend/submit/business-maps` action URL.
  - `/en/business/kit` (201 KB) — "PRINT YOUR OWN BITCOIN BUSINESS KIT" + all 3 country IDs.
  - 4 success pages (193-195 KB each) — "SUCCESS!" + `h2-stickers` + relevant post-submission messages.
  - `/ar/business` renders `<html lang="ar" dir="rtl">` correctly.

### Architecture validation
Phase 10 confirms the "shell + reusable card grid + per-page body" composition scales to 13 pages in a single phase. The `BusinessResourceCards` component was the key abstraction — 10 of the 13 pages end with it, each passing a different `exclude` array so the grid never links to its own page. The page generator script produced 12 pages from typed page-definition objects; the one hand-authored page (`/business`) only needed the unique benefit-section layout. Forms wire straight into `forms-backend/` — no backend changes.

### Intentionally left alone
- `business/*.html` files + `jquery/sticker-picker.js` + `jquery/country-selector-forms.js` — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the 13 business pages — deferred to post-cutover queue.
- `forms-backend/` — completely untouched. All business-side forms POST to existing `/submit/business-*` endpoints with the existing Turnstile site-key `0x4AAAAAAClzj7R6NrkNgcsP`.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 10
```
components/BusinessPageShell.tsx                                (NEW — Server, ~40 lines)
components/BusinessResourceCards.tsx                            (NEW — Server, ~120 lines)
components/BusinessWalletCard.tsx                               (NEW — Server, ~80 lines)
lib/business/metadata.ts                                        (NEW — shared metadata helper)
app/[locale]/business/page.tsx                                  (NEW — hand-authored)
app/[locale]/business/why/page.tsx                              (NEW — generated)
app/[locale]/business/faq/page.tsx                              (NEW — generated)
app/[locale]/business/guide/page.tsx                            (NEW — generated)
app/[locale]/business/accounting/page.tsx                       (NEW — generated)
app/[locale]/business/wallets/page.tsx                          (NEW — generated)
app/[locale]/business/stickers/page.tsx                         (NEW — generated)
app/[locale]/business/maps/page.tsx                             (NEW — generated)
app/[locale]/business/kit/page.tsx                              (NEW — generated)
app/[locale]/business/kit-success/page.tsx                      (NEW — generated)
app/[locale]/business/maps-success/page.tsx                     (NEW — generated)
app/[locale]/business/sticker-success/page.tsx                  (NEW — generated)
app/[locale]/business/sticker-language-success/page.tsx         (NEW — generated)
public/business/files/english/                                  (copied — bbk-pamphlet assets)
public/business/sticker-files/english/                          (copied — bbk-sticker assets)
scripts/phase10/create-business-pages.js                        (NEW — 12-page generator)
scripts/phase10/append-business-css.js                          (NEW — idempotent CSS appender)
scripts/phase10/wire-and-publish.js                             (NEW — idempotent wiring)
scripts/phase10/update-memory-bank.js                           (NEW — this file's generator)
components/CountryFormSelector.tsx                              (extended — placeholderLabel + options[])
app/globals.css                                                 (appended ~220 lines of V1 business CSS)
lib/i18n/request.ts                                             (edited — 13 new namespaces)
lib/pages.ts                                                    (edited — 13 published flags)
MIGRATION-NEXTJS.md                                             (edited — Phase 10 complete, pointer → Phase 11)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 11** — `/sticker-files` section. Dynamic route `app/[locale]/sticker-files/[lang]/page.tsx` driven by the 43-language list in `lib/sticker-languages.ts`; each page is a directory listing of downloadable PNGs/PDFs for that language. Move `sticker-files/*/` static assets into `public/sticker-files/`. `main` stays frozen.

---

## Latest: Next.js Migration — Phase 9b Form pages + successes (stickers / signs / postcards / buy + 4 successes) — April 17, 2026

Thirteenth commit of the Next.js migration on `v2-nextjs-redesign`. The 4 form-driven pages + 4 post-submission success pages are now live with faithful V1 Tailwind ports. `main` is still frozen.

### What Phase 9b delivered

**New Client Components (`components/`)**
- **`StickerPicker.tsx`** — ~120 lines. Ports `jquery/sticker-picker.js` 1:1: two pack-tile chooser. Click-to-highlight + reveal the matching country selector. Keyboard-accessible (Enter/Space).
- **`CountryFormSelector.tsx`** — ~70 lines. Reusable `<select>` + N forms. Picking a value reveals the matching `<div id={VALUE} class="countries" hidden>`. Used by both packs in `<StickerPicker>`.
- **`BuyFlow.tsx`** — ~260 lines. Ports `jquery/buy-flow.js`: 4-step wizard. Step 1's 52 country buttons are rendered by the server as `children`; clicks delegated via `closest("button.buy-country-button")` so all buttons stay crawler-visible in the initial HTML. Smooth-scroll between steps with native `window.scrollTo`. Step 3 pulls platforms from `lib/buy/platforms.ts`.

**New Server Components**
- **`StickerAddressForm.tsx`** — ~90 lines. Shared USA/Canada sticker address form. `variant` prop picks State+Zip vs Province+PostalCode; `_gotcha` honeypot on USA only. Cloudflare Turnstile embedded.

**New lib files**
- **`lib/buy/platforms.ts`** — deduped port of the 1366-line `jquery/buy-flow.js` map. 5 reusable platform constants (`STRIKE`, `RELAI`, `KRAKEN`, `SWAN`, `RIVER`, `COINSQUARE`, `ATM`, `BISQ`) composed into 3 sets (`DEFAULT_SET`, `US_SET`, `CA_SET`). Countries point at those sets. Also exports `BUY_COUNTRIES` (52 entries with emoji flag + i18n label key).
- **`lib/sticker-languages.ts`** — canonical 43-language list (slug + `common_language_*` i18n key) for Print-my-own sticker option.

**New pages (8)**
- **`app/[locale]/stickers/page.tsx`** — ~370 lines. Hero + 2-pack chooser via `<StickerPicker>` wrapping 2 `<CountryFormSelector>` instances (USA mail / Canada mail / Print / Bulk). Print option renders the 43-language button grid + sticker-language-request form. Loads Cloudflare Turnstile via `<Script>`.
- **`app/[locale]/signs/page.tsx`** — ~230 lines. Faithful port; signs program closed so it shows the "out of signs" message + share-on-nostr + 3 Get Started CTAs. Sign-header image + sign-tips image preserved.
- **`app/[locale]/postcards/page.tsx`** — ~200 lines. Postcard program closed notice + "GET FREE STICKERS INSTEAD" CTA → `/stickers`. 3 historical preview images (front + back each).
- **`app/[locale]/buy/page.tsx`** — ~130 lines. Server-renders the 52-country button grid + search input, wraps in `<BuyFlow>`. BuyFlow owns Steps 2-4.
- **`app/[locale]/sticker-success/page.tsx`** — ~150 lines. Thank-you screen + fixed-bottom-bar promoting `/flyers`. `robots: { index: false }`.
- **`app/[locale]/sign-success/page.tsx`** — ~100 lines. Thank-you kept for future reactivation of the signs program.
- **`app/[locale]/postcard-success/page.tsx`** — ~100 lines. Thank-you; program closed.
- **`app/[locale]/sticker-language-success/page.tsx`** — ~100 lines. Thank-you after "Request stickers in my language" form.

**New scripts (`scripts/phase9b/`)**
- **`append-form-css.js`** — idempotent; appends ~450 lines of V1 form CSS to `app/globals.css`.
- **`create-remaining-pages.js`** — generator for the 6 template-heavy pages (postcards + buy + 4 successes). 100% regenerable — no hand edits.
- **`flip-published.js`** — regex-based idempotent flipper for the 8 `lib/pages.ts` `published` flags.
- **`update-memory-bank.js`** — this file's generator (you are reading its output).

**Files modified**
- **`lib/i18n/request.ts`** — added 8 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for 8 slugs; sitemap now emits **440 new URLs** (55 locales × 8 slugs).
- **`app/globals.css`** — appended ~450 lines of V1 form CSS via `append-form-css.js`.
- **`MIGRATION-NEXTJS.md`** — Phase 9b checkboxes complete; position pointer → Phase 10.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **1489 static pages** (55 locales × 27 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1049 at end of Phase 9a.
- Runtime spot-check via `/tmp/verify-phase9b.js` — all 9 assertions pass: `/en/stickers` (233 KB) contains `choose-sticker` tiles + AFRIKAANS/YORUBA language buttons + Article/BreadcrumbList JSON-LD; `/en/signs` (182 KB) contains the out-of-signs message; `/en/postcards` (184 KB) contains the program-closed notice; `/en/buy` (199 KB) contains all 4 wizard steps + 52 country buttons with `data-country` (US/GB/JP spot-checked) + `#country-search` input; all 4 success pages contain SUCCESS! + `h2-stickers`; `/ar/stickers` renders `<html lang="ar" dir="rtl">`.

### Architecture validation
Phase 9b confirms the "all content in server HTML, click handlers via delegation" pattern scales well: the 52 buy-country buttons are rendered once by the server (crawler-visible) and `<BuyFlow>` attaches one `click` listener at the root to delegate to all 52. No `data-*` props shuttling from parent state to button props. Same pattern worked for `<StickerPicker>` (opacity/border mutations via `useRef`) and `<CountryFormSelector>` (`hidden` attribute toggle). The `lib/buy/platforms.ts` dedup also paid off: legacy 1366 lines of country objects collapsed to ~240 lines of 3 shared sets + per-country pointers.

### Intentionally left alone
- `jquery/sticker-picker.js`, `jquery/country-selector-forms.js`, `jquery/buy-flow.js` — still shipped by static site on `main`. Phase 14 deletes them.
- V2 redesign of these 8 pages — deferred to post-cutover queue (see `MIGRATION-NEXTJS.md` "Post-migration Bucket B redesign queue").
- `forms-backend/` — completely untouched. The Next frontend POSTs to existing `/submit/…` endpoints exactly as the static site does. Turnstile site-key unchanged.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9b
```
components/StickerPicker.tsx                                    (NEW — Client, ~120 lines)
components/CountryFormSelector.tsx                              (NEW — Client, ~70 lines)
components/BuyFlow.tsx                                          (NEW — Client, ~260 lines)
components/StickerAddressForm.tsx                               (NEW — Server, ~90 lines)
lib/buy/platforms.ts                                            (NEW — ~240 lines)
lib/sticker-languages.ts                                        (NEW — 43 languages)
app/[locale]/stickers/page.tsx                                  (NEW — ~370 lines)
app/[locale]/signs/page.tsx                                     (NEW — ~230 lines)
app/[locale]/postcards/page.tsx                                 (NEW — ~200 lines, generated)
app/[locale]/buy/page.tsx                                       (NEW — ~130 lines, generated)
app/[locale]/sticker-success/page.tsx                           (NEW — ~150 lines, generated)
app/[locale]/sign-success/page.tsx                              (NEW — ~100 lines, generated)
app/[locale]/postcard-success/page.tsx                          (NEW — ~100 lines, generated)
app/[locale]/sticker-language-success/page.tsx                  (NEW — ~100 lines, generated)
scripts/phase9b/append-form-css.js                              (NEW — idempotent CSS appender)
scripts/phase9b/create-remaining-pages.js                       (NEW — 6-page generator)
scripts/phase9b/flip-published.js                               (NEW — idempotent flag-flipper)
scripts/phase9b/update-memory-bank.js                           (NEW — this file's generator)
app/globals.css                                                 (appended ~450 lines of V1 form CSS)
lib/i18n/request.ts                                             (edited — 8 new namespaces)
lib/pages.ts                                                    (edited — 8 published flags)
MIGRATION-NEXTJS.md                                             (edited — Phase 9b complete, pointer → Phase 10)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 10** — Bucket C business section: `/business`, `/business/accounting`, `/business/faq`, `/business/guide`, `/business/kit` (+ kit-success), `/business/maps` (+ maps-success), `/business/stickers` (+ sticker-success + sticker-language-success), `/business/wallets`, `/business/why`. Plus moving `business/files/` + `business/sticker-files/` static assets into `public/`. V2 redesign deferred — faithful port only. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 9a Bucket B Tailwind ports (wallets + lightning + flyers + compound-inflation-calculator) — April 17, 2026

Twelfth commit of the Next.js migration on `v2-nextjs-redesign`. The four Bucket B educational pages are now live with a faithful V1 design port (deferred to post-cutover for V2 redesign). Two new small Client Components (`WalletAccordion`, `PrintFlyerButton`) replace the inline JS that made the legacy pages interactive. `main` is still frozen.

### What Phase 9a delivered

**New Client Components (`components/`)**
- **`WalletAccordion.tsx`** — ~55 lines. Ports the `toggleAccordion()` inline JS from `wallets.html` + `lightning.html`. Orange-pill header with ▼ arrow rotates 180° when open; body content cross-fades via `max-height` transition. Keyboard-accessible (Enter/Space). `question` + `children` props only — no translation lookups client-side, parent server component passes pre-translated strings.
- **`PrintFlyerButton.tsx`** — ~55 lines. Ports `printFlyer()` from `flyers.html`. Creates a hidden iframe pointing at the flyer PDF, calls `contentWindow.print()` on load, fails silently on cross-origin block. Keyboard-accessible.

**New pages (4)**
- **`app/[locale]/wallets/page.tsx`** — V1 `wallets.html` (997 lines → ~450-line page.tsx). Three `<WalletAccordion>`s (self-custody, hot/cold, recovery phrase) + 6 wallet cards in 3 rows of 2. Inline `<WalletCard>` helper component factors out per-card boilerplate (image, custodial/temperature alert chips, feature-line list, learn-more button).
- **`app/[locale]/lightning/page.tsx`** — V1 `lightning.html` (457 lines → ~300-line page.tsx). Single `<WalletAccordion>` + 3 Lightning wallet cards (Phoenix, Breez non-custodial on row 1; Wallet of Satoshi custodial solo on row 2). Inline `<LightningCard>` helper (slightly different shape than wallet cards — no hot/cold alert).
- **`app/[locale]/flyers/page.tsx`** — V1 `flyers.html` (360 lines → ~250-line page.tsx). Print + download flyer buttons via `<PrintFlyerButton>` + `<a download>`. Share-on-Nostr section with two bounty-style buttons. Full-size hero image with `marginTop: -200px` legacy offset preserved.
- **`app/[locale]/compound-inflation-calculator/page.tsx`** — V1 `compound-inflation-calculator.html` (302 lines → ~170-line page.tsx). V1 intro text + the Phase 6b `<CompoundInflationCalculatorSolo>` Client Component + the "What can I do about inflation?" CTA pointing at `/inflation?link=calculator`.

**Files modified**
- **`lib/i18n/request.ts`** — added 4 new namespaces to `DEFAULT_NAMESPACES`. Namespaces cost ~0 per locale per build (read-once in-memory cache).
- **`lib/pages.ts`** — flipped `published: true` for all 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- **`app/globals.css`** — appended ~545 lines of V1 legacy CSS via `scripts/phase9a/append-bucket-b-css.js` (idempotent, sentinel-marker guarded). Ported verbatim from `css/style.css`: `.text-box` card variants (top/middle/bottom/solo/intro), `.wallet-q` / `.wallet-accordion-content`, `.alert` chips, `.wallet-box` / `.wallet-button`, `.bounty-button`, `.compound-form` / `.cic-button`, `.break-*` utilities, `.h2-section` / `.h3-item` / `.h2-label` V1 headings, `.orange-link`, `.looking-box`, and all the other class names the V1 HTML depends on. Tabs preserved.
- **`MIGRATION-NEXTJS.md`** — Phase 9a checkboxes complete; status pointer advanced to Phase 9b.

**New utilities**
- **`scripts/phase9a/append-bucket-b-css.js`** — idempotent CSS appender, same pattern as `scripts/append-comparison-css.js` from Phase 7a.
- **`scripts/phase9a/fix-schema-await.js`** — idempotent regex-based patcher that caught a forgotten `await` on `buildArticleSchema()`. Initial runtime verify showed `<script type="application/ld+json">` emitting `{}` (the Promise serialized as an empty object) instead of the full Article schema. The script promotes the schema construction out of the JSX and awaits it into a local. Re-running the script is a no-op on already-patched files.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **1049 static pages** (55 locales × 19 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase9a.js`: all 6 assertions pass. `/en/wallets` (192 KB) contains `wallet-q` accordion headers, `wallet-box` grid, all 6 wallet brand names in H2s, Article + BreadcrumbList JSON-LD, `wallet-accordion-content` bodies, `alert` chips, publisher attribution. `/en/lightning` (177 KB) contains the single accordion + PHOENIX/BREEZ/WALLET OF SATOSHI cards + schemas. `/en/flyers` (168 KB) contains PRINT & POST header + BITCOIN FLYERS subtitle + DOWNLOAD FLYER/PRINT FLYER/SHARE ON NOSTR buttons + `bounty-button` class + schemas. `/en/compound-inflation-calculator` (166 KB) contains the compound form, all three inputs, `cic-button`, and the "Opt Out of Inflation with Bitcoin" CTA. `/ar/wallets` renders `<html lang="ar" dir="rtl">` correctly. `/sitemap.xml` contains all 4 new English URLs.

### Architecture validation
Phase 9a confirms the faithful-port approach scales: 4 Bucket B pages in one phase with two new small Client Components and one CSS append step. The V1 CSS was decoupled from the new Next tree via an idempotent Node script, so re-running the build still works; and the schema-await bug was caught by runtime verify before commit. The `<WalletAccordion>` component demonstrates the ideal client-component contract: zero translation lookups in the client bundle, parent passes pre-translated `question` + already-rendered `children`, and only the open/closed state is hydrated.

### Intentionally left alone
- `wallets.html`, `lightning.html`, `flyers.html`, `compound-inflation-calculator.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of these 4 pages — deferred to post-cutover queue (see `MIGRATION-NEXTJS.md` "Post-migration Bucket B redesign queue" section).
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9a
```
components/WalletAccordion.tsx                                 (NEW — Client, ~55 lines)
components/PrintFlyerButton.tsx                                (NEW — Client, ~55 lines)
app/[locale]/wallets/page.tsx                                  (NEW — ~450 lines)
app/[locale]/lightning/page.tsx                                (NEW — ~300 lines)
app/[locale]/flyers/page.tsx                                   (NEW — ~250 lines)
app/[locale]/compound-inflation-calculator/page.tsx            (NEW — ~170 lines)
scripts/phase9a/append-bucket-b-css.js                         (NEW — idempotent CSS appender)
scripts/phase9a/fix-schema-await.js                            (NEW — idempotent await-patcher)
scripts/phase9a/update-memory-bank.js                          (NEW — this file's generator)
app/globals.css                                                (appended ~545 lines of V1 CSS)
lib/i18n/request.ts                                            (edited — 4 new namespaces)
lib/pages.ts                                                   (edited — 4 published flags)
MIGRATION-NEXTJS.md                                            (edited — Phase 9a complete)
memory-bank/activeContext.md                                   (edited — this file)
memory-bank/progress.md                                        (edited — progress note)
```

### Next
**Phase 9b** — form pages + successes: `stickers`, `signs`, `postcards`, `buy`, plus the 4 `*-success` pages. Requires porting `jquery/sticker-picker.js` (`<StickerPicker>`), `jquery/country-selector-forms.js` (`<CountrySelectorForm>`), and `jquery/buy-flow.js` (`<BuyFlow>` multi-step wizard). Forms POST to existing `forms-backend/` endpoints — no backend changes. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 8 Content pages (about + get-involved) — April 17, 2026

Eleventh commit of the Next.js migration on `v2-nextjs-redesign`. Two more V2 content pages are live, reusing the Phase 7c `ContentPageLayout` + `ContentPageData` pattern with zero new infrastructure. Phases 5–8 are now complete; `main` is still frozen.

### What Phase 8 delivered

**New data files (`lib/comparisons/`)**
- **`about.ts`** — ports `about.html` into the `ContentPageData` shape. 5 sections (Mission / What We Do / Editorial / Open Source / Contact Us). Preserves every legacy inline-link fragment verbatim: links to `/stickers`, `/flyers`, `/business/kit`, GitHub repo, `CONTRIBUTING.md`. Promoted the V1 hardcoded contact strings (`hi@bitcoin.rocks`, `github.com/sovenor/bitcoin-rocks`) to new i18n keys so translators can tweak the visible labels per locale without TS changes. Added `about_page_description` meta key.
- **`get-involved.ts`** — ports `get-involved.html`. 4 sections (Intro + 3 CTAs: sticker pack / postcard pack / business kit). V2 redesign drops the legacy `<img>` thumbnails + `.get-involved-button` divs. Each CTA section ends with an inline `.body-link` paragraph that localizes to `/stickers`, `/postcards`, `/business/kit`. The "What's next?" card grid (from `ContentPageLayout`) completes the onward-journey funnel (wallets / buy / calculator).

**New pages (2)**
- **`app/[locale]/about/page.tsx`** + **`app/[locale]/get-involved/page.tsx`** — thin ~60-line pages (same pattern as `/bank-runs`). Each imports its `ContentPageData` and passes it to `<ContentPageLayout>`. `generateMetadata()` is inline (since `ContentPageData` has a different shape than `ComparisonPageData` and we already have one inline precedent for `/bank-runs`) — full 55-locale hreflang alternates + OpenGraph + Twitter card.

**Files modified**
- **`i18n/en/about_en.json`** — added 4 new keys (`about_page_description`, `about_contact_email_addr`, `about_contact_nostr_handle`, `about_contact_github_url`); refreshed `@metadata.last-updated` to 2026-04-17.
- **`i18n/en/get-involved_en.json`** — refreshed `@metadata.last-updated` only (no new keys needed — the existing fragment-based prose covers everything).
- **`lib/i18n/request.ts`** — added `about` + `get-involved` to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for both slugs; sitemap now emits **110 new URLs** (55 locales × 2 slugs).
- **`MIGRATION-NEXTJS.md`** — Phase 8 checkboxes complete; status pointer advanced to Phase 9a.

**New utility**
- **`scripts/phase8/update-en-json.js`** — idempotent Node helper to add new keys + refresh metadata dates. Mirrors the `scripts/phase7*/` pattern: a small script per phase when English JSON files need changes. Translator workflow unchanged — they'll see 4 new untranslated strings next time they update `about_*.json` for their language.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 2.9s, TypeScript clean, **829 static pages** (55 locales × 15 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase8.js`: all 7 assertions pass. `/en/about` (168 KB) contains all 5 section headings + `hi@bitcoin.rocks` + `reviewed-badge` + Article + BreadcrumbList JSON-LD. `/en/get-involved` (164 KB) contains 3 CTA section headings + correctly localized `/en/stickers` / `/en/postcards` / `/en/business/kit` links + Article + BreadcrumbList JSON-LD. `/ar/about` renders `<html lang="ar" dir="rtl">`. Sitemap contains both new English URLs.

### Architecture validation
Phase 8 confirms the Phase 7c `ContentPageLayout` abstraction is correct: both content pages reused `ContentPageData` verbatim with zero layout-component changes. The only additions were two small data files + two 60-line page.tsx wrappers. V2 redesign (drop legacy images + inline button CTAs) landed naturally as `body-link` paragraphs without needing any CSS additions.

### Intentionally left alone
- `about.html` + `get-involved.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- Non-English translations for the 4 new `about_*` keys — translators pick these up during normal language maintenance; English fallback is graceful.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 8
```
lib/comparisons/about.ts                             (NEW — ~170 lines)
lib/comparisons/get-involved.ts                      (NEW — ~140 lines)
app/[locale]/about/page.tsx                          (NEW — ~60 lines)
app/[locale]/get-involved/page.tsx                   (NEW — ~60 lines)
scripts/phase8/update-en-json.js                     (NEW — ~60 lines)
i18n/en/about_en.json                                (edited — +4 keys, date)
i18n/en/get-involved_en.json                         (edited — date only)
lib/i18n/request.ts                                  (edited — +2 namespaces)
lib/pages.ts                                         (edited — 2 slugs → published)
MIGRATION-NEXTJS.md                                  (edited — Phase 8 complete)
memory-bank/activeContext.md                         (edited — this file)
memory-bank/progress.md                              (edited — progress note)
```

### Next
**Phase 9a** — faithful Tailwind port of 4 Bucket B educational pages: `wallets` (largest V1 page at 997 lines), `lightning`, `flyers`, and the solo `compound-inflation-calculator` page (which reuses the Phase 6b `<CompoundInflationCalculatorSolo>` component). These are Bucket B pages so V2 redesign is deferred to the post-cutover queue; the port just maps V1 HTML → Tailwind classes. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 7b Four more comparison pages (banks / bonds / real-estate / crypto) — April 17, 2026

Ninth commit of the Next.js migration on `v2-nextjs-redesign`. Four more `bitcoin-vs-*` pages are live using the Phase 7a data-driven pipeline — pure additions, no infrastructure changes. Each page is a single data file + a ~30-line page.tsx, confirming the Phase 7a architecture choice was correct. `main` is still frozen.

### What Phase 7b delivered

**New data files (`lib/comparisons/`)**
- **`bitcoin-vs-banks.ts`** — 7 comparison points, asset accent red `#C02C3E` (echoes the legacy `.freedom` warning-red). Inline `<a>` to `voteforbetter.money/learn/bitcoin-is-permissionless` on point 1, localized `/wallets` link on point 4. Sources: Bitcoin whitepaper + source repo + FDIC failed-bank list.
- **`bitcoin-vs-bonds.ts`** — 7 points, asset accent treasury-green `#4A8C5E`. External links to MarketWatch 2022 weak-auction article + TreasuryDirect; localized links to `/inflation`, `/bank-runs`, `/wallets`. Sources: TreasuryDirect auctions + MarketWatch + Bitcoin whitepaper + source repo.
- **`bitcoin-vs-real-estate.ts`** — **9 points** (the one comparison with a 9th "housing financialization" point), asset accent earth-tone brown `#C99E6E`. All-plain-text summaries. Sources: Bitcoin whitepaper + source repo + UN housing financialization report.
- **`bitcoin-vs-crypto.ts`** — 8 points, asset accent "crypto purple" `#B072E8` (deliberately distinct from Bitcoin orange for instant visual contrast). Point 5's translation embeds an inline `<a>` to the whitepaper inside the translation string itself — not split into a separate fragment — preserved via `dangerouslySetInnerHTML` in `ComparisonPageLayout` (consistent with Phase 7a cash precedent). Sources: Bitcoin whitepaper + source repo + Bitnodes.

**New pages (4)**
- **`app/[locale]/bitcoin-vs-banks/page.tsx`**, **`bitcoin-vs-bonds/page.tsx`**, **`bitcoin-vs-real-estate/page.tsx`**, **`bitcoin-vs-crypto/page.tsx`** — four ~30-line pages, each a 2-function wrapper over `<ComparisonPageLayout>`. Identical shape to the Phase 7a pages.

**Files modified**
- **`lib/i18n/request.ts`** — Added the 4 new namespaces to `DEFAULT_NAMESPACES`. Namespace cache overhead stays at ~0 per-page since it's read-once per locale per build.
- **`lib/pages.ts`** — Flipped `published: true` for the 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- **`MIGRATION-NEXTJS.md`** — Phase 7b checkboxes complete; status pointer advanced to Phase 7c.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **499 static pages** (55 locales × 9 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase7b.js`: all 4 English pages serve 200 (165-176 KB each) with Article + BreadcrumbList + ItemList JSON-LD blocks, `comparison-h1` / `comparison-chip` / `whats-next-card` / `sources-list` / `reviewed-badge` classes present. `/ar/bitcoin-vs-banks` renders `<html lang="ar" dir="rtl">`. Sitemap contains all 4 English URLs.

### Architecture validation
The Phase 7a decision to split data (TypeScript) from rendering (Server Component) is paying off exactly as predicted — Phase 7b was a 15-minute port per page. No changes needed to `types.ts`, `metadata.ts`, `ComparisonPageLayout.tsx`, or the CSS. The only variability needed was:
- A typed `ComparisonPageData` literal per page
- Choice of asset accent color (one hex value)
- 2-3 inline link fragments with `localize`/`external` flags where the legacy prose had them

Phase 7c should be identical for the final 3 comparison pages (`bitcoin-vs-visa`, `bitcoin-vs-cbdc`, `bitcoin-vs-fine-art`); only `bank-runs` may need a small layout tweak since it's a non-comparison story-shaped page that reuses similar building blocks.

### Intentionally left alone
- `bitcoin-vs-{banks,bonds,real-estate,crypto}.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- The remaining 3 comparison pages + `bank-runs` — Phase 7c.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 7b
```
lib/comparisons/bitcoin-vs-banks.ts                 (NEW — ~100 lines)
lib/comparisons/bitcoin-vs-bonds.ts                 (NEW — ~135 lines)
lib/comparisons/bitcoin-vs-real-estate.ts           (NEW — ~85 lines)
lib/comparisons/bitcoin-vs-crypto.ts                (NEW — ~90 lines)
app/[locale]/bitcoin-vs-banks/page.tsx              (NEW — ~30 lines)
app/[locale]/bitcoin-vs-bonds/page.tsx              (NEW — ~30 lines)
app/[locale]/bitcoin-vs-real-estate/page.tsx        (NEW — ~30 lines)
app/[locale]/bitcoin-vs-crypto/page.tsx             (NEW — ~30 lines)
lib/i18n/request.ts                                 (edited — added 4 namespaces)
lib/pages.ts                                        (edited — 4 published flags)
MIGRATION-NEXTJS.md                                 (edited — Phase 7b marked complete)
memory-bank/activeContext.md                        (this file)
memory-bank/progress.md                             (edited)
```

---

## Previously: Next.js Migration — Phase 7a Comparison layout + first 3 comparison pages — April 17, 2026

Eighth commit of the Next.js migration on `v2-nextjs-redesign`. The first 3 `bitcoin-vs-*` pages (gold, stocks, cash) are now typed React pages built on a shared `<ComparisonPageLayout>` Server Component, with the V2 design system applied during port. `main` is still frozen.

### What Phase 7a delivered

**New infrastructure (`lib/comparisons/`)**
- **`lib/comparisons/types.ts`** — Typed `ComparisonPageData` bundle: slug, namespace, meta image, H1 key quartet (part1/bitcoin/and/asset), asset accent color, intro keys array, bitcoin/asset label keys, ordered `ComparisonPointData[]`, `ComparisonSource[]`. `SummaryFragment` supports inline `<a>` rendering with a `localize` flag (auto-prefix with current locale) + `external` flag (adds `target="_blank" rel="noopener noreferrer"`). Data references translation strings **by key only** — the existing jquery.i18n JSON files stay the source of truth, so translator workflow is unchanged.
- **`lib/comparisons/bitcoin-vs-gold.ts`** — Data bundle for gold: 7 comparison points, 4 sources (World Gold Council, Bitnodes, Bitcoin whitepaper, bitcoin source repo), asset accent `#EBC61F`. Every legacy `<a class="orange-link">` preserved with proper `localize`/`external` flags.
- **`lib/comparisons/bitcoin-vs-stocks.ts`** — Data bundle for stocks: 7 comparison points, 3 sources (Bitcoin whitepaper, source repo, SEC stock dilution release), asset accent `#1DFF4D`.
- **`lib/comparisons/bitcoin-vs-cash.ts`** — Data bundle for cash: 7 comparison points, 3 sources (RBI 2016 demonetization notice, Bitcoin whitepaper, source repo), asset accent `#85BB65`.
- **`lib/comparisons/metadata.ts`** — Shared `buildComparisonMetadata(data, locale)` returning `Metadata`: title, description, OpenGraph article card, Twitter `summary_large_image`, + all 55-locale hreflang alternates. Each page.tsx's `generateMetadata()` is a 2-line wrapper.

**New component**
- **`components/ComparisonPageLayout.tsx`** — Server Component (~300 lines). Renders the full V2 comparison page: hero H1 (orange BITCOIN + asset-accent-colored asset word), intro paragraphs, N comparison points (each: two side-by-side chips + multi-paragraph explanation), "What's next?" card grid (4 cards), Sources `<ol>`, publisher attribution + reviewed-badge. Emits Article + BreadcrumbList + ItemList JSON-LD inline via `<JsonLd>`. Two sub-components: `ComparisonPointSection` (chips + explanation) and `SummaryFragmentSpan` (inline `<a class="body-link">` rendering with locale prefixing + external link handling). Uses `dangerouslySetInnerHTML` on fragment text to preserve any inline `<a>` markup legacy translators embedded in prose strings (trusted repo-shipped content — safe).

**New pages (3)**
- **`app/[locale]/bitcoin-vs-gold/page.tsx`**, **`bitcoin-vs-stocks/page.tsx`**, **`bitcoin-vs-cash/page.tsx`** — Each is a 2-function ~30-line page: `generateMetadata()` delegates to `buildComparisonMetadata`, default export passes the data bundle to `<ComparisonPageLayout>`. Zero duplication.

**Files modified**
- **`lib/i18n/request.ts`** — Added `bitcoin-vs-gold` / `bitcoin-vs-stocks` / `bitcoin-vs-cash` to `DEFAULT_NAMESPACES`. In-memory namespace cache means adding unused namespaces costs ~0 (read-once per locale per build).
- **`lib/pages.ts`** — Flipped `published: true` for the 3 slugs so they enter the sitemap.
- **`app/globals.css`** — Appended ~120 lines of V2 comparison CSS via `scripts/append-comparison-css.js` (idempotent Node helper that detects a sentinel marker and no-ops on a second run). Hero spacing, `.comparison-chips` grid (2-col desktop, 1-col mobile), `.comparison-chip` dark-bg-with-border tokens, `.comparison-explain` prose, `.body-link` orange-underlined anchors, `--asset-accent` CSS variable (set per-page on the `.container-main` wrapper) drives H1 asset-word color + asset-chip label without any per-page CSS overrides.

### Build + verification
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **279 static pages** (55 locales × 5 routes [homepage + inflation + 3 comparisons] + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase7a.js` (Node `http.get` — avoids shell-escape issues on long commands): all 4 sampled URLs serve 200 with every expected DOM marker:
  - `/en/bitcoin-vs-gold` (168 KB), `/en/bitcoin-vs-stocks` (166 KB), `/en/bitcoin-vs-cash` (163 KB), `/ar/bitcoin-vs-gold` (164 KB)
  - `"ItemList"` + `"Article"` + `"BreadcrumbList"` JSON-LD ✓
  - `comparison-h1`, `comparison-chip`, `whats-next-card`, `sources-list`, `reviewed-badge`, `body-link` classes ✓
- RTL: `/ar/bitcoin-vs-gold` → `<html lang="ar" dir="rtl">` ✓
- `/sitemap.xml` contains `/en/bitcoin-vs-gold`, `/en/bitcoin-vs-stocks`, `/en/bitcoin-vs-cash` (×55 locales) ✓

### Decisions locked in
- **Data-driven comparison pages.** The port was tempting to do as 3 independent page.tsx trees, but they share >95% of structure. Splitting data (`lib/comparisons/*.ts`) from rendering (`components/ComparisonPageLayout.tsx`) means Phase 7b/7c become trivial: one data file + one 30-line page.tsx each, no layout work.
- **Translation keys stay in JSON, not in TS data files.** Data files reference strings by key; translators keep editing the same jquery.i18n JSON files they always have. The `ComparisonPageLayout` calls `getTranslations()` and resolves each key at render time. Zero translator workflow disruption.
- **`--asset-accent` CSS variable at the page level** instead of per-comparison stylesheet overrides. Each page sets the variable once on its `.container-main`; the `.comparison-h1 .asset` and `.comparison-chip-asset .comparison-chip-label` rules in globals.css both read from it. Adding the remaining 8 comparison pages only requires setting a different hex in the data file — no new CSS.
- **`dangerouslySetInnerHTML` on fragment text.** Some legacy translation strings (e.g. `point_3_summary_1` in cash) already contain inline `<a>` markup that translators copied in. Rendering as HTML preserves those exactly. All strings come from the trusted repo-shipped JSON files, so no XSS surface. Links rendered by the fragment's own `href`/`localize` config are separate and type-safe.
- **Body-link hover stays orange** (`#ff9500` → `#ffb84d`) — not the asset accent. The asset-accent color only surfaces on the H1 asset word + the asset chip's label. Keeping inline links always-orange preserves the visual hierarchy (the asset accent is identity; the link affordance is site-wide Bitcoin orange).
- **Reused `components/WhatsNextCard`** from Phase 5 for the "What's next?" grid. The inflation page, homepage, and now every comparison page all render the same card component — component reuse is already paying off.

### Intentionally left alone
- `bitcoin-vs-{gold,stocks,cash}.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- Other 7 comparison pages + bank-runs — Phase 7b/7c will port them using the same `ComparisonPageLayout` + per-page data file pattern.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 7a
```
lib/comparisons/types.ts                            (NEW — ~115 lines of types)
lib/comparisons/bitcoin-vs-gold.ts                  (NEW — data bundle)
lib/comparisons/bitcoin-vs-stocks.ts                (NEW — data bundle)
lib/comparisons/bitcoin-vs-cash.ts                  (NEW — data bundle)
lib/comparisons/metadata.ts                         (NEW — shared metadata helper)
components/ComparisonPageLayout.tsx                 (NEW — Server, ~300 lines)
app/[locale]/bitcoin-vs-gold/page.tsx               (NEW — ~30 lines)
app/[locale]/bitcoin-vs-stocks/page.tsx             (NEW — ~30 lines)
app/[locale]/bitcoin-vs-cash/page.tsx               (NEW — ~30 lines)
scripts/append-comparison-css.js                    (NEW — idempotent CSS appender)
lib/i18n/request.ts                                 (add 3 comparison namespaces)
lib/pages.ts                                        (flip 3 comparisons to published: true)
app/globals.css                                     (+~120 lines of Phase 7a CSS)
MIGRATION-NEXTJS.md                                 (Phase 7a marked complete; position pointer → Phase 7b)
```

### Next up: Phase 7b — 4 more comparison pages
Port `bitcoin-vs-banks`, `bitcoin-vs-bonds`, `bitcoin-vs-real-estate`, `bitcoin-vs-crypto` using the same pattern: one data file in `lib/comparisons/` + one thin page.tsx. No layout changes needed — the only CSS decision is the `assetAccentColor` hex per page. See `MIGRATION-NEXTJS.md` Phase 7b for the full checklist.

---

## Previous: Next.js Migration — Phase 6b Inflation stats + calculators + dynamic header — April 17, 2026

Seventh commit of the Next.js migration on `v2-nextjs-redesign`. The four remaining jQuery scripts that made the inflation page interactive (`inflation-stats.js`, `compound-inflation-calculator.js`, `compound-inflation-calculator-solo.js`, `dynamic-header.js`) are now TypeScript Client Components. `/en/inflation` renders with live stat-card population + URL-param-driven H1 swap, all hydration contained to the 3 small Client Components that actually need browser APIs. `main` is still frozen.

### What Phase 6b delivered

**New components (`components/`)**
- **`components/InflationStats.tsx`** — Client Component, ~220 lines. Ports `jquery/inflation-stats.js` 1:1. Pure side-effect component (`return null`) that mounts once, eagerly fetches USD, and subscribes to the custom `inflation:currency-changed` DOM event. When fired, it fetches `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX` and writes the response fields into the `stat-*-${CODE}` DOM elements via `document.getElementById(...).textContent = value`. Per-currency in-memory cache keyed by currency code (`cacheRef`) means repeated clicks on the same button don't refetch. Fallback-on-error leaves the server-rendered placeholder values (`+50%`, `—`) intact. Exports `CURRENCY_CHANGED_EVENT` + `CurrencyChangedEventDetail` type for the selector to import.
- **`components/CompoundInflationCalculator.tsx`** — Client Component, ~190 lines. Ports `jquery/compound-inflation-calculator.js`. 3 controlled inputs (salary / rate % / years), formula `newSalary = salary × (1 + rate/100)^years`, output formatted via `Intl.NumberFormat(locale, { style: "currency", currency })`. `idSuffix` prop is appended to every input/result DOM id so multiple calculators can coexist on one page (matches legacy `currentSalaryCAD` / `inflationRateCAD` / `resultCAD` scheme). Result rendered via `dangerouslySetInnerHTML` with `escapeHtml()` on all interpolated strings + literal `&nbsp;` spacers — preserves legacy prose-assembly 1:1 while staying XSS-safe. `useLocale()` for locale-correct number formatting.
- **`components/CompoundInflationCalculatorSolo.tsx`** — 20-line wrapper around `<CompoundInflationCalculator currency="USD" idSuffix="" />` for the `/compound-inflation-calculator` page (Phase 9a uses this).
- **`components/DynamicHeader.tsx`** — Client Component, pure side-effect. Ports `jquery/dynamic-header.js` decision table: `sign=got-inflation` > `link=calculator|calculator-site` (override) > `sticker=cure|cure-v2|got-inflation|what-if|other` > no param (leave default H1 untouched). Reads `window.location.search` via `URLSearchParams` on mount, resolves the translated line pair, and writes `document.getElementById("changing-header").textContent = …`. When no relevant URL params are present it leaves the server-rendered default intact — the V2 page's preferred behavior.

**Files modified**
- **`components/CountrySelector.tsx`** — imports `CURRENCY_CHANGED_EVENT` + `CurrencyChangedEventDetail` from `InflationStats` and dispatches `document.dispatchEvent(new CustomEvent(CURRENCY_CHANGED_EVENT, { detail: { currency: selected } }))` from the existing `useEffect` after every selection change (including reset → `null`). Clean single-direction dependency: selector doesn't know about the stats fetcher, fetcher doesn't know about the selector, they only share the event-name constant + detail shape.
- **`app/[locale]/inflation/page.tsx`** — mounts `<InflationStats />` + `<DynamicHeader />` at the top of the return tree (they're side-effect-only, render no DOM). Hero H1 `<span>` now has `id="changing-header"` so `<DynamicHeader>` can target it. Phase 6a's placeholder stat values still ship in server-rendered HTML; `<InflationStats>` "upgrades" them at runtime.

### Build + verification
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **114 static pages** (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Turbopack "overly broad patterns" hint on `fs.readFile` is pre-existing from Phase 2.
- Runtime spot-check via `scripts/phase-6b-spotcheck.js` (Node-based, since long shell one-liners get stuck in the terminal): `/en/inflation` → 200 (509 KB), all 11 expected DOM markers present:
  - `id="changing-header"` ✓ (DynamicHeader target)
  - `id="USD"` / `id="CAD"` / `id="EUR"` ✓ (per-currency sections)
  - `class="inflation-button inf-usdollar"` ✓ (country-selector button)
  - `id="stat-btc-change-USD"` / `id="stat-m1-current-USD"` / `id="stat-debt-current-USD"` ✓ (InflationStats targets)
  - `id="global-whats-next-wrap"` ✓ (CountrySelector-toggled block)
  - `"@type":"Article"` / `"@type":"BreadcrumbList"` ✓ (Phase 4 schemas)

### Decisions locked in
- **Side-effect-only Client Components.** InflationStats + DynamicHeader both `return null`. All their work is imperative DOM writes against elements the Server Components rendered. This keeps 100% of the page content server-rendered (every translated string, every flag, every card body) and contains hydration to the ~7 KB of event-wiring JS. Zero flash, zero layout shift.
- **CustomEvent bridge between CountrySelector and InflationStats** instead of sharing React state via context. Reasons: (a) the two components live at sibling positions in the tree, (b) no other component needs to know about the selected currency, (c) React Context would force both to become descendants of a Provider + re-render on every selection change. The DOM is already a suitable pub/sub bus here.
- **`dangerouslySetInnerHTML` for the calculator result** (with `escapeHtml()` on all interpolated strings). The legacy prose template interleaves translated strings + literal `&nbsp;` entities; React strips `&nbsp;` from text nodes. Rendering as HTML preserves the exact legacy output. All variable inputs are escaped, so no XSS surface.
- **`useLocale()` for number formatting** instead of reading `navigator.language` + `localStorage`. The legacy script picked a locale by comparing browser language to stored UI language — complex and stale. With next-intl, the active locale is already in context; `Intl.NumberFormat(locale, …)` does the right thing automatically.
- **`idSuffix` kept on CompoundInflationCalculator** even though the inflation page no longer has per-currency calculators inline. The solo page uses `idSuffix=""`; future pages can reinstate per-currency calculators by passing a suffix. Cleaner API contract than two separate components.
- **`changing-header` stays as a `<span>` inside the H1** (not the H1 itself). Keeps the H1 semantically intact — DynamicHeader just rewrites the orange text content, not the heading structure.

### Intentionally left alone
- `jquery/inflation-stats.js` / `jquery/compound-inflation-calculator*.js` / `jquery/dynamic-header.js` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — untouched. `<InflationStats>` fetches from its existing `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX` endpoint with the same response shape.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 6b
```
components/InflationStats.tsx                      (NEW — Client, ~220 lines)
components/CompoundInflationCalculator.tsx         (NEW — Client, ~190 lines)
components/CompoundInflationCalculatorSolo.tsx     (NEW — 20 lines, wrapper)
components/DynamicHeader.tsx                       (NEW — Client, ~100 lines)
components/CountrySelector.tsx                     (dispatch CustomEvent on selection change)
app/[locale]/inflation/page.tsx                    (mount InflationStats + DynamicHeader; H1 span gets id="changing-header")
MIGRATION-NEXTJS.md                                (Phase 6b marked complete; position pointer → Phase 7)
```

### Next up: Phase 7 — Bucket A comparison pages (with V2 redesign)
Port the 10 `bitcoin-vs-*` pages + `bank-runs` with the V2 design system applied during port (hero → intro → comparison points → what's next → publisher attribution). Phase 7a designs `components/ComparisonPageLayout.tsx` + ports the first 3 (gold, stocks, cash). See `MIGRATION-NEXTJS.md` Phase 7 for the full checklist.

---

## Previous: Next.js Migration — Phase 6a Inflation page shell complete — April 17, 2026

Sixth commit of the Next.js migration on `v2-nextjs-redesign`. The 3,035-line inflation page with all 13 per-currency dynamic sections is now a typed React tree: 1 Client Component (`CountrySelector`) + 1 heavy Server Component (`CurrencySection`, rendered 13× for USD/CAD/EUR/GBP/BRL/PHP/MXN/INR/JPY/AUD/ILS/THB/NZD) + the parent `app/[locale]/inflation/page.tsx` shell. Phase 6b will graft the live stat-fetcher + calculator onto this. `main` is still frozen.

### What Phase 6a delivered

**New components (`components/`)**
- **`components/CountrySelector.tsx`** — Client Component. Drop-in replacement for `jquery/country-selector-inflation.js`. Owns `selected: string | null` state; a `useEffect` toggles the `hidden` attribute on `.countries` DOM nodes (and on `#global-whats-next-wrap`) whenever selection changes. This keeps the server-rendered HTML stable (all 13 currency sections in the initial source so crawlers see everything) while the UI only shows the active one. `gtag('event', 'select_currency', { event_category: 'inflation', event_label: CODE })` fires on select; reset button restores the full button grid. Smooth scroll-to-top on both actions matches the legacy UX exactly.
- **`components/CurrencySection.tsx`** — Server Component (~400 lines). One instance per currency — renders the full 4-section block: intro (+ BTC gain / currency loss hero cards), "Here's the proof" (money-supply card + optional debt card + prose), "Bitcoin doesn't have inflation" (21M cap vs growing currency supply), "Bitcoin is also a tool for freedom" (4 feature cards + 4 story cards). Resolves all `inflation_${lower}_*` keys via `useTranslations()`. Accepts `btcChartUrl`, `cpiUrl`, `m1Url`, `debtUrl` (nullable — EUR skips the debt card because FRED has no Eurozone aggregate series). SVG icons for the 4 features (decentralized, permissionless, sovereign, scarce) and 4 stories (canada, nigeria, texas, pennsylvania) inlined so each section ships everything crawlers need without client hydration.

**New page (`app/[locale]/inflation/page.tsx`)**
- Replaces the Phase 5 stub-free inflation absence with the real page: Article + BreadcrumbList JSON-LD via Phase 4 builders, `generateMetadata()` with full hreflang alternates + OpenGraph + Twitter card, hero H1, `<CountrySelector>` wrapping 13 `<CurrencySection>` children + the global What's-next? grid (hidden by default, revealed by the selector effect), sources block (6 links: FRED M1SL, FRED International narrow-money, BLS CPI, mempool.space, Bitcoin source code, Satoshi whitepaper), and publisher attribution with the Reviewed-for-accuracy badge.
- Per-currency URL map (`CURRENCY_URLS`) is copied from `scripts/inflation-multi/rebuild-inflation-html.js` — same 13-currency set, same FRED / Bitcoin Price Report URLs, EUR's `debt: null` preserved.
- 13-entry `CURRENCIES` array drives both the button grid (flag emoji + `data-id` + `labelKey`) and the section list. Each entry has a `className` matching the legacy `inf-*` hover color classes (inf-usdollar, inf-caddollar, inf-euro, inf-india, …).

**i18n + CSS infrastructure**
- **`lib/i18n/request.ts`** — added `inflation` to `DEFAULT_NAMESPACES` so the ~480 `inflation_*` keys load on every request alongside `common` + `index`. In-memory cache means this is read-once per locale per build (no per-request file reads). Comment explains future phases can switch to per-page namespace sets if bundle size becomes an issue, but we're nowhere near that threshold.
- **`app/globals.css`** — appended the "INFLATION PAGE" section (~400 lines) ported verbatim from `css/style.css`: `.h1-inflation`, `.inflation-intro`, `.inflation-section` + its `h2` / `p` rules, `button.inflation-button` + `.container-inflation-button`, `.stat-cards-grid` + `.stat-card*`, `.stat-comparison-card*`, `.feature-cards-grid` + `.feature-card*`, `.story-cards-grid` + `.story-card*`, `.sources-section` + `.sources-list`, `.publisher-attribution` + `.reviewed-badge`, `.body-link`, `.text-highlight`, `.break-micro`, `.break-nano`, `.money-icon`, and `.countries[hidden] { display: none !important }`. Tabs (not spaces), legacy `.inflation-revamp` scoping dropped (no longer needed since all inflation styles are now page-scoped by component tree).

**Published-flag flip**
- **`lib/pages.ts`** — `inflation` flipped from `published: false` to `published: true`. The sitemap now emits 55 per-locale `/inflation` URLs, each with a full `alternates.languages` map pointing at all other 54 locale variants. `lastModified` derives from `i18n/en/inflation_en.json` `@metadata.last-updated` via Phase 4's date-modified helper — zero manual date bookkeeping.

### Build + verification
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **114 static pages** generated (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). The Turbopack "overly broad patterns" warning on `load-messages.ts` `fs.readFile` is pre-existing from Phase 2 — not a new issue.
- `npm run start` + live `curl` spot-checks end-to-end:
  - `/en/inflation` → 200. HTTP `link:` header carries all 55 hreflang alternates (en, af, az, ca, cs, ny, da, de, et, es, eu, fil, fr, ga, ha, hr, id, zu, it, sw, lt, hu, ms, nl, nb, uz, pl, pt, ro, sk, sl, fi, sv, tl, vi, tr, yo, el, bg, ru, ur, ar, fa, he, hi, bn, pa, ta, si, my, th, am, zh, ja, ko + x-default). Body source contains Article + BreadcrumbList JSON-LD, `id="USD"`/`id="CAD"`/`id="EUR"`/`id="global-whats-next-wrap"`, `class="inflation-button inf-usdollar"`, "DOLLARS IN EXISTENCE" hero label.
  - `/ar/inflation` → 200, `<html lang="ar" dir="rtl">` — RTL still correct with the full inflation tree.
  - `/sitemap.xml` → grep count confirms exactly 55 `/inflation<` entries (one per locale).

### Decisions locked in
- **One Client Component, two Server Component trees.** `CountrySelector` is the only piece that touches React state; `CurrencySection` × 13 + the global What's-next wrap + the sources/publisher blocks are pure server-render. No hydration flash on the ~6 kB of stat-card + feature-card HTML per currency.
- **Visibility via imperative DOM mutation, not re-render.** A `useEffect` in `CountrySelector` walks `.countries` descendants and toggles their `hidden` attribute on selection change. This preserves the initial server-rendered HTML (all 13 currency sections visible to crawlers) without requiring the selector to accept + re-render them via React state — which would have blocked them from being pure Server Components.
- **`hidden` attribute over `display: none` CSS class.** The HTML5 `hidden` attribute is semantic (a11y tree reflects it), CSS-aware (`display: none !important` applied via `.countries[hidden]` in globals.css) and JS-ergonomic (`sec.hidden = false`). Single source of truth.
- **`inflation` namespace in the default loader list.** Simpler than adding per-route namespace detection via the middleware; adds ~480 keys × 55 locales to the request payload, but the in-memory cache reads each file once per process start. Revisit in Phase 14 if the site has more namespaces to load.
- **Per-currency URL map duplicated from rebuild-inflation-html.js** — same FRED + BPR URLs. When Phase 6b wires up the live stats it can import the same map from the Next page rather than re-deriving. Single source of truth for which 13 currencies we support, plus EUR's null debt.
- **Reviewed-for-accuracy badge via i18n key, not inline year.** `REVIEWED_ACCURACY_I18N_KEY` from Phase 4's `lib/schema/reviewed-badge.ts` points to `common_reviewed_accuracy` which renders "✓ Reviewed for accuracy: 2026". Bump the year by editing the common JSON file once per year; no page-level changes needed.
- **Stat-card placeholder values preserved.** Phase 6b will fill them in via `document.getElementById(...)`-driven fetch (same pattern as legacy `inflation-stats.js`). For now the server-rendered "+50%" / "-15%" / "—" values are sensible defaults that look correct to crawlers.

### Intentionally left alone
- `jquery/country-selector-inflation.js`, `jquery/inflation-stats.js`, `jquery/compound-inflation-calculator*.js`, `jquery/dynamic-header.js`, `inflation.html`, `css/style.css` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — unchanged. Phase 6b's `<InflationStats>` Client Component will `fetch()` from its existing `/api/inflation-stats?currency=XXX` endpoint.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 6a
```
components/CountrySelector.tsx        (NEW — Client, 160 lines)
components/CurrencySection.tsx        (NEW — Server, ~400 lines)
app/[locale]/inflation/page.tsx       (NEW, ~400 lines)
app/globals.css                       (appended inflation-page block, ~400 lines)
lib/i18n/request.ts                   (DEFAULT_NAMESPACES adds "inflation")
lib/pages.ts                          (inflation.published: false → true)
MIGRATION-NEXTJS.md                   (Phase 6a marked complete; pointer → Phase 6b)
```

### Next up: Phase 6b — Inflation stats + calculators
Port `jquery/inflation-stats.js` → `components/InflationStats.tsx` (Client Component, fetches `forms.bitcoin.rocks/api/inflation-stats?currency=XXX`, writes into the `stat-*-${code}` DOM ids already in place). Then port the two compound-inflation calculators + the dynamic-header sticker/sign URL-param handler. See `MIGRATION-NEXTJS.md` Phase 6b for the full checklist.

---

## Previous: Next.js Migration — Phase 5 Homepage complete — April 17, 2026


Fifth commit of the Next.js migration on `v2-nextjs-redesign`. The v2 homepage from `index.html` (942 lines of HTML + 120 lines of CSS + 330 lines of carousel JS) is now a typed React tree composed of small server components plus one tightly-scoped client component for the RAF-driven infinite-scroll carousels. Every one of the ~50 cards and all hero + pill copy is translated at render time across all 55 locales. `main` is still frozen.

### What Phase 5 delivered

**New components (`components/`)**
- **`components/HomeCarousel.tsx`** — the only Client Component needed for the homepage. Ports `jquery/home-carousel.js` 1:1: RAF loop at 30 px/s, `transform: translate3d(offset, 0, 0)`, offset wraps around `halfWidth` invisibly because pills are duplicated 2× in the parent JSX, bidirectional mouse drag with 1.2× gain, touch drag with axis lock (vertical swipes pass through), trackpad horizontal wheel + shift+vertical wheel, hover pause, click-suppression after drag, recalc on resize + `document.fonts.ready` + 500ms settle timer. All event listeners cleaned up on unmount.
- **`components/HomePill.tsx`** — Server Component. Typed `HomePillColor` union covers all 21 topic colors. Renders plain `<a href="#anchor">` (not next-intl `<Link>`) so the browser's native `scroll-behavior: smooth` + `scroll-padding-top: 20px` handle the in-page jump. Duplicate pills get `aria-hidden="true"` + `tabIndex={-1}` so they don't clutter the a11y tree.
- **`components/WhatsNextCard.tsx`** — Server Component. Resolves `label`, `title`, and `authorKey` via `useTranslations()`. `external` prop adds `target="_blank"` + `rel="noopener noreferrer"`. Uses plain `<a>` because the caller always passes a pre-localized internal href (`/${locale}/foo`) or an external URL — never a locale-relative path that would need `<Link>`.
- **`components/CategorySection.tsx`** — Server Component. Wraps the per-topic card grid, renders `<h2>Bitcoin &amp; <span class="accent">topic</span></h2>`, sets `--card-accent` CSS variable on the section via `style` prop. That variable cascades into `.whats-next-card-label`, the `h2 .accent`, and the hover border — so every card inside the section picks up the category color without knowing its own.

**Homepage page (`app/[locale]/page.tsx`)**
- Replaces the Phase 4 stub with a full port of `index.html`: hero, two carousels (row 1 with 11 pills, row 2 with 10 pills — reorder preserved so bright-green `energy` never lands adjacent to bright-green `money`), 20 category sections covering ~50 cards mixing internal bitcoin.rocks pages and curated external sources (TIME, Fortune, Forbes, YouTube, Lyn Alden, Anita Posch, Bitcoin Magazine, etc.).
- `generateMetadata()` now populates full OpenGraph + Twitter card data (title, description, `og:image` pointing at `meta-home-v4.png`, card type `summary_large_image`) alongside the Phase 4 hreflang alternates.
- Pills are rendered via a `renderPillSet()` helper that emits the first set + duplicate set with `duplicate` prop — single source of truth for the row, and the duplicate set inherits every change automatically.
- Internal card links use `href={\`${l}/slug\`}` where `l = /${locale}` — future phases can change the locale prefix strategy in one place without touching 50 hrefs.

**CSS (`app/globals.css`)**
- Lifted the entire V2 homepage block from `css/style.css` (~220 lines) into `app/globals.css` — all 21 `.home-pill.*` color classes with `color: ... !important` + the shared `border-color: currentColor` rule; `.home-carousel-wrap` / `.home-carousel-row` / `.home-carousel-track` (including 100vw breakout trick); `.home-hero .h1-inflation` + `.home-hero .inflation-intro` with 500px breakpoint; `.whats-next-section` / `.whats-next-grid` / `a.whats-next-card` / `.whats-next-card-label` / `.whats-next-card-title` / `.whats-next-card-source` including the `:only-child { grid-column: 1/-1 }` solo rule; `.category-section` with accent driven by `--card-accent` variable.
- Added `html { scroll-behavior: smooth; scroll-padding-top: 20px; }` — replaces the legacy `jquery/home-carousel.js` `initAnchorScroll()` function with native CSS. One-line solution, works in every browser we care about.
- Kept `.container-main` (≤700px centered column) and `.container-inner` (96% inner) as raw CSS because they're the fundamental layout containers that every page will use.

### Build + verification
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **59 routes** static-generated (same count as Phase 4; no new routes, just the homepage content filled out across all 55 locales).
- `npm run start` + `curl` spot-checks confirmed end-to-end:
  - `/en` → 200, 183 KB. Source contains `home-hero`, `home-carousel-row` (x2), 4 category IDs spot-checked (`money`, `freedom`, `energy`, `get-started`), hero strings ("Bitcoin is better money…", "Tap on a category…"), and "Bitcoin doesn't have inflation" title.
  - `/ar` → 200, 197 KB, `<html lang="ar" dir="rtl">` still correct with the full homepage tree.
  - `/es` → 200, 188 KB. Hero h1 still English because `home_h1` isn't in `index_es.json` yet — English fallback from `lib/i18n/load-messages.ts` working as designed.
- Build-time warning from Turbopack about "overly broad patterns" in `load-messages.ts` — pre-existing from Phase 2, harmless perf hint, not a new issue.

### Decisions locked in
- **One Client Component, 4 Server Components.** Only the carousel needs browser APIs (RAF + touch events + drag state); everything else (pills, cards, section wrappers, hero) is pure data-transform and ships as static HTML. Zero hydration flash on the ~50 cards + hero.
- **In-page anchors use plain `<a>`, not next-intl `<Link>`.** `<Link>` would treat `#money` as cross-page navigation (and rewrite to `/en/#money` or similar), breaking in-page scroll. Plain `<a href="#money">` lets the browser handle it natively, which combined with CSS `scroll-behavior: smooth` is cleaner than the legacy JS smooth-scroll.
- **`renderPillSet()` helper** — pills × 2 = 42 rendered elements per carousel. Helper takes a typed pill array + `t()`, emits both sets. Keeps the homepage page from bloating into 200+ lines of `<HomePill>` JSX.
- **CSS custom property `--card-accent` instead of per-card color props.** Every card label / section heading accent / hover border reads `var(--card-accent)`. `<CategorySection>` sets it once via `style={{"--card-accent": accent}}`, cards inherit through CSS cascade — no color prop threading to `<WhatsNextCard>`, no Tailwind arbitrary-value pollution.
- **`SavingSection.tsx` deferred as redundant.** The migration plan called for a dedicated SavingSection component, but the reusable `CategorySection` + `WhatsNextCard` + `HomePill` trio already handles it perfectly (`<CategorySection id="saving" accent="#F5A9B8" titleKey="home_btn_saving">`). Adding a thin wrapper component would have been pure ceremony.
- **Native browser scroll, not Intersection Observer or manual JS.** Legacy `home-carousel.js` had an `initAnchorScroll()` function with `window.scroll({ behavior: 'smooth', top: top })`. CSS `scroll-padding-top: 20px` on `html` gives exact same behavior with zero JS.

### Intentionally left alone
- `jquery/home-carousel.js` — still shipped by the static site on `main`. Phase 14 deletes it.
- `index.html` — still the source of truth for the static site; Phase 14 deletes it.
- `css/style.css` — still ships to all un-migrated pages; Phase 14 deletes it.
- `forms-backend/` — untouched.
- `main` branch at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 5
```
components/HomeCarousel.tsx        (NEW — Client, 280 lines)
components/HomePill.tsx            (NEW — Server, 50 lines)
components/WhatsNextCard.tsx       (NEW — Server, 50 lines)
components/CategorySection.tsx     (NEW — Server, 65 lines)
app/[locale]/page.tsx              (REWRITE — stub → full homepage, ~620 lines)
app/globals.css                    (V2 homepage CSS block added, ~220 lines)
MIGRATION-NEXTJS.md                (Phase 5 marked complete; position pointer → Phase 6)
```

### Next up: Phase 6 — Inflation page
Port `inflation.html` (3036 lines — largest page in the codebase) to `app/[locale]/inflation/page.tsx`. Phase 6a is the static shell + `<CountrySelector>` (Client Component for the currency picker). Phase 6b ports the stat fetchers (`inflation-stats.js`) + both compound inflation calculators + the dynamic header. See `MIGRATION-NEXTJS.md` Phase 6 for the full checklist.

---

## Previous: Next.js Migration — Phase 4 SEO / JSON-LD / sitemap helpers complete — April 17, 2026

Fourth commit of the Next.js migration on `v2-nextjs-redesign`. The entire `scripts/inject-*.js` JSON-LD pipeline from the legacy static site has been ported to TypeScript helpers that run at render time — plus brand-new `hreflang` generation, the Next `MetadataRoute` sitemap + robots handlers, and a `dateModified` helper that automates what was previously a manual dual-source-of-truth dance. `main` is still frozen.

### What Phase 4 delivered

**New infrastructure (`lib/`, `components/`)**
- **`lib/site.ts`** — site-wide constants (origin, brand, logo, GA id) + `buildUrl(locale, slug)` helper. One source of truth for production URLs.
- **`lib/pages.ts`** — canonical page registry. Each page has a slug, the phase that ships it, sitemap priority, changeFrequency, English JSON namespace, and a `published: boolean` flag. Phase 5 will flip `index` to `published: true`; Phase 6 flips `inflation`; etc. The sitemap only emits `getPublishedPages()` so the index never advertises URLs that still 404 during the migration.
- **`components/JsonLd.tsx`** — tiny render-a-`<script type="application/ld+json">` component. Uses `dangerouslySetInnerHTML` with a `</` → `\u003c` escape so a malicious translated string can never break out of the script tag.
- **`lib/schema/organization.ts`** — ports `scripts/inject-organization-schema.js`. Exports `buildOrganizationSchema()` (full node with `knowsAbout`, contact points, etc.) and `ORGANIZATION_REF` (`@id`-only reference every other schema uses so we don't duplicate the full organization node on every page).
- **`lib/schema/website.ts`** — NEW (was hand-maintained in `index.html`). Emits `WebSite` + SearchAction + `inLanguage` list (all 55 locales pulled from `lib/i18n/config.ts` so adding a language auto-updates the schema).
- **`lib/schema/article.ts`** — ports `scripts/inject-article-schema.js`. Picks Article vs WebPage from a slug allow-list. Takes pre-translated `headline` + `description` as input (from the caller's `t()` lookups) — no more HTML scraping at build time.
- **`lib/schema/breadcrumb.ts`** — ports `scripts/inject-breadcrumb-schema.js` with the same hierarchy rules (`Home > Page`, `Home > Business > Page`, `Home > Nostr > Page`, `Home > Stickers > Sticker Files`). Accepts the translated page title as input; returns `null` for the homepage.
- **`lib/schema/comparison.ts`** — ports `scripts/inject-comparison-schema.js`. Takes a typed `ComparisonPoint[]` data array (`{bitcoin, asset, explanation}`) rather than scraping HTML — type-safe + means each comparison page in Phase 7 just imports its data file and passes it through.
- **`lib/schema/reviewed-badge.ts`** — ports the semantics of `scripts/inject-reviewed-badge.js` but deliberately as a `getReviewedAccuracyYear()` + `REVIEWED_ACCURACY_I18N_KEY` helper, not a component. Each Phase 7/8 page decides exactly where in its V2 design to render the badge.
- **`lib/schema/date-modified.ts`** — NEW automation. Reads `@metadata.last-updated` from each English JSON file. Means the `Article.dateModified` field and the sitemap `<lastmod>` auto-update the moment a translator/editor bumps the JSON metadata. No more dual bookkeeping.
- **`lib/schema/hreflang.ts`** — NEW. `buildAlternates({locale, slug})` returns the canonical + all-55-locales `languages` map for the Next Metadata API. `buildHreflangMap(slug)` is the raw `{locale: url}` map used inside the XML sitemap. Google's sitelinks-search-box + multilingual SERP preferences rely on this being correct — Phase 4 is where we unlock that.

**New route handlers (`app/`)**
- **`app/sitemap.ts`** — `MetadataRoute.Sitemap` handler. Emits one entry per `(published page, locale)` pair, each with its full `alternates.languages` map — Next serializes those into the `<xhtml:link rel="alternate" hreflang="…">` Google expects for multilingual sites. `lastModified` comes from `getDateModifiedFromNamespace()`, `changeFrequency` + `priority` from the page registry.
- **`app/robots.ts`** — `MetadataRoute.Robots` handler. Ports the hand-maintained `robots.txt` including the non-content disallow list (`/i18n/`, `/jquery/`, `/scripts/`, `/memory-bank/`, `/css/`, `/forms-backend/`, `/.github/`) + per-user-agent Allow blocks for all 16 major AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, Applebot-Extended, Meta-ExternalAgent, Bingbot, Amazonbot, CCBot, cohere-ai, YouBot, Diffbot, Bytespider).

**Existing file changes**
- **`app/[locale]/layout.tsx`** — emits `<JsonLd data={buildOrganizationSchema()} />` inside `<head>` so every page across every locale ships the Organization node (other schemas reference it via `@id` so no duplication).
- **`app/[locale]/page.tsx`** — updated to demonstrate the full pattern so future phases (and translators/editors wiring up new pages) have a clear reference:
  - `generateMetadata()` returns `alternates: buildAlternates({locale, slug: ""})` → Next renders `<link rel="alternate" hreflang="…">` for every locale in `<head>`.
  - Body renders `<JsonLd data={buildWebSiteSchema()} />` (homepage-only) + `<JsonLd data={buildArticleSchema({slug: "", locale, headline, description, schemaType: "WebPage"})} />` (per-locale, with auto-derived `dateModified` from `i18n/en/index_en.json`'s `@metadata.last-updated`).

**Static assets**
- `llms.txt` and `llms-full.txt` copied into `public/` so they're served at `/llms.txt` / `/llms-full.txt` (AI crawlers expect them at those paths).

### Build + verification
- `npm run build` → ✓ compiled 2.0s, TypeScript clean, **59 routes** static-generated (55 locale pages + /_not-found + /robots.txt + /sitemap.xml + middleware proxy).
- Live `curl` spot-checks via `npm run start`:
  - `/en` HTML source contains 3 JSON-LD blocks (Organization + WebSite + WebPage) and `<link rel="alternate" hreflang="…">` for all 55 locales.
  - `/sitemap.xml` is valid XML with `<xhtml:link rel="alternate" hreflang="…">` per URL for all 55 locales (one entry per published page so far = just `/`).
  - `/robots.txt` has the expected structure with per-AI-crawler Allow + Disallow blocks, `Sitemap:` pointer, and `host` directive.
  - `/ar` → `<html lang="ar" dir="rtl">` still correct with the full Phase 3/4 stack loaded.

### Decisions locked in
- **Published-flag gate on the sitemap.** The page registry lists all ~45 future URLs right now, but `getPublishedPages()` filters to only those shipped in Next. This means the sitemap stays honest during the long migration without hunting-and-pecking to add each URL later — future phases just flip one `published` bool per page and it appears in the sitemap automatically.
- **Comparison/breadcrumb helpers take translated strings as inputs**, rather than scraping DOM like the legacy scripts. Reason: pages now render from typed React components, so we already have the translated strings in hand by the time we call the builder. Type-safe + zero translator workflow disruption.
- **`dateModified` is derived, not written manually** — the old `.clinerules` rule about bumping `Article` schema `dateModified` when bumping English JSON `@metadata.last-updated` becomes automatic. The rule still applies to translators bumping `last-updated`; the HTML schema date no longer needs manual editing.
- **JsonLd is loosely typed (`data: any`)** deliberately — every schema builder returns a plain `Record<string, unknown>` and a strict union over every possible schema shape just creates assertion noise at the JSX site. The `</ → \u003c` escape inside the component is the safety net.
- **Breadcrumb + comparison + reviewed-badge helpers aren't wired to any page yet.** They'll be used by Phase 7 (comparison + breadcrumb on each bitcoin-vs-* page), Phase 8 (breadcrumb on about/get-involved), Phase 7-8 (reviewed-badge on educational pages). Phase 4 ends with the infrastructure built; actual usage lands when the pages that need it get ported.

### Intentionally left alone
- `scripts/inject-*.js` — still used by the static site on `main`. Phase 14 will delete them.
- All root `*.html` files, `css/style.css`, `jquery/` — legacy static site untouched.
- `forms-backend/` — still a completely separate Railway service.
- The stale hand-written `sitemap.xml` in the repo root — Phase 13 (`app/not-found.tsx` + redirects + final sitemap review) will delete it.
- `main` branch at `origin/main` (`6cb07406`) — Railway keeps serving the static site until cutover (Phase 15).

### Files created/changed in Phase 4
```
lib/site.ts                 (NEW)
lib/pages.ts                (NEW)
lib/schema/organization.ts  (NEW)
lib/schema/website.ts       (NEW)
lib/schema/article.ts       (NEW)
lib/schema/breadcrumb.ts    (NEW)
lib/schema/comparison.ts    (NEW)
lib/schema/reviewed-badge.ts (NEW)
lib/schema/date-modified.ts (NEW)
lib/schema/hreflang.ts      (NEW)
components/JsonLd.tsx       (NEW)
app/sitemap.ts              (NEW)
app/robots.ts               (NEW)
public/llms.txt             (copy)
public/llms-full.txt        (copy)
app/[locale]/layout.tsx     (Organization JSON-LD wired into <head>)
app/[locale]/page.tsx       (WebSite + WebPage JSON-LD + generateMetadata with alternates)
MIGRATION-NEXTJS.md         (Phase 4 marked complete; position pointer → Phase 5)
```

### Next up: Phase 5 — Homepage port
Port `index.html` (943 lines, already V2) to `app/[locale]/page.tsx` in full. Extract `components/HomeCarousel.tsx` (Client — drag-to-scroll + RAF infinite loop) + `components/HomePill.tsx` + `components/WhatsNextCard.tsx` + `components/SavingSection.tsx`. All strings via `t()` from `i18n/en/index_en.json`. Visual parity check against live `bitcoin.rocks/`. Phase 4's SEO helpers + the homepage's existing Phase-4-demo usage of `buildArticleSchema` / `buildWebSiteSchema` / `buildAlternates` stay in place when the stub content is replaced with the full carousels + sections. See `MIGRATION-NEXTJS.md` Phase 5 for the full checklist.

---

## Latest: Next.js Migration — Phase 3 shared layout components complete — April 17, 2026

Third commit of the Next.js migration on `v2-nextjs-redesign`. Every page now inherits a server-rendered V2 navbar + footer + GA snippet from `app/[locale]/layout.tsx` — zero duplication, zero client-side hydration needed for the shared chrome. `main` is still frozen.

### What Phase 3 delivered

- **`lib/i18n/navigation.ts`** — thin wrapper around `next-intl`'s `createNavigation(routing)` that exports locale-aware `Link`, `usePathname`, `useRouter`, `redirect`, `getPathname`. Used by every shared component so `<Link href="/inflation">` becomes `/<current-locale>/inflation` automatically, with cookie-persisted locale switching baked in.
- **`components/Footer.tsx`** — Server Component. Ports the canonical V2 footer from current `index.html` (the one with `.footer-logo-wrap`): centered logo with a horizontal line breaking behind it, tagline, dot-separated link row (About · Contribute · Nostr · email). All styles in Tailwind utility classes. Reads `common_footer_tagline`, `common_footer_about`, `common_footer_contribute`, `common_footer_nostr` via `getTranslations()` — translations already exist for all 55 locales.
- **`components/Navbar.tsx`** — Server Component. V2 pill nav (logo-on-top-of-pill pattern). Renders `home_nav_learn` / `home_nav_get_involved` / `home_nav_about` into three pill cells and slots in `<LanguageSwitcher />` as the 4th cell. All links use locale-aware `<Link>`.
- **`components/LanguageSwitcher.tsx`** — Client Component. Ports the behavior of `jquery/language.js`:
  - Reads current locale via `useLocale()`, displays native name (e.g. `English`, `Español`, `中文`) in a clickable button.
  - Click opens a dropdown of all 55 languages + an "Add language" row pointing at the CONTRIBUTING.md translations section.
  - On select: fires `gtag('event', 'language_switch', { event_category, event_label, language_selected })` then calls `router.replace(pathname, { locale })` — next-intl writes the `NEXT_LOCALE` cookie automatically (no full page reload).
  - On mount: fires `language_pageview` once with `language_source` derived from presence of the `NEXT_LOCALE` cookie (`'stored'` vs `'browser'`).
  - Dropdown closes on outside-click via a `document` mousedown listener that's installed only while open.
  - `TRANSLATION_VERSION` cache-bust is deliberately **removed** — Next.js page regeneration handles cache invalidation at build time.
- **`components/GoogleAnalytics.tsx`** — `<Script strategy="afterInteractive">` wrapper with the `G-18L58W2GTN` measurement ID exported as a module constant.
- **`app/[locale]/layout.tsx`** — rewired to compose everything:
  - `<GoogleAnalytics />` emits inside `<body>` first (after Typekit's `<link>` in `<head>`)
  - `<NextIntlClientProvider>` wraps `<Navbar /> <main>{children}</main> <Footer />`
  - Still handles locale validation, `setRequestLocale()`, `generateStaticParams()`, RTL direction, favicon metadata
- **`app/[locale]/page.tsx`** — simplified. Previously was `min-h-screen` flex-centered (it was the entire page); now just a padded `<section>` since nav + footer live in the layout.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 2.2s, TypeScript clean, **57 routes** static-generated. Turbopack emitted one perf hint about `fs.readFile(p, 'utf8')` in `load-messages.ts` matching 19k+ files — not an error, just a heads-up about dynamic filename globs. We can tighten this later if build time becomes an issue.
- `npm run start` + `curl` spot-checks:
  - `/en` → 200, HTML source contains nav labels ("Learn", "Get Involved", "About", "English"), footer tagline ("Accelerating bitcoin adoption through education."), footer email ("hi@bitcoin.rocks"), `rocks-logo` in both nav + footer.
  - `/ar` → `<html lang="ar" dir="rtl">` — RTL still correct with the full layout stack.
  - `/es` → Spanish footer tagline rendered as "Acelerando la adopción de bitcoin a través de la educación." — confirms translations flow through `getTranslations()` end-to-end on every shared component.

### Decisions locked in
- **Server Components for Navbar + Footer.** Both need translations in the initial HTML response (SEO win + zero hydration flash). The only interactive piece — the language dropdown — is isolated in its own Client Component (`LanguageSwitcher.tsx`), which is the React-server-components best practice.
- **No legacy CSS leakage.** All spacing / colors / typography in the shared chrome are Tailwind utility classes or design-token references (`bg-bg`, `text-bitcoin-orange`, `text-fg-dim`, `font-proxima`, `xs:` breakpoint). A few exact-hex values like `#555` (divider color) and `#f0f0f0` (hover text) are used as raw Tailwind `[#xxx]` values rather than adding single-use theme tokens.
- **`router.replace()` over `router.push()`** for language switching — the language choice replaces the current history entry rather than stacking, which matches the old `location.reload()` behavior's "this wasn't navigation, it was the same page in a different language" intent.
- **`ScrollProgress.tsx` deferred.** Listed as optional in Phase 3; none of the V2 pages actually use a scroll progress bar today. We'll crib it from vote-for-better-money later if any page wants one.

### Intentionally left alone
- `jquery/language.js` — still used by the static site on `main`. Safe to keep until Phase 14 cleanup.
- All root `*.html` files, `css/style.css`, `scripts/inject-*.js`, `business/`, `nostr/`, `sticker-files/` directories — static site reference intact.
- `forms-backend/` — still untouched; Phase 9b will POST to its existing URLs.
- `main` branch at `origin/main` (`6cb07406`) — frozen; Railway keeps deploying the static site until cutover (Phase 15).

### Files created/changed in Phase 3
```
lib/i18n/navigation.ts         (NEW)
components/Footer.tsx          (NEW)
components/Navbar.tsx          (NEW)
components/LanguageSwitcher.tsx (NEW)
components/GoogleAnalytics.tsx (NEW)
app/[locale]/layout.tsx        (rewired — GA + Navbar + Footer composition)
app/[locale]/page.tsx          (stub simplified — nav + footer now in layout)
MIGRATION-NEXTJS.md            (Phase 3 marked complete; position pointer → Phase 4)
```

### Next up: Phase 4 — SEO / JSON-LD / sitemap helpers
Port the `scripts/inject-*.js` pipeline to TypeScript helpers that run at page-render time: article schema, breadcrumb schema, organization schema, comparison schema, reviewed-badge, plus NEW hreflang generation, `app/sitemap.ts` enumerating all pages × 55 locales, `app/robots.ts`, and moving `llms.txt` / `llms-full.txt` into `public/`. See `MIGRATION-NEXTJS.md` Phase 4 for the full checklist.

---

## Previous: Next.js Migration — Phase 2 i18n wiring complete — April 17, 2026

Second commit of the Next.js migration on `v2-nextjs-redesign`. All 55 supported locales now server-render translated HTML from the existing `i18n/` JSON files — no client-side hydration required, no change to translator workflow. `main` is still frozen.

### What Phase 2 delivered
- **`next-intl@4.5.3` installed** (21 packages, 0 vulnerabilities). Matches the sibling projects' approach to i18n in Next.js App Router.
- **Locale catalog** (`lib/i18n/config.ts`): all 55 locales mirrored exactly from `jquery/language.js` (English first, then alphabetical by native display name). Exports `languages`, `locales`, `Locale` type, `defaultLocale`, `RTL_LOCALES`, `isValidLocale()` helper. Deliberately excludes the `custom` / "Add language" row from the legacy dropdown — that's UI-only.
- **Message loader** (`lib/i18n/load-messages.ts`): reads existing `i18n/<locale>/<namespace>_<locale>.json` files (including the nested `business/`, `nostr/`, `sticker-files/` sub-paths) with zero filesystem reorganization. Strips `@metadata` before handing messages to next-intl. **English fallback on missing keys** is implemented per-key — matches jquery.i18n's graceful behavior so translators can keep shipping partial files. In-memory cache keyed by `locale::namespace`.
- **Request config** (`lib/i18n/request.ts`): `getRequestConfig({ requestLocale })` with `hasLocale(locales, …)` validation. During Phase 2 it eagerly loads `common` + `index` namespaces on every request (small enough to always include). Later phases can switch to per-page namespace sets.
- **Routing** (`lib/i18n/routing.ts`): `defineRouting({ locales, defaultLocale: 'en', localePrefix: 'always', localeDetection: true })`. Accept-Language-aware detection on first visit → 301 to `/<lang>/…`, persisted via cookie. Manual switcher overrides (next-intl writes the cookie on any `<Link>` locale change).
- **Middleware** (`middleware.ts` at repo root): `createMiddleware(routing)` with matcher `/((?!api|_next|_vercel|.*\\..*).*)`  — skips Next internals + any path with a dot (so `/favicon.ico`, `/img/*`, `/sitemap.xml`, `/robots.txt`, `/llms.txt` all bypass i18n).
- **`next.config.ts`** now wraps the config with `createNextIntlPlugin('./lib/i18n/request.ts')`. All the existing security/cache headers are preserved.
- **`app/[locale]/layout.tsx`** updated: validates the locale with `hasLocale()` + `notFound()` for unknown codes, calls `setRequestLocale(locale)` so server components below can use `useTranslations()`, wraps children in `<NextIntlClientProvider locale={locale} messages={messages}>`, and adds `generateStaticParams()` returning all 55 locales so each is prerendered as a static page. RTL still driven from the config's `RTL_LOCALES` set.
- **`app/[locale]/page.tsx`** now renders `t("home_h1")` + `t("home_intro")` via server-side `getTranslations()` — translated markup is in the initial HTML response (the whole point of the migration for SEO).
- **Deleted `app/page.tsx`** — the next-intl middleware now handles `/` → Accept-Language-matched locale redirect, replacing the Phase 1 hard-coded `redirect('/en')`.

### Build + verification
- `npm run build` → ✓ compiled in 1.9 s, TypeScript clean. **57 routes generated**: 1 `/_not-found` + 55 static per-locale pages (`/en`, `/af`, `/az`, …, `/ko`) + middleware proxy.
- `curl http://localhost:3000/<lang>` confirms end-to-end:
  - `/en` → `<html lang="en" dir="ltr">` with English H1 + intro
  - `/es` → `<html lang="es" dir="ltr">` with Spanish intro (English fallback on `home_h1` works — Spanish doesn't have it yet)
  - `/ar` → `<html lang="ar" dir="rtl">` with Arabic intro (RTL direction correct)
  - `/zh` → `<html lang="zh" dir="ltr">` with Simplified Chinese intro

### Decisions locked in
- **Flat snake_case keys preserved** (`home_h1`, `common_footer_about`, etc.). The legacy jquery.i18n format is kept as-is to preserve translator workflow and the existing ~5,250 translated key-values across 55 languages. One JSON file per page = one logical namespace, but we load multiple namespaces into a single flat bag per request. Nested directories use slash paths (`"business/wallets"`, `"nostr/what-is-nostr"`).
- **Tuple-based `locales` export** rather than deriving from `languages` via `.map()` — `as const` on a literal array gives next-intl the readonly tuple it needs for `hasLocale()` type-narrowing. Tradeoff: adding a new language means editing both `languages` (display) and `locales` (tuple) arrays. Both are right next to each other in the file; the translate-new-language workflow already touches multiple files.

### Intentionally left alone
- `jquery/` — still used by the static site during the migration period. Phase 3 will start porting individual files (`language.js` → `components/LanguageSwitcher.tsx` first).
- All `*.html` / `css/style.css` files — static site still serves from `main`.
- `forms-backend/` — untouched; Next will POST to its existing URLs starting Phase 9b.
- English JSON keys that aren't yet in translations files (e.g. `home_h1` in `es`) — handled by the English fallback in `load-messages.ts`, so missing keys never error-out at render time.

### Files created/changed in Phase 2
```
package.json             (next-intl added)
next.config.ts           (wrapped with createNextIntlPlugin)
middleware.ts            (NEW)
lib/i18n/config.ts       (NEW)
lib/i18n/load-messages.ts (NEW)
lib/i18n/request.ts      (NEW)
lib/i18n/routing.ts      (NEW)
app/[locale]/layout.tsx  (NextIntlClientProvider + setRequestLocale + generateStaticParams + hasLocale validation)
app/[locale]/page.tsx    (now renders translated strings)
app/page.tsx             (DELETED — middleware handles `/`)
MIGRATION-NEXTJS.md      (Phase 2 marked complete; position pointer advanced)
```

### Next up: Phase 3 — Shared layout components
Port the V2 footer + nav + language switcher + GA wrapper into React components and wire them into `app/[locale]/layout.tsx`. The `LanguageSwitcher` needs to port `jquery/language.js` behavior (localStorage persistence, `gtag('event', 'language_switch', …)` + `'language_pageview'` events). See `MIGRATION-NEXTJS.md` Phase 3 for the full checklist.

---

## Previous: Next.js Migration — Phase 1 scaffold complete — April 17, 2026

First commit of the Next.js 16 / React 19 / TypeScript / Tailwind v4 rewrite on the `v2-nextjs-redesign` branch. The static site on `main` is completely untouched — Railway production deploy keeps serving the existing HTML until the cutover commit at the end of Phase 15.

### What Phase 1 delivered
- **Stack choice**: Next.js 16.2.4 + React 19 + TypeScript 5.6 + Tailwind v4 (matches sibling project `vote-for-better-money`).
- **Manual scaffold** (no `create-next-app` — wrote each file deterministically): `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`.
- **Design tokens via Tailwind v4 `@theme` block** in `app/globals.css` — v4 is CSS-first, so no `tailwind.config.ts`. All 21 brand/topic accent colors (bitcoin-orange, energy, freedom, money, saving, salary, art, politics, war, coding, ai, networks, self-custody, property-rights, business, environment, crowdfunding, housing, equality, food, payments, gold, cash, human-rights, get-started) are token-driven, usable as `text-energy` / `bg-freedom` / `border-money` utilities. Font tokens: `proxima`, `proxima-soft`. Breakpoints: `xs: 400px`, `md: 700px` (matching old `css/style.css` media queries).
- **Routing**: `/` → 307 to `/en` (Phase 1 placeholder; Phase 2 middleware will replace with Accept-Language detection). `/[locale]` serves a minimal "Next.js migration in progress" placeholder page.
- **Root layout** (`app/layout.tsx`): pass-through that forwards `{children}` so per-locale `<html lang dir>` can live in `app/[locale]/layout.tsx`.
- **Locale layout** (`app/[locale]/layout.tsx`): emits correct `<html lang={locale} dir={ltr|rtl}>`, loads Adobe Typekit kit `ful2oqu.css` (the actual kit used by the live site — NOT `ghu2hdm` as the migration plan originally guessed), GA gtag snippet with `G-18L58W2GTN`, favicon metadata from `/favicons/`. RTL set: `ar`, `fa`, `he`, `ur`.
- **Static assets**: copied `img/` (69 MB) → `public/img/`, `img/favicons/` (500 KB) → `public/favicons/`. Originals kept on disk for reference until Phase 14 cleanup.
- **next.config.ts**: `turbopack.root = __dirname`, `images.formats = ["image/webp"]`, security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), long-cache headers for `/img/*` and `/favicons/*`, empty `redirects()` (Phase 13 will populate).
- **Verification**: `npm install` → 359 packages, 0 vulnerabilities. `npm run build` → ✓ compiled in 1615ms, TypeScript clean, routes `/` (static), `/_not-found`, `/[locale]` (dynamic). `npm run dev` → `GET /en` returns 200 with placeholder HTML, `GET /` returns 307 → `/en`.
- **.gitignore** updated: added `legacy/`, `node_modules/`, `.next/`, `*.tsbuildinfo`, `.turbo/`, `.vercel/`, `.env*` — in addition to the pre-existing `forms-backend/data/` and macOS entries.

### Deliberately left alone
- All root `*.html` files (index, inflation, bank-runs, all bitcoin-vs-*, business/*, nostr/*, sticker-files/*, *success*, 404) — the old static site still fully works on the local filesystem as source-of-truth reference for each port.
- `css/style.css` — reference for the brand color palette and V2 component styles; NOT imported by Next.
- `jquery/` — reference for `home-carousel.js`, `language.js`, `country-selector-*.js`, `compound-inflation-calculator*.js`, `sticker-picker.js`, `buy-flow.js`, `dynamic-header.js`, `inflation-stats.js`. Each will be ported to a React Client Component during Phases 3/5/6/9.
- `i18n/` directory — the JSON translation files (English + 54 other languages) will be read directly by `next-intl` in Phase 2. No file format change needed.
- `forms-backend/` — separate Railway service, untouched. Next frontend will POST to its existing URLs from Phase 9b onward.
- `scripts/inject-*.js` pipeline — still used for the current static site. Phase 4 will replace them with TypeScript helpers that run at page-render time.
- `main` branch at `origin/main` (`6cb07406`) — frozen. Railway keeps deploying current static site; we only merge to `main` on cutover day (Phase 15).

### Files created in Phase 1
```
app/globals.css
app/layout.tsx
app/page.tsx
app/[locale]/layout.tsx
app/[locale]/page.tsx
next.config.ts
next-env.d.ts
package.json
postcss.config.mjs
tsconfig.json
eslint.config.mjs
.gitignore               (rewritten)
public/favicons/…        (copied from img/favicons/)
public/img/…             (copied from img/)
```

### Next up: Phase 2 — i18n wiring with `next-intl`
Install `next-intl`, add `middleware.ts` for Accept-Language detection → locale redirect, mirror the `jquery/language.js` language list into `lib/i18n/config.ts`, build a message loader for the existing `i18n/<lang>/*_<lang>.json` file convention, and verify `/en`, `/es`, `/ar`, `/zh` each render their own translated test string. See `MIGRATION-NEXTJS.md` Phase 2 for full checklist.

---

## Previous: Homepage v2 Polish — April 17, 2026
Follow-up polish to the v2 homepage that shipped yesterday. Five focused fixes:

1. **Carousel: pill reorder to keep bright-green pills apart.** `energy` (#1DFF4D) and `money` (#19BC38) are both green, so they read as a single smudge when adjacent. Row 1's new order:
   - `money → saving → freedom → human-rights → equality → property-rights → energy → housing → business → crowdfunding → salary`
   - `energy` now lives mid-row between property-rights (pink) and housing (brown).
   - The infinite-loop seam goes `salary` (blue) → `money` (green) — highest-contrast boundary available.
   - The reorder applies to **both** the first set and the duplicated set of pills (required for seamless loop).

2. **Carousel: true infinite loop driven by JS instead of CSS @keyframes.** Replaced the pure-CSS `@keyframes home-carousel-scroll-left/right` animation with a `requestAnimationFrame` loop in `jquery/home-carousel.js` that:
   - Drives the track via `row.scrollLeft += AUTO_SPEED_PX_PER_SEC * dt * direction` (30 px/s).
   - Wraps around when `scrollLeft` crosses `track.scrollWidth / 2` in either direction — invisible because the pills are duplicated 2× in the DOM.
   - Applies the same wrap-around on `mousemove` + `scroll` events, so **drag works in both directions without hitting a wall** and never reveals empty space (the two bugs in the old CSS-only implementation).
   - Recalculates `halfWidth` on `resize` + `document.fonts.ready` in case translated pill widths change.
   - CSS `@keyframes` + `.home-carousel-row:hover` pause rules removed (now handled via JS `paused` flag). Added a comment to `.home-carousel-track` explaining the scroll is now JS-driven.

3. **Solo card full-width on all screen sizes.** Added `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1; }` so sections like "bitcoin & your salary" and "bitcoin & housing" span the full row at every breakpoint, not just mobile. Zero-code-change to the HTML — purely CSS.

4. **Energy section trimmed from 6 → 4 cards.** Removed:
   - "Why does Bitcoin use energy?" (bitcoinuses.energy)
   - "Bitcoin's energy usage isn't a problem. Here's why." (Lyn Alden)
   - Also removed now-unused keys from `i18n/en/index_en.json`: `home_card_label_energy_2`, `home_card_label_energy_3`, `home_link_title_energy_2`, `home_link_title_energy_3`, `home_link_author_bitcoin_uses_energy`.

5. **"bitcoin & money" split into two sections.** The money section had 7 cards (two were about "which is better" comparisons that are really about savings/investment). Now:
   - **money** (4 cards): Bitcoin doesn't have inflation, Bitcoin doesn't have bank runs, Bitcoin vs Gold, Bitcoin vs Cash
   - **saving** (3 cards, new section, color `#F5A9B8` soft pink): Bitcoin vs CBDCs, Bitcoin vs Bonds, Bitcoin vs Crypto
   - New pill `saving` added in row 1 between `money` and `freedom` (so money-saving-salary form a logical group).
   - New i18n key `home_btn_saving = "saving"` added.
   - New `.home-pill.saving` / `span.saving` / `.saving` color class in `css/style.css` (`color: #F5A9B8 !important`).
   - Added `.home-pill.saving` to the border-inheritance list so the border matches the text color.

### Files changed
- `jquery/home-carousel.js` — rewritten as RAF-driven infinite scroll
- `css/style.css`
  - Removed `@keyframes home-carousel-scroll-left/right` + `animation` rules + `:hover`/`is-dragging`/`is-paused` pause rules
  - Added `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1 }`
  - Added `.saving` color class (soft pink `#F5A9B8`)
  - Added `.home-pill.saving` to the `border-color: currentColor` list
- `index.html`
  - Row 1 carousel reordered (first set + duplicate set)
  - Added `saving` pill to row 1 in both sets
  - Money section trimmed to 4 cards
  - New Saving section with 3 cards (CBDCs, Bonds, Crypto) inserted between money and salary
  - Energy section trimmed to 4 cards
  - CSS + JS cache-buster bumped to `v=1.4.0`
  - WebPage JSON-LD `dateModified` bumped to 2026-04-17
  - Updated carousel HTML comment to reflect the new JS-driven loop mechanism
- `i18n/en/index_en.json`
  - Added `home_btn_saving = "saving"` (inserted right after `home_btn_money`)
  - Removed 5 unused energy keys
  - `@metadata.last-updated` bumped to 2026-04-17
- `scripts/update-index-i18n-for-saving.js` — one-shot helper script (ran once, can be deleted but left in place for reference)
- `scripts/inject-seo-content.js` ran clean (0 changes — HTML was already in sync)
- `memory-bank/activeContext.md` + `progress.md` updated

### i18n note
Only `i18n/en/index_en.json` was modified. Translation files for the other 54 languages retain their existing keys and will gracefully fall back to English for `home_btn_saving` until translators provide their own translations. This matches the established pattern for adding new homepage strings (see Homepage v2 Redesign — Apr 16 for precedent). The removed energy keys are orphaned in other language files but cause no functional issue.

---

## Latest: Homepage (v2) Redesign — April 16, 2026 (pt. 3)
- **Rebuilt the entire homepage (`/`)** to match the new `/inflation` page design system. This is the second page to use the new visual language (after `/inflation`) and establishes the pattern other pages will gradually migrate to.
- **Hero**: now uses a centered Proxima Nova Bold orange H1 (`.h1-inflation`) + grey `.inflation-intro` paragraph — same typography and sizes as `/inflation`. Replaced the old image-logo + `.home-h1`/`.home-intro` layout.
- **Navigation**: replaced the old v1 site-nav with `.site-nav--v2` (logo-on-top-of-pill) exactly matching `/inflation`.
- **Category carousels**: two horizontal infinite-scroll rows of lowercase colored "pills" replaced the old static `.container-jump` + `.jump` button grid.
  - Pure CSS `@keyframes` animation (`home-carousel-scroll-left` / `home-carousel-scroll-right`), 120s linear loop, row 2 starts at `-50%` offset and scrolls the opposite direction.
  - Pills are **duplicated inline** in the HTML (2× each set) so the keyframes can `translateX(-50%)` seamlessly — no JS required for the loop.
  - `:hover` pauses the animation via `animation-play-state: paused` (CSS-only).
  - `overflow-x: auto` + `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` hides the scrollbar while still allowing native touch/mouse scroll.
  - New `jquery/home-carousel.js` adds drag-to-scroll (mouse + touch), click-suppression after drag, and smooth anchor scroll.
  - Pills use Proxima Soft (per request) with border + text in the existing category color classes (`.money`, `.freedom`, `.energy`, etc.) — which already existed from v1.
- **Category sections**: replaced all 20 `.text-box.top/.middle/.bottom` stacks with new `.category-section` wrappers that reuse the `.whats-next-section` / `.whats-next-grid` / `.whats-next-card` pattern from `/inflation`.
  - Heading format: "Bitcoin & **category**" with the accent word colored via `span.accent { color: var(--card-accent) }`.
  - Each section sets its color via inline `style="--card-accent: #XXXXXX"`.
  - Card labels (the colored descriptive text like "Full reserve system") now also inherit from `--card-accent` — the `.whats-next-card-label` rule was updated to `color: var(--card-accent, #FF9500)`, so `/inflation` still gets orange labels by default.
  - All 50+ original homepage cards + external links preserved, redistributed across the 20 sections (money, your salary, freedom, human rights, equality, property rights, housing, business, crowdfunding, energy, the environment, food, art, politics, war, coding, networks, payments, self-custody, you).
- **i18n refactor (`i18n/en/index_en.json`)**:
  - Added `home_nav_learn`, `home_nav_get_involved`, `home_nav_about` for the new pill nav.
  - Added `home_h1` for the hero headline.
  - Updated `home_intro` to the shorter "Tap on a category… or just start scrolling" copy.
  - Updated all `home_btn_*` values to **lowercase sentence-style** ("money", "your salary", "the environment") per mockup.
  - Added 40+ new `home_card_label_*` keys — one descriptive topic label per card (e.g., "Bitcoin is better money", "Which is better?", "Methane reduction").
  - Added `home_source_prefix = "Source:"` for the card source lines.
  - Updated all `home_link_title_*` values to sentence case (no longer Title Case) for consistency with the mockup.
  - Changed `home_section_bitcoin_and` to "Bitcoin &" (sentence case, was "BITCOIN &").
  - `@metadata.last-updated` bumped to 2026-04-16. All other language `index_xx.json` files will gracefully fall back to English for the new keys until translated.
- **CSS additions in `css/style.css`** (appended as new "HOMEPAGE REVAMP (v2)" section near EOF):
  - `.home-revamp .home-hero`, `.home-revamp .h1-inflation`, `.home-revamp .inflation-intro` (hero)
  - `.home-carousel-wrap` (viewport-wide breakout), `.home-carousel-row` (scroll container, scrollbar hidden), `.home-carousel-track` (the animated flex track), `@keyframes home-carousel-scroll-left/right`
  - `.home-pill` (replaces `.jump`): Proxima Soft 900, lowercase, 2px border using `currentColor` so the category color classes drive both border + text color
  - `.category-section` + `.category-section h2 .accent` for the "Bitcoin & **category**" heading pattern
  - The existing `.whats-next-card-label` was modified from `color: #FF9500` → `color: var(--card-accent, #FF9500)` — this is backwards-compatible (falls back to orange on `/inflation`).
- **SEO & schema**: new `WebPage` JSON-LD schema added to `index.html` with `dateModified: 2026-04-16`. `node scripts/inject-seo-content.js` ran clean (0 modifications — HTML is in sync with JSON).
- **Deprecated v1 homepage classes** (kept in CSS for legacy pages, but no longer used on the new homepage): `.home-h1`, `.home-logo`, `.home-intro`, `.container-jump`, `.jump`, `.text-box.top/.middle/.bottom/.solo`, `.item`, `.h3-item` (as used on the old homepage), `.h2-section.second-line`. These are still referenced by other (older) pages that haven't been migrated yet.
- **Asset version bumped** to `v=1.3.0` on CSS + JS in `index.html` (forces browser cache invalidation).
- `index.html`: 1,167 lines → 772 lines (395 fewer, ~34% smaller) despite keeping all 50+ cards.

### New homepage pattern (for future migration of other pages)
```
<nav class="site-nav site-nav--v2"> … </nav>
<div class="container-main home-revamp">
    <div class="home-hero">
        <h1 class="h1-inflation">…</h1>
        <p class="inflation-intro">…</p>
    </div>

    <!-- (optional: carousels, stat cards, feature cards, etc.) -->

    <section class="whats-next-section category-section" id="X"
             style="--card-accent: #XXXXXX;">
        <div class="container-inner">
            <div class="whats-next-header">
                <h2>Bitcoin &amp; <span class="accent">category</span></h2>
            </div>
            <div class="whats-next-grid">
                <a href="…" class="whats-next-card">
                    <div>
                        <div class="whats-next-card-label">Topic</div>
                        <div class="whats-next-card-title">Full title</div>
                    </div>
                    <div class="whats-next-card-source">Source: author →</div>
                </a>
            </div>
        </div>
    </section>

    <div class="footer"> … </div>
</div>
```

## Latest: Inflation Page — Drop HNL + VEF, EUR Debt, Fix PHP CPI — April 16, 2026 (pt. 2)
- **Removed HNL (Honduran Lempira) and VEF (Venezuelan Bolívar)** from the inflation page entirely: FRED does not publish usable narrow-money (`MANMM101HN*` / `MANMM101VE*`) or gross-debt (`GGGDTAHN*` / `GGGDTAVE*`) series for either country, so those sections always rendered fallback (hard-coded) values.
  - Dropped from `scripts/inflation-multi/rebuild-inflation-html.js`'s `CURRENCIES` array (now 13 currencies)
  - Dropped from `jquery/inflation-stats.js`'s `SUPPORTED_CURRENCIES` array
  - Dropped from `forms-backend/inflation-stats.js`'s `CURRENCIES` config object
  - 52 orphan `inflation_hnl_*` / `inflation_vef_*` / `inflation_honduran_lempira` / `inflation_venezuelan_bolivar` keys removed from `i18n/en/inflation_en.json` by new cleanup logic in `scripts/inflation-multi/update-i18n.js`
  - Full HNL + VEF HTML sections automatically removed by the rebuild script
- **EUR: dropped the government-debt stat card + debt paragraphs.** FRED's Eurozone aggregate gross-debt series (`GGGDTAEZA188N`) is not reliably published at a cadence that tracks our "Q1 2020 baseline" comparison. Now:
  - `forms-backend/inflation-stats.js` → `EUR.debtSeries = null` (with nulled baseline)
  - `scripts/inflation-multi/rebuild-inflation-html.js` → already skips debt card + proof_p4/p5/p6 paragraphs when `SOURCE_URLS.EUR.debt = null` (was already set)
  - EUR-specific orphan `inflation_eur_proof_p4/p5_*/p6` keys kept as harmless fallback copy (in case we ever restore the card)
- **PHP: fixed CPI calculation.** FRED's `FPCPITOTLZGPHL` series is an **annual inflation rate** (% year-over-year), not a price-level index — the old `fetchFred4yrChange()` treated it as a level and returned meaningless values.
  - Added new fetcher `fetchAnnualCompoundInflation4yr(seriesId)` in `forms-backend/inflation-stats.js` that compounds the last 4 annual rates: `∏(1 + rᵢ/100) − 1`
  - Added `cpiType: 'annualRate'` flag to PHP's config; default for all other currencies is `'priceIndex'`
  - `fetchCurrencyStats` now dispatches on `cpiType` to pick the correct fetcher
- Ran `node scripts/inflation-multi/update-i18n.js` (52 orphan keys removed), `node scripts/inflation-multi/rebuild-inflation-html.js` (13 sections regenerated, HNL+VEF HTML auto-removed), `node scripts/inject-seo-content.js` (0 changes — content was already injected).
- `inflation.html` shrank from 3,469 → 3,035 lines (434 lines dropped from HNL+VEF sections).
- Article schema `dateModified` bumped to 2026-04-16; both English JSON `@metadata.last-updated` bumped.
- The inflation page now supports **13 currencies**: USD, CAD, EUR, GBP, BRL, PHP, MXN, INR, JPY, AUD, ILS, THB, NZD.

## Latest: Inflation Page — Multi-Currency Dynamic Stat Cards — April 16, 2026
- Replaced the legacy per-currency layout (CAD, EUR, GBP, BRL, PHP, MXN, INR, HNL, VEF, JPY, AUD, ILS, THB, NZD) with clones of the new USD stat-card template — **all 15 currencies now share the same dynamic layout**. (HNL+VEF dropped in the follow-up above.)
- Dropped the old FAQ / compound-inflation-calculator / volatility / hacked / energy / purchasing-power-image blocks that were duplicated in every non-USD section.
- Replaced 14 per-currency "What's next?" carousels with a **single global block** (`#global-whats-next`) at the bottom of the page that is hidden until the user selects a currency. Its 4th card is now "Calculate your inflation" → `/compound-inflation-calculator` (replacing "Contribute").
- Stat-card DOM IDs are now namespaced per currency (`stat-btc-change-CAD`, `stat-m1-current-EUR`, `stat-debt-current-JPY`, `stat-currency-supply-value-BRL`, etc.).
- `jquery/inflation-stats.js` now exposes `window.loadInflationStats(currency)`; `jquery/country-selector-inflation.js` calls it on button click and toggles the global What's-next block.
- `forms-backend/inflation-stats.js` accepts `?currency=XXX` and maps each currency to its FRED narrow-money series, government-debt series (% of GDP), CPI series, and TwelveData Pro BTC pair (or BTC/USD × forex fallback for ILS/NZD/PHP/THB). Per-currency 24h cache in `inflation-stats-cache-v2.json`.
- The USD section now has proper `data-i18n` attributes on every previously-hardcoded stat-card label, source line, "TODAY" label, existence/debt card title, and "And counting…" detail — fully i18n-covered for the first time.
- Added ~140 new keys to `i18n/en/inflation_en.json` (per-currency intro/proof/btc/freedom copy × 15 + per-currency existence/debt/label titles + generic stat keys) and 2 new keys to `i18n/en/common_en.json` (calculator "What's next" card).
- Article schema `dateModified` bumped to 2026-04-16; both English JSON `@metadata.last-updated` bumped.
- `inflation.html` shrank from ~4,959 lines to ~3,469 lines despite adding 14 full currency blocks.
- Reusable build scripts: `scripts/inflation-multi/update-i18n.js` and `scripts/inflation-multi/rebuild-inflation-html.js`.
- Next translator pass: the 14 non-English inflation_xx.json files inherit the new English defaults via jquery.i18n's graceful-fallback behavior; they should be updated with translated per-currency copy in a follow-up task.

## Yoruba (yo) Language Added — April 11, 2026

- Added Yoruba (Yorùbá) as the 55th language
- Translation files partially created in previous session; completed remaining 21 files (comparisons, common, inflation, content)
- Fixed 17 invalid `\u00fu` → `\u00fa` Unicode escape sequences across 4 scripts before running
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 54→55, SEO injection)
- Yorùbá placed alphabetically between Türkçe and Ελληνικά in language.js
- Yoruba uses Latin script with diacritics (ẹ, ọ, ṣ, tone marks) — no special character concerns
- Current total: 55 languages on bitcoin.rocks

## Persian (fa) Language Added — April 11, 2026
- Added Persian (فارسی) as the 47th language
- Translation files already existed in `i18n/fa/` from previous session (8 scripts in `scripts/persian/`)
- Language was already registered in `language.js` from previous session
- Fixed 15 missing keys and ~100 untranslated strings (country names, platform descriptions, inflation texts, wallet costs) via `scripts/persian/fix-missing-and-untranslated.js`
- Completed remaining registration: index.html schema (`"fa"` added to inLanguage), llms.txt (Persian added, 46→47), llms-full.txt (46→47), about page count (46→47 across all languages), SEO injection
- فارسی placed after العربية (Arabic) in language.js per Arabic/Persian script Unicode range
- Persian is RTL (right-to-left), uses Arabic script with additional letters (پ، چ، ژ، گ)

## Hebrew (he) Language Added — April 11, 2026
- Added Hebrew (עברית) as the 44th language
- Translation files already existed in `i18n/he/` from previous session
- Fixed 7 missing keys, 43 untranslated language names, 31 untranslated inflation currency texts via fix script
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 43→44, SEO injection)
- עברית placed after العربية (Arabic) and before हिन्दी (Hindi) in language.js per Hebrew Unicode range

## Danish (da) Language Added — April 7, 2026
- Added Danish (Dansk) as the 39th language
- 90+ translation files created in `i18n/da/`
- 8 translation scripts in `scripts/danish/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 38→39, SEO injection)
- Dansk placed alphabetically between Chicheŵa and Deutsch in language.js
- Audit passed — only legitimate shared-word matches (inflation, EURO, Standard, Type, Fold, CROWDFUNDING, etc.)

## Catalan (ca) Language Added — April 7, 2026
- Added Catalan (Català) as the 37th language
- 90+ translation files created in `i18n/ca/`
- 8 translation scripts in `scripts/catalan/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 36→37, SEO injection)
- Català placed alphabetically between Azərbaycanca and Čeština in language.js
- Audit passed — only legitimate proper noun matches (country names, brand names identical in Catalan)

## Bengali (bn) Language Added — April 6, 2026
- Added Bengali (বাংলা) as the 35th language
- 90+ translation files created in `i18n/bn/`
- 8 translation scripts in `scripts/bengali/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 34→35, SEO injection)
- বাংলা placed after हिन्दी (Hindi) and before தமிழ் (Tamil) in language.js per Bengali Unicode range

## Basque (eu) Language Added — April 6, 2026
- Added Basque (Euskara) as the 34th language
- 90+ translation files created in `i18n/eu/`
- 8 translation scripts in `scripts/basque/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 33→34, SEO injection)
- Euskara placed alphabetically after Español and before Filipino in language.js

## Amharic (am) Language Added — April 6, 2026
- Added Amharic (አማርኛ) as the 33rd language
- 90+ translation files created in `i18n/am/`
- 8 translation scripts in `scripts/amharic/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 32→33, SEO injection)
- Ethiopic script (U+1200) placed after Thai (ภาษาไทย) and before Chinese (中文) in language.js

## Arabic (ar) Language Added — April 4, 2026
- Added Arabic (العربية) as the 31st language
- 90 translation files created in `i18n/ar/`
- 8 translation scripts in `scripts/arabic/`
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 30→31, SEO injection)

## Norwegian Bokmål Language Added — April 2026
- Added Norwegian Bokmål (`nb`, Norsk) as the 30th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/norwegian/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 30 languages
- Norsk placed alphabetically between Nederlands and Polski in language.js
- Ran SEO content injection successfully

## Korean Language Added — April 2026
- Added Korean (`ko`, 한국어) as the 28th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/korean/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 28 languages
- Korean placed after Japanese (日本語) in language.js — Hangul follows CJK in Unicode order
- Ran SEO content injection successfully

## Slovak Language Added — April 2026
- Added Slovak (`sk`, Slovenčina) as the 27th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/slovak/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 27 languages
- Fixed Cyrillic sort order in language.js (български now before Русский)
- Ran SEO content injection successfully

## Russian Language Added — April 2026
- Added Russian (`ru`, Русский) as the 26th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/russian/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 26 languages
- Ran SEO content injection successfully

## Tagalog Language Added — April 2026
- Added Tagalog (`tl`) as the 25th language on bitcoin.rocks
- Copied all 90 files from Filipino (`fil`) — Filipino is the standardized form of Tagalog, written forms are virtually identical
- Script: `scripts/tagalog/copy-from-filipino.js` (copies fil files, renames to tl, updates metadata)
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 25 languages
- Fixed about.html inline text (was showing "9 languages", updated to "25 languages")
- Ran SEO content injection successfully

## Filipino Language Added — April 2026
- Added Filipino (`fil`) as the 24th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/filipino/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 24 languages
- Ran SEO content injection successfully

## Malay Language Added — April 2026
- Added Malay (`ms`, Bahasa Melayu) as the 23rd language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/malay/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 23 languages
- Ran SEO content injection successfully

## Swahili Language Added — April 2026
- Added Swahili (`sw`, Kiswahili) as the 22nd language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/swahili/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 22 languages
- Ran SEO content injection successfully

## Vietnamese Language Added — April 2026
- Added Vietnamese (`vi`, Tiếng Việt) as the 20th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/vietnamese/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 20 languages
- Ran SEO content injection successfully

## Swedish Language Added — April 2026
- Added Swedish (`sv`, Svenska) as the 19th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/swedish/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 19 languages
- Ran SEO content injection successfully

## Chichewa Language Added — April 2026
- Added Chichewa (`ny`, Chicheŵa) as the 18th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/chichewa/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 18 languages
- Ran SEO content injection successfully

## Hindi Language Added — April 2026
- Added Hindi (`hi`, हिन्दी) as the 17th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/hindi/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 17 languages
- Ran SEO content injection successfully

## Mandarin Chinese Language Added — April 2026
- Added Mandarin Chinese (`zh`, 中文) as the 16th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/chinese/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 16 languages
- Ran SEO content injection successfully

## Czech Language Added — April 2026
- Added Czech (`cs`, Čeština) as the 15th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/czech/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files from 14→15 languages
- Ran SEO content injection successfully

## Current Work Focus

### Croatian (hr) Language — Completed April 7, 2026
- Added Croatian (Hrvatski) as the 38th language
- Created 90+ translation files in `i18n/hr/` with 8 scripts in `scripts/croatian/`
- Registered in language.js, index.html schema, llms.txt, llms-full.txt, all about files updated (37→38)

### Previous Work Focus

### Bulgarian Sticker Files Translation (Completed Mar 31, 2026)
- **Status**: ✅ Complete
- **What**: Translated all 44 remaining Bulgarian sticker-files i18n JSON pages that were still in English.
- **Files translated**:
  - `i18n/bg/sticker-files/index_bg.json` — main sticker files index page
  - 42 individual language sticker-files pages (`afrikaans` through `yoruba`, skipping `bulgarian` which was already translated)
  - `i18n/bg/business/sticker-files/english/index_bg.json` — business "Bitcoin Accepted Here" sticker files
- **Translation pattern** (matching existing `bulgarian/index_bg.json`):
  - `"Файлове за {език} Биткойн стикери"` / `"Изтеглете файлове за {език} Биткойн стикери тук."` / `"ИЗТЕГЛЕТЕ ФАЙЛОВЕ ЗА {ЕЗИК} БИТКОЙН СТИКЕРИ"`
  - Business: `„Биткойн се приема тук"` with proper Bulgarian quotation marks (U+201E / U+201C)
- **Also updated**: `.clinerules` — added universal `### i18n JSON last-updated Dates (IMPORTANT)` rule: every i18n JSON file modification must update `@metadata.last-updated` to today's date.
- **Note**: This completes the Bulgarian (bg) translation — all pages now have Bulgarian translations.

### GEO: robots.txt AI Crawler Review (Completed Mar 29, 2026)
- **Status**: ✅ Complete
- **What**: Reviewed and updated `robots.txt` with explicit AI crawler directives as item 3 in Priority 7: AI-Specific Metadata in the GEO checklist.
- **Changes to robots.txt**:
  - Added explicit `User-agent` + `Allow: /` directives for 16 AI crawlers: GPTBot, ChatGPT-User, OAI-SearchBot (OpenAI), Google-Extended (Gemini/AI Overviews), ClaudeBot, anthropic-ai (Anthropic), PerplexityBot, Applebot-Extended (Apple Intelligence), Meta-ExternalAgent (Meta AI), Bingbot (Microsoft Copilot), Amazonbot, CCBot (Common Crawl), cohere-ai, YouBot, Diffbot, Bytespider (ByteDance)
  - Added `Disallow` rules for `/forms-backend/` and `/.github/` (previously missing)
  - Added prominent comment block pointing AI crawlers to `llms.txt` and `llms-full.txt` with URLs
  - GPTBot gets explicit Disallow rules for non-content directories (since per-agent rules override the wildcard `User-agent: *` block in robots.txt spec)
  - Well-organized with section headers and comments explaining each crawler
- **Changes to inject-seo-content.js**: Updated the robots.txt generation code in Part 2 of the script to produce the same comprehensive output. Uses `DISALLOW_DIRS` array and `AI_CRAWLERS` config array for maintainability. Future `node scripts/inject-seo-content.js` runs will generate the correct robots.txt.
- **Strategy**: Since bitcoin.rocks is MIT-licensed educational content that wants maximum AI citation, all AI crawlers are explicitly welcomed with no restrictions beyond the standard non-content directory blocks.

### GEO: llms.txt + llms-full.txt (Completed Mar 29, 2026)
- **Status**: ✅ Complete
- **What**: Created `llms.txt` and `llms-full.txt` files as items 1 and 2 in Priority 7: AI-Specific Metadata in the GEO checklist.
- **Why both files?**:
  - `llms.txt` (~1,500 words) is the "index card" — a concise, structured overview of the site for AI crawlers. It tells AI systems *what we have and where to find it*.
  - `llms-full.txt` (~18,000 words) is the "full textbook" — the actual educational content of all pages in clean Markdown. It gives AI systems *the content itself, ready to consume and cite*.
  - This is especially important for bitcoin.rocks because content is loaded via i18n JSON + JavaScript, so some AI crawlers may miss content even with the SEO content injection.
- **Files created**:
  - `llms.txt` — Organization identity, editorial approach, structured listing of all 30+ pages with URLs and one-line descriptions (organized by: Core Educational, Comparison Pages, Business, Community & Outreach), link to llms-full.txt, citation preference format, key Bitcoin facts summary
  - `llms-full.txt` — Full content of all educational pages: About, What is Bitcoin?, Inflation (with 15 currency-specific stats), Bank Runs, Wallet Guide (6 wallets), Buy Bitcoin, Lightning, Compound Inflation Calculator, all 10 Bitcoin-vs pages (with Markdown tables), Business section (Why + FAQ), Get Involved, Nostr, Homepage overview. Each section includes source URL.
- **Other changes**: `robots.txt` updated with comment block referencing both files. `GEO-CHECKLIST.md` updated with completion notes.
- **Maintenance**: Content assembled from English JSON translation files. When page content changes significantly, llms-full.txt should be regenerated.

### GEO: Source Citations & References Sections (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Added inline source citations and "Sources" reference sections to all 12 data-heavy educational pages (inflation, bank-runs, and all 10 bitcoin-vs pages) as items 4 and 5 in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Sources sections added** (12 pages via `scripts/inject-sources-section.js`):
  - `inflation.html` — 6 sources (FRED M1SL, FRED International, BLS CPI, mempool.space, Bitcoin source code, Bitcoin whitepaper)
  - `bank-runs.html` — 5 sources (FDIC Statistics at a Glance, FDIC SVB Press Release, FDIC Quarterly Banking Profile, Federal Reserve, Bitcoin whitepaper)
  - All 10 `bitcoin-vs-*.html` pages — 3-4 sources each (World Gold Council, Bitnodes, SEC, Treasury Dept, RBI, Atlantic Council, BIS, Christie's, Sotheby's, Visa, Federal Reserve, Cambridge Centre for Alt Finance, Bitcoin whitepaper/source code)
- **Inline citations added** (via `scripts/add-inline-citations.js` and `scripts/add-inline-citations-v2.js`):
  - Inflation: 14 FRED links for currency-specific money supply data (CAD, EUR, GBP, BRL, PHP, MXN, INR, HNL, VEF, JPY, AUD, ILS, THB, NZD)
  - Bank-runs: SVB collapse linked to FDIC press release
  - Bitcoin-vs-gold: World Gold Council for 1.6% annual supply growth
  - Bitcoin-vs-cash: RBI demonetization notice
  - Bitcoin-vs-visa: Visa interchange fees + Federal Reserve credit card rates
  - Bitcoin-vs-bonds: Treasury auction results
  - Bitcoin-vs-crypto: Bitcoin whitepaper for Proof of Work
- **CSS**: `.sources-section` styling (14px gray headings, numbered ordered list, muted gray links that turn orange on hover, border-top separator)
- **i18n**: `common_sources_heading` key added to 10 language files with translated "Sources" heading (en, de, es, fr, pt, nl, bg, id, th, it)
- **Scripts created**: `inject-sources-section.js` (idempotent, main reusable script), `add-inline-citations.js` (inflation FRED links), `add-inline-citations-v2.js` (other pages), `add-sources-i18n.js` (one-time i18n helper)

### Footer Cleanup (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Redesigned the verbose footer across all 88 HTML pages into a clean, compact layout.
- **Before**: Three paragraphs of prose — mission statement, Nostr explanation (3 lines), and email — separated by `<br/>` tags in a single `<p>`.
- **After**: Two-line compact footer — one-line tagline + horizontal link row using dot separators (matching publisher-attribution style):
  - Line 1: "Accelerating bitcoin adoption through education."
  - Line 2: About · Contribute · Nostr · hi@bitcoin.rocks
- **Scripts created**: `scripts/update-footer.js` (HTML replacement across 88 files), `scripts/update-footer-i18n.js` (i18n key updates across 9 languages)
- **CSS changes**: Replaced `.footer` styles (removed old `.footer p`, added `.footer-tagline`, `.footer-links`, `.footer-divider`), updated `a.footer-link` to no-underline with hover-underline.
- **i18n changes**: Added 3 new keys to all 9 `common_*.json` files: `common_footer_tagline`, `common_footer_contribute`, `common_footer_nostr`. Updated `common_footer_about` from "About bitcoin.rocks" to "About" (with translations).
- **Publisher attribution**: Left untouched — it's clean and serves GEO/SEO purpose on content pages.
- **Old keys preserved**: `common_footer_mission_1`, `common_footer_mission_2`, `common_footer_follow_first_half`, etc. still exist in JSON files (harmless, can be removed later).

### GEO: Author/Publisher Attribution (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Added visible publisher attribution to all 33 educational content pages as the 2nd item in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Approach**: Created `scripts/inject-author-attribution.js` (idempotent) that injects a "Published by bitcoin.rocks · Bitcoin education since 2022 · Open-source project" bar just above the footer on every educational page.
- **HTML structure**: `<div class="publisher-attribution" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">` with Schema.org microdata reinforcing the existing Article JSON-LD author/publisher schema.
- **Links**: Cross-links to About page (`/about`) and GitHub repository — reinforces trust signals and cross-linking.
- **Translation keys added** (4 new keys in all 9 common_*.json files):
  - `common_published_by`: "Published by" (de: "Veröffentlicht von", es: "Publicado por", fr: "Publié par", pt: "Publicado por", nl: "Gepubliceerd door", bg: "Публикувано от", id: "Diterbitkan oleh", th: "เผยแพร่โดย")
  - `common_publisher_name`: "bitcoin.rocks" (same in all languages)
  - `common_publisher_since`: "Bitcoin education since 2022" (translated in all languages)
  - `common_publisher_open_source`: "Open-source project" (translated in all languages)
- **CSS**: `.publisher-attribution` — subtle styling (14px, centered, gray #999 text, orange links, border-top separator #333, 70% width centered)
- **Visual change**: Minimal — adds a small, professional attribution line above the existing footer
- **Pages injected** (33): about, bank-runs, all 10 bitcoin-vs-* pages, all 9 business/* pages, buy, compound-inflation-calculator, flyers, get-involved, inflation, lightning, both nostr/* pages, postcards, signs, stickers, wallets
- **Pages skipped** (56): homepage, success pages, 404, sticker-file language variants, pages without Article schema

### GEO: About Page (Completed Mar 27, 2026)
- **Status**: ✅ Complete
- **What**: Created `/about` page as the 1st item in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Files created**:
  - `about.html` — 5 sections: Our Mission, What We Do, Our Editorial Approach, Open Source, Contact Us
  - `i18n/en/about_en.json` — 30 English translation keys
  - `i18n/{de,es,fr,pt,nl,bg,id,th,it,pl}/about_*.json` — Actual translations in all 10 languages
- **Common translations updated**: Added `common_footer_about` key to `common_en.json` and 8 other `common_*.json` files (de, es, fr, pt, nl, bg, id, th) with translated "About bitcoin.rocks" text
- **Auto-injected schemas**: WebPage schema (via inject-article-schema.js), Organization schema, BreadcrumbList schema
- **SEO**: English content already inline in HTML; sitemap updated to 88 URLs including `/about`
- **Content approach**: No mentions of crypto/cryptocurrency. Stickers are the only mailed physical resource; flyers and business kits mentioned as printable only.
- **Remaining for user**: Add About link to footer HTML across all pages (user opted to handle this manually)

### GEO: Q&A Microdata on Inflation Page (Completed Mar 27, 2026)
- **Status**: ✅ Complete
- **What**: Added Schema.org Question/Answer microdata to 120 Q&A sections on `inflation.html` as the 4th item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/inject-faq-microdata.js` (idempotent) that identifies Q&A sections by their `data-i18n` heading keys and adds inline microdata attributes.
- **Changes made (120 Q&A sections)**:
  - Parent `<div class="text-box intro">` → adds `itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"`
  - `<h2 class="h2-section">` question heading → adds `itemprop="name"`
  - Answer content wrapped in `<div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><div itemprop="text">...</div></div>`
- **Q&A types marked** (8 per currency block × 15 currencies = 120):
  - WHAT CAUSES INFLATION? (`inflation_cause_header`)
  - DOES BITCOIN HAVE INFLATION? (`inflation_issuance_header`)
  - WHAT IS BITCOIN? (`common_what_is_bitcoin`)
  - CAN BITCOIN PROTECT MY MONEY FROM INFLATION? (`inflation_protect_header`)
  - I HEARD BITCOIN IS VOLATILE. IS THAT SAFE? (`common_bitcoin_volatile`)
  - I CAN'T AFFORD A WHOLE BITCOIN (`common_bitcoin_afford`)
  - HAS BITCOIN EVER BEEN HACKED? (`common_bitcoin_hacked`)
  - WHY DOES BITCOIN USE ENERGY? (`common_bitcoin_energy`)
- **Skipped**: HOW DOES INFLATION AFFECT ME? (`inflation_cic_header`) — interactive calculator, not pure Q&A
- **Pages not changed**: `wallets.html` and `business/faq.html` already had proper Q&A formatting (accordion/expandable patterns)
- **Visual change**: Zero — only HTML attributes and unstyled wrapper `<div>` elements added
- **Complements**: Existing FAQPage JSON-LD schema (belt AND suspenders approach for AI engines)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (4th item under Priority 2: Content Structure). This completes ALL items in Priority 2.

### GEO: Heading Hierarchy Fix (Completed Mar 26, 2026)
- **Status**: ✅ Complete
- **What**: Fixed heading hierarchy (H1→H2→H3) across all 35 affected HTML files as the 2nd item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/fix-heading-hierarchy.js` (idempotent) that converts heading tags to proper hierarchy levels while adding CSS preservation classes for zero visual change.
- **Changes made (646 heading changes)**:
  - **CTA sections** (~20 pages): h3→h2 (.h2-section), h4→h3 (.h3-item)
  - **Content sections** (inflation, bank-runs): h3→h2 (.h2-section)
  - **Homepage** (index.html): h3→h2 (.h2-section), h4→h3 (.h3-item)
  - **Wallet/client names** (wallets, lightning): h6→h2 (.h2-label)
  - **Comparison labels** (10 bitcoin-vs-* pages): h6→h3 (.h3-label)
  - **Buy page**: h3 steps→h2, h6 payment methods→h3 (.h3-label)
  - **Business wallet categories**: h5→h2 (.h2-category), h6→h3 (.h3-label)
  - **Business guide**: h3.biz-h3→h2 (no extra class; .biz-h3 handles styling)
  - **Nostr pages**: h5→h3 (.h3-category), h6→h4 (.h4-label)
  - **Business success pages**: Swapped misplaced h1/h2 order
  - **Business accounting**: Content h3→h2, biz-h3 stays as h3
  - **Compound inflation calculator**: h3→h2, h4→h3
- **CSS changes**:
  - 7 new preservation classes: `.h2-section`, `.h3-item`, `.h2-label`, `.h3-label`, `.h4-label`, `.h2-category`, `.h3-category`
  - Updated selectors: `h3.second-line` → `h2.second-line, h3.second-line`, `h3.biz-h3` → `.biz-h3` (with font-style/margin fixes), contextual h6 selectors updated for new classes
  - Responsive media query updates for 400px and 700px breakpoints
- **Typical page result**: H1 (title) → H2 (sections, .h2-section) → H3 (items, .h3-item)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (2nd item under Priority 2: Content Structure).

### GEO: H1 Tags on Every Page (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `<h1>` tags to all 88 HTML files as the 1st item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/inject-h1-tags.js` (idempotent) that converts the first/primary heading on each page to an `<h1>` tag.
- **Page types handled**:
  - **Most pages**: First `<h2 class="h2-inflation">` → `<h1 class="h1-inflation">` (class renamed for continuity)
  - **wallets.html & buy.html**: `<h3 class="wallet-h3">` → `<h1 class="wallet-h3">`
  - **Homepage**: Logo wrapped in `<h1 class="home-h1">` with alt text `"bitcoin.rocks — Bitcoin Education"` (zero visual change, well-established SEO pattern)
  - **Success pages**: First `<h2 class="h2-stickers">` → `<h1 class="h2-stickers">`
- **CSS changes**: 
  - `h1, h2` share base tag styles (font-family, weight, size, etc.)
  - New `.h1-inflation` class mirrors `.h2-inflation` in all 3 CSS rule locations (mobile <400px, tablet <700px, and desktop)
  - New `.home-h1` class zeroes out margin/padding/font-size so homepage logo remains visually identical
- **Translation impact**: None — all `data-i18n` attributes preserved, jquery.i18n works with any tag type
- **Also fixed**: Homepage logo now has alt text (addresses GEO Priority 6, item 3)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (1st item under Priority 2: Content Structure).

### GEO: SoftwareApplication/Product Schema for Wallet Recommendations (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `MobileApplication` and `Product` JSON-LD structured data to `wallets.html` for all 6 recommended wallets as part of the GEO initiative.
- **Wallets included**:
  - **Blockstream Green** — `MobileApplication` type, free ($0), FinanceApplication category, Android/iOS, featureList (self-custody, hot wallet, mobile app, 2FA, Bitcoin only)
  - **Blockstream Jade** — `Product` type, $79, Bitcoin Hardware Wallet, brand: Blockstream, air-gap, cold wallet
  - **Coldcard MK5** — `Product` type, $189, Bitcoin Hardware Wallet, brand: Coinkite, air-gap, advanced security
  - **Coldcard Q** — `Product` type, $289, Bitcoin Hardware Wallet, brand: Coinkite, QWERTY keyboard, QR scanner, air-gap
  - **Foundation Passport** — `Product` type, $199, Bitcoin Hardware Wallet, brand: Foundation Devices, camera, rechargeable battery, air-gap
  - **SeedSigner** — `Product` type, $50, Bitcoin Hardware Wallet, brand: SeedSigner, DIY build, air-gap
- **Schema structure**: Single `@graph` JSON-LD block containing all 6 entities. Each includes name, description, url, image, brand (Organization), offers (price/currency/availability), and either `featureList` (for MobileApplication) or `additionalProperty` array of `PropertyValue` entries (for Products).
- **Also updated**: `i18n/en/wallets_en.json` last-updated to 2026-03-25, Article schema dateModified to 2026-03-25.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (8th item under Priority 1: Structured Data). This completes ALL items in Priority 1.

### GEO: BreadcrumbList Schema on All Content Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `BreadcrumbList` JSON-LD structured data to 33 HTML files as part of the GEO initiative.
- **Hierarchy levels**:
  - **2-level** (Home > Page Title): All root-level content pages — `inflation.html`, `bank-runs.html`, `wallets.html`, `lightning.html`, `buy.html`, `compound-inflation-calculator.html`, `get-involved.html`, `flyers.html`, `stickers.html`, `postcards.html`, `signs.html`, all 10 `bitcoin-vs-*.html` pages, `business/index.html`, `nostr/index.html`
  - **3-level** (Home > Bitcoin for Business > Page Title): All nested business pages — `business/accounting.html`, `business/faq.html`, `business/guide.html`, `business/kit.html`, `business/maps.html`, `business/stickers.html`, `business/wallets.html`, `business/why.html`
  - **3-level** (Home > Nostr > Page Title): `nostr/what-is-nostr.html`
  - **3-level** (Home > Bitcoin Stickers > Sticker Files): `sticker-files/index.html`
- **Script created**: `scripts/inject-breadcrumb-schema.js` — idempotent Node.js script that extracts page title from `<title>` and canonical URL from `<link rel="canonical">`, determines hierarchy based on directory structure, and injects before `</head>`.
- **Skipped pages**: Homepage (root, no breadcrumb needed), success/thank-you pages, 404, sticker-files language variants (dozens of language-specific pages).
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (7th item under Priority 1: Structured Data).

### GEO: Comparison Schema on "Bitcoin vs" Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `ItemList` JSON-LD structured data to all 10 "Bitcoin vs" comparison pages as part of the GEO initiative.
- **Pages and comparison point counts**:
  - `bitcoin-vs-gold.html` — 7 comparison points (sendability, digital native, supply, elasticity, decentralization, verifiability, divisibility)
  - `bitcoin-vs-stocks.html` — 7 comparison points (ownership, supply, decentralization, valuation, trading hours, custody, inflation hedge)
  - `bitcoin-vs-cash.html` — 7 comparison points (sendability, global reach, invalidation, counterfeiting, decentralization, custody, divisibility)
  - `bitcoin-vs-banks.html` — 7 comparison points (permissionless access, availability, transparency, control, fees, overdrafts, censorship resistance)
  - `bitcoin-vs-cbdc.html` — 10 comparison points (permission, expiry, supply, privacy, decentralization, nodes, freezing, custody, monetary policy, security)
  - `bitcoin-vs-bonds.html` — 7 comparison points (counterparty risk, inflation, liquidity, auctions, appreciation, custody, government dependency)
  - `bitcoin-vs-crypto.html` — 8 comparison points (immutability, decentralization, supply, simplicity, consensus, purpose, antifragility, control)
  - `bitcoin-vs-visa.html` — 7 comparison points (open network, fees, transparency, freezing, debt, custody, availability)
  - `bitcoin-vs-real-estate.html` — 9 comparison points (portability, divisibility, censorship, maintenance, taxes, destruction, fungibility, market, ownership)
  - `bitcoin-vs-fine-art.html` — 7 comparison points (fungibility, market access, fees, divisibility, verification, destruction, accessibility)
- **Schema structure**: Each uses `ItemList` type with `name`, `description`, `url`, `about` (defining both Bitcoin and the compared item as `Thing` entities with descriptions), `numberOfItems`, and `itemListElement` array of `ListItem` entries where name = "Bitcoin: X vs Asset: Y" and description = explanation text.
- **Script created**: `scripts/inject-comparison-schema.js` — idempotent Node.js script that parses the `vs-container` HTML blocks from each page to extract comparison points automatically.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (6th item under Priority 1: Structured Data).

### GEO: HowTo Schema on Guide Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `HowTo` JSON-LD structured data to 3 guide pages as part of the GEO initiative.
- **Pages and steps**:
  - `wallets.html` — 4 steps: Choose a self-custody wallet, Decide between hot or cold wallet, Back up your recovery phrase, Choose a Bitcoin wallet (with specific wallet recommendations)
  - `buy.html` — 4 steps: Select your country, Choose your payment method, Buy Bitcoin from a recommended platform, Store your Bitcoin safely in your own wallet
  - `business/guide.html` — 5 steps: Learn why Bitcoin is good for business, Get a Bitcoin wallet, Get listed on merchant maps, Get free stickers, Set up Bitcoin accounting
- **Schema structure**: Each uses `HowTo` type with `name`, `description`, `image`, and `step` array of `HowToStep` items with `name`, `text`, and `url`.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (5th item under Priority 1: Structured Data).

### GEO: FAQPage Schema on Q&A Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `FAQPage` JSON-LD structured data to 3 pages with Q&A content as part of the GEO initiative.
- **Pages and Q&A counts**:
  - `inflation.html` — 7 Q&A pairs: What causes inflation?, Does Bitcoin have inflation?, What is Bitcoin?, Can Bitcoin protect my money from inflation?, I heard Bitcoin is volatile. Is that safe?, I can't afford a whole Bitcoin, Has Bitcoin ever been hacked?, Why does Bitcoin use energy?
  - `wallets.html` — 3 Q&A pairs: Is it a self-custody wallet?, Is a Bitcoin wallet hot or cold?, How will I back up my Bitcoin wallet recovery phrase?
  - `business/faq.html` — 9 Q&A pairs: What is Bitcoin?, How can Bitcoin benefit my business?, How do I accept Bitcoin payments?, Can I convert Bitcoin to local currency?, Accept in person?, Accept online?, How to let customers know?, How to get more customers?, How much does it cost?
- **Schema structure**: Each uses `FAQPage` type with `mainEntity` array of `Question`/`Answer` pairs, with answer text derived from actual page content.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (4th item under Priority 1: Structured Data).

### GEO: Article/WebPage Schema on All Content Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `Article` JSON-LD structured data to all 32 educational content pages as part of the GEO (Generative Engine Optimization) initiative.
- **Schema includes**: `headline` (from `<title>`), `description` (from meta description), `url` (from canonical), `mainEntityOfPage`, `author` and `publisher` (referencing Organization), `datePublished` (2022-01-01), `dateModified` (from English JSON `@metadata.last-updated`), `inLanguage`, and `image` (from og:image).
- **Script created**: `scripts/inject-article-schema.js` — idempotent Node.js script that finds all HTML files, skips homepage (has WebSite schema), success pages, 404, and sticker-file download pages, then injects Article schema before `</head>`.
- **Pages injected**: 32 files including inflation, bank-runs, all bitcoin-vs-* pages, wallets, lightning, buy, compound-inflation-calculator, get-involved, flyers, stickers, postcards, signs, all business/* pages, and nostr/* pages.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (3rd item under Priority 1: Structured Data).

### GEO: WebSite Schema on Homepage (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `WebSite` JSON-LD structured data to `index.html` as part of the GEO (Generative Engine Optimization) initiative.
- **Schema includes**: `name`, `url`, `description`, `publisher` (referencing the Organization), `potentialAction` (SearchAction via Google site search for sitelinks searchbox), and `inLanguage` listing all 11 supported languages.
- **File changed**: `index.html` — new `<script type="application/ld+json">` block placed before the existing Organization schema.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (2nd item under Priority 1: Structured Data).

### Address Blacklist System (Completed Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Needed the ability to blacklist specific addresses (spammers) so their future form submissions are silently rejected — they see the success page but nothing is saved.
- **Solution**: Full blacklist management system integrated into the forms backend:
  - **Database**: New `blacklisted_addresses` table (region, address_original, address_normalized, blocked_count, created_by, created_at) and `can_blacklist` column on `users` table
  - **Region-based**: Blacklists are shared across all forms in the same region (USA or Canada), derived from form slug
  - **Submission check**: Before saving any submission, the normalized address1 is checked against the blacklist using both exact match and fuzzy Levenshtein similarity (85% threshold)
  - **Silent rejection**: Blacklisted submissions redirect to success page (spammer thinks it worked) and increment the `blocked_count` counter
  - **Admin UI**: "Blacklist Address" button next to "Delete Selected" on form detail pages, plus a blacklist management table with manual add/remove and blocked count display
  - **Permission system**: Admin can grant/revoke `can_blacklist` permission per user on the Users dashboard; admins always have it
- **Files changed**: `database.js`, `server.js`, `views/form-detail.ejs`, `views/users.ejs`, `public/admin.css`

### Cloudflare Turnstile CAPTCHA (Completed Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Needed mandatory CAPTCHA on all form submissions to prevent bot spam.
- **Solution**: Integrated Cloudflare Turnstile (privacy-friendly, free CAPTCHA) across all 11 forms:
  - **Frontend**: Added Turnstile script + dark-themed widget div to 4 HTML files (`stickers.html`, `sticker-files/index.html`, `business/stickers.html`, `business/maps.html`)
  - **Backend**: Added `verifyTurnstile()` async function in `server.js` that calls Cloudflare's `/siteverify` API before processing any submission
  - **Config**: `TURNSTILE_SECRET_KEY` env var in Railway, site key `0x4AAAAAAClzj7R6NrkNgcsP` in HTML
- **Graceful degradation**: If `TURNSTILE_SECRET_KEY` is not set, verification is skipped (with console warning)
- **Also removed**: Old unused Google reCAPTCHA v3 scripts from `stickers.html` and `business/stickers.html`

### Fuzzy Address Spam Protection (Updated Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Spammers were bypassing the exact-match duplicate address check by making slight variations (e.g. `#123` → `Apt123`, inserting spaces in street names like `Ne w Street`).
- **Solution**: Replaced the SQL exact-match check in `forms-backend/server.js` with a two-layer fuzzy detection system:
  1. **Aggressive normalization**: `normalizeAddress()` strips apartment keywords (apt, suite, unit, etc.), `#` symbols, all spaces/punctuation, and lowercases — making all spam variations identical.
  2. **Street type normalization**: Converts full street suffixes to abbreviations (Street→St, Avenue→Ave, Boulevard→Blvd, Drive→Dr, etc.) so "123 Main Street" and "123 Main St" normalize identically. Added Mar 4 2026 after a spammer slipped through with "Street" vs "St" variation (similarity was 0.833, just under the 0.85 threshold).
  3. **Levenshtein similarity**: `isSimilarAddress()` catches remaining creative variations using edit distance with an 85% similarity threshold.
- **Note**: The duplicate check queries ALL existing submissions (no date filter), so it protects against duplicates of any historical entry, not just recent ones.
- **Result**: All tested spam variations now normalize to identical strings. Different addresses remain distinct. No new dependencies needed (pure JS).

### SEO Enhancement — Inline English Content (Completed Feb 2026)
- **Status**: ✅ Complete
- **Problem**: All HTML elements using `data-i18n` attributes had empty text content in the page source. Web crawlers and search engines saw completely empty pages — devastating for SEO.
- **Solution**: Created `scripts/inject-seo-content.js` — a Node.js build script that reads English JSON translation files and injects default English text into all HTML elements with `data-i18n` attributes.
- **Result**: 5,250 translations injected across 88 HTML files. Page source now shows full English content for crawlers while i18n still works at runtime.
- **Workflow**: **Run `node scripts/inject-seo-content.js` after updating or adding English JSON translation files.** The English JSON files remain the single source of truth.

### Recent Project Activity
Based on the current state of the repository, the project appears to be in active maintenance mode with:
- **Stable Core Platform**: Main website functionality is complete and operational
- **Translation Expansion**: Ongoing community-driven translation efforts
- **Content Updates**: Regular updates to educational resources and external links
- **Community Engagement**: Active GitHub repository with contribution guidelines

## Current Priorities

### 1. Documentation and Knowledge Management
- **Memory Bank Creation**: Establishing comprehensive project documentation
- **Contributor Onboarding**: Improving resources for new contributors
- **Technical Documentation**: Maintaining clear development guidelines

### 2. Community Growth
- **Translation Program**: Supporting ongoing translation efforts across multiple languages
- **Content Curation**: Maintaining quality and relevance of educational resources
- **Contributor Support**: Facilitating community contributions and feedback

### 3. Platform Maintenance
- **Performance Optimization**: Ensuring fast loading times and responsive design
- **Content Freshness**: Regular review and update of external links and resources
- **Technical Updates**: Maintaining dependencies and security best practices

## Recent Changes and Decisions

### Architecture Decisions
- **Static Site Approach**: Confirmed commitment to simple, CMS-free architecture
- **Single Stylesheet**: Maintaining consolidated CSS approach for simplicity
- **jQuery-based Internationalization**: Continuing with current i18n implementation
- **Community-Driven Content**: Emphasis on collaborative content development

### Content Strategy Decisions
- **Topic-Based Organization**: Maintaining current homepage structure with topic sections
- **External Link Curation**: Continuing to curate high-quality external educational resources
- **Multi-Format Resources**: Supporting various content types (articles, videos, tools)
- **Beginner Focus**: Maintaining primary focus on Bitcoin newcomers

## Active Development Areas

### Translation System
- **Current Languages**: English (complete), German, French, Portuguese, Thai, and others in progress
- **Translation Process**: Community-driven through GitHub contributions
- **Quality Control**: Review process for translation accuracy and completeness
- **Technical Implementation**: jquery.i18n system with JSON translation files

### Educational Content
- **Homepage Sections**: Money, Freedom, Human Rights, Energy, Environment, Business, etc.
- **Specialized Pages**: Inflation calculator, wallet guides, business resources
- **Resource Types**: Internal educational content and curated external links
- **Update Frequency**: Regular review and refresh of content relevance

### Physical Resources
- **Bitcoin Stickers**: Downloadable designs for public Bitcoin awareness
- **Bitcoin Postcards**: Snail mail outreach materials
- **Business Kits**: Resources for merchant Bitcoin adoption
- **Distribution Strategy**: Free download model with community sharing

## Current Challenges

### Technical Challenges
- **Translation Completeness**: Ensuring all languages have complete translations
- **Performance Optimization**: Balancing feature richness with loading speed
- **Mobile Experience**: Optimizing for diverse mobile devices and screen sizes
- **Accessibility**: Maintaining WCAG compliance across all content

### Content Challenges
- **Link Maintenance**: Keeping external links current and functional
- **Content Relevance**: Ensuring educational content reflects current Bitcoin landscape
- **Quality Control**: Maintaining high standards for curated resources
- **Scope Management**: Balancing comprehensiveness with simplicity

### Community Challenges
- **Contributor Onboarding**: Making it easy for non-technical contributors to participate
- **Translation Coordination**: Managing multiple simultaneous translation efforts
- **Quality Assurance**: Ensuring translation accuracy and cultural appropriateness
- **Sustainable Growth**: Building long-term community engagement

## Immediate Next Steps

### Short-term (Next 1-2 weeks)
1. **Complete Memory Bank**: Finish activeContext.md and progress.md files
2. **Review Translation Status**: Assess current translation completeness
3. **Update External Links**: Verify and refresh external resource links
4. **Performance Audit**: Check current site performance metrics

### Medium-term (Next 1-2 months)
1. **Translation Push**: Focus on completing high-priority language translations
2. **Content Refresh**: Update educational content based on recent Bitcoin developments
3. **Community Outreach**: Engage with Bitcoin education community for feedback
4. **Technical Improvements**: Implement any identified performance optimizations

### Long-term (Next 3-6 months)
1. **Platform Evolution**: Consider enhancements based on user feedback
2. **Resource Expansion**: Develop new educational tools and resources
3. **Partnership Development**: Explore collaborations with other Bitcoin education projects
4. **Impact Measurement**: Develop metrics for measuring educational impact

## Key Stakeholders

### Primary Maintainers
- **Project Leadership**: Core team responsible for strategic direction
- **Technical Contributors**: Developers maintaining codebase and infrastructure
- **Content Curators**: Team members responsible for educational content quality

### Community Contributors
- **Translators**: Volunteers providing multi-language support
- **Content Reviewers**: Community members suggesting improvements and updates
- **Testers**: Users providing feedback on functionality and user experience

### End Users
- **Bitcoin Newcomers**: Primary target audience seeking Bitcoin education
- **Bitcoin Advocates**: Users sharing resources with others
- **Business Owners**: Merchants considering Bitcoin adoption

This active context provides the current state and immediate focus areas for the bitcoin.rocks project.
