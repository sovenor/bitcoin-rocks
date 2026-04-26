#!/usr/bin/env node
/**
 * Romanian (ro) manifest refresh — non-inflation namespaces, part 2.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 * get-involved, index, lightning, nostr/index, sticker-files/index,
 * sticker-language-success, sticker-success, stickers, wallets.
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
	"ro.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "PREȚUL BITCOIN",
	"business/accounting::accounting_card_bpr_source":
		"Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Caută prețul actual sau istoric al Bitcoin în dolari",
	"business/accounting::accounting_card_pacioli_label":
		"CONTABIL BITCOIN",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Servicii de contabilitate Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORT EXCEL",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Importă automat prețurile Bitcoin în Excel",
	"business/accounting::accounting_card_wallets_label":
		"PORTOFELE HIBRIDE",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Vezi portofelele de afaceri pe care le recomandăm",
	"business/accounting::accounting_description":
		"Un ghid simplu pentru introducerea Bitcoin în contabilitatea ta — portofele hibride, cost de bază, câștiguri de capital și când să suni un contabil.",
	"business/accounting::accounting_disclaimer":
		"Acest ghid este doar în scop informativ și nu constituie consultanță fiscală. Pentru sfaturi fiscale specifice situației tale, consultă un contabil calificat.",
	"business/accounting::accounting_disclaimer_label":
		"De reținut",
	"business/accounting::accounting_example_feb_1": "1 feb",
	"business/accounting::accounting_example_gain_badge": "Câștig de capital",
	"business/accounting::accounting_example_gain_explain":
		"Înregistrezi un câștig de capital de 10 dolari.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "1 ian",
	"business/accounting::accounting_example_loss_badge": "Pierdere de capital",
	"business/accounting::accounting_example_loss_explain":
		"Înregistrezi o pierdere de capital de 10 dolari.",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "Primit",
	"business/accounting::accounting_example_sold_label":
		"Vândut sau cheltuit",
	"business/accounting::accounting_hero_subtitle":
		"Acceptarea Bitcoin în afacerea ta nu trebuie să-ți complice contabilitatea. Iată versiunea scurtă — plus instrumentele și profesioniștii care o fac nedureroasă.",
	"business/accounting::accounting_intro_c1":
		"Dacă deja accepți numerar sau carduri, adăugarea Bitcoin în contabilitatea ta este mai simplă decât pare. Ai două căi: să convertești automat fiecare plată Bitcoin în dolari la sosire (nu este nevoie de evidență nouă) sau să păstrezi o parte ca Bitcoin (câteva numere în plus de urmărit).",
	"business/accounting::accounting_intro_c2":
		"Acest ghid te poartă prin amândouă — astfel încât să poți alege ce se potrivește afacerii tale și să începi să accepți Bitcoin cu încredere.",
	"business/accounting::accounting_s1":
		"Calea ușoară: conversie automată în dolari",
	"business/accounting::accounting_s1_c1":
		"Cea mai simplă modalitate de a accepta Bitcoin este cu un portofel hibrid care vinde automat 100% din Bitcoin-ul pe care îl primești în dolari (sau în moneda ta locală) chiar în momentul în care plata sosește.",
	"business/accounting::accounting_s1_c2":
		"Cu această configurație, contabilitatea ta arată exact ca azi — sume finale în dolari, de fiecare dată. Niciun cost de bază, niciun câștig de capital, niciun foaie de calcul nou.",
	"business/accounting::accounting_s2":
		"Dacă păstrezi o parte din Bitcoin: urmărirea costului de bază",
	"business/accounting::accounting_s2_c1":
		"Unele afaceri aleg să păstreze o parte din Bitcoin-ul pe care îl primesc în loc să convertească totul automat. Dacă tu ești unul dintre ei, pasul principal în plus este să urmărești costul tău de bază — valoarea în dolari a fiecărei plăți Bitcoin în ziua în care ai primit-o.",
	"business/accounting::accounting_s2_c2":
		"Chiar dacă îți gândești afacerea în întregime în Bitcoin, majoritatea autorităților fiscale tot vor să fie raportate valori în dolari. Vestea bună: doar două numere pe tranzacție — suma Bitcoin primită și valoarea ei în dolari în acea zi.",
	"business/accounting::accounting_s2_c3":
		"Folosește instrumentele de mai jos pentru a automatiza căutările, ca să nu trebuiască să verifici prețurile zilnic.",
	"business/accounting::accounting_s3":
		"Cheltuirea sau vânzarea Bitcoin pe care l-ai păstrat",
	"business/accounting::accounting_s3_c1":
		"Dacă convertești automat fiecare plată în dolari, sari peste această secțiune — nu se aplică ție.",
	"business/accounting::accounting_s3_c2":
		"Dacă păstrezi o parte din Bitcoin și apoi decizi să-l cheltuiești sau să-l vinzi, adaugă prețul de vânzare în aceeași foaie de calcul cu costul de bază. Diferența dintre cât valora Bitcoin-ul când l-ai primit și cât valorează când îl cheltuiești sau îl vinzi este un câștig sau o pierdere de capital.",
	"business/accounting::accounting_s3_c3": "Două exemple rapide:",
	"business/accounting::accounting_s3_c6":
		"Asta e tot. Matematica de bază este identică cu modul în care orice activ care se apreciază sau se depreciază este contabilizat.",
	"business/accounting::accounting_s4":
		"Ai nevoie de un profesionist care cunoaște Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Dacă preferi să încredințezi totul — sau contabilitatea ta Bitcoin este mai complexă decât poate gestiona un portofel hibrid — recomandăm cu căldură Servicii de contabilitate Satoshi Pacioli, o firmă specializată în contabilitate Bitcoin pentru afaceri.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Contabilitatea Bitcoin pentru afacerea ta",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Prețurile Bitcoin actuale și istorice în dolari",
	"business/accounting::sources_satoshi_pacioli":
		"Servicii de contabilitate Satoshi Pacioli — Contabilitate Bitcoin pentru afaceri",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Importă prețurile criptomonedelor în Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Răspunsuri rapide la întrebările pe care comercianții le pun cel mai des înainte de a începe să accepte Bitcoin — comisioane, decontare, portofele, chargeback-uri, costuri și altele.",
	"business/faq::faq_intro_c1":
		"Atinge orice întrebare de mai jos pentru a extinde răspunsul. Când ești gata să începi să accepți Bitcoin, resursele de afaceri din partea de jos a paginii te vor ghida pas cu pas.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "CONTABILITATE",
	"business/index::biz_label_faq": "ÎNTREBĂRI FRECVENTE",
	"business/index::biz_label_maps": "HARTA COMERCIANȚILOR",
	"business/index::biz_label_rewards": "RECOMPENSE",
	"business/index::biz_label_stickers": "AUTOCOLANTE",
	"business/index::biz_label_wallets": "PORTOFELE",
	"business/index::biz_meta_description":
		"Acceptă Bitcoin în afacerea ta pentru comisioane mai mici, decontare instantanee, fără chargeback-uri și mai mulți clienți.",
	"business/index::business_hero_subtitle":
		"Acceptă plăți cu comisioane mai mici, fii plătit instantaneu și ajunge la milioane de clienți noi — fără contracte și fără costuri ascunse.",
	"business/index::business_intro_c1":
		"Bitcoin oferă afacerii tale o modalitate mai rapidă, mai ieftină și mai privată de a fi plătită. Niciun intermediar. Niciun chargeback. Niciun contract. Doar bani care se decontează în câteva secunde, direct de la clientul tău la tine.",
	"business/index::business_intro_c2":
		"Mai jos, versiunea scurtă a motivului pentru care Bitcoin este bun pentru afaceri — iar dedesubt, fiecare resursă de care ai nevoie pentru a începe să-l accepți astăzi.",
	"business/index::business_resources_heading":
		"Tot ce îți trebuie pentru a accepta Bitcoin",
	"business/index::business_resources_intro":
		"Lucrează prin aceste resurse în ritmul tău. Fiecare este un ghid scurt și practic.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Spune-ne despre afacerea ta",
	"business/maps::biz_maps_form_intro":
		"Avem nevoie doar de câteva detalii pentru a te înregistra. Datele de adresă sunt păstrate doar suficient timp pentru a transmite afacerea ta la hartă.",
	"business/maps::biz_maps_hero_subtitle":
		"Înregistrează-ți gratuit afacerea pe BTC Map — directorul deschis al comercianților care acceptă Bitcoin în întreaga lume — astfel încât Bitcoinerii din apropiere să te poată găsi și să cheltuiască Bitcoin în afacerea ta.",
	"business/maps::biz_maps_hero_title":
		"Adaugă afacerea ta pe harta comercianților Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Bitcoinerii caută activ locuri unde să cheltuiască. Punerea afacerii tale pe hartă te plasează în fața fiecărui utilizator Bitcoin care caută un loc unde să mănânce, să cumpere sau să rămână peste noapte în apropiere — fără niciun cost pentru tine.",
	"business/maps::biz_maps_intro_c2":
		"Completează formularul scurt de mai jos și vom transmite afacerea ta la BTC Map și la alte hărți de comercianți Bitcoin în numele tău.",
	"business/maps::biz_maps_meta_description":
		"Înregistrează-ți gratuit afacerea pe BTC Map și alte hărți de comercianți Bitcoin, astfel încât Bitcoinerii din apropiere să te poată găsi.",
	"business/maps::biz_maps_placeholder_address": "Adresă",
	"business/maps::biz_maps_placeholder_category":
		"Categorie (ex. restaurant, cafenea, hotel)",
	"business/maps::biz_maps_placeholder_city": "Oraș",
	"business/maps::biz_maps_placeholder_country": "Țară",
	"business/maps::biz_maps_placeholder_name":
		"Numele afacerii",
	"business/maps::biz_maps_placeholder_region":
		"Județ / Regiune",
	"business/maps::biz_maps_placeholder_website":
		"Site web (opțional)",
	"business/maps::biz_maps_view_map_cta": "Vezi BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"Vezi BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Mulțumim că ne-ai trimis afacerea ta. Curând o vom adăuga pe hărțile comercianților Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Cerere primită 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Afacerea ta va fi listată pe BTC Map și alte directoare ale comercianților Bitcoin în decurs de 1–2 săptămâni. Examinăm manual fiecare trimitere pentru a păstra hărțile precise.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Odată ce listarea ta este activă, Bitcoinerii din apropiere îți pot descoperi afacerea și pot veni să cheltuiască Bitcoin acolo.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Ce urmează",
	"business/maps-success::biz_maps_success_view_c1":
		"Cât timp aștepți, aruncă o privire pe BTC Map ca să vezi rețeaua în creștere de afaceri care acceptă Bitcoin în întreaga lume.",
	"business/maps-success::biz_maps_success_view_header":
		"Vezi unde vei apărea",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Descarcă fișierele autocolantelor în engleză pentru a-ți tipări propriile autocolante „Bitcoin acceptat aici”.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Tipărește-ți propriile autocolante „Bitcoin acceptat aici” în engleză pentru a-ți anunța clienții că accepți Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Descarcă fișierele autocolantelor „Bitcoin acceptat aici” în engleză",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Mulțumim că ai cerut fișierele autocolantelor „Bitcoin acceptat aici” în limba ta.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Cerere primită 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vom crea și publica fișierele autocolantelor tale în decurs de 3–4 săptămâni. Odată gata, le poți descărca și tipări gratuit de pe pagina noastră de fișiere ale autocolantelor.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Fișierele autocolantelor sunt eliberate în loturi, deci ar putea dura câteva săptămâni până ca limba ta să fie disponibilă. Mulțumim pentru răbdare!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Ce urmează",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Comandă în cantități mari",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Cere un alt pachet gratuit",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vei primi autocolantele gratuite „Bitcoin acceptat aici” în decurs de 2–4 săptămâni, într-un plic alb anonim ce conține 3 autocolante.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Autocolantele tale sunt pe drum 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Dacă 3 autocolante nu sunt suficiente pentru afacerea ta, simte-te liber să ceri un alt pachet gratuit — sau comandă în cantități mari de la aceeași tipografie pe care o folosim noi.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Ai nevoie de mai multe autocolante?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Pe ușa de intrare sau pe vitrină, ca să le vadă clienții înainte să intre",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Lângă casă, terminalul POS sau zona de plată",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Pe meniuri, liste de prețuri sau cutii pentru bacșiș",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Nu le lipi unde nu îți este permis sau nu ai dreptul să o faci",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Locuri bune pentru a-ți pune autocolantele",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Anunță-ți clienții că accepți Bitcoin. Comandă un pachet gratuit de autocolante „Bitcoin acceptat aici” pentru a le afișa în afacerea ta.",
	"business/stickers::biz_stickers_hero_title":
		"Autocolante gratuite „Bitcoin acceptat aici”",
	"business/stickers::biz_stickers_intro_c1":
		"Acceptarea Bitcoin este doar jumătate din muncă — clienții tăi trebuie să știe și ei. Aceste autocolante mici „Bitcoin acceptat aici” sunt proiectate să fie aplicate pe ușa de intrare, la casă, pe meniuri sau oriunde clienții le văd înainte să plătească.",
	"business/stickers::biz_stickers_intro_c2":
		"Îți vom expedia un pachet gratuit oriunde în Statele Unite sau Canada, sau le poți tipări singur oriunde în lume.",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada — Gratuit prin poștă",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d Global — Tipărește-le singur",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 SUA — Gratuit prin poștă",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Traducerea pentru „Bitcoin acceptat aici”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Traducerea pentru „Scanează pentru a afla de ce Bitcoin este bun pentru afaceri.”",
	"business/stickers::biz_stickers_print_c1":
		"Poți tipări singur autocolantele „Bitcoin acceptat aici”, indiferent unde locuiești. Apasă pe limba ta de mai jos pentru a descărca fișierele autocolantelor și instrucțiunile de tipărire.",
	"business/stickers::biz_stickers_print_header":
		"Tipărește singur fișierele autocolantelor",
	"business/stickers::biz_stickers_request_c1":
		"Completează formularul de mai jos pentru a cere fișiere ale autocolantelor „Bitcoin acceptat aici” în limba ta locală. Te vom anunța când vor fi gata.",
	"business/stickers::biz_stickers_request_header":
		"Nu îți vezi limba?",
	"business/stickers::biz_stickers_step_description":
		"Expediem pachete gratuite la adresele din SUA și Canada. Oriunde în lume, le poți tipări singur.",
	"business/stickers::biz_stickers_step_header":
		"Cum vrei să-ți primești autocolantele?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Toate portofelele Bitcoin sunt interconectate — alege-l pe cel potrivit afacerii tale. Gratuite, decontare instantanee, fără chargeback-uri.",
	"business/wallets::sources_breez_business":
		"Breez — Portofel Lightning doar Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — Infrastructură de plăți Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — Procesator de plăți Bitcoin",
	"business/wallets::sources_square":
		"Square — Acceptă plăți Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — Facturare Bitcoin pentru afaceri",
	"business/wallets::wallets_hero_subtitle":
		"Portofele Bitcoin gratuite. Alege-l pe cel potrivit afacerii tale — în persoană, online sau bazat pe facturi — și începe să accepți Bitcoin în câteva minute.",
	"business/wallets::wallets_section_invoice":
		"Portofele pentru afaceri bazate pe facturi",
	"business/wallets::wallets_section_invoice_intro":
		"Dacă facturezi clienți (consultanță, freelancing, servicii B2B), folosește un portofel construit în jurul facturării. Clienții tăi plătesc o factură Bitcoin în câteva clicuri.",
	"business/wallets::wallets_section_multiple":
		"Portofele pentru afaceri cu mai mulți angajați",
	"business/wallets::wallets_section_multiple_intro":
		"Dacă ai o echipă care acceptă plăți la casă, alege un portofel care suportă autentificări multiple ale angajaților — astfel încât fiecare angajat să-și aibă propriul PIN și să păstrezi o pistă de audit curată despre cine a acceptat ce plată.",
	"business/wallets::wallets_section_online":
		"Portofele pentru afaceri online",
	"business/wallets::wallets_section_online_intro":
		"Vinzi pe un site web? Aceste portofele se conectează la magazinul tău online și acceptă Bitcoin de la orice client, oriunde în lume — fără chargeback-uri, fără cont de comerciant necesar.",
	"business/wallets::wallets_section_sole":
		"Portofele pentru afaceri individuale",
	"business/wallets::wallets_section_sole_intro":
		"Dacă conduci singur un magazin, o cafenea, un studio sau un serviciu, oricare dintre aceste portofele va funcționa. Alege în funcție de cum vrei să păstrezi plățile în Bitcoin sau să convertești automat o parte din fiecare plată în moneda ta locală.",
	"business/wallets::wallets_strike_note":
		"Strike Business îți permite să accepți plăți Bitcoin și Lightning cu zero comisioane și decontare instantanee. Suportă plăți în persoană, online și bazate pe facturi cu conversie automată opțională în moneda ta locală.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin acceptat aici",
	"business/why::why_biz_s1":
		"Comisioane mai mici, mai mult pentru afaceri",
	"business/why::why_biz_s1_c1":
		"Plățile Bitcoin sar peste bănci și companii de carduri de credit care iau 2–3% din fiecare vânzare. Afacerile păstrează mai mult din ce plătești tu — ceea ce înseamnă adesea prețuri mai bune și un serviciu mai bun pentru tine.",
	"business/why::why_biz_s2":
		"Decontare instantanee, fără chargeback-uri",
	"business/why::why_biz_s2_c1":
		"Plățile Bitcoin se decontează în câteva secunde, direct din portofelul tău către afacere. Fără așteptări de zile pentru ca banca să elibereze fondurile, și fără dispute costisitoare de chargeback — astfel încât afacerile se pot concentra pe servirea clienților în loc să lupte cu fraude.",
	"business/why::why_biz_s3":
		"Gratuit de acceptat, deschis tuturor",
	"business/why::why_biz_s3_c1":
		"Niciun contract, comisioane lunare sau costuri de configurare pentru ca afacerile să accepte Bitcoin. Și milioane de utilizatori Bitcoin din întreaga lume caută activ comercianți care îl acceptă — oferind acestor afaceri expunere gratuită la clienți noi.",
	"business/why::why_business_cta_intro":
		"Ai o afacere și vrei să începi să accepți Bitcoin?",
	"business/why::why_business_cta_link": "Află cum funcționează \u2192",
	"business/why::why_for_business":
		"De ce este Bitcoin atât de bun pentru această afacere",
	"business/why::why_for_business_intro":
		"Acceptarea Bitcoin permite afacerilor să păstreze mai mult din fiecare vânzare, să fie plătite instantaneu fără chargeback-uri și să ajungă la o audiență globală de utilizatori Bitcoin — totul fără contracte și fără comisioane lunare.",
	"business/why::why_good_for_you":
		"De ce Bitcoin este grozav și pentru tine",
	"business/why::why_good_for_you_intro":
		"Bitcoin nu este doar util la casă — este o formă mai bună de bani care îți protejează economiile, intimitatea și libertatea de a face tranzacții. Iată o privire rapidă.",
	"business/why::why_hero_subtitle":
		"Tocmai ai scanat un autocolant Bitcoin acceptat aici. Iată de ce este o veste bună — pentru această afacere și pentru tine.",
	"business/why::why_intro_c1":
		"Afacerea în care te afli acceptă Bitcoin — o rețea de plăți modernă și open source pe care oricine, oriunde în lume, o poate folosi fără ca băncile sau intermediarii să ia un procent.",
	"business/why::why_intro_c2":
		"Mai jos, versiunea scurtă despre de ce acceptarea Bitcoin este bună pentru această afacere, plus de ce folosirea Bitcoin este bună pentru tine ca client.",
	"business/why::why_learn_more_lowercase": "află mai multe \u2192",
	"business/why::why_next_business_label": "ACCEPTĂ BITCOIN",
	"business/why::why_next_business_title":
		"Acceptă Bitcoin în afacerea ta",
	"business/why::why_next_buy_label": "CUMPĂRĂ BITCOIN",
	"business/why::why_next_buy_title":
		"Cumpără primul tău Bitcoin",
	"business/why::why_next_learn_label": "AFLĂ MAI MULTE",
	"business/why::why_next_learn_title":
		"Află mai multe despre Bitcoin",
	"business/why::why_next_wallet_label": "OBȚINE UN PORTOFEL",
	"business/why::why_next_wallet_title":
		"Obține propriul portofel Bitcoin",
	"business/why::why_s1_c1":
		"Inflația apare atunci când se tipărește sau se creează din nimic mai mulți bani. Face ca banii din buzunarele tale să valoreze mai puțin în timp — și de aceea prețurile continuă să crească an de an.",
	"business/why::why_s1_c2":
		"Bitcoin are o ofertă fixă de 21 de milioane de monede. Niciun guvern, bancă sau companie nu poate tipări mai mult. Economiile tale în Bitcoin își păstrează valoarea în timp în loc să o piardă silențios.",
	"business/why::why_s2_c1":
		"Mai multe bănci americane s-au prăbușit în ultimii ani din cauza retragerilor masive. Când prea mulți clienți încearcă să-și retragă banii în același timp, banca nu are numerar pentru a-i plăti pe toți.",
	"business/why::why_s2_c2":
		"În loc să-ți păstreze pur și simplu banii, băncile împrumută și investesc cea mai mare parte din ei. Dacă acele investiții merg prost — sau dacă deponenții își pierd încrederea — banca poate da faliment, iar depozitele tale pot fi înghețate sau pierdute.",
	"business/why::why_s2_c3":
		"Cu Bitcoin, îți poți păstra singur banii, direct în portofelul tău. Fără bănci. Fără intermediari. Fără retrageri masive.",
	"business/why::why_s3_c1":
		"Spre deosebire de cardurile de credit, PayPal sau conturile bancare tradiționale, Bitcoin nu necesită permisiunea nimănui pentru a fi folosit.",
	"business/why::why_s3_c2":
		"Nimeni nu îți poate îngheța contul, bloca o plată sau să te taie de la rețea. Este primul sistem financiar din istorie pe care îl poți folosi liber, fără frica de cenzură sau confiscare.",
	"business/why::why_s4_c1":
		"Bitcoin este adesea înțeles greșit, dar face liniștit foarte mult bine în lume.",
	"business/why::why_s4_c2":
		"Bitcoin a ajutat activiștii pentru drepturile omului să lupte pentru libertate, a redus emisiile globale de metan de la gropi de gunoi și câmpuri petroliere, a stabilizat rețelele electrice și a finanțat bunuri publice precum parcuri naționale.",
	"business/why::why_whats_next_heading": "Unde mergi mai departe?",
	"business/why::why_whats_next_intro":
		"Dacă este prima dată când scanezi un autocolant Bitcoin, iată cele mai utile locuri unde să mergi de aici.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Cum să cumperi Bitcoin",
	"buy::buy_step_1_header": "Alege-ți țara",
	"buy::buy_step_2_header": "Alege-ți metoda de plată",
	"buy::buy_step_3_header": "Opțiunile tale de cumpărare",
	"buy::buy_step_4_header":
		"Păstrează-ți Bitcoin-ul în siguranță",
	"buy::buy_header_subtitle":
		"Un ghid simplu, pas cu pas, pentru a-ți cumpăra primul Bitcoin.",
	"buy::buy_howto_name": "Cum să cumperi Bitcoin",
	"buy::buy_meta_description":
		"Află cum să cumperi Bitcoin în siguranță cu ghidul nostru pas cu pas. Alege-ți țara și metoda de plată pentru a găsi cele mai bune opțiuni de cumpărare Bitcoin pentru tine.",
	"buy::buy_step_1_eyebrow": "Pasul 1",
	"buy::buy_step_2_eyebrow": "Pasul 2",
	"buy::buy_step_3_eyebrow": "Pasul 3",
	"buy::buy_step_4_eyebrow": "Pasul 4",
	"buy::buy_storage_cta_label": "Pasul următor",
	"buy::sources_bisq":
		"Bisq — Schimb Bitcoin peer-to-peer descentralizat",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Director global al ATM-urilor Bitcoin",
	"buy::sources_kraken":
		"Kraken — Schimb Bitcoin consacrat",
	"buy::sources_relai":
		"Relai — Aplicație elvețiană de auto-custodie doar Bitcoin",
	"buy::sources_river":
		"River — Cumpărare, minerit și custodie doar Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — Cumpără Bitcoin cu suport Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — Dollar-cost averaging doar Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Adaugă limbă",
	"common::common_next_buy_bitcoin": "Cumpără Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Află cum să cumperi Bitcoin în siguranță",
	"common::common_next_calculate": "Calculează-ți inflația",
	"common::common_next_calculate_desc":
		"Vezi cum afectează inflația salariul tău în timp",
	"common::common_next_get_wallet": "Obține un portofel",
	"common::common_next_get_wallet_desc":
		"Obține primul tău portofel Bitcoin — gratuit",
	"common::common_next_keep_learning": "Continuă să înveți",
	"common::common_next_keep_learning_desc":
		"Află cum face Bitcoin lumea mai bună",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Money Supply (Index categorii)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Can a Treasury Auction Fail?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Ce urmează?",
	"common::common_sticker_files_mission_5": "cere un pachet",
	"common::common_site_tagline":
		"Educație Bitcoin pentru toți.",
	"common::common_source_btc_map":
		"BTC Map — Director mondial al comercianților care acceptă Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — Procesator de plăți Bitcoin gratuit, open source și self-hosted",
	"common::common_source_oshi":
		"Oshi — Platformă de recompense Bitcoin pentru comercianți",
	"common::common_source_strike_business":
		"Strike — Plăți Bitcoin și Lightning pentru afaceri",
	"common::common_sources_group_bitcoin": "Date Bitcoin",
	"common::common_sources_group_cpi":
		"Inflație / Indice al prețurilor de consum",
	"common::common_sources_group_debt": "Datoria publică",
	"common::common_sources_group_money": "Date despre oferta monetară",
	"common::common_sources_group_stories": "Exemple reale",
	"common::common_sticker_files_mission_6":
		"autocolante în engleză gratuit.",
	"common::common_sticker_files_next_flyers_label": "Pliante",
	"common::common_sticker_files_next_flyers_title":
		"Tipărește pliante Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Fișiere ale autocolantelor",
	"common::common_sticker_files_next_languages_title":
		"Vezi fișierele autocolantelor în alte limbi",
	"common::common_sticker_files_print_these":
		"TIPĂREȘTE-LE CU 1 CLIC",
	"common::common_sticker_name_bdhi_black":
		"Autocolant „Bitcoin nu are inflație” (Negru)",
	"common::common_sticker_name_bdhi_orange":
		"Autocolant „Bitcoin nu are inflație” (Portocaliu)",
	"common::common_sticker_name_caution":
		"Autocolant Bitcoin „Atenție! Cuburi de gheață care se topesc”",
	"common::common_sticker_name_cure_inflation":
		"Autocolant Bitcoin „Vindecă inflația”",
	"common::common_sticker_name_danger":
		"Autocolant Bitcoin „Pericol! Inflație în vizor”",
	"common::common_sticker_name_fix":
		"Autocolant Bitcoin „Repară banii, repară lumea”",
	"common::common_sticker_name_got_inflation":
		"Autocolant Bitcoin „Ai inflație?”",
	"common::common_sticker_name_study":
		"Autocolant „Studiază Bitcoin”",
	"common::common_sticker_name_warning":
		"Autocolant Bitcoin „Avertisment! Inflația îți fură economiile”",
	"common::common_sticker_name_what_if":
		"Autocolant Bitcoin „Dacă banii tăi nu ar avea inflație?”",
	"common::common_sticker_tips_heading":
		"Sfaturi pentru autocolante",
	"common::common_sticker_tips_intro":
		"Odată ce ai tipărit autocolantele, lipește-le acolo unde vor fi vizibile! Locuri bune pentru autocolante sunt:",
	"common::common_sticker_tips_list_1":
		"în locuri publice unde oamenii le vor vedea",
	"common::common_sticker_tips_list_2":
		"în locuri unde este puțin probabil să fie îndepărtate rapid (autocolantele nu cauzează daune permanente)",
	"common::common_sticker_tips_list_3":
		"pe suprafețe ușor de lipit (metal, plastic, sticlă)",
	"common::common_sticker_tips_list_4":
		"NU pe proprietate privată, acoperind semne, ATM-uri sau pompe de benzină",
	"common::common_stickers_printer_prefix": "Noi folosim",
	"common::common_stickers_printer_suffix":
		"dar poți folosi orice firmă de autocolante.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"Calculează-ți decalajul de inflație",
	"compound-inflation-calculator::cic_cta_label": "Pasul următor",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Vezi cu cât trebuie să crească salariul tău pentru a ține pasul cu inflația.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Explorează mai multe subiecte",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Vezi cum se conectează Bitcoin cu banii, libertatea, energia și altele.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Află cum funcționează inflația",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Cum să tipărești și să afișezi aceste pliante Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Pliante Bitcoin gratuite și imprimabile. Afișează-le în locuri publice pentru a ajuta mai mulți oameni să afle ce este Bitcoin.",
	"flyers::flyers_hero_title":
		"Tipărește și afișează pliante Bitcoin",
	"flyers::flyers_next_get_stickers": "Răspândește vestea",
	"flyers::flyers_next_get_stickers_desc":
		"Comandă un pachet de autocolante Bitcoin gratuite",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Implică-te și răspândește Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Vrei să ajuți la construirea economiei circulare a Bitcoin? Cel mai ușor mod este să ajuți afacerile locale să înceapă să accepte plăți Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Cunoști o afacere care ar putea fi interesată? Îndreaptă-l pe proprietar către",
	"get-involved::get_involved_business_content_3":
		"pagina noastră Bitcoin pentru afaceri.",
	"get-involved::get_involved_description":
		"Resursele noastre gratuite fac ușoară răspândirea adopției Bitcoin. Autocolante, pliante, autocolante „Bitcoin acceptat aici” pentru afaceri și o codebase open source la care oricine poate contribui.",
	"get-involved::get_involved_header":
		"Implică-te și răspândește Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Poți ajuta la schimbarea lucrurilor. Am creat mai multe resurse gratuite pentru a-ți face ușoară răspândirea speranței pe care Bitcoin o aduce oamenilor din jurul tău.",
	"get-involved::get_involved_biz_stickers_note":
		"Deja accepți Bitcoin? Anunță-ți clienții cu autocolantele noastre gratuite „Bitcoin acceptat aici”. Vom expedia un pachet la orice adresă din Statele Unite sau Canada, sau le poți tipări singur oriunde în lume.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Autocolante acceptat aici",
	"get-involved::get_involved_card_biz_stickers_source":
		"Sursă: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"Autocolante gratuite „Bitcoin acceptat aici” pentru afacerea ta",
	"get-involved::get_involved_card_business_label":
		"Bitcoin pentru afaceri",
	"get-involved::get_involved_card_business_source":
		"Sursă: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"Tot ce le trebuie afacerilor pentru a începe să accepte plăți în Bitcoin",
	"get-involved::get_involved_card_flyers_label":
		"Pliante imprimabile",
	"get-involved::get_involved_card_flyers_source":
		"Sursă: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"Descarcă și tipărește pliante Bitcoin gratuite",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source":
		"Sursă: GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"Contribuie la bitcoin.rocks pe GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Autocolante gratuite",
	"get-involved::get_involved_card_stickers_source":
		"Sursă: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"Cere un pachet gratuit de autocolante Bitcoin trimis la tine acasă",
	"get-involved::get_involved_flyers_content_1":
		"Pliantele sunt una dintre cele mai ușoare modalități de a introduce Bitcoin în comunitatea ta. Descarcă pliante Bitcoin gratuite și imprimabile, tipărește câte vrei și afișează-le pe avizierele comunității, în cafenele, la întâlniri sau oriunde se adună oameni.",
	"get-involved::get_involved_flyers_content_2":
		"Fiecare pliant include un titlu accrocant și un cod QR care trimite cititorii curioși la bitcoin.rocks pentru a afla mai multe.",
	"get-involved::get_involved_flyers_content_3":
		"Spre deosebire de autocolante, pliantele pot fi tipărite la cerere de oriunde în lume — îți trebuie doar o imprimantă și câteva minute.",
	"get-involved::get_involved_flyers_header":
		"Tipărește și afișează pliante",
	"get-involved::get_involved_flyers_image_alt":
		"Previzualizare a pliantelor Bitcoin gratuite și imprimabile de la bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks este un proiect gratuit și open source sub licența MIT. Misiunea noastră este să accelerăm adopția Bitcoin prin educație — și nu o putem face singuri.",
	"get-involved::get_involved_github_content_2":
		"Fie că ești dezvoltator, designer, scriitor sau traducător, există o modalitate prin care poți ajuta. Îi primim cu o căldură deosebită pe contributorii care pot traduce conținutul nostru în mai multe limbi, astfel încât mai mulți oameni din întreaga lume să poată învăța Bitcoin în limba lor maternă.",
	"get-involved::get_involved_github_content_3":
		"Fă fork la repository, deschide un pull request, raportează o problemă sau pur și simplu pune o stea proiectului pentru a-ți arăta sprijinul. Fiecare contribuție ajută Bitcoin să ajungă la mai mulți oameni.",
	"get-involved::get_involved_github_header":
		"Contribuie pe GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Pachet gratuit de autocolante Bitcoin text de la bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "economisind",
	"index::home_card_label_art_1": "Să comparăm",
	"index::home_card_label_art_2": "Răspândește vestea",
	"index::home_card_label_art_3": "Artă stradală",
	"index::home_card_label_bank_runs": "Sistem cu rezervă completă",
	"index::home_card_label_bonds": "Să comparăm",
	"index::home_card_label_business_1": "Care este diferența?",
	"index::home_card_label_business_2": "Acceptă plăți Bitcoin",
	"index::home_card_label_cash": "Să comparăm",
	"index::home_card_label_cbdc": "Deschis sau închis?",
	"index::home_card_label_coding_1": "Tutorial interactiv",
	"index::home_card_label_coding_2": "Construiește hardware",
	"index::home_card_label_coding_3": "Puzzle-uri de programare",
	"index::home_card_label_crowdfunding_1": "Protestele EndSARS",
	"index::home_card_label_crowdfunding_2": "Bani de neoprit",
	"index::home_card_label_crowdfunding_3":
		"Finanțează-ți proiectul",
	"index::home_card_label_crypto": "Care este diferența?",
	"index::home_card_label_energy_1": "Stabilizarea rețelei",
	"index::home_card_label_energy_4": "Răspuns la cerere",
	"index::home_card_label_energy_5": "Electrificare rurală",
	"index::home_card_label_energy_6": "Stimulent regenerabil",
	"index::home_card_label_environment_1":
		"Reducerea metanului",
	"index::home_card_label_environment_2":
		"Salvarea parcurilor naționale",
	"index::home_card_label_environment_3":
		"Cea mai verde industrie",
	"index::home_card_label_environment_4":
		"Reducerea arderii gazelor",
	"index::home_card_label_equality_1":
		"Speranță și oportunitate",
	"index::home_card_label_equality_2":
		"Revoluționar",
	"index::home_card_label_food_1": "Prețurile alimentelor",
	"index::home_card_label_food_2": "Ferme și terenuri",
	"index::home_card_label_freedom_1": "Regimuri autoritare",
	"index::home_card_label_freedom_2": "Instrument unic",
	"index::home_card_label_get_started_1":
		"Bazele pentru începători",
	"index::home_card_label_get_started_2": "Primul tău portofel",
	"index::home_card_label_get_started_3": "Cumpără Bitcoin",
	"index::home_card_label_gold": "Care este mai bun?",
	"index::home_card_label_housing_1": "Locuințe accesibile",
	"index::home_card_label_human_rights_1":
		"Apărarea drepturilor omului",
	"index::home_card_label_human_rights_2": "Adopție de la bază",
	"index::home_card_label_human_rights_3": "Impact global",
	"index::home_card_label_inflation":
		"Bitcoin sunt bani mai buni",
	"index::home_card_label_networks_1":
		"Vizualizare a rețelei în direct",
	"index::home_card_label_networks_2": "Să comparăm",
	"index::home_card_label_payments_1": "Care este diferența?",
	"index::home_card_label_payments_2":
		"Plăți rapide și ieftine",
	"index::home_card_label_payments_3": "Remitențe",
	"index::home_card_label_payments_4": "Acceptă plăți",
	"index::home_card_label_politics_1": "Paradox politic",
	"index::home_card_label_politics_2": "Acționează",
	"index::home_card_label_property_rights_1": "Să comparăm",
	"index::home_card_label_property_rights_2": "Proprietate adevărată",
	"index::home_card_label_salary": "Protejează-ți salariul",
	"index::home_card_label_self_custody_1":
		"Ghid de portofele Bitcoin",
	"index::home_card_label_self_custody_2":
		"Cel mai important pas",
	"index::home_card_label_self_custody_3": "Bani suverani",
	"index::home_card_label_war_1": "Sfârșitul războaielor nesfârșite",
	"index::home_card_label_war_2": "Ajutor pentru veterani",
	"index::home_card_label_war_3": "Evadare în timp de război",
	"index::home_h1":
		"Bitcoin sunt bani mai buni care construiesc o lume mai bună.",
	"index::home_nav_about": "Despre noi",
	"index::home_nav_get_involved": "Implică-te",
	"index::home_nav_learn": "Învață",
	"index::home_source_prefix": "Sursă:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon și Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Vezi",
	"lightning::lightning_grid_heading":
		"Portofele Lightning populare",
	"lightning::lightning_hardware_cta_label":
		"Portofele hardware",
	"lightning::lightning_header_subtitle":
		"Lightning îți permite să trimiți Bitcoin în câteva secunde pentru mai puțin de un cent — alege un portofel ale cărui compromisuri se potrivesc cu cât Bitcoin vrei să cheltuiești.",
	"lightning::lightning_s1_c4_end":
		"pentru mai multe informații.",
	"lightning::lightning_s1_c4_link":
		"Ghidul nostru de portofele hardware Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Portofelul Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — Portofel Lightning auto-custodial",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Documentația Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — Portofel Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android și web",
	"nostr/index::nostr_platform_web": "Browser web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr este un nou protocol descentralizat pentru comunicarea online — nicio companie singură nu îl controlează, zap-urile Bitcoin sunt integrate nativ și poți schimba clienții fără să-ți pierzi urmăritorii.",
	"nostr/index::nostr_amethyst_f1":
		"Multe funcții și personalizări",
	"nostr/index::nostr_amethyst_f2":
		"Necesită un portofel Bitcoin separat",
	"nostr/index::nostr_amethyst_f3": "100% gratuit",
	"nostr/index::nostr_damus_f1":
		"Interfață familiară în stil Twitter",
	"nostr/index::nostr_damus_f2":
		"Necesită un portofel Bitcoin separat",
	"nostr/index::nostr_damus_f3": "100% gratuit",
	"nostr/index::nostr_download_heading":
		"Descarcă un client Nostr gratuit",
	"nostr/index::nostr_download_intro":
		"Un client Nostr este o aplicație gratuită care îți permite să citești și să publici pe rețeaua Nostr. Toate sunt interconectate — poți schimba clientul oricând și să-ți păstrezi urmăritorii și conținutul.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr este un nou protocol descentralizat pentru a comunica online — nicio companie singură nu îl controlează, zap-urile Bitcoin sunt integrate și poți schimba aplicațiile fără să-ți pierzi urmăritorii.",
	"nostr/index::nostr_hero_title": "Ce este Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr este similar cu e-mailul: nimeni nu deține protocolul, oricine poate construi aplicații pe el și poți alege orice aplicație preferi. Spre deosebire de Twitter sau Facebook, nu există o companie centrală care te poate cenzura, deplatforma sau reduce vizibilitatea ta.",
	"nostr/index::nostr_intro_c2":
		"Mai jos, versiunea scurtă despre de ce contează Nostr — apoi fiecare client Nostr gratuit de care ai nevoie pentru a începe astăzi.",
	"nostr/index::nostr_iris_f1":
		"Extrem de simplu — nu este nevoie de instalare",
	"nostr/index::nostr_iris_f2":
		"Mod ușor de a încerca Nostr cu un cont demo",
	"nostr/index::nostr_iris_f3": "100% gratuit",
	"nostr/index::nostr_learn_more_label": "APROFUNDEAZĂ",
	"nostr/index::nostr_learn_more_title":
		"Află mai multe despre Nostr pe nostr.how",
	"nostr/index::nostr_primal_f1":
		"Primul client recomandat",
	"nostr/index::nostr_primal_f2":
		"Portofel de zap-uri Bitcoin integrat",
	"nostr/index::nostr_primal_f3": "100% gratuit",
	"nostr/index::nostr_s1": "Un protocol, nu o platformă",
	"nostr/index::nostr_s1_c1":
		"Nostr este un nou protocol care îți permite să comunici online fără frica de cenzură, deplatformare sau reducere a vizibilității.",
	"nostr/index::nostr_s1_c2":
		"Platforme precum Twitter și Facebook sunt controlate de o singură companie, dar nimeni nu controlează protocolul Nostr.",
	"nostr/index::nostr_s2": "Libertatea de a schimba",
	"nostr/index::nostr_s2_c1":
		"Nostr este similar cu e-mailul. Nimeni nu controlează protocolul de e-mail și oricine poate construi un client (precum Gmail, Hotmail etc.) pe el.",
	"nostr/index::nostr_s2_c2":
		"Nimeni nu controlează protocolul Nostr și oricine poate construi un client (precum Damus, Amethyst etc.) pe el.",
	"nostr/index::nostr_s2_c3":
		"Dacă nu îți place cum funcționează un anumit client, îți poți muta fără probleme contul Nostr la un alt client fără să-ți pierzi urmăritorii sau conținutul.",
	"nostr/index::nostr_s3": "Bitcoin integrat",
	"nostr/index::nostr_s3_c1":
		"Bitcoin este integrat nativ în protocolul Nostr. Dacă vezi conținut care îți place, poți trimite cu ușurință cuiva un zap Bitcoin ca mulțumire!",
	"nostr/index::nostr_s3_c2":
		"Pe platforme centralizate precum Twitter și Facebook, companiile centralizate fac bani din conținutul tău. Dar pe un protocol deschis precum Nostr, tu ești cel care face bani din conținutul tău.",
	"nostr/index::sources_damus":
		"Damus — Client Nostr pentru iPhone",
	"nostr/index::sources_iris":
		"Iris — Client Nostr bazat pe browser",
	"nostr/index::sources_nostr_how":
		"nostr.how — Ce este Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — Specificație open source",
	"nostr/index::sources_primal":
		"Primal — Client Nostr cu portofel de zap-uri Bitcoin integrat",
	"nostr/index::what_is_nostr": "Ce este Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Tipărește-ți propriile autocolante Bitcoin cu aceste fișiere ale autocolantelor Bitcoin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Cerere primită 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Comandă în cantități mari",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Distribuie pe Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Ce este Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Vrei mai multe autocolante?",
	"sticker-success::sticker_success_hero_title":
		"Autocolantele tale sunt pe drum 🎉",
	"sticker-success::sticker_success_share_header":
		"Distribuie unde ți-ai pus autocolantele",
	"sticker-success::sticker_success_tips_header":
		"Locuri bune pentru autocolante",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Cât timp ești aici, tipărește și afișează singur",
	"stickers::stickers_instructions_1":
		"Introdu adresa ta poștală și îți vom expedia gratuit un Pachet de autocolante Bitcoin prin poștă. Autocolantele tale vor fi expediate într-un plic alb anonim.",
	"stickers::stickers_btn_choose_pack":
		"Alege acest pachet",
	"stickers::stickers_bulk_c1":
		"Vrei mai mult de câteva autocolante?",
	"stickers::stickers_bulk_c2":
		"Comandă în cantități mari de la aceeași tipografie pe care o folosim noi",
	"stickers::stickers_bulk_c3":
		"— cu cât cumperi mai multe, cu atât costă mai puțin pe autocolant.",
	"stickers::stickers_bulk_cta":
		"Cumpără autocolante în cantități mari",
	"stickers::stickers_bulk_header":
		"Comandă autocolante în cantități mari",
	"stickers::stickers_hero_subtitle":
		"Comandă un pachet gratuit de autocolante Bitcoin și afișează-le în locuri publice pentru a ajuta mai mulți oameni să afle ce este Bitcoin.",
	"stickers::stickers_hero_title": "Autocolante Bitcoin gratuite",
	"stickers::stickers_intro_c1":
		"Misiunea noastră este să te ajutăm să orange-pillezi mai mulți oameni punând autocolante Bitcoin în locuri publice. Toate autocolantele noastre au un cod QR care duce la o pagină educativă despre",
	"stickers::stickers_intro_c3": "inflație",
	"stickers::stickers_intro_c4":
		"Alege un pachet de autocolante de mai jos și selectează cum vrei să-l primești — vom expedia un pachet gratuit la oricine în Statele Unite sau Canada, sau le poți tipări singur oriunde în lume.",
	"stickers::stickers_mail_header":
		"Îți vom expedia autocolantele tale gratuite",
	"stickers::stickers_next_print_flyers":
		"Continuă să răspândești",
	"stickers::stickers_next_print_flyers_desc":
		"Tipărește pliante Bitcoin gratuite pentru a le afișa în locuri publice",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 Global — Comandă în cantități mari",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada — Gratuit prin poștă",
	"stickers::stickers_option_print":
		"\ud83c\udf0d Global — Tipărește-le singur",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 SUA — Gratuit prin poștă",
	"stickers::stickers_print_c1":
		"Te poți implica tipărind singur autocolantele, indiferent unde locuiești. Apasă pe limba ta de mai jos pentru a descărca fișierele autocolantelor și instrucțiunile de tipărire.",
	"stickers::stickers_print_c2":
		"Nu toate autocolantele sunt disponibile în toate limbile.",
	"stickers::stickers_print_header":
		"Tipărește singur fișierele autocolantelor",
	"stickers::stickers_request_c1":
		"Completează formularul de mai jos pentru a cere fișiere ale autocolantelor în limba ta locală. Te vom anunța când vor fi gata.",
	"stickers::stickers_request_header":
		"Nu îți vezi limba?",
	"stickers::stickers_share_c2":
		"Urmărește-ne pe Nostr căutând",
	"stickers::stickers_share_c3":
		"în orice client Nostr.",
	"stickers::stickers_signs_pack_description":
		"Semne de avertisment, pericol și atenție cu mesaje Bitcoin — concepute să atragă atenția și să-i facă pe oameni să se oprească și să citească.",
	"stickers::stickers_step_1_description":
		"Fiecare pachet are o colecție diferită de autocolante Bitcoin cu coduri QR care îi învață pe oameni despre Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "PASUL 1",
	"stickers::stickers_step_1_header":
		"Alege-ți pachetul de autocolante",
	"stickers::stickers_step_2_description":
		"Expediem pachete gratuite la adresele din SUA și Canada. Oriunde în lume, le poți tipări singur sau le poți comanda în cantități mari.",
	"stickers::stickers_step_2_eyebrow": "PASUL 2",
	"stickers::stickers_step_2_header":
		"Cum vrei să-ți primești autocolantele?",
	"stickers::stickers_text_pack_description":
		"Un amestec de slogane Bitcoin și replici concepute să stârnească curiozitatea în locuri publice.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Alege-ți portofelul",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Recenzia stocării seed-urilor Bitcoin în metal",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Portofel Bitcoin auto-custodial",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Portofel hardware Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Portofel hardware Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — Portofel hardware Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — Portofel hardware Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — Dispozitiv de semnare Bitcoin DIY open source",
	"wallets::wallets_grid_heading":
		"Portofele Bitcoin populare",
	"wallets::wallets_header_subtitle":
		"Un ghid pas cu pas pentru a alege un portofel, a-ți proteja cheile și a prelua control deplin asupra Bitcoin-ului tău.",
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
		`translate-rest-part2 (ro): filled ${filled}, already-done ${skipped}`,
	);
}

main();
