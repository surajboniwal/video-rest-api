const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    _id: {
        type: Number,
        default: Date.now
    },
    title: {
        type: String,
    },
    featured: {
        type: String,
    },
    videos: [{
        type: Number,
        ref: 'Video'
    }]
}, { versionKey: false });

module.exports = mongoose.model('Category', CategorySchema);