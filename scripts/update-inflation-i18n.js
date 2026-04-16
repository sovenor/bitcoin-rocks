const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'i18n', 'en', 'inflation_en.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update last-updated date
data['@metadata']['last-updated'] = '2026-04-14';

// Add new i18n keys for USD section labels and titles
data['inflation_section_problem'] = 'THE PROBLEM';
data['inflation_section_problem_title'] = 'Your Money Is Losing Value';
data['inflation_section_solution'] = 'THE SOLUTION';
data['inflation_section_solution_title'] = 'Can Bitcoin Protect Your Money?';
data['inflation_section_calculator'] = 'INFLATION CALCULATOR';
data['inflation_section_calculator_title'] = 'How Does Inflation Affect Me?';
data['inflation_section_more_debt'] = 'More federal debt means more money printing. More money printing means more inflation. And there\'s no sign of it stopping.';

// Add stat card keys for the supply comparison duo
data['inflation_stat_bitcoin_label'] = 'BITCOIN';
data['inflation_stat_bitcoin_value'] = '21 Million';
data['inflation_stat_bitcoin_numeric'] = '(21,000,000)';
data['inflation_stat_bitcoin_detail'] = 'Fixed forever';
data['inflation_stat_bitcoin_source'] = 'Source: Bitcoin Whitepaper →';
data['inflation_stat_usd_label'] = 'US DOLLAR';
data['inflation_stat_usd_value'] = '19.4 Trillion';
data['inflation_stat_usd_numeric'] = '(19,400,000,000,000)';
data['inflation_stat_usd_detail'] = 'And counting...';
data['inflation_stat_usd_source'] = 'Source: FRED M1 →';

fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log('Updated inflation_en.json with new i18n keys');
