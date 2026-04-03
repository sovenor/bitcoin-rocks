/**
 * Creates Japanese (ja) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ja';
const today = '2026-04-02';

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
	"bitcoin_sticker_files_all_languages": "ビットコインステッカーファイル：全言語",
	"sticker_files_description": "使いやすいビットコインステッカーファイルをダウンロードして、自分でステッカーを印刷しましょう。",
	"sticker_files_header": "ビットコインステッカーファイル"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'アフリカーンス語' },
	{ dir: 'arabic', name: 'アラビア語' },
	{ dir: 'basque', name: 'バスク語' },
	{ dir: 'bulgarian', name: 'ブルガリア語' },
	{ dir: 'catalan', name: 'カタルーニャ語' },
	{ dir: 'chinese', name: '中国語' },
	{ dir: 'croatian', name: 'クロアチア語' },
	{ dir: 'czech', name: 'チェコ語' },
	{ dir: 'danish', name: 'デンマーク語' },
	{ dir: 'dutch', name: 'オランダ語' },
	{ dir: 'english', name: '英語' },
	{ dir: 'estonian', name: 'エストニア語' },
	{ dir: 'filipino', name: 'フィリピン語' },
	{ dir: 'finnish', name: 'フィンランド語' },
	{ dir: 'french', name: 'フランス語' },
	{ dir: 'german', name: 'ドイツ語' },
	{ dir: 'greek', name: 'ギリシャ語' },
	{ dir: 'hausa', name: 'ハウサ語' },
	{ dir: 'hebrew', name: 'ヘブライ語' },
	{ dir: 'hindi', name: 'ヒンディー語' },
	{ dir: 'hungarian', name: 'ハンガリー語' },
	{ dir: 'indonesian', name: 'インドネシア語' },
	{ dir: 'irish', name: 'アイルランド語' },
	{ dir: 'italian', name: 'イタリア語' },
	{ dir: 'japanese', name: '日本語' },
	{ dir: 'korean', name: '韓国語' },
	{ dir: 'malay', name: 'マレー語' },
	{ dir: 'norwegian', name: 'ノルウェー語' },
	{ dir: 'persian', name: 'ペルシア語' },
	{ dir: 'polish', name: 'ポーランド語' },
	{ dir: 'portuguese', name: 'ポルトガル語' },
	{ dir: 'russian', name: 'ロシア語' },
	{ dir: 'sinhala', name: 'シンハラ語' },
	{ dir: 'slovak', name: 'スロバキア語' },
	{ dir: 'slovenian', name: 'スロベニア語' },
	{ dir: 'spanish', name: 'スペイン語' },
	{ dir: 'swahili', name: 'スワヒリ語' },
	{ dir: 'swedish', name: 'スウェーデン語' },
	{ dir: 'thai', name: 'タイ語' },
	{ dir: 'turkish', name: 'トルコ語' },
	{ dir: 'urdu', name: 'ウルドゥー語' },
	{ dir: 'vietnamese', name: 'ベトナム語' },
	{ dir: 'yoruba', name: 'ヨルバ語' }
];

for (const sl of stickerLanguages) {
	const keyPrefix = sl.dir;
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${keyPrefix}_bitcoin_sticker_files`]: `${sl.name}のビットコインステッカーファイル`,
		[`${keyPrefix}_description`]: `${sl.name}のビットコインステッカーファイルをここからダウンロードしてください。`,
		[`${keyPrefix}_header`]: `${sl.name.toUpperCase()}のビットコインステッカーファイルをダウンロード`
	});
}

console.log('\nDone! Sticker files created for Japanese (ja).');
