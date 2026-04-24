#!/usr/bin/env node
/**
 * Basque (Euskara) manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli kontabilitate-zerbitzuak",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Bitcoin ordainketen kontabilitaterako gida sinplea — zorro hibridoak, kostu-oinarria, kapital-irabaziak eta noiz deitu zure kontulariari.",
	"business/accounting::accounting_s1_c1":
		"Bitcoin onartzeko modurik errazena zorro hibrido bat erabiltzea da: jasotako Bitcoinaren % 100 automatikoki dolarretara (edo zure tokiko monetara) saltzen du, ordainketa iristen den bezain laster.",
	"business/accounting::accounting_s1_c2":
		"Konfigurazio horrekin, zure kontabilitatea gaur egungoaren berdina ikusten da — azken zenbatekoa dolarretan dago beti. Kostu-oinarririk ez, kapital-irabazirik ez, kalkulu-orri berririk ez.",
	"business/accounting::accounting_s2":
		"Bitcoin pixka bat mantentzen baduzu: jarraitu zure kostu-oinarria",
	"business/accounting::accounting_s2_c1":
		"Enpresa batzuek jasotzen duten Bitcoinaren zati bat mantentzea erabakitzen dute, dena automatikoki bihurtu beharrean. Zu horietako bat bazara, urrats gehigarria kostu-oinarria jarraitzea da — Bitcoin ordainketa bakoitzaren dolar-balioa jaso zenuen egunean.",
	"business/accounting::accounting_s2_c2":
		"Zure enpresan Bitcoinetan soilik pentsatzen baduzu ere, zerga-agintaritza gehienek dolar-balioa ere jakinaraztea eskatzen dute. Albiste ona: bi zenbaki besterik ez dira transakzio bakoitzeko — jasotako Bitcoin kopurua eta egun horretako dolar-balioa.",
	"business/accounting::accounting_s2_c3":
		"Erabili beheko tresnak bilaketak automatizatzeko, egunero prezioak egiaztatu behar izan ez dezazun.",
	"business/accounting::accounting_s3":
		"Gordetako Bitcoin gastatzea edo saltzea",
	"business/accounting::accounting_s3_c1":
		"Ordainketa bakoitza automatikoki dolarretara bihurtzen baduzu, salto egin zati honi — ez doakizu zuri.",
	"business/accounting::accounting_s3_c2":
		"Bitcoin pixka bat mantendu duzu eta geroago gastatzea edo saltzea erabakitzen duzu, gehitu salmenta-prezioa kalkulu-orri berean kostu-oinarriarekin. Jaso zenueneko Bitcoinaren kostuaren eta gastatzen duzunean edo saltzen duzunean duen prezioaren arteko aldea kapital-irabazi edo galera da.",
	"business/accounting::accounting_s3_c3": "Bi adibide azkar:",
	"business/accounting::accounting_s4":
		"Bitcoin ulertzen duen profesional baten bila?",
	"business/accounting::accounting_s4_c1":
		"Nahiago baduzu beste norbaitek hori kudeatzea — edo zure Bitcoin kontabilitatea zorro hibrido batek kudeatu baino konplexuagoa bada — biziki gomendatzen dugu Satoshi Pacioli Accounting Services, Bitcoin kontabilitatean enpresentzako espezializaturiko enpresa.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin kontabilitatea zure enpresarentzat",
	"business/accounting::accounting_card_bpr_label": "BITCOINAREN PREZIOA",
	"business/accounting::accounting_card_bpr_title":
		"Bilatu Bitcoinaren prezio egungoak edo historikoak dolarretan",
	"business/accounting::accounting_card_pacioli_label":
		"BITCOIN KONTULARIA",
	"business/accounting::accounting_card_spreadsheet_label":
		"INPORTATU EXCELERA",
	"business/accounting::accounting_card_spreadsheet_title":
		"Inportatu Bitcoin prezioak automatikoki Excelera",
	"business/accounting::accounting_card_wallets_label":
		"ZORRO HIBRIDOAK",
	"business/accounting::accounting_card_wallets_title":
		"Ikusi enpresentzat gomendatzen ditugun zorroak",
	"business/accounting::accounting_disclaimer":
		"Gida hau informatzeko helburuekin bakarrik da eta ez da zerga-aholkularitza. Zure egoera zehatzerako zerga-aholkua jasotzeko, galdetu kontulari kualifikatu bati.",
	"business/accounting::accounting_disclaimer_label": "Erantzukizun-eza",
	"business/accounting::accounting_example_feb_1": "Otsailaren 1a",
	"business/accounting::accounting_example_gain_badge":
		"Kapital-irabazia",
	"business/accounting::accounting_example_gain_explain":
		"10 $-ko kapital-irabazia erregistratzen duzu.",
	"business/accounting::accounting_example_jan_1": "Urtarrilaren 1a",
	"business/accounting::accounting_example_loss_badge":
		"Kapital-galera",
	"business/accounting::accounting_example_loss_explain":
		"10 $-ko kapital-galera erregistratzen duzu.",
	"business/accounting::accounting_example_received_label": "Jasoa",
	"business/accounting::accounting_example_sold_label":
		"Saldua edo gastatua",
	"business/accounting::accounting_hero_subtitle":
		"Zure enpresan Bitcoin onartzeak ez du zertan zure kontabilitatea konplikatu. Hona hemen bertsio laburra — gehi erraztuko duten tresnak eta adituak.",
	"business/accounting::accounting_intro_c1":
		"Dagoeneko eskudirua edo txartelak onartzen badituzu, zure enpresaren kontabilitatera Bitcoin gehitzea uste baino errazagoa da. Bi bide dituzu: Bitcoin ordainketa bakoitza automatikoki dolarretara bihurtzea iristen den bezain laster (kontabilitate berririk ez behar), edo zati bat Bitcoinetan mantentzea (zenbaki gehigarri batzuk jarraitu behar dituzu).",
	"business/accounting::accounting_intro_c2":
		"Gida honek bi bideak azaltzen ditu — zure enpresarako egokia aukeratu ahal izateko eta konfiantzarekin Bitcoin onartzen hasteko.",
	"business/accounting::accounting_s1":
		"Bide erraza: dolarretara automatikoki bihurtzea",
	"business/accounting::accounting_s3_c6":
		"Eta kito. Oinarrizko matematika balioa igotzen edo jaisten duen edozein beste ondasunetarako erabiliko zenukeena da.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoinaren prezio egungoa eta historikoa dolarretan",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin kontabilitatea enpresentzat",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — kripto-prezioak Excelera inportatu",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Merkatariek Bitcoin onartzen hasi aurretik normalean egiten dituzten galderei erantzun laburrak — kuotak, likidazioa, zorroak, itzulketak, kostuak eta askoz gehiago.",
	"business/faq::faq_intro_c1":
		"Egin klik beheko edozein galderan erantzuna agertzeko. Bitcoin onartzen hasteko prest zaudenean, orrialdearen amaierako enpresa-tresnek urratsez urrats gidatuko zaituzte.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "KONTABILITATEA",
	"business/index::biz_label_faq": "MAIZ EGITEN DIREN GALDERAK",
	"business/index::biz_label_maps": "MERKATARIEN MAPAK",
	"business/index::biz_label_rewards": "SARIAK",
	"business/index::biz_label_stickers": "PEGATINAK",
	"business/index::biz_label_wallets": "ZORROAK",
	"business/index::biz_meta_description":
		"Onartu Bitcoin zure enpresan kuota baxuagoekin, istantaneoki likidazio, itzulketarik gabe eta bezero gehiago iritsiz.",
	"business/index::business_hero_subtitle":
		"Onartu ordainketak kuota baxuagoekin, likidatu istantean eta milioika bezero berrira iritsi — kontraturik edo kostu ezkuturik gabe.",
	"business/index::business_intro_c1":
		"Bitcoinek zure enpresari ordainketak jasotzeko modu azkarragoa, merkeagoa eta pribatuagoa ematen dio. Bitartekaririk ez. Itzulketarik ez. Konturaturik ez. Segundoetan likidatzen den dirua, bezerorengandik zuzenean zuretzat.",
	"business/index::business_intro_c2":
		"Behean zergatik den Bitcoin ona enpresa batentzat bertsio laburra dago — eta azpian, gaur bertan hasteko behar dituzun tresna guztiak.",
	"business/index::business_resources_heading":
		"Bitcoin onartzeko behar duzun guztia",
	"business/index::business_resources_intro":
		"Zabartu baliabide hauek zure erritmoan. Bakoitza gida praktiko laburra da.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Esan iezaguzu zure enpresari buruz",
	"business/maps::biz_maps_form_intro":
		"Zure xehetasun gutxi batzuk behar ditugu mapan jartzeko. Helbide-datuak zure enpresa mapetara bidaltzeko behar den bitartean bakarrik gordetzen ditugu.",
	"business/maps::biz_maps_hero_subtitle":
		"Gehitu zure enpresa BTC Map doako mapan — Bitcoin onartzen duten merkatarien direktorio global irekia — hurbil dauden Bitcoin erabiltzaileek zu aurki eta zure enpresan Bitcoin gasta dezaten.",
	"business/maps::biz_maps_hero_title":
		"Jarri zure enpresa Bitcoin merkatarien mapetan",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin erabiltzaileek aktiboki bilatzen dituzte beren dirua gastatzeko lekuak. Mapan egoteak zure enpresa hurbil dagoen eta jateko, erosteko edo geratzeko lekuren bat bilatzen ari den Bitcoin erabiltzaile guztien bistan jartzen du — guztiz doan.",
	"business/maps::biz_maps_intro_c2":
		"Bete beheko formulario laburra eta zure enpresa BTC Map-en eta beste Bitcoin merkatarien mapetan aurkeztuko dugu.",
	"business/maps::biz_maps_meta_description":
		"Gehitu zure enpresa BTC Map doako mapan eta beste Bitcoin merkatarien mapetan, hurbil dauden Bitcoin erabiltzaileek zu aurki zaitzaten.",
	"business/maps::biz_maps_placeholder_address": "Kalea eta etxe-zenbakia",
	"business/maps::biz_maps_placeholder_category":
		"Kategoria (adibidez jatetxea, kafetegia, hotela)",
	"business/maps::biz_maps_placeholder_city": "Hiria",
	"business/maps::biz_maps_placeholder_country": "Herrialdea",
	"business/maps::biz_maps_placeholder_name": "Enpresaren izena",
	"business/maps::biz_maps_placeholder_region":
		"Eskualdea / probintzia / estatua",
	"business/maps::biz_maps_placeholder_website": "Webgunea (aukerakoa)",
	"business/maps::biz_maps_view_map_cta": "Ikusi BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Ikusi BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Eskerrik asko zure enpresa bidaltzeagatik. Laster Bitcoin merkatarien mapetan jarriko zaitugu.",
	"business/maps-success::biz_maps_success_hero_title":
		"Eskaera jasota 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Zure enpresa BTC Map-en eta beste Bitcoin merkatarien direktorioetan gehituko dugu 1–2 asteren barruan. Eskaera bakoitza eskuz berrikusten dugu mapetan zehaztasuna mantentzeko.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Zure sarrera online jartzen denean, hurbil dauden Bitcoin erabiltzaileek zure enpresa aurkituko dute eta Bitcoin gastatzera etorriko dira.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Zer gertatzen da hurrengo",
	"business/maps-success::biz_maps_success_view_c1":
		"Zain zauden bitartean, ikusi BTC Map mundu osoan Bitcoin onartzen ari diren enpresen sare hazkorra ikusteko.",
	"business/maps-success::biz_maps_success_view_header":
		"Ikusi non agertuko zaren",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Deskargatu ingelesezko pegatina-fitxategiak zure «Hemen Bitcoin onartzen dugu» pegatinak inprimatzeko.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Inprimatu zure «Hemen Bitcoin onartzen dugu» pegatinak ingelesez, zure bezeroei Bitcoin onartzen duzula esateko.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Deskargatu ingelesezko «Hemen Bitcoin onartzen dugu» pegatina-fitxategiak",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Eskerrik asko «Hemen Bitcoin onartzen dugu» pegatina-fitxategiak zure hizkuntzan eskatzeagatik.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Eskaera jasota 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Zure pegatina-fitxategiak sortu eta argitaratuko ditugu 3–4 asteren barruan. Prest daudenean, gure pegatina-fitxategien orritik deskargatu ahal izango dituzu doan inprimatzeko.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Pegatina-fitxategiak multzoka argitaratzen ditugu, beraz, astetxo batzuk pasa daitezke zure hizkuntza aktibatu aurretik. Eskerrik asko zure pazientziagatik!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Zer gertatzen da hurrengo",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Eskatu handizka",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Eskatu beste pakete doako bat",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Zure doako «Hemen Bitcoin onartzen dugu» pegatinak 2–4 asteren barruan jasoko dituzu gutun-azal zuri soil batean 3 pegatinekin.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Zure pegatinak bidean daude 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"3 pegatina zure enpresarako nahikoa ez badira, beste pakete doako bat eskatzeko askatasuna duzu — edo handizka eskatu guk erabiltzen dugun inprimategi berberari.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Pegatina gehiago behar?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Zure atari nagusian edo erakusleihoan, bezeroek sartu baino lehen ikus dezaten",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Kutxaren ondoan, ordainketa-terminalean edo bezeroek ordaintzen duten lekuan",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Menuetan, prezio-zerrendetan edo eskupeko-ontzian",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ez jarri zureak ez diren lekuetan edo pegatinak jartzeko baimenik ez duzun lekuetan",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Pegatinak jartzeko leku onak",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Jakinarazi zure bezeroei Bitcoin onartzen duzula. Eskatu «Hemen Bitcoin onartzen dugu» pegatina-pakete doakoa zure establezimenduan jartzeko.",
	"business/stickers::biz_stickers_hero_title":
		"Doako «Hemen Bitcoin onartzen dugu» pegatinak",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin onartzea lanaren erdia baino ez da — zure bezeroek ere jakin behar dute. «Hemen Bitcoin onartzen dugu» pegatina txiki hauek atari nagusiaren, kutxaren, menuaren edo bezeroek ordaintzen duten edozein lekuen ondoan jartzeko diseinatuta daude.",
	"business/stickers::biz_stickers_intro_c2":
		"AEBetako edo Kanadako edozein helbidera pakete doako bat bidaltzen dugu, edo zure pegatinak ere inprimatu ditzakezu mundu osoan.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — doan postaz",
	"business/stickers::biz_stickers_option_print":
		"🌍 Mundu osoa — inprimatu zerorrek",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 AEB — doan postaz",
	"business/stickers::biz_stickers_placeholder_translation1":
		"«Bitcoin Accepted Here» esaldiaren itzulpena",
	"business/stickers::biz_stickers_placeholder_translation2":
		"«Scan to learn why Bitcoin is good for business.» esaldiaren itzulpena",
	"business/stickers::biz_stickers_print_c1":
		"Zure «Hemen Bitcoin onartzen dugu» pegatinak inprimatu ahal izango dituzu, edonon bizi zarela. Egin klik behean zure hizkuntzan pegatina-fitxategiak eta inprimatze-argibideak deskargatzeko.",
	"business/stickers::biz_stickers_print_header":
		"Inprimatu zure pegatina-fitxategiak zerorrek",
	"business/stickers::biz_stickers_request_c1":
		"Bete beheko formularioa «Hemen Bitcoin onartzen dugu» pegatina-fitxategiak zure tokiko hizkuntzan eskatzeko. Prest daudenean jakinaraziko dizugu.",
	"business/stickers::biz_stickers_request_header":
		"Ez duzu zure hizkuntza ikusten?",
	"business/stickers::biz_stickers_step_description":
		"Pakete doakoak bidaltzen ditugu AEBetako eta Kanadako helbideetara. Munduko beste leku batzuetan zure pegatinak zerorrek inprimatu ahal izango dituzu.",
	"business/stickers::biz_stickers_step_header":
		"Nola nahi dituzu zure pegatinak?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Bitcoin zorro guztiek elkarrekin funtzionatzen dute — aukeratu zure enpresarako egokiena. Doan, istantaneoko likidazioekin, itzulketarik gabe.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin soilik den Lightning zorroa",
	"business/wallets::sources_ibex":
		"IBEX — Lightning ordainketen azpiegitura",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin ordainketa-prozesatzailea",
	"business/wallets::sources_square":
		"Square — onartu Bitcoin ordainketak",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin fakturazioa enpresentzat",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin zorroak doakoak dira. Aukeratu zure enpresarako egokiena — presentzialki, online edo faktura bidez — eta hasi Bitcoin onartzen minutu gutxitan.",
	"business/wallets::wallets_section_invoice":
		"Bezeroei faktura egiten dieten enpresentzako zorroak",
	"business/wallets::wallets_section_invoice_intro":
		"Bezeroei faktura egiten badiezu (aholkularitza, lan autonomoa, B2B zerbitzuak), erabili faktura-ingurunean eraikitako zorro bat. Bezeroak Bitcoin faktura ordainduko du klik gutxi batzuekin.",
	"business/wallets::wallets_section_multiple":
		"Langile ugariko enpresentzako zorroak",
	"business/wallets::wallets_section_multiple_intro":
		"Kutxan ordainketak jasotzen dituen taldea baduzu, aukeratu langile anitzen saioa onartzen duen zorroa — langile bakoitzak bere PINa izan dezan eta zeinek zein ordainketa jaso duen argi jarrai dezazun.",
	"business/wallets::wallets_section_online":
		"Online enpresentzako zorroak",
	"business/wallets::wallets_section_online_intro":
		"Online saltzen ari zara? Zorro hauek zure sareko dendarekin konektatzen dira eta mundu osoko bezero guztien Bitcoin ordainketak onartzen dituzte — itzulketarik gabe eta merkatari-konturik behar ez izan gabe.",
	"business/wallets::wallets_section_sole":
		"Enpresaburu bakarrarentzako zorroak",
	"business/wallets::wallets_section_sole_intro":
		"Denda, kafetegia, estudioa edo zerbitzua bakarrik kudeatzen baduzu, zorro hauetako edozein aproposa da zuretzat. Aukeratu Bitcoin ordainketak mantendu nahi dituzun ala ordainketa bakoitzaren zati bat automatikoki zure tokiko monetara bihurtu.",
	"business/wallets::wallets_strike_note":
		"Strike Business-ek Bitcoin eta Lightning ordainketak kuotarik gabe eta istantaneoko likidazioekin onartzen uzten dizu. Presentziako, online eta faktura bidezko ordainketak onartzen ditu, tokiko monetara automatikoki bihurtzeko aukerarekin.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Hemen Bitcoin onartzen dugu",
	"business/why::why_good_for_you":
		"Zergatik da ona zuretzat ere Bitcoin",
	"business/why::why_learn_more_lowercase": "Jakin gehiago →",
	"business/why::why_s1_c1":
		"Inflazioa diru gehiago inprimatzen edo hutsetik sortzen denean gertatzen da. Horrek zure poltsikoan dagoen diruak denborarekin balioa galtzea eragiten du — horregatik igotzen dira prezioak urtez urte.",
	"business/why::why_s1_c2":
		"Bitcoinek eskaintza finkoa du: 21 milioi moneta. Ezein gobernu, banku edo enpresak ezin du gehiago inprimatu. Bitcoinetan dituzun aurrezkiek balioa mantentzen dute denborarekin, isilean galdu beharrean.",
	"business/why::why_s2_c1":
		"Azken urteotan AEBetako banku asko hondoratu dira banku-ihesen eraginez. Bezero gehiegik batera dirua atera nahi izan zutenean, bankuek ez zuten nahikoa eskudiru guztiei ordaintzeko.",
	"business/why::why_s2_c2":
		"Zure dirua gordetzeaz gain, bankuek horren zati handi bat mailegatzen eta inbertitzen dute. Inbertsio horiek huts egiten badute — edo gordailugileek konfiantza galtzen badute — bankua hondoratu daiteke eta zure gordailuak izoztu edo galdu egin daitezke.",
	"business/why::why_s2_c3":
		"Bitcoinekin zure dirua zure zorroan zuzenean mantendu dezakezu. Bankurik ez. Bitartekaririk ez. Banku-iheserik ez.",
	"business/why::why_s3_c1":
		"Kreditu-txartelek, PayPal-ek edo banku-kontu tradizionalek ez bezala, Bitcoinek ez du inoren baimenik behar.",
	"business/why::why_s3_c2":
		"Inork ezin du zure kontua izoztu, ordainketa bat blokeatu edo saretik kanporatu. Historian lehen finantza-sistema da erabili ahal duzuna, zentsura edo konfiskazioaren beldurrik gabe.",
	"business/why::why_s4_c1":
		"Bitcoin sarritan gaizki ulertua izaten da, baina isilean gauza on asko egiten du munduan.",
	"business/why::why_s4_c2":
		"Giza eskubideen aldeko ekintzaileei askatasunaren aldeko borrokan lagundu die, zabortegietako eta petrolio-putzuetako metano-isurpenak murriztu ditu, sare elektrikoak egonkortu ditu eta ondasun publikoak finantzatu ditu, hala nola parke nazionalak.",
	"business/why::why_biz_s1":
		"Kuota baxuagoak, enpresarentzat gehiago",
	"business/why::why_biz_s1_c1":
		"Bitcoin ordainketek salmenta bakoitzaren % 2–3 hartzen duten bankuak eta txartel-konpainiak saihesten dituzte. Enpresak ordaintzen duzunetik gehiago mantentzen du — horrek zuretzat prezio hobeak eta zerbitzu hobea esan nahi dute maiz.",
	"business/why::why_biz_s2":
		"Istantaneoko likidazioa, itzulketarik gabe",
	"business/why::why_biz_s2_c1":
		"Bitcoin ordainketak segundoetan likidatzen dira, zuzenean zure zorrotik enpresara. Ez duzu egunak itxaron behar bankuak dirua askatu arte, eta ez daude itzulketa-eztabaida garestirik — horrek esan nahi du enpresak bezeroei arreta eman diezaiekeela, iruzurrarekin borrokatu beharrean.",
	"business/why::why_biz_s3":
		"Doako onarpena, denontzat irekia",
	"business/why::why_biz_s3_c1":
		"Enpresarentzat Bitcoin onartzeak ez du kontraturik, hileroko kuotarik edo abiarazte-kosturik behar. Eta mundu osoko milioika Bitcoin erabiltzailek onartzen duten merkatariak aktiboki bilatzen ari dira — enpresa horri ikusgarritasun doakoa emanez bezero berrientzat.",
	"business/why::why_business_cta_intro":
		"Enpresa bat duzu eta Bitcoin onartzen hasi nahi duzu?",
	"business/why::why_business_cta_link":
		"Ikusi nola funtzionatzen duen →",
	"business/why::why_for_business":
		"Zergatik da ona Bitcoin enpresa honentzat",
	"business/why::why_for_business_intro":
		"Bitcoin onartuz, enpresa honek salmenta bakoitzaren gehiago mantentzen du, ordainketak istantean jasotzen ditu itzulketarik gabe eta Bitcoin erabiltzaileen audientzia globala iristen du — kontraturik edo hileroko kuotarik gabe.",
	"business/why::why_good_for_you_intro":
		"Bitcoin ez da ona kutxan bakarrik — diru-mota hobea da, zure aurrezkiak, pribatutasuna eta transakzioak egiteko askatasuna babesten dituena. Hona hemen laburpen azkarra.",
	"business/why::why_hero_subtitle":
		"«Hemen Bitcoin onartzen dugu» pegatina bat eskaneatu berri duzu. Hona hemen zergatik den albiste ona — enpresa honentzat eta zuretzat.",
	"business/why::why_intro_c1":
		"Zauden enpresak Bitcoin onartzen du — ordainketa-sare moderno, kode irekikoa, mundu osoko edonork erabili dezakeena, bankuek eta bitartekariek zati bat hartu gabe.",
	"business/why::why_intro_c2":
		"Behean enpresa honek Bitcoin onartzea zergatik den ona bertsio laburra dago, gehi bezero gisa Bitcoin erabiltzea zergatik den ona zuretzat.",
	"business/why::why_next_business_label": "ONARTU BITCOIN",
	"business/why::why_next_business_title":
		"Onartu Bitcoin zure enpresan",
	"business/why::why_next_buy_label": "EROSI BITCOIN",
	"business/why::why_next_buy_title": "Erosi zure lehen Bitcoin",
	"business/why::why_next_learn_label": "IKASI GEHIAGO",
	"business/why::why_next_learn_title": "Ikasi Bitcoini buruz gehiago",
	"business/why::why_next_wallet_label": "LORTU ZORROA",
	"business/why::why_next_wallet_title":
		"Lortu zure Bitcoin zorroa",
	"business/why::why_whats_next_heading": "Nora aurrera?",
	"business/why::why_whats_next_intro":
		"Bitcoin pegatina eskaneatzen duzun lehen aldia bada, hauek dira joateko leku baliagarrienak.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer (zuzenean erabiltzaileen artean)",
	"buy::buy_bitcoin_guide": "Nola erosi Bitcoin",
	"buy::buy_step_1_header": "Aukeratu zure herrialdea",
	"buy::buy_step_2_header": "Aukeratu zure ordainketa-metodoa",
	"buy::buy_step_3_header": "Zure erosketa-aukerak",
	"buy::buy_step_4_header": "Gorde zure Bitcoin modu seguruan",
	"buy::buy_header_subtitle":
		"Zure lehen Bitcoin erosteko urratsez urratseko gida sinplea.",
	"buy::buy_howto_name": "Nola erosi Bitcoin",
	"buy::buy_meta_description":
		"Ikasi Bitcoin modu seguruan erosten gure urratsez urratseko gidarekin. Aukeratu zure herrialdea eta ordainketa-metodoa zuretzat Bitcoin erosteko aukerarik onenak aurkitzeko.",
	"buy::buy_step_1_eyebrow": "1. urratsa",
	"buy::buy_step_2_eyebrow": "2. urratsa",
	"buy::buy_step_3_eyebrow": "3. urratsa",
	"buy::buy_step_4_eyebrow": "4. urratsa",
	"buy::buy_storage_cta_label": "Hurrengo urratsa",
	"buy::sources_bisq":
		"Bisq — deszentralizatutako peer-to-peer Bitcoin burtsa",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Bitcoin kutxazainen direktorio globala",
	"buy::sources_kraken": "Kraken — Bitcoin burtsa ospetsua",
	"buy::sources_relai":
		"Relai — Suitzako norberak zainduriko Bitcoin aplikazioa",
	"buy::sources_river":
		"River — Bitcoin soilik erosketa, meatzaritza eta zaintza",
	"buy::sources_strike_lightning":
		"Strike — Bitcoin erosketa Lightning sare-laguntzarekin",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin soilik dolar-kostuaren bataz bestekoa (DCA)",
	"buy::buy_bitcoin": "Erosi Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Gehitu hizkuntza",
	"common::common_next_buy_bitcoin": "Erosi Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Ikasi nola erosi Bitcoin modu seguruan",
	"common::common_next_calculate": "Kalkulatu zure inflazioa",
	"common::common_next_calculate_desc":
		"Ikusi nola eragiten duen inflazioak zure soldatan denborarekin",
	"common::common_next_get_wallet": "Lortu zorroa",
	"common::common_next_get_wallet_desc":
		"Lortu zure lehen Bitcoin zorroa — doakoa da",
	"common::common_next_keep_learning": "Jarraitu ikasten",
	"common::common_next_keep_learning_desc":
		"Ikusi nola egiten duen Bitcoinek mundua hobea",
	"common::common_source_bls_cpi":
		"AEBetako Lan Estatistiken Bulegoa — kontsumo-prezioen indizea (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — diru-eskaintza (kategoriaka indizea)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «Ogasun-enkante batek huts egin dezake?»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Zer hurrengo?",
	"common::common_sticker_files_mission_5": "eskatu paketea",
	"common::common_site_tagline": "Bitcoin-hezkuntza denontzat.",
	"common::common_source_btc_map":
		"BTC Map — Bitcoin onartzen duten merkatarien direktorio mundiala",
	"common::common_source_btcpayserver":
		"BTCPay Server — kode irekiko auto-ostalaritzako doako Bitcoin ordainketa-prozesatzailea",
	"common::common_source_oshi":
		"Oshi — Bitcoin sari-plataforma merkatarientzat",
	"common::common_source_strike_business":
		"Strike — Bitcoin eta Lightning ordainketak enpresentzat",
	"common::common_sources_group_bitcoin": "Bitcoin datuak",
	"common::common_sources_group_cpi":
		"Inflazioa / kontsumo-prezioen indizea",
	"common::common_sources_group_debt": "Gobernu-zorra",
	"common::common_sources_group_money": "Diru-eskaintzaren datuak",
	"common::common_sources_group_stories": "Benetako bizitzako adibideak",
	"common::common_sticker_files_mission_6":
		"ingelesezko pegatina doakoak.",
	"common::common_sticker_files_next_flyers_label": "Esku-orriak",
	"common::common_sticker_files_next_flyers_title":
		"Inprimatu Bitcoin esku-orria",
	"common::common_sticker_files_next_languages_label":
		"Pegatina-fitxategiak",
	"common::common_sticker_files_next_languages_title":
		"Ikusi pegatina-fitxategiak beste hizkuntzetan",
	"common::common_sticker_files_print_these":
		"INPRIMATU HAUEK KLIK BATEZ",
	"common::common_sticker_name_bdhi_black":
		"«Bitcoin Doesn\u2019t Have Inflation» pegatina (beltza)",
	"common::common_sticker_name_bdhi_orange":
		"«Bitcoin Doesn\u2019t Have Inflation» pegatina (laranja)",
	"common::common_sticker_name_caution":
		"«Caution! Melting Ice Cube» Bitcoin pegatina",
	"common::common_sticker_name_cure_inflation":
		"«Cure Inflation» Bitcoin pegatina",
	"common::common_sticker_name_danger":
		"«Danger! Inflation Ahead» Bitcoin pegatina",
	"common::common_sticker_name_fix":
		"«Fix The Money, Fix The World» Bitcoin pegatina",
	"common::common_sticker_name_got_inflation":
		"«Got Inflation?» Bitcoin pegatina",
	"common::common_sticker_name_study":
		"«Study Bitcoin» pegatina",
	"common::common_sticker_name_warning":
		"«Warning! Inflation is Stealing Your Savings» Bitcoin pegatina",
	"common::common_sticker_name_what_if":
		"«What if your money didn\u2019t have inflation?» Bitcoin pegatina",
	"common::common_sticker_tips_heading": "Pegatinen gomendioak",
	"common::common_sticker_tips_intro":
		"Zure pegatinak inprimatu ondoren, jarri jendeak ikusten dituen lekuan! Leku onak:",
	"common::common_sticker_tips_list_1":
		"jendeak nabarituko dituen leku publikoak",
	"common::common_sticker_tips_list_2":
		"berehala kenduko ez dituzten lekuak (pegatinek ez dute kalte iraunkorrik eragiten)",
	"common::common_sticker_tips_list_3":
		"ongi atxikitzen diren gainazalak (metala, plastikoa, beira)",
	"common::common_sticker_tips_list_4":
		"EZ jabetza pribatuan, trafiko-seinaleetan, kutxazainetan edo gasolina-ponpetan",
	"common::common_stickers_printer_prefix": "Guk erabiltzen dugu",
	"common::common_stickers_printer_suffix":
		"baina edozein pegatina-inprimategi erabil dezakezu.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — kontsumo-prezioen indizea hiri-kontsumitzaile guztientzat",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — diru-eskaintza M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Kalkulatu zure inflazio-hutsunea",
	"compound-inflation-calculator::cic_cta_label": "Hurrengo urratsa",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Jakin ezazu zenbat igo behar den zure soldata inflazioarekin mantentzeko.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Ikertu gai gehiago",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Ikusi nola lotzen den Bitcoin diruari, askatasunari, energiari eta gehiagori.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Ikasi nola funtzionatzen duen inflazioak",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Nola inprimatu eta jarri Bitcoin esku-orri hauek",
	"flyers::flyers_hero_subtitle":
		"Doako Bitcoin esku-orri inprimagarriak. Jarri toki publikoetan jende gehiagok Bitcoini buruz ikas dezan.",
	"flyers::flyers_hero_title": "Inprimatu eta jarri Bitcoin esku-orriak",
	"flyers::flyers_next_get_stickers": "Zabaldu mezua",
	"flyers::flyers_next_get_stickers_desc":
		"Eskatu Bitcoin pegatina-pakete doakoa",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Parte hartu eta lagundu Bitcoin zabaltzen",
	"get-involved::get_involved_business_content_1":
		"Bitcoin ekonomia zirkularra eraikitzen lagundu nahi duzu? Modurik errazena tokiko enpresei Bitcoin ordainketak onartzen hasten laguntzea da.",
	"get-involved::get_involved_business_content_2":
		"Ba al dakizu ireki daitekeen enpresaren baten berri? Bideratu jabea gure orrira",
	"get-involved::get_involved_business_content_3":
		"Bitcoin enpresentzat.",
	"get-involved::get_involved_description":
		"Gure doako tresnek Bitcoinaren adopzioa errazten dute zabaltzea. Pegatinak, esku-orriak, «Hemen Bitcoin onartzen dugu» pegatinak enpresentzat eta edonork lagundu dezakeen kode irekia.",
	"get-involved::get_involved_header":
		"Parte hartu eta lagundu Bitcoin zabaltzen.",
	"get-involved::get_involved_intro_5":
		"Zuk lagundu dezakezu hori aldatzen. Doako tresna batzuk sortu ditugu Bitcoinek ekarri duen itxaropena zure komunitatean zabaltzen laguntzeko.",
	"get-involved::get_involved_biz_stickers_note":
		"Dagoeneko Bitcoin onartzen duzu? Jakinarazi zure bezeroei gure doako «Hemen Bitcoin onartzen dugu» pegatinekin. AEBetako edo Kanadako edozein helbidera pakete bat bidaltzen dugu, edo zerorrek ere inprimatu ahal izango duzu mundu osoan.",
	"get-involved::get_involved_card_biz_stickers_label":
		"«Hemen onartzen dugu» pegatinak",
	"get-involved::get_involved_card_biz_stickers_source":
		"Iturria: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Doako «Hemen Bitcoin onartzen dugu» pegatinak zure enpresarentzat",
	"get-involved::get_involved_card_business_label":
		"Bitcoin enpresentzat",
	"get-involved::get_involved_card_business_source":
		"Iturria: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Enpresa batek Bitcoin ordainketak onartzeko behar duen guztia",
	"get-involved::get_involved_card_flyers_label": "Inprimagarri esku-orriak",
	"get-involved::get_involved_card_flyers_source":
		"Iturria: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Deskargatu eta inprimatu Bitcoin esku-orri doakoa",
	"get-involved::get_involved_card_github_label": "Kode irekia",
	"get-involved::get_involved_card_github_source": "Iturria: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Lagundu bitcoin.rocks GitHuben",
	"get-involved::get_involved_card_stickers_label":
		"Doako pegatinak",
	"get-involved::get_involved_card_stickers_source":
		"Iturria: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Eskatu Bitcoin pegatina-pakete doakoa zuzenean zure atarira",
	"get-involved::get_involved_flyers_content_1":
		"Esku-orriak dira zure komunitatean Bitcoin aurkezteko modurik errazenetako bat. Deskargatu gure doako inprimagarri den Bitcoin esku-orria, inprimatu nahi beste kopia eta jarri iragarki-tauletan, kafetegietan, bileretan edo jendea biltzen den edozein lekutan.",
	"get-involved::get_involved_flyers_content_2":
		"Esku-orri bakoitzak begirada hartzen duen titulua du eta QR kode bat, gogotsuak diren irakurleak bitcoin.rocks-era zuzentzen dituena, gehiago jakiteko.",
	"get-involved::get_involved_flyers_content_3":
		"Pegatinek ez bezala, esku-orriak eskaeran inprimatu daitezke munduko edozein lekuan — inprimagailua eta minutu batzuk baino ez dituzu behar.",
	"get-involved::get_involved_flyers_header":
		"Inprimatu eta jarri esku-orria",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks doako inprimagarri den Bitcoin esku-orriaren aurrebista",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks MIT lizentziapeko kode irekiko proiektu librea da. Gure misioa hezkuntzaren bidez Bitcoinaren adopzioa azkartzea da — eta ezin dugu bakarrik egin.",
	"get-involved::get_involved_github_content_2":
		"Garatzailea, diseinatzailea, idazlea edo itzultzailea bazara, laguntzeko modua dago. Bereziki itxaroten ditugu gure edukiak hizkuntza gehiagotara itzuli ditzaketenak, mundu osoko jendeak Bitcoini buruz ikasi ahal izateko beren ama-hizkuntzan.",
	"get-involved::get_involved_github_content_3":
		"Egin gure biltegiaren fork-a, ireki pull request bat, sortu issue bat edo eman proiektuari izarra. Ekarpen bakoitzak Bitcoin jende gehiagori iristen laguntzen dio.",
	"get-involved::get_involved_github_header":
		"Lagundu GitHuben",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks doako Bitcoin testu-pegatinen paketea",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "aurrezten",
	"index::home_card_label_art_1": "Alderatu dezagun",
	"index::home_card_label_art_2": "Zabaldu mezua",
	"index::home_card_label_art_3": "Kale-artea",
	"index::home_card_label_bank_runs": "Erreserba osoko sistema",
	"index::home_card_label_bonds": "Alderatu dezagun",
	"index::home_card_label_business_1": "Zein da aldea?",
	"index::home_card_label_business_2": "Onartu Bitcoin ordainketak",
	"index::home_card_label_cash": "Alderatu dezagun",
	"index::home_card_label_cbdc": "Irekia edo itxia?",
	"index::home_card_label_coding_1": "Ikastaro interaktiboa",
	"index::home_card_label_coding_2": "Eraiki hardwarea",
	"index::home_card_label_coding_3": "Programazio-erronkak",
	"index::home_card_label_crowdfunding_1": "EndSARS protestak",
	"index::home_card_label_crowdfunding_2": "Gelditu ezin den dirua",
	"index::home_card_label_crowdfunding_3": "Finantzatu zure proiektua",
	"index::home_card_label_crypto": "Zein da aldea?",
	"index::home_card_label_energy_1": "Sarea egonkortzea",
	"index::home_card_label_energy_4": "Eskariaren kudeaketa",
	"index::home_card_label_energy_5": "Landa-elektrifikazioa",
	"index::home_card_label_energy_6": "Energia berriztagarrien pizgarriak",
	"index::home_card_label_environment_1": "Metanoa murriztea",
	"index::home_card_label_environment_2": "Parke nazionala salbatu zuen",
	"index::home_card_label_environment_3": "Industriarik berdeena",
	"index::home_card_label_environment_4": "Gas-errekuntza murrizten du",
	"index::home_card_label_equality_1": "Itxaropena eta aukerak",
	"index::home_card_label_equality_2": "Berdintzaile handia",
	"index::home_card_label_food_1": "Elikagaien prezioak",
	"index::home_card_label_food_2": "Baserriak eta lurra",
	"index::home_card_label_freedom_1": "Erregimen autoritarioak",
	"index::home_card_label_freedom_2": "Tresna bakarra",
	"index::home_card_label_get_started_1":
		"Hasiberrientzako oinarriak",
	"index::home_card_label_get_started_2": "Zure lehen zorroa",
	"index::home_card_label_get_started_3": "Erosi Bitcoin",
	"index::home_card_label_gold": "Zein da hobea?",
	"index::home_card_label_housing_1": "Etxebizitza eskuragarria",
	"index::home_card_label_human_rights_1":
		"Giza eskubideak sustatzen ditu",
	"index::home_card_label_human_rights_2": "Oinarritik adopzioa",
	"index::home_card_label_human_rights_3": "Nazioarteko arrastoa",
	"index::home_card_label_inflation": "Bitcoin diru hobea da",
	"index::home_card_label_networks_1": "Sarearen denbora errealeko ikuspegia",
	"index::home_card_label_networks_2": "Alderatu dezagun",
	"index::home_card_label_payments_1": "Zein da aldea?",
	"index::home_card_label_payments_2": "Ordainketa azkar eta merkeak",
	"index::home_card_label_payments_3": "Atzerriko transferentziak",
	"index::home_card_label_payments_4": "Onartu ordainketak",
	"index::home_card_label_politics_1": "Paradoxa politikoa",
	"index::home_card_label_politics_2": "Apustu handia",
	"index::home_card_label_property_rights_1": "Alderatu dezagun",
	"index::home_card_label_property_rights_2": "Benetako jabetza",
	"index::home_card_label_salary": "Babestu zure soldata",
	"index::home_card_label_self_custody_1":
		"Bitcoin zorroen gida",
	"index::home_card_label_self_custody_2": "Garrantzitsuena den urratsa",
	"index::home_card_label_self_custody_3": "Diru subiranoa",
	"index::home_card_label_war_1": "Behin betiko gerrak amaitu",
	"index::home_card_label_war_2": "Lagundu beteranoei",
	"index::home_card_label_war_3": "Gerratik ihes egin",
	"index::home_h1":
		"Bitcoin diru hobea da, mundu hobea eraikitzen duena.",
	"index::home_nav_about": "Guri buruz",
	"index::home_nav_get_involved": "Parte hartu",
	"index::home_nav_learn": "Ikasi",
	"index::home_source_prefix": "Iturria:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon eta Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Ikusi gure",
	"lightning::lightning_grid_heading":
		"Lightning zorro ezagunak",
	"lightning::lightning_hardware_cta_label":
		"Hardware-zorroak",
	"lightning::lightning_header_subtitle":
		"Lightning-ek aukera ematen dizu Bitcoin segundoetan bidaltzeko zentimo-zati baten truke — aukeratu zuk gastatu nahi duzun Bitcoin kopuruari dagokion zorroa.",
	"lightning::lightning_s1_c4_end": "informazio gehiagorako.",
	"lightning::lightning_s1_c4_link":
		"Bitcoin hardware-zorroen gida",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning zorroa",
	"lightning::sources_breez_lightning":
		"Breez — norberak kudeatutako Lightning zorroa",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning sarearen dokumentazioa",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — zaindutako Lightning zorroa",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android eta weba",
	"nostr/index::nostr_platform_web": "Web-nabigatzailea",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr webeko komunikaziorako protokolo deszentralizatu berria da — inolako enpresak ez du jabetzen, Bitcoin zap-ak integratuta ditu eta bezeroen artean aldatu zaitezke jarraitzaileak galdu gabe.",
	"nostr/index::nostr_amethyst_f1":
		"Ezaugarri eta pertsonalizazio-aukera asko",
	"nostr/index::nostr_amethyst_f2":
		"Bitcoin zorro bereizi bat eskatzen du",
	"nostr/index::nostr_amethyst_f3": "% 100 doakoa",
	"nostr/index::nostr_damus_f1":
		"Ezaguna den Twitter-en antzeko interfazea",
	"nostr/index::nostr_damus_f2":
		"Bitcoin zorro bereizi bat eskatzen du",
	"nostr/index::nostr_damus_f3": "% 100 doakoa",
	"nostr/index::nostr_download_heading":
		"Deskargatu doako Nostr bezeroa",
	"nostr/index::nostr_download_intro":
		"Nostr bezeroak Nostr sarea irakurtzeko eta idazteko aukera ematen duten doako aplikazioak dira. Guztiek elkarrekin funtzionatzen dute — edozein unetan bezeroak alda ditzakezu eta zure jarraitzaileak eta edukia mantendu.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr webeko komunikaziorako protokolo deszentralizatu berria da — inolako enpresak ez du jabetzen, Bitcoin zap-ak integratuta ditu eta aplikazioen artean aldatu zaitezke jarraitzaileak galdu gabe.",
	"nostr/index::nostr_hero_title": "Zer da Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr posta elektronikoaren antzekoa da: protokoloak ez du inor jabe, edonork eraiki dezake aplikazio bat hari gainean eta zuk aukeratzen duzu zuretzat egokiena dena. Twitter edo Facebook ez bezala, ez dago enpresa zentralik zure kontuak zentsuratu, kaleratu edo isilarazi ahal izateko.",
	"nostr/index::nostr_intro_c2":
		"Behean Nostr-en garrantziaren bertsio laburra dago — eta gero gaur hasteko behar dituzun Nostr bezero doako guztiak.",
	"nostr/index::nostr_iris_f1":
		"Oso erraza — ez du instalaziorik behar",
	"nostr/index::nostr_iris_f2":
		"Nostr proba-kontu batekin probatzeko modu erraza",
	"nostr/index::nostr_iris_f3": "% 100 doakoa",
	"nostr/index::nostr_learn_more_label": "SAKONDU",
	"nostr/index::nostr_learn_more_title":
		"Ikasi Nostr-i buruz gehiago nostr.how-en",
	"nostr/index::nostr_primal_f1": "Gure lehen gomendatutako bezeroa",
	"nostr/index::nostr_primal_f2":
		"Bitcoin zap zorroa integratuta",
	"nostr/index::nostr_primal_f3": "% 100 doakoa",
	"nostr/index::nostr_s1": "Protokoloa, ez plataforma",
	"nostr/index::nostr_s1_c1":
		"Nostr webean komunikatzeko aukera ematen duen protokolo berria da, zentsuraren, debekuaren edo isilarazketaren beldurrik gabe.",
	"nostr/index::nostr_s1_c2":
		"Twitter edo Facebook bezalako plataformak enpresa baten kontrolpean daude, baina Nostr protokoloa ez dago inoren kontrolpean.",
	"nostr/index::nostr_s2": "Mugitzeko askatasuna",
	"nostr/index::nostr_s2_c1":
		"Nostr posta elektronikoaren antzekoa da. Inork ez du kontrolatzen posta elektronikoaren protokoloa eta edonork eraiki dezake bezero bat (Gmail, Hotmail, etab. bezala).",
	"nostr/index::nostr_s2_c2":
		"Nostr protokoloa ere ez dago inoren kontrolpean eta edonork eraiki dezake bezero bat (Damus, Amethyst, etab. bezala).",
	"nostr/index::nostr_s2_c3":
		"Bezero jakin batek nola funtzionatzen duen gustatzen ez bazaizu, zure Nostr kontua beste bezero batera eraman dezakezu, jarraitzaileak edo edukia galdu gabe.",
	"nostr/index::nostr_s3": "Bitcoin integratuta dago",
	"nostr/index::nostr_s3_c1":
		"Bitcoin Nostr protokoloan integratuta dago. Gustuko duzun edukia ikusten duzunean, autoreari «Bitcoin zap bat» bidal diezaiokezu esker gisa.",
	"nostr/index::nostr_s3_c2":
		"Twitter eta Facebook bezalako plataforma zentralizatuetan, enpresa zentralak dirua ateratzen du zure edukitik. Baina Nostr bezalako protokolo irekietan, zuk ateratzen duzu dirua zure edukitik.",
	"nostr/index::sources_damus": "Damus — iPhonerentzako Nostr bezeroa",
	"nostr/index::sources_iris": "Iris — Web-nabigatzaileko Nostr bezeroa",
	"nostr/index::sources_nostr_how": "nostr.how — zer da Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr protokoloa — kode irekiko espezifikazioa",
	"nostr/index::sources_primal":
		"Primal — Bitcoin zap zorroa integratuta duen Nostr bezeroa",
	"nostr/index::what_is_nostr": "Zer da Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Inprimatu zure Bitcoin pegatinak fitxategi hauekin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Eskaera jasota 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Eskatu handizka",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Partekatu Nostr-en",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Zer da Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Pegatina gehiago behar?",
	"sticker-success::sticker_success_hero_title":
		"Zure pegatinak bidean daude 🎉",
	"sticker-success::sticker_success_share_header":
		"Partekatu non jarri dituzun pegatinak",
	"sticker-success::sticker_success_tips_header":
		"Pegatinak jartzeko leku onak",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Eta hasten bazara, inprimatu eta jarri zure",
	"stickers::stickers_instructions_1":
		"Idatzi zure posta-helbidea eta Bitcoin pegatina-pakete doakoa postaz bidaliko dizugu. Zure pegatinak gutun-azal zuri soil batean iritsiko dira.",
	"stickers::stickers_btn_choose_pack": "Aukeratu pakete hau",
	"stickers::stickers_bulk_c1":
		"Pegatina gutxi batzuk baino gehiago nahi dituzu?",
	"stickers::stickers_bulk_c2":
		"Eskatu handizka guk erabiltzen dugun inprimategi berberan",
	"stickers::stickers_bulk_c3":
		"— gehiago erosten duzun heinean merkeagoa bihurtzen da unitatea.",
	"stickers::stickers_bulk_cta": "Erosi pegatinak handizka",
	"stickers::stickers_bulk_header":
		"Eskatu pegatinak handizka",
	"stickers::stickers_hero_subtitle":
		"Eskatu Bitcoin pegatina-pakete doakoa eta jarri toki publikoetan jende gehiagok Bitcoini buruz ikas dezan.",
	"stickers::stickers_hero_title": "Doako Bitcoin pegatinak",
	"stickers::stickers_intro_c1":
		"Gure misioa da zuri pegatinekin jende gehiago «laranjatzen» laguntzea, Bitcoin pegatinak toki publikoetan itsatsiz. Gure pegatina guztiek QR kodeak dituzte hezkuntza-orrialdeetara bideratzen dutenak",
	"stickers::stickers_intro_c3": "inflazioa",
	"stickers::stickers_intro_c4":
		"Aukeratu behean pegatina-paketea eta aukeratu nola nahi dituzun — AEBetako edo Kanadako edonori pakete doakoa bidaltzen diogu, edo zerorrek ere zure pegatinak inprimatu ditzakezu mundu osoan.",
	"stickers::stickers_mail_header":
		"Pegatinak doan bidaliko dizkizugu postaz",
	"stickers::stickers_next_print_flyers": "Zabaldu mezua are urrunago",
	"stickers::stickers_next_print_flyers_desc":
		"Inprimatu Bitcoin esku-orri doakoak eta jarri leku publikoetan",
	"stickers::stickers_option_bulk":
		"📦 Mundu osoa — eskatu handizka",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — doan postaz",
	"stickers::stickers_option_print":
		"🌍 Mundu osoa — inprimatu zerorrek",
	"stickers::stickers_option_usa":
		"🇺🇸 AEB — doan postaz",
	"stickers::stickers_print_c1":
		"Zerorrek pegatinak inprimatuz parte hartu dezakezu, edonon bizi zarela. Egin klik behean zure hizkuntzan pegatina-fitxategiak eta inprimatze-argibideak deskargatzeko.",
	"stickers::stickers_print_c2":
		"Pegatina guztiak ez daude eskuragarri hizkuntza guztietan.",
	"stickers::stickers_print_header":
		"Inprimatu zure pegatina-fitxategiak zerorrek",
	"stickers::stickers_request_c1":
		"Bete beheko formularioa pegatina-fitxategiak zure tokiko hizkuntzan eskatzeko. Prest daudenean jakinaraziko dizugu.",
	"stickers::stickers_request_header":
		"Ez duzu zure hizkuntza ikusten?",
	"stickers::stickers_share_c2":
		"Jarraitu gaitzazu Nostr-en, bilatuz",
	"stickers::stickers_share_c3":
		"edozein Nostr bezerotan.",
	"stickers::stickers_signs_pack_description":
		"Abisu-, kontuz- eta oharretako pegatinak Bitcoin mezuekin — begiak hartu eta jendea gerarazteko diseinatuta.",
	"stickers::stickers_step_1_description":
		"Pakete bakoitzak Bitcoin pegatina-sorta ezberdin bat dauka, QR kodeekin, jendeari Bitcoini buruz irakasten diotenak.",
	"stickers::stickers_step_1_eyebrow": "1. URRATSA",
	"stickers::stickers_step_1_header":
		"Aukeratu pegatina-paketea",
	"stickers::stickers_step_2_description":
		"Pakete doakoak bidaltzen ditugu AEBetako eta Kanadako helbideetara. Munduko beste leku batzuetan zure pegatinak zerorrek inprimatu edo handizka eskatu ditzakezu.",
	"stickers::stickers_step_2_eyebrow": "2. URRATSA",
	"stickers::stickers_step_2_header":
		"Nola nahi dituzu zure pegatinak?",
	"stickers::stickers_text_pack_description":
		"Bitcoin leloen eta pentsamendu alaien nahasketa, toki publikoetan jakin-mina pizteko diseinatua.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — aukeratu zure zorroa",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin hazi-metal gordetzeen berrikuspenak",
	"wallets::wallets_lightning_cta_label": "Lightning sarea",
	"wallets::sources_blockstream_green":
		"Blockstream Green — norberak kudeatutako Bitcoin zorroa",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardware-zorroa",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardware-zorroa",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardware-zorroa",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardware-zorroa",
	"wallets::sources_seedsigner":
		"SeedSigner — Bitcoin transakzioetarako norberak egindako sinadura-gailu kode irekikoa",
	"wallets::wallets_grid_heading": "Bitcoin zorro ezagunak",
	"wallets::wallets_header_subtitle":
		"Urratsez urratseko gida zorroa aukeratzeko, zure gakoak babesteko eta zure Bitcoinaren gaineko erabateko kontrola hartzeko.",
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
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (eu): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
