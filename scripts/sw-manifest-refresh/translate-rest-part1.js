#!/usr/bin/env node
/**
 * Swahili manifest refresh — part 1: index, common, about, bank-runs,
 * get-involved, buy, lightning, wallets, flyers, 404,
 * compound-inflation-calculator, sticker-success, sticker-language-success,
 * sticker-files/index, all bitcoin-vs-* comparisons, and stickers.
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

// Brand-name passthroughs (keep identical to English).
const BRANDS = new Set([
	"GitHub",
	"github.com/sovenor/bitcoin-rocks",
	"hi@bitcoin.rocks",
	"Nostr",
	"sovenor",
	"Bitcoin.org — Choose Your Wallet",
	"BTC Map",
	"Anita Posch",
	"Arman The Parman",
	"Bitcoin Explorama",
	"BitcoinIs.Green",
	"Bitcoin Magazine",
	"bitcoin.rocks",
	"Blockworks",
	"CoinDesk",
	"Daniel Batten",
	"Forbes",
	"Fortune",
	"Geyser",
	"LightningAddress.com",
	"Lyn Alden",
	"MakerBits",
	"Mempool.space",
	"Misha Guttentag",
	"MIT Technology Review",
	"Quartz",
	"Saifedean Ammous",
	"Satsie",
	"Saving Satoshi",
	"Texas A&M University",
	"TIME Magazine",
	"VoteForBetter.Money",
	"Wes Lippman",
	"Yahoo Finance",
	"YouTube",
	"Bitcoin",
	"CRYPTO",
	"StickerMule.com",
	"Compound Inflation Calculator",
	"Lightning Network",
	"Bitcoin Price Report",
	"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"James Lavish — \"Can a Treasury Auction Fail?\"",
	"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
	"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"+$10",
	"+$25",
	"+$5",
	"-$10",
	"-$25",
	"-$5",
	"$0",
	"$100",
	"$1,000",
	"$10,000",
	"21,000,000",
	"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
	"1.42%",
]);

/* ─────────────── Manual translations table ─────────────── */

