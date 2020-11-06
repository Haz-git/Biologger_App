//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addTask = handleAsync(async(req, res) => {
    res.status(200).json({
        status: 'The addTask controller function is working.'
    });
});

exports.getTasks = handleAsync(async(req, res) => {
    res.status(200).json({
        status: 'The getTasks controller function is working.'
    });
});