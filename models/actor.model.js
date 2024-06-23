const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    bio: String
});

export const Actor = mongoose.model('Actor', actorSchema);