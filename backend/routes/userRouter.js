const express = require('express');
const router = express.Router();

//Controllers:
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.test);


module.exports = router;