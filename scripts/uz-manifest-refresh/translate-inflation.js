#!/usr/bin/env node
/**
 * uz manifest refresh — inflation namespace translation helper.
 *
 * Reads scripts/i18n-audit/reports/uz.json, fills in `targetTranslation`
 * for every entry in the `inflation` namespace using a templated
 * per-currency model, and writes the report back.
 *
 * Currency-specific naming uses idiomatic Uzbek (Latin orthography):
 *   - Modifier letter Oʻ / oʻ uses U+02BB (turned comma).
 *   - Polite formal "siz" register.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.join(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"uz.json",
);

const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

// -------------------------------------------------------------
// Per-currency Uzbek vocabulary
// -------------------------------------------------------------
//
//   long      = "Eu Doları" / "Yevro" / "Braziliya reali" — full name (used in
//               the "If you save in <X>" sentence)
//   plural    = "dollarlar" / "yevrolar" / "reallar" — generic plural noun for
//               counting. Used in "It takes more <X> to buy ...". Uzbek is
//               agglutinative, so plural is formed with -lar/-ler.
//               For uncountable (yen, baht), we still use a noun that reads
//               naturally with "koʻproq".
//   single    = "dollar" / "yevro" / "real" — the noun used in
//               "while the <X> has lost it" (Bitcoin gained ... while the X has
//               lost it). In Uzbek this becomes accusative-ish; we render it as
//               "<noun> esa oʻz qiymatini yoʻqotmoqda".
//   countryAdj= "AQSh" / "Yevrohududi" / "Yangi Zelandiya" — used in
//               "<COUNTRY> GOVERNMENT DEBT" stat title.
//   nounUpperPlural = "DOLLARLAR" / "YEVROLAR" — for "<X> IN EXISTENCE" stat
//
const CURRENCIES = {
	usd: {
		long: "AQSh dollarida",
		plural: "dollar",
		single: "dollar",
		stat_label: "AQSH DOLLARI",
		stat_existence_title: "MAVJUD DOLLARLAR",
		stat_debt_title: "AQSH FEDERAL QARZINING UMUMIY MIQDORI",
	},
	aud: {
		long: "Avstraliya dollarida",
		plural: "dollar",
		single: "dollar",
		stat_label: "AVSTRALIYA DOLLARI",
		stat_existence_title: "MAVJUD AVSTRALIYA DOLLARLARI",
		stat_debt_title: "AVSTRALIYA HUKUMATI QARZI",
	},
	brl: {
		long: "Braziliya realida",
		plural: "real",
		single: "real",
		stat_label: "BRAZILIYA REALI",
		stat_existence_title: "MAVJUD BRAZILIYA REALLARI",
		stat_debt_title: "BRAZILIYA HUKUMATI QARZI",
	},
	cad: {
		long: "Kanada dollarida",
		plural: "dollar",
		single: "dollar",
		stat_label: "KANADA DOLLARI",
		stat_existence_title: "MAVJUD KANADA DOLLARLARI",
		stat_debt_title: "KANADA HUKUMATI QARZI",
	},
	eur: {
		long: "yevroda",
		plural: "yevro",
		single: "yevro",
		stat_label: "YEVRO",
		stat_existence_title: "MAVJUD YEVROLAR",
		stat_debt_title: "YEVROHUDUDI HUKUMATLARI QARZI",
	},
	gbp: {
		long: "Britaniya funt sterlingida",
		plural: "funt",
		single: "funt",
		stat_label: "BRITANIYA FUNT STERLINGI",
		stat_existence_title: "MAVJUD BRITANIYA FUNTLARI",
		stat_debt_title: "BUYUK BRITANIYA HUKUMATI QARZI",
	},
	ils: {
		long: "Isroil shekelida",
		plural: "shekel",
		single: "shekel",
		stat_label: "ISROIL SHEKELI",
		stat_existence_title: "MAVJUD ISROIL SHEKELLARI",
		stat_debt_title: "ISROIL HUKUMATI QARZI",
	},
	inr: {
		long: "Hind rupiyasida",
		plural: "rupiya",
		single: "rupiya",
		stat_label: "HIND RUPIYASI",
		stat_existence_title: "MAVJUD HIND RUPIYALARI",
		stat_debt_title: "HINDISTON HUKUMATI QARZI",
	},
	jpy: {
		long: "Yapon iyenasida",
		plural: "iyena",
		single: "iyena",
		stat_label: "YAPON IYENASI",
		stat_existence_title: "MAVJUD YAPON IYENALARI",
		stat_debt_title: "YAPONIYA HUKUMATI QARZI",
	},
	mxn: {
		long: "Meksika pesosida",
		plural: "peso",
		single: "peso",
		stat_label: "MEKSIKA PESOSI",
		stat_existence_title: "MAVJUD MEKSIKA PESOLARI",
		stat_debt_title: "MEKSIKA HUKUMATI QARZI",
	},
	nzd: {
		long: "Yangi Zelandiya dollarida",
		plural: "dollar",
		single: "dollar",
		stat_label: "YANGI ZELANDIYA DOLLARI",
		stat_existence_title: "MAVJUD YANGI ZELANDIYA DOLLARLARI",
		stat_debt_title: "YANGI ZELANDIYA HUKUMATI QARZI",
	},
	php: {
		long: "Filippin pesosida",
		plural: "peso",
		single: "peso",
		stat_label: "FILIPPIN PESOSI",
		stat_existence_title: "MAVJUD FILIPPIN PESOLARI",
		stat_debt_title: "FILIPPIN HUKUMATI QARZI",
	},
	thb: {
		long: "Tay baxtida",
		plural: "baxt",
		single: "baxt",
		stat_label: "TAY BAXTI",
		stat_existence_title: "MAVJUD TAY BAXTLARI",
		stat_debt_title: "TAYLAND HUKUMATI QARZI",
	},
};

// -------------------------------------------------------------
// Templates — same wording across currencies, parameterized
// -------------------------------------------------------------
function tmpl(suffix, c) {
	const cur = CURRENCIES[c];
	switch (suffix) {
		// One-and-the-same across all currencies
		case "btc_h2":
			return "Bitcoinning inflyatsiyasi yoʻq";
		case "btc_p1":
			return "Inflyatsiya — vaqt oʻtgani sayin pulingiz sizga kamroq narsa olib bera boshlashi degani. Bitcoin yaxshiroq pul, chunki uning inflyatsiyasi yoʻq.";
		case "btc_p2_after":
			return "chunki uning maksimal taklifi 21 million Bitcoin bilan cheklangan. Hech kim koʻproq Bitcoin bosib chiqara olmaydi.";
		case "btc_p2_link":
			return "Bitcoin tanqis";
		case "freedom_h2":
			return "Bitcoin shuningdek erkinlik vositasi";
		case "freedom_p1":
			return "Bitcoin tarmogʻi hech kimga tegishli emas. Uni hech qanday hukumat yoki korporatsiya boshqarmaydi. U sizning erkinligingizni qoʻllab-quvvatlash va pulingizni himoya qilish uchun yaratilgan.";
		case "freedom_p2":
			return "Butun dunyo boʻylab odamlar oʻz erkinligini himoya qilish uchun Bitcoindan foydalanmoqda — hatto oʻz hukumatlari yordam berishdan bosh tortgan yoki ularni toʻxtatishga uringan paytlarda ham.";
		case "intro_2":
			return "Lekin bunday boʻlishi shart emas.";
		case "intro_highlight":
			return "Soʻnggi 4 yil davomida Bitcoinda jamgʻargan odamlar uchun hayot arzonlashganini koʻrishgan.";
		case "proof_h2":
			return "Mana isboti: pulingiz qiymatini yoʻqotmoqda";
		case "proof_p3":
			return "Pul yoʻqdan bor qilinganda, hamma narsa narxi koʻtariladi. Bunga kompaniyalar oʻz mahsulotlarini ishlab chiqarish uchun sotib oladigan xomashyo ham kiradi — bu siz uchun yuqori narxlar degani.";
		case "proof_p4":
			return "Hukumat oʻz qarzini oshirishda davom etganida, yana koʻproq pul bosiladi, chunki kamroq odam unga qarz bermoqchi boʻladi.";
		case "proof_p5_before":
			return "Agar siz qarz ololmasangiz, pul sarflay olmaysiz. Lekin agar hukumat";
		case "proof_p5_link":
			return "qarz ola olmasa";
		case "proof_p5_after":
			return ", u shunchaki pul bosib chiqaradi.";
		case "proof_p6":
			return "Hukumat qarzi koʻp boʻlsa, koʻproq pul bosiladi. Koʻproq pul bosilsa, koʻproq inflyatsiya yuzaga keladi. Va buning toʻxtashidan darak yoʻq.";

		// Per-currency: 13 unique values
		case "intro_1":
			return `Agar siz ${cur.long} jamgʻarsangiz, ehtimol ularning har yili sizga kamroq narsa olib berishini sezgansiz. Avvalgi miqdordagi oziq-ovqatni sotib olish uchun koʻproq ${cur.plural} kerak boʻladi. Hayot sifatingizni saqlab qolish uchun esa koʻproq ${cur.plural} kerak.`;

		// Per-currency: 9 unique values (cur.plural-based)
		case "btc_p2_before":
			return `${capitalizeFirst(cur.plural)}lar cheklanmagan taklifga ega, ya’ni istalgan paytda koʻproqini bosib chiqarish mumkin.`;
		case "btc_p3":
			return `Tarixan, Bitcoin vaqt oʻtishi bilan xarid qobiliyatini oshirgan, ${cur.single} esa uni yoʻqotgan. Koʻp odamlar Bitcoindan oʻzlarining uzoq muddatli jamgʻarma hisobi sifatida foydalanadi: bu pulni tegmasdan, bir necha yil davomida oʻsishiga qoldirish mumkin.`;
		case "btc_p4":
			return `Vaqt oʻtgani sayin sizga kamroq narsa olib beradigan ${cur.plural}da jamgʻarishni xohlaysizmi? Yoki tarixan koʻproq narsa olib bergan Bitcoinda jamgʻarishnimi?`;
		case "proof_p1":
			return `Bank hisobingizdagi ${cur.plural}lar har yili sizga kamroq narsa olib beradi. Buning sababi — qancha ${cur.plural} yaratilishi mumkinligiga aniq cheklov yoʻqligida.`;
		case "proof_p2":
			return `Bu cheklanmagan taklif inflyatsiyaning asosiy sababidir. Soʻnggi yillarda mavjud ${cur.plural}larning umumiy miqdori keskin oshib bordi.`;

		// Stat titles (13 unique each)
		case "stat_label":
			return cur.stat_label;
		case "stat_existence_title":
			return cur.stat_existence_title;
		case "stat_debt_title":
			return cur.stat_debt_title;

		default:
			throw new Error("Unknown suffix: " + suffix);
	}
}

function capitalizeFirst(s) {
	return s[0].toUpperCase() + s.slice(1);
}

// -------------------------------------------------------------
// Non-currency inflation entries
// -------------------------------------------------------------
const NON_CURRENCY = {
	inflation_freedom_decentralized_desc:
		"Hech bir tashkilot — hech qanday hukumat, hech qanday korporatsiya — Bitcoinni boshqarmaydi.",
	inflation_freedom_decentralized_title: "Markazlashmagan",
	inflation_freedom_learn_more: "Batafsil bilib oling →",
	inflation_freedom_permissionless_desc:
		"Har kim, har qayerdan tarmoqqa qoʻshilishi mumkin. Hech kim sizni toʻxtata olmaydi.",
	inflation_freedom_permissionless_title: "Ruxsat talab qilmaydi",
	inflation_freedom_scarce_desc:
		"Bitcoin hech qachon 21 milliondan oshmaydi. Hech kim koʻproqini bosib chiqara olmaydi.",
	inflation_freedom_scarce_title: "Tanqis",
	inflation_freedom_sovereign_desc:
		"Yangi tizim — siyosatchilardan va ularning buzilgan vaʼdalaridan mustaqil.",
	inflation_freedom_sovereign_title: "Suveren",
	inflation_stat_bitcoin_detail: "Abadiy belgilangan",
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_source: "Manba: Bitcoin Whitepaper →",
	inflation_stat_bitcoin_value: "21 million",
	inflation_stat_btc_detail_4yr: "4 yilda erishilgan xarid qobiliyati",
	inflation_stat_btc_source_bpr: "Manba: Bitcoin Price Report →",
	inflation_stat_comparison_today: "BUGUN",
	inflation_stat_currency_counting: "Va hisob davom etmoqda...",
	inflation_stat_currency_detail_4yr_lost:
		"4 yilda yoʻqotilgan xarid qobiliyati",
	inflation_stat_currency_source_cpi: "Manba: FRED CPI →",
	inflation_stat_currency_source_debt: "Manba: FRED Government Debt →",
	inflation_stat_currency_source_m1: "Manba: FRED Narrow Money Supply →",
	inflation_stat_currency_source_m1_short: "Manba: FRED →",
	inflation_story_canada_desc:
		"Ishchilar bank hisoblari muzlatib qoʻyilganidan keyin pulga kirish uchun Bitcoindan foydalanishdi.",
	inflation_story_canada_title: "Kanada",
	inflation_story_nigeria_desc:
		"Norozilik namoyishchilari banklar ularni uzib qoʻygach, harakatlarini moliyalashtirish uchun Bitcoindan foydalanishdi.",
	inflation_story_nigeria_title: "Nigeriya",
	inflation_story_pennsylvania_desc:
		"Bitcoin maydanlashi hukumat hal qilishdan bosh tortgan koʻmir chiqindilarini tozaladi.",
	inflation_story_pennsylvania_title: "Pensilvaniya",
	inflation_story_texas_desc:
		"Bitcoin maydanlashi kuchli boʻron paytida chiroqlarni yoqib turishga yordam berdi.",
	inflation_story_texas_title: "Texas",
	inflation_choose: "Pulingizni tanlang va isbotini koʻring",
	inflation_choose_another: "← Boshqa valyuta tanlang",
	inflation_h1_orange: "Bitcoinning inflyatsiyasi yoʻq, lekin pulingizning bor.",
	inflation_sticker_learn: "Bitcoin sizga qanday yordam berishi mumkinligini bilib oling.",
	inflation_sticker_lets_find_out: "Keling, bilib olaylik.",
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 yillik koʻrsatkich grafikalari (barcha valyutalar)",
	sources_bitcoin_source_code:
		"Bitcoin Source Code — 21 million taklif chegarasi",
	sources_canadian_trucker:
		"Kanadalik yuk haydovchilar noroziligi — muzlatilgan bank hisoblarini chetlab oʻtish uchun ishlatilgan Bitcoin (YouTube)",
	sources_mempool_space: "Mempool.space — Bitcoin taklifi va maydanlash maʼlumotlari",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin Nigeriyaning EndSARS noroziliklarini qanday quvvatladi",
	sources_pennsylvania_mining:
		"Pensilvaniyada Bitcoin maydanlashi metan chiqindilarini qayta ishlaydi (YouTube)",
	sources_texas_mining:
		"Texasda Bitcoin maydanlashi va elektr tarmogʻi (YouTube)",
};

// -------------------------------------------------------------
// Apply translations into the report
// -------------------------------------------------------------
let translated = 0;
let skipped = 0;
const codes = Object.keys(CURRENCIES);
const suffixes = [
	"btc_h2",
	"btc_p1",
	"btc_p2_after",
	"btc_p2_before",
	"btc_p2_link",
	"btc_p3",
	"btc_p4",
	"freedom_h2",
	"freedom_p1",
	"freedom_p2",
	"intro_1",
	"intro_2",
	"intro_highlight",
	"proof_h2",
	"proof_p1",
	"proof_p2",
	"proof_p3",
	"proof_p4",
	"proof_p5_after",
	"proof_p5_before",
	"proof_p5_link",
	"proof_p6",
];
const statSuffixes = ["debt_title", "existence_title", "label"];

// Special: freedom_p1/p2 + proof_h2 are constants; intro_2 same etc.
// Above suffixes call tmpl() which handles all of them.

const constSuffixes = new Set([
	"btc_h2",
	"btc_p1",
	"btc_p2_after",
	"btc_p2_link",
	"freedom_h2",
	"freedom_p1",
	"freedom_p2",
	"intro_2",
	"intro_highlight",
	"proof_h2",
	"proof_p3",
	"proof_p4",
	"proof_p5_after",
	"proof_p5_before",
	"proof_p5_link",
	"proof_p6",
]);

for (const entry of report.entries) {
	if (entry.namespace !== "inflation") continue;
	const key = entry.key;

	// Check direct hit in NON_CURRENCY
	if (NON_CURRENCY[key] !== undefined) {
		entry.targetTranslation = NON_CURRENCY[key];
		translated++;
		continue;
	}

	// Per-currency body keys: inflation_<code>_<suffix>
	let m = key.match(/^inflation_([a-z]{3})_(.+)$/);
	if (m && CURRENCIES[m[1]] && suffixes.includes(m[2])) {
		entry.targetTranslation = tmpl(m[2], m[1]);
		translated++;
		continue;
	}

	// Per-currency stat keys: inflation_stat_<code>_<suffix>
	m = key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
	if (m && CURRENCIES[m[1]] && statSuffixes.includes(m[2])) {
		entry.targetTranslation = tmpl("stat_" + m[2], m[1]);
		translated++;
		continue;
	}

	console.warn("UNHANDLED inflation key:", key);
	skipped++;
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n", "utf8");

console.log(
	`Inflation: translated=${translated}, skipped=${skipped}; report=${REPORT_PATH}`,
);
