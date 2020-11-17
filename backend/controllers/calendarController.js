//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addNewEvent = handleAsync(async (req, res) => {

    const { _id, event } = req.body;
    
    const userCalendarEvents = await User.findOne({ _id }).select('calendarEvents');

    userCalendarEvents.calendarEvents.push(event);

    await User.updateOne({ _id }, { calendarEvents: userCalendarEvents.calendarEvents }, { bypassDocumentValidation: true}, (err) => {
        if (err) console.log(err);
    });

    const userNewCalendarEvents = await User.findOne({ _id }).select('calendarEvents');

    res.status(200).json({
        status: 'Success',
        userNewCalendarEvents: userNewCalendarEvents.calendarEvents,
    })
})

exports.getAllEvents = handleAsync(async (req, res) => {
    const { _id } = req.body;

    const existingUserCalendarEvents = await User.findOne({ _id }).select('calendarEvents');

    res.status(200).json({
        status: 'Success',
        existingUserCalendarEvents: existingUserCalendarEvents.calendarEvents,
    })
})