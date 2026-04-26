#!/usr/bin/env node
/**
 * Zulu manifest refresh — non-inflation translations, part 3.
 *
 * Covers: business/accounting, business/why, business/wallets, business/index,
 * business/maps, business/maps-success, business/stickers, business/sticker-success,
 * business/sticker-language-success, business/sticker-files/english/index,
 * business/faq, get-involved, stickers, sticker-success, sticker-language-success,
 * flyers, buy.
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
	"zu.json",
);

const T = {
	"business/accounting": {
		accounting_card_bpr_source: "Bitcoin Price Report",
		accounting_card_pacioli_source: "satoshipacioli.com",
		accounting_card_pacioli_title: "Satoshi Pacioli Accounting Services",
		accounting_card_spreadsheet_source: "The Spreadsheet Guru",
		accounting_card_wallets_source: "bitcoin.rocks",
		accounting_example_gain_result: "+$10",
		accounting_example_loss_result: "−$10",
		accounting_description:
			"Umhlahlandlela wesiNgisi esicacile wokwamukela i-Bitcoin emabhukwini akho — izikhwama ezihlanganisiwe, isisekelo sezindleko, izinzuzo zemali, nokuthi nini ungashayela umbalimabhuku.",
		accounting_s1_c1:
			"Indlela elula yokwamukela i-Bitcoin yisikhwama esihlanganisiwe esithengisa ngokuzenzakalelayo i-100% ye-Bitcoin oyitholayo ngamadola (noma ngomali yendawo) ngomzuzwana inkokhelo efika ngawo.",
		accounting_s1_c2:
			"Ngalokhu kuhlelwa, amabhuku akho abukeka njengakho namuhla — inombolo yokugcina iya kuwo amadola, njalo. Ayikho isisekelo sezindleko, ayikho inzuzo yemali, ayikho amaspredsheets amasha.",
		accounting_s2: "Uma uhlala nezinye i-Bitcoin: ukulandelela isisekelo sakho sezindleko",
		accounting_s2_c1:
			"Amanye amabhizinisi akhetha ukugcina ingxenye ye-Bitcoin awayitholayo esikhundleni sokushintshelwa ngokuzenzakalelayo. Uma kunjalo, isinyathelo esikhulu sokwengeza ukulandelela isisekelo sakho sezindleko — inani ledola lenkokhelo nganye ye-Bitcoin ngosuku oyitholile.",
		accounting_s2_c2:
			"Ngisho noma ucabanga ibhizinisi lakho lonke nge-Bitcoin, iziphathimandla zentela eziningi zisafuna inani ledola libikwe. Izindaba ezinhle: kuyizinombolo ezimbili kuphela ngokwenzeka ngakunye — inani le-Bitcoin elitholiwe nenani layo ledola ngalolo suku.",
		accounting_s2_c3:
			"Sebenzisa amathuluzi angezansi ukuze uzenzakalele ukubheka ukuze ungadingi ukuhlola amanani nsuku zonke.",
		accounting_s3: "Ukusebenzisa noma ukuthengisa i-Bitcoin oyigcinile",
		accounting_s3_c1:
			"Uma ushintshela ngokuzenzakalelayo yonke inkokhelo iye kumadola, eqa lesi sigaba — asisebenzi kuwe.",
		accounting_s3_c2:
			"Uma ugcine enye i-Bitcoin futhi kamuva uthatha isinqumo sokuyisebenzisa noma ukuyithengisa, faka intengo yokuthengisa kwi-spreadsheet yesisekelo sezindleko ifanayo. Umehluko phakathi kwalokho i-Bitcoin yayifaneleke khona ngenkathi uyithola nalokho efaneleke khona uma uyisebenzisa noma uyithengisa kuyinzuzo yemali noma ukulahlekelwa.",
		accounting_s3_c3: "Izibonelo ezimbili ezisheshayo:",
		accounting_s4: "Udinga ungoti okhuluma i-Bitcoin?",
		accounting_s4_c1:
			"Uma ungathanda ukunikela ngalokhu — noma ukubala amabhuku kwakho kwe-Bitcoin kuyinkimbinkimbi ngaphezu kwesikhwama esihlanganisiwe esingakwazi ukuphatha — sincoma kakhulu i-Satoshi Pacioli Accounting Services, inkampani egxile ekubaleni amabhuku e-Bitcoin emabhizinisi.",
		bitcoin_business_accounting_guide:
			"Ukubala amabhuku e-Bitcoin ebhizinisini lakho",
		accounting_card_bpr_label: "INTENGO YE-BITCOIN",
		accounting_card_bpr_title:
			"Bheka intengo yamanje noma yomlando ye-Bitcoin ngamadola",
		accounting_card_pacioli_label: "ABABALI BAMABHUKU BE-BITCOIN",
		accounting_card_spreadsheet_label: "UKUFAKA KU-EXCEL",
		accounting_card_spreadsheet_title:
			"Faka amanani e-Bitcoin ku-Excel ngokuzenzakalelayo",
		accounting_card_wallets_label: "IZIKHWAMA EZIHLANGANISIWE",
		accounting_card_wallets_title: "Buka izikhwama zethu zebhizinisi ezinconywayo",
		accounting_disclaimer:
			"Lo mhlahlandlela owolwazi kuphela futhi awubhekwa njengeseluleko sentela. Uma ufuna iseluleko sentela esiqondene nesimo sakho, sicela ubonisane nombalimabhuku ofanele.",
		accounting_disclaimer_label: "Sicela uqaphele",
		accounting_example_feb_1: "Feb 1",
		accounting_example_gain_badge: "Inzuzo yemali",
		accounting_example_gain_explain: "Ubhala inzuzo yemali engu-$10.",
		accounting_example_jan_1: "Jan 1",
		accounting_example_loss_badge: "Ukulahlekelwa kwemali",
		accounting_example_loss_explain: "Ubhala ukulahlekelwa kwemali okungu-$10.",
		accounting_example_received_label: "Itholiwe",
		accounting_example_sold_label: "Ithengisiwe noma isetshenzisiwe",
		accounting_hero_subtitle:
			"Ukwamukela i-Bitcoin ebhizinisini lakho akudingi ukwenza ukubala amabhuku kube nzima. Nansi inguqulo emfushane — kanye namathuluzi nongoti abenza kungabi buhlungu.",
		accounting_intro_c1:
			"Uma uvele wamukela imali noma ikhadi, ukufaka i-Bitcoin emabhukwini ebhizinisi lakho kulula kunalokho okubukekayo. Unezindlela ezimbili: ushintshele ngokuzenzakalelayo yonke inkokhelo ye-Bitcoin iye kumadola ngomzuzu efika ngawo (akudingi kubala amabhuku okusha), noma ugcine enye njenge-Bitcoin (zimbalwa izinombolo zokwengeza zokulandelela).",
		accounting_intro_c2:
			"Lo mhlahlandlela ukuhambisa kuzo zombili — ukuze ukhethe okuhambelana nebhizinisi lakho futhi uqale ukwamukela i-Bitcoin ngokuzethemba.",
		accounting_s1: "Indlela elula: shintshela ngokuzenzakalelayo emadoleni",
		accounting_s3_c6:
			"Yilokho. Imathemathiki engaphansi iyafana nendlela noma yiyiphi enye impahla ekhulayo noma encipha ibalwa ngayo.",
		sources_bitcoin_price_report:
			"Bitcoin Price Report — Intengo yamanje neyomlando ye-Bitcoin ngamadola",
		sources_satoshi_pacioli:
			"Satoshi Pacioli Accounting Services — Ukubala amabhuku e-Bitcoin emabhizinisi",
		sources_spreadsheet_guru:
			"The Spreadsheet Guru — Faka amanani e-cryptocurrency ku-Excel",
	},

	"business/why": {
		learn_why_bitcoin_is_good_for_business: "I-Bitcoin yamukelwa lapha",
		why_good_for_you: "Kungani i-Bitcoin inhle nakuwe",
		why_learn_more_lowercase: "Funda kabanzi →",
		why_s1_c1:
			"Inkomba yenfleshini yenzeka lapho kuphrintwa imali eyengeziwe noma yakhiwa emoyeni. Lokho kwenza imali esephaketheni lakho ibe nenani elincane ngokuhamba kwesikhathi — futhi yiyona mbangela yokuthi amanani aqhubeka enyuka unyaka nonyaka.",
		why_s1_c2:
			"I-Bitcoin inenani elimisiwe lezinhlamvu ezingu-21 million. Akekho uhulumeni, ibhange, noma inkampani engaphrinta okwengeziwe. Imali yakho elondolozwe nge-Bitcoin igcina inani layo ngokuhamba kwesikhathi esikhundleni sokuyilahla ngokuthula.",
		why_s2_c1:
			"Amabhange amaningi ase-US awe eminyakeni embalwa edlule ngenxa yokugijimela kwamabhange. Lapho amakhasimende amaningi ezama ukukhipha imali ngesikhathi esisodwa, amabhange ayengenayo imali yokukhokhela wonke umuntu.",
		why_s2_c2:
			"Esikhundleni sokugcina nje imali yakho, amabhange abolekisa futhi atshale eziningi zayo. Uma lezo zitshalomali zingahambi kahle — noma uma abafaki imali balahlekelwa ukwethemba — ibhange lingahluleka, futhi izimali zakho ezifakwe zingavalwa noma zilahleke.",
		why_s2_c3:
			"Nge-Bitcoin, ungabamba imali yakho ngqo esikhwameni sakho. Akukho bhange. Akekho umphakathi. Akukho ukugijimela kwebhange.",
		why_s3_c1:
			"Ngokungafani namakhadi esikweletu, i-PayPal, noma ama-akhawunti ebhange wendabuko, i-Bitcoin ayidingi imvume yamuntu ukuze isetshenziswe.",
		why_s3_c2:
			"Akekho ongavala i-akhawunti yakho, avimbe inkokhelo, noma akugcine engadlulisi enethiwekhi. Yiyona sistimu yokuqala yezezimali emlandweni ongasebenzisa ngenkululeko, ngaphandle kokwesaba ukuvinjelwa noma ukubanjwa.",
		why_s4_c1:
			"I-Bitcoin ngokuvamile ayiqondwa kahle, kodwa yenza okuningi okuhle ngokuthula emhlabeni.",
		why_s4_c2:
			"Iye yasiza abalweli bamalungelo abantu balwele inkululeko, yanciphisa ukukhishwa kwe-methane emhlabeni emagqumeni odoti namasimini ka-oyili, yazinzisa amagridi agesi, futhi yaxhasa izinto zomphakathi ezifana namaphaki ezwe.",
		why_biz_s1: "Izimali eziphansi, kuningi okusele ebhizinisini",
		why_biz_s1_c1:
			"Izinkokhelo ze-Bitcoin zeqa amabhange nezinkampani zamakhadi esikweletu ezithatha u-2–3% kuyo yonke inkokhelo. Ibhizinisi ligcina okwengeziwe kwalokho okukhokhayo — okuvame ukusho amanani angcono nesevisi engcono kuwe.",
		why_biz_s2: "Ukuxazululwa ngokushesha, akukho kubuyiselwa",
		why_biz_s2_c1:
			"Izinkokhelo ze-Bitcoin zixazululwa ngemizuzwana, ngqo zisuka esikhwameni sakho ziya ebhizinisini. Akukho ukulinda izinsuku ukuze ibhange likhulule izimali, futhi azikho izimpikiswano zokubuyiselwa ezibizayo — ngakho ibhizinisi lingaba esevisini yokukhonza amakhasimende esikhundleni sokulwa nokukhwabanisa.",
		why_biz_s3: "Mahhala ukwamukela, kuvulekele wonke umuntu",
		why_biz_s3_c1:
			"Azikho izinkontileka, izimali zenyanga, noma izindleko zokuhlela zebhizinisi ukuze lamukele i-Bitcoin. Futhi izigidi zabasebenzisi be-Bitcoin emhlabeni wonke bayasifuna abathengisi abamukela — bukugixe ibhizinisi mahhala kumakhasimende amasha.",
		why_business_cta_intro:
			"Uphethe ibhizinisi futhi ufuna ukuqala ukwamukela i-Bitcoin?",
		why_business_cta_link: "Bheka indlela esebenza ngayo →",
		why_for_business: "Kungani i-Bitcoin inhle kuleli bhizinisi",
		why_for_business_intro:
			"Ukwamukela i-Bitcoin kuvumela ibhizinisi ukugcina okwengeziwe kuyo yonke ukuthengiswa, ukukhokhwa ngokushesha ngaphandle kokubuyiselwa, nokufinyelela isizukulwane somhlaba sabasebenzisi be-Bitcoin — konke ngaphandle kwezinkontileka nezimali zenyanga.",
		why_good_for_you_intro:
			"I-Bitcoin ayisebenzi kuphela emshini wokukhokha — iyimali engcono evikela imali yakho elondolozwe, ubumfihlo bakho, nenkululeko yakho yokuthengisa. Nansi inkomba esheshayo.",
		why_hero_subtitle:
			"Usanda kusikena isitika esithi I-Bitcoin Yamukelwa Lapha. Nansi indaba enhle — kuleli bhizinisi nakuwe.",
		why_intro_c1:
			"Ibhizinisi lapho ukhona lamukela i-Bitcoin — inethiwekhi yezinkokhelo yesimanje, evulekile, enoma ubani angayisebenzisa, kunoma kuphi emhlabeni, ngaphandle kwamabhange noma abaphakathi abathathayo.",
		why_intro_c2:
			"Ngezansi kunenguqulo emfushane yokuthi kungani ukwamukela i-Bitcoin kuhle kuleli bhizinisi, futhi kungani ukusebenzisa i-Bitcoin kuhle kuwe njengekhasimende.",
		why_next_business_label: "YAMUKELA I-BITCOIN",
		why_next_business_title: "Yamukela i-Bitcoin ebhizinisini lakho",
		why_next_buy_label: "THENGA I-BITCOIN",
		why_next_buy_title: "Thenga i-Bitcoin yakho yokuqala",
		why_next_learn_label: "FUNDA KABANZI",
		why_next_learn_title: "Funda kabanzi nge-Bitcoin",
		why_next_wallet_label: "THOLA ISIKHWAMA",
		why_next_wallet_title: "Thola isikhwama sakho se-Bitcoin",
		why_whats_next_heading: "Uya kuphi ngokulandelayo?",
		why_whats_next_intro:
			"Uma lokhu kungukusikena kwakho kokuqala kwesitika se-Bitcoin, nazi izindawo eziwusizo kakhulu zokuya kuzo kusukela lapha.",
	},

	"business/wallets": {
		wallets_name_strike: "STRIKE BUSINESS",
		biz_wallets_meta_description:
			"Zonke izikhwama ze-Bitcoin ziyasebenzelana — khetha esihambelana nebhizinisi lakho. Mahhala, ukuxazulula ngokushesha, akukho kubuyiselwa.",
		sources_breez_business: "Breez — Bitcoin-only Lightning wallet",
		sources_ibex: "IBEX — Lightning payments infrastructure",
		sources_opennode: "OpenNode — Bitcoin payment processor",
		sources_square: "Square — Accept Bitcoin payments",
		sources_zaprite: "Zaprite — Bitcoin invoicing for businesses",
		wallets_hero_subtitle:
			"Izikhwama ze-Bitcoin zimahhala. Khetha esihambelana nebhizinisi lakho — phambili komuntu, online, noma esekelwe ezi-invoyisi — futhi uqale ukwamukela i-Bitcoin ngemizuzu.",
		wallets_section_invoice: "Izikhwama zamabhizinisi asekelwe ezi-invoyisi",
		wallets_section_invoice_intro:
			"Uma uthumela izi-invoyisi kumakhasimende (ukucebisa, ukusebenza ngokuzimela, izinsizakalo ze-B2B), sebenzisa isikhwama esakhelwe ekuthumeleni izi-invoyisi. Ikhasimende lakho likhokha i-invoyisi ye-Bitcoin ngokuchofoza okumbalwa.",
		wallets_section_multiple: "Izikhwama zamabhizinisi anabasebenzi abaningi",
		wallets_section_multiple_intro:
			"Uma uneqembu elithatha izinkokhelo emshinini wokukhokha, khetha isikhwama esivumela ukungena kwabasebenzi abaningi — ngakho wonke umsebenzi uthola i-PIN yakhe futhi ugcine umkhondo ohlanzekile wokuhlola wokuthi ngubani othathe yiphi inkokhelo.",
		wallets_section_online: "Izikhwama zamabhizinisi e-online",
		wallets_section_online_intro:
			"Uthengisa kuwebhusayithi? Lezi zikhwama ziyaxhumana esitolo sakho se-online futhi zamukela i-Bitcoin kunoma yiliphi ikhasimende, kunoma kuphi emhlabeni — akukho kubuyiselwa, akudingeki i-akhawunti yomthengisi.",
		wallets_section_sole: "Izikhwama zamabhizinisi aphethwe ngabantu ngabodwana",
		wallets_section_sole_intro:
			"Uma uphethe isitolo, ikhefi, isitudiyo, noma insizakalo wedwa, noma yisiphi salezi zikhwama sizosebenza. Khetha kusekelwe ekutheni ufuna ukugcina izinkokhelo nge-Bitcoin noma ushintshele ngokuzenzakalelayo ingxenye yenkokhelo nganye eye kumali yakho yendawo.",
		wallets_strike_note:
			"I-Strike Business ikuvumela ukwamukela izinkokhelo ze-Bitcoin ne-Lightning ngezimali ezingu-zero futhi nokuxazulula ngokushesha. Isekela izinkokhelo zomuntu obonayo, e-online, nezisekelwe ezi-invoyisi nge-conversion ezenzakalelayo eya kumali yakho yendawo.",
	},

	"business/index": {
		biz_label_accounting: "UKUBALWA KWAMABHUKU",
		biz_label_faq: "IMIBUZO EVAME UKUBUZWA",
		biz_label_maps: "AMAMEPHU ABATHENGISI",
		biz_label_rewards: "IMIVUZO",
		biz_label_stickers: "IZITIKA",
		biz_label_wallets: "IZIKHWAMA",
		biz_meta_description:
			"Yamukela i-Bitcoin ebhizinisini lakho ngezimali eziphansi, ukuxazulula ngokushesha, akukho kubuyiselwa, namakhasimende amaningi.",
		business_hero_subtitle:
			"Yamukela izinkokhelo ngezimali eziphansi, ukhokhelwe ngokushesha, futhi ufinyelele izigidi zamakhasimende amasha — ngaphandle kwezinkontileka nezindleko ezifihliwe.",
		business_intro_c1:
			"I-Bitcoin inikeza ibhizinisi lakho indlela esheshayo, eshibhile, eyimfihlo yokukhokhwa. Akekho umphakathi. Akukho ukubuyiselwa. Azikho izinkontileka. Yimali nje exazululayo ngemizuzwana, ngqo isuka kumakhasimende akho iya kuwe.",
		business_intro_c2:
			"Ngezansi kunenguqulo emfushane yokuthi kungani i-Bitcoin inhle ebhizinisini — futhi ngezansi kwalokho, yonke insiza oyidingayo ukuze uqale ukuyamukela namuhla.",
		business_resources_heading: "Konke odikingayo ukuze wamukele i-Bitcoin",
		business_resources_intro:
			"Sebenza ngalezi zinsiza ngesilinganiso sakho. Yileyo nayo ingumhlahlandlela omfushane, osebenzayo.",
	},

	"business/maps": {
		biz_maps_form_header: "Sitshele ngebhizinisi lakho",
		biz_maps_form_intro:
			"Sidinga kuphela imininingwane embalwa ukuze sikufake ohlwini. Idatha yekheli igcinwa kuphela ngesikhathi esanele sokuthumela ibhizinisi lakho emamephini.",
		biz_maps_hero_subtitle:
			"Faka ibhizinisi lakho mahhala ku-BTC Map — uhlu olwomhlaba wonke, oluvulekile lwabathengisi abamukela i-Bitcoin — ukuze ama-Bitcoiner aseduze akwazi ukukuthola futhi achithe i-Bitcoin ebhizinisini lakho.",
		biz_maps_hero_title:
			"Faka ibhizinisi lakho emamephini abathengisi be-Bitcoin",
		biz_maps_intro_c1:
			"Ama-Bitcoiner ngempela afuna izindawo zokuchitha. Ukufaka ibhizinisi lakho emaphini kukubeka phambi kwawo wonke umsebenzisi we-Bitcoin osesha indawo yokudla, ukuthenga, noma ukuhlala eduze — ngezindleko ezingu-zero kuwe.",
		biz_maps_intro_c2:
			"Vele ugcwalise ifomu elimfushane elingezansi futhi sizothumela ibhizinisi lakho ku-BTC Map nakwamanye amamephu abathengisi be-Bitcoin esikhundleni sakho.",
		biz_maps_meta_description:
			"Faka ibhizinisi lakho mahhala ku-BTC Map nakwamanye amamephu abathengisi be-Bitcoin ukuze ama-Bitcoiner aseduze akwazi ukukuthola.",
		biz_maps_placeholder_address: "Ikheli lomgwaqo",
		biz_maps_placeholder_category: "Isigaba (e.g. indawo yokudlela, ikhefi, ihhotela)",
		biz_maps_placeholder_city: "Idolobha",
		biz_maps_placeholder_country: "Izwe",
		biz_maps_placeholder_name: "Igama lebhizinisi",
		biz_maps_placeholder_region: "Isifunda / Iphrovinsi / Isifundazwe",
		biz_maps_placeholder_website: "Iwebhusayithi (ngokukhetha)",
		biz_maps_view_map_cta: "Buka i-BTC Map",
	},

	"business/maps-success": {
		biz_maps_success_btn_view_map: "Buka i-BTC Map",
		biz_maps_success_hero_subtitle:
			"Siyabonga ngokuthumela ibhizinisi lakho. Sizokufaka ohlwini emamephini abathengisi be-Bitcoin maduzane.",
		biz_maps_success_hero_title: "Isicelo sitholiwe 🎉",
		biz_maps_success_timeline_c1:
			"Ibhizinisi lakho lizofakwa ohlwini ku-BTC Map nakwezinye izindawo zabathengisi be-Bitcoin esikhathini esiphakathi kwesonto eli-1 nezimbili. Sihlola isicelo ngasinye ngezandla ukuze sigcine amamephu eqondile.",
		biz_maps_success_timeline_c2:
			"Lapho uhlu lwakho seluvuliwe, ama-Bitcoiner aseduze angakwazi ukuthola ibhizinisi lakho futhi azochitha i-Bitcoin lapho.",
		biz_maps_success_timeline_header: "Yini ezolandela",
		biz_maps_success_view_c1:
			"Ngenkathi ulinde, bheka i-BTC Map ukuze ubone inethiwekhi ekhulayo yamabhizinisi amukela i-Bitcoin emhlabeni wonke.",
		biz_maps_success_view_header: "Bona lapho uzobonakala khona",
	},

	"business/sticker-language-success": {
		biz_sticker_language_success_hero_subtitle:
			"Siyabonga ngokucela amafayela esitika 'I-Bitcoin Yamukelwa Lapha' ngolimi lwakho.",
		biz_sticker_language_success_hero_title: "Isicelo sitholiwe 🎉",
		biz_sticker_language_success_timeline_c1:
			"Sizodala futhi sishicilele amafayela akho esitika esikhathini esiphakathi kwamasonto angu-3 ne-4. Lapho selungile, uzokwazi ukuwalanda futhi uwaphrinte mahhala ekhasini lethu lamafayela esitika.",
		biz_sticker_language_success_timeline_c2:
			"Amafayela esitika ekhishwa ngamaqembu, ngakho kungase kuthathe amasonto ambalwa ukuze ulimi lwakho luvuleke. Siyabonga ngokubekezela kwakho!",
		biz_sticker_language_success_timeline_header: "Yini ezolandela",
	},

	"business/sticker-success": {
		biz_sticker_success_btn_order_bulk: "Oda ngobuningi",
		biz_sticker_success_btn_request_more: "Cela elinye iphakethe lamahhala",
		biz_sticker_success_hero_subtitle:
			"Uzothola izitika zakho zamahhala 'I-Bitcoin Yamukelwa Lapha' esikhathini esiphakathi kwamasonto angu-2 ne-4, emvilophu emhlophe enezitika ezi-3 ngaphakathi.",
		biz_sticker_success_hero_title: "Izitika zakho ziseluhambeni 🎉",
		biz_sticker_success_more_c1:
			"Uma izitika ezi-3 zinganele ebhizinisini lakho, ungakhulula ucele elinye iphakethe lamahlala — noma u-oda ngobuningi kwiprinta efanayo esiyisebenzisayo.",
		biz_sticker_success_more_header: "Udinga izitika ezengeziwe?",
		biz_sticker_success_tip_1:
			"Emnyango wakho wangaphambili noma efasiteleni ukuze amakhasimende abone ngaphambi kokungena",
		biz_sticker_success_tip_2:
			"Eduze komshini wokukhokha, i-POS terminal, noma indawo yokukhokha",
		biz_sticker_success_tip_3:
			"Kumamenyu, kumalisti amanani, noma kuma-tip jars",
		biz_sticker_success_tip_4:
			"Ungazinameli endaweni ongayiphethe noma ongenayo imvume yokuzifaka",
		biz_sticker_success_tips_header: "Izindawo ezinhle zokufaka izitika zakho",
	},

	"business/stickers": {
		biz_stickers_hero_subtitle:
			"Yenza amakhasimende akho akwazi ukuthi wamukela i-Bitcoin. Yala iphakethe lamahhala lezitika 'I-Bitcoin Yamukelwa Lapha' uzifake ebhizinisini lakho.",
		biz_stickers_hero_title: "Izitika zamahhala 'I-Bitcoin Yamukelwa Lapha'",
		biz_stickers_intro_c1:
			"Ukwamukela i-Bitcoin kuyingxenye yomsebenzi nje — amakhasimende akho nawo adinga ukwazi ukuthi uyenza. Lezi zitika ezincane 'I-Bitcoin Yamukelwa Lapha' zidizayinelwe ukuthi unamathele emnyango wakho wangaphambili, kumshini wokukhokha, kumenyu, noma kunoma yikuphi lapho amakhasimende ezozibona ngaphambi kokukhokha.",
		biz_stickers_intro_c2:
			"Sizokuthumelela iphakethe lamahhala kunoma kuphi e-USA noma e-Canada, noma ungaphrinta esakho kunoma kuphi emhlabeni.",
		biz_stickers_option_canada: "🇨🇦 I-Canada — Mahhala ngeposi",
		biz_stickers_option_print: "🌍 Umhlaba — Phrinta okwami",
		biz_stickers_option_usa: "🇺🇸 I-USA — Mahhala ngeposi",
		biz_stickers_placeholder_translation1:
			"Inguqulo ka 'Bitcoin Accepted Here'",
		biz_stickers_placeholder_translation2:
			"Inguqulo ka 'Scan to learn why Bitcoin is good for business.'",
		biz_stickers_print_c1:
			"Ungaphrinta izitika zakho 'I-Bitcoin Yamukelwa Lapha', kungakhathaliseki ukuthi uhlalaphi. Chofoza ulimi lwakho ngezansi ukuze ulande amafayela esitika nemiyalelo yokuphrinta.",
		biz_stickers_print_header: "Phrinta amafayela akho esitika",
		biz_stickers_request_c1:
			"Gcwalisa ifomu elingezansi ukuze ucele amafayela esitika 'I-Bitcoin Yamukelwa Lapha' ngolimi lwakho lwendawo. Sizokwazisa lapho selungile.",
		biz_stickers_request_header: "Awuluboni ulimi lwakho?",
		biz_stickers_step_description:
			"Sizothumela iphakethe lamahhala emakhelini ase-USA naseCanada. Kunoma kuphi emhlabeni, ungaphrinta esakho.",
		biz_stickers_step_header: "Ufuna ukuthola izitika zakho ngendlela enjani?",
	},

	"business/sticker-files/english/index": {
		english_biz_sticker_files_description:
			"Landa amafayela esitika esiNgisi ukuze uphrinte izitika zakho 'I-Bitcoin Yamukelwa Lapha'.",
		biz_stickers_english_hero_subtitle:
			"Phrinta izitika zakho 'I-Bitcoin Yamukelwa Lapha' ngesiNgisi ukuze wazise amakhasimende akho ukuthi wamukela i-Bitcoin.",
		biz_stickers_english_hero_title:
			"Landa amafayela esitika 'I-Bitcoin Yamukelwa Lapha' ngesiNgisi",
	},

	"business/faq": {
		faq_hero_subtitle:
			"Izimpendulo ezimfushane emibuzweni abathengisi abayibuzayo kakhulu ngaphambi kokuqala ukwamukela i-Bitcoin — izimali, ukuxazulula, izikhwama, ukubuyiselwa, izindleko, nokunye.",
		faq_intro_c1:
			"Thepha noma yimuphi umbuzo ongezansi ukuze unwebule impendulo. Lapho usukulungele ukuqala ukwamukela i-Bitcoin, izinsiza zebhizinisi ezisezansi zekhasi zizokuhambisa kuwo wonke umkhondo.",
	},

	"get-involved": {
		get_involved_and_help_spread_bitcoin: "Bamba iqhaza usabalalise i-Bitcoin",
		get_involved_business_content_1:
			"Ufuna ukusiza ukwakha umnotho ozungeza we-Bitcoin? Indlela elula yikusiza amabhizinisi endawo aqale ukwamukela izinkokhelo ze-Bitcoin.",
		get_involved_business_content_2:
			"Wazi ibhizinisi elingaba lulungele lokho? Thumela umnikazi ku",
		get_involved_business_content_3: "khasini lebhizinisi le-Bitcoin lethu.",
		get_involved_description:
			"Izinsiza zethu zamahhala zenza kube lula ukusabalalisa ukwamukelwa kwe-Bitcoin. Izitika, amaphephandaba, izitika ezithi 'I-Bitcoin Yamukelwa Lapha' zamabhizinisi, nekhodi evulekile noma ubani angafaka isandla kuyo.",
		get_involved_header: "Bamba iqhaza usabalalise i-Bitcoin.",
		get_involved_intro_5:
			"Ungasiza ukushintsha lokho. Senze izinsiza zamahhala eziningi ukwenza kube lula ukusabalalisa ithemba elilethwa yi-Bitcoin kulabo abakuzungezile.",
		get_involved_biz_stickers_note:
			"Usuvele wamukela i-Bitcoin? Yenza amakhasimende akwazi ngezitika zethu zamahhala 'I-Bitcoin Yamukelwa Lapha'. Sizothumela iphakethe kunoma yiliphi ikheli e-USA noma e-Canada, noma ungaphrinta esakho kunoma kuphi emhlabeni.",
		get_involved_card_biz_stickers_label: "Izitika ezithi yamukelwa lapha",
		get_involved_card_biz_stickers_source: "Umthombo: bitcoin.rocks →",
		get_involved_card_biz_stickers_title:
			"Izitika zamahhala 'I-Bitcoin Yamukelwa Lapha' zebhizinisi lakho",
		get_involved_card_business_label: "I-Bitcoin yebhizinisi",
		get_involved_card_business_source: "Umthombo: bitcoin.rocks →",
		get_involved_card_business_title:
			"Konke ibhizinisi elidinga ukuze liqale ukwamukela izinkokhelo ze-Bitcoin",
		get_involved_card_flyers_label: "Amaphephandaba aphrintekayo",
		get_involved_card_flyers_source: "Umthombo: bitcoin.rocks →",
		get_involved_card_flyers_title:
			"Landa futhi uphrinte iphephandaba le-Bitcoin lamahhala",
		get_involved_card_github_label: "Umthombo ovulekile",
		get_involved_card_github_source: "Umthombo: GitHub →",
		get_involved_card_github_title:
			"Faka isandla ku-bitcoin.rocks ku-GitHub",
		get_involved_card_stickers_label: "Izitika zamahhala",
		get_involved_card_stickers_source: "Umthombo: bitcoin.rocks →",
		get_involved_card_stickers_title:
			"Cela iphakethe lezitika ze-Bitcoin lamahhala lithunyelwe emnyango wakho",
		get_involved_flyers_content_1:
			"Amaphephandaba ayingenye yezindlela ezilula zokwethula i-Bitcoin emphakathini wakho. Landa iphephandaba le-Bitcoin elimahlala eliphrintekayo, uphrinte amakhophi amaningi ngokuthanda, futhi uwafake emabhodini omphakathi, ezindaweni zekhofi, emihlanganweni, noma kunoma kuphi lapho abantu behlangana khona.",
		get_involved_flyers_content_2:
			"Iphephandaba ngalinye lifaka ihedi elidonsayo nekhodi le-QR ethumela abafundi abafuna ukwazi ku-bitcoin.rocks ukuze bafunde okwengeziwe.",
		get_involved_flyers_content_3:
			"Ngokungafani nezitika, amaphephandaba angaphrintwa ngokufuna kunoma kuphi emhlabeni — okudingayo nje yiprinta nemizuzu embalwa.",
		get_involved_flyers_header: "Phrinta unamathisele iphephandaba",
		get_involved_flyers_image_alt:
			"Ukubuka kweqephandaba le-Bitcoin lamahhala eliphrintekayo elivela ku-bitcoin.rocks",
		get_involved_github_content_1:
			"i-bitcoin.rocks iyiphrojekthi yamahhala, evulekile, esebenza ngaphansi kwe-MIT License. Umsebenzi wethu uwukusheshisa ukwamukelwa kwe-Bitcoin ngemfundo — futhi asikwazi ukukwenza sodwa.",
		get_involved_github_content_2:
			"Noma ngabe ungumthuthukisi, umdwebi, umlobi, noma umhumushi, kukhona indlela ongasiza ngayo. Samukela ikakhulukazi abafaki isandla abangahumusha okuqukethwe kwethu kuzilimi eziningi ukuze abantu abaningi emhlabeni bafunde nge-Bitcoin ngolimi lwabo lwemvelo.",
		get_involved_github_content_3:
			"Yenza i-fork yendawo yokugcina ikhodi, vula i-pull request, faka isikhalo, noma ufaka inkanyezi ephrojekthini ukukhombisa ukwesekela kwakho. Wonke umnikelo usiza i-Bitcoin ifinyelele abantu abaningi.",
		get_involved_github_header: "Faka isandla ku-GitHub",
		get_involved_sticker_image_alt:
			"Iphakethe lezitika zombhalo we-Bitcoin lamahhala elivela ku-bitcoin.rocks",
	},

	"stickers": {
		stickers_intro_c2: "Bitcoin",
		stickers_flyers_link_before: "Ngenkathi ukwenza, phrinta unamathisele esakho",
		stickers_instructions_1:
			"Faka ikheli lakho lokuthumela bese sithumela iphakethe lezitika ze-Bitcoin zamahhala ngeposi. Izitika zakho zizothunyelwa ngemvilophu emhlophe.",
		stickers_btn_choose_pack: "Khetha leli phakethe",
		stickers_bulk_c1: "Ufuna izitika eziningi kunezimbalwa?",
		stickers_bulk_c2: "Oda ngobuningi kwiprinta efanayo esiyisebenzisayo",
		stickers_bulk_c3: "— ngokuthi uthenge eziningi, ziba shibhile ngesitika ngasinye.",
		stickers_bulk_cta: "Thenga izitika ngobuningi",
		stickers_bulk_header: "Oda izitika ngobuningi",
		stickers_hero_subtitle:
			"Yala iphakethe lezitika ze-Bitcoin lamahhala uzifake endaweni yomphakathi ukuze usize abantu abaningi bafunde nge-Bitcoin.",
		stickers_hero_title: "Izitika ze-Bitcoin zamahhala",
		stickers_intro_c1:
			"Umsebenzi wethu uwukukusiza ukufaka i-orange pill kubantu abaningi ngokufaka izitika ze-Bitcoin endaweni yomphakathi. Zonke izitika zethu zinama-QR codes axhumana namakhasi emfundo nge",
		stickers_intro_c3: "infleshini",
		stickers_intro_c4:
			"Khetha iphakethe lesitika ezansi futhi ukhethe indlela ofuna ukuzithola ngayo — sizothumela iphakethe lamahhala kunoma ubani e-USA noma e-Canada, noma ungaphrinta esakho kunoma kuphi emhlabeni.",
		stickers_mail_header: "Sizokuthumela izitika zakho zamahhala",
		stickers_next_print_flyers: "Qhubeka usabalalise",
		stickers_next_print_flyers_desc:
			"Phrinta amaphephandaba e-Bitcoin amahhala ufake endaweni yomphakathi",
		stickers_option_bulk: "📦 Umhlaba — Oda ngobuningi",
		stickers_option_canada: "🇨🇦 I-Canada — Mahhala ngeposi",
		stickers_option_print: "🌍 Umhlaba — Phrinta okwami",
		stickers_option_usa: "🇺🇸 I-USA — Mahhala ngeposi",
		stickers_print_c1:
			"Ungahlanganyela ngokuphrinta izitika zakho, kungakhathaliseki ukuthi uhlalaphi. Chofoza ulimi lwakho ngezansi ukuze ulande amafayela esitika nemiyalelo yokuphrinta.",
		stickers_print_c2: "Asisona sonke isitika esitholakala kuzo zonke izilimi.",
		stickers_print_header: "Phrinta amafayela akho esitika",
		stickers_request_c1:
			"Gcwalisa ifomu elingezansi ukuze ucele amafayela esitika ngolimi lwakho lwendawo. Sizokwazisa lapho selungile.",
		stickers_request_header: "Awuluboni ulimi lwakho?",
		stickers_share_c2: "Silandele ku-Nostr ngokucinga",
		stickers_share_c3: "kunoma yiyiphi i-client ye-Nostr.",
		stickers_signs_pack_description:
			"Izimpawu zesixwayiso, ingozi, nokuqaphela ezinemilayezo ye-Bitcoin — zidizayinelwe ukubamba ukunaka futhi zenze abantu beme bafunde.",
		stickers_step_1_description:
			"Iphakethe ngalinye linesethi ehlukile yezitika ze-Bitcoin ezinama-QR codes afundisa abantu nge-Bitcoin.",
		stickers_step_1_eyebrow: "ISINYATHELO 1",
		stickers_step_1_header: "Khetha iphakethe lakho lesitika",
		stickers_step_2_description:
			"Sizothumela iphakethe lamahhala emakhelini ase-USA naseCanada. Kunoma kuphi emhlabeni, ungaphrinta esakho noma u-oda ngobuningi.",
		stickers_step_2_eyebrow: "ISINYATHELO 2",
		stickers_step_2_header: "Ufuna ukuthola izitika zakho ngendlela enjani?",
		stickers_text_pack_description:
			"Inhlanganisela yamaphathi e-Bitcoin nemibhalo emfushane edizayinelwe ukuvusa ukufuna ukwazi ezindaweni zomphakathi.",
	},

	"sticker-success": {
		sticker_success_btn_order_bulk: "Oda ngobuningi",
		sticker_success_btn_share_on_nostr: "Yabelana ku-Nostr",
		sticker_success_btn_what_is_nostr: "Yini i-Nostr?",
		sticker_success_bulk_header: "Ufuna izitika eziningi?",
		sticker_success_hero_title: "Izitika zakho ziseluhambeni 🎉",
		sticker_success_share_header: "Yabelana ngezindawo zakho zezitika",
		sticker_success_tips_header: "Izindawo ezinhle zezitika",
	},

	"sticker-language-success": {
		sticker_language_success_hero_title: "Isicelo sitholiwe 🎉",
	},

	"flyers": {
		flyers_intro_header:
			"Indlela yokuphrinta nokuposa lawa maphephandaba e-Bitcoin",
		flyers_hero_subtitle:
			"Amaphephandaba e-Bitcoin amahhala, aphrintekayo. Wafake endaweni yomphakathi ukuze usize abantu abaningi bafunde nge-Bitcoin.",
		flyers_hero_title: "Phrinta unamathisele amaphephandaba e-Bitcoin",
		flyers_next_get_stickers: "Sabalalisa izwi",
		flyers_next_get_stickers_desc:
			"Yala iphakethe lezitika ze-Bitcoin lamahhala",
	},

	"buy": {
		buy_bitcoin_guide: "Indlela yokuthenga i-Bitcoin",
		buy_step_1_header: "Khetha izwe lakho",
		buy_step_2_header: "Khetha indlela yakho yokukhokha",
		buy_step_3_header: "Izinketho zakho zokuthenga",
		buy_step_4_header: "Gcina i-Bitcoin yakho ngokuphepha",
		buy_header_subtitle:
			"Umhlahlandlela olula, wesinyathelo nesinyathelo wokuthenga i-Bitcoin yakho yokuqala.",
		buy_howto_name: "Indlela yokuthenga i-Bitcoin",
		buy_meta_description:
			"Funda indlela yokuthenga i-Bitcoin ngokuphepha ngomhlahlandlela wethu wesinyathelo nesinyathelo. Khetha izwe lakho nendlela yokukhokha ukuze uthole izinketho ezingcono kakhulu zokuthenga i-Bitcoin kuwe.",
		buy_step_1_eyebrow: "Isinyathelo 1",
		buy_step_2_eyebrow: "Isinyathelo 2",
		buy_step_3_eyebrow: "Isinyathelo 3",
		buy_step_4_eyebrow: "Isinyathelo 4",
		buy_storage_cta_label: "Isinyathelo esilandelayo",
		sources_bisq:
			"Bisq — Decentralized peer-to-peer Bitcoin exchange",
		sources_coinatmradar: "Coin ATM Radar — Worldwide Bitcoin ATM directory",
		sources_kraken: "Kraken — Established Bitcoin exchange",
		sources_relai: "Relai — Swiss Bitcoin-only self-custody app",
		sources_river: "River — Bitcoin-only buying, mining, and custody",
		sources_strike_lightning:
			"Strike — Buy Bitcoin with Lightning Network support",
		sources_swan: "Swan Bitcoin — Bitcoin-only dollar-cost averaging",
	},
};

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
		const ns = T[e.namespace];
		if (ns && Object.prototype.hasOwnProperty.call(ns, e.key)) {
			e.targetTranslation = ns[e.key];
			filled++;
			continue;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part3 (zu): filled ${filled}, already-done ${skipped}`,
	);
}

main();
