/**
 * Creates Hausa (ha) translation files for all bitcoin-vs-* comparison pages
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

// bitcoin-vs-gold
writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin da Zinari",
	"gold_header": "BAMBANCI TSAKANIN", "gold_header_2": "BITCOIN", "gold_header_3": "DA", "gold_header_4": "ZINARI",
	"gold_intro_1": "An yi amfani da zinari a matsayin kuɗi tsawon dubban shekaru kuma mutane da yawa suna ganin sa a matsayin mafakar kuɗi.",
	"gold_intro_2": "Bitcoin kuɗi ne na dijital da aka ƙirƙira a 2009 kuma mutane da yawa suna ganin sa a matsayin mafakar kuɗi.",
	"gold_intro_3": "Amma yaya ƙarfe na zahiri kamar zinari ya bambanta da kuɗi na dijital kamar Bitcoin? Bari mu duba bambance-bambance tsakanin nau'ikan kuɗi biyu: Bitcoin da Zinari.",
	"gold": "ZINARI", "bitcoin": "BITCOIN",
	"gold_point_1": "Dole ne a aika ta zahiri", "gold_point_2": "Takardar bashi ta dijital", "gold_point_3": "Tanadi yana ƙaruwa kowace shekara", "gold_point_4": "Mai sassauƙa", "gold_point_5": "Tsakaitaccen ta zahiri", "gold_point_6": "Wahalar tabbatarwa", "gold_point_7": "Wahalar raba",
	"bitcoin_point_1": "Ana iya aika ta Intanet", "bitcoin_point_2": "Na dijital asali", "bitcoin_point_3": "Tanadin daidaitaccen 21M BTC", "bitcoin_point_4": "Ba mai sassauƙa ba", "bitcoin_point_5": "Mai rarrabawa", "bitcoin_point_6": "Sauƙin tabbatarwa", "bitcoin_point_7": "Sauƙin raba",
	"point_1_summary_1": "Saboda Bitcoin na dijital ne, kowa mai haɗin Intanet na iya aika shi kusan nan take da ƙananan kuɗin aiki. Saboda Zinari na zahiri ne, ba za a iya tura shi ta Intanet ba kuma dole ne a aika shi ta zahiri don canza mallakar.",
	"point_2_summary_1": "Bitcoin kadara ce ta dijital asali, wanda ke nufin za ka iya canza cikakken mallakar ta Intanet. Wasu kamfanoni suna ba da damar siyan zinari ta yanar gizo ba tare da karɓar zinarin zahiri ba, a maimakon haka ka amince wa kamfanin ya ajiye zinarin a madadin ka. Wannan ya fi kama da Takardar Bashi ta Dijital tunda kana mallakar alkawarin kamfanin ne kawai maimakon kadara ta gaske.",
	"point_3_summary_1": "Bitcoin yana da iyakar 21 Miliyan BTC da za su taɓa kasancewa.",
	"point_3_summary_2": "Ana fitar da sabon zinari daga ƙarƙashin ƙasa kowace shekara, wanda ke haifar da hauhawar tanadin gaba ɗaya. An kiyasta cewa tanadin zinari yana ƙaruwa da kusan 1.6% a shekara, wanda ke nufin rabonka na leda yana raguwa da 1.6% a shekara.",
	"point_3_summary_3": "Wannan ya fi ƙarancin hauhawar farashi ta fiat, amma har yanzu hauhawar farashi ce.", "point_3_summary_4": "Da Bitcoin, rabonka na leda ba ya taɓa raguwa.",
	"point_4_summary_1": "Zinari yana da tanadi mai sassauƙa, wanda ke nufin yayin da farashin zinari ya haura, akwai ƙarin ƙarfafawa don haƙo ƙarin zinari. Wannan galibi yana matsa farashin zinari ƙasa yayin da sababbin ma'adinai suka fara aiki.",
	"point_4_summary_2": "Da Bitcoin, ko farashin ya haura nawa, ba za ka iya yin fiye da 21M Bitcoin ba.", "point_4_summary_3": "Bitcoin ita ce kadara ta farko mai alaƙa mara sassauƙa tsakanin farashi da tanadi.",
	"point_5_summary_1": "Cibiyar sadarwar Bitcoin mai rarrabawa ce.", "point_5_summary_2": "Dubban dubban nodes masu zaman kansu suna tabbatar da dokokin cibiyar sadarwar.", "point_5_summary_3": "Masu amfani za su iya kula da Bitcoin ɗin su da kansu ta hanyar zazzage manhaja.", "point_5_summary_4": "Yayin da za a iya kula da zinari na zahiri da kanka, mafi yawan zinari na zahiri ana ajiye shi a manyan rumbunan da masu ajiya suke mallaka wanda ke sa shi ya zama tsakaitaccen ta zahiri.",
	"point_6_summary_1": "Da Bitcoin, yana da sauƙi sosai a tabbatar cewa kana da Bitcoin na gaske ta hanyar kula da tsabar kuɗinka da kanka da gudanar da cikakken node.", "point_6_summary_2": "Kula da kanka ya yi sauƙi kamar zazzage manhaja.", "point_6_summary_3": "Cikakken node software ne mai sauƙi da ke tabbatar da cewa ana bin dokokin cibiyar sadarwar, kuma yana tabbatar da cewa kana da Bitcoin na gaske.", "point_6_summary_4": "Zinari na zahiri na iya zama da wahalar tabbatarwa. Ko da ka tabbatar da ɓangaren waje, ciki na zinari na zahiri na iya zama Tungsten ko wani ƙarfe. Hanya guda ɗaya tilo ta gaske ta tabbatarwa ita ce narkad da shi.",
	"point_7_summary_1": "Kamar yadda akwai senti 100 a cikin dala 1, akwai sats 100,000,000 a cikin Bitcoin 1. Wannan yana ba da damar amfani da Bitcoin don kowane girman saye, ciki har da ƙananan ma'amaloli kamar senti kaɗan.", "point_7_summary_2": "Wannan yana sa Bitcoin ya yi kyau ga kasuwanci.", "point_7_summary_3": "Saboda zinari na zahiri yana da wahalar rabawa, ba za a iya amfani da shi cikin sauƙi don saye ba, musamman ƙananan saye."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin da Hannun Jari",
	"stocks_header": "BAMBANCI TSAKANIN", "stocks_header_2": "BITCOIN", "stocks_header_3": "DA", "stocks_header_4": "HANNUN JARI",
	"stocks_intro_1": "Hannun jari ya kasance sanannen hanyar saka jari tsawon shekaru da dama, kuma suna wakiltar rabon mallakar kamfanoni.",
	"stocks_intro_2": "Bitcoin kuɗi ne na dijital da aka ƙirƙira a 2009 wanda ke aiki ba tare da dogaro da wani kamfani ko gwamnati ba.",
	"stocks_intro_3": "Amma yaya mallakar hannun jari ya bambanta da mallakar kuɗi na dijital kamar Bitcoin? Bari mu duba bambance-bambancen: Bitcoin da hannun jari.",
	"stocks": "HANNUN JARI", "bitcoin": "BITCOIN",
	"stocks_point_1": "Rabon kamfani", "stocks_point_2": "Tanadi mai raguwa", "stocks_point_3": "Haɗarin manyan mutane", "stocks_point_4": "Ƙimar P/E", "stocks_point_5": "Lokutan kasuwa kawai", "stocks_point_6": "Haɗarin ɓangare na uku", "stocks_point_7": "Kariyar hauhawar farashi mai canzawa",
	"bitcoin_point_1": "Mallakar kai tsaye", "bitcoin_point_2": "Tanadin daidaitaccen 21M BTC", "bitcoin_point_3": "Cibiyar sadarwa mai rarrabawa", "bitcoin_point_4": "Farashin kasuwa", "bitcoin_point_5": "Ciniki 24/7", "bitcoin_point_6": "Kula da kanka na yiwuwa", "bitcoin_point_7": "Kadara mai tanadi daidaitaccen",
	"point_1_summary_1": "Idan kana mallakar Bitcoin, kana da mallakar kai tsaye na kadara kanta. Idan kana mallakar hannun jari, kana mallakar rabo na kamfani, wanda ke nufin jarin ka ya dogara da aikin kamfanin, yanke shawara na gudanarwa, da nasarar kasuwanci.",
	"point_2_summary_1": "Bitcoin yana da iyakar 21 Miliyan BTC da za su taɓa kasancewa.", "point_2_summary_2": "Kamfanoni za su iya fitar da sabbin hannun jari a kowane lokaci, suna rage rabon mallakar masu hannun jari na yanzu.", "point_2_summary_3": "Wannan ya fi ƙarancin hauhawar farashi ta fiat, amma har yanzu raguwa ce.", "point_2_summary_4": "Da Bitcoin, rabonka na leda ba ya taɓa raguwa.",
	"point_3_summary_1": "Bitcoin yana aiki a cibiyar sadarwa mai rarrabawa ba tare da wani wurin gazawa ba. Saka jari a hannun jari yana ɗauke da haɗarin manyan mutane — idan shugaban kamfanin ko sauran manyan shugabanni sun bar, sun kamu da rashin lafiya, ko sun yanke shawarwari marasa kyau, jarin ka na iya shan wahala ƙwarai.",
	"point_4_summary_1": "Farashin Bitcoin ana ƙaddara shi ta hanyar buƙatu da tanadi na kasuwa kawai. Farashin hannun jari galibi ana ƙiyas su ta hanyar ƙimar P/E, waɗanda ke nuna nawa masu saka jari ke biya ga kowace dala da kamfanin ya samu.",
	"point_5_summary_1": "Ana ciniki da Bitcoin sa'o'i 24 a rana, kwanaki 7 a mako a kasuwannin duniya.", "point_5_summary_2": "Bitcoin mai rarrabawa ne", "point_5_summary_3": "kuma ba ya bacci.", "point_5_summary_4": "Kasuwannin hannun jari suna buɗe ne kawai a kwanakin aiki a lokutan aiki.",
	"point_6_summary_1": "Da Bitcoin, za ka iya kula da tsabar kuɗinka da kanka, wanda ke nufin kana mallaka su da gaske ba tare da dogaro da ɓangare na uku ba.", "point_6_summary_2": "Kula da kanka ya yi sauƙi kamar zazzage manhaja.", "point_6_summary_3": "Hannun jari suna buƙatar asusun dilali kuma kana cikin haɗarin ɓangare na uku.", "point_6_summary_4": "Ba ka taɓa mallaka takardun shaidar hannun jari kai tsaye ba.",
	"point_7_summary_1": "Bitcoin kadara ce mai tanadi daidaitaccen da iyakar 21 Miliyan Bitcoin. Wannan yana sa ta zama mafiya kyau wajen kariyar hauhawar farashi. Aikin hannun jari game da hauhawar farashi ya bambanta."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin da CBDCs",
	"cbdc_header": "YAYA KUƊIN", "cbdc_header_2": "DIJITAL", "cbdc_header_3": "YA KAMATA?",
	"cbdc_intro_1": "Duniyarmu tana ƙaruwa ta zama ta dijital, haka ma kuɗinmu.", "cbdc_intro_2": "Wannan yana haifar da tambaya: yaya muke son kuɗin dijital ɗinmu ya kasance?", "cbdc_intro_3": "Ƙasashe da yawa suna binciken fitar da Kuɗin Dijital na Babban Banki (CBDC).", "cbdc_intro_4": "Bari mu duba bambancin tsakanin nau'ikan kuɗi na dijital guda biyu: Bitcoin da kuɗin dijital na babban banki (CBDCs).",
	"cbdc": "CBDC", "bitcoin": "BITCOIN",
	"cbdc_point_1": "Ana buƙatar izini don amfani", "cbdc_point_2": "Kuɗinka na iya ƙarewa", "cbdc_point_3": "Babu iyaka ga tanadin gaba ɗaya", "cbdc_point_4": "Haɗe da shaida ta gwamnati", "cbdc_point_5": "Tsakaitaccen", "cbdc_point_6": "Masu amfani ba za su iya gudanar da nodes ba", "cbdc_point_7": "Ana iya daskare cikin sauƙi", "cbdc_point_8": "Dole ne a amince da masu ajiya", "cbdc_point_9": "Manufar kuɗi mai canzawa", "cbdc_point_10": "Ba amintacce ba",
	"bitcoin_point_1": "Yi amfani ba tare da izini ba", "bitcoin_point_2": "Kuɗinka ba ya taɓa ƙarewa", "bitcoin_point_3": "Tanadin daidaitaccen 21M BTC", "bitcoin_point_4": "Mai sunan banza", "bitcoin_point_5": "Mai rarrabawa", "bitcoin_point_6": "Masu amfani za su iya gudanar da nodes", "bitcoin_point_7": "Ba za a iya daskare ba", "bitcoin_point_8": "Za a iya kula da kanka", "bitcoin_point_9": "Manufar kuɗi mai tsinkaya", "bitcoin_point_10": "Amintacce",
	"point_1_summary_1": "Bitcoin an tsara shi don ba ka cikakken iko a kan kuɗinka.", "point_1_summary_2": "Babu wanda zai iya hana ka yin ma'amalolin Bitcoin.", "point_1_summary_3": "CBDCs an tsara su don ba gwamnatoci cikakken iko a kan kuɗinka.", "point_1_summary_4": "CBDCs suna taƙaita sirrin ka da 'yancin ka.",
	"point_2_summary_1": "Bitcoin ba ya taɓa ƙarewa kuma ba shi da kuɗin wata-wata.", "point_2_summary_2": "Za a iya tsara CBDCs su ƙare.", "point_2_summary_3": "Idan CBDCs sun ƙare, suna hana ka adana kuɗi don gaba.",
	"point_3_summary_1": "Bitcoin yana da iyakar 21 Miliyan BTC.", "point_3_summary_2": "CBDCs ba su da iyaka ga tanadin gaba ɗaya. Wannan yana ba da damar gwamnati ta ƙara yawan kuɗi.", "point_3_summary_3": "Wannan yana haifar da hauhawar farashi.",
	"point_4_summary_1": "Adiresoshin Bitcoin masu sunan banza ne, wanda ke nufin ba su da alaƙa da sunaye ko asali. CBDCs suna da alaƙa kai tsaye da asalinku.",
	"point_5_summary_1": "Cibiyar sadarwar Bitcoin mai rarrabawa ce.", "point_5_summary_2": "Dubban dubban nodes masu zaman kansu suna tabbatar da dokokin cibiyar sadarwar.", "point_5_summary_3": "CBDCs tsakaitattun ne a hannun gwamnati da babban banki.",
	"point_6_summary_1": "Bitcoin yana ba kowa damar gudanar da node wanda ke tabbatar da cewa ana bin dokokin cibiyar sadarwar. CBDCs ba su ba da damar gudanar da nodes.",
	"point_7_summary_1": "Bitcoin an tsara shi don sa daskare kuɗinka ya zama ba zai yiwu ba. CBDCs an tsara su don sauƙaƙa daskare kuɗinka.",
	"point_8_summary_1": "Bitcoin an tsara shi don ba ka cikakken iko a kan kuɗinka.", "point_8_summary_2": "Tabbatar kawai ka canza su zuwa kula da kanka.", "point_8_summary_3": "Idan kana kula da bitcoin ɗinka da kanka, babu wanda zai iya hana ka samun kuɗinka.", "point_8_summary_4": "CBDCs suna buƙatar amincewa da masu ajiya, kamar banki ko gwamnati.",
	"point_9_summary_1": "Bitcoin yana da manufar kuɗi mai tsinkaya, da aka rubuta a cikin lambar, wanda ba za a iya canzawa ba. CBDCs suna da manufar kuɗi da za a iya canza cikin sauƙi.", "point_9_summary_2": "Wannan yana haifar da hauhawar farashi idan 'yan siyasa suka buga kuɗi da yawa.",
	"point_10_summary_1": "Bitcoin ita ce cibiyar sadarwar kwamfuta mafi aminci da ta taɓa kasancewa, kuma ba a taɓa sace ta ba. CBDCs suna dogaro da gwamnatoci da bankuna don tsaron cibiyar sadarwar."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin da Tsabar Kuɗi",
	"cash_header": "BAMBANCI TSAKANIN", "cash_header_2": "BITCOIN", "cash_header_3": "DA", "cash_header_4": "TSABAR KUƊI",
	"cash_intro_1": "An yi amfani da tsabar kuɗi a matsayin kuɗi tsawon ƙarni da yawa, kuma har yanzu shi ne mafi yawan amfanin kuɗi na zahiri a duniya.",
	"cash_intro_2": "Bitcoin kuɗi ne na dijital da aka ƙirƙira a 2009 wanda ke aiki ba tare da dogaro da wata gwamnati ba.",
	"cash_intro_3": "Amma yaya tsabar kuɗi na zahiri ya bambanta da kuɗi na dijital kamar Bitcoin? Bari mu bincika muhimman bambance-bambancen: Bitcoin da tsabar kuɗi.",
	"cash": "TSABAR KUƊI", "bitcoin": "BITCOIN",
	"cash_point_1": "Ana buƙatar kasancewa a zahiri", "cash_point_2": "Iyakokin ƙasa ne suka ƙayyade", "cash_point_3": "Ana iya soke a dare ɗaya", "cash_point_4": "Ana iya jabu", "cash_point_5": "Gwamnati ce ke sarrafawa", "cash_point_6": "Haɗarin ajiye na zahiri", "cash_point_7": "Iyakancen rabawa",
	"bitcoin_point_1": "Ana iya aika ta Intanet", "bitcoin_point_2": "Yana aiki a duniya baki ɗaya", "bitcoin_point_3": "Ba za a iya soke shi ba", "bitcoin_point_4": "Ba za a iya jabu ba", "bitcoin_point_5": "Cibiyar sadarwa mai rarrabawa", "bitcoin_point_6": "Kula da kanka na dijital", "bitcoin_point_7": "Sauƙin rabawa",
	"point_1_summary_1": "Za a iya aika Bitcoin ko'ina a duniya nan take ta Intanet, yayin da tsabar kuɗi yana buƙatar kasancewa a zahiri.",
	"point_2_summary_1": "Bitcoin yana aiki iri ɗaya ko'ina a duniya — babu iyakoki a cibiyar sadarwar Bitcoin. Tsabar kuɗi yana ƙayyadaddun ta ƙasa, farashin musayar, da karɓar gida.",
	"point_3_summary_1": "Gwamnatoci za su iya kuma suna sokewar tsabar kuɗi a dare ɗaya, kamar yadda Indiya ta yi a 2016.", "point_3_summary_2": "Gwamnatoci kuma suna ci gaba da rage darajar tsabar kuɗi ta hanyar hauhawar farashi.", "point_3_summary_3": "Babu gwamnati da za ta iya sokewar Bitcoin — yana aiki a cibiyar sadarwa mai rarrabawa.",
	"point_4_summary_1": "Za a iya jabu tsabar kuɗi, kuma galibi yana da wahalar ganin jabu. Bitcoin yana amfani da tabbaci na lissafi wanda ke sa jabu ya zama ba zai yiwu ba ta fuskar lissafi.",
	"point_5_summary_1": "Gwamnati ce ke fitar da tsabar kuɗi kuma tana sarrafawa. Bitcoin yana aiki a cibiyar sadarwa mai rarrabawa inda babu wata ƙungiya ɗaya da ke sarrafa yawan kuɗi.",
	"point_6_summary_1": "Dole ne a ajiye tsabar kuɗi a zahiri, wanda ke sa shi ya zama mai rauni ga sata, ɓacewa, ko lalacewa a wuta.", "point_6_summary_2": "Amma za a iya ajiye Bitcoin cikin aminci a kula da kanka", "point_6_summary_3": "ta amfani da manhajar wayar hannu ko wallet na musamman.",
	"point_7_summary_1": "Tsabar kuɗi yana da mafi ƙarancin ƙima — ba za a iya raba senti zuwa ƙananan sassa ba. Za a iya raba Bitcoin zuwa sassa 100 miliyan masu ƙanƙanta da ake kira satoshi."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin da Crypto",
	"crypto_header": "BAMBANCI TSAKANIN", "crypto_header_2": "BITCOIN", "crypto_header_3": "DA", "crypto_header_4": "CRYPTO",
	"crypto_intro_1": "Masana'antar cryptocurrency ta ɓarke zuwa dubunnan tokens da ayyuka daban-daban na dijital.",
	"crypto_intro_2": "Yayin da Bitcoin shi ne na farko kuma ya kasance mafi sanannen, ya bambanta ta asali da sauran masana'antar crypto.",
	"crypto_intro_3": "Bari mu bincika muhimman bambance-bambancen tsakanin Bitcoin da yanayin cryptocurrency mafi girma.",
	"crypto": "CRYPTO", "bitcoin": "BITCOIN",
	"crypto_point_1": "Canje-canje da rabuwa na ci gaba", "crypto_point_2": "Gudanarwa tsakaitaccen", "crypto_point_3": "Tanadi mara iyaka ko mai hauhawar farashi", "crypto_point_4": "Tsare-tsare masu rikitarwa", "crypto_point_5": "Hanyoyin yarjejeniya na gwaji", "crypto_point_6": "Tokens na tsammanin amfani", "crypto_point_7": "Mai rauni", "crypto_point_8": "Tallafin kamfanoni",
	"bitcoin_point_1": "Tsarin da ba ya canzawa", "bitcoin_point_2": "Na gaske mai rarrabawa", "bitcoin_point_3": "Tanadin daidaitaccen 21M BTC", "bitcoin_point_4": "Mai sauƙi kuma mai isa", "bitcoin_point_5": "Tabbacin aiki da aka gwada", "bitcoin_point_6": "Kuɗi na dijital tsantsa", "bitcoin_point_7": "Mai ƙarfin juriya", "bitcoin_point_8": "Babu mai sarrafawa",
	"point_1_summary_1": "Tsarin Bitcoin ya kasance ba ya canzawa ta asali tun 2009. Yawancin ayyukan crypto suna sabunta tsare-tsarensu akai-akai.",
	"point_2_summary_1": "Bitcoin yana aiki a cibiyar sadarwa mai rarrabawa da gaske tare da dubban dubban nodes masu zaman kansu. Yawancin ayyukan crypto suna ƙarƙashin gudanarwar gidauniyoyi ko ƙananan ƙungiyoyin masu haɓaka.",
	"point_3_summary_1": "Bitcoin yana da iyakar 21 miliyan tsabar kuɗi. Yawancin ayyukan crypto suna da tanadi mara iyaka ko za su iya ƙirƙirar sababbin tokens a kowane lokaci.",
	"point_4_summary_1": "Bitcoin yana da manufa ɗaya mai sauƙi: kuɗi na dijital na mutum-zuwa-mutum. Yawancin ayyukan crypto masu rikitarwa ne.",
	"point_5_summary_1": "Bitcoin yana amfani da tabbacin aiki, wanda aka gwada cikin nasara fiye da shekaru 15. Yawancin ayyukan crypto suna amfani da hanyoyi na gwaji.",
	"point_6_summary_1": "Bitcoin yana aiki a matsayin kuɗi na dijital — mai ajiye daraja da kayan musayar. Yawancin crypto tokens na amfani ne ko na tsammanin.",
	"point_7_summary_1": "Bitcoin yana ƙara ƙarfi daga hare-hare kuma ya tsira daga kowane rikici. Yawancin ayyukan crypto masu rauni ne kuma za su iya rushe.",
	"point_8_summary_1": "Bitcoin ba shi da shugaban kamfani, babu kamfani a bayansa kuma babu wurin gazawa ɗaya. Yawancin ayyukan crypto masu saka jari ne ke tallafa musu."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin da Takardun Bashi",
	"bonds_header": "BAMBANCI TSAKANIN", "bonds_header_2": "BITCOIN", "bonds_header_3": "DA", "bonds_header_4": "TAKARDUN BASHI",
	"bonds_intro_1": "Galibi ana kiran takardun bashi na gwamnati saka jari 'mara haɗari'.", "bonds_intro_2": "Bitcoin kuɗi ne na dijital da ke aiki ba tare da dogaro da gwamnatoci ba.", "bonds_intro_3": "Amma shin takardun bashi na gaske mara haɗari ne? Kuma yaya suke kwatankwanci da Bitcoin a matsayin mai ajiye daraja?",
	"bonds": "TAKARDUN BASHI", "bitcoin": "BITCOIN",
	"bonds_point_1": "Haɗarori na ɓoye", "bonds_point_2": "Rasa daraja ga hauhawar farashi", "bonds_point_3": "Na iya zama mara ruwa", "bonds_point_4": "Gwanjon da ya gaza", "bonds_point_5": "Riba daidaitaccen", "bonds_point_6": "Ana buƙatar masu shiga tsakani", "bonds_point_7": "Dogaro da gwamnati",
	"bitcoin_point_1": "Babu haɗarin ɓangare na uku", "bitcoin_point_2": "Tanadi daidaitaccen", "bitcoin_point_3": "Koyaushe mai ruwa", "bitcoin_point_4": "Babu haɗarin gwanjo", "bitcoin_point_5": "Yuwuwar ƙaruwar daraja", "bitcoin_point_6": "Kula da kanka na yiwuwa", "bitcoin_point_7": "Babu dogaro da gwamnati",
	"point_1_summary_1": "Takardun bashi 'mara haɗari' ne a suna kawai — za ka sami daloli na baya, amma za su iya zama da ƙarancin daraja sosai.", "point_1_summary_2": "Bitcoin yana da haɗarori a bayyane (canjin farashi) amma babu haɗarin ɓangare na uku da aka ɓoye.",
	"point_2_summary_1": "Idan hauhawar farashi ta wuce ribar takardun bashi, masu riƙe su suna rasa ikon siye kowace shekara.", "point_2_summary_2": "Ƙara koyo game da hauhawar farashi.", "point_2_summary_3": "Tanadin daidaitaccen na Bitcoin yana nufin ba za a iya cin sa ta hanyar hauhawar farashi ba.",
	"point_3_summary_1": "A lokutan rikicin kuɗi, kasuwannin takardun bashi na iya tsayawa.", "point_3_summary_2": "Karanta yadda Silicon Valley Bank ya gaza.", "point_3_summary_3": "Ana ciniki da Bitcoin 24/7 kuma bai taɓa samun rikicin ruwa ba.",
	"point_4_summary_1": "Gwanjon takardun bashi na gwamnati na iya gazawa idan babu isassun masu siye.", "point_4_summary_2": "Ƙara koyo game da gwanjon da ya gaza.", "point_4_summary_3": "Farashin Bitcoin ana ƙirƙira shi ne a kasuwannin duniya na ci gaba.",
	"point_5_summary_1": "Ribar takardun bashi daidaitaccen ne a lokacin siye.", "point_5_summary_2": "Bitcoin yana da yuwuwar ƙaruwar daraja mai girma yayin da amfani da shi ke ƙaruwa.",
	"point_6_summary_1": "Yawancin mutane suna mallakar takardun bashi ta masu shiga tsakani.", "point_6_summary_2": "Da Bitcoin, za ka iya mallakar kai tsaye ta hanyar kula da kanka.",
	"point_7_summary_1": "Takardun bashi sun dogara gaba ɗaya ga ikon gwamnati na biya.", "point_7_summary_2": "Bitcoin yana aiki ba tare da dogaro da gwamnatoci ba."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin da Gidaje",
	"real_estate_header": "BAMBANCI TSAKANIN", "real_estate_header_2": "BITCOIN", "real_estate_header_3": "DA", "real_estate_header_4": "GIDAJE",
	"real_estate_intro_1": "Gidaje sun kasance sanannen hanyar saka jari tsawon shekaru.", "real_estate_intro_2": "Bitcoin kuɗi ne na dijital da aka ƙirƙira a 2009 wanda mutane da yawa ke ganin shi a matsayin mai ajiye daraja.", "real_estate_intro_3": "Yaya kadara na zahiri ya bambanta da kuɗi na dijital? Bari mu duba bambance-bambancen: Bitcoin da gidaje.",
	"real_estate": "GIDAJE", "bitcoin": "BITCOIN",
	"real_estate_point_1": "Ba za a iya motsa shi ba", "real_estate_point_2": "Ba za a iya raba shi cikin sauƙi ba", "real_estate_point_3": "Ƙarƙashin dokar gwamnati", "real_estate_point_4": "Ana buƙatar gyara na ci gaba", "real_estate_point_5": "Ƙarƙashin harajin kadara", "real_estate_point_6": "Mai rauni ga bala'o'i", "real_estate_point_7": "Kowane kadara na musamman ne", "real_estate_point_8": "An ƙayyadaddhe ga masu siye na gida",
	"bitcoin_point_1": "Na iya canzawa a duniya", "bitcoin_point_2": "Sauƙin rabawa", "bitcoin_point_3": "Mai juriyar tace-tace", "bitcoin_point_4": "Babu gyara", "bitcoin_point_5": "Babu harajin kadara", "bitcoin_point_6": "Wahalar lalacewa", "bitcoin_point_7": "Cikakken musayar", "bitcoin_point_8": "Kasuwar duniya 24/7",
	"point_1_summary_1": "Za a iya canja Bitcoin ko'ina nan take ta Intanet. Gidaje suna daure a wuri na dindindin.",
	"point_2_summary_1": "Za a iya raba Bitcoin zuwa sassa 100 miliyan. Ba za a iya raba gidaje cikin sauƙi ba.",
	"point_3_summary_1": "Bitcoin yana aiki a cibiyar sadarwa mai rarrabawa. Gidaje suna ƙarƙashin dokar gwamnati mai yawa.",
	"point_4_summary_1": "Bitcoin ba ya buƙatar gyara. Gidaje suna buƙatar gyara na ci gaba.",
	"point_5_summary_1": "Bitcoin ba shi da haraji na ci gaba. Ana biyan harajin kadara na shekara-shekara a kan gidaje.",
	"point_6_summary_1": "Bitcoin ba zai iya lalacewa a bala'o'i ba idan an yi adana madadin daidai. Gidaje suna da rauni ga duk wani lalacewar zahiri.",
	"point_7_summary_1": "Kowanne bitcoin iri ɗaya ne kuma ana iya musayar. Kowanne gida na musamman ne.",
	"point_8_summary_1": "Za a iya saye da sayar da Bitcoin 24/7 ga kowa a duniya. Cinikin gidaje an ƙayyadaddhe ga masu siye na gida kuma za su iya ɗaukar watanni.",
	"bitcoin_point_9": "Yana haɓɓaka mallakar mutum ɗaya", "real_estate_point_9": "Yana haifar da canza gidaje zuwa saka jari",
	"point_9_summary_1": "Bitcoin yana ba da damar mallakar mutum ɗaya kai tsaye ba tare da masu shiga tsakani ba. Saka jari a gidaje bayan gidanka na zama yana haifar da canza gidaje zuwa saka jari, yana ƙara farashi kuma yana shafar ikon siye na gidaje."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin da Visa",
	"visa_header": "BAMBANCI TSAKANIN", "visa_header_2": "BITCOIN", "visa_header_3": "DA", "visa_header_4": "VISA",
	"visa_intro_1": "Katin kuɗi da Bitcoin duka tsarin biyan kuɗi ne, amma suna aiki ta hanyoyi daban-daban.", "visa_intro_2": "Katin kuɗi kamar Visa cibiyoyin sadarwa ne rufaffun, yayin da Bitcoin cibiyar sadarwa ce buɗaɗɗiya.", "visa_intro_3": "Bari mu duba bambance-bambancen: Bitcoin da Visa.",
	"visa": "VISA", "bitcoin": "BITCOIN",
	"visa_point_1": "Cibiyar sadarwa rufaffiya", "visa_point_2": "3% kuɗin 'yan kasuwa", "visa_point_3": "Tsarin da ba a gani ba", "visa_point_4": "Na iya daskare asusuna", "visa_point_5": "Yana ƙirƙirar bashi da babbar riba", "visa_point_6": "Ana buƙatar masu shiga tsakani", "visa_point_7": "Iyakancen lokaci da ƙasa",
	"bitcoin_point_1": "Cibiyar sadarwa buɗaɗɗiya", "bitcoin_point_2": "Babu kuɗin 'yan kasuwa", "bitcoin_point_3": "Tsarin da ake gani", "bitcoin_point_4": "Ba za a iya daskare ba", "bitcoin_point_5": "Babu ƙirƙirar bashi", "bitcoin_point_6": "Kula da kanka na yiwuwa", "bitcoin_point_7": "Samun dama na 24/7 na duniya",
	"point_1_summary_1": "Bitcoin cibiyar sadarwa ce buɗaɗɗiya da kowa zai iya shiga ba tare da izini ba. Cibiyoyin sadarwar katin kuɗi tsare-tsaren rufaffun ne.", "point_1_summary_2": "Wannan yana sa Bitcoin ya fi haɗa kowa kuma mai isa.",
	"point_2_summary_1": "Ma'amalolin Bitcoin ba su da kuɗin 'yan kasuwa, yayin da kamfanonin katin kuɗi ke ɗaukar kusan 3% a kowace ma'amala.", "point_2_summary_2": "Koyi yadda kasuwancinka zai iya tanada kuɗi", "point_2_summary_3": "ta hanyar karɓar biyan kuɗi na Bitcoin maimakon katin kuɗi.",
	"point_3_summary_1": "Bitcoin yana aiki a blockchain mai ganuwa inda za a iya tabbatar da duk ma'amaloli. Cibiyoyin sadarwar katin kuɗi tsare-tsaren rufaffun ne.", "point_3_summary_2": "Wannan ganuwam yana sa Bitcoin ya fi amintuwa.",
	"point_4_summary_1": "Kamfanonin katin kuɗi za su iya daskare asusuna ko dakatar da ma'amaloli a kowane lokaci. Ba za a iya daskare Bitcoin ba.", "point_4_summary_2": "Da Bitcoin, kana kula da kuɗinka.",
	"point_5_summary_1": "Katin kuɗi yana ƙirƙirar bashi da ribar da za ta iya wucewa 25% a shekara.", "point_5_summary_2": "Ma'amalolin Bitcoin warwarewa ce ta ƙarshe ba tare da ƙirƙirar bashi ba.",
	"point_6_summary_1": "Bitcoin yana ba da damar kula da kanka, wanda ke nufin za ka iya riƙe da sarrafa kuɗinka da kanka.", "point_6_summary_2": "Ƙara koyo game da wallets na Bitcoin", "point_6_summary_3": "don fahimtar yadda za ka mallaki kuɗinka.",
	"point_7_summary_1": "Bitcoin yana aiki 24/7 a duniya baki ɗaya ba tare da ƙayyadaddun ba.", "point_7_summary_2": "Cibiyoyin sadarwar katin kuɗi suna ƙayyadaddun ne ga lokutan aiki da ƙasa."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin da Fasaha",
	"fine_art_header": "BAMBANCI TSAKANIN", "fine_art_header_2": "BITCOIN", "fine_art_header_3": "DA", "fine_art_header_4": "FASAHA",
	"fine_art_intro_1": "Fasaha ta kasance saka jari na alatu tsawon ƙarni da yawa.", "fine_art_intro_2": "Bitcoin kuɗi ne na dijital da mutane da yawa ke ganin shi a matsayin mai ajiye daraja.", "fine_art_intro_3": "Yaya aikin fasaha na zahiri ya bambanta da kuɗi na dijital? Bari mu duba bambance-bambancen: Bitcoin da fasaha.",
	"fine_art": "FASAHA", "bitcoin": "BITCOIN",
	"fine_art_point_1": "Kowane aiki na musamman ne", "fine_art_point_2": "Ana buƙatar gwanjon musamman", "fine_art_point_3": "Manyan kuɗin gwanjo", "fine_art_point_4": "Ba za a iya raba shi ba", "fine_art_point_5": "Ana buƙatar gwanin tabbatarwa", "fine_art_point_6": "Mai rauni ga lalacewa", "fine_art_point_7": "An ƙayyadaddhe ga attajirai",
	"bitcoin_point_1": "Cikakken musayar", "bitcoin_point_2": "Kasuwar duniya 24/7", "bitcoin_point_3": "Ƙananan kuɗin ma'amala", "bitcoin_point_4": "Sauƙin rabawa", "bitcoin_point_5": "Ana tabbatarwa ta lissafi", "bitcoin_point_6": "Wahalar lalacewa", "bitcoin_point_7": "Kowa zai iya samu",
	"point_1_summary_1": "Kowanne bitcoin iri ɗaya ne kuma ana iya musayar. Fasaha ta musamman ce ta dabi'a, wanda ke sa ƙima ta zama da wahala sosai.",
	"point_2_summary_1": "Ana ciniki da Bitcoin a kasuwannin duniya 24/7. Fasaha tana buƙatar gidajen gwanjo na musamman kuma sayarwa na iya ɗaukar watanni.",
	"point_3_summary_1": "Siye ko sayar da Bitcoin galibi yana ɗaukar ƙasa da 1%. Cinikin fasaha yana ɗauke da kuɗin da za su iya wucewa 30-40%.",
	"point_4_summary_1": "Za a iya raba Bitcoin zuwa sassa 100 miliyan. Ba za a iya raba fasaha ba.",
	"point_5_summary_1": "Ana iya tabbatar da mallakar Bitcoin da ingancin sa ta lissafi. Fasaha tana buƙatar tsadar binciken kwararru, kuma jabun suna yaudara cikin duniyar fasaha akai-akai.",
	"point_6_summary_1": "Bitcoin ba zai iya lalacewa ba idan an yi adana madadin daidai. Fasaha tana da rauni ga duk wani lalacewar zahiri.",
	"point_7_summary_1": "Kowa mai haɗin Intanet zai iya siyan Bitcoin. Saka jari a fasaha an ƙayyadaddhe ga attajiran masu tattarawa."
});

// bitcoin-vs-banks
writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin da Bankuna",
	"banks_header": "BAMBANCI TSAKANIN", "banks_header_2": "BITCOIN", "banks_header_3": "DA", "banks_header_4": "BANKUNA",
	"banks_intro_1": "Bankuna sun kasance masu tsaron kuɗinmu tsawon ƙarni da yawa.",
	"banks_intro_2": "Bitcoin tsarin kuɗi ne na dijital da aka ƙirƙira a 2009 wanda ke ba mutane damar zama bankinsu.",
	"banks_intro_3": "Bari mu duba bambance-bambancen: Bitcoin da bankuna.",
	"banks": "BANKUNA", "bitcoin": "BITCOIN",
	"banks_point_1": "Ana iya daskare asusuna", "banks_point_2": "Ajiye na ɓangare", "banks_point_3": "Lokutan aiki na ƙayyadaddun", "banks_point_4": "Manyan kuɗin aiki", "banks_point_5": "Ana buƙatar izini", "banks_point_6": "Duba ma'amala", "banks_point_7": "Ana iya yin kwace",
	"bitcoin_point_1": "Ba za a iya daskare ba", "bitcoin_point_2": "Ajiye na cikakke", "bitcoin_point_3": "24/7/365", "bitcoin_point_4": "Ƙananan kuɗin aiki", "bitcoin_point_5": "Ba a buƙatar izini", "bitcoin_point_6": "Tabbaci na lissafi", "bitcoin_point_7": "Ba za a iya kwace ba",
	"point_1_summary_1": "Bankuna za su iya daskare asusunka a kowane lokaci saboda kowane dalili. Ba za a iya daskare Bitcoin ba idan kana kula da shi da kanka.",
	"point_2_summary_1": "Bankuna suna ajiye ɓangaren kuɗin tallafin masu ajiya kawai. Bitcoin tsarin ajiye na cikakke ne — bitcoinka na nan ne idan ka ajiye shi a walletka.",
	"point_3_summary_1": "Bankuna suna aiki a lokutan aiki na ƙayyadaddun. Bitcoin yana aiki 24 sa'o'i, 7 kwanaki, 365 rana a shekara.",
	"point_4_summary_1": "Bankuna suna ɗaukar kuɗin aiki masu yawa don kula da asusuna da canja wurin kuɗi. Bitcoin yana da ƙananan kuɗin ma'amala.",
	"point_5_summary_1": "Bankuna suna buƙatar cikakken bayanai don buɗe asusun. Kowa zai iya amfani da Bitcoin ba tare da izini ba.",
	"point_6_summary_1": "Bankuna suna binciken ma'amala kuma za su iya ƙi su. Bitcoin yana amfani da tabbaci na lissafi maimakon izinin mutane.",
	"point_7_summary_1": "Gwamnatoci za su iya kwace kuɗin bankinka. Ba za a iya kwace Bitcoin ba idan kana kula da shi a walletka da kanka."
});

console.log(`\nDone! Created 10 comparison files.`);
