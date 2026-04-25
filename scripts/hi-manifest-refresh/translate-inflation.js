#!/usr/bin/env node
/**
 * Hindi manifest refresh — inflation namespace translator.
 *
 * Hindi conventions:
 * - Devanagari script.
 * - Standard polite 2nd-person "आप" — universal register for Hindi
 *   educational content (Mint Hindi, BBC Hindi, Bloomberg Hindi all
 *   use आप; informal तू/तुम would feel disrespectful in finance copy).
 * - Western digits (0-9) — universal in modern Indian financial
 *   press for numeric figures (Mint, Economic Times Hindi, RBI all
 *   use Western digits).
 * - "Bitcoin" → "बिटकॉइन" (Devanagari transliteration; standard in
 *   Indian crypto press).
 * - Numeric format: comma thousand separator, period decimal —
 *   English convention used by the rendered dataset values, not the
 *   Indian lakh/crore system, because the cards display the raw
 *   figures from the FRED dataset.
 * - "million" → "मिलियन", "billion" → "बिलियन", "trillion" → "ट्रिलियन"
 *   (international short scale; Indian finance press blends both
 *   systems but the dataset values use millions / trillions
 *   consistently).
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
	"hi.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inPhrase: "अमेरिकी डॉलर में",
		noun: "डॉलर",
		nounPlural: "डॉलर",
		label: "अमेरिकी डॉलर",
		existenceTitle: "प्रचलन में अमेरिकी डॉलर",
		debtTitle: "अमेरिकी सरकार का कुल कर्ज़",
	},
	eur: {
		inPhrase: "यूरो में",
		noun: "यूरो",
		nounPlural: "यूरो",
		label: "यूरो",
		existenceTitle: "प्रचलन में यूरो",
		debtTitle: "यूरोज़ोन सरकारों का कुल कर्ज़",
	},
	aud: {
		inPhrase: "ऑस्ट्रेलियाई डॉलर में",
		noun: "ऑस्ट्रेलियाई डॉलर",
		nounPlural: "ऑस्ट्रेलियाई डॉलर",
		label: "ऑस्ट्रेलियाई डॉलर",
		existenceTitle: "प्रचलन में ऑस्ट्रेलियाई डॉलर",
		debtTitle: "ऑस्ट्रेलियाई सरकार का कुल कर्ज़",
	},
	brl: {
		inPhrase: "ब्राज़ीली रियाल में",
		noun: "रियाल",
		nounPlural: "रियाल",
		label: "ब्राज़ीली रियाल",
		existenceTitle: "प्रचलन में ब्राज़ीली रियाल",
		debtTitle: "ब्राज़ील सरकार का कुल कर्ज़",
	},
	cad: {
		inPhrase: "कनाडाई डॉलर में",
		noun: "कनाडाई डॉलर",
		nounPlural: "कनाडाई डॉलर",
		label: "कनाडाई डॉलर",
		existenceTitle: "प्रचलन में कनाडाई डॉलर",
		debtTitle: "कनाडा सरकार का कुल कर्ज़",
	},
	gbp: {
		inPhrase: "ब्रिटिश पाउंड में",
		noun: "पाउंड",
		nounPlural: "पाउंड",
		label: "ब्रिटिश पाउंड",
		existenceTitle: "प्रचलन में ब्रिटिश पाउंड",
		debtTitle: "ब्रिटिश सरकार का कुल कर्ज़",
	},
	ils: {
		inPhrase: "इज़राइली शेकेल में",
		noun: "शेकेल",
		nounPlural: "शेकेल",
		label: "इज़राइली शेकेल",
		existenceTitle: "प्रचलन में इज़राइली शेकेल",
		debtTitle: "इज़राइल सरकार का कुल कर्ज़",
	},
	inr: {
		inPhrase: "भारतीय रुपये में",
		noun: "रुपया",
		nounPlural: "रुपये",
		label: "भारतीय रुपया",
		existenceTitle: "प्रचलन में भारतीय रुपये",
		debtTitle: "भारत सरकार का कुल कर्ज़",
	},
	jpy: {
		inPhrase: "जापानी येन में",
		noun: "येन",
		nounPlural: "येन",
		label: "जापानी येन",
		existenceTitle: "प्रचलन में जापानी येन",
		debtTitle: "जापान सरकार का कुल कर्ज़",
	},
	mxn: {
		inPhrase: "मेक्सिकन पेसो में",
		noun: "पेसो",
		nounPlural: "पेसो",
		label: "मेक्सिकन पेसो",
		existenceTitle: "प्रचलन में मेक्सिकन पेसो",
		debtTitle: "मेक्सिको सरकार का कुल कर्ज़",
	},
	nzd: {
		inPhrase: "न्यूज़ीलैंड डॉलर में",
		noun: "न्यूज़ीलैंड डॉलर",
		nounPlural: "न्यूज़ीलैंड डॉलर",
		label: "न्यूज़ीलैंड डॉलर",
		existenceTitle: "प्रचलन में न्यूज़ीलैंड डॉलर",
		debtTitle: "न्यूज़ीलैंड सरकार का कुल कर्ज़",
	},
	php: {
		inPhrase: "फिलीपीन पेसो में",
		noun: "पेसो",
		nounPlural: "पेसो",
		label: "फिलीपीन पेसो",
		existenceTitle: "प्रचलन में फिलीपीन पेसो",
		debtTitle: "फिलीपींस सरकार का कुल कर्ज़",
	},
	thb: {
		inPhrase: "थाई बात में",
		noun: "बात",
		nounPlural: "बात",
		label: "थाई बात",
		existenceTitle: "प्रचलन में थाई बात",
		debtTitle: "थाईलैंड सरकार का कुल कर्ज़",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `अगर आप ${c.inPhrase} बचत करते हैं, तो शायद आपने देखा होगा कि आपका पैसा कम चीज़ें ख़रीद पाता है। एक ही सामान ख़रीदने के लिए आपको ज़्यादा ${c.nounPlural} चाहिए। उसी जीवनस्तर को बनाए रखने के लिए आपको ज़्यादा ${c.nounPlural} चाहिए।`;
		case "intro_2":
			return `लेकिन ऐसा होना ज़रूरी नहीं है।`;
		case "intro_highlight":
			return `पिछले 4 साल में जिन लोगों ने बिटकॉइन में बचत की, उनके लिए जीवन सस्ता हुआ है।`;
		case "proof_h2":
			return `यह रहा सबूत: आपका पैसा अपनी कीमत खो रहा है`;
		case "proof_p1":
			return `आपके बैंक खाते में रखा हर ${c.noun} हर साल कम चीज़ें ख़रीदता है। ऐसा इसलिए होता है क्योंकि बनाए जा सकने वाले ${c.nounPlural} की कोई सीमा नहीं है।`;
		case "proof_p2":
			return `यह असीमित आपूर्ति ही मुद्रास्फीति का मुख्य कारण है। हाल के सालों में प्रचलन में मौजूद ${c.nounPlural} की संख्या नाटकीय ढंग से बढ़ी है।`;
		case "proof_p3":
			return `जब शून्य से और पैसा बनाया जाता है, तो हर चीज़ की कीमत बढ़ जाती है। इसमें वे कच्चे माल भी शामिल हैं जिन्हें कंपनियाँ उत्पाद बनाने के लिए ख़रीदती हैं — यानी आपके लिए ऊँची कीमतें।`;
		case "proof_p4":
			return `जैसे-जैसे सरकारी कर्ज़ बढ़ता है, और ज़्यादा पैसा छापा जाता है, क्योंकि कम लोग सरकार को उधार देने को तैयार रहते हैं।`;
		case "proof_p5_before":
			return `अगर आप उधार नहीं ले सकते, तो ख़र्च नहीं कर सकते। लेकिन जब कोई सरकार`;
		case "proof_p5_link":
			return `उधार नहीं ले पाती`;
		case "proof_p5_after":
			return `, तो वह बस और पैसा छाप देती है।`;
		case "proof_p6":
			return `ज़्यादा सरकारी कर्ज़ का मतलब है ज़्यादा पैसा छापना। ज़्यादा पैसा छापने का मतलब है ज़्यादा मुद्रास्फीति। और इसके रुकने का कोई संकेत नहीं है।`;
		case "btc_h2":
			return `बिटकॉइन में मुद्रास्फीति नहीं है`;
		case "btc_p1":
			return `मुद्रास्फीति का मतलब है कि आपका पैसा समय के साथ कम चीज़ें ख़रीदता है। बिटकॉइन बेहतर पैसा है क्योंकि उसमें मुद्रास्फीति नहीं है।`;
		case "btc_p2_before":
			return `${c.label} की आपूर्ति असीमित है, यानी कभी भी और छापा जा सकता है।`;
		case "btc_p2_link":
			return `बिटकॉइन दुर्लभ है`;
		case "btc_p2_after":
			return `, क्योंकि उसकी अधिकतम आपूर्ति 21 मिलियन बिटकॉइन है। कोई भी और बिटकॉइन नहीं बना सकता।`;
		case "btc_p3":
			return `ऐतिहासिक रूप से, बिटकॉइन ने समय के साथ अपनी क्रय शक्ति बढ़ाई है, जबकि ${c.label} ने अपनी क्रय शक्ति खोई है। बहुत से लोग बिटकॉइन को लंबी अवधि के बचत खाते की तरह इस्तेमाल करते हैं — ऐसा पैसा जो सालों तक छुए बिना बढ़ता रहता है।`;
		case "btc_p4":
			return `आप क्या पसंद करेंगे: ${c.inPhrase} बचत करना — ऐसे ${c.nounPlural} जो समय के साथ कम चीज़ें ख़रीदते हैं — या बिटकॉइन में बचत करना जिसने ऐतिहासिक रूप से ज़्यादा चीज़ें ख़रीदी हैं?`;
		case "freedom_h2":
			return `बिटकॉइन आज़ादी का एक उपकरण भी है`;
		case "freedom_p1":
			return `बिटकॉइन नेटवर्क पर किसी का स्वामित्व नहीं है। न कोई सरकार और न ही कोई कंपनी इसे नियंत्रित करती है। यह आपकी आज़ादी और आपके पैसे की रक्षा के लिए बनाया गया है।`;
		case "freedom_p2":
			return `दुनिया भर के लोग अभी बिटकॉइन का इस्तेमाल अपनी आज़ादी की रक्षा के लिए कर रहे हैं — तब भी जब उनकी सरकारें उनकी मदद नहीं करना चाहतीं या उन्हें रोकने की कोशिश करती हैं।`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 साल में खोई हुई क्रय शक्ति";
		case "stat_source_bpr":
			return "स्रोत: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "और जानें ←",
	inflation_freedom_scarce_title: "दुर्लभ",
	inflation_freedom_scarce_desc:
		"कभी भी 21 मिलियन से ज़्यादा बिटकॉइन नहीं होंगे। कोई भी और नहीं छाप सकता।",
	inflation_freedom_decentralized_title: "विकेंद्रीकृत",
	inflation_freedom_decentralized_desc:
		"बिटकॉइन को कोई एक पक्ष नियंत्रित नहीं करता — न सरकार और न कोई कंपनी।",
	inflation_freedom_permissionless_title: "बिना अनुमति",
	inflation_freedom_permissionless_desc:
		"कहीं भी कोई भी इस नेटवर्क से जुड़ सकता है। कोई आपको रोक नहीं सकता।",
	inflation_freedom_sovereign_title: "संप्रभु",
	inflation_freedom_sovereign_desc:
		"राजनेताओं और उनके टूटे वादों से मुक्त एक नई व्यवस्था।",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "बिटकॉइन",
	inflation_stat_bitcoin_value: "21 मिलियन",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "हमेशा के लिए तय",
	inflation_stat_bitcoin_source: "स्रोत: बिटकॉइन व्हाइटपेपर ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "आज",
	inflation_stat_currency_counting: "और गिनती जारी है...",
	inflation_stat_currency_detail_4yr_lost:
		"4 साल में खोई हुई क्रय शक्ति",
	inflation_stat_currency_source_cpi: "स्रोत: FRED CPI ←",
	inflation_stat_currency_source_debt: "स्रोत: FRED सरकारी कर्ज़ ←",
	inflation_stat_currency_source_m1: "स्रोत: FRED M1 मनी सप्लाई ←",
	inflation_stat_currency_source_m1_short: "स्रोत: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 साल में बढ़ी हुई क्रय शक्ति",
	inflation_stat_btc_source_bpr: "स्रोत: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "कनाडा",
	inflation_story_canada_desc:
		"कर्मचारियों ने अपने बैंक खाते जमा किए जाने के बाद बिटकॉइन के ज़रिए अपने पैसे तक पहुँच वापस पाई।",
	inflation_story_nigeria_title: "नाइजीरिया",
	inflation_story_nigeria_desc:
		"प्रदर्शनकारियों ने बैंकों के काम करने से इनकार करने के बाद अपने आंदोलन को फंड करने के लिए बिटकॉइन का उपयोग किया।",
	inflation_story_pennsylvania_title: "पेंसिल्वेनिया",
	inflation_story_pennsylvania_desc:
		"बिटकॉइन माइनिंग ने वह कोयला कचरा साफ़ किया जिसे साफ़ करने को सरकार तैयार नहीं थी।",
	inflation_story_texas_title: "टेक्सास",
	inflation_story_texas_desc:
		"बिटकॉइन माइनिंग ने एक बड़े तूफ़ान के दौरान बिजली के ग्रिड को चालू रखने में मदद की।",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4-वर्षीय रिटर्न चार्ट (सभी मुद्राएँ)",
	sources_bitcoin_source_code:
		"बिटकॉइन का सोर्स कोड — 21 मिलियन की आपूर्ति सीमा",
	sources_canadian_trucker:
		"कनाडाई ट्रक चालक प्रदर्शन — जमा किए गए बैंक खातों को दरकिनार करने के लिए बिटकॉइन (YouTube)",
	sources_mempool_space:
		"Mempool.space — बिटकॉइन की आपूर्ति और माइनिंग डेटा",
	sources_nigeria_endsars:
		"Quartz Africa — बिटकॉइन ने नाइजीरिया के EndSARS आंदोलन को कैसे फंड किया",
	sources_pennsylvania_mining:
		"बिटकॉइन माइनिंग पेंसिल्वेनिया में कोयला कचरे से मीथेन बचाती है (YouTube)",
	sources_texas_mining:
		"बिटकॉइन माइनिंग और टेक्सास का बिजली ग्रिड (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"बिटकॉइन में मुद्रास्फीति नहीं है, लेकिन आपके पैसे में है।",
	inflation_choose: "अपनी मुद्रा चुनें और सबूत देखें",
	inflation_choose_another: "← दूसरी मुद्रा चुनें",
	inflation_sticker_learn: "जानें कि बिटकॉइन कैसे मदद कर सकता है।",
	inflation_sticker_lets_find_out: "आइए पता करें।",
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
		`translate-inflation (hi): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
