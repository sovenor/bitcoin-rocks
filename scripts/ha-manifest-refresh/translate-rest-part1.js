#!/usr/bin/env node
/**
 * Hausa manifest refresh — part 1 of non-inflation namespaces.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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
	"ha.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Koma gida",
	"404::404_message":
		"Bitcoin yana da kyau, amma wannan shafin da aka karya ba haka ba ne.",
	"404::404_not_found_short": "Ba a samu ba",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Muna ba da albarkatun kyauta da ke sauƙaƙa wa kasuwanci na cikin gida karɓar Bitcoin. Shafinmu na Bitcoin don kasuwanci yana bayyana dalilin da ya sa Bitcoin yake da kyau ga kasuwanci, yadda ake zaɓar walat da mai sarrafa biyan kuɗi, kuma yana ba da labaru kyauta na “Bitcoin Accepted Here”.",
	"about::about_card_business_label": "Albarkatun kasuwanci",
	"about::about_card_business_source": "Tushen: bitcoin.rocks →",
	"about::about_card_business_title":
		"Duk abin da kasuwanci ke buƙata don fara karɓar biyan kuɗin Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Tushen: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Ba da gudummawa",
	"about::about_card_contribute_source": "Tushen: GitHub →",
	"about::about_card_contribute_title":
		"Koyi yadda ake ba da gudummawa ga aikin bitcoin.rocks",
	"about::about_card_email_label": "Imel",
	"about::about_card_email_source": "Tushen: imel →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Takardun bugawa",
	"about::about_card_flyers_source": "Tushen: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Saukar da takardun Bitcoin a buga don al'ummarka",
	"about::about_card_github_label": "Ma'adanar lambar",
	"about::about_card_github_source": "Tushen: GitHub →",
	"about::about_card_github_title": "Duba bitcoin.rocks akan GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Tushen: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Labaru kyauta",
	"about::about_card_stickers_source": "Tushen: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Sami labaran Bitcoin kyauta da aka aika zuwa ƙofar gidanka",
	"about::about_editorial_2":
		"Muna ambaton tushe masu aminci kamar Federal Reserve (FRED), Ofishin Statistics na Aiki na Amurka, FDIC, UN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, da James Lavish. Mun gaskata cewa lokacin da aka gabatar da gaskiya a fili, Bitcoin yana magana da kansa.",
	"about::about_flyers_blurb":
		"Muna tsara takardun da za a iya bugawa waɗanda za ku iya rabawa a tarurruka, manna a allunan sanarwa, ko sanya a cikin akwatunan wasiku — hanya mai sauƙi don haifar da sha'awa da aika mutane zuwa bitcoin.rocks, inda za su iya ƙarin koyo.",
	"about::about_header": "Game da bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Mai amfani sovenor ne ya kafa bitcoin.rocks",
	"about::about_mission_1b":
		"a shekarar 2022 tare da manufa mai sauƙi: hanzarta karɓar Bitcoin ta hanyar ilimi.",
	"about::about_open_source_2":
		"bitcoin.rocks aiki ne kyauta, mai buɗaɗɗen tushe a ƙarƙashin lasisin MIT. Kowa zai iya ba da gudummawa. Muna musamman maraba da masu fassara, waɗanda ke taimaka mana mu samar da abun cikinmu ga mutane a duk faɗin duniya.",
	"about::about_open_source_header": "Buɗaɗɗen tushe",
	"about::about_page_description":
		"bitcoin.rocks shafin yanar gizo ne na ilimin Bitcoin kyauta, mai buɗaɗɗen tushe, wanda aka kafa a 2022. Manufarmu ita ce hanzarta karɓar Bitcoin ta hanyar ilimi.",
	"about::about_stickers_blurb":
		"Muna aika labaran Bitcoin kyauta kai tsaye zuwa ƙofar gidanka, don ka taimaka wa Bitcoin yaɗu a al'ummarka. Kowane wata, ɗaruruwan mutane suna duba lambobin QR da ke kan waɗannan labaran don ƙara koyo game da Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin ba shi da gudun banki",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin tsarin cikakken ajiya ne. Ba ka sa kuɗinka a banki ba. Kai banki ne. Ba a ba da kuɗinka aro ba tare da saninka ba, saboda kai kaɗai ne ke da damar zuwa gareshi.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Muddin ka adana bitcoin ɗinka a walat ɗinka — ba a kasuwanni ko ETF ba — gudun banki ba zai yiwu ba.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Tare da Bitcoin, kana da iko na gaske akan kuɗinka.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Tun 26 ga Maris 2020, bankunan Amurka ba sa buƙatar riƙe wani ajiyar tilas.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Adadin ajiyar banki",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Tushen: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Tsarin cikakken ajiya — babu buƙatar inshorar ajiya.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Inshorar Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Tushen: takardar fararen Bitcoin →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Kowane bitcoin yana wanzuwa a kan blockchain — ba a ba da komai aro ba.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Adadin ajiyar Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Tushen: takardar fararen Bitcoin →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Asusun inshora na dala biliyan 153.9 a kan dala tiriliyan 10.82 a cikin ajiyar inshora (Disamba 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Inshorar FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Tushen: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Nazarin shari'a",
	"bank-runs::bank_runs_card_svb_source":
		"Tushen: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Duba yadda gudun bankin Silicon Valley Bank ya faru",
	"bank-runs::bank_runs_card_wallet_label": "Mataki na gaba",
	"bank-runs::bank_runs_card_wallet_source": "Fara nan →",
	"bank-runs::bank_runs_card_wallet_title":
		"Koyi yadda ake samun walat ɗin Bitcoin ɗinka",
	"bank-runs::bank_runs_fdic_heading":
		"Inshorar FDIC tana rufe kusan 1% na ajiya",
	"bank-runs::bank_runs_fdic_p1":
		"Inshorar FDIC tana kare ajiya har zuwa dala 250,000 ga kowane mai ajiya. Amma asusun inshora ƙanƙane ne idan aka kwatanta da jimillar ajiyar da ake niyyar karewa.",
	"bank-runs::bank_runs_fdic_p2_a":
		"A faɗuwar banki mai yaɗu, gwamnati za ta iya buga kuɗi don cike gibin — yana haifar da ƙarin ",
	"bank-runs::bank_runs_fdic_p2_link": "hauhawar farashi.",
	"bank-runs::bank_runs_header":
		"Bitcoin ba shi da gudun banki, amma bankinka zai iya samu.",
	"bank-runs::bank_runs_page_description":
		"Bankuna suna ba da kuɗinka aro ta hanyar tsarin ajiyar ɓangare. Idan mutane da yawa suka cire kuɗi a lokaci ɗaya, bankuna suna iya faɗuwa. Bitcoin tsarin cikakken ajiya ne — gudun banki ba zai yiwu ba.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: misali na rayuwar gaske",
	"bank-runs::bank_runs_svb_p1_a":
		"A Maris 2023, Silicon Valley Bank ya faɗi bayan ya saka ajiyar abokan ciniki a cikin ",
	"bank-runs::bank_runs_svb_p1_b":
		"Lokacin da waɗannan shaidu suka rasa darajar, SVB ba zai iya rufe cire kuɗi ba. Bankin ya zama mai bashin da ba za a iya biya ba.",
	"bank-runs::bank_runs_svb_p1_link":
		"shaidu na gwamnati na dogon lokaci.",
	"bank-runs::bank_runs_svb_p2":
		"Dubban kasuwanci ba za su iya biyan ma'aikatansu ba. FDIC ya shiga — amma babbar tambaya ta taso: shin kuɗinka yana da aminci da gaske?",
	"bank-runs::bank_runs_what_p1":
		"Bankuna ba sa adana ajiyarka a cikin akwati mai aminci. Suna ba da aro kuma suna saka kuɗinka — wannan shi ne tsarin ajiyar ɓangare.",
	"bank-runs::bank_runs_what_p2":
		"Idan mutane da yawa suka yi ƙoƙarin cire kuɗi a lokaci ɗaya, bankin ba shi da isasshen kuɗi don biyan kowa. Wannan shi ne gudun banki — kuma yana iya halaka bankin gaba ɗaya.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Bankuna</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Kowa da ke da haɗin intanet zai iya amfani da Bitcoin — ba ya buƙatar ",
	"bitcoin-vs-banks::point_1_summary_2": "izini.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Bankuna na iya ƙin, daskarewa, ko rufe asusun bisa ga dokokinsu ko ƙa'idoji.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Hanyar sadarwar Bitcoin tana aiki sa'o'i 24 a rana, kwanaki 7 a mako, kwanaki 365 a shekara ba tare da tagogin kulawa ko ranakun hutu ba. Bankuna suna da iyakacin sa'o'i, suna rufewa a ƙarshen mako kuma suna fuskantar gazawar aiki.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Kowace ma'amalar Bitcoin ana yin rikodi a kan blockchain na jama'a wanda kowa zai iya tabbatarwa. Bankuna suna riƙe litattafan asusu na sirri waɗanda abokan ciniki ba za su iya bincika ba da kansu.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Tare da Bitcoin, kana riƙe maɓallin sirrinka — duba jagorarmu mai sauƙi akan ",
	"bitcoin-vs-banks::point_4_summary_2": "walat na Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Bankuna suna riƙe kuɗinka a hannunsu kuma suna iya daskarewa, ƙuntatawa ko toshewa a kowane lokaci.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Kuɗin Bitcoin a bayyane suke kuma a iya hango. Bankuna suna tara kuɗi ɓoye akai-akai don asusun ajiya, wuce-gona-da-iri, canja wuri da ATM.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin yana ba ka damar kashe abin da kake da shi kawai. Bankuna suna ba da damar wuce-gona-da-iri sannan suna cajin ka jerin kuɗin hukunci.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Lokacin da aka aika ma'amalar Bitcoin, ba za a iya tsayar da ita ko soke ta ba. Bankuna suna iya toshewa, daskarewa ko soke ma'amaloli bisa ga dokokinsu ko umurnin gwamnati.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Shaidu</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Shaidu suna “mara haɗari” da suna kawai — hauhawar farashi, canjin ƙimar riba, da haɗarin gazawa duk suna lalata sakamako na gaske.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin yana da bambanci a bayyane, amma ba shi da haɗarin sashi a ɓoye.",
	"bitcoin-vs-bonds::point_2_summary_1": "Lokacin da ",
	"bitcoin-vs-bonds::point_2_summary_2": "hauhawar farashi",
	"bitcoin-vs-bonds::point_2_summary_3":
		" ya wuce sakamakon shaidu, masu shaidun suna rasa ikon saye na gaske kowace shekara. Iyakar miliyan 21 ta Bitcoin ba za a iya tarwatsa ta da hauhawar farashi ba.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Kasuwannin shaidu na iya daskarewa yayin rikici — Silicon Valley Bank ya faɗi a wani ɓangare saboda yana da shaidu da suka rasa darajar. Duba yadda ",
	"bitcoin-vs-bonds::point_3_summary_2": "gudun banki",
	"bitcoin-vs-bonds::point_3_summary_3":
		" ke faruwa da kuma me yasa Bitcoin ke kauce wa su. Bitcoin yana ciniki sa'o'i 24 a rana a duk faɗin duniya ba tare da rikicin ruwa-ruwa ba.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Gwanjon shaidun gwamnati zai iya gaza idan babu isassun masu siye — duba ",
	"bitcoin-vs-bonds::point_4_summary_2": "rauni gwanjon na 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Ana gano farashin Bitcoin akai-akai a kasuwanni masu buɗewa, ba tare da gwanjo ɗaya na tsakiya da zai iya gaza ba.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Sakamakon shaidu ana gyara su a lokacin saye. Ko da tattalin arziki ya yi girma ko kuɗi ya faɗi, sakamakonka ya kasance kamar yadda yake.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin yana da babbar dama na haɓaka yayin da karɓa ke yaɗuwa kuma buƙata ta yi karo da wadata mai ƙayyadewa.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Yawancin shaidu ana riƙe su ta hanyar bankuna ko dillalai, abin da ke ƙara haɗarin sashi. Ana iya riƙe Bitcoin da kanka tare da ",
	"bitcoin-vs-bonds::point_6_summary_2": "walat",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — yana kawar da duk wannan haɗari.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Shaidu sun dogara gabaɗaya akan gwamnatoci da ke biyan basussukansu. Idan gwamnati ta gaza ko ta rage bashinta ta hanyar hauhawar farashi, masu shaidun za su rasa.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin yana aiki ba tare da gwamnati ko hukumar siyasa ba.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Kuɗin tsabar</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin yana tafiya ko'ina a duniya ta hanyar intanet, a cikin daƙiƙa. Kuɗin tsabar yana buƙatar kasancewar zahiri ko amintattun manzanni — ba za ka iya aika takardar ashirin ta imel ba.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin yana aiki iri ɗaya ko'ina. Kuɗin tsabar yana iyakancewa ta yanayi, ƙimar musanya da karɓuwa ta cikin gida.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Gwamnatoci na iya soke kuɗin tsabar daga dare zuwa dare — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indiya</a> ta yi haka a 2016. Amma ko ba tare da tarwatsa kuɗi ba, kuɗin tsabar yana rasa darajarsa saboda ",
	"bitcoin-vs-cash::point_3_summary_2": "hauhawar farashi.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Babu wata gwamnati ko hukuma da za ta iya soke Bitcoin.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Kuɗin tsabar yana iya zama na ƙarya, wani lokaci a hanya mai gamsarwa. Bitcoin yana amfani da cryptography wanda ya sa zama na ƙarya ba zai yiwu ba a fannin lissafi.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin ba shi da hukumar tsakiya. Gwamnatoci suna fitar da kuɗin tsabar wanda za su iya buga ƙari, canza ƙira ko cire takardun yadda suke so.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Kuɗin tsabar yana cikin haɗarin sata, gobara, asara da kwace. Bitcoin za a iya ",
	"bitcoin-vs-cash::point_6_summary_2":
		"riƙe da kanka cikin aminci",
	"bitcoin-vs-cash::point_6_summary_3":
		" a wayarka ko na'urar kayan masarufi.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin za a iya raba shi har zuwa satoshi miliyan 100, abin da ke ba da damar ƙananan biyan kuɗi a kowane girma. Kuɗin tsabar yana da mafi ƙarancin daraja — ba za ka iya raba sisi ba.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Kuɗin Dijital na Bankin Tsakiya (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Babu wanda zai iya tsayar da kai daga ma'amaloli a Bitcoin. An ƙera CBDC don bayar da gwamnatoci da bankunan tsakiya iko akan kowane biya, yana iyakance sirrinka da 'yancinka.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin ba ya ƙarewa kuma ba shi da kuɗin wata-wata. CBDC za a iya tsara su don ƙarewa, yana hana adana kuɗi don gaba.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin yana da iyaka mai ƙayyadewa na BTC miliyan 21. CBDC ba su da iyakar wadata kuma sun ba gwamnatoci damar ƙara wadatar kuɗi yadda suke so — yana haifar da ",
	"bitcoin-vs-cbdc::point_3_summary_2": "hauhawar farashi.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Adireshin Bitcoin ba a haɗa shi da ainihin shaidarka ba. CBDC ana haɗa su kai tsaye da shaidar gwamnati, abin da ke ba da damar sa ido mai yawa da takunkumin kuɗi.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Dokokin Bitcoin ana tabbatar da su ta dubban nodes masu zaman kansu. CBDC suna a tsakiya a hannun gwamnatoci da bankunan tsakiya da ke da cikakken iko a kan hanyar sadarwa.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Kowa zai iya gudanar da node na Bitcoin kuma ya tabbatar da dokokin hanyar sadarwa. CBDC ba sa ba masu amfani damar gudanar da nodes — dole ne ka amince da hukumar tsakiya.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Babu wanda zai iya daskare Bitcoin mai riƙe-da-kai. An ƙera CBDC don bayar da gwamnatoci da bankunan tsakiya damar daskare asusun nan take.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin yana ba ka cikakken iko akan kuɗinka lokacin da ka riƙe shi a cikin ",
	"bitcoin-vs-cbdc::point_8_summary_2": "walat.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC suna buƙatar amincewa da masu kulawa kamar bankuna ko gwamnatoci da ke riƙe kuɗin a wurinka.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"An tsara manufar kuɗi ta Bitcoin a cikin lambar kuma ba za a iya canza ta ba. CBDC za a iya sake tsara su yadda jami'an siyasa suke so, yana haifar da ",
	"bitcoin-vs-cbdc::point_9_summary_2": "hauhawar farashi",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", lokacin da aka buga kuɗi da yawa.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin shi ne hanyar sadarwar kwamfuta mafi tsaro da aka taɓa ginawa kuma ba a taɓa fashin ta ba. CBDC sun dogara da bankuna da gwamnatoci waɗanda ake fasawa akai-akai.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Crypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Yarjejeniyar Bitcoin ba ta canza sosai ba tun 2009 kuma tana ba da dokokin da za a iya hango. Yawancin ayyukan crypto suna canza yarjejeniya, tokenomics ko makasudi a sabbin sigogi akai-akai.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin yana gudana akan dubban nodes masu zaman kansu a duniya. Yawancin ayyukan crypto suna sarrafa su ta gidauniyoyi, kamfanoni ko ƙananan ƙungiyoyin masu haɓakawa waɗanda za su iya yin canje-canje na ɓangare ɗaya.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin yana da iyaka mai ƙayyadewa na tsabar miliyan 21 — kadarar dijital mafi ƙanƙanci. Yawancin ayyukan crypto suna da wadata mara iyaka ko hanyoyin ƙirƙirar sabbin tokens da gangan, abin da ke tarwatsa masu mallaka.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin yana da manufa ɗaya: kuɗin dijital tsakanin tsara-tsara. Kowa zai iya fahimtarsa kuma ya yi amfani da shi. Yawancin crypto suna haɗawa da kwangiloli masu sarƙaƙƙiya ko DeFi waɗanda ke buƙatar ƙwarewar fasaha don amfani da su lafiya.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work na Bitcoin yana aiki ba tare da nasarar harin a kan babban sarƙa fiye da shekaru 15 ba. Yawancin ayyukan crypto suna amfani da hanyoyin yarjejeniya na gwaji da ba a gwada su sosai ba.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin kuɗin dijital ne — ma'ajiyar daraja da hanyar musayya. Yawancin tokens na crypto sune tokens na hasashe na amfani ko mulki waɗanda ba su da bayyananniyar daraja ta gaske.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin ya yi ƙarfi a ƙarƙashin hare-hare kuma ya tsira daga kowane rikici, hani da suka. Yawancin ayyukan crypto suna faɗuwa a ƙarƙashin matsin lamba na tsari, fasaha ko kasuwa.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin ba shi da CEO, kamfani ko wani wuri ɗaya na gazawa. Yawancin ayyukan crypto sun dogara da masu saka jari na haɗari, jagoranci na musamman ko rayuwar kamfani guda.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Fasaha mai daraja</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Kowane bitcoin daidai yake kuma ana iya musanya. Kowane aiki na fasaha na musamman ne — asali, tarihi, yanayi da zuriya daban-daban suna sa kwatancen kai tsaye yana da matuƙar wahala.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin yana ciniki sa'o'i 24 a rana a kasuwa ta duniya da ake samuwa ga kowa. Fasaha mai daraja tana buƙatar gidajen gwanjo na musamman, dillalai masu zaman kansu ko gallery, kuma sayarwa zai iya ɗaukar watanni.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Yana kashe ƙasa da 1% a cikin kuɗi don saye ko sayar da Bitcoin, sau da yawa ƙasa sosai. Sayar da fasaha tana tara 30-40% a cikin kwamishinan masu siye, kuɗi, inshora, jigilar kaya da kuɗin tabbatar da gaskiya.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin za a iya raba shi har zuwa satoshi miliyan 100, abin da ke sa shi cikakke don ma'amaloli na kowane girma. Ba za ka iya mallakar ɓangaren zane ko kusurwar mutum-mutumi ba tare da haɗarin sashi.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Mallaka da gaskiyar Bitcoin za a iya tabbatar da su ta hanyar cryptography ta kowa a kan blockchain. Tabbatar da ayyukan fasaha yana da tsada, yana ɗaukar lokaci, kuma ana yaudarar masana akai-akai — yana lalata darajar aiki cikin dare.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin da aka adana yadda ya kamata zai iya tsira daga ambaliyar ruwa, gobara, girgizar ƙasa da sata. Fasaha mai daraja tana cikin haɗari ga duk nau'ikan bala'o'i na zahiri, kuma inshora ba ya rufe komai sau da yawa.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Kowa da ke da haɗin intanet da ƙananan kuɗi zai iya saye Bitcoin. Zuba jari a fasaha mai amfani galibi don masu tarawa masu arziki da ke da damar zuwa gwanji da ƙwarewar musamman.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Zinariya</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin za a iya aika nan take ta hanyar intanet tare da ƙananan kuɗi. Dole ne a jigilar zinariya ta zahiri don canja mallakar.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin kadarar dijital ce ta asali wacce za ka iya canja wa kanka ta hanyar intanet. Zinariya akan layi IOU dijital ne — kana riƙe alkawari kawai daga mai kulawa, ba ƙarfen kansa ba.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin yana da iyaka mai ƙayyadewa na BTC miliyan 21. Wadatar zinariya tana girma kusan <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% a kowace shekara</a>, yana rage rabonka — ƙasa da ",
	"bitcoin-vs-gold::point_3_summary_2": "hauhawar farashi",
	"bitcoin-vs-gold::point_3_summary_3":
		" na kuɗin fiat, amma har yanzu hauhawar farashi ne.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Lokacin da farashin zinariya ya tashi, ana hakar zinariya da yawa, abin da ke ƙarewa rage farashin. Wadatar Bitcoin ba ta da sassauci — ko da farashin ya tashi sosai, miliyan 21 ne kawai za su kasance.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Hanyar sadarwar Bitcoin ana tabbatar da ita ta dubban nodes masu zaman kansu. Yawancin zinariyar zahiri tana cikin manyan ɗakuna kaɗan.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Kowa zai iya tabbatar da gaskiyar Bitcoin ta hanyar gudanar da cikakken node — app ne kawai. Tabbatar da zinariya ta zahiri yana buƙatar narkewa; tungsten zai iya kasancewa a ciki.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin za a iya raba shi har zuwa satoshi miliyan 100, abin da ke sa shi cikakke don sayan kowane girma. Zinariya ba za a iya raba ta cikin sauƙi don ƙananan ma'amaloli ba.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Gidaje</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin yana motsi nan take a duk faɗin duniya. Gidaje suna da alaƙa da wuri kuma suna cikin haɗarin tattalin arziki, siyasa da haɗarin muhalli na cikin gida.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin za a iya raba shi har zuwa satoshi miliyan 100. Gidaje ba za a iya sayar da su a ɓangare ba — ba za ka iya sayar da ɗakin girki ba ko saye rabin ɗakin kwana ba.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin yana aiki a kan hanyar sadarwa mara tsakiya wadda babu wata gwamnati da za ta iya sarrafa. Gidaje ana sarrafa su sosai — yanki, kula da haya, sayarwar tilas da kamawa duk sun shafe shi.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ba ya buƙatar wani kulawa. Gidaje suna buƙatar gyarawa, sake gyara, inshora, gudanar da masu haya da magance matsalolin masu haya.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Babu kuɗin haraji na ci gaba akan Bitcoin — kana biyan harajin riba kawai akan sayarwa. Gidaje suna biyan harajin gida na shekara-shekara ba tare da la'akari da kuɗi ba.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin da aka adana yadda ya kamata zai tsira daga gobara, ambaliyar ruwa da girgizar ƙasa. Gidaje suna cikin haɗari ga duk bala'i, kuma inshora ba ya rufe komai sau da yawa.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Kowane bitcoin daidai yake kuma ana iya musanya. Kowane gida na musamman ne, abin da ke sa shi da wuya a tantance da kwatanta.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin yana ciniki a duniya sa'o'i 24 a rana ga kowa da ke da intanet. Sayar da gidaje yana iyakance ga masu siye na cikin gida kuma yana iya ɗaukar watanni don kammala takardunsu.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin yana ba da damar mallaka kai tsaye da kowa. Sayan gidaje a matsayin saka jari fiye da gidan farko yana ƙara farashin gidaje, yana rage samuwar su kuma yana haifar da rikicin gidaje.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Hannun jari</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin kadarar kai tsaye ce wadda ka mallaka gabaɗaya. Hannun jari rabo ne na kamfani — darajarsu ya dogara da gudanarwa, aiki da yanke shawara da ba ka da iko a kansu.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin yana da iyaka mai ƙayyadewa na BTC miliyan 21. Kamfanoni za su iya fitar da sabbin hannun jari a kowane lokaci kuma su tarwatsa masu hannun jari masu wanzu — kamar yadda ",
	"bitcoin-vs-stocks::point_2_summary_2": "hauhawar farashi",
	"bitcoin-vs-stocks::point_2_summary_3":
		" ke tarwatsa kuɗin fiat. Tare da Bitcoin, rabonka ba ya raguwa.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin ba shi da CEO ko wuri ɗaya na gazawa. Hannun jari ya dogara sosai akan gudanarwa — yanke shawara mara kyau ko tafiyar wani muhimmin mutum zai iya faɗin farashin.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Farashin Bitcoin yana fitowa daga kasuwannin duniya masu buɗewa. Tantance hannun jari ya dogara akan rabon kamar P/E waɗanda za su iya ɓoye hannun jari masu tsada.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin yana ciniki sa'o'i 24 a rana a duk faɗin duniya. Kasuwannin hannun jari sun buɗe ne kawai a kwanaki na mako yayin sa'o'in ciniki.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Tare da Bitcoin, za ka iya canja zuwa ",
	"bitcoin-vs-stocks::point_6_summary_2": "riƙe-da-kai",
	"bitcoin-vs-stocks::point_6_summary_3":
		" tare da app mai sauƙi — babu buƙatar dillali. Dillalai suna riƙe hannun jari, abin da ke sanya ka cikin haɗarin sashi idan suka faɗi.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Wadatar daidaitacciya ta Bitcoin tana mai da shi katanga abin dogara akan hauhawar farashi. Wasu hannun jari suna doke hauhawar farashi, wasu ba sa — babu abin da aka tabbatar.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Bambanci tsakanin <span class=\"orange\">Bitcoin</span> da <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin hanyar sadarwa ce ta buɗewa wadda kowa zai iya shiga ba tare da izini ba. Visa tsarin rufe ne wanda cibiyoyin kuɗi ke sarrafawa waɗanda za su iya ƙin damar — musamman ga waɗanda ba su da banki ko ba su da banki sosai.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Babu kuɗin 'yan kasuwa akan ma'amalolin Bitcoin. Visa tana cajin kusan 3% kowace ma'amala ga 'yan kasuwa gabaɗaya — kasuwancinka zai iya adana kuɗi ta hanyar karɓar ",
	"bitcoin-vs-visa::point_2_summary_2": "biyan kuɗin Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Kowace ma'amalar Bitcoin ana yin rikodi a kan blockchain na jama'a kuma za a iya tabbatarwa. Visa tana gudanar da tsarin rufe da na mallaka inda abokan ciniki ba za su iya tabbatar da komai ba da kansu.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Babu wata hukumar tsakiya da za ta iya daskare Bitcoin. Visa za ta iya daskare asusu, toshe ma'amaloli ko ƙin sabis a kowane lokaci.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin tsarin biya na ƙarshe ne — kana kashe abin da kake da shi kawai. Katunan kiredit suna haifar da bashi tare da ƙimar riba waɗanda sau da yawa suka wuce 25% a kowace shekara.",
	"bitcoin-vs-visa::point_6_summary_1":
		"Bitcoin yana ba ka damar canja zuwa ",
	"bitcoin-vs-visa::point_6_summary_2": "riƙe-da-kai",
	"bitcoin-vs-visa::point_6_summary_3":
		" ba tare da banki ko mai ba da biyan kuɗi ba. Katunan kiredit koyaushe suna buƙatar 'yan tsaka.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin yana aiki 24/7 a duniya, ba tare da sa'o'in aiki ba. Visa tana da sa'o'in aiki, tagogin kulawa da ƙuntatawa na yanki waɗanda za su iya toshe ma'amaloli.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (ha): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
