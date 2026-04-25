#!/usr/bin/env node
/**
 * Italian (it) manifest refresh — inflation namespace translator.
 *
 * Italian conventions:
 * - Latin script with diacritics (à, è, é, ì, ò, ù).
 * - "Bitcoin" stays as "Bitcoin".
 * - Decimal: comma; thousands: dot. Card numerics keep the FRED US-style
 *   formatting because they're rendered raw.
 * - "21 milioni di Bitcoin", "miliardi", "trilioni".
 * - Style: friendly second-person ("tu") for educational copy, the
 *   standard register for bitcoin.rocks Italian copy.
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

/* ─────────────── Per-currency labels & terms ─────────────── */
//  inIn   = "in <currency>"  (in <valuta>)
//  noun   = singular currency noun
//  nounPl = plural currency noun
//  label  = stat card label
//  existenceTitle = "<currency> in circulation"
//  debtTitle = "Total <country> government debt"

const CURRENCY = {
	usd: {
		inIn: "in dollari USA",
		noun: "dollaro USA",
		nounPl: "dollari USA",
		label: "Dollari USA",
		existenceTitle: "Dollari USA in circolazione",
		debtTitle: "Debito pubblico totale degli Stati Uniti",
	},
	eur: {
		inIn: "in euro",
		noun: "euro",
		nounPl: "euro",
		label: "Euro",
		existenceTitle: "Euro in circolazione",
		debtTitle: "Debito pubblico totale dell'eurozona",
	},
	aud: {
		inIn: "in dollari australiani",
		noun: "dollaro australiano",
		nounPl: "dollari australiani",
		label: "Dollari australiani",
		existenceTitle: "Dollari australiani in circolazione",
		debtTitle: "Debito pubblico totale dell'Australia",
	},
	brl: {
		inIn: "in real brasiliani",
		noun: "real brasiliano",
		nounPl: "real brasiliani",
		label: "Real brasiliani",
		existenceTitle: "Real brasiliani in circolazione",
		debtTitle: "Debito pubblico totale del Brasile",
	},
	cad: {
		inIn: "in dollari canadesi",
		noun: "dollaro canadese",
		nounPl: "dollari canadesi",
		label: "Dollari canadesi",
		existenceTitle: "Dollari canadesi in circolazione",
		debtTitle: "Debito pubblico totale del Canada",
	},
	gbp: {
		inIn: "in sterline britanniche",
		noun: "sterlina",
		nounPl: "sterline",
		label: "Sterline britanniche",
		existenceTitle: "Sterline britanniche in circolazione",
		debtTitle: "Debito pubblico totale del Regno Unito",
	},
	ils: {
		inIn: "in shekel israeliani",
		noun: "shekel",
		nounPl: "shekel",
		label: "Shekel israeliani",
		existenceTitle: "Shekel israeliani in circolazione",
		debtTitle: "Debito pubblico totale di Israele",
	},
	inr: {
		inIn: "in rupie indiane",
		noun: "rupia",
		nounPl: "rupie",
		label: "Rupie indiane",
		existenceTitle: "Rupie indiane in circolazione",
		debtTitle: "Debito pubblico totale dell'India",
	},
	jpy: {
		inIn: "in yen giapponesi",
		noun: "yen",
		nounPl: "yen",
		label: "Yen giapponesi",
		existenceTitle: "Yen giapponesi in circolazione",
		debtTitle: "Debito pubblico totale del Giappone",
	},
	mxn: {
		inIn: "in pesos messicani",
		noun: "peso messicano",
		nounPl: "pesos messicani",
		label: "Pesos messicani",
		existenceTitle: "Pesos messicani in circolazione",
		debtTitle: "Debito pubblico totale del Messico",
	},
	nzd: {
		inIn: "in dollari neozelandesi",
		noun: "dollaro neozelandese",
		nounPl: "dollari neozelandesi",
		label: "Dollari neozelandesi",
		existenceTitle: "Dollari neozelandesi in circolazione",
		debtTitle: "Debito pubblico totale della Nuova Zelanda",
	},
	php: {
		inIn: "in pesos filippini",
		noun: "peso filippino",
		nounPl: "pesos filippini",
		label: "Pesos filippini",
		existenceTitle: "Pesos filippini in circolazione",
		debtTitle: "Debito pubblico totale delle Filippine",
	},
	thb: {
		inIn: "in baht thailandesi",
		noun: "baht",
		nounPl: "baht",
		label: "Baht thailandesi",
		existenceTitle: "Baht thailandesi in circolazione",
		debtTitle: "Debito pubblico totale della Thailandia",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Se risparmi ${c.inIn}, potresti aver notato che il tuo denaro compra meno. Ti servono pi\u00F9 ${c.nounPl} per acquistare le stesse cose. Ti servono pi\u00F9 ${c.nounPl} solo per mantenere lo stesso tenore di vita.`;
		case "intro_2":
			return `Ma non deve essere cos\u00EC.`;
		case "intro_highlight":
			return `La vita \u00E8 diventata pi\u00F9 economica per chi ha risparmiato in Bitcoin negli ultimi 4 anni.`;
		case "proof_h2":
			return `Ecco la prova: il tuo denaro continua a perdere valore`;
		case "proof_p1":
			return `Ogni ${c.noun} che hai sul conto in banca perde valore anno dopo anno. Questo accade perch\u00E9 non c'\u00E8 limite a quanti ${c.nounPl} possono essere creati.`;
		case "proof_p2":
			return `Questa offerta illimitata \u00E8 la causa principale dell'inflazione. Negli ultimi anni, la quantit\u00E0 di ${c.nounPl} in circolazione \u00E8 aumentata in modo drammatico.`;
		case "proof_p3":
			return `Quando si stampa pi\u00F9 denaro dal nulla, tutto diventa pi\u00F9 costoso. Comprese le materie prime che le aziende acquistano per realizzare i prodotti, il che significa prezzi pi\u00F9 alti per te.`;
		case "proof_p4":
			return `Man mano che il debito pubblico aumenta, i governi stampano pi\u00F9 denaro perch\u00E9 sempre meno persone sono disposte a prestare soldi al governo.`;
		case "proof_p5_before":
			return `Se non puoi prendere a prestito, non puoi spendere. Ma quando il governo`;
		case "proof_p5_link":
			return `non pu\u00F2 prendere a prestito`;
		case "proof_p5_after":
			return `, semplicemente stampa pi\u00F9 denaro.`;
		case "proof_p6":
			return `Pi\u00F9 debito pubblico significa pi\u00F9 stampa di denaro. Pi\u00F9 stampa di denaro significa pi\u00F9 inflazione. E non se ne vede la fine.`;
		case "btc_h2":
			return `Bitcoin non ha inflazione`;
		case "btc_p1":
			return `Inflazione significa che il tuo denaro compra meno nel tempo. Bitcoin \u00E8 un denaro migliore perch\u00E9 non ha inflazione.`;
		case "btc_p2_before":
			return `${c.label} hanno un'offerta illimitata, il che significa che se ne possono sempre stampare di pi\u00F9.`;
		case "btc_p2_link":
			return `Bitcoin \u00E8 scarso`;
		case "btc_p2_after":
			return `, perch\u00E9 la sua offerta massima \u00E8 di 21 milioni di Bitcoin. Nessuno pu\u00F2 stampare pi\u00F9 Bitcoin.`;
		case "btc_p3":
			return `Storicamente, Bitcoin ha aumentato il suo potere d'acquisto nel tempo, mentre ${c.label.toLowerCase()} hanno perso il loro. Molte persone usano Bitcoin come conto di risparmio a lungo termine \u2014 denaro che mettono da parte intatto per anni mentre il suo valore cresce.`;
		case "btc_p4":
			return `Cosa preferiresti: risparmiare ${c.inIn} \u2014 ${c.nounPl} che comprano meno nel tempo \u2014 o risparmiare in Bitcoin, che storicamente compra di pi\u00F9 nel tempo?`;
		case "freedom_h2":
			return `Bitcoin \u00E8 anche uno strumento di libert\u00E0`;
		case "freedom_p1":
			return `La rete Bitcoin non appartiene a nessuno. Nessun governo o azienda la controlla. \u00C8 costruita per proteggere la tua libert\u00E0 e il tuo denaro.`;
		case "freedom_p2":
			return `Oggi, persone in tutto il mondo usano Bitcoin per proteggere la propria libert\u00E0 \u2014 anche quando i loro governi non aiutano o cercano di fermarle.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Potere d'acquisto perso in 4 anni";
		case "stat_source_bpr":
			return "Fonte: Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Scopri di pi\u00F9 \u2192",
	inflation_freedom_scarce_title: "Scarso",
	inflation_freedom_scarce_desc:
		"Non ci saranno mai pi\u00F9 di 21 milioni di Bitcoin. Nessuno pu\u00F2 stamparne di pi\u00F9.",
	inflation_freedom_decentralized_title: "Decentralizzato",
	inflation_freedom_decentralized_desc:
		"Nessuna entit\u00E0 \u2014 nessun governo, nessuna azienda \u2014 controlla Bitcoin.",
	inflation_freedom_permissionless_title: "Senza permessi",
	inflation_freedom_permissionless_desc:
		"Chiunque, ovunque, pu\u00F2 unirsi alla rete. Nessuno pu\u00F2 fermarti.",
	inflation_freedom_sovereign_title: "Sovrano",
	inflation_freedom_sovereign_desc:
		"Un nuovo sistema, indipendente dai politici e dalle loro promesse infrante.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 milioni",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Fissi per sempre",
	inflation_stat_bitcoin_source: "Fonte: Whitepaper di Bitcoin \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "OGGI",
	inflation_stat_currency_counting: "E continuano a salire...",
	inflation_stat_currency_detail_4yr_lost:
		"Potere d'acquisto perso in 4 anni",
	inflation_stat_currency_source_cpi: "Fonte: FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"Fonte: Debito pubblico FRED \u2192",
	inflation_stat_currency_source_m1:
		"Fonte: Offerta monetaria ristretta FRED \u2192",
	inflation_stat_currency_source_m1_short: "Fonte: FRED \u2192",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr:
		"Potere d'acquisto guadagnato in 4 anni",
	inflation_stat_btc_source_bpr: "Fonte: Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"I lavoratori hanno usato Bitcoin per accedere ai loro soldi dopo che i loro conti bancari sono stati congelati.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"I manifestanti hanno usato Bitcoin per finanziare il loro movimento dopo che le banche li avevano tagliati fuori.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Il mining di Bitcoin sta ripulendo i rifiuti di carbone che il governo si \u00E8 rifiutato di gestire.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Il mining di Bitcoin ha contribuito a tenere accese le luci durante le grandi tempeste.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report \u2014 grafico delle performance a 4 anni (tutte le valute)",
	sources_bitcoin_source_code:
		"Codice sorgente di Bitcoin \u2014 Limite di offerta di 21 milioni",
	sources_canadian_trucker:
		"Proteste dei camionisti canadesi \u2014 Bitcoin usato per aggirare i conti bancari congelati (YouTube)",
	sources_mempool_space:
		"Mempool.space \u2014 Dati su offerta e mining di Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa \u2014 Come Bitcoin ha alimentato le proteste nigeriane EndSARS",
	sources_pennsylvania_mining:
		"Il mining di Bitcoin in Pennsylvania ricicla i rifiuti di metano (YouTube)",
	sources_texas_mining:
		"Il mining di Bitcoin in Texas e la rete elettrica (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin non ha inflazione, ma il tuo denaro s\u00EC.",
	inflation_choose: "Scegli la tua valuta per vedere la prova",
	inflation_choose_another: "\u2190 Scegli un'altra valuta",
	inflation_sticker_learn:
		"Scopri come Bitcoin pu\u00F2 aiutarti.",
	inflation_sticker_lets_find_out: "Scopriamolo.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (it): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
