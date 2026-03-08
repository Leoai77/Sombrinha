const https = require('https');

const urls = [
  'https://ibb.co/xKqH2WYd',
  'https://ibb.co/mVg4pG14',
  'https://ibb.co/gZC0TGFJ',
  'https://ibb.co/CstRtBkx'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  for (const url of urls) {
    const html = await fetchUrl(url);
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('Not found for', url);
    }
  }
}

run();
