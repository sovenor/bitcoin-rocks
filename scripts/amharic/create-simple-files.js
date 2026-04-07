/**
 * Creates Amharic (am) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404 ስህተት | ገጹ አልተገኘም",
	"404_message": "ይህ የተሰበረ ገጽ በጭራሽ አይደንቅም",
	"404_home": "ወደ መነሻ ተመለስ"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "ስለ bitcoin.rocks — ከ2022 ጀምሮ የቢትኮይን ትምህርት",
	"about_description": "bitcoin.rocks ከ2022 ጀምሮ የተቋቋመ ነፃ እና ክፍት ምንጭ የቢትኮይን ትምህርት ድር ጣቢያ ነው። ተልዕኮአችን በትምህርት አማካኝነት የቢትኮይን ተቀባይነትን ማፋጠን ነው።",
	"about_header": "ስለ እኛ",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "ተልዕኮአችን",
	"about_mission_1": "bitcoin.rocks በ2022 ቀላል ተልዕኮ ይዞ ተቋቋመ፡ በትምህርት አማካኝነት የቢትኮይን ተቀባይነትን ማፋጠን።",
	"about_mission_2": "ስለ ቢትኮይን ለሚጠይቅ ሰው የሚያጋሩት የመጀመሪያ ማስፈንጠሪያ ሆኖ ለማገልገል እንገኛለን። ቢትኮይን እንዴት የተሻለ ዓለም እየገነባ እንደሆነ የሚያስረዳ ተስማሚ እና ተደራሽ መነሻ ነው።",
	"about_mission_3": "በጣም ብዙ ሰዎች ቢትኮይንን ያስተውሉታል ወይም በትክክል አልተዋወቁበትም። ማንም ሊረዳው የሚችል ነፃ እና ከፍተኛ ጥራት ያለው ትምህርታዊ ይዘት በመስጠት ይህን ለመቀየር እንፈልጋለን።",
	"about_what_we_do_header": "ምን እናደርጋለን",
	"about_what_we_do_1": "ለቢትኮይን አዲስ ገቢዎች ነፃ ትምህርታዊ ይዘት እንፈጥራለን። ድር ጣቢያችን ስለ ዋጋ ግሽበት፣ ራስ-ጠባቂነት፣ ቦርሳዎች፣ ላይትኒንግ ኔትወርክ እና ቢትኮይን ከሌሎች ንብረቶች እና የክፍያ ስርዓቶች ጋር እንዴት እንደሚወዳደር ያካትታል።",
	"about_what_we_do_2a": "",
	"about_what_we_do_2b": "ነፃ የቢትኮይን ስቲከሮች",
	"about_what_we_do_2c": " ወደ ቤትዎ እንልካለን በማህበረሰብዎ ውስጥ የቢትኮይን ግንዛቤን ለማስፋፋት እንዲረዱ። በየወሩ በመቶዎች የሚቆጠሩ ሰዎች በእነዚህ ስቲከሮች ላይ ያሉትን QR ኮዶች ይቃኛሉ ስለ ቢትኮይን ለመማር።",
	"about_what_we_do_3a": "እንዲሁም ",
	"about_what_we_do_3b": "ለማተም ዝግጁ በራሪ ወረቀቶች",
	"about_what_we_do_3c": " እና ",
	"about_what_we_do_3d": "የንግድ ኪቶች",
	"about_what_we_do_3e": " ለአካባቢ ንግዶች የቢትኮይን ክፍያ እንዲቀበሉ ለሚፈልጉ ማንኛውም ሰው እናቀርባለን።",
	"about_what_we_do_4": "ሁሉም ይዘታችን ምንም ቀዳሚ የቢትኮይን እውቀት እንደሌለ ይገምታል። ለቢትኮይን ሙሉ በሙሉ አዲስ ቢሆኑም ወይም ለማጋራት ግብዓቶችን የሚፈልግ ልምድ ያለው ቢትኮይነር ቢሆኑ፣ bitcoin.rocks ለእርስዎ ነው።",
	"about_editorial_header": "የአርትኦት ዘዴአችን",
	"about_editorial_1": "በ bitcoin.rocks ላይ ያለ ሁሉም ይዘት የተመረጠ እና እውነታ-የተረጋገጠ ነው። ውሂብ ወይም ስታቲስቲክስ ስንጠቅስ ምንጮቻችንን እንጠቅሳለን መረጃውን በራስዎ ማረጋገጥ እንዲችሉ።",
	"about_editorial_2": "እንደ TIME Magazine፣ Forbes፣ MIT Technology Review፣ Lyn Alden እና ሌሎች ብዙ ታማኝ ምንጮችን እናስፈንጥራለን። እውነቶቹ በግልጽ ሲቀርቡ ቢትኮይን ለራሱ ይናገራል ብለን እናምናለን።",
	"about_editorial_3": "ይዘታችን በመደበኛነት ይገመገማል እና ትክክለኛነትን እና ወቅታዊነትን ለማረጋገጥ ይዘመናል። ሁሉም ይዘት በቢትኮይን ትምህርት ላይ ብቻ ያተኩራል።",
	"about_open_source_header": "ክፍት ምንጭ",
	"about_open_source_1a": "bitcoin.rocks በMIT ፍቃድ ስር የተፈቀደ ነፃ እና ክፍት ምንጭ ፕሮጀክት ነው። ሙሉ ኮድ ቤዛችን በይፋ ይገኛል ",
	"about_open_source_1b": "በGitHub ላይ",
	"about_open_source_1c": "።",
	"about_open_source_2": "ማንም ሰው ለ bitcoin.rocks ማበርከት ይችላል። በተለይ ይዘታችንን ለዓለም ዙሪያ ሰዎች ተደራሽ ለማድረግ የሚረዱ ተርጓሚዎችን እንቀበላለን።",
	"about_open_source_3": "ለበጎ ፈቃደኛ ተርጓሚዎች ማህበረሰባችን ምስጋና ይግባው፣ bitcoin.rocks በአሁኑ ጊዜ በ33 ቋንቋዎች ይገኛል እና እያደገ ነው።",
	"about_open_source_contribute": "እንዴት ማበርከት እንደሚቻል ይወቁ።",
	"about_contact_header": "ያግኙን",
	"about_contact_1": "ከእርስዎ መስማት ደስ ይለናል። ጥያቄ፣ ሀሳብ ወይም ሰላም ለማለት ብቻ ቢፈልጉ፣ በማንኛውም ጊዜ ያግኙን።",
	"about_contact_email": "ኢሜይል፡",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "ስቲከሮችዎን ከ2 እስከ 4 ሳምንታት ውስጥ ይደርስዎታል። እየጠበቁ ያሉ ጊዜ ስቲከሮችዎን ለመለጠፍ ጥሩ ቦታ ያስቡ!",
	"sticker_success_2": "ጥሩ የስቲከር ቦታዎች፡",
	"sticker_success_list_1": "ሰዎች የሚያዩዋቸው ህዝባዊ ቦታዎች",
	"sticker_success_list_2": "በቀላሉ የማይነሱ ቦታዎች (ስቲከሮቹ ቋሚ ጉዳት አያደርሱም)",
	"sticker_success_list_3": "በቀላሉ የሚጣበቁባቸው ገጽታዎች (ብረት፣ ፕላስቲክ፣ መስታወት)",
	"sticker_success_list_4": "በግል ንብረት፣ ምልክቶች ላይ፣ ኤቲኤም ላይ ወይም የነዳጅ ማደያ ላይ አይለጥፉ",
	"sticker_success_3": "ሌሎች ሰዎች ስቲከሮቻቸውን የት እንደሚለጥፉ ማየት ይፈልጋሉ?",
	"sticker_success_flyers_bar_new": "አዲስ!",
	"sticker_success_flyers_bar_cta": "የቢትኮይን በራሪ ወረቀቶችን አትምና ለጥፍ →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "ጥያቄዎን በተሳካ ሁኔታ ተቀብለናል።",
	"sticker_language_success_2": "አዳዲስ ፋይሎችን በቡድን ስለምናትም ለማውረድ ዝግጁ ለመሆን ብዙ ሳምንታት ሊወስድ ይችላል። በቅርቡ ይመልከቱ!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "ፖስት ካርዶችዎ ከ1 እስከ 2 ሳምንታት ውስጥ ይደርስዎታል።",
	"postcard_success_2": "እነዚህን ፖስት ካርዶች ለሚያውቋቸው ሰው በመላክ የቢትኮይን ተቀባይነትን ለማፋጠን ስለረዱ እናመሰግናለን!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "ምልክቶችዎ ከ1 እስከ 2 ሳምንታት ውስጥ ይደርስዎታል። እየጠበቁ ያሉ ጊዜ ምልክቶችዎን ለማስቀመጥ ጥሩ ቦታዎችን ያስቡ!",
	"sign_success_3": "ሌሎች ሰዎች ምልክቶቻቸውን የት እንደሚያስቀምጡ ማየት ይፈልጋሉ?",
	"signs_share_header": "የምልክት ቦታዎችዎን ያጋሩ",
	"signs_share_c1": "በNostr ላይ የምልክት ቦታ ፎቶዎን ያጋሩ እና ሳቶሺዎችን እንዛፕላችኋለን! ሳቶሺዎች የቢትኮይን ክፍልፋዮች ናቸው።",
	"signs_btn_share_on_nostr": "በNOSTR ላይ ያጋሩ",
	"signs_btn_what_is_nostr": "NOSTR ምንድን ነው?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "የተደራራቢ ዋጋ ግሽበት ካልኩሌተር",
	"cic_description": "ይህን የተደራራቢ ዋጋ ግሽበት ካልኩሌተር ተጠቅመው ደመወዝዎ ከዋጋ ግሽበት ጋር ለመከታተል ምን ያህል መጨመር እንዳለበት ይወቁ።",
	"what_can_i_do_about": "ስለ ዋጋ ግሽበት",
	"what_can_i_do_about_2": "ምን ማድረግ እችላለሁ?",
	"cic_inflation_cta": "በቢትኮይን ከዋጋ ግሽበት ይውጡ"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "በNostr ከማትሪክስ ያምልጡ",
	"nostr_header": "በNOSTR ከማትሪክስ ያምልጡ"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr ምንድን ነው?",
	"what_is_nostr_header": "NOSTR ምንድን ነው?"
});

console.log('\nDone! Simple files created for Amharic (am).');
