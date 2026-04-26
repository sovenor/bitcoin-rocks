#!/usr/bin/env node
/**
 * Tamil manifest refresh — inflation namespace translator.
 *
 * Handles per-currency keys (14 currencies × ~25 suffixes; btc has 1 suffix)
 * plus shared non-currency labels / stories / sources / manifest-changed keys.
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
	"ta.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "அமெரிக்க டாலர்களில்",
		longNameNom: "அமெரிக்க டாலர்",
		nounPlural: "டாலர்கள்",
		nounPluralAcc: "டாலர்கள் தேவை",
		label: "அமெரிக்க டாலர்",
		existenceTitle: "புழக்கத்தில் உள்ள அமெரிக்க டாலர்கள்",
		debtTitle: "மொத்த கூட்டாட்சி கடன்",
	},
	eur: {
		longName: "யூரோக்களில்",
		longNameNom: "யூரோ",
		nounPlural: "யூரோக்கள்",
		nounPluralAcc: "யூரோக்கள் தேவை",
		label: "யூரோ",
		existenceTitle: "புழக்கத்தில் உள்ள யூரோக்கள்",
		debtTitle: "யூரோ மண்டலத்தின் பொதுக் கடன்",
	},
	aud: {
		longName: "ஆஸ்திரேலிய டாலர்களில்",
		longNameNom: "ஆஸ்திரேலிய டாலர்",
		nounPlural: "ஆஸ்திரேலிய டாலர்கள்",
		nounPluralAcc: "ஆஸ்திரேலிய டாலர்கள் தேவை",
		label: "ஆஸ்திரேலிய டாலர்",
		existenceTitle: "புழக்கத்தில் உள்ள ஆஸ்திரேலிய டாலர்கள்",
		debtTitle: "ஆஸ்திரேலியாவின் பொதுக் கடன்",
	},
	brl: {
		longName: "பிரேசிலிய ரியால்களில்",
		longNameNom: "பிரேசிலிய ரியால்",
		nounPlural: "ரியால்கள்",
		nounPluralAcc: "ரியால்கள் தேவை",
		label: "பிரேசிலிய ரியால்",
		existenceTitle: "புழக்கத்தில் உள்ள ரியால்கள்",
		debtTitle: "பிரேசிலின் பொதுக் கடன்",
	},
	cad: {
		longName: "கனேடிய டாலர்களில்",
		longNameNom: "கனேடிய டாலர்",
		nounPlural: "கனேடிய டாலர்கள்",
		nounPluralAcc: "கனேடிய டாலர்கள் தேவை",
		label: "கனேடிய டாலர்",
		existenceTitle: "புழக்கத்தில் உள்ள கனேடிய டாலர்கள்",
		debtTitle: "கனடாவின் பொதுக் கடன்",
	},
	gbp: {
		longName: "பிரிட்டிஷ் பவுண்டுகளில்",
		longNameNom: "பிரிட்டிஷ் பவுண்டு",
		nounPlural: "பவுண்டுகள்",
		nounPluralAcc: "பவுண்டுகள் தேவை",
		label: "பிரிட்டிஷ் பவுண்டு",
		existenceTitle: "புழக்கத்தில் உள்ள பவுண்டுகள்",
		debtTitle: "ஐக்கிய இராச்சியத்தின் பொதுக் கடன்",
	},
	ils: {
		longName: "இஸ்ரேலிய ஷெக்கல்களில்",
		longNameNom: "இஸ்ரேலிய ஷெக்கல்",
		nounPlural: "ஷெக்கல்கள்",
		nounPluralAcc: "ஷெக்கல்கள் தேவை",
		label: "இஸ்ரேலிய ஷெக்கல்",
		existenceTitle: "புழக்கத்தில் உள்ள ஷெக்கல்கள்",
		debtTitle: "இஸ்ரேலின் பொதுக் கடன்",
	},
	inr: {
		longName: "இந்திய ரூபாயில்",
		longNameNom: "இந்திய ரூபாய்",
		nounPlural: "ரூபாய்கள்",
		nounPluralAcc: "ரூபாய்கள் தேவை",
		label: "இந்திய ரூபாய்",
		existenceTitle: "புழக்கத்தில் உள்ள ரூபாய்கள்",
		debtTitle: "இந்தியாவின் பொதுக் கடன்",
	},
	jpy: {
		longName: "ஜப்பானிய யென்களில்",
		longNameNom: "ஜப்பானிய யென்",
		nounPlural: "யென்கள்",
		nounPluralAcc: "யென்கள் தேவை",
		label: "ஜப்பானிய யென்",
		existenceTitle: "புழக்கத்தில் உள்ள யென்கள்",
		debtTitle: "ஜப்பானின் பொதுக் கடன்",
	},
	mxn: {
		longName: "மெக்சிகன் பெசோக்களில்",
		longNameNom: "மெக்சிகன் பெசோ",
		nounPlural: "பெசோக்கள்",
		nounPluralAcc: "பெசோக்கள் தேவை",
		label: "மெக்சிகன் பெசோ",
		existenceTitle: "புழக்கத்தில் உள்ள பெசோக்கள்",
		debtTitle: "மெக்சிகோவின் பொதுக் கடன்",
	},
	nzd: {
		longName: "நியூசிலாந்து டாலர்களில்",
		longNameNom: "நியூசிலாந்து டாலர்",
		nounPlural: "நியூசிலாந்து டாலர்கள்",
		nounPluralAcc: "நியூசிலாந்து டாலர்கள் தேவை",
		label: "நியூசிலாந்து டாலர்",
		existenceTitle: "புழக்கத்தில் உள்ள நியூசிலாந்து டாலர்கள்",
		debtTitle: "நியூசிலாந்தின் பொதுக் கடன்",
	},
	php: {
		longName: "பிலிப்பைன் பெசோக்களில்",
		longNameNom: "பிலிப்பைன் பெசோ",
		nounPlural: "பெசோக்கள்",
		nounPluralAcc: "பெசோக்கள் தேவை",
		label: "பிலிப்பைன் பெசோ",
		existenceTitle: "புழக்கத்தில் உள்ள பெசோக்கள்",
		debtTitle: "பிலிப்பைன்ஸின் பொதுக் கடன்",
	},
	thb: {
		longName: "தாய் பாட்டுகளில்",
		longNameNom: "தாய் பாட்",
		nounPlural: "பாட்டுகள்",
		nounPluralAcc: "பாட்டுகள் தேவை",
		label: "தாய் பாட்",
		existenceTitle: "புழக்கத்தில் உள்ள பாட்டுகள்",
		debtTitle: "தாய்லாந்தின் பொதுக் கடன்",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) return null;
	switch (suffix) {
		case "intro_1":
			return `நீங்கள் ${c.longName} சேமிப்பீர்களானால், ஒவ்வொரு ஆண்டும் குறைவாகவே வாங்க முடிகிறது என்பதை நீங்கள் கவனித்திருப்பீர்கள். அதே அளவு பொருட்களை வாங்க அதிக ${c.nounPlural} தேவை. உங்கள் வாழ்க்கைத் தரத்தைத் தக்கவைக்க அதிக ${c.nounPlural} தேவை.`;
		case "intro_2":
			return `ஆனால் இது இப்படியே இருக்க வேண்டிய அவசியமில்லை.`;
		case "intro_highlight":
			return `கடந்த நான்கு ஆண்டுகளில், Bitcoin-இல் சேமிப்போருக்கு வாழ்க்கை மலிவாகி வருவதைக் காண்கிறார்கள்.`;
		case "proof_h2":
			return `இதோ ஆதாரம்: உங்கள் பணம் மதிப்பை இழக்கிறது`;
		case "proof_p1":
			return `உங்கள் வங்கிக் கணக்கில் உள்ள ஒவ்வொரு ${c.longNameNom}ம் ஆண்டுதோறும் குறைவாகவே வாங்குகிறது. உருவாக்கப்படக்கூடிய ${c.nounPlural} எண்ணிக்கைக்கு வரம்பே இல்லை என்பதே இதற்குக் காரணம்.`;
		case "proof_p2":
			return `இந்த வரையறையற்ற வழங்கலே பணவீக்கத்தின் முதன்மைக் காரணம். கடந்த சில ஆண்டுகளில், புழக்கத்தில் உள்ள ${c.nounPlural} எண்ணிக்கை வியக்கத்தக்க அளவில் உயர்ந்துள்ளது.`;
		case "proof_p3":
			return `பணம் வெறுமையிலிருந்து அதிகம் உருவாக்கப்படும்போது, ​​அனைத்தின் விலையும் உயர்கிறது. இதில் நிறுவனங்கள் தயாரிப்புகளை உருவாக்க வாங்கும் மூலப்பொருட்களும் அடங்கும் — இதன் விளைவாக உங்களுக்கு அதிக விலை.`;
		case "proof_p4":
			return `அரசாங்கக் கடன் தொடர்ந்து உயரும்போது, ​​அரசாங்கத்திற்கு கடன் கொடுக்கத் தயாராக உள்ளவர்கள் குறைவாகவே இருப்பதால், அதிக பணம் அச்சிடப்படுகிறது.`;
		case "proof_p5_before":
			return `உங்களால் கடன் வாங்க முடியவில்லை என்றால், செலவு செய்ய முடியாது. ஆனால் ஒரு அரசாங்கம்`;
		case "proof_p5_link":
			return `கடன் வாங்க முடியாதபோது`;
		case "proof_p5_after":
			return `, அது மேலும் பணத்தை அச்சிட்டுவிடும்.`;
		case "proof_p6":
			return `அதிகமான அரசாங்கக் கடன் என்றால் அதிகமான பண அச்சடிப்பு. அதிகமான பண அச்சடிப்பு என்றால் அதிகமான பணவீக்கம். இது நிற்கும் என எந்த அறிகுறியும் இல்லை.`;
		case "btc_h2":
			return `Bitcoin-இல் பணவீக்கம் இல்லை`;
		case "btc_p1":
			return `பணவீக்கம் என்றால் காலப்போக்கில் உங்கள் பணம் குறைவாகவே வாங்கும் என்று அர்த்தம். Bitcoin நல்ல பணம், ஏனெனில் அதில் பணவீக்கம் இல்லை.`;
		case "btc_p2_before":
			return `${c.longNameNom}-இன் வழங்கல் வரம்பற்றது, அதாவது எப்போது வேண்டுமானாலும் அதிகம் அச்சிடலாம்.`;
		case "btc_p2_link":
			return `Bitcoin அரிதானது`;
		case "btc_p2_after":
			return `, 21 மில்லியன் bitcoins-ஆக கடினமான மேல் வரம்புடன். யாராலும் அதிகம் உருவாக்க முடியாது.`;
		case "btc_p3":
			return `வரலாற்று ரீதியாக, Bitcoin காலப்போக்கில் வாங்கும் சக்தியைப் பெற்றுள்ளது, அதே நேரத்தில் ${c.longNameNom} இழந்துள்ளது. பலர் Bitcoin-ஐ நீண்டகால சேமிப்புக் கணக்காகப் பயன்படுத்துகிறார்கள் — ஆண்டுக்கணக்கில் தொடாமல் வளர விட்டுவிடும் பணம்.`;
		case "btc_p4":
			return `காலப்போக்கில் குறைவாக வாங்கும் ${c.longName} சேமிக்க விரும்புகிறீர்களா? அல்லது காலப்போக்கில் அதிகம் வாங்கிய Bitcoin-இலா?`;
		case "freedom_h2":
			return `Bitcoin ஒரு சுதந்திர கருவியும் ஆகும்`;
		case "freedom_p1":
			return `Bitcoin நெட்வொர்க்கை யாரும் கட்டுப்படுத்துவதில்லை. எந்த அரசாங்கமோ நிறுவனமோ அதை இயக்குவதில்லை. உங்கள் சுதந்திரத்தையும் உங்கள் பணத்தையும் பாதுகாக்க அது கட்டமைக்கப்பட்டுள்ளது.`;
		case "freedom_p2":
			return `உலகெங்கிலும் உள்ள மக்கள் தங்கள் சுதந்திரத்தைப் பாதுகாக்க Bitcoin-ஐ ஏற்கனவே பயன்படுத்துகின்றனர் — அவர்களின் அரசாங்கங்கள் அவர்களுக்கு உதவ மறுக்கும்போது அல்லது அவர்களைத் தடுக்க முயற்சிக்கும்போது கூட.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 ஆண்டுகளில் இழந்த வாங்கும் சக்தி";
		case "stat_source_bpr":
			return "ஆதாரம்: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "மேலும் அறிய →",
	inflation_freedom_scarce_title: "அரிதானது",
	inflation_freedom_scarce_desc:
		"எப்போதும் 21 மில்லியன் bitcoins மட்டுமே இருக்கும். யாராலும் அதிகம் அச்சிட முடியாது.",
	inflation_freedom_decentralized_title: "பரவலாக்கப்பட்டது",
	inflation_freedom_decentralized_desc:
		"எந்த ஒற்றை அமைப்பாலும் — அரசாங்கமோ நிறுவனமோ — Bitcoin கட்டுப்படுத்தப்படுவதில்லை.",
	inflation_freedom_permissionless_title: "அனுமதியற்றது",
	inflation_freedom_permissionless_desc:
		"எங்கிருந்தும் யார் வேண்டுமானாலும் நெட்வொர்க்கில் இணையலாம். யாராலும் உங்களைத் தடுக்க முடியாது.",
	inflation_freedom_sovereign_title: "இறையாண்மையானது",
	inflation_freedom_sovereign_desc:
		"அரசியல்வாதிகள் மற்றும் அவர்களின் நிறைவேற்றப்படாத வாக்குறுதிகளிலிருந்து சுதந்திரமான ஒரு புதிய அமைப்பு.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 மில்லியன்",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "என்றென்றும் கடினமாக நிர்ணயிக்கப்பட்டுள்ளது",
	inflation_stat_bitcoin_source: "ஆதாரம்: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "இன்று",
	inflation_stat_currency_counting: "மற்றும் தொடர்ந்து உயர்கிறது…",
	inflation_stat_currency_detail_4yr_lost:
		"4 ஆண்டுகளில் இழந்த வாங்கும் சக்தி",
	inflation_stat_currency_source_cpi: "ஆதாரம்: FRED CPI →",
	inflation_stat_currency_source_debt: "ஆதாரம்: FRED அரசுக் கடன் →",
	inflation_stat_currency_source_m1: "ஆதாரம்: FRED பண வழங்கல் M1 →",
	inflation_stat_currency_source_m1_short: "ஆதாரம்: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 ஆண்டுகளில் பெற்ற வாங்கும் சக்தி",
	inflation_stat_btc_source_bpr: "ஆதாரம்: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "கனடா",
	inflation_story_canada_desc:
		"வங்கிக் கணக்குகள் முடக்கப்பட்ட பிறகு, தொழிலாளர்கள் Bitcoin மூலம் தங்கள் பணத்தை அணுகினர்.",
	inflation_story_nigeria_title: "நைஜீரியா",
	inflation_story_nigeria_desc:
		"வங்கிகள் ஆதரிக்க மறுத்தபோது, ​​போராட்டக்காரர்கள் Bitcoin மூலம் தங்கள் இயக்கத்திற்கு நிதியளித்தனர்.",
	inflation_story_pennsylvania_title: "பென்சில்வேனியா",
	inflation_story_pennsylvania_desc:
		"அரசாங்கம் கையாள மறுத்த நிலக்கரிக் கழிவுகளை Bitcoin சுரங்கம் சுத்தம் செய்தது.",
	inflation_story_texas_title: "டெக்சாஸ்",
	inflation_story_texas_desc:
		"பெரிய புயலின் போது மின் கட்டத்தை இயங்க வைக்க Bitcoin சுரங்கம் உதவியது.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 ஆண்டு வருவாய் வரைபடம் (அனைத்து நாணயங்களும்)",
	sources_bitcoin_source_code:
		"Bitcoin மூலக் குறியீடு — 21 மில்லியன் வழங்கல் வரம்பு",
	sources_canadian_trucker:
		"கனேடிய டிரக் ஓட்டுநர் போராட்டம் — முடக்கப்பட்ட வங்கிக் கணக்குகளைத் தவிர்க்க Bitcoin பயன்படுத்தப்பட்டது (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin வழங்கல் மற்றும் சுரங்கத் தரவு",
	sources_nigeria_endsars:
		"Quartz Africa — நைஜீரியாவில் EndSARS போராட்டங்களை Bitcoin எவ்வாறு இயக்குகிறது",
	sources_pennsylvania_mining:
		"பென்சில்வேனியாவில் Bitcoin சுரங்கம் நிலக்கரிக் கழிவுகளிலிருந்து மீத்தேனை மீட்கிறது (YouTube)",
	sources_texas_mining:
		"Bitcoin சுரங்கம் மற்றும் டெக்சாஸ் மின் கட்டம் (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin-இல் பணவீக்கம் இல்லை, ஆனால் உங்கள் பணத்தில் உள்ளது.",
	inflation_choose: "உங்கள் நாணயத்தைத் தேர்ந்தெடுத்து ஆதாரத்தைப் பாருங்கள்",
	inflation_choose_another: "← வேறு நாணயத்தைத் தேர்ந்தெடுக்கவும்",
	inflation_sticker_learn: "Bitcoin எவ்வாறு உதவ முடியும் என்பதை அறியுங்கள்.",
	inflation_sticker_lets_find_out: "வாருங்கள் கண்டறியலாம்.",
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
		`translate-inflation (ta): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
