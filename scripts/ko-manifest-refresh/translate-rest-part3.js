#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — non-inflation namespaces, part 3.
 * Covers: business/* (accounting, wallets, why, faq, index, maps,
 * maps-success, sticker-success, sticker-language-success, stickers,
 * sticker-files/english/index) + the lone bitcoin-vs-bonds entry.
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

const T = {};

/* ─────────────── bitcoin-vs-bonds (single leftover) ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::point_2_summary_1": "",
});

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source":
		"Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source":
		"bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result":
		"\u2212$10",
	"business/accounting::accounting_description":
		"비트코인을 장부에 받아들이기 위한 알기 쉬운 가이드 — 하이브리드 지갑, 취득 원가, 양도소득, 그리고 회계사를 부를 시점.",
	"business/accounting::accounting_s1_c1":
		"비트코인을 받는 가장 간단한 방법은, 결제가 들어오는 그 순간에 받은 비트코인의 100%를 자동으로 달러(또는 현지 통화)로 매도하는 하이브리드 지갑을 사용하는 것입니다.",
	"business/accounting::accounting_s1_c2":
		"이 설정에서는 장부가 오늘과 정확히 똑같이 보입니다 — 최종 숫자는 매번 달러입니다. 취득 원가 추적도, 양도소득 계산도, 새로운 스프레드시트도 필요 없습니다.",
	"business/accounting::accounting_s2":
		"비트코인을 일부 보유하는 경우: 취득 원가 추적하기",
	"business/accounting::accounting_s2_c1":
		"일부 비즈니스는 받은 비트코인을 모두 자동 변환하지 않고 일부를 보유하기로 선택합니다. 그렇게 한다면, 추가로 필요한 주된 단계는 취득 원가 추적입니다 — 받은 날 비트코인 결제의 달러 가치입니다.",
	"business/accounting::accounting_s2_c2":
		"비즈니스를 완전히 비트코인 단위로 생각하더라도, 대부분의 세무 당국은 여전히 달러 가치 보고를 요구합니다. 좋은 소식: 거래마다 단 두 개의 숫자만 필요합니다 — 받은 비트코인 양과 그날의 달러 가치.",
	"business/accounting::accounting_s2_c3":
		"아래 도구를 사용해 가격 조회를 자동화하면 매일 가격을 확인할 필요가 없습니다.",
	"business/accounting::accounting_s3":
		"보유한 비트코인을 사용하거나 매도하기",
	"business/accounting::accounting_s3_c1":
		"모든 결제를 자동으로 달러로 변환하고 있다면 이 섹션은 건너뛰세요 — 적용되지 않습니다.",
	"business/accounting::accounting_s3_c2":
		"비트코인을 일부 보유하다가 나중에 사용하거나 매도하기로 결정했다면, 매도 가격을 같은 취득 원가 스프레드시트에 추가하세요. 받았을 때 비트코인의 가치와 사용/매도했을 때의 가치 차이가 양도소득 또는 양도손실입니다.",
	"business/accounting::accounting_s3_c3": "간단한 두 가지 예:",
	"business/accounting::accounting_s4":
		"비트코인을 잘 아는 전문가가 필요하신가요?",
	"business/accounting::accounting_s4_c1":
		"이를 맡기고 싶거나, 또는 비트코인 회계가 하이브리드 지갑이 처리할 수 있는 것보다 더 복잡한 경우 — 비즈니스 비트코인 회계를 전문으로 하는 Satoshi Pacioli Accounting Services를 강력히 추천합니다.",
	"business/accounting::bitcoin_business_accounting_guide":
		"비즈니스를 위한 비트코인 회계",
	"business/accounting::accounting_card_bpr_label":
		"비트코인 가격",
	"business/accounting::accounting_card_bpr_title":
		"비트코인의 현재 또는 과거 달러 가격 조회",
	"business/accounting::accounting_card_pacioli_label":
		"비트코인 회계사",
	"business/accounting::accounting_card_spreadsheet_label":
		"EXCEL 가져오기",
	"business/accounting::accounting_card_spreadsheet_title":
		"비트코인 가격을 Excel에 자동으로 가져오기",
	"business/accounting::accounting_card_wallets_label":
		"하이브리드 지갑",
	"business/accounting::accounting_card_wallets_title":
		"추천 비즈니스 지갑 보기",
	"business/accounting::accounting_disclaimer":
		"이 가이드는 정보 제공만을 목적으로 하며 세무 자문으로 간주되지 않습니다. 귀하의 상황에 특화된 세무 자문은 자격 있는 회계사와 상담하세요.",
	"business/accounting::accounting_disclaimer_label":
		"참고하세요",
	"business/accounting::accounting_example_feb_1": "2월 1일",
	"business/accounting::accounting_example_gain_badge":
		"양도소득",
	"business/accounting::accounting_example_gain_explain":
		"$10의 양도소득을 기록합니다.",
	"business/accounting::accounting_example_jan_1": "1월 1일",
	"business/accounting::accounting_example_loss_badge":
		"양도손실",
	"business/accounting::accounting_example_loss_explain":
		"$10의 양도손실을 기록합니다.",
	"business/accounting::accounting_example_received_label":
		"받음",
	"business/accounting::accounting_example_sold_label":
		"매도 또는 사용",
	"business/accounting::accounting_hero_subtitle":
		"비즈니스에서 비트코인을 받는다고 해서 회계가 복잡해질 필요는 없습니다. 짧은 버전과, 고통 없이 처리하기 위한 도구와 전문가를 소개합니다.",
	"business/accounting::accounting_intro_c1":
		"이미 현금이나 카드를 받고 있다면, 비트코인을 비즈니스 장부에 추가하는 것은 보이는 것보다 더 간단합니다. 두 가지 길이 있습니다: 들어오는 모든 비트코인 결제를 자동으로 달러로 변환하기(새로운 회계 작업 없음), 또는 일부를 비트코인으로 보유하기(추적할 숫자가 약간 더 많아짐).",
	"business/accounting::accounting_intro_c2":
		"이 가이드는 두 가지 모두를 안내합니다 — 비즈니스에 맞는 것을 선택하고 자신 있게 비트코인 받기를 시작할 수 있습니다.",
	"business/accounting::accounting_s1":
		"쉬운 길: 자동으로 달러로 변환",
	"business/accounting::accounting_s3_c6":
		"이상입니다. 기본 계산은 가치가 오르거나 떨어지는 다른 자산의 회계 처리와 정확히 같습니다.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — 비트코인의 현재 및 과거 달러 가격",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — 비즈니스 비트코인 회계",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — 암호화폐 가격을 Excel로 가져오기",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"모든 비트코인 지갑은 상호 운용 가능합니다 — 비즈니스에 맞는 것을 선택하세요. 무료, 즉시 결제, 차지백 없음.",
	"business/wallets::sources_breez_business":
		"Breez — 비트코인 전용 Lightning 지갑",
	"business/wallets::sources_ibex":
		"IBEX — Lightning 결제 인프라",
	"business/wallets::sources_opennode":
		"OpenNode — 비트코인 결제 처리",
	"business/wallets::sources_square":
		"Square — 비트코인 결제 받기",
	"business/wallets::sources_zaprite":
		"Zaprite — 비즈니스용 비트코인 청구서 발행",
	"business/wallets::wallets_hero_subtitle":
		"비트코인 지갑은 무료입니다. 비즈니스에 맞는 것을 선택하고 — 대면, 온라인 또는 청구서 기반 — 몇 분 안에 비트코인 받기를 시작하세요.",
	"business/wallets::wallets_section_invoice":
		"청구서 기반 비즈니스용 지갑",
	"business/wallets::wallets_section_invoice_intro":
		"고객에게 청구서를 발행한다면 (컨설팅, 프리랜서, B2B 서비스), 청구서 발행을 중심으로 만들어진 지갑을 사용하세요. 고객은 몇 번의 클릭으로 비트코인 청구서를 결제할 수 있습니다.",
	"business/wallets::wallets_section_multiple":
		"여러 직원이 있는 비즈니스용 지갑",
	"business/wallets::wallets_section_multiple_intro":
		"카운터에서 결제를 받는 팀이 있다면, 여러 직원 로그인을 지원하는 지갑을 선택하세요 — 그러면 모든 직원이 자기 PIN을 가지고, 누가 어떤 결제를 받았는지에 대한 깔끔한 감사 추적을 유지할 수 있습니다.",
	"business/wallets::wallets_section_online":
		"온라인 비즈니스용 지갑",
	"business/wallets::wallets_section_online_intro":
		"웹사이트에서 판매하시나요? 이 지갑들은 온라인 스토어에 연결되어 전 세계 어디서든 고객으로부터 비트코인을 받을 수 있게 해줍니다 — 차지백 없음, 가맹점 계정 불필요.",
	"business/wallets::wallets_section_sole":
		"개인 운영 비즈니스용 지갑",
	"business/wallets::wallets_section_sole_intro":
		"매장, 카페, 스튜디오, 서비스를 직접 운영한다면 이 지갑들 중 어느 것이나 잘 작동합니다. 결제를 비트코인으로 보유하고 싶은지, 아니면 각 결제의 일부를 자동으로 현지 통화로 변환하고 싶은지에 따라 선택하세요.",
	"business/wallets::wallets_strike_note":
		"Strike Business를 사용하면 수수료 0원, 즉시 결제로 비트코인 및 Lightning 결제를 받을 수 있습니다. 대면, 온라인, 청구서 기반 결제를 지원하며, 현지 통화로의 선택적 자동 변환도 가능합니다.",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"영어 스티커 파일을 다운로드해 직접 “비트코인으로 결제하세요” 스티커를 인쇄하세요.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"직접 영어 “비트코인으로 결제하세요” 스티커를 인쇄해 고객에게 비트코인을 받고 있음을 알리세요.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"영어 “비트코인으로 결제하세요” 스티커 파일 다운로드",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"여기서 비트코인이 사용 가능합니다",
	"business/why::why_good_for_you":
		"비트코인은 당신에게도 좋습니다",
	"business/why::why_learn_more_lowercase": "더 알아보기 →",
	"business/why::why_s1_c1":
		"인플레이션은 더 많은 돈이 인쇄되거나 무에서 만들어질 때 발생합니다. 그로 인해 당신의 주머니에 있는 돈은 시간이 지남에 따라 가치를 잃습니다 — 그리고 그것이 매년 가격이 계속 오르는 이유입니다.",
	"business/why::why_s1_c2":
		"비트코인은 2,100만 코인의 고정 공급량을 가지고 있습니다. 어떤 정부, 은행, 기업도 그것을 더 인쇄할 수 없습니다. 당신의 비트코인 저축은 조용히 가치를 잃는 대신 시간이 지나도 가치를 유지합니다.",
	"business/why::why_s2_c1":
		"최근 몇 년 동안 미국의 여러 은행이 뱅크런으로 무너졌습니다. 너무 많은 고객이 동시에 인출을 시도했을 때, 은행은 모두에게 환불할 충분한 현금을 가지고 있지 않았습니다.",
	"business/why::why_s2_c2":
		"은행은 당신의 돈을 단순히 보관하는 대신 대부분을 빌려주고 투자합니다. 그 투자가 잘못되거나 예금자들이 신뢰를 잃으면 은행은 무너지고, 당신의 예금은 동결되거나 사라질 수 있습니다.",
	"business/why::why_s2_c3":
		"비트코인을 사용하면 자기 돈을 자기 지갑에 직접 보유할 수 있습니다. 은행 없음. 중개자 없음. 뱅크런 없음.",
	"business/why::why_s3_c1":
		"신용카드, PayPal 또는 전통적인 은행 계좌와 달리 비트코인을 사용하는 데 누구의 허가도 필요하지 않습니다.",
	"business/why::why_s3_c2":
		"누구도 당신의 계좌를 동결하거나, 결제를 차단하거나, 네트워크에서 차단할 수 없습니다. 검열이나 압수에 대한 두려움 없이 자유롭게 사용할 수 있는 역사상 최초의 금융 시스템입니다.",
	"business/why::why_s4_c1":
		"비트코인은 종종 오해받지만, 세상에서 조용히 많은 좋은 일을 하고 있습니다.",
	"business/why::why_s4_c2":
		"인권 운동가들이 자유를 위해 싸우는 것을 도왔고, 매립지와 유전에서 발생하는 전 세계 메탄 배출량을 줄였으며, 전력망을 안정화하고, 국립공원 같은 공공재에 자금을 지원했습니다.",
	"business/why::why_biz_s1": "더 낮은 수수료, 비즈니스에 더 많이",
	"business/why::why_biz_s1_c1":
		"비트코인 결제는 모든 매출에서 2~3%를 가져가는 은행과 신용카드 회사를 건너뜁니다. 비즈니스는 당신이 지불하는 금액을 더 많이 보유할 수 있습니다 — 그것은 종종 당신에게 더 나은 가격과 더 나은 서비스를 의미합니다.",
	"business/why::why_biz_s2": "즉시 결제, 차지백 없음",
	"business/why::why_biz_s2_c1":
		"비트코인 결제는 당신의 지갑에서 비즈니스로 직접 몇 초 안에 결제됩니다. 은행이 자금을 풀어줄 때까지 며칠씩 기다리거나 비용이 많이 드는 차지백 분쟁도 없습니다 — 비즈니스는 사기와 싸우는 대신 고객에게 서비스를 제공하는 데 집중할 수 있습니다.",
	"business/why::why_biz_s3":
		"무료로 받을 수 있고 누구에게나 열려 있음",
	"business/why::why_biz_s3_c1":
		"비즈니스가 비트코인을 받기 위한 계약, 월 사용료, 초기 비용은 없습니다. 그리고 전 세계 수백만 명의 비트코인 사용자들이 비트코인을 받는 가맹점을 적극적으로 찾고 있습니다 — 이는 이 비즈니스에 새로운 고객에게 무료 노출을 제공합니다.",
	"business/why::why_business_cta_intro":
		"비즈니스를 운영하고 있고 비트코인 받기를 시작하고 싶으신가요?",
	"business/why::why_business_cta_link":
		"작동 방식 보기 →",
	"business/why::why_for_business":
		"비트코인이 이 비즈니스에 좋은 이유",
	"business/why::why_for_business_intro":
		"비트코인을 받음으로써 비즈니스는 모든 매출을 더 많이 보유하고, 차지백 없이 즉시 결제를 받으며, 전 세계 비트코인 사용자에게 도달할 수 있습니다 — 계약 0건, 월 사용료 0원.",
	"business/why::why_good_for_you_intro":
		"비트코인은 카운터에서만 유용한 것이 아닙니다 — 저축, 프라이버시, 거래의 자유를 보호하는 더 나은 형태의 화폐입니다. 빠른 개요를 소개합니다.",
	"business/why::why_hero_subtitle":
		"당신은 “비트코인으로 결제하세요” 스티커를 스캔했습니다. 그것이 좋은 소식인 이유를 소개합니다 — 이 비즈니스에도, 당신에게도.",
	"business/why::why_intro_c1":
		"당신이 있는 비즈니스는 비트코인을 받고 있습니다 — 은행이나 중개자가 수수료를 받지 않고 전 세계 어디서나 누구나 사용할 수 있는 모던하고 오픈 소스의 결제 네트워크입니다.",
	"business/why::why_intro_c2":
		"아래는 비트코인을 받는 것이 이 비즈니스에 좋은 이유와, 고객인 당신에게 비트코인을 사용하는 것이 좋은 이유의 짧은 버전입니다.",
	"business/why::why_next_business_label":
		"비트코인 받기",
	"business/why::why_next_business_title":
		"당신의 비즈니스에서 비트코인 받기",
	"business/why::why_next_buy_label": "비트코인 구매",
	"business/why::why_next_buy_title":
		"첫 번째 비트코인 구매하기",
	"business/why::why_next_learn_label": "더 배우기",
	"business/why::why_next_learn_title":
		"비트코인에 대해 더 배우기",
	"business/why::why_next_wallet_label":
		"지갑 만들기",
	"business/why::why_next_wallet_title":
		"자신의 비트코인 지갑 만들기",
	"business/why::why_whats_next_heading": "다음은 어디로?",
	"business/why::why_whats_next_intro":
		"이것이 첫 번째 비트코인 스티커 스캔이라면, 여기서 가기에 가장 도움이 되는 곳을 소개합니다.",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"가맹점들이 비트코인 받기를 시작하기 전에 가장 자주 묻는 질문들에 대한 짧은 답변 — 수수료, 결제, 지갑, 차지백, 비용 등.",
	"business/faq::faq_intro_c1":
		"아래 질문을 탭하면 답변이 펼쳐집니다. 비트코인 받기를 시작할 준비가 되면 페이지 하단의 비즈니스 리소스가 각 단계를 안내합니다.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "회계",
	"business/index::biz_label_faq": "자주 묻는 질문",
	"business/index::biz_label_maps": "가맹점 지도",
	"business/index::biz_label_rewards": "리워드",
	"business/index::biz_label_stickers": "스티커",
	"business/index::biz_label_wallets": "지갑",
	"business/index::biz_meta_description":
		"비즈니스에서 비트코인을 받아 더 낮은 수수료, 즉시 결제, 차지백 없음, 더 많은 고객을 얻으세요.",
	"business/index::business_hero_subtitle":
		"더 낮은 수수료로 결제를 받고, 즉시 지급받고, 수백만 명의 새 고객에게 도달하세요 — 계약 0건, 숨겨진 비용 0원.",
	"business/index::business_intro_c1":
		"비트코인은 비즈니스에 더 빠르고, 더 저렴하고, 더 프라이빗한 결제 방법을 제공합니다. 중개자 없음. 차지백 없음. 계약 없음. 그저 고객에게서 당신에게로 직접 몇 초 안에 결제되는 돈입니다.",
	"business/index::business_intro_c2":
		"아래는 비트코인이 비즈니스에 좋은 이유의 짧은 버전입니다 — 그 아래에는 오늘 비트코인 받기를 시작하는 데 필요한 모든 리소스가 있습니다.",
	"business/index::business_resources_heading":
		"비트코인을 받는 데 필요한 모든 것",
	"business/index::business_resources_intro":
		"이 리소스들을 자신의 속도에 맞춰 진행하세요. 각각은 짧고 실용적인 가이드입니다.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"비즈니스에 대해 알려주세요",
	"business/maps::biz_maps_form_intro":
		"등록에 필요한 정보는 몇 가지뿐입니다. 주소 데이터는 비즈니스를 지도에 제출하는 데 필요한 기간만큼만 보관됩니다.",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map — 비트코인을 받는 가맹점의 개방형 전 세계 디렉터리 — 에 비즈니스를 무료로 등록하여 가까운 비트코인 사용자들이 당신을 찾고 비즈니스에서 비트코인을 사용할 수 있게 하세요.",
	"business/maps::biz_maps_hero_title":
		"비즈니스를 비트코인 가맹점 지도에 올리기",
	"business/maps::biz_maps_intro_c1":
		"비트코인 사용자들은 적극적으로 사용할 곳을 찾고 있습니다. 비즈니스를 지도에 올리면, 가까운 곳에서 식사, 쇼핑, 숙박할 곳을 찾는 모든 비트코인 사용자의 눈앞에 노출됩니다 — 완전 무료로.",
	"business/maps::biz_maps_intro_c2":
		"아래의 짧은 양식을 작성해 주시면 비즈니스를 BTC Map과 다른 비트코인 가맹점 지도에 제출해 드립니다.",
	"business/maps::biz_maps_meta_description":
		"BTC Map과 다른 비트코인 가맹점 지도에 비즈니스를 무료로 등록하여 가까운 비트코인 사용자들이 찾을 수 있게 하세요.",
	"business/maps::biz_maps_placeholder_address": "도로명 주소",
	"business/maps::biz_maps_placeholder_category":
		"카테고리 (예: 레스토랑, 카페, 호텔)",
	"business/maps::biz_maps_placeholder_city": "도시",
	"business/maps::biz_maps_placeholder_country": "국가",
	"business/maps::biz_maps_placeholder_name": "비즈니스 이름",
	"business/maps::biz_maps_placeholder_region":
		"주 / 도 / 지역",
	"business/maps::biz_maps_placeholder_website":
		"웹사이트 (선택)",
	"business/maps::biz_maps_view_map_cta": "BTC Map 보기",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"BTC Map 보기",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"비즈니스를 제출해 주셔서 감사합니다. 곧 비트코인 가맹점 지도에 등록해 드리겠습니다.",
	"business/maps-success::biz_maps_success_hero_title":
		"요청을 받았습니다 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"당신의 비즈니스는 1~2주 안에 BTC Map 및 다른 비트코인 가맹점 디렉터리에 등록됩니다. 지도를 정확하게 유지하기 위해 모든 제출을 수동으로 검토합니다.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"등록이 공개되면 가까운 비트코인 사용자들이 비즈니스를 찾아서 그곳에서 비트코인을 사용할 수 있게 됩니다.",
	"business/maps-success::biz_maps_success_timeline_header":
		"다음에 일어날 일",
	"business/maps-success::biz_maps_success_view_c1":
		"기다리는 동안 BTC Map을 방문해 전 세계에서 성장하는 비트코인 수용 비즈니스 네트워크를 확인해 보세요.",
	"business/maps-success::biz_maps_success_view_header":
		"당신이 표시될 곳 보기",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"당신의 언어로 된 “비트코인으로 결제하세요” 스티커 파일을 요청해 주셔서 감사합니다.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"요청을 받았습니다 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"3~4주 이내에 스티커 파일을 만들어 공개하겠습니다. 준비되는 대로 우리의 스티커 파일 페이지에서 무료로 다운로드해 인쇄할 수 있게 됩니다.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"스티커 파일은 일괄적으로 출시되므로 당신의 언어가 공개되기까지 몇 주가 걸릴 수 있습니다. 기다려 주셔서 감사합니다!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"다음에 일어날 일",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"대량 주문하기",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"무료 팩 추가 요청하기",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"무료 “비트코인으로 결제하세요” 스티커는 스티커 3장이 든 평범한 흰 봉투로 2~4주 안에 도착합니다.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"스티커가 발송되었습니다 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"스티커 3장이 비즈니스에 부족하다면, 무료 팩을 추가로 요청하거나 우리가 사용하는 같은 인쇄소에서 대량 주문할 수 있습니다.",
	"business/sticker-success::biz_sticker_success_more_header":
		"스티커가 더 필요하신가요?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"고객이 입장하기 전에 볼 수 있도록 정문이나 창문에",
	"business/sticker-success::biz_sticker_success_tip_2":
		"카운터, POS 단말기 또는 결제 영역 근처에",
	"business/sticker-success::biz_sticker_success_tip_3":
		"메뉴, 가격표 또는 팁 항아리에",
	"business/sticker-success::biz_sticker_success_tip_4":
		"소유하지 않거나 붙일 허가가 없는 곳에는 붙이지 마세요",
	"business/sticker-success::biz_sticker_success_tips_header":
		"스티커를 붙이기 좋은 곳",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"고객에게 비트코인을 받고 있음을 알리세요. 비즈니스에 붙일 “비트코인으로 결제하세요” 스티커 무료 팩을 주문하세요.",
	"business/stickers::biz_stickers_hero_title":
		"무료 “비트코인으로 결제하세요” 스티커",
	"business/stickers::biz_stickers_intro_c1":
		"비트코인을 받는 것은 일의 절반에 불과합니다 — 고객도 그 사실을 알아야 합니다. 이 작은 “비트코인으로 결제하세요” 스티커는 정문, 카운터, 메뉴, 또는 고객이 결제 전에 보는 어떤 곳에든 붙일 수 있도록 디자인되었습니다.",
	"business/stickers::biz_stickers_intro_c2":
		"미국이나 캐나다 어디로든 무료 팩을 우편으로 보내드립니다. 또는 전 세계 어디서든 직접 인쇄할 수 있습니다.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 캐나다 — 무료 우편",
	"business/stickers::biz_stickers_option_print":
		"🌍 글로벌 — 직접 인쇄",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 미국 — 무료 우편",
	"business/stickers::biz_stickers_placeholder_translation1":
		"“Bitcoin Accepted Here”의 번역",
	"business/stickers::biz_stickers_placeholder_translation2":
		"“Scan to learn why Bitcoin is good for business.”의 번역",
	"business/stickers::biz_stickers_print_c1":
		"어디에 살고 있든 직접 “비트코인으로 결제하세요” 스티커를 인쇄할 수 있습니다. 아래에서 언어를 클릭하면 스티커 파일과 인쇄 안내를 다운로드할 수 있습니다.",
	"business/stickers::biz_stickers_print_header":
		"직접 스티커 파일 인쇄하기",
	"business/stickers::biz_stickers_request_c1":
		"모국어 “비트코인으로 결제하세요” 스티커 파일을 요청하려면 아래 양식을 작성하세요. 준비되는 대로 알려드리겠습니다.",
	"business/stickers::biz_stickers_request_header":
		"당신의 언어가 보이지 않나요?",
	"business/stickers::biz_stickers_step_description":
		"미국과 캐나다 주소로는 무료 팩을 발송합니다. 전 세계 다른 곳에서는 직접 인쇄할 수 있습니다.",
	"business/stickers::biz_stickers_step_header":
		"스티커를 어떻게 받으시겠습니까?",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part3 (ko): filled ${filled}, already-done ${skipped}`,
	);
}

main();
