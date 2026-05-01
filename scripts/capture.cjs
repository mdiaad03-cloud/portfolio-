const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Starting Puppeteer...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set a good desktop viewport
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to live portfolio...");
  await page.goto('https://mdiaad03-cloud.github.io/portfolio-/', { waitUntil: 'networkidle0' });

  // Wait a bit for Framer Motion initial animations to finish
  await new Promise(r => setTimeout(r, 2000));

  const screenshotsDir = path.join(__dirname, '..', 'docs', 'screenshots');
  if (!fs.existsSync(screenshotsDir)){
      fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log("Capturing Hero section...");
  await page.screenshot({ path: path.join(screenshotsDir, 'hero.png') });

  console.log("Scrolling to Bento Grid...");
  await page.evaluate(() => {
    document.getElementById('bento-grid').scrollIntoView();
  });
  
  // Wait for scroll animations to trigger and finish
  await new Promise(r => setTimeout(r, 2000));

  console.log("Capturing Bento Grid section...");
  await page.screenshot({ path: path.join(screenshotsDir, 'bento_grid.png') });

  console.log("Screenshots captured successfully!");
  await browser.close();
})();
