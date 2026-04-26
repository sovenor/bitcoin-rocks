#!/usr/bin/env node
/**
 * Czech manifest refresh — part 1 of non-inflation namespaces.
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
	"cs.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Zpět na hlavní stránku",
	"404::404_message": "Bitcoin je skvělý, ale tato rozbitá stránka ne.",
	"404::404_not_found_short": "Nenalezeno",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Poskytujeme zdarma zdroje pro firmy, které usnadňují místním obchodníkům začít přijímat Bitcoin. Naše stránka o podnikání s Bitcoinem vysvětluje, proč je Bitcoin dobrý pro podnikání, jak vybrat peněženku a platební terminál, a nabízí zdarma samolepky „Zde přijímáme Bitcoin“.",
	"about::about_card_business_label": "Zdroje pro firmy",
	"about::about_card_business_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_business_title":
		"Vše, co firma potřebuje, aby začala přijímat platby v Bitcoinu",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Zdroj: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Přispívat",
	"about::about_card_contribute_source": "Zdroj: GitHub →",
	"about::about_card_contribute_title":
		"Zjistěte, jak přispět do projektu bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Zdroj: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Tisknutelné letáky",
	"about::about_card_flyers_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Stáhněte si a vytiskněte letáky o Bitcoinu pro svou komunitu",
	"about::about_card_github_label": "Repozitář",
	"about::about_card_github_source": "Zdroj: GitHub →",
	"about::about_card_github_title": "Podívejte se na bitcoin.rocks na GitHubu",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Zdroj: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Samolepky zdarma",
	"about::about_card_stickers_source": "Zdroj: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Získejte samolepky Bitcoinu zdarma až domů",
	"about::about_editorial_2":
		"Odkazujeme na důvěryhodné zdroje, jako jsou Federal Reserve (FRED), americký Bureau of Labor Statistics, FDIC, OSN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden a James Lavish. Věříme, že když se fakta prezentují jasně, Bitcoin mluví sám za sebe.",
	"about::about_flyers_blurb":
		"Navrhujeme tisknutelné letáky, které můžete rozdávat na setkáních, vyvěšovat na komunitních nástěnkách nebo nechávat ve schránkách — jednoduchý způsob, jak vzbudit zájem a přivést lidi na bitcoin.rocks, kde se dozvědí víc.",
	"about::about_header": "O projektu bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks založil uživatel",
	"about::about_mission_1b":
		"v roce 2022 s jednoduchým posláním: urychlit přijetí Bitcoinu prostřednictvím vzdělávání.",
	"about::about_open_source_2":
		"bitcoin.rocks je bezplatný open-source projekt pod licencí MIT. Přispívat může kdokoli. Zvláště vítáme překladatele, kteří pomáhají zpřístupnit náš obsah lidem po celém světě.",
	"about::about_open_source_header": "Otevřený zdrojový kód",
	"about::about_page_description":
		"bitcoin.rocks je bezplatný open-source vzdělávací web o Bitcoinu založený v roce 2022. Naším posláním je urychlit přijetí Bitcoinu prostřednictvím vzdělávání.",
	"about::about_stickers_blurb":
		"Posíláme zdarma samolepky Bitcoinu až k vašim dveřím, abyste mohli pomoci šířit povědomí o Bitcoinu ve vaší komunitě. Každý měsíc stovky lidí naskenují QR kódy na těchto samolepkách, aby se dozvěděly více o Bitcoinu.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin nezná bankovní runy",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin je systém s plnými rezervami. Neukládáte své peníze do banky. Sami jste svou bankou. Vaše peníze se nepůjčují bez vašeho vědomí, protože jediný, kdo k nim má přístup, jste vy.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Dokud držíte bitcoin ve vlastní peněžence — ne na burze nebo zabalený v ETF — jsou bankovní runy nemožné.",
	"bank-runs::bank_runs_bitcoin_p3":
		"S Bitcoinem máte nad svými penězi skutečnou kontrolu.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Od 26. března 2020 nemusí americké banky držet žádné povinné rezervy.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Poměr bankovních rezerv",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Zdroj: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Systém s plnými rezervami — pojištění vkladů není potřeba.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Krytí Bitcoinu",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Zdroj: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Každý bitcoin existuje na blockchainu — nic se nepůjčuje.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Poměr rezerv Bitcoinu",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Zdroj: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Pojistný fond 153,9 mld. USD vs 10,82 bilionu USD v pojištěných vkladech (prosinec 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Krytí FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Zdroj: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Případová studie",
	"bank-runs::bank_runs_card_svb_source":
		"Zdroj: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Zjistěte, jak došlo k runu na Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Další krok",
	"bank-runs::bank_runs_card_wallet_source": "Začněte zde →",
	"bank-runs::bank_runs_card_wallet_title":
		"Naučte se, jak získat vlastní Bitcoin peněženku",
	"bank-runs::bank_runs_fdic_heading":
		"Pojištění FDIC kryje asi 1 % vkladů",
	"bank-runs::bank_runs_fdic_p1":
		"Pojištění FDIC chrání vklady až do výše 250 000 USD na vkladatele. Ale pojistný fond je nepatrný ve srovnání s celkovými vklady, které má chránit.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Při velkoplošném selhání banky by vláda pravděpodobně vytiskla peníze, aby pokryla rozdíl — což vede k větší",
	"bank-runs::bank_runs_fdic_p2_link": "inflaci.",
	"bank-runs::bank_runs_header":
		"Bitcoin nezná bankovní runy, ale vaše banka může.",
	"bank-runs::bank_runs_page_description":
		"Banky půjčují vaše vklady v rámci bankovnictví s částečnými rezervami. Pokud si příliš mnoho lidí chce najednou vybrat, banky mohou padnout. Bitcoin je systém s plnými rezervami — bankovní runy jsou nemožné.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: skutečný příklad",
	"bank-runs::bank_runs_svb_p1_a":
		"V březnu 2023 padla Silicon Valley Bank poté, co investovala vklady zákazníků do dlouhodobých",
	"bank-runs::bank_runs_svb_p1_b":
		"Když tyto dluhopisy ztratily hodnotu, SVB nemohla pokrýt výběry. Banka se stala insolventní.",
	"bank-runs::bank_runs_svb_p1_link": "vládních dluhopisů.",
	"bank-runs::bank_runs_svb_p2":
		"Tisíce firem nemohly zaplatit své zaměstnance. FDIC zasáhla — ale vyvstala větší otázka: jsou vaše peníze skutečně v bezpečí?",
	"bank-runs::bank_runs_what_p1":
		"Banky nedrží vaše vklady v trezoru. Půjčují vaše peníze a investují je — tomu se říká bankovnictví s částečnými rezervami.",
	"bank-runs::bank_runs_what_p2":
		"Pokud se příliš mnoho lidí pokusí vybrat najednou, banka nemá dost hotovosti, aby zaplatila všem. To je bankovní run — a může způsobit úplný kolaps bank.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">bankami</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin může používat kdokoli s připojením k internetu — je ",
	"bitcoin-vs-banks::point_1_summary_2": "bez povolení.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banky mohou odmítat, zmrazovat nebo rušit účty na základě svých pravidel nebo vládních předpisů.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Síť Bitcoin běží 24/7/365 bez oken pro údržbu či svátků. Banky mají omezenou otevírací dobu, víkendy zavřené a výpadky.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Každá transakce Bitcoinu je na veřejném blockchainu, který si může kdokoli ověřit. Banky vedou soukromé účetní knihy, které zákazníci nemohou nezávisle prověřit.",
	"bitcoin-vs-banks::point_4_summary_1":
		"U Bitcoinu držíte své soukromé klíče sami — podívejte se na našeho jednoduchého průvodce ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin peněženkami",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banky drží vaše peníze a mohou je kdykoli zmrazit, omezit nebo zablokovat.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Poplatky u Bitcoinu jsou transparentní a předvídatelné. Banky postupně nabalují skryté poplatky za účty, přečerpání, převody a bankomaty.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin vám umožní utratit jen to, co skutečně vlastníte. Banky povolí přečerpání a pak vám za to účtují řetězové sankční poplatky.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Jakmile jsou odeslány, transakce Bitcoinu nelze zastavit ani vrátit. Banky mohou blokovat, zmrazovat nebo rušit transakce na základě pravidel nebo vládních příkazů.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">dluhopisy</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Dluhopisy jsou „bezrizikové“ jen nominálně — inflace, pohyby úrokových sazeb a riziko platební neschopnosti ukrajují reálné výnosy.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin má transparentní volatilitu, ale žádné skryté riziko protistrany.",
	"bitcoin-vs-bonds::point_2_summary_1": "Když",
	"bitcoin-vs-bonds::point_2_summary_2": "inflace",
	"bitcoin-vs-bonds::point_2_summary_3":
		"překonává výnosy dluhopisů, držitelé dluhopisů každý rok ztrácejí reálnou kupní sílu. Strop 21 milionů bitcoinů nelze inflací rozředit.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Trhy s dluhopisy se během krizí mohou zmrazit — Silicon Valley Bank zčásti padla, protože držela dluhopisy, které ztratily hodnotu. Podívejte se, jak vznikají",
	"bitcoin-vs-bonds::point_3_summary_2": "bankovní runy",
	"bitcoin-vs-bonds::point_3_summary_3":
		" a proč se jim Bitcoin vyhýbá. Bitcoin se obchoduje 24/7 globálně bez krizí likvidity.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Aukce státních dluhopisů mohou selhat, když není dost kupců — viz",
	"bitcoin-vs-bonds::point_4_summary_2": "slabá aukce z roku 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Cena Bitcoinu je odhalována průběžně na otevřených trzích bez centrální aukce, která by mohla selhat.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Výnosy dluhopisů jsou fixovány při nákupu. I když ekonomika poroste nebo se měna zhroutí, váš výnos zůstane stejný.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin má prostor k významnému růstu, jak roste adopce a poptávka naráží na pevnou nabídku.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Většina dluhopisů je držena přes banky nebo brokery, což přidává riziko protistrany. Bitcoin lze uchovávat v samoúschově pomocí",
	"bitcoin-vs-bonds::point_6_summary_2": "peněženky",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — čímž toto riziko zcela eliminujete.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Dluhopisy závisí zcela na tom, že vlády své dluhy splatí. Pokud vláda nesplácí nebo dluh inflací znehodnotí, držitelé dluhopisů prodělají.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin funguje nezávisle na jakékoli vládě nebo politické autoritě.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">hotovostí</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin se přes internet přesouvá kamkoli na světě během minut. Hotovost vyžaduje fyzickou přítomnost nebo důvěryhodné kurýry — dvacetidolarovku nemůžete poslat e-mailem.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funguje stejně všude. Hotovost je omezena zeměpisem, směnnými kurzy a místním přijímáním.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Vlády mohou hotovost ze dne na den zneplatnit — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indie</a> to udělala v roce 2016. Ale i bez demonetizace hotovost ztrácí hodnotu kvůli",
	"bitcoin-vs-cash::point_3_summary_2": "inflaci.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin nelze zneplatnit žádnou vládou ani autoritou.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Hotovost lze padělat, někdy velmi věrně. Bitcoin používá kryptografii, která padělání matematicky znemožňuje.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nemá žádnou centrální autoritu. Hotovost vydávají vlády, které mohou tisknout další, měnit vzhled nebo rušit bankovky podle libosti.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Hotovost je zranitelná krádeží, požárem, ztrátou i zabavením. Bitcoin lze bezpečně ",
	"bitcoin-vs-cash::point_6_summary_2": "uchovat v samoúschově",
	"bitcoin-vs-cash::point_6_summary_3":
		" v telefonu nebo hardwarovém zařízení.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin se dělí na 100 milionů satoshi, což umožňuje mikroplatby jakékoli velikosti. Hotovost má minimální nominální hodnoty — haléř rozdělit nemůžete.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">digitálními měnami centrálních bank (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nikdo vám nemůže zabránit v transakcích s Bitcoinem. CBDC jsou navrženy tak, aby vlády a centrální banky kontrolovaly každou platbu, což omezuje vaše soukromí i svobodu.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoinu nikdy nevyprší platnost a nemá měsíční poplatky. CBDC mohou být naprogramovány tak, aby vyprchaly, což vás odrazuje od spoření do budoucna.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin má pevný strop 21 milionů BTC. CBDC nemají žádný limit nabídky a umožňují vládám rozšiřovat peněžní zásobu podle libosti — což způsobuje",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflaci.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Adresy Bitcoinu nejsou vázané na vaši skutečnou identitu. CBDC jsou přímo propojeny s vládním průkazem totožnosti, což umožňuje masový finanční dohled a cenzuru.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Pravidla Bitcoinu ověřují desítky tisíc nezávislých uzlů. CBDC jsou centralizovány v rukou vlád a centrálních bank, které mají nad sítí úplnou kontrolu.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Kdokoli si může provozovat uzel Bitcoinu a ověřovat pravidla sítě. CBDC neumožňují uživatelům provozovat uzly — musíte důvěřovat centrální autoritě.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin v samoúschově nemůže nikdo zmrazit. CBDC jsou navrženy tak, aby vlády a centrální banky mohly účty okamžitě zmrazit.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin vám dává plnou kontrolu nad vašimi penězi, pokud si ho sami uschováte do",
	"bitcoin-vs-cbdc::point_8_summary_2": "peněženky.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC vyžadují důvěru v depozitáře, jako jsou banky či vlády, aby za vás peníze drželi.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Měnová politika Bitcoinu je fixovaná v kódu a nelze ji měnit. CBDC mohou politici libovolně přeprogramovat, což způsobuje",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflaci",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", když se natiskne příliš mnoho peněz.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin je nejbezpečnější počítačová síť, která kdy byla vytvořena, a nikdy nebyla napadena. CBDC spoléhají na banky a vlády, které byly napadány nesčetněkrát.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">krypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokol Bitcoinu zůstal od roku 2009 v zásadě stejný a poskytuje předvídatelná pravidla. Většina krypto projektů neustále mění protokoly, tokenomiku, nebo se štěpí do nových verzí.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin běží na desítkách tisíc nezávislých uzlů po celém světě. Většinu krypto projektů ovládají nadace, firmy nebo malé vývojářské týmy, které mohou provádět jednostranné změny.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin má pevný strop 21 milionů mincí — nejvzácnější digitální aktivum. Většina krypto projektů má neomezenou nabídku nebo mechanismy pro libovolné vytváření nových tokenů, které ředí držitele.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin má jeden účel: peer-to-peer digitální peníze. Rozumí mu a používá ho kdokoli. Většina krypto zahrnuje složité chytré kontrakty nebo DeFi, které vyžadují technické znalosti k bezpečnému použití.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoinu běží bez úspěšného útoku na hlavní síť už přes 15 let. Většina krypto projektů používá experimentální konsensus, který nebyl ostře testován.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin jsou digitální peníze — uchovatel hodnoty a prostředek směny. Většina krypto tokenů jsou spekulativní utility nebo governance tokeny s nejasnou reálnou hodnotou.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin pod útokem sílí a přežil každou krizi, zákaz i kritiku. Většina krypto projektů padá pod regulačním, technickým nebo tržním tlakem.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nemá CEO, firmu ani jediný bod selhání. Většina krypto projektů závisí na VC investorech, konkrétním vedení nebo přežití jediné firmy.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">výtvarným uměním</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Každý bitcoin je identický a zaměnitelný. Každé umělecké dílo je jedinečné — jiný vznik, historie, stav a provenience činí přímé srovnání extrémně obtížným.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin se obchoduje 24/7 na globálním trhu dostupném komukoli. Výtvarné umění vyžaduje specializované aukční domy, soukromé obchodníky nebo galerie a prodej může trvat měsíce.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Nákup nebo prodej Bitcoinu stojí méně než 1 % na poplatcích, často mnohem méně. Prodej uměleckých děl nakupí 30–40 % v prémiích kupujícího, provizích, pojištění, přepravě a ověřovacích poplatcích.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin se dělí na 100 milionů satoshi, takže je ideální pro transakce jakékoli velikosti. Nemůžete vlastnit část obrazu nebo roh sochy bez rizika protistrany.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Vlastnictví a pravost Bitcoinu může kdokoli kryptograficky ověřit na blockchainu. Ověřování pravosti uměleckých děl je drahé, pomalé a pravidelně ho matou padělatelé — což ze dne na den ničí hodnotu díla.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Správně zálohovaný Bitcoin přežije záplavy, požáry, zemětřesení i krádež. Výtvarné umění je zranitelné vůči všem formám fyzického zničení a pojištění jen zřídka pokryje všechno.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Kdokoli s připojením k internetu a trochou peněz může koupit Bitcoin. Investování do výtvarného umění je prakticky omezeno na bohaté sběratele s přístupem k aukcím a specializovanými znalostmi.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">zlatem</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin lze okamžitě poslat po internetu za nízké poplatky. Zlato je třeba fyzicky odeslat, aby se převedlo vlastnictví.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin je digitálně nativní aktivum, které můžete přenášet po internetu. Online zlato je digitální dlužní úpis — vlastníte jen slib depozitáře, nikoli samotný kov.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin má pevný strop 21 milionů BTC. Nabídka zlata roste asi <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">o 1,6 % ročně</a>, čímž se vaše podíly zmenšují — méně než u fiat",
	"bitcoin-vs-gold::point_3_summary_2": "inflace",
	"bitcoin-vs-gold::point_3_summary_3":
		"— ale přesto inflace.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Když ceny zlata rostou, těží se víc zlata, což cenu zase srazí. Nabídka Bitcoinu je neelastická — ať cena vystoupá jakkoli vysoko, vždycky bude jen 21 milionů.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Síť Bitcoin ověřují desítky tisíc nezávislých uzlů. Většina fyzického zlata leží v několika velkých depozitářích.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Kdokoli může ověřit pravý Bitcoin spuštěním plného uzlu — je to jen aplikace. Ověření fyzického zlata vyžaduje jeho roztavení; uvnitř by mohl být wolfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin se dělí na 100 milionů satoshi, takže je ideální pro nákupy jakékoli velikosti. Zlato nelze snadno dělit na menší transakce.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">nemovitostmi</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se okamžitě přesouvá kamkoli na světě. Nemovitosti jsou fixní na jedno místo a vystavené místním ekonomickým, politickým i přírodním rizikům.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin se dělí na 100 milionů satoshi. Nemovitost nelze částečně prodat — nemůžete odprodat jen kuchyni nebo koupit půl ložnice.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin funguje v decentralizované síti, kterou žádná vláda nemůže ovládat. Nemovitosti jsou silně regulovány — zónování, regulace nájmů, vyvlastnění a zabavení se všechna uplatňují.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin nevyžaduje žádnou údržbu. Nemovitosti vyžadují opravy, rekonstrukce, pojištění, správu nemovitostí a řešení problémů s nájemníky.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin nepodléhá průběžným daním — daň z kapitálových výnosů platíte jen při prodeji. Nemovitosti platí roční daň z nemovitosti bez ohledu na příjem.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Správně zálohovaný Bitcoin přežije požár, povodeň i zemětřesení. Nemovitosti jsou zranitelné jakoukoli katastrofou a pojištění málokdy pokryje všechno.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Každý bitcoin je identický a zaměnitelný. Každá nemovitost je jedinečná, což znesnadňuje oceňování a srovnávání.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin se obchoduje globálně 24/7 pro kohokoli s přístupem k internetu. Prodej nemovitostí je omezen na místní kupce a uzavření může trvat měsíce papírování.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin umožňuje přímé individuální vlastnictví pro kohokoli. Nákup nemovitostí jako investice nad rámec primárního bydlení zvyšuje ceny bydlení, snižuje dostupnost a podněcuje bytovou krizi.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">akciemi</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin je přímé aktivum, které vlastníte kompletně. Akcie jsou podíly ve firmě — jejich hodnota závisí na vedení, výkonnosti a rozhodnutích, která neovládáte.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin má pevný strop 21 milionů BTC. Firmy mohou kdykoli vydávat nové akcie a ředit tím stávající akcionáře — podobně jako fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "inflace",
	"bitcoin-vs-stocks::point_2_summary_3":
		" ředí hotovost. U Bitcoinu se váš podíl nikdy nezmenšuje.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nemá CEO ani jediný bod selhání. Akcie silně závisejí na vedení — jedno špatné rozhodnutí nebo odchod klíčové osoby mohou srazit cenu.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Cena Bitcoinu pochází z otevřených globálních trhů. Ocenění akcií se opírá o metriky jako P/E poměry, které mohou zamaskovat předražené akcie.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin se obchoduje 24/7 po celém světě. Akciové trhy mají otevřeno jen v pracovní dny v obchodních hodinách.",
	"bitcoin-vs-stocks::point_6_summary_1": "U Bitcoinu můžete přejít do",
	"bitcoin-vs-stocks::point_6_summary_2": "samoúschovy",
	"bitcoin-vs-stocks::point_6_summary_3":
		" pomocí jednoduché aplikace — žádný broker není potřeba. Akcie leží u brokerských firem, což vás vystavuje riziku protistrany, pokud padnou.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Pevná nabídka Bitcoinu z něj činí spolehlivou zajišťovací strategii proti inflaci. Některé akcie inflaci porazí, jiné ne — žádná záruka neexistuje.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Rozdíl mezi <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin je otevřená síť, ke které se může kdokoli připojit bez povolení. Visa je uzavřený systém kontrolovaný finančními institucemi, které mohou odepřít přístup — zejména lidem bez bankovního účtu či s omezeným přístupem k bankovním službám.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transakce Bitcoinu nemají žádné obchodnické poplatky. Visa obvykle účtuje obchodníkům kolem 3 % za transakci — vaše firma může ušetřit peníze přijímáním",
	"bitcoin-vs-visa::point_2_summary_2": "plateb v Bitcoinu",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Každá transakce Bitcoinu je na veřejném, ověřitelném blockchainu. Visa provozuje uzavřený, proprietární systém, kde zákazníci nemohou nic nezávisle ověřit.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin nemůže zmrazit žádná centrální autorita. Visa může kdykoli zmrazit účty, blokovat transakce nebo odepřít službu.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin je definitivní vypořádání — utratíte jen to, co vlastníte. Kreditní karty vytvářejí dluh s úroky často přes 25 % ročně.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin vám umožní přejít do",
	"bitcoin-vs-visa::point_6_summary_2": "samoúschovy",
	"bitcoin-vs-visa::point_6_summary_3":
		" bez potřeby banky nebo platebního zpracovatele. Kreditní karty vždy vyžadují prostředníky.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funguje 24/7 globálně bez obchodních hodin. Visa má provozní dobu, okna pro údržbu a zeměpisná omezení, která mohou blokovat transakce.",
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
		`translate-rest-part1 (cs): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
