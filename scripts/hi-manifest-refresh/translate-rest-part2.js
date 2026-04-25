#!/usr/bin/env node
/**
 * Hindi manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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
	"hi.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli लेखा सेवाएँ",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"बिटकॉइन भुगतान के लिए सरल लेखा गाइड — हाइब्रिड वॉलेट, लागत आधार, पूँजीगत लाभ और अपने अकाउंटेंट से कब बात करें।",
	"business/accounting::accounting_s1_c1":
		"बिटकॉइन स्वीकार करने का सबसे आसान तरीका है हाइब्रिड वॉलेट का उपयोग करना: यह स्वतः 100% प्राप्त बिटकॉइन को भुगतान आते ही डॉलर (या आपकी स्थानीय मुद्रा) में बदल देता है।",
	"business/accounting::accounting_s1_c2":
		"इस सेटअप के साथ, आपका लेखा वैसा ही दिखता है जैसा आज दिखता है — अंतिम राशि हमेशा डॉलर में। कोई लागत आधार नहीं, कोई पूँजीगत लाभ नहीं, कोई नई स्प्रेडशीट नहीं।",
	"business/accounting::accounting_s2":
		"अगर आप कुछ बिटकॉइन रखते हैं: अपना लागत आधार ट्रैक करें",
	"business/accounting::accounting_s2_c1":
		"कुछ व्यवसाय हर चीज़ को स्वतः बदलने के बजाय प्राप्त बिटकॉइन का कुछ हिस्सा रखना चुनते हैं। अगर आप उनमें से एक हैं, तो अतिरिक्त कदम है लागत आधार ट्रैक करना — हर बिटकॉइन भुगतान का डॉलर मूल्य उस दिन जब आपको मिला।",
	"business/accounting::accounting_s2_c2":
		"भले ही आप अपने व्यवसाय को सिर्फ़ बिटकॉइन में मापते हैं, ज़्यादातर कर अधिकारी अब भी डॉलर मूल्य रिपोर्ट करने की माँग करते हैं। अच्छी ख़बर: हर लेन-देन के लिए केवल दो आँकड़े होते हैं — प्राप्त बिटकॉइन की मात्रा और उस दिन उसका डॉलर मूल्य।",
	"business/accounting::accounting_s2_c3":
		"नीचे दिए गए टूल्स का उपयोग करके मूल्य लुकअप को स्वचालित करें ताकि आपको हर दिन कीमतें न देखनी पड़ें।",
	"business/accounting::accounting_s3":
		"रखे हुए बिटकॉइन को ख़र्च करना या बेचना",
	"business/accounting::accounting_s3_c1":
		"अगर आप हर भुगतान को स्वतः डॉलर में बदलते हैं, तो यह हिस्सा छोड़ दें — यह आपके लिए लागू नहीं।",
	"business/accounting::accounting_s3_c2":
		"आपने कुछ बिटकॉइन रखा और बाद में उसे ख़र्च या बेचने का फ़ैसला किया, तो उसी स्प्रेडशीट में बिक्री मूल्य को लागत आधार के साथ जोड़ें। प्राप्ति के समय बिटकॉइन की लागत और ख़र्च या बेचने के समय की कीमत के बीच का अंतर पूँजीगत लाभ या हानि है।",
	"business/accounting::accounting_s3_c3": "दो त्वरित उदाहरण:",
	"business/accounting::accounting_s4":
		"बिटकॉइन समझने वाला विशेषज्ञ चाहिए?",
	"business/accounting::accounting_s4_c1":
		"अगर आप यह काम किसी और को सौंपना पसंद करेंगे — या आपके बिटकॉइन के लेखे का काम हाइब्रिड वॉलेट के संभालने से ज़्यादा जटिल है — तो हम Satoshi Pacioli Accounting Services की पुरज़ोर सिफ़ारिश करते हैं, एक ऐसी फ़र्म जो व्यवसायों के लिए बिटकॉइन लेखे में विशेषज्ञता रखती है।",
	"business/accounting::bitcoin_business_accounting_guide":
		"आपके व्यवसाय के लिए बिटकॉइन लेखा",
	"business/accounting::accounting_card_bpr_label": "बिटकॉइन की कीमत",
	"business/accounting::accounting_card_bpr_title":
		"डॉलर में बिटकॉइन की वर्तमान या ऐतिहासिक कीमतें देखें",
	"business/accounting::accounting_card_pacioli_label":
		"बिटकॉइन अकाउंटेंट",
	"business/accounting::accounting_card_spreadsheet_label":
		"Excel में आयात",
	"business/accounting::accounting_card_spreadsheet_title":
		"Excel में बिटकॉइन की कीमतें स्वतः आयात करें",
	"business/accounting::accounting_card_wallets_label":
		"हाइब्रिड वॉलेट",
	"business/accounting::accounting_card_wallets_title":
		"व्यवसायों के लिए हमारी सिफ़ारिशी वॉलेट देखें",
	"business/accounting::accounting_disclaimer":
		"यह गाइड केवल जानकारी के लिए है और कर सलाह नहीं है। अपनी विशेष स्थिति के लिए सलाह के लिए किसी योग्य अकाउंटेंट से सलाह लें।",
	"business/accounting::accounting_disclaimer_label": "अस्वीकरण",
	"business/accounting::accounting_example_feb_1": "1 फ़रवरी",
	"business/accounting::accounting_example_gain_badge":
		"पूँजीगत लाभ",
	"business/accounting::accounting_example_gain_explain":
		"आप $10 का पूँजीगत लाभ दर्ज करते हैं।",
	"business/accounting::accounting_example_jan_1": "1 जनवरी",
	"business/accounting::accounting_example_loss_badge":
		"पूँजीगत हानि",
	"business/accounting::accounting_example_loss_explain":
		"आप $10 की पूँजीगत हानि दर्ज करते हैं।",
	"business/accounting::accounting_example_received_label": "प्राप्त",
	"business/accounting::accounting_example_sold_label":
		"बेचा या ख़र्च किया",
	"business/accounting::accounting_hero_subtitle":
		"अपने व्यवसाय में बिटकॉइन स्वीकार करने से आपका लेखा जटिल नहीं होना चाहिए। यह रहा संक्षिप्त रूप — और इसे आसान बनाने वाले टूल्स तथा विशेषज्ञ।",
	"business/accounting::accounting_intro_c1":
		"अगर आप पहले से नक़द या कार्ड स्वीकार कर रहे हैं, तो अपने व्यवसाय के लेखे में बिटकॉइन जोड़ना उतना ही आसान है जितना आप सोचते हैं। आपके पास दो विकल्प हैं: हर बिटकॉइन भुगतान को आते ही स्वतः डॉलर में बदलें (कोई नया लेखा नहीं), या कुछ बिटकॉइन रखें (आपको कुछ अतिरिक्त आँकड़े ट्रैक करने होंगे)।",
	"business/accounting::accounting_intro_c2":
		"यह गाइड दोनों तरीक़े समझाती है — ताकि आप अपने व्यवसाय के लिए सही तरीक़ा चुन सकें और भरोसे से बिटकॉइन स्वीकार करना शुरू कर सकें।",
	"business/accounting::accounting_s1":
		"आसान तरीक़ा: डॉलर में स्वतः रूपांतरण",
	"business/accounting::accounting_s3_c6":
		"और बस। यह वही बुनियादी गणित है जो आप अन्य ऐसी संपत्तियों के लिए इस्तेमाल करते हैं जिनकी कीमत बढ़ती और घटती है।",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — डॉलर में बिटकॉइन की वर्तमान और ऐतिहासिक कीमत",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — व्यवसायों के लिए बिटकॉइन लेखा",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel में क्रिप्टो कीमतें आयात करना",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"बिटकॉइन स्वीकार करना शुरू करने से पहले व्यापारी जो सवाल आम तौर पर पूछते हैं उनके संक्षिप्त उत्तर — फ़ीस, निपटान, वॉलेट, चार्जबैक, लागतें और बहुत कुछ।",
	"business/faq::faq_intro_c1":
		"उत्तर देखने के लिए नीचे किसी भी सवाल पर क्लिक करें। जब आप बिटकॉइन स्वीकार करने के लिए तैयार हों, पेज के नीचे दिए गए बिज़नेस टूल्स आपको क़दम-दर-क़दम मार्गदर्शन करेंगे।",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "लेखा",
	"business/index::biz_label_faq": "अक्सर पूछे जाने वाले सवाल",
	"business/index::biz_label_maps": "व्यापारी नक्शे",
	"business/index::biz_label_rewards": "पुरस्कार",
	"business/index::biz_label_stickers": "स्टिकर",
	"business/index::biz_label_wallets": "वॉलेट",
	"business/index::biz_meta_description":
		"अपने व्यवसाय में कम फ़ीस, तुरंत निपटान, बिना चार्जबैक और ज़्यादा ग्राहकों तक पहुँच के साथ बिटकॉइन स्वीकार करें।",
	"business/index::business_hero_subtitle":
		"कम फ़ीस के साथ भुगतान स्वीकार करें, तुरंत निपटान करें और लाखों नए ग्राहकों तक पहुँचें — बिना अनुबंध या छिपी लागत के।",
	"business/index::business_intro_c1":
		"बिटकॉइन आपके व्यवसाय को भुगतान पाने का तेज़, सस्ता और निजी तरीक़ा देता है। कोई मध्यस्थ नहीं। कोई चार्जबैक नहीं। कोई आश्चर्यजनक लागत नहीं। पैसा सेकंडों में, सीधे ग्राहक से आप तक।",
	"business/index::business_intro_c2":
		"नीचे संक्षेप में बताया गया है कि बिटकॉइन व्यवसाय के लिए क्यों अच्छा है — और नीचे आज शुरू करने के लिए ज़रूरी सभी टूल्स।",
	"business/index::business_resources_heading":
		"बिटकॉइन स्वीकार करने के लिए जो भी ज़रूरत है",
	"business/index::business_resources_intro":
		"इन संसाधनों के साथ अपनी गति से काम करें। हर एक छोटी, व्यावहारिक गाइड है।",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"हमें अपने व्यवसाय के बारे में बताएँ",
	"business/maps::biz_maps_form_intro":
		"आपको नक्शे पर डालने के लिए हमें बस कुछ विवरण चाहिए। पते का डेटा केवल आपके व्यवसाय को व्यापारी नक्शों पर भेजने के लिए ज़रूरी समय तक रखा जाता है।",
	"business/maps::biz_maps_hero_subtitle":
		"अपने व्यवसाय को BTC Map पर मुफ़्त में जोड़ें — बिटकॉइन स्वीकार करने वाले व्यापारियों की एक खुली वैश्विक डायरेक्ट्री — ताकि स्थानीय बिटकॉइन उपयोगकर्ता आपको ढूँढ़ सकें और आपके व्यवसाय में बिटकॉइन ख़र्च कर सकें।",
	"business/maps::biz_maps_hero_title":
		"अपने व्यवसाय को बिटकॉइन व्यापारी नक्शों पर डालें",
	"business/maps::biz_maps_intro_c1":
		"बिटकॉइन उपयोगकर्ता सक्रिय रूप से अपना पैसा ख़र्च करने की जगहें ढूँढ़ रहे हैं। नक्शे पर दिखना आपके व्यवसाय को हर उस बिटकॉइन उपयोगकर्ता के सामने रखता है जो आसपास खाने, ख़रीदारी या ठहरने की जगहें ढूँढ़ रहा है — पूरी तरह मुफ़्त।",
	"business/maps::biz_maps_intro_c2":
		"नीचे दिया गया छोटा फ़ॉर्म भरें और हम आपके व्यवसाय को BTC Map और अन्य बिटकॉइन व्यापारी नक्शों पर भेज देंगे।",
	"business/maps::biz_maps_meta_description":
		"अपने व्यवसाय को BTC Map और अन्य बिटकॉइन व्यापारी नक्शों पर मुफ़्त में जोड़ें ताकि स्थानीय बिटकॉइन उपयोगकर्ता आपको ढूँढ़ सकें।",
	"business/maps::biz_maps_placeholder_address": "सड़क का पता",
	"business/maps::biz_maps_placeholder_category":
		"श्रेणी (जैसे रेस्तराँ, कैफ़े, होटल)",
	"business/maps::biz_maps_placeholder_city": "शहर",
	"business/maps::biz_maps_placeholder_country": "देश",
	"business/maps::biz_maps_placeholder_name": "व्यवसाय का नाम",
	"business/maps::biz_maps_placeholder_region":
		"क्षेत्र / प्रांत / राज्य",
	"business/maps::biz_maps_placeholder_website": "वेबसाइट (वैकल्पिक)",
	"business/maps::biz_maps_view_map_cta": "BTC Map देखें",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map देखें",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"अपने व्यवसाय को सबमिट करने के लिए धन्यवाद। हम जल्द ही आपको बिटकॉइन व्यापारी नक्शों पर डाल देंगे।",
	"business/maps-success::biz_maps_success_hero_title":
		"अनुरोध मिल गया 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"हम आपके व्यवसाय को 1-2 हफ़्तों में BTC Map और अन्य बिटकॉइन व्यापारी डायरेक्ट्रियों पर जोड़ देंगे। नक्शे की सटीकता बनाए रखने के लिए हम हर सबमिशन की मैन्युअल समीक्षा करते हैं।",
	"business/maps-success::biz_maps_success_timeline_c2":
		"जब आपकी लिस्टिंग लाइव हो जाएगी, स्थानीय बिटकॉइन उपयोगकर्ता आपके व्यवसाय को ढूँढ़ेंगे और बिटकॉइन ख़र्च करने आएँगे।",
	"business/maps-success::biz_maps_success_timeline_header":
		"आगे क्या होगा",
	"business/maps-success::biz_maps_success_view_c1":
		"प्रतीक्षा के दौरान, BTC Map पर एक नज़र डालें और दुनिया भर में बिटकॉइन स्वीकार करने वाले व्यवसायों का बढ़ता नेटवर्क देखें।",
	"business/maps-success::biz_maps_success_view_header":
		"देखें आप कहाँ दिखेंगे",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"अपने ख़ुद के स्टिकर प्रिंट करने के लिए \"Bitcoin Accepted Here\" अंग्रेज़ी स्टिकर फ़ाइलें डाउनलोड करें।",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"अंग्रेज़ी में अपने \"Bitcoin Accepted Here\" स्टिकर प्रिंट करें ताकि आपके ग्राहकों को पता चले कि आप बिटकॉइन स्वीकार करते हैं।",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"\"Bitcoin Accepted Here\" अंग्रेज़ी स्टिकर फ़ाइलें डाउनलोड करें",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"अपनी भाषा में \"Bitcoin Accepted Here\" स्टिकर फ़ाइलों का अनुरोध करने के लिए धन्यवाद।",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"अनुरोध मिल गया 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"हम आपकी स्टिकर फ़ाइलें 3-4 हफ़्तों में बनाकर पब्लिश करेंगे। जब वे तैयार होंगी, आप उन्हें हमारे स्टिकर फ़ाइल पेज से प्रिंट करने के लिए मुफ़्त में डाउनलोड कर सकेंगे।",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"हम स्टिकर फ़ाइलें बैचों में पब्लिश करते हैं, इसलिए आपकी भाषा को लाइव होने में कुछ हफ़्ते लग सकते हैं। आपके धैर्य के लिए धन्यवाद!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"आगे क्या होगा",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"थोक में ऑर्डर करें",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"एक और मुफ़्त पैक का अनुरोध करें",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"आपको अपने मुफ़्त \"Bitcoin Accepted Here\" स्टिकर 2-4 हफ़्तों में 3 स्टिकरों वाले एक सादे सफ़ेद लिफ़ाफ़े में मिलेंगे।",
	"business/sticker-success::biz_sticker_success_hero_title":
		"आपके स्टिकर रास्ते में हैं 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"अगर 3 स्टिकर आपके व्यवसाय के लिए पर्याप्त नहीं हैं, तो आप एक और मुफ़्त पैक का अनुरोध कर सकते हैं — या उसी प्रिंटर से थोक में ऑर्डर कर सकते हैं जिसे हम इस्तेमाल करते हैं।",
	"business/sticker-success::biz_sticker_success_more_header":
		"और स्टिकर चाहिए?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"मुख्य प्रवेश द्वार या शोकेस विंडो पर, ताकि ग्राहक अंदर आने से पहले देख सकें",
	"business/sticker-success::biz_sticker_success_tip_2":
		"रजिस्टर के पास, भुगतान टर्मिनल या जहाँ कहीं ग्राहक भुगतान करते हैं",
	"business/sticker-success::biz_sticker_success_tip_3":
		"मेन्यू, मूल्य सूची या टिप जार पर",
	"business/sticker-success::biz_sticker_success_tip_4":
		"उन जगहों पर स्टिकर न लगाएँ जो आपकी नहीं हैं या जहाँ लगाने की अनुमति नहीं है",
	"business/sticker-success::biz_sticker_success_tips_header":
		"स्टिकर लगाने की अच्छी जगहें",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"अपने ग्राहकों को बताएँ कि आप बिटकॉइन स्वीकार करते हैं। अपनी जगह पर लगाने के लिए मुफ़्त \"Bitcoin Accepted Here\" स्टिकरों के एक पैक का अनुरोध करें।",
	"business/stickers::biz_stickers_hero_title":
		"मुफ़्त \"Bitcoin Accepted Here\" स्टिकर",
	"business/stickers::biz_stickers_intro_c1":
		"बिटकॉइन स्वीकार करना केवल आधा काम है — आपके ग्राहकों को भी इसका पता होना चाहिए। ये छोटे \"Bitcoin Accepted Here\" स्टिकर मुख्य प्रवेश द्वार, रजिस्टर, मेन्यू या जहाँ कहीं ग्राहक भुगतान करते हैं वहाँ चिपकाने के लिए डिज़ाइन किए गए हैं।",
	"business/stickers::biz_stickers_intro_c2":
		"हम अमेरिका या कनाडा के हर पते पर एक मुफ़्त पैक भेजते हैं, या आप दुनिया में कहीं भी ख़ुद अपने स्टिकर प्रिंट कर सकते हैं।",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 कनाडा — मुफ़्त मेल",
	"business/stickers::biz_stickers_option_print":
		"🌍 वैश्विक — ख़ुद प्रिंट करें",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 अमेरिका — मुफ़्त मेल",
	"business/stickers::biz_stickers_placeholder_translation1":
		"\"Bitcoin Accepted Here\" वाक्यांश का अनुवाद",
	"business/stickers::biz_stickers_placeholder_translation2":
		"\"Scan to learn why Bitcoin is good for business.\" वाक्यांश का अनुवाद",
	"business/stickers::biz_stickers_print_c1":
		"दुनिया में कहीं भी आप रहते हों, आप ख़ुद अपने \"Bitcoin Accepted Here\" स्टिकर प्रिंट कर सकते हैं। स्टिकर फ़ाइलें और प्रिंटिंग निर्देश डाउनलोड करने के लिए नीचे अपनी भाषा पर क्लिक करें।",
	"business/stickers::biz_stickers_print_header":
		"अपनी स्टिकर फ़ाइलें ख़ुद प्रिंट करें",
	"business/stickers::biz_stickers_request_c1":
		"अपनी स्थानीय भाषा में \"Bitcoin Accepted Here\" स्टिकर फ़ाइलों का अनुरोध करने के लिए नीचे दिया गया फ़ॉर्म भरें। तैयार होने पर हम आपको बताएँगे।",
	"business/stickers::biz_stickers_request_header":
		"अपनी भाषा नहीं देख रहे?",
	"business/stickers::biz_stickers_step_description":
		"हम अमेरिका और कनाडा के पतों पर मुफ़्त पैक भेजते हैं। दुनिया के बाकी हिस्सों में आप अपने स्टिकर ख़ुद प्रिंट कर सकते हैं।",
	"business/stickers::biz_stickers_step_header":
		"आप अपने स्टिकर कैसे चाहते हैं?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"सभी बिटकॉइन वॉलेट एक साथ काम करते हैं — अपने व्यवसाय के लिए सबसे अच्छा चुनें। मुफ़्त, तुरंत निपटान, कोई चार्जबैक नहीं।",
	"business/wallets::sources_breez_business":
		"Breez — केवल बिटकॉइन Lightning वॉलेट",
	"business/wallets::sources_ibex":
		"IBEX — Lightning भुगतान बुनियादी ढाँचा",
	"business/wallets::sources_opennode":
		"OpenNode — बिटकॉइन भुगतान प्रोसेसर",
	"business/wallets::sources_square":
		"Square — बिटकॉइन भुगतान स्वीकार करें",
	"business/wallets::sources_zaprite":
		"Zaprite — व्यवसायों के लिए बिटकॉइन लेखा",
	"business/wallets::wallets_hero_subtitle":
		"बिटकॉइन वॉलेट मुफ़्त हैं। अपने व्यवसाय के लिए सबसे अच्छा चुनें — आमने-सामने, ऑनलाइन या इनवॉइस के ज़रिए — और मिनटों में बिटकॉइन स्वीकार करना शुरू करें।",
	"business/wallets::wallets_section_invoice":
		"ग्राहकों को इनवॉइस भेजने वाले व्यवसायों के लिए वॉलेट",
	"business/wallets::wallets_section_invoice_intro":
		"अगर आप अपने ग्राहकों को इनवॉइस भेजते हैं (परामर्श, फ़्रीलांस, B2B सेवाएँ), तो ऐसा वॉलेट इस्तेमाल करें जो इनवॉइस वातावरण के लिए बना हो। ग्राहक कुछ क्लिकों में बिटकॉइन इनवॉइस का भुगतान करता है।",
	"business/wallets::wallets_section_multiple":
		"कई कर्मचारियों वाले व्यवसायों के लिए वॉलेट",
	"business/wallets::wallets_section_multiple_intro":
		"अगर आपकी टीम काउंटर पर भुगतान लेती है, तो ऐसा वॉलेट चुनें जो कई कर्मचारियों के लॉगिन का समर्थन करे — ताकि हर कर्मचारी का अपना कोड हो और आप ट्रैक कर सकें कि किसने कौन-सा भुगतान लिया।",
	"business/wallets::wallets_section_online":
		"ऑनलाइन व्यवसायों के लिए वॉलेट",
	"business/wallets::wallets_section_online_intro":
		"क्या आप ऑनलाइन बेचते हैं? ये वॉलेट आपके ऑनलाइन स्टोर से जुड़ते हैं और दुनिया भर के ग्राहकों से बिटकॉइन भुगतान स्वीकार करते हैं — कोई चार्जबैक नहीं और किसी मर्चेंट खाते की ज़रूरत नहीं।",
	"business/wallets::wallets_section_sole":
		"एकल व्यापारियों के लिए वॉलेट",
	"business/wallets::wallets_section_sole_intro":
		"अगर आप अकेले दुकान, कैफ़े, स्टूडियो या सेवा चलाते हैं, तो इनमें से कोई भी वॉलेट आपके लिए उपयुक्त है। चुनें कि बिटकॉइन रखना है या हर भुगतान का कुछ हिस्सा स्वतः स्थानीय मुद्रा में बदलना है।",
	"business/wallets::wallets_strike_note":
		"Strike Business आपको बिना फ़ीस और तुरंत निपटान के साथ बिटकॉइन और Lightning भुगतान स्वीकार करने देता है। आमने-सामने, ऑनलाइन और इनवॉइस भुगतान का समर्थन करता है, स्थानीय मुद्रा में स्वतः रूपांतरण विकल्प के साथ।",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"यहाँ बिटकॉइन स्वीकार किया जाता है",
	"business/why::why_good_for_you":
		"बिटकॉइन आपके लिए भी क्यों अच्छा है",
	"business/why::why_learn_more_lowercase": "और जानें ←",
	"business/why::why_s1_c1":
		"मुद्रास्फीति तब होती है जब और पैसा छापा जाता है या शून्य से बनाया जाता है। यह आपकी जेब में रखे पैसे की कीमत समय के साथ कम कर देता है — इसीलिए कीमतें साल दर साल बढ़ती हैं।",
	"business/why::why_s1_c2":
		"बिटकॉइन की एक तय आपूर्ति है: 21 मिलियन सिक्के। कोई सरकार, बैंक या कंपनी और नहीं छाप सकती। आपकी बिटकॉइन में बचत समय के साथ अपनी कीमत बनाए रखती है, बजाय चुपचाप उसे खोने के।",
	"business/why::why_s2_c1":
		"हाल के सालों में बहुत से अमेरिकी बैंक बैंक रन के कारण ध्वस्त हुए हैं। जब बहुत से ग्राहक एक साथ अपना पैसा निकालना चाहते हैं, तो बैंकों के पास सबको देने के लिए पर्याप्त नक़दी नहीं होती।",
	"business/why::why_s2_c2":
		"आपका पैसा रखने के अलावा, बैंक उसका बड़ा हिस्सा उधार देते और निवेश करते हैं। अगर ये निवेश विफल हो जाएँ — या डिपॉज़िटर भरोसा खो दें — तो बैंक ध्वस्त हो सकता है और आपकी जमाराशि फ़्रीज़ या खो सकती है।",
	"business/why::why_s2_c3":
		"बिटकॉइन के साथ आप अपना पैसा सीधे अपने वॉलेट में रख सकते हैं। कोई बैंक नहीं। कोई मध्यस्थ नहीं। कोई बैंक रन नहीं।",
	"business/why::why_s3_c1":
		"क्रेडिट कार्ड, PayPal या पारंपरिक बैंक खातों के विपरीत, बिटकॉइन को किसी की मंज़ूरी की ज़रूरत नहीं होती।",
	"business/why::why_s3_c2":
		"कोई भी आपका खाता फ़्रीज़ नहीं कर सकता, भुगतान ब्लॉक नहीं कर सकता या आपको नेटवर्क से बाहर नहीं कर सकता। यह इतिहास की पहली वित्तीय प्रणाली है जिसका आप सेंसरशिप या ज़ब्ती के डर के बिना उपयोग कर सकते हैं।",
	"business/why::why_s4_c1":
		"बिटकॉइन को अक्सर ग़लत समझा जाता है, लेकिन यह दुनिया में चुपचाप बहुत-से अच्छे काम कर रहा है।",
	"business/why::why_s4_c2":
		"इसने मानवाधिकार कार्यकर्ताओं को अपनी आज़ादी के लिए लड़ने में मदद की, लैंडफिल और तेल के कुओं से मीथेन उत्सर्जन कम किया, बिजली के ग्रिड स्थिर किए और राष्ट्रीय उद्यानों जैसी सार्वजनिक सुविधाओं को फंड किया।",
	"business/why::why_biz_s1":
		"कम फ़ीस, व्यवसाय के लिए ज़्यादा",
	"business/why::why_biz_s1_c1":
		"बिटकॉइन भुगतान बैंकों और कार्ड कंपनियों को बायपास कर देते हैं जो हर बिक्री से 2-3% लेती हैं। व्यवसाय आपके भुगतान का ज़्यादा हिस्सा रखता है — जिसका मतलब अक्सर आपके लिए बेहतर कीमतें और बेहतर सेवा होती है।",
	"business/why::why_biz_s2":
		"तुरंत निपटान, कोई चार्जबैक नहीं",
	"business/why::why_biz_s2_c1":
		"बिटकॉइन भुगतान सेकंडों में सीधे आपके वॉलेट से व्यवसाय तक निपट जाते हैं। बैंक के पैसा जारी करने के लिए कई दिन इंतज़ार करने की ज़रूरत नहीं, और कोई महँगे चार्जबैक विवाद नहीं — जिसका मतलब है कि व्यवसाय धोखाधड़ी से लड़ने के बजाय आपको सेवा देने पर ध्यान केंद्रित कर सकता है।",
	"business/why::why_biz_s3":
		"मुफ़्त स्वीकृति, सबके लिए खुली",
	"business/why::why_biz_s3_c1":
		"व्यवसाय में बिटकॉइन स्वीकार करने के लिए कोई अनुबंध, मासिक लागत या सेटअप शुल्क नहीं चाहिए। और दुनिया भर के लाखों बिटकॉइन उपयोगकर्ता सक्रिय रूप से बिटकॉइन स्वीकार करने वाले व्यापारियों को ढूँढ़ रहे हैं — जो व्यवसाय को नए ग्राहकों के सामने मुफ़्त में दिखाता है।",
	"business/why::why_business_cta_intro":
		"क्या आपका व्यवसाय है और आप बिटकॉइन स्वीकार करना शुरू करना चाहते हैं?",
	"business/why::why_business_cta_link":
		"देखें यह कैसे काम करता है ←",
	"business/why::why_for_business":
		"बिटकॉइन इस व्यवसाय के लिए क्यों अच्छा है",
	"business/why::why_for_business_intro":
		"बिटकॉइन स्वीकार करके, यह व्यवसाय हर बिक्री से ज़्यादा रखता है, बिना चार्जबैक के तुरंत भुगतान पाता है और बिटकॉइन उपयोगकर्ताओं के वैश्विक दर्शकों तक पहुँचता है — बिना अनुबंध या मासिक लागत के।",
	"business/why::why_good_for_you_intro":
		"बिटकॉइन केवल काउंटर पर अच्छा नहीं है — यह एक बेहतर तरह का पैसा है जो आपकी बचत, निजता और लेन-देन की आज़ादी की रक्षा करता है। यह रहा एक त्वरित सारांश।",
	"business/why::why_hero_subtitle":
		"आपने एक \"Bitcoin Accepted Here\" स्टिकर स्कैन किया। यह क्यों एक अच्छी ख़बर है — इस व्यवसाय और आपके लिए।",
	"business/why::why_intro_c1":
		"आप जिस व्यवसाय में हैं, वह बिटकॉइन स्वीकार करता है — एक आधुनिक, ओपन-सोर्स भुगतान नेटवर्क जिसका दुनिया भर में कोई भी बिना बैंकों और मध्यस्थों के हिस्सा लिए इस्तेमाल कर सकता है।",
	"business/why::why_intro_c2":
		"नीचे संक्षेप में बताया गया है कि बिटकॉइन स्वीकार करना इस व्यवसाय के लिए क्यों अच्छा है, साथ ही ग्राहक के तौर पर बिटकॉइन का इस्तेमाल करना आपके लिए क्यों अच्छा है।",
	"business/why::why_next_business_label": "बिटकॉइन स्वीकार करें",
	"business/why::why_next_business_title":
		"अपने व्यवसाय में बिटकॉइन स्वीकार करें",
	"business/why::why_next_buy_label": "बिटकॉइन ख़रीदें",
	"business/why::why_next_buy_title": "अपना पहला बिटकॉइन ख़रीदें",
	"business/why::why_next_learn_label": "और जानें",
	"business/why::why_next_learn_title": "बिटकॉइन के बारे में और जानें",
	"business/why::why_next_wallet_label": "वॉलेट लें",
	"business/why::why_next_wallet_title":
		"अपना बिटकॉइन वॉलेट लें",
	"business/why::why_whats_next_heading": "आगे कहाँ?",
	"business/why::why_whats_next_intro":
		"अगर यह आपकी पहली बार है कि आप बिटकॉइन स्टिकर स्कैन कर रहे हैं, तो ये सबसे उपयोगी जगहें हैं जहाँ आप जा सकते हैं।",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "पीयर-टू-पीयर (सीधे उपयोगकर्ताओं के बीच)",
	"buy::buy_bitcoin_guide": "बिटकॉइन कैसे ख़रीदें",
	"buy::buy_step_1_header": "अपना देश चुनें",
	"buy::buy_step_2_header": "अपनी भुगतान विधि चुनें",
	"buy::buy_step_3_header": "आपके ख़रीद विकल्प",
	"buy::buy_step_4_header": "अपना बिटकॉइन सुरक्षित ढंग से रखें",
	"buy::buy_header_subtitle":
		"अपना पहला बिटकॉइन ख़रीदने के लिए सरल क़दम-दर-क़दम गाइड।",
	"buy::buy_howto_name": "बिटकॉइन कैसे ख़रीदें",
	"buy::buy_meta_description":
		"हमारी क़दम-दर-क़दम गाइड के साथ बिटकॉइन सुरक्षित ढंग से ख़रीदना सीखें। अपने लिए सबसे अच्छे ख़रीद विकल्प पाने के लिए अपना देश और भुगतान विधि चुनें।",
	"buy::buy_step_1_eyebrow": "क़दम 1",
	"buy::buy_step_2_eyebrow": "क़दम 2",
	"buy::buy_step_3_eyebrow": "क़दम 3",
	"buy::buy_step_4_eyebrow": "क़दम 4",
	"buy::buy_storage_cta_label": "अगला कदम",
	"buy::sources_bisq":
		"Bisq — विकेंद्रीकृत पीयर-टू-पीयर बिटकॉइन एक्सचेंज",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — बिटकॉइन ATM की वैश्विक डायरेक्ट्री",
	"buy::sources_kraken": "Kraken — लोकप्रिय बिटकॉइन एक्सचेंज",
	"buy::sources_relai":
		"Relai — स्विस सेल्फ-कस्टडी बिटकॉइन ऐप",
	"buy::sources_river":
		"River — केवल बिटकॉइन ख़रीदें, माइन और रखें",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network समर्थन के साथ बिटकॉइन ख़रीदें",
	"buy::sources_swan":
		"Swan Bitcoin — केवल बिटकॉइन डॉलर-कॉस्ट एवरेजिंग (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "भाषा जोड़ें",
	"common::common_next_buy_bitcoin": "बिटकॉइन ख़रीदें",
	"common::common_next_buy_bitcoin_desc":
		"बिटकॉइन सुरक्षित ढंग से ख़रीदना सीखें",
	"common::common_next_calculate": "अपनी मुद्रास्फीति की गणना करें",
	"common::common_next_calculate_desc":
		"देखें कि मुद्रास्फीति समय के साथ आपके वेतन को कैसे प्रभावित करती है",
	"common::common_next_get_wallet": "वॉलेट लें",
	"common::common_next_get_wallet_desc":
		"अपना पहला बिटकॉइन वॉलेट लें — यह मुफ़्त है",
	"common::common_next_keep_learning": "सीखते रहें",
	"common::common_next_keep_learning_desc":
		"देखें कि बिटकॉइन कैसे दुनिया को बेहतर बना रहा है",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — उपभोक्ता मूल्य सूचकांक (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — मनी सप्लाई (श्रेणी सूचकांक)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"क्या ट्रेज़री नीलामी विफल हो सकती है?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "आगे क्या?",
	"common::common_sticker_files_mission_5": "एक पैक का अनुरोध करें",
	"common::common_site_tagline": "सबके लिए बिटकॉइन शिक्षा।",
	"common::common_source_btc_map":
		"BTC Map — बिटकॉइन स्वीकार करने वाले व्यापारियों की वैश्विक डायरेक्ट्री",
	"common::common_source_btcpayserver":
		"BTCPay Server — सेल्फ-होस्टेड के लिए मुफ़्त, ओपन-सोर्स बिटकॉइन भुगतान प्रोसेसर",
	"common::common_source_oshi":
		"Oshi — व्यापारियों के लिए बिटकॉइन पुरस्कार प्लेटफ़ॉर्म",
	"common::common_source_strike_business":
		"Strike — व्यवसायों के लिए बिटकॉइन और Lightning भुगतान",
	"common::common_sources_group_bitcoin": "बिटकॉइन डेटा",
	"common::common_sources_group_cpi":
		"मुद्रास्फीति / CPI",
	"common::common_sources_group_debt": "सरकारी कर्ज़",
	"common::common_sources_group_money": "मनी सप्लाई डेटा",
	"common::common_sources_group_stories": "वास्तविक उदाहरण",
	"common::common_sticker_files_mission_6":
		"अंग्रेज़ी में मुफ़्त स्टिकर।",
	"common::common_sticker_files_next_flyers_label": "फ़्लायर",
	"common::common_sticker_files_next_flyers_title":
		"बिटकॉइन फ़्लायर प्रिंट करें",
	"common::common_sticker_files_next_languages_label":
		"स्टिकर फ़ाइलें",
	"common::common_sticker_files_next_languages_title":
		"अन्य भाषाओं में स्टिकर फ़ाइलें देखें",
	"common::common_sticker_files_print_these":
		"इन्हें एक क्लिक में प्रिंट करें",
	"common::common_sticker_name_bdhi_black":
		"\"Bitcoin Doesn\u2019t Have Inflation\" स्टिकर (काला)",
	"common::common_sticker_name_bdhi_orange":
		"\"Bitcoin Doesn\u2019t Have Inflation\" स्टिकर (नारंगी)",
	"common::common_sticker_name_caution":
		"\"Caution! Melting Ice Cube\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_cure_inflation":
		"\"Cure Inflation\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_danger":
		"\"Danger! Inflation Ahead\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_fix":
		"\"Fix The Money, Fix The World\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_got_inflation":
		"\"Got Inflation?\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_study":
		"\"Study Bitcoin\" स्टिकर",
	"common::common_sticker_name_warning":
		"\"Warning! Inflation is Stealing Your Savings\" बिटकॉइन स्टिकर",
	"common::common_sticker_name_what_if":
		"\"What if your money didn\u2019t have inflation?\" बिटकॉइन स्टिकर",
	"common::common_sticker_tips_heading": "स्टिकर टिप्स",
	"common::common_sticker_tips_intro":
		"अपने स्टिकर प्रिंट करने के बाद, उन्हें वहाँ लगाएँ जहाँ लोग देखेंगे! अच्छी जगहें:",
	"common::common_sticker_tips_list_1":
		"सार्वजनिक स्थान जहाँ लोग उन्हें देखेंगे",
	"common::common_sticker_tips_list_2":
		"ऐसी जगहें जहाँ वे तुरंत हटाए नहीं जाएँगे (स्टिकर स्थायी नुक़सान नहीं करते)",
	"common::common_sticker_tips_list_3":
		"ऐसी सतहें जिन पर वे अच्छी तरह चिपकें (धातु, प्लास्टिक, काँच)",
	"common::common_sticker_tips_list_4":
		"निजी संपत्ति, सड़क के संकेत, ATM या ईंधन पंप पर न लगाएँ",
	"common::common_stickers_printer_prefix": "हम इस्तेमाल करते हैं",
	"common::common_stickers_printer_suffix":
		"लेकिन आप किसी भी स्टिकर प्रिंटर का उपयोग कर सकते हैं।",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — सभी शहरी उपभोक्ताओं के लिए उपभोक्ता मूल्य सूचकांक",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 मनी सप्लाई",
	"compound-inflation-calculator::cic_calculator_heading":
		"अपनी मुद्रास्फीति का अंतर निकालें",
	"compound-inflation-calculator::cic_cta_label": "अगला कदम",
	"compound-inflation-calculator::cic_hero_subtitle":
		"जानें मुद्रास्फीति की रफ़्तार से क़दम मिलाने के लिए आपके वेतन को कितना बढ़ना चाहिए।",
	"compound-inflation-calculator::cic_next_explore_topics":
		"और विषय खोजें",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"देखें बिटकॉइन का पैसे, आज़ादी, ऊर्जा और बहुत कुछ से क्या नाता है।",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"मुद्रास्फीति कैसे काम करती है, सीखें",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"इन बिटकॉइन फ़्लायरों को कैसे प्रिंट करें और लगाएँ",
	"flyers::flyers_hero_subtitle":
		"मुफ़्त, प्रिंट करने योग्य बिटकॉइन फ़्लायर। उन्हें सार्वजनिक स्थानों पर लगाएँ ताकि और लोग बिटकॉइन के बारे में जान सकें।",
	"flyers::flyers_hero_title": "बिटकॉइन फ़्लायर प्रिंट करें और लगाएँ",
	"flyers::flyers_next_get_stickers": "संदेश को और दूर तक फैलाएँ",
	"flyers::flyers_next_get_stickers_desc":
		"बिटकॉइन स्टिकरों के एक मुफ़्त पैक का अनुरोध करें",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"शामिल हों और बिटकॉइन फैलाने में मदद करें",
	"get-involved::get_involved_business_content_1":
		"बिटकॉइन की सर्कुलर अर्थव्यवस्था बनाने में मदद करना चाहते हैं? सबसे आसान तरीक़ा है स्थानीय व्यवसायों को बिटकॉइन भुगतान स्वीकार करना शुरू करने में मदद करना।",
	"get-involved::get_involved_business_content_2":
		"किसी ऐसे व्यवसाय को जानते हैं जो शुरू कर सकता है? मालिक को हमारे पेज पर भेजें",
	"get-involved::get_involved_business_content_3":
		"व्यवसायों के लिए बिटकॉइन।",
	"get-involved::get_involved_description":
		"हमारे मुफ़्त टूल बिटकॉइन अपनाने को फैलाना आसान बनाते हैं। स्टिकर, फ़्लायर, व्यवसायों के लिए \"Bitcoin Accepted Here\" स्टिकर और ओपन-सोर्स कोड जिसमें कोई भी योगदान दे सकता है।",
	"get-involved::get_involved_header":
		"शामिल हों और बिटकॉइन फैलाने में मदद करें।",
	"get-involved::get_involved_intro_5":
		"आप इसे बदलने में मदद कर सकते हैं। हमने कुछ मुफ़्त टूल बनाए हैं जो आपको अपने समुदाय में बिटकॉइन की उम्मीद फैलाने में मदद करेंगे।",
	"get-involved::get_involved_biz_stickers_note":
		"पहले से बिटकॉइन स्वीकार कर रहे हैं? हमारे मुफ़्त \"Bitcoin Accepted Here\" स्टिकरों से अपने ग्राहकों को बताएँ। हम अमेरिका या कनाडा के हर पते पर एक पैक भेजते हैं, या आप दुनिया में कहीं भी ख़ुद प्रिंट कर सकते हैं।",
	"get-involved::get_involved_card_biz_stickers_label":
		"\"Accepted Here\" स्टिकर",
	"get-involved::get_involved_card_biz_stickers_source":
		"स्रोत: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"अपने व्यवसाय के लिए मुफ़्त \"Bitcoin Accepted Here\" स्टिकर",
	"get-involved::get_involved_card_business_label":
		"व्यवसायों के लिए बिटकॉइन",
	"get-involved::get_involved_card_business_source":
		"स्रोत: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"बिटकॉइन भुगतान स्वीकार करने के लिए व्यवसाय को जो भी चाहिए",
	"get-involved::get_involved_card_flyers_label": "प्रिंट करने योग्य फ़्लायर",
	"get-involved::get_involved_card_flyers_source":
		"स्रोत: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"मुफ़्त बिटकॉइन फ़्लायर डाउनलोड और प्रिंट करें",
	"get-involved::get_involved_card_github_label": "ओपन सोर्स",
	"get-involved::get_involved_card_github_source": "स्रोत: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"GitHub पर bitcoin.rocks में योगदान करें",
	"get-involved::get_involved_card_stickers_label":
		"मुफ़्त स्टिकर",
	"get-involved::get_involved_card_stickers_source":
		"स्रोत: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"बिटकॉइन स्टिकरों के एक मुफ़्त पैक का अनुरोध करें, सीधे अपने दरवाज़े तक",
	"get-involved::get_involved_flyers_content_1":
		"फ़्लायर अपने समुदाय में बिटकॉइन का परिचय कराने का सबसे सरल तरीक़ा है। हमारा मुफ़्त बिटकॉइन फ़्लायर डाउनलोड करें, जितनी चाहें कॉपी प्रिंट करें और उन्हें सूचना पटों, कैफ़े, मीटअप या जहाँ भी लोग जुटते हैं वहाँ लगाएँ।",
	"get-involved::get_involved_flyers_content_2":
		"हर फ़्लायर में एक आकर्षक शीर्षक और एक QR कोड होता है जो जिज्ञासु पाठकों को और जानने के लिए bitcoin.rocks पर भेजता है।",
	"get-involved::get_involved_flyers_content_3":
		"स्टिकरों के विपरीत, फ़्लायर दुनिया में कहीं भी माँग पर प्रिंट किए जा सकते हैं — आपको बस एक प्रिंटर और कुछ मिनट चाहिए।",
	"get-involved::get_involved_flyers_header":
		"फ़्लायर प्रिंट करें और लगाएँ",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks का मुफ़्त, प्रिंट करने योग्य बिटकॉइन फ़्लायर का पूर्वावलोकन",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks MIT लाइसेंस के तहत एक मुफ़्त, ओपन-सोर्स परियोजना है। हमारा मिशन शिक्षा के माध्यम से बिटकॉइन अपनाने में तेज़ी लाना है — और हम अकेले नहीं कर सकते।",
	"get-involved::get_involved_github_content_2":
		"अगर आप डेवलपर, डिज़ाइनर, लेखक या अनुवादक हैं, मदद करने का एक तरीक़ा है। हम विशेष रूप से उन लोगों को ढूँढ़ रहे हैं जो हमारी सामग्री को और भाषाओं में अनुवादित कर सकें, ताकि दुनिया भर के लोग अपनी मातृभाषा में बिटकॉइन के बारे में सीख सकें।",
	"get-involved::get_involved_github_content_3":
		"हमारे रेपो को फ़ोर्क करें, pull request खोलें, issue बनाएँ या प्रोजेक्ट को स्टार दें। हर योगदान बिटकॉइन को और लोगों तक पहुँचाने में मदद करता है।",
	"get-involved::get_involved_github_header":
		"GitHub पर योगदान करें",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks के मुफ़्त बिटकॉइन टेक्स्ट स्टिकर पैक",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "बचत",
	"index::home_card_label_art_1": "तुलना करें",
	"index::home_card_label_art_2": "संदेश फैलाएँ",
	"index::home_card_label_art_3": "स्ट्रीट आर्ट",
	"index::home_card_label_bank_runs": "पूर्ण-रिज़र्व प्रणाली",
	"index::home_card_label_bonds": "तुलना करें",
	"index::home_card_label_business_1": "क्या फ़र्क है?",
	"index::home_card_label_business_2": "बिटकॉइन भुगतान स्वीकार करें",
	"index::home_card_label_cash": "तुलना करें",
	"index::home_card_label_cbdc": "खुला या बंद?",
	"index::home_card_label_coding_1": "इंटरैक्टिव ट्यूटोरियल",
	"index::home_card_label_coding_2": "हार्डवेयर बनाएँ",
	"index::home_card_label_coding_3": "कोडिंग पहेलियाँ",
	"index::home_card_label_crowdfunding_1": "EndSARS प्रदर्शन",
	"index::home_card_label_crowdfunding_2": "न रोका जा सकने वाला पैसा",
	"index::home_card_label_crowdfunding_3": "अपनी परियोजना को फंड करें",
	"index::home_card_label_crypto": "क्या फ़र्क है?",
	"index::home_card_label_energy_1": "ग्रिड स्थिरीकरण",
	"index::home_card_label_energy_4": "माँग प्रतिक्रिया",
	"index::home_card_label_energy_5": "ग्रामीण विद्युतीकरण",
	"index::home_card_label_energy_6": "नवीकरणीय प्रोत्साहन",
	"index::home_card_label_environment_1": "मीथेन में कमी",
	"index::home_card_label_environment_2": "एक राष्ट्रीय उद्यान बचाया",
	"index::home_card_label_environment_3": "सबसे हरित उद्योग",
	"index::home_card_label_environment_4": "जलाई जाने वाली गैस घटाई",
	"index::home_card_label_equality_1": "उम्मीद और अवसर",
	"index::home_card_label_equality_2": "खेल बदलने वाला",
	"index::home_card_label_food_1": "खाने की कीमतें",
	"index::home_card_label_food_2": "खेत और मिट्टी",
	"index::home_card_label_freedom_1": "तानाशाही शासन",
	"index::home_card_label_freedom_2": "एक अनूठा उपकरण",
	"index::home_card_label_get_started_1":
		"शुरुआती बुनियादी बातें",
	"index::home_card_label_get_started_2": "आपका पहला वॉलेट",
	"index::home_card_label_get_started_3": "बिटकॉइन ख़रीदें",
	"index::home_card_label_gold": "कौन-सा बेहतर है?",
	"index::home_card_label_housing_1": "किफ़ायती आवास",
	"index::home_card_label_human_rights_1":
		"मानवाधिकारों को बढ़ावा",
	"index::home_card_label_human_rights_2": "जमीनी अपनाव",
	"index::home_card_label_human_rights_3": "वैश्विक प्रभाव",
	"index::home_card_label_inflation": "बिटकॉइन बेहतर पैसा है",
	"index::home_card_label_networks_1": "नेटवर्क का लाइव दृश्य",
	"index::home_card_label_networks_2": "तुलना करें",
	"index::home_card_label_payments_1": "क्या फ़र्क है?",
	"index::home_card_label_payments_2": "तेज़ और सस्ते भुगतान",
	"index::home_card_label_payments_3": "रेमिटेंस",
	"index::home_card_label_payments_4": "भुगतान प्राप्त करें",
	"index::home_card_label_politics_1": "राजनीतिक विरोधाभास",
	"index::home_card_label_politics_2": "क़दम उठाएँ",
	"index::home_card_label_property_rights_1": "तुलना करें",
	"index::home_card_label_property_rights_2": "असली मालिकाना हक़",
	"index::home_card_label_salary": "अपने वेतन की रक्षा करें",
	"index::home_card_label_self_custody_1":
		"बिटकॉइन वॉलेट गाइड",
	"index::home_card_label_self_custody_2": "सबसे ज़रूरी क़दम",
	"index::home_card_label_self_custody_3": "संप्रभु पैसा",
	"index::home_card_label_war_1": "अंतहीन युद्ध का अंत",
	"index::home_card_label_war_2": "वेटरन्स की मदद",
	"index::home_card_label_war_3": "युद्धकालीन पलायन",
	"index::home_h1":
		"बिटकॉइन बेहतर पैसा है जो एक बेहतर दुनिया बना रहा है।",
	"index::home_nav_about": "हमारे बारे में",
	"index::home_nav_get_involved": "शामिल हों",
	"index::home_nav_learn": "सीखें",
	"index::home_source_prefix": "स्रोत:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon और Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "देखें",
	"lightning::lightning_grid_heading":
		"लोकप्रिय Lightning वॉलेट",
	"lightning::lightning_hardware_cta_label":
		"हार्डवेयर वॉलेट",
	"lightning::lightning_header_subtitle":
		"Lightning आपको एक सेंट से कम में सेकंडों में बिटकॉइन भेजने देता है — आप जितना ख़र्च करना चाहते हैं उसके लिए सही वॉलेट चुनें।",
	"lightning::lightning_s1_c4_end": "और जानने के लिए।",
	"lightning::lightning_s1_c4_link":
		"बिटकॉइन हार्डवेयर वॉलेट गाइड",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning वॉलेट",
	"lightning::sources_breez_lightning":
		"Breez — सेल्फ-कस्टडी Lightning वॉलेट",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network दस्तावेज़",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — कस्टोडियल Lightning वॉलेट",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android और वेब",
	"nostr/index::nostr_platform_web": "वेब ब्राउज़र",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr इंटरनेट के लिए एक नया, विकेंद्रीकृत संचार प्रोटोकॉल है — किसी कंपनी का स्वामित्व नहीं है, इसमें बिल्ट-इन बिटकॉइन zaps हैं और आप क्लाइंट बदल सकते हैं बिना अनुयायी खोए।",
	"nostr/index::nostr_amethyst_f1":
		"बहुत-सी सुविधाएँ और अनुकूलन विकल्प",
	"nostr/index::nostr_amethyst_f2":
		"अलग बिटकॉइन वॉलेट चाहिए",
	"nostr/index::nostr_amethyst_f3": "100% मुफ़्त",
	"nostr/index::nostr_damus_f1":
		"परिचित Twitter जैसा इंटरफ़ेस",
	"nostr/index::nostr_damus_f2":
		"अलग बिटकॉइन वॉलेट चाहिए",
	"nostr/index::nostr_damus_f3": "100% मुफ़्त",
	"nostr/index::nostr_download_heading":
		"मुफ़्त Nostr क्लाइंट डाउनलोड करें",
	"nostr/index::nostr_download_intro":
		"Nostr क्लाइंट मुफ़्त ऐप्स हैं जो आपको Nostr नेटवर्क पर पढ़ने और लिखने देते हैं। वे सब एक साथ काम करते हैं — आप कभी भी क्लाइंट बदल सकते हैं और अपने अनुयायी और सामग्री बनाए रख सकते हैं।",
	"nostr/index::nostr_hero_subtitle":
		"Nostr इंटरनेट के लिए एक नया, विकेंद्रीकृत संचार प्रोटोकॉल है — किसी कंपनी का स्वामित्व नहीं है, इसमें बिल्ट-इन बिटकॉइन zaps हैं और आप ऐप्स बदल सकते हैं बिना अनुयायी खोए।",
	"nostr/index::nostr_hero_title": "Nostr क्या है?",
	"nostr/index::nostr_intro_c1":
		"Nostr ईमेल जैसा है: किसी का प्रोटोकॉल पर स्वामित्व नहीं है, कोई भी इस पर ऐप बना सकता है और आप चुनते हैं कि आपके लिए कौन-सा बेहतर है। Twitter या Facebook के विपरीत, कोई केंद्रीय कंपनी नहीं है जो आपके खातों को सेंसर, बंद या चुप करा सके।",
	"nostr/index::nostr_intro_c2":
		"नीचे संक्षेप में बताया गया है कि Nostr क्यों मायने रखता है — और फिर वे सभी मुफ़्त Nostr क्लाइंट जो आज शुरू करने के लिए चाहिए।",
	"nostr/index::nostr_iris_f1":
		"बहुत हल्का — इंस्टॉल नहीं करना पड़ता",
	"nostr/index::nostr_iris_f2":
		"ट्रायल खाते के साथ Nostr आज़माने का आसान तरीक़ा",
	"nostr/index::nostr_iris_f3": "100% मुफ़्त",
	"nostr/index::nostr_learn_more_label": "गहराई से जानें",
	"nostr/index::nostr_learn_more_title":
		"nostr.how पर Nostr के बारे में और जानें",
	"nostr/index::nostr_primal_f1": "हमारा पहला सिफ़ारिशी क्लाइंट",
	"nostr/index::nostr_primal_f2":
		"बिल्ट-इन बिटकॉइन zap वॉलेट",
	"nostr/index::nostr_primal_f3": "100% मुफ़्त",
	"nostr/index::nostr_s1": "एक प्रोटोकॉल, प्लेटफ़ॉर्म नहीं",
	"nostr/index::nostr_s1_c1":
		"Nostr एक नया प्रोटोकॉल है जो आपको सेंसरशिप, प्रतिबंध या चुप कराए जाने के डर के बिना इंटरनेट पर संवाद करने देता है।",
	"nostr/index::nostr_s1_c2":
		"Twitter या Facebook जैसे प्लेटफ़ॉर्म एक कंपनी द्वारा नियंत्रित होते हैं, लेकिन Nostr प्रोटोकॉल पर किसी का नियंत्रण नहीं है।",
	"nostr/index::nostr_s2": "गति की स्वतंत्रता",
	"nostr/index::nostr_s2_c1":
		"Nostr ईमेल जैसा है। कोई ईमेल प्रोटोकॉल को नियंत्रित नहीं करता और कोई भी क्लाइंट बना सकता है (जैसे Gmail, Hotmail वग़ैरह)।",
	"nostr/index::nostr_s2_c2":
		"Nostr प्रोटोकॉल पर भी किसी का नियंत्रण नहीं है और कोई भी क्लाइंट बना सकता है (जैसे Damus, Amethyst वग़ैरह)।",
	"nostr/index::nostr_s2_c3":
		"अगर आपको किसी क्लाइंट का काम करने का तरीक़ा पसंद नहीं है, तो आप अपना Nostr खाता दूसरे क्लाइंट में ले जा सकते हैं, बिना अनुयायी या सामग्री खोए।",
	"nostr/index::nostr_s3": "बिल्ट-इन बिटकॉइन",
	"nostr/index::nostr_s3_c1":
		"बिटकॉइन Nostr प्रोटोकॉल में बिल्ट-इन है। जब आप पसंद की सामग्री देखते हैं, तो आप लेखक को धन्यवाद देने के लिए \"बिटकॉइन zap\" भेज सकते हैं।",
	"nostr/index::nostr_s3_c2":
		"Twitter और Facebook जैसे केंद्रीकृत प्लेटफ़ॉर्म पर, केंद्रीय कंपनी आपकी सामग्री से पैसा कमाती है। लेकिन Nostr जैसे खुले प्रोटोकॉल पर, आप अपनी सामग्री से पैसा कमाते हैं।",
	"nostr/index::sources_damus": "Damus — iPhone के लिए Nostr क्लाइंट",
	"nostr/index::sources_iris": "Iris — वेब ब्राउज़र के लिए Nostr क्लाइंट",
	"nostr/index::sources_nostr_how": "nostr.how — Nostr क्या है?",
	"nostr/index::sources_nostr_protocol":
		"Nostr प्रोटोकॉल — ओपन-सोर्स विशिष्टताएँ",
	"nostr/index::sources_primal":
		"Primal — बिल्ट-इन बिटकॉइन zap वॉलेट के साथ Nostr क्लाइंट",
	"nostr/index::what_is_nostr": "Nostr क्या है?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"इन फ़ाइलों के साथ अपने बिटकॉइन स्टिकर प्रिंट करें।",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"अनुरोध मिल गया 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"थोक में ऑर्डर करें",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr पर साझा करें",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr क्या है?",
	"sticker-success::sticker_success_bulk_header":
		"और स्टिकर चाहिए?",
	"sticker-success::sticker_success_hero_title":
		"आपके स्टिकर रास्ते में हैं 🎉",
	"sticker-success::sticker_success_share_header":
		"साझा करें कि आपने अपने स्टिकर कहाँ लगाए",
	"sticker-success::sticker_success_tips_header":
		"स्टिकर लगाने की अच्छी जगहें",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "बिटकॉइन",
	"stickers::stickers_flyers_link_before":
		"और एक बार जब आप शुरू करें, ",
	"stickers::stickers_instructions_1":
		"अपना डाक पता डालें और हम आपको मुफ़्त बिटकॉइन स्टिकर का एक पैक मेल करेंगे। आपके स्टिकर एक सादे सफ़ेद लिफ़ाफ़े में पहुँचेंगे।",
	"stickers::stickers_btn_choose_pack": "यह पैक चुनें",
	"stickers::stickers_bulk_c1":
		"कुछ से ज़्यादा स्टिकर चाहिए?",
	"stickers::stickers_bulk_c2":
		"उसी प्रिंटर से थोक में ऑर्डर करें जिसे हम इस्तेमाल करते हैं",
	"stickers::stickers_bulk_c3":
		"— जितना ज़्यादा ख़रीदेंगे, हर एक उतना सस्ता होगा।",
	"stickers::stickers_bulk_cta": "थोक में स्टिकर ख़रीदें",
	"stickers::stickers_bulk_header":
		"थोक में स्टिकर ऑर्डर करें",
	"stickers::stickers_hero_subtitle":
		"बिटकॉइन स्टिकरों के एक मुफ़्त पैक का अनुरोध करें और उन्हें सार्वजनिक स्थानों पर लगाएँ ताकि और लोग बिटकॉइन के बारे में जान सकें।",
	"stickers::stickers_hero_title": "मुफ़्त बिटकॉइन स्टिकर",
	"stickers::stickers_intro_c1":
		"हमारा मिशन है आपको स्टिकरों के साथ और लोगों को \"नारंगी पिल\" लेने में मदद करना, सार्वजनिक स्थानों पर बिटकॉइन स्टिकर लगाकर। हमारे सभी स्टिकरों पर QR कोड हैं जो शिक्षा पेजों पर ले जाते हैं",
	"stickers::stickers_intro_c3": "मुद्रास्फीति",
	"stickers::stickers_intro_c4":
		"नीचे एक स्टिकर पैक चुनें और चुनें कि आप उसे कैसे चाहते हैं — हम अमेरिका या कनाडा में किसी को भी एक मुफ़्त पैक भेजते हैं, या आप दुनिया में कहीं भी अपने स्टिकर ख़ुद प्रिंट कर सकते हैं।",
	"stickers::stickers_mail_header":
		"हम मुफ़्त में स्टिकर मेल करते हैं",
	"stickers::stickers_next_print_flyers": "संदेश को और दूर तक फैलाएँ",
	"stickers::stickers_next_print_flyers_desc":
		"मुफ़्त बिटकॉइन फ़्लायर प्रिंट करें और सार्वजनिक स्थानों पर लगाएँ",
	"stickers::stickers_option_bulk":
		"📦 वैश्विक — थोक में ऑर्डर करें",
	"stickers::stickers_option_canada":
		"🇨🇦 कनाडा — मुफ़्त मेल",
	"stickers::stickers_option_print":
		"🌍 वैश्विक — ख़ुद प्रिंट करें",
	"stickers::stickers_option_usa":
		"🇺🇸 अमेरिका — मुफ़्त मेल",
	"stickers::stickers_print_c1":
		"आप ख़ुद स्टिकर प्रिंट करके योगदान कर सकते हैं, दुनिया में कहीं भी आप रहते हों। स्टिकर फ़ाइलें और प्रिंटिंग निर्देश डाउनलोड करने के लिए नीचे अपनी भाषा पर क्लिक करें।",
	"stickers::stickers_print_c2":
		"सभी स्टिकर सभी भाषाओं में उपलब्ध नहीं हैं।",
	"stickers::stickers_print_header":
		"अपनी स्टिकर फ़ाइलें ख़ुद प्रिंट करें",
	"stickers::stickers_request_c1":
		"अपनी स्थानीय भाषा में स्टिकर फ़ाइलों का अनुरोध करने के लिए नीचे दिया गया फ़ॉर्म भरें। तैयार होने पर हम आपको बताएँगे।",
	"stickers::stickers_request_header":
		"अपनी भाषा नहीं देख रहे?",
	"stickers::stickers_share_c2":
		"किसी भी Nostr क्लाइंट में हमें खोजकर हमें Nostr पर फ़ॉलो करें",
	"stickers::stickers_share_c3":
		"।",
	"stickers::stickers_signs_pack_description":
		"बिटकॉइन संदेशों के साथ चेतावनी, सावधानी और नोटिस स्टिकर — आँखों को पकड़ने और लोगों को रोकने के लिए डिज़ाइन किए गए।",
	"stickers::stickers_step_1_description":
		"हर पैक में बिटकॉइन स्टिकरों का अलग संग्रह है, जिनमें QR कोड हैं जो लोगों को बिटकॉइन के बारे में सिखाते हैं।",
	"stickers::stickers_step_1_eyebrow": "क़दम 1",
	"stickers::stickers_step_1_header":
		"एक स्टिकर पैक चुनें",
	"stickers::stickers_step_2_description":
		"हम अमेरिका और कनाडा के पतों पर मुफ़्त पैक भेजते हैं। दुनिया के बाकी हिस्सों में आप स्टिकर ख़ुद प्रिंट कर सकते हैं या थोक में ऑर्डर कर सकते हैं।",
	"stickers::stickers_step_2_eyebrow": "क़दम 2",
	"stickers::stickers_step_2_header":
		"आप अपने स्टिकर कैसे चाहते हैं?",
	"stickers::stickers_text_pack_description":
		"बिटकॉइन के नारों और हँसमुख विचारों का मिश्रण, सार्वजनिक स्थानों पर जिज्ञासा जगाने के लिए डिज़ाइन किया गया।",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — अपना वॉलेट चुनें",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — मेटल बिटकॉइन सीड स्टोरेज समीक्षाएँ",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — सेल्फ-कस्टडी बिटकॉइन वॉलेट",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — बिटकॉइन हार्डवेयर वॉलेट",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 हार्डवेयर वॉलेट",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q हार्डवेयर वॉलेट",
	"wallets::sources_passport":
		"Foundation Devices — Passport हार्डवेयर वॉलेट",
	"wallets::sources_seedsigner":
		"SeedSigner — बिटकॉइन लेन-देन के लिए DIY ओपन-सोर्स साइनिंग डिवाइस",
	"wallets::wallets_grid_heading": "लोकप्रिय बिटकॉइन वॉलेट",
	"wallets::wallets_header_subtitle":
		"वॉलेट चुनने, अपनी कीज़ का बैकअप लेने और अपने बिटकॉइन पर पूरा नियंत्रण लेने के लिए क़दम-दर-क़दम गाइड।",
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
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (hi): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
