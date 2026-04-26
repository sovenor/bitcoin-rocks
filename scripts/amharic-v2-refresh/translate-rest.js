#!/usr/bin/env node
/**
 * Amharic V2 refresh — all non-inflation namespaces.
 *
 * Fills `targetTranslation` for the ~500 entries across 37 non-inflation
 * namespaces in scripts/i18n-audit/reports/am.json.
 *
 * Keys are "<namespace>::<key>" to disambiguate entries like
 * `hero_title` that appear in every bitcoin-vs-* namespace.
 *
 * Brand names (Bitcoin, Nostr, Lightning, Strike, Primal, Damus,
 * Amethyst, Iris, BTC Map, CoinGecko, BTCPay Server, Breez, OpenNode,
 * IBEX, Zaprite, Square, StickerMule, etc.), URLs, email addresses,
 * schema.org dataset names (FRED CPI, etc.), numbers, dimensions, and
 * currency codes are preserved verbatim per the workflow.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"am.json",
);

// Build the complete translation map. Key format: "<namespace>::<key>".
const T = {};

/* ─────────────── 404 ─────────────── */
T["404::404_not_found_short"] = "አልተገኘም";

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"የአካባቢ ነጋዴዎች ቢትኮይን እንዲቀበሉ ለማገዝ ቀላል የሚያደርጉ ነፃ የንግድ ኪቶችን እናቀርባለን። እያንዳንዱ ኪት ቢትኮይንን ለንግድ ሥራቸው የመቀበል ጥቅሞችን የሚያብራሩ ሊታተሙ የሚችሉ ቁሳቁሶችን ያካትታል።",
	"about::about_card_business_label": "የንግድ ኪት",
	"about::about_card_business_source": "ምንጭ: bitcoin.rocks →",
	"about::about_card_business_title":
		"የአካባቢ ንግዶች ቢትኮይን ክፍያ እንዲቀበሉ ይርዷቸው",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "ምንጭ: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "አስተዋፅኦ ያድርጉ",
	"about::about_card_contribute_source": "ምንጭ: GitHub →",
	"about::about_card_contribute_title":
		"ለ bitcoin.rocks እንዴት አስተዋፅኦ ማድረግ እንደሚቻል ይወቁ",
	"about::about_card_email_label": "ኢሜይል",
	"about::about_card_email_source": "ምንጭ: ኢሜይል →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "ሊታተሙ የሚችሉ በራሪ ወረቀቶች",
	"about::about_card_flyers_source": "ምንጭ: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"ለማህበረሰብዎ የቢትኮይን በራሪ ወረቀቶችን ያውርዱ እና ያትሙ",
	"about::about_card_github_label": "ማከማቻ",
	"about::about_card_github_source": "ምንጭ: GitHub →",
	"about::about_card_github_title": "bitcoin.rocks በ GitHub ላይ ይመልከቱ",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "ምንጭ: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "ነፃ ስቲከሮች",
	"about::about_card_stickers_source": "ምንጭ: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"ነፃ የቢትኮይን ስቲከሮችን በደጃፍዎ ያግኙ",
	"about::about_flyers_blurb":
		"በስብሰባዎች የሚከፋፈሉ፣ በማህበረሰብ ቦርዶች ላይ የሚለጠፉ፣ ወይም በደብዳቤ ሳጥኖች ውስጥ የሚጣሉ ሊታተሙ የሚችሉ በራሪ ወረቀቶችን እንቀርፃለን — ጉጉትን ለማነሳሳት እና ሰዎች ተጨማሪ ለመማር ወደ bitcoin.rocks እንዲሄዱ ለማድረግ ቀላል መንገድ።",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks የተመሰረተው በ",
	"about::about_mission_1b":
		"በ2022 በቀላል ተልዕኮ ነው፦ በትምህርት በኩል የቢትኮይን ተቀባይነትን ማፋጠን።",
	"about::about_page_description":
		"bitcoin.rocks በ2022 የተመሰረተ ነፃ፣ ክፍት ምንጭ የቢትኮይን ትምህርታዊ ድህረ ገጽ ነው። ተልዕኮአችን በትምህርት በኩል የቢትኮይን ተቀባይነትን ማፋጠን ነው።",
	"about::about_stickers_blurb":
		"በማህበረሰብዎ ውስጥ የቢትኮይን ግንዛቤን ለማስፋፋት እንዲረዱ ነፃ የቢትኮይን ስቲከሮችን በደጃፍዎ እናላካለን። በእነዚህ ስቲከሮች ላይ ያሉትን QR ኮዶች በመቶዎች የሚቆጠሩ ሰዎች በየወሩ ስለ ቢትኮይን ለመማር ይቃኛሉ።",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "ቢትኮይን የባንክ ሩጫ የለውም",
	"bank-runs::bank_runs_bitcoin_p1":
		"ቢትኮይን ሙሉ ክምችት ስርዓት ነው። ገንዘብዎን በባንክ ውስጥ ማስቀመጥ አይደሉም። የራስዎ ባንክ ነዎት። ገንዘብዎን ማግኘት የሚችል ብቸኛው ሰው እርስዎ ስለሆኑ ገንዘብዎን ያለ እርስዎ እውቀት የሚያበድሩት አይኖሩም።",
	"bank-runs::bank_runs_bitcoin_p2":
		"ቢትኮይንን በራስዎ ዋሌት ውስጥ እስከያዙ ድረስ — በኤክስቼንጅ ወይም በ ETF ውስጥ ካልታሸገ — የባንክ ሩጫ የማይቻል ነው።",
	"bank-runs::bank_runs_bitcoin_p3":
		"በቢትኮይን፣ ገንዘብዎን በእውነት ይቆጣጠራሉ።",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"ከመጋቢት 26, 2020 ጀምሮ የአሜሪካ ባንኮች 0% እንደ ክምችት እንዲይዙ ይጠበቃል።",
	"bank-runs::bank_runs_card_bank_reserve_label": "የባንክ ክምችት ጥምርታ",
	"bank-runs::bank_runs_card_bank_reserve_source": "ምንጭ: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"ሙሉ ክምችት ስርዓት — የተቀማጭ መድን አያስፈልግም።",
	"bank-runs::bank_runs_card_btc_fdic_label": "የቢትኮይን ሽፋን",
	"bank-runs::bank_runs_card_btc_fdic_source": "ምንጭ: የቢትኮይን ነጭ ወረቀት →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"እያንዳንዱ ቢትኮይን በሰንሰለት ላይ ይኖራል — ምንም የሚበደር ነገር የለም።",
	"bank-runs::bank_runs_card_btc_reserve_label": "የቢትኮይን ክምችት ጥምርታ",
	"bank-runs::bank_runs_card_btc_reserve_source": "ምንጭ: የቢትኮይን ነጭ ወረቀት →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$153.9 ቢሊዮን የመድን ፈንድ ከ$10.82 ትሪሊዮን በመድን ከተያዙ ተቀማጮች (ታህሳስ 2025)።",
	"bank-runs::bank_runs_card_fdic_label": "የ FDIC ሽፋን",
	"bank-runs::bank_runs_card_fdic_source":
		"ምንጭ: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "የጉዳይ ጥናት",
	"bank-runs::bank_runs_card_svb_source":
		"ምንጭ: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"የ Silicon Valley Bank ሩጫ እንዴት እንደተከሰተ ይወቁ",
	"bank-runs::bank_runs_card_wallet_label": "ቀጣይ እርምጃ",
	"bank-runs::bank_runs_card_wallet_source": "እዚህ ይጀምሩ →",
	"bank-runs::bank_runs_card_wallet_title":
		"የራስዎን የቢትኮይን ዋሌት እንዴት ማግኘት እንደሚቻል ይወቁ",
	"bank-runs::bank_runs_fdic_heading":
		"የ FDIC መድን ከተቀማጮች ውስጥ 1% ገደማ ያህል ይሸፍናል",
	"bank-runs::bank_runs_fdic_p1":
		"የ FDIC መድን እስከ $250,000 ለእያንዳንዱ ተቀማጭ ተቀማጮችን ይከላከላል። ነገር ግን የመድን ፈንዱ ከሚጠበቀው አጠቃላይ ተቀማጮች ጋር ሲነፃፀር በጣም ትንሽ ነው።",
	"bank-runs::bank_runs_fdic_p2_a":
		"በትልቅ ደረጃ የባንክ ውድቀት ውስጥ፣ መንግሥት ክፍተቱን ለመሸፈን ገንዘብ ሊያትም ይችላል — ይህ ተጨማሪ",
	"bank-runs::bank_runs_fdic_p2_b": "ያስከትላል።",
	"bank-runs::bank_runs_fdic_p2_link": "ዋጋ ግሽበት",
	"bank-runs::bank_runs_page_description":
		"ባንኮች ተቀማጮችዎን በክፍልፋይ ክምችት ባንኪንግ ስር ያበድራሉ። ብዙ ሰዎች በአንድ ጊዜ ቢያወጡ ባንኮች ሊወድቁ ይችላሉ። ቢትኮይን ሙሉ ክምችት ስርዓት ነው — የባንክ ሩጫ የማይቻል ነው።",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: እውነተኛ ምሳሌ",
	"bank-runs::bank_runs_svb_p1_a":
		"በመጋቢት 2023 Silicon Valley Bank የደንበኛ ተቀማጮችን በረዥም ጊዜ ውስጥ ካስቀመጠ በኋላ ወደቀ",
	"bank-runs::bank_runs_svb_p1_b":
		"እነዚያ ቦንዶች ዋጋቸውን ሲያጡ፣ SVB ወጪዎችን መሸፈን አልቻለም። ባንኩ ከአቅም በላይ ሆነ።",
	"bank-runs::bank_runs_svb_p1_link": "የመንግሥት ቦንዶች።",
	"bank-runs::bank_runs_svb_p2":
		"በሺዎች የሚቆጠሩ ንግዶች ሠራተኞቻቸውን መክፈል አልቻሉም። FDIC ጣልቃ ገባ — ነገር ግን ይህ ትልቅ ጥያቄ አስነሳ፦ ገንዘብዎ በእውነት ደህና ነው?",
	"bank-runs::bank_runs_what_p1":
		"ባንኮች ተቀማጮችዎን በማስቀመጫ ውስጥ አይይዙም። ገንዘብዎን ያበድራሉ እና ያስቀምጣሉ — ይህ ክፍልፋይ ክምችት ባንኪንግ ተብሎ ይጠራል።",
	"bank-runs::bank_runs_what_p2":
		"ብዙ ሰዎች በአንድ ጊዜ ለማውጣት ከሞከሩ፣ ባንኩ ለሁሉም ለመክፈል በቂ ገንዘብ የለውም። ይህ የባንክ ሩጫ ነው — እና ባንኮች ሙሉ በሙሉ እንዲወድቁ ሊያደርግ ይችላል።",
});

