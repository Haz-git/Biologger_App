const express = require('express');
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

//User Routers:
    

module.exports = router;