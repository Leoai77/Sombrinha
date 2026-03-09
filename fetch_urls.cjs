const https = require('https');

const urls = [
  'https://ibb.co/GvDhBWy4',
  'https://ibb.co/Ldw7nx5s',
  'https://ibb.co/MymqP9NN'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/);
      if (match) {
        console.log(url, '->', match[0]);
      }
    });
  });
});
