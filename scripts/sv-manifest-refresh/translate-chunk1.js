#!/usr/bin/env node
/**
 * Swedish (sv) manifest refresh — chunk 1 translator.
 *
 * Fills in `targetTranslation` for the 482 entries in
 * scripts/sv-manifest-refresh/chunks/sv-chunk1.json
 * (namespaces: common, index, inflation).
 *
 * Idempotent: re-running just re-fills any missing values from the
 * lookup table T below.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(__dirname, "chunks", "sv-chunk1.json");

/* ───────────────── Per-currency Swedish labels ───────────────── */

const CURRENCY = {
	usd: {
		ifSavePhrase: "Om du sparar i amerikanska dollar",
		nounPluralLower: "dollar",
		nounSingularLower: "dollarn",
		label: "AMERIKANSK DOLLAR",
		existenceTitle: "DOLLAR I OMLOPP",
		debtTitle: "TOTAL FEDERAL STATSSKULD",
	},
	eur: {
		ifSavePhrase: "Om du sparar i euro",
		nounPluralLower: "euro",
		nounSingularLower: "euron",
		label: "EURO",
		existenceTitle: "EURO I OMLOPP",
		debtTitle: "EUROOMRÅDETS STATSSKULD",
	},
	gbp: {
		ifSavePhrase: "Om du sparar i brittiska pund",
		nounPluralLower: "pund",
		nounSingularLower: "pundet",
		label: "BRITTISKT PUND",
		existenceTitle: "BRITTISKA PUND I OMLOPP",
		debtTitle: "STORBRITANNIENS STATSSKULD",
	},
	cad: {
		ifSavePhrase: "Om du sparar i kanadensiska dollar",
		nounPluralLower: "dollar",
		nounSingularLower: "dollarn",
		label: "KANADENSISK DOLLAR",
		existenceTitle: "KANADENSISKA DOLLAR I OMLOPP",
		debtTitle: "KANADAS STATSSKULD",
	},
	aud: {
		ifSavePhrase: "Om du sparar i australiska dollar",
		nounPluralLower: "dollar",
		nounSingularLower: "dollarn",
		label: "AUSTRALISK DOLLAR",
		existenceTitle: "AUSTRALISKA DOLLAR I OMLOPP",
		debtTitle: "AUSTRALIENS STATSSKULD",
	},
	jpy: {
		ifSavePhrase: "Om du sparar i japanska yen",
		nounPluralLower: "yen",
		nounSingularLower: "yenen",
		label: "JAPANSK YEN",
		existenceTitle: "JAPANSKA YEN I OMLOPP",
		debtTitle: "JAPANS STATSSKULD",
	},
	brl: {
		ifSavePhrase: "Om du sparar i brasilianska real",
		nounPluralLower: "real",
		nounSingularLower: "realen",
		label: "BRASILIANSK REAL",
		existenceTitle: "BRASILIANSKA REAL I OMLOPP",
		debtTitle: "BRASILIENS STATSSKULD",
	},
	mxn: {
		ifSavePhrase: "Om du sparar i mexikanska peso",
		nounPluralLower: "peso",
		nounSingularLower: "peson",
		label: "MEXIKANSK PESO",
		existenceTitle: "MEXIKANSKA PESO I OMLOPP",
		debtTitle: "MEXIKOS STATSSKULD",
	},
	nzd: {
		ifSavePhrase: "Om du sparar i nyzeeländska dollar",
		nounPluralLower: "dollar",
		nounSingularLower: "dollarn",
		label: "NYZEELÄNDSK DOLLAR",
		existenceTitle: "NYZEELÄNDSKA DOLLAR I OMLOPP",
		debtTitle: "NYA ZEELANDS STATSSKULD",
	},
	php: {
		ifSavePhrase: "Om du sparar i filippinska peso",
		nounPluralLower: "peso",
		nounSingularLower: "peson",
		label: "FILIPPINSK PESO",
		existenceTitle: "FILIPPINSKA PESO I OMLOPP",
		debtTitle: "FILIPPINERNAS STATSSKULD",
	},
	thb: {
		ifSavePhrase: "Om du sparar i thailändska baht",
		nounPluralLower: "baht",
		nounSingularLower: "bahten",
		label: "THAILÄNDSK BAHT",
		existenceTitle: "THAILÄNDSKA BAHT I OMLOPP",
		debtTitle: "THAILANDS STATSSKULD",
	},
	inr: {
		ifSavePhrase: "Om du sparar i indiska rupier",
		nounPluralLower: "rupier",
		nounSingularLower: "rupien",
		label: "INDISK RUPIE",
		existenceTitle: "INDISKA RUPIER I OMLOPP",
		debtTitle: "INDIENS STATSSKULD",
	},
	ils: {
		ifSavePhrase: "Om du sparar i israeliska shekel",
		nounPluralLower: "shekel",
		nounSingularLower: "shekeln",
		label: "ISRAELISK SHEKEL",
		existenceTitle: "ISRAELISKA SHEKEL I OMLOPP",
		debtTitle: "ISRAELS STATSSKULD",
	},
};

