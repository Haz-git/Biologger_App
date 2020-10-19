const express = require('express');
const router = express.Router();

//Controllers:
const userController = require('../controllers/userController');

router
    .route('/signup')
    .post(userController.signup);

router
    .route('/login')
    .post(userController.login);
    

module.exports = router;