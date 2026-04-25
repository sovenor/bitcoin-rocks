#!/usr/bin/env node
/**
 * Sinhala manifest refresh — extra CBDC/Visa keys not covered by the
 * shared part1 (locale-specific gaps).
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

const T = {
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin එදිරිව CBDC",
	"bitcoin-vs-cbdc::cbdc_intro_4":
		"අපි ඩිජිටල් මුදල්වල ආකාර දෙකක් අතර වෙනස බලමු: Bitcoin සහ මධ්‍යම බැංකු ඩිජිටල් මුදල් (CBDC).",
	"bitcoin-vs-cbdc::point_1_summary_2":
		"කිසිවෙකුට ඔබට Bitcoin සමඟ ගනුදෙනු කිරීම නවත්වන්නට බැහැ.",
	"bitcoin-vs-cbdc::point_1_summary_3":
		"CBDC රජයන් සහ මධ්‍යම බැංකුවලට ඔබේ මුදල් මත සම්පූර්ණ පාලනයක් ලබා දීමට සැලසුම් කර ඇත.",
	"bitcoin-vs-cbdc::point_2_summary_2":
		"CBDC කල් ඉකුත් වීමට වැඩසටහන්ගත කළ හැකිය.",
	"bitcoin-vs-cbdc::point_2_summary_3":
		"CBDC කල් ඉකුත් වූ විට, ඒවා ඔබව අනාගතය සඳහා ඉතුරු කිරීමෙන් වළක්වයි.",
	"bitcoin-vs-cbdc::point_3_summary_3": "",
	"bitcoin-vs-cbdc::point_5_summary_2":
		"දස දහස් ගණනක් ස්වාධීන නෝඩ් ජාලයේ නීති සත්‍යාපනය කරයි.",
	"bitcoin-vs-visa::point_1_summary_2":
		"මෙය Bitcoin හට ලොව පුරා මිනිසුන්ට, විශේෂයෙන් බැංකු රහිත හෝ අඩු බැංකු පහසුකම් ඇති අයට වැඩි ඇතුළත් සහ ප්‍රවේශ විය හැකි කරයි.",
	"bitcoin-vs-visa::point_3_summary_2":
		"මෙම විනිවිදභාවය Bitcoin වඩාත් විශ්වාසදායක කරන අතර ජාලයේ අඛණ්ඩතාව ස්වාධීනව සත්‍යාපනය කිරීමට ඉඩ දෙයි.",
	"bitcoin-vs-visa::point_4_summary_2":
		"Bitcoin සමඟ, ඔබ ඔබේ මුදල් මත පාලනය පවත්වා ගන්නා අතර ගෙවීම් පද්ධතියෙන් කපා හැරිය නොහැක.",
	"bitcoin-vs-visa::point_5_summary_2":
		"Bitcoin ගනුදෙනු කිසිදු ණයක් ඇති නොකරන අවසන් පියවීම් වේ - ඔබට ඇත්ත වශයෙන්ම අයිති Bitcoin පමණක් වියදම් කළ හැකිය.",
	"bitcoin-vs-visa::point_7_summary_2":
		"ක්‍රෙඩිට් කාඩ් ජාලවලට ව්‍යාපාරික පැය, නඩත්තු කවුළු සහ ගනුදෙනු සැකසීම වැළැක්විය හැකි භූගෝලීය සීමා කිරීම් ඇත.",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-extra-cbdc-visa (si): filled ${filled}, already-done ${skipped}`,
	);
}

main();
