#!/usr/bin/env node
/**
 * Dutch manifest refresh — part 2 of non-inflation namespaces.
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
	"nl.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Boekhouddiensten van Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$ 10",
	"business/accounting::accounting_example_loss_result": "−$ 10",
	"business/accounting::accounting_description":
		"Een handleiding in eenvoudig Nederlands voor het inpassen van Bitcoin-acceptatie in je boekhouding — hybride wallets, kostprijs, vermogenswinsten en wanneer je een boekhouder moet bellen.",
	"business/accounting::accounting_s1_c1":
		"De eenvoudigste manier om Bitcoin te accepteren is via een hybride wallet die 100 % van de ontvangen Bitcoin automatisch omzet naar euro's (of jouw lokale valuta) zodra de betaling binnenkomt.",
	"business/accounting::accounting_s1_c2":
		"Met deze opzet ziet je boekhouding er precies hetzelfde uit als nu — het eindbedrag is elke keer in euro's. Geen kostprijs, geen vermogenswinsten, geen nieuwe spreadsheets.",
	"business/accounting::accounting_s2":
		"Als je een deel in Bitcoin houdt: registreer de kostprijs",
	"business/accounting::accounting_s2_c1":
		"Sommige bedrijven houden een deel van de ontvangen Bitcoin in plaats van alles automatisch om te zetten. Als dat bij jou zo is, is de belangrijkste extra stap het registreren van de kostprijs — de waarde in euro's van elke Bitcoin-betaling op de dag dat je hem ontvangt.",
	"business/accounting::accounting_s2_c2":
		"Zelfs als je je bedrijf puur in Bitcoin ziet, willen de meeste belastingdiensten dat je de waarde in euro's rapporteert. Het goede nieuws: het zijn slechts twee getallen per transactie — het ontvangen aantal Bitcoin en de waarde ervan in euro's op die dag.",
	"business/accounting::accounting_s2_c3":
		"Gebruik de hieronder genoemde tools om prijsopzoekingen te automatiseren, zodat je niet dagelijks prijzen hoeft te controleren.",
	"business/accounting::accounting_s3":
		"Bewaarde Bitcoin uitgeven of verkopen",
	"business/accounting::accounting_s3_c1":
		"Als je elke betaling automatisch omzet naar euro's, kun je dit deel overslaan — het is niet op jou van toepassing.",
	"business/accounting::accounting_s3_c2":
		"Als je Bitcoin hebt gehouden en die later uitgeeft of verkoopt, vul je de verkoopprijs in dezelfde kostprijs-spreadsheet in. Het verschil tussen de waarde van de Bitcoin bij ontvangst en bij uitgeven/verkopen is een vermogenswinst of -verlies.",
	"business/accounting::accounting_s3_c3": "Twee korte voorbeelden:",
	"business/accounting::accounting_s4":
		"Heb je een professional nodig die Bitcoin kent?",
	"business/accounting::accounting_s4_c1":
		"Als je het liever uit handen geeft — of als je Bitcoin-boekhouding complexer is dan een hybride wallet aankan — bevelen we Boekhouddiensten van Satoshi Pacioli aan, een bedrijf gespecialiseerd in Bitcoin-boekhouding voor ondernemingen.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-boekhouding voor je bedrijf",
	"business/accounting::accounting_card_bpr_label": "BITCOIN-PRIJS",
	"business/accounting::accounting_card_bpr_title":
		"Zoek de actuele of historische Bitcoin-prijs in dollars op",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN-BOEKHOUDER",
	"business/accounting::accounting_card_spreadsheet_label":
		"EXCEL-IMPORT",
	"business/accounting::accounting_card_spreadsheet_title":
		"Laad Bitcoin-prijzen automatisch in Excel",
	"business/accounting::accounting_card_wallets_label": "HYBRIDE WALLETS",
	"business/accounting::accounting_card_wallets_title":
		"Bekijk onze aanbevolen zakelijke wallets",
	"business/accounting::accounting_disclaimer":
		"Deze handleiding dient alleen ter informatie en vormt geen belastingadvies. Voor belastingadvies dat is afgestemd op jouw situatie, raadpleeg een gekwalificeerde boekhouder.",
	"business/accounting::accounting_disclaimer_label": "Let op",
	"business/accounting::accounting_example_feb_1": "1 februari",
	"business/accounting::accounting_example_gain_badge": "Vermogenswinst",
	"business/accounting::accounting_example_gain_explain":
		"Je boekt een vermogenswinst van $ 10.",
	"business/accounting::accounting_example_jan_1": "1 januari",
	"business/accounting::accounting_example_loss_badge": "Vermogensverlies",
	"business/accounting::accounting_example_loss_explain":
		"Je boekt een vermogensverlies van $ 10.",
	"business/accounting::accounting_example_received_label": "Ontvangen",
	"business/accounting::accounting_example_sold_label":
		"Verkocht of uitgegeven",
	"business/accounting::accounting_hero_subtitle":
		"Bitcoin accepteren in je bedrijf hoeft je boekhouding niet ingewikkelder te maken. Hier is de korte versie — plus tools en experts die het pijnloos maken.",
	"business/accounting::accounting_intro_c1":
		"Als je al contant geld of kaarten accepteert, is Bitcoin toevoegen aan je zakelijke boekhouding eenvoudiger dan het lijkt. Je hebt twee paden: elke Bitcoin-betaling onmiddellijk automatisch omzetten naar euro's (geen nieuwe boekhouding) of een deel als Bitcoin houden (een paar extra cijfers bijhouden).",
	"business/accounting::accounting_intro_c2":
		"Deze gids leidt je door beide paden — zodat je het juiste pad voor je bedrijf kunt kiezen en met een gerust hart Bitcoin kunt accepteren.",
	"business/accounting::accounting_s1":
		"De gemakkelijke weg: automatische omzetting naar euro's",
	"business/accounting::accounting_s3_c6":
		"En dat is alles. De onderliggende rekensom is dezelfde als bij elk ander activum dat in waarde stijgt of daalt.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — actuele en historische Bitcoin-prijs in dollars",
	"business/accounting::sources_satoshi_pacioli":
		"Boekhouddiensten van Satoshi Pacioli — Bitcoin-boekhouding voor bedrijven",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — cryptoprijzen importeren in Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Korte antwoorden op de meest gestelde vragen die ondernemers stellen voordat ze Bitcoin accepteren — kosten, afwikkeling, wallets, chargebacks, kosten en meer.",
	"business/faq::faq_intro_c1":
		"Tik hieronder op een vraag om het antwoord uit te klappen. Wanneer je klaar bent om Bitcoin te accepteren, leiden de zakelijke bronnen onderaan de pagina je door elke stap.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "BOEKHOUDING",
	"business/index::biz_label_faq": "VEELGESTELDE VRAGEN",
	"business/index::biz_label_maps": "ONDERNEMERSKAARTEN",
	"business/index::biz_label_rewards": "BELONINGEN",
	"business/index::biz_label_stickers": "STICKERS",
	"business/index::biz_label_wallets": "WALLETS",
	"business/index::biz_meta_description":
		"Accepteer Bitcoin in je bedrijf met lagere kosten, directe afwikkeling, geen chargebacks en bereik meer klanten.",
	"business/index::business_hero_subtitle":
		"Ontvang betalingen met lagere kosten, krijg direct betaald en bereik miljoenen nieuwe klanten — zonder contracten en verborgen kosten.",
	"business/index::business_intro_c1":
		"Bitcoin geeft je bedrijf een snellere, goedkopere en privacy-vriendelijkere manier om betaald te worden. Geen tussenpersonen. Geen chargebacks. Geen contracten. Alleen geld dat in seconden wordt afgewikkeld, rechtstreeks van klant naar jou.",
	"business/index::business_intro_c2":
		"Hieronder vind je de korte versie van waarom Bitcoin goed is voor het bedrijfsleven — en daaronder alle bronnen die je nodig hebt om vandaag nog te beginnen.",
	"business/index::business_resources_heading":
		"Alles wat je nodig hebt om Bitcoin te accepteren",
	"business/index::business_resources_intro":
		"Werk deze bronnen in je eigen tempo door. Elk is een korte, praktische handleiding.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Vertel ons over je bedrijf",
	"business/maps::biz_maps_form_intro":
		"We hebben slechts een paar gegevens nodig om je in te schrijven. Adresgegevens bewaren we alleen zo lang als nodig is om je bedrijf bij de kaarten in te dienen.",
	"business/maps::biz_maps_hero_subtitle":
		"Schrijf je bedrijf gratis in op BTC Map — een open, wereldwijde gids van Bitcoin-accepterende ondernemers — zodat bitcoiners in je buurt je kunnen vinden en bij jou Bitcoin kunnen uitgeven.",
	"business/maps::biz_maps_hero_title":
		"Zet je bedrijf op de Bitcoin-ondernemerskaarten",
	"business/maps::biz_maps_intro_c1":
		"Bitcoiners zoeken actief naar plekken waar ze kunnen uitgeven. Wanneer je bedrijf op de kaart staat, verschijn je bij elke Bitcoin-gebruiker in de buurt die op zoek is naar eten, winkelen of overnachten — volledig gratis.",
	"business/maps::biz_maps_intro_c2":
		"Vul gewoon het korte formulier hieronder in, en wij dienen je bedrijf in bij BTC Map en andere Bitcoin-ondernemerskaarten.",
	"business/maps::biz_maps_meta_description":
		"Schrijf je bedrijf gratis in op BTC Map en andere Bitcoin-ondernemerskaarten, zodat bitcoiners in je buurt je kunnen vinden.",
	"business/maps::biz_maps_placeholder_address":
		"Straat en huisnummer",
	"business/maps::biz_maps_placeholder_category":
		"Categorie (bv. restaurant, café, hotel)",
	"business/maps::biz_maps_placeholder_city": "Plaats",
	"business/maps::biz_maps_placeholder_country": "Land",
	"business/maps::biz_maps_placeholder_name": "Bedrijfsnaam",
	"business/maps::biz_maps_placeholder_region":
		"Provincie / regio",
	"business/maps::biz_maps_placeholder_website":
		"Website (optioneel)",
	"business/maps::biz_maps_view_map_cta": "Bekijk BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Bekijk BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Bedankt voor het indienen van je bedrijf. We zetten je binnenkort op de Bitcoin-ondernemerskaarten.",
	"business/maps-success::biz_maps_success_hero_title":
		"Inzending ontvangen 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Je bedrijf wordt binnen 1 tot 2 weken op BTC Map en andere Bitcoin-ondernemersgidsen geplaatst. We controleren elke inzending handmatig om de kaarten nauwkeurig te houden.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Zodra je vermelding live is, vinden bitcoiners in je buurt je bedrijf en komen ze langs om Bitcoin uit te geven.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Wat er nu gebeurt",
	"business/maps-success::biz_maps_success_view_c1":
		"Bekijk ondertussen BTC Map om het groeiende netwerk te zien van bedrijven wereldwijd die Bitcoin accepteren.",
	"business/maps-success::biz_maps_success_view_header":
		"Bekijk waar je verschijnt",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Download de Engelse stickerbestanden zodat je je eigen „Bitcoin geaccepteerd hier“-stickers kunt printen.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Print je eigen „Bitcoin geaccepteerd hier“-stickers in het Engels om je klanten te laten zien dat je Bitcoin accepteert.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Download de Engelse „Bitcoin geaccepteerd hier“-stickerbestanden",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Bedankt voor je verzoek om „Bitcoin geaccepteerd hier“-stickerbestanden in jouw taal.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Verzoek ontvangen 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"We maken en publiceren je stickerbestanden binnen 3 tot 4 weken. Zodra ze klaar zijn, kun je ze gratis downloaden en printen vanaf onze stickerbestanden-pagina.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"We publiceren stickerbestanden in batches, dus het kan enkele weken duren voordat jouw taal live gaat. Bedankt voor je geduld!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Wat er nu gebeurt",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"In bulk bestellen",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Nog een gratis pakket aanvragen",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Je gratis „Bitcoin geaccepteerd hier“-stickers komen binnen 2 tot 4 weken in een eenvoudige witte envelop met 3 stickers.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Je stickers zijn onderweg 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Als 3 stickers niet genoeg zijn voor je bedrijf, vraag gerust nog een gratis pakket aan — of bestel in bulk bij dezelfde drukkerij die wij gebruiken.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Heb je meer stickers nodig?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Op de voordeur of in de etalage, zodat klanten ze zien voordat ze binnenkomen",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Bij de kassa, het betaalterminal of het afrekenpunt",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Op menu's, prijslijsten of fooienpotten",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Niet plakken op plekken die niet van jou zijn of waarvoor je geen toestemming hebt",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Goede plekken voor je stickers",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Laat je klanten zien dat je Bitcoin accepteert. Bestel een gratis pakket „Bitcoin geaccepteerd hier“-stickers om in je bedrijf op te plakken.",
	"business/stickers::biz_stickers_hero_title":
		"Gratis „Bitcoin geaccepteerd hier“-stickers",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin accepteren is maar de helft — je klanten moeten ook weten dat je het aanneemt. Deze kleine „Bitcoin geaccepteerd hier“-stickers zijn bedoeld om op je voordeur, bij de kassa, op het menu of overal waar klanten ze zien voor het afrekenen, op te plakken.",
	"business/stickers::biz_stickers_intro_c2":
		"We sturen je gratis een pakket overal in de VS of Canada, of je kunt wereldwijd je eigen exemplaren printen.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canada — gratis per post",
	"business/stickers::biz_stickers_option_print":
		"🌍 Wereldwijd — zelf printen",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 VS — gratis per post",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Vertaling van „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Vertaling van „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Je kunt je eigen „Bitcoin geaccepteerd hier“-stickers printen, waar je ook woont. Tik hieronder op je taal om de stickerbestanden en printinstructies te downloaden.",
	"business/stickers::biz_stickers_print_header":
		"Print je eigen stickerbestanden",
	"business/stickers::biz_stickers_request_c1":
		"Vul het formulier hieronder in om „Bitcoin geaccepteerd hier“-stickerbestanden aan te vragen in je lokale taal. We laten het je weten zodra ze klaar zijn.",
	"business/stickers::biz_stickers_request_header":
		"Zie je je taal niet?",
	"business/stickers::biz_stickers_step_description":
		"We sturen een gratis pakket naar adressen in de VS en Canada. Overal anders ter wereld kun je je eigen exemplaren printen.",
	"business/stickers::biz_stickers_step_header":
		"Hoe wil je je stickers ontvangen?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Alle Bitcoin-wallets zijn onderling compatibel — kies degene die bij je bedrijf past. Gratis, directe afwikkeling, geen chargebacks.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-only Lightning-wallet",
	"business/wallets::sources_ibex":
		"IBEX — Lightning-betalingsinfrastructuur",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin-betalingsverwerker",
	"business/wallets::sources_square":
		"Square — Bitcoin-betalingen accepteren",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-facturatie voor bedrijven",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-wallets zijn gratis. Kies degene die bij je bedrijf past — fysieke verkoop, online of facturatie — en begin in enkele minuten met het accepteren van Bitcoin.",
	"business/wallets::wallets_section_invoice":
		"Wallets voor bedrijven die facturen sturen",
	"business/wallets::wallets_section_invoice_intro":
		"Als je facturen schrijft aan klanten (consultancy, freelance, B2B-diensten), gebruik dan een wallet die is ontworpen voor facturen. De klant betaalt de Bitcoin-factuur met een paar klikken.",
	"business/wallets::wallets_section_multiple":
		"Wallets voor bedrijven met meerdere medewerkers",
	"business/wallets::wallets_section_multiple_intro":
		"Als je een team hebt dat aan de kassa betalingen aanneemt, kies dan een wallet die meerdere medewerkerslogins ondersteunt — zo krijgt elke medewerker een eigen pincode en heb je een net overzicht van wie welke betaling heeft aangenomen.",
	"business/wallets::wallets_section_online":
		"Wallets voor onlinebedrijven",
	"business/wallets::wallets_section_online_intro":
		"Verkoop je online? Deze wallets zijn aan te sluiten op je webshop en accepteren Bitcoin van elke klant, waar ook ter wereld — geen chargebacks en geen merchant account nodig.",
	"business/wallets::wallets_section_sole":
		"Wallets voor eenmanszaken",
	"business/wallets::wallets_section_sole_intro":
		"Als je in je eentje een winkel, café, studio of dienst runt, voldoet elk van deze wallets. Kies op basis van of je betalingen in Bitcoin wilt aanhouden of een deel van elke betaling automatisch wilt omzetten naar je lokale valuta.",
	"business/wallets::wallets_strike_note":
		"Strike Business stelt je in staat Bitcoin- en Lightning-betalingen te accepteren met nul kosten en directe afwikkeling. Het ondersteunt fysieke, online- en factuurbetalingen met optionele automatische omzetting naar je lokale valuta.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin geaccepteerd hier",
	"business/why::why_good_for_you":
		"Waarom Bitcoin ook geweldig is voor jou",
	"business/why::why_learn_more_lowercase": "Meer informatie →",
	"business/why::why_s1_c1":
		"Inflatie ontstaat wanneer er meer geld wordt gedrukt of uit het niets wordt gecreëerd. Het geld in je zak verliest na verloop van tijd waarde — en daarom stijgen de prijzen jaar na jaar.",
	"business/why::why_s1_c2":
		"Bitcoin heeft een vast aanbod van 21 miljoen coins. Geen overheid, bank of bedrijf kan er meer drukken. Je spaargeld in Bitcoin behoudt zijn waarde in plaats van die stilletjes te verliezen.",
	"business/why::why_s2_c1":
		"De afgelopen jaren zijn meerdere Amerikaanse banken omgevallen door bankruns. Toen te veel klanten tegelijkertijd geld wilden opnemen, hadden de banken niet genoeg contant geld om iedereen uit te betalen.",
	"business/why::why_s2_c2":
		"In plaats van je geld gewoon te bewaren, lenen en investeren banken het meeste ervan. Als die investeringen mislukken — of als spaarders het vertrouwen verliezen — kan de bank omvallen, en kunnen je deposito's worden bevroren of verdwijnen.",
	"business/why::why_s2_c3":
		"Met Bitcoin kun je je geld rechtstreeks in je eigen wallet houden. Geen bank. Geen tussenpersonen. Geen bankrun.",
	"business/why::why_s3_c1":
		"Anders dan creditcards, PayPal of traditionele bankrekeningen vraagt Bitcoin niemand om toestemming.",
	"business/why::why_s3_c2":
		"Niemand kan je rekening bevriezen, een betaling blokkeren of je van het netwerk afsluiten. Het is het eerste financiële systeem in de geschiedenis dat je vrij kunt gebruiken zonder angst voor censuur of inbeslagname.",
	"business/why::why_s4_c1":
		"Bitcoin wordt vaak verkeerd begrepen, maar doet stilletjes veel goeds in de wereld.",
	"business/why::why_s4_c2":
		"Het heeft mensenrechtenactivisten geholpen voor vrijheid te strijden, wereldwijde methaanemissies van stortplaatsen en olievelden teruggedrongen, elektriciteitsnetten gestabiliseerd en publieke goederen zoals nationale parken gefinancierd.",
	"business/why::why_biz_s1":
		"Lagere kosten, meer voor het bedrijf",
	"business/why::why_biz_s1_c1":
		"Bitcoin-betalingen omzeilen banken en kaartmaatschappijen die 2–3 % van elke verkoop inhouden. Het bedrijf houdt meer over van wat jij betaalt — wat vaak betere prijzen en betere service voor jou betekent.",
	"business/why::why_biz_s2":
		"Directe afwikkeling, geen chargebacks",
	"business/why::why_biz_s2_c1":
		"Bitcoin-betalingen worden in seconden afgewikkeld, rechtstreeks van je wallet naar het bedrijf. Geen dagen wachten tot de bank middelen vrijgeeft, en geen dure chargeback-geschillen — zo kan het bedrijf zich richten op klanten in plaats van op fraudebestrijding.",
	"business/why::why_biz_s3":
		"Acceptatie is gratis, open voor iedereen",
	"business/why::why_biz_s3_c1":
		"Voor het accepteren van Bitcoin betaalt het bedrijf geen contracten, maandelijkse kosten of opstartkosten. En miljoenen Bitcoin-gebruikers wereldwijd zoeken actief naar ondernemers die het accepteren — wat dit bedrijf gratis bereik biedt onder nieuwe klanten.",
	"business/why::why_business_cta_intro":
		"Heb je een bedrijf en wil je Bitcoin accepteren?",
	"business/why::why_business_cta_link":
		"Zo werkt het →",
	"business/why::why_for_business":
		"Waarom Bitcoin geweldig is voor dit bedrijf",
	"business/why::why_for_business_intro":
		"Door Bitcoin te accepteren, houdt het bedrijf meer over van elke verkoop, wordt direct betaald zonder chargebacks en bereikt het een wereldwijd publiek van Bitcoin-gebruikers — allemaal zonder contracten of maandelijkse kosten.",
	"business/why::why_good_for_you_intro":
		"Bitcoin is niet alleen handig aan de kassa — het is een betere vorm van geld die je spaargeld, je privacy en je transactievrijheid beschermt. Hier is een korte rondleiding.",
	"business/why::why_hero_subtitle":
		"Je hebt zojuist een „Bitcoin geaccepteerd hier“-sticker gescand. Hier is waarom dat geweldig is — voor dit bedrijf en voor jou.",
	"business/why::why_intro_c1":
		"Het bedrijf waar je nu bent, accepteert Bitcoin — een modern, opensource betalingsnetwerk dat iedereen waar ook ter wereld kan gebruiken zonder dat banken en tussenpersonen een commissie innen.",
	"business/why::why_intro_c2":
		"Hieronder vind je de korte versie van waarom Bitcoin-acceptatie goed is voor dit bedrijf, plus waarom Bitcoin gebruiken goed is voor jou als klant.",
	"business/why::why_next_business_label": "ACCEPTEER BITCOIN",
	"business/why::why_next_business_title":
		"Accepteer Bitcoin in je bedrijf",
	"business/why::why_next_buy_label": "BITCOIN KOPEN",
	"business/why::why_next_buy_title": "Koop je eerste bitcoin",
	"business/why::why_next_learn_label": "MEER LEREN",
	"business/why::why_next_learn_title": "Leer meer over Bitcoin",
	"business/why::why_next_wallet_label": "WALLET HALEN",
	"business/why::why_next_wallet_title":
		"Krijg je eigen Bitcoin-wallet",
	"business/why::why_whats_next_heading": "Waar nu naartoe?",
	"business/why::why_whats_next_intro":
		"Als dit je eerste keer is dat je een Bitcoin-sticker scant, zijn dit de handigste plekken om verder te gaan.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Hoe je Bitcoin koopt",
	"buy::buy_step_1_header": "Kies je land",
	"buy::buy_step_2_header": "Kies een betaalmethode",
	"buy::buy_step_3_header": "Je koopopties",
	"buy::buy_step_4_header": "Bewaar je Bitcoin veilig",
	"buy::buy_header_subtitle":
		"Een eenvoudige stap-voor-stap-handleiding voor het kopen van je eerste bitcoin.",
	"buy::buy_howto_name": "Hoe je Bitcoin koopt",
	"buy::buy_meta_description":
		"Leer hoe je veilig Bitcoin koopt met onze stap-voor-stap-handleiding. Kies je land en betaalmethode om de beste koopopties voor jou te vinden.",
	"buy::buy_step_1_eyebrow": "Stap 1",
	"buy::buy_step_2_eyebrow": "Stap 2",
	"buy::buy_step_3_eyebrow": "Stap 3",
	"buy::buy_step_4_eyebrow": "Stap 4",
	"buy::buy_storage_cta_label": "Volgende stap",
	"buy::sources_bisq":
		"Bisq — gedecentraliseerde peer-to-peer Bitcoin-exchange",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — wereldwijde gids van Bitcoin-geldautomaten",
	"buy::sources_kraken":
		"Kraken — gevestigde Bitcoin-exchange",
	"buy::sources_relai":
		"Relai — Zwitserse app voor Bitcoin in self-custody",
	"buy::sources_river":
		"River — Bitcoin-only kopen, mining en bewaren",
	"buy::sources_strike_lightning":
		"Strike — Bitcoin kopen met Lightning Network-ondersteuning",
	"buy::sources_swan":
		"Swan Bitcoin — dollar-cost-averaging alleen voor Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Taal toevoegen",
	"common::common_next_buy_bitcoin": "Bitcoin kopen",
	"common::common_next_buy_bitcoin_desc":
		"Leer hoe je veilig Bitcoin koopt",
	"common::common_next_calculate": "Bereken je inflatie",
	"common::common_next_calculate_desc":
		"Zie hoe inflatie in de loop van de tijd je salaris beïnvloedt",
	"common::common_next_get_wallet": "Wallet halen",
	"common::common_next_get_wallet_desc":
		"Krijg je eerste Bitcoin-wallet — hij is gratis",
	"common::common_next_keep_learning": "Blijf leren",
	"common::common_next_keep_learning_desc":
		"Zie hoe Bitcoin de wereld beter maakt",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — consumentenprijsindex (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — geldhoeveelheid (categorie-index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Kan een Treasury-veiling mislukken?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Wat is de volgende stap?",
	"common::common_sticker_files_mission_5": "Pakket aanvragen",
	"common::common_site_tagline": "Bitcoin-educatie voor iedereen.",
	"common::common_source_btc_map":
		"BTC Map — wereldwijde gids van Bitcoin-accepterende ondernemers",
	"common::common_source_btcpayserver":
		"BTCPay Server — gratis, zelf-gehoste opensource Bitcoin-betalingsverwerker",
	"common::common_source_oshi":
		"Oshi — Bitcoin-beloningsplatform voor ondernemers",
	"common::common_source_strike_business":
		"Strike — Bitcoin- en Lightning-betalingen voor bedrijven",
	"common::common_sources_group_bitcoin": "Bitcoin-data",
	"common::common_sources_group_cpi":
		"Inflatie / consumentenprijsindex",
	"common::common_sources_group_debt": "Staatsschuld",
	"common::common_sources_group_money": "Gegevens geldhoeveelheid",
	"common::common_sources_group_stories": "Voorbeelden uit het echte leven",
	"common::common_sticker_files_mission_6":
		"gratis Engelse stickers.",
	"common::common_sticker_files_next_flyers_label": "Flyers",
	"common::common_sticker_files_next_flyers_title":
		"Print een Bitcoin-flyer",
	"common::common_sticker_files_next_languages_label":
		"Stickerbestanden",
	"common::common_sticker_files_next_languages_title":
		"Bekijk stickerbestanden in andere talen",
	"common::common_sticker_files_print_these":
		"PRINT MET 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"„Bitcoin Doesn\u2019t Have Inflation“-sticker (zwart)",
	"common::common_sticker_name_bdhi_orange":
		"„Bitcoin Doesn\u2019t Have Inflation“-sticker (oranje)",
	"common::common_sticker_name_caution":
		"Bitcoin-sticker „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin-sticker „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin-sticker „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin-sticker „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin-sticker „Got Inflation?“",
	"common::common_sticker_name_study":
		"„Study Bitcoin“-sticker",
	"common::common_sticker_name_warning":
		"Bitcoin-sticker „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin-sticker „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Tips voor stickers",
	"common::common_sticker_tips_intro":
		"Zodra je je stickers hebt geprint, plak ze waar mensen ze zien! Goede plekken zijn:",
	"common::common_sticker_tips_list_1":
		"op openbare plekken waar ze de aandacht trekken",
	"common::common_sticker_tips_list_2":
		"op plekken waar ze waarschijnlijk niet meteen worden verwijderd (stickers veroorzaken geen blijvende schade)",
	"common::common_sticker_tips_list_3":
		"op oppervlakken waar ze goed plakken (metaal, kunststof, glas)",
	"common::common_sticker_tips_list_4":
		"NIET op privé-eigendom, verkeersborden, geldautomaten of tankstations",
	"common::common_stickers_printer_prefix": "We gebruiken",
	"common::common_stickers_printer_suffix":
		"maar je kunt elke stickerdrukker gebruiken.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — consumentenprijsindex voor alle stedelijke consumenten",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — geldhoeveelheid M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Bereken je inflatiekloof",
	"compound-inflation-calculator::cic_cta_label": "Volgende stap",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Ontdek met hoeveel je salaris moet stijgen om de inflatie bij te houden.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Verken meer onderwerpen",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Zie hoe Bitcoin samenhangt met geld, vrijheid, energie en meer.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Leer hoe inflatie werkt",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Hoe je deze Bitcoin-flyers print en ophangt",
	"flyers::flyers_hero_subtitle":
		"Gratis printbare Bitcoin-flyers. Hang ze op openbare plekken om meer mensen voor te lichten over Bitcoin.",
	"flyers::flyers_hero_title":
		"Print en hang Bitcoin-flyers op",
	"flyers::flyers_next_get_stickers": "Verspreid het woord",
	"flyers::flyers_next_get_stickers_desc":
		"Bestel een gratis pakket Bitcoin-stickers",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Doe mee en help Bitcoin te verspreiden",
	"get-involved::get_involved_business_content_1":
		"Wil je helpen een Bitcoin-circulaire economie op te bouwen? De eenvoudigste manier is om lokale ondernemers te helpen Bitcoin-betalingen aan te nemen.",
	"get-involved::get_involved_business_content_2":
		"Ken je een bedrijf dat hier open voor zou staan? Stuur de eigenaars naar onze",
	"get-involved::get_involved_business_content_3":
		"Bitcoin-pagina voor ondernemers.",
	"get-involved::get_involved_description":
		"Onze gratis bronnen maken het eenvoudig om Bitcoin-adoptie te verspreiden. Stickers, flyers, „Bitcoin geaccepteerd hier“-stickers voor bedrijven en opensource code waaraan iedereen kan bijdragen.",
	"get-involved::get_involved_header":
		"Doe mee en help Bitcoin te verspreiden.",
	"get-involved::get_involved_intro_5":
		"Jij kunt helpen dat te veranderen. We hebben een aantal gratis bronnen gemaakt die het eenvoudig maken om de hoop die Bitcoin brengt in je omgeving te verspreiden.",
	"get-involved::get_involved_biz_stickers_note":
		"Accepteer je al Bitcoin? Laat het je klanten zien met onze gratis „Bitcoin geaccepteerd hier“-stickers. We sturen een pakket naar elk adres in de VS of Canada, of je kunt wereldwijd je eigen exemplaren printen.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Hier geaccepteerd“-stickers",
	"get-involved::get_involved_card_biz_stickers_source":
		"Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Gratis „Bitcoin geaccepteerd hier“-stickers voor je bedrijf",
	"get-involved::get_involved_card_business_label":
		"Bitcoin voor bedrijven",
	"get-involved::get_involved_card_business_source":
		"Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Alles wat een bedrijf nodig heeft om Bitcoin-betalingen te accepteren",
	"get-involved::get_involved_card_flyers_label": "Printbare flyers",
	"get-involved::get_involved_card_flyers_source":
		"Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Download en print een gratis Bitcoin-flyer",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source": "Bron: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Draag bij aan bitcoin.rocks op GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Gratis stickers",
	"get-involved::get_involved_card_stickers_source":
		"Bron: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Vraag een gratis pakket Bitcoin-stickers aan, rechtstreeks bij je voordeur",
	"get-involved::get_involved_flyers_content_1":
		"Flyers zijn een van de eenvoudigste manieren om Bitcoin in je gemeenschap te brengen. Download een gratis printbare Bitcoin-flyer, print zoveel kopieën als je wilt en hang ze op prikborden, in cafés, op meetups of overal waar mensen samenkomen.",
	"get-involved::get_involved_flyers_content_2":
		"Elke flyer bevat een opvallende kop en een QR-code die nieuwsgierige lezers naar bitcoin.rocks brengt om meer te leren.",
	"get-involved::get_involved_flyers_content_3":
		"Anders dan stickers kunnen flyers overal ter wereld op aanvraag worden geprint — je hebt alleen een printer en een paar minuten nodig.",
	"get-involved::get_involved_flyers_header":
		"Print en hang een flyer op",
	"get-involved::get_involved_flyers_image_alt":
		"Voorbeeld van de gratis printbare Bitcoin-flyer van bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks is een gratis opensourceproject onder de MIT-licentie. Onze missie is om de adoptie van Bitcoin te versnellen door middel van educatie — en dat redden we niet alleen.",
	"get-involved::get_involved_github_content_2":
		"Of je nu ontwikkelaar, ontwerper, schrijver of vertaler bent, er is een manier waarop je kunt helpen. We verwelkomen vooral bijdragers die onze inhoud naar meer talen kunnen vertalen, zodat mensen wereldwijd Bitcoin in hun moedertaal kunnen leren.",
	"get-involved::get_involved_github_content_3":
		"Fork de repository, open een pull request, maak een issue aan, of geef het project op zijn minst een ster. Elke bijdrage helpt om Bitcoin toegankelijker te maken voor meer mensen.",
	"get-involved::get_involved_github_header":
		"Draag bij op GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Pakket gratis Bitcoin-tekststickers van bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "sparen",
	"index::home_card_label_art_1": "Laten we vergelijken",
	"index::home_card_label_art_2": "Verspreid het woord",
	"index::home_card_label_art_3": "Straatkunst",
	"index::home_card_label_bank_runs": "Volledigereservessysteem",
	"index::home_card_label_bonds": "Laten we vergelijken",
	"index::home_card_label_business_1": "Wat is het verschil?",
	"index::home_card_label_business_2": "Bitcoin-betalingen accepteren",
	"index::home_card_label_cash": "Laten we vergelijken",
	"index::home_card_label_cbdc": "Open of gesloten?",
	"index::home_card_label_coding_1": "Interactieve tutorial",
	"index::home_card_label_coding_2": "Hardware bouwen",
	"index::home_card_label_coding_3": "Codeeropdrachten",
	"index::home_card_label_crowdfunding_1": "EndSARS-protesten",
	"index::home_card_label_crowdfunding_2": "Onstuitbaar geld",
	"index::home_card_label_crowdfunding_3":
		"Financier je project",
	"index::home_card_label_crypto": "Wat is het verschil?",
	"index::home_card_label_energy_1": "Netstabilisatie",
	"index::home_card_label_energy_4": "Vraagsturing",
	"index::home_card_label_energy_5": "Elektrificatie van het platteland",
	"index::home_card_label_energy_6":
		"Stimulans voor hernieuwbare energie",
	"index::home_card_label_environment_1": "Methaanreductie",
	"index::home_card_label_environment_2":
		"Redde een nationaal park",
	"index::home_card_label_environment_3":
		"De groenste industrie",
	"index::home_card_label_environment_4":
		"Verlaagt afgefakkeld gas",
	"index::home_card_label_equality_1": "Hoop en kansen",
	"index::home_card_label_equality_2": "De grote gelijkmaker",
	"index::home_card_label_food_1": "Voedselprijzen",
	"index::home_card_label_food_2": "Boerderijen en grond",
	"index::home_card_label_freedom_1": "Autoritaire regimes",
	"index::home_card_label_freedom_2": "Uniek instrument",
	"index::home_card_label_get_started_1":
		"Basis voor beginners",
	"index::home_card_label_get_started_2": "Je eerste wallet",
	"index::home_card_label_get_started_3": "Bitcoin kopen",
	"index::home_card_label_gold": "Wat is beter?",
	"index::home_card_label_housing_1": "Betaalbaar wonen",
	"index::home_card_label_human_rights_1":
		"Verdedig mensenrechten",
	"index::home_card_label_human_rights_2":
		"Adoptie van onderaf",
	"index::home_card_label_human_rights_3": "Wereldwijde impact",
	"index::home_card_label_inflation": "Bitcoin is beter geld",
	"index::home_card_label_networks_1": "Live-netwerkbeeld",
	"index::home_card_label_networks_2": "Laten we vergelijken",
	"index::home_card_label_payments_1": "Wat is het verschil?",
	"index::home_card_label_payments_2":
		"Snelle en goedkope betalingen",
	"index::home_card_label_payments_3": "Geld naar het buitenland sturen",
	"index::home_card_label_payments_4": "Betalingen accepteren",
	"index::home_card_label_politics_1": "De politieke paradox",
	"index::home_card_label_politics_2": "Doe mee",
	"index::home_card_label_property_rights_1": "Laten we vergelijken",
	"index::home_card_label_property_rights_2": "Echt eigendom",
	"index::home_card_label_salary": "Bescherm je salaris",
	"index::home_card_label_self_custody_1":
		"Gids voor Bitcoin-wallets",
	"index::home_card_label_self_custody_2": "De belangrijkste stap",
	"index::home_card_label_self_custody_3": "Soeverein geld",
	"index::home_card_label_war_1": "Het einde van eindeloze oorlogen",
	"index::home_card_label_war_2": "Veteranen helpen",
	"index::home_card_label_war_3": "Ontsnappen aan oorlog",
	"index::home_h1":
		"Bitcoin is beter geld dat een betere wereld bouwt.",
	"index::home_nav_about": "Over ons",
	"index::home_nav_get_involved": "Doe mee",
	"index::home_nav_learn": "Leren",
	"index::home_source_prefix": "Bron:",
});

/* ─────────────── inflation (leftover) ─────────────── */
Object.assign(T, {
	"inflation::inflation_us_dollar": "AMERIKAANSE DOLLAR",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon en Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Bekijk onze",
	"lightning::lightning_grid_heading": "Populaire Lightning-wallets",
	"lightning::lightning_hardware_cta_label": "Hardware-wallets",
	"lightning::lightning_header_subtitle":
		"Met Lightning kun je Bitcoin in seconden versturen voor een fractie van een cent — kies een wallet waarvan de afwegingen passen bij hoeveel Bitcoin je wilt uitgeven.",
	"lightning::lightning_s1_c4_end": "voor meer informatie.",
	"lightning::lightning_s1_c4_link":
		"gids voor Bitcoin-hardwarewallets",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning-wallet",
	"lightning::sources_breez_lightning":
		"Breez — Lightning-wallet met self-custody",
	"lightning::sources_lightning_labs":
		"Lightning Labs — documentatie van het Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — bewaakte Lightning-wallet",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android en web",
	"nostr/index::nostr_platform_web": "Webbrowser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr is een nieuw gedecentraliseerd protocol voor onlinecommunicatie — het is van geen enkel bedrijf, Bitcoin-zaps zijn standaard ingebouwd, en je kunt tussen clients wisselen zonder je volgers te verliezen.",
	"nostr/index::nostr_amethyst_f1":
		"Veel functies en aanpassingsmogelijkheden",
	"nostr/index::nostr_amethyst_f2":
		"Heeft een aparte Bitcoin-wallet nodig",
	"nostr/index::nostr_amethyst_f3": "100 % gratis",
	"nostr/index::nostr_damus_f1":
		"Vertrouwde Twitter-achtige interface",
	"nostr/index::nostr_damus_f2": "Heeft een aparte Bitcoin-wallet nodig",
	"nostr/index::nostr_damus_f3": "100 % gratis",
	"nostr/index::nostr_download_heading":
		"Download een gratis Nostr-client",
	"nostr/index::nostr_download_intro":
		"Nostr-clients zijn gratis apps waarmee je in het Nostr-netwerk kunt lezen en posten. Ze zijn allemaal onderling compatibel — je kunt op elk moment van client wisselen en je volgers en inhoud behouden.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr is een nieuw gedecentraliseerd protocol voor onlinecommunicatie — het is van geen enkel bedrijf, Bitcoin-zaps zijn ingebouwd, en je kunt tussen apps wisselen zonder je volgers te verliezen.",
	"nostr/index::nostr_hero_title": "Wat is Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr lijkt op e-mail: het protocol is van niemand, iedereen kan er een app op bouwen, en jij kiest degene die je het beste bevalt. Anders dan bij Twitter of Facebook is er geen centraal bedrijf dat je kan censureren, eruit kan gooien of kan onderdrukken.",
	"nostr/index::nostr_intro_c2":
		"Hieronder vind je de korte versie van waarom Nostr belangrijk is — en daarna elke gratis Nostr-client die je nodig hebt om vandaag te beginnen.",
	"nostr/index::nostr_iris_f1":
		"Extreem eenvoudig — geen installatie nodig",
	"nostr/index::nostr_iris_f2":
		"Eenvoudige manier om Nostr met een testaccount uit te proberen",
	"nostr/index::nostr_iris_f3": "100 % gratis",
	"nostr/index::nostr_learn_more_label": "DIEPER INSTAPPEN",
	"nostr/index::nostr_learn_more_title":
		"Leer meer over Nostr op nostr.how",
	"nostr/index::nostr_primal_f1": "Aanbevolen eerste client",
	"nostr/index::nostr_primal_f2":
		"Ingebouwde Bitcoin-zap-wallet",
	"nostr/index::nostr_primal_f3": "100 % gratis",
	"nostr/index::nostr_s1": "Een protocol, geen platform",
	"nostr/index::nostr_s1_c1":
		"Nostr is een nieuw protocol waarmee je online kunt communiceren zonder angst voor censuur, verbanning of onderdrukking.",
	"nostr/index::nostr_s1_c2":
		"Platforms zoals Twitter en Facebook worden beheerd door één enkel bedrijf, maar het Nostr-protocol wordt door niemand beheerd.",
	"nostr/index::nostr_s2": "Vrijheid om te wisselen",
	"nostr/index::nostr_s2_c1":
		"Nostr lijkt op e-mail. Niemand beheert het e-mailprotocol, en iedereen kan er een client op bouwen (bijvoorbeeld Gmail, Hotmail, enz.).",
	"nostr/index::nostr_s2_c2":
		"Het Nostr-protocol wordt eveneens door niemand beheerd, en iedereen kan er een client op bouwen (bijvoorbeeld Damus, Amethyst, enz.).",
	"nostr/index::nostr_s2_c3":
		"Als je het niet leuk vindt hoe een bepaalde client werkt, kun je je Nostr-account naadloos meenemen naar een andere client zonder volgers of inhoud te verliezen.",
	"nostr/index::nostr_s3": "Bitcoin is ingebouwd",
	"nostr/index::nostr_s3_c1":
		"Bitcoin is standaard ingebouwd in het Nostr-protocol. Als je inhoud leuk vindt, kun je de auteur gewoon een „Bitcoin-zap“ als bedankje sturen!",
	"nostr/index::nostr_s3_c2":
		"Op gecentraliseerde platforms zoals Twitter en Facebook verdient een centraal bedrijf geld aan jouw inhoud. Maar in open protocollen zoals Nostr verdien jij geld aan je inhoud.",
	"nostr/index::sources_damus":
		"Damus — Nostr-client voor iPhone",
	"nostr/index::sources_iris":
		"Iris — Nostr-client in de browser",
	"nostr/index::sources_nostr_how":
		"nostr.how — Wat is Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr-protocol — opensource specificatie",
	"nostr/index::sources_primal":
		"Primal — Nostr-client met ingebouwde Bitcoin-zap-wallet",
	"nostr/index::what_is_nostr": "Wat is Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Print je eigen Bitcoin-stickers met deze bestanden.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Verzoek ontvangen 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"In bulk bestellen",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Delen op Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Wat is Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Heb je meer stickers nodig?",
	"sticker-success::sticker_success_hero_title":
		"Je stickers zijn onderweg 🎉",
	"sticker-success::sticker_success_share_header":
		"Deel waar je de stickers hebt geplakt",
	"sticker-success::sticker_success_tips_header":
		"Goede plekken voor stickers",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"En als je toch bezig bent, print en hang dan ook je eigen",
	"stickers::stickers_instructions_1":
		"Voer je postadres in, en wij sturen je gratis een pakket Bitcoin-stickers per post. Je stickers komen aan in een eenvoudige witte envelop.",
	"stickers::stickers_btn_choose_pack": "Dit pakket kiezen",
	"stickers::stickers_bulk_c1":
		"Wil je meer dan een paar stickers?",
	"stickers::stickers_bulk_c2":
		"Bestel ze in bulk bij dezelfde drukkerij die wij gebruiken",
	"stickers::stickers_bulk_c3":
		"— hoe meer je koopt, hoe goedkoper ze per stuk worden.",
	"stickers::stickers_bulk_cta":
		"Koop stickers in bulk",
	"stickers::stickers_bulk_header":
		"Stickers in bulk bestellen",
	"stickers::stickers_hero_subtitle":
		"Bestel een gratis pakket Bitcoin-stickers en hang ze op openbare plekken om meer mensen voor te lichten over Bitcoin.",
	"stickers::stickers_hero_title":
		"Gratis Bitcoin-stickers",
	"stickers::stickers_intro_c1":
		"Onze missie is om je te helpen meer mensen de „oranje pil“ te geven door Bitcoin-stickers op openbare plekken te plakken. Al onze stickers hebben QR-codes die naar educatieve pagina's leiden over",
	"stickers::stickers_intro_c3": "inflatie",
	"stickers::stickers_intro_c4":
		"Kies hieronder een stickerpakket en bepaal hoe je ze wilt ontvangen — we sturen iedereen in de VS of Canada een gratis pakket, of je kunt wereldwijd je eigen exemplaren printen.",
	"stickers::stickers_mail_header":
		"We sturen je je stickers gratis per post",
	"stickers::stickers_next_print_flyers": "Geef het door",
	"stickers::stickers_next_print_flyers_desc":
		"Print gratis Bitcoin-flyers en hang ze in het openbaar op",
	"stickers::stickers_option_bulk":
		"📦 Wereldwijd — in bulk bestellen",
	"stickers::stickers_option_canada":
		"🇨🇦 Canada — gratis per post",
	"stickers::stickers_option_print":
		"🌍 Wereldwijd — zelf printen",
	"stickers::stickers_option_usa":
		"🇺🇸 VS — gratis per post",
	"stickers::stickers_print_c1":
		"Je kunt meedoen door zelf stickers te printen, waar je ook woont. Tik hieronder op je taal om de stickerbestanden en printinstructies te downloaden.",
	"stickers::stickers_print_c2":
		"Niet elke sticker is in alle talen beschikbaar.",
	"stickers::stickers_print_header":
		"Print je eigen stickerbestanden",
	"stickers::stickers_request_c1":
		"Vul het formulier hieronder in om stickerbestanden in je lokale taal aan te vragen. We laten het je weten zodra ze klaar zijn.",
	"stickers::stickers_request_header":
		"Zie je je taal niet?",
	"stickers::stickers_share_c2":
		"Volg ons op Nostr door te zoeken naar",
	"stickers::stickers_share_c3":
		"in elke Nostr-client.",
	"stickers::stickers_signs_pack_description":
		"Waarschuwings-, voorzichtigheids- en informatieborden met Bitcoin-boodschappen — zo ontworpen dat ze de aandacht trekken en mensen laten stoppen om te lezen.",
	"stickers::stickers_step_1_description":
		"Elk pakket bevat een andere selectie Bitcoin-stickers met QR-codes die mensen voorlichten over Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "STAP 1",
	"stickers::stickers_step_1_header":
		"Kies een stickerpakket",
	"stickers::stickers_step_2_description":
		"We sturen een gratis pakket naar adressen in de VS en Canada. Overal anders ter wereld kun je je eigen exemplaren printen of in bulk bestellen.",
	"stickers::stickers_step_2_eyebrow": "STAP 2",
	"stickers::stickers_step_2_header":
		"Hoe wil je je stickers ontvangen?",
	"stickers::stickers_text_pack_description":
		"Een mix van Bitcoin-slogans en oneliners ontworpen om nieuwsgierigheid op te wekken op openbare plekken.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Kies je wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — beoordelingen van metalen back-ups voor Bitcoin-seeds",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin-wallet met self-custody",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin-hardwarewallet",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardwarewallet",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardwarewallet",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardwarewallet",
	"wallets::sources_seedsigner":
		"SeedSigner — opensource doe-het-zelf-apparaat voor het signeren van Bitcoin-transacties",
	"wallets::wallets_grid_heading": "Populaire Bitcoin-wallets",
	"wallets::wallets_header_subtitle":
		"Een stap-voor-stap-handleiding voor het kiezen van een wallet, het beschermen van je sleutels en het volledig overnemen van de controle over je Bitcoin.",
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
		`translate-rest-part2 (nl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 80)) console.log("  -", k);
		if (missingKeys.length > 80)
			console.log(`  ... +${missingKeys.length - 80} more`);
		process.exitCode = 1;
	}
}

main();
