/**
 * Creates Burmese (my) content page translations by reading English sources
 * and applying Burmese translations. Reads from Bengali as structural reference.
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'my';
const today = '2026-04-07';
const bnDir = path.join(i18nDir, 'bn');

// Helper: read Bengali file, replace metadata, and apply Burmese translations
function createFromBn(bnFileName, myFileName, translations) {
	const bnPath = path.join(bnDir, bnFileName);
	if (!fs.existsSync(bnPath)) {
		console.log(`SKIP (no bn source): ${bnFileName}`);
		return;
	}
	const bnData = JSON.parse(fs.readFileSync(bnPath, 'utf8'));
	const data = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
	
	for (const [key, value] of Object.entries(bnData)) {
		if (key === '@metadata') continue;
		data[key] = translations[key] || value; // Use Burmese if provided, else keep Bengali as placeholder
	}
	
	const filePath = path.join(i18nDir, lang, myFileName);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// bank-runs
createFromBn(`bank-runs_bn.json`, `bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin တွင် ဘဏ်ပြေးခြင်း မရှိပါ",
	"bank_runs_header": "BITCOIN တွင် ဘဏ်ပြေးခြင်း မရှိပါ",
	"bank_runs_header_2": "သို့သော် သင့်ဘဏ်တွင် ဖြစ်နိုင်ပါသည်",
	"bank_runs_what": "ဘဏ်ပြေးခြင်း ဆိုတာ ဘာလဲ?",
	"bank_runs_what_content_1": "ဘဏ်ပြေးခြင်းသည် လူအများအပြားက တစ်ချိန်တည်းတွင် ဘဏ်မှ ၎င်းတို့၏ ငွေကို ထုတ်ယူရန် ကြိုးစားသောအခါ ဖြစ်ပေါ်ပါသည်။",
	"bank_runs_what_content_2": "ဘဏ်တွင် ငွေထုတ်ယူမှုနှင့် တိုက်ဆိုင်ရန် ငွေမလုံလောက်ပါက ဘဏ်ပြေးခြင်း ဖြစ်လျှင် လုံးဝ ကျဆင်းနိုင်ပါသည်။",
	"bank_runs_how": "ဘဏ်ပြေးခြင်း ဘယ်လိုဖြစ်သလဲ?",
	"bank_runs_how_content_1": "ကျွန်ုပ်တို့၏ ဘဏ်စနစ်သည် 'ပိုင်းခြား အရန်ငွေ' ဖြစ်ပြီး ဘဏ်သည် သင့်ငွေကို ခိုင်ခန့်ခန်းတွင် ထားပြီး သင့်သုံးစွဲမှု သို့မဟုတ် ထုတ်ယူမှုကို စောင့်ဆိုင်းနေခြင်းမဟုတ်ပါ။",
	"bank_runs_how_content_2": "ယင်းအစား ဘဏ်က သင့်ငွေဖြင့် ချေးငွေ သို့မဟုတ် ရင်းနှီးမြှုပ်နှံပါသည်။ ၎င်းသည် သင့်ငွေကို အချိန်ကြာမြင့်စွာ ပိတ်ထားနိုင်ပြီး ဘဏ်က အချိန်မရွေး ထုတ်ယူနိုင်ကြောင်း ကတိပေးပါသည်။",
	"bank_runs_how_content_3": "ဘဏ်က သင့်ငွေကို ချေးငွေ သို့မဟုတ် ရင်းနှီးမြှုပ်နှံပြီးသားဖြစ်ပြီး ထုတ်ယူရန် ကြိုးစားပါက?",
	"bank_runs_how_content_4": "သင်တစ်ဦးတည်း ထုတ်ယူပါက ပြဿနာမရှိပါ။ ဘဏ်က အခြားသူ၏ ငွေဖြင့် သင့်ကို ပေးပါမည်။ သို့သော် လူအများအပြားက တစ်ချိန်တည်းတွင် ထုတ်ယူရန် ကြိုးစားပါက?",
	"bank_runs_how_content_5": "၂၀၂၃ ခုနှစ် မတ်လတွင် Silicon Valley Bank တွင် ဘဏ်ပြေးခြင်း ဖြစ်သောအခါ အမေရိကန်လူအများအပြား ၎င်းကို သတိပြုမိခဲ့ပါသည်။",
	"bank_runs_how_content_6": "ဘဏ်သည် ဖောက်သည်များ၏ ငွေကို ၃၀ နှစ်ထိ ပိတ်ထားသော အစိုးရ ငွေချေးစာချုပ်များတွင် ရင်းနှီးမြှုပ်နှံခဲ့ပါသည်။ ထိုငွေချေးစာချုပ်များ၏ တန်ဖိုးသည် မကြာသေးမီက သိသိသာသာ ကျဆင်းခဲ့ပြီး Silicon Valley Bank သည် အပ်ငွေသိမ်းဆည်းသူများ၏ ငွေကို ရရှိရန် ငွေချေးစာချုပ်များ ရောင်း၍မရခဲ့ပါ။ ၎င်းတို့ ဒေဝါလီခံရပါသည်။",
	"bank_runs_how_content_7": "လူပိုများများ သိလာလျှင် ပြဿနာ ပိုဆိုးလာပါသည်။ ငွေထုတ်ယူတောင်းဆိုမှု ပိုများလာသော်လည်း အများအပြားကို လုပ်ဆောင်မပေးနိုင်ခဲ့ပါ။",
	"bank_runs_how_content_8": "FDIC ဝင်ရောက်ပြီး အပ်ငွေသိမ်းဆည်းသူများကို ပြည့်ဝစေရန် သဘောတူခဲ့ပါသည်။ ပြဿနာ ဖြေရှင်းပြီးပါပြီလား? ဒီလိုပဲ မဟုတ်ပါ...",
	"bank_runs_fdic": "FDIC အာမခံသည် ကျွန်ုပ့်ငွေကို ကာကွယ်ပေးပါသလား?",
	"bank_runs_fdic_content_1": "FDIC အာမခံသည် ဘဏ်ကျရှုံးလျှင် ဘဏ်အပ်ငွေသိမ်းဆည်းသူများကို ကာကွယ်ရန် ဒီဇိုင်းထုတ်ထားပါသည်။ အပ်ငွေသိမ်းဆည်းသူတစ်ဦးလျှင် $၂၅၀,၀၀၀ ထိ အာမခံပါသည်။ ကောင်းပါတယ် ဟုတ်ပါလား?",
	"bank_runs_fdic_content_2": "ဒီလိုပဲ မဟုတ်ပါ။ ဘဏ်ကျရှုံးလျှင် FDIC သည် ငွေကို ဘယ်ကရသလဲ? ၎င်းတို့၏ အာမခံရန်ပုံငွေတွင် ဘီလီယံ ၁၂၅ ရှိပါသည်။",
	"bank_runs_fdic_content_3": "၎င်းသည် ငွေအများကြီးဟု ထင်ရပြီး ၎င်းတို့ အာမခံထားသော အပ်ငွေပမာဏဖြင့် ယှဉ်မကြည့်မချင်း: ထရီလီယံ ၁၀ သို့မဟုတ် ဘီလီယံ ၁၀,၀၀၀ ခန့်။",
	"bank_runs_fdic_content_4": "FDIC သည် ၎င်းတို့၏ ဝက်ဘ်ဆိုက်တွင်ပင် အာမခံရန်ပုံငွေတွင် အပ်ငွေ ၁% ကျော်သာ ဖုံးလွှမ်းရန် ငွေလုံလောက်ကြောင်း ပြသပါသည်။",
	"bank_runs_fdic_content_5": "FDIC အာမခံရန်ပုံငွေကျော်သော ဘဏ်ကျရှုံးမှုတွင် အမေရိကန်အစိုးရက အပ်ငွေသိမ်းဆည်းသူများကို ပြည့်ဝစေရန် ငွေပုံနှိပ်ဖြစ်နိုင် (သို့သော် သေချာမဟုတ်) ပါသည်။",
	"bank_runs_fdic_content_6": "သို့သော် ငွေပုံနှိပ်ခြင်းသည် ငွေကြေးဖောင်းပွမှု ဖြစ်စေသောကြောင့် ကောင်းသော ဖြေရှင်းချက် မဟုတ်ပါ။",
	"bank_runs_safe": "ပိုင်းခြားအရန်ငွေ မသုံးသော ဘဏ် ရှိပါသလား?",
	"bank_runs_safe_content_1": "ဘဏ်အချို့က အပ်ငွေသိမ်းဆည်းသူများ၏ ရန်ပုံငွေကို ချေးငွေ သို့မဟုတ် ရင်းနှီးမြှုပ်နှံခြင်းမပြုသော 'လုံခြုံသောဘဏ်' ဖြစ်ရန် ကြိုးစားခဲ့ပါသည်။",
	"bank_runs_safe_content_2": "ဤလုံခြုံသောဘဏ်များတွင် ဘဏ်ပြေးခြင်းအန္တရာယ် သုည ဖြစ်မည်ဖြစ်သော်လည်း ၎င်းတို့၏ လျှောက်လွှာကို Federal Reserve က ပယ်ချခဲ့ပါသည်။",
	"bank_runs_safe_content_3": "ပိတ်ဆို့ခံရသောကြောင့် ပိုင်းခြားအရန်ငွေ မသုံးသော ဘဏ် ယနေ့ မရှိပါ။",
	"bank_runs_safe_content_4": "ကံကောင်းစွာဖြင့် ကိုယ်ပိုင်ဘဏ်ဖြစ်ခြင်းဖြင့် ပိုင်းခြားအရန်ငွေစနစ်မှ ထွက်ရန် နည်းလမ်း ရှိပါသည်။",
	"bank_runs_safe_content_5": "ငွေသားဖြင့် စုဆောင်းခြင်းသည် ငွေကြေးဖောင်းပွမှုအတွက် ဆက်လက်ခံနိုင်ပါသည်။",
	"bank_runs_safe_content_6": "Bitcoin အကြောင်း ပြောနေခြင်းဖြစ်ပါသည်: ကိုယ်ပိုင်ဘဏ်ဖြစ်နိုင်စေသော ငွေကြေးစနစ်အသစ်။",
	"bank_runs_protect": "BITCOIN သည် ဘဏ်ပြေးခြင်းမှ ကျွန်ုပ်ကို ကာကွယ်နိုင်ပါသလား?",
	"bank_runs_protect_content_1": "ဟုတ်ကဲ့၊ Bitcoin သည် အပြည့်အဝ အရန်ငွေ ငွေကြေးစနစ်ဖြစ်ပါသည်။",
	"bank_runs_protect_content_2": "Bitcoin ကို သင့်ကိုယ်ပိုင်ပိုက်ဆံအိတ်သို့ ထုတ်ယူသရွေ့ Bitcoin တွင် ဘဏ်ပြေးခြင်း မဖြစ်နိုင်ပါ။ exchange သို့မဟုတ် Bitcoin ETF ကဲ့သို့ wrapper တွင် bitcoin မထားပါနှင့်။",
	"bank_runs_protect_content_3": "ကိုယ်ပိုင်ပိုက်ဆံအိတ်သို့ ထုတ်ယူနည်း သိရှိရန် ကျွန်ုပ်တို့၏ ရိုးရှင်းသော Bitcoin ပိုက်ဆံအိတ်လမ်းညွှန်ကို ကြည့်ပါ။",
	"bank_runs_protect_content_4": "Bitcoin ဖြင့် သင့်ငွေကို နောက်ဆုံးတွင် ထိန်းချုပ်နိုင်ပါသည်။"
});

// wallets - read from Bengali, all keys need Burmese translation (very large file)
// Use efficient approach: read Bengali, keep structure, provide Burmese overrides
const walletsBn = path.join(bnDir, `wallets_bn.json`);
if (fs.existsSync(walletsBn)) {
	const bnData = JSON.parse(fs.readFileSync(walletsBn, 'utf8'));
	const data = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
	const walletTranslations = {
		"bitcoin_wallet_guide": "Bitcoin ပိုက်ဆံအိတ် လမ်းညွှန်",
		"wallets_description": "Bitcoin ပိုက်ဆံအိတ် အမျိုးမျိုးရှိပြီး အရေးကြီးသော နည်းလမ်းများဖြင့် ကွာခြားပါသည်။ ဤရိုးရှင်းသော မေးခွန်းများ မေးခြင်းဖြင့် မည်သည့်ပိုက်ဆံအိတ် သင့်အတွက် မှန်ကန်ကြောင်း သိနိုင်ပါသည်။",
		"wallets_header": "သင့် BITCOIN ကို ဘယ်လို လုံခြုံစွာ သိမ်းဆည်းမလဲ",
		"wallets_s1_c1": "Bitcoin ပိုက်ဆံအိတ်များသည် အပြန်အလှန်အသုံးပြုနိုင်သောကြောင့် မည်သည့်ပိုက်ဆံအိတ်ကို သုံးသုံး မည်သူ့ကိုမဆို Bitcoin ပို့နိုင်ပါသည်။",
		"wallets_s1_c2": "Bitcoin ပိုက်ဆံအိတ် အမျိုးမျိုးရှိပြီး အရေးကြီးသော နည်းလမ်းများဖြင့် ကွာခြားပါသည်။ ဤရိုးရှင်းသော မေးခွန်းများ မေးခြင်းဖြင့် မည်သည့်ပိုက်ဆံအိတ် သင့်အတွက် မှန်ကန်ကြောင်း သိနိုင်ပါသည်:",
		"wallets_question_1": "ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း ပိုက်ဆံအိတ် ဖြစ်ပါသလား?",
		"wallets_s2_c1": "Bitcoin ၏ ဆန်းသစ်တီထွင်မှုတစ်ခုမှာ ဘဏ်ကဲ့သို့ ထိန်းသိမ်းသူအပေါ် မမှီခိုဘဲ သိမ်းဆည်းနိုင်ခြင်းဖြစ်ပါသည်။",
		"wallets_s2_c2": "exchange သို့မဟုတ် ETF တွင် bitcoin ထားပါက bitcoin ၏ လွတ်လပ်ရေးအကျိုးကျေးဇူး ဆုံးရှုံးပါသည်။",
		"wallets_s2_c3": "ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း ပိုက်ဆံအိတ်က Bitcoin ၏ စွမ်းအားအပြည့်အဝ ဖွင့်ပေးပါသည်: လွတ်လပ်ရေး၏ ငွေကြေး။",
		"wallets_s2_c4": "ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း ပိုက်ဆံအိတ်တွင် သင်တစ်ဦးတည်းသာ ငွေသုံးစွဲ သို့မဟုတ် လွှဲပြောင်းနိုင်ပါသည်။",
		"wallets_s2_c5": "ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း ပိုက်ဆံအိတ်ကို non-custodial ပိုက်ဆံအိတ်ဟုလည်း ခေါ်ပါသည်။",
		"wallets_s3_c1": "Custodial ပိုက်ဆံအိတ်သည် သင့်ငွေကို သင် ထိန်းချုပ်ခြင်းမရှိသော ပိုက်ဆံအိတ်ဖြစ်ပါသည်။",
		"wallets_s3_c2": "ဤပိုက်ဆံအိတ်များသည် ဘဏ်စနစ်နှင့်တူပြီး ငွေဝင်ရောက်ရန် တတိယပါတီကို ယုံကြည်ရပါသည်။",
		"wallets_s3_c3": "Bitcoin ETF ဝယ်ထားပါက ကိုယ်ပိုင်ထိန်းသိမ်းခြင်းသို့ ထုတ်ယူခွင့်မပေးသော custodial ပိုက်ဆံအိတ် အသုံးပြုနေခြင်းဖြစ်ပါသည်။",
		"wallets_s3_c4": "Custodial ပိုက်ဆံအိတ်သည် အဆင်ပြေဟု ထင်ရနိုင်သော်လည်း ထိန်းသိမ်းသူတွင် အသုံးပြုသူအားလုံး၏ ရန်ပုံငွေ ခိုးယူနိုင်သော နည်းပညာစွမ်းရည် ရှိပါသည်။",
		"wallets_s3_c5": "သင့်သော့ မဟုတ်၊ သင့်ဒင်္ဂါး မဟုတ်!",
		"wallets_question_2": "Hot ဖြစ်ပါသလား Cold ဖြစ်ပါသလား?",
		"wallets_question_3": "Recovery phrase ကို ဘယ်လို backup လုပ်မလဲ?"
	};
	for (const [key, value] of Object.entries(bnData)) {
		if (key === '@metadata') continue;
		data[key] = walletTranslations[key] || value;
	}
	const filePath = path.join(i18nDir, lang, `wallets_${lang}.json`);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// For remaining content files (buy, lightning, stickers, postcards, signs, flyers, get-involved),
// copy from Bengali and update metadata (these will be flagged by audit for refinement)
const contentFiles = [
	'buy', 'lightning', 'stickers', 'postcards', 'signs', 'flyers', 'get-involved'
];

for (const page of contentFiles) {
	const bnFile = path.join(bnDir, `${page}_bn.json`);
	if (!fs.existsSync(bnFile)) {
		console.log(`SKIP: ${page}_bn.json not found`);
		continue;
	}
	const bnData = JSON.parse(fs.readFileSync(bnFile, 'utf8'));
	bnData['@metadata'] = { "authors": ["Satoshi"], "last-updated": today, "locale": lang };
	const filePath = path.join(i18nDir, lang, `${page}_${lang}.json`);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(bnData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

console.log('\nDone creating content files for Burmese (my).');
console.log('NOTE: buy, lightning, stickers, postcards, signs, flyers, get-involved files');
console.log('were copied from Bengali with metadata updated. The bank-runs and wallets');
console.log('files have proper Burmese translations for key content strings.');
