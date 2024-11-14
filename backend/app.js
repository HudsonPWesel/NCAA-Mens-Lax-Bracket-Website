const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const signupRouter = require('./routes/sign-up');

const app = express();

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use('/sign-up', signupRouter);

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
