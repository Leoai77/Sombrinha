const https = require('https');

const options = {
  hostname: 'ibb.co',
  path: '/mFX7zGYh',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/);
    if (match) {
      console.log('Found image:', match[0]);
    } else {
      console.log('No image found.');
    }
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
