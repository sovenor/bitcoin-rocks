#!/usr/bin/env node
/**
 * Polish manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Usługi księgowe Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 USD",
	"business/accounting::accounting_example_loss_result": "−10 USD",
	"business/accounting::accounting_description":
		"Przewodnik prostym językiem po księgowaniu Bitcoina w firmie — portfele hybrydowe, podstawa kosztowa, zyski kapitałowe i kiedy zadzwonić do księgowego.",
	"business/accounting::accounting_s1_c1":
		"Najprostszy sposób na akceptowanie Bitcoina to portfel hybrydowy, który automatycznie sprzedaje 100% otrzymanego Bitcoina za złotówki (lub twoją lokalną walutę) zaraz po wpływie płatności.",
	"business/accounting::accounting_s1_c2":
		"Przy takim ustawieniu twoja księgowość wygląda dokładnie tak, jak dziś — końcowa kwota za każdym razem jest w złotówkach. Bez podstawy kosztowej, bez zysków kapitałowych, bez nowych arkuszy.",
	"business/accounting::accounting_s2":
		"Jeśli zatrzymujesz część Bitcoina: śledzenie podstawy kosztowej",
	"business/accounting::accounting_s2_c1":
		"Niektóre firmy decydują się zatrzymać część otrzymanego Bitcoina, zamiast automatycznie konwertować całość. Jeśli to twój przypadek, głównym dodatkowym krokiem jest śledzenie podstawy kosztowej — wartości w złotówkach każdej płatności w Bitcoinie z dnia jej otrzymania.",
	"business/accounting::accounting_s2_c2":
		"Nawet jeśli widzisz swój biznes wyłącznie w Bitcoinie, większość urzędów skarbowych nadal chce, byś raportował wartość w złotówkach. Dobra wiadomość: to tylko dwie liczby na transakcję — kwota otrzymanego Bitcoina i jego wartość w złotówkach tego dnia.",
	"business/accounting::accounting_s2_c3":
		"Skorzystaj z poniższych narzędzi, aby zautomatyzować wyszukiwanie i nie sprawdzać codziennie cen.",
	"business/accounting::accounting_s3":
		"Wydawanie lub sprzedaż Bitcoina, którego zatrzymałeś",
	"business/accounting::accounting_s3_c1":
		"Jeśli automatycznie konwertujesz każdą płatność na złotówki, pomiń tę sekcję — nie dotyczy cię.",
	"business/accounting::accounting_s3_c2":
		"Jeśli zatrzymałeś trochę Bitcoina, a potem decydujesz się go wydać lub sprzedać, dopisz cenę sprzedaży do tego samego arkusza z podstawą kosztową. Różnica między tym, ile Bitcoin kosztował, gdy go otrzymałeś, a ile kosztuje, gdy go wydajesz lub sprzedajesz, to zysk lub strata kapitałowa.",
	"business/accounting::accounting_s3_c3": "Dwa szybkie przykłady:",
	"business/accounting::accounting_s4":
		"Potrzebujesz fachowca, który zna się na Bitcoinie?",
	"business/accounting::accounting_s4_c1":
		"Jeśli wolisz przekazać to komuś innemu — albo twoja księgowość Bitcoinowa jest bardziej skomplikowana niż to, co obsłuży portfel hybrydowy — gorąco polecamy Usługi księgowe Satoshi Pacioli, firmę specjalizującą się w księgowości Bitcoina dla firm.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Księgowość Bitcoinowa dla twojej firmy",
	"business/accounting::accounting_card_bpr_label": "CENA BITCOINA",
	"business/accounting::accounting_card_bpr_title":
		"Sprawdź aktualną lub historyczną cenę Bitcoina w dolarach",
	"business/accounting::accounting_card_pacioli_label": "KSIĘGOWY BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label": "IMPORT DO EXCELA",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automatycznie pobieraj ceny Bitcoina do Excela",
	"business/accounting::accounting_card_wallets_label": "PORTFELE HYBRYDOWE",
	"business/accounting::accounting_card_wallets_title":
		"Zobacz nasze polecane portfele dla firm",
	"business/accounting::accounting_disclaimer":
		"Ten przewodnik służy wyłącznie celom informacyjnym i nie stanowi porady podatkowej. Po poradę podatkową dopasowaną do twojej sytuacji skontaktuj się z wykwalifikowanym księgowym.",
	"business/accounting::accounting_disclaimer_label": "Zastrzeżenie",
	"business/accounting::accounting_example_feb_1": "1 lutego",
	"business/accounting::accounting_example_gain_badge": "Zysk kapitałowy",
	"business/accounting::accounting_example_gain_explain":
		"Zaksięguj zysk kapitałowy 10 USD.",
	"business/accounting::accounting_example_jan_1": "1 stycznia",
	"business/accounting::accounting_example_loss_badge": "Strata kapitałowa",
	"business/accounting::accounting_example_loss_explain":
		"Zaksięguj stratę kapitałową 10 USD.",
	"business/accounting::accounting_example_received_label": "Otrzymano",
	"business/accounting::accounting_example_sold_label":
		"Sprzedano lub wydano",
	"business/accounting::accounting_hero_subtitle":
		"Akceptowanie Bitcoina w twojej firmie nie musi komplikować księgowości. Oto krótka wersja — plus narzędzia i eksperci, którzy uczynią to bezbolesnym.",
	"business/accounting::accounting_intro_c1":
		"Jeśli już akceptujesz gotówkę lub karty, dodanie Bitcoina do księgowości firmy jest prostsze, niż się wydaje. Masz dwie ścieżki: automatycznie konwertować każdą płatność Bitcoinową na złotówki zaraz po jej otrzymaniu (bez nowej księgowości) lub zatrzymać część jako Bitcoina (kilka dodatkowych liczb do śledzenia).",
	"business/accounting::accounting_intro_c2":
		"Ten przewodnik przeprowadzi cię przez obie ścieżki — abyś mógł wybrać tę, która pasuje do twojego biznesu, i zacząć akceptować Bitcoina ze spokojem.",
	"business/accounting::accounting_s1": "Łatwa droga: automatyczna konwersja na złotówki",
	"business/accounting::accounting_s3_c6":
		"I to wszystko. Podstawowa matematyka jest taka sama, jaką stosujesz przy każdym innym rosnącym lub tracącym wartość aktywie.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktualna i historyczna cena Bitcoina w dolarach",
	"business/accounting::sources_satoshi_pacioli":
		"Usługi księgowe Satoshi Pacioli — księgowość Bitcoinowa dla firm",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — import cen kryptowalut do Excela",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Krótkie odpowiedzi na pytania, które przedsiębiorcy zadają najczęściej, zanim zaczną akceptować Bitcoina — opłaty, rozliczenia, portfele, chargebacki, koszty i więcej.",
	"business/faq::faq_intro_c1":
		"Kliknij dowolne pytanie poniżej, by rozwinąć odpowiedź. Gdy będziesz gotowy, by zacząć akceptować Bitcoina, zasoby dla firm na dole strony przeprowadzą cię przez każdy krok.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "KSIĘGOWOŚĆ",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "MAPY OBCHODNIKÓW",
	"business/index::biz_label_rewards": "NAGRODY",
	"business/index::biz_label_stickers": "NAKLEJKI",
	"business/index::biz_label_wallets": "PORTFELE",
	"business/index::biz_meta_description":
		"Akceptuj Bitcoina w swojej firmie z niższymi opłatami, natychmiastowym rozliczeniem, bez chargebacków i pozyskaj więcej klientów.",
	"business/index::business_hero_subtitle":
		"Przyjmuj płatności z niższymi opłatami, otrzymuj zapłatę natychmiast i zdobądź miliony nowych klientów — bez umów i ukrytych kosztów.",
	"business/index::business_intro_c1":
		"Bitcoin daje twojej firmie szybszy, tańszy i bardziej prywatny sposób otrzymywania zapłaty. Bez pośredników. Bez chargebacków. Bez umów. Tylko pieniądze, które rozliczają się w sekundy, bezpośrednio od klienta do ciebie.",
	"business/index::business_intro_c2":
		"Poniżej krótka wersja, dlaczego Bitcoin jest dobry dla biznesu — a pod nią wszystkie zasoby, których potrzebujesz, by zacząć go akceptować już dziś.",
	"business/index::business_resources_heading":
		"Wszystko, czego potrzebujesz, by akceptować Bitcoina",
	"business/index::business_resources_intro":
		"Przeglądaj te zasoby we własnym tempie. Każdy to krótki, praktyczny przewodnik.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Opowiedz nam o swojej firmie",
	"business/maps::biz_maps_form_intro":
		"Potrzebujemy tylko kilku informacji, żeby cię dodać. Dane adresowe przechowujemy tylko tak długo, jak to konieczne do zgłoszenia twojej firmy na mapy.",
	"business/maps::biz_maps_hero_subtitle":
		"Zgłoś swoją firmę bezpłatnie na BTC Map — otwarty światowy katalog sklepów akceptujących Bitcoina — aby Bitcoinerzy w okolicy mogli cię znaleźć i wydać u ciebie Bitcoiny.",
	"business/maps::biz_maps_hero_title":
		"Umieść swoją firmę na mapach sklepów Bitcoinowych",
	"business/maps::biz_maps_intro_c1":
		"Bitcoinerzy aktywnie szukają miejsc, gdzie mogą wydawać. Gdy twoja firma znajdzie się na mapie, zobaczy cię każdy użytkownik Bitcoina szukający w okolicy miejsca, gdzie zjeść, zrobić zakupy lub przenocować — całkowicie za darmo.",
	"business/maps::biz_maps_intro_c2":
		"Wystarczy wypełnić krótki formularz poniżej, a my zgłosimy twoją firmę na BTC Map i inne mapy sklepów Bitcoinowych.",
	"business/maps::biz_maps_meta_description":
		"Zgłoś swoją firmę bezpłatnie na BTC Map i inne mapy sklepów Bitcoinowych, aby Bitcoinerzy w okolicy mogli cię znaleźć.",
	"business/maps::biz_maps_placeholder_address": "Ulica i numer",
	"business/maps::biz_maps_placeholder_category":
		"Kategoria (np. restauracja, kawiarnia, hotel)",
	"business/maps::biz_maps_placeholder_city": "Miasto",
	"business/maps::biz_maps_placeholder_country": "Kraj",
	"business/maps::biz_maps_placeholder_name": "Nazwa firmy",
	"business/maps::biz_maps_placeholder_region": "Województwo / region",
	"business/maps::biz_maps_placeholder_website": "Strona internetowa (opcjonalnie)",
	"business/maps::biz_maps_view_map_cta": "Zobacz BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Zobacz BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Dziękujemy za zgłoszenie firmy. Wkrótce dodamy cię do map sklepów Bitcoinowych.",
	"business/maps-success::biz_maps_success_hero_title": "Zgłoszenie przyjęte 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Twoja firma zostanie dodana do BTC Map i innych katalogów sklepów Bitcoinowych w ciągu 1–2 tygodni. Każde zgłoszenie sprawdzamy ręcznie, by mapy były dokładne.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Gdy wpis pojawi się na żywo, Bitcoinerzy w okolicy znajdą twoją firmę i przyjdą wydać u ciebie Bitcoiny.",
	"business/maps-success::biz_maps_success_timeline_header": "Co dalej",
	"business/maps-success::biz_maps_success_view_c1":
		"Czekając, zajrzyj na BTC Map i zobacz rosnącą sieć firm na całym świecie, które akceptują Bitcoina.",
	"business/maps-success::biz_maps_success_view_header": "Zobacz, gdzie się znajdziesz",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Pobierz angielskie pliki naklejek, by wydrukować własne naklejki „Akceptujemy Bitcoina”.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Wydrukuj własne naklejki „Akceptujemy Bitcoina” po angielsku, aby dać klientom znać, że akceptujesz Bitcoina.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Pobierz angielskie pliki naklejek „Akceptujemy Bitcoina”",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Dziękujemy za zamówienie plików naklejek „Akceptujemy Bitcoina” w twoim języku.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Zgłoszenie przyjęte 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Stworzymy i opublikujemy twoje pliki naklejek w ciągu 3–4 tygodni. Gdy będą gotowe, będziesz mógł je pobrać i wydrukować bezpłatnie z naszej strony plików naklejek.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Pliki naklejek wydajemy partiami, więc twój język może iść na żywo dopiero po kilku tygodniach. Dziękujemy za cierpliwość!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Co dalej",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "Zamów hurtowo",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Poproś o kolejny darmowy zestaw",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Twoje darmowe naklejki „Akceptujemy Bitcoina” dotrą za 2–4 tygodnie w zwykłej białej kopercie z 3 naklejkami.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Twoje naklejki są w drodze 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Jeśli 3 naklejki to za mało dla twojej firmy, poproś o kolejny darmowy zestaw — albo zamów hurtowo u tej samej drukarni, której używamy my.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Potrzebujesz więcej naklejek?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na drzwiach wejściowych lub w witrynie, by klienci je zobaczyli przed wejściem",
	"business/sticker-success::biz_sticker_success_tip_2":
		"W okolicy kasy, terminala płatniczego lub miejsca płatności",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Na menu, cennikach lub puszkach na napiwki",
	"business/sticker-success::biz_sticker_success_tip_4":
		"NIE umieszczaj ich w miejscach, których nie posiadasz lub nie masz pozwolenia na umieszczenie naklejek",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Dobre miejsca na twoje naklejki",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Daj klientom znać, że akceptujesz Bitcoina. Zamów darmowy zestaw naklejek „Akceptujemy Bitcoina”, by powiesić je w swojej lokalizacji.",
	"business/stickers::biz_stickers_hero_title":
		"Darmowe naklejki „Akceptujemy Bitcoina”",
	"business/stickers::biz_stickers_intro_c1":
		"Akceptowanie Bitcoina to tylko połowa pracy — twoi klienci też muszą wiedzieć, że go akceptujesz. Te małe naklejki „Akceptujemy Bitcoina” są zaprojektowane tak, by przykleić je na drzwiach wejściowych, kasie, menu lub gdziekolwiek indziej, gdzie klienci je zobaczą przed zapłatą.",
	"business/stickers::biz_stickers_intro_c2":
		"Wyślemy ci darmowy zestaw w dowolne miejsce w USA lub Kanadzie, albo możesz wydrukować własne gdziekolwiek na świecie.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — darmowo pocztą",
	"business/stickers::biz_stickers_option_print":
		"🌍 Cały świat — wydrukuję własne",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 USA — darmowo pocztą",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Tłumaczenie wyrażenia „Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Tłumaczenie wyrażenia „Scan to learn why Bitcoin is good for business.”",
	"business/stickers::biz_stickers_print_c1":
		"Możesz wydrukować własne naklejki „Akceptujemy Bitcoina”, niezależnie od tego, gdzie mieszkasz. Kliknij swój język poniżej, aby pobrać pliki naklejek i instrukcje druku.",
	"business/stickers::biz_stickers_print_header":
		"Wydrukuj własne pliki naklejek",
	"business/stickers::biz_stickers_request_c1":
		"Wypełnij formularz poniżej, by zamówić pliki naklejek „Akceptujemy Bitcoina” w twoim lokalnym języku. Damy ci znać, gdy będą gotowe.",
	"business/stickers::biz_stickers_request_header": "Nie widzisz swojego języka?",
	"business/stickers::biz_stickers_step_description":
		"Darmowy zestaw wyślemy na adresy w USA i Kanadzie. W każdym innym miejscu na świecie możesz wydrukować własne.",
	"business/stickers::biz_stickers_step_header":
		"Jak chcesz zdobyć naklejki?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Wszystkie portfele Bitcoin są wzajemnie kompatybilne — wybierz ten, który pasuje do twojej firmy. Darmowy, natychmiastowe rozliczenie, bez chargebacków.",
	"business/wallets::sources_breez_business":
		"Breez — portfel Lightning tylko dla Bitcoina",
	"business/wallets::sources_ibex": "IBEX — infrastruktura płatności Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — procesor płatności Bitcoin",
	"business/wallets::sources_square": "Square — przyjmuj płatności w Bitcoinie",
	"business/wallets::sources_zaprite":
		"Zaprite — fakturowanie w Bitcoinie dla firm",
	"business/wallets::wallets_hero_subtitle":
		"Portfele Bitcoin są bezpłatne. Wybierz ten, który pasuje do twojej firmy — sprzedaż osobista, online lub fakturowanie — i zacznij akceptować Bitcoina w kilka minut.",
	"business/wallets::wallets_section_invoice":
		"Portfele dla firm fakturujących klientów",
	"business/wallets::wallets_section_invoice_intro":
		"Jeśli wystawiasz faktury klientom (doradztwo, freelancing, usługi B2B), użyj portfela zbudowanego wokół fakturowania. Klient zapłaci fakturę Bitcoinową kilkoma kliknięciami.",
	"business/wallets::wallets_section_multiple":
		"Portfele dla firm z wieloma pracownikami",
	"business/wallets::wallets_section_multiple_intro":
		"Jeśli masz zespół przyjmujący płatności w kasie, wybierz portfel obsługujący wiele logowań pracowników — każdy pracownik dostaje własny PIN, a ty masz przejrzysty zapis, kto przyjął jaką płatność.",
	"business/wallets::wallets_section_online": "Portfele dla biznesu online",
	"business/wallets::wallets_section_online_intro":
		"Sprzedajesz w sieci? Te portfele integrują się ze sklepem online i przyjmują Bitcoina od dowolnego klienta z dowolnego miejsca na świecie — bez chargebacków i bez konta sprzedawcy.",
	"business/wallets::wallets_section_sole":
		"Portfele dla firm jednoosobowych",
	"business/wallets::wallets_section_sole_intro":
		"Jeśli prowadzisz sklep, kawiarnię, studio lub usługę samodzielnie, każdy z tych portfeli wystarczy. Wybierz w zależności od tego, czy chcesz zachowywać płatności w Bitcoinie, czy automatycznie konwertować część każdej płatności na lokalną walutę.",
	"business/wallets::wallets_strike_note":
		"Strike Business pozwala akceptować płatności Bitcoin i Lightning z zerowymi opłatami i natychmiastowym rozliczeniem. Obsługuje płatności osobiste, online i fakturowe z opcjonalną automatyczną konwersją na twoją lokalną walutę.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business": "Akceptujemy Bitcoina",
	"business/why::why_good_for_you": "Dlaczego Bitcoin jest świetny także dla ciebie",
	"business/why::why_learn_more_lowercase": "Dowiedz się więcej →",
	"business/why::why_s1_c1":
		"Inflacja występuje, gdy drukuje się więcej pieniędzy lub tworzy je z powietrza. W rezultacie pieniądze w twojej kieszeni z czasem tracą wartość — i właśnie dlatego ceny rosną z roku na rok.",
	"business/why::why_s1_c2":
		"Bitcoin ma sztywną podaż 21 milionów monet. Żaden rząd, bank ani firma nie może wydrukować ich więcej. Twoje oszczędności w Bitcoinie zachowują wartość w czasie, zamiast cicho ją tracić.",
	"business/why::why_s2_c1":
		"W ostatnich latach kilka amerykańskich banków upadło z powodu runów na banki. Gdy zbyt wielu klientów chciało wypłacić pieniądze naraz, banki nie miały dość gotówki, by wszystkim wypłacić.",
	"business/why::why_s2_c2":
		"Zamiast po prostu trzymać twoje pieniądze, banki pożyczają i inwestują większość z nich. Jeśli te inwestycje się nie powiodą — albo deponenci stracą zaufanie — bank może upaść, a twoje depozyty mogą zostać zamrożone lub stracone.",
	"business/why::why_s2_c3":
		"Z Bitcoinem możesz trzymać swoje pieniądze bezpośrednio we własnym portfelu. Bez banku. Bez pośrednika. Bez runu na bank.",
	"business/why::why_s3_c1":
		"W przeciwieństwie do kart kredytowych, PayPala czy tradycyjnych kont bankowych, Bitcoin nie wymaga niczyjego pozwolenia.",
	"business/why::why_s3_c2":
		"Nikt nie może zamrozić twojego konta, zablokować płatności ani odciąć cię od sieci. To pierwszy w historii system finansowy, z którego możesz korzystać swobodnie, bez strachu przed cenzurą czy konfiskatą.",
	"business/why::why_s4_c1":
		"Bitcoin jest często niezrozumiany, ale po cichu robi w świecie wiele dobrego.",
	"business/why::why_s4_c2":
		"Pomógł obrońcom praw człowieka walczyć o wolność, ograniczył globalne emisje metanu z wysypisk i pól naftowych, ustabilizował sieci elektryczne oraz finansował dobra publiczne, takie jak parki narodowe.",
	"business/why::why_biz_s1": "Niższe opłaty, więcej dla firmy",
	"business/why::why_biz_s1_c1":
		"Płatności Bitcoin omijają banki i firmy kartowe, które biorą 2–3% z każdej sprzedaży. Firma zachowuje więcej z tego, co płacisz — co często oznacza lepsze ceny i lepszą obsługę dla ciebie.",
	"business/why::why_biz_s2": "Natychmiastowe rozliczenie, bez chargebacków",
	"business/why::why_biz_s2_c1":
		"Płatności Bitcoinowe rozliczają się w sekundy, bezpośrednio z twojego portfela do firmy. Bez czekania dniami, aż bank uwolni środki, bez kosztownych sporów o chargebacki — firma może skupić się na klientach zamiast na walce z oszustwami.",
	"business/why::why_biz_s3": "Akceptowanie za darmo, otwarte dla wszystkich",
	"business/why::why_biz_s3_c1":
		"Aby akceptować Bitcoina, firma nie płaci żadnych umów, miesięcznych opłat ani kosztów uruchomienia. A miliony użytkowników Bitcoina na całym świecie aktywnie szukają sklepów, które go akceptują — co daje tej firmie darmową ekspozycję na nowych klientów.",
	"business/why::why_business_cta_intro":
		"Prowadzisz firmę i chcesz zacząć akceptować Bitcoina?",
	"business/why::why_business_cta_link": "Zobacz, jak to działa →",
	"business/why::why_for_business": "Dlaczego Bitcoin jest świetny dla tej firmy",
	"business/why::why_for_business_intro":
		"Akceptując Bitcoina, firma zachowuje więcej z każdej sprzedaży, otrzymuje płatność natychmiast bez chargebacków i dociera do globalnej publiczności użytkowników Bitcoina — to wszystko bez umów i miesięcznych opłat.",
	"business/why::why_good_for_you_intro":
		"Bitcoin jest użyteczny nie tylko przy kasie — to lepsza forma pieniędzy, która chroni twoje oszczędności, prywatność i wolność transakcji. Oto krótki przegląd.",
	"business/why::why_hero_subtitle":
		"Właśnie zeskanowałeś naklejkę „Akceptujemy Bitcoina”. Oto dlaczego to świetna wiadomość — dla tej firmy i dla ciebie.",
	"business/why::why_intro_c1":
		"Firma, w której się znajdujesz, akceptuje Bitcoina — nowoczesną, otwartoźródłową sieć płatności, z której każdy może korzystać w dowolnym miejscu na świecie, bez prowizji dla banków i pośredników.",
	"business/why::why_intro_c2":
		"Poniżej krótka wersja, dlaczego akceptowanie Bitcoina jest dobre dla tej firmy, plus dlaczego korzystanie z Bitcoina jest dobre dla ciebie jako klienta.",
	"business/why::why_next_business_label": "AKCEPTUJ BITCOINA",
	"business/why::why_next_business_title":
		"Akceptuj Bitcoina w swojej firmie",
	"business/why::why_next_buy_label": "KUP BITCOINA",
	"business/why::why_next_buy_title": "Kup swojego pierwszego Bitcoina",
	"business/why::why_next_learn_label": "DOWIEDZ SIĘ WIĘCEJ",
	"business/why::why_next_learn_title": "Dowiedz się więcej o Bitcoinie",
	"business/why::why_next_wallet_label": "ZAŁÓŻ PORTFEL",
	"business/why::why_next_wallet_title": "Załóż własny portfel Bitcoin",
	"business/why::why_whats_next_heading": "Co dalej?",
	"business/why::why_whats_next_intro":
		"Jeśli to twoje pierwsze zeskanowanie naklejki Bitcoinowej, oto najbardziej przydatne miejsca, gdzie warto się udać dalej.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_platform_feature_auto_invest": "Auto-inwestycje",
	"buy::buy_platform_feature_bitcoin_only": "Tylko Bitcoin",
	"buy::buy_platform_feature_european": "Europejski",
	"buy::buy_bitcoin_guide": "Jak kupić Bitcoina",
	"buy::buy_step_1_header": "Wybierz swój kraj",
	"buy::buy_step_2_header": "Wybierz metodę płatności",
	"buy::buy_step_3_header": "Twoje opcje zakupu",
	"buy::buy_step_4_header": "Bezpiecznie przechowuj Bitcoina",
	"buy::buy_header_subtitle":
		"Prosty, krok po kroku przewodnik, jak kupić swojego pierwszego Bitcoina.",
	"buy::buy_howto_name": "Jak kupić Bitcoina",
	"buy::buy_meta_description":
		"Naucz się bezpiecznie kupować Bitcoina dzięki naszemu przewodnikowi krok po kroku. Wybierz kraj i metodę płatności, by znaleźć najlepsze opcje zakupu Bitcoina dla siebie.",
	"buy::buy_step_1_eyebrow": "Krok 1",
	"buy::buy_step_2_eyebrow": "Krok 2",
	"buy::buy_step_3_eyebrow": "Krok 3",
	"buy::buy_step_4_eyebrow": "Krok 4",
	"buy::buy_storage_cta_label": "Następny krok",
	"buy::sources_bisq":
		"Bisq — zdecentralizowana giełda Bitcoina peer-to-peer",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — światowy katalog bankomatów Bitcoin",
	"buy::sources_kraken": "Kraken — uznana giełda Bitcoinowa",
	"buy::sources_relai":
		"Relai — szwajcarska aplikacja do samodzielnej kustodii Bitcoina",
	"buy::sources_river":
		"River — zakup, wydobycie i przechowywanie tylko Bitcoina",
	"buy::sources_strike_lightning":
		"Strike — zakup Bitcoina ze wsparciem Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — uśrednianie kosztu zakupu (DCA) tylko dla Bitcoina",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Dodaj język",
	"common::common_next_buy_bitcoin": "Kup Bitcoina",
	"common::common_next_buy_bitcoin_desc":
		"Naucz się, jak bezpiecznie kupić Bitcoina",
	"common::common_next_calculate": "Oblicz swoją inflację",
	"common::common_next_calculate_desc":
		"Zobacz, jak inflacja wpływa na twoją pensję w czasie",
	"common::common_next_get_wallet": "Załóż portfel",
	"common::common_next_get_wallet_desc":
		"Załóż swój pierwszy portfel Bitcoin — jest darmowy",
	"common::common_next_keep_learning": "Ucz się dalej",
	"common::common_next_keep_learning_desc":
		"Zobacz, jak Bitcoin czyni świat lepszym",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — wskaźnik cen towarów i usług konsumpcyjnych (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — podaż pieniądza (indeks kategoryczny)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Czy aukcja obligacji skarbowych może zawieść?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Co dalej?",
	"common::common_sticker_files_mission_5": "zamówić zestaw",
	"common::common_site_tagline": "Edukacja Bitcoinowa dla każdego.",
	"common::common_source_btc_map":
		"BTC Map — światowy katalog sklepów akceptujących Bitcoina",
	"common::common_source_btcpayserver":
		"BTCPay Server — darmowy, otwartoźródłowy, samohostowany procesor płatności Bitcoin",
	"common::common_source_oshi":
		"Oshi — platforma nagród Bitcoinowych dla sprzedawców",
	"common::common_source_strike_business":
		"Strike — płatności Bitcoin i Lightning dla firm",
	"common::common_sources_group_bitcoin": "Dane o Bitcoinie",
	"common::common_sources_group_cpi":
		"Inflacja / wskaźnik cen konsumpcyjnych",
	"common::common_sources_group_debt": "Dług publiczny",
	"common::common_sources_group_money": "Dane o podaży pieniądza",
	"common::common_sources_group_stories": "Przykłady z życia",
	"common::common_sticker_files_mission_6": "darmowych angielskich naklejek.",
	"common::common_sticker_files_next_flyers_label": "Ulotki",
	"common::common_sticker_files_next_flyers_title":
		"Wydrukuj ulotkę o Bitcoinie",
	"common::common_sticker_files_next_languages_label": "Pliki naklejek",
	"common::common_sticker_files_next_languages_title":
		"Zobacz pliki naklejek w innych językach",
	"common::common_sticker_files_print_these": "WYDRUKUJ ZA 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"Naklejka „Bitcoin Doesn\u2019t Have Inflation” (czarna)",
	"common::common_sticker_name_bdhi_orange":
		"Naklejka „Bitcoin Doesn\u2019t Have Inflation” (pomarańczowa)",
	"common::common_sticker_name_caution":
		"Naklejka Bitcoin „Caution! Melting Ice Cube”",
	"common::common_sticker_name_cure_inflation":
		"Naklejka Bitcoin „Cure Inflation”",
	"common::common_sticker_name_danger":
		"Naklejka Bitcoin „Danger! Inflation Ahead”",
	"common::common_sticker_name_fix":
		"Naklejka Bitcoin „Fix The Money, Fix The World”",
	"common::common_sticker_name_got_inflation":
		"Naklejka Bitcoin „Got Inflation?”",
	"common::common_sticker_name_study": "Naklejka „Study Bitcoin”",
	"common::common_sticker_name_warning":
		"Naklejka Bitcoin „Warning! Inflation is Stealing Your Savings”",
	"common::common_sticker_name_what_if":
		"Naklejka Bitcoin „What if your money didn\u2019t have inflation?”",
	"common::common_sticker_tips_heading": "Wskazówki dotyczące naklejek",
	"common::common_sticker_tips_intro":
		"Gdy wydrukujesz naklejki, umieść je tam, gdzie ludzie je zobaczą! Dobre miejsca to:",
	"common::common_sticker_tips_list_1":
		"miejsca publiczne, gdzie ludzie je zauważą",
	"common::common_sticker_tips_list_2":
		"miejsca, skąd raczej nie zostaną od razu usunięte (naklejki nie powodują trwałych uszkodzeń)",
	"common::common_sticker_tips_list_3":
		"powierzchnie, na których dobrze się trzymają (metal, plastik, szkło)",
	"common::common_sticker_tips_list_4":
		"NIE na prywatnej własności, znakach drogowych, bankomatach ani dystrybutorach paliwa",
	"common::common_stickers_printer_prefix": "My używamy",
	"common::common_stickers_printer_suffix":
		"ale możesz użyć dowolnej drukarni naklejek.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — wskaźnik cen towarów i usług konsumpcyjnych dla wszystkich konsumentów miejskich",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — podaż pieniądza M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Oblicz swoją lukę inflacyjną",
	"compound-inflation-calculator::cic_cta_label": "Następny krok",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Sprawdź, o ile musi wzrosnąć twoja pensja, by nadążyć za inflacją.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Poznaj więcej tematów",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Zobacz, jak Bitcoin łączy się z pieniądzem, wolnością, energią i innymi tematami.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Naucz się, jak działa inflacja",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Jak wydrukować i powiesić te ulotki Bitcoinowe",
	"flyers::flyers_hero_subtitle":
		"Darmowe ulotki Bitcoinowe do druku. Wieszaj je w miejscach publicznych, by więcej osób dowiedziało się o Bitcoinie.",
	"flyers::flyers_hero_title": "Drukuj i wieszaj ulotki Bitcoinowe",
	"flyers::flyers_next_get_stickers": "Szerz wieść",
	"flyers::flyers_next_get_stickers_desc":
		"Zamów darmowy zestaw naklejek Bitcoinowych",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Zaangażuj się i szerz Bitcoina",
	"get-involved::get_involved_business_content_1":
		"Chcesz pomóc budować bitcoinową gospodarkę cyrkulacyjną? Najprostszy sposób to pomóc lokalnym firmom zacząć przyjmować płatności Bitcoinowe.",
	"get-involved::get_involved_business_content_2":
		"Znasz firmę, która byłaby otwarta na ten krok? Skieruj właściciela na naszą",
	"get-involved::get_involved_business_content_3":
		"stronę Bitcoin dla biznesu.",
	"get-involved::get_involved_description":
		"Nasze darmowe zasoby ułatwiają szerzenie adopcji Bitcoina. Naklejki, ulotki, naklejki „Akceptujemy Bitcoina” dla firm i otwartoźródłowy kod, do którego każdy może się przyczynić.",
	"get-involved::get_involved_header": "Zaangażuj się i szerz Bitcoina.",
	"get-involved::get_involved_intro_5":
		"Możesz pomóc to zmienić. Stworzyliśmy kilka darmowych zasobów, które ułatwiają szerzenie nadziei niesionej przez Bitcoina w twoim otoczeniu.",
	"get-involved::get_involved_biz_stickers_note":
		"Już akceptujesz Bitcoina? Daj klientom znać dzięki naszym darmowym naklejkom „Akceptujemy Bitcoina”. Wyślemy zestaw na dowolny adres w USA lub Kanadzie, albo możesz wydrukować własne gdziekolwiek na świecie.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Naklejki „akceptujemy tutaj”",
	"get-involved::get_involved_card_biz_stickers_source":
		"Źródło: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Darmowe naklejki „Akceptujemy Bitcoina” dla twojej firmy",
	"get-involved::get_involved_card_business_label": "Bitcoin dla firm",
	"get-involved::get_involved_card_business_source": "Źródło: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Wszystko, czego firma potrzebuje, by zacząć przyjmować płatności w Bitcoinie",
	"get-involved::get_involved_card_flyers_label": "Ulotki do druku",
	"get-involved::get_involved_card_flyers_source": "Źródło: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Pobierz i wydrukuj darmową ulotkę Bitcoinową",
	"get-involved::get_involved_card_github_label": "Otwarte źródło",
	"get-involved::get_involved_card_github_source": "Źródło: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Wnieś wkład do bitcoin.rocks na GitHubie",
	"get-involved::get_involved_card_stickers_label": "Darmowe naklejki",
	"get-involved::get_involved_card_stickers_source":
		"Źródło: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Zamów darmowy zestaw naklejek Bitcoinowych prosto pod swoje drzwi",
	"get-involved::get_involved_flyers_content_1":
		"Ulotki to jeden z najprostszych sposobów na przedstawienie Bitcoina swojej społeczności. Pobierz darmową ulotkę Bitcoinową do druku, wydrukuj tyle kopii, ile chcesz, i powieś je na tablicach społeczności, w kawiarniach, na spotkaniach lub gdziekolwiek indziej, gdzie ludzie się gromadzą.",
	"get-involved::get_involved_flyers_content_2":
		"Każda ulotka zawiera chwytliwy nagłówek i kod QR, który prowadzi ciekawskich czytelników na bitcoin.rocks, by dowiedzieli się więcej.",
	"get-involved::get_involved_flyers_content_3":
		"W przeciwieństwie do naklejek, ulotki można drukować na żądanie z dowolnego miejsca na świecie — wystarczy ci drukarka i kilka minut.",
	"get-involved::get_involved_flyers_header": "Wydrukuj i powieś ulotkę",
	"get-involved::get_involved_flyers_image_alt":
		"Podgląd darmowej ulotki Bitcoinowej do druku z bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks to bezpłatny projekt open source na licencji MIT. Naszą misją jest przyspieszanie adopcji Bitcoina przez edukację — i sami tego nie zrobimy.",
	"get-involved::get_involved_github_content_2":
		"Niezależnie od tego, czy jesteś deweloperem, projektantem, copywriterem czy tłumaczem, jest sposób, w jaki możesz pomóc. Szczególnie zapraszamy współtwórców, którzy potrafią przetłumaczyć nasze treści na inne języki, by ludzie na całym świecie mogli uczyć się o Bitcoinie w swoim ojczystym języku.",
	"get-involved::get_involved_github_content_3":
		"Forkuj repozytorium, otwórz pull request, załóż issue lub po prostu wesprzyj projekt gwiazdką. Każdy wkład pomaga Bitcoinowi dotrzeć do większej liczby osób.",
	"get-involved::get_involved_github_header": "Wnieś wkład na GitHubie",
	"get-involved::get_involved_sticker_image_alt":
		"Zestaw darmowych tekstowych naklejek Bitcoinowych z bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "oszczędzanie",
	"index::home_card_label_art_1": "Porównajmy",
	"index::home_card_label_art_2": "Szerz wieść",
	"index::home_card_label_art_3": "Sztuka uliczna",
	"index::home_card_label_bank_runs": "System pełnej rezerwy",
	"index::home_card_label_bonds": "Porównajmy",
	"index::home_card_label_business_1": "Jaka jest różnica?",
	"index::home_card_label_business_2": "Akceptuj płatności Bitcoin",
	"index::home_card_label_cash": "Porównajmy",
	"index::home_card_label_cbdc": "Otwarty czy zamknięty?",
	"index::home_card_label_coding_1": "Interaktywny tutorial",
	"index::home_card_label_coding_2": "Buduj sprzęt",
	"index::home_card_label_coding_3": "Zadania programistyczne",
	"index::home_card_label_crowdfunding_1": "Protesty EndSARS",
	"index::home_card_label_crowdfunding_2": "Niezatrzymywalne pieniądze",
	"index::home_card_label_crowdfunding_3": "Sfinansuj swój projekt",
	"index::home_card_label_crypto": "Jaka jest różnica?",
	"index::home_card_label_energy_1": "Stabilizacja sieci",
	"index::home_card_label_energy_4": "Zarządzanie popytem",
	"index::home_card_label_energy_5": "Elektryfikacja wsi",
	"index::home_card_label_energy_6": "Bodźce dla OZE",
	"index::home_card_label_environment_1": "Redukcja metanu",
	"index::home_card_label_environment_2": "Uratował park narodowy",
	"index::home_card_label_environment_3": "Najzieleńsza branża",
	"index::home_card_label_environment_4": "Zmniejsza spalany gaz",
	"index::home_card_label_equality_1": "Nadzieja i szansa",
	"index::home_card_label_equality_2": "Wielki przełom",
	"index::home_card_label_food_1": "Ceny żywności",
	"index::home_card_label_food_2": "Rolnictwo i ziemia",
	"index::home_card_label_freedom_1": "Reżimy autorytarne",
	"index::home_card_label_freedom_2": "Wyjątkowe narzędzie",
	"index::home_card_label_get_started_1": "Podstawy dla początkujących",
	"index::home_card_label_get_started_2": "Twój pierwszy portfel",
	"index::home_card_label_get_started_3": "Kup Bitcoina",
	"index::home_card_label_gold": "Co jest lepsze?",
	"index::home_card_label_housing_1": "Dostępne mieszkania",
	"index::home_card_label_human_rights_1": "Wspieranie praw człowieka",
	"index::home_card_label_human_rights_2": "Adopcja oddolna",
	"index::home_card_label_human_rights_3": "Globalny wpływ",
	"index::home_card_label_inflation": "Bitcoin to lepszy pieniądz",
	"index::home_card_label_networks_1": "Sieć na żywo",
	"index::home_card_label_networks_2": "Porównajmy",
	"index::home_card_label_payments_1": "Jaka jest różnica?",
	"index::home_card_label_payments_2": "Szybkie i tanie płatności",
	"index::home_card_label_payments_3": "Przekazy zagraniczne",
	"index::home_card_label_payments_4": "Akceptuj płatności",
	"index::home_card_label_politics_1": "Polityczny paradoks",
	"index::home_card_label_politics_2": "Działaj",
	"index::home_card_label_property_rights_1": "Porównajmy",
	"index::home_card_label_property_rights_2": "Prawdziwa własność",
	"index::home_card_label_salary": "Chroń swoją pensję",
	"index::home_card_label_self_custody_1": "Przewodnik po portfelach Bitcoin",
	"index::home_card_label_self_custody_2": "Najważniejszy krok",
	"index::home_card_label_self_custody_3": "Suwerenne pieniądze",
	"index::home_card_label_war_1": "Koniec wiecznej wojny",
	"index::home_card_label_war_2": "Pomoc weteranom",
	"index::home_card_label_war_3": "Ucieczka od wojny",
	"index::home_h1":
		"Bitcoin to lepsze pieniądze, które budują lepszy świat.",
	"index::home_nav_about": "O nas",
	"index::home_nav_get_involved": "Zaangażuj się",
	"index::home_nav_learn": "Ucz się",
	"index::home_source_prefix": "Źródło:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon i Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Zobacz nasz",
	"lightning::lightning_grid_heading": "Popularne portfele Lightning",
	"lightning::lightning_hardware_cta_label": "Portfele sprzętowe",
	"lightning::lightning_header_subtitle":
		"Lightning pozwala wysyłać Bitcoina w sekundy za ułamek grosza — wybierz portfel, którego kompromisy odpowiadają temu, ile Bitcoina planujesz wydawać.",
	"lightning::lightning_s1_c4_end": "po więcej informacji.",
	"lightning::lightning_s1_c4_link":
		"Przewodnik po portfelach sprzętowych Bitcoin",
	"lightning::sources_acinq_phoenix": "ACINQ — portfel Phoenix Lightning",
	"lightning::sources_breez_lightning":
		"Breez — portfel Lightning z samodzielną kustodią",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentacja Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — kustodialny portfel Lightning",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android i web",
	"nostr/index::nostr_platform_web": "Przeglądarka internetowa",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr to nowy zdecentralizowany protokół komunikacji online — nie kontroluje go żadna firma, Bitcoinowe „zapy” są wbudowane natywnie, a klientów można zmieniać bez utraty obserwujących.",
	"nostr/index::nostr_amethyst_f1": "Wiele funkcji i personalizacji",
	"nostr/index::nostr_amethyst_f2": "Wymaga osobnego portfela Bitcoin",
	"nostr/index::nostr_amethyst_f3": "100% za darmo",
	"nostr/index::nostr_damus_f1": "Znajomy interfejs w stylu Twittera",
	"nostr/index::nostr_damus_f2": "Wymaga osobnego portfela Bitcoin",
	"nostr/index::nostr_damus_f3": "100% za darmo",
	"nostr/index::nostr_download_heading": "Pobierz darmowego klienta Nostr",
	"nostr/index::nostr_download_intro":
		"Klienci Nostr to darmowe aplikacje, które pozwalają czytać i publikować w sieci Nostr. Wszyscy są wzajemnie kompatybilni — możesz w każdej chwili przełączyć klienta i zachować obserwujących i treści.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr to nowy zdecentralizowany protokół komunikacji online — nie kontroluje go żadna firma, Bitcoinowe zapy są wbudowane, a aplikacje można zmieniać bez utraty obserwujących.",
	"nostr/index::nostr_hero_title": "Czym jest Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr przypomina e-mail: nikt nie jest właścicielem protokołu, każdy może zbudować na nim aplikację, a ty wybierasz tę, która ci najbardziej odpowiada. W przeciwieństwie do Twittera czy Facebooka nie ma centralnej firmy, która mogłaby cię cenzurować, banować lub uciszać.",
	"nostr/index::nostr_intro_c2":
		"Poniżej krótka wersja, dlaczego Nostr ma znaczenie — a potem każdy darmowy klient Nostr, którego potrzebujesz, by zacząć już dziś.",
	"nostr/index::nostr_iris_f1":
		"Niezwykle proste — instalacja niepotrzebna",
	"nostr/index::nostr_iris_f2":
		"Łatwy sposób, by spróbować Nostr na koncie testowym",
	"nostr/index::nostr_iris_f3": "100% za darmo",
	"nostr/index::nostr_learn_more_label": "WEJDŹ GŁĘBIEJ",
	"nostr/index::nostr_learn_more_title":
		"Dowiedz się więcej o Nostr na nostr.how",
	"nostr/index::nostr_primal_f1": "Zalecany pierwszy klient",
	"nostr/index::nostr_primal_f2":
		"Wbudowany portfel zapów Bitcoin",
	"nostr/index::nostr_primal_f3": "100% za darmo",
	"nostr/index::nostr_s1": "Protokół, nie platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr to nowy protokół, który pozwala komunikować się online bez strachu przed cenzurą, banem czy uciszeniem.",
	"nostr/index::nostr_s1_c2":
		"Platformy takie jak Twitter i Facebook są kontrolowane przez jedną firmę, ale protokołu Nostr nie kontroluje nikt.",
	"nostr/index::nostr_s2": "Wolność przemieszczania się",
	"nostr/index::nostr_s2_c1":
		"Nostr przypomina e-mail. Nikt nie kontroluje protokołu e-mail, a każdy może zbudować klienta na nim (np. Gmail, Hotmail itd.).",
	"nostr/index::nostr_s2_c2":
		"Protokołu Nostr także nikt nie kontroluje, a każdy może zbudować na nim klienta (np. Damus, Amethyst itd.).",
	"nostr/index::nostr_s2_c3":
		"Jeśli nie podoba ci się działanie konkretnego klienta, możesz płynnie przenieść swoje konto Nostr do innego klienta, nie tracąc obserwujących ani treści.",
	"nostr/index::nostr_s3": "Bitcoin jest wbudowany",
	"nostr/index::nostr_s3_c1":
		"Bitcoin jest natywnie wbudowany w protokół Nostr. Gdy zobaczysz treść, która ci się podoba, możesz łatwo wysłać autorowi „Bitcoinowy zap” w podziękowaniu!",
	"nostr/index::nostr_s3_c2":
		"Na scentralizowanych platformach takich jak Twitter i Facebook centralna firma zarabia na twoich treściach. Ale na otwartych protokołach takich jak Nostr to ty zarabiasz na swoich treściach.",
	"nostr/index::sources_damus": "Damus — klient Nostr na iPhone",
	"nostr/index::sources_iris": "Iris — klient Nostr w przeglądarce",
	"nostr/index::sources_nostr_how": "nostr.how — Czym jest Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — otwartoźródłowa specyfikacja",
	"nostr/index::sources_primal":
		"Primal — klient Nostr z wbudowanym portfelem zapów Bitcoin",
	"nostr/index::what_is_nostr": "Czym jest Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Wydrukuj własne naklejki Bitcoinowe za pomocą tych plików.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Zgłoszenie przyjęte 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Zamów hurtowo",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Udostępnij na Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Czym jest Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Potrzebujesz więcej naklejek?",
	"sticker-success::sticker_success_hero_title":
		"Twoje naklejki są w drodze 🎉",
	"sticker-success::sticker_success_share_header":
		"Podziel się miejscami, gdzie powiesiłeś naklejki",
	"sticker-success::sticker_success_tips_header": "Dobre miejsca na naklejki",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoinie",
	"stickers::stickers_flyers_link_before":
		"A skoro już przy tym jesteś, wydrukuj i powieś własne",
	"stickers::stickers_instructions_1":
		"Wpisz swój adres pocztowy, a wyślemy ci darmowy zestaw naklejek Bitcoinowych pocztą. Twoje naklejki przyjdą w zwykłej białej kopercie.",
	"stickers::stickers_btn_choose_pack": "Wybierz ten zestaw",
	"stickers::stickers_bulk_c1": "Chcesz więcej niż kilka naklejek?",
	"stickers::stickers_bulk_c2":
		"Zamów je hurtowo u tej samej drukarni, której używamy my",
	"stickers::stickers_bulk_c3":
		"— im więcej kupisz, tym taniej za sztukę.",
	"stickers::stickers_bulk_cta": "Kup naklejki hurtowo",
	"stickers::stickers_bulk_header": "Zamów naklejki hurtowo",
	"stickers::stickers_hero_subtitle":
		"Zamów darmowy zestaw naklejek Bitcoinowych i powieś je w miejscach publicznych, by więcej osób dowiedziało się o Bitcoinie.",
	"stickers::stickers_hero_title": "Darmowe naklejki Bitcoinowe",
	"stickers::stickers_intro_c1":
		"Naszą misją jest pomagać ci „pomarańczowić” więcej osób, umieszczając naklejki Bitcoinowe w miejscach publicznych. Wszystkie nasze naklejki mają kody QR, które prowadzą do stron edukacyjnych o",
	"stickers::stickers_intro_c3": "inflacji",
	"stickers::stickers_intro_c4":
		"Wybierz zestaw naklejek poniżej i wybierz, jak chcesz je zdobyć — wyślemy darmowy zestaw każdemu w USA lub Kanadzie, albo możesz wydrukować własne gdziekolwiek na świecie.",
	"stickers::stickers_mail_header":
		"Wyślemy ci naklejki za darmo pocztą",
	"stickers::stickers_next_print_flyers": "Przekazuj dalej",
	"stickers::stickers_next_print_flyers_desc":
		"Wydrukuj darmowe ulotki Bitcoinowe i powieś je publicznie",
	"stickers::stickers_option_bulk": "📦 Cały świat — zamów hurtowo",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — darmowo pocztą",
	"stickers::stickers_option_print":
		"🌍 Cały świat — wydrukuję własne",
	"stickers::stickers_option_usa": "🇺🇸 USA — darmowo pocztą",
	"stickers::stickers_print_c1":
		"Możesz pomóc, drukując własne naklejki niezależnie od tego, gdzie mieszkasz. Kliknij swój język poniżej, aby pobrać pliki naklejek i instrukcje druku.",
	"stickers::stickers_print_c2":
		"Nie każda naklejka jest dostępna we wszystkich językach.",
	"stickers::stickers_print_header":
		"Wydrukuj własne pliki naklejek",
	"stickers::stickers_request_c1":
		"Wypełnij formularz poniżej, by zamówić pliki naklejek w twoim lokalnym języku. Damy ci znać, gdy będą gotowe.",
	"stickers::stickers_request_header": "Nie widzisz swojego języka?",
	"stickers::stickers_share_c2":
		"Obserwuj nas na Nostr, wyszukując",
	"stickers::stickers_share_c3":
		"w dowolnym kliencie Nostr.",
	"stickers::stickers_signs_pack_description":
		"Tablice ostrzegawcze, znaki uwagi i alerty z bitcoinowym przesłaniem — zaprojektowane, by zwracały uwagę i zmuszały do zatrzymania się i przeczytania.",
	"stickers::stickers_step_1_description":
		"Każdy zestaw zawiera inny zestaw naklejek Bitcoinowych z kodami QR, które uczą ludzi o Bitcoinie.",
	"stickers::stickers_step_1_eyebrow": "KROK 1",
	"stickers::stickers_step_1_header": "Wybierz zestaw naklejek",
	"stickers::stickers_step_2_description":
		"Darmowy zestaw wyślemy na adresy w USA i Kanadzie. W każdym innym miejscu na świecie możesz wydrukować własne lub zamówić hurtowo.",
	"stickers::stickers_step_2_eyebrow": "KROK 2",
	"stickers::stickers_step_2_header": "Jak chcesz zdobyć naklejki?",
	"stickers::stickers_text_pack_description":
		"Mieszanka bitcoinowych haseł i jednolinijkowców mających wzbudzić ciekawość w przestrzeniach publicznych.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Wybierz portfel",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — recenzje metalowych przechowalni do seedu Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — portfel Bitcoin z samodzielną kustodią",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — sprzętowy portfel Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — sprzętowy portfel Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — sprzętowy portfel Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — sprzętowy portfel Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — otwartoźródłowe DIY-owe urządzenie do podpisywania transakcji Bitcoin",
	"wallets::wallets_grid_heading": "Popularne portfele Bitcoin",
	"wallets::wallets_header_subtitle":
		"Przewodnik krok po kroku, jak wybrać portfel, chronić klucze i przejąć pełną kontrolę nad swoim Bitcoinem.",
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
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (pl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50) console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
