#!/usr/bin/env node
/**
 * update-index-i18n-for-saving.js
 *
 * One-shot script to update i18n/en/index_en.json for the April 2026
 * homepage revamp:
 *   1. Add new key `home_btn_saving` for the new "saving" carousel pill
 *      and category section.
 *   2. Remove unused keys from the trimmed energy section:
 *        - home_card_label_energy_2, home_card_label_energy_3
 *        - home_link_title_energy_2, home_link_title_energy_3
 *        - home_link_author_bitcoin_uses_energy
 *   3. Bump `@metadata.last-updated` to today's date.
 *
 * This touches ONLY the English file. Translation files for other
 * languages will gracefully fall back to English for the new key
 * until translators add their own translations.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'i18n', 'en', 'index_en.json');
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

const raw = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(raw);

// 1. Add new saving key (insert right after home_btn_money for readability).
//    JSON object key order isn't semantically meaningful, but Node preserves
//    insertion order for string keys, so we rebuild the object manually.
const newData = {};
for (const key of Object.keys(data)) {
    // Skip keys we're removing
    if (
        key === 'home_card_label_energy_2' ||
        key === 'home_card_label_energy_3' ||
        key === 'home_link_title_energy_2' ||
        key === 'home_link_title_energy_3' ||
        key === 'home_link_author_bitcoin_uses_energy'
    ) {
        continue;
    }

    newData[key] = data[key];

    // Insert home_btn_saving right after home_btn_money
    if (key === 'home_btn_money') {
        newData['home_btn_saving'] = 'saving';
    }
}

// 2. Bump last-updated date
newData['@metadata'] = newData['@metadata'] || {};
newData['@metadata']['last-updated'] = today;

// 3. Write back with tab indentation (per project convention)
fs.writeFileSync(filePath, JSON.stringify(newData, null, '\t') + '\n', 'utf8');

console.log(`✅ Updated ${filePath}`);
console.log(`   - Added: home_btn_saving`);
console.log(`   - Removed: home_card_label_energy_2, home_card_label_energy_3, home_link_title_energy_2, home_link_title_energy_3, home_link_author_bitcoin_uses_energy`);
console.log(`   - Bumped last-updated to ${today}`);
