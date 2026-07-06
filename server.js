// create a http server and run it
// 1. import the http module
const http = require('http');

// 2. create a server instance
// whenever we receive a http request, the request listener is executed
const server = http.createServer((request, response) => {
  // sending a plaintext
  // response.writeHead(200, {
  //   'Content-Type': 'text/plain',
  // });

  // response.writeHead(200, {
  //   'content-type': 'text/html'
  // });
  //   response.write(`<!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <title>My First Node.js Server</title>
  //     </head>
  //     <body>
  //       <h1>Hello from my first Node.js server!</h1>
  //     </body>
  //   </html>`);
  //   response.end();
  // });
  
  response.writeHead(200, {
    'content-type': 'application/json'
  });

  response.write(JSON.stringify({ "message": "Hello World!" }));
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