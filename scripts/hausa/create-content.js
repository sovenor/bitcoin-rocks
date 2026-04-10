/**
 * Creates Hausa (ha) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin ba shi da Guguwar Bankuna",
	"bank_runs_header": "BITCOIN BA SHI DA GUGUWAR BANKUNA",
	"bank_runs_header_2": "AMMA BANKINKA NA IYA SAMUN SU",
	"bank_runs_what": "MENENE GUGUWAR BANKUNA?",
	"bank_runs_what_content_1": "Guguwar bankuna tana faruwa ne idan mutane da yawa suka yi ƙoƙarin cire kuɗinsu daga banki a lokaci guda.",
	"bank_runs_what_content_2": "Idan bankuna ba su da isassun kuɗi don biyan cirewa, za su iya rushe gaba ɗaya idan guguwar bankuna ta faru.",
	"bank_runs_how": "YAYA GUGUWAR BANKUNA KE FARUWA?",
	"bank_runs_how_content_1": "Tsarin bankinmu 'ajiye na ɓangare' ne wanda ke nufin bankuna ba su kawai ajiye kuɗinka a rumbu suna jiran ka kashe shi ko cire shi ba.",
	"bank_runs_how_content_2": "A maimakon haka, bankinka yana ɗaukar kuɗinka ya ba da rance ko saka jari. Wannan na iya kulle kuɗinka tsawon lokaci, ko da yake bankin ya yi maka alkawarin cewa za ka iya cire kuɗinka a kowane lokaci.",
	"bank_runs_how_content_3": "To me zai faru idan ka yi ƙoƙarin cire kuɗinka bayan bankin ya riga ya ba da rance ko saka jari?",
	"bank_runs_how_content_4": "Ba matsala ba ce idan kai ne kaɗai da ke ƙoƙarin cirewa. Bankin zai ba ka kuɗin wani. Amma me zai faru idan mutane da yawa suka yi ƙoƙarin cirewa a lokaci guda?",
	"bank_runs_how_content_5": "Mutane da yawa a Amurka sun gano lokacin da aka yi guguwa a Silicon Valley Bank a Maris 2023.",
	"bank_runs_how_content_6": "Bankin ya saka kuɗin abokan cinikansa a takardun bashi na gwamnati waɗanda aka kulle har zuwa shekaru 30. Mafi muni, darajar waɗannan takardun bashi ta fadi sosai kwanan nan, don haka Silicon Valley Bank ba zai iya sayar da su don samun kuɗin masu ajiya ba. Sun kasance marasa iya biya.",
	"bank_runs_how_content_7": "Yayin da ƙarin mutane suka gano, matsalar ta ƙara tsananta. Ƙarin buƙatun cirewa sun shigo, amma da yawa ba a sarrafa su ba. Dubban kasuwanni sun fahimci cewa ba za su iya biyan albashin ma'aikatansu ba saboda bankin ya gaza.",
	"bank_runs_how_content_8": "FDIC ta shiga ciki ta amince da biyan masu ajiya. Matsalar ta warware? Ba lallai ba...",
	"bank_runs_fdic": "INSHORAR FDIC TANA KARE KUƊINA?",
	"bank_runs_fdic_content_1": "Inshorar FDIC an tsara ta ne don kare masu ajiya a banki idan banki ya gaza. Ana inshorar ajiya har zuwa $250,000 a kowane mai ajiya. Ya yi kyau, ko ba haka ba?",
	"bank_runs_fdic_content_2": "Ba lallai ba. Idan banki ya gaza, daga ina FDIC za ta sami kuɗi? Suna da asusun inshora mai dala biliyan 125.",
	"bank_runs_fdic_content_3": "Wannan ya yi kama da kuɗi da yawa har sai ka kwatanta shi da adadin ajiya da suke inshorar su: kusan dala tiriliyan 10 ko dala biliyan 10,000.",
	"bank_runs_fdic_content_4": "FDIC ma tana nuna a shafin yanar gizo nata cewa tana da isassun kuɗi a asusun inshora nata don rufe fiye da kashi 1% na ajiya kawai.",
	"bank_runs_fdic_content_5": "Idan banki ya gaza fiye da asusun inshorar FDIC, yana da yiwuwa (amma ba tabbataccen ba) gwamnatin Amurka za ta buga kuɗi don biyan masu ajiya.",
	"bank_runs_fdic_content_6": "Amma buga kuɗi yana haifar da hauhawar farashi, don haka ba hanya ce mai kyau ba.",
	"bank_runs_safe": "AKWAI BANKUNA DA BA SU AMFANI DA AJIYE NA ƁANGARE?",
	"bank_runs_safe_content_1": "Wasu bankuna sun yi ƙoƙarin zama 'bankuna masu aminci' waɗanda ba su ba da rance ko saka kuɗin masu ajiya ba.",
	"bank_runs_safe_content_2": "Ko da waɗannan bankuna masu aminci ba za su sami haɗarin guguwar bankuna kwata-kwata ba, an ƙi buƙatunsu na lasisi ta Federal Reserve.",
	"bank_runs_safe_content_3": "Saboda an hana su aiki, babu bankuna a yau da ba su amfani da ajiye na ɓangare.",
	"bank_runs_safe_content_4": "Da farin ciki, akwai hanya don barin tsarin ajiye na ɓangare ta hanyar zama bankinka. A'a, ba muna magana game da ɓoye tsabar kuɗi a ƙarƙashin katifarka ba.",
	"bank_runs_safe_content_5": "Ajiye kuɗi a tsabar kuɗi har yanzu yana da rauni ga hauhawar farashi.",
	"bank_runs_safe_content_6": "Muna magana ne game da Bitcoin: sabon tsarin kuɗi da ke ba ka damar zama bankinka.",
	"bank_runs_protect": "BITCOIN ZAI IYA KARE NI DAGA GUGUWAR BANKUNA?",
	"bank_runs_protect_content_1": "Eh, Bitcoin tsarin kuɗi ne na cikakken ajiya.",
	"bank_runs_protect_content_2": "Guguwar bankuna ba su yiwuwa a Bitcoin muddin ka cire Bitcoin ɗinka zuwa wallet ɗinka. Kada ka bari bitcoin ɗinka a musayar ko a cikin rufe kamar Bitcoin ETF.",
	"bank_runs_protect_content_3": "Duba jagorancin wallet ɗin Bitcoin mai sauƙi don koyon yadda ake cirewa zuwa wallet ɗinka.",
	"bank_runs_protect_content_4": "Da Bitcoin, a ƙarshe za ka iya mallaki kuɗinka."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Jagorar Wallet ɗin Bitcoin",
	"wallets_description": "Akwai wallets na Bitcoin da yawa masu bambanci a hanyoyi masu muhimmanci. Za ka iya sanin ko wallet ya dace da kai ta hanyar yin waɗannan tambayoyin masu sauƙi.",
	"wallets_header": "YADDA AKE AJIYE BITCOIN ƊINKA CIKIN AMINCI",
	"wallets_s1_c1": "Wallets na Bitcoin suna aiki tare, don haka za ka iya aika Bitcoin ga kowa ba tare da la'akari da wane wallet suke amfani da shi ba.",
	"wallets_s1_c2": "Akwai wallets na Bitcoin da yawa masu bambanci a hanyoyi masu muhimmanci. Za ka iya sanin ko wallet ya dace da kai ta hanyar yin waɗannan tambayoyin masu sauƙi:",
	"wallets_question_1": "SHIN WALLET NE NA KULA DA KANKA?",
	"wallets_s2_c1": "Ɗaya daga cikin sabbin abubuwan Bitcoin shine ikon ajiye shi ba tare da mai ajiya ba, kamar banki.",
	"wallets_s2_c2": "Idan kana riƙe bitcoin a musayar ko a ETF, kana rasa fa'idodin 'yancin bitcoin.",
	"wallets_s2_c3": "Wallets na kula da kanka suna buɗe cikakken ikon Bitcoin: kuɗin 'yanci.",
	"wallets_s2_c4": "Da wallet na kula da kanka, kai ne kaɗai da ke da ikon kashe ko canja wurin kuɗinka. Babu wanda zai iya hana ka aika ko karɓar kuɗinka.",
	"wallets_s2_c5": "Wallets na kula da kanka ana kuma kiran su wallets mara ajiya.",
	"wallets_s3_c1": "Wallets na ajiya wallets ne inda ba ka iko da kuɗinka.",
	"wallets_s3_c2": "Waɗannan wallets sun fi kama da tsarin banki inda dole ne ka amince da ɓangare na uku don samun kuɗinka. Idan Bitcoin ɗinka yana a musayar, kana amfani da wallet na ajiya.",
	"wallets_s3_c3": "Idan ka sayi Bitcoin ETF, kana amfani da wallet na ajiya wanda ba ya ba da damar cirewa zuwa kula da kanka.",
	"wallets_s3_c4": "Wallets na ajiya za su iya zama masu sauƙi, amma mai ajiya yana da ikon fasaha na satar duk kuɗin masu amfani a kowane lokaci.",
	"wallets_s3_c5": "Ba makullan ka ba, ba tsabar kuɗin ka ba!",
	"wallets_question_2": "MAI ZAFI NE KO MAI SANYI?",
	"wallets_s4_c1": "Wallets masu sanyi suna ajiye makullan Bitcoin ɗinka ta hanyar da ba ta taɓa bayyana su ga Intanet.",
	"wallets_s4_c2": "Wannan yana rage hanyoyin kai hari sosai, kuma ya fi dacewa da manyan adadin Bitcoin da ba ka buƙatar canja wurinsu akai-akai.",
	"wallets_s4_c3": "Za ka iya tunanin wallet mai sanyi a matsayin asusun ajiya na dogon lokaci.",
	"wallets_s5_c1": "Wallets masu zafi suna ajiye makullan Bitcoin ɗinka a na'ura mai haɗa da Intanet, kamar wayarka.",
	"wallets_s5_c2": "Galibi ana ɗaukar wallets masu zafi a matsayin masu aminci, amma za su iya samun ƙarin raunin tsaro fiye da wallets masu sanyi.",
	"wallets_s5_c3": "Za ka iya tunanin wallet mai zafi kamar wallet na zahiri. Ba za ka ajiye duk ajiyarka a wallet ɗinka ba, amma za ka ajiye wasu kuɗin kashe.",
	"wallets_s5_c4": "Wallets masu zafi suna sa ya fi sauƙi kashe Bitcoin ɗinka ba tare da fitar da duk ajiyarka daga ajiya mai sanyi ba.",
	"wallets_question_3": "YAYA ZAN YI MADADIN KALMAR DAWOWA TA?",
	"wallets_s6_c1": "Idan ka kafa wallet ɗin Bitcoin, na'urarka za ta ƙirƙira kalmar dawowa. Wannan kalmar dawowa (da ake kuma kira kalmar iri) tana ɗauke da kalmomi 12 ko 24.",
	"wallets_s6_c2": "Idan ka rasa damar shiga wallet ɗinka ko na'urarka ta daina aiki, za ka iya shigar da wannan kalmar dawowa zuwa sabon wallet don sake samun damar shiga Bitcoin ɗinka.",
	"wallets_s6_c3": "Yawancin wallets suna haɗa da takardar rubuta kalmar dawowa, amma mutane da yawa sun fi son yin madadin wannan kalma a kan ƙarfe. Wannan yana sa rasa kalmar dawowa ta zama ƙasa da yiwuwa a lokacin bala'i kamar gobara ko ambaliya.",
	"wallets_s6_c4": "Jameson Lopp ya gwada kayan madadin ƙarfe 70 don taimaka maka zaɓar wanda ya dace da kai.",
	"wallets_s6_c5": "Duba jagorar madadin Bitcoin ta ƙarfe na Jameson a nan.",
	"wallets_s6_c6": "Ko ci gaba da gogayya don bincika zaɓuɓɓukan wallet na Bitcoin.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Kana neman Jagorar Wallet ɗin Lightning?",
	"wallets_starter_wallet": "Wallet mai kyau na farawa", "wallets_mobile_app": "Manhajar wayar hannu", "wallets_2fa_support": "Tallafin 2FA", "wallets_air_gap_mode": "Yanayin rata ta iska", "wallets_air_gap_camera": "Yanayin rata ta iska + kyamara", "wallets_bitcoin_only": "Bitcoin kawai", "wallets_security_features": "Fasalolin tsaro da yawa", "wallets_free": "100% kyauta",
	"wallets_coldcard_mk5_costs": "Farashin $189", "wallets_coldcard_q_costs": "Farashin $289", "wallets_blockstream_jade_costs": "Farashin $79", "wallets_foundation_passport_costs": "Farashin $199", "wallets_seedsigner_costs": "Farashin sassa $50",
	"wallets_very_affordable": "Mai arha sosai", "wallets_pair_with_phone": "Haɗa da wayarka", "wallets_battery": "Baturin da ake caji", "wallets_build_your_own": "Gina naka", "wallets_qwerty_keyboard": "Cikakken maɓallin QWERTY", "wallets_qr_scanner": "Mai karanta lambar QR"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Yadda Ake Siyan Bitcoin - Jagora Mataki-Mataki",
	"buy_header": "YADDA AKE SIYAN BITCOIN",
	"buy_intro_c1": "Siyan Bitcoin a karon farko na iya zama kamar mai yawa, amma ainihin abu ne mai sauƙi idan ka raba shi zuwa mataki.",
	"buy_intro_c2": "Wannan jagora za ta bi ka ta hanyar siyan Bitcoin cikin aminci da ajiye shi a wallet ɗinka.",
	"buy_step_1_header": "MATAKI NA 1: ZAƁI ƘASARKA",
	"buy_step_1_description": "Ƙasashe daban-daban suna da zaɓuɓɓukan siyan Bitcoin daban-daban. Zaɓi ƙasarka don ganin mafi kyawun zaɓuɓɓuka a gare ka.",
	"buy_search_countries": "Nemo ƙasarka",
	"buy_country_united_states": "Amurka", "buy_country_australia": "Australiya", "buy_country_austria": "Ostiriya", "buy_country_belgium": "Belgium", "buy_country_brazil": "Brazil", "buy_country_canada": "Kanada", "buy_country_france": "Faransa", "buy_country_germany": "Jamus", "buy_country_ireland": "Ireland", "buy_country_italy": "Italiya", "buy_country_netherlands": "Netherlands", "buy_country_new_zealand": "New Zealand", "buy_country_spain": "Spain", "buy_country_united_kingdom": "Burtaniya",
	"buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Jamhuriyar Czech", "buy_country_denmark": "Denmark", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estonia", "buy_country_finland": "Finland", "buy_country_greece": "Greece", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hong Kong", "buy_country_hungary": "Hungary", "buy_country_iceland": "Iceland", "buy_country_india": "Indiya", "buy_country_israel": "Isra'ila", "buy_country_japan": "Japan", "buy_country_latvia": "Latvia", "buy_country_lithuania": "Lithuania", "buy_country_luxembourg": "Luxembourg", "buy_country_malta": "Malta", "buy_country_mexico": "Mexico", "buy_country_norway": "Norway", "buy_country_panama": "Panama", "buy_country_poland": "Poland", "buy_country_portugal": "Portugal", "buy_country_romania": "Romania", "buy_country_singapore": "Singapore", "buy_country_slovakia": "Slovakia", "buy_country_slovenia": "Slovenia", "buy_country_south_africa": "Afirka ta Kudu", "buy_country_south_korea": "Koriya ta Kudu", "buy_country_sweden": "Sweden", "buy_country_switzerland": "Switzerland", "buy_country_thailand": "Thailand", "buy_country_turkey": "Turkiyya", "buy_country_ukraine": "Ukraine", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "MATAKI NA 2: ZAƁI HANYAR BIYANKU",
	"buy_step_2_description": "Akwai hanyoyi guda biyu na siyan Bitcoin: ta hanyar canja wurin banki ko ta tsabar kuɗi.",
	"buy_method_bank_transfer": "CANJA WURIN BANKI", "buy_method_bank_fast": "Sauri da Sauƙi", "buy_method_bank_less_private": "Ƙarancin Sirri", "buy_method_bank_description": "Canja wurin banki shine hanyar da aka fi amfani da ita don siyan Bitcoin. Suna da sauri, masu dacewa, kuma galibi suna da ƙarancin kuɗin aiki.", "buy_method_choose_bank": "Zaɓi Canja Wurin Banki",
	"buy_method_cash": "TSABAR KUƊI", "buy_method_cash_private": "Ƙarin Sirri", "buy_method_cash_limited": "Iyakancen Zaɓuɓɓuka", "buy_method_cash_description": "Siyan da tsabar kuɗi yana ba da ƙarin sirri amma yana da ƙarancin zaɓuɓɓuka kuma na iya buƙatar ganin mutum ko amfani da ATM na Bitcoin.", "buy_method_choose_cash": "Zaɓi Tsabar Kuɗi",
	"buy_step_3_header": "MATAKI NA 3: ZAƁUƁƁUKAN SIYA",
	"buy_step_3_description": "Ga mafi kyawun zaɓuɓɓukan siyan Bitcoin ga ƙasarka da hanyar biyanku:",
	"buy_platform_recommended": "ANA BA DA SHAWARA",
	"buy_platform_strike_description": "Strike shine hanya mafi sauri da sauƙi ta siyan Bitcoin da ƙananan kuɗin aiki da tallafin Lightning Network nan take.",
	"buy_platform_swan_description": "Swan Bitcoin yana ƙwarewa a cikin sabis na Bitcoin kawai tare da dabarar siye-a-matsakaici da kayan ilimi.",
	"buy_platform_river_description": "River yana ba da siyan Bitcoin, haƙo, da sabis na ajiya tare da mai da hankali kan ilimi da tsaro.",
	"buy_platform_coinsquare_description": "Coinsquare musayar Bitcoin ce ta Kanada mai ƙarfin bin doka da tallafin abokan ciniki.",
	"buy_platform_kraken_description": "Kraken musayar Bitcoin ce mai tsufa tare da fasalolin ciniki masu ci gaba da ƙarfin tsaro.",
	"buy_platform_atm_description": "ATMs na Bitcoin suna ba ka damar siyan Bitcoin da tsabar kuɗi nan take. Nemo ɗaya kusa da kai ta amfani da Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq musayar mutum-zuwa-mutum ce mai rarrabawa da ke ba da ciniki na Bitcoin na sirri ba tare da KYC ba.",
	"buy_platform_feature_instant": "Siyan nan take", "buy_platform_feature_low_fees": "Ƙananan kuɗin aiki", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Siye-a-matsakaici", "buy_platform_feature_education": "Kayan ilimi", "buy_platform_feature_withdrawal": "Sauƙin cirewa", "buy_platform_feature_mining": "Haƙon Bitcoin", "buy_platform_feature_custody": "Sabis na ajiya", "buy_platform_feature_canadian": "Mai da hankali ga Kanada", "buy_platform_feature_regulated": "Musayar da aka tsara", "buy_platform_feature_support": "Tallafin abokan ciniki", "buy_platform_feature_established": "Dandali mai tsufa", "buy_platform_feature_security": "Ƙarfin tsaro", "buy_platform_feature_advanced": "Fasaloli masu ci gaba", "buy_platform_feature_cash": "Siyan tsabar kuɗi", "buy_platform_feature_anonymous": "Ƙarin sirri", "buy_platform_feature_p2p": "Mutum-zuwa-mutum", "buy_platform_feature_private": "Ciniki na sirri", "buy_platform_feature_decentralized": "Mai rarrabawa",
	"buy_platform_relai_description": "Relai manhajar Bitcoin kawai ce ta Switzerland tare da wallet na kula da kanka, shirye-shiryen saka jari ta atomatik, da ƙananan kuɗin aiki ga masu amfani na Turai.",
	"buy_platform_feature_bitcoin_only": "Bitcoin kawai", "buy_platform_feature_self_custody": "Wallet na kula da kanka", "buy_platform_feature_auto_invest": "Shirye-shiryen saka jari ta atomatik", "buy_platform_feature_european": "Mai da hankali ga Turai",
	"buy_step_4_header": "MATAKI NA 4: AJIYE BITCOIN ƊINKA CIKIN AMINCI",
	"buy_step_4_c1": "Bayan siyan Bitcoin, mataki mafi muhimmanci shine motsa shi zuwa wallet ɗinka inda kake iko da makullan sirri.",
	"buy_step_4_c2": "Barin Bitcoin a musayar yana da haɗari saboda ba ka mallaki Bitcoin ba — musayar ce take mallaka.",
	"buy_step_4_c3": "Idan kana iko da makullan sirrinka, kana da cikakken mallakar Bitcoin ɗinka kuma babu wanda zai iya karɓe shi daga gare ka.",
	"buy_step_4_c4": "Koyi yadda ake zaɓar wallet ɗin Bitcoin da ya dace da buƙatunka:",
	"buy_cta_wallets": "Duba Jagorar Wallet ɗin Bitcoin"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Jagorar Wallet ɗin Lightning na Bitcoin",
	"lightning_description": "Wallets na Lightning suna ba ka damar aika Bitcoin cikin sauri da arha yayin da kake kula da ikonka na mutum ɗaya.",
	"lightning_header": "JAGORAR WALLET ɗIN LIGHTNING",
	"lightning_s1_c1": "Lightning yana ba ka damar aika biyan kuɗi na Bitcoin cikin sauri da arha.",
	"lightning_s1_c2": "Yana da muhimmanci a sani cewa amfani da Lightning yana zuwa da kompromis. A madadin biyan kuɗi na Bitcoin masu sauri da arha, galibi kana sacrificing wani tsaro.",
	"lightning_s1_c3": "Gaba ɗaya, ya kamata a yi amfani da Lightning tare da ƙananan adadin bitcoin kawai. Ya kamata a ajiye manyan adadin bitcoin a wallet na hardware kawai.",
	"lightning_s1_c4": "Duba Jagorar Wallet ɗin Hardware don ƙarin bayani.",
	"lightning_s1_c5": "Ba duk wallets na Lightning iri ɗaya ba ne. Za ka iya sanin wane wallet ke da daidaituwar kompromis da ta dace da kai ta hanyar yin tambaya ɗaya mai sauƙi:",
	"lightning_question_1": "WACE DAIDAITUWAR KOMPROMIS CE TA DACE DA NI?",
	"lightning_s2_c1": "Ɗaya daga cikin sabbin abubuwan Bitcoin shine ikon ajiye shi ba tare da mai ajiya ba, kamar banki. Wallets na kula da kanka suna buɗe cikakken ikon Bitcoin.",
	"lightning_s2_c2": "Da wallet na kula da kanka, kai ne kaɗai da ke da ikon kashe ko canja wurin kuɗinka. Babu wanda zai iya hana ka, tace maka, ko sata daga gare ka.",
	"lightning_s2_c3": "Hanya mafi ikon mutum ɗaya ta amfani da Lightning shine gudanar da node ɗinka.",
	"lightning_s2_c4": "Wannan jagora tana mai da hankali kan wallets na Lightning masu sauƙi waɗanda ba su buƙatar node ɗinka ba.",
	"lightning_s2_c5": "Yana da muhimmanci a sani cewa ko da kana amfani da wallet na Lightning mara ajiya, har yanzu kana amincewa da mai ƙirƙirar wallet ɗin ya bar buga sabuntawa mai cutarwa.",
	"lightning_s3_c1": "Wallets na ajiya wallets ne inda ba ka iko da kuɗinka.",
	"lightning_s3_c2": "Waɗannan wallets sun fi kama da tsarin banki inda dole ne ka amince da ɓangare na uku don samun kuɗinka.",
	"lightning_s3_c3": "Wallets na ajiya za su iya zama masu sauƙi, amma mai ajiya yana da ikon fasaha na satar duk kuɗin masu amfani a kowane lokaci.",
	"lightning_s3_c4": "Wasu mutane sun fi son wallets na Lightning na ajiya don ƙananan adadin bitcoin saboda sauƙinsu. Kawai ka tuna: ba makullan ka ba, ba tsabar kuɗin ka ba!",
	"lightning_question_2": "ZAƁI WALLET ɗINKA",
	"lightning_s4_c1": "Da duk wannan a zuciya, yanzu za ka iya zaɓar wallet ɗin Lightning da ke da daidaituwar kompromis da ta dace da kai.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Fasaloli da yawa", "lightning_mobile_app": "Manhajar wayar hannu", "lightning_free": "100% kyauta", "lightning_merchants": "Mai kyau ga 'yan kasuwa", "lightning_starter": "Wallet mai kyau na farawa", "lightning_browser": "Na burauzar", "lightning_custodial": "Wallet na ajiya cikakke",
	"lightning_cta_hardware": "Kana neman Jagorar Wallet ɗin Hardware na Bitcoin?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Stickers na Bitcoin kyauta daga bitcoin.rocks",
	"stickers_description": "Liƙa sticker na Bitcoin a wurin jama'a don sa waɗanda ke kewayenka su koyi Bitcoin.",
	"stickers_header": "STICKERS NA BITCOIN KYAUTA",
	"stickers_choose_header": "ZAƁI FAKITIN STICKER ƊINKA",
	"stickers_choose_c1": "Manufarmu ita ce taimaka maka ka sa ƙarin mutane su koyi Bitcoin ta hanyar sanya stickers na Bitcoin a wuraren jama'a. Duk stickers ɗinmu suna da lambobin QR da ke haɗa zuwa shafukan ilimi game da",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "hauhawar farashi", "stickers_choose_c4": "Zaɓi fakitin sticker ɗinka a ƙasa",
	"stickers_text_pack": "FAKITIN RUBUTU", "stickers_signs_pack": "FAKITIN ALAMOMI",
	"stickers_instructions_1": "Shigar da adireshin wasiƙar ka kuma za mu aiko maka fakitin sticker na Bitcoin kyauta a wasiƙa! Za a aika stickers ɗinka a cikin ambulan fari mai sauƙi.",
	"stickers_instructions_2": "Za a share bayanan adireshin bayan an aika stickers na kyauta.",
	"stickers_share_header": "RABA WURAREN STICKER ƊINKA",
	"stickers_share_c1": "Raba wuraren sticker ɗinka tare da mu a Nostr kuma ka ga inda wasu ke sanya stickers ɗinsu.",
	"stickers_btn_share_on_nostr": "RABA A NOSTR", "stickers_btn_what_is_nostr": "MENENE NOSTR?",
	"stickers_flyers_link_before": "Yayin da kake nan, buga & liƙa ", "stickers_flyers_link_text": "takardun bugu na Bitcoin", "stickers_flyers_link_after": " don taimakawa wajen sa ƙarin mutane su koyi Bitcoin.",
	"stickers_country_global_print": "Duniya baki ɗaya — Na buga stickers na kaina", "stickers_country_global_order": "Duniya baki ɗaya — Yi odar manyan adadi",
	"placeholder_name_optional": "Suna (na zaɓi)", "placeholder_address_line_1": "Adireshin Layi na 1", "placeholder_address_line_2": "Adireshin Layi na 2 (na zaɓi)", "placeholder_city": "Birni", "placeholder_state": "Jiha", "placeholder_province": "Lardi", "placeholder_zip_code": "Lambar Gidan Waya", "placeholder_postal_code": "Lambar Gidan Waya", "placeholder_language": "Harshe", "placeholder_which_stickers": "Wane stickers?", "placeholder_email_optional": "Shigar da imel ɗinka don sanarwa (na zaɓi)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Katin gaisawa na Bitcoin kyauta daga bitcoin.rocks",
	"postcards_description": "Sami Fakitin Katin Gaisawa na Bitcoin kyauta kuma ka raba Bitcoin da wanda ka sani.",
	"postcards_header": "AN RUFE SHIRIN KATIN GAISAWA",
	"postcards_program_closed_message": "An ƙare shirin katin gaisawa na Bitcoin kyauta. Mun gode ga kowa da ya shiga wajen yaɗa ilimin Bitcoin ta wasiƙa!",
	"postcards_sticker_alternative_header": "SAMI STICKERS NA BITCOIN KYAUTA A MAIMAKON",
	"postcards_sticker_alternative_message": "Ci gaba da yaɗa sanin Bitcoin da shirin sticker ɗinmu kyauta! Stickers na Bitcoin ɗinmu sun dace sosai don wuraren jama'a kuma suna da lambobin QR da ke haɗa zuwa abun ciki na ilimi.",
	"postcards_sticker_cta": "SAMI STICKERS KYAUTA",
	"postcards_step_2": "YADDA KATIN GAISAWA SUKA KASANCE",
	"postcards_instructions_4": "Mun yi waɗannan katin gaisawa don sauƙaƙa gabatar da wanda ka sani ga Bitcoin! Kawai ƙara adireshi da tikitin wasiƙa kuma ka jefa katin gaisawa a akwatin wasiƙa.",
	"postcards_instructions_5": "Manufarmu ita ce hanzarta amfani da Bitcoin. Za ka iya taimakawa ta hanyar samun stickers kyauta da sanya su a wuraren jama'a!",
	"postcards_instructions_6": "Dukkanmu mun san mutane kaɗan da za su amfana da koyon ƙarin game da Bitcoin. Raba stickers na Bitcoin da su yau!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Taimaka mana sanya waɗannan alamomin Bitcoin a ko'ina cikin Amurka!",
	"signs_title": "Alamomin Bitcoin kyauta daga bitcoin.rocks",
	"signs_choose_header": "MUNGODE DA KUKA TAIMAKA MANA SANYA WAƊANNAN ALAMOMIN BITCOIN A KO'INA CIKIN AMURKA!",
	"signs_choose_c1": "An ƙare mana alamomi! Manufarmu ita ce hanzarta amfani da Bitcoin ta hanyar ilimi.",
	"signs_choose_c2": "Da yawa daga cikinku sun taimaka wajen sanya waɗannan alamomin Bitcoin kyauta a wuraren jama'a. Duk alamominmu suna da lambobin QR da ke haɗa zuwa shafin ilimi game da",
	"signs_choose_c3": "hauhawar farashi",
	"signs_choose_c4": "Godiya ga al'ummarmu mai ban sha'awa, mun kai ga dubban mutane kuma mun taimaka musu su ɗauki matakan farko zuwa ramin Bitcoin.",
	"signs_share_header": "RABA WURAREN ALAMOMIN KU",
	"signs_share_c1": "Raba hoton wurin alama a Nostr kuma ku ga inda wasu ke sanya alamominsu.",
	"signs_btn_share_on_nostr": "RABA A NOSTR", "signs_btn_what_is_nostr": "MENENE NOSTR?",
	"signs_instructions_1": "Shigar da adireshin wasiƙar ku kuma za mu aiko muku da akwatin da ke ɗauke da alamomin Bitcoin 10 a wasiƙa!",
	"signs_instructions_2": "Za a share bayanan adireshin bayan an aika alamomin kyauta."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Takardun bugu na Bitcoin kyauta daga bitcoin.rocks",
	"flyers_description": "Buga takardar bugu na Bitcoin a gida kuma ka sanya ta a wurin jama'a don sa waɗanda ke kewayenka su koyi Bitcoin.",
	"flyers_header_1": "BUGA & LIƘA", "flyers_header_2": "TAKARDUN BUGU NA BITCOIN",
	"flyers_intro_header": "YADDA AKE BUGA & LIƘA WAƊANNAN TAKARDUN BUGU NA BITCOIN",
	"flyers_intro_c1": "Manufarmu ita ce taimaka maka ka sa ƙarin mutane su koyi Bitcoin ta hanyar sanya takardun bugu na Bitcoin a wuraren jama'a. Wannan takardar bugu tana da lambar QR da ke haɗa zuwa",
	"flyers_intro_c2": "shafin ilimin Bitcoin.",
	"flyers_intro_c3": "hauhawar farashi",
	"flyers_intro_c4": "Buga wannan takardar bugu a gida ko a wurin bugawa. Sannan, ka liƙa ta a allon sanarwa, sandunan tarho a gari, da sauran wuraren jama'a inda mutane za su iya ganin ta su koyi Bitcoin.",
	"flyers_intro_c5": "Yayin da kake nan, nemi fakitin", "flyers_intro_c6": "stickers na Bitcoin kyauta", "flyers_intro_c7": "don taimakawa wajen sa ƙarin mutane su koyi Bitcoin.",
	"flyers_btn_download": "ZAZZAGE TAKARDAR BUGU", "flyers_btn_print": "BUGA TAKARDAR BUGU",
	"flyers_share_header": "RABA WURAREN TAKARDUN BUGU",
	"flyers_share_c1": "Raba wuraren takardun bugu tare da mu a Nostr kuma ka ga inda wasu ke sanya takardun bugunsu.",
	"flyers_btn_share_on_nostr": "RABA A NOSTR", "flyers_btn_what_is_nostr": "MENENE NOSTR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Shiga kuma ka taimaka wajen yaɗa Bitcoin",
	"get_involved_description": "Kayan aikinmu na kyauta suna sauƙaƙa yaɗa amfani da Bitcoin.",
	"get_involved_header": "SHIGA",
	"get_involved_header_2": "YAƊA BITCOIN",
	"get_involved_intro_1": "Yana iya zama mai ɓacin rai a zauna a yanayin duniya na yanzu.",
	"get_involved_intro_2": "Kuɗinmu sun lalace. A sakamakon haka, muhimman ɓangarorin al'umma sun lalace ma.",
	"get_involved_intro_3": "Idan kana da alaƙa da Bitcoin, ka san jin fata da Bitcoin zai iya kawowa. Fata ga makoma mafi haske da kuɗi mafi kyau ke sa ta yiwu.",
	"get_involved_intro_4": "Amma mutane da yawa a kewayenka ba su san Bitcoin ba. Suna zaune a duniya ɗaya da ke lalacewa kamar ka, amma ba tare da fitilan fata da zai taimaka musu ta cikin duhu ba.",
	"get_involved_intro_5": "Amma za ka iya taimakawa wajen canza wannan. Mun yi kayan aiki kyauta da yawa don sauƙaƙa yaɗa fatan da Bitcoin ke kawowa ga waɗanda ke kewayenka.",
	"get_involved_sticker_header": "Liƙa sticker a wurin jama'a",
	"get_involved_sticker_content_1": "Za ka iya taimakawa wajen koya wa waɗanda ke kewayenka game da Bitcoin ba tare da hulɗa da kowa ba. Kawai ka liƙa ɗaya daga cikin stickers na Bitcoin kyauta a wurin jama'a.",
	"get_involved_sticker_content_2": "Ɗaruruwan mutane suna duba lambobin QR a kan waɗannan stickers kowane wata. Stickers na hauhawar farashi suna haɗa zuwa shafin game da",
	"get_involved_sticker_content_3": "Bitcoin a matsayin maganin hauhawar farashi.",
	"get_involved_sticker_content_4": "Sauran stickers suna haɗa zuwa shafin ilimi na gida wanda ke nuna mutane yadda",
	"get_involved_sticker_content_5": "Bitcoin ke gina duniya mafi kyau.",
	"get_involved_sticker_content_6": "Ta hanyar sanya waɗannan stickers a al'ummarka a wuraren da mutane za su gan su, za ka iya taimaka musu su ɗauki matakan farko zuwa ramin Bitcoin.",
	"get_involved_request_a": "NEMI", "get_involved_sticker_pack": "FAKITIN STICKER",
	"get_involved_postcard_header": "Aika katin gaisawa",
	"get_involved_postcard_content_1": "Za ka iya taimakawa wajen yaɗa Fatan Bitcoin ga wanda ka sani ta hanyar aika musu ɗaya daga cikin katin gaisawa kyauta.",
	"get_involved_postcard_content_2": "Bayan kowace katin gaisawa akwai rubutun da ke jan hankali game da Bitcoin tare da lambar QR don ƙarin koyo.",
	"get_involved_postcard_content_3": "Ta hanyar aika wa wani katin gaisawa na Bitcoin, za ka iya taimaka musu su ga Bitcoin ta sabon fuska.",
	"get_involved_postcard_pack": "FAKITIN KATIN GAISAWA",
	"get_involved_business_header": "Shigar da kasuwanci",
	"get_involved_business_content_1": "Kana son taimakawa wajen gina tattalin arzikin Bitcoin mai zagayawa? Kayan Aikin Kasuwancin Bitcoin ɗinmu suna sauƙaƙa zuwa kasuwanci game da karɓar biyan kuɗi na Bitcoin.",
	"get_involved_business_content_2": "Kowane kayan aikin kasuwanci ya ƙunshi takardun bugu da ke nuna fa'idodin karɓar biyan kuɗi na Bitcoin. Kowane takardar bugu tana haɗa zuwa nau'ikan",
	"get_involved_business_content_3": "kayan aikin kasuwancin Bitcoin kyauta.",
	"get_involved_business_kit": "KAYAN AIKIN KASUWANCI"
});

console.log(`\nDone! Created 9 content files.`);
