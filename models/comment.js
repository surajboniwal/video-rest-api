const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
    _id: {
        type: Number,
        default: Date.now
    },
    user: {
        type: String,
    },
    comment: {
        type: String,
    }
}, { versionKey: false });

module.exports = mongoose.model('Comment', CommentSchema);