#!/usr/bin/env node
const puppeteer = require('puppeteer');
const argv = require('yargs')
    .usage('Usage: $0 -o [outfile] -u [url]')
    .help('h')
    .alias('h', 'help')
    .alias('o', 'output')
    .describe('o', 'output image to path/file')
    .alias('u', 'url')
    .describe('u', 'url to grab for screen shooting')
    .demandOption(['o','u'])
    .epilog('copyright 2019')
    .argv

console.log('(u=%s,o=%s)', argv.u, argv.o);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 3200,
        deviceScaleFactor: 1,
    });
    await page.goto(argv.u);
    await page.screenshot({path: argv.o});

    await browser.close();
})();
