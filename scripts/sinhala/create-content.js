/**
 * Creates Sinhala (si) content files: bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 * Reads English sources and applies Sinhala translations
 */
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'si';
const today = '2026-04-11';

function createFile(enFilename, siFilename, translations) {
	const enData = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en', enFilename), 'utf8'));
	const output = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
	for (const key of Object.keys(enData)) {
		if (key === '@metadata') continue;
		output[key] = translations[key] || enData[key];
	}
	const filePath = path.join(i18nDir, lang, siFilename);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(output, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// bank-runs
createFile(`bank-runs_en.json`, `bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin හි බැංකු ධාවන නැත",
	"bank_runs_header": "BITCOIN හි බැංකු ධාවන නැත",
	"bank_runs_header_2": "නමුත් ඔබේ බැංකුවේ තිබිය හැකිය",
	"bank_runs_what": "බැංකු ධාවනයක් කියන්නේ මොකක්ද?",
	"bank_runs_what_content_1": "බැංකු ධාවනයක් සිදුවන්නේ බොහෝ පුද්ගලයින් එකවරම බැංකුවෙන් ඔවුන්ගේ මුදල් ආපසු ගැනීමට උත්සාහ කරන විටය.",
	"bank_runs_what_content_2": "බැංකුවලට ආපසු ගැනීම් හා ගැළපෙන තරම් මුදල් නොමැති නම්, බැංකු ධාවනයක් සිදුවන විට ඒවා සම්පූර්ණයෙන්ම කඩා වැටිය හැකිය.",
	"bank_runs_how": "බැංකු ධාවන සිදුවන්නේ කෙසේද?",
	"bank_runs_how_content_1": "අපේ බැංකු පද්ධතිය 'භාගික සංචිත' වන අතර, එනම් බැංකු ඔබේ මුදල් වාහලයක තබා ඔබ එය වැය කරන තෙක් හෝ ආපසු ගන්නා තෙක් බලා නොසිටී.",
	"bank_runs_how_content_2": "ඒ වෙනුවට, ඔබේ බැංකුව ඔබේ මුදල් ණයට දීම හෝ ආයෝජනය කරයි. මෙය ඔබේ මුදල් දිගු කාලයක් සඳහා අගුලු දමා තැබිය හැකි වුවත්, බැංකුව ඔබට ඕනෑම වේලාවක ඔබේ මුදල් ආපසු ගැනීමේ හැකියාව පොරොන්දු වේ.",
	"bank_runs_how_content_3": "ඔබේ බැංකුව දැනටමත් ඔබේ මුදල් ණයට දී හෝ ආයෝජනය කර ඇති පසු ඔබ ඔබේ මුදල් ආපසු ගැනීමට උත්සාහ කළහොත් කුමක් සිදුවේද?",
	"bank_runs_how_content_4": "ඔබ එකම ආපසු ගැනීමට උත්සාහ කරන්නේ නම් ගැටලුවක් නැත. බැංකුව වෙනත් කෙනෙකුගේ මුදල් ගෙන ඒ වෙනුවට ඔබට දෙනු ඇත. නමුත් බොහෝ දෙනෙක් එකවරම ආපසු ගැනීමට උත්සාහ කළහොත් කුමක් සිදුවේද?",
	"bank_runs_how_content_5": "2023 මාර්තු මාසයේ Silicon Valley Bank හි ධාවනයක් සිදුවූ විට ඇමරිකා එක්සත් ජනපදයේ බොහෝ පුද්ගලයින් සොයා ගත්හ.",
	"bank_runs_how_content_6": "බැංකුව ඔවුන්ගේ ගනුදෙනුකරුවන්ගේ මුදල් වසර 30ක් දක්වා අගුලු දමා ඇති රජයේ බැඳුම්කරවල ආයෝජනය කර තිබුණි. ඊටත් වඩා නරක ලෙස, එම බැඳුම්කරවල වටිනාකම මෑතදී තීව්\u200Dර ලෙස පහත වැටී තිබුණි.",
	"bank_runs_how_content_7": "වැඩි පුද්ගලයින් දැනගත් විට, ගැටලුව වඩාත් නරක අතට හැරුණි. වැඩි ආපසු ගැනීම් ඉල්ලීම් පැමිණි, නමුත් බොහොමයක් ක්\u200Dරියාවලිය නොකළේය.",
	"bank_runs_how_content_8": "FDIC මැදිහත් වී තැන්පත්කරුවන්ට සම්පූර්ණ මුදල් ලබා දීමට එකඟ විය. ගැටලුව විසඳුණාද? හරියටම නොවේ...",
	"bank_runs_fdic": "FDIC රක්ෂණය මගේ මුදල් ආරක්ෂා කරයිද?",
	"bank_runs_fdic_content_1": "බැංකුවක් අසාර්ථක වූ විට බැංකු තැන්පත්කරුවන් ආරක්ෂා කිරීමට FDIC රක්ෂණය නිර්මාණය කර ඇත. තැන්පත්කරුවකුට $250,000 දක්වා තැන්පතු රක්ෂණය කර ඇත.",
	"bank_runs_fdic_content_2": "හරියටම නොවේ. බැංකුවක් අසාර්ථක වුවහොත්, FDIC මුදල් ලබන්නේ කොහෙන්ද? ඔවුන්ට ඩොලර් බිලියන 125ක රක්ෂණ අරමුදලක් ඇත.",
	"bank_runs_fdic_content_3": "ඔවුන් රක්ෂණය කරන තැන්පතු ප්\u200Dරමාණය සමඟ සැසඳීමේදී එය බොහෝ මුදල්ක් සේ පෙනේ: ට්\u200Dරිලියන 10 ක් හෝ බිලියන 10,000 ක් පමණ.",
	"bank_runs_fdic_content_4": "FDIC ඔවුන්ගේ වෙබ් අඩවියේ පවා පෙන්වයි ඔවුන්ගේ රක්ෂණ අරමුදලේ තැන්පතුවලින් 1% ට මදක් වැඩි ප්\u200Dරමාණයක් ආවරණය කිරීමට ප්\u200Dරමාණවත් මුදල් පමණක් ඇති බව.",
	"bank_runs_fdic_content_5": "FDIC රක්ෂණ අරමුදල ඉක්මවා ගිය බැංකු අසාර්ථකත්වයක දී, ඇමරිකානු රජය තැන්පත්කරුවන්ට සම්පූර්ණ මුදල් ලබා දීමට මුදල් මුද්\u200Dරණය කරන බව සම්භාව්\u200Dය (නමුත් සහතික නොවේ).",
	"bank_runs_fdic_content_6": "නමුත් මුදල් මුද්\u200Dරණය මුදල් නිෂ්පාදනයට හේතු වන බැවින්, එය හොඳ විසඳුමක් නොවේ.",
	"bank_runs_safe": "භාගික සංචිත භාවිතා නොකරන බැංකු තිබේද?",
	"bank_runs_safe_content_1": "සමහර බැංකු තැන්පත්කරුවන්ගේ අරමුදල් ණයට දීම හෝ ආයෝජනය නොකරන 'ආරක්ෂිත බැංකු' වීමට උත්සාහ කර ඇත.",
	"bank_runs_safe_content_2": "මෙම ආරක්ෂිත බැංකුවලට බැංකු ධාවන අවදානම් ශුන්\u200Dය වුවද, ඔවුන්ගේ අයදුම්පත් ෆෙඩරල් සංචිත බැංකුව විසින් ප්\u200Dරතික්ෂේප කර ඇත.",
	"bank_runs_safe_content_3": "ඔවුන් ක්\u200Dරියාත්මක වීම අවහිර කර ඇති බැවින්, අද භාගික සංචිත භාවිතා නොකරන බැංකු නැත.",
	"bank_runs_safe_content_4": "වාසනාවන්ත ලෙස, ඔබේම බැංකුව වීමෙන් භාගික සංචිත පද්ධතියෙන් ඉවත් වීමට ක්\u200Dරමයක් ඇත. නැත, අපි මුදල් ඔබේ බල්ලිස යටට තැබීම ගැන කතා නොකරමු.",
	"bank_runs_safe_content_5": "මුදල්වලින් ඉතිරි කිරීම තවමත් මුදල් නිෂ්පාදනයට ගොදුරු වේ.",
	"bank_runs_safe_content_6": "අපි කතා කරන්නේ Bitcoin ගැනයි: ඔබට ඔබේම බැංකුව වීමට ඉඩ දෙන නව මූල්\u200Dය පද්ධතියක්.",
	"bank_runs_protect": "BITCOIN මට බැංකු ධාවනවලින් ආරක්ෂා කළ හැකිද?",
	"bank_runs_protect_content_1": "ඔව්, Bitcoin සම්පූර්ණ සංචිත මූල්\u200Dය පද්ධතියකි.",
	"bank_runs_protect_content_2": "ඔබ ඔබේ Bitcoin ඔබේම පසුම්බියට ආපසු ගන්නා තාක් Bitcoin හි බැංකු ධාවන කළ නොහැක. ඔබේ bitcoin හුවමාරුවක හෝ Bitcoin ETF වැනි ආවරණයක තබා ගන්න එපා.",
	"bank_runs_protect_content_3": "ඔබේම පසුම්බියට ආපසු ගන්නේ කෙසේදැයි ඉගෙන ගැනීමට අපේ සරල Bitcoin පසුම්බි මාර්ගෝපදේශය බලන්න.",
	"bank_runs_protect_content_4": "Bitcoin සමඟ, ඔබට අවසානයේ ඔබේ මුදල් පාලනය කළ හැකිය."
});

// wallets
createFile(`wallets_en.json`, `wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin පසුම්බි මාර්ගෝපදේශය",
	"wallets_description": "වැදගත් ආකාරවලින් වෙනස් වන බොහෝ Bitcoin පසුම්බි තිබේ. මෙම සරල ප්\u200Dරශ්න ඇසීමෙන් පසුම්බියක් ඔබට නිවැරදිද යන්න තීරණය කළ හැකිය.",
	"wallets_header": "ඔබේ BITCOIN ආරක්ෂිතව ගබඩා කරන්නේ කෙසේද",
	"wallets_s1_c1": "Bitcoin පසුම්බි අන්තර්ක්\u200Dරියාකාරී බැවින්, ඔවුන් කුමන පසුම්බිය භාවිතා කළත් ඕනෑම කෙනෙකුට Bitcoin යැවිය හැකිය.",
	"wallets_s1_c2": "වැදගත් ආකාරවලින් වෙනස් වන බොහෝ Bitcoin පසුම්බි තිබේ. මෙම සරල ප්\u200Dරශ්න ඇසීමෙන් පසුම්බියක් ඔබට නිවැරදිද යන්න තීරණය කළ හැකිය:",
	"wallets_question_1": "එය ස්ව-රක්ෂා පසුම්බියක්ද?",
	"wallets_s2_c1": "Bitcoin හි නවෝත්පාදනයක් වන්නේ බැංකුවක් වැනි භාරකරුවකු මත රඳා නොසිට එය ගබඩා කිරීමේ හැකියාවයි.",
	"wallets_s2_c2": "ඔබ හුවමාරුවක හෝ ETF එකක bitcoin රඳවා ගන්නේ නම්, ඔබ bitcoin හි නිදහස් ප්\u200Dරතිලාභ අහිමි කරයි.",
	"wallets_s2_c3": "ස්ව-රක්ෂා පසුම්බි Bitcoin හි සම්පූර්ණ බලය මුදාහරියි: නිදහස මුදල්.",
	"wallets_s2_c4": "ස්ව-රක්ෂා පසුම්බියක් සමඟ, ඔබේ මුදල් වැය කිරීමට හෝ මාරු කිරීමට හැකියාව ඇත්තේ ඔබට පමණි. ඔබ ස්ව-රක්ෂා පසුම්බියක් භාවිතා කරන විට කිසිවෙකුට ඔබේ මුදල් යැවීම හෝ ලැබීම නැවැත්විය නොහැක.",
	"wallets_s2_c5": "ස්ව-රක්ෂා පසුම්බි භාරකරු-නොවන පසුම්බි ලෙසද හැඳින්වේ.",
	"wallets_s3_c1": "භාරකරු පසුම්බි යනු ඔබේ මුදල් ඔබ පාලනය නොකරන පසුම්බිය.",
	"wallets_s3_c2": "මෙම පසුම්බි බැංකු පද්ධතියට වඩා සමානය, ඔබ ඔබේ මුදල් වෙත ප්\u200Dරවේශය ලබා දීමට තෙවැනි පාර්ශ්වයක් විශ්වාස කළ යුතුය.",
	"wallets_s3_c3": "ඔබ Bitcoin ETF මිලදී ගත්තේ නම්, ඔබ ස්ව-රක්ෂාවට ආපසු ගැනීමට ඉඩ නොදෙන භාරකරු පසුම්බියක් භාවිතා කරයි.",
	"wallets_s3_c4": "භාරකරු පසුම්බි පහසු බව පෙනිය හැකි නමුත්, භාරකරුට ඕනෑම වේලාවක සියලුම පරිශීලක අරමුදල් සොරකම් කිරීමේ තාක්ෂණික හැකියාව ඇත.",
	"wallets_s3_c5": "ඔබේ යතුරු නොවේ නම්, ඔබේ කාසි නොවේ!",
	"wallets_question_2": "එය උණුසුම්ද හෝ සීතලද?",
	"wallets_s4_c1": "සීතල පසුම්බි ඔබේ Bitcoin වෙත යතුරු කිසිවිටෙක අන්තර්ජාලයට නිරාවරණය නොවන ආකාරයෙන් ගබඩා කරයි.",
	"wallets_s4_c2": "මෙය ඔබේ Bitcoin සොරකම් කිරීමට සොරෙකු භාවිතා කළ හැකි ප්\u200Dරහාරක දෛශික සැලකිය යුතු ලෙස සීමා කරයි.",
	"wallets_s4_c3": "ඔබට සීතල පසුම්බිය දිගු කාලීන ඉතිරි ගිණුමක් ලෙස සිතිය හැකිය, සීතල ගබඩාව ලෙසද හැඳින්වේ.",
	"wallets_s5_c1": "උණුසුම් පසුම්බි ඔබේ Bitcoin වෙත යතුරු ඔබේ දුරකථනය වැනි අන්තර්ජාලයට සම්බන්ධ උපකරණයක ගබඩා කරයි.",
	"wallets_s5_c2": "උණුසුම් පසුම්බි සාමාන්\u200Dයයෙන් ආරක්ෂිත ලෙස සැලකේ, නමුත් සීතල පසුම්බිවලට වඩා වැඩි ආරක්ෂක දුර්වලතා තිබිය හැකිය.",
	"wallets_s5_c3": "ඔබේ භෞතික පසුම්බිය ගැන සිතන ආකාරයටම උණුසුම් පසුම්බියක් ගැන සිතිය හැකිය. ඔබ ඔබේ සම්පූර්ණ ඉතිරි කිරීම් ඔබේ පසුම්බියේ ගබඩා නොකරනු ඇත, නමුත් යම් වියදම් මුදලක් ගබඩා කරනු ඇත.",
	"wallets_s5_c4": "උණුසුම් පසුම්බි ඔබේ සම්පූර්ණ ඉතිරි කිරීම් සීතල ගබඩාවෙන් ඉවත් නොකර ඔබේ Bitcoin වැය කිරීම වඩා පහසු කරයි.",
	"wallets_question_3": "මගේ ප්\u200Dරතිසාධන වාක්\u200Dය ඛණ්ඩය කෙසේ බැකප් කරන්නද?",
	"wallets_s6_c1": "ඔබ ඔබේ Bitcoin පසුම්බිය සකසන විට, ඔබේ උපකරණය ප්\u200Dරතිසාධන වාක්\u200Dය ඛණ්ඩයක් ජනනය කරයි. මෙම ප්\u200Dරතිසාධන වාක්\u200Dය ඛණ්ඩය (seed phrase ලෙසද හැඳින්වේ) වචන 12 හෝ 24 ක් අඩංගු වේ.",
	"wallets_s6_c2": "ඔබට ඔබේ පසුම්බියට ප්\u200Dරවේශය නැති වුවහොත් හෝ ඔබේ උපකරණය ක්\u200Dරියා කිරීම නැවැත්වුවහොත්, ඔබේ Bitcoin වෙත ප්\u200Dරවේශය ලබාගැනීමට ඔබට මෙම ප්\u200Dරතිසාධන වාක්\u200Dය ඛණ්ඩය නව පසුම්බියකට ඇතුළත් කළ හැකිය.",
	"wallets_s6_c3": "බොහෝ පසුම්බිවල ඔබේ ප්\u200Dරතිසාධන වාක්\u200Dය ඛණ්ඩය ලිවීමට කඩදාසි පත්\u200Dරයක් ඇතුළත් වේ, නමුත් බොහෝ දෙනෙක් ඒ වෙනුවට වානේ මත මෙම වාක්\u200Dය ඛණ්ඩය බැකප් කිරීමට කැමැත්ත පළ කරයි.",
	"wallets_s6_c4": "Jameson Lopp ඔබට නිවැරදි එක තෝරාගැනීමට උදවු කිරීමට වානේ බැකප් කට්ටල 70ක් පරීක්ෂා කර ඇත.",
	"wallets_s6_c5": "Jameson ගේ ලෝහ Bitcoin බැකප් මාර්ගෝපදේශය මෙතනින් බලන්න.",
	"wallets_s6_c6": "හෝ Bitcoin පසුම්බි විකල්ප ගවේෂණය කිරීමට ස්ක්\u200Dරෝල් කරගෙන යන්න.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "අපේ Lightning පසුම්බි මාර්ගෝපදේශය සොයනවාද?",
	"wallets_starter_wallet": "විශිෂ්ට ආරම්භක පසුම්බිය",
	"wallets_mobile_app": "ජංගම යෙදුම",
	"wallets_2fa_support": "2FA සහාය",
	"wallets_air_gap_mode": "Air-gap ක්\u200Dරමය",
	"wallets_air_gap_camera": "Air-gap ක්\u200Dරමය + කැමරාව",
	"wallets_bitcoin_only": "Bitcoin පමණි",
	"wallets_security_features": "ආරක්ෂක විශේෂාංග රාශියක්",
	"wallets_free": "100% නිදහස්",
	"wallets_coldcard_mk5_costs": "මිල $189",
	"wallets_coldcard_q_costs": "මිල $289",
	"wallets_blockstream_jade_costs": "මිල $79",
	"wallets_foundation_passport_costs": "මිල $199",
	"wallets_seedsigner_costs": "කොටස් මිල $50",
	"wallets_very_affordable": "ඉතා ලාභදායී",
	"wallets_pair_with_phone": "ඔබේ දුරකථනය සමඟ යුගල කරන්න",
	"wallets_battery": "නැවත ආරෝපණය කළ හැකි බැටරිය",
	"wallets_build_your_own": "ඔබේම එක ගොඩනගන්න",
	"wallets_qwerty_keyboard": "සම්පූර්ණ QWERTY යතුරු පුවරුව",
	"wallets_qr_scanner": "QR කේත ස්කෑනරය"
});

// buy
createFile(`buy_en.json`, `buy_${lang}.json`, {
	"buy_bitcoin_guide": "Bitcoin මිලදී ගන්නේ කෙසේද - පියවරෙන් පියවර මාර්ගෝපදේශය",
	"buy_header": "BITCOIN මිලදී ගන්නේ කෙසේද",
	"buy_intro_c1": "පළමු වරට Bitcoin මිලදී ගැනීම අභියෝගාත්මක බව පෙනිය හැකිය, නමුත් ඔබ එය පියවරවලට බෙදූ විට ඇත්තටම ඉතා සරලය.",
	"buy_intro_c2": "මෙම මාර්ගෝපදේශය ඔබට Bitcoin ආරක්ෂිතව මිලදී ගෙන ඔබේම පසුම්බියේ ගබඩා කිරීමේ ක්\u200Dරියාවලිය හරහා ගෙන යයි.",
	"buy_step_1_header": "පියවර 1: ඔබේ රට තෝරන්න",
	"buy_step_1_description": "විවිධ රටවල විවිධ Bitcoin මිලදී ගැනීමේ විකල්ප ලබා ගත හැකිය. ඔබට හොඳම විකල්ප දැකීමට ඔබේ රට තෝරන්න.",
	"buy_search_countries": "ඔබේ රට සොයන්න",
	"buy_step_2_header": "පියවර 2: ඔබේ ගෙවීම් ක්\u200Dරමය තෝරන්න",
	"buy_step_2_description": "Bitcoin මිලදී ගැනීමට ප්\u200Dරධාන ක්\u200Dරම දෙකක් ඇත: බැංකු මාරුවීමක් සමඟ හෝ මුදල් සමඟ. එක එකක වෙනස් වාසි ඇත.",
	"buy_method_bank_transfer": "බැංකු මාරුවීම",
	"buy_method_bank_fast": "ඉක්මන් සහ පහසු",
	"buy_method_bank_less_private": "අඩු පෞද්ගලික",
	"buy_method_bank_description": "බැංකු මාරුවීම් Bitcoin මිලදී ගැනීමේ වඩාත්ම පොදු ක්\u200Dරමයයි. ඒවා ඉක්මන්, පහසු, සහ සාමාන්\u200Dයයෙන් අඩු ගාස්තු ඇත.",
	"buy_method_choose_bank": "බැංකු මාරුවීම තෝරන්න",
	"buy_method_cash": "මුදල්",
	"buy_method_cash_private": "වැඩි පෞද්ගලික",
	"buy_method_cash_limited": "සීමිත විකල්ප",
	"buy_method_cash_description": "මුදල් මිලදී ගැනීම් වැඩි පෞද්ගලිකත්වයක් ලබා දෙන නමුත් අඩු විකල්ප ඇති අතර පුද්ගලිකව හමුවීමට හෝ Bitcoin ATM එකක් භාවිතා කිරීමට අවශ්\u200Dය විය හැකිය.",
	"buy_method_choose_cash": "මුදල් තෝරන්න",
	"buy_step_3_header": "පියවර 3: මිලදී ගැනීමේ විකල්ප",
	"buy_step_3_description": "ඔබේ රට සහ ගෙවීම් ක්\u200Dරමය සඳහා හොඳම Bitcoin මිලදී ගැනීමේ විකල්ප මෙන්න:",
	"buy_platform_recommended": "නිර්දේශිත",
	"buy_step_4_header": "පියවර 4: ඔබේ BITCOIN ආරක්ෂිතව ගබඩා කරන්න",
	"buy_step_4_c1": "Bitcoin මිලදී ගැනීමෙන් පසු, වඩාත්ම වැදගත් පියවර වන්නේ ඔබ පෞද්ගලික යතුරු පාලනය කරන ඔබේම පසුම්බියට ගෙන යාමයි.",
	"buy_step_4_c2": "Bitcoin හුවමාරුවක තබා ගැනීම අවදානම්ය, මන්ද ඔබට ඇත්තටම Bitcoin අයිති නැත - හුවමාරුවට අයිතිය.",
	"buy_step_4_c3": "ඔබ ඔබේම පෞද්ගලික යතුරු පාලනය කරන විට, ඔබට ඔබේ Bitcoin හි සැබෑ හිමිකාරිත්වය ඇති අතර කිසිවෙකුට එය ඔබෙන් ගත නොහැක.",
	"buy_step_4_c4": "ඔබේ අවශ්\u200Dයතා සඳහා නිවැරදි Bitcoin පසුම්බිය තෝරා ගන්නේ කෙසේදැයි ඉගෙන ගන්න:",
	"buy_cta_wallets": "අපේ Bitcoin පසුම්බි මාර්ගෝපදේශය බලන්න"
});

// lightning
createFile(`lightning_en.json`, `lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning පසුම්බි මාර්ගෝපදේශය",
	"lightning_description": "Lightning පසුම්බි ඔබේ පුද්ගලික ස්වාධිපත්\u200Dයය පවත්වාගෙන යනවාත් සමඟම ඉක්මනින් සහ ලාභදායී ලෙස Bitcoin යැවීමට හැකි කරයි.",
	"lightning_header": "LIGHTNING පසුම්බි මාර්ගෝපදේශය",
	"lightning_s1_c1": "Lightning ඔබට ඉක්මනින් සහ ලාභදායී ලෙස Bitcoin ගෙවීම් යැවීමට හැකි කරයි.",
	"lightning_s1_c2": "Lightning භාවිතය හුවමාරු සමඟ පැමිණෙන බව දැන ගැනීම වැදගත්ය. ඉක්මන්, ලාභදායී Bitcoin ගෙවීම් වෙනුවට, ඔබ බොහෝ විට යම් ආරක්ෂාවක් කැප කරයි.",
	"lightning_s1_c3": "සාමාන්\u200Dයයෙන්, Lightning භාවිතා කළ යුත්තේ කුඩා bitcoin ප්\u200Dරමාණ සමඟ පමණි. ඔබ විශාල bitcoin ප්\u200Dරමාණ දෘඩාංග පසුම්බියක පමණක් ගබඩා කළ යුතුය.",
	"lightning_s1_c4": "වැඩි තොරතුරු සඳහා අපේ දෘඩාංග පසුම්බි මාර්ගෝපදේශය බලන්න.",
	"lightning_s1_c5": "සියලුම Lightning පසුම්බි සමාන නොවේ. එක සරල ප්\u200Dරශ්නයක් ඇසීමෙන් කුමන පසුම්බියට ඔබ සඳහා නිවැරදි හුවමාරු සමතුලිතතාවයක් ඇත්තේ කුමක්දැයි තීරණය කළ හැකිය:",
	"lightning_question_1": "මට නිවැරදි හුවමාරු සමතුලිතතාවය කුමක්ද?",
	"lightning_s2_c1": "Bitcoin හි නවෝත්පාදනයක් වන්නේ බැංකුවක් වැනි භාරකරුවකු මත රඳා නොසිට එය ගබඩා කිරීමේ හැකියාවයි. ස්ව-රක්ෂා පසුම්බි Bitcoin හි සම්පූර්ණ බලය මුදාහරියි.",
	"lightning_s2_c2": "ස්ව-රක්ෂා පසුම්බියක් සමඟ, ඔබේ මුදල් වැය කිරීමට හෝ මාරු කිරීමට හැකියාව ඇත්තේ ඔබට පමණි. කිසිවෙකුට ඔබව නැවැත්විය, වාරණය කළ, හෝ සොරකම් කළ නොහැක.",
	"lightning_s2_c3": "Lightning භාවිතා කිරීමේ වඩාත්ම ස්වාධිපත්\u200Dය ක්\u200Dරමය වන්නේ ඔබේම නෝඩයක් ක්\u200Dරියාත්මක කිරීමයි.",
	"lightning_s2_c4": "මෙම මාර්ගෝපදේශය ඔබේම නෝඩයක් අවශ්\u200Dය නොවන සරල Lightning පසුම්බිවලට අවධානය යොමු කරයි.",
	"lightning_s2_c5": "භාරකරු-නොවන Lightning පසුම්බියක් භාවිතා කළත්, පසුම්බිය නිර්මාණය කළ අය ද්වේෂසහගත යෙදුම් යාවත්කාලීනයක් තල්ලු කර ඔබේ අරමුදල් සොරකම් නොකරනු ඇතැයි ඔබ තවමත් විශ්වාස කරන බව දැන ගැනීම වැදගත්ය.",
	"lightning_s3_c1": "භාරකරු පසුම්බි යනු ඔබේ මුදල් ඔබ පාලනය නොකරන පසුම්බිය.",
	"lightning_s3_c2": "මෙම පසුම්බි බැංකු පද්ධතියට වඩා සමානය, ඔබ ඔබේ මුදල් වෙත ප්\u200Dරවේශය ලබා දීමට තෙවැනි පාර්ශ්වයක් විශ්වාස කළ යුතුය.",
	"lightning_s3_c3": "භාරකරු පසුම්බි පහසු බව පෙනිය හැකි නමුත්, භාරකරුට ඕනෑම වේලාවක සියලුම පරිශීලක අරමුදල් සොරකම් කිරීමේ තාක්ෂණික හැකියාව ඇත.",
	"lightning_s3_c4": "සමහර දෙනෙක් භාවිතා කිරීමේ පහසුව නිසා කුඩා bitcoin ප්\u200Dරමාණ සඳහා භාරකරු Lightning පසුම්බි කැමති වේ. මතක තබා ගන්න: ඔබේ යතුරු නොවේ නම්, ඔබේ කාසි නොවේ!",
	"lightning_question_2": "ඔබේ පසුම්බිය තෝරන්න",
	"lightning_s4_c1": "මේ සියල්ල මතකයේ තබාගෙන, ඔබට නිවැරදි හුවමාරු සමතුලිතතාවයක් ඇති lightning පසුම්බිය දැන් තෝරා ගත හැකිය.",
	"phoenix": "PHOENIX",
	"breez": "BREEZ",
	"mutiny_wallet": "MUTINY WALLET",
	"wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "විශේෂාංග රාශියක්",
	"lightning_mobile_app": "ජංගම යෙදුම",
	"lightning_free": "100% නිදහස්",
	"lightning_merchants": "වෙළඳුන් සඳහා විශිෂ්ටයි",
	"lightning_starter": "විශිෂ්ට ආරම්භක පසුම්බිය",
	"lightning_browser": "බ්\u200Dරවුසර් පදනම්",
	"lightning_custodial": "සම්පූර්ණයෙන් භාරකරු පසුම්බිය",
	"lightning_cta_hardware": "අපේ Bitcoin දෘඩාංග පසුම්බි මාර්ගෝපදේශය සොයනවාද?"
});

// stickers
createFile(`stickers_en.json`, `stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocks වෙතින් නිදහස් Bitcoin ස්ටිකර්",
	"stickers_description": "ඔබ අවට සිටින අයට Bitcoin හඳුන්වා දීමට පොදු ස්ථානවල bitcoin ස්ටිකරයක් තබන්න.",
	"stickers_header": "නිදහස් BITCOIN ස්ටිකර්",
	"stickers_choose_header": "ඔබේ ස්ටිකර් පැක් තෝරන්න",
	"stickers_choose_c1": "පොදු ස්ථානවල Bitcoin ස්ටිකර් තැබීමෙන් තව පුද්ගලයින්ට Bitcoin හඳුන්වා දීමට ඔබට උදවු කිරීම අපේ මෙහෙවරයි. අපේ සියලුම ස්ටිකර්වල අධ්\u200Dයාපනික පිටු වෙත සබැඳෙන QR කේත ඇත",
	"stickers_choose_c2": "Bitcoin",
	"stickers_choose_c3": "මුදල් නිෂ්පාදනය",
	"stickers_choose_c4": "පහත ඔබේ ස්ටිකර් පැක් තෝරන්න",
	"stickers_text_pack": "පෙළ පැක්",
	"stickers_signs_pack": "සංකේත පැක්",
	"stickers_instructions_1": "ඔබේ තැපැල් ලිපිනය ඇතුළත් කරන්න, අපි ඔබට නිදහස් Bitcoin ස්ටිකර් පැක් එකක් තැපැලෙන් යවන්නම්! ඔබේ ස්ටිකර් සුදු ලියුම් කවරයක නැව්ගත කෙරේ.",
	"stickers_instructions_2": "ඔබේ නිදහස් ස්ටිකර් නැව්ගත කළ පසු ලිපින දත්ත මකා දැමේ.",
	"stickers_share_header": "ඔබේ ස්ටිකර් ස්ථාන බෙදාගන්න",
	"stickers_share_c1": "Nostr හි ඔබේ ස්ටිකර් ස්ථාන අප සමඟ බෙදාගන්න, අනෙක් අය ඔවුන්ගේ ස්ටිකර් තබන්නේ කොහේදැයි බලන්න.",
	"stickers_btn_share_on_nostr": "NOSTR හි බෙදාගන්න",
	"stickers_btn_what_is_nostr": "NOSTR කියන්ද?",
	"stickers_flyers_link_before": "ඒ සමඟම, ඔබේම ",
	"stickers_flyers_link_text": "Bitcoin ප්\u200Dරචාර පත්\u200Dරිකා",
	"stickers_flyers_link_after": " මුද්\u200Dරණය කර ඇලීම කර තව පුද්ගලයින්ට Bitcoin හඳුන්වා දෙන්න.",
	"stickers_country_global_print": "ගෝලීය \u2014 මගේම ස්ටිකර් මුද්\u200Dරණය කරන්න",
	"stickers_country_global_order": "ගෝලීය \u2014 තොග ලෙස ඇණවුම් කරන්න",
	"placeholder_name_optional": "නම (අනිවාර්ය නොවේ)",
	"placeholder_address_line_1": "ලිපින පේළිය 1",
	"placeholder_address_line_2": "ලිපින පේළිය 2 (අනිවාර්ය නොවේ)",
	"placeholder_city": "නගරය",
	"placeholder_state": "ප්\u200Dරාන්තය",
	"placeholder_province": "පළාත",
	"placeholder_zip_code": "තැපැල් කේතය",
	"placeholder_postal_code": "තැපැල් කේතය",
	"placeholder_language": "භාෂාව",
	"placeholder_which_stickers": "කුමන ස්ටිකර්?",
	"placeholder_email_optional": "දැනුම් දීමට ඔබේ විද්\u200Dයුත් තැපැල් ඇතුළත් කරන්න (අනිවාර්ය නොවේ)"
});

