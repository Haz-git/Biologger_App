//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addNewEvent = handleAsync(async (req, res) => {
    console.log(req.body);

    res.status(200).json({
        status: 'Success',
        message: 'This route is working!'
    })
})