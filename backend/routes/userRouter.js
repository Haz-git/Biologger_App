const express = require('express');
const { route } = require('../app');
const router = express.Router();

//Controllers:
const authController = require('../controllers/authControllers');

//Authentication Routers:
router
    .route('/signup')
    .post(authController.signup);

router
    .route('/login')
    .post(authController.login);

router
    .route('/logout')
    .get(authController.logout);


//User Routers:
    

module.exports = router;