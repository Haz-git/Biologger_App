//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

//Controller Functions:

exports.addNewStrain = handleAsync(async (req, res) => {
    console.log(req.body);


    // res.status(200).json({
    //     status: 'Success',

    // })
})

exports.getAllStrains = handleAsync(async (req, res) => {
    console.log(req.body);
})