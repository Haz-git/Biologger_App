const express = require('express');
const { route } = require('../app');
const router = express.Router();

//Controllers:
const authController = require('../controllers/authControllers');
const chatController = require('../controllers/chatController');

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

router
    .route('/users/chats')
    .get(chatController.chatLogs);
    

module.exports = router;