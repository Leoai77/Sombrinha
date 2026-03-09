const https = require('https');

const options = {
  hostname: 'files.fm',
  path: '/down.php?i=ygxa7y77k3',
  method: 'HEAD',
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};

const req = https.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
});

req.on('error', error => {
  console.error(error);
});

req.end();
