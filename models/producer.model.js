const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    bio: String
});

export const Producer = mongoose.model('Producer', producerSchema);