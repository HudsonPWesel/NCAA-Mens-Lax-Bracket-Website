const User = require('../model/User');
exports.postCreateUser = (req, res, next) => {
	const { fname, lname, email } = req.body;
	const newUser = new User(fname, lname, email);
	console.log(req.body);
	res.send({ data: newUser });
};
