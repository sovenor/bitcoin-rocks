/**
 * Creates Hebrew (he) translation files for all sticker-files/ subdirectory pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'he';
const today = '2026-04-10';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"sticker_files_page_title": "\u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF",
	"sticker_files_description": "\u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05D0\u05EA \u05E7\u05D1\u05E6\u05D9 \u05D4\u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05E9\u05DC \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF \u05E9\u05DC\u05E0\u05D5 \u05E7\u05DC\u05D9\u05DD \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D3\u05E4\u05D9\u05E1 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05DE\u05E9\u05DC\u05DB\u05DD.",
	"sticker_files_header": "\u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF"
});

// All sticker language subdirectories
var stickerLanguages = [
	{ dir: "afrikaans", name: "\u05D0\u05E4\u05E8\u05D9\u05E7\u05D0\u05E0\u05E1" },
	{ dir: "arabic", name: "\u05E2\u05E8\u05D1\u05D9\u05EA" },
	{ dir: "basque", name: "\u05D1\u05E1\u05E7\u05D9\u05EA" },
	{ dir: "bulgarian", name: "\u05D1\u05D5\u05DC\u05D2\u05E8\u05D9\u05EA" },
	{ dir: "catalan", name: "\u05E7\u05D8\u05DC\u05D0\u05E0\u05D9\u05EA" },
	{ dir: "chinese", name: "\u05E1\u05D9\u05E0\u05D9\u05EA" },
	{ dir: "croatian", name: "\u05E7\u05E8\u05D5\u05D0\u05D8\u05D9\u05EA" },
	{ dir: "czech", name: "\u05E6'\u05DB\u05D9\u05EA" },
	{ dir: "danish", name: "\u05D3\u05E0\u05D9\u05EA" },
	{ dir: "dutch", name: "\u05D4\u05D5\u05DC\u05E0\u05D3\u05D9\u05EA" },
	{ dir: "english", name: "\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA" },
	{ dir: "estonian", name: "\u05D0\u05E1\u05D8\u05D5\u05E0\u05D9\u05EA" },
	{ dir: "filipino", name: "\u05E4\u05D9\u05DC\u05D9\u05E4\u05D9\u05E0\u05D9\u05EA" },
	{ dir: "finnish", name: "\u05E4\u05D9\u05E0\u05D9\u05EA" },
	{ dir: "french", name: "\u05E6\u05E8\u05E4\u05EA\u05D9\u05EA" },
	{ dir: "german", name: "\u05D2\u05E8\u05DE\u05E0\u05D9\u05EA" },
	{ dir: "greek", name: "\u05D9\u05D5\u05D5\u05E0\u05D9\u05EA" },
	{ dir: "hausa", name: "\u05D4\u05D0\u05D5\u05E1\u05D4" },
	{ dir: "hebrew", name: "\u05E2\u05D1\u05E8\u05D9\u05EA" },
	{ dir: "hindi", name: "\u05D4\u05D9\u05E0\u05D3\u05D9\u05EA" },
	{ dir: "hungarian", name: "\u05D4\u05D5\u05E0\u05D2\u05E8\u05D9\u05EA" },
	{ dir: "indonesian", name: "\u05D0\u05D9\u05E0\u05D3\u05D5\u05E0\u05D6\u05D9\u05EA" },
	{ dir: "irish", name: "\u05D0\u05D9\u05E8\u05D9\u05EA" },
	{ dir: "italian", name: "\u05D0\u05D9\u05D8\u05DC\u05E7\u05D9\u05EA" },
	{ dir: "japanese", name: "\u05D9\u05E4\u05E0\u05D9\u05EA" },
	{ dir: "korean", name: "\u05E7\u05D5\u05E8\u05D9\u05D0\u05E0\u05D9\u05EA" },
	{ dir: "malay", name: "\u05DE\u05DC\u05D0\u05D9\u05EA" },
	{ dir: "norwegian", name: "\u05E0\u05D5\u05E8\u05D1\u05D2\u05D9\u05EA" },
	{ dir: "persian", name: "\u05E4\u05E8\u05E1\u05D9\u05EA" },
	{ dir: "polish", name: "\u05E4\u05D5\u05DC\u05E0\u05D9\u05EA" },
	{ dir: "portuguese", name: "\u05E4\u05D5\u05E8\u05D8\u05D5\u05D2\u05D6\u05D9\u05EA" },
	{ dir: "russian", name: "\u05E8\u05D5\u05E1\u05D9\u05EA" },
	{ dir: "sinhala", name: "\u05E1\u05D9\u05E0\u05D4\u05DC\u05D9\u05EA" },
	{ dir: "slovak", name: "\u05E1\u05DC\u05D5\u05D1\u05E7\u05D9\u05EA" },
	{ dir: "slovenian", name: "\u05E1\u05DC\u05D5\u05D1\u05E0\u05D9\u05EA" },
	{ dir: "spanish", name: "\u05E1\u05E4\u05E8\u05D3\u05D9\u05EA" },
	{ dir: "swahili", name: "\u05E1\u05D5\u05D5\u05D4\u05D9\u05DC\u05D9\u05EA" },
	{ dir: "swedish", name: "\u05E9\u05D5\u05D5\u05D3\u05D9\u05EA" },
	{ dir: "thai", name: "\u05EA\u05D0\u05D9\u05EA" },
	{ dir: "turkish", name: "\u05D8\u05D5\u05E8\u05E7\u05D9\u05EA" },
	{ dir: "urdu", name: "\u05D0\u05D5\u05E8\u05D3\u05D5" },
	{ dir: "vietnamese", name: "\u05D5\u05D9\u05D0\u05D8\u05E0\u05DE\u05D9\u05EA" },
	{ dir: "yoruba", name: "\u05D9\u05D5\u05E8\u05D5\u05D1\u05D4" }
];

stickerLanguages.forEach(function(sl) {
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[sl.dir + "_bitcoin_sticker_files"]: "\u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF \u05D1" + sl.name,
		[sl.dir + "_description"]: "\u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF \u05D1" + sl.name + " \u05DB\u05D0\u05DF.",
		[sl.dir + "_header"]: "\u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF \u05D1" + sl.name
	});
});

// business/sticker-files/english
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"bitcoin_accepted_here_sticker_files": "\u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA '\u05DB\u05D0\u05DF \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF'",
	"english_biz_sticker_description": "\u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA '\u05DB\u05D0\u05DF \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF' \u05DB\u05D0\u05DF.",
	"english_biz_sticker_header": "\u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05E7\u05D1\u05E6\u05D9 \u05DE\u05D3\u05D1\u05E7\u05D5\u05EA '\u05DB\u05D0\u05DF \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05D1\u05D9\u05D8\u05E7\u05D5\u05D9\u05DF' \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"
});

console.log('\nDone! Created ' + (stickerLanguages.length + 2) + ' sticker files for Hebrew (he).');
