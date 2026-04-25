#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — non-inflation namespaces, part 2.
 * Covers: common, index, get-involved, nostr/index, flyers, wallets,
 * lightning, buy, compound-inflation-calculator, stickers,
 * sticker-success, sticker-language-success, sticker-files/index.
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

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "언어 추가",
	"common::common_next_buy_bitcoin": "비트코인 구매",
	"common::common_next_buy_bitcoin_desc":
		"비트코인을 안전하게 구매하는 방법 알아보기",
	"common::common_next_calculate": "당신의 인플레이션 계산하기",
	"common::common_next_calculate_desc":
		"인플레이션이 시간에 따라 급여에 어떤 영향을 미치는지 보기",
	"common::common_next_get_wallet": "지갑 만들기",
	"common::common_next_get_wallet_desc":
		"첫 번째 비트코인 지갑을 만드세요 — 무료입니다",
	"common::common_next_keep_learning": "계속 배우기",
	"common::common_next_keep_learning_desc":
		"비트코인이 세상을 어떻게 개선하고 있는지 보기",
	"common::common_source_bls_cpi":
		"미국 노동통계국 — 소비자물가지수(CPI)",
	"common::common_source_fred_money_supply_index":
		"미국 연방준비경제데이터(FRED) — 통화공급량(카테고리 인덱스)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \u201CCan a Treasury Auction Fail?\u201D",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "다음은?",
	"common::common_sticker_files_mission_5": "팩 요청하기",
	"common::common_site_tagline":
		"모두를 위한 비트코인 교육.",
	"common::common_source_btc_map":
		"BTC Map — 비트코인을 받는 가맹점의 전 세계 디렉터리",
	"common::common_source_btcpayserver":
		"BTCPay Server — 무료, 오픈 소스, 자체 호스팅 비트코인 결제 처리기",
	"common::common_source_oshi":
		"Oshi — 가맹점을 위한 비트코인 보상 플랫폼",
	"common::common_source_strike_business":
		"Strike — 비즈니스를 위한 비트코인 및 Lightning 결제",
	"common::common_sources_group_bitcoin": "비트코인 데이터",
	"common::common_sources_group_cpi": "인플레이션 / 소비자물가지수",
	"common::common_sources_group_debt": "정부 부채",
	"common::common_sources_group_money": "통화공급 데이터",
	"common::common_sources_group_stories": "실제 사례",
	"common::common_sticker_files_mission_6":
		"의 영어 스티커를 무료로.",
	"common::common_sticker_files_next_flyers_label": "전단지",
	"common::common_sticker_files_next_flyers_title":
		"비트코인 전단지 인쇄하기",
	"common::common_sticker_files_next_languages_label":
		"스티커 파일",
	"common::common_sticker_files_next_languages_title":
		"다른 언어의 스티커 파일 보기",
	"common::common_sticker_files_print_these":
		"한 번의 클릭으로 인쇄",
	"common::common_sticker_name_bdhi_black":
		"\u201CBitcoin Doesn't Have Inflation\u201D 스티커 (검정)",
	"common::common_sticker_name_bdhi_orange":
		"\u201CBitcoin Doesn't Have Inflation\u201D 스티커 (오렌지)",
	"common::common_sticker_name_caution":
		"\u201CCaution! Melting Ice Cube\u201D 비트코인 스티커",
	"common::common_sticker_name_cure_inflation":
		"\u201CCure Inflation\u201D 비트코인 스티커",
	"common::common_sticker_name_danger":
		"\u201CDanger! Inflation Ahead\u201D 비트코인 스티커",
	"common::common_sticker_name_fix":
		"\u201CFix The Money, Fix The World\u201D 비트코인 스티커",
	"common::common_sticker_name_got_inflation":
		"\u201CGot Inflation?\u201D 비트코인 스티커",
	"common::common_sticker_name_study":
		"\u201CStudy Bitcoin\u201D 스티커",
	"common::common_sticker_name_warning":
		"\u201CWarning! Inflation is Stealing Your Savings\u201D 비트코인 스티커",
	"common::common_sticker_name_what_if":
		"\u201CWhat if your money didn't have inflation?\u201D 비트코인 스티커",
	"common::common_sticker_tips_heading": "스티커 팁",
	"common::common_sticker_tips_intro":
		"스티커를 인쇄한 후에는 사람들이 볼 수 있는 곳에 붙이세요! 좋은 위치는:",
	"common::common_sticker_tips_list_1":
		"사람들이 볼 수 있는 공공장소",
	"common::common_sticker_tips_list_2":
		"빨리 떼어질 가능성이 낮은 곳 (스티커는 영구적인 손상을 주지 않습니다)",
	"common::common_sticker_tips_list_3":
		"쉽게 붙는 표면 (금속, 플라스틱, 유리)",
	"common::common_sticker_tips_list_4":
		"사유지, 표지판, ATM, 주유 펌프 위에는 붙이지 마세요",
	"common::common_stickers_printer_prefix": "우리는",
	"common::common_stickers_printer_suffix":
		"를 사용하지만, 어떤 스티커 회사라도 사용할 수 있습니다.",
	// Untranslated dimensions — keep identical (proper nouns in this allow-list don't apply, dimensions are universal numeric)
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "저축",
	"index::home_card_label_art_1": "비교해 봅시다",
	"index::home_card_label_art_2": "널리 알리기",
	"index::home_card_label_art_3": "스트리트 아트",
	"index::home_card_label_bank_runs": "완전 준비금 시스템",
	"index::home_card_label_bonds": "비교해 봅시다",
	"index::home_card_label_business_1": "차이점은 무엇인가?",
	"index::home_card_label_business_2": "비트코인 결제 받기",
	"index::home_card_label_cash": "비교해 봅시다",
	"index::home_card_label_cbdc": "개방형? 폐쇄형?",
	"index::home_card_label_coding_1": "인터랙티브 튜토리얼",
	"index::home_card_label_coding_2": "하드웨어 만들기",
	"index::home_card_label_coding_3": "코딩 퍼즐",
	"index::home_card_label_crowdfunding_1": "EndSARS 시위",
	"index::home_card_label_crowdfunding_2": "막을 수 없는 돈",
	"index::home_card_label_crowdfunding_3":
		"당신의 프로젝트에 자금 조달",
	"index::home_card_label_crypto": "차이점은 무엇인가?",
	"index::home_card_label_energy_1": "전력망 안정화",
	"index::home_card_label_energy_4": "수요 반응",
	"index::home_card_label_energy_5": "농촌 전력화",
	"index::home_card_label_energy_6": "재생 가능 에너지 인센티브",
	"index::home_card_label_environment_1": "메탄 감축",
	"index::home_card_label_environment_2": "국립공원을 살리다",
	"index::home_card_label_environment_3":
		"가장 친환경적인 산업",
	"index::home_card_label_environment_4": "플레어 가스 감축",
	"index::home_card_label_equality_1": "희망과 기회",
	"index::home_card_label_equality_2": "게임 체인저",
	"index::home_card_label_food_1": "식료품 가격",
	"index::home_card_label_food_2": "농장과 토양",
	"index::home_card_label_freedom_1": "권위주의 정권",
	"index::home_card_label_freedom_2": "유일무이한 도구",
	"index::home_card_label_get_started_1": "초보자 기본",
	"index::home_card_label_get_started_2": "첫 번째 지갑",
	"index::home_card_label_get_started_3": "비트코인 구매",
	"index::home_card_label_gold": "어느 쪽이 더 나은가?",
	"index::home_card_label_housing_1": "저렴한 주택",
	"index::home_card_label_human_rights_1": "인권 수호",
	"index::home_card_label_human_rights_2": "풀뿌리 채택",
	"index::home_card_label_human_rights_3": "글로벌 영향",
	"index::home_card_label_inflation":
		"비트코인은 더 나은 화폐",
	"index::home_card_label_networks_1": "네트워크 실시간 보기",
	"index::home_card_label_networks_2": "비교해 봅시다",
	"index::home_card_label_payments_1": "차이점은 무엇인가?",
	"index::home_card_label_payments_2": "빠르고 저렴한 결제",
	"index::home_card_label_payments_3": "송금",
	"index::home_card_label_payments_4": "결제 받기",
	"index::home_card_label_politics_1": "정치적 역설",
	"index::home_card_label_politics_2": "행동에 나서기",
	"index::home_card_label_property_rights_1": "비교해 봅시다",
	"index::home_card_label_property_rights_2": "진정한 소유권",
	"index::home_card_label_salary": "당신의 급여를 지키세요",
	"index::home_card_label_self_custody_1":
		"비트코인 지갑 가이드",
	"index::home_card_label_self_custody_2":
		"가장 중요한 단계",
	"index::home_card_label_self_custody_3": "주권 화폐",
	"index::home_card_label_war_1": "끝없는 전쟁을 끝내자",
	"index::home_card_label_war_2": "참전용사 돕기",
	"index::home_card_label_war_3": "전시 탈출",
	"index::home_h1":
		"비트코인은 더 나은 세상을 건설하는 더 나은 화폐입니다.",
	"index::home_nav_about": "소개",
	"index::home_nav_get_involved": "참여하기",
	"index::home_nav_learn": "배우기",
	"index::home_source_prefix": "출처:",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"참여하여 비트코인을 널리 알리기",
	"get-involved::get_involved_business_content_1":
		"비트코인 순환 경제 구축에 동참하고 싶으신가요? 가장 쉬운 방법은 지역 비즈니스가 비트코인 결제를 받기 시작하도록 돕는 것입니다.",
	"get-involved::get_involved_business_content_2":
		"비트코인 결제에 관심 있을 만한 비즈니스를 알고 계신가요? 사장님을 우리의",
	"get-involved::get_involved_business_content_3":
		"비트코인 비즈니스 페이지로 안내하세요.",
	"get-involved::get_involved_description":
		"우리의 무료 리소스는 비트코인 채택 확산을 더 쉽게 만듭니다. 스티커, 전단지, 비즈니스용 “비트코인으로 결제하세요” 스티커, 그리고 누구나 기여할 수 있는 오픈 소스 코드베이스.",
	"get-involved::get_involved_header":
		"참여하여 비트코인을 널리 알리세요.",
	"get-involved::get_involved_intro_5":
		"당신은 그것을 바꾸는 데 도움이 될 수 있습니다. 비트코인이 가져다주는 희망을 주변 사람들에게 더 쉽게 전파할 수 있도록 무료 리소스를 만들었습니다.",
	"get-involved::get_involved_biz_stickers_note":
		"이미 비트코인을 받고 계신가요? 무료 “비트코인으로 결제하세요” 스티커로 고객에게 알리세요. 미국이나 캐나다의 어떤 주소로든 팩을 발송하거나, 전 세계 어디서든 직접 인쇄할 수 있습니다.",
	"get-involved::get_involved_card_biz_stickers_label":
		"“여기서 사용 가능” 스티커",
	"get-involved::get_involved_card_biz_stickers_source":
		"출처: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"비즈니스를 위한 무료 “비트코인으로 결제하세요” 스티커",
	"get-involved::get_involved_card_business_label":
		"비즈니스를 위한 비트코인",
	"get-involved::get_involved_card_business_source":
		"출처: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"비즈니스가 비트코인 결제를 시작하는 데 필요한 모든 것",
	"get-involved::get_involved_card_flyers_label": "인쇄용 전단지",
	"get-involved::get_involved_card_flyers_source":
		"출처: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"무료 비트코인 전단지 다운로드 및 인쇄",
	"get-involved::get_involved_card_github_label": "오픈 소스",
	"get-involved::get_involved_card_github_source":
		"출처: GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub에서 bitcoin.rocks에 기여하기",
	"get-involved::get_involved_card_stickers_label":
		"무료 스티커",
	"get-involved::get_involved_card_stickers_source":
		"출처: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"무료 비트코인 스티커 팩을 자택으로 받기",
	"get-involved::get_involved_flyers_content_1":
		"전단지는 비트코인을 커뮤니티에 소개하는 가장 쉬운 방법 중 하나입니다. 무료 인쇄용 비트코인 전단지를 다운로드하고 원하는 만큼 인쇄하여 커뮤니티 게시판, 카페, 모임, 사람들이 모이는 어디에든 붙이세요.",
	"get-involved::get_involved_flyers_content_2":
		"각 전단지에는 매력적인 제목과 호기심 많은 독자를 bitcoin.rocks로 안내하여 더 많이 배우게 하는 QR 코드가 포함되어 있습니다.",
	"get-involved::get_involved_flyers_content_3":
		"스티커와 달리 전단지는 전 세계 어디서든 주문형으로 인쇄할 수 있습니다 — 필요한 것은 프린터와 몇 분뿐입니다.",
	"get-involved::get_involved_flyers_header":
		"전단지를 인쇄하고 붙이세요",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks의 무료 인쇄용 비트코인 전단지 미리보기",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks는 MIT 라이선스 하에 제공되는 무료 오픈 소스 프로젝트입니다. 우리의 사명은 교육을 통해 비트코인 채택을 가속화하는 것입니다 — 우리 혼자서는 할 수 없습니다.",
	"get-involved::get_involved_github_content_2":
		"개발자, 디자이너, 작가, 번역가 등 누구나 기여할 수 있는 방법이 있습니다. 특히 전 세계 사람들이 모국어로 비트코인을 배울 수 있도록 콘텐츠를 더 많은 언어로 번역해 주는 기여자를 환영합니다.",
	"get-involved::get_involved_github_content_3":
		"리포지토리를 포크하고, 풀 리퀘스트를 열고, 이슈를 등록하거나, 별을 눌러 지원을 표시하세요. 모든 기여는 비트코인이 더 많은 사람에게 도달하는 데 도움이 됩니다.",
	"get-involved::get_involved_github_header":
		"GitHub에서 기여하기",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks의 무료 비트코인 텍스트 스티커 팩",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android 및 웹",
	"nostr/index::nostr_platform_web": "웹 브라우저",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr는 온라인 커뮤니케이션을 위한 새로운 분산형 프로토콜입니다 — 어떤 단일 기업도 통제하지 않고, 비트코인 zap이 기본 내장되어 있으며, 팔로워를 잃지 않고 클라이언트 간을 이동할 수 있습니다.",
	"nostr/index::nostr_amethyst_f1": "풍부한 기능과 커스터마이징",
	"nostr/index::nostr_amethyst_f2":
		"별도의 비트코인 지갑이 필요",
	"nostr/index::nostr_amethyst_f3": "100% 무료",
	"nostr/index::nostr_damus_f1":
		"익숙한 트위터 스타일 인터페이스",
	"nostr/index::nostr_damus_f2":
		"별도의 비트코인 지갑이 필요",
	"nostr/index::nostr_damus_f3": "100% 무료",
	"nostr/index::nostr_download_heading":
		"무료 Nostr 클라이언트 다운로드",
	"nostr/index::nostr_download_intro":
		"Nostr 클라이언트는 Nostr 네트워크에서 읽고 게시할 수 있는 무료 앱입니다. 모두 상호 운용 가능합니다 — 언제든지 클라이언트를 전환하고 팔로워와 콘텐츠를 유지할 수 있습니다.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr는 온라인으로 통신하기 위한 새로운 분산형 프로토콜입니다 — 어떤 단일 기업도 통제하지 않고, 비트코인 zap이 내장되어 있으며, 팔로워를 잃지 않고 앱 간을 이동할 수 있습니다.",
	"nostr/index::nostr_hero_title": "Nostr란 무엇인가?",
	"nostr/index::nostr_intro_c1":
		"Nostr는 이메일과 비슷합니다: 누구도 프로토콜을 소유하지 않고, 누구나 그 위에 앱을 만들 수 있으며, 가장 마음에 드는 앱을 선택할 수 있습니다. 트위터나 페이스북과 달리 검열, 플랫폼 추방, 노출 감소를 가할 수 있는 중앙집중식 기업이 없습니다.",
	"nostr/index::nostr_intro_c2":
		"아래는 Nostr가 왜 중요한지에 대한 짧은 버전과, 오늘 시작하는 데 필요한 모든 무료 Nostr 클라이언트입니다.",
	"nostr/index::nostr_iris_f1":
		"매우 간단 — 설치 불필요",
	"nostr/index::nostr_iris_f2":
		"테스트 계정으로 Nostr를 쉽게 사용해보는 방법",
	"nostr/index::nostr_iris_f3": "100% 무료",
	"nostr/index::nostr_learn_more_label": "더 깊이 알아보기",
	"nostr/index::nostr_learn_more_title":
		"nostr.how에서 Nostr에 대해 더 알아보기",
	"nostr/index::nostr_primal_f1": "추천하는 첫 클라이언트",
	"nostr/index::nostr_primal_f2":
		"비트코인 zap 지갑 내장",
	"nostr/index::nostr_primal_f3": "100% 무료",
	"nostr/index::nostr_s1": "플랫폼이 아닌 프로토콜",
	"nostr/index::nostr_s1_c1":
		"Nostr는 검열, 플랫폼 추방, 노출 감소에 대한 두려움 없이 온라인으로 통신할 수 있게 해주는 새로운 프로토콜입니다.",
	"nostr/index::nostr_s1_c2":
		"트위터나 페이스북 같은 플랫폼은 단일 기업이 통제하지만, Nostr 프로토콜은 누구도 통제하지 않습니다.",
	"nostr/index::nostr_s2": "이동의 자유",
	"nostr/index::nostr_s2_c1":
		"Nostr는 이메일과 비슷합니다. 누구도 이메일 프로토콜을 통제하지 않으며, 누구나 그 위에 클라이언트(Gmail, Hotmail 등)를 만들 수 있습니다.",
	"nostr/index::nostr_s2_c2":
		"Nostr 프로토콜도 누구도 통제하지 않으며, 누구나 그 위에 클라이언트(Damus, Amethyst 등)를 만들 수 있습니다.",
	"nostr/index::nostr_s2_c3":
		"특정 클라이언트의 동작이 마음에 들지 않으면, 팔로워나 콘텐츠를 잃지 않고 Nostr 계정을 다른 클라이언트로 매끄럽게 이동할 수 있습니다.",
	"nostr/index::nostr_s3": "비트코인이 내장되어 있습니다",
	"nostr/index::nostr_s3_c1":
		"비트코인은 Nostr 프로토콜에 기본적으로 내장되어 있습니다. 마음에 드는 콘텐츠를 보면, 감사의 표시로 비트코인을 쉽게 zap할 수 있습니다!",
	"nostr/index::nostr_s3_c2":
		"트위터나 페이스북 같은 중앙집중식 플랫폼에서는 중앙집중식 기업이 당신의 콘텐츠로 돈을 법니다. 그러나 Nostr 같은 개방형 프로토콜에서는 당신이 자신의 콘텐츠로 돈을 법니다.",
	"nostr/index::sources_damus": "Damus — iPhone Nostr 클라이언트",
	"nostr/index::sources_iris":
		"Iris — 브라우저 기반 Nostr 클라이언트",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr란 무엇인가?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — 오픈 소스 사양",
	"nostr/index::sources_primal":
		"Primal — 비트코인 zap 지갑이 내장된 Nostr 클라이언트",
	"nostr/index::what_is_nostr": "Nostr란 무엇인가?",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"이 비트코인 전단지를 인쇄하고 게시하는 방법",
	"flyers::flyers_hero_subtitle":
		"무료 인쇄용 비트코인 전단지. 공공장소에 게시하여 더 많은 사람이 비트코인에 대해 배우도록 도와주세요.",
	"flyers::flyers_hero_title":
		"비트코인 전단지를 인쇄하고 게시하기",
	"flyers::flyers_next_get_stickers": "널리 알리기",
	"flyers::flyers_next_get_stickers_desc":
		"무료 비트코인 스티커 팩 주문하기",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — 지갑 선택하기",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — 메탈 비트코인 시드 보관 리뷰",
	"wallets::wallets_lightning_cta_label": "Lightning 네트워크",
	"wallets::sources_blockstream_green":
		"Blockstream Green — 자기 보관형 비트코인 지갑",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — 비트코인 하드웨어 지갑",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 하드웨어 지갑",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q 하드웨어 지갑",
	"wallets::sources_passport":
		"Foundation Devices — Passport 하드웨어 지갑",
	"wallets::sources_seedsigner":
		"SeedSigner — 오픈 소스 DIY 비트코인 서명 장치",
	"wallets::wallets_grid_heading":
		"인기 있는 비트코인 지갑",
	"wallets::wallets_header_subtitle":
		"지갑을 선택하고, 키를 보호하고, 비트코인을 완전히 통제하기 위한 단계별 가이드.",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "우리의",
	"lightning::lightning_grid_heading":
		"인기 있는 Lightning 지갑",
	"lightning::lightning_hardware_cta_label":
		"하드웨어 지갑",
	"lightning::lightning_header_subtitle":
		"Lightning은 1센트 미만의 수수료로 몇 초 만에 비트코인을 보낼 수 있게 해줍니다 — 사용할 비트코인 양에 맞는 트레이드오프의 지갑을 선택하세요.",
	"lightning::lightning_s1_c4_end": "에서 자세히 알아보세요.",
	"lightning::lightning_s1_c4_link":
		"비트코인 하드웨어 지갑 가이드",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning 지갑",
	"lightning::sources_breez_lightning":
		"Breez — 자기 보관형 Lightning 지갑",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning 네트워크 문서",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — 커스터디얼 Lightning 지갑",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "비트코인 구매 방법",
	"buy::buy_step_1_header": "국가 선택",
	"buy::buy_step_2_header": "결제 수단 선택",
	"buy::buy_step_3_header": "구매 옵션",
	"buy::buy_step_4_header": "비트코인을 안전하게 보관하기",
	"buy::buy_header_subtitle":
		"첫 번째 비트코인을 구매하기 위한 간단한 단계별 가이드.",
	"buy::buy_howto_name": "비트코인 구매 방법",
	"buy::buy_meta_description":
		"우리의 단계별 가이드로 비트코인을 안전하게 구매하는 방법을 알아보세요. 국가와 결제 방법을 선택하여 당신에게 가장 적합한 비트코인 구매 옵션을 찾으세요.",
	"buy::buy_step_1_eyebrow": "1단계",
	"buy::buy_step_2_eyebrow": "2단계",
	"buy::buy_step_3_eyebrow": "3단계",
	"buy::buy_step_4_eyebrow": "4단계",
	"buy::buy_storage_cta_label": "다음 단계",
	"buy::sources_bisq":
		"Bisq — 분산형 P2P 비트코인 거래소",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — 전 세계 비트코인 ATM 디렉터리",
	"buy::sources_kraken": "Kraken — 잘 알려진 비트코인 거래소",
	"buy::sources_relai":
		"Relai — 스위스 비트코인 전용 자기 보관 앱",
	"buy::sources_river":
		"River — 비트코인 전용 매수, 채굴 및 보관",
	"buy::sources_strike_lightning":
		"Strike — Lightning 네트워크 지원으로 비트코인 구매",
	"buy::sources_swan":
		"Swan Bitcoin — 비트코인 전용 정액 분할 매수",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"미국 연방준비경제데이터(FRED) — 모든 도시 소비자 대상 소비자물가지수",
	"compound-inflation-calculator::sources_fred_m1":
		"미국 연방준비경제데이터(FRED) — M1 통화공급량",
	"compound-inflation-calculator::cic_calculator_heading":
		"인플레이션 격차 계산하기",
	"compound-inflation-calculator::cic_cta_label": "다음 단계",
	"compound-inflation-calculator::cic_hero_subtitle":
		"인플레이션을 따라잡으려면 급여가 얼마나 올라야 하는지 확인하세요.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"다른 주제 둘러보기",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"비트코인이 화폐, 자유, 에너지 등과 어떻게 연결되는지 확인하세요.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"인플레이션 작동 방식 알아보기",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "비트코인",
	"stickers::stickers_flyers_link_before":
		"하는 김에, 직접",
	"stickers::stickers_instructions_1":
		"우편 주소를 입력해 주시면 무료 비트코인 스티커 팩을 우편으로 보내드립니다. 스티커는 평범한 흰 봉투로 발송됩니다.",
	"stickers::stickers_btn_choose_pack":
		"이 팩 선택하기",
	"stickers::stickers_bulk_c1":
		"몇 장 이상의 스티커가 필요하신가요?",
	"stickers::stickers_bulk_c2":
		"우리가 사용하는 같은 인쇄소에서 대량 주문하세요",
	"stickers::stickers_bulk_c3":
		" — 많이 살수록 스티커 한 장당 가격이 저렴해집니다.",
	"stickers::stickers_bulk_cta": "스티커 대량 주문하기",
	"stickers::stickers_bulk_header": "스티커 대량 주문하기",
	"stickers::stickers_hero_subtitle":
		"무료 비트코인 스티커 팩을 주문하고 공공장소에 붙여 더 많은 사람이 비트코인에 대해 배우도록 도와주세요.",
	"stickers::stickers_hero_title":
		"무료 비트코인 스티커",
	"stickers::stickers_intro_c1":
		"우리의 사명은 공공장소에 비트코인 스티커를 붙여 더 많은 사람을 오렌지필 하도록 돕는 것입니다. 모든 스티커에는",
	"stickers::stickers_intro_c3": "인플레이션",
	"stickers::stickers_intro_c4":
		"아래에서 스티커 팩을 선택하고 받는 방법을 결정하세요 — 미국이나 캐나다에 무료 팩을 우편으로 보내드리거나, 전 세계 어디서든 직접 인쇄할 수 있습니다.",
	"stickers::stickers_mail_header":
		"무료 스티커를 우편으로 보내드립니다",
	"stickers::stickers_next_print_flyers": "계속 알리기",
	"stickers::stickers_next_print_flyers_desc":
		"공공장소에 게시할 무료 비트코인 전단지 인쇄하기",
	"stickers::stickers_option_bulk":
		"📦 글로벌 — 대량 주문",
	"stickers::stickers_option_canada":
		"🇨🇦 캐나다 — 무료 우편",
	"stickers::stickers_option_print":
		"🌍 글로벌 — 직접 인쇄",
	"stickers::stickers_option_usa":
		"🇺🇸 미국 — 무료 우편",
	"stickers::stickers_print_c1":
		"어디에 살고 있든 직접 스티커를 인쇄하여 참여할 수 있습니다. 아래에서 언어를 클릭하면 스티커 파일과 인쇄 안내를 다운로드할 수 있습니다.",
	"stickers::stickers_print_c2":
		"모든 스티커가 모든 언어로 제공되는 것은 아닙니다.",
	"stickers::stickers_print_header":
		"직접 스티커 파일 인쇄하기",
	"stickers::stickers_request_c1":
		"모국어 스티커 파일을 요청하려면 아래 양식을 작성하세요. 준비되는 대로 알려드리겠습니다.",
	"stickers::stickers_request_header":
		"당신의 언어가 보이지 않나요?",
	"stickers::stickers_share_c2":
		"아무 Nostr 클라이언트에서",
	"stickers::stickers_share_c3":
		"를 검색하여 팔로우하세요.",
	"stickers::stickers_signs_pack_description":
		"비트코인 메시지가 담긴 경고, 위험, 주의 스타일의 표지판 — 시선을 끌고 사람들이 멈춰 서서 읽도록 디자인되었습니다.",
	"stickers::stickers_step_1_description":
		"각 팩에는 비트코인을 알려주는 QR 코드가 있는 다양한 비트코인 스티커가 들어 있습니다.",
	"stickers::stickers_step_1_eyebrow": "1단계",
	"stickers::stickers_step_1_header":
		"스티커 팩 선택하기",
	"stickers::stickers_step_2_description":
		"미국과 캐나다 주소로는 무료 팩을 발송합니다. 전 세계 다른 곳에서는 직접 인쇄하거나 대량 주문할 수 있습니다.",
	"stickers::stickers_step_2_eyebrow": "2단계",
	"stickers::stickers_step_2_header":
		"스티커를 어떻게 받으시겠습니까?",
	"stickers::stickers_text_pack_description":
		"공공장소에서 호기심을 자극하도록 디자인된 비트코인 슬로건과 한 줄 문구의 조합.",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"대량 주문하기",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr에서 공유",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr란 무엇인가?",
	"sticker-success::sticker_success_bulk_header":
		"스티커가 더 필요하신가요?",
	"sticker-success::sticker_success_hero_title":
		"스티커가 발송되었습니다 🎉",
	"sticker-success::sticker_success_share_header":
		"스티커를 붙인 곳을 공유하세요",
	"sticker-success::sticker_success_tips_header":
		"스티커를 붙이기 좋은 곳",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"요청을 받았습니다 🎉",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"이 비트코인 스티커 파일로 직접 비트코인 스티커를 인쇄하세요.",
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
		`translate-rest-part2 (ko): filled ${filled}, already-done ${skipped}`,
	);
}

main();
