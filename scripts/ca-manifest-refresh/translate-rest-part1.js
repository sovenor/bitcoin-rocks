#!/usr/bin/env node
/**
 * Catalan manifest refresh — part 1 of non-inflation namespaces.
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
	"ca.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Tornar a la pàgina d'inici",
	"404::404_message": "Bitcoin és genial, però aquesta pàgina trencada no ho és.",
	"404::404_not_found_short": "No trobat",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Oferim kits per a empreses de forma gratuïta que fan que sigui fàcil per a les empreses locals començar a acceptar Bitcoin. Cada kit inclou materials impresos que expliquen per què acceptar Bitcoin és beneficiós per al seu negoci.",
	"about::about_card_business_label": "Kit per a empreses",
	"about::about_card_business_source": "Font: bitcoin.rocks →",
	"about::about_card_business_title":
		"Ajuda els negocis locals a acceptar pagaments en Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Font: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribueix",
	"about::about_card_contribute_source": "Font: GitHub →",
	"about::about_card_contribute_title":
		"Aprèn a contribuir al projecte bitcoin.rocks",
	"about::about_card_email_label": "Correu electrònic",
	"about::about_card_email_source": "Font: correu electrònic →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Fulletons impresos",
	"about::about_card_flyers_source": "Font: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Descarrega i imprimeix fulletons de Bitcoin per a la teva comunitat",
	"about::about_card_github_label": "Repositori",
	"about::about_card_github_source": "Font: GitHub →",
	"about::about_card_github_title": "Mira bitcoin.rocks a GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Font: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Adhesius gratuïts",
	"about::about_card_stickers_source": "Font: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Rep adhesius de Bitcoin gratuïts enviats a casa teva",
	"about::about_editorial_2":
		"Citem fonts fiables com la Reserva Federal (FRED), l'Oficina d'Estadístiques Laborals dels EUA, la FDIC, les Nacions Unides, el World Gold Council, Forbes, MIT Technology Review, Lyn Alden i James Lavish. Creiem que quan les dades es presenten clarament, Bitcoin parla per si mateix.",
	"about::about_flyers_blurb":
		"Creem fulletons imprimibles que pots repartir en reunions, penjar en taulers comunitaris o deixar a les bústies — una manera senzilla de despertar la curiositat i dirigir la gent a bitcoin.rocks per aprendre'n més.",
	"about::about_header": "Sobre bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks",
	"about::about_mission_1b":
		"es va fundar el 2022 amb una missió senzilla: accelerar l'adopció de Bitcoin a través de l'educació.",
	"about::about_open_source_2":
		"bitcoin.rocks és un projecte gratuït i de codi obert amb llicència MIT. Qualsevol persona pot contribuir a bitcoin.rocks. Donem la benvinguda especialment als traductors que ens ajuden a portar el nostre contingut a gent d'arreu del món.",
	"about::about_page_description":
		"bitcoin.rocks és un lloc web educatiu sobre Bitcoin gratuït i de codi obert fundat el 2022. La nostra missió és accelerar l'adopció de Bitcoin a través de l'educació.",
	"about::about_stickers_blurb":
		"Enviem adhesius de Bitcoin gratuïts a la teva porta perquè puguis difondre la paraula sobre Bitcoin a la teva comunitat. Cada mes, centenars de persones escanegen els codis QR d'aquests adhesius per aprendre sobre Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin no té retirades bancàries massives",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin és un sistema de reserva completa. No dipositis els teus diners en un banc. Tu ets el banc. Els teus diners no es presten sense que ho sàpigues, perquè només tu hi pots accedir.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Mentre mantinguis Bitcoin en la teva pròpia cartera — no embolicat en un exchange o un ETF — una retirada bancària massiva és impossible.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Amb Bitcoin, realment controles els teus diners.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Des del 26 de març de 2020, els bancs dels EUA no han de mantenir cap reserva.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Ràtio de reserves bancàries",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Font: Reserva Federal →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistema de reserva completa — no cal assegurança de dipòsits.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Cobertura de Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Font: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Cada Bitcoin és a la blockchain — cap no s'ha prestat.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Ràtio de reserves de Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Font: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 milers de milions de dòlars en fons d'assegurança vs 10,82 bilions de dòlars en dipòsits assegurats (desembre de 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Cobertura de la FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Font: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Cas d'estudi",
	"bank-runs::bank_runs_card_svb_source":
		"Font: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Aprèn com es va produir la retirada bancària massiva al Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Següent pas",
	"bank-runs::bank_runs_card_wallet_source": "Comença aquí →",
	"bank-runs::bank_runs_card_wallet_title":
		"Aprèn a obtenir la teva pròpia cartera de Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"L'assegurança de la FDIC cobreix aproximadament l'1% dels dipòsits",
	"bank-runs::bank_runs_fdic_p1":
		"L'assegurança de la FDIC protegeix els dipòsits fins a 250.000 dòlars per dipositant. Però el fons d'assegurança és molt més petit que els dipòsits totals que se suposa que protegeix.",
	"bank-runs::bank_runs_fdic_p2_a":
		"En cas d'una fallida bancària a gran escala, el govern imprimiria diners per cobrir el dèficit — fet que provoca més",
	"bank-runs::bank_runs_fdic_p2_link": "inflació.",
	"bank-runs::bank_runs_header":
		"Bitcoin no té retirades massives, però el teu banc sí que pot tenir-ne.",
	"bank-runs::bank_runs_page_description":
		"Els bancs presten els teus dipòsits sota la banca de reserva fraccionària. Si massa gent vol retirar diners alhora, els bancs poden fallar. Bitcoin és un sistema de reserva completa — les retirades massives són impossibles.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: un exemple real",
	"bank-runs::bank_runs_svb_p1_a":
		"El març de 2023, Silicon Valley Bank va fallar perquè havia invertit els dipòsits dels clients en",
	"bank-runs::bank_runs_svb_p1_b":
		"bons a llarg termini. Quan aquests bons van perdre valor, SVB no va poder cobrir les retirades. El banc es va declarar insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "del Tresor",
	"bank-runs::bank_runs_svb_p2":
		"Milers d'empreses no van poder pagar els seus empleats. La FDIC va intervenir — però va plantejar una gran pregunta: estan realment segurs els teus diners?",
	"bank-runs::bank_runs_what_p1":
		"Els bancs no guarden els teus dipòsits en una cambra cuirassada. Els presten i els inverteixen — això s'anomena banca de reserva fraccionària.",
	"bank-runs::bank_runs_what_p2":
		"Si massa gent vol retirar diners alhora, el banc no tindrà prou efectiu per pagar a tothom. Això és una retirada bancària massiva — i pot conduir al col·lapse total dels bancs.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i els <span class=\"asset\">bancs</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Qualsevol persona amb connexió a Internet pot utilitzar Bitcoin — és ",
	"bitcoin-vs-banks::point_1_summary_2": "sense permisos.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Els bancs poden rebutjar, congelar o tancar comptes segons polítiques o normes governamentals.",
	"bitcoin-vs-banks::point_2_summary_1":
		"La xarxa Bitcoin funciona 24/7, sense pauses de manteniment ni festius. Els bancs tenen horaris limitats, tanquen els caps de setmana i fan pauses.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Cada transacció de Bitcoin es troba en una blockchain pública que qualsevol pot auditar. Els bancs mantenen llibres de comptes privats que els clients no poden verificar de forma independent.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Amb Bitcoin, tu tens les teves claus — mira la nostra guia senzilla sobre ",
	"bitcoin-vs-banks::point_4_summary_2": "carteres de Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Els bancs mantenen els teus diners i poden congelar-los, restringir-los o tallar-te l'accés en qualsevol moment.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Les comissions de Bitcoin són transparents i predictibles. Els bancs acumulen comissions amagades amb el temps per comptes, descoberts, transferències i caixers.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin només et permet gastar el que tens. Els bancs permeten descoberts, i després cobren comissions de penalització recurrents per aquest privilegi.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Un cop difoses, les transaccions de Bitcoin no es poden aturar ni revertir. Els bancs poden bloquejar, congelar o revertir transaccions segons polítiques o ordres governamentals.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i els <span class=\"asset\">bons</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Els bons són \"sense risc\" només de nom — la inflació, les fluctuacions dels tipus d'interès i el risc d'impagament es mengen els rendiments reals.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin té una volatilitat transparent però cap risc de contrapart amagat.",
	"bitcoin-vs-bonds::point_2_summary_1": "Si la",
	"bitcoin-vs-bonds::point_2_summary_2": "inflació",
	"bitcoin-vs-bonds::point_2_summary_3":
		"supera el rendiment del bo, els tenedors de bons perden poder adquisitiu real cada any. El límit de 21 milions de Bitcoin no es pot inflar.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"El mercat de bons es congela durant les crisis — Silicon Valley Bank va fallar parcialment perquè estava atrapat en bons que havien perdut valor. Mira les",
	"bitcoin-vs-bonds::point_3_summary_2": "retirades bancàries",
	"bitcoin-vs-bonds::point_3_summary_3":
		" per veure com Bitcoin les evita. Bitcoin cotitza 24/7 globalment sense crisis de liquiditat.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Les subhastes de bons del Tresor poden fallar si no hi ha prou compradors — mira les",
	"bitcoin-vs-bonds::point_4_summary_2": "subhastes febles de 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"El preu de Bitcoin es descobreix contínuament al mercat obert, sense cap subhasta central que pugui fallar.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Els rendiments dels bons es fixen en el moment de la compra. Encara que l'economia prosperi o la moneda es col·lapsi, el teu rendiment es manté igual.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin té un potencial alcista significatiu a mesura que creix l'adopció i la demanda es troba amb una oferta fixa.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"La majoria dels bons es mantenen a través de bancs o corredors, afegint risc de contrapart. Bitcoin es pot autocustodiar amb una",
	"bitcoin-vs-bonds::point_6_summary_2": "cartera",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminant completament aquest risc.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Els bons depenen completament del govern. Si el govern fa impagament o infla el seu deute, els tenedors de bons perden.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin opera independentment de qualsevol govern o autoritat política.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i l'<span class=\"asset\">efectiu</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin es mou a qualsevol lloc del món a través d'Internet en qüestió de minuts. L'efectiu requereix presència física o portadors de confiança — no pots enviar un bitllet de 20 dòlars per correu electrònic.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funciona igual a tot arreu. L'efectiu està limitat per la geografia, els tipus de canvi i l'acceptació local.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Els governs poden fer que l'efectiu quedi obsolet de la nit al dia — l'Índia ho va fer exactament el 2016. Fins i tot sense retirar-lo de la circulació, l'efectiu perd valor per la",
	"bitcoin-vs-cash::point_3_summary_2": "inflació.",
	"bitcoin-vs-cash::point_3_summary_3":
		" Bitcoin no pot ser declarat obsolet per cap govern o autoritat.",
	"bitcoin-vs-cash::point_4_summary_1":
		"L'efectiu es pot falsificar, de vegades de manera convincent. Bitcoin utilitza criptografia que fa que falsificar sigui matemàticament impossible.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin no té cap autoritat central. L'efectiu és emès pels governs, que poden imprimir-ne més, canviar els dissenys o invalidar bitllets a voluntat.",
	"bitcoin-vs-cash::point_6_summary_1":
		"L'efectiu és vulnerable al robatori, al foc, a la pèrdua i al confiscament. Bitcoin es pot",
	"bitcoin-vs-cash::point_6_summary_2": "autocustodiar",
	"bitcoin-vs-cash::point_6_summary_3":
		" de manera segura en un telèfon o dispositiu de maquinari.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin es divideix en 100 milions de satoshis, permetent pagaments de qualsevol mida. L'efectiu té denominacions mínimes — no pots dividir un cèntim.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i les <span class=\"asset\">monedes digitals del banc central (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Ningú no et pot impedir transaccionar amb Bitcoin. Les CBDC estan dissenyades perquè els governs i els bancs centrals controlin cada pagament, limitant la teva privacitat i llibertat.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin mai no caduca i no té comissions mensuals. Les CBDC es poden programar perquè caduquin, dissuadint-te d'estalviar per al futur.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin té un límit estricte de 21 milions de BTC. Les CBDC no tenen límit d'oferta, permetent als governs expandir la massa monetària a voluntat — fet que provoca",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflació.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Les adreces de Bitcoin no estan lligades a la teva identitat real. Les CBDC estan directament connectades als documents d'identitat governamentals, permetent una vigilància financera i censura generalitzades.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Les regles de Bitcoin les verifiquen milers de nodes independents. Les CBDC les mantenen els governs i els bancs centrals, que tenen un control total sobre la xarxa.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Qualsevol pot executar un node de Bitcoin per verificar les regles de la xarxa. Les CBDC no permeten als usuaris executar nodes — has de confiar en l'autoritat central.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"El Bitcoin autocustodiat no pot ser congelat per ningú. Les CBDC estan dissenyades perquè els governs i els bancs centrals puguin congelar comptes a l'instant.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"L'autocustòdia de Bitcoin amb una",
	"bitcoin-vs-cbdc::point_8_summary_2": "cartera",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" et dóna el control total sobre els teus diners. Les CBDC requereixen confiar en custodis com bancs o governs perquè mantinguin els teus diners per tu.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"La política monetària de Bitcoin és fixa en codi i no es pot canviar. Les CBDC es poden reprogramar a voluntat pels polítics, provocant",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflació",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" quan s'imprimeixen massa diners.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin és la xarxa informàtica més segura mai creada i mai ha estat pirateada. Les CBDC depenen de bancs i governs que han estat pirateats innombrables vegades.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i les <span class=\"asset\">criptomonedes</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"El protocol de Bitcoin ha estat pràcticament sense canvis des de 2009, proporcionant regles predictibles. La majoria de projectes de cripto canvien constantment els seus protocols o economia de tokens o es bifurquen en noves versions.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin funciona en milers de nodes independents a tot el món. La majoria de projectes de cripto estan controlats per fundacions, empreses o equips de desenvolupament petits que poden fer canvis unilaterals.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin té un límit estricte de 21 milions de monedes — el bé digital més escàs. La majoria de projectes de cripto tenen oferta il·limitada o mecanismes per encunyar nous tokens a voluntat, diluint la part dels tenedors.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin té un propòsit: diner digital peer-to-peer. Qualsevol pot entendre'l i utilitzar-lo. La majoria de cripto implica contractes intel·ligents complexos o DeFi que requereixen experiència tècnica per utilitzar de forma segura.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"La prova de treball de Bitcoin ha funcionat durant més de 15 anys sense cap atac reeixit a la xarxa principal. La majoria de projectes de cripto utilitzen consens experimental no provat en combat.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin és diner digital — una reserva de valor i un mitjà d'intercanvi. La majoria de tokens de cripto són especulatius o tokens de governança amb valor real poc clar.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin es reforça amb els atacs i ha sobreviscut a cada crisi, prohibició i crítica. La majoria de projectes de cripto es col·lapsen sota la pressió regulatòria, tècnica o del mercat.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin no té CEO, empresa ni punt únic de fallada. La majoria de projectes de cripto depenen de capitalistes de risc, lideratges específics o la supervivència d'una sola empresa.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i les <span class=\"asset\">belles arts</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Cada Bitcoin és idèntic i intercanviable. Cada obra d'art és única — creacions, històries, condicions i procedències diferents fan que les comparacions directes siguin difícils.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin cotitza 24/7 en un mercat global accessible a qualsevol. L'art requereix cases de subhastes especialitzades, marxants privats o galeries i pot trigar mesos a vendre's.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Comprar o vendre Bitcoin costa menys de l'1%, sovint molt menys. Les vendes d'art acumulen un 30-40% en primes del comprador, comissions, assegurances, enviaments i comissions d'autenticació.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin es divideix en 100 milions de satoshis, fent-lo perfecte per a transaccions de qualsevol mida. No pots posseir una part d'una pintura o una cantonada d'una escultura.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"La propietat i l'autenticitat de Bitcoin es poden verificar criptogràficament per qualsevol a la blockchain. L'autenticació d'art és cara, lenta i encara regularment enganyada per falsificadors — destruint el valor d'una peça d'art de la nit al dia.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"El Bitcoin emmagatzemat correctament sobreviu a inundacions, incendis, terratrèmols i robatoris. L'art és vulnerable a tots els tipus de destrucció física, i l'assegurança rarament ho cobreix tot.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Qualsevol persona amb connexió a Internet i una mica de diners pot comprar Bitcoin. La inversió en art està pràcticament limitada als col·leccionistes rics amb accés a subhastes i coneixement especialitzat.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i l'<span class=\"asset\">or</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin es pot enviar instantàniament a través d'Internet amb comissions baixes. L'or s'ha d'enviar físicament per transferir la propietat.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin és un actiu digital nadiu que pots transferir per Internet. La majoria d'or en línia és un rebut digital — només tens la promesa d'un custodi, no el metall en si.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin té un límit estricte de 21 milions de BTC. L'oferta d'or creix aproximadament un 1,6% anual, reduint la teva part — menys que la",
	"bitcoin-vs-gold::point_3_summary_2": "inflació",
	"bitcoin-vs-gold::point_3_summary_3":
		" dels diners en paper — però encara inflació.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Quan el preu de l'or puja, es mina més or, tornant a fer baixar el preu. L'oferta de Bitcoin és inelàstica — per molt alt que arribi el preu, sempre hi haurà només 21 milions.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Milers de nodes independents verifiquen la xarxa Bitcoin. La majoria d'or físic es guarda en cambres cuirassades d'alguns grans custodis.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Qualsevol pot verificar Bitcoin real executant un node complet — és només programari. L'or físic requereix fondre'l per verificar-lo; podria contenir tungstè a dins.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin es divideix en 100 milions de satoshis, fent-lo perfecte per a compres de qualsevol mida. L'or no es pot dividir fàcilment en transaccions més petites.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i els <span class=\"asset\">béns immobles</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin es mou a qualsevol lloc del món instantàniament. Els béns immobles estan ancorats a una ubicació i són vulnerables als riscos econòmics, polítics i naturals locals.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin es divideix en 100 milions de satoshis. Els béns immobles no es poden vendre parcialment — no pots simplement excloure la cuina o comprar la meitat d'un dormitori.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin funciona en una xarxa descentralitzada que cap govern pot controlar. Els béns immobles estan fortament regulats — zonificació, control de lloguers, poders de desnonament i confiscacions s'apliquen tots.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin no requereix manteniment. Els béns immobles necessiten reparacions, renovacions, assegurances, gestió de la propietat i problemes amb inquilins.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin no té impostos continus — només pagues plusvàlues quan vens. Els béns immobles paguen impostos de propietat anuals independentment dels ingressos.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"El Bitcoin emmagatzemat correctament sobreviu a incendis, inundacions, terratrèmols. Els béns immobles són vulnerables a qualsevol desastre, i l'assegurança rarament ho cobreix tot.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Cada Bitcoin és idèntic i intercanviable. Cada propietat és única, fent que la valoració i la comparació siguin difícils.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin cotitza 24/7 globalment per qualsevol amb connexió a Internet. Les vendes de béns immobles estan limitades a compradors locals i poden trigar mesos de paperassa a completar-se.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin permet la propietat personal directa per a tothom. Comprar béns immobles com a inversió, fora de la teva residència principal, augmenta els preus dels habitatges, redueix l'assequibilitat i fomenta la crisi de l'habitatge.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i les <span class=\"asset\">accions</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin és un actiu directe que tu posseeixes completament. Les accions són participacions en una empresa — el seu valor depèn de la gestió, el rendiment i les decisions que no controles.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin té un límit estricte de 21 milions de BTC. Les empreses poden emetre noves accions en qualsevol moment, diluint els accionistes existents — just com la",
	"bitcoin-vs-stocks::point_2_summary_2": "inflació",
	"bitcoin-vs-stocks::point_2_summary_3":
		" dilueix el valor del diner en paper. Amb Bitcoin, la teva part mai disminueix.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin no té CEO ni punt únic de fallada. Les accions depenen fortament de la gestió — les males decisions o la marxa d'una persona poden ensorrar el preu.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"El preu de Bitcoin prové d'un mercat global obert. Les valoracions d'accions es basen en mètriques com les ràtios preu-benefici que poden emmascarar accions sobrevalorades.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin cotitza globalment 24/7. Les borses de valors només obren en horari comercial els dies laborables.",
	"bitcoin-vs-stocks::point_6_summary_1": "Pots autocustodiar Bitcoin amb",
	"bitcoin-vs-stocks::point_6_summary_2": "programari senzill",
	"bitcoin-vs-stocks::point_6_summary_3":
		" — sense necessitat de cap corredor. Les accions resideixen a les empreses de corretatge, exposant-te al risc de contrapart si fallen.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"L'oferta fixa de Bitcoin el converteix en una cobertura fiable contra la inflació. Algunes accions superen la inflació, altres no — no hi ha garanties.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Quina és la diferència entre <span class=\"orange\">Bitcoin</span> i <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin és una xarxa oberta a la qual qualsevol pot connectar-se i utilitzar sense permís. Visa és un sistema tancat operat per institucions financeres que poden negar l'accés — especialment a persones no bancaritzades i pobres.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Les transaccions de Bitcoin no tenen comissions per al comerciant. Visa normalment cobra als comerciants al voltant del 3% per transacció — el teu negoci pot estalviar diners acceptant",
	"bitcoin-vs-visa::point_2_summary_2": "pagaments en Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Cada transacció de Bitcoin es troba en una blockchain oberta i auditable. Visa manté un sistema tancat i privat on els clients no poden verificar res de forma independent.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin no pot ser congelat per cap autoritat central. Visa pot congelar comptes, bloquejar transaccions o denegar el servei en qualsevol moment.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin és la liquidació final — només pots gastar el que tens. Les targetes de crèdit sovint creen deute a tipus d'interès superiors al 25% anual.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin et dóna el poder de",
	"bitcoin-vs-visa::point_6_summary_2": "autocustodiar-te",
	"bitcoin-vs-visa::point_6_summary_3":
		" — sense necessitat de bancs ni processadors de pagaments. Les targetes de crèdit sempre requereixen intermediaris.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funciona 24/7 globalment sense horari comercial. Visa té hores operatives, pauses de manteniment i restriccions geogràfiques que poden bloquejar transaccions.",
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
		`translate-rest-part1 (ca): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
