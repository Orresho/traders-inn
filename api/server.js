const app = require('./index.js');
const http = require('http');

const api = http.createServer(app);

const port = process.env.PORT || 8080;

api.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
