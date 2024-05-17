const express = require('express');
const profileController = require('../controller/profileController');
const profileRouter = express.Router();

profileRouter.use('/profile', profileController.getAllProfiles);
profileRouter.get('/profile/:profileId', profileController.getProfile);

module.exports = profileRouter;


