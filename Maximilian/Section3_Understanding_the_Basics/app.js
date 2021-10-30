const http_server = require("http");

const routes = require('./routes');

console.log(routes.someText);

const server = http_server.createServer(routes.handler);

server.listen(3000);
