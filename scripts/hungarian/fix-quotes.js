const fs = require('fs');
const f = require('path').join(__dirname, 'create-comparisons.js');
let c = fs.readFileSync(f, 'utf8');
c = c.replace(/\u201E/g, '');
c = c.replace(/\u201C/g, '');
c = c.replace(/\u201D/g, '');
fs.writeFileSync(f, c, 'utf8');
console.log('Fixed typographic quotes in create-comparisons.js');