// postcards
createFile(`postcards_en.json`, `postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocks වෙතින් නිදහස් Bitcoin පෝස්ට්කාඩ්පත්",
	"postcards_description": "නිදහස් Bitcoin පෝස්ට්කාඩ් පැක් එකක් ලබාගෙන ඔබ දන්නා කෙනෙකු සමඟ Bitcoin බෙදාගන්න.",
	"postcards_header": "පෝස්ට්කාඩ් වැඩසටහන වසා ඇත",
	"postcards_program_closed_message": "අපේ නිදහස් Bitcoin පෝස්ට්කාඩ් වැඩසටහන අවසන් වී ඇත. තැපැලෙන් Bitcoin අධ්\u200Dයාපනය ව්\u200Dයාප්ත කිරීමට සහභාගී වූ සැමට ස්තූතියි!",
	"postcards_sticker_alternative_header": "ඒ වෙනුවට නිදහස් BITCOIN ස්ටිකර් ලබාගන්න",
	"postcards_sticker_alternative_message": "අපේ නිදහස් ස්ටිකර් වැඩසටහන සමඟ Bitcoin දැනුවත්කම ව්\u200Dයාප්ත කරගෙන යන්න! අපේ Bitcoin ස්ටිකර් පොදු ස්ථානවල බෙදා හැරීමට පරිපූර්ණ වන අතර අධ්\u200Dයාපනික අන්තර්ගතයට සබැඳෙන QR කේත සමඟ පැමිණේ.",
	"postcards_sticker_cta": "නිදහස් ස්ටිකර් ලබාගන්න",
	"postcards_step_2": "පෝස්ට්කාඩ්පත් පෙනුණු ආකාරය",
	"postcards_instructions_4": "ඔබ දන්නා කෙනෙකුට Bitcoin හඳුන්වා දීම පහසු කිරීමට අපි මෙම පෝස්ට්කාඩ්පත් සෑදුවෙමු! ලිපිනයක් සහ මුද්දරයක් එකතු කර ඔබේ පෝස්ට්කාඩ් පත තැපැලට දමන්න.",
	"postcards_instructions_5": "Bitcoin අනුවර්තනය සීඝ්\u200Dර කිරීම අපේ මෙහෙවරයි. නිදහස් ස්ටිකර් ලබාගෙන පොදු ස්ථානවල තැබීමෙන් ඔබට උදවු කළ හැකිය!",
	"postcards_instructions_6": "Bitcoin ගැන තව ඉගෙන ගැනීමෙන් ප්\u200Dරයෝජන ගත හැකි කිහිප දෙනෙක් අප සැමට ඇත. අද ඔවුන් සමඟ Bitcoin ස්ටිකර් බෙදාගන්න!"
});

// signs
createFile(`signs_en.json`, `signs_${lang}.json`, {
	"signs_description": "ඇමරිකාව පුරා මෙම Bitcoin සින්බෝර්ඩ් තැබීමට අපට උදවු කරන්න!",
	"signs_title": "bitcoin.rocks වෙතින් නිදහස් Bitcoin සින්බෝර්ඩ්",
	"signs_choose_header": "ඇමරිකාව පුරා මෙම BITCOIN සින්බෝර්ඩ් තැබීමට උදවු කිරීමට ස්තූතියි!",
	"signs_choose_c1": "අපි දැන් සම්පූර්ණයෙන්ම සින්බෝර්ඩ් ඉවරයි! Bitcoin අනුවර්තනය අධ්\u200Dයාපනය හරහා සීඝ්\u200Dර කිරීම අපේ මෙහෙවරයි.",
	"signs_choose_c2": "ඔබගෙන් බොහෝ දෙනෙක් පොදු ස්ථානවල මෙම නිදහස් Bitcoin සින්බෝර්ඩ් තැබීමෙන් උදවු කළහ. අපේ සියලුම සින්බෝර්ඩ්වල අධ්\u200Dයාපනික පිටුවකට සබැඳෙන QR කේත ඇත",
	"signs_choose_c3": "මුදල් නිෂ්පාදනය",
	"signs_choose_c4": "අපේ විශිෂ්ට ප්\u200Dරජාවට ස්තූතිය, අපි සිය දහස් ගණනක් මිනිසුන්ට ළඟා වී Bitcoin ගවේෂණයේ ඔවුන්ගේ පළමු පියවර ගැනීමට උදවු කළෙමු.",
	"signs_share_header": "ඔබේ සින්බෝර්ඩ් ස්ථාන බෙදාගන්න",
	"signs_share_c1": "Nostr හි ඔබේ සින්බෝර්ඩ් ස්ථානයේ ඡායාරූපයක් අප සමඟ බෙදාගන්න, අනෙක් අය ඔවුන්ගේ සින්බෝර්ඩ් තබන්නේ කොහේදැයි බලන්න.",
	"signs_btn_share_on_nostr": "NOSTR හි බෙදාගන්න",
	"signs_btn_what_is_nostr": "NOSTR කියන්ද?",
	"signs_instructions_1": "ඔබේ තැපැල් ලිපිනය ඇතුළත් කරන්න, අපි ඔබට Bitcoin සින්බෝර්ඩ් 10ක පෙට්ටියක් තැපැලෙන් යවන්නම්!",
	"signs_instructions_2": "ඔබේ නිදහස් සින්බෝර්ඩ් නැව්ගත කළ පසු ලිපින දත්ත මකා දැමේ."
});

// flyers
createFile(`flyers_en.json`, `flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocks වෙතින් නිදහස් Bitcoin ප්\u200Dරචාර පත්\u200Dරිකා",
	"flyers_description": "Bitcoin ප්\u200Dරචාර පත්\u200Dරිකාවක් ගෙදර මුද්\u200Dරණය කර ඔබ අවට සිටින අයට Bitcoin හඳුන්වා දීමට පොදු ස්ථානවල තබන්න.",
	"flyers_header_1": "මුද්\u200Dරණය කර ඇලීම",
	"flyers_header_2": "BITCOIN ප්\u200Dරචාර පත්\u200Dරිකා",
	"flyers_intro_header": "මෙම BITCOIN ප්\u200Dරචාර පත්\u200Dරිකා මුද්\u200Dරණය කර ඇලීම කරන්නේ කෙසේද",
	"flyers_intro_c1": "පොදු ස්ථානවල Bitcoin ප්\u200Dරචාර පත්\u200Dරිකා තැබීමෙන් තව පුද්ගලයින්ට Bitcoin හඳුන්වා දීමට ඔබට උදවු කිරීම අපේ මෙහෙවරයි. මෙම ප්\u200Dරචාර පත්\u200Dරිකාවේ අපේ",
	"flyers_intro_c2": "අධ්\u200Dයාපනික Bitcoin වෙබ් අඩවියට සබැඳෙන QR කේතයක් ඇත.",
	"flyers_intro_c3": "මුදල් නිෂ්පාදනය",
	"flyers_intro_c4": "මෙම ප්\u200Dරචාර පත්\u200Dරිකාව ගෙදර හෝ මුද්\u200Dරණාලයක මුද්\u200Dරණය කරන්න. ඉන්පසු, නගරයේ බුලටින් පුවරු, දුරකථන කණු, සහ මිනිසුන්ට දැකිය හැකි වෙනත් පොදු ස්ථානවල ඇලීම කරන්න.",
	"flyers_intro_c5": "ඒ සමඟම, අපේ පැක් එකක් ඉල්ලා සිටින්න",
	"flyers_intro_c6": "නිදහස් Bitcoin ස්ටිකර්",
	"flyers_intro_c7": "තව පුද්ගලයින්ට Bitcoin හඳුන්වා දීමට උදවු කිරීමට.",
	"flyers_btn_download": "ප්\u200Dරචාර පත්\u200Dරිකාව බාගත කරන්න",
	"flyers_btn_print": "ප්\u200Dරචාර පත්\u200Dරිකාව මුද්\u200Dරණය කරන්න",
	"flyers_share_header": "ඔබේ ප්\u200Dරචාර පත්\u200Dරිකා ස්ථාන බෙදාගන්න",
	"flyers_share_c1": "Nostr හි ඔබේ ප්\u200Dරචාර පත්\u200Dරිකා ස්ථාන අප සමඟ බෙදාගන්න, අනෙක් අය ඔවුන්ගේ ප්\u200Dරචාර පත්\u200Dරිකා තබන්නේ කොහේදැයි බලන්න.",
	"flyers_btn_share_on_nostr": "NOSTR හි බෙදාගන්න",
	"flyers_btn_what_is_nostr": "NOSTR කියන්ද?"
});

