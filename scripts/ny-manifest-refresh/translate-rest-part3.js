#!/usr/bin/env node
/**
 * Chichewa (ny) manifest refresh — non-inflation namespaces, part 3 (final).
 * Covers: index (home page), remaining common keys, business/why,
 * remaining buy keys, and remaining business/accounting keys.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"ny.json",
);

const T = {};

/* ─────────────── index (home page) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "kusunga",
	"index::home_card_label_art_1": "Tiyerekezere",
	"index::home_card_label_art_2": "Falitsani mawu",
	"index::home_card_label_art_3": "Zojambula za m'misewu",
	"index::home_card_label_bank_runs": "Dongosolo la nkhokwe yathunthu",
	"index::home_card_label_bonds": "Tiyerekezere",
	"index::home_card_label_business_1": "Kodi kusiyana ndi chiyani?",
	"index::home_card_label_business_2": "Landirani malipiro a Bitcoin",
	"index::home_card_label_cash": "Tiyerekezere",
	"index::home_card_label_cbdc": "Yotseguka kapena yotsekedwa?",
	"index::home_card_label_coding_1": "Phunziro lolumikizana",
	"index::home_card_label_coding_2": "Mangani hardware",
	"index::home_card_label_coding_3": "Mavuto a coding",
	"index::home_card_label_crowdfunding_1": "Ziwonetsero za EndSARS",
	"index::home_card_label_crowdfunding_2": "Ndalama yosaletseka",
	"index::home_card_label_crowdfunding_3": "Perekani ndalama ku ntchito yanu",
	"index::home_card_label_crypto": "Kodi kusiyana ndi chiyani?",
	"index::home_card_label_energy_1": "Kukhazikitsa gridi",
	"index::home_card_label_energy_4": "Kuyankha kufunika",
	"index::home_card_label_energy_5": "Kupatsa magetsi kumidzi",
	"index::home_card_label_energy_6":
		"Zolimbikitsa za mphamvu zatsopano",
	"index::home_card_label_environment_1": "Kuchepetsa methane",
	"index::home_card_label_environment_2": "Yapulumutsa paki yadziko",
	"index::home_card_label_environment_3": "Bizinesi yobiriwira kwambiri",
	"index::home_card_label_environment_4":
		"Imachepetsa mpweya wapatuluka",
	"index::home_card_label_equality_1": "Chiyembekezo & mwayi",
	"index::home_card_label_equality_2": "Chosintha masewera",
	"index::home_card_label_food_1": "Mitengo ya zakudya",
	"index::home_card_label_food_2": "Minda & dothi",
	"index::home_card_label_freedom_1": "Maboma a chankhanza",
	"index::home_card_label_freedom_2": "Chida chapadera",
	"index::home_card_label_get_started_1": "Maziko a oyamba",
	"index::home_card_label_get_started_2": "Chikwama chanu choyamba",
	"index::home_card_label_get_started_3": "Gulani Bitcoin",
	"index::home_card_label_gold": "Kodi yabwino ndi iti?",
	"index::home_card_label_housing_1": "Nyumba zofikirika",
	"index::home_card_label_human_rights_1":
		"Kukakamiza ufulu wa anthu",
	"index::home_card_label_human_rights_2":
		"Kugwiritsidwa ntchito kwa anthu wamba",
	"index::home_card_label_human_rights_3": "Zotsatira padziko lonse",
	"index::home_card_label_inflation": "Bitcoin ndi ndalama yabwino",
	"index::home_card_label_networks_1":
		"Onani netiweki yamoyo",
	"index::home_card_label_networks_2": "Tiyerekezere",
	"index::home_card_label_payments_1": "Kodi kusiyana ndi chiyani?",
	"index::home_card_label_payments_2":
		"Malipiro ofulumira & otsika mtengo",
	"index::home_card_label_payments_3": "Kutumiza ndalama",
	"index::home_card_label_payments_4": "Landirani malipiro",
	"index::home_card_label_politics_1": "Mfundo yandale",
	"index::home_card_label_politics_2": "Chitani chinachake",
	"index::home_card_label_property_rights_1": "Tiyerekezere",
	"index::home_card_label_property_rights_2": "Umwini weniweni",
	"index::home_card_label_salary": "Tetezani malipiro anu",
	"index::home_card_label_self_custody_1":
		"Gaidi ya chikwama cha Bitcoin",
	"index::home_card_label_self_custody_2": "Sitepe yofunika kwambiri",
	"index::home_card_label_self_custody_3": "Ndalama yodzilamulira",
	"index::home_card_label_war_1": "Thetsani nkhondo zopanda mathero",
	"index::home_card_label_war_2": "Kuthandiza ankhondo akale",
	"index::home_card_label_war_3": "Kuthawa pa nthawi ya nkhondo",
	"index::home_h1":
		"Bitcoin ndi ndalama yabwino yomwe ikumanga dziko labwino.",
	"index::home_nav_about": "Za ife",
	"index::home_nav_get_involved": "Lowani Nawo",
	"index::home_nav_learn": "Phunzirani",
	"index::home_source_prefix": "Gwero:",
});

/* ─────────────── common (remaining) ─────────────── */
Object.assign(T, {
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
	"common::common_sticker_files_mission_5": "pemphani paketi",
	"common::common_site_tagline":
		"Maphunziro a Bitcoin kwa aliyense.",
	"common::common_source_btcpayserver":
		"BTCPay Server \u2014 Wokonza malipiro a Bitcoin yaulere, yotseguka, yodzipangira",
	"common::common_source_oshi":
		"Oshi \u2014 Pulatifomu yamphotho ya Bitcoin ya amalonda",
	"common::common_source_strike_business":
		"Strike \u2014 Malipiro a Bitcoin & Lightning a mabizinesi",
	"common::common_sources_group_bitcoin": "Deta ya Bitcoin",
	"common::common_sources_group_cpi":
		"Kukwera kwa mitengo / Consumer Price Index",
	"common::common_sources_group_debt": "Ngongole ya boma",
	"common::common_sources_group_money": "Deta ya kuchuluka kwa ndalama",
	"common::common_sources_group_stories":
		"Zitsanzo zenizeni za dziko",
	"common::common_sticker_files_mission_6": "za zitikiti za Chingerezi mwaulere.",
	"common::common_sticker_files_next_flyers_label": "Mapepala",
	"common::common_sticker_files_next_flyers_title":
		"Sindikizani pepala la Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Mafayilo a zitikiti",
	"common::common_sticker_files_next_languages_title":
		"Onani mafayilo a zitikiti m'zilankhulo zina",
	"common::common_sticker_files_print_these":
		"SINDIKIZANI IZI MU CLICK 1",
	"common::common_sticker_name_bdhi_black":
		"Chitikiti cha \"Bitcoin Doesn't Have Inflation\" (Cha Imvi)",
	"common::common_sticker_name_bdhi_orange":
		"Chitikiti cha \"Bitcoin Doesn't Have Inflation\" (Cha Lalanje)",
	"common::common_sticker_name_caution":
		"Chitikiti cha \"Caution! Melting Ice Cube\" cha Bitcoin",
	"common::common_sticker_name_cure_inflation":
		"Chitikiti cha \"Cure Inflation\" cha Bitcoin",
	"common::common_sticker_name_danger":
		"Chitikiti cha \"Danger! Inflation Ahead\" cha Bitcoin",
	"common::common_sticker_name_fix":
		"Chitikiti cha \"Fix The Money, Fix The World\" cha Bitcoin",
	"common::common_sticker_name_got_inflation":
		"Chitikiti cha \"Got Inflation?\" cha Bitcoin",
	"common::common_sticker_name_study":
		"Chitikiti cha \"Study Bitcoin\"",
	"common::common_sticker_name_warning":
		"Chitikiti cha \"Warning! Inflation is Stealing Your Savings\" cha Bitcoin",
	"common::common_sticker_name_what_if":
		"Chitikiti cha \"What if your money didn't have inflation?\" cha Bitcoin",
	"common::common_sticker_tips_heading": "Malangizo a zitikiti",
	"common::common_sticker_tips_intro":
		"Mukasindikiza zitikiti zanu, yikani malo omwe adzaonekapo! Malo abwino oyikira zitikiti ndi:",
	"common::common_sticker_tips_list_1":
		"poyera komwe anthu adzawaona",
	"common::common_sticker_tips_list_2":
		"m'malo osati ovuta kuchotsa mwadzidzidzi (zitikiti sizipangitsa kuwonongeka kosatha)",
	"common::common_sticker_tips_list_3":
		"pa malo omwe adzakhalapo mosavuta (chitsulo, plastiki, galasi)",
	"common::common_sticker_tips_list_4":
		"OSAYIKA pa katundu wachinsinsi, kuphimba zikwangwani, ATM, kapena makina opopera mafuta",
	"common::common_stickers_printer_prefix": "Timagwiritsa ntchito",
	"common::common_stickers_printer_suffix":
		"koma mukhoza kugwiritsa ntchito kampani iliyonse ya zitikiti.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin imalandiridwa pano",
	"business/why::why_good_for_you":
		"Chifukwa chake Bitcoin ndi yabwino kwa inunso",
	"business/why::why_learn_more_lowercase": "Phunzirani zambiri \u2192",
	"business/why::why_s1_c1":
		"Kukwera kwa mitengo kumachitika ndalama zambiri zikamasindikizidwa kapena kupangidwa kuchokera ku zopanda kanthu. Izi zimapangitsa kuti ndalama zomwe muli nazo zikhale ndi mtengo wochepa pakapita nthawi \u2014 ndipo ndi chifukwa chake mitengo imapitiriza kukwera chaka ndi chaka.",
	"business/why::why_s1_c2":
		"Bitcoin ili ndi kuchuluka kokhazikika kwa ma coin 21 miliyoni. Palibe boma, banki, kapena kampani yomwe ingasindikize zambiri. Zomwe mwasunga m'Bitcoin zimasunga mtengo wake pakapita nthawi m'malo motaya mtengo modekha.",
	"business/why::why_s2_c1":
		"Mabanki angapo a U.S. agwa m'zaka zaposachedwa chifukwa cha kuthawira ku banki. Pamene makasitomala ambiri ayesa kuchotsa nthawi imodzi, mabanki sanali ndi ndalama zokwanira kuwabwezera anthu onse.",
	"business/why::why_s2_c2":
		"M'malo mosunga ndalama zanu basi, mabanki amakongoza ndi kuyika ndalama zambiri. Ngati ma investment amenewo achitidwa zoyipa \u2014 kapena ngati osungira ndalama achotsa chikhulupiriro \u2014 banki ikhoza kulephera, ndipo ndalama zomwe mwayika zikhoza kutsekedwa kapena kutayika.",
	"business/why::why_s2_c3":
		"Ndi Bitcoin, mukhoza kusunga ndalama zanu mwachindunji mu chikwama chanu. Palibe banki. Palibe wapakatikati. Palibe kuthawira ku banki.",
	"business/why::why_s3_c1":
		"Mosiyana ndi makhadi ongongoletsa, PayPal, kapena akaunti za mabanki, Bitcoin saifuna chilolezo cha aliyense kuti igwiritsidwe ntchito.",
	"business/why::why_s3_c2":
		"Palibe amene angatseke akaunti yanu, kuletsa malipiro, kapena kukulekanitsani ndi netiweki. Ndi dongosolo loyamba lazachuma m'mbiri lomwe mungagwiritse ntchito mwaufulu, popanda mantha a kuletsedwa kapena kulanda.",
	"business/why::why_s4_c1":
		"Bitcoin nthawi zambiri samvetsedwa, koma ikuchita zabwino zambiri padziko mwa kakhalidwe.",
	"business/why::why_s4_c2":
		"Yathandiza atsogoleri a ufulu wa anthu kumenyera ufulu, kuchepetsa methane wa padziko lonse kuchokera ku malo otaya zinyalala ndi minda yamafuta, kukhazikitsa magridi a magetsi, ndi kupereka ndalama ku zinthu za anthu monga mapaki adziko.",
	"business/why::why_biz_s1": "Ndalama zochepa, zambiri kwa bizinesi",
	"business/why::why_biz_s1_c1":
		"Malipiro a Bitcoin amapeweka mabanki ndi makampani a makhadi omwe amatenga 2\u20133% pa kugulitsa kulikonse. Bizinesi imasunga zambiri za zomwe mukulipira \u2014 zomwe nthawi zambiri zikutanthauza mitengo yabwino ndi ntchito yabwino kwa inu.",
	"business/why::why_biz_s2": "Kutsiriza pomwepo, palibe ma chargeback",
	"business/why::why_biz_s2_c1":
		"Malipiro a Bitcoin amatsiriza mu masekondi, mwachindunji kuchokera mu chikwama chanu kupita ku bizinesi. Palibe kudikira masiku banki kuti ipereke ndalama, ndipo palibe mikangano yokwera mtengo ya chargeback \u2014 kotero bizinesi ikhoza kuyang'anira kupereka ntchito kwa makasitomala m'malo molimbana ndi chinyengo.",
	"business/why::why_biz_s3":
		"Yaulere kulandirira, yotseguka kwa aliyense",
	"business/why::why_biz_s3_c1":
		"Palibe mapangano, ndalama za mwezi, kapena ndalama zoyikira kuti bizinesi ilandire Bitcoin. Ndipo mamiliyoni a ogwiritsa ntchito Bitcoin padziko lonse amafufuza amalonda omwe amalandira \u2014 zomwe zimapereka bizinesi iyi mwayi waulere wa makasitomala atsopano.",
	"business/why::why_business_cta_intro":
		"Mukuyendetsa bizinesi ndipo mukufuna kuyamba kulandira Bitcoin?",
	"business/why::why_business_cta_link":
		"Onani momwe imagwirira ntchito \u2192",
	"business/why::why_for_business":
		"Chifukwa chake Bitcoin ndi yabwino kwa bizinesi iyi",
	"business/why::why_for_business_intro":
		"Kulandira Bitcoin kumalola bizinesi kusunga zambiri za kugulitsa kulikonse, kulipidwa pomwepo popanda ma chargeback, ndi kufikira ogwiritsa ntchito Bitcoin padziko lonse \u2014 zonse popanda mapangano kapena ndalama za mwezi.",
	"business/why::why_good_for_you_intro":
		"Bitcoin sili yothandiza chabe pa kasha \u2014 ndi mtundu wabwino wa ndalama yomwe imateteza zomwe mwasunga, chinsinsi chanu, ndi ufulu wanu wochita malonda. Apa pali baibulo lalifupi.",
	"business/why::why_hero_subtitle":
		"Mwangosanthula chitikiti cha 'Bitcoin Imalandiridwa Pano'. Apa ndi chifukwa chake izi ndi nkhani yabwino \u2014 kwa bizinesi iyi, ndi kwa inu.",
	"business/why::why_intro_c1":
		"Bizinesi yomwe muli nayoyi imalandira Bitcoin \u2014 netiweki ya malipiro yamakono, yotseguka yomwe aliyense angagwiritse ntchito, kulikonse padziko lapansi, popanda mabanki kapena apakati otenga gawo.",
	"business/why::why_intro_c2":
		"Pansipa pali baibulo lalifupi la chifukwa chake kulandira Bitcoin ndi kwabwino kwa bizinesi iyi, ndi chifukwa chake kugwiritsa ntchito Bitcoin ndi kwabwino kwa inu monga kasitomala.",
	"business/why::why_next_business_label": "LANDIRANI BITCOIN",
	"business/why::why_next_business_title":
		"Landirani Bitcoin pa bizinesi yanu",
	"business/why::why_next_buy_label": "GULANI BITCOIN",
	"business/why::why_next_buy_title": "Gulani Bitcoin yanu yoyamba",
	"business/why::why_next_learn_label": "PHUNZIRANI ZAMBIRI",
	"business/why::why_next_learn_title":
		"Phunzirani zambiri za Bitcoin",
	"business/why::why_next_wallet_label": "PEZANI CHIKWAMA",
	"business/why::why_next_wallet_title":
		"Pezani chikwama chanu cha Bitcoin",
	"business/why::why_whats_next_heading": "Kupita kuti tsopano?",
	"business/why::why_whats_next_intro":
		"Ngati ndi nthawi yoyamba mukusanthula chitikiti cha Bitcoin, apa pali malo othandiza kupita kuchokera apa.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Momwe mungagulire Bitcoin",
	"buy::buy_step_1_header": "Sankhani dziko lanu",
	"buy::buy_step_2_header": "Sankhani njira yolipirira",
	"buy::buy_step_3_header": "Njira zanu zogulira",
	"buy::buy_step_4_header": "Sungani Bitcoin yanu motetezeka",
	"buy::buy_header_subtitle":
		"Gaidi yosavuta, ya sitepe ndi sitepe yogulira Bitcoin yanu yoyamba.",
	"buy::buy_howto_name": "Momwe mungagulire Bitcoin",
	"buy::buy_meta_description":
		"Phunzirani momwe mungagulire Bitcoin motetezeka ndi gaidi yathu ya sitepe ndi sitepe. Sankhani dziko ndi njira yolipirira kuti mupeze njira zogulira Bitcoin zomwe zikugwirizana ndi inu.",
	"buy::buy_step_1_eyebrow": "Sitepe 1",
	"buy::buy_step_2_eyebrow": "Sitepe 2",
	"buy::buy_step_3_eyebrow": "Sitepe 3",
	"buy::buy_step_4_eyebrow": "Sitepe 4",
	"buy::buy_storage_cta_label": "Sitepe yotsatira",
	"buy::sources_bisq":
		"Bisq \u2014 Exchange ya peer-to-peer yopanda wolamulira",
	"buy::sources_coinatmradar":
		"Coin ATM Radar \u2014 Mndandanda wa Bitcoin ATM padziko lonse",
	"buy::sources_kraken":
		"Kraken \u2014 Bitcoin exchange yokhazikika",
	"buy::sources_relai":
		"Relai \u2014 Pulogalamu ya Bitcoin yokha yodzipangira ya Switzerland",
	"buy::sources_river":
		"River \u2014 Kugula, kuthamanga, ndi kusunga Bitcoin yokha",
	"buy::sources_strike_lightning":
		"Strike \u2014 Gulani Bitcoin ndi chithandizo cha Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin \u2014 Kugulitsa kwa dola pa nthawi yokhayo kwa Bitcoin",
});

/* ─────────────── business/accounting (remaining) ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_example_jan_1": "1 Jan",
	"business/accounting::accounting_s3_c6":
		"Ndi zomwezo. Masamu apansi ndi ofanana ndi momwe katundu aliyense wokwera mtengo kapena wotsika mtengo amalembedwa.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report \u2014 Mtengo wa dola wa Bitcoin wapano ndi wakale",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services \u2014 Kasamalidwe ka ndalama ka Bitcoin ka mabizinesi",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru \u2014 Lowetsani mitengo ya cryptocurrency mu Excel",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part3 (ny): filled ${filled}, already-done ${skipped}`,
	);
}

main();
