//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

//Controller Functions:

exports.addNewStrain = handleAsync(async (req, res) => {

    const { strainName, _id } = req.body;

    const userExistingStrains = await User.findOne({ _id }).select('laczAssay');

    userExistingStrains.laczAssay.push({ strainName });

    await User.updateOne({ _id }, { laczAssay: userExistingStrains.laczAssay }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    const responseStrainList = await User.findOne({ _id }).select('laczAssay');


    res.status(200).json({
        status: 'Success',
        strainList: responseStrainList.laczAssay,
    })
})

exports.getAllStrains = handleAsync(async (req, res) => {

    const { _id } = req.body;

    const userGetStrainList = await User.findOne({ _id }).select('laczAssay');

    res.status(200).json({
        status: 'Success',
        strainList: userGetStrainList.laczAssay,
    })
})