import https from 'https';

const urls = [
  'https://ibb.co/MymqP9NN',
  'https://ibb.co/gZ6qn8Bz',
  'https://ibb.co/mFX7zGYh',
  'https://ibb.co/hJ08dNpP',
  'https://ibb.co/9H42THnM'
];

async function fetchUrl(url: string): Promise<string> {
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
