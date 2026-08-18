const fs = require('fs');
let content = fs.readFileSync('history_match.txt');
let str = '';
// It is utf16le?
if (content[0] === 0xff && content[1] === 0xfe) {
    str = content.toString('utf16le');
} else {
    str = content.toString('utf8');
}
str = str.replace(/^\uFEFF/, '').trim();
console.log("Path:", str);
try {
    fs.copyFileSync(str, 'src/app/destinations/pokhara/page.tsx');
    console.log("Restored successfully!");
} catch (e) {
    console.log(e);
}
