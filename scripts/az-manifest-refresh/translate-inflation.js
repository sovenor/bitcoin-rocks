#!/usr/bin/env node
/**
 * Azerbaijani manifest refresh — inflation namespace translator.
 *
 * Fills `targetTranslation` for the ~368 entries in the `inflation`
 * namespace of scripts/i18n-audit/reports/az.json.
 *
 * Handles both:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - 41 non-currency keys (shared labels, stories, sources, etc.)
 *
 * Azerbaijani uses modern Latin script (with ə, ğ, ı, ö, ş, ü, ç).
 * Brand names, URLs, numeric values, and currency codes remain verbatim.
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
	"az.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "ABŞ dolları",
		noun: "dollar",
		nounPlural: "dollar",
		label: "ABŞ dolları",
		existenceTitle: "Dövriyyədəki dollarlar",
		debtTitle: "Ümumi federal borc",
	},
	eur: {
		longName: "Avro",
		noun: "avro",
		nounPlural: "avro",
		label: "Avro",
		existenceTitle: "Dövriyyədəki avrolar",
		debtTitle: "Avrozona dövlət borcu",
	},
	aud: {
		longName: "Avstraliya dolları",
		noun: "Avstraliya dolları",
		nounPlural: "Avstraliya dolları",
		label: "Avstraliya dolları",
		existenceTitle: "Dövriyyədəki Avstraliya dolları",
		debtTitle: "Avstraliya dövlət borcu",
	},
	brl: {
		longName: "Braziliya realı",
		noun: "real",
		nounPlural: "real",
		label: "Braziliya realı",
		existenceTitle: "Dövriyyədəki reallar",
		debtTitle: "Braziliya dövlət borcu",
	},
	cad: {
		longName: "Kanada dolları",
		noun: "Kanada dolları",
		nounPlural: "Kanada dolları",
		label: "Kanada dolları",
		existenceTitle: "Dövriyyədəki Kanada dolları",
		debtTitle: "Kanada dövlət borcu",
	},
	gbp: {
		longName: "Britaniya funt sterlinqi",
		noun: "funt",
		nounPlural: "funt",
		label: "Britaniya funt sterlinqi",
		existenceTitle: "Dövriyyədəki funtlar",
		debtTitle: "Britaniya dövlət borcu",
	},
	ils: {
		longName: "İsrail şekeli",
		noun: "şekel",
		nounPlural: "şekel",
		label: "İsrail şekeli",
		existenceTitle: "Dövriyyədəki şekellər",
		debtTitle: "İsrail dövlət borcu",
	},
	inr: {
		longName: "Hind rupisi",
		noun: "rupi",
		nounPlural: "rupi",
		label: "Hind rupisi",
		existenceTitle: "Dövriyyədəki rupilər",
		debtTitle: "Hindistan dövlət borcu",
	},
	jpy: {
		longName: "Yapon yeni",
		noun: "yen",
		nounPlural: "yen",
		label: "Yapon yeni",
		existenceTitle: "Dövriyyədəki yenlər",
		debtTitle: "Yaponiya dövlət borcu",
	},
	mxn: {
		longName: "Meksika pesosu",
		noun: "peso",
		nounPlural: "peso",
		label: "Meksika pesosu",
		existenceTitle: "Dövriyyədəki pesolar",
		debtTitle: "Meksika dövlət borcu",
	},
	nzd: {
		longName: "Yeni Zelandiya dolları",
		noun: "Yeni Zelandiya dolları",
		nounPlural: "Yeni Zelandiya dolları",
		label: "Yeni Zelandiya dolları",
		existenceTitle: "Dövriyyədəki Yeni Zelandiya dolları",
		debtTitle: "Yeni Zelandiya dövlət borcu",
	},
	php: {
		longName: "Filippin pesosu",
		noun: "peso",
		nounPlural: "peso",
		label: "Filippin pesosu",
		existenceTitle: "Dövriyyədəki pesolar",
		debtTitle: "Filippin dövlət borcu",
	},
	thb: {
		longName: "Tayland batı",
		noun: "bat",
		nounPlural: "bat",
		label: "Tayland batı",
		existenceTitle: "Dövriyyədəki batlar",
		debtTitle: "Tayland dövlət borcu",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Əgər ${c.longName}ında əmanət saxlayırsınızsa, ala biləcəyinizin ildən-ilə azaldığını görmüsünüz. Eyni miqdarda ərzaq almaq üçün daha çox ${c.noun} lazımdır. Həyat səviyyənizi qoruyub saxlamaq üçün daha çox ${c.noun} lazımdır.`;
		case "intro_2":
			return `Amma belə olmasına ehtiyac yoxdur.`;
		case "intro_highlight":
			return `Son dörd il ərzində Bitcoin-də əmanət saxlayanlar həyatın ucuzlaşdığını gördülər.`;
		case "proof_h2":
			return `Budur sübut: pulunuz dəyərini itirir`;
		case "proof_p1":
			return `Bank hesabınızdakı hər ${c.noun} hər il daha az şey alır. Bu baş verir, çünki yaradıla biləcək ${c.noun} miqdarı üçün sabit limit yoxdur.`;
		case "proof_p2":
			return `Bu qeyri-məhdud təklif inflyasiyanın əsas səbəbidir. Son bir neçə il ərzində dövriyyədəki ${c.noun} miqdarı dramatik şəkildə artmışdır.`;
		case "proof_p3":
			return `Heç bir yerdən daha çox pul yaradıldıqda, hər şeyin qiyməti qalxır. Buraya şirkətlərin məhsulları hazırlamaq üçün aldığı xammal da daxildir — bu da sizin üçün daha yüksək qiymətlərə gətirib çıxarır.`;
		case "proof_p4":
			return `Hökumət borcunu şişirtməyə davam etdikcə, daha az insan ona borc vermək istədiyi üçün daha çox pul çap edilir.`;
		case "proof_p5_before":
			return `Əgər kredit ala bilmirsinizsə, pul xərcləyə bilməzsiniz. Amma hökumət`;
		case "proof_p5_link":
			return `kredit ala bilmədikdə`;
		case "proof_p5_after":
			return `, o sadəcə pul çap edir.`;
		case "proof_p6":
			return `Daha çox hökumət borcu daha çox pul çap etmək deməkdir. Daha çox pul çap etmək daha çox inflyasiya deməkdir. Və bunun dayanacağına dair heç bir işarə yoxdur.`;
		case "btc_h2":
			return `Bitcoin-in inflyasiyası yoxdur`;
		case "btc_p1":
			return `İnflyasiya pulunuzun zamanla daha az alması deməkdir. Bitcoin daha yaxşı puldur, çünki onun inflyasiyası yoxdur.`;
		case "btc_p2_before":
			return `${c.longName}ının təklifi qeyri-məhduddur, yəni istənilən vaxt daha çox çap edilə bilər.`;
		case "btc_p2_link":
			return `Bitcoin nadirdir`;
		case "btc_p2_after":
			return `, çünki onun 21 milyon Bitcoin maksimum təklif limiti var. Heç kim daha çox Bitcoin çap edə bilməz.`;
		case "btc_p3":
			return `Tarixən Bitcoin zamanla alıcılıq qabiliyyəti qazanıb, halbuki ${c.longName} alıcılıq qabiliyyətini itirib. Bir çox insan Bitcoin-i uzunmüddətli əmanət hesabı kimi istifadə edir: il boyu toxunulmadan böyüməyə buraxdıqları pul.`;
		case "btc_p4":
			return `Zamanla daha az alacaq ${c.noun} əmanət etməyə üstünlük verərsiniz? Yoxsa tarixən zamanla daha çox alan Bitcoin?`;
		case "freedom_h2":
			return `Bitcoin həm də azadlıq alətidir`;
		case "freedom_p1":
			return `Bitcoin şəbəkəsini heç kim idarə etmir. Onu heç bir hökumət və ya şirkət idarə etmir. O, azadlığınızı və pulunuzu qorumaq üçün yaradılıb.`;
		case "freedom_p2":
			return `Dünyanın hər yerindən insanlar artıq azadlıqlarını qorumaq üçün Bitcoin-dən istifadə edirlər — hətta hökumətləri onlara kömək etməkdən imtina etdikdə və ya onları dayandırmağa çalışdıqda belə.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 ildə itirilmiş alıcılıq qabiliyyəti";
		case "stat_source_bpr":
			return "Mənbə: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Daha çox məlumat →",
	inflation_freedom_scarce_title: "Nadir",
	inflation_freedom_scarce_desc:
		"Əbədi olaraq yalnız 21 milyon Bitcoin olacaq. Heç kim daha çox çap edə bilməz.",
	inflation_freedom_decentralized_title: "Mərkəzləşdirilməmiş",
	inflation_freedom_decentralized_desc:
		"Heç bir tək qurum — nə hökumət, nə də şirkət — Bitcoin-i idarə etmir.",
	inflation_freedom_permissionless_title: "İcazəsiz",
	inflation_freedom_permissionless_desc:
		"Hər kəs, hər yerdə şəbəkəyə qoşula bilər. Heç kim sizi dayandıra bilməz.",
	inflation_freedom_sovereign_title: "Suveren",
	inflation_freedom_sovereign_desc:
		"Siyasətçilərdən və onların pozulmuş vədlərindən asılı olmayan yeni bir sistem.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milyon",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Əbədi olaraq sabit",
	inflation_stat_bitcoin_source: "Mənbə: Bitcoin ağ kitabı →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Bu gün",
	inflation_stat_currency_counting: "və saymağa davam edir...",
	inflation_stat_currency_detail_4yr_lost:
		"4 ildə itirilmiş alıcılıq qabiliyyəti",
	inflation_stat_currency_source_cpi: "Mənbə: FRED CPI →",
	inflation_stat_currency_source_debt: "Mənbə: FRED Dövlət Borcu →",
	inflation_stat_currency_source_m1: "Mənbə: FRED Dar Pul Təklifi →",
	inflation_stat_currency_source_m1_short: "Mənbə: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr: "4 ildə əldə edilmiş alıcılıq qabiliyyəti",
	inflation_stat_btc_source_bpr: "Mənbə: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"İşçilər bank hesabları dondurulduqdan sonra pullarına çıxış əldə etmək üçün Bitcoin-dən istifadə etdilər.",
	inflation_story_nigeria_title: "Nigeriya",
	inflation_story_nigeria_desc:
		"Banklar onlarla əməkdaşlıqdan imtina etdikdən sonra etirazçılar hərəkatlarını maliyyələşdirmək üçün Bitcoin-dən istifadə etdilər.",
	inflation_story_pennsylvania_title: "Pensilvaniya",
	inflation_story_pennsylvania_desc:
		"Bitcoin madençiliyi hökumətin qarşılaşmaqdan imtina etdiyi kömür tullantılarını təmizlədi.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin madençiliyi böyük fırtına zamanı elektriyin kəsilməməsinə kömək etdi.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 illik performans qrafikləri (bütün valyutalar)",
	sources_bitcoin_source_code:
		"Bitcoin mənbə kodu — 21 milyon təklif limiti",
	sources_canadian_trucker:
		"Kanada yük maşını sürücülərinin etirazı — dondurulmuş bank hesablarını keçmək üçün Bitcoin-dən istifadə edildi (YouTube)",
	sources_mempool_space: "Mempool.space — Bitcoin təklifi və madençilik məlumatları",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin Nigeriya-da EndSARS etirazlarını necə gücləndirdi",
	sources_pennsylvania_mining:
		"Pensilvaniyada Bitcoin madençiliyi tullantı metanını bərpa edir (YouTube)",
	sources_texas_mining:
		"Texasda Bitcoin madençiliyi və elektrik şəbəkəsi (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin-in inflyasiyası yoxdur, amma pulunuzun var.",
	inflation_choose: "Sübutu görmək üçün valyutanızı seçin",
	inflation_choose_another: "← Başqa valyuta seçin",
	inflation_sticker_learn: "Bitcoin-in necə kömək edə biləcəyini öyrənin.",
	inflation_sticker_lets_find_out: "Gəlin öyrənək.",
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
		`translate-inflation (az): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