/* ───────────────── Per-currency block builder ───────────────── */

function buildCurrencyBlock(code) {
	const c = CURRENCY[code];
	const out = {};

	// stat block
	out[`inflation_stat_${code}_label`] = c.label;
	out[`inflation_stat_${code}_existence_title`] = c.existenceTitle;
	out[`inflation_stat_${code}_debt_title`] = c.debtTitle;

	// btc section
	out[`inflation_${code}_btc_h2`] = "Bitcoin har inte inflation";
	out[`inflation_${code}_btc_p1`] =
		"Inflation innebär att dina pengar köper dig mindre med tiden. Bitcoin är bättre pengar eftersom det inte har inflation.";
	out[`inflation_${code}_btc_p2_before`] =
		`${capitalizeFirst(c.nounPluralLower)} har ett obegränsat utbud, vilket betyder att fler kan tryckas när som helst.`;
	out[`inflation_${code}_btc_p2_link`] = "Bitcoin är knappt";
	out[`inflation_${code}_btc_p2_after`] =
		"eftersom det har ett maxutbud på 21 miljoner Bitcoin. Ingen kan trycka mer Bitcoin.";
	out[`inflation_${code}_btc_p3`] =
		`Historiskt sett har Bitcoin ökat i köpkraft över tid medan ${c.nounSingularLower} har förlorat sin. Många använder Bitcoin som sitt långsiktiga sparkonto: pengar som de kan låta vara ifred och växa i flera år.`;
	out[`inflation_${code}_btc_p4`] =
		`Vill du hellre spara i ${c.nounPluralLower} som köper dig mindre med tiden? Eller spara i Bitcoin som historiskt sett har köpt dig mer med tiden?`;

	// freedom section (per-currency wrappers identical text in all currencies in this site)
	out[`inflation_${code}_freedom_h2`] = "Bitcoin är också ett verktyg för frihet";
	out[`inflation_${code}_freedom_p1`] =
		"Bitcoin-nätverket ägs inte av någon. Det kontrolleras inte av någon regering eller något företag. Det är utformat för att upprätthålla din frihet och skydda dina pengar.";
	out[`inflation_${code}_freedom_p2`] =
		"Människor runtom i världen använder redan Bitcoin för att skydda sin frihet — även när deras egna regeringar vägrade hjälpa eller försökte stoppa dem.";

	// intro
	out[`inflation_${code}_intro_1`] =
		`${c.ifSavePhrase} har du säkert märkt att de köper dig mindre för varje år. Det krävs fler ${c.nounPluralLower} för att köpa samma mängd mat. Du behöver fler ${c.nounPluralLower} för att behålla din livskvalitet.`;
	out[`inflation_${code}_intro_2`] = "Men det behöver inte vara så här.";
	out[`inflation_${code}_intro_highlight`] =
		"De som sparat i Bitcoin de senaste 4 åren har sett livet bli billigare.";

	// proof section
	out[`inflation_${code}_proof_h2`] = "Här är beviset: dina pengar tappar värde";
	out[`inflation_${code}_proof_p1`] =
		`${capitalizeFirst(c.nounPluralLower)} på ditt bankkonto köper dig mindre för varje år. Det beror på att det inte finns någon fast gräns för hur många ${c.nounPluralLower} som kan skapas.`;
	out[`inflation_${code}_proof_p2`] =
		`Detta obegränsade utbud är grundorsaken till inflation. Under de senaste åren har den totala mängden ${c.nounPluralLower} i omlopp ökat dramatiskt.`;
	out[`inflation_${code}_proof_p3`] =
		"När mer pengar skapas ur tomma intet stiger priset på allt. Det inkluderar de råvaror som företag köper för att tillverka sina produkter — vilket innebär högre priser för dig.";
	out[`inflation_${code}_proof_p4`] =
		"Och när regeringen fortsätter att öka sin skuld trycks ännu mer pengar, eftersom färre vill låna ut till dem.";
	out[`inflation_${code}_proof_p5_before`] =
		"Om du inte kan få ett lån kan du inte spendera pengar. Men om regeringen";
	out[`inflation_${code}_proof_p5_link`] = "inte kan få ett lån";
	out[`inflation_${code}_proof_p5_after`] = ", trycker de helt enkelt pengarna.";
	out[`inflation_${code}_proof_p6`] =
		"Mer statsskuld betyder mer pengatryckande. Mer pengatryckande betyder mer inflation. Och det finns inget tecken på att det ska sluta.";

	return out;
}

