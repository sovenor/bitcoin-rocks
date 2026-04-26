#!/usr/bin/env node
/**
 * Croatian (hr) manifest refresh — part 2 of non-inflation namespaces.
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
	"hr.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli računovodstvene usluge",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 USD",
	"business/accounting::accounting_example_loss_result": "−10 USD",
	"business/accounting::accounting_description":
		"Jednostavan vodič za računovodstvo Bitcoin plaćanja — hibridni novčanici, troškovna osnovica, kapitalni dobici i kada razgovarati sa svojim računovođom.",
	"business/accounting::accounting_s1_c1":
		"Najlakši način prihvaćanja Bitcoina je korištenje hibridnog novčanika: on automatski pretvara 100 % primljenog Bitcoina u dolare (ili vašu lokalnu valutu) čim plaćanje stigne.",
	"business/accounting::accounting_s1_c2":
		"S takvom postavkom vaše računovodstvo izgleda kao i danas — konačni iznos uvijek u dolarima. Bez troškovne osnovice, bez kapitalnih dobitaka, bez nove tablice.",
	"business/accounting::accounting_s2":
		"Ako držite dio Bitcoina: pratite svoju troškovnu osnovicu",
	"business/accounting::accounting_s2_c1":
		"Neka poduzeća odlučuju zadržati dio primljenog Bitcoina umjesto da sve automatski pretvore. Ako ste jedan od njih, dodatni je korak praćenje troškovne osnovice — vrijednosti svake Bitcoin uplate u dolarima na dan kad ste je primili.",
	"business/accounting::accounting_s2_c2":
		"Čak i ako svoje poslovanje mjerite samo u Bitcoinu, većina poreznih tijela i dalje zahtijeva izvještavanje u dolarskoj vrijednosti. Dobra vijest: za svaku transakciju postoje samo dva broja — količina primljenog Bitcoina i njegova dolarska vrijednost na taj dan.",
	"business/accounting::accounting_s2_c3":
		"Koristite alate u nastavku za automatizaciju traženja vrijednosti kako ne biste morali svaki dan provjeravati cijenu.",
	"business/accounting::accounting_s3":
		"Trošenje ili prodaja zadržanog Bitcoina",
	"business/accounting::accounting_s3_c1":
		"Ako svako plaćanje automatski pretvarate u dolare, preskočite ovaj dio — ne odnosi se na vas.",
	"business/accounting::accounting_s3_c2":
		"Ako ste zadržali nešto Bitcoina i kasnije se odlučite na trošenje ili prodaju, dodajte prodajnu cijenu pored troškovne osnovice u istu tablicu. Razlika između cijene Bitcoina pri primitku i cijene pri trošenju ili prodaji je kapitalni dobitak ili gubitak.",
	"business/accounting::accounting_s3_c3": "Dva brza primjera:",
	"business/accounting::accounting_s4":
		"Trebate stručnjaka koji razumije Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Ako biste radije prepustili ovaj posao nekom drugom — ili je vaše Bitcoin računovodstvo složenije od onoga što hibridni novčanik može sam riješiti — toplo preporučujemo Satoshi Pacioli Accounting Services, tvrtku specijaliziranu za Bitcoin računovodstvo za poduzeća.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin računovodstvo za vaše poduzeće",
	"business/accounting::accounting_card_bpr_label": "Cijena Bitcoina",
	"business/accounting::accounting_card_bpr_title":
		"Pogledajte trenutne ili povijesne cijene Bitcoina u dolarima",
	"business/accounting::accounting_card_pacioli_label":
		"Bitcoin računovođa",
	"business/accounting::accounting_card_spreadsheet_label":
		"Uvoz u Excel",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automatski uvozite cijene Bitcoina u Excel",
	"business/accounting::accounting_card_wallets_label":
		"Hibridni novčanici",
	"business/accounting::accounting_card_wallets_title":
		"Pogledajte naše preporučene novčanike za poduzeća",
	"business/accounting::accounting_disclaimer":
		"Ovaj vodič služi samo informativno i nije porezni savjet. Posavjetujte se s kvalificiranim računovođom za savjet o vašoj specifičnoj situaciji.",
	"business/accounting::accounting_disclaimer_label": "Odricanje odgovornosti",
	"business/accounting::accounting_example_feb_1": "1. veljače",
	"business/accounting::accounting_example_gain_badge":
		"Kapitalni dobitak",
	"business/accounting::accounting_example_gain_explain":
		"Bilježite kapitalni dobitak od 10 USD.",
	"business/accounting::accounting_example_jan_1": "1. siječnja",
	"business/accounting::accounting_example_loss_badge":
		"Kapitalni gubitak",
	"business/accounting::accounting_example_loss_explain":
		"Bilježite kapitalni gubitak od 10 USD.",
	"business/accounting::accounting_example_received_label": "Primljeno",
	"business/accounting::accounting_example_sold_label":
		"Prodano ili potrošeno",
	"business/accounting::accounting_hero_subtitle":
		"Prihvaćanje Bitcoina u poslovanju ne mora komplicirati vaše računovodstvo. Evo kratkog pregleda — i alata i stručnjaka koji to čine jednostavnim.",
	"business/accounting::accounting_intro_c1":
		"Ako već primate gotovinu ili kartice, dodavanje Bitcoina u računovodstvo poduzeća jednostavnije je nego što mislite. Imate dvije mogućnosti: automatski pretvarati svaku Bitcoin uplatu u dolare čim stigne (bez novog računovodstva) ili zadržati nešto Bitcoina (morate pratiti nekoliko dodatnih brojeva).",
	"business/accounting::accounting_intro_c2":
		"Ovaj vodič objašnjava oba pristupa — kako biste mogli odabrati pravi za svoje poduzeće i sigurno početi prihvaćati Bitcoin.",
	"business/accounting::accounting_s1":
		"Lakši put: automatska pretvorba u dolare",
	"business/accounting::accounting_s3_c6":
		"I to je sve. Ista je osnovna matematika koju koristite za bilo koju drugu imovinu kojoj cijena raste i pada.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — trenutne i povijesne cijene Bitcoina u dolarima",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin računovodstvo za poduzeća",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — uvoz cijena kriptovaluta u Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Kratki odgovori na pitanja koja trgovci najčešće postavljaju prije nego što počnu prihvaćati Bitcoin — naknade, namira, novčanici, povratne uplate, troškovi i još mnogo toga.",
	"business/faq::faq_intro_c1":
		"Kliknite na bilo koje pitanje u nastavku da biste vidjeli odgovor. Kad budete spremni prihvaćati Bitcoin, poslovni alati pri dnu stranice vodit će vas korak po korak.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Računovodstvo",
	"business/index::biz_label_faq": "Često postavljana pitanja",
	"business/index::biz_label_maps": "Karte trgovaca",
	"business/index::biz_label_rewards": "Nagrade",
	"business/index::biz_label_stickers": "Naljepnice",
	"business/index::biz_label_wallets": "Novčanici",
	"business/index::biz_meta_description":
		"Prihvaćajte Bitcoin u svom poduzeću s manjim naknadama, trenutačnom namirom, bez povratnih uplata i s pristupom više kupaca.",
	"business/index::business_hero_subtitle":
		"Prihvaćajte plaćanja s manjim naknadama, namirite ih trenutačno i dosegnite milijune novih kupaca — bez ugovora i skrivenih troškova.",
	"business/index::business_intro_c1":
		"Bitcoin vašem poduzeću daje brz, jeftin i privatan način primanja plaćanja. Bez posrednika. Bez povratnih uplata. Bez iznenadnih troškova. Novac u nekoliko sekundi, izravno od kupca do vas.",
	"business/index::business_intro_c2":
		"U nastavku je sažetak zašto je Bitcoin dobar za posao — i ispod su svi alati potrebni da počnete već danas.",
	"business/index::business_resources_heading":
		"Sve što trebate za prihvaćanje Bitcoina",
	"business/index::business_resources_intro":
		"Radite svojim tempom uz ove resurse. Svaki je kratak, praktičan vodič.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Recite nam ponešto o svom poduzeću",
	"business/maps::biz_maps_form_intro":
		"Trebamo samo nekoliko detalja da vas stavimo na karte. Podaci o adresi čuvaju se samo onoliko koliko je potrebno da vaše poduzeće pošaljemo na karte trgovaca.",
	"business/maps::biz_maps_hero_subtitle":
		"Dodajte svoje poduzeće na BTC Map besplatno — otvoreni globalni katalog trgovaca koji prihvaćaju Bitcoin — kako bi vas lokalni Bitcoin korisnici mogli pronaći i potrošiti Bitcoin u vašem poduzeću.",
	"business/maps::biz_maps_hero_title":
		"Stavite svoje poduzeće na karte Bitcoin trgovaca",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin korisnici aktivno traže mjesta gdje mogu potrošiti svoj novac. Pojavljivanje na karti stavlja vaše poduzeće pred svakog Bitcoin korisnika koji traži mjesto za jelo, kupnju ili boravak u blizini — potpuno besplatno.",
	"business/maps::biz_maps_intro_c2":
		"Ispunite kratak obrazac u nastavku i poslat ćemo vaše poduzeće na BTC Map i druge karte Bitcoin trgovaca.",
	"business/maps::biz_maps_meta_description":
		"Dodajte svoje poduzeće na BTC Map i druge karte Bitcoin trgovaca besplatno kako bi vas lokalni Bitcoin korisnici mogli pronaći.",
	"business/maps::biz_maps_placeholder_address": "Adresa ulice",
	"business/maps::biz_maps_placeholder_category":
		"Kategorija (npr. restoran, kafić, hotel)",
	"business/maps::biz_maps_placeholder_city": "Grad",
	"business/maps::biz_maps_placeholder_country": "Država",
	"business/maps::biz_maps_placeholder_name": "Naziv poduzeća",
	"business/maps::biz_maps_placeholder_region":
		"Regija / pokrajina / država",
	"business/maps::biz_maps_placeholder_website": "Web-stranica (neobavezno)",
	"business/maps::biz_maps_view_map_cta": "Pogledajte BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Pogledajte BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Hvala što ste poslali svoje poduzeće. Uskoro ćemo vas dodati na karte Bitcoin trgovaca.",
	"business/maps-success::biz_maps_success_hero_title":
		"Zahtjev primljen 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Dodat ćemo vaše poduzeće na BTC Map i druge kataloge Bitcoin trgovaca u 1 – 2 tjedna. Svaku prijavu pregledavamo ručno kako bismo održali točnost karte.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Kad vaš oglas zaživi, lokalni Bitcoin korisnici pronaći će vaše poduzeće i doći potrošiti Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Što slijedi",
	"business/maps-success::biz_maps_success_view_c1":
		"Dok čekate, pogledajte BTC Map i vidite rastuću mrežu poduzeća koja diljem svijeta prihvaćaju Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Pogledajte gdje ćete se pojaviti",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Preuzmite engleske datoteke naljepnica „Bitcoin Accepted Here“ za samostalno tiskanje.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Tiskajte vlastite naljepnice „Bitcoin Accepted Here“ na engleskom kako bi vaši kupci znali da prihvaćate Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Preuzmite engleske datoteke naljepnica „Bitcoin Accepted Here“",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Hvala što ste zatražili datoteke naljepnica „Bitcoin Accepted Here“ na svom jeziku.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Zahtjev primljen 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Datoteke naljepnica izradit ćemo i objaviti u sljedećih 3 – 4 tjedna. Kad budu spremne, moći ćete ih besplatno preuzeti i tiskati s naše stranice s datotekama naljepnica.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Datoteke naljepnica objavljujemo u skupinama, pa može potrajati nekoliko tjedana dok vaš jezik ne zaživi. Hvala na strpljenju!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Što slijedi",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Naručite na veliko",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Zatražite još jedan besplatan paket",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vaše besplatne naljepnice „Bitcoin Accepted Here“ stići će u 2 – 4 tjedna u običnoj bijeloj omotnici s 3 naljepnice.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Vaše naljepnice su na putu 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ako 3 naljepnice nisu dovoljne za vaše poduzeće, možete zatražiti još jedan besplatan paket — ili naručiti na veliko od istog tiskara koji mi koristimo.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Trebate još naljepnica?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na glavnom ulazu ili izlogu, kako bi kupci vidjeli prije ulaska",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Pored blagajne, terminala za plaćanje ili gdje god kupci plaćaju",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Na jelovniku, cjeniku ili posudi za napojnice",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ne lijepite naljepnice na mjesta koja nisu vaša ili gdje to nije dopušteno",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Dobra mjesta za lijepljenje naljepnica",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Recite svojim kupcima da prihvaćate Bitcoin. Zatražite paket besplatnih naljepnica „Bitcoin Accepted Here“ za svoj prostor.",
	"business/stickers::biz_stickers_hero_title":
		"Besplatne naljepnice „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_intro_c1":
		"Prihvaćanje Bitcoina samo je pola posla — vaši kupci to također moraju znati. Ove male naljepnice „Bitcoin Accepted Here“ dizajnirane su da ih zalijepite na glavni ulaz, blagajnu, jelovnik ili gdje god kupci plaćaju.",
	"business/stickers::biz_stickers_intro_c2":
		"Šaljemo besplatan paket na bilo koju adresu u SAD-u ili Kanadi, ili možete sami tiskati naljepnice bilo gdje u svijetu.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — besplatna pošta",
	"business/stickers::biz_stickers_option_print":
		"🌍 Globalno — sami tiskajte",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 SAD — besplatna pošta",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Prijevod fraze „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Prijevod fraze „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Bilo gdje u svijetu da živite, možete sami tiskati svoje naljepnice „Bitcoin Accepted Here“. Kliknite na svoj jezik u nastavku da preuzmete datoteke naljepnica i upute za tiskanje.",
	"business/stickers::biz_stickers_print_header":
		"Tiskajte vlastite datoteke naljepnica",
	"business/stickers::biz_stickers_request_c1":
		"Ispunite obrazac u nastavku da biste zatražili datoteke naljepnica „Bitcoin Accepted Here“ na svom lokalnom jeziku. Obavijestit ćemo vas kad budu spremne.",
	"business/stickers::biz_stickers_request_header":
		"Ne vidite svoj jezik?",
	"business/stickers::biz_stickers_step_description":
		"Šaljemo besplatne pakete na adrese u SAD-u i Kanadi. U ostalom dijelu svijeta možete sami tiskati naljepnice.",
	"business/stickers::biz_stickers_step_header":
		"Kako želite svoje naljepnice?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Svi Bitcoin novčanici rade zajedno — odaberite najbolji za svoje poduzeće. Besplatno, trenutačna namira, bez povratnih uplata.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin Lightning novčanik samo za Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — infrastruktura za Lightning plaćanja",
	"business/wallets::sources_opennode":
		"OpenNode — procesor Bitcoin plaćanja",
	"business/wallets::sources_square":
		"Square — prihvaćajte Bitcoin plaćanja",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin računovodstvo za poduzeća",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin novčanici su besplatni. Odaberite najbolji za svoje poduzeće — uživo, online ili putem računa — i počnite prihvaćati Bitcoin u nekoliko minuta.",
	"business/wallets::wallets_section_invoice":
		"Novčanici za poduzeća koja kupcima šalju račune",
	"business/wallets::wallets_section_invoice_intro":
		"Ako svojim kupcima šaljete račune (savjetovanje, freelance, B2B usluge), koristite novčanik dizajniran za okruženje s računima. Kupac plaća Bitcoin račun u nekoliko klikova.",
	"business/wallets::wallets_section_multiple":
		"Novčanici za poduzeća s više zaposlenika",
	"business/wallets::wallets_section_multiple_intro":
		"Ako vaš tim prima plaćanja na blagajni, odaberite novčanik koji podržava prijave više zaposlenika — kako bi svaki zaposlenik imao svoj kod i mogli ste pratiti tko je primio koje plaćanje.",
	"business/wallets::wallets_section_online":
		"Novčanici za internetska poduzeća",
	"business/wallets::wallets_section_online_intro":
		"Prodajete online? Ovi se novčanici povezuju s vašom internetskom trgovinom i prihvaćaju Bitcoin plaćanja od kupaca diljem svijeta — bez povratnih uplata i bez potrebe za trgovačkim računom.",
	"business/wallets::wallets_section_sole":
		"Novčanici za samostalne trgovce",
	"business/wallets::wallets_section_sole_intro":
		"Ako vodite trgovinu, kafić, studio ili uslugu sami, bilo koji od ovih novčanika prikladan je za vas. Odaberite hoćete li zadržati Bitcoin ili automatski pretvoriti dio svake uplate u lokalnu valutu.",
	"business/wallets::wallets_strike_note":
		"Strike Business omogućuje vam prihvaćanje Bitcoin i Lightning plaćanja bez naknada i s trenutačnom namirom. Podržava plaćanja uživo, online i putem računa, s mogućnošću automatske pretvorbe u lokalnu valutu.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Ovdje se prihvaća Bitcoin",
	"business/why::why_good_for_you":
		"Zašto je Bitcoin dobar i za vas",
	"business/why::why_learn_more_lowercase": "saznajte više ←",
	"business/why::why_s1_c1":
		"Inflacija se događa kad se tiska više novca ili kad se stvara ni iz čega. To s vremenom smanjuje vrijednost novca u vašem džepu — zato cijene rastu iz godine u godinu.",
	"business/why::why_s1_c2":
		"Bitcoin ima fiksnu ponudu: 21 milijun kovanica. Nijedna vlada, banka ili tvrtka ne može tiskati još. Vaša ušteđevina u Bitcoinu zadržava vrijednost s vremenom umjesto da je tiho gubi.",
	"business/why::why_s2_c1":
		"Posljednjih su godina mnoge američke banke propale zbog bankovnih navala. Kad mnogi klijenti istodobno žele podići svoj novac, banke nemaju dovoljno gotovine za sve.",
	"business/why::why_s2_c2":
		"Osim što čuvaju vaš novac, banke veliki dio posuđuju i ulažu. Ako ta ulaganja propadnu — ili deponenti izgube povjerenje — banka može propasti, a vaši depoziti mogu biti zamrznuti ili izgubljeni.",
	"business/why::why_s2_c3":
		"S Bitcoinom svoj novac možete držati izravno u vlastitom novčaniku. Bez banke. Bez posrednika. Bez bankovnih navala.",
	"business/why::why_s3_c1":
		"Za razliku od kreditnih kartica, PayPala ili tradicionalnih bankovnih računa, Bitcoinu ne treba ničije odobrenje.",
	"business/why::why_s3_c2":
		"Nitko ne može zamrznuti vaš račun, blokirati plaćanje ili vas isključiti iz mreže. To je prvi financijski sustav u povijesti koji možete koristiti bez straha od cenzure ili zapljene.",
	"business/why::why_s4_c1":
		"Bitcoin se često pogrešno razumije, ali tiho čini puno dobrih stvari u svijetu.",
	"business/why::why_s4_c2":
		"Pomogao je aktivistima za ljudska prava da se bore za svoju slobodu, smanjio emisije metana s odlagališta i naftnih bušotina, stabilizirao električne mreže i financirao javne službe poput nacionalnih parkova.",
	"business/why::why_biz_s1":
		"Niže naknade, više za poduzeće",
	"business/why::why_biz_s1_c1":
		"Bitcoin plaćanja zaobilaze banke i kartične tvrtke koje uzimaju 2 – 3 % od svake prodaje. Poduzeće zadržava više od vašeg plaćanja — što često znači bolje cijene i bolju uslugu za vas.",
	"business/why::why_biz_s2":
		"Trenutačna namira, bez povratnih uplata",
	"business/why::why_biz_s2_c1":
		"Bitcoin plaćanja se namiruju u nekoliko sekundi, izravno iz vašeg novčanika u poduzeće. Nema čekanja danima da banka oslobodi novac, niti skupih sporova oko povratnih uplata — što znači da se poduzeće može usredotočiti na pružanje usluge umjesto na borbu protiv prijevara.",
	"business/why::why_biz_s3":
		"Besplatno prihvaćanje, otvoreno svima",
	"business/why::why_biz_s3_c1":
		"Za prihvaćanje Bitcoina u poslovanju ne trebaju ugovori, mjesečni troškovi ni naknade za postavljanje. A milijuni Bitcoin korisnika diljem svijeta aktivno traže trgovce koji prihvaćaju Bitcoin — što besplatno predstavlja poduzeće novim kupcima.",
	"business/why::why_business_cta_intro":
		"Imate poduzeće i želite početi prihvaćati Bitcoin?",
	"business/why::why_business_cta_link":
		"Pogledajte kako to funkcionira ←",
	"business/why::why_for_business":
		"Zašto je Bitcoin dobar za ovo poduzeće",
	"business/why::why_for_business_intro":
		"Prihvaćanjem Bitcoina ovo poduzeće zadržava više od svake prodaje, prima trenutačna plaćanja bez povratnih uplata i dolazi do globalne publike Bitcoin korisnika — bez ugovora i mjesečnih troškova.",
	"business/why::why_good_for_you_intro":
		"Bitcoin nije dobar samo na blagajni — on je bolja vrsta novca koja štiti vašu ušteđevinu, privatnost i slobodu transakcija. Evo brzog sažetka.",
	"business/why::why_hero_subtitle":
		"Skenirali ste naljepnicu „Bitcoin Accepted Here“. Evo zašto je to dobra vijest — i za ovo poduzeće i za vas.",
	"business/why::why_intro_c1":
		"Poduzeće u kojem ste prihvaća Bitcoin — moderan, otvoreni sustav plaćanja kojim svatko diljem svijeta može koristiti bez banaka i posrednika koji uzimaju svoj dio.",
	"business/why::why_intro_c2":
		"U nastavku je sažetak zašto je prihvaćanje Bitcoina dobro za ovo poduzeće, kao i zašto je korištenje Bitcoina dobro za vas kao kupca.",
	"business/why::why_next_business_label": "Prihvatite Bitcoin",
	"business/why::why_next_business_title":
		"Prihvatite Bitcoin u svom poduzeću",
	"business/why::why_next_buy_label": "Kupite Bitcoin",
	"business/why::why_next_buy_title": "Kupite svoj prvi Bitcoin",
	"business/why::why_next_learn_label": "Saznajte više",
	"business/why::why_next_learn_title": "Saznajte više o Bitcoinu",
	"business/why::why_next_wallet_label": "Nabavite novčanik",
	"business/why::why_next_wallet_title":
		"Nabavite svoj Bitcoin novčanik",
	"business/why::why_whats_next_heading": "Kamo dalje?",
	"business/why::why_whats_next_intro":
		"Ako prvi put skenirate Bitcoin naljepnicu, ovo su najkorisnija mjesta za posjetiti.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer (izravno između korisnika)",
	"buy::buy_bitcoin_guide": "Kako kupiti Bitcoin",
	"buy::buy_step_1_header": "Odaberite svoju državu",
	"buy::buy_step_2_header": "Odaberite način plaćanja",
	"buy::buy_step_3_header": "Vaše opcije za kupnju",
	"buy::buy_step_4_header": "Sigurno čuvajte svoj Bitcoin",
	"buy::buy_header_subtitle":
		"Jednostavan vodič korak po korak za kupnju vašeg prvog Bitcoina.",
	"buy::buy_howto_name": "Kako kupiti Bitcoin",
	"buy::buy_meta_description":
		"Naučite kako sigurno kupiti Bitcoin uz naš vodič korak po korak. Odaberite svoju državu i način plaćanja da biste dobili najbolje opcije za kupnju.",
	"buy::buy_step_1_eyebrow": "Korak 1",
	"buy::buy_step_2_eyebrow": "Korak 2",
	"buy::buy_step_3_eyebrow": "Korak 3",
	"buy::buy_step_4_eyebrow": "Korak 4",
	"buy::buy_storage_cta_label": "Sljedeći korak",
	"buy::sources_bisq":
		"Bisq — decentralizirana peer-to-peer Bitcoin burza",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — globalni katalog Bitcoin bankomata",
	"buy::sources_kraken": "Kraken — popularna Bitcoin burza",
	"buy::sources_relai":
		"Relai — švicarska aplikacija za samostalnu pohranu Bitcoina",
	"buy::sources_river":
		"River — kupujte, rudarite i držite samo Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — kupujte Bitcoin uz podršku za Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — usrednjavanje troškova ulaganja u Bitcoin (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Dodaj jezik",
	"common::common_next_buy_bitcoin": "Kupite Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Naučite kako sigurno kupiti Bitcoin",
	"common::common_next_calculate": "Izračunajte svoju inflaciju",
	"common::common_next_calculate_desc":
		"Vidite kako inflacija s vremenom utječe na vašu plaću",
	"common::common_next_get_wallet": "Nabavite novčanik",
	"common::common_next_get_wallet_desc":
		"Nabavite svoj prvi Bitcoin novčanik — besplatan je",
	"common::common_next_keep_learning": "Učite dalje",
	"common::common_next_keep_learning_desc":
		"Vidite kako Bitcoin čini svijet boljim mjestom",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — indeks potrošačkih cijena (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — ponuda novca (kategorijski indeks)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008.)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Može li propasti aukcija trezora?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Što slijedi?",
	"common::common_sticker_files_mission_5": "Zatražite paket",
	"common::common_site_tagline": "Bitcoin edukacija za sve.",
	"common::common_source_btc_map":
		"BTC Map — globalni katalog trgovaca koji prihvaćaju Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — besplatan, otvoreni procesor Bitcoin plaćanja za samostalno hostanje",
	"common::common_source_oshi":
		"Oshi — platforma Bitcoin nagrada za trgovce",
	"common::common_source_strike_business":
		"Strike — Bitcoin i Lightning plaćanja za poduzeća",
	"common::common_sources_group_bitcoin": "Podaci o Bitcoinu",
	"common::common_sources_group_cpi":
		"Inflacija / CPI",
	"common::common_sources_group_debt": "Državni dug",
	"common::common_sources_group_money": "Podaci o ponudi novca",
	"common::common_sources_group_stories": "Stvarni primjeri",
	"common::common_sticker_files_mission_6":
		"Besplatne naljepnice na engleskom.",
	"common::common_sticker_files_next_flyers_label": "Letci",
	"common::common_sticker_files_next_flyers_title":
		"Tiskajte Bitcoin letke",
	"common::common_sticker_files_next_languages_label":
		"Datoteke naljepnica",
	"common::common_sticker_files_next_languages_title":
		"Pogledajte datoteke naljepnica na drugim jezicima",
	"common::common_sticker_files_print_these":
		"Tiskajte ovo u jednom kliku",
	"common::common_sticker_name_bdhi_black":
		"Naljepnica „Bitcoin Doesn\u2019t Have Inflation“ (crna)",
	"common::common_sticker_name_bdhi_orange":
		"Naljepnica „Bitcoin Doesn\u2019t Have Inflation“ (narančasta)",
	"common::common_sticker_name_caution":
		"Bitcoin naljepnica „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin naljepnica „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin naljepnica „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin naljepnica „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin naljepnica „Got Inflation?“",
	"common::common_sticker_name_study":
		"Naljepnica „Study Bitcoin“",
	"common::common_sticker_name_warning":
		"Bitcoin naljepnica „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin naljepnica „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Savjeti za naljepnice",
	"common::common_sticker_tips_intro":
		"Nakon što ispišete naljepnice, stavite ih gdje će ih ljudi vidjeti! Dobra mjesta:",
	"common::common_sticker_tips_list_1":
		"Javna mjesta gdje će ih ljudi vidjeti",
	"common::common_sticker_tips_list_2":
		"Mjesta gdje neće biti odmah uklonjene (naljepnice ne uzrokuju trajnu štetu)",
	"common::common_sticker_tips_list_3":
		"Površine na koje se dobro lijepe (metal, plastika, staklo)",
	"common::common_sticker_tips_list_4":
		"Ne lijepite na privatnu imovinu, prometne znakove, bankomate ili pumpe za gorivo",
	"common::common_stickers_printer_prefix": "Mi koristimo",
	"common::common_stickers_printer_suffix":
		"ali možete koristiti bilo kojeg tiskara naljepnica.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — indeks potrošačkih cijena za sve gradske potrošače",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — ponuda novca M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Izračunajte svoju inflacijsku razliku",
	"compound-inflation-calculator::cic_cta_label": "Sljedeći korak",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Saznajte koliko bi vaša plaća trebala porasti da bi pratila inflaciju.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Istražite više tema",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Pogledajte kako je Bitcoin povezan s novcem, slobodom, energijom i još mnogo toga.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Naučite kako funkcionira inflacija",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Kako tiskati i postavljati ove Bitcoin letke",
	"flyers::flyers_hero_subtitle":
		"Besplatni Bitcoin letci za ispis. Postavite ih na javnim mjestima kako bi više ljudi saznalo o Bitcoinu.",
	"flyers::flyers_hero_title": "Tiskajte i postavljajte Bitcoin letke",
	"flyers::flyers_next_get_stickers": "Proširite poruku još dalje",
	"flyers::flyers_next_get_stickers_desc":
		"Zatražite besplatan paket Bitcoin naljepnica",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Uključite se i pomozite širiti Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Želite pomoći u izgradnji kružnog Bitcoin gospodarstva? Najjednostavniji način je pomoći lokalnim poduzećima da počnu prihvaćati Bitcoin plaćanja.",
	"get-involved::get_involved_business_content_2":
		"Znate li poduzeće koje bi moglo početi? Pošaljite vlasnika na našu stranicu",
	"get-involved::get_involved_business_content_3":
		"Bitcoin za poduzeća.",
	"get-involved::get_involved_description":
		"Naši besplatni alati olakšavaju širenje prihvaćanja Bitcoina. Naljepnice, letci, naljepnice „Bitcoin Accepted Here“ za poduzeća i otvoreni kod kojem svatko može doprinijeti.",
	"get-involved::get_involved_header":
		"Uključite se i pomozite širiti Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Možete pomoći to promijeniti. Napravili smo nekoliko besplatnih alata koji će vam pomoći širiti nadu o Bitcoinu u vašoj zajednici.",
	"get-involved::get_involved_biz_stickers_note":
		"Već prihvaćate Bitcoin? Recite svojim kupcima našim besplatnim naljepnicama „Bitcoin Accepted Here“. Šaljemo paket na bilo koju adresu u SAD-u ili Kanadi, ili možete sami tiskati bilo gdje u svijetu.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Naljepnice „Accepted Here“",
	"get-involved::get_involved_card_biz_stickers_source":
		"Izvor: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"Besplatne naljepnice „Bitcoin Accepted Here“ za vaše poduzeće",
	"get-involved::get_involved_card_business_label":
		"Bitcoin za poduzeća",
	"get-involved::get_involved_card_business_source":
		"Izvor: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"Sve što poduzeću treba za prihvaćanje Bitcoin plaćanja",
	"get-involved::get_involved_card_flyers_label": "Letci za ispis",
	"get-involved::get_involved_card_flyers_source":
		"Izvor: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"Preuzmite i ispišite besplatne Bitcoin letke",
	"get-involved::get_involved_card_github_label": "Otvoreni kod",
	"get-involved::get_involved_card_github_source": "Izvor: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"Doprinesite bitcoin.rocksu na GitHubu",
	"get-involved::get_involved_card_stickers_label":
		"Besplatne naljepnice",
	"get-involved::get_involved_card_stickers_source":
		"Izvor: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"Zatražite besplatan paket Bitcoin naljepnica, ravno na vaša vrata",
	"get-involved::get_involved_flyers_content_1":
		"Letci su najjednostavniji način da predstavite Bitcoin svojoj zajednici. Preuzmite naš besplatni Bitcoin letak, ispišite onoliko primjeraka koliko želite i objesite ih na oglasne ploče, u kafićima, na okupljanjima ili gdje god se ljudi okupljaju.",
	"get-involved::get_involved_flyers_content_2":
		"Svaki letak ima privlačan naslov i QR kod koji znatiželjne čitatelje vodi na bitcoin.rocks da saznaju više.",
	"get-involved::get_involved_flyers_content_3":
		"Za razliku od naljepnica, letci se mogu tiskati po potrebi bilo gdje u svijetu — trebate samo pisač i nekoliko minuta.",
	"get-involved::get_involved_flyers_header":
		"Tiskajte i postavljajte letke",
	"get-involved::get_involved_flyers_image_alt":
		"Pregled besplatnog Bitcoin letka za ispis bitcoin.rocksa",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks je besplatan, otvoreni projekt pod MIT licencom. Naša je misija ubrzati prihvaćanje Bitcoina kroz edukaciju — a to ne možemo sami.",
	"get-involved::get_involved_github_content_2":
		"Ako ste programer, dizajner, pisac ili prevoditelj, postoji način da pomognete. Posebno tražimo ljude koji mogu prevesti naš sadržaj na više jezika kako bi ljudi diljem svijeta mogli učiti o Bitcoinu na svom materinjem jeziku.",
	"get-involved::get_involved_github_content_3":
		"Forkajte naš repozitorij, otvorite pull request, prijavite issue ili dajte zvjezdicu projektu. Svaki doprinos pomaže Bitcoinu da dođe do više ljudi.",
	"get-involved::get_involved_github_header":
		"Doprinesite na GitHubu",
	"get-involved::get_involved_sticker_image_alt":
		"Paket besplatnih Bitcoin naljepnica s tekstom bitcoin.rocksa",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "ŠTEDNJA",
	"index::home_card_label_art_1": "Usporedimo",
	"index::home_card_label_art_2": "Proširite poruku",
	"index::home_card_label_art_3": "Ulična umjetnost",
	"index::home_card_label_bank_runs": "Sustav s punom rezervom",
	"index::home_card_label_bonds": "Usporedimo",
	"index::home_card_label_business_1": "Koja je razlika?",
	"index::home_card_label_business_2": "Prihvatite Bitcoin plaćanja",
	"index::home_card_label_cash": "Usporedimo",
	"index::home_card_label_cbdc": "Otvoreno ili zatvoreno?",
	"index::home_card_label_coding_1": "Interaktivni vodič",
	"index::home_card_label_coding_2": "Izgradite hardver",
	"index::home_card_label_coding_3": "Programerske zagonetke",
	"index::home_card_label_crowdfunding_1": "Prosvjedi EndSARS",
	"index::home_card_label_crowdfunding_2": "Novac koji se ne može zaustaviti",
	"index::home_card_label_crowdfunding_3": "Financirajte svoj projekt",
	"index::home_card_label_crypto": "Koja je razlika?",
	"index::home_card_label_energy_1": "Stabilizacija mreže",
	"index::home_card_label_energy_4": "Odgovor na potražnju",
	"index::home_card_label_energy_5": "Ruralna elektrifikacija",
	"index::home_card_label_energy_6": "Poticaj obnovljivim izvorima",
	"index::home_card_label_environment_1": "Smanjenje metana",
	"index::home_card_label_environment_2": "Spasiti nacionalni park",
	"index::home_card_label_environment_3": "Najzelenija industrija",
	"index::home_card_label_environment_4": "Manje ispuštenog plina",
	"index::home_card_label_equality_1": "Nada i prilike",
	"index::home_card_label_equality_2": "Mijenjač igre",
	"index::home_card_label_food_1": "Cijene hrane",
	"index::home_card_label_food_2": "Farme i tlo",
	"index::home_card_label_freedom_1": "Tiranski režimi",
	"index::home_card_label_freedom_2": "Jedinstven alat",
	"index::home_card_label_get_started_1":
		"Osnove za početnike",
	"index::home_card_label_get_started_2": "Vaš prvi novčanik",
	"index::home_card_label_get_started_3": "Kupite Bitcoin",
	"index::home_card_label_gold": "Što je bolje?",
	"index::home_card_label_housing_1": "Pristupačno stanovanje",
	"index::home_card_label_human_rights_1":
		"Promicanje ljudskih prava",
	"index::home_card_label_human_rights_2": "Prihvaćanje na terenu",
	"index::home_card_label_human_rights_3": "Globalan utjecaj",
	"index::home_card_label_inflation": "Bitcoin je bolji novac",
	"index::home_card_label_networks_1": "Pregled mreže uživo",
	"index::home_card_label_networks_2": "Usporedimo",
	"index::home_card_label_payments_1": "Koja je razlika?",
	"index::home_card_label_payments_2": "Brza i jeftina plaćanja",
	"index::home_card_label_payments_3": "Doznake",
	"index::home_card_label_payments_4": "Primite plaćanja",
	"index::home_card_label_politics_1": "Politički paradoks",
	"index::home_card_label_politics_2": "Poduzmite akciju",
	"index::home_card_label_property_rights_1": "Usporedimo",
	"index::home_card_label_property_rights_2": "Pravo vlasništvo",
	"index::home_card_label_salary": "Zaštitite svoju plaću",
	"index::home_card_label_self_custody_1":
		"Vodič za Bitcoin novčanike",
	"index::home_card_label_self_custody_2": "Najvažniji korak",
	"index::home_card_label_self_custody_3": "Suvereni novac",
	"index::home_card_label_war_1": "Kraj beskrajnog rata",
	"index::home_card_label_war_2": "Pomoć veteranima",
	"index::home_card_label_war_3": "Bijeg u ratno doba",
	"index::home_h1":
		"Bitcoin je bolji novac koji gradi bolji svijet.",
	"index::home_nav_about": "O nama",
	"index::home_nav_get_involved": "Uključite se",
	"index::home_nav_learn": "Naučite",
	"index::home_source_prefix": "Izvor:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon i Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016.)",
	"lightning::lightning_s1_c4": "Pogledajte",
	"lightning::lightning_grid_heading":
		"Popularni Lightning novčanici",
	"lightning::lightning_hardware_cta_label":
		"Hardverski novčanici",
	"lightning::lightning_header_subtitle":
		"Lightning vam omogućuje slanje Bitcoina u sekundama za manje od cent — odaberite pravi novčanik za iznos koji želite potrošiti.",
	"lightning::lightning_s1_c4_end": "da saznate više.",
	"lightning::lightning_s1_c4_link":
		"vodič za Bitcoin hardverske novčanike",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning novčanik",
	"lightning::sources_breez_lightning":
		"Breez — Lightning novčanik za samostalnu pohranu",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentacija Lightning Networka",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — kustodialni Lightning novčanik",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android i web",
	"nostr/index::nostr_platform_web": "Web preglednik",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr je novi, decentralizirani komunikacijski protokol za internet — nije u vlasništvu nijedne tvrtke, ima ugrađene Bitcoin zapove i možete mijenjati klijente bez gubitka pratitelja.",
	"nostr/index::nostr_amethyst_f1":
		"Mnogo značajki i opcija prilagodbe",
	"nostr/index::nostr_amethyst_f2":
		"Potreban je zaseban Bitcoin novčanik",
	"nostr/index::nostr_amethyst_f3": "100 % besplatno",
	"nostr/index::nostr_damus_f1":
		"Poznato sučelje slično Twitteru",
	"nostr/index::nostr_damus_f2":
		"Potreban je zaseban Bitcoin novčanik",
	"nostr/index::nostr_damus_f3": "100 % besplatno",
	"nostr/index::nostr_download_heading":
		"Preuzmite besplatan Nostr klijent",
	"nostr/index::nostr_download_intro":
		"Nostr klijenti besplatne su aplikacije koje vam omogućuju čitanje i pisanje na Nostr mreži. Svi rade zajedno — možete u svakom trenutku promijeniti klijenta i zadržati svoje pratitelje i sadržaj.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr je novi, decentralizirani komunikacijski protokol za internet — nije u vlasništvu nijedne tvrtke, ima ugrađene Bitcoin zapove i možete mijenjati aplikacije bez gubitka pratitelja.",
	"nostr/index::nostr_hero_title": "Što je Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr je poput e-pošte: nitko nije vlasnik protokola, svatko može graditi aplikacije na njemu i vi birate koja vam najbolje odgovara. Za razliku od Twittera ili Facebooka, ne postoji središnja tvrtka koja može cenzurirati, zatvoriti ili ušutkati vaše račune.",
	"nostr/index::nostr_intro_c2":
		"U nastavku je sažetak zašto je Nostr važan — i zatim svi besplatni Nostr klijenti potrebni za početak već danas.",
	"nostr/index::nostr_iris_f1":
		"Vrlo lagan — ne treba se instalirati",
	"nostr/index::nostr_iris_f2":
		"Lak način za isprobati Nostr s probnim računom",
	"nostr/index::nostr_iris_f3": "100 % besplatno",
	"nostr/index::nostr_learn_more_label": "Saznajte više detaljno",
	"nostr/index::nostr_learn_more_title":
		"Saznajte više o Nostru na nostr.how",
	"nostr/index::nostr_primal_f1": "Naš preporučeni klijent prvi izbor",
	"nostr/index::nostr_primal_f2":
		"Ugrađeni novčanik za Bitcoin zapove",
	"nostr/index::nostr_primal_f3": "100 % besplatno",
	"nostr/index::nostr_s1": "Protokol, ne platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr je novi protokol koji vam omogućuje komunikaciju na internetu bez straha od cenzure, zabrana ili ušutkavanja.",
	"nostr/index::nostr_s1_c2":
		"Platforme poput Twittera ili Facebooka kontrolira jedna tvrtka, ali Nostr protokol nitko ne kontrolira.",
	"nostr/index::nostr_s2": "Sloboda kretanja",
	"nostr/index::nostr_s2_c1":
		"Nostr je poput e-pošte. Nitko ne kontrolira protokol e-pošte i svatko može izgraditi klijenta (poput Gmaila, Hotmaila itd.).",
	"nostr/index::nostr_s2_c2":
		"Ni Nostr protokol nitko ne kontrolira i svatko može izgraditi klijenta (poput Damusa, Amethysta itd.).",
	"nostr/index::nostr_s2_c3":
		"Ako vam se ne sviđa kako neki klijent radi, možete prebaciti svoj Nostr račun u drugog klijenta bez gubitka pratitelja ili sadržaja.",
	"nostr/index::nostr_s3": "Ugrađen Bitcoin",
	"nostr/index::nostr_s3_c1":
		"Bitcoin je ugrađen u Nostr protokol. Kad vidite sadržaj koji vam se sviđa, možete poslati „Bitcoin zap“ kako biste zahvalili autoru.",
	"nostr/index::nostr_s3_c2":
		"Na centraliziranim platformama poput Twittera i Facebooka, središnja tvrtka zarađuje na vašem sadržaju. Ali na otvorenom protokolu poput Nostra, vi zarađujete na svom sadržaju.",
	"nostr/index::sources_damus": "Damus — Nostr klijent za iPhone",
	"nostr/index::sources_iris": "Iris — Nostr klijent za web preglednik",
	"nostr/index::sources_nostr_how": "nostr.how — što je Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr protokol — specifikacije otvorenog koda",
	"nostr/index::sources_primal":
		"Primal — Nostr klijent s ugrađenim novčanikom za Bitcoin zapove",
	"nostr/index::what_is_nostr": "Što je Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Tiskajte vlastite Bitcoin naljepnice s ovim datotekama.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Zahtjev primljen 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Naručite na veliko",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Podijelite na Nostru",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Što je Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Trebate još naljepnica?",
	"sticker-success::sticker_success_hero_title":
		"Vaše naljepnice su na putu 🎉",
	"sticker-success::sticker_success_share_header":
		"Podijelite gdje ste zalijepili svoje naljepnice",
	"sticker-success::sticker_success_tips_header":
		"Dobra mjesta za lijepljenje naljepnica",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"A jednom kad počnete, ",
	"stickers::stickers_instructions_1":
		"Unesite svoju poštansku adresu i poslat ćemo vam paket besplatnih Bitcoin naljepnica. Vaše naljepnice stići će u običnoj bijeloj omotnici.",
	"stickers::stickers_btn_choose_pack": "Odaberite ovaj paket",
	"stickers::stickers_bulk_c1":
		"Trebate više od nekoliko naljepnica?",
	"stickers::stickers_bulk_c2":
		"Naručite na veliko od istog tiskara koji mi koristimo",
	"stickers::stickers_bulk_c3":
		" — što više kupujete, jeftinija je svaka.",
	"stickers::stickers_bulk_cta": "Kupite naljepnice na veliko",
	"stickers::stickers_bulk_header":
		"Naručite naljepnice na veliko",
	"stickers::stickers_hero_subtitle":
		"Zatražite besplatan paket Bitcoin naljepnica i postavite ih na javnim mjestima kako bi više ljudi saznalo o Bitcoinu.",
	"stickers::stickers_hero_title": "Besplatne Bitcoin naljepnice",
	"stickers::stickers_intro_c1":
		"Naša je misija pomoći vam da uz pomoć naljepnica „narančasta tabletizirate“ više ljudi tako što ćete postavljati Bitcoin naljepnice na javnim mjestima. Sve naše naljepnice imaju QR kodove koji vode na edukativne stranice o",
	"stickers::stickers_intro_c3": "inflaciji",
	"stickers::stickers_intro_c4":
		"Odaberite paket naljepnica u nastavku i odaberite kako ga želite — šaljemo besplatan paket bilo kome u SAD-u ili Kanadi, ili možete sami tiskati svoje naljepnice bilo gdje u svijetu.",
	"stickers::stickers_mail_header":
		"Šaljemo naljepnice besplatno",
	"stickers::stickers_next_print_flyers": "Proširite poruku još dalje",
	"stickers::stickers_next_print_flyers_desc":
		"Tiskajte besplatne Bitcoin letke i postavljajte ih na javna mjesta",
	"stickers::stickers_option_bulk":
		"📦 Globalno — naručite na veliko",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — besplatna pošta",
	"stickers::stickers_option_print":
		"🌍 Globalno — sami tiskajte",
	"stickers::stickers_option_usa":
		"🇺🇸 SAD — besplatna pošta",
	"stickers::stickers_print_c1":
		"Možete doprinijeti tako što ćete sami tiskati naljepnice, bilo gdje u svijetu da živite. Kliknite na svoj jezik u nastavku da preuzmete datoteke naljepnica i upute za tiskanje.",
	"stickers::stickers_print_c2":
		"Nisu sve naljepnice dostupne na svim jezicima.",
	"stickers::stickers_print_header":
		"Tiskajte vlastite datoteke naljepnica",
	"stickers::stickers_request_c1":
		"Ispunite obrazac u nastavku da biste zatražili datoteke naljepnica na svom lokalnom jeziku. Obavijestit ćemo vas kad budu spremne.",
	"stickers::stickers_request_header":
		"Ne vidite svoj jezik?",
	"stickers::stickers_share_c2":
		"Pratite nas na Nostru tako što ćete nas potražiti u bilo kojem Nostr klijentu",
	"stickers::stickers_share_c3":
		".",
	"stickers::stickers_signs_pack_description":
		"Naljepnice s upozorenjem, oprezom i obavijestima s Bitcoin porukama — dizajnirane da zaokupe pažnju i zaustave ljude.",
	"stickers::stickers_step_1_description":
		"Svaki paket sadrži drugačiju kolekciju Bitcoin naljepnica s QR kodovima koji uče ljude o Bitcoinu.",
	"stickers::stickers_step_1_eyebrow": "Korak 1",
	"stickers::stickers_step_1_header":
		"Odaberite paket naljepnica",
	"stickers::stickers_step_2_description":
		"Šaljemo besplatne pakete na adrese u SAD-u i Kanadi. U ostalom dijelu svijeta naljepnice možete tiskati sami ili ih naručiti na veliko.",
	"stickers::stickers_step_2_eyebrow": "Korak 2",
	"stickers::stickers_step_2_header":
		"Kako želite svoje naljepnice?",
	"stickers::stickers_text_pack_description":
		"Mješavina Bitcoin slogana i veselih ideja, dizajnirana da pobudi znatiželju na javnim mjestima.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — odaberite svoj novčanik",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — recenzije metalnog spremišta Bitcoin sjemena",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin novčanik za samostalnu pohranu",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardverski novčanik",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardverski novčanik",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardverski novčanik",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardverski novčanik",
	"wallets::sources_seedsigner":
		"SeedSigner — DIY otvoreni uređaj za potpisivanje Bitcoin transakcija",
	"wallets::wallets_grid_heading": "Popularni Bitcoin novčanici",
	"wallets::wallets_header_subtitle":
		"Vodič korak po korak za odabir novčanika, izradu sigurnosne kopije ključeva i preuzimanje pune kontrole nad svojim Bitcoinom.",
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
		`translate-rest-part2 (hr): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
