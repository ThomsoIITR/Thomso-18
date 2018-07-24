var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fb_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comment: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CA_Idea', UserSchema);