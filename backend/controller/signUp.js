const User = require('../model/User');

exports.postCreateUser = (req, res, next) => {
	const { firstName, lastName, email } = req.body;
	const newUser = new User(firstName, lastName, email);
	console.log(req.body);
	console.log(newUser);
	res.send({ data: newUser });
};
