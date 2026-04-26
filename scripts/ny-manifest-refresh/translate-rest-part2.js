#!/usr/bin/env node
/**
 * Chichewa (ny) manifest refresh — non-inflation namespaces, part 2.
 * Covers: business/* (all sub-namespaces), buy, common, compound-inflation-calculator,
 * flyers, get-involved, lightning, nostr/index, sticker-files/index,
 * sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "MTENGO WA BITCOIN",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Pezani mtengo wapano kapena wakale wa dola wa Bitcoin",
	"business/accounting::accounting_card_pacioli_label":
		"OWERENGA NDALAMA A BITCOIN",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Ntchito Zowerengera Ndalama za Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL IMPORT",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Lowetsani mitengo ya Bitcoin mu Excel mwadzidzidzi",
	"business/accounting::accounting_card_wallets_label": "ZIKWAMA ZA HYBRID",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Onani zikwama za bizinesi zomwe timalimbikitsa",
	"business/accounting::accounting_description":
		"Gaidi yosavuta yolandirira Bitcoin m'mabuku anu \u2014 zikwama za hybrid, mtengo wapakhomo, capital gains, ndi pamene muyenera kuyimbira owerenga ndalama.",
	"business/accounting::accounting_disclaimer":
		"Gaidi iyi ndi ya zidziwitso zokhazo ndipo siyiyenera kuonedwa ngati malangizo a misonkho. Pa malangizo a misonkho a vuto lanu, pemphani upangiri wa woweregera ndalama woyenerera.",
	"business/accounting::accounting_disclaimer_label": "Chonde dziwani",
	"business/accounting::accounting_example_feb_1": "1 Feb",
	"business/accounting::accounting_example_gain_badge": "Phindu lakukwera",
	"business/accounting::accounting_example_gain_explain":
		"Mukulemba phindu la $10 lakukwera.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_badge": "Kutaya",
	"business/accounting::accounting_example_loss_explain":
		"Mukulemba kutaya kwa $10.",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "Mwalandila",
	"business/accounting::accounting_example_sold_label":
		"Mwagulitsa kapena kugwiritsa ntchito",
	"business/accounting::accounting_hero_subtitle":
		"Kulandira Bitcoin m'bizinesi yanu sikuyenera kupangitsa kasamalidwe ka ndalama kuti kakhale kovuta. Apa pali baibulo losavuta ndi zida ndi akatswiri omwe amapangitsa kukhala kotetezeka.",
	"business/accounting::accounting_intro_c1":
		"Ngati mukulandira ndalama zenizeni kapena makhadi kale, kuonjezera Bitcoin m'mabuku anu kuli kosavuta kuposa momwe mukuganizira. Pali njira ziwiri \u2014 sinthani malipiro a Bitcoin kukhala dola mwadzidzidzi (palibe kasamalidwe katsopano), kapena sungani ena ngati Bitcoin (kuwonjezera mbali zochepa).",
	"business/accounting::accounting_intro_c2":
		"Gaidi iyi ikuthandizirani njira zonse ziwiri \u2014 sankhani njira yomwe ikugwirizana ndi bizinesi yanu ndipo yambani kulandira Bitcoin.",
	"business/accounting::accounting_s1":
		"Njira yosavuta \u2014 kusintha kukhala dola mwadzidzidzi",
	"business/accounting::accounting_s1_c1":
		"Njira yosavuta yolandirira Bitcoin ndi chikwama cha hybrid chomwe chimagulitsa 100% ya Bitcoin yomwe mwalandira kukhala madola (kapena ndalama yanu yakuderali) mwadzidzidzi.",
	"business/accounting::accounting_s1_c2":
		"Ndi kasitomu uyu, mabuku anu adzawoneka chimodzimodzi ndi momwe akuwoneka lero \u2014 nambala yomaliza ili m'madola, nthawi iliyonse. Palibe mtengo wapakhomo, palibe phindu lakukwera, palibe mapepala atsopano.",
	"business/accounting::accounting_s2":
		"Ngati musunga Bitcoin ena: kutsata mtengo wapakhomo wanu",
	"business/accounting::accounting_s2_c1":
		"Mabizinesi ena amasankha kusunga gawo la Bitcoin yomwe alandira m'malo mosintha zonse mwadzidzidzi. Ngati ndi inu, sitepe yowonjezera ndi kulemba mtengo wapakhomo wanu \u2014 mtengo wa dola wa tsiku lomwe Bitcoin idalandiridwa.",
	"business/accounting::accounting_s2_c2":
		"Ngakhale mukuganiza za bizinesi yanu m'Bitcoin, akuluakulu a misonkho amafuna kuti mtengo wa dola udziwike. Nkhani yabwino \u2014 nambala ziwiri zokha pa malonda aliwonse \u2014 kuchuluka kwa Bitcoin yolandiridwa ndi mtengo wake wa dola pa tsikulo.",
	"business/accounting::accounting_s2_c3":
		"Gwiritsani ntchito zida zomwe zili pansi pa kupanga kafukufuku mwadzidzidzi kuti musayese kufufuza mitengo tsiku ndi tsiku.",
	"business/accounting::accounting_s3":
		"Kugwiritsa ntchito kapena kugulitsa Bitcoin yomwe mwasunga",
	"business/accounting::accounting_s3_c1":
		"Ngati mukusintha malipiro aliwonse kukhala madola mwadzidzidzi, dumphani gawoli \u2014 silikukukhudzani.",
	"business/accounting::accounting_s3_c2":
		"Ngati mwasunga Bitcoin ena ndipo pambuyo pake mwasankha kuyigwiritsa ntchito kapena kuyigulitsa, wonjezerani mtengo wakugulitsa pa spreadsheet yomweyo ya mtengo wapakhomo. Kusiyana pakati pa mtengo wolandirira ndi mtengo wakugwiritsa/kugulitsa ndi phindu lakukwera kapena kutaya kwanu.",
	"business/accounting::accounting_s3_c3": "Zitsanzo ziwiri zachangu:",
	"business/accounting::accounting_s4":
		"Mukufunika katswiri yemwe amalankhula Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Ngati mukufuna kupereka ntchitoyi \u2014 kapena kasamalidwe kanu ka Bitcoin ndi kovuta kuposa momwe chikwama cha hybrid chingathandizire \u2014 timalimbikitsa kwambiri Satoshi Pacioli Accounting Services, omwe amayang'anira kasamalidwe ka Bitcoin ka mabizinesi.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Kasamalidwe ka Bitcoin pa bizinesi yanu",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Mayankho osavuta a mafunso omwe amalonda amafunsa nthawi zambiri asanayambe kulandira Bitcoin \u2014 ndalama, kutsiriza, zikwama, chargeback, mitengo, ndi zambiri.",
	"business/faq::faq_intro_c1":
		"Dinani funso lililonse pansipa kuti mutsegule yankho. Mukakhala okonzeka kulandira Bitcoin, zothandizira za bizinesi pansi pa tsamba zikuthandizani sitepe iliyonse.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Kasamalidwe ka ndalama",
	"business/index::biz_label_faq": "Mafunso ofunsidwa kawirikawiri",
	"business/index::biz_label_maps": "Mapu a amalonda",
	"business/index::biz_label_rewards": "Mphotho",
	"business/index::biz_label_stickers": "Zitikiti",
	"business/index::biz_label_wallets": "Zikwama",
	"business/index::biz_meta_description":
		"Landirani Bitcoin m'bizinesi yanu kuti mukhale ndi ndalama zochepa, kutsiriza pomwepo, palibe ma chargeback, ndi kupeza ogula ambiri.",
	"business/index::business_hero_subtitle":
		"Landirani malipiro ndi ndalama zochepa, mulandire ndalama pomwepo, ndipo fikirani makasitomala atsopano mamiliyoni \u2014 popanda mapangano kapena ndalama zobisika.",
	"business/index::business_intro_c1":
		"Bitcoin imapatsa bizinesi yanu njira yofulumira, yotsika mtengo, komanso yachinsinsi yolandilira ndalama. Palibe apakati. Palibe ma chargeback. Palibe mapangano. Ndalama yokhazikika kuchokera kwa kasitomala kupita kwa inu mu masekondi ochepa.",
	"business/index::business_intro_c2":
		"Pansipa pali baibulo losavuta lokhudza chifukwa chake Bitcoin ndi yabwino kwa bizinesi \u2014 ndi zothandizira zonse zomwe mukufunika kuti muyambe kulandira Bitcoin lero.",
	"business/index::business_resources_heading":
		"Zonse zomwe mukufunika kuti mulandire Bitcoin",
	"business/index::business_resources_intro":
		"Sangalalani ndi zothandizirazi pa liwiro lanu. Iliyonse ndi gaidi yochepa, yothandiza yolimbitsidwa pa zochita.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Tiuzeni za bizinesi yanu",
	"business/maps::biz_maps_form_intro":
		"Tikufuna zambiri zochepa kuti tikhale ndi mwayi wokulemba. Deta ya adilesi yanu imasungidwa kokha mokwanira nthawi yokulowetsa bizinesi yanu pa mapu.",
	"business/maps::biz_maps_hero_subtitle":
		"Lembani bizinesi yanu mwaulere pa BTC Map \u2014 mndandanda wotseguka wa amalonda padziko lonse omwe amalandira Bitcoin \u2014 kuti ogwiritsa ntchito Bitcoin a m'derali apeze inu ndikugwiritsa ntchito Bitcoin pa bizinesi yanu.",
	"business/maps::biz_maps_hero_title":
		"Lembani bizinesi yanu pa Mapu a Amalonda a Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Anthu ogwiritsa ntchito Bitcoin amafufuza malo ogwiritsa ntchito ndalama zawo. Kuyika bizinesi yanu pa mapuwa kumakuyikani patsogolo pa wogwiritsa ntchito Bitcoin aliyense pafupi yemwe akufuna malo odyera, kugula, kapena kukhala \u2014 popanda mtengo kwa inu.",
	"business/maps::biz_maps_intro_c2":
		"Dzazani fomu yosavuta pansipa ndipo tiyika bizinesi yanu pa BTC Map ndi mapu ena a amalonda a Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Lembani bizinesi yanu mwaulere pa BTC Map ndi mapu ena a amalonda a Bitcoin kuti ogwiritsa ntchito Bitcoin a m'derali akupezeni.",
	"business/maps::biz_maps_placeholder_address": "Adilesi ya msewu",
	"business/maps::biz_maps_placeholder_category":
		"Mtundu (mwachitsanzo, malo odyera, malo ogulitsa khofi, hotelo)",
	"business/maps::biz_maps_placeholder_city": "Mzinda",
	"business/maps::biz_maps_placeholder_country": "Dziko",
	"business/maps::biz_maps_placeholder_name": "Dzina la bizinesi",
	"business/maps::biz_maps_placeholder_region": "Chigawo / Boma",
	"business/maps::biz_maps_placeholder_website":
		"Webusayiti (osati zofunika)",
	"business/maps::biz_maps_view_map_cta": "Onani BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Onani BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Zikomo chifukwa chopereka bizinesi yanu. Tikuyikani pamapu a amalonda a Bitcoin posachedwa.",
	"business/maps-success::biz_maps_success_hero_title":
		"Pempho lalandiridwa \ud83c\udf89",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Tikuyikani bizinesi yanu pa BTC Map ndi mndandanda wina wa amalonda a Bitcoin mu sabata 1\u20132. Timasanthula chikalata chilichonse ndi manja kuti tikhalebe ndi mapu olondola.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Mlandulo wanu ukatulutsidwa, ogwiritsa ntchito Bitcoin a m'derali akhoza kupeza bizinesi yanu ndi kuyamba kugwiritsa ntchito Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Zomwe zikuchitika kenaka",
	"business/maps-success::biz_maps_success_view_c1":
		"Pamene mukudikira, fufuzani BTC Map kuti muwone netiweki yokulira ya mabizinesi padziko lonse omwe amalandira Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Onani komwe mukhalapo",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Tsitsani mafayilo a zitikiti za Chingerezi kuti musindikize zitikiti zanu za 'Bitcoin Imalandiridwa Pano'.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Sindikizani nokha zitikiti za Chingerezi za 'Bitcoin Imalandiridwa Pano' kuti muuzeni makasitomala kuti mukulandira Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Tsitsani mafayilo a zitikiti za Chingerezi za 'Bitcoin Imalandiridwa Pano'",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Zikomo chifukwa chopempha mafayilo a zitikiti za 'Bitcoin Imalandiridwa Pano' mu chilankhulo chanu.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Pempho lalandiridwa \ud83c\udf89",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Tikupanga ndi kutulutsa mafayilo anu a zitikiti mu sabata 3\u20134. Akakhala okonzeka, mukhoza kutsitsa ndi kuwasindikiza mwaulere kuchokera tsamba lathu la mafayilo a zitikiti.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Timatulutsa zitikiti m'magulu \u2014 chilankhulo chanu chikhoza kutenga sabata yochepa kuti chitulutsidwe. Zikomo chifukwa cha kupirira kwanu.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Zomwe zikuchitika kenaka",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Odolani zambiri",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Pemphani zambiri zaulere",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Zitikiti zanu zaulere za 'Bitcoin Imalandiridwa Pano' zikufika mu sabata 2\u20134 \u2014 mu envelopi yoyera yokhala ndi zitikiti 3.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Zitikiti zanu zikupita \ud83c\udf89",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ngati zitikiti 3 zilibe ku bizinesi yanu, mukhoza kupempha zambiri zaulere \u2014 kapena kuodola zambiri kuchokera kwa wosindikiza yemwe ife timagwiritsa ntchito.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Mukufuna zitikiti zambiri?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Pa khomo lanu lakutsogolo kapena pa zenera kuti makasitomala awone asanalowe",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Pafupi ndi kasha yanu, chosanjikiza cha POS, kapena malo olipirira",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Pa menyu, mndandanda wa mitengo, kapena chosanjikiza cha tip",
	"business/sticker-success::biz_sticker_success_tip_4":
		"OSAYIKA pa katundu wopanda chilolezo kapena katundu osati wanu",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Malo abwino oyikira zitikiti",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Uzeni makasitomala anu kuti mukulandira Bitcoin. Odolani paketi yaulere ya zitikiti za 'Bitcoin Imalandiridwa Pano' kuti muyike pa bizinesi yanu.",
	"business/stickers::biz_stickers_hero_title":
		"Zitikiti zaulere za 'Bitcoin Imalandiridwa Pano'",
	"business/stickers::biz_stickers_intro_c1":
		"Kulandira Bitcoin ndi theka chabe la ntchito \u2014 makasitomala anu ayenera kudziwa kuti mukulandira nayo. Zitikiti za 'Bitcoin Imalandiridwa Pano' zinapangidwa kuti ziyikidwe pa khomo, kasha, menyu, kapena malo aliwonse omwe makasitomala adzaona malipiroli.",
	"business/stickers::biz_stickers_intro_c2":
		"Tikutumiza mwaulere kulikonse ku USA kapena Canada \u2014 kapena mukhoza kusindikiza nokha kulikonse padziko lapansi.",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada \u2014 Yaulere mu makalata",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d Padziko lonse \u2014 Sindikizani nokha",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 USA \u2014 Yaulere mu makalata",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Kumasulira kwa 'Bitcoin Accepted Here'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Kumasulira kwa 'Scan to learn why Bitcoin is good for business'",
	"business/stickers::biz_stickers_print_c1":
		"Mukhoza kusindikiza nokha zitikiti za 'Bitcoin Imalandiridwa Pano' kulikonse komwe muli. Dinani pa chilankhulo chanu pansipa kuti mutsitse mafayilo a zitikiti ndi malangizo.",
	"business/stickers::biz_stickers_print_header":
		"Sindikizani nokha mafayilo a zitikiti",
	"business/stickers::biz_stickers_request_c1":
		"Dzadzani fomu yomwe ili pansipa kuti mupemphe mafayilo a zitikiti mu chilankhulo chanu cha m'derali. Tikukuuzani akakhala okonzeka.",
	"business/stickers::biz_stickers_request_header":
		"Simunaone chilankhulo chanu?",
	"business/stickers::biz_stickers_step_description":
		"Tikutumiza paketi yaulere ku adilesi za USA ndi Canada. Kulikonse padziko lapansi, mukhoza kusindikiza nokha.",
	"business/stickers::biz_stickers_step_header":
		"Mukufuna kulandira zitikiti zanu motani?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Zikwama zonse za Bitcoin zimalumikizana \u2014 sankhani yomwe ikugwirizana ndi bizinesi yanu. Yaulere, kutsiriza pomwepo, palibe ma chargeback.",
	"business/wallets::sources_breez_business":
		"Breez \u2014 Chikwama cha Lightning chodzipangira chovomerezedwa ndi mabizinesi",
	"business/wallets::sources_ibex":
		"IBEX \u2014 Maziko a malipiro a Lightning",
	"business/wallets::sources_opennode":
		"OpenNode \u2014 Wokonza malipiro a Bitcoin",
	"business/wallets::sources_square":
		"Square \u2014 Landirani malipiro a Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite \u2014 Mabilu a Bitcoin a mabizinesi",
	"business/wallets::wallets_hero_subtitle":
		"Zikwama zaulere za Bitcoin za mabizinesi. Sankhani yomwe ikugwirizana ndi bizinesi yanu \u2014 mwaokha, pa intaneti, kapena yobikidwa pa bilu \u2014 ndipo yambani kulandira Bitcoin mu mphindi zochepa.",
	"business/wallets::wallets_section_invoice":
		"Zikwama za mabizinesi okhalitsa ma bilu",
	"business/wallets::wallets_section_invoice_intro":
		"Ngati mukutumiza ma bilu kwa olemba upangiri, antchito odzipangira, kapena ntchito za B2B, gwiritsani ntchito chikwama chopangidwira kupanga ma bilu. Kasitomala wanu akhoza kulipira bilu ya Bitcoin ndi madinde ochepa.",
	"business/wallets::wallets_section_multiple":
		"Zikwama za mabizinesi okhala ndi antchito ambiri",
	"business/wallets::wallets_section_multiple_intro":
		"Ngati muli ndi gulu lolandirira ndalama pa kasha, sankhani chikwama chokhala ndi mwayi kwa antchito ambiri \u2014 wantchito aliyense amapeza PIN yake yokha, ndipo mumakhalabe ndi maumbiri akumva omveka kuti ndani analandila chiyani.",
	"business/wallets::wallets_section_online":
		"Zikwama za mabizinesi a pa intaneti",
	"business/wallets::wallets_section_online_intro":
		"Mukugulitsa pa webusayiti? Zikwamazi zimalumikizana ndi malo anu ogulitsa pa intaneti ndipo zimalandira Bitcoin kuchokera kwa makasitomala kulikonse padziko lapansi \u2014 popanda ma chargeback, palibe akaunti ya wamalonda yofunika.",
	"business/wallets::wallets_section_sole":
		"Zikwama za mabizinesi a munthu m'modzi",
	"business/wallets::wallets_section_sole_intro":
		"Ngati mukuyendetsa malo ogulitsa, malo ogulitsa khofi, studio, kapena ntchito mwekha, zikwamazi zikugwira ntchito. Sankhani malingana ndi ngati mukufuna kusunga malipiro ngati Bitcoin kapena kusintha mwadzidzidzi ena kukhala ndalama yakuderali.",
	"business/wallets::wallets_strike_note":
		"Strike Business ndiyo yomwe imalimbikitsidwa nthawi zambiri kwa mabizinesi a USA chifukwa cha kuphweka kwake \u2014 imasintha 100% ya Bitcoin yomwe mwalandira kukhala madola mwadzidzidzi.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::biz_why_section_chargebacks_c1":
		"Mwina mwakhala mukulipira chiletso pa kadi iliyonse ya $25 chargeback. Ndi Bitcoin, palibe ma chargeback chifukwa kutsiriza ndi komaliza.",
	"business/why::biz_why_section_chargebacks_header":
		"Palibe ma chargeback",
	"business/why::biz_why_section_fees_c1":
		"Visa ndi Mastercard amalipira pafupifupi 3% pa malipiro aliwonse. Ndi Bitcoin Lightning Network, ndalama zimakhala zochepera 1%.",
	"business/why::biz_why_section_fees_header": "Ndalama zochepa",
	"business/why::biz_why_section_global_c1":
		"Bitcoin imagwira ntchito padziko lonse popanda kufunika kwa wamalonda apakatikati. Aliyense kulikonse akhoza kukutumizirani Bitcoin mwadzidzidzi.",
	"business/why::biz_why_section_global_header": "Padziko lonse",
	"business/why::biz_why_section_instant_c1":
		"Pa Lightning Network, malipiro a Bitcoin amatsiriza mu masekondi. Palibe kudikira masiku 2\u20133 a malipiro a kadi.",
	"business/why::biz_why_section_instant_header": "Yotsiriza pomwepo",
	"business/why::biz_why_section_no_intermediaries_c1":
		"Palibe banki, palibe wokonza malipiro, palibe kampani ya kadi yomwe imatha kutseka akaunti yanu. Mukukhala ndi mphamvu zonse pa ndalama zanu za bizinesi.",
	"business/why::biz_why_section_no_intermediaries_header":
		"Palibe apakati",
	"business/why::biz_why_section_privacy_c1":
		"Ndi Bitcoin, simukufunika kupereka deta ya makasitomala anu kwa makampani a kadi. Ngongole zoperekedwa zimagwiritsidwa ntchito kuti zibwezeretse \u2014 pa Bitcoin, simukufuna izi.",
	"business/why::biz_why_section_privacy_header": "Chinsinsi",
	"business/why::biz_why_section_savings_c1":
		"Bitcoin yakwera kwambiri pakapita nthawi. Mukhoza kusunga gawo la malipiro anu mu Bitcoin ngati osungira kwa nthawi yayitali.",
	"business/why::biz_why_section_savings_header":
		"Sungani mu chuma chokwera",
	"business/why::biz_why_section_unbanked_c1":
		"Anthu opitilira biliyoni 1.4 padziko lapansi alibe akaunti za mabanki. Ndi Bitcoin, akhoza kukulipirani \u2014 popanda banki yofunika.",
	"business/why::biz_why_section_unbanked_header":
		"Fikirani osakhala ndi mabanki",
	"business/why::biz_why_hero_subtitle":
		"Bitcoin imapatsa bizinesi yanu zabwino zachindunji \u2014 ndalama zochepa, kutsiriza pomwepo, palibe ma chargeback, ndi kufikira makasitomala atsopano padziko lonse \u2014 kotero kuti mukhoza kukulitsa phindu lanu.",
	"business/why::biz_why_hero_title":
		"Chifukwa chake Bitcoin ndi yabwino kwa bizinesi",
	"business/why::biz_why_intro_c1":
		"Bitcoin imathandiza mabizinesi padziko lonse kupeza ndalama zochepa, kufikira makasitomala atsopano, ndi kupeza chitetezo cha ndalama. Zithunzi nzungulizo ngati malipiro a kadi, zomangamanga zothandizira ogula odana, ndi mitengo yakukwera ya inflation \u2014 zonse zatha ndi Bitcoin.",
	"business/why::biz_why_intro_c2":
		"Pansipa pali zifukwa zikuluzikulu zomwe mabizinesi padziko lonse akusankhira kulandira malipiro a Bitcoin lero.",
	"business/why::biz_why_meta_description":
		"Bitcoin imathandiza bizinesi yanu kupeza ndalama zochepa, kufikira makasitomala atsopano, ndi kuteteza zinthu zomwe mwapanga kuti zikhale zofunika.",
	"business/why::biz_why_next_step_label": "Ndinu okonzeka?",
	"business/why::biz_why_next_step_title":
		"Phunzirani momwe mungayambire kulandira malipiro a Bitcoin lero",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_btn_choose_pack": "Sankhani njira",
	"buy::buy_hero_subtitle":
		"Phunzirani momwe mungagulire Bitcoin motetezeka. Sankhani njira yomwe ikugwirizana ndi inu \u2014 kuchokera ku ATM kupita ku exchange ya pa intaneti kapena P2P.",
	"buy::buy_hero_title": "Gulani Bitcoin",
	"buy::buy_intro_c1":
		"Pali njira zambiri zogulira Bitcoin. Kosiyana ndi ATM zachikhalidwe, magulu a P2P, exchange a pa intaneti, ndi pulogalamu \u2014 izi zonse zikhoza kukutumizirani Bitcoin mu chikwama chanu.",
	"buy::buy_intro_c2":
		"Sankhani njira pansipa kuti muwone bwino zabwino, zoyipa, ndi mfundo zapadera za njira iliyonse.",
	"buy::buy_next_protect_label": "Sitepe yotsatira",
	"buy::buy_next_protect_title":
		"Sungani Bitcoin yanu motetezeka mu chikwama chanu",
	"buy::buy_option_atm_description":
		"Pezani Bitcoin ATM yomwe ili pafupi nanu. Lipirani ndi ndalama zenizeni kapena kadi. Bitcoin imapita mwadzidzidzi mu chikwama chanu \u2014 popanda ID m'matumba ang'onoang'ono.",
	"buy::buy_option_atm_label": "ATM",
	"buy::buy_option_atm_pro_1": "Yofulumira komanso yosadziwika kwa anthu otulutsa ndalama zochepa",
	"buy::buy_option_atm_pro_2": "Palibe akaunti ya banki yofunikira",
	"buy::buy_option_atm_pro_3": "Yopezeka m'mizinda yambiri padziko lonse",
	"buy::buy_option_atm_con_1": "Ndalama zambiri kuposa exchange",
	"buy::buy_option_atm_con_2": "ID amafunika pa malonda akuluakulu",
	"buy::buy_option_exchange_description":
		"Lembetsani pa exchange ya Bitcoin yodalirika monga River, Strike, kapena Cash App. Lumikizani akaunti yanu ya banki, ndipo gulani Bitcoin pamtengo wamsika.",
	"buy::buy_option_exchange_label": "Exchange",
	"buy::buy_option_exchange_pro_1": "Mitengo yamsika \u2014 ndalama zochepa",
	"buy::buy_option_exchange_pro_2": "Yotetezedwa ndi malamulo m'maiko ambiri",
	"buy::buy_option_exchange_pro_3": "Yothandiza yo gula kwambiri",
	"buy::buy_option_exchange_con_1": "Imafunika ID ndi deta yanu",
	"buy::buy_option_exchange_con_2": "Tumizani mwadzidzidzi ku chikwama chanu \u2014 osasiya pa exchange",
	"buy::buy_option_p2p_description":
		"Gulani mwachindunji kwa wina yemwe ali ndi Bitcoin pogwiritsa ntchito malo monga Bisq kapena RoboSats. Yotsogola pa chinsinsi, koma yofunika kudziwa zambiri za ukadaulo.",
	"buy::buy_option_p2p_label": "P2P",
	"buy::buy_option_p2p_pro_1": "Chinsinsi chambiri \u2014 palibe ID yofunika",
	"buy::buy_option_p2p_pro_2": "Mukutumizirana ndi anthu enieni",
	"buy::buy_option_p2p_pro_3": "Imagwira ntchito kulikonse padziko lapansi",
	"buy::buy_option_p2p_con_1": "Imafunika kudziwa zambiri za ukadaulo",
	"buy::buy_option_p2p_con_2": "Imatha kukhala yochepa pang'ono kuposa exchange",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Wonjezerani chilankhulo",
	"common::common_next_buy_bitcoin": "Gulani Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Phunzirani momwe mungagulire Bitcoin motetezeka",
	"common::common_next_calculate": "Werengani kukwera kwa mitengo kwanu",
	"common::common_next_calculate_desc":
		"Onani momwe kukwera kwa mitengo kukukhudzira malipiro anu pakapita nthawi",
	"common::common_next_get_wallet": "Pezani chikwama",
	"common::common_next_get_wallet_desc":
		"Pezani chikwama chanu choyamba cha Bitcoin \u2014 ndi chaulere",
	"common::common_next_keep_learning": "Pitirizani kuphunzira",
	"common::common_next_keep_learning_desc":
		"Onani momwe Bitcoin ikukonzera dziko",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics \u2014 Consumer Price Index (CPI)",
	"common::common_source_btc_map":
		"BTC Map \u2014 Mndandanda wa amalonda olandira Bitcoin padziko lonse",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) \u2014 Kuchuluka kwa Ndalama (Category Index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto \u2014 Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish \u2014 \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Zomwe zikuchitika kenaka?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) \u2014 Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) \u2014 M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"Werengani kusiyana kwanu kwa kukwera kwa mitengo",
	"compound-inflation-calculator::cic_cta_label": "Sitepe yotsatira",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Onani kuchuluka komwe malipiro anu akuyenera kukwera kuti agonjetsane ndi kukwera kwa mitengo.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Fufuzani mitu yambiri",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Onani momwe Bitcoin imalumikizirana ndi ndalama, ufulu, mphamvu, ndi zambiri.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Phunzirani momwe kukwera kwa mitengo kumagwirira ntchito",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Momwe mungasindikizire ndi kuyikira mapepala a Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Mapepala aulere a Bitcoin osindikiza. Yikani poyera kuti anthu ambiri aphunzire za Bitcoin.",
	"flyers::flyers_hero_title": "Sindikizani ndi yikani mapepala a Bitcoin",
	"flyers::flyers_next_get_stickers": "Falitsani mawu",
	"flyers::flyers_next_get_stickers_desc":
		"Odolani paketi yaulere ya zitikiti za Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Lowani nawo ndi kufalitsa Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Mukufuna kuthandiza kupanga chuma chofulumira cha Bitcoin? Njira yosavuta ndi kuthandiza mabizinesi a m'derali kuti ayambe kulandira malipiro a Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Mukudziwa bizinesi yomwe ingafune? Tumizani eni kupita ku",
	"get-involved::get_involved_business_content_3":
		"tsamba lathu la bizinesi la Bitcoin.",
	"get-involved::get_involved_description":
		"Zothandizira zathu zaulere zimathandiza kufalitsa Bitcoin. Zitikiti, mapepala, zitikiti za 'Bitcoin Imalandiridwa Pano' kwa mabizinesi, ndi zambiri.",
	"get-involved::get_involved_header":
		"Lowani nawo ndi kufalitsa Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Mukhoza kuthandiza kusintha izi. Tapanga zothandizira zaulere zambiri kuti tipangitse kuti zikhale zophweka kufalitsa chiyembekezo chomwe Bitcoin ikubweretsera.",
	"get-involved::get_involved_biz_stickers_note":
		"Mukulandira kale Bitcoin? Uzeni makasitomala ndi zitikiti zathu zaulere za 'Bitcoin Imalandiridwa Pano'. Tikutumiza paketi kwaulere kulikonse ku USA kapena Canada.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Zitikiti za 'imalandiridwa pano'",
	"get-involved::get_involved_card_biz_stickers_source":
		"Gwero: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"Zitikiti zaulere za 'Bitcoin Imalandiridwa Pano' kwa bizinesi yanu",
	"get-involved::get_involved_card_business_label": "Bitcoin pa bizinesi",
	"get-involved::get_involved_card_business_source":
		"Gwero: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"Zonse zomwe bizinesi imafunika kuti iyambe kulandira malipiro a Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Mapepala osindikiza",
	"get-involved::get_involved_card_flyers_source": "Gwero: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"Tsitsani ndi kusindikiza pepala laulere la Bitcoin",
	"get-involved::get_involved_card_github_label": "Gwero lotseguka",
	"get-involved::get_involved_card_github_source": "Gwero: GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"Thandizani bitcoin.rocks pa GitHub",
	"get-involved::get_involved_card_stickers_label": "Zitikiti zaulere",
	"get-involved::get_involved_card_stickers_source":
		"Gwero: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"Pemphani paketi yaulere ya zitikiti za Bitcoin yotumizidwa kunyumba kwanu",
	"get-involved::get_involved_flyers_content_1":
		"Mapepala ndi imodzi mwa njira zosavuta zoyambitsira Bitcoin kwa anthu a m'derali. Tsitsani pepala laulere la Bitcoin, sindikizani, ndi kuliyika poyera komwe anthu adzaliona.",
	"get-involved::get_involved_flyers_content_2":
		"Pepala lililonse lili ndi mutu wokopa ndi QR code yomwe imatumiza owerenga okhumudwa ku bitcoin.rocks kuti aphunzire zambiri.",
	"get-involved::get_involved_flyers_content_3":
		"Mosiyana ndi zitikiti, mapepala akhoza kusindikizidwa pofuna kuchokera kulikonse padziko lapansi \u2014 mukufunika chosindikiza komanso mphindi zochepa.",
	"get-involved::get_involved_flyers_header":
		"Sindikizani ndi yikani pepala",
	"get-involved::get_involved_flyers_image_alt":
		"Chithunzi cha pepala laulere la Bitcoin la bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks ndi ntchito yaulere yotseguka pansi pa chilolezo cha MIT. Cholinga chathu ndi kufulumizitsa kugwiritsidwa ntchito kwa Bitcoin kudzera mu maphunziro.",
	"get-involved::get_involved_github_content_2":
		"Mukakhala olemba mapulogalamu, opanga, olemba, kapena omasulira, pali njira yomwe mungathandizire. Timalandira makamaka othandizira a omasulira ndi maphunziro a Bitcoin.",
	"get-involved::get_involved_github_content_3":
		"Sankhani repositori, tsegulani pull request, lembani vuto, kapena ikani nyenyezi pa ntchito kuti mutilimbikitse. Thandizo lililonse lili lofunika.",
	"get-involved::get_involved_github_header": "Thandizani pa GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Paketi yaulere ya zitikiti za mawu a Bitcoin za bitcoin.rocks",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja \u2014 The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Onani gaidi yathu ya",
	"lightning::lightning_grid_heading": "Zikwama zofala za Lightning",
	"lightning::lightning_hardware_cta_label": "Zikwama za hardware",
	"lightning::lightning_header_subtitle":
		"Lightning ikuthandizirani kutumiza Bitcoin mu masekondi kwa gawo lochepa la senti \u2014 sankhani chikwama chomwe zofunika zake zikugwirizana ndi kuchuluka kwa Bitcoin yomwe mukutumiza ndi mtundu wa malipiro omwe mumachita.",
	"lightning::lightning_s1_c4_end": "kuti mudziwe zambiri.",
	"lightning::lightning_s1_c4_link":
		"Bitcoin Hardware Wallet Guide",
	"lightning::sources_acinq_phoenix":
		"ACINQ \u2014 Chikwama cha Lightning cha Phoenix",
	"lightning::sources_breez_lightning":
		"Breez \u2014 Chikwama cha Lightning chodzipangira",
	"lightning::sources_lightning_labs":
		"Lightning Labs \u2014 Mapepala a Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi \u2014 Chikwama cha Lightning chosungidwa",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android & web",
	"nostr/index::nostr_platform_web": "Pa intaneti",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr ndi protocol yatsopano yopanda wolamulira yolumikizirana pa intaneti \u2014 palibe kampani imodzi yomwe imayilamulira, ma zaps a Bitcoin amapangidwa mu netiweki.",
	"nostr/index::nostr_amethyst_f1":
		"Mawonekedwe ndi kasinthidwe kambiri",
	"nostr/index::nostr_amethyst_f2":
		"Imafunika chikwama cha Bitcoin chosiyana",
	"nostr/index::nostr_amethyst_f3": "Yaulere 100%",
	"nostr/index::nostr_damus_f1": "Yofanana ndi Twitter mukamayang'ana",
	"nostr/index::nostr_damus_f2":
		"Imafunika chikwama cha Bitcoin chosiyana",
	"nostr/index::nostr_damus_f3": "Yaulere 100%",
	"nostr/index::nostr_download_heading": "Tsitsani Nostr client yaulere",
	"nostr/index::nostr_download_intro":
		"Ma client a Nostr ndi mapulogalamu aulere omwe amakulolani kuwerenga ndi kulemba pa netiweki ya Nostr. Onse amalumikizana \u2014 mukhoza kusinthana motha pakati pawo popanda kutaya akaunti yanu.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr ndi protocol yatsopano yopanda wolamulira yolumikizirana pa intaneti \u2014 palibe kampani imodzi yomwe imayilamulira, ma zaps a Bitcoin amapangidwa mu netiweki.",
	"nostr/index::nostr_hero_title": "Kodi Nostr ndi chiyani?",
	"nostr/index::nostr_intro_c1":
		"Nostr ikufanana ndi imelo: palibe amene ali ndi protocol, aliyense akhoza kupanga pulogalamu pamwamba pake, ndipo mukhoza kusankha pulogalamu yomwe ikukhutiritsani.",
	"nostr/index::nostr_intro_c2":
		"Pansipa pali baibulo lalifupi la chifukwa chake Nostr ndi yofunika \u2014 ndiye Nostr client iliyonse yaulere yomwe mukufunika kuti muyambe lero.",
	"nostr/index::nostr_iris_f1":
		"Yosavuta kwambiri \u2014 palibe kuyika",
	"nostr/index::nostr_iris_f2":
		"Njira yosavuta yoyesera Nostr ndi akaunti yoyesera",
	"nostr/index::nostr_iris_f3": "Yaulere 100%",
	"nostr/index::nostr_learn_more_label": "PITANI MOZAMITSA",
	"nostr/index::nostr_learn_more_title":
		"Phunzirani zambiri za Nostr pa nostr.how",
	"nostr/index::nostr_primal_f1": "Client yoyamba yolimbikitsidwa",
	"nostr/index::nostr_primal_f2": "Chikwama cha Bitcoin zap chayikidwa",
	"nostr/index::nostr_primal_f3": "Yaulere 100%",
	"nostr/index::nostr_s1": "Protocol, osati platform",
	"nostr/index::nostr_s1_c1":
		"Nostr ndi protocol yatsopano yomwe imakulolani kulumikizana pa intaneti popanda mantha a kuletsedwa, kuchotsedwa, kapena kuchepetsedwa.",
	"nostr/index::nostr_s1_c2":
		"Mapulatifomu monga Twitter ndi Facebook amalamuliridwa ndi kampani imodzi, koma palibe amene amalamulira protocol ya Nostr.",
	"nostr/index::nostr_s2": "Ufulu woyenda",
	"nostr/index::nostr_s2_c1":
		"Nostr ikufanana ndi imelo. Palibe amene amalamulira protocol ya imelo, ndipo aliyense akhoza kupanga client (monga Gmail, Hotmail, ndi zina).",
	"nostr/index::nostr_s2_c2":
		"Palibe amene amalamulira protocol ya Nostr nayonso, ndipo aliyense akhoza kupanga client (monga Damus, Amethyst, ndi zina) pamwamba pake.",
	"nostr/index::nostr_s2_c3":
		"Ngati simukukonda momwe client inayake imagwirira ntchito, mukhoza kusunthira akaunti yanu ya Nostr ku client ina mosalephera popanda kutaya zinthu zanu.",
	"nostr/index::nostr_s3": "Bitcoin yapangidwa mkati",
	"nostr/index::nostr_s3_c1":
		"Bitcoin yapangidwa mwachilengedwe mu protocol ya Nostr. Mukawona zomwe mwakonda, mukhoza kutumiza Bitcoin (zap) kwa wina mosavuta.",
	"nostr/index::nostr_s3_c2":
		"Pa mapulatifomu apakatikati monga Twitter ndi Facebook, kampani yapakatikati imapeza ndalama kuchokera ku zomwe mukulemba. Koma pa Nostr yotseguka, ndalama zimapita kwa inu mwachindunji.",
	"nostr/index::sources_damus":
		"Damus \u2014 Nostr client ya iPhone",
	"nostr/index::sources_iris":
		"Iris \u2014 Nostr client ya pa intaneti",
	"nostr/index::sources_nostr_how":
		"nostr.how \u2014 Kodi Nostr ndi chiyani?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol \u2014 Mapepala otseguka",
	"nostr/index::sources_primal":
		"Primal \u2014 Nostr client yokhala ndi chikwama cha Bitcoin zap",
	"nostr/index::what_is_nostr": "Kodi Nostr ndi chiyani?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Sindikizani nokha zitikiti zanu za Bitcoin ndi mafayilo a zitikiti a Bitcoin awa.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Pempho lalandiridwa \ud83c\udf89",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Odolani zambiri",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Gawanani pa Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Kodi Nostr ndi chiyani?",
	"sticker-success::sticker_success_bulk_header":
		"Mukufuna zitikiti zambiri?",
	"sticker-success::sticker_success_hero_title":
		"Zitikiti zanu zikupita \ud83c\udf89",
	"sticker-success::sticker_success_share_header":
		"Gawanani malo anu a zitikiti",
	"sticker-success::sticker_success_tips_header":
		"Malo abwino oyikira zitikiti",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Pomwe mukuyenda, sindikizani ndi kuyika nokha",
	"stickers::stickers_instructions_1":
		"Lembani adilesi yanu yotumizira ndipo tikutumiza Paketi yaulere ya Zitikiti za Bitcoin pa makalata. Zitikiti zanu zikufika mu envelopi yoyera.",
	"stickers::stickers_btn_choose_pack": "Sankhani paketi iyi",
	"stickers::stickers_bulk_c1":
		"Mukufuna zitikiti zambiri kuposa zochepa?",
	"stickers::stickers_bulk_c2":
		"Odolani zambiri kuchokera kwa wosindikiza yemwe ife timagwiritsa ntchito",
	"stickers::stickers_bulk_c3":
		"\u2014 zambiri mukagula, zochepa mtengo wake pa chitikiti chilichonse.",
	"stickers::stickers_bulk_cta": "Gulani zitikiti zambiri",
	"stickers::stickers_bulk_header": "Odolani zitikiti zambiri",
	"stickers::stickers_hero_subtitle":
		"Odolani paketi yaulere ya zitikiti za Bitcoin ndi kuyika poyera kuti anthu ambiri aphunzire za Bitcoin.",
	"stickers::stickers_hero_title": "Zitikiti zaulere za Bitcoin",
	"stickers::stickers_intro_c1":
		"Cholinga chathu ndi kukuthandizani kubweretsa anthu ambiri ku Bitcoin poyika zitikiti za Bitcoin poyera. Zitikiti zathu zonse zili ndi ma QR code omwe amalumikizana ndi masamba ophunzitsa za",
	"stickers::stickers_intro_c3": "kukwera kwa mitengo",
	"stickers::stickers_intro_c4":
		"Sankhani paketi ya zitikiti pansipa ndipo sankhani momwe mukufuna kuzilandirira \u2014 timatumiza paketi yaulere kwa aliyense ku USA kapena Canada.",
	"stickers::stickers_mail_header":
		"Tikutumiza zitikiti zanu zaulere",
	"stickers::stickers_next_print_flyers": "Pitirizani kufalitsa",
	"stickers::stickers_next_print_flyers_desc":
		"Sindikizani mapepala aulere a Bitcoin oyikira poyera",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 Padziko lonse \u2014 Odolani zambiri",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada \u2014 Yaulere mu makalata",
	"stickers::stickers_option_print":
		"\ud83c\udf0d Padziko lonse \u2014 Sindikizani nokha",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 USA \u2014 Yaulere mu makalata",
	"stickers::stickers_print_c1":
		"Mukhoza kulowa nawo posindikiza nokha zitikiti, kulikonse komwe muli. Dinani pa chilankhulo chanu pansipa kuti mutsitse mafayilo.",
	"stickers::stickers_print_c2":
		"Si chitikiti chilichonse chimapezeka mu chilankhulo chilichonse.",
	"stickers::stickers_print_header":
		"Sindikizani nokha mafayilo a zitikiti",
	"stickers::stickers_request_c1":
		"Dzazani fomu yomwe ili pansipa kuti mupemphe mafayilo a zitikiti mu chilankhulo chanu cha m'derali. Tikukuuzani akakhala okonzeka.",
	"stickers::stickers_request_header":
		"Simunaone chilankhulo chanu?",
	"stickers::stickers_share_c2":
		"Titsatireni pa Nostr pofunafuna",
	"stickers::stickers_share_c3": "mu Nostr client iliyonse.",
	"stickers::stickers_signs_pack_description":
		"Zikwangwani za chenjezo, zoopsa, ndi zomanga ndi mauthenga a Bitcoin \u2014 zopangidwa kuti zikope chidwi ndikupangitsa anthu kuyimirira ndikuwerenga.",
	"stickers::stickers_step_1_description":
		"Paketi iliyonse ili ndi mtundu wosiyana wa zitikiti za Bitcoin zokhala ndi ma QR code omwe amaphunzitsa anthu za Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "SITEPE 1",
	"stickers::stickers_step_1_header": "Sankhani paketi yanu ya zitikiti",
	"stickers::stickers_step_2_description":
		"Tikutumiza paketi yaulere ku adilesi za USA ndi Canada. Kulikonse padziko lapansi, mukhoza kusindikiza nokha kapena kuodola zambiri.",
	"stickers::stickers_step_2_eyebrow": "SITEPE 2",
	"stickers::stickers_step_2_header":
		"Mukufuna kulandira zitikiti zanu motani?",
	"stickers::stickers_text_pack_description":
		"Kuphatikiza kwa mawu a Bitcoin ndi mawu omveka opangidwa kuti achititse chidwi pamalo a anthu ambiri.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org \u2014 Sankhani Chikwama Chanu",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp \u2014 Kuwunika kwa Kusunga kwa Mbeu ya Bitcoin ya Chitsulo",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green \u2014 Chikwama cha Bitcoin chodzisunga",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade \u2014 Chikwama cha hardware cha Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite \u2014 Chikwama cha hardware cha Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite \u2014 Chikwama cha hardware cha Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices \u2014 Chikwama cha hardware cha Passport",
	"wallets::sources_seedsigner":
		"SeedSigner \u2014 Chipangizo chosaina cha Bitcoin chotsegula chodzipangira",
	"wallets::wallets_grid_heading": "Zikwama zofala za Bitcoin",
	"wallets::wallets_header_subtitle":
		"Gaidi ya sitepe ndi sitepe yosankhirira chikwama, kuteteza makiyi anu, ndi kutenga mphamvu zonse pa Bitcoin yanu.",
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
		`translate-rest-part2 (ny): filled ${filled}, already-done ${skipped}`,
	);
}

main();
