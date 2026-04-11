/**
 * Creates Sinhala (si) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'si';
const today = '2026-04-11';

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
	"bitcoin_for_business": "ව්\u200Dයාපාර සඳහා Bitcoin",
	"business_description": "ඔබේ ව්\u200Dයාපාරයේ Bitcoin ගෙවීම් පිළිගැනීම ආරම්භ කරන්නේ කෙසේද ඉගෙන ගන්න.",
	"business_header": "ව්\u200Dයාපාර සඳහා BITCOIN",
	"business_intro": "ඔබේ ව්\u200Dයාපාරයේ Bitcoin පිළිගැනීම ආරම්භ කිරීමට අවශ්\u200Dය සියල්ල."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"why_bitcoin_for_business": "ව්\u200Dයාපාර සඳහා Bitcoin හොඳ ඇයි",
	"why_description": "Bitcoin ඔබේ ව්\u200Dයාපාරයට ප්\u200Dරයෝජනවත් වන්නේ කෙසේදැයි ඉගෙන ගන්න.",
	"why_header": "BITCOIN ව්\u200Dයාපාර සඳහා හොඳ ඇයි",
	"why_c1": "Bitcoin සමඟ, ඔබට සෘජුවම ඔබේ ගනුදෙනුකරුවන්ගෙන් ගෙවීම් ලබාගත හැකිය, මධ්\u200Dයස්ථ තෙවැනි පාර්ශ්වයක් නොමැතිව.",
	"why_c2": "Bitcoin ගනුදෙනු ආපසු හැරවිය නොහැකි අතර, එමඟින් වංචාකාරී ආපසු ගැනීම් වළක්වයි.",
	"why_c3": "Bitcoin ගෙවීම් සාම්ප්\u200Dරදායික ක්\u200Dරෙඩිට් කාඩ් ගෙවීම්වලට වඩා අඩු ගාස්තු ඇත.",
	"why_c4": "Bitcoin දිනකට පැය 24ක්, සතියකට දින 7ක් ක්\u200Dරියාත්මක වේ, ඔබට ඕනෑම වේලාවක ගෙවීම් ලබාගත හැකිය.",
	"why_c5": "Bitcoin පිළිගැනීමෙන්, ඔබ ඔබේ ව්\u200Dයාපාරය වර්ධනය වන Bitcoin ආර්ථිකයට විවෘත කරයි."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"business_guide": "Bitcoin ව්\u200Dයාපාර මාර්ගෝපදේශය",
	"guide_description": "ඔබේ ව්\u200Dයාපාරයේ Bitcoin පිළිගැනීමට පියවරෙන් පියවර මාර්ගෝපදේශය.",
	"guide_header": "Bitcoin පිළිගැනීමට මාර්ගෝපදේශය",
	"guide_step_1": "Bitcoin ව්\u200Dයාපාර සඳහා හොඳ ඇයිදැයි ඉගෙන ගන්න",
	"guide_step_2": "Bitcoin ගෙවීම් පිළිගැනීමට Bitcoin පසුම්බියක් ලබාගන්න",
	"guide_step_3": "Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත වන්න",
	"guide_step_4": "නිදහස් ස්ටිකර් ලබාගන්න",
	"guide_step_5": "Bitcoin ගිණුම්කරණය සකසන්න"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"business_wallets": "ව්\u200Dයාපාර Bitcoin පසුම්බි",
	"biz_wallets_description": "ඔබේ ව්\u200Dයාපාරය සඳහා හොඳම Bitcoin පසුම්බිය සොයාගන්න.",
	"biz_wallets_header": "ව්\u200Dයාපාර BITCOIN පසුම්බි",
	"biz_wallets_intro": "Bitcoin පිළිගැනීම ආරම්භ කිරීමට, ඔබට Bitcoin පසුම්බියක් අවශ්\u200Dයයි. ව්\u200Dයාපාරයන් සඳහා නිර්දේශිත පසුම්බි මෙන්න:",
	"biz_wallets_personal": "පුද්ගලික පසුම්බි",
	"biz_wallets_personal_intro": "සරල ව්\u200Dයාපාර භාවිතය සඳහා, පුද්ගලික Bitcoin පසුම්බියක් ආරම්භ කිරීමට හොඳම මාර්ගයයි.",
	"biz_wallets_pos": "විකුණුම් ලක්ෂ්\u200Dය පසුම්බි",
	"biz_wallets_pos_intro": "විකුණුම් ලක්ෂ්\u200Dය පසුම්බි ව්\u200Dයාපාරයන් සඳහා විශේෂයෙන් නිර්මාණය කර ඇත."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"business_maps": "Bitcoin වෙළෙඳ සිතියම්",
	"maps_description": "ඔබේ ව්\u200Dයාපාරය Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත කරන්න.",
	"maps_header": "BITCOIN වෙළෙඳ සිතියම්වල ලැයිස්තුගත වන්න",
	"maps_intro_1": "ඔබේ ව්\u200Dයාපාරය Bitcoin පිළිගන්නා බව ලෝකයට දැනුම්දෙන්න!",
	"maps_intro_2": "Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත වීමෙන්, Bitcoin භාවිතා කරන්නන් ඔබේ ව්\u200Dයාපාරය සොයාගත හැකිය.",
	"maps_intro_3": "පහත ඔබේ ව්\u200Dයාපාර තොරතුරු ඇතුළත් කරන්න, අපි ඔබව ලැයිස්තුගත කරන්නම්."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"maps_success_1": "ඔබේ ව්\u200Dයාපාරය Bitcoin වෙළෙඳ සිතියම්වල ඉක්මනින් ලැයිස්තුගත වනු ඇත!",
	"maps_success_2": "Bitcoin පිළිගැනීමට පටන් ගැනීම සඳහා ස්තූතියි."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"business_stickers": "\"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර්",
	"biz_stickers_description": "ඔබේ ව්\u200Dයාපාරය සඳහා නිදහස් \"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර් ලබාගන්න.",
	"biz_stickers_header": "නිදහස් \"BITCOIN මෙහි පිළිගනු ලැබේ\" ස්ටිකර්",
	"biz_stickers_intro": "ඔබේ ව්\u200Dයාපාරයේ Bitcoin පිළිගන්නා බව ගනුදෙනුකරුවන්ට දන්වන්න.",
	"biz_stickers_instructions_1": "ඔබේ ලිපිනය ඇතුළත් කරන්න, අපි ඔබට නිදහස් \"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර් යවන්නම්!",
	"biz_stickers_instructions_2": "ඔබේ නිදහස් ස්ටිකර් යවූ පසු ලිපින දත්ත මකා දැමේ."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"biz_sticker_success_1": "ඔබේ \"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර් මාර්ගයේය!",
	"biz_sticker_success_2": "Bitcoin පිළිගැනීමට පටන් ගැනීම සඳහා ස්තූතියි."
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"biz_sticker_language_success_1": "ඔබේ ඉල්ලීම සාර්ථකව ලැබුණි.",
	"biz_sticker_language_success_2": "අපි අලුත් පිලිගැන්වීම් කටස්වලින් ප්\u200Dරකාශනය කරන බැවින් මෙම පිලිගැන්වීම් බාගත හැකි වන්නට සති කිපයක් ගතවීම පුළුවන්. කරුණාකර නැවත පැමිණෙන්න!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin ව්\u200Dයාපාර කිට්",
	"kit_description": "ව්\u200Dයාපාරවලට Bitcoin පිළිගැනීමට උදවු කිරීමට Bitcoin ව්\u200Dයාපාර කිට් බෙදාගන්න.",
	"kit_header": "ඔබේම BITCOIN ව්\u200Dයාපාර කිට් මුද්\u200Dරණය කරන්න",
	"kit_intro_1": "ස්ථානික ව්\u200Dයාපාරයකට Bitcoin පිළිගැනීමට සහාය වීමට කැමතිද?",
	"kit_intro_2": "අපේ Bitcoin ව්\u200Dයාපාර කිට් ව්\u200Dයාපාරයකට Bitcoin ගෙවීම් පිළිගැනීම ගැන ප්\u200Dරවේශ කිරීමට පහසු කරයි.",
	"kit_intro_3": "ඔබේම කිට් මුද්\u200Dරණය කර ස්ථානික ව්\u200Dයාපාරවලට බෙදන්න."
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_1": "ඔබේ Bitcoin ව්\u200Dයාපාර කිට් සතියක් 1-2ක් ඇතුළත ලැබෙනු ඇත!",
	"kit_success_2": "Bitcoin ව්\u200Dයාපාරයන්ට ව්\u200Dයාප්ත කිරීමට උදවු කිරීම සඳහා ස්තූතියි."
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"business_faq": "Bitcoin ව්\u200Dයාපාර නිතර අසන ප්\u200Dරශ්න",
	"faq_description": "ව්\u200Dයාපාරවල Bitcoin පිළිගැනීම ගැන නිතර අසන ප්\u200Dරශ්න.",
	"faq_header": "නිතර අසන ප්\u200Dරශ්න",
	"faq_q1": "Bitcoin කියන්නේ මොකක්ද?",
	"faq_a1": "Bitcoin යනු ඩිජිටල් මුදල් සහ ගෙවීම් ජාලයකි. ඔබට Bitcoin (ඩිජිටල් මුදල්) සෘජුවම වෙනත් පුද්ගලයන්ට Bitcoin ජාලය (ගෙවීම් ජාලය) භාවිතයෙන් යැවිය හැකිය.",
	"faq_q2": "Bitcoin මගේ ව්\u200Dයාපාරයට ප්\u200Dරයෝජනවත් වන්නේ කෙසේද?",
	"faq_a2": "Bitcoin ගෙවීම් ආපසු හැරවිය නොහැකි අතර, වංචාකාරී ආපසු ගැනීම් වළක්වයි, ක්\u200Dරෙඩිට් කාඩ් ගාස්තුවලට වඩා අඩු ගාස්තු ඇත, සහ දිනකට පැය 24ක් ක්\u200Dරියාත්මක වේ.",
	"faq_q3": "මම Bitcoin ගෙවීම් පිළිගන්නේ කෙසේද?",
	"faq_a3": "Bitcoin ගෙවීම් පිළිගැනීම ආරම්භ කිරීමට ඔබට අවශ්\u200Dය වන්නේ Bitcoin පසුම්බියක් පමණි.",
	"faq_q4": "මට Bitcoin ප්\u200Dරාදේශීය මුදලට පරිවර්තනය කළ හැකිද?",
	"faq_a4": "ඔව්, බොහෝ Bitcoin හුවමාරු ඔබට Bitcoin ඔබේ ප්\u200Dරාදේශීය මුදලට පරිවර්තනය කිරීමට සහ ඔබේ බැංකු ගිණුමට ආපසු ගැනීමට ඉඩ දෙයි.",
	"faq_q5": "මම පුද්ගලිකව Bitcoin පිළිගන්නේ කෙසේද?",
	"faq_a5": "ඔබේ දුරකථනයේ Bitcoin පසුම්බි යෙදුම විවෘත කර ගනුදෙනුකරුට ඔබේ QR කේතය ස්කෑන් කරන්නට දෙන්න.",
	"faq_q6": "මම මාර්ගගතව Bitcoin පිළිගන්නේ කෙසේද?",
	"faq_a6": "මාර්ගගත ව්\u200Dයාපාර සඳහා, BTCPay Server හෝ වෙනත් Bitcoin ගෙවීම් ප්\u200Dරොසෙසරයක් භාවිතා කළ හැකිය.",
	"faq_q7": "ගනුදෙනුකරුවන්ට මම Bitcoin පිළිගන්නා බව දන්වන්නේ කෙසේද?",
	"faq_a7": "ඔබේ ව්\u200Dයාපාරයේ \"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකරයක් තබන්න සහ Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත වන්න.",
	"faq_q8": "මට තව ගනුදෙනුකරුවන් ලබාගන්නේ කෙසේද?",
	"faq_a8": "Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත වීමෙන් Bitcoin භාවිතා කරන්නන්ට ඔබේ ව්\u200Dයාපාරය සොයාගත හැකිය.",
	"faq_q9": "Bitcoin පිළිගැනීමට වියදම කීයද?",
	"faq_a9": "Bitcoin පිළිගැනීම නිදහස්. Bitcoin ගනුදෙනු ගාස්තු සාමාන්\u200Dයයෙන් ක්\u200Dරෙඩිට් කාඩ් ගෙවීම් ගාස්තුවලට වඩා බෙහෙවින් අඩුය."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"business_accounting": "Bitcoin ගිණුම්කරණ මාර්ගෝපදේශය",
	"accounting_description": "ඔබේ ව්\u200Dයාපාරය සඳහා Bitcoin ගිණුම්කරණය හැසිරවීම ඉගෙන ගන්න.",
	"accounting_header": "BITCOIN ගිණුම්කරණ මාර්ගෝපදේශය",
	"accounting_intro_1": "Bitcoin ගෙවීම් පිළිගැනීමේදී, ඔබේ ගිණුම්කරණ නිවැරදිව පවත්වාගැනීම වැදගත්ය.",
	"accounting_intro_2": "ඔබේ බදු උපදේශකයා සමඟ සාකච්ඡා කර ඔබේ අධිකරණයේ Bitcoin ව්\u200Dයාපාර ගිණුම්කරණය පිළිබඳ නවතම මාර්ගෝපදේශ ලබාගන්න."
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"business_files_title": "Bitcoin ව්\u200Dයාපාර කිට් ගොනු",
	"business_files_description": "Bitcoin ව්\u200Dයාපාර කිට් ගොනු මෙතනින් බාගන්න.",
	"business_files_header": "BITCOIN ව්\u200Dයාපාර කිට් ගොනු බාගන්න"
});

console.log('\nDone! Business files created for Sinhala (si).');
