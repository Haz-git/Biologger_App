//Helper Function:
const handleAsync = require("../utils/handleAsync");

//Model:
const User = require('../models/userModels');

exports.addTask = handleAsync(async(req, res) => {
    //request object sends: { data: 'test' }
    const { data, _id } = req.body;
    //We have appended the data and the _id of user to the req.body. We can use the _id to find the right user to append the new task to.

    //Here, user only return taskList as indicated by .select();
    const userTaskList = await User.findOne({ _id }).select('taskList');
    userTaskList.taskList.push(data);

    await User.updateOne({ _id }, { taskList: userTaskList.taskList }, { bypassDocumentValidation: true}, (err, result) => {
        if (err) console.log(err);
    });

    //The new task should be appended to user document:

    res.status(200).json({
        status: 'Success',
        newAppendedTask: data,
    });
});

exports.getTasks = handleAsync(async(req, res) => {
    const { _id } = req.body;

    const existingUserTaskList = await User.findOne({ _id }).select('taskList');
    console.log(existingUserTaskList);

    res.status(200).json({
        status: 'Success',
        existingUserTaskList: existingUserTaskList.tastList,
    });
});
