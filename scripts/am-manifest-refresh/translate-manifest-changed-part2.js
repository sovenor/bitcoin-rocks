#!/usr/bin/env node
/**
 * Amharic manifest refresh — translate-manifest-changed-part2.js
 *
 * Second pass — fills the 47 entries translate-manifest-changed.js
 * missed on first run. Safe to re-run.
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
	"am.json",
);

const T = {
	// bitcoin-vs-stocks
	"bitcoin-vs-stocks|point_6_summary_2": "በራስ-መጠበቅ",
	"bitcoin-vs-stocks|point_6_summary_3":
		" ቢትኮይን በቀላል መተግበሪያ — ምንም ደላላ አያስፈልግም። አክሲዮኖች በደላላ ኩባንያዎች ላይ ይቀመጣሉ፣ ካልተሳካላቸው ለተቃዋሚ አደጋ ተጋላጭ ያደርግዎታል።",

	// bitcoin-vs-visa
	"bitcoin-vs-visa|point_2_summary_2": "የቢትኮይን ክፍያዎች",
	"bitcoin-vs-visa|point_2_summary_3": " ይልቁንም።",
	"bitcoin-vs-visa|point_6_summary_2": "በራስ-መጠበቅ",
	"bitcoin-vs-visa|point_6_summary_3":
		" ያለ ባንክ ወይም የክፍያ አቀናባሪ አያስፈልግም። የክሬዲት ካርዶች ሁልጊዜ መካከለኞችን ይፈልጋሉ።",

	// business/accounting
	"business/accounting|accounting_description":
		"በመጽሐፍትዎ ውስጥ ቢትኮይንን ለመቀበል በቀላል እንግሊዝኛ መመሪያ — hybrid wallets፣ cost basis፣ capital gains፣ እና መቼ የሂሳብ ባለሙያ መጥራት እንዳለብዎ።",
	"business/accounting|accounting_s1_c1":
		"ቢትኮይንን ለመቀበል በጣም ቀላሉ መንገድ ክፍያ ሲደርስ በራስ-ሰር የሚቀበሉትን ቢትኮይን 100% ለዶላር (ወይም ለአካባቢያዊ ምንዛሬዎ) በሚሸጥ hybrid wallet ነው።",
	"business/accounting|accounting_s1_c2":
		"በዚህ አዘገጃጀት፣ መጽሐፍትዎ ዛሬ እንደሚታዩት በትክክል ይታያሉ — የመጨረሻው ቁጥር በዶላር ነው፣ በእያንዳንዱ ጊዜ። cost basis የለም፣ capital gains የለም፣ አዲስ spreadsheets የሉም።",
	"business/accounting|accounting_s2":
		"አንዳንድ ቢትኮይን ከያዙ፦ cost basis መከታተል",
	"business/accounting|accounting_s2_c1":
		"አንዳንድ ንግዶች ሁሉንም በራስ-ማስቀየር ይልቅ የሚቀበሉትን ቢትኮይን ከፊል ለማቆየት ይመርጣሉ። ያ እርስዎ ከሆኑ፣ ዋናው ተጨማሪ ደረጃ cost basisዎን መከታተል ነው — የእያንዳንዱ የቢትኮይን ክፍያ የዶላር ዋጋ በተቀበሉበት ቀን።",
	"business/accounting|accounting_s2_c2":
		"በንግድዎ ሙሉ በሙሉ በቢትኮይን ያስባሉ ቢሆንም፣ አብዛኛዎቹ የግብር ባለስልጣናት አሁንም የዶላር ዋጋ ሪፖርት ማድረግ ይፈልጋሉ። መልካም ዜናው፦ በግብይት ሁለት ቁጥሮች ብቻ ነው — የተቀበለው የቢትኮይን መጠን እና በዚያ ቀን ያለው የዶላር ዋጋ።",
	"business/accounting|accounting_s2_c3":
		"በየቀኑ ዋጋዎችን መፈተሽ እንዳይኖርብዎ ፍለጋውን አውቶማቲክ ለማድረግ ከታች ያሉትን መሳሪያዎች ይጠቀሙ።",
	"business/accounting|accounting_s3":
		"የያዙትን ቢትኮይን ማውጣት ወይም መሸጥ",
	"business/accounting|accounting_s3_c1":
		"እያንዳንዱን ክፍያ በራስ-ወደ ዶላር ካስቀየሩ፣ ይህን ክፍል ይዝለሉ — ለእርስዎ አይተገበርም።",
	"business/accounting|accounting_s3_c2":
		"አንዳንድ ቢትኮይን ይዘው ከቆዩ እና በኋላ ለማውጣት ወይም ለመሸጥ ከወሰኑ፣ የሽያጭ ዋጋውን ወደ ተመሳሳይ cost-basis spreadsheet ይጨምሩ። በተቀበሉበት ጊዜ ቢትኮይኑ ያለው ዋጋ እና ሲያወጡት ወይም ሲሸጡት ያለው ዋጋ መካከል ያለው ልዩነት capital gain ወይም ኪሳራ ነው።",
	"business/accounting|accounting_s3_c3": "ሁለት ፈጣን ምሳሌዎች፦",
	"business/accounting|accounting_s4":
		"ቢትኮይን የሚያወራ ባለሙያ ያስፈልግዎታል?",
	"business/accounting|accounting_s4_c1":
		"ይህን ማስረከብ ከመረጡ — ወይም የቢትኮይን ሂሳብዎ hybrid wallet ሊያስተዳድረው ከሚችለው የበለጠ ውስብስብ ከሆነ — በቢትኮይን ሂሳብ በንግዶች ላይ የተካነ ድርጅት የሆነውን Satoshi Pacioli Accounting Services በጣም እንመክራለን።",
	"business/accounting|bitcoin_business_accounting_guide":
		"ለንግድዎ ቢትኮይን ሂሳብ",

	// business/sticker-files/english/index
	"business/sticker-files/english/index|english_biz_sticker_files_description":
		"የራስዎን 'ቢትኮይን ተቀባይ' ስቲከሮች ለማተም የእንግሊዝኛ ስቲከር ፋይሎችን ያውርዱ።",

	// business/why
	"business/why|learn_why_bitcoin_is_good_for_business": "ቢትኮይን እዚህ ይቀበላል",
	"business/why|why_good_for_you": "ቢትኮይን ለእርስዎም ለምን ጥሩ ነው",
	"business/why|why_learn_more_lowercase": "የበለጠ ይወቁ →",
	"business/why|why_s1_c1":
		"ዋጋ ግሽበት ከምንም ተጨማሪ ገንዘብ ሲታተም ወይም ሲፈጠር ይከሰታል። ይህ በኪስዎ ውስጥ ያለውን ገንዘብ በጊዜ ሂደት ዋጋውን ያሳንሳል — እና ዋጋዎች ዓመት ከዓመት እየጨመሩ የሚቀጥሉበት ምክንያት ነው።",
	"business/why|why_s1_c2":
		"ቢትኮይን 21 ሚሊዮን ኮይኖች የተወሰነ አቅርቦት አለው። ምንም መንግስት፣ ባንክ ወይም ኩባንያ ከዚያ በላይ ማተም አይችልም። የቢትኮይን ቁጠባዎ በዝምታ ከማጣት ይልቅ በጊዜ ሂደት ዋጋቸውን ይይዛሉ።",
	"business/why|why_s2_c1":
		"በቅርቡ ዓመታት ውስጥ በርካታ የአሜሪካ ባንኮች በባንክ ሩጫዎች ምክንያት ወድቀዋል። በጣም ብዙ ደንበኞች በአንድ ጊዜ ለማውጣት ሲሞክሩ፣ ባንኮቹ ሁሉንም ለመመለስ ገንዘብ አልነበራቸውም።",
	"business/why|why_s2_c2":
		"ባንኮች ገንዘብዎን ከመያዝ ይልቅ፣ አብዛኛውን ይሰጣሉ እና ኢንቨስት ያደርጋሉ። እነዚያ ኢንቨስትመንቶች ቢበላሹ — ወይም ተቀማጮች እምነት ቢያጡ — ባንኩ ሊወድቅ ይችላል፣ እና ተቀማጮችዎ ሊቀዘቅዙ ወይም ሊጠፉ ይችላሉ።",
	"business/why|why_s2_c3":
		"በቢትኮይን፣ ገንዘብዎን በራስዎ wallet ውስጥ በቀጥታ ይዘው ሊይዙት ይችላሉ። ባንክ የለም። መካከለኛ የለም። የባንክ ሩጫ የለም።",
	"business/why|why_s3_c1":
		"ከክሬዲት ካርዶች፣ PayPal ወይም ባህላዊ የባንክ መለያዎች በተለየ መልኩ ቢትኮይን ለመጠቀም የማንንም ፈቃድ አይጠይቅም።",
	"business/why|why_s3_c2":
		"ማንም መለያዎን ማቀዝቀዝ፣ ክፍያን መዝጋት ወይም ከኔትወርኩ ሊቆርጥዎት አይችልም። ሳንሱር ወይም ወረራ ሳይፈሩ በነፃነት ሊጠቀሙበት የሚችሉት በታሪክ የመጀመሪያው የፋይናንሺያል ሥርዓት ነው።",
	"business/why|why_s4_c1":
		"ቢትኮይን ብዙ ጊዜ ያለ በደንብ ይረዳል፣ ግን በዓለም ላይ ብዙ መልካም ነገሮች በዝምታ ያደርጋል።",
	"business/why|why_s4_c2":
		"የሰብዓዊ መብት ተሟጋቾች ለነፃነት እንዲታገሉ አግዟል፣ ከመጣያ ቦታዎች እና የነዳጅ ማጠራቀሚያዎች የዓለም አቀፍ ሜቴን ልቀትን ቀንሷል፣ የኤሌክትሪክ አውታረ መረቦችን አረጋግቷል እና እንደ ብሔራዊ ፓርኮች ያሉ የህዝብ እቃዎችን አፋፋ።",

	// common
	"common|common_sticker_files_mission_5": "ፓክ ይጠይቁ",

	// flyers
	"flyers|flyers_intro_header":
		"እነዚህን የቢትኮይን ፍላየሮች እንዴት እንደሚያትሙ እና እንደሚለጥፉ",

	// get-involved
	"get-involved|get_involved_and_help_spread_bitcoin":
		"ይሳተፉ እና ቢትኮይንን ያስፋፉ",
	"get-involved|get_involved_description":
		"ነፃ ሀብቶቻችን የቢትኮይን ተቀባይነትን ለማሰራጨት ቀላል ያደርጉታል። ስቲከሮች፣ ፍላየሮች፣ የንግድ ኪቶች እና ማንም ሊያበረክት የሚችልበት ክፍት-ምንጭ codebase።",
	"get-involved|get_involved_intro_5":
		"እርስዎ ይህን ለመለወጥ ሊረዱ ይችላሉ። በዙሪያዎ ላሉት ሰዎች ቢትኮይን የሚያመጣውን ተስፋ ለማሰራጨት ቀላል ለማድረግ በርካታ ነፃ ሀብቶችን አዘጋጅተናል።",

	// inflation
	"inflation|inflation_choose": "ማረጋገጫ ለማየት ገንዘብዎን ይምረጡ",
	"inflation|inflation_choose_another": "← ሌላ ገንዘብ ይምረጡ",
	"inflation|inflation_h1_orange":
		"ቢትኮይን ዋጋ ግሽበት የለውም፣ የእርስዎ ገንዘብ ግን አለው።",
	"inflation|inflation_sticker_learn": "ቢትኮይን እንዴት እንደሚረዳ ይወቁ።",
	"inflation|inflation_sticker_lets_find_out": "እንፈልገው።",

	// lightning
	"lightning|lightning_s1_c4": "የእኛን ይመልከቱ",

	// nostr/index
	"nostr/index|nostr_page_description":
		"Nostr ለመስመር ላይ ግንኙነት አዲስ የተማከለ ፕሮቶኮል ነው — ምንም አንድ ኩባንያ አይቆጣጠረውም፣ የቢትኮይን zap በተወለደ መንገድ ተገንብቷል፣ እና ተከታዮችን ሳያጡ በ clients መካከል መንቀሳቀስ ይችላሉ።",

	// stickers
	"stickers|stickers_flyers_link_before":
		"ሲቻልዎ፣ የራስዎን ያትሙ እና ይለጥፉ",
	"stickers|stickers_instructions_1":
		"የፖስታ አድራሻዎን ያስገቡ እና ነፃ የቢትኮይን ስቲከር ፓክ በፖስታ እንልክልዎታለን። ስቲከሮችዎ በተራ ነጭ ፖስታ ውስጥ ይላካሉ።",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let applied = 0;
	let skipped = 0;
	const missing = [];

	for (const entry of report.entries) {
		if (entry.reason !== "manifest-changed") continue;
		if (typeof entry.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${entry.namespace}|${entry.key}`;
		if (!(lookupKey in T)) {
			missing.push(lookupKey);
			continue;
		}
		entry.targetTranslation = T[lookupKey];
		applied++;
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log(
		`translate-manifest-changed-part2 (am): applied ${applied}, skipped ${skipped} already-resolved.`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing) console.log(`  - ${k}`);
		process.exitCode = 1;
	}
}

main();
