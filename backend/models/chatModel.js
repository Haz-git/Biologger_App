const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    message: {
        type: String,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModels'
    },
    type: {
        type: String
    }, 
},{timestamps: true});

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;