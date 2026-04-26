#!/usr/bin/env node
/*
 * Helper 01 — Translate the 368 `inflation` namespace entries to Simplified Chinese.
 *
 * These break down into:
 *   - 356 'missing' entries — currency-templated (13 currencies × ~27 templates).
 *   - 5 'manifest-changed' — small English copy tweaks.
 *   - 7 'manifest-added' — new source labels.
 *
 * The repo's existing `inflation_zh.json` uses 您 (formal "you") and 比特币
 * for "Bitcoin", so we match that. Numerals are Western Arabic (0-9). Use
 * 万亿/亿/万 magnitude separators where natural.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"zh.json",
);

const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

// Per-currency Chinese names (matched to existing inflation_zh.json keys).
// For each currency code, we have:
//   - longName: full name used in flowing copy ("Australian Dollar" → "澳元")
//   - shortName: same currency in repeat references ("dollars" → "澳元")
//   - countryAdj: the adjective-form for "<country> government debt" / "in existence"
//   - existence: noun for "<X> in existence" headings
//   - debtCountryName: "the United States" / "Japan" / etc. used for debt titles
//   - currencyExistence: e.g. "AUSTRALIAN DOLLARS IN EXISTENCE" → "在流通的澳元"
//   - debtTitle: e.g. "AUSTRALIAN GOVERNMENT DEBT" → "澳大利亚政府债务"
const CURRENCIES = {
	aud: {
		long: "澳元",
		short: "澳元",
		debtTitle: "澳大利亚政府债务",
		existenceTitle: "在流通的澳元",
		intro: "如果您用澳元储蓄，您可能已经注意到，每年澳元能买到的东西越来越少。同样数量的食物，需要更多澳元才能买到。要维持原有的生活水平，您需要更多的澳元。",
	},
	brl: {
		long: "巴西雷亚尔",
		short: "雷亚尔",
		debtTitle: "巴西政府债务",
		existenceTitle: "在流通的雷亚尔",
		intro: "如果您用巴西雷亚尔储蓄，您可能已经注意到，每年雷亚尔能买到的东西越来越少。同样数量的食物，需要更多雷亚尔才能买到。要维持原有的生活水平，您需要更多的雷亚尔。",
	},
	cad: {
		long: "加元",
		short: "加元",
		debtTitle: "加拿大政府债务",
		existenceTitle: "在流通的加元",
		intro: "如果您用加元储蓄，您可能已经注意到，每年加元能买到的东西越来越少。同样数量的食物，需要更多加元才能买到。要维持原有的生活水平，您需要更多的加元。",
	},
	eur: {
		long: "欧元",
		short: "欧元",
		debtTitle: "欧元区政府债务",
		existenceTitle: "在流通的欧元",
		intro: "如果您用欧元储蓄，您可能已经注意到，每年欧元能买到的东西越来越少。同样数量的食物，需要更多欧元才能买到。要维持原有的生活水平，您需要更多的欧元。",
	},
	gbp: {
		long: "英镑",
		short: "英镑",
		debtTitle: "英国政府债务",
		existenceTitle: "在流通的英镑",
		intro: "如果您用英镑储蓄，您可能已经注意到，每年英镑能买到的东西越来越少。同样数量的食物，需要更多英镑才能买到。要维持原有的生活水平，您需要更多的英镑。",
	},
	ils: {
		long: "以色列谢克尔",
		short: "谢克尔",
		debtTitle: "以色列政府债务",
		existenceTitle: "在流通的谢克尔",
		intro: "如果您用以色列谢克尔储蓄，您可能已经注意到，每年谢克尔能买到的东西越来越少。同样数量的食物，需要更多谢克尔才能买到。要维持原有的生活水平，您需要更多的谢克尔。",
	},
	inr: {
		long: "印度卢比",
		short: "卢比",
		debtTitle: "印度政府债务",
		existenceTitle: "在流通的卢比",
		intro: "如果您用印度卢比储蓄，您可能已经注意到，每年卢比能买到的东西越来越少。同样数量的食物，需要更多卢比才能买到。要维持原有的生活水平，您需要更多的卢比。",
	},
	jpy: {
		long: "日元",
		short: "日元",
		debtTitle: "日本政府债务",
		existenceTitle: "在流通的日元",
		intro: "如果您用日元储蓄，您可能已经注意到，每年日元能买到的东西越来越少。同样数量的食物，需要更多日元才能买到。要维持原有的生活水平，您需要更多的日元。",
	},
	mxn: {
		long: "墨西哥比索",
		short: "比索",
		debtTitle: "墨西哥政府债务",
		existenceTitle: "在流通的比索",
		intro: "如果您用墨西哥比索储蓄，您可能已经注意到，每年比索能买到的东西越来越少。同样数量的食物，需要更多比索才能买到。要维持原有的生活水平，您需要更多的比索。",
	},
	nzd: {
		long: "新西兰元",
		short: "新西兰元",
		debtTitle: "新西兰政府债务",
		existenceTitle: "在流通的新西兰元",
		intro: "如果您用新西兰元储蓄，您可能已经注意到，每年新西兰元能买到的东西越来越少。同样数量的食物，需要更多新西兰元才能买到。要维持原有的生活水平，您需要更多的新西兰元。",
	},
	php: {
		long: "菲律宾比索",
		short: "比索",
		debtTitle: "菲律宾政府债务",
		existenceTitle: "在流通的比索",
		intro: "如果您用菲律宾比索储蓄，您可能已经注意到，每年比索能买到的东西越来越少。同样数量的食物，需要更多比索才能买到。要维持原有的生活水平，您需要更多的比索。",
	},
	thb: {
		long: "泰铢",
		short: "泰铢",
		debtTitle: "泰国政府债务",
		existenceTitle: "在流通的泰铢",
		intro: "如果您用泰铢储蓄，您可能已经注意到，每年泰铢能买到的东西越来越少。同样数量的食物，需要更多泰铢才能买到。要维持原有的生活水平，您需要更多的泰铢。",
	},
	usd: {
		long: "美元",
		short: "美元",
		debtTitle: "美国联邦债务总额",
		existenceTitle: "在流通的美元",
		intro: "如果您用美元储蓄，您可能已经注意到，每年美元能买到的东西越来越少。同样数量的食物，需要更多美元才能买到。要维持原有的生活水平，您需要更多的美元。",
	},
};

// Templates that are identical across currencies (e.g. "Bitcoin doesn't have inflation").
function templateBtcH2() {
	return "比特币没有通胀";
}
function templateBtcP1() {
	return "通胀意味着随着时间的推移，您的钱能买到的东西越来越少。比特币是更好的货币，因为它没有通胀。";
}
function templateBtcP2Before(c) {
	return `${c.long}的供应量没有上限，这意味着任何时候都可以印更多的${c.short}。`;
}
function templateBtcP2After() {
	return "因为它的最大供应量是 2,100 万枚比特币。没有人可以印更多的比特币。";
}
function templateBtcP2Link() {
	return "比特币是稀缺的";
}
function templateBtcP3(c) {
	return `从历史上看，比特币随着时间的推移获得了购买力，而${c.short}却失去了购买力。许多人把比特币当作长期储蓄账户：把钱放进去，让它增长好几年。`;
}
function templateBtcP4(c) {
	return `您愿意用购买力越来越低的${c.short}来储蓄？还是用历史上购买力越来越高的比特币来储蓄？`;
}
function templateFreedomH2() {
	return "比特币也是一种争取自由的工具";
}
function templateFreedomP1() {
	return "比特币网络不属于任何人。它不受任何政府或公司控制。它的设计就是为了维护您的自由，保护您的钱。";
}
function templateFreedomP2() {
	return "世界各地的人们已经在使用比特币来保护他们的自由——即使在他们的政府拒绝帮助甚至试图阻止他们的时候。";
}
function templateIntro1(c) {
	return c.intro;
}
function templateIntro2() {
	return "但情况不必如此。";
}
function templateIntroHighlight() {
	return "过去 4 年里用比特币储蓄的人，看到生活变得更便宜了。";
}
function templateProofH2() {
	return "证据如下：您的钱正在贬值";
}
function templateProofP1(c) {
	return `您银行账户里的${c.short}每年能买到的东西都在减少。这是因为可以创造出来的${c.short}没有固定上限。`;
}
function templateProofP2(c) {
	return `这种无限的供应是通胀的根本原因。最近这些年，存在的${c.short}总量已经大幅增加。`;
}
function templateProofP3() {
	return "当更多的钱凭空被创造出来时，所有东西的价格都会上涨。这包括公司用来生产产品的原材料——意味着您要付更高的价格。";
}
function templateProofP4() {
	return "而当政府继续增加债务时，会印出更多的钱，因为愿意借钱给政府的人变少了。";
}
function templateProofP5Before() {
	return "如果您借不到贷款，就没法花钱。但如果政府";
}
function templateProofP5Link() {
	return "借不到贷款";
}
function templateProofP5After() {
	return "，他们就直接印钱。";
}
function templateProofP6() {
	return "更多的政府债务意味着更多的印钞。更多的印钞意味着更多的通胀。而且看不到停止的迹象。";
}
function templateLabel(c) {
	// All-caps in English (e.g. "AUSTRALIAN DOLLAR"). Chinese has no case so just use long name.
	return c.long.toUpperCase ? c.long : c.long;
}
function templateExistenceTitle(c) {
	return c.existenceTitle;
}
function templateDebtTitle(c) {
	return c.debtTitle;
}
function templateComparisonToday() {
	return "今天";
}
function templateCurrencyCounting() {
	return "还在持续增长……";
}
function templateCurrencyDetail4yrLost() {
	return "过去 4 年损失的购买力";
}
function templateCurrencySourceCpi() {
	return "来源：FRED CPI →";
}
function templateCurrencySourceDebt() {
	return "来源：FRED 政府债务 →";
}
function templateCurrencySourceM1() {
	return "来源：FRED 狭义货币供应量 →";
}
function templateCurrencySourceM1Short() {
	return "来源：FRED →";
}

// Single-instance suffixes (only one entry):
const STAT_SINGLES = {
	bitcoin_label: "比特币",
	bitcoin_value: "2,100 万",
	bitcoin_numeric: "(21,000,000)",
	bitcoin_detail: "永久固定",
	bitcoin_source: "来源：比特币白皮书 →",
	detail_4yr: "过去 4 年获得的购买力",
	source_bpr: "来源：Bitcoin Price Report →",
};

// All currency-suffixed dispatchers
const SUFFIX_HANDLERS = {
	btc_h2: templateBtcH2,
	btc_p1: templateBtcP1,
	btc_p2_before: templateBtcP2Before,
	btc_p2_after: templateBtcP2After,
	btc_p2_link: templateBtcP2Link,
	btc_p3: templateBtcP3,
	btc_p4: templateBtcP4,
	freedom_h2: templateFreedomH2,
	freedom_p1: templateFreedomP1,
	freedom_p2: templateFreedomP2,
	intro_1: templateIntro1,
	intro_2: templateIntro2,
	intro_highlight: templateIntroHighlight,
	proof_h2: templateProofH2,
	proof_p1: templateProofP1,
	proof_p2: templateProofP2,
	proof_p3: templateProofP3,
	proof_p4: templateProofP4,
	proof_p5_before: templateProofP5Before,
	proof_p5_link: templateProofP5Link,
	proof_p5_after: templateProofP5After,
	proof_p6: templateProofP6,
	label: templateLabel,
	existence_title: templateExistenceTitle,
	debt_title: templateDebtTitle,
	comparison_today: templateComparisonToday,
	currency_counting: templateCurrencyCounting,
	currency_detail_4yr_lost: templateCurrencyDetail4yrLost,
	currency_source_cpi: templateCurrencySourceCpi,
	currency_source_debt: templateCurrencySourceDebt,
	currency_source_m1: templateCurrencySourceM1,
	currency_source_m1_short: templateCurrencySourceM1Short,
};

// Manifest-changed / manifest-added overrides for inflation namespace,
// plus singletons that don't fit the per-currency template machinery.
const STATIC_INFLATION = {
	// manifest-changed
	inflation_choose: "选择您的货币以查看证据",
	inflation_choose_another: "← 选择其他货币",
	inflation_h1_orange: "比特币没有通胀，但您的钱有。",
	inflation_sticker_learn: "了解比特币如何帮助您。",
	inflation_sticker_lets_find_out: "来了解一下。",
	// manifest-added — sources_*
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report —— 4 年表现走势图（涵盖所有货币）",
	sources_bitcoin_source_code:
		"Bitcoin Source Code —— 2,100 万枚的供应上限",
	sources_canadian_trucker:
		"加拿大卡车司机抗议 —— 比特币用于绕过被冻结的银行账户（YouTube）",
	sources_mempool_space: "Mempool.space —— 比特币供应量与挖矿数据",
	sources_nigeria_endsars:
		"Quartz Africa —— 比特币如何为尼日利亚 EndSARS 抗议提供资金",
	sources_pennsylvania_mining:
		"宾夕法尼亚州的比特币挖矿正在回收废弃甲烷（YouTube）",
	sources_texas_mining: "得克萨斯州的比特币挖矿与电网（YouTube）",
	// missing — freedom feature cards
	inflation_freedom_decentralized_title: "去中心化",
	inflation_freedom_decentralized_desc:
		"没有任何单一实体——没有政府，也没有公司——控制着比特币。",
	inflation_freedom_permissionless_title: "无需许可",
	inflation_freedom_permissionless_desc:
		"任何人，在任何地方，都可以加入这个网络。没有人可以阻止您。",
	inflation_freedom_scarce_title: "稀缺",
	inflation_freedom_scarce_desc:
		"比特币永远只有 2,100 万枚。没有人可以印更多。",
	inflation_freedom_sovereign_title: "主权",
	inflation_freedom_sovereign_desc:
		"一个全新的体系，独立于政客和他们破碎的承诺。",
	inflation_freedom_learn_more: "了解更多 →",
	// missing — stat singletons (under inflation_stat_*)
	inflation_stat_btc_detail_4yr: "过去 4 年获得的购买力",
	inflation_stat_btc_source_bpr: "来源：Bitcoin Price Report →",
	inflation_stat_comparison_today: "今天",
	inflation_stat_currency_counting: "还在持续增长……",
	inflation_stat_currency_detail_4yr_lost: "过去 4 年损失的购买力",
	inflation_stat_currency_source_cpi: "来源：FRED CPI →",
	inflation_stat_currency_source_debt: "来源：FRED 政府债务 →",
	inflation_stat_currency_source_m1: "来源：FRED 狭义货币供应量 →",
	inflation_stat_currency_source_m1_short: "来源：FRED →",
	// missing — story cards
	inflation_story_canada_title: "加拿大",
	inflation_story_canada_desc:
		"在银行账户被冻结后，工人们用比特币来获取资金。",
	inflation_story_nigeria_title: "尼日利亚",
	inflation_story_nigeria_desc:
		"在银行切断他们之后，抗议者用比特币为他们的运动筹资。",
	inflation_story_pennsylvania_title: "宾夕法尼亚州",
	inflation_story_pennsylvania_desc:
		"比特币挖矿清理了政府拒绝处理的煤炭废料。",
	inflation_story_texas_title: "得克萨斯州",
	inflation_story_texas_desc: "在一场严重风暴中，比特币挖矿帮助保住了电力供应。",
};

let resolved = 0;
let unresolved = 0;
const unresolvedKeys = [];

for (const entry of report.entries) {
	if (entry.namespace !== "inflation") continue;
	if (entry.targetTranslation !== null && entry.targetTranslation !== undefined)
		continue;

	if (Object.prototype.hasOwnProperty.call(STATIC_INFLATION, entry.key)) {
		entry.targetTranslation = STATIC_INFLATION[entry.key];
		resolved++;
		continue;
	}

	// inflation_stat_<single-suffix>
	const statMatch = entry.key.match(/^inflation_stat_(.+)$/);
	if (statMatch) {
		const suffix = statMatch[1];
		// First check if it's a currency-prefixed stat suffix.
		const codeMatch = suffix.match(/^([a-z]{3})_(.+)$/);
		if (codeMatch && CURRENCIES[codeMatch[1]]) {
			const c = CURRENCIES[codeMatch[1]];
			const handler = SUFFIX_HANDLERS[codeMatch[2]];
			if (handler) {
				entry.targetTranslation = handler(c);
				resolved++;
				continue;
			}
		}
		// Plain single-suffix stat (bitcoin_label, detail_4yr, etc.).
		if (Object.prototype.hasOwnProperty.call(STAT_SINGLES, suffix)) {
			entry.targetTranslation = STAT_SINGLES[suffix];
			resolved++;
			continue;
		}
	}

	// inflation_<currency>_<suffix>
	const currMatch = entry.key.match(/^inflation_([a-z]{3})_(.+)$/);
	if (currMatch && CURRENCIES[currMatch[1]]) {
		const c = CURRENCIES[currMatch[1]];
		const handler = SUFFIX_HANDLERS[currMatch[2]];
		if (handler) {
			entry.targetTranslation = handler(c);
			resolved++;
			continue;
		}
	}

	unresolved++;
	unresolvedKeys.push(entry.key);
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`[01-inflation] resolved=${resolved} unresolved=${unresolved}`);
if (unresolvedKeys.length) {
	console.log("unresolved keys (first 20):", unresolvedKeys.slice(0, 20));
}
