#!/usr/bin/env node
/**
 * Zulu manifest refresh — non-inflation translations, part 2.
 *
 * Covers: bitcoin-vs-* comparison pages, index (homepage), business/why,
 * business/index, get-involved, flyers, buy.
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
	"zu.json",
);

const HERO_TITLE_TEMPLATE = (asset) =>
	`Umehluko phakathi kwe-<span class="orange">Bitcoin</span> ne-<span class="asset">${asset}</span>`;

/* ─────────────── Translations by (namespace, key) ─────────────── */

const T = {
	"bitcoin-vs-banks": {
		point_1_summary_1:
			"Noma ubani onokuxhumana ne-inthanethi angasebenzisa i-Bitcoin — i",
		point_1_summary_2: "ngaphandle kwemvume.",
		point_1_summary_3:
			"Amabhange angala, avale, noma avale ama-akhawunti asekelwe enqubomgomweni noma emithethweni kahulumeni.",
		point_2_summary_1:
			"Inethiwekhi ye-Bitcoin isebenza 24/7/365 ngaphandle kwamahora okulungisa noma amaholidi. Amabhange anamahora alinganiselwe, agcina ngezimpelasonto, futhi anezikhathi zokwehlulwa.",
		point_3_summary_1:
			"Yonke inkokhelo ye-Bitcoin iku-blockchain yomphakathi noma ubani angayihlola. Amabhange asebenzisa amaledger angasese amakhasimende angakwazi ukuwaqinisekisa wodwa.",
		point_4_summary_1: "Nge-Bitcoin, ubamba okhiye bakho bangasese — bheka i",
		point_4_summary_2: "izikhwama ze-Bitcoin",
		point_4_summary_3:
			"yomhlahlandlela. Amabhange abamba imali yakho futhi angavala, alinganise, noma avimbe ukufinyelela kwakho nganoma yisiphi isikhathi.",
		point_5_summary_1:
			"Izimali ze-Bitcoin zisobala futhi zibikezeleka. Amabhange afaka izimali ezifihliwe ze-akhawunti, izimali zokukhokha ngaphezu kwenani, izimali zokuthumela imali, nezimali ze-ATM ngokuhamba kwesikhathi.",
		point_6_summary_1:
			"I-Bitcoin ikuvumela kuphela ukusebenzisa lokho onakho ngempela. Amabhange avumela ukukhokha ngaphezu kwenani, abese ekhokhisa izinhlawulo ezilandelayo ngenxa yaleli lungelo.",
		point_7_summary_1:
			"Lapho sezisakaziwe, izinkokhelo ze-Bitcoin azinakumiswa noma zibuyiselwe. Amabhange angavimba, avale, noma abuyise izinkokhelo ngokusekelwe enqubomgomweni noma emiyalelweni kahulumeni.",
		hero_title: HERO_TITLE_TEMPLATE("Amabhange"),
	},

	"bitcoin-vs-bonds": {
		point_1_summary_1:
			"Amabondi ‘awanangozi’ kuphela ngamazwi okwesibonelo — inkomba yenfleshini, ukunyakaza kwamazinga enzalo, nengozi yokuhluleka kuyadla yonke imibuyiselo yangempela.",
		point_1_summary_2:
			"I-Bitcoin inokuguquguquka okusobala kodwa ayinangozi efihliwe yohlangothi oluphikisanayo.",
		point_2_summary_1: "Lapho",
		point_2_summary_2: "inkomba yenfleshini",
		point_2_summary_3:
			"yedlula amazinga enzalo amabondi, abanikazi bamabondi balahlekelwa amandla okuthenga angempela minyaka yonke. Umkhawulo we-21 million we-Bitcoin awukwazi ukunwetshwa nge-infleshini.",
		point_3_summary_1:
			"Izimakethe zamabondi zingama ezinkingeni — i-Silicon Valley Bank yawa ngokwengxenye ngoba yayifakwe ekugcineni amabondi alahlekelwa inani. Bheka indlela",
		point_3_summary_2: "ukugijimela kwamabhange",
		point_3_summary_3:
			"okwenzeka ngayo nokuthi kungani i-Bitcoin iyigwema. I-Bitcoin ithengiswa 24/7 emhlabeni wonke ngaphandle kwezinkinga zokuthengiseka.",
		point_4_summary_1:
			"Ama-auction ka-Treasury angahluleka uma kungekho abathengi abanele — bheka",
		point_4_summary_2: "i-auction ebuthakathaka ka-2022.",
		point_4_summary_3:
			"Intengo ye-Bitcoin itholakala njalo ezimakethe ezivulekile ngaphandle kwe-auction esemkhakheni esingahluleka.",
		point_5_summary_1:
			"Amazinga enzalo amabondi amisiwe ngenkathi uthenga. Ngisho noma umnotho ukhula ngokushesha noma imali iwa, inzuzo yakho ihlala injalo.",
		point_5_summary_2:
			"I-Bitcoin inendawo yokukhula okukhulu njengoba ukwamukelwa kukhula nesidingo sihlangana nokukhiqizwa okumisiwe.",
		point_6_summary_1:
			"Amabondi amaningi abanjwa ngamabhange noma ama-broker, kungeza ingozi yohlangothi oluphikisanayo. I-Bitcoin ingagcinwa wedwa nge",
		point_6_summary_2: "isikhwama",
		point_6_summary_3: " — okuqeda ngokuphelele leyo ngozi.",
		point_7_summary_1:
			"Amabondi ancike ngokuphelele kohulumeni abakhokhayo. Uma uhulumeni ehluleka noma akhuphula isikweletu sakhe nge-infleshini, abanikazi bamabondi bayalahlekelwa.",
		point_7_summary_2:
			"I-Bitcoin isebenza ngokuzimela kunoma yimuphi uhulumeni noma isiphathimandla sezepolitiki.",
		hero_title: HERO_TITLE_TEMPLATE("Amabondi"),
	},

	"bitcoin-vs-cash": {
		point_1_summary_1:
			"I-Bitcoin ihamba kunoma yiphi indawo emhlabeni nge-inthanethi ngemizuzu. Imali engokoqobo idinga ukuba khona ngokwenyama noma abaphakathi abathembekile — awukwazi ukuthumela inothi le-$20 nge-imeyili.",
		point_2_summary_1:
			"I-Bitcoin isebenza ngendlela efanayo yonke indawo. Imali engokoqobo ilinganiselwe yindawo, amazinga okushintshanisa, nokwamukelwa kwendawo.",
		point_3_summary_1:
			"Ohulumeni bangachitha imali engokoqobo ngobusuku obubodwa — i-<a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> yakwenza ngo-2016. Ngisho nangaphandle kokuvalwa kwamanothimali, imali engokoqobo ilahlekelwa inani nge",
		point_3_summary_2: "inkomba yenfleshini.",
		point_3_summary_3:
			"I-Bitcoin ayikwazi ukuchithwa noma yimuphi uhulumeni noma isiphathimandla.",
		point_4_summary_1:
			"Imali engokoqobo ingakopishwa, ngezinye izikhathi ngokukhohlisa. I-Bitcoin isebenzisa i-cryptography eyenza ukukopisha kungenakwenzeka ngokomathemathiki.",
		point_5_summary_1:
			"I-Bitcoin ayinaso isiphathimandla esiyinhloko. Imali engokoqobo ikhishwa ohulumeni abangaphrinta eyengeziwe, bashintshe imiklamo, noma bachithe amanothimali ngokuthanda.",
		point_6_summary_1:
			"Imali engokoqobo isengozini yokwebiwa, umlilo, ukulahleka, nokuthathwa. I-Bitcoin ingagcinwa ngokuphepha",
		point_6_summary_2: "ngokuzigcinela",
		point_6_summary_3: "efonini noma kwidivayisi yehadiwe.",
		point_7_summary_1:
			"I-Bitcoin yahlukaniswa ngama-sats angu-100 million, ivumela ama-micropayments anoma yiluphi usayizi. Imali engokoqobo inamanani amancane — awukwazi ukuhlukanisa isenti.",
		hero_title: HERO_TITLE_TEMPLATE("Imali Engokoqobo"),
	},

	"bitcoin-vs-cbdc": {
		point_10_summary_1:
			"I-Bitcoin iyinethiwekhi yekhompyutha ephephe kakhulu eyake yakhiwa futhi ayikaze ihlaselwe. Ama-CBDC ancike kumabhange nakohulumeni asuhlaselwe izikhathi ezingenakubalwa.",
		point_1_summary_1:
			"Akekho ongakuvimba ekuthengiseni nge-Bitcoin. Ama-CBDC akhelwe ukuze ohulumeni namabhange agcizelelwe akwazi ukulawula yonke inkokhelo, anciphise ubumfihlo nenkululeko yakho.",
		point_2_summary_1:
			"I-Bitcoin ayipheli ngesikhathi futhi ayinazimali zenyanga. Ama-CBDC angakhelwa ukuthi aphele, akuvimbe ukulondoloza ikusasa.",
		point_3_summary_1:
			"I-Bitcoin inomkhawulo oqinile we-21 million BTC. Ama-CBDC awanawo umkhawulo wokukhiqizwa, avumela ohulumeni ukunwebula imali ngokuthanda — okudala",
		point_3_summary_2: "inkomba yenfleshini.",
		point_4_summary_1:
			"Amakheli e-Bitcoin awahlangeneswanga nobuwena bangempela. Ama-CBDC axhumana ngqo ne-ID kahulumeni, avumela ukuqaphwa kwemali okukhulu nokuvinjelwa.",
		point_5_summary_1:
			"Imithetho ye-Bitcoin iqinisekiswa ngamashumi ezinkulungwane zama-node azimele. Ama-CBDC agcizelelwe ezandleni zikahulumeni nezamabhange ezimaphakathi, ezibamba ukulawula okuphelele kwenethiwekhi.",
		point_6_summary_1:
			"Noma ubani angasebenzisa i-node ye-Bitcoin ukuqinisekisa imithetho yenethiwekhi. Ama-CBDC awavumeli abasebenzisi ukusebenzisa ama-node — kumele uthembe isiphathimandla esiphakathi.",
		point_7_summary_1:
			"I-Bitcoin ezigcinwe ngokuzimela ayikwazi ukuvalwa muntu. Ama-CBDC akhelwe ukuze ohulumeni namabhange agcizelelwe akwazi ukuvala ama-akhawunti ngokushesha.",
		point_8_summary_1:
			"I-Bitcoin ikunika ukulawula okuphelele kwemali yakho lapho uzigcinela nge",
		point_8_summary_2: "isikhwama.",
		point_8_summary_3:
			"Ama-CBDC adinga ukuthemba abagcini abafana namabhange noma ohulumeni ukuthi babambele imali yakho.",
		point_9_summary_1:
			"Inqubomgomo yemali ye-Bitcoin imisiwe ekhodini futhi ayikwazi ukushintshwa. Ama-CBDC angahlelwa kabusha ngokuthanda osopolitiki, okudala",
		point_9_summary_2: "inkomba yenfleshini",
		point_9_summary_3: " uma kuphrintwe imali eningi kakhulu.",
		hero_title: HERO_TITLE_TEMPLATE("Ama-CBDC"),
	},

	"bitcoin-vs-crypto": {
		point_1_summary_1:
			"Iphrothokholi ye-Bitcoin ihlale njengayo kusukela ngo-2009, inikeza imithetho elindelekile. Amaphrojekthi amaningi e-crypto ashintsha izinqubo, i-tokenomics, noma a-fork kuya ezinguqulweni ezintsha njalo.",
		point_2_summary_1:
			"I-Bitcoin isebenza emashumini ezinkulungwane zama-node azimele emhlabeni wonke. Amaphrojekthi amaningi e-crypto alawulwa ngama-foundation, izinkampani, noma amaqembu amancane abathuthukisi abangenza izinguquko ngokungayingi.",
		point_3_summary_1:
			"I-Bitcoin inomkhawulo oqinile wezinhlamvu ezingu-21 million — impahla yedijithali enqabe kunazo zonke. Amaphrojekthi amaningi e-crypto anokukhiqizwa okungenamkhawulo noma izindlela zokukhiqiza amathokheni amasha ngokuthanda, anciphise abanikazi.",
		point_4_summary_1:
			"I-Bitcoin inenjongo eyodwa: imali yedijithali yontanga-ku-ntanga. Noma ubani angayiqonda futhi ayisebenzise. Ama-crypto amaningi afaka izinkontileka ezihlakaniphile eziyinkimbinkimbi noma i-DeFi edinga ulwazi lwezobuchwepheshe ukuze isetshenziswe ngokuphepha.",
		point_5_summary_1:
			"I-Proof of Work ye-Bitcoin isebenze ngaphandle kohlaselo oluphumelele kunethiwekhi eyinhloko iminyaka engaphezu kwengu-15. Amaphrojekthi amaningi e-crypto asebenzisa ukuvumelana okuhlolwayo okungakahlolwa empini.",
		point_6_summary_1:
			"I-Bitcoin iyimali yedijithali — indawo yokugcina inani nemidiya yokushintshanisa. Amathokheni amaningi e-crypto ayimathokheni okuthengiselana noma okulawula anenani lomhlaba wangempela elingacacile.",
		point_7_summary_1:
			"I-Bitcoin iya iqina ngaphansi kokuhlasela futhi yasinda kuyo yonke inkinga, ukuvalwa, nokusolwa. Amaphrojekthi amaningi e-crypto awa ngenxa yengcindezi yezomthetho, ezobuchwepheshe, noma yemakethe.",
		point_8_summary_1:
			"I-Bitcoin ayinayo i-CEO, ayinankampani, ayinandawo eyodwa yokuhluleka. Amaphrojekthi amaningi e-crypto ancike kuma-VC, ebuholini obuthile, noma ekuphileni kwenkampani eyodwa.",
		hero_title: HERO_TITLE_TEMPLATE("I-Crypto"),
	},

	"bitcoin-vs-fine-art": {
		point_1_summary_1:
			"Yonke i-bitcoin iyafana futhi iyashintshana. Wonke umsebenzi wobuciko uyahluka — ukudalwa okuhlukile, umlando, isimo, nokuphuma kwenza ukuqhathaniswa okuqondile kube nzima kakhulu.",
		point_2_summary_1:
			"I-Bitcoin ithengiswa 24/7 emakethe yomhlaba etholakala kunoma ubani. Ubuciko obukhethekile budinga izindlu ze-auction ezikhethekile, abathengisi abangasese, noma amagalari, futhi kungathatha izinyanga ukuthengisa.",
		point_3_summary_1:
			"Ukuthenga noma ukuthengisa i-Bitcoin kubiza ngaphansi kwe-1% ngezimali, ngokuvamile ngaphansi kakhulu. Ukuthengiswa kobuciko kufaka u-30–40% ngezimali zomthengi, amakhomishini, umshwalense, ukuthutha, nokuqinisekisa.",
		point_4_summary_1:
			"I-Bitcoin yahlukaniswa ngama-sats angu-100 million, okuyenza ibe yinhle kunoma yisiphi isayizi senkokhelo. Awukwazi ukuba nesiqephu sepeni noma ikhona yesibazi ngaphandle kwengozi yohlangothi oluphikisanayo.",
		point_5_summary_1:
			"Ubunini be-Bitcoin nobuqiniso kungaqinisekiswa nge-cryptography ku-blockchain ngumuntu noma ubani. Ukuqinisekiswa kobuciko kuyabiza, kuyahamba kancane, futhi kusakhohliswa abakopishi — okubhubhisa inani lobuciko ngobusuku obubodwa.",
		point_6_summary_1:
			"I-Bitcoin, lapho igcinwe ngendlela efanele, isinda ezikhukhuleni, emililweni, ekuzamazameni komhlaba, nokwebiwa. Ubuciko obukhethekile busengozini kuwo wonke umoya wokubhubhisa ngokomzimba, futhi umshwalense awumbozi konke.",
		point_7_summary_1:
			"Noma ubani onokuxhumana ne-inthanethi nemali encane angathenga i-Bitcoin. Ukutshalomali kobuciko obukhethekile kuvamile ukulinganiselwa kubaqoqi abacebile abanokufinyelela kwe-auction nolwazi olukhethekile.",
		hero_title: HERO_TITLE_TEMPLATE("Ubuciko Obukhethekile"),
	},

	"bitcoin-vs-gold": {
		point_1_summary_1:
			"I-Bitcoin ingathunyelelwa ngokushesha nge-inthanethi ngezimali eziphansi. Igolide kumele lithunyelwe ngokwenyama ukuze kudluliselwe ubunini.",
		point_2_summary_1:
			"I-Bitcoin iyimpahla yedijithali ngokwemvelo ongayihambisa nge-inthanethi. Igolide elise-inthanethi liyi-Digital IOU — unobunini besithembiso esivela kumgcini, hhayi insimbi uqobo.",
		point_3_summary_1:
			"I-Bitcoin inomkhawulo oqinile we-21 million BTC. Ukukhiqizwa kwegolide kukhula cishe nge-<a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% unyaka ngamunye</a>, kunciphisa icesho lakho — kungaphansi kwe",
		point_3_summary_2: "infleshini",
		point_3_summary_3: "ye-fiat — kodwa kusayinfleshini.",
		point_4_summary_1:
			"Lapho intengo yegolide ikhuphuka, kumbiwa elidlulele, kupushe intengo phansi. Ukukhiqizwa kwe-Bitcoin akunwebeki — noma intengo iya kuyiphi indawo, kuyoba khona kuphela u-21 million.",
		point_5_summary_1:
			"Amashumi ezinkulungwane zama-node azimele aqinisekisa inethiwekhi ye-Bitcoin. Iningi legolide elingokoqobo lihlala ezimbadwini ezimbalwa zezigcina ezinkulu.",
		point_6_summary_1:
			"Noma ubani angaqinisekisa i-Bitcoin yangempela ngokusebenzisa i-full node — kuyiphi nje uhlelo lokusebenza. Ukuqinisekisa igolide elingokoqobo kudinga ukuliqothula; ngaphakathi kungaba i-tungsten.",
		point_7_summary_1:
			"I-Bitcoin yahlukaniswa ngama-sats angu-100 million, okuyenza ibe yinhle kunoma yiluphi usayizi lokuthenga. Igolide alikwazi ukuhlukaniswa kalula ezinkokhelweni ezincane.",
		hero_title: HERO_TITLE_TEMPLATE("Igolide"),
	},

	"bitcoin-vs-real-estate": {
		point_1_summary_1:
			"I-Bitcoin ihamba noma kuphi emhlabeni ngokushesha. Izindlu nempahla zibekwe endaweni eyodwa futhi zisengozini yezimo zomnotho wendawo, ezepolitiki, nezemvelo.",
		point_2_summary_1:
			"I-Bitcoin yahlukaniswa ngama-sats angu-100 million. Izindlu nempahla azikwazi ukuthengiswa ngokwengxenye — awukwazi ukuthengisa ikhishi kuphela noma uthenge uhhafu wegumbi lokulala.",
		point_3_summary_1:
			"I-Bitcoin isebenza kunethiwekhi engacentralized engelawulwa muntu. Izindlu nempahla zilawulwa kakhulu — ukulinganisa indawo, ukulawulwa kwerenti, umthetho wokuphucwa, nokuthathwa kufaka phakathi.",
		point_4_summary_1:
			"I-Bitcoin ayidingi ukulungiswa. Izindlu zidinga ukulungiswa, ukuvuselelwa, umshwalense, ukuphathwa kwempahla, nezinkinga zabaqashi.",
		point_5_summary_1:
			"I-Bitcoin ayinazintela ezilandelayo — ukhokha intela yenzuzo kuphela uma uthengisa. Izindlu zikweleta intela yempahla yonyaka kungakhathaliseki ukuthi inomholo.",
		point_6_summary_1:
			"I-Bitcoin, igcinwe ngendlela efanele, isinda emlilweni, ezikhukhuleni, nasekuzamazameni komhlaba. Izindlu zisengozini kuyo yonke inhlekelele, futhi umshwalense awumbozi konke.",
		point_7_summary_1:
			"Yonke i-bitcoin iyafana futhi iyashintshana. Yonke impahla yendlu iyahluka, okwenza ukubeka intengo nokuqhathanisa kube nzima.",
		point_8_summary_1:
			"I-Bitcoin ithengiswa emhlabeni 24/7 yinoma ubani onokuxhumana ne-inthanethi. Ukuthengiswa kwezindlu kulinganiselwe kubathengi bendawo futhi kungathatha izinyanga zokuqeda amaphepha.",
		point_9_summary_1:
			"I-Bitcoin ivumela ubunini bomuntu ngamunye obuqondile noma ubani. Ukuthenga izindlu njengokutshalomali ngaphezu kwekhaya lakho elikhulu kuphakamisa amanani ezindlu, kunciphise ukukwazi ukuthenga, futhi kufaka isandla enkingeni yezindlu.",
		hero_title: HERO_TITLE_TEMPLATE("Izindlu Nempahla"),
	},

	"bitcoin-vs-stocks": {
		point_1_summary_1:
			"I-Bitcoin iyimpahla eqondile onayo ngokuphelele. Amasheya ayizinkamu zenkampani — inani lawo lincike kubaphathi, ekusebenzeni, nasezinqumweni ongenamandla wokuzilawula.",
		point_2_summary_1:
			"I-Bitcoin inomkhawulo oqinile we-21 million BTC. Izinkampani zingakhipha amasheya amasha nganoma yisiphi isikhathi, zinciphise abanikazi abakhona — ngendlela efana ne-fiat",
		point_2_summary_2: "infleshini",
		point_2_summary_3: " enciphisa imali. Nge-Bitcoin, icesho lakho alinciphi.",
		point_3_summary_1:
			"I-Bitcoin ayinayo i-CEO futhi ayinandawo eyodwa yokuhluleka. Amasheya ancike kakhulu ebuholini — isinqumo esisodwa esibi noma ukuhamba kungehlisa intengo.",
		point_4_summary_1:
			"Intengo ye-Bitcoin ivela ezimakethe ezivulekile zomhlaba. Amanani amasheya ancike emizamweni efana ne-P/E ratios engasitha amasheya ahlangabezane nentengo eyeqile.",
		point_5_summary_1:
			"I-Bitcoin ithengiswa 24/7 emhlabeni wonke. Izimakethe zamasheya zivulekile kuphela ngamahora ebhizinisi ngezinsuku zokusebenza.",
		point_6_summary_1: "Ungathatha",
		point_6_summary_2: "ukuzigcinela",
		point_6_summary_3:
			"kwe-Bitcoin ngohlelo lokusebenza olulula — akudingeki i-broker. Amasheya ahlala kuma-brokerage, akubeke engozini yohlangothi oluphikisanayo uma ehluleka.",
		point_7_summary_1:
			"Ukukhiqizwa okumisiwe kwe-Bitcoin kuyenza ibe isivikelo esithembekile senfleshini. Amanye amasheya ahlula i-infleshini, amanye awakwenzi — alikho qiniso.",
		hero_title: HERO_TITLE_TEMPLATE("Amasheya"),
	},

	"bitcoin-vs-visa": {
		point_1_summary_1:
			"I-Bitcoin iyinethiwekhi evulekile noma ubani angajoyina futhi asebenzise ngaphandle kwemvume. I-Visa iyisistimu evalelekile elawulwa yizikhungo zezezimali ezinganqaba ukufinyelela — ikakhulukazi kwabangenamabhange nabambadlana.",
		point_2_summary_1:
			"Izinkokhelo ze-Bitcoin azinazimali zabathengisi. I-Visa ngokuvamile ikhokhisa abathengisi cishe u-3% ngokwenzeka — ibhizinisi lakho lingonga imali ngokwamukela",
		point_2_summary_2: "Izinkokhelo ze-Bitcoin",
		point_2_summary_3: " esikhundleni salokho.",
		point_3_summary_1:
			"Yonke inkokhelo ye-Bitcoin iku-blockchain yomphakathi engahlolwa. I-Visa isebenzisa isistimu evalelekile, eyenkampani lapho amakhasimende engakwazi ukuqinisekisa lutho wodwa.",
		point_4_summary_1:
			"I-Bitcoin ayinakuvalwa noma yisiphi isiphathimandla esiphakathi. I-Visa ingavala ama-akhawunti, ivimbe izinkokhelo, noma inqabe insizakalo nganoma yisiphi isikhathi.",
		point_5_summary_1:
			"I-Bitcoin iyiphephe-yokugcina — ungasebenzisa kuphela lokho onakho. Amakhadi esikweletu adala isikweletu esinamanani enzalo ngokuvamile ngaphezu kwe-25% unyaka ngamunye.",
		point_6_summary_1: "I-Bitcoin ikuvumela ukuthatha",
		point_6_summary_2: "ukuzigcinela",
		point_6_summary_3:
			"ngaphandle kwebhange noma umcubunguli wezinkokhelo. Amakhadi esikweletu ahlala edinga abaphakathi.",
		point_7_summary_1:
			"I-Bitcoin isebenza 24/7 emhlabeni wonke ngaphandle kwamahora ebhizinisi. I-Visa inamahora okusebenza, izikhathi zokulungiswa, nemikhawulo yendawo engavimba izinkokhelo.",
		hero_title: HERO_TITLE_TEMPLATE("I-Visa"),
	},

	"index": {
		home_btn_saving: "ukulondoloza",
		home_card_label_art_1: "Asiqhathanise",
		home_card_label_art_2: "Sabalalisa izwi",
		home_card_label_art_3: "Ubuciko basemgwaqweni",
		home_card_label_bank_runs: "Isistimu enesigcino esiphelele",
		home_card_label_bonds: "Asiqhathanise",
		home_card_label_business_1: "Yini umehluko?",
		home_card_label_business_2: "Yamukela izinkokhelo ze-Bitcoin",
		home_card_label_cash: "Asiqhathanise",
		home_card_label_cbdc: "Kuvulekile noma kuvalekile?",
		home_card_label_coding_1: "Isifundo esisebenzisanayo",
		home_card_label_coding_2: "Yakha ihadiwe",
		home_card_label_coding_3: "Amaphazili okukhodwa",
		home_card_label_crowdfunding_1: "Imibhikisho ye-EndSARS",
		home_card_label_crowdfunding_2: "Imali engenakuvinjelwa",
		home_card_label_crowdfunding_3: "Xhasa iphrojekthi yakho",
		home_card_label_crypto: "Yini umehluko?",
		home_card_label_energy_1: "Ukuzinza kuhlelo lwagesi",
		home_card_label_energy_4: "Ukuphendula esidingweni",
		home_card_label_energy_5: "Ukuxhunywa kukagesi emaphandleni",
		home_card_label_energy_6: "Izincomo zezivuselelekayo",
		home_card_label_environment_1: "Ukunciphisa i-methane",
		home_card_label_environment_2: "Yasindisa iphaki yezwe",
		home_card_label_environment_3: "Imboni eluhlaza kakhulu",
		home_card_label_environment_4: "Inciphisa igesi elilahlwayo",
		home_card_label_equality_1: "Ithemba namathuba",
		home_card_label_equality_2: "Umshintshi wamadlelo",
		home_card_label_food_1: "Amanani okudla",
		home_card_label_food_2: "Amapulazi nomhlabathi",
		home_card_label_freedom_1: "Imibuso enobushiqela",
		home_card_label_freedom_2: "Ithuluzi elingafani",
		home_card_label_get_started_1: "Izisekelo zomqalisi",
		home_card_label_get_started_2: "Isikhwama sakho sokuqala",
		home_card_label_get_started_3: "Thenga i-Bitcoin",
		home_card_label_gold: "Yikuphi okungcono?",
		home_card_label_housing_1: "Izindlu ezishibhile",
		home_card_label_human_rights_1: "Ukuphoqelelwa kwamalungelo abantu",
		home_card_label_human_rights_2: "Ukwamukelwa okuqala emphakathini",
		home_card_label_human_rights_3: "Umthelela womhlaba",
		home_card_label_inflation: "I-Bitcoin iyimali engcono",
		home_card_label_networks_1: "Ukubuka kwenethiwekhi okusenza",
		home_card_label_networks_2: "Asiqhathanise",
		home_card_label_payments_1: "Yini umehluko?",
		home_card_label_payments_2: "Izinkokhelo ezisheshayo nezishibhile",
		home_card_label_payments_3: "Ukuthumelelwa kwemali",
		home_card_label_payments_4: "Yamukela izinkokhelo",
		home_card_label_politics_1: "Ukuphikisana kwezepolitiki",
		home_card_label_politics_2: "Thatha isinyathelo",
		home_card_label_property_rights_1: "Asiqhathanise",
		home_card_label_property_rights_2: "Ubunini bangempela",
		home_card_label_salary: "Vikela umholo wakho",
		home_card_label_self_custody_1: "Umhlahlandlela wesikhwama se-Bitcoin",
		home_card_label_self_custody_2: "Isinyathelo esibaluleke kakhulu",
		home_card_label_self_custody_3: "Imali ezimele",
		home_card_label_war_1: "Qeda izimpi ezingapheli",
		home_card_label_war_2: "Ukusiza amasosha asephumile",
		home_card_label_war_3: "Ukuphunyuka kwesikhathi sempi",
		home_h1: "I-Bitcoin iyimali engcono eyakha umhlaba ongcono.",
		home_nav_about: "Mayelana",
		home_nav_get_involved: "Bamba iqhaza",
		home_nav_learn: "Funda",
		home_source_prefix: "Umthombo:",
	},
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const ns = T[e.namespace];
		if (ns && Object.prototype.hasOwnProperty.call(ns, e.key)) {
			e.targetTranslation = ns[e.key];
			filled++;
			continue;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (zu): filled ${filled}, already-done ${skipped}`,
	);
}

main();