function capitalizeFirst(s) {
	if (!s) return s;
	return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ───────────────── Translation lookup table ───────────────── */

const T = {};

/* — common namespace — */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Lägg till språk",
	"common::common_next_buy_bitcoin": "Köp Bitcoin",
	"common::common_next_buy_bitcoin_desc": "Lär dig hur du köper Bitcoin på ett säkert sätt",
	"common::common_next_calculate": "Räkna ut din inflation",
	"common::common_next_calculate_desc": "Se hur inflation påverkar din lön över tid",
	"common::common_next_get_wallet": "Skaffa en plånbok",
	"common::common_next_get_wallet_desc": "Skaffa din första Bitcoin-plånbok — den är gratis",
	"common::common_next_keep_learning": "Fortsätt lära dig",
	"common::common_next_keep_learning_desc": "Se hur Bitcoin förbättrar världen",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Konsumentprisindex (KPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Penningmängd (kategoriindex)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — “Can a Treasury Auction Fail?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Vad händer nu?",
	"common::common_sticker_files_mission_3": "inflation",
	"common::common_stickers_material": "Material:",
	"common::common_sticker_files_mission_5": "beställa ett paket",
	"common::common_site_tagline": "Bitcoin-utbildning för alla.",
	"common::common_source_btc_map":
		"BTC Map — Världsomspännande katalog över Bitcoin-accepterande handlare",
	"common::common_source_btcpayserver":
		"BTCPay Server — Gratis, öppen källkod, självhostad Bitcoin-betalningsbehandlare",
	"common::common_source_oshi": "Oshi — Bitcoin-belöningsplattform för handlare",
	"common::common_source_strike_business":
		"Strike — Bitcoin- och Lightning-betalningar för företag",
	"common::common_sources_group_bitcoin": "Bitcoin-data",
	"common::common_sources_group_cpi": "Inflation / Konsumentprisindex",
	"common::common_sources_group_debt": "Statsskuld",
	"common::common_sources_group_money": "Data om penningmängd",
	"common::common_sources_group_stories": "Verkliga exempel",
	"common::common_sticker_files_mission_6": "engelska klistermärken gratis.",
	"common::common_sticker_files_next_flyers_label": "Flygblad",
	"common::common_sticker_files_next_flyers_title": "Skriv ut ett Bitcoin-flygblad",
	"common::common_sticker_files_next_languages_label": "Klistermärkesfiler",
	"common::common_sticker_files_next_languages_title":
		"Se klistermärkesfiler på andra språk",
	"common::common_sticker_files_print_these": "SKRIV UT DESSA MED 1 KLICK",
	"common::common_sticker_name_bdhi_black":
		"“Bitcoin har inte inflation”-klistermärke (svart)",
	"common::common_sticker_name_bdhi_orange":
		"“Bitcoin har inte inflation”-klistermärke (orange)",
	"common::common_sticker_name_caution":
		"“Varning! Smältande iskub” Bitcoin-klistermärke",
	"common::common_sticker_name_cure_inflation":
		"“Bota inflation” Bitcoin-klistermärke",
	"common::common_sticker_name_danger":
		"“Fara! Inflation framöver” Bitcoin-klistermärke",
	"common::common_sticker_name_fix":
		"“Fix the Money, Fix the World” Bitcoin-klistermärke",
	"common::common_sticker_name_got_inflation":
		"“Har du inflation?” Bitcoin-klistermärke",
	"common::common_sticker_name_study": "“Studera Bitcoin”-klistermärke",
	"common::common_sticker_name_warning":
		"“Varning! Inflation stjäl ditt sparande” Bitcoin-klistermärke",
	"common::common_sticker_name_what_if":
		"“Tänk om dina pengar inte hade inflation?” Bitcoin-klistermärke",
	"common::common_sticker_tips_heading": "Tips för klistermärken",
	"common::common_sticker_tips_intro":
		"När du har skrivit ut dina klistermärken — sätt upp dem där de syns! Bra platser för klistermärken är:",
	"common::common_sticker_tips_list_1":
		"på offentliga platser där människor kommer att se dem",
	"common::common_sticker_tips_list_2":
		"på platser där de sannolikt inte kommer att tas bort snabbt (klistermärkena orsakar ingen permanent skada)",
	"common::common_sticker_tips_list_3":
		"på ytor där de fastnar enkelt (metall, plast, glas)",
	"common::common_sticker_tips_list_4":
		"INTE på privat egendom, över skyltar, bankomater eller bensinpumpar",
	"common::common_stickers_printer_prefix": "Vi använder",
	"common::common_stickers_printer_suffix": "men du kan använda valfritt klistermärkesföretag.",
});

