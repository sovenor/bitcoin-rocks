/**
 * Creates Punjabi (pa) content pages by transliterating Hindi (hi) from Devanagari to Gurmukhi.
 * Covers: bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'pa';
const today = '2026-04-11';

function devToGur(str) {
	if (!str || typeof str !== 'string') return str;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (code >= 0x0900 && code <= 0x097F) {
			result += String.fromCharCode(code + 0x0100);
		} else {
			result += str[i];
		}
	}
	return result;
}

function processFile(hiFile, paFile) {
	if (!fs.existsSync(hiFile)) {
		console.log(`SKIP (not found): ${hiFile}`);
		return;
	}
	const hiData = JSON.parse(fs.readFileSync(hiFile, 'utf8'));
	const paData = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
	for (const [key, value] of Object.entries(hiData)) {
		if (key === '@metadata') continue;
		paData[key] = typeof value === 'string' ? devToGur(value) : value;
	}
	fs.mkdirSync(path.dirname(paFile), { recursive: true });
	fs.writeFileSync(paFile, JSON.stringify(paData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${paFile}`);
}

// All content files
const contentFiles = [
	'bank-runs',
	'wallets',
	'buy',
	'lightning',
	'stickers',
	'postcards',
	'signs',
	'flyers',
	'get-involved'
];

for (const file of contentFiles) {
	const hiFile = path.join(i18nDir, 'hi', `${file}_hi.json`);
	const paFile = path.join(i18nDir, lang, `${file}_${lang}.json`);
	processFile(hiFile, paFile);
}

console.log('Done creating content files for Punjabi (pa).');
