const express = require('express');
const router = express.Router();

//Controllers:
const authController = require('../controllers/authControllers');
const chatController = require('../controllers/chatController');
const taskController = require('../controllers/taskController');

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



//Global Chat Router:

router
    .route('/chats')
    .get(chatController.chatLogs);
    
//Personal User Task Router:

router
    .route('/task')
    .post(taskController.addTask);

router
    .route('/getTasks')
    .post(taskController.getTasks);

router
    .route('/task/delete')
    .post(taskController.deleteTask);

module.exports = router;