/* — index namespace — */
Object.assign(T, {
	"index::home_btn_saving": "SPARA",
	"index::home_card_label_art_1": "Låt oss jämföra",
	"index::home_card_label_art_2": "Sprid budskapet",
	"index::home_card_label_art_3": "Gatukonst",
	"index::home_card_label_bank_runs": "Fullreservsystem",
	"index::home_card_label_bonds": "Låt oss jämföra",
	"index::home_card_label_business_1": "Vad är skillnaden?",
	"index::home_card_label_business_2": "Acceptera Bitcoin-betalningar",
	"index::home_card_label_cash": "Låt oss jämföra",
	"index::home_card_label_cbdc": "Öppet eller stängt?",
	"index::home_card_label_coding_1": "Interaktiv handledning",
	"index::home_card_label_coding_2": "Bygg hårdvara",
	"index::home_card_label_coding_3": "Kodningspussel",
	"index::home_card_label_crowdfunding_1": "EndSARS-protesterna",
	"index::home_card_label_crowdfunding_2": "Ostoppbara pengar",
	"index::home_card_label_crowdfunding_3": "Finansiera ditt projekt",
	"index::home_card_label_crypto": "Vad är skillnaden?",
	"index::home_card_label_energy_1": "Stabilisering av elnätet",
	"index::home_card_label_energy_4": "Efterfrågestyrning",
	"index::home_card_label_energy_5": "Elektrifiering av landsbygden",
	"index::home_card_label_energy_6": "Incitament för förnybart",
	"index::home_card_label_environment_1": "Minskning av metan",
	"index::home_card_label_environment_2": "Räddade en nationalpark",
	"index::home_card_label_environment_3": "Grönaste industrin",
	"index::home_card_label_environment_4": "Minskar facklad gas",
	"index::home_card_label_equality_1": "Hopp och möjligheter",
	"index::home_card_label_equality_2": "En spelförändrare",
	"index::home_card_label_food_1": "Matpriser",
	"index::home_card_label_food_2": "Gårdar och jord",
	"index::home_card_label_freedom_1": "Auktoritära regimer",
	"index::home_card_label_freedom_2": "Ett unikt verktyg",
	"index::home_card_label_get_started_1": "Grunderna för nybörjare",
	"index::home_card_label_get_started_2": "Din första plånbok",
	"index::home_card_label_get_started_3": "Köp Bitcoin",
	"index::home_card_label_gold": "Vilket är bättre?",
	"index::home_card_label_housing_1": "Överkomligt boende",
	"index::home_card_label_human_rights_1": "Skydd av mänskliga rättigheter",
	"index::home_card_label_human_rights_2": "Gräsrotsadoption",
	"index::home_card_label_human_rights_3": "Globala effekter",
	"index::home_card_label_inflation": "Bitcoin är bättre pengar",
	"index::home_card_label_networks_1": "Livevy av nätverket",
	"index::home_card_label_networks_2": "Låt oss jämföra",
	"index::home_card_label_payments_1": "Vad är skillnaden?",
	"index::home_card_label_payments_2": "Snabba och billiga betalningar",
	"index::home_card_label_payments_3": "Remitteringar",
	"index::home_card_label_payments_4": "Ta emot betalningar",
	"index::home_card_label_politics_1": "Politisk paradox",
	"index::home_card_label_politics_2": "Vidta åtgärder",
	"index::home_card_label_property_rights_1": "Låt oss jämföra",
	"index::home_card_label_property_rights_2": "Verkligt ägande",
	"index::home_card_label_salary": "Skydda din lön",
	"index::home_card_label_self_custody_1": "Guide till Bitcoin-plånböcker",
	"index::home_card_label_self_custody_2": "Det viktigaste steget",
	"index::home_card_label_self_custody_3": "Suveräna pengar",
	"index::home_card_label_war_1": "Avsluta eviga krig",
	"index::home_card_label_war_2": "Hjälpa veteraner",
	"index::home_card_label_war_3": "Krigstida flykt",
	"index::home_h1": "Bitcoin är bättre pengar som bygger en bättre värld.",
	"index::home_nav_about": "Om",
	"index::home_nav_get_involved": "Engagera dig",
	"index::home_nav_learn": "Lär dig",
	"index::home_source_prefix": "Källa:",
});

