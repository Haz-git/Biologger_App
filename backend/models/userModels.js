const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A user requires a first name!']
    },
    lastName: {
        type: String,
        required: [true, 'A user requires a last name!']
    },
    userName: {
        type: String,
        required: [true, 'Please enter your desired username!'],
        minlength: [4, 'Please create a username greater than 4 characters'],
        maxlength: [15, 'Please create a username less than 15 characters!'],
        unique: [true, 'Sorry, this username has already been taken!'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address for your new account!'],
        unique: [true, 'Sorry! Someone else has already registered under this email address!'],
        validate: {
            validator: validator.isEmail(),
            message: 'Please input a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password!'],
        minlength: [6, 'Please enter a password greater than 6 characters!'],
        maxlength: [20, 'Passwords cannot be over 20 characters'],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password!'],
        validate: {
            validator: function() {
                this.passwordConfirm === this.password
            },
            message: 'Your passwords do not match!'
        }
    }
})

module.exports = mongoose.model('userModel', userSchema);