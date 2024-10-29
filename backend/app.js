const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('Hello from middlware');
	next();
});

app.use((req, res, next) => {
	console.log('Hello from another middlware');
});

const server = http.createServer(app);

server.listen(3000);
