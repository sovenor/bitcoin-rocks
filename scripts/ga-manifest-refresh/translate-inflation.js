#!/usr/bin/env node
/**
 * Irish (Gaeilge) manifest refresh — inflation namespace translator.
 *
 * Per-currency × 13 currencies + shared non-currency labels / stories /
 * sources / manifest-changed keys.
 *
 * Informal "tú" register throughout (the dominant register in Irish-language
 * educational writing). Numeric format uses Irish convention: comma decimal
 * and period thousands in Ireland follow English-style format, but we
 * preserve currency symbols and numeric values verbatim. Irish nouns take
 * lenition/eclipsis — we keep forms grammatically correct.
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
	"ga.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "dollair Mheiriceá",
		noun: "dollar",
		nounPlural: "dollair",
		label: "Dollar Mheiriceá",
		existenceTitle: "Dollair Mheiriceá i gcúrsaíocht",
		debtTitle: "Fiachas iomlán cónaidhme na SAM",
	},
	eur: {
		longName: "euro",
		noun: "euro",
		nounPlural: "euronna",
		label: "Euro",
		existenceTitle: "Euronna i gcúrsaíocht",
		debtTitle: "Fiachas poiblí an limistéir euro",
	},
	aud: {
		longName: "dollair Astrálacha",
		noun: "dollar Astrálach",
		nounPlural: "dollair Astrálacha",
		label: "Dollar Astrálach",
		existenceTitle: "Dollair Astrálacha i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na hAstráile",
	},
	brl: {
		longName: "realanna Brasaíleacha",
		noun: "real",
		nounPlural: "realanna",
		label: "Real Brasaíleach",
		existenceTitle: "Realanna i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na Brasaíle",
	},
	cad: {
		longName: "dollair Cheanadacha",
		noun: "dollar Ceanadach",
		nounPlural: "dollair Cheanadacha",
		label: "Dollar Ceanadach",
		existenceTitle: "Dollair Cheanadacha i gcúrsaíocht",
		debtTitle: "Fiachas poiblí Cheanada",
	},
	gbp: {
		longName: "punt steirling",
		noun: "punt",
		nounPlural: "puint",
		label: "Punt Steirling",
		existenceTitle: "Puint i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na Ríochta Aontaithe",
	},
	ils: {
		longName: "seicil Iosraelacha",
		noun: "seicil",
		nounPlural: "seicil",
		label: "Seicil Iosraelach",
		existenceTitle: "Seicil i gcúrsaíocht",
		debtTitle: "Fiachas poiblí Iosrael",
	},
	inr: {
		longName: "rúipithe Indiacha",
		noun: "rúipí",
		nounPlural: "rúipithe",
		label: "Rúipí Indiach",
		existenceTitle: "Rúipithe i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na hIndia",
	},
	jpy: {
		longName: "yen Seapánacha",
		noun: "yen",
		nounPlural: "yen",
		label: "Yen Seapánach",
		existenceTitle: "Yen i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na Seapáine",
	},
	mxn: {
		longName: "pesónna Meicsiceacha",
		noun: "pesó",
		nounPlural: "pesónna",
		label: "Pesó Meicsiceach",
		existenceTitle: "Pesónna Meicsiceacha i gcúrsaíocht",
		debtTitle: "Fiachas poiblí Mheicsiceo",
	},
	nzd: {
		longName: "dollair na Nua-Shéalainne",
		noun: "dollar Nua-Shéalannach",
		nounPlural: "dollair Nua-Shéalannacha",
		label: "Dollar na Nua-Shéalainne",
		existenceTitle: "Dollair na Nua-Shéalainne i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na Nua-Shéalainne",
	},
	php: {
		longName: "pesónna Filipíneacha",
		noun: "pesó",
		nounPlural: "pesónna",
		label: "Pesó Filipíneach",
		existenceTitle: "Pesónna Filipíneacha i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na nOileán Filipíneach",
	},
	thb: {
		longName: "baht Téalannacha",
		noun: "baht",
		nounPlural: "baht",
		label: "Baht Téalannach",
		existenceTitle: "Baht i gcúrsaíocht",
		debtTitle: "Fiachas poiblí na Téalainne",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Má dhéanann tú coigilt i ${c.longName}, is dócha gur thug tú faoi deara go gceannaíonn do chuid airgid níos lú gach bliain. Teastaíonn níos mó ${c.nounPlural} uait chun an méid céanna rudaí a cheannach. Teastaíonn níos mó ${c.nounPlural} uait chun do chaighdeán maireachtála a choimeád.`;
		case "intro_2":
			return `Ach ní gá go mbeadh sé mar sin.`;
		case "intro_highlight":
			return `Le ceithre bliana anuas, tá saol níos saoire ag daoine a dhéanann coigilt in Bitcoin.`;
		case "proof_h2":
			return `Seo an cruthúnas: tá do chuid airgid ag cailleadh luacha`;
		case "proof_p1":
			return `Is féidir le gach ${c.noun} i do chuntas bainc níos lú a cheannach gach bliain. Sin toisc nach bhfuil aon teorainn chrua ar an méid ${c.nounPlural} is féidir a chruthú.`;
		case "proof_p2":
			return `Is é an soláthar gan teorainn seo príomhchúis an bhoilscithe. Le blianta beaga anuas, tá méadú ollmhór tagtha ar líon na ${c.nounPlural} atá i gcúrsaíocht.`;
		case "proof_p3":
			return `Nuair a chruthaítear níos mó airgid as rud ar bith, ardaíonn praghsanna gach rud. Áirítear leis sin na hamhábhair a cheannaíonn gnólachtaí chun a gcuid táirgí a dhéanamh, rud a fhágann praghsanna níos airde duitse.`;
		case "proof_p4":
			return `De réir mar a leanann fiachas poiblí ag méadú, clóbhuailtear níos mó airgid toisc nach bhfuil an oiread céanna daoine sásta iasacht a thabhairt don rialtas.`;
		case "proof_p5_before":
			return `Mura féidir leat airgead a fháil ar iasacht, ní féidir leat é a chaitheamh. Ach nuair nach féidir leis an rialtas`;
		case "proof_p5_link":
			return `iasacht a fháil`;
		case "proof_p5_after":
			return `, clóbhuaileann sé níos mó airgid.`;
		case "proof_p6":
			return `Ciallaíonn níos mó fiachais phoiblí níos mó cruthú airgid. Ciallaíonn níos mó cruthú airgid níos mó boilscithe. Agus níl comhartha ar bith ann go stadfaidh sé.`;
		case "btc_h2":
			return `Níl boilsciú ag Bitcoin`;
		case "btc_p1":
			return `Ciallaíonn boilsciú go gceannaíonn do chuid airgid níos lú le himeacht ama. Is airgead níos fearr é Bitcoin toisc nach bhfuil boilsciú aige.`;
		case "btc_p2_before":
			return `Tá soláthar gan teorainn ag ${c.longName}, rud a chiallaíonn gur féidir níos mó a chlóbhualadh aon uair.`;
		case "btc_p2_link":
			return `Tá Bitcoin gann`;
		case "btc_p2_after":
			return `, le huasteorainn sheasta 21 milliún bitcoin. Ní féidir le duine ar bith níos mó a chruthú.`;
		case "btc_p3":
			return `Go stairiúil, tá cumhacht ceannaigh bainte amach ag Bitcoin le himeacht ama, cé gur chaill ${c.longName} í. Úsáideann go leor daoine Bitcoin mar chuntas coigilte fadtéarmach — airgead a fhágann siad ag fás ar feadh na mblianta gan baint leis.`;
		case "btc_p4":
			return `Ar fearr leat coigilt a dhéanamh i ${c.longName}, a cheannaíonn níos lú le himeacht ama? Nó i Bitcoin, a cheannaíonn níos mó le himeacht ama go stairiúil?`;
		case "freedom_h2":
			return `Is uirlis saoirse é Bitcoin freisin`;
		case "freedom_p1":
			return `Níl duine ar bith i gceannas ar líonra Bitcoin. Níl rialtas ná comhlacht ar bith á rith. Tá sé deartha chun do shaoirse agus do chuid airgid a chosaint.`;
		case "freedom_p2":
			return `Ar fud an domhain, tá daoine cheana féin ag úsáid Bitcoin chun a gcuid saoirse a chosaint — fiú nuair a dhiúltaíonn a gcuid rialtas cuidiú leo nó nuair a dhéanann siad iarracht stop a chur leo.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Cumhacht ceannaigh caillte i 4 bliana";
		case "stat_source_bpr":
			return "Foinse: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Foghlaim tuilleadh →",
	inflation_freedom_scarce_title: "Gann",
	inflation_freedom_scarce_desc:
		"Ní bheidh níos mó ná 21 milliún bitcoin ann choíche. Ní féidir le duine ar bith níos mó a chlóbhualadh.",
	inflation_freedom_decentralized_title: "Díláraithe",
	inflation_freedom_decentralized_desc:
		"Níl Bitcoin á rialú ag aon eintiteas amháin — rialtas ná comhlacht.",
	inflation_freedom_permissionless_title: "Gan chead",
	inflation_freedom_permissionless_desc:
		"Is féidir le duine ar bith, áit ar bith, ceangal leis an líonra. Ní féidir le duine ar bith stop a chur leat.",
	inflation_freedom_sovereign_title: "Ceannasach",
	inflation_freedom_sovereign_desc:
		"Córas nua, neamhspleách ar pholaiteoirí agus ar a gcuid geallúintí briste.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milliún",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Socraithe go deo",
	inflation_stat_bitcoin_source: "Foinse: páipéar bán Bitcoin →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Inniu",
	inflation_stat_currency_counting: "agus ag méadú fós…",
	inflation_stat_currency_detail_4yr_lost:
		"Cumhacht ceannaigh caillte i 4 bliana",
	inflation_stat_currency_source_cpi: "Foinse: FRED CPI →",
	inflation_stat_currency_source_debt: "Foinse: FRED fiachas poiblí →",
	inflation_stat_currency_source_m1: "Foinse: FRED soláthar airgid M1 →",
	inflation_stat_currency_source_m1_short: "Foinse: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Cumhacht ceannaigh gnóthaithe i 4 bliana",
	inflation_stat_btc_source_bpr: "Foinse: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Ceanada",
	inflation_story_canada_desc:
		"Fuair oibrithe rochtain ar a gcuid airgid arís trí Bitcoin, tar éis gur cuireadh reo ar a gcuntais bhainc.",
	inflation_story_nigeria_title: "An Nigéir",
	inflation_story_nigeria_desc:
		"D’úsáid agóideoirí Bitcoin chun a gcuid gluaiseachta a mhaoiniú, tar éis gur dhiúltaigh bainc oibriú leo.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Ghlan mianadóireacht Bitcoin dramhaíl ghuail nach raibh an rialtas sásta a láimhseáil.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Chuidigh mianadóireacht Bitcoin leis an eangach leictreachais a choimeád ag obair le linn stoirme móire.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — cairt feidhmíochta 4 bliana (gach airgead reatha)",
	sources_bitcoin_source_code:
		"Cód foinseach Bitcoin — an t-uasteorainn soláthair 21 milliún",
	sources_canadian_trucker:
		"Agóid tiománaithe leoraí Cheanada — Bitcoin úsáidte chun cuntais bhainc reoite a sheachaint (YouTube)",
	sources_mempool_space:
		"Mempool.space — sonraí ar sholáthar agus mianadóireacht Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — conas atá Bitcoin ag cumhachtú agóidí EndSARS sa Nigéir",
	sources_pennsylvania_mining:
		"Mianadóireacht Bitcoin i Pennsylvania ag gabháil meatáin ó dhramhaíl ghuail (YouTube)",
	sources_texas_mining:
		"Mianadóireacht Bitcoin agus eangach leictreachais Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Níl boilsciú ag Bitcoin, ach tá sé ag do chuid airgid.",
	inflation_choose: "Roghnaigh d’airgead reatha agus féach an cruthúnas",
	inflation_choose_another: "← Roghnaigh airgead reatha eile",
	inflation_sticker_learn: "Faigh amach conas is féidir le Bitcoin cabhrú leat.",
	inflation_sticker_lets_find_out: "A ligean dúinn é a fháil amach.",
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
		`translate-inflation (ga): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
