const handleAsync = require('../utils/handleAsync');

exports.signup = handleAsync( async(req, res, next) => {




    res.status(200).json({
        Message: "This route should create a new account and sign you up",
    })
});

exports.login = (req, res) => {
    res.status(200).json({
        Message: "This should log you back in",
    })
}