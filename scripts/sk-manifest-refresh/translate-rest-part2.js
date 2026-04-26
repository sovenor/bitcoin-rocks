#!/usr/bin/env node
/**
 * Slovak manifest refresh — part 2 of non-inflation namespaces.
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
	"sk.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Účtovnícke služby Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Sprievodca v jednoduchej slovenčine, ako zaniesť prijímanie Bitcoinu do účtovníctva — hybridné peňaženky, nákladová základňa, kapitálové zisky a kedy zavolať účtovníkovi.",
	"business/accounting::accounting_s1_c1":
		"Najjednoduchší spôsob, ako prijímať Bitcoin, je pomocou hybridnej peňaženky, ktorá automaticky predá 100 % prijatého Bitcoinu za eurá (alebo vašu miestnu menu) ihneď po príchode platby.",
	"business/accounting::accounting_s1_c2":
		"S týmto nastavením vaše účtovníctvo vyzerá presne tak ako dnes — konečná suma je zakaždým v eurách. Žiadna nákladová základňa, žiadne kapitálové zisky, žiadne nové tabuľky.",
	"business/accounting::accounting_s2":
		"Ak si časť Bitcoinu ponecháte: sledovanie nákladovej základne",
	"business/accounting::accounting_s2_c1":
		"Niektoré firmy sa rozhodnú si časť prijatého Bitcoinu ponechať, namiesto aby ho celý automaticky konvertovali. Ak je to váš prípad, hlavným krokom navyše je sledovať nákladovú základňu — hodnotu v eurách pri každej Bitcoin platbe ku dňu, keď ste ju prijali.",
	"business/accounting::accounting_s2_c2":
		"Aj keď svoje podnikanie vnímate čisto v Bitcoine, väčšina daňových úradov stále chce, aby ste hodnotu nahlásili v eurách. Dobrá správa: sú to len dve čísla na transakciu — množstvo prijatého Bitcoinu a jeho hodnota v eurách v ten deň.",
	"business/accounting::accounting_s2_c3":
		"Použite nižšie uvedené nástroje, aby ste vyhľadávanie automatizovali a nemuseli každý deň kontrolovať ceny.",
	"business/accounting::accounting_s3":
		"Míňanie alebo predaj Bitcoinu, ktorý ste si ponechali",
	"business/accounting::accounting_s3_c1":
		"Ak každú platbu automaticky konvertujete do eur, túto sekciu preskočte — netýka sa vás.",
	"business/accounting::accounting_s3_c2":
		"Ak ste si nejaký Bitcoin ponechali a neskôr sa rozhodnete ho minúť alebo predať, doplňte predajnú cenu do tej istej tabuľky s nákladovou základňou. Rozdiel medzi tým, koľko Bitcoin stál, keď ste ho prijali, a tým, koľko stojí, keď ho miniete alebo predáte, je kapitálový zisk alebo strata.",
	"business/accounting::accounting_s3_c3": "Dva rýchle príklady:",
	"business/accounting::accounting_s4":
		"Potrebujete profíka, ktorý rozumie Bitcoinu?",
	"business/accounting::accounting_s4_c1":
		"Ak to radšej prenecháte niekomu inému — alebo je vaše účtovníctvo Bitcoinu zložitejšie, než čo zvládne hybridná peňaženka — vrelo odporúčame Účtovnícke služby Satoshi Pacioli, firmu špecializovanú na Bitcoin účtovníctvo pre podniky.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin účtovníctvo pre vašu firmu",
	"business/accounting::accounting_card_bpr_label": "CENA BITCOINU",
	"business/accounting::accounting_card_bpr_title":
		"Vyhľadajte aktuálnu či historickú cenu Bitcoinu v dolároch",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN ÚČTOVNÍK",
	"business/accounting::accounting_card_spreadsheet_label": "IMPORT DO EXCELU",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automaticky sťahujte ceny Bitcoinu do Excelu",
	"business/accounting::accounting_card_wallets_label": "HYBRIDNÉ PEŇAŽENKY",
	"business/accounting::accounting_card_wallets_title":
		"Pozrite si naše odporúčané firemné peňaženky",
	"business/accounting::accounting_disclaimer":
		"Tento sprievodca slúži iba na informačné účely a nie je daňovým poradenstvom. Pre daňové poradenstvo špecifické pre vašu situáciu sa, prosím, obráťte na kvalifikovaného účtovníka.",
	"business/accounting::accounting_disclaimer_label": "Upozornenie",
	"business/accounting::accounting_example_feb_1": "1. februára",
	"business/accounting::accounting_example_gain_badge": "Kapitálový zisk",
	"business/accounting::accounting_example_gain_explain":
		"Zaznamenáte kapitálový zisk 10 $.",
	"business/accounting::accounting_example_jan_1": "1. januára",
	"business/accounting::accounting_example_loss_badge": "Kapitálová strata",
	"business/accounting::accounting_example_loss_explain":
		"Zaznamenáte kapitálovú stratu 10 $.",
	"business/accounting::accounting_example_received_label": "Prijaté",
	"business/accounting::accounting_example_sold_label":
		"Predané alebo minuté",
	"business/accounting::accounting_hero_subtitle":
		"Prijímanie Bitcoinu vo vašej firme nemusí komplikovať vaše účtovníctvo. Tu je krátka verzia — plus nástroje a odborníci, vďaka ktorým to bude bezbolestné.",
	"business/accounting::accounting_intro_c1":
		"Ak už prijímate hotovosť alebo karty, pridať do firemného účtovníctva Bitcoin je jednoduchšie, než to vyzerá. Máte dve cesty: automaticky konvertovať každú Bitcoin platbu do eur hneď po jej príchode (žiadne nové účtovníctvo) alebo si časť ponechať ako Bitcoin (pár čísel navyše na sledovanie).",
	"business/accounting::accounting_intro_c2":
		"Tento sprievodca vás prevedie obidvomi cestami — aby ste si mohli vybrať tú, ktorá vyhovuje vášmu podnikaniu, a začať prijímať Bitcoin s pokojom.",
	"business/accounting::accounting_s1": "Ľahká cesta: automatická konverzia do eur",
	"business/accounting::accounting_s3_c6":
		"A to je všetko. Základná matematika je rovnaká, akou účtujete akékoľvek iné zhodnocujúce sa alebo znehodnocujúce sa aktívum.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktuálna a historická cena Bitcoinu v dolároch",
	"business/accounting::sources_satoshi_pacioli":
		"Účtovnícke služby Satoshi Pacioli — Bitcoin účtovníctvo pre firmy",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — import cien kryptomien do Excelu",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Stručné odpovede na otázky, ktoré si obchodníci kladú najčastejšie, predtým ako začnú prijímať Bitcoin — poplatky, vyrovnanie, peňaženky, chargebacky, náklady a ďalšie.",
	"business/faq::faq_intro_c1":
		"Kliknutím na ľubovoľnú otázku nižšie sa rozbalí odpoveď. Keď budete pripravení začať prijímať Bitcoin, zdroje pre firmy v dolnej časti stránky vás prevedú každým krokom.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ÚČTOVNÍCTVO",
	"business/index::biz_label_faq": "ČASTÉ OTÁZKY",
	"business/index::biz_label_maps": "MAPY OBCHODNÍKOV",
	"business/index::biz_label_rewards": "ODMENY",
	"business/index::biz_label_stickers": "NÁLEPKY",
	"business/index::biz_label_wallets": "PEŇAŽENKY",
	"business/index::biz_meta_description":
		"Prijímajte Bitcoin vo svojej firme za nižšie poplatky, s okamžitým vyrovnaním, bez chargebackov a získajte viac zákazníkov.",
	"business/index::business_hero_subtitle":
		"Prijímajte platby s nižšími poplatkami, dostávajte zaplatené okamžite a získajte milióny nových zákazníkov — bez zmlúv a bez skrytých nákladov.",
	"business/index::business_intro_c1":
		"Bitcoin dáva vašej firme rýchlejší, lacnejší a súkromnejší spôsob, ako dostať zaplatené. Žiadni sprostredkovatelia. Žiadne chargebacky. Žiadne zmluvy. Iba peniaze, ktoré sa vyrovnajú za sekundy, priamo od zákazníka k vám.",
	"business/index::business_intro_c2":
		"Nižšie je krátka verzia toho, prečo je Bitcoin dobrý pre podnikanie — a pod ňou každý zdroj, ktorý potrebujete, aby ste ho mohli začať prijímať už dnes.",
	"business/index::business_resources_heading":
		"Všetko, čo potrebujete na prijímanie Bitcoinu",
	"business/index::business_resources_intro":
		"Prechádzajte tieto zdroje vlastným tempom. Každý je krátky a praktický sprievodca.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Povedzte nám o svojej firme",
	"business/maps::biz_maps_form_intro":
		"Potrebujeme len pár údajov, aby sme vás zapísali. Údaje o adrese uchovávame len po dobu nevyhnutnú na odoslanie vašej firmy do máp.",
	"business/maps::biz_maps_hero_subtitle":
		"Zapíšte svoju firmu zadarmo na BTC Map — otvorený celosvetový adresár obchodníkov prijímajúcich Bitcoin — aby vás Bitcoineri vo vašom okolí našli a mohli u vás minúť Bitcoin.",
	"business/maps::biz_maps_hero_title":
		"Umiestnite svoju firmu na mapy Bitcoin obchodníkov",
	"business/maps::biz_maps_intro_c1":
		"Bitcoineri aktívne hľadajú miesta, kde minúť. Keď bude vaša firma na mape, ukážete sa každému Bitcoin používateľovi, ktorý v okolí hľadá, kde sa najesť, nakúpiť alebo prespať — úplne zadarmo.",
	"business/maps::biz_maps_intro_c2":
		"Stačí vyplniť krátky formulár nižšie a my vašu firmu odošleme na BTC Map a ďalšie mapy Bitcoin obchodníkov.",
	"business/maps::biz_maps_meta_description":
		"Zapíšte svoju firmu zadarmo na BTC Map a ďalšie mapy Bitcoin obchodníkov, aby vás Bitcoineri vo vašom okolí našli.",
	"business/maps::biz_maps_placeholder_address": "Ulica a popisné číslo",
	"business/maps::biz_maps_placeholder_category":
		"Kategória (napr. reštaurácia, kaviareň, hotel)",
	"business/maps::biz_maps_placeholder_city": "Mesto",
	"business/maps::biz_maps_placeholder_country": "Krajina",
	"business/maps::biz_maps_placeholder_name": "Názov firmy",
	"business/maps::biz_maps_placeholder_region": "Kraj / región / oblasť",
	"business/maps::biz_maps_placeholder_website": "Webové stránky (nepovinné)",
	"business/maps::biz_maps_view_map_cta": "Zobraziť BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Zobraziť BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Ďakujeme za odoslanie vašej firmy. Čoskoro vás zapíšeme na mapy Bitcoin obchodníkov.",
	"business/maps-success::biz_maps_success_hero_title": "Žiadosť prijatá 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Vaša firma bude zapísaná na BTC Map a ďalšie adresáre Bitcoin obchodníkov v priebehu 1 až 2 týždňov. Každú prihlášku kontrolujeme manuálne, aby sme udržali mapy presné.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Hneď ako bude vaše zapísanie naživo, Bitcoineri vo vašom okolí si vašu firmu nájdu a prídu tam minúť Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header": "Čo bude nasledovať",
	"business/maps-success::biz_maps_success_view_c1":
		"Kým čakáte, pozrite si BTC Map a uvidíte rastúcu sieť firiem po celom svete, ktoré prijímajú Bitcoin.",
	"business/maps-success::biz_maps_success_view_header": "Pozrite sa, kde sa objavíte",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Stiahnite si anglické súbory s nálepkami, aby ste si mohli vytlačiť vlastné nálepky „Tu prijímame Bitcoin“.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Vytlačte si vlastné nálepky „Tu prijímame Bitcoin“ v angličtine, aby ste dali zákazníkom vedieť, že prijímate Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Stiahnite si anglické súbory nálepiek „Tu prijímame Bitcoin“",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Ďakujeme, že ste si vyžiadali súbory nálepiek „Tu prijímame Bitcoin“ vo vašom jazyku.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Žiadosť prijatá 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vaše súbory s nálepkami vytvoríme a zverejníme v priebehu 3 až 4 týždňov. Hneď ako budú pripravené, budete si ich môcť zadarmo stiahnuť a vytlačiť z našej stránky so súbormi nálepiek.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Súbory nálepiek vydávame po dávkach, takže môže trvať niekoľko týždňov, kým váš jazyk pôjde naživo. Ďakujeme za trpezlivosť!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Čo bude nasledovať",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "Objednať hromadne",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Vyžiadať ďalší balíček zadarmo",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vaše nálepky „Tu prijímame Bitcoin“ zadarmo dostanete za 2 až 4 týždne v obyčajnej bielej obálke s 3 nálepkami.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Vaše nálepky sú na ceste 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ak 3 nálepky pre vašu firmu nestačia, pokojne si vyžiadajte ďalší balíček zadarmo — alebo si objednajte hromadne u toho istého tlačiara, akého používame my.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Potrebujete viac nálepiek?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na vchodové dvere alebo do výkladu, aby ich zákazníci videli, kým vstúpia dnu",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Pri pokladni, platobnom termináli alebo mieste na platenie",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Na jedálne lístky, cenníky alebo pokladničky na sprepitné",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Neumiestňujte ich na miesta, ktoré nevlastníte alebo nemáte povolenie tam nálepky umiestniť",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Dobré miesta pre vaše nálepky",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Dajte zákazníkom vedieť, že prijímate Bitcoin. Objednajte si balíček nálepiek „Tu prijímame Bitcoin“ zadarmo, aby ste ich vyvesili vo svojej prevádzke.",
	"business/stickers::biz_stickers_hero_title":
		"Nálepky „Tu prijímame Bitcoin“ zadarmo",
	"business/stickers::biz_stickers_intro_c1":
		"Prijímanie Bitcoinu je len polovica práce — vaši zákazníci tiež musia vedieť, že ho prijímate. Tieto malé nálepky „Tu prijímame Bitcoin“ sú navrhnuté tak, aby sa dali nalepiť na vaše vchodové dvere, pokladňu, menu alebo kamkoľvek, kde ich zákazníci uvidia, kým zaplatia.",
	"business/stickers::biz_stickers_intro_c2":
		"Pošleme vám balíček zadarmo kamkoľvek v USA alebo Kanade, alebo si môžete vytlačiť vlastné kdekoľvek na svete.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — zadarmo poštou",
	"business/stickers::biz_stickers_option_print":
		"🌍 Celosvetovo — vytlačím si vlastné",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 USA — zadarmo poštou",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Preklad frázy „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Preklad frázy „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Vlastné nálepky „Tu prijímame Bitcoin“ si môžete vytlačiť bez ohľadu na to, kde žijete. Kliknutím na svoj jazyk nižšie stiahnete súbory nálepiek a pokyny na tlač.",
	"business/stickers::biz_stickers_print_header":
		"Vytlačte si vlastné súbory nálepiek",
	"business/stickers::biz_stickers_request_c1":
		"Vyplňte formulár nižšie a vyžiadajte si súbory nálepiek „Tu prijímame Bitcoin“ vo vašom miestnom jazyku. Dáme vám vedieť, hneď ako budú pripravené.",
	"business/stickers::biz_stickers_request_header": "Nevidíte svoj jazyk?",
	"business/stickers::biz_stickers_step_description":
		"Balíček zadarmo pošleme na adresy v USA a Kanade. Kdekoľvek inde na svete si môžete vytlačiť vlastné.",
	"business/stickers::biz_stickers_step_header":
		"Ako si chcete nálepky zaobstarať?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Všetky Bitcoin peňaženky sú vzájomne kompatibilné — vyberte si tú, ktorá sedí vašej firme. Zadarmo, okamžité vyrovnanie, bez chargebackov.",
	"business/wallets::sources_breez_business":
		"Breez — Lightning peňaženka iba pre Bitcoin",
	"business/wallets::sources_ibex": "IBEX — infraštruktúra pre Lightning platby",
	"business/wallets::sources_opennode":
		"OpenNode — spracovateľ Bitcoin platieb",
	"business/wallets::sources_square": "Square — prijímajte Bitcoin platby",
	"business/wallets::sources_zaprite":
		"Zaprite — fakturácia v Bitcoine pre firmy",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin peňaženky sú zadarmo. Vyberte si tú, ktorá vyhovuje vašej firme — osobný predaj, online alebo faktúry — a začnite prijímať Bitcoin v priebehu pár minút.",
	"business/wallets::wallets_section_invoice":
		"Peňaženky pre firmy fakturujúce klientom",
	"business/wallets::wallets_section_invoice_intro":
		"Ak fakturujete klientom (poradenstvo, freelancing, B2B služby), použite peňaženku postavenú okolo fakturácie. Klient zaplatí Bitcoin faktúru niekoľkými kliknutiami.",
	"business/wallets::wallets_section_multiple":
		"Peňaženky pre firmy s viacerými zamestnancami",
	"business/wallets::wallets_section_multiple_intro":
		"Ak máte tím, ktorý prijíma platby pri pokladni, vyberte peňaženku, ktorá podporuje viac prihlásení zamestnancov — takže každý zamestnanec dostane vlastný PIN a vy si udržíte prehľadnú evidenciu, kto akú platbu prijal.",
	"business/wallets::wallets_section_online": "Peňaženky pre online podnikanie",
	"business/wallets::wallets_section_online_intro":
		"Predávate na webe? Tieto peňaženky sa napoja na váš online obchod a prijímajú Bitcoin od ktoréhokoľvek zákazníka, kdekoľvek na svete — bez chargebackov a bez nutnosti mať obchodnícky účet.",
	"business/wallets::wallets_section_sole":
		"Peňaženky pre samostatne vlastnené firmy",
	"business/wallets::wallets_section_sole_intro":
		"Ak prevádzkujete obchod, kaviareň, štúdio alebo službu sami, bude vám stačiť ktorákoľvek z týchto peňaženiek. Vyberte si podľa toho, či si chcete platby ponechať v Bitcoine, alebo časť každej platby automaticky konvertovať do miestnej meny.",
	"business/wallets::wallets_strike_note":
		"Strike Business vám umožňuje prijímať Bitcoin a Lightning platby s nulovými poplatkami a okamžitým vyrovnaním. Podporuje osobné, online aj fakturačné platby s voliteľnou automatickou konverziou do vašej miestnej meny.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business": "Tu prijímame Bitcoin",
	"business/why::why_good_for_you": "Prečo je Bitcoin skvelý aj pre vás",
	"business/why::why_learn_more_lowercase": "Zistiť viac →",
	"business/why::why_s1_c1":
		"K inflácii dochádza, keď sa tlačí viac peňazí alebo keď sa vytvárajú z ničoho. Peniaze vo vašom vrecku tak postupom času strácajú hodnotu — a práve preto ceny rok čo rok rastú.",
	"business/why::why_s1_c2":
		"Bitcoin má pevnú zásobu 21 miliónov mincí. Žiadna vláda, banka ani firma nemôže vytlačiť ďalšie. Vaše úspory v Bitcoine si časom hodnotu udržia, namiesto aby ju ticho strácali.",
	"business/why::why_s2_c1":
		"V posledných rokoch padlo niekoľko amerických bánk kvôli bankovým runom. Keď si chcelo vybrať príliš veľa zákazníkov naraz, banky nemali dosť hotovosti, aby im to všetkým vyplatili.",
	"business/why::why_s2_c2":
		"Namiesto toho, aby vaše peniaze len držali, banky väčšinu z nich požičiavajú a investujú. Ak tieto investície zlyhajú — alebo ak vkladatelia stratia dôveru — banka môže padnúť a vaše vklady môžu byť zmrazené alebo stratené.",
	"business/why::why_s2_c3":
		"S Bitcoinom môžete držať svoje peniaze priamo vo vlastnej peňaženke. Žiadna banka. Žiadny sprostredkovateľ. Žiadny bankový run.",
	"business/why::why_s3_c1":
		"Na rozdiel od kreditných kariet, PayPalu alebo tradičných bankových účtov Bitcoin nevyžaduje ničie povolenie.",
	"business/why::why_s3_c2":
		"Nikto vám nemôže zmraziť účet, zablokovať platbu ani vás odpojiť od siete. Je to prvý finančný systém v histórii, ktorý môžete používať slobodne, bez strachu z cenzúry alebo zhabania.",
	"business/why::why_s4_c1":
		"Bitcoin je často nepochopený, ale ticho koná vo svete kopu dobrého.",
	"business/why::why_s4_c2":
		"Pomohol aktivistom za ľudské práva bojovať za slobodu, znížil globálne emisie metánu zo skládok a ropných polí, stabilizoval elektrické siete a financoval verejné statky ako národné parky.",
	"business/why::why_biz_s1": "Nižšie poplatky, viac pre firmu",
	"business/why::why_biz_s1_c1":
		"Bitcoin platby obchádzajú banky a kartové spoločnosti, ktoré si berú z každého predaja 2 – 3 %. Firma si z toho, čo zaplatíte, nechá viac — čo často znamená lepšie ceny a lepšie služby pre vás.",
	"business/why::why_biz_s2": "Okamžité vyrovnanie, bez chargebackov",
	"business/why::why_biz_s2_c1":
		"Bitcoin platby sa vyrovnajú v priebehu sekúnd, priamo z vašej peňaženky do firmy. Žiadne čakanie dni na to, kým banka uvoľní prostriedky, a žiadne nákladné spory o chargebacky — firma sa tak môže sústrediť na zákazníkov namiesto boja s podvodmi.",
	"business/why::why_biz_s3": "Prijímanie zadarmo, otvorené všetkým",
	"business/why::why_biz_s3_c1":
		"Za prijímanie Bitcoinu firma neplatí žiadne zmluvy, mesačné poplatky ani náklady na zriadenie. A milióny Bitcoin používateľov po celom svete aktívne vyhľadávajú obchodníkov, ktorí ho prijímajú — čím tejto firme poskytujú expozíciu novým zákazníkom zadarmo.",
	"business/why::why_business_cta_intro":
		"Podnikáte a chcete začať prijímať Bitcoin?",
	"business/why::why_business_cta_link": "Pozrite sa, ako to funguje →",
	"business/why::why_for_business": "Prečo je Bitcoin skvelý pre túto firmu",
	"business/why::why_for_business_intro":
		"Prijímaním Bitcoinu si firma nechá viac z každého predaja, dostane zaplatené okamžite bez chargebackov a osloví globálne publikum Bitcoin používateľov — to všetko bez zmlúv a mesačných poplatkov.",
	"business/why::why_good_for_you_intro":
		"Bitcoin nie je užitočný len pri pokladni — je to lepšia forma peňazí, ktorá chráni vaše úspory, súkromie a slobodu transakcií. Tu je krátky prehľad.",
	"business/why::why_hero_subtitle":
		"Práve ste naskenovali nálepku „Tu prijímame Bitcoin“. Tu je dôvod, prečo je to skvelá správa — pre túto firmu aj pre vás.",
	"business/why::why_intro_c1":
		"Firma, v ktorej sa nachádzate, prijíma Bitcoin — modernú platobnú sieť s otvoreným zdrojovým kódom, ktorú môže používať ktokoľvek kdekoľvek na svete bez toho, aby si banky a sprostredkovatelia brali províziu.",
	"business/why::why_intro_c2":
		"Nižšie je krátka verzia toho, prečo je prijímanie Bitcoinu dobré pre túto firmu, plus prečo je používanie Bitcoinu dobré pre vás ako zákazníka.",
	"business/why::why_next_business_label": "PRIJÍMAŤ BITCOIN",
	"business/why::why_next_business_title":
		"Prijímajte Bitcoin vo svojej firme",
	"business/why::why_next_buy_label": "KÚPIŤ BITCOIN",
	"business/why::why_next_buy_title": "Kúpte si svoj prvý Bitcoin",
	"business/why::why_next_learn_label": "ZISTIŤ VIAC",
	"business/why::why_next_learn_title": "Zistite viac o Bitcoine",
	"business/why::why_next_wallet_label": "ZÍSKAŤ PEŇAŽENKU",
	"business/why::why_next_wallet_title": "Získajte vlastnú Bitcoin peňaženku",
	"business/why::why_whats_next_heading": "Kam ďalej?",
	"business/why::why_whats_next_intro":
		"Ak je to vaše prvé naskenovanie Bitcoin nálepky, tu sú najužitočnejšie miesta, kam vyraziť ďalej.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Ako kúpiť Bitcoin",
	"buy::buy_step_1_header": "Vyberte si svoju krajinu",
	"buy::buy_step_2_header": "Zvoľte spôsob platby",
	"buy::buy_step_3_header": "Vaše možnosti nákupu",
	"buy::buy_step_4_header": "Bezpečne uložte svoj Bitcoin",
	"buy::buy_header_subtitle":
		"Jednoduchý sprievodca krok za krokom nákupom vášho prvého Bitcoinu.",
	"buy::buy_howto_name": "Ako kúpiť Bitcoin",
	"buy::buy_meta_description":
		"Naučte sa bezpečne kúpiť Bitcoin s naším sprievodcom krok za krokom. Vyberte si svoju krajinu a spôsob platby a nájdite najlepšie možnosti nákupu Bitcoinu pre vás.",
	"buy::buy_step_1_eyebrow": "Krok 1",
	"buy::buy_step_2_eyebrow": "Krok 2",
	"buy::buy_step_3_eyebrow": "Krok 3",
	"buy::buy_step_4_eyebrow": "Krok 4",
	"buy::buy_storage_cta_label": "Ďalší krok",
	"buy::sources_bisq":
		"Bisq — decentralizovaná peer-to-peer zmenáreň Bitcoinu",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — celosvetový adresár Bitcoin bankomatov",
	"buy::sources_kraken": "Kraken — zavedená Bitcoin zmenáreň",
	"buy::sources_relai":
		"Relai — švajčiarska aplikácia pre samoúschovu Bitcoinu",
	"buy::sources_river":
		"River — nákup, ťažba a úschova iba Bitcoinu",
	"buy::sources_strike_lightning":
		"Strike — nákup Bitcoinu s podporou Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — dolar-cost averaging iba pre Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Pridať jazyk",
	"common::common_next_buy_bitcoin": "Kúpte Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Naučte sa, ako bezpečne kúpiť Bitcoin",
	"common::common_next_calculate": "Spočítajte si svoju infláciu",
	"common::common_next_calculate_desc":
		"Zistite, ako inflácia postupom času ovplyvňuje váš plat",
	"common::common_next_get_wallet": "Získať peňaženku",
	"common::common_next_get_wallet_desc":
		"Získajte svoju prvú Bitcoin peňaženku — je zadarmo",
	"common::common_next_keep_learning": "Učte sa ďalej",
	"common::common_next_keep_learning_desc":
		"Pozrite sa, ako Bitcoin zlepšuje svet",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — index spotrebiteľských cien (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — peňažná zásoba (kategorický index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Môže zlyhať aukcia Treasury?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Čo bude ďalej?",
	"common::common_sticker_files_mission_5": "vyžiadať si balíček",
	"common::common_site_tagline": "Bitcoinové vzdelávanie pre všetkých.",
	"common::common_source_btc_map":
		"BTC Map — celosvetový adresár obchodníkov prijímajúcich Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — bezplatný open-source samohostovaný spracovateľ Bitcoin platieb",
	"common::common_source_oshi":
		"Oshi — platforma Bitcoinových odmien pre obchodníkov",
	"common::common_source_strike_business":
		"Strike — Bitcoin a Lightning platby pre firmy",
	"common::common_sources_group_bitcoin": "Údaje o Bitcoine",
	"common::common_sources_group_cpi":
		"Inflácia / index spotrebiteľských cien",
	"common::common_sources_group_debt": "Vládny dlh",
	"common::common_sources_group_money": "Údaje o peňažnej zásobe",
	"common::common_sources_group_stories": "Príklady zo skutočného života",
	"common::common_sticker_files_mission_6": "anglických nálepiek zadarmo.",
	"common::common_sticker_files_next_flyers_label": "Letáky",
	"common::common_sticker_files_next_flyers_title":
		"Vytlačte si Bitcoin leták",
	"common::common_sticker_files_next_languages_label": "Súbory nálepiek",
	"common::common_sticker_files_next_languages_title":
		"Pozrite si súbory nálepiek v iných jazykoch",
	"common::common_sticker_files_print_these": "VYTLAČTE SI NA 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"Nálepka „Bitcoin Doesn\u2019t Have Inflation“ (čierna)",
	"common::common_sticker_name_bdhi_orange":
		"Nálepka „Bitcoin Doesn\u2019t Have Inflation“ (oranžová)",
	"common::common_sticker_name_caution":
		"Bitcoin nálepka „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin nálepka „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin nálepka „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin nálepka „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin nálepka „Got Inflation?“",
	"common::common_sticker_name_study": "Nálepka „Study Bitcoin“",
	"common::common_sticker_name_warning":
		"Bitcoin nálepka „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin nálepka „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Tipy na nálepky",
	"common::common_sticker_tips_intro":
		"Hneď ako si nálepky vytlačíte, umiestnite ich tam, kde ich ľudia uvidia! Dobré miesta sú:",
	"common::common_sticker_tips_list_1":
		"na verejných miestach, kde si ich ľudia všimnú",
	"common::common_sticker_tips_list_2":
		"na miestach, odkiaľ sa pravdepodobne hneď neodstránia (nálepky nespôsobujú trvalé poškodenie)",
	"common::common_sticker_tips_list_3":
		"na povrchy, na ktorých dobre držia (kov, plast, sklo)",
	"common::common_sticker_tips_list_4":
		"NIE na súkromné majetky, cez dopravné značky, bankomaty alebo benzínové pumpy",
	"common::common_stickers_printer_prefix": "My používame",
	"common::common_stickers_printer_suffix":
		"ale môžete použiť ktorúkoľvek tlačiareň nálepiek.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — index spotrebiteľských cien pre všetkých mestských spotrebiteľov",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — peňažná zásoba M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Spočítajte si svoju inflačnú medzeru",
	"compound-inflation-calculator::cic_cta_label": "Ďalší krok",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Zistite, o koľko potrebuje váš plat narásť, aby držal krok s infláciou.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Preskúmajte ďalšie témy",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Pozrite sa, ako Bitcoin súvisí s peniazmi, slobodou, energiou a ďalším.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Naučte sa, ako funguje inflácia",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Ako vytlačiť a vyvesiť tieto Bitcoin letáky",
	"flyers::flyers_hero_subtitle":
		"Bezplatné tlačiteľné Bitcoin letáky. Vyveste ich na verejných miestach, aby ste pomohli viacerým ľuďom dozvedieť sa o Bitcoine.",
	"flyers::flyers_hero_title": "Tlačte a vyvesujte Bitcoin letáky",
	"flyers::flyers_next_get_stickers": "Šírte povedomie",
	"flyers::flyers_next_get_stickers_desc":
		"Objednajte si balíček Bitcoin nálepiek zadarmo",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Zapojte sa a šírte Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Chcete pomôcť budovať bitcoinovú obehovú ekonomiku? Najjednoduchší spôsob je pomôcť miestnym firmám začať prijímať Bitcoin platby.",
	"get-involved::get_involved_business_content_2":
		"Poznáte firmu, ktorá by bola otvorená tomuto kroku? Pošlite majiteľa na našu",
	"get-involved::get_involved_business_content_3":
		"Bitcoin stránku pre podniky.",
	"get-involved::get_involved_description":
		"Naše bezplatné zdroje uľahčujú šírenie adopcie Bitcoinu. Nálepky, letáky, nálepky „Tu prijímame Bitcoin“ pre firmy a open-source kód, kam môže ktokoľvek prispievať.",
	"get-involved::get_involved_header": "Zapojte sa a šírte Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Môžete to pomôcť zmeniť. Vytvorili sme niekoľko bezplatných zdrojov, ktoré uľahčujú šírenie nádeje, ktorú Bitcoin prináša vášmu okoliu.",
	"get-involved::get_involved_biz_stickers_note":
		"Už prijímate Bitcoin? Dajte zákazníkom vedieť našimi nálepkami „Tu prijímame Bitcoin“ zadarmo. Pošleme balíček na akúkoľvek adresu v USA alebo Kanade, alebo si môžete vytlačiť vlastné kdekoľvek na svete.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Nálepky „prijímame tu“",
	"get-involved::get_involved_card_biz_stickers_source":
		"Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Nálepky „Tu prijímame Bitcoin“ zadarmo pre vašu firmu",
	"get-involved::get_involved_card_business_label": "Bitcoin pre firmy",
	"get-involved::get_involved_card_business_source": "Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Všetko, čo firma potrebuje, aby začala prijímať platby v Bitcoine",
	"get-involved::get_involved_card_flyers_label": "Tlačiteľné letáky",
	"get-involved::get_involved_card_flyers_source": "Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Stiahnite si a vytlačte bezplatný Bitcoin leták",
	"get-involved::get_involved_card_github_label": "Otvorený zdrojový kód",
	"get-involved::get_involved_card_github_source": "Zdroj: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Prispejte do bitcoin.rocks na GitHube",
	"get-involved::get_involved_card_stickers_label": "Nálepky zadarmo",
	"get-involved::get_involved_card_stickers_source":
		"Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Vyžiadajte si balíček Bitcoin nálepiek zadarmo doručený až k vašim dverám",
	"get-involved::get_involved_flyers_content_1":
		"Letáky sú jedným z najjednoduchších spôsobov, ako predstaviť Bitcoin svojej komunite. Stiahnite si bezplatný tlačiteľný Bitcoin leták, vytlačte si toľko kópií, koľko chcete, a vyveste ich na komunitných nástenkách, v kaviarňach, na stretnutiach alebo kdekoľvek inde, kde sa ľudia schádzajú.",
	"get-involved::get_involved_flyers_content_2":
		"Každý leták obsahuje pútavý titulok a QR kód, ktorý zvedavých čitateľov privedie na bitcoin.rocks, aby sa dozvedeli viac.",
	"get-involved::get_involved_flyers_content_3":
		"Na rozdiel od nálepiek možno letáky tlačiť na požiadanie odkiaľkoľvek na svete — stačí vám iba tlačiareň a pár minút.",
	"get-involved::get_involved_flyers_header": "Vytlačte a vyveste leták",
	"get-involved::get_involved_flyers_image_alt":
		"Náhľad bezplatného tlačiteľného Bitcoin letáka z bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks je bezplatný open-source projekt pod licenciou MIT. Naším poslaním je urýchliť prijatie Bitcoinu skrz vzdelávanie — a sami to nezvládneme.",
	"get-involved::get_involved_github_content_2":
		"Či ste vývojár, dizajnér, textár alebo prekladateľ, existuje spôsob, ako môžete pomôcť. Zvlášť vítame prispievateľov, ktorí vedia preložiť náš obsah do ďalších jazykov, aby sa o Bitcoine mohli dozvedieť ľudia po celom svete v ich rodnom jazyku.",
	"get-involved::get_involved_github_content_3":
		"Forknite repozitár, otvorte pull request, založte issue alebo projekt aspoň hviezdičkou podporte. Každý príspevok pomáha Bitcoinu osloviť viac ľudí.",
	"get-involved::get_involved_github_header": "Prispejte na GitHube",
	"get-involved::get_involved_sticker_image_alt":
		"Balíček bezplatných textových Bitcoin nálepiek z bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "sporenie",
	"index::home_card_label_art_1": "Porovnajme",
	"index::home_card_label_art_2": "Šírte povedomie",
	"index::home_card_label_art_3": "Pouličné umenie",
	"index::home_card_label_bank_runs": "Systém plných rezerv",
	"index::home_card_label_bonds": "Porovnajme",
	"index::home_card_label_business_1": "V čom je rozdiel?",
	"index::home_card_label_business_2": "Prijímať Bitcoin platby",
	"index::home_card_label_cash": "Porovnajme",
	"index::home_card_label_cbdc": "Otvorený, alebo uzavretý?",
	"index::home_card_label_coding_1": "Interaktívny tutoriál",
	"index::home_card_label_coding_2": "Stavajte hardvér",
	"index::home_card_label_coding_3": "Programátorské úlohy",
	"index::home_card_label_crowdfunding_1": "Protesty EndSARS",
	"index::home_card_label_crowdfunding_2": "Nezastaviteľné peniaze",
	"index::home_card_label_crowdfunding_3": "Financujte svoj projekt",
	"index::home_card_label_crypto": "V čom je rozdiel?",
	"index::home_card_label_energy_1": "Stabilizácia siete",
	"index::home_card_label_energy_4": "Riadenie dopytu",
	"index::home_card_label_energy_5": "Elektrifikácia vidieka",
	"index::home_card_label_energy_6": "Stimuly pre obnoviteľné zdroje",
	"index::home_card_label_environment_1": "Zníženie metánu",
	"index::home_card_label_environment_2": "Zachránil národný park",
	"index::home_card_label_environment_3": "Najzelenšie odvetvie",
	"index::home_card_label_environment_4": "Znižuje spaľovaný plyn",
	"index::home_card_label_equality_1": "Nádej a príležitosť",
	"index::home_card_label_equality_2": "Veľký zlom",
	"index::home_card_label_food_1": "Ceny potravín",
	"index::home_card_label_food_2": "Farmy a pôda",
	"index::home_card_label_freedom_1": "Autoritárske režimy",
	"index::home_card_label_freedom_2": "Jedinečný nástroj",
	"index::home_card_label_get_started_1": "Základy pre začiatočníkov",
	"index::home_card_label_get_started_2": "Vaša prvá peňaženka",
	"index::home_card_label_get_started_3": "Kúpte Bitcoin",
	"index::home_card_label_gold": "Čo je lepšie?",
	"index::home_card_label_housing_1": "Dostupné bývanie",
	"index::home_card_label_human_rights_1": "Presadzovanie ľudských práv",
	"index::home_card_label_human_rights_2": "Adopcia zdola",
	"index::home_card_label_human_rights_3": "Globálny dopad",
	"index::home_card_label_inflation": "Bitcoin sú lepšie peniaze",
	"index::home_card_label_networks_1": "Živý pohľad na sieť",
	"index::home_card_label_networks_2": "Porovnajme",
	"index::home_card_label_payments_1": "V čom je rozdiel?",
	"index::home_card_label_payments_2": "Rýchle a lacné platby",
	"index::home_card_label_payments_3": "Zahraničné prevody",
	"index::home_card_label_payments_4": "Prijímať platby",
	"index::home_card_label_politics_1": "Politický paradox",
	"index::home_card_label_politics_2": "Choďte do toho",
	"index::home_card_label_property_rights_1": "Porovnajme",
	"index::home_card_label_property_rights_2": "Skutočné vlastníctvo",
	"index::home_card_label_salary": "Chráňte svoj plat",
	"index::home_card_label_self_custody_1": "Sprievodca Bitcoin peňaženkami",
	"index::home_card_label_self_custody_2": "Najdôležitejší krok",
	"index::home_card_label_self_custody_3": "Suverénne peniaze",
	"index::home_card_label_war_1": "Koniec nekonečnej vojny",
	"index::home_card_label_war_2": "Pomoc veteránom",
	"index::home_card_label_war_3": "Útek z vojny",
	"index::home_h1":
		"Bitcoin sú lepšie peniaze, ktoré budujú lepší svet.",
	"index::home_nav_about": "O nás",
	"index::home_nav_get_involved": "Zapojiť sa",
	"index::home_nav_learn": "Vzdelávať sa",
	"index::home_source_prefix": "Zdroj:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon a Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Pozrite si nášho",
	"lightning::lightning_grid_heading": "Obľúbené Lightning peňaženky",
	"lightning::lightning_hardware_cta_label": "Hardvérové peňaženky",
	"lightning::lightning_header_subtitle":
		"Lightning vám umožňuje posielať Bitcoin za sekundy za zlomok haliera — vyberte si peňaženku, ktorej kompromisy zodpovedajú tomu, koľko Bitcoinu plánujete minúť.",
	"lightning::lightning_s1_c4_end": "pre viac informácií.",
	"lightning::lightning_s1_c4_link":
		"Sprievodca Bitcoin hardvérovými peňaženkami",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning peňaženka",
	"lightning::sources_breez_lightning":
		"Breez — Lightning peňaženka s vlastnou úschovou",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentácia Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — kustodiálna Lightning peňaženka",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android a web",
	"nostr/index::nostr_platform_web": "Webový prehliadač",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr je nový decentralizovaný protokol na online komunikáciu — neovláda ho žiadna firma, Bitcoin zapy sú natívne zabudované a medzi klientmi môžete prechádzať bez toho, aby ste stratili sledujúcich.",
	"nostr/index::nostr_amethyst_f1": "Množstvo funkcií a prispôsobení",
	"nostr/index::nostr_amethyst_f2": "Vyžaduje samostatnú Bitcoin peňaženku",
	"nostr/index::nostr_amethyst_f3": "100 % zadarmo",
	"nostr/index::nostr_damus_f1": "Známe rozhranie v štýle Twitteru",
	"nostr/index::nostr_damus_f2": "Vyžaduje samostatnú Bitcoin peňaženku",
	"nostr/index::nostr_damus_f3": "100 % zadarmo",
	"nostr/index::nostr_download_heading": "Stiahnite si Nostr klienta zadarmo",
	"nostr/index::nostr_download_intro":
		"Nostr klienti sú bezplatné aplikácie, ktoré vám umožňujú čítať a prispievať na sieti Nostr. Všetky sú vzájomne kompatibilné — klienta môžete kedykoľvek prepnúť a ponechať si svojich sledujúcich aj obsah.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr je nový decentralizovaný protokol na online komunikáciu — neovláda ho žiadna firma, Bitcoin zapy sú zabudované a medzi aplikáciami môžete prechádzať bez toho, aby ste stratili sledujúcich.",
	"nostr/index::nostr_hero_title": "Čo je Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr je podobný e-mailu: protokol nikomu nepatrí, aplikáciu na ňom môže postaviť ktokoľvek a vy si vyberiete tú, ktorá vám najviac vyhovuje. Na rozdiel od Twitteru alebo Facebooku tu neexistuje centrálna firma, ktorá by vás mohla cenzurovať, vyhodiť alebo potlačiť.",
	"nostr/index::nostr_intro_c2":
		"Nižšie je krátka verzia toho, prečo na Nostre záleží — a potom každý bezplatný Nostr klient, ktorého potrebujete, aby ste mohli začať hneď dnes.",
	"nostr/index::nostr_iris_f1":
		"Extrémne jednoduché — nie je potrebná inštalácia",
	"nostr/index::nostr_iris_f2":
		"Ľahký spôsob, ako vyskúšať Nostr s testovacím účtom",
	"nostr/index::nostr_iris_f3": "100 % zadarmo",
	"nostr/index::nostr_learn_more_label": "CHOĎTE HLBŠIE",
	"nostr/index::nostr_learn_more_title":
		"Zistite viac o Nostre na nostr.how",
	"nostr/index::nostr_primal_f1": "Odporúčaný prvý klient",
	"nostr/index::nostr_primal_f2":
		"Vstavaná Bitcoin zap peňaženka",
	"nostr/index::nostr_primal_f3": "100 % zadarmo",
	"nostr/index::nostr_s1": "Protokol, nie platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr je nový protokol, ktorý vám umožňuje komunikovať online bez strachu z cenzúry, vyhodenia alebo potlačenia.",
	"nostr/index::nostr_s1_c2":
		"Platformy ako Twitter a Facebook ovláda jediná firma, ale protokol Nostr neovláda nikto.",
	"nostr/index::nostr_s2": "Sloboda presunu",
	"nostr/index::nostr_s2_c1":
		"Nostr je podobný e-mailu. Nikto neovláda e-mailový protokol a ktokoľvek na ňom môže postaviť klienta (napríklad Gmail, Hotmail atď.).",
	"nostr/index::nostr_s2_c2":
		"Protokol Nostr tiež nikto neovláda a ktokoľvek na ňom môže postaviť klienta (napríklad Damus, Amethyst atď.).",
	"nostr/index::nostr_s2_c3":
		"Ak sa vám nepáči, ako určitý klient funguje, môžete svoj Nostr účet plynule presunúť do iného klienta bez toho, aby ste stratili sledujúcich alebo obsah.",
	"nostr/index::nostr_s3": "Bitcoin je zabudovaný",
	"nostr/index::nostr_s3_c1":
		"Bitcoin je natívne zabudovaný do protokolu Nostr. Keď uvidíte obsah, ktorý sa vám páči, môžete jeho autorovi ľahko poslať „Bitcoin zap“ ako poďakovanie!",
	"nostr/index::nostr_s3_c2":
		"Na centralizovaných platformách ako Twitter a Facebook zarába peniaze centrálna firma z vášho obsahu. Ale na otvorených protokoloch ako Nostr zarábate na svojom obsahu vy.",
	"nostr/index::sources_damus": "Damus — Nostr klient pre iPhone",
	"nostr/index::sources_iris": "Iris — Nostr klient v prehliadači",
	"nostr/index::sources_nostr_how": "nostr.how — Čo je Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — open-source špecifikácia",
	"nostr/index::sources_primal":
		"Primal — Nostr klient so vstavanou Bitcoin zap peňaženkou",
	"nostr/index::what_is_nostr": "Čo je Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Vytlačte si vlastné Bitcoin nálepky pomocou týchto súborov.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Žiadosť prijatá 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Objednať hromadne",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Zdieľať na Nostre",
	"sticker-success::sticker_success_btn_what_is_nostr": "Čo je Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Potrebujete viac nálepiek?",
	"sticker-success::sticker_success_hero_title":
		"Vaše nálepky sú na ceste 🎉",
	"sticker-success::sticker_success_share_header":
		"Zdieľajte miesta, kam ste nálepky dali",
	"sticker-success::sticker_success_tips_header": "Dobré miesta pre nálepky",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"A keď už ste pri tom, vytlačte a vyveste vlastné",
	"stickers::stickers_instructions_1":
		"Zadajte svoju poštovú adresu a my vám pošleme bezplatný balíček Bitcoin nálepiek poštou. Vaše nálepky dorazia v obyčajnej bielej obálke.",
	"stickers::stickers_btn_choose_pack": "Vybrať tento balíček",
	"stickers::stickers_bulk_c1": "Chcete viac ako len pár nálepiek?",
	"stickers::stickers_bulk_c2":
		"Objednajte si ich hromadne u toho istého tlačiara, akého používame my",
	"stickers::stickers_bulk_c3":
		"— čím viac ich kúpite, tým lacnejšie sú za kus.",
	"stickers::stickers_bulk_cta": "Nakúpte nálepky hromadne",
	"stickers::stickers_bulk_header": "Objednať nálepky hromadne",
	"stickers::stickers_hero_subtitle":
		"Objednajte si balíček Bitcoin nálepiek zadarmo a vyveste ich na verejných miestach, aby ste pomohli viacerým ľuďom dozvedieť sa o Bitcoine.",
	"stickers::stickers_hero_title": "Bitcoin nálepky zadarmo",
	"stickers::stickers_intro_c1":
		"Naším poslaním je pomôcť vám dať viacerým ľuďom „oranžovú pilulku“ tým, že Bitcoin nálepky budete umiestňovať na verejné miesta. Všetky naše nálepky majú QR kódy, ktoré odkazujú na vzdelávacie stránky o",
	"stickers::stickers_intro_c3": "inflácii",
	"stickers::stickers_intro_c4":
		"Vyberte si balíček nálepiek nižšie a zvoľte, ako si ich chcete zaobstarať — pošleme balíček zadarmo komukoľvek v USA alebo Kanade, alebo si môžete vytlačiť vlastné kdekoľvek na svete.",
	"stickers::stickers_mail_header":
		"Pošleme vám vaše nálepky zadarmo poštou",
	"stickers::stickers_next_print_flyers": "Šírte ďalej",
	"stickers::stickers_next_print_flyers_desc":
		"Vytlačte si bezplatné Bitcoin letáky a vyveste ich verejne",
	"stickers::stickers_option_bulk": "📦 Celosvetovo — objednať hromadne",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — zadarmo poštou",
	"stickers::stickers_option_print":
		"🌍 Celosvetovo — vytlačím si vlastné",
	"stickers::stickers_option_usa": "🇺🇸 USA — zadarmo poštou",
	"stickers::stickers_print_c1":
		"Môžete sa zapojiť vytlačením vlastných nálepiek bez ohľadu na to, kde žijete. Kliknutím na svoj jazyk nižšie stiahnete súbory nálepiek a pokyny na tlač.",
	"stickers::stickers_print_c2":
		"Nie každá nálepka je k dispozícii vo všetkých jazykoch.",
	"stickers::stickers_print_header":
		"Vytlačte si vlastné súbory nálepiek",
	"stickers::stickers_request_c1":
		"Vyplňte formulár nižšie a vyžiadajte si súbory nálepiek vo vašom miestnom jazyku. Dáme vám vedieť, hneď ako budú pripravené.",
	"stickers::stickers_request_header": "Nevidíte svoj jazyk?",
	"stickers::stickers_share_c2":
		"Sledujte nás na Nostre vyhľadaním",
	"stickers::stickers_share_c3":
		"v ľubovoľnom Nostr klientovi.",
	"stickers::stickers_signs_pack_description":
		"Výstražné, varovné a upozorňovacie tabule s Bitcoin posolstvom — navrhnuté tak, aby upútali pozornosť a prinútili ľudí zastaviť sa a prečítať.",
	"stickers::stickers_step_1_description":
		"Každý balíček obsahuje inú sadu Bitcoin nálepiek s QR kódmi, ktoré učia ľudí o Bitcoine.",
	"stickers::stickers_step_1_eyebrow": "KROK 1",
	"stickers::stickers_step_1_header": "Vyberte si balíček nálepiek",
	"stickers::stickers_step_2_description":
		"Balíček zadarmo pošleme na adresy v USA a Kanade. Kdekoľvek inde na svete si môžete vytlačiť vlastné alebo si objednať hromadne.",
	"stickers::stickers_step_2_eyebrow": "KROK 2",
	"stickers::stickers_step_2_header": "Ako si chcete nálepky zaobstarať?",
	"stickers::stickers_text_pack_description":
		"Zmes Bitcoin sloganov a jednovetých bonmotov, ktoré majú vzbudiť zvedavosť na verejných priestranstvách.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Vyberte si peňaženku",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — recenzie kovových úložísk pre Bitcoin seed",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin peňaženka s vlastnou úschovou",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardvérová peňaženka",
	"wallets::sources_coldcard_mk5":
		"Coinkite — hardvérová peňaženka Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — hardvérová peňaženka Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — hardvérová peňaženka Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — open-source DIY zariadenie na podpisovanie Bitcoin transakcií",
	"wallets::wallets_grid_heading": "Obľúbené Bitcoin peňaženky",
	"wallets::wallets_header_subtitle":
		"Sprievodca krok za krokom, ako si vybrať peňaženku, chrániť svoje kľúče a prevziať plnú kontrolu nad svojím Bitcoinom.",
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
		`translate-rest-part2 (sk): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50) console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
