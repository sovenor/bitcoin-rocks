/**
 * Creates Bengali (bn) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'bn';
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
	"bitcoin_sticker_files_all_languages": "Bitcoin স্টিকার ফাইল: সব ভাষা",
	"sticker_files_description": "আপনার নিজের স্টিকার প্রিন্ট করতে আমাদের সহজ ব্যবহারযোগ্য Bitcoin স্টিকার ফাইল ডাউনলোড করুন।",
	"sticker_files_header": "BITCOIN স্টিকার ফাইল"
});

// All sticker-files language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'আফ্রিকান্স', nameEn: 'Afrikaans' },
	{ dir: 'arabic', name: 'আরবি', nameEn: 'Arabic' },
	{ dir: 'basque', name: 'বাস্ক', nameEn: 'Basque' },
	{ dir: 'bulgarian', name: 'বুলগেরীয়', nameEn: 'Bulgarian' },
	{ dir: 'catalan', name: 'কাতালান', nameEn: 'Catalan' },
	{ dir: 'chinese', name: 'চীনা', nameEn: 'Chinese' },
	{ dir: 'croatian', name: 'ক্রোয়েশীয়', nameEn: 'Croatian' },
	{ dir: 'czech', name: 'চেক', nameEn: 'Czech' },
	{ dir: 'danish', name: 'ডেনিশ', nameEn: 'Danish' },
	{ dir: 'dutch', name: 'ডাচ', nameEn: 'Dutch' },
	{ dir: 'english', name: 'ইংরেজি', nameEn: 'English' },
	{ dir: 'estonian', name: 'এস্তোনীয়', nameEn: 'Estonian' },
	{ dir: 'filipino', name: 'ফিলিপিনো', nameEn: 'Filipino' },
	{ dir: 'finnish', name: 'ফিনিশ', nameEn: 'Finnish' },
	{ dir: 'french', name: 'ফরাসি', nameEn: 'French' },
	{ dir: 'german', name: 'জার্মান', nameEn: 'German' },
	{ dir: 'greek', name: 'গ্রিক', nameEn: 'Greek' },
	{ dir: 'hausa', name: 'হাউসা', nameEn: 'Hausa' },
	{ dir: 'hebrew', name: 'হিব্রু', nameEn: 'Hebrew' },
	{ dir: 'hindi', name: 'হিন্দি', nameEn: 'Hindi' },
	{ dir: 'hungarian', name: 'হাঙ্গেরীয়', nameEn: 'Hungarian' },
	{ dir: 'indonesian', name: 'ইন্দোনেশীয়', nameEn: 'Indonesian' },
	{ dir: 'irish', name: 'আইরিশ', nameEn: 'Irish' },
	{ dir: 'italian', name: 'ইতালীয়', nameEn: 'Italian' },
	{ dir: 'japanese', name: 'জাপানি', nameEn: 'Japanese' },
	{ dir: 'korean', name: 'কোরীয়', nameEn: 'Korean' },
	{ dir: 'malay', name: 'মালয়', nameEn: 'Malay' },
	{ dir: 'norwegian', name: 'নরওয়েজীয়', nameEn: 'Norwegian' },
	{ dir: 'persian', name: 'ফারসি', nameEn: 'Persian' },
	{ dir: 'polish', name: 'পোলিশ', nameEn: 'Polish' },
	{ dir: 'portuguese', name: 'পর্তুগিজ', nameEn: 'Portuguese' },
	{ dir: 'russian', name: 'রুশ', nameEn: 'Russian' },
	{ dir: 'sinhala', name: 'সিংহলি', nameEn: 'Sinhala' },
	{ dir: 'slovak', name: 'স্লোভাক', nameEn: 'Slovak' },
	{ dir: 'slovenian', name: 'স্লোভেনীয়', nameEn: 'Slovenian' },
	{ dir: 'spanish', name: 'স্প্যানিশ', nameEn: 'Spanish' },
	{ dir: 'swahili', name: 'সোয়াহিলি', nameEn: 'Swahili' },
	{ dir: 'swedish', name: 'সুইডিশ', nameEn: 'Swedish' },
	{ dir: 'thai', name: 'থাই', nameEn: 'Thai' },
	{ dir: 'turkish', name: 'তুর্কি', nameEn: 'Turkish' },
	{ dir: 'urdu', name: 'উর্দু', nameEn: 'Urdu' },
	{ dir: 'vietnamese', name: 'ভিয়েতনামি', nameEn: 'Vietnamese' },
	{ dir: 'yoruba', name: 'ইয়োরুবা', nameEn: 'Yoruba' }
];

for (const sl of stickerLanguages) {
	const key1 = `${sl.dir}_bitcoin_sticker_files`;
	const key2 = `${sl.dir}_description`;
	const key3 = `${sl.dir}_header`;

	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[key1]: `${sl.name} Bitcoin স্টিকার ফাইল`,
		[key2]: `এখানে ${sl.name} Bitcoin স্টিকার ফাইল ডাউনলোড করুন।`,
		[key3]: `${sl.name.toUpperCase()} BITCOIN স্টিকার ফাইল ডাউনলোড করুন`
	});
}

console.log('\nDone creating sticker files for Bengali (bn).');
