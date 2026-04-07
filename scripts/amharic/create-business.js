/**
 * Creates Amharic (am) translation files for all business/ pages.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'am';
const today = '2026-04-06';

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
	"bitcoin_is_good_for_business": "ቢትኮይን ለንግድ ጥሩ ነው",
	"biz_header": "ቢትኮይን ለንግድ ጥሩ ነው",
	"biz_s1": "ዝቅተኛ ክፍያዎች ያለ ዝቅተኛ ገደብ",
	"biz_s1_c1": "በቢትኮይን ከደንበኞችዎ ቀጥታ ክፍያዎችን መቀበል ይችላሉ ልክ እንደ ጥሬ ገንዘብ። የቢትኮይን ኔትወርክ ከፍተኛ ክፍያ የሚያስከፍሉ እንደ ባንኮች ወይም የብድር ካርድ ኩባንያዎች ያሉ አማላጆች ሳያስፈልግ ይሰራል።",
	"biz_s2": "ፈጣን ክፍያዎች",
	"biz_s2_c1": "ልክ እንደ ጥሬ ገንዘብ፣ የቢትኮይን ክፍያዎች ወዲያውኑ ይጠናቀቃሉ። ገንዘብዎ ወዲያውኑ ይደርስዎታል፤ የብድር ካርድ ኩባንያ ወይም ባንክ ማስገባቱን መጠበቅ አያስፈልግም።",
	"biz_s3": "ተመላሽ ክፍያ ወይም ማጭበርበር የለም",
	"biz_s3_c1": "የቢትኮይን ክፍያዎች ቀጥታ ከደንበኛ ወደ እርስዎ ስለሆኑ ተመላሽ ክፍያ ገንዘብዎን የሚወስድ አማላጅ የለም።",
	"biz_s3_c2": "የተጭበረበረ ቢትኮይን በቢትኮይን ኔትወርክ ውስጥ መላክ ስለማይቻል ንግድዎን የሚጎዱ ማጭበርበሮችን መጨነቅ አያስፈልግም።",
	"biz_s4": "ተጨማሪ ደንበኞች ያግኙ",
	"biz_s4_c1": "በሚሊዮኖች የሚቆጠሩ ሰዎች ቢትኮይን ይይዛሉ እና ቢትኮይን በሚቀበሉ ቦታዎች ሊያጠፉት ይፈልጋሉ።",
	"biz_s4_c2": "ቢትኮይንን መቀበል ብቻ ንግድዎን በቢትኮይን ነጋዴ ካርታዎች ላይ ያስቀምጠዋል ይህም ለአዲስ የቢትኮይን ደንበኞች ነፃ ማስታወቂያ ይሆናል።",
	"biz_s4_c3": "ቢትኮይንን መቀበል 100% ነፃ ነው። ምንም ውል ወይም ድብቅ ክፍያዎች የሉም።"
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "ቢትኮይን ለንግድ ለምን ጥሩ እንደሆነ ይወቁ",
	"why_header": "ቢትኮይን ለንግድ ጥሩ ነው",
	"why_good_for_you": "ቢትኮይን ለእርስዎም ጥሩ ነው!",
	"why_learn_more_lowercase": "ተጨማሪ ይወቁ።",
	"why_s1": "ቢትኮይን ዋጋ ግሽበት የለውም",
	"why_s1_c1": "ዋጋ ግሽበት የሚከሰተው ብዙ ገንዘብ ሲታተም ወይም ከምንም ሲፈጠር ነው። ይህ ገንዘብዎ ከጊዜ ወደ ጊዜ ዋጋ እንዲያጣ ያደርገዋል።",
	"why_s1_c2": "ቢትኮይን ቋሚ አቅርቦት አለው ስለዚህ ማንም ተጨማሪ ቢትኮይን ሊያመርት አይችልም።",
	"why_s2": "ቢትኮይን የባንክ ሩጫ የለውም",
	"why_s2_c1": "ባለፉት ጥቂት ዓመታት በባንክ ሩጫ ምክንያት በርካታ የአሜሪካ ባንኮች ወድቀዋል።",
	"why_s2_c2": "ባንኮች ገንዘብዎን በከባቢ ውስጥ አያስቀምጡም፤ ይልቁንም ይበደራሉ እና ያስተውላሉ። እነዚያ ኢንቨስትመንቶች ከተዳከሙ ለእርስዎ የሚመልሱት ገንዘብ ያጣሉ።",
	"why_s2_c3": "የFDIC ኢንሹራንስ ፈንድ በኢንሹራንስ ለተሸፈነ ለእያንዳንዱ $100 ማስገቢያ $1 ብቻ አለው።",
	"why_s3": "ቢትኮይን ፍቃድ-አያስፈልግም",
	"why_s3_c1": "ከተለምዷዊ የፋይናንስ ኔትወርኮች በተለየ ቢትኮይንን ለመጠቀም ምንም ፍቃድ አያስፈልግም።",
	"why_s3_c2": "ይህ ማለት ማንም በምንም ምክንያት ቢትኮይን እንዳይጠቀሙ ሊያግድዎ አይችልም። ያለ ሳንሱር ወይም ንብረት መቀማት ፍርሃት መጠቀም የሚቻል የመጀመሪያው የፋይናንስ ኔትወርክ ነው።",
	"why_s4": "ቢትኮይን የተሻለ ዓለም እየገነባ ነው",
	"why_s4_c1": "ቢትኮይን ብዙ ጊዜ ያልተረዳ ቴክኖሎጂ ነው፣ ግን የተሻለ ዓለም እየገነባ ነው።",
	"why_s4_c2": "ቢትኮይን የሰብአዊ መብት ተሟጋቾች ለነፃነት እንዲዋጉ፣ በዓለም ዙሪያ የሜታን ልቀትን እንዲቀንስ፣ ብሔራዊ ፓርኮችን እንዲያድን እና ሌሎች ብዙ ነገሮች እየሰራ ነው።"
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "በንግድዎ ላይ የቢትኮይን ክፍያዎችን ይቀበሉ",
	"guide_header": "በንግድዎ ላይ ቢትኮይንን ለመቀበል ዝግጁ ነዎት?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "ቢትኮይንን ስለመቀበል ብዙ ጊዜ የሚጠየቁ ጥያቄዎች",
	"faq_description": "በንግድዎ ላይ የቢትኮይን ክፍያዎችን ስለመቀበል ጥያቄዎች አሉዎት?",
	"faq_header": "ስለ ቢትኮይን ክፍያ መቀበል ጥያቄዎች አሉዎት?",
	"faq_s1": "ቢትኮይን ምንድን ነው?",
	"faq_s1_c1": "ቢትኮይን ሁለት ገጽታዎች አሉት፡ ዲጂታል ገንዘብ እና የኮምፒውተር ኔትወርክ።",
	"faq_s1_c2": "የቢትኮይን ኔትወርክን (የኮምፒውተር ኔትወርክ) ተጠቅመው ቢትኮይንን (ዲጂታል ገንዘብ) ለሌላ ሰው ቀጥታ መላክ ይችላሉ።",
	"faq_s1_c3": "የቢትኮይን ኔትወርክ እንደ ባንኮች ወይም የብድር ካርድ ኩባንያዎች ያሉ አማላጆች ወይም ማዕከላዊ ባለስልጣን ሳያስፈልግ ይሰራል ስለዚህ እነዚያን የግብይት ክፍያዎች ያስወግዳሉ።",
	"faq_s1_c4": "የቢትኮይን ግብይቶች በፍጥነት ይጠናቀቃሉ (10 ደቂቃ) እና ተመላሽ ሊደረጉ ስለማይችሉ ገንዘብዎ ደህና መሆኑን ጠንቅቀው ያውቃሉ።",
	"faq_s2": "ቢትኮይን ለንግድዎ ምን ጥቅም አለው?",
	"faq_s2_c1": "በቢትኮይን ዝቅተኛ ክፍያዎች ክፍያዎችን ይቀበሉ እና ተጨማሪ ደንበኞች ያግኙ። የቢትኮይን ክፍያዎች ዝቅተኛ ክፍያ ያለ ዝቅተኛ ገደብ፣ ወዲያውኑ ይጠናቀቃሉ እና ተመላሽ ክፍያ ወይም ማጭበርበር አይነኩም።",
	"faq_s2_c2": "ቢትኮይንን መቀበል ነፃ ነው እና ንግድዎን በቢትኮይን ነጋዴ ካርታዎች ላይ ያስቀምጠዋል ቢትኮይን ተጠቃሚዎች እንዲያገኙዎ።",
	"faq_s2_c3": "ቢትኮይን ለንግድ ጥሩ የሆነበትን ሁሉንም ምክንያቶች ይመልከቱ።",
	"faq_s3": "የቢትኮይን ክፍያዎችን እንዴት መቀበል እችላለሁ?",
	"faq_s3_c1": "የቢትኮይን ክፍያዎችን ለመቀበል ነፃ የቢትኮይን ቦርሳ ብቻ ያስፈልግዎታል።",
	"faq_s3_c2": "በቦርሳ መመሪያው ፈጣን እና ቀላል ማዋቀር እና ዛሬ ቢትኮይንን መቀበል ይጀምሩ!",
	"faq_s3_c3": "የቦርሳ መመሪያውን ይመልከቱ",
	"faq_s4": "የተቀበልኩትን ቢትኮይን ወደ አካባቢ ገንዘብ መቀየር እችላለሁ?",
	"faq_s4_c1": "አዎ! ድብልቅ ቦርሳ ተጠቅመው የተቀበሉትን ቢትኮይን ክፍያ ሲቀበሉ በአውቶማቲክ ወደ አካባቢ ገንዘብ መቀየር ይችላሉ።",
	"faq_s4_c2": "በቦርሳ መመሪያው ፈጣን እና ቀላል ማዋቀር ይችላሉ።",
	"faq_s4_c3": "እንዲሁም ያገኙትን ክፍያ አንዳንዱን በቢትኮይን መያዝ ይችላሉ። በቢትኮይን መቆጠብ ብዙ ጥቅሞች አሉት፡",
	"faq_s4_c4": "ቢትኮይን ሙሉ ተጠባባቂ የፋይናንስ ስርዓት ነው።",
	"faq_s4_c5": "ቢትኮይን ዋጋ ግሽበት የለውም።",
	"faq_s4_c6": "እነዚህ ጥቅሞች ቢትኮይንን ለረጅም ጊዜ ገንዘብ ለማስቀመጥ ድንቅ መንገድ ያደርጉታል።",
	"faq_s4_c7": "ሁሉንም የቢትኮይን ክፍያዎች ወደ ዶላር ቢቀይሩም በጣም ዝቅተኛ ክፍያዎች ክፍያዎችን ይቀበላሉ እና ተጨማሪ ደንበኞች ያገኛሉ።",
	"faq_s5": "የቢትኮይን ክፍያዎችን በአካል መቀበል እችላለሁ?",
	"faq_s5_c1": "አዎ! በቢትኮይን ቦርሳ ተጠቅመው የቢትኮይን ክፍያዎችን በአካል በቀላሉ መቀበል ይችላሉ።",
	"faq_s5_c2": "ለንግድዎ ተስማሚ የሆነ ቢትኮይን ቦርሳ ለመምረጥ የቦርሳ መመሪያውን ይመልከቱ።",
	"faq_s5_c3": "የቦርሳ መመሪያውን ይመልከቱ",
	"faq_s6": "የቢትኮይን ክፍያዎችን በመስመር ላይ መቀበል እችላለሁ?",
	"faq_s6_c1": "አዎ! ባለው የመስመር ላይ ሱቅዎ ላይ በቀላሉ የቢትኮይን ክፍያዎችን መቀበል ይችላሉ።",
	"faq_s6_c2": "ለተጨማሪ ዝርዝር የቦርሳ መመሪያውን ይመልከቱ።",
	"faq_s7": "ቢትኮይንን እንደምቀበል ደንበኞቼን እንዴት ማሳወቅ እችላለሁ?",
	"faq_s7_c1": "ነፃ «Bitcoin Accepted Here» ስቲከሮች እናቀርባለን። በንግድዎ ላይ ይለጥፉ ደንበኞችዎ ቢትኮይንን እንደሚቀበሉ እንዲያውቁ።",
	"faq_s7_c2": "ስቲከሮችን እዚህ ይጠይቁ።",
	"faq_s7_c3": "እንዲሁም ንግድዎን በነፃ በቢትኮይን ነጋዴ ካርታዎች ላይ ማስመዝገብ ይችላሉ ቢትኮይናቸውን ለማጠፋት ቦታ የሚፈልጉ ሚሊዮኖች ቢትኮይን ተጠቃሚዎች እንዲያገኙዎ።",
	"faq_s7_c4": "አሁን ይመዝገቡ።",
	"faq_s8": "ቢትኮይንን መቀበል እንዴት ደንበኞቼን ይጨምራል?",
	"faq_s8_c1": "ቢትኮይናቸውን በሚቀበሉ ንግዶች ላይ ለማጠፋት የሚፈልጉ ሚሊዮኖች ቢትኮይን ተጠቃሚዎች አሉ።",
	"faq_s8_c2": "ቢትኮይን ክፍያዎችን መቀበል ብቻ ንግድዎን በነፃ የቢትኮይን ነጋዴ ካርታዎች ላይ ያስቀምጠዋል አዳዲስ ደንበኞችን ያገኛሉ።",
	"faq_s8_c3": "አሁን ይመዝገቡ።",
	"faq_s9": "ቢትኮይንን መቀበል ወጪ አለው?",
	"faq_s9_c1": "ለንግድዎ ቢትኮይንን መቀበል 100% ነፃ ነው። ምንም ውል ወይም ድብቅ ክፍያዎች የሉም።",
	"faq_s9_c2": "የቦርሳ መመሪያውን ይመልከቱ እና ዛሬ ቢትኮይን ክፍያዎችን መቀበል ይጀምሩ።"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "የቢትኮይን ክፍያዎችን እንዴት መቀበል እንደሚቻል",
	"wallets_header": "ነፃ የቢትኮይን ቦርሳ ያግኙ እና ቢትኮይን ክፍያዎችን መቀበል ይጀምሩ",
	"wallets_intro_1": "ሁሉም የቢትኮይን ቦርሳዎች ተስማሚ ናቸው ስለዚህ ደንበኞችዎ ማንኛውንም ቦርሳ ተጠቅመው በቢትኮይን ክፍያ ይፈጽማሉ።",
	"wallets_intro_2": "ቢትኮይን-ብቻ ቦርሳዎች፡",
	"wallets_intro_3": "ያለ ምንም አማላጅ የቢትኮይንን ሁሉንም ጥቅሞች የሚያገኙ ንፁህ ቢትኮይን ቦርሳዎች: ዝቅተኛ ክፍያዎች፣ ተመላሽ ክፍያ ወይም ማጭበርበር የለም።",
	"wallets_intro_4": "ድብልቅ ቦርሳዎች፡",
	"wallets_intro_5": "ከደንበኞችዎ ክፍያ ሲቀበሉ በተመሳሳይ ጊዜ የፈለጉትን መጠን ወደ ዶላር መቀየር ይችላሉ። ክፍያዎቹ ከብድር ካርዶች ያነሱ ግን ከንፁህ ቢትኮይን ክፍያ ይበልጣሉ።",
	"wallets_intro_6": "ሁለቱም ቢትኮይንን ለመቀበል ድንቅ መንገዶች ናቸው። የትኛውን ቦርሳ እንደሚጠቀሙ በንግድዎ መጠን እና ዓይነት ይወሰናል።",
	"wallets_choice_sole": "ለብቸኛ ባለቤት ቦርሳዎች",
	"wallets_choice_multiple": "ብዙ ሰራተኛ ላላቸው ንግዶች ቦርሳዎች",
	"wallets_choice_online": "ለመስመር ላይ ንግዶች ቦርሳዎች",
	"wallets_choice_invoice": "ለደረሰኝ-ተኮር ንግዶች ቦርሳዎች",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "ባለው Square POS ተርሚናል ወይም የመስመር ላይ ሱቅ ግንኙነት የቢትኮይን ክፍያዎችን ይቀበሉ። የቢትኮይን ክፍያ መቀበል ከዚህ ቀደም ቀላል ሆኖ አያውቅም።",
	"wallets_feature_bitcoin_only": "ቢትኮይን-ብቻ ቦርሳ",
	"wallets_feature_no_info": "መረጃ ማስገባት አያስፈልግም",
	"wallets_feature_in_person": "በአካል ክፍያ ብቻ",
	"wallets_feature_settles_bitcoin": "100% በቢትኮይን ይጠናቀቃል",
	"wallets_feature_hybrid": "ድብልቅ ቦርሳ",
	"wallets_feature_info": "የንግድ መረጃ ያስፈልጋል",
	"wallets_feature_in_person_online": "በአካል እና በመስመር ላይ ክፍያ",
	"wallets_feature_settles_both": "በቢትኮይን እና ዶላር ይጠናቀቃል",
	"wallets_feature_multiple_employees": "ብዙ ሰራተኞች ድጋፍ (BPT)",
	"wallets_feature_self_hosted": "ራስ-ማስተናገድ = 0% ክፍያ",
	"wallets_feature_online_store": "የመስመር ላይ ሱቅ ግንኙነት",
	"wallets_feature_invoicing": "ነፃ የደረሰኝ ሶፍትዌር",
	"wallets_get_wallet": "ቦርሳ ያግኙ"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "የቢትኮይን ንግድ ሂሳብ አያያዝ መመሪያ",
	"accounting_description": "በንግድ ሂሳብ አያያዝ ውስጥ የቢትኮይን ክፍያዎችን እንዴት በትክክል መያዝ እንደሚቻል ይወቁ።",
	"accounting_header": "የቢትኮይን ሂሳብ አያያዝ መመሪያ",
	"accounting_s1_c1": "ቢትኮይንን መቀበል ዝቅተኛ ክፍያዎች ክፍያዎችን መቀበል እና ተጨማሪ ደንበኞች ማግኘት ጨምሮ ብዙ ጥቅሞች አሉት።",
	"accounting_s1_c2": "ከቦርሳ መመሪያው ድብልቅ ቦርሳ ተጠቅመው 100% ቢትኮይንን ወደ ዶላር በራስ-ሰር ከቀየሩ ምንም የሂሳብ አያያዝ ለውጥ አያስፈልግም።",
	"accounting_s1_c3": "የቦርሳ መመሪያውን ይመልከቱ።",
	"accounting_s1_c4": "ነገር ግን ያገኙትን ቢትኮይን ያንዳንዱን በቢትኮይን ከያዙ ለሂሳብ አያያዝ አንዳንድ ዝርዝሮችን መመዝገብ ያስፈልጋል። መጀመሪያ ሊያስፈራ ይችላል ግን በእውነቱ በጣም ቀላል ነው።",
	"accounting_s1_c5": "ማስታወሻ: ይህ መመሪያ ለመረጃ ዓላማ ብቻ ነው እና እንደ ግብር ምክር አይቆጠርም።",
	"accounting_s1_c6": "ለግብር ምክር የቢትኮይን ሂሳብ አያያዝ ባለሙያ Satoshi Pacioli Accounting Services ን በጥብቅ እንመክራለን።",
	"accounting_s2": "ወጪ መሰረት ክትትል",
	"accounting_s2_c1": "ወጪ መሰረት ክትትል በዶላር ሂሳብ አያያዝ እና በቢትኮይን ሂሳብ አያያዝ መካከል ትልቁ ልዩነት ነው። ንግድዎን በቢትኮይን መሰረት ቢያካሂዱም ለግብር ሪፖርት የእያንዳንዱን ግብይት ዶላር ዋጋ ማሳወቅ ያስፈልጋል።",
	"accounting_s2_c2": "QuickBooks ከተጠቀሙ Bitcoin Sync ፕላግ-ኢን ተጠቅመው ይህን በራስ-ሰር ማድረግ ይችላሉ።",
	"accounting_s2_c3": "QuickBooks ካልተጠቀሙ Satoshi Pacioli Accounting Services ን እንመክራለን።",
	"accounting_s2_c4": "በራስ ለማድረግ ያገኙትን ቢትኮይን መጠን እና በዚያ ቀን የግብይት ዶላር ዋጋ ይመዝግቡ።",
	"accounting_s2_c5": "የቢትኮይን አሁን ያለው ዶላር ዋጋ እዚህ ሊፈተሽ ይችላል።",
	"accounting_s2_c6": "ይህን መረጃ በExcel ስፕሬድሺት ላይ ይመዝግቡ እና ለሂሳብ ባለሙያዎ ያቅርቡ።",
	"accounting_s2_c7": "ይህን ውሂብ ወደ Excel ራስ-በራስ ማስገባት ይችላሉ።",
	"accounting_s2_c8": "ያለፉ ቀናት የቢትኮይን ዶላር ዋጋ መፈተሽ ይቻላል ስለዚህ በየቀኑ ማድረግ አያስፈልግም።",
	"accounting_s3": "ቢትኮይን መጠቀም ወይም መሸጥ",
	"accounting_s3_c1": "ከቦርሳ መመሪያው ድብልቅ ቦርሳ ተጠቅመው 100% ቢትኮይንን ወደ ዶላር በራስ-ሰር ከቀየሩ ምንም የሂሳብ አያያዝ ለውጥ አያስፈልግም።",
	"accounting_s3_c2": "የቦርሳ መመሪያውን ይመልከቱ።",
	"accounting_s3_c3": "ለተወሰነ ጊዜ ከያዙ በኋላ ያንዳንድ ቢትኮይንን ከተጠቀሙ ወይም ከሸጡ የሽያጭ ዋጋውን በወጪ መሰረት ክትትል Excel ስፕሬድሺት ላይ ያክሉ።",
	"accounting_s3_c4": "ለምሳሌ ጥር 1 ቀን $100 ዋጋ ያለው ቢትኮይን ተቀብለው የካቲት 1 ቀን $110 አዲስ ዋጋ ላይ ከሸጡ ወይም ከተጠቀሙ $10 ካፒታል ትርፍ በሂሳብዎ ውስጥ ይመዝግቡ።",
	"accounting_s3_c5": "ተቃራኒውም ልክ ነው። ለምሳሌ ጥር 1 ቀን $100 ዋጋ ያለው ቢትኮይን ተቀብለው የካቲት 1 ቀን $90 አዲስ ዋጋ ላይ ከሸጡ ወይም ከተጠቀሙ $10 ካፒታል ኪሳራ በሂሳብዎ ውስጥ ይመዝግቡ።",
	"accounting_s4": "ተጨማሪ እርዳታ ያስፈልጋል",
	"accounting_s4_c1": "ቢትኮይንን ከንግድ ሂሳብ አያያዝዎ ጋር ለማዋሃድ ተጨማሪ እርዳታ ከፈለጉ Satoshi Pacioli Accounting Services ን በጥብቅ እንመክራለን።",
	"accounting_s4_c2": "ስለ Satoshi Pacioli Accounting Services ተጨማሪ ይወቁ።"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "የቢትኮይን ነጋዴ ካርታዎች - ንግድዎን በነፃ ያስመዝግቡ",
	"maps_header": "በቢትኮይን ነጋዴ ካርታዎች ላይ ይመዝገቡ ተጨማሪ ደንበኞች ያግኙ",
	"maps_request_details": "ከዚህ በታች የንግድ መረጃዎን ያስገቡ ንግድዎን በነፃ በቢትኮይን ነጋዴ ካርታዎች ላይ እናስመዘግባለን። ይህ ቢትኮይነሮች ንግድዎን አግኝተው ቢትኮይናቸውን እንዲያጠፉ ያስችላቸዋል!",
	"maps_view": "ካርታውን እዚህ ይመልከቱ።"
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "ንግድዎ ከ1 እስከ 2 ሳምንታት ውስጥ በቢትኮይን ነጋዴ ካርታዎች ላይ ይመዘገባል።",
	"kit_success_2": "ካርታውን እዚህ ይመልከቱ።"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "የቢትኮይን ንግድ ኪት",
	"kit_header": "የቢትኮይን ንግድ ኪትዎን ያትሙ",
	"kit_request": "ነፃ ኪት ይጠይቁ",
	"kit_request_details": "እያንዳንዱ የቢትኮይን ንግድ ኪት ለአካባቢ ንግዶች ቢትኮይንን መቀበል ቀላል ለማድረግ 2 ብሮሹሮች ይዟል።",
	"kit_country_global_print": "ዓለም አቀፍ — ራስዎ ያትሙ",
	"kit_enter_address": "አድራሻዎን ያስገቡ ነፃ የቢትኮይን ንግድ ኪት ነጭ ፖስታ ውስጥ እንልክልዎታለን። የአድራሻ ውሂብ ኪቱ ከተላከ በኋላ ይሰረዛል።",
	"kit_print_details": "የትም ቢኖሩ ራስዎ ብሮሹሮች አትመው መሳተፍ ይችላሉ! ማተም ካልፈለጉ ዲጂታል ንግድ ኪት ለንግዶች መላክ ይችላሉ።",
	"kit_view_files": "ፋይሎችን ይመልከቱ",
	"kit_digital_kit": "ዲጂታል ኪት",
	"kit_resources": "እያንዳንዱ ኪት ወደ እነዚህ ነፃ ግብዓቶች ማስፈንጠሪያ ይዟል"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "የቢትኮይን ንግድ ኪትዎ ከ1 እስከ 2 ሳምንታት ውስጥ ነጭ ፖስታ ውስጥ ይደርስዎታል።"
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "«Bitcoin Accepted Here» ስቲከሮች",
	"stickers_header": "ነፃ «BITCOIN ACCEPTED HERE» ስቲከሮች ያግኙ",
	"stickers_request": "ነፃ ስቲከሮች ያግኙ",
	"stickers_request_details": "በእነዚህ ነፃ «Bitcoin Accepted Here» ስቲከሮች ደንበኞችዎ ቢትኮይንን እንደሚቀበሉ ያሳውቁ።",
	"stickers_country_global_print": "ዓለም አቀፍ — ራስዎ ያትሙ",
	"stickers_request_instructions": "ነጭ ፖስታ ውስጥ 3 «Bitcoin Accepted Here» ስቲከሮች እንልክልዎታለን። ለንግድዎ ከ3 በላይ ከፈለጉ ብዙ ጊዜ ይጠይቁ። የአድራሻ ውሂብ ስቲከሮቹ ከተላኩ በኋላ ይሰረዛል።",
	"stickers_print_details": "የትም ቢኖሩ የራስዎን «Bitcoin Accepted Here» ስቲከሮች ማተም ይችላሉ! ከዚህ በታች ቋንቋ ይምረጡ ስቲከር ፋይሎች እና ማተሚያ መመሪያ ለማግኘት።",
	"stickers_request_language": "የሚፈልጉት ቋንቋ የለም? ከዚህ በታች ያለውን ቅጽ ይሙሉ በሚፈልጉት ቋንቋ «Bitcoin Accepted Here» ስቲከር ፋይሎችን ለመጠየቅ።"
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "ስቲከሮችዎ ከ1 እስከ 2 ሳምንታት ውስጥ ነጭ ፖስታ ውስጥ ይደርሱ። እያንዳንዱ ፖስታ 3 ስቲከሮች ይዟል። ለንግድዎ ከ3 በላይ ከፈለጉ ተጨማሪ ፓኬጅ ይጠይቁ!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "ከ3 እስከ 4 ሳምንታት ውስጥ ስቲከር ፋይሎችን እናዘጋጃለን እና እናተማለን። ስለታገሱን እናመሰግናለን!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "የራስዎን የቢትኮይን ንግድ ኪት ያትሙ",
	"english_bbk_files_description": "የብሮሹር ፋይሎችን እዚህ ያውርዱ።",
	"english_header": "የእንግሊዝኛ ቢትኮይን ንግድ ኪት ብሮሹሮች ያትሙ"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "እንግሊዝኛ «Bitcoin Accepted Here» ስቲከር ፋይሎች",
	"english_biz_sticker_files_description": "እንግሊዝኛ ስቲከር ፋይሎችን አውርደው የራስዎን Bitcoin Accepted Here ስቲከሮች ያትሙ።",
	"english_header": "እንግሊዝኛ «BITCOIN ACCEPTED HERE» ስቲከር ፋይሎችን ያውርዱ"
});

console.log('\nDone! Business files created for Amharic (am).');
