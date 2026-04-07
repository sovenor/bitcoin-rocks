/**
 * Creates Amharic (am) translation files for all sticker-files/ subdirectories.
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

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "የቢትኮይን ስቲከር ፋይሎች፡ ሁሉም ቋንቋዎች",
	"sticker_files_description": "ቀላል-ለመጠቀም የቢትኮይን ስቲከር ፋይሎቻችንን አውርደው የራስዎን ስቲከሮች ያትሙ።",
	"sticker_files_header": "የቢትኮይን ስቲከር ፋይሎች"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'አፍሪካንስ' },
	{ dir: 'arabic', name: 'ዐረብኛ' },
	{ dir: 'basque', name: 'ባስክ' },
	{ dir: 'bulgarian', name: 'ቡልጋሪኛ' },
	{ dir: 'catalan', name: 'ካታላን' },
	{ dir: 'chinese', name: 'ቻይንኛ' },
	{ dir: 'croatian', name: 'ክሮኤሽያኛ' },
	{ dir: 'czech', name: 'ቼክ' },
	{ dir: 'danish', name: 'ዴንማርክኛ' },
	{ dir: 'dutch', name: 'ደች' },
	{ dir: 'english', name: 'እንግሊዝኛ' },
	{ dir: 'estonian', name: 'ኢስቶኒኛ' },
	{ dir: 'filipino', name: 'ፊሊፒንኛ' },
	{ dir: 'finnish', name: 'ፊንላንድኛ' },
	{ dir: 'french', name: 'ፈረንሳይኛ' },
	{ dir: 'german', name: 'ጀርመንኛ' },
	{ dir: 'greek', name: 'ግሪክኛ' },
	{ dir: 'hausa', name: 'ሃውሳ' },
	{ dir: 'hebrew', name: 'ዕብራይስጥ' },
	{ dir: 'hindi', name: 'ሂንዲ' },
	{ dir: 'hungarian', name: 'ሃንጋሪኛ' },
	{ dir: 'indonesian', name: 'ኢንዶኔዢያኛ' },
	{ dir: 'irish', name: 'አይሪሽ' },
	{ dir: 'italian', name: 'ጣልያንኛ' },
	{ dir: 'japanese', name: 'ጃፓንኛ' },
	{ dir: 'korean', name: 'ኮሪያኛ' },
	{ dir: 'malay', name: 'ማሌይ' },
	{ dir: 'norwegian', name: 'ኖርዌጂያን' },
	{ dir: 'persian', name: 'ፋርሲ' },
	{ dir: 'polish', name: 'ፖላንድኛ' },
	{ dir: 'portuguese', name: 'ፖርቱጋልኛ' },
	{ dir: 'russian', name: 'ሩሲያኛ' },
	{ dir: 'sinhala', name: 'ሲንሃላ' },
	{ dir: 'slovak', name: 'ስሎቫክኛ' },
	{ dir: 'slovenian', name: 'ስሎቬንኛ' },
	{ dir: 'spanish', name: 'ስፓኒሽ' },
	{ dir: 'swahili', name: 'ስዋሂሊ' },
	{ dir: 'swedish', name: 'ስዊድንኛ' },
	{ dir: 'thai', name: 'ታይኛ' },
	{ dir: 'turkish', name: 'ቱርክኛ' },
	{ dir: 'urdu', name: 'ኡርዱ' },
	{ dir: 'vietnamese', name: 'ቬትናምኛ' },
	{ dir: 'yoruba', name: 'ዮሩባ' }
];

for (const sl of stickerLanguages) {
	const keyPrefix = sl.dir;
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${keyPrefix}_bitcoin_sticker_files`]: `${sl.name} የቢትኮይን ስቲከር ፋይሎች`,
		[`${keyPrefix}_description`]: `${sl.name} የቢትኮይን ስቲከር ፋይሎችን እዚህ ያውርዱ።`,
		[`${keyPrefix}_header`]: `${sl.name} የቢትኮይን ስቲከር ፋይሎችን ያውርዱ`
	});
}

console.log('\nDone! Sticker files created for Amharic (am).');