/* ─────────────── bitcoin-vs-* ─────────────── */
function bvTitle(assetAm) {
	return (
		'በ<span class="orange">ቢትኮይን</span> እና ' +
		`<span class="asset">${assetAm}</span> መካከል ያለው ልዩነት`
	);
}
Object.assign(T, {
	"bitcoin-vs-banks::hero_title": bvTitle("ባንኮች"),
	"bitcoin-vs-bonds::hero_title": bvTitle("ቦንዶች"),
	"bitcoin-vs-bonds::point_6_summary_3":
		" — ያንን አደጋ ሙሉ በሙሉ ያስወግዳል።",
	"bitcoin-vs-cash::hero_title": bvTitle("ጥሬ ገንዘብ"),
	"bitcoin-vs-cbdc::hero_title": bvTitle("CBDCs"),
	"bitcoin-vs-cbdc::point_9_summary_3":
		" ከልክ በላይ ገንዘብ ሲታተም።",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
	"bitcoin-vs-crypto::hero_title": bvTitle("ክሪፕቶ"),
	"bitcoin-vs-fine-art::hero_title": bvTitle("ጥበባዊ ሥነ ጥበብ"),
	"bitcoin-vs-gold::hero_title": bvTitle("ወርቅ"),
	"bitcoin-vs-real-estate::hero_title": bvTitle("ሪል ስቴት"),
	"bitcoin-vs-stocks::hero_title": bvTitle("አክሲዮኖች"),
	"bitcoin-vs-visa::hero_title": bvTitle("ቪዛ"),
});

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "የቢትኮይን ዋጋ",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"የቢትኮይንን ወቅታዊ ወይም ታሪካዊ የዶላር ዋጋ ይፈልጉ",
	"business/accounting::accounting_card_pacioli_label": "የቢትኮይን የሒሳብ ባለሙያዎች",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL ማስገባት",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"የቢትኮይን ዋጋዎችን በራስ ሰር ወደ Excel ያስገቡ",
	"business/accounting::accounting_card_wallets_label": "ድብልቅ ዋሌቶች",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"የምንመክራቸውን የንግድ ዋሌቶች ይመልከቱ",
	"business/accounting::accounting_disclaimer":
		"ይህ መመሪያ ለመረጃ ዓላማዎች ብቻ ነው እና እንደ ታክስ ምክር መታሰብ የለበትም። ለእርስዎ ሁኔታ ልዩ ለሆነ የታክስ ምክር፣ እባክዎን ብቁ የሆነ የሒሳብ ባለሙያ ያማክሩ።",
	"business/accounting::accounting_disclaimer_label": "እባክዎን ያስተውሉ",
	"business/accounting::accounting_example_feb_1": "የካቲት 1",
	"business/accounting::accounting_example_gain_badge": "የካፒታል ትርፍ",
	"business/accounting::accounting_example_gain_explain":
		"$10 የካፒታል ትርፍ ይመዘግባሉ።",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "ጥር 1",
	"business/accounting::accounting_example_loss_badge": "የካፒታል ኪሳራ",
	"business/accounting::accounting_example_loss_explain":
		"$10 የካፒታል ኪሳራ ይመዘግባሉ።",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_example_received_label": "የተቀበሉት",
	"business/accounting::accounting_example_sold_label":
		"የተሸጠ ወይም የወጣ",
	"business/accounting::accounting_hero_subtitle":
		"በንግድዎ ቢትኮይንን መቀበል የሒሳብ አያያዝዎን ማወሳሰብ የለበትም። አጭር ስሪቱ ይኸው — እና ሥቃይ-አልባ ለማድረግ የሚያስፈልጉ መሣሪያዎች እና ባለሙያዎች።",
	"business/accounting::accounting_intro_c1":
		"ጥሬ ገንዘብ ወይም ካርድ አስቀድሞ የሚቀበሉ ከሆነ፣ ቢትኮይንን ወደ ንግድ መዝገቦችዎ ማከል ከሚመስለው የበለጠ ቀላል ነው። ሁለት መንገዶች አሉዎት፦ እያንዳንዱን የቢትኮይን ክፍያ በደረሰበት ቅጽበት በራስ ሰር ወደ ዶላር መለወጥ (አዲስ የሒሳብ አያያዝ አያስፈልግም)፣ ወይም ከፊሉን እንደ ቢትኮይን ማቆየት (ለመከታተል ጥቂት ተጨማሪ ቁጥሮች)።",
	"business/accounting::accounting_intro_c2":
		"ይህ መመሪያ በሁለቱም በኩል ያስኬድዎታል — ስለዚህ ለንግድዎ የሚስማማውን መምረጥ እና በልበ ሙሉነት ቢትኮይንን መቀበል መጀመር ይችላሉ።",
	"business/accounting::accounting_s1": "ቀላሉ መንገድ፦ በራስ ሰር ወደ ዶላር መለወጥ",
	"business/accounting::accounting_s3_c6":
		"ያ ብቻ ነው። መሠረታዊው የሒሳብ ስሌት ዋጋው የሚያድግ ወይም የሚቀንስ ማንኛውም ሌላ ንብረት እንዴት እንደሚቆጠር ተመሳሳይ ነው።",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — የቢትኮይን ወቅታዊ እና ታሪካዊ የዶላር ዋጋ",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — ለንግዶች የቢትኮይን የሒሳብ አያያዝ",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — ክሪፕቶከረንሲ ዋጋዎችን ወደ Excel ያስገቡ",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"ነጋዴዎች ቢትኮይንን መቀበል ከመጀመራቸው በፊት ብዙ ጊዜ ለሚጠይቋቸው ጥያቄዎች አጭር መልሶች — ክፍያዎች፣ ክፍያ መወረድ፣ ዋሌቶች፣ ተመላሾች፣ ወጪ፣ እና ሌሎችም።",
	"business/faq::faq_intro_c1":
		"ከታች ያለውን ማንኛውንም ጥያቄ መልሱን ለማስፋት ይጫኑ። ቢትኮይንን መቀበል ለመጀመር ዝግጁ ሲሆኑ፣ በገጹ ግርጌ ላይ ያሉት የንግድ ሀብቶች በእያንዳንዱ እርምጃ ያስኬድዎታል።",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "የሒሳብ አያያዝ",
	"business/index::biz_label_faq": "ተዘውትረው የሚጠየቁ ጥያቄዎች",
	"business/index::biz_label_maps": "የነጋዴ ካርታዎች",
	"business/index::biz_label_rewards": "ሽልማቶች",
	"business/index::biz_label_stickers": "ስቲከሮች",
	"business/index::biz_label_wallets": "ዋሌቶች",
	"business/index::biz_meta_description":
		"ለዝቅተኛ ክፍያዎች፣ ወዲያውኑ ክፍያ መወረድ፣ ምንም ተመላሽ እና ተጨማሪ ደንበኞች ቢትኮይንን በንግድዎ ይቀበሉ።",
	"business/index::business_hero_subtitle":
		"በዝቅተኛ ክፍያዎች ክፍያዎችን ይቀበሉ፣ ወዲያውኑ ይከፈሉ እና በሚሊዮኖች የሚቆጠሩ አዳዲስ ደንበኞችን ይድረሱ — ዜሮ ውሎች እና ዜሮ የተደበቁ ወጪዎች።",
	"business/index::business_intro_c1":
		"ቢትኮይን ለንግድዎ በፍጥነት፣ በርካሽ እና የበለጠ ግላዊ የመከፈሊያ መንገድ ይሰጣል። ምንም መካከለኛ ሰዎች። ምንም ተመላሾች። ምንም ውሎች። በሰከንዶች ውስጥ ከደንበኞችዎ በቀጥታ ወደ እርስዎ የሚሸጋገር ገንዘብ ብቻ።",
	"business/index::business_intro_c2":
		"ከታች ቢትኮይን ለንግድ ጥሩ የሆነበት አጭር ስሪት — እና ከዚያ በታች ዛሬ መቀበል ለመጀመር የሚያስፈልገው እያንዳንዱ ሀብት።",
	"business/index::business_resources_heading":
		"ቢትኮይንን ለመቀበል የሚያስፈልግዎት ነገር ሁሉ",
	"business/index::business_resources_intro":
		"በራስዎ ፍጥነት በእነዚህ ሀብቶች ይሥሩ። እያንዳንዱ አጭር፣ ተግባራዊ መመሪያ ነው።",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "ስለ ንግድዎ ይንገሩን",
	"business/maps::biz_maps_form_intro":
		"እርስዎን ለማዘርዘር ጥቂት ዝርዝሮችን ብቻ እንፈልጋለን። የአድራሻ መረጃ ንግድዎን ወደ ካርታዎቹ ለማቅረብ በቂ ለሆነ ጊዜ ብቻ ይቀመጣል።",
	"business/maps::biz_maps_hero_subtitle":
		"ንግድዎን በ BTC Map ላይ በነፃ ያስዘርዝሩ — በዓለም አቀፍ ደረጃ ቢትኮይን የሚቀበሉ ነጋዴዎች ክፍት ማውጫ — በአቅራቢያ ያሉ ቢትኮይነሮች እንዲያገኙዎት እና በንግድዎ ላይ ቢትኮይን እንዲያወጡ።",
	"business/maps::biz_maps_hero_title":
		"ንግድዎን በቢትኮይን የነጋዴ ካርታዎች ላይ ያስገቡ",
	"business/maps::biz_maps_intro_c1":
		"ቢትኮይነሮች የሚያወጡበት ቦታ በንቃት ይፈልጋሉ። ንግድዎን ካርታ ላይ ማድረግ በአቅራቢያ ለመብላት፣ ለመግዛት፣ ወይም ለመቆየት ቦታ የሚፈልግ እያንዳንዱን የቢትኮይን ተጠቃሚ ፊት ያስቀምጥዎታል — ያለ ወጪ።",
	"business/maps::biz_maps_intro_c2":
		"ከታች ያለውን አጭር ቅጽ ብቻ ይሙሉ እና ንግድዎን ወደ BTC Map እና ሌሎች የቢትኮይን ነጋዴ ካርታዎች እናቀርብልዎታለን።",
	"business/maps::biz_maps_meta_description":
		"ንግድዎን በ BTC Map እና ሌሎች የቢትኮይን ነጋዴ ካርታዎች ላይ በነፃ ያስዘርዝሩ በአቅራቢያ ያሉ ቢትኮይነሮች እንዲያገኙዎት።",
	"business/maps::biz_maps_placeholder_address": "የመንገድ አድራሻ",
	"business/maps::biz_maps_placeholder_category":
		"ምድብ (ለምሳሌ ምግብ ቤት፣ ካፌ፣ ሆቴል)",
	"business/maps::biz_maps_placeholder_city": "ከተማ",
	"business/maps::biz_maps_placeholder_country": "አገር",
	"business/maps::biz_maps_placeholder_name": "የንግድ ስም",
	"business/maps::biz_maps_placeholder_region": "ግዛት / ክልል / ዞን",
	"business/maps::biz_maps_placeholder_website": "ድህረ ገጽ (አማራጭ)",
	"business/maps::biz_maps_view_map_cta": "BTC Map ይመልከቱ",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"BTC Map ይመልከቱ",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"ንግድዎን ስላቀረቡ እናመሰግናለን። በቅርቡ በቢትኮይን የነጋዴ ካርታዎች ላይ እናስዘረግብልዎታለን።",
	"business/maps-success::biz_maps_success_hero_title": "ጥያቄ ደርሶናል 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"ንግድዎ በ BTC Map እና ሌሎች የቢትኮይን ነጋዴ ማውጫዎች ላይ በ1 እስከ 2 ሳምንታት ውስጥ ይዘረዘራል። ካርታዎችን ትክክለኛ ለማድረግ እያንዳንዱን ማቅረብ በእጅ እንገመግማለን።",
	"business/maps-success::biz_maps_success_timeline_c2":
		"ዝርዝርዎ በቀጥታ ሲሄድ፣ በአቅራቢያ ያሉ ቢትኮይነሮች ንግድዎን አግኝተው ቢትኮይን ለማውጣት ይመጣሉ።",
	"business/maps-success::biz_maps_success_timeline_header":
		"ቀጥሎ የሚሆነው",
	"business/maps-success::biz_maps_success_view_c1":
		"እየጠበቁ ሳለ፣ በዓለም ዙሪያ ቢትኮይን የሚቀበሉ ንግዶች እያደገ ያለውን አውታረ መረብ ለማየት BTC Map ይመልከቱ።",
	"business/maps-success::biz_maps_success_view_header":
		"የት እንደሚታዩ ይመልከቱ",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"ደንበኞችዎ ቢትኮይን እንደሚቀበሉ እንዲያውቁ የራስዎን 'Bitcoin Accepted Here' ስቲከሮች በእንግሊዝኛ ያትሙ።",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"የእንግሊዝኛ 'Bitcoin Accepted Here' ስቲከር ፋይሎችን ያውርዱ",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"በቋንቋዎ 'Bitcoin Accepted Here' ስቲከር ፋይሎችን ስለጠየቁ እናመሰግናለን።",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"ጥያቄ ደርሶናል 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"ስቲከር ፋይሎችዎን በ3 እስከ 4 ሳምንታት ውስጥ እንፈጥራለን እና እናስተናብራለን። ዝግጁ ሲሆኑ ከስቲከር ፋይሎቻችን ገጽ በነፃ ማውረድ እና ማተም ይችላሉ።",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ስቲከር ፋይሎች በቡድን ይለቀቃሉ፣ ስለዚህ ቋንቋዎ ወደ ቀጥታ ለመሄድ ጥቂት ሳምንታት ሊወስድ ይችላል። ለትዕግስትዎ እናመሰግናለን!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"ቀጥሎ የሚሆነው",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"በብዛት ያዙ",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"ሌላ ነፃ ፓኬት ይጠይቁ",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"በ2 እስከ 4 ሳምንታት ውስጥ ነፃ 'Bitcoin Accepted Here' ስቲከሮችዎን በተራ ነጭ ኤንቨሎፕ ውስጥ 3 ስቲከሮች ጋር ይቀበላሉ።",
	"business/sticker-success::biz_sticker_success_hero_title":
		"ስቲከሮችዎ በመንገዱ ላይ ናቸው 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"ለንግድዎ 3 ስቲከሮች በቂ ካልሆኑ፣ ሌላ ነፃ ፓኬት መጠየቅ — ወይም ከምንጠቀመው ተመሳሳይ ማተሚያ ቤት በብዛት ማዘዝ ይችላሉ።",
	"business/sticker-success::biz_sticker_success_more_header":
		"ተጨማሪ ስቲከሮች ያስፈልጉዎታል?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"ደንበኞች ከመግባታቸው በፊት እንዲያዩት በፊት በርዎ ወይም መስኮትዎ ላይ",
	"business/sticker-success::biz_sticker_success_tip_2":
		"ከካሽ ሬጅስተርዎ፣ POS ተርሚናልዎ፣ ወይም የክፍያ ቦታዎ አጠገብ",
	"business/sticker-success::biz_sticker_success_tip_3":
		"በምናሌዎች፣ የዋጋ ዝርዝሮች፣ ወይም በባቄላ ማስቀመጫዎች ላይ",
	"business/sticker-success::biz_sticker_success_tip_4":
		"የእርስዎ ያልሆነ ወይም ለማስቀመጥ ፈቃድ የሌልዎት ቦታ ላይ አይለጥፏቸው",
	"business/sticker-success::biz_sticker_success_tips_header":
		"ስቲከሮችዎን የሚያስቀምጡባቸው ጥሩ ቦታዎች",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"ደንበኞችዎ ቢትኮይን እንደሚቀበሉ እንዲያውቁ ያድርጉ። በንግድዎ ላይ ለመለጠፍ ነፃ የ'Bitcoin Accepted Here' ስቲከር ፓኬት ያዙ።",
	"business/stickers::biz_stickers_hero_title":
		"ነፃ የ'Bitcoin Accepted Here' ስቲከሮች",
	"business/stickers::biz_stickers_intro_c1":
		"ቢትኮይንን መቀበል ሥራው ግማሽ ብቻ ነው — ደንበኞችዎ እንደሚያደርጉ ማወቅ አለባቸው። እነዚህ ትናንሽ 'Bitcoin Accepted Here' ስቲከሮች ደንበኞች ከመክፈላቸው በፊት በሚያዩባቸው በበርዎ፣ በካሽ ሬጅስተር፣ በምናሌ፣ ወይም በሌላ ቦታ ላይ እንዲለጠፉ የተቀረፁ ናቸው።",
	"business/stickers::biz_stickers_intro_c2":
		"በአሜሪካ ወይም በካናዳ ውስጥ የትም ቦታ ነፃ ፓኬት እናላካለን፣ ወይም በዓለም ዙሪያ የራስዎን ማተም ይችላሉ።",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 ካናዳ — በፖስታ በነፃ",
	"business/stickers::biz_stickers_option_print":
		"🌍 ዓለም አቀፍ — የራሴን አተማለሁ",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 አሜሪካ — በፖስታ በነፃ",
	"business/stickers::biz_stickers_placeholder_translation1":
		"ለ 'Bitcoin Accepted Here' ትርጉም",
	"business/stickers::biz_stickers_placeholder_translation2":
		"ለ 'Scan to learn why Bitcoin is good for business.' ትርጉም",
	"business/stickers::biz_stickers_print_c1":
		"የት ቢኖሩም የራስዎን 'Bitcoin Accepted Here' ስቲከሮች ማተም ይችላሉ። የስቲከር ፋይሎቹን እና የህትመት መመሪያዎችን ለማውረድ ከታች ቋንቋዎን ይጫኑ።",
	"business/stickers::biz_stickers_print_header":
		"የራስዎን ስቲከር ፋይሎች ያትሙ",
	"business/stickers::biz_stickers_request_c1":
		"በአካባቢዎ ቋንቋ 'Bitcoin Accepted Here' ስቲከር ፋይሎችን ለመጠየቅ ከታች ያለውን ቅጽ ይሙሉ። ዝግጁ ሲሆኑ እናሳውቅዎታለን።",
	"business/stickers::biz_stickers_request_header": "ቋንቋዎን አያዩም?",
	"business/stickers::biz_stickers_step_description":
		"በአሜሪካ እና በካናዳ ውስጥ ላሉ አድራሻዎች ነፃ ፓኬት እንልካለን። በዓለም ዙሪያ የትም ቦታ የራስዎን ማተም ይችላሉ።",
	"business/stickers::biz_stickers_step_header":
		"ስቲከሮችዎን እንዴት ማግኘት ይፈልጋሉ?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"ሁሉም የቢትኮይን ዋሌቶች ተጠላላፊ ናቸው — ለንግድዎ የሚስማማውን ይምረጡ። ነፃ፣ ወዲያውኑ ክፍያ መወረድ፣ ምንም ተመላሾች የሉም።",
	"business/wallets::sources_breez_business":
		"Breez — ቢትኮይን-ብቻ Lightning ዋሌት",
	"business/wallets::sources_ibex":
		"IBEX — Lightning የክፍያ መሠረተ ልማት",
	"business/wallets::sources_opennode":
		"OpenNode — የቢትኮይን ክፍያ ፕሮሰሰር",
	"business/wallets::sources_square": "Square — የቢትኮይን ክፍያዎችን ይቀበሉ",
	"business/wallets::sources_zaprite":
		"Zaprite — ለንግዶች የቢትኮይን ደረሰኝ",
	"business/wallets::wallets_hero_subtitle":
		"የቢትኮይን ዋሌቶች ነፃ ናቸው። ለንግድዎ የሚስማማውን ይምረጡ — በአካል፣ በመስመር ላይ፣ ወይም በደረሰኝ ላይ የተመሠረተ — እና በደቂቃዎች ውስጥ ቢትኮይንን መቀበል ይጀምሩ።",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice":
		"በደረሰኝ ላይ ለተመሠረቱ ንግዶች ዋሌቶች",
	"business/wallets::wallets_section_invoice_intro":
		"ደንበኞችን ደረሰኝ የሚልኩ ከሆነ (ምክር፣ ፍሪላንስ፣ B2B አገልግሎቶች)፣ በደረሰኝ ዙሪያ የተገነባ ዋሌት ይጠቀሙ። ደንበኛዎ የቢትኮይን ደረሰኝ በጥቂት ጠቅታዎች ይከፍላል።",
	"business/wallets::wallets_section_multiple":
		"ብዙ ሠራተኞች ላሏቸው ንግዶች ዋሌቶች",
	"business/wallets::wallets_section_multiple_intro":
		"በካሽ ሬጅስተር ክፍያዎችን የሚወስድ ቡድን ካለዎት፣ ብዙ የሠራተኛ መግባቶችን የሚደግፍ ዋሌት ይምረጡ — ስለዚህ እያንዳንዱ ሠራተኛ የራሱን PIN ያገኛል እና የትኛው ክፍያ እንደወሰደ ንፁህ የኦዲት ዱካ ይይዛሉ።",
	"business/wallets::wallets_section_online": "ለመስመር ላይ ንግዶች ዋሌቶች",
	"business/wallets::wallets_section_online_intro":
		"በድህረ ገጽ ላይ ይሸጣሉ? እነዚህ ዋሌቶች ወደ የመስመር ላይ መደብርዎ ይገናኛሉ እና በዓለም ዙሪያ ከማንኛውም ደንበኛ ቢትኮይንን ይቀበላሉ — ምንም ተመላሾች፣ ምንም የነጋዴ ሒሳብ አያስፈልግም።",
	"business/wallets::wallets_section_sole":
		"በግለሰብ ለተያዙ ንግዶች ዋሌቶች",
	"business/wallets::wallets_section_sole_intro":
		"ሱቅ፣ ካፌ፣ ስቱዲዮ፣ ወይም አገልግሎት በራስዎ የሚሠሩ ከሆነ፣ ከእነዚህ ዋሌቶች ማንኛውም ይሠራል። ክፍያዎችን በቢትኮይን ማቆየት ይፈልጋሉ ወይስ የእያንዳንዱን ክፍያ ክፍል በራስ ሰር ወደ አካባቢያዊ ገንዘብዎ መቀየር ይፈልጋሉ በሚለው መሠረት ይምረጡ።",
	"business/wallets::wallets_strike_note":
		"Strike Business በዜሮ ክፍያዎች እና ወዲያውኑ ክፍያ መወረድ ቢትኮይን እና Lightning ክፍያዎችን እንዲቀበሉ ያስችልዎታል። በአካል፣ በመስመር ላይ፣ እና በደረሰኝ ላይ የተመሠረቱ ክፍያዎችን ከአማራጭ በራስ ሰር ወደ አካባቢያዊ ገንዘብዎ መለወጥ ጋር ይደግፋል።",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::why_biz_s1": "ዝቅተኛ ክፍያዎች፣ ለንግዱ የበለጠ",
	"business/why::why_biz_s1_c1":
		"የቢትኮይን ክፍያዎች ከእያንዳንዱ ሽያጭ 2–3% የሚወስዱትን ባንኮች እና የክሬዲት ካርድ ኩባንያዎችን ይዘላሉ። ንግዱ ከሚከፍሉት የበለጠ ይይዛል — ይህ ብዙ ጊዜ ለእርስዎ የተሻሉ ዋጋዎች እና የተሻለ አገልግሎት ማለት ነው።",
	"business/why::why_biz_s2": "ወዲያውኑ ክፍያ መወረድ፣ ምንም ተመላሾች የሉም",
	"business/why::why_biz_s2_c1":
		"የቢትኮይን ክፍያዎች በሰከንዶች ውስጥ ክፍያ ይወርዳሉ፣ በቀጥታ ከዋሌትዎ ወደ ንግዱ። ገንዘብ ለመልቀቅ ባንክን ለቀናት መጠበቅ የለም፣ እና የሚያስወጡ የተመላሽ ክርክሮች የሉም — ስለዚህ ንግዱ ከማጭበርበር ይልቅ ደንበኞችን በማገልገል ላይ ማተኮር ይችላል።",
	"business/why::why_biz_s3": "ለመቀበል ነፃ፣ ለሁሉም ክፍት",
	"business/why::why_biz_s3_c1":
		"አንድ ንግድ ቢትኮይንን ለመቀበል ምንም ውሎች፣ ወርሃዊ ክፍያዎች፣ ወይም የማዋቀር ወጪዎች የሉም። እና በዓለም ዙሪያ በሚሊዮኖች የሚቆጠሩ የቢትኮይን ተጠቃሚዎች የሚቀበሉ ነጋዴዎችን በንቃት ይፈልጋሉ — ይህ ለዚህ ንግድ አዳዲስ ደንበኞች ላይ ነፃ መጋለጥ ይሰጠዋል።",
	"business/why::why_business_cta_intro":
		"ንግድ ያካሂዳሉ እና ቢትኮይንን መቀበል መጀመር ይፈልጋሉ?",
	"business/why::why_business_cta_link": "እንዴት እንደሚሠራ ይመልከቱ →",
	"business/why::why_for_business":
		"ቢትኮይን ለዚህ ንግድ ለምን ግሩም እንደሆነ",
	"business/why::why_for_business_intro":
		"ቢትኮይንን መቀበል ንግድን ከእያንዳንዱ ሽያጭ ተጨማሪ እንዲይዝ፣ ያለ ተመላሾች ወዲያውኑ እንዲከፈል እና የቢትኮይን ተጠቃሚዎች ዓለም አቀፍ ተመልካቾችን እንዲደርስ ያስችለዋል — ሁሉም ዜሮ ውሎች እና ዜሮ ወርሃዊ ክፍያዎች።",
	"business/why::why_good_for_you_intro":
		"ቢትኮይን በካሽ ሬጅስተር ብቻ ጠቃሚ አይደለም — ቁጠባዎን፣ ግላዊነትዎን እና የመገበያየት ነፃነትዎን የሚጠብቅ የተሻለ የገንዘብ ዓይነት ነው። አጭር አጠቃላይ እይታ ይኸው።",
	"business/why::why_hero_subtitle":
		"አንድ Bitcoin Accepted Here ስቲከር ቃኝተዋል። ይህ ለምን ጥሩ ዜና እንደሆነ ይኸው — ለዚህ ንግድ እና ለእርስዎ።",
	"business/why::why_intro_c1":
		"የሚገኙበት ንግድ ቢትኮይንን ይቀበላል — በዓለም ዙሪያ ማንኛውም ሰው ባንኮች ወይም መካከለኛዎች ክፋይ ሳይወስዱ ሊጠቀምበት የሚችል ዘመናዊ፣ ክፍት ምንጭ የክፍያ አውታረ መረብ።",
	"business/why::why_intro_c2":
		"ከታች ቢትኮይንን መቀበል ለዚህ ንግድ ጥሩ የሆነበት አጭር ስሪት፣ እንዲሁም ቢትኮይንን መጠቀም ለእርስዎ እንደ ደንበኛ ጥሩ የሆነበት።",
	"business/why::why_next_business_label": "ቢትኮይን ይቀበሉ",
	"business/why::why_next_business_title":
		"በንግድዎ ቢትኮይንን ይቀበሉ",
	"business/why::why_next_buy_label": "ቢትኮይን ይግዙ",
	"business/why::why_next_buy_title": "የመጀመሪያ ቢትኮይንዎን ይግዙ",
	"business/why::why_next_learn_label": "ተጨማሪ ይወቁ",
	"business/why::why_next_learn_title": "ስለ ቢትኮይን ተጨማሪ ይወቁ",
	"business/why::why_next_wallet_label": "ዋሌት ያግኙ",
	"business/why::why_next_wallet_title": "የራስዎን የቢትኮይን ዋሌት ያግኙ",
	"business/why::why_whats_next_heading": "ቀጥሎ ወዴት?",
	"business/why::why_whats_next_intro":
		"ይህ የቢትኮይን ስቲከርን መቃኘትዎ የመጀመሪያ ከሆነ፣ ከዚህ ለመሄድ በጣም ጠቃሚ ቦታዎች ይኸው።",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_header_subtitle":
		"የመጀመሪያ ቢትኮይንዎን ለመግዛት ቀላል፣ ደረጃ-በ-ደረጃ መመሪያ።",
	"buy::buy_howto_name": "ቢትኮይን እንዴት መግዛት እንደሚቻል",
	"buy::buy_meta_description":
		"ቢትኮይንን በደህና እንዴት መግዛት እንደሚቻል በእኛ ደረጃ-በ-ደረጃ መመሪያችን ይወቁ። ለእርስዎ ምርጥ የቢትኮይን መግዣ አማራጮችን ለማግኘት አገርዎን እና የክፍያ ዘዴዎን ይምረጡ።",
	"buy::buy_step_1_eyebrow": "ደረጃ 1",
	"buy::buy_step_2_eyebrow": "ደረጃ 2",
	"buy::buy_step_3_eyebrow": "ደረጃ 3",
	"buy::buy_step_4_eyebrow": "ደረጃ 4",
	"buy::buy_storage_cta_label": "ቀጣይ እርምጃ",
	"buy::sources_bisq":
		"Bisq — ያልተማከለ ከእኩያ-ወደ-እኩያ የቢትኮይን ኤክስቼንጅ",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — ዓለም አቀፍ የቢትኮይን ATM ማውጫ",
	"buy::sources_kraken": "Kraken — የተመሠረተ የቢትኮይን ኤክስቼንጅ",
	"buy::sources_relai":
		"Relai — የስዊስ ቢትኮይን-ብቻ የራስ-ቁጥጥር መተግበሪያ",
	"buy::sources_river":
		"River — ቢትኮይን-ብቻ መግዣ፣ ማዕድን ማውጣት፣ እና ቁጥጥር",
	"buy::sources_strike_lightning":
		"Strike — ቢትኮይንን በ Lightning Network ድጋፍ ይግዙ",
	"buy::sources_swan":
		"Swan Bitcoin — ቢትኮይን-ብቻ የዶላር-ወጪ አማካይ ኢንቨስትመንት",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "ቋንቋ ይጨምሩ",
	"common::common_next_buy_bitcoin": "ቢትኮይን ይግዙ",
	"common::common_next_buy_bitcoin_desc":
		"ቢትኮይንን በደህና እንዴት መግዛት እንደሚቻል ይወቁ",
	"common::common_next_calculate": "የዋጋ ግሽበትዎን ያስሉ",
	"common::common_next_calculate_desc":
		"ዋጋ ግሽበት ደመወዝዎን ከጊዜ ወደ ጊዜ እንዴት እንደሚነካ ይመልከቱ",
	"common::common_next_get_wallet": "ዋሌት ያግኙ",
	"common::common_next_get_wallet_desc":
		"የመጀመሪያ የቢትኮይን ዋሌትዎን ያግኙ — ነፃ ነው",
	"common::common_next_keep_learning": "መማር ይቀጥሉ",
	"common::common_next_keep_learning_desc":
		"ቢትኮይን ዓለምን እንዴት እያሻሻለ እንዳለ ይመልከቱ",
	"common::common_site_tagline": "የቢትኮይን ትምህርት ለሁሉም።",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_btc_map":
		"BTC Map — ቢትኮይን የሚቀበሉ ነጋዴዎች ዓለም አቀፍ ማውጫ",
	"common::common_source_btcpayserver":
		"BTCPay Server — ነፃ፣ ክፍት ምንጭ፣ ራስ-ተስተናጋጅ የቢትኮይን ክፍያ ፕሮሰሰር",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
	"common::common_source_oshi":
		"Oshi — ለነጋዴዎች የቢትኮይን ሽልማት መድረክ",
	"common::common_source_strike_business":
		"Strike — ለንግዶች የቢትኮይን እና Lightning ክፍያዎች",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "የቢትኮይን መረጃ",
	"common::common_sources_group_cpi":
		"ዋጋ ግሽበት / የሸማች ዋጋ ኢንዴክስ",
	"common::common_sources_group_debt": "የመንግሥት ዕዳ",
	"common::common_sources_group_money": "የገንዘብ አቅርቦት መረጃ",
	"common::common_sources_group_stories": "እውነተኛ-ዓለም ምሳሌዎች",
	"common::common_sources_treasury_auction":
		'James Lavish — "Can a Treasury Auction Fail?"',
	"common::common_sticker_files_mission_6":
		"የእንግሊዝኛ ስቲከሮች በነፃ።",
	"common::common_sticker_files_next_flyers_label": "በራሪ ወረቀቶች",
	"common::common_sticker_files_next_flyers_title":
		"የቢትኮይን በራሪ ወረቀት ያትሙ",
	"common::common_sticker_files_next_languages_label": "የስቲከር ፋይሎች",
	"common::common_sticker_files_next_languages_title":
		"በሌሎች ቋንቋዎች የስቲከር ፋይሎችን ይመልከቱ",
	"common::common_sticker_name_bdhi_black":
		'"Bitcoin Doesn\'t Have Inflation" ስቲከር (ጥቁር)',
	"common::common_sticker_name_bdhi_orange":
		'"Bitcoin Doesn\'t Have Inflation" ስቲከር (ብርቱካንማ)',
	"common::common_sticker_name_caution":
		'"Caution! Melting Ice Cube" የቢትኮይን ስቲከር',
	"common::common_sticker_name_cure_inflation":
		'"Cure Inflation" የቢትኮይን ስቲከር',
	"common::common_sticker_name_danger":
		'"Danger! Inflation Ahead" የቢትኮይን ስቲከር',
	"common::common_sticker_name_fix":
		'"Fix The Money, Fix The World" የቢትኮይን ስቲከር',
	"common::common_sticker_name_got_inflation":
		'"Got Inflation?" የቢትኮይን ስቲከር',
	"common::common_sticker_name_study": '"Study Bitcoin" ስቲከር',
	"common::common_sticker_name_warning":
		'"Warning! Inflation is Stealing Your Savings" የቢትኮይን ስቲከር',
	"common::common_sticker_name_what_if":
		'"What if your money didn\'t have inflation?" የቢትኮይን ስቲከር',
	"common::common_sticker_tips_heading": "የስቲከር ምክሮች",
	"common::common_sticker_tips_intro":
		"ስቲከሮችዎን ካተሙ በኋላ፣ በሚታዩበት ቦታ ያስቀምጡዋቸው! ጥሩ የስቲከር ቦታዎች እነዚህ ናቸው፦",
	"common::common_sticker_tips_list_1":
		"ሰዎች በሚያዩበት ህዝባዊ ቦታ",
	"common::common_sticker_tips_list_2":
		"በፍጥነት የማይወገዱ ሊሆኑ በሚችሉ ቦታዎች (ስቲከሮቹ ምንም ዘላቂ ጉዳት አያስከትሉም)",
	"common::common_sticker_tips_list_3":
		"በቀላሉ በሚጣበቁባቸው ላይ (ብረት፣ ፕላስቲክ፣ መስታወት)",
	"common::common_sticker_tips_list_4":
		"በግል ንብረት፣ ምልክቶችን በመሸፈን፣ በ ATM ወይም በነዳጅ ፓምፖች ላይ አይደለም",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "እኛ",
	"common::common_stickers_printer_suffix":
		"እንጠቀማለን ግን ማንኛውንም የስቲከር ኩባንያ መጠቀም ይችላሉ።",
	"common::common_whats_next": "ቀጥሎ ምን?",
	// Untranslated entries — translate into Amharic
	"common::common_sticker_files_print_these":
		"እነዚህን በ1 ጠቅታ ያትሙ",
	"common::common_stickers_dimensions_bdhi":
		"21.59 ሴ.ሜ x 4.6482 ሴ.ሜ (8.5 ኢንች x 1.83 ኢንች)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 ሴ.ሜ x 6.35 ሴ.ሜ (8.25 ኢንች x 2.5 ኢንች)",
	"common::common_stickers_dimensions_caution":
		"12.0142 ሴ.ሜ x 7.9502 ሴ.ሜ (4.73 ኢንች x 3.13 ኢንች)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 ሴ.ሜ x 12.7 ሴ.ሜ (2.5 ኢንች x 5 ኢንች)",
	"common::common_stickers_dimensions_danger":
		"11.4544 ሴ.ሜ x 8.382 ሴ.ሜ (4.51 ኢንች x 3.3 ኢንች)",
	"common::common_stickers_dimensions_fix":
		"11.3792 ሴ.ሜ x 6.8072 ሴ.ሜ (4.48 ኢንች x 2.68 ኢንች)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 ሴ.ሜ x 14.605 ሴ.ሜ (3.12 ኢንች x 5.75 ኢንች)",
	"common::common_stickers_dimensions_study":
		"14.605 ሴ.ሜ x 5.1308 ሴ.ሜ (5.75 ኢንች x 2.02 ኢንች)",
	"common::common_stickers_dimensions_warning":
		"10.414 ሴ.ሜ x 9.2202 ሴ.ሜ (4.1 ኢንች x 3.63 ኢንች)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 ሴ.ሜ x 7.62 ሴ.ሜ (8.58 ኢንች x 3 ኢንች)",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"የዋጋ ግሽበት ክፍተትዎን ያስሉ",
	"compound-inflation-calculator::cic_cta_label": "ቀጣይ እርምጃ",
	"compound-inflation-calculator::cic_hero_subtitle":
		"ከዋጋ ግሽበት ጋር ለመከታተል ደመወዝዎ ምን ያህል መጨመር እንዳለበት ይመልከቱ።",
	"compound-inflation-calculator::cic_next_explore_topics":
		"ተጨማሪ ርዕሶችን ያስሱ",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"ቢትኮይን ከገንዘብ፣ ነፃነት፣ ኢነርጂ፣ እና ሌሎች ጋር እንዴት እንደሚገናኝ ይመልከቱ።",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"ዋጋ ግሽበት እንዴት እንደሚሠራ ይወቁ",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Money Supply",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"ነፃ፣ ሊታተሙ የሚችሉ የቢትኮይን በራሪ ወረቀቶች። ብዙ ሰዎች ስለ ቢትኮይን እንዲማሩ ለማገዝ በሕዝብ ቦታ ያስቀምጧቸው።",
	"flyers::flyers_hero_title":
		"የቢትኮይን በራሪ ወረቀቶችን ያትሙ እና ይለጥፉ",
	"flyers::flyers_next_get_stickers": "ቃሉን ያሰራጩ",
	"flyers::flyers_next_get_stickers_desc":
		"ነፃ የቢትኮይን ስቲከር ፓኬት ያዙ",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_card_business_label": "የንግድ ኪት",
	"get-involved::get_involved_card_business_source": "ምንጭ: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"ነፃ የቢትኮይን የንግድ ኪት ይጠይቁ",
	"get-involved::get_involved_card_flyers_label":
		"ሊታተሙ የሚችሉ በራሪ ወረቀቶች",
	"get-involved::get_involved_card_flyers_source": "ምንጭ: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"ነፃ የቢትኮይን በራሪ ወረቀት ያውርዱ እና ያትሙ",
	"get-involved::get_involved_card_github_label": "ክፍት ምንጭ",
	"get-involved::get_involved_card_github_source": "ምንጭ: GitHub →",
	"get-involved::get_involved_card_github_title":
		"በ GitHub ላይ ለ bitcoin.rocks አስተዋፅኦ ያድርጉ",
	"get-involved::get_involved_card_stickers_label": "ነፃ ስቲከሮች",
	"get-involved::get_involved_card_stickers_source":
		"ምንጭ: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"ነፃ የቢትኮይን ስቲከር ፓኬት በደጃፍዎ እንዲላክልዎ ይጠይቁ",
	"get-involved::get_involved_flyers_content_1":
		"በራሪ ወረቀቶች ቢትኮይንን ለማህበረሰብዎ ለማስተዋወቅ በጣም ቀላሉ መንገዶች አንዱ ናቸው። ነፃ ሊታተም የሚችል የቢትኮይን በራሪ ወረቀት ያውርዱ፣ የፈለጉትን ያህል ቅጂዎችን ያትሙ፣ እና በማህበረሰብ ቦርዶች፣ በቡና ቤቶች፣ በስብሰባዎች፣ ወይም ሰዎች በሚሰበሰቡበት ሌላ ቦታ ላይ ይለጥፉ።",
	"get-involved::get_involved_flyers_content_2":
		"እያንዳንዱ በራሪ ወረቀት አሳሳቢ አርዕስት እና ጠያቂ አንባቢዎችን ወደ bitcoin.rocks ለመላክ የሚያገለግል QR ኮድ ያካትታል።",
	"get-involved::get_involved_flyers_content_3":
		"ከስቲከሮች በተቃራኒ፣ በራሪ ወረቀቶች በዓለም ዙሪያ ከየትኛውም ቦታ ሊታተሙ ይችላሉ — የሚያስፈልግዎት ፕሪንተር እና ጥቂት ደቂቃዎች ብቻ ናቸው።",
	"get-involved::get_involved_flyers_header":
		"በራሪ ወረቀት ያትሙ እና ይለጥፉ",
	"get-involved::get_involved_flyers_image_alt":
		"ከ bitcoin.rocks የሚገኘው ነፃ ሊታተም የሚችል የቢትኮይን በራሪ ወረቀት ቅድመ እይታ",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks በ MIT ፈቃድ ስር የሚንፀባረቅ ነፃ፣ ክፍት ምንጭ ፕሮጀክት ነው። ተልዕኳችን በትምህርት በኩል የቢትኮይን ተቀባይነትን ማፋጠን ነው — እና በብቻችን ማድረግ አንችልም።",
	"get-involved::get_involved_github_content_2":
		"ገንቢ፣ ዲዛይነር፣ ፀሃፊ፣ ወይም ተርጓሚ ቢሆኑም ለመርዳት መንገድ አለ። በተለይ የበለጠ ሰዎች በዓለም ዙሪያ በአፍ መፍቻ ቋንቋቸው ስለ ቢትኮይን ለመማር እንዲችሉ ይዘታችንን በተጨማሪ ቋንቋዎች መተርጎም የሚችሉ አስተዋፅኦ አድራጊዎችን እንቀበላለን።",
	"get-involved::get_involved_github_content_3":
		"ማከማቻውን ይቅደሙ፣ የመሳብ ጥያቄ ይክፈቱ፣ ጉዳይ ያቅርቡ፣ ወይም ድጋፍዎን ለማሳየት ፕሮጀክቱን ብቻ ኮከብ ያድርጉት። እያንዳንዱ አስተዋፅኦ ቢትኮይን ተጨማሪ ሰዎችን እንዲደርስ ይረዳዋል።",
	"get-involved::get_involved_github_header":
		"በ GitHub ላይ አስተዋፅኦ ያድርጉ",
	"get-involved::get_involved_sticker_image_alt":
		"ከ bitcoin.rocks የሚገኘው ነፃ የቢትኮይን የጽሁፍ ስቲከር ፓኬት",
});

