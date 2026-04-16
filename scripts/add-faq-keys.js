const fs = require('fs');
const path = require('path');

// Add new FAQ section keys to inflation_en.json
const filePath = path.join(__dirname, '..', 'i18n', 'en', 'inflation_en.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add the new keys
data['inflation_faq_label'] = 'COMMON QUESTIONS';
data['inflation_faq_heading'] = 'Frequently Asked Questions';

// Update last-updated date
data['@metadata']['last-updated'] = '2026-04-14';

fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log('Added inflation_faq_label and inflation_faq_heading to inflation_en.json');
