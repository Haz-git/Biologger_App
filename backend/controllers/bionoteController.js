//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addBioNote = handleAsync(async(req, res) => {

    //Extract data:
    const { data, _id, bioName } = req.body;

    //Find Appropriate User and select bionotes array:
    const userExistingBioNotesCollection = await User.findOne({ _id }).select('bionotes');
    
    //Update bionotes array:
    userExistingBioNotesCollection.bionotes.push({bioName, data});

    //Update User with new bionotes array:
    await User.updateOne({ _id }, { bionotes: userExistingBioNotesCollection.bionotes }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    //Find updated user again for response:
    const userNewBioNotesCollection = await User.findOne({ _id }).select('bionotes');


    res.status(200).json({
        status: 'Success',
        userNewBioNotesCollection
    });
})

exports.getBioNotes = handleAsync(async(req, res) => {
    const { _id } = req.body;

    const userExistingBioNotesCollection = await User.findOne({ _id }).select('bionotes');

    res.status(200).json({
        status: 'Success',
        userExistingBioNotesCollection
    })
})