/* — inflation namespace: manifest-changed (override) — */
Object.assign(T, {
	"inflation::inflation_choose": "Välj din valuta för att se beviset",
	"inflation::inflation_choose_another": "← Välj en annan valuta",
	"inflation::inflation_h1_orange": "Bitcoin har inte inflation, men det har dina pengar.",
	"inflation::inflation_sticker_learn": "Lär dig hur Bitcoin kan hjälpa dig.",
	"inflation::inflation_sticker_lets_find_out": "Låt oss ta reda på det.",
});

/* — inflation namespace: manifest-added sources — */
Object.assign(T, {
	"inflation::sources_bitcoin_price_report_4yr":
		"Bitcoin Price Report — Utvecklingsdiagram för 4 år (alla valutor)",
	"inflation::sources_bitcoin_source_code":
		"Bitcoin Source Code — Utbudstaket på 21 miljoner",
	"inflation::sources_canadian_trucker":
		"Kanadensisk lastbilsförarprotest — Bitcoin användes för att kringgå frysta bankkonton (YouTube)",
	"inflation::sources_mempool_space":
		"Mempool.space — Bitcoin-utbud och miningdata",
	"inflation::sources_nigeria_endsars":
		"Quartz Africa — Hur Bitcoin drev Nigerias EndSARS-protester",
	"inflation::sources_pennsylvania_mining":
		"Pennsylvania-baserad Bitcoin-mining återvinner metan från avfall (YouTube)",
	"inflation::sources_texas_mining":
		"Bitcoin-mining i Texas och elnätet (YouTube)",
});

