//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addBioNote = handleAsync(async(req, res) => {
    
    console.log(req.body);


    res.status(200).json({
        status: 'Success',
        message: 'Connected Successfully to this route in the API'
    });
})