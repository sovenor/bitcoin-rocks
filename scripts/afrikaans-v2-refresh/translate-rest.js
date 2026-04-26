#!/usr/bin/env node
/**
 * Afrikaans V2 refresh — all non-inflation namespaces.
 *
 * Fills `targetTranslation` for the remaining 551 entries across 36
 * namespaces. Keyed by "<namespace>::<key>" so there's no ambiguity with
 * keys like `hero_title` that appear in every comparison namespace.
 *
 * Brand names (Bitcoin, Nostr, Lightning, Strike, BTC Map, CoinGecko,
 * Primal, Damus, Iris, Amethyst, Oshi, Zaprite, BTCPay Server, Square,
 * Breez, OpenNode, IBEX, etc.), URLs, email addresses, dataset names,
 * numbers, and currency codes are preserved verbatim per the workflow.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"af.json"
);

// Build the complete translation map. Key format: "<namespace>::<key>".
const T = {};

/* ─────────────── 404 ─────────────── */
T["404::404_not_found_short"] = "Nie gevind nie";

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Ons verskaf gratis sakepakkette wat dit maklik maak om plaaslike handelaars in te bring om Bitcoin te aanvaar. Elke pakket bevat drukbare materiaal wat die voordele verduidelik van om Bitcoin vir hul besigheid te aanvaar.",
	"about::about_card_business_label": "Sakepakket",
	"about::about_card_business_source": "Bron: bitcoin.rocks →",
	"about::about_card_business_title": "Help plaaslike besighede om Bitcoin-betalings te aanvaar",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Bron: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Dra by",
	"about::about_card_contribute_source": "Bron: GitHub →",
	"about::about_card_contribute_title": "Leer hoe om tot bitcoin.rocks by te dra",
	"about::about_card_email_label": "E-pos",
	"about::about_card_email_source": "Bron: e-pos →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Drukbare strooibiljette",
	"about::about_card_flyers_source": "Bron: bitcoin.rocks →",
	"about::about_card_flyers_title": "Laai Bitcoin-strooibiljette af en druk dit vir jou gemeenskap",
	"about::about_card_github_label": "Bewaarplek",
	"about::about_card_github_source": "Bron: GitHub →",
	"about::about_card_github_title": "Besigtig bitcoin.rocks op GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Bron: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Gratis plakkers",
	"about::about_card_stickers_source": "Bron: bitcoin.rocks →",
	"about::about_card_stickers_title": "Kry gratis Bitcoin-plakkers aan jou deur gepos",
	"about::about_flyers_blurb":
		"Ons ontwerp drukbare strooibiljette wat jy by byeenkomste kan uitdeel, op gemeenskapsborde kan plak of in posbusse kan laat val — 'n eenvoudige manier om nuuskierigheid te wek en mense na bitcoin.rocks te stuur om meer te leer.",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks is gestig deur",
	"about::about_mission_1b":
		"in 2022 met 'n eenvoudige missie: versnel Bitcoin-aanneming deur onderwys.",
	"about::about_page_description":
		"bitcoin.rocks is 'n gratis, oopbron Bitcoin-onderwyswebwerf wat in 2022 gestig is. Ons missie is om Bitcoin-aanneming deur onderwys te versnel.",
	"about::about_stickers_blurb":
		"Ons pos gratis Bitcoin-plakkers aan jou deur sodat jy kan help om Bitcoin-bewustheid in jou gemeenskap te versprei. Honderde mense skandeer elke maand die QR-kodes op hierdie plakkers om oor Bitcoin te leer.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin het nie bankstormlope nie",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin is 'n volle-reserwestelsel. Jy deponeer nie jou geld by 'n bank nie. Jy is jou eie bank. Daar is geen uitlening van jou geld sonder jou medewete nie, want jy is die enigste een wat toegang tot jou geld het.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Solank jy Bitcoin in jou eie beursie hou — nie op 'n beurs of in 'n ETF toegedraai nie — is bankstormlope onmoontlik.",
	"bank-runs::bank_runs_bitcoin_p3": "Met Bitcoin het jy werklik beheer oor jou geld.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Sedert 26 Maart 2020 word van VS-banke vereis om 0% as reserwes te hou.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bankreserwe-verhouding",
	"bank-runs::bank_runs_card_bank_reserve_source": "Bron: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Volle-reserwestelsel — geen depositoversekering nodig nie.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin-dekking",
	"bank-runs::bank_runs_card_btc_fdic_source": "Bron: Bitcoin-witskrif →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Elke Bitcoin bestaan op die ketting — niks word uitgeleen nie.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin-reserweverhouding",
	"bank-runs::bank_runs_card_btc_reserve_source": "Bron: Bitcoin-witskrif →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$153.9 miljard versekeringsfonds teenoor $10.82 biljoen in versekerde deposito's (Des 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-dekking",
	"bank-runs::bank_runs_card_fdic_source": "Bron: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Gevallestudie",
	"bank-runs::bank_runs_card_svb_source":
		"Bron: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Leer hoe die Silicon Valley Bank-stormloop gebeur het",
	"bank-runs::bank_runs_card_wallet_label": "Volgende stap",
	"bank-runs::bank_runs_card_wallet_source": "Begin hier →",
	"bank-runs::bank_runs_card_wallet_title":
		"Leer hoe om jou eie Bitcoin-beursie te kry",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC-versekering dek ongeveer 1% van deposito's",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC-versekering beskerm deposito's tot $250,000 per deponeerder. Maar die versekeringsfonds is piepklein in vergelyking met die totale deposito's wat dit veronderstel is om te beskerm.",
	"bank-runs::bank_runs_fdic_p2_a":
		"In 'n grootskaalse bankmislukking sal die regering waarskynlik geld druk om die gaping te dek — wat lei tot meer",
	"bank-runs::bank_runs_fdic_p2_b": ".",
	"bank-runs::bank_runs_fdic_p2_link": "inflasie",
	"bank-runs::bank_runs_page_description":
		"Banke leen jou deposito's uit onder fraksionele reserwebankwese. As te veel mense gelyktydig onttrek, kan banke misluk. Bitcoin is 'n volle-reserwestelsel — bankstormlope is onmoontlik.",
	"bank-runs::bank_runs_svb_heading": "Silicon Valley Bank: 'n werklike voorbeeld",
	"bank-runs::bank_runs_svb_p1_a":
		"In Maart 2023 het Silicon Valley Bank misluk nadat dit kliëntedeposito's in langtermyn-",
	"bank-runs::bank_runs_svb_p1_b":
		"Toe daardie effekte waarde verloor het, kon SVB nie onttrekkings dek nie. Die bank was insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "regeringseffekte belê het.",
	"bank-runs::bank_runs_svb_p2":
		"Duisende besighede kon nie hul werknemers betaal nie. Die FDIC het ingegryp — maar dit het 'n groter vraag opgeroep: is jou geld werklik veilig?",
	"bank-runs::bank_runs_what_p1":
		"Banke hou nie jou deposito's in 'n kluis nie. Hulle leen jou geld uit en belê dit — dit word fraksionele reserwebankwese genoem.",
	"bank-runs::bank_runs_what_p2":
		"As te veel mense gelyktydig probeer onttrek, het die bank nie genoeg kontant om almal te betaal nie. Dit is 'n bankstormloop — en dit kan veroorsaak dat banke geheel en al ineenstort.",
});

