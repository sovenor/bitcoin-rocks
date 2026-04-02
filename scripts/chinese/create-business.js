/**
 * Creates Mandarin Chinese (zh) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'zh';
const today = '2026-04-02';

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
	"bitcoin_is_good_for_business": "比特币对企业有利",
	"biz_header": "比特币对企业有利",
	"biz_s1": "低手续费，无最低限额",
	"biz_s1_c1": "比特币允许您直接从客户那里接收付款，就像现金一样。比特币网络无需银行和信用卡公司等收取高额费用的中间人即可运行。",
	"biz_s2": "即时结算",
	"biz_s2_c1": "与现金一样，比特币付款立即结算。您不必等待信用卡公司或银行付款。相反，您可以立即使用您的资金。",
	"biz_s3": "无退款或欺诈",
	"biz_s3_c1": "由于比特币付款直接在您和客户之间进行，没有人可以通过退款拿走您的钱。",
	"biz_s3_c2": "假比特币无法在比特币网络上发送，这意味着您永远不必担心可能给您的企业造成损失的欺诈交易。",
	"biz_s4": "获得更多客户",
	"biz_s4_c1": "数百万人拥有比特币，并希望在接受比特币的商家消费。",
	"biz_s4_c2": "只需接受比特币，您的企业就可以在比特币商户地图上列出，免费获得新客户的曝光。",
	"biz_s4_c3": "接受比特币100%免费。无合同，无隐藏费用。"
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "了解为什么比特币对企业有利",
	"why_header": "比特币对企业有利",
	"why_good_for_you": "比特币对您也有利！",
	"why_learn_more_lowercase": "了解更多。",
	"why_s1": "比特币没有通胀",
	"why_s1_c1": "当更多的货币被凭空印刷或创造出来时，就会发生通胀。这导致您的钱随时间推移而贬值。",
	"why_s1_c2": "比特币有固定供应量，这意味着没有人可以印刷更多的比特币。",
	"why_s2": "比特币没有银行挤兑",
	"why_s2_c1": "近年来，多家美国银行因银行挤兑而倒闭。",
	"why_s2_c2": "银行不仅仅是保管您的钱，而是将其投资和借出。如果这些投资表现不佳，他们就没有足够的钱还给您。",
	"why_s2_c3": "而FDIC保险基金每承保100美元存款只有1美元。",
	"why_s3": "比特币无需许可",
	"why_s3_c1": "与传统金融网络不同，比特币无需许可即可使用。",
	"why_s3_c2": "这意味着没有人可以以任何理由阻止您使用比特币。它是第一个您可以使用而无需担心审查或没收的金融网络。",
	"why_s4": "比特币正在构建一个更美好的世界",
	"why_s4_c1": "比特币是一项被误解的技术，它正在构建一个更美好的世界。",
	"why_s4_c2": "比特币使人权活动家能够争取自由，减少了全球甲烷排放，拯救了国家公园，等等。"
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "在您的企业接受比特币付款",
	"guide_header": "准备好在您的企业接受比特币了吗？"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "关于接受比特币的常见问题",
	"faq_description": "对在您的企业接受比特币付款有疑问吗？",
	"faq_header": "对接受比特币付款有疑问吗？",
	"faq_s1": "什么是比特币？",
	"faq_s1_c1": "比特币是两样东西：数字货币和计算机网络。",
	"faq_s1_c2": "您可以使用比特币网络直接向他人发送比特币（数字货币）。",
	"faq_s1_c3": "比特币网络在没有银行或信用卡公司等中间人或中央权威的情况下运行，因此您可以避免他们的交易费用。",
	"faq_s1_c4": "比特币交易快速达到最终结算（10分钟），且永远无法被撤销，因此您可以安心地知道您的钱就是您的钱。",
	"faq_s2": "比特币如何使我的企业受益？",
	"faq_s2_c1": "比特币使您能够以更低的费用接受付款并获得更多客户。比特币付款费用低、无最低限额、即时结算，且不受退款和欺诈的影响。",
	"faq_s2_c2": "接受比特币是免费的，它允许您将企业列在比特币商户地图上，以便比特币用户轻松找到您。",
	"faq_s2_c3": "查看比特币对企业有利的所有方式。",
	"faq_s3": "我如何接受比特币付款？",
	"faq_s3_c1": "接受比特币付款只需要一个免费的比特币钱包。",
	"faq_s3_c2": "我们的钱包指南将帮助您快速轻松地设置，以便您今天就能享受接受比特币的好处！",
	"faq_s3_c3": "查看钱包指南",
	"faq_s4": "我可以将收到的比特币付款兑换成本地货币吗？",
	"faq_s4_c1": "可以！使用混合钱包，您可以在收到比特币付款后立即自动将其兑换为本地货币。",
	"faq_s4_c2": "我们的钱包指南将帮助您快速轻松地设置。",
	"faq_s4_c3": "您也可以选择保留部分收到的比特币付款。以比特币储蓄有很多好处：",
	"faq_s4_c4": "比特币是全额准备金的金融系统。",
	"faq_s4_c5": "比特币没有通胀。",
	"faq_s4_c6": "这些好处使比特币成为长期储蓄的绝佳方式。",
	"faq_s4_c7": "即使您选择将所有比特币付款兑换成美元，您仍然可以享受以更低费用接受付款和接触更多潜在客户的好处。",
	"faq_s5": "我可以亲自接受比特币付款吗？",
	"faq_s5_c1": "可以！使用比特币钱包亲自接受比特币付款非常简单。",
	"faq_s5_c2": "我们的钱包指南将帮助您选择最适合您企业的钱包。",
	"faq_s5_c3": "查看钱包指南",
	"faq_s6": "我可以在线接受比特币付款吗？",
	"faq_s6_c1": "可以！在您现有的在线商店接受比特币付款非常简单。",
	"faq_s6_c2": "查看我们的钱包指南了解更多信息。",
	"faq_s7": "如何让客户知道我接受比特币？",
	"faq_s7_c1": "我们提供免费的「此处接受比特币」贴纸，您可以在企业中展示，让客户知道您接受比特币。",
	"faq_s7_c2": "点击此处订购贴纸。",
	"faq_s7_c3": "您还可以免费将企业列在比特币商户地图上，让数百万想要在接受比特币的企业消费的比特币用户看到您。",
	"faq_s7_c4": "立即登记。",
	"faq_s8": "接受比特币如何帮我获得更多客户？",
	"faq_s8_c1": "有数百万比特币用户想要在接受比特币的企业消费。",
	"faq_s8_c2": "只需接受比特币付款，您的企业就可以在免费的比特币商户地图上列出，获得新潜在客户的曝光。",
	"faq_s8_c3": "立即登记。",
	"faq_s9": "接受比特币需要多少钱？",
	"faq_s9_c1": "在您的企业接受比特币100%免费。无合同，无隐藏费用。",
	"faq_s9_c2": "查看我们的钱包指南，今天就开始接受比特币付款。"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "比特币商业记账指南",
	"accounting_description": "了解如何在企业记账中正确处理比特币付款。",
	"accounting_header": "比特币记账指南",
	"accounting_s1_c1": "接受比特币有很多好处，例如以更低的费用接受付款和获得更多客户。",
	"accounting_s1_c2": "如果您使用我们钱包指南中的混合钱包，并自动将收到的100%比特币兑换成美元，则无需更改您现有的记账方式。",
	"accounting_s1_c3": "查看钱包指南。",
	"accounting_s1_c4": "但是，如果您将部分收到的比特币付款保留为比特币，则需要为记账跟踪一些额外信息。乍一看可能很复杂，但实际上很简单。",
	"accounting_s1_c5": "注意：本指南仅供参考，不构成税务建议。",
	"accounting_s1_c6": "如果您需要税务建议，我们强烈推荐Satoshi Pacioli会计事务所，这是一家专注于比特币记账的会计公司。",
	"accounting_s2": "跟踪您的成本基础",
	"accounting_s2_c1": "跟踪成本基础是美元记账和比特币记账之间最大的区别。即使您纯粹从比特币的角度看待企业，您也必须在税务申报中报告每笔交易的美元价值。",
	"accounting_s2_c2": "如果您使用QuickBooks，可以使用Bitcoin Sync插件自动完成此操作。",
	"accounting_s2_c3": "如果您不使用QuickBooks，我们推荐Satoshi Pacioli会计事务所，这是一家专注于比特币记账的会计公司。",
	"accounting_s2_c4": "手动跟踪很简单，只需记录收到的比特币数量和交易当天的比特币美元价值。",
	"accounting_s2_c5": "您可以在此处查看当前的比特币美元价格。",
	"accounting_s2_c6": "在Excel电子表格中跟踪此信息并交给您的会计师。",
	"accounting_s2_c7": "您也可以自动将这些数据导入Excel。",
	"accounting_s2_c8": "您还可以查看前几天的历史比特币美元价格，因此不必每天都操作。",
	"accounting_s3": "花费或出售您的比特币",
	"accounting_s3_c1": "如果您使用我们钱包指南中的混合钱包，并自动将收到的100%比特币兑换成美元，则无需更改您现有的记账方式。",
	"accounting_s3_c2": "查看钱包指南。",
	"accounting_s3_c3": "如果您选择在持有一段时间后花费或出售部分比特币，只需在跟踪成本基础的Excel电子表格中添加出售价格。",
	"accounting_s3_c4": "例如，如果您在1月1日收到价值100美元的比特币，并决定在2月1日以新价值110美元出售或花费，您需要在记账中记录10美元的资本收益。",
	"accounting_s3_c5": "反之亦然。例如，如果您在1月1日收到价值100美元的比特币，并决定在2月1日以新价值90美元出售或花费，您需要在记账中记录10美元的资本损失。",
	"accounting_s4": "我需要更多帮助",
	"accounting_s4_c1": "如果您需要更多关于将比特币融入企业记账的帮助，我们强烈推荐Satoshi Pacioli会计事务所，这是一家专注于比特币记账的会计公司。",
	"accounting_s4_c2": "了解更多关于Satoshi Pacioli会计事务所的信息。"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "如何接受比特币付款",
	"wallets_header": "获取免费比特币钱包以接受付款",
	"wallets_intro_1": "所有比特币钱包都是相互兼容的，因此无论客户使用哪种钱包，都可以用比特币向您付款。",
	"wallets_intro_2": "纯比特币钱包：",
	"wallets_intro_3": "这些是纯比特币钱包，可以解锁比特币的全部优势：没有中间人、低费用、无退款或欺诈。",
	"wallets_intro_4": "混合钱包：",
	"wallets_intro_5": "这些钱包允许您在客户付款后，将任意比例的比特币兑换为美元。费用仍然低于信用卡，但高于纯比特币付款。",
	"wallets_intro_6": "两种类型都是接受比特币的好方法。具体使用哪种钱包取决于您企业的规模和类型。",
	"wallets_choice_sole": "适合个体经营者的钱包",
	"wallets_choice_multiple": "适合有多名员工的企业的钱包",
	"wallets_choice_online": "适合在线企业的钱包",
	"wallets_choice_invoice": "适合开发票企业的钱包",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "您可以使用现有的Square POS终端或在线商店集成来接受比特币付款。接受比特币付款从未如此简单。",
	"wallets_feature_bitcoin_only": "纯比特币钱包",
	"wallets_feature_no_info": "无需任何信息",
	"wallets_feature_in_person": "仅限当面付款",
	"wallets_feature_settles_bitcoin": "100%以比特币结算",
	"wallets_feature_hybrid": "混合钱包",
	"wallets_feature_info": "需要企业信息",
	"wallets_feature_in_person_online": "当面和在线付款",
	"wallets_feature_settles_both": "以比特币和美元结算",
	"wallets_feature_multiple_employees": "支持多名员工（BPT）",
	"wallets_feature_self_hosted": "自托管 = 0%手续费",
	"wallets_feature_online_store": "在线商店集成",
	"wallets_feature_invoicing": "免费发票软件",
	"wallets_get_wallet": "获取钱包"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "比特币商户地图 — 免费列出您的企业",
	"maps_header": "登记比特币商户地图，获得更多客户",
	"maps_request_details": "在下方输入您的企业信息，我们将免费将您列入比特币商户地图。这将使比特币用户找到您的企业并在您这里消费！",
	"maps_view": "在此查看地图。"
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "您的企业将在1到2周内列入比特币商户地图。",
	"kit_success_2": "在此查看地图。"
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "「此处接受比特币」贴纸",
	"stickers_header": "获取免费的「此处接受比特币」贴纸",
	"stickers_request": "获取免费贴纸",
	"stickers_request_details": "使用这些免费的「此处接受比特币」贴纸让您的客户知道您接受比特币付款。",
	"stickers_country_global_print": "全球 — 我自己打印贴纸",
	"stickers_request_instructions": "您将收到三张「此处接受比特币」贴纸，装在普通白色信封中。如果您的企业需要超过三张贴纸，请随时多次申请。地址信息在发送免费贴纸后会被删除。",
	"stickers_print_details": "无论您住在哪里，都可以打印自己的「此处接受比特币」贴纸！点击下方的语言查看贴纸文件和说明。",
	"stickers_request_language": "没有看到您的语言？填写下方表格，申请您语言的「此处接受比特币」贴纸文件。"
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "您将在1到2周内收到贴纸，装在普通白色信封中。每个信封包含3张贴纸。如果您的企业需要超过3张贴纸，请随时申请另一包！"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "我们将在3到4周内创建并发布您的贴纸文件。感谢您的耐心等待！"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "比特币商业工具包",
	"kit_header": "打印您自己的比特币商业工具包",
	"kit_request": "申请免费工具包",
	"kit_request_details": "每个比特币商业工具包包含两份传单，让说服当地企业接受比特币变得简单。",
	"kit_country_global_print": "全球 — 我自己打印工具包",
	"kit_enter_address": "输入您的邮寄地址，我们将免费寄送比特币商业工具包，装在普通白色信封中。地址信息在发送工具包后会被删除。",
	"kit_print_details": "无论您住在哪里，都可以通过打印自己的传单参与其中！您也可以将企业引导到我们的数字商业工具包，避免打印。",
	"kit_view_files": "查看文件",
	"kit_digital_kit": "数字工具包",
	"kit_resources": "每个工具包链接到这些免费资源"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "您将在1到2周内收到比特币商业工具包，装在普通白色信封中。"
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "打印您自己的比特币商业工具包",
	"english_bbk_files_description": "在此下载传单文件。",
	"english_header": "打印您自己的英语比特币商业工具包"
});

console.log(`\nDone! Created 14 business files.`);
