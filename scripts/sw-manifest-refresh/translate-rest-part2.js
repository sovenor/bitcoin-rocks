#!/usr/bin/env node
/**
 * Swahili manifest refresh — part 2: completes everything remaining
 * after part1: business/* namespaces, nostr/index, plus the longer
 * descriptive entries for about/bank-runs/get-involved/buy/lightning/
 * wallets/stickers/sticker-success/sticker-language-success/flyers/
 * compound-inflation-calculator/common, and the partial fragments for
 * the bitcoin-vs-* comparison pages.
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
	"sw.json",
);

const HERO_TITLE = (asset) =>
	`Tofauti kati ya <span class="orange">Bitcoin</span> na <span class="asset">${asset}</span>`;

const T = {
	/* ─── Comparison page hero titles ─── */
	"bitcoin-vs-banks::hero_title": HERO_TITLE("Benki"),
	"bitcoin-vs-bonds::hero_title": HERO_TITLE("Dhamana"),
	"bitcoin-vs-cash::hero_title": HERO_TITLE("Fedha taslimu"),
	"bitcoin-vs-cbdc::hero_title": HERO_TITLE("CBDCs"),
	"bitcoin-vs-crypto::hero_title": HERO_TITLE("Crypto"),
	"bitcoin-vs-fine-art::hero_title": HERO_TITLE("Sanaa Nzuri"),
	"bitcoin-vs-gold::hero_title": HERO_TITLE("Dhahabu"),
	"bitcoin-vs-real-estate::hero_title": HERO_TITLE("Mali Isiyohamishika"),
	"bitcoin-vs-stocks::hero_title": HERO_TITLE("Hisa"),
	"bitcoin-vs-visa::hero_title": HERO_TITLE("Visa"),

	/* ─── Comparison fragment leftovers ─── */
	"bitcoin-vs-gold::point_3_summary_2": "mfumuko wa bei",
	"bitcoin-vs-gold::point_3_summary_3": "— lakini bado mfumuko wa bei.",
	"bitcoin-vs-stocks::point_2_summary_2": "mfumuko wa bei",
	"bitcoin-vs-stocks::point_2_summary_3":
		" hupunguza thamani ya pesa. Na Bitcoin, sehemu yako kamwe haipungui.",
	"bitcoin-vs-stocks::point_6_summary_2": "uhifadhi wa kibinafsi",
	"bitcoin-vs-stocks::point_6_summary_3":
		"wa Bitcoin kwa programu rahisi — hakuna broker anayehitajika. Hisa zinakaa na mawakala wa madalali, ukiweka hatari ya mhusika mwingine kama wakishindwa.",
	"bitcoin-vs-visa::point_2_summary_2": "malipo ya Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " badala yake.",
	"bitcoin-vs-visa::point_6_summary_2": "uhifadhi wa kibinafsi",
	"bitcoin-vs-visa::point_6_summary_3":
		"bila benki au mchakataji wa malipo unaohitajika. Kadi za mkopo daima zinahitaji wasuluhishi.",
	"bitcoin-vs-bonds::point_6_summary_3": " — kuondoa hatari hiyo kabisa.",
	"bitcoin-vs-cbdc::point_9_summary_3": " wakati pesa nyingi sana zinapochapishwa.",

	/* ─── 404 / about ─── */
	"404_not_found_short": "Haijapatikana",
	about_business_blurb:
		"Tunatoa nyenzo za bure za biashara zinazorahisisha kuwapeleka wafanyabiashara wa ndani kukubali Bitcoin. Ukurasa wetu wa biashara ya Bitcoin unaeleza kwa nini Bitcoin ni nzuri kwa biashara, jinsi ya kuchagua pochi na mfumo wa malipo, na kutoa stika za bure za 'Bitcoin Inakubaliwa Hapa'.",
	about_card_business_label: "Nyenzo za biashara",
	about_card_business_source: "Chanzo: bitcoin.rocks →",
	about_card_business_title:
		"Kila kitu biashara inachohitaji kuanza kukubali malipo ya Bitcoin",
	about_card_contact_github_source: "Chanzo: GitHub →",
	about_card_contribute_label: "Changia",
	about_card_contribute_source: "Chanzo: GitHub →",
	about_card_contribute_title: "Jifunze jinsi ya kuchangia bitcoin.rocks",
	about_card_email_label: "Barua pepe",
	about_card_email_source: "Chanzo: barua pepe →",
	about_card_flyers_label: "Vipeperushi vya kuchapishika",
	about_card_flyers_source: "Chanzo: bitcoin.rocks →",
	about_card_flyers_title:
		"Pakua na uchapishe vipeperushi vya Bitcoin kwa jamii yako",
	about_card_github_label: "Hifadhi",
	about_card_github_source: "Chanzo: GitHub →",
	about_card_github_title: "Tazama bitcoin.rocks kwenye GitHub",
	about_card_nostr_source: "Chanzo: Nostr →",
	about_card_stickers_label: "Stika za bure",
	about_card_stickers_source: "Chanzo: bitcoin.rocks →",
	about_card_stickers_title: "Pata stika za bure za Bitcoin zilizotumwa hadi mlangoni kwako",
	about_flyers_blurb:
		"Tunabuni vipeperushi vya kuchapishika unavyoweza kugawa kwenye mikutano, kubandika kwenye mbao za jamii, au kuingiza kwenye masanduku ya barua — njia rahisi ya kuamsha udadisi na kupeleka watu kwa bitcoin.rocks ili kujifunza zaidi.",
	about_mission_1a: "bitcoin.rocks ilianzishwa na",
	about_mission_1b:
		"mwaka 2022 ikiwa na lengo rahisi: kuharakisha kupitishwa kwa Bitcoin kupitia elimu.",
	about_stickers_blurb:
		"Tunatuma stika za bure za Bitcoin hadi mlangoni kwako ili uweze kusaidia kueneza ufahamu wa Bitcoin katika jamii yako. Mamia ya watu hupiga skana misimbo ya QR kwenye stika hizi kila mwezi ili kujifunza kuhusu Bitcoin.",

	/* ─── bank-runs ─── */
	bank_runs_bitcoin_heading: "Bitcoin haina mikimbilio ya benki",
	bank_runs_bitcoin_p1:
		"Bitcoin ni mfumo wa hifadhi kamili. Huweki pesa zako benki. Wewe ndiwe benki yako. Hakuna mtu anayeweza kuazima pesa zako bila ufahamu wako kwa sababu wewe pekee ndiwe unayeweza kuzifikia.",
	bank_runs_bitcoin_p2:
		"Mradi unashikilia bitcoin katika pochi yako mwenyewe — sio kwenye soko la kubadilisha au iliyozingirwa katika ETF — mikimbilio ya benki haiwezekani.",
	bank_runs_bitcoin_p3: "Na Bitcoin, una udhibiti kamili wa pesa zako.",
	bank_runs_card_bank_reserve_detail:
		"Tangu Machi 26, 2020, benki za Marekani hazihitaji kushikilia kiasi chochote katika hifadhi.",
	bank_runs_card_bank_reserve_label: "Uwiano wa hifadhi ya benki",
	bank_runs_card_bank_reserve_source: "Chanzo: Federal Reserve →",
	bank_runs_card_btc_fdic_detail:
		"Mfumo wa hifadhi kamili — bima ya amana haihitajiki.",
	bank_runs_card_btc_fdic_label: "Ufunikaji wa Bitcoin",
	bank_runs_card_btc_fdic_source: "Chanzo: Bitcoin whitepaper →",
	bank_runs_card_btc_reserve_detail:
		"Kila bitcoin ipo on-chain — hakuna inayoazimwa.",
	bank_runs_card_btc_reserve_label: "Uwiano wa hifadhi ya Bitcoin",
	bank_runs_card_btc_reserve_source: "Chanzo: Bitcoin whitepaper →",
	bank_runs_card_fdic_detail:
		"Hazina ya bima ya $153.9B dhidi ya $10.82T katika amana zilizo na bima (Des 2025).",
	bank_runs_card_fdic_label: "Ufunikaji wa FDIC",
	bank_runs_card_fdic_source: "Chanzo: FDIC Statistics at a Glance →",
	bank_runs_card_svb_label: "Uchunguzi wa kesi",
	bank_runs_card_svb_source:
		"Chanzo: University of Washington School of Law →",
	bank_runs_card_svb_title:
		"Jifunze jinsi mkimbilio wa Silicon Valley Bank ulivyotokea",
	bank_runs_card_wallet_label: "Hatua inayofuata",
	bank_runs_card_wallet_source: "Anza hapa →",
	bank_runs_card_wallet_title:
		"Jifunze jinsi ya kupata pochi yako mwenyewe ya Bitcoin",
	bank_runs_fdic_heading: "Bima ya FDIC inafunika takriban 1% ya amana",
	bank_runs_fdic_p1:
		"Bima ya FDIC inalinda amana hadi $250,000 kwa kila mwekezaji. Lakini hazina ya bima ni ndogo sana ikilinganishwa na jumla ya amana inazopaswa kulinda.",
	bank_runs_fdic_p2_a:
		"Katika mkimbilio mkubwa wa benki, serikali pengine ingechapisha pesa kufunika pengo — na kusababisha",
	bank_runs_fdic_p2_link: "mfumuko wa bei.",
	bank_runs_page_description:
		"Benki zinaazima amana zako chini ya benki ya hifadhi ya sehemu. Watu wengi wakijaribu kutoa kwa wakati mmoja, benki zinaweza kushindwa. Bitcoin ni mfumo wa hifadhi kamili — mikimbilio ya benki haiwezekani.",
	bank_runs_svb_heading: "Silicon Valley Bank: mfano halisi",
	bank_runs_svb_p1_a:
		"Mwezi Machi 2023, Silicon Valley Bank ilishindwa baada ya kuwekeza amana za wateja katika",
	bank_runs_svb_p1_b:
		"za muda mrefu. Wakati dhamana hizo zilipopoteza thamani, SVB haikuweza kufunika utoaji. Benki ilikuwa imefilisika.",
	bank_runs_svb_p1_link: "dhamana za serikali.",
	bank_runs_svb_p2:
		"Maelfu ya biashara hawakuweza kulipa wafanyakazi wao. FDIC iliingilia kati — lakini hilo lilizua swali kubwa: je, pesa zako kweli ziko salama?",
	bank_runs_what_p1:
		"Benki haziweki amana zako kwenye chumba cha kuhifadhia. Zinaazima pesa zako na kuziwekeza — hiyo huitwa benki ya hifadhi ya sehemu.",
	bank_runs_what_p2:
		"Watu wengi wakijaribu kutoa kwa wakati mmoja, benki haina pesa za kutosha kulipa kila mtu. Huo ni mkimbilio wa benki — na unaweza kuziangamiza kabisa benki.",

	/* ─── buy ─── */
	buy_bitcoin_guide: "Jinsi ya kununua Bitcoin",
	buy_step_1_header: "Chagua nchi yako",
	buy_step_2_header: "Chagua njia yako ya malipo",
	buy_step_3_header: "Chaguo lako la kununua",
	buy_step_4_header: "Hifadhi Bitcoin yako kwa usalama",
	buy_header_subtitle:
		"Mwongozo rahisi, hatua kwa hatua, wa kununua Bitcoin yako ya kwanza.",
	buy_howto_name: "Jinsi ya kununua Bitcoin",
	buy_meta_description:
		"Jifunze jinsi ya kununua Bitcoin kwa usalama kwa mwongozo wetu wa hatua kwa hatua. Chagua nchi yako na njia yako ya malipo ili kupata chaguo bora la kununua Bitcoin.",
	buy_step_1_eyebrow: "Hatua ya 1",
	buy_step_2_eyebrow: "Hatua ya 2",
	buy_step_3_eyebrow: "Hatua ya 3",
	buy_step_4_eyebrow: "Hatua ya 4",
	buy_storage_cta_label: "Hatua inayofuata",
	sources_bisq: "Bisq — Soko lililogatuliwa la kubadilishana Bitcoin la rika kwa rika",
	sources_coinatmradar: "Coin ATM Radar — Orodha ya kimataifa ya ATM za Bitcoin",
	sources_kraken: "Kraken — Soko la zamani la kubadilishana Bitcoin",
	sources_relai: "Relai — Programu ya Bitcoin pekee ya uhifadhi wa kibinafsi ya Uswisi",
	sources_river: "River — Ununuzi, uchimbaji, na uhifadhi wa Bitcoin pekee",
	sources_strike_lightning:
		"Strike — Nunua Bitcoin kwa msaada wa Lightning Network",
	sources_swan:
		"Swan Bitcoin — Wastani wa gharama kwa dola wa Bitcoin pekee",

	/* ─── common ─── */
	common_site_tagline: "Elimu ya Bitcoin kwa kila mtu.",
	common_source_btc_map:
		"BTC Map — Orodha ya kimataifa ya wafanyabiashara wanaokubali Bitcoin",
	common_source_btcpayserver:
		"BTCPay Server — Mchakataji wa malipo wa Bitcoin wa bure, chanzo huria, ulioko mwenyewe",
	common_source_oshi: "Oshi — Jukwaa la zawadi za Bitcoin kwa wafanyabiashara",
	common_source_strike_business:
		"Strike — Malipo ya Bitcoin na Lightning kwa biashara",
	common_sources_group_bitcoin: "Data ya Bitcoin",
	common_sources_group_cpi: "Mfumuko wa bei / Faharasa ya Bei za Watumiaji",
	common_sources_group_debt: "Deni la serikali",
	common_sources_group_money: "Data ya ugavi wa pesa",
	common_sources_group_stories: "Mifano halisi ya ulimwengu",
	common_sticker_files_mission_5: "omba pakiti",
	common_sticker_files_mission_6: "ya stika za Kiingereza bila malipo.",
	common_sticker_files_next_flyers_label: "Vipeperushi",
	common_sticker_files_next_flyers_title: "Chapisha kipeperushi cha Bitcoin",
	common_sticker_files_next_languages_label: "Faili za stika",
	common_sticker_files_next_languages_title:
		"Tazama faili za stika katika lugha nyingine",
	common_sticker_files_print_these: "CHAPISHA HIZI KWA BONYEZA MOJA",
	common_sticker_name_bdhi_black:
		"Stika ya \"Bitcoin Doesn't Have Inflation\" (Nyeusi)",
	common_sticker_name_bdhi_orange:
		"Stika ya \"Bitcoin Doesn't Have Inflation\" (Rangi ya machungwa)",
	common_sticker_name_caution:
		"Stika ya Bitcoin ya \"Caution! Melting Ice Cube\"",
	common_sticker_name_cure_inflation:
		"Stika ya Bitcoin ya \"Cure Inflation\"",
	common_sticker_name_danger:
		"Stika ya Bitcoin ya \"Danger! Inflation Ahead\"",
	common_sticker_name_fix:
		"Stika ya Bitcoin ya \"Fix The Money, Fix The World\"",
	common_sticker_name_got_inflation: "Stika ya Bitcoin ya \"Got Inflation?\"",
	common_sticker_name_study: "Stika ya \"Study Bitcoin\"",
	common_sticker_name_warning:
		"Stika ya Bitcoin ya \"Warning! Inflation is Stealing Your Savings\"",
	common_sticker_name_what_if:
		"Stika ya Bitcoin ya \"What if your money didn't have inflation?\"",
	common_sticker_tips_heading: "Vidokezo vya stika",
	common_sticker_tips_intro:
		"Mara baada ya kuchapisha stika zako, ziweke mahali zitakapoonekana! Maeneo mazuri ya stika ni:",
	common_sticker_tips_list_1: "hadharani ambapo watu watazione",
	common_sticker_tips_list_2:
		"katika maeneo yasiyowezekana kuondolewa haraka (stika hazisababishi uharibifu wa kudumu)",
	common_sticker_tips_list_3:
		"kwenye nyuso ambazo zitashika kwa urahisi (chuma, plastiki, kioo)",
	common_sticker_tips_list_4:
		"SIO kwenye mali ya kibinafsi, kufunika alama, ATM, au pampu za mafuta",
	common_stickers_printer_prefix: "Tunatumia",
	common_stickers_printer_suffix:
		"lakini unaweza kutumia kampuni yoyote ya stika.",

	/* ─── compound-inflation-calculator ─── */
	cic_calculator_heading: "Kokotoa pengo lako la mfumuko wa bei",
	cic_cta_label: "Hatua inayofuata",
	cic_hero_subtitle:
		"Ona kiasi gani mshahara wako unahitaji kuongezeka ili kuendana na mfumuko wa bei.",
	cic_next_explore_topics: "Chunguza mada zaidi",
	cic_next_explore_topics_desc:
		"Ona jinsi Bitcoin inavyounganisha na pesa, uhuru, nishati, na zaidi.",
	cic_next_learn_inflation: "Jifunze jinsi mfumuko wa bei unavyofanya kazi",

	/* ─── flyers ─── */
	flyers_hero_subtitle:
		"Vipeperushi vya Bitcoin vya bure, vya kuchapishika. Viweke hadharani kusaidia watu zaidi kujifunza kuhusu Bitcoin.",
	flyers_hero_title: "Chapisha na bandika vipeperushi vya Bitcoin",
	flyers_next_get_stickers: "Eneza neno",
	flyers_next_get_stickers_desc: "Omba pakiti ya bure ya stika za Bitcoin",
	flyers_intro_header:
		"Jinsi ya kuchapisha na kubandika vipeperushi hivi vya Bitcoin",

	/* ─── get-involved ─── */
	get_involved_biz_stickers_note:
		"Tayari unakubali Bitcoin? Wajulishe wateja kwa stika zetu za bure za 'Bitcoin Inakubaliwa Hapa'. Tutatuma pakiti kwa anwani yoyote nchini Marekani au Kanada, au unaweza kuchapisha zako popote duniani.",
	get_involved_card_biz_stickers_label: "Stika za inakubaliwa hapa",
	get_involved_card_biz_stickers_source: "Chanzo: bitcoin.rocks →",
	get_involved_card_biz_stickers_title:
		"Stika za bure za 'Bitcoin Inakubaliwa Hapa' kwa biashara yako",
	get_involved_card_business_label: "Bitcoin kwa biashara",
	get_involved_card_business_source: "Chanzo: bitcoin.rocks →",
	get_involved_card_business_title:
		"Kila kitu biashara inachohitaji kuanza kukubali malipo ya Bitcoin",
	get_involved_card_flyers_label: "Vipeperushi vya kuchapishika",
	get_involved_card_flyers_source: "Chanzo: bitcoin.rocks →",
	get_involved_card_flyers_title:
		"Pakua na uchapishe kipeperushi cha bure cha Bitcoin",
	get_involved_card_github_label: "Chanzo huria",
	get_involved_card_github_source: "Chanzo: GitHub →",
	get_involved_card_github_title: "Changia bitcoin.rocks kwenye GitHub",
	get_involved_card_stickers_label: "Stika za bure",
	get_involved_card_stickers_source: "Chanzo: bitcoin.rocks →",
	get_involved_card_stickers_title:
		"Omba pakiti ya bure ya stika za Bitcoin itumwe mlangoni kwako",
	get_involved_flyers_content_1:
		"Vipeperushi ni mojawapo ya njia rahisi za kutambulisha Bitcoin kwa jamii yako. Pakua kipeperushi cha bure cha Bitcoin kinachoweza kuchapishwa, chapisha nakala nyingi unavyotaka, na uvibandike kwenye mbao za jamii, kwenye maduka ya kahawa, kwenye mikutano, au mahali pengine ambapo watu hukutana.",
	get_involved_flyers_content_2:
		"Kila kipeperushi kinajumuisha kichwa cha habari kinachovutia na msimbo wa QR unaowapeleka wasomaji wenye udadisi kwa bitcoin.rocks ili kujifunza zaidi.",
	get_involved_flyers_content_3:
		"Tofauti na stika, vipeperushi vinaweza kuchapishwa kwa mahitaji kutoka popote duniani — unahitaji tu printa na dakika chache.",
	get_involved_flyers_header: "Chapisha na bandika kipeperushi",
	get_involved_flyers_image_alt:
		"Hakikisho la kipeperushi cha bure cha Bitcoin kinachoweza kuchapishwa kutoka bitcoin.rocks",
	get_involved_github_content_1:
		"bitcoin.rocks ni mradi wa bure, wa chanzo huria ulio chini ya leseni ya MIT. Lengo letu ni kuharakisha kupitishwa kwa Bitcoin kupitia elimu — na hatuwezi kufanya hivyo peke yetu.",
	get_involved_github_content_2:
		"Iwe wewe ni msanidi programu, mbunifu, mwandishi, au mtafsiri, kuna njia ya kusaidia. Tunakaribisha hasa wachangiaji wanaoweza kutafsiri maudhui yetu katika lugha zaidi ili watu zaidi duniani kote waweze kujifunza kuhusu Bitcoin katika lugha yao ya asili.",
	get_involved_github_content_3:
		"Funga hifadhi, fungua pull request, peleka tatizo, au tu weka nyota mradi ili kuonyesha msaada wako. Kila mchango husaidia Bitcoin kufikia watu zaidi.",
	get_involved_github_header: "Changia kwenye GitHub",
	get_involved_sticker_image_alt:
		"Pakiti ya stika za bure za maandishi ya Bitcoin kutoka bitcoin.rocks",
	get_involved_and_help_spread_bitcoin: "Jihusishe na ueneze Bitcoin",
	get_involved_business_content_1:
		"Unataka kusaidia kujenga uchumi wa duara wa Bitcoin? Njia rahisi zaidi ni kusaidia biashara za ndani kuanza kukubali malipo ya Bitcoin.",
	get_involved_business_content_2:
		"Unajua biashara ambayo inaweza kuwa wazi kwa hilo? Mpe mmiliki",
	get_involved_business_content_3: "ukurasa wa biashara ya Bitcoin.",
	get_involved_description:
		"Nyenzo zetu za bure zinarahisisha kueneza kupitishwa kwa Bitcoin. Stika, vipeperushi, stika za 'Bitcoin Inakubaliwa Hapa' kwa biashara, na msingi wa msimbo wa chanzo huria ambao mtu yeyote anaweza kuchangia.",
	get_involved_header: "Jihusishe na ueneze Bitcoin.",
	get_involved_intro_5:
		"Unaweza kusaidia kubadilisha hilo. Tumetengeneza nyenzo kadhaa za bure ili kurahisisha kueneza tumaini ambalo Bitcoin huleta kwa walio karibu nawe.",

	/* ─── lightning ─── */
	lightning_grid_heading: "Pochi maarufu za Lightning",
	lightning_hardware_cta_label: "Pochi za vifaa",
	lightning_header_subtitle:
		"Lightning hukuruhusu kutuma Bitcoin ndani ya sekunde kwa sehemu ndogo ya senti — chagua pochi ambayo inafaa kiasi cha Bitcoin unachotaka kutumia.",
	lightning_s1_c4: "Angalia",
	lightning_s1_c4_end: "kwa maelezo zaidi.",
	lightning_s1_c4_link: "Mwongozo wetu wa Pochi za Vifaa za Bitcoin",
	sources_acinq_phoenix: "ACINQ — Pochi ya Phoenix Lightning",
	sources_breez_lightning: "Breez — Pochi ya Lightning ya kujihifadhi mwenyewe",
	sources_lightning_labs: "Lightning Labs — Hati za Lightning Network",
	sources_wallet_of_satoshi: "Wallet of Satoshi — Pochi ya Lightning ya kuhifadhiwa",

	/* ─── nostr/index — first the brand passthroughs ─── */
	nostr_amethyst_name: "Amethyst",
	nostr_damus_name: "Damus",
	nostr_iris_name: "Iris",
	nostr_platform_android: "Android",
	nostr_platform_ios: "iPhone",
	nostr_platform_ios_android_web: "iPhone, Android na wavuti",
	nostr_platform_web: "Kivinjari cha wavuti",
	nostr_primal_name: "Primal",

	nostr_amethyst_f1: "Sifa nyingi na ubinafsishaji",
	nostr_amethyst_f2: "Inahitaji pochi tofauti ya Bitcoin",
	nostr_amethyst_f3: "100% bure",
	nostr_damus_f1: "Kiolesura kinachofahamika kama cha Twitter",
	nostr_damus_f2: "Inahitaji pochi tofauti ya Bitcoin",
	nostr_damus_f3: "100% bure",
	nostr_download_heading: "Pakua mteja wa bure wa Nostr",
	nostr_download_intro:
		"Wateja wa Nostr ni programu za bure zinazokuruhusu kusoma na kuchapisha kwenye mtandao wa Nostr. Wote wanaweza kufanya kazi pamoja — unaweza kubadilisha wateja wakati wowote na kubaki na wafuasi na maudhui yako.",
	nostr_hero_subtitle:
		"Nostr ni itifaki mpya iliyogatuliwa ya kuwasiliana mtandaoni — hakuna kampuni moja inayoidhibiti, Bitcoin zaps zimejengwa ndani, na unaweza kuhama kati ya programu bila kupoteza wafuasi wako.",
	nostr_hero_title: "Nostr ni nini?",
	nostr_intro_c1:
		"Nostr ni sawa na barua pepe: hakuna mtu anayemiliki itifaki, mtu yeyote anaweza kujenga programu juu yake, na unaweza kuchagua programu yoyote unayopenda zaidi. Tofauti na Twitter au Facebook, hakuna kampuni kuu inayoweza kukuzuia, kukutoa kwenye jukwaa, au kupunguza ufikiaji wako.",
	nostr_intro_c2:
		"Hapa chini ni toleo fupi la kwa nini Nostr ni muhimu — kisha kila mteja wa bure wa Nostr unaohitaji kuanza leo.",
	nostr_iris_f1: "Rahisi sana — hakuna usakinishaji unaohitajika",
	nostr_iris_f2: "Njia rahisi ya kujaribu Nostr na akaunti ya majaribio",
	nostr_iris_f3: "100% bure",
	nostr_learn_more_label: "ENDELEA NDANI",
	nostr_learn_more_title: "Jifunze zaidi kuhusu Nostr kwenye nostr.how",
	nostr_primal_f1: "Mteja wa kwanza unaopendekezwa",
	nostr_primal_f2: "Pochi ya zap ya Bitcoin imejengwa ndani",
	nostr_primal_f3: "100% bure",
	nostr_s1: "Itifaki, sio jukwaa",
	nostr_s1_c1:
		"Nostr ni itifaki mpya inayokuruhusu kuwasiliana mtandaoni bila kuogopa udhibiti, kutolewa kwenye jukwaa, au kupunguzwa.",
	nostr_s1_c2:
		"Majukwaa kama Twitter na Facebook yanadhibitiwa na kampuni moja, lakini hakuna mtu anayedhibiti itifaki ya Nostr.",
	nostr_s2: "Uhuru wa kuhama",
	nostr_s2_c1:
		"Nostr ni sawa na barua pepe. Hakuna mtu anayedhibiti itifaki ya barua pepe, na mtu yeyote anaweza kujenga mteja (kama Gmail, Hotmail, n.k.) juu yake.",
	nostr_s2_c2:
		"Hakuna mtu anayedhibiti itifaki ya Nostr pia, na mtu yeyote anaweza kujenga mteja (kama Damus, Amethyst, n.k.) juu yake.",
	nostr_s2_c3:
		"Ikiwa hupendi jinsi mteja fulani anavyofanya kazi, unaweza kuhamishia akaunti yako ya Nostr kwa mteja mwingine bila kupoteza wafuasi au maudhui yako.",
	nostr_s3: "Bitcoin imejengwa ndani",
	nostr_s3_c1:
		"Bitcoin imejengwa ndani kwa asili katika itifaki ya Nostr. Ukiona maudhui unayopenda, unaweza kwa urahisi kumtumia Bitcoin mtu kama shukrani!",
	nostr_s3_c2:
		"Kwenye majukwaa yaliyo na umoja kama Twitter na Facebook, kampuni iliyo na umoja inapata pesa kutokana na maudhui yako. Lakini kwenye itifaki wazi kama Nostr, wewe ndiwe unayepata pesa kutokana na maudhui yako.",
	sources_damus: "Damus — Mteja wa Nostr wa iPhone",
	sources_iris: "Iris — Mteja wa Nostr wa msingi wa kivinjari",
	sources_nostr_how: "nostr.how — Nostr ni nini?",
	sources_nostr_protocol: "Nostr Protocol — Maelezo ya chanzo huria",
	sources_primal:
		"Primal — Mteja wa Nostr wenye pochi ya zap ya Bitcoin iliyojengwa ndani",
	what_is_nostr: "Nostr ni nini?",
	nostr_page_description:
		"Nostr ni itifaki mpya iliyogatuliwa ya mawasiliano mtandaoni — hakuna kampuni moja inayoidhibiti, Bitcoin zaps zimejengwa ndani kiasili, na unaweza kuhama kati ya wateja bila kupoteza wafuasi.",

	/* ─── sticker-language-success ─── */
	sticker_language_success_hero_title: "Ombi limepokelewa 🎉",

	/* ─── sticker-success ─── */
	sticker_success_btn_order_bulk: "Agiza kwa wingi",
	sticker_success_btn_share_on_nostr: "Shiriki kwenye Nostr",
	sticker_success_btn_what_is_nostr: "Nostr ni nini?",
	sticker_success_bulk_header: "Unataka stika zaidi?",
	sticker_success_hero_title: "Stika zako ziko njiani 🎉",
	sticker_success_share_header: "Shiriki maeneo ya stika zako",
	sticker_success_tips_header: "Maeneo mazuri ya stika",

	/* ─── stickers (additional) ─── */
	stickers_btn_choose_pack: "Chagua pakiti hii",
	stickers_bulk_c1: "Unataka stika zaidi ya chache?",
	stickers_bulk_c2: "Agiza kwa wingi kutoka kwa printa yule yule tunayotumia",
	stickers_bulk_c3: "— kadiri unavyonunua zaidi, ndivyo zinavyokuwa nafuu kwa kila stika.",
	stickers_bulk_cta: "Nunua stika kwa wingi",
	stickers_bulk_header: "Agiza stika kwa wingi",
	stickers_hero_subtitle:
		"Agiza pakiti ya bure ya stika za Bitcoin na uziweke hadharani ili kusaidia watu zaidi kujifunza kuhusu Bitcoin.",
	stickers_hero_title: "Stika za bure za Bitcoin",
	stickers_intro_c1:
		"Lengo letu ni kukusaidia kuwafundisha watu zaidi kuhusu Bitcoin kwa kuweka stika za Bitcoin hadharani. Stika zetu zote zina misimbo ya QR inayounganisha kwenye kurasa za elimu kuhusu",
	stickers_intro_c3: "mfumuko wa bei",
	stickers_intro_c4:
		"Chagua pakiti ya stika hapa chini na uchague unataka kuzipataje — tutatuma pakiti ya bure kwa mtu yeyote nchini Marekani au Kanada, au unaweza kuchapisha zako popote duniani.",
	stickers_mail_header: "Tutatuma stika zako za bure",
	stickers_next_print_flyers: "Endelea kueneza",
	stickers_next_print_flyers_desc:
		"Chapisha vipeperushi vya bure vya Bitcoin kuviweka hadharani",
	stickers_option_bulk: "📦 Kimataifa — Agiza kwa wingi",
	stickers_option_canada: "🇨🇦 Kanada — Bure kwa barua",
	stickers_option_print: "🌍 Kimataifa — Chapisha mwenyewe",
	stickers_option_usa: "🇺🇸 Marekani — Bure kwa barua",
	stickers_print_c1:
		"Unaweza kushiriki kwa kuchapisha stika zako mwenyewe, popote uishipo. Bonyeza lugha yako hapa chini ili kupakua faili za stika na maagizo ya kuchapisha.",
	stickers_print_c2: "Si kila stika inapatikana katika kila lugha.",
	stickers_print_header: "Chapisha faili zako mwenyewe za stika",
	stickers_request_c1:
		"Jaza fomu hapa chini ili kuomba faili za stika katika lugha yako ya ndani. Tutakujulisha mara zitakapokuwa tayari.",
	stickers_request_header: "Hauoni lugha yako?",
	stickers_share_c2: "Tufuate kwenye Nostr kwa kutafuta",
	stickers_share_c3: "katika mteja yeyote wa Nostr.",
	stickers_signs_pack_description:
		"Ishara za mtindo wa onyo, hatari, na tahadhari zenye ujumbe wa Bitcoin — zilizoundwa kuvutia umakini na kuwafanya watu wasimame na kusoma.",
	stickers_step_1_description:
		"Kila pakiti ina seti tofauti ya stika za Bitcoin zenye misimbo ya QR inayowafundisha watu kuhusu Bitcoin.",
	stickers_step_1_eyebrow: "HATUA YA 1",
	stickers_step_1_header: "Chagua pakiti yako ya stika",
	stickers_step_2_description:
		"Tutatuma pakiti ya bure kwa anwani nchini Marekani na Kanada. Popote pengine duniani, unaweza kuchapisha zako mwenyewe au kuagiza kwa wingi.",
	stickers_step_2_eyebrow: "HATUA YA 2",
	stickers_step_2_header: "Ungependa kupata stika zako vipi?",
	stickers_text_pack_description:
		"Mchanganyiko wa kauli mbiu za Bitcoin na mistari ya muhtasari iliyoundwa kuamsha udadisi katika maeneo ya umma.",
	stickers_flyers_link_before: "Wakati upo hapa, chapisha na bandika",
	stickers_instructions_1:
		"Ingiza anwani yako ya posta na tutakutumia Pakiti ya Stika ya Bitcoin ya bure kwa barua. Stika zako zitatumwa katika bahasha nyeupe ya kawaida.",

	/* ─── sticker-files/index ─── */
	sticker_files_header:
		"Chapisha stika zako mwenyewe za Bitcoin kwa kutumia faili hizi za stika za Bitcoin.",

	/* ─── wallets ─── */
	wallets_grid_heading: "Pochi maarufu za Bitcoin",
	wallets_header_subtitle:
		"Mwongozo wa hatua kwa hatua wa kuchagua pochi, kulinda funguo zako, na kuchukua udhibiti kamili wa Bitcoin yako.",
	sources_blockstream_green:
		"Blockstream Green — Pochi ya Bitcoin ya uhifadhi wa kibinafsi",
	sources_blockstream_jade: "Blockstream Jade — Pochi ya vifaa vya Bitcoin",
	sources_coldcard_mk5: "Coinkite — Pochi ya vifaa Coldcard MK5",
	sources_coldcard_q: "Coinkite — Pochi ya vifaa Coldcard Q",
	sources_passport: "Foundation Devices — Pochi ya vifaa Passport",
	sources_seedsigner:
		"SeedSigner — Kifaa cha kusaini Bitcoin cha DIY chenye chanzo huria",

	/* ─── business/accounting ─── */
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Huduma za Uhasibu za Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"Mwongozo rahisi wa kukubali Bitcoin katika vitabu vyako — pochi mseto, msingi wa gharama, faida za mtaji, na wakati wa kumwita mhasibu.",
	"business/accounting::accounting_s1_c1":
		"Njia rahisi zaidi ya kukubali Bitcoin ni kwa pochi mseto inayouza kiotomatiki 100% ya Bitcoin unayopokea kwa dola (au sarafu yako ya ndani) papo hapo malipo yanapokuja.",
	"business/accounting::accounting_s1_c2":
		"Kwa mpangilio huu, vitabu vyako vinaonekana kama vinavyofanya leo — nambari ya mwisho iko katika dola, kila wakati. Hakuna msingi wa gharama, hakuna faida za mtaji, hakuna lahajedwali mpya.",
	"business/accounting::accounting_s2":
		"Ikiwa unaweka Bitcoin fulani: kufuatilia msingi wako wa gharama",
	"business/accounting::accounting_s2_c1":
		"Baadhi ya biashara huchagua kuweka sehemu ya Bitcoin wanayopokea badala ya kuibadilisha kiotomatiki yote. Ikiwa hivyo ndivyo wewe, hatua kuu ya ziada ni kufuatilia msingi wa gharama yako — thamani ya dola ya kila malipo ya Bitcoin siku uliyopokea.",
	"business/accounting::accounting_s2_c2":
		"Hata ukifikiria biashara yako kabisa katika Bitcoin, mamlaka nyingi za kodi bado hutaka thamani ya dola iripotiwe. Habari njema: ni nambari mbili tu kwa kila muamala — kiasi cha Bitcoin kilichopokelewa na thamani yake ya dola siku hiyo.",
	"business/accounting::accounting_s2_c3":
		"Tumia zana hapa chini kuotomatisha utafutaji ili usilazimike kuangalia bei kila siku.",
	"business/accounting::accounting_s3":
		"Kutumia au kuuza Bitcoin uliyoiweka",
	"business/accounting::accounting_s3_c1":
		"Ikiwa unabadilisha kiotomatiki kila malipo kuwa dola, ruka sehemu hii — haikuhusu.",
	"business/accounting::accounting_s3_c2":
		"Ikiwa umeweka Bitcoin fulani na baadaye unaamua kuitumia au kuiuza, ongeza bei ya mauzo kwenye lahajedwali ile ile ya msingi wa gharama. Tofauti kati ya thamani ya Bitcoin uliyopokea na thamani yake unapotumia au kuiuza ni faida au hasara ya mtaji.",
	"business/accounting::accounting_s3_c3": "Mifano miwili ya haraka:",
	"business/accounting::accounting_s4": "Unahitaji mtaalamu anayejua Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Ikiwa ungependa kukabidhi hili — au uhasibu wako wa Bitcoin ni mgumu zaidi kuliko pochi mseto inavyoweza kushughulikia — tunapendekeza sana Huduma za Uhasibu za Satoshi Pacioli, kampuni ambayo hujishughulisha na uhasibu wa Bitcoin kwa biashara.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Uhasibu wa Bitcoin kwa biashara yako",
	"business/accounting::accounting_card_bpr_label": "BEI YA BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Tafuta bei ya sasa au ya kihistoria ya dola ya Bitcoin",
	"business/accounting::accounting_card_pacioli_label": "WAHASIBU WA BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label": "INGIZA KATIKA EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Vuta bei za Bitcoin kuingia Excel kiotomatiki",
	"business/accounting::accounting_card_wallets_label": "POCHI MSETO",
	"business/accounting::accounting_card_wallets_title":
		"Tazama pochi za biashara tunazopendekeza",
	"business/accounting::accounting_disclaimer":
		"Mwongozo huu ni kwa madhumuni ya habari pekee na haupaswi kuchukuliwa kama ushauri wa kodi. Kwa ushauri wa kodi maalum kwa hali yako, tafadhali shauriana na mhasibu aliyestahili.",
	"business/accounting::accounting_disclaimer_label": "Tafadhali zingatia",
	"business/accounting::accounting_example_feb_1": "Februari 1",
	"business/accounting::accounting_example_gain_badge": "Faida ya mtaji",
	"business/accounting::accounting_example_gain_explain":
		"Unarekodi faida ya mtaji ya $10.",
	"business/accounting::accounting_example_jan_1": "Januari 1",
	"business/accounting::accounting_example_loss_badge": "Hasara ya mtaji",
	"business/accounting::accounting_example_loss_explain":
		"Unarekodi hasara ya mtaji ya $10.",
	"business/accounting::accounting_example_received_label": "Imepokelewa",
	"business/accounting::accounting_example_sold_label":
		"Imeuzwa au kutumiwa",
	"business/accounting::accounting_hero_subtitle":
		"Kukubali Bitcoin katika biashara yako hakuhitaji kufanya uhasibu wako kuwa mgumu. Hapa kuna toleo fupi — pamoja na zana na wataalamu kuifanya isiyo na maumivu.",
	"business/accounting::accounting_intro_c1":
		"Ikiwa tayari unakubali fedha taslimu au kadi, kuongeza Bitcoin kwenye vitabu vyako vya biashara ni rahisi kuliko inavyoonekana. Una njia mbili: kubadilisha kiotomatiki kila malipo ya Bitcoin kuwa dola wakati yanapofika (hakuna uhasibu mpya unaohitajika), au kuweka baadhi kama Bitcoin (nambari chache za ziada za kufuatilia).",
	"business/accounting::accounting_intro_c2":
		"Mwongozo huu unakuongoza kupitia zote mbili — ili uweze kuchagua ile inayofaa biashara yako na kuanza kukubali Bitcoin kwa ujasiri.",
	"business/accounting::accounting_s1": "Njia rahisi: badilisha kiotomatiki kuwa dola",
	"business/accounting::accounting_s3_c6":
		"Ndio hivyo. Hesabu ya msingi inafanana kabisa na jinsi mali nyingine yoyote inayoongezeka au kupungua thamani inavyofanyiwa uhasibu.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bei ya sasa na ya kihistoria ya dola ya Bitcoin",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Uhasibu wa Bitcoin kwa biashara",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Ingiza bei za sarafu fiche kuingia Excel",

	/* ─── business/faq ─── */
	"business/faq::faq_hero_subtitle":
		"Majibu mafupi kwa maswali ambayo wafanyabiashara huuliza mara nyingi kabla ya kuanza kukubali Bitcoin — ada, makazi, pochi, kurudisha malipo, gharama, na zaidi.",
	"business/faq::faq_intro_c1":
		"Bonyeza swali lolote hapa chini kupanua jibu. Ukiwa tayari kuanza kukubali Bitcoin, nyenzo za biashara chini ya ukurasa zitakuongoza kupitia kila hatua.",

	/* ─── business/index ─── */
	"business/index::biz_label_accounting": "UHASIBU",
	"business/index::biz_label_faq": "MASWALI YA MARA KWA MARA",
	"business/index::biz_label_maps": "RAMANI ZA WAFANYABIASHARA",
	"business/index::biz_label_rewards": "ZAWADI",
	"business/index::biz_label_stickers": "STIKA",
	"business/index::biz_label_wallets": "POCHI",
	"business/index::biz_meta_description":
		"Kubali Bitcoin katika biashara yako kwa ada za chini, makazi ya papo hapo, hakuna kurudisha malipo, na wateja zaidi.",
	"business/index::business_hero_subtitle":
		"Kubali malipo kwa ada za chini, lipa papo hapo, na ufikie mamilioni ya wateja wapya — bila mikataba na bila gharama zilizofichwa.",
	"business/index::business_intro_c1":
		"Bitcoin huipa biashara yako njia ya haraka, ya bei nafuu, na ya faragha zaidi ya kupokea malipo. Hakuna wasuluhishi. Hakuna kurudisha malipo. Hakuna mikataba. Pesa tu zinazokaa ndani ya sekunde, moja kwa moja kutoka kwa wateja wako kwako.",
	"business/index::business_intro_c2":
		"Hapa chini ni toleo fupi la kwa nini Bitcoin ni nzuri kwa biashara — na chini yake, kila nyenzo unayohitaji kuanza kukubali leo.",
	"business/index::business_resources_heading":
		"Kila kitu unachohitaji kukubali Bitcoin",
	"business/index::business_resources_intro":
		"Pitia nyenzo hizi kwa kasi yako mwenyewe. Kila moja ni mwongozo mfupi, wa vitendo.",

	/* ─── business/maps ─── */
	"business/maps::biz_maps_form_header":
		"Tueleze kuhusu biashara yako",
	"business/maps::biz_maps_form_intro":
		"Tunahitaji maelezo machache tu ili kukuorodhesha. Data ya anwani huhifadhiwa kwa muda wa kutosha tu kuwasilisha biashara yako kwenye ramani.",
	"business/maps::biz_maps_hero_subtitle":
		"Orodhesha biashara yako bure kwenye BTC Map — orodha ya wazi, ya kimataifa ya wafanyabiashara wanaokubali Bitcoin — ili Wabitcoiners walio karibu wakupate na watumie Bitcoin kwenye biashara yako.",
	"business/maps::biz_maps_hero_title":
		"Pata biashara yako kwenye ramani za wafanyabiashara wa Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Wabitcoiners hutafuta kikamilifu mahali pa kutumia. Kupata biashara yako kwenye ramani kunakuweka mbele ya kila mtumiaji wa Bitcoin anayetafuta mahali pa kula, kununua, au kukaa karibu — bila gharama yoyote kwako.",
	"business/maps::biz_maps_intro_c2":
		"Jaza tu fomu fupi hapa chini na tutawasilisha biashara yako kwa BTC Map na ramani nyingine za wafanyabiashara wa Bitcoin kwa niaba yako.",
	"business/maps::biz_maps_meta_description":
		"Orodhesha biashara yako bure kwenye BTC Map na ramani nyingine za wafanyabiashara wa Bitcoin ili Wabitcoiners walio karibu wakupate.",
	"business/maps::biz_maps_placeholder_address": "Anwani ya barabara",
	"business/maps::biz_maps_placeholder_category":
		"Kategoria (mfano: mkahawa, kafe, hoteli)",
	"business/maps::biz_maps_placeholder_city": "Jiji",
	"business/maps::biz_maps_placeholder_country": "Nchi",
	"business/maps::biz_maps_placeholder_name": "Jina la biashara",
	"business/maps::biz_maps_placeholder_region":
		"Jimbo / Mkoa / Eneo",
	"business/maps::biz_maps_placeholder_website": "Tovuti (hiari)",
	"business/maps::biz_maps_view_map_cta": "Tazama BTC Map",

	/* ─── business/maps-success ─── */
	"business/maps-success::biz_maps_success_btn_view_map": "Tazama BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Asante kwa kuwasilisha biashara yako. Tutakuorodhesha kwenye ramani za wafanyabiashara wa Bitcoin punde.",
	"business/maps-success::biz_maps_success_hero_title": "Ombi limepokelewa 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Biashara yako itaorodheshwa kwenye BTC Map na orodha nyingine za wafanyabiashara wa Bitcoin ndani ya wiki 1 hadi 2. Tunapitia kila uwasilishaji kwa mkono ili kuweka ramani sahihi.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Mara orodha yako iko hai, Wabitcoiners walio karibu wanaweza kupata biashara yako na kuja kutumia Bitcoin huko.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Kinachofuata",
	"business/maps-success::biz_maps_success_view_c1":
		"Wakati unasubiri, angalia BTC Map ili kuona mtandao unaokua wa biashara zinazokubali Bitcoin duniani kote.",
	"business/maps-success::biz_maps_success_view_header":
		"Ona ambapo utaonekana",

	/* ─── business/sticker-files/english/index ─── */
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Pakua faili za stika za Kiingereza ili kuchapisha stika zako mwenyewe za 'Bitcoin Inakubaliwa Hapa'.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Chapisha stika zako mwenyewe za 'Bitcoin Inakubaliwa Hapa' kwa Kiingereza ili kuwajulisha wateja wako kwamba unakubali Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Pakua faili za stika za Kiingereza za 'Bitcoin Inakubaliwa Hapa'",

	/* ─── business/sticker-language-success ─── */
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Asante kwa kuomba faili za stika za 'Bitcoin Inakubaliwa Hapa' katika lugha yako.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Ombi limepokelewa 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Tutaunda na kuchapisha faili zako za stika ndani ya wiki 3 hadi 4. Mara zitakapokuwa tayari, utaweza kupakua na kuchapisha bila malipo kutoka kwenye ukurasa wetu wa faili za stika.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Faili za stika hutolewa katika makundi, kwa hivyo inaweza kuchukua wiki chache kwa lugha yako kuingia hai. Asante kwa subira yako!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Kinachofuata",

	/* ─── business/sticker-success ─── */
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Agiza kwa wingi",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Omba pakiti nyingine ya bure",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Utapokea stika zako za bure za 'Bitcoin Inakubaliwa Hapa' ndani ya wiki 2 hadi 4, katika bahasha nyeupe ya kawaida ikiwa na stika 3 ndani.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Stika zako ziko njiani 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ikiwa stika 3 hazitoshi kwa biashara yako, jisikie huru kuomba pakiti nyingine ya bure — au agiza kwa wingi kutoka kwa printa yule yule tunayotumia.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Unahitaji stika zaidi?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Kwenye mlango wako wa mbele au dirisha ili wateja waione kabla ya kuingia",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Karibu na rejista yako, kituo cha POS, au eneo la malipo",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Kwenye menyu, orodha za bei, au mitungi ya bahasha",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Usizibandike popote ambapo huimiliki au huna ruhusa ya kuziweka",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Maeneo mazuri ya kuweka stika zako",

	/* ─── business/stickers ─── */
	"business/stickers::biz_stickers_hero_subtitle":
		"Wajulishe wateja wako kwamba unakubali Bitcoin. Agiza pakiti ya bure ya stika za 'Bitcoin Inakubaliwa Hapa' za kuweka kwenye biashara yako.",
	"business/stickers::biz_stickers_hero_title":
		"Stika za bure za 'Bitcoin Inakubaliwa Hapa'",
	"business/stickers::biz_stickers_intro_c1":
		"Kukubali Bitcoin ni nusu tu ya kazi — wateja wako pia wanahitaji kujua kuwa unakubali. Stika hizi ndogo za 'Bitcoin Inakubaliwa Hapa' zimeundwa kushikamana kwenye mlango wako wa mbele, rejista, menyu, au mahali pengine ambapo wateja wataziona kabla ya kulipa.",
	"business/stickers::biz_stickers_intro_c2":
		"Tutakutumia pakiti ya bure popote nchini Marekani au Kanada, au unaweza kuchapisha zako popote duniani.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — Bure kwa barua",
	"business/stickers::biz_stickers_option_print":
		"🌍 Kimataifa — Chapisha mwenyewe",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 Marekani — Bure kwa barua",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Tafsiri ya 'Bitcoin Accepted Here'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Tafsiri ya 'Scan to learn why Bitcoin is good for business.'",
	"business/stickers::biz_stickers_print_c1":
		"Unaweza kuchapisha stika zako mwenyewe za 'Bitcoin Inakubaliwa Hapa', popote uishipo. Bonyeza lugha yako hapa chini ili kupakua faili za stika na maagizo ya kuchapisha.",
	"business/stickers::biz_stickers_print_header":
		"Chapisha faili zako mwenyewe za stika",
	"business/stickers::biz_stickers_request_c1":
		"Jaza fomu hapa chini kuomba faili za stika za 'Bitcoin Inakubaliwa Hapa' katika lugha yako ya ndani. Tutakujulisha mara zitakapokuwa tayari.",
	"business/stickers::biz_stickers_request_header": "Hauoni lugha yako?",
	"business/stickers::biz_stickers_step_description":
		"Tutatuma pakiti ya bure kwa anwani nchini Marekani na Kanada. Popote pengine duniani, unaweza kuchapisha zako mwenyewe.",
	"business/stickers::biz_stickers_step_header":
		"Ungependa kupata stika zako vipi?",

	/* ─── business/wallets ─── */
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Pochi zote za Bitcoin zinaweza kufanya kazi pamoja — chagua moja inayofaa biashara yako. Bure, makazi ya papo hapo, hakuna kurudisha malipo.",
	"business/wallets::sources_breez_business":
		"Breez — Pochi ya Lightning ya Bitcoin pekee",
	"business/wallets::sources_ibex": "IBEX — Miundombinu ya malipo ya Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — Mchakataji wa malipo wa Bitcoin",
	"business/wallets::sources_square": "Square — Kubali malipo ya Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — Ankara za Bitcoin kwa biashara",
	"business/wallets::wallets_hero_subtitle":
		"Pochi za Bitcoin ni za bure. Chagua inayofaa biashara yako — ana kwa ana, mtandaoni, au kwa msingi wa ankara — na uanze kukubali Bitcoin ndani ya dakika.",
	"business/wallets::wallets_section_invoice":
		"Pochi kwa biashara za msingi wa ankara",
	"business/wallets::wallets_section_invoice_intro":
		"Ikiwa unatuma ankara kwa wateja (ushauri, kazi za kujitegemea, huduma za B2B), tumia pochi iliyoundwa kuzunguka utengenezaji wa ankara. Mteja wako analipa ankara ya Bitcoin kwa kubonyeza mara kadhaa.",
	"business/wallets::wallets_section_multiple":
		"Pochi kwa biashara zenye wafanyakazi wengi",
	"business/wallets::wallets_section_multiple_intro":
		"Ikiwa una timu inayopokea malipo kwenye rejista, chagua pochi inayosaidia kuingia kwa wafanyakazi wengi — ili kila mfanyakazi apate PIN yake mwenyewe na uweke kumbukumbu safi ya nani alichukua malipo gani.",
	"business/wallets::wallets_section_online":
		"Pochi kwa biashara za mtandaoni",
	"business/wallets::wallets_section_online_intro":
		"Unauza kwenye tovuti? Pochi hizi zinaunganisha kwenye duka lako la mtandaoni na kukubali Bitcoin kutoka kwa mteja yeyote, popote duniani — bila kurudisha malipo, bila akaunti ya mfanyabiashara inayohitajika.",
	"business/wallets::wallets_section_sole":
		"Pochi kwa biashara zinazomilikiwa kibinafsi",
	"business/wallets::wallets_section_sole_intro":
		"Ikiwa unaendesha duka, mkahawa wa kahawa, studio, au huduma peke yako, pochi yoyote ya hizi itafanya kazi. Chagua kulingana na ikiwa unataka kuweka malipo katika Bitcoin au kubadilisha kiotomatiki sehemu ya kila malipo kuwa sarafu yako ya ndani.",
	"business/wallets::wallets_strike_note":
		"Strike Business hukuruhusu kukubali malipo ya Bitcoin na Lightning bila ada na makazi ya papo hapo. Inasaidia malipo ya ana kwa ana, mtandaoni, na ya msingi wa ankara na ubadilishaji wa hiari kuwa sarafu yako ya ndani.",

	/* ─── business/why ─── */
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin inakubaliwa hapa",
	"business/why::why_good_for_you": "Kwa nini Bitcoin ni nzuri kwako pia",
	"business/why::why_learn_more_lowercase": "Jifunze zaidi →",
	"business/why::why_s1_c1":
		"Mfumuko wa bei hutokea pesa zaidi zinapochapishwa au kuundwa kutoka mahali popote. Hilo hufanya pesa mfukoni mwako kuwa na thamani ndogo kwa muda — na ndiyo sababu bei zinaendelea kupanda mwaka baada ya mwaka.",
	"business/why::why_s1_c2":
		"Bitcoin ina ugavi uliowekwa wa sarafu milioni 21. Hakuna serikali, benki, au kampuni inayoweza kuchapisha zaidi. Akiba yako ya Bitcoin inashikilia thamani yake kwa muda badala ya kuipoteza kimya kimya.",
	"business/why::why_s2_c1":
		"Benki kadhaa za Marekani zimeanguka katika miaka ya hivi karibuni kwa sababu ya mikimbilio ya benki. Wakati wateja wengi sana walipojaribu kutoa kwa wakati mmoja, benki hazikuwa na fedha za kulipa kila mtu.",
	"business/why::why_s2_c2":
		"Badala ya kushikilia tu pesa zako, benki zinaazima na kuwekeza nyingi. Uwekezaji huo ukienda vibaya — au wenye amana wakipoteza imani — benki inaweza kushindwa, na amana zako zinaweza kufungwa au kupotea.",
	"business/why::why_s2_c3":
		"Na Bitcoin, unaweza kushikilia pesa zako mwenyewe moja kwa moja katika pochi yako mwenyewe. Hakuna benki. Hakuna msuluhishi. Hakuna mkimbilio wa benki.",
	"business/why::why_s3_c1":
		"Tofauti na kadi za mkopo, PayPal, au akaunti za kawaida za benki, Bitcoin haihitaji ruhusa ya mtu yeyote kuitumia.",
	"business/why::why_s3_c2":
		"Hakuna mtu anayeweza kugandamisha akaunti yako, kuzuia malipo, au kukukata kutoka kwenye mtandao. Ni mfumo wa kwanza wa fedha katika historia unaoweza kutumia bila woga wa udhibiti au kunyang'anywa.",
	"business/why::why_s4_c1":
		"Bitcoin mara nyingi inaeleweka vibaya, lakini inafanya kazi nzuri sana kimya kimya duniani.",
	"business/why::why_s4_c2":
		"Imewasaidia wanaharakati wa haki za binadamu kupigania uhuru, kupunguza uzalishaji wa methani duniani kutoka kwenye mashimo ya taka na maeneo ya mafuta, kuimarisha gridi za umeme, na kufadhili bidhaa za umma kama hifadhi za kitaifa.",
	"business/why::why_biz_s1": "Ada za chini, zaidi kwa biashara",
	"business/why::why_biz_s1_c1":
		"Malipo ya Bitcoin yanapita benki na kampuni za kadi za mkopo zinazochukua 2–3% kutoka kwa kila mauzo. Biashara inashikilia zaidi ya unayolipa — ambayo mara nyingi inamaanisha bei bora na huduma bora kwako.",
	"business/why::why_biz_s2": "Makazi ya papo hapo, hakuna kurudisha malipo",
	"business/why::why_biz_s2_c1":
		"Malipo ya Bitcoin yanakaa ndani ya sekunde, moja kwa moja kutoka kwa pochi yako kwa biashara. Hakuna kusubiri siku za benki kutoa fedha, na hakuna mizozo ya gharama ya kurudisha malipo — kwa hivyo biashara inaweza kuzingatia kuhudumia wateja badala ya kupambana na udanganyifu.",
	"business/why::why_biz_s3": "Bure kukubali, wazi kwa kila mtu",
	"business/why::why_biz_s3_c1":
		"Hakuna mikataba, ada za kila mwezi, au gharama za kuanzisha kwa biashara kukubali Bitcoin. Na mamilioni ya watumiaji wa Bitcoin duniani kote hutafuta kikamilifu wafanyabiashara wanaokubali — na kuipa biashara hii mfichuko wa bure kwa wateja wapya.",
	"business/why::why_business_cta_intro":
		"Unaendesha biashara na unataka kuanza kukubali Bitcoin?",
	"business/why::why_business_cta_link": "Ona jinsi inavyofanya kazi →",
	"business/why::why_for_business": "Kwa nini Bitcoin ni nzuri kwa biashara hii",
	"business/why::why_for_business_intro":
		"Kukubali Bitcoin huiruhusu biashara kushikilia zaidi ya kila mauzo, kulipa papo hapo bila kurudisha malipo, na kufikia hadhira ya kimataifa ya watumiaji wa Bitcoin — vyote bila mikataba na bila ada za kila mwezi.",
	"business/why::why_good_for_you_intro":
		"Bitcoin sio tu ina manufaa katika rejista — ni aina bora ya pesa inayolinda akiba yako, faragha yako, na uhuru wako wa kufanya muamala. Hapa kuna muhtasari mfupi.",
	"business/why::why_hero_subtitle":
		"Umepiga skana stika ya Bitcoin Inakubaliwa Hapa. Hapa kuna sababu ya hilo kuwa habari njema — kwa biashara hii, na kwako.",
	"business/why::why_intro_c1":
		"Biashara uliyo nayo inakubali Bitcoin — mtandao wa kisasa, wa chanzo huria wa malipo ambao mtu yeyote anaweza kuutumia, popote duniani, bila benki au wasuluhishi kuchukua sehemu.",
	"business/why::why_intro_c2":
		"Hapa chini ni toleo fupi la kwa nini kukubali Bitcoin ni nzuri kwa biashara hii, pamoja na kwa nini kutumia Bitcoin ni nzuri kwako kama mteja.",
	"business/why::why_next_business_label": "KUBALI BITCOIN",
	"business/why::why_next_business_title":
		"Kubali Bitcoin katika biashara yako",
	"business/why::why_next_buy_label": "NUNUA BITCOIN",
	"business/why::why_next_buy_title": "Nunua Bitcoin yako ya kwanza",
	"business/why::why_next_learn_label": "JIFUNZE ZAIDI",
	"business/why::why_next_learn_title": "Jifunze zaidi kuhusu Bitcoin",
	"business/why::why_next_wallet_label": "PATA POCHI",
	"business/why::why_next_wallet_title": "Pata pochi yako ya Bitcoin",
	"business/why::why_whats_next_heading": "Wapi inayofuata?",
	"business/why::why_whats_next_intro":
		"Ikiwa hii ni skana yako ya kwanza ya stika ya Bitcoin, hapa kuna maeneo muhimu zaidi ya kwenda kutoka hapa.",
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

		const nsKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, nsKey)) {
			e.targetTranslation = T[nsKey];
			filled++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(T, e.key)) {
			e.targetTranslation = T[e.key];
			filled++;
			continue;
		}

		unmatched.push(`${e.namespace}::${e.key}: ${JSON.stringify(e.englishValue.slice(0, 80))}`);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (sw): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
