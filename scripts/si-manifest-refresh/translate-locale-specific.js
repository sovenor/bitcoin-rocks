#!/usr/bin/env node
/**
 * Sinhala manifest refresh — locale-specific gaps.
 *
 * The Sinhala locale was incomplete pre-V2 — a number of keys
 * (business/faq, business/wallets, business/index, buy platform
 * descriptions, common sticker dimensions, get-involved business
 * cards, etc.) were never translated. This script fills them in.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"si.json",
);

const T = {};

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::frequently_asked_questions_about_accepting_bitcoin":
		"Bitcoin පිළිගැනීම පිළිබඳ නිතර අසන ප්‍රශ්න",
	"business/faq::faq_s1": "Bitcoin යනු කුමක්ද?",
	"business/faq::faq_s1_c1":
		"Bitcoin යනු දේවල් දෙකකි: ඩිජිටල් මුදල් සහ පරිගණක ජාලයකි.",
	"business/faq::faq_s1_c2":
		"Bitcoin ජාලය භාවිතයෙන් ඔබට සෘජුවම අන් අයට bitcoin (ඩිජිටල් මුදල්) යැවිය හැකිය.",
	"business/faq::faq_s1_c3":
		"බැංකු හෝ ක්‍රෙඩිට් කාඩ් සමාගම් වැනි අතරමැදියන් හෝ කේන්ද්‍රීය අධිකාරීන් නොමැතිව Bitcoin ජාලයට ක්‍රියාත්මක විය හැකි බැවින්, ඔබට ඔවුන්ගේ ගනුදෙනු ගාස්තු මග හැරිය හැකිය.",
	"business/faq::faq_s1_c4":
		"Bitcoin ගනුදෙනු ඉක්මනින් (මිනිත්තු 10) අවසන් පියවීමක් කරගන්නා අතර කිසි විටෙක ආපසු අය කළ නොහැකි නිසා, ඔබේ මුදල් ඔබේ මුදල් බව දැන සැහැල්ලුවෙන් නිදා ගත හැකිය.",
	"business/faq::faq_s2": "Bitcoin මගේ ව්‍යාපාරයට ප්‍රයෝජනය වන්නේ කෙසේද?",
	"business/faq::faq_s2_c1":
		"Bitcoin ඔබට අඩු ගාස්තු සහිත ගෙවීම් පිළිගැනීමට සහ වැඩි පාරිභෝගිකයින් ලබා ගැනීමට ඉඩ දෙයි. Bitcoin ගෙවීම් අවම ගාස්තුවක් නොමැති අඩු ගාස්තු, ක්ෂණිකව පියවේ, සහ ආපසු ගෙවීම්වලට සහ වංචාවට ප්‍රතිශක්තිකරණය කර ඇත.",
	"business/faq::faq_s2_c2":
		"Bitcoin පිළිගැනීම නොමිලේ වන අතර Bitcoin වෙළෙඳ සිතියම් මත ඔබේ ව්‍යාපාරය ලැයිස්තුගත කිරීමට ඉඩ දෙයි, එවිට Bitcoin පරිශීලකයින්ට ඔබේ ව්‍යාපාරය පහසුවෙන් සොයා ගත හැකිය.",
	"business/faq::faq_s2_c3":
		"Bitcoin ව්‍යාපාරයට හොඳ සියලු ක්‍රම බලන්න.",
	"business/faq::faq_s3": "මම Bitcoin ගෙවීම් පිළිගන්නේ කෙසේද?",
	"business/faq::faq_s3_c1":
		"Bitcoin ගෙවීම් පිළිගැනීමට ඔබට අවශ්‍ය වන්නේ නොමිලේ Bitcoin පසුම්බියක් පමණි.",
	"business/faq::faq_s3_c2":
		"අපගේ පසුම්බි මාර්ගෝපදේශය ඔබව ඉක්මනින් සහ පහසුවෙන් සකස් කරනු ඇත, එවිට ඔබට අද Bitcoin පිළිගැනීමේ ප්‍රතිලාභ අගුළු හැරිය හැකිය!",
	"business/faq::faq_s3_c3": "පසුම්බි මාර්ගෝපදේශය බලන්න",
	"business/faq::faq_s4":
		"මට ලැබෙන Bitcoin ගෙවීම් මගේ දේශීය මුදල් වර්ගයට පරිවර්තනය කළ හැකිද?",
	"business/faq::faq_s4_c1":
		"ඔව්! හයිබ්‍රිඩ් පසුම්බියක් භාවිතයෙන්, ඔබට ලැබෙන Bitcoin ගෙවීම් ලැබුණු වහාම ඔබේ දේශීය මුදල් වර්ගයට ස්වයංක්‍රීයව පරිවර්තනය කළ හැකිය.",
	"business/faq::faq_s4_c2":
		"අපගේ පසුම්බි මාර්ගෝපදේශය ඔබට ඉක්මනින් සහ පහසුවෙන් සකස් වීමට උදව් කළ හැකිය.",
	"business/faq::faq_s4_c3":
		"ඔබට ලැබෙන ගෙවීම් වලින් කොටසක් Bitcoin ලෙස තබා ගැනීමටද තෝරාගත හැකිය. Bitcoin වල ඉතුරු කිරීමට බොහෝ ප්‍රතිලාභ ඇත:",
	"business/faq::faq_s4_c4": "Bitcoin යනු සම්පූර්ණ සංචිත මූල්‍ය පද්ධතියකි.",
	"business/faq::faq_s4_c5": "Bitcoin හි උද්ධමනයක් නැත.",
	"business/faq::faq_s4_c6":
		"මෙම ප්‍රතිලාභ Bitcoin දිගු කාලීනව මුදල් ගබඩා කිරීමට විශිෂ්ට ක්‍රමයක් කරයි.",
	"business/faq::faq_s4_c7":
		"ඔබ ඔබේ සියලුම Bitcoin ගෙවීම් ඩොලර්වලට පරිවර්තනය කිරීමට තෝරා ගත්තද, වැඩි විභව පාරිභෝගිකයින් වෙත ළඟා වන අතරතුර ගාස්තු වඩා අඩුවෙන් ගෙවීම් පිළිගැනීමේ ප්‍රතිලාභ ඔබට තවමත් ලැබේ.",
	"business/faq::faq_s5": "මට පෞද්ගලිකව Bitcoin ගෙවීම් පිළිගත හැකිද?",
	"business/faq::faq_s5_c1":
		"ඔව්! Bitcoin පසුම්බියක් භාවිතයෙන් පෞද්ගලිකව Bitcoin ගෙවීම් පිළිගැනීම පහසුය.",
	"business/faq::faq_s5_c2":
		"අපගේ පසුම්බි මාර්ගෝපදේශය ඔබේ ව්‍යාපාරයට හොඳම Bitcoin පසුම්බිය තෝරා ගැනීමට උදව් කළ හැකිය.",
	"business/faq::faq_s5_c3": "පසුම්බි මාර්ගෝපදේශය බලන්න",
	"business/faq::faq_s6": "මට මාර්ගගතව Bitcoin ගෙවීම් පිළිගත හැකිද?",
	"business/faq::faq_s6_c1":
		"ඔව්! ඔබේ පවතින මාර්ගගත වෙළඳසැල සමඟ මාර්ගගතව Bitcoin ගෙවීම් පිළිගැනීම පහසුය.",
	"business/faq::faq_s6_c2":
		"වැඩි විස්තර සඳහා අපගේ පසුම්බි මාර්ගෝපදේශය බලන්න.",
	"business/faq::faq_s7":
		"මම Bitcoin පිළිගන්නා බව මගේ පාරිභෝගිකයින්ට දන්වන්නේ කෙසේද?",
	"business/faq::faq_s7_c1":
		"ඔබ Bitcoin පිළිගන්නා බව ඔබේ පාරිභෝගිකයින්ට දැනුම් දීමට ඔබේ ව්‍යාපාරයේ ප්‍රදර්ශනය කළ හැකි නොමිලේ 'Bitcoin Accepted Here' ස්ටිකර අපි ඉදිරිපත් කරමු.",
	"business/faq::faq_s7_c2":
		"ඔබේ ස්ටිකර ඉල්ලීමට මෙතැන ක්ලික් කරන්න.",
	"business/faq::faq_s7_c3":
		"ඔබට ඔබේ ව්‍යාපාරය නොමිලේ Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත කර, එය පිළිගන්නා ව්‍යාපාරවල තම Bitcoin වියදම් කිරීමට කැමති Bitcoin පරිශීලකයින් මිලියන ගණනකට නිරාවරණය ලබා ගත හැකිය.",
	"business/faq::faq_s7_c4": "දැන් ලැයිස්තුගත කරන්න.",
	"business/faq::faq_s8":
		"Bitcoin පිළිගැනීමෙන් මට වැඩි පාරිභෝගිකයින් ලබා ගත හැක්කේ කෙසේද?",
	"business/faq::faq_s8_c1":
		"එය පිළිගන්නා ව්‍යාපාරවල තම Bitcoin වියදම් කිරීමට කැමති Bitcoin පරිශීලකයින් මිලියන ගණනක් සිටී.",
	"business/faq::faq_s8_c2":
		"Bitcoin ගෙවීම් පිළිගැනීම පමණක් මගින්, ඔබේ ව්‍යාපාරය නොමිලේ Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත වී නව විභව පාරිභෝගිකයින්ට ඔබට නිරාවරණයක් ලබා දිය හැකිය.",
	"business/faq::faq_s8_c3": "දැන් ලැයිස්තුගත කරන්න.",
	"business/faq::faq_s9": "Bitcoin පිළිගැනීමට කොපමණ වැය වේද?",
	"business/faq::faq_s9_c1":
		"ඔබේ ව්‍යාපාරයේ Bitcoin පිළිගැනීම 100% නොමිලේ. කොන්ත්‍රාත් හෝ සැඟවුණු ගාස්තු නැත.",
	"business/faq::faq_s9_c2":
		"අද Bitcoin ගෙවීම් පිළිගැනීම ආරම්භ කිරීමට අපගේ පසුම්බි මාර්ගෝපදේශය බලන්න.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::bitcoin_is_good_for_business":
		"Bitcoin ව්‍යාපාරයට හොඳයි",
	"business/index::biz_s1": "අවම ගාස්තු රහිත අඩු ගාස්තු",
	"business/index::biz_s1_c1":
		"Bitcoin ඔබට ඔබේ පාරිභෝගිකයින්ගෙන් සෘජුවම ගෙවීම් ලබා ගැනීමට ඉඩ දෙයි, මුදල් මෙන්. Bitcoin ජාලය දැඩි ගාස්තු අය කරන බැංකු සහ ක්‍රෙඩිට් කාඩ් සමාගම් වැනි අතරමැදියන් නොමැතිව ක්‍රියාත්මක වේ.",
	"business/index::biz_s2": "ක්ෂණික පියවීම",
	"business/index::biz_s2_c1":
		"මුදල් මෙන්ම, Bitcoin ගෙවීම් ක්ෂණිකව පියවේ. ඔබට ඔබේ ක්‍රෙඩිට් කාඩ් සමාගම හෝ බැංකුව ඔබට ගෙවීමට බලා සිටීමට අවශ්‍ය නැත. ඒ වෙනුවට, ඔබට ඔබේ මුදල් වෙත වහාම ප්‍රවේශ වීමේ හැකියාව ලැබේ.",
	"business/index::biz_s3": "ආපසු ගෙවීම් හෝ වංචාවක් නැත",
	"business/index::biz_s3_c1":
		"Bitcoin ගෙවීම් ඔබ සහ ඔබේ පාරිභෝගිකයින් අතර සෘජුව සිදුවන බැවින්, කිසිවෙකුට ඔබේ මුදල් ආපසු ගෙවීමක් සමඟ ආපසු ගැනීමට නොහැකිය.",
	"business/index::biz_s3_c2":
		"ව්‍යාජ Bitcoin Bitcoin ජාලයේ යැවිය නොහැක, එයින් අදහස් වන්නේ ඔබේ ව්‍යාපාරයට මුදල් අහිමි විය හැකි වංචාකාරී ගනුදෙනු ගැන කිසිදා කනස්සල්ලක් වීමට අවශ්‍ය නොවන බවයි.",
	"business/index::biz_s4": "වැඩි පාරිභෝගිකයින් ලබා ගන්න",
	"business/index::biz_s4_c1":
		"මිනිසුන් මිලියන ගණනක් Bitcoin හිමිකාරයෝ වන අතර එය පිළිගන්නා ස්ථානවල තම Bitcoin වියදම් කිරීමට කැමතිය.",
	"business/index::biz_s4_c2":
		"Bitcoin පිළිගැනීම පමණක් මගින්, ඔබේ ව්‍යාපාරය Bitcoin වෙළෙඳ සිතියම්වල ලැයිස්තුගත කර නව Bitcoin පාරිභෝගිකයින්ට නොමිලේ නිරාවරණයක් ලබා ගත හැකිය.",
	"business/index::biz_s4_c3":
		"Bitcoin පිළිගැනීම 100% නොමිලේ. කොන්ත්‍රාත් හෝ සැඟවුණු ගාස්තු නැත.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::bitcoin_merchant_maps_list_your_business_for_free":
		"Bitcoin වෙළෙඳ සිතියම් - ඔබේ ව්‍යාපාරය නොමිලේ ලැයිස්තුගත කරන්න",
	"business/maps::maps_view": "සිතියම මෙතැන බලන්න.",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"ඉංග්‍රීසි 'Bitcoin Accepted Here' ස්ටිකර ගොනු",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::bitcoin_accepted_here_stickers":
		"Bitcoin Accepted Here ස්ටිකර",
	"business/stickers::stickers_request": "ඔබේ නොමිලේ ස්ටිකර ලබා ගන්න",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::how_to_accept_bitcoin_payments":
		"Bitcoin ගෙවීම් පිළිගන්නේ කෙසේද",
	"business/wallets::wallets_feature_bitcoin_only": "Bitcoin පමණක් පසුම්බිය",
	"business/wallets::wallets_feature_hybrid": "හයිබ්‍රිඩ් පසුම්බිය",
	"business/wallets::wallets_feature_in_person": "පෞද්ගලික ගෙවීම් පමණි",
	"business/wallets::wallets_feature_in_person_online": "පෞද්ගලික සහ මාර්ගගත ගෙවීම්",
	"business/wallets::wallets_feature_info": "ව්‍යාපාර තොරතුරු අවශ්‍ය",
	"business/wallets::wallets_feature_invoicing": "නොමිලේ ඉන්වොයිස් මෘදුකාංගය",
	"business/wallets::wallets_feature_multiple_employees":
		"බහු සේවක සහාය (BPTs)",
	"business/wallets::wallets_feature_no_info": "තොරතුරු අවශ්‍ය නැත",
	"business/wallets::wallets_feature_online_store": "මාර්ගගත වෙළඳසැල් ඒකාබද්ධ කිරීම",
	"business/wallets::wallets_feature_self_hosted": "ස්වයං සත්කාරක = 0% ගාස්තු",
	"business/wallets::wallets_feature_settles_bitcoin":
		"100% Bitcoin වලින් පියවීම",
	"business/wallets::wallets_feature_settles_both":
		"Bitcoin සහ ඩොලර් වලින් පියවීම",
	"business/wallets::wallets_get_wallet": "පසුම්බිය ලබා ගන්න",
	"business/wallets::wallets_header":
		"Bitcoin ගෙවීම් පිළිගැනීමට නොමිලේ Bitcoin පසුම්බියක් ලබා ගන්න",
	"business/wallets::wallets_intro_1":
		"සියලුම Bitcoin පසුම්බි අන්තර් ක්‍රියාකාරී වේ, එබැවින් ඔබේ පාරිභෝගිකයින් භාවිතා කරන පසුම්බිය නොතකා ඔවුන්ට ඔබට Bitcoin වලින් ගෙවිය හැකිය.",
	"business/wallets::wallets_intro_2": "Bitcoin පමණක් පසුම්බි:",
	"business/wallets::wallets_intro_3":
		"මේවා Bitcoin හි සම්පූර්ණ ප්‍රතිලාභ අගුළු හරින පිරිසිදු Bitcoin පසුම්බි වේ: අතරමැදියන් නැත, අඩු ගාස්තු, සහ ආපසු ගෙවීම් හෝ වංචාවක් නැත.",
	"business/wallets::wallets_intro_4": "හයිබ්‍රිඩ් පසුම්බි:",
	"business/wallets::wallets_intro_5":
		"මේවා පාරිභෝගිකයෙකු ඔබට ගෙවූ වහාම ඔබේ Bitcoin වලින් ඕනෑම කොටසක් ඩොලර්වලට හුවමාරු කිරීමට ඔබට ඉඩ දෙයි. ගාස්තු තවමත් ක්‍රෙඩිට් කාඩ් ගෙවීම්වලට වඩා අඩු වේ, නමුත් පිරිසිදු Bitcoin ගෙවීම්වලට වඩා වැඩිය.",
	"business/wallets::wallets_intro_6":
		"දෙකම Bitcoin පිළිගැනීමට විශිෂ්ට ක්‍රම වේ. ඔබ භාවිතා කරන විශේෂිත පසුම්බිය ඔබේ ව්‍යාපාරයේ ප්‍රමාණය සහ වර්ගය මත රඳා පවතී.",
	"business/wallets::wallets_name_breez": "BREEZ",
	"business/wallets::wallets_name_btcpay_server": "BTCPAY SERVER",
	"business/wallets::wallets_name_ibex_pay": "IBEX PAY",
	"business/wallets::wallets_name_open_node": "OPEN NODE",
	"business/wallets::wallets_name_square": "SQUARE",
	"business/wallets::wallets_name_zaprite": "ZAPRITE",
	"business/wallets::wallets_square_note":
		"ඔබට ඔබේ පවතින Square PoS පර්යන්තය හෝ මාර්ගගත වෙළඳසැල් ඒකාබද්ධතාව සමඟ Bitcoin ගෙවීම් පිළිගත හැකිය. Bitcoin ගෙවීම් පිළිගැනීම මෙතරම් පහසු වී නැත.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::why_s1": "Bitcoin හි උද්ධමනයක් නැත",
	"business/why::why_s2": "Bitcoin හි බැංකු දිවීම් නැත",
	"business/why::why_s3": "Bitcoin අවසරයකින් තොරයි",
	"business/why::why_s4": "Bitcoin වඩා හොඳ ලෝකයක් ගොඩනඟයි",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::bitcoin_sticker_files_all_languages":
		"Bitcoin ස්ටිකර ගොනු: සියලුම භාෂා",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_atm_description":
		"Bitcoin ATM ඔබට ක්ෂණිකව මුදල්වලින් Bitcoin මිලදී ගැනීමට ඉඩ දෙයි. Coin ATM Radar භාවිතයෙන් ඔබට ආසන්න එකක් සොයා ගන්න.",
	"buy::buy_platform_bisq_description":
		"Bisq යනු KYC රහිතව පුද්ගලික Bitcoin වෙළඳාමට ඉඩ දෙන විමධ්‍යගත සම සම හුවමාරුවකි.",
	"buy::buy_platform_coinsquare_description":
		"Coinsquare යනු ශක්තිමත් නියාමන අනුකූලතාවක් සහ පාරිභෝගික සහාය සහිත කැනේඩියානු Bitcoin හුවමාරුවකි.",
	"buy::buy_platform_feature_advanced": "උසස් විශේෂාංග",
	"buy::buy_platform_feature_anonymous": "වඩාත් නිර්නාමික",
	"buy::buy_platform_feature_auto_invest": "ස්වයං ආයෝජන සැලසුම්",
	"buy::buy_platform_feature_bitcoin_only": "Bitcoin පමණයි",
	"buy::buy_platform_feature_canadian": "කැනේඩියානු කේන්ද්‍රීය",
	"buy::buy_platform_feature_cash": "මුදල් මිලදී ගැනීම්",
	"buy::buy_platform_feature_custody": "භාරකාර සේවා",
	"buy::buy_platform_feature_dca": "ඩොලර්-පිරිවැය සාමාන්‍යකරණය",
	"buy::buy_platform_feature_decentralized": "විමධ්‍යගත",
	"buy::buy_platform_feature_education": "අධ්‍යාපන සම්පත්",
	"buy::buy_platform_feature_established": "ස්ථාපිත වේදිකාව",
	"buy::buy_platform_feature_european": "යුරෝපීය කේන්ද්‍රීය",
	"buy::buy_platform_feature_instant": "ක්ෂණික මිලදී ගැනීම්",
	"buy::buy_platform_feature_low_fees": "අඩු ගාස්තු",
	"buy::buy_platform_feature_mining": "Bitcoin පතල් කැණීම",
	"buy::buy_platform_feature_p2p": "සම සම",
	"buy::buy_platform_feature_private": "පුද්ගලික වෙළඳාම",
	"buy::buy_platform_feature_regulated": "නියාමන හුවමාරුව",
	"buy::buy_platform_feature_security": "ශක්තිමත් ආරක්ෂාව",
	"buy::buy_platform_feature_self_custody": "ස්වයං-ආරක්ෂණ පසුම්බිය",
	"buy::buy_platform_feature_support": "පාරිභෝගික සහාය",
	"buy::buy_platform_feature_withdrawal": "පහසු මුදල් ඉවත් කිරීම",
	"buy::buy_platform_kraken_description":
		"Kraken යනු උසස් වෙළඳ විශේෂාංග සහ ශක්තිමත් ආරක්ෂාව සහිත ස්ථාපිත Bitcoin හුවමාරුවකි.",
	"buy::buy_platform_relai_description":
		"Relai යනු යුරෝපීය පරිශීලකයින් සඳහා ස්වයං-ආරක්ෂණ පසුම්බිය, ස්වයං ආයෝජන විශේෂාංග සහ අඩු ගාස්තු සහිත ස්විස් Bitcoin පමණක් යෙදුමකි.",
	"buy::buy_platform_river_description":
		"River අධ්‍යාපනය සහ ආරක්ෂාව කෙරෙහි අවධානය යොමු කර Bitcoin මිලදී ගැනීම, පතල් කැණීම සහ භාරකාර සේවා ලබා දෙයි.",
	"buy::buy_platform_strike_description":
		"Strike යනු අඩු ගාස්තු සහ ක්ෂණික Lightning Network සහාය සමඟ Bitcoin මිලදී ගැනීමට වේගවත්ම සහ පහසුම ක්‍රමයයි.",
	"buy::buy_platform_swan_description":
		"Swan Bitcoin ඩොලර්-පිරිවැය සාමාන්‍යකරණය සහ අධ්‍යාපන සම්පත් සමඟ Bitcoin පමණක් සේවා සඳහා විශේෂඥය.",
});

/* ─────────────── common (sticker dimensions stay identical to English) ─────────────── */
Object.assign(T, {
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_business_content_1":
		"Bitcoin චක්‍රීය ආර්ථිකය ගොඩනැඟීමට උදව් කිරීමට අවශ්‍යද? පහසුම ක්‍රමය වන්නේ දේශීය ව්‍යාපාරවලට Bitcoin ගෙවීම් පිළිගැනීම ආරම්භ කිරීමට උදව් කිරීමයි.",
	"get-involved::get_involved_business_content_2":
		"එයට විවෘත විය හැකි ව්‍යාපාරයක් දන්නවාද? හිමිකරු අපගේ",
	"get-involved::get_involved_business_content_3":
		"Bitcoin ව්‍යාපාරික පිටුව වෙත යවන්න.",
	"get-involved::get_involved_biz_stickers_note":
		"දැනටමත් Bitcoin පිළිගන්නවාද? අපගේ නොමිලේ 'Bitcoin Accepted Here' ස්ටිකර සමඟ පාරිභෝගිකයින්ට දන්වන්න. අපි එක්සත් ජනපදයේ හෝ කැනඩාවේ ඕනෑම ලිපිනයකට පැකේජයක් යවන්නෙමු, නැතහොත් ඔබට ලොව ඕනෑම තැනකින් ඔබේම ඒවා මුද්‍රණය කළ හැකිය.",
	"get-involved::get_involved_card_biz_stickers_label":
		"පිළිගත් මෙහි ස්ටිකර",
	"get-involved::get_involved_card_biz_stickers_source":
		"මූලාශ්‍රය: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"ඔබේ ව්‍යාපාරය සඳහා නොමිලේ 'Bitcoin Accepted Here' ස්ටිකර",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-locale-specific (si): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
