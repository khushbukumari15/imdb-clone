const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    name: {type:String, required: true},
    yearOfRelease: {type:Date, required: true},
    producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer' },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
    plot: {type:String, required: true},

})


export const Movie = mongoose.model('Movie', movieSchema);
