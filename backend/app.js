const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to show the form
app.get('/add-product', (req, res) => {
	res.send(
		'<form action="/product" method="POST">' +
			'<input type="text" name="title">' + // Added name attribute
			'<input type="submit">' +
			'</form>'
	);
});

// Route to handle form submission
app.post('/product', (req, res) => {
	console.log(req.body); // This should now log the form data
	console.log(req.body.title); // Log the title specifically

	// Send a response back
	res.send('Product received: ' + req.body.title);
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
