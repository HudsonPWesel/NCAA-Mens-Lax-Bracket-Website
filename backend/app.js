const http = require('http');

const server = http.createServer((req, res) => {
	res.write('<html>');
	res.write('<head><title>Enter Message</title><head>');
	res.write(
		'<body><form action="/message" method="post"><input type="text" name="message"></input></form></body>'
	);
	res.write('<html>');
	const data = [];
	req.on('data', chunk => {
		console.log(chunk);
		data.push(chunk);
	});
	req.on('end', () => {
		const parsedBody = Buffer.concat(data).toString();
		console.log(parsedBody);
	});
	res.end();
});
server.listen(3000);
