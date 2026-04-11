/**
 * Creates Persian (fa) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fa';
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

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646: \u0647\u0645\u0647 \u0632\u0628\u0627\u0646\u200C\u0647\u0627",
	"sticker_files_description": "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u0622\u0633\u0627\u0646 \u0631\u0627 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u0631\u0686\u0633\u0628\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0686\u0627\u067E \u06A9\u0646\u06CC\u062F.",
	"sticker_files_header": "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: '\u0622\u0641\u0631\u06CC\u06A9\u0627\u0646\u0633' },
	{ dir: 'arabic', name: '\u0639\u0631\u0628\u06CC' },
	{ dir: 'basque', name: '\u0628\u0627\u0633\u06A9\u06CC' },
	{ dir: 'bulgarian', name: '\u0628\u0644\u063A\u0627\u0631\u06CC' },
	{ dir: 'catalan', name: '\u06A9\u0627\u062A\u0627\u0644\u0627\u0646' },
	{ dir: 'chinese', name: '\u0686\u06CC\u0646\u06CC' },
	{ dir: 'croatian', name: '\u06A9\u0631\u0648\u0627\u062A\u06CC' },
	{ dir: 'czech', name: '\u0686\u06A9\u06CC' },
	{ dir: 'danish', name: '\u062F\u0627\u0646\u0645\u0627\u0631\u06A9\u06CC' },
	{ dir: 'dutch', name: '\u0647\u0644\u0646\u062F\u06CC' },
	{ dir: 'english', name: '\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC' },
	{ dir: 'estonian', name: '\u0627\u0633\u062A\u0648\u0646\u06CC\u0627\u06CC\u06CC' },
	{ dir: 'filipino', name: '\u0641\u06CC\u0644\u06CC\u067E\u06CC\u0646\u06CC' },
	{ dir: 'finnish', name: '\u0641\u0646\u0644\u0627\u0646\u062F\u06CC' },
	{ dir: 'french', name: '\u0641\u0631\u0627\u0646\u0633\u0648\u06CC' },
	{ dir: 'german', name: '\u0622\u0644\u0645\u0627\u0646\u06CC' },
	{ dir: 'greek', name: '\u06CC\u0648\u0646\u0627\u0646\u06CC' },
	{ dir: 'hausa', name: '\u0647\u0648\u0633\u0627' },
	{ dir: 'hebrew', name: '\u0639\u0628\u0631\u06CC' },
	{ dir: 'hindi', name: '\u0647\u0646\u062F\u06CC' },
	{ dir: 'hungarian', name: '\u0645\u062C\u0627\u0631\u06CC' },
	{ dir: 'indonesian', name: '\u0627\u0646\u062F\u0648\u0646\u0632\u06CC\u0627\u06CC\u06CC' },
	{ dir: 'irish', name: '\u0627\u06CC\u0631\u0644\u0646\u062F\u06CC' },
	{ dir: 'italian', name: '\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627\u06CC\u06CC' },
	{ dir: 'japanese', name: '\u0698\u0627\u067E\u0646\u06CC' },
	{ dir: 'korean', name: '\u06A9\u0631\u0647\u200C\u0627\u06CC' },
	{ dir: 'malay', name: '\u0645\u0627\u0644\u0627\u06CC\u06CC' },
	{ dir: 'norwegian', name: '\u0646\u0631\u0648\u0698\u06CC' },
	{ dir: 'persian', name: '\u0641\u0627\u0631\u0633\u06CC' },
	{ dir: 'polish', name: '\u0644\u0647\u0633\u062A\u0627\u0646\u06CC' },
	{ dir: 'portuguese', name: '\u067E\u0631\u062A\u063A\u0627\u0644\u06CC' },
	{ dir: 'russian', name: '\u0631\u0648\u0633\u06CC' },
	{ dir: 'sinhala', name: '\u0633\u06CC\u0646\u0647\u0627\u0644\u06CC' },
	{ dir: 'slovak', name: '\u0627\u0633\u0644\u0648\u0627\u06A9\u06CC' },
	{ dir: 'slovenian', name: '\u0627\u0633\u0644\u0648\u0648\u0646\u06CC\u0627\u06CC\u06CC' },
	{ dir: 'spanish', name: '\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u06CC\u06CC' },
	{ dir: 'swahili', name: '\u0633\u0648\u0627\u062D\u06CC\u0644\u06CC' },
	{ dir: 'swedish', name: '\u0633\u0648\u0626\u062F\u06CC' },
	{ dir: 'thai', name: '\u062A\u0627\u06CC\u0644\u0646\u062F\u06CC' },
	{ dir: 'turkish', name: '\u062A\u0631\u06A9\u06CC' },
	{ dir: 'urdu', name: '\u0627\u0631\u062F\u0648' },
	{ dir: 'vietnamese', name: '\u0648\u06CC\u062A\u0646\u0627\u0645\u06CC' },
	{ dir: 'yoruba', name: '\u06CC\u0648\u0631\u0648\u0628\u0627' }
];

stickerLanguages.forEach(function(stickerLang) {
	const keyPrefix = stickerLang.dir;
	const data = {};
	data[keyPrefix + '_bitcoin_sticker_files'] = "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 " + stickerLang.name;
	data[keyPrefix + '_description'] = "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 " + stickerLang.name + " \u0631\u0627 \u0627\u0632 \u0627\u06CC\u0646\u062C\u0627 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F.";
	data[keyPrefix + '_header'] = "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u0631\u0686\u0633\u0628 \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 " + stickerLang.name;
	writeFile(`sticker-files/${stickerLang.dir}/index_${lang}.json`, data);
});

console.log('\nDone! All sticker files created for Persian (fa).');
