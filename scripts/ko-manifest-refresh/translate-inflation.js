#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — inflation namespace translator.
 *
 * Korean conventions:
 * - "Bitcoin" rendered as 비트코인 in body copy.
 * - Currency names: 미국 달러, 유로, 호주 달러, 브라질 헤알, 캐나다 달러,
 *   영국 파운드, 이스라엘 셰켈, 인도 루피, 일본 엔, 멕시코 페소,
 *   뉴질랜드 달러, 필리핀 페소, 태국 바트.
 * - Numerals: 2,100만 (matches the Korean 만-based number system).
 * - Polite formal register (-습니다/-입니다), educational tone.
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
	"ko.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		noun: "미국 달러",
		label: "미국 달러",
		country: "미국",
		existenceTitle: "유통 중인 미국 달러",
		debtTitle: "미국 정부의 총 부채",
	},
	eur: {
		noun: "유로",
		label: "유로",
		country: "유로존",
		existenceTitle: "유통 중인 유로",
		debtTitle: "유로존 정부의 총 부채",
	},
	aud: {
		noun: "호주 달러",
		label: "호주 달러",
		country: "호주",
		existenceTitle: "유통 중인 호주 달러",
		debtTitle: "호주 정부의 총 부채",
	},
	brl: {
		noun: "브라질 헤알",
		label: "브라질 헤알",
		country: "브라질",
		existenceTitle: "유통 중인 브라질 헤알",
		debtTitle: "브라질 정부의 총 부채",
	},
	cad: {
		noun: "캐나다 달러",
		label: "캐나다 달러",
		country: "캐나다",
		existenceTitle: "유통 중인 캐나다 달러",
		debtTitle: "캐나다 정부의 총 부채",
	},
	gbp: {
		noun: "영국 파운드",
		label: "영국 파운드",
		country: "영국",
		existenceTitle: "유통 중인 영국 파운드",
		debtTitle: "영국 정부의 총 부채",
	},
	ils: {
		noun: "이스라엘 셰켈",
		label: "이스라엘 셰켈",
		country: "이스라엘",
		existenceTitle: "유통 중인 이스라엘 셰켈",
		debtTitle: "이스라엘 정부의 총 부채",
	},
	inr: {
		noun: "인도 루피",
		label: "인도 루피",
		country: "인도",
		existenceTitle: "유통 중인 인도 루피",
		debtTitle: "인도 정부의 총 부채",
	},
	jpy: {
		noun: "일본 엔",
		label: "일본 엔",
		country: "일본",
		existenceTitle: "유통 중인 일본 엔",
		debtTitle: "일본 정부의 총 부채",
	},
	mxn: {
		noun: "멕시코 페소",
		label: "멕시코 페소",
		country: "멕시코",
		existenceTitle: "유통 중인 멕시코 페소",
		debtTitle: "멕시코 정부의 총 부채",
	},
	nzd: {
		noun: "뉴질랜드 달러",
		label: "뉴질랜드 달러",
		country: "뉴질랜드",
		existenceTitle: "유통 중인 뉴질랜드 달러",
		debtTitle: "뉴질랜드 정부의 총 부채",
	},
	php: {
		noun: "필리핀 페소",
		label: "필리핀 페소",
		country: "필리핀",
		existenceTitle: "유통 중인 필리핀 페소",
		debtTitle: "필리핀 정부의 총 부채",
	},
	thb: {
		noun: "태국 바트",
		label: "태국 바트",
		country: "태국",
		existenceTitle: "유통 중인 태국 바트",
		debtTitle: "태국 정부의 총 부채",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `${c.noun}로 저축하고 계신다면, 돈으로 살 수 있는 것이 점점 줄어들고 있다는 것을 느끼셨을 것입니다. 같은 물건을 사기 위해 더 많은 ${c.noun}가 필요합니다. 같은 생활 수준을 유지하기 위해서도 더 많은 ${c.noun}가 필요합니다.`;
		case "intro_2":
			return `하지만 꼭 그래야만 하는 것은 아닙니다.`;
		case "intro_highlight":
			return `지난 4년 동안 비트코인으로 저축한 사람들에게는 오히려 생활이 더 저렴해졌습니다.`;
		case "proof_h2":
			return `증거: 당신의 돈은 가치를 잃고 있습니다`;
		case "proof_p1":
			return `은행 계좌에 있는 ${c.noun}는 매년 가치를 잃습니다. ${c.noun}를 얼마나 만들 수 있는지에 대한 한도가 없기 때문입니다.`;
		case "proof_p2":
			return `이 무제한 공급이 인플레이션의 주된 원인입니다. 지난 몇 년 동안 유통 중인 ${c.noun}의 양은 극적으로 증가했습니다.`;
		case "proof_p3":
			return `돈이 무에서 만들어질 때 모든 것의 가격이 오릅니다. 기업이 제품을 만들기 위해 구매하는 원자재 가격도 포함되며, 이는 결국 당신에게 더 높은 가격으로 돌아옵니다.`;
		case "proof_p4":
			return `정부의 부채가 증가할수록 정부에 돈을 빌려주려는 사람이 줄어들기 때문에 정부는 더 많은 돈을 찍어내게 됩니다.`;
		case "proof_p5_before":
			return `빌릴 수 없으면 쓸 수 없습니다. 그러나 정부가 `;
		case "proof_p5_link":
			return `빌릴 수 없을 때`;
		case "proof_p5_after":
			return `, 정부는 그저 돈을 찍어냅니다.`;
		case "proof_p6":
			return `정부의 부채가 늘어날수록 더 많은 돈을 찍어냅니다. 더 많은 돈을 찍어낼수록 인플레이션은 더 심해집니다. 그리고 그 끝은 보이지 않습니다.`;
		case "btc_h2":
			return `비트코인에는 인플레이션이 없습니다`;
		case "btc_p1":
			return `인플레이션이란 시간이 지남에 따라 돈으로 살 수 있는 것이 점점 줄어드는 것을 말합니다. 비트코인은 인플레이션이 없기 때문에 더 나은 화폐입니다.`;
		case "btc_p2_before":
			return `${c.label}는 공급에 한도가 없어 언제든 더 찍어낼 수 있습니다. `;
		case "btc_p2_link":
			return `비트코인은 희소합니다`;
		case "btc_p2_after":
			return `. 최대 공급량이 2,100만 비트코인이기 때문입니다. 누구도 더 이상 비트코인을 만들 수 없습니다.`;
		case "btc_p3":
			return `역사적으로 비트코인은 시간이 지남에 따라 구매력이 증가해 왔지만, ${c.label}는 구매력을 잃어 왔습니다. 많은 사람들이 비트코인을 장기 저축 계좌처럼 사용하며, 가치가 자라는 동안 수년간 손대지 않습니다.`;
		case "btc_p4":
			return `당신은 어느 쪽을 선택하시겠습니까? ${c.noun}로 저축하여 시간이 지날수록 살 수 있는 것이 줄어드는 ${c.noun}를 보유하시겠습니까? 아니면 역사적으로 시간이 지날수록 살 수 있는 것이 늘어나는 비트코인으로 저축하시겠습니까?`;
		case "freedom_h2":
			return `비트코인은 자유를 위한 도구이기도 합니다`;
		case "freedom_p1":
			return `비트코인 네트워크는 누구의 소유도 아닙니다. 어떤 정부도, 어떤 기업도 통제하지 않습니다. 당신의 자유와 돈을 보호하기 위해 설계되었습니다.`;
		case "freedom_p2":
			return `오늘날 전 세계 사람들은 자국 정부가 도와주지 않거나 심지어 막으려 할 때조차 비트코인을 사용해 자유를 지키고 있습니다.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "지난 4년간 잃은 구매력";
		case "stat_source_bpr":
			return "출처: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "더 알아보기 →",
	inflation_freedom_scarce_title: "희소성",
	inflation_freedom_scarce_desc:
		"비트코인은 2,100만 개를 초과해 존재할 수 없습니다. 누구도 더 만들 수 없습니다.",
	inflation_freedom_decentralized_title: "탈중앙화",
	inflation_freedom_decentralized_desc:
		"비트코인을 통제하는 기관은 없습니다 — 정부도, 기업도.",
	inflation_freedom_permissionless_title: "무허가성",
	inflation_freedom_permissionless_desc:
		"누구나, 어디서든 네트워크에 참여할 수 있습니다. 누구도 당신을 막을 수 없습니다.",
	inflation_freedom_sovereign_title: "주권",
	inflation_freedom_sovereign_desc:
		"정치인과 그들의 깨진 약속으로부터 독립된 새로운 시스템.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "비트코인",
	inflation_stat_bitcoin_value: "2,100만",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "영원히 고정",
	inflation_stat_bitcoin_source: "출처: 비트코인 백서 →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "현재",
	inflation_stat_currency_counting: "그리고 계속 증가하는 중…",
	inflation_stat_currency_detail_4yr_lost:
		"지난 4년간 잃은 구매력",
	inflation_stat_currency_source_cpi: "출처: FRED 소비자물가지수 →",
	inflation_stat_currency_source_debt:
		"출처: FRED 정부 부채 →",
	inflation_stat_currency_source_m1:
		"출처: FRED 협의통화 공급량 →",
	inflation_stat_currency_source_m1_short: "출처: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr:
		"지난 4년간 얻은 구매력",
	inflation_stat_btc_source_bpr: "출처: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "캐나다",
	inflation_story_canada_desc:
		"노동자들은 은행 계좌가 동결된 후 비트코인을 사용해 자신의 돈에 접근했습니다.",
	inflation_story_nigeria_title: "나이지리아",
	inflation_story_nigeria_desc:
		"시위대는 은행에서 차단된 후 비트코인을 사용해 운동 자금을 모았습니다.",
	inflation_story_pennsylvania_title: "펜실베이니아",
	inflation_story_pennsylvania_desc:
		"비트코인 채굴이 정부가 처리를 거부한 석탄 폐기물을 정화하고 있습니다.",
	inflation_story_texas_title: "텍사스",
	inflation_story_texas_desc:
		"비트코인 채굴이 대형 폭풍 속에서도 전력 공급을 유지하는 데 도움이 되었습니다.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 모든 통화에 대한 4년 성과 차트",
	sources_bitcoin_source_code:
		"비트코인 소스 코드 — 2,100만 공급량 한도",
	sources_canadian_trucker:
		"캐나다 트럭 운전사 시위 — 동결된 은행 계좌를 우회하는 데 사용된 비트코인 (YouTube)",
	sources_mempool_space:
		"Mempool.space — 비트코인 공급 및 채굴 데이터",
	sources_nigeria_endsars:
		"Quartz Africa — 비트코인이 나이지리아의 EndSARS 시위를 어떻게 지원했는지",
	sources_pennsylvania_mining:
		"펜실베이니아 비트코인 채굴이 메탄 폐기물을 재활용 (YouTube)",
	sources_texas_mining:
		"텍사스 비트코인 채굴과 전력망 (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"비트코인에는 인플레이션이 없지만, 당신의 돈에는 있습니다.",
	inflation_choose: "통화를 선택해 증거를 확인하세요",
	inflation_choose_another: "← 다른 통화 선택",
	inflation_sticker_learn:
		"비트코인이 어떻게 도울 수 있는지 알아보세요.",
	inflation_sticker_lets_find_out: "알아봅시다.",
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
		`translate-inflation (ko): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
