const express = require('express');
const signUpRouter = express.Router();

signUpRouter.use('/signUp', (req, res, next) => {
	console.log(req.body);
	res.send({ data: 'DATA' });
});

module.exports = signUpRouter;
