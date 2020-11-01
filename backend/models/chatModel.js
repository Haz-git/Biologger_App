const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;