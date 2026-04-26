#!/usr/bin/env node
/**
 * Lithuanian (lt) manifest refresh — inflation namespace translator.
 *
 * Lithuanian conventions:
 * - Latin script with diacritics (ą č ę ė į š ų ū ž).
 * - Formal 2nd-person plural "jūs/jūsų" — standard register for
 *   educational/financial copy.
 * - "Bitcoin" stays as "Bitcoin".
 * - Decimal: comma. Thousands: full stop / non-breaking space; we keep
 *   US-formatted dataset values where the cards display raw FRED
 *   figures, since they are formatted at render time.
 * - Number forms: 21 milijonas (sg, ends in 1), 21 milijonai BTC?
 *   Lithuanian: "21 milijonas" (because 21 ends in 1, uses nom sg).
 *   For "21 million BTC" — "21 milijonas BTC" (formal/cardinal).
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
	"lt.json",
);

/* ─────────────── Per-currency labels & terms ───────────────
 * inPhrase: instrumental form for "save in X" (no preposition).
 * genPlural: genitive plural for "more of X" / "X amount".
 * nomPlural: nominative plural for "X are losing value".
 */

const CURRENCY = {
	usd: {
		inPhrase: "amerikiečių doleriais",
		nomPlural: "amerikiečių doleriai",
		genPlural: "amerikiečių dolerių",
		label: "Amerikiečių doleris",
		existenceTitle: "Apyvartoje esantys amerikiečių doleriai",
		debtTitle: "Bendra JAV vyriausybės skola",
	},
	eur: {
		inPhrase: "eurais",
		nomPlural: "eurai",
		genPlural: "eurų",
		label: "Euras",
		existenceTitle: "Apyvartoje esantys eurai",
		debtTitle: "Bendra euro zonos vyriausybių skola",
	},
	aud: {
		inPhrase: "Australijos doleriais",
		nomPlural: "Australijos doleriai",
		genPlural: "Australijos dolerių",
		label: "Australijos doleris",
		existenceTitle: "Apyvartoje esantys Australijos doleriai",
		debtTitle: "Bendra Australijos vyriausybės skola",
	},
	brl: {
		inPhrase: "Brazilijos realais",
		nomPlural: "Brazilijos realai",
		genPlural: "Brazilijos realų",
		label: "Brazilijos realas",
		existenceTitle: "Apyvartoje esantys Brazilijos realai",
		debtTitle: "Bendra Brazilijos vyriausybės skola",
	},
	cad: {
		inPhrase: "Kanados doleriais",
		nomPlural: "Kanados doleriai",
		genPlural: "Kanados dolerių",
		label: "Kanados doleris",
		existenceTitle: "Apyvartoje esantys Kanados doleriai",
		debtTitle: "Bendra Kanados vyriausybės skola",
	},
	gbp: {
		inPhrase: "svarais sterlingų",
		nomPlural: "Britanijos svarai",
		genPlural: "Britanijos svarų",
		label: "Britanijos svaras",
		existenceTitle: "Apyvartoje esantys Britanijos svarai",
		debtTitle: "Bendra Jungtinės Karalystės vyriausybės skola",
	},
	ils: {
		inPhrase: "Izraelio šekeliais",
		nomPlural: "Izraelio šekeliai",
		genPlural: "Izraelio šekelių",
		label: "Izraelio šekelis",
		existenceTitle: "Apyvartoje esantys Izraelio šekeliai",
		debtTitle: "Bendra Izraelio vyriausybės skola",
	},
	inr: {
		inPhrase: "Indijos rupijomis",
		nomPlural: "Indijos rupijos",
		genPlural: "Indijos rupijų",
		label: "Indijos rupija",
		existenceTitle: "Apyvartoje esančios Indijos rupijos",
		debtTitle: "Bendra Indijos vyriausybės skola",
	},
	jpy: {
		inPhrase: "Japonijos jenomis",
		nomPlural: "Japonijos jenos",
		genPlural: "Japonijos jenų",
		label: "Japonijos jena",
		existenceTitle: "Apyvartoje esančios Japonijos jenos",
		debtTitle: "Bendra Japonijos vyriausybės skola",
	},
	mxn: {
		inPhrase: "Meksikos pesais",
		nomPlural: "Meksikos pesai",
		genPlural: "Meksikos pesų",
		label: "Meksikos pesas",
		existenceTitle: "Apyvartoje esantys Meksikos pesai",
		debtTitle: "Bendra Meksikos vyriausybės skola",
	},
	nzd: {
		inPhrase: "Naujosios Zelandijos doleriais",
		nomPlural: "Naujosios Zelandijos doleriai",
		genPlural: "Naujosios Zelandijos dolerių",
		label: "Naujosios Zelandijos doleris",
		existenceTitle: "Apyvartoje esantys Naujosios Zelandijos doleriai",
		debtTitle: "Bendra Naujosios Zelandijos vyriausybės skola",
	},
	php: {
		inPhrase: "Filipinų pesais",
		nomPlural: "Filipinų pesai",
		genPlural: "Filipinų pesų",
		label: "Filipinų pesas",
		existenceTitle: "Apyvartoje esantys Filipinų pesai",
		debtTitle: "Bendra Filipinų vyriausybės skola",
	},
	thb: {
		inPhrase: "Tailando batais",
		nomPlural: "Tailando batai",
		genPlural: "Tailando batų",
		label: "Tailando batas",
		existenceTitle: "Apyvartoje esantys Tailando batai",
		debtTitle: "Bendra Tailando vyriausybės skola",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Jei taupote ${c.inPhrase}, tikriausiai pastebėjote, kad jūsų pinigai perka vis mažiau. Reikia daugiau ${c.genPlural}, kad nupirktumėte tuos pačius dalykus. Reikia daugiau ${c.genPlural}, kad išlaikytumėte tą patį gyvenimo lygį.`;
		case "intro_2":
			return `Bet taip neturi būti.`;
		case "intro_highlight":
			return `Pastaruosius 4 metus Bitcoin taupiusiems žmonėms gyvenimas tapo pigesnis.`;
		case "proof_h2":
			return `Štai įrodymas: jūsų pinigai praranda vertę`;
		case "proof_p1":
			return `Kiekvienas ${c.label.toLowerCase()} jūsų banko sąskaitoje kasmet perka vis mažiau. Taip nutinka todėl, kad ${c.genPlural}, kuriuos galima sukurti, kiekis nėra ribojamas.`;
		case "proof_p2":
			return `Ši neribota pasiūla yra pagrindinė infliacijos priežastis. Pastaraisiais metais apyvartoje esančių ${c.genPlural} kiekis dramatiškai išaugo.`;
		case "proof_p3":
			return `Kai iš nieko sukuriama daugiau pinigų, viskas brangsta. Taip pat ir žaliavos, kurias įmonės perka gaminti produktams — o tai jums reiškia didesnes kainas.`;
		case "proof_p4":
			return `Augant valstybės skolai, spausdinama vis daugiau pinigų, nes vis mažiau žmonių sutinka skolinti pinigus vyriausybei.`;
		case "proof_p5_before":
			return `Jei negalima skolintis, negalima ir leisti. Bet kai vyriausybė`;
		case "proof_p5_link":
			return `negali skolintis`;
		case "proof_p5_after":
			return `, ji tiesiog atspausdina daugiau pinigų.`;
		case "proof_p6":
			return `Daugiau valstybės skolos reiškia daugiau pinigų spausdinimo. Daugiau pinigų spausdinimo reiškia didesnę infliaciją. Ir to nematyti pabaigos.`;
		case "btc_h2":
			return `Bitcoin neturi infliacijos`;
		case "btc_p1":
			return `Infliacija reiškia, kad jūsų pinigai laikui bėgant perka vis mažiau. Bitcoin yra geresni pinigai, nes jis neturi infliacijos.`;
		case "btc_p2_before":
			return `${c.label} turi neribotą pasiūlą, o tai reiškia, kad visada gali būti spausdinama daugiau.`;
		case "btc_p2_link":
			return `Bitcoin yra retas`;
		case "btc_p2_after":
			return `, nes jo didžiausia pasiūla yra 21 milijonas Bitcoin. Niekas negali sukurti daugiau.`;
		case "btc_p3":
			return `Istoriškai Bitcoin laikui bėgant didino perkamąją galią, o ${c.label.toLowerCase()} ją prarado. Daugelis žmonių naudoja Bitcoin kaip ilgalaikę taupomąją sąskaitą — pinigus, kurių neliečia metų metus, kol jų vertė auga.`;
		case "btc_p4":
			return `Ką jūs verčiau rinktumėtės: taupyti ${c.inPhrase} — ${c.genPlural}, kurie laikui bėgant perka vis mažiau — ar taupyti Bitcoin, kuris istoriškai perka vis daugiau?`;
		case "freedom_h2":
			return `Bitcoin taip pat yra laisvės įrankis`;
		case "freedom_p1":
			return `Bitcoin tinklas niekam nepriklauso. Jo nekontroliuoja jokia vyriausybė ar įmonė. Jis sukurtas tam, kad apsaugotų jūsų laisvę ir jūsų pinigus.`;
		case "freedom_p2":
			return `Žmonės visame pasaulyje šiuo metu naudoja Bitcoin savo laisvei apsaugoti — net kai vyriausybės nenori jiems padėti arba bando juos sustabdyti.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Per 4 metus prarastos perkamosios galios";
		case "stat_source_bpr":
			return "Šaltinis: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Sužinokite daugiau ←",
	inflation_freedom_scarce_title: "Retas",
	inflation_freedom_scarce_desc:
		"Niekada nebus daugiau nei 21 milijonas Bitcoin. Niekas negali atspausdinti daugiau.",
	inflation_freedom_decentralized_title: "Decentralizuotas",
	inflation_freedom_decentralized_desc:
		"Bitcoin nekontroliuoja viena šalis — nei vyriausybė, nei įmonė.",
	inflation_freedom_permissionless_title: "Be leidimo",
	inflation_freedom_permissionless_desc:
		"Bet kas, bet kur gali prisijungti prie tinklo. Niekas negali jūsų sustabdyti.",
	inflation_freedom_sovereign_title: "Suverenus",
	inflation_freedom_sovereign_desc:
		"Nauja sistema, laisva nuo politikų ir jų sulaužytų pažadų.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milijonas",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Fiksuotas amžinai",
	inflation_stat_bitcoin_source: "Šaltinis: Bitcoin baltoji knyga ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Šiandien",
	inflation_stat_currency_counting: "Ir vis dar daugėja...",
	inflation_stat_currency_detail_4yr_lost:
		"Per 4 metus prarastos perkamosios galios",
	inflation_stat_currency_source_cpi: "Šaltinis: FRED CPI ←",
	inflation_stat_currency_source_debt: "Šaltinis: FRED valstybės skola ←",
	inflation_stat_currency_source_m1: "Šaltinis: FRED pinigų pasiūla M1 ←",
	inflation_stat_currency_source_m1_short: "Šaltinis: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Per 4 metus įgytos perkamosios galios",
	inflation_stat_btc_source_bpr: "Šaltinis: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Darbuotojai per Bitcoin atgavo prieigą prie savo pinigų po to, kai jų banko sąskaitos buvo įšaldytos.",
	inflation_story_nigeria_title: "Nigerija",
	inflation_story_nigeria_desc:
		"Protestuotojai naudojo Bitcoin savo judėjimui finansuoti, kai bankai atsisakė su jais bendradarbiauti.",
	inflation_story_pennsylvania_title: "Pensilvanija",
	inflation_story_pennsylvania_desc:
		"Bitcoin kasyba išvalė anglies atliekas, kurių vyriausybė nesirengė tvarkyti.",
	inflation_story_texas_title: "Teksasas",
	inflation_story_texas_desc:
		"Bitcoin kasyba padėjo išlaikyti elektros tinklą per didelę audrą.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 metų grąžos diagrama (visos valiutos)",
	sources_bitcoin_source_code:
		"Bitcoin pirminis kodas — 21 milijono pasiūlos riba",
	sources_canadian_trucker:
		"Kanados sunkvežimių vairuotojų protestas — Bitcoin įšaldytoms banko sąskaitoms apeiti (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin pasiūlos ir kasybos duomenys",
	sources_nigeria_endsars:
		"Quartz Africa — kaip Bitcoin finansavo Nigerijos EndSARS judėjimą",
	sources_pennsylvania_mining:
		"Bitcoin kasyba gelbsti metaną iš anglies atliekų Pensilvanijoje (YouTube)",
	sources_texas_mining:
		"Bitcoin kasyba ir Teksaso elektros tinklas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin neturi infliacijos, bet jūsų pinigai turi.",
	inflation_choose: "Pasirinkite savo valiutą ir pamatykite įrodymus",
	inflation_choose_another: "← Pasirinkite kitą valiutą",
	inflation_sticker_learn: "Sužinokite, kaip Bitcoin gali padėti.",
	inflation_sticker_lets_find_out: "Išsiaiškinkime.",
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
		`translate-inflation (lt): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
