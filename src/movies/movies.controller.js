const uuid = require("uuid");
const Movies = require("../models/movies.models");

const getAllMovies = () => {
  const data = Movies.findAll(); //? Traer todas las peliculas
  //? Select * from movies;
  return data;
};

// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createMovie = async (data) => {
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  //? insert into movies (id, name, genre, duration, releaseDate) values (uuid.v4(), data.name, data.genre, data.duration, data.releaseDate)
  return newMovie;
};

// createMovie({
//     name: 'Pacific Rim',
//     genre: 'Action, SciFi',
//     duration: 120,
//     releaseDate: '2012/10/30'
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const getMovieById = async (id) => {
  const data = await Movies.findOne({
    where: {
      id,
    },
  });
  //? Select * from movies where id = id;
  return data; //? Si el where no encuentra nada, retorna null
};
getMovieById('8d8d45e6-a25a-4497-828b-c4f3c8183cab')
    .then((response) => console.log(response))
    .catch((err) => console.log(err))

{
  title: "Nuevo titulo";
}

const editMovie = async (id, data) => {
  const response = await Movies.update(data, {
    where: {
      id: id,
      name: 'Pacific Rim'
    },
  });
  return response;//? Si el where no encuentra nada, retorna null
};

// editMovie("c7301948-55cd-480f-9e35-c5cce59b6969", {
//   duration: "test",
//   name:""
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovie
};
