/**
 * Creates Punjabi (pa) comparison files by transliterating Hindi (hi) files
 * from Devanagari to Gurmukhi script. Hindi and Punjabi share vocabulary,
 * so transliteration produces correct Punjabi text.
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'pa';
const today = '2026-04-11';

// Devanagari to Gurmukhi transliteration map
function devToGur(str) {
	if (!str || typeof str !== 'string') return str;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		// Devanagari range: U+0900-U+097F -> Gurmukhi range: U+0A00-U+0A7F
		if (code >= 0x0900 && code <= 0x097F) {
			const gurCode = code + 0x0100;
			// Check if valid Gurmukhi character exists
			const gurChar = String.fromCharCode(gurCode);
			result += gurChar;
		} else {
			result += str[i];
		}
	}
	return result;
}

function transliterateObj(obj) {
	const result = {};
	for (const [key, value] of Object.entries(obj)) {
		if (key === '@metadata') continue;
		if (typeof value === 'string') {
			result[key] = devToGur(value);
		} else {
			result[key] = value;
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
	const paData = {
		"@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang },
		...transliterateObj(hiData)
	};
	fs.mkdirSync(path.dirname(paFile), { recursive: true });
	fs.writeFileSync(paFile, JSON.stringify(paData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${paFile}`);
}

// All comparison files
const comparisonFiles = [
	'bitcoin-vs-gold',
	'bitcoin-vs-banks',
	'bitcoin-vs-stocks',
	'bitcoin-vs-cbdc',
	'bitcoin-vs-cash',
	'bitcoin-vs-crypto',
	'bitcoin-vs-bonds',
	'bitcoin-vs-fine-art',
	'bitcoin-vs-real-estate',
	'bitcoin-vs-visa'
];

for (const file of comparisonFiles) {
	const hiFile = path.join(i18nDir, 'hi', `${file}_hi.json`);
	const paFile = path.join(i18nDir, lang, `${file}_${lang}.json`);
	processFile(hiFile, paFile);
}

console.log('Done creating comparison files for Punjabi (pa).');
