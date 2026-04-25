#!/usr/bin/env node
/*
 * Helper 03 — Translate every remaining unresolved entry across all
 * non-inflation, non-index namespaces in the report (591 entries).
 *
 * Indexed by `${namespace}::${key}` because some keys (like
 * `point_X_summary_Y`, `hero_title`, `sources_*`) appear in multiple
 * namespaces with different surrounding context.
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

// All translations, namespaced by `${namespace}::${key}`.
const T = {
	// 404
	"404::404_home": "返回首页",
	"404::404_message": "比特币很棒，但这个损坏的页面不棒。",
	"404::404_not_found_short": "未找到",

	// about
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_page_description":
		"bitcoin.rocks 是一个免费、开源的比特币教育网站，创立于 2022 年。我们的使命是通过教育加速比特币的普及。",
	"about::about_editorial_2":
		"我们的资料链接到值得信赖的来源，例如美联储（FRED）、美国劳工统计局、FDIC、联合国、世界黄金协会、《福布斯》、《麻省理工科技评论》、Lyn Alden 和 James Lavish。我们相信，当事实被清晰呈现时，比特币会自己说话。",
	"about::about_header": "关于 bitcoin.rocks",
	"about::about_open_source_2":
		"bitcoin.rocks 是一个根据 MIT 许可证发布的免费开源项目。任何人都可以为 bitcoin.rocks 做贡献。我们尤其欢迎译者帮助我们的内容触及世界各地的人们。",
	"about::about_business_blurb":
		"我们提供免费的商业资源，让您轻松帮助本地商家开始接受比特币支付。我们的比特币商业页面涵盖了为什么比特币对企业有利、如何选择钱包和销售点系统，并提供免费的「这里接受比特币」贴纸。",
	"about::about_card_business_label": "商业资源",
	"about::about_card_business_source": "来源：bitcoin.rocks →",
	"about::about_card_business_title":
		"商家开始接受比特币支付所需的一切",
	"about::about_card_contact_github_source": "来源：GitHub →",
	"about::about_card_contribute_label": "参与贡献",
	"about::about_card_contribute_source": "来源：GitHub →",
	"about::about_card_contribute_title": "了解如何为 bitcoin.rocks 做贡献",
	"about::about_card_email_label": "电子邮件",
	"about::about_card_email_source": "来源：电子邮件 →",
	"about::about_card_flyers_label": "可打印传单",
	"about::about_card_flyers_source": "来源：bitcoin.rocks →",
	"about::about_card_flyers_title":
		"下载并打印比特币传单，分发给您的社区",
	"about::about_card_github_label": "代码仓库",
	"about::about_card_github_source": "来源：GitHub →",
	"about::about_card_github_title": "在 GitHub 上查看 bitcoin.rocks",
	"about::about_card_nostr_source": "来源：Nostr →",
	"about::about_card_stickers_label": "免费贴纸",
	"about::about_card_stickers_source": "来源：bitcoin.rocks →",
	"about::about_card_stickers_title":
		"免费寄送比特币贴纸到您家门口",
	"about::about_flyers_blurb":
		"我们设计了可打印的传单，您可以在见面会上分发、贴在社区公告栏上，或投放到信箱里——这是一种简单的方式，可以激发好奇心，引导人们到 bitcoin.rocks 了解更多。",
	"about::about_mission_1a": "bitcoin.rocks 由",
	"about::about_mission_1b":
		"于 2022 年创立，使命简单：通过教育加速比特币的普及。",
	"about::about_stickers_blurb":
		"我们免费寄送比特币贴纸到您家门口，您可以借此帮助在自己的社区里宣传比特币。每个月有数百人通过扫描这些贴纸上的二维码来了解比特币。",

	// bank-runs
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_header": "比特币没有银行挤兑，但您的银行可能会有。",
	"bank-runs::bank_runs_bitcoin_heading": "比特币没有银行挤兑",
	"bank-runs::bank_runs_bitcoin_p1":
		"比特币是全额准备金体系。您不是把钱存在银行里。您就是您自己的银行。在您不知情的情况下，没有人能把您的钱借出去，因为只有您能动用您自己的钱。",
	"bank-runs::bank_runs_bitcoin_p2":
		"只要您把比特币放在自己的钱包里——而不是放在交易所或包装成 ETF——挤兑就根本不可能发生。",
	"bank-runs::bank_runs_bitcoin_p3": "用比特币，您真正掌握自己的钱。",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"自 2020 年 3 月 26 日起，美国银行被要求持有 0% 的准备金。",
	"bank-runs::bank_runs_card_bank_reserve_label": "银行准备金率",
	"bank-runs::bank_runs_card_bank_reserve_source": "来源：美联储 →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"全额准备金体系——不需要存款保险。",
	"bank-runs::bank_runs_card_btc_fdic_label": "比特币的保障",
	"bank-runs::bank_runs_card_btc_fdic_source": "来源：比特币白皮书 →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"每一枚比特币都存在于链上——没有任何一枚被借出。",
	"bank-runs::bank_runs_card_btc_reserve_label": "比特币准备金率",
	"bank-runs::bank_runs_card_btc_reserve_source": "来源：比特币白皮书 →",
	"bank-runs::bank_runs_card_fdic_detail":
		"1,539 亿美元的保险基金 vs 10.82 万亿美元的受保存款（2025 年 12 月）。",
	"bank-runs::bank_runs_card_fdic_label": "FDIC 保障",
	"bank-runs::bank_runs_card_fdic_source": "来源：FDIC 一图速览 →",
	"bank-runs::bank_runs_card_svb_label": "案例分析",
	"bank-runs::bank_runs_card_svb_source": "来源：华盛顿大学法学院 →",
	"bank-runs::bank_runs_card_svb_title":
		"了解硅谷银行的挤兑是如何发生的",
	"bank-runs::bank_runs_card_wallet_label": "下一步",
	"bank-runs::bank_runs_card_wallet_source": "从这里开始 →",
	"bank-runs::bank_runs_card_wallet_title":
		"了解如何获得自己的比特币钱包",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC 保险只覆盖大约 1% 的存款",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC 保险为每位储户最高保护 25 万美元的存款。但与它本应保护的存款总额相比，这个保险基金小得可怜。",
	"bank-runs::bank_runs_fdic_p2_a":
		"在大规模银行倒闭时，政府很可能会印钱来填补缺口——结果就是更多的",
	"bank-runs::bank_runs_fdic_p2_link": "通胀。",
	"bank-runs::bank_runs_page_description":
		"在部分准备金银行制度下，银行会把您的存款借出去。如果太多人同时取款，银行可能会倒闭。比特币是全额准备金体系——挤兑根本不可能发生。",
	"bank-runs::bank_runs_svb_heading": "硅谷银行：一个真实的例子",
	"bank-runs::bank_runs_svb_p1_a":
		"2023 年 3 月，硅谷银行在把客户存款投资于长期",
	"bank-runs::bank_runs_svb_p1_b":
		"当这些债券贬值时，硅谷银行没法应付取款。这家银行已经资不抵债。",
	"bank-runs::bank_runs_svb_p1_link": "政府债券后倒闭了。",
	"bank-runs::bank_runs_svb_p2":
		"成千上万的企业没法给员工发工资。FDIC 介入了——但这引出了一个更大的问题：您的钱真的安全吗？",
	"bank-runs::bank_runs_what_p1":
		"银行不会把您的存款锁在金库里。他们会把您的钱借出去并拿去投资——这就叫做部分准备金银行制度。",
	"bank-runs::bank_runs_what_p2":
		"如果太多人同时来取款，银行就没有足够的现金应付每个人。这就是银行挤兑——它可能让银行彻底崩溃。",

	// bitcoin-vs-banks
	"bitcoin-vs-banks::point_1_summary_1":
		"任何有网络连接的人都可以使用比特币——它是",
	"bitcoin-vs-banks::point_1_summary_2": "无需许可的。",
	"bitcoin-vs-banks::point_1_summary_3":
		"银行可以根据政策或政府规定拒绝、冻结或关闭账户。",
	"bitcoin-vs-banks::point_2_summary_1":
		"比特币网络全年 24/7/365 不间断运行，没有维护窗口，也没有节假日。银行营业时间有限，周末关门，还有服务中断的窗口期。",
	"bitcoin-vs-banks::point_3_summary_1":
		"每一笔比特币交易都记录在公共区块链上，任何人都可以审计。银行运行的是私有账本，客户无法独立核实。",
	"bitcoin-vs-banks::point_4_summary_1":
		"用比特币，您自己掌握私钥——请参阅我们简明的",
	"bitcoin-vs-banks::point_4_summary_2": "比特币钱包",
	"bitcoin-vs-banks::point_4_summary_3":
		"指南。银行控制您的钱，可以在任何时候冻结、限额或限制您的资金。",
	"bitcoin-vs-banks::point_5_summary_1":
		"比特币的手续费透明且可预测。银行长期以来不断叠加各种隐藏的账户费、透支费、电汇费和 ATM 取款费。",
	"bitcoin-vs-banks::point_6_summary_1":
		"比特币只允许您花掉您真正拥有的钱。银行允许透支，然后为这种「特权」收取层层叠加的罚金。",
	"bitcoin-vs-banks::point_7_summary_1":
		"比特币交易一旦广播出去，就无法被阻止或撤销。银行可以根据政策或政府命令阻止、冻结或撤销交易。",
	"bitcoin-vs-banks::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">银行</span>的区别',

	// bitcoin-vs-bonds
	"bitcoin-vs-bonds::point_1_summary_1":
		"债券只是名义上「无风险」——通胀、利率波动和违约风险都会蚕食真实回报。",
	"bitcoin-vs-bonds::point_1_summary_2":
		"比特币的波动性是透明的，但不存在隐藏的对手方风险。",
	"bitcoin-vs-bonds::point_2_summary_1": "当",
	"bitcoin-vs-bonds::point_2_summary_2": "通胀",
	"bitcoin-vs-bonds::point_2_summary_3":
		"超过债券收益率时，债券持有者每年都在损失实际购买力。比特币 2,100 万枚的供应上限不会被通胀稀释。",
	"bitcoin-vs-bonds::point_3_summary_1":
		"债券市场在危机中可能会冻结——硅谷银行的崩溃部分原因就是它持有的债券贬值了。请看",
	"bitcoin-vs-bonds::point_3_summary_2": "银行挤兑",
	"bitcoin-vs-bonds::point_3_summary_3":
		"是怎么发生的，以及比特币为什么能避免它们。比特币在全球 24/7 交易，从来没有出现过流动性危机。",
	"bitcoin-vs-bonds::point_4_summary_1":
		"国债拍卖在没有足够买家的时候可能流标——请看",
	"bitcoin-vs-bonds::point_4_summary_2": "2022 年那场疲软的拍卖。",
	"bitcoin-vs-bonds::point_4_summary_3":
		"比特币的价格在开放市场上持续被发现，没有可能流标的中央拍卖。",
	"bitcoin-vs-bonds::point_5_summary_1":
		"债券的收益率在购买时就固定了。即使经济繁荣或货币崩溃，您的回报也不会变。",
	"bitcoin-vs-bonds::point_5_summary_2":
		"随着采用度的增长以及需求遇上固定供应，比特币有显著升值的空间。",
	"bitcoin-vs-bonds::point_6_summary_1":
		"大多数债券是通过银行或经纪商持有的，会增加对手方风险。比特币可以通过",
	"bitcoin-vs-bonds::point_6_summary_2": "钱包",
	"bitcoin-vs-bonds::point_6_summary_3": " 自行保管——彻底消除这种风险。",
	"bitcoin-vs-bonds::point_7_summary_1":
		"债券完全依赖政府还钱。如果政府违约或者通过通胀稀释债务，债券持有者就会受损。",
	"bitcoin-vs-bonds::point_7_summary_2":
		"比特币独立于任何政府或政治权力运行。",
	"bitcoin-vs-bonds::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">债券</span>的区别',

	// bitcoin-vs-cash
	"bitcoin-vs-cash::point_1_summary_1":
		"比特币几分钟内就能通过互联网送到世界任何地方。现金需要本人在场或者可信的递送人——您没法把一张 20 美元的钞票电邮过去。",
	"bitcoin-vs-cash::point_2_summary_1":
		"比特币在世界各地的运作方式都一样。现金受地理、汇率和当地接受程度的限制。",
	"bitcoin-vs-cash::point_3_summary_1":
		'政府可以一夜之间宣布现金作废——<a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">印度</a>就在 2016 年这么做了。即使没有废钞，现金也会因',
	"bitcoin-vs-cash::point_3_summary_2": "通胀",
	"bitcoin-vs-cash::point_3_summary_3":
		"而贬值。比特币不能被任何政府或权力机构宣布作废。",
	"bitcoin-vs-cash::point_4_summary_1":
		"现金可以被伪造，有时甚至非常逼真。比特币使用密码学，使伪造在数学上不可能。",
	"bitcoin-vs-cash::point_5_summary_1":
		"比特币没有中央权威。现金由政府发行，他们可以随意印更多、改设计或宣布钞票作废。",
	"bitcoin-vs-cash::point_6_summary_1":
		"现金面对盗窃、火灾、丢失和没收都很脆弱。比特币可以安全地",
	"bitcoin-vs-cash::point_6_summary_2": "自行保管",
	"bitcoin-vs-cash::point_6_summary_3": "在手机或硬件设备上。",
	"bitcoin-vs-cash::point_7_summary_1":
		"比特币可以分割成 1 亿个聪，让任何金额的小额支付都能进行。现金有最小面额——您没法把一分钱再分成更小的部分。",
	"bitcoin-vs-cash::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">现金</span>的区别',

	// bitcoin-vs-cbdc
	"bitcoin-vs-cbdc::point_10_summary_1":
		"比特币是有史以来最安全的计算网络，从未被黑客攻破。CBDC 依赖银行和政府来保护网络——而它们历史上被攻破过无数次。",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"没有人能阻止您用比特币交易。CBDC 的设计就是让政府和央行控制每一笔支付，限制您的隐私和自由。",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"比特币永远不会过期，也没有月费。CBDC 可以被设定为过期失效，让您没法为未来储蓄。",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"比特币有 2,100 万枚 BTC 的硬上限。CBDC 没有供应上限，让政府可以随意扩张货币——这会引发",
	"bitcoin-vs-cbdc::point_3_summary_2": "通胀。",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"比特币地址不与您的真实身份绑定。CBDC 直接与政府身份证件绑定，使大规模金融监控和审查成为可能。",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"比特币的规则由数万个独立节点验证。CBDC 集中在政府和央行手中，它们对网络拥有完全的控制权。",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"任何人都可以运行比特币节点来验证网络规则。CBDC 不允许用户运行节点——您必须信任中央权威。",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"自行保管的比特币，任何人都没法冻结。CBDC 的设计是让政府和央行能瞬间冻结账户。",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"当您用",
	"bitcoin-vs-cbdc::point_8_summary_2": "钱包",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"自行保管比特币时，您完全掌控自己的钱。CBDC 要求您信任银行或政府这样的托管方来替您持有资金。",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"比特币的货币政策固化在代码里，无法被修改。CBDC 可以被政客随意重新编程，引发",
	"bitcoin-vs-cbdc::point_9_summary_2": "通胀",
	"bitcoin-vs-cbdc::point_9_summary_3": "——只要印太多钱就会发生。",
	"bitcoin-vs-cbdc::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">CBDC</span>的区别',

	// bitcoin-vs-crypto
	"bitcoin-vs-crypto::point_1_summary_1":
		"比特币的协议自 2009 年以来基本保持不变，规则可预测。大多数加密货币项目不断改变协议、代币经济学，或者分叉出新版本。",
	"bitcoin-vs-crypto::point_2_summary_1":
		"比特币运行在全球数万个独立节点上。大多数加密货币项目由基金会、公司或一小群开发者控制，他们可以单方面做出修改。",
	"bitcoin-vs-crypto::point_3_summary_1":
		"比特币有 2,100 万枚的硬上限——是最稀缺的数字资产。大多数加密货币项目供应无限，或者有可以随意铸造新代币的机制，会稀释持有者的权益。",
	"bitcoin-vs-crypto::point_4_summary_1":
		"比特币只有一个用途：点对点的数字货币。任何人都能理解并使用它。大多数加密货币涉及复杂的智能合约或 DeFi，需要技术专长才能安全使用。",
	"bitcoin-vs-crypto::point_5_summary_1":
		"比特币的工作量证明已经在主网上运行 15 年以上没有遭到成功攻击。大多数加密货币项目使用的是尚未经过实战检验的实验性共识机制。",
	"bitcoin-vs-crypto::point_6_summary_1":
		"比特币是数字货币——价值储存和交换媒介。大多数加密货币代币是投机性的实用代币或治理代币，缺乏明确的现实价值。",
	"bitcoin-vs-crypto::point_7_summary_1":
		"比特币在攻击下变得更强大，经历了所有的危机、禁令和批评。大多数加密货币项目在监管、技术或市场压力下崩溃。",
	"bitcoin-vs-crypto::point_8_summary_1":
		"比特币没有 CEO，没有公司，没有单点故障。大多数加密货币项目依赖风险投资、特定的领导层或某家公司的存续。",
	"bitcoin-vs-crypto::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">加密货币</span>的区别',

	// bitcoin-vs-fine-art
	"bitcoin-vs-fine-art::point_1_summary_1":
		"每一枚比特币都是相同的、可互换的。每一件艺术品都是独一无二的——不同的创作、历史、品相和来源使得直接比较极其困难。",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"比特币在全球市场上 24/7 交易，任何人都可以参与。艺术品需要专门的拍卖行、私人交易商或画廊，可能要花几个月才能卖出。",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"买卖比特币的费用不到 1%，通常远低于此。艺术品交易的买家佣金、卖家佣金、保险、运输和鉴定费加起来很容易超过艺术品价值的 30–40%。",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"比特币可以分成 1 亿个聪，适合任何金额的交易。您没法在不承担对手方风险的情况下，拥有一幅画的一部分或一座雕塑的一角。",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"任何人都可以在链上通过密码学验证比特币的所有权和真实性。艺术品鉴定昂贵、缓慢，而且仍然经常被造假者欺骗——这会让一件艺术品的价值在一夜之间归零。",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"比特币只要妥善备份，就能扛过洪水、火灾、地震和盗窃。艺术品对一切形式的物理损害都很脆弱，而保险很少能完全覆盖。",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"任何有网络连接、有一点钱的人都能买比特币。艺术品投资基本上只属于有拍卖渠道和专业知识的富有收藏家。",
	"bitcoin-vs-fine-art::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">艺术品</span>的区别',

	// bitcoin-vs-gold
	"bitcoin-vs-gold::point_1_summary_1":
		"比特币可以通过互联网瞬间发送，费用很低。黄金必须实际运输才能转移所有权。",
	"bitcoin-vs-gold::point_2_summary_1":
		"比特币是数字原生资产，您可以通过互联网转移完整的所有权。线上黄金是数字版的欠条——您拥有的只是托管方的承诺，而不是金属本身。",
	"bitcoin-vs-gold::point_3_summary_1":
		'比特币有 2,100 万枚 BTC 的硬上限。黄金的供应每年增长大约 <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">1.6%</a>，让您手中那块的占比缩水——比法币',
	"bitcoin-vs-gold::point_3_summary_2": "通胀",
	"bitcoin-vs-gold::point_3_summary_3": "要少，但仍然是通胀。",
	"bitcoin-vs-gold::point_4_summary_1":
		"当黄金价格上涨时，开采得就更多，把价格压回去。比特币的供应是无弹性的——无论价格多高，永远只有 2,100 万枚。",
	"bitcoin-vs-gold::point_5_summary_1":
		"数万个独立节点验证着比特币网络。大部分实物黄金集中在少数大型托管方的金库里。",
	"bitcoin-vs-gold::point_6_summary_1":
		"任何人都可以通过运行全节点来验证真假比特币——这只是一个 App。验证实物黄金需要把它熔化掉；里面可能其实是钨。",
	"bitcoin-vs-gold::point_7_summary_1":
		"比特币可以分成 1 亿个聪，适合任何金额的购买。黄金没法轻易切分用于小额交易。",
	"bitcoin-vs-gold::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">黄金</span>的区别',

	// bitcoin-vs-real-estate
	"bitcoin-vs-real-estate::point_1_summary_1":
		"比特币可以瞬间送达世界任何地方。房地产被固定在一个地点上，承担着当地的经济、政治和自然风险。",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"比特币可以分成 1 亿个聪。房地产没法部分卖出——您没法只卖掉厨房或买下半间卧室。",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"比特币运行在去中心化网络上，任何政府都无法控制。房地产受到严格监管——分区、租金管制、征地权和扣押权全都适用。",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"比特币不需要任何维护。房地产需要不断的维修、翻新、保险、物业管理以及处理租客问题。",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"比特币没有持续性税费——只在卖出时缴纳资本利得税。无论是否产生收入，房地产每年都要缴纳房产税。",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"比特币只要妥善备份，就能扛过火灾、洪水和地震。房地产对一切灾害都很脆弱，而保险很少能完全覆盖。",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"每一枚比特币都是相同的、可互换的。每一处房产都是独一无二的，让定价和比较都很困难。",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"比特币在全球 24/7 交易，任何有网络的人都能参与。房地产销售只面向当地买家，可能要花几个月的繁琐手续才能成交。",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"比特币让任何人都能直接获得个人所有权。把房地产作为自住之外的投资品来购买，会推高房价、降低可负担性，加剧住房危机。",
	"bitcoin-vs-real-estate::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">房地产</span>的区别',

	// bitcoin-vs-stocks
	"bitcoin-vs-stocks::point_1_summary_1":
		"比特币是您直接拥有的资产。股票是公司的股份——它的价值取决于管理层、业绩以及您无法控制的决策。",
	"bitcoin-vs-stocks::point_2_summary_1":
		"比特币有 2,100 万枚 BTC 的硬上限。公司可以随时增发新股，稀释现有股东——就像法币的",
	"bitcoin-vs-stocks::point_2_summary_2": "通胀",
	"bitcoin-vs-stocks::point_2_summary_3":
		"会稀释现金一样。用比特币，您手里的份额永远不会缩水。",
	"bitcoin-vs-stocks::point_3_summary_1":
		"比特币没有 CEO，也没有单点故障。股票严重依赖领导层——一个糟糕的决定或一次离职就可能让股价崩盘。",
	"bitcoin-vs-stocks::point_4_summary_1":
		"比特币的价格来自开放的全球市场。股票估值依赖市盈率等指标，这些指标可能掩盖被高估的股票。",
	"bitcoin-vs-stocks::point_5_summary_1":
		"比特币 24/7 全球交易。股市只在工作日的营业时间开盘。",
	"bitcoin-vs-stocks::point_6_summary_1":
		"您可以通过一个简单的 App",
	"bitcoin-vs-stocks::point_6_summary_2": "自行保管",
	"bitcoin-vs-stocks::point_6_summary_3":
		"比特币——不需要经纪商。股票必须放在经纪商那里，让您承担经纪商倒闭的对手方风险。",
	"bitcoin-vs-stocks::point_7_summary_1":
		"比特币的固定供应使它成为可靠的通胀对冲工具。有些股票能跑赢通胀，有些不能——没有保证。",
	"bitcoin-vs-stocks::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">股票</span>的区别',

	// bitcoin-vs-visa
	"bitcoin-vs-visa::point_1_summary_1":
		"比特币是一个开放的网络，任何人都可以无需许可地加入和使用。Visa 是一个由金融机构控制的封闭系统，可以拒绝向任何人提供服务——尤其是无银行账户和银行服务不足的人群。",
	"bitcoin-vs-visa::point_2_summary_1":
		"比特币交易没有商家手续费。Visa 通常向商家收取每笔交易约 3% 的费用——您的企业通过接受",
	"bitcoin-vs-visa::point_2_summary_2": "比特币支付",
	"bitcoin-vs-visa::point_2_summary_3": "可以省下这笔钱。",
	"bitcoin-vs-visa::point_3_summary_1":
		"每一笔比特币交易都在公开、可审计的区块链上。Visa 运行的是封闭、专有的系统，客户没法独立核实任何东西。",
	"bitcoin-vs-visa::point_4_summary_1":
		"比特币不能被任何中央权威冻结。Visa 可以在任何时候冻结账户、阻止交易或拒绝服务。",
	"bitcoin-vs-visa::point_5_summary_1":
		"比特币是终结性结算——您只能花掉自己拥有的钱。信用卡产生债务，年利率往往超过 25%。",
	"bitcoin-vs-visa::point_6_summary_1": "比特币让您可以",
	"bitcoin-vs-visa::point_6_summary_2": "自行保管",
	"bitcoin-vs-visa::point_6_summary_3":
		"——不需要银行或支付处理商。信用卡总是需要中介。",
	"bitcoin-vs-visa::point_7_summary_1":
		"比特币 24/7 全球运行，没有营业时间。Visa 有营业时间、维护窗口以及可能阻碍交易的地理限制。",
	"bitcoin-vs-visa::hero_title":
		'<span class="orange">比特币</span>与<span class="asset">Visa</span>的区别',

	// business/accounting
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli 比特币会计服务",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 美元",
	"business/accounting::accounting_example_loss_result": "−10 美元",
	"business/accounting::accounting_description":
		"用通俗易懂的语言介绍如何在账上处理接受比特币这件事——混合钱包、成本基础、资本利得，以及什么时候该找会计师。",
	"business/accounting::accounting_s1_c1":
		"接受比特币最简单的方式，是使用一个混合钱包，让它在收到付款的那一刻自动把 100% 的比特币卖成美元（或您的本地货币）。",
	"business/accounting::accounting_s1_c2":
		"用这种方式，您的账目和今天看起来一模一样——最终金额每次都是美元。不用算成本基础，不用算资本利得，也不用新建表格。",
	"business/accounting::accounting_s2":
		"如果您想保留一些比特币：跟踪您的成本基础",
	"business/accounting::accounting_s2_c1":
		"有些企业选择保留收到的部分比特币，而不是全部自动换成法币。如果您是这样，主要的额外步骤就是跟踪您的成本基础——也就是您每笔比特币付款收到当天的美元价值。",
	"business/accounting::accounting_s2_c2":
		"即使您完全用比特币的视角看待自己的业务，大多数税务机关仍然要求您报告美元价值。好消息是：每笔交易只有两个数字——收到的比特币数量和当天的美元价值。",
	"business/accounting::accounting_s2_c3":
		"使用下面的工具来自动查询，这样您就不必每天去查价格了。",
	"business/accounting::accounting_s3":
		"花掉或卖掉您保留的比特币",
	"business/accounting::accounting_s3_c1":
		"如果您把每笔付款都自动换成美元，可以跳过这一节——它跟您没关系。",
	"business/accounting::accounting_s3_c2":
		"如果您保留了一部分比特币，之后又决定花掉或卖掉，请把卖出价加进同一张成本基础表里。比特币收到时的价值与您花掉或卖掉时的价值之间的差额，就是资本利得或亏损。",
	"business/accounting::accounting_s3_c3": "举两个简单的例子：",
	"business/accounting::accounting_s4": "需要一个懂比特币的专业人士？",
	"business/accounting::accounting_s4_c1":
		"如果您宁愿把这件事交给别人——或者您的比特币会计比混合钱包能处理的更复杂——我们强烈推荐 Satoshi Pacioli 比特币会计服务，他们是一家专门为企业做比特币会计的公司。",
	"business/accounting::bitcoin_business_accounting_guide":
		"为您的企业做比特币会计",
	"business/accounting::accounting_card_bpr_label": "比特币价格",
	"business/accounting::accounting_card_bpr_title":
		"查询比特币当前或历史的美元价格",
	"business/accounting::accounting_card_pacioli_label": "比特币会计师",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL 导入",
	"business/accounting::accounting_card_spreadsheet_title":
		"自动把比特币价格导入 Excel",
	"business/accounting::accounting_card_wallets_label": "混合钱包",
	"business/accounting::accounting_card_wallets_title":
		"查看我们推荐的商家钱包",
	"business/accounting::accounting_disclaimer":
		"本指南仅供参考，不构成税务建议。如需针对您具体情况的税务建议，请咨询合格的会计师。",
	"business/accounting::accounting_disclaimer_label": "请注意",
	"business/accounting::accounting_example_feb_1": "2 月 1 日",
	"business/accounting::accounting_example_gain_badge": "资本利得",
	"business/accounting::accounting_example_gain_explain":
		"您记录一笔 10 美元的资本利得。",
	"business/accounting::accounting_example_jan_1": "1 月 1 日",
	"business/accounting::accounting_example_loss_badge": "资本亏损",
	"business/accounting::accounting_example_loss_explain":
		"您记录一笔 10 美元的资本亏损。",
	"business/accounting::accounting_example_received_label": "收到",
	"business/accounting::accounting_example_sold_label": "卖出或花掉",
	"business/accounting::accounting_hero_subtitle":
		"在您的企业接受比特币不必让会计变得复杂。这里是简短版本——加上让一切轻松搞定的工具和专业人士。",
	"business/accounting::accounting_intro_c1":
		"如果您已经接受现金或刷卡支付，把比特币加入企业账目要比想象中简单。您有两条路：在每笔比特币付款到账时立即自动换成美元（不需要新增任何会计工作），或者保留一部分作为比特币（需要多记几个数字）。",
	"business/accounting::accounting_intro_c2":
		"本指南会带您走完两条路——这样您就能挑选最适合自己企业的那条，自信地开始接受比特币。",
	"business/accounting::accounting_s1": "简单路线：自动换成美元",
	"business/accounting::accounting_s3_c6":
		"就这样。底层的算法和处理任何其他升值或贬值资产的方式完全相同。",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report —— 比特币当前及历史美元价格",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli 会计服务 —— 为企业提供比特币会计",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru —— 把加密货币价格导入 Excel",

	// business/faq
	"business/faq::faq_hero_subtitle":
		"商家在开始接受比特币之前最常问的几个问题的简短答案——手续费、结算、钱包、退单、成本等等。",
	"business/faq::faq_intro_c1":
		"点击下面任意一个问题来展开答案。当您准备好开始接受比特币时，页面底部的商业资源会一步步带您走完每个步骤。",

	// business/index
	"business/index::biz_label_accounting": "会计",
	"business/index::biz_label_faq": "常见问题",
	"business/index::biz_label_maps": "商家地图",
	"business/index::biz_label_rewards": "奖励",
	"business/index::biz_label_stickers": "贴纸",
	"business/index::biz_label_wallets": "钱包",
	"business/index::biz_meta_description":
		"在您的企业接受比特币：手续费更低、即时结算、没有退单，还能吸引更多客户。",
	"business/index::business_hero_subtitle":
		"以更低的手续费收款、立即到账、触及数百万新客户——零合同、零隐藏成本。",
	"business/index::business_intro_c1":
		"比特币让您的企业用更快、更便宜、更注重隐私的方式收款。没有中间商。没有退单。没有合同。只有几秒钟内就能从客户直接到达您手上的钱。",
	"business/index::business_intro_c2":
		"下面是为什么比特币对企业有好处的简短版本——再下面是您今天就开始接受比特币所需的全部资源。",
	"business/index::business_resources_heading":
		"开始接受比特币所需的一切",
	"business/index::business_resources_intro":
		"按您自己的节奏完成这些资源。每一个都是简短、实用的指南。",

	// business/maps
	"business/maps::biz_maps_form_header": "告诉我们您的企业信息",
	"business/maps::biz_maps_form_intro":
		"我们只需要几个细节就能把您列出来。地址数据只会保留到把您的企业提交到地图为止。",
	"business/maps::biz_maps_hero_subtitle":
		"在 BTC Map——一个开放的全球比特币商家目录——免费列出您的企业，让附近的比特币用户能找到您并在您的店里花比特币。",
	"business/maps::biz_maps_hero_title":
		"把您的企业放上比特币商家地图",
	"business/maps::biz_maps_intro_c1":
		"比特币用户会主动寻找可以花钱的地方。把您的企业放上地图，就能让每一个在附近寻找吃饭、购物、住宿的比特币用户看到您——而且对您完全免费。",
	"business/maps::biz_maps_intro_c2":
		"只需填写下面这个简短的表格，我们就会把您的企业提交到 BTC Map 和其他比特币商家地图。",
	"business/maps::biz_maps_meta_description":
		"在 BTC Map 和其他比特币商家地图上免费列出您的企业，让附近的比特币用户能找到您。",
	"business/maps::biz_maps_placeholder_address": "街道地址",
	"business/maps::biz_maps_placeholder_category":
		"类别（例如餐厅、咖啡馆、酒店）",
	"business/maps::biz_maps_placeholder_city": "城市",
	"business/maps::biz_maps_placeholder_country": "国家",
	"business/maps::biz_maps_placeholder_name": "企业名称",
	"business/maps::biz_maps_placeholder_region": "州/省/地区",
	"business/maps::biz_maps_placeholder_website": "网站（可选）",
	"business/maps::biz_maps_view_map_cta": "查看 BTC Map",

	// business/maps-success
	"business/maps-success::biz_maps_success_btn_view_map": "查看 BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"感谢您提交您的企业信息。我们很快就会把您列入比特币商家地图。",
	"business/maps-success::biz_maps_success_hero_title": "已收到您的请求 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"您的企业将在 1 到 2 周内被列入 BTC Map 和其他比特币商家目录。我们会人工审核每一份提交，以保证地图的准确性。",
	"business/maps-success::biz_maps_success_timeline_c2":
		"一旦您的列表上线，附近的比特币用户就能找到您的企业，并到那里花比特币。",
	"business/maps-success::biz_maps_success_timeline_header": "接下来会发生什么",
	"business/maps-success::biz_maps_success_view_c1":
		"在等待期间，看看 BTC Map 吧——上面是世界各地不断壮大的接受比特币的企业网络。",
	"business/maps-success::biz_maps_success_view_header": "看看您将在哪里出现",

	// business/sticker-files/english/index
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"下载英文贴纸文件，自己打印「这里接受比特币」贴纸。",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"打印您自己的英文「这里接受比特币」贴纸，让客户知道您接受比特币。",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"下载英文「这里接受比特币」贴纸文件",

	// business/sticker-language-success
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"感谢您请求您所在语言的「这里接受比特币」贴纸文件。",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"已收到您的请求 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"我们将在 3 到 4 周内创建并发布您的贴纸文件。一旦准备好，您就可以从我们的贴纸文件页面免费下载并打印它们。",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"贴纸文件是分批发布的，所以您所在的语言可能要再过几周才能上线。感谢您的耐心！",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"接下来会发生什么",

	// business/sticker-success
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "批量订购",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"再请求一包免费贴纸",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"您将在 2 到 4 周内收到您的免费「这里接受比特币」贴纸——装在一个朴素的白色信封里，里面有 3 张贴纸。",
	"business/sticker-success::biz_sticker_success_hero_title":
		"您的贴纸已经在路上 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"如果 3 张贴纸不够您的企业用，可以再请求一包免费的——或者从我们用的同一家印刷商那里批量订购。",
	"business/sticker-success::biz_sticker_success_more_header":
		"还需要更多贴纸？",
	"business/sticker-success::biz_sticker_success_tip_1":
		"贴在前门或橱窗上，让客户在走进来之前就看到",
	"business/sticker-success::biz_sticker_success_tip_2":
		"贴在收银台、POS 终端或付款区附近",
	"business/sticker-success::biz_sticker_success_tip_3":
		"贴在菜单、价格表或小费罐上",
	"business/sticker-success::biz_sticker_success_tip_4":
		"不要贴在不属于您的或没有得到许可的地方",
	"business/sticker-success::biz_sticker_success_tips_header":
		"贴贴纸的好地方",

	// business/stickers
	"business/stickers::biz_stickers_hero_subtitle":
		"让您的客户知道您接受比特币。订购一包免费的「这里接受比特币」贴纸，贴在您的店里。",
	"business/stickers::biz_stickers_hero_title":
		"免费的「这里接受比特币」贴纸",
	"business/stickers::biz_stickers_intro_c1":
		"接受比特币只是事情的一半——您的客户也需要知道您接受。这些小小的「这里接受比特币」贴纸专为贴在前门、收银台、菜单或客户付款前能看到的任何地方而设计。",
	"business/stickers::biz_stickers_intro_c2":
		"我们会免费寄一包到美国或加拿大境内的任何地址，您也可以在世界任何地方自己打印。",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 加拿大 —— 免费邮寄",
	"business/stickers::biz_stickers_option_print": "🌍 全球 —— 自己打印",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 美国 —— 免费邮寄",
	"business/stickers::biz_stickers_placeholder_translation1":
		"「这里接受比特币」的翻译",
	"business/stickers::biz_stickers_placeholder_translation2":
		"「扫一扫了解为什么比特币对企业有利」的翻译",
	"business/stickers::biz_stickers_print_c1":
		"无论您住在哪里，都可以打印自己的「这里接受比特币」贴纸。点击下面您的语言来下载贴纸文件和打印说明。",
	"business/stickers::biz_stickers_print_header": "打印您自己的贴纸文件",
	"business/stickers::biz_stickers_request_c1":
		"填写下面的表格，请求当地语言版本的「这里接受比特币」贴纸文件。准备好后我们会通知您。",
	"business/stickers::biz_stickers_request_header":
		"没看到您的语言？",
	"business/stickers::biz_stickers_step_description":
		"我们会免费寄到美国和加拿大境内的地址。世界其他地方，您可以自己打印。",
	"business/stickers::biz_stickers_step_header":
		"您希望如何拿到您的贴纸？",

	// business/wallets
	"business/wallets::wallets_name_strike": "STRIKE 商务版",
	"business/wallets::biz_wallets_meta_description":
		"所有比特币钱包都可互通——选一个适合您企业的就行。免费、即时结算、没有退单。",
	"business/wallets::sources_breez_business":
		"Breez —— 仅限比特币的闪电网络钱包",
	"business/wallets::sources_ibex": "IBEX —— 闪电网络支付基础设施",
	"business/wallets::sources_opennode": "OpenNode —— 比特币支付处理商",
	"business/wallets::sources_square": "Square —— 接受比特币支付",
	"business/wallets::sources_zaprite":
		"Zaprite —— 面向企业的比特币开票工具",
	"business/wallets::wallets_hero_subtitle":
		"比特币钱包是免费的。挑一个适合您企业的——线下、线上或基于发票——几分钟内就能开始接受比特币。",
	"business/wallets::wallets_section_invoice":
		"面向开票型企业的钱包",
	"business/wallets::wallets_section_invoice_intro":
		"如果您给客户开发票（咨询、自由职业、B2B 服务），就用一个围绕开票设计的钱包。您的客户只需点几下就能支付一张比特币发票。",
	"business/wallets::wallets_section_multiple":
		"面向多员工企业的钱包",
	"business/wallets::wallets_section_multiple_intro":
		"如果您有团队在收银台收款，就选一个支持多员工登录的钱包——这样每个员工都有自己的 PIN，您也能保留一份谁收了哪笔款的清晰审计记录。",
	"business/wallets::wallets_section_online": "面向线上企业的钱包",
	"business/wallets::wallets_section_online_intro":
		"在网站上销售？这些钱包可以接入您的线上商店，从世界任何地方的客户那里接受比特币——没有退单，也不需要商户账户。",
	"business/wallets::wallets_section_sole":
		"面向个体经营企业的钱包",
	"business/wallets::wallets_section_sole_intro":
		"如果您一个人经营一家店、咖啡馆、工作室或服务，下面这些钱包都可以用。根据您是想保留比特币还是把每笔款的一部分自动换成本地货币来选。",
	"business/wallets::wallets_strike_note":
		"Strike 商务版让您接受比特币和闪电网络支付，零手续费、即时结算。支持线下、线上和基于发票的支付，可选自动换成本地货币。",

	// business/why
	"business/why::learn_why_bitcoin_is_good_for_business":
		"这里接受比特币",
	"business/why::why_good_for_you": "为什么比特币对您也很棒",
	"business/why::why_learn_more_lowercase": "了解更多 →",
	"business/why::why_s1_c1":
		"通胀发生在更多的钱被印出来或凭空创造出来时。这让您口袋里的钱随着时间变得越来越不值钱——也是为什么物价年年上涨的原因。",
	"business/why::why_s1_c2":
		"比特币的供应量固定为 2,100 万枚。没有政府、银行或公司能印更多。您用比特币储蓄能保住价值，而不是悄悄地损失。",
	"business/why::why_s2_c1":
		"过去几年美国有多家银行因挤兑而倒闭。当太多客户同时取款时，银行没有足够的现金把每个人的钱还回去。",
	"business/why::why_s2_c2":
		"银行不只是替您保管钱——他们会把您的钱大部分借出去和投资。如果这些投资出问题——或者储户失去信心——银行就会倒闭，您的存款可能被冻结甚至损失。",
	"business/why::why_s2_c3":
		"用比特币，您可以把钱直接放在自己的钱包里。没有银行。没有中介。没有挤兑。",
	"business/why::why_s3_c1":
		"和信用卡、PayPal 或传统银行账户不同，比特币不需要任何人的许可就能使用。",
	"business/why::why_s3_c2":
		"没有人能冻结您的账户、阻止一笔付款，或者把您从网络上踢出去。这是历史上第一个您可以自由使用、不必担心审查或没收的金融体系。",
	"business/why::why_s4_c1":
		"比特币常常被误解，但它在世界各地默默做着很多好事。",
	"business/why::why_s4_c2":
		"它帮助人权活动人士争取自由、减少了来自垃圾填埋场和油田的全球甲烷排放、稳定了电网，还为国家公园等公共物品提供了资金。",
	"business/why::why_biz_s1": "更低的手续费，企业留下更多",
	"business/why::why_biz_s1_c1":
		"比特币支付绕过了从每笔销售中抽走 2-3% 的银行和信用卡公司。商家能留下您支付金额中更多的部分——这通常意味着更好的价格和更好的服务。",
	"business/why::why_biz_s2": "即时结算，没有退单",
	"business/why::why_biz_s2_c1":
		"比特币支付在几秒内就能从您的钱包直接结算到商家账户。不用等银行放款好几天，也没有代价高昂的退单纠纷——商家可以专心服务客户，而不是和欺诈作斗争。",
	"business/why::why_biz_s3": "免费接受，向所有人开放",
	"business/why::why_biz_s3_c1":
		"商家接受比特币不需要签合同、付月费或承担安装成本。世界各地数百万比特币用户会主动寻找接受比特币的商家——给这家企业带来免费的新客户曝光。",
	"business/why::why_business_cta_intro":
		"经营企业，想开始接受比特币？",
	"business/why::why_business_cta_link": "看看是怎么运作的 →",
	"business/why::why_for_business":
		"为什么比特币对这家企业很棒",
	"business/why::why_for_business_intro":
		"接受比特币让企业能在每笔交易里留下更多、即时收款且没有退单，还能触及全球的比特币用户——而这一切都没有合同，也没有月费。",
	"business/why::why_good_for_you_intro":
		"比特币不只在收银台有用——它还是一种更好的货币，能保护您的储蓄、隐私以及交易自由。这里是一个简短的概览。",
	"business/why::why_hero_subtitle":
		"您刚才扫描了一张「这里接受比特币」的贴纸。这里告诉您为什么这是个好消息——既对这家企业，也对您。",
	"business/why::why_intro_c1":
		"您所在的这家企业接受比特币——一个现代的、开源的支付网络，世界任何地方的任何人都可以使用，不会被银行或中介抽成。",
	"business/why::why_intro_c2":
		"下面是为什么接受比特币对这家企业有好处的简短版本，以及为什么使用比特币对作为客户的您也有好处。",
	"business/why::why_next_business_label": "接受比特币",
	"business/why::why_next_business_title":
		"在您的企业接受比特币",
	"business/why::why_next_buy_label": "购买比特币",
	"business/why::why_next_buy_title": "买入您的第一枚比特币",
	"business/why::why_next_learn_label": "了解更多",
	"business/why::why_next_learn_title": "了解更多关于比特币的内容",
	"business/why::why_next_wallet_label": "获得钱包",
	"business/why::why_next_wallet_title": "获得您自己的比特币钱包",
	"business/why::why_whats_next_heading": "下一步去哪里？",
	"business/why::why_whats_next_intro":
		"如果这是您第一次扫描比特币贴纸，下面是接下来最有用的几个去处。",

	// buy
	"buy::buy_bitcoin_guide": "如何购买比特币",
	"buy::buy_step_1_header": "选择您的国家",
	"buy::buy_step_2_header": "选择您的支付方式",
	"buy::buy_step_3_header": "您的购买选项",
	"buy::buy_step_4_header": "安全地存放您的比特币",
	"buy::buy_header_subtitle":
		"一份简单、循序渐进的指南，教您买入第一枚比特币。",
	"buy::buy_howto_name": "如何购买比特币",
	"buy::buy_meta_description":
		"通过我们循序渐进的指南，安全地学习如何购买比特币。选择您的国家和支付方式，找到最适合您的比特币购买选项。",
	"buy::buy_step_1_eyebrow": "第 1 步",
	"buy::buy_step_2_eyebrow": "第 2 步",
	"buy::buy_step_3_eyebrow": "第 3 步",
	"buy::buy_step_4_eyebrow": "第 4 步",
	"buy::buy_storage_cta_label": "下一步",
	"buy::sources_bisq": "Bisq —— 去中心化的点对点比特币交易所",
	"buy::sources_coinatmradar": "Coin ATM Radar —— 全球比特币 ATM 目录",
	"buy::sources_kraken": "Kraken —— 老牌比特币交易所",
	"buy::sources_relai":
		"Relai —— 瑞士的纯比特币自托管 App",
	"buy::sources_river":
		"River —— 仅限比特币的购买、挖矿和托管服务",
	"buy::sources_strike_lightning":
		"Strike —— 支持闪电网络的比特币买入",
	"buy::sources_swan":
		"Swan Bitcoin —— 仅限比特币的美元成本平均法",

	// common
	"common::common_language_switcher_add_language": "添加语言",
	"common::common_next_buy_bitcoin": "购买比特币",
	"common::common_next_buy_bitcoin_desc": "了解如何安全地购买比特币",
	"common::common_next_calculate": "计算您的通胀",
	"common::common_next_calculate_desc":
		"看看通胀会如何随时间影响您的工资",
	"common::common_next_get_wallet": "获得一个钱包",
	"common::common_next_get_wallet_desc":
		"获得您的第一个比特币钱包——它是免费的",
	"common::common_next_keep_learning": "继续学习",
	"common::common_next_keep_learning_desc":
		"看看比特币如何让世界变得更好",
	"common::common_source_bls_cpi":
		"美国劳工统计局 —— 消费者价格指数（CPI）",
	"common::common_source_fred_money_supply_index":
		"美联储经济数据（FRED）—— 货币供应量（分类索引）",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto —— 《比特币：一种点对点的电子现金系统》（2008）",
	"common::common_sources_treasury_auction":
		"James Lavish —— 《国债拍卖会失败吗？》",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "下一步？",
	"common::common_sticker_files_mission_5": "请求一包",
	"common::common_site_tagline": "面向所有人的比特币教育。",
	"common::common_source_btc_map":
		"BTC Map —— 全球接受比特币的商家目录",
	"common::common_source_btcpayserver":
		"BTCPay Server —— 免费、开源、自托管的比特币支付处理器",
	"common::common_source_oshi": "Oshi —— 面向商家的比特币奖励平台",
	"common::common_source_strike_business":
		"Strike —— 面向企业的比特币和闪电网络支付",
	"common::common_sources_group_bitcoin": "比特币数据",
	"common::common_sources_group_cpi": "通胀 / 消费者价格指数",
	"common::common_sources_group_debt": "政府债务",
	"common::common_sources_group_money": "货币供应量数据",
	"common::common_sources_group_stories": "现实世界的例子",
	"common::common_sticker_files_mission_6": "免费英文贴纸。",
	"common::common_sticker_files_next_flyers_label": "传单",
	"common::common_sticker_files_next_flyers_title":
		"打印一张比特币传单",
	"common::common_sticker_files_next_languages_label": "贴纸文件",
	"common::common_sticker_files_next_languages_title":
		"查看其他语言的贴纸文件",
	"common::common_sticker_files_print_these": "一键打印这些",
	"common::common_sticker_name_bdhi_black":
		"「比特币没有通胀」贴纸（黑色）",
	"common::common_sticker_name_bdhi_orange":
		"「比特币没有通胀」贴纸（橙色）",
	"common::common_sticker_name_caution":
		"「警告！正在融化的冰块」比特币贴纸",
	"common::common_sticker_name_cure_inflation":
		"「治愈通胀」比特币贴纸",
	"common::common_sticker_name_danger":
		"「危险！前方通胀」比特币贴纸",
	"common::common_sticker_name_fix":
		"「修好货币，修好世界」比特币贴纸",
	"common::common_sticker_name_got_inflation":
		"「遇到通胀了吗？」比特币贴纸",
	"common::common_sticker_name_study": "「研究比特币」贴纸",
	"common::common_sticker_name_warning":
		"「警告！通胀正在偷走您的储蓄」比特币贴纸",
	"common::common_sticker_name_what_if":
		"「如果您的钱没有通胀呢？」比特币贴纸",
	"common::common_sticker_tips_heading": "贴纸小贴士",
	"common::common_sticker_tips_intro":
		"打印好贴纸后，把它们贴在能被看到的地方！适合贴贴纸的好地方有：",
	"common::common_sticker_tips_list_1":
		"在公共场所，让人们能看到",
	"common::common_sticker_tips_list_2":
		"在不太可能被很快撕掉的地方（这些贴纸不会造成永久性损害）",
	"common::common_sticker_tips_list_3":
		"在能轻松粘贴的表面上（金属、塑料、玻璃）",
	"common::common_sticker_tips_list_4":
		"不要贴在私人财产上，不要遮盖标识、ATM 或加油机",
	"common::common_stickers_printer_prefix": "我们使用",
	"common::common_stickers_printer_suffix":
		"，但您也可以用任何贴纸公司。",

	// compound-inflation-calculator
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"美联储经济数据（FRED）—— 城市消费者价格指数",
	"compound-inflation-calculator::sources_fred_m1":
		"美联储经济数据（FRED）—— M1 货币供应量",
	"compound-inflation-calculator::cic_calculator_heading":
		"计算您的通胀缺口",
	"compound-inflation-calculator::cic_cta_label": "下一步",
	"compound-inflation-calculator::cic_hero_subtitle":
		"看看您的工资需要增长多少才能跟上通胀。",
	"compound-inflation-calculator::cic_next_explore_topics":
		"探索更多话题",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"看看比特币如何与货币、自由、能源等领域相连。",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"了解通胀是如何运作的",

	// flyers
	"flyers::flyers_intro_header":
		"如何打印和张贴这些比特币传单",
	"flyers::flyers_hero_subtitle":
		"免费、可打印的比特币传单。把它们张贴在公共场所，帮助更多人了解比特币。",
	"flyers::flyers_hero_title": "打印并张贴比特币传单",
	"flyers::flyers_next_get_stickers": "继续传播",
	"flyers::flyers_next_get_stickers_desc":
		"订购一包免费的比特币贴纸",

	// get-involved
	"get-involved::get_involved_and_help_spread_bitcoin":
		"参与进来，帮助传播比特币",
	"get-involved::get_involved_business_content_1":
		"想帮助构建比特币循环经济？最简单的方式就是帮本地商家开始接受比特币支付。",
	"get-involved::get_involved_business_content_2":
		"认识可能愿意接受比特币的商家？把店主带到我们的",
	"get-involved::get_involved_business_content_3": "比特币商业页面。",
	"get-involved::get_involved_description":
		"我们的免费资源让传播比特币普及变得更容易。贴纸、传单、给商家用的「这里接受比特币」贴纸，以及任何人都可以贡献的开源代码库。",
	"get-involved::get_involved_header": "参与进来，传播比特币。",
	"get-involved::get_involved_intro_5":
		"您可以帮助改变这种状况。我们制作了几个免费资源，让您更容易地把比特币带来的希望传递给身边的人。",
	"get-involved::get_involved_biz_stickers_note":
		"已经在接受比特币了？用我们免费的「这里接受比特币」贴纸告诉客户。我们会把一包寄到美国或加拿大境内的任何地址，您也可以在世界任何地方自己打印。",
	"get-involved::get_involved_card_biz_stickers_label":
		"接受比特币贴纸",
	"get-involved::get_involved_card_biz_stickers_source":
		"来源：bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"为您的企业准备的免费「这里接受比特币」贴纸",
	"get-involved::get_involved_card_business_label": "比特币商业",
	"get-involved::get_involved_card_business_source":
		"来源：bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"商家开始接受比特币支付所需的一切",
	"get-involved::get_involved_card_flyers_label": "可打印传单",
	"get-involved::get_involved_card_flyers_source":
		"来源：bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"下载并打印一张免费的比特币传单",
	"get-involved::get_involved_card_github_label": "开源",
	"get-involved::get_involved_card_github_source":
		"来源：GitHub →",
	"get-involved::get_involved_card_github_title":
		"在 GitHub 上为 bitcoin.rocks 做贡献",
	"get-involved::get_involved_card_stickers_label": "免费贴纸",
	"get-involved::get_involved_card_stickers_source":
		"来源：bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"请求一包免费的比特币贴纸寄到您家门口",
	"get-involved::get_involved_flyers_content_1":
		"传单是把比特币介绍给您社区最简单的方式之一。下载一张免费的可打印比特币传单，想印多少印多少，然后贴在社区公告栏、咖啡馆、见面会，或者任何人们聚集的地方。",
	"get-involved::get_involved_flyers_content_2":
		"每张传单都包含一个吸引人的标题和一个二维码，把好奇的读者带到 bitcoin.rocks 了解更多。",
	"get-involved::get_involved_flyers_content_3":
		"和贴纸不同，传单可以在世界任何地方按需打印——您只需要一台打印机和几分钟时间。",
	"get-involved::get_involved_flyers_header": "打印并张贴一张传单",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks 免费可打印比特币传单预览",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks 是一个根据 MIT 许可证发布的免费开源项目。我们的使命是通过教育加速比特币的普及——而我们一个人做不到。",
	"get-involved::get_involved_github_content_2":
		"无论您是开发者、设计师、写手还是译者，都有您能帮上忙的地方。我们尤其欢迎能把内容翻译成更多语言的贡献者，这样世界各地更多的人就能用自己的母语了解比特币。",
	"get-involved::get_involved_github_content_3":
		"分叉代码仓库、提交合并请求、报告问题，或者只是给项目点个星表示支持。每一份贡献都帮助比特币触及更多人。",
	"get-involved::get_involved_github_header": "在 GitHub 上做贡献",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks 的免费比特币文字贴纸包",

	// lightning
	"lightning::sources_lightning_paper":
		"Joseph Poon 与 Thaddeus Dryja —— 《比特币闪电网络：可扩展的链下即时支付》（2016）",
	"lightning::lightning_s1_c4": "请查看我们的",
	"lightning::lightning_grid_heading": "热门闪电网络钱包",
	"lightning::lightning_hardware_cta_label": "硬件钱包",
	"lightning::lightning_header_subtitle":
		"闪电网络让您几秒内以远低于一美分的成本发送比特币——根据您打算花多少比特币，挑一个权衡合适的钱包。",
	"lightning::lightning_s1_c4_end": "了解更多。",
	"lightning::lightning_s1_c4_link": "比特币硬件钱包指南",
	"lightning::sources_acinq_phoenix":
		"ACINQ —— Phoenix 闪电网络钱包",
	"lightning::sources_breez_lightning":
		"Breez —— 自托管的闪电网络钱包",
	"lightning::sources_lightning_labs":
		"Lightning Labs —— 闪电网络文档",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi —— 托管型闪电网络钱包",

	// nostr/index
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone、Android 和网页",
	"nostr/index::nostr_platform_web": "网页浏览器",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr 是一个全新的去中心化在线通信协议——没有任何一家公司控制它，原生内置比特币 Zap，您可以在不同客户端之间切换而不丢失粉丝。",
	"nostr/index::nostr_amethyst_f1": "功能丰富，可定制性强",
	"nostr/index::nostr_amethyst_f2": "需要一个独立的比特币钱包",
	"nostr/index::nostr_amethyst_f3": "100% 免费",
	"nostr/index::nostr_damus_f1": "类似 Twitter 的熟悉界面",
	"nostr/index::nostr_damus_f2": "需要一个独立的比特币钱包",
	"nostr/index::nostr_damus_f3": "100% 免费",
	"nostr/index::nostr_download_heading": "下载一个免费的 Nostr 客户端",
	"nostr/index::nostr_download_intro":
		"Nostr 客户端是免费的 App，让您可以在 Nostr 网络上阅读和发帖。它们都可以互通——您可以随时切换客户端，并保留您的粉丝和内容。",
	"nostr/index::nostr_hero_subtitle":
		"Nostr 是一个全新的去中心化在线通信协议——没有任何一家公司控制它，原生内置比特币 Zap，您可以在不同 App 之间切换而不丢失粉丝。",
	"nostr/index::nostr_hero_title": "Nostr 是什么？",
	"nostr/index::nostr_intro_c1":
		"Nostr 类似于电子邮件：没有人拥有这个协议，任何人都可以在它之上构建 App，您可以挑自己最喜欢的 App。和 Twitter 或 Facebook 不同，没有中央公司可以审查您、把您踢下平台或降低您的曝光。",
	"nostr/index::nostr_intro_c2":
		"下面是为什么 Nostr 重要的简短版本——再下面是您今天就开始使用所需的所有免费 Nostr 客户端。",
	"nostr/index::nostr_iris_f1": "超级简单——无需安装",
	"nostr/index::nostr_iris_f2":
		"用一个测试账号轻松体验 Nostr 的方式",
	"nostr/index::nostr_iris_f3": "100% 免费",
	"nostr/index::nostr_learn_more_label": "深入了解",
	"nostr/index::nostr_learn_more_title":
		"在 nostr.how 上了解更多关于 Nostr 的内容",
	"nostr/index::nostr_primal_f1": "推荐的首选客户端",
	"nostr/index::nostr_primal_f2": "内置比特币 Zap 钱包",
	"nostr/index::nostr_primal_f3": "100% 免费",
	"nostr/index::nostr_s1": "协议，而不是平台",
	"nostr/index::nostr_s1_c1":
		"Nostr 是一个全新的协议，让您可以在线交流而不必担心审查、踢出平台或降低曝光。",
	"nostr/index::nostr_s1_c2":
		"Twitter 和 Facebook 这样的平台由一家公司控制，但没有人控制 Nostr 协议。",
	"nostr/index::nostr_s2": "自由迁移",
	"nostr/index::nostr_s2_c1":
		"Nostr 类似于电子邮件。没有人控制电子邮件协议，任何人都可以在它之上构建客户端（比如 Gmail、Hotmail 等）。",
	"nostr/index::nostr_s2_c2":
		"也没有人控制 Nostr 协议，任何人都可以在它之上构建客户端（比如 Damus、Amethyst 等）。",
	"nostr/index::nostr_s2_c3":
		"如果您不喜欢某个客户端的运作方式，可以无缝地把您的 Nostr 账号迁移到另一个客户端，不会丢失粉丝或内容。",
	"nostr/index::nostr_s3": "原生内置比特币",
	"nostr/index::nostr_s3_c1":
		"比特币原生内置在 Nostr 协议里。如果您看到喜欢的内容，可以轻松地给对方 Zap 一笔比特币当作感谢！",
	"nostr/index::nostr_s3_c2":
		"在 Twitter 和 Facebook 这样的中心化平台上，中心化公司从您的内容里赚钱。但在 Nostr 这样的开放协议上，您从自己的内容里赚钱。",
	"nostr/index::sources_damus": "Damus —— iPhone Nostr 客户端",
	"nostr/index::sources_iris": "Iris —— 基于浏览器的 Nostr 客户端",
	"nostr/index::sources_nostr_how": "nostr.how —— Nostr 是什么？",
	"nostr/index::sources_nostr_protocol":
		"Nostr 协议 —— 开源规范",
	"nostr/index::sources_primal":
		"Primal —— 内置比特币 Zap 钱包的 Nostr 客户端",
	"nostr/index::what_is_nostr": "Nostr 是什么？",

	// sticker-files/index
	"sticker-files/index::sticker_files_header":
		"用这些比特币贴纸文件打印您自己的比特币贴纸。",

	// sticker-language-success
	"sticker-language-success::sticker_language_success_hero_title":
		"已收到您的请求 🎉",

	// sticker-success
	"sticker-success::sticker_success_btn_order_bulk": "批量订购",
	"sticker-success::sticker_success_btn_share_on_nostr": "在 Nostr 上分享",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr 是什么？",
	"sticker-success::sticker_success_bulk_header": "想要更多贴纸？",
	"sticker-success::sticker_success_hero_title":
		"您的贴纸已经在路上 🎉",
	"sticker-success::sticker_success_share_header":
		"分享您贴贴纸的位置",
	"sticker-success::sticker_success_tips_header": "贴贴纸的好地方",

	// stickers
	"stickers::stickers_intro_c2": "比特币",
	"stickers::stickers_flyers_link_before":
		"顺便也打印并张贴您自己的",
	"stickers::stickers_instructions_1":
		"输入您的邮寄地址，我们会免费给您寄一包比特币贴纸。您的贴纸将装在朴素的白色信封里寄出。",
	"stickers::stickers_btn_choose_pack": "选择这一包",
	"stickers::stickers_bulk_c1": "想要不止几张贴纸？",
	"stickers::stickers_bulk_c2":
		"从我们用的同一家印刷商那里批量订购",
	"stickers::stickers_bulk_c3": "——买得越多，每张越便宜。",
	"stickers::stickers_bulk_cta": "批量购买贴纸",
	"stickers::stickers_bulk_header": "批量订购贴纸",
	"stickers::stickers_hero_subtitle":
		"订购一包免费的比特币贴纸，把它们贴在公共场所，帮助更多人了解比特币。",
	"stickers::stickers_hero_title": "免费比特币贴纸",
	"stickers::stickers_intro_c1":
		"我们的使命是帮您把更多人「橙药丸化」——把比特币贴纸贴在公共场所。我们所有的贴纸都带有二维码，链接到关于",
	"stickers::stickers_intro_c3": "通胀",
	"stickers::stickers_intro_c4":
		"的教育页面。在下面挑一包贴纸，再选您想怎么收到——我们会免费寄一包到美国或加拿大境内的任何地址，您也可以在世界任何地方自己打印。",
	"stickers::stickers_mail_header": "我们会免费寄出您的贴纸",
	"stickers::stickers_next_print_flyers": "继续传播",
	"stickers::stickers_next_print_flyers_desc":
		"打印免费的比特币传单，张贴在公共场所",
	"stickers::stickers_option_bulk": "📦 全球 —— 批量订购",
	"stickers::stickers_option_canada": "🇨🇦 加拿大 —— 免费邮寄",
	"stickers::stickers_option_print": "🌍 全球 —— 自己打印",
	"stickers::stickers_option_usa": "🇺🇸 美国 —— 免费邮寄",
	"stickers::stickers_print_c1":
		"无论您住在哪里，都可以打印自己的贴纸。点击下面您的语言来下载贴纸文件和打印说明。",
	"stickers::stickers_print_c2":
		"不是每张贴纸都有所有语言版本。",
	"stickers::stickers_print_header": "打印您自己的贴纸文件",
	"stickers::stickers_request_c1":
		"填写下面的表格，请求当地语言版本的贴纸文件。准备好后我们会通知您。",
	"stickers::stickers_request_header": "没看到您的语言？",
	"stickers::stickers_share_c2": "在任何 Nostr 客户端中搜索",
	"stickers::stickers_share_c3": "关注我们。",
	"stickers::stickers_signs_pack_description":
		"带有比特币信息的警告、危险和提醒风格标志——专为吸引注意、让人停下来阅读而设计。",
	"stickers::stickers_step_1_description":
		"每一包都有一组不同的比特币贴纸，带有教人们了解比特币的二维码。",
	"stickers::stickers_step_1_eyebrow": "第 1 步",
	"stickers::stickers_step_1_header": "选择您的贴纸包",
	"stickers::stickers_step_2_description":
		"我们会免费寄到美国和加拿大境内的地址。世界其他地方，您可以自己打印或批量订购。",
	"stickers::stickers_step_2_eyebrow": "第 2 步",
	"stickers::stickers_step_2_header":
		"您希望如何拿到您的贴纸？",
	"stickers::stickers_text_pack_description":
		"一组比特币口号和金句的混合包，专为在公共场所激发好奇心而设计。",

	// wallets
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org —— 选择您的钱包",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp —— 金属比特币种子保存评测",
	"wallets::wallets_lightning_cta_label": "闪电网络",
	"wallets::sources_blockstream_green":
		"Blockstream Green —— 自托管比特币钱包",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade —— 比特币硬件钱包",
	"wallets::sources_coldcard_mk5":
		"Coinkite —— Coldcard MK5 硬件钱包",
	"wallets::sources_coldcard_q": "Coinkite —— Coldcard Q 硬件钱包",
	"wallets::sources_passport":
		"Foundation Devices —— Passport 硬件钱包",
	"wallets::sources_seedsigner":
		"SeedSigner —— 开源 DIY 比特币签名设备",
	"wallets::wallets_grid_heading": "热门比特币钱包",
	"wallets::wallets_header_subtitle":
		"一份循序渐进的指南，帮您选钱包、保护私钥，并完全掌控自己的比特币。",
};

let resolved = 0;
let unresolved = 0;
const unresolvedKeys = [];

for (const entry of report.entries) {
	if (entry.targetTranslation) continue;
	const lookup = `${entry.namespace}::${entry.key}`;
	if (Object.prototype.hasOwnProperty.call(T, lookup)) {
		entry.targetTranslation = T[lookup];
		resolved++;
	} else {
		unresolved++;
		unresolvedKeys.push(lookup);
	}
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
console.log(`[03-rest] resolved=${resolved} unresolved=${unresolved}`);
if (unresolvedKeys.length) {
	console.log("unresolved (first 30):", unresolvedKeys.slice(0, 30));
}
