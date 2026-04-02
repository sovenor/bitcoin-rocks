/**
 * Creates Hindi (hi) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hi';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin स्टिकर: सभी भाषाएँ",
		"sticker_files_description": "हमारी उपयोग में आसान Bitcoin स्टिकर फ़ाइलें डाउनलोड करें और अपने खुद के स्टिकर प्रिंट करें।",
		"sticker_files_header": "Bitcoin स्टिकर फ़ाइलें"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "अफ़्रीकान्स Bitcoin स्टिकर",
		"afrikaans_description": "अफ़्रीकान्स Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"afrikaans_header": "अफ़्रीकान्स Bitcoin स्टिकर डाउनलोड करें"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "अरबी Bitcoin स्टिकर",
		"arabic_description": "अरबी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"arabic_header": "अरबी Bitcoin स्टिकर डाउनलोड करें"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "बास्क Bitcoin स्टिकर",
		"basque_description": "बास्क Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"basque_header": "बास्क Bitcoin स्टिकर डाउनलोड करें"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "बुल्गारियाई Bitcoin स्टिकर",
		"bulgarian_description": "बुल्गारियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"bulgarian_header": "बुल्गारियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "कातालान Bitcoin स्टिकर",
		"catalan_description": "कातालान Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"catalan_header": "कातालान Bitcoin स्टिकर डाउनलोड करें"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "चीनी Bitcoin स्टिकर",
		"chinese_description": "चीनी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"chinese_header": "चीनी Bitcoin स्टिकर डाउनलोड करें"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "क्रोएशियाई Bitcoin स्टिकर",
		"croatian_description": "क्रोएशियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"croatian_header": "क्रोएशियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "चेक Bitcoin स्टिकर",
		"czech_description": "चेक Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"czech_header": "चेक Bitcoin स्टिकर डाउनलोड करें"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "डैनिश Bitcoin स्टिकर",
		"danish_description": "डैनिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"danish_header": "डैनिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "डच Bitcoin स्टिकर",
		"dutch_description": "डच Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"dutch_header": "डच Bitcoin स्टिकर डाउनलोड करें"
	},
	'english': {
		"english_bitcoin_sticker_files": "अंग्रेज़ी Bitcoin स्टिकर",
		"english_description": "अंग्रेज़ी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"english_header": "अंग्रेज़ी Bitcoin स्टिकर डाउनलोड करें",
		"print_these": "एक क्लिक में प्रिंट करें"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "एस्टोनियाई Bitcoin स्टिकर",
		"estonian_description": "एस्टोनियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"estonian_header": "एस्टोनियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "फ़िलिपिनो Bitcoin स्टिकर",
		"filipino_description": "फ़िलिपिनो Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"filipino_header": "फ़िलिपिनो Bitcoin स्टिकर डाउनलोड करें"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "फ़िनिश Bitcoin स्टिकर",
		"finnish_description": "फ़िनिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"finnish_header": "फ़िनिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'french': {
		"french_bitcoin_sticker_files": "फ़्रेंच Bitcoin स्टिकर",
		"french_description": "फ़्रेंच Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"french_header": "फ़्रेंच Bitcoin स्टिकर डाउनलोड करें"
	},
	'german': {
		"german_bitcoin_sticker_files": "जर्मन Bitcoin स्टिकर",
		"german_description": "जर्मन Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"german_header": "जर्मन Bitcoin स्टिकर डाउनलोड करें"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "ग्रीक Bitcoin स्टिकर",
		"greek_description": "ग्रीक Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"greek_header": "ग्रीक Bitcoin स्टिकर डाउनलोड करें"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "हौसा Bitcoin स्टिकर",
		"hausa_description": "हौसा Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"hausa_header": "हौसा Bitcoin स्टिकर डाउनलोड करें"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "हिब्रू Bitcoin स्टिकर",
		"hebrew_description": "हिब्रू Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"hebrew_header": "हिब्रू Bitcoin स्टिकर डाउनलोड करें"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "हिन्दी Bitcoin स्टिकर",
		"hindi_description": "हिन्दी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"hindi_header": "हिन्दी Bitcoin स्टिकर डाउनलोड करें"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "हंगेरियाई Bitcoin स्टिकर",
		"hungarian_description": "हंगेरियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"hungarian_header": "हंगेरियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "इंडोनेशियाई Bitcoin स्टिकर",
		"indonesian_description": "इंडोनेशियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"indonesian_header": "इंडोनेशियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "आयरिश Bitcoin स्टिकर",
		"irish_description": "आयरिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"irish_header": "आयरिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "इतालवी Bitcoin स्टिकर",
		"italian_description": "इतालवी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"italian_header": "इतालवी Bitcoin स्टिकर डाउनलोड करें"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "जापानी Bitcoin स्टिकर",
		"japanese_description": "जापानी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"japanese_header": "जापानी Bitcoin स्टिकर डाउनलोड करें"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "कोरियाई Bitcoin स्टिकर",
		"korean_description": "कोरियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"korean_header": "कोरियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "मलय Bitcoin स्टिकर",
		"malay_description": "मलय Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"malay_header": "मलय Bitcoin स्टिकर डाउनलोड करें"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "नॉर्वेजियन Bitcoin स्टिकर",
		"norwegian_description": "नॉर्वेजियन Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"norwegian_header": "नॉर्वेजियन Bitcoin स्टिकर डाउनलोड करें"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "फ़ारसी Bitcoin स्टिकर",
		"persian_description": "फ़ारसी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"persian_header": "फ़ारसी Bitcoin स्टिकर डाउनलोड करें"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "पोलिश Bitcoin स्टिकर",
		"polish_description": "पोलिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"polish_header": "पोलिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "पुर्तगाली Bitcoin स्टिकर",
		"portuguese_description": "पुर्तगाली Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"portuguese_header": "पुर्तगाली Bitcoin स्टिकर डाउनलोड करें"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "रूसी Bitcoin स्टिकर",
		"russian_description": "रूसी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"russian_header": "रूसी Bitcoin स्टिकर डाउनलोड करें"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "सिंहली Bitcoin स्टिकर",
		"sinhala_description": "सिंहली Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"sinhala_header": "सिंहली Bitcoin स्टिकर डाउनलोड करें"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "स्लोवाक Bitcoin स्टिकर",
		"slovak_description": "स्लोवाक Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"slovak_header": "स्लोवाक Bitcoin स्टिकर डाउनलोड करें"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "स्लोवेनियाई Bitcoin स्टिकर",
		"slovenian_description": "स्लोवेनियाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"slovenian_header": "स्लोवेनियाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "स्पैनिश Bitcoin स्टिकर",
		"spanish_description": "स्पैनिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"spanish_header": "स्पैनिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "स्वाहिली Bitcoin स्टिकर",
		"swahili_description": "स्वाहिली Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"swahili_header": "स्वाहिली Bitcoin स्टिकर डाउनलोड करें"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "स्वीडिश Bitcoin स्टिकर",
		"swedish_description": "स्वीडिश Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"swedish_header": "स्वीडिश Bitcoin स्टिकर डाउनलोड करें"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "थाई Bitcoin स्टिकर",
		"thai_description": "थाई Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"thai_header": "थाई Bitcoin स्टिकर डाउनलोड करें"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "तुर्की Bitcoin स्टिकर",
		"turkish_description": "तुर्की Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"turkish_header": "तुर्की Bitcoin स्टिकर डाउनलोड करें"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "उर्दू Bitcoin स्टिकर",
		"urdu_description": "उर्दू Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"urdu_header": "उर्दू Bitcoin स्टिकर डाउनलोड करें"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "वियतनामी Bitcoin स्टिकर",
		"vietnamese_description": "वियतनामी Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"vietnamese_header": "वियतनामी Bitcoin स्टिकर डाउनलोड करें"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "योरूबा Bitcoin स्टिकर",
		"yoruba_description": "योरूबा Bitcoin स्टिकर फ़ाइलें डाउनलोड करें।",
		"yoruba_header": "योरूबा Bitcoin स्टिकर डाउनलोड करें"
	}
};

let count = 0;

for (const [dir, translations] of Object.entries(stickerLanguages)) {
	const subDir = dir === 'index'
		? path.join(i18nDir, lang, 'sticker-files')
		: path.join(i18nDir, lang, 'sticker-files', dir);

	fs.mkdirSync(subDir, { recursive: true });

	const data = { ...meta, ...translations };
	const filePath = path.join(subDir, `index_${lang}.json`);
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// Also create business/sticker-files/english/
const bizStickerDir = path.join(i18nDir, lang, 'business', 'sticker-files', 'english');
fs.mkdirSync(bizStickerDir, { recursive: true });
const bizStickerData = {
	...meta,
	"english_bitcoin_accepted_here_sticker_files": "अंग्रेज़ी 'यहाँ Bitcoin स्वीकार किया जाता है' स्टिकर फ़ाइलें",
	"english_biz_sticker_files_description": "अपने खुद के 'यहाँ Bitcoin स्वीकार किया जाता है' स्टिकर प्रिंट करने के लिए अंग्रेज़ी स्टिकर फ़ाइलें डाउनलोड करें।",
	"english_header": "अंग्रेज़ी 'यहाँ Bitcoin स्वीकार किया जाता है' स्टिकर फ़ाइलें डाउनलोड करें"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
