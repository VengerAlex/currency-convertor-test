const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    fullName: {type: String, unique: false, required: true},
    password: {type: String, required: true},
    avatarUrl: {type: String, required: false},
}, {timestamps: true});

module.exports = model('User', UserSchema);