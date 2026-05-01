#!/usr/bin/env node
/**
 * Adds the new Chinese (Simplified) translation keys for the memorize-seed feature
 * to the existing i18n/zh/index_zh.json and i18n/zh/wallets_zh.json files, and
 * (re)writes i18n/zh/memorize-your-seed-phrase_zh.json with full-width Chinese
 * punctuation that matches the rest of the zh locale.
 *
 * Run from repo root: node scripts/zh-memorize-translate/run.js
 */

const fs = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const I18N_ZH = path.join(REPO_ROOT, 'i18n', 'zh');
const TODAY = '2026-04-30';

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, obj) {
	fs.writeFileSync(file, JSON.stringify(obj, null, '\t') + '\n', 'utf8');
}

// ---- 1. memorize-your-seed-phrase_zh.json (full rewrite with full-width punctuation) ----

const memorizeFile = path.join(I18N_ZH, 'memorize-your-seed-phrase_zh.json');

const memorizeObj = {
	'@metadata': {
		authors: ['Satoshi'],
		'last-updated': TODAY,
		locale: 'zh',
	},
	memorize_seed_page_title: '如何把比特币存进您的大脑',
	memorize_seed_page_description: '如何安全地把比特币恢复短语记在脑中,作为隐形备份。实用方法、安全规则,以及为什么背诵很少能成为您唯一的备份。'.replace(/,/g, '，'),
	memorize_seed_h1_title: '如何把比特币存进您的大脑:随身携带的隐形备份'.replace(/:/g, '：'),

	memorize_seed_intro_heading: '无人能见的备份',
	memorize_seed_intro_p1: '您的恢复短语是您比特币的主密钥。大多数人把它备份在纸上或钢板上。背诵则是您可以叠加在上面的另一道备份。',
	memorize_seed_intro_p2: '无形、无重量,只有您自己知道。火灾、盗窃、边境检查都拿它没辙。'.replace(/,/g, '，'),
	memorize_seed_intro_p3: '对绝大多数人而言,背诵应当叠加在实物备份之上,而不是取而代之。这一点稍后会详细说明。'.replace(/,/g, '，'),

	memorize_seed_not_brain_wallet_heading: '这不是「大脑钱包」',
	memorize_seed_callout_good_label: '背诵恢复短语',
	memorize_seed_callout_good_desc: '由硬件钱包生成的单词。高熵值。把一份副本存在脑中是安全的。',
	memorize_seed_callout_bad_label: '大脑钱包',
	memorize_seed_callout_bad_desc: '由您自己想出来的口令派生出的密钥。已被攻破。几秒钟内就会被洗劫一空。',
	memorize_seed_not_brain_wallet_p1_a: '在比特币早期,人们曾尝试用自己想出来的口令来生成私钥。这种方法叫做'.replace(/,/g, '，'),
	memorize_seed_not_brain_wallet_p1_b: '「大脑钱包」,'.replace(/,/g, '，'),
	memorize_seed_not_brain_wallet_p1_c: '结果是一场灾难。黑客编写脚本去猜测常见口令,几秒钟之内就把钱包洗劫一空。'.replace(/,/g, '，'),
	memorize_seed_not_brain_wallet_p2: '您在这里背诵的东西不一样。这些单词来自硬件钱包的随机源,而不是您的想象。它们不是脚本能猜得出来的。'.replace(/,/g, '，'),
	memorize_seed_not_brain_wallet_p3: '您的恢复短语具有高熵值。把一份副本存在脑中并不会削弱它,只是把它存到了另一个地方。'.replace(/,/g, '，'),

	memorize_seed_when_helpful_heading: '什么时候背诵会派上用场',
	memorize_seed_when_helpful_p1: '当实物备份失效时,背诵就大放异彩。一场自然灾害把您的家连同里面的钢板一起摧毁。洪水。火灾。紧急撤离。盗窃。某次过境检查中,您不能携带任何看起来像财富的东西。'.replace(/,/g, '，'),
	memorize_seed_when_helpful_p2: '在短期内也很有用。出门旅行不带备份会少很多压力——只要您能在世界任何地方恢复您的钱包。',
	memorize_seed_when_helpful_p3: '它还是又一道冗余。如果在同一周里洪水、火灾和小偷都找上门,您脑中那一份就是带您回家的钥匙。'.replace(/,/g, '，'),

	memorize_seed_rules_heading: '先把安全规则定下来',
	memorize_seed_rules_p1: '在背任何东西之前,先把基本功夯实。您的恢复短语是终极密码——请不惜一切代价保护它。'.replace(/,/g, '，'),
	memorize_seed_rules_p2: '<strong>请在真正的比特币钱包上生成,</strong>而不是在您不信任的网站或手机应用上。整套做法都仰赖这些单词来自真正的随机源。'.replace(/,/g, '，'),
	memorize_seed_rules_p3: '<strong>至少保留一份实物备份。</strong>纸或钢,放在不止一个安全的地方。背诵是叠加在它之上——不是替代。'.replace(/,/g, '，'),
	memorize_seed_rules_p4: '<strong>千万不要把单词念出声。</strong>不要对自己念,也不要小声嘀咕。手机和语音助手听到的远比您以为的多。'.replace(/,/g, '，'),
	memorize_seed_rules_p5: '<strong>千万不要把它们打进任何地方。</strong>不要打进记事本、表格、加密笔记,也不要「就测试一下」。把任何键盘或屏幕都当成公共广播。'.replace(/,/g, '，'),
	memorize_seed_rules_p6: '<strong>复习时请独自一人。</strong>关上门。盖住任何对着您的摄像头——包括笔记本电脑的摄像头。拉上窗帘。一旦停止复习,立刻把单词收回保管。'.replace(/,/g, '，'),

	memorize_seed_technique_heading: '如何背诵您的恢复短语',
	memorize_seed_technique_p1: '随机的单词比一句完整的话难记,但其实没看上去那么难。恢复短语通常是十二个或二十四个单词,取决于您的钱包及其设置。无论是哪种数量,只要您给它一个节奏,都能跟着节拍走。'.replace(/,/g, '，'),
	memorize_seed_technique_p2: '<strong>把短语分块。</strong>十二个单词可以干净地分成三组每组四个,或四组每组三个。二十四个单词可以分成四组每组六个,或六组每组四个。组越小越容易记住。'.replace(/,/g, '，'),
	memorize_seed_technique_p3: '<strong>编一个故事。</strong>把每一组变成一个生动的小场景。让它们既怪诞又具体——大脑会记住反常的东西。「一只蓝色大象在钢琴上把仙人掌当杂耍球抛接」会留下来。「一些关于动物和音乐的词」不会。',
	memorize_seed_technique_p4: '<strong>使用记忆宫殿。</strong>想象一个您熟悉的地方——您的厨房、上班的路线、童年的卧室。把每个单词放在一个特定的地标上。在脑中走一遍这条路线来回想顺序。',
	memorize_seed_technique_p5: '<strong>把它编成韵脚或唱出来。</strong>挑一首您已经会的曲子,把单词套进节奏里。歌曲很黏脑。'.replace(/,/g, '，'),
	memorize_seed_technique_p6: '选一个您觉得最自然的方法。大多数人最后都会把两种结合起来——分块加故事,或者把记忆宫殿配上一首曲子。哪种最适合您就用哪种。'.replace(/,/g, '，'),

	memorize_seed_repetition_heading: '把复习变成日常的一部分',
	memorize_seed_repetition_p1: '诀窍在于次数,而不是用力。把您的复习挂在某件您每天都会做的事情上,练习次数会在您不知不觉之中累积起来。'.replace(/,/g, '，'),
	memorize_seed_repetition_p2: '每天刷两次牙,一周就是十四次复习。做晚餐。遛狗。开车上班。入睡时。洗澡时。挑一两个常规活动,让单词跟着搭便车。'.replace(/,/g, '，'),
	memorize_seed_repetition_p3: '在脑中默念——闭着嘴,不出声。不要轻声细语。也不要动嘴唇。整个要点就是没人能看出您在做这件事。'.replace(/,/g, '，'),
	memorize_seed_repetition_p4: '几周之后,这些单词不再是您需要努力回想的东西,而是您直接就知道的东西。把这套常规坚持一两个月,让它真正扎根。之后每周温习一次,保持新鲜。'.replace(/,/g, '，'),

	memorize_seed_test_heading: '在不留痕迹的情况下检验自己',
	memorize_seed_test_p1: '每周一次,向自己证明您确实记得这串短语。记忆很狡猾——它可以让人觉得熟悉,却并不准确。'.replace(/,/g, '，'),
	memorize_seed_test_p2: '<strong>找一个私密的地方</strong>,没有任何摄像头对着您,包括您自己笔记本电脑上的那个。锁上门。拉上窗帘。'.replace(/,/g, '，'),
	memorize_seed_test_p3: '<strong>把单词按顺序写在纸上</strong>。把它们和您的实物备份对照,而不是和您的记忆对照。整个要点就是抓出您的记忆看不见的错误。'.replace(/,/g, '，'),
	memorize_seed_test_p4: '<strong>把那张纸彻底销毁。</strong>碎纸机粉碎掉。烧掉。不要把整张纸丢进垃圾桶。如果有任何单词记错了,就再多复习几轮日常练习,下周再试。'.replace(/,/g, '，'),

	memorize_seed_dont_rely_heading: '不要只依赖记忆',
	memorize_seed_dont_rely_p1: '记忆在出问题之前一直都很可靠。压力、衰老、疾病、头部受伤,或者只是两次复习之间间隔太久,都可能让一串短语消失。比特币没有「忘记密码」的链接。'.replace(/,/g, '，'),
	memorize_seed_dont_rely_p2: '把背诵当作平行备份。您的实物备份是地基。脑中的那一份是冗余。如果灾难毁掉了地基,冗余会带您回家。'.replace(/,/g, '，'),
	memorize_seed_dont_rely_p3: '唯一能合理只用记忆来保管的情况都很极端:逃离战区、躲避独裁迫害、带着会被没收的资产过境。即便如此,一旦到了安全的地方,创建一份新的实物备份也是个好主意。'.replace(/,/g, '，').replace(/:/g, '：'),

	memorize_seed_card_wallets_label: '把它正确地设置好',
	memorize_seed_card_wallets_title: '在真正的比特币钱包上生成您的恢复短语',
	memorize_seed_card_wallets_source: '来源:bitcoin.rocks →'.replace(/:/g, '：'),

	sources_bip39: 'Bitcoin BIPs —— BIP39:用于生成确定性密钥的助记码'.replace(/:/g, '：'),
	sources_brain_wallet_research: 'Vasek、Bonneau、Castellucci、Keith 与 Moore —— 《比特币大脑流失:对比特币大脑钱包的使用与滥用之考察》(Financial Cryptography 2016)'.replace(/:/g, '：'),
	sources_bitcoin_whitepaper: 'Satoshi Nakamoto —— 《比特币:一种点对点的电子现金系统》(2008)'.replace(/:/g, '：'),
};