/* — inflation namespace: stat/freedom/story shared keys — */
Object.assign(T, {
	"inflation::inflation_stat_bitcoin_detail": "Fast för alltid",
	"inflation::inflation_stat_bitcoin_label": "BITCOIN",
	"inflation::inflation_stat_bitcoin_numeric": "(21,000,000)",
	"inflation::inflation_stat_bitcoin_source": "Källa: Bitcoin Whitepaper →",
	"inflation::inflation_stat_bitcoin_value": "21 miljoner",

	"inflation::inflation_stat_btc_detail_4yr": "Köpkraft som vunnits över 4 år",
	"inflation::inflation_stat_btc_source_bpr": "Källa: Bitcoin Price Report →",

	"inflation::inflation_stat_comparison_today": "IDAG",

	"inflation::inflation_stat_currency_counting": "Och fortsätter...",
	"inflation::inflation_stat_currency_detail_4yr_lost":
		"Köpkraft som förlorats över 4 år",
	"inflation::inflation_stat_currency_source_cpi": "Källa: FRED KPI →",
	"inflation::inflation_stat_currency_source_debt": "Källa: FRED Statsskuld →",
	"inflation::inflation_stat_currency_source_m1":
		"Källa: FRED Smal penningmängd →",
	"inflation::inflation_stat_currency_source_m1_short": "Källa: FRED →",

	"inflation::inflation_freedom_decentralized_desc":
		"Ingen enskild aktör — ingen regering, inget företag — kontrollerar Bitcoin.",
	"inflation::inflation_freedom_decentralized_title": "Decentraliserat",
	"inflation::inflation_freedom_learn_more": "Läs mer →",
	"inflation::inflation_freedom_permissionless_desc":
		"Vem som helst, var som helst kan ansluta till nätverket. Ingen kan stoppa dig.",
	"inflation::inflation_freedom_permissionless_title": "Tillståndsfritt",
	"inflation::inflation_freedom_scarce_desc":
		"Det kommer aldrig att finnas mer än 21 miljoner Bitcoin. Ingen kan trycka mer.",
	"inflation::inflation_freedom_scarce_title": "Knappt",
	"inflation::inflation_freedom_sovereign_desc":
		"Ett nytt system, oberoende av politiker och deras brutna löften.",
	"inflation::inflation_freedom_sovereign_title": "Suveränt",

	"inflation::inflation_story_canada_desc":
		"Arbetare använde Bitcoin för att komma åt pengar efter att deras bankkonton frystes.",
	"inflation::inflation_story_canada_title": "Kanada",
	"inflation::inflation_story_nigeria_desc":
		"Demonstranter använde Bitcoin för att finansiera sin rörelse efter att bankerna stängde av dem.",
	"inflation::inflation_story_nigeria_title": "Nigeria",
	"inflation::inflation_story_pennsylvania_desc":
		"Bitcoin-mining sanerade kolavfall som regeringen vägrade hantera.",
	"inflation::inflation_story_pennsylvania_title": "Pennsylvania",
	"inflation::inflation_story_texas_desc":
		"Bitcoin-mining bidrog till att hålla strömmen igång under en kraftig storm.",
	"inflation::inflation_story_texas_title": "Texas",
});

/* — inflation namespace: per-currency blocks — */
for (const code of Object.keys(CURRENCY)) {
	const block = buildCurrencyBlock(code);
	for (const k of Object.keys(block)) {
		T[`inflation::${k}`] = block[k];
	}
}

/* ───────────────── Apply to report ───────────────── */

const r = JSON.parse(fs.readFileSync(REPORT, "utf8"));

let filled = 0;
let already = 0;
let unmatched = [];

for (const e of r.entries) {
	const k = `${e.namespace}::${e.key}`;
	if (T[k] !== undefined) {
		e.targetTranslation = T[k];
		filled++;
	} else if (typeof e.targetTranslation === "string") {
		already++;
	} else {
		unmatched.push(k);
	}
}

fs.writeFileSync(REPORT, JSON.stringify(r, null, "\t") + "\n");

console.log(`Filled ${filled}, already-translated ${already}.`);
console.log(
	`Remaining null after pass: ${r.entries.filter((e) => e.targetTranslation === null).length}`,
);
if (unmatched.length) {
	console.log("Unmatched keys:");
	for (const k of unmatched) console.log("  -", k);
}
