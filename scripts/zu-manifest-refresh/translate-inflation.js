#!/usr/bin/env node
/**
 * Zulu manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
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
	"zu.json",
);

/* ─────────────── Per-currency labels & terms (Zulu) ─────────────── */
//
// isiZulu commonly uses Latin currency names with the "i-" noun-class prefix
// for class-9 nouns (idola, iyuro, ipawundi, ipeso, iyeni, etc.) and "ama-"
// for plural counting. Compounds with country names use the "yase-" possessive
// (idola yase-Melika = "the dollar of America").
//
// For each currency we provide:
//   longName       — locative phrase: "ngama-X" (in/with X — used for saving in)
//   longNameNom    — nominative singular ("the X")
//   nounPlural     — bare plural noun used in counting / generic refs (ama-X)
//   label          — display label for the currency card
//   existenceTitle — "X in existence/circulation"
//   debtTitle      — "Total federal/public debt of …"
//   countryProvince — used in some templates ("…of <country>")

const CURRENCY = {
	usd: {
		longName: "ngamadola ase-Melika",
		longNameNom: "idola lase-Melika",
		nounPlural: "amadola",
		label: "Idola lase-Melika",
		existenceTitle: "Amadola asekhona",
		debtTitle: "Isamba sesikweletu sikahulumeni wase-Melika",
	},
	eur: {
		longName: "ngamayuro",
		longNameNom: "iyuro",
		nounPlural: "amayuro",
		label: "Iyuro",
		existenceTitle: "Amayuro asekhona",
		debtTitle: "Isikweletu somphakathi sezwekazi le-yuro",
	},
	aud: {
		longName: "ngamadola ase-Australia",
		longNameNom: "idola lase-Australia",
		nounPlural: "amadola ase-Australia",
		label: "Idola lase-Australia",
		existenceTitle: "Amadola ase-Australia asekhona",
		debtTitle: "Isikweletu somphakathi sase-Australia",
	},
	brl: {
		longName: "ngamareyali ase-Brazil",
		longNameNom: "ireyali yase-Brazil",
		nounPlural: "amareyali",
		label: "Ireyali yase-Brazil",
		existenceTitle: "Amareyali asekhona",
		debtTitle: "Isikweletu somphakathi sase-Brazil",
	},
	cad: {
		longName: "ngamadola ase-Canada",
		longNameNom: "idola lase-Canada",
		nounPlural: "amadola ase-Canada",
		label: "Idola lase-Canada",
		existenceTitle: "Amadola ase-Canada asekhona",
		debtTitle: "Isikweletu somphakathi sase-Canada",
	},
	gbp: {
		longName: "ngamapawundi ase-Britain",
		longNameNom: "ipawundi lase-Britain",
		nounPlural: "amapawundi",
		label: "Ipawundi lase-Britain",
		existenceTitle: "Amapawundi asekhona",
		debtTitle: "Isikweletu somphakathi sase-United Kingdom",
	},
	ils: {
		longName: "ngamashekeli ase-Israyeli",
		longNameNom: "ishekeli lase-Israyeli",
		nounPlural: "amashekeli",
		label: "Ishekeli lase-Israyeli",
		existenceTitle: "Amashekeli asekhona",
		debtTitle: "Isikweletu somphakathi sase-Israyeli",
	},
	inr: {
		longName: "ngamarupiya ase-India",
		longNameNom: "irupiya yase-India",
		nounPlural: "amarupiya",
		label: "Irupiya yase-India",
		existenceTitle: "Amarupiya asekhona",
		debtTitle: "Isikweletu somphakathi sase-India",
	},
	jpy: {
		longName: "ngamayeni ase-Japan",
		longNameNom: "iyeni lase-Japan",
		nounPlural: "amayeni",
		label: "Iyeni lase-Japan",
		existenceTitle: "Amayeni asekhona",
		debtTitle: "Isikweletu somphakathi sase-Japan",
	},
	mxn: {
		longName: "ngamapeso ase-Mexico",
		longNameNom: "ipeso lase-Mexico",
		nounPlural: "amapeso",
		label: "Ipeso lase-Mexico",
		existenceTitle: "Amapeso ase-Mexico asekhona",
		debtTitle: "Isikweletu somphakathi sase-Mexico",
	},
	nzd: {
		longName: "ngamadola ase-New Zealand",
		longNameNom: "idola lase-New Zealand",
		nounPlural: "amadola ase-New Zealand",
		label: "Idola lase-New Zealand",
		existenceTitle: "Amadola ase-New Zealand asekhona",
		debtTitle: "Isikweletu somphakathi sase-New Zealand",
	},
	php: {
		longName: "ngamapeso ase-Philippines",
		longNameNom: "ipeso lase-Philippines",
		nounPlural: "amapeso",
		label: "Ipeso lase-Philippines",
		existenceTitle: "Amapeso ase-Philippines asekhona",
		debtTitle: "Isikweletu somphakathi sase-Philippines",
	},
	thb: {
		longName: "ngamabhati ase-Thailand",
		longNameNom: "ibhati lase-Thailand",
		nounPlural: "amabhati",
		label: "Ibhati lase-Thailand",
		existenceTitle: "Amabhati asekhona",
		debtTitle: "Isikweletu somphakathi sase-Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) return null;
	switch (suffix) {
		case "intro_1":
			return `Uma ulondoloza ${c.longName}, mhlawumbe usuke wabona ukuthi minyaka yonke athenga okuncane. Udinga ${c.nounPlural} amaningi ukuthenga inani elifanayo lezimpahla. Udinga ${c.nounPlural} amaningi ukuze ulondoloze izinga lakho lokuphila.`;
		case "intro_2":
			return `Kodwa akudingeki kube njalo.`;
		case "intro_highlight":
			return `Eminyakeni emine edlule, abantu abalondoloze nge-Bitcoin babone impilo iya ngokushibha.`;
		case "proof_h2":
			return `Bheka ubufakazi: imali yakho ilahlekelwa yinani`;
		case "proof_p1":
			return `${c.nounPlural} asengaku-akhawunti yakho yasebhange athenga okuncane minyaka yonke. Lokhu kungenxa yokuthi awukho umkhawulo wenani lama-${c.nounPlural} angakhiqizwa.`;
		case "proof_p2":
			return `Ukukhiqizwa okungenamkhawulo yiwona umsuka wenfleshini. Eminyakeni embalwa edlule, isamba sama-${c.nounPlural} asazungeza simbe sikhule kakhulu.`;
		case "proof_p3":
			return `Uma kukhiqizwa imali eyengeziwe ikhona, intengo yakho konke iyenyuka. Lokhu kuhlanganisa nezinto eziyizinsiza ezithengwa amabhizinisi ukukhiqiza izimpahla — okuholela ezintengweni eziphakeme kuwena.`;
		case "proof_p4":
			return `Futhi uma uhulumeni eqhubeka nokwandisa isikweletu sakhe, kukhiqizwa imali eyengeziwe ngoba abantu abambalwa abafuna ukuboleka uhulumeni.`;
		case "proof_p5_before":
			return `Uma ungakwazi ukuthola imboleko, ngeke ukwazi ukuchitha imali. Kodwa uma uhulumeni`;
		case "proof_p5_link":
			return `engakwazi ukuthola imboleko`;
		case "proof_p5_after":
			return `, uvele akhiqize imali.`;
		case "proof_p6":
			return `Isikweletu esikhulu sikahulumeni sisho ukukhiqizwa kwemali okwengeziwe. Ukukhiqizwa kwemali okwengeziwe kusho inkomba enkulu yenfleshini. Futhi alikho uphawu lokuthi luzophela.`;
		case "btc_h2":
			return `I-Bitcoin ayinayo inkomba yenfleshini`;
		case "btc_p1":
			return `Inkomba yenfleshini isho ukuthi imali yakho ithenga okuncane ngokuhamba kwesikhathi. I-Bitcoin yimali engcono ngoba ayinayo inkomba yenfleshini.`;
		case "btc_p2_before":
			return `${c.nounPlural} anokukhiqizwa okungenamkhawulo, okusho ukuthi amaningi angakhiqizwa nganoma yisiphi isikhathi.`;
		case "btc_p2_link":
			return `I-Bitcoin yivelakancane`;
		case "btc_p2_after":
			return `, inomkhawulo oqinile we-21 million Bitcoin. Akekho ongakhiqiza eyeziwe.`;
		case "btc_p3":
			return `Ngokomlando, i-Bitcoin iye yathola amandla okuthenga ngokuhamba kwesikhathi, kanti ${c.longNameNom} kuye kwawalahlekelwa. Abantu abaningi basebenzisa i-Bitcoin njenge-akhawunti yokulondoloza yesikhathi eside — imali abayishiya ikhula iminyaka bengayithinti.`;
		case "btc_p4":
			return `Ungathanda kanjani: ukulondoloza ${c.longName} athenga okuncane ngokuhamba kwesikhathi? Noma ulondoloze nge-Bitcoin, eye yathenga okuningi ngokomlando?`;
		case "freedom_h2":
			return `I-Bitcoin futhi iyithuluzi lenkululeko`;
		case "freedom_p1":
			return `Inethiwekhi ye-Bitcoin ayiphethwe muntu. Ayilawulwa noma yimuphi uhulumeni noma yimuphi inkampani. Yakhelwe ukuvikela inkululeko yakho nemali yakho.`;
		case "freedom_p2":
			return `Abantu emhlabeni wonke sebevele besebenzisa i-Bitcoin ukuvikela inkululeko yabo — ngisho noma ohulumeni babo benqaba ukubasiza noma bezama ukubavimba.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Amandla okuthenga alahlekile eminyakeni engu-4";
		case "stat_source_bpr":
			return "Umthombo: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Funda kabanzi →",
	inflation_freedom_scarce_title: "Yivelakancane",
	inflation_freedom_scarce_desc:
		"Kungaba namaBitcoin ayizigidi eziyi-21 kuphela. Akekho ongakhiqiza eyengeziwe.",
	inflation_freedom_decentralized_title: "Ihlukanisiwe",
	inflation_freedom_decentralized_desc:
		"I-Bitcoin ayilawulwa nguhlangothi olulodwa — futhi nguhulumeni, futhi neyinkampani.",
	inflation_freedom_permissionless_title: "Akudingeki imvume",
	inflation_freedom_permissionless_desc:
		"Noma ubani angajoyina inethiwekhi esuka noma kuphi. Akekho ongakuvimba.",
	inflation_freedom_sovereign_title: "Ozimele",
	inflation_freedom_sovereign_desc:
		"Uhlelo olusha, olukhululekile kosopolitiki nezethembiso zabo ezingafezekiswa.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 million",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Akushintshi naphakade",
	inflation_stat_bitcoin_source: "Umthombo: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Namuhla",
	inflation_stat_currency_counting: "futhi kuyaqhubeka kukhula …",
	inflation_stat_currency_detail_4yr_lost:
		"Amandla okuthenga alahlekile eminyakeni engu-4",
	inflation_stat_currency_source_cpi: "Umthombo: FRED CPI →",
	inflation_stat_currency_source_debt: "Umthombo: isikweletu sikahulumeni se-FRED →",
	inflation_stat_currency_source_m1: "Umthombo: M1 money supply ye-FRED →",
	inflation_stat_currency_source_m1_short: "Umthombo: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Amandla okuthenga atholakele eminyakeni engu-4",
	inflation_stat_btc_source_bpr: "Umthombo: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "I-Canada",
	inflation_story_canada_desc:
		"Abasebenzi bathole imali yabo nge-Bitcoin emva kokuvalwa kwama-akhawunti abo asebhange.",
	inflation_story_nigeria_title: "I-Nigeria",
	inflation_story_nigeria_desc:
		"Ababhikishi baxhase umkhankaso wabo nge-Bitcoin emva kokuthi amabhange enqaba ukubasiza.",
	inflation_story_pennsylvania_title: "I-Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Ukumbiwa kwe-Bitcoin kuhlanze udoti wamalahle uhulumeni angabe esabe ngawo.",
	inflation_story_texas_title: "I-Texas",
	inflation_story_texas_desc:
		"Ukumbiwa kwe-Bitcoin kusize ukugcina uhlelo lwagesi luqhubeka phakathi nesiphepho esikhulu.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — ishadi lokukhula kweminyaka emi-4 (zonke izimali)",
	sources_bitcoin_source_code:
		"Ikhodi yomthombo we-Bitcoin — umkhawulo wokukhiqizwa we-21 million",
	sources_canadian_trucker:
		"Imibhikisho yabashayeli bamaloli base-Canada — i-Bitcoin yasetshenziswa ukweqa ama-akhawunti asebhange avaliwe (YouTube)",
	sources_mempool_space:
		"Mempool.space — idatha yokukhiqizwa nokumbiwa kwe-Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — indlela i-Bitcoin eqhubeza ngayo imibhikisho i-EndSARS e-Nigeria",
	sources_pennsylvania_mining:
		"Ukumbiwa kwe-Bitcoin e-Pennsylvania kuhlanza i-methane edotini wamalahle (YouTube)",
	sources_texas_mining:
		"Ukumbiwa kwe-Bitcoin nohlelo lwagesi lwase-Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "I-Bitcoin ayinayo inkomba yenfleshini, kodwa imali yakho inayo.",
	inflation_choose: "Khetha imali yakho ubone ubufakazi",
	inflation_choose_another: "← Khetha enye imali",
	inflation_sticker_learn: "Funda ngendlela i-Bitcoin engasiza ngayo.",
	inflation_sticker_lets_find_out: "Asibheke.",
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

		// Direct non-currency keys
		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		// Per-currency keys: inflation_stat_<code>_<suffix>
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

		// Per-currency keys: inflation_<code>_<suffix>
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
		`translate-inflation (zu): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
