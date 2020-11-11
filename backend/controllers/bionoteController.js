//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addBioNote = handleAsync(async(req, res) => {
    console.log(req.body);
})