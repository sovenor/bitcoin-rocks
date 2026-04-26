#!/usr/bin/env node
/**
 * Tamil manifest refresh — part 2.
 *
 * Covers: business/*, lightning, nostr/*, sticker-files/index, stickers,
 * sticker-success, sticker-language-success, wallets, flyers.
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
	// ───────── business/accounting ─────────
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli கணக்கியல் சேவைகள்",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"உங்கள் கணக்குகளில் Bitcoin ஏற்பதற்கான ஒரு எளிய-தமிழ் வழிகாட்டி — கலப்பு பணப்பைகள், செலவின அடிப்படை, மூலதன ஆதாயங்கள், மற்றும் ஒரு கணக்காளரை எப்போது அழைக்க வேண்டும் என்பது.",
	"business/accounting::accounting_s1_c1":
		"Bitcoin ஏற்க எளிய வழி, ஒரு கொடுப்பனவு வந்த உடனேயே நீங்கள் பெறும் Bitcoin-இன் 100%-ஐ டாலர்களுக்கு (அல்லது உங்கள் உள்ளூர் நாணயத்திற்கு) தானாக விற்கும் ஒரு கலப்பு பணப்பையைப் பயன்படுத்துவதே.",
	"business/accounting::accounting_s1_c2":
		"இந்த அமைப்புடன், உங்கள் கணக்குகள் இன்று இருப்பது போலவே இருக்கும் — இறுதி எண் ஒவ்வொரு முறையும் டாலர்களில் இருக்கும். செலவின அடிப்படை இல்லை, மூலதன ஆதாயங்கள் இல்லை, புதிய spreadsheet-கள் இல்லை.",
	"business/accounting::accounting_s2":
		"நீங்கள் சில Bitcoin வைத்திருந்தால்: உங்கள் செலவின அடிப்படையைக் கண்காணித்தல்",
	"business/accounting::accounting_s2_c1":
		"சில வணிகங்கள் தாங்கள் பெறும் Bitcoin-இன் ஒரு பகுதியை எல்லாவற்றையும் தானாக மாற்றாமல் வைத்திருக்க தேர்வு செய்கின்றன. அப்படியானால், முக்கிய கூடுதல் படி உங்கள் செலவின அடிப்படையைக் கண்காணிப்பதே — நீங்கள் பெற்ற நாளில் ஒவ்வொரு Bitcoin கொடுப்பனவின் டாலர் மதிப்பு.",
	"business/accounting::accounting_s2_c2":
		"உங்கள் வணிகத்தை முழுவதும் Bitcoin-இல் நினைத்தாலும், பெரும்பாலான வரி அதிகாரிகள் இன்னும் டாலர் மதிப்பு அறிவிக்கப்பட விரும்புகிறார்கள். நற்செய்தி: ஒரு பரிவர்த்தனைக்கு இரண்டு எண்கள் மட்டுமே — பெறப்பட்ட Bitcoin அளவு மற்றும் அன்றைய தினம் அதன் டாலர் மதிப்பு.",
	"business/accounting::accounting_s2_c3":
		"ஒவ்வொரு நாளும் விலைகளைச் சரிபார்க்க வேண்டியதில்லை என்பதால், தேடுதலை தானியக்கமாக்க கீழே உள்ள கருவிகளைப் பயன்படுத்தவும்.",
	"business/accounting::accounting_s3":
		"நீங்கள் வைத்திருக்கும் Bitcoin-ஐ செலவிடுதல் அல்லது விற்றல்",
	"business/accounting::accounting_s3_c1":
		"ஒவ்வொரு கொடுப்பனவையும் தானாக டாலர்களுக்கு மாற்றினால், இந்தப் பிரிவைத் தவிர்க்கவும் — அது உங்களுக்குப் பொருந்தாது.",
	"business/accounting::accounting_s3_c2":
		"நீங்கள் சில Bitcoin வைத்திருந்து பின்னர் அதை செலவிட அல்லது விற்க முடிவு செய்தால், விற்பனை விலையை அதே செலவின-அடிப்படை spreadsheet-இல் சேர்க்கவும். நீங்கள் பெற்றபோது Bitcoin மதிப்பு என்ன, செலவிடும்போது அல்லது விற்கும்போது அது மதிப்பு என்ன என்பதற்கு இடையேயான வேறுபாடு ஒரு மூலதன ஆதாயம் அல்லது இழப்பு.",
	"business/accounting::accounting_s3_c3": "இரண்டு விரைவான உதாரணங்கள்:",
	"business/accounting::accounting_s4":
		"Bitcoin பேசும் ஒரு நிபுணர் தேவையா?",
	"business/accounting::accounting_s4_c1":
		"இதை மற்றவருக்குக் கையளிக்க விரும்பினால் — அல்லது உங்கள் Bitcoin கணக்கியல் ஒரு கலப்பு பணப்பையால் கையாள முடியாத அளவுக்கு சிக்கலானதாக இருந்தால் — வணிகங்களுக்கான Bitcoin கணக்கியலில் நிபுணத்துவம் பெற்ற Satoshi Pacioli கணக்கியல் சேவைகளை நாங்கள் மிகவும் பரிந்துரைக்கிறோம்.",
	"business/accounting::bitcoin_business_accounting_guide":
		"உங்கள் வணிகத்திற்கான Bitcoin கணக்கியல்",
	"business/accounting::accounting_card_bpr_label": "BITCOIN விலை",
	"business/accounting::accounting_card_bpr_title":
		"Bitcoin-இன் தற்போதைய அல்லது வரலாற்று டாலர் விலையைப் பாருங்கள்",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN கணக்காளர்கள்",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL இறக்குமதி",
	"business/accounting::accounting_card_spreadsheet_title":
		"Bitcoin விலைகளை Excel-இல் தானாக இழுக்கவும்",
	"business/accounting::accounting_card_wallets_label": "கலப்பு பணப்பைகள்",
	"business/accounting::accounting_card_wallets_title":
		"எங்கள் பரிந்துரைக்கப்பட்ட வணிக பணப்பைகளைப் பாருங்கள்",
	"business/accounting::accounting_disclaimer":
		"இந்த வழிகாட்டி தகவல் நோக்கங்களுக்காக மட்டுமே, இது வரி ஆலோசனையாக கருதப்படக்கூடாது. உங்கள் சூழ்நிலைக்கு குறிப்பிட்ட வரி ஆலோசனைக்கு, தகுதிவாய்ந்த கணக்காளரை அணுகவும்.",
	"business/accounting::accounting_disclaimer_label": "தயவுசெய்து கவனிக்கவும்",
	"business/accounting::accounting_example_feb_1": "பிப்ரவரி 1",
	"business/accounting::accounting_example_gain_badge": "மூலதன ஆதாயம்",
	"business/accounting::accounting_example_gain_explain":
		"நீங்கள் $10 மூலதன ஆதாயத்தைப் பதிவுசெய்கிறீர்கள்.",
	"business/accounting::accounting_example_jan_1": "ஜனவரி 1",
	"business/accounting::accounting_example_loss_badge": "மூலதன இழப்பு",
	"business/accounting::accounting_example_loss_explain":
		"நீங்கள் $10 மூலதன இழப்பைப் பதிவுசெய்கிறீர்கள்.",
	"business/accounting::accounting_example_received_label": "பெறப்பட்டது",
	"business/accounting::accounting_example_sold_label":
		"விற்கப்பட்டது அல்லது செலவிடப்பட்டது",
	"business/accounting::accounting_hero_subtitle":
		"உங்கள் வணிகத்தில் Bitcoin ஏற்பது உங்கள் கணக்கியலை சிக்கலாக்க வேண்டிய அவசியமில்லை. இதோ சுருக்கமான பதிப்பு — மற்றும் அதை வலியில்லாமல் ஆக்கும் கருவிகள் மற்றும் நிபுணர்கள்.",
	"business/accounting::accounting_intro_c1":
		"நீங்கள் ஏற்கனவே பணம் அல்லது அட்டையை ஏற்றுக்கொண்டால், உங்கள் வணிக புத்தகங்களில் Bitcoin சேர்ப்பது தோன்றுவதை விட எளிது. உங்களுக்கு இரண்டு வழிகள் உள்ளன: ஒவ்வொரு Bitcoin கொடுப்பனவும் வந்த உடனேயே டாலர்களாக தானாக மாற்றவும் (புதிய கணக்கியல் தேவையில்லை), அல்லது சிலவற்றை Bitcoin-ஆக வைத்திருக்கவும் (கண்காணிக்க சில கூடுதல் எண்கள்).",
	"business/accounting::accounting_intro_c2":
		"இந்த வழிகாட்டி இரண்டையும் வழிநடத்துகிறது — எனவே உங்கள் வணிகத்திற்கு பொருந்துவதைத் தேர்வுசெய்து நம்பிக்கையுடன் Bitcoin ஏற்கத் தொடங்கலாம்.",
	"business/accounting::accounting_s1": "எளிய வழி: டாலர்களாக தானாக மாற்றவும்",
	"business/accounting::accounting_s3_c6":
		"அவ்வளவுதான். மற்ற எந்த மதிப்பேற்றும் அல்லது மதிப்புக்குறையும் சொத்து கணக்கிடப்படும் முறைக்கு அடிப்படை கணிதம் ஒரே மாதிரியாக உள்ளது.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoin-இன் தற்போதைய & வரலாற்று டாலர் விலை",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli கணக்கியல் சேவைகள் — வணிகங்களுக்கான Bitcoin கணக்கியல்",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel-இல் கிரிப்டோகரன்சி விலைகளை இறக்குமதி செய்யவும்",

	// ───────── business/faq ─────────
	"business/faq::faq_hero_subtitle":
		"Bitcoin ஏற்கத் தொடங்குவதற்கு முன் வியாபாரிகள் அதிகம் கேட்கும் கேள்விகளுக்கான சுருக்கமான பதில்கள் — கட்டணங்கள், தீர்வு, பணப்பைகள், chargebacks, செலவு மற்றும் பல.",
	"business/faq::faq_intro_c1":
		"பதிலை விரிவாக்க கீழே உள்ள எந்தக் கேள்வியையும் தட்டவும். நீங்கள் Bitcoin ஏற்கத் தொடங்க தயாராக இருக்கும்போது, பக்கத்தின் கீழே உள்ள வணிக வளங்கள் ஒவ்வொரு படியிலும் உங்களை வழிநடத்தும்.",

	// ───────── business/index ─────────
	"business/index::biz_label_accounting": "கணக்கியல்",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "வியாபாரி வரைபடங்கள்",
	"business/index::biz_label_rewards": "வெகுமதிகள்",
	"business/index::biz_label_stickers": "ஸ்டிக்கர்கள்",
	"business/index::biz_label_wallets": "பணப்பைகள்",
	"business/index::biz_meta_description":
		"குறைந்த கட்டணங்கள், உடனடி தீர்வு, chargebacks இல்லை, மேலும் வாடிக்கையாளர்களுக்காக உங்கள் வணிகத்தில் Bitcoin ஏற்கவும்.",
	"business/index::business_hero_subtitle":
		"குறைந்த கட்டணங்களுடன் கொடுப்பனவுகளை ஏற்றுக்கொள்ளுங்கள், உடனடியாக பணம் பெறுங்கள், மற்றும் மில்லியன் கணக்கான புதிய வாடிக்கையாளர்களை அடையுங்கள் — பூஜ்ய ஒப்பந்தங்கள் மற்றும் பூஜ்ய மறைக்கப்பட்ட செலவுகளுடன்.",
	"business/index::business_intro_c1":
		"Bitcoin உங்கள் வணிகத்திற்கு வேகமான, மலிவான, மிகவும் தனிப்பட்ட பணம் பெறும் வழியை வழங்குகிறது. இடைத்தரகர்கள் இல்லை. Chargebacks இல்லை. ஒப்பந்தங்கள் இல்லை. வெறும் வினாடிகளில் தீர்வு செய்யப்படும் பணம், உங்கள் வாடிக்கையாளர்களிடமிருந்து நேரடியாக உங்களுக்கு.",
	"business/index::business_intro_c2":
		"கீழே Bitcoin ஏன் வணிகத்திற்கு நல்லது என்பதன் சுருக்கமான பதிப்பு உள்ளது — அதற்குக் கீழே, இன்றே ஏற்கத் தொடங்க உங்களுக்குத் தேவையான ஒவ்வொரு வளமும் உள்ளது.",
	"business/index::business_resources_heading":
		"Bitcoin ஏற்க உங்களுக்குத் தேவையான அனைத்தும்",
	"business/index::business_resources_intro":
		"உங்கள் சொந்த வேகத்தில் இந்த வளங்கள் வழியாக வேலை செய்யுங்கள். ஒவ்வொன்றும் ஒரு குறுகிய, நடைமுறை வழிகாட்டி.",

	// ───────── business/maps ─────────
	"business/maps::biz_maps_form_header": "உங்கள் வணிகத்தைப் பற்றி எங்களுக்குச் சொல்லுங்கள்",
	"business/maps::biz_maps_form_intro":
		"உங்களைப் பட்டியலிட சில விவரங்கள் மட்டுமே தேவை. உங்கள் வணிகத்தை வரைபடங்களுக்கு சமர்ப்பிக்க போதுமான நேரம் மட்டுமே முகவரி தரவு வைக்கப்படுகிறது.",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map-இல் இலவசமாக உங்கள் வணிகத்தைப் பட்டியலிடுங்கள் — Bitcoin ஏற்கும் வியாபாரிகளின் திறந்த, உலகளாவிய அடைவு — அதனால் அருகிலுள்ள Bitcoiners உங்களைக் கண்டுபிடித்து உங்கள் வணிகத்தில் Bitcoin செலவிட முடியும்.",
	"business/maps::biz_maps_hero_title":
		"உங்கள் வணிகத்தை Bitcoin வியாபாரி வரைபடங்களில் வையுங்கள்",
	"business/maps::biz_maps_intro_c1":
		"Bitcoiners செலவிட இடங்களைத் தீவிரமாகத் தேடுகிறார்கள். உங்கள் வணிகத்தை வரைபடத்தில் வைப்பது அருகில் சாப்பிட, கடைக்குச் செல்ல அல்லது தங்க இடம் தேடும் ஒவ்வொரு Bitcoin பயனரின் முன்னும் உங்களை வைக்கிறது — உங்களுக்கு பூஜ்ய செலவில்.",
	"business/maps::biz_maps_intro_c2":
		"கீழே உள்ள குறுகிய படிவத்தை நிரப்புங்கள், உங்களுக்காக BTC Map மற்றும் பிற Bitcoin வியாபாரி வரைபடங்களுக்கு உங்கள் வணிகத்தை சமர்ப்பிப்போம்.",
	"business/maps::biz_maps_meta_description":
		"BTC Map மற்றும் பிற Bitcoin வியாபாரி வரைபடங்களில் இலவசமாக உங்கள் வணிகத்தைப் பட்டியலிடுங்கள், அதனால் அருகிலுள்ள Bitcoiners உங்களைக் கண்டுபிடிக்க முடியும்.",
	"business/maps::biz_maps_placeholder_address": "தெரு முகவரி",
	"business/maps::biz_maps_placeholder_category":
		"வகை (எ.கா. உணவகம், காபி கடை, ஹோட்டல்)",
	"business/maps::biz_maps_placeholder_city": "நகரம்",
	"business/maps::biz_maps_placeholder_country": "நாடு",
	"business/maps::biz_maps_placeholder_name": "வணிகப் பெயர்",
	"business/maps::biz_maps_placeholder_region": "மாநிலம் / பகுதி",
	"business/maps::biz_maps_placeholder_website": "வலைத்தளம் (விரும்பினால்)",
	"business/maps::biz_maps_view_map_cta": "BTC Map-ஐப் பார்க்கவும்",

	// ───────── business/maps-success ─────────
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map-ஐப் பார்க்கவும்",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"உங்கள் வணிகத்தை சமர்ப்பித்தற்கு நன்றி. விரைவில் Bitcoin வியாபாரி வரைபடங்களில் உங்களைப் பட்டியலிடுவோம்.",
	"business/maps-success::biz_maps_success_hero_title":
		"கோரிக்கை பெறப்பட்டது 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"உங்கள் வணிகம் BTC Map மற்றும் பிற Bitcoin வியாபாரி அடைவுகளில் 1 முதல் 2 வாரங்களுக்குள் பட்டியலிடப்படும். வரைபடங்களைத் துல்லியமாக வைத்திருக்க ஒவ்வொரு சமர்ப்பிப்பையும் கையால் மதிப்பாய்வு செய்கிறோம்.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"உங்கள் பட்டியல் நேரடியாக ஆனவுடன், அருகிலுள்ள Bitcoiners உங்கள் வணிகத்தைக் கண்டுபிடித்து அங்கு Bitcoin செலவிட வரலாம்.",
	"business/maps-success::biz_maps_success_timeline_header":
		"அடுத்து என்ன நடக்கும்",
	"business/maps-success::biz_maps_success_view_c1":
		"நீங்கள் காத்திருக்கையில், உலகெங்கிலும் Bitcoin ஏற்கும் வளர்ந்து வரும் வணிகங்களின் நெட்வொர்க்கைப் பார்க்க BTC Map-ஐப் பாருங்கள்.",
	"business/maps-success::biz_maps_success_view_header":
		"நீங்கள் எங்கே தோன்றுவீர்கள் என்பதைப் பாருங்கள்",

	// ───────── business/sticker-files/english/index ─────────
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"உங்கள் சொந்த 'Bitcoin Accepted Here' ஸ்டிக்கர்களை அச்சிட ஆங்கில ஸ்டிக்கர் கோப்புகளைப் பதிவிறக்கவும்.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"நீங்கள் Bitcoin ஏற்கிறீர்கள் என்பதை உங்கள் வாடிக்கையாளர்களுக்குத் தெரியப்படுத்த ஆங்கிலத்தில் உங்கள் சொந்த 'Bitcoin Accepted Here' ஸ்டிக்கர்களை அச்சிடுங்கள்.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"ஆங்கில 'Bitcoin Accepted Here' ஸ்டிக்கர் கோப்புகளைப் பதிவிறக்கவும்",

	// ───────── business/sticker-language-success ─────────
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"உங்கள் மொழியில் 'Bitcoin Accepted Here' ஸ்டிக்கர் கோப்புகளைக் கேட்டதற்கு நன்றி.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"கோரிக்கை பெறப்பட்டது 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"3 முதல் 4 வாரங்களுக்குள் உங்கள் ஸ்டிக்கர் கோப்புகளை உருவாக்கி வெளியிடுவோம். அவை தயாரானவுடன், எங்கள் ஸ்டிக்கர் கோப்புகள் பக்கத்திலிருந்து இலவசமாக பதிவிறக்கி அச்சிடலாம்.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ஸ்டிக்கர் கோப்புகள் தொகுதிகளாக வெளியிடப்படுகின்றன, எனவே உங்கள் மொழி நேரடியாக ஆக சில வாரங்கள் ஆகலாம். உங்கள் பொறுமைக்கு நன்றி!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"அடுத்து என்ன நடக்கும்",

	// ───────── business/sticker-success ─────────
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"மொத்தமாக ஆர்டர் செய்யுங்கள்",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"மற்றொரு இலவச பேக்கைக் கேட்கவும்",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"2 முதல் 4 வாரங்களில் ஒரு வெள்ளை உறையில் 3 ஸ்டிக்கர்களுடன் உங்கள் இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்களைப் பெறுவீர்கள்.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"உங்கள் ஸ்டிக்கர்கள் வழியில் உள்ளன 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"3 ஸ்டிக்கர்கள் உங்கள் வணிகத்திற்கு போதவில்லை என்றால், மற்றொரு இலவச பேக்கைக் கேட்கத் தயங்க வேண்டாம் — அல்லது நாங்கள் பயன்படுத்தும் அதே பிரிண்டரிலிருந்து மொத்தமாக ஆர்டர் செய்யவும்.",
	"business/sticker-success::biz_sticker_success_more_header":
		"மேலும் ஸ்டிக்கர்கள் தேவையா?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"உங்கள் முன் கதவு அல்லது சாளரத்தில் வாடிக்கையாளர்கள் உள்ளே வருவதற்கு முன்பே பார்க்கும்படி",
	"business/sticker-success::biz_sticker_success_tip_2":
		"உங்கள் பதிவு, POS டெர்மினல் அல்லது கொடுப்பனவு பகுதிக்கு அருகில்",
	"business/sticker-success::biz_sticker_success_tip_3":
		"மெனுக்கள், விலைப் பட்டியல்கள் அல்லது tip ஜாடிகளில்",
	"business/sticker-success::biz_sticker_success_tip_4":
		"நீங்கள் உரிமை இல்லாத அல்லது வைக்க அனுமதி இல்லாத எந்த இடத்திலும் ஒட்ட வேண்டாம்",
	"business/sticker-success::biz_sticker_success_tips_header":
		"உங்கள் ஸ்டிக்கர்களை வைக்க நல்ல இடங்கள்",

	// ───────── business/stickers ─────────
	"business/stickers::biz_stickers_hero_subtitle":
		"நீங்கள் Bitcoin ஏற்கிறீர்கள் என்பதை உங்கள் வாடிக்கையாளர்களுக்குத் தெரியப்படுத்துங்கள். உங்கள் வணிகத்தில் வைக்க இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்களின் ஒரு பேக்கை ஆர்டர் செய்யவும்.",
	"business/stickers::biz_stickers_hero_title":
		"இலவச 'Bitcoin Accepted Here' ஸ்டிக்கர்கள்",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin ஏற்பது வேலையில் பாதிதான் — உங்கள் வாடிக்கையாளர்களுக்கும் நீங்கள் ஏற்கிறீர்கள் என்பது தெரிய வேண்டும். இந்த சிறிய 'Bitcoin Accepted Here' ஸ்டிக்கர்கள் உங்கள் முன் கதவு, பதிவு, மெனு அல்லது வாடிக்கையாளர்கள் பணம் செலுத்துவதற்கு முன் பார்க்கும் வேறு எந்த இடத்திலும் ஒட்டுவதற்காக வடிவமைக்கப்பட்டுள்ளன.",
	"business/stickers::biz_stickers_intro_c2":
		"USA அல்லது கனடாவில் எங்கும் இலவச பேக்கை அஞ்சல் செய்வோம், அல்லது உலகில் எங்கும் உங்கள் சொந்தத்தை அச்சிடலாம்.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 கனடா — அஞ்சல் மூலம் இலவசம்",
	"business/stickers::biz_stickers_option_print":
		"🌍 உலகளாவியது — என் சொந்தத்தை அச்சிடுவேன்",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — அஞ்சல் மூலம் இலவசம்",
	"business/stickers::biz_stickers_placeholder_translation1":
		"'Bitcoin Accepted Here'-க்கான மொழிபெயர்ப்பு",
	"business/stickers::biz_stickers_placeholder_translation2":
		"'Scan to learn why Bitcoin is good for business.'-க்கான மொழிபெயர்ப்பு",
	"business/stickers::biz_stickers_print_c1":
		"நீங்கள் எங்கே வாழ்ந்தாலும், உங்கள் சொந்த 'Bitcoin Accepted Here' ஸ்டிக்கர்களை அச்சிடலாம். ஸ்டிக்கர் கோப்புகள் மற்றும் அச்சிடும் வழிமுறைகளைப் பதிவிறக்க கீழே உங்கள் மொழியைக் கிளிக் செய்யவும்.",
	"business/stickers::biz_stickers_print_header":
		"உங்கள் சொந்த ஸ்டிக்கர் கோப்புகளை அச்சிடுங்கள்",
	"business/stickers::biz_stickers_request_c1":
		"உங்கள் உள்ளூர் மொழியில் 'Bitcoin Accepted Here' ஸ்டிக்கர் கோப்புகளைக் கேட்க கீழே உள்ள படிவத்தை நிரப்பவும். அவை தயாரானவுடன் உங்களுக்குத் தெரியப்படுத்துவோம்.",
	"business/stickers::biz_stickers_request_header":
		"உங்கள் மொழியைக் காணவில்லையா?",
	"business/stickers::biz_stickers_step_description":
		"USA மற்றும் கனடாவில் உள்ள முகவரிகளுக்கு இலவசப் பேக்கை அனுப்புவோம். உலகின் வேறு எந்த இடத்திலும், உங்கள் சொந்தத்தை அச்சிடலாம்.",
	"business/stickers::biz_stickers_step_header":
		"உங்கள் ஸ்டிக்கர்களை எவ்வாறு பெற விரும்புகிறீர்கள்?",

	// ───────── business/wallets ─────────
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"அனைத்து Bitcoin பணப்பைகளும் ஒன்றுடன் ஒன்று இயங்கக்கூடியவை — உங்கள் வணிகத்திற்கு பொருந்துவதைத் தேர்வுசெய்யவும். இலவசம், உடனடி தீர்வு, chargebacks இல்லை.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-மட்டும் Lightning பணப்பை",
	"business/wallets::sources_ibex":
		"IBEX — Lightning கொடுப்பனவுகள் கட்டமைப்பு",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin கொடுப்பனவு செயலி",
	"business/wallets::sources_square":
		"Square — Bitcoin கொடுப்பனவுகளை ஏற்கவும்",
	"business/wallets::sources_zaprite":
		"Zaprite — வணிகங்களுக்கான Bitcoin விலைக் குறிப்பு",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin பணப்பைகள் இலவசம். உங்கள் வணிகத்திற்கு பொருந்தும் ஒன்றைத் தேர்வுசெய்யவும் — நேரிலோ, ஆன்லைனிலோ அல்லது விலைக்குறிப்பு-அடிப்படையிலோ — மற்றும் நிமிடங்களில் Bitcoin ஏற்கத் தொடங்கவும்.",
	"business/wallets::wallets_section_invoice":
		"விலைக்குறிப்பு-அடிப்படை வணிகங்களுக்கான பணப்பைகள்",
	"business/wallets::wallets_section_invoice_intro":
		"நீங்கள் வாடிக்கையாளர்களுக்கு (ஆலோசனை, freelancing, B2B சேவைகள்) விலைக்குறிப்பு வழங்கினால், விலைக்குறிப்பை மையமாகக் கொண்ட பணப்பையைப் பயன்படுத்தவும். உங்கள் வாடிக்கையாளர் ஒரு சில கிளிக்குகளில் Bitcoin விலைக்குறிப்பை செலுத்துகிறார்.",
	"business/wallets::wallets_section_multiple":
		"பல ஊழியர்கள் கொண்ட வணிகங்களுக்கான பணப்பைகள்",
	"business/wallets::wallets_section_multiple_intro":
		"பதிவில் கொடுப்பனவுகளை எடுக்கும் ஒரு குழு உங்களிடம் இருந்தால், பல ஊழியர் உள்நுழைவுகளை ஆதரிக்கும் பணப்பையைத் தேர்வுசெய்யவும் — அதனால் ஒவ்வொரு ஊழியருக்கும் தங்கள் சொந்த PIN கிடைக்கும், மற்றும் யார் எந்த கொடுப்பனவை எடுத்தார்கள் என்பதன் தெளிவான தணிக்கை சுவடை வைத்திருக்கலாம்.",
	"business/wallets::wallets_section_online":
		"ஆன்லைன் வணிகங்களுக்கான பணப்பைகள்",
	"business/wallets::wallets_section_online_intro":
		"வலைத்தளத்தில் விற்பனை செய்கிறீர்களா? இந்த பணப்பைகள் உங்கள் ஆன்லைன் கடையில் இணைந்து உலகின் எந்த இடத்திலிருந்தும் எந்த வாடிக்கையாளரிடமிருந்தும் Bitcoin ஏற்கின்றன — chargebacks இல்லை, வியாபாரிக் கணக்கு தேவையில்லை.",
	"business/wallets::wallets_section_sole":
		"தனியாக-உரிமை பெற்ற வணிகங்களுக்கான பணப்பைகள்",
	"business/wallets::wallets_section_sole_intro":
		"நீங்கள் தனியாக ஒரு கடை, காபி கடை, ஸ்டுடியோ அல்லது சேவையை நடத்துகிறீர்களானால், இந்த எந்த பணப்பையும் வேலை செய்யும். கொடுப்பனவுகளை Bitcoin-ஆக வைத்திருக்க விரும்புகிறீர்களா அல்லது ஒவ்வொரு கொடுப்பனவின் ஒரு பகுதியை உங்கள் உள்ளூர் நாணயத்திற்கு தானாக மாற்ற விரும்புகிறீர்களா என்பதன் அடிப்படையில் தேர்வுசெய்யவும்.",
	"business/wallets::wallets_strike_note":
		"Strike Business பூஜ்ய கட்டணங்கள் மற்றும் உடனடி தீர்வுடன் Bitcoin மற்றும் Lightning கொடுப்பனவுகளை ஏற்க அனுமதிக்கிறது. நேரில், ஆன்லைன் மற்றும் விலைக்குறிப்பு-அடிப்படை கொடுப்பனவுகளை ஆதரிக்கிறது, உங்கள் உள்ளூர் நாணயத்திற்கு விருப்பத் தானியங்கி-மாற்றத்துடன்.",

	// ───────── business/why ─────────
	"business/why::learn_why_bitcoin_is_good_for_business": "Bitcoin இங்கே ஏற்கப்படுகிறது",
	"business/why::why_good_for_you": "உங்களுக்கும் ஏன் Bitcoin சிறந்தது",
	"business/why::why_learn_more_lowercase": "மேலும் அறிய →",
	"business/why::why_s1_c1":
		"வெறுமையிலிருந்து அதிக பணம் அச்சிடப்பட்டாலோ அல்லது உருவாக்கப்பட்டாலோ பணவீக்கம் ஏற்படுகிறது. அது உங்கள் பாக்கெட்டில் உள்ள பணம் காலப்போக்கில் குறைந்த மதிப்பு கொண்டதாக ஆக்குகிறது — மற்றும் அதனால்தான் ஆண்டுக்கு ஆண்டு விலைகள் உயர்ந்து கொண்டே இருக்கின்றன.",
	"business/why::why_s1_c2":
		"Bitcoin-க்கு 21 மில்லியன் நாணயங்கள் என்ற நிலையான வழங்கல் உள்ளது. எந்த அரசாங்கம், வங்கி அல்லது நிறுவனமும் அதிகமாக அச்சிட முடியாது. உங்கள் Bitcoin சேமிப்பு மெதுவாக இழக்காமல் காலப்போக்கில் தங்கள் மதிப்பை வைத்திருக்கும்.",
	"business/why::why_s2_c1":
		"வங்கி நெருக்கடிகள் காரணமாக சமீபத்திய ஆண்டுகளில் பல அமெரிக்க வங்கிகள் சரிந்துள்ளன. ஒரே நேரத்தில் அதிக வாடிக்கையாளர்கள் திரும்பப் பெற முயன்றபோது, அனைவருக்கும் திருப்பிச் செலுத்த வங்கிகளிடம் பணம் இல்லை.",
	"business/why::why_s2_c2":
		"உங்கள் பணத்தை வைத்திருப்பதற்குப் பதிலாக, வங்கிகள் அதில் பெரும்பாலானவற்றைக் கடன் கொடுத்து முதலீடு செய்கின்றன. அந்த முதலீடுகள் தோல்வியடைந்தாலோ — அல்லது வைப்பாளர்கள் நம்பிக்கையை இழந்தாலோ — வங்கி தோல்வியடையக்கூடும், மற்றும் உங்கள் வைப்புகள் முடக்கப்படலாம் அல்லது இழக்கப்படலாம்.",
	"business/why::why_s2_c3":
		"Bitcoin மூலம், உங்கள் சொந்த பணப்பையில் உங்கள் சொந்த பணத்தை நேரடியாக வைத்திருக்க முடியும். வங்கி இல்லை. இடைத்தரகர் இல்லை. வங்கி நெருக்கடி இல்லை.",
	"business/why::why_s3_c1":
		"கிரெடிட் கார்டுகள், PayPal அல்லது பாரம்பரிய வங்கிக் கணக்குகளைப் போலல்லாமல், Bitcoin-க்கு பயன்படுத்த யாருடைய அனுமதியும் தேவையில்லை.",
	"business/why::why_s3_c2":
		"உங்கள் கணக்கை யாரும் முடக்க முடியாது, கொடுப்பனவைத் தடுக்க முடியாது அல்லது நெட்வொர்க்கிலிருந்து உங்களைத் துண்டிக்க முடியாது. வரலாற்றில் தணிக்கை அல்லது கைப்பற்றும் பயம் இல்லாமல் சுதந்திரமாகப் பயன்படுத்தக்கூடிய முதல் நிதி அமைப்பு இது.",
	"business/why::why_s4_c1":
		"Bitcoin பெரும்பாலும் தவறாகப் புரிந்து கொள்ளப்படுகிறது, ஆனால் அது உலகில் நிறைய நல்லது செய்து கொண்டிருக்கிறது.",
	"business/why::why_s4_c2":
		"இது சுதந்திரத்திற்காக போராட மனித உரிமை ஆர்வலர்களுக்கு உதவியுள்ளது, குப்பை மேடுகள் மற்றும் எண்ணெய் வயல்களிலிருந்து உலகளாவிய மீத்தேன் வெளியேற்றத்தைக் குறைத்துள்ளது, மின் கட்டங்களை நிலைப்படுத்தியுள்ளது மற்றும் தேசியப் பூங்காக்கள் போன்ற பொது நன்மைகளுக்கு நிதியளித்துள்ளது.",
	"business/why::why_biz_s1": "குறைந்த கட்டணங்கள், வணிகத்திற்கு அதிகம்",
	"business/why::why_biz_s1_c1":
		"Bitcoin கொடுப்பனவுகள் ஒவ்வொரு விற்பனையிலிருந்தும் 2–3% எடுக்கும் வங்கிகள் மற்றும் கிரெடிட் கார்டு நிறுவனங்களைத் தவிர்க்கின்றன. நீங்கள் செலுத்துவதில் வணிகம் அதிகமாக வைத்திருக்கிறது — இது உங்களுக்கு பெரும்பாலும் சிறந்த விலைகள் மற்றும் சிறந்த சேவையைக் குறிக்கிறது.",
	"business/why::why_biz_s2": "உடனடி தீர்வு, chargebacks இல்லை",
	"business/why::why_biz_s2_c1":
		"Bitcoin கொடுப்பனவுகள் வினாடிகளில் தீர்வு செய்யப்படுகின்றன, உங்கள் பணப்பையிலிருந்து வணிகத்திற்கு நேரடியாக. நிதிகளை வெளியிட ஒரு வங்கிக்கு நாட்கள் காத்திருக்க வேண்டாம், மற்றும் விலையுயர்ந்த chargeback தகராறுகள் இல்லை — எனவே வணிகம் மோசடியை எதிர்த்துப் போராடுவதற்குப் பதிலாக வாடிக்கையாளர்களுக்கு சேவை செய்வதில் கவனம் செலுத்த முடியும்.",
	"business/why::why_biz_s3": "ஏற்க இலவசம், அனைவருக்கும் திறந்தது",
	"business/why::why_biz_s3_c1":
		"வணிகம் Bitcoin ஏற்க ஒப்பந்தங்கள், மாதாந்திர கட்டணங்கள் அல்லது அமைப்பு செலவுகள் இல்லை. மற்றும் உலகெங்கிலும் உள்ள மில்லியன் கணக்கான Bitcoin பயனர்கள் அதை ஏற்கும் வியாபாரிகளைத் தீவிரமாகத் தேடுகிறார்கள் — இந்த வணிகத்திற்கு புதிய வாடிக்கையாளர்களுக்கான இலவச வெளிப்பாட்டை அளிக்கிறது.",
	"business/why::why_business_cta_intro":
		"ஒரு வணிகத்தை நடத்தி Bitcoin ஏற்கத் தொடங்க விரும்புகிறீர்களா?",
	"business/why::why_business_cta_link": "எவ்வாறு செயல்படுகிறது என்பதைப் பாருங்கள் →",
	"business/why::why_for_business": "இந்த வணிகத்திற்கு ஏன் Bitcoin சிறந்தது",
	"business/why::why_for_business_intro":
		"Bitcoin ஏற்பது ஒவ்வொரு விற்பனையிலும் ஒரு வணிகம் அதிகம் வைத்திருக்க, chargebacks இல்லாமல் உடனடியாக பணம் பெற, மற்றும் Bitcoin பயனர்களின் உலகளாவிய பார்வையாளர்களை அடைய அனுமதிக்கிறது — அனைத்தும் பூஜ்ய ஒப்பந்தங்கள் மற்றும் பூஜ்ய மாதாந்திர கட்டணங்களுடன்.",
	"business/why::why_good_for_you_intro":
		"Bitcoin பண பதிவில் மட்டும் பயனுள்ளதாக இல்லை — அது உங்கள் சேமிப்பு, உங்கள் தனியுரிமை மற்றும் பரிவர்த்தனை செய்வதற்கான உங்கள் சுதந்திரத்தைப் பாதுகாக்கும் சிறந்த வடிவ பணம். இதோ ஒரு விரைவான மேலோட்டம்.",
	"business/why::why_hero_subtitle":
		"நீங்கள் இப்போதுதான் ஒரு Bitcoin Accepted Here ஸ்டிக்கரை ஸ்கேன் செய்துள்ளீர்கள். அது ஏன் சிறந்த செய்தி என்பது இங்கே — இந்த வணிகத்திற்கும், உங்களுக்கும்.",
	"business/why::why_intro_c1":
		"நீங்கள் இருக்கும் வணிகம் Bitcoin ஏற்கிறது — யாரும் எங்கும் பயன்படுத்தக்கூடிய நவீன, திறந்த-மூல கொடுப்பனவு நெட்வொர்க், வங்கிகள் அல்லது இடைத்தரகர்கள் ஒரு வெட்டை எடுக்காமல்.",
	"business/why::why_intro_c2":
		"இந்த வணிகத்திற்கு Bitcoin ஏற்பது ஏன் நல்லது, மேலும் Bitcoin பயன்படுத்துவது வாடிக்கையாளராக உங்களுக்கு ஏன் நல்லது என்பதன் சுருக்கமான பதிப்பு கீழே உள்ளது.",
	"business/why::why_next_business_label": "BITCOIN ஏற்கவும்",
	"business/why::why_next_business_title":
		"உங்கள் வணிகத்தில் Bitcoin ஏற்கவும்",
	"business/why::why_next_buy_label": "BITCOIN வாங்கவும்",
	"business/why::why_next_buy_title": "உங்கள் முதல் Bitcoin வாங்கவும்",
	"business/why::why_next_learn_label": "மேலும் அறிய",
	"business/why::why_next_learn_title": "Bitcoin பற்றி மேலும் அறியவும்",
	"business/why::why_next_wallet_label": "ஒரு பணப்பையைப் பெறுங்கள்",
	"business/why::why_next_wallet_title":
		"உங்கள் சொந்த Bitcoin பணப்பையைப் பெறுங்கள்",
	"business/why::why_whats_next_heading": "அடுத்து எங்கே?",
	"business/why::why_whats_next_intro":
		"இது ஒரு Bitcoin ஸ்டிக்கரின் உங்கள் முதல் ஸ்கேன் என்றால், இங்கிருந்து செல்ல மிகவும் பயனுள்ள இடங்கள் இவை.",

	// ───────── flyers ─────────
	"flyers::flyers_intro_header":
		"இந்த Bitcoin துண்டுப்பிரசுரங்களை எவ்வாறு அச்சிட்டு ஒட்டுவது",
	"flyers::flyers_hero_subtitle":
		"இலவச, அச்சிடக்கூடிய Bitcoin துண்டுப்பிரசுரங்கள். Bitcoin பற்றி அதிகம் பேர் அறிய உதவ அவற்றை பொது இடங்களில் வையுங்கள்.",
	"flyers::flyers_hero_title":
		"Bitcoin துண்டுப்பிரசுரங்களை அச்சிட்டு ஒட்டுங்கள்",
	"flyers::flyers_next_get_stickers": "செய்தியைப் பரப்புங்கள்",
	"flyers::flyers_next_get_stickers_desc":
		"Bitcoin ஸ்டிக்கர்களின் இலவச பேக்கை ஆர்டர் செய்யவும்",

	// ───────── lightning ─────────
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "எங்களைப் பார்க்கவும்",
	"lightning::lightning_grid_heading": "பிரபலமான Lightning பணப்பைகள்",
	"lightning::lightning_hardware_cta_label": "வன்பொருள் பணப்பைகள்",
	"lightning::lightning_header_subtitle":
		"Lightning ஒரு சதத்தின் ஒரு பகுதிக்கு வினாடிகளில் Bitcoin அனுப்ப அனுமதிக்கிறது — நீங்கள் எவ்வளவு Bitcoin செலவிட திட்டமிட்டுள்ளீர்கள் என்பதற்கு பொருந்தும் வர்த்தக-ஒற்றுமைகள் கொண்ட பணப்பையைத் தேர்வுசெய்யவும்.",
	"lightning::lightning_s1_c4_end": "மேலும் தகவலுக்கு.",
	"lightning::lightning_s1_c4_link": "Bitcoin வன்பொருள் பணப்பை வழிகாட்டியை",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning பணப்பை",
	"lightning::sources_breez_lightning":
		"Breez — சுய-காப்பக Lightning பணப்பை",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network ஆவணப்படுத்தல்",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — காப்பக Lightning பணப்பை",

	// ───────── nostr/index ─────────
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android & web",
	"nostr/index::nostr_platform_web": "வலை உலாவி",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr ஆன்லைன் தொடர்பாடலுக்கான ஒரு புதிய பரவலாக்கப்பட்ட நெறிமுறை — எந்த ஒரு நிறுவனமும் அதைக் கட்டுப்படுத்தாது, Bitcoin zaps உள்ளமைவாக கட்டப்பட்டுள்ளன, மற்றும் பின்தொடர்பவர்களை இழக்காமல் கிளையன்ட்களுக்கு இடையே நகரலாம்.",
	"nostr/index::nostr_amethyst_f1": "ஏராளமான அம்சங்கள் மற்றும் தனிப்பயனாக்கம்",
	"nostr/index::nostr_amethyst_f2": "தனி Bitcoin பணப்பை தேவை",
	"nostr/index::nostr_amethyst_f3": "100% இலவசம்",
	"nostr/index::nostr_damus_f1": "பழகிய Twitter போன்ற இடைமுகம்",
	"nostr/index::nostr_damus_f2": "தனி Bitcoin பணப்பை தேவை",
	"nostr/index::nostr_damus_f3": "100% இலவசம்",
	"nostr/index::nostr_download_heading":
		"இலவச Nostr கிளையன்டைப் பதிவிறக்கவும்",
	"nostr/index::nostr_download_intro":
		"Nostr கிளையன்ட்கள் என்பது Nostr நெட்வொர்க்கில் படிக்கவும் இடுகையிடவும் அனுமதிக்கும் இலவச பயன்பாடுகள். அனைத்தும் ஒன்றோடொன்று இயங்கக்கூடியவை — நீங்கள் எந்த நேரத்திலும் கிளையன்ட்களை மாற்றலாம் மற்றும் உங்கள் பின்தொடர்பவர்கள் மற்றும் உள்ளடக்கத்தை வைத்திருக்கலாம்.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr ஆன்லைனில் தொடர்பு கொள்ளும் ஒரு புதிய பரவலாக்கப்பட்ட நெறிமுறை — எந்த ஒரு நிறுவனமும் அதைக் கட்டுப்படுத்தாது, Bitcoin zaps கட்டப்பட்டுள்ளன, மற்றும் உங்கள் பின்தொடர்பவர்களை இழக்காமல் பயன்பாடுகளுக்கு இடையே நகரலாம்.",
	"nostr/index::nostr_hero_title": "Nostr என்றால் என்ன?",
	"nostr/index::nostr_intro_c1":
		"Nostr மின்னஞ்சல் போன்றது: யாருக்கும் நெறிமுறை சொந்தமில்லை, யார் வேண்டுமானாலும் அதன் மீது ஒரு பயன்பாட்டை உருவாக்கலாம், மற்றும் உங்களுக்கு பிடித்த எந்த பயன்பாட்டையும் தேர்வு செய்யலாம். Twitter அல்லது Facebook-ஐப் போலல்லாமல், உங்களைத் தணிக்கை செய்யக்கூடிய, தளம் இல்லாமல் ஆக்கக்கூடிய அல்லது தடுக்கக்கூடிய எந்த மைய நிறுவனமும் இல்லை.",
	"nostr/index::nostr_intro_c2":
		"கீழே Nostr ஏன் முக்கியம் என்பதன் சுருக்கமான பதிப்பு உள்ளது — பின்னர் இன்றே தொடங்க உங்களுக்குத் தேவையான ஒவ்வொரு இலவச Nostr கிளையன்ட்.",
	"nostr/index::nostr_iris_f1":
		"மிக எளிமை — நிறுவல் தேவையில்லை",
	"nostr/index::nostr_iris_f2":
		"சோதனை கணக்குடன் Nostr-ஐ முயற்சிக்க எளிதான வழி",
	"nostr/index::nostr_iris_f3": "100% இலவசம்",
	"nostr/index::nostr_learn_more_label": "ஆழமாகச் செல்லுங்கள்",
	"nostr/index::nostr_learn_more_title":
		"nostr.how-இல் Nostr பற்றி மேலும் அறியவும்",
	"nostr/index::nostr_primal_f1": "பரிந்துரைக்கப்பட்ட முதல் கிளையன்ட்",
	"nostr/index::nostr_primal_f2": "Bitcoin zap பணப்பை உள்ளமைக்கப்பட்டுள்ளது",
	"nostr/index::nostr_primal_f3": "100% இலவசம்",
	"nostr/index::nostr_s1": "நெறிமுறை, தளம் அல்ல",
	"nostr/index::nostr_s1_c1":
		"Nostr ஒரு புதிய நெறிமுறை, இது தணிக்கை, தளம் இல்லாமல் ஆக்கப்படும் அல்லது தடுக்கப்படும் பயம் இல்லாமல் ஆன்லைனில் தொடர்பு கொள்ள உங்களை அனுமதிக்கிறது.",
	"nostr/index::nostr_s1_c2":
		"Twitter மற்றும் Facebook போன்ற தளங்கள் ஒரு நிறுவனத்தால் கட்டுப்படுத்தப்படுகின்றன, ஆனால் Nostr நெறிமுறையை யாரும் கட்டுப்படுத்தவில்லை.",
	"nostr/index::nostr_s2": "நகர்வதற்கான சுதந்திரம்",
	"nostr/index::nostr_s2_c1":
		"Nostr மின்னஞ்சல் போன்றது. மின்னஞ்சல் நெறிமுறையை யாரும் கட்டுப்படுத்தவில்லை, மற்றும் யார் வேண்டுமானாலும் அதன் மீது ஒரு கிளையன்டை (Gmail, Hotmail போன்றவை) உருவாக்கலாம்.",
	"nostr/index::nostr_s2_c2":
		"Nostr நெறிமுறையையும் யாரும் கட்டுப்படுத்தவில்லை, மற்றும் யார் வேண்டுமானாலும் அதன் மீது ஒரு கிளையன்டை (Damus, Amethyst போன்றவை) உருவாக்கலாம்.",
	"nostr/index::nostr_s2_c3":
		"ஒரு குறிப்பிட்ட கிளையன்ட் எவ்வாறு செயல்படுகிறது என்பது உங்களுக்குப் பிடிக்கவில்லை என்றால், உங்கள் Nostr கணக்கை மற்றொரு கிளையன்டுக்கு உங்கள் பின்தொடர்பவர்கள் அல்லது உள்ளடக்கத்தை இழக்காமல் தடையின்றி நகர்த்தலாம்.",
	"nostr/index::nostr_s3": "Bitcoin உள்ளமைக்கப்பட்டுள்ளது",
	"nostr/index::nostr_s3_c1":
		"Bitcoin Nostr நெறிமுறையில் உள்ளமைவாக கட்டப்பட்டுள்ளது. உங்களுக்கு பிடித்த உள்ளடக்கத்தைக் கண்டால், ஒரு நன்றியாக யாருக்கும் Bitcoin-ஐ எளிதாக zap செய்யலாம்!",
	"nostr/index::nostr_s3_c2":
		"Twitter மற்றும் Facebook போன்ற மையப்படுத்தப்பட்ட தளங்களில், மையப்படுத்தப்பட்ட நிறுவனம் உங்கள் உள்ளடக்கத்திலிருந்து பணம் சம்பாதிக்கிறது. ஆனால் Nostr போன்ற திறந்த நெறிமுறைகளில், உங்கள் உள்ளடக்கத்திலிருந்து நீங்கள் பணம் சம்பாதிக்கிறீர்கள்.",
	"nostr/index::sources_damus": "Damus — iPhone Nostr கிளையன்ட்",
	"nostr/index::sources_iris": "Iris — உலாவி-அடிப்படை Nostr கிளையன்ட்",
	"nostr/index::sources_nostr_how": "nostr.how — Nostr என்றால் என்ன?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — திறந்த-மூல குறிப்பீடு",
	"nostr/index::sources_primal":
		"Primal — உள்ளமைக்கப்பட்ட Bitcoin zap பணப்பை கொண்ட Nostr கிளையன்ட்",
	"nostr/index::what_is_nostr": "Nostr என்றால் என்ன?",

	// ───────── sticker-files/index ─────────
	"sticker-files/index::sticker_files_header":
		"இந்த Bitcoin ஸ்டிக்கர் கோப்புகளுடன் உங்கள் சொந்த Bitcoin ஸ்டிக்கர்களை அச்சிடுங்கள்.",

	// ───────── sticker-language-success ─────────
	"sticker-language-success::sticker_language_success_hero_title":
		"கோரிக்கை பெறப்பட்டது 🎉",

	// ───────── sticker-success ─────────
	"sticker-success::sticker_success_btn_order_bulk":
		"மொத்தமாக ஆர்டர் செய்யுங்கள்",
	"sticker-success::sticker_success_btn_share_on_nostr": "Nostr-இல் பகிரவும்",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr என்றால் என்ன?",
	"sticker-success::sticker_success_bulk_header": "மேலும் ஸ்டிக்கர்கள் தேவையா?",
	"sticker-success::sticker_success_hero_title":
		"உங்கள் ஸ்டிக்கர்கள் வழியில் உள்ளன 🎉",
	"sticker-success::sticker_success_share_header":
		"உங்கள் ஸ்டிக்கர் இடங்களைப் பகிருங்கள்",
	"sticker-success::sticker_success_tips_header":
		"நல்ல ஸ்டிக்கர் இடங்கள்",

	// ───────── stickers ─────────
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"நீங்கள் இதில் ஈடுபட்டிருக்கும்போது, உங்கள் சொந்தத்தை அச்சிட்டு ஒட்டுங்கள்",
	"stickers::stickers_instructions_1":
		"உங்கள் அஞ்சல் முகவரியை உள்ளிடவும், ஒரு இலவச Bitcoin ஸ்டிக்கர் பேக்கை அஞ்சலில் உங்களுக்கு அனுப்புவோம். உங்கள் ஸ்டிக்கர்கள் ஒரு வெள்ளை உறையில் அனுப்பப்படும்.",
	"stickers::stickers_btn_choose_pack": "இந்த பேக்கைத் தேர்வுசெய்க",
	"stickers::stickers_bulk_c1":
		"சில ஸ்டிக்கர்களுக்கு மேல் தேவையா?",
	"stickers::stickers_bulk_c2":
		"நாங்கள் பயன்படுத்தும் அதே பிரிண்டரிலிருந்து மொத்தமாக ஆர்டர் செய்யுங்கள்",
	"stickers::stickers_bulk_c3":
		"— நீங்கள் அதிகம் வாங்கினால், ஒரு ஸ்டிக்கருக்கு மலிவாக இருக்கும்.",
	"stickers::stickers_bulk_cta": "மொத்தமாக ஸ்டிக்கர்களைக் கடைக்குச் செல்க",
	"stickers::stickers_bulk_header": "ஸ்டிக்கர்களை மொத்தமாக ஆர்டர் செய்யவும்",
	"stickers::stickers_hero_subtitle":
		"இலவச Bitcoin ஸ்டிக்கர்களின் ஒரு பேக்கை ஆர்டர் செய்து, Bitcoin பற்றி அதிகம் பேர் அறிய உதவ அவற்றை பொது இடங்களில் வையுங்கள்.",
	"stickers::stickers_hero_title": "இலவச Bitcoin ஸ்டிக்கர்கள்",
	"stickers::stickers_intro_c1":
		"பொது இடங்களில் Bitcoin ஸ்டிக்கர்களை வைப்பதன் மூலம் அதிகம் பேருக்கு orange pill கொடுக்க உங்களுக்கு உதவுவதே எங்கள் நோக்கம். எங்கள் அனைத்து ஸ்டிக்கர்களிலும் கல்வி பக்கங்களுக்கு இணைக்கும் QR குறியீடுகள் உள்ளன",
	"stickers::stickers_intro_c3": "பணவீக்கம்",
	"stickers::stickers_intro_c4":
		"கீழே ஒரு ஸ்டிக்கர் பேக்கைத் தேர்ந்தெடுத்து அவற்றை எவ்வாறு பெற விரும்புகிறீர்கள் என்பதைத் தேர்வுசெய்யவும் — USA அல்லது கனடாவில் யாருக்கும் ஒரு இலவச பேக்கை அஞ்சல் செய்வோம், அல்லது உலகில் எங்கும் உங்கள் சொந்தத்தை அச்சிடலாம்.",
	"stickers::stickers_mail_header":
		"உங்கள் இலவச ஸ்டிக்கர்களை அஞ்சல் செய்வோம்",
	"stickers::stickers_next_print_flyers": "தொடர்ந்து பரப்புங்கள்",
	"stickers::stickers_next_print_flyers_desc":
		"பொது இடங்களில் ஒட்ட இலவச Bitcoin துண்டுப்பிரசுரங்களை அச்சிடுங்கள்",
	"stickers::stickers_option_bulk":
		"📦 உலகளாவியது — மொத்தமாக ஆர்டர் செய்யுங்கள்",
	"stickers::stickers_option_canada":
		"🇨🇦 கனடா — அஞ்சல் மூலம் இலவசம்",
	"stickers::stickers_option_print":
		"🌍 உலகளாவியது — என் சொந்தத்தை அச்சிடுவேன்",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — அஞ்சல் மூலம் இலவசம்",
	"stickers::stickers_print_c1":
		"நீங்கள் எங்கே வாழ்ந்தாலும், உங்கள் சொந்த ஸ்டிக்கர்களை அச்சிடுவதன் மூலம் பங்கேற்கலாம். ஸ்டிக்கர் கோப்புகள் மற்றும் அச்சிடும் வழிமுறைகளைப் பதிவிறக்க கீழே உங்கள் மொழியைக் கிளிக் செய்யவும்.",
	"stickers::stickers_print_c2":
		"ஒவ்வொரு ஸ்டிக்கரும் ஒவ்வொரு மொழியிலும் கிடைக்கவில்லை.",
	"stickers::stickers_print_header":
		"உங்கள் சொந்த ஸ்டிக்கர் கோப்புகளை அச்சிடுங்கள்",
	"stickers::stickers_request_c1":
		"உங்கள் உள்ளூர் மொழியில் ஸ்டிக்கர் கோப்புகளைக் கேட்க கீழே உள்ள படிவத்தை நிரப்பவும். அவை தயாரானவுடன் உங்களுக்குத் தெரியப்படுத்துவோம்.",
	"stickers::stickers_request_header": "உங்கள் மொழியைக் காணவில்லையா?",
	"stickers::stickers_share_c2": "எதற்கும் தேடுவதன் மூலம் Nostr-இல் எங்களைப் பின்தொடரவும்",
	"stickers::stickers_share_c3": "எந்த Nostr கிளையன்டிலும்.",
	"stickers::stickers_signs_pack_description":
		"Bitcoin செய்திகளுடன் எச்சரிக்கை, ஆபத்து மற்றும் கவனத்துடன்-நடைமுறை அடையாளங்கள் — கவனத்தைக் கவர்ந்து மக்களை நிறுத்தி படிக்க வைக்க வடிவமைக்கப்பட்டது.",
	"stickers::stickers_step_1_description":
		"ஒவ்வொரு பேக்கிலும் Bitcoin பற்றி மக்களுக்குக் கற்பிக்கும் QR குறியீடுகளுடன் வெவ்வேறு Bitcoin ஸ்டிக்கர்கள் உள்ளன.",
	"stickers::stickers_step_1_eyebrow": "படி 1",
	"stickers::stickers_step_1_header":
		"உங்கள் ஸ்டிக்கர் பேக்கைத் தேர்ந்தெடுக்கவும்",
	"stickers::stickers_step_2_description":
		"USA மற்றும் கனடாவில் உள்ள முகவரிகளுக்கு இலவசப் பேக்கை அனுப்புவோம். உலகின் வேறு எந்த இடத்திலும், உங்கள் சொந்தத்தை அச்சிடலாம் அல்லது மொத்தமாக ஆர்டர் செய்யலாம்.",
	"stickers::stickers_step_2_eyebrow": "படி 2",
	"stickers::stickers_step_2_header":
		"உங்கள் ஸ்டிக்கர்களை எவ்வாறு பெற விரும்புகிறீர்கள்?",
	"stickers::stickers_text_pack_description":
		"பொது இடங்களில் ஆர்வத்தைத் தூண்டும் வகையில் வடிவமைக்கப்பட்ட Bitcoin முழக்கங்கள் மற்றும் ஒற்றை-வரிகளின் கலவை.",

	// ───────── wallets ─────────
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — உங்கள் பணப்பையைத் தேர்வுசெய்யவும்",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — உலோக Bitcoin விதை சேமிப்பு மதிப்புரைகள்",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — சுய-காப்பு Bitcoin பணப்பை",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin வன்பொருள் பணப்பை",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 வன்பொருள் பணப்பை",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q வன்பொருள் பணப்பை",
	"wallets::sources_passport":
		"Foundation Devices — Passport வன்பொருள் பணப்பை",
	"wallets::sources_seedsigner":
		"SeedSigner — திறந்த-மூல DIY Bitcoin கையொப்பமிடும் சாதனம்",
	"wallets::wallets_grid_heading": "பிரபலமான Bitcoin பணப்பைகள்",
	"wallets::wallets_header_subtitle":
		"ஒரு பணப்பையைத் தேர்வுசெய்வது, உங்கள் விசைகளைப் பாதுகாப்பது மற்றும் உங்கள் Bitcoin-இன் முழுக் கட்டுப்பாட்டையும் எடுப்பதற்கான படிப்படியான வழிகாட்டி.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const k = e.namespace + "::" + e.key;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			e.targetTranslation = T[k];
			filled++;
		}
	}

	const stillNull = report.entries.filter(
		(e) => e.targetTranslation === null,
	);
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (ta): filled ${filled}, already-done ${skipped}, still-null ${stillNull.length}`,
	);
	if (stillNull.length) {
		console.log("\nFirst few still-null:");
		for (const e of stillNull.slice(0, 20)) {
			console.log(" -", e.namespace + "::" + e.key);
		}
	}
}

main();
