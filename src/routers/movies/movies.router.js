const express = require('express');
const { addMovieController, getMovieController } = require('./movies.controller');
const moviesRouter = express.Router();
moviesRouter.post('/addmovie',addMovieController);
moviesRouter.get('/getmovies',getMovieController);
module.exports = moviesRouter;