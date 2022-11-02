const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'txt/html');
  response.statusCode = 200;

  const { url, method } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.end('<h1>Halaman ini adalah Homepage</h1>');
    } else {
      response.end(`<h1>Halaman tidak dapat diakses dengan ${ method } request</h1>`);
    }
  } else if (url === '/about') {
    response.end('<h1>Halaman ini adalah About</h1>');
  } else {
    response.end('<h1>Halaman tidak ditemukan!</h1>');
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${ host }:${ port }`);
});
