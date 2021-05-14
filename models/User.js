
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    discriminator: {
        type: String,
        required: true
    },
    alerts: {
        type: Boolean,
        default: false,
        required: true
    },
    districtNo: {
        type: 'String'
    }
});

module.exports = mongoose.model('user', UserSchema);