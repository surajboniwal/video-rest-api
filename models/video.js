const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = Schema({
    _id: {
        type: Number,
        default: Date.now
    },
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    likes:{
        type: Number,
        default: 0
    },
    categoryId:{
        type: Number,
        ref: 'Category'
    },
    comments:[{
        type:Number,
        ref: 'Comment'
    }]
}, { versionKey: false });

module.exports = mongoose.model('Video', VideoSchema);