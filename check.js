const fs = require("fs");

const folders = ["mustang", "chitwan", "lumbini", "palpa", "baglung", "kathmandu"];
const output = [];

for (const dest of folders) {
    try {
        const page = fs.readFileSync("src/app/destinations/" + dest + "/page.tsx", "utf8");
        const data = fs.readFileSync("src/data/destinations/" + dest + "/" + dest + ".ts", "utf8");
        const pageMatch = [...page.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
        const dataMatch = [...data.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

        // Ignore anything like 'explore-mustang-tour' etc and just look at the missing slugs.
        // It's possible the slug matching caught tours. Let's filter out ones ending in '-tour' or '-escape' etc.
        const filter = (arr) => arr.filter(s => s !== dest && !s.includes('-tour') && !s.includes('-escape') && !s.includes('-highlights') && !s.includes('adventure') && !s.includes('circuit'));

        const pPl = filter(pageMatch);
        const dPl = filter(dataMatch);

        const missing = pPl.filter(x => !dPl.includes(x));
        if (missing.length > 0) {
            output.push({ destination: dest, missing });
        }
    } catch (e) {
    }
}

fs.writeFileSync("result.json", JSON.stringify(output, null, 2));