writeJson(memorizeFile, memorizeObj);
console.log(`wrote ${path.relative(REPO_ROOT, memorizeFile)}`);

// ---- 2. index_zh.json — append two self-custody keys ----

const indexFile = path.join(I18N_ZH, 'index_zh.json');
const indexObj = readJson(indexFile);

indexObj.home_card_label_self_custody_4 = '最后一道防线';
indexObj.home_link_title_self_custody_4 = '如何把比特币存进您的大脑';
indexObj['@metadata']['last-updated'] = TODAY;

writeJson(indexFile, indexObj);
console.log(`updated ${path.relative(REPO_ROOT, indexFile)}`);

// ---- 3. wallets_zh.json — append three keys for the memorize-seed inline link ----

const walletsFile = path.join(I18N_ZH, 'wallets_zh.json');
const walletsObj = readJson(walletsFile);

// English (split into a/b/c so the runtime can wrap _b in <a>):
//   _a "For one more layer of resilience, you can also"
//   _b "memorize your seed phrase"          <- becomes the linked text
//   _c "as an invisible backup that travels with you."
//
// Chinese rendering must keep _b as a coherent linkable noun phrase. We choose
// the natural Chinese pattern: "为了多一层韧性,您还可以 [背诵您的恢复短语],
// 作为一份随身携带的隐形备份。"
walletsObj.wallets_s6_c4b_a = '为了多一层韧性，您还可以';
walletsObj.wallets_s6_c4b_b = '背诵您的恢复短语';
walletsObj.wallets_s6_c4b_c = '，作为一份随身携带的隐形备份。';
walletsObj['@metadata']['last-updated'] = TODAY;

writeJson(walletsFile, walletsObj);
console.log(`updated ${path.relative(REPO_ROOT, walletsFile)}`);
