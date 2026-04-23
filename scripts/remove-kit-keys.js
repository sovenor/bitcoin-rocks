#!/usr/bin/env node
// Remove kit-related i18n keys from all language files.
//
//  - common_*.json:   drop every common_kit_* key + common_biz_kit
//  - business/index_*.json: drop biz_label_kit
//  - home_*_business_3 keys (home_card_label_business_3, home_link_title_business_2)
//    from index_*.json since we removed that homepage card.
//
// Also deletes the i18n/<lang>/business/files/ directories (which held the
// sub-page translations for the merged-into-kit "files" page) since the
// kit page is gone entirely.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const I18N = path.join(ROOT, 'i18n');

const COMMON_KEYS_TO_REMOVE = new Set([
	'common_kit_printer',
	'common_kit_link_to_print',
	'common_kit_fold',
	'common_kit_fold_trifold',
	'common_kit_unfolded_size',
	'common_kit_unfolded_size_bbk',
	'common_kit_paper_thickness',
	'common_kit_paper_thickness_standard',
	'common_kit_paper_stock',
	'common_kit_paper_stock_glossy',
	'common_kit_exterior_print_file',
	'common_kit_interior_print_file',
	'common_kit_cta_header',
	'common_biz_kit',
]);

const INDEX_KEYS_TO_REMOVE = new Set([
	'home_card_label_business_3',
	'home_link_title_business_2',
]);

const BIZ_INDEX_KEYS_TO_REMOVE = new Set(['biz_label_kit']);

function removeKeys(filePath, keysSet) {
	if (!fs.existsSync(filePath)) return false;
	const raw = fs.readFileSync(filePath, 'utf8');
	let parsed;
	try {
		parsed = JSON.parse(raw);
	} catch (e) {
		console.log('WARN: could not parse ' + filePath);
		return false;
	}
	let changed = false;
	for (const k of keysSet) {
		if (Object.prototype.hasOwnProperty.call(parsed, k)) {
			delete parsed[k];
			changed = true;
		}
	}
	if (!changed) return false;
	const out = JSON.stringify(parsed, null, '\t') + '\n';
	fs.writeFileSync(filePath, out);
	return true;
}

const langs = fs
	.readdirSync(I18N, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name);

let commonTouched = 0;
let indexTouched = 0;
let bizIndexTouched = 0;
let filesDirsDeleted = 0;

for (const lang of langs) {
	// common_<lang>.json
	const commonPath = path.join(I18N, lang, 'common_' + lang + '.json');
	if (removeKeys(commonPath, COMMON_KEYS_TO_REMOVE)) commonTouched++;

	// index_<lang>.json (homepage)
	const indexPath = path.join(I18N, lang, 'index_' + lang + '.json');
	if (removeKeys(indexPath, INDEX_KEYS_TO_REMOVE)) indexTouched++;

	// business/index_<lang>.json
	const bizIndexPath = path.join(I18N, lang, 'business', 'index_' + lang + '.json');
	if (removeKeys(bizIndexPath, BIZ_INDEX_KEYS_TO_REMOVE)) bizIndexTouched++;

	// Delete i18n/<lang>/business/files/ directory if present (legacy kit pages)
	const filesDir = path.join(I18N, lang, 'business', 'files');
	if (fs.existsSync(filesDir)) {
		fs.rmSync(filesDir, { recursive: true, force: true });
		filesDirsDeleted++;
	}
}

console.log('common_*.json updated:         ' + commonTouched);
console.log('index_*.json updated:          ' + indexTouched);
console.log('business/index_*.json updated: ' + bizIndexTouched);
console.log('business/files/ dirs removed:  ' + filesDirsDeleted);