/* ─────────────── bitcoin-vs-* ─────────────── */
function bvTitle(assetAf) {
	return (
		'Die verskil tussen <span class="orange">Bitcoin</span> en ' +
		`<span class="asset">${assetAf}</span>`
	);
}
Object.assign(T, {
	"bitcoin-vs-banks::hero_title": bvTitle("Banke"),
	"bitcoin-vs-banks::bitcoin": "BITCOIN",
	"bitcoin-vs-bonds::hero_title": bvTitle("Effekte"),
	"bitcoin-vs-bonds::point_6_summary_3": " — wat daardie risiko geheel en al uitskakel.",
	"bitcoin-vs-bonds::bitcoin": "BITCOIN",
	"bitcoin-vs-cash::hero_title": bvTitle("Kontant"),
	"bitcoin-vs-cash::bitcoin": "BITCOIN",
	"bitcoin-vs-cbdc::hero_title": bvTitle("CBDC's"),
	"bitcoin-vs-cbdc::point_9_summary_3": " wanneer te veel geld gedruk word.",
	"bitcoin-vs-cbdc::bitcoin": "BITCOIN",
	"bitcoin-vs-crypto::hero_title": bvTitle("Kripto"),
	"bitcoin-vs-crypto::bitcoin": "BITCOIN",
	"bitcoin-vs-fine-art::hero_title": bvTitle("Kuns"),
	"bitcoin-vs-fine-art::bitcoin": "BITCOIN",
	"bitcoin-vs-gold::hero_title": bvTitle("Goud"),
	"bitcoin-vs-gold::bitcoin": "BITCOIN",
	"bitcoin-vs-real-estate::hero_title": bvTitle("Eiendom"),
	"bitcoin-vs-real-estate::bitcoin": "BITCOIN",
	"bitcoin-vs-stocks::hero_title": bvTitle("Aandele"),
	"bitcoin-vs-stocks::bitcoin": "BITCOIN",
	"bitcoin-vs-visa::hero_title": bvTitle("Visa"),
	"bitcoin-vs-visa::bitcoin": "BITCOIN",
	"bitcoin-vs-visa::bitcoin_vs_visa": "Bitcoin vs Visa",
	"bitcoin-vs-visa::visa": "VISA",
});

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "BITCOIN-PRYS",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Kyk Bitcoin se huidige of historiese dollar-prys op",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN-REKENMEESTERS",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL-INVOER",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Trek Bitcoin-pryse outomaties in Excel in",
	"business/accounting::accounting_card_wallets_label": "HIBRIEDE BEURSIES",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Sien ons aanbevole besigheidsbeursies",
	"business/accounting::accounting_disclaimer":
		"Hierdie gids is slegs vir inligtingsdoeleindes en moet nie as belastingadvies beskou word nie. Vir belastingadvies spesifiek vir jou situasie, raadpleeg asseblief 'n gekwalifiseerde rekenmeester.",
	"business/accounting::accounting_disclaimer_label": "Let wel",
	"business/accounting::accounting_example_feb_1": "1 Feb",
	"business/accounting::accounting_example_gain_badge": "Kapitaalwins",
	"business/accounting::accounting_example_gain_explain":
		"Jy teken 'n kapitaalwins van $10 aan.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "1 Jan",
	"business/accounting::accounting_example_loss_badge": "Kapitaalverlies",
	"business/accounting::accounting_example_loss_explain":
		"Jy teken 'n kapitaalverlies van $10 aan.",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_example_received_label": "Ontvang",
	"business/accounting::accounting_example_sold_label": "Verkoop of spandeer",
	"business/accounting::accounting_hero_subtitle":
		"Om Bitcoin by jou besigheid te aanvaar hoef nie jou rekeningkunde te bemoeilik nie. Hier is die kort weergawe — plus die gereedskap en kundiges om dit pynloos te maak.",
	"business/accounting::accounting_intro_c1":
		"As jy reeds kontant of kaart aanvaar, is dit eenvoudiger as wat dit lyk om Bitcoin by jou besigheidsboeke by te voeg. Jy het twee paaie: skakel elke Bitcoin-betaling outomaties om na dollars op die oomblik wat dit aankom (geen nuwe rekeningkunde nodig nie), of hou sommige as Bitcoin (''n paar ekstra syfers om te volg).",
	"business/accounting::accounting_intro_c2":
		"Hierdie gids lei jou deur albei — sodat jy die een kan kies wat by jou besigheid pas en met selfvertroue Bitcoin kan begin aanvaar.",
	"business/accounting::accounting_s1": "Die maklike pad: skakel outomaties om na dollars",
	"business/accounting::accounting_s3_c6":
		"Dit is al. Die onderliggende wiskunde is identies aan hoe enige ander waarderende of depresiërende bate verreken word.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoin se huidige en historiese dollar-prys",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin-rekeningkunde vir besighede",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Voer kriptovaluta-pryse in Excel in",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Die kort antwoorde op die vrae wat handelaars die meeste vra voordat hulle Bitcoin begin aanvaar — fooie, vereffening, beursies, terugvorderings, koste, en meer.",
	"business/faq::faq_intro_c1":
		"Tik op enige vraag hieronder om die antwoord uit te brei. Wanneer jy gereed is om Bitcoin te begin aanvaar, sal die besigheidshulpbronne aan die onderkant van die bladsy jou deur elke stap lei.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "REKENINGKUNDE",
	"business/index::biz_label_faq": "VRAE",
	"business/index::biz_label_maps": "HANDELAARSKAARTE",
	"business/index::biz_label_rewards": "BELONINGS",
	"business/index::biz_label_stickers": "PLAKKERS",
	"business/index::biz_label_wallets": "BEURSIES",
	"business/index::biz_meta_description":
		"Aanvaar Bitcoin by jou besigheid vir laer fooie, onmiddellike vereffening, geen terugvorderings nie, en meer kliënte.",
	"business/index::business_hero_subtitle":
		"Aanvaar betalings met laer fooie, word onmiddellik betaal en bereik miljoene nuwe kliënte — met nul kontrakte en nul verborge koste.",
	"business/index::business_intro_c1":
		"Bitcoin gee jou besigheid 'n vinniger, goedkoper en meer private manier om betaal te word. Geen tussengangers nie. Geen terugvorderings nie. Geen kontrakte nie. Net geld wat in sekondes vereffen word, direk van jou kliënte na jou.",
	"business/index::business_intro_c2":
		"Hieronder is die kort weergawe van hoekom Bitcoin goed vir besigheid is — en daaronder elke hulpbron wat jy nodig het om dit vandag te begin aanvaar.",
	"business/index::business_resources_heading":
		"Alles wat jy nodig het om Bitcoin te aanvaar",
	"business/index::business_resources_intro":
		"Werk teen jou eie pas deur hierdie hulpbronne. Elkeen is 'n kort, praktiese gids.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Vertel ons van jou besigheid",
	"business/maps::biz_maps_form_intro":
		"Ons het net 'n paar besonderhede nodig om jou gelys te kry. Adresdata word net lank genoeg gehou om jou besigheid by die kaarte in te dien.",
	"business/maps::biz_maps_hero_subtitle":
		"Lys jou besigheid gratis op BTC Map — die oop, wêreldwye gids van handelaars wat Bitcoin aanvaar — sodat Bitcoin-gebruikers naby jou jou kan vind en Bitcoin by jou besigheid kan spandeer.",
	"business/maps::biz_maps_hero_title":
		"Kry jou besigheid op Bitcoin-handelaarskaarte",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin-gebruikers soek aktief na plekke om te spandeer. Om jou besigheid op die kaart te kry, plaas jou voor elke Bitcoin-gebruiker wat naby soek na 'n plek om te eet, in te koop of te bly — teen nul koste vir jou.",
	"business/maps::biz_maps_intro_c2":
		"Vul net die kort vorm hieronder in en ons sal jou besigheid vir jou by BTC Map en ander Bitcoin-handelaarskaarte indien.",
	"business/maps::biz_maps_meta_description":
		"Lys jou besigheid gratis op BTC Map en ander Bitcoin-handelaarskaarte sodat Bitcoin-gebruikers naby jou jou kan vind.",
	"business/maps::biz_maps_placeholder_address": "Straatadres",
	"business/maps::biz_maps_placeholder_category":
		"Kategorie (bv. restaurant, kafee, hotel)",
	"business/maps::biz_maps_placeholder_city": "Stad",
	"business/maps::biz_maps_placeholder_country": "Land",
	"business/maps::biz_maps_placeholder_name": "Besigheidsnaam",
	"business/maps::biz_maps_placeholder_region": "Staat / Provinsie / Streek",
	"business/maps::biz_maps_placeholder_website": "Webwerf (opsioneel)",
	"business/maps::biz_maps_view_map_cta": "Besigtig BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Besigtig BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Dankie dat jy jou besigheid ingedien het. Ons sal jou binnekort op Bitcoin-handelaarskaarte lys.",
	"business/maps-success::biz_maps_success_hero_title": "Versoek ontvang 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Jou besigheid sal binne 1 tot 2 weke op BTC Map en ander Bitcoin-handelaarsgidse gelys word. Ons hersien elke inskrywing met die hand om die kaarte akkuraat te hou.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Sodra jou lysing regstreeks is, kan Bitcoin-gebruikers naby jou besigheid vind en daar Bitcoin kom spandeer.",
	"business/maps-success::biz_maps_success_timeline_header": "Wat volgende gebeur",
	"business/maps-success::biz_maps_success_view_c1":
		"Terwyl jy wag, kyk na BTC Map om die groeiende netwerk van besighede te sien wat Bitcoin regoor die wêreld aanvaar.",
	"business/maps-success::biz_maps_success_view_header":
		"Sien waar jy sal verskyn",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Druk jou eie 'Bitcoin Accepted Here'-plakkers in Engels om jou kliënte te laat weet dat jy Bitcoin aanvaar.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Laai Engelse 'Bitcoin Accepted Here'-plakkerlêers af",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Dankie dat jy 'Bitcoin Accepted Here'-plakkerlêers in jou taal versoek het.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Versoek ontvang 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Ons sal jou plakkerlêers binne 3 tot 4 weke skep en publiseer. Sodra hulle gereed is, sal jy dit gratis van ons plakkerlêer-bladsy kan aflaai en druk.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Plakkerlêers word in groepe vrygestel, so dit kan 'n paar weke duur voordat jou taal regstreeks gaan. Dankie vir jou geduld!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Wat volgende gebeur",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Bestel in grootmaat",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Versoek nog 'n gratis pakkie",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Jy sal jou gratis 'Bitcoin Accepted Here'-plakkers binne 2 tot 4 weke ontvang, in 'n gewone wit koevert met 3 plakkers binne.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Jou plakkers is op pad 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"As 3 plakkers nie genoeg is vir jou besigheid nie, voel vry om nog 'n gratis pakkie te versoek — of bestel in grootmaat by dieselfde drukker wat ons gebruik.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Het jy meer plakkers nodig?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Op jou voordeur of venster sodat kliënte dit sien voordat hulle instap",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Naby jou kasregister, POS-terminaal of betaalarea",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Op spyskaarte, pryslyste of fooibakke",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Moenie hulle plak op enige plek wat jy nie besit of toestemming het om dit te plaas nie",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Goeie plekke om jou plakkers te sit",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Laat jou kliënte weet dat jy Bitcoin aanvaar. Bestel 'n gratis pakkie 'Bitcoin Accepted Here'-plakkers om by jou besigheid op te plak.",
	"business/stickers::biz_stickers_hero_title":
		"Gratis 'Bitcoin Accepted Here'-plakkers",
	"business/stickers::biz_stickers_intro_c1":
		"Om Bitcoin te aanvaar is net die helfte van die werk — jou kliënte moet ook weet dat jy dit doen. Hierdie klein 'Bitcoin Accepted Here'-plakkers is ontwerp om op jou voordeur, kasregister, spyskaart of enige ander plek waar kliënte dit sal sien voordat hulle betaal, te plak.",
	"business/stickers::biz_stickers_intro_c2":
		"Ons sal vir jou 'n gratis pakkie pos enige plek in die VSA of Kanada, of jy kan jou eie druk enige plek in die wêreld.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — Gratis per pos",
	"business/stickers::biz_stickers_option_print": "🌍 Wêreldwyd — Druk my eie",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 VSA — Gratis per pos",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Vertaling vir 'Bitcoin Accepted Here'",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Vertaling vir 'Scan to learn why Bitcoin is good for business.'",
	"business/stickers::biz_stickers_print_c1":
		"Jy kan jou eie 'Bitcoin Accepted Here'-plakkers druk, maak nie saak waar jy woon nie. Klik op jou taal hieronder om die plakkerlêers en drukinstruksies af te laai.",
	"business/stickers::biz_stickers_print_header": "Druk jou eie plakkerlêers",
	"business/stickers::biz_stickers_request_c1":
		"Vul die vorm hieronder in om 'Bitcoin Accepted Here'-plakkerlêers in jou plaaslike taal te versoek. Ons sal jou laat weet sodra hulle gereed is.",
	"business/stickers::biz_stickers_request_header": "Sien jy nie jou taal nie?",
	"business/stickers::biz_stickers_step_description":
		"Ons stuur 'n gratis pakkie na adresse in die VSA en Kanada. Enige plek anders in die wêreld kan jy jou eie druk.",
	"business/stickers::biz_stickers_step_header":
		"Hoe wil jy jou plakkers kry?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"Alle Bitcoin-beursies is interoperabel — kies die een wat by jou besigheid pas. Gratis, onmiddellike vereffening, geen terugvorderings nie.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-gerigte Lightning-beursie",
	"business/wallets::sources_ibex": "IBEX — Lightning-betalingsinfrastruktuur",
	"business/wallets::sources_opennode": "OpenNode — Bitcoin-betalingsverwerker",
	"business/wallets::sources_square": "Square — Aanvaar Bitcoin-betalings",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-fakturering vir besighede",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-beursies is gratis. Kies een wat by jou besigheid pas — in persoon, aanlyn of faktuurgebaseerd — en begin binne minute Bitcoin aanvaar.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice":
		"Beursies vir faktuurgebaseerde besighede",
	"business/wallets::wallets_section_invoice_intro":
		"As jy kliënte faktureer (konsultasie, vryskut, B2B-dienste), gebruik 'n beursie wat rondom fakturering gebou is. Jou kliënt betaal 'n Bitcoin-faktuur in 'n paar klikke.",
	"business/wallets::wallets_section_multiple":
		"Beursies vir besighede met meerdere werknemers",
	"business/wallets::wallets_section_multiple_intro":
		"As jy 'n span het wat betalings by die kasregister neem, kies 'n beursie wat meerdere werknemer-aanmeldings ondersteun — sodat elke werknemer sy eie PIN kry en jy 'n skoon oudit-spoor hou van wie watter betaling geneem het.",
	"business/wallets::wallets_section_online": "Beursies vir aanlyn-besighede",
	"business/wallets::wallets_section_online_intro":
		"Verkoop jy op 'n webwerf? Hierdie beursies sluit aan by jou aanlynwinkel en aanvaar Bitcoin van enige kliënt, enige plek in die wêreld — geen terugvorderings nie, geen handelaarsrekening nodig nie.",
	"business/wallets::wallets_section_sole":
		"Beursies vir individueel-besit besighede",
	"business/wallets::wallets_section_sole_intro":
		"As jy 'n winkel, kafee, ateljee of diens op jou eie bedryf, sal enige van hierdie beursies werk. Kies op grond van of jy betalings in Bitcoin wil hou of deel van elke betaling outomaties na jou plaaslike geldeenheid wil omskakel.",
	"business/wallets::wallets_strike_note":
		"Strike Business laat jou toe om Bitcoin- en Lightning-betalings met nul fooie en onmiddellike vereffening te aanvaar. Ondersteun in-persoon-, aanlyn- en faktuurgebaseerde betalings met opsionele outomatiese omskakeling na jou plaaslike geldeenheid.",
	"business/wallets::wallets_name_btcpay_server": "BTCPAY SERVER",
	"business/wallets::wallets_name_ibex_pay": "IBEX PAY",
	"business/wallets::wallets_name_open_node": "OPEN NODE",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::why_biz_s1": "Laer fooie, meer vir die besigheid",
	"business/why::why_biz_s1_c1":
		"Bitcoin-betalings slaan die banke en kredietkaartmaatskappye oor wat 2–3% van elke verkoop neem. Die besigheid hou meer van wat jy betaal — wat dikwels beteken beter pryse en beter diens vir jou.",
	"business/why::why_biz_s2": "Onmiddellike vereffening, geen terugvorderings nie",
	"business/why::why_biz_s2_c1":
		"Bitcoin-betalings vereffen in sekondes, direk vanaf jou beursie na die besigheid. Daar is geen wag van dae vir 'n bank om fondse vry te stel nie, en geen duur terugvorderingsdispute nie — sodat die besigheid kan fokus op die bediening van kliënte in plaas daarvan om bedrog te beveg.",
	"business/why::why_biz_s3": "Gratis om te aanvaar, oop vir almal",
	"business/why::why_biz_s3_c1":
		"Daar is geen kontrakte, maandelikse fooie of opstelkoste vir 'n besigheid om Bitcoin te aanvaar nie. En miljoene Bitcoin-gebruikers regoor die wêreld soek aktief na handelaars wat dit aanvaar — wat hierdie besigheid gratis blootstelling aan nuwe kliënte gee.",
	"business/why::why_business_cta_intro":
		"Het jy 'n besigheid en wil Bitcoin begin aanvaar?",
	"business/why::why_business_cta_link": "Sien hoe dit werk →",
	"business/why::why_for_business": "Hoekom Bitcoin fantasties is vir hierdie besigheid",
	"business/why::why_for_business_intro":
		"Om Bitcoin te aanvaar, laat 'n besigheid toe om meer van elke verkoop te behou, onmiddellik betaal te word sonder terugvorderings, en 'n wêreldwye gehoor van Bitcoin-gebruikers te bereik — alles met nul kontrakte en nul maandelikse fooie.",
	"business/why::why_good_for_you_intro":
		"Bitcoin is nie net nuttig by die kasregister nie — dit is 'n beter vorm van geld wat jou spaargeld, jou privaatheid en jou vryheid om transaksies te doen, beskerm. Hier is 'n vinnige oorsig.",
	"business/why::why_hero_subtitle":
		"Jy het sopas 'n Bitcoin Accepted Here-plakker geskandeer. Hier is hoekom dit goeie nuus is — vir hierdie besigheid en vir jou.",
	"business/why::why_intro_c1":
		"Die besigheid waar jy is, aanvaar Bitcoin — 'n moderne, oopbron-betalingsnetwerk wat enigeen, enige plek in die wêreld, kan gebruik sonder dat banke of tussengangers 'n snit vat.",
	"business/why::why_intro_c2":
		"Hieronder is die kort weergawe van hoekom om Bitcoin te aanvaar goed is vir hierdie besigheid, plus hoekom om Bitcoin te gebruik goed is vir jou as kliënt.",
	"business/why::why_next_business_label": "AANVAAR BITCOIN",
	"business/why::why_next_business_title":
		"Aanvaar Bitcoin by jou besigheid",
	"business/why::why_next_buy_label": "KOOP BITCOIN",
	"business/why::why_next_buy_title": "Koop jou eerste Bitcoin",
	"business/why::why_next_learn_label": "LEER MEER",
	"business/why::why_next_learn_title": "Leer meer oor Bitcoin",
	"business/why::why_next_wallet_label": "KRY 'N BEURSIE",
	"business/why::why_next_wallet_title": "Kry jou eie Bitcoin-beursie",
	"business/why::why_whats_next_heading": "Waarheen volgende?",
	"business/why::why_whats_next_intro":
		"As dit jou eerste skandering van 'n Bitcoin-plakker is, is hier die nuttigste plekke om van hier af te gaan.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_header_subtitle":
		"'n Eenvoudige, stap-vir-stap gids vir die koop van jou eerste Bitcoin.",
	"buy::buy_howto_name": "Hoe om Bitcoin te koop",
	"buy::buy_meta_description":
		"Leer hoe om Bitcoin veilig te koop met ons stap-vir-stap gids. Kies jou land en betaalmetode om die beste Bitcoin-koopopsies vir jou te vind.",
	"buy::buy_step_1_eyebrow": "Stap 1",
	"buy::buy_step_2_eyebrow": "Stap 2",
	"buy::buy_step_3_eyebrow": "Stap 3",
	"buy::buy_step_4_eyebrow": "Stap 4",
	"buy::buy_storage_cta_label": "Volgende stap",
	"buy::sources_bisq": "Bisq — Gedesentraliseerde eweknie-tot-eweknie Bitcoin-beurs",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Wêreldwye Bitcoin-ATM-gids",
	"buy::sources_kraken": "Kraken — Gevestigde Bitcoin-beurs",
	"buy::sources_relai":
		"Relai — Switserse Bitcoin-gerigte selfbewaring-toepassing",
	"buy::sources_river":
		"River — Bitcoin-gerigte koop, mynbou en bewaring",
	"buy::sources_strike_lightning":
		"Strike — Koop Bitcoin met ondersteuning vir die Lightning-netwerk",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin-gerigte dollarkostegemiddelde-belegging",
	"buy::buy_country_costa_rica": "Costa Rica",
	"buy::buy_country_el_salvador": "El Salvador",
	"buy::buy_country_finland": "Finland",
	"buy::buy_country_guatemala": "Guatemala",
	"buy::buy_country_israel": "Israel",
	"buy::buy_country_japan": "Japan",
	"buy::buy_country_malta": "Malta",
	"buy::buy_country_panama": "Panama",
	"buy::buy_country_portugal": "Portugal",
	"buy::buy_country_thailand": "Thailand",
	"buy::buy_country_uruguay": "Uruguay",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Voeg taal by",
	"common::common_next_buy_bitcoin": "Koop Bitcoin",
	"common::common_next_buy_bitcoin_desc": "Leer hoe om Bitcoin veilig te koop",
	"common::common_next_calculate": "Bereken jou inflasie",
	"common::common_next_calculate_desc":
		"Sien hoe inflasie jou salaris oor tyd beïnvloed",
	"common::common_next_get_wallet": "Kry 'n beursie",
	"common::common_next_get_wallet_desc":
		"Kry jou eerste Bitcoin-beursie — dit is gratis",
	"common::common_next_keep_learning": "Hou aan leer",
	"common::common_next_keep_learning_desc":
		"Sien hoe Bitcoin die wêreld verbeter",
	"common::common_site_tagline": "Bitcoin-onderwys vir almal.",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_btc_map":
		"BTC Map — Wêreldwye gids van handelaars wat Bitcoin aanvaar",
	"common::common_source_btcpayserver":
		"BTCPay Server — Gratis, oopbron, selfgasheer Bitcoin-betalingsverwerker",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Money Supply (Category Index)",
	"common::common_source_oshi":
		"Oshi — Bitcoin-beloningsplatform vir handelaars",
	"common::common_source_strike_business":
		"Strike — Bitcoin- en Lightning-betalings vir besighede",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "Bitcoin-data",
	"common::common_sources_group_cpi": "Inflasie / Verbruikersprysindeks",
	"common::common_sources_group_debt": "Regeringskuld",
	"common::common_sources_group_money": "Geldvoorraad-data",
	"common::common_sources_group_stories": "Werklike voorbeelde",
	"common::common_sources_treasury_auction":
		'James Lavish — "Can a Treasury Auction Fail?"',
	"common::common_sticker_files_mission_6": "Engelse plakkers gratis.",
	"common::common_sticker_files_next_flyers_label": "Strooibiljette",
	"common::common_sticker_files_next_flyers_title":
		"Druk 'n Bitcoin-strooibiljet",
	"common::common_sticker_files_next_languages_label": "Plakkerlêers",
	"common::common_sticker_files_next_languages_title":
		"Sien plakkerlêers in ander tale",
	"common::common_sticker_name_bdhi_black":
		'"Bitcoin Doesn\'t Have Inflation"-plakker (Swart)',
	"common::common_sticker_name_bdhi_orange":
		'"Bitcoin Doesn\'t Have Inflation"-plakker (Oranje)',
	"common::common_sticker_name_caution":
		'"Caution! Melting Ice Cube" Bitcoin-plakker',
	"common::common_sticker_name_cure_inflation":
		'"Cure Inflation" Bitcoin-plakker',
	"common::common_sticker_name_danger":
		'"Danger! Inflation Ahead" Bitcoin-plakker',
	"common::common_sticker_name_fix":
		'"Fix The Money, Fix The World" Bitcoin-plakker',
	"common::common_sticker_name_got_inflation":
		'"Got Inflation?" Bitcoin-plakker',
	"common::common_sticker_name_study": '"Study Bitcoin"-plakker',
	"common::common_sticker_name_warning":
		'"Warning! Inflation is Stealing Your Savings" Bitcoin-plakker',
	"common::common_sticker_name_what_if":
		'"What if your money didn\'t have inflation?" Bitcoin-plakker',
	"common::common_sticker_tips_heading": "Plakkerwenke",
	"common::common_sticker_tips_intro":
		"Sodra jy jou plakkers gedruk het, plaas hulle iewers waar hulle gesien sal word! Goeie plakkerplekke is:",
	"common::common_sticker_tips_list_1":
		"in die publiek waar mense hulle sal sien",
	"common::common_sticker_tips_list_2":
		"op plekke waar hulle waarskynlik nie vinnig verwyder sal word nie (die plakkers veroorsaak geen permanente skade nie)",
	"common::common_sticker_tips_list_3":
		"op oppervlaktes waaraan hulle maklik sal vasklou (metaal, plastiek, glas)",
	"common::common_sticker_tips_list_4":
		"NIE op private eiendom, oor tekens, OTM's of petrolpompe nie",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "Ons gebruik",
	"common::common_stickers_printer_suffix":
		"maar jy kan enige plakkermaatskappy gebruik.",
	"common::common_whats_next": "Wat volg?",
	"common::common_language_afrikaans": "AFRIKAANS",
	"common::common_language_hausa": "HAUSA",
	"common::common_language_hindi": "HINDI",
	"common::common_language_sinhala": "SINHALEES",
	"common::common_language_swahili": "SWAHILI",
	"common::common_language_yoruba": "YORUBA",
	"common::common_result_message_in": "in",
	"common::common_sticker_files_print_these": "DRUK HIERDIE MET 1 KLIK",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"Bereken jou inflasiegaping",
	"compound-inflation-calculator::cic_cta_label": "Volgende stap",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Sien hoeveel jou salaris moet styg om tred te hou met inflasie.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Verken meer onderwerpe",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Sien hoe Bitcoin verbind is met geld, vryheid, energie, en meer.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Leer hoe inflasie werk",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Money Supply",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"Gratis, drukbare Bitcoin-strooibiljette. Plaas hulle in die publiek om meer mense te help om oor Bitcoin te leer.",
	"flyers::flyers_hero_title": "Druk en plaas Bitcoin-strooibiljette",
	"flyers::flyers_next_get_stickers": "Versprei die woord",
	"flyers::flyers_next_get_stickers_desc":
		"Bestel 'n gratis pakkie Bitcoin-plakkers",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_card_business_label": "Sakepakket",
	"get-involved::get_involved_card_business_source": "Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Versoek 'n gratis Bitcoin-sakepakket",
	"get-involved::get_involved_card_flyers_label": "Drukbare strooibiljette",
	"get-involved::get_involved_card_flyers_source": "Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Laai 'n gratis Bitcoin-strooibiljet af en druk dit",
	"get-involved::get_involved_card_github_label": "Oopbron",
	"get-involved::get_involved_card_github_source": "Bron: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Dra by tot bitcoin.rocks op GitHub",
	"get-involved::get_involved_card_stickers_label": "Gratis plakkers",
	"get-involved::get_involved_card_stickers_source": "Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Versoek 'n gratis Bitcoin-plakkerpakkie aan jou deur gepos",
	"get-involved::get_involved_flyers_content_1":
		"Strooibiljette is een van die maklikste maniere om Bitcoin aan jou gemeenskap bekend te stel. Laai 'n gratis drukbare Bitcoin-strooibiljet af, druk soveel afskrifte as wat jy wil, en plaas hulle op gemeenskapsborde, in koffiewinkels, by byeenkomste, of enige ander plek waar mense bymekaarkom.",
	"get-involved::get_involved_flyers_content_2":
		"Elke strooibiljet bevat 'n oortuigende opskrif en 'n QR-kode wat nuuskierige lesers na bitcoin.rocks stuur om meer te leer.",
	"get-involved::get_involved_flyers_content_3":
		"Anders as plakkers, kan strooibiljette op aanvraag vanaf enige plek in die wêreld gedruk word — al wat jy nodig het, is 'n drukker en 'n paar minute.",
	"get-involved::get_involved_flyers_header":
		"Druk en plaas 'n strooibiljet",
	"get-involved::get_involved_flyers_image_alt":
		"Voorskou van die gratis drukbare Bitcoin-strooibiljet van bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks is 'n gratis, oopbronprojek gelisensieer onder die MIT-lisensie. Ons missie is om Bitcoin-aanneming deur onderwys te versnel — en ons kan dit nie alleen doen nie.",
	"get-involved::get_involved_github_content_2":
		"Of jy nou 'n ontwikkelaar, ontwerper, skrywer of vertaler is, daar is 'n manier vir jou om te help. Ons verwelkom veral bydraers wat ons inhoud in meer tale kan vertaal sodat meer mense regoor die wêreld in hul moedertaal oor Bitcoin kan leer.",
	"get-involved::get_involved_github_content_3":
		"Fork die bewaarplek, maak 'n trek-versoek oop, dien 'n kwessie in of gee net 'n ster om jou ondersteuning te toon. Elke bydrae help om Bitcoin meer mense te laat bereik.",
	"get-involved::get_involved_github_header": "Dra by op GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Gratis Bitcoin-tekplakkerpakkie van bitcoin.rocks",
});

