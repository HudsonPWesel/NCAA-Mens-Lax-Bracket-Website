const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('Hello from middlware');
	next();
});

app.use((req, res, next) => {
	console.log('Hello from another middlware');

	// Sets properties of request for us and ensures we don't have a hanging request
	res.send('Hello from express!');
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
