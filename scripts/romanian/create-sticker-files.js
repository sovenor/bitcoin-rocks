/**
 * Creates Romanian (ro) translation files for sticker-files/ subdirectory
 * (~44 files with repetitive pattern)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ro';
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
	"bitcoin_sticker_files_all_languages": "Fișiere autocolante Bitcoin: Toate limbile",
	"sticker_files_description": "Descarcă fișierele noastre ușor de utilizat pentru autocolante Bitcoin pentru a-ți tipări propriile autocolante.",
	"sticker_files_header": "FIȘIERE AUTOCOLANTE BITCOIN"
});

// Language-specific sticker files
const stickerLanguages = [
	{ dir: "afrikaans", name: "Afrikaans", nameRo: "africană" },
	{ dir: "arabic", name: "Arabic", nameRo: "arabă" },
	{ dir: "basque", name: "Basque", nameRo: "bască" },
	{ dir: "bulgarian", name: "Bulgarian", nameRo: "bulgară" },
	{ dir: "catalan", name: "Catalan", nameRo: "catalană" },
	{ dir: "chinese", name: "Chinese", nameRo: "chineză" },
	{ dir: "croatian", name: "Croatian", nameRo: "croată" },
	{ dir: "czech", name: "Czech", nameRo: "cehă" },
	{ dir: "danish", name: "Danish", nameRo: "daneză" },
	{ dir: "dutch", name: "Dutch", nameRo: "olandeză" },
	{ dir: "english", name: "English", nameRo: "engleză", hasPrint: true },
	{ dir: "estonian", name: "Estonian", nameRo: "estonă" },
	{ dir: "filipino", name: "Filipino", nameRo: "filipineză" },
	{ dir: "finnish", name: "Finnish", nameRo: "finlandeză" },
	{ dir: "french", name: "French", nameRo: "franceză" },
	{ dir: "german", name: "German", nameRo: "germană" },
	{ dir: "greek", name: "Greek", nameRo: "greacă" },
	{ dir: "hausa", name: "Hausa", nameRo: "hausa" },
	{ dir: "hebrew", name: "Hebrew", nameRo: "ebraică" },
	{ dir: "hindi", name: "Hindi", nameRo: "hindi" },
	{ dir: "hungarian", name: "Hungarian", nameRo: "maghiară" },
	{ dir: "indonesian", name: "Indonesian", nameRo: "indoneziană" },
	{ dir: "irish", name: "Irish", nameRo: "irlandeză" },
	{ dir: "italian", name: "Italian", nameRo: "italiană" },
	{ dir: "japanese", name: "Japanese", nameRo: "japoneză" },
	{ dir: "korean", name: "Korean", nameRo: "coreeană" },
	{ dir: "malay", name: "Malay", nameRo: "malaeză" },
	{ dir: "norwegian", name: "Norwegian", nameRo: "norvegiană" },
	{ dir: "persian", name: "Persian", nameRo: "persană" },
	{ dir: "polish", name: "Polish", nameRo: "poloneză" },
	{ dir: "portuguese", name: "Portuguese", nameRo: "portugheză" },
	{ dir: "russian", name: "Russian", nameRo: "rusă" },
	{ dir: "sinhala", name: "Sinhala", nameRo: "singhaleză" },
	{ dir: "slovak", name: "Slovak", nameRo: "slovacă" },
	{ dir: "slovenian", name: "Slovenian", nameRo: "slovenă" },
	{ dir: "spanish", name: "Spanish", nameRo: "spaniolă" },
	{ dir: "swahili", name: "Swahili", nameRo: "swahili" },
	{ dir: "swedish", name: "Swedish", nameRo: "suedeză" },
	{ dir: "thai", name: "Thai", nameRo: "tailandeză" },
	{ dir: "turkish", name: "Turkish", nameRo: "turcă" },
	{ dir: "urdu", name: "Urdu", nameRo: "urdu" },
	{ dir: "vietnamese", name: "Vietnamese", nameRo: "vietnameză" },
	{ dir: "yoruba", name: "Yoruba", nameRo: "yoruba" }
];

for (const sl of stickerLanguages) {
	const prefix = sl.dir;
	const data = {};
	data[`${prefix}_bitcoin_sticker_files`] = `Fișiere autocolante Bitcoin în limba ${sl.nameRo}`;
	data[`${prefix}_description`] = `Descarcă fișierele autocolante Bitcoin în limba ${sl.nameRo} aici.`;
	data[`${prefix}_header`] = `DESCARCĂ FIȘIERELE AUTOCOLANTE BITCOIN ÎN LIMBA ${sl.name.toUpperCase()}`;
	if (sl.hasPrint) {
		data["print_these"] = "TIPĂREȘTE-LE CU UN SINGUR CLICK";
	}
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, data);
}

console.log('\nDone! Sticker files created for Romanian (ro).');
