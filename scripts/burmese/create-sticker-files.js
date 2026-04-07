/**
 * Creates Burmese (my) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'my';
const today = '2026-04-07';

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
	"bitcoin_sticker_files_all_languages": "Bitcoin စတစ်ကာဖိုင်များ: ဘာသာစကားအားလုံး",
	"sticker_files_description": "သင့်ကိုယ်ပိုင်စတစ်ကာများ ပုံနှိပ်ရန် ကျွန်ုပ်တို့၏ အသုံးပြုရလွယ်ကူသော Bitcoin စတစ်ကာဖိုင်များ ဒေါင်းလုဒ်လုပ်ပါ။",
	"sticker_files_header": "BITCOIN စတစ်ကာဖိုင်များ"
});

// All sticker-files language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'အာဖရိကန်စ်', nameEn: 'Afrikaans' },
	{ dir: 'arabic', name: 'အာရဗီ', nameEn: 'Arabic' },
	{ dir: 'basque', name: 'ဘတ်စ်', nameEn: 'Basque' },
	{ dir: 'bulgarian', name: 'ဘူလ်ဂေးရီးယား', nameEn: 'Bulgarian' },
	{ dir: 'catalan', name: 'ကတ်တလန်', nameEn: 'Catalan' },
	{ dir: 'chinese', name: 'တရုတ်', nameEn: 'Chinese' },
	{ dir: 'croatian', name: 'ခရိုအေးရှား', nameEn: 'Croatian' },
	{ dir: 'czech', name: 'ချက်', nameEn: 'Czech' },
	{ dir: 'danish', name: 'ဒိန်းမတ်', nameEn: 'Danish' },
	{ dir: 'dutch', name: 'ဒတ်ချ်', nameEn: 'Dutch' },
	{ dir: 'english', name: 'အင်္ဂလိပ်', nameEn: 'English' },
	{ dir: 'estonian', name: 'အက်စ်တိုးနီးယား', nameEn: 'Estonian' },
	{ dir: 'filipino', name: 'ဖိလစ်ပိုင်', nameEn: 'Filipino' },
	{ dir: 'finnish', name: 'ဖင်လန်', nameEn: 'Finnish' },
	{ dir: 'french', name: 'ပြင်သစ်', nameEn: 'French' },
	{ dir: 'german', name: 'ဂျာမန်', nameEn: 'German' },
	{ dir: 'greek', name: 'ဂရိ', nameEn: 'Greek' },
	{ dir: 'hausa', name: 'ဟောင်ဆာ', nameEn: 'Hausa' },
	{ dir: 'hebrew', name: 'ဟီဘရူး', nameEn: 'Hebrew' },
	{ dir: 'hindi', name: 'ဟိန္ဒီ', nameEn: 'Hindi' },
	{ dir: 'hungarian', name: 'ဟန်ဂေရီ', nameEn: 'Hungarian' },
	{ dir: 'indonesian', name: 'အင်ဒိုနီးရှား', nameEn: 'Indonesian' },
	{ dir: 'irish', name: 'အိုင်းရစ်ရှ်', nameEn: 'Irish' },
	{ dir: 'italian', name: 'အီတလီ', nameEn: 'Italian' },
	{ dir: 'japanese', name: 'ဂျပန်', nameEn: 'Japanese' },
	{ dir: 'korean', name: 'ကိုရီးယား', nameEn: 'Korean' },
	{ dir: 'malay', name: 'မလေး', nameEn: 'Malay' },
	{ dir: 'norwegian', name: 'နော်ဝေ', nameEn: 'Norwegian' },
	{ dir: 'persian', name: 'ပါရှန်း', nameEn: 'Persian' },
	{ dir: 'polish', name: 'ပိုလန်', nameEn: 'Polish' },
	{ dir: 'portuguese', name: 'ပေါ်တူဂီ', nameEn: 'Portuguese' },
	{ dir: 'russian', name: 'ရုရှ', nameEn: 'Russian' },
	{ dir: 'sinhala', name: 'ဆင်ဟာလ', nameEn: 'Sinhala' },
	{ dir: 'slovak', name: 'စလိုဗက်', nameEn: 'Slovak' },
	{ dir: 'slovenian', name: 'စလိုဗေးနီးယား', nameEn: 'Slovenian' },
	{ dir: 'spanish', name: 'စပိန်', nameEn: 'Spanish' },
	{ dir: 'swahili', name: 'ဆွာဟီလီ', nameEn: 'Swahili' },
	{ dir: 'swedish', name: 'ဆွီဒင်', nameEn: 'Swedish' },
	{ dir: 'thai', name: 'ထိုင်း', nameEn: 'Thai' },
	{ dir: 'turkish', name: 'တူရကီ', nameEn: 'Turkish' },
	{ dir: 'urdu', name: 'အူရ်ဒူ', nameEn: 'Urdu' },
	{ dir: 'vietnamese', name: 'ဗီယက်နမ်', nameEn: 'Vietnamese' },
	{ dir: 'yoruba', name: 'ယိုရူဘာ', nameEn: 'Yoruba' }
];

for (const sl of stickerLanguages) {
	const key = sl.dir;
	writeFile(`sticker-files/${key}/index_${lang}.json`, {
		[`${key}_bitcoin_sticker_files`]: `${sl.name} Bitcoin စတစ်ကာဖိုင်များ`,
		[`${key}_description`]: `${sl.name} Bitcoin စတစ်ကာဖိုင်များကို ဤနေရာတွင် ဒေါင်းလုဒ်လုပ်ပါ။`,
		[`${key}_header`]: `${sl.name.toUpperCase()} BITCOIN စတစ်ကာဖိုင်များ ဒေါင်းလုဒ်လုပ်ပါ`
	});
}

console.log('\nDone creating sticker-files for Burmese (my).');
