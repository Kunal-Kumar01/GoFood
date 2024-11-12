// user.js
const mongoose = require('mongoose');
const { Schema } = mongoose; // Corrected 'Schema' with capital 'S'

const userSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Added unique constraint
    },
    password: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
