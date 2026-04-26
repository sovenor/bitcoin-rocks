#!/usr/bin/env node
/**
 * Italian (it) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Torna alla home",
	"404::404_message":
		"Bitcoin \u00E8 fantastico, ma questa pagina rotta no.",
	"404::404_not_found_short": "Non trovato",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Forniamo risorse aziendali gratuite che rendono facile per i commercianti locali iniziare ad accettare Bitcoin. La nostra pagina Bitcoin per le aziende spiega perch\u00E9 Bitcoin \u00E8 buono per il business, come scegliere un wallet e un sistema POS, e fornisce adesivi gratuiti \"Bitcoin Accettato Qui\".",
	"about::about_card_business_label": "Risorse aziendali",
	"about::about_card_business_source": "Fonte: bitcoin.rocks \u2192",
	"about::about_card_business_title":
		"Tutto ci\u00F2 di cui le aziende hanno bisogno per iniziare ad accettare pagamenti Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Fonte: GitHub \u2192",
	"about::about_card_contact_github_title":
		"github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribuisci",
	"about::about_card_contribute_source": "Fonte: GitHub \u2192",
	"about::about_card_contribute_title":
		"Scopri come contribuire a bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Fonte: email \u2192",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Volantini stampabili",
	"about::about_card_flyers_source": "Fonte: bitcoin.rocks \u2192",
	"about::about_card_flyers_title":
		"Scarica e stampa volantini Bitcoin per la tua comunit\u00E0",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Fonte: GitHub \u2192",
	"about::about_card_github_title": "Visualizza bitcoin.rocks su GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Fonte: Nostr \u2192",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Adesivi gratuiti",
	"about::about_card_stickers_source": "Fonte: bitcoin.rocks \u2192",
	"about::about_card_stickers_title":
		"Ricevi adesivi Bitcoin gratuiti spediti a casa tua",
	"about::about_editorial_2":
		"Ci colleghiamo a fonti affidabili come la Federal Reserve (FRED), il U.S. Bureau of Labor Statistics, la FDIC, le Nazioni Unite, il World Gold Council, Forbes, MIT Technology Review, Lyn Alden e James Lavish. Crediamo che Bitcoin parli da s\u00E9 quando i fatti sono presentati chiaramente.",
	"about::about_flyers_blurb":
		"Progettiamo volantini stampabili che puoi distribuire a meetup, appendere su bacheche comunitarie o inserire in cassette delle lettere \u2014 un modo semplice per accendere la curiosit\u00E0 e indirizzare le persone a bitcoin.rocks per saperne di pi\u00F9.",
	"about::about_header": "Su bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks \u00E8 stato fondato da",
	"about::about_mission_1b":
		"nel 2022 con una missione semplice: accelerare l'adozione di Bitcoin attraverso l'educazione.",
	"about::about_open_source_2":
		"bitcoin.rocks \u00E8 un progetto gratuito e open source con licenza MIT. Chiunque pu\u00F2 contribuire a bitcoin.rocks. Accogliamo particolarmente i traduttori che aiutano a rendere i nostri contenuti accessibili a persone in tutto il mondo.",
	"about::about_page_description":
		"bitcoin.rocks \u00E8 un sito di educazione Bitcoin gratuito e open source, fondato nel 2022. La nostra missione \u00E8 accelerare l'adozione di Bitcoin attraverso l'educazione.",
	"about::about_stickers_blurb":
		"Spediamo adesivi Bitcoin gratuiti direttamente a casa tua, cos\u00EC puoi aiutare a diffondere la consapevolezza di Bitcoin nella tua comunit\u00E0. Centinaia di persone scansionano i codici QR su questi adesivi ogni mese per imparare cos'\u00E8 Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin non ha corse agli sportelli",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin \u00E8 un sistema a riserva piena. Non depositi i tuoi soldi in una banca. Sei la tua banca. Nessuno presta i tuoi soldi alle tue spalle perch\u00E9 solo tu hai accesso ai tuoi soldi.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Finch\u00E9 conservi Bitcoin nel tuo wallet \u2014 non in un exchange o avvolto in un ETF \u2014 una corsa agli sportelli \u00E8 impossibile.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Con Bitcoin, hai veramente il controllo dei tuoi soldi.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Dal 26 marzo 2020, le banche statunitensi sono tenute a mantenere riserve allo 0%.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Rapporto di riserva bancaria",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Fonte: Federal Reserve \u2192",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistema a riserva piena \u2014 nessuna assicurazione sui depositi necessaria.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Copertura Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Fonte: Whitepaper di Bitcoin \u2192",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Ogni Bitcoin \u00E8 sulla blockchain \u2014 nulla viene prestato.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Rapporto di riserva Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Fonte: Whitepaper di Bitcoin \u2192",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fondo assicurativo di 153,9 miliardi di dollari contro 10,82 trilioni di dollari di depositi assicurati (dic. 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Copertura FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Fonte: FDIC Statistics at a Glance \u2192",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Caso di studio",
	"bank-runs::bank_runs_card_svb_source":
		"Fonte: University of Washington School of Law \u2192",
	"bank-runs::bank_runs_card_svb_title":
		"Scopri come si \u00E8 verificata la corsa agli sportelli della Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Prossimo passo",
	"bank-runs::bank_runs_card_wallet_source": "Inizia qui \u2192",
	"bank-runs::bank_runs_card_wallet_title":
		"Scopri come ottenere il tuo wallet Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"L'assicurazione FDIC copre solo circa l'1% dei depositi",
	"bank-runs::bank_runs_fdic_p1":
		"L'assicurazione FDIC protegge i depositi fino a 250.000 dollari per depositante. Ma quel fondo assicurativo \u00E8 minuscolo rispetto ai depositi totali che dovrebbe proteggere.",
	"bank-runs::bank_runs_fdic_p2_a":
		"In un fallimento bancario su larga scala, il governo probabilmente stamperebbe denaro per coprire il divario \u2014 risultando in pi\u00F9",
	"bank-runs::bank_runs_fdic_p2_link": "inflazione.",
	"bank-runs::bank_runs_header":
		"Bitcoin non ha corse agli sportelli, ma la tua banca s\u00EC.",
	"bank-runs::bank_runs_page_description":
		"Le banche prestano i tuoi depositi sotto un sistema bancario a riserva frazionaria. Se troppe persone prelevano in una sola volta, le banche possono fallire. Bitcoin \u00E8 un sistema a riserva piena \u2014 le corse agli sportelli sono impossibili.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: un esempio reale",
	"bank-runs::bank_runs_svb_p1_a":
		"Nel marzo 2023, la Silicon Valley Bank \u00E8 fallita dopo aver investito i depositi dei clienti in",
	"bank-runs::bank_runs_svb_p1_b":
		"Quando quei titoli hanno perso valore, SVB non ha potuto coprire i prelievi. La banca \u00E8 collassata.",
	"bank-runs::bank_runs_svb_p1_link": "titoli di Stato a lungo termine.",
	"bank-runs::bank_runs_svb_p2":
		"Migliaia di aziende non hanno potuto pagare i loro dipendenti. La FDIC \u00E8 intervenuta \u2014 ma ha sollevato una domanda pi\u00F9 grande: i tuoi soldi sono davvero al sicuro?",
	"bank-runs::bank_runs_what_p1":
		"Le banche non tengono i tuoi depositi in un caveau. Prestano e investono i tuoi soldi \u2014 si chiama riserva frazionaria.",
	"bank-runs::bank_runs_what_p2":
		"Se troppe persone cercano di prelevare contemporaneamente, la banca non ha abbastanza contanti per pagare tutti. Questa \u00E8 una corsa agli sportelli \u2014 e pu\u00F2 far crollare completamente la banca.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">Banche</span>',
	"bitcoin-vs-banks::point_1_summary_1":
		"Chiunque abbia una connessione internet pu\u00F2 usare Bitcoin \u2014 \u00E8",
	"bitcoin-vs-banks::point_1_summary_2": "senza permessi.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Le banche possono rifiutare, congelare o chiudere conti in base a politiche o regole governative.",
	"bitcoin-vs-banks::point_2_summary_1":
		"La rete Bitcoin funziona 24/7/365 senza finestre di manutenzione o festivit\u00E0. Le banche hanno orari limitati, chiudono nei weekend e hanno periodi di inattivit\u00E0.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Ogni transazione Bitcoin si trova su una blockchain pubblica che chiunque pu\u00F2 verificare. Le banche tengono libri contabili privati che i clienti non possono verificare in modo indipendente.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Con Bitcoin, custodisci personalmente le tue chiavi private \u2014 vedi la nostra guida semplice ai",
	"bitcoin-vs-banks::point_4_summary_2": "wallet Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Le banche custodiscono i tuoi soldi e possono congelarli, limitarli o trattenerli in qualsiasi momento.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Le commissioni Bitcoin sono trasparenti e prevedibili. Le banche accumulano commissioni nascoste per conti, scoperti, bonifici e bancomat nel tempo.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin ti consente di spendere solo ci\u00F2 che possiedi davvero. Le banche permettono lo scoperto, poi addebitano penali su penali per quel privilegio.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Una volta trasmessa, una transazione Bitcoin non pu\u00F2 essere fermata o annullata. Le banche possono bloccare, congelare o annullare transazioni in base a politiche o ordini governativi.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">Obbligazioni</span>',
	"bitcoin-vs-bonds::point_1_summary_1":
		"Le obbligazioni sono \"prive di rischio\" solo nominalmente \u2014 inflazione, movimenti dei tassi e rischio di default erodono tutti i rendimenti reali.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin ha una volatilit\u00E0 trasparente ma nessun rischio di controparte nascosto.",
	"bitcoin-vs-bonds::point_2_summary_1": "Quando l'",
	"bitcoin-vs-bonds::point_2_summary_2": "inflazione",
	"bitcoin-vs-bonds::point_2_summary_3":
		"supera i rendimenti obbligazionari, gli obbligazionisti perdono potere d'acquisto reale ogni anno. Il limite di 21 milioni di Bitcoin non pu\u00F2 essere inflazionato.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"I mercati obbligazionari possono congelarsi durante una crisi \u2014 la Silicon Valley Bank \u00E8 collassata in parte perch\u00E9 era bloccata su obbligazioni che perdevano valore. Vedi come avvengono le",
	"bitcoin-vs-bonds::point_3_summary_2": "corse agli sportelli",
	"bitcoin-vs-bonds::point_3_summary_3":
		"e perch\u00E9 Bitcoin le evita. Bitcoin viene scambiato 24/7 a livello globale senza crisi di liquidit\u00E0.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Le aste del Tesoro possono fallire quando non ci sono abbastanza acquirenti \u2014 vedi le",
	"bitcoin-vs-bonds::point_4_summary_2": "aste deboli del 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Il prezzo di Bitcoin viene scoperto continuamente sul mercato aperto senza un'asta centrale che pu\u00F2 fallire.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"I rendimenti obbligazionari sono fissati al momento dell'acquisto. Anche se l'economia esplode o la valuta crolla, il tuo rendimento rimane lo stesso.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ha spazio per un apprezzamento significativo man mano che l'adozione cresce e la domanda incontra l'offerta fissa.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"La maggior parte delle obbligazioni \u00E8 detenuta tramite banche o broker, aggiungendo rischio di controparte. Bitcoin pu\u00F2 essere autocustodito con un",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" \u2014 eliminando completamente quel rischio.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Le obbligazioni dipendono interamente dal fatto che i governi le ripaghino. Se un governo va in default o inflaziona il suo debito, gli obbligazionisti perdono.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin opera indipendentemente da qualsiasi governo o autorit\u00E0 politica.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e i <span class="asset">Contanti</span>',
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin si muove via internet ovunque in pochi minuti. I contanti richiedono presenza fisica o un corriere fidato \u2014 non puoi inviare via email 20 dollari in contanti.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funziona allo stesso modo ovunque. I contanti sono limitati dalla geografia, dai tassi di cambio e dall'accettazione locale.",
	"bitcoin-vs-cash::point_3_summary_1":
		'I governi possono annullare i contanti dall\'oggi al domani \u2014 l\'<a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">India</a> lo ha fatto nel 2016. Anche senza demonetizzazione, i contanti perdono valore a causa dell\'',
	"bitcoin-vs-cash::point_3_summary_2": "inflazione.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin non pu\u00F2 essere annullato da alcun governo o autorit\u00E0.",
	"bitcoin-vs-cash::point_4_summary_1":
		"I contanti possono essere falsificati, a volte in modo molto convincente. Bitcoin usa la crittografia che rende la falsificazione matematicamente impossibile.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin non ha un'autorit\u00E0 centrale. I contanti sono emessi dai governi che possono stamparne di pi\u00F9, cambiare i disegni o annullare le banconote a piacimento.",
	"bitcoin-vs-cash::point_6_summary_1":
		"I contanti sono vulnerabili a furti, incendi, perdite e confisca. Bitcoin pu\u00F2 essere",
	"bitcoin-vs-cash::point_6_summary_2": "autocustodito",
	"bitcoin-vs-cash::point_6_summary_3":
		"in sicurezza su un telefono o un dispositivo hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin si divide in 100 milioni di satoshi, consentendo micropagamenti di qualsiasi dimensione. I contanti hanno una denominazione minima \u2014 non puoi dividere un centesimo.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">CBDC</span>',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin \u00E8 la rete di computing pi\u00F9 sicura mai costruita e non \u00E8 mai stata violata. Le CBDC si affidano a banche e governi che sono stati violati molte volte.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nessuno pu\u00F2 fermarti dal transare con Bitcoin. Le CBDC sono progettate in modo che i governi e le banche centrali possano controllare ogni pagamento, limitando la tua privacy e libert\u00E0.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin non scade mai e non ha commissioni mensili. Le CBDC possono essere programmate per scadere, impedendoti di risparmiare per il futuro.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin ha un limite rigido di 21 milioni di BTC. Le CBDC non hanno limiti di offerta, consentendo ai governi di espandere il denaro a piacimento \u2014 il che porta all'",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflazione.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Gli indirizzi Bitcoin non sono legati alla tua identit\u00E0 reale. Le CBDC sono direttamente collegate a un'identificazione governativa, consentendo sorveglianza finanziaria di massa e censura.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Le regole di Bitcoin sono convalidate da decine di migliaia di nodi indipendenti. Le CBDC sono centralizzate nelle mani di governi e banche centrali, che hanno il controllo completo della rete.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Chiunque pu\u00F2 eseguire un nodo Bitcoin per verificare le regole della rete. Le CBDC non consentono agli utenti di eseguire nodi \u2014 devi fidarti dell'autorit\u00E0 centrale.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin autocustodito non pu\u00F2 essere congelato da nessuno. Le CBDC sono progettate in modo che i governi e le banche centrali possano congelare i conti istantaneamente.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin ti d\u00E0 pieno controllo del tuo denaro quando lo autocustodisci con un",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Le CBDC richiedono di affidare il tuo denaro a un custode come una banca o un governo.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"La politica monetaria di Bitcoin \u00E8 fissata nel codice e non pu\u00F2 essere modificata. Le CBDC possono essere riprogrammate a piacimento dai politici, causando",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflazione",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" quando viene stampato troppo denaro.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile",
	"bitcoin-vs-crypto::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">Crypto</span>',
	"bitcoin-vs-crypto::point_1_summary_1":
		"Il protocollo Bitcoin \u00E8 rimasto fondamentalmente lo stesso dal 2009, fornendo regole prevedibili. La maggior parte dei progetti crypto cambia continuamente protocolli, tokenomics o si dirama in nuove versioni.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin gira su decine di migliaia di nodi indipendenti in tutto il mondo. La maggior parte dei progetti crypto \u00E8 controllata da fondazioni, aziende o piccoli team di sviluppatori che possono apportare modifiche unilaterali.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin ha un limite rigido di 21 milioni di monete \u2014 l'asset digitale pi\u00F9 scarso. La maggior parte dei progetti crypto ha un'offerta illimitata o meccanismi per coniare nuovi token a piacimento, diluendo i possessori.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin ha uno scopo: denaro digitale peer-to-peer. Chiunque pu\u00F2 capirlo e usarlo. La maggior parte delle crypto coinvolge complessi smart contract o DeFi che richiedono competenze tecniche per essere usati in sicurezza.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"La Proof of Work di Bitcoin funziona senza un attacco riuscito sulla rete principale da pi\u00F9 di 15 anni. La maggior parte dei progetti crypto utilizza meccanismi di consenso sperimentali e non testati sul campo.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin \u00E8 denaro digitale \u2014 una riserva di valore e un mezzo di scambio. La maggior parte dei token crypto sono token di utilit\u00E0 o governance speculativi con valore reale poco chiaro.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin diventa pi\u00F9 forte sotto attacco e ha resistito a ogni crisi, divieto e critica. La maggior parte dei progetti crypto crolla sotto pressione regolamentare, tecnica o di mercato.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin non ha CEO, nessuna azienda, nessun singolo punto di fallimento. La maggior parte dei progetti crypto dipende da VC, leadership specifica o dalla sopravvivenza di una singola azienda.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">Belle Arti</span>',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Ogni Bitcoin \u00E8 identico e fungibile. Ogni opera d'arte \u00E8 unica \u2014 creazione, storia, condizioni e provenienza diverse rendono i confronti diretti incredibilmente difficili.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin viene scambiato 24/7 su mercati globali accessibili a chiunque. Le belle arti richiedono case d'asta specializzate, dealer privati o gallerie e possono richiedere mesi per essere vendute.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Comprare o vendere Bitcoin costa meno dell'1%, spesso molto meno. Le vendite d'arte accumulano commissioni del 30\u201340% in premi del compratore, commissioni, assicurazioni, trasporto e costi di autenticazione.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin si divide in 100 milioni di satoshi, perfetti per transazioni di qualsiasi dimensione. Non puoi possedere parte di un dipinto o l'angolo di una scultura senza rischio di controparte.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"La propriet\u00E0 e l'autenticit\u00E0 di Bitcoin possono essere verificate crittograficamente da chiunque sulla blockchain. L'autenticazione dell'arte \u00E8 costosa, lenta e ancora regolarmente ingannata dai falsari \u2014 distruggendo il valore di un'opera d'arte dall'oggi al domani.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin correttamente backuppato sopravvive ad alluvioni, incendi, terremoti e furti. Le belle arti sono vulnerabili a ogni forma di danno fisico, e l'assicurazione raramente copre tutto.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Chiunque abbia una connessione internet e un po' di soldi pu\u00F2 comprare Bitcoin. L'investimento nelle belle arti \u00E8 di fatto limitato a collezionisti facoltosi con accesso alle aste e conoscenze specializzate.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e l\'<span class="asset">Oro</span>',
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin pu\u00F2 essere inviato istantaneamente via internet a basso costo. L'oro deve essere spedito fisicamente per trasferire la propriet\u00E0.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin \u00E8 un asset nativamente digitale che puoi trasferire via internet. L'oro online \u00E8 un IOU digitale \u2014 possiedi solo una promessa di un custode, non il metallo stesso.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin ha un limite rigido di 21 milioni di BTC. L\'offerta di oro cresce di circa <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1,6% all\'anno</a>, riducendo la tua quota \u2014 meno dell\'',
	"bitcoin-vs-gold::point_3_summary_2": "inflazione",
	"bitcoin-vs-gold::point_3_summary_3":
		"fiat \u2014 ma comunque inflazione.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Quando il prezzo dell'oro sale, viene estratto pi\u00F9 oro, spingendo il prezzo verso il basso. L'offerta di Bitcoin \u00E8 anelastica \u2014 non importa quanto alto sia il prezzo, ce ne saranno sempre solo 21 milioni.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Decine di migliaia di nodi indipendenti convalidano la rete Bitcoin. La maggior parte dell'oro fisico si trova in una manciata di grandi caveau di custodi.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Chiunque pu\u00F2 verificare il vero Bitcoin eseguendo un full node \u2014 \u00E8 solo un'app. Verificare l'oro fisico richiede di fonderlo; l'interno potrebbe essere tungsteno.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin si divide in 100 milioni di satoshi, perfetti per acquisti di qualsiasi dimensione. L'oro non pu\u00F2 essere facilmente diviso per piccole transazioni.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e gli <span class="asset">Immobili</span>',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin si muove ovunque nel mondo istantaneamente. Gli immobili sono legati a una posizione e esposti a rischi economici, politici e naturali locali.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin si divide in 100 milioni di satoshi. Gli immobili non possono essere venduti parzialmente \u2014 non puoi cedere solo la cucina o comprare met\u00E0 camera da letto.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin opera su una rete decentralizzata che nessun governo pu\u00F2 controllare. Gli immobili sono fortemente regolamentati \u2014 zonizzazione, controllo degli affitti, esproprio e confisca si applicano tutti.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin non richiede manutenzione. Gli immobili richiedono riparazioni, ristrutturazioni, assicurazioni, gestione della propriet\u00E0 e questioni con gli inquilini.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin non ha tasse continue \u2014 paghi solo plusvalenze quando vendi. Gli immobili devono pagare tasse di propriet\u00E0 annuali indipendentemente dal reddito.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin correttamente backuppato sopravvive a incendi, alluvioni e terremoti. Gli immobili sono vulnerabili a ogni disastro, e l'assicurazione raramente copre tutto.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Ogni Bitcoin \u00E8 identico e fungibile. Ogni propriet\u00E0 \u00E8 unica, rendendo difficili prezzi e confronti.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin viene scambiato a livello globale 24/7 da chiunque abbia accesso a internet. Le vendite immobiliari sono limitate ai compratori locali e possono richiedere mesi di pratiche burocratiche.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin permette propriet\u00E0 individuale diretta a chiunque. Comprare immobili come investimento oltre la propria residenza primaria spinge i prezzi delle case verso l'alto, riducendo l'accessibilit\u00E0 e alimentando crisi abitative.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e le <span class="asset">Azioni</span>',
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin \u00E8 un asset diretto che possiedi completamente. Le azioni sono frazioni di un'azienda \u2014 il loro valore dipende dal management, dalle performance e da decisioni che non puoi controllare.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin ha un limite rigido di 21 milioni di BTC. Le aziende possono emettere nuove azioni in qualsiasi momento, diluendo gli azionisti esistenti \u2014 simile a come l'",
	"bitcoin-vs-stocks::point_2_summary_2": "inflazione",
	"bitcoin-vs-stocks::point_2_summary_3":
		" fiat diluisce il contante. Con Bitcoin, la tua quota non si restringe mai.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin non ha CEO e nessun singolo punto di fallimento. Le azioni dipendono fortemente dalla leadership \u2014 una decisione sbagliata o una partenza pu\u00F2 far crollare il prezzo.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Il prezzo di Bitcoin viene da un mercato globale aperto. Le valutazioni delle azioni si basano su metriche come il rapporto P/E che possono nascondere azioni sopravvalutate.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin viene scambiato 24/7 in tutto il mondo. I mercati azionari aprono solo durante l'orario lavorativo nei giorni feriali.",
	"bitcoin-vs-stocks::point_6_summary_1": "Puoi",
	"bitcoin-vs-stocks::point_6_summary_2": "autocustodire",
	"bitcoin-vs-stocks::point_6_summary_3":
		"Bitcoin con un'app semplice \u2014 nessun broker richiesto. Le azioni risiedono presso broker, esponendoti al rischio di controparte se falliscono.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"L'offerta fissa di Bitcoin lo rende una copertura affidabile contro l'inflazione. Alcune azioni battono l'inflazione, altre no \u2014 nessuna garanzia.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'La differenza tra <span class="orange">Bitcoin</span> e <span class="asset">Visa</span>',
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin \u00E8 una rete aperta a cui chiunque pu\u00F2 unirsi e che pu\u00F2 usare senza permesso. Visa \u00E8 un sistema chiuso controllato da istituzioni finanziarie che possono negare l'accesso \u2014 specialmente a chi non ha o non \u00E8 servito da una banca.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Le transazioni Bitcoin non hanno commissioni per i commercianti. Visa addebita tipicamente circa il 3% per transazione ai commercianti \u2014 la tua azienda pu\u00F2 risparmiare denaro accettando",
	"bitcoin-vs-visa::point_2_summary_2": "pagamenti Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " invece.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Ogni transazione Bitcoin si trova su una blockchain pubblica verificabile. Visa gestisce un sistema chiuso e proprietario in cui i clienti non possono verificare nulla in modo indipendente.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin non pu\u00F2 essere congelato da alcuna autorit\u00E0 centrale. Visa pu\u00F2 congelare conti, bloccare transazioni o negare il servizio in qualsiasi momento.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin \u00E8 regolamento finale \u2014 puoi spendere solo ci\u00F2 che possiedi. Le carte di credito creano debito con tassi di interesse spesso superiori al 25% all'anno.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin ti permette di prendere",
	"bitcoin-vs-visa::point_6_summary_2": "l'autocustodia",
	"bitcoin-vs-visa::point_6_summary_3":
		"senza bisogno di una banca o di un processore di pagamento. Le carte di credito richiedono sempre intermediari.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funziona 24/7 a livello globale senza orari di lavoro. Visa ha orari operativi, finestre di manutenzione e restrizioni geografiche che possono bloccare le transazioni.",
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
		`translate-rest-part1 (it): filled ${filled}, already-done ${skipped}`,
	);
}

main();
