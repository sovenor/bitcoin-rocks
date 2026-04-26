#!/usr/bin/env node
/**
 * Sinhala manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "Bitcoin මිල",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"ඩොලර්වලින් Bitcoin හි වර්තමාන හෝ ඓතිහාසික මිල සොයන්න",
	"business/accounting::accounting_card_pacioli_label": "Bitcoin ගණකාධිකාරී",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "Excel වෙත ආයාත කරන්න",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Bitcoin මිල Excel වෙත ස්වයංක්‍රීයව ඇද ගන්න",
	"business/accounting::accounting_card_wallets_label": "හයිබ්‍රිඩ් පසුම්බි",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"නිර්දේශිත ව්‍යාපාරික පසුම්බි බලන්න",
	"business/accounting::accounting_description":
		"ඔබේ ව්‍යාපාර ගිණුම්කරණයට Bitcoin පිළිගැනීම සඳහා සරල භාෂා මාර්ගෝපදේශය — හයිබ්‍රිඩ් පසුම්බි, පිරිවැය පදනම, ප්‍රාග්ධන ලාභ සහ ගණකාධිකාරියකු සමඟ සම්බන්ධ විය යුත්තේ කවදාද.",
	"business/accounting::accounting_disclaimer":
		"මෙම මාර්ගෝපදේශය තොරතුරු සඳහා පමණක් වන අතර එය බදු උපදෙස් නොවේ. ඔබේ විශේෂිත තත්ත්වයන්ට අනුව බදු උපදෙස් සඳහා සුදුසුකම් ලත් ගණකාධිකාරියකු සමඟ සාකච්ඡා කරන්න.",
	"business/accounting::accounting_disclaimer_label": "සටහන",
	"business/accounting::accounting_example_feb_1": "පෙබරවාරි 1",
	"business/accounting::accounting_example_gain_badge": "ප්‍රාග්ධන ලාභය",
	"business/accounting::accounting_example_gain_explain":
		"ඔබ ඩොලර් 10 ක ප්‍රාග්ධන ලාභයක් වාර්තා කරයි.",
	"business/accounting::accounting_example_gain_result": "+ඩොලර් 10",
	"business/accounting::accounting_example_jan_1": "ජනවාරි 1",
	"business/accounting::accounting_example_loss_badge": "ප්‍රාග්ධන පාඩුව",
	"business/accounting::accounting_example_loss_explain":
		"ඔබ ඩොලර් 10 ක ප්‍රාග්ධන පාඩුවක් වාර්තා කරයි.",
	"business/accounting::accounting_example_loss_result": "−ඩොලර් 10",
	"business/accounting::accounting_example_received_label": "ලැබුණා",
	"business/accounting::accounting_example_sold_label": "විකුණා හෝ වියදම් කරන ලදී",
	"business/accounting::accounting_hero_subtitle":
		"ඔබේ ව්‍යාපාරයේ Bitcoin පිළිගැනීම ඔබේ ගිණුම්කරණය සංකීර්ණ කිරීමට අවශ්‍ය නැත. කෙටි අනුවාදය — සහ එය සරල කරන මෙවලම් සහ විශේෂඥයින්.",
	"business/accounting::accounting_intro_c1":
		"ඔබ දැනටමත් මුදල් හෝ කාඩ්පත් පිළිගන්නේ නම්, ඔබේ ව්‍යාපාර ගිණුම්කරණයට Bitcoin එකතු කිරීම පෙනෙනවාට වඩා පහසුය. ඔබට විකල්ප දෙකක් ඇත: ලැබීමේදී එක් එක් Bitcoin ගෙවීම ස්වයංක්‍රීයව ඩොලර්වලට පරිවර්තනය කරන්න (නව ගිණුම්කරණයක් අවශ්‍ය නැත), හෝ සමහර ප්‍රමාණයක් Bitcoin ලෙස තබා ගන්න (ට්‍රැක් කිරීමට අතිරේක සංඛ්‍යා කිහිපයක්).",
	"business/accounting::accounting_intro_c2":
		"මෙම මාර්ගෝපදේශය ඔබව දෙකම හරහා ගෙන යයි — එවිට ඔබට ඔබේ ව්‍යාපාරයට වැඩ කරන්නේ කුමක්දැයි තෝරාගත හැකි අතර විශ්වාසයෙන් Bitcoin පිළිගැනීම ආරම්භ කළ හැකිය.",
	"business/accounting::accounting_s1": "පහසු ක්‍රමය: ස්වයංක්‍රීයව ඩොලර්වලට පරිවර්තනය කරන්න",
	"business/accounting::accounting_s1_c1":
		"Bitcoin පිළිගැනීමට පහසුම ක්‍රමය නම්, ලැබෙන මොහොතේ ලැබෙන සියලුම Bitcoin ගෙවීමක් 100% ඩොලර් (හෝ ඔබේ දේශීය මුදල්) සඳහා ස්වයංක්‍රීයව විකුණන හයිබ්‍රිඩ් පසුම්බියක් භාවිතා කිරීමයි.",
	"business/accounting::accounting_s1_c2":
		"මෙම සැකසීම සමඟ, ඔබේ ගිණුම්කරණය හරියට අද එය පෙනෙන ආකාරයටම පෙනේ — එක් එක් විකිණීමක් සඳහා අවසන් ඩොලර් එකතුවක්. පිරිවැය පදනමක් නැත, ප්‍රාග්ධන ලාභයක් නැත, නව පැතුරුම්පතක් නැත.",
	"business/accounting::accounting_s2":
		"ඔබ Bitcoin රඳවා ගන්නේ නම්: පිරිවැය පදනම නිරීක්ෂණය කරන්න",
	"business/accounting::accounting_s2_c1":
		"සමහර ව්‍යාපාර ස්වයංක්‍රීයව සම්පූර්ණයෙන්ම පරිවර්තනය නොකර ලැබෙන Bitcoin හි කොටසක් රඳවා ගැනීමට තෝරා ගනී. මෙය ඔබ නම්, ප්‍රධාන අතිරේක පියවර වන්නේ පිරිවැය පදනම නිරීක්ෂණය කිරීම — ලැබීමේ දින එක් එක් Bitcoin ගෙවීමේ ඩොලර් වටිනාකම.",
	"business/accounting::accounting_s2_c2":
		"ඔබේ ව්‍යාපාරය සම්පූර්ණයෙන්ම Bitcoin වලින් සිතුවත්, බොහෝ බදු අධිකාරීන් තවමත් ඩොලර්වලින් වාර්තා කිරීම අවශ්‍ය වේ. හොඳ ආරංචිය: එය එක් ගනුදෙනුවකට සංඛ්‍යා දෙකක් පමණි — ලැබුණු Bitcoin ප්‍රමාණය සහ එදින එහි ඩොලර් වටිනාකම.",
	"business/accounting::accounting_s2_c3":
		"දෛනික මිල පරීක්ෂා කිරීම් වළක්වා ගැනීමට, පහත මෙවලම් භාවිතයෙන් සෙවීම ස්වයංක්‍රීය කරන්න.",
	"business/accounting::accounting_s3":
		"ඔබේ රඳවා ගත් Bitcoin වියදම් කිරීම හෝ විකිණීම",
	"business/accounting::accounting_s3_c1":
		"ඔබ ස්වයංක්‍රීයව සෑම ගෙවීමක්ම ඩොලර්වලට පරිවර්තනය කරන්නේ නම්, මෙම කොටස මඟ හරින්න — එය ඔබට අදාළ නොවේ.",
	"business/accounting::accounting_s3_c2":
		"ඔබ සමහර Bitcoin රඳවා ගෙන පසුව එය වියදම් කිරීමට හෝ විකිණීමට තීරණය කරන්නේ නම්, ඔබේ එම පිරිවැය පදනම් වගුවට විකුණුම් මිල එකතු කරන්න. ලැබීමේ වේලාවේදී Bitcoin වටිනාකම සහ වියදම් කිරීමේ හෝ විකිණීමේ වේලාවේ එහි වටිනාකම අතර වෙනස ප්‍රාග්ධන ලාභයක් හෝ පාඩුවකි.",
	"business/accounting::accounting_s3_c3": "ඉක්මන් උදාහරණ දෙකක්:",
	"business/accounting::accounting_s3_c6":
		"එපමණයි. මූලික ගණිතය වටිනාකමින් ඉහළට හෝ පහළට යන වෙනත් ඕනෑම වත්කමක ගිණුම්කරණයට සමානයි.",
	"business/accounting::accounting_s4":
		"Bitcoin-දැනුමැති වෘත්තිකයකු අවශ්‍යද?",
	"business/accounting::accounting_s4_c1":
		"ඔබට මෙම කාර්යය බාර දීමට අවශ්‍ය නම් — හෝ ඔබේ Bitcoin ගිණුම්කරණය හයිබ්‍රිඩ් පසුම්බියකින් විසඳිය හැකි ප්‍රමාණයට වඩා සංකීර්ණ නම් — අපි ව්‍යාපාර සඳහා Bitcoin ගිණුම්කරණයේ විශේෂඥ සමාගමක් වන Satoshi Pacioli Accounting Services ඉතා නිර්දේශ කරමු.",
	"business/accounting::bitcoin_business_accounting_guide":
		"ඔබේ ව්‍යාපාරය සඳහා Bitcoin ගිණුම්කරණය",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — ඩොලර්වලින් Bitcoin හි වර්තමාන සහ ඓතිහාසික මිල",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — ව්‍යාපාර සඳහා Bitcoin ගිණුම්කරණය",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel වෙත ක්‍රිප්ටෝ මිල ආයාත කිරීම",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Bitcoin පිළිගැනීම ආරම්භ කිරීමට පෙර ව්‍යාපාරිකයින් අසන වඩාත්ම සුලභ ප්‍රශ්නවලට කෙටි පිළිතුරු — ගාස්තු, පියවීම, පසුම්බි, ආපසු ගෙවීම්, පිරිවැය සහ තවත්.",
	"business/faq::faq_intro_c1":
		"පිළිතුරු පුළුල් කිරීමට පහත එක් එක් ප්‍රශ්නය ක්ලික් කරන්න. ඔබ Bitcoin පිළිගැනීම ආරම්භ කිරීමට සූදානම් වූ විට, පිටුවේ පහළ ව්‍යාපාරික සම්පත් සෑම පියවරක්ම හරහා ඔබව මග පෙන්වයි.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ගිණුම්කරණය",
	"business/index::biz_label_faq": "නිතර අසන ප්‍රශ්න",
	"business/index::biz_label_maps": "වෙළෙඳ සිතියම්",
	"business/index::biz_label_rewards": "ත්‍යාග",
	"business/index::biz_label_stickers": "ස්ටිකර",
	"business/index::biz_label_wallets": "පසුම්බි",
	"business/index::biz_meta_description":
		"අඩු ගාස්තු, ක්ෂණික පියවීම, ආපසු ගෙවීම් නැත සහ වැඩි පාරිභෝගිකයින් සඳහා ඔබේ ව්‍යාපාරයේ Bitcoin පිළිගන්න.",
	"business/index::business_hero_subtitle":
		"අඩු ගාස්තු සමඟ ගෙවීම් පිළිගන්න, ඔබේ මුදල් ක්ෂණිකව ලබා ගන්න සහ මිලියන ගණනක් නව පාරිභෝගිකයින් වෙත ළඟා වන්න — කොන්ත්‍රාත් හෝ සැඟවුණු පිරිවැයක් නැත.",
	"business/index::business_intro_c1":
		"Bitcoin ඔබේ ව්‍යාපාරයට වේගවත්, ලාභදායී සහ වඩාත් පුද්ගලිකව මුදල් ලබා ගැනීමට ක්‍රමයක් ලබා දෙයි. අතරමැදියන් නැත. ආපසු ගෙවීම් නැත. කොන්ත්‍රාත් නැත. ඔබේ පාරිභෝගිකයින්ගෙන් කෙලින්ම ඔබට තත්පර කිහිපයකින් පියවන මුදල් පමණි.",
	"business/index::business_intro_c2":
		"Bitcoin ව්‍යාපාරවලට හොඳ වන්නේ ඇයි දැයි කෙටි අනුවාදය පහත — සහ ඊට පහළින් අද පිළිගැනීම ආරම්භ කිරීමට ඔබට අවශ්‍ය සියලුම සම්පත්.",
	"business/index::business_resources_heading":
		"Bitcoin පිළිගැනීම සඳහා ඔබට අවශ්‍ය සියල්ල",
	"business/index::business_resources_intro":
		"මෙම සම්පත් හරහා ඔබේම වේගයෙන් වැඩ කරන්න. එක් එක් එක කුඩා, ප්‍රායෝගික මාර්ගෝපදේශයකි.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "ඔබේ ව්‍යාපාරය ගැන අපට කියන්න",
	"business/maps::biz_maps_form_intro":
		"ඔබව ලැයිස්තුගත කිරීමට විස්තර කිහිපයක් පමණි. ලිපින තොරතුරු ඔබේ ව්‍යාපාරය සිතියම්වලට ඉදිරිපත් කිරීමට අවශ්‍ය තාක් කල් පමණක් ගබඩා කර ඇත.",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map — Bitcoin පිළිගන්නා වෙළෙඳුන්ගේ ගෝලීය විවෘත නාමාවලිය — හි නොමිලේ ඔබේ ව්‍යාපාරය ලැයිස්තුගත කරන්න, එවිට ආසන්නයේ සිටින Bitcoin පරිශීලකයින්ට ඔබව සොයා ගැනීමට සහ ඔබේ ව්‍යාපාරයේ Bitcoin වියදම් කිරීමට හැකිය.",
	"business/maps::biz_maps_hero_title":
		"Bitcoin වෙළෙඳ සිතියම් වෙත ඔබේ ව්‍යාපාරය එකතු කරන්න",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin පරිශීලකයින් සක්‍රීයව ඔවුන්ගේ මුදල් වියදම් කළ හැකි ස්ථාන සොයමින් සිටී. ඔබේ ව්‍යාපාරය සිතියම මත තැබීම ආසන්නයේ කෑමට, මිලදී ගැනීමට හෝ රැඳී සිටීමට ස්ථානයක් සොයන සෑම Bitcoin පරිශීලකයෙකුම ඉදිරියේ ඔබව තබයි — ඔබට කිසිදු පිරිවැයකින් තොරව.",
	"business/maps::biz_maps_intro_c2":
		"පහත කෙටි පෝරමය පුරවන්න, අපි ඔබේ වෙනුවෙන් BTC Map සහ අනෙකුත් Bitcoin වෙළෙඳ සිතියම්වලට ඔබේ ව්‍යාපාරය ඉදිරිපත් කරන්නෙමු.",
	"business/maps::biz_maps_meta_description":
		"BTC Map සහ අනෙකුත් Bitcoin වෙළෙඳ සිතියම්වල නොමිලේ ඔබේ ව්‍යාපාරය ලැයිස්තුගත කරන්න, එවිට ආසන්නයේ සිටින Bitcoin පරිශීලකයින්ට ඔබව සොයා ගත හැකිය.",
	"business/maps::biz_maps_placeholder_address": "වීදි ලිපිනය",
	"business/maps::biz_maps_placeholder_category":
		"වර්ගය (උදා: අවන්හල, කැෆේ, හෝටලය)",
	"business/maps::biz_maps_placeholder_city": "නගරය",
	"business/maps::biz_maps_placeholder_country": "රට",
	"business/maps::biz_maps_placeholder_name": "ව්‍යාපාරයේ නම",
	"business/maps::biz_maps_placeholder_region": "ප්‍රාන්තය / පළාත / කලාපය",
	"business/maps::biz_maps_placeholder_website": "වෙබ් අඩවිය (විකල්ප)",
	"business/maps::biz_maps_view_map_cta": "BTC Map බලන්න",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map බලන්න",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"ඔබේ ව්‍යාපාරය ඉදිරිපත් කිරීම සඳහා ස්තූතියි. අපි ඉක්මනින්ම Bitcoin වෙළෙඳ සිතියම්වලට ඔබව එකතු කරන්නෙමු.",
	"business/maps-success::biz_maps_success_hero_title":
		"ඉල්ලීම ලැබුණා 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"ඔබේ ව්‍යාපාරය සති 1-2 ක් ඇතුළත BTC Map සහ අනෙකුත් Bitcoin වෙළෙඳ නාමාවලිවල ලැයිස්තුගත වනු ඇත. සිතියම් නිවැරදිව තබා ගැනීමට සෑම ඉල්ලීමක්ම අතින් සමාලෝචනය කෙරේ.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"ඔබේ ලැයිස්තුව සජීවී වූ පසු, ආසන්නයේ සිටින Bitcoin පරිශීලකයින්ට ඔබේ ව්‍යාපාරය සොයා ගෙන Bitcoin වියදම් කිරීමට පැමිණිය හැකිය.",
	"business/maps-success::biz_maps_success_timeline_header": "ඊළඟට කුමක්ද",
	"business/maps-success::biz_maps_success_view_c1":
		"ඔබ බලා සිටින අතරතුර, BTC Map ගවේෂණය කර Bitcoin පිළිගන්නා ලොව පුරා වැඩෙන ව්‍යාපාර ජාලය බලන්න.",
	"business/maps-success::biz_maps_success_view_header": "ඔබ පෙනී සිටින්නේ කොතැනදැයි බලන්න",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"ඔබේ පාරිභෝගිකයින්ට ඔබ Bitcoin පිළිගන්නා බව දැනුම් දීමට ඉංග්‍රීසියෙන් ඔබේම \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර මුද්‍රණය කරන්න.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"ඉංග්‍රීසියෙන් \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ගොනු බාගත කරන්න",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"ඔබේම \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර මුද්‍රණය කිරීමට ඉංග්‍රීසියෙන් ස්ටිකර ගොනු බාගත කරන්න.",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"ඔබේ භාෂාවෙන් \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ගොනු ඉල්ලීම සඳහා ස්තූතියි.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"ඉල්ලීම ලැබුණා 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"අපි සති 3-4 ක් ඇතුළත ඔබේ ස්ටිකර ගොනු සාදා පළ කරන්නෙමු. ඒවා සූදානම් වූ පසු, ඔබට ස්ටිකර ගොනු පිටුවෙන් නොමිලේ බාගත කර මුද්‍රණය කළ හැකිය.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ස්ටිකර ගොනු කණ්ඩායම්වලින් නිකුත් කෙරේ, එබැවින් ඔබේ භාෂාව සක්‍රීය වීමට සති කිහිපයක් ගත විය හැකිය. ඉවසීමට ස්තූතියි!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"ඊළඟට කුමක්ද",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"තොග ඇණවුම",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"තවත් නොමිලේ පැකේජයක් ඉල්ලන්න",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"ඔබට සති 2-4 ක් ඇතුළත ඔබේ නොමිලේ \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ලැබෙනු ඇත, සරල සුදු කවරයක ස්ටිකර 3 ක් සමඟ.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"ඔබේ ස්ටිකර මගතොටේ 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"ස්ටිකර 3ක් ඔබේ ව්‍යාපාරයට ප්‍රමාණවත් නොවේ නම්, නිදහසේ තවත් නොමිලේ පැකේජයක් ඉල්ලන්න — හෝ අප භාවිතා කරන මුද්‍රණ ශාලාවෙන්ම තොගයෙන් ඇණවුම් කරන්න.",
	"business/sticker-success::biz_sticker_success_more_header":
		"තවත් ස්ටිකර අවශ්‍යද?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"ඔබේ ඉදිරිපස දොර හෝ ජනේලයේ, එවිට පාරිභෝගිකයින්ට ඇතුළු වීමට පෙර දැකිය හැකිය",
	"business/sticker-success::biz_sticker_success_tip_2":
		"චෙක්අවුට්, විකුණුම් ස්ථානය හෝ ගෙවීම් ප්‍රදේශය ආසන්නයේ",
	"business/sticker-success::biz_sticker_success_tip_3":
		"මෙනු, මිල ලැයිස්තු හෝ ටිප් භාජන මත",
	"business/sticker-success::biz_sticker_success_tip_4":
		"ඔබේ නොවන හෝ පළ කිරීමට අවසර නැති ස්ථානවල ස්ටික් නොකරන්න",
	"business/sticker-success::biz_sticker_success_tips_header":
		"ඔබේ ස්ටිකර තැබීමට හොඳ ස්ථාන",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"ඔබ Bitcoin පිළිගන්නා බව ඔබේ පාරිභෝගිකයින්ට දන්වන්න. ඔබේ ව්‍යාපාරයේ දැමීම සඳහා නොමිලේ \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර පැකේජයක් ඇණවුම් කරන්න.",
	"business/stickers::biz_stickers_hero_title":
		"නොමිලේ \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin පිළිගැනීම කාර්යයේ අඩක් පමණි — ඔබේ පාරිභෝගිකයින් ද ඔබ පිළිගන්නා බව දැන සිටිය යුතුය. මෙම කුඩා \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ඔබේ ඉදිරිපස දොර, චෙක්අවුට්, මෙනුව හෝ පාරිභෝගිකයින් ගෙවීමට පෙර බලන ඕනෑම තැනක ඇලවීමට නිර්මාණය කර ඇත.",
	"business/stickers::biz_stickers_intro_c2":
		"අපි එක්සත් ජනපදය හෝ කැනඩාව තුළ ඕනෑම තැනකට පැකේජයක් නොමිලේ තැපැල් කරන්නෙමු, නැතහොත් ඔබට ලොව ඕනෑම තැනකින් ඔබේම ඒවා මුද්‍රණය කළ හැකිය.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 කැනඩාව — නොමිලේ තැපැල්",
	"business/stickers::biz_stickers_option_print":
		"🌍 ලෝකය පුරා — මම ඒවා මමම මුද්‍රණය කරන්නෙමි",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 එක්සත් ජනපදය — නොමිලේ තැපැල්",
	"business/stickers::biz_stickers_placeholder_translation1":
		"\"අපි Bitcoin පිළිගනිමු\" යන්නෙහි පරිවර්තනය",
	"business/stickers::biz_stickers_placeholder_translation2":
		"\"Bitcoin ව්‍යාපාරයට හොඳ ඇයි දැයි ඉගෙන ගැනීමට ස්කෑන් කරන්න\" යන්නෙහි පරිවර්තනය",
	"business/stickers::biz_stickers_print_c1":
		"ඔබ ජීවත් වන්නේ කොතැනදැයි නොතකා, ඔබට ඔබේම \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර මුද්‍රණය කළ හැකිය. ස්ටිකර ගොනු සහ මුද්‍රණ උපදෙස් බාගත කිරීමට පහත ඔබේ භාෂාව ක්ලික් කරන්න.",
	"business/stickers::biz_stickers_print_header":
		"ඔබේම ස්ටිකර ගොනු මුද්‍රණය කරන්න",
	"business/stickers::biz_stickers_request_c1":
		"ඔබේ දේශීය භාෂාවෙන් \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ගොනු ඉල්ලීමට පහත පෝරමය පුරවන්න. ඒවා සූදානම් වූ විට අපි ඔබට දන්වන්නෙමු.",
	"business/stickers::biz_stickers_request_header":
		"ඔබේ භාෂාව නොපෙනේද?",
	"business/stickers::biz_stickers_step_description":
		"අපි එක්සත් ජනපදය සහ කැනඩාව තුළ පැකේජ නොමිලේ තැපැල් කරන්නෙමු. ඔබට ලොව ඕනෑම තැනකින් ඔබේම ඒවා මුද්‍රණය කළ හැකිය.",
	"business/stickers::biz_stickers_step_header":
		"ඔබට ඔබේ ස්ටිකර ලබා ගැනීමට අවශ්‍ය වන්නේ කෙසේද?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"සියලුම Bitcoin පසුම්බි අන්තර් ක්‍රියාකාරී වේ — ඔබේ ව්‍යාපාරයට ගැලපෙන එකක් තෝරන්න. නොමිලේ, ක්ෂණික පියවීම, ආපසු ගෙවීම් නැත.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin Lightning පසුම්බියක් පමණයි",
	"business/wallets::sources_ibex":
		"IBEX — Lightning ගෙවීම් යටිතල පහසුකම්",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin ගෙවීම් සකසනය",
	"business/wallets::sources_square":
		"Square — Bitcoin ගෙවීම් පිළිගන්න",
	"business/wallets::sources_zaprite":
		"Zaprite — ව්‍යාපාර සඳහා Bitcoin ඉන්වොයිස් කිරීම",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin පසුම්බි නොමිලේ. ඔබේ ව්‍යාපාරයට ගැලපෙන එකක් තෝරන්න — පෞද්ගලික, මාර්ගගත හෝ ඉන්වොයිස් පදනම් කරගත් — සහ මිනිත්තු කිහිපයකින් Bitcoin පිළිගැනීම ආරම්භ කරන්න.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "ඉන්වොයිස් පදනම් කරගත් ව්‍යාපාරික පසුම්බි",
	"business/wallets::wallets_section_invoice_intro":
		"ඔබ පාරිභෝගිකයින්ට ඉන්වොයිස් යවන්නේ නම් (උපදේශන, ෆ්‍රිලාන්ස්, B2B සේවා), ඉන්වොයිස් පදනම් කරගත් පසුම්බියක් භාවිතා කරන්න. ඔබේ පාරිභෝගිකයා ක්ලික් කිහිපයකින් Bitcoin ඉන්වොයිසය ගෙවයි.",
	"business/wallets::wallets_section_multiple":
		"සේවකයන් කිහිප දෙනෙකු සහිත ව්‍යාපාරික පසුම්බි",
	"business/wallets::wallets_section_multiple_intro":
		"ඔබට චෙක්අවුට්වල ගෙවීම් පිළිගන්නා කණ්ඩායමක් ඇත්නම්, බහු-සේවක පුරනය වීම සඳහා සහාය දක්වන පසුම්බියක් තෝරන්න — සෑම කාර්ය මණ්ඩල සාමාජිකයෙකුටම ඔවුන්ගේම PIN එකක් ලැබේ, සහ ඔබට කවුරුන් කුමන ගෙවීම් පිළිගත්තේ දැයි පැහැදිලි විගණන ලොගයක් පවත්වා ගත හැකිය.",
	"business/wallets::wallets_section_online": "මාර්ගගත ව්‍යාපාරික පසුම්බි",
	"business/wallets::wallets_section_online_intro":
		"වෙබ් අඩවියක විකුණනවාද? මෙම පසුම්බි ඔබේ මාර්ගගත ගබඩාවට සම්බන්ධ වන අතර ලොව ඕනෑම තැනක සිට ඕනෑම පාරිභෝගිකයෙකුගෙන් Bitcoin පිළිගනියි — ආපසු ගෙවීමක් නැත සහ වෙළෙඳ ගිණුමක් අවශ්‍ය නැත.",
	"business/wallets::wallets_section_sole":
		"තනි ව්‍යාපාරික පසුම්බි",
	"business/wallets::wallets_section_sole_intro":
		"ඔබ වෙළඳසැලක්, කැෆේවක්, ස්ටුඩියෝවක් හෝ සේවාවක් තනිවම පවත්වාගෙන යන්නේ නම්, මෙම පසුම්බිවලින් ඕනෑම එකක් ක්‍රියා කරයි. ඔබට ගෙවීම් Bitcoin ලෙස තබා ගැනීමට අවශ්‍යද හෝ සෑම ගෙවීමකම කොටසක් ස්වයංක්‍රීයව ඔබේ දේශීය මුදල් වර්ගයට පරිවර්තනය කිරීමට අවශ්‍යද යන්න මත පදනම්ව තෝරන්න.",
	"business/wallets::wallets_strike_note":
		"Strike Business ඔබට ගාස්තු රහිතව Bitcoin සහ Lightning ගෙවීම් පිළිගැනීමට සහ ක්ෂණිකව පියවීමට ඉඩ දෙයි. එය පෞද්ගලික, මාර්ගගත සහ ඉන්වොයිස් පදනම් කරගත් ගෙවීම් සඳහා සහාය දක්වයි, විකල්ප ස්වයංක්‍රීය පරිවර්තනයක් සහිතව ඔබේ දේශීය මුදල් වර්ගයට.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"අපි Bitcoin පිළිගනිමු",
	"business/why::why_biz_s1": "අඩු ගාස්තු, ව්‍යාපාරයට වැඩි",
	"business/why::why_biz_s1_c1":
		"Bitcoin ගෙවීම් සෑම විකිණීමකම 2-3% ක් අය කරන බැංකු සහ ක්‍රෙඩිට් කාඩ් සමාගම් මඟ හරියි. ව්‍යාපාරය ඔබ ගෙවන දෙයින් වැඩියෙන් තබා ගනී — එයින් සාමාන්‍යයෙන් ඔබට හොඳ මිල සහ සේවාවක් අදහස් වේ.",
	"business/why::why_biz_s2": "ක්ෂණික පියවීම, ආපසු ගෙවීම් නැත",
	"business/why::why_biz_s2_c1":
		"Bitcoin ගෙවීම් කෙලින්ම ඔබේ පසුම්බියෙන් ව්‍යාපාරයට තත්පර කිහිපයකින් පියවේ. බැංකු අරමුදල් මුදා හැරීම සඳහා දින ගණන් බලා සිටීමට අවශ්‍ය නැත, සහ මිල අධික ආපසු ගෙවීමේ ආරවුල් නැත — එවිට ව්‍යාපාර වංචාවට එරෙහිව සටන් කරනවා වෙනුවට පාරිභෝගිකයන්ට සේවය කිරීමට අවධානය යොමු කළ හැකිය.",
	"business/why::why_biz_s3": "පිළිගැනීමට නොමිලේ, සැමට විවෘතය",
	"business/why::why_biz_s3_c1":
		"Bitcoin පිළිගන්නා ව්‍යාපාර සඳහා කොන්ත්‍රාත්, මාසික ගාස්තු හෝ සැකසුම් පිරිවැය නැත. තවද ලොව පුරා මිලියන ගණනක් Bitcoin පරිශීලකයින් සක්‍රීයව පිළිගන්නා වෙළෙඳුන් සොයමින් සිටී — එය ව්‍යාපාරවලට නව පාරිභෝගිකයින්ට නොමිලේ නිරාවරණයක් ලබා දෙයි.",
	"business/why::why_business_cta_intro":
		"ව්‍යාපාරයක් කරගෙන යනවාද සහ Bitcoin පිළිගැනීම ආරම්භ කිරීමට අවශ්‍යද?",
	"business/why::why_business_cta_link": "එය ක්‍රියා කරන ආකාරය බලන්න →",
	"business/why::why_for_business": "Bitcoin මෙම ව්‍යාපාරයට විශිෂ්ට වන්නේ ඇයි",
	"business/why::why_for_business_intro":
		"Bitcoin පිළිගැනීම ව්‍යාපාරවලට සෑම විකිණීමකම වැඩිපුර තබා ගැනීමට, ආපසු ගෙවීම් නොමැතිව ක්ෂණිකව ගෙවීම් ලබා ගැනීමට සහ Bitcoin පරිශීලකයින්ගේ ගෝලීය ප්‍රේක්ෂකයන් වෙත ළඟා වීමට ඉඩ දෙයි — සියල්ල කොන්ත්‍රාත් සහ මාසික ගාස්තු නොමැතිව.",
	"business/why::why_good_for_you": "Bitcoin ඔබටත් විශිෂ්ට වන්නේ ඇයි",
	"business/why::why_good_for_you_intro":
		"Bitcoin චෙක්අවුට්හිදී පමණක් විශිෂ්ට නොවේ — එය ඔබේ ඉතුරුම්, පෞද්ගලිකත්වය සහ පෙර්සොලවාදී නිදහස ආරක්ෂා කරන හොඳ මුදල් ආකාරයකි. මෙන්න ඉක්මන් දළ විශ්ලේෂණයක්.",
	"business/why::why_hero_subtitle":
		"ඔබ දැන් \"අපි Bitcoin පිළිගනිමු\" ස්ටිකරයක් ස්කෑන් කළා. එය විශිෂ්ට ආරංචියක් වන්නේ ඇයි — මෙම ව්‍යාපාරයට සහ ඔබට.",
	"business/why::why_intro_c1":
		"ඔබ සිටින ව්‍යාපාරය Bitcoin පිළිගනියි — බැංකු හෝ අතරමැදියන් කොමිස් නොගෙන, ලොව ඕනෑම කෙනෙකුට භාවිතා කළ හැකි නවීන, විවෘත මූලාශ්‍ර ගෙවීම් ජාලයකි.",
	"business/why::why_intro_c2":
		"Bitcoin පිළිගැනීම මෙම ව්‍යාපාරයට හොඳ වන්නේ ඇයි දැයි කෙටි අනුවාදය පහත — සහ පාරිභෝගිකයෙකු ලෙස Bitcoin භාවිතා කිරීම ඔබට හොඳ වන්නේ ඇයි.",
	"business/why::why_learn_more_lowercase": "තවත් දැන ගන්න →",
	"business/why::why_next_business_label": "Bitcoin පිළිගන්න",
	"business/why::why_next_business_title": "ඔබේ ව්‍යාපාරයේ Bitcoin පිළිගන්න",
	"business/why::why_next_buy_label": "Bitcoin මිලදී ගන්න",
	"business/why::why_next_buy_title": "ඔබේ පළමු Bitcoin මිලදී ගන්න",
	"business/why::why_next_learn_label": "තවත් දැන ගන්න",
	"business/why::why_next_learn_title": "Bitcoin ගැන තවත් දැන ගන්න",
	"business/why::why_next_wallet_label": "පසුම්බියක් ගන්න",
	"business/why::why_next_wallet_title": "ඔබේම Bitcoin පසුම්බියක් ගන්න",
	"business/why::why_s1_c1":
		"උද්ධමනය සිදුවන්නේ ශූන්‍යයෙන් වැඩි මුදල් මුද්‍රණය හෝ සාදන විටය. එය ඔබේ සාක්කුවේ මුදල්වල වටිනාකම කාලයත් සමඟ අඩු කරයි — එයට හේතුව මිල ගණන් වසරින් වසර වැඩි වන්නේ ඇයි.",
	"business/why::why_s1_c2":
		"Bitcoin හි කාසි මිලියන 21 ක ස්ථාවර සැපයුමක් ඇත. කිසිදු රජයකට, බැංකුවකට හෝ සමාගමකට වැඩිපුර මුද්‍රණය කළ නොහැක. ඔබේ Bitcoin ඉතුරුම් කාලයත් සමඟ එහි වටිනාකම පවත්වා ගනී, අහිමි කරගැනීම වෙනුවට.",
	"business/why::why_s2_c1":
		"මෑත වසරවලදී, බැංකු දිවීම් හේතුවෙන් එක්සත් ජනපද බැංකු කිහිපයක් බිඳවැටී ඇත. බොහෝ පාරිභෝගිකයන් එකවර මුදල් ඉවත් කර ගැනීමට උත්සාහ කළ විට, බැංකුවලට හැමෝටම ලබා දීමට ප්‍රමාණවත් මුදල් නොතිබුණි.",
	"business/why::why_s2_c2":
		"ඔබේ මුදල් ආරක්ෂිතව තබා ගැනීම වෙනුවට, බැංකු එහි වැඩි කොටසක් ණයට දෙයි සහ ආයෝජනය කරයි. එම ආයෝජන නරක අතට හැරුණහොත් — හෝ තැන්පත්කරුවන් විශ්වාසය නැති කර ගත්තහොත් — බැංකුව බිඳවැටී ඔබේ තැන්පතු කැටි වීමට හෝ අහිමි වීමට හැකිය.",
	"business/why::why_s2_c3":
		"Bitcoin සමඟ, ඔබට ඔබේම මුදල් ඔබේම පසුම්බියේ සෘජුවම ගබඩා කළ හැකිය. බැංකු නැත. අතරමැදියන් නැත. බැංකු දිවීම් නැත.",
	"business/why::why_s3_c1":
		"ක්‍රෙඩිට් කාඩ්, PayPal හෝ සාම්ප්‍රදායික බැංකු ගිණුම් මෙන් නොව, Bitcoin භාවිතා කිරීමට කිසිවෙකුගේ අවසරය අවශ්‍ය නොවේ.",
	"business/why::why_s3_c2":
		"කිසිවෙකුට ඔබේ ගිණුම කැටි කළ නොහැක, ගෙවීමක් අවහිර කළ නොහැක හෝ ජාලයෙන් ඔබව කපා හැරිය නොහැක. එය ඉතිහාසයේ පළමු මූල්‍ය පද්ධතිය වන අතර ඔබට වාරණයේ හෝ රාජසන්තක කිරීමේ බියකින් තොරව නිදහසේ භාවිතා කළ හැකිය.",
	"business/why::why_s4_c1":
		"Bitcoin බොහෝ විට වැරදි ලෙස වටහා ගනී, නමුත් ලෝකයේ බොහෝ යහපත් දේවල් නිහඬව කරගෙන යයි.",
	"business/why::why_s4_c2":
		"එය මානව හිමිකම් ක්‍රියාකාරීන්ට ඔවුන්ගේ නිදහස් අරගලයේදී උදව් කර ඇත, කසළ අංගන සහ තෙල් පතල්වලින් ගෝලීය මීතේන් විමෝචනය අඩු කර ඇත, විදුලි පද්ධති ස්ථාවර කර ඇත සහ ජාතික උද්‍යාන වැනි මහජන භාණ්ඩ සඳහා අරමුදල් සපයා ඇත.",
	"business/why::why_whats_next_heading": "ඊළඟට කොතැනටද?",
	"business/why::why_whats_next_intro":
		"මෙය ඔබේ පළමු Bitcoin ස්ටිකර ස්කෑන් කිරීම නම්, මෙන්න ඉදිරියට යාමට වඩාත් උපකාරී ස්ථාන.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Bitcoin මිලදී ගන්නේ කෙසේද",
	"buy::buy_header_subtitle":
		"ඔබේ පළමු Bitcoin මිලදී ගැනීමට සරල, පියවරෙන් පියවර මාර්ගෝපදේශයකි.",
	"buy::buy_howto_name": "Bitcoin මිලදී ගන්නේ කෙසේද",
	"buy::buy_meta_description":
		"අපගේ පියවරෙන් පියවර මාර්ගෝපදේශය සමඟ ආරක්ෂිතව Bitcoin මිලදී ගන්නේ කෙසේදැයි ඉගෙන ගන්න. ඔබට හොඳම Bitcoin මිලදී ගැනීමේ විකල්ප සොයා ගැනීමට ඔබේ රට සහ ගෙවීම් ක්‍රමය තෝරන්න.",
	"buy::buy_step_1_eyebrow": "පියවර 1",
	"buy::buy_step_1_header": "ඔබේ රට තෝරන්න",
	"buy::buy_step_2_eyebrow": "පියවර 2",
	"buy::buy_step_2_header": "ගෙවීම් ක්‍රමයක් තෝරන්න",
	"buy::buy_step_3_eyebrow": "පියවර 3",
	"buy::buy_step_3_header": "ඔබේ මිලදී ගැනීමේ විකල්ප",
	"buy::buy_step_4_eyebrow": "පියවර 4",
	"buy::buy_step_4_header": "Bitcoin ආරක්ෂිතව ගබඩා කරන්න",
	"buy::buy_storage_cta_label": "ඊළඟ පියවර",
	"buy::sources_bisq":
		"Bisq — විමධ්‍යගත සම සම Bitcoin හුවමාරුව",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Bitcoin ATM ගෝලීය නාමාවලිය",
	"buy::sources_kraken": "Kraken — ස්ථාපිත Bitcoin හුවමාරුව",
	"buy::sources_relai":
		"Relai — ස්විස් Bitcoin පමණක් ස්වයං-ආරක්ෂණ යෙදුම",
	"buy::sources_river":
		"River — Bitcoin පමණක් මිලදී ගැනීම, පතල් කැණීම සහ ඉතුරු කිරීම",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network සහාය සමඟ Bitcoin මිලදී ගන්න",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin පමණක් ඩොලර්-පිරිවැය සාමාන්‍යකරණය",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "භාෂාවක් එක් කරන්න",
	"common::common_next_buy_bitcoin": "Bitcoin මිලදී ගන්න",
	"common::common_next_buy_bitcoin_desc":
		"Bitcoin ආරක්ෂිතව මිලදී ගන්නේ කෙසේදැයි ඉගෙන ගන්න",
	"common::common_next_calculate": "ඔබේ උද්ධමනය ගණනය කරන්න",
	"common::common_next_calculate_desc":
		"කාලයත් සමඟ උද්ධමනය ඔබේ වැටුපට බලපාන ආකාරය බලන්න",
	"common::common_next_get_wallet": "පසුම්බියක් ලබා ගන්න",
	"common::common_next_get_wallet_desc":
		"ඔබේ පළමු Bitcoin පසුම්බිය ලබා ගන්න — එය නොමිලේ",
	"common::common_next_keep_learning": "ඉගෙනීමට දිගටම කරගෙන යන්න",
	"common::common_next_keep_learning_desc":
		"Bitcoin ලෝකය වඩා හොඳ කරන ආකාරය බලන්න",
	"common::common_site_tagline": "සැමට Bitcoin අධ්‍යාපනය.",
	"common::common_source_bls_cpi":
		"එක්සත් ජනපද කම්කරු සංඛ්‍යාලේඛන කාර්යාංශය — පාරිභෝගික මිල දර්ශකය (CPI)",
	"common::common_source_btc_map":
		"BTC Map — Bitcoin පිළිගන්නා වෙළෙඳුන්ගේ ගෝලීය නාමාවලිය",
	"common::common_source_btcpayserver":
		"BTCPay Server — නොමිලේ, විවෘත මූලාශ්‍ර, ස්වයං-සත්කාරක Bitcoin ගෙවීම් සකසනය",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — මුදල් සැපයුම (වර්ගීකරණ දර්ශකය)",
	"common::common_source_oshi":
		"Oshi — වෙළෙඳුන් සඳහා Bitcoin ත්‍යාග වේදිකාව",
	"common::common_source_strike_business":
		"Strike — ව්‍යාපාර සඳහා Bitcoin සහ Lightning ගෙවීම්",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "Bitcoin දත්ත",
	"common::common_sources_group_cpi":
		"උද්ධමනය / පාරිභෝගික මිල දර්ශකය",
	"common::common_sources_group_debt": "රාජ්‍ය ණය",
	"common::common_sources_group_money": "මුදල් සැපයුම් දත්ත",
	"common::common_sources_group_stories": "සැබෑ ලෝක උදාහරණ",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_sticker_files_mission_5": "පැකේජයක් ඇණවුම් කරන්න",
	"common::common_sticker_files_mission_6": "ඉංග්‍රීසියෙන් නොමිලේ ස්ටිකර.",
	"common::common_sticker_files_next_flyers_label": "අත්පත්‍රිකා",
	"common::common_sticker_files_next_flyers_title": "Bitcoin අත්පත්‍රිකාවක් මුද්‍රණය කරන්න",
	"common::common_sticker_files_next_languages_label": "ස්ටිකර ගොනු",
	"common::common_sticker_files_next_languages_title":
		"වෙනත් භාෂාවලින් ස්ටිකර ගොනු බලන්න",
	"common::common_sticker_files_print_these":
		"එක් ක්ලික් කිරීමකින් මේවා මුද්‍රණය කරන්න",
	"common::common_sticker_name_bdhi_black":
		"\"Bitcoin හි උද්ධමනයක් නොමැත\" ස්ටිකරය (කළු)",
	"common::common_sticker_name_bdhi_orange":
		"\"Bitcoin හි උද්ධමනයක් නොමැත\" ස්ටිකරය (තැඹිලි)",
	"common::common_sticker_name_caution":
		"Bitcoin \"ප්‍රවේශම්! උණු වන අයිස් කැටය\" ස්ටිකරය",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin \"උද්ධමනයේ ප්‍රතිකර්මය\" ස්ටිකරය",
	"common::common_sticker_name_danger":
		"Bitcoin \"අනතුර! ඉදිරියේ උද්ධමනය\" ස්ටිකරය",
	"common::common_sticker_name_fix":
		"Bitcoin \"මුදල් නිවැරදි කරන්න, ලෝකය නිවැරදි කරන්න\" ස්ටිකරය",
	"common::common_sticker_name_got_inflation":
		"Bitcoin \"උද්ධමනය තිබේද?\" ස්ටිකරය",
	"common::common_sticker_name_study":
		"\"Bitcoin අධ්‍යයනය කරන්න\" ස්ටිකරය",
	"common::common_sticker_name_warning":
		"Bitcoin \"අනතුරු ඇඟවීම! උද්ධමනය ඔබේ ඉතුරුම් සොරකම් කරයි\" ස්ටිකරය",
	"common::common_sticker_name_what_if":
		"Bitcoin \"ඔබට උද්ධමනයක් නොතිබුණේ නම්?\" ස්ටිකරය",
	"common::common_sticker_tips_heading": "ස්ටිකර ඉඟි",
	"common::common_sticker_tips_intro":
		"ඔබේ ස්ටිකර මුද්‍රණය කිරීමෙන් පසු, මිනිසුන් දකින ස්ථානවල තබන්න! ස්ටිකර සඳහා හොඳ ස්ථාන:",
	"common::common_sticker_tips_list_1":
		"මිනිසුන් ඒවා දකින පොදු ස්ථානවල",
	"common::common_sticker_tips_list_2":
		"ඉක්මන් ඉවත් කිරීමේ අවදානම අඩු ස්ථානවල (ස්ටිකර ස්ථිර හානියක් සිදු නොකරයි)",
	"common::common_sticker_tips_list_3":
		"පහසුවෙන් ඇලවිය හැකි මතුපිට (ලෝහ, ප්ලාස්ටික්, වීදුරු)",
	"common::common_sticker_tips_list_4":
		"පුද්ගලික දේපල මත නොව, සංඥා, ATM හෝ ගෑස් පොම්ප ආවරණය නොකරන්න",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "අපි භාවිතා කරන්නේ",
	"common::common_stickers_printer_suffix":
		", නමුත් ඔබට ඕනෑම ස්ටිකර සමාගමක් භාවිතා කළ හැකිය.",
	"common::common_whats_next": "ඊළඟට කුමක්ද?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"ඔබේ උද්ධමන හිඩැස ගණනය කරන්න",
	"compound-inflation-calculator::cic_cta_label": "ඊළඟ පියවර",
	"compound-inflation-calculator::cic_hero_subtitle":
		"උද්ධමනය සමඟ පිය නැගීමට ඔබේ වැටුප කොපමණ වැඩි කළ යුතුද යන්න බලන්න.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"තවත් මාතෘකා ගවේෂණය කරන්න",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Bitcoin මුදල්, නිදහස, බලශක්තිය සහ තවත් දේවලට සම්බන්ධ වන ආකාරය බලන්න.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"උද්ධමනය ක්‍රියා කරන ආකාරය ඉගෙන ගන්න",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — සියලුම නාගරික පාරිභෝගිකයන් සඳහා පාරිභෝගික මිල දර්ශකය",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 මුදල් සැපයුම",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"නොමිලේ, මුද්‍රණය කළ හැකි Bitcoin අත්පත්‍රිකා. තවත් මිනිසුන්ට Bitcoin ගැන දැන ගැනීමට උදව් කිරීමට මේවා පොදු ස්ථානවල තබන්න.",
	"flyers::flyers_hero_title": "Bitcoin අත්පත්‍රිකා මුද්‍රණය සහ බෙදා හරින්න",
	"flyers::flyers_intro_header":
		"මෙම Bitcoin අත්පත්‍රිකා මුද්‍රණය සහ බෙදා හරින ආකාරය",
	"flyers::flyers_next_get_stickers": "වචනය ව්‍යාප්ත කරන්න",
	"flyers::flyers_next_get_stickers_desc":
		"නොමිලේ Bitcoin ස්ටිකර පැකේජයක් ඇණවුම් කරන්න",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"සම්බන්ධ වී Bitcoin ව්‍යාප්ත කිරීමට උදව් කරන්න",
	"get-involved::get_involved_card_business_label": "ව්‍යාපාරික කට්ටලය",
	"get-involved::get_involved_card_business_source":
		"මූලාශ්‍රය: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"නොමිලේ Bitcoin ව්‍යාපාරික කට්ටලයක් ඇණවුම් කරන්න",
	"get-involved::get_involved_card_flyers_label": "මුද්‍රිත අත්පත්‍රිකා",
	"get-involved::get_involved_card_flyers_source":
		"මූලාශ්‍රය: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"නොමිලේ Bitcoin අත්පත්‍රිකාවක් බාගත කර මුද්‍රණය කරන්න",
	"get-involved::get_involved_card_github_label": "විවෘත මූලාශ්‍ර",
	"get-involved::get_involved_card_github_source": "මූලාශ්‍රය: GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub හි bitcoin.rocks ට දායක වන්න",
	"get-involved::get_involved_card_stickers_label": "නොමිලේ ස්ටිකර",
	"get-involved::get_involved_card_stickers_source":
		"මූලාශ්‍රය: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"ඔබේ දොරකඩට ලබා දෙන නොමිලේ Bitcoin ස්ටිකර පැකේජයක් ඇණවුම් කරන්න",
	"get-involved::get_involved_description":
		"අපගේ නොමිලේ සම්පත් Bitcoin ව්‍යාප්ත කිරීම පහසු කරයි. ස්ටිකර, අත්පත්‍රිකා, ව්‍යාපාරික කට්ටල සහ ඕනෑම කෙනෙකුට දායක විය හැකි විවෘත මූලාශ්‍ර.",
	"get-involved::get_involved_flyers_content_1":
		"ඔබේ ප්‍රජාවට Bitcoin හඳුන්වා දීමට පහසුම ක්‍රමයක් වන්නේ අත්පත්‍රිකාවකි. නොමිලේ, මුද්‍රණය කළ හැකි Bitcoin අත්පත්‍රිකාව බාගත කරන්න, ඔබට අවශ්‍ය තරම් පිටපත් මුද්‍රණය කරන්න සහ ප්‍රජා පුවරුවල, කැෆේවල, රැස්වීම්වල හෝ මිනිසුන් රැස් වන ඕනෑම තැනක ඒවා බෙදා හරින්න.",
	"get-involved::get_involved_flyers_content_2":
		"සෑම අත්පත්‍රිකාවකම අවධානය ගන්නා සිරස්තලයක් සහ කුතුහල පාඨකයන්ව තවත් දැන ගැනීමට bitcoin.rocks වෙත යවන QR කේතයක් ඇත.",
	"get-involved::get_involved_flyers_content_3":
		"ස්ටිකර මෙන් නොව, අත්පත්‍රිකා ලොව ඕනෑම තැනක ඉල්ලුම මත මුද්‍රණය කළ හැකිය — ඔබට අවශ්‍ය වන්නේ මුද්‍රණ යන්ත්‍රයක් සහ මිනිත්තු කිහිපයක් පමණි.",
	"get-involved::get_involved_flyers_header": "අත්පත්‍රිකාවක් මුද්‍රණය කර බෙදා හරින්න",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks වෙතින් නොමිලේ මුද්‍රණය කළ හැකි Bitcoin අත්පත්‍රිකාවේ පෙරදසුන",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks යනු MIT යටතේ බලපත්‍රලාභී නොමිලේ, විවෘත මූලාශ්‍ර ව්‍යාපෘතියකි. අපගේ මෙහෙවර වන්නේ අධ්‍යාපනය හරහා Bitcoin පිළිගැනීම වේගවත් කිරීම — සහ අපට එය තනිවම කළ නොහැක.",
	"get-involved::get_involved_github_content_2":
		"ඔබ සංවර්ධකයෙක්, නිර්මාණකරුවෙක්, ලේඛකයෙක් හෝ පරිවර්තකයෙක් වුවද, උදව් කිරීමට ක්‍රමයක් ඇත. අපගේ අන්තර්ගතය වැඩි භාෂාවලට පරිවර්තනය කළ හැකි පරිවර්තකයන්ට අපි විශේෂයෙන් සාදරයෙන් පිළිගනිමු, එවිට ලොව පුරා වැඩි මිනිසුන්ට ඔවුන්ගේ මව් භාෂාවෙන් Bitcoin ගැන ඉගෙන ගත හැකිය.",
	"get-involved::get_involved_github_content_3":
		"ගබඩාව ෆෝක් කරන්න, අදිකරණයක් විවෘත කරන්න, ගැටළුවක් ඉදිරිපත් කරන්න, හෝ සහාය දැක්වීමට හුදෙක් ව්‍යාපෘතියට තරුවක් ලබා දෙන්න. සෑම දායකත්වයක්ම Bitcoin වැඩි මිනිසුන් වෙත ළඟා වීමට උදව් කරයි.",
	"get-involved::get_involved_github_header": "GitHub හි දායක වන්න",
	"get-involved::get_involved_header":
		"සම්බන්ධ වී Bitcoin ව්‍යාප්ත කරන්න.",
	"get-involved::get_involved_intro_5":
		"ඔබට එය වෙනස් කිරීමට උදව් කළ හැකිය. ඔබ වටා සිටින මිනිසුන්ට Bitcoin ගෙන එන බලාපොරොත්තුව ව්‍යාප්ත කිරීම පහසු කිරීමට අපි නොමිලේ සම්පත් කිහිපයක් සාදා ඇත.",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks වෙතින් Bitcoin පෙළ සහිත නොමිලේ ස්ටිකර පැකේජයක්",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "ඉතුරු කිරීම",
	"index::home_card_label_art_1": "අපි සංසන්දනය කරමු",
	"index::home_card_label_art_2": "වචනය ව්‍යාප්ත කරන්න",
	"index::home_card_label_art_3": "වීදි කලාව",
	"index::home_card_label_bank_runs": "සම්පූර්ණ-සංචිත පද්ධතිය",
	"index::home_card_label_bonds": "අපි සංසන්දනය කරමු",
	"index::home_card_label_business_1": "වෙනස කුමක්ද?",
	"index::home_card_label_business_2": "Bitcoin ගෙවීම් පිළිගන්න",
	"index::home_card_label_cash": "අපි සංසන්දනය කරමු",
	"index::home_card_label_cbdc": "විවෘතද සංවෘතද?",
	"index::home_card_label_coding_1": "අන්තර්ක්‍රියාකාරී නිබන්ධන",
	"index::home_card_label_coding_2": "දෘඪාංග ගොඩනඟන්න",
	"index::home_card_label_coding_3": "කේත ප්‍රහේලිකා",
	"index::home_card_label_crowdfunding_1": "EndSARS විරෝධතා",
	"index::home_card_label_crowdfunding_2": "නැවැත්විය නොහැකි මුදල්",
	"index::home_card_label_crowdfunding_3": "ඔබේ ව්‍යාපෘතියට අරමුදල් සපයන්න",
	"index::home_card_label_crypto": "වෙනස කුමක්ද?",
	"index::home_card_label_energy_1": "බල පද්ධතිය ස්ථාවර කිරීම",
	"index::home_card_label_energy_4": "ඉල්ලුම් ප්‍රතිචාරය",
	"index::home_card_label_energy_5": "ග්‍රාමීය විදුලිකරණය",
	"index::home_card_label_energy_6": "පුනර්ජනනීය බලශක්ති දිරිගැන්වීම්",
	"index::home_card_label_environment_1": "මීතේන් අඩු කිරීම",
	"index::home_card_label_environment_2": "ආරක්ෂිත ජාතික උද්‍යාන",
	"index::home_card_label_environment_3": "හරිතම කර්මාන්තය",
	"index::home_card_label_environment_4": "ෆ්ලෙයාරින්ග් වායුව අඩු කිරීම",
	"index::home_card_label_equality_1": "බලාපොරොත්තුව සහ අවස්ථා",
	"index::home_card_label_equality_2": "ආරම්භක ලක්ෂ්‍යය",
	"index::home_card_label_food_1": "ආහාර මිල",
	"index::home_card_label_food_2": "ගොවිපල සහ පස",
	"index::home_card_label_freedom_1": "අධිකාරවාදී පාලන",
	"index::home_card_label_freedom_2": "අද්විතීය මෙවලම",
	"index::home_card_label_get_started_1": "ආරම්භ කිරීමට මූලධර්ම",
	"index::home_card_label_get_started_2": "ඔබේ පළමු පසුම්බිය",
	"index::home_card_label_get_started_3": "Bitcoin මිලදී ගන්න",
	"index::home_card_label_gold": "කුමක් වඩා හොඳද?",
	"index::home_card_label_housing_1": "දරිය හැකි නිවාස",
	"index::home_card_label_human_rights_1": "මානව හිමිකම් බලගැන්වීම",
	"index::home_card_label_human_rights_2": "ජන පිළිගැනීම",
	"index::home_card_label_human_rights_3": "ගෝලීය බලපෑම",
	"index::home_card_label_inflation": "Bitcoin හොඳ මුදල්",
	"index::home_card_label_networks_1": "සජීවී ජාල දළ විශ්ලේෂණය",
	"index::home_card_label_networks_2": "අපි සංසන්දනය කරමු",
	"index::home_card_label_payments_1": "වෙනස කුමක්ද?",
	"index::home_card_label_payments_2": "වේගවත් සහ ලාභදායී ගෙවීම්",
	"index::home_card_label_payments_3": "මුදල් ආපසු යැවීම්",
	"index::home_card_label_payments_4": "ගෙවීම් පිළිගන්න",
	"index::home_card_label_politics_1": "දේශපාලන විරුද්ධාභාසය",
	"index::home_card_label_politics_2": "ක්‍රියාමාර්ග ගන්න",
	"index::home_card_label_property_rights_1": "අපි සංසන්දනය කරමු",
	"index::home_card_label_property_rights_2": "සැබෑ හිමිකාරිත්වය",
	"index::home_card_label_salary": "ඔබේ වැටුප ආරක්ෂා කරන්න",
	"index::home_card_label_self_custody_1": "Bitcoin පසුම්බි මාර්ගෝපදේශය",
	"index::home_card_label_self_custody_2": "වැදගත්ම පියවර",
	"index::home_card_label_self_custody_3": "ස්වෛරී මුදල්",
	"index::home_card_label_war_1": "අවසන් නොවන යුද්ධ අවසන් කිරීම",
	"index::home_card_label_war_2": "ප්‍රවීණයින්ට සහාය",
	"index::home_card_label_war_3": "යුද්ධයේදී පලා යාම",
	"index::home_h1":
		"Bitcoin යනු හොඳ ලෝකයක් ගොඩනඟන හොඳ මුදල්ය.",
	"index::home_nav_about": "අප ගැන",
	"index::home_nav_get_involved": "සම්බන්ධ වන්න",
	"index::home_nav_learn": "ඉගෙන ගන්න",
	"index::home_source_prefix": "මූලාශ්‍රය:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "ජනප්‍රිය Lightning පසුම්බි",
	"lightning::lightning_hardware_cta_label": "දෘඪාංග පසුම්බිය",
	"lightning::lightning_header_subtitle":
		"Lightning ඔබට තත්පර කිහිපයකින් ශත ගාස්තුවලින් Bitcoin යැවීමට ඉඩ දෙයි — ඔබ වියදම් කිරීමට අදහස් කරන Bitcoin ප්‍රමාණයට ගැලපෙන වෙළඳාම් සහිත පසුම්බියක් තෝරන්න.",
	"lightning::lightning_s1_c4": "අපගේ මාර්ගෝපදේශය බලන්න",
	"lightning::lightning_s1_c4_end": " වැඩි විස්තර සඳහා.",
	"lightning::lightning_s1_c4_link": "Bitcoin දෘඪාංග පසුම්බි මාර්ගෝපදේශය",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning පසුම්බිය",
	"lightning::sources_breez_lightning":
		"Breez — ස්වයං-ආරක්ෂිත Lightning පසුම්බිය",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network ලේඛන",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — භාරකාර Lightning පසුම්බිය",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "බොහෝ විශේෂාංග සහ අභිරුචිකරණය",
	"nostr/index::nostr_amethyst_f2": "වෙනම Bitcoin පසුම්බියක් අවශ්‍ය වේ",
	"nostr/index::nostr_amethyst_f3": "100% නොමිලේ",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"හුරුපුරුදු, Twitter වැනි අතුරුමුහුණතක්",
	"nostr/index::nostr_damus_f2": "වෙනම Bitcoin පසුම්බියක් අවශ්‍ය වේ",
	"nostr/index::nostr_damus_f3": "100% නොමිලේ",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"නොමිලේ Nostr සේවාදායකයක් බාගත කරන්න",
	"nostr/index::nostr_download_intro":
		"Nostr සේවාදායක යනු Nostr ජාලයේ අන්තර්ගතය කියවීමට සහ පළ කිරීමට ඉඩ දෙන නොමිලේ යෙදුම් වේ. සියල්ල අන්තර් ක්‍රියාකාරී වේ — ඔබට ඕනෑම අවස්ථාවක සේවාදායක මාරු කර ඔබේ අනුගාමිකයන් සහ අන්තර්ගතය තබා ගත හැකිය.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr යනු මාර්ගගත සන්නිවේදනය සඳහා නව විමධ්‍යගත ප්‍රොටොකෝලයකි — කිසිදු සමාගමක් විසින් ක්‍රියාත්මක නොකරන, Bitcoin ගෙවීම් (zaps) සමඟ ගොඩනඟා ඇති අතර ඔබේ අනුගාමිකයන් අහිමි නොකර යෙදුම් අතර මාරු විය හැකිය.",
	"nostr/index::nostr_hero_title": "Nostr යනු කුමක්ද?",
	"nostr/index::nostr_intro_c1":
		"Nostr ඊමේල් වලට සමානයි: ප්‍රොටොකෝලය කිසිවෙකුගේ අයිතියට අයත් නොවේ, ඕනෑම කෙනෙකුට එය මත යෙදුම් ගොඩනැගිය හැකිය, සහ ඔබට ඔබේ ප්‍රියතම යෙදුම තෝරාගත හැකිය. Twitter හෝ Facebook මෙන් නොව, කිසිදු කේන්ද්‍රීය සමාගමක් ඔබව වාරණය කිරීමට, අවලංගු කිරීමට හෝ සීමා කිරීමට නොහැක.",
	"nostr/index::nostr_intro_c2":
		"Nostr වැදගත් වන්නේ ඇයි දැයි කෙටි අනුවාදය පහත — ඉන්පසු අද ආරම්භ කිරීමට ඔබට අවශ්‍ය සියලුම නොමිලේ Nostr සේවාදායක.",
	"nostr/index::nostr_iris_f1":
		"සුපර් සරල — සැකසීමක් අවශ්‍ය නැත",
	"nostr/index::nostr_iris_f2":
		"පරීක්ෂණ ගිණුමක් සමඟ Nostr උත්සාහ කිරීමට පහසු ක්‍රමයකි",
	"nostr/index::nostr_iris_f3": "100% නොමිලේ",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "ගැඹුරට යන්න",
	"nostr/index::nostr_learn_more_title":
		"nostr.how හි Nostr ගැන තවත් දැන ගන්න",
	"nostr/index::nostr_page_description":
		"Nostr යනු මාර්ගගත සන්නිවේදනය සඳහා නව විමධ්‍යගත ප්‍රොටොකෝලයකි — කිසිදු සමාගමක් විසින් ක්‍රියාත්මක නොකරන, Bitcoin ගෙවීම් (zaps) සමඟ ගොඩනඟා ඇති අතර ඔබේ අනුගාමිකයන් අහිමි නොකර සේවාදායකයන් අතර මාරු විය හැකිය.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android සහ වෙබ්",
	"nostr/index::nostr_platform_web": "වෙබ් බ්‍රවුසරය",
	"nostr/index::nostr_primal_f1": "ප්‍රිමියම් නිර්දේශිත සේවාදායකය",
	"nostr/index::nostr_primal_f2":
		"ගොඩනඟා ඇති Bitcoin zap පසුම්බිය",
	"nostr/index::nostr_primal_f3": "100% නොමිලේ",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "ප්‍රොටොකෝලයක්, වේදිකාවක් නොවේ",
	"nostr/index::nostr_s1_c1":
		"Nostr යනු වාරණය, අවලංගු කිරීම හෝ සීමා කිරීමේ බියකින් තොරව ඔබට මාර්ගගතව සන්නිවේදනය කිරීමට ඉඩ දෙන නව ප්‍රොටොකෝලයකි.",
	"nostr/index::nostr_s1_c2":
		"Twitter සහ Facebook වැනි වේදිකා සමාගමක් විසින් ක්‍රියාත්මක කරයි, නමුත් කිසිවෙකු Nostr ප්‍රොටොකෝලය ක්‍රියාත්මක නොකරයි.",
	"nostr/index::nostr_s2": "ගමනේ නිදහස",
	"nostr/index::nostr_s2_c1":
		"Nostr ඊමේල් වලට සමානයි. කිසිවෙකු ඊමේල් ප්‍රොටොකෝලය ක්‍රියාත්මක නොකරන අතර, ඕනෑම කෙනෙකුට එය මත සේවාදායකයක් ගොඩනැගිය හැකිය (Gmail, Hotmail සහ තවත් බොහෝ දේ වැනි).",
	"nostr/index::nostr_s2_c2":
		"කිසිවෙකු Nostr ප්‍රොටොකෝලය ක්‍රියාත්මක නොකරන අතර ඕනෑම කෙනෙකුට එය මත සේවාදායකයක් ගොඩනැගිය හැකිය (Damus, Amethyst සහ තවත් බොහෝ දේ වැනි).",
	"nostr/index::nostr_s2_c3":
		"නිශ්චිත සේවාදායකයක් ක්‍රියා කරන ආකාරය ඔබට අකමැති නම්, ඔබට ඔබේ අනුගාමිකයන් හෝ අන්තර්ගතය අහිමි නොකර ඔබේ Nostr ගිණුම ඉතා සරලව වෙනත් සේවාදායකයකට ගෙන යා හැකිය.",
	"nostr/index::nostr_s3": "Bitcoin ගොඩනඟා ඇත",
	"nostr/index::nostr_s3_c1":
		"Bitcoin ස්වදේශීයව Nostr ප්‍රොටොකෝලයට ගොඩනඟා ඇත. ඔබ රසවත් යැයි දකින අන්තර්ගතයක් දකින්නේ නම්, ස්තූතියක් ලෙස ඔබට පහසුවෙන් කෙනෙකුට Bitcoin zap එකක් යැවිය හැකිය!",
	"nostr/index::nostr_s3_c2":
		"Twitter සහ Facebook වැනි කේන්ද්‍රගත වේදිකාවල, කේන්ද්‍රීය සමාගම ඔබේ අන්තර්ගතයෙන් ප්‍රයෝජන ලබයි. නමුත් Nostr වැනි විවෘත ප්‍රොටොකෝලයක, ඔබ ඔබේ අන්තර්ගතයෙන් ප්‍රයෝජන ලබයි.",
	"nostr/index::sources_damus": "Damus — iPhone සඳහා Nostr සේවාදායකය",
	"nostr/index::sources_iris":
		"Iris — බ්‍රවුසරයේ ක්‍රියාත්මක වන Nostr සේවාදායකය",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr යනු කුමක්ද?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — විවෘත මූලාශ්‍ර පිරිවිතර",
	"nostr/index::sources_primal":
		"Primal — ගොඩනඟා ඇති Bitcoin zap පසුම්බිය සහිත Nostr සේවාදායකය",
	"nostr/index::what_is_nostr": "Nostr යනු කුමක්ද?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"මෙම Bitcoin ස්ටිකර ගොනු භාවිතයෙන් ඔබේම Bitcoin ස්ටිකර මුද්‍රණය කරන්න.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"ඉල්ලීම ලැබුණා 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "තොග ඇණවුම",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr හි බෙදා ගන්න",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr යනු කුමක්ද?",
	"sticker-success::sticker_success_bulk_header":
		"තවත් ස්ටිකර අවශ්‍යද?",
	"sticker-success::sticker_success_hero_title":
		"ඔබේ ස්ටිකර මගතොටේ 🎉",
	"sticker-success::sticker_success_share_header":
		"ඔබේ ස්ටිකර කොතැනදැයි බෙදා ගන්න",
	"sticker-success::sticker_success_tips_header":
		"ස්ටිකර සඳහා හොඳ ස්ථාන",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "මෙම පැකේජය තෝරන්න",
	"stickers::stickers_bulk_c1":
		"අතළොස්සක ස්ටිකරවලට වඩා වැඩි ප්‍රමාණයක් අවශ්‍යද?",
	"stickers::stickers_bulk_c2":
		"අප භාවිතා කරන මුද්‍රණ ශාලාවෙන්ම තොගයෙන් ඇණවුම් කරන්න",
	"stickers::stickers_bulk_c3":
		"— ඔබ වැඩිපුර ඇණවුම් කරන තරමට, එක් ස්ටිකරයකට මිල අඩු වේ.",
	"stickers::stickers_bulk_cta": "තොග ස්ටිකර සඳහා සාප්පු යන්න",
	"stickers::stickers_bulk_header": "තොගයෙන් ස්ටිකර ඇණවුම් කරන්න",
	"stickers::stickers_flyers_link_before":
		"කාලය අතර, මුද්‍රණය කර බෙදා හරින්න",
	"stickers::stickers_header":
		"මෙම නොමිලේ \"අපි Bitcoin පිළිගනිමු\" ස්ටිකර ලබා ගන්න.",
	"stickers::stickers_hero_subtitle":
		"නොමිලේ Bitcoin ස්ටිකර පැකේජයක් ඇණවුම් කර තවත් මිනිසුන්ට Bitcoin ගැන දැන ගැනීමට උදව් කිරීමට පොදු ස්ථානවල තබන්න.",
	"stickers::stickers_hero_title": "නොමිලේ Bitcoin ස්ටිකර",
	"stickers::stickers_instructions_1":
		"ඔබේ තැපැල් ලිපිනය ඇතුළත් කරන්න, අපි ඔබට නොමිලේ Bitcoin ස්ටිකර පැකේජයක් එවන්නෙමු. ඔබේ ස්ටිකර සරල සුදු කවරයක් තුළ එවනු ලැබේ.",
	"stickers::stickers_intro_c1":
		"අපගේ මෙහෙවර වන්නේ පොදු ස්ථානවල Bitcoin ස්ටිකර සමඟ වැඩි මිනිසුන් \"තැඹිලි ගුලියක්\" කිරීමට උදව් කිරීමයි. අපගේ සියලුම ස්ටිකර",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "උද්ධමනය",
	"stickers::stickers_intro_c4":
		"පහත ස්ටිකර පැකේජයක් තෝරන්න සහ ඔබට එය ලබා ගැනීමට අවශ්‍ය ආකාරය තෝරන්න — අපි එක්සත් ජනපදය හෝ කැනඩාව තුළ ඕනෑම කෙනෙකුට පැකේජයක් නොමිලේ එවන්නෙමු, නැතහොත් ඔබට ලොව ඕනෑම තැනකින් ඔබේම ඒවා මුද්‍රණය කළ හැකිය.",
	"stickers::stickers_mail_header": "අපි ඔබට නොමිලේ ස්ටිකර එවන්නෙමු",
	"stickers::stickers_next_print_flyers": "ව්‍යාප්ත කිරීමට දිගටම කරගෙන යන්න",
	"stickers::stickers_next_print_flyers_desc":
		"පොදු ස්ථානවල බෙදා හැරීම සඳහා නොමිලේ Bitcoin අත්පත්‍රිකා මුද්‍රණය කරන්න",
	"stickers::stickers_option_bulk": "📦 ලෝකය පුරා — තොග ඇණවුම",
	"stickers::stickers_option_canada": "🇨🇦 කැනඩාව — නොමිලේ තැපැල්",
	"stickers::stickers_option_print": "🌍 ලෝකය පුරා — මම ඒවා මමම මුද්‍රණය කරන්නෙමි",
	"stickers::stickers_option_usa":
		"🇺🇸 එක්සත් ජනපදය — නොමිලේ තැපැල්",
	"stickers::stickers_print_c1":
		"ඔබ ජීවත් වන්නේ කොතැනදැයි නොතකා, ඔබට ඔබේම ස්ටිකර මුද්‍රණය කර සහභාගී විය හැකිය. ස්ටිකර ගොනු සහ මුද්‍රණ උපදෙස් බාගත කිරීමට පහත ඔබේ භාෂාව ක්ලික් කරන්න.",
	"stickers::stickers_print_c2":
		"සෑම ස්ටිකරයක්ම සෑම භාෂාවකින්ම ලබා ගත නොහැක.",
	"stickers::stickers_print_header":
		"ඔබේම ස්ටිකර ගොනු මුද්‍රණය කරන්න",
	"stickers::stickers_request_c1":
		"ඔබේ දේශීය භාෂාවෙන් ස්ටිකර ගොනු ඉල්ලීමට පහත පෝරමය පුරවන්න. ඒවා සූදානම් වූ විට අපි ඔබට දන්වන්නෙමු.",
	"stickers::stickers_request_header": "ඔබේ භාෂාව නොපෙනේද?",
	"stickers::stickers_share_c2":
		"Nostr හි අප අනුගමනය කරන්න සහ",
	"stickers::stickers_share_c3":
		"ඕනෑම Nostr සේවාදායකයක සොයන්න.",
	"stickers::stickers_signs_pack_description":
		"Bitcoin පණිවිඩ සහිත අනතුරු ඇඟවීම්, අන්තරාය සහ ප්‍රවේශම් සංඥා — අවධානය ආකර්ෂණය කර මිනිසුන් නවත්වා කියවීමට නිර්මාණය කර ඇත.",
	"stickers::stickers_step_1_description":
		"සෑම පැකේජයකම Bitcoin ගැන මිනිසුන්ට අධ්‍යාපනය ලබා දෙන QR කේත සහිත වෙනස් Bitcoin ස්ටිකර කට්ටලයක් ඇත.",
	"stickers::stickers_step_1_eyebrow": "පියවර 1",
	"stickers::stickers_step_1_header":
		"ඔබේ ස්ටිකර පැකේජය තෝරන්න",
	"stickers::stickers_step_2_description":
		"අපි එක්සත් ජනපදය සහ කැනඩාව තුළ පැකේජ නොමිලේ තැපැල් කරන්නෙමු. ඔබට ලොව ඕනෑම තැනකින් ඔබේම ඒවා මුද්‍රණය කිරීමට හෝ තොගයෙන් ඇණවුම් කිරීමට හැකිය.",
	"stickers::stickers_step_2_eyebrow": "පියවර 2",
	"stickers::stickers_step_2_header":
		"ඔබට ඔබේ ස්ටිකර ලබා ගැනීමට අවශ්‍ය වන්නේ කෙසේද?",
	"stickers::stickers_text_pack_description":
		"පොදු ස්ථානවල කුතුහලය ජනනය කිරීමට නිර්මාණය කරන ලද Bitcoin මුර පදවල සහ වාක්‍ය ඛණ්ඩවල මිශ්‍රණයකි.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — ඔබේ පසුම්බිය තෝරන්න",
	"wallets::sources_blockstream_green":
		"Blockstream Green — ස්වයං-ආරක්ෂිත Bitcoin පසුම්බිය",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin දෘඪාංග පසුම්බිය",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 දෘඪාංග පසුම්බිය",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q දෘඪාංග පසුම්බිය",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin ලෝහ බීජ සමාලෝචන",
	"wallets::sources_passport":
		"Foundation Devices — Passport දෘඪාංග පසුම්බිය",
	"wallets::sources_seedsigner":
		"SeedSigner — විවෘත මූලාශ්‍ර, DIY Bitcoin අත්සන් උපකරණය",
	"wallets::wallets_grid_heading": "ජනප්‍රිය Bitcoin පසුම්බි",
	"wallets::wallets_header_subtitle":
		"පසුම්බියක් තෝරා ගැනීම, ඔබේ යතුරු ආරක්ෂා කිරීම සහ ඔබේ Bitcoin හි සම්පූර්ණ පාලනය ලබා ගැනීම සඳහා පියවරෙන් පියවර මාර්ගෝපදේශය.",
	"wallets::wallets_lightning_cta_label": "Lightning ජාලය",
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
		`translate-rest-part2 (si): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing.slice(0, 30)) console.log("  -", k);
		if (missing.length > 30)
			console.log(`  ...and ${missing.length - 30} more`);
		process.exitCode = 1;
	}
}

main();
