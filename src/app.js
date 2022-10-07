const express = require('express');

const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('./config')
const moviesRouter = require('./movies/movies.router')

const app = express()

db.authenticate()
    //? Accion Informativa de si las credenciales son correctas
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

db.sync()
    //? Sincroniza los modelos con la base de datos, creando las tablas
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/movies', moviesRouter)



app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
