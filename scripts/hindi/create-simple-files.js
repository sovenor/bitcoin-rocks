/**
 * Creates Hindi (hi) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hi';
const today = '2026-04-02';

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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404 त्रुटि | पेज नहीं मिला",
	"404_message": "यह टूटा हुआ पेज बिल्कुल भी अच्छा नहीं है",
	"404_home": "होम पेज पर वापस जाएं"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks के बारे में — 2022 से Bitcoin शिक्षा",
	"about_description": "bitcoin.rocks एक मुफ़्त, ओपन-सोर्स Bitcoin शिक्षा वेबसाइट है जिसकी स्थापना 2022 में हुई थी। हमारा मिशन शिक्षा के माध्यम से Bitcoin अपनाने में तेज़ी लाना है।",
	"about_header": "हमारे बारे में",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "हमारा मिशन",
	"about_mission_1": "bitcoin.rocks की स्थापना 2022 में एक सरल मिशन के साथ हुई थी: शिक्षा के माध्यम से Bitcoin अपनाने में तेज़ी लाना।",
	"about_mission_2": "हम Bitcoin के बारे में जिज्ञासु लोगों के साथ साझा करने के लिए पहले लिंक के रूप में मौजूद हैं। एक मित्रवत और समझने में आसान शुरुआती बिंदु जो बताता है कि Bitcoin कैसे एक बेहतर दुनिया बना रहा है।",
	"about_mission_3": "बहुत से लोग Bitcoin के बारे में नहीं जानते या उन्हें कभी ठीक से इसका परिचय नहीं दिया गया। हम मुफ़्त, उच्च-गुणवत्ता वाली शैक्षिक सामग्री प्रदान करके इसे बदलना चाहते हैं जिसे हर कोई समझ सके।",
	"about_what_we_do_header": "हम क्या करते हैं",
	"about_what_we_do_1": "हम Bitcoin शुरुआती लोगों के लिए मुफ़्त शैक्षिक सामग्री बनाते हैं। हमारे पेज मुद्रास्फीति, स्व-संरक्षण, वॉलेट, लाइटनिंग नेटवर्क, और Bitcoin की अन्य संपत्तियों और भुगतान प्रणालियों से तुलना जैसे विषयों को कवर करते हैं।",
	"about_what_we_do_2a": "हम",
	"about_what_we_do_2b": "मुफ़्त Bitcoin स्टिकर",
	"about_what_we_do_2c": "सीधे आपके दरवाज़े पर भेजते हैं ताकि आप अपने समुदाय में Bitcoin जागरूकता फैलाने में मदद कर सकें। हर महीने सैकड़ों लोग इन स्टिकर पर QR कोड स्कैन करके Bitcoin के बारे में सीखते हैं।",
	"about_what_we_do_3a": "हम",
	"about_what_we_do_3b": "प्रिंट करने योग्य फ्लायर",
	"about_what_we_do_3c": "और",
	"about_what_we_do_3d": "बिज़नेस टूलकिट",
	"about_what_we_do_3e": "भी प्रदान करते हैं ताकि कोई भी स्थानीय व्यवसाय को Bitcoin भुगतान स्वीकार करने के लिए मना सके।",
	"about_what_we_do_4": "हमारी सारी सामग्री यह मानती है कि पाठक को Bitcoin का शून्य पूर्व ज्ञान है। चाहे आप Bitcoin में नए हों या साझा करने के लिए संसाधन खोज रहे अनुभवी Bitcoiner हों, bitcoin.rocks आपके लिए है।",
	"about_editorial_header": "हमारी संपादकीय नीति",
	"about_editorial_1": "bitcoin.rocks पर हर सामग्री को ध्यानपूर्वक क्यूरेट और तथ्य-जाँच किया जाता है। जब हम डेटा या आँकड़े उद्धृत करते हैं, तो हम स्रोत प्रदान करते हैं ताकि आप स्वयं सत्यापित कर सकें।",
	"about_editorial_2": "हम TIME पत्रिका, Forbes, MIT Technology Review, Lyn Alden जैसे आधिकारिक स्रोतों का हवाला देते हैं। हमारा मानना है कि जब तथ्य स्पष्ट रूप से प्रस्तुत किए जाते हैं, तो Bitcoin खुद बोलता है।",
	"about_editorial_3": "हमारी सामग्री की नियमित समीक्षा और अपडेट किया जाता है ताकि सटीकता और प्रासंगिकता सुनिश्चित हो सके। सारी सामग्री विशेष रूप से Bitcoin शिक्षा पर केंद्रित है।",
	"about_open_source_header": "ओपन सोर्स",
	"about_open_source_1a": "bitcoin.rocks MIT लाइसेंस के तहत एक मुफ़्त ओपन-सोर्स प्रोजेक्ट है। हमारा सारा कोड",
	"about_open_source_1b": "GitHub पर",
	"about_open_source_1c": "सार्वजनिक रूप से उपलब्ध है।",
	"about_open_source_2": "कोई भी bitcoin.rocks में योगदान कर सकता है। हम विशेष रूप से अनुवादकों का स्वागत करते हैं जो हमारी सामग्री को दुनिया भर के लोगों तक पहुँचाने में मदद करते हैं।",
	"about_open_source_3": "हमारे स्वयंसेवी अनुवादकों के समुदाय की बदौलत, bitcoin.rocks वर्तमान में 17 भाषाओं में उपलब्ध है और बढ़ रहा है।",
	"about_open_source_contribute": "योगदान कैसे करें जानें।",
	"about_contact_header": "हमसे संपर्क करें",
	"about_contact_1": "हम आपसे सुनना पसंद करेंगे। चाहे आपके पास कोई सवाल हो, सुझाव हो, या बस नमस्ते कहना हो, बेझिझक संपर्क करें।",
	"about_contact_email": "ईमेल:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "आपके स्टिकर 2 से 4 सप्ताह में पहुँचेंगे। इस बीच, स्टिकर लगाने के लिए अच्छी जगहों के बारे में सोचें!",
	"sticker_success_2": "स्टिकर के लिए अच्छी जगहें:",
	"sticker_success_list_1": "सार्वजनिक स्थान जहाँ लोग देख सकें",
	"sticker_success_list_2": "ऐसी जगहें जहाँ से जल्दी हटाया न जा सके (स्टिकर स्थायी नुकसान नहीं करते)",
	"sticker_success_list_3": "ऐसी सतहें जहाँ आसानी से चिपक जाएं (धातु, प्लास्टिक, कांच)",
	"sticker_success_list_4": "निजी संपत्ति, साइनबोर्ड, ATM या पेट्रोल पंप पर न लगाएं",
	"sticker_success_3": "देखना चाहते हैं कि दूसरों ने अपने स्टिकर कहाँ लगाए हैं?",
	"sticker_success_flyers_bar_new": "नया!",
	"sticker_success_flyers_bar_cta": "Bitcoin फ्लायर प्रिंट और पोस्ट करें →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "हमें आपका अनुरोध सफलतापूर्वक मिल गया है।",
	"sticker_language_success_2": "हम नई फ़ाइलें बैचों में जारी करते हैं, इसलिए डाउनलोड उपलब्ध होने में कुछ सप्ताह लग सकते हैं। कृपया बाद में फिर से देखें!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "आपके पोस्टकार्ड 1 से 2 सप्ताह में पहुँचेंगे।",
	"postcard_success_2": "जानने वालों को ये पोस्टकार्ड भेजकर Bitcoin अपनाने में तेज़ी लाने में मदद करने के लिए धन्यवाद!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "आपके साइन 1 से 2 सप्ताह में पहुँचेंगे। इस बीच, साइन के लिए अच्छी जगहों के बारे में सोचें!",
	"sign_success_3": "देखना चाहते हैं कि दूसरों ने अपने साइन कहाँ लगाए हैं?",
	"signs_share_header": "अपनी साइन लोकेशन साझा करें",
	"signs_share_c1": "Nostr पर हमारे साथ अपनी साइन लोकेशन की फ़ोटो साझा करें और हम आपको सैट्स भेजेंगे! सैट्स Bitcoin की सबसे छोटी इकाई है।",
	"signs_btn_share_on_nostr": "NOSTR पर साझा करें",
	"signs_btn_what_is_nostr": "NOSTR क्या है?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "चक्रवृद्धि मुद्रास्फीति कैलकुलेटर",
	"cic_description": "इस चक्रवृद्धि मुद्रास्फीति कैलकुलेटर का उपयोग करके जानें कि मुद्रास्फीति के साथ बने रहने के लिए आपकी सैलरी को कितना बढ़ना चाहिए।",
	"what_can_i_do_about": "मैं",
	"what_can_i_do_about_2": "मुद्रास्फीति के बारे में क्या कर सकता हूँ?",
	"cic_inflation_cta": "Bitcoin के साथ मुद्रास्फीति से बाहर निकलें"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr से मैट्रिक्स से बाहर निकलें",
	"nostr_header": "NOSTR से मैट्रिक्स से बाहर निकलें"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr क्या है?",
	"what_is_nostr_header": "NOSTR क्या है?"
});

console.log(`\nDone! Created 9 simple files.`);
