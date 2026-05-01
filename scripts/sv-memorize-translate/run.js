#!/usr/bin/env node
/**
 * Adds the new keys for the "memorize your seed phrase" page to the existing
 * Swedish (sv) translation files: index_sv.json (homepage card) and
 * wallets_sv.json (inline link from the wallets guide).
 *
 * Bumps @metadata.last-updated to 2026-04-30 on both files.
 *
 * Tab indentation preserved via JSON.stringify(obj, null, '\t').
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const I18N = path.join(ROOT, 'i18n', 'sv');
const TODAY = '2026-04-30';

function readJson(file) {
	const raw = fs.readFileSync(file, 'utf8');
	return JSON.parse(raw);
}

function writeJson(file, obj) {
	fs.writeFileSync(file, JSON.stringify(obj, null, '\t') + '\n', 'utf8');
}

function bumpMetadata(obj) {
	if (!obj['@metadata']) obj['@metadata'] = {};
	obj['@metadata']['last-updated'] = TODAY;
}

// ---- index_sv.json ----
const indexFile = path.join(I18N, 'index_sv.json');
const indexObj = readJson(indexFile);

const indexAdditions = {
	home_card_label_self_custody_4: 'Säkerhetskopia som sista utväg',
	home_link_title_self_custody_4: 'Hur du förvarar Bitcoin i din hjärna',
};

for (const [key, value] of Object.entries(indexAdditions)) {
	indexObj[key] = value;
}
bumpMetadata(indexObj);
writeJson(indexFile, indexObj);
console.log(`Updated ${path.relative(ROOT, indexFile)} (+${Object.keys(indexAdditions).length} keys)`);

// ---- wallets_sv.json ----
const walletsFile = path.join(I18N, 'wallets_sv.json');
const walletsObj = readJson(walletsFile);

const walletsAdditions = {
	wallets_s6_c4b_a: 'För ytterligare ett lager av motståndskraft kan du också',
	wallets_s6_c4b_b: 'memorera din seed-fras',
	wallets_s6_c4b_c: 'som en osynlig säkerhetskopia som följer med dig.',
};

for (const [key, value] of Object.entries(walletsAdditions)) {
	walletsObj[key] = value;
}
bumpMetadata(walletsObj);
writeJson(walletsFile, walletsObj);
console.log(`Updated ${path.relative(ROOT, walletsFile)} (+${Object.keys(walletsAdditions).length} keys)`);

console.log('Done.');
