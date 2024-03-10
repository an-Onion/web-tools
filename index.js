import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import fs from 'fs';

(async () => {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'html',
    port: chrome.port,
    extraHeaders: {
      'Authorization': 'Bearer YOUR_TOKEN'
    },
    // Set the number of concurrent requests to 50
    throttling: {
      requestConcurrency: 50,
    },
    // Set the maximum number of requests to 1000
    maxWaitForLoad: 1000,
  };
  const runnerResult = await lighthouse('https://www.baidu.com/', options);

  fs.writeFileSync('./output/lighthouse-report.html', runnerResult.report);


  await chrome.kill();
})();
