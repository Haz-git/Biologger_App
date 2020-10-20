//Modules:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Model:
const User = require('../models/userModels');

//Utilities:
const handleAsync = require('../utils/handleAsync');
const throwAppError = require('../utils/throwAppError');

//Creating function to sign JWT:
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

//Sign up Controller:

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

//Login Controller:

exports.login = handleAsync(async (req, res, next) => {

    //1. Grab email and password from request object. Check if email and password exist.
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new throwAppError('Please enter your email and password', 400));
    }

    //2. Find email from documents in mongodb. Grab user with email and password.

    const user = await User.findOne({ email }).select('+password');

    //3. Use instance method to hash inputted password and compare with stored password to see if correct:
    //4. If match, send Token to client.

    if (user.comparePasswords(password, user.password) === false) {
        return next(new throwAppError('Sorry! Your email or password does not match!', 401))
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: 'Success',
        message: 'You are logged in.',
        token,
    })
});