#!/usr/bin/env node
const argv = require('yargs').argv
const puppeteer = require('puppeteer');

console.log('(%s,%s)', argv.u, argv.o);

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
