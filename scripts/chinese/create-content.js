/**
 * Creates Mandarin Chinese (zh) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'zh';
const today = '2026-04-02';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "比特币没有银行挤兑",
	"bank_runs_header": "比特币没有银行挤兑",
	"bank_runs_header_2": "但您的银行有",
	"bank_runs_what": "什么是银行挤兑？",
	"bank_runs_what_content_1": "银行挤兑是指太多人同时试图从银行取出他们的钱。",
	"bank_runs_what_content_2": "如果银行没有足够的钱来支付提款，银行挤兑可能导致银行彻底倒闭。",
	"bank_runs_how": "银行挤兑是如何发生的？",
	"bank_runs_how_content_1": "我们的银行系统是「部分准备金制」，这意味着银行不只是把您的钱放在保险库里等您消费或取出。",
	"bank_runs_how_content_2": "相反，银行拿您的钱去贷款或投资。这可能导致您的钱被锁定很长时间，即使银行承诺您随时可以取出。",
	"bank_runs_how_content_3": "如果您试图在银行已经把钱借出或投资后取款会怎样？",
	"bank_runs_how_content_4": "如果只有您一个人要取款，没有问题。银行只需拿其他人的钱给您。但如果太多人同时要取款呢？",
	"bank_runs_how_content_5": "许多美国人在2023年3月硅谷银行发生挤兑时亲身经历了这一点。",
	"bank_runs_how_content_6": "该银行将客户的钱投资于期限长达30年的国债。更糟的是，这些债券的价值最近急剧下跌，因此硅谷银行无法简单地卖出债券来取回储户的钱。它已经资不抵债了。它没有足够的钱来支付储户的提款。",
	"bank_runs_how_content_7": "随着越来越多的人得知这一情况，问题只会加剧。更多的提款请求涌入，但许多请求未被处理。数千家企业意识到他们将无法支付员工工资，因为银行倒闭了。",
	"bank_runs_how_content_8": "FDIC介入并同意赔偿储户。问题解决了？没那么简单...",
	"bank_runs_fdic": "FDIC保险能保护我的钱吗？",
	"bank_runs_fdic_content_1": "FDIC保险旨在在银行倒闭时保护银行储户。每位储户的存款最高保额为250,000美元。听起来不错，对吧？",
	"bank_runs_fdic_content_2": "没那么简单。如果银行倒闭，FDIC的钱从哪来？它有一个1250亿美元的保险基金。",
	"bank_runs_fdic_content_3": "听起来很多，直到您与它们承保的存款金额相比：近10万亿美元，即10,000,000,000,000美元。",
	"bank_runs_fdic_content_4": "FDIC甚至在自己的网站上显示，其保险基金中的钱仅够覆盖存款的略多于1%。",
	"bank_runs_fdic_content_5": "如果银行倒闭的规模超过FDIC保险基金的承受能力，美国政府很可能（但不保证）会印钞来赔偿储户。",
	"bank_runs_fdic_content_6": "但印钞会导致通胀，所以这不是一个好的解决方案。",
	"bank_runs_safe": "有没有不使用部分准备金的银行？",
	"bank_runs_safe_content_1": "一些银行曾试图成为「安全银行」，不贷出或投资储户的资金。",
	"bank_runs_safe_content_2": "虽然这些安全银行不会有银行挤兑的风险，但他们的申请被美联储拒绝了。这意味着他们不能合法地作为银行运营。",
	"bank_runs_safe_content_3": "由于被禁止运营，今天没有不使用部分准备金的银行存在。",
	"bank_runs_safe_content_4": "幸运的是，有一种方法可以通过成为自己的银行来退出部分准备金体系。不，我们不是说把现金藏在床垫下。",
	"bank_runs_safe_content_5": "以现金储蓄仍然容易受到通胀的影响。",
	"bank_runs_safe_content_6": "我们说的是比特币：一个让您成为自己银行的全新金融系统。",
	"bank_runs_protect": "比特币能保护我免受银行挤兑吗？",
	"bank_runs_protect_content_1": "是的，比特币是全额准备金的金融系统。",
	"bank_runs_protect_content_2": "如果您将比特币提取到自己的钱包中，银行挤兑在比特币中是不可能的。不要把比特币放在交易所或像比特币ETF这样的包装产品中。",
	"bank_runs_protect_content_3": "查看我们简单的比特币钱包指南，了解如何提取到自己的钱包。",
	"bank_runs_protect_content_4": "使用比特币，您终于可以掌控自己的钱了。"
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "比特币钱包指南",
	"wallets_description": "有许多不同的比特币钱包，它们在重要方面各有不同。您可以通过问这些简单的问题来判断一个钱包是否适合您。",
	"wallets_header": "如何安全存储您的比特币",
	"wallets_s1_c1": "比特币钱包是互相兼容的，所以无论对方使用哪种钱包，您都可以向他们发送比特币。",
	"wallets_s1_c2": "有许多不同的比特币钱包，它们在重要方面各有不同。您可以通过问这些简单的问题来判断一个钱包是否适合您：",
	"wallets_question_1": "这是自行保管的钱包吗？",
	"wallets_s2_c1": "比特币的创新之一是无需依赖银行等托管人即可存储比特币。",
	"wallets_s2_c2": "如果您将比特币放在交易所或ETF中，您就失去了比特币自由的好处。",
	"wallets_s2_c3": "自行保管钱包释放了比特币的全部力量：自由的货币。",
	"wallets_s2_c4": "使用自行保管钱包，您是唯一有能力花费或转移您的钱的人。当您使用自行保管钱包时，没有人可以阻止您发送或接收资金。",
	"wallets_s2_c5": "自行保管钱包也称为非托管钱包。",
	"wallets_s3_c1": "托管钱包是您无法控制自己资金的钱包。",
	"wallets_s3_c2": "这些钱包更类似于银行系统，您必须信任第三方来给您使用资金的权限。如果您的比特币在交易所，您使用的就是托管钱包。",
	"wallets_s3_c3": "如果您购买了比特币ETF，您使用的是不允许提取到自行保管的托管钱包。",
	"wallets_s3_c4": "托管钱包看起来很方便，但托管人在技术上有能力随时窃取所有用户的资金。",
	"wallets_s3_c5": "不是您的密钥，不是您的币！",
	"wallets_question_2": "是热钱包还是冷钱包？",
	"wallets_s4_c1": "冷钱包以永远不暴露于互联网的方式存储您比特币的密钥。",
	"wallets_s4_c2": "这极大地限制了小偷可能用来试图窃取您比特币的攻击途径，最适合不需要经常转移的大额比特币。",
	"wallets_s4_c3": "您可以把冷钱包想象成长期储蓄账户，也称为冷存储。",
	"wallets_s5_c1": "热钱包在连接到互联网的设备上存储您比特币的密钥，比如您的手机。",
	"wallets_s5_c2": "热钱包通常被认为是安全的，但可能比冷钱包有更多的安全漏洞。",
	"wallets_s5_c3": "您可以把热钱包想象成实体钱包。您不会把全部积蓄放在钱包里，但会放一些花费的钱。",
	"wallets_s5_c4": "热钱包让花费比特币变得容易，无需从冷存储中取出全部积蓄。",
	"wallets_question_3": "如何备份恢复短语？",
	"wallets_s6_c1": "设置比特币钱包时，您的设备会生成一个恢复短语。这个恢复短语（也称为种子短语）包含12或24个单词。",
	"wallets_s6_c2": "如果您失去了对钱包的访问权限或设备损坏，您可以在新钱包中输入此恢复短语来重新获取您的比特币。",
	"wallets_s6_c3": "大多数钱包附带一张纸用于写下恢复短语，但许多人更喜欢将此短语备份在钢板上。这大大降低了在火灾或洪水等自然灾害中丢失恢复短语的可能性。",
	"wallets_s6_c4": "Jameson Lopp测试了70种钢制备份套件，帮助您选择合适的。",
	"wallets_s6_c5": "在此查看Jameson的金属比特币备份指南。",
	"wallets_s6_c6": "或继续滚动浏览比特币钱包选项。",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "正在寻找我们的闪电钱包指南？",
	"wallets_starter_wallet": "优秀的入门钱包",
	"wallets_mobile_app": "手机应用",
	"wallets_2fa_support": "支持双重验证",
	"wallets_air_gap_mode": "气隙模式",
	"wallets_air_gap_camera": "气隙模式 + 摄像头",
	"wallets_bitcoin_only": "仅比特币",
	"wallets_security_features": "众多安全功能",
	"wallets_free": "100%免费",
	"wallets_coldcard_mk5_costs": "售价189美元",
	"wallets_coldcard_q_costs": "售价289美元",
	"wallets_blockstream_jade_costs": "售价79美元",
	"wallets_foundation_passport_costs": "售价199美元",
	"wallets_seedsigner_costs": "零件约50美元",
	"wallets_very_affordable": "非常实惠",
	"wallets_pair_with_phone": "与手机配对",
	"wallets_battery": "可充电电池",
	"wallets_build_your_own": "自己组装",
	"wallets_qwerty_keyboard": "全QWERTY键盘",
	"wallets_qr_scanner": "二维码扫描器"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "如何购买比特币 — 分步指南",
	"buy_header": "如何购买比特币",
	"buy_intro_c1": "第一次购买比特币可能感觉很复杂，但分步来看其实很简单。",
	"buy_intro_c2": "本指南将带您完成安全购买比特币并存入自行保管钱包的过程。",
	"buy_step_1_header": "第一步：选择您的国家",
	"buy_step_1_description": "不同国家有不同的比特币购买选项。选择您的国家查看最佳选项。",
	"buy_search_countries": "搜索您的国家",
	"buy_country_united_states": "美国", "buy_country_australia": "澳大利亚", "buy_country_austria": "奥地利", "buy_country_belgium": "比利时", "buy_country_brazil": "巴西", "buy_country_canada": "加拿大", "buy_country_france": "法国", "buy_country_germany": "德国", "buy_country_ireland": "爱尔兰", "buy_country_italy": "意大利", "buy_country_netherlands": "荷兰", "buy_country_new_zealand": "新西兰", "buy_country_spain": "西班牙", "buy_country_united_kingdom": "英国", "buy_country_argentina": "阿根廷", "buy_country_chile": "智利", "buy_country_colombia": "哥伦比亚", "buy_country_costa_rica": "哥斯达黎加", "buy_country_czech_republic": "捷克共和国", "buy_country_denmark": "丹麦", "buy_country_el_salvador": "萨尔瓦多", "buy_country_estonia": "爱沙尼亚", "buy_country_finland": "芬兰", "buy_country_greece": "希腊", "buy_country_guatemala": "危地马拉", "buy_country_hong_kong": "香港", "buy_country_hungary": "匈牙利", "buy_country_iceland": "冰岛", "buy_country_india": "印度", "buy_country_israel": "以色列", "buy_country_japan": "日本", "buy_country_latvia": "拉脱维亚", "buy_country_lithuania": "立陶宛", "buy_country_luxembourg": "卢森堡", "buy_country_malta": "马耳他", "buy_country_mexico": "墨西哥", "buy_country_norway": "挪威", "buy_country_panama": "巴拿马", "buy_country_poland": "波兰", "buy_country_portugal": "葡萄牙", "buy_country_romania": "罗马尼亚", "buy_country_singapore": "新加坡", "buy_country_slovakia": "斯洛伐克", "buy_country_slovenia": "斯洛文尼亚", "buy_country_south_africa": "南非", "buy_country_south_korea": "韩国", "buy_country_sweden": "瑞典", "buy_country_switzerland": "瑞士", "buy_country_thailand": "泰国", "buy_country_turkey": "土耳其", "buy_country_ukraine": "乌克兰", "buy_country_uruguay": "乌拉圭",
	"buy_step_2_header": "第二步：选择支付方式",
	"buy_step_2_description": "购买比特币有两种主要方式：银行转账或现金。每种方式都有其优势。",
	"buy_method_bank_transfer": "银行转账", "buy_method_bank_fast": "快速简便", "buy_method_bank_less_private": "隐私性较低",
	"buy_method_bank_description": "银行转账是购买比特币最常见的方式。快速、方便，通常费用较低。",
	"buy_method_choose_bank": "选择银行转账", "buy_method_cash": "现金", "buy_method_cash_private": "更私密", "buy_method_cash_limited": "选择有限",
	"buy_method_cash_description": "现金购买提供更多隐私，但选择较少，可能需要面对面交易或使用比特币ATM。",
	"buy_method_choose_cash": "选择现金",
	"buy_step_3_header": "第三步：购买选项",
	"buy_step_3_description": "以下是适合您国家和支付方式的最佳比特币购买选项：",
	"buy_platform_recommended": "推荐",
	"buy_platform_strike_description": "Strike是购买比特币最快最简便的方式，费用低且即时支持闪电网络。",
	"buy_platform_swan_description": "Swan Bitcoin专注于纯比特币服务，提供定投和教育资源。",
	"buy_platform_river_description": "River提供比特币购买、挖矿和托管服务，注重教育和安全。",
	"buy_platform_coinsquare_description": "Coinsquare是加拿大的比特币交易所，具有强大的监管合规性和客户支持。",
	"buy_platform_kraken_description": "Kraken是成熟的比特币交易所，具有高级交易功能和强大的安全性。",
	"buy_platform_atm_description": "比特币ATM让您可以用现金即时购买比特币。使用Coin ATM Radar找到最近的。",
	"buy_platform_bisq_description": "Bisq是去中心化的点对点交易所，允许无需KYC的私密比特币交易。",
	"buy_platform_feature_instant": "即时购买", "buy_platform_feature_low_fees": "低费用", "buy_platform_feature_lightning": "闪电网络", "buy_platform_feature_dca": "定投", "buy_platform_feature_education": "教育资源", "buy_platform_feature_withdrawal": "轻松提取", "buy_platform_feature_mining": "比特币挖矿", "buy_platform_feature_custody": "托管服务", "buy_platform_feature_canadian": "面向加拿大", "buy_platform_feature_regulated": "受监管的交易所", "buy_platform_feature_support": "客户支持", "buy_platform_feature_established": "成熟的平台", "buy_platform_feature_security": "强大的安全性", "buy_platform_feature_advanced": "高级功能", "buy_platform_feature_cash": "现金购买", "buy_platform_feature_anonymous": "更匿名", "buy_platform_feature_p2p": "点对点", "buy_platform_feature_private": "私密交易", "buy_platform_feature_decentralized": "去中心化",
	"buy_platform_relai_description": "Relai是瑞士纯比特币应用，提供自行保管钱包、自动投资功能和低费用，面向欧洲用户。",
	"buy_platform_feature_bitcoin_only": "仅比特币", "buy_platform_feature_self_custody": "自行保管钱包", "buy_platform_feature_auto_invest": "自动投资计划", "buy_platform_feature_european": "面向欧洲",
	"buy_step_4_header": "第四步：安全存储您的比特币",
	"buy_step_4_c1": "购买比特币后，最重要的步骤是将其转移到您控制私钥的自行保管钱包中。",
	"buy_step_4_c2": "将比特币留在交易所是有风险的，因为您实际上并不拥有比特币——交易所拥有。",
	"buy_step_4_c3": "当您控制自己的私钥时，您才真正拥有比特币，没有人可以拿走它。",
	"buy_step_4_c4": "了解如何为您的需求选择合适的比特币钱包：",
	"buy_cta_wallets": "查看比特币钱包指南"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "比特币闪电钱包指南",
	"lightning_description": "闪电钱包让您在保持个人主权的同时快速、低费用地发送比特币。",
	"lightning_header": "闪电钱包指南",
	"lightning_s1_c1": "闪电网络让您可以快速、低费用地发送比特币支付。",
	"lightning_s1_c2": "重要的是要知道，使用闪电网络涉及权衡。为了获得更快、更便宜的比特币支付，您通常需要牺牲一些安全性。",
	"lightning_s1_c3": "一般来说，闪电网络只应用于小额比特币。大额比特币应始终存储在硬件钱包中。",
	"lightning_s1_c4": "查看我们的硬件钱包指南了解更多信息。",
	"lightning_s1_c5": "并非所有闪电钱包都是相同的。通过回答一个简单的问题，找出哪种钱包的权衡平衡最适合您：",
	"lightning_question_1": "什么样的权衡平衡适合我？",
	"lightning_s2_c1": "比特币的创新之一是无需依赖银行等托管人即可存储比特币。自行保管钱包释放了比特币的全部力量。",
	"lightning_s2_c2": "使用自行保管钱包，您是唯一有能力花费或转移您的钱的人。当您使用自行保管钱包时，没有人可以阻止、审查或窃取您。这些钱包也称为非托管钱包。",
	"lightning_s2_c3": "使用闪电网络最具主权的方式是运行自己的节点。",
	"lightning_s2_c4": "本指南专注于不需要自己节点的简单闪电钱包。",
	"lightning_s2_c5": "重要的是要知道，即使使用非托管闪电钱包，您仍然信任钱包制造商不会推送恶意更新来窃取您的资金。",
	"lightning_s3_c1": "托管钱包是您无法控制自己资金的钱包。",
	"lightning_s3_c2": "这些钱包更类似于银行系统，您必须信任第三方来给您使用资金的权限。如果您的比特币在交易所，您使用的就是托管钱包。",
	"lightning_s3_c3": "托管钱包看起来很方便，但托管人在技术上有能力随时窃取所有用户的资金。",
	"lightning_s3_c4": "有些人因为易用性而更喜欢用托管闪电钱包存放小额比特币。只是记住：不是您的密钥，不是您的币！",
	"lightning_question_2": "选择您的钱包",
	"lightning_s4_c1": "考虑到以上所有因素，您现在可以选择权衡平衡最适合您的闪电钱包。",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "功能丰富", "lightning_mobile_app": "手机应用", "lightning_free": "100%免费", "lightning_merchants": "适合商家", "lightning_starter": "优秀的入门钱包", "lightning_browser": "在浏览器中", "lightning_custodial": "完全托管钱包",
	"lightning_cta_hardware": "正在寻找我们的硬件比特币钱包指南？"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "来自bitcoin.rocks的免费比特币贴纸",
	"stickers_description": "在公共场所贴一张比特币贴纸，帮助您身边的人了解比特币。",
	"stickers_header": "免费比特币贴纸",
	"stickers_choose_header": "选择您的贴纸包",
	"stickers_choose_c1": "我们的使命是帮助您通过在公共场所张贴比特币贴纸来说服更多人。我们所有的贴纸都有二维码，链接到关于",
	"stickers_choose_c2": "比特币", "stickers_choose_c3": "通胀",
	"stickers_choose_c4": "的教育页面。在下方选择一个贴纸包",
	"stickers_text_pack": "文字包", "stickers_signs_pack": "标志包",
	"stickers_instructions_1": "输入您的邮寄地址，我们将免费寄送一包比特币贴纸！您的贴纸将装在普通白色信封中寄出。",
	"stickers_instructions_2": "地址信息在发送免费贴纸后会被删除。",
	"stickers_share_header": "分享您的贴纸位置",
	"stickers_share_c1": "在Nostr上与我们分享您的贴纸位置，看看其他人把贴纸贴在了哪里。",
	"stickers_btn_share_on_nostr": "在NOSTR上分享", "stickers_btn_what_is_nostr": "什么是NOSTR？",
	"stickers_flyers_link_before": "同时，打印并张贴您自己的", "stickers_flyers_link_text": "比特币传单", "stickers_flyers_link_after": "，帮助说服更多人。",
	"stickers_country_global_print": "全球 — 我自己打印贴纸", "stickers_country_global_order": "全球 — 批量订购",
	"placeholder_name_optional": "姓名（可选）", "placeholder_address_line_1": "地址第1行", "placeholder_address_line_2": "地址第2行（可选）", "placeholder_city": "城市", "placeholder_state": "州", "placeholder_province": "省", "placeholder_zip_code": "邮编", "placeholder_postal_code": "邮政编码", "placeholder_language": "语言", "placeholder_which_stickers": "哪些贴纸？", "placeholder_email_optional": "输入邮箱以获取通知（可选）"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "来自bitcoin.rocks的免费比特币明信片",
	"postcards_description": "获取免费的比特币明信片包，与认识的人分享比特币。",
	"postcards_header": "明信片计划已结束",
	"postcards_program_closed_message": "我们的免费比特币明信片计划已结束。感谢所有通过邮件帮助传播比特币教育的人！",
	"postcards_sticker_alternative_header": "改为获取免费比特币贴纸",
	"postcards_sticker_alternative_message": "继续通过我们的免费贴纸计划传播比特币意识！我们的比特币贴纸非常适合在公共场所分享，并带有链接到教育内容的二维码。",
	"postcards_sticker_cta": "获取免费贴纸",
	"postcards_step_2": "明信片是什么样的",
	"postcards_instructions_4": "我们创建这些明信片是为了让向认识的人介绍比特币变得更容易！只需写上地址，贴上邮票，投入邮箱即可。",
	"postcards_instructions_5": "我们的使命是加速比特币的采用。您可以通过获取免费贴纸并在公共场所张贴来帮助！",
	"postcards_instructions_6": "我们都认识一些可能从了解更多比特币知识中受益的人。今天就与他们分享比特币贴纸吧！"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "帮助我们在全美各地放置这些比特币标牌！",
	"signs_title": "来自bitcoin.rocks的免费比特币标牌",
	"signs_choose_header": "感谢您帮助我们在全美各地放置这些比特币标牌！",
	"signs_choose_c1": "所有标牌现已发放完毕！我们的使命是通过教育加速比特币的采用。",
	"signs_choose_c2": "你们中的许多人通过在公共场所放置这些免费比特币标牌来帮助。我们所有的标牌都有二维码，链接到关于",
	"signs_choose_c3": "通胀",
	"signs_choose_c4": "的教育页面。感谢我们了不起的社区，我们已经接触到了数千人，帮助他们迈出了了解比特币的第一步。",
	"signs_share_header": "分享您的标牌位置",
	"signs_share_c1": "在Nostr上与我们分享您的标牌位置照片，看看其他人把标牌放在了哪里。",
	"signs_btn_share_on_nostr": "在NOSTR上分享", "signs_btn_what_is_nostr": "什么是NOSTR？",
	"signs_instructions_1": "输入您的邮寄地址，我们将寄送一箱10个比特币标牌！",
	"signs_instructions_2": "地址信息在发送免费标牌后会被删除。"
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "来自bitcoin.rocks的免费比特币传单",
	"flyers_description": "在家打印比特币传单，放在公共场所帮助您身边的人了解比特币。",
	"flyers_header_1": "打印并张贴",
	"flyers_header_2": "比特币传单",
	"flyers_intro_header": "如何打印和张贴这些比特币传单",
	"flyers_intro_c1": "我们的使命是帮助您通过在公共场所张贴比特币传单来说服更多人。这份传单有一个二维码，链接到我们的",
	"flyers_intro_c2": "比特币教育页面。",
	"flyers_intro_c3": "通胀",
	"flyers_intro_c4": "在家或在打印店打印这份传单。然后将其放在公告栏、城市电线杆和其他公共场所，让人们看到并了解比特币。",
	"flyers_intro_c5": "同时，申请我们的",
	"flyers_intro_c6": "免费比特币贴纸",
	"flyers_intro_c7": "包，帮助说服更多人。",
	"flyers_btn_download": "下载传单", "flyers_btn_print": "打印传单",
	"flyers_share_header": "分享您的传单位置",
	"flyers_share_c1": "在Nostr上与我们分享您的传单位置，看看其他人把传单放在了哪里。",
	"flyers_btn_share_on_nostr": "在NOSTR上分享", "flyers_btn_what_is_nostr": "什么是NOSTR？"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "参与其中，帮助传播比特币",
	"get_involved_description": "我们的免费资源让传播比特币的采用变得简单。",
	"get_involved_header": "参与其中",
	"get_involved_header_2": "传播比特币",
	"get_involved_intro_1": "生活在当前世界的状态中可能令人沮丧。",
	"get_involved_intro_2": "我们的货币已经破碎。因此，社会的基本组成部分也破碎了。",
	"get_involved_intro_3": "如果您已经了解比特币，您知道比特币能带来的那种希望感。一个由更好的货币实现的更美好未来的希望。",
	"get_involved_intro_4": "但您身边有太多人不知道比特币。他们和您生活在同一个破碎的世界里，但没有一盏灯塔帮助他们穿越黑暗。",
	"get_involved_intro_5": "但您可以改变这一切。我们创建了几个免费资源，让向您身边的人传播比特币带来的希望变得简单。",
	"get_involved_sticker_header": "在公共场所贴一张贴纸",
	"get_involved_sticker_content_1": "您可以帮助教育周围的人了解比特币，而无需与任何人交谈。只需在公共场所贴上我们的免费比特币贴纸。",
	"get_involved_sticker_content_2": "每个月都有数百人扫描这些贴纸上的二维码。通胀贴纸链接到关于",
	"get_involved_sticker_content_3": "比特币是通胀解决方案",
	"get_involved_sticker_content_4": "的页面。其他贴纸链接到我们的教育首页，向人们展示",
	"get_involved_sticker_content_5": "比特币如何构建更美好的世界。",
	"get_involved_sticker_content_6": "通过在您的社区中人们能看到的地方张贴这些贴纸，您可以帮助周围的人迈出了解比特币的第一步。",
	"get_involved_request_a": "申请",
	"get_involved_sticker_pack": "贴纸包",
	"get_involved_postcard_header": "寄一张明信片",
	"get_involved_postcard_content_1": "您可以通过向认识的人寄送我们的免费明信片来帮助传播比特币的希望。",
	"get_involved_postcard_content_2": "每张明信片的背面都有关于比特币的有说服力的文字，以及用于了解更多信息的二维码。",
	"get_involved_postcard_content_3": "通过寄送比特币明信片，您可以帮助某人以新的眼光看待比特币。",
	"get_involved_postcard_pack": "明信片包",
	"get_involved_business_header": "让一家企业加入",
	"get_involved_business_content_1": "想要帮助建设比特币循环经济？我们的比特币商业工具包让向企业介绍接受比特币支付变得简单。",
	"get_involved_business_content_2": "每个商业工具包包含传单，突出接受比特币支付的好处。每份传单链接到不同的",
	"get_involved_business_content_3": "免费比特币商业资源。",
	"get_involved_business_kit": "商业工具包"
});

console.log(`\nDone! Created 9 content files.`);
