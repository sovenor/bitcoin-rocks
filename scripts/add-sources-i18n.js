#!/usr/bin/env node

/**
 * add-sources-i18n.js
 * Adds common_sources_heading key to all common language JSON files.
 * Run once, then delete this file.
 */

const fs = require('fs');
const path = require('path');

const translations = {
  en: 'Sources',
  de: 'Quellen',
  es: 'Fuentes',
  fr: 'Sources',
  pt: 'Fontes',
  nl: 'Bronnen',
  bg: 'Източници',
  id: 'Sumber',
  th: '\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25',
  it: 'Fonti',
  pl: '\u0179r\u00F3d\u0142a'
};

let updated = 0;
for (const [lang, translation] of Object.entries(translations)) {
  const filePath = path.join(__dirname, '..', 'i18n', lang, 'common_' + lang + '.json');
  if (!fs.existsSync(filePath)) {
    console.log('  Warning: Not found: ' + filePath);
    continue;
  }
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (json.common_sources_heading) {
    console.log('  Skip: Already has key: ' + lang);
    continue;
  }
  json.common_sources_heading = translation;
  fs.writeFileSync(filePath, JSON.stringify(json, null, '\t') + '\n', 'utf8');
  console.log('  Added common_sources_heading to: ' + lang + ' (' + translation + ')');
  updated++;
}
console.log('\nUpdated ' + updated + ' language files.');
