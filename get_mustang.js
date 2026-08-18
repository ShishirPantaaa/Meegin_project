const fs = require('fs');
const page = fs.readFileSync('src/app/destinations/mustang/page.tsx', 'utf8');
const regex = /{[\s\S]*?id:\s*[\"'](?:dhakmar|chhoser-cave|ghami-village|chhoser-caves)[\"'][\s\S]*?}/g;
const matches = [...page.matchAll(regex)];
console.log(matches.map(m => m[0]).join(',\n'));
