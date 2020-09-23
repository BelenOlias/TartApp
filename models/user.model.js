const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    username: {
        type: String, 
        required: true,
        default: 'username',
        trim: true
    },

    password: {
        type: String, 
        required: true,
        default: 'password',
        minlength: 5,
        trim: true
    },

    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },

    favourites: {
        type: [String]
    },

}, {
    
    timestamps: true

});

const User = mongoose.model('User', userSchema);

module.exports = User