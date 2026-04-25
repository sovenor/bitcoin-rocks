#!/usr/bin/env node
/**
 * Zulu manifest refresh — non-inflation translations, part 1.
 *
 * Covers: 404, about, bank-runs, business/*, common, compound-inflation-calculator,
 * lightning, nostr/index, sticker-files/index, wallets, comparison hero_title.
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

/* ─────────────── Translations by (namespace, key) ─────────────── */

const T = {
	"404": {
		"404_home": "Buyela ekhaya",
		"404_message": "I-Bitcoin iyahalalisa, kodwa leli khasi eliphukile alihalalisi.",
		"404_not_found_short": "Akatholakali",
	},

	"about": {
		about_card_contact_github_label: "GitHub",
		about_card_contact_github_title: "github.com/sovenor/bitcoin-rocks",
		about_card_email_title: "hi@bitcoin.rocks",
		about_card_nostr_label: "Nostr",
		about_card_nostr_title: "hi@bitcoin.rocks",
		about_mission_1_sovenor: "sovenor",
		about_page_description:
			"i-bitcoin.rocks iyiwebhusayithi yemfundo yamahhala, evulekile, ye-Bitcoin eyasungulwa ngo-2022. Umsebenzi wethu uwukusheshisa ukwamukelwa kwe-Bitcoin ngemfundo.",
		about_editorial_2:
			"Sixhumanisa nemithombo ethembekile efana ne-Federal Reserve (FRED), i-U.S. Bureau of Labor Statistics, i-FDIC, iZizwe Ezihlangene, i-World Gold Council, i-Forbes, i-MIT Technology Review, u-Lyn Alden, no-James Lavish. Sikholelwa ukuthi i-Bitcoin izikhulumela yona uma amaqiniso ethulwa ngokucacile.",
		about_header: "Mayelana ne-bitcoin.rocks",
		about_open_source_2:
			"i-bitcoin.rocks iyiphrojekthi yamahhala, evulekile, esebenza ngaphansi kwe-MIT License. Noma ubani angafaka isandla ku-bitcoin.rocks. Samukela ikakhulukazi abahumushi abasiza ukwenza okuqukethwe kwethu kufinyeleleke kubantu emhlabeni wonke.",
		about_business_blurb:
			"Sinikeza izinsiza zebhizinisi zamahhala ezenza kube lula ukufaka abathengisi bendawo ukuze bamukele i-Bitcoin. Ikhasi lethu lebhizinisi le-Bitcoin libheka ukuthi kungani i-Bitcoin inhle ebhizinisini, indlela yokukhetha isikhwama nendawo yokukhokha, futhi linikeza izitika zamahhala ezithi 'I-Bitcoin Yamukelwa Lapha'.",
		about_card_business_label: "Izinsiza zebhizinisi",
		about_card_business_source: "Umthombo: bitcoin.rocks →",
		about_card_business_title:
			"Konke ibhizinisi elidinga ukuze liqale ukwamukela izinkokhelo ze-Bitcoin",
		about_card_contact_github_source: "Umthombo: GitHub →",
		about_card_contribute_label: "Faka isandla",
		about_card_contribute_source: "Umthombo: GitHub →",
		about_card_contribute_title:
			"Funda indlela yokufaka isandla ku-bitcoin.rocks",
		about_card_email_label: "I-imeyili",
		about_card_email_source: "Umthombo: i-imeyili →",
		about_card_flyers_label: "Amaphephandaba aphrintekayo",
		about_card_flyers_source: "Umthombo: bitcoin.rocks →",
		about_card_flyers_title:
			"Landa futhi uphrinte amaphephandaba e-Bitcoin omphakathi wakho",
		about_card_github_label: "Indawo yokugcina ikhodi",
		about_card_github_source: "Umthombo: GitHub →",
		about_card_github_title: "Buka i-bitcoin.rocks ku-GitHub",
		about_card_nostr_source: "Umthombo: Nostr →",
		about_card_stickers_label: "Izitika zamahhala",
		about_card_stickers_source: "Umthombo: bitcoin.rocks →",
		about_card_stickers_title:
			"Thola izitika ze-Bitcoin zamahhala zithunyelwa emnyango wakho",
		about_flyers_blurb:
			"Sidizayina amaphephandaba aphrintekayo ongawanika abantu emihlanganweni, uwafake emabhodini omphakathi, noma uwafake emabhokisini ezincwadi — indlela elula yokuvusa ukufuna ukwazi futhi uthumele abantu ku-bitcoin.rocks ukuze bafunde okwengeziwe.",
		about_mission_1a: "i-bitcoin.rocks yasungulwa ngu-",
		about_mission_1b:
			"ngo-2022 inomsebenzi olula: ukusheshisa ukwamukelwa kwe-Bitcoin ngemfundo.",
		about_stickers_blurb:
			"Sithumela izitika ze-Bitcoin zamahhala emnyango wakho ukuze usize ukusabalalisa ukwazi nge-Bitcoin emphakathini wakho. Amakhulu abantu bayasikena amakhodi e-QR akulezi zitika njalo ngenyanga ukuze bafunde nge-Bitcoin.",
	},

	"bank-runs": {
		bank_runs_card_fdic_value: "1,42%",
		bank_runs_header:
			"I-Bitcoin ayinazinkinga zokugijimela kwamabhange, kodwa ibhange lakho lingaba nazo.",
		bank_runs_bitcoin_heading: "I-Bitcoin ayinazinkinga zokugijimela kwamabhange",
		bank_runs_bitcoin_p1:
			"I-Bitcoin iyisistimu enesigcino esiphelele. Awufaki imali yakho ebhange. Ungumninimali wakho. Akukho ukubolekiswa kwemali yakho ngaphandle kolwazi lwakho ngoba nguwe wedwa ongafinyelela emalini yakho.",
		bank_runs_bitcoin_p2:
			"Inqobo nje uma ubambe i-bitcoin esikhwameni sakho — hhayi ku-exchange noma kuthengisiwe ku-ETF — ukugijimela kwamabhange akunakwenzeka.",
		bank_runs_bitcoin_p3:
			"Nge-Bitcoin, ulawula ngempela imali yakho.",
		bank_runs_card_bank_reserve_detail:
			"Kusukela mhla ka-26 Mashi 2020, amabhange ase-US adingeka ukugcina i-0% kuphela esigcinweni.",
		bank_runs_card_bank_reserve_label: "Iratio yokugcina kwebhange",
		bank_runs_card_bank_reserve_source: "Umthombo: Federal Reserve →",
		bank_runs_card_btc_fdic_detail:
			"Isistimu enesigcino esiphelele — alukho usizo lomshwalense oludingekayo.",
		bank_runs_card_btc_fdic_label: "Ukukhanyiselwa kwe-Bitcoin",
		bank_runs_card_btc_fdic_source: "Umthombo: Bitcoin whitepaper →",
		bank_runs_card_btc_reserve_detail:
			"Yonke i-bitcoin ikhona ku-blockchain — alukho olubolekisiwe.",
		bank_runs_card_btc_reserve_label: "Iratio yokugcina ye-Bitcoin",
		bank_runs_card_btc_reserve_source: "Umthombo: Bitcoin whitepaper →",
		bank_runs_card_fdic_detail:
			"Isikhwama somshwalense esingu-$153.9B kuqhathaniswa nezimali ezishwalisiwe ezingu-$10.82T (Disemba 2025).",
		bank_runs_card_fdic_label: "Ukukhanyiselwa kwe-FDIC",
		bank_runs_card_fdic_source: "Umthombo: FDIC Statistics at a Glance →",
		bank_runs_card_svb_label: "Isibonelo socwaningo",
		bank_runs_card_svb_source:
			"Umthombo: University of Washington School of Law →",
		bank_runs_card_svb_title:
			"Funda indlela ukugijimela kwe-Silicon Valley Bank okwenzeka ngayo",
		bank_runs_card_wallet_label: "Isinyathelo esilandelayo",
		bank_runs_card_wallet_source: "Qala lapha →",
		bank_runs_card_wallet_title:
			"Funda indlela yokuthola isikhwama sakho se-Bitcoin",
		bank_runs_fdic_heading: "Umshwalense we-FDIC umboza cishe i-1% yezimali",
		bank_runs_fdic_p1:
			"Umshwalense we-FDIC uvikela izimali ezifakwe ezifika ku-$250,000 ngomfaki ngamunye. Kodwa isikhwama somshwalense sincane kakhulu uma kuqhathaniswa nezimali eziphelele ezakhelwe ukuvikelwa.",
		bank_runs_fdic_p2_a:
			"Ekuhlulekeni okukhulu kwebhange, uhulumeni cishe ungaphrinta imali ukuze ufihle ulindi — okuholela kwesinye",
		bank_runs_fdic_p2_link: "ukunfleshini",
		bank_runs_fdic_p2_b: ".",
		bank_runs_page_description:
			"Amabhange ayabolekisa imali yakho ngaphansi kwesistimu yokugcina yengxenye. Uma abantu abaningi behlikiza ngesikhathi esisodwa, amabhange angahluleka. I-Bitcoin iyisistimu enesigcino esiphelele — ukugijimela kwamabhange akunakwenzeka.",
		bank_runs_svb_heading: "I-Silicon Valley Bank: isibonelo sangempela",
		bank_runs_svb_p1_a:
			"NgoMashi 2023, i-Silicon Valley Bank yahluleka ngemva kokutshala izimali zamakhasimende kuma",
		bank_runs_svb_p1_b:
			"Lapho lawo mabondi elahlekelwa inani, i-SVB yangakwazi ukukhokhela ababhilanikayo. Ibhange laliyize.",
		bank_runs_svb_p1_link: "mabondi kahulumeni esikhathi eside.",
		bank_runs_svb_p2:
			"Izinkulungwane zamabhizinisi azikwazanga ukukhokhela abasebenzi bawo. I-FDIC yangenelela — kodwa lokho kwabakha umbuzo omkhulu: ngabe imali yakho iphephile ngempela?",
		bank_runs_what_p1:
			"Amabhange awagcini izimali zakho engubhokisi. Abolekisa imali yakho futhi atshale — lokho kubizwa ngokuthi ukubhanga kwengxenye yokugcina.",
		bank_runs_what_p2:
			"Uma abantu abaningi bezama ukukhipha imali ngesikhathi esisodwa, ibhange alinayo imali eyanele yokukhokhela wonke umuntu. Lokho kuwukugijimela kwebhange — futhi kungenza amabhange awe ngokuphelele.",
	},

	"common": {
		common_language_switcher_add_language: "Engeza ulimi",
		common_next_buy_bitcoin: "Thenga i-Bitcoin",
		common_next_buy_bitcoin_desc: "Funda indlela yokuthenga i-Bitcoin ngokuphepha",
		common_next_calculate: "Bala inkomba yakho yenfleshini",
		common_next_calculate_desc:
			"Bona ukuthi inkomba yenfleshini ithinta kanjani umholo wakho ngokuhamba kwesikhathi",
		common_next_get_wallet: "Thola isikhwama",
		common_next_get_wallet_desc:
			"Thola isikhwama sakho sokuqala se-Bitcoin — simahhala",
		common_next_keep_learning: "Qhubeka nokufunda",
		common_next_keep_learning_desc:
			"Bona indlela i-Bitcoin ethuthukisa ngayo umhlaba",
		common_source_bls_cpi:
			"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
		common_source_fred_money_supply_index:
			"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
		common_source_whitepaper:
			"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		common_sources_treasury_auction:
			"James Lavish — “Can a Treasury Auction Fail?”",
		common_stickers_printer_name: "StickerMule.com",
		common_whats_next: "Yini elandelayo?",
		// untranslated dimensions — Zulu uses commas as decimal separators (SA convention)
		common_stickers_dimensions_bdhi: "21,59 cm x 4,6482 cm (8,5 in x 1,83 in)",
		common_stickers_dimensions_bitcoin_accepted_here:
			"20,995 cm x 6,35 cm (8,25 in x 2,5 in)",
		common_stickers_dimensions_caution:
			"12,0142 cm x 7,9502 cm (4,73 in x 3,13 in)",
		common_stickers_dimensions_cure_v2: "6,35 cm x 12,7 cm (2,5 in x 5 in)",
		common_stickers_dimensions_danger:
			"11,4544 cm x 8,382 cm (4,51 in x 3,3 in)",
		common_stickers_dimensions_fix:
			"11,3792 cm x 6,8072 cm (4,48 in x 2,68 in)",
		common_stickers_dimensions_got_inflation:
			"7,9248 cm x 14,605 cm (3,12 in x 5,75 in)",
		common_stickers_dimensions_study:
			"14,605 cm x 5,1308 cm (5,75 in x 2,02 in)",
		common_stickers_dimensions_warning:
			"10,414 cm x 9,2202 cm (4,1 in x 3,63 in)",
		common_stickers_dimensions_what_if:
			"21,7932 cm x 7,62 cm (8,58 in x 3 in)",
		common_sticker_files_mission_5: "cela iphakethe",
		common_site_tagline: "Imfundo ye-Bitcoin yawo wonke umuntu.",
		common_source_btc_map:
			"BTC Map — Uhlu lomhlaba wonke lwabathengisi abamukela i-Bitcoin",
		common_source_btcpayserver:
			"BTCPay Server — Umcubunguli wezinkokhelo ze-Bitcoin wamahhala, ovulekile, ozigcinayo",
		common_source_oshi:
			"Oshi — Indawo yokuhlanganisa imivuzo ye-Bitcoin yabathengisi",
		common_source_strike_business:
			"Strike — Izinkokhelo ze-Bitcoin & Lightning zamabhizinisi",
		common_sources_group_bitcoin: "Idatha ye-Bitcoin",
		common_sources_group_cpi: "Inkomba yenfleshini / Inkomba yamanani omthengi",
		common_sources_group_debt: "Isikweletu sikahulumeni",
		common_sources_group_money: "Idatha yokukhiqizwa kwemali",
		common_sources_group_stories: "Izibonelo zomhlaba wangempela",
		common_sticker_files_mission_6: "lezitika zesiNgisi mahhala.",
		common_sticker_files_next_flyers_label: "Amaphephandaba",
		common_sticker_files_next_flyers_title: "Phrinta iphephandaba le-Bitcoin",
		common_sticker_files_next_languages_label: "Amafayela ezitika",
		common_sticker_files_next_languages_title:
			"Bona amafayela ezitika ngezinye izilimi",
		common_sticker_files_print_these: "PHRINTA LEZI NGOKUCHOFOZA OKUKODWA",
		common_sticker_name_bdhi_black:
			"Isitika esithi “Bitcoin Doesn't Have Inflation” (Esimnyama)",
		common_sticker_name_bdhi_orange:
			"Isitika esithi “Bitcoin Doesn't Have Inflation” (Esi-Orange)",
		common_sticker_name_caution:
			"Isitika se-Bitcoin esithi “Caution! Melting Ice Cube”",
		common_sticker_name_cure_inflation:
			"Isitika se-Bitcoin esithi “Cure Inflation”",
		common_sticker_name_danger:
			"Isitika se-Bitcoin esithi “Danger! Inflation Ahead”",
		common_sticker_name_fix:
			"Isitika se-Bitcoin esithi “Fix The Money, Fix The World”",
		common_sticker_name_got_inflation:
			"Isitika se-Bitcoin esithi “Got Inflation?”",
		common_sticker_name_study:
			"Isitika se-Bitcoin esithi “Study Bitcoin”",
		common_sticker_name_warning:
			"Isitika se-Bitcoin esithi “Warning! Inflation is Stealing Your Savings”",
		common_sticker_name_what_if:
			"Isitika se-Bitcoin esithi “What if your money didn't have inflation?”",
		common_sticker_tips_heading: "Amathiphu ezitika",
		common_sticker_tips_intro:
			"Lapho usuziphrinte izitika zakho, zifake endaweni lapho zizobonwa khona! Izindawo ezinhle zezitika yilezi:",
		common_sticker_tips_list_1: "endaweni yomphakathi lapho abantu bezozibona khona",
		common_sticker_tips_list_2:
			"ezindaweni okungenakwenzeka ukususwa ngokushesha (izitika azidali umonakalo ohlala unjalo)",
		common_sticker_tips_list_3:
			"emithanjeni okuzonamathela kuyo kalula (insimbi, iplastiki, ingilazi)",
		common_sticker_tips_list_4:
			"AKWAZI empahleni yangasese, kumboze izimpawu, ama-ATM, noma izimpompi zikaphethiloli",
		common_stickers_printer_prefix: "Sisebenzisa",
		common_stickers_printer_suffix: "kodwa ungasebenzisa noma yiyiphi inkampani yezitika.",
	},

	"compound-inflation-calculator": {
		sources_fred_cpi_urban:
			"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
		sources_fred_m1: "Federal Reserve Economic Data (FRED) — M1 Money Supply",
		cic_calculator_heading: "Bala igebe lakho lenfleshini",
		cic_cta_label: "Isinyathelo esilandelayo",
		cic_hero_subtitle:
			"Bona ukuthi umholo wakho udinga ukukhula ngakanani ukuze uhambisane nenfleshini.",
		cic_next_explore_topics: "Hlola ezinye izindikimba",
		cic_next_explore_topics_desc:
			"Bona indlela i-Bitcoin exhumeka ngayo nemali, inkululeko, amandla, nokunye.",
		cic_next_learn_inflation: "Funda indlela inkomba yenfleshini esebenza ngayo",
	},

	"lightning": {
		sources_lightning_paper:
			"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
		lightning_s1_c4: "Bheka",
		lightning_grid_heading: "Izikhwama ze-Lightning ezidumile",
		lightning_hardware_cta_label: "Izikhwama zehadiwe",
		lightning_header_subtitle:
			"I-Lightning ikuvumela ukuthumela i-Bitcoin ngemizuzwana ngengxenye yesenti — khetha isikhwama esinokushintshana okufanele inani le-Bitcoin ohlela ukuyichitha.",
		lightning_s1_c4_end: "ukuze uthole olunye ulwazi.",
		lightning_s1_c4_link: "Umhlahlandlela Wesikhwama Sehadiwe se-Bitcoin",
		sources_acinq_phoenix: "ACINQ — Phoenix Lightning wallet",
		sources_breez_lightning: "Breez — Self-custodial Lightning wallet",
		sources_lightning_labs: "Lightning Labs — Lightning Network documentation",
		sources_wallet_of_satoshi: "Wallet of Satoshi — Custodial Lightning wallet",
	},

	"nostr/index": {
		nostr_amethyst_name: "Amethyst",
		nostr_damus_name: "Damus",
		nostr_iris_name: "Iris",
		nostr_platform_android: "i-Android",
		nostr_platform_ios: "i-iPhone",
		nostr_platform_ios_android_web: "i-iPhone, i-Android & iwebhu",
		nostr_platform_web: "Isiphequluli sewebhu",
		nostr_primal_name: "Primal",
		nostr_page_description:
			"I-Nostr iyiphrothokholi entsha eyahlukanisiwe yokuxhumana online — ayikho inkampani eyodwa eyilawulayo, ama-zaps e-Bitcoin akhelwe ngaphakathi ngokwemvelo, futhi ungashintsha phakathi kwama-client ngaphandle kokulahlekelwa abalandeli.",
		nostr_amethyst_f1: "Izici eziningi nokulungisa",
		nostr_amethyst_f2: "Idinga isikhwama se-Bitcoin esihlukile",
		nostr_amethyst_f3: "Mahhala ngo-100%",
		nostr_damus_f1: "Isimo esijwayelekile esifana ne-Twitter",
		nostr_damus_f2: "Idinga isikhwama se-Bitcoin esihlukile",
		nostr_damus_f3: "Mahhala ngo-100%",
		nostr_download_heading: "Landa i-Nostr client yamahhala",
		nostr_download_intro:
			"Ama-Nostr client azinhlelo zokusebenza zamahhala ezikuvumela ukufunda nokuposa ku-Nostr network. Wonke ayasebenzelana — ungashintsha ama-client nganoma yisiphi isikhathi futhi ugcine abalandeli bakho nokuqukethwe.",
		nostr_hero_subtitle:
			"I-Nostr iyiphrothokholi entsha eyahlukanisiwe yokuxhumana online — ayikho inkampani eyodwa eyilawulayo, ama-zaps e-Bitcoin akhelwe ngaphakathi, futhi ungashintsha phakathi kwezinhlelo zokusebenza ngaphandle kokulahlekelwa abalandeli bakho.",
		nostr_hero_title: "Yini i-Nostr?",
		nostr_intro_c1:
			"I-Nostr ifana ne-imeyili: akekho onomthetho woMthethosivivinywayo, noma ubani angakha uhlelo lokusebenza kuwo, futhi ungakhetha noma yiluphi uhlelo lokusebenza oluthandayo. Ngokungafani ne-Twitter noma i-Facebook, ayikho inkampani esiyinhloko engakuvalela, ikususe enkundleni, noma ikunciphise.",
		nostr_intro_c2:
			"Ngezansi kunenguqulo emfushane yokuthi kungani i-Nostr ibalulekile — bese kuba yi-Nostr client yamahhala ngayinye oyidingayo ukuze uqale namuhla.",
		nostr_iris_f1: "Lula kakhulu — akudingeki ukufaka",
		nostr_iris_f2:
			"Indlela elula yokuzama i-Nostr nge-akhawunti yesivivinyo",
		nostr_iris_f3: "Mahhala ngo-100%",
		nostr_learn_more_label: "QHUBEKA UJULE",
		nostr_learn_more_title: "Funda kabanzi nge-Nostr ku-nostr.how",
		nostr_primal_f1: "I-client yokuqala enconywayo",
		nostr_primal_f2: "Isikhwama se-Bitcoin zap sakhelwe ngaphakathi",
		nostr_primal_f3: "Mahhala ngo-100%",
		nostr_s1: "Iphrothokholi, hhayi inkundla",
		nostr_s1_c1:
			"I-Nostr iyiphrothokholi entsha ekuvumela ukuxhumana online ngaphandle kokwesaba ukuvinjelwa, ukukhishwa enkundleni, noma ukunciphisa.",
		nostr_s1_c2:
			"Izinkundla ezifana ne-Twitter ne-Facebook zilawulwa inkampani eyodwa, kodwa akekho olawula iphrothokholi ye-Nostr.",
		nostr_s2: "Inkululeko yokuhamba",
		nostr_s2_c1:
			"I-Nostr ifana ne-imeyili. Akekho olawula iphrothokholi ye-imeyili, futhi noma ubani angakha i-client (efana ne-Gmail, Hotmail, njll.) phezu kwayo.",
		nostr_s2_c2:
			"Akekho olawula iphrothokholi ye-Nostr nayo, futhi noma ubani angakha i-client (efana ne-Damus, Amethyst, njll.) phezu kwayo.",
		nostr_s2_c3:
			"Uma ungayithandi indlela esebenza ngayo i-client ethile, ungahambisa ngokugeleza i-akhawunti yakho ye-Nostr ku-client enye ngaphandle kokulahlekelwa abalandeli noma okuqukethwe.",
		nostr_s3: "I-Bitcoin yakhelwe ngaphakathi",
		nostr_s3_c1:
			"I-Bitcoin yakhelwe ngaphakathi ngokwemvelo kuphrothokholi ye-Nostr. Uma ubona okuqukethwe okuthandayo, ungatshi i-Bitcoin kalula kothile njengokubonga!",
		nostr_s3_c2:
			"Ezinkundleni ezigcizelelwe ngalinye njenge-Twitter ne-Facebook, inkampani egcizelelwe ithola imali kokuqukethwe kwakho. Kodwa kuziphrothokholi ezivulekile ezifana ne-Nostr, uthola imali kokuqukethwe kwakho.",
		sources_damus: "Damus — i-iPhone Nostr client",
		sources_iris: "Iris — i-Nostr client esuselwe esipheqululini",
		sources_nostr_how: "nostr.how — Yini i-Nostr?",
		sources_nostr_protocol: "Nostr Protocol — Inkomba evulekile",
		sources_primal:
			"Primal — i-Nostr client enesikhwama esakhelwe ngaphakathi se-Bitcoin zap",
		what_is_nostr: "Yini i-Nostr?",
	},

	"sticker-files/index": {
		sticker_files_header:
			"Phrinta izitika zakho ze-Bitcoin ngalawa mafayela ezitika ze-Bitcoin.",
	},

	"wallets": {
		sources_bitcoin_org_choose: "Bitcoin.org — Choose Your Wallet",
		sources_jameson_lopp: "Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
		wallets_lightning_cta_label: "Lightning Network",
		sources_blockstream_green:
			"Blockstream Green — Self-custody Bitcoin wallet",
		sources_blockstream_jade: "Blockstream Jade — Bitcoin hardware wallet",
		sources_coldcard_mk5: "Coinkite — Coldcard MK5 hardware wallet",
		sources_coldcard_q: "Coinkite — Coldcard Q hardware wallet",
		sources_passport: "Foundation Devices — Passport hardware wallet",
		sources_seedsigner: "SeedSigner — Open-source DIY Bitcoin signing device",
		wallets_grid_heading: "Izikhwama ze-Bitcoin ezidumile",
		wallets_header_subtitle:
			"Umhlahlandlela wesinyathelo nesinyathelo wokukhetha isikhwama, ukuvikela okhiye bakho, nokuthatha ukulawula okuphelele kwe-Bitcoin yakho.",
	},
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

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
		// not handled by this script
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (zu): filled ${filled}, already-done ${skipped}`,
	);
}

main();
