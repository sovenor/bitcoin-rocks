#!/usr/bin/env node
/**
 * Amharic manifest refresh — translate-manifest-changed.js
 *
 * Fills `targetTranslation` for every `manifest-changed` entry in
 * scripts/i18n-audit/reports/am.json with a fresh Amharic translation
 * of the NEW `englishValue`. The existing Amharic values translate the
 * pre-V2 English (the freshness-gate bug in the earlier language-diff
 * silently skipped most of these).
 *
 * Idempotent: safe to re-run.
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
	"am.json",
);

// All 162 manifest-changed entries for am, keyed by `<namespace>|<key>`.
const T = {
	// 404 (2)
	"404|404_home": "ወደ መነሻ ተመለስ",
	"404|404_message": "ቢትኮይን ድንቅ ነው፣ ይህ የተሰበረ ገጽ ግን አይደለም።",

	// about (3)
	"about|about_editorial_2":
		"እንደ ፌዴራል ሪዘርቭ (FRED)፣ የአሜሪካ የሰራተኛ ስታቲስቲክስ ቢሮ፣ FDIC፣ የተባበሩት መንግስታት፣ የዓለም የወርቅ ምክር ቤት፣ TIME Magazine፣ Forbes፣ MIT Technology Review፣ Lyn Alden እና ሌሎች ብዙ ተአማኒ ምንጮችን እናመለክታለን።",
	"about|about_header": "ስለ bitcoin.rocks",
	"about|about_open_source_2":
		"bitcoin.rocks በMIT ፈቃድ ስር የተፈቀደ ነፃ፣ ክፍት ምንጭ ፕሮጀክት ነው። ማንኛውም ሰው ወደ bitcoin.rocks አስተዋፅኦ ማድረግ ይችላል። ይዘቱን ወደ ተጨማሪ ቋንቋዎች ለመተርጎም የሚረዱ ተርጓሚዎችን በተለይ እንቀበላለን።",

	// bank-runs (1)
	"bank-runs|bank_runs_header":
		"ቢትኮይን የባንክ ሩጫ የለውም ግን ባንክዎ ሊኖረው ይችላል።",

	// bitcoin-vs-banks (11)
	"bitcoin-vs-banks|point_1_summary_1":
		"የኢንተርኔት ግንኙነት ያለው ማንኛውም ሰው ቢትኮይንን መጠቀም ይችላል — ",
	"bitcoin-vs-banks|point_1_summary_2": "ፈቃድ-አልባ ነው።",
	"bitcoin-vs-banks|point_1_summary_3":
		"ባንኮች በፖሊሲ ወይም በመንግስት ደንብ ላይ ተመስርተው መለያዎችን ሊከለክሉ፣ ሊሰርዙ ወይም ሊዘጉ ይችላሉ።",
	"bitcoin-vs-banks|point_2_summary_1":
		"የቢትኮይን ኔትወርክ ያለ የጥገና ጊዜ ወይም በዓላት 24/7/365 ይሰራል። ባንኮች የተወሰኑ ሰዓታት፣ የቅዳሜና እሁድ እረፍት እና የጥፋት ጊዜዎች አላቸው።",
	"bitcoin-vs-banks|point_3_summary_1":
		"እያንዳንዱ የቢትኮይን ግብይት ማንም ሊመረምር በሚችል የህዝብ blockchain ላይ ነው። ባንኮች ደንበኞች በራሳቸው ማረጋገጥ የማይችሉትን የግል መዝገቦች ይሰራሉ።",
	"bitcoin-vs-banks|point_4_summary_1":
		"በቢትኮይን፣ የራስዎን ግላዊ ቁልፎች ይይዛሉ — የእኛን ቀላል ",
	"bitcoin-vs-banks|point_4_summary_2": "የቢትኮይን ዋሌቶች",
	"bitcoin-vs-banks|point_4_summary_3":
		" መመሪያ ይመልከቱ። ባንኮች ገንዘብዎን ይይዛሉ እና በማንኛውም ጊዜ ሊያቆሙ፣ ሊገድቡ ወይም ሊከለክሉ ይችላሉ።",
	"bitcoin-vs-banks|point_5_summary_1":
		"የቢትኮይን ክፍያዎች ግልፅ እና ሊተነበዩ የሚችሉ ናቸው። ባንኮች በጊዜ ሂደት የተደበቁ የመለያ፣ የሂሳብ ጉድለት፣ የገንዘብ ማስተላለፍ እና የATM ክፍያዎችን ይጨምራሉ።",
	"bitcoin-vs-banks|point_6_summary_1":
		"ቢትኮይን እንዲያወጡ የሚያስችልዎ የሚይዙትን ብቻ ነው። ባንኮች ከሂሳብ ጉድለት ያስፈቅዳሉ፣ ከዚያም ለዕድሉ ተከታታይ የቅጣት ክፍያዎችን ይጠይቃሉ።",
	"bitcoin-vs-banks|point_7_summary_1":
		"አንዴ ከተላለፈ የቢትኮይን ግብይቶች ሊቆሙ ወይም ሊገለበጡ አይችሉም። ባንኮች በፖሊሲ ወይም በመንግስት ደንብ ላይ ተመስርተው ግብይቶችን ሊዘጉ፣ ሊያቆሙ ወይም ሊገለብጡ ይችላሉ።",

	// bitcoin-vs-bonds (17)
	"bitcoin-vs-bonds|point_1_summary_1":
		"ቦንዶች 'አደጋ-የለሽ' የሚባሉት በስም ብቻ ነው — ዋጋ ግሽበት፣ የወለድ ተመን ለውጥ እና የክፍያ አለመፈጸም አደጋ ሁሉም እውነተኛውን ገቢ ይበላሉ።",
	"bitcoin-vs-bonds|point_1_summary_2":
		"ቢትኮይን ግልፅ ተለዋዋጭነት አለው ግን የተደበቀ የተቃዋሚ አደጋ የለውም።",
	"bitcoin-vs-bonds|point_2_summary_1": "ዋጋ ግሽበት",
	"bitcoin-vs-bonds|point_2_summary_2": "ዋጋ ግሽበት",
	"bitcoin-vs-bonds|point_2_summary_3":
		"ከቦንድ ገቢ በፍጥነት ሲያልፍ፣ የቦንድ ባለቤቶች በየዓመቱ እውነተኛ የግዥ ሃይል ያጣሉ። የቢትኮይን 21-ሚሊዮን ገደብ በዋጋ ግሽበት ሊዋጥ አይችልም።",
	"bitcoin-vs-bonds|point_3_summary_1":
		"የቦንድ ገበያዎች በቀውስ ውስጥ ሊቀዘቅዙ ይችላሉ — Silicon Valley Bank ዋጋ የሚያጡ ቦንዶችን በመያዝ በከፊል ወድቋል። እንዴት ",
	"bitcoin-vs-bonds|point_3_summary_2": "የባንክ ሩጫ",
	"bitcoin-vs-bonds|point_3_summary_3":
		" እንደሚከሰቱ እና ቢትኮይን እንዴት እነሱን እንደሚከለክል ይመልከቱ። ቢትኮይን ያለ ፈሳሽ ችግር በዓለም አቀፍ ደረጃ 24/7 ይነግዳል።",
	"bitcoin-vs-bonds|point_4_summary_1":
		"በቂ ገዢዎች ሲያነሱ የግምጃ ቤት ጨረታዎች ሊወድቁ ይችላሉ — ",
	"bitcoin-vs-bonds|point_4_summary_2": "ደካማውን 2022 ጨረታ",
	"bitcoin-vs-bonds|point_4_summary_3":
		" ይመልከቱ። የቢትኮይን ዋጋ በክፍት ገበያዎች ላይ ያለማቋረጥ ይገኛል፣ ሊወድቅ የሚችል ማዕከላዊ ጨረታ የለም።",
	"bitcoin-vs-bonds|point_5_summary_1":
		"የቦንድ ገቢዎች በግዥ ጊዜ የተስተካከሉ ናቸው። ኢኮኖሚው ቢያድግም ወይም ገንዘቡ ቢወድቅም፣ ገቢዎ ተመሳሳይ ይቀጥላል።",
	"bitcoin-vs-bonds|point_5_summary_2":
		"ቢትኮይን ተቀባይነት እያደገ እና ፍላጎት የተወሰነ አቅርቦትን ሲያገኝ ለከፍተኛ እድገት ቦታ አለው።",
	"bitcoin-vs-bonds|point_6_summary_1":
		"አብዛኛዎቹ ቦንዶች በባንኮች ወይም በደላሎች በኩል ይያዛሉ፣ የተቃዋሚ አደጋ ይጨምራሉ። ቢትኮይን በ",
	"bitcoin-vs-bonds|point_6_summary_2": "ዋሌት",
	"bitcoin-vs-bonds|point_7_summary_1":
		"ቦንዶች ሙሉ በሙሉ መንግስታት ላይ በመመለስ ላይ ይመሰረታሉ። መንግስት ካልከፈለ ወይም ዕዳውን በዋጋ ግሽበት ካጠፋ፣ የቦንድ ባለቤቶች ያጣሉ።",
	"bitcoin-vs-bonds|point_7_summary_2":
		"ቢትኮይን ከማንኛውም መንግስት ወይም የፖለቲካ ሃይል ነፃ ሆኖ ይሰራል።",

	// bitcoin-vs-cash (11)
	"bitcoin-vs-cash|point_1_summary_1":
		"ቢትኮይን በደቂቃዎች ውስጥ በኢንተርኔት ወደ ማንኛውም ቦታ ይንቀሳቀሳል። ገንዘብ አካላዊ መገኘት ወይም ታማኝ አጓጓዦች ያስፈልገዋል — የ$20 ቢል በኢሜል መላክ አይችሉም።",
	"bitcoin-vs-cash|point_2_summary_1":
		"ቢትኮይን በሁሉም ቦታ በተመሳሳይ መንገድ ይሰራል። ገንዘብ በጂኦግራፊ፣ በምንዛሬ ተመን እና በአካባቢያዊ ተቀባይነት የተገደበ ነው።",
	"bitcoin-vs-cash|point_3_summary_1":
		"መንግስታት ገንዘብን በአንድ ሌሊት ሊያደርጉት የሚችሉት ዋጋ አልባ ነው — ህንድ በ2016 አደረገች። ያለ demonetization እንኳ፣ ገንዘብ ዋጋውን ወደ ",
	"bitcoin-vs-cash|point_3_summary_2": "ዋጋ ግሽበት ያጣል።",
	"bitcoin-vs-cash|point_3_summary_3":
		"ቢትኮይን በማንኛውም መንግስት ወይም ባለስልጣን ዋጋ አልባ ሊሆን አይችልም።",
	"bitcoin-vs-cash|point_4_summary_1":
		"ገንዘብ ሊቀዛዘፍ ይችላል፣ አንዳንዴ በሚያሳምን መንገድ። ቢትኮይን ማጭበርበርን በሒሳብ የማይቻል የሚያደርግ cryptography ይጠቀማል።",
	"bitcoin-vs-cash|point_5_summary_1":
		"ቢትኮይን ማዕከላዊ ባለስልጣን የለውም። ገንዘብ ብዙ ሊያትሙ፣ ዲዛይን ሊቀይሩ ወይም ኖቶችን ሊያራግፉ በሚችሉ መንግስታት የሚሰጥ ነው።",
	"bitcoin-vs-cash|point_6_summary_1":
		"ገንዘብ ለስርቆት፣ ለእሳት፣ ለመጥፋት እና ለመወረስ ተጋላጭ ነው። ቢትኮይን በስልክ ወይም በሃርድዌር መሳሪያ ላይ ",
	"bitcoin-vs-cash|point_6_summary_2": "በራስ-መጠበቅ",
	"bitcoin-vs-cash|point_6_summary_3": " በደህና ሊይዙት ይችላሉ።",
	"bitcoin-vs-cash|point_7_summary_1":
		"ቢትኮይን ወደ 100 ሚሊዮን ሳቶሺ ይከፋፈላል፣ ማንኛውንም መጠን micropayments ያስችላል። ገንዘብ ዝቅተኛ መለኪያዎች አሉት — አንድ ሳንቲም መክፈል አይችሉም።",

	// bitcoin-vs-cbdc (14)
	"bitcoin-vs-cbdc|point_1_summary_1":
		"ቢትኮይንን በመጠቀም ከግብይት ማንም ሊከለክልዎት አይችልም። CBDCs መንግስታት እና ማዕከላዊ ባንኮች እያንዳንዱን ክፍያ እንዲቆጣጠሩ ተዘጋጅተዋል፣ ነፃነትዎን ይገድባሉ።",
	"bitcoin-vs-cbdc|point_10_summary_1":
		"ቢትኮይን እስካሁን ተገንብቶ የነበረ በጣም ደህንነቱ የተጠበቀ የኮምፒዩተር ኔትወርክ ሲሆን በ hack ተጎድቶ አያውቅም። CBDCs በ hack ተጎድተው በሚታወቁ ባንኮች እና መንግስታት ላይ ይመሰረታሉ።",
	"bitcoin-vs-cbdc|point_2_summary_1":
		"ቢትኮይን በጭራሽ አያልፍም እና ወርሃዊ ክፍያዎች የሉትም። CBDCs እንዲያልፉ መፈረጃቸው ሊቻል ይችላል፣ ለወደፊቱ ከመቆጠብ ያግድዎታል።",
	"bitcoin-vs-cbdc|point_3_summary_1":
		"ቢትኮይን 21 ሚሊዮን BTC ጠንካራ ገደብ አለው። CBDCs የአቅርቦት ገደብ የላቸውም፣ መንግስታት ገንዘብን በፍላጎት እንዲያሰፋ ያስችላል — ይህም ",
	"bitcoin-vs-cbdc|point_3_summary_2": "ዋጋ ግሽበት ያስከትላል።",
	"bitcoin-vs-cbdc|point_4_summary_1":
		"የቢትኮይን አድራሻዎች ከእውነተኛ ማንነትዎ ጋር አይያያዙም። CBDCs በቀጥታ ከመንግስት መታወቂያ ጋር ይያያዛሉ፣ የብዙዎችን ፋይናንሺያል ክትትል እና ሳንሱር ያስችላሉ።",
	"bitcoin-vs-cbdc|point_5_summary_1":
		"የቢትኮይን ደንቦች በአስር ሺዎች በሚቆጠሩ ገለልተኛ ኖዶች ይረጋገጣሉ። CBDCs በመንግስት እና በማዕከላዊ ባንክ እጅ የተማከሉ ናቸው፣ ይህም ደህንነትን ይጎዳል።",
	"bitcoin-vs-cbdc|point_6_summary_1":
		"ማንኛውም ሰው የኔትወርኩን ደንቦች ለማረጋገጥ የቢትኮይን ኖድ ማሄድ ይችላል። CBDCs ተጠቃሚዎች ኖዶችን እንዲያሄዱ አይፈቅዱም — ማዕከላዊ ባለስልጣንን ማመን አለብዎ።",
	"bitcoin-vs-cbdc|point_7_summary_1":
		"በራስ-የተጠበቀ ቢትኮይን በማንም ሊቀዘቀዝ አይችልም። CBDCs መንግስታት እና ማዕከላዊ ባንኮች መለያዎችን ወዲያውኑ እንዲያቀዘቅዙ ተዘጋጅተዋል።",
	"bitcoin-vs-cbdc|point_8_summary_1":
		"ቢትኮይን በ",
	"bitcoin-vs-cbdc|point_8_summary_2": "ዋሌት።",
	"bitcoin-vs-cbdc|point_8_summary_3":
		" በራስ-ሲጠብቁት በገንዘብዎ ላይ ሙሉ ቁጥጥር ይሰጥዎታል። CBDCs ገንዘብዎን ለመያዝ እንደ ባንኮች ወይም መንግስታት ያሉ ጠባቂዎችን ማመን ይጠይቃሉ።",
	"bitcoin-vs-cbdc|point_9_summary_1":
		"የቢትኮይን የገንዘብ ፖሊሲ በኮድ የተስተካከለ እና ሊቀየር አይችልም። CBDCs በፖለቲከኞች በፈቃድ ሊደገሙ ይችላሉ፣ ",
	"bitcoin-vs-cbdc|point_9_summary_2": "ዋጋ ግሽበት",

	// bitcoin-vs-crypto (8)
	"bitcoin-vs-crypto|point_1_summary_1":
		"የቢትኮይን ፕሮቶኮል ከ2009 ጀምሮ በመሰረቱ ተመሳሳይ ሆኖ ቀጥሏል፣ ሊተነበዩ የሚችሉ ደንቦችን ይሰጣል። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች ፕሮቶኮላቸውን እና ደንቦቻቸውን ያለማቋረጥ ይለውጣሉ።",
	"bitcoin-vs-crypto|point_2_summary_1":
		"ቢትኮይን በዓለም ዙሪያ በአስር ሺዎች በሚቆጠሩ ገለልተኛ ኖዶች ላይ ይሰራል። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች በፋውንዴሽኖች፣ ኩባንያዎች ወይም አነስተኛ የገንቢ ቡድኖች ቁጥጥር ስር ናቸው።",
	"bitcoin-vs-crypto|point_3_summary_1":
		"ቢትኮይን 21 ሚሊዮን ኮይኖች ጠንካራ ገደብ አለው — በጣም አልፎ አልፎ ያለ ዲጂታል ንብረት። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች ያልተገደበ አቅርቦት ወይም አዳዲስ ቶከኖችን ለማምረት ዘዴዎች አሏቸው።",
	"bitcoin-vs-crypto|point_4_summary_1":
		"ቢትኮይን አንድ ዓላማ አለው፦ ከአቻ-ወደ-አቻ ዲጂታል ገንዘብ። ማንም ሊረዳውና ሊጠቀምበት ይችላል። አብዛኛው ክሪፕቶ ውስብስብ smart contracts ወይም DeFi ፕሮቶኮሎችን ያካትታል።",
	"bitcoin-vs-crypto|point_5_summary_1":
		"የቢትኮይን Proof of Work ለ15+ ዓመታት በዋናው ኔትወርክ ላይ ያለ ስኬታማ ጥቃት ሮጧል። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች የሙከራ ስምምነት ዘዴዎችን ይጠቀማሉ።",
	"bitcoin-vs-crypto|point_6_summary_1":
		"ቢትኮይን ዲጂታል ገንዘብ ነው — የዋጋ ማከማቻ እና የልውውጥ ዘዴ። አብዛኛዎቹ ክሪፕቶ ቶከኖች ግምታዊ መገልገያ ወይም የገዥነት ቶከኖች ከማይታወቅ ዋጋ ጋር ናቸው።",
	"bitcoin-vs-crypto|point_7_summary_1":
		"ቢትኮይን በጥቃት ስር ይጠነክራል እና እያንዳንዱን ቀውስ፣ ክልከላ እና ትችት ተርፏል። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች በቁጥጥር፣ በቴክኒካዊ እና በገበያ ግፊት ውስጥ ይወድቃሉ።",
	"bitcoin-vs-crypto|point_8_summary_1":
		"ቢትኮይን CEO፣ ኩባንያ፣ የአንድ ነጥብ ውድቀት የለውም። አብዛኛዎቹ ክሪፕቶ ፕሮጀክቶች በ VCs፣ በተወሰነ አመራር ወይም በአንድ ኩባንያ መትረፍ ላይ ይመሰረታሉ።",

	// bitcoin-vs-fine-art (7)
	"bitcoin-vs-fine-art|point_1_summary_1":
		"እያንዳንዱ ቢትኮይን ተመሳሳይ እና ሊለዋወጥ የሚችል ነው። እያንዳንዱ ጥበብ ልዩ ነው — የተለያዩ ፈጠራ፣ ታሪክ፣ ሁኔታ እና ታሪክ ቀጥታ ንፅፅርን አስቸጋሪ ያደርጉታል።",
	"bitcoin-vs-fine-art|point_2_summary_1":
		"ቢትኮይን በማንኛውም ሰው ተደራሽ በሆነ ዓለም አቀፍ ገበያ ላይ 24/7 ይነግዳል። ጥበብ ልዩ የጨረታ ቤቶች፣ የግል ነጋዴዎች ወይም ጋለሪዎችን ያስፈልገዋል እና ብዙውን ጊዜ ወደ ቀልደኞች ብቻ ነው።",
	"bitcoin-vs-fine-art|point_3_summary_1":
		"ቢትኮይን መግዛት ወይም መሸጥ ከ1% በታች ያሰፋል፣ ብዙ ጊዜ በጣም ያነሰ። የጥበብ ሽያጭ 30–40% በገዥ ፕሪሚየም፣ ኮሚሽኖች፣ ኢንሹራንስ እና ማጓጓዣ ያካሂዳል።",
	"bitcoin-vs-fine-art|point_4_summary_1":
		"ቢትኮይን ወደ 100 ሚሊዮን ሳቶሺ ይከፋፈላል፣ ለማንኛውም መጠን ግብይት ፍጹም ያደርገዋል። የሥዕል ክፍልፋይ ወይም የቅርጽ ማዕዘን ሊኖርዎት አይችልም።",
	"bitcoin-vs-fine-art|point_5_summary_1":
		"የቢትኮይን ባለቤትነት እና እውነተኛነት በሰንሰለቱ ላይ በማንም ሰው በምስጠራ ሊረጋገጥ ይችላል። የጥበብ ማረጋገጥ ውድ፣ ዝግ እና በባለሙያ አስተያየት ላይ የተመሰረተ ነው።",
	"bitcoin-vs-fine-art|point_6_summary_1":
		"ቢትኮይን በትክክል ከተደገፈ ከጎርፍ፣ ከእሳት፣ ከመሬት መንቀጥቀጥ እና ከስርቆት ይተርፋል። ጥበብ ለእያንዳንዱ የአካላዊ ጥፋት አይነት ተጋላጭ ነው።",
	"bitcoin-vs-fine-art|point_7_summary_1":
		"የኢንተርኔት ግንኙነት እና ትንሽ ገንዘብ ያለው ማንኛውም ሰው ቢትኮይን መግዛት ይችላል። የጥበብ ኢንቨስትመንት ከገበያ ጋር ግንኙነት ላላቸው ባለ ሃብት ሰባሳቢዎች ብቻ ውጤታማ ነው።",

	// bitcoin-vs-gold (9)
	"bitcoin-vs-gold|point_1_summary_1":
		"ቢትኮይን በኢንተርኔት ላይ በዝቅተኛ ክፍያ ወዲያውኑ መላክ ይቻላል። ወርቅ ባለቤትነት ለማስተላለፍ በአካል መጓጓዝ አለበት።",
	"bitcoin-vs-gold|point_2_summary_1":
		"ቢትኮይን በኢንተርኔት ሊያስተላልፉት የሚችሉት ዲጂታል ተወላጅ ንብረት ነው። አብዛኛው የመስመር ላይ ወርቅ ዲጂታል IOU ነው — ከጠባቂ የሚለመነዳ ቃል ብቻ ነው የሚኖርዎት፣ እራሱ ብረቱ አይደለም።",
	"bitcoin-vs-gold|point_3_summary_1":
		"ቢትኮይን 21 ሚሊዮን BTC ጠንካራ ገደብ አለው። የወርቅ አቅርቦት በየዓመቱ 1.6% ገደማ ያድጋል፣ የእርስዎን ድርሻ ያሳጥራል — ከፊያት ",
	"bitcoin-vs-gold|point_3_summary_2": "ዋጋ ግሽበት",
	"bitcoin-vs-gold|point_3_summary_3": " ያነሰ ነው — ግን ዋጋ ግሽበት ነው።",
	"bitcoin-vs-gold|point_4_summary_1":
		"የወርቅ ዋጋ ሲጨምር፣ ተጨማሪ ወርቅ ይቆፈራል፣ ዋጋውን ወደ ኋላ ይመልሳል። የቢትኮይን አቅርቦት ተለዋዋጭ ያልሆነ ነው — ዋጋው ምን ያህል ከፍተኛ ቢሆን፣ 21 ሚሊዮን ብቻ ይኖራል።",
	"bitcoin-vs-gold|point_5_summary_1":
		"በአስር ሺዎች የሚቆጠሩ ገለልተኛ ኖዶች የቢትኮይን ኔትወርክን ያረጋግጣሉ። አብዛኛው አካላዊ ወርቅ በትንሽ ቁጥር በትልልቅ ጠባቂ ማከማቻዎች ውስጥ ይቀመጣል።",
	"bitcoin-vs-gold|point_6_summary_1":
		"ማንኛውም ሰው ሙሉ ኖድ በመስራት እውነተኛ ቢትኮይን ማረጋገጥ ይችላል — መተግበሪያ ብቻ ነው። አካላዊ ወርቅ ማረጋገጥ መቅለጥን ይጠይቃል፣ ውስጡ tungsten ሊሆን ይችላል።",
	"bitcoin-vs-gold|point_7_summary_1":
		"ቢትኮይን ወደ 100 ሚሊዮን ሳቶሺ ይከፋፈላል፣ ለማንኛውም መጠን ግዢ ፍጹም ያደርገዋል። ወርቅ ለአነስተኛ ግብይቶች በቀላሉ ሊከፈል አይችልም።",

	// bitcoin-vs-real-estate (9)
	"bitcoin-vs-real-estate|point_1_summary_1":
		"ቢትኮይን በዓለም ላይ ወደማንኛውም ቦታ ወዲያውኑ ይንቀሳቀሳል። ሪል ኢስቴት በአንድ ቦታ የተስተካከለ እና ለአካባቢያዊ ኢኮኖሚያዊ፣ ፖለቲካዊ እና ተፈጥሮአዊ አደጋዎች ተጋላጭ ነው።",
	"bitcoin-vs-real-estate|point_2_summary_1":
		"ቢትኮይን ወደ 100 ሚሊዮን ሳቶሺ ይከፋፈላል። ሪል ኢስቴት በከፊል መሸጥ አይቻልም — ወጥ ቤቱን ብቻ ወይም የመኝታ ክፍል ግማሽ መሸጥ አይችሉም።",
	"bitcoin-vs-real-estate|point_3_summary_1":
		"ቢትኮይን በማንኛውም መንግስት ሊቆጣጠር በማይችል የተማከለ ኔትወርክ ላይ ይሰራል። ሪል ኢስቴት በጣም ቁጥጥር ተደርጎበታል — zoning፣ የኪራይ ቁጥጥር፣ eminent domain።",
	"bitcoin-vs-real-estate|point_4_summary_1":
		"ቢትኮይን ምንም ጥገና አይፈልግም። ሪል ኢስቴት ጥገና፣ እድሳት፣ ኢንሹራንስ፣ የንብረት አስተዳደር እና የተከራይ ጉዳዮችን ይፈልጋል።",
	"bitcoin-vs-real-estate|point_5_summary_1":
		"ቢትኮይን ቀጣይ ታክስ የለውም — ሲሸጡ ብቻ ካፒታል ግብን ይከፍላሉ። ሪል ኢስቴት ከገቢ ነፃ ዓመታዊ የንብረት ታክስ ይከፍላል።",
	"bitcoin-vs-real-estate|point_6_summary_1":
		"ቢትኮይን በትክክል ከተደገፈ ከእሳት፣ ከጎርፍ እና ከመሬት መንቀጥቀጥ ይተርፋል። ሪል ኢስቴት ለእያንዳንዱ አደጋ ተጋላጭ ነው፣ ኢንሹራንስ አልፎ አልፎ ይሸፍናል።",
	"bitcoin-vs-real-estate|point_7_summary_1":
		"እያንዳንዱ ቢትኮይን ተመሳሳይ እና ሊለዋወጥ የሚችል ነው። እያንዳንዱ ንብረት ልዩ ነው፣ ዋጋ ማስቀመጥ እና ንፅፅር አስቸጋሪ ያደርገዋል።",
	"bitcoin-vs-real-estate|point_8_summary_1":
		"ቢትኮይን የኢንተርኔት መዳረሻ ያለው ማንኛውም ሰው በዓለም አቀፍ ደረጃ 24/7 ይነግዳል። የሪል ኢስቴት ሽያጭ ለአካባቢያዊ ገዢዎች የተገደበ እና የወራት ወረቀት ስራ ሊወስድ ይችላል።",
	"bitcoin-vs-real-estate|point_9_summary_1":
		"ቢትኮይን ለማንኛውም ሰው ቀጥተኛ የግል ባለቤትነት ያስችላል። ከዋና መኖሪያ ባሻገር ሪል ኢስቴትን እንደ ኢንቨስትመንት መግዛት የቤት ዋጋን ይወጣዋል።",

	// bitcoin-vs-stocks (11)
	"bitcoin-vs-stocks|point_1_summary_1":
		"ቢትኮይን በቀጥታ የሚይዙት ቀጥታ ንብረት ነው። አክሲዮኖች በኩባንያ ውስጥ አክሲዮኖች ናቸው — ዋጋቸው በማኔጅመንት፣ በአፈጻጸም እና በሚቆጣጠሯቸው ውሳኔዎች ላይ ይመሰረታል።",
	"bitcoin-vs-stocks|point_2_summary_1":
		"ቢትኮይን 21 ሚሊዮን BTC ጠንካራ ገደብ አለው። ኩባንያዎች በማንኛውም ጊዜ አዳዲስ አክሲዮኖችን ሊሰጡ ይችላሉ፣ ነባር ባለአክሲዮኖችን ያነስል — ፊያት እንደሚሰራው",
	"bitcoin-vs-stocks|point_2_summary_2": "ዋጋ ግሽበት",
	"bitcoin-vs-stocks|point_2_summary_3": "ባለአክሲዮኖችን ያነስል።",
	"bitcoin-vs-stocks|point_3_summary_1":
		"ቢትኮይን 24/7 ይነግዳል፣ በዓለም ላይ የትም በኢንተርኔት ተደራሽ ነው። የአክሲዮን ገበያዎች የተወሰኑ የንግድ ሰዓታት፣ የቅዳሜና እሁድ መዘጋት እና በዓላት አሏቸው።",
	"bitcoin-vs-stocks|point_4_summary_1":
		"ቢትኮይን በዓለም ዙሪያ በአስር ሺዎች በሚቆጠሩ ኖዶች ላይ ይሰራል፣ ማዕከላዊ ባለስልጣን የለም። አክሲዮኖች ሊሳሳቱ በሚችሉ ኩባንያዎች እና ደንቦች ላይ ይመሰረታሉ።",
	"bitcoin-vs-stocks|point_5_summary_1":
		"ቢትኮይን ቀጥተኛ ባለቤትነት ነው። አክሲዮኖች በደላሎች እና በመድህን ኩባንያዎች በኩል የማይቀር የተቃዋሚ አደጋ ያመጣሉ።",
	"bitcoin-vs-stocks|point_6_summary_1":
		"ቢትኮይን ለማንም በእኩልነት ተደራሽ ነው። አክሲዮኖች በደላላ መለያዎች፣ በሥልጣን ቼኮች እና በመኖሪያ ቦታ የተገደቡ ናቸው።",
	"bitcoin-vs-stocks|point_7_summary_1":
		"ቢትኮይንን በስልክዎ ላይ በዋሌት ውስጥ ማከማቸት ይችላሉ። አክሲዮኖች እርስዎ በማይቆጣጠሩት በደላላ መለያዎች ላይ ይቀመጣሉ።",
	"bitcoin-vs-stocks|point_8_summary_1":
		"ቢትኮይን ከማንኛውም ኩባንያ ነፃ ነው። የአክሲዮን ባለቤቶች በኩባንያው በኪሳራ ጊዜ ወይም በደላላ ውድቀት ሁሉንም ሊያጡ ይችላሉ።",
	"bitcoin-vs-stocks|point_9_summary_1":
		"ቢትኮይን ሊተነበዩ የሚችሉ ደንቦች አሉት። ተቆጣጣሪዎች ደንቦችን በማንኛውም ጊዜ ሊለውጡ ይችላሉ፣ ይህም የአክሲዮን ዋጋ ሊያሳንስ ይችላል።",
	"bitcoin-vs-stocks|point_10_summary_1":
		"ቢትኮይን ክፍፍል ስለሌለ፣ የተመጣጠነ እድገት ያሳያል። የአክሲዮን ክፍፍሎች ተሻጋሪ ሆነው ይታያሉ ነገር ግን ከንግዱ እውነተኛ እድገት አይደሉም።",

	// bitcoin-vs-visa (11)
	"bitcoin-vs-visa|point_1_summary_1":
		"ቢትኮይን ያለ ማንኛውም ፈቃድ ግብይት የሚያደርግ ፈቃድ-አልባ ኔትወርክ ነው። VISA ሁሉንም ግብይት ይፈትሻል እና ሊከለክል ይችላል።",
	"bitcoin-vs-visa|point_2_summary_1":
		"የቢትኮይን ክፍያዎች ወደ ሂሳብ አይመለሱም። VISA ክፍያዎችን ወደኋላ ሊያዞር፣ መለያዎችን ሊከለክል እና ወደ 540 ቀናት የዝውውር ሙከራዎችን ሊፈጥር ይችላል።",
	"bitcoin-vs-visa|point_3_summary_1":
		"ቢትኮይን ለማንኛውም መጠን ዝቅተኛ ክፍያዎች አሉት። VISA ነጋዴዎችን 2-3%፣ አንዳንዴም 5% ገደማ ይሰበስባል።",
	"bitcoin-vs-visa|point_4_summary_1":
		"ቢትኮይን ለግብይት ግላዊ መረጃ አያስፈልገውም። VISA በእያንዳንዱ ክፍያ ከሰፊ የሸማች ፕሮፋይሎች ጋር የተገናኘ ነው።",
	"bitcoin-vs-visa|point_5_summary_1":
		"የቢትኮይን Lightning Network በሰከንዶች ውስጥ ግብይቶችን ያረጋግጣል። VISA በአንዳንድ ነጋዴዎች ከ1-30 ቀናት የመፍታት ጊዜ አለው።",
	"bitcoin-vs-visa|point_6_summary_1":
		"ቢትኮይን በዓለም ዙሪያ 24/7 ይሰራል። VISA በአገር እና ገንዘብ የተገደበ ነው፣ የፖለቲካ ዕግዶች ሊጎዱት ይችላሉ።",
	"bitcoin-vs-visa|point_7_summary_1":
		"ቢትኮይን በአስር ሺዎች በሚቆጠሩ ኖዶች በኔትወርክ የሚሰራ ነው። VISA ማዕከላዊ ነው እና የቴክኒክ ውድቀት አደጋዎች አሉት።",
	"bitcoin-vs-visa|point_8_summary_1":
		"ቢትኮይን በራስ-መጠበቅ ይቻላል። VISA የካርድ ተጠቃሚ መረጃዎችን ይይዛል፣ ይህም ለግዙፍ የመረጃ ስርቆቶች ተጋላጭ ያደርገዋል።",
	"bitcoin-vs-visa|point_9_summary_1":
		"ቢትኮይን 21-ሚሊዮን ጠንካራ ገደብ አለው፣ በዋጋ ግሽበት አይዋጥም። የVISA ምንዛሬዎች በፊያት በኩል በየዓመቱ ይቀንሳሉ።",
	"bitcoin-vs-visa|point_10_summary_1":
		"ቢትኮይን እያንዳንዱን ከተሳተፈ ሰው ጋር በቀጥታ ይሰራል። VISA ለመካከለኛዎች ክፍያ ይከፍላል፣ የተጠቃሚ ፓይ እየቀነሰ ይሄዳል።",
	"bitcoin-vs-visa|point_11_summary_1":
		"ቢትኮይን ግልፅ፣ በሰንሰለት ላይ ያለ ደንብ አለው። VISA ውል እና ፖሊሲዎችን በማንኛውም ጊዜ ሊለውጥ ይችላል።",

	// buy (5)
	"buy|buy_bitcoin_guide": "ቢትኮይን እንዴት መግዛት እንደሚቻል",
	"buy|buy_step_1_header": "አገርዎን ይምረጡ",
	"buy|buy_step_2_header": "የክፍያ ዘዴዎን ይምረጡ",
	"buy|buy_step_3_header": "የግዢ አማራጮችዎ",
	"buy|buy_step_4_header": "ቢትኮይንዎን በደህንነት ያከማቹ",

	// business/accounting (14)
	"business/accounting|accounting_example_gain_example":
		"ምሳሌ፦ 1 BTC በ$10 ገዙ። ዋጋው ወደ $20 ጨመረ።",
	"business/accounting|accounting_example_loss_example":
		"ምሳሌ፦ 1 BTC በ$20 ገዙ። ዋጋው ወደ $10 ወረደ።",
	"business/accounting|accounting_header": "ቢትኮይን ለሂሳብ ባለሙያዎች",
	"business/accounting|accounting_intro_1":
		"ቢትኮይን ላለው ንግድዎ የሂሳብ አስተዳደር ለጀማሪዎች ግልፅ ማብራሪያ ጋር።",
	"business/accounting|accounting_intro_2":
		"ቢትኮይን ቀለል ያለ ነው፣ የሂሳብ አስተዳደሩ ግን አንዳንድ ልዩ ትኩረት ይፈልጋል። እንዲሀ ያስሉታል።",
	"business/accounting|accounting_treatment_1":
		"ቢትኮይን እንደ ማይሟሟ ንብረት ይስተናገዳል (ልክ እንደ ሪል ኢስቴት) — እንደ ገንዘብ አይደለም።",
	"business/accounting|accounting_treatment_2":
		"ቢትኮይንን ሲያገኙ፣ ዋጋው በወቅቱ ይመዘገባል። ቢትኮይንን ሲያወጡ ወይም ሲሸጡ፣ ከተገቢ ዋጋ በላይ ወይም በታች ትርፍ ወይም ኪሳራ ይመዘገባሉ።",
	"business/accounting|accounting_treatment_3":
		"ይህ ንግድዎ በቢትኮይን በክፍያዎች ላይ ካፒታል ትርፍ ታክስ የመክፈል ግዴታ ሊኖረው እንደሚችል ማለት ነው።",
	"business/accounting|accounting_vs_cash_1":
		"በገንዘብ፣ ትኩረት ብቻ ክፍያን በመቀበል ላይ ነው። በቢትኮይን፣ በዚያ ቀን ዋጋ ላይ መሰረት ያደረገ ትርፍ ወይም ኪሳራ መለካት ያስፈልግዎታል።",
	"business/accounting|accounting_vs_cash_2":
		"አብዛኛው የሂሳብ ሶፍትዌር — QuickBooks፣ Xero እና ሌሎችም — ቢትኮይንን እንዴት ማስተዳደር እንዳለባቸው አይረዱም። ስለዚህ ትንሽ ተጨማሪ ሥራ ያስፈልግዎታል።",
	"business/accounting|accounting_vs_cash_3":
		"ስለ ልዩ ዓለም አቀፍ ደንቦች የበለጠ ለመረዳት በዚህ አካባቢ ያለውን የሂሳብ ባለሙያ ያማክሩ።",
	"business/accounting|accounting_whats_next_1":
		"ለክፍያዎች ተቀባይ ይመዝገቡ",
	"business/accounting|accounting_whats_next_2":
		"ሰራተኞቼን በቢትኮይን እንዴት እከፍላለሁ?",
	"business/accounting|accounting_whats_next_3":
		"ሁሉም የንግድ ቢትኮይን መሳሪያዎች",

	// business/sticker-files/english/index (1)
	"business/sticker-files/english/index|sticker_files_english_header":
		"የዚህን የእንግሊዝኛ ስቲከር ፋይሎችን ለንግድ ስራዎ ያትሙ።",

	// business/why (12)
	"business/why|why_accept_accept_pt2":
		"ቢትኮይን ለክፍያዎች ፈጣን፣ በጣም ርካሽ እና ተመዝጋቢ-የለሽ ነው።",
	"business/why|why_accept_accept_pt3":
		"የቢትኮይን ክፍያዎችን መቀበል አዳዲስ ደንበኞችን ይስባል፣ ክፍያዎችን ይቀንሳል እና ንግድዎን ከዓለም አቀፍ ገበያ ጋር ያገናኛል።",
	"business/why|why_business_list_header":
		"እነዚህን ንግዶች ይቀላቀሉ",
	"business/why|why_business_list_pt1":
		"በዓለም ዙሪያ ሺዎች ንግዶች ቢትኮይንን በክፍያ ይቀበላሉ።",
	"business/why|why_business_list_pt2":
		"Gucci፣ McDonald's፣ Microsoft፣ Subway፣ Starbucks እና Twitch ያካትታሉ።",
	"business/why|why_business_list_pt3":
		"ዓለም አቀፍ የቢትኮይን-ተቀባይ ነጋዴዎችን ለማግኘት BTC Map ይጠቀሙ።",
	"business/why|why_customers_customers":
		"የቢትኮይን ደንበኞች ሰፊ እና እያደገ የሚመጣ ተመልካች ናቸው።",
	"business/why|why_customers_customers_pt2":
		"በዓለም አቀፍ ደረጃ ከ100 ሚሊዮን በላይ ሰዎች ቢትኮይን አላቸው፣ የንግድዎ አዳዲስ ደንበኞች ምንጭ ነው።",
	"business/why|why_fees_fees":
		"ዝቅተኛ የግብይት ክፍያዎች።",
	"business/why|why_fees_fees_pt2":
		"የቢትኮይን ክፍያዎች የክሬዲት ካርድ ክፍያዎች ወይም የኤሌክትሮኒክ የባንክ ዝውውር ክፍያዎች አይደሉም፣ ንግድዎን ተጨማሪ ገንዘብ ይቆጥባል።",
	"business/why|why_header":
		"ለምን ንግዴ ቢትኮይንን መቀበል አለበት?",
	"business/why|why_no_chargebacks_chargebacks_pt2":
		"ቢትኮይን እንደ ገንዘብ ነው — አንዴ ከተቀበሉት፣ እንደገና ማመልከት አይችልም። ይህ የንግድ ውድቀቶችን ይቀንሳል።",

	// common (1)
	"common|common_footer_copyright":
		"bitcoin.rocks ለሁሉም ክፍት ፕሮጀክት ነው።",

	// flyers (1)
	"flyers|flyers_header":
		"ሰዎችን ለቢትኮይን ለማሳወቅ እነዚህን ፍላየሮች ያትሙ።",

	// get-involved (4)
	"get-involved|get_involved_header":
		"bitcoin.rocksን እንዴት ማሻሻል ይችላሉ",
	"get-involved|get_involved_hero_intro_1":
		"bitcoin.rocks ለሁሉም ክፍት ነው። ተሳትፎዎ ጥቃቅን ይሁን ትልቅ፣ ቢትኮይንን ለዓለም ተደራሽ ማድረግ ይረዳል።",
	"get-involved|get_involved_share_1":
		"ጥቂት ጓደኞች ስለ bitcoin.rocks እንዲያውቁ ይረዱ። በማህበራዊ ሚዲያ፣ በኢሜል ወይም በፅሁፍ ያጋሩት — ማንም ስለቢትኮይን ማወቅ ስላለበት።",
	"get-involved|get_involved_translate_1":
		"bitcoin.rocks ቀደም ሲል በብዙ ቋንቋዎች ይገኛል ግን ለቋንቋዎ ድጋፍ ከፈለጉ ወይም በተወሰነ ቋንቋ ያሉ ትርጉሞች ላይ ማሻሻል ከፈለጉ፣ ፍላጎትዎን በGitHub ላይ ያስገቡ ወይም በሪፖዚቶሪው ላይ pull request ይክፈቱ።",

	// inflation (5)
	"inflation|inflation_cards_header": "የተከማቸ ዋጋ ግሽበት",
	"inflation|inflation_header": "የእርስዎ ገንዘብ ዋጋ ግሽበት እያጣ ነው።",
	"inflation|inflation_intro_1":
		"ዋጋ ግሽበት ሁላችንም ላይ ጥቃት ያደርጋል፣ ግን ብዙ ጊዜ ባንሰማበት መንገድ።",
	"inflation|inflation_intro_2":
		"ሰዎች 'ዋጋ ግሽበት' ሲሉ ብዙውን ጊዜ የሚያጋግ ዋጋ ማለት ነው፣ የአገልግሎት እና የዕቃዎች። ነገር ግን ይህ የፈጣ ውጤት ነው፦ የገንዘብ አቅርቦት እየጨመረ ባለበት ወቅት፣ እያንዳንዱ ዶላር አነስ እና አነስተኛ ቡና ይገዛል።",
	"inflation|inflation_intro_3":
		"ቢትኮይን ጠንካራ ገንዘብ ነው። 21,000,000 BTC ገደብ አለው። ሁሉም። ምንም ተጨማሪ ቢትኮይኖች አይፈጠሩም።",

	// lightning (1)
	"lightning|lightning_header": "በብርሃን ፍጥነት ቢትኮይንን ይላኩ።",

	// nostr/index (1)
	"nostr/index|nostr_hero_title": "Nostr ምንድነው?",

	// sticker-files/index (1)
	"sticker-files/index|sticker_files_header":
		"በእነዚህ የቢትኮይን ስቲከር ፋይሎች የራስዎን የቢትኮይን ስቲከሮች ያትሙ።",

	// stickers (2)
	"stickers|stickers_header":
		"እነዚህን ነፃ 'ቢትኮይን ተቀባይ' ስቲከሮች ያግኙ።",
	"stickers|stickers_intro_c1":
		"Stickers ከደንበኞች ጋር የ",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let applied = 0;
	let skipped = 0;
	const missing = [];

	for (const entry of report.entries) {
		if (entry.reason !== "manifest-changed") continue;
		if (typeof entry.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${entry.namespace}|${entry.key}`;
		if (!(lookupKey in T)) {
			missing.push(lookupKey);
			continue;
		}
		entry.targetTranslation = T[lookupKey];
		applied++;
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log(
		`translate-manifest-changed (am): applied ${applied}, skipped ${skipped} already-resolved.`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing) console.log(`  - ${k}`);
		process.exitCode = 1;
	}
}

main();
