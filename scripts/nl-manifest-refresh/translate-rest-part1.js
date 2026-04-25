#!/usr/bin/env node
/**
 * Dutch manifest refresh — part 1 of non-inflation namespaces.
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
	"nl.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Terug naar de homepage",
	"404::404_message": "Bitcoin is geweldig, maar deze kapotte pagina niet.",
	"404::404_not_found_short": "Niet gevonden",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"We bieden gratis bronnen voor bedrijven, zodat lokale ondernemers eenvoudig Bitcoin kunnen accepteren. Onze pagina Bitcoin voor bedrijven legt uit waarom Bitcoin goed is voor je bedrijf, hoe je een wallet en betalingsverwerker kiest, en biedt gratis stickers met „Bitcoin geaccepteerd hier“.",
	"about::about_card_business_label": "Bedrijfsbronnen",
	"about::about_card_business_source": "Bron: bitcoin.rocks →",
	"about::about_card_business_title":
		"Alles wat een bedrijf nodig heeft om Bitcoin-betalingen te accepteren",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Bron: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Bijdragen",
	"about::about_card_contribute_source": "Bron: GitHub →",
	"about::about_card_contribute_title":
		"Leer hoe je kunt bijdragen aan het bitcoin.rocks-project",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Bron: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Printbare flyers",
	"about::about_card_flyers_source": "Bron: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Download Bitcoin-flyers en print ze voor je gemeenschap",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Bron: GitHub →",
	"about::about_card_github_title": "Bekijk bitcoin.rocks op GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Bron: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Gratis stickers",
	"about::about_card_stickers_source": "Bron: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Ontvang gratis Bitcoin-stickers thuis bezorgd",
	"about::about_editorial_2":
		"We linken naar betrouwbare bronnen zoals de Federal Reserve (FRED), het U.S. Bureau of Labor Statistics, de FDIC, de Verenigde Naties, de World Gold Council, Forbes, MIT Technology Review, Lyn Alden en James Lavish. Wij zijn ervan overtuigd dat Bitcoin voor zichzelf spreekt wanneer de feiten helder worden gepresenteerd.",
	"about::about_flyers_blurb":
		"We ontwerpen printbare flyers die je kunt uitdelen op meetups, op prikborden kunt hangen of in brievenbussen kunt stoppen — een eenvoudige manier om nieuwsgierigheid te wekken en mensen naar bitcoin.rocks te leiden om meer te leren.",
	"about::about_header": "Over het bitcoin.rocks-project",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks is opgericht door gebruiker",
	"about::about_mission_1b":
		"in 2022 met een eenvoudige missie: de adoptie van Bitcoin versnellen door middel van educatie.",
	"about::about_open_source_2":
		"bitcoin.rocks is een gratis opensourceproject onder de MIT-licentie. Iedereen kan bijdragen. We verwelkomen vooral vertalers die helpen onze inhoud toegankelijk te maken voor mensen over de hele wereld.",
	"about::about_open_source_header": "Open source",
	"about::about_page_description":
		"bitcoin.rocks is een gratis opensource educatieve website over Bitcoin, opgericht in 2022. Onze missie is om de adoptie van Bitcoin te versnellen door middel van educatie.",
	"about::about_stickers_blurb":
		"We versturen gratis Bitcoin-stickers rechtstreeks naar je deur, zodat je kunt helpen het bewustzijn over Bitcoin in je gemeenschap te vergroten. Elke maand scannen honderden mensen de QR-codes op deze stickers om meer te leren over Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin kent geen bankruns",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin is een volledigereservessysteem. Je stopt je geld niet in een bank. Jij bent je eigen bank. Je geld wordt niet zonder jouw medeweten uitgeleend, want jij bent de enige met toegang.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Zolang je Bitcoin in je eigen wallet bewaart — niet op een exchange of in een ETF — zijn bankruns onmogelijk.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Met Bitcoin heb je echte controle over je geld.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Sinds 26 maart 2020 hoeven Amerikaanse banken geen minimale reserves meer aan te houden.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Reserveratio bank",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Bron: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Volledigereservessysteem — geen depositoverzekering nodig.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin-bescherming",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Bron: Bitcoin-whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Elke bitcoin bestaat op de blockchain — er wordt niets uitgeleend.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Reserveratio Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Bron: Bitcoin-whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$ 153,9 miljard verzekeringsfonds versus $ 10,82 biljoen aan verzekerde deposito's (december 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-dekking",
	"bank-runs::bank_runs_card_fdic_source":
		"Bron: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Casestudy",
	"bank-runs::bank_runs_card_svb_source":
		"Bron: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Lees hoe de bankrun op Silicon Valley Bank ontstond",
	"bank-runs::bank_runs_card_wallet_label": "Volgende stap",
	"bank-runs::bank_runs_card_wallet_source": "Begin hier →",
	"bank-runs::bank_runs_card_wallet_title":
		"Leer hoe je je eigen Bitcoin-wallet krijgt",
	"bank-runs::bank_runs_fdic_heading":
		"De FDIC-verzekering dekt slechts ongeveer 1 % van de deposito's",
	"bank-runs::bank_runs_fdic_p1":
		"De FDIC-verzekering beschermt deposito's tot $ 250.000 per spaarder. Maar het verzekeringsfonds is minuscuul vergeleken met de totale deposito's die het zou moeten beschermen.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Bij een grootschalige bankcrisis zou de overheid waarschijnlijk geld bijdrukken om het verschil te dekken — wat leidt tot meer",
	"bank-runs::bank_runs_fdic_p2_link": "inflatie",
	"bank-runs::bank_runs_header":
		"Bitcoin kent geen bankruns, maar jouw bank misschien wel.",
	"bank-runs::bank_runs_page_description":
		"Banken lenen jouw deposito's uit binnen het systeem van fractioneel reservebankieren. Wanneer te veel mensen tegelijk geld willen opnemen, kunnen banken omvallen. Bitcoin is een volledigereservessysteem — bankruns zijn onmogelijk.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: een voorbeeld uit de praktijk",
	"bank-runs::bank_runs_svb_p1_a":
		"In maart 2023 viel Silicon Valley Bank om nadat ze klantdeposito's hadden geïnvesteerd in langlopende",
	"bank-runs::bank_runs_svb_p1_b":
		"Toen die obligaties in waarde daalden, kon SVB de opnames niet meer dekken. De bank werd insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "staatsobligaties",
	"bank-runs::bank_runs_svb_p2":
		"Duizenden bedrijven konden hun werknemers niet meer betalen. De FDIC sprong in — maar een grotere vraag bleef staan: is jouw geld echt veilig?",
	"bank-runs::bank_runs_what_p1":
		"Banken bewaren jouw deposito's niet in een kluis. Ze lenen ze uit en investeren je geld — dat heet fractioneel reservebankieren.",
	"bank-runs::bank_runs_what_p2":
		"Wanneer te veel mensen tegelijk geld willen opnemen, heeft de bank niet genoeg contant geld om iedereen uit te betalen. Dat is een bankrun — en dat kan leiden tot een volledig faillissement van de bank.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::bitcoin_vs_banks": "Bitcoin versus banken",
	"bitcoin-vs-banks::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">banken</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin kan door iedereen met een internetverbinding worden gebruikt — het is ",
	"bitcoin-vs-banks::point_1_summary_2": "permissieloos.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banken kunnen rekeningen weigeren, bevriezen of sluiten op basis van hun eigen regels of overheidsmandaten.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Het Bitcoin-netwerk werkt 24/7/365 zonder onderhoudsvensters of feestdagen. Banken hebben beperkte openingstijden, gesloten weekenden en storingen.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Elke Bitcoin-transactie staat in een openbare blockchain die iedereen kan controleren. Banken houden privéboeken bij die klanten niet onafhankelijk kunnen verifiëren.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Met Bitcoin houd je je eigen privésleutels — bekijk onze eenvoudige handleiding voor ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin-wallets",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banken bewaren jouw geld en kunnen het op elk moment bevriezen, beperken of vergrendelen.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin-kosten zijn transparant en voorspelbaar. Banken stapelen geleidelijk verborgen kosten op voor rekeningen, roodstand, overschrijvingen en geldautomaten.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Met Bitcoin geef je alleen uit wat je daadwerkelijk bezit. Banken staan roodstand toe en rekenen je dan stapels kosten daarvoor.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Eenmaal verzonden, kunnen Bitcoin-transacties niet worden gestopt of teruggedraaid. Banken kunnen transacties blokkeren, bevriezen of terugdraaien op basis van regels of overheidsbevelen.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::bitcoin_vs_bonds": "Bitcoin versus obligaties",
	"bitcoin-vs-bonds::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">obligaties</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligaties zijn alleen nominaal „risicoloos“ — inflatie, renteschommelingen en wanbetalingsrisico knagen aan het reële rendement.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin heeft transparante volatiliteit, maar geen verborgen tegenpartijrisico.",
	"bitcoin-vs-bonds::point_2_summary_1": "Wanneer",
	"bitcoin-vs-bonds::point_2_summary_2": "inflatie",
	"bitcoin-vs-bonds::point_2_summary_3":
		"hoger ligt dan de rente op obligaties, verliezen obligatiehouders elk jaar reëel aan koopkracht. De bovengrens van 21 miljoen van Bitcoin kan niet door inflatie worden verwaterd.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Obligatiemarkten kunnen tijdens crises bevriezen — Silicon Valley Bank viel deels om omdat ze obligaties bezaten die in waarde daalden. Zie hoe",
	"bitcoin-vs-bonds::point_3_summary_2": "bankruns",
	"bitcoin-vs-bonds::point_3_summary_3":
		" ontstaan en waarom Bitcoin ze vermijdt. Bitcoin wordt 24/7 wereldwijd verhandeld, zonder liquiditeitscrises.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Veilingen van staatsobligaties kunnen mislukken als er niet genoeg kopers zijn — zie de",
	"bitcoin-vs-bonds::point_4_summary_2": "zwakke veiling van 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"De prijs van Bitcoin wordt continu ontdekt op open markten, zonder een centrale veiling die kan mislukken.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Het rendement op obligaties wordt vastgesteld bij aankoop. Zelfs als de economie groeit of de munt instort, blijft jouw rendement gelijk.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin heeft ruimte voor aanzienlijke groei naarmate de adoptie toeneemt en de vraag op een vast aanbod stuit.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"De meeste obligaties worden aangehouden via banken of brokers, wat tegenpartijrisico toevoegt. Bitcoin kan in self-custody worden bewaard met een",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — zo verdwijnt dit risico volledig.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligaties zijn volledig afhankelijk van overheden die hun schulden terugbetalen. Als een overheid in gebreke blijft of de schuld via inflatie wegvaagt, verliezen obligatiehouders.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin werkt onafhankelijk van welke overheid of politieke autoriteit dan ook.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">contant geld</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin verplaatst zich binnen enkele minuten over het internet naar elke plek ter wereld. Contant geld vereist fysieke aanwezigheid of betrouwbare koeriers — een briefje van twintig kun je niet e-mailen.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin werkt overal hetzelfde. Contant geld is beperkt door geografie, wisselkoersen en lokale acceptatie.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Overheden kunnen contant geld van de ene op de andere dag ongeldig verklaren — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> deed dat in 2016. Maar zelfs zonder demonetarisering verliest contant geld waarde door",
	"bitcoin-vs-cash::point_3_summary_2": "inflatie",
	"bitcoin-vs-cash::point_3_summary_3":
		". Bitcoin kan door geen enkele overheid of autoriteit ongeldig worden verklaard.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Contant geld kan worden vervalst, soms heel overtuigend. Bitcoin gebruikt cryptografie die vervalsing wiskundig onmogelijk maakt.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin heeft geen centrale autoriteit. Contant geld wordt uitgegeven door overheden, die er naar believen meer kunnen drukken, het uiterlijk veranderen of biljetten ongeldig verklaren.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Contant geld is kwetsbaar voor diefstal, brand, verlies en inbeslagname. Bitcoin kan veilig in ",
	"bitcoin-vs-cash::point_6_summary_2": "self-custody",
	"bitcoin-vs-cash::point_6_summary_3":
		" worden bewaard op een telefoon of hardwareapparaat.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin is deelbaar tot 100 miljoen satoshi's, waardoor microbetalingen van elke omvang mogelijk zijn. Contant geld kent minimale coupures — een cent kun je niet opdelen.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin versus CBDC's",
	"bitcoin-vs-cbdc::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">digitale centralebankvaluta's (CBDC's)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Niemand kan jou tegenhouden om transacties met Bitcoin uit te voeren. CBDC's zijn ontworpen zodat overheden en centrale banken elke betaling kunnen controleren, wat je privacy en vrijheid beperkt.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin verloopt nooit en heeft geen maandelijkse kosten. CBDC's kunnen worden geprogrammeerd om te verlopen, waardoor je niet kunt sparen voor de toekomst.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin heeft een vaste bovengrens van 21 miljoen BTC. CBDC's kennen geen aanbodlimiet en stellen overheden in staat de geldhoeveelheid naar believen uit te breiden — wat",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflatie",
	"bitcoin-vs-cbdc::point_3_summary_3":
		" veroorzaakt.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-adressen zijn niet gekoppeld aan je echte identiteit. CBDC's zijn rechtstreeks gekoppeld aan overheids-ID's, wat massale financiële surveillance en censuur mogelijk maakt.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"De Bitcoin-regels worden gecontroleerd door tienduizenden onafhankelijke nodes. CBDC's zijn gecentraliseerd in handen van overheden en centrale banken, die volledige controle hebben over het netwerk.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Iedereen kan een Bitcoin-node draaien en de netwerkregels verifiëren. CBDC's staan gebruikers niet toe hun eigen nodes te draaien — je moet vertrouwen op een centrale autoriteit.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin in self-custody kan door niemand worden bevroren. CBDC's zijn ontworpen zodat overheden en centrale banken rekeningen onmiddellijk kunnen bevriezen.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin geeft je volledige controle over je geld als je het zelf in een",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" zet. CBDC's vereisen vertrouwen in custodians zoals banken of overheden die je geld voor je bewaren.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Het monetaire beleid van Bitcoin staat vast in code en kan niet worden gewijzigd. CBDC's kunnen door politici naar believen worden geherprogrammeerd, wat",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflatie",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" veroorzaakt wanneer er te veel geld wordt gedrukt.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin is het veiligste computernetwerk dat ooit is gebouwd en is nog nooit gehackt. CBDC's zijn afhankelijk van banken en overheden die ontelbare keren zijn gehackt.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin versus crypto",
	"bitcoin-vs-crypto::crypto": "Crypto",
	"bitcoin-vs-crypto::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">crypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Het Bitcoin-protocol is sinds 2009 grotendeels onveranderd en levert voorspelbare regels. De meeste cryptoprojecten veranderen voortdurend hun protocol, tokenomics, of splitsen zich op in nieuwe versies.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin draait op tienduizenden onafhankelijke nodes wereldwijd. De meeste cryptoprojecten worden gecontroleerd door stichtingen, bedrijven of kleine ontwikkelteams die eenzijdige wijzigingen kunnen doorvoeren.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin heeft een vaste bovengrens van 21 miljoen coins — het schaarste digitale activum. De meeste cryptoprojecten hebben een onbeperkt aanbod of mechanismen om naar believen nieuwe tokens te creëren en houders te verwateren.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin heeft één doel: peer-to-peer digitaal geld. Iedereen begrijpt en gebruikt het. De meeste crypto's omvatten complexe smart contracts of DeFi die technische kennis vereisen om veilig te gebruiken.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoins proof-of-work draait al meer dan 15 jaar zonder een succesvolle aanval op het hoofdnetwerk. De meeste cryptoprojecten gebruiken experimentele consensusmechanismen die niet onder zware druk getest zijn.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin is digitaal geld — een waardeopslag en ruilmiddel. De meeste cryptotokens zijn speculatieve utility- of governance-tokens met onduidelijke werkelijke waarde.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin wordt sterker onder aanvallen en heeft elke crisis, elk verbod en elke kritiek overleefd. De meeste cryptoprojecten falen onder regelgevende, technische of marktdruk.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin heeft geen CEO, geen bedrijf en geen single point of failure. De meeste cryptoprojecten hangen af van VC-investeerders, specifieke leiders of het voortbestaan van één enkel bedrijf.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">beeldende kunst</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Elke bitcoin is identiek en uitwisselbaar. Elk kunstwerk is uniek — andere herkomst, geschiedenis, staat en provenance maken directe vergelijkingen extreem moeilijk.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin wordt 24/7 verhandeld op een wereldwijde markt die voor iedereen toegankelijk is. Beeldende kunst vereist gespecialiseerde veilinghuizen, privédealers of galeries, en een verkoop kan maanden duren.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bij het kopen of verkopen van Bitcoin betaal je minder dan 1 % aan kosten, vaak veel minder. Bij het verkopen van kunst stapelen zich 30–40 % aan kopersopgelden, commissies, verzekering, transport en authentificatiekosten op.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin is deelbaar tot 100 miljoen satoshi's en daarom ideaal voor transacties van elke omvang. Een deel van een schilderij of een hoekje van een sculptuur kun je niet bezitten zonder tegenpartijrisico.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Eigendom en authenticiteit van Bitcoin kan iedereen cryptografisch verifiëren op de blockchain. Authentificatie van kunst is duur, traag en wordt regelmatig misleid door vervalsers — waardoor de waarde van de ene op de andere dag kan verdampen.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Goed beveiligde Bitcoin overleeft overstromingen, branden, aardbevingen en diefstal. Beeldende kunst is kwetsbaar voor elke vorm van fysieke vernietiging, en verzekeringen dekken zelden alles.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Iedereen met een internetverbinding en wat geld kan Bitcoin kopen. Beleggen in beeldende kunst is praktisch beperkt tot welgestelde verzamelaars met toegang tot veilingen en gespecialiseerde kennis.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">goud</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin kan onmiddellijk via het internet worden verzonden tegen lage kosten. Goud moet fysiek worden verscheept om eigendom over te dragen.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin is een digital-native activum dat je over het internet kunt verplaatsen. Online goud is een digitaal schuldbewijs — je bezit alleen de belofte van een custodian, niet het metaal zelf.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin heeft een vaste bovengrens van 21 miljoen BTC. De goudvoorraad groeit met ongeveer <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % per jaar</a>, waardoor je aandeel krimpt — minder dan fiat-",
	"bitcoin-vs-gold::point_3_summary_2": "inflatie",
	"bitcoin-vs-gold::point_3_summary_3":
		", maar nog steeds inflatie.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Wanneer de goudprijs stijgt, wordt er meer goud gewonnen, wat de prijs weer drukt. Het aanbod van Bitcoin is inelastisch — hoe hoog de prijs ook stijgt, het zullen er altijd maar 21 miljoen zijn.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Het Bitcoin-netwerk wordt geverifieerd door tienduizenden onafhankelijke nodes. Het meeste fysieke goud ligt in een handvol grote kluizen.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Iedereen kan echte Bitcoin verifiëren door een full node te draaien — dat is gewoon een app. Het verifiëren van fysiek goud vereist het smelten ervan; er kan wolfraam in zitten.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin is deelbaar tot 100 miljoen satoshi's en daarom ideaal voor aankopen van elke omvang. Goud kan niet eenvoudig worden opgesplitst in kleinere transacties.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">vastgoed</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin verplaatst zich onmiddellijk naar elke plek ter wereld. Vastgoed is gebonden aan een locatie en blootgesteld aan lokale economische, politieke en natuurlijke risico's.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin is deelbaar tot 100 miljoen satoshi's. Een onroerend goed kan niet gedeeltelijk worden verkocht — je kunt niet alleen de keuken verkopen of een halve slaapkamer kopen.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin draait op een gedecentraliseerd netwerk dat geen enkele overheid kan controleren. Vastgoed is sterk gereguleerd — bestemmingsplannen, huurprijsregulering, onteigening en inbeslagname zijn allemaal van toepassing.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin vereist geen onderhoud. Vastgoed vereist reparaties, renovaties, verzekeringen, beheer en het omgaan met huurdersproblemen.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin is niet onderhevig aan doorlopende belasting — vermogenswinstbelasting betaal je alleen bij verkoop. Op vastgoed betaal je jaarlijks onroerendezaakbelasting, ongeacht je inkomen.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Goed beveiligde Bitcoin doorstaat brand, overstromingen en aardbevingen. Vastgoed is blootgesteld aan elke ramp, en verzekeringen dekken zelden alles.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Elke bitcoin is identiek en uitwisselbaar. Elk pand is uniek, wat waarderingen en vergelijkingen bemoeilijkt.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin wordt 24/7 wereldwijd verhandeld voor iedereen met internettoegang. Vastgoedverkoop is beperkt tot lokale kopers en het sluiten van een deal kan maanden papierwerk vergen.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin maakt direct individueel eigendom voor iedereen mogelijk. Vastgoed kopen als belegging buiten je eigen behoefte drijft huizenprijzen op, verlaagt de betaalbaarheid en wakkert de wooncrisis aan.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">aandelen</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin is een direct activum dat je volledig bezit. Aandelen zijn participaties in een bedrijf — hun waarde hangt af van management, prestaties en beslissingen waarop jij geen invloed hebt.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin heeft een vaste bovengrens van 21 miljoen BTC. Bedrijven kunnen op elk moment nieuwe aandelen uitgeven en bestaande aandeelhouders verwateren — net zoals fiat-",
	"bitcoin-vs-stocks::point_2_summary_2": "inflatie",
	"bitcoin-vs-stocks::point_2_summary_3":
		" contant geld verwatert. Bij Bitcoin krimpt jouw aandeel nooit.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin heeft geen CEO en geen single point of failure. Aandelen zijn sterk afhankelijk van management — één verkeerde beslissing of het vertrek van een sleutelpersoon kan de koers laten kelderen.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"De prijs van Bitcoin komt van open wereldwijde markten. Aandelenwaarderingen leunen op kengetallen zoals de koers-winstverhouding, die overgewaardeerde aandelen kunnen verhullen.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin wordt 24/7 wereldwijd verhandeld. Aandelenmarkten zijn alleen geopend op werkdagen tijdens beurstijden.",
	"bitcoin-vs-stocks::point_6_summary_1": "Bij Bitcoin kun je via een eenvoudige app overstappen naar",
	"bitcoin-vs-stocks::point_6_summary_2": "self-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		" — geen broker nodig. Aandelen liggen bij brokers, wat je blootstelt aan tegenpartijrisico als die omvallen.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Het vaste aanbod van Bitcoin maakt het een betrouwbare bescherming tegen inflatie. Sommige aandelen verslaan inflatie, andere niet — er is geen garantie.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Het verschil tussen <span class=\"orange\">Bitcoin</span> en <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin is een open netwerk waar iedereen zonder toestemming aan kan deelnemen. Visa is een gesloten systeem dat wordt gecontroleerd door financiële instellingen die toegang kunnen weigeren — vooral aan mensen zonder bankrekening of met beperkte toegang tot bankdiensten.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin-transacties hebben geen merchant fees. Visa rekent winkeliers doorgaans ongeveer 3 % per transactie — je bedrijf kan geld besparen door",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin-betalingen",
	"bitcoin-vs-visa::point_2_summary_3": " te accepteren.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Elke Bitcoin-transactie staat in een openbare, controleerbare blockchain. Visa beheert een gesloten, propriëtair systeem waar klanten niets onafhankelijk kunnen verifiëren.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin kan door geen enkele centrale autoriteit worden bevroren. Visa kan rekeningen op elk moment bevriezen, transacties blokkeren of de dienst weigeren.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin is finale settlement — je geeft alleen uit wat je bezit. Creditcards creëren schuld met rente, vaak meer dan 25 % per jaar.",
	"bitcoin-vs-visa::point_6_summary_1": "Met Bitcoin kun je overstappen naar",
	"bitcoin-vs-visa::point_6_summary_2": "self-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		", zonder bank of betalingsverwerker. Creditcards hebben altijd tussenpersonen nodig.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin werkt 24/7 wereldwijd zonder kantooruren. Visa heeft openingstijden, onderhoudsvensters en geografische beperkingen die transacties kunnen blokkeren.",
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
		`translate-rest-part1 (nl): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
