/**
 * Updates the language count in all about_xx.json files.
 *
 * Usage:
 *   node scripts/update-about-lang-count.js <newCount>
 *
 * Example:
 *   node scripts/update-about-lang-count.js 37
 *
 * The script auto-discovers every i18n/{lang}/about_{lang}.json file, detects which
 * numeral system the translation uses (Western 0-9, Burmese, Bengali, etc.),
 * finds the number in the `about_open_source_3` string, and replaces it
 * with the new count in that same numeral system.
 *
 * No hardcoded translation list is needed — just pass the new number.
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Numeral-system helpers
// ---------------------------------------------------------------------------

// Known numeral systems: mapping from zero-digit to the full digit set.
// We only need the zero character to identify the system; the rest follow
// sequentially in Unicode.
const NUMERAL_SYSTEMS = [
	{ name: 'Western',    zero: '0' },                // U+0030
	{ name: 'Bengali',    zero: '\u09E6' },            // ০
	{ name: 'Burmese',    zero: '\u1040' },            // ၀
	{ name: 'Devanagari', zero: '\u0966' },            // ०
	{ name: 'Thai',       zero: '\u0E50' },            // ๐
	{ name: 'Arabic-Indic', zero: '\u0660' },          // ٠
	{ name: 'Ext Arabic-Indic', zero: '\u06F0' },      // ۰  (Persian/Urdu)
	{ name: 'Tamil',      zero: '\u0BE6' },            // ௦
	{ name: 'Ethiopic',   zero: '\u1369' },            // ፩ (Ethiopic starts at 1, special case – skip)
];

/**
 * Build a regex that matches a sequence of digits from ANY of the known
 * numeral systems (2+ digits to avoid false positives on single-digit
 * characters that might appear elsewhere).
 */
function buildDigitRegex() {
	const charClasses = NUMERAL_SYSTEMS.map(sys => {
		const zeroCode = sys.zero.charCodeAt(0);
		const nineCode = zeroCode + 9;
		return `${sys.zero}-${String.fromCharCode(nineCode)}`;
	}).join('');
	// Match a run of 2+ digits from any system (language counts are always >= 10)
	return new RegExp(`[${charClasses}]{2,}`, 'g');
}

/**
 * Detect which numeral system a digit string uses by checking the first char.
 * Returns the zero-character for that system.
 */
function detectZero(digitStr) {
	const code = digitStr.charCodeAt(0);
	for (const sys of NUMERAL_SYSTEMS) {
		const z = sys.zero.charCodeAt(0);
		if (code >= z && code <= z + 9) return sys.zero;
	}
	return '0'; // fallback to Western
}

/**
 * Convert a digit string in any numeral system to a Western integer.
 */
function toWestern(digitStr) {
	const zero = detectZero(digitStr);
	const zeroCode = zero.charCodeAt(0);
	let num = 0;
	for (const ch of digitStr) {
		num = num * 10 + (ch.charCodeAt(0) - zeroCode);
	}
	return num;
}

/**
 * Convert a Western integer to a digit string in the given numeral system
 * (identified by its zero character).
 */
function fromWestern(num, zero) {
	const zeroCode = zero.charCodeAt(0);
	return String(num)
		.split('')
		.map(d => String.fromCharCode(zeroCode + Number(d)))
		.join('');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const newCount = parseInt(process.argv[2], 10);
if (!newCount || newCount < 1) {
	console.error('Usage: node scripts/update-about-lang-count.js <newCount>');
	console.error('Example: node scripts/update-about-lang-count.js 37');
	process.exit(1);
}

const i18nDir = path.join(__dirname, '..', 'i18n');
const today = new Date().toISOString().split('T')[0];
const digitRegex = buildDigitRegex();

let updatedCount = 0;
let skippedCount = 0;
let errorCount = 0;

// Discover all language directories
const langDirs = fs.readdirSync(i18nDir).filter(d =>
	fs.statSync(path.join(i18nDir, d)).isDirectory()
);

for (const lang of langDirs.sort()) {
	const filePath = path.join(i18nDir, lang, `about_${lang}.json`);

	if (!fs.existsSync(filePath)) {
		// Not every language dir necessarily has an about file yet
		continue;
	}

	const raw = fs.readFileSync(filePath, 'utf8');
	let content;
	try {
		content = JSON.parse(raw);
	} catch (e) {
		console.error(`ERROR: Could not parse ${filePath}: ${e.message}`);
		errorCount++;
		continue;
	}

	const oldText = content.about_open_source_3;
	if (!oldText) {
		console.log(`SKIP: ${lang} — no about_open_source_3 key`);
		skippedCount++;
		continue;
	}

	// Find all digit sequences in the string
	const matches = [...oldText.matchAll(digitRegex)];
	if (matches.length === 0) {
		console.log(`SKIP: ${lang} — no number found in about_open_source_3`);
		skippedCount++;
		continue;
	}

	// Use the first number match (there should only be one — the language count)
	const match = matches[0];
	const oldDigits = match[0];
	const oldNum = toWestern(oldDigits);
	const zero = detectZero(oldDigits);
	const newDigits = fromWestern(newCount, zero);

	if (oldDigits === newDigits) {
		console.log(`OK (no change): ${lang} — already ${oldNum}`);
		continue;
	}

	const newText = oldText.replace(oldDigits, newDigits);
	content.about_open_source_3 = newText;
	content['@metadata']['last-updated'] = today;

	fs.writeFileSync(filePath, JSON.stringify(content, null, '\t') + '\n', 'utf8');
	console.log(`UPDATED: ${lang} — ${oldNum} → ${newCount} (${oldDigits} → ${newDigits})`);
	updatedCount++;
}

console.log(`\nDone. Updated ${updatedCount} file(s), skipped ${skippedCount}, errors ${errorCount}.`);
