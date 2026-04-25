#!/usr/bin/env node
/**
 * Tamil manifest refresh — part 1.
 *
 * Covers: index, common, about, get-involved, bank-runs, 404,
 * compound-inflation-calculator, buy, all bitcoin-vs-* namespaces.
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
	"ta.json",
);

/* ─────────────── Translation map: namespace::key → Tamil ─────────────── */

const T = {
	// ───────── 404 ─────────
	"404::404_home": "முகப்புக்குத் திரும்பு",
	"404::404_message": "Bitcoin சூப்பர், ஆனால் இந்த உடைந்த பக்கம் அப்படியில்லை.",
	"404::404_not_found_short": "காணப்படவில்லை",

	// ───────── about ─────────
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_page_description":
		"bitcoin.rocks என்பது 2022-இல் நிறுவப்பட்ட இலவச, திறந்த-மூல Bitcoin கல்வி இணையதளமாகும். கல்வியின் மூலம் Bitcoin ஏற்புத்திறனை விரைவுபடுத்துவது எங்கள் நோக்கமாகும்.",
	"about::about_editorial_2":
		"Federal Reserve (FRED), அமெரிக்க தொழிலாளர் புள்ளியியல் பணியகம், FDIC, ஐக்கிய நாடுகள், World Gold Council, Forbes, MIT Technology Review, Lyn Alden மற்றும் James Lavish போன்ற நம்பகமான ஆதாரங்களுக்கு நாங்கள் இணைப்புகளை வழங்குகிறோம். உண்மைகள் தெளிவாக முன்வைக்கப்படும்போது Bitcoin தனக்காகத் தானே பேசுகிறது என்று நாங்கள் நம்புகிறோம்.",
	"about::about_header": "bitcoin.rocks பற்றி",
	"about::about_open_source_2":
		"bitcoin.rocks என்பது MIT License-இன் கீழ் உரிமம் பெற்ற இலவச, திறந்த-மூல திட்டமாகும். யார் வேண்டுமானாலும் bitcoin.rocks-க்கு பங்களிக்கலாம். உலகெங்கிலும் உள்ள மக்களுக்கு எங்கள் உள்ளடக்கத்தை அணுகக்கூடியதாக ஆக்க உதவும் மொழிபெயர்ப்பாளர்களை நாங்கள் சிறப்பாக வரவேற்கிறோம்.",
	"about::about_business_blurb":
		"உள்ளூர் வியாபாரிகள் Bitcoin ஏற்க உதவும் இலவச வணிக வளங்களை நாங்கள் வழங்குகிறோம். Bitcoin ஏன் வணிகத்திற்கு நல்லது, பணப்பை மற்றும் விற்பனைப் புள்ளியை எவ்வாறு தேர்ந்தெடுப்பது என்பதை எங்கள் Bitcoin வணிகப் பக்கம் உள்ளடக்கியது, மேலும் இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்களை வழங்குகிறது.",
	"about::about_card_business_label": "வணிக வளங்கள்",
	"about::about_card_business_source": "ஆதாரம்: bitcoin.rocks →",
	"about::about_card_business_title":
		"Bitcoin கொடுப்பனவுகளை ஏற்கத் தொடங்க ஒரு வணிகத்திற்குத் தேவையான அனைத்தும்",
	"about::about_card_contact_github_source": "ஆதாரம்: GitHub →",
	"about::about_card_contribute_label": "பங்களிக்கவும்",
	"about::about_card_contribute_source": "ஆதாரம்: GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks-க்கு எவ்வாறு பங்களிப்பது என்பதை அறியவும்",
	"about::about_card_email_label": "மின்னஞ்சல்",
	"about::about_card_email_source": "ஆதாரம்: மின்னஞ்சல் →",
	"about::about_card_flyers_label": "அச்சிடக்கூடிய துண்டுப்பிரசுரங்கள்",
	"about::about_card_flyers_source": "ஆதாரம்: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"உங்கள் சமூகத்திற்காக Bitcoin துண்டுப்பிரசுரங்களைப் பதிவிறக்கி அச்சிடவும்",
	"about::about_card_github_label": "களஞ்சியம்",
	"about::about_card_github_source": "ஆதாரம்: GitHub →",
	"about::about_card_github_title": "GitHub-இல் bitcoin.rocks-ஐக் காண்க",
	"about::about_card_nostr_source": "ஆதாரம்: Nostr →",
	"about::about_card_stickers_label": "இலவச ஸ்டிக்கர்கள்",
	"about::about_card_stickers_source": "ஆதாரம்: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"உங்கள் வீட்டு வாசலுக்கு இலவச Bitcoin ஸ்டிக்கர்களைப் பெறுங்கள்",
	"about::about_flyers_blurb":
		"நீங்கள் சந்திப்புகளில் கொடுக்கவும், சமூகப் பலகைகளில் ஒட்டவும், அல்லது தபால் பெட்டிகளில் இடவும் கூடிய அச்சிடக்கூடிய துண்டுப்பிரசுரங்களை நாங்கள் வடிவமைக்கிறோம் — ஆர்வத்தைத் தூண்டி மக்களை bitcoin.rocks-க்கு அனுப்பி மேலும் அறிய ஒரு எளிய வழி.",
	"about::about_mission_1a": "bitcoin.rocks-ஐ நிறுவியவர்",
	"about::about_mission_1b":
		"2022-இல் ஒரு எளிய நோக்கத்துடன்: கல்வியின் மூலம் Bitcoin ஏற்புத்திறனை விரைவுபடுத்துதல்.",
	"about::about_stickers_blurb":
		"உங்கள் சமூகத்தில் Bitcoin விழிப்புணர்வைப் பரப்ப உதவும் வகையில் உங்கள் வீட்டு வாசலுக்கு இலவச Bitcoin ஸ்டிக்கர்களை நாங்கள் அனுப்புகிறோம். ஒவ்வொரு மாதமும் நூற்றுக்கணக்கான மக்கள் இந்த ஸ்டிக்கர்களில் உள்ள QR குறியீடுகளை ஸ்கேன் செய்து Bitcoin பற்றி அறிகிறார்கள்.",

	// ───────── bank-runs ─────────
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_header":
		"Bitcoin-இல் வங்கி நெருக்கடி இல்லை, ஆனால் உங்கள் வங்கியில் இருக்கலாம்.",
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin-இல் வங்கி நெருக்கடிகள் இல்லை",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin ஒரு முழு-இருப்பு அமைப்பு. நீங்கள் வங்கியில் உங்கள் பணத்தை வைப்பு செய்யவில்லை. நீங்களே உங்கள் சொந்த வங்கி. உங்கள் பணத்தை யாரும் உங்களுக்குத் தெரியாமல் கடன் கொடுக்க முடியாது, ஏனெனில் உங்கள் பணத்தை அணுகக்கூடிய ஒரே ஆள் நீங்கள்தான்.",
	"bank-runs::bank_runs_bitcoin_p2":
		"நீங்கள் உங்கள் சொந்த பணப்பையில் — பரிமாற்றத்திலோ ETF-இல் சுற்றியிருப்பதோ அல்ல — bitcoin வைத்திருக்கும் வரை, வங்கி நெருக்கடிகள் சாத்தியமில்லை.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoin மூலம், நீங்கள் உண்மையிலேயே உங்கள் பணத்தைக் கட்டுப்படுத்துகிறீர்கள்.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"மார்ச் 26, 2020 முதல், அமெரிக்க வங்கிகள் இருப்பில் 0% வைத்திருக்க வேண்டும்.",
	"bank-runs::bank_runs_card_bank_reserve_label": "வங்கி இருப்பு விகிதம்",
	"bank-runs::bank_runs_card_bank_reserve_source": "ஆதாரம்: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"முழு-இருப்பு அமைப்பு — வைப்புத் தொகை காப்பீடு தேவையில்லை.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin கவரேஜ்",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"ஆதாரம்: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"ஒவ்வொரு bitcoin-உம் on-chain உள்ளது — எதுவும் கடன் கொடுக்கப்படவில்லை.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin இருப்பு விகிதம்",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"ஆதாரம்: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"$153.9B காப்பீட்டு நிதி vs $10.82T காப்பீடு செய்யப்பட்ட வைப்புகள் (டிசம்பர் 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC கவரேஜ்",
	"bank-runs::bank_runs_card_fdic_source":
		"ஆதாரம்: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_svb_label": "ஆய்வு வழக்கு",
	"bank-runs::bank_runs_card_svb_source":
		"ஆதாரம்: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Silicon Valley Bank நெருக்கடி எவ்வாறு நிகழ்ந்தது என்பதை அறியவும்",
	"bank-runs::bank_runs_card_wallet_label": "அடுத்த படி",
	"bank-runs::bank_runs_card_wallet_source": "இங்கே தொடங்கவும் →",
	"bank-runs::bank_runs_card_wallet_title":
		"உங்கள் சொந்த Bitcoin பணப்பையை எவ்வாறு பெறுவது என்பதை அறியவும்",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC காப்பீடு வைப்புகளில் சுமார் 1% மட்டுமே மூடுகிறது",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC காப்பீடு ஒரு வைப்பாளருக்கு $250,000 வரை வைப்புகளைப் பாதுகாக்கிறது. ஆனால் அது பாதுகாக்க வேண்டிய மொத்த வைப்புகளுடன் ஒப்பிடும்போது காப்பீட்டு நிதி மிகச் சிறியது.",
	"bank-runs::bank_runs_fdic_p2_a":
		"பெரிய அளவிலான வங்கி தோல்வியில், அரசாங்கம் இடைவெளியை மூட பணத்தை அச்சிடும் வாய்ப்புள்ளது — இதன் விளைவாக அதிக",
	"bank-runs::bank_runs_fdic_p2_link": "பணவீக்கம்.",
	"bank-runs::bank_runs_page_description":
		"பகுதி இருப்பு வங்கி முறையில் வங்கிகள் உங்கள் வைப்புகளைக் கடன் கொடுக்கின்றன. ஒரே நேரத்தில் அதிகம் பேர் திரும்பப் பெற்றால், வங்கிகள் தோல்வியடையக்கூடும். Bitcoin ஒரு முழு-இருப்பு அமைப்பு — வங்கி நெருக்கடிகள் சாத்தியமில்லை.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: ஒரு உண்மையான உதாரணம்",
	"bank-runs::bank_runs_svb_p1_a":
		"மார்ச் 2023-இல், Silicon Valley Bank வாடிக்கையாளர் வைப்புகளை நீண்டகால",
	"bank-runs::bank_runs_svb_p1_b":
		"அந்த பத்திரங்கள் மதிப்பை இழந்தபோது, ​​SVB-யால் திரும்பப் பெறுதல்களை மூட முடியவில்லை. வங்கி திவாலானது.",
	"bank-runs::bank_runs_svb_p1_link": "அரசாங்கப் பத்திரங்களில்.",
	"bank-runs::bank_runs_svb_p2":
		"ஆயிரக்கணக்கான வணிகங்கள் தங்கள் ஊழியர்களுக்குச் சம்பளம் வழங்க முடியவில்லை. FDIC நுழைந்தது — ஆனால் அது ஒரு பெரிய கேள்வியை எழுப்பியது: உங்கள் பணம் உண்மையில் பாதுகாப்பாக உள்ளதா?",
	"bank-runs::bank_runs_what_p1":
		"வங்கிகள் உங்கள் வைப்புகளை ஒரு பாதுகாப்புப் பெட்டியில் வைத்திருக்கவில்லை. அவை உங்கள் பணத்தை வெளியே கடன் கொடுத்து முதலீடு செய்கின்றன — அதையே பகுதி இருப்பு வங்கி முறை என்கின்றனர்.",
	"bank-runs::bank_runs_what_p2":
		"ஒரே நேரத்தில் அதிகம் பேர் திரும்பப் பெற முயற்சித்தால், வங்கியிடம் அனைவருக்கும் கொடுக்க போதுமான பணம் இல்லை. அதுவே ஒரு வங்கி நெருக்கடி — மேலும் அது வங்கிகளை முழுவதுமாக சரியக்கூடும்.",

	// ───────── bitcoin-vs-banks ─────────
	"bitcoin-vs-banks::point_1_summary_1":
		"இணைய இணைப்பு உள்ள எவரும் Bitcoin-ஐப் பயன்படுத்தலாம் — இது",
	"bitcoin-vs-banks::point_1_summary_2": "அனுமதியற்றது.",
	"bitcoin-vs-banks::point_1_summary_3":
		"கொள்கை அல்லது அரசாங்க விதிகளின் அடிப்படையில் வங்கிகள் கணக்குகளை மறுக்கலாம், முடக்கலாம் அல்லது மூடலாம்.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin நெட்வொர்க் 24/7/365 பராமரிப்புப் பலகைகள் அல்லது விடுமுறைகள் இல்லாமல் இயங்குகிறது. வங்கிகளுக்கு வரம்பான நேரங்கள், வார இறுதிகள் விடுமுறை மற்றும் முடக்கப் பலகைகள் உள்ளன.",
	"bitcoin-vs-banks::point_3_summary_1":
		"ஒவ்வொரு Bitcoin பரிவர்த்தனையும் யாராலும் தணிக்கை செய்யக்கூடிய பொது blockchain-இல் உள்ளது. வங்கிகள் வாடிக்கையாளர்கள் சுயாதீனமாக சரிபார்க்க முடியாத தனிப்பட்ட லெட்ஜர்களை இயக்குகின்றன.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoin மூலம், உங்கள் சொந்த தனிப்பட்ட விசைகளை நீங்கள் வைத்திருக்கிறீர்கள் — எங்கள் எளிய",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin பணப்பைகள்",
	"bitcoin-vs-banks::point_4_summary_3":
		"வழிகாட்டியைப் பார்க்கவும். வங்கிகள் உங்கள் பணத்தை வைத்திருக்கின்றன மற்றும் எந்த நேரத்திலும் முடக்கலாம், கட்டுப்படுத்தலாம் அல்லது தடை செய்யலாம்.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin கட்டணங்கள் வெளிப்படையானவை மற்றும் கணிக்கக்கூடியவை. வங்கிகள் காலப்போக்கில் மறைக்கப்பட்ட கணக்கு, ஓவர்டிராஃப்ட், வயர் மற்றும் ATM கட்டணங்களை அடுக்குகின்றன.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin நீங்கள் உண்மையில் சொந்தமாக வைத்திருப்பதை மட்டுமே செலவிட அனுமதிக்கிறது. வங்கிகள் ஓவர்டிராஃப்ட்களை அனுமதிக்கின்றன, பின்னர் அந்த சலுகைக்காக அடுக்கடுக்கான அபராதக் கட்டணங்களை விதிக்கின்றன.",
	"bitcoin-vs-banks::point_7_summary_1":
		"ஒளிபரப்பப்பட்டவுடன், Bitcoin பரிவர்த்தனைகளை நிறுத்தவோ திருப்பிப் போடவோ முடியாது. கொள்கை அல்லது அரசாங்க உத்தரவுகளின் அடிப்படையில் வங்கிகள் பரிவர்த்தனைகளைத் தடுக்கலாம், முடக்கலாம் அல்லது திருப்பிப் போடலாம்.",
	"bitcoin-vs-banks::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">வங்கிகள்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-bonds ─────────
	"bitcoin-vs-bonds::point_1_summary_1":
		"பத்திரங்கள் பெயரளவில் மட்டுமே 'ஆபத்தற்றவை' — பணவீக்கம், வட்டி வீத மாற்றங்கள் மற்றும் இயல்புநிலை அபாயம் ஆகியவை அனைத்தும் உண்மையான வருமானத்தை சாப்பிடுகின்றன.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin-இல் வெளிப்படையான ஏற்ற இறக்கம் உள்ளது ஆனால் மறைக்கப்பட்ட எதிர் கட்சி அபாயம் இல்லை.",
	"bitcoin-vs-bonds::point_2_summary_1": "எப்போது",
	"bitcoin-vs-bonds::point_2_summary_2": "பணவீக்கம்",
	"bitcoin-vs-bonds::point_2_summary_3":
		"பத்திர விளைச்சல்களை மீறுகிறதோ, அப்போது பத்திர வைத்திருப்பாளர்கள் ஒவ்வொரு ஆண்டும் உண்மையான வாங்கும் சக்தியை இழக்கிறார்கள். Bitcoin-இன் 21-மில்லியன் வரம்பை பணவீக்கத்தால் கரைக்க முடியாது.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"நெருக்கடிகளில் பத்திர சந்தைகள் முடங்கிவிடும் — Silicon Valley Bank மதிப்பை இழந்த பத்திரங்களை வைத்திருந்ததால் ஓரளவு சரிந்தது. எவ்வாறு",
	"bitcoin-vs-bonds::point_3_summary_2": "வங்கி நெருக்கடிகள்",
	"bitcoin-vs-bonds::point_3_summary_3":
		"நிகழ்கின்றன மற்றும் ஏன் Bitcoin அவற்றைத் தவிர்க்கிறது என்பதைப் பாருங்கள். Bitcoin பணப்புழக்க நெருக்கடிகள் இல்லாமல் உலகளவில் 24/7 வர்த்தகம் செய்கிறது.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"போதுமான வாங்குபவர்கள் இல்லாதபோது கருவூல ஏலங்கள் தோல்வியடையக்கூடும் —",
	"bitcoin-vs-bonds::point_4_summary_2": "பலவீனமான 2022 ஏலத்தைப் பாருங்கள்.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"தோல்வியடையக்கூடிய மைய ஏலம் இல்லாமல் திறந்த சந்தைகளில் Bitcoin-இன் விலை தொடர்ந்து கண்டறியப்படுகிறது.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"வாங்கும்போது பத்திர விளைச்சல்கள் நிர்ணயிக்கப்படுகின்றன. பொருளாதாரம் வளர்ந்தாலும் அல்லது நாணயம் வீழ்ச்சியடைந்தாலும், உங்கள் வருவாய் அப்படியே இருக்கும்.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin ஏற்புத்திறன் வளர்ந்து தேவை நிலையான வழங்கலை சந்திக்கையில் கணிசமான மதிப்பேற்றத்திற்கு இடம் உள்ளது.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"பெரும்பாலான பத்திரங்கள் வங்கிகள் அல்லது தரகர்கள் மூலம் வைத்திருக்கப்படுகின்றன, இது எதிர் கட்சி அபாயத்தைச் சேர்க்கிறது. Bitcoin-ஐ ஒரு",
	"bitcoin-vs-bonds::point_6_summary_2": "பணப்பை",
	"bitcoin-vs-bonds::point_6_summary_3":
		" மூலம் சுய-காப்பகத்தில் வைக்கலாம் — அந்த அபாயத்தை முற்றிலும் அகற்றுகிறது.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"பத்திரங்கள் முற்றிலும் அரசாங்கங்கள் திருப்பிச் செலுத்துவதைச் சார்ந்துள்ளன. ஒரு அரசாங்கம் இயல்புநிலையில் தோல்வியுற்றாலோ அல்லது அதன் கடனை பணவீக்கத்தால் கரைத்தாலோ, பத்திர வைத்திருப்பாளர்கள் இழக்கிறார்கள்.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin எந்த அரசாங்கத்திலும் அல்லது அரசியல் அதிகாரத்திலும் சார்பற்று இயங்குகிறது.",
	"bitcoin-vs-bonds::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">பத்திரங்கள்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-cash ─────────
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin இணையம் வழியாக எங்கும் நிமிடங்களில் நகர்கிறது. பணத்திற்கு உடல் ரீதியான முன்னிலை அல்லது நம்பப்பட்ட கூரியர்கள் தேவை — நீங்கள் ஒரு $20 நோட்டை மின்னஞ்சல் செய்ய முடியாது.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin எல்லா இடத்திலும் ஒரே மாதிரியாக வேலை செய்கிறது. பணம் புவியியல், மாற்று விகிதங்கள் மற்றும் உள்ளூர் ஏற்புத்திறனால் வரம்புக்குட்பட்டது.",
	"bitcoin-vs-cash::point_3_summary_1":
		'அரசாங்கங்கள் ஒரே இரவில் பணத்தை செல்லாததாக ஆக்கலாம் — <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">இந்தியா</a> 2016-இல் அதைச் செய்தது. பணமதிப்பிழப்பு இல்லாமலும் கூட, பணம்',
	"bitcoin-vs-cash::point_3_summary_2": "பணவீக்கத்தால்",
	"bitcoin-vs-cash::point_3_summary_3":
		"மதிப்பை இழக்கிறது. Bitcoin-ஐ எந்த அரசாங்கமோ அதிகாரமோ செல்லாததாக ஆக்க முடியாது.",
	"bitcoin-vs-cash::point_4_summary_1":
		"பணத்தை போலியாக உருவாக்கலாம், சில நேரங்களில் நம்பத்தகுந்த வகையில். Bitcoin கணித ரீதியாக போலி உருவாக்க முடியாத கிரிப்டோகிராஃபியைப் பயன்படுத்துகிறது.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin-க்கு மைய அதிகாரம் இல்லை. பணம் அரசாங்கங்களால் வழங்கப்படுகிறது, அவை அதிகம் அச்சிடலாம், வடிவமைப்புகளை மாற்றலாம் அல்லது விருப்பப்படி நோட்டுகளை செல்லாதவையாக ஆக்கலாம்.",
	"bitcoin-vs-cash::point_6_summary_1":
		"பணம் திருட்டு, தீ, இழப்பு மற்றும் பறிமுதலுக்கு ஆளாகக்கூடியது. Bitcoin-ஐ பாதுகாப்பாக",
	"bitcoin-vs-cash::point_6_summary_2": "சுய-காப்பகம்",
	"bitcoin-vs-cash::point_6_summary_3":
		"ஃபோனிலோ அல்லது வன்பொருள் சாதனத்திலோ வைக்கலாம்.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin 100 மில்லியன் sats-களாக பிரிகிறது, எந்த அளவிலும் சிறு கொடுப்பனவுகளை அனுமதிக்கிறது. பணத்திற்கு குறைந்தபட்ச மதிப்புகள் உள்ளன — நீங்கள் ஒரு பைசாவை பிரிக்க முடியாது.",
	"bitcoin-vs-cash::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">பணம்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-cbdc ─────────
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin இதுவரை கட்டப்பட்ட மிக பாதுகாப்பான கணினி நெட்வொர்க் ஆகும், எப்போதும் ஹேக் செய்யப்படவில்லை. CBDC-கள் எண்ணற்ற முறை ஹேக் செய்யப்பட்ட வங்கிகள் மற்றும் அரசாங்கங்களைச் சார்ந்துள்ளன.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Bitcoin மூலம் பரிவர்த்தனை செய்வதிலிருந்து யாராலும் உங்களைத் தடுக்க முடியாது. CBDC-கள் ஒவ்வொரு கொடுப்பனவையும் அரசாங்கங்களும் மத்திய வங்கிகளும் கட்டுப்படுத்தும் வகையில் வடிவமைக்கப்பட்டுள்ளன, இது உங்கள் தனியுரிமை மற்றும் சுதந்திரத்தை வரம்புபடுத்துகிறது.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin ஒருபோதும் காலாவதியாகாது மற்றும் மாதாந்திர கட்டணங்கள் இல்லை. CBDC-கள் காலாவதியாக நிரல் செய்யப்படலாம், எதிர்காலத்திற்காக சேமிக்க உங்களைத் தடுக்கும்.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin-க்கு 21 மில்லியன் BTC என்ற கடினமான வரம்பு உள்ளது. CBDC-களுக்கு வழங்கலில் வரம்பு இல்லை, அரசாங்கங்களை விருப்பப்படி பணத்தை விரிவுபடுத்த அனுமதிக்கிறது — இது",
	"bitcoin-vs-cbdc::point_3_summary_2": "பணவீக்கத்தை.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin முகவரிகள் உங்கள் உண்மையான அடையாளத்துடன் இணைக்கப்படவில்லை. CBDC-கள் நேரடியாக அரசாங்க அடையாளத்துடன் இணைக்கப்பட்டு, பெரிய அளவிலான நிதி கண்காணிப்பு மற்றும் தணிக்கையை அனுமதிக்கின்றன.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoin-இன் விதிகள் பத்தாயிரக்கணக்கான சுயாதீன முனைகளால் சரிபார்க்கப்படுகின்றன. CBDC-கள் அரசாங்க மற்றும் மத்திய வங்கி கைகளில் மையப்படுத்தப்பட்டுள்ளன, அவை நெட்வொர்க்கின் முழு கட்டுப்பாட்டையும் வைத்திருக்கின்றன.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"நெட்வொர்க்கின் விதிகளைச் சரிபார்க்க யார் வேண்டுமானாலும் ஒரு Bitcoin முனையை இயக்கலாம். CBDC-கள் பயனர்கள் முனைகளை இயக்க அனுமதிக்காது — நீங்கள் மைய அதிகாரத்தை நம்ப வேண்டும்.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"சுய-காப்பகப்படுத்தப்பட்ட Bitcoin-ஐ யாராலும் முடக்க முடியாது. CBDC-கள் அரசாங்கங்கள் மற்றும் மத்திய வங்கிகள் உடனடியாக கணக்குகளை முடக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளன.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"நீங்கள் ஒரு",
	"bitcoin-vs-cbdc::point_8_summary_2": "பணப்பை.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"மூலம் சுய-காப்பகத்தில் வைக்கும்போது Bitcoin உங்கள் பணத்தின் முழுக் கட்டுப்பாட்டையும் தருகிறது. CBDC-கள் வங்கிகள் அல்லது அரசாங்கங்கள் போன்ற காப்பாளர்கள் உங்கள் பணத்தை உங்களுக்காக வைத்திருப்பதை நம்ப வேண்டும்.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoin-இன் பண கொள்கை குறியீட்டில் நிலையானது மற்றும் மாற்ற முடியாது. CBDC-களை அரசியல்வாதிகள் விருப்பப்படி மீண்டும் நிரல் செய்யலாம், இது",
	"bitcoin-vs-cbdc::point_9_summary_2": "பணவீக்கத்தை",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" அதிக பணம் அச்சிடப்படும்போது ஏற்படுத்துகிறது.",
	"bitcoin-vs-cbdc::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">CBDC-கள்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-crypto ─────────
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin-இன் நெறிமுறை 2009 முதல் அடிப்படையில் அப்படியே உள்ளது, கணிக்கக்கூடிய விதிகளை வழங்குகிறது. பெரும்பாலான கிரிப்டோ திட்டங்கள் தொடர்ந்து நெறிமுறைகள், டோகனோமிக்ஸ் ஆகியவற்றை மாற்றுகின்றன அல்லது புதிய பதிப்புகளாக ஃபோர்க் செய்கின்றன.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin உலகெங்கிலும் பத்தாயிரக்கணக்கான சுயாதீன முனைகளில் இயங்குகிறது. பெரும்பாலான கிரிப்டோ திட்டங்கள் ஒருதலைப்பட்ச மாற்றங்களைச் செய்யக்கூடிய அறக்கட்டளைகள், நிறுவனங்கள் அல்லது சிறிய டெவ் குழுக்களால் கட்டுப்படுத்தப்படுகின்றன.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin-க்கு 21 மில்லியன் நாணயங்கள் என்ற கடினமான வரம்பு உள்ளது — மிக அரிதான டிஜிட்டல் சொத்து. பெரும்பாலான கிரிப்டோ திட்டங்களுக்கு வரம்பற்ற வழங்கல்கள் அல்லது விருப்பப்படி புதிய டோகன்களை உருவாக்கும் வழிமுறைகள் உள்ளன, வைத்திருப்போரை நீர்த்துப் போகச் செய்கிறது.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin-க்கு ஒரு நோக்கம் உள்ளது: peer-to-peer டிஜிட்டல் பணம். யார் வேண்டுமானாலும் அதைப் புரிந்து பயன்படுத்தலாம். பெரும்பாலான கிரிப்டோ பாதுகாப்பாகப் பயன்படுத்த தொழில்நுட்ப நிபுணத்துவம் தேவைப்படும் சிக்கலான ஸ்மார்ட் ஒப்பந்தங்கள் அல்லது DeFi-ஐ உள்ளடக்கியது.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoin-இன் Proof of Work 15 ஆண்டுகளுக்கும் மேலாக முக்கிய நெட்வொர்க்கில் வெற்றிகரமான தாக்குதல் இல்லாமல் இயங்கி வருகிறது. பெரும்பாலான கிரிப்டோ திட்டங்கள் சோதனை செய்யப்படாத பரிசோதனை ஒருமித்த கருத்தைப் பயன்படுத்துகின்றன.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin டிஜிட்டல் பணம் — மதிப்புச் சேமிப்பு மற்றும் பரிமாற்ற ஊடகம். பெரும்பாலான கிரிப்டோ டோகன்கள் தெளிவற்ற உண்மையான உலக மதிப்புள்ள ஊக பயன்பாடு அல்லது நிர்வாக டோகன்கள்.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"தாக்குதலுக்குக் கீழ் Bitcoin வலுவாக வளர்கிறது மற்றும் ஒவ்வொரு நெருக்கடி, தடை மற்றும் விமர்சனத்தையும் தாங்கி வாழ்ந்துள்ளது. பெரும்பாலான கிரிப்டோ திட்டங்கள் ஒழுங்குமுறை, தொழில்நுட்ப அல்லது சந்தை அழுத்தத்தின் கீழ் சரிந்துவிடுகின்றன.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin-க்கு CEO இல்லை, நிறுவனம் இல்லை, ஒற்றை தோல்வி புள்ளி இல்லை. பெரும்பாலான கிரிப்டோ திட்டங்கள் VC-கள், குறிப்பிட்ட தலைமை அல்லது ஒரு நிறுவனத்தின் உயிர்வாழ்வைச் சார்ந்துள்ளன.",
	"bitcoin-vs-crypto::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">கிரிப்டோ</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-fine-art ─────────
	"bitcoin-vs-fine-art::point_1_summary_1":
		"ஒவ்வொரு bitcoin-உம் ஒரே மாதிரியானது மற்றும் பரிமாறக்கூடியது. ஒவ்வொரு கலைப்படைப்பும் தனித்துவமானது — வெவ்வேறு உருவாக்கம், வரலாறு, நிலை மற்றும் தோற்றம் ஆகியவை நேரடி ஒப்பீடுகளை மிகவும் கடினமாக்குகின்றன.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin யாருக்கும் அணுகக்கூடிய உலகளாவிய சந்தையில் 24/7 வர்த்தகம் செய்கிறது. நேர்த்தியான கலைக்கு சிறப்பு ஏல மாளிகைகள், தனியார் வியாபாரிகள் அல்லது கேலரிகள் தேவை மற்றும் விற்க மாதங்கள் ஆகலாம்.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin வாங்குதல் அல்லது விற்பதற்கு கட்டணங்களில் 1%-க்கும் குறைவாகவே செலவாகிறது, பெரும்பாலும் மிகவும் குறைவு. கலை விற்பனையில் வாங்குபவரின் பிரீமியங்கள், கமிஷன்கள், காப்பீடு, போக்குவரத்து மற்றும் சான்றளிப்புக் கட்டணங்களில் 30–40% அடுக்குகிறது.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin 100 மில்லியன் sats-களாக பிரிகிறது, இது எந்த அளவிலான பரிவர்த்தனைக்கும் சரியானது. எதிர் கட்சி அபாயம் இல்லாமல் ஓவியத்தின் ஒரு பகுதி அல்லது சிற்பத்தின் ஒரு மூலையை உங்களால் சொந்தமாக வைத்திருக்க முடியாது.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin சொந்தம் மற்றும் நம்பகத்தன்மையை on-chain இல் யாராலும் கிரிப்டோகிராஃபிக் முறையில் சரிபார்க்க முடியும். கலை சான்றளிப்பு விலை உயர்ந்தது, மெதுவானது, மேலும் இன்னும் வழக்கமாக போலியர்களால் ஏமாற்றப்படுகிறது — ஒரே இரவில் ஒரு கலைப்படைப்பின் மதிப்பை அழிக்கிறது.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin சரியாக காப்புப்பிரதி எடுக்கப்பட்டால், வெள்ளம், தீ, பூகம்பம் மற்றும் திருட்டு ஆகியவற்றைத் தாங்கி வாழும். நேர்த்தியான கலை அனைத்து உடல் ரீதியான அழிவுக்கும் ஆளாகக்கூடியது, மேலும் காப்பீடு அரிதாகவே அனைத்தையும் மூடுகிறது.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"இணைய இணைப்பும் கொஞ்சம் பணமும் உள்ள யார் வேண்டுமானாலும் Bitcoin வாங்கலாம். நேர்த்தியான கலை முதலீடு ஏல அணுகல் மற்றும் சிறப்பு அறிவு கொண்ட பணக்கார சேகரிப்பாளர்களுக்கு மட்டுமே வரம்புக்குட்பட்டது.",
	"bitcoin-vs-fine-art::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">நேர்த்தியான கலை</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-gold ─────────
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin-ஐ இணையம் வழியாக குறைந்த கட்டணத்தில் உடனடியாக அனுப்ப முடியும். உரிமையை மாற்ற தங்கம் உடல் ரீதியாக அனுப்பப்பட வேண்டும்.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin நீங்கள் இணையம் வழியாக மாற்றக்கூடிய டிஜிட்டல் பூர்வீக சொத்து. ஆன்லைன் தங்கம் ஒரு டிஜிட்டல் IOU — உங்களுக்குச் சொந்தமானது ஒரு காப்பாளரின் வாக்குறுதி மட்டுமே, உலோகம் அல்ல.",
	"bitcoin-vs-gold::point_3_summary_1":
		'Bitcoin-க்கு 21 மில்லியன் BTC என்ற கடினமான வரம்பு உள்ளது. தங்க வழங்கல் <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">ஆண்டுக்கு சுமார் 1.6%</a> வளர்கிறது, உங்கள் பங்கைச் சுருக்குகிறது — fiat',
	"bitcoin-vs-gold::point_3_summary_2": "பணவீக்கம்",
	"bitcoin-vs-gold::point_3_summary_3": "—ஐ விட குறைவாக — ஆனால் பணவீக்கம்தான்.",
	"bitcoin-vs-gold::point_4_summary_1":
		"தங்க விலை உயரும்போது, ​​அதிகமான தங்கம் சுரங்கப்படுத்தப்பட்டு, விலையை மீண்டும் கீழே தள்ளுகிறது. Bitcoin-இன் வழங்கல் நெகிழ்ச்சியற்றது — விலை எவ்வளவு உயர்ந்தாலும், எப்போதும் 21 மில்லியன் மட்டுமே இருக்கும்.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin நெட்வொர்க்கை பத்தாயிரக்கணக்கான சுயாதீன முனைகள் சரிபார்க்கின்றன. பெரும்பாலான உடல் தங்கம் ஒரு சில பெரிய காப்பாளர் களஞ்சியங்களில் அமர்ந்திருக்கிறது.",
	"bitcoin-vs-gold::point_6_summary_1":
		"முழு முனையை இயக்குவதன் மூலம் யார் வேண்டுமானாலும் உண்மையான Bitcoin-ஐ சரிபார்க்கலாம் — இது வெறும் ஒரு பயன்பாடு. உடல் தங்கத்தை சரிபார்க்க அதை உருக்க வேண்டும்; உள்ளே டங்ஸ்டன் இருக்கலாம்.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin 100 மில்லியன் sats-களாக பிரிகிறது, எந்த அளவிலான கொள்முதலுக்கும் சரியானது. சிறு பரிவர்த்தனைகளுக்கு தங்கத்தை எளிதில் பிரிக்க முடியாது.",
	"bitcoin-vs-gold::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">தங்கம்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-real-estate ─────────
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin உலகில் எங்கும் உடனடியாக நகர்கிறது. ரியல் எஸ்டேட் ஒரு இடத்தில் நிலையாக உள்ளது மற்றும் உள்ளூர் பொருளாதார, அரசியல் மற்றும் இயற்கை அபாயங்களுக்கு வெளிப்படுகிறது.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin 100 மில்லியன் sats-களாக பிரிகிறது. ரியல் எஸ்டேட்டை ஓரளவு விற்க முடியாது — நீங்கள் சமையலறையை மட்டும் இறக்க முடியாது அல்லது படுக்கையறையின் பாதியை வாங்க முடியாது.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin எந்த அரசாங்கமும் கட்டுப்படுத்த முடியாத பரவலாக்கப்பட்ட நெட்வொர்க்கில் இயங்குகிறது. ரியல் எஸ்டேட் கடுமையாக ஒழுங்குபடுத்தப்படுகிறது — மண்டலமாக்கல், வாடகைக் கட்டுப்பாடு, அரசு உரிமை மற்றும் கைப்பற்றுதல் அனைத்தும் பொருந்தும்.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin-க்கு பராமரிப்பு தேவையில்லை. ரியல் எஸ்டேட்டுக்கு பழுதுபார்ப்பு, புதுப்பிப்பு, காப்பீடு, சொத்து மேலாண்மை மற்றும் குத்தகைதாரர் சிக்கல்கள் தேவை.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin-க்கு தொடர்ச்சியான வரிகள் இல்லை — நீங்கள் விற்கும்போது மட்டுமே மூலதன ஆதாயங்களைச் செலுத்துகிறீர்கள். ரியல் எஸ்டேட் வருமானத்தைப் பொருட்படுத்தாமல் வருடாந்திர சொத்து வரிகளுக்குக் கடமைப்பட்டுள்ளது.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin சரியாக காப்புப்பிரதி எடுக்கப்பட்டால், தீ, வெள்ளம் மற்றும் பூகம்பத்தைத் தாங்கி வாழும். ரியல் எஸ்டேட் ஒவ்வொரு பேரிடரிலும் ஆளாகக்கூடியது, மேலும் காப்பீடு அரிதாகவே அனைத்தையும் மூடுகிறது.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"ஒவ்வொரு bitcoin-உம் ஒரே மாதிரியானது மற்றும் பரிமாறக்கூடியது. ஒவ்வொரு சொத்தும் தனித்துவமானது, விலை மற்றும் ஒப்பீடுகளை கடினமாக்குகிறது.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"இணைய அணுகல் உள்ள யாராலும் Bitcoin உலகளவில் 24/7 வர்த்தகம் செய்கிறது. ரியல் எஸ்டேட் விற்பனை உள்ளூர் வாங்குபவர்களுக்கு மட்டுமே வரம்புக்குட்பட்டது மற்றும் மூட மாதக்கணக்கான ஆவணப்பணி தேவைப்படலாம்.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin யாருக்கும் நேரடி தனிப்பட்ட உரிமையை அனுமதிக்கிறது. உங்கள் முதன்மை குடியிருப்புக்கு அப்பால் ரியல் எஸ்டேட்டை முதலீடாக வாங்குவது வீட்டு விலைகளை உயர்த்துகிறது, ஏற்புத்திறனைக் குறைத்து வீட்டு நெருக்கடிக்கு எரியூட்டுகிறது.",
	"bitcoin-vs-real-estate::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">ரியல் எஸ்டேட்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-stocks ─────────
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin நீங்கள் முழுமையாக சொந்தமாக வைத்திருக்கும் ஒரு நேரடி சொத்து. பங்குகள் ஒரு நிறுவனத்தில் பங்குகள் — அவற்றின் மதிப்பு உங்களால் கட்டுப்படுத்த முடியாத மேலாண்மை, செயல்திறன் மற்றும் முடிவுகளைச் சார்ந்துள்ளது.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin-க்கு 21 மில்லியன் BTC என்ற கடினமான வரம்பு உள்ளது. நிறுவனங்கள் எந்த நேரத்திலும் புதிய பங்குகளை வழங்கலாம், ஏற்கனவே உள்ள பங்குதாரர்களை நீர்த்துப் போகச் செய்யலாம் — fiat",
	"bitcoin-vs-stocks::point_2_summary_2": "பணவீக்கம்",
	"bitcoin-vs-stocks::point_2_summary_3":
		" பணத்தை எவ்வாறு நீர்த்துப் போகச் செய்கிறதோ அதேபோல். Bitcoin-உடன், உங்கள் பங்கு ஒருபோதும் சுருங்காது.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin-க்கு CEO இல்லை, ஒற்றை தோல்வி புள்ளியும் இல்லை. பங்குகள் தலைமையை பெரிதும் சார்ந்துள்ளன — ஒரு மோசமான முடிவு அல்லது விலகல் விலையை வீழ்த்தலாம்.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoin-இன் விலை திறந்த உலகளாவிய சந்தைகளில் இருந்து வருகிறது. பங்கு மதிப்பீடுகள் P/E விகிதங்கள் போன்ற அளவீடுகளை நம்பியுள்ளன, அவை அதிக விலையுள்ள பங்குகளை மறைக்கக்கூடும்.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin உலகெங்கிலும் 24/7 வர்த்தகம் செய்கிறது. பங்குச் சந்தைகள் வார நாட்களில் வணிக நேரத்தில் மட்டுமே திறந்திருக்கும்.",
	"bitcoin-vs-stocks::point_6_summary_1": "நீங்கள் எடுக்கலாம்",
	"bitcoin-vs-stocks::point_6_summary_2": "சுய-காப்பகம்",
	"bitcoin-vs-stocks::point_6_summary_3":
		"ஒரு எளிய பயன்பாட்டுடன் Bitcoin-இன் — தரகர் தேவையில்லை. பங்குகள் தரகு நிறுவனங்களில் அமர்ந்திருக்கின்றன, அவை தோல்வியடைந்தால் உங்களை எதிர் கட்சி அபாயத்திற்கு வெளிப்படுத்துகின்றன.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoin-இன் நிலையான வழங்கல் இது ஒரு நம்பகமான பணவீக்க பாதுகாப்பாக ஆக்குகிறது. சில பங்குகள் பணவீக்கத்தை வெல்கின்றன, மற்றவை இல்லை — உத்தரவாதம் இல்லை.",
	"bitcoin-vs-stocks::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">பங்குகள்</span> இடையேயான வேறுபாடு',

	// ───────── bitcoin-vs-visa ─────────
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin என்பது அனுமதியின்றி யார் வேண்டுமானாலும் சேரக்கூடிய திறந்த நெட்வொர்க். Visa என்பது நிதி நிறுவனங்களால் கட்டுப்படுத்தப்படும் மூடிய அமைப்பு, அது அணுகலை மறுக்கலாம் — குறிப்பாக வங்கிக்கணக்கு இல்லாதவர்கள் மற்றும் குறை-வங்கிசாதவர்களுக்கு.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin பரிவர்த்தனைகளுக்கு வியாபாரிக் கட்டணங்கள் இல்லை. Visa பொதுவாக ஒவ்வொரு பரிவர்த்தனைக்கும் வியாபாரிகளிடம் சுமார் 3% வசூலிக்கிறது — உங்கள் வணிகம் ஏற்றுக்கொள்வதன் மூலம் பணம் சேமிக்கலாம்",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin கொடுப்பனவுகள்",
	"bitcoin-vs-visa::point_2_summary_3": " அதற்குப் பதிலாக.",
	"bitcoin-vs-visa::point_3_summary_1":
		"ஒவ்வொரு Bitcoin பரிவர்த்தனையும் ஒரு பொது, தணிக்கை செய்யக்கூடிய blockchain-இல் உள்ளது. Visa வாடிக்கையாளர்கள் சுயாதீனமாக எதையும் சரிபார்க்க முடியாத மூடிய, தனியுரிம அமைப்பை இயக்குகிறது.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin-ஐ எந்த மைய அதிகாரத்தாலும் முடக்க முடியாது. Visa கணக்குகளை முடக்கலாம், பரிவர்த்தனைகளைத் தடுக்கலாம் அல்லது எந்த நேரத்திலும் சேவையை மறுக்கலாம்.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin இறுதி-தீர்வு — நீங்கள் சொந்தமாக வைத்திருப்பதை மட்டுமே செலவிட முடியும். கிரெடிட் கார்டுகள் பெரும்பாலும் ஒரு வருடத்திற்கு 25%-க்கும் அதிகமான வட்டி விகிதங்களுடன் கடனை உருவாக்குகின்றன.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin உங்களை எடுக்க அனுமதிக்கிறது",
	"bitcoin-vs-visa::point_6_summary_2": "சுய-காப்பகம்",
	"bitcoin-vs-visa::point_6_summary_3":
		"வங்கி அல்லது கொடுப்பனவு செயலி தேவையில்லாமல். கிரெடிட் கார்டுகளுக்கு எப்போதும் இடைத்தரகர்கள் தேவை.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin வணிக நேரம் இல்லாமல் உலகளவில் 24/7 வேலை செய்கிறது. Visa-வுக்கு செயல்பாட்டு நேரங்கள், பராமரிப்புப் பலகைகள் மற்றும் பரிவர்த்தனைகளைத் தடுக்கக்கூடிய புவியியல் கட்டுப்பாடுகள் உள்ளன.",
	"bitcoin-vs-visa::hero_title":
		'<span class="orange">Bitcoin</span> மற்றும் <span class="asset">Visa</span> இடையேயான வேறுபாடு',

	// ───────── buy ─────────
	"buy::buy_platform_feature_p2p": "சக-க்கு-சக",
	"buy::buy_bitcoin_guide": "Bitcoin-ஐ எவ்வாறு வாங்குவது",
	"buy::buy_step_1_header": "உங்கள் நாட்டைத் தேர்ந்தெடுக்கவும்",
	"buy::buy_step_2_header": "உங்கள் கொடுப்பனவு முறையைத் தேர்வு செய்க",
	"buy::buy_step_3_header": "உங்கள் வாங்கும் விருப்பங்கள்",
	"buy::buy_step_4_header": "உங்கள் Bitcoin-ஐ பாதுகாப்பாக சேமிக்கவும்",
	"buy::buy_header_subtitle":
		"உங்கள் முதல் Bitcoin-ஐ வாங்குவதற்கான ஒரு எளிய, படிப்படியான வழிகாட்டி.",
	"buy::buy_howto_name": "Bitcoin-ஐ எவ்வாறு வாங்குவது",
	"buy::buy_meta_description":
		"எங்கள் படிப்படியான வழிகாட்டியுடன் Bitcoin-ஐ பாதுகாப்பாக எவ்வாறு வாங்குவது என்பதை அறிக. உங்களுக்கான சிறந்த Bitcoin வாங்கும் விருப்பங்களைக் கண்டறிய உங்கள் நாடு மற்றும் கொடுப்பனவு முறையைத் தேர்ந்தெடுக்கவும்.",
	"buy::buy_step_1_eyebrow": "படி 1",
	"buy::buy_step_2_eyebrow": "படி 2",
	"buy::buy_step_3_eyebrow": "படி 3",
	"buy::buy_step_4_eyebrow": "படி 4",
	"buy::buy_storage_cta_label": "அடுத்த படி",
	"buy::sources_bisq": "Bisq — பரவலாக்கப்பட்ட சக-க்கு-சக Bitcoin பரிமாற்றம்",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — உலகளாவிய Bitcoin ATM அடைவு",
	"buy::sources_kraken": "Kraken — நிறுவப்பட்ட Bitcoin பரிமாற்றம்",
	"buy::sources_relai":
		"Relai — சுவிஸ் Bitcoin-மட்டும் சுய-காப்பக பயன்பாடு",
	"buy::sources_river":
		"River — Bitcoin-மட்டும் வாங்குதல், சுரங்கம் மற்றும் காப்பு",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network ஆதரவுடன் Bitcoin வாங்கவும்",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin-மட்டும் டாலர்-விலை சராசரி",

	// ───────── common ─────────
	"common::common_language_switcher_add_language": "மொழியைச் சேர்",
	"common::common_next_buy_bitcoin": "Bitcoin வாங்கவும்",
	"common::common_next_buy_bitcoin_desc":
		"Bitcoin-ஐ பாதுகாப்பாக எவ்வாறு வாங்குவது என்பதை அறியவும்",
	"common::common_next_calculate": "உங்கள் பணவீக்கத்தைக் கணக்கிடுங்கள்",
	"common::common_next_calculate_desc":
		"காலப்போக்கில் உங்கள் சம்பளத்தை பணவீக்கம் எவ்வாறு பாதிக்கிறது என்பதைக் காண்க",
	"common::common_next_get_wallet": "ஒரு பணப்பையைப் பெறுங்கள்",
	"common::common_next_get_wallet_desc":
		"உங்கள் முதல் Bitcoin பணப்பையைப் பெறுங்கள் — இது இலவசம்",
	"common::common_next_keep_learning": "தொடர்ந்து கற்கவும்",
	"common::common_next_keep_learning_desc":
		"Bitcoin உலகை எவ்வாறு மேம்படுத்துகிறது என்பதைப் பாருங்கள்",
	"common::common_source_bls_cpi":
		"அமெரிக்க தொழிலாளர் புள்ளியியல் பணியகம் — நுகர்வோர் விலைக் குறியீடு (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — பண வழங்கல் (வகை குறியீடு)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		'James Lavish — "Can a Treasury Auction Fail?"',
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "அடுத்தது என்ன?",
	"common::common_sticker_files_mission_5": "ஒரு பேக்கைக் கேட்கவும்",
	"common::common_site_tagline": "அனைவருக்கும் Bitcoin கல்வி.",
	"common::common_source_btc_map":
		"BTC Map — Bitcoin ஏற்கும் வணிகர்களின் உலகளாவிய அடைவு",
	"common::common_source_btcpayserver":
		"BTCPay Server — இலவச, திறந்த-மூல, சுய-ஹோஸ்ட் செய்யப்பட்ட Bitcoin கொடுப்பனவு செயலி",
	"common::common_source_oshi":
		"Oshi — வியாபாரிகளுக்கான Bitcoin வெகுமதி தளம்",
	"common::common_source_strike_business":
		"Strike — வணிகங்களுக்கான Bitcoin & Lightning கொடுப்பனவுகள்",
	"common::common_sources_group_bitcoin": "Bitcoin தரவு",
	"common::common_sources_group_cpi": "பணவீக்கம் / நுகர்வோர் விலைக் குறியீடு",
	"common::common_sources_group_debt": "அரசாங்கக் கடன்",
	"common::common_sources_group_money": "பண வழங்கல் தரவு",
	"common::common_sources_group_stories": "உண்மையான-உலக உதாரணங்கள்",
	"common::common_sticker_files_mission_6": "இலவசமாக ஆங்கில ஸ்டிக்கர்களின்.",
	"common::common_sticker_files_next_flyers_label": "துண்டுப்பிரசுரங்கள்",
	"common::common_sticker_files_next_flyers_title":
		"ஒரு Bitcoin துண்டுப்பிரசுரத்தை அச்சிடுங்கள்",
	"common::common_sticker_files_next_languages_label": "ஸ்டிக்கர் கோப்புகள்",
	"common::common_sticker_files_next_languages_title":
		"பிற மொழிகளில் ஸ்டிக்கர் கோப்புகளைப் பாருங்கள்",
	"common::common_sticker_files_print_these": "இவற்றை 1 கிளிக்கில் அச்சிடுங்கள்",
	"common::common_sticker_name_bdhi_black":
		'"Bitcoin Doesn\'t Have Inflation" ஸ்டிக்கர் (கருப்பு)',
	"common::common_sticker_name_bdhi_orange":
		'"Bitcoin Doesn\'t Have Inflation" ஸ்டிக்கர் (ஆரஞ்சு)',
	"common::common_sticker_name_caution":
		'"Caution! Melting Ice Cube" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_cure_inflation":
		'"Cure Inflation" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_danger":
		'"Danger! Inflation Ahead" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_fix":
		'"Fix The Money, Fix The World" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_got_inflation":
		'"Got Inflation?" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_study": '"Study Bitcoin" ஸ்டிக்கர்',
	"common::common_sticker_name_warning":
		'"Warning! Inflation is Stealing Your Savings" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_name_what_if":
		'"What if your money didn\'t have inflation?" Bitcoin ஸ்டிக்கர்',
	"common::common_sticker_tips_heading": "ஸ்டிக்கர் குறிப்புகள்",
	"common::common_sticker_tips_intro":
		"உங்கள் ஸ்டிக்கர்களை அச்சிட்டவுடன், அவை பார்க்கப்படும் இடங்களில் வைக்கவும்! நல்ல ஸ்டிக்கர் இடங்கள்:",
	"common::common_sticker_tips_list_1": "மக்கள் பார்க்கும் பொது இடங்களில்",
	"common::common_sticker_tips_list_2":
		"விரைவாக அகற்றப்படும் வாய்ப்பு இல்லாத இடங்களில் (ஸ்டிக்கர்கள் நிரந்தர சேதத்தை ஏற்படுத்தாது)",
	"common::common_sticker_tips_list_3":
		"எளிதில் ஒட்டக்கூடிய மேற்பரப்புகளில் (உலோகம், பிளாஸ்டிக், கண்ணாடி)",
	"common::common_sticker_tips_list_4":
		"தனியார் சொத்து, அடையாளப் பலகைகள், ATMகள் அல்லது எரிவாயு பம்புகளை மூட வேண்டாம்",
	"common::common_stickers_printer_prefix": "நாங்கள் பயன்படுத்துவது",
	"common::common_stickers_printer_suffix":
		"ஆனால் நீங்கள் எந்த ஸ்டிக்கர் நிறுவனத்தையும் பயன்படுத்தலாம்.",

	// stickers dimensions are kept identical (numerics + cm/in units)
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

	// ───────── compound-inflation-calculator ─────────
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — அனைத்து நகர்ப்புற நுகர்வோருக்கான நுகர்வோர் விலைக் குறியீடு",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 பண வழங்கல்",
	"compound-inflation-calculator::cic_calculator_heading":
		"உங்கள் பணவீக்க இடைவெளியைக் கணக்கிடுங்கள்",
	"compound-inflation-calculator::cic_cta_label": "அடுத்த படி",
	"compound-inflation-calculator::cic_hero_subtitle":
		"பணவீக்கத்துடன் ஒத்துப்போக உங்கள் சம்பளம் எவ்வளவு உயர வேண்டும் என்பதைப் பாருங்கள்.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"மேலும் தலைப்புகளை ஆராயுங்கள்",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Bitcoin பணம், சுதந்திரம், ஆற்றல் மற்றும் பலவற்றுடன் எவ்வாறு இணைகிறது என்பதைப் பாருங்கள்.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"பணவீக்கம் எவ்வாறு செயல்படுகிறது என்பதை அறியவும்",

	// ───────── get-involved ─────────
	"get-involved::get_involved_and_help_spread_bitcoin":
		"ஈடுபட்டு Bitcoin-ஐப் பரப்புங்கள்",
	"get-involved::get_involved_business_content_1":
		"Bitcoin சுற்றோட்டப் பொருளாதாரத்தை உருவாக்க உதவ விரும்புகிறீர்களா? உள்ளூர் வணிகங்கள் Bitcoin கொடுப்பனவுகளை ஏற்கத் தொடங்க உதவுவதே எளிய வழி.",
	"get-involved::get_involved_business_content_2":
		"அதற்குத் திறந்திருக்கக்கூடிய ஒரு வணிகம் தெரியுமா? உரிமையாளரை எங்கள்",
	"get-involved::get_involved_business_content_3":
		"Bitcoin வணிகப் பக்கத்திற்கு அனுப்பவும்.",
	"get-involved::get_involved_description":
		"எங்கள் இலவச வளங்கள் Bitcoin ஏற்புத்திறனைப் பரப்புவதை எளிதாக்குகின்றன. ஸ்டிக்கர்கள், துண்டுப்பிரசுரங்கள், வணிகங்களுக்கான 'Bitcoin Accepted Here' ஸ்டிக்கர்கள் மற்றும் யார் வேண்டுமானாலும் பங்களிக்கக்கூடிய திறந்த-மூல குறியீடு.",
	"get-involved::get_involved_header": "ஈடுபட்டு Bitcoin-ஐப் பரப்புங்கள்.",
	"get-involved::get_involved_intro_5":
		"அதை மாற்ற நீங்கள் உதவலாம். உங்களைச் சுற்றியுள்ளவர்களுக்கு Bitcoin கொண்டுவரும் நம்பிக்கையைப் பரப்புவதை எளிதாக்கும் பல இலவச வளங்களை நாங்கள் உருவாக்கியுள்ளோம்.",
	"get-involved::get_involved_biz_stickers_note":
		"Bitcoin ஏற்கனவே ஏற்கிறீர்களா? எங்கள் இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்களுடன் வாடிக்கையாளர்களுக்குத் தெரியப்படுத்துங்கள். அமெரிக்கா அல்லது கனடாவில் எந்த முகவரிக்கும் ஒரு பேக்கை அனுப்புவோம், அல்லது உலகில் எங்கும் உங்கள் சொந்தத்தை அச்சிடலாம்.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Accepted here ஸ்டிக்கர்கள்",
	"get-involved::get_involved_card_biz_stickers_source":
		"ஆதாரம்: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"உங்கள் வணிகத்திற்கான இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்கள்",
	"get-involved::get_involved_card_business_label": "வணிகத்திற்கான Bitcoin",
	"get-involved::get_involved_card_business_source":
		"ஆதாரம்: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Bitcoin கொடுப்பனவுகளை ஏற்கத் தொடங்க ஒரு வணிகத்திற்குத் தேவையான அனைத்தும்",
	"get-involved::get_involved_card_flyers_label":
		"அச்சிடக்கூடிய துண்டுப்பிரசுரங்கள்",
	"get-involved::get_involved_card_flyers_source":
		"ஆதாரம்: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"இலவச Bitcoin துண்டுப்பிரசுரத்தைப் பதிவிறக்கி அச்சிடுங்கள்",
	"get-involved::get_involved_card_github_label": "திறந்த-மூல",
	"get-involved::get_involved_card_github_source": "ஆதாரம்: GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub-இல் bitcoin.rocks-க்கு பங்களிக்கவும்",
	"get-involved::get_involved_card_stickers_label": "இலவச ஸ்டிக்கர்கள்",
	"get-involved::get_involved_card_stickers_source":
		"ஆதாரம்: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"உங்கள் வீட்டு வாசலுக்கு அனுப்பப்படும் இலவச Bitcoin ஸ்டிக்கர் பேக்கைக் கேட்கவும்",
	"get-involved::get_involved_flyers_content_1":
		"உங்கள் சமூகத்திற்கு Bitcoin-ஐ அறிமுகப்படுத்த எளிதான வழிகளில் ஒன்று துண்டுப்பிரசுரங்கள். இலவச அச்சிடக்கூடிய Bitcoin துண்டுப்பிரசுரத்தைப் பதிவிறக்கி, விரும்பும் எண்ணிக்கையில் நகல்களை அச்சிட்டு, சமூகப் பலகைகள், காபி கடைகள், சந்திப்புகள் அல்லது மக்கள் கூடும் பிற இடங்களில் ஒட்டுங்கள்.",
	"get-involved::get_involved_flyers_content_2":
		"ஒவ்வொரு துண்டுப்பிரசுரத்திலும் ஒரு கவர்ச்சிகரமான தலைப்பு மற்றும் ஆர்வமுள்ள வாசகர்களை bitcoin.rocks-க்கு அனுப்பி மேலும் அறிய QR குறியீடு உள்ளது.",
	"get-involved::get_involved_flyers_content_3":
		"ஸ்டிக்கர்களைப் போலல்லாமல், துண்டுப்பிரசுரங்களை உலகில் எங்கிருந்தும் தேவைக்கேற்ப அச்சிடலாம் — உங்களுக்குத் தேவையெல்லாம் ஒரு பிரிண்டர் மற்றும் சில நிமிடங்கள்.",
	"get-involved::get_involved_flyers_header":
		"ஒரு துண்டுப்பிரசுரத்தை அச்சிட்டு ஒட்டுங்கள்",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks-இலிருந்து இலவச அச்சிடக்கூடிய Bitcoin துண்டுப்பிரசுரத்தின் முன்னோட்டம்",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks என்பது MIT License-இன் கீழ் உரிமம் பெற்ற இலவச, திறந்த-மூல திட்டமாகும். கல்வியின் மூலம் Bitcoin ஏற்புத்திறனை விரைவுபடுத்துவது எங்கள் நோக்கம் — மேலும் எங்களால் தனியாக அதைச் செய்ய முடியாது.",
	"get-involved::get_involved_github_content_2":
		"நீங்கள் ஒரு டெவலப்பர், வடிவமைப்பாளர், எழுத்தாளர் அல்லது மொழிபெயர்ப்பாளர் என எதுவாக இருந்தாலும், உங்களுக்கு உதவ ஒரு வழி உள்ளது. உலகெங்கிலும் உள்ள மக்கள் தங்கள் தாய்மொழியில் Bitcoin பற்றி அறிய எங்கள் உள்ளடக்கத்தை அதிக மொழிகளில் மொழிபெயர்க்கக்கூடிய பங்களிப்பாளர்களை நாங்கள் சிறப்பாக வரவேற்கிறோம்.",
	"get-involved::get_involved_github_content_3":
		"களஞ்சியத்தை ஃபோர்க் செய்யுங்கள், ஒரு pull request திறக்கவும், ஒரு issue பதிவு செய்யவும், அல்லது உங்கள் ஆதரவைக் காட்ட திட்டத்தை நட்சத்திரமிட்டுக் கொள்ளுங்கள். ஒவ்வொரு பங்களிப்பும் Bitcoin-ஐ அதிகம் பேருக்கு கொண்டு செல்கிறது.",
	"get-involved::get_involved_github_header": "GitHub-இல் பங்களிக்கவும்",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks-இலிருந்து இலவச Bitcoin உரை ஸ்டிக்கர் பேக்",

	// ───────── index ─────────
	"index::home_btn_saving": "சேமிப்பு",
	"index::home_card_label_art_1": "ஒப்பிடுவோம்",
	"index::home_card_label_art_2": "செய்தியைப் பரப்புங்கள்",
	"index::home_card_label_art_3": "தெரு கலை",
	"index::home_card_label_bank_runs": "முழு-இருப்பு அமைப்பு",
	"index::home_card_label_bonds": "ஒப்பிடுவோம்",
	"index::home_card_label_business_1": "என்ன வித்தியாசம்?",
	"index::home_card_label_business_2": "Bitcoin கொடுப்பனவுகளை ஏற்கவும்",
	"index::home_card_label_cash": "ஒப்பிடுவோம்",
	"index::home_card_label_cbdc": "திறந்ததா மூடியதா?",
	"index::home_card_label_coding_1": "ஊடாடும் பயிற்சி",
	"index::home_card_label_coding_2": "வன்பொருள் கட்டுங்கள்",
	"index::home_card_label_coding_3": "குறியீட்டுப் புதிர்கள்",
	"index::home_card_label_crowdfunding_1": "EndSARS போராட்டங்கள்",
	"index::home_card_label_crowdfunding_2": "தடுக்க முடியாத பணம்",
	"index::home_card_label_crowdfunding_3": "உங்கள் திட்டத்திற்கு நிதியளிக்கவும்",
	"index::home_card_label_crypto": "என்ன வித்தியாசம்?",
	"index::home_card_label_energy_1": "கட்ட நிலைப்படுத்தல்",
	"index::home_card_label_energy_4": "தேவை பதில்",
	"index::home_card_label_energy_5": "கிராமப்புற மின்மயமாக்கல்",
	"index::home_card_label_energy_6": "புதுப்பிக்கத்தக்க ஊக்கங்கள்",
	"index::home_card_label_environment_1": "மீத்தேன் குறைப்பு",
	"index::home_card_label_environment_2": "தேசியப் பூங்காவைக் காப்பாற்றியது",
	"index::home_card_label_environment_3": "மிகப் பசுமையான தொழில்",
	"index::home_card_label_environment_4": "எரிக்கப்பட்ட எரிவாயுவைக் குறைக்கிறது",
	"index::home_card_label_equality_1": "நம்பிக்கையும் வாய்ப்பும்",
	"index::home_card_label_equality_2": "ஒரு விளையாட்டை மாற்றுவது",
	"index::home_card_label_food_1": "உணவு விலைகள்",
	"index::home_card_label_food_2": "பண்ணைகள் & மண்",
	"index::home_card_label_freedom_1": "சர்வாதிகார ஆட்சிகள்",
	"index::home_card_label_freedom_2": "ஒரு தனித்துவமான கருவி",
	"index::home_card_label_get_started_1": "தொடக்க அடிப்படைகள்",
	"index::home_card_label_get_started_2": "உங்கள் முதல் பணப்பை",
	"index::home_card_label_get_started_3": "Bitcoin வாங்கவும்",
	"index::home_card_label_gold": "எது சிறந்தது?",
	"index::home_card_label_housing_1": "ஏற்புத்திறன் வீட்டுவசதி",
	"index::home_card_label_human_rights_1": "மனித உரிமைகள் அமலாக்கம்",
	"index::home_card_label_human_rights_2": "அடிமட்ட ஏற்புத்திறன்",
	"index::home_card_label_human_rights_3": "உலகளாவிய தாக்கம்",
	"index::home_card_label_inflation": "Bitcoin சிறந்த பணம்",
	"index::home_card_label_networks_1": "நேரடி நெட்வொர்க் காட்சி",
	"index::home_card_label_networks_2": "ஒப்பிடுவோம்",
	"index::home_card_label_payments_1": "என்ன வித்தியாசம்?",
	"index::home_card_label_payments_2": "வேகமான & மலிவான கொடுப்பனவுகள்",
	"index::home_card_label_payments_3": "பணப் பரிமாற்றங்கள்",
	"index::home_card_label_payments_4": "கொடுப்பனவுகளைப் பெறுங்கள்",
	"index::home_card_label_politics_1": "அரசியல் முரண்பாடு",
	"index::home_card_label_politics_2": "நடவடிக்கை எடுக்கவும்",
	"index::home_card_label_property_rights_1": "ஒப்பிடுவோம்",
	"index::home_card_label_property_rights_2": "உண்மையான உரிமை",
	"index::home_card_label_salary": "உங்கள் சம்பளத்தைப் பாதுகாக்கவும்",
	"index::home_card_label_self_custody_1": "Bitcoin பணப்பை வழிகாட்டி",
	"index::home_card_label_self_custody_2": "மிக முக்கியமான படி",
	"index::home_card_label_self_custody_3": "இறையாண்மைப் பணம்",
	"index::home_card_label_war_1": "முடிவில்லாத போரை முடிக்கவும்",
	"index::home_card_label_war_2": "வீரர்களுக்கு உதவுதல்",
	"index::home_card_label_war_3": "போர்க்கால தப்பித்தல்",
	"index::home_h1":
		"Bitcoin ஒரு சிறந்த உலகை உருவாக்கும் சிறந்த பணம்.",
	"index::home_nav_about": "பற்றி",
	"index::home_nav_get_involved": "ஈடுபடுங்கள்",
	"index::home_nav_learn": "கற்றுக்கொள்ளுங்கள்",
	"index::home_source_prefix": "ஆதாரம்:",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const k = e.namespace + "::" + e.key;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			e.targetTranslation = T[k];
			filled++;
			continue;
		}
	}

	// list still-null entries (only for logging, not error)
	for (const e of report.entries) {
		if (e.targetTranslation === null) unmatched.push(e.namespace + "::" + e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (ta): filled ${filled}, already-done ${skipped}, still-null ${unmatched.length}`,
	);
}

main();
