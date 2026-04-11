const fs = require('fs');
const p = require('path').join(__dirname, 'create-simple-files.js');
let c = fs.readFileSync(p, 'utf8');
// Find and replace the corrupted escape: line contains ਮੱਗਰੀ followed by bad char then ੂੰ
// The bad sequence is the bytes for \u0A followed by replacement char U+FFFD then \u0A42
// We need to replace that with \u0A28\u0A42 (ਨੂ)
c = c.replace(/\\u0A.\\u0A42\\u0A70 \\u0A27/, '\\u0A28\\u0A42\\u0A70 \\u0A27');
fs.writeFileSync(p, c, 'utf8');
console.log('Fixed bad escape sequence');
