//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

//uuid:

const { v4: uuid } = require('uuid');

//Controller Functions:

exports.addNewStrain = handleAsync(async (req, res) => {

    const { strainName, _id } = req.body;

    const userExistingStrains = await User.findOne({ _id }).select('laczAssay');

    userExistingStrains.laczAssay.push({
        strainName,
        strainId: uuid(),
    });

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

exports.editStrainName = handleAsync(async (req,res) => {
    const { currentStrainId, newStrainName, _id } = req.body;

    const userExistingStrains = await User.findOne({ _id }).select('laczAssay');

    console.log(userExistingStrains);

    //Look for currentStrainId match in array of objects:

    userExistingStrains.laczAssay.find(x => x.strainId === currentStrainId)['strainName'] = newStrainName;

    await User.updateOne({ _id }, { laczAssay: userExistingStrains.laczAssay }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    const responseUpdatedStrainList = await User.findOne({ _id }).select('laczAssay');

    res.status(200).json({
        status: 'Success',
        strainList: responseUpdatedStrainList.laczAssay,
    });
});