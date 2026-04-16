const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'i18n', 'en', 'common_en.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add new keys
data['common_next_contribute'] = 'Contribute';
data['common_next_contribute_desc'] = 'Get involved and help spread Bitcoin';

// Update last-updated
data['@metadata']['last-updated'] = '2026-04-16';

fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log('Added common_next_contribute and common_next_contribute_desc to common_en.json');
