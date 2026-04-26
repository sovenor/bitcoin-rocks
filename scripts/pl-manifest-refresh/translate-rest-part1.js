#!/usr/bin/env node
/**
 * Polish manifest refresh — part 1 of non-inflation namespaces.
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
	"pl.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Wróć do strony głównej",
	"404::404_message": "Bitcoin jest super, ale ta zepsuta strona już nie.",
	"404::404_not_found_short": "Nie znaleziono",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Udostępniamy bezpłatne zasoby dla firm, które ułatwiają lokalnym przedsiębiorcom akceptowanie Bitcoina. Nasza strona o Bitcoinie dla biznesu wyjaśnia, dlaczego Bitcoin jest dobry dla firmy, jak wybrać portfel i terminal płatniczy, oraz oferuje darmowe naklejki „Akceptujemy Bitcoina”.",
	"about::about_card_business_label": "Zasoby dla firm",
	"about::about_card_business_source": "Źródło: bitcoin.rocks →",
	"about::about_card_business_title":
		"Wszystko, czego firma potrzebuje, aby zacząć przyjmować płatności w Bitcoinie",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Źródło: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Zaangażuj się",
	"about::about_card_contribute_source": "Źródło: GitHub →",
	"about::about_card_contribute_title":
		"Dowiedz się, jak współtworzyć projekt bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Źródło: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Ulotki do druku",
	"about::about_card_flyers_source": "Źródło: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Pobierz i wydrukuj ulotki o Bitcoinie dla swojej społeczności",
	"about::about_card_github_label": "Repozytorium",
	"about::about_card_github_source": "Źródło: GitHub →",
	"about::about_card_github_title": "Zobacz bitcoin.rocks na GitHubie",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Źródło: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Darmowe naklejki",
	"about::about_card_stickers_source": "Źródło: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Otrzymaj darmowe naklejki Bitcoin pod swoje drzwi",
	"about::about_editorial_2":
		"Powołujemy się na zaufane źródła, takie jak Rezerwa Federalna (FRED), amerykański Bureau of Labor Statistics, FDIC, ONZ, World Gold Council, Forbes, MIT Technology Review, Lyn Alden i James Lavish. Wierzymy, że gdy fakty są przedstawione jasno, Bitcoin broni się sam.",
	"about::about_flyers_blurb":
		"Projektujemy ulotki do druku, które możesz rozdawać na spotkaniach, wieszać na tablicach społeczności lub zostawiać w skrzynkach pocztowych — to prosty sposób, by wzbudzić zainteresowanie i skierować ludzi na bitcoin.rocks, aby się dowiedzieli więcej.",
	"about::about_header": "O bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks zostało założone przez użytkownika",
	"about::about_mission_1b":
		"w 2022 roku z prostą misją: przyspieszyć adopcję Bitcoina przez edukację.",
	"about::about_open_source_2":
		"bitcoin.rocks to bezpłatny projekt open source na licencji MIT. Każdy może się przyczynić. Szczególnie cieszą nas tłumacze pomagający udostępniać nasze treści ludziom na całym świecie.",
	"about::about_open_source_header": "Otwarte źródło",
	"about::about_page_description":
		"bitcoin.rocks to bezpłatny edukacyjny serwis open source o Bitcoinie założony w 2022 roku. Naszą misją jest przyspieszanie adopcji Bitcoina przez edukację.",
	"about::about_stickers_blurb":
		"Wysyłamy darmowe naklejki Bitcoin pod twoje drzwi, abyś mógł pomóc szerzyć wiedzę o Bitcoinie w swojej społeczności. Co miesiąc setki osób skanują kody QR z tych naklejek, by dowiedzieć się więcej o Bitcoinie.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin nie zna runów na banki",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin to system pełnej rezerwy. Nie wpłacasz pieniędzy do banku. Sam jesteś swoim bankiem. Twoje pieniądze nie są pożyczane bez twojej wiedzy, bo jedyną osobą z dostępem do nich jesteś ty.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Dopóki trzymasz bitcoina we własnym portfelu — nie na giełdzie ani w opakowaniu ETF — runy na banki są niemożliwe.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Z Bitcoinem masz prawdziwą kontrolę nad swoimi pieniędzmi.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Od 26 marca 2020 r. amerykańskie banki nie muszą utrzymywać żadnej obowiązkowej rezerwy.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Stopa rezerwy bankowej",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Źródło: Rezerwa Federalna →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"System pełnej rezerwy — ubezpieczenie depozytów nie jest potrzebne.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Pokrycie Bitcoina",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Źródło: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Każdy bitcoin istnieje na blockchainie — nic nie jest pożyczane.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Stopa rezerwy Bitcoina",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Źródło: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fundusz ubezpieczeniowy 153,9 mld USD wobec 10,82 bln USD w ubezpieczonych depozytach (grudzień 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Pokrycie FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Źródło: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Studium przypadku",
	"bank-runs::bank_runs_card_svb_source":
		"Źródło: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Zobacz, jak doszło do runu na Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Następny krok",
	"bank-runs::bank_runs_card_wallet_source": "Zacznij tutaj →",
	"bank-runs::bank_runs_card_wallet_title":
		"Naucz się, jak założyć własny portfel Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"Ubezpieczenie FDIC pokrywa około 1% depozytów",
	"bank-runs::bank_runs_fdic_p1":
		"Ubezpieczenie FDIC chroni depozyty do 250 000 USD na deponenta. Ale fundusz ubezpieczeniowy jest niewielki w porównaniu z całkowitą sumą depozytów, które ma chronić.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Przy upadku banku na dużą skalę rząd prawdopodobnie wydrukuje pieniądze, by uzupełnić różnicę — co prowadzi do większej",
	"bank-runs::bank_runs_fdic_p2_link": "inflacji.",
	"bank-runs::bank_runs_header":
		"Bitcoin nie zna runów na banki, ale twój bank tak.",
	"bank-runs::bank_runs_page_description":
		"Banki pożyczają twoje depozyty w ramach bankowości rezerwy cząstkowej. Jeśli zbyt wielu ludzi zechce wypłacić środki naraz, banki mogą upaść. Bitcoin jest systemem pełnej rezerwy — runy na banki są niemożliwe.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: prawdziwy przykład",
	"bank-runs::bank_runs_svb_p1_a":
		"W marcu 2023 r. Silicon Valley Bank upadł po tym, jak zainwestował depozyty klientów w długoterminowe",
	"bank-runs::bank_runs_svb_p1_b":
		"Gdy te obligacje straciły wartość, SVB nie mógł pokryć wypłat. Bank stał się niewypłacalny.",
	"bank-runs::bank_runs_svb_p1_link": "obligacje rządowe.",
	"bank-runs::bank_runs_svb_p2":
		"Tysiące firm nie mogły wypłacić wynagrodzeń pracownikom. FDIC interweniowała — ale pojawiło się ważniejsze pytanie: czy twoje pieniądze naprawdę są bezpieczne?",
	"bank-runs::bank_runs_what_p1":
		"Banki nie trzymają twoich depozytów w skarbcu. Pożyczają i inwestują twoje pieniądze — nazywa się to bankowością rezerwy cząstkowej.",
	"bank-runs::bank_runs_what_p2":
		"Jeśli zbyt wielu ludzi spróbuje wypłacić środki naraz, bank nie ma wystarczająco gotówki, by wszystkim wypłacić. To jest run na bank — i może doprowadzić do całkowitego upadku banków.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">bankami</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Z Bitcoina może korzystać każdy z dostępem do internetu — jest ",
	"bitcoin-vs-banks::point_1_summary_2": "bezpozwoleniowy.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banki mogą odmawiać, zamrażać lub zamykać konta na podstawie własnych zasad lub przepisów państwowych.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Sieć Bitcoin działa 24/7/365 bez okien serwisowych ani świąt. Banki mają ograniczone godziny pracy, są zamknięte w weekendy i miewają awarie.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Każda transakcja Bitcoin znajduje się na publicznym blockchainie, który każdy może zweryfikować. Banki prowadzą prywatne księgi, których klienci nie mogą sprawdzić niezależnie.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Z Bitcoinem trzymasz klucze prywatne sam — zobacz nasz prosty przewodnik po ",
	"bitcoin-vs-banks::point_4_summary_2": "portfelach Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banki trzymają twoje pieniądze i mogą je w każdej chwili zamrozić, ograniczyć lub zablokować.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Opłaty Bitcoin są przejrzyste i przewidywalne. Banki stopniowo doliczają ukryte opłaty za prowadzenie konta, debet, przelewy i bankomaty.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin pozwala wydać tylko to, co naprawdę posiadasz. Banki pozwalają wejść w debet, a potem nakładają za to kaskadowe opłaty karne.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Po wysłaniu transakcji Bitcoin nie da się ich zatrzymać ani cofnąć. Banki mogą blokować, zamrażać lub anulować transakcje na podstawie zasad lub nakazów rządowych.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">obligacjami</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligacje są „bez ryzyka” tylko nominalnie — inflacja, zmiany stóp procentowych i ryzyko niewypłacalności pożerają realne zwroty.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin ma przejrzystą zmienność, ale żadnego ukrytego ryzyka kontrahenta.",
	"bitcoin-vs-bonds::point_2_summary_1": "Gdy",
	"bitcoin-vs-bonds::point_2_summary_2": "inflacja",
	"bitcoin-vs-bonds::point_2_summary_3":
		"przekracza rentowność obligacji, posiadacze obligacji co roku tracą realną siłę nabywczą. Limit 21 milionów Bitcoinów nie może zostać rozcieńczony przez inflację.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Rynki obligacji mogą się zamrozić w czasie kryzysów — Silicon Valley Bank upadł częściowo dlatego, że trzymał obligacje, które straciły wartość. Zobacz, jak powstają",
	"bitcoin-vs-bonds::point_3_summary_2": "runy na banki",
	"bitcoin-vs-bonds::point_3_summary_3":
		" i dlaczego Bitcoin ich unika. Bitcoin handluje 24/7 globalnie bez kryzysów płynności.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Aukcje obligacji skarbowych mogą się nie udać, gdy brakuje kupujących — zobacz",
	"bitcoin-vs-bonds::point_4_summary_2": "słabą aukcję z 2022 r.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Cena Bitcoina jest odkrywana na bieżąco na otwartych rynkach, bez centralnej aukcji, która mogłaby zawieść.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Rentowność obligacji jest ustalana w chwili zakupu. Nawet jeśli gospodarka zacznie szybko rosnąć lub waluta się załamie, twój zwrot pozostanie taki sam.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ma znaczne pole do wzrostu, gdy adopcja rośnie i popyt napotyka na sztywną podaż.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Większość obligacji jest trzymana przez banki lub brokerów, co dodaje ryzyko kontrahenta. Bitcoina możesz przechowywać samodzielnie, używając",
	"bitcoin-vs-bonds::point_6_summary_2": "portfela",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminując to ryzyko całkowicie.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligacje zależą całkowicie od tego, czy rządy spłacą swoje długi. Jeśli rząd zbankrutuje albo zinflatuje swój dług, posiadacze obligacji stracą.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin działa niezależnie od jakiegokolwiek rządu lub władzy politycznej.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">gotówką</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin przemieszcza się przez internet w dowolne miejsce na świecie w ciągu kilku minut. Gotówka wymaga fizycznej obecności lub zaufanych kurierów — nie wyślesz dwudziestodolarowego banknotu mailem.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin działa wszędzie tak samo. Gotówka jest ograniczona geografią, kursami wymiany i lokalną akceptacją.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Rządy mogą z dnia na dzień unieważnić gotówkę — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indie</a> zrobiły to w 2016 r. Ale nawet bez demonetyzacji gotówka traci wartość przez",
	"bitcoin-vs-cash::point_3_summary_2": "inflację.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin nie może zostać unieważniony przez żaden rząd ani władzę.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Gotówkę można podrabiać, czasem bardzo skutecznie. Bitcoin używa kryptografii, która sprawia, że fałszowanie jest matematycznie niemożliwe.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin nie ma żadnej centralnej władzy. Gotówkę emitują rządy, które mogą drukować więcej, zmieniać jej wygląd lub wycofywać banknoty według uznania.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Gotówka jest podatna na kradzież, pożar, zgubienie i konfiskatę. Bitcoina można bezpiecznie ",
	"bitcoin-vs-cash::point_6_summary_2": "przechowywać samodzielnie",
	"bitcoin-vs-cash::point_6_summary_3":
		" w telefonie lub urządzeniu sprzętowym.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin dzieli się na 100 milionów satoshi, co umożliwia mikropłatności w dowolnej kwocie. Gotówka ma minimalne nominały — grosza nie podzielisz.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">cyfrowymi walutami banków centralnych (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nikt nie może powstrzymać cię przed transakcjami Bitcoinem. CBDC są zaprojektowane tak, by rządy i banki centralne kontrolowały każdą płatność, ograniczając twoją prywatność i wolność.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin nigdy nie wygasa i nie ma miesięcznych opłat. CBDC mogą być zaprogramowane tak, by traciły ważność, zniechęcając cię do oszczędzania na przyszłość.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ma twardy limit 21 milionów BTC. CBDC nie mają żadnego limitu podaży, pozwalając rządom rozszerzać podaż pieniądza według uznania — co powoduje",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflację.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Adresy Bitcoin nie są powiązane z twoją prawdziwą tożsamością. CBDC są bezpośrednio połączone z dowodem tożsamości wydanym przez rząd, co umożliwia masową inwigilację finansową i cenzurę.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Reguły Bitcoina są weryfikowane przez dziesiątki tysięcy niezależnych węzłów. CBDC są scentralizowane w rękach rządów i banków centralnych, które mają pełną kontrolę nad siecią.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Każdy może uruchomić własny węzeł Bitcoin i weryfikować reguły sieci. CBDC nie pozwalają użytkownikom uruchamiać węzłów — musisz zaufać centralnej władzy.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin w samodzielnym przechowywaniu nie może zostać zamrożony przez nikogo. CBDC są zaprojektowane tak, by rządy i banki centralne mogły natychmiast zamrozić konta.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin daje ci pełną kontrolę nad twoimi pieniędzmi, jeśli przechowujesz go samodzielnie w",
	"bitcoin-vs-cbdc::point_8_summary_2": "portfelu.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC wymagają zaufania do depozytariuszy, takich jak banki czy rządy, by trzymali pieniądze za ciebie.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Polityka monetarna Bitcoina jest zapisana w kodzie i nie da się jej zmienić. CBDC mogą być przeprogramowywane przez polityków według uznania, co powoduje",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflację",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", gdy drukuje się zbyt dużo pieniędzy.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin jest najbezpieczniejszą siecią komputerową, jaką kiedykolwiek zbudowano, i nigdy nie został zhakowany. CBDC opierają się na bankach i rządach, które były hakowane niezliczoną liczbę razy.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">krypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Protokół Bitcoina pozostał zasadniczo niezmieniony od 2009 r., zapewniając przewidywalne reguły. Większość projektów krypto stale zmienia protokoły, tokenomikę lub rozdziela się na nowe wersje.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin działa na dziesiątkach tysięcy niezależnych węzłów na całym świecie. Większością projektów krypto kontrolują fundacje, firmy lub małe zespoły deweloperów, którzy mogą wprowadzać jednostronne zmiany.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ma twardy limit 21 milionów monet — to najbardziej rzadki cyfrowy aktyw. Większość projektów krypto ma nieograniczoną podaż lub mechanizmy do dowolnego tworzenia nowych tokenów, rozcieńczające posiadaczy.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ma jeden cel: peer-to-peer cyfrowy pieniądz. Każdy go rozumie i może z niego korzystać. Większość krypto wiąże się ze złożonymi smart kontraktami lub DeFi, które wymagają wiedzy technicznej, by korzystać bezpiecznie.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoina działa bez udanego ataku na sieć główną od ponad 15 lat. Większość projektów krypto używa eksperymentalnego konsensusu, który nie został rzetelnie sprawdzony w boju.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin to cyfrowy pieniądz — magazyn wartości i środek wymiany. Większość tokenów krypto to spekulacyjne tokeny narzędziowe lub zarządcze o niejasnej wartości w realnym świecie.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin pod atakiem rośnie w siłę i przeżył każdy kryzys, zakaz i krytykę. Większość projektów krypto upada pod presją regulacyjną, techniczną lub rynkową.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin nie ma CEO, firmy ani pojedynczego punktu awarii. Większość projektów krypto zależy od inwestorów VC, konkretnego kierownictwa lub przetrwania jednej firmy.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">sztuką</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Każdy bitcoin jest identyczny i wymienny. Każde dzieło sztuki jest unikalne — różne pochodzenie, historia, stan i proweniencja sprawiają, że bezpośrednie porównanie jest niezwykle trudne.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin handluje 24/7 na globalnym rynku dostępnym dla każdego. Sztuka wymaga wyspecjalizowanych domów aukcyjnych, prywatnych dealerów lub galerii, a sprzedaż może zająć miesiące.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Kupno lub sprzedaż Bitcoina kosztuje mniej niż 1% w opłatach, często znacznie mniej. Sprzedaż dzieł sztuki kumuluje 30–40% prowizji nabywcy, prowizji domu, ubezpieczenia, transportu i opłat za autentykację.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin dzieli się na 100 milionów satoshi, co czyni go idealnym do transakcji w dowolnej kwocie. Nie możesz posiadać kawałka obrazu ani rogu rzeźby bez ryzyka kontrahenta.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Własność i autentyczność Bitcoina każdy może kryptograficznie zweryfikować na blockchainie. Autentykacja sztuki jest droga, powolna i regularnie myli ją fałszerze — niszcząc wartość dzieła z dnia na dzień.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Prawidłowo zabezpieczony Bitcoin przetrwa powodzie, pożary, trzęsienia ziemi i kradzieże. Sztuka jest podatna na każdą formę fizycznego zniszczenia, a ubezpieczenie rzadko pokrywa wszystko.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Każdy z dostępem do internetu i niewielką ilością pieniędzy może kupić Bitcoina. Inwestowanie w sztukę jest praktycznie ograniczone do bogatych kolekcjonerów z dostępem do aukcji i wyspecjalizowaną wiedzą.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">złotem</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoina można natychmiast wysłać przez internet za niewielką opłatą. Złoto trzeba fizycznie przesłać, by przenieść własność.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin to cyfrowy aktyw, który możesz przesyłać przez internet. Złoto online to cyfrowe IOU — posiadasz tylko obietnicę depozytariusza, a nie sam metal.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin ma twardy limit 21 milionów BTC. Podaż złota rośnie o około <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% rocznie</a>, pomniejszając twoją część — mniej niż w przypadku fiatowej",
	"bitcoin-vs-gold::point_3_summary_2": "inflacji",
	"bitcoin-vs-gold::point_3_summary_3":
		" — ale wciąż jest to inflacja.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Gdy ceny złota rosną, wydobywa się go więcej, co znów zaniża cenę. Podaż Bitcoina jest nieelastyczna — niezależnie od tego, jak wysoko pójdzie cena, zawsze będzie tylko 21 milionów.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Sieć Bitcoin jest weryfikowana przez dziesiątki tysięcy niezależnych węzłów. Większość fizycznego złota leży w kilku dużych depozytach.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Każdy może zweryfikować autentyczność Bitcoina, uruchamiając pełny węzeł — to po prostu aplikacja. Weryfikacja fizycznego złota wymaga jego stopienia; w środku może być wolfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin dzieli się na 100 milionów satoshi, co czyni go idealnym do zakupów w dowolnej kwocie. Złota nie da się łatwo dzielić na mniejsze transakcje.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">nieruchomościami</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin natychmiast przemieszcza się w dowolne miejsce na świecie. Nieruchomości są przypisane do jednej lokalizacji i podatne na lokalne ryzyka ekonomiczne, polityczne i przyrodnicze.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin dzieli się na 100 milionów satoshi. Nieruchomości nie da się sprzedać częściowo — nie sprzedasz samej kuchni ani nie kupisz pół sypialni.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin działa w zdecentralizowanej sieci, której żaden rząd nie może kontrolować. Nieruchomości są silnie regulowane — strefy, regulacje czynszów, wywłaszczenia i konfiskaty mają zastosowanie.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin nie wymaga żadnej konserwacji. Nieruchomości wymagają napraw, remontów, ubezpieczenia, zarządzania i radzenia sobie z problemami najemców.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin nie podlega bieżącym podatkom — podatek od zysków kapitałowych płacisz tylko przy sprzedaży. Nieruchomości płacą roczny podatek od nieruchomości niezależnie od dochodu.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Prawidłowo zabezpieczony Bitcoin przetrwa pożar, powódź i trzęsienie ziemi. Nieruchomości są podatne na każdą katastrofę, a ubezpieczenie rzadko pokrywa wszystko.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Każdy bitcoin jest identyczny i wymienny. Każda nieruchomość jest wyjątkowa, co utrudnia jej wycenę i porównywanie.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin handluje globalnie 24/7 dla każdego z dostępem do internetu. Sprzedaż nieruchomości jest ograniczona do lokalnych nabywców, a finalizacja może zająć miesiące papierkowej roboty.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin pozwala każdemu na bezpośrednią, indywidualną własność. Kupowanie nieruchomości jako inwestycji poza głównym miejscem zamieszkania zawyża ceny mieszkań, zmniejsza dostępność i napędza kryzys mieszkaniowy.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">akcjami</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin to bezpośredni aktyw, który posiadasz w całości. Akcje to udziały w spółce — ich wartość zależy od zarządu, wyników i decyzji, na które nie masz wpływu.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ma twardy limit 21 milionów BTC. Spółki mogą w każdej chwili emitować nowe akcje, rozwadniając obecnych akcjonariuszy — podobnie jak fiatowa",
	"bitcoin-vs-stocks::point_2_summary_2": "inflacja",
	"bitcoin-vs-stocks::point_2_summary_3":
		" rozwadnia gotówkę. Z Bitcoinem twój udział nigdy się nie zmniejsza.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin nie ma CEO ani pojedynczego punktu awarii. Akcje są silnie zależne od kierownictwa — jedna zła decyzja albo odejście kluczowej osoby mogą zwalić cenę.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Cena Bitcoina pochodzi z otwartych globalnych rynków. Wycena akcji opiera się na wskaźnikach takich jak P/E, które mogą maskować przewartościowane akcje.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin handluje 24/7 na całym świecie. Rynki akcji są otwarte tylko w dni robocze w godzinach handlu.",
	"bitcoin-vs-stocks::point_6_summary_1": "Z Bitcoinem możesz przejść na",
	"bitcoin-vs-stocks::point_6_summary_2": "samodzielne przechowywanie",
	"bitcoin-vs-stocks::point_6_summary_3":
		" za pomocą prostej aplikacji — broker nie jest potrzebny. Akcje leżą u firm brokerskich, co naraża cię na ryzyko kontrahenta, jeśli upadną.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Sztywna podaż Bitcoina czyni go niezawodnym zabezpieczeniem przed inflacją. Niektóre akcje pokonują inflację, inne nie — gwarancji nie ma.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Różnica między <span class=\"orange\">Bitcoinem</span> a <span class=\"asset\">Visą</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin to otwarta sieć, do której każdy może dołączyć bez pozwolenia. Visa to system zamknięty, kontrolowany przez instytucje finansowe, które mogą odmówić dostępu — zwłaszcza osobom bez konta bankowego lub z ograniczonym dostępem do bankowości.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Transakcje Bitcoin nie mają opłat dla sprzedawców. Visa zazwyczaj pobiera od sprzedawców około 3% za transakcję — twoja firma może zaoszczędzić, akceptując",
	"bitcoin-vs-visa::point_2_summary_2": "płatności Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Każda transakcja Bitcoin znajduje się na publicznym, weryfikowalnym blockchainie. Visa działa w zamkniętym, zastrzeżonym systemie, gdzie klienci nie mogą niczego zweryfikować niezależnie.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoina nie może zamrozić żadna centralna władza. Visa może w każdej chwili zamrozić konta, blokować transakcje lub odmówić usługi.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin jest ostatecznym rozliczeniem — wydajesz tylko to, co posiadasz. Karty kredytowe tworzą dług z odsetkami często powyżej 25% rocznie.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin pozwala ci przejść na",
	"bitcoin-vs-visa::point_6_summary_2": "samodzielne przechowywanie",
	"bitcoin-vs-visa::point_6_summary_3":
		" bez potrzeby banku ani procesora płatności. Karty kredytowe zawsze wymagają pośredników.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin działa 24/7 globalnie bez godzin pracy. Visa ma godziny pracy, okna serwisowe i ograniczenia geograficzne, które mogą blokować transakcje.",
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
		`translate-rest-part1 (pl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
