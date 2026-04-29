const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/cv.html', { waitUntil: 'networkidle0' });
  
  // Hide the print button
  await page.addStyleTag({ content: '.print-btn { display: none !important; }' });
  
  const outputPath = path.join(__dirname, 'public', 'Mohamed_Diaa_CV.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  
  console.log('PDF saved to:', outputPath);
  await browser.close();
})();
