#!/usr/bin/env node
/**
 * Slovak manifest refresh — part 1 of non-inflation namespaces.
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
	"sk.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Späť na hlavnú stránku",
	"404::404_message": "Bitcoin je skvelý, ale táto rozbitá stránka nie.",
	"404::404_not_found_short": "Nenájdené",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Poskytujeme bezplatné zdroje pre firmy, ktoré uľahčujú miestnym obchodníkom začať prijímať Bitcoin. Naša stránka o podnikaní s Bitcoinom vysvetľuje, prečo je Bitcoin dobrý pre podnikanie, ako vybrať peňaženku a platobný terminál, a ponúka bezplatné nálepky „Tu prijímame Bitcoin“.",
	"about::about_card_business_label": "Zdroje pre firmy",
	"about::about_card_business_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_business_title":
		"Všetko, čo firma potrebuje, aby začala prijímať platby v Bitcoine",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Zdroj: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Prispievať",
	"about::about_card_contribute_source": "Zdroj: GitHub →",
	"about::about_card_contribute_title":
		"Zistite, ako prispieť do projektu bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Zdroj: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Tlačiteľné letáky",
	"about::about_card_flyers_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Stiahnite si a vytlačte letáky o Bitcoine pre svoju komunitu",
	"about::about_card_github_label": "Repozitár",
	"about::about_card_github_source": "Zdroj: GitHub →",
	"about::about_card_github_title": "Pozrite si bitcoin.rocks na GitHube",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Zdroj: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Nálepky zadarmo",
	"about::about_card_stickers_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Získajte nálepky Bitcoinu zadarmo až domov",
	"about::about_editorial_2":
		"Odkazujeme na dôveryhodné zdroje, ako sú Federal Reserve (FRED), americký Bureau of Labor Statistics, FDIC, OSN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden a James Lavish. Veríme, že keď sa fakty prezentujú jasne, Bitcoin hovorí sám za seba.",
	"about::about_flyers_blurb":
		"Navrhujeme tlačiteľné letáky, ktoré môžete rozdávať na stretnutiach, vyvesovať na komunitných nástenkách alebo nechávať v schránkach — jednoduchý spôsob, ako vzbudiť záujem a priviesť ľudí na bitcoin.rocks, kde sa dozvedia viac.",
	"about::about_header": "O projekte bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks založil používateľ",
	"about::about_mission_1b":
		"v roku 2022 s jednoduchým poslaním: urýchliť prijatie Bitcoinu prostredníctvom vzdelávania.",
	"about::about_open_source_2":
		"bitcoin.rocks je bezplatný open-source projekt pod licenciou MIT. Prispievať môže ktokoľvek. Zvlášť vítame prekladateľov, ktorí pomáhajú sprístupniť náš obsah ľuďom po celom svete.",
	"about::about_open_source_header": "Otvorený zdrojový kód",
	"about::about_page_description":
		"bitcoin.rocks je bezplatná open-source vzdelávacia stránka o Bitcoine založená v roku 2022. Naším poslaním je urýchliť prijatie Bitcoinu prostredníctvom vzdelávania.",
	"about::about_stickers_blurb":
		"Posielame zadarmo nálepky Bitcoinu až k vašim dverám, aby ste mohli pomôcť šíriť povedomie o Bitcoine vo vašej komunite. Každý mesiac stovky ľudí naskenujú QR kódy na týchto nálepkách, aby sa dozvedeli viac o Bitcoine.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin nepozná bankové runy",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin je systém s plnými rezervami. Neukladáte svoje peniaze do banky. Sami ste svojou bankou. Vaše peniaze sa nepožičiavajú bez vášho vedomia, pretože jediný, kto k nim má prístup, ste vy.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Pokým držíte bitcoin vo vlastnej peňaženke — nie na burze alebo zabalený v ETF — bankové runy sú nemožné.",
	"bank-runs::bank_runs_bitcoin_p3":
		"S Bitcoinom máte nad svojimi peniazmi skutočnú kontrolu.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Od 26. marca 2020 nemusia americké banky držať žiadne povinné rezervy.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Pomer bankových rezerv",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Zdroj: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Systém s plnými rezervami — poistenie vkladov nie je potrebné.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Krytie Bitcoinu",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Zdroj: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Každý bitcoin existuje na blockchaine — nič sa nepožičiava.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Pomer rezerv Bitcoinu",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Zdroj: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Poistný fond 153,9 mld. USD vs 10,82 bilióna USD v poistených vkladoch (december 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Krytie FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Zdroj: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Prípadová štúdia",
	"bank-runs::bank_runs_card_svb_source":
		"Zdroj: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Zistite, ako došlo k runu na Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Ďalší krok",
	"bank-runs::bank_runs_card_wallet_source": "Začnite tu →",
	"bank-runs::bank_runs_card_wallet_title":
		"Naučte sa, ako získať vlastnú Bitcoin peňaženku",
	"bank-runs::bank_runs_fdic_heading":
		"Poistenie FDIC kryje asi 1 % vkladov",
	"bank-runs::bank_runs_fdic_p1":
		"Poistenie FDIC chráni vklady až do výšky 250 000 USD na vkladateľa. Ale poistný fond je nepatrný v porovnaní s celkovými vkladmi, ktoré má chrániť.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Pri veľkoplošnom zlyhaní banky by vláda pravdepodobne vytlačila peniaze, aby pokryla rozdiel — čo vedie k väčšej",
	"bank-runs::bank_runs_fdic_p2_link": "inflácii.",
	"bank-runs::bank_runs_header":
		"Bitcoin nepozná bankové runy, ale vaša banka môže.",
	"bank-runs::bank_runs_page_description":
		"Banky požičiavajú vaše vklady v rámci bankovníctva s čiastočnými rezervami. Ak si príliš veľa ľudí chce naraz vybrať, banky môžu padnúť. Bitcoin je systém s plnými rezervami — bankové runy sú nemožné.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: skutočný príklad",
	"bank-runs::bank_runs_svb_p1_a":
		"V marci 2023 padla Silicon Valley Bank po tom, čo investovala vklady zákazníkov do dlhodobých",
	"bank-runs::bank_runs_svb_p1_b":
		"Keď tieto dlhopisy stratili hodnotu, SVB nemohla pokryť výbery. Banka sa stala insolventnou.",
	"bank-runs::bank_runs_svb_p1_link": "vládnych dlhopisov.",
	"bank-runs::bank_runs_svb_p2":
		"Tisíce firiem nemohli zaplatiť svojim zamestnancom. FDIC zasiahla — ale vyvstala väčšia otázka: sú vaše peniaze skutočne v bezpečí?",
	"bank-runs::bank_runs_what_p1":
		"Banky nedržia vaše vklady v trezore. Požičiavajú vaše peniaze a investujú ich — tomu sa hovorí bankovníctvo s čiastočnými rezervami.",
	"bank-runs::bank_runs_what_p2":
		"Ak sa príliš veľa ľudí pokúsi vybrať naraz, banka nemá dosť hotovosti, aby zaplatila všetkým. To je bankový run — a môže spôsobiť úplný kolaps bánk.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">bankami</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin môže používať ktokoľvek s pripojením k internetu — je ",
	"bitcoin-vs-banks::point_1_summary_2": "bez povolenia.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banky môžu odmietať, zmrazovať alebo rušiť účty na základe svojich pravidiel alebo vládnych predpisov.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Sieť Bitcoin beží 24/7/365 bez okien na údržbu či sviatkov. Banky majú obmedzenú otváraciu dobu, víkendy zatvorené a výpadky.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Každá transakcia Bitcoinu je na verejnom blockchaine, ktorý si môže ktokoľvek overiť. Banky vedú súkromné účtovné knihy, ktoré zákazníci nemôžu nezávisle preveriť.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Pri Bitcoine držíte svoje súkromné kľúče sami — pozrite si nášho jednoduchého sprievodcu ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin peňaženkami",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banky držia vaše peniaze a môžu ich kedykoľvek zmraziť, obmedziť alebo zablokovať.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Poplatky pri Bitcoine sú transparentné a predvídateľné. Banky postupne nabaľujú skryté poplatky za účty, prečerpanie, prevody a bankomaty.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin vám umožní minúť len to, čo skutočne vlastníte. Banky povolia prečerpanie a potom vám za to účtujú reťazové sankčné poplatky.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Akonáhle sú odoslané, transakcie Bitcoinu nemožno zastaviť ani vrátiť. Banky môžu blokovať, zmrazovať alebo rušiť transakcie na základe pravidiel alebo vládnych príkazov.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">dlhopismi</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Dlhopisy sú „bezrizikové“ len nominálne — inflácia, pohyby úrokových sadzieb a riziko platobnej neschopnosti ukrajujú reálne výnosy.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin má transparentnú volatilitu, ale žiadne skryté riziko protistrany.",
	"bitcoin-vs-bonds::point_2_summary_1": "Keď",
	"bitcoin-vs-bonds::point_2_summary_2": "inflácia",
	"bitcoin-vs-bonds::point_2_summary_3":
		"prekonáva výnosy dlhopisov, držitelia dlhopisov každý rok strácajú reálnu kúpnu silu. Strop 21 miliónov bitcoinov nemožno infláciou rozriediť.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Trhy s dlhopismi sa počas kríz môžu zmraziť — Silicon Valley Bank sčasti padla, pretože držala dlhopisy, ktoré stratili hodnotu. Pozrite sa, ako vznikajú",
	"bitcoin-vs-bonds::point_3_summary_2": "bankové runy",
	"bitcoin-vs-bonds::point_3_summary_3":
		" a prečo sa im Bitcoin vyhýba. Bitcoin sa obchoduje 24/7 globálne bez kríz likvidity.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Aukcie štátnych dlhopisov môžu zlyhať, keď nie je dosť kupcov — pozri",
	"bitcoin-vs-bonds::point_4_summary_2": "slabú aukciu z roku 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Cena Bitcoinu je odhaľovaná priebežne na otvorených trhoch bez centrálnej aukcie, ktorá by mohla zlyhať.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Výnosy dlhopisov sú fixované pri nákupe. Aj keď ekonomika porastie alebo sa mena zrúti, váš výnos zostane rovnaký.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin má priestor na významný rast, keďže rastie adopcia a dopyt naráža na pevnú ponuku.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Väčšina dlhopisov je držaná cez banky alebo brokerov, čo pridáva riziko protistrany. Bitcoin možno uchovávať v samoúschove pomocou",
	"bitcoin-vs-bonds::point_6_summary_2": "peňaženky",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — čím toto riziko úplne eliminujete.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Dlhopisy závisia úplne od toho, že vlády svoje dlhy splatia. Ak vláda nespláca alebo dlh infláciou znehodnotí, držitelia dlhopisov prerobia.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin funguje nezávisle od akejkoľvek vlády alebo politickej autority.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">hotovosťou</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin sa cez internet presúva kamkoľvek na svete v priebehu minút. Hotovosť vyžaduje fyzickú prítomnosť alebo dôveryhodných kuriérov — dvadsaťdolárovku nemôžete poslať e-mailom.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funguje rovnako všade. Hotovosť je obmedzená geografiou, výmennými kurzami a miestnym prijímaním.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Vlády môžu hotovosť zo dňa na deň zneplatniť — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> to urobila v roku 2016. Ale aj bez demonetizácie hotovosť stráca hodnotu kvôli",
	"bitcoin-vs-cash::point_3_summary_2": "inflácii.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin nemožno zneplatniť žiadnou vládou ani autoritou.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Hotovosť možno falšovať, niekedy veľmi verne. Bitcoin používa kryptografiu, ktorá falšovanie matematicky znemožňuje.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nemá žiadnu centrálnu autoritu. Hotovosť vydávajú vlády, ktoré môžu tlačiť ďalšiu, meniť vzhľad alebo rušiť bankovky podľa ľubovôle.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Hotovosť je zraniteľná krádežou, požiarom, stratou aj zhabaním. Bitcoin možno bezpečne ",
	"bitcoin-vs-cash::point_6_summary_2": "uchovať v samoúschove",
	"bitcoin-vs-cash::point_6_summary_3":
		" v telefóne alebo hardvérovom zariadení.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin sa delí na 100 miliónov satoshi, čo umožňuje mikroplatby akejkoľvek veľkosti. Hotovosť má minimálne nominálne hodnoty — halier rozdeliť nemôžete.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">digitálnymi menami centrálnych bánk (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nikto vám nemôže zabrániť v transakciách s Bitcoinom. CBDC sú navrhnuté tak, aby vlády a centrálne banky kontrolovali každú platbu, čo obmedzuje vaše súkromie aj slobodu.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoinu nikdy neuplynie platnosť a nemá mesačné poplatky. CBDC môžu byť naprogramované tak, aby vyprchali, čo vás odrádza od sporenia do budúcnosti.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin má pevný strop 21 miliónov BTC. CBDC nemajú žiadny limit ponuky a umožňujú vládam rozširovať peňažnú zásobu podľa ľubovôle — čo spôsobuje",
	"bitcoin-vs-cbdc::point_3_summary_2": "infláciu.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Adresy Bitcoinu nie sú viazané na vašu skutočnú identitu. CBDC sú priamo prepojené s vládnym preukazom totožnosti, čo umožňuje masový finančný dohľad a cenzúru.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Pravidlá Bitcoinu overujú desaťtisíce nezávislých uzlov. CBDC sú centralizované v rukách vlád a centrálnych bánk, ktoré majú nad sieťou úplnú kontrolu.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Ktokoľvek si môže prevádzkovať uzol Bitcoinu a overovať pravidlá siete. CBDC neumožňujú používateľom prevádzkovať uzly — musíte dôverovať centrálnej autorite.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin v samoúschove nemôže nikto zmraziť. CBDC sú navrhnuté tak, aby vlády a centrálne banky mohli účty okamžite zmraziť.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin vám dáva plnú kontrolu nad vašimi peniazmi, ak si ho sami uschováte do",
	"bitcoin-vs-cbdc::point_8_summary_2": "peňaženky.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC vyžadujú dôveru v depozitárov, ako sú banky či vlády, aby za vás peniaze držali.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Menová politika Bitcoinu je fixovaná v kóde a nemožno ju meniť. CBDC môžu politici ľubovoľne preprogramovať, čo spôsobuje",
	"bitcoin-vs-cbdc::point_9_summary_2": "infláciu",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", keď sa natlačí príliš veľa peňazí.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin je najbezpečnejšia počítačová sieť, aká kedy bola vytvorená, a nikdy nebola napadnutá. CBDC sa spoliehajú na banky a vlády, ktoré boli napadnuté nespočetnekrát.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">kryptom</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokol Bitcoinu zostal od roku 2009 v zásade rovnaký a poskytuje predvídateľné pravidlá. Väčšina krypto projektov neustále mení protokoly, tokenomiku alebo sa štiepi do nových verzií.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin beží na desaťtisícoch nezávislých uzlov po celom svete. Väčšinu krypto projektov ovládajú nadácie, firmy alebo malé vývojárske tímy, ktoré môžu vykonávať jednostranné zmeny.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin má pevný strop 21 miliónov mincí — najvzácnejšie digitálne aktívum. Väčšina krypto projektov má neobmedzenú ponuku alebo mechanizmy na ľubovoľné vytváranie nových tokenov, ktoré rozrieďujú držiteľov.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin má jeden účel: peer-to-peer digitálne peniaze. Rozumie mu a používa ho ktokoľvek. Väčšina kryptomien zahŕňa zložité smart kontrakty alebo DeFi, ktoré vyžadujú technické znalosti na bezpečné použitie.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoinu beží bez úspešného útoku na hlavnú sieť už vyše 15 rokov. Väčšina krypto projektov používa experimentálny konsenzus, ktorý nebol ostro testovaný.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin sú digitálne peniaze — uchovávateľ hodnoty a prostriedok výmeny. Väčšina krypto tokenov sú špekulatívne utility alebo governance tokeny s nejasnou reálnou hodnotou.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin pod útokom silnie a prežil každú krízu, zákaz aj kritiku. Väčšina krypto projektov padá pod regulačným, technickým alebo trhovým tlakom.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nemá CEO, firmu ani jediný bod zlyhania. Väčšina krypto projektov závisí od VC investorov, konkrétneho vedenia alebo prežitia jedinej firmy.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">výtvarným umením</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Každý bitcoin je identický a zameniteľný. Každé umelecké dielo je jedinečné — iný vznik, história, stav a proveniencia robia priame porovnanie extrémne ťažkým.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin sa obchoduje 24/7 na globálnom trhu dostupnom komukoľvek. Výtvarné umenie vyžaduje špecializované aukčné domy, súkromných obchodníkov alebo galérie a predaj môže trvať mesiace.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Nákup alebo predaj Bitcoinu stojí menej ako 1 % na poplatkoch, často oveľa menej. Predaj umeleckých diel nakopí 30 – 40 % v prémiách kupujúceho, províziách, poistení, preprave a overovacích poplatkoch.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin sa delí na 100 miliónov satoshi, takže je ideálny pre transakcie akejkoľvek veľkosti. Nemôžete vlastniť časť obrazu alebo roh sochy bez rizika protistrany.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Vlastníctvo a pravosť Bitcoinu môže ktokoľvek kryptograficky overiť na blockchaine. Overovanie pravosti umeleckých diel je drahé, pomalé a pravidelne ho mätú falšovatelia — čo zo dňa na deň ničí hodnotu diela.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Správne zálohovaný Bitcoin prežije záplavy, požiare, zemetrasenia aj krádež. Výtvarné umenie je zraniteľné voči všetkým formám fyzického zničenia a poistenie len zriedka pokryje všetko.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Ktokoľvek s pripojením k internetu a trochou peňazí môže kúpiť Bitcoin. Investovanie do výtvarného umenia je prakticky obmedzené na bohatých zberateľov s prístupom k aukciám a špecializovaným znalostiam.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">zlatom</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin možno okamžite poslať po internete za nízke poplatky. Zlato treba fyzicky odoslať, aby sa previedlo vlastníctvo.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin je digitálne natívne aktívum, ktoré môžete prenášať po internete. Online zlato je digitálna dlžobná úpis — vlastníte len sľub depozitára, nie samotný kov.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin má pevný strop 21 miliónov BTC. Ponuka zlata rastie asi <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">o 1,6 % ročne</a>, čím sa vaše podiely zmenšujú — menej ako pri fiat",
	"bitcoin-vs-gold::point_3_summary_2": "inflácii",
	"bitcoin-vs-gold::point_3_summary_3":
		"— ale predsa inflácia.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Keď ceny zlata rastú, ťaží sa viac zlata, čo cenu zase zrazí. Ponuka Bitcoinu je neelastická — nech cena vystúpi akokoľvek vysoko, vždy bude len 21 miliónov.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Sieť Bitcoin overujú desaťtisíce nezávislých uzlov. Väčšina fyzického zlata leží v niekoľkých veľkých depozitároch.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Ktokoľvek môže overiť pravý Bitcoin spustením plného uzla — je to len aplikácia. Overenie fyzického zlata vyžaduje jeho roztavenie; vnútri by mohol byť volfrám.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin sa delí na 100 miliónov satoshi, takže je ideálny pre nákupy akejkoľvek veľkosti. Zlato nemožno ľahko deliť na menšie transakcie.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">nehnuteľnosťami</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin sa okamžite presúva kamkoľvek na svete. Nehnuteľnosti sú fixné na jedno miesto a vystavené miestnym ekonomickým, politickým aj prírodným rizikám.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin sa delí na 100 miliónov satoshi. Nehnuteľnosť nemožno čiastočne predať — nemôžete odpredať len kuchyňu alebo kúpiť pol spálne.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin funguje v decentralizovanej sieti, ktorú žiadna vláda nemôže ovládať. Nehnuteľnosti sú silne regulované — zónovanie, regulácie nájmov, vyvlastnenie a zhabanie sa všetky uplatňujú.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin nevyžaduje žiadnu údržbu. Nehnuteľnosti vyžadujú opravy, rekonštrukcie, poistenie, správu nehnuteľností a riešenie problémov s nájomníkmi.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin nepodlieha priebežným daniam — daň z kapitálových výnosov platíte len pri predaji. Nehnuteľnosti platia ročnú daň z nehnuteľnosti bez ohľadu na príjem.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Správne zálohovaný Bitcoin prežije požiar, povodeň aj zemetrasenie. Nehnuteľnosti sú zraniteľné akoukoľvek katastrofou a poistenie málokedy pokryje všetko.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Každý bitcoin je identický a zameniteľný. Každá nehnuteľnosť je jedinečná, čo sťažuje oceňovanie a porovnávanie.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin sa obchoduje globálne 24/7 pre kohokoľvek s prístupom k internetu. Predaj nehnuteľností je obmedzený na miestnych kupcov a uzavretie môže trvať mesiace papierovania.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin umožňuje priame individuálne vlastníctvo pre kohokoľvek. Nákup nehnuteľností ako investícia nad rámec primárneho bývania zvyšuje ceny bývania, znižuje dostupnosť a podnecuje bytovú krízu.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">akciami</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin je priame aktívum, ktoré vlastníte kompletne. Akcie sú podiely vo firme — ich hodnota závisí od vedenia, výkonnosti a rozhodnutí, ktoré neovládate.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin má pevný strop 21 miliónov BTC. Firmy môžu kedykoľvek vydávať nové akcie a rozrieďovať tým existujúcich akcionárov — podobne ako fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflácia",
	"bitcoin-vs-stocks::point_2_summary_3":
		" rozrieďuje hotovosť. Pri Bitcoine sa váš podiel nikdy nezmenšuje.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nemá CEO ani jediný bod zlyhania. Akcie silne závisia od vedenia — jedno zlé rozhodnutie alebo odchod kľúčovej osoby môžu zraziť cenu.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Cena Bitcoinu pochádza z otvorených globálnych trhov. Ocenenie akcií sa opiera o metriky ako P/E pomery, ktoré môžu zamaskovať predražené akcie.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin sa obchoduje 24/7 po celom svete. Akciové trhy majú otvorené len v pracovné dni v obchodných hodinách.",
	"bitcoin-vs-stocks::point_6_summary_1": "Pri Bitcoine môžete prejsť do",
	"bitcoin-vs-stocks::point_6_summary_2": "samoúschovy",
	"bitcoin-vs-stocks::point_6_summary_3":
		" pomocou jednoduchej aplikácie — žiadny broker nie je potrebný. Akcie ležia u brokerských firiem, čo vás vystavuje riziku protistrany, ak padnú.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Pevná ponuka Bitcoinu z neho robí spoľahlivú zaisťovaciu stratégiu proti inflácii. Niektoré akcie infláciu porazia, iné nie — žiadna záruka neexistuje.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Rozdiel medzi <span class=\"orange\">Bitcoinom</span> a <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin je otvorená sieť, ku ktorej sa môže ktokoľvek pripojiť bez povolenia. Visa je uzavretý systém kontrolovaný finančnými inštitúciami, ktoré môžu odoprieť prístup — najmä ľuďom bez bankového účtu či s obmedzeným prístupom k bankovým službám.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transakcie Bitcoinu nemajú žiadne obchodnícke poplatky. Visa zvyčajne účtuje obchodníkom okolo 3 % za transakciu — vaša firma môže ušetriť peniaze prijímaním",
	"bitcoin-vs-visa::point_2_summary_2": "platieb v Bitcoine",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Každá transakcia Bitcoinu je na verejnom, overiteľnom blockchaine. Visa prevádzkuje uzavretý, proprietárny systém, kde zákazníci nemôžu nič nezávisle overiť.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin nemôže zmraziť žiadna centrálna autorita. Visa môže kedykoľvek zmraziť účty, blokovať transakcie alebo odoprieť službu.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin je definitívne vyrovnanie — miniete len to, čo vlastníte. Kreditné karty vytvárajú dlh s úrokmi často nad 25 % ročne.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin vám umožní prejsť do",
	"bitcoin-vs-visa::point_6_summary_2": "samoúschovy",
	"bitcoin-vs-visa::point_6_summary_3":
		" bez potreby banky alebo platobného spracovateľa. Kreditné karty vždy vyžadujú sprostredkovateľov.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funguje 24/7 globálne bez obchodných hodín. Visa má prevádzkovú dobu, okná na údržbu a geografické obmedzenia, ktoré môžu blokovať transakcie.",
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
		`translate-rest-part1 (sk): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
