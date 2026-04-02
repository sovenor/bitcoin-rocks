/**
 * Creates Mandarin Chinese (zh) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'zh';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Chinese translations
const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "比特币贴纸：所有语言",
		"sticker_files_description": "下载我们易于使用的比特币贴纸文件，打印您自己的贴纸。",
		"sticker_files_header": "比特币贴纸文件"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "南非荷兰语比特币贴纸",
		"afrikaans_description": "下载南非荷兰语比特币贴纸文件。",
		"afrikaans_header": "下载南非荷兰语比特币贴纸"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "阿拉伯语比特币贴纸",
		"arabic_description": "下载阿拉伯语比特币贴纸文件。",
		"arabic_header": "下载阿拉伯语比特币贴纸"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "巴斯克语比特币贴纸",
		"basque_description": "下载巴斯克语比特币贴纸文件。",
		"basque_header": "下载巴斯克语比特币贴纸"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "保加利亚语比特币贴纸",
		"bulgarian_description": "下载保加利亚语比特币贴纸文件。",
		"bulgarian_header": "下载保加利亚语比特币贴纸"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "加泰罗尼亚语比特币贴纸",
		"catalan_description": "下载加泰罗尼亚语比特币贴纸文件。",
		"catalan_header": "下载加泰罗尼亚语比特币贴纸"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "中文比特币贴纸",
		"chinese_description": "下载中文比特币贴纸文件。",
		"chinese_header": "下载中文比特币贴纸"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "克罗地亚语比特币贴纸",
		"croatian_description": "下载克罗地亚语比特币贴纸文件。",
		"croatian_header": "下载克罗地亚语比特币贴纸"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "捷克语比特币贴纸",
		"czech_description": "下载捷克语比特币贴纸文件。",
		"czech_header": "下载捷克语比特币贴纸"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "丹麦语比特币贴纸",
		"danish_description": "下载丹麦语比特币贴纸文件。",
		"danish_header": "下载丹麦语比特币贴纸"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "荷兰语比特币贴纸",
		"dutch_description": "下载荷兰语比特币贴纸文件。",
		"dutch_header": "下载荷兰语比特币贴纸"
	},
	'english': {
		"english_bitcoin_sticker_files": "英语比特币贴纸",
		"english_description": "下载英语比特币贴纸文件。",
		"english_header": "下载英语比特币贴纸",
		"print_these": "一键打印"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "爱沙尼亚语比特币贴纸",
		"estonian_description": "下载爱沙尼亚语比特币贴纸文件。",
		"estonian_header": "下载爱沙尼亚语比特币贴纸"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "菲律宾语比特币贴纸",
		"filipino_description": "下载菲律宾语比特币贴纸文件。",
		"filipino_header": "下载菲律宾语比特币贴纸"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "芬兰语比特币贴纸",
		"finnish_description": "下载芬兰语比特币贴纸文件。",
		"finnish_header": "下载芬兰语比特币贴纸"
	},
	'french': {
		"french_bitcoin_sticker_files": "法语比特币贴纸",
		"french_description": "下载法语比特币贴纸文件。",
		"french_header": "下载法语比特币贴纸"
	},
	'german': {
		"german_bitcoin_sticker_files": "德语比特币贴纸",
		"german_description": "下载德语比特币贴纸文件。",
		"german_header": "下载德语比特币贴纸"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "希腊语比特币贴纸",
		"greek_description": "下载希腊语比特币贴纸文件。",
		"greek_header": "下载希腊语比特币贴纸"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "豪萨语比特币贴纸",
		"hausa_description": "下载豪萨语比特币贴纸文件。",
		"hausa_header": "下载豪萨语比特币贴纸"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "希伯来语比特币贴纸",
		"hebrew_description": "下载希伯来语比特币贴纸文件。",
		"hebrew_header": "下载希伯来语比特币贴纸"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "印地语比特币贴纸",
		"hindi_description": "下载印地语比特币贴纸文件。",
		"hindi_header": "下载印地语比特币贴纸"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "匈牙利语比特币贴纸",
		"hungarian_description": "下载匈牙利语比特币贴纸文件。",
		"hungarian_header": "下载匈牙利语比特币贴纸"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "印度尼西亚语比特币贴纸",
		"indonesian_description": "下载印度尼西亚语比特币贴纸文件。",
		"indonesian_header": "下载印度尼西亚语比特币贴纸"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "爱尔兰语比特币贴纸",
		"irish_description": "下载爱尔兰语比特币贴纸文件。",
		"irish_header": "下载爱尔兰语比特币贴纸"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "意大利语比特币贴纸",
		"italian_description": "下载意大利语比特币贴纸文件。",
		"italian_header": "下载意大利语比特币贴纸"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "日语比特币贴纸",
		"japanese_description": "下载日语比特币贴纸文件。",
		"japanese_header": "下载日语比特币贴纸"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "韩语比特币贴纸",
		"korean_description": "下载韩语比特币贴纸文件。",
		"korean_header": "下载韩语比特币贴纸"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "马来语比特币贴纸",
		"malay_description": "下载马来语比特币贴纸文件。",
		"malay_header": "下载马来语比特币贴纸"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "挪威语比特币贴纸",
		"norwegian_description": "下载挪威语比特币贴纸文件。",
		"norwegian_header": "下载挪威语比特币贴纸"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "波斯语比特币贴纸",
		"persian_description": "下载波斯语比特币贴纸文件。",
		"persian_header": "下载波斯语比特币贴纸"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "波兰语比特币贴纸",
		"polish_description": "下载波兰语比特币贴纸文件。",
		"polish_header": "下载波兰语比特币贴纸"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "葡萄牙语比特币贴纸",
		"portuguese_description": "下载葡萄牙语比特币贴纸文件。",
		"portuguese_header": "下载葡萄牙语比特币贴纸"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "俄语比特币贴纸",
		"russian_description": "下载俄语比特币贴纸文件。",
		"russian_header": "下载俄语比特币贴纸"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "僧伽罗语比特币贴纸",
		"sinhala_description": "下载僧伽罗语比特币贴纸文件。",
		"sinhala_header": "下载僧伽罗语比特币贴纸"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "斯洛伐克语比特币贴纸",
		"slovak_description": "下载斯洛伐克语比特币贴纸文件。",
		"slovak_header": "下载斯洛伐克语比特币贴纸"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "斯洛文尼亚语比特币贴纸",
		"slovenian_description": "下载斯洛文尼亚语比特币贴纸文件。",
		"slovenian_header": "下载斯洛文尼亚语比特币贴纸"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "西班牙语比特币贴纸",
		"spanish_description": "下载西班牙语比特币贴纸文件。",
		"spanish_header": "下载西班牙语比特币贴纸"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "斯瓦希里语比特币贴纸",
		"swahili_description": "下载斯瓦希里语比特币贴纸文件。",
		"swahili_header": "下载斯瓦希里语比特币贴纸"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "瑞典语比特币贴纸",
		"swedish_description": "下载瑞典语比特币贴纸文件。",
		"swedish_header": "下载瑞典语比特币贴纸"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "泰语比特币贴纸",
		"thai_description": "下载泰语比特币贴纸文件。",
		"thai_header": "下载泰语比特币贴纸"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "土耳其语比特币贴纸",
		"turkish_description": "下载土耳其语比特币贴纸文件。",
		"turkish_header": "下载土耳其语比特币贴纸"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "乌尔都语比特币贴纸",
		"urdu_description": "下载乌尔都语比特币贴纸文件。",
		"urdu_header": "下载乌尔都语比特币贴纸"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "越南语比特币贴纸",
		"vietnamese_description": "下载越南语比特币贴纸文件。",
		"vietnamese_header": "下载越南语比特币贴纸"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "约鲁巴语比特币贴纸",
		"yoruba_description": "下载约鲁巴语比特币贴纸文件。",
		"yoruba_header": "下载约鲁巴语比特币贴纸"
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
	"english_bitcoin_accepted_here_sticker_files": "英语「此处接受比特币」贴纸文件",
	"english_biz_sticker_files_description": "下载英语贴纸文件，打印您自己的「此处接受比特币」贴纸。",
	"english_header": "下载英语「此处接受比特币」贴纸文件"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
