const express = require('express');

exports.getAllProfiles = (req, res, next) => {
	console.log('Getting All Profiles...');
	res.send({ data: 'lol' });
};

exports.getProfile = (req, res, next) => {
	console.log('Getting Profile...');
	console.log(req.params.profileId);

	// Protect From IDOR

	// Make call to db
	res.send({ data: req.params.profileId });
};
