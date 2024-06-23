const {movieValidation} = require('../services/movie.service')

const addMovie = async function(req, res){
    const movieData = await movieValidation(req.body)
    return movieData

}

module.exports = {
    addMovie,
}