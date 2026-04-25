#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "홈으로 돌아가기",
	"404::404_message": "비트코인은 멋지지만, 이 깨진 페이지는 그렇지 않습니다.",
	"404::404_not_found_short": "찾을 수 없음",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"우리는 지역 사업장이 비트코인을 결제 수단으로 쉽게 도입할 수 있도록 무료 비즈니스 리소스를 제공합니다. 비트코인 비즈니스 페이지에서는 비트코인이 비즈니스에 어떻게 도움이 되는지 설명하고, 지갑과 POS 옵션을 안내하며, 무료 “비트코인으로 결제하세요” 스티커를 제공합니다.",
	"about::about_card_business_label": "비즈니스 리소스",
	"about::about_card_business_source": "출처: bitcoin.rocks →",
	"about::about_card_business_title":
		"비즈니스가 비트코인 결제를 시작하는 데 필요한 모든 것",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "출처: GitHub →",
	"about::about_card_contact_github_title":
		"github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "기여하기",
	"about::about_card_contribute_source": "출처: GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks에 기여하는 방법 알아보기",
	"about::about_card_email_label": "이메일",
	"about::about_card_email_source": "출처: 이메일 →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "인쇄용 전단지",
	"about::about_card_flyers_source": "출처: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"커뮤니티를 위한 비트코인 전단지를 다운로드하고 인쇄하세요",
	"about::about_card_github_label": "저장소",
	"about::about_card_github_source": "출처: GitHub →",
	"about::about_card_github_title": "GitHub에서 bitcoin.rocks 보기",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "출처: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "무료 스티커",
	"about::about_card_stickers_source": "출처: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"무료 비트코인 스티커를 자택으로 받아보세요",
	"about::about_editorial_2":
		"우리는 미국 연방준비제도(FRED), 미국 노동통계국, FDIC, 유엔, 세계금협회, Forbes, MIT Technology Review, Lyn Alden, James Lavish 같은 신뢰할 수 있는 출처에 링크합니다. 사실이 명확하게 제시되면 비트코인은 스스로 말한다고 믿습니다.",
	"about::about_flyers_blurb":
		"우리는 모임에서 나누어 주거나, 커뮤니티 게시판에 붙이거나, 우편함에 넣을 수 있는 인쇄용 전단지를 디자인합니다 — 호기심을 자극하고 사람들을 bitcoin.rocks에서 더 배우도록 이끄는 간단한 방법입니다.",
	"about::about_header": "bitcoin.rocks 소개",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks는",
	"about::about_mission_1b":
		"이 2022년에 단순한 사명 아래 설립했습니다: 교육을 통해 비트코인 채택을 가속화한다.",
	"about::about_open_source_2":
		"bitcoin.rocks는 MIT 라이선스 하에 제공되는 무료 오픈 소스 프로젝트입니다. 누구나 bitcoin.rocks에 기여할 수 있습니다 — 특히 콘텐츠를 전 세계에 전달하는 데 도움을 주는 번역가를 환영합니다.",
	"about::about_page_description":
		"bitcoin.rocks는 2022년에 설립된 무료, 오픈 소스 비트코인 교육 사이트입니다. 우리의 사명은 교육을 통해 비트코인 채택을 가속화하는 것입니다.",
	"about::about_stickers_blurb":
		"우리는 무료 비트코인 스티커를 자택으로 보내드립니다. 매월 수백 명의 사람들이 이 스티커의 QR 코드를 스캔하여 비트코인에 대해 배우고 있어 — 당신의 커뮤니티에서 비트코인 인지도를 높이는 데 도움이 됩니다.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"비트코인에는 뱅크런이 없습니다",
	"bank-runs::bank_runs_bitcoin_p1":
		"비트코인은 완전 준비금 시스템입니다. 당신은 은행에 돈을 예치하지 않습니다. 당신이 곧 은행입니다. 당신만이 자신의 돈에 접근할 수 있기 때문에, 당신이 모르는 사이에 누구도 당신의 돈을 빌려줄 수 없습니다.",
	"bank-runs::bank_runs_bitcoin_p2":
		"거래소나 ETF에 감싸진 형태가 아니라 자신의 지갑에 비트코인을 보유하고 있는 한, 뱅크런은 일어날 수 없습니다.",
	"bank-runs::bank_runs_bitcoin_p3":
		"비트코인을 사용하면 진정한 의미에서 자신의 돈을 통제할 수 있습니다.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"2020년 3월 26일 이후 미국 은행들은 0%의 준비금을 보유할 수 있도록 허용되었습니다.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"은행 준비율",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"출처: 미국 연방준비제도 →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"완전 준비금 — 예금 보험이 필요하지 않습니다.",
	"bank-runs::bank_runs_card_btc_fdic_label": "비트코인 보호",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"출처: 비트코인 백서 →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"모든 비트코인은 온체인에 존재하며 빌려주지 않습니다.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"비트코인 준비율",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"출처: 비트코인 백서 →",
	"bank-runs::bank_runs_card_fdic_detail":
		"1,539억 달러의 보험 기금에 비해 보호 대상 예금은 10조 8,200억 달러입니다(2025년 12월).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC 보호",
	"bank-runs::bank_runs_card_fdic_source":
		"출처: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "사례 연구",
	"bank-runs::bank_runs_card_svb_source":
		"출처: 워싱턴 대학교 로스쿨 →",
	"bank-runs::bank_runs_card_svb_title":
		"실리콘 밸리 은행의 뱅크런이 어떻게 일어났는지 알아보기",
	"bank-runs::bank_runs_card_wallet_label": "다음 단계",
	"bank-runs::bank_runs_card_wallet_source": "여기서 시작하기 →",
	"bank-runs::bank_runs_card_wallet_title":
		"자신의 비트코인 지갑을 만드는 방법 알아보기",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC 보험은 예금의 약 1%만 보장합니다",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC 보험은 예금자당 최대 25만 달러까지 예금을 보호합니다. 그러나 보험 기금은 보호해야 할 총 예금 규모에 비해 매우 작습니다.",
	"bank-runs::bank_runs_fdic_p2_a":
		"대규모 은행 파산이 발생하면 정부는 부족분을 메우기 위해 돈을 찍어낼 가능성이 크며, 이는 더 많은",
	"bank-runs::bank_runs_fdic_p2_link": "인플레이션을 일으킵니다.",
	"bank-runs::bank_runs_header":
		"비트코인에는 뱅크런이 없지만, 당신의 은행에는 있을 수 있습니다.",
	"bank-runs::bank_runs_page_description":
		"은행은 부분 준비금 제도 하에서 당신의 예금을 빌려줍니다. 너무 많은 사람들이 한꺼번에 인출하면 은행은 무너질 수 있습니다. 비트코인은 완전 준비금 시스템이며, 뱅크런은 일어날 수 없습니다.",
	"bank-runs::bank_runs_svb_heading":
		"실리콘 밸리 은행: 실제 사례",
	"bank-runs::bank_runs_svb_p1_a":
		"2023년 3월, 실리콘 밸리 은행은 고객 예금을 장기",
	"bank-runs::bank_runs_svb_p1_b":
		"이 채권의 가치가 떨어지자 SVB는 인출에 대응할 수 없었습니다. 은행은 지급불능 상태가 되었습니다.",
	"bank-runs::bank_runs_svb_p1_link": "국채에 묶어두었습니다.",
	"bank-runs::bank_runs_svb_p2":
		"수천 개의 기업이 직원에게 급여를 지급할 수 없게 되었습니다. FDIC가 개입했지만, 더 큰 의문을 남겼습니다: 당신의 돈은 정말 안전한가?",
	"bank-runs::bank_runs_what_p1":
		"은행은 당신의 예금을 금고에 보관하지 않습니다. 그들은 당신의 돈을 빌려주고 투자합니다 — 이를 부분 준비금 은행 제도라고 합니다.",
	"bank-runs::bank_runs_what_p2":
		"너무 많은 사람들이 동시에 인출하려고 하면, 은행은 모두에게 지급할 충분한 현금이 없습니다. 이것이 바로 뱅크런이며, 은행을 완전히 무너뜨릴 수 있습니다.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">은행</span>의 차이',
	"bitcoin-vs-banks::point_1_summary_1":
		"인터넷 연결이 있는 사람이라면 누구나 비트코인을 사용할 수 있습니다 — ",
	"bitcoin-vs-banks::point_1_summary_2": "허가가 필요 없습니다.",
	"bitcoin-vs-banks::point_1_summary_3":
		"은행은 정책이나 정부 규정에 따라 계좌를 거부, 동결 또는 폐쇄할 수 있습니다.",
	"bitcoin-vs-banks::point_2_summary_1":
		"비트코인 네트워크는 점검 시간이나 휴일 없이 24시간 365일 가동됩니다. 은행은 영업 시간이 제한되어 있고, 주말에는 문을 닫으며, 시스템 점검 시간도 있습니다.",
	"bitcoin-vs-banks::point_3_summary_1":
		"모든 비트코인 거래는 누구나 감사할 수 있는 공개 블록체인에 있습니다. 은행은 고객이 독립적으로 검증할 수 없는 비공개 장부를 운영합니다.",
	"bitcoin-vs-banks::point_4_summary_1":
		"비트코인을 사용하면 자신의 비밀 키를 직접 보관합니다 — 우리의 간단한",
	"bitcoin-vs-banks::point_4_summary_2": "비트코인 지갑",
	"bitcoin-vs-banks::point_4_summary_3":
		"가이드를 참조하세요. 은행은 당신의 돈을 보관하며 언제든지 동결, 제한 또는 제약할 수 있습니다.",
	"bitcoin-vs-banks::point_5_summary_1":
		"비트코인 수수료는 투명하고 예측 가능합니다. 은행은 시간이 지남에 따라 숨은 계좌 수수료, 당좌 대월 수수료, 송금 수수료, ATM 수수료를 누적합니다.",
	"bitcoin-vs-banks::point_6_summary_1":
		"비트코인을 사용하면 실제로 보유한 만큼만 사용할 수 있습니다. 은행은 당좌 대월을 허용하고 그 특권에 대해 연쇄적인 페널티 수수료를 부과합니다.",
	"bitcoin-vs-banks::point_7_summary_1":
		"일단 방송되면 비트코인 거래는 중단되거나 되돌릴 수 없습니다. 은행은 정책이나 정부 명령에 따라 거래를 차단, 동결 또는 되돌릴 수 있습니다.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">채권</span>의 차이',
	"bitcoin-vs-bonds::point_1_summary_1":
		"채권이 “무위험”이라는 것은 명목상일 뿐입니다 — 인플레이션, 금리 변동, 부도 위험이 모두 실질 수익을 잠식합니다.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"비트코인에는 투명한 변동성이 있지만 숨은 거래상대방 위험은 없습니다.",
	"bitcoin-vs-bonds::point_2_summary_1": "",
	"bitcoin-vs-bonds::point_2_summary_2": "인플레이션",
	"bitcoin-vs-bonds::point_2_summary_3":
		"이 채권 수익률을 초과하면 채권 보유자는 매년 실질 구매력을 잃습니다. 비트코인의 2,100만 개 한도는 인플레이션으로 가치를 잃지 않습니다.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"채권 시장은 위기 시 얼어붙을 수 있습니다 — 실리콘 밸리 은행은 가치가 떨어진 채권을 떠안고 있던 것이 부분적인 원인이 되어 무너졌습니다.",
	"bitcoin-vs-bonds::point_3_summary_2": "뱅크런",
	"bitcoin-vs-bonds::point_3_summary_3":
		"이 어떻게 일어나며 왜 비트코인이 그것을 피하는지 알아보세요. 비트코인은 유동성 위기 없이 24시간 365일 글로벌하게 거래됩니다.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"국채 입찰은 매수자가 충분하지 않을 때 실패할 수 있습니다 — 보세요",
	"bitcoin-vs-bonds::point_4_summary_2": "2022년의 약한 입찰을.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"비트코인 가격은 실패할 수 있는 중앙 입찰 없이 공개 시장에서 지속적으로 발견됩니다.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"채권 수익률은 매수 시점에 고정됩니다. 경제가 호황이든 통화가 붕괴하든 당신의 수익은 변하지 않습니다.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"비트코인은 채택이 늘어나고 수요가 고정 공급과 만남에 따라 상당한 가치 상승의 여지가 있습니다.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"대부분의 채권은 은행이나 브로커를 통해 보유되어 거래상대방 위험이 추가됩니다. 비트코인은",
	"bitcoin-vs-bonds::point_6_summary_2": "지갑",
	"bitcoin-vs-bonds::point_6_summary_3":
		"에서 자기 보관할 수 있어 그 위험을 완전히 제거합니다.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"채권은 정부가 상환할 것이라는 데 전적으로 의존합니다. 정부가 부도를 내거나 부채를 인플레이션으로 없애면 채권 보유자는 손실을 입습니다.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"비트코인은 어떤 정부나 정치적 권위로부터도 독립적으로 운영됩니다.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">현금</span>의 차이',
	"bitcoin-vs-cash::point_1_summary_1":
		"비트코인은 인터넷을 통해 전 세계 어디로든 몇 분 안에 이동합니다. 현금은 물리적 존재나 신뢰할 수 있는 운반자가 필요합니다 — 20달러 지폐를 이메일로 보낼 수는 없습니다.",
	"bitcoin-vs-cash::point_2_summary_1":
		"비트코인은 어디서나 동일하게 작동합니다. 현금은 지리, 환율, 지역 수용에 의해 제한됩니다.",
	"bitcoin-vs-cash::point_3_summary_1":
		'정부는 하룻밤 사이에 현금을 무효화할 수 있습니다 — <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">인도</a>는 2016년에 그렇게 했습니다. 통화 무효화 없이도 현금은',
	"bitcoin-vs-cash::point_3_summary_2": "인플레이션",
	"bitcoin-vs-cash::point_3_summary_3":
		"으로 가치를 잃습니다. 비트코인은 어떤 정부나 기관에 의해서도 무효화될 수 없습니다.",
	"bitcoin-vs-cash::point_4_summary_1":
		"현금은 때때로 정교하게 위조될 수 있습니다. 비트코인은 위조를 수학적으로 불가능하게 만드는 암호화 기술을 사용합니다.",
	"bitcoin-vs-cash::point_5_summary_1":
		"비트코인에는 중앙 권위가 없습니다. 현금은 정부가 발행하며, 정부는 마음대로 더 많이 찍거나 디자인을 바꾸거나 지폐를 무효화할 수 있습니다.",
	"bitcoin-vs-cash::point_6_summary_1":
		"현금은 도난, 화재, 분실, 압수에 취약합니다. 비트코인은",
	"bitcoin-vs-cash::point_6_summary_2": "자기 보관",
	"bitcoin-vs-cash::point_6_summary_3":
		"으로 스마트폰이나 하드웨어 장치에 안전하게 저장할 수 있습니다.",
	"bitcoin-vs-cash::point_7_summary_1":
		"비트코인은 1억 사토시로 나눌 수 있어 모든 규모의 소액 결제가 가능합니다. 현금에는 최소 단위가 있습니다 — 1센트를 나눌 수는 없습니다.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">CBDC</span>의 차이',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"비트코인은 지금까지 구축된 컴퓨팅 네트워크 중 가장 안전하며 한 번도 해킹된 적이 없습니다. CBDC는 여러 차례 해킹된 은행과 정부에 의존합니다.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"누구도 당신이 비트코인으로 거래하는 것을 막을 수 없습니다. CBDC는 정부와 중앙은행이 모든 결제를 통제할 수 있도록 설계되어 당신의 프라이버시와 자유를 제한합니다.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"비트코인은 만료 기간이나 월 사용료가 없습니다. CBDC는 만료되도록 프로그래밍될 수 있어 미래를 위한 저축을 어렵게 만들 수 있습니다.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"비트코인은 2,100만 BTC의 하드 캡이 있습니다. CBDC는 공급 한도가 없어 정부가 원하는 만큼 돈을 더 만들 수 있으며, 이는",
	"bitcoin-vs-cbdc::point_3_summary_2": "인플레이션",
	"bitcoin-vs-cbdc::point_3_summary_3":
		"을 일으킵니다.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"비트코인 주소는 당신의 실명과 연결되지 않습니다. CBDC는 정부 발급 신분증에 직접 연결되어 대규모 금융 감시와 검열을 가능하게 합니다.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"비트코인 규칙은 수만 개의 독립 노드에 의해 검증됩니다. CBDC는 정부와 중앙은행의 손에 집중되어 있으며, 그들이 네트워크를 완전히 통제합니다.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"누구나 비트코인 노드를 운영하여 네트워크 규칙을 검증할 수 있습니다. CBDC에서는 사용자가 노드를 운영할 수 없으며 — 중앙 권위를 신뢰해야 합니다.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"자기 보관된 비트코인은 누구도 동결할 수 없습니다. CBDC는 정부와 중앙은행이 즉시 계좌를 동결할 수 있도록 설계되었습니다.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"비트코인은 ",
	"bitcoin-vs-cbdc::point_8_summary_2": "지갑",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"에서 자기 보관할 때 당신의 돈을 완전히 통제할 수 있게 해줍니다. CBDC는 은행이나 정부와 같은 관리자가 돈을 보관해 주기를 신뢰해야 합니다.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"비트코인의 통화 정책은 코드에 고정되어 변경할 수 없습니다. CBDC는 정치인이 자유롭게 재프로그래밍할 수 있고, 너무 많은 돈을 찍어내면",
	"bitcoin-vs-cbdc::point_9_summary_2": "인플레이션",
	"bitcoin-vs-cbdc::point_9_summary_3":
		"을 일으킵니다.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "반취약성",
	"bitcoin-vs-crypto::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">암호화폐</span>의 차이',
	"bitcoin-vs-crypto::point_1_summary_1":
		"비트코인 프로토콜은 2009년 이후 근본적으로 변하지 않아 예측 가능한 규칙을 제공합니다. 대부분의 암호화폐 프로젝트는 프로토콜과 토크노믹스를 끊임없이 변경하거나 새로운 버전으로 포크합니다.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"비트코인은 전 세계 수만 개의 독립 노드에서 실행됩니다. 대부분의 암호화폐 프로젝트는 일방적인 변경을 가할 수 있는 재단, 기업 또는 소규모 개발팀이 통제합니다.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"비트코인은 2,100만 코인의 하드 캡이 있습니다 — 가장 희소한 디지털 자산입니다. 대부분의 암호화폐 프로젝트는 무제한 공급량이나 새로운 토큰을 자유롭게 발행할 수 있는 메커니즘이 있어 보유자를 희석합니다.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"비트코인의 목적은 단 하나입니다: 개인 간 디지털 통화. 누구나 이해하고 사용할 수 있습니다. 대부분의 암호화폐는 안전하게 사용하려면 기술적 전문 지식이 필요한 복잡한 스마트 계약과 DeFi를 포함합니다.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"비트코인의 작업 증명은 메인넷에 대한 성공적인 공격 없이 15년 이상 운영되어 왔습니다. 대부분의 암호화폐 프로젝트는 실전에서 검증되지 않은 실험적인 합의 메커니즘을 사용합니다.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"비트코인은 디지털 화폐입니다 — 가치 저장 수단이자 교환 수단. 대부분의 암호화폐 토큰은 실제 가치가 불확실한 투기적인 유틸리티 토큰이나 거버넌스 토큰입니다.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"비트코인은 공격을 받을 때마다 더 강해지며 모든 위기, 금지, 비판을 견뎌냈습니다. 대부분의 암호화폐 프로젝트는 규제, 기술 또는 시장 압력으로 무너집니다.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"비트코인에는 CEO도, 기업도, 단일 장애 지점도 없습니다. 대부분의 암호화폐 프로젝트는 벤처 캐피털, 특정 리더십 또는 단일 기업의 생존에 의존합니다.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">미술품</span>의 차이',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"모든 비트코인은 동일하고 대체 가능합니다. 모든 미술품은 고유합니다 — 창작, 역사, 상태, 출처가 달라 직접 비교가 매우 어렵습니다.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"비트코인은 누구나 접근할 수 있는 글로벌 시장에서 24시간 365일 거래됩니다. 미술품은 전문 경매장, 개인 딜러, 갤러리가 필요하며, 판매까지 몇 달이 걸릴 수 있습니다.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"비트코인의 매매 수수료는 1% 미만이며, 종종 훨씬 적습니다. 미술품 매매에서는 구매자 프리미엄, 수수료, 보험, 운송, 감정 비용으로 30~40%가 소진됩니다.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"비트코인은 1억 사토시로 나눌 수 있어 어떤 규모의 거래에도 적합합니다. 거래상대방 위험 없이 그림의 일부나 조각의 모서리를 소유할 수는 없습니다.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"비트코인의 소유권과 진위는 누구나 온체인에서 암호학적으로 검증할 수 있습니다. 미술품 감정은 비싸고 시간이 걸리며, 그래도 위조꾼에게 자주 속아 작품의 가치가 하룻밤에 사라집니다.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"적절히 백업된 비트코인은 홍수, 화재, 지진, 도난을 견뎌냅니다. 미술품은 모든 물리적 파괴에 취약하며, 보험으로 모든 것을 보장하기는 거의 불가능합니다.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"인터넷 연결과 약간의 돈만 있으면 누구나 비트코인을 살 수 있습니다. 미술품 투자는 경매에 접근할 수 있는 부유한 컬렉터와 전문 지식이 있는 사람들에게 사실상 제한됩니다.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">금</span>의 차이',
	"bitcoin-vs-gold::point_1_summary_1":
		"비트코인은 낮은 수수료로 인터넷을 통해 즉시 보낼 수 있습니다. 금은 소유권을 이전하려면 물리적으로 운반해야 합니다.",
	"bitcoin-vs-gold::point_2_summary_1":
		"비트코인은 인터넷을 통해 보낼 수 있는 디지털 네이티브 자산입니다. 온라인 금은 디지털 차용증에 불과합니다 — 금속 자체가 아니라 보관자의 약속만 소유합니다.",
	"bitcoin-vs-gold::point_3_summary_1":
		'비트코인은 2,100만 BTC의 하드 캡이 있습니다. 금 공급량은 <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">매년 약 1.6%</a> 증가하여 당신의 몫을 줄입니다 — 법정통화의',
	"bitcoin-vs-gold::point_3_summary_2": "인플레이션",
	"bitcoin-vs-gold::point_3_summary_3":
		"보다는 적지만 그래도 인플레이션입니다.",
	"bitcoin-vs-gold::point_4_summary_1":
		"금 가격이 오르면 더 많은 금이 채굴되어 가격을 끌어내립니다. 비트코인의 공급은 비탄력적입니다 — 가격이 아무리 높아져도 영원히 2,100만 개만 존재합니다.",
	"bitcoin-vs-gold::point_5_summary_1":
		"수만 개의 독립 노드가 비트코인 네트워크를 검증합니다. 대부분의 물리적 금은 몇 개의 대형 보관소에 보관됩니다.",
	"bitcoin-vs-gold::point_6_summary_1":
		"누구나 풀 노드를 실행하여 진짜 비트코인을 검증할 수 있습니다 — 그저 앱일 뿐입니다. 물리적 금을 검증하려면 녹여야 하며, 내부는 텅스텐일 수 있습니다.",
	"bitcoin-vs-gold::point_7_summary_1":
		"비트코인은 1억 사토시로 나눌 수 있어 어떤 규모의 구매에도 적합합니다. 금은 소액 거래를 위해 쉽게 분할할 수 없습니다.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">부동산</span>의 차이',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"비트코인은 전 세계 어디로든 즉시 이동합니다. 부동산은 한 곳에 고정되어 있어 지역 경제, 정치, 자연 위험에 노출됩니다.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"비트코인은 1억 사토시로 나눌 수 있습니다. 부동산은 부분 매각이 불가능합니다 — 부엌만 양도하거나 침실 절반만 살 수 없습니다.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"비트코인은 정부가 통제할 수 없는 분산 네트워크에서 운영됩니다. 부동산은 엄격하게 규제됩니다 — 용도지역제, 임대료 규제, 토지 수용, 압류가 모두 적용됩니다.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"비트코인은 유지보수가 필요 없습니다. 부동산은 수리, 리노베이션, 보험, 자산 관리, 임차인 문제 등이 필요합니다.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"비트코인에는 지속적인 세금이 없습니다 — 매도할 때만 양도소득세를 냅니다. 부동산은 소득과 관계없이 매년 재산세를 내야 합니다.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"적절히 백업된 비트코인은 화재, 홍수, 지진을 견뎌냅니다. 부동산은 모든 재해에 취약하며 보험으로 모든 것을 보장하기는 거의 불가능합니다.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"모든 비트코인은 동일하고 대체 가능합니다. 모든 부동산은 고유하여 가격 책정과 비교가 어렵습니다.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"비트코인은 인터넷에 연결된 누구나 24시간 365일 글로벌하게 거래할 수 있습니다. 부동산 매각은 지역 매수자에 한정되며 서류 절차에 몇 달이 걸릴 수 있습니다.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"비트코인은 누구나 직접 개인적으로 소유할 수 있게 해줍니다. 자가 거주 외 투자 목적의 부동산 구매는 주택 가격을 끌어올리고, 저렴한 주택 공급을 줄이며, 주택 위기를 부추깁니다.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">주식</span>의 차이',
	"bitcoin-vs-stocks::point_1_summary_1":
		"비트코인은 당신이 완전히 소유하는 직접 자산입니다. 주식은 회사의 일부입니다 — 그 가치는 당신이 통제할 수 없는 경영진, 실적, 결정에 달려 있습니다.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"비트코인은 2,100만 BTC의 하드 캡이 있습니다. 기업은 언제든지 새 주식을 발행하여 기존 주주를 희석할 수 있습니다 — 법정통화의",
	"bitcoin-vs-stocks::point_2_summary_2": "인플레이션",
	"bitcoin-vs-stocks::point_2_summary_3":
		"이 현금을 희석하는 것과 같습니다. 비트코인을 사용하면 당신의 몫은 결코 줄어들지 않습니다.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"비트코인에는 CEO도 단일 장애 지점도 없습니다. 주식은 리더십에 크게 의존합니다 — 잘못된 결정 하나나 이탈로 가격이 폭락할 수 있습니다.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"비트코인 가격은 개방된 글로벌 시장에서 형성됩니다. 주식 평가는 과대평가된 주식을 가릴 수 있는 P/E 비율 같은 지표에 의존합니다.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"비트코인은 전 세계에서 24시간 365일 거래됩니다. 주식 시장은 평일 영업 시간에만 열립니다.",
	"bitcoin-vs-stocks::point_6_summary_1": "비트코인은",
	"bitcoin-vs-stocks::point_6_summary_2": "자기 보관",
	"bitcoin-vs-stocks::point_6_summary_3":
		"이 가능하여 간단한 앱으로 보관할 수 있습니다 — 브로커가 필요 없습니다. 주식은 브로커에게 보관되어 그들이 파산하면 거래상대방 위험에 노출됩니다.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"비트코인의 고정 공급량은 신뢰할 수 있는 인플레이션 헤지 수단이 됩니다. 일부 주식은 인플레이션을 능가하지만 그렇지 않은 주식도 있습니다 — 보장은 없습니다.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'<span class="orange">비트코인</span>과 <span class="asset">Visa</span>의 차이',
	"bitcoin-vs-visa::point_1_summary_1":
		"비트코인은 누구나 허가 없이 참여하여 사용할 수 있는 개방형 네트워크입니다. Visa는 금융 기관이 통제하는 폐쇄형 시스템이며, 특히 은행 서비스를 받지 못하거나 부족한 사람들의 접근을 거부할 수 있습니다.",
	"bitcoin-vs-visa::point_2_summary_1":
		"비트코인 거래에는 가맹점 수수료가 없습니다. Visa는 일반적으로 거래당 가맹점에 약 3%를 부과합니다 — 당신의 비즈니스는",
	"bitcoin-vs-visa::point_2_summary_2": "비트코인 결제",
	"bitcoin-vs-visa::point_2_summary_3":
		"를 받음으로써 비용을 절감할 수 있습니다.",
	"bitcoin-vs-visa::point_3_summary_1":
		"모든 비트코인 거래는 공개되고 감사 가능한 블록체인에 있습니다. Visa는 폐쇄적이고 독점적인 시스템을 운영하며, 고객은 어떤 것도 독립적으로 검증할 수 없습니다.",
	"bitcoin-vs-visa::point_4_summary_1":
		"비트코인은 어떤 중앙 권위에 의해서도 동결될 수 없습니다. Visa는 언제든지 계좌를 동결하고, 거래를 차단하고, 서비스를 거부할 수 있습니다.",
	"bitcoin-vs-visa::point_5_summary_1":
		"비트코인은 최종 결제입니다 — 자신이 보유한 만큼만 사용할 수 있습니다. 신용카드는 종종 25%를 넘는 연이율로 빚을 만듭니다.",
	"bitcoin-vs-visa::point_6_summary_1": "비트코인을 사용하면",
	"bitcoin-vs-visa::point_6_summary_2": "자기 보관",
	"bitcoin-vs-visa::point_6_summary_3":
		"을 할 수 있어 은행이나 결제 처리 업체가 필요 없습니다. 신용카드는 항상 중개자가 필요합니다.",
	"bitcoin-vs-visa::point_7_summary_1":
		"비트코인은 영업 시간 없이 전 세계에서 24시간 365일 작동합니다. Visa에는 영업 시간, 점검 시간, 지리적 제한이 있으며 거래를 차단할 수 있습니다.",
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
		`translate-rest-part1 (ko): filled ${filled}, already-done ${skipped}`,
	);
}

main();
