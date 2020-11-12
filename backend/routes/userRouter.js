const express = require('express');
const { route } = require('../app');
const router = express.Router();

//Controllers:
const authController = require('../controllers/authControllers');
const chatController = require('../controllers/chatController');
const taskController = require('../controllers/taskController');
const bionoteController = require('../controllers/bionoteController');

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

//Personal User BioNote Router:

router
    .route('/bionote/create')
    .post(bionoteController.addBioNote)

router
    .route('/bionote/load')
    .post(bionoteController.getBioNotes);

router
    .route('/bionote/update')
    .patch(bionoteController.updateBioNote);

router
    .route('/bionote/delete')
    .patch(bionoteController.deleteBioNote);



module.exports = router;