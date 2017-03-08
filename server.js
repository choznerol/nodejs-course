var http = require('http')

var port = process.env.PORT || 1337;

var app = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
})

app.listen(port);
console.log('Server running at http://127.9.9.1:' + port);
