/**
 * Creates Hindi (hi) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hi';
const today = '2026-04-02';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin में बैंक रन नहीं होते",
	"bank_runs_header": "Bitcoin में बैंक रन नहीं होते",
	"bank_runs_header_2": "लेकिन आपके बैंक में होते हैं",
	"bank_runs_what": "बैंक रन क्या है?",
	"bank_runs_what_content_1": "बैंक रन तब होता है जब बहुत से लोग एक साथ बैंक से अपना पैसा निकालने की कोशिश करते हैं।",
	"bank_runs_what_content_2": "अगर बैंक के पास निकासी का भुगतान करने के लिए पर्याप्त पैसा नहीं है, तो बैंक रन बैंक को पूरी तरह ध्वस्त कर सकता है।",
	"bank_runs_how": "बैंक रन कैसे होता है?",
	"bank_runs_how_content_1": "हमारी बैंकिंग प्रणाली 'आंशिक आरक्षित' है, जिसका मतलब है कि बैंक आपका पैसा तिजोरी में नहीं रखते जब तक आप उसे खर्च या निकालें।",
	"bank_runs_how_content_2": "इसकी बजाय, बैंक आपका पैसा उधार देता है या निवेश करता है। इससे आपका पैसा लंबे समय के लिए अटक सकता है, भले ही बैंक ने वादा किया हो कि आप कभी भी निकाल सकते हैं।",
	"bank_runs_how_content_3": "अगर बैंक ने पहले ही पैसा उधार दे दिया या निवेश कर दिया, तब आप निकालने की कोशिश करें तो क्या होगा?",
	"bank_runs_how_content_4": "अगर सिर्फ़ आप निकालते हैं, तो कोई समस्या नहीं। बैंक किसी और का पैसा आपको दे देगा। लेकिन अगर बहुत से लोग एक साथ निकालें तो?",
	"bank_runs_how_content_5": "कई अमेरिकियों ने इसे 2023 में Silicon Valley Bank के बैंक रन में अनुभव किया।",
	"bank_runs_how_content_6": "उस बैंक ने ग्राहकों का पैसा 30 साल तक की अवधि के ट्रेज़री बॉन्ड में निवेश किया था। इन बॉन्ड का मूल्य हाल ही में तेज़ी से गिरा था, इसलिए बैंक उन्हें बेचकर जमाकर्ताओं का पैसा वापस नहीं कर सकता था। वह दिवालिया हो चुका था।",
	"bank_runs_how_content_7": "जैसे-जैसे अधिक लोगों को पता चला, समस्या और बदतर हुई। और निकासी अनुरोध आए, लेकिन कई संसाधित नहीं हुए। हज़ारों कंपनियों को पता चला कि वे अपने कर्मचारियों को वेतन नहीं दे पाएंगी क्योंकि बैंक ध्वस्त हो गया था।",
	"bank_runs_how_content_8": "FDIC ने हस्तक्षेप किया और जमाकर्ताओं को पैसा वापस करने पर सहमत हुआ। समस्या हल? इतना आसान नहीं...",
	"bank_runs_fdic": "क्या FDIC बीमा मेरे पैसे की रक्षा कर सकता है?",
	"bank_runs_fdic_content_1": "FDIC बीमा बैंक विफल होने पर जमाकर्ताओं की रक्षा करने के लिए बनाया गया है। प्रति जमाकर्ता $250,000 तक का बीमा है। अच्छा लगता है, है ना?",
	"bank_runs_fdic_content_2": "इतना आसान नहीं। अगर बैंक विफल हो, तो FDIC का पैसा कहाँ से आएगा? उसके पास $125 बिलियन का बीमा कोष है।",
	"bank_runs_fdic_content_3": "बहुत लगता है, जब तक आप इसकी तुलना बीमित जमा राशि से न करें: लगभग $10 ट्रिलियन।",
	"bank_runs_fdic_content_4": "FDIC खुद अपनी वेबसाइट पर दिखाता है कि उसके बीमा कोष में जमा का 1% से थोड़ा ज़्यादा ही कवर करने लायक पैसा है।",
	"bank_runs_fdic_content_5": "अगर बैंक विफलता FDIC बीमा कोष की क्षमता से बड़ी हो, तो अमेरिकी सरकार संभवतः (लेकिन गारंटी नहीं) पैसा छापकर जमाकर्ताओं को भुगतान करेगी।",
	"bank_runs_fdic_content_6": "लेकिन पैसा छापने से मुद्रास्फीति होती है, इसलिए यह अच्छा समाधान नहीं है।",
	"bank_runs_safe": "क्या कोई ऐसा बैंक है जो आंशिक आरक्षित नहीं करता?",
	"bank_runs_safe_content_1": "कुछ बैंकों ने 'सुरक्षित बैंक' बनने की कोशिश की जो जमाकर्ताओं का पैसा उधार या निवेश नहीं करेंगे।",
	"bank_runs_safe_content_2": "हालांकि इन सुरक्षित बैंकों में बैंक रन का जोखिम नहीं होगा, लेकिन उनके आवेदन फेडरल रिज़र्व ने खारिज कर दिए। इसका मतलब वे कानूनी रूप से बैंक के रूप में काम नहीं कर सकते।",
	"bank_runs_safe_content_3": "संचालन पर प्रतिबंध के कारण, आज कोई भी बैंक ऐसा नहीं है जो आंशिक आरक्षित न करता हो।",
	"bank_runs_safe_content_4": "सौभाग्य से, अपना खुद का बैंक बनकर आंशिक आरक्षित प्रणाली से बाहर निकलने का एक तरीका है। नहीं, हम गद्दे के नीचे नकदी छिपाने की बात नहीं कर रहे।",
	"bank_runs_safe_content_5": "नकदी में बचत अभी भी मुद्रास्फीति की चपेट में है।",
	"bank_runs_safe_content_6": "हम Bitcoin की बात कर रहे हैं: एक बिल्कुल नई वित्तीय प्रणाली जो आपको अपना खुद का बैंक बनने देती है।",
	"bank_runs_protect": "क्या Bitcoin मुझे बैंक रन से बचा सकता है?",
	"bank_runs_protect_content_1": "हाँ, Bitcoin पूर्ण-आरक्षित वित्तीय प्रणाली है।",
	"bank_runs_protect_content_2": "अगर आप Bitcoin को अपने वॉलेट में निकालते हैं, तो Bitcoin में बैंक रन असंभव है। Bitcoin को एक्सचेंज या Bitcoin ETF जैसे रैपर में न रखें।",
	"bank_runs_protect_content_3": "अपने वॉलेट में कैसे निकालें, यह जानने के लिए हमारी सरल Bitcoin वॉलेट गाइड देखें।",
	"bank_runs_protect_content_4": "Bitcoin के साथ, आप आखिरकार अपने पैसे पर नियंत्रण रख सकते हैं।"
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin वॉलेट गाइड",
	"wallets_description": "कई अलग-अलग Bitcoin वॉलेट हैं जो महत्वपूर्ण तरीकों से भिन्न हैं। ये सरल प्रश्न पूछकर जानें कि कौन सा वॉलेट आपके लिए सही है।",
	"wallets_header": "अपना Bitcoin सुरक्षित रूप से कैसे स्टोर करें",
	"wallets_s1_c1": "Bitcoin वॉलेट आपस में संगत हैं, इसलिए कोई भी किसी भी वॉलेट से Bitcoin भेज सकता है।",
	"wallets_s1_c2": "कई अलग-अलग Bitcoin वॉलेट हैं जो महत्वपूर्ण तरीकों से भिन्न हैं। ये सरल प्रश्न पूछकर जानें कि कौन सा आपके लिए सही है:",
	"wallets_question_1": "क्या यह स्व-संरक्षण वॉलेट है?",
	"wallets_s2_c1": "Bitcoin की एक नवीनता यह है कि बैंक जैसे कस्टोडियन पर निर्भर हुए बिना Bitcoin स्टोर किया जा सकता है।",
	"wallets_s2_c2": "अगर आप Bitcoin एक्सचेंज या ETF में रखते हैं, तो आप Bitcoin की स्वतंत्रता के लाभ खो देते हैं।",
	"wallets_s2_c3": "स्व-संरक्षण वॉलेट Bitcoin की पूरी शक्ति खोलता है: स्वतंत्र मुद्रा।",
	"wallets_s2_c4": "स्व-संरक्षण वॉलेट से, केवल आपके पास अपना पैसा खर्च या ट्रांसफ़र करने की क्षमता है। कोई भी आपको भुगतान भेजने या प्राप्त करने से नहीं रोक सकता।",
	"wallets_s2_c5": "स्व-संरक्षण वॉलेट को गैर-कस्टोडियल वॉलेट भी कहते हैं।",
	"wallets_s3_c1": "कस्टोडियल वॉलेट वह है जहाँ आपका अपने फंड पर नियंत्रण नहीं होता।",
	"wallets_s3_c2": "ये वॉलेट बैंकिंग प्रणाली जैसे हैं जहाँ आपको तीसरे पक्ष पर भरोसा करना होता है। अगर आपका Bitcoin एक्सचेंज पर है, तो आप कस्टोडियल वॉलेट उपयोग कर रहे हैं।",
	"wallets_s3_c3": "अगर आपने Bitcoin ETF खरीदा है, तो आप कस्टोडियल वॉलेट उपयोग कर रहे हैं जो स्व-संरक्षण में निकालने की अनुमति नहीं देता।",
	"wallets_s3_c4": "कस्टोडियल वॉलेट सुविधाजनक लगते हैं, लेकिन कस्टोडियन तकनीकी रूप से कभी भी सभी उपयोगकर्ताओं के फंड चुरा सकता है।",
	"wallets_s3_c5": "आपकी कुंजी नहीं, आपका कॉइन नहीं!",
	"wallets_question_2": "हॉट वॉलेट या कोल्ड वॉलेट?",
	"wallets_s4_c1": "कोल्ड वॉलेट आपके Bitcoin की कुंजी इस तरह स्टोर करता है कि वे कभी इंटरनेट के संपर्क में नहीं आतीं।",
	"wallets_s4_c2": "यह चोरों के हमले के रास्तों को काफ़ी सीमित करता है, और बड़ी राशि के Bitcoin के लिए सबसे उपयुक्त है जिन्हें बार-बार स्थानांतरित नहीं करना होता।",
	"wallets_s4_c3": "कोल्ड वॉलेट को दीर्घकालिक बचत खाता समझें, जिसे कोल्ड स्टोरेज भी कहते हैं।",
	"wallets_s5_c1": "हॉट वॉलेट आपके Bitcoin की कुंजी इंटरनेट से जुड़े डिवाइस पर स्टोर करता है, जैसे आपका फ़ोन।",
	"wallets_s5_c2": "हॉट वॉलेट आमतौर पर सुरक्षित माने जाते हैं, लेकिन कोल्ड वॉलेट से अधिक सुरक्षा कमज़ोरियां हो सकती हैं।",
	"wallets_s5_c3": "हॉट वॉलेट को भौतिक बटुए की तरह समझें। आप इसमें अपनी पूरी बचत नहीं रखेंगे, लेकिन खर्च के लिए कुछ पैसा रखेंगे।",
	"wallets_s5_c4": "हॉट वॉलेट Bitcoin खर्च करना आसान बनाता है बिना कोल्ड स्टोरेज से पूरी बचत निकाले।",
	"wallets_question_3": "रिकवरी फ़्रेज़ का बैकअप कैसे लें?",
	"wallets_s6_c1": "Bitcoin वॉलेट सेटअप करते समय, आपका डिवाइस एक रिकवरी फ़्रेज़ जनरेट करता है। इस रिकवरी फ़्रेज़ (जिसे सीड फ़्रेज़ भी कहते हैं) में 12 या 24 शब्द होते हैं।",
	"wallets_s6_c2": "अगर आप वॉलेट तक पहुँच खो देते हैं या डिवाइस खराब हो जाता है, तो नए वॉलेट में यह रिकवरी फ़्रेज़ दर्ज करके अपना Bitcoin वापस पा सकते हैं।",
	"wallets_s6_c3": "अधिकांश वॉलेट के साथ रिकवरी फ़्रेज़ लिखने के लिए कागज़ आता है, लेकिन कई लोग इसे स्टील प्लेट पर बैकअप करना पसंद करते हैं। इससे आग या बाढ़ में रिकवरी फ़्रेज़ खोने की संभावना बहुत कम हो जाती है।",
	"wallets_s6_c4": "Jameson Lopp ने 70 स्टील बैकअप किट टेस्ट किए हैं।",
	"wallets_s6_c5": "यहाँ Jameson की मेटल Bitcoin बैकअप गाइड देखें।",
	"wallets_s6_c6": "या Bitcoin वॉलेट विकल्प देखने के लिए स्क्रॉल करें।",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "हमारी लाइटनिंग वॉलेट गाइड खोज रहे हैं?",
	"wallets_starter_wallet": "उत्कृष्ट शुरुआती वॉलेट", "wallets_mobile_app": "मोबाइल ऐप", "wallets_2fa_support": "2FA समर्थन", "wallets_air_gap_mode": "एयर गैप मोड", "wallets_air_gap_camera": "एयर गैप मोड + कैमरा", "wallets_bitcoin_only": "केवल Bitcoin", "wallets_security_features": "कई सुरक्षा सुविधाएं", "wallets_free": "100% मुफ़्त",
	"wallets_coldcard_mk5_costs": "कीमत $189", "wallets_coldcard_q_costs": "कीमत $289", "wallets_blockstream_jade_costs": "कीमत $79", "wallets_foundation_passport_costs": "कीमत $199", "wallets_seedsigner_costs": "पार्ट्स ~$50",
	"wallets_very_affordable": "बहुत किफ़ायती", "wallets_pair_with_phone": "फ़ोन से जोड़ें", "wallets_battery": "रिचार्जेबल बैटरी", "wallets_build_your_own": "खुद बनाएं", "wallets_qwerty_keyboard": "पूरा QWERTY कीबोर्ड", "wallets_qr_scanner": "QR स्कैनर"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Bitcoin कैसे खरीदें — स्टेप-बाय-स्टेप गाइड",
	"buy_header": "Bitcoin कैसे खरीदें",
	"buy_intro_c1": "पहली बार Bitcoin खरीदना जटिल लग सकता है, लेकिन स्टेप-बाय-स्टेप यह वास्तव में सरल है।",
	"buy_intro_c2": "यह गाइड आपको सुरक्षित रूप से Bitcoin खरीदने और स्व-संरक्षण वॉलेट में स्टोर करने की प्रक्रिया से गुज़ारेगा।",
	"buy_step_1_header": "स्टेप 1: अपना देश चुनें", "buy_step_1_description": "अलग-अलग देशों में Bitcoin खरीदने के विकल्प भिन्न हैं।", "buy_search_countries": "अपना देश खोजें",
	"buy_country_united_states": "अमेरिका", "buy_country_australia": "ऑस्ट्रेलिया", "buy_country_austria": "ऑस्ट्रिया", "buy_country_belgium": "बेल्जियम", "buy_country_brazil": "ब्राज़ील", "buy_country_canada": "कनाडा", "buy_country_france": "फ़्रांस", "buy_country_germany": "जर्मनी", "buy_country_ireland": "आयरलैंड", "buy_country_italy": "इटली", "buy_country_netherlands": "नीदरलैंड", "buy_country_new_zealand": "न्यूज़ीलैंड", "buy_country_spain": "स्पेन", "buy_country_united_kingdom": "यूनाइटेड किंगडम", "buy_country_argentina": "अर्जेंटीना", "buy_country_chile": "चिली", "buy_country_colombia": "कोलंबिया", "buy_country_costa_rica": "कोस्टा रिका", "buy_country_czech_republic": "चेक गणराज्य", "buy_country_denmark": "डेनमार्क", "buy_country_el_salvador": "एल साल्वाडोर", "buy_country_estonia": "एस्टोनिया", "buy_country_finland": "फ़िनलैंड", "buy_country_greece": "ग्रीस", "buy_country_guatemala": "ग्वाटेमाला", "buy_country_hong_kong": "हॉन्ग कॉन्ग", "buy_country_hungary": "हंगरी", "buy_country_iceland": "आइसलैंड", "buy_country_india": "भारत", "buy_country_israel": "इज़राइल", "buy_country_japan": "जापान", "buy_country_latvia": "लातविया", "buy_country_lithuania": "लिथुआनिया", "buy_country_luxembourg": "लक्ज़मबर्ग", "buy_country_malta": "माल्टा", "buy_country_mexico": "मेक्सिको", "buy_country_norway": "नॉर्वे", "buy_country_panama": "पनामा", "buy_country_poland": "पोलैंड", "buy_country_portugal": "पुर्तगाल", "buy_country_romania": "रोमानिया", "buy_country_singapore": "सिंगापुर", "buy_country_slovakia": "स्लोवाकिया", "buy_country_slovenia": "स्लोवेनिया", "buy_country_south_africa": "दक्षिण अफ्रीका", "buy_country_south_korea": "दक्षिण कोरिया", "buy_country_sweden": "स्वीडन", "buy_country_switzerland": "स्विट्ज़रलैंड", "buy_country_thailand": "थाईलैंड", "buy_country_turkey": "तुर्की", "buy_country_ukraine": "यूक्रेन", "buy_country_uruguay": "उरुग्वे",
	"buy_step_2_header": "स्टेप 2: भुगतान विधि चुनें", "buy_step_2_description": "Bitcoin खरीदने के दो मुख्य तरीके हैं: बैंक ट्रांसफ़र या नकद।",
	"buy_method_bank_transfer": "बैंक ट्रांसफ़र", "buy_method_bank_fast": "तेज़ और आसान", "buy_method_bank_less_private": "कम निजी", "buy_method_bank_description": "बैंक ट्रांसफ़र Bitcoin खरीदने का सबसे आम तरीका है।", "buy_method_choose_bank": "बैंक ट्रांसफ़र चुनें", "buy_method_cash": "नकद", "buy_method_cash_private": "अधिक निजी", "buy_method_cash_limited": "सीमित विकल्प", "buy_method_cash_description": "नकद खरीदारी अधिक गोपनीयता देती है, लेकिन विकल्प कम हैं।", "buy_method_choose_cash": "नकद चुनें",
	"buy_step_3_header": "स्टेप 3: खरीद विकल्प", "buy_step_3_description": "आपके देश और भुगतान विधि के लिए सबसे अच्छे Bitcoin खरीद विकल्प:",
	"buy_platform_recommended": "सुझाया गया",
	"buy_platform_strike_description": "Strike Bitcoin खरीदने का सबसे तेज़ और आसान तरीका है।", "buy_platform_swan_description": "Swan Bitcoin शुद्ध Bitcoin सेवा है।", "buy_platform_river_description": "River Bitcoin खरीदी, माइनिंग और कस्टडी सेवा देता है।", "buy_platform_coinsquare_description": "Coinsquare कनाडा का Bitcoin एक्सचेंज है।", "buy_platform_kraken_description": "Kraken एक स्थापित Bitcoin एक्सचेंज है।", "buy_platform_atm_description": "Bitcoin ATM से नकद से तुरंत Bitcoin खरीद सकते हैं।", "buy_platform_bisq_description": "Bisq विकेंद्रीकृत पीयर-टू-पीयर एक्सचेंज है।", "buy_platform_relai_description": "Relai स्विस शुद्ध Bitcoin ऐप है।",
	"buy_platform_feature_instant": "तत्काल खरीद", "buy_platform_feature_low_fees": "कम शुल्क", "buy_platform_feature_lightning": "लाइटनिंग नेटवर्क", "buy_platform_feature_dca": "नियमित निवेश", "buy_platform_feature_education": "शैक्षिक संसाधन", "buy_platform_feature_withdrawal": "आसान निकासी", "buy_platform_feature_mining": "Bitcoin माइनिंग", "buy_platform_feature_custody": "कस्टडी सेवा", "buy_platform_feature_canadian": "कनाडा के लिए", "buy_platform_feature_regulated": "विनियमित एक्सचेंज", "buy_platform_feature_support": "ग्राहक सहायता", "buy_platform_feature_established": "स्थापित प्लेटफ़ॉर्म", "buy_platform_feature_security": "मज़बूत सुरक्षा", "buy_platform_feature_advanced": "उन्नत सुविधाएं", "buy_platform_feature_cash": "नकद खरीद", "buy_platform_feature_anonymous": "अधिक गुमनाम", "buy_platform_feature_p2p": "पीयर-टू-पीयर", "buy_platform_feature_private": "निजी लेनदेन", "buy_platform_feature_decentralized": "विकेंद्रीकृत", "buy_platform_feature_bitcoin_only": "केवल Bitcoin", "buy_platform_feature_self_custody": "स्व-संरक्षण वॉलेट", "buy_platform_feature_auto_invest": "ऑटो निवेश योजना", "buy_platform_feature_european": "यूरोप के लिए",
	"buy_step_4_header": "स्टेप 4: अपना Bitcoin सुरक्षित स्टोर करें",
	"buy_step_4_c1": "Bitcoin खरीदने के बाद, सबसे महत्वपूर्ण कदम इसे स्व-संरक्षण वॉलेट में ट्रांसफ़र करना है।",
	"buy_step_4_c2": "Bitcoin एक्सचेंज पर छोड़ना जोखिमपूर्ण है क्योंकि आप वास्तव में Bitcoin के मालिक नहीं हैं — एक्सचेंज है।",
	"buy_step_4_c3": "जब आप अपनी प्राइवेट कुंजी नियंत्रित करते हैं, तभी आप वास्तव में Bitcoin के मालिक हैं।",
	"buy_step_4_c4": "जानें कि अपनी ज़रूरतों के लिए सही Bitcoin वॉलेट कैसे चुनें:",
	"buy_cta_wallets": "Bitcoin वॉलेट गाइड देखें"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin लाइटनिंग वॉलेट गाइड",
	"lightning_description": "लाइटनिंग वॉलेट आपको व्यक्तिगत संप्रभुता बनाए रखते हुए तेज़, कम शुल्क पर Bitcoin भेजने देते हैं।",
	"lightning_header": "लाइटनिंग वॉलेट गाइड",
	"lightning_s1_c1": "लाइटनिंग नेटवर्क आपको तेज़, कम शुल्क पर Bitcoin भुगतान भेजने देता है।",
	"lightning_s1_c2": "यह जानना महत्वपूर्ण है कि लाइटनिंग नेटवर्क में ट्रेड-ऑफ हैं। तेज़ और सस्ते भुगतान के लिए, आम तौर पर कुछ सुरक्षा का त्याग करना होता है।",
	"lightning_s1_c3": "सामान्यतः, लाइटनिंग नेटवर्क केवल छोटी राशि के Bitcoin के लिए उपयोग करना चाहिए। बड़ी राशि हमेशा हार्डवेयर वॉलेट में रखनी चाहिए।",
	"lightning_s1_c4": "अधिक जानकारी के लिए हमारी हार्डवेयर वॉलेट गाइड देखें।",
	"lightning_s1_c5": "सभी लाइटनिंग वॉलेट एक जैसे नहीं हैं। एक सरल प्रश्न से जानें कि कौन सा ट्रेड-ऑफ आपके लिए सही है:",
	"lightning_question_1": "कौन सा ट्रेड-ऑफ मेरे लिए सही है?",
	"lightning_s2_c1": "Bitcoin की नवीनता है कि बैंक जैसे कस्टोडियन पर निर्भर हुए बिना Bitcoin स्टोर किया जा सकता है। स्व-संरक्षण Bitcoin की पूरी शक्ति खोलता है।",
	"lightning_s2_c2": "स्व-संरक्षण वॉलेट से, केवल आप पैसा खर्च या ट्रांसफ़र कर सकते हैं। कोई आपको रोक, सेंसर या चोरी नहीं कर सकता। इन्हें गैर-कस्टोडियल वॉलेट भी कहते हैं।",
	"lightning_s2_c3": "लाइटनिंग नेटवर्क उपयोग करने का सबसे संप्रभु तरीका अपना नोड चलाना है।",
	"lightning_s2_c4": "यह गाइड सरल लाइटनिंग वॉलेट पर केंद्रित है जिन्हें अपने नोड की ज़रूरत नहीं।",
	"lightning_s2_c5": "यह जानना महत्वपूर्ण है कि गैर-कस्टोडियल लाइटनिंग वॉलेट के साथ भी, आप वॉलेट निर्माता पर भरोसा कर रहे हैं कि वे दुर्भावनापूर्ण अपडेट नहीं भेजेंगे।",
	"lightning_s3_c1": "कस्टोडियल वॉलेट वह है जहाँ आपका अपने फंड पर नियंत्रण नहीं होता।",
	"lightning_s3_c2": "ये बैंकिंग जैसे हैं जहाँ तीसरे पक्ष पर भरोसा ज़रूरी है। एक्सचेंज पर Bitcoin = कस्टोडियल वॉलेट।",
	"lightning_s3_c3": "कस्टोडियल वॉलेट सुविधाजनक लगते हैं, लेकिन कस्टोडियन कभी भी फंड चुरा सकता है।",
	"lightning_s3_c4": "कुछ लोग आसानी के लिए छोटी राशि के लिए कस्टोडियल लाइटनिंग वॉलेट पसंद करते हैं। बस याद रखें: आपकी कुंजी नहीं, आपका कॉइन नहीं!",
	"lightning_question_2": "अपना वॉलेट चुनें",
	"lightning_s4_c1": "ऊपर सब जानकर, अब आप अपने लिए सही ट्रेड-ऑफ वाला लाइटनिंग वॉलेट चुन सकते हैं।",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "सुविधा संपन्न", "lightning_mobile_app": "मोबाइल ऐप", "lightning_free": "100% मुफ़्त", "lightning_merchants": "व्यापारियों के लिए उपयुक्त", "lightning_starter": "उत्कृष्ट शुरुआती वॉलेट", "lightning_browser": "ब्राउज़र में", "lightning_custodial": "पूर्ण कस्टोडियल वॉलेट",
	"lightning_cta_hardware": "हमारी हार्डवेयर Bitcoin वॉलेट गाइड खोज रहे हैं?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocks से मुफ़्त Bitcoin स्टिकर",
	"stickers_description": "सार्वजनिक स्थान पर Bitcoin स्टिकर लगाकर आसपास के लोगों को Bitcoin के बारे में जानने में मदद करें।",
	"stickers_header": "मुफ़्त Bitcoin स्टिकर",
	"stickers_choose_header": "अपना स्टिकर पैक चुनें",
	"stickers_choose_c1": "हमारा मिशन सार्वजनिक स्थानों पर Bitcoin स्टिकर लगाकर अधिक लोगों को जागरूक करने में आपकी मदद करना है। हमारे सभी स्टिकर पर QR कोड हैं जो",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "मुद्रास्फीति",
	"stickers_choose_c4": "के शैक्षिक पेजों से जुड़ते हैं। नीचे एक स्टिकर पैक चुनें",
	"stickers_text_pack": "टेक्स्ट पैक", "stickers_signs_pack": "साइन पैक",
	"stickers_instructions_1": "अपना डाक पता दर्ज करें और हम मुफ़्त Bitcoin स्टिकर पैक भेजेंगे! स्टिकर साधारण सफ़ेद लिफ़ाफ़े में आएंगे।",
	"stickers_instructions_2": "पता जानकारी मुफ़्त स्टिकर भेजने के बाद हटा दी जाती है।",
	"stickers_share_header": "अपनी स्टिकर लोकेशन साझा करें",
	"stickers_share_c1": "Nostr पर हमारे साथ अपनी स्टिकर लोकेशन साझा करें और देखें दूसरों ने कहाँ लगाए हैं।",
	"stickers_btn_share_on_nostr": "NOSTR पर साझा करें", "stickers_btn_what_is_nostr": "NOSTR क्या है?",
	"stickers_flyers_link_before": "साथ ही, अपने खुद के", "stickers_flyers_link_text": "Bitcoin फ्लायर", "stickers_flyers_link_after": "प्रिंट और पोस्ट करें।",
	"stickers_country_global_print": "वैश्विक — मैं खुद स्टिकर प्रिंट करूंगा", "stickers_country_global_order": "वैश्विक — थोक में ऑर्डर करें",
	"placeholder_name_optional": "नाम (वैकल्पिक)", "placeholder_address_line_1": "पता लाइन 1", "placeholder_address_line_2": "पता लाइन 2 (वैकल्पिक)", "placeholder_city": "शहर", "placeholder_state": "राज्य", "placeholder_province": "प्रांत", "placeholder_zip_code": "पिन कोड", "placeholder_postal_code": "डाक कोड", "placeholder_language": "भाषा", "placeholder_which_stickers": "कौन से स्टिकर?", "placeholder_email_optional": "सूचना के लिए ईमेल दर्ज करें (वैकल्पिक)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocks से मुफ़्त Bitcoin पोस्टकार्ड",
	"postcards_description": "जानने वालों के साथ Bitcoin साझा करने के लिए मुफ़्त पोस्टकार्ड पैक पाएं।",
	"postcards_header": "पोस्टकार्ड कार्यक्रम समाप्त",
	"postcards_program_closed_message": "हमारा मुफ़्त Bitcoin पोस्टकार्ड कार्यक्रम समाप्त हो गया है। डाक से Bitcoin शिक्षा फैलाने में मदद करने वाले सभी लोगों को धन्यवाद!",
	"postcards_sticker_alternative_header": "इसके बजाय मुफ़्त Bitcoin स्टिकर पाएं",
	"postcards_sticker_alternative_message": "हमारे मुफ़्त स्टिकर कार्यक्रम से Bitcoin जागरूकता फैलाते रहें! हमारे Bitcoin स्टिकर सार्वजनिक स्थानों पर साझा करने के लिए बेहतरीन हैं और शैक्षिक सामग्री से जुड़े QR कोड हैं।",
	"postcards_sticker_cta": "मुफ़्त स्टिकर पाएं",
	"postcards_step_2": "पोस्टकार्ड कैसे दिखते हैं",
	"postcards_instructions_4": "हमने ये पोस्टकार्ड बनाए ताकि जानने वालों को Bitcoin से परिचित कराना आसान हो! बस पता लिखें, डाक टिकट लगाएं और पोस्ट करें।",
	"postcards_instructions_5": "हमारा मिशन Bitcoin अपनाने में तेज़ी लाना है। आप मुफ़्त स्टिकर लेकर और सार्वजनिक स्थानों पर लगाकर मदद कर सकते हैं!",
	"postcards_instructions_6": "हम सभी ऐसे लोगों को जानते हैं जो Bitcoin के बारे में जानकर लाभान्वित हो सकते हैं। आज ही उनके साथ Bitcoin स्टिकर साझा करें!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "पूरे अमेरिका में ये Bitcoin साइन लगाने में हमारी मदद करें!",
	"signs_title": "bitcoin.rocks से मुफ़्त Bitcoin साइन",
	"signs_choose_header": "पूरे अमेरिका में ये Bitcoin साइन लगाने में हमारी मदद करने के लिए धन्यवाद!",
	"signs_choose_c1": "सभी साइन अब वितरित हो चुके हैं! हमारा मिशन शिक्षा से Bitcoin अपनाने में तेज़ी लाना है।",
	"signs_choose_c2": "आप में से कई ने सार्वजनिक स्थानों पर ये मुफ़्त Bitcoin साइन लगाकर मदद की। हमारे सभी साइन पर QR कोड हैं जो",
	"signs_choose_c3": "मुद्रास्फीति",
	"signs_choose_c4": "के शैक्षिक पेज से जुड़ते हैं। हमारे अद्भुत समुदाय की बदौलत, हमने हज़ारों लोगों तक पहुँचकर उन्हें Bitcoin के बारे में सीखने का पहला कदम उठाने में मदद की।",
	"signs_share_header": "अपनी साइन लोकेशन साझा करें",
	"signs_share_c1": "Nostr पर हमारे साथ अपनी साइन लोकेशन की फ़ोटो साझा करें और देखें दूसरों ने कहाँ लगाए हैं।",
	"signs_btn_share_on_nostr": "NOSTR पर साझा करें", "signs_btn_what_is_nostr": "NOSTR क्या है?",
	"signs_instructions_1": "अपना डाक पता दर्ज करें और हम 10 Bitcoin साइन का डिब्बा भेजेंगे!",
	"signs_instructions_2": "पता जानकारी मुफ़्त साइन भेजने के बाद हटा दी जाती है।"
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocks से मुफ़्त Bitcoin फ्लायर",
	"flyers_description": "घर पर Bitcoin फ्लायर प्रिंट करें और सार्वजनिक स्थानों पर लगाकर लोगों को Bitcoin के बारे में जानने में मदद करें।",
	"flyers_header_1": "प्रिंट और पोस्ट करें", "flyers_header_2": "Bitcoin फ्लायर",
	"flyers_intro_header": "ये Bitcoin फ्लायर कैसे प्रिंट और पोस्ट करें",
	"flyers_intro_c1": "हमारा मिशन सार्वजनिक स्थानों पर Bitcoin फ्लायर लगाकर अधिक लोगों को जागरूक करने में आपकी मदद करना है। इस फ्लायर पर QR कोड है जो हमारे",
	"flyers_intro_c2": "Bitcoin शिक्षा पेज से जुड़ता है।",
	"flyers_intro_c3": "मुद्रास्फीति",
	"flyers_intro_c4": "घर पर या प्रिंट शॉप में यह फ्लायर प्रिंट करें। फिर इसे बुलेटिन बोर्ड, खंभों और अन्य सार्वजनिक स्थानों पर लगाएं।",
	"flyers_intro_c5": "साथ ही, हमारे",
	"flyers_intro_c6": "मुफ़्त Bitcoin स्टिकर",
	"flyers_intro_c7": "पैक का अनुरोध करें।",
	"flyers_btn_download": "फ्लायर डाउनलोड करें", "flyers_btn_print": "फ्लायर प्रिंट करें",
	"flyers_share_header": "अपनी फ्लायर लोकेशन साझा करें",
	"flyers_share_c1": "Nostr पर हमारे साथ अपनी फ्लायर लोकेशन साझा करें और देखें दूसरों ने कहाँ लगाए हैं।",
	"flyers_btn_share_on_nostr": "NOSTR पर साझा करें", "flyers_btn_what_is_nostr": "NOSTR क्या है?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "शामिल हों और Bitcoin फैलाने में मदद करें",
	"get_involved_description": "हमारे मुफ़्त संसाधन Bitcoin अपनाने को फैलाना आसान बनाते हैं।",
	"get_involved_header": "शामिल हों",
	"get_involved_header_2": "Bitcoin फैलाएं",
	"get_involved_intro_1": "दुनिया की वर्तमान स्थिति में रहना निराशाजनक हो सकता है।",
	"get_involved_intro_2": "हमारी मुद्रा टूटी हुई है। इसलिए, समाज के बुनियादी ढांचे भी टूटे हुए हैं।",
	"get_involved_intro_3": "अगर आप पहले से Bitcoin जानते हैं, तो आप जानते हैं कि Bitcoin किस तरह की आशा दे सकता है। बेहतर मुद्रा से संभव बेहतर भविष्य की आशा।",
	"get_involved_intro_4": "लेकिन आपके आसपास बहुत से लोग Bitcoin नहीं जानते। वे भी उसी टूटी हुई दुनिया में रहते हैं, बिना किसी रोशनी के जो अंधेरे में रास्ता दिखाए।",
	"get_involved_intro_5": "लेकिन आप इसे बदल सकते हैं। हमने कुछ मुफ़्त संसाधन बनाए हैं जो आपके आसपास के लोगों के साथ Bitcoin की आशा साझा करना आसान बनाते हैं।",
	"get_involved_sticker_header": "सार्वजनिक स्थान पर स्टिकर लगाएं",
	"get_involved_sticker_content_1": "आप किसी से बात किए बिना आसपास के लोगों को Bitcoin के बारे में शिक्षित कर सकते हैं। बस सार्वजनिक स्थान पर हमारे मुफ़्त Bitcoin स्टिकर लगाएं।",
	"get_involved_sticker_content_2": "हर महीने सैकड़ों लोग इन स्टिकर पर QR कोड स्कैन करते हैं। मुद्रास्फीति स्टिकर",
	"get_involved_sticker_content_3": "Bitcoin मुद्रास्फीति का समाधान है",
	"get_involved_sticker_content_4": "पेज से जुड़ते हैं। अन्य स्टिकर हमारे शैक्षिक होमपेज से जुड़ते हैं जो लोगों को दिखाता है कि",
	"get_involved_sticker_content_5": "Bitcoin कैसे एक बेहतर दुनिया बना रहा है।",
	"get_involved_sticker_content_6": "अपने समुदाय में लोगों को दिखने वाली जगहों पर ये स्टिकर लगाकर, आप आसपास के लोगों को Bitcoin सीखने का पहला कदम उठाने में मदद कर सकते हैं।",
	"get_involved_request_a": "अनुरोध करें",
	"get_involved_sticker_pack": "स्टिकर पैक",
	"get_involved_postcard_header": "पोस्टकार्ड भेजें",
	"get_involved_postcard_content_1": "आप जानने वालों को हमारे मुफ़्त पोस्टकार्ड भेजकर Bitcoin की आशा फैलाने में मदद कर सकते हैं।",
	"get_involved_postcard_content_2": "हर पोस्टकार्ड के पीछे Bitcoin के बारे में प्रभावशाली टेक्स्ट और अधिक जानने के लिए QR कोड है।",
	"get_involved_postcard_content_3": "Bitcoin पोस्टकार्ड भेजकर, आप किसी को Bitcoin को नई नज़र से देखने में मदद कर सकते हैं।",
	"get_involved_postcard_pack": "पोस्टकार्ड पैक",
	"get_involved_business_header": "एक व्यवसाय को जोड़ें",
	"get_involved_business_content_1": "Bitcoin सर्कुलर इकॉनमी बनाना चाहते हैं? हमारा Bitcoin बिज़नेस किट व्यवसायों को Bitcoin भुगतान स्वीकार करने का परिचय देना आसान बनाता है।",
	"get_involved_business_content_2": "हर बिज़नेस किट में ब्रोशर हैं जो Bitcoin भुगतान स्वीकार करने के फ़ायदे बताते हैं। हर ब्रोशर अलग-अलग",
	"get_involved_business_content_3": "मुफ़्त Bitcoin व्यावसायिक संसाधनों से जुड़ता है।",
	"get_involved_business_kit": "बिज़नेस किट"
});

console.log(`\nDone! Created 9 content files.`);
