# Node.js Fundamentals

## Topics

[x] Node.js Runtime & Architecture
[x] Core Modules: fs, path, http --path, fs is pending
[x] Creating a basic HTTP server
[x] Third Party Modules: nodemon

## Node.js Runtime & Architecture

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, enabling the creation of scalable and high-performance applications.

## Node.js Modules

- Node.js has built-in modules, third-party modules and custom modules.
    - Built-in modules are part of the Node.js core and can be used without any additional installation.
    - Third-party modules are packages that can be installed via npm (Node Package Manager) and provide additional functionality.
    - Custom modules are created by developers to encapsulate specific functionality and can be reused across different parts of an application.

## Core Modules: fs, path, http

- http: The http module allows you to create an HTTP server and handle HTTP requests and responses.


## Steps to Setup the Backend Application

- Create a new folder for your backend application.
- Open the folder in your code editor (VS Code)
- Add a new file named `readme.md` to the root of your project folder to document your project.
- Setup this repo as a git repository.
    - Create a new repository on GitHub.
    - Copy the repository URL.
    - In your terminal, run the following commands:
    ```bash
    git init
    git branch -M main
    git remote add origin <repository-url>
    git add .
    git commit -m "Initial commit"
    git push -u origin main
    ```
- Setup a http server using the http module.
    - Create a new file named `server.js` in the root of your project folder.
    - Add the following code to `server.js` to create a basic HTTP server:
    ```javascript
    // 1. import the http module
        const http = require('http');

        // 2. create a server instance
        // whenever we receive a http request, the request listener is executed
        const server = http.createServer((request, response) => {
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
            return;
            }

            console.log(`Server is running at http://localhost:3001`);
        });
        ```
- Setup npm in your project folder.
    

### Module Types in JavaScript

1. CommonJS Modules
    - The file extensions for CommonJS modules are `.js` and `.cjs`.
    - Exports are done using `module.exports` 
    - Imports are done using `require()`
2. ES6 Modules
    - The file extensions for ES6 modules are `.mjs` and `.js`.
    - Exports are done using `export` 
    - Imports are done using `import`