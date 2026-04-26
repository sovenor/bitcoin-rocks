#!/usr/bin/env node
/**
 * Slovenian manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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
	"sl.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Nazaj na domačo stran",
	"404::404_message": "Bitcoin je odličen, ta zlomljena stran pa ni.",
	"404::404_not_found_short": "Ni najdeno",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Ponujamo brezplačne poslovne vire, ki lokalnim trgovcem olajšajo začetek sprejemanja Bitcoina. Naša stran o poslovanju z Bitcoinom razloži, zakaj je Bitcoin dober za posel, kako izbrati denarnico in plačilni terminal, ter ponuja brezplačne nalepke „Tu sprejemamo Bitcoin“.",
	"about::about_card_business_label": "Poslovni viri",
	"about::about_card_business_source": "Vir: bitcoin.rocks →",
	"about::about_card_business_title":
		"Vse, kar podjetje potrebuje, da začne sprejemati plačila v Bitcoinu",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Vir: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Prispevaj",
	"about::about_card_contribute_source": "Vir: GitHub →",
	"about::about_card_contribute_title":
		"Naučite se, kako prispevati k projektu bitcoin.rocks",
	"about::about_card_email_label": "E-pošta",
	"about::about_card_email_source": "Vir: e-pošta →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Letaki za tisk",
	"about::about_card_flyers_source": "Vir: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Prenesite in natisnite Bitcoin letake za svojo skupnost",
	"about::about_card_github_label": "Repozitorij",
	"about::about_card_github_source": "Vir: GitHub →",
	"about::about_card_github_title": "Oglejte si bitcoin.rocks na GitHubu",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Vir: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Brezplačne nalepke",
	"about::about_card_stickers_source": "Vir: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Pridobite brezplačne Bitcoin nalepke, dostavljene na vaš dom",
	"about::about_editorial_2":
		"Sklicujemo se na zaupanja vredne vire, kot so Federal Reserve (FRED), ameriški Bureau of Labor Statistics, FDIC, OZN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden in James Lavish. Verjamemo, da Bitcoin govori sam zase, če so dejstva predstavljena jasno.",
	"about::about_flyers_blurb":
		"Oblikujemo letake za tisk, ki jih lahko delite na srečanjih, izobesite na oglasnih deskah skupnosti ali jih puščate v poštnih nabiralnikih — preprost način, da vzbudite zanimanje in privabite ljudi na bitcoin.rocks, kjer izvedo več.",
	"about::about_header": "O bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Uporabnik",
	"about::about_mission_1b":
		"je bitcoin.rocks ustanovil leta 2022 s preprostim poslanstvom: pospešiti sprejemanje Bitcoina prek izobraževanja.",
	"about::about_open_source_2":
		"bitcoin.rocks je brezplačen odprtokoden projekt pod licenco MIT. Vsakdo lahko prispeva. Posebej pozdravljamo prevajalce, ki pomagajo, da je naša vsebina dostopna ljudem po vsem svetu.",
	"about::about_open_source_header": "Odprta koda",
	"about::about_page_description":
		"bitcoin.rocks je brezplačno odprtokodno izobraževalno spletišče o Bitcoinu, ustanovljeno leta 2022. Naše poslanstvo je pospešiti sprejemanje Bitcoina prek izobraževanja.",
	"about::about_stickers_blurb":
		"Brezplačne Bitcoin nalepke pošljemo do vaših vrat, da pomagate širiti zavest o Bitcoinu v svoji skupnosti. Vsak mesec stotine ljudi skenira QR kode na teh nalepkah, da izvedo več o Bitcoinu.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin ne pozna naskoka na banko",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin je sistem s polnimi rezervami. Svojega denarja ne polagate v banko. Vi sami ste svoja banka. Vašega denarja ne posojajo brez vaše vednosti, saj ste edini, ki imate dostop do njega.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Dokler hranite bitcoin v lastni denarnici — ne na borzi ali zavit v ETF — naskoki na banko niso mogoči.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Z Bitcoinom imate resnično kontrolo nad svojim denarjem.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Od 26. marca 2020 ameriškim bankam ni treba imeti nobenih obveznih rezerv.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Razmerje bančnih rezerv",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Vir: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistem s polnimi rezervami — zavarovanje vlog ni potrebno.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Kritje Bitcoina",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Vir: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Vsak bitcoin obstaja na blockchainu — nič se ne posoja.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Razmerje rezerv Bitcoina",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Vir: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Zavarovalni sklad 153,9 mrd. USD proti 10,82 bilijona USD zavarovanih vlog (december 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Kritje FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Vir: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Študija primera",
	"bank-runs::bank_runs_card_svb_source":
		"Vir: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Spoznajte, kako je prišlo do naskoka na Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Naslednji korak",
	"bank-runs::bank_runs_card_wallet_source": "Začnite tukaj →",
	"bank-runs::bank_runs_card_wallet_title":
		"Naučite se, kako pridobiti svojo Bitcoin denarnico",
	"bank-runs::bank_runs_fdic_heading":
		"Zavarovanje FDIC pokriva približno 1 % vlog",
	"bank-runs::bank_runs_fdic_p1":
		"Zavarovanje FDIC ščiti vloge do 250.000 USD na vlagatelja. A zavarovalni sklad je drobcen v primerjavi s skupnimi vlogami, ki naj bi jih ščitil.",
	"bank-runs::bank_runs_fdic_p2_a":
		"V primeru obsežnega bančnega zloma bi vlada verjetno natisnila denar, da bi pokrila razliko — kar bi povzročilo več",
	"bank-runs::bank_runs_fdic_p2_link": "inflacije.",
	"bank-runs::bank_runs_header":
		"Bitcoin ne pozna naskoka na banko, vaša banka pa.",
	"bank-runs::bank_runs_page_description":
		"Banke posojajo vaše vloge v okviru bančništva z delnimi rezervami. Če preveč ljudi naenkrat hoče dvigniti, banke lahko padejo. Bitcoin je sistem s polnimi rezervami — naskoki na banko niso mogoči.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: resničen primer",
	"bank-runs::bank_runs_svb_p1_a":
		"Marca 2023 je Silicon Valley Bank padla, potem ko je vloge strank vlagala v dolgoročne",
	"bank-runs::bank_runs_svb_p1_b":
		"Ko so te obveznice izgubile vrednost, SVB ni mogla pokriti dvigov. Banka je postala plačilno nesposobna.",
	"bank-runs::bank_runs_svb_p1_link": "državne obveznice.",
	"bank-runs::bank_runs_svb_p2":
		"Tisoči podjetij niso mogli plačati svojih zaposlenih. FDIC je posredovala — a izpostavila se je večja tema: ali je vaš denar zares varen?",
	"bank-runs::bank_runs_what_p1":
		"Banke vaših vlog ne hranijo v trezorju. Vaš denar posojajo in vlagajo — temu rečemo bančništvo z delnimi rezervami.",
	"bank-runs::bank_runs_what_p2":
		"Če preveč ljudi poskuša naenkrat dvigniti, banka nima dovolj gotovine, da bi plačala vsem. To je naskok na banko — in lahko povzroči popoln zlom bank.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">bankami</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin lahko uporablja kdor koli s povezavo na internet — je ",
	"bitcoin-vs-banks::point_1_summary_2": "brez dovoljenja.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banke lahko zavrnejo, zamrznejo ali zaprejo račune na podlagi svojih pravil ali vladnih predpisov.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Omrežje Bitcoin teče 24/7/365 brez vzdrževalnih oken in praznikov. Banke imajo omejeni delovni čas, vikende zaprto in izpade.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Vsaka transakcija Bitcoina je na javnem blockchainu, ki ga lahko kdor koli preveri. Banke vodijo zasebne knjige, ki jih stranke ne morejo neodvisno preveriti.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Pri Bitcoinu sami hranite svoje zasebne ključe — oglejte si naš preprost vodnik po ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin denarnicah",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banke hranijo vaš denar in ga lahko kadar koli zamrznejo, omejijo ali blokirajo.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Provizije pri Bitcoinu so pregledne in predvidljive. Banke postopoma kopičijo skrite provizije za račune, prekoračitve, prenose in bankomate.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin vam dovoli porabiti samo to, kar dejansko imate. Banke dovolijo prekoračitve in vam za to obračunajo verižne kazenske provizije.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Ko so transakcije Bitcoina enkrat poslane, jih ni mogoče ustaviti ali povrniti. Banke lahko blokirajo, zamrznejo ali povrnejo transakcije na podlagi pravil ali vladnih ukazov.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">obveznicami</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obveznice so „brez tveganja“ samo nominalno — inflacija, premiki obrestnih mer in tveganje neplačila izjedajo realne donose.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin ima pregledno volatilnost, a brez skritega tveganja nasprotne stranke.",
	"bitcoin-vs-bonds::point_2_summary_1": "Ko",
	"bitcoin-vs-bonds::point_2_summary_2": "inflacija",
	"bitcoin-vs-bonds::point_2_summary_3":
		"prekaša donose obveznic, imetniki obveznic vsako leto izgubljajo realno kupno moč. Zgornje meje 21 milijonov bitcoinov ni mogoče razredčiti z inflacijo.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Trgi obveznic se lahko v krizah zamrznejo — Silicon Valley Bank je delno padla, ker je hranila obveznice, ki so izgubile vrednost. Poglejte, kako pride do",
	"bitcoin-vs-bonds::point_3_summary_2": "naskokov na banko",
	"bitcoin-vs-bonds::point_3_summary_3":
		" in zakaj se jim Bitcoin izogiba. Bitcoin se trguje 24/7 globalno brez likvidnostnih kriz.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Dražbe državnih obveznic lahko spodletijo, kadar ni dovolj kupcev — poglejte",
	"bitcoin-vs-bonds::point_4_summary_2": "slabo dražbo iz leta 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Cena Bitcoina se odkriva neprekinjeno na odprtih trgih, brez osrednje dražbe, ki bi lahko spodletela.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Donosi obveznic so fiksirani ob nakupu. Tudi če gospodarstvo zacveti ali se valuta zruši, bo vaš donos enak.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ima prostor za znatno rast, saj sprejemanje raste in povpraševanje trči ob fiksno ponudbo.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Večina obveznic je v lasti prek bank ali brokerjev, kar dodaja tveganje nasprotne stranke. Bitcoin lahko hranite v lastnem skrbništvu z",
	"bitcoin-vs-bonds::point_6_summary_2": "denarnico",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — s tem to tveganje povsem odpravite.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obveznice so popolnoma odvisne od tega, da vlade poplačajo svoje dolgove. Če vlada ne plača ali dolg razvrednoti z inflacijo, imetniki obveznic izgubijo.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin deluje neodvisno od katere koli vlade ali politične oblasti.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">gotovino</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin se prek interneta v nekaj minutah pošlje kamor koli na svetu. Gotovina zahteva fizično prisotnost ali zaupanja vredne kurirje — dvajset evrov ne morete poslati po e-pošti.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin deluje povsod enako. Gotovino omejujejo geografija, menjalni tečaji in lokalno sprejemanje.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Vlade lahko gotovino čez noč razveljavijo — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indija</a> je to storila leta 2016. Toda tudi brez demonetizacije gotovina izgublja vrednost zaradi",
	"bitcoin-vs-cash::point_3_summary_2": "inflacije.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoina ne more razveljaviti nobena vlada ali oblast.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Gotovino je mogoče ponarediti, včasih zelo prepričljivo. Bitcoin uporablja kriptografijo, ki ponarejanje matematično onemogoča.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nima nobene osrednje oblasti. Gotovino izdajajo vlade, ki lahko po želji tiskajo več, spreminjajo videz ali ukinjajo bankovce.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Gotovina je ranljiva za krajo, požar, izgubo in zaplembo. Bitcoin lahko varno hranite v ",
	"bitcoin-vs-cash::point_6_summary_2": "lastnem skrbništvu",
	"bitcoin-vs-cash::point_6_summary_3":
		" v telefonu ali na strojni napravi.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin je deljiv na 100 milijonov satoshijev, kar omogoča mikroplačila katere koli velikosti. Gotovina ima minimalne apoene — centa ne morete razdeliti.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">digitalnimi valutami centralnih bank (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nihče vam ne more preprečiti opravljanja transakcij z Bitcoinom. CBDC so zasnovane tako, da vladam in centralnim bankam omogočajo nadzor nad vsakim plačilom, kar omejuje vašo zasebnost in svobodo.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoinu nikoli ne poteče veljavnost in nima mesečnih provizij. CBDC se lahko programirajo tako, da potečejo, kar vas odvrača od dolgoročnega varčevanja.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ima trdno zgornjo mejo 21 milijonov BTC. CBDC nimajo nobene meje ponudbe in vladam omogočajo, da denarno maso poljubno povečujejo — kar povzroča",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflacijo.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Naslovi Bitcoina niso vezani na vašo pravo identiteto. CBDC so neposredno povezane z vladno osebno izkaznico, kar omogoča množični finančni nadzor in cenzuro.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Pravila Bitcoina preverja na deset tisoče neodvisnih vozlišč. CBDC so centralizirane v rokah vlad in centralnih bank, ki imajo popoln nadzor nad omrežjem.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Vsakdo lahko poganja vozlišče Bitcoin in preverja pravila omrežja. CBDC uporabnikom ne dovoljujejo poganjanja vozlišč — zaupati morate osrednji oblasti.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoina v lastnem skrbništvu nihče ne more zamrzniti. CBDC so zasnovane tako, da lahko vlade in centralne banke takoj zamrznejo račune.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin vam daje popolno kontrolo nad denarjem, če ga sami hranite v",
	"bitcoin-vs-cbdc::point_8_summary_2": "denarnici.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC zahtevajo zaupanje skrbnikom, kot so banke ali vlade, da hranijo vaš denar.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Denarna politika Bitcoina je vgrajena v kodo in je ni mogoče spreminjati. CBDC lahko politiki poljubno preprogramirajo, kar povzroča",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflacijo",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", ko se natisne preveč denarja.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin je najvarnejše računalniško omrežje, kar je bilo kdaj ustvarjeno, in nikoli ni bilo vlomljeno. CBDC se zanašajo na banke in vlade, ki so bile vlomljene neštetokrat.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">kriptom</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokol Bitcoina je v bistvu ostal enak od leta 2009 in ponuja predvidljiva pravila. Večina kriptoprojektov nenehno spreminja protokole, tokenomijo ali se cepi v nove različice.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin teče na desettisočih neodvisnih vozliščih po vsem svetu. Večino kriptoprojektov nadzorujejo fundacije, podjetja ali majhne razvojne ekipe, ki lahko izvajajo enostranske spremembe.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ima trdno zgornjo mejo 21 milijonov kovancev — najredkejše digitalno premoženje. Večina kriptoprojektov ima neomejeno ponudbo ali mehanizme za poljubno ustvarjanje novih žetonov, ki razredčijo imetnike.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ima en sam namen: peer-to-peer digitalni denar. Razume in uporablja ga lahko vsakdo. Večina kripta vključuje zapletene pametne pogodbe ali DeFi, ki za varno uporabo zahtevajo tehnično znanje.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoina deluje brez uspešnega napada na glavno omrežje že več kot 15 let. Večina kriptoprojektov uporablja eksperimentalni konsenz, ki ni bil ostro preizkušen.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin je digitalni denar — hranilec vrednosti in plačilno sredstvo. Večina kripto žetonov so špekulativni utility ali governance žetoni z nejasno realno vrednostjo.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin pod napadom postaja močnejši in je preživel vsako krizo, prepoved in kritiko. Večina kriptoprojektov pade pod regulatornim, tehničnim ali tržnim pritiskom.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nima izvršnega direktorja, podjetja ali ene same točke odpovedi. Večina kriptoprojektov je odvisna od VC vlagateljev, posameznih voditeljev ali preživetja enega podjetja.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">likovno umetnostjo</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Vsak bitcoin je enak in zamenljiv. Vsako umetniško delo je edinstveno — različen nastanek, zgodovina, stanje in provenienca neposredno primerjanje izjemno otežijo.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin se trguje 24/7 na globalnem trgu, dostopnem komur koli. Likovna umetnost zahteva specializirane dražbene hiše, zasebne trgovce ali galerije, prodaja pa lahko traja mesece.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Nakup ali prodaja Bitcoina stane manj kot 1 % v provizijah, pogosto veliko manj. Pri prodaji umetnin se nakopiči 30 – 40 % v premijah kupca, provizijah, zavarovanjih, prevozih in stroških overjanja pristnosti.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin je deljiv na 100 milijonov satoshijev, zato je idealen za transakcije katere koli velikosti. Ne morete imeti dela slike ali kota kipa brez tveganja nasprotne stranke.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Lastništvo in pristnost Bitcoina lahko vsakdo kriptografsko preveri na blockchainu. Preverjanje pristnosti umetnin je drago, počasno in ga redno zmedejo ponarejevalci — kar čez noč uniči vrednost dela.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Pravilno varnostno kopiran Bitcoin preživi poplave, požare, potrese in tatvino. Likovna umetnost je ranljiva za vse oblike fizičnega uničenja, zavarovanje pa redko pokrije vse.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Vsakdo s povezavo na internet in nekaj denarja lahko kupi Bitcoin. Vlaganje v likovno umetnost je v praksi omejeno na premožne zbiralce z dostopom do dražb in specializirano znanje.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">zlatom</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin se da takoj poslati po internetu z nizkimi provizijami. Zlato je za prenos lastništva treba fizično poslati.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin je digitalno-rojeno premoženje, ki ga lahko prenašate po internetu. Spletno zlato je digitalno potrdilo o dolgu — lastništvo imate samo skrbnikove obljube, ne kovine same.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin ima trdno zgornjo mejo 21 milijonov BTC. Ponudba zlata raste približno <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % na leto</a>, kar krči vaš delež — manj kot pri fiat",
	"bitcoin-vs-gold::point_3_summary_2": "inflaciji",
	"bitcoin-vs-gold::point_3_summary_3":
		"— a vseeno inflacija.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Ko cene zlata rastejo, se naruda več zlata, kar ceno spet potlači. Ponudba Bitcoina je neelastična — ne glede na to, kako visoko gre cena, jih bo vedno le 21 milijonov.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Omrežje Bitcoin preverja na desettisoče neodvisnih vozlišč. Večina fizičnega zlata leži v nekaj velikih trezorjih.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Vsakdo lahko preveri pravi Bitcoin tako, da poganja polno vozlišče — to je le aplikacija. Preverjanje fizičnega zlata zahteva njegovo taljenje; znotraj bi lahko bil volfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin je deljiv na 100 milijonov satoshijev, zato je idealen za nakupe katere koli velikosti. Zlata ni mogoče zlahka deliti za manjše transakcije.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">nepremičninami</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se takoj prenese kamor koli na svetu. Nepremičnine so vezane na eno lokacijo in izpostavljene lokalnim ekonomskim, političnim in naravnim tveganjem.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin je deljiv na 100 milijonov satoshijev. Nepremičnine ni mogoče delno prodati — ne morete prodati samo kuhinje ali kupiti polovico spalnice.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin deluje v decentraliziranem omrežju, ki ga nobena vlada ne more nadzorovati. Nepremičnine so močno regulirane — prostorsko načrtovanje, regulacije najemnin, razlastitve in zaplembe veljajo za vse.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ne zahteva vzdrževanja. Nepremičnine zahtevajo popravila, prenove, zavarovanja, upravljanje in obvladovanje težav z najemniki.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin ni predmet stalnih davkov — davek na kapitalske dobičke plačate šele ob prodaji. Pri nepremičninah plačujete letni davek na nepremičnine ne glede na dohodek.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Pravilno varnostno kopiran Bitcoin preživi požar, poplavo in potres. Nepremičnine so ranljive za vsako katastrofo, zavarovanje pa redko pokrije vse.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Vsak bitcoin je enak in zamenljiv. Vsaka nepremičnina je edinstvena, kar otežuje vrednotenje in primerjavo.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin se trguje globalno 24/7 za vsakogar z dostopom do interneta. Prodaja nepremičnin je omejena na lokalne kupce, zaključek pa lahko traja mesece papirnate dokumentacije.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin omogoča neposredno individualno lastništvo za vsakogar. Nakup nepremičnin za naložbo onkraj primarnega bivališča viša cene stanovanj, znižuje dostopnost in podpihuje stanovanjsko krizo.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">delnicami</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin je neposredno premoženje, ki ga imate v celoti v lasti. Delnice so deleži v podjetju — njihova vrednost je odvisna od vodstva, uspešnosti in odločitev, ki jih ne nadzorujete.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ima trdno zgornjo mejo 21 milijonov BTC. Podjetja lahko kadar koli izdajo nove delnice in s tem razredčijo obstoječe delničarje — podobno kot fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflacija",
	"bitcoin-vs-stocks::point_2_summary_3":
		" razredči gotovino. Pri Bitcoinu se vaš delež nikoli ne zmanjša.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nima izvršnega direktorja in nobene posamezne točke odpovedi. Delnice so močno odvisne od vodstva — ena slaba odločitev ali odhod ključne osebe lahko ceno strmoglavi.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Cena Bitcoina prihaja z odprtih globalnih trgov. Vrednotenje delnic se opira na metrike, kot je razmerje P/E, kar lahko prikrije precenjene delnice.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin se trguje 24/7 po vsem svetu. Delniške borze so odprte le ob delavnikih v poslovnih urah.",
	"bitcoin-vs-stocks::point_6_summary_1": "Pri Bitcoinu lahko preidete v",
	"bitcoin-vs-stocks::point_6_summary_2": "lastno skrbništvo",
	"bitcoin-vs-stocks::point_6_summary_3":
		" s preprosto aplikacijo — broker ni potreben. Delnice ležijo pri brokerskih hišah, kar vas izpostavlja tveganju nasprotne stranke, če propadejo.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Fiksna ponudba Bitcoina ga dela za zanesljivo zaščito pred inflacijo. Nekatere delnice premagajo inflacijo, druge ne — nobenega jamstva ni.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Razlika med <span class=\"orange\">Bitcoinom</span> in <span class=\"asset\">Viso</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin je odprto omrežje, ki se mu lahko vsakdo pridruži brez dovoljenja. Visa je zaprt sistem, ki ga nadzorujejo finančne ustanove in lahko zavrnejo dostop — še posebej ljudem brez bančnega računa ali z omejenim dostopom do bank.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transakcije Bitcoina nimajo nobenih trgovskih provizij. Visa trgovcem običajno zaračuna okoli 3 % na transakcijo — vaše podjetje lahko prihrani denar s sprejemanjem",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin plačil",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Vsaka transakcija Bitcoina je na javnem, preverljivem blockchainu. Visa upravlja zaprt, lastniški sistem, kjer stranke ne morejo ničesar neodvisno preveriti.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoina ne more zamrzniti nobena osrednja oblast. Visa lahko kadar koli zamrzne račune, blokira transakcije ali zavrne storitev.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin je končna poravnava — porabite samo to, kar imate. Kreditne kartice ustvarjajo dolg z obrestmi, pogosto nad 25 % letno.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin vam omogoča, da preidete v",
	"bitcoin-vs-visa::point_6_summary_2": "lastno skrbništvo",
	"bitcoin-vs-visa::point_6_summary_3":
		" brez potrebe po banki ali plačilnem procesorju. Kreditne kartice vedno zahtevajo posrednike.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin deluje 24/7 globalno brez poslovnih ur. Visa ima delovni čas, vzdrževalna okna in geografske omejitve, ki lahko blokirajo transakcije.",
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
		`translate-rest-part1 (sl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
