// Require HTTP Node module
const http = require('http');
// Create server and listen on a port
http.createServer( (request, response) => {
    // add a HTTP header:
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Hello World!");
    response.end();
}).listen(8080);