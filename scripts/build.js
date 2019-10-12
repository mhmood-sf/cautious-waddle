const { readdirSync } = require("fs");
const { execFileSync } = require("child_process");

const root = `${__dirname}/../`;
const files = readdirSync(`${root}/src`).filter(f => f.endsWith(".c")).map(v => `${root}/src/${v}`);

try {
    const a = Date.now();

    execFileSync(`gcc`, [...files, '-o', `${root}/bin/Lox`], {
        cwd: process.cwd(),
        shell: true
    });

    const b = Date.now();

    console.log(`Build Successful [${b - a}ms] ✅`);
} catch (err) {
    console.error("Build Failed ⛔");
}
