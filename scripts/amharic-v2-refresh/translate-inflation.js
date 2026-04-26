#!/usr/bin/env node
/**
 * Amharic V2 refresh — inflation namespace translator.
 *
 * Fills `targetTranslation` for the ~364 entries in the `inflation`
 * namespace of scripts/i18n-audit/reports/am.json.
 *
 * Idempotent: re-running just overwrites targetTranslation on the same
 * entries.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"am.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

// Amharic script (ፊደል) is used throughout. Amharic doesn't distinguish
// upper/lower case — stat_label values are simply the noun phrase.
const CURRENCY = {
	usd: {
		longName: "የአሜሪካ ዶላር",
		noun: "ዶላር",
		label: "የአሜሪካ ዶላር",
		existenceTitle: "በስርጭት ላይ ያሉ ዶላሮች",
		debtTitle: "አጠቃላይ የፌዴራል ዕዳ",
	},
	eur: {
		longName: "ዩሮ",
		noun: "ዩሮ",
		label: "ዩሮ",
		existenceTitle: "በስርጭት ላይ ያሉ ዩሮዎች",
		debtTitle: "የዩሮ ዞን የመንግሥት ዕዳ",
	},
	aud: {
		longName: "የአውስትራሊያ ዶላር",
		noun: "ዶላር",
		label: "የአውስትራሊያ ዶላር",
		existenceTitle: "በስርጭት ላይ ያሉ የአውስትራሊያ ዶላሮች",
		debtTitle: "የአውስትራሊያ መንግሥት ዕዳ",
	},
	brl: {
		longName: "የብራዚል ሪያል",
		noun: "ሪያል",
		label: "የብራዚል ሪያል",
		existenceTitle: "በስርጭት ላይ ያሉ ሪያሎች",
		debtTitle: "የብራዚል መንግሥት ዕዳ",
	},
	cad: {
		longName: "የካናዳ ዶላር",
		noun: "ዶላር",
		label: "የካናዳ ዶላር",
		existenceTitle: "በስርጭት ላይ ያሉ የካናዳ ዶላሮች",
		debtTitle: "የካናዳ መንግሥት ዕዳ",
	},
	gbp: {
		longName: "የብሪታንያ ፓውንድ",
		noun: "ፓውንድ",
		label: "የብሪታንያ ፓውንድ",
		existenceTitle: "በስርጭት ላይ ያሉ ፓውንዶች",
		debtTitle: "የብሪታንያ መንግሥት ዕዳ",
	},
	ils: {
		longName: "የእስራኤል ሸከል",
		noun: "ሸከል",
		label: "የእስራኤል ሸከል",
		existenceTitle: "በስርጭት ላይ ያሉ ሸከሎች",
		debtTitle: "የእስራኤል መንግሥት ዕዳ",
	},
	inr: {
		longName: "የህንድ ሩፒ",
		noun: "ሩፒ",
		label: "የህንድ ሩፒ",
		existenceTitle: "በስርጭት ላይ ያሉ ሩፒዎች",
		debtTitle: "የህንድ መንግሥት ዕዳ",
	},
	jpy: {
		longName: "የጃፓን ዬን",
		noun: "ዬን",
		label: "የጃፓን ዬን",
		existenceTitle: "በስርጭት ላይ ያሉ ዬኖች",
		debtTitle: "የጃፓን መንግሥት ዕዳ",
	},
	mxn: {
		longName: "የሜክሲኮ ፔሶ",
		noun: "ፔሶ",
		label: "የሜክሲኮ ፔሶ",
		existenceTitle: "በስርጭት ላይ ያሉ ፔሶዎች",
		debtTitle: "የሜክሲኮ መንግሥት ዕዳ",
	},
	nzd: {
		longName: "የኒው ዚላንድ ዶላር",
		noun: "ዶላር",
		label: "የኒው ዚላንድ ዶላር",
		existenceTitle: "በስርጭት ላይ ያሉ የኒው ዚላንድ ዶላሮች",
		debtTitle: "የኒው ዚላንድ መንግሥት ዕዳ",
	},
	php: {
		longName: "የፊሊፒንስ ፔሶ",
		noun: "ፔሶ",
		label: "የፊሊፒንስ ፔሶ",
		existenceTitle: "በስርጭት ላይ ያሉ ፔሶዎች",
		debtTitle: "የፊሊፒንስ መንግሥት ዕዳ",
	},
	thb: {
		longName: "የታይላንድ ባህት",
		noun: "ባህት",
		label: "የታይላንድ ባህት",
		existenceTitle: "በስርጭት ላይ ያሉ ባህቶች",
		debtTitle: "የታይላንድ መንግሥት ዕዳ",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `በ${c.longName} የሚቆጥቡ ከሆነ በየዓመቱ ያነሰ ነገር እንደሚገዛልዎ አስተውለዋል። ተመሳሳይ መጠን ያለ ምግብ ለመግዛት ተጨማሪ ${c.noun} ይፈልጋል። የኑሮ ጥራትዎን ለመጠበቅ ተጨማሪ ${c.noun} ያስፈልግዎታል።`;
		case "intro_2":
			return `ነገር ግን ይህ እንዲህ መሆን የለበትም።`;
		case "intro_highlight":
			return `ባለፉት 4 ዓመታት በቢትኮይን ሲቆጥቡ የነበሩ ሰዎች ኑሮ እየረከሰ መምጣቱን አይተዋል።`;
		case "proof_h2":
			return `ማስረጃው ይኸው፦ ገንዘብዎ ዋጋውን እያጣ ነው`;
		case "proof_p1":
			return `በባንክ ሂሳብዎ ውስጥ ያለው ${c.noun} በየዓመቱ ያነሰ ይገዛልዎታል። ይህ የሆነው ምን ያህል ${c.noun} ሊፈጠር እንደሚችል ቋሚ ገደብ ስለሌለ ነው።`;
		case "proof_p2":
			return `ይህ ያልተገደበ አቅርቦት የዋጋ ግሽበት መሰረታዊ ምክንያት ነው። ባለፉት ጥቂት ዓመታት ውስጥ በስርጭት ላይ ያለው አጠቃላይ ${c.noun} መጠን በከፍተኛ ሁኔታ ጨምሯል።`;
		case "proof_p3":
			return `ከምንም ተጨማሪ ገንዘብ ሲፈጠር የሁሉም ነገር ዋጋ ይጨምራል። ይህ ኩባንያዎች ምርቶቻቸውን ለመሥራት የሚገዙትን ጥሬ ዕቃዎች ያጠቃልላል — ይህም ለእርስዎ ከፍተኛ ዋጋዎችን ያስከትላል።`;
		case "proof_p4":
			return `እና መንግሥት ዕዳውን ማሳደግ ሲቀጥል፣ ብዙ ሰዎች ለእሱ ማበደር ስለማይፈልጉ ተጨማሪ ገንዘብ ይታተማል።`;
		case "proof_p5_before":
			return `ብድር ማግኘት ካልቻሉ ገንዘብ ማውጣት አይችሉም። ነገር ግን መንግሥት`;
		case "proof_p5_link":
			return `ብድር ማግኘት ካልቻለ`;
		case "proof_p5_after":
			return `፣ በቀላሉ ገንዘቡን ያትማል።`;
		case "proof_p6":
			return `ብዙ የመንግሥት ዕዳ ማለት ብዙ ገንዘብ ማተም ማለት ነው። ብዙ ገንዘብ ማተም ማለት ብዙ ዋጋ ግሽበት ማለት ነው። እናም የሚቆምበት ምልክት የለም።`;
		case "btc_h2":
			return `ቢትኮይን ዋጋ ግሽበት የለውም`;
		case "btc_p1":
			return `ዋጋ ግሽበት ማለት ገንዘብዎ ከጊዜ ወደ ጊዜ ያነሰ ይገዛልዎታል ማለት ነው። ቢትኮይን የተሻለ ገንዘብ ነው ምክንያቱም ዋጋ ግሽበት ስለሌለው።`;
		case "btc_p2_before":
			return `${c.noun} ያልተገደበ አቅርቦት አለው፣ ማለትም በማንኛውም ጊዜ ተጨማሪ ሊታተም ይችላል።`;
		case "btc_p2_link":
			return `ቢትኮይን ውስን ነው`;
		case "btc_p2_after":
			return `ምክንያቱም ከፍተኛ የ21 ሚሊዮን ቢትኮይን አቅርቦት አለው። ማንም ተጨማሪ ቢትኮይን ማተም አይችልም።`;
		case "btc_p3":
			return `ከታሪክ አንፃር፣ ${c.longName} ግዢ ኃይሉን እያጣ በነበረበት ጊዜ ቢትኮይን ከጊዜ ወደ ጊዜ ግዢ ኃይል አግኝቷል። ብዙ ሰዎች ቢትኮይንን እንደ ረዥም ጊዜ የቁጠባ ሂሳባቸው ይጠቀሙበታል፦ ለተወሰኑ ዓመታት ያለ ንክኪ እንዲያድግ የሚተዉት ገንዘብ።`;
		case "btc_p4":
			return `ከጊዜ ወደ ጊዜ ያነሰ የሚገዛልዎትን ${c.noun} መቆጠብ ይመርጣሉ? ወይስ ከታሪክ አንፃር ከጊዜ ወደ ጊዜ ብዙ የሚገዛልዎትን ቢትኮይን መቆጠብ?`;
		case "freedom_h2":
			return `ቢትኮይን ደግሞ የነፃነት መሣሪያ ነው`;
		case "freedom_p1":
			return `የቢትኮይን አውታረ መረብ በማንም ባለቤትነት አይደለም። በማንኛውም መንግሥት ወይም ኩባንያ አይተዳደርም። የእርስዎን ነፃነት ለመጠበቅ እና ገንዘብዎን ለመጠበቅ ተሰርቷል።`;
		case "freedom_p2":
			return `በዓለም ዙሪያ ያሉ ሰዎች ነፃነታቸውን ለመጠበቅ ቀድሞውኑ ቢትኮይንን እየተጠቀሙ ነው — የራሳቸው መንግሥት እነሱን ለመርዳት ፈቃደኛ ባልሆነበት ወይም ሊያስቆማቸው በሞከረበት ጊዜ እንኳን።`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "ባለፉት 4 ዓመታት የጠፋ ግዢ ኃይል";
		case "stat_source_bpr":
			return "ምንጭ: የቢትኮይን ዋጋ ሪፖርት →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// H1 + freedom cards
	inflation_h1_orange: "ቢትኮይን ዋጋ ግሽበት የለውም፣ ገንዘብዎ ግን አለው።",
	inflation_freedom_learn_more: "ተጨማሪ ይወቁ →",
	inflation_freedom_scarce_title: "ውስን",
	inflation_freedom_scarce_desc:
		"ለዘላለም 21 ሚሊዮን ቢትኮይን ብቻ ይኖራል። ማንም ተጨማሪ ማተም አይችልም።",
	inflation_freedom_decentralized_title: "ያልተማከለ",
	inflation_freedom_decentralized_desc:
		"ቢትኮይንን የሚቆጣጠር ማንኛውም ነጠላ አካል — መንግሥት ይሁን ኩባንያ — የለም።",
	inflation_freedom_permissionless_title: "ያለ ፈቃድ",
	inflation_freedom_permissionless_desc:
		"ማንኛውም ሰው፣ ከየትኛውም ቦታ፣ ወደ አውታረ መረቡ መቀላቀል ይችላል። ማንም ሊያቆምዎ አይችልም።",
	inflation_freedom_sovereign_title: "ሉዓላዊ",
	inflation_freedom_sovereign_desc:
		"ከፖለቲከኞች እና ከተሰበሩ ተስፋዎቻቸው ነፃ የሆነ አዲስ ስርዓት።",

	// Bitcoin stat card (the one non-fiat card)
	inflation_stat_bitcoin_label: "ቢትኮይን",
	inflation_stat_bitcoin_value: "21 ሚሊዮን",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "ለዘላለም የተስተካከለ",
	inflation_stat_bitcoin_source: "ምንጭ: የቢትኮይን ነጭ ወረቀት →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "ዛሬ",
	inflation_stat_currency_counting: "እና አሁንም እየቆጠረ ነው...",
	inflation_stat_currency_detail_4yr_lost: "ባለፉት 4 ዓመታት የጠፋ ግዢ ኃይል",
	inflation_stat_currency_source_cpi: "ምንጭ: FRED CPI →",
	inflation_stat_currency_source_debt: "ምንጭ: FRED የመንግሥት ዕዳ →",
	inflation_stat_currency_source_m1: "ምንጭ: FRED ጠባብ የገንዘብ አቅርቦት →",
	inflation_stat_currency_source_m1_short: "ምንጭ: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr: "ባለፉት 4 ዓመታት የተገኘ ግዢ ኃይል",
	inflation_stat_btc_source_bpr: "ምንጭ: የቢትኮይን ዋጋ ሪፖርት →",

	// Freedom stories
	inflation_story_canada_title: "ካናዳ",
	inflation_story_canada_desc:
		"ሠራተኞች የባንክ ሂሳቦቻቸው ከተቀዘቀዙ በኋላ ገንዘብ ለማግኘት ቢትኮይንን ተጠቀሙ።",
	inflation_story_nigeria_title: "ናይጄሪያ",
	inflation_story_nigeria_desc:
		"ተቃዋሚዎች ባንኮች ከለዩዋቸው በኋላ ንቅናቄያቸውን ለመደገፍ ቢትኮይንን ተጠቀሙ።",
	inflation_story_pennsylvania_title: "ፔንሲልቬንያ",
	inflation_story_pennsylvania_desc:
		"የቢትኮይን ማዕድን ማውጣት መንግሥት ለማስተናገድ ፈቃደኛ ያልሆነውን የድንጋይ ከሰል ቆሻሻ አጸዳ።",
	inflation_story_texas_title: "ቴክሳስ",
	inflation_story_texas_desc:
		"የቢትኮይን ማዕድን ማውጣት በከባድ አውሎ ንፋስ ጊዜ መብራቱ እንዲበራ ረድቷል።",

	// Sources
	sources_bitcoin_price_report_4yr:
		"የቢትኮይን ዋጋ ሪፖርት — በ4 ዓመታት የአፈጻጸም ገበታዎች (ሁሉም ገንዘቦች)",
	sources_bitcoin_source_code:
		"የቢትኮይን ምንጭ ኮድ — 21 ሚሊዮን የአቅርቦት ገደብ",
	sources_canadian_trucker:
		"የካናዳ የጭነት ሹፌር ተቃውሞ — የቀዘቀዙ የባንክ ሂሳቦችን ለማለፍ ቢትኮይን ጥቅም ላይ ውሏል (YouTube)",
	sources_mempool_space: "Mempool.space — የቢትኮይን አቅርቦት እና ማዕድን ማውጣት መረጃ",
	sources_nigeria_endsars:
		"Quartz Africa — ቢትኮይን የናይጄሪያን EndSARS ተቃውሞዎች እንዴት እንዳንቀሳቀሰ",
	sources_pennsylvania_mining:
		"በፔንሲልቬንያ የቢትኮይን ማዕድን ማውጣት ሚቴን ቆሻሻን እንደገና ይጠቀማል (YouTube)",
	sources_texas_mining:
		"በቴክሳስ የቢትኮይን ማዕድን ማውጣት እና የኤሌክትሪክ ኃይል አውታረ መረብ (YouTube)",

	// Legacy / already-known
	inflation_euro: "ዩሮ",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (e.targetTranslation !== null && e.targetTranslation !== undefined) {
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

		console.log(
			"  [UNMATCHED]",
			e.key,
			"::",
			JSON.stringify(e.englishValue).slice(0, 80),
		);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation: filled ${filled}, already-done ${skipped}`,
	);
}

main();
