#!/usr/bin/env node
/**
 * Basque (Euskara) manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Basque conventions:
 * - Standard 2nd-person singular "zu / zuk / zure" throughout.
 * - Numbers: decimal comma, period thousand separators. Space before %.
 * - Quotation marks: «...» (Basque typographic style).
 * - "bilioi" = 10^12 (Basque convention matches English "trillion").
 * - Brand names (Silicon Valley Bank, FRED, FDIC, etc.) preserved verbatim.
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
	"eu.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Itzuli hasierara",
	"404::404_message":
		"Bitcoin bikaina da, baina hondatutako orri hau ez.",
	"404::404_not_found_short": "Ez da aurkitu",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Doako enpresa-tresnak eskaintzen ditugu, negozio txikiei Bitcoin onartzea errazteko. Gure «Bitcoin enpresentzat» orrialdeak azaltzen du zergatik den Bitcoin ona enpresa batentzat, nola aukeratu zorroa eta ordainketa-hartzailea, eta doako «Hemen Bitcoin onartzen dugu» pegatinak ere eskaintzen ditu.",
	"about::about_card_business_label": "Tresnak enpresentzat",
	"about::about_card_business_source": "Iturria: bitcoin.rocks →",
	"about::about_card_business_title":
		"Enpresa batek Bitcoin ordainketak onartzeko behar duen guztia",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Iturria: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Parte hartu",
	"about::about_card_contribute_source": "Iturria: GitHub →",
	"about::about_card_contribute_title":
		"Ikasi nola lagundu bitcoin.rocks proiektuan",
	"about::about_card_email_label": "Posta elektronikoa",
	"about::about_card_email_source": "Iturria: posta elektronikoa →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Inprimagarri esku-orriak",
	"about::about_card_flyers_source": "Iturria: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Deskargatu eta inprimatu Bitcoin esku-orriak zure komunitaterako",
	"about::about_card_github_label": "Biltegia",
	"about::about_card_github_source": "Iturria: GitHub →",
	"about::about_card_github_title": "Ikusi bitcoin.rocks GitHuben",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Iturria: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Doako pegatinak",
	"about::about_card_stickers_source": "Iturria: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Jaso Bitcoin pegatinak doan zure atarira",
	"about::about_editorial_2":
		"Iturri fidagarriak aipatzen ditugu: Erreserba Federala (FRED), AEBetako Lan Estatistiken Bulegoa, FDIC, NBE, Urrearen Munduko Kontseilua, Forbes, MIT Technology Review, Lyn Alden eta James Lavish. Uste dugu gertakariak argi aurkeztean, Bitcoinek bere aldetik hitz egiten duela.",
	"about::about_flyers_blurb":
		"Inprima daitezkeen esku-orriak diseinatzen ditugu bileretan banatzeko, iragarki-tauletan jartzeko edo postontzietan uzteko — interesa sortzeko modu erraza, jendea bitcoin.rocks helbidera bideratuz, gehiago ikas dezaten.",
	"about::about_header": "bitcoin.rocks proiektuari buruz",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks sortu zuen",
	"about::about_mission_1b":
		"erabiltzaileak 2022an misio sinple batekin: hezkuntzaren bidez Bitcoinaren adopzioa azkartzea.",
	"about::about_open_source_2":
		"bitcoin.rocks MIT lizentziapeko kode irekiko proiektu librea da. Edonor dago ongi etorria laguntzera. Bereziki itxaroten ditugu gure edukiak mundu osoko jendearentzat eskuragarri bihurtzen dituzten itzultzaileak.",
	"about::about_open_source_header": "Kode irekia",
	"about::about_page_description":
		"bitcoin.rocks Bitcoini buruzko kode irekiko webgune hezitzaile librea da, 2022an sortua. Gure misioa hezkuntzaren bidez Bitcoinaren adopzioa azkartzea da.",
	"about::about_stickers_blurb":
		"Doako Bitcoin pegatinak bidaltzen ditugu zuzenean zure atarira, zure komunitatean Bitcoini buruzko kontzientzia hazten lagundu diezagun. Hilabetero ehunka lagunek eskaneatzen dituzte pegatina horien QR kodeak Bitcoini buruz gehiago jakiteko.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin-ek ezin du banku-ihesik izan",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin erreserba osoko sistema da. Ez duzu dirua bankuan sartzen. Zu zeu zara zure bankua. Zure dirua ez zaio inori ematen zure jakinik gabe, zu zara horretarako sarbidea duen bakarra.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Zure Bitcoin zure zorroan mantentzen duzun bitartean — ez burtsan ez ETF batean — banku-iheserik ezinezkoa da.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoinekin zuk duzu zure diruaren benetako kontrola.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"2020ko martxoaren 26az geroztik, AEBetako bankuek ez dute derrigorrezko erreserbarik mantendu behar.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Bankuaren erreserba-tasa",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Iturria: Erreserba Federala →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Erreserba osoko sistema — ez da gordailuen asegururik behar.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoinaren estaldura",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Iturria: Bitcoinen txosten zuria →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Bitcoin bakoitza blockchain-ean dago — ezer ez da mailegatzen.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Bitcoinaren erreserba-tasa",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Iturria: Bitcoinen txosten zuria →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 mila milioi $-ko aseguru-funtsa vs 10,82 bilioi $-ko aseguratutako gordailuak (2025eko abendua).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-en estaldura",
	"bank-runs::bank_runs_card_fdic_source":
		"Iturria: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "% 1,42",
	"bank-runs::bank_runs_card_svb_label": "Kasu azterketa",
	"bank-runs::bank_runs_card_svb_source":
		"Iturria: Washingtongo Unibertsitateko Zuzenbide Fakultatea →",
	"bank-runs::bank_runs_card_svb_title":
		"Ikusi nola gertatu zen Silicon Valley Bank banku-ihesa",
	"bank-runs::bank_runs_card_wallet_label": "Hurrengo urratsa",
	"bank-runs::bank_runs_card_wallet_source": "Hasi hemen →",
	"bank-runs::bank_runs_card_wallet_title":
		"Ikasi zure Bitcoin zorroa nola lortu",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC-en aseguruak gordailuen % 1 inguru estaltzen du",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC-en aseguruak 250.000 $ arteko gordailuak babesten ditu gordailugile bakoitzeko. Baina aseguru-funtsa txikia da babestu beharko lukeen gordailuen guztizkoarekin alderatuta.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Banku-porrot zabal baten kasuan, gobernuak seguruenik diru gehiago inprimatuko luke hutsunea estaltzeko — gehiago eraginez",
	"bank-runs::bank_runs_fdic_p2_link": "inflazioa.",
	"bank-runs::bank_runs_header":
		"Bitcoinek ezin du banku-ihesik izan, baina zure bankuak bai.",
	"bank-runs::bank_runs_page_description":
		"Bankuek zure gordailuak mailegatzen dituzte zatikako erreserba bankuaren bidez. Jende gehiegik batera dirua ateratzen badu, bankuak hondoratu daitezke. Bitcoin erreserba osoko sistema da — banku-iheserik ezinezkoa da.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: bizitza errealeko adibidea",
	"bank-runs::bank_runs_svb_p1_a":
		"2023ko martxoan, Silicon Valley Bank hondoratu zen bezeroen gordailuak",
	"bank-runs::bank_runs_svb_p1_b":
		"Bonu horiek balioa galdu zutenean, SVB-k ezin izan zituen itzulketak estali. Bankua kaudimengabe bihurtu zen.",
	"bank-runs::bank_runs_svb_p1_link": "gobernu-bonu luzeetan inbertitu ondoren.",
	"bank-runs::bank_runs_svb_p2":
		"Milaka enpresak ezin zieten langileei soldatarik ordaindu. FDIC-ek esku hartu zuen — baina galdera handiagoa agertu zen: benetan seguru al dago zure dirua?",
	"bank-runs::bank_runs_what_p1":
		"Bankuek ez dituzte zure gordailuak kutxan gordetzen. Zure dirua mailegatzen eta inbertitzen dute — horri zatikako erreserba bankua deritzo.",
	"bank-runs::bank_runs_what_p2":
		"Jende gehiegik batera dirua atera nahi duenean, bankuak ez du nahikoa eskudiru guztiei ordaintzeko. Hori da banku-ihesa — eta bankuaren erabateko hondoratzera eraman dezake.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">bankuen</span> arteko aldea",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin Interneteko konexioa duen edonork erabil dezake — ",
	"bitcoin-vs-banks::point_1_summary_2": "baimenik gabekoa da.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Bankuek kontuak irekitzeari uko egin diezaiokete, izoztu edo itxi beren arauen edo gobernu-mandatuen arabera.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin sarea 24/7/365 lan egiten du mantentze-leihorik eta jairik gabe. Bankuek ordutegi mugatuak dituzte, asteburuetan itxiak daude eta etenaldi operatiboak jasaten dituzte.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Bitcoin transakzio bakoitza edonork egiazta dezakeen blockchain publikoan dago. Bankuek liburu pribatuak dituzte, bezeroek ezin dutelarik modu independentean auditatu.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoinekin zuk zeuk gordetzen dituzu zure gako pribatuak — ikusi gure gida sinplea ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin zorroen inguruan",
	"bitcoin-vs-banks::point_4_summary_3":
		". Bankuek zure dirua gordetzen dute eta edozein unetan izoztu, mugatu edo blokeatu dezakete.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin transakzioen kuotak gardenak eta aurreikusteko modukoak dira. Bankuek kuota ezkutuak metatzen dituzte kontuengatik, deskubertuengatik, transferentziengatik eta kutxazainengatik.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoinek benetan duzuna baino ezin dizu gastatzeko aukera eman. Bankuek deskubertuak onartzen dituzte eta gero zerrenda bat kobratzen dizute horren truke.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Bitcoin transakzio bat bidalita, ezin da gelditu edo itzuli. Bankuek transakzioak blokeatu, izoztu edo bertan behera utzi ditzakete beren arauen edo gobernu-aginduen arabera.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">bonuen</span> arteko aldea",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Bonuak «arrisku gabekoak» dira nominalki bakarrik — inflazioak, interes-tasen aldaketek eta lehenetsiriko arriskuak benetako errentagarritasuna jaten dute.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoinek hegakortasun gardena du, baina ez du kontrapartiaren arrisku ezkuturik.",
	"bitcoin-vs-bonds::point_2_summary_1": "Noiz",
	"bitcoin-vs-bonds::point_2_summary_2": "inflazioa",
	"bitcoin-vs-bonds::point_2_summary_3":
		"bonuen errentagarritasuna gainditzen duenean, bonuen jabeek urtero benetako erosteko ahalmena galtzen dute. Bitcoinen 21 milioiko muga ezin da inflazioaren bidez urtu.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Bonu-merkatuak krisialdietan izoztu daitezke — Silicon Valley Bank hondoratu zen, neurri batean, balioa galdu zuten bonuak zituelako. Ikusi nola",
	"bitcoin-vs-bonds::point_3_summary_2": "banku-iheseak",
	"bitcoin-vs-bonds::point_3_summary_3":
		" gertatzen diren eta zergatik saihesten dituen Bitcoinek. Bitcoinek 24/7 globalki aritzen da, likidezia-krisirik gabe.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Gobernu-bonuen enkanteek huts egin dezakete erosle nahikorik ez badago — ikusi",
	"bitcoin-vs-bonds::point_4_summary_2": "2022ko enkante ahula.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoinaren prezioa merkatu ireki globaletan etengabe aurkitzen da, huts egin dezakeen enkante zentralik gabe.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Bonuen errentagarritasuna erosketa-momentuan finkatzen da. Ekonomia hazi edo moneta hondoratzen bada ere, zure errentagarritasuna berdina izaten jarraitzen du.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoinek hazteko tarte handia du, adopzioa hazten den heinean eta eskariak eskaintza finkoa topatzen duen heinean.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Bonu gehienak bankuen edo brokerren bitartez gordetzen dira, kontrapartiaren arriskua gehituz. Bitcoin norberak",
	"bitcoin-vs-bonds::point_6_summary_2": "zorroan",
	"bitcoin-vs-bonds::point_6_summary_3":
		" gorde dezake — arrisku hori guztiz ezabatuz.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Bonuak guztiz gobernuek zorra itzultzeko mendekotasunean daude. Gobernuak zorra lehenesten badu edo inflazioaren bidez urtzen badu, bonuen jabeek galtzen dute.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin modu independentean funtzionatzen du edozein gobernu edo botere politikotik.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">eskudiruaren</span> arteko aldea",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin mundu osoan Interneten bidez mugitzen da minutu gutxitan. Eskudirua fisikoki eskatzen du presentzia edo mezulari fidagarriak — ezin duzu billete bat posta elektronikoz bidali.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoinek edonon funtzionatzen du modu berean. Eskudirua geografia, truke-tasa eta onarpen lokalak mugatzen dute.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Gobernuek eskudirua gauetik goizera deuseztatu dezakete — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indiak</a> hori egin zuen 2016an. Baina deuseztapenik gabe ere, eskudiruak",
	"bitcoin-vs-cash::point_3_summary_2": "inflazioaren",
	"bitcoin-vs-cash::point_3_summary_3":
		"eraginez balioa galtzen du. Ezin da ezein gobernu edo botererik Bitcoin deuseztatu.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Eskudirua faltsutu daiteke, batzuetan modu oso sinesgarrian. Bitcoinek kriptografia erabiltzen du, faltsifikazioa matematikoki ezinezkoa bihurtuz.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoinek ez du botere zentralik. Eskudirua gobernuek jaulkitzen dute, eta horiek gehiago inprima dezakete, diseinuak aldatu edo billeteak kendu beren nahierara.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Eskudirua lapurretaren, sutearen, galeraren eta konfiskazioaren aurrean ahula da. Bitcoin ",
	"bitcoin-vs-cash::point_6_summary_2": "norberak modu seguruan gorde",
	"bitcoin-vs-cash::point_6_summary_3":
		" dezake zure telefonoan edo hardware-zorroan.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin 100 milioi satoshitan zati daiteke, edozein tamainatako mikro-ordainketa ahalbidetzen du. Eskudiruak gutxieneko balio nominalak ditu — ezin duzu zentimo bat erditik moztu.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">banku zentralen moneta digitalen (CBDC)</span> arteko aldea",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Inork ezin zaitu gelditu Bitcoin transakzioak egitetik. CBDC-ak gobernu eta banku zentralek ordainketa bakoitza kontrola dezaten diseinatuta daude, zure pribatutasuna eta askatasuna mugatuz.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoinek ez du inoiz iraungitzen eta ez du hileroko kuotarik. CBDC-ak iraungi daitezkeela programatu daitezke, etorkizunerako aurreztea eragotziz.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoinek 21 milioi BTC-ko muga finkoa du. CBDC-ek ez dute eskaintza-mugarik eta gobernuek diru-eskaintza beren nahierara handitzea ahalbidetzen dute — eraginez",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflazioa.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin helbideak ez daude zure benetako identitatearekin lotuta. CBDC-ak zuzenean lotzen dira gobernuak identifikatutako pertsonarekin, masiboki jazartzeko eta finantza-zentsurarako aukera emanez.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoinaren arauak hamarnaka mila nodo independentek kontrolatzen dituzte. CBDC-ak gobernu eta banku zentraletan zentralizatuta daude, sarearen gaineko erabateko kontrolarekin.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Edonork exekuta dezake Bitcoin nodo bat eta sarearen arauak egiaztatu. CBDC-ek ez diete erabiltzaileei nodoak exekutatzeko aukera ematen — botere zentrala fidatu behar duzu.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Norberak zainduriko Bitcoin ezin da inork izoztu. CBDC-ak diseinatuta daude gobernu eta banku zentralek istantean kontuak izoz ditzaten.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoinek zure diruaren gaineko erabateko kontrola ematen dizu, zure",
	"bitcoin-vs-cbdc::point_8_summary_2": "zorroan gordetzen baduzu.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC-ek gordetzaileen konfiantza eskatzen dute, hala nola, bankuak edo gobernuak, diruaren jabe direnak zure ordez.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoinaren diru-politika kodean finkatuta dago eta ezin da aldatu. CBDC-ak berrprograma daitezke politikarien nahierara, eraginez",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflazioa",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", diru gehiegi inprimatzen bada.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin inoiz eraikitako ordenagailu-sare seguruena da, eta inoiz ez da hackeatua izan. CBDC-ak bankuetan eta gobernuetan oinarritzen dira, kontaezin ahalakoak izan diren hackeatze asko jasan dituztenak.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">kriptomoneten</span> arteko aldea",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoinaren protokoloak gutxi aldatu da 2009az geroztik eta aurreikus daitezkeen arauak ematen ditu. Kripto-proiektu gehienek protokoloak, tokenomika edo forketan etengabe aldatzen dituzte bertsio berrietara.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoinek hamarnaka mila nodo independentetan funtzionatzen du mundu osoan. Kripto-proiektu gehienak fundazioek, enpresek edo garatzaile-talde txikiek kontrolatzen dituzte, aldaketa unilateralak egin ditzaketenak.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoinek 21 milioiko muga finkoa du — ondasun digital urriena. Kripto-proiektu gehienek eskaintza mugagabea dute edo token berriak nahierara sortzeko mekanismoak, jabeak urtuz.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoinek helburu bakarra du: peer-to-peer diru digitala. Edonork ulertzen du eta edonork erabil dezake. Kriptomoneta gehienek kontratu adimendun konplexuak edo DeFi-a dituzte, segurtasunez erabiltzeko ezagutza tekniko berezia eskatzen dutenak.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoinaren lan-froga sistemak 15 urte baino gehiago funtzionatu du arrakastatsu erasorik jaso gabe kate nagusian. Kripto-proiektu gehienek ongi probatu ez diren adostasun-metodo esperimentalak erabiltzen dituzte.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin diru digitala da — balioaren gordailua eta truke-bidea. Kripto-token gehienak espekulatiboak dira, benetako balio argirik gabeko erabilera- edo gobernantza-tokenak.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin erasoaren aurrean indartzen da eta krisi, debeku eta kritika guztiak gainditu ditu. Kripto-proiektu gehienak presio arauemaile, tekniko edo merkatuaren aurrean hondoratzen dira.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoinek ez du CEO-rik, enpresarik edo huts-puntu bakarrik. Kripto-proiektu gehienak arrisku-kapitaleko inbertitzaileen, zuzendaritza-talde zehatz baten edo enpresa bakar baten biziraupenaren mende daude.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">artearen</span> arteko aldea",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Bitcoin bakoitza berdina eta trukagarria da. Arte-lan bakoitza berezia da — jatorri, historia, egoera eta leinu ezberdinek alderaketa zuzena oso zaila egiten dute.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoinek 24/7 merkatu global batean merkataritza egiten du, edonoren eskura. Arteak enkante-etxe, salerosle pribatu edo galeria espezializatuak behar ditu eta salmentek hilabeteak iraun ditzakete.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin erostea edo saltzeak % 1 baino gutxiago kostatzen du komisioetan, maiz askoz gutxiago. Arte-salmentek % 30-40 komisioak pilatzen dituzte erosleentzat, bitartekaritzak, aseguruak, garraioak eta autentifikazio-kuotak.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin 100 milioi satoshitan zati daiteke, edozein tamainatako transakzioetarako ezin hobea dena. Ezin duzu margolan baten zati bat izan edo eskultura baten izkina kontrapartiaren arriskurik gabe.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoinaren jabetza eta benetakotasuna edonork egiazta ditzake kriptografikoki blockchain-ean. Artearen autentifikazioa garestia, geldoa da eta faltsifikatzaileek erregularki iruzurtzen dute — lanaren balioa gauetik goizera suntsituz.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Ongi babesturiko Bitcoinek uholdeak, suteak, lurrikarak eta lapurretak gainditzen ditu. Artea edozein hondamendi fisikoren aurrean ahula da eta aseguruak gutxitan estaltzen du dena.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Interneteko konexioa eta diru apur bat duen edonork eros dezake Bitcoin. Artean inbertitzea praktikan mugatuta dago enkante eta ezagutza espezializatuetarako sarbidea duten bildumagile aberatsei.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">urrearen</span> arteko aldea",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin Interneten bidez istantean bidal daiteke kuota txikiekin. Urrea fisikoki bidali behar da jabetza transferitzeko.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin natiboki ondasun digitala da, Internet bidez transferi dezakezuna. Sareko urrea bonu digitala da — gordetzailearen promesa baino ez duzu, ez metala bera.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoinek 21 milioi BTC-ko muga finkoa du. Urrearen eskaintza <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">% 1,6 hazten da urtero</a>, zure partea txikituz — diru fiatarena baino gutxiago",
	"bitcoin-vs-gold::point_3_summary_2": "inflazioa",
	"bitcoin-vs-gold::point_3_summary_3":
		", baina hala ere inflazioa.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Urrearen prezioak igotzen direnean, urre gehiago meatzen da, prezioa berriro behera bultzatuz. Bitcoinaren eskaintza ez da elastikoa — prezioak gora egin arren, beti 21 milioi besterik ez dira egongo.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin sarea hamarnaka mila nodo independentek kontrolatzen dute. Urre fisikoaren zati handi bat biltegi handi batzuetan dago.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Edonork egiazta dezake benetako Bitcoin nodo osoa exekutatuz — aplikazio bat da besterik ez. Urre fisikoa egiaztatzeko urtu egin behar da; barruan tungstenoa egon daiteke.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin 100 milioi satoshitan zati daiteke, edozein tamainatako erosketetarako ezin hobea dena. Urrea ezin da erraz zatitu transakzio txikiagoetarako.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">higiezinen</span> arteko aldea",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin istantean mugitzen da mundu osoan. Higiezinak kokapen zehatz batera lotuta daude eta arrisku ekonomiko, politiko eta ingurumenekoen aurrean zabalik.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin 100 milioi satoshitan zati daiteke. Higiezinak ezin dira partzialki saldu — ezin duzu sukaldea saldu edo logela erdia erosi.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoinek sare deszentralizatu batean funtzionatzen du, ezein gobernuk kontrola ezin duena. Higiezinak oso erregulatuta daude — zonifikazioa, alokairuaren kontrola, nahitaezko desjabetzea eta konfiskazioa, guztiak aplikagarri dira.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoinek ez du mantenurik behar. Higiezinek konponketak, berritzeak, aseguruak, jabetza-kudeaketa eta maizterren arazoak behar dituzte.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin ez dago etengabe zergapetuta — kapital-irabazien zergak saltzerakoan bakarrik ordaindu behar dira. Higiezinek urteroko jabetza-zergak ordaindu behar dira, diru-sarreraren berri gabe.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Ongi babesturiko Bitcoinek suteak, uholdeak eta lurrikarak gainditzen ditu. Higiezinak hondamendi guztien aurrean ahulak dira eta aseguruak gutxitan estaltzen du dena.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Bitcoin bakoitza berdina eta trukagarria da. Higiezin bakoitza berezia da, prezioa eta alderaketa zailduz.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoinek globalki 24/7 merkataritza egiten du Interneteko konexioa duen edonorentzat. Higiezinen salmentak tokiko erosleei mugatuta daude eta hilabeteak iraun ditzakete paperak ixteko.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoinek norbanako bakoitzari jabetza indibidual zuzena ahalbidetzen dio. Higiezinak inbertsio gisa erostea, bizileku nagusiaz gain, etxebizitzen prezioak igotzen ditu, eskuragarritasuna murrizten du eta etxebizitza-krisia sortzen du.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">akzioen</span> arteko aldea",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin zuzeneko ondasuna da, guztiz jabetzen duzuna. Akzioak enpresa bateko partaidetza dira — beren balioa zuzendaritzaren, etekinaren eta zuk kontrolatu ezin dituzun erabakien araberakoa da.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoinek 21 milioi BTC-ko muga finkoa du. Enpresek akzio berriak jaulki ditzakete edozein unetan eta lehendik dauden akzionistak urtu — diru fiatak",
	"bitcoin-vs-stocks::point_2_summary_2": "inflazioaren",
	"bitcoin-vs-stocks::point_2_summary_3":
		" bidez eskudirua urtzen duen moduan. Bitcoinekin zure partea inoiz ez da txikitzen.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoinek ez du CEO-rik edo huts-puntu bakarrik. Akzioek zuzendaritzarekiko menpekotasun handia dute — erabaki txar batek edo pertsona giltzarriaren irteerak prezioa hondoratu dezake.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoinaren prezioa merkatu global irekietatik dator. Akzioen balorazioa P/E bezalako metriketan oinarritzen da, gaineko balioa duten akzioak ezkuta ditzaketenak.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoinek 24/7 mundu osoan merkataritza egiten du. Burtsek lanegunetan merkataritza-ordutegietan bakarrik daude irekita.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Bitcoinekin",
	"bitcoin-vs-stocks::point_6_summary_2": "norberaren zaintzara",
	"bitcoin-vs-stocks::point_6_summary_3":
		" igaro zaitezke aplikazio sinple batekin — brokerrik behar ez dugu. Akzioak brokerretan gordetzen dira, kontrapartiaren arriskuaren aurrean jartzen zaituzte hondoratzen badira.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoinaren eskaintza finkoak fidagarritasunez babesten du inflazioaren aurka. Akzio batzuek inflazioa gainditzen dute, beste batzuek ez — ez dago bermerik.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"<span class=\"orange\">Bitcoin</span> eta <span class=\"asset\">Visa</span> arteko aldea",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin sare irekia da, edonork baimenik gabe atxiki daiteke. Visa itxita dagoen sistema bat da, finantza-erakundeek kontrolatua, sarbidea uka dezaketenak — bereziki banku-konturik gabekoentzat edo banku-sarbide mugatua dutenentzat.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin transakzioek ez dute merkatariaren kuotarik. Visa-k merkatariei % 3 inguru kobratzen die transakzio bakoitzeko — zure enpresak dirua aurreztu dezake",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin ordainketak",
	"bitcoin-vs-visa::point_2_summary_3": " onartuz.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Bitcoin transakzio bakoitza blockchain publiko eta egiaztagarrian dago. Visa-k sistema itxi eta jabedun bat kudeatzen du, non bezeroek ezin duten modu independentean ezer egiaztatu.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin ez dago agintaritza zentral batek izoztu ezin duena. Visa-k kontuak izoztu ditzake, transakzioak blokeatu edo zerbitzuari edozein unetan uko egin.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin azken likidazioa da — duzuna bakarrik gastatzen duzu. Kreditu-txartelek zorra sortzen dute, urteroko % 25 gainditzen duten interes-tasekin.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoinek aukera ematen dizu",
	"bitcoin-vs-visa::point_6_summary_2": "norberaren zaintzara",
	"bitcoin-vs-visa::point_6_summary_3":
		" igarotzeko, bankurik edo ordainketa-prozesagailurik gabe. Kreditu-txartelek beti eskatzen dituzte bitartekariak.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoinek 24/7 mundu osoan funtzionatzen du, ordutegirik gabe. Visa-k lan-orduak, mantentze-leihoak eta transakzioak blokeatu ditzaketen muga geografikoak ditu.",
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
		`translate-rest-part1 (eu): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
