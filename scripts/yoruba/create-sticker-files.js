/**
 * Creates Yoruba (yo) translation files for all sticker-files/ subdirectory pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'yo';
const today = '2026-04-12';

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
	"bitcoin_sticker_files_all_languages": "Aw\u1ecdn Faili Am\u00ec Al\u00e8m\u00f3 Bitcoin: Gbogbo \u00c8d\u00e8",
	"sticker_files_description": "Gba aw\u1ecdn faili am\u00ec al\u00e8m\u00f3 Bitcoin wa t\u00ed \u00f3 r\u1ecd\u0300r\u00f9n l\u00e1ti lo l\u00e1ti t\u1eb9\u0300 aw\u1ecdn am\u00ec al\u00e8m\u00f3 tir\u1eb9.",
	"sticker_files_header": "AW\u1eccN FAILI AM\u00cc AL\u00c8M\u00d3 BITCOIN"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: "afrikaans", name: "Afrikaans", yo: "Af\u00ecrik\u00e1\u00e0ns\u00ec" },
	{ dir: "arabic", name: "Arabic", yo: "Ar\u00e1b\u00edk\u00ec" },
	{ dir: "basque", name: "Basque", yo: "Basque" },
	{ dir: "bulgarian", name: "Bulgarian", yo: "B\u1ecd\u0300lg\u00e9r\u00ed\u00e0" },
	{ dir: "catalan", name: "Catalan", yo: "Katal\u00e1n\u00ec" },
	{ dir: "chinese", name: "Chinese", yo: "\u1e62a\u00edn\u00ec\u00ecs\u00ec" },
	{ dir: "croatian", name: "Croatian", yo: "Kro\u00e9\u1e63\u00ed\u00e0" },
	{ dir: "czech", name: "Czech", yo: "\u1e62\u1eb9\u0301\u1eb9\u0300k\u00ec" },
	{ dir: "danish", name: "Danish", yo: "D\u00e1n\u00ec\u1e63\u00ec" },
	{ dir: "dutch", name: "Dutch", yo: "D\u1ecd\u0301\u1ecd\u0300\u1e63\u00ec" },
	{ dir: "english", name: "English", yo: "G\u1eb9\u0300\u1eb9\u0301s\u00ec" },
	{ dir: "estonian", name: "Estonian", yo: "Est\u00f3n\u00ed\u00e0" },
	{ dir: "filipino", name: "Filipino", yo: "Filipino" },
	{ dir: "finnish", name: "Finnish", yo: "F\u00edn\u00ec\u1e63\u00ec" },
	{ dir: "french", name: "French", yo: "Far\u00e0ns\u00e9\u00e8s\u00ec" },
	{ dir: "german", name: "German", yo: "J\u00e1m\u00e1n\u00ec" },
	{ dir: "greek", name: "Greek", yo: "Gr\u00ed\u00eck\u00ec" },
	{ dir: "hausa", name: "Hausa", yo: "Hausa" },
	{ dir: "hebrew", name: "Hebrew", yo: "H\u00e9b\u00e9r\u00f9" },
	{ dir: "hindi", name: "Hindi", yo: "Hindi" },
	{ dir: "hungarian", name: "Hungarian", yo: "H\u1ecd\u0300ng\u00e9r\u00ed\u00e0" },
	{ dir: "indonesian", name: "Indonesian", yo: "Indon\u00e9\u1e63\u00ed\u00e0" },
	{ dir: "irish", name: "Irish", yo: "\u00c8d\u00e8 \u00c0y\u00e0l\u00e1nd\u00ec" },
	{ dir: "italian", name: "Italian", yo: "It\u00e1l\u00ed\u00e0" },
	{ dir: "japanese", name: "Japanese", yo: "Jap\u00e1n\u00ec\u00ecs\u00ec" },
	{ dir: "korean", name: "Korean", yo: "K\u00f3r\u00ed\u00e0" },
	{ dir: "malay", name: "Malay", yo: "Mal\u00e9\u00e8" },
	{ dir: "norwegian", name: "Norwegian", yo: "N\u1ecd\u0301\u1ecd\u0300w\u00e8" },
	{ dir: "persian", name: "Persian", yo: "P\u00e9\u00e9s\u00ed\u00e0" },
	{ dir: "polish", name: "Polish", yo: "P\u00f3l\u00ec\u1e63\u00ec" },
	{ dir: "portuguese", name: "Portuguese", yo: "P\u1ecd\u0301t\u00fag\u00ec\u00ecs\u00ec" },
	{ dir: "russian", name: "Russian", yo: "R\u1ecd\u0301\u1e63\u00ed\u00e0" },
	{ dir: "sinhala", name: "Sinhala", yo: "Sinhala" },
	{ dir: "slovak", name: "Slovak", yo: "Sl\u00f3v\u00e1k\u00ec" },
	{ dir: "slovenian", name: "Slovenian", yo: "Slov\u00e9n\u00ed\u00e0" },
	{ dir: "spanish", name: "Spanish", yo: "Sp\u00e1n\u00ec\u1e63\u00ec" },
	{ dir: "swahili", name: "Swahili", yo: "Swahili" },
	{ dir: "swedish", name: "Swedish", yo: "Sw\u00ed\u00edd\u00ec\u1e63\u00ec" },
	{ dir: "thai", name: "Thai", yo: "Thai" },
	{ dir: "turkish", name: "Turkish", yo: "T\u1ecd\u0301\u1ecd\u0300k\u00ec\u1e63\u00ec" },
	{ dir: "urdu", name: "Urdu", yo: "Urdu" },
	{ dir: "vietnamese", name: "Vietnamese", yo: "Vi\u1eb9\u0300tn\u00e1m\u00ec\u00ecs\u00ec" },
	{ dir: "yoruba", name: "Yoruba", yo: "Yor\u00f9b\u00e1" }
];

stickerLanguages.forEach(function(sl) {
	const dirName = sl.dir;
	const yoName = sl.yo;
	const prefix = dirName;
	writeFile(`sticker-files/${dirName}/index_${lang}.json`, {
		[`${prefix}_bitcoin_sticker_files`]: `Aw\u1ecdn Faili Am\u00ec Al\u00e8m\u00f3 Bitcoin ${yoName}`,
		[`${prefix}_description`]: `Gba aw\u1ecdn faili am\u00ec al\u00e8m\u00f3 Bitcoin ${yoName} nib\u00ed.`,
		[`${prefix}_header`]: `GBA AW\u1eccN FAILI AM\u00cc AL\u00c8M\u00d3 BITCOIN ${yoName.toUpperCase()}`
	});
});

console.log('\nDone! Sticker files created for Yoruba (yo).');
