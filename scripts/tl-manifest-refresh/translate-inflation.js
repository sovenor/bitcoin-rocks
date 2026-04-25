#!/usr/bin/env node
/**
 * Tagalog manifest refresh — inflation namespace translator.
 *
 * Handles per-currency keys (13 currencies × ~25 suffixes), the BTC
 * (`inflation_stat_btc_*`) keys, the shared non-currency labels /
 * stories / sources, and the manifest-changed inflation keys.
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
	"tl.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
//
// Tagalog terminology choices:
//   • "dolyar" (US/AU/CA/NZ), "pound" (GBP, retains English),
//     "real" (BRL), "rupee" (INR), "shekel" (ILS), "yen" (JPY),
//     "piso" (MXN, PHP), "baht" (THB), "euro" (EUR).
//   • Plurals: Tagalog generally doesn't pluralize; we use the
//     bare noun (e.g. "mga dolyar" with the "mga" plural marker).
//   • For "dollars in existence" / "public debt", we use Tagalog
//     phrasing: "Mga ___ na umiiral" / "Pampublikong utang ng <country>".

const CURRENCY = {
	usd: {
		nameNom: "dolyar ng US",
		nameSaSa: "mga dolyar ng US", // "in dollars" → "sa mga dolyar ng US"
		nounPlural: "mga dolyar",
		label: "Dolyar ng US",
		existenceTitle: "Mga dolyar ng US na umiiral",
		debtTitle: "Kabuuang pederal na utang",
	},
	eur: {
		nameNom: "euro",
		nameSaSa: "mga euro",
		nounPlural: "mga euro",
		label: "Euro",
		existenceTitle: "Mga euro na umiiral",
		debtTitle: "Pampublikong utang ng eurozone",
	},
	aud: {
		nameNom: "dolyar ng Australia",
		nameSaSa: "mga dolyar ng Australia",
		nounPlural: "mga dolyar",
		label: "Dolyar ng Australia",
		existenceTitle: "Mga dolyar ng Australia na umiiral",
		debtTitle: "Pampublikong utang ng Australia",
	},
	brl: {
		nameNom: "Brazilian real",
		nameSaSa: "mga Brazilian real",
		nounPlural: "mga real",
		label: "Brazilian real",
		existenceTitle: "Mga real na umiiral",
		debtTitle: "Pampublikong utang ng Brazil",
	},
	cad: {
		nameNom: "dolyar ng Canada",
		nameSaSa: "mga dolyar ng Canada",
		nounPlural: "mga dolyar",
		label: "Dolyar ng Canada",
		existenceTitle: "Mga dolyar ng Canada na umiiral",
		debtTitle: "Pampublikong utang ng Canada",
	},
	gbp: {
		nameNom: "British pound",
		nameSaSa: "mga British pound",
		nounPlural: "mga pound",
		label: "British pound",
		existenceTitle: "Mga pound na umiiral",
		debtTitle: "Pampublikong utang ng United Kingdom",
	},
	ils: {
		nameNom: "Israeli shekel",
		nameSaSa: "mga Israeli shekel",
		nounPlural: "mga shekel",
		label: "Israeli shekel",
		existenceTitle: "Mga shekel na umiiral",
		debtTitle: "Pampublikong utang ng Israel",
	},
	inr: {
		nameNom: "Indian rupee",
		nameSaSa: "mga Indian rupee",
		nounPlural: "mga rupee",
		label: "Indian rupee",
		existenceTitle: "Mga rupee na umiiral",
		debtTitle: "Pampublikong utang ng India",
	},
	jpy: {
		nameNom: "Japanese yen",
		nameSaSa: "mga Japanese yen",
		nounPlural: "mga yen",
		label: "Japanese yen",
		existenceTitle: "Mga yen na umiiral",
		debtTitle: "Pampublikong utang ng Japan",
	},
	mxn: {
		nameNom: "Mexican peso",
		nameSaSa: "mga Mexican peso",
		nounPlural: "mga piso",
		label: "Mexican peso",
		existenceTitle: "Mga peso na umiiral",
		debtTitle: "Pampublikong utang ng Mexico",
	},
	nzd: {
		nameNom: "dolyar ng New Zealand",
		nameSaSa: "mga dolyar ng New Zealand",
		nounPlural: "mga dolyar",
		label: "Dolyar ng New Zealand",
		existenceTitle: "Mga dolyar ng New Zealand na umiiral",
		debtTitle: "Pampublikong utang ng New Zealand",
	},
	php: {
		nameNom: "piso ng Pilipinas",
		nameSaSa: "mga piso ng Pilipinas",
		nounPlural: "mga piso",
		label: "Piso ng Pilipinas",
		existenceTitle: "Mga piso na umiiral",
		debtTitle: "Pampublikong utang ng Pilipinas",
	},
	thb: {
		nameNom: "Thai baht",
		nameSaSa: "mga Thai baht",
		nounPlural: "mga baht",
		label: "Thai baht",
		existenceTitle: "Mga baht na umiiral",
		debtTitle: "Pampublikong utang ng Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) return null;
	switch (suffix) {
		case "intro_1":
			return `Kung nag-iipon ka sa ${c.nameSaSa}, malamang na napansin mo na bawat taon ay paunti nang paunti ang nabibili mo. Mas maraming ${c.nounPlural} ang kailangan mo para bilhin ang parehong dami ng mga bagay. Mas maraming ${c.nounPlural} ang kailangan mo para mapanatili ang iyong pamumuhay.`;
		case "intro_2":
			return `Pero hindi naman kailangang maging ganito.`;
		case "intro_highlight":
			return `Sa nakalipas na apat na taon, nakikita ng mga nag-iipon sa Bitcoin na bumababa ang halaga ng pamumuhay.`;
		case "proof_h2":
			return `Narito ang patunay: nawawalan ng halaga ang iyong pera`;
		case "proof_p1":
			return `Bawat ${c.nameNom} sa iyong bank account ay paunti nang paunti ang nabibili kada taon. Nangyayari ito dahil walang takdang limitasyon sa dami ng ${c.nounPlural} na puwedeng likhain.`;
		case "proof_p2":
			return `Ang walang hanggang supply na ito ang pangunahing dahilan ng inflation. Sa nagdaang ilang taon, dramatikong tumaas ang dami ng ${c.nounPlural} na nasa sirkulasyon.`;
		case "proof_p3":
			return `Kapag mas maraming pera ang nililikha mula sa wala, tumataas ang presyo ng lahat ng bagay. Kasama dito ang mga hilaw na materyales na binibili ng mga negosyo para gumawa ng produkto — na nagdudulot ng mas mataas na presyo para sa iyo.`;
		case "proof_p4":
			return `Habang patuloy na lumalaki ang utang ng pamahalaan, mas marami pang pera ang ipinipi-print, dahil paunti nang paunti ang mga taong handang magpautang sa pamahalaan.`;
		case "proof_p5_before":
			return `Kung hindi ka makakahiram ng pera, hindi ka makakagastos. Pero kapag ang pamahalaan ay`;
		case "proof_p5_link":
			return `hindi makakahiram`;
		case "proof_p5_after":
			return `, basta na lamang ito ay nagpi-print ng mas marami pa.`;
		case "proof_p6":
			return `Mas maraming utang ng pamahalaan ay nangangahulugan ng mas maraming pagpi-print ng pera. Mas maraming pagpi-print ng pera ay nangangahulugan ng mas maraming inflation. At walang palatandaan na ito ay titigil.`;
		case "btc_h2":
			return `Walang inflation ang Bitcoin`;
		case "btc_p1":
			return `Ang inflation ay nangangahulugan na paunti nang paunti ang nabibili ng iyong pera sa paglipas ng panahon. Mas magandang pera ang Bitcoin dahil walang inflation.`;
		case "btc_p2_before":
			return `Walang hanggan ang supply ng ${c.nameNom}, kaya puwede pang mag-print ng higit pa anumang oras.`;
		case "btc_p2_link":
			return `Bibihira ang Bitcoin`;
		case "btc_p2_after":
			return `dahil mayroon itong pinakamataas na supply na 21 milyong Bitcoin. Walang sinuman ang makakapag-print ng higit pang Bitcoin.`;
		case "btc_p3":
			return `Sa kasaysayan, ang Bitcoin ay nakakuha ng kapangyarihang bumili sa paglipas ng panahon, habang ang ${c.nameNom} ay nawalan. Marami ang gumagamit ng Bitcoin bilang isang pangmatagalang savings account — pera na pinapalago nila sa loob ng maraming taon nang hindi ginagalaw.`;
		case "btc_p4":
			return `Mas gugustuhin mo bang mag-ipon sa ${c.nameSaSa} na paunti nang paunti ang nabibili sa paglipas ng panahon? O sa Bitcoin na mas marami ang nabibili sa paglipas ng panahon?`;
		case "freedom_h2":
			return `Kasangkapan din ng kalayaan ang Bitcoin`;
		case "freedom_p1":
			return `Walang sinumang kumokontrol sa Bitcoin network. Walang pamahalaan o korporasyon ang nagpapatakbo nito. Ginawa ito upang protektahan ang iyong kalayaan at ang iyong pera.`;
		case "freedom_p2":
			return `Ang mga tao sa buong mundo ay gumagamit na ng Bitcoin upang protektahan ang kanilang kalayaan — kahit na hindi sila tinutulungan ng kanilang mga pamahalaan o sinusubukang pigilan.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Nawalang kapangyarihang bumili sa 4 na taon";
		case "stat_source_bpr":
			return "Pinagmulan: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── BTC stat keys (inflation_stat_btc_*) ─────────────── */
