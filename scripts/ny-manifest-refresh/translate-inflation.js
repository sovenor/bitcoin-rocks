#!/usr/bin/env node
/**
 * Chichewa (ny) manifest refresh — inflation namespace translator.
 *
 * Conventions (Chichewa / Chinyanja, primarily Malawian):
 * - "ndalama" = money/currency
 * - "boma" = government
 * - "akaunti" = account
 * - "kampani" = company
 * - "Bitcoin" stays as is (proper noun)
 * - "kukwera kwa mitengo" = inflation (literally "rising of prices")
 * - "kukhazikika" = stable / fixed
 * - "kuchuluka" = supply / amount
 * - "miliyoni" = million, "biliyoni" = billion, "thiriliyoni" = trillion
 * - "kusunga" = to save / store
 * - "kusindikiza" = to print
 * - "ndi" = and / with
 * - "munthu" / "anthu" = person / people
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
	"ny.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inIn: "mu madola a U.S.",
		noun: "dola ya U.S.",
		nounPl: "madola a U.S.",
		label: "Dola ya U.S.",
		existenceTitle: "Madola a U.S. omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la United States",
	},
	eur: {
		inIn: "mu ma euro",
		noun: "euro",
		nounPl: "ma euro",
		label: "Euro",
		existenceTitle: "Ma euro omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya maboma a dera la euro",
	},
	aud: {
		inIn: "mu madola a Australia",
		noun: "dola ya Australia",
		nounPl: "madola a Australia",
		label: "Dola ya Australia",
		existenceTitle: "Madola a Australia omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Australia",
	},
	brl: {
		inIn: "mu ma real a Brazil",
		noun: "real ya Brazil",
		nounPl: "ma real a Brazil",
		label: "Real ya Brazil",
		existenceTitle: "Ma real a Brazil omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Brazil",
	},
	cad: {
		inIn: "mu madola a Canada",
		noun: "dola ya Canada",
		nounPl: "madola a Canada",
		label: "Dola ya Canada",
		existenceTitle: "Madola a Canada omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Canada",
	},
	gbp: {
		inIn: "mu mapaundi a Britain",
		noun: "paundi ya Britain",
		nounPl: "mapaundi a Britain",
		label: "Paundi ya Britain",
		existenceTitle: "Mapaundi a Britain omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la United Kingdom",
	},
	ils: {
		inIn: "mu ma shekel a Israel",
		noun: "shekel ya Israel",
		nounPl: "ma shekel a Israel",
		label: "Shekel ya Israel",
		existenceTitle: "Ma shekel a Israel omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Israel",
	},
	inr: {
		inIn: "mu ma rupee a India",
		noun: "rupee ya India",
		nounPl: "ma rupee a India",
		label: "Rupee ya India",
		existenceTitle: "Ma rupee a India omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la India",
	},
	jpy: {
		inIn: "mu ma yen a Japan",
		noun: "yen ya Japan",
		nounPl: "ma yen a Japan",
		label: "Yen ya Japan",
		existenceTitle: "Ma yen a Japan omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Japan",
	},
	mxn: {
		inIn: "mu ma peso a Mexico",
		noun: "peso ya Mexico",
		nounPl: "ma peso a Mexico",
		label: "Peso ya Mexico",
		existenceTitle: "Ma peso a Mexico omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Mexico",
	},
	nzd: {
		inIn: "mu madola a New Zealand",
		noun: "dola ya New Zealand",
		nounPl: "madola a New Zealand",
		label: "Dola ya New Zealand",
		existenceTitle: "Madola a New Zealand omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la New Zealand",
	},
	php: {
		inIn: "mu ma peso a Philippines",
		noun: "peso ya Philippines",
		nounPl: "ma peso a Philippines",
		label: "Peso ya Philippines",
		existenceTitle: "Ma peso a Philippines omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Philippines",
	},
	thb: {
		inIn: "mu ma baht a Thailand",
		noun: "baht ya Thailand",
		nounPl: "ma baht a Thailand",
		label: "Baht ya Thailand",
		existenceTitle: "Ma baht a Thailand omwe akugwiritsidwa ntchito",
		debtTitle: "Ngongole yonse ya boma la Thailand",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Ngati mukusunga ${c.inIn}, mwina mwazindikira kuti ndalama zanu zikhoza kugula zochepa. Mukufunika ${c.nounPl} yochuluka kuti mugule zinthu zomwezo. Mukufunika ${c.nounPl} yochuluka kuti mukhalebe ndi moyo wamtundu womwewo.`;
		case "intro_2":
			return `Koma sizifunika kukhala chonchi.`;
		case "intro_highlight":
			return `Moyo wakhala wotsika mtengo kwa anthu omwe akhala akusunga mu Bitcoin pa zaka 4 zapitazi.`;
		case "proof_h2":
			return `Apa pali umboni: ndalama zanu zikupitirizabe kutaya mtengo wake`;
		case "proof_p1":
			return `${c.noun} iliyonse yomwe mumasunga m'banki imataya mtengo wake chaka ndi chaka. Izi zikuchitika chifukwa palibe malire a kuchuluka kwa ${c.nounPl} omwe angapangidwe.`;
		case "proof_p2":
			return `Kuchuluka kopanda malire ndiye chomwe chimayambitsa kukwera kwa mitengo. M'zaka zaposachedwa, kuchuluka kwa ${c.nounPl} omwe akugwiritsidwa ntchito kwawonjezeka kwambiri.`;
		case "proof_p3":
			return `Ndalama zambiri zikamapangidwa kuchokera ku zopanda kanthu, zinthu zonse zimakwera mtengo. Kuphatikizapo zinthu zopangira zomwe makampani amagula popanga zinthu \u2014 zomwe zikutanthauza mitengo yokwera kwa inu.`;
		case "proof_p4":
			return `Ngongole ya boma ikamawonjezeka, amasindikiza ndalama zambiri chifukwa anthu ochepa amafuna kukongoza ndalama ku boma.`;
		case "proof_p5_before":
			return `Ngati simungathe kukongola, simungathe kugwiritsa ntchito ndalama. Koma boma likamakhala`;
		case "proof_p5_link":
			return `lopanda mwayi wokongola`;
		case "proof_p5_after":
			return `, limangosindikiza ndalama zambiri.`;
		case "proof_p6":
			return `Ngongole zambiri za boma zikutanthauza kusindikiza ndalama zambiri. Kusindikiza ndalama zambiri kukutanthauza kukwera kwa mitengo kowonjezeka. Ndipo palibe mathero owoneka.`;
		case "btc_h2":
			return `Bitcoin ilibe kukwera kwa mitengo`;
		case "btc_p1":
			return `Kukwera kwa mitengo kumatanthauza kuti ndalama zanu zimakhoza kugula zochepa pakapita nthawi. Bitcoin ndi ndalama yabwino chifukwa ilibe kukwera kwa mitengo.`;
		case "btc_p2_before":
			return `${c.label} ili ndi kuchuluka kopanda malire, zomwe zikutanthauza kuti pamakhalapo zambiri zomwe zingasindikizidwe.`;
		case "btc_p2_link":
			return `Bitcoin ndi yochepa`;
		case "btc_p2_after":
			return `, chifukwa kuchuluka kwake kwakukulu ndi 21 miliyoni ya Bitcoin. Palibe amene angasindikize Bitcoin yowonjezeka.`;
		case "btc_p3":
			return `M'mbuyomu, Bitcoin yawonjezera mphamvu zogula pakapita nthawi, pomwe ${c.label.toLowerCase()} ikutaya mphamvu yake yogula. Anthu ambiri amagwiritsa ntchito Bitcoin ngati akaunti yosungira kwa nthawi yayitali \u2014 ndalama zomwe amasunga zaka zambiri popanda kuzigwira pomwe mtengo wake ukukwera.`;
		case "btc_p4":
			return `Ndi chiyani chomwe mungafune kwambiri: kusunga ${c.inIn} \u2014 ${c.nounPl} omwe akhoza kugula zochepa pakapita nthawi \u2014 kapena kusunga mu Bitcoin, yomwe m'mbuyomu yakhoza kugula zochuluka pakapita nthawi?`;
		case "freedom_h2":
			return `Bitcoin ndi chida cha ufulu`;
		case "freedom_p1":
			return `Netiweki ya Bitcoin sili ya munthu aliyense. Palibe boma kapena kampani yomwe imayilamulira. Idamangidwa kuti iteteze ufulu wanu ndi ndalama zanu.`;
		case "freedom_p2":
			return `Lero, anthu padziko lonse akugwiritsa ntchito Bitcoin kuti ateteze ufulu wawo \u2014 ngakhale pamene maboma awo akukana kuwathandiza kapena kuyesa kuwaletsa.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Mphamvu yogula yotayika m'zaka 4";
		case "stat_source_bpr":
			return "Gwero: Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Phunzirani zambiri \u2192",
	inflation_freedom_scarce_title: "Yochepa",
	inflation_freedom_scarce_desc:
		"Sipangakhale Bitcoin yopitirira 21 miliyoni. Palibe amene angasindikize yowonjezeka.",
	inflation_freedom_decentralized_title: "Yopanda Wolamulira Mmodzi",
	inflation_freedom_decentralized_desc:
		"Palibe gulu limodzi \u2014 palibe boma, palibe kampani \u2014 lomwe limalamulira Bitcoin.",
	inflation_freedom_permissionless_title: "Yopanda Chilolezo",
	inflation_freedom_permissionless_desc:
		"Aliyense, kulikonse, akhoza kulowa nawo netiweki. Palibe amene angakuletse.",
	inflation_freedom_sovereign_title: "Yodzilamulira",
	inflation_freedom_sovereign_desc:
		"Dongosolo latsopano, lomasuka kuchokera kwa ndale ndi malonjezo awo opanda kukwaniritsidwa.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Miliyoni",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Yokhazikika kwamuyaya",
	inflation_stat_bitcoin_source: "Gwero: Bitcoin Whitepaper \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "LERO",
	inflation_stat_currency_counting: "Ndipo ikuwerengerabe...",
	inflation_stat_currency_detail_4yr_lost:
		"Mphamvu yogula yotayika m'zaka 4",
	inflation_stat_currency_source_cpi: "Gwero: FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"Gwero: Ngongole ya Boma ya FRED \u2192",
	inflation_stat_currency_source_m1:
		"Gwero: Kuchuluka kwa Ndalama Zochepa kwa FRED \u2192",
	inflation_stat_currency_source_m1_short: "Gwero: FRED \u2192",

	// Bitcoin "gained" stat detail (not in this report but include for safety)
	inflation_stat_btc_detail_4yr: "Mphamvu yogula yopezedwa m'zaka 4",
	inflation_stat_btc_source_bpr: "Gwero: Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Antchito anagwiritsa ntchito Bitcoin kupeza ndalama zawo akaunti zawo zitatsekedwa.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Anthu ochita ziwonetsero anagwiritsa ntchito Bitcoin kupereka ndalama ku gulu lawo mabanki atadula mwayi wawo.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Kuthamanga Bitcoin kumatsuka zinyalala za malasha zomwe boma silinkafuna kuthana nazo.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Kuthamanga Bitcoin kumathandiza kusunga magetsi pa nthawi ya mphepo yamkuntho yayikulu.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report \u2014 chithunzi cha zaka 4 (ndalama zonse)",
	sources_bitcoin_source_code:
		"Khodi Yoyambira ya Bitcoin \u2014 Malire a Kuchuluka kwa 21 Miliyoni",
	sources_canadian_trucker:
		"Ziwonetsero za madalaivala a Canada \u2014 Bitcoin yagwiritsidwa ntchito kupewa akaunti zotsekedwa (YouTube)",
	sources_mempool_space:
		"Mempool.space \u2014 Deta ya Kuchuluka ndi Kuthamanga kwa Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa \u2014 Momwe Bitcoin idathandizira ziwonetsero za EndSARS ku Nigeria",
	sources_pennsylvania_mining:
		"Kuthamanga Bitcoin ku Pennsylvania kukugwiritsanso ntchito zinyalala za methane (YouTube)",
	sources_texas_mining:
		"Kuthamanga Bitcoin ku Texas ndi gridi yamagetsi (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin ilibe kukwera kwa mitengo, koma ndalama zanu zili nazo.",
	inflation_choose: "Sankhani ndalama yanu kuti muwone umboni",
	inflation_choose_another: "\u2190 Sankhani ndalama ina",
	inflation_sticker_learn:
		"Phunzirani momwe Bitcoin ingathandizire.",
	inflation_sticker_lets_find_out: "Tiyeni tipeze.",
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
		`translate-inflation (ny): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