/* ─────────────── index (home) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "መቆጠብ",
	"index::home_card_label_art_1": "እንነፃፀር",
	"index::home_card_label_art_2": "ቃሉን ያሰራጩ",
	"index::home_card_label_art_3": "የመንገድ ጥበብ",
	"index::home_card_label_bank_runs": "ሙሉ ክምችት ስርዓት",
	"index::home_card_label_bonds": "እንነፃፀር",
	"index::home_card_label_business_1": "ልዩነቱ ምንድን ነው?",
	"index::home_card_label_business_2": "የቢትኮይን ክፍያዎችን ይቀበሉ",
	"index::home_card_label_cash": "እንነፃፀር",
	"index::home_card_label_cbdc": "ክፍት ወይስ ዝግ?",
	"index::home_card_label_coding_1": "ተግባራዊ ትምህርት",
	"index::home_card_label_coding_2": "ሃርድዌር ይገንቡ",
	"index::home_card_label_coding_3": "የኮድ እንቆቅልሾች",
	"index::home_card_label_crowdfunding_1": "EndSARS ተቃውሞዎች",
	"index::home_card_label_crowdfunding_2": "የማይቆም ገንዘብ",
	"index::home_card_label_crowdfunding_3": "ፕሮጀክትዎን ይደግፉ",
	"index::home_card_label_crypto": "ልዩነቱ ምንድን ነው?",
	"index::home_card_label_energy_1": "የኃይል አውታረ መረብ ማረጋጋት",
	"index::home_card_label_energy_4": "የፍላጎት ምላሽ",
	"index::home_card_label_energy_5": "ገጠር ኤሌክትሪፊኬሽን",
	"index::home_card_label_energy_6": "ታዳሽ ማበረታቻዎች",
	"index::home_card_label_environment_1": "የሚቴን ቅነሳ",
	"index::home_card_label_environment_2": "ብሔራዊ ፓርክን ታደገ",
	"index::home_card_label_environment_3": "በጣም አረንጓዴ ኢንዱስትሪ",
	"index::home_card_label_environment_4":
		"የሚቃጠል ጋዝን ይቀንሳል",
	"index::home_card_label_equality_1": "ተስፋ እና ዕድል",
	"index::home_card_label_equality_2": "ጨዋታ ቀያሪ",
	"index::home_card_label_food_1": "የምግብ ዋጋዎች",
	"index::home_card_label_food_2": "እርሻዎች እና አፈር",
	"index::home_card_label_freedom_1": "ፈላጭ ቆራጭ ሥርዓቶች",
	"index::home_card_label_freedom_2": "ልዩ መሣሪያ",
	"index::home_card_label_get_started_1": "የጀማሪ መሠረታዊ ነገሮች",
	"index::home_card_label_get_started_2": "የመጀመሪያ ዋሌትዎ",
	"index::home_card_label_get_started_3": "ቢትኮይን ይግዙ",
	"index::home_card_label_gold": "የቱ የተሻለ ነው?",
	"index::home_card_label_housing_1": "ተመጣጣኝ መኖሪያ",
	"index::home_card_label_human_rights_1": "የሰብአዊ መብቶች አፈፃፀም",
	"index::home_card_label_human_rights_2": "የመሠረት ደረጃ ተቀባይነት",
	"index::home_card_label_human_rights_3": "ዓለም አቀፍ ተፅዕኖ",
	"index::home_card_label_inflation": "ቢትኮይን የተሻለ ገንዘብ ነው",
	"index::home_card_label_networks_1": "የቀጥታ አውታረ መረብ እይታ",
	"index::home_card_label_networks_2": "እንነፃፀር",
	"index::home_card_label_payments_1": "ልዩነቱ ምንድን ነው?",
	"index::home_card_label_payments_2": "ፈጣን እና ርካሽ ክፍያዎች",
	"index::home_card_label_payments_3": "የውጭ ገንዘብ ሽግግር",
	"index::home_card_label_payments_4": "ክፍያዎችን ይቀበሉ",
	"index::home_card_label_politics_1": "የፖለቲካ ፓራዶክስ",
	"index::home_card_label_politics_2": "እርምጃ ይውሰዱ",
	"index::home_card_label_property_rights_1": "እንነፃፀር",
	"index::home_card_label_property_rights_2": "እውነተኛ ባለቤትነት",
	"index::home_card_label_salary": "ደመወዝዎን ይጠብቁ",
	"index::home_card_label_self_custody_1": "የቢትኮይን ዋሌት መመሪያ",
	"index::home_card_label_self_custody_2": "በጣም አስፈላጊው እርምጃ",
	"index::home_card_label_self_custody_3": "ሉዓላዊ ገንዘብ",
	"index::home_card_label_war_1": "ፍጻሜ የሌለውን ጦርነት ያስቁሙ",
	"index::home_card_label_war_2": "አርበኞችን መርዳት",
	"index::home_card_label_war_3": "የጦርነት ጊዜ ማምለጥ",
	"index::home_h1":
		"ቢትኮይን የተሻለ ዓለምን እየገነባ ያለ የተሻለ ገንዘብ ነው።",
	"index::home_nav_about": "ስለ እኛ",
	"index::home_nav_get_involved": "ይሳተፉ",
	"index::home_nav_learn": "ይወቁ",
	"index::home_source_prefix": "ምንጭ:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "ታዋቂ Lightning ዋሌቶች",
	"lightning::lightning_hardware_cta_label": "ሃርድዌር ዋሌቶች",
	"lightning::lightning_header_subtitle":
		"Lightning ቢትኮይንን በሰከንዶች ውስጥ በአንድ ሳንቲም ክፍልፋይ እንዲልኩ ያስችልዎታል — ምን ያህል ቢትኮይን ለማውጣት እንዳቀዱ የሚስማማው የዋሌት ልውውጦችን ይምረጡ።",
	"lightning::lightning_s1_c4_end": "ለተጨማሪ መረጃ።",
	"lightning::lightning_s1_c4_link":
		"የቢትኮይን ሃርድዌር ዋሌት መመሪያ",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning ዋሌት",
	"lightning::sources_breez_lightning":
		"Breez — ራስ-ቁጥጥር Lightning ዋሌት",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network ሰነዶች",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — ቁጥጥር Lightning ዋሌት",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1":
		"ብዙ ባህሪያት እና ብጁ አወቃቀር",
	"nostr/index::nostr_amethyst_f2":
		"የተለየ የቢትኮይን ዋሌት ይፈልጋል",
	"nostr/index::nostr_amethyst_f3": "100% ነፃ",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"ታዋቂ Twitter-መሰል በይነገጽ",
	"nostr/index::nostr_damus_f2":
		"የተለየ የቢትኮይን ዋሌት ይፈልጋል",
	"nostr/index::nostr_damus_f3": "100% ነፃ",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading": "ነፃ Nostr ክላይንት ያውርዱ",
	"nostr/index::nostr_download_intro":
		"Nostr ክላይንቶች በ Nostr አውታረ መረብ ላይ እንዲያነቡ እና እንዲለጥፉ የሚያስችሉ ነፃ መተግበሪያዎች ናቸው። ሁሉም ተጠላላፊ ናቸው — በማንኛውም ጊዜ ክላይንቶችን መቀየር እና ተከታዮችዎን እና ይዘትዎን ማቆየት ይችላሉ።",
	"nostr/index::nostr_hero_subtitle":
		"Nostr በመስመር ላይ ለመገናኘት አዲስ ያልተማከለ ፕሮቶኮል ነው — ማንኛውም ነጠላ ኩባንያ አይቆጣጠረውም፣ Bitcoin zaps የተገነቡ ናቸው፣ እና ተከታዮችዎን ሳያጡ በመተግበሪያዎች መካከል መንቀሳቀስ ይችላሉ።",
	"nostr/index::nostr_hero_title": "Nostr ምንድን ነው?",
	"nostr/index::nostr_intro_c1":
		"Nostr ከኢሜይል ጋር ተመሳሳይ ነው፦ ፕሮቶኮሉን ማንም አይይዘውም፣ ማንኛውም ሰው ከላይ መተግበሪያ መገንባት ይችላል፣ እና የሚወዱትን ማንኛውም መተግበሪያ መምረጥ ይችላሉ። ከ Twitter ወይም Facebook በተቃራኒ፣ ሊያግድዎ፣ ሊያስወግድዎ፣ ወይም ሊቀንስዎ የሚችል ምንም ማዕከላዊ ኩባንያ የለም።",
	"nostr/index::nostr_intro_c2":
		"ከታች Nostr አስፈላጊ የሆነበት አጭር ስሪት — እና ዛሬ ለመጀመር የሚያስፈልገው እያንዳንዱ ነፃ Nostr ክላይንት።",
	"nostr/index::nostr_iris_f1":
		"በጣም ቀላል — መጫን አያስፈልግም",
	"nostr/index::nostr_iris_f2":
		"Nostr ን በፈተና መለያ ለመሞከር ቀላል መንገድ",
	"nostr/index::nostr_iris_f3": "100% ነፃ",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "የበለጠ ጥልቅ ይሂዱ",
	"nostr/index::nostr_learn_more_title":
		"በ nostr.how ላይ ስለ Nostr ተጨማሪ ይወቁ",
	"nostr/index::nostr_page_description":
		"Nostr ለመስመር ላይ መገናኛ አዲስ ያልተማከለ ፕሮቶኮል ነው — ማንኛውም ነጠላ ኩባንያ አይቆጣጠረውም፣ Bitcoin zaps በተፈጥሮ የተገነቡ ናቸው፣ እና ተከታዮችን ሳያጡ በክላይንቶች መካከል መንቀሳቀስ ይችላሉ።",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone፣ Android እና ድር",
	"nostr/index::nostr_platform_web": "የድር አሳሽ",
	"nostr/index::nostr_primal_f1": "የሚመከር የመጀመሪያ ክላይንት",
	"nostr/index::nostr_primal_f2":
		"Bitcoin zap ዋሌት የተገነባ",
	"nostr/index::nostr_primal_f3": "100% ነፃ",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "ፕሮቶኮል፣ መድረክ አይደለም",
	"nostr/index::nostr_s1_c1":
		"Nostr ያለ ሳንሱር፣ ማባረር፣ ወይም ማዳከም ፍርሃት በመስመር ላይ እንዲገናኙ የሚያስችል አዲስ ፕሮቶኮል ነው።",
	"nostr/index::nostr_s1_c2":
		"እንደ Twitter እና Facebook ያሉ መድረኮች በአንድ ኩባንያ የሚቆጣጠሩ ናቸው፣ ግን የ Nostr ፕሮቶኮልን ማንም አይቆጣጠረውም።",
	"nostr/index::nostr_s2": "ለመንቀሳቀስ ነፃነት",
	"nostr/index::nostr_s2_c1":
		"Nostr ከኢሜይል ጋር ተመሳሳይ ነው። የኢሜይል ፕሮቶኮልን ማንም አይቆጣጠረውም፣ እና ማንኛውም ሰው ከላይ ክላይንት (እንደ Gmail፣ Hotmail፣ ወዘተ.) መገንባት ይችላል።",
	"nostr/index::nostr_s2_c2":
		"የ Nostr ፕሮቶኮልንም ማንም አይቆጣጠረውም፣ እና ማንኛውም ሰው ከላይ ክላይንት (እንደ Damus፣ Amethyst፣ ወዘተ.) መገንባት ይችላል።",
	"nostr/index::nostr_s2_c3":
		"አንድ የተወሰነ ክላይንት እንዴት እንደሚሠራ ካልወደዱ፣ ተከታዮችዎን ወይም ይዘትዎን ሳያጡ የ Nostr መለያዎን ወደ ሌላ ክላይንት በቀላሉ ማንቀሳቀስ ይችላሉ።",
	"nostr/index::nostr_s3": "ቢትኮይን የተገነባ ነው",
	"nostr/index::nostr_s3_c1":
		"ቢትኮይን በተፈጥሮ በ Nostr ፕሮቶኮል ውስጥ የተገነባ ነው። የሚወዱትን ይዘት ካዩ፣ እንደ አመስግኖት ቢትኮይንን ወደ አንድ ሰው በቀላሉ zap ማድረግ ይችላሉ!",
	"nostr/index::nostr_s3_c2":
		"እንደ Twitter እና Facebook ባሉ ማዕከላዊ መድረኮች ላይ፣ ማዕከላዊው ኩባንያ ከይዘትዎ ገንዘብ ያገኛል። ነገር ግን እንደ Nostr ባሉ ክፍት ፕሮቶኮሎች ላይ፣ እርስዎ ከይዘትዎ ገንዘብ ያገኛሉ።",
	"nostr/index::sources_damus":
		"Damus — iPhone Nostr ክላይንት",
	"nostr/index::sources_iris":
		"Iris — በአሳሽ ላይ የተመሠረተ Nostr ክላይንት",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr ምንድን ነው?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — ክፍት ምንጭ ስፔስፊኬሽን",
	"nostr/index::sources_primal":
		"Primal — የተገነባ የ Bitcoin zap ዋሌት ያለው Nostr ክላይንት",
	"nostr/index::what_is_nostr": "Nostr ምንድን ነው?",
});

/* ─────────────── sticker-language-success ─────────────── */
T["sticker-language-success::sticker_language_success_hero_title"] =
	"ጥያቄ ደርሶናል 🎉";

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "በብዛት ያዙ",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"በ Nostr ላይ ያጋሩ",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr ምንድን ነው?",
	"sticker-success::sticker_success_bulk_header":
		"ተጨማሪ ስቲከሮች ይፈልጋሉ?",
	"sticker-success::sticker_success_hero_title":
		"ስቲከሮችዎ በመንገዱ ላይ ናቸው 🎉",
	"sticker-success::sticker_success_share_header":
		"የስቲከር ቦታዎችዎን ያጋሩ",
	"sticker-success::sticker_success_tips_header": "ጥሩ የስቲከር ቦታዎች",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "ይህን ፓኬት ይምረጡ",
	"stickers::stickers_bulk_c1":
		"ከጥቂት ስቲከሮች በላይ ይፈልጋሉ?",
	"stickers::stickers_bulk_c2":
		"ከምንጠቀመው ተመሳሳይ ማተሚያ ቤት በብዛት ያዙ",
	"stickers::stickers_bulk_c3":
		"— የሚገዙት ባየ ቁጥር፣ በአንድ ስቲከር ውድነቱ ይቀንሳል።",
	"stickers::stickers_bulk_cta": "ስቲከሮችን በብዛት ይግዙ",
	"stickers::stickers_bulk_header": "ስቲከሮችን በብዛት ያዙ",
	"stickers::stickers_hero_subtitle":
		"ነፃ የቢትኮይን ስቲከር ፓኬት ያዙ እና ብዙ ሰዎች ስለ ቢትኮይን እንዲማሩ ለማገዝ በሕዝብ ቦታ ያስቀምጧቸው።",
	"stickers::stickers_hero_title": "ነፃ የቢትኮይን ስቲከሮች",
	"stickers::stickers_intro_c1":
		"ተልዕኳችን በህዝብ ቦታ የቢትኮይን ስቲከሮችን በማስቀመጥ ብዙ ሰዎችን orange pill ለማድረግ መርዳት ነው። ሁሉም ስቲከሮቻችን ወደ ትምህርታዊ ገጾች የሚመሩ QR ኮዶች አሏቸው ስለ",
	"stickers::stickers_intro_c2": "ቢትኮይን",
	"stickers::stickers_intro_c3": "ዋጋ ግሽበት",
	"stickers::stickers_intro_c4":
		"ከታች የስቲከር ፓኬት ይምረጡ እና እንዴት ማግኘት እንደሚፈልጉ ይምረጡ — በአሜሪካ ወይም በካናዳ ላሉ ማንኛውም ሰው ነፃ ፓኬት እናላካለን፣ ወይም በዓለም ዙሪያ የራስዎን ማተም ይችላሉ።",
	"stickers::stickers_mail_header":
		"ነፃ ስቲከሮችዎን በፖስታ እንልካለን",
	"stickers::stickers_next_print_flyers": "ማሰራጨት ይቀጥሉ",
	"stickers::stickers_next_print_flyers_desc":
		"በሕዝብ ቦታ ለመለጠፍ ነፃ የቢትኮይን በራሪ ወረቀቶችን ያትሙ",
	"stickers::stickers_option_bulk":
		"📦 ዓለም አቀፍ — በብዛት ያዙ",
	"stickers::stickers_option_canada":
		"🇨🇦 ካናዳ — በፖስታ በነፃ",
	"stickers::stickers_option_print":
		"🌍 ዓለም አቀፍ — የራሴን አተማለሁ",
	"stickers::stickers_option_usa": "🇺🇸 አሜሪካ — በፖስታ በነፃ",
	"stickers::stickers_print_c1":
		"የት ቢኖሩም የራስዎን ስቲከሮች በማተም መሳተፍ ይችላሉ። የስቲከር ፋይሎችን እና የህትመት መመሪያዎችን ለማውረድ ከታች ቋንቋዎን ይጫኑ።",
	"stickers::stickers_print_c2":
		"ሁሉም ስቲከር በሁሉም ቋንቋ አይገኝም።",
	"stickers::stickers_print_header":
		"የራስዎን ስቲከር ፋይሎች ያትሙ",
	"stickers::stickers_request_c1":
		"በአካባቢዎ ቋንቋ ስቲከር ፋይሎችን ለመጠየቅ ከታች ያለውን ቅጽ ይሙሉ። ዝግጁ ሲሆኑ እናሳውቅዎታለን።",
	"stickers::stickers_request_header": "ቋንቋዎን አያዩም?",
	"stickers::stickers_share_c2":
		"በ Nostr ላይ ይከተሉን በመፈለግ",
	"stickers::stickers_share_c3":
		"በማንኛውም Nostr ክላይንት ውስጥ።",
	"stickers::stickers_signs_pack_description":
		"የማስጠንቀቂያ፣ የአደጋ እና የጥንቃቄ-አይነት ምልክቶች ከቢትኮይን መልዕክቶች ጋር — ትኩረት ለመሳብ እና ሰዎች ቆመው እንዲያነቡ ለማድረግ የተቀረፁ።",
	"stickers::stickers_step_1_description":
		"እያንዳንዱ ፓኬት ሰዎችን ስለ ቢትኮይን የሚያስተምሩ QR ኮዶች ያሏቸው የተለያዩ የቢትኮይን ስቲከሮች አሉት።",
	"stickers::stickers_step_1_eyebrow": "ደረጃ 1",
	"stickers::stickers_step_1_header":
		"የስቲከር ፓኬትዎን ይምረጡ",
	"stickers::stickers_step_2_description":
		"በአሜሪካ እና በካናዳ ውስጥ ላሉ አድራሻዎች ነፃ ፓኬት እንልካለን። በዓለም ዙሪያ የትም ቦታ የራስዎን ማተም ወይም በብዛት ማዘዝ ይችላሉ።",
	"stickers::stickers_step_2_eyebrow": "ደረጃ 2",
	"stickers::stickers_step_2_header":
		"ስቲከሮችዎን እንዴት ማግኘት ይፈልጋሉ?",
	"stickers::stickers_text_pack_description":
		"በህዝብ ቦታዎች ጉጉትን ለማነሳሳት የተቀረፁ የቢትኮይን መፈክሮች እና አንድ-መስመር ዓረፍተ ነገሮች ድብልቅ።",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Choose Your Wallet",
	"wallets::sources_blockstream_green":
		"Blockstream Green — ራስ-ቁጥጥር የቢትኮይን ዋሌት",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — የቢትኮይን ሃርድዌር ዋሌት",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 ሃርድዌር ዋሌት",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q ሃርድዌር ዋሌት",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	"wallets::sources_passport":
		"Foundation Devices — Passport ሃርድዌር ዋሌት",
	"wallets::sources_seedsigner":
		"SeedSigner — ክፍት ምንጭ DIY የቢትኮይን መፈረሚያ መሣሪያ",
	"wallets::wallets_grid_heading": "ታዋቂ የቢትኮይን ዋሌቶች",
	"wallets::wallets_header_subtitle":
		"ዋሌት ለመምረጥ፣ ቁልፎችዎን ለመጠበቅ፣ እና በቢትኮይንዎ ላይ ሙሉ ቁጥጥር ለመውሰድ ደረጃ-በ-ደረጃ መመሪያ።",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace === "inflation") continue;
		const mapKey = `${e.namespace}::${e.key}`;
		if (e.targetTranslation !== null && e.targetTranslation !== undefined) {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, mapKey)) {
			e.targetTranslation = T[mapKey];
			filled++;
		} else {
			unmatched.push(mapKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest: filled ${filled}, already-done ${skipped}, unmatched ${unmatched.length}`,
	);
	if (unmatched.length) {
		console.log("Unmatched keys:");
		for (const k of unmatched.slice(0, 50)) console.log("  " + k);
		if (unmatched.length > 50) {
			console.log("  ... and " + (unmatched.length - 50) + " more");
		}
	}
}

main();