// get-involved
createFile(`get-involved_en.json`, `get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "සම්බන්ධ වී Bitcoin ව්\u200Dයාප්ත කිරීමට උදවු කරන්න",
	"get_involved_description": "අපේ නිදහස් සම්පත් Bitcoin අනුවර්තනය ව්\u200Dයාප්ත කිරීම පහසු කරයි.",
	"get_involved_header": "සම්බන්ධ වන්න",
	"get_involved_header_2": "BITCOIN ව්\u200Dයාප්ත කරන්න",
	"get_involved_intro_1": "අපේ ලෝකයේ වත්මන් තත්ත්වයේ ජීවත් වීම මනස්තාපයට පත් විය හැකිය.",
	"get_involved_intro_2": "අපේ මුදල් කඩා වැටී ඇත. එහි ප්\u200Dරතිඵලයක් ලෙස, සමාජයේ මූලික කොටස් ද කඩා වැටී ඇත.",
	"get_involved_intro_3": "ඔබ දැනටමත් Bitcoin ගැන දන්නේ නම්, Bitcoin ගෙන එන බලාපොරොත්තුව ඔබ දනී. වඩා හොඳ මුදල්වලින් සාධ්\u200Dය වන දීප්තිමත් අනාගතයක් සඳහා බලාපොරොත්තුව.",
	"get_involved_intro_4": "නමුත් ඔබ අවට බොහෝ දෙනෙක් Bitcoin ගැන දන්නේ නැත. ඔවුන් ඔබ මෙන්ම කඩා වැටුණු ලෝකයේ ජීවත් වන නමුත්, අන්ධකාරය හරහා ඔවුන්ට උදවු වීමට බලාපොරොත්තුවේ පහනක් නොමැතිව.",
	"get_involved_intro_5": "නමුත් ඔබට එය වෙනස් කිරීමට උදවු කළ හැකිය. Bitcoin ගෙන එන බලාපොරොත්තුව ඔබ වටා සිටින අයට ව්\u200Dයාප්ත කිරීම පහසු කිරීමට අපි නිදහස් සම්පත් කිහිපයක් සෑදූවෙමු.",
	"get_involved_sticker_header": "පොදු ස්ථානවල ස්ටිකරයක් තබන්න",
	"get_involved_sticker_content_1": "ඔබට කිසිවෙකු සමඟ අන්තර්ක්\u200Dරියා නොකරමින් ඔබ අවට සිටින අයට Bitcoin ගැන දැනුවත් කිරීමට උදවු කළ හැකිය. අපේ නිදහස් Bitcoin ස්ටිකර් එකක් පොදු ස්ථානවල තබන්න.",
	"get_involved_sticker_content_2": "සෑම මාසයකම සිය ගණනක් මෙම ස්ටිකර්වල QR කේත ස්කෑන් කරයි. මුදල් නිෂ්පාදන ස්ටිකර්",
	"get_involved_sticker_content_3": "මුදල් නිෂ්පාදනයට විසඳුමක් ලෙස Bitcoin ගැන පිටුවකට සබැඳේ.",
	"get_involved_sticker_content_4": "අනෙකුත් ස්ටිකර් අපේ අධ්\u200Dයාපනික මුල් පිටුවට සබැඳෙන අතර එය මිනිසුන්ට පෙන්වයි",
	"get_involved_sticker_content_5": "Bitcoin වඩා හොඳ ලෝකයක් ගොඩනගන ආකාරය.",
	"get_involved_sticker_content_6": "මිනිසුන් ඒවා දකිනු ඇති ඔබේ ප්\u200Dරජාවේ ස්ථානවල මෙම ස්ටිකර් තැබීමෙන්, ඔබ අවට සිටින අයට Bitcoin ගවේෂණයේ ඔවුන්ගේ පළමු පියවර ගැනීමට උදවු කළ හැකිය.",
	"get_involved_request_a": "ඉල්ලා සිටින්න",
	"get_involved_sticker_pack": "ස්ටිකර් පැක් එකක්",
	"get_involved_postcard_header": "පෝස්ට්කාඩ්පතක් යවන්න",
	"get_involved_postcard_content_1": "ඔබ දන්නා කෙනෙකුට අපේ නිදහස් පෝස්ට්කාඩ්පත් එකක් යැවීමෙන් Bitcoin හි බලාපොරොත්තුව ව්\u200Dයාප්ත කිරීමට ඔබට උදවු කළ හැකිය.",
	"get_involved_postcard_content_2": "සෑම පෝස්ට්කාඩ් පතකම පිටුපස Bitcoin ගැන ආකර්ෂණීය සටහනක් සහ තව ඉගෙන ගැනීමට QR කේතයක් ඇත.",
	"get_involved_postcard_content_3": "යමෙකුට Bitcoin පෝස්ට්කාඩ් පතක් යැවීමෙන්, ඔබට ඔවුන්ට Bitcoin නව ආකාරයකින් දැකීමට උදවු කළ හැකිය.",
	"get_involved_postcard_pack": "පෝස්ට්කාඩ් පැක් එකක්",
	"get_involved_business_header": "ව්\u200Dයාපාරයක් හඳුන්වා දෙන්න",
	"get_involved_business_content_1": "Bitcoin චක්\u200Dරීය ආර්ථිකය ගොඩනැගීමට උදවු කිරීමට කැමතිද? අපේ Bitcoin ව්\u200Dයාපාර කිට් Bitcoin ගෙවීම් පිළිගැනීම ගැන ව්\u200Dයාපාරයකට ප්\u200Dරවේශ කිරීම පහසු කරයි.",
	"get_involved_business_content_2": "සෑම ව්\u200Dයාපාර කිට් එකක්ම Bitcoin ගෙවීම් පිළිගැනීමේ වාසි ඉස්මතු කරන ප්\u200Dරචාර පත්\u200Dරිකා ඇතුළත් වේ. සෑම ප්\u200Dරචාර පත්\u200Dරිකාවක්ම විවිධ",
	"get_involved_business_content_3": "නිදහස් Bitcoin ව්\u200Dයාපාර සම්පත් වෙත සබැඳේ.",
	"get_involved_business_kit": "ව්\u200Dයාපාර කිට් එකක්"
});

console.log('\nDone! Content files created for Sinhala (si).');
