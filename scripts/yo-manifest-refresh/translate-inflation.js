#!/usr/bin/env node
/**
 * Yoruba (yo) manifest refresh — inflation namespace translator.
 *
 * Fills in `targetTranslation` for the 368 entries in the
 * `inflation` namespace. The namespace contains:
 *   - 14 currency templates × 22 keys = 308 (one per per-currency block)
 *     (currencies: usd, eur, gbp, cad, aud, nzd, jpy, inr, mxn, brl,
 *      php, thb, ils, btc — note btc appears alongside fiat)
 *   - inflation_stat_* labels + titles (~40)
 *   - 9 freedom card keys
 *   - 8 story card keys
 *   - misc page-level keys + 7 source links (manifest-added)
 *
 * Idempotent: re-running re-fills any matching entries.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(__dirname, "..", "i18n-audit", "reports", "yo.json");

// Per-currency Yoruba labels. Standard Yoruba register with full tone marks.
// Yoruba financial press generally retains anglicized currency names.
const CURRENCY = {
	usd: {
		// "If you save in [X], you've probably noticed..." opener
		ifSavePhrase: "Tí o bá ń pa owó dọ́là Amẹ́ríkà mọ́",
		// Plural noun used in "It takes more X to buy..."
		nounPlural: "dọ́là",
		// "more X" in compact form
		nounMore: "dọ́là",
		// Bank account currency name
		nounAccount: "dọ́là",
		// Label for the currency (used in stat_*_label)
		label: "DỌ́LÀ AMẸ́RÍKÀ",
		// Title for "[X] in existence" stat
		existenceTitle: "Dọ́là Amẹ́ríkà tí ó wà",
		// Title for "[X] government debt" stat
		debtTitle: "Gbèsè Ìjọba Àpapọ̀ Amẹ́ríkà",
	},
	eur: {
		ifSavePhrase: "Tí o bá ń pa owó yúrò mọ́",
		nounPlural: "yúrò",
		nounMore: "yúrò",
		nounAccount: "yúrò",
		label: "YÚRÒ",
		existenceTitle: "Yúrò tí ó wà",
		debtTitle: "Gbèsè Àwọn Ìjọba Eurozone",
	},
	gbp: {
		ifSavePhrase: "Tí o bá ń pa owó páùndì Gẹ̀ẹ́sì mọ́",
		nounPlural: "páùndì",
		nounMore: "páùndì",
		nounAccount: "páùndì",
		label: "PÁÙNDÌ GẸ̀Ẹ́SÌ",
		existenceTitle: "Páùndì Gẹ̀ẹ́sì tí ó wà",
		debtTitle: "Gbèsè Ìjọba Gẹ̀ẹ́sì",
	},
	cad: {
		ifSavePhrase: "Tí o bá ń pa owó dọ́là Kánádà mọ́",
		nounPlural: "dọ́là",
		nounMore: "dọ́là",
		nounAccount: "dọ́là",
		label: "DỌ́LÀ KÁNÁDÀ",
		existenceTitle: "Dọ́là Kánádà tí ó wà",
		debtTitle: "Gbèsè Ìjọba Kánádà",
	},
	aud: {
		ifSavePhrase: "Tí o bá ń pa owó dọ́là Ọsirélíà mọ́",
		nounPlural: "dọ́là",
		nounMore: "dọ́là",
		nounAccount: "dọ́là",
		label: "DỌ́LÀ ỌSIRÉLÍÀ",
		existenceTitle: "Dọ́là Ọsirélíà tí ó wà",
		debtTitle: "Gbèsè Ìjọba Ọsirélíà",
	},
	nzd: {
		ifSavePhrase: "Tí o bá ń pa owó dọ́là Niu Sílándì mọ́",
		nounPlural: "dọ́là",
		nounMore: "dọ́là",
		nounAccount: "dọ́là",
		label: "DỌ́LÀ NIU SÍLÁNDÌ",
		existenceTitle: "Dọ́là Niu Sílándì tí ó wà",
		debtTitle: "Gbèsè Ìjọba Niu Sílándì",
	},
	jpy: {
		ifSavePhrase: "Tí o bá ń pa owó yẹ́nì Japan mọ́",
		nounPlural: "yẹ́nì",
		nounMore: "yẹ́nì",
		nounAccount: "yẹ́nì",
		label: "YẸ́NÌ JAPAN",
		existenceTitle: "Yẹ́nì Japan tí ó wà",
		debtTitle: "Gbèsè Ìjọba Japan",
	},
	inr: {
		ifSavePhrase: "Tí o bá ń pa owó rúpí Indíà mọ́",
		nounPlural: "rúpí",
		nounMore: "rúpí",
		nounAccount: "rúpí",
		label: "RÚPÍ INDÍÀ",
		existenceTitle: "Rúpí Indíà tí ó wà",
		debtTitle: "Gbèsè Ìjọba Indíà",
	},
	mxn: {
		ifSavePhrase: "Tí o bá ń pa owó pẹ́sò Mẹ́síkò mọ́",
		nounPlural: "pẹ́sò",
		nounMore: "pẹ́sò",
		nounAccount: "pẹ́sò",
		label: "PẸ́SÒ MẸ́SÍKÒ",
		existenceTitle: "Pẹ́sò Mẹ́síkò tí ó wà",
		debtTitle: "Gbèsè Ìjọba Mẹ́síkò",
	},
	brl: {
		ifSavePhrase: "Tí o bá ń pa owó réàlì Brazil mọ́",
		nounPlural: "réàlì",
		nounMore: "réàlì",
		nounAccount: "réàlì",
		label: "RÉÀLÌ BRAZIL",
		existenceTitle: "Réàlì Brazil tí ó wà",
		debtTitle: "Gbèsè Ìjọba Brazil",
	},
	php: {
		ifSavePhrase: "Tí o bá ń pa owó pẹ́sò Filipínì mọ́",
		nounPlural: "pẹ́sò",
		nounMore: "pẹ́sò",
		nounAccount: "pẹ́sò",
		label: "PẸ́SÒ FILIPÍNÌ",
		existenceTitle: "Pẹ́sò Filipínì tí ó wà",
		debtTitle: "Gbèsè Ìjọba Filipínì",
	},
	thb: {
		ifSavePhrase: "Tí o bá ń pa owó báàtì Tailandi mọ́",
		nounPlural: "báàtì",
		nounMore: "báàtì",
		nounAccount: "báàtì",
		label: "BÁÀTÌ TAILANDI",
		existenceTitle: "Báàtì Tailandi tí ó wà",
		debtTitle: "Gbèsè Ìjọba Tailandi",
	},
	ils: {
		ifSavePhrase: "Tí o bá ń pa owó ṣẹ́kẹ́lì Ísíráẹ́lì mọ́",
		nounPlural: "ṣẹ́kẹ́lì",
		nounMore: "ṣẹ́kẹ́lì",
		nounAccount: "ṣẹ́kẹ́lì",
		label: "ṢẸ́KẸ́LÌ ÍSÍRÁẸ́LÌ",
		existenceTitle: "Ṣẹ́kẹ́lì Ísíráẹ́lì tí ó wà",
		debtTitle: "Gbèsè Ìjọba Ísíráẹ́lì",
	},
	btc: {
		// btc currency keys describe Bitcoin in a savings comparison context
		// Keep brand "Bitcoin"; fiat-noun cross-references use generic "owó"
		ifSavePhrase: "Tí o bá ń pa owó orílẹ̀-èdè rẹ mọ́",
		nounPlural: "owó",
		nounMore: "owó",
		nounAccount: "owó",
		label: "BITCOIN",
		existenceTitle: "Bitcoin tí ó wà",
		debtTitle: "Gbèsè Ìjọba",
	},
};

// Builds the 22 per-currency translations for code `c`.
function currencyBlock(c) {
	const cur = CURRENCY[c];
	return {
		[`inflation_${c}_intro_1`]: `${cur.ifSavePhrase}, ó ṣeé ṣe kí o ti ṣàkíyèsí pé ó ń ra ohun tí ó kéré sí ní ọdọọdún. Ó nílò ${cur.nounPlural} púpọ̀ síi láti ra iye oúnjẹ kan náà. O nílò ${cur.nounMore} púpọ̀ síi láti pa ìpele ìgbé ayé rẹ mọ́.`,
		[`inflation_${c}_intro_2`]: "Ṣùgbọ́n kò sì gbọ́dọ̀ rí bẹ́ẹ̀.",
		[`inflation_${c}_intro_highlight`]: "Àwọn tí ó ti pa Bitcoin mọ́ ní ọdún mẹ́rin sẹ́yìn ti rí i pé iye ìgbé ayé wọn ti dín kù.",
		[`inflation_${c}_proof_h2`]: "Èyí ni ẹ̀rí náà: owó rẹ ń pàdánù iye rẹ̀",
		[`inflation_${c}_proof_p1`]: `${cur.nounPlural} tí ó wà ní àpótí ilé-ìfowópamọ́ rẹ ń ra ohun tí ó kéré sí ní ọdọọdún, nítorí kò sí ààlà tí ó múlẹ̀ lórí iye ${cur.nounPlural} tí a lè ṣẹ̀dá.`,
		[`inflation_${c}_proof_p2`]: `Àìní ààlà yìí ni ìdí pàtàkì ti owó-ṣíṣẹ́. Ní àwọn ọdún díẹ̀ sẹ́yìn, iye àpapọ̀ ${cur.nounPlural} tí ó wà ti pọ̀ sí gan-an.`,
		[`inflation_${c}_proof_p3`]: "Bí a ti ń ṣẹ̀dá owó síi láti ihò òfo, idiyele ohun gbogbo ń pọ̀ sí, pẹ̀lú àwọn ohun èlò tí àwọn ilé-iṣẹ́ ń rà láti ṣe àwọn ohun tí o ń rà. Èyí túmọ̀ sí pé idiyele tí o ń sanwó nígbẹ̀yìn yóò tún pọ̀ sí.",
		[`inflation_${c}_proof_p4`]: "Bí àwọn ìjọba ti ń pọ̀ sí gbèsè wọn, owó síi á di títẹ̀ jáde, nítorí pé àwọn ènìyàn díẹ̀ ni yóò fi yá wọn.",
		[`inflation_${c}_proof_p5_before`]: "Tí o kò bá lè yá owó, o kò lè ná. Ṣùgbọ́n bí ìjọba bá",
		[`inflation_${c}_proof_p5_link`]: "kò lè yá",
		[`inflation_${c}_proof_p5_after`]: ", wọ́n máa kàn tẹ̀ ẹ́ jáde fúnra wọn.",
		[`inflation_${c}_proof_p6`]: "Gbèsè ìjọba síi túmọ̀ sí títẹ̀ owó síi. Títẹ̀ owó síi túmọ̀ sí owó-ṣíṣẹ́ síi. Kò sì sí ààmì pé èyí yóò dúró.",
		[`inflation_${c}_btc_h2`]: "Bitcoin kò ní owó-ṣíṣẹ́",
		[`inflation_${c}_btc_p1`]: "Owó-ṣíṣẹ́ túmọ̀ sí pé owó rẹ ń ra ohun tí ó kéré sí bí àkókò ti ń lọ. Bitcoin jẹ́ owó tí ó dára jùlọ nítorí kò ní owó-ṣíṣẹ́.",
		[`inflation_${c}_btc_p2_before`]: `${cur.nounPlural} ní ìpèsè aláìlópin, èyí túmọ̀ sí pé a lè tẹ̀ síi ní àkókò èyíkéyìí.`,
		[`inflation_${c}_btc_p2_link`]: "Bitcoin kò pọ̀ tó",
		[`inflation_${c}_btc_p2_after`]: " nítorí ó ní ìpèsè tó ga jùlọ tí 21 mílíọ̀nù Bitcoin. Kò sí ẹnikẹ́ni tí ó lè tẹ̀ Bitcoin síi.",
		[`inflation_${c}_btc_p3`]: `Ní ìtàn àtẹ̀hìnwá, Bitcoin ti ní agbára-rírà síi pẹ̀lú àkókò, nígbà tí ${cur.nounPlural} ti pàdánù tirẹ̀. Ọ̀pọ̀ ènìyàn ń lo Bitcoin gẹ́gẹ́ bí àpótí ìfowópamọ́ ọdún púpọ̀: owó tí wọ́n lè fi sílẹ̀, kí ó sì máa dàgbà lórí àkókò ọdún.`,
		[`inflation_${c}_btc_p4`]: `Ṣé ìwọ yóò fẹ́ pa owó mọ́ ní ${cur.nounPlural} tí ń ra ohun tí ó kéré sí pẹ̀lú àkókò? Tàbí pa owó mọ́ ní Bitcoin tí ó ti ń ra ohun tí ó pọ̀ sí pẹ̀lú àkókò ní ìtàn?`,
		[`inflation_${c}_freedom_h2`]: "Bitcoin tún jẹ́ ohun-èlò fún òmìnira",
		[`inflation_${c}_freedom_p1`]: "Ẹnikẹ́ni kò ní nẹ́tíwọ́ọ̀kì Bitcoin. Kò sí ìjọba tàbí ilé-iṣẹ́ kankan tí ó ń darí rẹ̀. A ṣẹ̀dá rẹ̀ láti dáàbò bo òmìnira àti owó rẹ.",
		[`inflation_${c}_freedom_p2`]: "Àwọn ènìyàn ní gbogbo àgbáyé ti ń lo Bitcoin láti dáàbò bo òmìnira wọn — kódà nígbà tí ìjọba ará wọn kọ̀ láti ràn wọ́n lọ́wọ́ tàbí gbìyànjú láti dí wọn lọ́wọ́.",
	};
}

// Build all per-currency entries
const T = {};
for (const c of Object.keys(CURRENCY)) {
	Object.assign(T, currencyBlock(c));
}

// inflation_stat_* — labels + titles for stat blocks
Object.assign(T, {
	// Bitcoin stat block (shared)
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Mílíọ̀nù",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Múlẹ̀ títí láé",
	inflation_stat_bitcoin_source: "Orísun: Bitcoin Whitepaper →",
	inflation_stat_btc_detail_4yr: "Agbára-rírà tí a jèrè ní ọdún mẹ́rin",
	inflation_stat_btc_source_bpr: "Orísun: Bitcoin Price Report →",
	inflation_stat_comparison_today: "ÒNÍÌ",
	inflation_stat_currency_counting: "Ó sì ń tẹ̀síwájú...",
	inflation_stat_currency_detail_4yr_lost: "Agbára-rírà tí a pàdánù ní ọdún mẹ́rin",
	inflation_stat_currency_source_cpi: "Orísun: FRED CPI →",
	inflation_stat_currency_source_debt: "Orísun: FRED Government Debt →",
	inflation_stat_currency_source_m1: "Orísun: FRED Narrow Money Supply →",
	inflation_stat_currency_source_m1_short: "Orísun: FRED →",
});

// Per-currency stat labels + titles (auto-generated from CURRENCY)
for (const c of Object.keys(CURRENCY)) {
	if (c === "btc") continue; // btc has its own bitcoin_* keys, no stat_btc_*
	const cur = CURRENCY[c];
	T[`inflation_stat_${c}_label`] = cur.label;
	T[`inflation_stat_${c}_existence_title`] = cur.existenceTitle;
	T[`inflation_stat_${c}_debt_title`] = cur.debtTitle;
}

// Freedom card block
Object.assign(T, {
	inflation_freedom_decentralized_title: "Aláìní-Ààrin",
	inflation_freedom_decentralized_desc: "Kò sí ohun kan ṣoṣo — kò sí ìjọba, kò sí ilé-iṣẹ́ — tí ó ń darí Bitcoin.",
	inflation_freedom_permissionless_title: "Kò Nílò Ìyọ̀ǹda",
	inflation_freedom_permissionless_desc: "Ẹnikẹ́ni, níbi gbogbo, lè dara pọ̀ mọ́ nẹ́tíwọ́ọ̀kì náà. Kò sí ẹni tí ó lè dí ọ lọ́wọ́.",
	inflation_freedom_scarce_title: "Kò Pọ̀ Tó",
	inflation_freedom_scarce_desc: "21 mílíọ̀nù Bitcoin nìkan ni yóò máa wà títí láé. Kò sí ẹni tí ó lè tẹ̀ síi.",
	inflation_freedom_sovereign_title: "Olómìnira",
	inflation_freedom_sovereign_desc: "Ètò tuntun kan, tí ó dúró fúnra rẹ̀ kúrò lọ́wọ́ àwọn olóṣèlú àti àwọn ìlérí wọn tí ó fọ́.",
	inflation_freedom_learn_more: "Kẹ́kọ̀ọ́ síi →",
});

// Story cards
Object.assign(T, {
	inflation_story_canada_title: "Kánádà",
	inflation_story_canada_desc: "Àwọn òṣìṣẹ́ lo Bitcoin láti rí owó wọn lẹ́yìn tí a dí àwọn àpótí ilé-ìfowópamọ́ wọn lọ́wọ́.",
	inflation_story_nigeria_title: "Nàìjíríà",
	inflation_story_nigeria_desc: "Àwọn alátakò lo Bitcoin láti pèsè owó fún ìpolongo wọn lẹ́yìn tí àwọn ilé-ìfowópamọ́ kò bá wọn dúró.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc: "Iṣẹ́ ìwakùsà Bitcoin sọ pàǹtí èédú dí mímọ́ tí ìjọba kọ̀ láti tọ́jú.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc: "Iṣẹ́ ìwakùsà Bitcoin ràn án lọ́wọ́ láti pa iná mọ́ ní àkókò ìjì gbígbóná janjan.",
});

// Misc page-level + sources (manifest-changed + manifest-added)
Object.assign(T, {
	inflation_choose: "Yan owó rẹ láti rí ẹ̀rí náà",
	inflation_choose_another: "← Yan owó míràn",
	inflation_h1_orange: "Bitcoin kò ní owó-ṣíṣẹ́, ṣùgbọ́n owó rẹ ní.",
	inflation_sticker_learn: "Kẹ́kọ̀ọ́ bí Bitcoin ṣe lè ràn ọ́ lọ́wọ́.",
	inflation_sticker_lets_find_out: "Jẹ́ kí a wádìí.",
	sources_bitcoin_price_report_4yr: "Bitcoin Price Report — àwọn àwòrán iṣẹ́ ọdún mẹ́rin (gbogbo owó)",
	sources_bitcoin_source_code: "Bitcoin Source Code — Ààlà Ìpèsè 21 Mílíọ̀nù",
	sources_canadian_trucker: "Èhónúnú àwọn awakọ̀ Kánádà — Bitcoin tí a lo láti yẹ àwọn àpótí ilé-ìfowópamọ́ tí ó dí (YouTube)",
	sources_mempool_space: "Mempool.space — Ìpèsè Bitcoin & Dátà Ìwakùsà",
	sources_nigeria_endsars: "Quartz Africa — Bí Bitcoin ṣe pèsè agbára fún àwọn èhónúnú EndSARS Nàìjíríà",
	sources_pennsylvania_mining: "Iṣẹ́ ìwakùsà Bitcoin Pennsylvania ṣe ìmúpadà gáàsì methane pàǹtí (YouTube)",
	sources_texas_mining: "Iṣẹ́ ìwakùsà Bitcoin Texas àti nẹ́tíwọ́ọ̀kì iná (YouTube)",
});

// Apply
const report = JSON.parse(fs.readFileSync(REPORT, "utf-8"));
let filled = 0;
let skipped = 0;
const skippedKeys = [];
for (const e of report.entries) {
	if (e.namespace !== "inflation") continue;
	if (T[e.key] !== undefined) {
		e.targetTranslation = T[e.key];
		filled++;
	} else {
		skipped++;
		skippedKeys.push(e.key);
	}
}
fs.writeFileSync(REPORT, JSON.stringify(report, null, "\t") + "\n");
console.log(`inflation: filled=${filled} unmapped=${skipped}`);
if (skippedKeys.length) {
	console.log("Unmapped keys:");
	for (const k of skippedKeys.slice(0, 20)) console.log("  ", k);
	if (skippedKeys.length > 20) console.log("  ...", skippedKeys.length - 20, "more");
}