//
// These are NOT real currency entries — they're the fixed Bitcoin
// stat card. They live under the same `inflation_stat_<code>_<suffix>`
// pattern but `<code>` = "btc".

function tBtc(suffix) {
	switch (suffix) {
		case "stat_label":
			return "Bitcoin";
		case "stat_existence_title":
			return "Mga Bitcoin na umiiral";
		case "stat_debt_title":
			return "Pampublikong utang"; // Not actually used for BTC, but safe fallback.
		case "stat_detail_4yr":
			return "Nakuhang kapangyarihang bumili sa 4 na taon";
		case "stat_source_bpr":
			return "Pinagmulan: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Alamin pa →",
	inflation_freedom_scarce_title: "Bibihira",
	inflation_freedom_scarce_desc:
		"Habambuhay, 21 milyong Bitcoin lamang ang iiral. Walang sinuman ang makakapag-print ng higit pa.",
	inflation_freedom_decentralized_title: "Desentralisado",
	inflation_freedom_decentralized_desc:
		"Walang nag-iisang entity na kumokontrol sa Bitcoin — ni pamahalaan, ni korporasyon.",
	inflation_freedom_permissionless_title: "Walang pahintulot na kailangan",
	inflation_freedom_permissionless_desc:
		"Sinuman ay maaaring sumali sa network mula sa kahit saan. Walang sinuman ang makakapigil sa iyo.",
	inflation_freedom_sovereign_title: "Soberano",
	inflation_freedom_sovereign_desc:
		"Isang bagong sistema na hindi nakadepende sa mga pulitiko at sa kanilang mga hindi natutupad na pangako.",

	// Bitcoin stat card (not the *_btc_* keys, but the dedicated bitcoin stat card)
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milyon",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Nakatakda magpakailanman",
	inflation_stat_bitcoin_source:
		"Pinagmulan: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Ngayon",
	inflation_stat_currency_counting: "at patuloy na umaakyat …",
	inflation_stat_currency_detail_4yr_lost:
		"Nawalang kapangyarihang bumili sa 4 na taon",
	inflation_stat_currency_source_cpi: "Pinagmulan: FRED CPI →",
	inflation_stat_currency_source_debt:
		"Pinagmulan: Pampublikong utang ng FRED →",
	inflation_stat_currency_source_m1:
		"Pinagmulan: Money supply M1 ng FRED →",
	inflation_stat_currency_source_m1_short: "Pinagmulan: FRED →",

	// Stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Nakuha ng mga manggagawa ang access sa kanilang pera sa pamamagitan ng Bitcoin matapos ma-freeze ang kanilang mga bank account.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Pinondohan ng mga manggagawa ang kanilang kilusan gamit ang Bitcoin matapos tumangging suportahan sila ng mga bangko.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Nilinis ng Bitcoin mining ang dumi mula sa karbon na ayaw asikasuhin ng pamahalaan.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Tumulong ang Bitcoin mining para mapanatiling tumatakbo ang grid ng kuryente sa panahon ng isang malaking bagyo.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — chart ng 4-na-taong return (lahat ng pera)",
	sources_bitcoin_source_code:
		"Source code ng Bitcoin — limitasyong supply na 21 milyon",
	sources_canadian_trucker:
		"Protesta ng mga Canadian trucker — ginamit ang Bitcoin upang madaanan ang mga na-freeze na bank account (YouTube)",
	sources_mempool_space:
		"Mempool.space — datos ng supply at mining ng Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — kung paano pinagagana ng Bitcoin ang mga protestang EndSARS sa Nigeria",
	sources_pennsylvania_mining:
		"Pinapalitan ng Bitcoin mining sa Pennsylvania ang methane mula sa basurang karbon (YouTube)",
	sources_texas_mining:
		"Bitcoin mining at ang grid ng kuryente ng Texas (YouTube)",

	// Currency list (these are uppercase labels in the existing tl
	// inflation file — keep that style for visual consistency).
	inflation_brazilian_real: "BRAZILIAN REAL",
	inflation_british_pound: "BRITISH POUND",
	inflation_indian_rupee: "INDIAN RUPEE",
	inflation_israeli_shekel: "ISRAELI SHEKEL",
	inflation_japanese_yen: "JAPANESE YEN",
	inflation_mexican_peso: "MEXICAN PESO",
	inflation_thai_baht: "THAI BAHT",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Walang inflation ang Bitcoin, pero ang iyong pera ay meron.",
	inflation_choose: "Piliin ang iyong pera para makita ang patunay",
	inflation_choose_another: "← Pumili ng ibang pera",
	inflation_sticker_learn: "Alamin kung paano makakatulong ang Bitcoin.",
	inflation_sticker_lets_find_out: "Alamin natin.",
};

// Brand-identical keys that legitimately match English (allow-list)
const BRAND_IDENTICAL = new Set([
	"inflation_brazilian_real",
	"inflation_british_pound",
	"inflation_indian_rupee",
	"inflation_israeli_shekel",
	"inflation_japanese_yen",
	"inflation_mexican_peso",
	"inflation_thai_baht",
]);

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

		// Per-currency stat keys: inflation_stat_<code>_<suffix>
		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			if (code === "btc") {
				const value = tBtc(suffix);
				if (value !== null) {
					e.targetTranslation = value;
					filled++;
					continue;
				}
			} else {
				const value = t(code, suffix);
				if (value !== null) {
					e.targetTranslation = value;
					filled++;
					continue;
				}
			}
		}

		// Per-currency body keys: inflation_<code>_<suffix>
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
		`translate-inflation (tl): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
