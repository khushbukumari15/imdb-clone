import { Movie } from "../models/movie.model";


const createMovieDb = async (value) => {
    const movie = await Movie.create(value);
    return movie;
  };

module.exports = {
    createMovieDb,
}