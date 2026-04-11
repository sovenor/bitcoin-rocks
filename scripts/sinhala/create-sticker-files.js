/**
 * Creates Sinhala (si) translation files for all sticker-files/ subdirectory pages
 * Plus the main sticker-files index and business sticker-files
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'si';
const today = '2026-04-11';

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

// Main sticker-files index
writeFile(`sticker-files/index_${lang}.json`, {
	"sticker_files_header": "BITCOIN ස්ටිකර් ගොනු",
	"sticker_files_description": "ඔබේ භාෂාවෙන් Bitcoin ස්ටිකර් ගොනු බාගත කරන්න.",
	"sticker_files_choose": "ඔබේ භාෂාව තෝරන්න"
});

// Business sticker-files
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"business_sticker_files_title": "\"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර් ගොනු",
	"business_sticker_files_description": "\"Bitcoin මෙහි පිළිගනු ලැබේ\" ස්ටිකර් ගොනු මෙතනින් බාගන්න.",
	"business_sticker_files_header": "\"BITCOIN මෙහි පිළිගනු ලැබේ\" ස්ටිකර් ගොනු බාගන්න"
});

// All sticker-files language subdirectories
const stickerLangs = [
	{ dir: 'afrikaans', si: 'අප්\u200Dරිකානු' },
	{ dir: 'arabic', si: 'අරාබි' },
	{ dir: 'basque', si: 'බාස්ක්' },
	{ dir: 'bulgarian', si: 'බල්ගේරියානු' },
	{ dir: 'catalan', si: 'කැටලන්' },
	{ dir: 'chinese', si: 'චීන' },
	{ dir: 'croatian', si: 'ක්\u200Dරොඒෂියානු' },
	{ dir: 'czech', si: 'චෙක්' },
	{ dir: 'danish', si: 'ඩැනිෂ්' },
	{ dir: 'dutch', si: 'ලන්දේසි' },
	{ dir: 'english', si: 'ඉංග්\u200Dරීසි' },
	{ dir: 'estonian', si: 'එස්තෝනියානු' },
	{ dir: 'filipino', si: 'පිලිපීන' },
	{ dir: 'finnish', si: 'ෆින්ලන්ත' },
	{ dir: 'french', si: 'ප්\u200Dරංශ' },
	{ dir: 'german', si: 'ජර්මන්' },
	{ dir: 'greek', si: 'ග්\u200Dරීක' },
	{ dir: 'hausa', si: 'හවුසා' },
	{ dir: 'hebrew', si: 'හීබ්\u200Dරූ' },
	{ dir: 'hindi', si: 'හින්දි' },
	{ dir: 'hungarian', si: 'හංගේරියානු' },
	{ dir: 'indonesian', si: 'ඉන්දුනීසියානු' },
	{ dir: 'irish', si: 'අයර්ලන්ත' },
	{ dir: 'italian', si: 'ඉතාලි' },
	{ dir: 'japanese', si: 'ජපන්' },
	{ dir: 'korean', si: 'කොරියානු' },
	{ dir: 'malay', si: 'මැලේ' },
	{ dir: 'norwegian', si: 'නෝර්වීජියානු' },
	{ dir: 'persian', si: 'පර්සියානු' },
	{ dir: 'polish', si: 'පෝලන්ත' },
	{ dir: 'portuguese', si: 'පෘතුගීසි' },
	{ dir: 'russian', si: 'රුසියානු' },
	{ dir: 'sinhala', si: 'සිංහල' },
	{ dir: 'slovak', si: 'ස්ලෝවැක්' },
	{ dir: 'slovenian', si: 'ස්ලෝවේනියානු' },
	{ dir: 'spanish', si: 'ස්පාඤ්ඤ' },
	{ dir: 'swahili', si: 'ස්වාහිලි' },
	{ dir: 'swedish', si: 'ස්වීඩන්' },
	{ dir: 'thai', si: 'තායි' },
	{ dir: 'turkish', si: 'තුර්කි' },
	{ dir: 'urdu', si: 'උර්දු' },
	{ dir: 'vietnamese', si: 'වියට්නාම්' },
	{ dir: 'yoruba', si: 'යොරූබා' }
];

for (const sl of stickerLangs) {
	const prefix = sl.dir;
	writeFile(`sticker-files/${prefix}/index_${lang}.json`, {
		[`${prefix}_bitcoin_sticker_files`]: `${sl.si} Bitcoin ස්ටිකර් ගොනු`,
		[`${prefix}_description`]: `${sl.si} Bitcoin ස්ටිකර් ගොනු මෙතනින් බාගන්න.`,
		[`${prefix}_header`]: `${sl.si.toUpperCase()} BITCOIN ස්ටිකර් ගොනු බාගන්න`
	});
}

console.log('\nDone! Sticker files created for Sinhala (si).');
