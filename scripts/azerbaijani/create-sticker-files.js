/**
 * Creates Azerbaijani (az) translation files for sticker-files/ subdirectory.
 * Includes the main index and all ~44 language subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'az';
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

// Main sticker-files index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "Bitcoin Etiket Faylları: Bütün Dillər",
	"sticker_files_description": "Öz etiketlərinizi çap etmək üçün istifadəsi asan Bitcoin Etiket Fayllarımızı endirin.",
	"sticker_files_header": "BITCOIN ETİKET FAYLLARI"
});

// Language subdirectories - each follows the same pattern
const stickerLanguages = [
	{ dir: "afrikaans", name: "Afrikaans", azName: "Afrikaans" },
	{ dir: "arabic", name: "Arabic", azName: "Ərəb" },
	{ dir: "basque", name: "Basque", azName: "Bask" },
	{ dir: "bulgarian", name: "Bulgarian", azName: "Bolqar" },
	{ dir: "catalan", name: "Catalan", azName: "Katalan" },
	{ dir: "chinese", name: "Chinese", azName: "Çin" },
	{ dir: "croatian", name: "Croatian", azName: "Xorvat" },
	{ dir: "czech", name: "Czech", azName: "Çex" },
	{ dir: "danish", name: "Danish", azName: "Danimarka" },
	{ dir: "dutch", name: "Dutch", azName: "Holland" },
	{ dir: "english", name: "English", azName: "İngilis" },
	{ dir: "estonian", name: "Estonian", azName: "Eston" },
	{ dir: "filipino", name: "Filipino", azName: "Filipino" },
	{ dir: "finnish", name: "Finnish", azName: "Fin" },
	{ dir: "french", name: "French", azName: "Fransız" },
	{ dir: "german", name: "German", azName: "Alman" },
	{ dir: "greek", name: "Greek", azName: "Yunan" },
	{ dir: "hausa", name: "Hausa", azName: "Hausa" },
	{ dir: "hebrew", name: "Hebrew", azName: "İbrani" },
	{ dir: "hindi", name: "Hindi", azName: "Hindi" },
	{ dir: "hungarian", name: "Hungarian", azName: "Macar" },
	{ dir: "indonesian", name: "Indonesian", azName: "İndoneziya" },
	{ dir: "irish", name: "Irish", azName: "İrland" },
	{ dir: "italian", name: "Italian", azName: "İtalyan" },
	{ dir: "japanese", name: "Japanese", azName: "Yapon" },
	{ dir: "korean", name: "Korean", azName: "Koreya" },
	{ dir: "malay", name: "Malay", azName: "Malay" },
	{ dir: "norwegian", name: "Norwegian", azName: "Norveç" },
	{ dir: "persian", name: "Persian", azName: "Fars" },
	{ dir: "polish", name: "Polish", azName: "Polyak" },
	{ dir: "portuguese", name: "Portuguese", azName: "Portuqal" },
	{ dir: "russian", name: "Russian", azName: "Rus" },
	{ dir: "sinhala", name: "Sinhala", azName: "Sinhala" },
	{ dir: "slovak", name: "Slovak", azName: "Slovak" },
	{ dir: "slovenian", name: "Slovenian", azName: "Sloven" },
	{ dir: "spanish", name: "Spanish", azName: "İspan" },
	{ dir: "swahili", name: "Swahili", azName: "Svahili" },
	{ dir: "swedish", name: "Swedish", azName: "İsveç" },
	{ dir: "thai", name: "Thai", azName: "Tay" },
	{ dir: "turkish", name: "Turkish", azName: "Türk" },
	{ dir: "urdu", name: "Urdu", azName: "Urdu" },
	{ dir: "vietnamese", name: "Vietnamese", azName: "Vyetnam" },
	{ dir: "yoruba", name: "Yoruba", azName: "Yoruba" }
];

for (const { dir, name, azName } of stickerLanguages) {
	const keyPrefix = dir;
	writeFile(`sticker-files/${dir}/index_${lang}.json`, {
		[`${keyPrefix}_bitcoin_sticker_files`]: `${azName} Bitcoin Etiket Faylları`,
		[`${keyPrefix}_description`]: `${azName} Bitcoin Etiket Fayllarını buradan endirin.`,
		[`${keyPrefix}_header`]: `${azName.toUpperCase()} BITCOIN ETİKET FAYLLARINI ENDİRİN`
	});
}

console.log('\nDone! Sticker files created for Azerbaijani (az).');
