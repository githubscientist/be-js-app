// create a http server and run it
// 1. import the http module
const http = require('http');

// 2. create a server instance
// whenever we receive a http request, the request listener is executed
const server = http.createServer((request, response) => {
  response.write('Hello World!');
  response.end();
});

// 3. start the server or listen to http requests
server
  .listen(3001, 'localhost', (error) => {
    if (error) {
      console.log('Failed to start the server');
      console.log(error);
      return; // exit the function on error
    }

    console.log(`Server is running at http://localhost:3001`);
  });