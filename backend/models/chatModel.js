const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    message: {
        type: String,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'userModels'
    },
    type: {
        type: String
    }, 
},{timestamps: true});

const chatModel = mongoose.model('chatModel', chatSchema);

module.exports = chatModel;