/* ─────────────── index (home) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "spaar",
	"index::home_card_label_art_1": "Kom ons vergelyk",
	"index::home_card_label_art_2": "Versprei die woord",
	"index::home_card_label_art_3": "Straatkuns",
	"index::home_card_label_bank_runs": "Volle-reserwestelsel",
	"index::home_card_label_bonds": "Kom ons vergelyk",
	"index::home_card_label_business_1": "Wat is die verskil?",
	"index::home_card_label_business_2": "Aanvaar Bitcoin-betalings",
	"index::home_card_label_cash": "Kom ons vergelyk",
	"index::home_card_label_cbdc": "Oop of geslote?",
	"index::home_card_label_coding_1": "Interaktiewe tutoriaal",
	"index::home_card_label_coding_2": "Bou hardeware",
	"index::home_card_label_coding_3": "Kodeerraaisels",
	"index::home_card_label_crowdfunding_1": "EndSARS-betogings",
	"index::home_card_label_crowdfunding_2": "Onstuitbare geld",
	"index::home_card_label_crowdfunding_3": "Finansier jou projek",
	"index::home_card_label_crypto": "Wat is die verskil?",
	"index::home_card_label_energy_1": "Netwerk-stabilisering",
	"index::home_card_label_energy_4": "Vraagrespons",
	"index::home_card_label_energy_5": "Landelike elektrifisering",
	"index::home_card_label_energy_6": "Hernubare aansporings",
	"index::home_card_label_environment_1": "Metaanvermindering",
	"index::home_card_label_environment_2": "Red 'n nasionale park",
	"index::home_card_label_environment_3": "Groenste industrie",
	"index::home_card_label_environment_4": "Verminder flitsgas",
	"index::home_card_label_equality_1": "Hoop en geleentheid",
	"index::home_card_label_equality_2": "'n Spelveranderaar",
	"index::home_card_label_food_1": "Kospryse",
	"index::home_card_label_food_2": "Plase en grond",
	"index::home_card_label_freedom_1": "Outoritêre regimes",
	"index::home_card_label_freedom_2": "'n Unieke instrument",
	"index::home_card_label_get_started_1": "Beginnerbeginsels",
	"index::home_card_label_get_started_2": "Jou eerste beursie",
	"index::home_card_label_get_started_3": "Koop Bitcoin",
	"index::home_card_label_gold": "Watter een is beter?",
	"index::home_card_label_housing_1": "Bekostigbare behuising",
	"index::home_card_label_human_rights_1": "Handhawing van menseregte",
	"index::home_card_label_human_rights_2": "Grondvlak-aanneming",
	"index::home_card_label_human_rights_3": "Wêreldwye impak",
	"index::home_card_label_inflation": "Bitcoin is beter geld",
	"index::home_card_label_networks_1": "Lewendige netwerk-aansig",
	"index::home_card_label_networks_2": "Kom ons vergelyk",
	"index::home_card_label_payments_1": "Wat is die verskil?",
	"index::home_card_label_payments_2": "Vinnige en goedkoop betalings",
	"index::home_card_label_payments_3": "Oorbetalings",
	"index::home_card_label_payments_4": "Ontvang betalings",
	"index::home_card_label_politics_1": "Politieke paradoks",
	"index::home_card_label_politics_2": "Tree op",
	"index::home_card_label_property_rights_1": "Kom ons vergelyk",
	"index::home_card_label_property_rights_2": "Ware eienaarskap",
	"index::home_card_label_salary": "Beskerm jou salaris",
	"index::home_card_label_self_custody_1": "Bitcoin-beursie-gids",
	"index::home_card_label_self_custody_2": "Die belangrikste stap",
	"index::home_card_label_self_custody_3": "Soewereine geld",
	"index::home_card_label_war_1": "Beëindig eindelose oorlog",
	"index::home_card_label_war_2": "Help veterane",
	"index::home_card_label_war_3": "Oorlogstydse ontsnapping",
	"index::home_h1":
		"Bitcoin is beter geld wat 'n beter wêreld bou.",
	"index::home_nav_about": "Oor",
	"index::home_nav_get_involved": "Raak betrokke",
	"index::home_nav_learn": "Leer",
	"index::home_source_prefix": "Bron:",
	// Brand authors — keep as-is per allow-list convention
	"index::home_link_author_anita_posch": "Anita Posch",
	"index::home_link_author_arman_the_parman": "Arman The Parman",
	"index::home_link_author_bitcoin_explorama": "Bitcoin Explorama",
	"index::home_link_author_bitcoin_is_green": "BitcoinIs.Green",
	"index::home_link_author_bitcoin_magazine": "Bitcoin Magazine",
	"index::home_link_author_blockworks": "Blockworks",
	"index::home_link_author_coindesk": "CoinDesk",
	"index::home_link_author_daniel_batten": "Daniel Batten",
	"index::home_link_author_forbes": "Forbes",
	"index::home_link_author_fortune": "Fortune",
	"index::home_link_author_geyser": "Geyser",
	"index::home_link_author_lightning_address": "LightningAddress.com",
	"index::home_link_author_lyn_alden": "Lyn Alden",
	"index::home_link_author_makerbits": "MakerBits",
	"index::home_link_author_mempool_space": "Mempool.space",
	"index::home_link_author_misha_guttentag": "Misha Guttentag",
	"index::home_link_author_mit_technology_review": "MIT Technology Review",
	"index::home_link_author_quartz": "Quartz",
	"index::home_link_author_saifedean_ammous": "Saifedean Ammous",
	"index::home_link_author_satsie": "Satsie",
	"index::home_link_author_saving_satoshi": "Saving Satoshi",
	"index::home_link_author_texas_am_university": "Texas A&M University",
	"index::home_link_author_time_magazine": "TIME Magazine",
	"index::home_link_author_vfbm": "VoteForBetter.Money",
	"index::home_link_author_wes_lippman": "Wes Lippman",
	"index::home_link_author_yahoo_finance": "Yahoo Finance",
	"index::home_link_author_youtube": "YouTube",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "Gewilde Lightning-beursies",
	"lightning::lightning_hardware_cta_label": "Hardeware-beursies",
	"lightning::lightning_header_subtitle":
		"Lightning laat jou toe om Bitcoin in sekondes te stuur vir 'n breukdeel van 'n sent — kies die beursie waarvan die afwegings pas by hoeveel Bitcoin jy beplan om te spandeer.",
	"lightning::lightning_s1_c4_end": "vir meer inligting.",
	"lightning::lightning_s1_c4_link": "Bitcoin Hardware Wallet Guide",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning-beursie",
	"lightning::sources_breez_lightning":
		"Breez — Selfbewaring Lightning-beursie",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning-netwerk-dokumentasie",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — Bewarende Lightning-beursie",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1":
		"Baie funksies en aanpassing",
	"nostr/index::nostr_amethyst_f2": "Vereis 'n aparte Bitcoin-beursie",
	"nostr/index::nostr_amethyst_f3": "100% gratis",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1": "Bekende Twitter-agtige koppelvlak",
	"nostr/index::nostr_damus_f2": "Vereis 'n aparte Bitcoin-beursie",
	"nostr/index::nostr_damus_f3": "100% gratis",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading": "Laai 'n gratis Nostr-kliënt af",
	"nostr/index::nostr_download_intro":
		"Nostr-kliënte is gratis toepassings wat jou toelaat om op die Nostr-netwerk te lees en plaas. Almal is interoperabel — jy kan enige tyd van kliënt verander en jou volgelinge en inhoud behou.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr is 'n nuwe gedesentraliseerde protokol om aanlyn te kommunikeer — geen enkele maatskappy beheer dit nie, Bitcoin-zaps is ingebou, en jy kan tussen toepassings beweeg sonder om jou volgelinge te verloor.",
	"nostr/index::nostr_hero_title": "Wat is Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr is soortgelyk aan e-pos: niemand besit die protokol nie, enigeen kan 'n toepassing daarbo bou, en jy kan enige toepassing kies wat jy die beste hou. Anders as Twitter of Facebook is daar geen sentrale maatskappy wat jou kan sensureer, deplatform of afgradeer nie.",
	"nostr/index::nostr_intro_c2":
		"Hieronder is die kort weergawe van hoekom Nostr saak maak — daarna elke gratis Nostr-kliënt wat jy nodig het om vandag te begin.",
	"nostr/index::nostr_iris_f1":
		"Super eenvoudig — geen installasie nodig nie",
	"nostr/index::nostr_iris_f2":
		"Maklike manier om Nostr met 'n toetsrekening te probeer",
	"nostr/index::nostr_iris_f3": "100% gratis",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "GAAN DIEPER",
	"nostr/index::nostr_learn_more_title": "Leer meer oor Nostr op nostr.how",
	"nostr/index::nostr_page_description":
		"Nostr is 'n nuwe gedesentraliseerde protokol vir aanlynkommunikasie — geen enkele maatskappy beheer dit nie, Bitcoin-zaps is inheems ingebou, en jy kan tussen kliënte beweeg sonder om volgelinge te verloor.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android en web",
	"nostr/index::nostr_platform_web": "Webblaaier",
	"nostr/index::nostr_primal_f1": "Aanbevole eerste kliënt",
	"nostr/index::nostr_primal_f2": "Bitcoin-zap-beursie ingebou",
	"nostr/index::nostr_primal_f3": "100% gratis",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "Protokol, nie platform nie",
	"nostr/index::nostr_s1_c1":
		"Nostr is 'n nuwe protokol wat jou toelaat om aanlyn te kommunikeer sonder vrees vir sensuur, deplatformering of afgradering.",
	"nostr/index::nostr_s1_c2":
		"Platforms soos Twitter en Facebook word deur 'n enkele maatskappy beheer, maar niemand beheer die Nostr-protokol nie.",
	"nostr/index::nostr_s2": "Vryheid om te beweeg",
	"nostr/index::nostr_s2_c1":
		"Nostr is soortgelyk aan e-pos. Niemand beheer die e-posprotokol nie, en enigeen kan 'n kliënt (soos Gmail, Hotmail, ens.) daarbo bou.",
	"nostr/index::nostr_s2_c2":
		"Niemand beheer ook die Nostr-protokol nie, en enigeen kan 'n kliënt (soos Damus, Amethyst, ens.) daarbo bou.",
	"nostr/index::nostr_s2_c3":
		"As jy nie van hoe 'n sekere kliënt werk hou nie, kan jy jou Nostr-rekening naatloos na 'n ander kliënt skuif sonder om jou volgelinge of inhoud te verloor.",
	"nostr/index::nostr_s3": "Bitcoin is ingebou",
	"nostr/index::nostr_s3_c1":
		"Bitcoin is inheems ingebou in die Nostr-protokol. As jy inhoud sien waarvan jy hou, kan jy maklik Bitcoin aan iemand zap as 'n dankie!",
	"nostr/index::nostr_s3_c2":
		"Op gesentraliseerde platforms soos Twitter en Facebook verdien die gesentraliseerde maatskappy geld uit jou inhoud. Maar op oop protokolle soos Nostr verdien jy geld uit jou inhoud.",
	"nostr/index::sources_damus": "Damus — iPhone Nostr-kliënt",
	"nostr/index::sources_iris": "Iris — Webgebaseerde Nostr-kliënt",
	"nostr/index::sources_nostr_how": "nostr.how — Wat is Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr-protokol — Oopbron-spesifikasie",
	"nostr/index::sources_primal":
		"Primal — Nostr-kliënt met 'n ingeboude Bitcoin-zap-beursie",
	"nostr/index::what_is_nostr": "Wat is Nostr?",
});

/* ─────────────── sticker-language-success ─────────────── */
T["sticker-language-success::sticker_language_success_hero_title"] =
	"Versoek ontvang 🎉";

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Bestel in grootmaat",
	"sticker-success::sticker_success_btn_share_on_nostr": "Deel op Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Wat is Nostr?",
	"sticker-success::sticker_success_bulk_header": "Wil jy meer plakkers hê?",
	"sticker-success::sticker_success_hero_title": "Jou plakkers is op pad 🎉",
	"sticker-success::sticker_success_share_header": "Deel jou plakkerplekke",
	"sticker-success::sticker_success_tips_header": "Goeie plakkerplekke",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "Kies hierdie pakkie",
	"stickers::stickers_bulk_c1": "Wil jy meer as 'n paar plakkers hê?",
	"stickers::stickers_bulk_c2":
		"Bestel in grootmaat by dieselfde drukker wat ons gebruik",
	"stickers::stickers_bulk_c3":
		"— hoe meer jy koop, hoe goedkoper is hulle per plakker.",
	"stickers::stickers_bulk_cta": "Koop plakkers in grootmaat",
	"stickers::stickers_bulk_header": "Bestel plakkers in grootmaat",
	"stickers::stickers_hero_subtitle":
		"Bestel 'n gratis pakkie Bitcoin-plakkers en plaas hulle in die publiek om meer mense te help om oor Bitcoin te leer.",
	"stickers::stickers_hero_title": "Gratis Bitcoin-plakkers",
	"stickers::stickers_intro_c1":
		"Ons missie is om jou te help om meer mense oranje te pil deur Bitcoin-plakkers in die publiek te plaas. Al ons plakkers het QR-kodes wat skakel na opvoedkundige bladsye oor",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "inflasie",
	"stickers::stickers_intro_c4":
		"Kies 'n plakkerpakkie hieronder en kies hoe jy hulle wil kry — ons sal 'n gratis pakkie aan enigeen in die VSA of Kanada pos, of jy kan jou eie druk enige plek in die wêreld.",
	"stickers::stickers_mail_header": "Ons sal jou gratis plakkers pos",
	"stickers::stickers_next_print_flyers": "Hou aan versprei",
	"stickers::stickers_next_print_flyers_desc":
		"Druk gratis Bitcoin-strooibiljette om in die publiek te plaas",
	"stickers::stickers_option_bulk": "📦 Wêreldwyd — Bestel in grootmaat",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — Gratis per pos",
	"stickers::stickers_option_print": "🌍 Wêreldwyd — Druk my eie",
	"stickers::stickers_option_usa": "🇺🇸 VSA — Gratis per pos",
	"stickers::stickers_print_c1":
		"Jy kan deelneem deur jou eie plakkers te druk, ongeag waar jy woon. Klik op jou taal hieronder om die plakkerlêers en drukinstruksies af te laai.",
	"stickers::stickers_print_c2": "Nie elke plakker is in elke taal beskikbaar nie.",
	"stickers::stickers_print_header": "Druk jou eie plakkerlêers",
	"stickers::stickers_request_c1":
		"Vul die vorm hieronder in om plakkerlêers in jou plaaslike taal te versoek. Ons sal jou laat weet sodra hulle gereed is.",
	"stickers::stickers_request_header": "Sien jy nie jou taal nie?",
	"stickers::stickers_share_c2": "Volg ons op Nostr deur te soek vir",
	"stickers::stickers_share_c3": "in enige Nostr-kliënt.",
	"stickers::stickers_signs_pack_description":
		"Waarskuwings-, gevaar- en voorsorgstyl-tekens met Bitcoin-boodskappe — ontwerp om aandag te trek en mense te laat stop en lees.",
	"stickers::stickers_step_1_description":
		"Elke pakkie het 'n ander stel Bitcoin-plakkers met QR-kodes wat mense oor Bitcoin leer.",
	"stickers::stickers_step_1_eyebrow": "STAP 1",
	"stickers::stickers_step_1_header": "Kies jou plakkerpakkie",
	"stickers::stickers_step_2_description":
		"Ons stuur 'n gratis pakkie na adresse in die VSA en Kanada. Enige plek anders in die wêreld kan jy jou eie druk of in grootmaat bestel.",
	"stickers::stickers_step_2_eyebrow": "STAP 2",
	"stickers::stickers_step_2_header": "Hoe wil jy jou plakkers kry?",
	"stickers::stickers_text_pack_description":
		"'n Mengsel van Bitcoin-slagspreuke en een-reëlers wat ontwerp is om nuuskierigheid in openbare ruimtes te wek.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Choose Your Wallet",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Selfbewaring Bitcoin-beursie",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin-hardeware-beursie",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5-hardeware-beursie",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q-hardeware-beursie",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	"wallets::sources_passport":
		"Foundation Devices — Passport-hardeware-beursie",
	"wallets::sources_seedsigner":
		"SeedSigner — Oopbron-doen-dit-self Bitcoin-tekentoestel",
	"wallets::wallets_grid_heading": "Gewilde Bitcoin-beursies",
	"wallets::wallets_header_subtitle":
		"'n Stap-vir-stap gids om 'n beursie te kies, jou sleutels te beskerm en volle beheer oor jou Bitcoin te neem.",
	"wallets::wallets_lightning_cta_label": "Lightning-netwerk",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace === "inflation") continue;
		const mapKey = `${e.namespace}::${e.key}`;
		if (e.targetTranslation !== null && e.targetTranslation !== undefined) {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, mapKey)) {
			e.targetTranslation = T[mapKey];
			filled++;
		} else {
			unmatched.push(mapKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest: filled ${filled}, already-done ${skipped}, unmatched ${unmatched.length}`
	);
	if (unmatched.length) {
		console.log("Unmatched keys:");
		for (const k of unmatched.slice(0, 50)) console.log("  " + k);
		if (unmatched.length > 50) console.log("  ... and " + (unmatched.length - 50) + " more");
	}
}

main();
