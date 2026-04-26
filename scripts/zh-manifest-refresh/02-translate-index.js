#!/usr/bin/env node
/*
 * Helper 02 — Translate the 62 missing entries in the `index` namespace.
 * These are V2 homepage card labels + nav + a few singletons.
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

const TRANSLATIONS = {
	home_btn_saving: "储蓄",
	home_h1: "比特币是更好的货币，正在构建一个更美好的世界。",
	home_nav_about: "关于",
	home_nav_get_involved: "参与",
	home_nav_learn: "学习",
	home_source_prefix: "来源：",

	// Card labels — short eyebrow text above each home card.
	home_card_label_inflation: "比特币是更好的货币",
	home_card_label_bank_runs: "全额准备金体系",
	home_card_label_gold: "哪个更好？",
	home_card_label_crypto: "区别是什么？",
	home_card_label_cash: "我们来比较一下",
	home_card_label_bonds: "我们来比较一下",
	home_card_label_cbdc: "开放还是封闭？",
	home_card_label_salary: "保护您的工资",

	home_card_label_freedom_1: "极权政府",
	home_card_label_freedom_2: "独特的工具",

	home_card_label_human_rights_1: "捍卫人权",
	home_card_label_human_rights_2: "草根采用",
	home_card_label_human_rights_3: "全球影响",

	home_card_label_equality_1: "希望与机遇",
	home_card_label_equality_2: "改变格局",

	home_card_label_property_rights_1: "我们来比较一下",
	home_card_label_property_rights_2: "真正的所有权",

	home_card_label_housing_1: "可负担住房",

	home_card_label_business_1: "区别是什么？",
	home_card_label_business_2: "接受比特币支付",

	home_card_label_crowdfunding_1: "EndSARS 抗议",
	home_card_label_crowdfunding_2: "无法被阻止的资金",
	home_card_label_crowdfunding_3: "为您的项目筹资",

	home_card_label_energy_1: "电网稳定",
	home_card_label_energy_4: "需求响应",
	home_card_label_energy_5: "农村电气化",
	home_card_label_energy_6: "可再生能源激励",

	home_card_label_environment_1: "减少甲烷排放",
	home_card_label_environment_2: "拯救了一座国家公园",
	home_card_label_environment_3: "最绿色的产业",
	home_card_label_environment_4: "减少燃烧排空的天然气",

	home_card_label_food_1: "食品价格",
	home_card_label_food_2: "农场与土壤",

	home_card_label_art_1: "我们来比较一下",
	home_card_label_art_2: "传播信息",
	home_card_label_art_3: "街头艺术",

	home_card_label_politics_1: "政治悖论",
	home_card_label_politics_2: "采取行动",

	home_card_label_war_1: "终结无尽的战争",
	home_card_label_war_2: "帮助退伍军人",
	home_card_label_war_3: "战时逃生通道",

	home_card_label_coding_1: "互动教程",
	home_card_label_coding_2: "构建硬件",
	home_card_label_coding_3: "编程谜题",

	home_card_label_networks_1: "实时网络视图",
	home_card_label_networks_2: "我们来比较一下",

	home_card_label_payments_1: "区别是什么？",
	home_card_label_payments_2: "快速便宜的支付",
	home_card_label_payments_3: "跨境汇款",
	home_card_label_payments_4: "接收付款",

	home_card_label_self_custody_1: "比特币钱包指南",
	home_card_label_self_custody_2: "最重要的一步",
	home_card_label_self_custody_3: "主权货币",

	home_card_label_get_started_1: "新手基础",
	home_card_label_get_started_2: "您的第一个钱包",
	home_card_label_get_started_3: "购买比特币",
};

let resolved = 0;
let unresolved = 0;
const unresolvedKeys = [];

for (const entry of report.entries) {
	if (entry.namespace !== "index") continue;
	if (entry.targetTranslation) continue;
	if (Object.prototype.hasOwnProperty.call(TRANSLATIONS, entry.key)) {
		entry.targetTranslation = TRANSLATIONS[entry.key];
		resolved++;
	} else {
		unresolved++;
		unresolvedKeys.push(entry.key);
	}
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`[02-index] resolved=${resolved} unresolved=${unresolved}`);
if (unresolvedKeys.length) console.log("unresolved:", unresolvedKeys);
