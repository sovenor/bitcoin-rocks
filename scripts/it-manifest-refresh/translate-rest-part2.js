#!/usr/bin/env node
/**
 * Italian (it) manifest refresh — non-inflation namespaces, part 2.
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
	"it.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "PREZZO BITCOIN",
	"business/accounting::accounting_card_bpr_source":
		"Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Cerca il prezzo attuale o storico in dollari di Bitcoin",
	"business/accounting::accounting_card_pacioli_label":
		"COMMERCIALISTA BITCOIN",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Servizi Contabili Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORT EXCEL",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Importa automaticamente i prezzi Bitcoin in Excel",
	"business/accounting::accounting_card_wallets_label":
		"WALLET IBRIDI",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Vedi i wallet aziendali che consigliamo",
	"business/accounting::accounting_description":
		"Una guida semplice all'accettazione di Bitcoin nei tuoi libri contabili \u2014 wallet ibridi, costo base, plusvalenze e quando chiamare un commercialista.",
	"business/accounting::accounting_disclaimer":
		"Questa guida \u00E8 solo a scopo informativo e non costituisce consulenza fiscale. Per consigli fiscali specifici per la tua situazione, consulta un commercialista qualificato.",
	"business/accounting::accounting_disclaimer_label":
		"Da tenere presente",
	"business/accounting::accounting_example_feb_1": "1 feb",
	"business/accounting::accounting_example_gain_badge": "Plusvalenza",
	"business/accounting::accounting_example_gain_explain":
		"Registri una plusvalenza di 10 dollari.",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "1 gen",
	"business/accounting::accounting_example_loss_badge": "Minusvalenza",
	"business/accounting::accounting_example_loss_explain":
		"Registri una minusvalenza di 10 dollari.",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "Ricevuto",
	"business/accounting::accounting_example_sold_label":
		"Venduto o speso",
	"business/accounting::accounting_hero_subtitle":
		"Accettare Bitcoin nella tua azienda non deve complicare la contabilit\u00E0. Ecco la versione breve \u2014 pi\u00F9 gli strumenti e i professionisti per renderla indolore.",
	"business/accounting::accounting_intro_c1":
		"Se accetti gi\u00E0 contanti o carte, aggiungere Bitcoin ai tuoi libri contabili \u00E8 pi\u00F9 semplice di quanto sembri. Hai due percorsi: convertire automaticamente ogni pagamento Bitcoin in dollari all'arrivo (nessuna nuova contabilit\u00E0 necessaria), o tenere alcuni come Bitcoin (pochi numeri in pi\u00F9 da tracciare).",
	"business/accounting::accounting_intro_c2":
		"Questa guida ti accompagna in entrambi \u2014 cos\u00EC puoi scegliere quello che si adatta alla tua azienda e iniziare ad accettare Bitcoin con sicurezza.",
	"business/accounting::accounting_s1":
		"Il percorso facile: conversione automatica in dollari",
	"business/accounting::accounting_s1_c1":
		"Il modo pi\u00F9 semplice di accettare Bitcoin \u00E8 con un wallet ibrido che vende automaticamente il 100% del Bitcoin che ricevi in dollari (o nella tua valuta locale) nel momento in cui arriva il pagamento.",
	"business/accounting::accounting_s1_c2":
		"Con questa configurazione, i tuoi libri contabili sembrano esattamente come oggi \u2014 numeri finali in dollari, ogni volta. Nessun costo base, nessuna plusvalenza, nessun nuovo foglio di calcolo.",
	"business/accounting::accounting_s2":
		"Se mantieni alcuni Bitcoin: tracciare il tuo costo base",
	"business/accounting::accounting_s2_c1":
		"Alcune aziende scelgono di mantenere alcuni dei Bitcoin che ricevono invece di convertire automaticamente tutto. Se sei tu, il passo principale in pi\u00F9 \u00E8 tracciare il tuo costo base \u2014 il valore in dollari di ogni pagamento Bitcoin il giorno in cui lo hai ricevuto.",
	"business/accounting::accounting_s2_c2":
		"Anche se consideri la tua azienda interamente in Bitcoin, la maggior parte delle autorit\u00E0 fiscali vuole comunque che i valori in dollari siano riportati. La buona notizia: solo due numeri per transazione \u2014 l'importo Bitcoin ricevuto e il suo valore in dollari quel giorno.",
	"business/accounting::accounting_s2_c3":
		"Usa gli strumenti qui sotto per automatizzare le ricerche, cos\u00EC non devi controllare i prezzi ogni giorno.",
	"business/accounting::accounting_s3":
		"Spendere o vendere Bitcoin che hai conservato",
	"business/accounting::accounting_s3_c1":
		"Se converti automaticamente ogni pagamento in dollari, salta questa sezione \u2014 non si applica a te.",
	"business/accounting::accounting_s3_c2":
		"Se mantieni alcuni Bitcoin e poi decidi di spenderli o venderli, aggiungi il prezzo di vendita allo stesso foglio di calcolo del costo base. La differenza tra quanto valeva il Bitcoin quando lo hai ricevuto e quanto vale quando lo spendi o vendi \u00E8 una plusvalenza o minusvalenza.",
	"business/accounting::accounting_s3_c3": "Due rapidi esempi:",
	"business/accounting::accounting_s3_c6":
		"Tutto qui. La matematica di base \u00E8 identica al modo in cui qualsiasi asset che si apprezza o deprezza viene contabilizzato.",
	"business/accounting::accounting_s4":
		"Hai bisogno di un professionista esperto di Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Se preferisci affidare tutto questo \u2014 o la tua contabilit\u00E0 Bitcoin \u00E8 pi\u00F9 complessa di quanto un wallet ibrido possa gestire \u2014 raccomandiamo vivamente i Servizi Contabili Satoshi Pacioli, uno studio specializzato in contabilit\u00E0 Bitcoin per le aziende.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Contabilit\u00E0 Bitcoin per la tua azienda",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report \u2014 Prezzi attuali e storici di Bitcoin in dollari",
	"business/accounting::sources_satoshi_pacioli":
		"Servizi Contabili Satoshi Pacioli \u2014 Contabilit\u00E0 Bitcoin per aziende",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru \u2014 Importa prezzi delle criptovalute in Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Risposte rapide alle domande che i commercianti pongono pi\u00F9 spesso prima di iniziare ad accettare Bitcoin \u2014 commissioni, regolamento, wallet, chargeback, costi e altro.",
	"business/faq::faq_intro_c1":
		"Tocca qualsiasi domanda qui sotto per espandere la risposta. Quando sei pronto a iniziare ad accettare Bitcoin, le risorse aziendali in fondo alla pagina ti guideranno passo dopo passo.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "CONTABILIT\u00C0",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "MAPPA COMMERCIANTI",
	"business/index::biz_label_rewards": "RICOMPENSE",
	"business/index::biz_label_stickers": "ADESIVI",
	"business/index::biz_label_wallets": "WALLET",
	"business/index::biz_meta_description":
		"Accetta Bitcoin nella tua azienda per commissioni pi\u00F9 basse, regolamento istantaneo, nessun chargeback e pi\u00F9 clienti.",
	"business/index::business_hero_subtitle":
		"Accetta pagamenti con commissioni pi\u00F9 basse, fatti pagare istantaneamente e raggiungi milioni di nuovi clienti \u2014 senza contratti e senza costi nascosti.",
	"business/index::business_intro_c1":
		"Bitcoin offre alla tua azienda un modo pi\u00F9 veloce, economico e privato per essere pagata. Nessun intermediario. Nessun chargeback. Nessun contratto. Solo denaro che si regola in pochi secondi, direttamente dal tuo cliente a te.",
	"business/index::business_intro_c2":
		"Qui sotto la versione breve sul perch\u00E9 Bitcoin \u00E8 buono per le aziende \u2014 e sotto, ogni risorsa di cui hai bisogno per iniziare ad accettarlo oggi.",
	"business/index::business_resources_heading":
		"Tutto ci\u00F2 di cui hai bisogno per accettare Bitcoin",
	"business/index::business_resources_intro":
		"Lavora su queste risorse al tuo ritmo. Ognuna \u00E8 una guida breve e pratica.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Parlaci della tua attivit\u00E0",
	"business/maps::biz_maps_form_intro":
		"Ci servono solo alcuni dettagli per registrarti. I dati dell'indirizzo vengono conservati solo abbastanza a lungo per inviare la tua attivit\u00E0 alla mappa.",
	"business/maps::biz_maps_hero_subtitle":
		"Registra gratuitamente la tua attivit\u00E0 su BTC Map \u2014 la directory aperta dei commercianti che accettano Bitcoin in tutto il mondo \u2014 cos\u00EC i Bitcoiner vicini possono trovarti e spendere Bitcoin nella tua attivit\u00E0.",
	"business/maps::biz_maps_hero_title":
		"Aggiungi la tua attivit\u00E0 alla mappa dei commercianti Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"I Bitcoiner cercano attivamente posti dove spendere. Mettere la tua attivit\u00E0 sulla mappa ti mette davanti a ogni utente Bitcoin che cerca un posto dove mangiare, fare acquisti o pernottare nelle vicinanze \u2014 senza alcun costo per te.",
	"business/maps::biz_maps_intro_c2":
		"Compila il modulo breve qui sotto e invieremo noi la tua attivit\u00E0 a BTC Map e ad altre mappe di commercianti Bitcoin per te.",
	"business/maps::biz_maps_meta_description":
		"Registra gratuitamente la tua attivit\u00E0 su BTC Map e altre mappe di commercianti Bitcoin cos\u00EC i Bitcoiner vicini possono trovarti.",
	"business/maps::biz_maps_placeholder_address": "Indirizzo",
	"business/maps::biz_maps_placeholder_category":
		"Categoria (es. ristorante, caff\u00E8, hotel)",
	"business/maps::biz_maps_placeholder_city": "Citt\u00E0",
	"business/maps::biz_maps_placeholder_country": "Paese",
	"business/maps::biz_maps_placeholder_name":
		"Nome dell'attivit\u00E0",
	"business/maps::biz_maps_placeholder_region":
		"Provincia / Regione",
	"business/maps::biz_maps_placeholder_website":
		"Sito web (opzionale)",
	"business/maps::biz_maps_view_map_cta": "Visualizza BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"Visualizza BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Grazie per aver inviato la tua attivit\u00E0. La aggiungeremo presto alle mappe dei commercianti Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Richiesta ricevuta 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"La tua attivit\u00E0 verr\u00E0 elencata su BTC Map e altre directory di commercianti Bitcoin entro 1\u20132 settimane. Esaminiamo manualmente ogni invio per mantenere accurate le mappe.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Una volta che il tuo annuncio \u00E8 attivo, i Bitcoiner vicini possono scoprire la tua attivit\u00E0 e venire a spendere Bitcoin l\u00EC.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Cosa succede dopo",
	"business/maps-success::biz_maps_success_view_c1":
		"Mentre aspetti, dai un'occhiata a BTC Map per vedere la rete in crescita di attivit\u00E0 che accettano Bitcoin in tutto il mondo.",
	"business/maps-success::biz_maps_success_view_header":
		"Vedi dove apparirai",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Scarica i file degli adesivi in inglese per stampare i tuoi adesivi \"Bitcoin Accettato Qui\".",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Stampa i tuoi adesivi \"Bitcoin Accettato Qui\" in inglese per far sapere ai tuoi clienti che accetti Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Scarica i file degli adesivi \"Bitcoin Accettato Qui\" in inglese",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Grazie per aver richiesto i file degli adesivi \"Bitcoin Accettato Qui\" nella tua lingua.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Richiesta ricevuta 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Creeremo e pubblicheremo i tuoi file degli adesivi entro 3\u20134 settimane. Una volta pronti, potrai scaricarli e stamparli gratuitamente dalla nostra pagina dei file degli adesivi.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"I file degli adesivi vengono rilasciati a lotti, quindi potrebbero volerci alcune settimane prima che la tua lingua sia attiva. Grazie per la pazienza!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Cosa succede dopo",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Ordina in grandi quantit\u00E0",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Richiedi un altro pacchetto gratuito",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Riceverai i tuoi adesivi gratuiti \"Bitcoin Accettato Qui\" entro 2\u20134 settimane, in una busta bianca anonima contenente 3 adesivi.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"I tuoi adesivi sono in arrivo 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Se 3 adesivi non bastano per la tua attivit\u00E0, sentiti libero di richiedere un altro pacchetto gratuito \u2014 o ordina in grandi quantit\u00E0 dalla stessa stamperia che usiamo noi.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Hai bisogno di pi\u00F9 adesivi?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Sulla porta d'ingresso o sulla vetrina, cos\u00EC i clienti li vedono prima di entrare",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Vicino alla cassa, al terminale POS o all'area di pagamento",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Su menu, listini prezzi o salvadanai per le mance",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Non attaccarli dove non ti \u00E8 permesso o non hai il diritto di farlo",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Buoni posti dove attaccare i tuoi adesivi",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Fai sapere ai tuoi clienti che accetti Bitcoin. Ordina un pacchetto gratuito di adesivi \"Bitcoin Accettato Qui\" per esporre nella tua attivit\u00E0.",
	"business/stickers::biz_stickers_hero_title":
		"Adesivi gratuiti \"Bitcoin Accettato Qui\"",
	"business/stickers::biz_stickers_intro_c1":
		"Accettare Bitcoin \u00E8 solo met\u00E0 del lavoro \u2014 i tuoi clienti devono anche saperlo. Questi piccoli adesivi \"Bitcoin Accettato Qui\" sono progettati per essere applicati sulla porta d'ingresso, alla cassa, sui menu o ovunque i clienti li vedano prima di pagare.",
	"business/stickers::biz_stickers_intro_c2":
		"Ti spediamo gratuitamente un pacchetto ovunque negli Stati Uniti o in Canada, oppure puoi stamparli tu stesso ovunque nel mondo.",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada \u2014 Gratis per posta",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d Globale \u2014 Stampali tu stesso",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 USA \u2014 Gratis per posta",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Traduzione di \"Bitcoin Accettato Qui\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Traduzione di \"Scansiona per scoprire perch\u00E9 Bitcoin \u00E8 buono per le aziende.\"",
	"business/stickers::biz_stickers_print_c1":
		"Puoi stampare tu stesso gli adesivi \"Bitcoin Accettato Qui\", non importa dove vivi. Clicca sulla tua lingua qui sotto per scaricare i file degli adesivi e le istruzioni di stampa.",
	"business/stickers::biz_stickers_print_header":
		"Stampa tu stesso i file degli adesivi",
	"business/stickers::biz_stickers_request_c1":
		"Compila il modulo qui sotto per richiedere file degli adesivi \"Bitcoin Accettato Qui\" nella tua lingua locale. Ti faremo sapere quando saranno pronti.",
	"business/stickers::biz_stickers_request_header":
		"Non vedi la tua lingua?",
	"business/stickers::biz_stickers_step_description":
		"Spediamo pacchetti gratuiti agli indirizzi in USA e Canada. Ovunque nel mondo, puoi stamparli tu stesso.",
	"business/stickers::biz_stickers_step_header":
		"Come vuoi ricevere i tuoi adesivi?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Tutti i wallet Bitcoin sono interconnessi \u2014 scegli quello adatto alla tua attivit\u00E0. Gratuiti, regolamento istantaneo, niente chargeback.",
	"business/wallets::sources_breez_business":
		"Breez \u2014 Wallet Lightning solo Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX \u2014 Infrastruttura di pagamenti Lightning",
	"business/wallets::sources_opennode":
		"OpenNode \u2014 Processore di pagamenti Bitcoin",
	"business/wallets::sources_square":
		"Square \u2014 Accetta pagamenti Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite \u2014 Fatturazione Bitcoin per aziende",
	"business/wallets::wallets_hero_subtitle":
		"Wallet Bitcoin gratuiti. Scegli quello adatto alla tua attivit\u00E0 \u2014 di persona, online o basato su fatture \u2014 e inizia ad accettare Bitcoin in pochi minuti.",
	"business/wallets::wallets_section_invoice":
		"Wallet per aziende basate su fatture",
	"business/wallets::wallets_section_invoice_intro":
		"Se fatturi clienti (consulenze, freelance, servizi B2B), usa un wallet costruito attorno alla fatturazione. I tuoi clienti pagano una fattura Bitcoin in pochi clic.",
	"business/wallets::wallets_section_multiple":
		"Wallet per aziende con pi\u00F9 dipendenti",
	"business/wallets::wallets_section_multiple_intro":
		"Se hai un team che accetta pagamenti alla cassa, scegli un wallet che supporti pi\u00F9 login dei dipendenti \u2014 cos\u00EC ogni dipendente ha il proprio PIN e mantieni una traccia di audit pulita di chi ha accettato quale pagamento.",
	"business/wallets::wallets_section_online":
		"Wallet per attivit\u00E0 online",
	"business/wallets::wallets_section_online_intro":
		"Vendi su un sito web? Questi wallet si collegano al tuo negozio online e accettano Bitcoin da qualsiasi cliente, in qualsiasi parte del mondo \u2014 niente chargeback, nessun account commerciante richiesto.",
	"business/wallets::wallets_section_sole":
		"Wallet per ditte individuali",
	"business/wallets::wallets_section_sole_intro":
		"Se gestisci un negozio, un caff\u00E8, uno studio o un servizio da solo, qualsiasi di questi wallet funzioner\u00E0. Scegli in base al fatto che tu voglia tenere i pagamenti in Bitcoin o convertire automaticamente parte di ogni pagamento nella tua valuta locale.",
	"business/wallets::wallets_strike_note":
		"Strike Business ti permette di accettare pagamenti Bitcoin e Lightning con commissioni zero e regolamento istantaneo. Supporta pagamenti di persona, online e basati su fatture con conversione automatica opzionale nella tua valuta locale.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin accettato qui",
	"business/why::why_biz_s1":
		"Commissioni pi\u00F9 basse, pi\u00F9 per le aziende",
	"business/why::why_biz_s1_c1":
		"I pagamenti Bitcoin saltano le banche e le compagnie di carte di credito che si prendono il 2\u20133% di ogni vendita. Le aziende tengono di pi\u00F9 di quello che paghi \u2014 il che spesso significa prezzi migliori e un servizio migliore per te.",
	"business/why::why_biz_s2":
		"Regolamento istantaneo, nessun chargeback",
	"business/why::why_biz_s2_c1":
		"I pagamenti Bitcoin si regolano in pochi secondi, direttamente dal tuo wallet all'azienda. Niente attese di giorni perch\u00E9 la banca rilasci i fondi, e niente costose dispute di chargeback \u2014 cos\u00EC le aziende possono concentrarsi nel servire i clienti invece di combattere le frodi.",
	"business/why::why_biz_s3":
		"Gratuito da accettare, aperto a tutti",
	"business/why::why_biz_s3_c1":
		"Nessun contratto, commissioni mensili o costi di configurazione per le aziende per accettare Bitcoin. E milioni di utenti Bitcoin in tutto il mondo cercano attivamente commercianti che lo accettano \u2014 dando a queste aziende esposizione gratuita a nuovi clienti.",
	"business/why::why_business_cta_intro":
		"Hai un'attivit\u00E0 e vuoi iniziare ad accettare Bitcoin?",
	"business/why::why_business_cta_link": "Scopri come funziona \u2192",
	"business/why::why_for_business":
		"Perch\u00E9 Bitcoin \u00E8 cos\u00EC buono per questa azienda",
	"business/why::why_for_business_intro":
		"Accettare Bitcoin permette alle aziende di tenere di pi\u00F9 di ogni vendita, essere pagate istantaneamente senza chargeback e raggiungere un pubblico globale di utenti Bitcoin \u2014 tutto senza contratti e senza commissioni mensili.",
	"business/why::why_good_for_you":
		"Perch\u00E9 Bitcoin \u00E8 fantastico anche per te",
	"business/why::why_good_for_you_intro":
		"Bitcoin non \u00E8 solo utile alla cassa \u2014 \u00E8 una forma migliore di denaro che protegge i tuoi risparmi, la tua privacy e la tua libert\u00E0 di transare. Ecco una rapida panoramica.",
	"business/why::why_hero_subtitle":
		"Hai appena scansionato un adesivo Bitcoin Accettato Qui. Ecco perch\u00E9 \u00E8 una buona notizia \u2014 per questa azienda e per te.",
	"business/why::why_intro_c1":
		"L'azienda in cui ti trovi accetta Bitcoin \u2014 una rete di pagamenti moderna e open source che chiunque, ovunque nel mondo, pu\u00F2 usare senza che banche o intermediari prendano una percentuale.",
	"business/why::why_intro_c2":
		"Qui sotto la versione breve sul perch\u00E9 accettare Bitcoin \u00E8 buono per questa azienda, pi\u00F9 perch\u00E9 usare Bitcoin \u00E8 buono per te come cliente.",
	"business/why::why_learn_more_lowercase": "Scopri di pi\u00F9 \u2192",
	"business/why::why_next_business_label": "ACCETTA BITCOIN",
	"business/why::why_next_business_title":
		"Accetta Bitcoin nella tua attivit\u00E0",
	"business/why::why_next_buy_label": "COMPRA BITCOIN",
	"business/why::why_next_buy_title":
		"Compra il tuo primo Bitcoin",
	"business/why::why_next_learn_label": "SCOPRI DI PI\u00D9",
	"business/why::why_next_learn_title":
		"Scopri di pi\u00F9 su Bitcoin",
	"business/why::why_next_wallet_label": "OTTIENI UN WALLET",
	"business/why::why_next_wallet_title":
		"Ottieni il tuo wallet Bitcoin",
	"business/why::why_s1_c1":
		"L'inflazione si verifica quando viene stampato o creato dal nulla pi\u00F9 denaro. Fa s\u00EC che il denaro nelle tue tasche valga meno nel tempo \u2014 ed \u00E8 per questo che i prezzi continuano a salire anno dopo anno.",
	"business/why::why_s1_c2":
		"Bitcoin ha un'offerta fissa di 21 milioni di monete. Nessun governo, banca o azienda pu\u00F2 stamparne di pi\u00F9. I tuoi risparmi in Bitcoin mantengono il loro valore nel tempo invece di perderlo silenziosamente.",
	"business/why::why_s2_c1":
		"Diverse banche statunitensi sono crollate negli ultimi anni a causa di corse agli sportelli. Quando troppi clienti cercano di prelevare i loro soldi contemporaneamente, la banca non ha contanti per ripagare tutti.",
	"business/why::why_s2_c2":
		"Invece di tenere semplicemente i tuoi soldi, le banche prestano e investono la maggior parte di essi. Se quegli investimenti vanno male \u2014 o se i depositanti perdono fiducia \u2014 la banca pu\u00F2 fallire e i tuoi depositi possono essere congelati o persi.",
	"business/why::why_s2_c3":
		"Con Bitcoin, puoi tenere i tuoi soldi tu stesso direttamente nel tuo wallet. Niente banche. Niente intermediari. Niente corse agli sportelli.",
	"business/why::why_s3_c1":
		"A differenza delle carte di credito, PayPal o dei conti bancari tradizionali, Bitcoin non richiede il permesso di nessuno per essere usato.",
	"business/why::why_s3_c2":
		"Nessuno pu\u00F2 congelare il tuo conto, bloccare un pagamento o tagliarti fuori dalla rete. \u00C8 il primo sistema finanziario nella storia che puoi usare liberamente, senza paura di censura o sequestro.",
	"business/why::why_s4_c1":
		"Bitcoin \u00E8 spesso frainteso, ma sta tranquillamente facendo molto bene nel mondo.",
	"business/why::why_s4_c2":
		"Bitcoin ha aiutato attivisti per i diritti umani a combattere per la libert\u00E0, ridotto le emissioni globali di metano da discariche e giacimenti petroliferi, stabilizzato le reti elettriche e finanziato beni pubblici come parchi nazionali.",
	"business/why::why_whats_next_heading": "Dove andare dopo?",
	"business/why::why_whats_next_intro":
		"Se \u00E8 la prima volta che scansioni un adesivo Bitcoin, ecco i posti pi\u00F9 utili dove andare da qui.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Come comprare Bitcoin",
	"buy::buy_step_1_header": "Scegli il tuo paese",
	"buy::buy_step_2_header": "Scegli il tuo metodo di pagamento",
	"buy::buy_step_3_header": "Le tue opzioni di acquisto",
	"buy::buy_step_4_header":
		"Conserva il tuo Bitcoin in sicurezza",
	"buy::buy_header_subtitle":
		"Una semplice guida passo-passo per comprare il tuo primo Bitcoin.",
	"buy::buy_howto_name": "Come comprare Bitcoin",
	"buy::buy_meta_description":
		"Scopri come comprare Bitcoin in sicurezza con la nostra guida passo-passo. Scegli il tuo paese e metodo di pagamento per trovare le migliori opzioni di acquisto Bitcoin per te.",
	"buy::buy_step_1_eyebrow": "Passo 1",
	"buy::buy_step_2_eyebrow": "Passo 2",
	"buy::buy_step_3_eyebrow": "Passo 3",
	"buy::buy_step_4_eyebrow": "Passo 4",
	"buy::buy_storage_cta_label": "Prossimo passo",
	"buy::sources_bisq":
		"Bisq \u2014 Exchange Bitcoin peer-to-peer decentralizzato",
	"buy::sources_coinatmradar":
		"Coin ATM Radar \u2014 Directory globale di ATM Bitcoin",
	"buy::sources_kraken":
		"Kraken \u2014 Exchange Bitcoin consolidato",
	"buy::sources_relai":
		"Relai \u2014 App svizzera di self-custody solo Bitcoin",
	"buy::sources_river":
		"River \u2014 Acquisto, mining e custodia solo Bitcoin",
	"buy::sources_strike_lightning":
		"Strike \u2014 Compra Bitcoin con supporto Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin \u2014 Dollar-cost averaging solo Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Aggiungi lingua",
	"common::common_next_buy_bitcoin": "Compra Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Scopri come comprare Bitcoin in sicurezza",
	"common::common_next_calculate": "Calcola la tua inflazione",
	"common::common_next_calculate_desc":
		"Vedi come l'inflazione influisce sul tuo stipendio nel tempo",
	"common::common_next_get_wallet": "Ottieni un wallet",
	"common::common_next_get_wallet_desc":
		"Ottieni il tuo primo wallet Bitcoin \u2014 gratis",
	"common::common_next_keep_learning": "Continua a imparare",
	"common::common_next_keep_learning_desc":
		"Scopri come Bitcoin sta rendendo il mondo migliore",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics \u2014 Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) \u2014 Money Supply (Indice categorie)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto \u2014 Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish \u2014 \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Cosa c'\u00E8 dopo?",
	"common::common_sticker_files_mission_5": "richiedi un pacchetto",
	"common::common_site_tagline":
		"Educazione Bitcoin per tutti.",
	"common::common_source_btc_map":
		"BTC Map \u2014 Directory mondiale dei commercianti che accettano Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server \u2014 Processore di pagamenti Bitcoin gratuito, open source e self-hosted",
	"common::common_source_oshi":
		"Oshi \u2014 Piattaforma di ricompense Bitcoin per commercianti",
	"common::common_source_strike_business":
		"Strike \u2014 Pagamenti Bitcoin e Lightning per aziende",
	"common::common_sources_group_bitcoin": "Dati Bitcoin",
	"common::common_sources_group_cpi":
		"Inflazione / Indice dei prezzi al consumo",
	"common::common_sources_group_debt": "Debito pubblico",
	"common::common_sources_group_money": "Dati offerta monetaria",
	"common::common_sources_group_stories": "Esempi reali",
	"common::common_sticker_files_mission_6":
		"adesivi inglesi gratuitamente.",
	"common::common_sticker_files_next_flyers_label": "Volantini",
	"common::common_sticker_files_next_flyers_title":
		"Stampa volantini Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"File degli adesivi",
	"common::common_sticker_files_next_languages_title":
		"Vedi file degli adesivi in altre lingue",
	"common::common_sticker_files_print_these":
		"STAMPA QUESTI CON 1 CLIC",
	"common::common_sticker_name_bdhi_black":
		"Adesivo \"Bitcoin Non Ha Inflazione\" (Nero)",
	"common::common_sticker_name_bdhi_orange":
		"Adesivo \"Bitcoin Non Ha Inflazione\" (Arancione)",
	"common::common_sticker_name_caution":
		"Adesivo Bitcoin \"Attenzione! Cubetti di ghiaccio in fusione\"",
	"common::common_sticker_name_cure_inflation":
		"Adesivo Bitcoin \"Cura l'inflazione\"",
	"common::common_sticker_name_danger":
		"Adesivo Bitcoin \"Pericolo! Inflazione in vista\"",
	"common::common_sticker_name_fix":
		"Adesivo Bitcoin \"Aggiusta il denaro, aggiusta il mondo\"",
	"common::common_sticker_name_got_inflation":
		"Adesivo Bitcoin \"Hai l'inflazione?\"",
	"common::common_sticker_name_study":
		"Adesivo \"Studia Bitcoin\"",
	"common::common_sticker_name_warning":
		"Adesivo Bitcoin \"Avviso! L'inflazione sta rubando i tuoi risparmi\"",
	"common::common_sticker_name_what_if":
		"Adesivo Bitcoin \"E se il tuo denaro non avesse inflazione?\"",
	"common::common_sticker_tips_heading":
		"Consigli per gli adesivi",
	"common::common_sticker_tips_intro":
		"Una volta stampati gli adesivi, attaccali dove saranno visibili! Buoni posti per gli adesivi sono:",
	"common::common_sticker_tips_list_1":
		"in luoghi pubblici dove le persone li vedranno",
	"common::common_sticker_tips_list_2":
		"in posti dove \u00E8 improbabile che vengano rimossi rapidamente (gli adesivi non causano danni permanenti)",
	"common::common_sticker_tips_list_3":
		"su superfici facili da incollare (metallo, plastica, vetro)",
	"common::common_sticker_tips_list_4":
		"NON su propriet\u00E0 privata, coprendo cartelli, ATM o pompe di benzina",
	"common::common_stickers_printer_prefix": "Noi usiamo",
	"common::common_stickers_printer_suffix":
		"ma puoi usare qualsiasi azienda di adesivi.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) \u2014 Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) \u2014 M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"Calcola il tuo divario di inflazione",
	"compound-inflation-calculator::cic_cta_label": "Prossimo passo",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Vedi quanto deve aumentare il tuo stipendio per stare al passo con l'inflazione.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Esplora pi\u00F9 argomenti",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Vedi come Bitcoin si collega a denaro, libert\u00E0, energia e altro.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Scopri come funziona l'inflazione",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Come stampare e affiggere questi volantini Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Volantini Bitcoin gratuiti e stampabili. Affiggili in luoghi pubblici per aiutare pi\u00F9 persone a imparare cos'\u00E8 Bitcoin.",
	"flyers::flyers_hero_title":
		"Stampa e affiggi volantini Bitcoin",
	"flyers::flyers_next_get_stickers": "Spargi la voce",
	"flyers::flyers_next_get_stickers_desc":
		"Ordina un pacchetto di adesivi Bitcoin gratuiti",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Partecipa e diffondi Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Vuoi aiutare a costruire l'economia circolare di Bitcoin? Il modo pi\u00F9 facile \u00E8 aiutare le aziende locali a iniziare ad accettare pagamenti Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Conosci un'attivit\u00E0 che potrebbe essere interessata? Indirizza il proprietario alla nostra",
	"get-involved::get_involved_business_content_3":
		"pagina Bitcoin per le aziende.",
	"get-involved::get_involved_description":
		"Le nostre risorse gratuite rendono facile diffondere l'adozione di Bitcoin. Adesivi, volantini, adesivi \"Bitcoin Accettato Qui\" per le aziende, e una codebase open source a cui chiunque pu\u00F2 contribuire.",
	"get-involved::get_involved_header":
		"Partecipa e diffondi Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Puoi aiutare a cambiare le cose. Abbiamo creato diverse risorse gratuite per renderti facile diffondere la speranza che Bitcoin porta alle persone intorno a te.",
	"get-involved::get_involved_biz_stickers_note":
		"Accetti gi\u00E0 Bitcoin? Fallo sapere ai clienti con i nostri adesivi gratuiti \"Bitcoin Accettato Qui\". Spediremo un pacchetto a qualsiasi indirizzo negli Stati Uniti o in Canada, oppure puoi stamparli tu stesso ovunque nel mondo.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Adesivi accettato qui",
	"get-involved::get_involved_card_biz_stickers_source":
		"Fonte: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"Adesivi gratuiti \"Bitcoin Accettato Qui\" per la tua azienda",
	"get-involved::get_involved_card_business_label":
		"Bitcoin per le aziende",
	"get-involved::get_involved_card_business_source":
		"Fonte: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"Tutto ci\u00F2 di cui le aziende hanno bisogno per iniziare ad accettare pagamenti Bitcoin",
	"get-involved::get_involved_card_flyers_label":
		"Volantini stampabili",
	"get-involved::get_involved_card_flyers_source":
		"Fonte: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"Scarica e stampa volantini Bitcoin gratuiti",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source":
		"Fonte: GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"Contribuisci a bitcoin.rocks su GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Adesivi gratuiti",
	"get-involved::get_involved_card_stickers_source":
		"Fonte: bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"Richiedi un pacchetto gratuito di adesivi Bitcoin spedito a casa tua",
	"get-involved::get_involved_flyers_content_1":
		"I volantini sono uno dei modi pi\u00F9 facili per introdurre Bitcoin nella tua comunit\u00E0. Scarica volantini Bitcoin gratuiti e stampabili, stampane quanti vuoi e affiggili in bacheche comunitarie, caff\u00E8, meetup o ovunque le persone si riuniscano.",
	"get-involved::get_involved_flyers_content_2":
		"Ogni volantino include un titolo accattivante e un codice QR che invia i lettori curiosi a bitcoin.rocks per saperne di pi\u00F9.",
	"get-involved::get_involved_flyers_content_3":
		"A differenza degli adesivi, i volantini possono essere stampati su richiesta da qualsiasi parte del mondo \u2014 ti serve solo una stampante e qualche minuto.",
	"get-involved::get_involved_flyers_header":
		"Stampa e affiggi volantini",
	"get-involved::get_involved_flyers_image_alt":
		"Anteprima dei volantini Bitcoin gratuiti e stampabili da bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks \u00E8 un progetto gratuito e open source con licenza MIT. La nostra missione \u00E8 accelerare l'adozione di Bitcoin attraverso l'educazione \u2014 e non possiamo farlo da soli.",
	"get-involved::get_involved_github_content_2":
		"Che tu sia uno sviluppatore, un designer, uno scrittore o un traduttore, c'\u00E8 un modo in cui puoi aiutare. Accogliamo particolarmente i contributori che possono tradurre i nostri contenuti in pi\u00F9 lingue, cos\u00EC pi\u00F9 persone in tutto il mondo possono imparare Bitcoin nella loro lingua madre.",
	"get-involved::get_involved_github_content_3":
		"Forka il repository, apri una pull request, segnala un problema o semplicemente metti una stella al progetto per mostrare il tuo supporto. Ogni contributo aiuta Bitcoin a raggiungere pi\u00F9 persone.",
	"get-involved::get_involved_github_header":
		"Contribuisci su GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Pacchetto di adesivi Bitcoin gratuiti di testo da bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "risparmiando",
	"index::home_card_label_art_1": "Confrontiamo",
	"index::home_card_label_art_2": "Spargi la voce",
	"index::home_card_label_art_3": "Arte di strada",
	"index::home_card_label_bank_runs": "Sistema a riserva piena",
	"index::home_card_label_bonds": "Confrontiamo",
	"index::home_card_label_business_1": "Qual \u00E8 la differenza?",
	"index::home_card_label_business_2": "Accetta pagamenti Bitcoin",
	"index::home_card_label_cash": "Confrontiamo",
	"index::home_card_label_cbdc": "Aperto o chiuso?",
	"index::home_card_label_coding_1": "Tutorial interattivo",
	"index::home_card_label_coding_2": "Costruisci hardware",
	"index::home_card_label_coding_3": "Puzzle di codifica",
	"index::home_card_label_crowdfunding_1": "Proteste EndSARS",
	"index::home_card_label_crowdfunding_2": "Denaro inarrestabile",
	"index::home_card_label_crowdfunding_3":
		"Finanzia il tuo progetto",
	"index::home_card_label_crypto": "Qual \u00E8 la differenza?",
	"index::home_card_label_energy_1": "Stabilizzazione della rete",
	"index::home_card_label_energy_4": "Risposta alla domanda",
	"index::home_card_label_energy_5": "Elettrificazione rurale",
	"index::home_card_label_energy_6": "Incentivo rinnovabile",
	"index::home_card_label_environment_1":
		"Riduzione del metano",
	"index::home_card_label_environment_2":
		"Salvataggio dei parchi nazionali",
	"index::home_card_label_environment_3":
		"L'industria pi\u00F9 verde",
	"index::home_card_label_environment_4":
		"Riduzione del flaring di gas",
	"index::home_card_label_equality_1":
		"Speranza e opportunit\u00E0",
	"index::home_card_label_equality_2":
		"Rivoluzionario",
	"index::home_card_label_food_1": "Prezzi del cibo",
	"index::home_card_label_food_2": "Fattorie e terreni",
	"index::home_card_label_freedom_1": "Regimi autoritari",
	"index::home_card_label_freedom_2": "Strumento unico",
	"index::home_card_label_get_started_1":
		"Le basi per principianti",
	"index::home_card_label_get_started_2": "Il tuo primo wallet",
	"index::home_card_label_get_started_3": "Compra Bitcoin",
	"index::home_card_label_gold": "Quale \u00E8 migliore?",
	"index::home_card_label_housing_1": "Case accessibili",
	"index::home_card_label_human_rights_1":
		"Difesa dei diritti umani",
	"index::home_card_label_human_rights_2": "Adozione dal basso",
	"index::home_card_label_human_rights_3": "Impatto globale",
	"index::home_card_label_inflation":
		"Bitcoin \u00E8 denaro migliore",
	"index::home_card_label_networks_1":
		"Visualizzazione di rete dal vivo",
	"index::home_card_label_networks_2": "Confrontiamo",
	"index::home_card_label_payments_1": "Qual \u00E8 la differenza?",
	"index::home_card_label_payments_2":
		"Pagamenti veloci ed economici",
	"index::home_card_label_payments_3": "Rimesse",
	"index::home_card_label_payments_4": "Accetta pagamenti",
	"index::home_card_label_politics_1": "Paradosso politico",
	"index::home_card_label_politics_2": "Agisci",
	"index::home_card_label_property_rights_1": "Confrontiamo",
	"index::home_card_label_property_rights_2": "Vera propriet\u00E0",
	"index::home_card_label_salary": "Proteggi il tuo stipendio",
	"index::home_card_label_self_custody_1":
		"Guida ai wallet Bitcoin",
	"index::home_card_label_self_custody_2":
		"Il passo pi\u00F9 importante",
	"index::home_card_label_self_custody_3": "Denaro sovrano",
	"index::home_card_label_war_1": "Fine delle guerre infinite",
	"index::home_card_label_war_2": "Aiutare i veterani",
	"index::home_card_label_war_3": "Fuga in tempo di guerra",
	"index::home_h1":
		"Bitcoin \u00E8 un denaro migliore che costruisce un mondo migliore.",
	"index::home_nav_about": "Chi siamo",
	"index::home_nav_get_involved": "Partecipa",
	"index::home_nav_learn": "Impara",
	"index::home_source_prefix": "Fonte:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon e Thaddeus Dryja \u2014 The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Vedi la nostra",
	"lightning::lightning_grid_heading":
		"Wallet Lightning popolari",
	"lightning::lightning_hardware_cta_label":
		"Wallet hardware",
	"lightning::lightning_header_subtitle":
		"Lightning ti permette di inviare Bitcoin in pochi secondi per meno di un centesimo \u2014 scegli un wallet i cui compromessi corrispondano a quanto Bitcoin vuoi spendere.",
	"lightning::lightning_s1_c4_end":
		"per maggiori informazioni.",
	"lightning::lightning_s1_c4_link":
		"Guida ai Wallet Hardware Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ \u2014 Wallet Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez \u2014 Wallet Lightning self-custodial",
	"lightning::sources_lightning_labs":
		"Lightning Labs \u2014 Documentazione Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi \u2014 Wallet Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android e web",
	"nostr/index::nostr_platform_web": "Browser web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr \u00E8 un nuovo protocollo decentralizzato per la comunicazione online \u2014 nessuna singola azienda lo controlla, gli zap Bitcoin sono integrati nativamente e puoi cambiare client senza perdere i tuoi follower.",
	"nostr/index::nostr_amethyst_f1":
		"Molte funzioni e personalizzazioni",
	"nostr/index::nostr_amethyst_f2":
		"Richiede un wallet Bitcoin separato",
	"nostr/index::nostr_amethyst_f3": "100% gratuito",
	"nostr/index::nostr_damus_f1":
		"Interfaccia familiare in stile Twitter",
	"nostr/index::nostr_damus_f2":
		"Richiede un wallet Bitcoin separato",
	"nostr/index::nostr_damus_f3": "100% gratuito",
	"nostr/index::nostr_download_heading":
		"Scarica un client Nostr gratuito",
	"nostr/index::nostr_download_intro":
		"Un client Nostr \u00E8 un'app gratuita che ti permette di leggere e pubblicare sulla rete Nostr. Sono tutti interconnessi \u2014 puoi cambiare client in qualsiasi momento e mantenere i tuoi follower e contenuti.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr \u00E8 un nuovo protocollo decentralizzato per comunicare online \u2014 nessuna singola azienda lo controlla, gli zap Bitcoin sono integrati e puoi cambiare app senza perdere i tuoi follower.",
	"nostr/index::nostr_hero_title": "Cos'\u00E8 Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr \u00E8 simile all'email: nessuno possiede il protocollo, chiunque pu\u00F2 costruire app su di esso e puoi scegliere qualsiasi app preferisci. A differenza di Twitter o Facebook, non c'\u00E8 un'azienda centrale che pu\u00F2 censurarti, deplatformarti o ridurre la tua visibilit\u00E0.",
	"nostr/index::nostr_intro_c2":
		"Qui sotto la versione breve sul perch\u00E9 Nostr \u00E8 importante \u2014 poi ogni client Nostr gratuito di cui hai bisogno per iniziare oggi.",
	"nostr/index::nostr_iris_f1":
		"Estremamente semplice \u2014 nessuna installazione necessaria",
	"nostr/index::nostr_iris_f2":
		"Modo facile per provare Nostr con un account di prova",
	"nostr/index::nostr_iris_f3": "100% gratuito",
	"nostr/index::nostr_learn_more_label": "APPROFONDISCI",
	"nostr/index::nostr_learn_more_title":
		"Scopri di pi\u00F9 su Nostr su nostr.how",
	"nostr/index::nostr_primal_f1":
		"Primo client raccomandato",
	"nostr/index::nostr_primal_f2":
		"Wallet di zap Bitcoin integrato",
	"nostr/index::nostr_primal_f3": "100% gratuito",
	"nostr/index::nostr_s1": "Un protocollo, non una piattaforma",
	"nostr/index::nostr_s1_c1":
		"Nostr \u00E8 un nuovo protocollo che ti permette di comunicare online senza paura di censura, deplatforming o riduzione della visibilit\u00E0.",
	"nostr/index::nostr_s1_c2":
		"Piattaforme come Twitter e Facebook sono controllate da una singola azienda, ma nessuno controlla il protocollo Nostr.",
	"nostr/index::nostr_s2": "Libert\u00E0 di cambiare",
	"nostr/index::nostr_s2_c1":
		"Nostr \u00E8 simile all'email. Nessuno controlla il protocollo email e chiunque pu\u00F2 costruire un client (come Gmail, Hotmail, ecc.) su di esso.",
	"nostr/index::nostr_s2_c2":
		"Nessuno controlla il protocollo Nostr e chiunque pu\u00F2 costruire un client (come Damus, Amethyst, ecc.) su di esso.",
	"nostr/index::nostr_s2_c3":
		"Se non ti piace come funziona un certo client, puoi spostare senza problemi il tuo account Nostr a un altro client senza perdere i tuoi follower o contenuti.",
	"nostr/index::nostr_s3": "Bitcoin integrato",
	"nostr/index::nostr_s3_c1":
		"Bitcoin \u00E8 integrato nativamente nel protocollo Nostr. Se vedi contenuti che ti piacciono, puoi facilmente inviare a qualcuno uno zap Bitcoin come ringraziamento!",
	"nostr/index::nostr_s3_c2":
		"Su piattaforme centralizzate come Twitter e Facebook, le aziende centralizzate fanno soldi con i tuoi contenuti. Ma su un protocollo aperto come Nostr, sei tu a fare soldi con i tuoi contenuti.",
	"nostr/index::sources_damus":
		"Damus \u2014 Client Nostr per iPhone",
	"nostr/index::sources_iris":
		"Iris \u2014 Client Nostr basato su browser",
	"nostr/index::sources_nostr_how":
		"nostr.how \u2014 Cos'\u00E8 Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol \u2014 Specifica open source",
	"nostr/index::sources_primal":
		"Primal \u2014 Client Nostr con wallet di zap Bitcoin integrato",
	"nostr/index::what_is_nostr": "Cos'\u00E8 Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Stampa i tuoi adesivi Bitcoin con questi file degli adesivi Bitcoin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Richiesta ricevuta 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Ordina in grandi quantit\u00E0",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Condividi su Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Cos'\u00E8 Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Vuoi pi\u00F9 adesivi?",
	"sticker-success::sticker_success_hero_title":
		"I tuoi adesivi sono in arrivo 🎉",
	"sticker-success::sticker_success_share_header":
		"Condividi dove hai messo i tuoi adesivi",
	"sticker-success::sticker_success_tips_header":
		"Buoni posti per gli adesivi",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Gi\u00E0 che ci sei, stampa e affiggi tu stesso",
	"stickers::stickers_instructions_1":
		"Inserisci il tuo indirizzo postale e ti spediremo un Pacchetto Adesivi Bitcoin gratuito per posta. I tuoi adesivi verranno spediti in una busta bianca anonima.",
	"stickers::stickers_btn_choose_pack":
		"Scegli questo pacchetto",
	"stickers::stickers_bulk_c1":
		"Vuoi pi\u00F9 di qualche adesivo?",
	"stickers::stickers_bulk_c2":
		"Ordina in grandi quantit\u00E0 dalla stessa stamperia che usiamo noi",
	"stickers::stickers_bulk_c3":
		"\u2014 pi\u00F9 ne compri, meno costa per adesivo.",
	"stickers::stickers_bulk_cta":
		"Acquista adesivi in grandi quantit\u00E0",
	"stickers::stickers_bulk_header":
		"Ordina adesivi in grandi quantit\u00E0",
	"stickers::stickers_hero_subtitle":
		"Ordina un pacchetto gratuito di adesivi Bitcoin e affiggili in luoghi pubblici per aiutare pi\u00F9 persone a imparare cos'\u00E8 Bitcoin.",
	"stickers::stickers_hero_title": "Adesivi Bitcoin gratuiti",
	"stickers::stickers_intro_c1":
		"La nostra missione \u00E8 aiutarti a orange-pillare pi\u00F9 persone mettendo adesivi Bitcoin in luoghi pubblici. Tutti i nostri adesivi hanno un codice QR che rimanda a una pagina educativa sull'",
	"stickers::stickers_intro_c3": "inflazione",
	"stickers::stickers_intro_c4":
		"Scegli un pacchetto di adesivi qui sotto e seleziona come riceverlo \u2014 spediremo un pacchetto gratuito a chiunque negli Stati Uniti o in Canada, oppure puoi stamparli tu stesso ovunque nel mondo.",
	"stickers::stickers_mail_header":
		"Ti spediremo i tuoi adesivi gratuiti",
	"stickers::stickers_next_print_flyers":
		"Continua a diffondere",
	"stickers::stickers_next_print_flyers_desc":
		"Stampa volantini Bitcoin gratuiti da affiggere in luoghi pubblici",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 Globale \u2014 Ordina in grandi quantit\u00E0",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 Canada \u2014 Gratis per posta",
	"stickers::stickers_option_print":
		"\ud83c\udf0d Globale \u2014 Stampali tu stesso",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 USA \u2014 Gratis per posta",
	"stickers::stickers_print_c1":
		"Puoi partecipare stampando tu stesso gli adesivi, non importa dove vivi. Clicca sulla tua lingua qui sotto per scaricare i file degli adesivi e le istruzioni di stampa.",
	"stickers::stickers_print_c2":
		"Non tutti gli adesivi sono disponibili in tutte le lingue.",
	"stickers::stickers_print_header":
		"Stampa tu stesso i file degli adesivi",
	"stickers::stickers_request_c1":
		"Compila il modulo qui sotto per richiedere file degli adesivi nella tua lingua locale. Ti faremo sapere quando saranno pronti.",
	"stickers::stickers_request_header":
		"Non vedi la tua lingua?",
	"stickers::stickers_share_c2":
		"Seguici su Nostr cercando",
	"stickers::stickers_share_c3":
		"in qualsiasi client Nostr.",
	"stickers::stickers_signs_pack_description":
		"Cartelli di avviso, pericolo e attenzione con messaggi Bitcoin \u2014 progettati per attirare l'attenzione e far fermare e leggere le persone.",
	"stickers::stickers_step_1_description":
		"Ogni pacchetto ha una raccolta diversa di adesivi Bitcoin con codici QR che insegnano alle persone Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "PASSO 1",
	"stickers::stickers_step_1_header":
		"Scegli il tuo pacchetto di adesivi",
	"stickers::stickers_step_2_description":
		"Spediamo pacchetti gratuiti agli indirizzi in USA e Canada. Ovunque nel mondo, puoi stamparli tu stesso o ordinarli in grandi quantit\u00E0.",
	"stickers::stickers_step_2_eyebrow": "PASSO 2",
	"stickers::stickers_step_2_header":
		"Come vuoi ricevere i tuoi adesivi?",
	"stickers::stickers_text_pack_description":
		"Un mix di slogan Bitcoin e battute progettate per accendere la curiosit\u00E0 in luoghi pubblici.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org \u2014 Scegli il tuo wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp \u2014 Recensione di archiviazione di seed Bitcoin in metallo",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green \u2014 Wallet Bitcoin self-custody",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade \u2014 Wallet hardware Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite \u2014 Wallet hardware Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite \u2014 Wallet hardware Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices \u2014 Wallet hardware Passport",
	"wallets::sources_seedsigner":
		"SeedSigner \u2014 Dispositivo di firma Bitcoin DIY open source",
	"wallets::wallets_grid_heading":
		"Wallet Bitcoin popolari",
	"wallets::wallets_header_subtitle":
		"Una guida passo-passo per scegliere un wallet, proteggere le tue chiavi e prendere il pieno controllo del tuo Bitcoin.",
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
		`translate-rest-part2 (it): filled ${filled}, already-done ${skipped}`,
	);
}

main();
