#!/usr/bin/env node
/**
 * Filipino manifest refresh — inflation namespace translator.
 *
 * Filipino (Tagalog) uses informal second-person "ikaw/mo" throughout.
 * Numbers: comma thousand separators, period decimals (English-style
 * convention widely used in Philippines). "trilyon" = 10^12 (Spanish-
 * derived long-scale term common in Filipino finance context).
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
	"fil.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * longNameSees   — used after "kapag nag-iipon ka sa ___"
 * noun           — singular form
 * nounPlural     — plural form used as topic
 * label          — display label
 * existenceTitle — "Dolyar ng US na umiikot"
 * debtTitle      — government debt title
 */

const CURRENCY = {
	usd: {
		longNameSees: "Dolyar ng US",
		noun: "dolyar ng US",
		nounPlural: "Dolyar ng US",
		label: "Dolyar ng US",
		existenceTitle: "Umiikot na Dolyar ng US",
		debtTitle: "Kabuuang utang ng pederal na gobyerno ng US",
	},
	eur: {
		longNameSees: "Euro",
		noun: "Euro",
		nounPlural: "Euro",
		label: "Euro",
		existenceTitle: "Umiikot na Euro",
		debtTitle: "Kabuuang utang ng mga gobyerno ng Eurozone",
	},
	aud: {
		longNameSees: "Dolyar ng Australia",
		noun: "dolyar ng Australia",
		nounPlural: "Dolyar ng Australia",
		label: "Dolyar ng Australia",
		existenceTitle: "Umiikot na Dolyar ng Australia",
		debtTitle: "Kabuuang utang ng gobyerno ng Australia",
	},
	brl: {
		longNameSees: "Real ng Brazil",
		noun: "real",
		nounPlural: "Real ng Brazil",
		label: "Real ng Brazil",
		existenceTitle: "Umiikot na Real",
		debtTitle: "Kabuuang utang ng gobyerno ng Brazil",
	},
	cad: {
		longNameSees: "Dolyar ng Canada",
		noun: "dolyar ng Canada",
		nounPlural: "Dolyar ng Canada",
		label: "Dolyar ng Canada",
		existenceTitle: "Umiikot na Dolyar ng Canada",
		debtTitle: "Kabuuang utang ng gobyerno ng Canada",
	},
	gbp: {
		longNameSees: "Libra Esterlina",
		noun: "libra",
		nounPlural: "Libra Esterlina",
		label: "Libra Esterlina",
		existenceTitle: "Umiikot na Libra",
		debtTitle: "Kabuuang utang ng gobyerno ng United Kingdom",
	},
	ils: {
		longNameSees: "Shekel ng Israel",
		noun: "shekel",
		nounPlural: "Shekel ng Israel",
		label: "Shekel ng Israel",
		existenceTitle: "Umiikot na Shekel",
		debtTitle: "Kabuuang utang ng gobyerno ng Israel",
	},
	inr: {
		longNameSees: "Rupee ng India",
		noun: "rupee",
		nounPlural: "Rupee ng India",
		label: "Rupee ng India",
		existenceTitle: "Umiikot na Rupee",
		debtTitle: "Kabuuang utang ng gobyerno ng India",
	},
	jpy: {
		longNameSees: "Yen ng Japan",
		noun: "yen",
		nounPlural: "Yen ng Japan",
		label: "Yen ng Japan",
		existenceTitle: "Umiikot na Yen",
		debtTitle: "Kabuuang utang ng gobyerno ng Japan",
	},
	mxn: {
		longNameSees: "Piso ng Mexico",
		noun: "piso",
		nounPlural: "Piso ng Mexico",
		label: "Piso ng Mexico",
		existenceTitle: "Umiikot na Piso ng Mexico",
		debtTitle: "Kabuuang utang ng gobyerno ng Mexico",
	},
	nzd: {
		longNameSees: "Dolyar ng New Zealand",
		noun: "dolyar ng New Zealand",
		nounPlural: "Dolyar ng New Zealand",
		label: "Dolyar ng New Zealand",
		existenceTitle: "Umiikot na Dolyar ng New Zealand",
		debtTitle: "Kabuuang utang ng gobyerno ng New Zealand",
	},
	php: {
		longNameSees: "Piso ng Pilipinas",
		noun: "piso",
		nounPlural: "Piso ng Pilipinas",
		label: "Piso ng Pilipinas",
		existenceTitle: "Umiikot na Piso ng Pilipinas",
		debtTitle: "Kabuuang utang ng gobyerno ng Pilipinas",
	},
	thb: {
		longNameSees: "Baht ng Thailand",
		noun: "baht",
		nounPlural: "Baht ng Thailand",
		label: "Baht ng Thailand",
		existenceTitle: "Umiikot na Baht",
		debtTitle: "Kabuuang utang ng gobyerno ng Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Kapag nag-iipon ka sa ${c.longNameSees}, marahil napansin mo na ang pera mo ay bumibili ng mas kaunti bawat taon. Kailangan mo ng mas maraming ${c.nounPlural.toLowerCase()} para bumili ng parehong dami ng mga bagay. Kailangan mo ng mas maraming ${c.nounPlural.toLowerCase()} para panatilihin ang iyong pamumuhay.`;
		case "intro_2":
			return `Ngunit hindi ito kailangang maging ganito.`;
		case "intro_highlight":
			return `Sa nakaraang apat na taon, ang mga nag-iipon sa bitcoin ay nakita ang kanilang buhay na nagiging mas mura.`;
		case "proof_h2":
			return `Narito ang katibayan: nawawalan ng halaga ang iyong pera`;
		case "proof_p1":
			return `Ang bawat ${c.noun} sa iyong bank account ay bumibili ng mas kaunti bawat taon. Nangyayari ito dahil walang fixed na limit sa dami ng ${c.nounPlural.toLowerCase()} na maaaring likhain.`;
		case "proof_p2":
			return `Ang walang-limitasyong suplay na ito ang pangunahing sanhi ng inflation. Sa mga nakaraang taon, mabilis na tumaas ang dami ng ${c.nounPlural.toLowerCase()} na umiikot.`;
		case "proof_p3":
			return `Kapag may nalikha na mas maraming pera mula sa wala, tataas ang presyo ng lahat ng bagay. Kasama dito ang mga hilaw na materyales na binibili ng mga negosyo para gumawa ng kanilang mga produkto — na nangangahulugang mas mataas na presyo para sa iyo.`;
		case "proof_p4":
			return `Habang patuloy na lumalaki ang utang ng gobyerno, mas maraming pera ang maii-print, dahil papakaunti ang nais magpautang sa gobyerno.`;
		case "proof_p5_before":
			return `Kung hindi ka makahiram, hindi ka makagagastos. Ngunit kapag ang gobyerno`;
		case "proof_p5_link":
			return `ay hindi makahiram`;
		case "proof_p5_after":
			return `, nag-i-print lang sila ng mas maraming pera.`;
		case "proof_p6":
			return `Mas maraming utang ng gobyerno ay nangangahulugang mas maraming pag-print ng pera. Mas maraming pag-print ng pera ay nangangahulugang mas maraming inflation. At walang palatandaan ng paghinto.`;
		case "btc_h2":
			return `Walang inflation ang bitcoin`;
		case "btc_p1":
			return `Ang inflation ay nangangahulugang ang pera mo ay bumibili ng mas kaunti sa paglipas ng panahon. Ang bitcoin ay mas magandang pera dahil wala itong inflation.`;
		case "btc_p2_before":
			return `Ang ${c.label} ay may walang-limitasyong suplay, na nangangahulugang maaari itong mai-print pa kahit kailan.`;
		case "btc_p2_link":
			return `Ang bitcoin ay scarce`;
		case "btc_p2_after":
			return `, at may fixed na limit na 21 milyong bitcoin. Walang makakagawa pa ng mas marami.`;
		case "btc_p3":
			return `Sa kasaysayan, ang bitcoin ay nagkaroon ng mas malaking kapangyarihang bumili sa paglipas ng panahon, habang ang ${c.nounPlural.toLowerCase()} ay nawalan. Maraming tao ang gumagamit ng bitcoin bilang pangmatagalang savings account — pera na hinahayaan nilang lumago sa paglipas ng mga taon nang hindi hinahawakan.`;
		case "btc_p4":
			return `Mas gugustuhin mo bang mag-ipon sa ${c.longNameSees}, na bumibili ng mas kaunti sa paglipas ng panahon? O sa bitcoin, na sa kasaysayan ay bumili ng mas marami sa paglipas ng panahon?`;
		case "freedom_h2":
			return `Ang bitcoin ay isang kasangkapan din ng kalayaan`;
		case "freedom_p1":
			return `Walang sinuman ang may kontrol sa bitcoin network. Walang gobyerno o korporasyon ang namamahala dito. Dinisenyo ito para protektahan ang iyong kalayaan at ang iyong pera.`;
		case "freedom_p2":
			return `Ginagamit na ng mga tao sa buong mundo ang bitcoin para protektahan ang kanilang kalayaan — kahit kapag tumatanggi ang kanilang gobyerno na tulungan sila o sinusubukan silang pigilan.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kapangyarihang bumili na nawala sa 4 na taon";
		case "stat_source_bpr":
			return "Pinagmulan: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Matuto pa →",
	inflation_freedom_scarce_title: "Scarce",
	inflation_freedom_scarce_desc:
		"Magkakaroon lamang ng 21 milyong bitcoin. Walang makakagawa pa ng mas marami.",
	inflation_freedom_decentralized_title: "Desentralisado",
	inflation_freedom_decentralized_desc:
		"Walang iisang entidad na may kontrol sa bitcoin — walang gobyerno, walang korporasyon.",
	inflation_freedom_permissionless_title: "Walang-pahintulot",
	inflation_freedom_permissionless_desc:
		"Kahit sino, saan man, ay maaaring sumali sa network. Walang makakapigil sa iyo.",
	inflation_freedom_sovereign_title: "Soberano",
	inflation_freedom_sovereign_desc:
		"Isang bagong sistema na independyente sa mga pulitiko at kanilang mga sirang pangako.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milyon",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Fixed magpakailanman",
	inflation_stat_bitcoin_source: "Pinagmulan: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Ngayon",
	inflation_stat_currency_counting: "at patuloy na tumataas...",
	inflation_stat_currency_detail_4yr_lost:
		"Kapangyarihang bumili na nawala sa 4 na taon",
	inflation_stat_currency_source_cpi: "Pinagmulan: FRED CPI →",
	inflation_stat_currency_source_debt: "Pinagmulan: FRED utang ng gobyerno →",
	inflation_stat_currency_source_m1: "Pinagmulan: FRED suplay ng pera M1 →",
	inflation_stat_currency_source_m1_short: "Pinagmulan: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Kapangyarihang bumili na nadagdag sa 4 na taon",
	inflation_stat_btc_source_bpr: "Pinagmulan: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Tinulungan ng bitcoin ang mga manggagawa na maibalik ang kanilang pera matapos nitong ma-freeze ang kanilang bank accounts.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Gumamit ng bitcoin ang mga nagpoprotesta para pondohan ang kanilang kilusan nang tumangging makipagtulungan ang mga bangko.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Nilinis ng pagmimina ng bitcoin ang basura ng coal na ayaw kolektahin ng gobyerno.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Tinulungan ng pagmimina ng bitcoin na panatilihing gumagana ang grid ng kuryente sa panahon ng malaking bagyo.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4-taong performance chart (lahat ng currencies)",
	sources_bitcoin_source_code:
		"Bitcoin source code — 21 milyong suplay na limit",
	sources_canadian_trucker:
		"Protesta ng mga Canadian trucker — paggamit ng bitcoin para lampasan ang na-freeze na bank accounts (YouTube)",
	sources_mempool_space:
		"Mempool.space — data ng suplay at pagmimina ng bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — paano sinusuportahan ng bitcoin ang mga EndSARS protesta sa Nigeria",
	sources_pennsylvania_mining:
		"Pagmimina ng bitcoin sa Pennsylvania na nagliligtas ng methane mula sa basurang coal (YouTube)",
	sources_texas_mining:
		"Pagmimina ng bitcoin at ang power grid ng Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Walang inflation ang bitcoin, pero meron sa pera mo.",
	inflation_choose: "Piliin ang iyong currency at tingnan ang katibayan",
	inflation_choose_another: "← Pumili ng ibang currency",
	inflation_sticker_learn: "Matuto kung paano makakatulong ang bitcoin.",
	inflation_sticker_lets_find_out: "Alamin natin.",
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
		`translate-inflation (fil): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
