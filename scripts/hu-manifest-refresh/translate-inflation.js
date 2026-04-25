#!/usr/bin/env node
/**
 * Hungarian (hu) manifest refresh — inflation namespace translator.
 *
 * Hungarian conventions:
 * - Latin script with diacritics (á, é, í, ó, ö, ő, ú, ü, ű).
 * - Agglutinative language — uses case suffixes rather than prepositions.
 * - "Bitcoin" stays as "Bitcoin" (already standard in Hungarian copy).
 * - Decimal: comma; thousands: full stop or non-breaking space.
 *   We keep US-formatted dataset values where the cards display raw FRED
 *   figures (commas as thousand separators), since they are formatted
 *   that way at render time.
 * - Numbers: "millió" (million), "milliárd" (billion), "billió" (trillion).
 *   For technical short scale: 21 millió Bitcoin.
 * - Style: descriptive third-person ("a megtakarítás veszít az értékéből")
 *   rather than strict 2nd-person address — natural register for Hungarian
 *   educational/financial copy.
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
	"hu.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
//  inIn = "in <currency>"  (… ban/-ben form, e.g. "amerikai dollárban")
//  noun = singular nominative
//  nounPl = "more <currency>" form (Hungarian uses singular after numbers,
//           so we also keep a generic plural-like genitive fragment for
//           sentences such as "több <currency> kell").
//  label = stat card label
//  existenceTitle = "X in circulation"
//  debtTitle = "Total <country> government debt"

const CURRENCY = {
	usd: {
		inIn: "amerikai dollárban",
		noun: "dollár",
		nounPl: "dollár",
		label: "Amerikai dollár",
		existenceTitle: "Forgalomban lévő amerikai dollár",
		debtTitle: "Az amerikai kormány teljes adóssága",
	},
	eur: {
		inIn: "euróban",
		noun: "euró",
		nounPl: "euró",
		label: "Euró",
		existenceTitle: "Forgalomban lévő euró",
		debtTitle: "Az eurózóna kormányainak teljes adóssága",
	},
	aud: {
		inIn: "ausztrál dollárban",
		noun: "ausztrál dollár",
		nounPl: "ausztrál dollár",
		label: "Ausztrál dollár",
		existenceTitle: "Forgalomban lévő ausztrál dollár",
		debtTitle: "Az ausztrál kormány teljes adóssága",
	},
	brl: {
		inIn: "brazil reálban",
		noun: "reál",
		nounPl: "reál",
		label: "Brazil reál",
		existenceTitle: "Forgalomban lévő brazil reál",
		debtTitle: "A brazil kormány teljes adóssága",
	},
	cad: {
		inIn: "kanadai dollárban",
		noun: "kanadai dollár",
		nounPl: "kanadai dollár",
		label: "Kanadai dollár",
		existenceTitle: "Forgalomban lévő kanadai dollár",
		debtTitle: "A kanadai kormány teljes adóssága",
	},
	gbp: {
		inIn: "brit fontban",
		noun: "font",
		nounPl: "font",
		label: "Brit font",
		existenceTitle: "Forgalomban lévő brit font",
		debtTitle: "A brit kormány teljes adóssága",
	},
	ils: {
		inIn: "izraeli sékelben",
		noun: "sékel",
		nounPl: "sékel",
		label: "Izraeli sékel",
		existenceTitle: "Forgalomban lévő izraeli sékel",
		debtTitle: "Az izraeli kormány teljes adóssága",
	},
	inr: {
		inIn: "indiai rúpiában",
		noun: "rúpia",
		nounPl: "rúpia",
		label: "Indiai rúpia",
		existenceTitle: "Forgalomban lévő indiai rúpia",
		debtTitle: "Az indiai kormány teljes adóssága",
	},
	jpy: {
		inIn: "japán jenben",
		noun: "jen",
		nounPl: "jen",
		label: "Japán jen",
		existenceTitle: "Forgalomban lévő japán jen",
		debtTitle: "A japán kormány teljes adóssága",
	},
	mxn: {
		inIn: "mexikói pesóban",
		noun: "pesó",
		nounPl: "pesó",
		label: "Mexikói pesó",
		existenceTitle: "Forgalomban lévő mexikói pesó",
		debtTitle: "A mexikói kormány teljes adóssága",
	},
	nzd: {
		inIn: "új-zélandi dollárban",
		noun: "új-zélandi dollár",
		nounPl: "új-zélandi dollár",
		label: "Új-zélandi dollár",
		existenceTitle: "Forgalomban lévő új-zélandi dollár",
		debtTitle: "Az új-zélandi kormány teljes adóssága",
	},
	php: {
		inIn: "fülöp-szigeteki pesóban",
		noun: "pesó",
		nounPl: "pesó",
		label: "Fülöp-szigeteki pesó",
		existenceTitle: "Forgalomban lévő fülöp-szigeteki pesó",
		debtTitle: "A fülöp-szigeteki kormány teljes adóssága",
	},
	thb: {
		inIn: "thai bahtban",
		noun: "baht",
		nounPl: "baht",
		label: "Thai baht",
		existenceTitle: "Forgalomban lévő thai baht",
		debtTitle: "A thai kormány teljes adóssága",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Ha ${c.inIn} takarít meg, valószínűleg észrevette, hogy a pénzéből egyre kevesebbet lehet vásárolni. Több ${c.nounPl} kell ugyanazokhoz a dolgokhoz. Több ${c.nounPl} kell ahhoz, hogy ugyanazt az életszínvonalat tartsa.`;
		case "intro_2":
			return `De ennek nem kell így lennie.`;
		case "intro_highlight":
			return `Az élet olcsóbb lett azoknak, akik az elmúlt 4 évben Bitcoinban takarítottak meg.`;
		case "proof_h2":
			return `Itt a bizonyíték: a pénze egyre kevesebbet ér`;
		case "proof_p1":
			return `Minden ${c.noun}, ami a bankszámláján van, évről évre kevesebbet ér. Ez azért történik, mert nincs felső korlátja annak, hogy mennyi ${c.nounPl} hozható létre.`;
		case "proof_p2":
			return `Ez a korlátlan kínálat az infláció fő oka. Az utóbbi években a forgalomban lévő ${c.nounPl} mennyisége drámaian megnőtt.`;
		case "proof_p3":
			return `Amikor a semmiből több pénzt teremtenek, minden drágább lesz. Beleértve a nyersanyagokat, amelyeket a vállalatok vesznek a termékek előállításához — ami az Ön számára magasabb árakat jelent.`;
		case "proof_p4":
			return `Ahogy az állami adósság növekszik, egyre több pénzt nyomtatnak, mert egyre kevesebben hajlandók kölcsönt adni a kormánynak.`;
		case "proof_p5_before":
			return `Ha nem tud kölcsön venni, nem tud költeni sem. De amikor a kormány`;
		case "proof_p5_link":
			return `nem tud kölcsönt felvenni`;
		case "proof_p5_after":
			return `, egyszerűen több pénzt nyomtat.`;
		case "proof_p6":
			return `Több államadósság több pénznyomtatást jelent. Több pénznyomtatás több inflációt jelent. És ennek nem látszik a vége.`;
		case "btc_h2":
			return `A Bitcoinnak nincs inflációja`;
		case "btc_p1":
			return `Az infláció azt jelenti, hogy a pénze idővel egyre kevesebbet ér. A Bitcoin jobb pénz, mert nincs inflációja.`;
		case "btc_p2_before":
			return `Az ${c.label.toLowerCase()} korlátlan kínálatú, ami azt jelenti, hogy mindig lehet többet nyomtatni belőle.`;
		case "btc_p2_link":
			return `A Bitcoin szűkös`;
		case "btc_p2_after":
			return `, mert maximum 21 millió Bitcoin létezhet. Senki sem hozhat létre többet.`;
		case "btc_p3":
			return `Történelmileg a Bitcoin idővel növelte a vásárlóerejét, miközben az ${c.label.toLowerCase()} elveszítette azt. Sokan használják a Bitcoint hosszú távú megtakarítási számlaként — pénzként, amelyet évekig érintetlenül hagynak, miközben az értéke nő.`;
		case "btc_p4":
			return `Mit szeretne inkább: ${c.inIn} takarítani — ${c.nounPl}, amelyből idővel egyre kevesebbet lehet vásárolni — vagy Bitcoinban takarítani, amelyből történelmileg egyre többet lehet vásárolni?`;
		case "freedom_h2":
			return `A Bitcoin a szabadság eszköze is`;
		case "freedom_p1":
			return `A Bitcoin-hálózat senkié. Egyetlen kormány vagy vállalat sem irányítja. Úgy építették, hogy védje a szabadságát és a pénzét.`;
		case "freedom_p2":
			return `Emberek világszerte éppen most használják a Bitcoint, hogy megvédjék a szabadságukat — még akkor is, amikor a kormányuk nem akar segíteni rajtuk vagy meg akarja állítani őket.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Vásárlóerő, ami 4 év alatt elveszett";
		case "stat_source_bpr":
			return "Forrás: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Tudjon meg többet ←",
	inflation_freedom_scarce_title: "Szűkös",
	inflation_freedom_scarce_desc:
		"Soha nem lesz több 21 millió Bitcoinnál. Senki sem nyomtathat többet.",
	inflation_freedom_decentralized_title: "Decentralizált",
	inflation_freedom_decentralized_desc:
		"A Bitcoint nem irányítja egyetlen fél sem — sem kormány, sem vállalat.",
	inflation_freedom_permissionless_title: "Engedélymentes",
	inflation_freedom_permissionless_desc:
		"Bárki, bárhol csatlakozhat a hálózathoz. Senki sem állíthatja meg.",
	inflation_freedom_sovereign_title: "Szuverén",
	inflation_freedom_sovereign_desc:
		"Új rendszer, mentes a politikusoktól és megszegett ígéreteiktől.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 millió",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Örökre rögzített",
	inflation_stat_bitcoin_source: "Forrás: Bitcoin whitepaper ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Ma",
	inflation_stat_currency_counting: "És még növekszik...",
	inflation_stat_currency_detail_4yr_lost:
		"Vásárlóerő, ami 4 év alatt elveszett",
	inflation_stat_currency_source_cpi: "Forrás: FRED CPI ←",
	inflation_stat_currency_source_debt:
		"Forrás: FRED államadósság ←",
	inflation_stat_currency_source_m1:
		"Forrás: FRED M1 pénzkínálat ←",
	inflation_stat_currency_source_m1_short: "Forrás: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Vásárlóerő, ami 4 év alatt nyert",
	inflation_stat_btc_source_bpr: "Forrás: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"A munkások a Bitcoinnak köszönhetően visszanyerték a hozzáférést a pénzükhöz, miután a bankszámláikat befagyasztották.",
	inflation_story_nigeria_title: "Nigéria",
	inflation_story_nigeria_desc:
		"Tüntetők a Bitcoint használták a mozgalmuk finanszírozására, miután a bankok megtagadták az együttműködést.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"A Bitcoin-bányászat olyan szénhulladékot takarított el, amelyet a kormány nem volt hajlandó eltávolítani.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"A Bitcoin-bányászat segített életben tartani az áramhálózatot egy súlyos vihar idején.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 éves hozamdiagram (minden valuta)",
	sources_bitcoin_source_code:
		"Bitcoin forráskód — 21 milliós kínálati korlát",
	sources_canadian_trucker:
		"Kanadai kamionos tüntetés — Bitcoin a befagyasztott bankszámlák megkerülésére (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin kínálati és bányászati adatok",
	sources_nigeria_endsars:
		"Quartz Africa — hogyan finanszírozta a Bitcoin a nigériai EndSARS mozgalmat",
	sources_pennsylvania_mining:
		"Bitcoin-bányászat metángáz visszanyerésére pennsylvaniai szénhulladékból (YouTube)",
	sources_texas_mining:
		"Bitcoin-bányászat és a texasi áramhálózat (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"A Bitcoinnak nincs inflációja, de a pénzének van.",
	inflation_choose: "Válassza ki a valutáját, és nézze meg a bizonyítékot",
	inflation_choose_another: "← Válasszon másik valutát",
	inflation_sticker_learn:
		"Tudja meg, hogyan segíthet a Bitcoin.",
	inflation_sticker_lets_find_out: "Tudjuk meg.",
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
		`translate-inflation (hu): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
