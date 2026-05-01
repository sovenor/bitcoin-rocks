#!/usr/bin/env node
/**
 * Adds new memorize-seed-related keys to the existing Bengali (bn) i18n files.
 *
 * - i18n/bn/index_bn.json gets the two homepage Self-Custody #4 card keys.
 * - i18n/bn/wallets_bn.json gets the three inline-link keys for the wallets
 *   recovery-phrase section that point at /memorize-your-seed-phrase.
 *
 * Both files have their @metadata.last-updated bumped to 2026-04-30.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const TODAY = '2026-04-30';

function readJson(relativePath) {
	const abs = path.join(REPO_ROOT, relativePath);
	const raw = fs.readFileSync(abs, 'utf8');
	return { abs, data: JSON.parse(raw) };
}

function writeJson(abs, data) {
	const out = JSON.stringify(data, null, '\t') + '\n';
	fs.writeFileSync(abs, out, 'utf8');
}

// --- index_bn.json -----------------------------------------------------------

const indexAdditions = {
	home_card_label_self_custody_4: 'শেষ অবলম্বনের ব্যাকআপ',
	home_link_title_self_custody_4: 'আপনার মস্তিষ্কে কীভাবে Bitcoin সংরক্ষণ করবেন',
};

{
	const { abs, data } = readJson('i18n/bn/index_bn.json');
	for (const [key, value] of Object.entries(indexAdditions)) {
		data[key] = value;
	}
	if (data['@metadata']) {
		data['@metadata']['last-updated'] = TODAY;
	}
	writeJson(abs, data);
	console.log(`Updated ${path.relative(REPO_ROOT, abs)} (+${Object.keys(indexAdditions).length} keys)`);
}

// --- wallets_bn.json ---------------------------------------------------------

const walletsAdditions = {
	wallets_s6_c4b_a: 'আরও একটি স্তরের স্থিতিস্থাপকতার জন্য, আপনি',
	wallets_s6_c4b_b: 'আপনার সিড ফ্রেজ মুখস্থ করতে',
	wallets_s6_c4b_c: 'পারেন একটি অদৃশ্য ব্যাকআপ হিসেবে যা আপনার সাথে ভ্রমণ করে।',
};

{
	const { abs, data } = readJson('i18n/bn/wallets_bn.json');
	for (const [key, value] of Object.entries(walletsAdditions)) {
		data[key] = value;
	}
	if (data['@metadata']) {
		data['@metadata']['last-updated'] = TODAY;
	}
	writeJson(abs, data);
	console.log(`Updated ${path.relative(REPO_ROOT, abs)} (+${Object.keys(walletsAdditions).length} keys)`);
}