const T = {
	// about
	about_card_contact_github_label: "GitHub",
	about_card_contact_github_title: "github.com/sovenor/bitcoin-rocks",
	about_card_email_title: "hi@bitcoin.rocks",
	about_card_nostr_label: "Nostr",
	about_card_nostr_title: "hi@bitcoin.rocks",
	about_mission_1_sovenor: "sovenor",
	about_page_description:
		"bitcoin.rocks ni tovuti ya elimu ya Bitcoin isiyolipiwa na ya chanzo huria iliyoanzishwa mwaka 2022. Lengo letu ni kuharakisha kupitishwa kwa Bitcoin kupitia elimu.",
	about_editorial_2:
		"Tunaunganisha na vyanzo vinavyoaminiwa kama Federal Reserve (FRED), Ofisi ya Takwimu za Kazi ya Marekani, FDIC, Umoja wa Mataifa, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, na James Lavish. Tunaamini Bitcoin inajisemea yenyewe wakati ukweli unawasilishwa kwa uwazi.",
	about_header: "Kuhusu bitcoin.rocks",
	about_open_source_2:
		"bitcoin.rocks ni mradi wa bure, wa chanzo huria ulio chini ya leseni ya MIT. Mtu yeyote anaweza kuchangia bitcoin.rocks. Tunakaribisha hasa watafsiri wanaosaidia maudhui yetu kufikia watu duniani kote.",

	// bank-runs
	bank_runs_card_fdic_value: "1.42%",
	bank_runs_header: "Bitcoin haina mikimbilio ya benki, lakini benki yako inaweza kuwa nayo.",

	// common
	common_language_switcher_add_language: "Ongeza lugha",
	common_next_buy_bitcoin: "Nunua Bitcoin",
	common_next_buy_bitcoin_desc: "Jifunze jinsi ya kununua Bitcoin kwa usalama",
	common_next_calculate: "Kokotoa mfumuko wako wa bei",
	common_next_calculate_desc:
		"Ona jinsi mfumuko wa bei unavyoathiri mshahara wako kadiri muda unavyopita",
	common_next_get_wallet: "Pata pochi",
	common_next_get_wallet_desc: "Pata pochi yako ya kwanza ya Bitcoin — ni bure",
	common_next_keep_learning: "Endelea kujifunza",
	common_next_keep_learning_desc: "Ona jinsi Bitcoin inavyoboresha dunia",
	common_source_bls_cpi:
		"Ofisi ya Takwimu za Kazi ya Marekani — Faharasa ya Bei za Watumiaji (CPI)",
	common_source_fred_money_supply_index:
		"Federal Reserve Economic Data (FRED) — Ugavi wa Pesa (Faharasa ya Kategoria)",
	common_source_whitepaper:
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	common_sources_treasury_auction:
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	common_stickers_printer_name: "StickerMule.com",
	common_whats_next: "Nini kinachofuata?",

	// compound-inflation-calculator
	sources_fred_cpi_urban:
		"Federal Reserve Economic Data (FRED) — Faharasa ya Bei za Watumiaji kwa Watumiaji wote wa Mijini",
	sources_fred_m1:
		"Federal Reserve Economic Data (FRED) — Ugavi wa Pesa wa M1",

	// index — pills (lowercase, sentence-case)
	home_btn_art: "sanaa",
	home_btn_business: "biashara",
	home_btn_coding: "uandishi wa msimbo",
	home_btn_crowdfunding: "ufadhili wa umma",
	home_btn_energy: "nishati",
	home_btn_environment: "mazingira",
	home_btn_equality: "usawa",
	home_btn_food: "chakula",
	home_btn_freedom: "uhuru",
	home_btn_housing: "makazi",
	home_btn_human_rights: "haki za binadamu",
	home_btn_money: "pesa",
	home_btn_networks: "mitandao",
	home_btn_payments: "malipo",
	home_btn_politics: "siasa",
	home_btn_property_rights: "haki za mali",
	home_btn_salary: "mshahara wako",
	home_btn_saving: "akiba",
	home_btn_self_custody: "uhifadhi wa kibinafsi",
	home_btn_war: "vita",
	home_btn_you: "wewe",

	// index — card labels
	home_card_label_art_1: "Hebu tulinganishe",
	home_card_label_art_2: "Eneza neno",
	home_card_label_art_3: "Sanaa ya barabarani",
	home_card_label_bank_runs: "Mfumo wa hifadhi kamili",
	home_card_label_bonds: "Hebu tulinganishe",
	home_card_label_business_1: "Tofauti ni nini?",
	home_card_label_business_2: "Kubali malipo ya Bitcoin",
	home_card_label_cash: "Hebu tulinganishe",
	home_card_label_cbdc: "Wazi au imefungwa?",
	home_card_label_coding_1: "Mafunzo shirikishi",
	home_card_label_coding_2: "Jenga vifaa",
	home_card_label_coding_3: "Mafumbo ya msimbo",
	home_card_label_crowdfunding_1: "Maandamano ya EndSARS",
	home_card_label_crowdfunding_2: "Pesa zisizosimamishwa",
	home_card_label_crowdfunding_3: "Fadhili mradi wako",
	home_card_label_crypto: "Tofauti ni nini?",
	home_card_label_energy_1: "Uthabiti wa gridi",
	home_card_label_energy_4: "Mwitikio wa mahitaji",
	home_card_label_energy_5: "Umeme wa vijijini",
	home_card_label_energy_6: "Motisha kwa nishati endelevu",
	home_card_label_environment_1: "Kupunguza methani",
	home_card_label_environment_2: "Iliokoa hifadhi ya taifa",
	home_card_label_environment_3: "Sekta ya kijani zaidi",
	home_card_label_environment_4: "Hupunguza gesi inayowaka",
	home_card_label_equality_1: "Tumaini na fursa",
	home_card_label_equality_2: "Mabadiliko ya mchezo",
	home_card_label_food_1: "Bei za chakula",
	home_card_label_food_2: "Mashamba na udongo",
	home_card_label_freedom_1: "Tawala za kidikteta",
	home_card_label_freedom_2: "Chombo cha kipekee",
	home_card_label_get_started_1: "Misingi ya wanaoanza",
	home_card_label_get_started_2: "Pochi yako ya kwanza",
	home_card_label_get_started_3: "Nunua Bitcoin",
	home_card_label_gold: "Ipi ni bora?",
	home_card_label_housing_1: "Makazi nafuu",
	home_card_label_human_rights_1: "Utekelezaji wa haki za binadamu",
	home_card_label_human_rights_2: "Kupitishwa kwa wananchi",
	home_card_label_human_rights_3: "Athari ya kimataifa",
	home_card_label_inflation: "Bitcoin ni pesa bora",
	home_card_label_networks_1: "Mwonekano wa mtandao moja kwa moja",
	home_card_label_networks_2: "Hebu tulinganishe",
	home_card_label_payments_1: "Tofauti ni nini?",
	home_card_label_payments_2: "Malipo ya haraka na ya bei nafuu",
	home_card_label_payments_3: "Tuma fedha nyumbani",
	home_card_label_payments_4: "Pokea malipo",
	home_card_label_politics_1: "Kitendawili cha kisiasa",
	home_card_label_politics_2: "Chukua hatua",
	home_card_label_property_rights_1: "Hebu tulinganishe",
	home_card_label_property_rights_2: "Umiliki wa kweli",
	home_card_label_salary: "Linda mshahara wako",
	home_card_label_self_custody_1: "Mwongozo wa pochi ya Bitcoin",
	home_card_label_self_custody_2: "Hatua muhimu zaidi",
	home_card_label_self_custody_3: "Pesa huru",
	home_card_label_war_1: "Maliza vita visivyokoma",
	home_card_label_war_2: "Kuwasaidia maveterani",
	home_card_label_war_3: "Kutoroka wakati wa vita",

	// index — hero
	home_h1: "Bitcoin ni pesa bora ambayo inajenga dunia bora.",
	home_intro:
		"Bonyeza kategoria yoyote hapa chini ili kujifunza jinsi Bitcoin inavyoiboresha, au anza tu kusogeza ili kuchunguza.",

	// index — author names (brands)
	home_link_author_anita_posch: "Anita Posch",
	home_link_author_arman_the_parman: "Arman The Parman",
	home_link_author_bitcoin_explorama: "Bitcoin Explorama",
	home_link_author_bitcoin_is_green: "BitcoinIs.Green",
	home_link_author_bitcoin_magazine: "Bitcoin Magazine",
	home_link_author_bitcoin_rocks: "bitcoin.rocks",
	home_link_author_blockworks: "Blockworks",
	home_link_author_cic: "Compound Inflation Calculator",
	home_link_author_coindesk: "CoinDesk",
	home_link_author_daniel_batten: "Daniel Batten",
	home_link_author_forbes: "Forbes",
	home_link_author_fortune: "Fortune",
	home_link_author_geyser: "Geyser",
	home_link_author_lightning_address: "LightningAddress.com",
	home_link_author_lyn_alden: "Lyn Alden",
	home_link_author_makerbits: "MakerBits",
	home_link_author_mempool_space: "Mempool.space",
	home_link_author_misha_guttentag: "Misha Guttentag",
	home_link_author_mit_technology_review: "MIT Technology Review",
	home_link_author_quartz: "Quartz",
	home_link_author_saifedean_ammous: "Saifedean Ammous",
	home_link_author_satsie: "Satsie",
	home_link_author_saving_satoshi: "Saving Satoshi",
	home_link_author_texas_am_university: "Texas A&M University",
	home_link_author_time_magazine: "TIME Magazine",
	home_link_author_vfbm: "VoteForBetter.Money",
	home_link_author_wes_lippman: "Wes Lippman",
	home_link_author_yahoo_finance: "Yahoo Finance",
	home_link_author_youtube: "YouTube",

	// index — link titles (full sentences)
	home_link_title_art_1: "Jiunge na mpango wetu wa stika za Bitcoin",
	home_link_title_art_3: "Chapisha na bandika vipeperushi vya Bitcoin",
	home_link_title_bank_runs: "Bitcoin haina mikimbilio ya benki",
	home_link_title_bonds: "Bitcoin dhidi ya Dhamana: ulinganisho",
	home_link_title_business_1: "Jifunze kwa nini Bitcoin ni nzuri kwa biashara",
	home_link_title_business_3: "Bitcoin dhidi ya Hisa: ulinganisho",
	home_link_title_cash: "Bitcoin dhidi ya Fedha taslimu: ulinganisho",
	home_link_title_cbdc: "Bitcoin dhidi ya CBDCs: ulinganisho",
	home_link_title_coding_1:
		"Mafunzo shirikishi kuhusu upande wa kiufundi wa Bitcoin",
	home_link_title_coding_2:
		"bitcoinSwitch: rekebisha kifaa chochote ili kukubali Bitcoin",
	home_link_title_coding_3: "Andika msimbo unaopita katika mafumbo ya Bitcoin",
	home_link_title_crowdfunding_1:
		"Jinsi Bitcoin ilivyowezesha maandamano makubwa zaidi ya Nigeria katika kizazi",
	home_link_title_crowdfunding_2:
		"Maandamano ya madereva wa malori wa Kanada yanachangisha pesa kwa Bitcoin baada ya GoFundMe kuzuia michango",
	home_link_title_crowdfunding_3: "Geyser: changisha fedha kwa Bitcoin",
	home_link_title_crypto: "Bitcoin dhidi ya Crypto: ulinganisho",
	home_link_title_energy_1:
		"Jinsi Bitcoin inavyoimarisha gridi ya umeme ya Texas",
	home_link_title_energy_4:
		"Uchimbaji wa Bitcoin unaimarisha gridi za nishati kupitia mwitikio wa mahitaji",
	home_link_title_energy_5:
		"Wachimbaji wa Bitcoin wanapeleka nishati ya maji kwa jamii za vijijini Afrika",
	home_link_title_energy_6:
		"Jinsi Bitcoin inavyochochea nishati endelevu",
	home_link_title_environment_1:
		"Jinsi uchimbaji wa Bitcoin unavyopunguza utoaji wa methani duniani",
	home_link_title_environment_2:
		"Jinsi uchimbaji wa Bitcoin ulivyookoa hifadhi ya taifa",
	home_link_title_environment_3: "Bitcoin ni sekta ya kijani zaidi duniani",
	home_link_title_environment_4:
		"Uchimbaji wa Bitcoin unazuia gesi asilia inayowaka isichafue angahewa",
	home_link_title_equality_1:
		"Bitcoin inaleta tumaini na fursa kwa Waafrika Kusini",
	home_link_title_equality_2:
		"Jinsi Bitcoin inavyoweza kuwa mabadiliko makubwa kwa Waamerika Weusi",
	home_link_title_fine_art: "Bitcoin dhidi ya Sanaa Nzuri: ulinganisho",
	home_link_title_food_1:
		"Jinsi mfumuko wa bei unavyoathiri bei za chakula",
	home_link_title_food_2:
		"Jinsi pesa za fiat zinavyoharibu chakula, mashamba, na udongo wa Dunia",
	home_link_title_freedom_1: "Kwa nini Bitcoin ni muhimu kwa uhuru",
	home_link_title_freedom_2:
		"Bitcoin hutoa uhuru kutoka ukandamizaji wa kisiasa",
	home_link_title_get_started_1: "Jifunze misingi ya Bitcoin",
	home_link_title_get_started_2: "Pata pochi yako ya kwanza ya Bitcoin",
	home_link_title_get_started_3: "Jinsi ya kununua Bitcoin kwa usalama",
	home_link_title_gold: "Bitcoin dhidi ya Dhahabu: ulinganisho",
	home_link_title_housing_1:
		"Jinsi Bitcoin itakavyofanya makazi kuwa nafuu tena",
	home_link_title_human_rights_1:
		"Jinsi Bitcoin inavyotekeleza haki za binadamu",
	home_link_title_human_rights_2: "Mapinduzi kimya ya Bitcoin barani Afrika",
	home_link_title_human_rights_3:
		"Bitcoin inalinda haki za binadamu duniani kote",
	home_link_title_inflation: "Bitcoin haina mfumuko wa bei",
	home_link_title_networks_1: "Mwonekano wa moja kwa moja wa mtandao wa Bitcoin",
	home_link_title_networks_2: "Bitcoin dhidi ya Benki: ulinganisho",
	home_link_title_payments_1: "Bitcoin dhidi ya Visa: ulinganisho",
	home_link_title_payments_2:
		"Mtazamo wa Lightning Network (malipo ya papo hapo ya Bitcoin)",
	home_link_title_payments_3:
		"Pochi ya Bitcoin ya El Salvador inaweza kuokoa Wasalvado $400M kila mwaka katika ada za kutuma fedha nyumbani",
	home_link_title_payments_4:
		"Pata anwani yako ya Lightning ili kupokea malipo ya papo hapo ya Bitcoin",
	home_link_title_politics_1: "Bitcoin ni kitendawili cha kisiasa",
	home_link_title_politics_2: "Unaweza kupiga kura kwa pesa bora",
	home_link_title_property_rights_1: "Bitcoin ni aina kamili ya mali",
	home_link_title_property_rights_2:
		"Bitcoin dhidi ya Mali Isiyohamishika: ulinganisho",
	home_link_title_self_custody_1: "Jinsi ya kuhifadhi Bitcoin yako kwa usalama",
	home_link_title_self_custody_2:
		"Sababu 6 za kutoa Bitcoin yako kwenye soko la kubadilisha",
	home_link_title_self_custody_3: "Dhahabu, Bitcoin, na uhifadhi wa kibinafsi",
	home_link_title_war_1: "Jinsi Bitcoin inavyoweza kumaliza vita visivyokoma",
	home_link_title_war_2: "Bitcoin na Maveterani: mlingano wa asili",
	home_link_title_war_3:
		"Jinsi Bitcoin inavyowasaidia raia kutoroka vita nchini Sudan",
	home_link_title_your_salary_1:
		"Gundua kiasi gani mshahara wako unahitaji kuongezeka ili kuendana na mfumuko wa bei",

	// index — nav + sections
	home_nav_about: "Kuhusu",
	home_nav_get_involved: "Jihusishe",
	home_nav_learn: "Jifunze",
	home_section_bitcoin_and: "Bitcoin na",
	home_source_prefix: "Chanzo:",

	// lightning
	sources_lightning_paper:
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",

	// stickers
	stickers_intro_c2: "Bitcoin",

	// wallets
	sources_bitcoin_org_choose: "Bitcoin.org — Choose Your Wallet",
	sources_jameson_lopp: "Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	wallets_lightning_cta_label: "Lightning Network",

	// 404
	"404_home": "Rudi nyumbani",
	"404_message": "Bitcoin inafurahisha, lakini ukurasa huu uliovunjika hauna furaha.",

	// untranslated dimensions/codes
	crypto: "CRYPTO",
	common_stickers_dimensions_bdhi: "21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	common_stickers_dimensions_bitcoin_accepted_here:
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	common_stickers_dimensions_caution:
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	common_stickers_dimensions_cure_v2: "6.35 cm x 12.7 cm (2.5 in x 5 in)",
	common_stickers_dimensions_danger: "11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	common_stickers_dimensions_fix: "11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	common_stickers_dimensions_got_inflation:
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	common_stickers_dimensions_study: "14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	common_stickers_dimensions_warning:
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	common_stickers_dimensions_what_if: "21.7932 cm x 7.62 cm (8.58 in x 3 in)",

	/* ─── bitcoin-vs-banks ─── */
	"bitcoin-vs-banks::point_1_summary_1":
		"Mtu yeyote mwenye muunganisho wa intaneti anaweza kutumia Bitcoin — ni",
	"bitcoin-vs-banks::point_1_summary_2": "isiyohitaji ruhusa.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Benki zinaweza kukataa, kugandamisha, au kufunga akaunti kwa mujibu wa sera au kanuni za serikali.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Mtandao wa Bitcoin unafanya kazi 24/7/365 bila vipindi vya matengenezo wala likizo. Benki zina saa chache, hufunga wikendi, na zina vipindi vya kukatika kwa huduma.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Kila muamala wa Bitcoin upo kwenye blockchain ya umma ambayo mtu yeyote anaweza kuukagua. Benki huendesha leja za faragha ambazo wateja hawawezi kuthibitisha kwa kujitegemea.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Na Bitcoin, unashikilia funguo zako za faragha mwenyewe — angalia mwongozo wetu rahisi wa",
	"bitcoin-vs-banks::point_4_summary_2": "pochi za Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Benki zinashikilia pesa zako na zinaweza kuzigandamisha, kupunguza, au kuziwekea vikwazo wakati wowote.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Ada za Bitcoin ni wazi na zinazotabirika. Benki huongeza ada zilizofichwa za akaunti, overdraft, uhamisho wa waya, na ATM kadri muda unavyopita.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin inakuruhusu tu kutumia kile unachomiliki kwa kweli. Benki zinaruhusu overdraft, kisha hutoza ada za adhabu mfululizo kwa upendeleo huo.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Mara muamala wa Bitcoin unapotangazwa, hauwezi kusimamishwa au kurudishwa. Benki zinaweza kuzuia, kugandamisha, au kurudisha miamala kulingana na sera au amri za serikali.",

	/* ─── bitcoin-vs-bonds ─── */
	"bitcoin-vs-bonds::point_1_summary_1":
		"Dhamana ni 'zisizo na hatari' tu kwa jina — mfumuko wa bei, mabadiliko ya kiwango cha riba, na hatari ya kushindwa kulipa zote zinakula mapato halisi.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin ina mabadiliko ya bei ya wazi lakini hakuna hatari iliyofichwa ya mhusika mwingine.",
	"bitcoin-vs-bonds::point_2_summary_1": "Wakati",
	"bitcoin-vs-bonds::point_2_summary_2": "mfumuko wa bei",
	"bitcoin-vs-bonds::point_2_summary_3":
		"unapozidi mapato ya dhamana, wamiliki wa dhamana wanapoteza nguvu halisi ya kununua kila mwaka. Kikomo cha milioni 21 cha Bitcoin hakiwezi kuondolewa kwa mfumuko wa bei.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Masoko ya dhamana yanaweza kuganda wakati wa migogoro — Silicon Valley Bank ilianguka kwa sehemu kwa sababu ilikwama na dhamana zilizopoteza thamani. Ona jinsi",
	"bitcoin-vs-bonds::point_3_summary_2": "mikimbilio ya benki",
	"bitcoin-vs-bonds::point_3_summary_3":
		"inavyotokea na kwa nini Bitcoin huiepuka. Bitcoin hufanya biashara 24/7 kimataifa bila migogoro ya ukwasi.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Minada ya Hazina inaweza kushindwa wakati hakuna wanunuzi wa kutosha — angalia",
	"bitcoin-vs-bonds::point_4_summary_2": "mnada dhaifu wa 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bei ya Bitcoin hugundulika kwa kuendelea kwenye masoko ya wazi bila mnada mkuu unaoweza kushindwa.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Mapato ya dhamana yanawekwa wakati wa ununuzi. Hata kama uchumi unakua kwa kasi au sarafu inaanguka, mapato yako yanabaki sawa.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ina nafasi ya kupanda thamani kwa kiasi kikubwa kadiri kupitishwa kunavyoongezeka na mahitaji yanavyokutana na ugavi uliowekwa.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Dhamana nyingi zinashikiliwa kupitia benki au madalali, na kuongeza hatari ya mhusika mwingine. Bitcoin inaweza kuhifadhiwa kibinafsi kwa kutumia",
	"bitcoin-vs-bonds::point_6_summary_2": "pochi",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Dhamana zinategemea kabisa serikali kulipa nyuma. Serikali ikishindwa kulipa au ikiipunguza thamani ya deni lake kwa mfumuko wa bei, wamiliki wa dhamana wanapoteza.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin inafanya kazi kwa kujitegemea na serikali yoyote au mamlaka ya kisiasa.",

	/* ─── bitcoin-vs-cash ─── */
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin husafiri kupitia intaneti popote duniani ndani ya dakika. Fedha taslimu inahitaji uwepo wa kimwili au wajumbe wanaoaminiwa — huwezi kutuma noti ya $20 kwa barua pepe.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin inafanya kazi kwa njia sawa kila mahali. Fedha taslimu imezuiwa na jiografia, viwango vya ubadilishaji, na kukubalika kwa ndani.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Serikali zinaweza kuibatilisha fedha taslimu usiku mmoja — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> ilifanya hivyo mwaka 2016. Hata bila kubatilisha, fedha taslimu inapoteza thamani kwa",
	"bitcoin-vs-cash::point_3_summary_2": "mfumuko wa bei.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin haiwezi kubatilishwa na serikali au mamlaka yoyote.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Fedha taslimu inaweza kughushiwa, wakati mwingine kwa njia inayoshawishi. Bitcoin hutumia kriptografia inayofanya ughushi kuwa hauwezekani kihesabu.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin haina mamlaka kuu. Fedha taslimu hutolewa na serikali zinazoweza kuchapisha zaidi, kubadilisha miundo, au kubatilisha noti kwa hiari.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Fedha taslimu iko hatarini kwa wizi, moto, kupotea, na kunyang'anywa. Bitcoin inaweza",
	"bitcoin-vs-cash::point_6_summary_2": "kuhifadhiwa kibinafsi",
	"bitcoin-vs-cash::point_6_summary_3":
		"kwenye simu au kifaa cha vifaa.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin inagawanyika kuwa sats milioni 100, ikiruhusu malipo madogo madogo ya saizi yoyote. Fedha taslimu ina viwango vya chini — huwezi kugawa senti.",

	/* ─── bitcoin-vs-cbdc ─── */
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin ni mtandao salama zaidi wa kompyuta uliowahi kujengwa na haujawahi kudukuliwa. CBDC zinategemea benki na serikali ambazo zimedukuliwa mara nyingi.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Hakuna anayeweza kukuzuia kufanya muamala kwa Bitcoin. CBDC zimeundwa ili serikali na benki kuu ziweze kudhibiti kila malipo, kupunguza faragha na uhuru wako.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin haiishi muda kamwe na haina ada za kila mwezi. CBDC zinaweza kupangwa kuisha muda, zikikuzuia kuweka akiba kwa siku za usoni.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ina kikomo kigumu cha BTC milioni 21. CBDC hazina kikomo cha ugavi, ikiruhusu serikali kupanua pesa kwa hiari — ambayo husababisha",
	"bitcoin-vs-cbdc::point_3_summary_2": "mfumuko wa bei.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Anwani za Bitcoin haziunganishwi na utambulisho wako halisi. CBDC zinaunganishwa moja kwa moja na utambulisho wa kiserikali, zikiwezesha ufuatiliaji mkubwa wa fedha na udhibiti.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Sheria za Bitcoin zinathibitishwa na makumi ya maelfu ya nodi huru. CBDC zimeshikiliwa katikati mwa serikali na benki kuu, ambazo zina udhibiti kamili wa mtandao.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Mtu yeyote anaweza kuendesha nodi ya Bitcoin ili kuthibitisha sheria za mtandao. CBDC haziruhusu watumiaji kuendesha nodi — ni lazima uamini mamlaka kuu.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin iliyohifadhiwa kibinafsi haiwezi kugandamishwa na mtu yeyote. CBDC zimeundwa ili serikali na benki kuu ziweze kugandamisha akaunti papo hapo.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin inakupa udhibiti kamili wa pesa zako unapozihifadhi mwenyewe kwa kutumia",
	"bitcoin-vs-cbdc::point_8_summary_2": "pochi.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC zinahitaji kuamini wahifadhi kama benki au serikali kushikilia pesa zako kwa niaba yako.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Sera ya fedha ya Bitcoin imewekwa katika msimbo na haiwezi kubadilishwa. CBDC zinaweza kupangwa upya kwa hiari na wanasiasa, zikisababisha",
	"bitcoin-vs-cbdc::point_9_summary_2": "mfumuko wa bei",

	/* ─── bitcoin-vs-crypto ─── */
	"bitcoin-vs-crypto::point_1_summary_1":
		"Itifaki ya Bitcoin imesalia ile ile kimsingi tangu 2009, ikitoa sheria zinazotabirika. Miradi mingi ya crypto kwa kuendelea hubadilisha itifaki, tokenomics, au kugawanyika kuwa matoleo mapya.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin huendeshwa na makumi ya maelfu ya nodi huru duniani kote. Miradi mingi ya crypto inadhibitiwa na mashirika, makampuni, au timu ndogo za watengenezaji ambao wanaweza kufanya mabadiliko ya upande mmoja.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ina kikomo kigumu cha sarafu milioni 21 — mali adimu zaidi ya kidijitali. Miradi mingi ya crypto ina ugavi usio na kikomo au taratibu za kutengeneza tokeni mpya kwa hiari, zikiwapunguzia thamani wamiliki.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ina madhumuni moja: pesa za kidijitali za rika kwa rika. Mtu yeyote anaweza kuielewa na kuitumia. Crypto nyingi inahusisha mikataba mahiri changamano au DeFi inayohitaji utaalamu wa kiufundi kuitumia kwa usalama.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work ya Bitcoin imefanya kazi bila shambulio lililofanikiwa kwenye mtandao mkuu kwa zaidi ya miaka 15. Miradi mingi ya crypto hutumia makubaliano ya majaribio ambayo hayajajaribiwa vitani.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin ni pesa ya kidijitali — hifadhi ya thamani na njia ya kubadilishana. Tokeni nyingi za crypto ni za matumizi za kudhaniana au tokeni za utawala zenye thamani isiyo wazi katika ulimwengu halisi.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin inakua na nguvu chini ya mashambulizi na imenusurika kila mgogoro, marufuku, na ukosoaji. Miradi mingi ya crypto huanguka chini ya shinikizo la udhibiti, kiufundi, au la soko.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin haina CEO, hakuna kampuni, hakuna sehemu moja ya kushindikana. Miradi mingi ya crypto inategemea VC, uongozi maalum, au kuishi kwa kampuni moja.",

	/* ─── bitcoin-vs-fine-art ─── */
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Kila bitcoin inafanana na inabadilishana. Kila kazi ya sanaa ni ya kipekee — uumbaji tofauti, historia, hali, na asili hufanya mlinganisho wa moja kwa moja kuwa mgumu sana.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin hufanya biashara 24/7 kwenye soko la kimataifa linalopatikana kwa mtu yeyote. Sanaa nzuri inahitaji nyumba maalum za minada, wauzaji wa kibinafsi, au maonyesho na inaweza kuchukua miezi kuuza.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin inaweza kugawanywa katika sats milioni 100, ikiruhusu mtu yeyote kuingia kwa kiasi chochote. Sanaa nzuri inahitaji kiasi kikubwa cha pesa — uchoraji mmoja unaweza kugharimu mamilioni, ukiwafunga wengi.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bei ya Bitcoin ni ya wazi na inaonyeshwa kwa wakati halisi kwenye masoko ya kimataifa. Tathmini za sanaa nzuri ni za kibinafsi, zinategemea wataalamu, na zinaweza kutofautiana sana kati ya wanunuzi.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin haihitaji bima maalum, hifadhi za hali ya hewa, au usalama. Sanaa nzuri inahitaji bima ya gharama kubwa, hali ya hewa inayodhibitiwa, na ulinzi dhidi ya wizi, moto, na uharibifu.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Uthibitisho wa Bitcoin ni wa moja kwa moja kupitia kriptografia. Sanaa nzuri inakabiliwa na ughushi mara kwa mara, na hata wataalamu wanaweza kudanganywa na nakala za hali ya juu.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Bitcoin inaweza kuhamishwa popote duniani ndani ya dakika kwa ada ndogo. Sanaa nzuri inahitaji usafirishaji maalum, kibali cha forodha, na inaweza kuchukua wiki au miezi kusafirisha kimataifa.",
	"bitcoin-vs-fine-art::point_8_summary_1":
		"Bitcoin haina makato ya wauzaji au ada za nyumba za minada. Sanaa nzuri ina makato ya wauzaji ya 5–25%, ada za nyumba za minada, na malipo mengine yanayopunguza thamani yako halisi.",

	/* ─── bitcoin-vs-gold ─── */
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin ina kikomo kigumu cha milioni 21 BTC. Ugavi wa dhahabu hukua takriban 1.6% kwa mwaka, ukipunguza sehemu yako — chini ya fiat lakini bado kupungua.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin inaweza kuthibitishwa kihesabu papo hapo. Dhahabu inahitaji wataalamu wa kemikali na zana maalum kuthibitisha — na hata hivyo, ughushi tata umewahi kufanikiwa.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin inaweza kutumwa popote duniani ndani ya dakika. Kuhamisha dhahabu kunahitaji usafirishaji wa kimwili, bima, na linaweza kuchukua siku au wiki.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Bitcoin inaweza kugawanywa hadi sehemu milioni 100 za sarafu (sats). Dhahabu ina vikomo vya kiutendaji — huwezi kutumia mikrogramu ya dhahabu mkutano.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin inaweza kuhifadhiwa kwa usalama kwenye kifaa kidogo au hata kukariri akilini. Dhahabu inahitaji nafasi ya kimwili, ulinzi, na inaweza kuibwa kwa nguvu.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Bitcoin huendeshwa kwenye mtandao uliogatuliwa wa kimataifa. Soko la dhahabu linadhibitiwa na watu wachache wakuu na linaweza kuathiriwa na uingiliaji wa serikali na akiba kuu.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bei ya Bitcoin ni ya uwazi kabisa na inapatikana 24/7. Bei ya dhahabu mara nyingi hutofautiana kati ya masoko, ikiwa na utaratibu mdogo wa kuweka bei kati ya nchi.",
	"bitcoin-vs-gold::point_8_summary_1":
		"Bitcoin haihitaji wahusika wa tatu kuhifadhi au kuthibitisha umiliki. Dhahabu mara nyingi huhifadhiwa katika vault, ikiongeza hatari za mhusika mwingine na ada.",
	"bitcoin-vs-gold::point_9_summary_1":
		"Bitcoin haina athari ya mazingira ya uchimbaji wa kimwili. Uchimbaji wa dhahabu ni shughuli yenye athari kubwa kwa mazingira inayotumia kemikali zenye sumu na kuharibu mifumo ikolojia.",
	"bitcoin-vs-gold::point_10_summary_1":
		"Bitcoin haiwezi kunyang'anywa wakati ipo katika uhifadhi wa kibinafsi. Dhahabu imenyang'anywa kihistoria — Marekani ilifanya hivi mwaka 1933 chini ya Agizo la Rais 6102.",

	/* ─── bitcoin-vs-real-estate ─── */
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin inaweza kuhamishwa popote duniani ndani ya dakika. Mali isiyohamishika ni — kweli — isiyohamishika; haiwezi kuhamishwa kati ya nchi.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin haina ushuru wa mali, ada za matengenezo, au gharama za kufunga. Mali isiyohamishika inakuja na kodi ya mali ya kila mwaka, matengenezo, bima, na ada za kufunga 2–5%.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin inaweza kugawanywa kwa kiasi chochote — unaweza kununua $5 ya Bitcoin. Mali isiyohamishika inahitaji malipo makubwa ya awali, mara nyingi makumi au mamia ya maelfu ya dola.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin inafanana — kila satoshi ni sawa na nyingine. Kila kipande cha mali isiyohamishika ni cha kipekee — eneo, hali, na sifa hutofautiana, na kufanya mlinganisho kuwa mgumu.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin inafanya biashara 24/7 kwenye masoko ya kimataifa. Mali isiyohamishika inaweza kuchukua miezi kuuza, ikihitaji wakala, ukaguzi, na karatasi nyingi.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin inaweza kuhifadhiwa kibinafsi bila wahusika wa tatu. Mali isiyohamishika inaweza kunyang'anywa kupitia eminent domain, kufuata kodi, au sheria nyingine za kiserikali.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Bitcoin haina ada za kuendelea kuhifadhi. Mali isiyohamishika inahitaji matengenezo ya mara kwa mara, ukarabati, na uboreshaji unaopunguza mapato yako halisi kwa muda.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin ni huria kabisa — bila ya mahali maalum unaohitaji kuwa. Mali isiyohamishika inakufunga kwa eneo, ikipunguza uhamaji wako na fursa za kazi.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin inaweza kuthibitishwa papo hapo kwa uhakika kamili. Umiliki wa mali isiyohamishika unahitaji utafiti wa hatimiliki, bima ya hatimiliki, na unaweza kuwa na changamoto za kisheria.",
	"bitcoin-vs-real-estate::point_10_summary_1":
		"Bitcoin haitegemei mtu mmoja wa kukarabati au mwekezaji. Wapangaji wabaya wanaweza kuharibu mali, kukosa kulipa kodi, au kuunda mizozo ya kisheria yenye gharama kubwa.",

	/* ─── bitcoin-vs-stocks ─── */
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin haina CEO, bodi, au timu ya usimamizi inayoweza kufanya makosa au ulaghai. Hisa zinategemea utendaji wa watendaji wachache na maamuzi yao yanaweza kuharibu thamani yako.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin inaweza kunolewa kibinafsi bila kuhitaji broker au kampuni ya udhibiti. Hisa lazima zihifadhiwe kupitia broker, na kuongeza hatari ya mhusika mwingine.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin inafanya biashara 24/7 kimataifa. Hisa hufanya biashara tu kwa saa fulani za soko, kufunga wikendi na sikukuu — na kuacha mwekezaji bila chaguo wakati wa migogoro.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Ugavi wa Bitcoin umewekwa katika milioni 21 milele. Kampuni zinaweza kutoa hisa zaidi wakati wowote, zikipunguza thamani ya wamiliki waliopo.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin haina ada za usimamizi, ada za broker, au gharama za uwazi. Hisa zinahusu ada za uchaguzi za hisa, ada za fedha, na malipo ya broker yanayopunguza mapato yako halisi.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Sheria za Bitcoin zimewekwa katika msimbo na haziwezi kubadilishwa kwa hiari. Sera za kampuni — gawio, kugawanya hisa, kununua tena — zinaweza kubadilika ghafla na kuathiri thamani yako.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoin haitegemei serikali yoyote au mfumo wa kisheria. Hisa zinaweza kuteseka kutokana na mabadiliko ya udhibiti, ushuru, au sera za kampuni katika nchi maalum.",
	"bitcoin-vs-stocks::point_8_summary_1":
		"Bitcoin haitategemei kufanikiwa kwa kampuni moja. Hisa zinaweza kuwa hazina thamani ikiwa kampuni inashindwa, kufilisika, au kuchezewa kwa udanganyifu.",
	"bitcoin-vs-stocks::point_9_summary_1":
		"Bitcoin inaweza kuhamishwa popote duniani ndani ya dakika. Kuhamisha hisa kati ya mawakala kunaweza kuchukua siku au wiki na linaweza kuhusisha ada.",
	"bitcoin-vs-stocks::point_10_summary_1":
		"Bitcoin ni rasilimali isiyo na mfukuto wa moja kwa moja kwenye uchumi mmoja. Hisa zinaweza kupungua thamani wakati wa migogoro ya uchumi, mfumuko mkubwa wa bei, au mizozo ya kijiopolitiki.",

	/* ─── bitcoin-vs-visa ─── */
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin haina mamlaka kuu inayoweza kuzuia, kugandamisha, au kurudisha miamala. Visa inaweza na inafanya hivi kila mara kwa amri ya serikali, sera za kampuni, au algorithmu za udanganyifu.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin haihitaji ya udhibiti — mtu yeyote duniani anaweza kuitumia. Visa ina mahitaji ya udhibiti yanayoweza kuwatenga mabilioni — wasio na akaunti za benki, watu wenye historia mbaya za mikopo, au wasio na karatasi sahihi.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Bitcoin inaweza kufanya biashara papo hapo na ada ndogo, hasa kwa Lightning Network. Visa hutoza wafanyabiashara 1.5–3.5% kwa kila muamala, gharama ambazo huingia kwa wateja.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin haina kazi tena. Visa ina pointi moja ya kushindikana — hata vipindi vifupi vya kuzima kunaweza kupooza biashara duniani kote.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin inalinda faragha yako kwa anwani za kifani. Visa hufuatilia kila ununuzi unaoufanya, kujenga wasifu wa kina wa tabia zako za matumizi.",
	"bitcoin-vs-visa::point_6_summary_1":
		"Bitcoin inafanya kazi bila benki ya tatu. Visa inahitaji benki kutoa kadi, na watu bilioni 1.4 duniani hawana akaunti za benki.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Miamala ya Bitcoin ni ya mwisho mara baada ya kuthibitishwa. Mlipaji wa Visa anaweza kupinga malipo hadi siku 120, akiwaachia wafanyabiashara katika mvuto wa kifedha.",
	"bitcoin-vs-visa::point_8_summary_1":
		"Bitcoin haina vikomo vya muamala. Visa inaweka vikomo vya kila siku, vya kila mwezi, na vya kila muamala vinavyoweza kukuzuia kufanya manunuzi makubwa.",
	"bitcoin-vs-visa::point_9_summary_1":
		"Lightning Network inaweza kushughulikia mamilioni ya miamala kwa sekunde. Visa inadai miamala 65,000 kwa sekunde lakini katika mazoezi inashughulikia chini ya hiyo.",
	"bitcoin-vs-visa::point_10_summary_1":
		"Bitcoin inafanya kazi nje ya mfumo wa fedha wa jadi. Visa inakuingiza kabisa katika mfumo wa benki ulio chini ya udhibiti wa serikali na uingiliaji.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	const part1NS = new Set([
		"index",
		"common",
		"about",
		"bank-runs",
		"get-involved",
		"buy",
		"lightning",
		"wallets",
		"flyers",
		"404",
		"compound-inflation-calculator",
		"sticker-success",
		"sticker-language-success",
		"sticker-files/index",
		"bitcoin-vs-bonds",
		"bitcoin-vs-cbdc",
		"bitcoin-vs-banks",
		"bitcoin-vs-cash",
		"bitcoin-vs-stocks",
		"bitcoin-vs-visa",
		"bitcoin-vs-crypto",
		"bitcoin-vs-gold",
		"bitcoin-vs-real-estate",
		"bitcoin-vs-fine-art",
		"stickers",
	]);

	for (const e of report.entries) {
		if (!part1NS.has(e.namespace)) continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		// Try namespace-prefixed key first (for comparison points)
		const nsKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, nsKey)) {
			e.targetTranslation = T[nsKey];
			filled++;
			continue;
		}

		// Try plain key
		if (Object.prototype.hasOwnProperty.call(T, e.key)) {
			e.targetTranslation = T[e.key];
			filled++;
			continue;
		}

		// Try brand passthrough
		if (BRANDS.has(e.englishValue)) {
			e.targetTranslation = e.englishValue;
			filled++;
			continue;
		}

		unmatched.push(`${e.namespace}::${e.key}: ${JSON.stringify(e.englishValue.slice(0, 60))}`);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (sw): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
