const express = require('express');
const signUpController = require('../controller/signUp');
const signUpRouter = express.Router();

signUpRouter.post('/signUp', signUpController.postCreateUser);

module.exports = signUpRouter;
