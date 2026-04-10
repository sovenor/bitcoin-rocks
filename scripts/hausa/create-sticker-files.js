/**
 * Creates Hausa (ha) translation files for all sticker-files/ subdirectory pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ha';
const today = '2026-04-10';

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
	"sticker_files_page_title": "Fayilolin Sticker na Bitcoin",
	"sticker_files_description": "Zazzage fayilolin sticker na Bitcoin a nan.",
	"sticker_files_header": "ZAZZAGE FAYILOLIN STICKER NA BITCOIN"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: "afrikaans", name: "Afrikaans" },
	{ dir: "arabic", name: "Larabci" },
	{ dir: "basque", name: "Basque" },
	{ dir: "bulgarian", name: "Bulgarian" },
	{ dir: "catalan", name: "Catalan" },
	{ dir: "chinese", name: "Sinanci" },
	{ dir: "croatian", name: "Croatian" },
	{ dir: "czech", name: "Czech" },
	{ dir: "danish", name: "Danish" },
	{ dir: "dutch", name: "Dutch" },
	{ dir: "english", name: "Turanci" },
	{ dir: "estonian", name: "Estonian" },
	{ dir: "filipino", name: "Filipino" },
	{ dir: "finnish", name: "Finnish" },
	{ dir: "french", name: "Faransanci" },
	{ dir: "german", name: "Jamusanci" },
	{ dir: "greek", name: "Greek" },
	{ dir: "hausa", name: "Hausa" },
	{ dir: "hebrew", name: "Ibrananci" },
	{ dir: "hindi", name: "Hindi" },
	{ dir: "hungarian", name: "Hungarian" },
	{ dir: "indonesian", name: "Indonesian" },
	{ dir: "irish", name: "Irish" },
	{ dir: "italian", name: "Italiyanci" },
	{ dir: "japanese", name: "Japananci" },
	{ dir: "korean", name: "Korean" },
	{ dir: "malay", name: "Malay" },
	{ dir: "norwegian", name: "Norwegian" },
	{ dir: "persian", name: "Farsi" },
	{ dir: "polish", name: "Polish" },
	{ dir: "portuguese", name: "Harshen Fotigal" },
	{ dir: "russian", name: "Rashanci" },
	{ dir: "sinhala", name: "Sinhala" },
	{ dir: "slovak", name: "Slovak" },
	{ dir: "slovenian", name: "Slovenian" },
	{ dir: "spanish", name: "Sifaniyanci" },
	{ dir: "swahili", name: "Swahili" },
	{ dir: "swedish", name: "Swedish" },
	{ dir: "thai", name: "Thai" },
	{ dir: "turkish", name: "Turkanci" },
	{ dir: "urdu", name: "Urdu" },
	{ dir: "vietnamese", name: "Vietnamese" },
	{ dir: "yoruba", name: "Yarbanci" }
];

stickerLanguages.forEach(function(sl) {
	const capDir = sl.dir.charAt(0).toUpperCase() + sl.dir.slice(1);
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${sl.dir}_bitcoin_sticker_files`]: `Fayilolin Sticker na Bitcoin na ${sl.name}`,
		[`${sl.dir}_description`]: `Zazzage Fayilolin Sticker na Bitcoin na ${sl.name} a nan.`,
		[`${sl.dir}_header`]: `ZAZZAGE FAYILOLIN STICKER NA BITCOIN NA ${sl.name.toUpperCase()}`
	});
});

// business/sticker-files/english
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"bitcoin_accepted_here_sticker_files": "Fayilolin Sticker na 'Ana Karɓar Bitcoin a Nan'",
	"english_biz_sticker_description": "Zazzage fayilolin sticker na 'Ana Karɓar Bitcoin a Nan' a nan.",
	"english_biz_sticker_header": "ZAZZAGE FAYILOLIN STICKER NA 'ANA KARƁAR BITCOIN A NAN' NA TURANCI"
});

console.log(`\nDone! Created ${stickerLanguages.length + 2} sticker files.`);
