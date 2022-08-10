const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
    title: { type: String, default: 'hahaha' },
    content: { type: String, maxLength: 255 },
    image: { type: String, default: null},
    slug: { type: String, default: null},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('course', course);