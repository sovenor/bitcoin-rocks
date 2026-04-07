/**
 * Creates Burmese (my) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'my';
const today = '2026-04-07';

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
	"404_title": "၄၀၄ အမှား | စာမျက်နှာ မတွေ့ပါ",
	"404_message": "ဒီပျက်သွားတဲ့ စာမျက်နှာက လုံးဝ မကောင်းပါဘူး",
	"404_home": "ပင်မစာမျက်နှာသို့ ပြန်သွားပါ"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks အကြောင်း — ၂၀၂၂ ခုနှစ်ကတည်းက Bitcoin ပညာရေး",
	"about_description": "bitcoin.rocks သည် ၂၀၂၂ ခုနှစ်တွင် တည်ထောင်ခဲ့သော အခမဲ့ open-source Bitcoin ပညာရေးဝက်ဘ်ဆိုက်ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်မှာ ပညာရေးမှတစ်ဆင့် Bitcoin လက်ခံသုံးစွဲမှုကို အရှိန်မြှင့်ရန်ဖြစ်ပါသည်။",
	"about_header": "အကြောင်း",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်",
	"about_mission_1": "bitcoin.rocks ကို ၂၀၂၂ ခုနှစ်တွင် ရိုးရှင်းသော ရည်ရွယ်ချက်တစ်ခုဖြင့် တည်ထောင်ခဲ့ပါသည်: ပညာရေးမှတစ်ဆင့် Bitcoin လက်ခံသုံးစွဲမှုကို အရှိန်မြှင့်ရန်။",
	"about_mission_2": "Bitcoin အကြောင်း စိတ်ဝင်စားသူတစ်ဦးနှင့် မျှဝေရန် ပထမဆုံးလင့်ခ်အဖြစ် ကျွန်ုပ်တို့ ရှိနေပါသည်။ Bitcoin က ပိုကောင်းသောကမ္ဘာကို ဘယ်လို တည်ဆောက်နေကြောင်း ရှင်းပြပေးသော ဖော်ရွေပြီး လက်လှမ်းမီနိုင်သော အစပြုမှတ်ဖြစ်ပါသည်။",
	"about_mission_3": "လူအများစုက Bitcoin ကို လွဲမှားစွာ နားလည်ကြသည် သို့မဟုတ် မှန်ကန်စွာ မိတ်ဆက်ပေးခြင်း မခံရဖူးပါ။ မည်သူမဆို နားလည်နိုင်သော အခမဲ့ အရည်အသွေးမြင့် ပညာရေးဆိုင်ရာ အကြောင်းအရာများ ပံ့ပိုးပေးခြင်းဖြင့် ၎င်းကို ပြောင်းလဲလိုပါသည်။",
	"about_what_we_do_header": "ကျွန်ုပ်တို့ ဘာလုပ်သလဲ",
	"about_what_we_do_1": "Bitcoin စသုံးသူအသစ်များအတွက် အခမဲ့ ပညာရေးဆိုင်ရာ အကြောင်းအရာများ ဖန်တီးပါသည်။ ကျွန်ုပ်တို့၏ ဝက်ဘ်ဆိုက်သည် ငွေကြေးဖောင်းပွမှု၊ ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း၊ ပိုက်ဆံအိတ်များ၊ Lightning Network နှင့် Bitcoin က အခြားပိုင်ဆိုင်မှုများနှင့် ငွေပေးချေမှုစနစ်များနှင့် ဘယ်လို ယှဉ်ကြောင်း ခေါင်းစဉ်များကို ဖော်ပြပါသည်။",
	"about_what_we_do_2a": "ကျွန်ုပ်တို့ ",
	"about_what_we_do_2b": "အခမဲ့ Bitcoin စတစ်ကာများ",
	"about_what_we_do_2c": " ကို သင့်အိမ်တံခါးထိ ပို့ပေးပါသည်၊ သို့မှသာ သင့်အသိုင်းအဝိုင်းတွင် Bitcoin အသိပညာ ဖြန့်ဝေရာတွင် ကူညီနိုင်ပါသည်။ လူရာနှင့်ချီ၍ ဤစတစ်ကာများပေါ်ရှိ QR ကုဒ်များကို လစဉ် စကင်ဖတ်ပြီး Bitcoin အကြောင်း သင်ယူနေကြပါသည်။",
	"about_what_we_do_3a": "ကျွန်ုပ်တို့ ",
	"about_what_we_do_3b": "ပုံနှိပ်နိုင်သော လက်ကမ်းစာရွက်များ",
	"about_what_we_do_3c": " နှင့် ",
	"about_what_we_do_3d": "စီးပွားရေး ကိရိယာအစုံများ",
	"about_what_we_do_3e": " ကိုလည်း ဒေသတွင်း စီးပွားရေးလုပ်ငန်းများ Bitcoin ငွေပေးချေမှု လက်ခံစေရန် ကူညီလိုသူ မည်သူ့အတွက်မဆို ပံ့ပိုးပေးပါသည်။",
	"about_what_we_do_4": "ကျွန်ုပ်တို့၏ အကြောင်းအရာအားလုံးသည် Bitcoin ကြိုတင်ဗဟုသုတ လုံးဝမလိုဟု ယူဆပါသည်။ သင် Bitcoin နယ်ပယ်တွင် အသစ်ဖြစ်ဖြစ်၊ မျှဝေရန် အရင်းအမြစ်များ ရှာဖွေနေသော အတွေ့အကြုံရင့် Bitcoiner ဖြစ်ဖြစ်၊ bitcoin.rocks သည် သင့်အတွက်ဖြစ်ပါသည်။",
	"about_editorial_header": "ကျွန်ုပ်တို့၏ အယ်ဒီတာဆိုင်ရာ ချဉ်းကပ်မှု",
	"about_editorial_1": "bitcoin.rocks ပေါ်ရှိ အကြောင်းအရာတိုင်းကို ကြီးကြပ်ရွေးချယ်ပြီး အချက်အလက်စစ်ဆေးထားပါသည်။ ဒေတာ သို့မဟုတ် စာရင်းအင်းများ ကိုးကားသောအခါ၊ သင်ကိုယ်တိုင် အချက်အလက်ကို အတည်ပြုနိုင်ရန် ကျွန်ုပ်တို့၏ အရင်းအမြစ်များကို ကိုးကားပါသည်။",
	"about_editorial_2": "TIME Magazine၊ Forbes၊ MIT Technology Review၊ Lyn Alden နှင့် အခြားအများအပြားကဲ့သို့ ယုံကြည်ရသော အရင်းအမြစ်များသို့ လင့်ခ်ချိတ်ပါသည်။ အချက်အလက်များကို ရှင်းလင်းစွာ တင်ပြသောအခါ Bitcoin က သူ့ဘာသာသူ ပြောပြနိုင်သည်ဟု ကျွန်ုပ်တို့ ယုံကြည်ပါသည်။",
	"about_editorial_3": "ကျွန်ုပ်တို့၏ အကြောင်းအရာကို တိကျမှုနှင့် လတ်ဆတ်မှု သေချာစေရန် ပုံမှန် ပြန်လည်သုံးသပ်ပြီး အပ်ဒိတ်လုပ်ပါသည်။ အကြောင်းအရာအားလုံးသည် Bitcoin ပညာရေးအပေါ်သာ အာရုံစိုက်ပါသည်။",
	"about_open_source_header": "Open Source",
	"about_open_source_1a": "bitcoin.rocks သည် MIT License အောက်တွင် လိုင်စင်ရထားသော အခမဲ့ open-source ပရောဂျက်ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ ကုဒ်အခြေခံတစ်ခုလုံးကို ",
	"about_open_source_1b": "GitHub တွင်",
	"about_open_source_1c": " အများပြည်သူ ရရှိနိုင်ပါသည်။",
	"about_open_source_2": "မည်သူမဆို bitcoin.rocks ကို ပံ့ပိုးကူညီနိုင်ပါသည်။ ကျွန်ုပ်တို့၏ အကြောင်းအရာကို ကမ္ဘာတစ်ဝှမ်းရှိ လူများ လက်လှမ်းမီနိုင်စေရန် ကူညီပေးသော ဘာသာပြန်သူများကို အထူးကြိုဆိုပါသည်။",
	"about_open_source_3": "ကျွန်ုပ်တို့၏ စေတနာ့ဝန်ထမ်း ဘာသာပြန်သူများ အသိုင်းအဝိုင်းကြောင့် bitcoin.rocks သည် လက်ရှိတွင် ဘာသာစကား ၃၆ မျိုးဖြင့် ရရှိနိုင်ပြီး ဆက်လက်တိုးပွားလျက်ရှိပါသည်။",
	"about_open_source_contribute": "ဘယ်လို ပံ့ပိုးကူညီရမလဲ သိရန်။",
	"about_contact_header": "ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ",
	"about_contact_1": "သင့်ထံမှ ကြားလိုပါသည်။ မေးခွန်း၊ အကြံပြုချက်ဖြစ်ဖြစ်၊ ဟယ်လိုပဲ ပြောချင်ဖြစ်ဖြစ်၊ အချိန်မရွေး ဆက်သွယ်ပါ။",
	"about_contact_email": "အီးမေးလ်:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "သင့်စတစ်ကာများကို ၂ မှ ၄ ပတ်အတွင်း လက်ခံရရှိပါမည်။ စောင့်ဆိုင်းနေစဉ်၊ သင့်စတစ်ကာများ ကပ်ရန် ကောင်းသောနေရာ စဉ်းစားကြည့်ပါ!",
	"sticker_success_2": "ကောင်းသော စတစ်ကာကပ်နေရာများမှာ:",
	"sticker_success_list_1": "လူများ မြင်ရမည့် အများပြည်သူနေရာများ",
	"sticker_success_list_2": "အမြန်ဖယ်ရှားခံရနိုင်ခြေ နည်းသောနေရာများ (စတစ်ကာများသည် အမြဲတမ်း ပျက်စီးမှု မဖြစ်စေပါ)",
	"sticker_success_list_3": "လွယ်ကူစွာ ကပ်နိုင်သော မျက်နှာပြင်များ (သတ္တု၊ ပလတ်စတစ်၊ မှန်)",
	"sticker_success_list_4": "ပုဂ္ဂလိက ပိုင်ဆိုင်မှုပေါ်တွင် မကပ်ပါနှင့်၊ ဆိုင်းဘုတ်များ၊ ATM များ၊ သို့မဟုတ် ဓာတ်ဆီပန့်များကို မဖုံးပါနှင့်",
	"sticker_success_3": "အခြားသူများ သူတို့၏ စတစ်ကာများကို ဘယ်မှာ ကပ်နေကြလဲ ကြည့်ချင်ပါသလား?",
	"sticker_success_flyers_bar_new": "အသစ်!",
	"sticker_success_flyers_bar_cta": "Bitcoin လက်ကမ်းစာရွက်များ ပုံနှိပ်ပြီး ကပ်ပါ →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "သင့်တောင်းဆိုမှုကို အောင်မြင်စွာ လက်ခံရရှိပါပြီ။",
	"sticker_language_success_2": "ကျွန်ုပ်တို့ ဖိုင်အသစ်များကို အတွဲလိုက် ထုတ်ဝေပါသည်၊ ထို့ကြောင့် ဤဖိုင်များ ဒေါင်းလုဒ်ရနိုင်ရန် ရက်သတ္တပတ်အနည်းငယ် ကြာနိုင်ပါသည်။ မကြာမီ ပြန်လာစစ်ဆေးပါ!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "သင့်စာပို့ကတ်များကို ၁ မှ ၂ ပတ်အတွင်း လက်ခံရရှိပါမည်။",
	"postcard_success_2": "ဤစာပို့ကတ်များကို သင်သိသော တစ်စုံတစ်ဦးထံ ပို့ခြင်းဖြင့် Bitcoin လက်ခံသုံးစွဲမှုကို အရှိန်မြှင့်ရန် ကူညီပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "သင့်ဆိုင်းဘုတ်များကို ၁ မှ ၂ ပတ်အတွင်း လက်ခံရရှိပါမည်။ စောင့်ဆိုင်းနေစဉ်၊ သင့်ဆိုင်းဘုတ်များ ကပ်ရန် ကောင်းသောနေရာများ စဉ်းစားကြည့်ပါ!",
	"sign_success_3": "အခြားသူများ သူတို့၏ ဆိုင်းဘုတ်များကို ဘယ်မှာ ကပ်နေကြလဲ ကြည့်ချင်ပါသလား?",
	"signs_share_header": "သင့်ဆိုင်းဘုတ်နေရာများ မျှဝေပါ",
	"signs_share_c1": "Nostr တွင် ကျွန်ုပ်တို့နှင့် သင့်ဆိုင်းဘုတ်နေရာ ဓာတ်ပုံ မျှဝေပါ၊ ကျွန်ုပ်တို့ သင့်ကို sats zap ပေးပါမည်! Sats များသည် bitcoin ၏ အပိုင်းအစများဖြစ်ပါသည်။",
	"signs_btn_share_on_nostr": "NOSTR တွင် မျှဝေပါ",
	"signs_btn_what_is_nostr": "NOSTR ဆိုတာ ဘာလဲ?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "ပေါင်းစပ်ငွေကြေးဖောင်းပွမှု ဂဏန်းတွက်စက်",
	"cic_description": "ငွေကြေးဖောင်းပွမှုနှင့် ရင်ဘောင်တန်းရန် သင့်လစာ ဘယ်လောက်တိုးရမလဲ သိရှိရန် ဤပေါင်းစပ်ငွေကြေးဖောင်းပွမှု ဂဏန်းတွက်စက်ကို အသုံးပြုပါ။",
	"what_can_i_do_about": "ငွေကြေးဖောင်းပွမှုအတွက်",
	"what_can_i_do_about_2": "ဘာလုပ်နိုင်သလဲ?",
	"cic_inflation_cta": "Bitcoin ဖြင့် ငွေကြေးဖောင်းပွမှုမှ ရွေးချယ်ထွက်ပါ"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr ဖြင့် Matrix မှ လွတ်မြောက်ပါ",
	"nostr_header": "NOSTR ဖြင့် MATRIX မှ လွတ်မြောက်ပါ"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr ဆိုတာ ဘာလဲ?",
	"what_is_nostr_header": "NOSTR ဆိုတာ ဘာလဲ?"
});

console.log('\nDone creating simple files for Burmese (my).');
