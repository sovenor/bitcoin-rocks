/**
 * Creates Sinhala (si) index.json - reads English source and applies translations
 */
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'si';
const today = '2026-04-11';

const enIndex = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en', 'index_en.json'), 'utf8'));

const translations = {
	"bitcoin_builds_a_better_world": "Bitcoin වඩා හොඳ ලෝකයක් ගොඩනගයි.",
	"home_description": "Bitcoin යනු වඩා හොඳ ලෝකයක් ගොඩනගන වඩා හොඳ මුදල්ය. Bitcoin මානව අයිතිවාසිකම් ආරක්ෂා කර, ඉහළ මුදල් නිෂ්පාදනයෙන් මිනිසුන් බේරාගෙන, ප්\u200Dරාදේශීය ගොවීන්ට සහාය වී, තෙල් කැණීමෙන් විමෝචන අඩු කර, තවත් බොහෝ දේ කර ඇත.",
	"home_intro": "Bitcoin යනු වඩා හොඳ ලෝකයක් ගොඩනගන වඩා හොඳ මුදල්ය. Bitcoin එය වඩා හොඳ කරන ආකාරය ඉගෙන ගැනීමට පහත ප්\u200Dරවර්ගයක් මත ටැප් කරන්න, නැතිනම් ගවේෂණය කිරීමට පමණක් ස්ක්\u200Dරෝල් කරන්න.",
	"home_btn_money": "වඩා හොඳ මුදල්",
	"home_btn_salary": "ඔබේ වේතනය",
	"home_btn_freedom": "නිදහස",
	"home_btn_human_rights": "මානව අයිතිවාසිකම්",
	"home_btn_equality": "සමානාත්මතාවය",
	"home_btn_property_rights": "දේපළ අයිතිවාසිකම්",
	"home_btn_housing": "නිවාස",
	"home_btn_business": "ව්\u200Dයාපාර",
	"home_btn_crowdfunding": "සමූහ මූල්\u200Dය සම්පාදනය",
	"home_btn_energy": "බලශක්තිය",
	"home_btn_environment": "පරිසරය",
	"home_btn_food": "ආහාර",
	"home_btn_art": "කලාව",
	"home_btn_politics": "දේශපාලනය",
	"home_btn_war": "යුද්ධය",
	"home_btn_coding": "කේතනය",
	"home_btn_networks": "ජාල",
	"home_btn_payments": "ගෙවීම්",
	"home_btn_self_custody": "ස්ව-රක්ෂාව",
	"home_btn_you": "ඔබ",
	"home_section_bitcoin_is": "BITCOIN යනු",
	"home_section_bitcoin_and": "BITCOIN සහ",
	"home_link_type_website": "වෙබ් අඩවිය",
	"home_link_type_video": "වීඩියෝ",
	"home_link_type_article": "ලිපිය",
	"home_link_type_podcast": "පොඩ්කාස්ට්",
	"home_link_type_business_kit": "ව්\u200Dයාපාර කිට්",
	"home_link_type_data": "දත්ත",
	"home_link_type_research": "පර්යේෂණ",
	"home_link_type_story": "කතාව",
	"home_link_type_book_excerpt": "පොත් උපුටාගැනීම",
	"home_link_type_street_art": "වීදි කලාව",
	"home_link_type_outreach": "ප්\u200Dරචාරණය",
	"home_link_type_campaign": "ව්\u200Dයාපාරය",
	"home_link_type_software": "මෘදුකාංග",
	"home_link_type_hardware": "දෘඩාංග",
	"home_link_type_guide": "මාර්ගෝපදේශය",
	"home_link_type_email": "විද්\u200Dයුත් තැපැල්",
	"home_link_title_inflation": "Bitcoin හි මුදල් නිෂ්පාදනය නැත",
	"home_link_title_bank_runs": "Bitcoin හි බැංකු ධාවන නැත",
	"home_link_title_gold": "Bitcoin එදිරිව රත්තරන්",
	"home_link_title_crypto": "Bitcoin එදිරිව ක්\u200Dරිප්ටෝ",
	"home_link_title_cash": "Bitcoin එදිරිව මුදල්",
	"home_link_title_bonds": "Bitcoin එදිරිව බැඳුම්කර",
	"home_link_title_cbdc": "Bitcoin එදිරිව CBDCs",
	"home_link_title_your_salary_1": "මුදල් නිෂ්පාදනයට සමානව යැමට ඔබේ වේතනය කීයක් වැඩි කළ යුතුදැයි සොයාගන්න.",
	"home_link_title_freedom_1": "නිදහස සඳහා Bitcoin වැදගත් වන්නේ ඇයි",
	"home_link_title_freedom_2": "Bitcoin දේශපාලන මර්දනයෙන් නිදහස ලබා දෙයි",
	"home_link_title_human_rights_1": "Bitcoin මානව අයිතිවාසිකම් ක්\u200Dරියාත්මක කරන ආකාරය",
	"home_link_title_human_rights_2": "අප්\u200Dරිකාවේ නිහඬ Bitcoin විප්ලවය",
	"home_link_title_human_rights_3": "Bitcoin ලොව පුරා මානව අයිතිවාසිකම් ආරක්ෂා කරයි",
	"home_link_title_equality_1": "Bitcoin දකුණු අප්\u200Dරිකානුවන්ට බලාපොරොත්තුව සහ අවස්ථාව ගෙන යයි",
	"home_link_title_equality_2": "Bitcoin කළු ඇමරිකානුවන් සඳහා ක්\u200Dරීඩාව වෙනස් කළ හැකි ආකාරය",
	"home_link_title_property_rights_1": "Bitcoin යනු දේපළෙහි සම්පූර්ණ ආකෘතියයි",
	"home_link_title_property_rights_2": "Bitcoin එදිරිව නිශ්චල දේපළ",
	"home_link_title_housing_1": "Bitcoin නිවාස නැවත ලබාගත හැකි ලෙස සාදන ආකාරය",
	"home_link_title_business_3": "Bitcoin එදිරිව කොටස්",
	"home_link_title_business_1": "Bitcoin ව්\u200Dයාපාර සඳහා හොඳ ඇයිදැයි ඉගෙන ගන්න",
	"home_link_title_business_2": "ස්ථානික ව්\u200Dයාපාරයකට Bitcoin පිළිගැනීමට සලස්වන්න",
	"home_link_title_crowdfunding_1": "Bitcoin නයිජීරියාවේ විශාලතම විරෝධතාවලට බලශක්තිය සපයා දුන් ආකාරය",
	"home_link_title_crowdfunding_2": "GoFundMe පරිත්\u200Dයාග අවහිර කළ පසු කැනේඩියානු ට්\u200Dරක් රථ විරෝධතාව Bitcoin වලින් මුදල් රැස් කරයි",
	"home_link_title_crowdfunding_3": "Geyser = Bitcoin සමඟ සමූහ මූල්\u200Dය සම්පාදනය",
	"home_link_title_energy_1": "Bitcoin ටෙක්සාස් විදුලි ජාලය ස්ථාවර කරන ආකාරය",
	"home_link_title_energy_2": "Bitcoin බලශක්තිය භාවිතා කරන්නේ ඇයි?",
	"home_link_title_energy_3": "Bitcoin හි බලශක්ති භාවිතය ගැටලුවක් නොවේ. මෙන්න ඇයි.",
	"home_link_title_energy_4": "Bitcoin කැණීම ඉල්ලුම ප්\u200Dරතිචාරය හරහා බලශක්ති ජාල ස්ථාවර කරයි",
	"home_link_title_energy_5": "Bitcoin කම්කරුවන් ග්\u200Dරාමීය අප්\u200Dරිකානු ප්\u200Dරජාවන්ට ජල විදුලිය ගෙන එයි",
	"home_link_title_energy_6": "Bitcoin පුනර්නව බලශක්තිය දිරිමත් කරන ආකාරය",
	"home_link_title_environment_1": "Bitcoin කැණීම ගෝලීය මීතේන් විමෝචන අඩු කරන ආකාරය",
	"home_link_title_environment_2": "Bitcoin කැණීම ජාතික උද්\u200Dයානයක් බේරා ගත් ආකාරය",
	"home_link_title_environment_3": "Bitcoin පෘථිවියේ වඩාත්ම හරිත කර්මාන්තයයි!",
	"home_link_title_environment_4": "Bitcoin කැණීම දහනය කරන ස්වාභාවික වායුව වායුගෝලයට දූෂණය වීම වළක්වයි",
	"home_link_title_food_1": "මුදල් නිෂ්පාදනය ආහාර මිල වලට බලපාන ආකාරය",
	"home_link_title_food_2": "රාජ්\u200Dය මුදල් ආහාර, ගොවිපල, සහ පෘථිවියේ පස සඳහා නරක වන ආකාරය",
	"home_link_title_fine_art": "Bitcoin එදිරිව කලා කෘති",
	"home_link_title_art_1": "අපේ Bitcoin ස්ටිකර් වැඩසටහනට එක්වන්න",
	"home_link_title_art_2": "ඔබ දන්නා කෙනෙකුට Bitcoin පෝස්ට්කාඩ්පතක් යවන්න",
	"home_link_title_art_3": "Bitcoin ප්\u200Dරචාර පත්\u200Dරිකා මුද්\u200Dරණය කර ඇලීම කරන්න",
	"home_link_title_politics_1": "Bitcoin යනු දේශපාලන විරෝධාභාසයකි",
	"home_link_title_politics_2": "ඔබට වඩා හොඳ මුදල් සඳහා ඡන්දය දිය හැකිය",
	"home_link_title_war_1": "Bitcoin අවසන් නැති යුද්ධ අවසන් කළ හැකි ආකාරය",
	"home_link_title_war_2": "Bitcoin සහ ප්\u200Dරාක්තන: ස්වාභාවික ගැළපීමක්",
	"home_link_title_war_3": "Bitcoin සුඩානයේ යුද්ධයෙන් සිවිල් වැසියන්ට මිදීමට උදවු කරන ආකාරය",
	"home_link_title_coding_1": "Bitcoin හි තාක්ෂණික පැත්ත ගැන අන්තර්ක්\u200Dරියාකාරී නිබන්ධනයක්",
	"home_link_title_coding_2": "bitcoinSwitch: ඕනෑම උපකරණයක් Bitcoin පිළිගැනීමට පරිවර්තනය කරන්න",
	"home_link_title_coding_3": "Bitcoin හි අභිරහස් හරහා ඔබේ මාර්ගය කේතනය කරන්න",
	"home_link_title_networks_1": "Bitcoin ජාලයේ සජීවී දසුනක්",
	"home_link_title_networks_2": "Bitcoin එදිරිව බැංකු",
	"home_link_title_payments_1": "Bitcoin එදිරිව Visa",
	"home_link_title_payments_2": "Lightning Network (ක්ෂණික Bitcoin ගෙවීම්) දෙස බැල්මක්",
	"home_link_title_payments_3": "එල් සැල්වඩෝරයේ Bitcoin පසුම්බිය ප්\u200Dරේෂණ ගාස්තු වලින් සැල්වඩෝරිකයන්ට වසරකට $400M ඉතිරි කළ හැකිය",
	"home_link_title_payments_4": "ක්ෂණික Bitcoin ගෙවීම් ලබාගැනීමට ඔබේ Lightning ලිපිනය ලබාගන්න",
	"home_link_title_self_custody_1": "ඔබේ Bitcoin ආරක්ෂිතව ගබඩා කරන්නේ කෙසේද",
	"home_link_title_self_custody_2": "ඔබේ Bitcoin හුවමාරුවලින් ආපසු ගැනීමට හේතු 6ක්",
	"home_link_title_self_custody_3": "රත්තරන්, Bitcoin, සහ ස්ව-රක්ෂාව",
	"home_link_title_get_started_1": "Bitcoin මූලික කරුණු ඉගෙන ගන්න",
	"home_link_title_get_started_2": "ඔබේ පළමු Bitcoin පසුම්බිය ලබාගන්න",
	"home_link_title_get_started_3": "Bitcoin මිලදී ගන්නේ කෙසේද"
};

// Build output
const output = {
	"@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang }
};

for (const key of Object.keys(enIndex)) {
	if (key === '@metadata') continue;
	output[key] = translations[key] || enIndex[key];
}

const filePath = path.join(i18nDir, lang, `index_${lang}.json`);
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(output, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${filePath}`);
console.log('\nDone! index.json created for Sinhala (si).');
