/**
 * Creates Burmese (my) index.json — reads Bengali version and creates Burmese translations.
 * For keys that are proper nouns/author names/link types, copies from English.
 * For content keys, provides Burmese translations.
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'my';
const today = '2026-04-07';

// Read English source
const enData = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en', 'index_en.json'), 'utf8'));

// Start with metadata
const data = {
	"@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang }
};

// Burmese translations for translatable keys
const translations = {
	"bitcoin_builds_a_better_world": "Bitcoin သည် ပိုကောင်းသောကမ္ဘာကို တည်ဆောက်ပါသည်။",
	"home_description": "Bitcoin သည် ပိုကောင်းသောကမ္ဘာကို တည်ဆောက်နေသော ပိုကောင်းသော ငွေကြေးဖြစ်ပါသည်။ Bitcoin သည် လူ့အခွင့်အရေးကို ကာကွယ်ပေးခဲ့ပြီး ငွေကြေးဖောင်းပွမှုမြင့်မားခြင်းမှ လူများကို ကယ်တင်ခဲ့ကာ ဒေသတွင်း လယ်သမားများကို ပံ့ပိုးခဲ့ပြီး ရေနံတူးဖော်မှုမှ ထုတ်လွှတ်မှုကို လျှော့ချခဲ့ပြီး အခြားအရာများစွာ လုပ်ဆောင်ခဲ့ပါသည်။",
	"home_intro": "Bitcoin သည် ပိုကောင်းသောကမ္ဘာကို တည်ဆောက်နေသော ပိုကောင်းသော ငွေကြေးဖြစ်ပါသည်။ Bitcoin ဘယ်လို ပိုကောင်းစေကြောင်း သိရှိရန် အောက်ပါ အမျိုးအစားကို နှိပ်ပါ သို့မဟုတ် ရှာဖွေရန် scroll ဆင်းပါ။",
	"home_btn_money": "ပိုကောင်းသော ငွေကြေး", "home_btn_salary": "သင့်လစာ", "home_btn_freedom": "လွတ်လပ်ရေး", "home_btn_human_rights": "လူ့အခွင့်အရေး", "home_btn_equality": "တန်းတူညီမျှရေး", "home_btn_property_rights": "ပိုင်ဆိုင်ခွင့်", "home_btn_housing": "အိမ်ရာ", "home_btn_business": "စီးပွားရေး", "home_btn_crowdfunding": "အများပြည်သူ ရန်ပုံငွေ", "home_btn_energy": "စွမ်းအင်", "home_btn_environment": "သဘာဝပတ်ဝန်းကျင်", "home_btn_food": "အစားအစာ", "home_btn_art": "အနုပညာ", "home_btn_politics": "နိုင်ငံရေး", "home_btn_war": "စစ်ပွဲ", "home_btn_coding": "ကုဒ်ရေးသားခြင်း", "home_btn_networks": "ကွန်ရက်များ", "home_btn_payments": "ငွေပေးချေမှု", "home_btn_self_custody": "ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း", "home_btn_you": "သင်",
	"home_section_bitcoin_is": "BITCOIN သည်", "home_section_bitcoin_and": "BITCOIN နှင့်",
	"home_link_type_website": "ဝက်ဘ်ဆိုက်", "home_link_type_video": "ဗီဒီယို", "home_link_type_article": "ဆောင်းပါး", "home_link_type_podcast": "ပေါ့ဒ်ကက်စ်", "home_link_type_business_kit": "စီးပွားရေး ကိရိယာအစုံ", "home_link_type_data": "ဒေတာ", "home_link_type_research": "သုတေသန", "home_link_type_story": "ဇာတ်လမ်း", "home_link_type_book_excerpt": "စာအုပ်ကောက်နုတ်ချက်", "home_link_type_street_art": "လမ်းအနုပညာ", "home_link_type_outreach": "ပြန့်ပွားရေး", "home_link_type_campaign": "လှုပ်ရှားမှု", "home_link_type_software": "ဆော့ဖ်ဝဲ", "home_link_type_hardware": "ဟာ့ဒ်ဝဲ", "home_link_type_guide": "လမ်းညွှန်", "home_link_type_email": "အီးမေးလ်",
	"home_link_title_inflation": "Bitcoin တွင် ငွေကြေးဖောင်းပွမှု မရှိပါ", "home_link_title_bank_runs": "Bitcoin တွင် ဘဏ်ပြေးခြင်း မရှိပါ", "home_link_title_gold": "Bitcoin နှင့် ရွှေ", "home_link_title_crypto": "Bitcoin နှင့် Crypto", "home_link_title_cash": "Bitcoin နှင့် ငွေသား", "home_link_title_bonds": "Bitcoin နှင့် ငွေချေးစာချုပ်", "home_link_title_cbdc": "Bitcoin နှင့် CBDC",
	"home_link_title_your_salary_1": "ငွေကြေးဖောင်းပွမှုနှင့် ရင်ဘောင်တန်းရန် သင့်လစာ ဘယ်လောက်တိုးရမလဲ ရှာဖွေပါ။",
	"home_link_title_freedom_1": "Bitcoin ဘာကြောင့် လွတ်လပ်ရေးအတွက် အရေးကြီးသလဲ", "home_link_title_freedom_2": "Bitcoin သည် နိုင်ငံရေးဖိနှိပ်မှုမှ လွတ်မြောက်ခွင့် ပေးပါသည်",
	"home_link_title_human_rights_1": "Bitcoin ဘယ်လို လူ့အခွင့်အရေး ကာကွယ်သလဲ", "home_link_title_human_rights_2": "အာဖရိက၏ တိတ်ဆိတ်သော Bitcoin တော်လှန်ရေး", "home_link_title_human_rights_3": "Bitcoin သည် ကမ္ဘာတစ်ဝှမ်း လူ့အခွင့်အရေး ကာကွယ်နေပါသည်",
	"home_link_title_equality_1": "Bitcoin သည် တောင်အာဖရိကတွင် မျှော်လင့်ချက်နှင့် အခွင့်အလမ်း ယူဆောင်လာပါသည်", "home_link_title_equality_2": "Bitcoin သည် အမေရိကန် လူမည်းများအတွက် ဘယ်လို ဂိမ်းချိန်းဂျာ ဖြစ်နိုင်သလဲ",
	"home_link_title_property_rights_1": "Bitcoin သည် ပြည့်စုံသော ပိုင်ဆိုင်မှုပုံစံ", "home_link_title_property_rights_2": "Bitcoin နှင့် အိမ်ခြံမြေ",
	"home_link_title_housing_1": "Bitcoin ဘယ်လို အိမ်ရာ တတ်နိုင်မှု ပြန်ဖြစ်စေမလဲ",
	"home_link_title_business_3": "Bitcoin နှင့် စတော့ခ်", "home_link_title_business_1": "Bitcoin သည် စီးပွားရေးအတွက် ဘာကြောင့်ကောင်းကြောင်း သိရှိပါ", "home_link_title_business_2": "ဒေသတွင်း စီးပွားရေးတစ်ခုကို Bitcoin လက်ခံစေပါ",
	"home_link_title_crowdfunding_1": "Bitcoin က နိုင်ဂျီးရီးယား၏ အကြီးဆုံးဆန္ဒပြမှုကို ဘယ်လို စွမ်းအားပေးခဲ့သလဲ", "home_link_title_crowdfunding_2": "GoFundMe လှူဒါန်းမှုပိတ်ပြီးနောက် ကနေဒါ ကုန်တင်ကား ဆန္ဒပြမှုက Bitcoin ဖြင့် ငွေရှာခဲ့", "home_link_title_crowdfunding_3": "Geyser = Bitcoin ဖြင့် အများပြည်သူ ရန်ပုံငွေ",
	"home_link_title_energy_1": "Bitcoin သည် Texas လျှပ်စစ်ဂရစ်ကို ဘယ်လို တည်ငြိမ်စေသလဲ", "home_link_title_energy_2": "Bitcoin ဘာကြောင့် စွမ်းအင်သုံးသလဲ?", "home_link_title_energy_3": "Bitcoin ၏ စွမ်းအင်အသုံးပြုမှုသည် ပြဿနာ မဟုတ်ပါ။ ဤအကြောင်းရင်းကြောင့်။", "home_link_title_energy_4": "Bitcoin mining သည် Demand Response ဖြင့် စွမ်းအင်ဂရစ်များကို တည်ငြိမ်စေနေပါသည်", "home_link_title_energy_5": "Bitcoin mining လုပ်သူများ ကျေးလက်အာဖရိက အသိုင်းအဝိုင်းများသို့ ရေအားလျှပ်စစ် ယူဆောင်လာနေပါသည်", "home_link_title_energy_6": "Bitcoin ဘယ်လို ပြန်လည်ပြည့်ဖြိုးနိုင်စွမ်းအင်ကို လှုံ့ဆော်သလဲ",
	"home_link_title_environment_1": "Bitcoin mining ဘယ်လို ကမ္ဘာ့မီသိန်းထုတ်လွှတ်မှု လျှော့ချနေသလဲ", "home_link_title_environment_2": "Bitcoin mining ဘယ်လို အမျိုးသားဥယျာဉ်တစ်ခု ကယ်တင်ခဲ့သလဲ", "home_link_title_environment_3": "Bitcoin သည် ကမ္ဘာ့အစိမ်းရောင်ဆုံး လုပ်ငန်းဖြစ်ပါသည်!", "home_link_title_environment_4": "Bitcoin mining သည် ရေနံသဘာဝဓာတ်ငွေ့ မီးရှို့ခြင်းကို လေထုထဲ မညစ်ညမ်းစေရန် ကာကွယ်နေပါသည်",
	"home_link_title_food_1": "ငွေကြေးဖောင်းပွမှု အစားအစာဈေးနှုန်းကို ဘယ်လို သက်ရောက်သလဲ", "home_link_title_food_2": "ဖီယက်ငွေကြေး အစားအစာ၊ လယ်ယာနှင့် မြေဆီလွှာအတွက် ဘယ်လို ဆိုးသလဲ",
	"home_link_title_fine_art": "Bitcoin နှင့် အနုပညာ",
	"home_link_title_art_1": "ကျွန်ုပ်တို့၏ Bitcoin စတစ်ကာ အစီအစဉ်တွင် ပါဝင်ပါ", "home_link_title_art_2": "သင်သိသူတစ်ဦးထံ Bitcoin စာပို့ကတ် ပို့ပါ", "home_link_title_art_3": "Bitcoin လက်ကမ်းစာရွက်များ ပုံနှိပ်ပြီး ကပ်ပါ",
	"home_link_title_politics_1": "Bitcoin သည် နိုင်ငံရေး ဆန့်ကျင်ဘက်ဖြစ်ပါသည်", "home_link_title_politics_2": "ပိုကောင်းသော ငွေကြေးအတွက် မဲပေးနိုင်ပါသည်",
	"home_link_title_war_1": "Bitcoin ဘယ်လို အဆုံးမရှိ စစ်ပွဲကို ရပ်တန့်နိုင်သလဲ", "home_link_title_war_2": "Bitcoin နှင့် စစ်မှုထမ်းဟောင်းများ: သဘာဝကျသော ချိတ်ဆက်မှု", "home_link_title_war_3": "Bitcoin ဘယ်လို ဆူဒန်စစ်ပွဲမှ အရပ်သားများ လွတ်မြောက်ရန် ကူညီသလဲ",
	"home_link_title_coding_1": "Bitcoin ၏ နည်းပညာဘက်အကြောင်း အပြန်အလှန် သင်ခန်းစာ", "home_link_title_coding_2": "bitcoinSwitch: မည်သည့်စက်ပစ္စည်းကိုမဆို Bitcoin လက်ခံရန် ပြန်လည်တပ်ဆင်", "home_link_title_coding_3": "Bitcoin ၏ လျှို့ဝှက်ချက်များကို ကုဒ်ရေးပြီး ရှာဖွေပါ",
	"home_link_title_networks_1": "Bitcoin ကွန်ရက်၏ တိုက်ရိုက်မြင်ကွင်း", "home_link_title_networks_2": "Bitcoin နှင့် ဘဏ်များ",
	"home_link_title_payments_1": "Bitcoin နှင့် Visa", "home_link_title_payments_2": "Lightning Network ကို ကြည့်ခြင်း (ချက်ချင်း Bitcoin ငွေပေးချေမှု)", "home_link_title_payments_3": "အယ်လ်ဆာလ်ဗာဒို၏ Bitcoin ပိုက်ဆံအိတ်သည် ဆာလ်ဗာဒိုနိုင်ငံသားများ နှစ်စဉ် ငွေလွှဲခ $၄၀၀M ချွေတာနိုင်", "home_link_title_payments_4": "ချက်ချင်း Bitcoin ငွေပေးချေမှု လက်ခံရန် Lightning Address ရယူပါ",
	"home_link_title_self_custody_1": "သင့် Bitcoin ကို ဘယ်လို လုံခြုံစွာ သိမ်းဆည်းမလဲ", "home_link_title_self_custody_2": "Exchange များမှ Bitcoin ထုတ်ယူရမည့် အကြောင်းရင်း ၆ ခု", "home_link_title_self_custody_3": "ရွှေ၊ Bitcoin နှင့် ကိုယ်ပိုင်ထိန်းသိမ်းခြင်း",
	"home_link_title_get_started_1": "Bitcoin ၏ အခြေခံများ သိရှိပါ", "home_link_title_get_started_2": "သင့်ပထမဆုံး Bitcoin ပိုက်ဆံအိတ် ရယူပါ", "home_link_title_get_started_3": "Bitcoin ဘယ်လိုဝယ်မလဲ"
};

// Copy all keys from English, override with Burmese translations where available
for (const [key, value] of Object.entries(enData)) {
	if (key === '@metadata') continue;
	data[key] = translations[key] || value; // Use Burmese if available, else keep English (for author names, URLs etc.)
}

const filePath = path.join(i18nDir, lang, `index_${lang}.json`);
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${filePath}`);
console.log('\nDone creating index.json for Burmese (my).');
