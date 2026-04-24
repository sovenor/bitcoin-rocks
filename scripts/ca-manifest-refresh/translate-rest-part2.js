#!/usr/bin/env node
/**
 * Catalan manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "Preu de Bitcoin",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Troba el preu actual o històric de Bitcoin en dòlars",
	"business/accounting::accounting_card_pacioli_label": "Comptable de Bitcoin",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "Importa a Excel",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Extreu automàticament els preus de Bitcoin a Excel",
	"business/accounting::accounting_card_wallets_label": "Carteres híbrides",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Mira les carteres recomanades per a empreses",
	"business/accounting::accounting_description":
		"Una guia en llenguatge planer per afegir Bitcoin a la comptabilitat del teu negoci — carteres híbrides, base de cost, plusvàlues i quan parlar amb un comptable.",
	"business/accounting::accounting_disclaimer":
		"Aquesta guia és només amb finalitats informatives i no és assessorament fiscal. Consulta un comptable qualificat per a assessorament fiscal específic per a la teva situació.",
	"business/accounting::accounting_disclaimer_label": "Nota",
	"business/accounting::accounting_example_feb_1": "1 de febrer",
	"business/accounting::accounting_example_gain_badge": "Plusvàlua",
	"business/accounting::accounting_example_gain_explain":
		"Registres una plusvàlua de 10 dòlars.",
	"business/accounting::accounting_example_gain_result": "+10 dòlars",
	"business/accounting::accounting_example_jan_1": "1 de gener",
	"business/accounting::accounting_example_loss_badge": "Minusvàlua",
	"business/accounting::accounting_example_loss_explain":
		"Registres una minusvàlua de 10 dòlars.",
	"business/accounting::accounting_example_loss_result": "−10 dòlars",
	"business/accounting::accounting_example_received_label": "Rebut",
	"business/accounting::accounting_example_sold_label": "Venut o gastat",
	"business/accounting::accounting_hero_subtitle":
		"Acceptar Bitcoin al teu negoci no ha de complicar la teva comptabilitat. La versió curta — a més d'eines i experts que ho fan fàcil.",
	"business/accounting::accounting_intro_c1":
		"Si ja acceptes efectiu o targetes, afegir Bitcoin a la comptabilitat del teu negoci és més fàcil del que sembla. Tens dues opcions: convertir automàticament cada pagament de Bitcoin a dòlars en el moment de rebre'l (no cal comptabilitat nova), o mantenir-ne una part en Bitcoin (uns quants números addicionals per fer-ne el seguiment).",
	"business/accounting::accounting_intro_c2":
		"Aquesta guia et porta per tots dos camins — perquè puguis triar quin funciona millor per al teu negoci i començar a acceptar Bitcoin amb confiança.",
	"business/accounting::accounting_s1": "La manera fàcil: converteix automàticament a dòlars",
	"business/accounting::accounting_s1_c1":
		"La manera més senzilla d'acceptar Bitcoin és utilitzar una cartera híbrida que ven automàticament el 100% dels pagaments rebuts en Bitcoin per dòlars (o la teva moneda local) en el moment en què arriben.",
	"business/accounting::accounting_s1_c2":
		"Amb aquesta configuració, la teva comptabilitat es veu exactament igual que avui — un total final en dòlars per cada venda. Ni base de cost, ni plusvàlues, ni cap full de càlcul nou.",
	"business/accounting::accounting_s2":
		"Si mantens Bitcoin: segueix la base de cost",
	"business/accounting::accounting_s2_c1":
		"Alguns negocis trien mantenir una part del Bitcoin rebut en lloc de convertir-lo totalment automàticament. Si és el teu cas, el pas addicional principal és seguir la base de cost — el valor en dòlars de cada pagament en Bitcoin el dia que es va rebre.",
	"business/accounting::accounting_s2_c2":
		"Fins i tot si penses en el teu negoci íntegrament en Bitcoin, la majoria d'autoritats fiscals encara volen informes en dòlars. La bona notícia: només són dos números per transacció — la quantitat de Bitcoin rebuts i el seu valor en dòlars d'aquell dia.",
	"business/accounting::accounting_s2_c3":
		"Per evitar consultes de preus diàries, automatitza la cerca utilitzant les eines següents.",
	"business/accounting::accounting_s3":
		"Gastar o vendre el Bitcoin que mantens",
	"business/accounting::accounting_s3_c1":
		"Si converteixes automàticament cada pagament a dòlars, salta aquesta secció — no s'aplica al teu cas.",
	"business/accounting::accounting_s3_c2":
		"Si mantens una mica de Bitcoin i més tard decideixes gastar-lo o vendre'l, afegeix el preu de venda a la mateixa taula de base de cost. La diferència entre el valor del Bitcoin quan el vas rebre i el seu valor quan el gastes o el vens és una plusvàlua o una minusvàlua.",
	"business/accounting::accounting_s3_c3": "Dos exemples ràpids:",
	"business/accounting::accounting_s3_c6":
		"Això és tot. Les matemàtiques bàsiques són les mateixes que en la comptabilitat de qualsevol altre actiu que pugi o baixi de valor.",
	"business/accounting::accounting_s4":
		"Necessites un professional familiaritzat amb Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Si prefereixes delegar aquesta feina — o la teva comptabilitat de Bitcoin està més involucrada del que una cartera híbrida pot resoldre — recomanem amb convicció Satoshi Pacioli Accounting Services, una empresa especialitzada en comptabilitat de Bitcoin per a negocis.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Comptabilitat de Bitcoin per al teu negoci",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — preus actuals i històrics de Bitcoin en dòlars",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — comptabilitat de Bitcoin per a negocis",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — importar preus de cripto a Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Respostes breus a les preguntes més habituals que fan els negocis abans de començar a acceptar Bitcoin — comissions, liquidació, carteres, devolucions, costos i molt més.",
	"business/faq::faq_intro_c1":
		"Clica cada pregunta a continuació per expandir la resposta. Quan estiguis llest per començar a acceptar Bitcoin, els recursos per a empreses al final de la pàgina et guiaran per cada pas.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Comptabilitat",
	"business/index::biz_label_faq": "PMF",
	"business/index::biz_label_maps": "Mapa de comerciants",
	"business/index::biz_label_rewards": "Recompenses",
	"business/index::biz_label_stickers": "Adhesius",
	"business/index::biz_label_wallets": "Carteres",
	"business/index::biz_meta_description":
		"Accepta Bitcoin al teu negoci per obtenir comissions més baixes, liquidació instantània, zero devolucions i més clients.",
	"business/index::business_hero_subtitle":
		"Accepta pagaments amb comissions més baixes, rep els teus diners a l'instant i arriba a milions de nous clients — sense contractes ni costos amagats.",
	"business/index::business_intro_c1":
		"Bitcoin dóna al teu negoci una manera de cobrar més ràpid, més barat i més personal. Sense intermediaris. Sense devolucions. Sense contractes. Només diners que es liquiden directament dels teus clients a tu en qüestió de segons.",
	"business/index::business_intro_c2":
		"A continuació hi ha la versió curta de per què Bitcoin és bo per als negocis — i a sota, tots els recursos que necessites per començar a acceptar-lo avui.",
	"business/index::business_resources_heading":
		"Tot el que necessites per acceptar Bitcoin",
	"business/index::business_resources_intro":
		"Treballa a través d'aquests recursos al teu propi ritme. Cadascun és una guia breu i pràctica.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Explica'ns sobre el teu negoci",
	"business/maps::biz_maps_form_intro":
		"Només uns quants detalls per llistar-te. La informació de l'adreça es guarda només durant el temps necessari per enviar el teu negoci al mapa.",
	"business/maps::biz_maps_hero_subtitle":
		"Llista el teu negoci gratuïtament a BTC Map — el catàleg obert global de comerciants que accepten Bitcoin — perquè els usuaris de Bitcoin propers puguin trobar-te i gastar Bitcoin al teu negoci.",
	"business/maps::biz_maps_hero_title":
		"Afegeix el teu negoci al mapa de comerciants de Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Els usuaris de Bitcoin busquen activament llocs on gastar els seus diners. Posar el teu negoci al mapa el situa davant de cada usuari de Bitcoin que busqui un lloc on menjar, comprar o allotjar-se a prop — sense cap cost per a tu.",
	"business/maps::biz_maps_intro_c2":
		"Omple el formulari breu a continuació i enviarem el teu negoci a BTC Map i a altres mapes de comerciants de Bitcoin en nom teu.",
	"business/maps::biz_maps_meta_description":
		"Llista el teu negoci gratuïtament a BTC Map i a altres mapes de comerciants de Bitcoin, perquè els usuaris de Bitcoin propers puguin trobar-te.",
	"business/maps::biz_maps_placeholder_address": "Adreça",
	"business/maps::biz_maps_placeholder_category":
		"Categoria (p. ex. restaurant, cafeteria, hotel)",
	"business/maps::biz_maps_placeholder_city": "Ciutat",
	"business/maps::biz_maps_placeholder_country": "País",
	"business/maps::biz_maps_placeholder_name": "Nom del negoci",
	"business/maps::biz_maps_placeholder_region": "Estat / província / regió",
	"business/maps::biz_maps_placeholder_website": "Lloc web (opcional)",
	"business/maps::biz_maps_view_map_cta": "Veure BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Veure BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Gràcies per enviar el teu negoci. Aviat t'afegirem als mapes de comerciants de Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Sol·licitud rebuda 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"El teu negoci estarà llistat a BTC Map i a altres directoris de comerciants de Bitcoin en 1-2 setmanes. Cada sol·licitud es revisa manualment per mantenir els mapes precisos.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Una vegada el teu llistat estigui en línia, els usuaris de Bitcoin propers podran trobar el teu negoci i venir a gastar Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header": "Què ve a continuació",
	"business/maps-success::biz_maps_success_view_c1":
		"Mentre esperes, fes una ullada a BTC Map i veu la xarxa creixent de negocis que accepten Bitcoin a tot el món.",
	"business/maps-success::biz_maps_success_view_header": "Mira on apareixeràs",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Imprimeix els teus propis adhesius \"Acceptem Bitcoin\" en anglès per fer saber als teus clients que acceptes Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Descarrega els fitxers dels adhesius \"Acceptem Bitcoin\" en anglès",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Descarrega els fitxers dels adhesius en anglès per imprimir els teus propis adhesius \"Acceptem Bitcoin\".",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Gràcies per sol·licitar els fitxers dels adhesius \"Acceptem Bitcoin\" en la teva llengua.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Sol·licitud rebuda 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Crearem i publicarem els teus fitxers d'adhesius en 3-4 setmanes. Quan estiguin llestos, podràs descarregar-los i imprimir-los gratuïtament des de la pàgina de fitxers d'adhesius.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Els fitxers d'adhesius es publiquen per lots, de manera que pot trigar unes setmanes abans que la teva llengua estigui activa. Gràcies per la teva paciència!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Què ve a continuació",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Comprar a l'engròs",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Sol·licita un altre paquet gratuït",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Rebràs els teus adhesius gratuïts \"Acceptem Bitcoin\" en 2-4 setmanes, en un sobre blanc senzill amb 3 adhesius dins.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Els teus adhesius estan en camí 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Si 3 adhesius no són prou per al teu negoci, no dubtis a sol·licitar un altre paquet gratuït — o a fer una comanda a l'engròs de la mateixa impremta que fem servir nosaltres.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Necessites més adhesius?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"A la porta d'entrada o a la finestra, perquè els clients ho vegin abans d'entrar",
	"business/sticker-success::biz_sticker_success_tip_2":
		"A prop del punt de caixa, de venda o de pagament",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Als menús, llistes de preus o pots de propines",
	"business/sticker-success::biz_sticker_success_tip_4":
		"No els enganxis en llocs que no siguin teus o on no tinguis permís per fixar coses",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Bons llocs on enganxar els teus adhesius",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Fes saber als teus clients que acceptes Bitcoin. Demana un paquet gratuït d'adhesius \"Acceptem Bitcoin\" per enganxar al teu negoci.",
	"business/stickers::biz_stickers_hero_title":
		"Adhesius gratuïts \"Acceptem Bitcoin\"",
	"business/stickers::biz_stickers_intro_c1":
		"Acceptar Bitcoin només és la meitat de la feina — els teus clients també necessiten saber que l'acceptes. Aquests petits adhesius \"Acceptem Bitcoin\" estan dissenyats per enganxar a la teva porta d'entrada, caixa, menú o a qualsevol lloc on els clients mirin abans de pagar.",
	"business/stickers::biz_stickers_intro_c2":
		"T'enviarem un paquet gratuït a qualsevol lloc dels EUA o el Canadà, o pots imprimir el teu propi a qualsevol lloc del món.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canadà — enviament gratuït",
	"business/stickers::biz_stickers_option_print":
		"🌍 Tot el món — ho imprimiré jo mateix",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 Estats Units — enviament gratuït",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Traducció de \"Acceptem Bitcoin\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Traducció de \"Escaneja per saber per què Bitcoin és bo per als negocis\"",
	"business/stickers::biz_stickers_print_c1":
		"On sigui que visquis, pots imprimir els teus propis adhesius \"Acceptem Bitcoin\". Clica a la teva llengua a continuació per descarregar els fitxers d'adhesius i les instruccions d'impressió.",
	"business/stickers::biz_stickers_print_header":
		"Imprimeix els teus propis fitxers d'adhesius",
	"business/stickers::biz_stickers_request_c1":
		"Omple el formulari a continuació per sol·licitar els fitxers d'adhesius \"Acceptem Bitcoin\" en la teva llengua local. T'avisarem quan estiguin llestos.",
	"business/stickers::biz_stickers_request_header":
		"No veus la teva llengua?",
	"business/stickers::biz_stickers_step_description":
		"T'enviarem un paquet gratuït als EUA i al Canadà. Pots imprimir el teu propi a qualsevol lloc del món.",
	"business/stickers::biz_stickers_step_header":
		"Com vols rebre els teus adhesius?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"Totes les carteres de Bitcoin interoperen — tria una que s'ajusti al teu negoci. Gratuït, liquidació instantània, zero devolucions.",
	"business/wallets::sources_breez_business":
		"Breez — cartera Lightning només-Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — infraestructura de pagaments Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — processador de pagaments de Bitcoin",
	"business/wallets::sources_square":
		"Square — accepta pagaments de Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — facturació en Bitcoin per a empreses",
	"business/wallets::wallets_hero_subtitle":
		"Les carteres de Bitcoin són gratuïtes. Tria una que s'ajusti al teu negoci — en persona, en línia o basada en factures — i comença a acceptar Bitcoin en qüestió de minuts.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "Carteres de negoci basades en factures",
	"business/wallets::wallets_section_invoice_intro":
		"Si envies factures als clients (consultoria, autònoms, serveis B2B), utilitza una cartera basada en factures. El teu client paga una factura de Bitcoin amb uns quants clics.",
	"business/wallets::wallets_section_multiple":
		"Carteres de negoci amb múltiples empleats",
	"business/wallets::wallets_section_multiple_intro":
		"Si tens un equip que accepta pagaments a la caixa, tria una cartera que suporti l'inici de sessió de múltiples empleats — cada treballador té el seu propi PIN, i mantens un registre d'auditoria clar de qui ha acceptat quins pagaments.",
	"business/wallets::wallets_section_online": "Carteres de negoci en línia",
	"business/wallets::wallets_section_online_intro":
		"Véns en un lloc web? Aquestes carteres es connecten a la teva botiga en línia i accepten Bitcoin de qualsevol client, des de qualsevol lloc del món — sense devolucions ni necessitat d'un compte de comerciant.",
	"business/wallets::wallets_section_sole":
		"Carteres de negoci individual",
	"business/wallets::wallets_section_sole_intro":
		"Si gestiones una botiga, cafeteria, estudi o servei tu sol, qualsevol d'aquestes carteres funcionarà. Tria segons si vols mantenir els pagaments com a Bitcoin o convertir automàticament una part de cada pagament a la teva moneda local.",
	"business/wallets::wallets_strike_note":
		"Strike Business et permet acceptar pagaments de Bitcoin i Lightning sense comissions i liquidar-los a l'instant. Suporta pagaments en persona, en línia i basats en factures, amb conversió automàtica opcional a la teva moneda local.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Acceptem Bitcoin",
	"business/why::why_biz_s1": "Comissions més baixes, més per al negoci",
	"business/why::why_biz_s1_c1":
		"Els pagaments en Bitcoin eludeixen els bancs i les companyies de targetes de crèdit que cobren un 2-3% de cada venda. El negoci es queda amb més del que pagues — fet que sol significar millors preus i servei per a tu.",
	"business/why::why_biz_s2": "Liquidació instantània, zero devolucions",
	"business/why::why_biz_s2_c1":
		"Els pagaments en Bitcoin es liquiden directament de la teva cartera al negoci en qüestió de segons. No cal esperar dies perquè el banc alliberi els fons, i no hi ha disputes de devolució costoses — de manera que els negocis es poden centrar a servir els clients en lloc de lluitar contra el frau.",
	"business/why::why_biz_s3": "Gratuït d'acceptar, obert a tothom",
	"business/why::why_biz_s3_c1":
		"Zero contractes, comissions mensuals o costos de configuració per als negocis que accepten Bitcoin. I hi ha milions d'usuaris de Bitcoin a tot el món que busquen activament comerciants que accepten — fet que dóna al negoci exposició gratuïta a nous clients.",
	"business/why::why_business_cta_intro":
		"Gestiones un negoci i vols començar a acceptar Bitcoin?",
	"business/why::why_business_cta_link": "Mira com funciona →",
	"business/why::why_for_business": "Per què Bitcoin és genial per a aquest negoci",
	"business/why::why_for_business_intro":
		"Acceptar Bitcoin permet als negocis quedar-se amb més de cada venda, cobrar a l'instant sense devolucions i arribar a una audiència global d'usuaris de Bitcoin — tot sense contractes ni comissions mensuals.",
	"business/why::why_good_for_you": "Per què Bitcoin també és genial per a tu",
	"business/why::why_good_for_you_intro":
		"Bitcoin no només és genial a la caixa — és una forma millor de diners que protegeix els teus estalvis, la teva privacitat i la teva llibertat operativa. Aquí tens una visió general ràpida.",
	"business/why::why_hero_subtitle":
		"Acabes d'escanejar un adhesiu \"Acceptem Bitcoin\". Aquí tens per què és una gran notícia — per a aquest negoci i per a tu.",
	"business/why::why_intro_c1":
		"El negoci on ets accepta Bitcoin — una xarxa de pagaments moderna i de codi obert que qualsevol al món pot utilitzar, sense que bancs o intermediaris s'emportin comissions.",
	"business/why::why_intro_c2":
		"A continuació hi ha la versió curta de per què acceptar Bitcoin és bo per a aquest negoci — a més de per què utilitzar Bitcoin com a client és bo per a tu.",
	"business/why::why_learn_more_lowercase": "més informació →",
	"business/why::why_next_business_label": "Accepta Bitcoin",
	"business/why::why_next_business_title": "Accepta Bitcoin al teu negoci",
	"business/why::why_next_buy_label": "Compra Bitcoin",
	"business/why::why_next_buy_title": "Compra el teu primer Bitcoin",
	"business/why::why_next_learn_label": "Més informació",
	"business/why::why_next_learn_title": "Més informació sobre Bitcoin",
	"business/why::why_next_wallet_label": "Obtén una cartera",
	"business/why::why_next_wallet_title": "Obtén la teva pròpia cartera de Bitcoin",
	"business/why::why_s1_c1":
		"La inflació passa quan s'imprimeixen o creen més diners del no-res. Fa que els diners de la teva butxaca valguin menys amb el temps — per això els preus pugen any rere any.",
	"business/why::why_s1_c2":
		"Bitcoin té una oferta fixa de 21 milions de monedes. Cap govern, banc o empresa pot imprimir-ne més. Els teus estalvis en Bitcoin mantenen el seu valor amb el temps, en lloc de perdre'l.",
	"business/why::why_s2_c1":
		"En els darrers anys, diversos bancs dels EUA han fallat per retirades bancàries massives. Quan massa clients intentaven retirar diners alhora, els bancs no tenien prou efectiu per pagar a tothom.",
	"business/why::why_s2_c2":
		"En lloc de mantenir els teus diners de forma segura, els bancs en presten i inverteixen la major part. Si aquestes inversions van malament — o els dipositaris perden la confiança — el banc pot fallar i els teus dipòsits es poden congelar o perdre.",
	"business/why::why_s2_c3":
		"Amb Bitcoin, pots guardar els teus propis diners directament a la teva pròpia cartera. Sense bancs. Sense intermediaris. Sense retirades massives.",
	"business/why::why_s3_c1":
		"A diferència de les targetes de crèdit, PayPal o els comptes bancaris tradicionals, Bitcoin no requereix permís de ningú per utilitzar-lo.",
	"business/why::why_s3_c2":
		"Ningú no pot congelar el teu compte, bloquejar un pagament o tallar-te l'accés a la xarxa. És el primer sistema financer de la història que pots utilitzar lliurement sense por a la censura o confiscació.",
	"business/why::why_s4_c1":
		"Bitcoin sovint s'entén malament, però silenciosament fa molt bé al món.",
	"business/why::why_s4_c2":
		"Ha ajudat activistes dels drets humans en la seva lluita per la llibertat, ha reduït les emissions globals de metà d'abocadors i camps petroliers, ha estabilitzat xarxes elèctriques i ha finançat béns públics com els parcs nacionals.",
	"business/why::why_whats_next_heading": "Cap on ara?",
	"business/why::why_whats_next_intro":
		"Si aquest és el teu primer escaneig d'adhesiu de Bitcoin, aquí tens els llocs més útils per continuar.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Com comprar Bitcoin",
	"buy::buy_header_subtitle":
		"Una guia senzilla, pas a pas, per comprar el teu primer Bitcoin.",
	"buy::buy_howto_name": "Com comprar Bitcoin",
	"buy::buy_meta_description":
		"Aprèn a comprar Bitcoin de forma segura amb la nostra guia pas a pas. Tria el teu país i mètode de pagament per trobar les millors opcions per comprar Bitcoin per a tu.",
	"buy::buy_step_1_eyebrow": "Pas 1",
	"buy::buy_step_1_header": "Tria el teu país",
	"buy::buy_step_2_eyebrow": "Pas 2",
	"buy::buy_step_2_header": "Tria un mètode de pagament",
	"buy::buy_step_3_eyebrow": "Pas 3",
	"buy::buy_step_3_header": "Les teves opcions de compra",
	"buy::buy_step_4_eyebrow": "Pas 4",
	"buy::buy_step_4_header": "Guarda Bitcoin de forma segura",
	"buy::buy_storage_cta_label": "Següent pas",
	"buy::sources_bisq":
		"Bisq — exchange descentralitzat peer-to-peer de Bitcoin",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — directori global de caixers de Bitcoin",
	"buy::sources_kraken": "Kraken — exchange de Bitcoin establert",
	"buy::sources_relai":
		"Relai — aplicació suïssa només-Bitcoin d'autocustòdia",
	"buy::sources_river":
		"River — compra, mineria i estalvi només-Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — compra Bitcoin amb suport de Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — mitjana de cost en dòlars només-Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Afegeix una llengua",
	"common::common_next_buy_bitcoin": "Compra Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Aprèn a comprar Bitcoin de forma segura",
	"common::common_next_calculate": "Calcula la teva inflació",
	"common::common_next_calculate_desc":
		"Mira com la inflació afecta el teu sou amb el temps",
	"common::common_next_get_wallet": "Obtén una cartera",
	"common::common_next_get_wallet_desc":
		"Obtén la teva primera cartera de Bitcoin — és gratis",
	"common::common_next_keep_learning": "Continua aprenent",
	"common::common_next_keep_learning_desc":
		"Veu com Bitcoin està millorant el món",
	"common::common_site_tagline": "Educació sobre Bitcoin per a tothom.",
	"common::common_source_bls_cpi":
		"Oficina d'Estadístiques Laborals dels EUA — Índex de Preus al Consum (IPC)",
	"common::common_source_btc_map":
		"BTC Map — directori global de comerciants que accepten Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — processador de pagaments de Bitcoin gratuït, de codi obert i autoallotjat",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — oferta monetària (índex categoritzat)",
	"common::common_source_oshi":
		"Oshi — plataforma de recompenses de Bitcoin per a comerciants",
	"common::common_source_strike_business":
		"Strike — pagaments de Bitcoin i Lightning per a empreses",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "Dades de Bitcoin",
	"common::common_sources_group_cpi":
		"Inflació / Índex de Preus al Consum",
	"common::common_sources_group_debt": "Deute públic",
	"common::common_sources_group_money": "Dades de l'oferta monetària",
	"common::common_sources_group_stories": "Exemples del món real",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_sticker_files_mission_5": "Demana un paquet",
	"common::common_sticker_files_mission_6": "d'adhesius gratuïts en anglès.",
	"common::common_sticker_files_next_flyers_label": "Fulletons",
	"common::common_sticker_files_next_flyers_title": "Imprimeix un fulletó de Bitcoin",
	"common::common_sticker_files_next_languages_label": "Fitxers d'adhesius",
	"common::common_sticker_files_next_languages_title":
		"Mira els fitxers d'adhesius en altres llengües",
	"common::common_sticker_files_print_these":
		"Imprimeix-los amb un clic",
	"common::common_sticker_name_bdhi_black":
		"Adhesiu \"Bitcoin no té inflació\" (negre)",
	"common::common_sticker_name_bdhi_orange":
		"Adhesiu \"Bitcoin no té inflació\" (taronja)",
	"common::common_sticker_name_caution":
		"Adhesiu Bitcoin \"Precaució! Cub de gel que es fon\"",
	"common::common_sticker_name_cure_inflation":
		"Adhesiu Bitcoin \"La cura per a la inflació\"",
	"common::common_sticker_name_danger":
		"Adhesiu Bitcoin \"Perill! Inflació al davant\"",
	"common::common_sticker_name_fix":
		"Adhesiu Bitcoin \"Arregla els diners, arregla el món\"",
	"common::common_sticker_name_got_inflation":
		"Adhesiu Bitcoin \"Tens inflació?\"",
	"common::common_sticker_name_study":
		"Adhesiu \"Estudia Bitcoin\"",
	"common::common_sticker_name_warning":
		"Adhesiu Bitcoin \"Advertència! La inflació està robant els teus estalvis\"",
	"common::common_sticker_name_what_if":
		"Adhesiu Bitcoin \"I si no tinguessis inflació?\"",
	"common::common_sticker_tips_heading": "Consells per als adhesius",
	"common::common_sticker_tips_intro":
		"Després d'imprimir els teus adhesius, enganxa'ls en llocs on la gent els vegi! Bons llocs per als adhesius:",
	"common::common_sticker_tips_list_1":
		"En llocs públics on la gent els vegi",
	"common::common_sticker_tips_list_2":
		"En llocs poc probables de ser retirats ràpidament (els adhesius no fan mal permanent)",
	"common::common_sticker_tips_list_3":
		"En superfícies fàcils d'enganxar (metall, plàstic, vidre)",
	"common::common_sticker_tips_list_4":
		"No en propietat privada i sense tapar senyals, caixers o assortidors de gasolina",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "Nosaltres fem servir",
	"common::common_stickers_printer_suffix":
		", però pots utilitzar qualsevol empresa d'adhesius.",
	"common::common_whats_next": "Què ve a continuació?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"Calcula la teva bretxa d'inflació",
	"compound-inflation-calculator::cic_cta_label": "Següent pas",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Mira quant ha d'augmentar el teu sou per mantenir-se al dia amb la inflació.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Explora més temes",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Mira com Bitcoin es relaciona amb els diners, la llibertat, l'energia i més.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Aprèn com funciona la inflació",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Índex de Preus al Consum per a tots els consumidors urbans",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — oferta monetària M1",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"Fulletons de Bitcoin gratuïts i imprimibles. Posa'ls en llocs públics per ajudar més gent a aprendre sobre Bitcoin.",
	"flyers::flyers_hero_title": "Imprimeix i distribueix fulletons de Bitcoin",
	"flyers::flyers_intro_header":
		"Com imprimir i distribuir aquests fulletons de Bitcoin",
	"flyers::flyers_next_get_stickers": "Difon la paraula",
	"flyers::flyers_next_get_stickers_desc":
		"Demana un paquet d'adhesius de Bitcoin gratuïts",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Participa i ajuda a difondre Bitcoin",
	"get-involved::get_involved_card_business_label": "Kit per a empreses",
	"get-involved::get_involved_card_business_source":
		"Font: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Demana un kit per a empreses de Bitcoin gratuït",
	"get-involved::get_involved_card_flyers_label": "Fulletons impresos",
	"get-involved::get_involved_card_flyers_source":
		"Font: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Descarrega i imprimeix un fulletó de Bitcoin gratuït",
	"get-involved::get_involved_card_github_label": "Codi obert",
	"get-involved::get_involved_card_github_source": "Font: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Contribueix a bitcoin.rocks a GitHub",
	"get-involved::get_involved_card_stickers_label": "Adhesius gratuïts",
	"get-involved::get_involved_card_stickers_source":
		"Font: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Demana un paquet d'adhesius de Bitcoin gratuïts enviats a casa teva",
	"get-involved::get_involved_description":
		"Els nostres recursos gratuïts faciliten difondre Bitcoin. Adhesius, fulletons, kits per a empreses i codi obert al qual qualsevol pot contribuir.",
	"get-involved::get_involved_flyers_content_1":
		"Els fulletons són una de les maneres més senzilles d'introduir Bitcoin a la teva comunitat. Descarrega el fulletó de Bitcoin gratuït i imprimible, imprimeix-ne tantes còpies com vulguis i distribueix-les en taulers comunitaris, cafeteries, reunions o a qualsevol lloc on es reuneixi gent.",
	"get-involved::get_involved_flyers_content_2":
		"Cada fulletó té un titular cridaner i un codi QR que envia els lectors curiosos a bitcoin.rocks per aprendre'n més.",
	"get-involved::get_involved_flyers_content_3":
		"A diferència dels adhesius, els fulletons es poden imprimir a demanda a qualsevol lloc del món — només necessites una impressora i uns minuts.",
	"get-involved::get_involved_flyers_header": "Imprimeix i distribueix un fulletó",
	"get-involved::get_involved_flyers_image_alt":
		"Vista prèvia del fulletó de Bitcoin gratuït i imprimible de bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks és un projecte gratuït i de codi obert amb llicència MIT. La nostra missió és accelerar l'adopció de Bitcoin a través de l'educació — i no ho podem fer sols.",
	"get-involved::get_involved_github_content_2":
		"Siguis desenvolupador, dissenyador, escriptor o traductor, hi ha una manera d'ajudar. Donem la benvinguda especialment als traductors que poden traduir el nostre contingut a més llengües, perquè més gent de tot el món pugui aprendre sobre Bitcoin en la seva llengua materna.",
	"get-involved::get_involved_github_content_3":
		"Fes un fork del repositori, obre una pull request, envia una issue, o simplement dóna una estrella al projecte per mostrar suport. Cada contribució ajuda a fer arribar Bitcoin a més gent.",
	"get-involved::get_involved_github_header": "Contribueix a GitHub",
	"get-involved::get_involved_header":
		"Participa i difon Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Tu pots ajudar a canviar-ho. Hem creat alguns recursos gratuïts per facilitar difondre l'esperança que Bitcoin porta a la gent que t'envolta.",
	"get-involved::get_involved_sticker_image_alt":
		"Un paquet d'adhesius gratuïts amb text de Bitcoin de bitcoin.rocks",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "estalviar",
	"index::home_card_label_art_1": "Comparem",
	"index::home_card_label_art_2": "Difon la paraula",
	"index::home_card_label_art_3": "Art urbà",
	"index::home_card_label_bank_runs": "Sistema de reserva completa",
	"index::home_card_label_bonds": "Comparem",
	"index::home_card_label_business_1": "Quina és la diferència?",
	"index::home_card_label_business_2": "Accepta pagaments en Bitcoin",
	"index::home_card_label_cash": "Comparem",
	"index::home_card_label_cbdc": "Obert o tancat?",
	"index::home_card_label_coding_1": "Tutorials interactius",
	"index::home_card_label_coding_2": "Construeix maquinari",
	"index::home_card_label_coding_3": "Trencaclosques de programació",
	"index::home_card_label_crowdfunding_1": "Protestes EndSARS",
	"index::home_card_label_crowdfunding_2": "Diners imparables",
	"index::home_card_label_crowdfunding_3": "Finança el teu projecte",
	"index::home_card_label_crypto": "Quina és la diferència?",
	"index::home_card_label_energy_1": "Estabilització de la xarxa",
	"index::home_card_label_energy_4": "Resposta a la demanda",
	"index::home_card_label_energy_5": "Electrificació rural",
	"index::home_card_label_energy_6": "Incentius per a energies renovables",
	"index::home_card_label_environment_1": "Reducció del metà",
	"index::home_card_label_environment_2": "Preservant parcs nacionals",
	"index::home_card_label_environment_3": "La indústria més verda",
	"index::home_card_label_environment_4": "Reducció de gas cremat",
	"index::home_card_label_equality_1": "Esperança i oportunitat",
	"index::home_card_label_equality_2": "Punt de partida",
	"index::home_card_label_food_1": "Preus dels aliments",
	"index::home_card_label_food_2": "Granges i sòl",
	"index::home_card_label_freedom_1": "Règims autoritaris",
	"index::home_card_label_freedom_2": "Una eina única",
	"index::home_card_label_get_started_1": "Conceptes bàsics per començar",
	"index::home_card_label_get_started_2": "La teva primera cartera",
	"index::home_card_label_get_started_3": "Compra Bitcoin",
	"index::home_card_label_gold": "Quin és millor?",
	"index::home_card_label_housing_1": "Habitatge assequible",
	"index::home_card_label_human_rights_1": "Aplicació dels drets humans",
	"index::home_card_label_human_rights_2": "Adopció massiva",
	"index::home_card_label_human_rights_3": "Impacte global",
	"index::home_card_label_inflation": "Bitcoin són bons diners",
	"index::home_card_label_networks_1": "Visió general en directe de la xarxa",
	"index::home_card_label_networks_2": "Comparem",
	"index::home_card_label_payments_1": "Quina és la diferència?",
	"index::home_card_label_payments_2": "Pagaments ràpids i barats",
	"index::home_card_label_payments_3": "Remeses",
	"index::home_card_label_payments_4": "Accepta pagaments",
	"index::home_card_label_politics_1": "Paradoxes polítiques",
	"index::home_card_label_politics_2": "Actua",
	"index::home_card_label_property_rights_1": "Comparem",
	"index::home_card_label_property_rights_2": "Propietat real",
	"index::home_card_label_salary": "Protegeix el teu sou",
	"index::home_card_label_self_custody_1": "Guia de carteres de Bitcoin",
	"index::home_card_label_self_custody_2": "El pas més important",
	"index::home_card_label_self_custody_3": "Diners sobirans",
	"index::home_card_label_war_1": "Acabar amb les guerres sense fi",
	"index::home_card_label_war_2": "Suport als veterans",
	"index::home_card_label_war_3": "Fugir de la guerra",
	"index::home_h1":
		"Bitcoin són bons diners que creen un món millor.",
	"index::home_nav_about": "Sobre nosaltres",
	"index::home_nav_get_involved": "Participa",
	"index::home_nav_learn": "Aprèn",
	"index::home_source_prefix": "Font:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "Carteres populars de Lightning",
	"lightning::lightning_hardware_cta_label": "Carteres de maquinari",
	"lightning::lightning_header_subtitle":
		"Lightning et permet enviar Bitcoin en qüestió de segons amb comissions de cèntims — tria una cartera amb les compensacions adequades per a la quantitat de Bitcoin que planeges gastar.",
	"lightning::lightning_s1_c4": "Mira la nostra guia",
	"lightning::lightning_s1_c4_end": " per saber-ne més.",
	"lightning::lightning_s1_c4_link": "Guia de carteres de maquinari de Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — cartera Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — cartera Lightning d'autocustòdia",
	"lightning::sources_lightning_labs":
		"Lightning Labs — documentació de Lightning Network",
	"lightning::sources_lightning_paper":
		"Joseph Poon i Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — cartera Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "Moltes funcions i personalització",
	"nostr/index::nostr_amethyst_f2": "Requereix una cartera de Bitcoin separada",
	"nostr/index::nostr_amethyst_f3": "100% gratuït",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"Interfície familiar, semblant a Twitter",
	"nostr/index::nostr_damus_f2": "Requereix una cartera de Bitcoin separada",
	"nostr/index::nostr_damus_f3": "100% gratuït",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"Descarrega un client de Nostr gratuït",
	"nostr/index::nostr_download_intro":
		"Els clients de Nostr són aplicacions gratuïtes que et permeten llegir i publicar contingut a la xarxa Nostr. Tots interoperen — pots canviar de client en qualsevol moment i mantenir els teus seguidors i contingut.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr és un nou protocol descentralitzat per a la comunicació en línia — no gestionat per cap empresa, amb pagaments de Bitcoin (zaps) integrats, i pots canviar entre aplicacions sense perdre els seguidors.",
	"nostr/index::nostr_hero_title": "Què és Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr s'assembla al correu electrònic: ningú no és propietari del protocol, qualsevol pot construir aplicacions a sobre, i tu pots triar la teva aplicació preferida. A diferència de Twitter o Facebook, no hi ha cap empresa central que et pugui censurar, cancel·lar o limitar.",
	"nostr/index::nostr_intro_c2":
		"A continuació hi ha la versió curta de per què Nostr importa — i després tots els clients de Nostr gratuïts que necessites per començar avui.",
	"nostr/index::nostr_iris_f1":
		"Super fàcil — no cal cap configuració",
	"nostr/index::nostr_iris_f2":
		"Una manera senzilla de provar Nostr amb un compte de prova",
	"nostr/index::nostr_iris_f3": "100% gratuït",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "Aprofundeix",
	"nostr/index::nostr_learn_more_title":
		"Més informació sobre Nostr a nostr.how",
	"nostr/index::nostr_page_description":
		"Nostr és un nou protocol descentralitzat per a la comunicació en línia — no gestionat per cap empresa, amb pagaments de Bitcoin (zaps) integrats, i pots canviar entre clients sense perdre els seguidors.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android i web",
	"nostr/index::nostr_platform_web": "Navegador web",
	"nostr/index::nostr_primal_f1": "Client recomanat de primer nivell",
	"nostr/index::nostr_primal_f2":
		"Cartera de zaps de Bitcoin integrada",
	"nostr/index::nostr_primal_f3": "100% gratuït",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "Un protocol, no una plataforma",
	"nostr/index::nostr_s1_c1":
		"Nostr és un nou protocol que et permet comunicar-te en línia — sense por a la censura, la cancel·lació o la limitació.",
	"nostr/index::nostr_s1_c2":
		"Plataformes com Twitter i Facebook estan gestionades per una empresa, però ningú no gestiona el protocol Nostr.",
	"nostr/index::nostr_s2": "Llibertat de moviment",
	"nostr/index::nostr_s2_c1":
		"Nostr s'assembla al correu electrònic. Ningú no gestiona el protocol de correu electrònic, i qualsevol pot construir un client a sobre (com Gmail, Hotmail i molts més).",
	"nostr/index::nostr_s2_c2":
		"Ningú no gestiona el protocol Nostr, i qualsevol pot construir un client a sobre (com Damus, Amethyst i molts més).",
	"nostr/index::nostr_s2_c3":
		"Si no t'agrada com funciona un client en particular, pots moure el teu compte de Nostr a un altre client sense problemes sense perdre seguidors ni contingut.",
	"nostr/index::nostr_s3": "Bitcoin integrat",
	"nostr/index::nostr_s3_c1":
		"Bitcoin està integrat nativament al protocol Nostr. Si veus contingut que t'agrada, pots enviar fàcilment un zap de Bitcoin a algú com a agraïment!",
	"nostr/index::nostr_s3_c2":
		"A les plataformes centralitzades com Twitter i Facebook, l'empresa central es beneficia del teu contingut. Però en un protocol obert com Nostr, tu et beneficies del teu contingut.",
	"nostr/index::sources_damus": "Damus — client de Nostr per a iPhone",
	"nostr/index::sources_iris":
		"Iris — client de Nostr que funciona al navegador",
	"nostr/index::sources_nostr_how":
		"nostr.how — Què és Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Protocol Nostr — especificació de codi obert",
	"nostr/index::sources_primal":
		"Primal — client de Nostr amb cartera de zaps de Bitcoin integrada",
	"nostr/index::what_is_nostr": "Què és Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Imprimeix els teus propis adhesius de Bitcoin utilitzant aquests fitxers d'adhesius de Bitcoin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Sol·licitud rebuda 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Comprar a l'engròs",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Comparteix a Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Què és Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Vols més adhesius?",
	"sticker-success::sticker_success_hero_title":
		"Els teus adhesius estan en camí 🎉",
	"sticker-success::sticker_success_share_header":
		"Comparteix on estan els teus adhesius",
	"sticker-success::sticker_success_tips_header":
		"Bons llocs per als adhesius",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "Tria aquest paquet",
	"stickers::stickers_bulk_c1":
		"Vols més que un grapat d'adhesius?",
	"stickers::stickers_bulk_c2":
		"Fes una comanda a l'engròs de la mateixa impremta que fem servir nosaltres",
	"stickers::stickers_bulk_c3":
		"— com més demanis, més barat serà el preu per adhesiu.",
	"stickers::stickers_bulk_cta": "Comprar adhesius a l'engròs",
	"stickers::stickers_bulk_header": "Demana adhesius a l'engròs",
	"stickers::stickers_flyers_link_before":
		"Mentrestant, imprimeix i distribueix",
	"stickers::stickers_header":
		"Rep aquests adhesius gratuïts \"Acceptem Bitcoin\".",
	"stickers::stickers_hero_subtitle":
		"Demana un paquet d'adhesius de Bitcoin gratuïts i enganxa'ls en llocs públics per ajudar més gent a aprendre sobre Bitcoin.",
	"stickers::stickers_hero_title": "Adhesius gratuïts de Bitcoin",
	"stickers::stickers_instructions_1":
		"Introdueix la teva adreça postal i t'enviarem un paquet d'adhesius de Bitcoin gratuïts. Els teus adhesius s'enviaran en un sobre blanc senzill.",
	"stickers::stickers_intro_c1":
		"La nostra missió és ajudar més gent a \"taronjar\" llocs públics amb adhesius de Bitcoin. Tots els nostres adhesius",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "inflació",
	"stickers::stickers_intro_c4":
		"Tria un paquet d'adhesius a continuació i tria com vols rebre'l — t'enviarem un paquet gratuïtament a qualsevol lloc dels EUA o el Canadà, o pots imprimir el teu propi a qualsevol lloc del món.",
	"stickers::stickers_mail_header": "T'enviarem els teus adhesius gratuïts",
	"stickers::stickers_next_print_flyers": "Continua difonent",
	"stickers::stickers_next_print_flyers_desc":
		"Imprimeix fulletons de Bitcoin gratuïts per distribuir en llocs públics",
	"stickers::stickers_option_bulk": "📦 Tot el món — comanda a l'engròs",
	"stickers::stickers_option_canada": "🇨🇦 Canadà — enviament gratuït",
	"stickers::stickers_option_print": "🌍 Tot el món — ho imprimiré jo mateix",
	"stickers::stickers_option_usa":
		"🇺🇸 Estats Units — enviament gratuït",
	"stickers::stickers_print_c1":
		"On sigui que visquis, pots participar imprimint els teus propis adhesius. Clica a la teva llengua a continuació per descarregar els fitxers d'adhesius i les instruccions d'impressió.",
	"stickers::stickers_print_c2":
		"No tots els adhesius estan disponibles en totes les llengües.",
	"stickers::stickers_print_header":
		"Imprimeix els teus propis fitxers d'adhesius",
	"stickers::stickers_request_c1":
		"Omple el formulari a continuació per sol·licitar fitxers d'adhesius en la teva llengua local. T'avisarem quan estiguin llestos.",
	"stickers::stickers_request_header": "No veus la teva llengua?",
	"stickers::stickers_share_c2":
		"Segueix-nos a Nostr i cerca",
	"stickers::stickers_share_c3":
		"a qualsevol client de Nostr.",
	"stickers::stickers_signs_pack_description":
		"Senyals d'advertència, perill i precaució amb missatges de Bitcoin — dissenyats per captar l'atenció i fer que la gent s'aturi a llegir.",
	"stickers::stickers_step_1_description":
		"Cada paquet conté un conjunt diferent d'adhesius de Bitcoin amb codis QR que eduquen la gent sobre Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "Pas 1",
	"stickers::stickers_step_1_header":
		"Tria el teu paquet d'adhesius",
	"stickers::stickers_step_2_description":
		"T'enviarem un paquet gratuït als EUA i al Canadà. Pots imprimir el teu propi o fer una comanda a l'engròs a qualsevol lloc del món.",
	"stickers::stickers_step_2_eyebrow": "Pas 2",
	"stickers::stickers_step_2_header":
		"Com vols rebre els teus adhesius?",
	"stickers::stickers_text_pack_description":
		"Una barreja d'eslògans i frases de Bitcoin dissenyats per despertar la curiositat en llocs públics.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — tria la teva cartera",
	"wallets::sources_blockstream_green":
		"Blockstream Green — cartera de Bitcoin d'autocustòdia",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — cartera de maquinari de Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — cartera de maquinari Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — cartera de maquinari Coldcard Q",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — revisió de llavors metàl·liques de Bitcoin",
	"wallets::sources_passport":
		"Foundation Devices — cartera de maquinari Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — dispositiu de signatura de Bitcoin de codi obert i DIY",
	"wallets::wallets_grid_heading": "Carteres populars de Bitcoin",
	"wallets::wallets_header_subtitle":
		"Una guia pas a pas per triar una cartera, protegir les teves claus i prendre el control total del teu Bitcoin.",
	"wallets::wallets_lightning_cta_label": "Xarxa Lightning",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

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
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (ca): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing.slice(0, 50)) console.log("  -", k);
		if (missing.length > 50)
			console.log(`  ...and ${missing.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
