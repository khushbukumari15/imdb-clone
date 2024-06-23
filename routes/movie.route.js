const express = require('express')
const router = express.Router()
const {addMovie} = require('../controllers/movie.controller')

router.post('/newmovie', addMovie)