/**
 * Creates Arabic (ar) translation files for all sticker-files/ subdirectories.
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

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "ملفات ملصقات البيتكوين: جميع اللغات",
	"sticker_files_description": "قم بتنزيل ملفات ملصقات البيتكوين سهلة الاستخدام لطباعة ملصقاتك الخاصة.",
	"sticker_files_header": "ملفات ملصقات البيتكوين"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'الأفريكانية' },
	{ dir: 'arabic', name: 'العربية' },
	{ dir: 'basque', name: 'الباسكية' },
	{ dir: 'bulgarian', name: 'البلغارية' },
	{ dir: 'catalan', name: 'الكتالونية' },
	{ dir: 'chinese', name: 'الصينية' },
	{ dir: 'croatian', name: 'الكرواتية' },
	{ dir: 'czech', name: 'التشيكية' },
	{ dir: 'danish', name: 'الدنماركية' },
	{ dir: 'dutch', name: 'الهولندية' },
	{ dir: 'english', name: 'الإنجليزية' },
	{ dir: 'estonian', name: 'الإستونية' },
	{ dir: 'filipino', name: 'الفلبينية' },
	{ dir: 'finnish', name: 'الفنلندية' },
	{ dir: 'french', name: 'الفرنسية' },
	{ dir: 'german', name: 'الألمانية' },
	{ dir: 'greek', name: 'اليونانية' },
	{ dir: 'hausa', name: 'الهوسا' },
	{ dir: 'hebrew', name: 'العبرية' },
	{ dir: 'hindi', name: 'الهندية' },
	{ dir: 'hungarian', name: 'المجرية' },
	{ dir: 'indonesian', name: 'الإندونيسية' },
	{ dir: 'irish', name: 'الأيرلندية' },
	{ dir: 'italian', name: 'الإيطالية' },
	{ dir: 'japanese', name: 'اليابانية' },
	{ dir: 'korean', name: 'الكورية' },
	{ dir: 'malay', name: 'الماليزية' },
	{ dir: 'norwegian', name: 'النرويجية' },
	{ dir: 'persian', name: 'الفارسية' },
	{ dir: 'polish', name: 'البولندية' },
	{ dir: 'portuguese', name: 'البرتغالية' },
	{ dir: 'russian', name: 'الروسية' },
	{ dir: 'sinhala', name: 'السنهالية' },
	{ dir: 'slovak', name: 'السلوفاكية' },
	{ dir: 'slovenian', name: 'السلوفينية' },
	{ dir: 'spanish', name: 'الإسبانية' },
	{ dir: 'swahili', name: 'السواحلية' },
	{ dir: 'swedish', name: 'السويدية' },
	{ dir: 'thai', name: 'التايلاندية' },
	{ dir: 'turkish', name: 'التركية' },
	{ dir: 'urdu', name: 'الأوردية' },
	{ dir: 'vietnamese', name: 'الفيتنامية' },
	{ dir: 'yoruba', name: 'اليوروبا' }
];

for (const sl of stickerLanguages) {
	const keyPrefix = sl.dir;
	const hasExtraPrintKey = sl.dir === 'english';
	const data = {
		[`${keyPrefix}_bitcoin_sticker_files`]: `ملفات ملصقات البيتكوين ${sl.name}`,
		[`${keyPrefix}_description`]: `قم بتنزيل ملفات ملصقات البيتكوين ${sl.name} من هنا.`,
		[`${keyPrefix}_header`]: `تنزيل ملفات ملصقات البيتكوين ${sl.name}`
	};
	if (hasExtraPrintKey) {
		data["print_these"] = "اطبع هذه بنقرة واحدة";
	}
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, data);
}

console.log('\nDone! Sticker files created for Arabic (ar).');
