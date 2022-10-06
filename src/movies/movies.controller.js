
const  uuid = require('uuid')
const Movies = require('../models/movies.models')

const getAllMovies =  () => {
    const data =  Movies.findAll() //? Traer todas las peliculas
    //? Select * from movies;
    return data
}

// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createMovie = async (data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })
    //? insert into movies (id, name, genre, duration, releaseDate) values (uuid.v4(), data.name, data.genre, data.duration, data.releaseDate)
    return newMovie
}

createMovie({
    name: 'Pacific Rim',
    genre: 'Action, SciFi',
    duration: 120,
    releaseDate: '2012/10/30'
})
    .then(response => console.log(response))
    .catch(err => console.log(err))

const getMovieById = async (id) => {
    const data = await Movies.findOne({
        where: {
            id
        }
    });
    //? Select * from movies where id = id;
    return data
}
