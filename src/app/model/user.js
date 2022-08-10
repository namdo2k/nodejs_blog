const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    email: { type: String, default: ''},
    password: { type: String, default: ''},
},
{ collection: 'users' })

users.index({ email: 1})
module.exports = mongoose.model('users', users)