//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addTask = handleAsync(async(req, res) => {
    //Find user model, first what's in our request object?
    //request object sends: { data: 'test' }
    console.log(req.body);
    //We have appended the data and the _id of user to the req.body. We can use the _id to find the right user to append the new task to.

    //Find user model:

    res.status(200).json({
        status: 'The addTask controller function is working.'
    });
});

exports.getTasks = handleAsync(async(req, res) => {
    res.status(200).json({
        status: 'The getTasks controller function is working.'
    });
});

/* Hey! You left off here last night. Try to implement a feature to get into the user model, find the correct user model (maybe using the JWT? Does it work like that?) and append a NEW task into an array of tasks. This way, all tasks are unique to each profile. We can then return all the tasks to be mapped out and rendered in the front end. The challenge here is to verify/ find which user is adding to his/her task! */