/**
 * Creates Hausa (ha) translation files for all business/ pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ha';
const today = '2026-04-10';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin yana da kyau ga kasuwanci",
	"biz_header": "BITCOIN YANA DA KYAU GA KASUWANCI",
	"biz_s1": "Ƙananan kuɗin aiki ba tare da mafi ƙarancin adadi ba",
	"biz_s1_c1": "Bitcoin yana ba ka damar karɓar kuɗi kai tsaye daga abokan ciniki, kamar tsabar kuɗi. Cibiyar sadarwar Bitcoin tana aiki ba tare da masu shiga tsakani ba, kamar bankuna da kamfanonin katin kuɗi, waɗanda ke ɗaukar kuɗin aiki mai yawa.",
	"biz_s2": "Saurin warwarewa",
	"biz_s2_c1": "Kamar tsabar kuɗi, biyan kuɗin Bitcoin ana warware su nan take. Ba ka buƙatar jiran kamfanin katin kuɗi ko banki ya biya maka ba. A maimakon haka, kana samun kuɗin ka nan da nan.",
	"biz_s3": "Babu chargebacks kuma babu zamba",
	"biz_s3_c1": "Saboda biyan kuɗin Bitcoin na faruwa kai tsaye tsakanin ka da abokin ciniki na ka, babu wanda zai iya karɓar kuɗin baya ta hanyar chargeback.",
	"biz_s3_c2": "Ba za a iya aika jabu Bitcoin ta hanyar cibiyar sadarwar Bitcoin ba, wanda ke nufin ba sai ka damu da ma'amaloli na zamba waɗanda za su iya cutar da kasuwancinka ba.",
	"biz_s4": "Sami ƙarin abokan ciniki",
	"biz_s4_c1": "Miliyoyin mutane suna da Bitcoin kuma suna son kashe shi a wuraren da suka karɓe shi.",
	"biz_s4_c2": "Ta hanyar karɓar Bitcoin kasuwancinka na iya shiga cikin taswirar 'yan kasuwa na Bitcoin kuma a sami bayyanarwa kyauta ga sabbin abokan ciniki.",
	"biz_s4_c3": "Karɓar Bitcoin kyauta ne 100%. Babu kwangilar kuma babu kuɗin ɓoye."
});

writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Koyi dalilin da ya sa Bitcoin ke da kyau ga kasuwanci",
	"why_header": "BITCOIN YANA DA KYAU GA KASUWANCI",
	"why_good_for_you": "BITCOIN YANA DA KYAU GAREKA MA!",
	"why_learn_more_lowercase": "Ƙara koyo.",
	"why_s1": "Bitcoin ba shi da hauhawar farashi",
	"why_s1_c1": "Hauhawar farashi tana faruwa ne idan aka buga ko ƙirƙiri ƙarin kuɗi daga wofi. Wannan yana sa kuɗinka su yi ƙarancin daraja da lokaci.",
	"why_s1_c2": "Bitcoin yana da tanadin daidaitaccen adadi, wanda ke nufin babu wanda zai iya buga ƙarin Bitcoin.",
	"why_s2": "Bitcoin ba shi da guguwar bankuna",
	"why_s2_c1": "Bankuna da dama a Amurka sun rushe saboda guguwar bankuna a cikin shekarun baya-bayan nan.",
	"why_s2_c2": "Maimakon kawai ajiye kuɗinka, bankuna suna saka su da ba da rance. Idan waɗannan jarin sun gaza, ba su da isassun kuɗi su mayar maka da naka.",
	"why_s2_c3": "Kuma asusun inshorar FDIC yana da dala 1 kawai a kowace dala 100 da suke inshorar su.",
	"why_s3": "Bitcoin ba ya buƙatar izini",
	"why_s3_c1": "Ba kamar hanyoyin kuɗi na gargajiya ba, Bitcoin ba ya buƙatar izini don amfani.",
	"why_s3_c2": "Wannan yana nufin babu wanda zai iya hana ka amfani da Bitcoin saboda wani dalili. Shi ne cibiyar sadarwar kuɗi ta farko da za ka iya amfani da ita ba tare da tsoron tace-tace ko kwace ba.",
	"why_s4": "Bitcoin yana gina duniya mafi kyau",
	"why_s4_c1": "Bitcoin fasaha ce da aka rashin fahimta wadda ke gina duniya mafi kyau.",
	"why_s4_c2": "Bitcoin ya ba da damar masu fafutikar kare haƙƙin ɗan adam su yi faɗa don 'yanci, ya rage fitar da iskar methane a duniya, ya ceci wuraren shakatawa na ƙasa, da ƙari da yawa."
});

writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Karɓi biyan kuɗi na Bitcoin a kasuwancinka",
	"guide_header": "KUN SHIRYA DON KARƁAR BITCOIN A KASUWANCINKU?"
});

writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Tambayoyin da ake yawan yi game da karɓar Bitcoin",
	"faq_description": "Kuna da tambayoyi game da karɓar biyan kuɗi na Bitcoin a kasuwancinku?",
	"faq_header": "KUNA DA TAMBAYOYI GAME DA KARƁAR BIYAN KUƊI NA BITCOIN?",
	"faq_s1": "Menene Bitcoin?",
	"faq_s1_c1": "Bitcoin abubuwa biyu ne: kuɗi na dijital da cibiyar sadarwa ta kwamfuta.",
	"faq_s1_c2": "Kuna iya aika bitcoin (kuɗi na dijital) kai tsaye ga wasu mutane ta amfani da cibiyar sadarwar Bitcoin.",
	"faq_s1_c3": "Cibiyar sadarwar Bitcoin tana aiki ba tare da masu shiga tsakani ko hukumomin tsakiya ba, kamar bankuna ko kamfanonin katin kuɗi, don haka kuna iya guje wa kuɗin aikinsu.",
	"faq_s1_c4": "Ma'amalolin Bitcoin suna samun warwarewa ta ƙarshe cikin sauri (minti 10) kuma ba za a iya soke su ba, don haka kuna iya kwana lafiya da sanin cewa kuɗinku na gaske naku ne.",
	"faq_s2": "Yaya Bitcoin zai amfani kasuwancina?",
	"faq_s2_c1": "Bitcoin yana ba ku damar karɓar kuɗi tare da ƙananan kuɗin aiki da samun sabbin abokan ciniki. Biyan kuɗin Bitcoin yana da ƙananan kuɗin aiki ba tare da mafi ƙarancin adadi ba, ana warware su nan take kuma ba sa iya yin chargebacks ko zamba.",
	"faq_s2_c2": "Karɓar Bitcoin kyauta ne kuma yana ba ka damar shigar da kasuwancinka cikin taswirar 'yan kasuwa na Bitcoin don Bitcoin masu amfani su sami ka cikin sauƙi.",
	"faq_s2_c3": "Duba duk hanyoyin da Bitcoin ke da kyau ga kasuwanci.",
	"faq_s3": "Yaya zan karɓi biyan kuɗi na Bitcoin?",
	"faq_s3_c1": "Kana buƙatar wallet na Bitcoin kyauta kawai don karɓar biyan kuɗi na Bitcoin.",
	"faq_s3_c2": "Jagorancin wallet ɗinmu zai taimaka maka ka fara cikin sauri da sauƙi don ka iya fara cin gajiyar biyan kuɗi na Bitcoin yau!",
	"faq_s3_c3": "Duba jagorancin wallet",
	"faq_s4": "Zan iya canza biyan kuɗin Bitcoin da na karɓa zuwa kuɗin gida?",
	"faq_s4_c1": "Eh! Da wallet mai haɗe-haɗe, kuna iya canza biyan kuɗin Bitcoin da kuka karɓa zuwa kuɗin gida nan take lokacin da kuka karɓi biyan kuɗi.",
	"faq_s4_c2": "Jagorancin wallet ɗinmu zai taimaka maku ku fara cikin sauri da sauƙi.",
	"faq_s4_c3": "Kuna iya kuma zaɓar ajiye wani ɓangare na biyan kuɗin da kuka karɓa a Bitcoin. Ajiye kuɗi a Bitcoin yana da fa'idodi da yawa:",
	"faq_s4_c4": "Bitcoin tsarin kuɗi ne na cikakken ajiya.",
	"faq_s4_c5": "Bitcoin ba shi da hauhawar farashi.",
	"faq_s4_c6": "Waɗannan fa'idodin suna sa Bitcoin ya zama hanyar adana kuɗi ta dogon lokaci.",
	"faq_s4_c7": "Ko da kun yanke shawarar canza duk biyan kuɗin Bitcoin zuwa daloli, za ku ci gajiyar ƙananan kuɗin aiki da yuwuwar samun ƙarin abokan ciniki.",
	"faq_s5": "Zan iya karɓar biyan kuɗi na Bitcoin da kaina?",
	"faq_s5_c1": "Eh! Karɓar biyan kuɗi na Bitcoin da kanka yana da sauƙi tare da wallet na Bitcoin.",
	"faq_s5_c2": "Jagorancin wallet ɗinmu zai taimaka maka ka zaɓi mafi kyau ga kasuwancinka.",
	"faq_s5_c3": "Duba jagorancin wallet",
	"faq_s6": "Zan iya karɓar biyan kuɗi na Bitcoin ta yanar gizo?",
	"faq_s6_c1": "Eh! Karɓar biyan kuɗi na Bitcoin ta yanar gizo tare da shagon yanar gizo na ka yana da sauƙi.",
	"faq_s6_c2": "Duba jagorancin wallet ɗinmu don ƙarin bayani.",
	"faq_s7": "Yaya zan sanar da abokan ciniki cewa ina karɓar Bitcoin?",
	"faq_s7_c1": "Muna ba da stickers na 'Ana Karɓar Bitcoin a Nan' kyauta waɗanda za ku iya nuna a kasuwancinku don sanar da abokan ciniki cewa kuna karɓar Bitcoin.",
	"faq_s7_c2": "Danna nan don neman stickers.",
	"faq_s7_c3": "Kuna iya kuma shigar da kasuwancinku kyauta a cikin taswirar 'yan kasuwa na Bitcoin kuma ku sami bayyanarwa ga miliyoyin masu amfani da Bitcoin waɗanda ke son kashe Bitcoin ɗin su a kasuwannin da suka karɓe shi.",
	"faq_s7_c4": "Yi rajista yanzu.",
	"faq_s8": "Yaya zan sami ƙarin abokan ciniki ta hanyar karɓar Bitcoin?",
	"faq_s8_c1": "Miliyoyin masu amfani da Bitcoin suna son kashe Bitcoin ɗin su a kasuwannin da suka karɓe shi.",
	"faq_s8_c2": "Ta hanyar karɓar biyan kuɗi na Bitcoin kasuwancinka na iya shiga cikin taswirar 'yan kasuwa na Bitcoin kyauta kuma a sami bayyanarwa ga sabbin yuwuwar abokan ciniki.",
	"faq_s8_c3": "Yi rajista yanzu.",
	"faq_s9": "Nawa ne kuɗin karɓar Bitcoin?",
	"faq_s9_c1": "Karɓar Bitcoin a kasuwancinka kyauta ne 100%. Babu kwangilar kuma babu kuɗin ɓoye.",
	"faq_s9_c2": "Duba jagorancin wallet ɗinmu kuma ku fara karɓar biyan kuɗi na Bitcoin yau."
});

writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Jagorar Lissafin Kuɗi na Kasuwancin Bitcoin",
	"accounting_description": "Koyi yadda za ku rikoɗa biyan kuɗi na Bitcoin daidai a cikin lissafin kuɗin kasuwancinku.",
	"accounting_header": "JAGORAR LISSAFIN KUƊI NA BITCOIN",
	"accounting_s1_c1": "Karɓar Bitcoin yana da fa'idodi da yawa, ciki har da karɓar kuɗi tare da ƙananan kuɗin aiki da samun sabbin abokan ciniki.",
	"accounting_s1_c2": "Idan kuna amfani da wallet mai haɗe-haɗe daga jagorancin wallet ɗinmu kuma kuna sayar da 100% na Bitcoin da kuka karɓa zuwa daloli ta atomatik, ba ku buƙatar canza komai a lissafin kuɗinku na yanzu.",
	"accounting_s1_c3": "Duba jagorancin wallet.",
	"accounting_s1_c4": "Amma idan kun zaɓi ajiye wani ɓangare na biyan kuɗin Bitcoin da kuka karɓa a Bitcoin, za ku buƙaci bin diddigin wasu abubuwa don lissafin kuɗi. Yana iya zama kamar mai yawa a farkon, amma ainihin abu ne mai sauƙi.",
	"accounting_s1_c5": "Lura: wannan jagorar don sanarwa ce kawai kuma ba shawarar haraji ba ce.",
	"accounting_s1_c6": "Idan kuna buƙatar shawarar haraji, muna ba da shawarar Satoshi Pacioli Accounting Services, kamfanin lissafin kuɗi mai ƙwarewa a lissafin kuɗin Bitcoin.",
	"accounting_s2": "BI DIDDIGIN FARASHIN SIYAN KU",
	"accounting_s2_c1": "Bin diddigin farashin siya shine babban bambanci tsakanin lissafin kuɗi a daloli da Bitcoin. Ko da kuna tunani game da kasuwancinku a sharuddan Bitcoin kawai, kuna buƙatar ba da rahoton darajar dala na kowane ma'amala a filin harajin ku.",
	"accounting_s2_c2": "Idan kuna amfani da QuickBooks, kuna iya yin wannan ta atomatik tare da ƙarin Bitcoin Sync.",
	"accounting_s2_c3": "Idan ba ku amfani da QuickBooks, muna ba da shawarar Satoshi Pacioli Accounting Services, kamfanin lissafin kuɗi mai ƙwarewa a lissafin kuɗin Bitcoin.",
	"accounting_s2_c4": "Don bin diddigin hannu, kawai ku rubuta adadin Bitcoin da aka karɓa da darajar dala na ma'amalar Bitcoin a wannan rana.",
	"accounting_s2_c5": "Kuna iya ganin farashin dala na Bitcoin na yanzu a nan.",
	"accounting_s2_c6": "Bi diddigin waɗannan bayanai a cikin jadawalin Excel kuma ku ba da shi ga mai lissafin kuɗinku.",
	"accounting_s2_c7": "Kuna iya kuma shigo da waɗannan bayanai zuwa Excel ta atomatik.",
	"accounting_s2_c8": "Kuna iya kuma ganin farashin dala na Bitcoin na tarihi na kwanakin baya, don haka ba ku buƙatar yin wannan kowace rana.",
	"accounting_s3": "KASHE KO SAYAR DA BITCOIN",
	"accounting_s3_c1": "Idan kuna amfani da wallet mai haɗe-haɗe daga jagorancin wallet ɗinmu kuma kuna sayar da 100% na Bitcoin da kuka karɓa zuwa daloli ta atomatik, ba ku buƙatar canza komai a lissafin kuɗinku na yanzu.",
	"accounting_s3_c2": "Duba jagorancin wallet.",
	"accounting_s3_c3": "Idan kun zaɓi kashe ko sayar da wani ɓangare na Bitcoin da kuka karɓa daga baya, kawai ku ƙara farashin sayarwa a jadawalin Excel inda kuke bin diddigin farashin siyanku.",
	"accounting_s3_c4": "Misali, idan kun karɓi Bitcoin mai darajar $100 a ranar 1 ga Janairu kuma kuka yanke shawarar sayar da ko kashe shi a ranar 1 ga Fabrairu da sabon darajar $110, za ku buƙaci rikoɗa ribar jari ta $10 a cikin lissafin kuɗinku.",
	"accounting_s3_c5": "Wannan na iya aiki a ɓangarorin biyu. Misali, idan kun karɓi Bitcoin mai darajar $100 a ranar 1 ga Janairu kuma kuka yanke shawarar sayar da ko kashe shi a ranar 1 ga Fabrairu da sabon darajar $90, za ku buƙaci rikoɗa asarar jari ta $10 a cikin lissafin kuɗinku.",
	"accounting_s4": "INA BUƘATAR ƘARIN TAIMAKO",
	"accounting_s4_c1": "Idan kuna buƙatar ƙarin taimako wajen haɗa Bitcoin cikin lissafin kuɗin kasuwancinku, muna ba da shawarar Satoshi Pacioli Accounting Services, kamfanin lissafin kuɗi mai ƙwarewa a lissafin kuɗin Bitcoin.",
	"accounting_s4_c2": "Ƙara koyo game da Satoshi Pacioli Accounting Services."
});

writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Yadda za a karɓi biyan kuɗi na Bitcoin",
	"wallets_header": "SAMI WALLET NA BITCOIN KYAUTA DON KARƁAR BIYAN KUƊI",
	"wallets_intro_1": "Duk wallets na Bitcoin suna aiki tare, don haka abokan ciniki za su iya biya muku da Bitcoin ba tare da la'akari da wane wallet suke amfani da shi ba.",
	"wallets_intro_2": "Wallets na Bitcoin na gaske:",
	"wallets_intro_3": "Waɗannan wallets ne na Bitcoin na gaske waɗanda ke buɗe duk fa'idodin Bitcoin: babu masu shiga tsakani, ƙananan kuɗin aiki kuma babu chargebacks ko zamba.",
	"wallets_intro_4": "Wallets masu haɗe-haɗe:",
	"wallets_intro_5": "Waɗannan suna ba ku damar canza kowane ɓangare na Bitcoin ɗinku zuwa daloli nan take lokacin da abokin ciniki ya biya maku. Kuɗin aiki har yanzu sun fi ƙanƙanta fiye da katin kuɗi, amma sun fi na biyan kuɗi na Bitcoin na gaske.",
	"wallets_intro_6": "Iri biyu duka hanyoyi ne masu kyau na karɓar Bitcoin. Wallet ɗin da ya dace ya dogara da girman kasuwancinku da irinsa.",
	"wallets_choice_sole": "wallets ga kasuwancin mutum ɗaya",
	"wallets_choice_multiple": "wallets ga kasuwancin ma'aikata da yawa",
	"wallets_choice_online": "wallets ga kasuwancin yanar gizo",
	"wallets_choice_invoice": "wallets ga kasuwancin biya bayan aiki",
	"wallets_name_breez": "BREEZ", "wallets_name_open_node": "OPEN NODE", "wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER", "wallets_name_square": "SQUARE", "wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Kuna iya karɓar biyan kuɗi na Bitcoin tare da na'urar Square PoS da kuke da ita ko haɗin yanar gizo. Karɓar biyan kuɗi na Bitcoin bai taɓa kasancewa mai sauƙi ba.",
	"wallets_feature_bitcoin_only": "Wallet na Bitcoin na gaske",
	"wallets_feature_no_info": "Ba a buƙatar bayani",
	"wallets_feature_in_person": "Biyan kuɗi na kai-da-kai kawai",
	"wallets_feature_settles_bitcoin": "Warwarewa 100% a Bitcoin",
	"wallets_feature_hybrid": "Wallet mai haɗe-haɗe",
	"wallets_feature_info": "Ana buƙatar bayanan kasuwanci",
	"wallets_feature_in_person_online": "Biyan kuɗi na kai-da-kai da na yanar gizo",
	"wallets_feature_settles_both": "Warwarewa a Bitcoin da daloli",
	"wallets_feature_multiple_employees": "Tallafin ma'aikata da yawa (BPT)",
	"wallets_feature_self_hosted": "Ɗaukar nauyin kanka = 0% kuɗin aiki",
	"wallets_feature_online_store": "Haɗin shagon yanar gizo",
	"wallets_feature_invoicing": "Software na biya bayan aiki kyauta",
	"wallets_get_wallet": "SAMI WALLET"
});

writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Taswirar Yan Kasuwa na Bitcoin — Shigar da Kasuwancinku Kyauta",
	"maps_header": "YI RAJISTA A TASWIRAR YAN KASUWA NA BITCOIN KUMA KU SAMI ƘARIN ABOKAN CINIKI",
	"maps_request_details": "Shigar da bayanan kasuwancinku a ƙasa kuma za mu shigar da ku cikin taswirar 'yan kasuwa na Bitcoin kyauta. Wannan zai sa masu amfani da Bitcoin su sami kasuwancinku kuma su kashe Bitcoin ɗin su a wurinku!",
	"maps_view": "Duba taswira a nan."
});

writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Za a shigar da kasuwancinku cikin taswirar 'yan kasuwa na Bitcoin cikin mako 1 zuwa 2.",
	"kit_success_2": "Duba taswira a nan."
});

writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Stickers na 'Ana Karɓar Bitcoin a Nan'",
	"stickers_header": "SAMI STICKERS NA 'ANA KARƁAR BITCOIN A NAN' KYAUTA",
	"stickers_request": "Neman stickers kyauta",
	"stickers_request_details": "Sanar da abokan ciniki cewa kuna karɓar biyan kuɗi na Bitcoin da waɗannan stickers na 'Ana Karɓar Bitcoin a Nan' kyauta.",
	"stickers_country_global_print": "Duniya baki ɗaya — Na buga stickers na kaina",
	"stickers_request_instructions": "Za ku sami stickers 'Ana Karɓar Bitcoin a Nan' guda uku a cikin ambulan fari mai sauƙi. Idan kuna buƙatar fiye da stickers uku ga kasuwancinku, kuna iya nema sake. Za a share bayanan adireshin bayan an aika stickers na kyauta.",
	"stickers_print_details": "Kuna iya buga stickers 'Ana Karɓar Bitcoin a Nan' naku ba tare da la'akari da inda kuke zaune ba! Danna harsheku a ƙasa don ganin fayilolin sticker da umarnin.",
	"stickers_request_language": "Ba ku ga harshenku? Cika takardar a ƙasa don neman fayilolin sticker na 'Ana Karɓar Bitcoin a Nan' a cikin harshenku."
});

writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Za ku sami stickers ɗinku cikin mako 1 zuwa 2 a cikin ambulan fari mai sauƙi. Kowane ambulan yana ɗauke da stickers 3. Idan kuna buƙatar fiye da stickers 3 ga kasuwancinku, kuna iya neman wani fakiti!"
});

writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Za mu ƙirƙira kuma mu buga fayilolin sticker ɗinku cikin makonni 3 zuwa 4. Mun gode da haƙurinku!"
});

writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Kayan Aikin Kasuwancin Bitcoin",
	"kit_header": "BUGA KAYAN AIKIN KASUWANCIN BITCOIN NAKU",
	"kit_request": "NEMAN KAYAN AIKI KYAUTA",
	"kit_request_details": "Kowane kayan aikin kasuwancin Bitcoin ya ƙunshi takardun bugu guda biyu waɗanda ke sauƙaƙa shawo kan kasuwancin gida su karɓi Bitcoin.",
	"kit_country_global_print": "Duniya baki ɗaya — Na buga kayan aikina kaina",
	"kit_enter_address": "Shigar da adireshin wasiƙa kuma za mu aiko muku da kayan aikin kasuwancin Bitcoin kyauta a cikin ambulan fari mai sauƙi. Za a share bayanan adireshin bayan an aika kayan aiki.",
	"kit_print_details": "Kuna iya shiga ta hanyar buga takardun bugu naku ba tare da la'akari da inda kuke zaune ba! Kuna iya kuma jagoranci kasuwanci zuwa kayan aikin dijital don guje wa bugawa.",
	"kit_view_files": "DUBA FAYILOLI",
	"kit_digital_kit": "KAYAN AIKIN DIJITAL",
	"kit_resources": "KOWANE KAYAN AIKI YA HAƊA DA WAƊANNAN KAYAN AIKI KYAUTA"
});

writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Za ku sami kayan aikin kasuwancin Bitcoin ɗinku cikin mako 1 zuwa 2 a cikin ambulan fari mai sauƙi."
});

writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Buga kayan aikin kasuwancin Bitcoin naku",
	"english_bbk_files_description": "Zazzage fayilolin takardun bugu a nan.",
	"english_header": "BUGA KAYAN AIKIN KASUWANCIN BITCOIN NAKU NA TURANCI"
});

console.log(`\nDone! Created 14 business files.`);
