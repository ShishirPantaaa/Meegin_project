const fs = require('fs');
const path = require('path');
const historyDir = path.join(process.env.APPDATA, 'Code', 'User', 'History');
const matches = [];
function search(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            search(fullPath);
        } else {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('export default function PokharaPage()') && content.includes('/images/destinations/pokhara/mountain-museum.jpg')) {
                    matches.push({ file: fullPath, size: content.length });
                }
            } catch (e) { }
        }
    }
}
search(historyDir);
fs.writeFileSync('result.json', JSON.stringify(matches, null, 2));
