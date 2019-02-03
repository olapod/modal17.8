var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    // response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, html) {
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(html);
            response.end();
        })
    }    
    else {
        fs.readFile('./error404.jpg', function(err, jpeg) {
            response.writeHead(404, {"Content-Type": "image/jpeg"});
            response.write(jpeg);
            response.end();
        })
    }
});

server.listen(8080);