/**
 * Creates Korean (ko) translation files for all business/ pages.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ko';
const today = '2026-04-04';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "비트코인은 비즈니스에 좋습니다",
	"biz_header": "비트코인은 비즈니스에 좋습니다",
	"biz_s1": "최소 금액 없는 낮은 수수료",
	"biz_s1_c1": "비트코인을 사용하면 현금처럼 고객으로부터 직접 결제를 받을 수 있습니다. 비트코인 네트워크는 높은 수수료를 부과하는 은행이나 신용카드 회사 같은 중개자 없이 운영됩니다.",
	"biz_s2": "즉시 결제",
	"biz_s2_c1": "현금처럼 비트코인 결제는 즉시 정산됩니다. 신용카드 회사나 은행의 입금을 기다릴 필요 없이 즉시 자금에 접근할 수 있습니다.",
	"biz_s3": "차지백이나 사기 거래 없음",
	"biz_s3_c1": "비트코인 결제는 고객과 직접 이루어지므로 차지백으로 돈을 빼앗길 걱정이 없습니다.",
	"biz_s3_c2": "위조 비트코인은 비트코인 네트워크에서 전송할 수 없으므로, 비즈니스에 해를 끼치는 사기 거래를 걱정할 필요가 없습니다.",
	"biz_s4": "더 많은 고객 확보",
	"biz_s4_c1": "수백만 명이 비트코인을 보유하고 있으며, 비트코인을 받아주는 곳에서 사용하고 싶어합니다.",
	"biz_s4_c2": "비트코인을 받기만 하면 비트코인 가맹점 지도에 등록되어 새로운 비트코인 고객에게 무료로 노출됩니다.",
	"biz_s4_c3": "비트코인 수납은 100% 무료입니다. 계약이나 숨겨진 수수료가 없습니다."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "비트코인이 비즈니스에 좋은 이유 알아보기",
	"why_header": "비트코인은 비즈니스에 좋습니다",
	"why_good_for_you": "비트코인은 여러분에게도 좋습니다!",
	"why_learn_more_lowercase": "자세히 알아보기.",
	"why_s1": "비트코인에는 인플레이션이 없습니다",
	"why_s1_c1": "인플레이션은 더 많은 돈이 인쇄되거나 무에서 만들어질 때 발생합니다. 이로 인해 시간이 지남에 따라 돈의 가치가 떨어집니다.",
	"why_s1_c2": "비트코인은 고정된 공급량이 있어 아무도 비트코인을 추가로 발행할 수 없습니다.",
	"why_s2": "비트코인에는 뱅크런이 없습니다",
	"why_s2_c1": "지난 몇 년간 뱅크런으로 여러 미국 은행이 파산했습니다.",
	"why_s2_c2": "은행은 여러분의 돈을 금고에 보관하는 것이 아니라 투자하고 대출합니다. 그 투자가 실패하면 여러분에게 돌려줄 돈이 부족해집니다.",
	"why_s2_c3": "FDIC 보험 기금은 보험 대상 예금 100달러당 겨우 1달러밖에 없습니다.",
	"why_s3": "비트코인은 허가가 필요 없습니다",
	"why_s3_c1": "전통적인 금융 네트워크와 달리 비트코인을 사용하는 데 허가가 필요하지 않습니다.",
	"why_s3_c2": "즉, 어떤 이유로든 아무도 비트코인 사용을 막을 수 없습니다. 검열이나 압수의 두려움 없이 사용할 수 있는 최초의 금융 네트워크입니다.",
	"why_s4": "비트코인은 더 나은 세상을 만들고 있습니다",
	"why_s4_c1": "비트코인은 종종 오해받는 기술이지만, 더 나은 세상을 만들고 있습니다.",
	"why_s4_c2": "비트코인은 인권 활동가들이 자유를 위해 싸울 수 있게 하고, 전 세계 메탄 배출을 줄이며, 국립공원을 구하고, 그 밖에도 많은 일을 하고 있습니다."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "비즈니스에서 비트코인 결제 받기",
	"guide_header": "비즈니스에서 비트코인을 받을 준비가 되셨나요?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "비트코인 수납에 관한 자주 묻는 질문",
	"faq_description": "비즈니스에서 비트코인 결제를 받는 것에 대해 궁금한 점이 있으신가요?",
	"faq_header": "비트코인 결제 수납에 대해 궁금한 점이 있으신가요?",
	"faq_s1": "비트코인이란?",
	"faq_s1_c1": "비트코인에는 두 가지 측면이 있습니다: 디지털 화폐와 컴퓨터 네트워크입니다.",
	"faq_s1_c2": "비트코인 네트워크를 사용하여 비트코인(디지털 화폐)을 다른 사람에게 직접 보낼 수 있습니다.",
	"faq_s1_c3": "비트코인 네트워크는 은행이나 신용카드 회사 같은 중개자나 중앙 기관 없이 운영되므로 그러한 거래 수수료를 피할 수 있습니다.",
	"faq_s1_c4": "비트코인 거래는 빠르게 최종 정산되며(10분), 차지백이 불가능하므로 돈이 안전하다는 것을 확신하고 안심할 수 있습니다.",
	"faq_s2": "비트코인이 비즈니스에 어떤 이점이 있나요?",
	"faq_s2_c1": "비트코인을 사용하면 더 낮은 수수료로 결제를 받고 더 많은 고객을 확보할 수 있습니다. 비트코인 결제는 최소 금액 없이 낮은 수수료로, 즉시 정산되며 차지백이나 사기 거래의 영향을 받지 않습니다.",
	"faq_s2_c2": "비트코인을 수납하는 것은 무료이며, 비트코인 가맹점 지도에 비즈니스를 등록하여 비트코인 사용자들이 쉽게 찾을 수 있게 합니다.",
	"faq_s2_c3": "비트코인이 비즈니스에 좋은 모든 이유 보기.",
	"faq_s3": "비트코인 결제를 어떻게 받나요?",
	"faq_s3_c1": "비트코인 결제를 받는 데 필요한 것은 무료 비트코인 지갑뿐입니다.",
	"faq_s3_c2": "지갑 가이드로 빠르고 쉽게 설정하고 오늘부터 비트코인 수납의 혜택을 누리세요!",
	"faq_s3_c3": "지갑 가이드 보기",
	"faq_s4": "받은 비트코인을 현지 통화로 환전할 수 있나요?",
	"faq_s4_c1": "네! 하이브리드 지갑을 사용하면 받은 비트코인을 결제 수령과 동시에 자동으로 현지 통화로 환전할 수 있습니다.",
	"faq_s4_c2": "지갑 가이드로 빠르고 쉽게 설정할 수 있습니다.",
	"faq_s4_c3": "또한 받은 결제의 일부를 비트코인으로 보유할 수도 있습니다. 비트코인으로 저축하면 많은 이점이 있습니다:",
	"faq_s4_c4": "비트코인은 완전 준비금 금융 시스템입니다.",
	"faq_s4_c5": "비트코인에는 인플레이션이 없습니다.",
	"faq_s4_c6": "이러한 이점들로 비트코인은 장기적으로 돈을 저축하는 훌륭한 방법입니다.",
	"faq_s4_c7": "비트코인 결제를 모두 달러로 환전하더라도, 훨씬 낮은 수수료로 결제를 받으면서 더 많은 잠재 고객에게 도달할 수 있는 이점이 있습니다.",
	"faq_s5": "대면으로 비트코인 결제를 받을 수 있나요?",
	"faq_s5_c1": "네! 비트코인 지갑을 사용하여 대면 비트코인 결제를 쉽게 받을 수 있습니다.",
	"faq_s5_c2": "지갑 가이드에서 비즈니스에 적합한 비트코인 지갑을 선택하세요.",
	"faq_s5_c3": "지갑 가이드 보기",
	"faq_s6": "온라인으로 비트코인 결제를 받을 수 있나요?",
	"faq_s6_c1": "네! 기존 온라인 스토어에서 쉽게 비트코인 결제를 받을 수 있습니다.",
	"faq_s6_c2": "자세한 내용은 지갑 가이드를 확인하세요.",
	"faq_s7": "비트코인을 받는다는 것을 고객에게 어떻게 알리나요?",
	"faq_s7_c1": "무료 「Bitcoin Accepted Here」 스티커를 제공합니다. 비즈니스에 부착하여 비트코인 결제를 받는다는 것을 고객에게 알리세요.",
	"faq_s7_c2": "여기서 스티커를 요청하세요.",
	"faq_s7_c3": "또한 비트코인 가맹점 지도에 무료로 비즈니스를 등록하여, 비트코인을 받는 곳에서 사용하려는 수백만 비트코인 사용자에게 알릴 수 있습니다.",
	"faq_s7_c4": "지금 등록하기.",
	"faq_s8": "비트코인을 받으면 어떻게 고객이 늘어나나요?",
	"faq_s8_c1": "비트코인을 받는 비즈니스에서 사용하고 싶어하는 수백만 명의 비트코인 사용자가 있습니다.",
	"faq_s8_c2": "비트코인 결제를 받기만 하면 무료 비트코인 가맹점 지도에 등록되어 새로운 잠재 고객에게 노출됩니다.",
	"faq_s8_c3": "지금 등록하기.",
	"faq_s9": "비트코인 수납에 비용이 드나요?",
	"faq_s9_c1": "비즈니스에서 비트코인을 수납하는 것은 100% 무료입니다. 계약이나 숨겨진 수수료가 없습니다.",
	"faq_s9_c2": "지갑 가이드를 확인하고 오늘부터 비트코인 결제를 시작하세요."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "비트코인 결제 수납 방법",
	"wallets_header": "무료 비트코인 지갑을 받고 비트코인 결제를 시작하세요",
	"wallets_intro_1": "모든 비트코인 지갑은 상호 운용이 가능하므로 고객은 어떤 지갑을 사용하든 비트코인으로 결제할 수 있습니다.",
	"wallets_intro_2": "비트코인 전용 지갑:",
	"wallets_intro_3": "중개자 없이 비트코인의 모든 이점을 활용하는 순수 비트코인 지갑입니다: 낮은 수수료, 차지백이나 사기 거래 없음.",
	"wallets_intro_4": "하이브리드 지갑:",
	"wallets_intro_5": "고객으로부터 결제를 받는 동시에 비트코인의 원하는 비율을 달러로 환전할 수 있습니다. 수수료는 신용카드보다 낮지만 순수 비트코인 결제보다는 높습니다.",
	"wallets_intro_6": "둘 다 비트코인을 받는 훌륭한 방법입니다. 사용할 지갑은 비즈니스의 규모와 유형에 따라 다릅니다.",
	"wallets_choice_sole": "개인 사업자용 지갑",
	"wallets_choice_multiple": "다수 직원 비즈니스용 지갑",
	"wallets_choice_online": "온라인 비즈니스용 지갑",
	"wallets_choice_invoice": "송장 기반 비즈니스용 지갑",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "기존 Square POS 단말기나 온라인 스토어 연동으로 비트코인 결제를 받을 수 있습니다. 비트코인 결제 수납이 이렇게 쉬웠던 적이 없습니다.",
	"wallets_feature_bitcoin_only": "비트코인 전용 지갑",
	"wallets_feature_no_info": "정보 입력 불필요",
	"wallets_feature_in_person": "대면 결제만 가능",
	"wallets_feature_settles_bitcoin": "100% 비트코인으로 정산",
	"wallets_feature_hybrid": "하이브리드 지갑",
	"wallets_feature_info": "비즈니스 정보 입력 필요",
	"wallets_feature_in_person_online": "대면 및 온라인 결제",
	"wallets_feature_settles_both": "비트코인 및 달러로 정산",
	"wallets_feature_multiple_employees": "다수 직원 지원 (BPT)",
	"wallets_feature_self_hosted": "셀프 호스팅 = 수수료 0%",
	"wallets_feature_online_store": "온라인 스토어 연동",
	"wallets_feature_invoicing": "무료 송장 소프트웨어",
	"wallets_get_wallet": "지갑 받기"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "비트코인 비즈니스 회계 가이드",
	"accounting_description": "비즈니스 회계에서 비트코인 결제를 올바르게 처리하는 방법을 알아보세요.",
	"accounting_header": "비트코인 회계 가이드",
	"accounting_s1_c1": "비트코인 수납에는 낮은 수수료로 결제를 받고 더 많은 고객을 확보하는 등 많은 이점이 있습니다.",
	"accounting_s1_c2": "지갑 가이드의 하이브리드 지갑을 사용하여 받은 비트코인의 100%를 자동으로 달러로 환전하는 경우, 현재의 회계 처리를 변경할 필요가 없습니다.",
	"accounting_s1_c3": "지갑 가이드 보기.",
	"accounting_s1_c4": "그러나 받은 비트코인의 일부를 비트코인으로 보유하는 경우, 회계를 위해 몇 가지 세부 사항을 기록해야 합니다. 처음에는 어렵게 느껴질 수 있지만, 실제로는 매우 간단합니다.",
	"accounting_s1_c5": "참고: 이 가이드는 정보 제공 목적으로만 제공되며, 세무 조언으로 간주되지 않습니다.",
	"accounting_s1_c6": "세무 조언이 필요한 경우, 비트코인 회계 전문 회계법인 Satoshi Pacioli Accounting Services를 강력히 추천합니다.",
	"accounting_s2": "취득원가 추적",
	"accounting_s2_c1": "취득원가 추적은 달러 회계와 비트코인 회계의 가장 큰 차이점입니다. 비즈니스를 비트코인 기반으로 운영하더라도 세금 신고 시 각 거래의 달러 가치를 보고해야 합니다.",
	"accounting_s2_c2": "QuickBooks를 사용하는 경우, Bitcoin Sync 플러그인을 사용하여 자동으로 처리할 수 있습니다.",
	"accounting_s2_c3": "QuickBooks를 사용하지 않는 경우, 비트코인 회계 전문인 Satoshi Pacioli Accounting Services를 추천합니다.",
	"accounting_s2_c4": "수동으로 하는 경우, 받은 비트코인의 양과 해당 날짜의 비트코인 거래 달러 가치를 기록하면 됩니다.",
	"accounting_s2_c5": "비트코인의 현재 달러 가격은 여기서 확인할 수 있습니다.",
	"accounting_s2_c6": "이 정보를 Excel 스프레드시트에 기록하여 회계사에게 전달하세요.",
	"accounting_s2_c7": "이 데이터를 Excel에 자동으로 가져올 수도 있습니다.",
	"accounting_s2_c8": "과거 날짜의 비트코인 달러 가격도 확인할 수 있으므로 매일 할 필요는 없습니다.",
	"accounting_s3": "비트코인 사용 또는 매도",
	"accounting_s3_c1": "지갑 가이드의 하이브리드 지갑을 사용하여 받은 비트코인의 100%를 자동으로 달러로 환전하는 경우, 현재의 회계 처리를 변경할 필요가 없습니다.",
	"accounting_s3_c2": "지갑 가이드 보기.",
	"accounting_s3_c3": "일정 기간 보유 후 비트코인의 일부를 사용하거나 매도하는 경우, 매도 가격을 취득원가 추적 Excel 스프레드시트에 추가하면 됩니다.",
	"accounting_s3_c4": "예를 들어, 1월 1일에 100달러 상당의 비트코인을 받고 2월 1일에 110달러의 새 가치로 매도하거나 사용한 경우, 회계에 10달러의 자본이득을 기록해야 합니다.",
	"accounting_s3_c5": "반대의 경우도 마찬가지입니다. 예를 들어, 1월 1일에 100달러 상당의 비트코인을 받고 2월 1일에 90달러의 새 가치로 매도하거나 사용한 경우, 회계에 10달러의 자본손실을 기록해야 합니다.",
	"accounting_s4": "추가 도움이 필요합니다",
	"accounting_s4_c1": "비트코인을 비즈니스 회계에 통합하는 데 추가 도움이 필요한 경우, 비트코인 회계 전문인 Satoshi Pacioli Accounting Services를 강력히 추천합니다.",
	"accounting_s4_c2": "Satoshi Pacioli Accounting Services에 대해 자세히 알아보기."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "비트코인 가맹점 지도 - 무료로 비즈니스 등록",
	"maps_header": "비트코인 가맹점 지도에 등록하여 더 많은 고객을 확보하세요",
	"maps_request_details": "아래에 비즈니스 정보를 입력하면 무료로 비트코인 가맹점 지도에 등록해 드립니다. 이를 통해 비트코이너들이 여러분의 비즈니스를 찾아 비트코인을 사용할 수 있습니다!",
	"maps_view": "여기서 지도를 확인하세요."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "1~2주 이내에 비트코인 가맹점 지도에 비즈니스가 등록됩니다.",
	"kit_success_2": "여기서 지도를 확인하세요."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "비트코인 비즈니스 키트",
	"kit_header": "비트코인 비즈니스 키트를 직접 인쇄하세요",
	"kit_request": "무료 키트 요청",
	"kit_request_details": "각 비트코인 비즈니스 키트에는 지역 비즈니스에 비트코인 수납을 쉽게 소개할 수 있는 2개의 브로셔가 포함되어 있습니다.",
	"kit_country_global_print": "글로벌 — 직접 인쇄하기",
	"kit_enter_address": "주소를 입력하시면 무료 비트코인 비즈니스 키트를 흰색 봉투로 보내드립니다. 주소 데이터는 키트 발송 후 삭제됩니다.",
	"kit_print_details": "어디에 살든 직접 브로셔를 인쇄하여 참여할 수 있습니다! 인쇄를 원하지 않는 경우 디지털 비즈니스 키트를 비즈니스에 보낼 수도 있습니다.",
	"kit_view_files": "파일 보기",
	"kit_digital_kit": "디지털 키트",
	"kit_resources": "각 키트에는 이러한 무료 리소스 링크가 포함되어 있습니다"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "비트코인 비즈니스 키트는 1~2주 이내에 흰색 봉투로 배송됩니다."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "「Bitcoin Accepted Here」 스티커",
	"stickers_header": "무료 「BITCOIN ACCEPTED HERE」 스티커 받기",
	"stickers_request": "무료 스티커 받기",
	"stickers_request_details": "이 무료 「Bitcoin Accepted Here」 스티커로 비트코인 결제를 받는다는 것을 고객에게 알리세요.",
	"stickers_country_global_print": "글로벌 — 직접 인쇄하기",
	"stickers_request_instructions": "흰색 봉투로 「Bitcoin Accepted Here」 스티커 3장을 보내드립니다. 비즈니스에 3장 이상 필요한 경우 여러 번 요청해 주세요. 주소 데이터는 스티커 발송 후 삭제됩니다.",
	"stickers_print_details": "어디에 살든 직접 「Bitcoin Accepted Here」 스티커를 인쇄할 수 있습니다! 아래 언어를 클릭하여 스티커 파일과 인쇄 방법을 확인하세요.",
	"stickers_request_language": "원하는 언어가 없나요? 아래 양식을 작성하여 원하는 언어의 「Bitcoin Accepted Here」 스티커 파일을 요청하세요."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "스티커는 1~2주 이내에 흰색 봉투로 배송됩니다. 각 봉투에는 3장의 스티커가 들어있습니다. 비즈니스에 3장 이상 필요한 경우 추가 팩을 요청해 주세요!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "3~4주 이내에 스티커 파일을 제작하여 공개합니다. 기다려 주셔서 감사합니다!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "비트코인 비즈니스 키트를 직접 인쇄하기",
	"english_bbk_files_description": "여기서 브로셔 파일을 다운로드하세요.",
	"english_header": "영어 비트코인 비즈니스 키트 브로셔 인쇄하기"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "영어 「Bitcoin Accepted Here」 스티커 파일",
	"english_biz_sticker_files_description": "영어 스티커 파일을 다운로드하여 직접 Bitcoin Accepted Here 스티커를 인쇄하세요.",
	"english_header": "영어 「BITCOIN ACCEPTED HERE」 스티커 파일 다운로드"
});

console.log('\nDone! Business files created for Korean (ko).');
