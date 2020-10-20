const handleAsync = require('../utils/handleAsync');
const bcrypt = require('bcryptjs');
const User = require('../models/userModels');
const jwt = require('jsonwebtoken');

//Creating function to sign JWT:
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

exports.signup = handleAsync(async(req, res, next) => {

    //Extracting Request User Data:
    const {
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
    } = req.body;

    //Creating new User in DB:
    const newUser = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(200).json({
        status: 'Success',
        token,
        message: 'This User has been added to the DB',
        completed: true,
        data: {
            user: newUser
        }
    });
});

exports.login = (req, res) => {
    res.status(200).json({
        Message: "This should log you back in",
    })
}