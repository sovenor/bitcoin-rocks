#!/usr/bin/env node
/**
 * Sinhala manifest refresh — inflation namespace translator.
 *
 * Handles:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - 41 non-currency keys (shared labels, stories, sources, etc.)
 *
 * Sinhala uses the Sinhala script (සිංහල). Brand names, URLs,
 * numeric values, and currency codes remain in Latin script.
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
	"si.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "ඇමෙරිකානු ඩොලර්වලින්",
		longNameNom: "ඇමෙරිකානු ඩොලරය",
		noun: "ඩොලරය",
		nounPlural: "ඩොලර්",
		label: "ඇමෙරිකානු ඩොලර්",
		existenceTitle: "ව්‍යවහාරයේ ඇති ඩොලර්",
		debtTitle: "මුළු ෆෙඩරල් ණය",
	},
	eur: {
		longName: "යුරෝ වලින්",
		longNameNom: "යුරෝව",
		noun: "යුරෝව",
		nounPlural: "යුරෝ",
		label: "යුරෝ",
		existenceTitle: "ව්‍යවහාරයේ ඇති යුරෝ",
		debtTitle: "යුරෝකලාපයේ රාජ්‍ය ණය",
	},
	aud: {
		longName: "ඕස්ට්‍රේලියානු ඩොලර්වලින්",
		longNameNom: "ඕස්ට්‍රේලියානු ඩොලරය",
		noun: "ඕස්ට්‍රේලියානු ඩොලරය",
		nounPlural: "ඕස්ට්‍රේලියානු ඩොලර්",
		label: "ඕස්ට්‍රේලියානු ඩොලර්",
		existenceTitle: "ව්‍යවහාරයේ ඇති ඕස්ට්‍රේලියානු ඩොලර්",
		debtTitle: "ඕස්ට්‍රේලියානු රාජ්‍ය ණය",
	},
	brl: {
		longName: "බ්‍රසීලියානු රියාල්වලින්",
		longNameNom: "බ්‍රසීලියානු රියාලය",
		noun: "රියාලය",
		nounPlural: "රියාල්",
		label: "බ්‍රසීලියානු රියාල්",
		existenceTitle: "ව්‍යවහාරයේ ඇති රියාල්",
		debtTitle: "බ්‍රසීල රාජ්‍ය ණය",
	},
	cad: {
		longName: "කැනේඩියානු ඩොලර්වලින්",
		longNameNom: "කැනේඩියානු ඩොලරය",
		noun: "කැනේඩියානු ඩොලරය",
		nounPlural: "කැනේඩියානු ඩොලර්",
		label: "කැනේඩියානු ඩොලර්",
		existenceTitle: "ව්‍යවහාරයේ ඇති කැනේඩියානු ඩොලර්",
		debtTitle: "කැනඩාවේ රාජ්‍ය ණය",
	},
	gbp: {
		longName: "බ්‍රිතාන්‍ය පවුම්වලින්",
		longNameNom: "බ්‍රිතාන්‍ය පවුම",
		noun: "පවුම",
		nounPlural: "පවුම්",
		label: "බ්‍රිතාන්‍ය පවුම්",
		existenceTitle: "ව්‍යවහාරයේ ඇති පවුම්",
		debtTitle: "එක්සත් රාජධානියේ රාජ්‍ය ණය",
	},
	ils: {
		longName: "ඊශ්‍රායල් ෂෙකල්වලින්",
		longNameNom: "ඊශ්‍රායල් ෂෙකලය",
		noun: "ෂෙකලය",
		nounPlural: "ෂෙකල්",
		label: "ඊශ්‍රායල් ෂෙකල්",
		existenceTitle: "ව්‍යවහාරයේ ඇති ෂෙකල්",
		debtTitle: "ඊශ්‍රායල රාජ්‍ය ණය",
	},
	inr: {
		longName: "ඉන්දියානු රුපියල්වලින්",
		longNameNom: "ඉන්දියානු රුපියල",
		noun: "රුපියල",
		nounPlural: "රුපියල්",
		label: "ඉන්දියානු රුපියල්",
		existenceTitle: "ව්‍යවහාරයේ ඇති රුපියල්",
		debtTitle: "ඉන්දියානු රාජ්‍ය ණය",
	},
	jpy: {
		longName: "ජපන් යෙන්වලින්",
		longNameNom: "ජපන් යෙන්",
		noun: "යෙන්",
		nounPlural: "යෙන්",
		label: "ජපන් යෙන්",
		existenceTitle: "ව්‍යවහාරයේ ඇති යෙන්",
		debtTitle: "ජපන රාජ්‍ය ණය",
	},
	mxn: {
		longName: "මෙක්සිකානු පේසෝවලින්",
		longNameNom: "මෙක්සිකානු පේසෝව",
		noun: "පේසෝව",
		nounPlural: "පේසෝ",
		label: "මෙක්සිකානු පේසෝ",
		existenceTitle: "ව්‍යවහාරයේ ඇති පේසෝ",
		debtTitle: "මෙක්සිකෝවේ රාජ්‍ය ණය",
	},
	nzd: {
		longName: "නවසීලන්ත ඩොලර්වලින්",
		longNameNom: "නවසීලන්ත ඩොලරය",
		noun: "නවසීලන්ත ඩොලරය",
		nounPlural: "නවසීලන්ත ඩොලර්",
		label: "නවසීලන්ත ඩොලර්",
		existenceTitle: "ව්‍යවහාරයේ ඇති නවසීලන්ත ඩොලර්",
		debtTitle: "නවසීලන්තයේ රාජ්‍ය ණය",
	},
	php: {
		longName: "පිලිපීන පේසෝවලින්",
		longNameNom: "පිලිපීන පේසෝව",
		noun: "පේසෝව",
		nounPlural: "පේසෝ",
		label: "පිලිපීන පේසෝ",
		existenceTitle: "ව්‍යවහාරයේ ඇති පේසෝ",
		debtTitle: "පිලිපීනයේ රාජ්‍ය ණය",
	},
	thb: {
		longName: "තායි බාත්වලින්",
		longNameNom: "තායි බාත්",
		noun: "බාත්",
		nounPlural: "බාත්",
		label: "තායි බාත්",
		existenceTitle: "ව්‍යවහාරයේ ඇති බාත්",
		debtTitle: "තායිලන්තයේ රාජ්‍ය ණය",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `ඔබ ${c.longName} ඉතුරු කරන්නේ නම්, සෑම වසරකම ඔබට අඩුවෙන් මිලදී ගත හැකි බව ඔබට පෙනෙනු ඇත. එම භාණ්ඩ ප්‍රමාණයම මිලදී ගැනීම සඳහා ඔබට වැඩි ${c.nounPlural} ප්‍රමාණයක් අවශ්‍ය වේ. ඔබේ ජීවන තත්ත්වය පවත්වා ගැනීමට ඔබට වැඩි ${c.nounPlural} අවශ්‍ය වේ.`;
		case "intro_2":
			return `නමුත් එය එසේ විය යුතු නැත.`;
		case "intro_highlight":
			return `පසුගිය වසර හතර තුළ, Bitcoin හි ඉතුරුම් කරන්නන්ට ජීවිතය වඩාත් ලාභදායී වන බව පෙනී ගොස් ඇත.`;
		case "proof_h2":
			return `මෙන්න සාක්ෂි: ඔබේ මුදල් වටිනාකමින් අඩු වේ`;
		case "proof_p1":
			return `ඔබේ බැංකු ගිණුමේ සෑම ${c.noun}කින්ම සෑම වසරකම අඩුවෙන් මිලදී ගනී. මෙය සිදුවන්නේ කොපමණ ${c.nounPlural} ප්‍රමාණයක් සෑදිය හැකිද යන්නට නියත සීමාවක් නොමැති නිසාය.`;
		case "proof_p2":
			return `මෙම අසීමිත සැපයුම උද්ධමනයේ මූල හේතුවයි. පසුගිය වසර කිහිපය තුළ ව්‍යවහාරයේ ඇති ${c.nounPlural} ප්‍රමාණය නාටකාකාර ලෙස වැඩි වී ඇත.`;
		case "proof_p3":
			return `ශූන්‍යයෙන් වැඩි මුදල් සාදන විට, සෑම දෙයකම මිල ඉහළ යයි. සමාගම් භාණ්ඩ නිෂ්පාදනය කිරීම සඳහා මිලදී ගන්නා අමුද්‍රව්‍ය ද ඇතුළත් වේ — එය ඔබට ඉහළ මිල ගණන් කරා මග පාදයි.`;
		case "proof_p4":
			return `රජය එහි ණය වැඩි කරගෙන යන විට, රජයට ණය දීමට කැමති අඩු පුද්ගල සංඛ්‍යාවක් සිටින බැවින් වැඩි මුදල් මුද්‍රණය කෙරේ.`;
		case "proof_p5_before":
			return `ඔබට මුදල් ණයට ගත නොහැකි නම්, ඔබට වියදම් කළ නොහැක. නමුත් රජයට`;
		case "proof_p5_link":
			return `මුදල් ණයට ගත නොහැකි විට`;
		case "proof_p5_after":
			return `, එය හුදෙක් වැඩි මුදල් මුද්‍රණය කරයි.`;
		case "proof_p6":
			return `වැඩි රාජ්‍ය ණය යනු වැඩි මුදල් මුද්‍රණයයි. වැඩි මුදල් මුද්‍රණය යනු වැඩි උද්ධමනයයි. එය නැවැත්වීමට ලකුණක් නොමැත.`;
		case "btc_h2":
			return `Bitcoin හි උද්ධමනයක් නොමැත`;
		case "btc_p1":
			return `උද්ධමනය යන්නෙන් අදහස් කරන්නේ කාලයාගේ ඇවෑමෙන් ඔබේ මුදල්වලින් අඩුවෙන් මිලදී ගනී යන්නයි. Bitcoin යනු හොඳ මුදල් වන්නේ එහි උද්ධමනයක් නොමැති නිසාය.`;
		case "btc_p2_before":
			return `${c.longName} සැපයුම අසීමිත වේ, එයින් අදහස් වන්නේ ඕනෑම අවස්ථාවක වැඩි මුදල් මුද්‍රණය කළ හැකි බවයි.`;
		case "btc_p2_link":
			return `Bitcoin දුර්ලභයි`;
		case "btc_p2_after":
			return `, මන්ද එහි උපරිම සීමාව බිට්කොයින් මිලියන 21 කි. කිසිවෙකුට වැඩි Bitcoin නිර්මාණය කළ නොහැක.`;
		case "btc_p3":
			return `ඓතිහාසිකව, ${c.longNameNom} මිලදී ගැනීමේ බලය නැතිවන අතර Bitcoin කාලයත් සමඟ මිලදී ගැනීමේ බලය ලබා ගෙන ඇත. බොහෝ අය Bitcoin දිගු කාලීන ඉතුරුම් ගිණුමක් ලෙස භාවිතා කරති: ඔවුන් වසර ගණනාවක් ස්පර්ශ නොකර වර්ධනය වීමට ඉඩ දෙන මුදල්.`;
		case "btc_p4":
			return `ඔබට කාලයත් සමඟ අඩුවෙන් මිලදී ගන්නා ${c.nounPlural} වල ඉතුරු කිරීමට අවශ්‍යද? නැතහොත් ඓතිහාසිකව කාලයත් සමඟ වැඩියෙන් මිලදී ගන්නා Bitcoin වලද?`;
		case "freedom_h2":
			return `Bitcoin යනු නිදහසේ මෙවලමක් ද වේ`;
		case "freedom_p1":
			return `Bitcoin ජාලය කිසිවෙකු පාලනය නොකරයි. එය කිසිදු රජයක් හෝ සමාගමක් විසින් මෙහෙයවනු නොලැබේ. එය ඔබේ නිදහස සහ ඔබේ මුදල් ආරක්ෂා කිරීමට නිර්මාණය කර ඇත.`;
		case "freedom_p2":
			return `ලොව පුරා මිනිසුන් දැනටමත් ඔවුන්ගේ නිදහස ආරක්ෂා කර ගැනීමට Bitcoin භාවිතා කරති — ඔවුන්ගේ රජයන් ඔවුන්ට උදව් කිරීමට අකමැති වූ විට හෝ ඔවුන් නැවැත්වීමට උත්සාහ කරන විට පවා.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "වසර 4 කින් අහිමි වූ මිලදී ගැනීමේ බලය";
		case "stat_source_bpr":
			return "මූලාශ්‍රය: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "තවත් දැන ගන්න →",
	inflation_freedom_scarce_title: "දුර්ලභ",
	inflation_freedom_scarce_desc:
		"සදාකාලිකව Bitcoin මිලියන 21 ක් පමණක් පවතිනු ඇත. කිසිවෙකුට වැඩි මුද්‍රණය කළ නොහැක.",
	inflation_freedom_decentralized_title: "විමධ්‍යගත",
	inflation_freedom_decentralized_desc:
		"කිසිදු රජයක් හෝ සමාගමක් — Bitcoin පාලනය නොකරයි.",
	inflation_freedom_permissionless_title: "අවසරයකින් තොර",
	inflation_freedom_permissionless_desc:
		"ඕනෑම කෙනෙකුට, ඕනෑම තැනක සිට, ජාලයට සම්බන්ධ විය හැකිය. කිසිවෙකුට ඔබව නැවැත්විය නොහැක.",
	inflation_freedom_sovereign_title: "ස්වෛරී",
	inflation_freedom_sovereign_desc:
		"දේශපාලඥයන්ගෙන් සහ ඔවුන්ගේ බිඳුණු පොරොන්දුවලින් නිදහස් නව ක්‍රමයකි.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "මිලියන 21",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "සදාකාලිකව ස්ථාවර",
	inflation_stat_bitcoin_source: "මූලාශ්‍රය: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "අද",
	inflation_stat_currency_counting: "සහ වැඩි වෙමින් පවතී...",
	inflation_stat_currency_detail_4yr_lost:
		"වසර 4 කින් අහිමි වූ මිලදී ගැනීමේ බලය",
	inflation_stat_currency_source_cpi: "මූලාශ්‍රය: FRED CPI →",
	inflation_stat_currency_source_debt: "මූලාශ්‍රය: FRED රාජ්‍ය ණය →",
	inflation_stat_currency_source_m1: "මූලාශ්‍රය: FRED M1 මුදල් සැපයුම →",
	inflation_stat_currency_source_m1_short: "මූලාශ්‍රය: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr:
		"වසර 4 කින් ලබා ගත් මිලදී ගැනීමේ බලය",
	inflation_stat_btc_source_bpr: "මූලාශ්‍රය: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "කැනඩාව",
	inflation_story_canada_desc:
		"සේවකයන්ගේ බැංකු ගිණුම් අත්හිටුවූ පසු ඔවුන්ගේ මුදල් වෙත ප්‍රවේශ වීමට Bitcoin භාවිතා කළහ.",
	inflation_story_nigeria_title: "නයිජීරියාව",
	inflation_story_nigeria_desc:
		"බැංකු ඔවුන් සමඟ වැඩ කිරීම ප්‍රතික්ෂේප කළ විට විරෝධතාකරුවන් ඔවුන්ගේ ව්‍යාපාරවලට මූල්‍ය ආධාර සැපයීමට Bitcoin භාවිතා කළහ.",
	inflation_story_pennsylvania_title: "පෙන්සිල්වේනියාව",
	inflation_story_pennsylvania_desc:
		"රජය විසඳීම ප්‍රතික්ෂේප කළ ගල් අඟුරු අපද්‍රව්‍ය Bitcoin පතල් කැණීම පිරිසිදු කළේය.",
	inflation_story_texas_title: "ටෙක්සාස්",
	inflation_story_texas_desc:
		"විශාල කුණාටුවක් අතරතුර Bitcoin පතල් කැණීම විදුලි පද්ධතිය ක්‍රියාත්මකව තබා ගැනීමට උපකාරී විය.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — වසර 4 කාර්ය සාධන ප්‍රස්තාර (සියලුම මුදල් ඒකක)",
	sources_bitcoin_source_code:
		"Bitcoin මූල කේතය — මිලියන 21 සැපයුම් සීමාව",
	sources_canadian_trucker:
		"කැනේඩියානු ට්‍රක් රියදුරන්ගේ විරෝධතා — අත්හිටුවන ලද බැංකු ගිණුම් මඟහරවා යාමට Bitcoin භාවිතා කරන ලදී (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin සැපයුම් සහ පතල් කැණීම් දත්ත",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin නයිජීරියාවේ EndSARS විරෝධය මෙහෙයවන ආකාරය",
	sources_pennsylvania_mining:
		"පෙන්සිල්වේනියානු Bitcoin පතල් කැණීම අපද්‍රව්‍ය මීතේන් ප්‍රතිස්ථාපනය කරයි (YouTube)",
	sources_texas_mining:
		"Bitcoin පතල් කැණීම සහ ටෙක්සාස් විදුලි පද්ධතිය (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin හි උද්ධමනයක් නොමැත, නමුත් ඔබේ මුදල්වල තිබේ.",
	inflation_choose: "සාක්ෂි බැලීමට ඔබේ මුදල් ඒකකය තෝරන්න",
	inflation_choose_another: "← වෙනත් මුදල් ඒකකයක් තෝරන්න",
	inflation_sticker_learn: "Bitcoin හට උපකාර කළ හැකි ආකාරය ගැන දැන ගන්න.",
	inflation_sticker_lets_find_out: "අපි සොයා බලමු.",
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
		`translate-inflation (si): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
