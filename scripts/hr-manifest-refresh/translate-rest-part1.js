#!/usr/bin/env node
/**
 * Croatian (hr) manifest refresh — part 1 of non-inflation namespaces.
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
	"hr.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Natrag na početnu",
	"404::404_message":
		"Bitcoin je sjajan, ali ova stranica je pokvarena.",
	"404::404_not_found_short": "Nije pronađeno",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Malim poduzećima dajemo besplatne poslovne alate kako bismo im olakšali prihvaćanje Bitcoin plaćanja. Naša stranica „Bitcoin za poduzeća“ objašnjava zašto je Bitcoin dobar za posao, kako odabrati novčanik i procesor plaćanja te nudi besplatne naljepnice „Bitcoin Accepted Here“.",
	"about::about_card_business_label": "Poslovni alati",
	"about::about_card_business_source": "Izvor: bitcoin.rocks ←",
	"about::about_card_business_title":
		"Sve što poduzeću treba za prihvaćanje Bitcoin plaćanja",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Izvor: GitHub ←",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Doprinesite",
	"about::about_card_contribute_source": "Izvor: GitHub ←",
	"about::about_card_contribute_title":
		"Naučite kako doprinijeti bitcoin.rocksu",
	"about::about_card_email_label": "E-pošta",
	"about::about_card_email_source": "Izvor: e-pošta ←",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Letci za ispis",
	"about::about_card_flyers_source": "Izvor: bitcoin.rocks ←",
	"about::about_card_flyers_title":
		"Preuzmite i ispišite Bitcoin letke za svoju zajednicu",
	"about::about_card_github_label": "Repozitorij",
	"about::about_card_github_source": "Izvor: GitHub ←",
	"about::about_card_github_title": "Pogledajte bitcoin.rocks na GitHubu",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Izvor: Nostr ←",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Besplatne naljepnice",
	"about::about_card_stickers_source": "Izvor: bitcoin.rocks ←",
	"about::about_card_stickers_title":
		"Naručite besplatne Bitcoin naljepnice ravno na svoja vrata",
	"about::about_editorial_2":
		"Koristimo službene izvore: Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Ujedinjeni narodi, World Gold Council, Forbes, MIT Technology Review, Lyn Alden i James Lavish. Vjerujemo da kad se činjenice predstave jasno, Bitcoin govori sam za sebe.",
	"about::about_flyers_blurb":
		"Dizajniramo letke za ispis koje možete dijeliti na okupljanjima, lijepiti na oglasne ploče ili ubacivati u poštanske sandučiće — jednostavan način da pobudite zanimanje i pošaljete ljude da saznaju više na bitcoin.rocks.",
	"about::about_header": "O projektu bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "je pokrenuo bitcoin.rocks",
	"about::about_mission_1b":
		"korisnik je započeo 2022. godine s jednostavnom misijom: ubrzati prihvaćanje Bitcoina kroz edukaciju.",
	"about::about_open_source_2":
		"bitcoin.rocks je besplatan, otvoreni projekt pod MIT licencom. Svatko je dobrodošao doprinijeti. Posebno tražimo prevoditelje koji mogu učiniti naš sadržaj dostupnim ljudima diljem svijeta.",
	"about::about_open_source_header": "Otvoreni kod",
	"about::about_page_description":
		"bitcoin.rocks je besplatna, otvorena edukativna web-stranica o Bitcoinu pokrenuta 2022. godine. Naša je misija ubrzati prihvaćanje Bitcoina kroz edukaciju.",
	"about::about_stickers_blurb":
		"Šaljemo besplatne Bitcoin naljepnice ravno na vaša vrata kako bismo pomogli u širenju svijesti o Bitcoinu u vašoj zajednici. Stotine ljudi svaki mjesec skeniraju QR kodove na tim naljepnicama da bi saznali više o Bitcoinu.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin ne može imati bankovne navale",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin je sustav s punom rezervom. Svoj novac ne držite u banci. Vi ste sami sebi banka. Vaš novac ne posuđuje se nikome bez vašeg znanja; samo vi imate pristup.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Sve dok držite svoj Bitcoin u vlastitom novčaniku — a ne na burzi ili u ETF-u — bankovna navala je nemoguća.",
	"bank-runs::bank_runs_bitcoin_p3":
		"S Bitcoinom imate stvarnu kontrolu nad svojim novcem.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Od 26. ožujka 2020. američke banke nisu obvezne držati nikakve obvezne rezerve.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Omjer bankovne rezerve",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Izvor: Federal Reserve ←",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sustav s punom rezervom — osiguranje depozita nije potrebno.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Pokriće Bitcoina",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Izvor: Bitcoin whitepaper ←",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Svaki Bitcoin nalazi se na blockchainu — ništa se ne posuđuje.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Omjer Bitcoin rezerve",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Izvor: Bitcoin whitepaper ←",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fond osiguranja od 153,9 milijardi dolara naspram 10,82 bilijuna dolara osiguranih depozita (prosinac 2025.).",
	"bank-runs::bank_runs_card_fdic_label": "Pokriće FDIC-a",
	"bank-runs::bank_runs_card_fdic_source":
		"Izvor: FDIC Statistics at a Glance ←",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Studija slučaja",
	"bank-runs::bank_runs_card_svb_source":
		"Izvor: University of Washington School of Law ←",
	"bank-runs::bank_runs_card_svb_title":
		"Pogledajte kako se dogodila navala na Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Sljedeći korak",
	"bank-runs::bank_runs_card_wallet_source": "Počnite ovdje ←",
	"bank-runs::bank_runs_card_wallet_title":
		"Naučite kako nabaviti svoj Bitcoin novčanik",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC osiguranje pokriva oko 1 % depozita",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC osiguranje štiti depozite do 250.000 dolara po deponentu. Ali fond osiguranja vrlo je malen u usporedbi s ukupnim depozitima koje treba štititi.",
	"bank-runs::bank_runs_fdic_p2_a":
		"U slučaju masovne propasti banaka, vlada bi vjerojatno tiskala više novca da popuni razliku — što rezultira",
	"bank-runs::bank_runs_fdic_p2_link": "inflacijom.",
	"bank-runs::bank_runs_header":
		"Bitcoin ne može imati bankovne navale, ali vaša banka može.",
	"bank-runs::bank_runs_page_description":
		"Banke posuđuju vaše depozite kroz bankarstvo s djelomičnom rezervom. Ako mnogi ljudi pokušaju istodobno podići svoj novac, banke mogu propasti. Bitcoin je sustav s punom rezervom — bankovna navala je nemoguća.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: stvaran primjer",
	"bank-runs::bank_runs_svb_p1_a":
		"U ožujku 2023. propala je Silicon Valley Bank nakon što je",
	"bank-runs::bank_runs_svb_p1_b":
		"Kad su te obveznice izgubile vrijednost, SVB nije mogao pokriti povlačenja. Banka je postala insolventna.",
	"bank-runs::bank_runs_svb_p1_link":
		"depozite klijenata uložila u dugoročne državne obveznice.",
	"bank-runs::bank_runs_svb_p2":
		"Tisuće poduzeća nije moglo isplatiti zaposlenike. FDIC je intervenirao — ali postavilo se veliko pitanje: je li vaš novac doista siguran?",
	"bank-runs::bank_runs_what_p1":
		"Banke ne čuvaju vaše depozite u trezoru. Posuđuju i ulažu vaš novac — to se zove bankarstvo s djelomičnom rezervom.",
	"bank-runs::bank_runs_what_p2":
		"Kad mnogi ljudi pokušaju istodobno podići svoj novac, banka nema dovoljno gotovine za sve. To je bankovna navala — i može dovesti do potpunog kolapsa banke.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">banaka</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin može koristiti svatko s internetskom vezom — ",
	"bitcoin-vs-banks::point_1_summary_2": "ne treba se tražiti dozvola.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banke mogu odbiti otvaranje računa, zamrznuti ih ili zatvoriti na temelju interne politike ili državnih naloga.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin mreža radi 24/7/365 bez prozora za održavanje i praznika. Banke imaju ograničeno radno vrijeme, zatvaraju se vikendom i imaju operativne kvarove.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Svaka Bitcoin transakcija nalazi se na javnom blockchainu koji svatko može provjeriti. Banke imaju privatne knjige koje klijenti ne mogu samostalno revidirati.",
	"bitcoin-vs-banks::point_4_summary_1":
		"S Bitcoinom sami držite svoje privatne ključeve — pogledajte naš ",
	"bitcoin-vs-banks::point_4_summary_2": "jednostavan vodič za Bitcoin novčanike",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banke drže vaš novac i mogu ga u svakom trenutku zamrznuti, ograničiti ili zaključati.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Naknade za Bitcoin transakcije transparentne su i opcionalne. Banke nagomilavaju skrivene naknade za održavanje računa, prekoračenja, prijenose i bankomate.",
	"bitcoin-vs-banks::point_6_summary_1":
		"S Bitcoinom možete potrošiti samo ono što stvarno imate. Banke odobravaju prekoračenja i onda vam zaračunavaju naknade.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Bitcoin transakcije ne mogu se zaustaviti ni poništiti nakon slanja. Banke mogu blokirati, zamrznuti ili poništiti transakcije na temelju interne politike ili državnih naloga.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">obveznica</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obveznice su „bezrizične“ samo na papiru — inflacija, promjene kamatnih stopa i rizik neispunjenja obveza nagrizaju stvarne prinose.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Volatilnost Bitcoina je transparentna, ali nema skrivenog rizika druge ugovorne strane.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kad je ",
	"bitcoin-vs-bonds::point_2_summary_2": "inflacija",
	"bitcoin-vs-bonds::point_2_summary_3":
		" viša od prinosa obveznica, vlasnici obveznica svake godine gube stvarnu kupovnu moć. Ograničenje Bitcoina od 21 milijuna ne može se smanjiti inflacijom.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Tržišta obveznica mogu se zamrznuti u krizi — Silicon Valley Bank propala je djelomično jer je držao obveznice koje su izgubile vrijednost. Pogledajte kako se događaju ",
	"bitcoin-vs-bonds::point_3_summary_2": "bankovne navale",
	"bitcoin-vs-bonds::point_3_summary_3":
		" i zašto Bitcoin izbjegava njihovu sudbinu. Bitcoin radi 24/7 globalno, bez likvidnosnih kriza.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Aukcije državnih obveznica mogu propasti ako nema dovoljno kupaca — pogledajte ",
	"bitcoin-vs-bonds::point_4_summary_2": "slabu aukciju iz 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Cijena Bitcoina kontinuirano se otkriva na globalnim otvorenim tržištima, bez središnjih aukcija koje mogu propasti.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Prinos obveznica utvrđen je u trenutku kupnje. Bilo da gospodarstvo raste ili valuta propada, vaš povrat ostaje isti.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ima znatan potencijal rasta jer s povećanjem prihvaćanja potražnja nailazi na fiksnu ponudu.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Većina obveznica drži se preko banaka ili brokera, što dodaje rizik druge ugovorne strane. Bitcoin se može držati u ",
	"bitcoin-vs-bonds::point_6_summary_2": "samostalnoj pohrani",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — što potpuno uklanja taj rizik.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obveznice u potpunosti ovise o tome hoće li vlade vraćati svoja dugovanja. Ako vlada bankrotira ili dug raspusti inflacijom, vlasnici obveznica gube.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin radi neovisno o bilo kojoj vladi ili političkoj sili.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">gotovine</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin se kreće globalno preko interneta u nekoliko minuta. Gotovini je potrebna fizička prisutnost ili pouzdani kuriri — novčanice ne možete poslati e-poštom.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin radi jednako svugdje. Gotovinu ograničavaju geografija, tečajevi i lokalna prihvaćenost.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Vlade mogu preko noći demonetizirati gotovinu — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indija</a> je to učinila 2016. Ali i bez demonetizacije, gotovina gubi vrijednost zbog",
	"bitcoin-vs-cash::point_3_summary_2": "inflacije",
	"bitcoin-vs-cash::point_3_summary_3":
		". Nijedna vlada ili sila ne može demonetizirati Bitcoin.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Gotovina se može krivotvoriti, ponekad i vrlo precizno. Bitcoin koristi kriptografiju i krivotvorenje čini matematički nemogućim.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nema središnje tijelo. Gotovinu izdaju vlade koje mogu tiskati još, mijenjati dizajn ili povlačiti novčanice kad god žele.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Gotovina je ranjiva na krađu, požar, gubitak i zapljenu. Bitcoin se može ",
	"bitcoin-vs-cash::point_6_summary_2": "sigurno držati u samostalnoj pohrani",
	"bitcoin-vs-cash::point_6_summary_3":
		" na vašem telefonu ili hardverskom novčaniku.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin se može podijeliti na 100 milijuna satoshija, što omogućuje mikroplaćanja bilo koje veličine. Gotovina ima minimalnu valutu — novac ne možete prepoloviti.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">digitalnih valuta središnjih banaka (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nitko vas ne može spriječiti da napravite Bitcoin transakciju. CBDC-ovi su dizajnirani tako da vlade i središnje banke kontroliraju svako plaćanje, ograničavajući vašu privatnost i slobodu.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin nikad ne istječe i nema mjesečnih troškova. CBDC-ovi mogu biti programirani da isteknu, što sprečava štednju za budućnost.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ima fiksno ograničenje od 21 milijuna BTC-a. CBDC-ovi nemaju ograničenje ponude i omogućuju vladama da povećavaju ponudu novca po želji — što rezultira",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflacijom.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin adrese nisu povezane s vašim stvarnim identitetom. CBDC-ovi su izravno povezani s pojedincima koje je vlada identificirala, što omogućuje masovni nadzor i financijsku cenzuru.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Pravilima Bitcoina upravlja tisuće neovisnih čvorova. CBDC-ovi su centralizirani u vladama i središnjim bankama, koje imaju potpunu kontrolu nad mrežom.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Svatko može pokrenuti Bitcoin čvor i provjeriti pravila mreže. CBDC-ovi ne dopuštaju korisnicima da pokreću čvorove — morate vjerovati središnjem tijelu.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin koji se drži u samostalnoj pohrani ne može se zamrznuti. CBDC-ovi su dizajnirani tako da vlade i središnje banke trenutačno mogu zamrznuti račune.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin vam daje punu kontrolu nad vašim novcem ako ga držite u svom ",
	"bitcoin-vs-cbdc::point_8_summary_2": "novčaniku",
	"bitcoin-vs-cbdc::point_8_summary_3":
		". CBDC-ovi zahtijevaju da vjerujete skrbnicima poput banaka ili vlada koje za vas drže novac.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Monetarna politika Bitcoina ugrađena je u kod i ne može se mijenjati. CBDC-ovi se mogu reprogramirati prema hirovima političara, što rezultira",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflacijom",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" ako se tiska previše novca.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin je najsigurnija računalna mreža ikada izgrađena i nikad nije hakirana. CBDC-ovi ovise o bankama i vladama koje su nebrojeno puta hakirane.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">kriptovaluta</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin protokol jedva se promijenio od 2009. i pruža predvidljiva pravila. Većina kripto projekata redovito mijenja protokol, tokenomiku ili forka u nove verzije.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin radi na tisućama neovisnih čvorova diljem svijeta. Većinu kripto projekata kontroliraju zaklade, tvrtke ili mali timovi razvojnih programera koji mogu jednostrano provoditi promjene.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ima fiksno ograničenje od 21 milijuna — najrjeđa digitalna imovina. Većina kripto projekata ima neograničenu ponudu ili mehanizme za stvaranje novih tokena prema volji, što razrjeđuje vlasnike.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ima jednu svrhu: peer-to-peer digitalni novac. Svi ga razumiju, svi ga mogu koristiti. Većina kripto projekata uključuje složene pametne ugovore ili DeFi koji zahtijevaju stručno tehničko znanje za sigurno korištenje.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoinov sustav dokaza rada radi uspješno već 15 godina bez ijednog uspješnog napada na glavni lanac. Većina kripto projekata koristi eksperimentalne metode konsenzusa koje nisu bile rigorozno testirane.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin je digitalni novac — pohrana vrijednosti i sredstvo razmjene. Većina kripto tokena su špekulativni, uslužni ili upravljački tokeni bez jasne stvarne vrijednosti.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin je čvrsto stajao pred napadima i preživio svaku krizu, zabranu i kritiku. Većina kripto projekata propada pod regulatornim, tehničkim ili tržišnim pritiskom.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nema CEO-a, tvrtku ni jednu točku kvara. Većina kripto projekata ovisi o investitorima rizičnog kapitala, identificiranim vodećim timovima ili o postojanju jedne tvrtke.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">likovnih umjetnina</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Svaki Bitcoin je jednak i zamjenjiv. Svako umjetničko djelo je jedinstveno — porijeklo, povijest, stanje i autentičnost variraju, što izravnu usporedbu čini vrlo teškom.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin se prodaje na globalnom tržištu 24/7 i dostupan je svima. Umjetnost zahtijeva aukcijske kuće, privatne trgovce ili specijalizirane galerije, a prodaja može trajati mjesecima.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Kupnja ili prodaja Bitcoina košta manje od 1 % naknada, često znatno manje. Prodaja umjetnina nagomilava 30 – 40 % naknada za kupce kroz aukcijske provizije, osiguranje, prijevoz i troškove autentifikacije.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin se može podijeliti na 100 milijuna satoshija i izvrstan je za transakcije bilo koje veličine. Ne možete posjedovati dio slike ili ugao skulpture bez rizika druge ugovorne strane.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Vlasništvo i autentičnost Bitcoina svatko može kriptografski provjeriti na blockchainu. Provjera autentičnosti umjetnine skupa je i spora, a krivotvoritelji redovito varaju tržište — vrijednost umjetnine može preko noći nestati.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Dobro pohranjen Bitcoin preživljava poplave, požare, potrese i krađu. Umjetnost je ranjiva na svaku fizičku katastrofu, a osiguranje rijetko sve pokriva.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Bitcoin može kupiti svatko s internetskom vezom i nešto novca. Ulaganje u umjetnost u praksi je ograničeno na bogate kolekcionare s pristupom aukcijama i stručnim znanjem.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">zlata</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin se može poslati trenutačno preko interneta uz niske naknade. Zlato se mora fizički prevoziti da bi promijenilo vlasnika.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin je inherentno digitalna imovina koju možete prenositi preko interneta. Zlato na internetu samo je digitalna obveznica — imate samo skrbnikovo obećanje, ne i metal.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin ima fiksno ograničenje od 21 milijuna BTC-a. Ponuda zlata <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">raste oko 1,6 % godišnje</a> i smanjuje vaš dio kolača — manje od fiat",
	"bitcoin-vs-gold::point_3_summary_2": "inflacije",
	"bitcoin-vs-gold::point_3_summary_3":
		", ali još uvijek inflacija.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kad cijena zlata raste, više se zlata vadi iz rude i cijena ponovno pada. Ponuda Bitcoina je neelastična — bez obzira koliko cijena raste, uvijek će ih biti samo 21 milijun.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin mrežu kontrolira tisuće neovisnih čvorova. Većina fizičkog zlata pohranjena je u nekoliko velikih trezora.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Svatko može provjeriti autentičnost Bitcoina pokretanjem punog čvora — to je samo aplikacija. Provjera fizičkog zlata zahtijeva njegovo topljenje; unutra može biti volfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin se može podijeliti na 100 milijuna satoshija i izvrstan je za kupnje bilo koje veličine. Zlato se ne može lako podijeliti za male transakcije.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">nekretnina</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se kreće trenutačno globalno. Nekretnine su vezane za određenu lokaciju i izložene gospodarskim, političkim i okolišnim rizicima.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin se može podijeliti na 100 milijuna satoshija. Nekretnine se ne mogu prodati djelomično — ne možete prodati kuhinju ili kupiti pola spavaće sobe.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin radi na decentraliziranoj mreži koju nijedna vlada ne može kontrolirati. Nekretnine su strogo regulirane — primjenjuju se zoniranje, kontrola najamnine, prinudno otkupljivanje i zapljena.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ne treba održavanje. Nekretnine zahtijevaju popravke, obnove, osiguranje, upravljanje nekretninom i rješavanje problema sa stanarima.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Na Bitcoin nema povratnih poreza — porez na kapitalnu dobit plaća se samo pri prodaji. Nekretnine zahtijevaju godišnji porez na imovinu, bez obzira na prihod.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Dobro pohranjen Bitcoin preživljava požar, poplave i potrese. Nekretnine su ranjive na svaku katastrofu, a osiguranje rijetko sve pokriva.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Svaki Bitcoin je jednak i zamjenjiv. Svaka nekretnina je jedinstvena, što otežava određivanje cijene i usporedbu.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin se prodaje 24/7 globalno svakoj osobi s internetskom vezom. Prodaja nekretnina ograničena je na lokalne kupce, a zatvaranje posla može trajati mjesecima.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin svakoj osobi daje izravno vlasništvo. Kupnja nekretnina kao investicija umjesto kao primarni dom podiže cijene stanovanja, smanjuje dostupnost i stvara stambenu krizu.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">dionica</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin je izravna imovina koju u potpunosti posjedujete. Dionica je dio tvrtke — njezina vrijednost ovisi o upravi, profitabilnosti i odlukama koje ne kontrolirate.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ima fiksno ograničenje od 21 milijuna BTC-a. Tvrtke u svakom trenutku mogu izdati nove dionice i razrijediti postojeće vlasnike — kao što fiat valuta razrjeđuje gotovinu kroz",
	"bitcoin-vs-stocks::point_2_summary_2": "inflaciju",
	"bitcoin-vs-stocks::point_2_summary_3":
		". Uz Bitcoin, vaš se dio nikad ne smanjuje.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nema CEO-a ili jednu točku kvara. Dionice jako ovise o upravi — jedna pogrešna odluka ili odlazak ključne osobe može srušiti cijenu.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Cijena Bitcoina dolazi s globalnih otvorenih tržišta. Vrednovanje dionica oslanja se na pokazatelje poput P/E koji mogu prikriti precijenjene dionice.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin se prodaje 24/7 globalno. Burze dionica otvorene su samo radnim danima i u određenim satima.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Uz Bitcoin možete prijeći u ",
	"bitcoin-vs-stocks::point_6_summary_2": "samostalnu pohranu",
	"bitcoin-vs-stocks::point_6_summary_3":
		" jednostavnom aplikacijom — bez posrednika. Dionice drže brokeri i izloženi ste riziku druge ugovorne strane ako oni propadnu.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Fiksna ponuda Bitcoina pouzdano štiti od inflacije. Neke dionice nadmaše inflaciju, druge ne — nema jamstva.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Razlika između <span class=\"orange\">Bitcoina</span> i <span class=\"asset\">Vise</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin je otvorena mreža kojoj se svatko može pridružiti bez dozvole. Visa je zatvoreni sustav koji kontroliraju financijske institucije koje mogu uskratiti pristup — posebno onima koji nemaju bankovni račun ili imaju ograničen pristup bankama.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin transakcije nemaju trgovačke naknade. Visa naplaćuje trgovcima oko 3 % po transakciji — vaše poduzeće može uštedjeti novac",
	"bitcoin-vs-visa::point_2_summary_2": "prihvaćanjem Bitcoin plaćanja",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Svaka Bitcoin transakcija nalazi se na javnom blockchainu i može se provjeriti. Visa upravlja zatvorenim, ekskluzivnim sustavom koji klijenti ne mogu samostalno revidirati.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Nijedno središnje tijelo ne može zamrznuti Bitcoin. Visa može u svakom trenutku zamrznuti račune, blokirati transakcije ili odbiti uslugu.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin je konačna namira — trošite samo ono što imate. Kreditne kartice stvaraju dug, s kamatama većim od 25 % godišnje.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin vam omogućuje ",
	"bitcoin-vs-visa::point_6_summary_2": "samostalnu pohranu",
	"bitcoin-vs-visa::point_6_summary_3":
		" bez banaka ili procesora plaćanja. Kreditne kartice uvijek zahtijevaju posrednike.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin radi 24/7 globalno bez radnog vremena. Visa ima radno vrijeme, prozore za održavanje i geografske granice koje mogu blokirati transakcije.",
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
		`translate-rest-part1 (hr): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
