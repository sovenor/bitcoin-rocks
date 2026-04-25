#!/usr/bin/env node
/**
 * Chichewa (ny) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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
	"ny.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Bwerera ku Tsamba Lalikulu",
	"404::404_message":
		"Bitcoin ndi yabwino, koma tsamba lothasikali silili choncho.",
	"404::404_not_found_short": "Sapezeka",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Timapereka zothandizira bizinesi zaulere zomwe zimapangitsa kuti zikhale zophweka kuti amalonda akumudzi kwanu ayambe kulandira Bitcoin. Tsamba lathu la bizinesi la Bitcoin limafotokoza chifukwa chake Bitcoin ndi yabwino kwa bizinesi, momwe mungasankhire chikwama ndi makina olipirira, ndipo timapereka zitikiti zaulere za 'Bitcoin Imalandiridwa Pano'.",
	"about::about_card_business_label": "Zothandizira bizinesi",
	"about::about_card_business_source": "Gwero: bitcoin.rocks \u2192",
	"about::about_card_business_title":
		"Zonse zomwe bizinesi imafunika kuti iyambe kulandira malipiro a Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Gwero: GitHub \u2192",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Thandizani",
	"about::about_card_contribute_source": "Gwero: GitHub \u2192",
	"about::about_card_contribute_title":
		"Phunzirani momwe mungathandizire bitcoin.rocks",
	"about::about_card_email_label": "Imelo",
	"about::about_card_email_source": "Gwero: imelo \u2192",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Mapepala osindikiza",
	"about::about_card_flyers_source": "Gwero: bitcoin.rocks \u2192",
	"about::about_card_flyers_title":
		"Tsitsani ndi kusindikiza mapepala a Bitcoin a anthu a kumudzi kwanu",
	"about::about_card_github_label": "Repositori",
	"about::about_card_github_source": "Gwero: GitHub \u2192",
	"about::about_card_github_title": "Onani bitcoin.rocks pa GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Gwero: Nostr \u2192",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Zitikiti zaulere",
	"about::about_card_stickers_source": "Gwero: bitcoin.rocks \u2192",
	"about::about_card_stickers_title":
		"Pezani zitikiti za Bitcoin zaulere zotumizidwa kunyumba kwanu",
	"about::about_editorial_2":
		"Timalumikizana ndi magwero odalirika monga Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, United Nations, World Gold Council, Forbes, MIT Technology Review, Lyn Alden, ndi James Lavish. Timakhulupirira kuti Bitcoin imadzilankhula yokha zinthu zikafotokozedwa momveka bwino.",
	"about::about_flyers_blurb":
		"Timapanga mapepala osindikiza omwe mungagawane pa misonkhano, mukhomere pa mabolodi a anthu a kumudzi kwanu, kapena kuyika m'mabokosi a makalata \u2014 njira yosavuta yochititsira chidwi ndi kutsogolera anthu ku bitcoin.rocks kuti aphunzire zambiri.",
	"about::about_header": "Za bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks idakhazikitsidwa ndi",
	"about::about_mission_1b":
		"mu 2022 ndi cholinga chosavuta: kufulumizitsa kugwiritsidwa ntchito kwa Bitcoin kudzera mu maphunziro.",
	"about::about_open_source_2":
		"bitcoin.rocks ndi ntchito yaulere yotseguka pansi pa chilolezo cha MIT. Aliyense angathandizire ku bitcoin.rocks. Timalandira makamaka omasulira omwe amathandiza kuti zomwe timapereka zikhale zopezeka kwa anthu padziko lonse.",
	"about::about_page_description":
		"bitcoin.rocks ndi tsamba la maphunziro a Bitcoin laulere komanso lotseguka, lokhazikitsidwa mu 2022. Cholinga chathu ndi kufulumizitsa kugwiritsidwa ntchito kwa Bitcoin kudzera mu maphunziro.",
	"about::about_stickers_blurb":
		"Timatumiza zitikiti za Bitcoin zaulere ku khomo lanu kuti mutithandize kufalitsa chidziwitso cha Bitcoin kumudzi kwanu. Mazana a anthu amasanthula ma QR code pa zitikitizi mwezi uliwonse kuti aphunzire za Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin ilibe kuthawira ku banki",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin ndi dongosolo lokhala ndi nkhokwe yathunthu. Simukuyika ndalama zanu m'banki. Inu ndinu banki yanu yokha. Palibe wina amene amakongoletsa ndalama zanu popanda kuti mudziwe chifukwa inu nokha ndinu munthu okha amene angapeze ndalama zanu.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Mukasunga Bitcoin mu chikwama chanu \u2014 osati pa exchange kapena moyikidwa mu ETF \u2014 kuthawira ku banki sikungachitike.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Ndi Bitcoin, mukukhala ndi mphamvu zonse pa ndalama zanu.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Kuyambira pa 26 March 2020, mabanki a U.S. amayenera kusunga 0% ngati nkhokwe.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Chiwerengero cha nkhokwe ya banki",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Gwero: Federal Reserve \u2192",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Dongosolo la nkhokwe yathunthu \u2014 palibe inshuwalansi yofunika ya zomwe zayikidwa.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Chitetezo cha Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Gwero: Bitcoin Whitepaper \u2192",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Bitcoin iliyonse imakhalapo pa blockchain \u2014 palibe yomwe ikukongoletsedwa.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Chiwerengero cha nkhokwe ya Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Gwero: Bitcoin Whitepaper \u2192",
	"bank-runs::bank_runs_card_fdic_detail":
		"Ndalama za inshuwalansi za $153.9B vs $10.82T m'zomwe zayikidwa zoyikidwa inshuwalansi (Disembala 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Chitetezo cha FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Gwero: FDIC Statistics at a Glance \u2192",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Phunziro la mlandu",
	"bank-runs::bank_runs_card_svb_source":
		"Gwero: University of Washington School of Law \u2192",
	"bank-runs::bank_runs_card_svb_title":
		"Phunzirani momwe kuthawira ku Silicon Valley Bank kunachitikira",
	"bank-runs::bank_runs_card_wallet_label": "Chinthu choyenera",
	"bank-runs::bank_runs_card_wallet_source": "Yambani pano \u2192",
	"bank-runs::bank_runs_card_wallet_title":
		"Phunzirani momwe mungapezere chikwama chanu cha Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"Inshuwalansi ya FDIC ikhulupilira pafupifupi 1% ya zomwe zayikidwa",
	"bank-runs::bank_runs_fdic_p1":
		"Inshuwalansi ya FDIC imateteza zomwe zayikidwa mpaka $250,000 pa wopereka aliyense. Koma ndalama za inshuwalansiyo ndi zochepa kwambiri poyerekeza ndi zomwe zayikidwa zonse zomwe ziyenera kutetezedwa.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Mu kulephera kwakukulu kwa banki, boma likhoza kusindikiza ndalama kuti likwaniritse mpata \u2014 zomwe zikupangitsa kuwonjezeka kwa",
	"bank-runs::bank_runs_fdic_p2_link": "kukwera kwa mitengo.",
	"bank-runs::bank_runs_header":
		"Bitcoin ilibe kuthawira ku banki, koma banki yanu ikhoza kukhala nako.",
	"bank-runs::bank_runs_page_description":
		"Mabanki amakongoza zomwe mwayika pansi pa dongosolo la nkhokwe yopanda yathunthu. Ngati anthu ambiri achotsa ndalama nthawi imodzi, mabanki akhoza kulephera. Bitcoin ndi dongosolo lokhala ndi nkhokwe yathunthu \u2014 kuthawira ku banki sikungachitike.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: chitsanzo chenicheni",
	"bank-runs::bank_runs_svb_p1_a":
		"Mu March 2023, Silicon Valley Bank inalephera atatha kuyika zomwe makasitomala ayika m'mabondi a nthawi yayitali",
	"bank-runs::bank_runs_svb_p1_b":
		"Mabondiwo ataya mtengo wawo, SVB sinathe kupereka zochotsedwa. Banki idalephera.",
	"bank-runs::bank_runs_svb_p1_link": "a boma.",
	"bank-runs::bank_runs_svb_p2":
		"Mabizinesi zikwizikwi sanathe kulipira antchito awo. FDIC inalowerera \u2014 koma izi zinapangitsa funso lalikulu: kodi ndalama zanu zili zotetezeka?",
	"bank-runs::bank_runs_what_p1":
		"Mabanki samasunga zomwe mwayika m'chipinda chosungira. Amakongoza ndalama zanu ndi kuziyika \u2014 izi zimatchedwa fractional reserve banking.",
	"bank-runs::bank_runs_what_p2":
		"Ngati anthu ambiri ayesa kuchotsa ndalama nthawi imodzi, banki ilibe ndalama zokwanira kulipira aliyense. Imeneyo ndi bank run \u2014 ndipo ikhoza kupangitsa banki kugwa kwathunthu.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Mabanki</span>',
	"bitcoin-vs-banks::point_1_summary_1":
		"Aliyense amene ali ndi internet akhoza kugwiritsa ntchito Bitcoin \u2014 ili",
	"bitcoin-vs-banks::point_1_summary_2": "yopanda chilolezo.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Mabanki akhoza kukana, kutseka, kapena kuthetsa akaunti malingana ndi malamulo a kampani kapena a boma.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Netiweki ya Bitcoin ikugwira ntchito 24/7/365 popanda nthawi yokonza kapena masiku opuma. Mabanki ali ndi nthawi yochepa, amatseka pa kumapeto kwa milungu, ndi nthawi yopanda ntchito.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Kugwiritsa ntchito kulikonse kwa Bitcoin kuli pa blockchain ya pagulu yomwe aliyense angathe kufufuza. Mabanki amayendetsa malowedwa achinsinsi omwe makasitomala sangathe kutsimikizira okha.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Ndi Bitcoin, mumakhala ndi makiyi anu achinsinsi \u2014 onani gaidi yathu yosavuta ya",
	"bitcoin-vs-banks::point_4_summary_2": "zikwama za Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Mabanki amasunga ndalama zanu ndipo akhoza kutseka, kuchepetsa, kapena kuletsa nthawi iliyonse.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Ndalama zomwe Bitcoin imafunika ndi zopezeka momveka bwino komanso zoyembekezereka. Mabanki amawonjezera ndalama zobisika za akaunti, overdraft, kutumiza, ndi ATM pakapita nthawi.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin imangokulolani kugwiritsa ntchito zomwe muli nazo. Mabanki amalola overdraft, kenako amalipiritsa zilango zambiri zowonjezera.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Kamodzi atalengeza, kugwiritsa ntchito Bitcoin sikungaletsedwe kapena kubwezeretsedwa. Mabanki akhoza kuletsa, kutseka, kapena kubwezeretsa zomwe zachitika malingana ndi malamulo a kampani kapena a boma.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Mabondi</span>',
	"bitcoin-vs-bonds::point_1_summary_1":
		"Mabondi ndi 'opanda ngozi' pofotokoza basi \u2014 kukwera kwa mitengo, kusintha kwa chiwongolero, ndi ngozi ya kulephera zonse zimadya phindu lenileni.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin ili ndi kusinthasintha komveka koma palibe ngozi yobisika ya munthu wina.",
	"bitcoin-vs-bonds::point_2_summary_1": "Pamene",
	"bitcoin-vs-bonds::point_2_summary_2": "kukwera kwa mitengo",
	"bitcoin-vs-bonds::point_2_summary_3":
		"kuposa phindu la mabondi, eni mabondi amataya mphamvu yogula yenileni chaka chilichonse. Malire a 21 miliyoni a Bitcoin sangakwere.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Misika ya mabondi ikhoza kuzizira pa zovuta \u2014 Silicon Valley Bank inagwa pang'ono chifukwa idakhala ndi mabondi omwe adataya mtengo. Onani momwe",
	"bitcoin-vs-bonds::point_3_summary_2": "kuthawira ku banki",
	"bitcoin-vs-bonds::point_3_summary_3":
		"kumachitikira ndi chifukwa chake Bitcoin imapewa. Bitcoin imagulitsidwa 24/7 padziko lonse popanda zovuta zandalama.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Misika ya Treasury ikhoza kulephera pamene palibe ogula okwanira \u2014 onani",
	"bitcoin-vs-bonds::point_4_summary_2": "msika wofooka wa 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Mtengo wa Bitcoin umapezeka mosalekeza pa misika yotseguka popanda msika wapakatikati womwe ungalephere.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Phindu la mabondi limakhazikitsidwa pamene agulidwa. Ngakhale chuma chikwere kapena ndalama zigwe, phindu lanu likhalabe lomwelo.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ili ndi malo akukula kwambiri pamene kugwiritsidwa ntchito kukukula ndipo kufuna kukukumana ndi kuchuluka kokhazikika.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Mabondi ambiri amasungidwa kudzera m'mabanki kapena ma broker, owonjezera ngozi ya munthu wina. Bitcoin imatha kusungidwa nokha ndi",
	"bitcoin-vs-bonds::point_6_summary_2": "chikwama",
	"bitcoin-vs-bonds::point_6_summary_3":
		" \u2014 kuchotsa ngoziyo kwathunthu.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Mabondi amadalira kwathunthu maboma kuti abweze. Ngati boma lilephera kapena lichotse ngongole yake mwa kukwera kwa mitengo, eni mabondi amataya.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin imagwira ntchito mwapayekha popanda boma kapena ulamuliro wandale.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Ndalama Zenizeni</span>',
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin imayenda pa internet kulikonse mu mphindi zochepa. Ndalama zenizeni zimafunika kupezeka pamalo kapena otumiza odalirika \u2014 simungatumize ndalama zenizeni za $20 kudzera mu imelo.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin imagwira ntchito chimodzimodzi kulikonse. Ndalama zenizeni zili zochepa pamalo, mtengo wa kusinthana, ndi kuvomerezeka kwa kumudzi.",
	"bitcoin-vs-cash::point_3_summary_1":
		'Maboma akhoza kuthetsa ndalama zenizeni mwadzidzidzi \u2014 <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> idachita zomwezo mu 2016. Ngakhale popanda kuchotsa, ndalama zenizeni zimataya mtengo wake chifukwa cha',
	"bitcoin-vs-cash::point_3_summary_2": "kukwera kwa mitengo.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin singathetsedwe ndi boma lililonse kapena ulamuliro uliwonse.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Ndalama zenizeni zikhoza kupangidwa zabodza, nthawi zina mwaluso. Bitcoin imagwiritsa ntchito cryptography yomwe imapangitsa kupanga zabodza kosatheka.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin ilibe ulamuliro wapakatikati. Ndalama zenizeni zimaperekedwa ndi maboma amene akhoza kusindikiza zambiri, kusintha mawonekedwe, kapena kuthetsa makalata malinga ndi kufuna kwawo.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Ndalama zenizeni zili zovuta ku kuba, moto, kutaya, ndi kulanda. Bitcoin imatha kusungidwa motetezeka",
	"bitcoin-vs-cash::point_6_summary_2": "nokha",
	"bitcoin-vs-cash::point_6_summary_3":
		"pa foni kapena chipangizo cha hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin imagawanika m'magawo 100 miliyoni a satoshi, zomwe zimathandiza malipiro ang'ono akukula kulikonse. Ndalama zenizeni zili ndi malire ang'ono \u2014 simungagawane senti imodzi.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">CBDC</span>',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin ndi netiweki ya makompyuta yotetezedwa kwambiri yomwe inamangidwapo ndipo sinathaweko. Ma CBDC amadalira mabanki ndi maboma omwe athawapo nthawi zambiri.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Palibe amene angakuletse kuti mugwiritse ntchito Bitcoin. Ma CBDC adapangidwa kuti maboma ndi mabanki apakatikati athe kulamulira malipiro aliwonse, kuchepetsa chinsinsi ndi ufulu wanu.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin sithetsa ndipo ilibe ndalama za mwezi uliwonse. Ma CBDC akhoza kupangidwa kuti athetse, kuletsa inu kusunga m'tsogolo.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ili ndi malire akhwawakhwa a 21 miliyoni ya BTC. Ma CBDC alibe malire a kuchuluka, kulola maboma kukulitsa ndalama malingana ndi kufuna kwawo \u2014 zomwe zimapangitsa",
	"bitcoin-vs-cbdc::point_3_summary_2": "kukwera kwa mitengo.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Maadilesi a Bitcoin samalumikizidwa ndi dzina lanu lenileni. Ma CBDC amalumikizana mwachindunji ndi ID ya boma, kulola kufunafuna ndalama kwakukulu komanso kuletsa.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Malamulo a Bitcoin amatsimikiziridwa ndi makumi ambiri a node odziimira okha. Ma CBDC ali pakatikati m'manja mwa boma ndi mabanki apakatikati, omwe ali ndi mphamvu zonse pa netiweki.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Aliyense akhoza kuyendetsa node ya Bitcoin kuti atsimikizire malamulo a netiweki. Ma CBDC sasalola ogwiritsa ntchito kuyendetsa ma node \u2014 muyenera kudalira ulamuliro wapakatikati.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin yosungidwa nokha singatsekedwe ndi aliyense. Ma CBDC adapangidwa kuti maboma ndi mabanki apakatikati athe kutseka akaunti pomwepo.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin imakupatsani mphamvu yonse pa ndalama zanu mukasunga nokha ndi",
	"bitcoin-vs-cbdc::point_8_summary_2": "chikwama.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Ma CBDC amafunika kudalira osungira monga mabanki kapena maboma kuti asunge ndalama zanu.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Lamulo la ndalama la Bitcoin lakhazikika mu khodi ndipo silingasinthe. Ma CBDC akhoza kupangidwanso malingana ndi kufuna kwa andale, zomwe zimapangitsa",
	"bitcoin-vs-cbdc::point_9_summary_2": "kukwera kwa mitengo",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" pamene ndalama zambiri zasindikizidwa.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::crypto": "CRYPTO",
	"bitcoin-vs-crypto::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Crypto</span>',
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protocol ya Bitcoin yakhalabe yofanana kuyambira 2009, ndikupereka malamulo oyembekezereka. Ma project ambiri a crypto amasintha protocol, tokenomics, kapena amagawanika m'mabaibulo atsopano.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin imagwira ntchito pa makumi ambiri a node odziimira padziko lonse. Ma project ambiri a crypto amalamuliridwa ndi mabungwe, makampani, kapena ma dev gulu ang'ono omwe akhoza kupanga zosintha okha.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ili ndi malire akhwawakhwa a 21 miliyoni \u2014 chuma cha digito chochepa kwambiri. Ma project ambiri a crypto ali ndi kuchuluka kopanda malire kapena njira zopangira ma token atsopano malingana ndi kufuna kwawo, kuchepetsa eni.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ili ndi cholinga chimodzi: ndalama za digito za peer-to-peer. Aliyense akhoza kuyimvetsa ndi kuyigwiritsa ntchito. Crypto yambiri imaphatikizapo zopangidwa zophweka kapena DeFi yomwe imafuna luso lapadera kuti igwiritsidwe ntchito motetezeka.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work ya Bitcoin yakhala ikugwira ntchito popanda kuukira kopambana pa netiweki yaikulu kwa zaka 15 zoposa. Ma project ambiri a crypto amagwiritsa ntchito makonsensasi atsopano osayesedwa pamunda.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin ndi ndalama za digito \u2014 malo osungira phindu ndi njira yosinthana. Ma token ambiri a crypto ndi ma token oyendetsa kapena olamulira osakaza ndi mtengo wokayikitsa wa dziko lenileni.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin imakula yamphamvu pansi pa kuukira ndipo yapulumuka pa zovuta zonse, zoletsa, ndi kunyoza. Ma project ambiri a crypto amagwa pansi pa zovuta za malamulo, zaukadaulo, kapena za msika.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin ilibe CEO, ilibe kampani, ilibe malo amodzi olephera. Ma project ambiri a crypto amadalira ma VC, atsogoleri ena, kapena kupulumuka kwa kampani imodzi.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Zojambula Zapamwamba</span>',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Bitcoin iliyonse imafanana ndipo ingasinthidwe. Chojambula chilichonse ndi chapadera \u2014 kupangidwa kosiyana, mbiri, mkhalidwe, ndi chiyambi zimapangitsa kuyerekeza kwachindunji kukhala kovuta kwambiri.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin imagulitsidwa 24/7 pa msika wa padziko lonse womwe ungafikidwe ndi aliyense. Zojambula zapamwamba zimafunika nyumba zapadera za auction, ogulitsa achinsinsi, kapena ma gallery ndipo zikhoza kutenga miyezi kuti zigulitsidwe.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Kugula kapena kugulitsa Bitcoin kumawononga ndalama zochepera 1%, nthawi zambiri zochepa kwambiri. Kugulitsa kojambula kumawonjezera 30\u201340% mu premium ya wogula, ndalama, inshuwalansi, kunyamula, ndi ndalama zotsimikiziridwa.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin imagawanika m'magawo 100 miliyoni a satoshi, yokwanira kugwiritsa ntchito kulikonse. Simungakhale ndi kachigawo ka chithunzi kapena ngodya ya chosema popanda ngozi ya munthu wina.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Kukhala ndi Bitcoin ndi kutsimikizika kwake kungathe kutsimikiziridwa mwa cryptographic ndi aliyense pa blockchain. Kutsimikizika kwa zojambula ndi kokwera mtengo, kochedwa, ndipo amatchedwa kwambiri ndi opanga zabodza \u2014 kuwononga mtengo wa zojambula mwadzidzidzi.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin yokweza moyenera ikhoza kupulumuka pa madzi osefukira, moto, chivomerezi, ndi kuba. Zojambula zapamwamba zili zovuta ku mtundu uliwonse wa kuwonongeka kwa thupi, ndipo inshuwalansi sikukwanira pa zonse.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Aliyense amene ali ndi internet ndi ndalama zochepa akhoza kugula Bitcoin. Kugula zojambula zapamwamba kuli kochepa kwa osonkhanitsa olemera okha okhala ndi mwayi wa auction ndi luso lapadera.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Golide</span>',
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin imatha kutumizidwa pomwepo pa internet ndi ndalama zochepa. Golide iyenera kutumizidwa mwa thupi kuti isinthidwe ena.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin ndi chuma cha digito chomwe mungatumize pa internet. Golide pa intaneti ndi IOU ya Digital \u2014 muli ndi lonjezo lokha kuchokera kwa wosungira, osati golide weniweni.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin ili ndi malire akhwawakhwa a 21 miliyoni ya BTC. Kuchuluka kwa golide kumakula pafupifupi <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1.6% pachaka</a>, kuchepetsa gawo lanu \u2014 kosakwana',
	"bitcoin-vs-gold::point_3_summary_2": "kukwera kwa mitengo",
	"bitcoin-vs-gold::point_3_summary_3":
		"kwa fiat \u2014 koma chikadali kukwera kwa mitengo.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Mtengo wa golide ukakwera, golide yochuluka imafukulidwa, kupangitsa mtengo wake kutsika. Kuchuluka kwa Bitcoin sikusinthasintha \u2014 ngakhale mtengo wakwera kwambiri, idzakhalapo basi 21 miliyoni.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Makumi ambiri a node odziimira amatsimikizira netiweki ya Bitcoin. Golide yambiri yathupi imakhala m'zipinda zochepa zazikulu zosungira.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Aliyense akhoza kutsimikizira Bitcoin yowona pothamangitsa full node \u2014 ndi pulogalamu yokha. Kutsimikizira golide yathupi kumafunika kuyiwala; mkati mwake mukhoza kukhala tungsten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin imagawanika m'magawo 100 miliyoni a satoshi, yokwanira kugula kulikonse. Golide singagawane mosavuta pa zochita zazing'ono.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Malo</span>',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin imayenda kulikonse padziko lapansi pomwepo. Malo amamangidwa kumalo amodzi ndipo ali pachiwopsezo cha zachuma, ndale, ndi zachilengedwe za m'deralo.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin imagawanika m'magawo 100 miliyoni a satoshi. Malo singagulitsidwe pang'ono \u2014 simungagulitse khitchini kapena kugula theka la chipinda.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin imagwira ntchito pa netiweki yopanda wolamulira yomwe palibe boma lingathe kulamulira. Malo amalamulidwa kwambiri \u2014 zoning, kuwongolera renti, eminent domain, ndi kulanda zonse zikugwira ntchito.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin saifuna kusamalidwa. Malo amafunika kukonza, kusintha, inshuwalansi, kasamalidwe ka katundu, ndi mavuto a omwe akukhalamo.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin ilibe misonkho yopitilizika \u2014 mukulipira capital gain pakangogulitsa. Malo amalipira misonkho ya katundu chaka chilichonse mosaganizira ndalama.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin yokweza moyenera ikhoza kupulumuka pa moto, madzi osefukira, ndi chivomerezi. Malo ali pachiwopsezo cha tsoka lililonse, ndipo inshuwalansi sikufikira pa zonse.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Bitcoin iliyonse imafanana ndipo ingasinthidwe. Malo aliwonse ndi apadera, kupangitsa kupanga mitengo ndi kuyerekeza kovuta.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin imagulitsidwa padziko lonse 24/7 ndi aliyense amene ali ndi internet. Kugulitsa malo kuli kochepa kwa ogula a m'derali ndipo kungatenge miyezi yambiri yokhala ndi mapepala.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin imathandiza kukhala ndi okha kwa aliyense. Kugula malo ngati ndalama kupitirira nyumba yanu yayikulu kumakulitsa mitengo ya nyumba, kuchepetsa kukwanitsa kwa anthu ena ndikupangitsa zovuta zanyumba.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Masheya</span>',
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin ndi chuma chachindunji chomwe muli nacho ndi kwathunthu. Masheya ndi magawo a kampani \u2014 mtengo wake umadalira utsogoleri, ntchito, ndi zisankho zomwe inu simungazilamulire.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ili ndi malire akhwawakhwa a 21 miliyoni ya BTC. Makampani akhoza kupereka masheya atsopano nthawi iliyonse, kuchepetsa eni masheya omwe alipo \u2014 ofanana ndi momwe fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "kukwera kwa mitengo",
	"bitcoin-vs-stocks::point_2_summary_3":
		" kumachepetsa ndalama zenizeni. Ndi Bitcoin, gawo lanu silichepa.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin ilibe CEO ndipo ilibe malo amodzi olephera. Masheya amadalira kwambiri utsogoleri \u2014 chisankho chimodzi cholakwika kapena kuchoka kungapangitse mtengo kugwa.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Mtengo wa Bitcoin umachokera ku misika ya padziko lonse yotseguka. Mtengo wa masheya umadalira muyezo monga ma P/E ratio omwe akhoza kubisa masheya okwera mtengo kwambiri.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin imagulitsidwa 24/7 padziko lonse. Misika ya masheya imatsegulidwa pa nthawi za bizinesi pa masiku a sabata.",
	"bitcoin-vs-stocks::point_6_summary_1": "Mungathe kutenga",
	"bitcoin-vs-stocks::point_6_summary_2": "kusunga nokha",
	"bitcoin-vs-stocks::point_6_summary_3":
		"kwa Bitcoin ndi pulogalamu yosavuta \u2014 palibe broker yofunika. Masheya amakhala ndi ma broker, kukuyikani pachiwopsezo cha munthu wina ngati alephera.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Kuchuluka kokhazikika kwa Bitcoin kumayipangitsa kukhala chitetezo chodalirika cha kukwera kwa mitengo. Masheya ena amapitilira kukwera kwa mitengo, ena samatero \u2014 palibe chitsimikizo.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'Kusiyana pakati pa <span class="orange">Bitcoin</span> ndi <span class="asset">Visa</span>',
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin ndi netiweki yotseguka yomwe aliyense angathe kulowamo ndi kugwiritsa ntchito popanda chilolezo. Visa ndi dongosolo lotseka lolamulidwa ndi mabungwe a ndalama omwe akhoza kukana mwayi \u2014 makamaka kwa anthu omwe alibe akaunti kapena osasamalidwa bwino ndi mabanki.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Kugwiritsa ntchito Bitcoin kulibe ndalama za amalonda. Visa nthawi zambiri imalipira amalonda pafupifupi 3% pa kugwiritsa ntchito kulikonse \u2014 bizinesi yanu ikhoza kusunga ndalama polandira",
	"bitcoin-vs-visa::point_2_summary_2": "malipiro a Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " m'malo mwake.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Kugwiritsa ntchito kulikonse kwa Bitcoin kuli pa blockchain ya pagulu yomwe imatha kufufuzidwa. Visa imayendetsa dongosolo lotseka komanso lake komwe makasitomala sangathe kutsimikizira kalikonse okha.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin singatsekedwe ndi ulamuliro wapakatikati uliwonse. Visa ikhoza kutseka akaunti, kuletsa zochita, kapena kukana ntchito nthawi iliyonse.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin ndi kutsiriza komaliza \u2014 mungathe kugwiritsa ntchito zomwe muli nazo. Makhadi ongongoletsa amapanga ngongole ndi chiwongolero chomwe nthawi zambiri chimaposa 25% pachaka.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin imakulolani kutenga",
	"bitcoin-vs-visa::point_6_summary_2": "kusunga nokha",
	"bitcoin-vs-visa::point_6_summary_3":
		"popanda banki kapena wopanga malipiro ofunika. Makhadi ongongoletsa nthawi zonse amafuna apakati.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin imagwira ntchito 24/7 padziko lonse popanda nthawi za bizinesi. Visa ili ndi nthawi zogwirira ntchito, nthawi zokonza, ndi malire amalo omwe akhoza kuletsa zochita.",
});

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
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (ny): filled ${filled}, already-done ${skipped}`,
	);
}

main();
