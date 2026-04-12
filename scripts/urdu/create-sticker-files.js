/**
 * Creates Urdu (ur) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ur';
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
	"bitcoin_sticker_files_all_languages": "Bitcoin \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA: \u062A\u0645\u0627\u0645 \u0632\u0628\u0627\u0646\u06CC\u06BA",
	"sticker_files_description": "\u0627\u067E\u0646\u06D2 \u062E\u0648\u062F \u06A9\u06D2 \u0633\u0679\u06A9\u0631\u0632 \u067E\u0631\u0646\u0679 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u06C1\u0645\u0627\u0631\u06CC \u0622\u0633\u0627\u0646 Bitcoin \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06A9\u0631\u06CC\u06BA\u06D4",
	"sticker_files_header": "BITCOIN \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: '\u0627\u0641\u0631\u06CC\u0642\u06CC' },
	{ dir: 'arabic', name: '\u0639\u0631\u0628\u06CC' },
	{ dir: 'basque', name: '\u0628\u0627\u0633\u06A9' },
	{ dir: 'bulgarian', name: '\u0628\u0644\u063A\u0627\u0631\u06CC' },
	{ dir: 'catalan', name: '\u06A9\u06CC\u0679\u0627\u0644\u0627\u0646' },
	{ dir: 'chinese', name: '\u0686\u06CC\u0646\u06CC' },
	{ dir: 'croatian', name: '\u06A9\u0631\u0648\u06CC\u0634\u06CC\u0646' },
	{ dir: 'czech', name: '\u0686\u06CC\u06A9' },
	{ dir: 'danish', name: '\u0688\u06CC\u0646\u0634' },
	{ dir: 'dutch', name: '\u0688\u0686' },
	{ dir: 'english', name: '\u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC' },
	{ dir: 'estonian', name: '\u0627\u0633\u0679\u0648\u0646\u06CC\u0646' },
	{ dir: 'filipino', name: '\u0641\u0644\u067E\u06CC\u0646\u0648' },
	{ dir: 'finnish', name: '\u0641\u0646\u0634' },
	{ dir: 'french', name: '\u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC' },
	{ dir: 'german', name: '\u062C\u0631\u0645\u0646' },
	{ dir: 'greek', name: '\u06CC\u0648\u0646\u0627\u0646\u06CC' },
	{ dir: 'hausa', name: '\u06C1\u0627\u0624\u0633\u0627' },
	{ dir: 'hebrew', name: '\u0639\u0628\u0631\u0627\u0646\u06CC' },
	{ dir: 'hindi', name: '\u06C1\u0646\u062F\u06CC' },
	{ dir: 'hungarian', name: '\u06C1\u0646\u06AF\u0631\u06CC' },
	{ dir: 'indonesian', name: '\u0627\u0646\u0688\u0648\u0646\u06CC\u0634\u06CC' },
	{ dir: 'irish', name: '\u0622\u0626\u0631\u0634' },
	{ dir: 'italian', name: '\u0627\u0637\u0627\u0644\u0648\u06CC' },
	{ dir: 'japanese', name: '\u062C\u0627\u067E\u0627\u0646\u06CC' },
	{ dir: 'korean', name: '\u06A9\u0648\u0631\u06CC\u0646' },
	{ dir: 'malay', name: '\u0645\u0644\u06CC' },
	{ dir: 'norwegian', name: '\u0646\u0627\u0631\u0648\u06CC\u062C\u06CC\u0646' },
	{ dir: 'persian', name: '\u0641\u0627\u0631\u0633\u06CC' },
	{ dir: 'polish', name: '\u067E\u0648\u0644\u0634' },
	{ dir: 'portuguese', name: '\u067E\u0631\u062A\u06AF\u0627\u0644\u06CC' },
	{ dir: 'russian', name: '\u0631\u0648\u0633\u06CC' },
	{ dir: 'sinhala', name: '\u0633\u0646\u06C1\u0627\u0644\u0627' },
	{ dir: 'slovak', name: '\u0633\u0644\u0648\u0627\u06A9' },
	{ dir: 'slovenian', name: '\u0633\u0644\u0648\u0648\u06CC\u0646\u06CC\u0646' },
	{ dir: 'spanish', name: '\u06C1\u0633\u067E\u0627\u0646\u0648\u06CC' },
	{ dir: 'swahili', name: '\u0633\u0648\u0627\u062D\u0644\u06CC' },
	{ dir: 'swedish', name: '\u0633\u0648\u06CC\u0688\u0634' },
	{ dir: 'thai', name: '\u062A\u06BE\u0627\u0626\u06CC' },
	{ dir: 'turkish', name: '\u062A\u0631\u06A9\u06CC' },
	{ dir: 'urdu', name: '\u0627\u0631\u062F\u0648' },
	{ dir: 'vietnamese', name: '\u0648\u06CC\u062A\u0646\u0627\u0645\u06CC' },
	{ dir: 'yoruba', name: '\u06CC\u0648\u0631\u0648\u0628\u0627' }
];

stickerLanguages.forEach(({ dir, name }) => {
	const prefix = dir.replace(/-/g, '_');
	writeFile(`sticker-files/${dir}/index_${lang}.json`, {
		[`${prefix}_bitcoin_sticker_files`]: `${name} Bitcoin \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA`,
		[`${prefix}_description`]: `${name} Bitcoin \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA \u06CC\u06C1\u0627\u06BA \u0633\u06D2 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06A9\u0631\u06CC\u06BA\u06D4`,
		[`${prefix}_header`]: `${name.toUpperCase()} BITCOIN \u0633\u0679\u06A9\u0631 \u0641\u0627\u0626\u0644\u06CC\u06BA \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06A9\u0631\u06CC\u06BA`
	});
});

console.log('\nDone! Sticker files created for Urdu (ur).');
