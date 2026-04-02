/**
 * Creates Chichewa (ny) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ny';
const today = '2026-04-02';

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
	"bitcoin_is_good_for_business": "Bitcoin ndi yabwino kwa bizinesi",
	"biz_header": "BITCOIN NDI YABWINO KWA BIZINESI",
	"biz_s1": "Malipiro ochepa opanda kachepe",
	"biz_s1_c1": "Bitcoin imakuthandizani kulandira malipiro mwachindunji kuchokera kwa makasitomala anu, mofanana ndi ndalama. Netiweki ya Bitcoin imagwira ntchito popanda anthu apakati monga mabanki ndi makampani a ma khadi a ngongole omwe amalandira ndalama zambiri.",
	"biz_s2": "Kulipidwa msanga",
	"biz_s2_c1": "Mofanana ndi ndalama, malipiro a Bitcoin amafika nthawi yomweyo. Simukuyenera kudikira kampani yanu ya khadi la ngongole kapena banki kuti akulipireni. M'malo mwake, mumapeza ndalama zanu nthawi yomweyo.",
	"biz_s3": "Palibe kubweza kapena chinyengo",
	"biz_s3_c1": "Chifukwa malipiro a Bitcoin amachitika mwachindunji pakati pa inu ndi makasitomala anu, ndizosatheka kuti wina aliyense abweze ndalama zanu.",
	"biz_s3_c2": "Bitcoin yachinyengo singayendetsedwe pa Netiweki ya Bitcoin, kutanthauza kuti simuyenera kudera nkhawa za machitidwe achinyengo omwe angawononge bizinesi yanu.",
	"biz_s4": "Pezani makasitomala ambiri",
	"biz_s4_c1": "Anthu mamiliyoni ali ndi Bitcoin ndipo akufuna kuwagwiritsa ntchito pamalo omwe amalandiridwa.",
	"biz_s4_c2": "Polandirangosimba Bitcoin, bizinesi yanu ingalembedwe pa mapu a amalonda a Bitcoin ndipo ingathe kupeza makasitomala atsopano a Bitcoin kwaulere.",
	"biz_s4_c3": "Kulandira Bitcoin ndi kwaulere 100%. Palibe mapangano obisika kapena malipiro obisika."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Phunzirani chifukwa Bitcoin ili yabwino kwa bizinesi",
	"why_header": "BITCOIN NDI YABWINO KWA BIZINESI",
	"why_good_for_you": "BITCOIN NDI YABWINO KWA INU NAWONSO!",
	"why_learn_more_lowercase": "Phunzirani zambiri.",
	"why_s1": "Bitcoin ilibe kukwera kwa mitengo",
	"why_s1_c1": "Kukwera kwa mitengo kumachitika ndalama zambiri zikasindikizidwa kapena kupangidwa kuchokera paliponse. Izi zimapangitsa ndalama zanu kukhala zochepa mtengo pamene nthawi ikupita.",
	"why_s1_c2": "Bitcoin ili ndi kuchuluka kokhazikika, kutanthauza kuti palibe amene angasindikize Bitcoin zambiri.",
	"why_s2": "Bitcoin ilibe kuthawa kwa anthu kumabanki",
	"why_s2_c1": "Mabanki angapo ku United States agwa m'zaka zapitazi chifukwa cha kuthawa kwa anthu kumabanki.",
	"why_s2_c2": "M'malo mosungira ndalama zanu, mabanki amayika ndalama zanu ndi kubwereketsa. Ngati zikayikidwezo sizinayende bwino, alibe ndalama zokwanira kukubwezerani.",
	"why_s2_c3": "Ndipo inshulansi ya FDIC ili ndi $1 yokha pa $100 iliyonse yomwe akuteteza.",
	"why_s3": "Bitcoin ilibe chilolezo",
	"why_s3_c1": "Mosiyana ndi maukonde a ndalama achikhalidwe, Bitcoin sikufuna chilolezo kuti igwiritsidwe ntchito.",
	"why_s3_c2": "Izi zikutanthauza kuti palibe amene angakuletseni kugwiritsa ntchito Bitcoin pa chifukwa chilichonse. Ndi netiweki yoyamba ya ndalama yomwe mungagwiritse ntchito popanda mantha a kuletsa kapena kulanda.",
	"why_s4": "Bitcoin ikumanga dziko labwino",
	"why_s4_c1": "Bitcoin ndi teknoloji yomwe anthu ambiri samaimvetsetsa koma ikumanga dziko labwino.",
	"why_s4_c2": "Bitcoin yathandiza odziteteza ufulu wa anthu kulimbana ndi mazunzo, yachepetsa kutulutsa kwa methane padziko lonse, yapulumutsa minda ya zokongola zachilengedwe, ndi zinthu zina zambiri."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Landirani Malipiro a Bitcoin pa Bizinesi Yanu",
	"guide_header": "MULI OKONZEKA KULANDIRA BITCOIN PA BIZINESI YANU?"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Momwe Mungalandirire Malipiro a Bitcoin",
	"wallets_header": "PEZANI CHIKWAMA CHA BITCOIN CHAULERE KUTI MULANDIRE MALIPIRO A BITCOIN",
	"wallets_intro_1": "Zikwama zonse za Bitcoin zimagwirizana, choncho makasitomala anu angakulipirani mu Bitcoin mosasamala za chikwama chomwe akugwiritsa ntchito.",
	"wallets_intro_2": "Zikwama za Bitcoin yokha:",
	"wallets_intro_3": "Izi ndi zikwama zenizeni za Bitcoin zomwe zimatsegula phindu lonse la Bitcoin: opanda anthu apakati, malipiro ochepa, ndi opanda kubweza kapena chinyengo.",
	"wallets_intro_4": "Zikwama zosakaniza:",
	"wallets_intro_5": "Izi zimakuthandizani kusintha gawo lililonse la Bitcoin yanu kukhala madola pamene kasitomala akulipirani. Malipiro amakhalabe ochepa kuposa malipiro a khadi la ngongole, koma okwera kuposa malipiro enieni a Bitcoin.",
	"wallets_intro_6": "Zonse ziwiri ndi njira zabwino zolandirira Bitcoin. Chikwama chomwe mungagwiritse ntchito chidzadalira kukula ndi mtundu wa bizinesi yanu.",
	"wallets_choice_sole": "zikwama za bizinesi za mwini mmodzi",
	"wallets_choice_multiple": "zikwama za bizinesi za ogwira ntchito ambiri",
	"wallets_choice_online": "zikwama za bizinesi za pa intaneti",
	"wallets_choice_invoice": "zikwama za bizinesi zotumiza malipiro",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Mutha kulandira malipiro a Bitcoin ndi chipangizo chanu cha Square PoS chomwe mulipo kapena kuphatikiza pa shopo ya pa intaneti. Kulandiridwa kwa Bitcoin sikudayamba kukhala kosavuta chonchi.",
	"wallets_feature_bitcoin_only": "Chikwama cha Bitcoin yokha",
	"wallets_feature_no_info": "Sikufunika zambiri",
	"wallets_feature_in_person": "Malipiro amunthu ndi munthu okha",
	"wallets_feature_settles_bitcoin": "Kulipidwa 100% mu Bitcoin",
	"wallets_feature_hybrid": "Chikwama chosakaniza",
	"wallets_feature_info": "Zambiri za bizinesi zikufunika",
	"wallets_feature_in_person_online": "Malipiro amunthu ndi munthu ndi pa intaneti",
	"wallets_feature_settles_both": "Kulipidwa mu Bitcoin ndi madola",
	"wallets_feature_multiple_employees": "Kuthandizira ogwira ntchito ambiri (BPTs)",
	"wallets_feature_self_hosted": "Kudzisamalira wekha = malipiro 0%",
	"wallets_feature_online_store": "Kuphatikiza ndi shopo ya pa intaneti",
	"wallets_feature_invoicing": "Pulogalamu yaulere yotumizira malipiro",
	"wallets_get_wallet": "PEZANI CHIKWAMA"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Mafunso Ofunsidwa Kawirikawiri pa Kulandira Bitcoin",
	"faq_description": "Muli ndi mafunso okhudza kulandira malipiro a Bitcoin pa bizinesi yanu?",
	"faq_header": "MULI NDI MAFUNSO OKHUDZA KULANDIRA MALIPIRO A BITCOIN?",
	"faq_s1": "Bitcoin ndi chiyani?",
	"faq_s1_c1": "Bitcoin ndi zinthu ziwiri: ndalama zadigitala ndi netiweki ya makompyuta.",
	"faq_s1_c2": "Mutha kutumiza bitcoin (ndalama zadigitala) mwachindunji kwa anthu ena pogwiritsa ntchito Netiweki ya Bitcoin.",
	"faq_s1_c3": "Netiweki ya Bitcoin imagwira ntchito popanda anthu apakati kapena olamulira alikulu, monga mabanki kapena makampani a ma khadi a ngongole, choncho mutha kupewa malipiro awo.",
	"faq_s1_c4": "Machitidwe a Bitcoin amafika msanga (mphindi 10) ndipo sangabwezedwe, choncho mutha kugona mwamtendere kudziwa kuti ndalama zanu ndi zanu.",
	"faq_s2": "Bitcoin ingathandize bwanji bizinesi yanga?",
	"faq_s2_c1": "Bitcoin imakuthandizani kulandira malipiro ndi malipiro ochepa ndi kupeza makasitomala ambiri. Malipiro a Bitcoin ali ndi malipiro ochepa opanda kachepe, amafika nthawi yomweyo, ndipo sathe kubwezedwa.",
	"faq_s2_c2": "Kulandira Bitcoin ndi kwaulere ndipo kumakuthandizani kulembetsa bizinesi yanu pa mapu a amalonda a Bitcoin kuti ogwiritsa ntchito Bitcoin apeze bizinesi yanu mosavuta.",
	"faq_s2_c3": "Onani njira zonse zomwe Bitcoin ndi yabwino kwa bizinesi.",
	"faq_s3": "Ndingalandire bwanji malipiro a Bitcoin?",
	"faq_s3_c1": "Chomwe mukufunika kulandira malipiro a Bitcoin ndi chikwama cha Bitcoin chaulere.",
	"faq_s3_c2": "Gaidi yathu ya zikwama idzakuthandizani kukhazikitsa msanga kuti mutsegule phindu la kulandira Bitcoin lero!",
	"faq_s3_c3": "Onani Gaidi ya Zikwama",
	"faq_s4": "Kodi ndingasinthe Bitcoin yomwe ndalandira kukhala ndalama zakomweko?",
	"faq_s4_c1": "Inde! Pogwiritsa ntchito chikwama chosakaniza, mutha kusintha mwachindunji Bitcoin yomwe mwalandira kukhala ndalama zakomweko pamene malipiro alandidwa.",
	"faq_s4_c2": "Gaidi yathu ya zikwama ingathandize kukhazikitsa msanga ndi mosavuta.",
	"faq_s4_c3": "Mutha kusankhanso kusunga gawo la malipiro omwe mwalandira ngati Bitcoin. Kusunga mu Bitcoin kuli ndi phindu zambiri:",
	"faq_s4_c4": "Bitcoin ndi dongosolo la ndalama lotetezedwa kwathunthu.",
	"faq_s4_c5": "Bitcoin ilibe kukwera kwa mitengo.",
	"faq_s4_c6": "Phindu izi zimapangitsa Bitcoin njira yabwino yosungira ndalama kwa nthawi yaitali.",
	"faq_s4_c7": "Ngakhale mutasankha kusintha malipiro anu onse a Bitcoin kukhala madola, mumapindulabe ndi kulandira malipiro ndi malipiro ochepa kwambiri pomwe mukupeza makasitomala atsopano.",
	"faq_s5": "Kodi ndingalandire malipiro a Bitcoin pamaso ndi pamaso?",
	"faq_s5_c1": "Inde! N'kosavuta kulandira malipiro a Bitcoin pamaso ndi pamaso pogwiritsa ntchito chikwama cha Bitcoin.",
	"faq_s5_c2": "Gaidi yathu ya zikwama ingathandize kusankha chikwama cha Bitcoin chabwino kwambiri kwa bizinesi yanu.",
	"faq_s5_c3": "Onani Gaidi ya Zikwama",
	"faq_s6": "Kodi ndingalandire malipiro a Bitcoin pa intaneti?",
	"faq_s6_c1": "Inde! N'kosavuta kulandira malipiro a Bitcoin pa intaneti ndi shopo yanu ya pa intaneti yomwe ilipo.",
	"faq_s6_c2": "Onani gaidi yathu ya zikwama kuti mudziwe zambiri.",
	"faq_s7": "Ndingadziwitse bwanji makasitomala anga kuti ndimalandira Bitcoin?",
	"faq_s7_c1": "Timapereka zitikiti zaulere za 'Bitcoin Imalandiridwa Pano' zomwe mungaonetse mu bizinesi yanu kuti makasitomala anu adziwe kuti mumalandira Bitcoin.",
	"faq_s7_c2": "Dinani pano kuti mupemphe zitikiti zanu.",
	"faq_s7_c3": "Mungathenso kulembetsa bizinesi yanu pa mapu a amalonda a Bitcoin kwaulere kuti mupeze makasitomala atsopano omwe akufuna kugwiritsa ntchito Bitcoin.",
	"faq_s7_c4": "Lembetsani tsopano.",
	"faq_s8": "Ndingapeze bwanji makasitomala ambiri polandira Bitcoin?",
	"faq_s8_c1": "Pali anthu mamiliyoni omwe ali ndi Bitcoin omwe akufuna kuwagwiritsa ntchito pa bizinesi zomwe zimalandira.",
	"faq_s8_c2": "Polandirangosimba malipiro a Bitcoin, bizinesi yanu ingalembedwe pa mapu aulere a amalonda a Bitcoin ndipo mungapeze makasitomala atsopano.",
	"faq_s8_c3": "Lembetsani tsopano.",
	"faq_s9": "Zimadya ndalama zingati kulandira Bitcoin?",
	"faq_s9_c1": "Kulandira Bitcoin pa bizinesi yanu ndi kwaulere 100%. Palibe mapangano kapena malipiro obisika.",
	"faq_s9_c2": "Onani gaidi yathu ya zikwama kuti muyambe kulandira malipiro a Bitcoin lero."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Gaidi ya Kulemba Ndalama kwa Bizinesi ya Bitcoin",
	"accounting_description": "Phunzirani momwe mungalembe bwino malipiro a Bitcoin mu kulemba ndalama kwa bizinesi yanu.",
	"accounting_header": "GAIDI YA KULEMBA NDALAMA YA BITCOIN",
	"accounting_s1_c1": "Kulandira Bitcoin kuli ndi phindu zambiri monga kulandira malipiro ndi malipiro ochepa ndi kupeza makasitomala ambiri.",
	"accounting_s1_c2": "Ngati mugwiritsa ntchito Chikwama Chosakaniza kuchokera ku Gaidi yathu ya Zikwama ndipo muzigulitsa mwachindunji 100% ya Bitcoin yomwe mwalandira kukhala madola, simukufunika kusintha chilichonse mu kulemba ndalama kwanu.",
	"accounting_s1_c3": "Onani Gaidi ya Zikwama.",
	"accounting_s1_c4": "Komabe, ngati musunga Bitcoin ina yomwe mwalandira ngati Bitcoin, mukuyenera kutsatira zambiri zingapo za kulemba ndalama kwanu. Izi zingaoneke zovuta poyamba, koma ndizosavuta kwambiri.",
	"accounting_s1_c5": "Chonde dziwani: gaidi iyi ndi yodziwitsira yokha ndipo siyoyenera kutengeredwa ngati uphungu wa misonkho.",
	"accounting_s1_c6": "Ngati mukufuna uphungu wa misonkho, tikumalangiza kwambiri Satoshi Pacioli Accounting Services, kampani yakauntingi yomwe imadziwa bwino za kulemba ndalama kwa Bitcoin.",
	"accounting_s2": "KUTSATIRA MTENGO WANU WOYAMBIRIRA",
	"accounting_s2_c1": "Kutsatira mtengo wanu woyambirira ndi kusiyana kwakukulu pakati pa kulemba ndalama kwa madola ndi kulemba ndalama kwa Bitcoin. Ngakhale mumaona bizinesi yanu mu Bitcoin, mukuyenera kunena mtengo wa madola wa machitidwe aliwonse pa misonkho yanu.",
	"accounting_s2_c2": "Ngati mugwiritsa ntchito QuickBooks, mutha kuchita izi mwachindunji pogwiritsa ntchito Bitcoin Sync plugin.",
	"accounting_s2_c3": "Ngati simugwiritsa ntchito QuickBooks, tikumalangiza Satoshi Pacioli Accounting Services, kampani yakauntingi yomwe imadziwa bwino za kulemba ndalama kwa Bitcoin.",
	"accounting_s2_c4": "Kuchita izi pamanja, mukungofunika kutsatira kuchuluka kwa Bitcoin yomwe mwalandira ndi mtengo wa madola wa machitidwe a Bitcoin tsiku limenelo.",
	"accounting_s2_c5": "Mutha kuona mtengo wapano wa Bitcoin mu madola pano.",
	"accounting_s2_c6": "Sungani zambiri izi mu spreadsheet ya Excel ndipo mupatseni mkauntanta wanu.",
	"accounting_s2_c7": "Mungathenso kubweretsa deta iyi mu Excel mwachindunji.",
	"accounting_s2_c8": "Mungathenso kuona mtengo wakale wa Bitcoin mu madola pa masiku ambuyo, choncho simukuyenera kuchita izi tsiku lililonse.",
	"accounting_s3": "KUGWIRITSA NTCHITO KAPENA KUGULITSA BITCOIN YANU",
	"accounting_s3_c1": "Ngati mugwiritsa ntchito Chikwama Chosakaniza kuchokera ku Gaidi yathu ya Zikwama ndipo muzigulitsa mwachindunji 100% ya Bitcoin yomwe mwalandira kukhala madola, simukufunika kusintha chilichonse mu kulemba ndalama kwanu.",
	"accounting_s3_c2": "Onani Gaidi ya Zikwama.",
	"accounting_s3_c3": "Ngati musankha kugwiritsa ntchito kapena kugulitsa Bitcoin ina yomwe mwalandira mutaisunga kwa kanthawi, mukungofunika kuwonjezera mtengo womwe mwagulitsira mu spreadsheet yanu ya Excel yotsatira mtengo wanu woyambirira.",
	"accounting_s3_c4": "Mwachitsanzo, ngati mwalandira Bitcoin wopanda mtengo wa $100 pa January 1 ndipo mwasankha kugulitsa kapena kugwiritsa ntchito pa February 1 pamtengo watsopano wa $110, mukuyenera kulemba phindu la $10 mu kulemba ndalama kwanu.",
	"accounting_s3_c5": "Izi zingathenso kuchitika mosiyana. Mwachitsanzo, ngati mwalandira Bitcoin wopanda mtengo wa $100 pa January 1 ndipo mwasankha kugulitsa kapena kugwiritsa ntchito pa February 1 pamtengo watsopano wa $90, mukuyenera kulemba kutayika kwa $10 mu kulemba ndalama kwanu.",
	"accounting_s4": "NDIKUFUNA THANDIZO ZAMBIRI",
	"accounting_s4_c1": "Ngati mukufuna thandizo lowonjezeka kubweretsa Bitcoin mu kulemba ndalama kwa bizinesi yanu, tikumalangiza kwambiri Satoshi Pacioli Accounting Services, kampani yakauntingi yomwe imadziwa bwino za kulemba ndalama kwa Bitcoin.",
	"accounting_s4_c2": "Phunzirani zambiri za Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Mapu a Amalonda a Bitcoin - Lembetsani bizinesi yanu kwaulere",
	"maps_header": "LEMBETSANI PA MAPU A AMALONDA A BITCOIN NDI KUPEZA MAKASITOMALA AMBIRI",
	"maps_request_details": "Lembani zambiri za bizinesi yanu pansipa ndipo tikulembetsani pa mapu a amalonda a Bitcoin kwaulere. Izi zidzathandiza ogwiritsa ntchito Bitcoin kupeza bizinesi yanu ndi kugwiritsa ntchito Bitcoin yawo pa bizinesi yanu!",
	"maps_view": "Onani mapu pano."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Bizinesi yanu idzalembetsedwa pa mapu a amalonda a Bitcoin mu sabata 1 mpaka 2.",
	"kit_success_2": "Onani mapu pano."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Chipangizo cha Bizinesi cha Bitcoin",
	"kit_header": "SINDIKIZANI CHIPANGIZO CHANU CHA BIZINESI CHA BITCOIN",
	"kit_request": "PEMPHANI CHIPANGIZO CHANU CHAULERE",
	"kit_request_details": "Chipangizo chilichonse cha Bizinesi cha Bitcoin chimaphatikiza mapepala awiri kuti zikhale zosavuta kupangitsa malonda akomweko kulandira Bitcoin.",
	"kit_country_global_print": "Padziko lonse — Sindikizani nokha",
	"kit_enter_address": "Lembani adilesi yanu ndipo tikutumizani Chipangizo cha Bizinesi cha Bitcoin chaulere mu envelopu yoyera. Deta ya adilesi imachotsedwa chipangizo chikatumizidwa.",
	"kit_print_details": "Mutha kutengapo mbali posindikiza mapepala anu, kulikonse komwe muli! Mutha kutumiziranso malonda gaidi yathu ya bizinesi yadigitala kuti mupuse kusindikiza.",
	"kit_view_files": "ONANI MAFAYILO",
	"kit_digital_kit": "CHIPANGIZO CHADIGITALA",
	"kit_resources": "CHIPANGIZO CHILICHONSE CHIMALUMIKIZANA NDI ZIPANGIZO ZAULERE IZI"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Mulandira Chipangizo chanu cha Bizinesi cha Bitcoin mu sabata 1 mpaka 2 mu envelopu yoyera."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Zitikiti za Bitcoin Imalandiridwa Pano",
	"stickers_header": "PEZANI ZITIKITI ZANU ZAULERE ZA 'BITCOIN IMALANDIRIDWA PANO'",
	"stickers_request": "Pezani zitikiti zanu zaulere",
	"stickers_request_details": "Dziwitsani makasitomala anu kuti mumalandira malipiro a Bitcoin ndi zitikiti zaulere izi za 'Bitcoin Imalandiridwa Pano'.",
	"stickers_country_global_print": "Padziko lonse — Sindikizani nokha",
	"stickers_request_instructions": "Mulandira zitikiti zitatu za 'Bitcoin Imalandiridwa Pano' mu envelopu yoyera. Ngati mukufuna zitikiti zoposa zitatu kwa bizinesi yanu, khalani omasuka kupempha kangapo. Deta ya adilesi imachotsedwa zitikiti zatumizidwa.",
	"stickers_print_details": "Mutha kusindikiza zitikiti zanu za 'Bitcoin Imalandiridwa Pano', kulikonse komwe muli! Dinani pa chilankhulo chanu pansipa kuti muone mafayilo a zitikiti ndi malangizo.",
	"stickers_request_language": "Simukuona chilankhulo chanu? Dzadzani fomu yomwe ili pansipa kuti mupemphe mafayilo a zitikiti za 'Bitcoin Imalandiridwa Pano' mu chilankhulo chanu."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Mulandira zitikiti zanu mu sabata 1 mpaka 2 mu envelopu yoyera. Envelopu iliyonse imaphatikiza zitikiti 3. Ngati mukufuna zitikiti zoposa 3 kwa bizinesi yanu, khalani omasuka kupempha paketi ina!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Tidzapanga ndi kufalitsa fayilo yanu ya zitikiti mu masabata 3 mpaka 4. Zikomo chifukwa cha kupirira kwanu!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Sindikizani Chipangizo Chanu cha Bizinesi cha Bitcoin",
	"english_bbk_files_description": "Tsitsani mafayilo a mapepala pano.",
	"english_header": "SINDIKIZANI MAPEPALA ANU A CHIPANGIZO CHA BIZINESI CHA BITCOIN CHA CHINGEREZI"
});

console.log('\nDone! Business files created for Chichewa (ny).');
