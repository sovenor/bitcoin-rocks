/**
 * Creates Arabic (ar) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ar';
const today = '2026-04-04';

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
	"404_title": "خطأ 404 | الصفحة غير موجودة",
	"404_message": "هذه الصفحة المعطلة ليست رائعة أبداً",
	"404_home": "العودة إلى الصفحة الرئيسية"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "حول bitcoin.rocks — تعليم البيتكوين منذ 2022",
	"about_description": "bitcoin.rocks هو موقع تعليمي مجاني ومفتوح المصدر عن البيتكوين تأسس عام 2022. مهمتنا هي تسريع تبني البيتكوين من خلال التعليم.",
	"about_header": "حول",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "مهمتنا",
	"about_mission_1": "تأسس موقع bitcoin.rocks عام 2022 بمهمة بسيطة: تسريع تبني البيتكوين من خلال التعليم.",
	"about_mission_2": "نحن موجودون لنكون الرابط الأول الذي تشاركه مع شخص فضولي بشأن البيتكوين. نقطة انطلاق ودية وسهلة تشرح كيف يبني البيتكوين عالماً أفضل.",
	"about_mission_3": "كثير من الناس يسيئون فهم البيتكوين أو لم يتم تعريفهم به بشكل صحيح. نريد تغيير ذلك من خلال توفير محتوى تعليمي مجاني وعالي الجودة يمكن لأي شخص فهمه.",
	"about_what_we_do_header": "ماذا نفعل",
	"about_what_we_do_1": "نصنع محتوى تعليمياً مجانياً للمبتدئين في البيتكوين. يغطي موقعنا مواضيع مثل التضخم، والحفظ الذاتي، والمحافظ، وشبكة Lightning، وكيف يقارن البيتكوين بالأصول وأنظمة الدفع الأخرى.",
	"about_what_we_do_2a": "نرسل ",
	"about_what_we_do_2b": "ملصقات بيتكوين مجانية",
	"about_what_we_do_2c": " إلى باب منزلك حتى تتمكن من نشر الوعي بالبيتكوين في مجتمعك. يقوم مئات الأشخاص بمسح رموز QR على هذه الملصقات كل شهر للتعلم عن البيتكوين.",
	"about_what_we_do_3a": "نوفر أيضاً ",
	"about_what_we_do_3b": "منشورات قابلة للطباعة",
	"about_what_we_do_3c": " و",
	"about_what_we_do_3d": "حزم الأعمال",
	"about_what_we_do_3e": " لأي شخص يريد مساعدة الأعمال المحلية على قبول مدفوعات البيتكوين.",
	"about_what_we_do_4": "كل محتوانا يفترض عدم وجود معرفة مسبقة بالبيتكوين. سواء كنت جديداً تماماً على البيتكوين أو بيتكوينر متمرس يبحث عن موارد للمشاركة، bitcoin.rocks هو لك.",
	"about_editorial_header": "نهجنا التحريري",
	"about_editorial_1": "كل محتوى على bitcoin.rocks منسق ومتحقق من صحته. عندما نستشهد ببيانات أو إحصائيات، نذكر مصادرنا حتى تتمكن من التحقق من المعلومات بنفسك.",
	"about_editorial_2": "نربط بمصادر موثوقة مثل مجلة TIME وForbes وMIT Technology Review وLyn Alden وغيرها الكثير. نؤمن أن البيتكوين يتحدث عن نفسه عندما تُعرض الحقائق بوضوح.",
	"about_editorial_3": "يتم مراجعة محتوانا وتحديثه بانتظام لضمان الدقة والحداثة. كل المحتوى يركز حصرياً على تعليم البيتكوين.",
	"about_open_source_header": "مفتوح المصدر",
	"about_open_source_1a": "bitcoin.rocks هو مشروع مجاني ومفتوح المصدر مرخص بموجب رخصة MIT. قاعدة الكود الكاملة متاحة للعموم ",
	"about_open_source_1b": "على GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "يمكن لأي شخص المساهمة في bitcoin.rocks. نرحب بشكل خاص بالمترجمين الذين يساعدون في جعل محتوانا متاحاً للناس حول العالم.",
	"about_open_source_3": "بفضل مجتمع المترجمين المتطوعين لدينا، bitcoin.rocks متاح حالياً بـ 31 لغة ويستمر في النمو.",
	"about_open_source_contribute": "تعرف على كيفية المساهمة.",
	"about_contact_header": "تواصل معنا",
	"about_contact_1": "يسعدنا أن نسمع منك. سواء كان لديك سؤال أو اقتراح أو تريد فقط أن تقول مرحباً، تواصل معنا في أي وقت.",
	"about_contact_email": "البريد الإلكتروني:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "ستتلقى ملصقاتك خلال 2 إلى 4 أسابيع. أثناء الانتظار، حاول التفكير في مكان جيد لوضع ملصقاتك!",
	"sticker_success_2": "أماكن جيدة للملصقات:",
	"sticker_success_list_1": "في الأماكن العامة حيث يراها الناس",
	"sticker_success_list_2": "في أماكن يصعب إزالتها بسرعة (الملصقات لا تسبب أي ضرر دائم)",
	"sticker_success_list_3": "على أسطح تلتصق بها بسهولة (معدن، بلاستيك، زجاج)",
	"sticker_success_list_4": "ليس على الممتلكات الخاصة أو فوق اللافتات أو أجهزة الصراف الآلي أو مضخات الوقود",
	"sticker_success_3": "هل تريد أن ترى أين يضع الآخرون ملصقاتهم؟",
	"sticker_success_flyers_bar_new": "جديد!",
	"sticker_success_flyers_bar_cta": "اطبع وعلّق منشورات البيتكوين ←"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "لقد تلقينا طلبك بنجاح.",
	"sticker_language_success_2": "ننشر الملفات الجديدة على دفعات، لذا قد يستغرق الأمر عدة أسابيع حتى تصبح هذه الملفات متاحة للتنزيل. تحقق مرة أخرى قريباً!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "ستتلقى بطاقاتك البريدية خلال أسبوع إلى أسبوعين.",
	"postcard_success_2": "شكراً لمساعدتك في تسريع تبني البيتكوين عن طريق إرسال هذه البطاقات البريدية لشخص تعرفه!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "ستتلقى لافتاتك خلال أسبوع إلى أسبوعين. أثناء الانتظار، حاول التفكير في أماكن جيدة لوضع لافتاتك!",
	"sign_success_3": "هل تريد أن ترى أين يضع الآخرون لافتاتهم؟",
	"signs_share_header": "شارك أماكن لافتاتك",
	"signs_share_c1": "شارك صورة لمكان لافتتك معنا على Nostr وسنرسل لك ساتوشيات! الساتوشيات هي أجزاء صغيرة من البيتكوين.",
	"signs_btn_share_on_nostr": "شارك على NOSTR",
	"signs_btn_what_is_nostr": "ما هو NOSTR؟"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "حاسبة التضخم المركب",
	"cic_description": "استخدم حاسبة التضخم المركب هذه لمعرفة مقدار الزيادة التي يحتاجها راتبك لمواكبة التضخم.",
	"what_can_i_do_about": "ماذا يمكنني أن أفعل",
	"what_can_i_do_about_2": "بشأن التضخم؟",
	"cic_inflation_cta": "تخلص من التضخم مع البيتكوين"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "اهرب من الماتريكس مع Nostr",
	"nostr_header": "اهرب من الماتريكس مع NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "ما هو Nostr؟",
	"what_is_nostr_header": "ما هو NOSTR؟"
});

console.log('\nDone! Simple files created for Arabic (ar).');
