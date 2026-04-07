/**
 * Creates Basque (eu) translation files for business/ subdirectory
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'eu';
const today = '2026-04-06';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin negoziorako ona da",
	"biz_header": "BITCOIN NEGOZIORAKO ONA DA",
	"biz_s1": "Komisio baxuak gutxieneko gabe",
	"biz_s1_c1": "Bitcoin-ek zure bezeroen ordainketak zuzenean jasotzeko aukera ematen dizu, eskudirua bezala. Bitcoin sarea bitartekariak gabe funtzionatzen du, hala nola bankuak eta kreditu-txartel konpainiak, komisio handiak hartzen dituztenak.",
	"biz_s2": "Berehala ordainketa",
	"biz_s2_c1": "Eskudirua bezala, Bitcoin-en ordainketak berehala likidatzen dira. Ez duzu itxaron behar zure kreditu-txartel konpainiak edo bankuak ordaintzeko. Horren ordez, berehala sarbidea duzu zure dirura.",
	"biz_s3": "Ez dago itzulketarik edo iruzurrik",
	"biz_s3_c1": "Bitcoin ordainketak zuzenean zure eta zure bezeroen artean gertatzen direnez, ezinezkoa da inork zure dirua itzulketa batekin atzera hartzea.",
	"biz_s3_c2": "Bitcoin faltsua ezin da Bitcoin Sarean bidali, eta horrek esan nahi du ez duzula inoiz kezkatu behar zure negozioari dirua kosta diezaioketen transakzio iruzurtzaileez.",
	"biz_s4": "Lortu bezero gehiago",
	"biz_s4_c1": "Milioika pertsonak dituzte Bitcoin eta haien Bitcoin gastatu nahi dute onartzen duten lekuetan.",
	"biz_s4_c2": "Bitcoin onartuz, zure negozioa Bitcoin merkatari-mapetan zerrendatu daiteke eta Bitcoin bezero berriekiko doako esposizioa lortu.",
	"biz_s4_c3": "Bitcoin onartzea %100 doakoa da. Ez dago kontraturik edo ezkutuko komisiorik."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Ikasi zergatik den Bitcoin negoziorako ona",
	"why_header": "BITCOIN NEGOZIORAKO ONA DA",
	"why_good_for_you": "BITCOIN ZURETZAT ERE ONA DA!",
	"why_learn_more_lowercase": "Ikasi gehiago.",
	"why_s1": "Bitcoin-ek ez du inflaziorik",
	"why_s1_c1": "Inflazioa diru gehiago inprimatzen edo ezerezetik sortzen denean gertatzen da. Honek zure dirua gutxiago balio du denborarekin.",
	"why_s1_c2": "Bitcoin-ek eskaintza finko bat du, eta horrek esan nahi du inork ezin duela Bitcoin gehiago inprimatu.",
	"why_s2": "Bitcoin-ek ez du banku-ihesik",
	"why_s2_c1": "AEBetako hainbat banku erori dira azken urteetan banku-ihesen ondorioz.",
	"why_s2_c2": "Zure dirua zuretzat gordetzeko ordez, bankuek zure dirua inbertitu eta maileguan ematen dute. Inbertsio horiek ondo ez badoaz, ez dute nahikoa zuri itzultzeko.",
	"why_s2_c3": "Eta FDIC aseguru funtsak $1 besterik ez du aseguratzen duten $100 bakoitzeko.",
	"why_s3": "Bitcoin baimenik gabekoa da",
	"why_s3_c1": "Finantza-sare tradizionalek ez bezala, Bitcoin-ek ez du baimenik behar erabiltzeko.",
	"why_s3_c2": "Horrek esan nahi du inork ezin dizula Bitcoin erabiltzea galarazi inolako arrazoirengatik. Zentsura edo konfiskaziorik gabe erabil dezakezun lehen finantza-sarea da.",
	"why_s4": "Bitcoin mundu hobea eraikitzen ari da",
	"why_s4_c1": "Bitcoin gaizki ulertutako teknologia bat da, mundu hobea eraikitzen ari dena.",
	"why_s4_c2": "Bitcoin-ek giza eskubideen aktibistei askatasunaren alde borrokatzea ahalbidetu die, metano emisio globalak murriztu ditu, parke nazionalak salbatu ditu, eta askoz gehiago."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Onartu Bitcoin ordainketak zure negozioan",
	"guide_header": "PREST ZAUDE ZURE NEGOZIOAN BITCOIN ONARTZEKO?"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Nola onartu Bitcoin ordainketak",
	"wallets_header": "LORTU DOAKO BITCOIN ZORROA BITCOIN ORDAINKETAK ONARTZEKO",
	"wallets_intro_1": "Bitcoin zorro guztiak elkarreragileak dira, beraz, zure bezeroek Bitcoin-ekin ordaindu diezazukete erabiltzen duten zorroa edozein dela ere.",
	"wallets_intro_2": "Bitcoin soilik zorroak:",
	"wallets_intro_3": "Bitcoin zorro puruak dira, Bitcoin-en abantaila guztiak desblokeatzen dituztenak: bitartekariak gabe, komisio baxuak eta itzulketarik edo iruzurrik gabe.",
	"wallets_intro_4": "Zorro hibridoak:",
	"wallets_intro_5": "Hauek zure Bitcoin-aren edozein zati dolarrengatik trukatzeko aukera ematen dizute bezero batek ordaintzen dizun bezain laster. Komisoak oraindik txikiagoak dira kreditu-txartel ordainketak baino, baina Bitcoin ordainketa puruak baino handiagoak.",
	"wallets_intro_6": "Biak dira Bitcoin onartzeko modu bikainak. Erabiltzen duzun zorro zehatza zure negozioaren tamainaren eta motaren araberakoa izango da.",
	"wallets_choice_sole": "bakarka jabetutako negozioetarako zorroak",
	"wallets_choice_multiple": "langile anitzetako negozioetarako zorroak",
	"wallets_choice_online": "online negozioetarako zorroak",
	"wallets_choice_invoice": "faktura bidezko negozioetarako zorroak",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Zure lehendik dagoen Square PoS terminalarekin edo online denda integrazioarekin Bitcoin ordainketak onar ditzakezu. Inoiz ez da hain erraza izan Bitcoin ordainketak onartzea.",
	"wallets_feature_bitcoin_only": "Bitcoin soilik zorroa",
	"wallets_feature_no_info": "Ez da informaziorik behar",
	"wallets_feature_in_person": "Pertsonalki ordainketak soilik",
	"wallets_feature_settles_bitcoin": "%100 Bitcoin-en likidatzen da",
	"wallets_feature_hybrid": "Zorro hibridoa",
	"wallets_feature_info": "Negozio informazioa beharrezkoa",
	"wallets_feature_in_person_online": "Pertsonalki eta online ordainketak",
	"wallets_feature_settles_both": "Bitcoin eta dolarretan likidatu",
	"wallets_feature_multiple_employees": "Langile anitzen euskarria (BPT-ak)",
	"wallets_feature_self_hosted": "Auto-ostatutua = %0 komisio",
	"wallets_feature_online_store": "Online denda integrazioa",
	"wallets_feature_invoicing": "Doako fakturazio softwarea",
	"wallets_get_wallet": "LORTU ZORROA"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin merkatari-mapak - Zerrendatu zure negozioa doako",
	"maps_header": "ZERRENDATU ZURE NEGOZIOA BITCOIN MERKATARI-MAPETAN ETA LORTU BEZERO GEHIAGO",
	"maps_request_details": "Sartu zure negozio informazioa behean eta Bitcoin merkatari-mapetan doako zerrendatuko zaitugu. Honek Bitcoiner-ei zure negozioa aurkitzeko eta Bitcoin gastatzeko aukera emango die!",
	"maps_view": "Ikusi mapa hemen."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Zure negozioa Bitcoin merkatari-mapetan zerrendatuko da 1-2 astetan.",
	"kit_success_2": "Ikusi mapa hemen."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "'Bitcoin hemen onartzen da' eranskailuak",
	"stickers_header": "LORTU ZURE DOAKO 'BITCOIN HEMEN ONARTZEN DA' ERANSKAILUAK",
	"stickers_request": "Lortu zure eranskailu doakoak",
	"stickers_request_details": "Jakinarazi zure bezeroei Bitcoin ordainketak onartzen dituzula 'Bitcoin hemen onartzen da' eranskailu doako hauekin.",
	"stickers_country_global_print": "Mundua — Nire eranskailuak inprimatu",
	"stickers_request_instructions": "'Bitcoin hemen onartzen da' hiru eranskailu jasoko dituzu gutun-azal zuri batean. Zure negoziorako hiru eranskailu baino gehiago behar badituzu, hainbat aldiz eskatu lasai. Helbide datuak zure doako eranskailuak bidali ondoren ezabatzen dira.",
	"stickers_print_details": "Zure 'Bitcoin hemen onartzen da' eranskailuak inprimatu ditzakezu, bizi zaren lekua edozein dela ere! Egin klik zure hizkuntzan behean eranskailu-fitxategiak eta argibideak ikusteko.",
	"stickers_request_language": "Ez al duzu zure hizkuntza ikusten? Bete beheko formularioa zure tokiko hizkuntzan 'Bitcoin hemen onartzen da' eranskailu-fitxategiak eskatzeko."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Zure eranskailuak 1-2 astetan jasoko dituzu gutun-azal zuri batean. Gutun-azal bakoitzak 3 eranskailu ditu. Zure negoziorako 3 eranskailu baino gehiago behar badituzu, beste pakete bat eskatu lasai!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Zure eranskailu-fitxategia 3-4 astetan sortuko eta argitaratuko dugu. Eskerrik asko zure pazientziagatik!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin negozio-kita",
	"kit_header": "INPRIMATU ZURE BITCOIN NEGOZIO-KITA",
	"kit_request": "ESKATU ZURE DOAKO KITA",
	"kit_request_details": "Bitcoin negozio-kit bakoitzak bi liburuxka ditu, tokiko negozio bati Bitcoin onartzea errazteko.",
	"kit_country_global_print": "Mundua — Nire kitak inprimatu",
	"kit_enter_address": "Sartu zure posta-helbidea eta doako Bitcoin negozio-kit bat bidaliko dizugu gutun-azal zuri batean. Helbide datuak zure kita bidali ondoren ezabatzen dira.",
	"kit_print_details": "Zure liburuxkak inprimatuz parte hartu dezakezu, bizi zaren lekua edozein dela ere! Negozioei gure negozio-kit digitala ere bidali diezaiekezu ezer inprimatu gabe.",
	"kit_view_files": "IKUSI FITXATEGIAK",
	"kit_digital_kit": "KIT DIGITALA",
	"kit_resources": "KIT BAKOITZAK BALIABIDE DOAKO HAUETARA ESTEKA DU"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Zure Bitcoin negozio-kita 1-2 astetan jasoko duzu gutun-azal zuri batean."
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Bitcoin onartzeko ohiko galderak",
	"faq_description": "Galderak dituzu zure negozioan Bitcoin ordainketak onartzeko?",
	"faq_header": "GALDERAK DITUZU BITCOIN ORDAINKETAK ONARTZEKO?",
	"faq_s1": "Zer da Bitcoin?",
	"faq_s1_c1": "Bitcoin bi gauza dira: diru digitala eta sare informatikoa.",
	"faq_s1_c2": "Bitcoin (diru digitala) zuzenean beste pertsonei bidali diezaiekezu Bitcoin Sarea erabiliz.",
	"faq_s1_c3": "Bitcoin Sarea bitartekariak edo autoritate zentralik gabe funtzionatzeko gai da, hala nola bankuak edo kreditu-txartel konpainiak, beraz, haien transakzio-komisoak saihestu ditzakezu.",
	"faq_s1_c4": "Bitcoin transakzioek azken likidazioa azkar lortzen dute (10 minutu) eta inoiz ezin dira atzera bueltatu, beraz, lasai lo egin dezakezu zure dirua zurea dela jakinda.",
	"faq_s2": "Nola onura dezake Bitcoin-ek nire negozioa?",
	"faq_s2_c1": "Bitcoin-ek komisio txikiagoekin ordainketak onartzea eta bezero gehiago lortzea ahalbidetzen du. Bitcoin ordainketek komisio baxuak dituzte gutxieneko gabe, berehala likidatzen dira, eta itzulketa eta iruzurraren aurkako immunitatea dute.",
	"faq_s2_c2": "Bitcoin onartzea doakoa da eta zure negozioa Bitcoin merkatari-mapetan zerrendatzeko aukera ematen du, Bitcoin erabiltzaileek zure negozioa erraz aurki dezaten.",
	"faq_s2_c3": "Ikusi Bitcoin negoziorako ona den modu guztiak.",
	"faq_s3": "Nola onartzen ditut Bitcoin ordainketak?",
	"faq_s3_c1": "Bitcoin ordainketak onartzeko behar duzun guztia Bitcoin zorro doako bat da.",
	"faq_s3_c2": "Gure zorro gidak azkar eta erraz konfiguratzen lagunduko dizu, gaur egun bertan Bitcoin onartzeko abantailak desblokeatu ahal izateko!",
	"faq_s3_c3": "Ikusi zorro gida",
	"faq_s4": "Jasotzen ditudan Bitcoin ordainketak nire tokiko moneta bihur ditzaket?",
	"faq_s4_c1": "Bai! Zorro hibrido bat erabiliz, jasotzen dituzun Bitcoin ordainketak automatikoki zure tokiko monetara bihur ditzakezu ordainketa jaso bezain laster.",
	"faq_s4_c2": "Gure zorro gidak azkar eta erraz konfiguratzen lagunduko dizu.",
	"faq_s4_c3": "Jasotzen dituzun ordainketen zati bat Bitcoin gisa gordetzea ere aukera dezakezu. Bitcoin-en aurrezteak abantaila asko ditu:",
	"faq_s4_c4": "Bitcoin erreserba osoko finantza-sistema bat da.",
	"faq_s4_c5": "Bitcoin-ek ez du inflaziorik.",
	"faq_s4_c6": "Abantaila hauek Bitcoin epe luzerako dirua gordetzeko modu bikaina bihurtzen dute.",
	"faq_s4_c7": "Nahiz eta zure Bitcoin ordainketa guztiak dolarretara bihurtzea aukeratzen duzun, oraindik ere komisio askoz txikiagoekin ordainketak onartzeko abantailak jasotzen dituzu bezero potentzial gehiagora iritsi bitartean.",
	"faq_s5": "Bitcoin ordainketak pertsonalki onar ditzaket?",
	"faq_s5_c1": "Bai! Erraza da Bitcoin ordainketak pertsonalki onartzea Bitcoin zorro bat erabiliz.",
	"faq_s5_c2": "Gure zorro gidak zure negoziorako onena den Bitcoin zorroa aukeratzen lagunduko dizu.",
	"faq_s5_c3": "Ikusi zorro gida",
	"faq_s6": "Bitcoin ordainketak online onar ditzaket?",
	"faq_s6_c1": "Bai! Erraza da Bitcoin ordainketak online onartzea zure lehendik dagoen online dendarekin.",
	"faq_s6_c2": "Ikusi gure zorro gida informazio gehiagorako.",
	"faq_s7": "Nola jakinarazi diezaioket nire bezeroei Bitcoin onartzen dudala?",
	"faq_s7_c1": "'Bitcoin hemen onartzen da' eranskailu doakoak eskaintzen ditugu zure negozioan bistaratzeko, zure bezeroei Bitcoin onartzen duzula jakinarazteko.",
	"faq_s7_c2": "Egin klik hemen zure eranskailuak eskatzeko.",
	"faq_s7_c3": "Zure negozioa Bitcoin merkatari-mapetan doako ere zerrendatu dezakezu eta milioika Bitcoin erabiltzaileren aurrean esposizioa lortu, haien Bitcoin onartzen duten negozioetan gastatu nahi dutenak.",
	"faq_s7_c4": "Zerrendatu orain.",
	"faq_s8": "Nola lortu ditzaket bezero gehiago Bitcoin onartuz?",
	"faq_s8_c1": "Milioika Bitcoin erabiltzaile daude haien Bitcoin onartzen duten negozioetan gastatu nahi dutenak.",
	"faq_s8_c2": "Bitcoin ordainketak onartuz, zure negozioa doako Bitcoin merkatari-mapetan zerrendatu daiteke eta bezero potentzial berriekiko esposizioa eman.",
	"faq_s8_c3": "Zerrendatu orain.",
	"faq_s9": "Zenbat kostatzen da Bitcoin onartzea?",
	"faq_s9_c1": "Zure negozioan Bitcoin onartzea %100 doakoa da. Ez dago kontraturik edo ezkutuko komisiorik.",
	"faq_s9_c2": "Ikusi gure zorro gida Bitcoin ordainketak gaur bertan onartzen hasteko."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bitcoin negozio kontabilitate gida",
	"accounting_description": "Ikasi nola behar bezala kontabilizatu Bitcoin ordainketak zure negozioaren kontabilitatean.",
	"accounting_header": "BITCOIN KONTABILITATE GIDA",
	"accounting_s1_c1": "Bitcoin onartzeak abantaila asko ditu, hala nola komisio baxuagoekin ordainketak onartzea eta bezero gehiago lortzea.",
	"accounting_s1_c2": "Gure zorro gidako zorro hibrido bat erabiltzen baduzu eta jasotzen duzun Bitcoin-aren %100 automatikoki dolarretara saltzen baduzu, ez duzu aldaketarik egin behar zure egungo kontabilitatean.",
	"accounting_s1_c3": "Ikusi zorro gida.",
	"accounting_s1_c4": "Hala ere, jasotzen dituzun Bitcoin ordainketa batzuk Bitcoin gisa gordetzen badituzu, hainbat xehetasun jarraitu beharko dituzu zure kontabilitaterako. Hasieran beldurgarria iruditu daiteke, baina benetan nahiko sinplea da.",
	"accounting_s1_c5": "Kontuan izan: gida hau informazio helburuetarako bakarrik da eta ez da zerga-aholkularitza gisa hartu behar.",
	"accounting_s1_c6": "Zerga-aholkularitza behar baduzu, Satoshi Pacioli Accounting Services oso gomendagarria da, Bitcoin kontabilitatean espezializatutako kontabilitate enpresa bat.",
	"accounting_s2": "ZURE KOSTU OINARRIA JARRAITZEA",
	"accounting_s2_c1": "Zure kostu oinarria jarraitzea izango da dolaren eta Bitcoin-en kontabilitatearen arteko desberdintasun handiena. Nahiz eta zure negozioa soilik Bitcoin terminoetan ikusten duzun, transakzio bakoitzaren dolar balioa adierazi behar duzu zure zergetan.",
	"accounting_s2_c2": "QuickBooks erabiltzen baduzu, hau automatikoki egin dezakezu Bitcoin Sync plugina erabiliz.",
	"accounting_s2_c3": "QuickBooks erabiltzen ez baduzu, Satoshi Pacioli Accounting Services gomendatzen dugu, Bitcoin kontabilitatean espezializatutako kontabilitate enpresa bat.",
	"accounting_s2_c4": "Hau eskuz egiteko, jaso duzun Bitcoin kopurua eta egun horretan Bitcoin transakzioaren dolar balioa jarraitu besterik ez duzu behar.",
	"accounting_s2_c5": "Bitcoin-en egungo dolar prezioa hemen ikus dezakezu.",
	"accounting_s2_c6": "Jarraitu informazio hau Excel kalkulu-orri batean eta eman zure kontulariari.",
	"accounting_s2_c7": "Datu hauek automatikoki ere inporta ditzakezu Excel-era.",
	"accounting_s2_c8": "Iraganeko egunetako Bitcoin-en dolar prezio historikoa ere ikus dezakezu, beraz, ez duzu hau egunero egin behar.",
	"accounting_s3": "ZURE BITCOIN GASTATZEA EDO SALTZEA",
	"accounting_s3_c1": "Gure zorro gidako zorro hibrido bat erabiltzen baduzu eta jasotzen duzun Bitcoin-aren %100 automatikoki dolarretara saltzen baduzu, ez duzu aldaketarik egin behar zure egungo kontabilitatean.",
	"accounting_s3_c2": "Ikusi zorro gida.",
	"accounting_s3_c3": "Jasotzen duzun Bitcoin batzuk denbora batez eduki ondoren gastatu edo saltzea aukeratzen baduzu, saldu duzun prezioa zure kostu oinarria jarraitze Excel kalkulu-orrian gehitu besterik ez duzu behar.",
	"accounting_s3_c4": "Adibidez, urtarrilaren 1ean $100 balio zuten Bitcoin jaso bazenuen eta otsailaren 1ean $110-ko balio berri batean saltzea edo gastatzea erabaki bazenuen, $10-ko kapital irabazia erregistratu beharko zenuke zure kontabilitatean.",
	"accounting_s3_c5": "Hau alderantziz ere gerta daiteke. Adibidez, urtarrilaren 1ean $100 balio zuten Bitcoin jaso bazenuen eta otsailaren 1ean $90-ko balio berri batean saltzea edo gastatzea erabaki bazenuen, $10-ko kapital galera erregistratu beharko zenuke zure kontabilitatean.",
	"accounting_s4": "LAGUNTZA GEHIAGO BEHAR DUT",
	"accounting_s4_c1": "Bitcoin zure negozioaren kontabilitatean integratzeko laguntza gehiago behar baduzu, Satoshi Pacioli Accounting Services oso gomendagarria da, Bitcoin kontabilitatean espezializatutako kontabilitate enpresa bat.",
	"accounting_s4_c2": "Ikasi gehiago Satoshi Pacioli Accounting Services-i buruz."
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Inprimatu zure Bitcoin negozio-kita",
	"english_bbk_files_description": "Deskargatu liburuxka-fitxategiak hemen.",
	"english_header": "INPRIMATU ZURE INGELESEZKO BITCOIN NEGOZIO-KIT LIBURUXKAK"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Ingelesezko 'Bitcoin hemen onartzen da' eranskailu-fitxategiak",
	"english_biz_sticker_files_description": "Deskargatu ingelesezko eranskailu-fitxategiak zure 'Bitcoin hemen onartzen da' eranskailuak inprimatzeko.",
	"english_header": "DESKARGATU INGELESEZKO 'BITCOIN HEMEN ONARTZEN DA' ERANSKAILU-FITXATEGIAK"
});

console.log('\nDone creating business files for Basque (eu).');
