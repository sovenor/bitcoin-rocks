#!/usr/bin/env node
/**
 * Sinhala manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "මුල් පිටුවට ආපසු යන්න",
	"404::404_message": "Bitcoin විශිෂ්ටයි, නමුත් මෙම කැඩුණු පිටුව එසේ නොවේ.",
	"404::404_not_found_short": "හමු නොවීය",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"අපි දේශීය ව්‍යාපාරවලට Bitcoin පිළිගැනීම පහසු කරන නොමිලේ ව්‍යාපාරික කට්ටල සපයන්නෙමු. සෑම කට්ටලයකම Bitcoin පිළිගැනීම ඔවුන්ගේ ව්‍යාපාරයට ප්‍රයෝජනවත් වන්නේ ඇයි දැයි පැහැදිලි කරන මුද්‍රිත ද්‍රව්‍ය ඇතුළත් වේ.",
	"about::about_card_business_label": "ව්‍යාපාරික කට්ටලය",
	"about::about_card_business_source": "මූලාශ්‍රය: bitcoin.rocks →",
	"about::about_card_business_title":
		"දේශීය ව්‍යාපාරවලට Bitcoin ගෙවීම් පිළිගැනීමට උදව් කරන්න",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "මූලාශ්‍රය: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "දායක වන්න",
	"about::about_card_contribute_source": "මූලාශ්‍රය: GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks ව්‍යාපෘතියට දායක වන ආකාරය ඉගෙන ගන්න",
	"about::about_card_email_label": "විද්‍යුත් තැපෑල",
	"about::about_card_email_source": "මූලාශ්‍රය: ඊමේල් →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "මුද්‍රිත අත්පත්‍රිකා",
	"about::about_card_flyers_source": "මූලාශ්‍රය: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"ඔබේ ප්‍රජාව සඳහා Bitcoin අත්පත්‍රිකා බාගත කර මුද්‍රණය කරන්න",
	"about::about_card_github_label": "ගබඩාව",
	"about::about_card_github_source": "මූලාශ්‍රය: GitHub →",
	"about::about_card_github_title": "GitHub හි bitcoin.rocks බලන්න",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "මූලාශ්‍රය: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "නොමිලේ ස්ටිකර",
	"about::about_card_stickers_source": "මූලාශ්‍රය: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"ඔබේ දොරකඩට ලබා දෙන නොමිලේ Bitcoin ස්ටිකර ලබා ගන්න",
	"about::about_editorial_2":
		"අපි Federal Reserve (FRED), එක්සත් ජනපද කම්කරු සංඛ්‍යාලේඛන කාර්යාංශය, FDIC, එක්සත් ජාතීන්, ලෝක ස්වර්ණ සභාව, Forbes, MIT Technology Review, Lyn Alden සහ James Lavish වැනි විශ්වාසදායක මූලාශ්‍ර උපුටා දක්වමු. සත්‍ය පැහැදිලිව ඉදිරිපත් කළ විට, Bitcoin ම කථා කරන බව අපි විශ්වාස කරමු.",
	"about::about_flyers_blurb":
		"අපි මුද්‍රණය කළ හැකි අත්පත්‍රිකා නිර්මාණය කරමු, ඔබට රැස්වීම්වලදී බෙදා හැරීමට, ප්‍රජා පුවරුවල අලවන්න හෝ ලිපි පෙට්ටිවලට දැමීමට පුළුවන් — ජනතාවට විමසිලිමත් කිරීම සහ bitcoin.rocks හිදී වැඩිදුර ඉගෙන ගැනීමට මග පෙන්වීමේ සරල ක්‍රමයකි.",
	"about::about_header": "bitcoin.rocks ගැන",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks",
	"about::about_mission_1b":
		"සරල මෙහෙවරක් සමඟ 2022 දී ආරම්භ කරන ලදී: අධ්‍යාපනය හරහා Bitcoin පිළිගැනීම වේගවත් කිරීම.",
	"about::about_open_source_2":
		"bitcoin.rocks යනු MIT යටතේ බලපත්‍රලාභී නොමිලේ, විවෘත මූලාශ්‍ර ව්‍යාපෘතියකි. ඕනෑම කෙනෙකුට bitcoin.rocks ට දායක විය හැකිය. ලෝකය පුරා මිනිසුන්ට අපගේ අන්තර්ගතය ලබා දීමට උදව් කරන පරිවර්තකයන්ට අපි විශේෂයෙන් සාදරයෙන් පිළිගනිමු.",
	"about::about_page_description":
		"bitcoin.rocks යනු 2022 දී ආරම්භ කරන ලද නොමිලේ සහ විවෘත මූලාශ්‍ර Bitcoin අධ්‍යාපන වෙබ් අඩවියකි. අපගේ මෙහෙවර වන්නේ අධ්‍යාපනය හරහා Bitcoin පිළිගැනීම වේගවත් කිරීමයි.",
	"about::about_stickers_blurb":
		"ඔබේ ප්‍රජාවේ Bitcoin ගැන වචනය ව්‍යාප්ත කිරීමට අපි ඔබේ දොරකඩට නොමිලේ Bitcoin ස්ටිකර එවමු. සෑම මසකම, සිය ගණනක් මිනිසුන් මෙම ස්ටිකර්වල QR කේත ස්කෑන් කර Bitcoin ගැන ඉගෙන ගනී.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin හි බැංකු දිවීම් නොමැත",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin යනු සම්පූර්ණ-සංචිත පද්ධතියකි. ඔබ ඔබේ මුදල් බැංකුවකට තැන්පත් නොකරයි. ඔබම බැංකුවයි. ඔබේ මුදල් ඔබේ දැනුමෙන් තොරව ණය නොදෙන්නේ, ඔබට පමණක් එයට ප්‍රවේශ විය හැකි බැවිනි.",
	"bank-runs::bank_runs_bitcoin_p2":
		"ඔබ ඔබේම පසුම්බියේ Bitcoin රඳවා තබා ඇති තාක් කල් — හුවමාරුවක හෝ ETF එකක ඔතා නොව — බැංකු දිවීම් කළ නොහැක.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoin සමඟ, ඔබ සැබවින්ම ඔබේ මුදල් පාලනය කරයි.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"2020 මාර්තු 26 සිට, එක්සත් ජනපද බැංකුවලට කිසිදු සංචිතයක් රඳවා ගැනීමට අවශ්‍ය නැත.",
	"bank-runs::bank_runs_card_bank_reserve_label": "බැංකු සංචිත අනුපාතය",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"මූලාශ්‍රය: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"සම්පූර්ණ-සංචිත පද්ධතිය — තැන්පතු රක්ෂණයක් අවශ්‍ය නැත.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin ආවරණය",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"මූලාශ්‍රය: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"සෑම Bitcoin එකක්ම බ්ලොක්චේන් එකේ ඇත — කිසිවක් ණයට දී නොමැත.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin සංචිත අනුපාතය",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"මූලාශ්‍රය: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"ඩොලර් බිලියන 153.9ක රක්ෂණ අරමුදල එරෙහිව ඩොලර් ට්‍රිලියන 10.82ක රක්ෂිත තැන්පතු (2025 දෙසැම්බර්).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC ආවරණය",
	"bank-runs::bank_runs_card_fdic_source":
		"මූලාශ්‍රය: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "අවස්ථා අධ්‍යයනය",
	"bank-runs::bank_runs_card_svb_source":
		"මූලාශ්‍රය: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Silicon Valley Bank හි බැංකු දිවීම සිදු වූ ආකාරය ඉගෙන ගන්න",
	"bank-runs::bank_runs_card_wallet_label": "ඊළඟ පියවර",
	"bank-runs::bank_runs_card_wallet_source": "මෙතැන ආරම්භ කරන්න →",
	"bank-runs::bank_runs_card_wallet_title":
		"ඔබේම Bitcoin පසුම්බියක් ලබා ගන්නේ කෙසේදැයි ඉගෙන ගන්න",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC රක්ෂණය තැන්පතු වලින් සියයට 1ක් පමණ ආවරණය කරයි",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC රක්ෂණය එක් තැන්පත්කරුවකුට ඩොලර් 250,000ක් දක්වා තැන්පතු ආරක්ෂා කරයි. නමුත් රක්ෂණ අරමුදල එය ආරක්ෂා කළ යුතු මුළු තැන්පතු වලට වඩා බෙහෙවින් කුඩාය.",
	"bank-runs::bank_runs_fdic_p2_a":
		"මහා පරිමාණ බැංකු බිඳවැටීමක දී, රජය හිඟය පියවීමට මුදල් මුද්‍රණය කරනු ඇත — එය වැඩි",
	"bank-runs::bank_runs_fdic_p2_link": "උද්ධමනය ඇති කරයි.",
	"bank-runs::bank_runs_header":
		"Bitcoin හි බැංකු දිවීම් නොමැත, නමුත් ඔබේ බැංකුවට ඇති විය හැක.",
	"bank-runs::bank_runs_page_description":
		"බැංකු භාගික-සංචිත බැංකුකරණය යටතේ ඔබේ තැන්පතු ණයට දෙයි. බොහෝ දෙනා එකවර මුදල් ඉවත් කර ගැනීමට උත්සාහ කළහොත්, බැංකු බිඳවැටිය හැකිය. Bitcoin යනු සම්පූර්ණ-සංචිත පද්ධතියකි — බැංකු දිවීම් කළ නොහැක.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: සැබෑ ලෝක උදාහරණයක්",
	"bank-runs::bank_runs_svb_p1_a":
		"2023 මාර්තු මාසයේ දී, Silicon Valley Bank බිඳවැටුණේ එය පාරිභෝගික තැන්පතු දිගුකාලීන",
	"bank-runs::bank_runs_svb_p1_b":
		"බැඳුම්කරවල ආයෝජනය කළ බැවිනි. එම බැඳුම්කර වටිනාකම අහිමි වූ විට, SVB ට ඉවත් කිරීම් ආවරණය කළ නොහැකි විය. බැංකුව බංකොළොත් විය.",
	"bank-runs::bank_runs_svb_p1_link": "භාණ්ඩාගාර",
	"bank-runs::bank_runs_svb_p2":
		"දහස් ගණනක් සමාගම්වලට ඔවුන්ගේ සේවකයන්ට වැටුප් ගෙවිය නොහැකි විය. FDIC මැදිහත් විය — නමුත් එය විශාල ප්‍රශ්නයක් මතු කළේය: ඔබේ මුදල් සැබවින්ම ආරක්ෂිතද?",
	"bank-runs::bank_runs_what_p1":
		"බැංකු ඔබේ තැන්පතු ගබඩාවල තබා නොගනී. ඔවුන් ඔබේ මුදල් ණයට දෙයි සහ ආයෝජනය කරයි — මෙය භාගික-සංචිත බැංකුකරණය ලෙස හැඳින්වේ.",
	"bank-runs::bank_runs_what_p2":
		"බොහෝ දෙනා එකවර මුදල් ඉවත් කර ගැනීමට උත්සාහ කළහොත්, බැංකුවට හැමෝටම ගෙවීමට ප්‍රමාණවත් මුදල් නොමැත. මෙය බැංකු දිවීමක් - එය බැංකු සම්පූර්ණයෙන්ම බිඳවැටීමට හේතු විය හැක.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">බැංකු</span> අතර වෙනස",
	"bitcoin-vs-banks::point_1_summary_1":
		"අන්තර්ජාල සම්බන්ධතාවක් ඇති ඕනෑම කෙනෙකුට Bitcoin භාවිතා කළ හැකිය — එය ",
	"bitcoin-vs-banks::point_1_summary_2": "අවසරයකින් තොරයි.",
	"bitcoin-vs-banks::point_1_summary_3":
		"බැංකුවලට ප්‍රතිපත්ති හෝ රජයේ නියෝග මත පදනම්ව ගිණුම් ප්‍රතික්ෂේප කිරීම, කැටි කිරීම හෝ වසා දැමීම කළ හැකිය.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin ජාලය කිසිදු නඩත්තු බිඳීමක් හෝ නිවාඩු දිනයක් නොමැතිව 24/7 ක්‍රියාත්මක වේ. බැංකුවලට සීමිත පැය, සති අන්ත වසා දැමීම් සහ බිඳීම් ඇත.",
	"bitcoin-vs-banks::point_3_summary_1":
		"සෑම Bitcoin ගනුදෙනුවක්ම ඕනෑම කෙනෙකුට විගණනය කළ හැකි පොදු බ්ලොක්චේන් එකක ඇත. බැංකු පාරිභෝගිකයන්ට ස්වාධීනව සත්‍යාපනය කළ නොහැකි පුද්ගලික ලේඛන තබා ගනී.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoin සමඟ, ඔබ ඔබේම යතුරු රඳවා තබා ගනී — අපගේ සරල මාර්ගෝපදේශය බලන්න ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin පසුම්බි",
	"bitcoin-vs-banks::point_4_summary_3":
		". බැංකු ඔබේ මුදල් රඳවා තබා ගන්නා අතර ඕනෑම අවස්ථාවක එය කැටි කිරීම, සීමා කිරීම හෝ ප්‍රවේශය කපා හැරීම කළ හැකිය.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin ගාස්තු විනිවිද පෙනෙන සහ පුරෝකථනය කළ හැකිය. බැංකු කාලයත් සමඟ ගිණුම්, අධිකබැර, මාරු කිරීම් සහ ATM සඳහා සැඟවුණු ගාස්තු එකතු කරයි.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin ඔබට ඇති දේ පමණක් වියදම් කිරීමට ඉඩ දෙයි. බැංකු අධිකබැරවලට ඉඩ දෙයි, පසුව එම පහසුකම සඳහා දිගට දඩ ගාස්තු අය කරයි.",
	"bitcoin-vs-banks::point_7_summary_1":
		"විකාශනය කළ පසු, Bitcoin ගනුදෙනු නැවැත්විය හෝ ආපසු හැරවිය නොහැක. බැංකු ප්‍රතිපත්ති හෝ රජයේ නියෝග මත පදනම්ව ගනුදෙනු අවහිර කිරීම, කැටි කිරීම හෝ ආපසු හැරවීම කළ හැකිය.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">බැඳුම්කර</span> අතර වෙනස",
	"bitcoin-vs-bonds::point_1_summary_1":
		"බැඳුම්කර \"අවදානම් රහිත\" යනු නමින් පමණි — උද්ධමනය, පොලී අනුපාත උච්චාවචනයන් සහ පැහැර හැරීමේ අවදානම සැබෑ ප්‍රතිලාභ ග්‍රහණය කරයි.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin හි විනිවිද පෙනෙන වාෂ්පශීලී බවක් ඇත නමුත් සැඟවුණු සම පාර්ශවික අවදානමක් නොමැත.",
	"bitcoin-vs-bonds::point_2_summary_1": "නම්",
	"bitcoin-vs-bonds::point_2_summary_2": "උද්ධමනය",
	"bitcoin-vs-bonds::point_2_summary_3":
		"බැඳුම්කර ආදායම ඉක්මවා යයි, බැඳුම්කරය හිමි අයට සෑම වසරකම සැබෑ මිලදී ගැනීමේ බලය අහිමි වේ. Bitcoin හි මිලියන 21 සීමාව උද්ධමනය කළ නොහැක.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"අර්බුද කාලයේ දී බැඳුම්කර වෙළඳපල කැටි වේ — Silicon Valley Bank අර්ධ වශයෙන් බිඳවැටුණේ එය වටිනාකම අහිමි බැඳුම්කරවල සිර වී තිබූ නිසාය. බලන්න",
	"bitcoin-vs-bonds::point_3_summary_2": "බැංකු දිවීම්",
	"bitcoin-vs-bonds::point_3_summary_3":
		" Bitcoin ඒවා මග හරින ආකාරය බැලීමට. Bitcoin දියර අර්බුද නොමැතිව ලොව පුරා 24/7 ගනුදෙනු කරයි.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"ප්‍රමාණවත් ගැනුම්කරුවන් නොමැති නම් භාණ්ඩාගාර බැඳුම්කර වෙන්දේසි අසාර්ථක විය හැක — බලන්න",
	"bitcoin-vs-bonds::point_4_summary_2": "2022 හි දුර්වල වෙන්දේසි.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoin හි මිල අසාර්ථක විය හැකි කේන්ද්‍රීය වෙන්දේසියකින් තොරව විවෘත වෙළඳපලෙහි අඛණ්ඩව සොයා ගනී.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"බැඳුම්කර ආදායම මිලදී ගැනීමේ වේලාවේදී ස්ථාවර වේ. ආර්ථිකය වර්ධනය වුවත් හෝ මුදල් බිඳවැටුණත්, ඔබේ ආදායම එකම වේ.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"පිළිගැනීම වැඩි වන විට සහ ඉල්ලුම ස්ථාවර සැපයුමට මුහුණ දෙන විට Bitcoin හි සැලකිය යුතු ඉහළ යාමේ විභවයක් ඇත.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"බැඳුම්කරවලින් වැඩි ප්‍රමාණයක් බැංකු හෝ තැරැව්කරුවන් හරහා රඳවා ගනී, සම පාර්ශවික අවදානම එකතු කරයි. Bitcoin",
	"bitcoin-vs-bonds::point_6_summary_2": "පසුම්බියක්",
	"bitcoin-vs-bonds::point_6_summary_3":
		" සමඟ ස්වයං-ආරක්ෂණයෙන් රඳවා ගත හැකිය — එම අවදානම සම්පූර්ණයෙන් ඉවත් කරයි.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"බැඳුම්කර සම්පූර්ණයෙන්ම රජය මත රඳා පවතී. රජය පැහැර හැරීම හෝ එහි ණය උද්ධමනය කරන්නේ නම්, බැඳුම්කරය හිමි අයට අහිමි වේ.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin ඕනෑම රජයකින් හෝ දේශපාලන අධිකාරියකින් ස්වාධීනව ක්‍රියාත්මක වේ.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">මුදල්</span> අතර වෙනස",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin අන්තර්ජාලය හරහා මිනිත්තු කිහිපයකින් ලොව ඕනෑම තැනකට යයි. මුදල් සඳහා භෞතික පැමිණීමක් හෝ විශ්වාසදායක ප්‍රවාහකයෙකු අවශ්‍ය වේ — ඔබට ඊමේල් එකකින් ඩොලර් 20 ක නෝට්ටුවක් යැවීමට නොහැක.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin සෑම තැනකම සමානව ක්‍රියා කරයි. මුදල් භූගෝලය, විනිමය අනුපාත සහ දේශීය පිළිගැනීම මගින් සීමා වේ.",
	"bitcoin-vs-cash::point_3_summary_1":
		"රජයන්ට මුදල් එක රැයකින් යල්පැන ඇති කළ හැකිය — ඉන්දියාව 2016 දී එසේම කළේය. සංසරණයෙන් ඉවත් නොකළත්, මුදල් අහිමි වේ",
	"bitcoin-vs-cash::point_3_summary_2": "උද්ධමනය",
	"bitcoin-vs-cash::point_3_summary_3":
		" නිසා. Bitcoin කිසිදු රජයකට හෝ අධිකාරියකට යල්පැන ඇති කළ නොහැක.",
	"bitcoin-vs-cash::point_4_summary_1":
		"මුදල් ව්‍යාජ ලෙස සෑදිය හැක, සමහර විට ඒත්තු ගැන්වෙන ලෙස. Bitcoin ව්‍යාජ සෑදීම ගණිතමය වශයෙන් කළ නොහැකි ක්‍රිප්ටෝග්‍රැෆි භාවිතා කරයි.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin හි කේන්ද්‍රීය අධිකාරියක් නොමැත. මුදල් රජයන් විසින් නිකුත් කරන අතර ඔවුන්ට කැමැත්තෙන් වැඩිපුර මුද්‍රණය කිරීම, මෝස්තර වෙනස් කිරීම හෝ නෝට්ටු යල්පැන ඇති කිරීම කළ හැකිය.",
	"bitcoin-vs-cash::point_6_summary_1":
		"මුදල් සොරකම, ගිනි, හානි සහ රාජසන්තක කිරීමට අවදානම් සහගතය. Bitcoin දුරකථනයක හෝ දෘඪාංග උපාංගයක ආරක්ෂිතව",
	"bitcoin-vs-cash::point_6_summary_2": "ස්වයං-ආරක්ෂණය",
	"bitcoin-vs-cash::point_6_summary_3":
		" කළ හැකිය.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin සතෝෂි මිලියන 100 කට බෙදී යයි, ඕනෑම ප්‍රමාණයක ගෙවීම් සක්‍රීය කරයි. මුදල්වලට අවම නාමයක් ඇත — ඔබට පෙනියක් බෙදිය නොහැක.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">මධ්‍යම බැංකු ඩිජිටල් මුදල් (CBDC)</span> අතර වෙනස",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"කිසිවෙකුට ඔබට Bitcoin සමඟ ගනුදෙනු කිරීම නවත්වන්නට බැහැ. CBDC රජයන් සහ මධ්‍යම බැංකු සෑම ගෙවීමක්ම පාලනය කරන ලෙස සැලසුම් කර ඇත, ඔබේ පෞද්ගලිකත්වය සහ නිදහස සීමා කරයි.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin කිසි විටෙක කල් ඉකුත් නොවේ සහ මාසික ගාස්තු නැත. CBDC කල් ඉකුත් වීමට වැඩසටහන්ගත කළ හැකිය, ඔබව අනාගතය සඳහා ඉතුරු කිරීමෙන් වළක්වයි.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin හි BTC මිලියන 21 ක දැඩි සීමාවක් ඇත. CBDC හි කිසිදු සැපයුම් සීමාවක් නැත, රජයන්ට කැමති ලෙස මුදල් සැපයුම පුළුල් කිරීමට ඉඩ දෙයි — එය",
	"bitcoin-vs-cbdc::point_3_summary_2": "උද්ධමනය ඇති කරයි.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin ලිපින ඔබේ සැබෑ ජීවිතේ අනන්‍යතාවට බැඳී නැත. CBDC රජයේ හැඳුනුම්පත්වලට කෙලින්ම සම්බන්ධ වන අතර, පුළුල් මූල්‍ය නිරීක්ෂණ සහ වාරණය සක්‍රීය කරයි.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoin හි නීති දහස් ගණනක් ස්වාධීන නෝඩ් මගින් සත්‍යාපනය කෙරේ. CBDC රජයන් සහ මධ්‍යම බැංකුවල අතේ ඇති අතර, ඔවුන්ට ජාලය මත සම්පූර්ණ පාලනයක් ඇත.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"ඕනෑම කෙනෙකුට ජාල නීති සත්‍යාපනය කිරීමට Bitcoin නෝඩ් එකක් ධාවනය කළ හැකිය. CBDC පරිශීලකයන්ට නෝඩ් ධාවනය කිරීමට ඉඩ නොදේ — ඔබට කේන්ද්‍රීය අධිකාරිය විශ්වාස කිරීමට සිදු වේ.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"ස්වයං-ආරක්ෂිත Bitcoin කිසිවෙකුට කැටි කළ නොහැක. CBDC රජයන් සහ මධ්‍යම බැංකු වහාම ගිණුම් කැටි කරන පරිදි සැලසුම් කර ඇත.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin හි ස්වයං-ආරක්ෂණය",
	"bitcoin-vs-cbdc::point_8_summary_2": "පසුම්බියක්",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" සමඟ ඔබේ මුදල් මත සම්පූර්ණ පාලනයක් ඔබට ලබා දෙයි. CBDC හට බැංකු හෝ රජයන් වැනි භාරකරුවන් විශ්වාස කිරීම අවශ්‍ය වේ.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoin හි මූල්‍ය ප්‍රතිපත්තිය කේතයේ ස්ථාවර වන අතර වෙනස් කළ නොහැක. CBDC දේශපාලඥයින්ට කැමැත්තෙන් නැවත වැඩසටහන්ගත කළ හැකිය,",
	"bitcoin-vs-cbdc::point_9_summary_2": "උද්ධමනය",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" ඇති කරයි බොහෝ මුදල් මුද්‍රණය කරන විට.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin යනු මෙතෙක් නිර්මාණය කළ වඩාත්ම ආරක්ෂිත පරිගණක ජාලය වන අතර කිසි විටෙක හැක් කර නොමැත. CBDC කිහිප වතාවක්ම හැක් කර ඇති බැංකු සහ රජයන් මත රඳා පවතී.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">ක්‍රිප්ටෝකරන්සි</span> අතර වෙනස",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin ප්‍රොටොකෝලය 2009 සිට බොහෝ දුරට වෙනස් වී නැත, පුරෝකථනය කළ හැකි නීති සපයයි. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘති අඛණ්ඩව ඔවුන්ගේ ප්‍රොටොකෝලය හෝ ටෝකන් ආර්ථිකය වෙනස් කරයි හෝ නව අනුවාදවලට ෆෝක් කරයි.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin ලොව පුරා ස්වාධීන නෝඩ් දහස් ගණනක ක්‍රියාත්මක වේ. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘති පදනම්, සමාගම් හෝ ඒකපාර්ශ්වික වෙනස්කම් කළ හැකි කුඩා සංවර්ධන කණ්ඩායම් මගින් මෙහෙයවනු ලැබේ.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin හි කාසි මිලියන 21 ක දැඩි සීමාවක් ඇත — දුර්ලභම ඩිජිටල් වත්කම. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘතිවල අසීමිත සැපයුමක් හෝ කැමති පරිදි නව ටෝකන සාදන යාන්ත්‍රණයන් ඇත, හිමියන්ගේ කොටස තනුක කරයි.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin හි එක් අරමුණක් ඇත: සම සම ඩිජිටල් මුදල්. ඕනෑම කෙනෙකුට එය තේරුම් ගැනීමට සහ භාවිතා කිරීමට හැකිය. බොහෝ ක්‍රිප්ටෝ සංකීර්ණ ස්මාර්ට් කොන්ත්‍රාත්තු හෝ DeFi සම්බන්ධ වන අතර ආරක්ෂිතව භාවිතා කිරීමට තාක්ෂණික කුසලතා අවශ්‍ය වේ.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoin හි ප්‍රොෆ්-ඔෆ්-වර්ක් කිසිදු සාර්ථක ප්‍රධාන ජාල ප්‍රහාරයක් නොමැතිව වසර 15 කට වැඩි කාලයක් සිට ක්‍රියාත්මක වෙමින් පවතී. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘති පර්යේෂණාත්මක, යුද්ධ-පරීක්ෂා නොකළ සම්මුතිය භාවිතා කරයි.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin යනු ඩිජිටල් මුදල් — වටිනාකම් ගබඩාවක් සහ හුවමාරු මාධ්‍යයක්. බොහෝ ක්‍රිප්ටෝ ටෝකන අපැහැදිලි සැබෑ-ලෝක වටිනාකමක් සහිත සමපේක්ෂන හෝ පාලන ටෝකන වේ.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin ප්‍රහාර යටතේ ශක්තිමත් වන අතර සෑම අර්බුදයකින්ම, තහනමකින් සහ විවේචනයකින් බේරී ඇත. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘති නියාමන, තාක්ෂණික හෝ වෙළඳපල පීඩනය යටතේ බිඳ වැටේ.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin හි CEO කෙනෙක්, සමාගමක් හෝ අසාර්ථකත්වයේ තනි ලක්ෂ්‍යයක් නැත. බොහෝ ක්‍රිප්ටෝ ව්‍යාපෘති ව්‍යාපාර ප්‍රාග්ධනලාභීන්, විශේෂිත නායකත්වය හෝ එක් සමාගමක පැවැත්ම මත රඳා පවතී.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">කලා කෘති</span> අතර වෙනස",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"සෑම Bitcoin එකක්ම සමාන සහ හුවමාරු කළ හැකිය. සෑම කලා කෘතියක්ම අනන්‍ය වේ — විවිධ නිර්මාණ, ඉතිහාසය, තත්ත්වය සහ ප්‍රභවය සෘජු සංසන්දනය දුෂ්කර කරයි.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin ඕනෑම කෙනෙකුට ප්‍රවේශ විය හැකි ගෝලීය වෙළඳපලක 24/7 ගනුදෙනු කරයි. කලාව සඳහා විශේෂ වෙන්දේසි ශාලා, පුද්ගලික වෙළෙන්දන් හෝ ගැලරි අවශ්‍ය වන අතර විකිණීමට මාස ගත විය හැක.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin මිලදී ගැනීමට හෝ විකිණීමට 1% කට අඩුවෙන් වැය වේ, බොහෝ විට ඊටත් වඩා අඩුය. කලා විකිණීම ගැනුම්කරුවන්ගේ වාරික, කොමිස්, රක්ෂණය, නැව් ගත කිරීම සහ සත්‍යතා ගාස්තුවලින් 30-40% එකතු වේ.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin සතෝෂි මිලියන 100 කට බෙදී යයි, ඕනෑම ප්‍රමාණයක ගනුදෙනුවලට එය පරිපූර්ණ කරයි. ඔබට පින්තූරයක කොටසක් හෝ ප්‍රතිමාවක මුල්ලක් අයිතිකර ගැනීමට නොහැක.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin හිමිකාරිත්වය සහ සත්‍යතාව ඕනෑම කෙනෙකුට බ්ලොක්චේන් එකේ ක්‍රිප්ටෝග්‍රැෆිකව සත්‍යාපනය කළ හැකිය. කලා සත්‍යාපනය මිල අධික, මන්දගාමී වන අතර තවමත් ව්‍යාජ සාදන්නන් විසින් නිතිපතා රවටනු ලැබේ — කලා කෘතියක වටිනාකම එක රැයකින් විනාශ කරයි.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"නිසි ලෙස ආරක්ෂා කර ඇති Bitcoin ජල ගැලීම්, ගිනි, භූමිකම්පා සහ සොරකම් වලින් බේරේ. කලාව සියලු ආකාරයේ භෞතික විනාශයන්ට අවදානම් සහගත වන අතර, රක්ෂණය කලාතුරකින් සියල්ල ආවරණය කරයි.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"අන්තර්ජාල සම්බන්ධතාවක් සහ මුදල් කිහිපයක් ඇති ඕනෑම කෙනෙකුට Bitcoin මිලදී ගත හැකිය. කලා ආයෝජනය ප්‍රායෝගිකව වෙන්දේසි සහ විශේෂිත දැනුමට ප්‍රවේශය ඇති ධනවත් එකතු කරන්නන්ට සීමා වේ.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">රත්‍රන්</span> අතර වෙනස",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin අන්තර්ජාලය හරහා අඩු ගාස්තු සහිතව ක්ෂණිකව යැවිය හැකිය. රත්‍රන් හිමිකාරිත්වය මාරු කිරීමට භෞතිකව යැවිය යුතුය.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin යනු ඔබට අන්තර්ජාලය හරහා මාරු කළ හැකි දේශීය ඩිජිටල් වත්කමකි. අන්තර්ජාලයේ බොහෝ රත්‍රන් ඩිජිටල් රිසිට්පතක් පමණි — ඔබට ඇත්තේ භාරකරුවෙකුගේ පොරොන්දුවක් පමණි, ලෝහයම නොවේ.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin හි BTC මිලියන 21 ක දැඩි සීමාවක් ඇත. රත්‍රන් සැපයුම සෑම වසරකම 1.6% ක් පමණ වැඩි වන අතර, ඔබේ කොටස හැකිලෙයි — කඩදාසි මුදල්වල",
	"bitcoin-vs-gold::point_3_summary_2": "උද්ධමනයට",
	"bitcoin-vs-gold::point_3_summary_3":
		" වඩා අඩුය — නමුත් තවමත් උද්ධමනයකි.",
	"bitcoin-vs-gold::point_4_summary_1":
		"රත්‍රන් මිල ඉහළ යන විට, වැඩි රත්‍රන් කැණීම සිදු වේ, මිල නැවත පහළට ගෙනයයි. Bitcoin සැපයුම අනම්‍යයි — මිල කොතරම් ඉහළ ගියත්, මිලියන 21 ක් පමණ සැම විටම පවතිනු ඇත.",
	"bitcoin-vs-gold::point_5_summary_1":
		"දහස් ගණනක් ස්වාධීන නෝඩ් Bitcoin ජාලය සත්‍යාපනය කරයි. බොහෝ භෞතික රත්‍රන් විශාල භාරකරුවන් කිහිප දෙනෙකුගේ ගබඩාවල තබා ඇත.",
	"bitcoin-vs-gold::point_6_summary_1":
		"සම්පූර්ණ නෝඩ් එකක් ධාවනය කිරීමෙන් ඕනෑම කෙනෙකුට සැබෑ Bitcoin සත්‍යාපනය කළ හැකිය — එය හුදෙක් මෘදුකාංගයකි. භෞතික රත්‍රන් සත්‍යාපනය කිරීමට එය උණු කිරීම අවශ්‍ය වේ; ඇතුළත ටංස්ටන් තිබිය හැක.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin සතෝෂි මිලියන 100 කට බෙදී යයි, ඕනෑම ප්‍රමාණයක මිලදී ගැනීම් සඳහා එය පරිපූර්ණ කරයි. රත්‍රන් කුඩා ගනුදෙනුවලට පහසුවෙන් බෙදිය නොහැක.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">දේපල</span> අතර වෙනස",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin ලොව ඕනෑම තැනකට ක්ෂණිකව යයි. දේපල එක තැනක ස්ථාවර වන අතර දේශීය ආර්ථික, දේශපාලනික සහ ස්වභාවික අවදානම්වලට අවදානම් සහගතය.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin සතෝෂි මිලියන 100 කට බෙදී යයි. දේපල අර්ධ වශයෙන් විකිණිය නොහැක — ඔබට කුස්සිය මඟ හරින්න හෝ බාගයක් නිදන කාමරයක් මිලදී ගත නොහැක.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin කිසිදු රජයකට පාලනය කළ නොහැකි විමධ්‍යගත ජාලයක ක්‍රියා කරයි. දේපල පුළුල් ලෙස නියාමනය කර ඇත — කලාප කිරීම, කුලී පාලනය, අත්පත් කර ගැනීමේ ක්ෂේත්‍ර සහ රාජසන්තක කිරීම — සියල්ල අදාළ වේ.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin හි කිසිදු නඩත්තුවක් අවශ්‍ය නැත. දේපලට අළුත්වැඩියා කිරීම්, ප්‍රතිසංස්කරණ, රක්ෂණය, දේපල කළමනාකරණය සහ කුලී ප්‍රශ්න අවශ්‍ය වේ.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin හි කිසිදු පවතින බදුවක් නැත — ඔබ විකුණන විට පමණක් ප්‍රාග්ධන ලාභ ගෙවයි. දේපල ආදායමෙන් තොරව වාර්ෂික දේපල බදු ගෙවයි.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"නිසි ලෙස ආරක්ෂා කර ඇති Bitcoin ගිනි, ජල ගැලීම්, භූමිකම්පා වලින් බේරේ. දේපල ඕනෑම ව්‍යසනයකට අවදානම් සහගත වන අතර, රක්ෂණය කලාතුරකින් සියල්ල ආවරණය කරයි.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"සෑම Bitcoin එකක්ම සමාන සහ හුවමාරු කළ හැකිය. සෑම දේපලක්ම අනන්‍ය වන අතර, තක්සේරු කිරීම සහ සංසන්දනය කිරීම දුෂ්කර කරයි.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin අන්තර්ජාල සම්බන්ධතාවක් ඇති ඕනෑම කෙනෙකුට ලෝකය පුරා 24/7 ගනුදෙනු කරයි. දේපල විකිණීම දේශීය ගැනුම්කරුවන්ට සීමා වන අතර සම්පූර්ණ කිරීමට මාසවල කඩදාසි කටයුතු ගත විය හැක.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin සෑම කෙනෙකුටම සෘජු පුද්ගලික හිමිකාරිත්වය හැකි කරයි. ඔබේ ප්‍රාථමික නිවස නොව, ආයෝජනයක් ලෙස දේපල මිලදී ගැනීම නිවසේ මිල ඉහළ නංවයි, දරිය හැකි බව අඩු කරයි, සහ නේවාසික අර්බුදයට හේතු වේ.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">කොටස්</span> අතර වෙනස",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin යනු ඔබ සම්පූර්ණයෙන්ම අයිති සෘජු වත්කමකි. කොටස් යනු සමාගමක කොටස් — ඒවායේ වටිනාකම කළමනාකාරිත්වය, කාර්ය සාධනය සහ ඔබ පාලනය නොකරන තීරණ මත රඳා පවතී.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin හි BTC මිලියන 21 ක දැඩි සීමාවක් ඇත. සමාගම්වලට ඕනෑම අවස්ථාවක නව කොටස් නිකුත් කළ හැකිය, පවතින කොටස් හිමියන් තනුක කරයි — හරියට",
	"bitcoin-vs-stocks::point_2_summary_2": "උද්ධමනය",
	"bitcoin-vs-stocks::point_2_summary_3":
		" කඩදාසි මුදල්වල වටිනාකම තනුක කරන ආකාරයටම. Bitcoin සමඟ, ඔබේ කොටස කිසි විටෙක අඩු නොවේ.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin හි CEO කෙනෙක් හෝ අසාර්ථකත්වයේ තනි ලක්ෂ්‍යයක් නොමැත. කොටස් කළමනාකාරිත්වය මත පුළුල් ලෙස රඳා පවතී — එක් පුද්ගලයෙකුගේ දුර්වල තීරණ හෝ ඉවත්වීම මිල ගණන් කඩාවැටෙනු ඇත.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoin හි මිල විවෘත ගෝලීය වෙළඳපලෙන් එයි. කොටස් තක්සේරුව වැඩිපුර වටිනා කොටස් සඟවන මිල-ආදායම් අනුපාත වැනි මෙට්‍රික්ස් මත රඳා පවතී.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin ලෝකය පුරා 24/7 ගනුදෙනු කරයි. කොටස් හුවමාරු සතියේ දිනවල ව්‍යාපාරික පැයවලදී පමණක් විවෘතය.",
	"bitcoin-vs-stocks::point_6_summary_1": "ඔබට සරල මෘදුකාංග සමඟ Bitcoin",
	"bitcoin-vs-stocks::point_6_summary_2": "ස්වයං-ආරක්ෂණය",
	"bitcoin-vs-stocks::point_6_summary_3":
		" කළ හැකිය — තැරැව්කරුවෙකු අවශ්‍ය නොවේ. කොටස් තැරැව්කාර සමාගම්වල ඉඳ ගනී, ඒවා බිඳවැටුණහොත් ඔබව සම පාර්ශවික අවදානමට ලක් කරයි.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoin හි ස්ථාවර සැපයුම එය උද්ධමනයට එරෙහි විශ්වාසදායක ආරක්ෂාවක් කරයි. සමහර කොටස් උද්ධමනය ඉක්මවා යයි, අනෙක් ඒවා නොවේ — සහතිකයක් නැත.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"<span class=\"orange\">Bitcoin</span> සහ <span class=\"asset\">Visa</span> අතර වෙනස",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin යනු ඕනෑම කෙනෙකුට අවසරයකින් තොරව සම්බන්ධ වී භාවිතා කළ හැකි විවෘත ජාලයකි. Visa යනු මූල්‍ය ආයතන විසින් ක්‍රියාත්මක කරන සංවෘත පද්ධතියකි — විශේෂයෙන් බැංකු රහිත සහ දුප්පතුන්ට ප්‍රවේශය ප්‍රතික්ෂේප කළ හැකිය.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin ගනුදෙනුවලට වෙළෙඳ ගාස්තු නැත. Visa සාමාන්‍යයෙන් වෙළෙඳුන්ගෙන් එක් ගනුදෙනුවකට 3% ක් පමණ අය කරයි — ඔබේ ව්‍යාපාරය",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin ගෙවීම්",
	"bitcoin-vs-visa::point_2_summary_3": " පිළිගැනීමෙන් මුදල් ඉතිරි කර ගත හැකිය.",
	"bitcoin-vs-visa::point_3_summary_1":
		"සෑම Bitcoin ගනුදෙනුවක්ම විවෘත, විගණනය කළ හැකි බ්ලොක්චේන් එකක ඇත. Visa සංවෘත, පුද්ගලික පද්ධතියක් පවත්වාගෙන යන අතර පාරිභෝගිකයන්ට ස්වාධීනව කිසිවක් සත්‍යාපනය කළ නොහැක.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin කිසිදු කේන්ද්‍රීය අධිකාරියකට කැටි කළ නොහැක. Visa හට ඕනෑම අවස්ථාවක ගිණුම් කැටි කිරීම, ගනුදෙනු අවහිර කිරීම හෝ සේවාව ප්‍රතික්ෂේප කිරීම කළ හැකිය.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin යනු අවසන් පියවීමයි — ඔබට ඇති දේ පමණක් වියදම් කළ හැකිය. ක්‍රෙඩිට් කාඩ් බොහෝ විට වසරකට 25% කට වඩා වැඩි පොලී අනුපාතවලින් ණය ඇති කරයි.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin ඔබට",
	"bitcoin-vs-visa::point_6_summary_2": "ස්වයං-ආරක්ෂණයේ",
	"bitcoin-vs-visa::point_6_summary_3":
		" හැකියාව ලබා දෙයි — බැංකුවක් හෝ ගෙවීම් සකසනයක් අවශ්‍ය නැත. ක්‍රෙඩිට් කාඩ් සඳහා සැම විටම අතරමැදියන් අවශ්‍ය වේ.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin ව්‍යාපාරික වේලාවන් නොමැතිව ලොව පුරා 24/7 ක්‍රියා කරයි. Visa හට ක්‍රියාකාරී පැය, නඩත්තු බිඳීම් සහ ගනුදෙනු අවහිර කළ හැකි භූගෝලීය සීමා කිරීම් ඇත.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (si): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
