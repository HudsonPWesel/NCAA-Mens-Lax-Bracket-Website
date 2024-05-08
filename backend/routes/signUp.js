const express = require('express');
const signUpRouter = express.Router();

signUpRouter.post('/signUp', (req, res, next) => {
	console.log(req.body);
	res.send({ data: 'DATA' });
});

module.exports = signUpRouter;
