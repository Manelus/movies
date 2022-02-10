let db = require('../db');

MovieModel = {};

//Defino las funciones que se ejecutaran en los endpoints
MovieModel.findAll = () => db;

MovieModel.findById = (id) => db.find(movie => movie.id == id);

MovieModel.post = (newMovie) => {
    db.push(newMovie);
    return newMovie;
}

MovieModel.update = (newMovie) => {
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(newMovie);
    db = movies;
    return newMovie;
}

MovieModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db = movies;
    return `Registro ${id} eliminado correctamente`;
}

//Exporto la funcionalidad del modelo de datos
module.exports = MovieModel;