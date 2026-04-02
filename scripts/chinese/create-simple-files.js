/**
 * Creates Mandarin Chinese (zh) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404错误 | 页面未找到",
	"404_message": "这个损坏的页面一点也不酷",
	"404_home": "返回首页"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "关于 bitcoin.rocks — 自2022年起的比特币教育",
	"about_description": "bitcoin.rocks是一个免费的开源比特币教育网站，成立于2022年。我们的使命是通过教育加速比特币的采用。",
	"about_header": "关于我们",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "我们的使命",
	"about_mission_1": "bitcoin.rocks成立于2022年，使命简单明了：通过教育加速比特币的采用。",
	"about_mission_2": "我们的存在是为了成为您与对比特币好奇的人分享的第一个链接。一个友好且易于理解的起点，解释比特币如何构建一个更美好的世界。",
	"about_mission_3": "太多人不了解比特币或从未被正确地介绍过。我们希望通过提供免费、优质的教育内容来改变这一现状，让每个人都能理解。",
	"about_what_we_do_header": "我们做什么",
	"about_what_we_do_1": "我们为比特币新手创建免费的教育内容。我们的页面涵盖通胀、自我保管、钱包、闪电网络以及比特币与其他资产和支付系统的比较等主题。",
	"about_what_we_do_2a": "我们将",
	"about_what_we_do_2b": "免费的比特币贴纸",
	"about_what_we_do_2c": "直接寄到您家门口，以便您帮助在社区中传播比特币意识。每个月都有数百人通过扫描这些贴纸上的二维码来了解比特币。",
	"about_what_we_do_3a": "我们还提供",
	"about_what_we_do_3b": "可打印的传单",
	"about_what_we_do_3c": "和",
	"about_what_we_do_3d": "商业工具包",
	"about_what_we_do_3e": "，帮助任何想要说服当地商家接受比特币支付的人。",
	"about_what_we_do_4": "我们所有的内容都假设读者对比特币零基础知识。无论您是比特币新手还是寻找分享资源的资深比特币爱好者，bitcoin.rocks都适合您。",
	"about_editorial_header": "我们的编辑方针",
	"about_editorial_1": "bitcoin.rocks上的每一项内容都经过精心策划和事实核查。当我们引用数据或统计信息时，我们会注明来源，以便您可以自行验证。",
	"about_editorial_2": "我们引用TIME杂志、福布斯、MIT技术评论、Lyn Alden等权威来源。我们相信，当事实清晰呈现时，比特币会自己说话。",
	"about_editorial_3": "我们的内容会定期审查和更新，以确保准确性和时效性。所有内容仅专注于比特币教育。",
	"about_open_source_header": "开源",
	"about_open_source_1a": "bitcoin.rocks是一个免费的开源项目，采用MIT许可证。我们的所有代码都可以在",
	"about_open_source_1b": "GitHub上",
	"about_open_source_1c": "公开获取。",
	"about_open_source_2": "任何人都可以为bitcoin.rocks做出贡献。我们特别欢迎翻译人员，帮助将我们的内容提供给世界各地的人们。",
	"about_open_source_3": "感谢我们的志愿翻译社区，bitcoin.rocks目前有16种语言版本，并且还在不断增长。",
	"about_open_source_contribute": "了解如何贡献。",
	"about_contact_header": "联系我们",
	"about_contact_1": "我们很乐意听到您的声音。无论您有问题、建议，还是只是想打个招呼，随时联系我们。",
	"about_contact_email": "电子邮件：",
	"about_contact_nostr": "Nostr：",
	"about_contact_github": "GitHub："
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "您将在2到4周内收到贴纸。在此期间，想想贴纸的好去处吧！",
	"sticker_success_2": "贴纸的好去处包括：",
	"sticker_success_list_1": "人们能看到的公共场所",
	"sticker_success_list_2": "不太容易被快速撕掉的地方（贴纸不会造成永久损坏）",
	"sticker_success_list_3": "容易粘贴的表面（金属、塑料、玻璃）",
	"sticker_success_list_4": "不要贴在私人财产、标识牌、ATM机或加油站上",
	"sticker_success_3": "想看看其他人把贴纸贴在哪里吗？",
	"sticker_success_flyers_bar_new": "新功能！",
	"sticker_success_flyers_bar_cta": "打印并张贴比特币传单 →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "我们已成功收到您的请求。",
	"sticker_language_success_2": "我们会分批发布新文件，所以可能需要几周时间才能提供下载。请稍后再来查看！"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "您将在1到2周内收到明信片。",
	"postcard_success_2": "感谢您通过向认识的人寄送这些明信片来帮助加速比特币的采用！"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "您将在1到2周内收到标牌。在此期间，想想标牌的好去处吧！",
	"sign_success_3": "想看看其他人把标牌放在哪里吗？",
	"signs_share_header": "分享您的标牌位置",
	"signs_share_c1": "在Nostr上与我们分享您的标牌位置照片，我们将发送聪给您！聪是比特币的最小单位。",
	"signs_btn_share_on_nostr": "在NOSTR上分享",
	"signs_btn_what_is_nostr": "什么是NOSTR？"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "复合通胀计算器",
	"cic_description": "使用此复合通胀计算器了解您的工资需要增长多少才能跟上通胀。",
	"what_can_i_do_about": "我能对",
	"what_can_i_do_about_2": "通胀做什么？",
	"cic_inflation_cta": "通过比特币摆脱通胀"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "通过Nostr逃离矩阵",
	"nostr_header": "通过NOSTR逃离矩阵"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "什么是Nostr？",
	"what_is_nostr_header": "什么是NOSTR？"
});

console.log(`\nDone! Created 9 simple files.`);
