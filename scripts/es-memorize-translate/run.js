#!/usr/bin/env node
// Add new memorize-your-seed-phrase keys to existing Spanish (es) i18n files.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const TODAY = '2026-04-30';

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, '\t') + '\n', 'utf8');
}

// --- index_es.json ---
const indexPath = path.join(ROOT, 'i18n', 'es', 'index_es.json');
const indexObj = readJson(indexPath);

const indexAdditions = {
	home_card_label_self_custody_4: 'Copia de seguridad de último recurso',
	home_link_title_self_custody_4: 'Cómo guardar Bitcoin en tu cerebro',
};

for (const [k, v] of Object.entries(indexAdditions)) {
	indexObj[k] = v;
}
if (indexObj['@metadata']) {
	indexObj['@metadata']['last-updated'] = TODAY;
}
writeJson(indexPath, indexObj);
console.log(`Updated ${path.relative(ROOT, indexPath)} with ${Object.keys(indexAdditions).length} keys.`);

// --- wallets_es.json ---
const walletsPath = path.join(ROOT, 'i18n', 'es', 'wallets_es.json');
const walletsObj = readJson(walletsPath);

const walletsAdditions = {
	wallets_s6_c4b_a: 'Para una capa más de resistencia, también puedes',
	wallets_s6_c4b_b: 'memorizar tu frase de recuperación',
	wallets_s6_c4b_c: 'como una copia de seguridad invisible que viaja contigo.',
};

for (const [k, v] of Object.entries(walletsAdditions)) {
	walletsObj[k] = v;
}
if (walletsObj['@metadata']) {
	walletsObj['@metadata']['last-updated'] = TODAY;
}
writeJson(walletsPath, walletsObj);
console.log(`Updated ${path.relative(ROOT, walletsPath)} with ${Object.keys(walletsAdditions).length} keys.`);
