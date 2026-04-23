#!/usr/bin/env node
// One-off cleanup: remove the `kit` BIZ_RESOURCES entry from business/* pages.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const FILES = [
	'app/[locale]/business/page.tsx',
	'app/[locale]/business/maps/page.tsx',
	'app/[locale]/business/accounting/page.tsx',
	'app/[locale]/business/stickers/page.tsx',
	'app/[locale]/business/faq/page.tsx',
	'app/[locale]/business/sticker-files/english/page.tsx',
	'app/[locale]/business/wallets/page.tsx',
];

let totalRemoved = 0;
for (const rel of FILES) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		console.log('SKIP (missing): ' + rel);
		continue;
	}
	const original = fs.readFileSync(abs, 'utf8');
	const lines = original.split('\n');
	const out = [];
	let i = 0;
	let removedHere = false;
	while (i < lines.length) {
		// Look for an opening "{" followed within ~10 lines by key: "kit" and titleKey: "common_biz_kit"
		if (
			lines[i].match(/^\s*\{\s*$/) &&
			lines.slice(i + 1, i + 10).some((l) => l.includes('key: "kit"')) &&
			lines.slice(i + 1, i + 10).some((l) => l.includes('titleKey: "common_biz_kit"'))
		) {
			// Find the matching closing brace "},"
			let j = i + 1;
			let depth = 1;
			while (j < lines.length && depth > 0) {
				const line = lines[j];
				for (const ch of line) {
					if (ch === '{') depth++;
					else if (ch === '}') depth--;
					if (depth === 0) break;
				}
				j++;
			}
			// skip lines [i, j)
			i = j;
			removedHere = true;
			continue;
		}
		out.push(lines[i]);
		i++;
	}
	const updated = out.join('\n');
	if (original === updated) {
		console.log('no change: ' + rel);
		continue;
	}
	fs.writeFileSync(abs, updated);
	totalRemoved++;
	console.log('UPDATED: ' + rel + ' (removed=' + removedHere + ')');
}
console.log('\nTotal files updated: ' + totalRemoved);
