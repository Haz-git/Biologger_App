//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

//uuid:

const { v4: uuid } = require('uuid');

//Controller Functions:

exports.addNewProtocol = handleAsync(async (req, res) => {

    const { protocolName, _id } = req.body;

    const userExistingProtocols = await User.findOne({ _id }).select('laczAssayProtocols');

    userExistingProtocols.laczAssayProtocols.push({
        protocolName,
        protocolId: uuid(),
    });

    await User.updateOne({ _id }, { laczAssayProtocols: userExistingProtocols.laczAssayProtocols }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    const responseProtocolList = await User.findOne({ _id }).select('laczAssayProtocols');


    res.status(200).json({
        status: 'Success',
        laczAssayProtocols: responseProtocolList.laczAssayProtocols,
    })
})

exports.getAllProtocols = handleAsync(async (req, res) => {

    const { _id } = req.body;

    const userGetProtocolList = await User.findOne({ _id }).select('laczAssayProtocols');

    res.status(200).json({
        status: 'Success',
        laczAssayProtocols: userGetProtocolList.laczAssayProtocols,
    })
})

exports.editProtocolName = handleAsync(async (req,res) => {
    const { currentProtocolId, newProtocolName, _id } = req.body;

    const userExistingProtocols = await User.findOne({ _id }).select('laczAssayProtocols');

    //Look for currentProtocolId match in array of objects:

    userExistingProtocols.laczAssayProtocols.find(x => x.protocolId === currentProtocolId)['protocolName'] = newProtocolName;

    await User.updateOne({ _id }, { laczAssayProtocols: userExistingProtocols.laczAssayProtocols }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    const responseUpdatedProtocolList = await User.findOne({ _id }).select('laczAssayProtocols');

    res.status(200).json({
        status: 'Success',
        laczAssayProtocols: responseUpdatedProtocolList.laczAssayProtocols,
    });
});