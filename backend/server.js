e/ const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const signUpRouter = require('./routes/signUp');
const profileRouter = require('./routes/profile');

const app = express();

// Middlewware
// Populating the reqeust with parsed body TODO: SANITIZE DATA

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
	);
	next();
});

app.use(signUpRouter);
app.use(profileRouter);

app.use('/', (req, res, next) => {
	console.log('Hello From sign up main middleware!');
});


// Middlewware
app.listen(3001);
